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
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'eius';
    $request->id = '80d3f213-2af0-4310-ad51-4f4cc6f18bf9';
    $request->key = 'aliquid';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->profileId = 'beatae';
    $request->quotaUser = 'similique';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'animi';

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
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'esse';
    $request->fields = 'animi';
    $request->id = '87ee3e4b-e752-4c65-b344-18e3bb91c8d9';
    $request->key = 'iusto';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->profileId = 'accusamus';
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'laudantium';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->contentCategory = new ContentCategory();
    $request->contentCategory->accountId = 'quae';
    $request->contentCategory->id = 'omnis';
    $request->contentCategory->kind = 'illum';
    $request->contentCategory->name = 'Roman Lind';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'maiores';
    $request->key = 'sequi';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->profileId = 'consequatur';
    $request->quotaUser = 'esse';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'facere';

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
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'deserunt';
    $request->ids = [
        'reiciendis',
        'sequi',
    ];
    $request->key = 'porro';
    $request->maxResults = 671528;
    $request->oauthToken = 'nobis';
    $request->pageToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->profileId = 'omnis';
    $request->quotaUser = 'aut';
    $request->searchString = 'ipsam';
    $request->sortField = DfareportingContentCategoriesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingContentCategoriesListSortOrderEnum::DESCENDING;
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'quia';

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
    $request->contentCategory->accountId = 'accusantium';
    $request->contentCategory->id = 'ad';
    $request->contentCategory->kind = 'nisi';
    $request->contentCategory->name = 'Lori Larkin';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eos';
    $request->fields = 'repellendus';
    $request->id = '309470bf-7a4f-4a87-8f53-5a6fae54ebf6';
    $request->key = 'voluptatem';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->profileId = 'sequi';
    $request->quotaUser = 'sunt';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'voluptatibus';

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
    $request->contentCategory->accountId = 'sed';
    $request->contentCategory->id = 'amet';
    $request->contentCategory->kind = 'rerum';
    $request->contentCategory->name = 'Audrey Smith';
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'itaque';
    $request->key = 'vitae';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->profileId = 'accusantium';
    $request->quotaUser = 'quod';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'quos';

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
