# deviceSettings

## Overview

This folder consists of all endpoints to modify and control the device.

### Available Operations

* [nightModesettings](#nightmodesettings) - Night Mode settings
* [rebootandFactoryReset](#rebootandfactoryreset) - Reboot and Factory Reset
* [setEurekaInfo](#seteurekainfo) - Set Eureka Info

## nightModesettings

This sets night mode options.  
To view currently set values, use /setup/eureka_info.  
If `enabled` is set to false, night mode is disabled and the other values do not matter.  
`led_brightness` and `volume` refer to the maximum LED Brightness and Volume that is set during night mode.  
`demo_to_user` is always set to `true` so change in values will be visible in realtime (like brightness).  
`windows`: A combination of `length_hours` and `start_hour` is used to define start and end times for night mode. In this example, night mode starts at 10 PM (22) and ends at 6 AM (8 hours later). `windows.days` is an array of days of week when night mode will be enabled. Example: 0->Sunday, 1-> Monday, ..., 6->Saturday.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\NightModesettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Window;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NightModesettingsRequest();
    $request->demoToUser = false;
    $request->doNotDisturb = false;
    $request->enabled = false;
    $request->ledBrightness = 8917.73;
    $request->volume = 567.13;
    $request->windows = [
        new Window(),
        new Window(),
        new Window(),
        new Window(),
    ];

    $response = $sdk->deviceSettings->nightModesettings($request);

    if ($response->example17 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rebootandFactoryReset

This can simply reboot the device (`params: "now"`) or factory reset the device (`params: "fdr"`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\RebootandFactoryResetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RebootandFactoryResetRequest();
    $request->params = 'tempora';

    $response = $sdk->deviceSettings->rebootandFactoryReset($request);

    if ($response->rebootandFactoryReset200TextPlainObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setEurekaInfo

This can set custom values to some options.

Only fields to be modified need to be sent, not all. The example has some modifiable fields.

TODO: List all modifiable fields.

Sending non-existant fields will still return a 200 OK, but they are not saved.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SetEurekaInfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\OptIn1;
use \OpenAPI\OpenAPI\Models\Shared\Settings1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetEurekaInfoRequest();
    $request->name = 'Minnie Schiller';
    $request->optIn = new OptIn1();
    $request->optIn->opencast = false;
    $request->optIn->previewChannel = false;
    $request->optIn->remoteDucking = false;
    $request->optIn->stats = false;
    $request->settings = new Settings1();
    $request->settings->controlNotifications = 479977;

    $response = $sdk->deviceSettings->setEurekaInfo($request);

    if ($response->setEurekaInfo200TextPlainObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
