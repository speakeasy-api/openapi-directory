<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateEsimProfileCreateEsimProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateEsimProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEsimProfileCreateEsimProfileRequest();
    $request->callbackMethod = CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum::PATCH;
    $request->callbackUrl = 'provident';
    $request->eid = 'distinctio';
    $request->generateMatchingId = false;

    $requestSecurity = new CreateEsimProfileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createEsimProfile($request, $requestSecurity);

    if ($response->supersimV1EsimProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->