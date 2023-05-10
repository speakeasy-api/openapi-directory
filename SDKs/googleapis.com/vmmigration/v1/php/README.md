# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddGroupMigrationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addGroupMigrationRequest = new AddGroupMigrationRequest();
    $request->addGroupMigrationRequest->migratingVm = 'provident';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->group = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsGroupsAddGroupMigration($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [vmmigrationProjectsLocationsGroupsAddGroupMigration](docs/projects/README.md#vmmigrationprojectslocationsgroupsaddgroupmigration) - Adds a MigratingVm to a Group.
* [vmmigrationProjectsLocationsGroupsCreate](docs/projects/README.md#vmmigrationprojectslocationsgroupscreate) - Creates a new Group in a given project and location.
* [vmmigrationProjectsLocationsGroupsList](docs/projects/README.md#vmmigrationprojectslocationsgroupslist) - Lists Groups in a given project and location.
* [vmmigrationProjectsLocationsGroupsRemoveGroupMigration](docs/projects/README.md#vmmigrationprojectslocationsgroupsremovegroupmigration) - Removes a MigratingVm from a Group.
* [vmmigrationProjectsLocationsList](docs/projects/README.md#vmmigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [vmmigrationProjectsLocationsOperationsList](docs/projects/README.md#vmmigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [vmmigrationProjectsLocationsSourcesCreate](docs/projects/README.md#vmmigrationprojectslocationssourcescreate) - Creates a new Source in a given project and location.
* [vmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate](docs/projects/README.md#vmmigrationprojectslocationssourcesdatacenterconnectorscreate) - Creates a new DatacenterConnector in a given Source.
* [vmmigrationProjectsLocationsSourcesDatacenterConnectorsList](docs/projects/README.md#vmmigrationprojectslocationssourcesdatacenterconnectorslist) - Lists DatacenterConnectors in a given Source.
* [vmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance](docs/projects/README.md#vmmigrationprojectslocationssourcesdatacenterconnectorsupgradeappliance) - Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
* [vmmigrationProjectsLocationsSourcesFetchInventory](docs/projects/README.md#vmmigrationprojectslocationssourcesfetchinventory) - List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
* [vmmigrationProjectsLocationsSourcesList](docs/projects/README.md#vmmigrationprojectslocationssourceslist) - Lists Sources in a given project and location.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmsclonejobscreate) - Initiates a Clone of a specific migrating VM.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmsclonejobslist) - Lists CloneJobs of a given migrating VM.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCreate](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmscreate) - Creates a new MigratingVm in a given Source.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmscutoverjobscancel) - Initiates the cancellation of a running cutover job.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmscutoverjobscreate) - Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmscutoverjobslist) - Lists CutoverJobs of a given migrating VM.
* [vmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmsfinalizemigration) - Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.
* [vmmigrationProjectsLocationsSourcesMigratingVmsList](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmslist) - Lists MigratingVms in a given Source.
* [vmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmspausemigration) - Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.
* [vmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmsreplicationcycleslist) - Lists ReplicationCycles in a given MigratingVM.
* [vmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmsresumemigration) - Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.
* [vmmigrationProjectsLocationsSourcesMigratingVmsStartMigration](docs/projects/README.md#vmmigrationprojectslocationssourcesmigratingvmsstartmigration) - Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.
* [vmmigrationProjectsLocationsSourcesUtilizationReportsCreate](docs/projects/README.md#vmmigrationprojectslocationssourcesutilizationreportscreate) - Creates a new UtilizationReport.
* [vmmigrationProjectsLocationsSourcesUtilizationReportsList](docs/projects/README.md#vmmigrationprojectslocationssourcesutilizationreportslist) - Lists Utilization Reports of the given Source.
* [vmmigrationProjectsLocationsTargetProjectsCreate](docs/projects/README.md#vmmigrationprojectslocationstargetprojectscreate) - Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [vmmigrationProjectsLocationsTargetProjectsDelete](docs/projects/README.md#vmmigrationprojectslocationstargetprojectsdelete) - Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [vmmigrationProjectsLocationsTargetProjectsGet](docs/projects/README.md#vmmigrationprojectslocationstargetprojectsget) - Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [vmmigrationProjectsLocationsTargetProjectsList](docs/projects/README.md#vmmigrationprojectslocationstargetprojectslist) - Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [vmmigrationProjectsLocationsTargetProjectsPatch](docs/projects/README.md#vmmigrationprojectslocationstargetprojectspatch) - Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
