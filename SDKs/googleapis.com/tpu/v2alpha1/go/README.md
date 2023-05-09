# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/tpu/v2alpha1/go
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
    res, err := s.Projects.TpuProjectsLocationsAcceleratorTypesList(ctx, operations.TpuProjectsLocationsAcceleratorTypesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        OrderBy: sdk.String("vel"),
        PageSize: sdk.Int64(623564),
        PageToken: sdk.String("deserunt"),
        Parent: "suscipit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.TpuProjectsLocationsAcceleratorTypesListSecurity{
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


### [Projects](docs/projects/README.md)

* [TpuProjectsLocationsAcceleratorTypesList](docs/projects/README.md#tpuprojectslocationsacceleratortypeslist) - Lists accelerator types supported by this API.
* [TpuProjectsLocationsGenerateServiceIdentity](docs/projects/README.md#tpuprojectslocationsgenerateserviceidentity) - Generates the Cloud TPU service identity for the project.
* [TpuProjectsLocationsList](docs/projects/README.md#tpuprojectslocationslist) - Lists information about the supported locations for this service.
* [TpuProjectsLocationsNodesCreate](docs/projects/README.md#tpuprojectslocationsnodescreate) - Creates a node.
* [TpuProjectsLocationsNodesGetGuestAttributes](docs/projects/README.md#tpuprojectslocationsnodesgetguestattributes) - Retrieves the guest attributes for the node.
* [TpuProjectsLocationsNodesList](docs/projects/README.md#tpuprojectslocationsnodeslist) - Lists nodes.
* [TpuProjectsLocationsNodesPatch](docs/projects/README.md#tpuprojectslocationsnodespatch) - Updates the configurations of a node.
* [TpuProjectsLocationsNodesSimulateMaintenanceEvent](docs/projects/README.md#tpuprojectslocationsnodessimulatemaintenanceevent) - Simulates a maintenance event.
* [TpuProjectsLocationsNodesStart](docs/projects/README.md#tpuprojectslocationsnodesstart) - Starts a node.
* [TpuProjectsLocationsNodesStop](docs/projects/README.md#tpuprojectslocationsnodesstop) - Stops a node. This operation is only available with single TPU nodes.
* [TpuProjectsLocationsOperationsCancel](docs/projects/README.md#tpuprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [TpuProjectsLocationsOperationsList](docs/projects/README.md#tpuprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [TpuProjectsLocationsQueuedResourcesCreate](docs/projects/README.md#tpuprojectslocationsqueuedresourcescreate) - Creates a QueuedResource TPU instance.
* [TpuProjectsLocationsQueuedResourcesDelete](docs/projects/README.md#tpuprojectslocationsqueuedresourcesdelete) - Deletes a QueuedResource TPU instance.
* [TpuProjectsLocationsQueuedResourcesList](docs/projects/README.md#tpuprojectslocationsqueuedresourceslist) - Lists queued resources.
* [TpuProjectsLocationsRuntimeVersionsGet](docs/projects/README.md#tpuprojectslocationsruntimeversionsget) - Gets a runtime version.
* [TpuProjectsLocationsRuntimeVersionsList](docs/projects/README.md#tpuprojectslocationsruntimeversionslist) - Lists runtime versions supported by this API.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
