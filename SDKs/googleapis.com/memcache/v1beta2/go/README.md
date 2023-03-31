# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/memcache/v1beta2/go
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

    req := operations.MemcacheProjectsLocationsInstancesApplyParametersRequest{
        DollarXgafv: "2",
        ApplyParametersRequest: &shared.ApplyParametersRequest{
            ApplyAll: false,
            NodeIds: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
        },
        AccessToken: "nulla",
        Alt: "media",
        Callback: "illum",
        Fields: "vel",
        Key: "error",
        Name: "deserunt",
        OauthToken: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Projects.MemcacheProjectsLocationsInstancesApplyParameters(ctx, req, operations.MemcacheProjectsLocationsInstancesApplyParametersSecurity{
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

* `MemcacheProjectsLocationsInstancesApplyParameters` - `ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.
* `MemcacheProjectsLocationsInstancesApplySoftwareUpdate` - Updates software on the selected nodes of the Instance.
* `MemcacheProjectsLocationsInstancesCreate` - Creates a new Instance in a given location.
* `MemcacheProjectsLocationsInstancesList` - Lists Instances in a given location.
* `MemcacheProjectsLocationsInstancesPatch` - Updates an existing Instance in a given project and location.
* `MemcacheProjectsLocationsInstancesRescheduleMaintenance` - Performs the apply phase of the RescheduleMaintenance verb.
* `MemcacheProjectsLocationsInstancesUpdateParameters` - Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.
* `MemcacheProjectsLocationsList` - Lists information about the supported locations for this service.
* `MemcacheProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `MemcacheProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `MemcacheProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `MemcacheProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
