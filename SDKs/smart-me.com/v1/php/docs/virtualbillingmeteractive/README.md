# virtualBillingMeterActive

### Available Operations

* [virtualBillingMeterActiveGet](#virtualbillingmeteractiveget) - Beta: Gets all active virtual meters
* [virtualBillingMeterActivePostForm](#virtualbillingmeteractivepostform) - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* [virtualBillingMeterActivePostJson](#virtualbillingmeteractivepostjson) - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* [virtualBillingMeterActivePostRaw](#virtualbillingmeteractivepostraw) - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

## virtualBillingMeterActiveGet

Beta: Gets all active virtual meters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->virtualBillingMeterActive->virtualBillingMeterActiveGet();

    if ($response->devices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## virtualBillingMeterActivePostForm

Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\VMeterToActivate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VMeterToActivate();
    $request->serialNumber = 'dolor';

    $response = $sdk->virtualBillingMeterActive->virtualBillingMeterActivePostForm($request);

    if ($response->device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## virtualBillingMeterActivePostJson

Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\VMeterToActivate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VMeterToActivate();
    $request->serialNumber = 'fugiat';

    $response = $sdk->virtualBillingMeterActive->virtualBillingMeterActivePostJson($request);

    if ($response->device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## virtualBillingMeterActivePostRaw

Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'ipsam'

    $response = $sdk->virtualBillingMeterActive->virtualBillingMeterActivePostRaw($request);

    if ($response->device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
