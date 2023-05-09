# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/eventarc/v1/go
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
    res, err := s.Projects.EventarcProjectsLocationsChannelConnectionsCreate(ctx, operations.EventarcProjectsLocationsChannelConnectionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ChannelConnectionInput: &shared.ChannelConnectionInput{
            ActivationToken: sdk.String("provident"),
            Channel: sdk.String("distinctio"),
            Name: sdk.String("Stuart Stiedemann"),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        ChannelConnectionID: sdk.String("suscipit"),
        Fields: sdk.String("iure"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("debitis"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.EventarcProjectsLocationsChannelConnectionsCreateSecurity{
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

* [EventarcProjectsLocationsChannelConnectionsCreate](docs/projects/README.md#eventarcprojectslocationschannelconnectionscreate) - Create a new ChannelConnection in a particular project and location.
* [EventarcProjectsLocationsChannelConnectionsList](docs/projects/README.md#eventarcprojectslocationschannelconnectionslist) - List channel connections.
* [EventarcProjectsLocationsChannelsCreate](docs/projects/README.md#eventarcprojectslocationschannelscreate) - Create a new channel in a particular project and location.
* [EventarcProjectsLocationsChannelsList](docs/projects/README.md#eventarcprojectslocationschannelslist) - List channels.
* [EventarcProjectsLocationsList](docs/projects/README.md#eventarcprojectslocationslist) - Lists information about the supported locations for this service.
* [EventarcProjectsLocationsOperationsCancel](docs/projects/README.md#eventarcprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [EventarcProjectsLocationsOperationsList](docs/projects/README.md#eventarcprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [EventarcProjectsLocationsProvidersList](docs/projects/README.md#eventarcprojectslocationsproviderslist) - List providers.
* [EventarcProjectsLocationsTriggersCreate](docs/projects/README.md#eventarcprojectslocationstriggerscreate) - Create a new trigger in a particular project and location.
* [EventarcProjectsLocationsTriggersDelete](docs/projects/README.md#eventarcprojectslocationstriggersdelete) - Delete a single trigger.
* [EventarcProjectsLocationsTriggersGet](docs/projects/README.md#eventarcprojectslocationstriggersget) - Get a single trigger.
* [EventarcProjectsLocationsTriggersGetIamPolicy](docs/projects/README.md#eventarcprojectslocationstriggersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [EventarcProjectsLocationsTriggersList](docs/projects/README.md#eventarcprojectslocationstriggerslist) - List triggers.
* [EventarcProjectsLocationsTriggersPatch](docs/projects/README.md#eventarcprojectslocationstriggerspatch) - Update a single trigger.
* [EventarcProjectsLocationsTriggersSetIamPolicy](docs/projects/README.md#eventarcprojectslocationstriggerssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [EventarcProjectsLocationsTriggersTestIamPermissions](docs/projects/README.md#eventarcprojectslocationstriggerstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
