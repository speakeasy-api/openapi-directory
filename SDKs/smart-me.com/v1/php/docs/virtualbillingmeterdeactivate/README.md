# virtualBillingMeterDeactivate

### Available Operations

* [virtualBillingMeterDeactivatePostForm](#virtualbillingmeterdeactivatepostform) - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* [virtualBillingMeterDeactivatePostJson](#virtualbillingmeterdeactivatepostjson) - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* [virtualBillingMeterDeactivatePostRaw](#virtualbillingmeterdeactivatepostraw) - Beta: Virtual Meter API: Deactivates a Virtual Meter.

## virtualBillingMeterDeactivatePostForm

Beta: Virtual Meter API: Deactivates a Virtual Meter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\VMeterToDeactivate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VMeterToDeactivate();
    $request->id = '208ece7e-253b-4668-851c-6c6e205e16de';

    $response = $sdk->virtualBillingMeterDeactivate->virtualBillingMeterDeactivatePostForm($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## virtualBillingMeterDeactivatePostJson

Beta: Virtual Meter API: Deactivates a Virtual Meter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\VMeterToDeactivate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VMeterToDeactivate();
    $request->id = 'ab3fec95-78a6-4458-8273-a8418d162309';

    $response = $sdk->virtualBillingMeterDeactivate->virtualBillingMeterDeactivatePostJson($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## virtualBillingMeterDeactivatePostRaw

Beta: Virtual Meter API: Deactivates a Virtual Meter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'reiciendis'

    $response = $sdk->virtualBillingMeterDeactivate->virtualBillingMeterDeactivatePostRaw($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
