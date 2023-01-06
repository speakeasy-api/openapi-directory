# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GkebackupProjectsLocationsBackupPlansBackupsCreateRequest{
        Security: operations.GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams{
            Parent: "ut",
        },
        QueryParams: operations.GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "nam",
            Alt: "media",
            BackupID: "et",
            Callback: "et",
            Fields: "velit",
            Key: "quas",
            OauthToken: "nostrum",
            PrettyPrint: false,
            QuotaUser: "veritatis",
            UploadType: "quis",
            UploadProtocol: "quidem",
        },
        Request: &shared.BackupInput{
            ClusterMetadata: &shared.ClusterMetadata{
                AnthosVersion: "ratione",
                BackupCrdVersions: map[string]string{
                    "perferendis": "enim",
                    "natus": "repudiandae",
                    "aperiam": "minus",
                },
                Cluster: "esse",
                GkeVersion: "molestias",
                K8sVersion: "id",
            },
            DeleteLockDays: 3787620476912475370,
            Description: "neque",
            EncryptionKey: &shared.EncryptionKey{
                GcpKmsEncryptionKey: "sed",
            },
            Labels: map[string]string{
                "reprehenderit": "est",
                "velit": "dolores",
                "officia": "consequatur",
            },
            RetainDays: 8850273851812276247,
            SelectedApplications: &shared.NamespacedNames{
                NamespacedNames: []shared.NamespacedName{
                    shared.NamespacedName{
                        Name: "et",
                        Namespace: "iure",
                    },
                },
            },
            SelectedNamespaces: &shared.Namespaces{
                Namespaces: []string{
                    "modi",
                    "voluptatem",
                    "iusto",
                },
            },
        },
    }
    
    res, err := s.Projects.GkebackupProjectsLocationsBackupPlansBackupsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `GkebackupProjectsLocationsBackupPlansBackupsCreate` - Creates a Backup for the given BackupPlan.
* `GkebackupProjectsLocationsBackupPlansBackupsList` - Lists the Backups for a given BackupPlan.
* `GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList` - Lists the VolumeBackups for a given Backup.
* `GkebackupProjectsLocationsBackupPlansCreate` - Creates a new BackupPlan in a given location.
* `GkebackupProjectsLocationsBackupPlansList` - Lists BackupPlans in a given location.
* `GkebackupProjectsLocationsDeleteOperations` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `GkebackupProjectsLocationsList` - Lists information about the supported locations for this service.
* `GkebackupProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `GkebackupProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
