# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/tpu/v2/go
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

    req := operations.TpuProjectsLocationsAcceleratorTypesListRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Filter: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        OrderBy: "vel",
        PageSize: 623564,
        PageToken: "deserunt",
        Parent: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsAcceleratorTypesList(ctx, req, operations.TpuProjectsLocationsAcceleratorTypesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAcceleratorTypesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `TpuProjectsLocationsAcceleratorTypesList` - Lists accelerator types supported by this API.
* `TpuProjectsLocationsGenerateServiceIdentity` - Generates the Cloud TPU service identity for the project.
* `TpuProjectsLocationsList` - Lists information about the supported locations for this service.
* `TpuProjectsLocationsNodesCreate` - Creates a node.
* `TpuProjectsLocationsNodesGetGuestAttributes` - Retrieves the guest attributes for the node.
* `TpuProjectsLocationsNodesList` - Lists nodes.
* `TpuProjectsLocationsNodesPatch` - Updates the configurations of a node.
* `TpuProjectsLocationsNodesStart` - Starts a node.
* `TpuProjectsLocationsNodesStop` - Stops a node. This operation is only available with single TPU nodes.
* `TpuProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `TpuProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `TpuProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `TpuProjectsLocationsRuntimeVersionsGet` - Gets a runtime version.
* `TpuProjectsLocationsRuntimeVersionsList` - Lists runtime versions supported by this API.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
