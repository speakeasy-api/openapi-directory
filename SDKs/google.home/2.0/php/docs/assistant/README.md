# assistant

## Overview

This folder contains all endpoints related to Assistant's tasks like Do Not Disturb, Alarms and Timers, Accessibility and equalizer.

### Available Operations

* [accessibility](#accessibility) - Accessibility
* [alarmVolume](#alarmvolume) - Alarm Volume
* [deleteAlarmsandTimers](#deletealarmsandtimers) - Delete Alarms and Timers
* [doNotDisturb](#donotdisturb) - Do Not Disturb
* [getAlarmsandTimers](#getalarmsandtimers) - Get Alarms and Timers
* [setEqualizerValues](#setequalizervalues) - Set Equalizer Values

## accessibility

This controls Accessibility sounds. `hotword_enabled` is for 'Play start sound' and `endpoint_enabled` is for 'Play end sound'.  
Sending an empty-body POST request returns the current values.  
Either of the fields or both can be sent and new values will be saved.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AccessibilityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessibilityRequest();
    $request->endpointEnabled = false;
    $request->hotwordEnabled = false;

    $response = $sdk->assistant->accessibility($request);

    if ($response->getcurrentvalues !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## alarmVolume

This gets and sets alarms and timers volume.  
**Note:** This is not the same as normal volume.

Volume is a float number in [0, 1] where 0 is minimum and 1 is maximum.  
Sending an empty body gets the volume. Sending `volume` sets the volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AlarmVolumeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AlarmVolumeRequest();
    $request->volume = 548814;

    $response = $sdk->assistant->alarmVolume($request);

    if ($response->getvolume !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAlarmsandTimers

This deletes alarms and timers by their id.

`ids` is a list of ids to be deleted. Sending invalid id still returns a 200 OK. The `/` in the ids have to be escaped like `\/`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAlarmsandTimersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAlarmsandTimersRequest();
    $request->ids = [
        'distinctio',
        'quibusdam',
        'unde',
    ];

    $response = $sdk->assistant->deleteAlarmsandTimers($request);

    if ($response->example19 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doNotDisturb

This is for the Do Not Disturb option. Sending an empty-body POST returns the current value. Sending a new value changes it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DoNotDisturbRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoNotDisturbRequest();
    $request->contentType = 'application/json';

    $response = $sdk->assistant->doNotDisturb($request);

    if ($response->getcurrentstate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAlarmsandTimers

This gives a list of all active alarms and timers.

Both alarms and timers have `id`s which can be used to delete them. (There is no known way of creating/deleting yet). The value of `status` have different meanings for alarms and timers (given below).

Alarms have `date_pattern` and `time_pattern` with day, month, year, hour, minute, second. `fire_time` is the same in unix time (milliseconds, not seconds).  
`status` is 1 for set up and 2 for ringing.

Timers have `original_duration` is the original duration.  
`status` is 1 for set up and 3 for ringing.

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
    $response = $sdk->assistant->getAlarmsandTimers();

    if ($response->example18 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setEqualizerValues

This can only set new equalizer values. To get already set values, use /setup/eureka_info.

The body is mandatory. It can either contain `low_shelf` or `high_shelf` or both.

`low_shelf.gain_db` and `high_shelf.gain_db` refer to **bass** and **treble** respectively.

Default values are 0 for both.  
While the slider in the Home app only ranges from -6 to +6, they can be set to any integer like 50 or -100. These changes persist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SetEqualizerValuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\HighShelf1;
use \OpenAPI\OpenAPI\Models\Shared\LowShelf1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetEqualizerValuesRequest();
    $request->highShelf = new HighShelf1();
    $request->highShelf->gainDb = 857946;
    $request->lowShelf = new LowShelf1();
    $request->lowShelf->gainDb = 544883;

    $response = $sdk->assistant->setEqualizerValues($request);

    if ($response->setEqualizerValues200TextPlainObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
