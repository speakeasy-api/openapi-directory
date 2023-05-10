# contentCategories

### Available Operations

* [dfareportingContentCategoriesDelete](#dfareportingcontentcategoriesdelete) - Deletes an existing content category.
* [dfareportingContentCategoriesGet](#dfareportingcontentcategoriesget) - Gets one content category by ID.
* [dfareportingContentCategoriesInsert](#dfareportingcontentcategoriesinsert) - Inserts a new content category.
* [dfareportingContentCategoriesList](#dfareportingcontentcategorieslist) - Retrieves a list of content categories, possibly filtered. This method supports paging.
* [dfareportingContentCategoriesPatch](#dfareportingcontentcategoriespatch) - Updates an existing content category. This method supports patch semantics.
* [dfareportingContentCategoriesUpdate](#dfareportingcontentcategoriesupdate) - Updates an existing content category.

## dfareportingContentCategoriesDelete

Deletes an existing content category.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingContentCategoriesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingContentCategoriesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingContentCategoriesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'blanditiis';
    $request->fields = 'numquam';
    $request->id = '380b1f6b-8ca2-475a-a0a0-4c495cc69917';
    $request->key = 'inventore';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->profileId = 'ipsam';
    $request->quotaUser = 'quasi';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DfareportingContentCategoriesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contentCategories->dfareportingContentCategoriesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingContentCategoriesGet

Gets one content category by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingContentCategoriesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingContentCategoriesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingContentCategoriesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facere';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'beatae';
    $request->fields = 'cumque';
    $request->id = 'f4b888eb-dfc4-4ccc-a99b-c7fc0b2dce10';
    $request->key = 'laudantium';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->profileId = 'dolor';
    $request->quotaUser = 'voluptates';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new DfareportingContentCategoriesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contentCategories->dfareportingContentCategoriesGet($request, $requestSecurity);

    if ($response->contentCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingContentCategoriesInsert

Inserts a new content category.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingContentCategoriesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentCategory;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingContentCategoriesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingContentCategoriesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->contentCategory = new ContentCategory();
    $request->contentCategory->accountId = 'doloremque';
    $request->contentCategory->id = 'voluptatem';
    $request->contentCategory->kind = 'eum';
    $request->contentCategory->name = 'Franklin Kilback';
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rerum';
    $request->fields = 'deserunt';
    $request->key = 'atque';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->profileId = 'atque';
    $request->quotaUser = 'architecto';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new DfareportingContentCategoriesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contentCategories->dfareportingContentCategoriesInsert($request, $requestSecurity);

    if ($response->contentCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingContentCategoriesList

Retrieves a list of content categories, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingContentCategoriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingContentCategoriesListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingContentCategoriesListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingContentCategoriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingContentCategoriesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quas';
    $request->fields = 'placeat';
    $request->ids = [
        'labore',
        'sapiente',
    ];
    $request->key = 'saepe';
    $request->maxResults = 965735;
    $request->oauthToken = 'officia';
    $request->pageToken = 'natus';
    $request->prettyPrint = false;
    $request->profileId = 'cumque';
    $request->quotaUser = 'natus';
    $request->searchString = 'quaerat';
    $request->sortField = DfareportingContentCategoriesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingContentCategoriesListSortOrderEnum::ASCENDING;
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new DfareportingContentCategoriesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contentCategories->dfareportingContentCategoriesList($request, $requestSecurity);

    if ($response->contentCategoriesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingContentCategoriesPatch

Updates an existing content category. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingContentCategoriesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentCategory;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingContentCategoriesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingContentCategoriesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->contentCategory = new ContentCategory();
    $request->contentCategory->accountId = 'quis';
    $request->contentCategory->id = 'enim';
    $request->contentCategory->kind = 'eum';
    $request->contentCategory->name = 'Ms. Desiree Douglas';
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptates';
    $request->fields = 'praesentium';
    $request->id = '1206e281-3fa4-4a41-8480-d3f2132af031';
    $request->key = 'aperiam';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->profileId = 'nulla';
    $request->quotaUser = 'enim';
    $request->uploadType = 'illo';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new DfareportingContentCategoriesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contentCategories->dfareportingContentCategoriesPatch($request, $requestSecurity);

    if ($response->contentCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingContentCategoriesUpdate

Updates an existing content category.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingContentCategoriesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentCategory;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingContentCategoriesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingContentCategoriesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->contentCategory = new ContentCategory();
    $request->contentCategory->accountId = 'numquam';
    $request->contentCategory->id = 'optio';
    $request->contentCategory->kind = 'nobis';
    $request->contentCategory->name = 'Kristie Bergnaum';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'sed';
    $request->key = 'beatae';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->profileId = 'ea';
    $request->quotaUser = 'animi';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'tenetur';

    $requestSecurity = new DfareportingContentCategoriesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contentCategories->dfareportingContentCategoriesUpdate($request, $requestSecurity);

    if ($response->contentCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
