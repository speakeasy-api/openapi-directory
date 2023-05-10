# accounts

### Available Operations

* [mybusinessnotificationsAccountsGetNotificationSetting](#mybusinessnotificationsaccountsgetnotificationsetting) - Returns the pubsub notification settings for the account.
* [mybusinessnotificationsAccountsUpdateNotificationSetting](#mybusinessnotificationsaccountsupdatenotificationsetting) - Sets the pubsub notification setting for the account informing Google which topic to send pubsub notifications for. Use the notification_types field within notification_setting to manipulate the events an account wants to subscribe to. An account will only have one notification setting resource, and only one pubsub topic can be set. To delete the setting, update with an empty notification_types

## mybusinessnotificationsAccountsGetNotificationSetting

Returns the pubsub notification settings for the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessnotificationsAccountsGetNotificationSettingRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessnotificationsAccountsGetNotificationSettingRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->name = 'Ken Kshlerin';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $response = $sdk->accounts->mybusinessnotificationsAccountsGetNotificationSetting($request);

    if ($response->notificationSetting !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessnotificationsAccountsUpdateNotificationSetting

Sets the pubsub notification setting for the account informing Google which topic to send pubsub notifications for. Use the notification_types field within notification_setting to manipulate the events an account wants to subscribe to. An account will only have one notification setting resource, and only one pubsub topic can be set. To delete the setting, update with an empty notification_types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessnotificationsAccountsUpdateNotificationSettingRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationSetting;
use \OpenAPI\OpenAPI\Models\Shared\NotificationSettingNotificationTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessnotificationsAccountsUpdateNotificationSettingRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->notificationSetting = new NotificationSetting();
    $request->notificationSetting->name = 'Christopher Hills';
    $request->notificationSetting->notificationTypes = [
        NotificationSettingNotificationTypesEnum::GOOGLE_UPDATE,
        NotificationSettingNotificationTypesEnum::LOSS_OF_VOICE_OF_MERCHANT,
        NotificationSettingNotificationTypesEnum::LOSS_OF_VOICE_OF_MERCHANT,
        NotificationSettingNotificationTypesEnum::VOICE_OF_MERCHANT_UPDATED,
    ];
    $request->notificationSetting->pubsubTopic = 'molestiae';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'totam';
    $request->key = 'porro';
    $request->name = 'Samuel Reichel';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->updateMask = 'hic';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'totam';

    $response = $sdk->accounts->mybusinessnotificationsAccountsUpdateNotificationSetting($request);

    if ($response->notificationSetting !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
