<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateWorkflow;
use \OpenAPI\OpenAPI\Models\Shared\CreateWorkflowTemplateEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkflow();
    $request->template = CreateWorkflowTemplateEnum::FAILOVER;
    $request->workflow = [
        new SendMessage(),
        new SendMessage(),
        new SendMessage(),
    ];

    $requestSecurity = new CreateWorkflowSecurity();
    $requestSecurity->basicAuth->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basicAuth->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createWorkflow($request, $requestSecurity);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->