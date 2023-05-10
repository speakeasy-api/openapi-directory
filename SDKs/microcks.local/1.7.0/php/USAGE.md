<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceRequest();
    $request->name = 'Terrence Rau';

    $requestSecurity = new GetResourceSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->getResource($request, $requestSecurity);

    if ($response->resource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->