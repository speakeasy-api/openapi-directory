<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\NewSubaccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubAccountRequest();
    $request->newSubaccountRequest = new NewSubaccountRequest();
    $request->newSubaccountRequest->name = 'Subaccount department A';
    $request->newSubaccountRequest->secret = 'Password123';
    $request->newSubaccountRequest->usePrimaryAccountBalance = false;
    $request->apiKey = 'corrupti';

    $requestSecurity = new CreateSubAccountSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->subaccountManagement->createSubAccount($request, $requestSecurity);

    if ($response->subaccountCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->