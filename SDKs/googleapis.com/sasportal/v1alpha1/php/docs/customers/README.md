# customers

### Available Operations

* [sasportalCustomersList](#sasportalcustomerslist) - Returns a list of requested customers.
* [sasportalCustomersProvisionDeployment](#sasportalcustomersprovisiondeployment) - Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

## sasportalCustomersList

Returns a list of requested customers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SasportalCustomersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SasportalCustomersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SasportalCustomersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SasportalCustomersListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SasportalCustomersListRequest();
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

    $requestSecurity = new SasportalCustomersListSecurity();
    $requestSecurity->option1 = new SasportalCustomersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->sasportalCustomersList($request, $requestSecurity);

    if ($response->sasPortalListCustomersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sasportalCustomersProvisionDeployment

Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SasportalCustomersProvisionDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalProvisionDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SasportalCustomersProvisionDeploymentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SasportalCustomersProvisionDeploymentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SasportalCustomersProvisionDeploymentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SasportalCustomersProvisionDeploymentRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sasPortalProvisionDeploymentRequest = new SasPortalProvisionDeploymentRequest();
    $request->sasPortalProvisionDeploymentRequest->newDeploymentDisplayName = 'nisi';
    $request->sasPortalProvisionDeploymentRequest->newOrganizationDisplayName = 'recusandae';
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new SasportalCustomersProvisionDeploymentSecurity();
    $requestSecurity->option1 = new SasportalCustomersProvisionDeploymentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->sasportalCustomersProvisionDeployment($request, $requestSecurity);

    if ($response->sasPortalProvisionDeploymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
