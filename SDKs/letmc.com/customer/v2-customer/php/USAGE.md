<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BranchControllerGetBranchesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BranchControllerGetBranchesRequest();
    $request->count = 548814;
    $request->offset = 592845;
    $request->shortName = 'distinctio';

    $response = $sdk->branchController->branchControllerGetBranches($request);

    if ($response->branchModelResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->