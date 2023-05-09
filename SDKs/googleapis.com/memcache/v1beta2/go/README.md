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
    res, err := s.Projects.MemcacheProjectsLocationsInstancesApplyParameters(ctx, operations.MemcacheProjectsLocationsInstancesApplyParametersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ApplyParametersRequest: &shared.ApplyParametersRequest{
            ApplyAll: sdk.Bool(false),
            NodeIds: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
        },
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("vel"),
        Key: sdk.String("error"),
        Name: "Rick Kertzmann",
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.MemcacheProjectsLocationsInstancesApplyParametersSecurity{
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


### [Projects](docs/projects/README.md)

* [MemcacheProjectsLocationsInstancesApplyParameters](docs/projects/README.md#memcacheprojectslocationsinstancesapplyparameters) - `ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.
* [MemcacheProjectsLocationsInstancesApplySoftwareUpdate](docs/projects/README.md#memcacheprojectslocationsinstancesapplysoftwareupdate) - Updates software on the selected nodes of the Instance.
* [MemcacheProjectsLocationsInstancesCreate](docs/projects/README.md#memcacheprojectslocationsinstancescreate) - Creates a new Instance in a given location.
* [MemcacheProjectsLocationsInstancesList](docs/projects/README.md#memcacheprojectslocationsinstanceslist) - Lists Instances in a given location.
* [MemcacheProjectsLocationsInstancesPatch](docs/projects/README.md#memcacheprojectslocationsinstancespatch) - Updates an existing Instance in a given project and location.
* [MemcacheProjectsLocationsInstancesRescheduleMaintenance](docs/projects/README.md#memcacheprojectslocationsinstancesreschedulemaintenance) - Performs the apply phase of the RescheduleMaintenance verb.
* [MemcacheProjectsLocationsInstancesUpdateParameters](docs/projects/README.md#memcacheprojectslocationsinstancesupdateparameters) - Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.
* [MemcacheProjectsLocationsList](docs/projects/README.md#memcacheprojectslocationslist) - Lists information about the supported locations for this service.
* [MemcacheProjectsLocationsOperationsCancel](docs/projects/README.md#memcacheprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [MemcacheProjectsLocationsOperationsDelete](docs/projects/README.md#memcacheprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [MemcacheProjectsLocationsOperationsGet](docs/projects/README.md#memcacheprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [MemcacheProjectsLocationsOperationsList](docs/projects/README.md#memcacheprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
