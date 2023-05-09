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
    res, err := s.Projects.IdsProjectsLocationsEndpointsCreate(ctx, operations.IdsProjectsLocationsEndpointsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EndpointInput: &shared.EndpointInput{
            Description: sdk.String("provident"),
            Labels: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            Network: sdk.String("error"),
            Severity: shared.EndpointSeverityEnumMedium.ToPointer(),
            ThreatExceptions: []string{
                "iure",
                "magnam",
            },
            TrafficLogs: sdk.Bool(false),
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        EndpointID: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("minus"),
        Parent: "placeat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        RequestID: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.IdsProjectsLocationsEndpointsCreateSecurity{
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

* [IdsProjectsLocationsEndpointsCreate](docs/projects/README.md#idsprojectslocationsendpointscreate) - Creates a new Endpoint in a given project and location.
* [IdsProjectsLocationsEndpointsGetIamPolicy](docs/projects/README.md#idsprojectslocationsendpointsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [IdsProjectsLocationsEndpointsList](docs/projects/README.md#idsprojectslocationsendpointslist) - Lists Endpoints in a given project and location.
* [IdsProjectsLocationsEndpointsPatch](docs/projects/README.md#idsprojectslocationsendpointspatch) - Updates the parameters of a single Endpoint.
* [IdsProjectsLocationsEndpointsSetIamPolicy](docs/projects/README.md#idsprojectslocationsendpointssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [IdsProjectsLocationsEndpointsTestIamPermissions](docs/projects/README.md#idsprojectslocationsendpointstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [IdsProjectsLocationsList](docs/projects/README.md#idsprojectslocationslist) - Lists information about the supported locations for this service.
* [IdsProjectsLocationsOperationsCancel](docs/projects/README.md#idsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [IdsProjectsLocationsOperationsDelete](docs/projects/README.md#idsprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [IdsProjectsLocationsOperationsGet](docs/projects/README.md#idsprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [IdsProjectsLocationsOperationsList](docs/projects/README.md#idsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
