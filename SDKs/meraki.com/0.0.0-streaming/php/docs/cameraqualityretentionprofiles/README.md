# cameraQualityRetentionProfiles

### Available Operations

* [createNetworkCameraQualityRetentionProfile](#createnetworkcameraqualityretentionprofile) - Creates new quality retention profile for this network.
* [deleteNetworkCameraQualityRetentionProfile](#deletenetworkcameraqualityretentionprofile) - Delete an existing quality retention profile for this network.
* [getNetworkCameraQualityRetentionProfile](#getnetworkcameraqualityretentionprofile) - Retrieve a single quality retention profile
* [getNetworkCameraQualityRetentionProfiles](#getnetworkcameraqualityretentionprofiles) - List the quality retention profiles for this network
* [updateNetworkCameraQualityRetentionProfile](#updatenetworkcameraqualityretentionprofile) - Update an existing quality retention profile for this network.

## createNetworkCameraQualityRetentionProfile

Creates new quality retention profile for this network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkCameraQualityRetentionProfileRequest();
    $request->requestBody = new CreateNetworkCameraQualityRetentionProfileRequestBody();
    $request->requestBody->audioRecordingEnabled = false;
    $request->requestBody->cloudArchiveEnabled = false;
    $request->requestBody->maxRetentionDays = 282807;
    $request->requestBody->motionBasedRetentionEnabled = false;
    $request->requestBody->motionDetectorVersion = 979587;
    $request->requestBody->name = 'Stacy Gulgowski MD';
    $request->requestBody->restrictedBandwidthModeEnabled = false;
    $request->requestBody->scheduleId = 'enim';
    $request->requestBody->videoSettings = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings();
    $request->requestBody->videoSettings->mv12Mv22Mv72 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72();
    $request->requestBody->videoSettings->mv12Mv22Mv72->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv12Mv22Mv72->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv12We = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE();
    $request->requestBody->videoSettings->mv12We->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv12We->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv13 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13();
    $request->requestBody->videoSettings->mv13->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv13->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum::TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512;
    $request->requestBody->videoSettings->mv21Mv71 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71();
    $request->requestBody->videoSettings->mv21Mv71->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum::HIGH;
    $request->requestBody->videoSettings->mv21Mv71->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv22XMv72X = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X();
    $request->requestBody->videoSettings->mv22XMv72X->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum::HIGH;
    $request->requestBody->videoSettings->mv22XMv72X->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum::TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512;
    $request->requestBody->videoSettings->mv32 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32();
    $request->requestBody->videoSettings->mv32->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv32->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum::TWO_THOUSAND_AND_FIFTY_EIGHTX2058;
    $request->requestBody->videoSettings->mv33 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33();
    $request->requestBody->videoSettings->mv33->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum::HIGH;
    $request->requestBody->videoSettings->mv33->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnum::TWO_THOUSAND_ONE_HUNDRED_AND_TWELVEX2112;
    $request->requestBody->videoSettings->mv52 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52();
    $request->requestBody->videoSettings->mv52->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv52->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnum::THREE_THOUSAND_EIGHT_HUNDRED_AND_FORTYX2160;
    $request->requestBody->videoSettings->mv63 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63();
    $request->requestBody->videoSettings->mv63->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnum::HIGH;
    $request->requestBody->videoSettings->mv63->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnum::ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080;
    $request->requestBody->videoSettings->mv63X = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X();
    $request->requestBody->videoSettings->mv63X->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv63X->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnum::ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080;
    $request->requestBody->videoSettings->mv93 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93();
    $request->requestBody->videoSettings->mv93->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv93->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnum::ONE_THOUSAND_AND_EIGHTYX1080;
    $request->requestBody->videoSettings->mv93X = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X();
    $request->requestBody->videoSettings->mv93X->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv93X->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnum::TWO_THOUSAND_EIGHT_HUNDRED_AND_EIGHTYX2880;
    $request->networkId = 'explicabo';

    $response = $sdk->cameraQualityRetentionProfiles->createNetworkCameraQualityRetentionProfile($request);

    if ($response->createNetworkCameraQualityRetentionProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkCameraQualityRetentionProfile

Delete an existing quality retention profile for this network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkCameraQualityRetentionProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkCameraQualityRetentionProfileRequest();
    $request->networkId = 'deserunt';
    $request->qualityRetentionProfileId = 'distinctio';

    $response = $sdk->cameraQualityRetentionProfiles->deleteNetworkCameraQualityRetentionProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCameraQualityRetentionProfile

Retrieve a single quality retention profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCameraQualityRetentionProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCameraQualityRetentionProfileRequest();
    $request->networkId = 'quibusdam';
    $request->qualityRetentionProfileId = 'labore';

    $response = $sdk->cameraQualityRetentionProfiles->getNetworkCameraQualityRetentionProfile($request);

    if ($response->getNetworkCameraQualityRetentionProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCameraQualityRetentionProfiles

List the quality retention profiles for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCameraQualityRetentionProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCameraQualityRetentionProfilesRequest();
    $request->networkId = 'modi';

    $response = $sdk->cameraQualityRetentionProfiles->getNetworkCameraQualityRetentionProfiles($request);

    if ($response->getNetworkCameraQualityRetentionProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkCameraQualityRetentionProfile

Update an existing quality retention profile for this network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkCameraQualityRetentionProfileRequest();
    $request->requestBody = new UpdateNetworkCameraQualityRetentionProfileRequestBody();
    $request->requestBody->audioRecordingEnabled = false;
    $request->requestBody->cloudArchiveEnabled = false;
    $request->requestBody->maxRetentionDays = 183191;
    $request->requestBody->motionBasedRetentionEnabled = false;
    $request->requestBody->motionDetectorVersion = 397821;
    $request->requestBody->name = 'Isaac Aufderhar';
    $request->requestBody->restrictedBandwidthModeEnabled = false;
    $request->requestBody->scheduleId = 'ipsam';
    $request->requestBody->videoSettings = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings();
    $request->requestBody->videoSettings->mv12Mv22Mv72 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72();
    $request->requestBody->videoSettings->mv12Mv22Mv72->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv12Mv22Mv72->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv12We = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE();
    $request->requestBody->videoSettings->mv12We->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv12We->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnum::ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080;
    $request->requestBody->videoSettings->mv13 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13();
    $request->requestBody->videoSettings->mv13->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv13->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum::TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512;
    $request->requestBody->videoSettings->mv21Mv71 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71();
    $request->requestBody->videoSettings->mv21Mv71->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv21Mv71->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv22XMv72X = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X();
    $request->requestBody->videoSettings->mv22XMv72X->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv22XMv72X->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum::TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512;
    $request->requestBody->videoSettings->mv32 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32();
    $request->requestBody->videoSettings->mv32->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum::HIGH;
    $request->requestBody->videoSettings->mv32->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum::ONE_THOUSAND_AND_EIGHTYX1080;
    $request->requestBody->videoSettings->mv33 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33();
    $request->requestBody->videoSettings->mv33->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv33->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnum::TWO_THOUSAND_ONE_HUNDRED_AND_TWELVEX2112;
    $request->requestBody->videoSettings->mv52 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52();
    $request->requestBody->videoSettings->mv52->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnum::HIGH;
    $request->requestBody->videoSettings->mv52->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnum::TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512;
    $request->requestBody->videoSettings->mv63 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63();
    $request->requestBody->videoSettings->mv63->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv63->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnum::TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512;
    $request->requestBody->videoSettings->mv63X = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X();
    $request->requestBody->videoSettings->mv63X->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnum::HIGH;
    $request->requestBody->videoSettings->mv63X->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnum::ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080;
    $request->requestBody->videoSettings->mv93 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93();
    $request->requestBody->videoSettings->mv93->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv93->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnum::TWO_THOUSAND_ONE_HUNDRED_AND_TWELVEX2112;
    $request->requestBody->videoSettings->mv93X = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X();
    $request->requestBody->videoSettings->mv93X->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv93X->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnum::TWO_THOUSAND_ONE_HUNDRED_AND_TWELVEX2112;
    $request->networkId = 'in';
    $request->qualityRetentionProfileId = 'illum';

    $response = $sdk->cameraQualityRetentionProfiles->updateNetworkCameraQualityRetentionProfile($request);

    if ($response->updateNetworkCameraQualityRetentionProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
