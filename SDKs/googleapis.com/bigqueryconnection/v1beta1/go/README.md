# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/bigqueryconnection/v1beta1/go
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
    res, err := s.Projects.BigqueryconnectionProjectsLocationsConnectionsCreate(ctx, operations.BigqueryconnectionProjectsLocationsConnectionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConnectionInput: &shared.ConnectionInput{
            CloudSQL: &shared.CloudSQLPropertiesInput{
                Credential: &shared.CloudSQLCredential{
                    Password: sdk.String("provident"),
                    Username: sdk.String("Micheal_Sporer"),
                },
                Database: sdk.String("corrupti"),
                InstanceID: sdk.String("illum"),
                Type: shared.CloudSQLPropertiesTypeEnumPostgres.ToPointer(),
            },
            Description: sdk.String("error"),
            FriendlyName: sdk.String("deserunt"),
            Name: sdk.String("Willie Gulgowski DVM"),
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        ConnectionID: sdk.String("minus"),
        Fields: sdk.String("placeat"),
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("iusto"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurity{
        Option1: &operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [BigqueryconnectionProjectsLocationsConnectionsCreate](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionscreate) - Creates a new connection.
* [BigqueryconnectionProjectsLocationsConnectionsDelete](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionsdelete) - Deletes connection and associated credential.
* [BigqueryconnectionProjectsLocationsConnectionsGet](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionsget) - Returns specified connection.
* [BigqueryconnectionProjectsLocationsConnectionsGetIamPolicy](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [BigqueryconnectionProjectsLocationsConnectionsList](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionslist) - Returns a list of connections in the given project.
* [BigqueryconnectionProjectsLocationsConnectionsSetIamPolicy](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [BigqueryconnectionProjectsLocationsConnectionsTestIamPermissions](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [BigqueryconnectionProjectsLocationsConnectionsUpdateCredential](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionsupdatecredential) - Sets the credential for the specified connection.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
