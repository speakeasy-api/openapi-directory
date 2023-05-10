# v1beta1

### Available Operations

* [alertcenterGetSettings](#alertcentergetsettings) - Returns customer-level settings.
* [alertcenterUpdateSettings](#alertcenterupdatesettings) - Updates the customer-level settings.

## alertcenterGetSettings

Returns customer-level settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterGetSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterGetSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AlertcenterGetSettingsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->customerId = 'voluptate';
    $request->fields = 'cum';
    $request->key = 'perferendis';
    $request->oauthToken = 'doloremque';
    $request->prettyPrint = false;
    $request->quotaUser = 'reprehenderit';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new AlertcenterGetSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1beta1->alertcenterGetSettings($request, $requestSecurity);

    if ($response->settings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## alertcenterUpdateSettings

Updates the customer-level settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterUpdateSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Settings;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\CloudPubsubTopic;
use \OpenAPI\OpenAPI\Models\Shared\CloudPubsubTopicPayloadFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterUpdateSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AlertcenterUpdateSettingsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->settings = new Settings();
    $request->settings->notifications = [
        new Notification(),
        new Notification(),
    ];
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->customerId = 'harum';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new AlertcenterUpdateSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1beta1->alertcenterUpdateSettings($request, $requestSecurity);

    if ($response->settings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
