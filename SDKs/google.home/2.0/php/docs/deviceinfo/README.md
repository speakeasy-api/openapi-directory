# deviceInfo

## Overview

Endpoints in this folder give information about the device.

### Available Operations

* [appDeviceID](#appdeviceid) - App Device ID
* [checkReadyStatus](#checkreadystatus) - Check Ready Status
* [eurekaInfo](#eurekainfo) - Eureka Info
* [locales](#locales) - Locales
* [offer](#offer) - Offer
* [testInternetDownloadSpeed](#testinternetdownloadspeed) - Test Internet Download Speed
* [timezones](#timezones) - Timezones

## appDeviceID

This gives "app device id", "certificate" and "signed data".  
The `app_id` in the request is mandatory and refers to Chromecast backdrop/screensaver app. It has to be set to `E8C28D3C`.  

The certificate is valid and issued by `Chromecast ICA 6 (Audio Assist), Google Inc`.

Not sure what the other two are.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AppDeviceIDRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppDeviceIDRequest();
    $request->appId = 'suscipit';

    $response = $sdk->deviceInfo->appDeviceID($request);

    if ($response->example11 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkReadyStatus

**Update:** This seems to have changed now and is no longer possible. The error is also new.

Setting `play_ready_message` to true plays a welcome message on the device saying "Hi, I'm your Google Assistant. I'm here to help. To learn a few things you can do, continue in the Google Home app."

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CheckReadyStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckReadyStatusRequest();
    $request->playReadyMessage = false;
    $request->userId = 'iure';

    $response = $sdk->deviceInfo->checkReadyStatus($request);

    if ($response->example13 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eurekaInfo

This gives most of the device info. The GET parameter `param` is a comma separated list of json keys to fetch. Currently, these params are known: `version,audio,name,build_info,detail,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer,sign,aogh,ultrasound,mesh`

Nested items can also be filtered using the dot notation. Example: `audio.digital`

The `options` GET parameter is always set to `detail` or `detail,sign`. `sign` signs the `nonce` and returns some value.

The `nonce` GET parameter is an integer value signed with needed (see `option` parameter above).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EurekaInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EurekaInfoRequest();
    $request->nonce = 1234512345;
    $request->options = 'detail,sign';
    $request->params = 'version,audio,name,build_info,detail,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer,sign,aogh,ultrasound,mesh';

    $response = $sdk->deviceInfo->eurekaInfo($request);

    if ($response->example1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## locales

Simply returns a list of all supported locales.

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
    $response = $sdk->deviceInfo->locales();

    if ($response->example15s !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## offer

This gives a token which is used by the Home app to get offers. The offers themselves are not stored on the device.  
A new token is generated for every request.

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
    $response = $sdk->deviceInfo->offer();

    if ($response->example12 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testInternetDownloadSpeed

**Update:** This seems to have been removed. Returns 404 Not Found.

This endpoint tests internet download speed. Any sample file URL can be provided.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TestInternetDownloadSpeedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestInternetDownloadSpeedRequest();
    $request->url = 'magnam';

    $response = $sdk->deviceInfo->testInternetDownloadSpeed($request);

    if ($response->example16 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## timezones

Simply returns a list of all supported timezones.

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
    $response = $sdk->deviceInfo->timezones();

    if ($response->example14s !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
