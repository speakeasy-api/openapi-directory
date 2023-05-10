# preflight

### Available Operations

* [autoCheckIn](#autocheckin) - Auto Check-In

## autoCheckIn

Trigger an automatic check-in given a ticket number. This service is only accessible for LH privileged partners

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutoCheckInRequest;
use \OpenAPI\OpenAPI\Models\Operations\AutoCheckInSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutoCheckInRequest();
    $request->accept = 'odit';
    $request->emailAddress = 'quo';
    $request->ticketnumber = 'sequi';

    $requestSecurity = new AutoCheckInSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->preflight->autoCheckIn($request, $requestSecurity);

    if ($response->autoCheckIn200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
