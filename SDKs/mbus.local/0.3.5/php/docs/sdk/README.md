# SDK

### Available Operations

* [get](#get) - Gets data from the slave identified by {address}
* [getMulti](#getmulti) - Gets data from the slave identified by {address}, and supports multiple responses from the slave
* [hat](#hat) - Gets Raspberry Pi Hat information
* [hatOff](#hatoff) - Turns off power to the M-Bus
* [hatOn](#haton) - Turns on power to the M-Bus
* [mbusApi](#mbusapi) - Returns this API specification
* [scan](#scan) - Scan the specified device for slaves

## get

Gets data from the slave identified by {address}

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;
use \OpenAPI\OpenAPI\Models\Shared\BaudrateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->address = '48';
    $request->baudrate = BaudrateEnum::TWO_THOUSAND_FOUR_HUNDRED;
    $request->device = 'ttyAMA0';

    $response = $sdk->sdk->get($request);

    if ($response->mbusData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMulti

Gets data from the slave identified by {address}, and supports multiple responses from the slave

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMultiRequest;
use \OpenAPI\OpenAPI\Models\Shared\BaudrateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMultiRequest();
    $request->address = '48';
    $request->baudrate = BaudrateEnum::FOUR_THOUSAND_EIGHT_HUNDRED;
    $request->device = 'ttyAMA0';
    $request->maxframes = 16;

    $response = $sdk->sdk->getMulti($request);

    if ($response->mbusData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## hat

Gets Raspberry Pi Hat information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->hat();

    if ($response->hat !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## hatOff

Turns off power to the M-Bus

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->hatOff();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## hatOn

Turns on power to the M-Bus

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->hatOn();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mbusApi

Returns this API specification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->mbusApi();

    if ($response->yaml !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scan

Scan the specified device for slaves

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScanRequest;
use \OpenAPI\OpenAPI\Models\Shared\BaudrateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScanRequest();
    $request->baudrate = BaudrateEnum::NINE_THOUSAND_SIX_HUNDRED;
    $request->device = 'ttyAMA0';

    $response = $sdk->sdk->scan($request);

    if ($response->slaves !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
