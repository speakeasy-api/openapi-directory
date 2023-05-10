<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationsStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationsStatusRequest();
    $request->key = 'corrupti';

    $response = $sdk->application->getApplicationsStatus($request);

    if ($response->applicationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->