# companyController

### Available Operations

* [companyControllerGetBranches](#companycontrollergetbranches) - All branches defined for a company
* [getV3DiaryShortNameCompanyBranchesBranchID](#getv3diaryshortnamecompanybranchesbranchid) - Get a specific branch given its unique Object ID (OID)

## companyControllerGetBranches

All branches defined for a company

### Example Usage

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
    $request->count = 844266;
    $request->offset = 602763;
    $request->shortName = 'nulla';

    $response = $sdk->companyController->companyControllerGetBranches($request);

    if ($response->advertisingBranchModelResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV3DiaryShortNameCompanyBranchesBranchID

Get a specific branch given its unique Object ID (OID)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV3DiaryShortNameCompanyBranchesBranchIDRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV3DiaryShortNameCompanyBranchesBranchIDRequest();
    $request->branchID = 'corrupti';
    $request->shortName = 'illum';

    $response = $sdk->companyController->getV3DiaryShortNameCompanyBranchesBranchID($request);

    if ($response->advertisingBranchModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
