# radio

### Available Operations

* [getDeviceWirelessRadioSettings](#getdevicewirelessradiosettings) - Return the radio settings of a device
* [updateDeviceWirelessRadioSettings](#updatedevicewirelessradiosettings) - Update the radio settings of a device

## getDeviceWirelessRadioSettings

Return the radio settings of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessRadioSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceWirelessRadioSettingsRequest();
    $request->serial = 'vel';

    $response = $sdk->radio->getDeviceWirelessRadioSettings($request);

    if ($response->getDeviceWirelessRadioSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceWirelessRadioSettings

Update the radio settings of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceWirelessRadioSettingsRequest();
    $request->requestBody = new UpdateDeviceWirelessRadioSettingsRequestBody();
    $request->requestBody->fiveGhzSettings = new UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings();
    $request->requestBody->fiveGhzSettings->channel = UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnum::SIXTY;
    $request->requestBody->fiveGhzSettings->channelWidth = UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnum::ZERO;
    $request->requestBody->fiveGhzSettings->targetPower = 484987;
    $request->requestBody->rfProfileId = 'magni';
    $request->requestBody->twoFourGhzSettings = new UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings();
    $request->requestBody->twoFourGhzSettings->channel = UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnum::SEVEN;
    $request->requestBody->twoFourGhzSettings->targetPower = 436752;
    $request->serial = 'sit';

    $response = $sdk->radio->updateDeviceWirelessRadioSettings($request);

    if ($response->updateDeviceWirelessRadioSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
