# rfProfiles

### Available Operations

* [createNetworkWirelessRfProfile](#createnetworkwirelessrfprofile) - Creates new RF profile for this network
* [deleteNetworkWirelessRfProfile](#deletenetworkwirelessrfprofile) - Delete a RF Profile
* [getNetworkWirelessRfProfile](#getnetworkwirelessrfprofile) - Return a RF profile
* [getNetworkWirelessRfProfiles](#getnetworkwirelessrfprofiles) - List the non-basic RF profiles for this network
* [updateNetworkWirelessRfProfile](#updatenetworkwirelessrfprofile) - Updates specified RF profile for this network

## createNetworkWirelessRfProfile

Creates new RF profile for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyApBandSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyTransmission;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkWirelessRfProfileRequest();
    $request->requestBody = new CreateNetworkWirelessRfProfileRequestBody();
    $request->requestBody->apBandSettings = new CreateNetworkWirelessRfProfileRequestBodyApBandSettings();
    $request->requestBody->apBandSettings->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum::TWO4GHZ;
    $request->requestBody->apBandSettings->bandSteeringEnabled = false;
    $request->requestBody->bandSelectionType = CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum::AP;
    $request->requestBody->clientBalancingEnabled = false;
    $request->requestBody->fiveGhzSettings = new CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings();
    $request->requestBody->fiveGhzSettings->channelWidth = 'explicabo';
    $request->requestBody->fiveGhzSettings->maxPower = 852547;
    $request->requestBody->fiveGhzSettings->minBitrate = 307887;
    $request->requestBody->fiveGhzSettings->minPower = 103309;
    $request->requestBody->fiveGhzSettings->rxsop = 19336;
    $request->requestBody->fiveGhzSettings->validAutoChannels = [
        630023,
        174723,
    ];
    $request->requestBody->minBitrateType = CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum::BAND;
    $request->requestBody->name = 'Dr. Marlon Kris';
    $request->requestBody->perSsidSettings = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings();
    $request->requestBody->perSsidSettings->zero = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0();
    $request->requestBody->perSsidSettings->zero->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->zero->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->zero->minBitrate = 4979.58;
    $request->requestBody->perSsidSettings->one = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1();
    $request->requestBody->perSsidSettings->one->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->one->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->one->minBitrate = 1177;
    $request->requestBody->perSsidSettings->ten = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10();
    $request->requestBody->perSsidSettings->ten->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->ten->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->ten->minBitrate = 8561.18;
    $request->requestBody->perSsidSettings->eleven = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11();
    $request->requestBody->perSsidSettings->eleven->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->eleven->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->eleven->minBitrate = 1110.45;
    $request->requestBody->perSsidSettings->twelve = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12();
    $request->requestBody->perSsidSettings->twelve->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->twelve->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->twelve->minBitrate = 6458.59;
    $request->requestBody->perSsidSettings->thirteen = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13();
    $request->requestBody->perSsidSettings->thirteen->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->thirteen->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->thirteen->minBitrate = 2452.17;
    $request->requestBody->perSsidSettings->fourteen = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14();
    $request->requestBody->perSsidSettings->fourteen->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->fourteen->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->fourteen->minBitrate = 4491.17;
    $request->requestBody->perSsidSettings->two = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2();
    $request->requestBody->perSsidSettings->two->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->two->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->two->minBitrate = 5730.2;
    $request->requestBody->perSsidSettings->three = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3();
    $request->requestBody->perSsidSettings->three->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->three->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->three->minBitrate = 9196.76;
    $request->requestBody->perSsidSettings->four = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4();
    $request->requestBody->perSsidSettings->four->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->four->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->four->minBitrate = 2845.14;
    $request->requestBody->perSsidSettings->five = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5();
    $request->requestBody->perSsidSettings->five->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->five->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->five->minBitrate = 3876.95;
    $request->requestBody->perSsidSettings->six = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6();
    $request->requestBody->perSsidSettings->six->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->six->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->six->minBitrate = 1995.95;
    $request->requestBody->perSsidSettings->seven = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7();
    $request->requestBody->perSsidSettings->seven->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->seven->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->seven->minBitrate = 3436.21;
    $request->requestBody->perSsidSettings->eight = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8();
    $request->requestBody->perSsidSettings->eight->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->eight->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->eight->minBitrate = 1258.11;
    $request->requestBody->perSsidSettings->nine = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9();
    $request->requestBody->perSsidSettings->nine->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->nine->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->nine->minBitrate = 5480.83;
    $request->requestBody->transmission = new CreateNetworkWirelessRfProfileRequestBodyTransmission();
    $request->requestBody->transmission->enabled = false;
    $request->requestBody->twoFourGhzSettings = new CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings();
    $request->requestBody->twoFourGhzSettings->axEnabled = false;
    $request->requestBody->twoFourGhzSettings->maxPower = 185161;
    $request->requestBody->twoFourGhzSettings->minBitrate = 5592.32;
    $request->requestBody->twoFourGhzSettings->minPower = 628540;
    $request->requestBody->twoFourGhzSettings->rxsop = 623373;
    $request->requestBody->twoFourGhzSettings->validAutoChannels = [
        230352,
    ];
    $request->networkId = 'accusantium';

    $response = $sdk->rfProfiles->createNetworkWirelessRfProfile($request);

    if ($response->createNetworkWirelessRfProfile201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkWirelessRfProfile

Delete a RF Profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkWirelessRfProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkWirelessRfProfileRequest();
    $request->networkId = 'eum';
    $request->rfProfileId = 'commodi';

    $response = $sdk->rfProfiles->deleteNetworkWirelessRfProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessRfProfile

Return a RF profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessRfProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessRfProfileRequest();
    $request->networkId = 'doloremque';
    $request->rfProfileId = 'asperiores';

    $response = $sdk->rfProfiles->getNetworkWirelessRfProfile($request);

    if ($response->getNetworkWirelessRfProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessRfProfiles

List the non-basic RF profiles for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessRfProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessRfProfilesRequest();
    $request->includeTemplateProfiles = false;
    $request->networkId = 'doloremque';

    $response = $sdk->rfProfiles->getNetworkWirelessRfProfiles($request);

    if ($response->getNetworkWirelessRfProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessRfProfile

Updates specified RF profile for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyApBandSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyTransmission;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessRfProfileRequest();
    $request->requestBody = new UpdateNetworkWirelessRfProfileRequestBody();
    $request->requestBody->apBandSettings = new UpdateNetworkWirelessRfProfileRequestBodyApBandSettings();
    $request->requestBody->apBandSettings->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum::TWO4GHZ;
    $request->requestBody->apBandSettings->bandSteeringEnabled = false;
    $request->requestBody->bandSelectionType = UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum::AP;
    $request->requestBody->clientBalancingEnabled = false;
    $request->requestBody->fiveGhzSettings = new UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings();
    $request->requestBody->fiveGhzSettings->channelWidth = 'eligendi';
    $request->requestBody->fiveGhzSettings->maxPower = 489143;
    $request->requestBody->fiveGhzSettings->minBitrate = 573863;
    $request->requestBody->fiveGhzSettings->minPower = 692974;
    $request->requestBody->fiveGhzSettings->rxsop = 280776;
    $request->requestBody->fiveGhzSettings->validAutoChannels = [
        768150,
        401781,
        295377,
        755607,
    ];
    $request->requestBody->minBitrateType = UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum::BAND;
    $request->requestBody->name = 'Earl Nader';
    $request->requestBody->perSsidSettings = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings();
    $request->requestBody->perSsidSettings->zero = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0();
    $request->requestBody->perSsidSettings->zero->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->zero->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->zero->minBitrate = 2872.44;
    $request->requestBody->perSsidSettings->one = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1();
    $request->requestBody->perSsidSettings->one->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->one->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->one->minBitrate = 5338.77;
    $request->requestBody->perSsidSettings->ten = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10();
    $request->requestBody->perSsidSettings->ten->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->ten->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->ten->minBitrate = 8139.32;
    $request->requestBody->perSsidSettings->eleven = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11();
    $request->requestBody->perSsidSettings->eleven->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->eleven->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->eleven->minBitrate = 4033.14;
    $request->requestBody->perSsidSettings->twelve = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12();
    $request->requestBody->perSsidSettings->twelve->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->twelve->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->twelve->minBitrate = 9670.67;
    $request->requestBody->perSsidSettings->thirteen = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13();
    $request->requestBody->perSsidSettings->thirteen->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->thirteen->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->thirteen->minBitrate = 6654.01;
    $request->requestBody->perSsidSettings->fourteen = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14();
    $request->requestBody->perSsidSettings->fourteen->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->fourteen->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->fourteen->minBitrate = 3130.55;
    $request->requestBody->perSsidSettings->two = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2();
    $request->requestBody->perSsidSettings->two->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->two->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->two->minBitrate = 5614.34;
    $request->requestBody->perSsidSettings->three = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3();
    $request->requestBody->perSsidSettings->three->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->three->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->three->minBitrate = 3750.74;
    $request->requestBody->perSsidSettings->four = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4();
    $request->requestBody->perSsidSettings->four->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->four->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->four->minBitrate = 9119.82;
    $request->requestBody->perSsidSettings->five = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5();
    $request->requestBody->perSsidSettings->five->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->five->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->five->minBitrate = 483.47;
    $request->requestBody->perSsidSettings->six = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6();
    $request->requestBody->perSsidSettings->six->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->six->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->six->minBitrate = 2289.15;
    $request->requestBody->perSsidSettings->seven = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7();
    $request->requestBody->perSsidSettings->seven->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->seven->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->seven->minBitrate = 965.66;
    $request->requestBody->perSsidSettings->eight = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8();
    $request->requestBody->perSsidSettings->eight->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->eight->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->eight->minBitrate = 8056.2;
    $request->requestBody->perSsidSettings->nine = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9();
    $request->requestBody->perSsidSettings->nine->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->nine->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->nine->minBitrate = 1910.79;
    $request->requestBody->transmission = new UpdateNetworkWirelessRfProfileRequestBodyTransmission();
    $request->requestBody->transmission->enabled = false;
    $request->requestBody->twoFourGhzSettings = new UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings();
    $request->requestBody->twoFourGhzSettings->axEnabled = false;
    $request->requestBody->twoFourGhzSettings->maxPower = 264392;
    $request->requestBody->twoFourGhzSettings->minBitrate = 7428.48;
    $request->requestBody->twoFourGhzSettings->minPower = 726165;
    $request->requestBody->twoFourGhzSettings->rxsop = 561597;
    $request->requestBody->twoFourGhzSettings->validAutoChannels = [
        830216,
        287777,
    ];
    $request->networkId = 'repellat';
    $request->rfProfileId = 'eum';

    $response = $sdk->rfProfiles->updateNetworkWirelessRfProfile($request);

    if ($response->updateNetworkWirelessRfProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
