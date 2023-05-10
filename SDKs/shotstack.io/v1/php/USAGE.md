<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRenderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRenderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRenderRequest();
    $request->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';

    $requestSecurity = new GetRenderSecurity();
    $requestSecurity->developerKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->edit->getRender($request, $requestSecurity);

    if ($response->renderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->