<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetglobalnumberinfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetglobalnumberinfoRequest();
    $request->intlnumber = 'corrupti';
    $request->license = 'provident';

    $response = $sdk->globalPhoneNumberInformation->getglobalnumberinfo($request);

    if ($response->getglobalnumberinfo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->