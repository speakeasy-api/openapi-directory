<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\OwnershipTypeEnumEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsRequest();
    $request->filterAccountType = AccountTypeEnumEnum::TRANSACTIONAL;
    $request->filterOwnershipType = OwnershipTypeEnumEnum::JOINT;
    $request->pageSize = 715190;

    $response = $sdk->accounts->getAccounts($request);

    if ($response->listAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->