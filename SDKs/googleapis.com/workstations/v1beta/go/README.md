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
        Security: operations.WorkstationsProjectsLocationsOperationsCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.WorkstationsProjectsLocationsOperationsCancelPathParams{
            Name: "unde",
        },
        QueryParams: operations.WorkstationsProjectsLocationsOperationsCancelQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: map[string]interface{}{
            "iusto": "ullam",
            "saepe": "inventore",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.WorkstationsProjectsLocationsOperationsCancel(ctx, req)
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
## SDK Available Operations


### Projects

* `WorkstationsProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `WorkstationsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
