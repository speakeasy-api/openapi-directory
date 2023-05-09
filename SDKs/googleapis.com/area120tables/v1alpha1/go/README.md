# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/area120tables/v1alpha1/go
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
    res, err := s.Tables.Area120tablesTablesList(ctx, operations.Area120tablesTablesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        OrderBy: sdk.String("illum"),
        PageSize: sdk.Int64(423655),
        PageToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("iure"),
    }, operations.Area120tablesTablesListSecurity{
        Option1: &operations.Area120tablesTablesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTablesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Tables](docs/tables/README.md)

* [Area120tablesTablesList](docs/tables/README.md#area120tablestableslist) - Lists tables for the user.
* [Area120tablesTablesRowsBatchCreate](docs/tables/README.md#area120tablestablesrowsbatchcreate) - Creates multiple rows.
* [Area120tablesTablesRowsBatchDelete](docs/tables/README.md#area120tablestablesrowsbatchdelete) - Deletes multiple rows.
* [Area120tablesTablesRowsBatchUpdate](docs/tables/README.md#area120tablestablesrowsbatchupdate) - Updates multiple rows.
* [Area120tablesTablesRowsCreate](docs/tables/README.md#area120tablestablesrowscreate) - Creates a row.
* [Area120tablesTablesRowsDelete](docs/tables/README.md#area120tablestablesrowsdelete) - Deletes a row.
* [Area120tablesTablesRowsList](docs/tables/README.md#area120tablestablesrowslist) - Lists rows in a table. Returns NOT_FOUND if the table does not exist.
* [Area120tablesTablesRowsPatch](docs/tables/README.md#area120tablestablesrowspatch) - Updates a row.

### [Workspaces](docs/workspaces/README.md)

* [Area120tablesWorkspacesGet](docs/workspaces/README.md#area120tablesworkspacesget) - Gets a workspace. Returns NOT_FOUND if the workspace does not exist.
* [Area120tablesWorkspacesList](docs/workspaces/README.md#area120tablesworkspaceslist) - Lists workspaces for the user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
