<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExecutionCreateExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExecutionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExecutionRequest();
    $request->flowSid = 'corrupti';
    $request->requestBody = new CreateExecutionCreateExecutionRequest();
    $request->requestBody->from = 'provident';
    $request->requestBody->parameters = 'distinctio';
    $request->requestBody->to = 'quibusdam';

    $requestSecurity = new CreateExecutionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createExecution($request, $requestSecurity);

    if ($response->studioV2FlowExecution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->