# availableProjects

### Available Operations

* [firebaseAvailableProjectsList](#firebaseavailableprojectslist) - Lists each [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects) that can have Firebase resources added to it. A Project will only be listed if: - The caller has sufficient [Google IAM](https://cloud.google.com/iam) permissions to call AddFirebase. - The Project is not already a FirebaseProject. - The Project is not in an Organization which has policies that prevent Firebase resources from being added. 

## firebaseAvailableProjectsList

Lists each [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects) that can have Firebase resources added to it. A Project will only be listed if: - The caller has sufficient [Google IAM](https://cloud.google.com/iam) permissions to call AddFirebase. - The Project is not already a FirebaseProject. - The Project is not in an Organization which has policies that prevent Firebase resources from being added. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseAvailableProjectsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseAvailableProjectsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseAvailableProjectsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseAvailableProjectsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseAvailableProjectsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseAvailableProjectsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseAvailableProjectsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'delectus';
    $request->key = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->pageSize = 477665;
    $request->pageToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new FirebaseAvailableProjectsListSecurity();
    $requestSecurity->option1 = new FirebaseAvailableProjectsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->availableProjects->firebaseAvailableProjectsList($request, $requestSecurity);

    if ($response->listAvailableProjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
