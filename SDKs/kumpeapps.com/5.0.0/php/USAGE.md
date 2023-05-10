<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidAllowanceGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\KkidAllowanceGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidAllowanceGetRequest();
    $request->kidUserId = 548814;
    $request->transactionDays = 592845;

    $requestSecurity = new KkidAllowanceGetSecurity();
    $requestSecurity->authKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->kKid->kkidAllowanceGet($request, $requestSecurity);

    if ($response->allowance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->