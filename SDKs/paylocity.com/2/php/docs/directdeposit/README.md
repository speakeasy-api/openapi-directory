# directDeposit

### Available Operations

* [getAllDirectDeposit](#getalldirectdeposit) - Get All Direct Deposit

## getAllDirectDeposit

Get All Direct Deposit returns main direct deposit and all additional direct depositsfor the selected employee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllDirectDepositRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllDirectDepositSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllDirectDepositRequest();
    $request->companyId = 'sapiente';
    $request->employeeId = 'quo';

    $requestSecurity = new GetAllDirectDepositSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->directDeposit->getAllDirectDeposit($request, $requestSecurity);

    if ($response->directDeposits !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
