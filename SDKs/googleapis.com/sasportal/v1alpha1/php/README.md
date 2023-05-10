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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [customers](docs/customers/README.md)

* [sasportalCustomersList](docs/customers/README.md#sasportalcustomerslist) - Returns a list of requested customers.
* [sasportalCustomersProvisionDeployment](docs/customers/README.md#sasportalcustomersprovisiondeployment) - Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

### [installer](docs/installer/README.md)

* [sasportalInstallerGenerateSecret](docs/installer/README.md#sasportalinstallergeneratesecret) - Generates a secret to be used with the ValidateInstaller.
* [sasportalInstallerValidate](docs/installer/README.md#sasportalinstallervalidate) - Validates the identity of a Certified Professional Installer (CPI).

### [nodes](docs/nodes/README.md)

* [sasportalNodesDevicesSignDevice](docs/nodes/README.md#sasportalnodesdevicessigndevice) - Signs a device.
* [sasportalNodesDevicesUpdateSigned](docs/nodes/README.md#sasportalnodesdevicesupdatesigned) - Updates a signed device.
* [sasportalNodesNodesDelete](docs/nodes/README.md#sasportalnodesnodesdelete) - Deletes a node.
* [sasportalNodesNodesDeploymentsCreate](docs/nodes/README.md#sasportalnodesnodesdeploymentscreate) - Creates a new deployment.
* [sasportalNodesNodesDeploymentsList](docs/nodes/README.md#sasportalnodesnodesdeploymentslist) - Lists deployments.
* [sasportalNodesNodesDevicesCreate](docs/nodes/README.md#sasportalnodesnodesdevicescreate) - Creates a device under a node or customer.
* [sasportalNodesNodesDevicesCreateSigned](docs/nodes/README.md#sasportalnodesnodesdevicescreatesigned) - Creates a signed device under a node or customer.
* [sasportalNodesNodesDevicesList](docs/nodes/README.md#sasportalnodesnodesdeviceslist) - Lists devices under a node or customer.
* [sasportalNodesNodesGet](docs/nodes/README.md#sasportalnodesnodesget) - Returns a requested node.
* [sasportalNodesNodesMove](docs/nodes/README.md#sasportalnodesnodesmove) - Moves a node under another node or customer.
* [sasportalNodesNodesNodesCreate](docs/nodes/README.md#sasportalnodesnodesnodescreate) - Creates a new node.
* [sasportalNodesNodesNodesList](docs/nodes/README.md#sasportalnodesnodesnodeslist) - Lists nodes.
* [sasportalNodesNodesPatch](docs/nodes/README.md#sasportalnodesnodespatch) - Updates an existing node.

### [policies](docs/policies/README.md)

* [sasportalPoliciesGet](docs/policies/README.md#sasportalpoliciesget) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [sasportalPoliciesSet](docs/policies/README.md#sasportalpoliciesset) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [sasportalPoliciesTest](docs/policies/README.md#sasportalpoliciestest) - Returns permissions that a caller has on the specified resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
