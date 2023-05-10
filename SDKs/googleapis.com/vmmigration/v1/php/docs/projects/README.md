# projects

### Available Operations

* [vmmigrationProjectsLocationsGroupsAddGroupMigration](#vmmigrationprojectslocationsgroupsaddgroupmigration) - Adds a MigratingVm to a Group.
* [vmmigrationProjectsLocationsGroupsCreate](#vmmigrationprojectslocationsgroupscreate) - Creates a new Group in a given project and location.
* [vmmigrationProjectsLocationsGroupsList](#vmmigrationprojectslocationsgroupslist) - Lists Groups in a given project and location.
* [vmmigrationProjectsLocationsGroupsRemoveGroupMigration](#vmmigrationprojectslocationsgroupsremovegroupmigration) - Removes a MigratingVm from a Group.
* [vmmigrationProjectsLocationsList](#vmmigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [vmmigrationProjectsLocationsOperationsList](#vmmigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [vmmigrationProjectsLocationsSourcesCreate](#vmmigrationprojectslocationssourcescreate) - Creates a new Source in a given project and location.
* [vmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate](#vmmigrationprojectslocationssourcesdatacenterconnectorscreate) - Creates a new DatacenterConnector in a given Source.
* [vmmigrationProjectsLocationsSourcesDatacenterConnectorsList](#vmmigrationprojectslocationssourcesdatacenterconnectorslist) - Lists DatacenterConnectors in a given Source.
* [vmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance](#vmmigrationprojectslocationssourcesdatacenterconnectorsupgradeappliance) - Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
* [vmmigrationProjectsLocationsSourcesFetchInventory](#vmmigrationprojectslocationssourcesfetchinventory) - List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
* [vmmigrationProjectsLocationsSourcesList](#vmmigrationprojectslocationssourceslist) - Lists Sources in a given project and location.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate](#vmmigrationprojectslocationssourcesmigratingvmsclonejobscreate) - Initiates a Clone of a specific migrating VM.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList](#vmmigrationprojectslocationssourcesmigratingvmsclonejobslist) - Lists CloneJobs of a given migrating VM.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCreate](#vmmigrationprojectslocationssourcesmigratingvmscreate) - Creates a new MigratingVm in a given Source.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel](#vmmigrationprojectslocationssourcesmigratingvmscutoverjobscancel) - Initiates the cancellation of a running cutover job.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate](#vmmigrationprojectslocationssourcesmigratingvmscutoverjobscreate) - Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList](#vmmigrationprojectslocationssourcesmigratingvmscutoverjobslist) - Lists CutoverJobs of a given migrating VM.
* [vmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration](#vmmigrationprojectslocationssourcesmigratingvmsfinalizemigration) - Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.
* [vmmigrationProjectsLocationsSourcesMigratingVmsList](#vmmigrationprojectslocationssourcesmigratingvmslist) - Lists MigratingVms in a given Source.
* [vmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration](#vmmigrationprojectslocationssourcesmigratingvmspausemigration) - Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.
* [vmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList](#vmmigrationprojectslocationssourcesmigratingvmsreplicationcycleslist) - Lists ReplicationCycles in a given MigratingVM.
* [vmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration](#vmmigrationprojectslocationssourcesmigratingvmsresumemigration) - Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.
* [vmmigrationProjectsLocationsSourcesMigratingVmsStartMigration](#vmmigrationprojectslocationssourcesmigratingvmsstartmigration) - Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.
* [vmmigrationProjectsLocationsSourcesUtilizationReportsCreate](#vmmigrationprojectslocationssourcesutilizationreportscreate) - Creates a new UtilizationReport.
* [vmmigrationProjectsLocationsSourcesUtilizationReportsList](#vmmigrationprojectslocationssourcesutilizationreportslist) - Lists Utilization Reports of the given Source.
* [vmmigrationProjectsLocationsTargetProjectsCreate](#vmmigrationprojectslocationstargetprojectscreate) - Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [vmmigrationProjectsLocationsTargetProjectsDelete](#vmmigrationprojectslocationstargetprojectsdelete) - Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [vmmigrationProjectsLocationsTargetProjectsGet](#vmmigrationprojectslocationstargetprojectsget) - Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [vmmigrationProjectsLocationsTargetProjectsList](#vmmigrationprojectslocationstargetprojectslist) - Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [vmmigrationProjectsLocationsTargetProjectsPatch](#vmmigrationprojectslocationstargetprojectspatch) - Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

## vmmigrationProjectsLocationsGroupsAddGroupMigration

Adds a MigratingVm to a Group.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->addGroupMigrationRequest = new AddGroupMigrationRequest();
    $request->addGroupMigrationRequest->migratingVm = 'magnam';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->group = 'suscipit';
    $request->key = 'molestiae';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

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

## vmmigrationProjectsLocationsGroupsCreate

Creates a new Group in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsGroupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsGroupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsGroupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->groupInput = new GroupInput();
    $request->groupInput->description = 'nisi';
    $request->groupInput->displayName = 'recusandae';
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'veritatis';
    $request->groupId = 'deserunt';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->parent = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->requestId = 'quo';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'at';

    $requestSecurity = new VmmigrationProjectsLocationsGroupsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsGroupsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsGroupsList

Lists Groups in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->filter = 'esse';
    $request->key = 'totam';
    $request->oauthToken = 'porro';
    $request->orderBy = 'dolorum';
    $request->pageSize = 118274;
    $request->pageToken = 'nam';
    $request->parent = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new VmmigrationProjectsLocationsGroupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsGroupsList($request, $requestSecurity);

    if ($response->listGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsGroupsRemoveGroupMigration

Removes a MigratingVm from a Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveGroupMigrationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsGroupsRemoveGroupMigrationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->removeGroupMigrationRequest = new RemoveGroupMigrationRequest();
    $request->removeGroupMigrationRequest->migratingVm = 'optio';
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'molestiae';
    $request->group = 'modi';
    $request->key = 'qui';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new VmmigrationProjectsLocationsGroupsRemoveGroupMigrationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsGroupsRemoveGroupMigration($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'natus';
    $request->filter = 'sed';
    $request->key = 'iste';
    $request->name = 'Faye Howe';
    $request->oauthToken = 'fuga';
    $request->pageSize = 449950;
    $request->pageToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new VmmigrationProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'est';
    $request->filter = 'mollitia';
    $request->key = 'laborum';
    $request->name = 'Connie Herzog';
    $request->oauthToken = 'enim';
    $request->pageSize = 607831;
    $request->pageToken = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new VmmigrationProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesCreate

Creates a new Source in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceInput;
use \OpenAPI\OpenAPI\Models\Shared\AwsSourceDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\AccessKeyCredentials;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\VmwareSourceDetails;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sourceInput = new SourceInput();
    $request->sourceInput->aws = new AwsSourceDetailsInput();
    $request->sourceInput->aws->accessKeyCreds = new AccessKeyCredentials();
    $request->sourceInput->aws->accessKeyCreds->accessKeyId = 'culpa';
    $request->sourceInput->aws->accessKeyCreds->secretAccessKey = 'doloribus';
    $request->sourceInput->aws->accessKeyCreds->sessionToken = 'sapiente';
    $request->sourceInput->aws->awsRegion = 'architecto';
    $request->sourceInput->aws->error = new Status();
    $request->sourceInput->aws->error->code = 652790;
    $request->sourceInput->aws->error->details = [
        [
            'consequuntur' => 'repellat',
            'mollitia' => 'occaecati',
            'numquam' => 'commodi',
        ],
    ];
    $request->sourceInput->aws->error->message = 'quam';
    $request->sourceInput->aws->inventorySecurityGroupNames = [
        'velit',
        'error',
    ];
    $request->sourceInput->aws->inventoryTagList = [
        new Tag(),
    ];
    $request->sourceInput->aws->migrationResourcesUserTags = [
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->sourceInput->description = 'odit';
    $request->sourceInput->labels = [
        'sequi' => 'tenetur',
        'ipsam' => 'id',
        'possimus' => 'aut',
        'quasi' => 'error',
    ];
    $request->sourceInput->vmware = new VmwareSourceDetails();
    $request->sourceInput->vmware->password = 'temporibus';
    $request->sourceInput->vmware->thumbprint = 'laborum';
    $request->sourceInput->vmware->username = 'Austyn_Witting46';
    $request->sourceInput->vmware->vcenterIp = 'praesentium';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'voluptate';
    $request->key = 'cum';
    $request->oauthToken = 'perferendis';
    $request->parent = 'doloremque';
    $request->prettyPrint = false;
    $request->quotaUser = 'reprehenderit';
    $request->requestId = 'ut';
    $request->sourceId = 'maiores';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate

Creates a new DatacenterConnector in a given Source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatacenterConnectorInput;
use \OpenAPI\OpenAPI\Models\Shared\AvailableUpdates;
use \OpenAPI\OpenAPI\Models\Shared\ApplianceVersion;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeStatus;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->datacenterConnectorInput = new DatacenterConnectorInput();
    $request->datacenterConnectorInput->availableVersions = new AvailableUpdates();
    $request->datacenterConnectorInput->availableVersions->inPlaceUpdate = new ApplianceVersion();
    $request->datacenterConnectorInput->availableVersions->inPlaceUpdate->critical = false;
    $request->datacenterConnectorInput->availableVersions->inPlaceUpdate->releaseNotesUri = 'iusto';
    $request->datacenterConnectorInput->availableVersions->inPlaceUpdate->uri = 'http://reliable-evaluation.org';
    $request->datacenterConnectorInput->availableVersions->inPlaceUpdate->version = 'commodi';
    $request->datacenterConnectorInput->availableVersions->newDeployableAppliance = new ApplianceVersion();
    $request->datacenterConnectorInput->availableVersions->newDeployableAppliance->critical = false;
    $request->datacenterConnectorInput->availableVersions->newDeployableAppliance->releaseNotesUri = 'repudiandae';
    $request->datacenterConnectorInput->availableVersions->newDeployableAppliance->uri = 'http://dutiful-printing.name';
    $request->datacenterConnectorInput->availableVersions->newDeployableAppliance->version = 'excepturi';
    $request->datacenterConnectorInput->error = new Status();
    $request->datacenterConnectorInput->error->code = 865103;
    $request->datacenterConnectorInput->error->details = [
        [
            'rem' => 'voluptates',
            'quasi' => 'repudiandae',
            'sint' => 'veritatis',
        ],
        [
            'incidunt' => 'enim',
            'consequatur' => 'est',
            'quibusdam' => 'explicabo',
            'deserunt' => 'distinctio',
        ],
    ];
    $request->datacenterConnectorInput->error->message = 'quibusdam';
    $request->datacenterConnectorInput->registrationId = 'labore';
    $request->datacenterConnectorInput->serviceAccount = 'modi';
    $request->datacenterConnectorInput->upgradeStatus = new UpgradeStatus();
    $request->datacenterConnectorInput->upgradeStatus->error = new Status();
    $request->datacenterConnectorInput->upgradeStatus->error->code = 183191;
    $request->datacenterConnectorInput->upgradeStatus->error->details = [
        [
            'quos' => 'perferendis',
            'magni' => 'assumenda',
            'ipsam' => 'alias',
        ],
        [
            'dolorum' => 'excepturi',
        ],
    ];
    $request->datacenterConnectorInput->upgradeStatus->error->message = 'tempora';
    $request->datacenterConnectorInput->upgradeStatus->previousVersion = 'facilis';
    $request->datacenterConnectorInput->upgradeStatus->startTime = 'tempore';
    $request->datacenterConnectorInput->upgradeStatus->state = UpgradeStatusStateEnum::RUNNING;
    $request->datacenterConnectorInput->upgradeStatus->version = 'delectus';
    $request->datacenterConnectorInput->version = 'eum';
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->datacenterConnectorId = 'aliquid';
    $request->fields = 'provident';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'sint';
    $request->parent = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->requestId = 'debitis';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesDatacenterConnectorsList

Lists DatacenterConnectors in a given Source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesDatacenterConnectorsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesDatacenterConnectorsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesDatacenterConnectorsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'rerum';
    $request->filter = 'dicta';
    $request->key = 'magnam';
    $request->oauthToken = 'cumque';
    $request->orderBy = 'facere';
    $request->pageSize = 411820;
    $request->pageToken = 'aliquid';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesDatacenterConnectorsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesDatacenterConnectorsList($request, $requestSecurity);

    if ($response->listDatacenterConnectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance

Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeApplianceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->upgradeApplianceRequest = new UpgradeApplianceRequest();
    $request->upgradeApplianceRequest->requestId = 'accusamus';
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->datacenterConnector = 'nam';
    $request->fields = 'id';
    $request->key = 'blanditiis';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesFetchInventory

List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesFetchInventoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesFetchInventorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesFetchInventoryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->fields = 'molestiae';
    $request->forceRefresh = false;
    $request->key = 'perferendis';
    $request->oauthToken = 'nihil';
    $request->pageSize = 301575;
    $request->pageToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->source = 'labore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesFetchInventorySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesFetchInventory($request, $requestSecurity);

    if ($response->fetchInventoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesList

Lists Sources in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vero';
    $request->fields = 'aspernatur';
    $request->filter = 'architecto';
    $request->key = 'magnam';
    $request->oauthToken = 'et';
    $request->orderBy = 'excepturi';
    $request->pageSize = 354047;
    $request->pageToken = 'provident';
    $request->parent = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesList($request, $requestSecurity);

    if ($response->listSourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate

Initiates a Clone of a specific migrating VM.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloneJobInput;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEngineTargetDetails;
use \OpenAPI\OpenAPI\Models\Shared\AppliedLicense;
use \OpenAPI\OpenAPI\Models\Shared\AppliedLicenseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEngineTargetDetailsBootOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeScheduling;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinity;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinityOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeSchedulingOnHostMaintenanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeSchedulingRestartTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEngineTargetDetailsDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEngineTargetDetailsLicenseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterface;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->cloneJobInput = new CloneJobInput();
    $request->cloneJobInput->computeEngineTargetDetails = new ComputeEngineTargetDetails();
    $request->cloneJobInput->computeEngineTargetDetails->additionalLicenses = [
        'ad',
        'eum',
        'dolor',
    ];
    $request->cloneJobInput->computeEngineTargetDetails->appliedLicense = new AppliedLicense();
    $request->cloneJobInput->computeEngineTargetDetails->appliedLicense->osLicense = 'necessitatibus';
    $request->cloneJobInput->computeEngineTargetDetails->appliedLicense->type = AppliedLicenseTypeEnum::TYPE_UNSPECIFIED;
    $request->cloneJobInput->computeEngineTargetDetails->bootOption = ComputeEngineTargetDetailsBootOptionEnum::COMPUTE_ENGINE_BOOT_OPTION_EFI;
    $request->cloneJobInput->computeEngineTargetDetails->computeScheduling = new ComputeScheduling();
    $request->cloneJobInput->computeEngineTargetDetails->computeScheduling->minNodeCpus = 97260;
    $request->cloneJobInput->computeEngineTargetDetails->computeScheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->cloneJobInput->computeEngineTargetDetails->computeScheduling->onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->cloneJobInput->computeEngineTargetDetails->computeScheduling->restartType = ComputeSchedulingRestartTypeEnum::NO_AUTOMATIC_RESTART;
    $request->cloneJobInput->computeEngineTargetDetails->diskType = ComputeEngineTargetDetailsDiskTypeEnum::COMPUTE_ENGINE_DISK_TYPE_STANDARD;
    $request->cloneJobInput->computeEngineTargetDetails->hostname = 'straight-manager.net';
    $request->cloneJobInput->computeEngineTargetDetails->labels = [
        'architecto' => 'architecto',
        'repudiandae' => 'ullam',
    ];
    $request->cloneJobInput->computeEngineTargetDetails->licenseType = ComputeEngineTargetDetailsLicenseTypeEnum::COMPUTE_ENGINE_LICENSE_TYPE_BYOL;
    $request->cloneJobInput->computeEngineTargetDetails->machineType = 'nihil';
    $request->cloneJobInput->computeEngineTargetDetails->machineTypeSeries = 'repellat';
    $request->cloneJobInput->computeEngineTargetDetails->metadata = [
        'sed' => 'saepe',
        'pariatur' => 'accusantium',
        'consequuntur' => 'praesentium',
        'natus' => 'magni',
    ];
    $request->cloneJobInput->computeEngineTargetDetails->networkInterfaces = [
        new NetworkInterface(),
    ];
    $request->cloneJobInput->computeEngineTargetDetails->networkTags = [
        'illum',
        'pariatur',
        'maxime',
        'ea',
    ];
    $request->cloneJobInput->computeEngineTargetDetails->project = 'excepturi';
    $request->cloneJobInput->computeEngineTargetDetails->secureBoot = false;
    $request->cloneJobInput->computeEngineTargetDetails->serviceAccount = 'odit';
    $request->cloneJobInput->computeEngineTargetDetails->vmName = 'ea';
    $request->cloneJobInput->computeEngineTargetDetails->zone = 'accusantium';
    $request->cloneJobInput->error = new Status();
    $request->cloneJobInput->error->code = 69167;
    $request->cloneJobInput->error->details = [
        [
            'ipsam' => 'voluptate',
            'autem' => 'nam',
            'eaque' => 'pariatur',
        ],
        [
            'voluptatibus' => 'perferendis',
            'fugiat' => 'amet',
        ],
        [
            'cumque' => 'corporis',
        ],
        [
            'libero' => 'nobis',
            'dolores' => 'quis',
            'totam' => 'dignissimos',
            'eaque' => 'quis',
        ],
    ];
    $request->cloneJobInput->error->message = 'nesciunt';
    $request->accessToken = 'eos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolores';
    $request->cloneJobId = 'minus';
    $request->fields = 'quam';
    $request->key = 'dolor';
    $request->oauthToken = 'vero';
    $request->parent = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->requestId = 'recusandae';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList

Lists CloneJobs of a given migrating VM.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequuntur';
    $request->fields = 'blanditiis';
    $request->filter = 'error';
    $request->key = 'eaque';
    $request->oauthToken = 'occaecati';
    $request->orderBy = 'rerum';
    $request->pageSize = 237893;
    $request->pageToken = 'asperiores';
    $request->parent = 'earum';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList($request, $requestSecurity);

    if ($response->listCloneJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsCreate

Creates a new MigratingVm in a given Source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MigratingVmInput;
use \OpenAPI\OpenAPI\Models\Shared\AwsSourceVmDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsSourceVmDetailsFirmwareEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEngineTargetDefaultsInput;
use \OpenAPI\OpenAPI\Models\Shared\AppliedLicense;
use \OpenAPI\OpenAPI\Models\Shared\AppliedLicenseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeScheduling;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinity;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinityOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeSchedulingOnHostMaintenanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeSchedulingRestartTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEngineTargetDefaultsDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEngineTargetDefaultsLicenseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterface;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationCycleInput;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationCycleStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\CycleStep;
use \OpenAPI\OpenAPI\Models\Shared\ReplicatingStep;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationSync;
use \OpenAPI\OpenAPI\Models\Shared\SchedulePolicy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->migratingVmInput = new MigratingVmInput();
    $request->migratingVmInput->awsSourceVmDetails = new AwsSourceVmDetails();
    $request->migratingVmInput->awsSourceVmDetails->committedStorageBytes = 'pariatur';
    $request->migratingVmInput->awsSourceVmDetails->firmware = AwsSourceVmDetailsFirmwareEnum::EFI;
    $request->migratingVmInput->computeEngineTargetDefaults = new ComputeEngineTargetDefaultsInput();
    $request->migratingVmInput->computeEngineTargetDefaults->additionalLicenses = [
        'libero',
        'delectus',
        'quaerat',
        'quos',
    ];
    $request->migratingVmInput->computeEngineTargetDefaults->appliedLicense = new AppliedLicense();
    $request->migratingVmInput->computeEngineTargetDefaults->appliedLicense->osLicense = 'aliquid';
    $request->migratingVmInput->computeEngineTargetDefaults->appliedLicense->type = AppliedLicenseTypeEnum::TYPE_UNSPECIFIED;
    $request->migratingVmInput->computeEngineTargetDefaults->computeScheduling = new ComputeScheduling();
    $request->migratingVmInput->computeEngineTargetDefaults->computeScheduling->minNodeCpus = 209843;
    $request->migratingVmInput->computeEngineTargetDefaults->computeScheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
    ];
    $request->migratingVmInput->computeEngineTargetDefaults->computeScheduling->onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum::ON_HOST_MAINTENANCE_UNSPECIFIED;
    $request->migratingVmInput->computeEngineTargetDefaults->computeScheduling->restartType = ComputeSchedulingRestartTypeEnum::RESTART_TYPE_UNSPECIFIED;
    $request->migratingVmInput->computeEngineTargetDefaults->diskType = ComputeEngineTargetDefaultsDiskTypeEnum::COMPUTE_ENGINE_DISK_TYPE_BALANCED;
    $request->migratingVmInput->computeEngineTargetDefaults->hostname = 'nimble-reporter.info';
    $request->migratingVmInput->computeEngineTargetDefaults->labels = [
        'reiciendis' => 'amet',
        'dolorum' => 'numquam',
    ];
    $request->migratingVmInput->computeEngineTargetDefaults->licenseType = ComputeEngineTargetDefaultsLicenseTypeEnum::COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT;
    $request->migratingVmInput->computeEngineTargetDefaults->machineType = 'ipsa';
    $request->migratingVmInput->computeEngineTargetDefaults->machineTypeSeries = 'ipsa';
    $request->migratingVmInput->computeEngineTargetDefaults->metadata = [
        'odio' => 'quaerat',
        'accusamus' => 'quidem',
    ];
    $request->migratingVmInput->computeEngineTargetDefaults->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->migratingVmInput->computeEngineTargetDefaults->networkTags = [
        'natus',
        'eos',
    ];
    $request->migratingVmInput->computeEngineTargetDefaults->secureBoot = false;
    $request->migratingVmInput->computeEngineTargetDefaults->serviceAccount = 'atque';
    $request->migratingVmInput->computeEngineTargetDefaults->targetProject = 'sit';
    $request->migratingVmInput->computeEngineTargetDefaults->vmName = 'fugiat';
    $request->migratingVmInput->computeEngineTargetDefaults->zone = 'ab';
    $request->migratingVmInput->currentSyncInfo = new ReplicationCycleInput();
    $request->migratingVmInput->currentSyncInfo->cycleNumber = 743835;
    $request->migratingVmInput->currentSyncInfo->endTime = 'dolorum';
    $request->migratingVmInput->currentSyncInfo->error = new Status();
    $request->migratingVmInput->currentSyncInfo->error->code = 478596;
    $request->migratingVmInput->currentSyncInfo->error->details = [
        [
            'deleniti' => 'omnis',
            'necessitatibus' => 'distinctio',
            'asperiores' => 'nihil',
        ],
        [
            'voluptate' => 'id',
        ],
    ];
    $request->migratingVmInput->currentSyncInfo->error->message = 'saepe';
    $request->migratingVmInput->currentSyncInfo->name = 'Judy Aufderhar';
    $request->migratingVmInput->currentSyncInfo->progressPercent = 881586;
    $request->migratingVmInput->currentSyncInfo->startTime = 'ad';
    $request->migratingVmInput->currentSyncInfo->state = ReplicationCycleStateEnum::SUCCEEDED;
    $request->migratingVmInput->currentSyncInfo->steps = [
        new CycleStep(),
        new CycleStep(),
    ];
    $request->migratingVmInput->currentSyncInfo->totalPauseDuration = 'deserunt';
    $request->migratingVmInput->description = 'provident';
    $request->migratingVmInput->displayName = 'minima';
    $request->migratingVmInput->error = new Status();
    $request->migratingVmInput->error->code = 831049;
    $request->migratingVmInput->error->details = [
        [
            'alias' => 'at',
            'quaerat' => 'tempora',
            'vel' => 'quod',
        ],
        [
            'qui' => 'dolorum',
            'a' => 'esse',
            'harum' => 'iusto',
            'ipsum' => 'quisquam',
        ],
        [
            'amet' => 'tempore',
            'accusamus' => 'numquam',
            'enim' => 'dolorem',
            'sapiente' => 'totam',
        ],
    ];
    $request->migratingVmInput->error->message = 'nihil';
    $request->migratingVmInput->labels = [
        'expedita' => 'neque',
    ];
    $request->migratingVmInput->lastReplicationCycle = new ReplicationCycleInput();
    $request->migratingVmInput->lastReplicationCycle->cycleNumber = 153694;
    $request->migratingVmInput->lastReplicationCycle->endTime = 'vel';
    $request->migratingVmInput->lastReplicationCycle->error = new Status();
    $request->migratingVmInput->lastReplicationCycle->error->code = 730442;
    $request->migratingVmInput->lastReplicationCycle->error->details = [
        [
            'quam' => 'ipsum',
            'incidunt' => 'qui',
            'cupiditate' => 'maxime',
        ],
        [
            'soluta' => 'dicta',
            'laborum' => 'totam',
            'incidunt' => 'aspernatur',
            'dolores' => 'distinctio',
        ],
    ];
    $request->migratingVmInput->lastReplicationCycle->error->message = 'facilis';
    $request->migratingVmInput->lastReplicationCycle->name = 'Constance Mann';
    $request->migratingVmInput->lastReplicationCycle->progressPercent = 204865;
    $request->migratingVmInput->lastReplicationCycle->startTime = 'fugit';
    $request->migratingVmInput->lastReplicationCycle->state = ReplicationCycleStateEnum::STATE_UNSPECIFIED;
    $request->migratingVmInput->lastReplicationCycle->steps = [
        new CycleStep(),
        new CycleStep(),
    ];
    $request->migratingVmInput->lastReplicationCycle->totalPauseDuration = 'sunt';
    $request->migratingVmInput->lastSync = new ReplicationSync();
    $request->migratingVmInput->lastSync->lastSyncTime = 'ullam';
    $request->migratingVmInput->policy = new SchedulePolicy();
    $request->migratingVmInput->policy->idleDuration = 'nam';
    $request->migratingVmInput->policy->skipOsAdaptation = false;
    $request->migratingVmInput->sourceVmId = 'hic';
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->fields = 'nobis';
    $request->key = 'et';
    $request->migratingVmId = 'saepe';
    $request->oauthToken = 'ipsum';
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->requestId = 'quos';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesMigratingVmsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesMigratingVmsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel

Initiates the cancellation of a running cutover job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'dolorem' => 'dolore',
        'labore' => 'adipisci',
        'dolorum' => 'architecto',
        'quae' => 'aut',
    ];
    $request->accessToken = 'quas';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequatur';
    $request->fields = 'est';
    $request->key = 'repellendus';
    $request->name = 'Domingo Grady';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate

Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CutoverJobInput;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEngineTargetDetails;
use \OpenAPI\OpenAPI\Models\Shared\AppliedLicense;
use \OpenAPI\OpenAPI\Models\Shared\AppliedLicenseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEngineTargetDetailsBootOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeScheduling;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinity;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinityOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeSchedulingOnHostMaintenanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeSchedulingRestartTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEngineTargetDetailsDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEngineTargetDetailsLicenseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterface;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->cutoverJobInput = new CutoverJobInput();
    $request->cutoverJobInput->computeEngineTargetDetails = new ComputeEngineTargetDetails();
    $request->cutoverJobInput->computeEngineTargetDetails->additionalLicenses = [
        'quisquam',
        'vero',
        'omnis',
        'quis',
    ];
    $request->cutoverJobInput->computeEngineTargetDetails->appliedLicense = new AppliedLicense();
    $request->cutoverJobInput->computeEngineTargetDetails->appliedLicense->osLicense = 'ipsum';
    $request->cutoverJobInput->computeEngineTargetDetails->appliedLicense->type = AppliedLicenseTypeEnum::BYOL;
    $request->cutoverJobInput->computeEngineTargetDetails->bootOption = ComputeEngineTargetDetailsBootOptionEnum::COMPUTE_ENGINE_BOOT_OPTION_EFI;
    $request->cutoverJobInput->computeEngineTargetDetails->computeScheduling = new ComputeScheduling();
    $request->cutoverJobInput->computeEngineTargetDetails->computeScheduling->minNodeCpus = 231701;
    $request->cutoverJobInput->computeEngineTargetDetails->computeScheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->cutoverJobInput->computeEngineTargetDetails->computeScheduling->onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->cutoverJobInput->computeEngineTargetDetails->computeScheduling->restartType = ComputeSchedulingRestartTypeEnum::AUTOMATIC_RESTART;
    $request->cutoverJobInput->computeEngineTargetDetails->diskType = ComputeEngineTargetDetailsDiskTypeEnum::COMPUTE_ENGINE_DISK_TYPE_BALANCED;
    $request->cutoverJobInput->computeEngineTargetDetails->hostname = 'same-shoestring.info';
    $request->cutoverJobInput->computeEngineTargetDetails->labels = [
        'facilis' => 'vero',
        'ducimus' => 'dolore',
        'quibusdam' => 'illum',
    ];
    $request->cutoverJobInput->computeEngineTargetDetails->licenseType = ComputeEngineTargetDetailsLicenseTypeEnum::COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT;
    $request->cutoverJobInput->computeEngineTargetDetails->machineType = 'natus';
    $request->cutoverJobInput->computeEngineTargetDetails->machineTypeSeries = 'impedit';
    $request->cutoverJobInput->computeEngineTargetDetails->metadata = [
        'voluptatibus' => 'exercitationem',
    ];
    $request->cutoverJobInput->computeEngineTargetDetails->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->cutoverJobInput->computeEngineTargetDetails->networkTags = [
        'porro',
    ];
    $request->cutoverJobInput->computeEngineTargetDetails->project = 'maiores';
    $request->cutoverJobInput->computeEngineTargetDetails->secureBoot = false;
    $request->cutoverJobInput->computeEngineTargetDetails->serviceAccount = 'doloribus';
    $request->cutoverJobInput->computeEngineTargetDetails->vmName = 'iusto';
    $request->cutoverJobInput->computeEngineTargetDetails->zone = 'eligendi';
    $request->cutoverJobInput->error = new Status();
    $request->cutoverJobInput->error->code = 497391;
    $request->cutoverJobInput->error->details = [
        [
            'tempora' => 'ipsam',
            'ea' => 'aspernatur',
            'vel' => 'possimus',
        ],
    ];
    $request->cutoverJobInput->error->message = 'magnam';
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laudantium';
    $request->cutoverJobId = 'dicta';
    $request->fields = 'dolor';
    $request->key = 'maiores';
    $request->oauthToken = 'quasi';
    $request->parent = 'ex';
    $request->prettyPrint = false;
    $request->quotaUser = 'nulla';
    $request->requestId = 'excepturi';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'nostrum';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList

Lists CutoverJobs of a given migrating VM.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'impedit';
    $request->filter = 'corporis';
    $request->key = 'veniam';
    $request->oauthToken = 'aliquid';
    $request->orderBy = 'inventore';
    $request->pageSize = 301831;
    $request->pageToken = 'ea';
    $request->parent = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'consectetur';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList($request, $requestSecurity);

    if ($response->listCutoverJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration

Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'a' => 'libero',
    ];
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'impedit';
    $request->key = 'aliquam';
    $request->migratingVm = 'fugit';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'inventore';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'et';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsList

Lists MigratingVms in a given Source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesMigratingVmsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'velit';
    $request->fields = 'eum';
    $request->filter = 'autem';
    $request->key = 'nobis';
    $request->oauthToken = 'quas';
    $request->orderBy = 'assumenda';
    $request->pageSize = 860552;
    $request->pageToken = 'voluptas';
    $request->parent = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'numquam';
    $request->view = VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum::MIGRATING_VM_VIEW_UNSPECIFIED;

    $requestSecurity = new VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesMigratingVmsList($request, $requestSecurity);

    if ($response->listMigratingVmsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration

Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'molestiae' => 'magnam',
    ];
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'esse';
    $request->key = 'rem';
    $request->migratingVm = 'fuga';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList

Lists ReplicationCycles in a given MigratingVM.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eos';
    $request->fields = 'praesentium';
    $request->filter = 'quisquam';
    $request->key = 'veritatis';
    $request->oauthToken = 'ipsa';
    $request->orderBy = 'id';
    $request->pageSize = 696997;
    $request->pageToken = 'neque';
    $request->parent = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList($request, $requestSecurity);

    if ($response->listReplicationCyclesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration

Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'voluptas' => 'ab',
    ];
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'debitis';
    $request->key = 'ipsam';
    $request->migratingVm = 'aspernatur';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsStartMigration

Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'quod' => 'dignissimos',
        'inventore' => 'nihil',
        'totam' => 'accusamus',
    ];
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'commodi';
    $request->key = 'sapiente';
    $request->migratingVm = 'dolores';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesMigratingVmsStartMigration($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesUtilizationReportsCreate

Creates a new UtilizationReport.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UtilizationReportInput;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\UtilizationReportTimeFrameEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmUtilizationInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\VmUtilizationMetrics;
use \OpenAPI\OpenAPI\Models\Shared\VmwareVmDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\VmwareVmDetailsPowerStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->utilizationReportInput = new UtilizationReportInput();
    $request->utilizationReportInput->displayName = 'quas';
    $request->utilizationReportInput->error = new Status();
    $request->utilizationReportInput->error->code = 510017;
    $request->utilizationReportInput->error->details = [
        [
            'fugit' => 'fuga',
            'mollitia' => 'incidunt',
            'atque' => 'explicabo',
        ],
    ];
    $request->utilizationReportInput->error->message = 'minima';
    $request->utilizationReportInput->timeFrame = UtilizationReportTimeFrameEnum::WEEK;
    $request->utilizationReportInput->vms = [
        new VmUtilizationInfoInput(),
    ];
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ratione';
    $request->fields = 'explicabo';
    $request->key = 'saepe';
    $request->oauthToken = 'occaecati';
    $request->parent = 'atque';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->requestId = 'esse';
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'accusamus';
    $request->utilizationReportId = 'veritatis';

    $requestSecurity = new VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesUtilizationReportsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsSourcesUtilizationReportsList

Lists Utilization Reports of the given Source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'aliquid';
    $request->filter = 'quasi';
    $request->key = 'saepe';
    $request->oauthToken = 'vel';
    $request->orderBy = 'harum';
    $request->pageSize = 473221;
    $request->pageToken = 'rerum';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'eligendi';
    $request->view = VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum::UTILIZATION_REPORT_VIEW_UNSPECIFIED;

    $requestSecurity = new VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsSourcesUtilizationReportsList($request, $requestSecurity);

    if ($response->listUtilizationReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsTargetProjectsCreate

Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsTargetProjectsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetProjectInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsTargetProjectsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsTargetProjectsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetProjectInput = new TargetProjectInput();
    $request->targetProjectInput->description = 'tempore';
    $request->targetProjectInput->project = 'adipisci';
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'minus';
    $request->key = 'quaerat';
    $request->oauthToken = 'sapiente';
    $request->parent = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->requestId = 'blanditiis';
    $request->targetProjectId = 'provident';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new VmmigrationProjectsLocationsTargetProjectsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsTargetProjectsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsTargetProjectsDelete

Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsTargetProjectsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsTargetProjectsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsTargetProjectsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'a';
    $request->fields = 'error';
    $request->key = 'sint';
    $request->name = 'Rufus Crona';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->requestId = 'consequuntur';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'similique';

    $requestSecurity = new VmmigrationProjectsLocationsTargetProjectsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsTargetProjectsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsTargetProjectsGet

Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsTargetProjectsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsTargetProjectsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsTargetProjectsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsTargetProjectsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'earum';
    $request->key = 'vel';
    $request->name = 'Charlotte Rempel';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquam';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'dicta';
    $request->view = VmmigrationProjectsLocationsTargetProjectsGetViewEnum::BASIC;

    $requestSecurity = new VmmigrationProjectsLocationsTargetProjectsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsTargetProjectsGet($request, $requestSecurity);

    if ($response->targetProject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsTargetProjectsList

Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsTargetProjectsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsTargetProjectsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsTargetProjectsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aut';
    $request->fields = 'voluptatum';
    $request->filter = 'qui';
    $request->key = 'quibusdam';
    $request->oauthToken = 'ex';
    $request->orderBy = 'deleniti';
    $request->pageSize = 929292;
    $request->pageToken = 'dolorum';
    $request->parent = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new VmmigrationProjectsLocationsTargetProjectsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsTargetProjectsList($request, $requestSecurity);

    if ($response->listTargetProjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmmigrationProjectsLocationsTargetProjectsPatch

Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsTargetProjectsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetProjectInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VmmigrationProjectsLocationsTargetProjectsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmmigrationProjectsLocationsTargetProjectsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetProjectInput = new TargetProjectInput();
    $request->targetProjectInput->description = 'et';
    $request->targetProjectInput->project = 'voluptate';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veritatis';
    $request->fields = 'consectetur';
    $request->key = 'adipisci';
    $request->name = 'Lionel Bartoletti IV';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->requestId = 'ab';
    $request->updateMask = 'corrupti';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'voluptatem';

    $requestSecurity = new VmmigrationProjectsLocationsTargetProjectsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vmmigrationProjectsLocationsTargetProjectsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
