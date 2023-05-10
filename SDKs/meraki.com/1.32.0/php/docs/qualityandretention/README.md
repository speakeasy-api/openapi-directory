# qualityAndRetention

### Available Operations

* [getDeviceCameraQualityAndRetention](#getdevicecameraqualityandretention) - Returns quality and retention settings for the given camera
* [updateDeviceCameraQualityAndRetention](#updatedevicecameraqualityandretention) - Update quality and retention settings for the given camera

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
    $request->serial = 'quidem';

    $response = $sdk->qualityAndRetention->getDeviceCameraQualityAndRetention($request);

    if ($response->getDeviceCameraQualityAndRetention200ApplicationJSONObject !== null) {
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
    $request->requestBody->profileId = 'ipsam';
    $request->requestBody->quality = UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum::ENHANCED;
    $request->requestBody->resolution = UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum::TWO_THOUSAND_EIGHT_HUNDRED_AND_EIGHTYX2880;
    $request->requestBody->restrictedBandwidthModeEnabled = false;
    $request->serial = 'aperiam';

    $response = $sdk->qualityAndRetention->updateDeviceCameraQualityAndRetention($request);

    if ($response->updateDeviceCameraQualityAndRetention200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
