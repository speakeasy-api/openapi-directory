# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/connectors/v1/go
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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh(ctx, operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        Name: "Raquel Bednar",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshSecurity{
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

* [ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh](docs/projects/README.md#connectorsprojectslocationsconnectionsconnectionschemametadatarefresh) - Refresh runtime schema of a connection.
* [ConnectorsProjectsLocationsConnectionsCreate](docs/projects/README.md#connectorsprojectslocationsconnectionscreate) - Creates a new Connection in a given project and location.
* [ConnectorsProjectsLocationsConnectionsList](docs/projects/README.md#connectorsprojectslocationsconnectionslist) - Lists Connections in a given project and location.
* [ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasList](docs/projects/README.md#connectorsprojectslocationsconnectionsruntimeactionschemaslist) - List schema of a runtime actions filtered by action name.
* [ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasList](docs/projects/README.md#connectorsprojectslocationsconnectionsruntimeentityschemaslist) - List schema of a runtime entities filtered by entity name.
* [ConnectorsProjectsLocationsEndpointAttachmentsCreate](docs/projects/README.md#connectorsprojectslocationsendpointattachmentscreate) - Creates a new EndpointAttachment in a given project and location.
* [ConnectorsProjectsLocationsEndpointAttachmentsList](docs/projects/README.md#connectorsprojectslocationsendpointattachmentslist) - List EndpointAttachments in a given project
* [ConnectorsProjectsLocationsGlobalManagedZonesCreate](docs/projects/README.md#connectorsprojectslocationsglobalmanagedzonescreate) - Creates a new ManagedZone in a given project and location.
* [ConnectorsProjectsLocationsGlobalManagedZonesList](docs/projects/README.md#connectorsprojectslocationsglobalmanagedzoneslist) - List ManagedZones in a given project
* [ConnectorsProjectsLocationsGlobalManagedZonesPatch](docs/projects/README.md#connectorsprojectslocationsglobalmanagedzonespatch) - Updates the parameters of a single ManagedZone.
* [ConnectorsProjectsLocationsList](docs/projects/README.md#connectorsprojectslocationslist) - Lists information about the supported locations for this service.
* [ConnectorsProjectsLocationsOperationsCancel](docs/projects/README.md#connectorsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [ConnectorsProjectsLocationsOperationsDelete](docs/projects/README.md#connectorsprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [ConnectorsProjectsLocationsOperationsList](docs/projects/README.md#connectorsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [ConnectorsProjectsLocationsProvidersConnectorsList](docs/projects/README.md#connectorsprojectslocationsprovidersconnectorslist) - Lists Connectors in a given project and location.
* [ConnectorsProjectsLocationsProvidersConnectorsVersionsGet](docs/projects/README.md#connectorsprojectslocationsprovidersconnectorsversionsget) - Gets details of a single connector version.
* [ConnectorsProjectsLocationsProvidersConnectorsVersionsList](docs/projects/README.md#connectorsprojectslocationsprovidersconnectorsversionslist) - Lists Connector Versions in a given project and location.
* [ConnectorsProjectsLocationsProvidersGetIamPolicy](docs/projects/README.md#connectorsprojectslocationsprovidersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [ConnectorsProjectsLocationsProvidersList](docs/projects/README.md#connectorsprojectslocationsproviderslist) - Lists Providers in a given project and location.
* [ConnectorsProjectsLocationsProvidersSetIamPolicy](docs/projects/README.md#connectorsprojectslocationsproviderssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [ConnectorsProjectsLocationsProvidersTestIamPermissions](docs/projects/README.md#connectorsprojectslocationsproviderstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
