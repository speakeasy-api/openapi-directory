# collections

### Available Operations

* [contentCollectionsCreate](#contentcollectionscreate) - Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.
* [contentCollectionsDelete](#contentcollectionsdelete) - Deletes a collection from your Merchant Center account.
* [contentCollectionsGet](#contentcollectionsget) - Retrieves a collection from your Merchant Center account.
* [contentCollectionsList](#contentcollectionslist) - Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.

## contentCollectionsCreate

Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentCollectionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Collection;
use \OpenAPI\OpenAPI\Models\Shared\CollectionFeaturedProduct;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentCollectionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentCollectionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->collection = new Collection();
    $request->collection->customLabel0 = 'aliquam';
    $request->collection->customLabel1 = 'fugit';
    $request->collection->customLabel2 = 'accusamus';
    $request->collection->customLabel3 = 'inventore';
    $request->collection->customLabel4 = 'non';
    $request->collection->featuredProduct = [
        new CollectionFeaturedProduct(),
    ];
    $request->collection->headline = [
        'laborum',
        'placeat',
        'velit',
    ];
    $request->collection->id = '66c8dd6b-1442-4907-8747-78a7bd466d28';
    $request->collection->imageLink = [
        'veritatis',
        'ipsa',
        'id',
        'quidem',
    ];
    $request->collection->language = 'neque';
    $request->collection->link = 'quo';
    $request->collection->mobileLink = 'illum';
    $request->collection->productCountry = 'quo';
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eos';
    $request->fields = 'voluptas';
    $request->key = 'ab';
    $request->merchantId = 'cupiditate';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new ContentCollectionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->contentCollectionsCreate($request, $requestSecurity);

    if ($response->collection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentCollectionsDelete

Deletes a collection from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentCollectionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentCollectionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentCollectionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->collectionId = 'recusandae';
    $request->fields = 'aperiam';
    $request->key = 'distinctio';
    $request->merchantId = 'quod';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'inventore';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new ContentCollectionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->contentCollectionsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentCollectionsGet

Retrieves a collection from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentCollectionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentCollectionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentCollectionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->collectionId = 'commodi';
    $request->fields = 'sapiente';
    $request->key = 'dolores';
    $request->merchantId = 'deserunt';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new ContentCollectionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->contentCollectionsGet($request, $requestSecurity);

    if ($response->collection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentCollectionsList

Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentCollectionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentCollectionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentCollectionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'fugit';
    $request->key = 'fuga';
    $request->merchantId = 'mollitia';
    $request->oauthToken = 'incidunt';
    $request->pageSize = 539224;
    $request->pageToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new ContentCollectionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->contentCollectionsList($request, $requestSecurity);

    if ($response->listCollectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
