# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/deploymentmanager/v2beta/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DeploymentmanagerCompositeTypesDeleteRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        CompositeType: "unde",
        Fields: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        Project: "vel",
        QuotaUser: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.CompositeTypes.DeploymentmanagerCompositeTypesDelete(ctx, req, operations.DeploymentmanagerCompositeTypesDeleteSecurity{
        Option1: &operations.DeploymentmanagerCompositeTypesDeleteSecurityOption1{
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


### CompositeTypes

* `DeploymentmanagerCompositeTypesDelete` - Deletes a composite type.
* `DeploymentmanagerCompositeTypesGet` - Gets information about a specific composite type.
* `DeploymentmanagerCompositeTypesInsert` - Creates a composite type.
* `DeploymentmanagerCompositeTypesList` - Lists all composite types for Deployment Manager.
* `DeploymentmanagerCompositeTypesPatch` - Patches a composite type.
* `DeploymentmanagerCompositeTypesUpdate` - Updates a composite type.

### Deployments

* `DeploymentmanagerDeploymentsCancelPreview` - Cancels and removes the preview currently associated with the deployment.
* `DeploymentmanagerDeploymentsDelete` - Deletes a deployment and all of the resources in the deployment.
* `DeploymentmanagerDeploymentsGet` - Gets information about a specific deployment.
* `DeploymentmanagerDeploymentsGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `DeploymentmanagerDeploymentsInsert` - Creates a deployment and all of the resources described by the deployment manifest.
* `DeploymentmanagerDeploymentsList` - Lists all deployments for a given project.
* `DeploymentmanagerDeploymentsPatch` - Patches a deployment and all of the resources described by the deployment manifest.
* `DeploymentmanagerDeploymentsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `DeploymentmanagerDeploymentsStop` - Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
* `DeploymentmanagerDeploymentsTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `DeploymentmanagerDeploymentsUpdate` - Updates a deployment and all of the resources described by the deployment manifest.

### Manifests

* `DeploymentmanagerManifestsGet` - Gets information about a specific manifest.
* `DeploymentmanagerManifestsList` - Lists all manifests for a given deployment.

### Operations

* `DeploymentmanagerOperationsGet` - Gets information about a specific operation.
* `DeploymentmanagerOperationsList` - Lists all operations for a project.

### Resources

* `DeploymentmanagerResourcesGet` - Gets information about a single resource.
* `DeploymentmanagerResourcesList` - Lists all resources in a given deployment.

### TypeProviders

* `DeploymentmanagerTypeProvidersDelete` - Deletes a type provider.
* `DeploymentmanagerTypeProvidersGet` - Gets information about a specific type provider.
* `DeploymentmanagerTypeProvidersGetType` - Gets a type info for a type provided by a TypeProvider.
* `DeploymentmanagerTypeProvidersInsert` - Creates a type provider.
* `DeploymentmanagerTypeProvidersList` - Lists all resource type providers for Deployment Manager.
* `DeploymentmanagerTypeProvidersListTypes` - Lists all the type info for a TypeProvider.
* `DeploymentmanagerTypeProvidersPatch` - Patches a type provider.
* `DeploymentmanagerTypeProvidersUpdate` - Updates a type provider.

### Types

* `DeploymentmanagerTypesList` - Lists all resource types for Deployment Manager.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
