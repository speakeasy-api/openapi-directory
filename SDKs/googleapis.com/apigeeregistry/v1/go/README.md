# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/apigeeregistry/v1/go
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
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisCreate(ctx, operations.ApigeeregistryProjectsLocationsApisCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        APIInput: &shared.APIInput{
            Annotations: map[string]string{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            Availability: sdk.String("vel"),
            Description: sdk.String("error"),
            DisplayName: sdk.String("deserunt"),
            Labels: map[string]string{
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Name: sdk.String("Ricky Hoppe"),
            RecommendedDeployment: sdk.String("placeat"),
            RecommendedVersion: sdk.String("voluptatum"),
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        APIID: sdk.String("nisi"),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("quis"),
        Parent: "veritatis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.ApigeeregistryProjectsLocationsApisCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [ApigeeregistryProjectsLocationsApisCreate](docs/projects/README.md#apigeeregistryprojectslocationsapiscreate) - Creates a specified API.
* [ApigeeregistryProjectsLocationsApisDeploymentsCreate](docs/projects/README.md#apigeeregistryprojectslocationsapisdeploymentscreate) - Creates a specified deployment.
* [ApigeeregistryProjectsLocationsApisDeploymentsList](docs/projects/README.md#apigeeregistryprojectslocationsapisdeploymentslist) - Returns matching deployments.
* [ApigeeregistryProjectsLocationsApisList](docs/projects/README.md#apigeeregistryprojectslocationsapislist) - Returns matching APIs.
* [ApigeeregistryProjectsLocationsApisVersionsCreate](docs/projects/README.md#apigeeregistryprojectslocationsapisversionscreate) - Creates a specified version.
* [ApigeeregistryProjectsLocationsApisVersionsList](docs/projects/README.md#apigeeregistryprojectslocationsapisversionslist) - Returns matching versions.
* [ApigeeregistryProjectsLocationsApisVersionsSpecsCreate](docs/projects/README.md#apigeeregistryprojectslocationsapisversionsspecscreate) - Creates a specified spec.
* [ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevision](docs/projects/README.md#apigeeregistryprojectslocationsapisversionsspecsdeleterevision) - Deletes a revision of a spec.
* [ApigeeregistryProjectsLocationsApisVersionsSpecsList](docs/projects/README.md#apigeeregistryprojectslocationsapisversionsspecslist) - Returns matching specs.
* [ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisions](docs/projects/README.md#apigeeregistryprojectslocationsapisversionsspecslistrevisions) - Lists all revisions of a spec. Revisions are returned in descending order of revision creation time.
* [ApigeeregistryProjectsLocationsApisVersionsSpecsPatch](docs/projects/README.md#apigeeregistryprojectslocationsapisversionsspecspatch) - Used to modify a specified spec.
* [ApigeeregistryProjectsLocationsApisVersionsSpecsRollback](docs/projects/README.md#apigeeregistryprojectslocationsapisversionsspecsrollback) - Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.
* [ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevision](docs/projects/README.md#apigeeregistryprojectslocationsapisversionsspecstagrevision) - Adds a tag to a specified revision of a spec.
* [ApigeeregistryProjectsLocationsArtifactsCreate](docs/projects/README.md#apigeeregistryprojectslocationsartifactscreate) - Creates a specified artifact.
* [ApigeeregistryProjectsLocationsArtifactsGetContents](docs/projects/README.md#apigeeregistryprojectslocationsartifactsgetcontents) - Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
* [ApigeeregistryProjectsLocationsArtifactsList](docs/projects/README.md#apigeeregistryprojectslocationsartifactslist) - Returns matching artifacts.
* [ApigeeregistryProjectsLocationsArtifactsReplaceArtifact](docs/projects/README.md#apigeeregistryprojectslocationsartifactsreplaceartifact) - Used to replace a specified artifact.
* [ApigeeregistryProjectsLocationsInstancesCreate](docs/projects/README.md#apigeeregistryprojectslocationsinstancescreate) - Provisions instance resources for the Registry.
* [ApigeeregistryProjectsLocationsList](docs/projects/README.md#apigeeregistryprojectslocationslist) - Lists information about the supported locations for this service.
* [ApigeeregistryProjectsLocationsOperationsCancel](docs/projects/README.md#apigeeregistryprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [ApigeeregistryProjectsLocationsOperationsDelete](docs/projects/README.md#apigeeregistryprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [ApigeeregistryProjectsLocationsOperationsGet](docs/projects/README.md#apigeeregistryprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [ApigeeregistryProjectsLocationsOperationsList](docs/projects/README.md#apigeeregistryprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* [ApigeeregistryProjectsLocationsRuntimeGetIamPolicy](docs/projects/README.md#apigeeregistryprojectslocationsruntimegetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [ApigeeregistryProjectsLocationsRuntimeSetIamPolicy](docs/projects/README.md#apigeeregistryprojectslocationsruntimesetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [ApigeeregistryProjectsLocationsRuntimeTestIamPermissions](docs/projects/README.md#apigeeregistryprojectslocationsruntimetestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
