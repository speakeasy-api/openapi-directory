# branchController

### Available Operations

* [branchControllerGetBranches](#branchcontrollergetbranches) - All branches defined for a company
* [getV2CustomerShortNameBranchBranchesBranchID](#getv2customershortnamebranchbranchesbranchid) - Get a specific branch given its unique Object ID (OID)

## branchControllerGetBranches

All branches defined for a company

### Example Usage

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
    $request->count = 844266;
    $request->offset = 602763;
    $request->shortName = 'nulla';

    $response = $sdk->branchController->branchControllerGetBranches($request);

    if ($response->branchModelResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2CustomerShortNameBranchBranchesBranchID

Get a specific branch given its unique Object ID (OID)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CustomerShortNameBranchBranchesBranchIDRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CustomerShortNameBranchBranchesBranchIDRequest();
    $request->branchID = 'corrupti';
    $request->shortName = 'illum';

    $response = $sdk->branchController->getV2CustomerShortNameBranchBranchesBranchID($request);

    if ($response->branchModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
