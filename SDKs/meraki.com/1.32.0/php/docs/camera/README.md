# camera

### Available Operations

* [createNetworkCameraQualityRetentionProfile](#createnetworkcameraqualityretentionprofile) - Creates new quality retention profile for this network.
* [createNetworkCameraWirelessProfile](#createnetworkcamerawirelessprofile) - Creates a new camera wireless profile for this network.
* [createOrganizationCameraCustomAnalyticsArtifact](#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [deleteNetworkCameraQualityRetentionProfile](#deletenetworkcameraqualityretentionprofile) - Delete an existing quality retention profile for this network.
* [deleteNetworkCameraWirelessProfile](#deletenetworkcamerawirelessprofile) - Delete an existing camera wireless profile for this network.
* [deleteOrganizationCameraCustomAnalyticsArtifact](#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [generateDeviceCameraSnapshot](#generatedevicecamerasnapshot) - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* [getDeviceCameraAnalyticsLive](#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones
* [getDeviceCameraAnalyticsOverview](#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [getDeviceCameraAnalyticsRecent](#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones
* [getDeviceCameraAnalyticsZoneHistory](#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [getDeviceCameraAnalyticsZones](#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera
* [getDeviceCameraCustomAnalytics](#getdevicecameracustomanalytics) - Return custom analytics settings for a camera
* [getDeviceCameraQualityAndRetention](#getdevicecameraqualityandretention) - Returns quality and retention settings for the given camera
* [getDeviceCameraSense](#getdevicecamerasense) - Returns sense settings for a given camera
* [getDeviceCameraSenseObjectDetectionModels](#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera
* [getDeviceCameraVideoLink](#getdevicecameravideolink) - Returns video link to the specified camera
* [getDeviceCameraVideoSettings](#getdevicecameravideosettings) - Returns video settings for the given camera
* [getDeviceCameraWirelessProfiles](#getdevicecamerawirelessprofiles) - Returns wireless profile assigned to the given camera
* [getNetworkCameraQualityRetentionProfile](#getnetworkcameraqualityretentionprofile) - Retrieve a single quality retention profile
* [getNetworkCameraQualityRetentionProfiles](#getnetworkcameraqualityretentionprofiles) - List the quality retention profiles for this network
* [getNetworkCameraSchedules](#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [getNetworkCameraWirelessProfile](#getnetworkcamerawirelessprofile) - Retrieve a single camera wireless profile.
* [getNetworkCameraWirelessProfiles](#getnetworkcamerawirelessprofiles) - List the camera wireless profiles for this network.
* [getOrganizationCameraCustomAnalyticsArtifact](#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [getOrganizationCameraCustomAnalyticsArtifacts](#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts
* [getOrganizationCameraOnboardingStatuses](#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [updateDeviceCameraCustomAnalytics](#updatedevicecameracustomanalytics) - Update custom analytics settings for a camera
* [updateDeviceCameraQualityAndRetention](#updatedevicecameraqualityandretention) - Update quality and retention settings for the given camera
* [updateDeviceCameraSense](#updatedevicecamerasense) - Update sense settings for the given camera
* [updateDeviceCameraVideoSettings](#updatedevicecameravideosettings) - Update video settings for the given camera
* [updateDeviceCameraWirelessProfiles](#updatedevicecamerawirelessprofiles) - Assign wireless profiles to the given camera
* [updateNetworkCameraQualityRetentionProfile](#updatenetworkcameraqualityretentionprofile) - Update an existing quality retention profile for this network.
* [updateNetworkCameraWirelessProfile](#updatenetworkcamerawirelessprofile) - Update an existing camera wireless profile in this network.
* [updateOrganizationCameraOnboardingStatuses](#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed

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
    $request->requestBody->maxRetentionDays = 339631;
    $request->requestBody->motionBasedRetentionEnabled = false;
    $request->requestBody->motionDetectorVersion = 106255;
    $request->requestBody->name = 'Clinton Windler';
    $request->requestBody->restrictedBandwidthModeEnabled = false;
    $request->requestBody->scheduleId = 'numquam';
    $request->requestBody->videoSettings = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings();
    $request->requestBody->videoSettings->mv12Mv22Mv72 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72();
    $request->requestBody->videoSettings->mv12Mv22Mv72->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv12Mv22Mv72->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv12We = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE();
    $request->requestBody->videoSettings->mv12We->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv12We->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnum::ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080;
    $request->requestBody->videoSettings->mv13 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13();
    $request->requestBody->videoSettings->mv13->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum::HIGH;
    $request->requestBody->videoSettings->mv13->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum::TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512;
    $request->requestBody->videoSettings->mv21Mv71 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71();
    $request->requestBody->videoSettings->mv21Mv71->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv21Mv71->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv22XMv72X = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X();
    $request->requestBody->videoSettings->mv22XMv72X->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum::HIGH;
    $request->requestBody->videoSettings->mv22XMv72X->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv32 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32();
    $request->requestBody->videoSettings->mv32->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv32->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum::TWO_THOUSAND_AND_FIFTY_EIGHTX2058;
    $request->requestBody->videoSettings->mv33 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33();
    $request->requestBody->videoSettings->mv33->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum::HIGH;
    $request->requestBody->videoSettings->mv33->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnum::ONE_THOUSAND_AND_EIGHTYX1080;
    $request->requestBody->videoSettings->mv52 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52();
    $request->requestBody->videoSettings->mv52->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv52->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnum::ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080;
    $request->requestBody->videoSettings->mv63 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63();
    $request->requestBody->videoSettings->mv63->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv63->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnum::ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080;
    $request->requestBody->videoSettings->mv63X = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X();
    $request->requestBody->videoSettings->mv63X->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv63X->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnum::TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512;
    $request->requestBody->videoSettings->mv93 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93();
    $request->requestBody->videoSettings->mv93->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv93->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnum::ONE_THOUSAND_AND_EIGHTYX1080;
    $request->requestBody->videoSettings->mv93X = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X();
    $request->requestBody->videoSettings->mv93X->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv93X->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnum::TWO_THOUSAND_EIGHT_HUNDRED_AND_EIGHTYX2880;
    $request->networkId = 'maiores';

    $response = $sdk->camera->createNetworkCameraQualityRetentionProfile($request);

    if ($response->createNetworkCameraQualityRetentionProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkCameraWirelessProfile

Creates a new camera wireless profile for this network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraWirelessProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraWirelessProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraWirelessProfileRequestBodyIdentity;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraWirelessProfileRequestBodySsid;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkCameraWirelessProfileRequest();
    $request->requestBody = new CreateNetworkCameraWirelessProfileRequestBody();
    $request->requestBody->identity = new CreateNetworkCameraWirelessProfileRequestBodyIdentity();
    $request->requestBody->identity->password = 'tempore';
    $request->requestBody->identity->username = 'Alvis28';
    $request->requestBody->name = 'Sergio Hirthe';
    $request->requestBody->ssid = new CreateNetworkCameraWirelessProfileRequestBodySsid();
    $request->requestBody->ssid->authMode = CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum::PSK;
    $request->requestBody->ssid->encryptionMode = 'fuga';
    $request->requestBody->ssid->name = 'Jodi Russel';
    $request->requestBody->ssid->psk = 'vero';
    $request->networkId = 'odit';

    $response = $sdk->camera->createNetworkCameraWirelessProfile($request);

    if ($response->createNetworkCameraWirelessProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationCameraCustomAnalyticsArtifact

Create custom analytics artifact. Returns an artifact upload URL with expiry time. Upload the artifact file with a put request to the returned upload URL before its expiry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationCameraCustomAnalyticsArtifactRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationCameraCustomAnalyticsArtifactRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationCameraCustomAnalyticsArtifactRequest();
    $request->requestBody = new CreateOrganizationCameraCustomAnalyticsArtifactRequestBody();
    $request->requestBody->name = 'Ervin Hettinger IV';
    $request->organizationId = 'minima';

    $response = $sdk->camera->createOrganizationCameraCustomAnalyticsArtifact($request);

    if ($response->createOrganizationCameraCustomAnalyticsArtifact201ApplicationJSONObject !== null) {
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
    $request->networkId = 'in';
    $request->qualityRetentionProfileId = 'ducimus';

    $response = $sdk->camera->deleteNetworkCameraQualityRetentionProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkCameraWirelessProfile

Delete an existing camera wireless profile for this network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkCameraWirelessProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkCameraWirelessProfileRequest();
    $request->networkId = 'excepturi';
    $request->wirelessProfileId = 'dolores';

    $response = $sdk->camera->deleteNetworkCameraWirelessProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationCameraCustomAnalyticsArtifact

Delete Custom Analytics Artifact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationCameraCustomAnalyticsArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationCameraCustomAnalyticsArtifactRequest();
    $request->artifactId = 'error';
    $request->organizationId = 'veritatis';

    $response = $sdk->camera->deleteOrganizationCameraCustomAnalyticsArtifact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generateDeviceCameraSnapshot

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenerateDeviceCameraSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GenerateDeviceCameraSnapshotRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateDeviceCameraSnapshotRequest();
    $request->requestBody = new GenerateDeviceCameraSnapshotRequestBody();
    $request->requestBody->fullframe = false;
    $request->requestBody->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-19T18:05:42.224Z');
    $request->serial = 'pariatur';

    $response = $sdk->camera->generateDeviceCameraSnapshot($request);

    if ($response->generateDeviceCameraSnapshot202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraAnalyticsLive

Returns live state from camera of analytics zones

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsLiveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraAnalyticsLiveRequest();
    $request->serial = 'itaque';

    $response = $sdk->camera->getDeviceCameraAnalyticsLive($request);

    if ($response->getDeviceCameraAnalyticsLive200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraAnalyticsOverview

Returns an overview of aggregate analytics data for a timespan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsOverviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsOverviewObjectTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraAnalyticsOverviewRequest();
    $request->objectType = GetDeviceCameraAnalyticsOverviewObjectTypeEnum::VEHICLE;
    $request->serial = 'optio';
    $request->t0 = 'ex';
    $request->t1 = 'quaerat';
    $request->timespan = 4166.92;

    $response = $sdk->camera->getDeviceCameraAnalyticsOverview($request);

    if ($response->getDeviceCameraAnalyticsOverview200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraAnalyticsRecent

Returns most recent record for analytics zones

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsRecentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsRecentObjectTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraAnalyticsRecentRequest();
    $request->objectType = GetDeviceCameraAnalyticsRecentObjectTypeEnum::VEHICLE;
    $request->serial = 'placeat';

    $response = $sdk->camera->getDeviceCameraAnalyticsRecent($request);

    if ($response->getDeviceCameraAnalyticsRecent200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraAnalyticsZoneHistory

Return historical records for analytic zones

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsZoneHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraAnalyticsZoneHistoryRequest();
    $request->objectType = GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum::VEHICLE;
    $request->resolution = 348192;
    $request->serial = 'quam';
    $request->t0 = 'dolorem';
    $request->t1 = 'modi';
    $request->timespan = 593.83;
    $request->zoneId = 'sint';

    $response = $sdk->camera->getDeviceCameraAnalyticsZoneHistory($request);

    if ($response->getDeviceCameraAnalyticsZoneHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraAnalyticsZones

Returns all configured analytic zones for this camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsZonesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraAnalyticsZonesRequest();
    $request->serial = 'vero';

    $response = $sdk->camera->getDeviceCameraAnalyticsZones($request);

    if ($response->getDeviceCameraAnalyticsZones200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraCustomAnalytics

Return custom analytics settings for a camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraCustomAnalyticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraCustomAnalyticsRequest();
    $request->serial = 'sequi';

    $response = $sdk->camera->getDeviceCameraCustomAnalytics($request);

    if ($response->getDeviceCameraCustomAnalytics200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraQualityAndRetention

Returns quality and retention settings for the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraQualityAndRetentionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraQualityAndRetentionRequest();
    $request->serial = 'repudiandae';

    $response = $sdk->camera->getDeviceCameraQualityAndRetention($request);

    if ($response->getDeviceCameraQualityAndRetention200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraSense

Returns sense settings for a given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraSenseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraSenseRequest();
    $request->serial = 'cum';

    $response = $sdk->camera->getDeviceCameraSense($request);

    if ($response->getDeviceCameraSense200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraSenseObjectDetectionModels

Returns the MV Sense object detection model list for the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraSenseObjectDetectionModelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraSenseObjectDetectionModelsRequest();
    $request->serial = 'dicta';

    $response = $sdk->camera->getDeviceCameraSenseObjectDetectionModels($request);

    if ($response->getDeviceCameraSenseObjectDetectionModels200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraVideoLink

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraVideoLinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraVideoLinkRequest();
    $request->serial = 'earum';
    $request->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-05T08:48:48.155Z');

    $response = $sdk->camera->getDeviceCameraVideoLink($request);

    if ($response->getDeviceCameraVideoLink200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraVideoSettings

Returns video settings for the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraVideoSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraVideoSettingsRequest();
    $request->serial = 'dolores';

    $response = $sdk->camera->getDeviceCameraVideoSettings($request);

    if ($response->getDeviceCameraVideoSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraWirelessProfiles

Returns wireless profile assigned to the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraWirelessProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraWirelessProfilesRequest();
    $request->serial = 'nam';

    $response = $sdk->camera->getDeviceCameraWirelessProfiles($request);

    if ($response->getDeviceCameraWirelessProfiles200ApplicationJSONObject !== null) {
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
    $request->networkId = 'dicta';
    $request->qualityRetentionProfileId = 'consequuntur';

    $response = $sdk->camera->getNetworkCameraQualityRetentionProfile($request);

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
    $request->networkId = 'necessitatibus';

    $response = $sdk->camera->getNetworkCameraQualityRetentionProfiles($request);

    if ($response->getNetworkCameraQualityRetentionProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCameraSchedules

Returns a list of all camera recording schedules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCameraSchedulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCameraSchedulesRequest();
    $request->networkId = 'nobis';

    $response = $sdk->camera->getNetworkCameraSchedules($request);

    if ($response->getNetworkCameraSchedules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCameraWirelessProfile

Retrieve a single camera wireless profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCameraWirelessProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCameraWirelessProfileRequest();
    $request->networkId = 'ipsa';
    $request->wirelessProfileId = 'ducimus';

    $response = $sdk->camera->getNetworkCameraWirelessProfile($request);

    if ($response->getNetworkCameraWirelessProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCameraWirelessProfiles

List the camera wireless profiles for this network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCameraWirelessProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCameraWirelessProfilesRequest();
    $request->networkId = 'maiores';

    $response = $sdk->camera->getNetworkCameraWirelessProfiles($request);

    if ($response->getNetworkCameraWirelessProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationCameraCustomAnalyticsArtifact

Get Custom Analytics Artifact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCameraCustomAnalyticsArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationCameraCustomAnalyticsArtifactRequest();
    $request->artifactId = 'veritatis';
    $request->organizationId = 'quasi';

    $response = $sdk->camera->getOrganizationCameraCustomAnalyticsArtifact($request);

    if ($response->getOrganizationCameraCustomAnalyticsArtifact200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationCameraCustomAnalyticsArtifacts

List Custom Analytics Artifacts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCameraCustomAnalyticsArtifactsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationCameraCustomAnalyticsArtifactsRequest();
    $request->organizationId = 'laboriosam';

    $response = $sdk->camera->getOrganizationCameraCustomAnalyticsArtifacts($request);

    if ($response->getOrganizationCameraCustomAnalyticsArtifacts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationCameraOnboardingStatuses

Fetch onboarding status of cameras

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCameraOnboardingStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationCameraOnboardingStatusesRequest();
    $request->networkIds = [
        'libero',
        'excepturi',
        'occaecati',
        'nemo',
    ];
    $request->organizationId = 'aliquam';
    $request->serials = [
        'doloribus',
        'eligendi',
    ];

    $response = $sdk->camera->getOrganizationCameraOnboardingStatuses($request);

    if ($response->getOrganizationCameraOnboardingStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCameraCustomAnalytics

Update custom analytics settings for a camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraCustomAnalyticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraCustomAnalyticsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraCustomAnalyticsRequestBodyParameters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCameraCustomAnalyticsRequest();
    $request->requestBody = new UpdateDeviceCameraCustomAnalyticsRequestBody();
    $request->requestBody->artifactId = 'sint';
    $request->requestBody->enabled = false;
    $request->requestBody->parameters = [
        new UpdateDeviceCameraCustomAnalyticsRequestBodyParameters(),
        new UpdateDeviceCameraCustomAnalyticsRequestBodyParameters(),
    ];
    $request->serial = 'hic';

    $response = $sdk->camera->updateDeviceCameraCustomAnalytics($request);

    if ($response->updateDeviceCameraCustomAnalytics200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCameraQualityAndRetention

Update quality and retention settings for the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraQualityAndRetentionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraQualityAndRetentionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraQualityAndRetentionRequestBodyMotionDetectorVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCameraQualityAndRetentionRequest();
    $request->requestBody = new UpdateDeviceCameraQualityAndRetentionRequestBody();
    $request->requestBody->audioRecordingEnabled = false;
    $request->requestBody->motionBasedRetentionEnabled = false;
    $request->requestBody->motionDetectorVersion = UpdateDeviceCameraQualityAndRetentionRequestBodyMotionDetectorVersionEnum::TWO;
    $request->requestBody->profileId = 'quas';
    $request->requestBody->quality = UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum::HIGH;
    $request->requestBody->resolution = UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum::TWO_THOUSAND_ONE_HUNDRED_AND_TWELVEX2112;
    $request->requestBody->restrictedBandwidthModeEnabled = false;
    $request->serial = 'odio';

    $response = $sdk->camera->updateDeviceCameraQualityAndRetention($request);

    if ($response->updateDeviceCameraQualityAndRetention200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCameraSense

Update sense settings for the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraSenseRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraSenseRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraSenseRequestBodyAudioDetection;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCameraSenseRequest();
    $request->requestBody = new UpdateDeviceCameraSenseRequestBody();
    $request->requestBody->audioDetection = new UpdateDeviceCameraSenseRequestBodyAudioDetection();
    $request->requestBody->audioDetection->enabled = false;
    $request->requestBody->detectionModelId = 'eaque';
    $request->requestBody->mqttBrokerId = 'saepe';
    $request->requestBody->senseEnabled = false;
    $request->serial = 'architecto';

    $response = $sdk->camera->updateDeviceCameraSense($request);

    if ($response->updateDeviceCameraSense200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCameraVideoSettings

Update video settings for the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraVideoSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraVideoSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCameraVideoSettingsRequest();
    $request->requestBody = new UpdateDeviceCameraVideoSettingsRequestBody();
    $request->requestBody->externalRtspEnabled = false;
    $request->serial = 'quos';

    $response = $sdk->camera->updateDeviceCameraVideoSettings($request);

    if ($response->updateDeviceCameraVideoSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCameraWirelessProfiles

Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraWirelessProfilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraWirelessProfilesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraWirelessProfilesRequestBodyIds;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCameraWirelessProfilesRequest();
    $request->requestBody = new UpdateDeviceCameraWirelessProfilesRequestBody();
    $request->requestBody->ids = new UpdateDeviceCameraWirelessProfilesRequestBodyIds();
    $request->requestBody->ids->backup = 'iste';
    $request->requestBody->ids->primary = 'assumenda';
    $request->requestBody->ids->secondary = 'tempore';
    $request->serial = 'libero';

    $response = $sdk->camera->updateDeviceCameraWirelessProfiles($request);

    if ($response->updateDeviceCameraWirelessProfiles200ApplicationJSONObject !== null) {
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
    $request->requestBody->maxRetentionDays = 244032;
    $request->requestBody->motionBasedRetentionEnabled = false;
    $request->requestBody->motionDetectorVersion = 38557;
    $request->requestBody->name = 'Edmund Robel';
    $request->requestBody->restrictedBandwidthModeEnabled = false;
    $request->requestBody->scheduleId = 'saepe';
    $request->requestBody->videoSettings = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings();
    $request->requestBody->videoSettings->mv12Mv22Mv72 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72();
    $request->requestBody->videoSettings->mv12Mv22Mv72->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum::HIGH;
    $request->requestBody->videoSettings->mv12Mv22Mv72->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv12We = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE();
    $request->requestBody->videoSettings->mv12We->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnum::HIGH;
    $request->requestBody->videoSettings->mv12We->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv13 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13();
    $request->requestBody->videoSettings->mv13->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv13->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum::ONE_THOUSAND_AND_EIGHTYX1080;
    $request->requestBody->videoSettings->mv21Mv71 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71();
    $request->requestBody->videoSettings->mv21Mv71->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum::HIGH;
    $request->requestBody->videoSettings->mv21Mv71->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv22XMv72X = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X();
    $request->requestBody->videoSettings->mv22XMv72X->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum::HIGH;
    $request->requestBody->videoSettings->mv22XMv72X->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum::TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512;
    $request->requestBody->videoSettings->mv32 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32();
    $request->requestBody->videoSettings->mv32->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv32->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum::ONE_THOUSAND_AND_EIGHTYX1080;
    $request->requestBody->videoSettings->mv33 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33();
    $request->requestBody->videoSettings->mv33->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv33->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnum::TWO_THOUSAND_ONE_HUNDRED_AND_TWELVEX2112;
    $request->requestBody->videoSettings->mv52 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52();
    $request->requestBody->videoSettings->mv52->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv52->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnum::THREE_THOUSAND_EIGHT_HUNDRED_AND_FORTYX2160;
    $request->requestBody->videoSettings->mv63 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63();
    $request->requestBody->videoSettings->mv63->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv63->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnum::ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080;
    $request->requestBody->videoSettings->mv63X = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X();
    $request->requestBody->videoSettings->mv63X->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv63X->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnum::TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512;
    $request->requestBody->videoSettings->mv93 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93();
    $request->requestBody->videoSettings->mv93->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv93->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnum::TWO_THOUSAND_ONE_HUNDRED_AND_TWELVEX2112;
    $request->requestBody->videoSettings->mv93X = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X();
    $request->requestBody->videoSettings->mv93X->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv93X->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnum::TWO_THOUSAND_ONE_HUNDRED_AND_TWELVEX2112;
    $request->networkId = 'ab';
    $request->qualityRetentionProfileId = 'velit';

    $response = $sdk->camera->updateNetworkCameraQualityRetentionProfile($request);

    if ($response->updateNetworkCameraQualityRetentionProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkCameraWirelessProfile

Update an existing camera wireless profile in this network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraWirelessProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraWirelessProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraWirelessProfileRequestBodyIdentity;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraWirelessProfileRequestBodySsid;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkCameraWirelessProfileRequest();
    $request->requestBody = new UpdateNetworkCameraWirelessProfileRequestBody();
    $request->requestBody->identity = new UpdateNetworkCameraWirelessProfileRequestBodyIdentity();
    $request->requestBody->identity->password = 'facilis';
    $request->requestBody->identity->username = 'Mortimer.Huels50';
    $request->requestBody->name = 'Charlie Harvey';
    $request->requestBody->ssid = new UpdateNetworkCameraWirelessProfileRequestBodySsid();
    $request->requestBody->ssid->authMode = UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum::PSK;
    $request->requestBody->ssid->encryptionMode = 'facere';
    $request->requestBody->ssid->name = 'Dale Hamill';
    $request->requestBody->ssid->psk = 'consequuntur';
    $request->networkId = 'debitis';
    $request->wirelessProfileId = 'labore';

    $response = $sdk->camera->updateNetworkCameraWirelessProfile($request);

    if ($response->updateNetworkCameraWirelessProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationCameraOnboardingStatuses

Notify that credential handoff to camera has completed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationCameraOnboardingStatusesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationCameraOnboardingStatusesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationCameraOnboardingStatusesRequest();
    $request->requestBody = new UpdateOrganizationCameraOnboardingStatusesRequestBody();
    $request->requestBody->serial = 'rerum';
    $request->requestBody->wirelessCredentialsSent = false;
    $request->organizationId = 'eos';

    $response = $sdk->camera->updateOrganizationCameraOnboardingStatuses($request);

    if ($response->updateOrganizationCameraOnboardingStatuses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
