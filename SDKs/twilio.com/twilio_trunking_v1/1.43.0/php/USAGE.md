<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialListCreateCredentialListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCredentialListRequest();
    $request->requestBody = new CreateCredentialListCreateCredentialListRequest();
    $request->requestBody->credentialListSid = 'corrupti';
    $request->trunkSid = 'provident';

    $requestSecurity = new CreateCredentialListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createCredentialList($request, $requestSecurity);

    if ($response->trunkingV1TrunkCredentialList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->