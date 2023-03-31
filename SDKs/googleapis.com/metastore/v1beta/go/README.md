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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.MetastoreProjectsLocationsFederationsCreateRequest{
        DollarXgafv: "2",
        FederationInput: &shared.FederationInput{
            BackendMetastores: map[string]shared.BackendMetastore{
                "distinctio": shared.BackendMetastore{
                    MetastoreType: "DATAPROC_METASTORE",
                    Name: "unde",
                },
                "nulla": shared.BackendMetastore{
                    MetastoreType: "BIGQUERY",
                    Name: "illum",
                },
                "vel": shared.BackendMetastore{
                    MetastoreType: "BIGQUERY",
                    Name: "deserunt",
                },
            },
            Labels: map[string]string{
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Name: "delectus",
            Version: "tempora",
        },
        AccessToken: "suscipit",
        Alt: "media",
        Callback: "minus",
        FederationID: "placeat",
        Fields: "voluptatum",
        Key: "iusto",
        OauthToken: "excepturi",
        Parent: "nisi",
        PrettyPrint: false,
        QuotaUser: "recusandae",
        RequestID: "temporibus",
        UploadType: "ab",
        UploadProtocol: "quis",
    }

    ctx := context.Background()
    res, err := s.Projects.MetastoreProjectsLocationsFederationsCreate(ctx, req, operations.MetastoreProjectsLocationsFederationsCreateSecurity{
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


### Projects

* `MetastoreProjectsLocationsFederationsCreate` - Creates a metastore federation in a project and location.
* `MetastoreProjectsLocationsFederationsList` - Lists federations in a project and location.
* `MetastoreProjectsLocationsList` - Lists information about the supported locations for this service.
* `MetastoreProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `MetastoreProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
* `MetastoreProjectsLocationsServicesAlterLocation` - Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.
* `MetastoreProjectsLocationsServicesBackupsCreate` - Creates a new backup in a given project and location.
* `MetastoreProjectsLocationsServicesBackupsDelete` - Deletes a single backup.
* `MetastoreProjectsLocationsServicesBackupsList` - Lists backups in a service.
* `MetastoreProjectsLocationsServicesCreate` - Creates a metastore service in a project and location.
* `MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* `MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `MetastoreProjectsLocationsServicesExportMetadata` - Exports metadata from a service.
* `MetastoreProjectsLocationsServicesList` - Lists services in a project and location.
* `MetastoreProjectsLocationsServicesMetadataImportsCreate` - Creates a new MetadataImport in a given project and location.
* `MetastoreProjectsLocationsServicesMetadataImportsGet` - Gets details of a single import.
* `MetastoreProjectsLocationsServicesMetadataImportsList` - Lists imports in a service.
* `MetastoreProjectsLocationsServicesMetadataImportsPatch` - Updates a single import. Only the description field of MetadataImport is supported to be updated.
* `MetastoreProjectsLocationsServicesMoveTableToDatabase` - Move a table to another database.
* `MetastoreProjectsLocationsServicesQueryMetadata` - Query DPMS metadata.
* `MetastoreProjectsLocationsServicesRemoveIamPolicy` - Removes the attached IAM policies for a resource
* `MetastoreProjectsLocationsServicesRestore` - Restores a service from a backup.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
