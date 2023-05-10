<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCommandCreateCommandRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCommandCreateCommandRequestCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommandEnumCommandModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCommandCreateCommandRequest();
    $request->callbackMethod = CreateCommandCreateCommandRequestCallbackMethodEnum::PATCH;
    $request->callbackUrl = 'https://salty-stag.name';
    $request->command = 'nulla';
    $request->commandMode = CommandEnumCommandModeEnum::BINARY;
    $request->deliveryReceiptRequested = false;
    $request->includeSid = 'illum';
    $request->sim = 'vel';

    $requestSecurity = new CreateCommandSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createCommand($request, $requestSecurity);

    if ($response->wirelessV1Command !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->