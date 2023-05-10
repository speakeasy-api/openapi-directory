# bluetooth

## Overview

This folder contains Bluetooth related endpoints.

### Available Operations

* [changeDiscoverability](#changediscoverability) - Change Discoverability
* [forgetpaireddevice](#forgetpaireddevice) - Forget paired device
* [getPairedDevices](#getpaireddevices) - Get Paired Devices
* [getScanResults](#getscanresults) - Get Scan Results
* [pairwithSpeaker](#pairwithspeaker) - Pair with Speaker
* [scanfordevices](#scanfordevices) - Scan for devices
* [status](#status) - Status

## changeDiscoverability

*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 1 only**

This enables/disables Home's bluetooth discovery and other devices can pair with Home (where Home acts as a speaker).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ChangeDiscoverabilityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeDiscoverabilityRequest();
    $request->enableDiscovery = false;

    $response = $sdk->bluetooth->changeDiscoverability($request);

    if ($response->changeDiscoverability200TextPlainObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## forgetpaireddevice

*See note for Bluetooth under `/setup/bluetooth/status`*

**For both parts**

This is to forget paired devices by mac address. Works for both kinds of devices (Part 1 and Part 2).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ForgetpaireddeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForgetpaireddeviceRequest();
    $request->bond = false;
    $request->macAddress = 'illum';

    $response = $sdk->bluetooth->forgetpaireddevice($request);

    if ($response->forgetpaireddevice200TextPlainObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPairedDevices

*See note for Bluetooth under `/setup/bluetooth/status`*

**For both parts**

This gives a list of all paired or 'bonded' devices. The response field names are self-descriptive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->bluetooth->getPairedDevices();

    if ($response->example111s !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScanResults

*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 2 only**

This returns a list of all nearby bluetooth devices. While the Home app only shows speakers, this list contains all devices including TVs, mobiles, etc.

`rssi` is signal strength, `name` is name, `mac_address` is mac address.  
`device_class` and `device_type` are bluetooth codes.  

The Home app only lists those devices with `expected_profiles` > 0. Basically, the device should function as a speaker.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->bluetooth->getScanResults();

    if ($response->example112s !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pairwithSpeaker

*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 2 only**

This pairs with other bluetooth speakers by mac address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PairwithSpeakerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PairwithSpeakerRequest();
    $request->connect = false;
    $request->macAddress = 'vel';
    $request->profile = 623564;

    $response = $sdk->bluetooth->pairwithSpeaker($request);

    if ($response->pairwithSpeaker200TextPlainObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scanfordevices

*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 2 only**

This initiates scan for other bluetooth speakers/devices. Scan results will be updated continuously for `timeout` seconds.  
To get the scan results, see /setup/bluetooth/scan_results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ScanfordevicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScanfordevicesRequest();
    $request->clearResults = false;
    $request->enable = false;
    $request->timeout = 645894;

    $response = $sdk->bluetooth->scanfordevices($request);

    if ($response->scanfordevices200TextPlainObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## status

> **There are 2 parts of Bluetooth.**
>
> *Part 1*: Devices like phones connect to Home and play audio through Home.  
> For this, /setup/bluetooth/discovery is used to make Home discoverable. Then devices can connect to it as if Home is just another bluetooth speaker.
>
> *Part 2*: Bluetooth speakers connect to Home and Home plays audio through the speakers.
> For this, /setup/bluetooth/scan and /setup/bluetooth/scan_results are used to connect to other speakers.
>
> The other endpoints are common for both parts.


**For both parts**

This gives the status of all bluetooth things.
- Not sure what `audio_mode` is.
- `discovery_enabled` states whether Home is discoverable. (**Part 1**)
- `connecting_devices` is a list of all media sources (like phones) connected to Home. (**Part 1**)
- `scanning_enabled` states whether Home scanning for other bluetooth speakers/devices. (**Part 2**)
- `connected_devices` is a list of all speakers connected to Home. (**Part 2**)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->bluetooth->status();

    if ($response->example110 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
