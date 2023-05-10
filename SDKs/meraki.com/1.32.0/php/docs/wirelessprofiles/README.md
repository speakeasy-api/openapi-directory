# wirelessProfiles

### Available Operations

* [createNetworkCameraWirelessProfile](#createnetworkcamerawirelessprofile) - Creates a new camera wireless profile for this network.
* [deleteNetworkCameraWirelessProfile](#deletenetworkcamerawirelessprofile) - Delete an existing camera wireless profile for this network.
* [getDeviceCameraWirelessProfiles](#getdevicecamerawirelessprofiles) - Returns wireless profile assigned to the given camera
* [getNetworkCameraWirelessProfile](#getnetworkcamerawirelessprofile) - Retrieve a single camera wireless profile.
* [getNetworkCameraWirelessProfiles](#getnetworkcamerawirelessprofiles) - List the camera wireless profiles for this network.
* [updateDeviceCameraWirelessProfiles](#updatedevicecamerawirelessprofiles) - Assign wireless profiles to the given camera
* [updateNetworkCameraWirelessProfile](#updatenetworkcamerawirelessprofile) - Update an existing camera wireless profile in this network.

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
    $request->requestBody->identity->password = 'vel';
    $request->requestBody->identity->username = 'Mervin_Mante';
    $request->requestBody->name = 'Robin Kassulke';
    $request->requestBody->ssid = new CreateNetworkCameraWirelessProfileRequestBodySsid();
    $request->requestBody->ssid->authMode = CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum::EIGHT_THOUSAND_AND_TWENTY_ONEX_RADIUS;
    $request->requestBody->ssid->encryptionMode = 'repellendus';
    $request->requestBody->ssid->name = 'Christy Nicolas';
    $request->requestBody->ssid->psk = 'et';
    $request->networkId = 'dolore';

    $response = $sdk->wirelessProfiles->createNetworkCameraWirelessProfile($request);

    if ($response->createNetworkCameraWirelessProfile200ApplicationJSONObject !== null) {
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
    $request->wirelessProfileId = 'similique';

    $response = $sdk->wirelessProfiles->deleteNetworkCameraWirelessProfile($request);

    if ($response->statusCode === 200) {
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
    $request->serial = 'quae';

    $response = $sdk->wirelessProfiles->getDeviceCameraWirelessProfiles($request);

    if ($response->getDeviceCameraWirelessProfiles200ApplicationJSONObject !== null) {
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
    $request->networkId = 'distinctio';
    $request->wirelessProfileId = 'rem';

    $response = $sdk->wirelessProfiles->getNetworkCameraWirelessProfile($request);

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
    $request->networkId = 'tempora';

    $response = $sdk->wirelessProfiles->getNetworkCameraWirelessProfiles($request);

    if ($response->getNetworkCameraWirelessProfiles200ApplicationJSONObjects !== null) {
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
    $request->requestBody->ids->backup = 'veritatis';
    $request->requestBody->ids->primary = 'dicta';
    $request->requestBody->ids->secondary = 'perspiciatis';
    $request->serial = 'praesentium';

    $response = $sdk->wirelessProfiles->updateDeviceCameraWirelessProfiles($request);

    if ($response->updateDeviceCameraWirelessProfiles200ApplicationJSONObject !== null) {
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
    $request->requestBody->identity->password = 'ea';
    $request->requestBody->identity->username = 'Easton51';
    $request->requestBody->name = 'Kristin Renner V';
    $request->requestBody->ssid = new UpdateNetworkCameraWirelessProfileRequestBodySsid();
    $request->requestBody->ssid->authMode = UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum::EIGHT_THOUSAND_AND_TWENTY_ONEX_RADIUS;
    $request->requestBody->ssid->encryptionMode = 'dicta';
    $request->requestBody->ssid->name = 'Sheila Stehr';
    $request->requestBody->ssid->psk = 'aut';
    $request->networkId = 'ex';
    $request->wirelessProfileId = 'inventore';

    $response = $sdk->wirelessProfiles->updateNetworkCameraWirelessProfile($request);

    if ($response->updateNetworkCameraWirelessProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
