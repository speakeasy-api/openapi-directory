# catalog

### Available Operations

* [addToCollection](#addtocollection) - Add items to catalog collections
* [createCollection](#createcollection) - Create catalog collections
* [deleteCollection](#deletecollection) - Delete catalog collections
* [deleteFromCollection](#deletefromcollection) - Remove items from catalog collection
* [getCollections](#getcollections) - List catalog collections
* [searchCatalog](#searchcatalog) - Search catalogs for assets
* [updateCollection](#updatecollection) - Update collection metadata

## addToCollection

This endpoint adds assets to a catalog collection. It also automatically adds the assets to the user's account's catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddToCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCatalogCollectionItems;
use \OpenAPI\OpenAPI\Models\Shared\CreateCatalogCollectionItem;
use \OpenAPI\OpenAPI\Models\Shared\CreateCatalogCollectionItemAsset;
use \OpenAPI\OpenAPI\Models\Operations\AddToCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddToCollectionRequest();
    $request->createCatalogCollectionItems = new CreateCatalogCollectionItems();
    $request->createCatalogCollectionItems->items = [
        new CreateCatalogCollectionItem(),
    ];
    $request->collectionId = 'quis';

    $requestSecurity = new AddToCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->addToCollection($request, $requestSecurity);

    if ($response->catalogCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCollection

This endpoint creates a catalog collection and optionally adds assets. To add assets to the collection later, use `PATCH /v2/catalog/collections/{collection_id}/items`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateCatalogCollection;
use \OpenAPI\OpenAPI\Models\Shared\CreateCatalogCollectionItem;
use \OpenAPI\OpenAPI\Models\Shared\CreateCatalogCollectionItemAsset;
use \OpenAPI\OpenAPI\Models\Shared\CreateCatalogCollectionVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCatalogCollection();
    $request->items = [
        new CreateCatalogCollectionItem(),
    ];
    $request->name = 'Dorothy Dach';
    $request->visibility = CreateCatalogCollectionVisibilityEnum::PRIVATE;

    $requestSecurity = new CreateCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->createCollection($request, $requestSecurity);

    if ($response->catalogCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCollection

This endpoint deletes a catalog collection. It does not remove the assets from the user's account's catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCollectionRequest();
    $request->collectionId = 'vero';

    $requestSecurity = new DeleteCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->deleteCollection($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFromCollection

This endpoint removes assets from a catalog collection. It does not remove the assets from the user's account's catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFromCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveCatalogCollectionItems;
use \OpenAPI\OpenAPI\Models\Shared\RemoveCatalogCollectionItem;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFromCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFromCollectionRequest();
    $request->removeCatalogCollectionItems = new RemoveCatalogCollectionItems();
    $request->removeCatalogCollectionItems->items = [
        new RemoveCatalogCollectionItem(),
        new RemoveCatalogCollectionItem(),
    ];
    $request->collectionId = 'hic';

    $requestSecurity = new DeleteFromCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->deleteFromCollection($request, $requestSecurity);

    if ($response->catalogCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCollections

This endpoint returns a list of catalog collections.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCollectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCollectionsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCollectionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCollectionsRequest();
    $request->page = 928082;
    $request->perPage = 608253;
    $request->shared = false;
    $request->sort = GetCollectionsSortEnum::OLDEST;

    $requestSecurity = new GetCollectionsSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->getCollections($request, $requestSecurity);

    if ($response->catalogCollectionDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchCatalog

This endpoint searches for assets in the account's catalog. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchCatalogRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchCatalogAssetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCatalogSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCatalogSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCatalogRequest();
    $request->assetType = [
        SearchCatalogAssetTypeEnum::IMAGE,
        SearchCatalogAssetTypeEnum::EDITORIAL_IMAGE,
        SearchCatalogAssetTypeEnum::IMAGE,
    ];
    $request->collectionId = [
        'error',
        'eaque',
        'occaecati',
    ];
    $request->page = 699098;
    $request->perPage = 237893;
    $request->query = 'asperiores';
    $request->sort = SearchCatalogSortEnum::OLDEST;

    $requestSecurity = new SearchCatalogSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->searchCatalog($request, $requestSecurity);

    if ($response->catalogCollectionItemDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCollection

This endpoint updates the metadata of a catalog collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCatalogCollection;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCatalogCollectionCoverAsset;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCatalogCollectionVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCollectionRequest();
    $request->updateCatalogCollection = new UpdateCatalogCollection();
    $request->updateCatalogCollection->coverAsset = new UpdateCatalogCollectionCoverAsset();
    $request->updateCatalogCollection->coverAsset->id = '49a8d9cb-f486-4333-a3f9-b77f3a410067';
    $request->updateCatalogCollection->name = 'Sophia Predovic';
    $request->updateCatalogCollection->visibility = UpdateCatalogCollectionVisibilityEnum::PUBLIC;
    $request->collectionId = 'eos';

    $requestSecurity = new UpdateCollectionSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->updateCollection($request, $requestSecurity);

    if ($response->catalogCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
