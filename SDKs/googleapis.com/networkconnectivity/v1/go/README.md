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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest{
        DollarXgafv: "2",
        HubInput: &shared.HubInput{
            Description: "provident",
            Labels: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            Name: "error",
            RoutingVpcs: []shared.RoutingVPCInput{
                shared.RoutingVPCInput{
                    URI: "http://innocent-effect.org",
                },
                shared.RoutingVPCInput{
                    URI: "http://whirlwind-diver.info",
                },
                shared.RoutingVPCInput{
                    URI: "http://spotted-skyline.name",
                },
            },
        },
        AccessToken: "iusto",
        Alt: "media",
        Callback: "nisi",
        Fields: "recusandae",
        HubID: "temporibus",
        Key: "ab",
        OauthToken: "quis",
        Parent: "veritatis",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        RequestID: "perferendis",
        UploadType: "ipsam",
        UploadProtocol: "repellendus",
    }

    ctx := context.Background()
    res, err := s.Projects.NetworkconnectivityProjectsLocationsGlobalHubsCreate(ctx, req, operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity{
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


### Projects

* `NetworkconnectivityProjectsLocationsGlobalHubsCreate` - Creates a new Network Connectivity Center hub in the specified project.
* `NetworkconnectivityProjectsLocationsGlobalHubsList` - Lists the Network Connectivity Center hubs associated with a given project.
* `NetworkconnectivityProjectsLocationsInternalRangesCreate` - Creates a new internal range in a given project and location.
* `NetworkconnectivityProjectsLocationsInternalRangesList` - Lists internal ranges in a given project and location.
* `NetworkconnectivityProjectsLocationsList` - Lists information about the supported locations for this service.
* `NetworkconnectivityProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `NetworkconnectivityProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `NetworkconnectivityProjectsLocationsSpokesCreate` - Creates a Network Connectivity Center spoke.
* `NetworkconnectivityProjectsLocationsSpokesDelete` - Deletes a Network Connectivity Center spoke.
* `NetworkconnectivityProjectsLocationsSpokesGet` - Gets details about a Network Connectivity Center spoke.
* `NetworkconnectivityProjectsLocationsSpokesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `NetworkconnectivityProjectsLocationsSpokesList` - Lists the Network Connectivity Center spokes in a specified project and location.
* `NetworkconnectivityProjectsLocationsSpokesPatch` - Updates the parameters of a Network Connectivity Center spoke.
* `NetworkconnectivityProjectsLocationsSpokesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `NetworkconnectivityProjectsLocationsSpokesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
