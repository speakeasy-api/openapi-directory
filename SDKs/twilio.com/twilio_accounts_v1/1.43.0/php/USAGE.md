<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialAwsCreateCredentialAwsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialAwsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCredentialAwsCreateCredentialAwsRequest();
    $request->accountSid = 'corrupti';
    $request->credentials = 'provident';
    $request->friendlyName = 'distinctio';

    $requestSecurity = new CreateCredentialAwsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createCredentialAws($request, $requestSecurity);

    if ($response->accountsV1CredentialCredentialAws !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->