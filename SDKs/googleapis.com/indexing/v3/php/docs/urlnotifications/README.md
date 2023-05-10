# urlNotifications

### Available Operations

* [indexingUrlNotificationsGetMetadata](#indexingurlnotificationsgetmetadata) - Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest `UrlNotification` received via this API.
* [indexingUrlNotificationsPublish](#indexingurlnotificationspublish) - Notifies that a URL has been updated or deleted.

## indexingUrlNotificationsGetMetadata

Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest `UrlNotification` received via this API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IndexingUrlNotificationsGetMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IndexingUrlNotificationsGetMetadataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IndexingUrlNotificationsGetMetadataRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'minus';
    $request->url = 'placeat';

    $requestSecurity = new IndexingUrlNotificationsGetMetadataSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlNotifications->indexingUrlNotificationsGetMetadata($request, $requestSecurity);

    if ($response->urlNotificationMetadata !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## indexingUrlNotificationsPublish

Notifies that a URL has been updated or deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IndexingUrlNotificationsPublishRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlNotification;
use \OpenAPI\OpenAPI\Models\Shared\UrlNotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IndexingUrlNotificationsPublishSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IndexingUrlNotificationsPublishRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->urlNotification = new UrlNotification();
    $request->urlNotification->notifyTime = 'iusto';
    $request->urlNotification->type = UrlNotificationTypeEnum::URL_UPDATED;
    $request->urlNotification->url = 'nisi';
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->fields = 'quis';
    $request->key = 'veritatis';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'repellendus';

    $requestSecurity = new IndexingUrlNotificationsPublishSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlNotifications->indexingUrlNotificationsPublish($request, $requestSecurity);

    if ($response->publishUrlNotificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
