# projects

### Available Operations

* [policyanalyzerProjectsLocationsActivityTypesActivitiesQuery](#policyanalyzerprojectslocationsactivitytypesactivitiesquery) - Queries policy activities on Google Cloud resources.

## policyanalyzerProjectsLocationsActivityTypesActivitiesQuery

Queries policy activities on Google Cloud resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->filter = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->pageSize = 528895;
    $request->pageToken = 'iusto';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuerySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->policyanalyzerProjectsLocationsActivityTypesActivitiesQuery($request, $requestSecurity);

    if ($response->googleCloudPolicyanalyzerV1QueryActivityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
