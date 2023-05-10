# customers

### Available Operations

* [prodTtSasportalCustomersList](#prodttsasportalcustomerslist) - Returns a list of requested customers.
* [prodTtSasportalCustomersProvisionDeployment](#prodttsasportalcustomersprovisiondeployment) - Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

## prodTtSasportalCustomersList

Returns a list of requested customers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalCustomersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalCustomersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalCustomersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalCustomersListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalCustomersListRequest();
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

    $requestSecurity = new ProdTtSasportalCustomersListSecurity();
    $requestSecurity->option1 = new ProdTtSasportalCustomersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->prodTtSasportalCustomersList($request, $requestSecurity);

    if ($response->sasPortalListCustomersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prodTtSasportalCustomersProvisionDeployment

Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalCustomersProvisionDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalProvisionDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalCustomersProvisionDeploymentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalCustomersProvisionDeploymentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalCustomersProvisionDeploymentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalCustomersProvisionDeploymentRequest();
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

    $requestSecurity = new ProdTtSasportalCustomersProvisionDeploymentSecurity();
    $requestSecurity->option1 = new ProdTtSasportalCustomersProvisionDeploymentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->prodTtSasportalCustomersProvisionDeployment($request, $requestSecurity);

    if ($response->sasPortalProvisionDeploymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
