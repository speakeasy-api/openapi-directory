<!-- Start SDK Example Usage -->
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

    $response = $sdk->get($request);

    if ($response->mbusData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->