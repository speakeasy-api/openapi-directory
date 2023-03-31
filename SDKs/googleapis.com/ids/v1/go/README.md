# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/ids/v1/go
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

    req := operations.IdsProjectsLocationsEndpointsCreateRequest{
        DollarXgafv: "2",
        EndpointInput: &shared.EndpointInput{
            Description: "provident",
            Labels: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            Network: "error",
            Severity: "MEDIUM",
            ThreatExceptions: []string{
                "iure",
                "magnam",
            },
            TrafficLogs: false,
        },
        AccessToken: "debitis",
        Alt: "json",
        Callback: "delectus",
        EndpointID: "tempora",
        Fields: "suscipit",
        Key: "molestiae",
        OauthToken: "minus",
        Parent: "placeat",
        PrettyPrint: false,
        QuotaUser: "voluptatum",
        RequestID: "iusto",
        UploadType: "excepturi",
        UploadProtocol: "nisi",
    }

    ctx := context.Background()
    res, err := s.Projects.IdsProjectsLocationsEndpointsCreate(ctx, req, operations.IdsProjectsLocationsEndpointsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
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


### Projects

* `IdsProjectsLocationsEndpointsCreate` - Creates a new Endpoint in a given project and location.
* `IdsProjectsLocationsEndpointsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `IdsProjectsLocationsEndpointsList` - Lists Endpoints in a given project and location.
* `IdsProjectsLocationsEndpointsPatch` - Updates the parameters of a single Endpoint.
* `IdsProjectsLocationsEndpointsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `IdsProjectsLocationsEndpointsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `IdsProjectsLocationsList` - Lists information about the supported locations for this service.
* `IdsProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `IdsProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `IdsProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `IdsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
