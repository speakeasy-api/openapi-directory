<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyControllerGetBranchesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyControllerGetBranchesRequest();
    $request->count = 548814;
    $request->offset = 592845;
    $request->shortName = 'distinctio';

    $response = $sdk->companyController->companyControllerGetBranches($request);

    if ($response->advertisingBranchModelResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->