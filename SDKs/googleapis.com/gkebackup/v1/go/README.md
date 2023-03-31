# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/gkebackup/v1/go
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

    req := operations.GkebackupProjectsLocationsBackupPlansBackupsCreateRequest{
        DollarXgafv: "2",
        BackupInput: &shared.BackupInput{
            ClusterMetadata: &shared.ClusterMetadata{
                AnthosVersion: "provident",
                BackupCrdVersions: map[string]string{
                    "quibusdam": "unde",
                    "nulla": "corrupti",
                    "illum": "vel",
                },
                Cluster: "error",
                GkeVersion: "deserunt",
                K8sVersion: "suscipit",
            },
            DeleteLockDays: 437587,
            Description: "magnam",
            EncryptionKey: &shared.EncryptionKey{
                GcpKmsEncryptionKey: "debitis",
            },
            Labels: map[string]string{
                "delectus": "tempora",
            },
            RetainDays: 383441,
            SelectedApplications: &shared.NamespacedNames{
                NamespacedNames: []shared.NamespacedName{
                    shared.NamespacedName{
                        Name: "minus",
                        Namespace: "placeat",
                    },
                    shared.NamespacedName{
                        Name: "voluptatum",
                        Namespace: "iusto",
                    },
                },
            },
            SelectedNamespaces: &shared.Namespaces{
                Namespaces: []string{
                    "nisi",
                    "recusandae",
                    "temporibus",
                },
            },
        },
        AccessToken: "ab",
        Alt: "media",
        BackupID: "veritatis",
        Callback: "deserunt",
        Fields: "perferendis",
        Key: "ipsam",
        OauthToken: "repellendus",
        Parent: "sapiente",
        PrettyPrint: false,
        QuotaUser: "quo",
        UploadType: "odit",
        UploadProtocol: "at",
    }

    ctx := context.Background()
    res, err := s.Projects.GkebackupProjectsLocationsBackupPlansBackupsCreate(ctx, req, operations.GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity{
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

* `GkebackupProjectsLocationsBackupPlansBackupsCreate` - Creates a Backup for the given BackupPlan.
* `GkebackupProjectsLocationsBackupPlansBackupsList` - Lists the Backups for a given BackupPlan.
* `GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList` - Lists the VolumeBackups for a given Backup.
* `GkebackupProjectsLocationsBackupPlansCreate` - Creates a new BackupPlan in a given location.
* `GkebackupProjectsLocationsBackupPlansList` - Lists BackupPlans in a given location.
* `GkebackupProjectsLocationsDeleteOperations` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `GkebackupProjectsLocationsList` - Lists information about the supported locations for this service.
* `GkebackupProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `GkebackupProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `GkebackupProjectsLocationsRestorePlansCreate` - Creates a new RestorePlan in a given location.
* `GkebackupProjectsLocationsRestorePlansList` - Lists RestorePlans in a given location.
* `GkebackupProjectsLocationsRestorePlansRestoresCreate` - Creates a new Restore for the given RestorePlan.
* `GkebackupProjectsLocationsRestorePlansRestoresDelete` - Deletes an existing Restore.
* `GkebackupProjectsLocationsRestorePlansRestoresList` - Lists the Restores for a given RestorePlan.
* `GkebackupProjectsLocationsRestorePlansRestoresPatch` - Update a Restore.
* `GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet` - Retrieve the details of a single VolumeRestore.
* `GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList` - Lists the VolumeRestores for a given Restore.
* `GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
