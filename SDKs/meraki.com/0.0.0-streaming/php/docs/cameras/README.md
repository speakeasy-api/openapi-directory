# cameras

### Available Operations

* [generateNetworkCameraSnapshot](#generatenetworkcamerasnapshot) - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* [getDeviceCameraVideoSettings](#getdevicecameravideosettings) - Returns video settings for the given camera
* [getNetworkCameraSchedules](#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [getNetworkCameraVideoLink](#getnetworkcameravideolink) - Returns video link to the specified camera
* [updateDeviceCameraVideoSettings](#updatedevicecameravideosettings) - Update video settings for the given camera

## generateNetworkCameraSnapshot

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenerateNetworkCameraSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GenerateNetworkCameraSnapshotRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateNetworkCameraSnapshotRequest();
    $request->requestBody = new GenerateNetworkCameraSnapshotRequestBody();
    $request->requestBody->fullframe = false;
    $request->requestBody->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-26T01:41:04.216Z');
    $request->networkId = 'dicta';
    $request->serial = 'magnam';

    $response = $sdk->cameras->generateNetworkCameraSnapshot($request);

    if ($response->generateNetworkCameraSnapshot202ApplicationJSONObject !== null) {
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
    $request->serial = 'cumque';

    $response = $sdk->cameras->getDeviceCameraVideoSettings($request);

    if ($response->getDeviceCameraVideoSettings200ApplicationJSONObject !== null) {
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
    $request->networkId = 'facere';

    $response = $sdk->cameras->getNetworkCameraSchedules($request);

    if ($response->getNetworkCameraSchedules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCameraVideoLink

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCameraVideoLinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCameraVideoLinkRequest();
    $request->networkId = 'ea';
    $request->serial = 'aliquid';
    $request->timestamp = 'laborum';

    $response = $sdk->cameras->getNetworkCameraVideoLink($request);

    if ($response->getNetworkCameraVideoLink200ApplicationJSONObject !== null) {
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
    $request->serial = 'accusamus';

    $response = $sdk->cameras->updateDeviceCameraVideoSettings($request);

    if ($response->updateDeviceCameraVideoSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
