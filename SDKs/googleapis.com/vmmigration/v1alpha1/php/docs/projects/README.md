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
    $request->sourceInput->error = new Status();
    $request->sourceInput->error->code = 778346;
    $request->sourceInput->error->details = [
        [
            'ipsam' => 'id',
            'possimus' => 'aut',
            'quasi' => 'error',
            'temporibus' => 'laborum',
        ],
    ];
    $request->sourceInput->error->message = 'quasi';
    $request->sourceInput->labels = [
        'voluptatibus' => 'vero',
        'nihil' => 'praesentium',
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
    ];
    $request->sourceInput->vmware = new VmwareSourceDetails();
    $request->sourceInput->vmware->password = 'cum';
    $request->sourceInput->vmware->thumbprint = 'perferendis';
    $request->sourceInput->vmware->username = 'Alison97';
    $request->sourceInput->vmware->vcenterIp = 'dicta';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->fields = 'dicta';
    $request->key = 'harum';
    $request->oauthToken = 'enim';
    $request->parent = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->requestId = 'repudiandae';
    $request->sourceId = 'quae';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quidem';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->datacenterConnectorInput = new DatacenterConnectorInput();
    $request->datacenterConnectorInput->availableVersions = new AvailableUpdates();
    $request->datacenterConnectorInput->availableVersions->inPlaceUpdate = new ApplianceVersion();
    $request->datacenterConnectorInput->availableVersions->inPlaceUpdate->critical = false;
    $request->datacenterConnectorInput->availableVersions->inPlaceUpdate->releaseNotesUri = 'excepturi';
    $request->datacenterConnectorInput->availableVersions->inPlaceUpdate->uri = 'https://famous-leptocephalus.name';
    $request->datacenterConnectorInput->availableVersions->inPlaceUpdate->version = 'voluptates';
    $request->datacenterConnectorInput->availableVersions->newDeployableAppliance = new ApplianceVersion();
    $request->datacenterConnectorInput->availableVersions->newDeployableAppliance->critical = false;
    $request->datacenterConnectorInput->availableVersions->newDeployableAppliance->releaseNotesUri = 'quasi';
    $request->datacenterConnectorInput->availableVersions->newDeployableAppliance->uri = 'https://novel-binoculars.org';
    $request->datacenterConnectorInput->availableVersions->newDeployableAppliance->version = 'incidunt';
    $request->datacenterConnectorInput->error = new Status();
    $request->datacenterConnectorInput->error->code = 318569;
    $request->datacenterConnectorInput->error->details = [
        [
            'quibusdam' => 'explicabo',
            'deserunt' => 'distinctio',
            'quibusdam' => 'labore',
        ],
    ];
    $request->datacenterConnectorInput->error->message = 'modi';
    $request->datacenterConnectorInput->registrationId = 'qui';
    $request->datacenterConnectorInput->serviceAccount = 'aliquid';
    $request->datacenterConnectorInput->upgradeStatus = new UpgradeStatus();
    $request->datacenterConnectorInput->upgradeStatus->error = new Status();
    $request->datacenterConnectorInput->upgradeStatus->error->code = 586513;
    $request->datacenterConnectorInput->upgradeStatus->error->details = [
        [
            'magni' => 'assumenda',
        ],
        [
            'alias' => 'fugit',
            'dolorum' => 'excepturi',
        ],
        [
            'facilis' => 'tempore',
            'labore' => 'delectus',
        ],
    ];
    $request->datacenterConnectorInput->upgradeStatus->error->message = 'eum';
    $request->datacenterConnectorInput->upgradeStatus->previousVersion = 'non';
    $request->datacenterConnectorInput->upgradeStatus->startTime = 'eligendi';
    $request->datacenterConnectorInput->upgradeStatus->state = UpgradeStatusStateEnum::FAILED;
    $request->datacenterConnectorInput->upgradeStatus->version = 'aliquid';
    $request->datacenterConnectorInput->version = 'provident';
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officia';
    $request->datacenterConnectorId = 'dolor';
    $request->fields = 'debitis';
    $request->key = 'a';
    $request->oauthToken = 'dolorum';
    $request->parent = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->requestId = 'illum';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'rerum';

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
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facere';
    $request->fields = 'ea';
    $request->filter = 'aliquid';
    $request->key = 'laborum';
    $request->oauthToken = 'accusamus';
    $request->orderBy = 'non';
    $request->pageSize = 581273;
    $request->pageToken = 'enim';
    $request->parent = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'provident';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->upgradeApplianceRequest = new UpgradeApplianceRequest();
    $request->upgradeApplianceRequest->requestId = 'id';
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sapiente';
    $request->datacenterConnector = 'amet';
    $request->fields = 'deserunt';
    $request->key = 'nisi';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'molestiae';

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
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'distinctio';
    $request->fields = 'id';
    $request->forceRefresh = false;
    $request->key = 'labore';
    $request->oauthToken = 'labore';
    $request->pageSize = 383462;
    $request->pageToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->source = 'eum';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'aspernatur';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'ullam';
    $request->filter = 'provident';
    $request->key = 'quos';
    $request->oauthToken = 'sint';
    $request->orderBy = 'accusantium';
    $request->pageSize = 653201;
    $request->pageToken = 'reiciendis';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'dolor';

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
use \OpenAPI\OpenAPI\Models\Shared\TargetVMDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\TargetVMDetailsDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetVMDetailsLicenseTypeEnum;
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
        'nemo',
    ];
    $request->cloneJobInput->computeEngineTargetDetails->appliedLicense = new AppliedLicense();
    $request->cloneJobInput->computeEngineTargetDetails->appliedLicense->osLicense = 'quasi';
    $request->cloneJobInput->computeEngineTargetDetails->appliedLicense->type = AppliedLicenseTypeEnum::NONE;
    $request->cloneJobInput->computeEngineTargetDetails->bootOption = ComputeEngineTargetDetailsBootOptionEnum::COMPUTE_ENGINE_BOOT_OPTION_BIOS;
    $request->cloneJobInput->computeEngineTargetDetails->computeScheduling = new ComputeScheduling();
    $request->cloneJobInput->computeEngineTargetDetails->computeScheduling->automaticRestart = false;
    $request->cloneJobInput->computeEngineTargetDetails->computeScheduling->minNodeCpus = 891924;
    $request->cloneJobInput->computeEngineTargetDetails->computeScheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->cloneJobInput->computeEngineTargetDetails->computeScheduling->onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->cloneJobInput->computeEngineTargetDetails->computeScheduling->restartType = ComputeSchedulingRestartTypeEnum::AUTOMATIC_RESTART;
    $request->cloneJobInput->computeEngineTargetDetails->diskType = ComputeEngineTargetDetailsDiskTypeEnum::COMPUTE_ENGINE_DISK_TYPE_SSD;
    $request->cloneJobInput->computeEngineTargetDetails->hostname = 'ironclad-bowler.com';
    $request->cloneJobInput->computeEngineTargetDetails->labels = [
        'ullam' => 'expedita',
        'nihil' => 'repellat',
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
    ];
    $request->cloneJobInput->computeEngineTargetDetails->licenseType = ComputeEngineTargetDetailsLicenseTypeEnum::COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT;
    $request->cloneJobInput->computeEngineTargetDetails->machineType = 'consequuntur';
    $request->cloneJobInput->computeEngineTargetDetails->machineTypeSeries = 'praesentium';
    $request->cloneJobInput->computeEngineTargetDetails->metadata = [
        'magni' => 'sunt',
        'quo' => 'illum',
        'pariatur' => 'maxime',
    ];
    $request->cloneJobInput->computeEngineTargetDetails->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->cloneJobInput->computeEngineTargetDetails->networkTags = [
        'odit',
        'ea',
        'accusantium',
    ];
    $request->cloneJobInput->computeEngineTargetDetails->project = 'ab';
    $request->cloneJobInput->computeEngineTargetDetails->secureBoot = false;
    $request->cloneJobInput->computeEngineTargetDetails->serviceAccount = 'maiores';
    $request->cloneJobInput->computeEngineTargetDetails->vmName = 'quidem';
    $request->cloneJobInput->computeEngineTargetDetails->zone = 'ipsam';
    $request->cloneJobInput->computeEngineVmDetails = new TargetVMDetailsInput();
    $request->cloneJobInput->computeEngineVmDetails->appliedLicense = new AppliedLicense();
    $request->cloneJobInput->computeEngineVmDetails->appliedLicense->osLicense = 'voluptate';
    $request->cloneJobInput->computeEngineVmDetails->appliedLicense->type = AppliedLicenseTypeEnum::NONE;
    $request->cloneJobInput->computeEngineVmDetails->computeScheduling = new ComputeScheduling();
    $request->cloneJobInput->computeEngineVmDetails->computeScheduling->automaticRestart = false;
    $request->cloneJobInput->computeEngineVmDetails->computeScheduling->minNodeCpus = 722056;
    $request->cloneJobInput->computeEngineVmDetails->computeScheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
    ];
    $request->cloneJobInput->computeEngineVmDetails->computeScheduling->onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->cloneJobInput->computeEngineVmDetails->computeScheduling->restartType = ComputeSchedulingRestartTypeEnum::AUTOMATIC_RESTART;
    $request->cloneJobInput->computeEngineVmDetails->diskType = TargetVMDetailsDiskTypeEnum::SSD;
    $request->cloneJobInput->computeEngineVmDetails->externalIp = 'perferendis';
    $request->cloneJobInput->computeEngineVmDetails->internalIp = 'fugiat';
    $request->cloneJobInput->computeEngineVmDetails->labels = [
        'aut' => 'cumque',
    ];
    $request->cloneJobInput->computeEngineVmDetails->licenseType = TargetVMDetailsLicenseTypeEnum::PAYG;
    $request->cloneJobInput->computeEngineVmDetails->machineType = 'hic';
    $request->cloneJobInput->computeEngineVmDetails->machineTypeSeries = 'libero';
    $request->cloneJobInput->computeEngineVmDetails->metadata = [
        'dolores' => 'quis',
        'totam' => 'dignissimos',
        'eaque' => 'quis',
    ];
    $request->cloneJobInput->computeEngineVmDetails->name = 'Ruby Auer';
    $request->cloneJobInput->computeEngineVmDetails->network = 'quam';
    $request->cloneJobInput->computeEngineVmDetails->networkInterfaces = [
        new NetworkInterface(),
    ];
    $request->cloneJobInput->computeEngineVmDetails->networkTags = [
        'nostrum',
        'hic',
        'recusandae',
        'omnis',
    ];
    $request->cloneJobInput->computeEngineVmDetails->secureBoot = false;
    $request->cloneJobInput->computeEngineVmDetails->serviceAccount = 'facilis';
    $request->cloneJobInput->computeEngineVmDetails->subnetwork = 'perspiciatis';
    $request->cloneJobInput->computeEngineVmDetails->targetProject = 'voluptatem';
    $request->cloneJobInput->computeEngineVmDetails->zone = 'porro';
    $request->cloneJobInput->error = new Status();
    $request->cloneJobInput->error->code = 164694;
    $request->cloneJobInput->error->details = [
        [
            'eaque' => 'occaecati',
            'rerum' => 'adipisci',
            'asperiores' => 'earum',
        ],
        [
            'iste' => 'dolorum',
            'deleniti' => 'pariatur',
        ],
        [
            'nobis' => 'libero',
            'delectus' => 'quaerat',
            'quos' => 'aliquid',
        ],
    ];
    $request->cloneJobInput->error->message = 'dolorem';
    $request->cloneJobInput->targetDetails = new TargetVMDetailsInput();
    $request->cloneJobInput->targetDetails->appliedLicense = new AppliedLicense();
    $request->cloneJobInput->targetDetails->appliedLicense->osLicense = 'dolorem';
    $request->cloneJobInput->targetDetails->appliedLicense->type = AppliedLicenseTypeEnum::TYPE_UNSPECIFIED;
    $request->cloneJobInput->targetDetails->computeScheduling = new ComputeScheduling();
    $request->cloneJobInput->targetDetails->computeScheduling->automaticRestart = false;
    $request->cloneJobInput->targetDetails->computeScheduling->minNodeCpus = 186193;
    $request->cloneJobInput->targetDetails->computeScheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
    ];
    $request->cloneJobInput->targetDetails->computeScheduling->onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->cloneJobInput->targetDetails->computeScheduling->restartType = ComputeSchedulingRestartTypeEnum::AUTOMATIC_RESTART;
    $request->cloneJobInput->targetDetails->diskType = TargetVMDetailsDiskTypeEnum::BALANCED;
    $request->cloneJobInput->targetDetails->externalIp = 'voluptate';
    $request->cloneJobInput->targetDetails->internalIp = 'dignissimos';
    $request->cloneJobInput->targetDetails->labels = [
        'amet' => 'dolorum',
        'numquam' => 'veritatis',
        'ipsa' => 'ipsa',
        'iure' => 'odio',
    ];
    $request->cloneJobInput->targetDetails->licenseType = TargetVMDetailsLicenseTypeEnum::DEFAULT;
    $request->cloneJobInput->targetDetails->machineType = 'accusamus';
    $request->cloneJobInput->targetDetails->machineTypeSeries = 'quidem';
    $request->cloneJobInput->targetDetails->metadata = [
        'voluptas' => 'natus',
        'eos' => 'atque',
        'sit' => 'fugiat',
        'ab' => 'soluta',
    ];
    $request->cloneJobInput->targetDetails->name = 'Ted Kling';
    $request->cloneJobInput->targetDetails->network = 'omnis';
    $request->cloneJobInput->targetDetails->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->cloneJobInput->targetDetails->networkTags = [
        'asperiores',
        'nihil',
        'ipsum',
    ];
    $request->cloneJobInput->targetDetails->secureBoot = false;
    $request->cloneJobInput->targetDetails->serviceAccount = 'voluptate';
    $request->cloneJobInput->targetDetails->subnetwork = 'id';
    $request->cloneJobInput->targetDetails->targetProject = 'saepe';
    $request->cloneJobInput->targetDetails->zone = 'eius';
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'amet';
    $request->cloneJobId = 'optio';
    $request->fields = 'accusamus';
    $request->key = 'ad';
    $request->oauthToken = 'saepe';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->requestId = 'provident';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'repellendus';

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
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'quaerat';
    $request->filter = 'tempora';
    $request->key = 'vel';
    $request->oauthToken = 'quod';
    $request->orderBy = 'officiis';
    $request->pageSize = 185636;
    $request->pageToken = 'dolorum';
    $request->parent = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'iusto';

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
use \OpenAPI\OpenAPI\Models\Shared\TargetVMDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\TargetVMDetailsDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetVMDetailsLicenseTypeEnum;
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->migratingVmInput = new MigratingVmInput();
    $request->migratingVmInput->awsSourceVmDetails = new AwsSourceVmDetails();
    $request->migratingVmInput->awsSourceVmDetails->committedStorageBytes = 'quisquam';
    $request->migratingVmInput->awsSourceVmDetails->firmware = AwsSourceVmDetailsFirmwareEnum::BIOS;
    $request->migratingVmInput->computeEngineTargetDefaults = new ComputeEngineTargetDefaultsInput();
    $request->migratingVmInput->computeEngineTargetDefaults->additionalLicenses = [
        'tempore',
    ];
    $request->migratingVmInput->computeEngineTargetDefaults->appliedLicense = new AppliedLicense();
    $request->migratingVmInput->computeEngineTargetDefaults->appliedLicense->osLicense = 'accusamus';
    $request->migratingVmInput->computeEngineTargetDefaults->appliedLicense->type = AppliedLicenseTypeEnum::NONE;
    $request->migratingVmInput->computeEngineTargetDefaults->computeScheduling = new ComputeScheduling();
    $request->migratingVmInput->computeEngineTargetDefaults->computeScheduling->automaticRestart = false;
    $request->migratingVmInput->computeEngineTargetDefaults->computeScheduling->minNodeCpus = 313692;
    $request->migratingVmInput->computeEngineTargetDefaults->computeScheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
    ];
    $request->migratingVmInput->computeEngineTargetDefaults->computeScheduling->onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->migratingVmInput->computeEngineTargetDefaults->computeScheduling->restartType = ComputeSchedulingRestartTypeEnum::AUTOMATIC_RESTART;
    $request->migratingVmInput->computeEngineTargetDefaults->diskType = ComputeEngineTargetDefaultsDiskTypeEnum::COMPUTE_ENGINE_DISK_TYPE_STANDARD;
    $request->migratingVmInput->computeEngineTargetDefaults->hostname = 'alienated-quality.biz';
    $request->migratingVmInput->computeEngineTargetDefaults->labels = [
        'vel' => 'libero',
    ];
    $request->migratingVmInput->computeEngineTargetDefaults->licenseType = ComputeEngineTargetDefaultsLicenseTypeEnum::COMPUTE_ENGINE_LICENSE_TYPE_PAYG;
    $request->migratingVmInput->computeEngineTargetDefaults->machineType = 'deserunt';
    $request->migratingVmInput->computeEngineTargetDefaults->machineTypeSeries = 'quam';
    $request->migratingVmInput->computeEngineTargetDefaults->metadata = [
        'incidunt' => 'qui',
    ];
    $request->migratingVmInput->computeEngineTargetDefaults->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->migratingVmInput->computeEngineTargetDefaults->networkTags = [
        'pariatur',
        'soluta',
        'dicta',
        'laborum',
    ];
    $request->migratingVmInput->computeEngineTargetDefaults->secureBoot = false;
    $request->migratingVmInput->computeEngineTargetDefaults->serviceAccount = 'totam';
    $request->migratingVmInput->computeEngineTargetDefaults->targetProject = 'incidunt';
    $request->migratingVmInput->computeEngineTargetDefaults->vmName = 'aspernatur';
    $request->migratingVmInput->computeEngineTargetDefaults->zone = 'dolores';
    $request->migratingVmInput->computeEngineVmDefaults = new TargetVMDetailsInput();
    $request->migratingVmInput->computeEngineVmDefaults->appliedLicense = new AppliedLicense();
    $request->migratingVmInput->computeEngineVmDefaults->appliedLicense->osLicense = 'distinctio';
    $request->migratingVmInput->computeEngineVmDefaults->appliedLicense->type = AppliedLicenseTypeEnum::PAYG;
    $request->migratingVmInput->computeEngineVmDefaults->computeScheduling = new ComputeScheduling();
    $request->migratingVmInput->computeEngineVmDefaults->computeScheduling->automaticRestart = false;
    $request->migratingVmInput->computeEngineVmDefaults->computeScheduling->minNodeCpus = 396060;
    $request->migratingVmInput->computeEngineVmDefaults->computeScheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->migratingVmInput->computeEngineVmDefaults->computeScheduling->onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum::TERMINATE;
    $request->migratingVmInput->computeEngineVmDefaults->computeScheduling->restartType = ComputeSchedulingRestartTypeEnum::NO_AUTOMATIC_RESTART;
    $request->migratingVmInput->computeEngineVmDefaults->diskType = TargetVMDetailsDiskTypeEnum::DISK_TYPE_UNSPECIFIED;
    $request->migratingVmInput->computeEngineVmDefaults->externalIp = 'neque';
    $request->migratingVmInput->computeEngineVmDefaults->internalIp = 'fugit';
    $request->migratingVmInput->computeEngineVmDefaults->labels = [
        'odio' => 'sunt',
    ];
    $request->migratingVmInput->computeEngineVmDefaults->licenseType = TargetVMDetailsLicenseTypeEnum::PAYG;
    $request->migratingVmInput->computeEngineVmDefaults->machineType = 'nam';
    $request->migratingVmInput->computeEngineVmDefaults->machineTypeSeries = 'hic';
    $request->migratingVmInput->computeEngineVmDefaults->metadata = [
        'cumque' => 'soluta',
    ];
    $request->migratingVmInput->computeEngineVmDefaults->name = 'Carl Turner DDS';
    $request->migratingVmInput->computeEngineVmDefaults->network = 'quos';
    $request->migratingVmInput->computeEngineVmDefaults->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->migratingVmInput->computeEngineVmDefaults->networkTags = [
        'aperiam',
        'delectus',
        'dolorem',
    ];
    $request->migratingVmInput->computeEngineVmDefaults->secureBoot = false;
    $request->migratingVmInput->computeEngineVmDefaults->serviceAccount = 'dolore';
    $request->migratingVmInput->computeEngineVmDefaults->subnetwork = 'labore';
    $request->migratingVmInput->computeEngineVmDefaults->targetProject = 'adipisci';
    $request->migratingVmInput->computeEngineVmDefaults->zone = 'dolorum';
    $request->migratingVmInput->currentSyncInfo = new ReplicationCycleInput();
    $request->migratingVmInput->currentSyncInfo->cycleNumber = 100294;
    $request->migratingVmInput->currentSyncInfo->endTime = 'quae';
    $request->migratingVmInput->currentSyncInfo->error = new Status();
    $request->migratingVmInput->currentSyncInfo->error->code = 16429;
    $request->migratingVmInput->currentSyncInfo->error->details = [
        [
            'consequatur' => 'est',
            'repellendus' => 'porro',
            'doloribus' => 'ut',
            'facilis' => 'cupiditate',
        ],
        [
            'quae' => 'laudantium',
        ],
        [
            'occaecati' => 'voluptatibus',
            'quisquam' => 'vero',
        ],
    ];
    $request->migratingVmInput->currentSyncInfo->error->message = 'omnis';
    $request->migratingVmInput->currentSyncInfo->name = 'Tiffany Willms';
    $request->migratingVmInput->currentSyncInfo->progress = 878870;
    $request->migratingVmInput->currentSyncInfo->progressPercent = 949319;
    $request->migratingVmInput->currentSyncInfo->startTime = 'dignissimos';
    $request->migratingVmInput->currentSyncInfo->state = ReplicationCycleStateEnum::SUCCEEDED;
    $request->migratingVmInput->currentSyncInfo->steps = [
        new CycleStep(),
        new CycleStep(),
        new CycleStep(),
    ];
    $request->migratingVmInput->currentSyncInfo->totalPauseDuration = 'quod';
    $request->migratingVmInput->description = 'odio';
    $request->migratingVmInput->displayName = 'similique';
    $request->migratingVmInput->error = new Status();
    $request->migratingVmInput->error->code = 708548;
    $request->migratingVmInput->error->details = [
        [
            'dolore' => 'quibusdam',
            'illum' => 'sequi',
        ],
        [
            'impedit' => 'aut',
            'voluptatibus' => 'exercitationem',
            'nulla' => 'fugit',
        ],
        [
            'maiores' => 'doloribus',
            'iusto' => 'eligendi',
            'ducimus' => 'alias',
            'officia' => 'tempora',
        ],
        [
            'ea' => 'aspernatur',
            'vel' => 'possimus',
        ],
    ];
    $request->migratingVmInput->error->message = 'magnam';
    $request->migratingVmInput->labels = [
        'ex' => 'laudantium',
    ];
    $request->migratingVmInput->lastReplicationCycle = new ReplicationCycleInput();
    $request->migratingVmInput->lastReplicationCycle->cycleNumber = 120657;
    $request->migratingVmInput->lastReplicationCycle->endTime = 'dolor';
    $request->migratingVmInput->lastReplicationCycle->error = new Status();
    $request->migratingVmInput->lastReplicationCycle->error->code = 980700;
    $request->migratingVmInput->lastReplicationCycle->error->details = [
        [
            'nulla' => 'excepturi',
            'voluptatibus' => 'nostrum',
        ],
    ];
    $request->migratingVmInput->lastReplicationCycle->error->message = 'sapiente';
    $request->migratingVmInput->lastReplicationCycle->name = 'Elbert Jenkins';
    $request->migratingVmInput->lastReplicationCycle->progress = 333145;
    $request->migratingVmInput->lastReplicationCycle->progressPercent = 399499;
    $request->migratingVmInput->lastReplicationCycle->startTime = 'inventore';
    $request->migratingVmInput->lastReplicationCycle->state = ReplicationCycleStateEnum::RUNNING;
    $request->migratingVmInput->lastReplicationCycle->steps = [
        new CycleStep(),
        new CycleStep(),
    ];
    $request->migratingVmInput->lastReplicationCycle->totalPauseDuration = 'quo';
    $request->migratingVmInput->lastSync = new ReplicationSync();
    $request->migratingVmInput->lastSync->lastSyncTime = 'consectetur';
    $request->migratingVmInput->policy = new SchedulePolicy();
    $request->migratingVmInput->policy->idleDuration = 'recusandae';
    $request->migratingVmInput->policy->skipOsAdaptation = false;
    $request->migratingVmInput->sourceVmId = 'aspernatur';
    $request->migratingVmInput->targetDefaults = new TargetVMDetailsInput();
    $request->migratingVmInput->targetDefaults->appliedLicense = new AppliedLicense();
    $request->migratingVmInput->targetDefaults->appliedLicense->osLicense = 'minima';
    $request->migratingVmInput->targetDefaults->appliedLicense->type = AppliedLicenseTypeEnum::TYPE_UNSPECIFIED;
    $request->migratingVmInput->targetDefaults->computeScheduling = new ComputeScheduling();
    $request->migratingVmInput->targetDefaults->computeScheduling->automaticRestart = false;
    $request->migratingVmInput->targetDefaults->computeScheduling->minNodeCpus = 952871;
    $request->migratingVmInput->targetDefaults->computeScheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->migratingVmInput->targetDefaults->computeScheduling->onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum::ON_HOST_MAINTENANCE_UNSPECIFIED;
    $request->migratingVmInput->targetDefaults->computeScheduling->restartType = ComputeSchedulingRestartTypeEnum::RESTART_TYPE_UNSPECIFIED;
    $request->migratingVmInput->targetDefaults->diskType = TargetVMDetailsDiskTypeEnum::BALANCED;
    $request->migratingVmInput->targetDefaults->externalIp = 'impedit';
    $request->migratingVmInput->targetDefaults->internalIp = 'aliquam';
    $request->migratingVmInput->targetDefaults->labels = [
        'accusamus' => 'inventore',
    ];
    $request->migratingVmInput->targetDefaults->licenseType = TargetVMDetailsLicenseTypeEnum::DEFAULT;
    $request->migratingVmInput->targetDefaults->machineType = 'et';
    $request->migratingVmInput->targetDefaults->machineTypeSeries = 'dolorum';
    $request->migratingVmInput->targetDefaults->metadata = [
        'placeat' => 'velit',
        'eum' => 'autem',
        'nobis' => 'quas',
    ];
    $request->migratingVmInput->targetDefaults->name = 'Drew Hoeger I';
    $request->migratingVmInput->targetDefaults->network = 'numquam';
    $request->migratingVmInput->targetDefaults->networkInterfaces = [
        new NetworkInterface(),
    ];
    $request->migratingVmInput->targetDefaults->networkTags = [
        'ipsa',
        'molestiae',
        'magnam',
    ];
    $request->migratingVmInput->targetDefaults->secureBoot = false;
    $request->migratingVmInput->targetDefaults->serviceAccount = 'odio';
    $request->migratingVmInput->targetDefaults->subnetwork = 'eius';
    $request->migratingVmInput->targetDefaults->targetProject = 'esse';
    $request->migratingVmInput->targetDefaults->zone = 'esse';
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'reprehenderit';
    $request->fields = 'quidem';
    $request->key = 'fugiat';
    $request->migratingVmId = 'ut';
    $request->oauthToken = 'eum';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->requestId = 'eos';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'quisquam';

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
        'id' => 'quidem',
    ];
    $request->accessToken = 'neque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->fields = 'quo';
    $request->key = 'fuga';
    $request->name = 'Ms. Ruby Hintz II';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'sequi';

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
use \OpenAPI\OpenAPI\Models\Shared\TargetVMDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\TargetVMDetailsDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetVMDetailsLicenseTypeEnum;
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
        'recusandae',
        'aperiam',
    ];
    $request->cutoverJobInput->computeEngineTargetDetails->appliedLicense = new AppliedLicense();
    $request->cutoverJobInput->computeEngineTargetDetails->appliedLicense->osLicense = 'distinctio';
    $request->cutoverJobInput->computeEngineTargetDetails->appliedLicense->type = AppliedLicenseTypeEnum::BYOL;
    $request->cutoverJobInput->computeEngineTargetDetails->bootOption = ComputeEngineTargetDetailsBootOptionEnum::COMPUTE_ENGINE_BOOT_OPTION_EFI;
    $request->cutoverJobInput->computeEngineTargetDetails->computeScheduling = new ComputeScheduling();
    $request->cutoverJobInput->computeEngineTargetDetails->computeScheduling->automaticRestart = false;
    $request->cutoverJobInput->computeEngineTargetDetails->computeScheduling->minNodeCpus = 76956;
    $request->cutoverJobInput->computeEngineTargetDetails->computeScheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->cutoverJobInput->computeEngineTargetDetails->computeScheduling->onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum::TERMINATE;
    $request->cutoverJobInput->computeEngineTargetDetails->computeScheduling->restartType = ComputeSchedulingRestartTypeEnum::NO_AUTOMATIC_RESTART;
    $request->cutoverJobInput->computeEngineTargetDetails->diskType = ComputeEngineTargetDetailsDiskTypeEnum::COMPUTE_ENGINE_DISK_TYPE_STANDARD;
    $request->cutoverJobInput->computeEngineTargetDetails->hostname = 'likely-mortality.info';
    $request->cutoverJobInput->computeEngineTargetDetails->labels = [
        'dolores' => 'deserunt',
        'molestiae' => 'accusantium',
        'porro' => 'eum',
        'quas' => 'praesentium',
    ];
    $request->cutoverJobInput->computeEngineTargetDetails->licenseType = ComputeEngineTargetDetailsLicenseTypeEnum::COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT;
    $request->cutoverJobInput->computeEngineTargetDetails->machineType = 'deleniti';
    $request->cutoverJobInput->computeEngineTargetDetails->machineTypeSeries = 'fugit';
    $request->cutoverJobInput->computeEngineTargetDetails->metadata = [
        'mollitia' => 'incidunt',
        'atque' => 'explicabo',
        'minima' => 'nisi',
    ];
    $request->cutoverJobInput->computeEngineTargetDetails->networkInterfaces = [
        new NetworkInterface(),
    ];
    $request->cutoverJobInput->computeEngineTargetDetails->networkTags = [
        'consequuntur',
        'ratione',
        'explicabo',
        'saepe',
    ];
    $request->cutoverJobInput->computeEngineTargetDetails->project = 'occaecati';
    $request->cutoverJobInput->computeEngineTargetDetails->secureBoot = false;
    $request->cutoverJobInput->computeEngineTargetDetails->serviceAccount = 'atque';
    $request->cutoverJobInput->computeEngineTargetDetails->vmName = 'et';
    $request->cutoverJobInput->computeEngineTargetDetails->zone = 'esse';
    $request->cutoverJobInput->computeEngineVmDetails = new TargetVMDetailsInput();
    $request->cutoverJobInput->computeEngineVmDetails->appliedLicense = new AppliedLicense();
    $request->cutoverJobInput->computeEngineVmDetails->appliedLicense->osLicense = 'eveniet';
    $request->cutoverJobInput->computeEngineVmDetails->appliedLicense->type = AppliedLicenseTypeEnum::BYOL;
    $request->cutoverJobInput->computeEngineVmDetails->computeScheduling = new ComputeScheduling();
    $request->cutoverJobInput->computeEngineVmDetails->computeScheduling->automaticRestart = false;
    $request->cutoverJobInput->computeEngineVmDetails->computeScheduling->minNodeCpus = 82971;
    $request->cutoverJobInput->computeEngineVmDetails->computeScheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->cutoverJobInput->computeEngineVmDetails->computeScheduling->onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->cutoverJobInput->computeEngineVmDetails->computeScheduling->restartType = ComputeSchedulingRestartTypeEnum::NO_AUTOMATIC_RESTART;
    $request->cutoverJobInput->computeEngineVmDetails->diskType = TargetVMDetailsDiskTypeEnum::SSD;
    $request->cutoverJobInput->computeEngineVmDetails->externalIp = 'aliquid';
    $request->cutoverJobInput->computeEngineVmDetails->internalIp = 'quasi';
    $request->cutoverJobInput->computeEngineVmDetails->labels = [
        'vel' => 'harum',
        'molestiae' => 'rerum',
        'occaecati' => 'minima',
        'distinctio' => 'eligendi',
    ];
    $request->cutoverJobInput->computeEngineVmDetails->licenseType = TargetVMDetailsLicenseTypeEnum::DEFAULT;
    $request->cutoverJobInput->computeEngineVmDetails->machineType = 'culpa';
    $request->cutoverJobInput->computeEngineVmDetails->machineTypeSeries = 'tempore';
    $request->cutoverJobInput->computeEngineVmDetails->metadata = [
        'cumque' => 'consequuntur',
    ];
    $request->cutoverJobInput->computeEngineVmDetails->name = 'Sadie Hackett';
    $request->cutoverJobInput->computeEngineVmDetails->network = 'esse';
    $request->cutoverJobInput->computeEngineVmDetails->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->cutoverJobInput->computeEngineVmDetails->networkTags = [
        'a',
        'nulla',
        'quas',
    ];
    $request->cutoverJobInput->computeEngineVmDetails->secureBoot = false;
    $request->cutoverJobInput->computeEngineVmDetails->serviceAccount = 'esse';
    $request->cutoverJobInput->computeEngineVmDetails->subnetwork = 'quasi';
    $request->cutoverJobInput->computeEngineVmDetails->targetProject = 'a';
    $request->cutoverJobInput->computeEngineVmDetails->zone = 'error';
    $request->cutoverJobInput->error = new Status();
    $request->cutoverJobInput->error->code = 575751;
    $request->cutoverJobInput->error->details = [
        [
            'quia' => 'eveniet',
            'asperiores' => 'facere',
            'veritatis' => 'consequuntur',
            'quasi' => 'similique',
        ],
        [
            'aliquid' => 'tenetur',
            'quae' => 'earum',
            'vel' => 'in',
        ],
        [
            'libero' => 'illum',
            'soluta' => 'accusantium',
        ],
        [
            'sapiente' => 'dicta',
            'ullam' => 'reprehenderit',
        ],
    ];
    $request->cutoverJobInput->error->message = 'ullam';
    $request->cutoverJobInput->targetDetails = new TargetVMDetailsInput();
    $request->cutoverJobInput->targetDetails->appliedLicense = new AppliedLicense();
    $request->cutoverJobInput->targetDetails->appliedLicense->osLicense = 'nisi';
    $request->cutoverJobInput->targetDetails->appliedLicense->type = AppliedLicenseTypeEnum::TYPE_UNSPECIFIED;
    $request->cutoverJobInput->targetDetails->computeScheduling = new ComputeScheduling();
    $request->cutoverJobInput->targetDetails->computeScheduling->automaticRestart = false;
    $request->cutoverJobInput->targetDetails->computeScheduling->minNodeCpus = 531849;
    $request->cutoverJobInput->targetDetails->computeScheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
    ];
    $request->cutoverJobInput->targetDetails->computeScheduling->onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->cutoverJobInput->targetDetails->computeScheduling->restartType = ComputeSchedulingRestartTypeEnum::AUTOMATIC_RESTART;
    $request->cutoverJobInput->targetDetails->diskType = TargetVMDetailsDiskTypeEnum::BALANCED;
    $request->cutoverJobInput->targetDetails->externalIp = 'itaque';
    $request->cutoverJobInput->targetDetails->internalIp = 'dolorum';
    $request->cutoverJobInput->targetDetails->labels = [
        'omnis' => 'tenetur',
    ];
    $request->cutoverJobInput->targetDetails->licenseType = TargetVMDetailsLicenseTypeEnum::DEFAULT;
    $request->cutoverJobInput->targetDetails->machineType = 'at';
    $request->cutoverJobInput->targetDetails->machineTypeSeries = 'et';
    $request->cutoverJobInput->targetDetails->metadata = [
        'ipsa' => 'minima',
        'veritatis' => 'consectetur',
    ];
    $request->cutoverJobInput->targetDetails->name = 'Ms. Cora Spencer IV';
    $request->cutoverJobInput->targetDetails->network = 'eum';
    $request->cutoverJobInput->targetDetails->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->cutoverJobInput->targetDetails->networkTags = [
        'corrupti',
    ];
    $request->cutoverJobInput->targetDetails->secureBoot = false;
    $request->cutoverJobInput->targetDetails->serviceAccount = 'non';
    $request->cutoverJobInput->targetDetails->subnetwork = 'voluptatem';
    $request->cutoverJobInput->targetDetails->targetProject = 'dolor';
    $request->cutoverJobInput->targetDetails->zone = 'occaecati';
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->cutoverJobId = 'voluptas';
    $request->fields = 'aut';
    $request->key = 'dignissimos';
    $request->oauthToken = 'dicta';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->requestId = 'velit';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'voluptas';

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
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quaerat';
    $request->fields = 'consequuntur';
    $request->filter = 'repellendus';
    $request->key = 'officia';
    $request->oauthToken = 'maxime';
    $request->orderBy = 'dignissimos';
    $request->pageSize = 640024;
    $request->pageToken = 'asperiores';
    $request->parent = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'porro';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'ab' => 'adipisci',
        'fuga' => 'id',
    ];
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->fields = 'est';
    $request->key = 'recusandae';
    $request->migratingVm = 'totam';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'quos';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facilis';
    $request->fields = 'cum';
    $request->filter = 'commodi';
    $request->key = 'in';
    $request->oauthToken = 'corporis';
    $request->orderBy = 'reiciendis';
    $request->pageSize = 828657;
    $request->pageToken = 'nemo';
    $request->parent = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'cum';
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'earum' => 'facere',
        'numquam' => 'doloribus',
    ];
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'saepe';
    $request->key = 'necessitatibus';
    $request->migratingVm = 'dolore';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'non';

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
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'a';
    $request->fields = 'debitis';
    $request->filter = 'consectetur';
    $request->key = 'corporis';
    $request->oauthToken = 'harum';
    $request->orderBy = 'laboriosam';
    $request->pageSize = 58356;
    $request->pageToken = 'voluptates';
    $request->parent = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'vitae';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'similique';

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
        'voluptas' => 'voluptas',
    ];
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->fields = 'dolorum';
    $request->key = 'adipisci';
    $request->migratingVm = 'minus';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'dolore';

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
        'temporibus' => 'ullam',
        'adipisci' => 'cum',
        'blanditiis' => 'quas',
        'hic' => 'nesciunt',
    ];
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->fields = 'totam';
    $request->key = 'hic';
    $request->migratingVm = 'exercitationem';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'sed';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->utilizationReportInput = new UtilizationReportInput();
    $request->utilizationReportInput->displayName = 'explicabo';
    $request->utilizationReportInput->error = new Status();
    $request->utilizationReportInput->error->code = 994401;
    $request->utilizationReportInput->error->details = [
        [
            'expedita' => 'ab',
            'iste' => 'dolore',
        ],
        [
            'sed' => 'in',
            'commodi' => 'quidem',
            'explicabo' => 'voluptas',
        ],
        [
            'architecto' => 'suscipit',
            'sapiente' => 'debitis',
            'illo' => 'reiciendis',
        ],
    ];
    $request->utilizationReportInput->error->message = 'perferendis';
    $request->utilizationReportInput->timeFrame = UtilizationReportTimeFrameEnum::MONTH;
    $request->utilizationReportInput->vms = [
        new VmUtilizationInfoInput(),
        new VmUtilizationInfoInput(),
        new VmUtilizationInfoInput(),
        new VmUtilizationInfoInput(),
    ];
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'provident';
    $request->fields = 'eius';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'ipsum';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->requestId = 'quos';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'tempora';
    $request->utilizationReportId = 'tempora';

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
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->fields = 'non';
    $request->filter = 'officiis';
    $request->key = 'praesentium';
    $request->oauthToken = 'facilis';
    $request->orderBy = 'quaerat';
    $request->pageSize = 277773;
    $request->pageToken = 'ipsam';
    $request->parent = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'nobis';
    $request->view = VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum::BASIC;

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetProjectInput = new TargetProjectInput();
    $request->targetProjectInput->description = 'minima';
    $request->targetProjectInput->project = 'recusandae';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magni';
    $request->fields = 'aperiam';
    $request->key = 'saepe';
    $request->oauthToken = 'numquam';
    $request->parent = 'veniam';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->requestId = 'officiis';
    $request->targetProjectId = 'beatae';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'exercitationem';

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
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->fields = 'voluptatum';
    $request->key = 'error';
    $request->name = 'Rudolph Trantow';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->requestId = 'dolorum';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'accusamus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ut';
    $request->fields = 'fugiat';
    $request->key = 'voluptatem';
    $request->name = 'Ms. Rudolph Gusikowski';
    $request->oauthToken = 'sit';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatum';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'repudiandae';
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
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'sit';
    $request->filter = 'vel';
    $request->key = 'nostrum';
    $request->oauthToken = 'saepe';
    $request->orderBy = 'error';
    $request->pageSize = 8511;
    $request->pageToken = 'incidunt';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'dicta';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetProjectInput = new TargetProjectInput();
    $request->targetProjectInput->description = 'occaecati';
    $request->targetProjectInput->project = 'labore';
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'nam';
    $request->key = 'tenetur';
    $request->name = 'Patricia Farrell';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->requestId = 'provident';
    $request->updateMask = 'repellendus';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'voluptates';

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
