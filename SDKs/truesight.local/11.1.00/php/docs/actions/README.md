# actions

## Overview

API operations to interact with the PATROL Agent.

### Available Operations

* [collectNow](#collectnow) - Triggers a new collect on a specific device.
* [rediscover](#rediscover) - Triggers a new discovery on a specific device.
* [reinitialize](#reinitialize) - Sends a 'Reinitialize KM' command.
* [remove](#remove) - Removes a specific instance from the monitoring environment.
* [reset](#reset) - Resets the Error Count parameter.

## collectNow

You need to provide the <b>Device ID</b> and <b>Monitor Class</b> parameters to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> of a device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectNowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectNowRequest();
    $request->deviceId = 715190;
    $request->monitorClass = 'quibusdam';

    $response = $sdk->actions->collectNow($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rediscover

You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RediscoverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RediscoverRequest();
    $request->deviceId = 602763;

    $response = $sdk->actions->rediscover($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reinitialize

Launches a 'Reinitialize KM' command for the following parameters:<br>- resetDiscoveryAndPollingIntervals<br>- resetAlertAfterNTimes<br>- resetAlertActions<br>- resetOtherA<br>- resetSettings<br>- resetDebugMode<br>- resetRemovedPausedObjectList<br>- resetReportSettings<br>- resetJavaSettings<br>- resetThresholds<br><br>You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReinitializeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReinitializeActionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ReinitializeActionConfigurationResetAlertActionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReinitializeActionConfigurationResetAlertAfterNTimesEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReinitializeActionConfigurationResetDebugModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReinitializeActionConfigurationResetDiscoveryAndPollingIntervalsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReinitializeActionConfigurationResetJavaSettingsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReinitializeActionConfigurationResetOtherAlertSettingsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReinitializeActionConfigurationResetRemovedPausedObjectListEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReinitializeActionConfigurationResetReportSettingsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReinitializeActionConfigurationResetThresholdsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReinitializeRequest();
    $request->reinitializeActionConfiguration = new ReinitializeActionConfiguration();
    $request->reinitializeActionConfiguration->resetAlertActions = ReinitializeActionConfigurationResetAlertActionsEnum::ONE;
    $request->reinitializeActionConfiguration->resetAlertAfterNTimes = ReinitializeActionConfigurationResetAlertAfterNTimesEnum::ONE;
    $request->reinitializeActionConfiguration->resetDebugMode = ReinitializeActionConfigurationResetDebugModeEnum::ONE;
    $request->reinitializeActionConfiguration->resetDiscoveryAndPollingIntervals = ReinitializeActionConfigurationResetDiscoveryAndPollingIntervalsEnum::ZERO;
    $request->reinitializeActionConfiguration->resetJavaSettings = ReinitializeActionConfigurationResetJavaSettingsEnum::ONE;
    $request->reinitializeActionConfiguration->resetOtherAlertSettings = ReinitializeActionConfigurationResetOtherAlertSettingsEnum::ONE;
    $request->reinitializeActionConfiguration->resetRemovedPausedObjectList = ReinitializeActionConfigurationResetRemovedPausedObjectListEnum::ZERO;
    $request->reinitializeActionConfiguration->resetReportSettings = ReinitializeActionConfigurationResetReportSettingsEnum::ZERO;
    $request->reinitializeActionConfiguration->resetThresholds = ReinitializeActionConfigurationResetThresholdsEnum::ZERO;
    $request->deviceId = 891773;

    $response = $sdk->actions->reinitialize($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## remove

You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the Monitor SID).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveRequest();
    $request->deviceId = 56713;
    $request->monitorClass = 'delectus';
    $request->monitorSid = 'tempora';

    $response = $sdk->actions->remove($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reset

Sets the Error Count parameter to 0.<br><br>You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the monitorSid).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetRequest();
    $request->deviceId = 383441;
    $request->monitorClass = 'molestiae';
    $request->monitorSid = 'minus';

    $response = $sdk->actions->reset($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
