# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/ondemandscanning/v1beta1/go
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
    res, err := s.Projects.OndemandscanningProjectsLocationsOperationsCancel(ctx, operations.OndemandscanningProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        Name: "Dallas Kassulke",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.OndemandscanningProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [OndemandscanningProjectsLocationsOperationsCancel](docs/projects/README.md#ondemandscanningprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [OndemandscanningProjectsLocationsOperationsDelete](docs/projects/README.md#ondemandscanningprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [OndemandscanningProjectsLocationsOperationsGet](docs/projects/README.md#ondemandscanningprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [OndemandscanningProjectsLocationsOperationsList](docs/projects/README.md#ondemandscanningprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [OndemandscanningProjectsLocationsOperationsWait](docs/projects/README.md#ondemandscanningprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [OndemandscanningProjectsLocationsScansAnalyzePackages](docs/projects/README.md#ondemandscanningprojectslocationsscansanalyzepackages) - Initiates an analysis of the provided packages.
* [OndemandscanningProjectsLocationsScansVulnerabilitiesList](docs/projects/README.md#ondemandscanningprojectslocationsscansvulnerabilitieslist) - Lists vulnerabilities resulting from a successfully completed scan.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
