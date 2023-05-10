<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetweatherzipcodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetweatherzipcodeRequest();
    $request->license = 'corrupti';
    $request->zip = 'provident';

    $response = $sdk->weatherByZipCode->getweatherzipcode($request);

    if ($response->getweatherzipcode200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->