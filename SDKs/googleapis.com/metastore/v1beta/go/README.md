# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/metastore/v1beta/go
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
    res, err := s.Projects.MetastoreProjectsLocationsFederationsCreate(ctx, operations.MetastoreProjectsLocationsFederationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FederationInput: &shared.FederationInput{
            BackendMetastores: map[string]shared.BackendMetastore{
                "distinctio": shared.BackendMetastore{
                    MetastoreType: shared.BackendMetastoreMetastoreTypeEnumDataprocMetastore.ToPointer(),
                    Name: sdk.String("Ismael Little"),
                },
                "error": shared.BackendMetastore{
                    MetastoreType: shared.BackendMetastoreMetastoreTypeEnumBigquery.ToPointer(),
                    Name: sdk.String("Willie Gulgowski DVM"),
                },
                "tempora": shared.BackendMetastore{
                    MetastoreType: shared.BackendMetastoreMetastoreTypeEnumDataplex.ToPointer(),
                    Name: sdk.String("Alexandra Schulist"),
                },
            },
            Labels: map[string]string{
                "nisi": "recusandae",
                "temporibus": "ab",
                "quis": "veritatis",
            },
            Name: sdk.String("Christopher Hills"),
            Version: sdk.String("quo"),
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        FederationID: sdk.String("maiores"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("quod"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        RequestID: sdk.String("porro"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.MetastoreProjectsLocationsFederationsCreateSecurity{
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

* [MetastoreProjectsLocationsFederationsCreate](docs/projects/README.md#metastoreprojectslocationsfederationscreate) - Creates a metastore federation in a project and location.
* [MetastoreProjectsLocationsFederationsList](docs/projects/README.md#metastoreprojectslocationsfederationslist) - Lists federations in a project and location.
* [MetastoreProjectsLocationsList](docs/projects/README.md#metastoreprojectslocationslist) - Lists information about the supported locations for this service.
* [MetastoreProjectsLocationsOperationsCancel](docs/projects/README.md#metastoreprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [MetastoreProjectsLocationsOperationsList](docs/projects/README.md#metastoreprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
* [MetastoreProjectsLocationsServicesAlterLocation](docs/projects/README.md#metastoreprojectslocationsservicesalterlocation) - Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.
* [MetastoreProjectsLocationsServicesBackupsCreate](docs/projects/README.md#metastoreprojectslocationsservicesbackupscreate) - Creates a new backup in a given project and location.
* [MetastoreProjectsLocationsServicesBackupsDelete](docs/projects/README.md#metastoreprojectslocationsservicesbackupsdelete) - Deletes a single backup.
* [MetastoreProjectsLocationsServicesBackupsList](docs/projects/README.md#metastoreprojectslocationsservicesbackupslist) - Lists backups in a service.
* [MetastoreProjectsLocationsServicesCreate](docs/projects/README.md#metastoreprojectslocationsservicescreate) - Creates a metastore service in a project and location.
* [MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy](docs/projects/README.md#metastoreprojectslocationsservicesdatabasestablesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy](docs/projects/README.md#metastoreprojectslocationsservicesdatabasestablessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissions](docs/projects/README.md#metastoreprojectslocationsservicesdatabasestablestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [MetastoreProjectsLocationsServicesExportMetadata](docs/projects/README.md#metastoreprojectslocationsservicesexportmetadata) - Exports metadata from a service.
* [MetastoreProjectsLocationsServicesList](docs/projects/README.md#metastoreprojectslocationsserviceslist) - Lists services in a project and location.
* [MetastoreProjectsLocationsServicesMetadataImportsCreate](docs/projects/README.md#metastoreprojectslocationsservicesmetadataimportscreate) - Creates a new MetadataImport in a given project and location.
* [MetastoreProjectsLocationsServicesMetadataImportsGet](docs/projects/README.md#metastoreprojectslocationsservicesmetadataimportsget) - Gets details of a single import.
* [MetastoreProjectsLocationsServicesMetadataImportsList](docs/projects/README.md#metastoreprojectslocationsservicesmetadataimportslist) - Lists imports in a service.
* [MetastoreProjectsLocationsServicesMetadataImportsPatch](docs/projects/README.md#metastoreprojectslocationsservicesmetadataimportspatch) - Updates a single import. Only the description field of MetadataImport is supported to be updated.
* [MetastoreProjectsLocationsServicesMoveTableToDatabase](docs/projects/README.md#metastoreprojectslocationsservicesmovetabletodatabase) - Move a table to another database.
* [MetastoreProjectsLocationsServicesQueryMetadata](docs/projects/README.md#metastoreprojectslocationsservicesquerymetadata) - Query DPMS metadata.
* [MetastoreProjectsLocationsServicesRemoveIamPolicy](docs/projects/README.md#metastoreprojectslocationsservicesremoveiampolicy) - Removes the attached IAM policies for a resource
* [MetastoreProjectsLocationsServicesRestore](docs/projects/README.md#metastoreprojectslocationsservicesrestore) - Restores a service from a backup.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
