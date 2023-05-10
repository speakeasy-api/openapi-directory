# mBus

### Available Operations

* [mBusPostForm](#mbuspostform) - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* [mBusPostJson](#mbuspostjson) - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* [mBusPostRaw](#mbuspostraw) - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

## mBusPostForm

M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\MBusData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MBusData();
    $request->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-07T07:44:57.988Z');
    $request->telegram = 'eum';

    $response = $sdk->mBus->mBusPostForm($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mBusPostJson

M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\MBusData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MBusData();
    $request->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-01T11:18:05.592Z');
    $request->telegram = 'quas';

    $response = $sdk->mBus->mBusPostJson($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mBusPostRaw

M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'assumenda'

    $response = $sdk->mBus->mBusPostRaw($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
