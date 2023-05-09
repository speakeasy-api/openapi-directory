# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/file/v1/go
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
    res, err := s.Projects.FileProjectsLocationsBackupsCreate(ctx, operations.FileProjectsLocationsBackupsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BackupInput: &shared.BackupInput{
            Description: sdk.String("provident"),
            KmsKey: sdk.String("distinctio"),
            Labels: map[string]string{
                "unde": "nulla",
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
            },
            SourceFileShare: sdk.String("iure"),
            SourceInstance: sdk.String("magnam"),
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BackupID: sdk.String("delectus"),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("minus"),
        Parent: "placeat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.FileProjectsLocationsBackupsCreateSecurity{
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

* [FileProjectsLocationsBackupsCreate](docs/projects/README.md#fileprojectslocationsbackupscreate) - Creates a backup.
* [FileProjectsLocationsBackupsList](docs/projects/README.md#fileprojectslocationsbackupslist) - Lists all backups in a project for either a specified location or for all locations.
* [FileProjectsLocationsInstancesCreate](docs/projects/README.md#fileprojectslocationsinstancescreate) - Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* [FileProjectsLocationsInstancesList](docs/projects/README.md#fileprojectslocationsinstanceslist) - Lists all instances in a project for either a specified location or for all locations.
* [FileProjectsLocationsInstancesRestore](docs/projects/README.md#fileprojectslocationsinstancesrestore) - Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* [FileProjectsLocationsInstancesRevert](docs/projects/README.md#fileprojectslocationsinstancesrevert) - Revert an existing instance's file system to a specified snapshot.
* [FileProjectsLocationsInstancesSnapshotsCreate](docs/projects/README.md#fileprojectslocationsinstancessnapshotscreate) - Creates a snapshot.
* [FileProjectsLocationsInstancesSnapshotsList](docs/projects/README.md#fileprojectslocationsinstancessnapshotslist) - Lists all snapshots in a project for either a specified location or for all locations.
* [FileProjectsLocationsInstancesSnapshotsPatch](docs/projects/README.md#fileprojectslocationsinstancessnapshotspatch) - Updates the settings of a specific snapshot.
* [FileProjectsLocationsList](docs/projects/README.md#fileprojectslocationslist) - Lists information about the supported locations for this service.
* [FileProjectsLocationsOperationsCancel](docs/projects/README.md#fileprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [FileProjectsLocationsOperationsDelete](docs/projects/README.md#fileprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [FileProjectsLocationsOperationsGet](docs/projects/README.md#fileprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [FileProjectsLocationsOperationsList](docs/projects/README.md#fileprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
