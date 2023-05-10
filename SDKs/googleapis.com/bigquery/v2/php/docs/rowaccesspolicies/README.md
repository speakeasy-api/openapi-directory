# rowAccessPolicies

### Available Operations

* [bigqueryRowAccessPoliciesList](#bigqueryrowaccesspolicieslist) - Lists all row access policies on the specified table.

## bigqueryRowAccessPoliciesList

Lists all row access policies on the specified table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRowAccessPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRowAccessPoliciesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRowAccessPoliciesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRowAccessPoliciesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryRowAccessPoliciesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryRowAccessPoliciesListRequest();
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'sapiente';
    $request->fields = 'quisquam';
    $request->key = 'saepe';
    $request->oauthToken = 'ea';
    $request->pageSize = 774048;
    $request->pageToken = 'corporis';
    $request->prettyPrint = false;
    $request->projectId = 'veniam';
    $request->quotaUser = 'aliquid';
    $request->tableId = 'inventore';
    $request->userIp = 'magnam';

    $requestSecurity = new BigqueryRowAccessPoliciesListSecurity();
    $requestSecurity->option1 = new BigqueryRowAccessPoliciesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->rowAccessPolicies->bigqueryRowAccessPoliciesList($request, $requestSecurity);

    if ($response->listRowAccessPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
