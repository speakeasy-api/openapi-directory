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
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsCancelPreviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentsCancelPreviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsCancelPreviewSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsCancelPreviewSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsCancelPreviewSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerDeploymentsCancelPreviewRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->deploymentsCancelPreviewRequest = new DeploymentsCancelPreviewRequest();
    $request->deploymentsCancelPreviewRequest->fingerprint = 'provident';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->deployment = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->project = 'error';
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new DeploymentmanagerDeploymentsCancelPreviewSecurity();
    $requestSecurity->option1 = new DeploymentmanagerDeploymentsCancelPreviewSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deployments->deploymentmanagerDeploymentsCancelPreview($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [deployments](docs/deployments/README.md)

* [deploymentmanagerDeploymentsCancelPreview](docs/deployments/README.md#deploymentmanagerdeploymentscancelpreview) - Cancels and removes the preview currently associated with the deployment.
* [deploymentmanagerDeploymentsDelete](docs/deployments/README.md#deploymentmanagerdeploymentsdelete) - Deletes a deployment and all of the resources in the deployment.
* [deploymentmanagerDeploymentsGet](docs/deployments/README.md#deploymentmanagerdeploymentsget) - Gets information about a specific deployment.
* [deploymentmanagerDeploymentsGetIamPolicy](docs/deployments/README.md#deploymentmanagerdeploymentsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [deploymentmanagerDeploymentsInsert](docs/deployments/README.md#deploymentmanagerdeploymentsinsert) - Creates a deployment and all of the resources described by the deployment manifest.
* [deploymentmanagerDeploymentsList](docs/deployments/README.md#deploymentmanagerdeploymentslist) - Lists all deployments for a given project.
* [deploymentmanagerDeploymentsPatch](docs/deployments/README.md#deploymentmanagerdeploymentspatch) - Patches a deployment and all of the resources described by the deployment manifest.
* [deploymentmanagerDeploymentsSetIamPolicy](docs/deployments/README.md#deploymentmanagerdeploymentssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [deploymentmanagerDeploymentsStop](docs/deployments/README.md#deploymentmanagerdeploymentsstop) - Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
* [deploymentmanagerDeploymentsTestIamPermissions](docs/deployments/README.md#deploymentmanagerdeploymentstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [deploymentmanagerDeploymentsUpdate](docs/deployments/README.md#deploymentmanagerdeploymentsupdate) - Updates a deployment and all of the resources described by the deployment manifest.

### [manifests](docs/manifests/README.md)

* [deploymentmanagerManifestsGet](docs/manifests/README.md#deploymentmanagermanifestsget) - Gets information about a specific manifest.
* [deploymentmanagerManifestsList](docs/manifests/README.md#deploymentmanagermanifestslist) - Lists all manifests for a given deployment.

### [operations](docs/operations/README.md)

* [deploymentmanagerOperationsGet](docs/operations/README.md#deploymentmanageroperationsget) - Gets information about a specific operation.
* [deploymentmanagerOperationsList](docs/operations/README.md#deploymentmanageroperationslist) - Lists all operations for a project.

### [resources](docs/resources/README.md)

* [deploymentmanagerResourcesGet](docs/resources/README.md#deploymentmanagerresourcesget) - Gets information about a single resource.
* [deploymentmanagerResourcesList](docs/resources/README.md#deploymentmanagerresourceslist) - Lists all resources in a given deployment.

### [types](docs/types/README.md)

* [deploymentmanagerTypesList](docs/types/README.md#deploymentmanagertypeslist) - Lists all resource types for Deployment Manager.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
