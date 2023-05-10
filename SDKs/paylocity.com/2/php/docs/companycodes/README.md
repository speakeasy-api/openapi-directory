# companyCodes

### Available Operations

* [getAllCompanyCodesAndDescriptionsByResource](#getallcompanycodesanddescriptionsbyresource) - Get All Company Codes

## getAllCompanyCodesAndDescriptionsByResource

Get All Company Codes for the selected company and resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllCompanyCodesAndDescriptionsByResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllCompanyCodesAndDescriptionsByResourceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllCompanyCodesAndDescriptionsByResourceRequest();
    $request->codeResource = 'quis';
    $request->companyId = 'veritatis';

    $requestSecurity = new GetAllCompanyCodesAndDescriptionsByResourceSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->companyCodes->getAllCompanyCodesAndDescriptionsByResource($request, $requestSecurity);

    if ($response->companyCodes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
