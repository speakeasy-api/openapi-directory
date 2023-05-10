<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDocumentCreateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDocumentRequest();
    $request->requestBody = new CreateDocumentCreateDocumentRequest();
    $request->requestBody->data = 'corrupti';
    $request->requestBody->ttl = 592845;
    $request->requestBody->uniqueName = 'distinctio';
    $request->serviceSid = 'quibusdam';

    $requestSecurity = new CreateDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createDocument($request, $requestSecurity);

    if ($response->syncV1ServiceDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->