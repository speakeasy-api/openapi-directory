# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AddGroupMigrationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest req = new VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest() {{
                dollarXgafv = "2";
                addGroupMigrationRequest = new AddGroupMigrationRequest() {{
                    migratingVm = "provident";
                }};
                accessToken = "distinctio";
                alt = "proto";
                callback = "unde";
                fields = "nulla";
                group = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }}            

            VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse res = sdk.projects.vmmigrationProjectsLocationsGroupsAddGroupMigration(req, new VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `vmmigrationProjectsLocationsGroupsAddGroupMigration` - Adds a MigratingVm to a Group.
* `vmmigrationProjectsLocationsGroupsCreate` - Creates a new Group in a given project and location.
* `vmmigrationProjectsLocationsGroupsList` - Lists Groups in a given project and location.
* `vmmigrationProjectsLocationsGroupsRemoveGroupMigration` - Removes a MigratingVm from a Group.
* `vmmigrationProjectsLocationsList` - Lists information about the supported locations for this service.
* `vmmigrationProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `vmmigrationProjectsLocationsSourcesCreate` - Creates a new Source in a given project and location.
* `vmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate` - Creates a new DatacenterConnector in a given Source.
* `vmmigrationProjectsLocationsSourcesDatacenterConnectorsList` - Lists DatacenterConnectors in a given Source.
* `vmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance` - Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
* `vmmigrationProjectsLocationsSourcesFetchInventory` - List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
* `vmmigrationProjectsLocationsSourcesList` - Lists Sources in a given project and location.
* `vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate` - Initiates a Clone of a specific migrating VM.
* `vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList` - Lists CloneJobs of a given migrating VM.
* `vmmigrationProjectsLocationsSourcesMigratingVmsCreate` - Creates a new MigratingVm in a given Source.
* `vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel` - Initiates the cancellation of a running cutover job.
* `vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate` - Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.
* `vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList` - Lists CutoverJobs of a given migrating VM.
* `vmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration` - Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.
* `vmmigrationProjectsLocationsSourcesMigratingVmsList` - Lists MigratingVms in a given Source.
* `vmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration` - Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.
* `vmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList` - Lists ReplicationCycles in a given MigratingVM.
* `vmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration` - Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.
* `vmmigrationProjectsLocationsSourcesMigratingVmsStartMigration` - Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.
* `vmmigrationProjectsLocationsSourcesUtilizationReportsCreate` - Creates a new UtilizationReport.
* `vmmigrationProjectsLocationsSourcesUtilizationReportsList` - Lists Utilization Reports of the given Source.
* `vmmigrationProjectsLocationsTargetProjectsCreate` - Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `vmmigrationProjectsLocationsTargetProjectsDelete` - Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `vmmigrationProjectsLocationsTargetProjectsGet` - Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `vmmigrationProjectsLocationsTargetProjectsList` - Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `vmmigrationProjectsLocationsTargetProjectsPatch` - Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
