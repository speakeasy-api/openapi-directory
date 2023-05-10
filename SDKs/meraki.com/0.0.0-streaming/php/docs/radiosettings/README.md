# radioSettings

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
    $request->requestBody->fiveGhzSettings->channelWidth = 'quasi';
    $request->requestBody->fiveGhzSettings->maxPower = 628899;
    $request->requestBody->fiveGhzSettings->minBitrate = 633608;
    $request->requestBody->fiveGhzSettings->minPower = 398434;
    $request->requestBody->fiveGhzSettings->rxsop = 949298;
    $request->requestBody->fiveGhzSettings->validAutoChannels = [
        936747,
    ];
    $request->requestBody->minBitrateType = CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum::BAND;
    $request->requestBody->name = 'Charlotte Rempel';
    $request->requestBody->twoFourGhzSettings = new CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings();
    $request->requestBody->twoFourGhzSettings->axEnabled = false;
    $request->requestBody->twoFourGhzSettings->maxPower = 33304;
    $request->requestBody->twoFourGhzSettings->minBitrate = 3069.86;
    $request->requestBody->twoFourGhzSettings->minPower = 958983;
    $request->requestBody->twoFourGhzSettings->rxsop = 119771;
    $request->requestBody->twoFourGhzSettings->validAutoChannels = [
        443879,
        356707,
    ];
    $request->networkId = 'nisi';

    $response = $sdk->radioSettings->createNetworkWirelessRfProfile($request);

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
    $request->networkId = 'aut';
    $request->rfProfileId = 'voluptatum';

    $response = $sdk->radioSettings->deleteNetworkWirelessRfProfile($request);

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
    $request->networkId = 'qui';
    $request->rfProfileId = 'quibusdam';

    $response = $sdk->radioSettings->getNetworkWirelessRfProfile($request);

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
    $request->networkId = 'ex';

    $response = $sdk->radioSettings->getNetworkWirelessRfProfiles($request);

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
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessRfProfileRequest();
    $request->requestBody = new UpdateNetworkWirelessRfProfileRequestBody();
    $request->requestBody->apBandSettings = new UpdateNetworkWirelessRfProfileRequestBodyApBandSettings();
    $request->requestBody->apBandSettings->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum::FIVEGHZ;
    $request->requestBody->apBandSettings->bandSteeringEnabled = false;
    $request->requestBody->bandSelectionType = UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum::SSID;
    $request->requestBody->clientBalancingEnabled = false;
    $request->requestBody->fiveGhzSettings = new UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings();
    $request->requestBody->fiveGhzSettings->channelWidth = 'dolorum';
    $request->requestBody->fiveGhzSettings->maxPower = 99615;
    $request->requestBody->fiveGhzSettings->minBitrate = 609178;
    $request->requestBody->fiveGhzSettings->minPower = 945302;
    $request->requestBody->fiveGhzSettings->rxsop = 98478;
    $request->requestBody->fiveGhzSettings->validAutoChannels = [
        92027,
        454162,
        55965,
        326701,
    ];
    $request->requestBody->minBitrateType = UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum::BAND;
    $request->requestBody->name = 'Sherry Morar IV';
    $request->requestBody->twoFourGhzSettings = new UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings();
    $request->requestBody->twoFourGhzSettings->axEnabled = false;
    $request->requestBody->twoFourGhzSettings->maxPower = 15606;
    $request->requestBody->twoFourGhzSettings->minBitrate = 5130.75;
    $request->requestBody->twoFourGhzSettings->minPower = 428796;
    $request->requestBody->twoFourGhzSettings->rxsop = 649832;
    $request->requestBody->twoFourGhzSettings->validAutoChannels = [
        544591,
    ];
    $request->networkId = 'non';
    $request->rfProfileId = 'voluptatem';

    $response = $sdk->radioSettings->updateNetworkWirelessRfProfile($request);

    if ($response->updateNetworkWirelessRfProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
