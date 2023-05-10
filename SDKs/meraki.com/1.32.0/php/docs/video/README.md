# video

### Available Operations

* [getDeviceCameraVideoSettings](#getdevicecameravideosettings) - Returns video settings for the given camera
* [updateDeviceCameraVideoSettings](#updatedevicecameravideosettings) - Update video settings for the given camera

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
    $request->serial = 'reprehenderit';

    $response = $sdk->video->getDeviceCameraVideoSettings($request);

    if ($response->getDeviceCameraVideoSettings200ApplicationJSONObject !== null) {
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
    $request->serial = 'sint';

    $response = $sdk->video->updateDeviceCameraVideoSettings($request);

    if ($response->updateDeviceCameraVideoSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
