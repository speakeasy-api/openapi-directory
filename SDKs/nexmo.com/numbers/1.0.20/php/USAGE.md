<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\NumberDetails;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NumberDetails();
    $request->country = 'GB';
    $request->msisdn = '447700900000';
    $request->targetApiKey = '1a2345b7';

    $response = $sdk->buyANumber($request);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->