# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/vmmigration/v1alpha1/go
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

    req := operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest{
        DollarXgafv: "2",
        AddGroupMigrationRequest: &shared.AddGroupMigrationRequest{
            MigratingVM: "provident",
        },
        AccessToken: "distinctio",
        Alt: "proto",
        Callback: "unde",
        Fields: "nulla",
        Group: "corrupti",
        Key: "illum",
        OauthToken: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsGroupsAddGroupMigration(ctx, req, operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity{
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

* `VmmigrationProjectsLocationsGroupsAddGroupMigration` - Adds a MigratingVm to a Group.
* `VmmigrationProjectsLocationsGroupsCreate` - Creates a new Group in a given project and location.
* `VmmigrationProjectsLocationsGroupsList` - Lists Groups in a given project and location.
* `VmmigrationProjectsLocationsGroupsRemoveGroupMigration` - Removes a MigratingVm from a Group.
* `VmmigrationProjectsLocationsList` - Lists information about the supported locations for this service.
* `VmmigrationProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `VmmigrationProjectsLocationsSourcesCreate` - Creates a new Source in a given project and location.
* `VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate` - Creates a new DatacenterConnector in a given Source.
* `VmmigrationProjectsLocationsSourcesDatacenterConnectorsList` - Lists DatacenterConnectors in a given Source.
* `VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance` - Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
* `VmmigrationProjectsLocationsSourcesFetchInventory` - List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
* `VmmigrationProjectsLocationsSourcesList` - Lists Sources in a given project and location.
* `VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate` - Initiates a Clone of a specific migrating VM.
* `VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList` - Lists CloneJobs of a given migrating VM.
* `VmmigrationProjectsLocationsSourcesMigratingVmsCreate` - Creates a new MigratingVm in a given Source.
* `VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel` - Initiates the cancellation of a running cutover job.
* `VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate` - Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.
* `VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList` - Lists CutoverJobs of a given migrating VM.
* `VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration` - Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.
* `VmmigrationProjectsLocationsSourcesMigratingVmsList` - Lists MigratingVms in a given Source.
* `VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration` - Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.
* `VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList` - Lists ReplicationCycles in a given MigratingVM.
* `VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration` - Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.
* `VmmigrationProjectsLocationsSourcesMigratingVmsStartMigration` - Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.
* `VmmigrationProjectsLocationsSourcesUtilizationReportsCreate` - Creates a new UtilizationReport.
* `VmmigrationProjectsLocationsSourcesUtilizationReportsList` - Lists Utilization Reports of the given Source.
* `VmmigrationProjectsLocationsTargetProjectsCreate` - Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `VmmigrationProjectsLocationsTargetProjectsDelete` - Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `VmmigrationProjectsLocationsTargetProjectsGet` - Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `VmmigrationProjectsLocationsTargetProjectsList` - Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `VmmigrationProjectsLocationsTargetProjectsPatch` - Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
