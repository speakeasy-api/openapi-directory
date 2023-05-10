<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssistantCreateAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssistantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssistantCreateAssistantRequest();
    $request->callbackEvents = 'corrupti';
    $request->callbackUrl = 'https://salty-stag.name';
    $request->defaults = 'nulla';
    $request->friendlyName = 'corrupti';
    $request->logQueries = false;
    $request->styleSheet = 'illum';
    $request->uniqueName = 'vel';

    $requestSecurity = new CreateAssistantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createAssistant($request, $requestSecurity);

    if ($response->autopilotV1Assistant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->