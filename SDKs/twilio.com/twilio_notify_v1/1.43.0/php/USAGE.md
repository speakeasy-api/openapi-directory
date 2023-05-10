<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateBindingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBindingCreateBindingRequest;
use \OpenAPI\OpenAPI\Models\Shared\BindingEnumBindingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBindingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBindingRequest();
    $request->requestBody = new CreateBindingCreateBindingRequest();
    $request->requestBody->address = '5786 Little Streets';
    $request->requestBody->bindingType = BindingEnumBindingTypeEnum::SMS;
    $request->requestBody->credentialSid = 'error';
    $request->requestBody->endpoint = 'deserunt';
    $request->requestBody->identity = 'suscipit';
    $request->requestBody->notificationProtocolVersion = 'iure';
    $request->requestBody->tag = [
        'debitis',
        'ipsa',
    ];
    $request->serviceSid = 'delectus';

    $requestSecurity = new CreateBindingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createBinding($request, $requestSecurity);

    if ($response->notifyV1ServiceBinding !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->