# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/vmmigration/v1/go
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
    res, err := s.Projects.VmmigrationProjectsLocationsGroupsAddGroupMigration(ctx, operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddGroupMigrationRequest: &shared.AddGroupMigrationRequest{
            MigratingVM: sdk.String("provident"),
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("nulla"),
        Group: "corrupti",
        Key: sdk.String("illum"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity{
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

* [VmmigrationProjectsLocationsGroupsAddGroupMigration](docs/projects/README.md#vmmigrationprojectslocationsgroupsaddgroupmigration) - Adds a MigratingVm to a Group.
* [VmmigrationProjectsLocationsGroupsCreate](docs/projects/README.md#vmmigrationprojectslocationsgroupscreate) - Creates a new Group in a given project and location.
* [VmmigrationProjectsLocationsGroupsList](docs/projects/README.md#vmmigrationprojectslocationsgroupslist) - Lists Groups in a given project and location.
* [VmmigrationProjectsLocationsGroupsRemoveGroupMigration](docs/projects/README.md#vmmigrationprojectslocationsgroupsremovegroupmigration) - Removes a MigratingVm from a Group.
* [VmmigrationProjectsLocationsList](docs/projects/README.md#vmmigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [VmmigrationProjectsLocationsOperationsList](docs/projects/README.md#vmmigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [VmmigrationProjectsLocationsSourcesCreate](docs/projects/README.md#vmmigrationprojectslocationssourcescreate) - Creates a new Source in a given project and location.
* [VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate](docs/projects/README.md#vmmigrationprojectslocationssourcesdatacenterconnectorscreate) - Creates a new DatacenterConnector in a given Source.
* [VmmigrationProjectsLocationsSourcesDatacenterConnectorsList](docs/projects/README.md#vmmigrationprojectslocationssourcesdatacenterconnectorslist) - Lists DatacenterConnectors in a given Source.
* [VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance](docs/projects/README.md#vmmigrationprojectslocationssourcesdatacenterconnectorsupgradeappliance) - Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
* [VmmigrationProjectsLocationsSourcesFetchInventory](docs/projects/README.md#vmmigrationprojectslocationssourcesfetchinventory) - List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
* [VmmigrationProjectsLocationsSourcesList](docs/projects/README.md#vmmigrationprojectslocationssourceslist) - Lists Sources in a given project and location.
* [VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmsclonejobscreate) - Initiates a Clone of a specific migrating VM.
* [VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmsclonejobslist) - Lists CloneJobs of a given migrating VM.
* [VmmigrationProjectsLocationsSourcesMigratingVmsCreate](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmscreate) - Creates a new MigratingVm in a given Source.
* [VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmscutoverjobscancel) - Initiates the cancellation of a running cutover job.
* [VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmscutoverjobscreate) - Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.
* [VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmscutoverjobslist) - Lists CutoverJobs of a given migrating VM.
* [VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmsfinalizemigration) - Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.
* [VmmigrationProjectsLocationsSourcesMigratingVmsList](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmslist) - Lists MigratingVms in a given Source.
* [VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmspausemigration) - Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.
* [VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmsreplicationcycleslist) - Lists ReplicationCycles in a given MigratingVM.
* [VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmsresumemigration) - Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.
* [VmmigrationProjectsLocationsSourcesMigratingVmsStartMigration](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmsstartmigration) - Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.
* [VmmigrationProjectsLocationsSourcesUtilizationReportsCreate](docs/projects/README.md#vmmigrationprojectslocationssourcesutilizationreportscreate) - Creates a new UtilizationReport.
* [VmmigrationProjectsLocationsSourcesUtilizationReportsList](docs/projects/README.md#vmmigrationprojectslocationssourcesutilizationreportslist) - Lists Utilization Reports of the given Source.
* [VmmigrationProjectsLocationsTargetProjectsCreate](docs/projects/README.md#vmmigrationprojectslocationstargetprojectscreate) - Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [VmmigrationProjectsLocationsTargetProjectsDelete](docs/projects/README.md#vmmigrationprojectslocationstargetprojectsdelete) - Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [VmmigrationProjectsLocationsTargetProjectsGet](docs/projects/README.md#vmmigrationprojectslocationstargetprojectsget) - Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [VmmigrationProjectsLocationsTargetProjectsList](docs/projects/README.md#vmmigrationprojectslocationstargetprojectslist) - Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [VmmigrationProjectsLocationsTargetProjectsPatch](docs/projects/README.md#vmmigrationprojectslocationstargetprojectspatch) - Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
