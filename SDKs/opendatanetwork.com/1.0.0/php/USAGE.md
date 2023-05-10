<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAMapRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAMapRequest();
    $request->xAppToken = 'corrupti';
    $request->appToken = 'provident';
    $request->constraint = 'distinctio';
    $request->entityId = 'quibusdam';
    $request->variable = 'unde';

    $response = $sdk->createAMap($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->