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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptates';
    $request->fields = 'ad';
    $request->id = '4c82f168-a363-4c88-b3e4-84380b1f6b8c';
    $request->key = 'deserunt';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->profileId = 'nihil';
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'commodi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolore';
    $request->fields = 'maxime';
    $request->id = '495cc699-171b-451c-9bdb-1cf4b888ebdf';
    $request->key = 'quo';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->profileId = 'quod';
    $request->quotaUser = 'minus';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'id';

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
    $request->contentCategory->accountId = 'occaecati';
    $request->contentCategory->id = 'libero';
    $request->contentCategory->kind = 'quo';
    $request->contentCategory->name = 'Miss Mindy Schmitt';
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'recusandae';
    $request->fields = 'veritatis';
    $request->key = 'aut';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->profileId = 'iusto';
    $request->quotaUser = 'dolor';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'tempora';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatem';
    $request->fields = 'eum';
    $request->ids = [
        'eum',
        'reprehenderit',
        'voluptatum',
        'blanditiis',
    ];
    $request->key = 'nihil';
    $request->maxResults = 540048;
    $request->oauthToken = 'rerum';
    $request->pageToken = 'deserunt';
    $request->prettyPrint = false;
    $request->profileId = 'atque';
    $request->quotaUser = 'nostrum';
    $request->searchString = 'atque';
    $request->sortField = DfareportingContentCategoriesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingContentCategoriesListSortOrderEnum::DESCENDING;
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'rem';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->contentCategory = new ContentCategory();
    $request->contentCategory->accountId = 'quae';
    $request->contentCategory->id = 'quas';
    $request->contentCategory->kind = 'placeat';
    $request->contentCategory->name = 'Clara Williamson';
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cumque';
    $request->fields = 'natus';
    $request->id = '5f2eac55-65d3-407c-bee8-1206e2813fa4';
    $request->key = 'deserunt';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->profileId = 'sunt';
    $request->quotaUser = 'impedit';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'voluptatum';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->contentCategory = new ContentCategory();
    $request->contentCategory->accountId = 'at';
    $request->contentCategory->id = 'dolorem';
    $request->contentCategory->kind = 'repellat';
    $request->contentCategory->name = 'Stephanie Dickinson';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'architecto';
    $request->key = 'aperiam';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->profileId = 'nulla';
    $request->quotaUser = 'enim';
    $request->uploadType = 'illo';
    $request->uploadProtocol = 'magnam';

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
