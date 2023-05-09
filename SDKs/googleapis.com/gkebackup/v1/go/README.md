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
    res, err := s.Projects.GkebackupProjectsLocationsBackupPlansBackupsCreate(ctx, operations.GkebackupProjectsLocationsBackupPlansBackupsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BackupInput: &shared.BackupInput{
            ClusterMetadata: &shared.ClusterMetadata{
                AnthosVersion: sdk.String("provident"),
                BackupCrdVersions: map[string]string{
                    "quibusdam": "unde",
                    "nulla": "corrupti",
                    "illum": "vel",
                },
                Cluster: sdk.String("error"),
                GkeVersion: sdk.String("deserunt"),
                K8sVersion: sdk.String("suscipit"),
            },
            DeleteLockDays: sdk.Int(437587),
            Description: sdk.String("magnam"),
            EncryptionKey: &shared.EncryptionKey{
                GcpKmsEncryptionKey: sdk.String("debitis"),
            },
            Labels: map[string]string{
                "delectus": "tempora",
            },
            RetainDays: sdk.Int(383441),
            SelectedApplications: &shared.NamespacedNames{
                NamespacedNames: []shared.NamespacedName{
                    shared.NamespacedName{
                        Name: sdk.String("Irving Lehner"),
                        Namespace: sdk.String("nisi"),
                    },
                    shared.NamespacedName{
                        Name: sdk.String("Jake Bernier MD"),
                        Namespace: sdk.String("perferendis"),
                    },
                },
            },
            SelectedNamespaces: &shared.Namespaces{
                Namespaces: []string{
                    "repellendus",
                    "sapiente",
                },
            },
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BackupID: sdk.String("at"),
        Callback: sdk.String("at"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("quod"),
        Parent: "quod",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("porro"),
    }, operations.GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity{
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

* [GkebackupProjectsLocationsBackupPlansBackupsCreate](docs/projects/README.md#gkebackupprojectslocationsbackupplansbackupscreate) - Creates a Backup for the given BackupPlan.
* [GkebackupProjectsLocationsBackupPlansBackupsList](docs/projects/README.md#gkebackupprojectslocationsbackupplansbackupslist) - Lists the Backups for a given BackupPlan.
* [GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList](docs/projects/README.md#gkebackupprojectslocationsbackupplansbackupsvolumebackupslist) - Lists the VolumeBackups for a given Backup.
* [GkebackupProjectsLocationsBackupPlansCreate](docs/projects/README.md#gkebackupprojectslocationsbackupplanscreate) - Creates a new BackupPlan in a given location.
* [GkebackupProjectsLocationsBackupPlansList](docs/projects/README.md#gkebackupprojectslocationsbackupplanslist) - Lists BackupPlans in a given location.
* [GkebackupProjectsLocationsDeleteOperations](docs/projects/README.md#gkebackupprojectslocationsdeleteoperations) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [GkebackupProjectsLocationsList](docs/projects/README.md#gkebackupprojectslocationslist) - Lists information about the supported locations for this service.
* [GkebackupProjectsLocationsOperationsCancel](docs/projects/README.md#gkebackupprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [GkebackupProjectsLocationsOperationsList](docs/projects/README.md#gkebackupprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [GkebackupProjectsLocationsRestorePlansCreate](docs/projects/README.md#gkebackupprojectslocationsrestoreplanscreate) - Creates a new RestorePlan in a given location.
* [GkebackupProjectsLocationsRestorePlansList](docs/projects/README.md#gkebackupprojectslocationsrestoreplanslist) - Lists RestorePlans in a given location.
* [GkebackupProjectsLocationsRestorePlansRestoresCreate](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestorescreate) - Creates a new Restore for the given RestorePlan.
* [GkebackupProjectsLocationsRestorePlansRestoresDelete](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresdelete) - Deletes an existing Restore.
* [GkebackupProjectsLocationsRestorePlansRestoresList](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoreslist) - Lists the Restores for a given RestorePlan.
* [GkebackupProjectsLocationsRestorePlansRestoresPatch](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestorespatch) - Update a Restore.
* [GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresvolumerestoresget) - Retrieve the details of a single VolumeRestore.
* [GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresvolumerestoresgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresvolumerestoreslist) - Lists the VolumeRestores for a given Restore.
* [GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresvolumerestoressetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresvolumerestorestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
