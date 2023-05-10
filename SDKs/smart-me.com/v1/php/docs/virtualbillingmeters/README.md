# virtualBillingMeters

### Available Operations

* [virtualBillingMetersGet](#virtualbillingmetersget) - Beta: Gets all Meters available to activate as a Virtual Meter.

## virtualBillingMetersGet

Beta: Gets all Meters available to activate as a Virtual Meter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->virtualBillingMeters->virtualBillingMetersGet();

    if ($response->devices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
