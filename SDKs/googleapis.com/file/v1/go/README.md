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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.FileProjectsLocationsBackupsCreateRequest{
        DollarXgafv: "2",
        BackupInput: &shared.BackupInput{
            Description: "provident",
            KmsKey: "distinctio",
            Labels: map[string]string{
                "unde": "nulla",
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
            },
            SourceFileShare: "iure",
            SourceInstance: "magnam",
        },
        AccessToken: "debitis",
        Alt: "json",
        BackupID: "delectus",
        Callback: "tempora",
        Fields: "suscipit",
        Key: "molestiae",
        OauthToken: "minus",
        Parent: "placeat",
        PrettyPrint: false,
        QuotaUser: "voluptatum",
        UploadType: "iusto",
        UploadProtocol: "excepturi",
    }

    ctx := context.Background()
    res, err := s.Projects.FileProjectsLocationsBackupsCreate(ctx, req, operations.FileProjectsLocationsBackupsCreateSecurity{
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

* `FileProjectsLocationsBackupsCreate` - Creates a backup.
* `FileProjectsLocationsBackupsList` - Lists all backups in a project for either a specified location or for all locations.
* `FileProjectsLocationsInstancesCreate` - Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* `FileProjectsLocationsInstancesList` - Lists all instances in a project for either a specified location or for all locations.
* `FileProjectsLocationsInstancesRestore` - Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* `FileProjectsLocationsInstancesSnapshotsCreate` - Creates a snapshot.
* `FileProjectsLocationsInstancesSnapshotsList` - Lists all snapshots in a project for either a specified location or for all locations.
* `FileProjectsLocationsInstancesSnapshotsPatch` - Updates the settings of a specific snapshot.
* `FileProjectsLocationsList` - Lists information about the supported locations for this service.
* `FileProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `FileProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `FileProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `FileProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
