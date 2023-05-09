# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/networkconnectivity/v1/go
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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsGlobalHubsCreate(ctx, operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        HubInput: &shared.HubInput{
            Description: sdk.String("provident"),
            Labels: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            Name: sdk.String("Doug Hoppe"),
            RoutingVpcs: []shared.RoutingVPCInput{
                shared.RoutingVPCInput{
                    URI: sdk.String("http://whirlwind-diver.info"),
                },
                shared.RoutingVPCInput{
                    URI: sdk.String("http://spotted-skyline.name"),
                },
                shared.RoutingVPCInput{
                    URI: sdk.String("http://nice-gorilla.org"),
                },
                shared.RoutingVPCInput{
                    URI: sdk.String("https://bite-sized-favorite.com"),
                },
            },
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("repellendus"),
        HubID: sdk.String("sapiente"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("odit"),
        Parent: "at",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        RequestID: sdk.String("maiores"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("quod"),
    }, operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [NetworkconnectivityProjectsLocationsGlobalHubsCreate](docs/projects/README.md#networkconnectivityprojectslocationsglobalhubscreate) - Creates a new Network Connectivity Center hub in the specified project.
* [NetworkconnectivityProjectsLocationsGlobalHubsList](docs/projects/README.md#networkconnectivityprojectslocationsglobalhubslist) - Lists the Network Connectivity Center hubs associated with a given project.
* [NetworkconnectivityProjectsLocationsInternalRangesCreate](docs/projects/README.md#networkconnectivityprojectslocationsinternalrangescreate) - Creates a new internal range in a given project and location.
* [NetworkconnectivityProjectsLocationsInternalRangesList](docs/projects/README.md#networkconnectivityprojectslocationsinternalrangeslist) - Lists internal ranges in a given project and location.
* [NetworkconnectivityProjectsLocationsList](docs/projects/README.md#networkconnectivityprojectslocationslist) - Lists information about the supported locations for this service.
* [NetworkconnectivityProjectsLocationsOperationsCancel](docs/projects/README.md#networkconnectivityprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [NetworkconnectivityProjectsLocationsOperationsList](docs/projects/README.md#networkconnectivityprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [NetworkconnectivityProjectsLocationsSpokesCreate](docs/projects/README.md#networkconnectivityprojectslocationsspokescreate) - Creates a Network Connectivity Center spoke.
* [NetworkconnectivityProjectsLocationsSpokesDelete](docs/projects/README.md#networkconnectivityprojectslocationsspokesdelete) - Deletes a Network Connectivity Center spoke.
* [NetworkconnectivityProjectsLocationsSpokesGet](docs/projects/README.md#networkconnectivityprojectslocationsspokesget) - Gets details about a Network Connectivity Center spoke.
* [NetworkconnectivityProjectsLocationsSpokesGetIamPolicy](docs/projects/README.md#networkconnectivityprojectslocationsspokesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [NetworkconnectivityProjectsLocationsSpokesList](docs/projects/README.md#networkconnectivityprojectslocationsspokeslist) - Lists the Network Connectivity Center spokes in a specified project and location.
* [NetworkconnectivityProjectsLocationsSpokesPatch](docs/projects/README.md#networkconnectivityprojectslocationsspokespatch) - Updates the parameters of a Network Connectivity Center spoke.
* [NetworkconnectivityProjectsLocationsSpokesSetIamPolicy](docs/projects/README.md#networkconnectivityprojectslocationsspokessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [NetworkconnectivityProjectsLocationsSpokesTestIamPermissions](docs/projects/README.md#networkconnectivityprojectslocationsspokestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
