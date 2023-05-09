# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/deploymentmanager/v2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Deployments.DeploymentmanagerDeploymentsCancelPreview(ctx, operations.DeploymentmanagerDeploymentsCancelPreviewRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DeploymentsCancelPreviewRequest: &shared.DeploymentsCancelPreviewRequest{
            Fingerprint: sdk.String("provident"),
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("unde"),
        Deployment: "nulla",
        Fields: sdk.String("corrupti"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        Project: "error",
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("iure"),
    }, operations.DeploymentmanagerDeploymentsCancelPreviewSecurity{
        Option1: &operations.DeploymentmanagerDeploymentsCancelPreviewSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Deployments](docs/deployments/README.md)

* [DeploymentmanagerDeploymentsCancelPreview](docs/deployments/README.md#deploymentmanagerdeploymentscancelpreview) - Cancels and removes the preview currently associated with the deployment.
* [DeploymentmanagerDeploymentsDelete](docs/deployments/README.md#deploymentmanagerdeploymentsdelete) - Deletes a deployment and all of the resources in the deployment.
* [DeploymentmanagerDeploymentsGet](docs/deployments/README.md#deploymentmanagerdeploymentsget) - Gets information about a specific deployment.
* [DeploymentmanagerDeploymentsGetIamPolicy](docs/deployments/README.md#deploymentmanagerdeploymentsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [DeploymentmanagerDeploymentsInsert](docs/deployments/README.md#deploymentmanagerdeploymentsinsert) - Creates a deployment and all of the resources described by the deployment manifest.
* [DeploymentmanagerDeploymentsList](docs/deployments/README.md#deploymentmanagerdeploymentslist) - Lists all deployments for a given project.
* [DeploymentmanagerDeploymentsPatch](docs/deployments/README.md#deploymentmanagerdeploymentspatch) - Patches a deployment and all of the resources described by the deployment manifest.
* [DeploymentmanagerDeploymentsSetIamPolicy](docs/deployments/README.md#deploymentmanagerdeploymentssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [DeploymentmanagerDeploymentsStop](docs/deployments/README.md#deploymentmanagerdeploymentsstop) - Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
* [DeploymentmanagerDeploymentsTestIamPermissions](docs/deployments/README.md#deploymentmanagerdeploymentstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [DeploymentmanagerDeploymentsUpdate](docs/deployments/README.md#deploymentmanagerdeploymentsupdate) - Updates a deployment and all of the resources described by the deployment manifest.

### [Manifests](docs/manifests/README.md)

* [DeploymentmanagerManifestsGet](docs/manifests/README.md#deploymentmanagermanifestsget) - Gets information about a specific manifest.
* [DeploymentmanagerManifestsList](docs/manifests/README.md#deploymentmanagermanifestslist) - Lists all manifests for a given deployment.

### [Operations](docs/operations/README.md)

* [DeploymentmanagerOperationsGet](docs/operations/README.md#deploymentmanageroperationsget) - Gets information about a specific operation.
* [DeploymentmanagerOperationsList](docs/operations/README.md#deploymentmanageroperationslist) - Lists all operations for a project.

### [Resources](docs/resources/README.md)

* [DeploymentmanagerResourcesGet](docs/resources/README.md#deploymentmanagerresourcesget) - Gets information about a single resource.
* [DeploymentmanagerResourcesList](docs/resources/README.md#deploymentmanagerresourceslist) - Lists all resources in a given deployment.

### [Types](docs/types/README.md)

* [DeploymentmanagerTypesList](docs/types/README.md#deploymentmanagertypeslist) - Lists all resource types for Deployment Manager.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
