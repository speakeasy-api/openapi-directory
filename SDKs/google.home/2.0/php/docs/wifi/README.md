# wifi

## Overview

This folder contains Wi-Fi related endpoints.

### Available Operations

* [connecttoWiFiNetwork](#connecttowifinetwork) - Connect to Wi-Fi Network
* [forgetWiFiNetwork](#forgetwifinetwork) - Forget Wi-Fi Network
* [getSavedNetworks](#getsavednetworks) - Get Saved Networks
* [getWiFiScanResults](#getwifiscanresults) - Get Wi-Fi Scan Results
* [scanforNetworks](#scanfornetworks) - Scan for Networks

## connecttoWiFiNetwork

**Note:** Not sure how the password is encrypted. Might be using the public certificate from /setup/eureka_info. So this cannot be used as of now. If someone figures it out, please [create a new issue here](https://github.com/rithvikvibhu/GHLocalApi/issues/new).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ConnecttoWiFiNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnecttoWiFiNetworkRequest();
    $request->bssid = 'excepturi';
    $request->encPasswd = 'nisi';
    $request->signalLevel = 925597;
    $request->ssid = 'temporibus';
    $request->wpaAuth = 71036;
    $request->wpaCipher = 337396;

    $response = $sdk->wifi->connecttoWiFiNetwork($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## forgetWiFiNetwork

This is to forget a saved network by `wpa_id`. Get the `wpa_id` from /setup/configured_networks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ForgetWiFiNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForgetWiFiNetworkRequest();
    $request->wpaId = 87129;

    $response = $sdk->wifi->forgetWiFiNetwork($request);

    if ($response->forgetWiFiNetwork200TextPlainObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSavedNetworks

This gets a list of all saved Wi-Fi networks.

Each network has `ssid`, `wpa_auth`, `wpa_cipher` and `wpa_id`.  
`wpa_id` is an incrementing number used to identify a saved network.  
#TODO: Add values for `wpa_auth` and `wpa_cipher`.

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
    $response = $sdk->wifi->getSavedNetworks();

    if ($response->example113s !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWiFiScanResults

This gets a list of all nearby Wi-Fi access points.

The list only has the connected AP by default. Once a scan is triggered by `/setup/scan_wifi`, the whole list is cached for ~3 minutes. Then it will revert to returning only the connected AP again.

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
    $response = $sdk->wifi->getWiFiScanResults();

    if ($response->example114s !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scanforNetworks

This initiates scanning for Wi-Fi networks.

The results can be obtained with `/setup/scan_results` after triggering the scan with this request.

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
    $response = $sdk->wifi->scanforNetworks();

    if ($response->scanforNetworks200TextPlainObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
