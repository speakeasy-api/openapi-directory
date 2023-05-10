# pubsubnotificationsettings

### Available Operations

* [contentPubsubnotificationsettingsGet](#contentpubsubnotificationsettingsget) - Retrieves a Merchant Center account's pubsub notification settings.
* [contentPubsubnotificationsettingsUpdate](#contentpubsubnotificationsettingsupdate) - Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.

## contentPubsubnotificationsettingsGet

Retrieves a Merchant Center account's pubsub notification settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentPubsubnotificationsettingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentPubsubnotificationsettingsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentPubsubnotificationsettingsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'maiores';
    $request->key = 'inventore';
    $request->merchantId = 'aliquid';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new ContentPubsubnotificationsettingsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pubsubnotificationsettings->contentPubsubnotificationsettingsGet($request, $requestSecurity);

    if ($response->pubsubNotificationSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentPubsubnotificationsettingsUpdate

Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentPubsubnotificationsettingsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PubsubNotificationSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentPubsubnotificationsettingsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentPubsubnotificationsettingsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->pubsubNotificationSettings = new PubsubNotificationSettings();
    $request->pubsubNotificationSettings->cloudTopicName = 'cumque';
    $request->pubsubNotificationSettings->kind = 'rem';
    $request->pubsubNotificationSettings->registeredEvents = [
        'ducimus',
        'adipisci',
        'recusandae',
    ];
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'sequi';
    $request->key = 'voluptatum';
    $request->merchantId = 'sit';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'autem';

    $requestSecurity = new ContentPubsubnotificationsettingsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pubsubnotificationsettings->contentPubsubnotificationsettingsUpdate($request, $requestSecurity);

    if ($response->pubsubNotificationSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
