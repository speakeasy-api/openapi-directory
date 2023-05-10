# collectionstatuses

### Available Operations

* [contentCollectionstatusesGet](#contentcollectionstatusesget) - Gets the status of a collection from your Merchant Center account.
* [contentCollectionstatusesList](#contentcollectionstatuseslist) - Lists the statuses of the collections in your Merchant Center account.

## contentCollectionstatusesGet

Gets the status of a collection from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentCollectionstatusesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentCollectionstatusesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentCollectionstatusesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'explicabo';
    $request->collectionId = 'saepe';
    $request->fields = 'occaecati';
    $request->key = 'atque';
    $request->merchantId = 'et';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'eveniet';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new ContentCollectionstatusesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collectionstatuses->contentCollectionstatusesGet($request, $requestSecurity);

    if ($response->collectionStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentCollectionstatusesList

Lists the statuses of the collections in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentCollectionstatusesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentCollectionstatusesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentCollectionstatusesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'aliquid';
    $request->key = 'quasi';
    $request->merchantId = 'saepe';
    $request->oauthToken = 'vel';
    $request->pageSize = 690025;
    $request->pageToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new ContentCollectionstatusesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collectionstatuses->contentCollectionstatusesList($request, $requestSecurity);

    if ($response->listCollectionStatusesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
