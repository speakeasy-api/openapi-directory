# catalog

### Available Operations

* [batchDeleteCatalogObjects](#batchdeletecatalogobjects) - BatchDeleteCatalogObjects
* [batchRetrieveCatalogObjects](#batchretrievecatalogobjects) - BatchRetrieveCatalogObjects
* [batchUpsertCatalogObjects](#batchupsertcatalogobjects) - BatchUpsertCatalogObjects
* [catalogInfo](#cataloginfo) - CatalogInfo
* [deleteCatalogObject](#deletecatalogobject) - DeleteCatalogObject
* [listCatalog](#listcatalog) - ListCatalog
* [retrieveCatalogObject](#retrievecatalogobject) - RetrieveCatalogObject
* [searchCatalogItems](#searchcatalogitems) - SearchCatalogItems
* [searchCatalogObjects](#searchcatalogobjects) - SearchCatalogObjects
* [updateItemModifierLists](#updateitemmodifierlists) - UpdateItemModifierLists
* [updateItemTaxes](#updateitemtaxes) - UpdateItemTaxes
* [upsertCatalogObject](#upsertcatalogobject) - UpsertCatalogObject

## batchDeleteCatalogObjects

Deletes a set of [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)s based on the
provided list of target IDs and returns a set of successfully deleted IDs in
the response. Deletion is a cascading event such that all children of the
targeted object are also deleted. For example, deleting a CatalogItem will
also delete all of its [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation)
children.

`BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted
IDs can be deleted. The response will only include IDs that were
actually deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteCatalogObjectsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteCatalogObjectsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteCatalogObjectsRequest();
    $request->objectIds = [
        'qui',
        'aliquid',
    ];

    $requestSecurity = new BatchDeleteCatalogObjectsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->batchDeleteCatalogObjects($request, $requestSecurity);

    if ($response->batchDeleteCatalogObjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchRetrieveCatalogObjects

Returns a set of objects based on the provided ID.
Each [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) returned in the set includes all of its
child information including: all of its
[CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation) objects, references to
its [CatalogModifierList](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifierList) objects, and the ids of
any [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects that apply to it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchRetrieveCatalogObjectsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchRetrieveCatalogObjectsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchRetrieveCatalogObjectsRequest();
    $request->catalogVersion = 586513;
    $request->includeRelatedObjects = false;
    $request->objectIds = [
        'perferendis',
        'magni',
        'assumenda',
    ];

    $requestSecurity = new BatchRetrieveCatalogObjectsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->batchRetrieveCatalogObjects($request, $requestSecurity);

    if ($response->batchRetrieveCatalogObjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchUpsertCatalogObjects

Creates or updates up to 10,000 target objects based on the provided
list of objects. The target objects are grouped into batches and each batch is
inserted/updated in an all-or-nothing manner. If an object within a batch is
malformed in some way, or violates a database constraint, the entire batch
containing that item will be disregarded. However, other batches in the same
request may still succeed. Each batch may contain up to 1,000 objects, and
batches will be processed in order as long as the total object count for the
request (items, variations, modifier lists, discounts, and taxes) is no more
than 10,000.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpsertCatalogObjectsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CatalogObjectBatch;
use \OpenAPI\OpenAPI\Models\Shared\CatalogObject;
use \OpenAPI\OpenAPI\Models\Shared\CatalogV1Id;
use \OpenAPI\OpenAPI\Models\Shared\CatalogCategory;
use \OpenAPI\OpenAPI\Models\Shared\CatalogCustomAttributeDefinition;
use \OpenAPI\OpenAPI\Models\Shared\CatalogCustomAttributeDefinitionNumberConfig;
use \OpenAPI\OpenAPI\Models\Shared\CatalogCustomAttributeDefinitionSelectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection;
use \OpenAPI\OpenAPI\Models\Shared\SourceApplication;
use \OpenAPI\OpenAPI\Models\Shared\CatalogCustomAttributeDefinitionStringConfig;
use \OpenAPI\OpenAPI\Models\Shared\CatalogCustomAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\CatalogDiscount;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\CatalogImage;
use \OpenAPI\OpenAPI\Models\Shared\CatalogItem;
use \OpenAPI\OpenAPI\Models\Shared\CatalogItemOptionForItem;
use \OpenAPI\OpenAPI\Models\Shared\CatalogItemModifierListInfo;
use \OpenAPI\OpenAPI\Models\Shared\CatalogModifierOverride;
use \OpenAPI\OpenAPI\Models\Shared\CatalogItemOption;
use \OpenAPI\OpenAPI\Models\Shared\CatalogItemOptionValue;
use \OpenAPI\OpenAPI\Models\Shared\CatalogItemVariation;
use \OpenAPI\OpenAPI\Models\Shared\CatalogItemOptionValueForItemVariation;
use \OpenAPI\OpenAPI\Models\Shared\ItemVariationLocationOverrides;
use \OpenAPI\OpenAPI\Models\Shared\CatalogStockConversion;
use \OpenAPI\OpenAPI\Models\Shared\CatalogMeasurementUnit;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementUnit;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementUnitCustom;
use \OpenAPI\OpenAPI\Models\Shared\CatalogModifier;
use \OpenAPI\OpenAPI\Models\Shared\CatalogModifierList;
use \OpenAPI\OpenAPI\Models\Shared\CatalogPricingRule;
use \OpenAPI\OpenAPI\Models\Shared\CatalogProductSet;
use \OpenAPI\OpenAPI\Models\Shared\CatalogQuickAmountsSettings;
use \OpenAPI\OpenAPI\Models\Shared\CatalogQuickAmount;
use \OpenAPI\OpenAPI\Models\Shared\CatalogSubscriptionPlan;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPhase;
use \OpenAPI\OpenAPI\Models\Shared\CatalogTax;
use \OpenAPI\OpenAPI\Models\Shared\CatalogTimePeriod;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpsertCatalogObjectsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchUpsertCatalogObjectsRequest();
    $request->batches = [
        new CatalogObjectBatch(),
        new CatalogObjectBatch(),
    ];
    $request->idempotencyKey = 'alias';

    $requestSecurity = new BatchUpsertCatalogObjectsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->batchUpsertCatalogObjects($request, $requestSecurity);

    if ($response->batchUpsertCatalogObjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## catalogInfo

Retrieves information about the Square Catalog API, such as batch size
limits that can be used by the `BatchUpsertCatalogObjects` endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CatalogInfoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new CatalogInfoSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->catalogInfo($requestSecurity);

    if ($response->catalogInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCatalogObject

Deletes a single [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) based on the
provided ID and returns the set of successfully deleted IDs in the response.
Deletion is a cascading event such that all children of the targeted object
are also deleted. For example, deleting a [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)
will also delete all of its
[CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation) children.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCatalogObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCatalogObjectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCatalogObjectRequest();
    $request->objectId = 'fugit';

    $requestSecurity = new DeleteCatalogObjectSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->deleteCatalogObject($request, $requestSecurity);

    if ($response->deleteCatalogObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCatalog

Returns a list of [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject)s that includes
all objects of a set of desired types (for example, all [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)
and [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects) in the catalog. The `types` parameter
is specified as a comma-separated list of valid [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) types:
`ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`, `IMAGE`.

__Important:__ ListCatalog does not return deleted catalog items. To retrieve
deleted catalog items, use [SearchCatalogObjects](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-objects)
and set the `include_deleted_objects` attribute value to `true`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCatalogRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCatalogSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCatalogRequest();
    $request->catalogVersion = 677817;
    $request->cursor = 'excepturi';
    $request->types = 'tempora';

    $requestSecurity = new ListCatalogSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->listCatalog($request, $requestSecurity);

    if ($response->listCatalogResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveCatalogObject

Returns a single [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) as a
[CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) based on the provided ID. The returned
object includes all of the relevant [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)
information including: [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation)
children, references to its
[CatalogModifierList](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifierList) objects, and the ids of
any [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects that apply to it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveCatalogObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveCatalogObjectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveCatalogObjectRequest();
    $request->catalogVersion = 703737;
    $request->includeRelatedObjects = false;
    $request->objectId = 'tempore';

    $requestSecurity = new RetrieveCatalogObjectSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->retrieveCatalogObject($request, $requestSecurity);

    if ($response->retrieveCatalogObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchCatalogItems

Searches for catalog items or item variations by matching supported search attribute values, including
custom attribute values, against one or more of the specified query expressions.

This (`SearchCatalogItems`) endpoint differs from the [SearchCatalogObjects](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-objects)
endpoint in the following aspects:

- `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
- `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
- `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
- The both endpoints use different call conventions, including the query filter formats.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchCatalogItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttributeFilter;
use \OpenAPI\OpenAPI\Models\Shared\Range;
use \OpenAPI\OpenAPI\Models\Operations\SearchCatalogItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCatalogItemsRequest();
    $request->categoryIds = [
        'delectus',
        'eum',
    ];
    $request->cursor = 'non';
    $request->customAttributeFilters = [
        new CustomAttributeFilter(),
        new CustomAttributeFilter(),
        new CustomAttributeFilter(),
        new CustomAttributeFilter(),
    ];
    $request->enabledLocationIds = [
        'aliquid',
        'provident',
        'necessitatibus',
    ];
    $request->limit = 572252;
    $request->productTypes = [
        'dolor',
        'debitis',
        'a',
    ];
    $request->sortOrder = 'dolorum';
    $request->stockLevels = [
        'in',
        'illum',
    ];
    $request->textFilter = 'maiores';

    $requestSecurity = new SearchCatalogItemsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->searchCatalogItems($request, $requestSecurity);

    if ($response->searchCatalogItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchCatalogObjects

Searches for [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) of any type by matching supported search attribute values,
excluding custom attribute values on items or item variations, against one or more of the specified query expressions.

This (`SearchCatalogObjects`) endpoint differs from the [SearchCatalogItems](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-items)
endpoint in the following aspects:

- `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
- `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
- `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
- The both endpoints have different call conventions, including the query filter formats.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchCatalogObjectsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CatalogQuery;
use \OpenAPI\OpenAPI\Models\Shared\CatalogQueryExact;
use \OpenAPI\OpenAPI\Models\Shared\CatalogQueryItemVariationsForItemOptionValues;
use \OpenAPI\OpenAPI\Models\Shared\CatalogQueryItemsForItemOptions;
use \OpenAPI\OpenAPI\Models\Shared\CatalogQueryItemsForModifierList;
use \OpenAPI\OpenAPI\Models\Shared\CatalogQueryItemsForTax;
use \OpenAPI\OpenAPI\Models\Shared\CatalogQueryPrefix;
use \OpenAPI\OpenAPI\Models\Shared\CatalogQueryRange;
use \OpenAPI\OpenAPI\Models\Shared\CatalogQuerySet;
use \OpenAPI\OpenAPI\Models\Shared\CatalogQuerySortedAttribute;
use \OpenAPI\OpenAPI\Models\Shared\CatalogQueryText;
use \OpenAPI\OpenAPI\Models\Operations\SearchCatalogObjectsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCatalogObjectsRequest();
    $request->beginTime = 'rerum';
    $request->cursor = 'dicta';
    $request->includeDeletedObjects = false;
    $request->includeRelatedObjects = false;
    $request->limit = 297437;
    $request->objectTypes = [
        'facere',
        'ea',
        'aliquid',
        'laborum',
    ];
    $request->query = new CatalogQuery();
    $request->query->exactQuery = new CatalogQueryExact();
    $request->query->exactQuery->attributeName = 'accusamus';
    $request->query->exactQuery->attributeValue = 'non';
    $request->query->itemVariationsForItemOptionValuesQuery = new CatalogQueryItemVariationsForItemOptionValues();
    $request->query->itemVariationsForItemOptionValuesQuery->itemOptionValueIds = [
        'enim',
        'accusamus',
        'delectus',
    ];
    $request->query->itemsForItemOptionsQuery = new CatalogQueryItemsForItemOptions();
    $request->query->itemsForItemOptionsQuery->itemOptionIds = [
        'provident',
        'nam',
        'id',
    ];
    $request->query->itemsForModifierListQuery = new CatalogQueryItemsForModifierList();
    $request->query->itemsForModifierListQuery->modifierListIds = [
        'deleniti',
        'sapiente',
        'amet',
    ];
    $request->query->itemsForTaxQuery = new CatalogQueryItemsForTax();
    $request->query->itemsForTaxQuery->taxIds = [
        'nisi',
        'vel',
        'natus',
    ];
    $request->query->prefixQuery = new CatalogQueryPrefix();
    $request->query->prefixQuery->attributeName = 'omnis';
    $request->query->prefixQuery->attributePrefix = 'molestiae';
    $request->query->rangeQuery = new CatalogQueryRange();
    $request->query->rangeQuery->attributeMaxValue = 19193;
    $request->query->rangeQuery->attributeMinValue = 470132;
    $request->query->rangeQuery->attributeName = 'magnam';
    $request->query->setQuery = new CatalogQuerySet();
    $request->query->setQuery->attributeName = 'distinctio';
    $request->query->setQuery->attributeValues = [
        'labore',
        'labore',
        'suscipit',
    ];
    $request->query->sortedAttributeQuery = new CatalogQuerySortedAttribute();
    $request->query->sortedAttributeQuery->attributeName = 'natus';
    $request->query->sortedAttributeQuery->initialAttributeValue = 'nobis';
    $request->query->sortedAttributeQuery->sortOrder = 'eum';
    $request->query->textQuery = new CatalogQueryText();
    $request->query->textQuery->keywords = [
        'aspernatur',
        'architecto',
        'magnam',
        'et',
    ];

    $requestSecurity = new SearchCatalogObjectsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->searchCatalogObjects($request, $requestSecurity);

    if ($response->searchCatalogObjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateItemModifierLists

Updates the [CatalogModifierList](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifierList) objects
that apply to the targeted [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) without having
to perform an upsert on the entire item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\UpdateItemModifierListsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateItemModifierListsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateItemModifierListsRequest();
    $request->itemIds = [
        'ullam',
        'provident',
        'quos',
    ];
    $request->modifierListsToDisable = [
        'accusantium',
        'mollitia',
        'reiciendis',
    ];
    $request->modifierListsToEnable = [
        'ad',
        'eum',
        'dolor',
    ];

    $requestSecurity = new UpdateItemModifierListsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->updateItemModifierLists($request, $requestSecurity);

    if ($response->updateItemModifierListsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateItemTaxes

Updates the [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects that apply to the
targeted [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) without having to perform an
upsert on the entire item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\UpdateItemTaxesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateItemTaxesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateItemTaxesRequest();
    $request->itemIds = [
        'odit',
        'nemo',
        'quasi',
        'iure',
    ];
    $request->taxesToDisable = [
        'debitis',
        'eius',
        'maxime',
        'deleniti',
    ];
    $request->taxesToEnable = [
        'in',
        'architecto',
        'architecto',
    ];

    $requestSecurity = new UpdateItemTaxesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->updateItemTaxes($request, $requestSecurity);

    if ($response->updateItemTaxesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upsertCatalogObject

Creates or updates the target [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\UpsertCatalogObjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\CatalogObject;
use \OpenAPI\OpenAPI\Models\Shared\CatalogV1Id;
use \OpenAPI\OpenAPI\Models\Shared\CatalogCategory;
use \OpenAPI\OpenAPI\Models\Shared\CatalogCustomAttributeDefinition;
use \OpenAPI\OpenAPI\Models\Shared\CatalogCustomAttributeDefinitionNumberConfig;
use \OpenAPI\OpenAPI\Models\Shared\CatalogCustomAttributeDefinitionSelectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection;
use \OpenAPI\OpenAPI\Models\Shared\SourceApplication;
use \OpenAPI\OpenAPI\Models\Shared\CatalogCustomAttributeDefinitionStringConfig;
use \OpenAPI\OpenAPI\Models\Shared\CatalogCustomAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\CatalogDiscount;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\CatalogImage;
use \OpenAPI\OpenAPI\Models\Shared\CatalogItem;
use \OpenAPI\OpenAPI\Models\Shared\CatalogItemOptionForItem;
use \OpenAPI\OpenAPI\Models\Shared\CatalogItemModifierListInfo;
use \OpenAPI\OpenAPI\Models\Shared\CatalogModifierOverride;
use \OpenAPI\OpenAPI\Models\Shared\CatalogItemOption;
use \OpenAPI\OpenAPI\Models\Shared\CatalogItemOptionValue;
use \OpenAPI\OpenAPI\Models\Shared\CatalogItemVariation;
use \OpenAPI\OpenAPI\Models\Shared\CatalogItemOptionValueForItemVariation;
use \OpenAPI\OpenAPI\Models\Shared\ItemVariationLocationOverrides;
use \OpenAPI\OpenAPI\Models\Shared\CatalogStockConversion;
use \OpenAPI\OpenAPI\Models\Shared\CatalogMeasurementUnit;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementUnit;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementUnitCustom;
use \OpenAPI\OpenAPI\Models\Shared\CatalogModifier;
use \OpenAPI\OpenAPI\Models\Shared\CatalogModifierList;
use \OpenAPI\OpenAPI\Models\Shared\CatalogPricingRule;
use \OpenAPI\OpenAPI\Models\Shared\CatalogProductSet;
use \OpenAPI\OpenAPI\Models\Shared\CatalogQuickAmountsSettings;
use \OpenAPI\OpenAPI\Models\Shared\CatalogQuickAmount;
use \OpenAPI\OpenAPI\Models\Shared\CatalogSubscriptionPlan;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPhase;
use \OpenAPI\OpenAPI\Models\Shared\CatalogTax;
use \OpenAPI\OpenAPI\Models\Shared\CatalogTimePeriod;
use \OpenAPI\OpenAPI\Models\Operations\UpsertCatalogObjectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpsertCatalogObjectRequest();
    $request->idempotencyKey = 'repudiandae';
    $request->object = new CatalogObject();
    $request->object->absentAtLocationIds = [
        'expedita',
        'nihil',
    ];
    $request->object->catalogV1Ids = [
        new CatalogV1Id(),
        new CatalogV1Id(),
        new CatalogV1Id(),
        new CatalogV1Id(),
    ];
    $request->object->categoryData = new CatalogCategory();
    $request->object->categoryData->name = 'Louis Turner Sr.';
    $request->object->customAttributeDefinitionData = new CatalogCustomAttributeDefinition();
    $request->object->customAttributeDefinitionData->allowedObjectTypes = [
        'natus',
        'magni',
        'sunt',
    ];
    $request->object->customAttributeDefinitionData->appVisibility = 'quo';
    $request->object->customAttributeDefinitionData->customAttributeUsageCount = 848009;
    $request->object->customAttributeDefinitionData->description = 'pariatur';
    $request->object->customAttributeDefinitionData->key = 'maxime';
    $request->object->customAttributeDefinitionData->name = 'Miriam Connelly Jr.';
    $request->object->customAttributeDefinitionData->numberConfig = new CatalogCustomAttributeDefinitionNumberConfig();
    $request->object->customAttributeDefinitionData->numberConfig->precision = 982575;
    $request->object->customAttributeDefinitionData->selectionConfig = new CatalogCustomAttributeDefinitionSelectionConfig();
    $request->object->customAttributeDefinitionData->selectionConfig->allowedSelections = [
        new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection(),
        new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection(),
        new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection(),
    ];
    $request->object->customAttributeDefinitionData->selectionConfig->maxAllowedSelections = 373291;
    $request->object->customAttributeDefinitionData->sellerVisibility = 'voluptate';
    $request->object->customAttributeDefinitionData->sourceApplication = new SourceApplication();
    $request->object->customAttributeDefinitionData->sourceApplication->applicationId = 'autem';
    $request->object->customAttributeDefinitionData->sourceApplication->name = 'Gary Streich';
    $request->object->customAttributeDefinitionData->sourceApplication->product = 'perferendis';
    $request->object->customAttributeDefinitionData->stringConfig = new CatalogCustomAttributeDefinitionStringConfig();
    $request->object->customAttributeDefinitionData->stringConfig->enforceUniqueness = false;
    $request->object->customAttributeDefinitionData->type = 'fugiat';
    $request->object->customAttributeValues = [
        'aut' => new CatalogCustomAttributeValue(),
    ];
    $request->object->discountData = new CatalogDiscount();
    $request->object->discountData->amountMoney = new Money();
    $request->object->discountData->amountMoney->amount = 764912;
    $request->object->discountData->amountMoney->currency = 'corporis';
    $request->object->discountData->discountType = 'hic';
    $request->object->discountData->labelColor = 'libero';
    $request->object->discountData->modifyTaxBasis = 'nobis';
    $request->object->discountData->name = 'Beatrice Lebsack II';
    $request->object->discountData->percentage = 'nesciunt';
    $request->object->discountData->pinRequired = false;
    $request->object->id = '202c73d5-fe9b-490c-a890-9b3fe49a8d9c';
    $request->object->imageData = new CatalogImage();
    $request->object->imageData->caption = 'libero';
    $request->object->imageData->name = 'Alex Luettgen';
    $request->object->imageData->url = 'dolorem';
    $request->object->imageId = 'dolor';
    $request->object->isDeleted = false;
    $request->object->itemData = new CatalogItem();
    $request->object->itemData->abbreviation = 'qui';
    $request->object->itemData->availableElectronically = false;
    $request->object->itemData->availableForPickup = false;
    $request->object->itemData->availableOnline = false;
    $request->object->itemData->categoryId = 'ipsum';
    $request->object->itemData->description = 'hic';
    $request->object->itemData->itemOptions = [
        new CatalogItemOptionForItem(),
        new CatalogItemOptionForItem(),
        new CatalogItemOptionForItem(),
    ];
    $request->object->itemData->labelColor = 'cum';
    $request->object->itemData->modifierListInfo = [
        new CatalogItemModifierListInfo(),
        new CatalogItemModifierListInfo(),
    ];
    $request->object->itemData->name = 'Johanna Farrell';
    $request->object->itemData->productType = 'veritatis';
    $request->object->itemData->skipModifierScreen = false;
    $request->object->itemData->sortName = 'ipsa';
    $request->object->itemData->taxIds = [
        'iure',
    ];
    $request->object->itemData->variations = [
        new CatalogObject(),
        new CatalogObject(),
    ];
    $request->object->itemOptionData = new CatalogItemOption();
    $request->object->itemOptionData->description = 'quaerat';
    $request->object->itemOptionData->displayName = 'accusamus';
    $request->object->itemOptionData->name = 'Jan Hodkiewicz';
    $request->object->itemOptionData->showColors = false;
    $request->object->itemOptionData->values = [
        new CatalogObject(),
        new CatalogObject(),
        new CatalogObject(),
    ];
    $request->object->itemOptionValueData = new CatalogItemOptionValue();
    $request->object->itemOptionValueData->color = 'sit';
    $request->object->itemOptionValueData->description = 'fugiat';
    $request->object->itemOptionValueData->itemOptionId = 'ab';
    $request->object->itemOptionValueData->name = 'Omar Kris';
    $request->object->itemOptionValueData->ordinal = 536579;
    $request->object->itemVariationData = new CatalogItemVariation();
    $request->object->itemVariationData->availableForBooking = false;
    $request->object->itemVariationData->inventoryAlertThreshold = 607045;
    $request->object->itemVariationData->inventoryAlertType = 'necessitatibus';
    $request->object->itemVariationData->itemId = 'distinctio';
    $request->object->itemVariationData->itemOptionValues = [
        new CatalogItemOptionValueForItemVariation(),
        new CatalogItemOptionValueForItemVariation(),
        new CatalogItemOptionValueForItemVariation(),
        new CatalogItemOptionValueForItemVariation(),
    ];
    $request->object->itemVariationData->locationOverrides = [
        new ItemVariationLocationOverrides(),
        new ItemVariationLocationOverrides(),
    ];
    $request->object->itemVariationData->measurementUnitId = 'ipsum';
    $request->object->itemVariationData->name = 'Alberta Ullrich';
    $request->object->itemVariationData->ordinal = 20651;
    $request->object->itemVariationData->priceMoney = new Money();
    $request->object->itemVariationData->priceMoney->amount = 229219;
    $request->object->itemVariationData->priceMoney->currency = 'optio';
    $request->object->itemVariationData->pricingType = 'accusamus';
    $request->object->itemVariationData->serviceDuration = 320017;
    $request->object->itemVariationData->sku = 'saepe';
    $request->object->itemVariationData->stockable = false;
    $request->object->itemVariationData->stockableConversion = new CatalogStockConversion();
    $request->object->itemVariationData->stockableConversion->nonstockableQuantity = 'suscipit';
    $request->object->itemVariationData->stockableConversion->stockableItemVariationId = 'deserunt';
    $request->object->itemVariationData->stockableConversion->stockableQuantity = 'provident';
    $request->object->itemVariationData->teamMemberIds = [
        'repellendus',
        'totam',
    ];
    $request->object->itemVariationData->trackInventory = false;
    $request->object->itemVariationData->upc = 'similique';
    $request->object->itemVariationData->userData = 'alias';
    $request->object->measurementUnitData = new CatalogMeasurementUnit();
    $request->object->measurementUnitData->measurementUnit = new MeasurementUnit();
    $request->object->measurementUnitData->measurementUnit->areaUnit = 'at';
    $request->object->measurementUnitData->measurementUnit->customUnit = new MeasurementUnitCustom();
    $request->object->measurementUnitData->measurementUnit->customUnit->abbreviation = 'quaerat';
    $request->object->measurementUnitData->measurementUnit->customUnit->name = 'Gina Schmeler';
    $request->object->measurementUnitData->measurementUnit->genericUnit = 'dolorum';
    $request->object->measurementUnitData->measurementUnit->lengthUnit = 'a';
    $request->object->measurementUnitData->measurementUnit->timeUnit = 'esse';
    $request->object->measurementUnitData->measurementUnit->type = 'harum';
    $request->object->measurementUnitData->measurementUnit->volumeUnit = 'iusto';
    $request->object->measurementUnitData->measurementUnit->weightUnit = 'ipsum';
    $request->object->measurementUnitData->precision = 788740;
    $request->object->modifierData = new CatalogModifier();
    $request->object->modifierData->modifierListId = 'tenetur';
    $request->object->modifierData->name = 'Kelli Thompson';
    $request->object->modifierData->ordinal = 213312;
    $request->object->modifierData->priceMoney = new Money();
    $request->object->modifierData->priceMoney->amount = 957451;
    $request->object->modifierData->priceMoney->currency = 'totam';
    $request->object->modifierListData = new CatalogModifierList();
    $request->object->modifierListData->modifiers = [
        new CatalogObject(),
        new CatalogObject(),
    ];
    $request->object->modifierListData->name = 'Mamie Durgan';
    $request->object->modifierListData->ordinal = 730442;
    $request->object->modifierListData->selectionType = 'voluptas';
    $request->object->presentAtAllLocations = false;
    $request->object->presentAtLocationIds = [
        'quam',
        'ipsum',
        'incidunt',
    ];
    $request->object->pricingRuleData = new CatalogPricingRule();
    $request->object->pricingRuleData->applyProductsId = 'qui';
    $request->object->pricingRuleData->customerGroupIdsAny = [
        'maxime',
        'pariatur',
        'soluta',
    ];
    $request->object->pricingRuleData->discountId = 'dicta';
    $request->object->pricingRuleData->excludeProductsId = 'laborum';
    $request->object->pricingRuleData->excludeStrategy = 'totam';
    $request->object->pricingRuleData->matchProductsId = 'incidunt';
    $request->object->pricingRuleData->name = 'Bonnie Raynor';
    $request->object->pricingRuleData->timePeriodIds = [
        'molestias',
        'temporibus',
    ];
    $request->object->pricingRuleData->validFromDate = 'qui';
    $request->object->pricingRuleData->validFromLocalTime = 'neque';
    $request->object->pricingRuleData->validUntilDate = 'fugit';
    $request->object->pricingRuleData->validUntilLocalTime = 'magni';
    $request->object->productSetData = new CatalogProductSet();
    $request->object->productSetData->allProducts = false;
    $request->object->productSetData->name = 'Ashley Hermiston';
    $request->object->productSetData->productIdsAll = [
        'cumque',
    ];
    $request->object->productSetData->productIdsAny = [
        'nobis',
        'et',
        'saepe',
    ];
    $request->object->productSetData->quantityExact = 217450;
    $request->object->productSetData->quantityMax = 83422;
    $request->object->productSetData->quantityMin = 749255;
    $request->object->quickAmountsSettingsData = new CatalogQuickAmountsSettings();
    $request->object->quickAmountsSettingsData->amounts = [
        new CatalogQuickAmount(),
        new CatalogQuickAmount(),
        new CatalogQuickAmount(),
    ];
    $request->object->quickAmountsSettingsData->eligibleForAutoAmounts = false;
    $request->object->quickAmountsSettingsData->option = 'tempore';
    $request->object->subscriptionPlanData = new CatalogSubscriptionPlan();
    $request->object->subscriptionPlanData->name = 'Kevin Willms';
    $request->object->subscriptionPlanData->phases = [
        new SubscriptionPhase(),
        new SubscriptionPhase(),
    ];
    $request->object->taxData = new CatalogTax();
    $request->object->taxData->appliesToCustomAmounts = false;
    $request->object->taxData->calculationPhase = 'adipisci';
    $request->object->taxData->enabled = false;
    $request->object->taxData->inclusionType = 'dolorum';
    $request->object->taxData->name = 'Amy Armstrong';
    $request->object->taxData->percentage = 'consequatur';
    $request->object->timePeriodData = new CatalogTimePeriod();
    $request->object->timePeriodData->event = 'est';
    $request->object->type = 'repellendus';
    $request->object->updatedAt = 'porro';
    $request->object->version = 984330;

    $requestSecurity = new UpsertCatalogObjectSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->upsertCatalogObject($request, $requestSecurity);

    if ($response->upsertCatalogObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
