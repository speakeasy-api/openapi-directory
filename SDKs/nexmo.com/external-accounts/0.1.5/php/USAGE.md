<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllAccountsProviderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAllAccountsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllAccountsRequest();
    $request->pageNumber = 1;
    $request->pageSize = 1;
    $request->provider = GetAllAccountsProviderEnum::VIBER_SERVICE_MSG;

    $requestSecurity = new GetAllAccountsSecurity();
    $requestSecurity->basicAuth->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basicAuth->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->account->getAllAccounts($request, $requestSecurity);

    if ($response->getAllAccounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->