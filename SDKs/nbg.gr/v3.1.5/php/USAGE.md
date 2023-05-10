<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountAccessConsentsConsentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountAccessConsentsConsentIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccountAccessConsentsConsentIdRequest();
    $request->consentId = 'corrupti';
    $request->sandboxId = 'provident';
    $request->xCustomerUserAgent = 'distinctio';
    $request->xFapiAuthDate = 'quibusdam';
    $request->xFapiCustomerIpAddress = 'unde';
    $request->xFapiInteractionId = 'nulla';

    $requestSecurity = new DeleteAccountAccessConsentsConsentIdSecurity();
    $requestSecurity->clientCredentialsToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountAccess->deleteAccountAccessConsentsConsentId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->