# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->pageSize = 847252;
    $request->pageToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [customers](docs/customers/README.md)

* [prodTtSasportalCustomersList](docs/customers/README.md#prodttsasportalcustomerslist) - Returns a list of requested customers.
* [prodTtSasportalCustomersProvisionDeployment](docs/customers/README.md#prodttsasportalcustomersprovisiondeployment) - Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

### [installer](docs/installer/README.md)

* [prodTtSasportalInstallerGenerateSecret](docs/installer/README.md#prodttsasportalinstallergeneratesecret) - Generates a secret to be used with the ValidateInstaller.
* [prodTtSasportalInstallerValidate](docs/installer/README.md#prodttsasportalinstallervalidate) - Validates the identity of a Certified Professional Installer (CPI).

### [nodes](docs/nodes/README.md)

* [prodTtSasportalNodesDevicesSignDevice](docs/nodes/README.md#prodttsasportalnodesdevicessigndevice) - Signs a device.
* [prodTtSasportalNodesDevicesUpdateSigned](docs/nodes/README.md#prodttsasportalnodesdevicesupdatesigned) - Updates a signed device.
* [prodTtSasportalNodesNodesDelete](docs/nodes/README.md#prodttsasportalnodesnodesdelete) - Deletes a node.
* [prodTtSasportalNodesNodesDeploymentsCreate](docs/nodes/README.md#prodttsasportalnodesnodesdeploymentscreate) - Creates a new deployment.
* [prodTtSasportalNodesNodesDeploymentsList](docs/nodes/README.md#prodttsasportalnodesnodesdeploymentslist) - Lists deployments.
* [prodTtSasportalNodesNodesDevicesCreate](docs/nodes/README.md#prodttsasportalnodesnodesdevicescreate) - Creates a device under a node or customer.
* [prodTtSasportalNodesNodesDevicesCreateSigned](docs/nodes/README.md#prodttsasportalnodesnodesdevicescreatesigned) - Creates a signed device under a node or customer.
* [prodTtSasportalNodesNodesDevicesList](docs/nodes/README.md#prodttsasportalnodesnodesdeviceslist) - Lists devices under a node or customer.
* [prodTtSasportalNodesNodesGet](docs/nodes/README.md#prodttsasportalnodesnodesget) - Returns a requested node.
* [prodTtSasportalNodesNodesMove](docs/nodes/README.md#prodttsasportalnodesnodesmove) - Moves a node under another node or customer.
* [prodTtSasportalNodesNodesNodesCreate](docs/nodes/README.md#prodttsasportalnodesnodesnodescreate) - Creates a new node.
* [prodTtSasportalNodesNodesNodesList](docs/nodes/README.md#prodttsasportalnodesnodesnodeslist) - Lists nodes.
* [prodTtSasportalNodesNodesPatch](docs/nodes/README.md#prodttsasportalnodesnodespatch) - Updates an existing node.

### [policies](docs/policies/README.md)

* [prodTtSasportalPoliciesGet](docs/policies/README.md#prodttsasportalpoliciesget) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [prodTtSasportalPoliciesSet](docs/policies/README.md#prodttsasportalpoliciesset) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [prodTtSasportalPoliciesTest](docs/policies/README.md#prodttsasportalpoliciestest) - Returns permissions that a caller has on the specified resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
