# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/workstations/v1beta/go
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
    res, err := s.Projects.WorkstationsProjectsLocationsOperationsCancel(ctx, operations.WorkstationsProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        Name: "Raquel Bednar",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.WorkstationsProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [WorkstationsProjectsLocationsOperationsCancel](docs/projects/README.md#workstationsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [WorkstationsProjectsLocationsOperationsList](docs/projects/README.md#workstationsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [WorkstationsProjectsLocationsWorkstationClustersCreate](docs/projects/README.md#workstationsprojectslocationsworkstationclusterscreate) - Creates a new workstation cluster.
* [WorkstationsProjectsLocationsWorkstationClustersList](docs/projects/README.md#workstationsprojectslocationsworkstationclusterslist) - Returns all workstation clusters in the specified location.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreate](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigscreate) - Creates a new workstation configuration.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsList](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigslist) - Returns all workstation configurations in the specified cluster.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsable](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigslistusable) - Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreate](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationscreate) - Creates a new workstation.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDelete](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsdelete) - Deletes the specified workstation.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessToken](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsgenerateaccesstoken) - Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGet](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsget) - Returns the requested workstation.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicy](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsList](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationslist) - Returns all Workstations using the specified workstation configuration.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsable](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationslistusable) - Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatch](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationspatch) - Updates an existing workstation.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicy](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStart](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsstart) - Starts running a workstation so that users can connect to it.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStop](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsstop) - Stops running a workstation, reducing costs.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissions](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
