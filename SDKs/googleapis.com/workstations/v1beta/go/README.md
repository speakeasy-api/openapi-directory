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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.WorkstationsProjectsLocationsOperationsCancelRequest{
        DollarXgafv: "2",
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        AccessToken: "vel",
        Alt: "media",
        Callback: "deserunt",
        Fields: "suscipit",
        Key: "iure",
        Name: "magnam",
        OauthToken: "debitis",
        PrettyPrint: false,
        QuotaUser: "ipsa",
        UploadType: "delectus",
        UploadProtocol: "tempora",
    }

    ctx := context.Background()
    res, err := s.Projects.WorkstationsProjectsLocationsOperationsCancel(ctx, req, operations.WorkstationsProjectsLocationsOperationsCancelSecurity{
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


### Projects

* `WorkstationsProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `WorkstationsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `WorkstationsProjectsLocationsWorkstationClustersCreate` - Creates a new workstation cluster.
* `WorkstationsProjectsLocationsWorkstationClustersList` - Returns all workstation clusters in the specified location.
* `WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreate` - Creates a new workstation configuration.
* `WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsList` - Returns all workstation configurations in the specified cluster.
* `WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsable` - Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.
* `WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreate` - Creates a new workstation.
* `WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDelete` - Deletes the specified workstation.
* `WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessToken` - Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.
* `WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGet` - Returns the requested workstation.
* `WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsList` - Returns all Workstations using the specified config.
* `WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsable` - Returns all Workstations using the specified config on which the caller has the "workstations.workstations.use" permission.
* `WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatch` - Updates an existing workstation.
* `WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStart` - Starts running a workstation so that users can connect to it.
* `WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStop` - Stops running a workstation, reducing costs.
* `WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
