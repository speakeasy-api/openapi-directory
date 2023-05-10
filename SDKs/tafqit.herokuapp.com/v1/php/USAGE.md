<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConvertRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConvertRequestBody();
    $request->hundredsForm = 'مائة';
    $request->theNumber = '2519.50';
    $request->unit = ' ريال سعودي';

    $response = $sdk->convert($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->