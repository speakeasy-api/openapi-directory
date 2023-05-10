# projects

### Available Operations

* [notebooksProjectsLocationsEnvironmentsCreate](#notebooksprojectslocationsenvironmentscreate) - Creates a new Environment.
* [notebooksProjectsLocationsEnvironmentsList](#notebooksprojectslocationsenvironmentslist) - Lists environments in a project.
* [notebooksProjectsLocationsExecutionsCreate](#notebooksprojectslocationsexecutionscreate) - Creates a new Execution in a given project and location.
* [notebooksProjectsLocationsExecutionsList](#notebooksprojectslocationsexecutionslist) - Lists executions in a given project and location
* [notebooksProjectsLocationsInstancesCreate](#notebooksprojectslocationsinstancescreate) - Creates a new Instance in a given project and location.
* [notebooksProjectsLocationsInstancesGetInstanceHealth](#notebooksprojectslocationsinstancesgetinstancehealth) - Check if a notebook instance is healthy.
* [notebooksProjectsLocationsInstancesIsUpgradeable](#notebooksprojectslocationsinstancesisupgradeable) - Check if a notebook instance is upgradable.
* [notebooksProjectsLocationsInstancesList](#notebooksprojectslocationsinstanceslist) - Lists instances in a given project and location.
* [notebooksProjectsLocationsInstancesRegister](#notebooksprojectslocationsinstancesregister) - Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.
* [notebooksProjectsLocationsInstancesReport](#notebooksprojectslocationsinstancesreport) - Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.
* [notebooksProjectsLocationsInstancesRollback](#notebooksprojectslocationsinstancesrollback) - Rollbacks a notebook instance to the previous version.
* [notebooksProjectsLocationsInstancesSetAccelerator](#notebooksprojectslocationsinstancessetaccelerator) - Updates the guest accelerators of a single Instance.
* [notebooksProjectsLocationsInstancesSetLabels](#notebooksprojectslocationsinstancessetlabels) - Replaces all the labels of an Instance.
* [notebooksProjectsLocationsInstancesSetMachineType](#notebooksprojectslocationsinstancessetmachinetype) - Updates the machine type of a single Instance.
* [notebooksProjectsLocationsInstancesUpdateConfig](#notebooksprojectslocationsinstancesupdateconfig) - Update Notebook Instance configurations.
* [notebooksProjectsLocationsInstancesUpdateMetadataItems](#notebooksprojectslocationsinstancesupdatemetadataitems) - Add/update metadata items for an instance.
* [notebooksProjectsLocationsInstancesUpdateShieldedInstanceConfig](#notebooksprojectslocationsinstancesupdateshieldedinstanceconfig) - Updates the Shielded instance configuration of a single Instance.
* [notebooksProjectsLocationsInstancesUpgradeInternal](#notebooksprojectslocationsinstancesupgradeinternal) - Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.
* [notebooksProjectsLocationsList](#notebooksprojectslocationslist) - Lists information about the supported locations for this service.
* [notebooksProjectsLocationsOperationsCancel](#notebooksprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [notebooksProjectsLocationsOperationsList](#notebooksprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [notebooksProjectsLocationsRuntimesCreate](#notebooksprojectslocationsruntimescreate) - Creates a new Runtime in a given project and location.
* [notebooksProjectsLocationsRuntimesDiagnose](#notebooksprojectslocationsruntimesdiagnose) - Creates a Diagnostic File and runs Diagnostic Tool given a Runtime.
* [notebooksProjectsLocationsRuntimesGetIamPolicy](#notebooksprojectslocationsruntimesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [notebooksProjectsLocationsRuntimesList](#notebooksprojectslocationsruntimeslist) - Lists Runtimes in a given project and location.
* [notebooksProjectsLocationsRuntimesPatch](#notebooksprojectslocationsruntimespatch) - Update Notebook Runtime configuration.
* [notebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternal](#notebooksprojectslocationsruntimesrefreshruntimetokeninternal) - Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance.
* [notebooksProjectsLocationsRuntimesReportEvent](#notebooksprojectslocationsruntimesreportevent) - Report and process a runtime event.
* [notebooksProjectsLocationsRuntimesReset](#notebooksprojectslocationsruntimesreset) - Resets a Managed Notebook Runtime.
* [notebooksProjectsLocationsRuntimesSetIamPolicy](#notebooksprojectslocationsruntimessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [notebooksProjectsLocationsRuntimesStart](#notebooksprojectslocationsruntimesstart) - Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
* [notebooksProjectsLocationsRuntimesStop](#notebooksprojectslocationsruntimesstop) - Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
* [notebooksProjectsLocationsRuntimesSwitch](#notebooksprojectslocationsruntimesswitch) - Switch a Managed Notebook Runtime.
* [notebooksProjectsLocationsRuntimesTestIamPermissions](#notebooksprojectslocationsruntimestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [notebooksProjectsLocationsRuntimesUpgrade](#notebooksprojectslocationsruntimesupgrade) - Upgrades a Managed Notebook Runtime to the latest version.
* [notebooksProjectsLocationsSchedulesCreate](#notebooksprojectslocationsschedulescreate) - Creates a new Scheduled Notebook in a given project and location.
* [notebooksProjectsLocationsSchedulesDelete](#notebooksprojectslocationsschedulesdelete) - Deletes schedule and all underlying jobs
* [notebooksProjectsLocationsSchedulesGet](#notebooksprojectslocationsschedulesget) - Gets details of schedule
* [notebooksProjectsLocationsSchedulesList](#notebooksprojectslocationsscheduleslist) - Lists schedules in a given project and location.
* [notebooksProjectsLocationsSchedulesTrigger](#notebooksprojectslocationsschedulestrigger) - Triggers execution of an existing schedule.

## notebooksProjectsLocationsEnvironmentsCreate

Creates a new Environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsEnvironmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentInput;
use \OpenAPI\OpenAPI\Models\Shared\ContainerImage;
use \OpenAPI\OpenAPI\Models\Shared\VmImage;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsEnvironmentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsEnvironmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->environmentInput = new EnvironmentInput();
    $request->environmentInput->containerImage = new ContainerImage();
    $request->environmentInput->containerImage->repository = 'placeat';
    $request->environmentInput->containerImage->tag = 'voluptatum';
    $request->environmentInput->description = 'iusto';
    $request->environmentInput->displayName = 'excepturi';
    $request->environmentInput->postStartupScript = 'nisi';
    $request->environmentInput->vmImage = new VmImage();
    $request->environmentInput->vmImage->imageFamily = 'recusandae';
    $request->environmentInput->vmImage->imageName = 'temporibus';
    $request->environmentInput->vmImage->project = 'ab';
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->environmentId = 'perferendis';
    $request->fields = 'ipsam';
    $request->key = 'repellendus';
    $request->oauthToken = 'sapiente';
    $request->parent = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'at';

    $requestSecurity = new NotebooksProjectsLocationsEnvironmentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsEnvironmentsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsEnvironmentsList

Lists environments in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsEnvironmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsEnvironmentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsEnvironmentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'esse';
    $request->key = 'totam';
    $request->oauthToken = 'porro';
    $request->pageSize = 678880;
    $request->pageToken = 'dicta';
    $request->parent = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new NotebooksProjectsLocationsEnvironmentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsEnvironmentsList($request, $requestSecurity);

    if ($response->listEnvironmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsExecutionsCreate

Creates a new Execution in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsExecutionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionInput;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionTemplate;
use \OpenAPI\OpenAPI\Models\Shared\SchedulerAcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\SchedulerAcceleratorConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataprocParameters;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionTemplateJobTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionTemplateScaleTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\VertexAIParameters;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsExecutionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsExecutionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->executionInput = new ExecutionInput();
    $request->executionInput->description = 'hic';
    $request->executionInput->executionTemplate = new ExecutionTemplate();
    $request->executionInput->executionTemplate->acceleratorConfig = new SchedulerAcceleratorConfig();
    $request->executionInput->executionTemplate->acceleratorConfig->coreCount = 'optio';
    $request->executionInput->executionTemplate->acceleratorConfig->type = SchedulerAcceleratorConfigTypeEnum::NVIDIA_TESLA_P4;
    $request->executionInput->executionTemplate->containerImageUri = 'beatae';
    $request->executionInput->executionTemplate->dataprocParameters = new DataprocParameters();
    $request->executionInput->executionTemplate->dataprocParameters->cluster = 'commodi';
    $request->executionInput->executionTemplate->inputNotebookFile = 'molestiae';
    $request->executionInput->executionTemplate->jobType = ExecutionTemplateJobTypeEnum::JOB_TYPE_UNSPECIFIED;
    $request->executionInput->executionTemplate->kernelSpec = 'qui';
    $request->executionInput->executionTemplate->labels = [
        'cum' => 'esse',
        'ipsum' => 'excepturi',
        'aspernatur' => 'perferendis',
        'ad' => 'natus',
    ];
    $request->executionInput->executionTemplate->masterType = 'sed';
    $request->executionInput->executionTemplate->outputNotebookFolder = 'iste';
    $request->executionInput->executionTemplate->parameters = 'dolor';
    $request->executionInput->executionTemplate->paramsYamlFile = 'natus';
    $request->executionInput->executionTemplate->scaleTier = ExecutionTemplateScaleTierEnum::STANDARD1;
    $request->executionInput->executionTemplate->serviceAccount = 'hic';
    $request->executionInput->executionTemplate->tensorboard = 'saepe';
    $request->executionInput->executionTemplate->vertexAiParameters = new VertexAIParameters();
    $request->executionInput->executionTemplate->vertexAiParameters->env = [
        'in' => 'corporis',
        'iste' => 'iure',
        'saepe' => 'quidem',
    ];
    $request->executionInput->executionTemplate->vertexAiParameters->network = 'architecto';
    $request->executionInput->outputNotebookFile = 'ipsa';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->executionId = 'laborum';
    $request->fields = 'dolores';
    $request->key = 'dolorem';
    $request->oauthToken = 'corporis';
    $request->parent = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new NotebooksProjectsLocationsExecutionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsExecutionsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsExecutionsList

Lists executions in a given project and location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsExecutionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsExecutionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsExecutionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'iure';
    $request->filter = 'culpa';
    $request->key = 'doloribus';
    $request->oauthToken = 'sapiente';
    $request->orderBy = 'architecto';
    $request->pageSize = 652790;
    $request->pageToken = 'dolorem';
    $request->parent = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new NotebooksProjectsLocationsExecutionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsExecutionsList($request, $requestSecurity);

    if ($response->listExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsInstancesCreate

Creates a new Instance in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceBootDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContainerImage;
use \OpenAPI\OpenAPI\Models\Shared\InstanceDataDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceDiskEncryptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceNicTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeHistoryEntry;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeHistoryEntryActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeHistoryEntryStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmImage;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsInstancesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceInput = new InstanceInput();
    $request->instanceInput->acceleratorConfig = new AcceleratorConfig();
    $request->instanceInput->acceleratorConfig->coreCount = 'numquam';
    $request->instanceInput->acceleratorConfig->type = AcceleratorConfigTypeEnum::NVIDIA_TESLA_P4;
    $request->instanceInput->bootDiskSizeGb = 'quam';
    $request->instanceInput->bootDiskType = InstanceBootDiskTypeEnum::PD_SSD;
    $request->instanceInput->canIpForward = false;
    $request->instanceInput->containerImage = new ContainerImage();
    $request->instanceInput->containerImage->repository = 'velit';
    $request->instanceInput->containerImage->tag = 'error';
    $request->instanceInput->customGpuDriverPath = 'quia';
    $request->instanceInput->dataDiskSizeGb = 'quis';
    $request->instanceInput->dataDiskType = InstanceDataDiskTypeEnum::DISK_TYPE_UNSPECIFIED;
    $request->instanceInput->diskEncryption = InstanceDiskEncryptionEnum::CMEK;
    $request->instanceInput->installGpuDriver = false;
    $request->instanceInput->instanceOwners = [
        'enim',
        'odit',
        'quo',
    ];
    $request->instanceInput->kmsKey = 'sequi';
    $request->instanceInput->labels = [
        'ipsam' => 'id',
        'possimus' => 'aut',
        'quasi' => 'error',
        'temporibus' => 'laborum',
    ];
    $request->instanceInput->machineType = 'quasi';
    $request->instanceInput->metadata = [
        'voluptatibus' => 'vero',
        'nihil' => 'praesentium',
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
    ];
    $request->instanceInput->network = 'cum';
    $request->instanceInput->nicType = InstanceNicTypeEnum::UNSPECIFIED_NIC_TYPE;
    $request->instanceInput->noProxyAccess = false;
    $request->instanceInput->noPublicIp = false;
    $request->instanceInput->noRemoveDataDisk = false;
    $request->instanceInput->postStartupScript = 'doloremque';
    $request->instanceInput->reservationAffinity = new ReservationAffinity();
    $request->instanceInput->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::NO_RESERVATION;
    $request->instanceInput->reservationAffinity->key = 'ut';
    $request->instanceInput->reservationAffinity->values = [
        'dicta',
        'corporis',
        'dolore',
        'iusto',
    ];
    $request->instanceInput->serviceAccount = 'dicta';
    $request->instanceInput->serviceAccountScopes = [
        'enim',
        'accusamus',
        'commodi',
    ];
    $request->instanceInput->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->instanceInput->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->instanceInput->shieldedInstanceConfig->enableSecureBoot = false;
    $request->instanceInput->shieldedInstanceConfig->enableVtpm = false;
    $request->instanceInput->subnet = 'repudiandae';
    $request->instanceInput->tags = [
        'ipsum',
    ];
    $request->instanceInput->upgradeHistory = [
        new UpgradeHistoryEntry(),
        new UpgradeHistoryEntry(),
        new UpgradeHistoryEntry(),
    ];
    $request->instanceInput->vmImage = new VmImage();
    $request->instanceInput->vmImage->imageFamily = 'molestias';
    $request->instanceInput->vmImage->imageName = 'excepturi';
    $request->instanceInput->vmImage->project = 'pariatur';
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'voluptates';
    $request->instanceId = 'quasi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'sint';
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new NotebooksProjectsLocationsInstancesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsInstancesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsInstancesGetInstanceHealth

Check if a notebook instance is healthy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesGetInstanceHealthRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesGetInstanceHealthSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsInstancesGetInstanceHealthRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'deserunt';
    $request->key = 'distinctio';
    $request->name = 'Francisco Gleason';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new NotebooksProjectsLocationsInstancesGetInstanceHealthSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsInstancesGetInstanceHealth($request, $requestSecurity);

    if ($response->getInstanceHealthResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsInstancesIsUpgradeable

Check if a notebook instance is upgradable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesIsUpgradeableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesIsUpgradeableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsInstancesIsUpgradeableRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'dolorum';
    $request->key = 'excepturi';
    $request->notebookInstance = 'tempora';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->type = NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum::UPGRADE_FRAMEWORK;
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new NotebooksProjectsLocationsInstancesIsUpgradeableSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsInstancesIsUpgradeable($request, $requestSecurity);

    if ($response->isInstanceUpgradeableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsInstancesList

Lists instances in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsInstancesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'provident';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'sint';
    $request->pageSize = 638921;
    $request->pageToken = 'dolor';
    $request->parent = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'in';

    $requestSecurity = new NotebooksProjectsLocationsInstancesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsInstancesList($request, $requestSecurity);

    if ($response->listInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsInstancesRegister

Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesRegisterRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegisterInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesRegisterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsInstancesRegisterRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->registerInstanceRequest = new RegisterInstanceRequest();
    $request->registerInstanceRequest->instanceId = 'illum';
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'magnam';
    $request->key = 'cumque';
    $request->oauthToken = 'facere';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new NotebooksProjectsLocationsInstancesRegisterSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsInstancesRegister($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsInstancesReport

Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportInstanceInfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesReportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsInstancesReportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->reportInstanceInfoRequest = new ReportInstanceInfoRequest();
    $request->reportInstanceInfoRequest->metadata = [
        'enim' => 'accusamus',
        'delectus' => 'quidem',
        'provident' => 'nam',
    ];
    $request->reportInstanceInfoRequest->vmId = 'id';
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sapiente';
    $request->fields = 'amet';
    $request->key = 'deserunt';
    $request->name = 'Wilma Mosciski';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new NotebooksProjectsLocationsInstancesReportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsInstancesReport($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsInstancesRollback

Rollbacks a notebook instance to the previous version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesRollbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RollbackInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesRollbackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsInstancesRollbackRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->rollbackInstanceRequest = new RollbackInstanceRequest();
    $request->rollbackInstanceRequest->targetSnapshot = 'labore';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'nobis';
    $request->key = 'eum';
    $request->name = 'Brandon Brakus V';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new NotebooksProjectsLocationsInstancesRollbackSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsInstancesRollback($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsInstancesSetAccelerator

Updates the guest accelerators of a single Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesSetAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetInstanceAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetInstanceAcceleratorRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesSetAcceleratorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsInstancesSetAcceleratorRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setInstanceAcceleratorRequest = new SetInstanceAcceleratorRequest();
    $request->setInstanceAcceleratorRequest->coreCount = 'mollitia';
    $request->setInstanceAcceleratorRequest->type = SetInstanceAcceleratorRequestTypeEnum::TPU_V3;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->fields = 'dolor';
    $request->key = 'necessitatibus';
    $request->name = 'Vivian Boyle';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new NotebooksProjectsLocationsInstancesSetAcceleratorSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsInstancesSetAccelerator($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsInstancesSetLabels

Replaces all the labels of an Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetInstanceLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesSetLabelsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsInstancesSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setInstanceLabelsRequest = new SetInstanceLabelsRequest();
    $request->setInstanceLabelsRequest->labels = [
        'architecto' => 'architecto',
        'repudiandae' => 'ullam',
    ];
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellat';
    $request->fields = 'quibusdam';
    $request->key = 'sed';
    $request->name = 'Al Bashirian';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new NotebooksProjectsLocationsInstancesSetLabelsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsInstancesSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsInstancesSetMachineType

Updates the machine type of a single Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesSetMachineTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetInstanceMachineTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesSetMachineTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsInstancesSetMachineTypeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setInstanceMachineTypeRequest = new SetInstanceMachineTypeRequest();
    $request->setInstanceMachineTypeRequest->machineType = 'pariatur';
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'odit';
    $request->key = 'ea';
    $request->name = 'Virginia Wunsch';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'autem';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'eaque';

    $requestSecurity = new NotebooksProjectsLocationsInstancesSetMachineTypeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsInstancesSetMachineType($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsInstancesUpdateConfig

Update Notebook Instance configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesUpdateConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateInstanceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesUpdateConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsInstancesUpdateConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->updateInstanceConfigRequest = new UpdateInstanceConfigRequest();
    $request->updateInstanceConfigRequest->config = new InstanceConfig();
    $request->updateInstanceConfigRequest->config->enableHealthMonitoring = false;
    $request->updateInstanceConfigRequest->config->notebookUpgradeSchedule = 'nemo';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'amet';
    $request->key = 'aut';
    $request->name = 'Lewis Welch';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new NotebooksProjectsLocationsInstancesUpdateConfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsInstancesUpdateConfig($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsInstancesUpdateMetadataItems

Add/update metadata items for an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateInstanceMetadataItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->updateInstanceMetadataItemsRequest = new UpdateInstanceMetadataItemsRequest();
    $request->updateInstanceMetadataItemsRequest->items = [
        'nesciunt' => 'eos',
        'perferendis' => 'dolores',
    ];
    $request->accessToken = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'vero';
    $request->key = 'nostrum';
    $request->name = 'Percy Mohr';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsInstancesUpdateMetadataItems($request, $requestSecurity);

    if ($response->updateInstanceMetadataItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsInstancesUpdateShieldedInstanceConfig

Updates the Shielded instance configuration of a single Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateShieldedInstanceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->updateShieldedInstanceConfigRequest = new UpdateShieldedInstanceConfigRequest();
    $request->updateShieldedInstanceConfigRequest->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->updateShieldedInstanceConfigRequest->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->updateShieldedInstanceConfigRequest->shieldedInstanceConfig->enableSecureBoot = false;
    $request->updateShieldedInstanceConfigRequest->shieldedInstanceConfig->enableVtpm = false;
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rerum';
    $request->fields = 'adipisci';
    $request->key = 'asperiores';
    $request->name = 'Edwin Morar';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsInstancesUpdateShieldedInstanceConfig($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsInstancesUpgradeInternal

Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesUpgradeInternalRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeInstanceInternalRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeInstanceInternalRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsInstancesUpgradeInternalSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsInstancesUpgradeInternalRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->upgradeInstanceInternalRequest = new UpgradeInstanceInternalRequest();
    $request->upgradeInstanceInternalRequest->type = UpgradeInstanceInternalRequestTypeEnum::UPGRADE_FRAMEWORK;
    $request->upgradeInstanceInternalRequest->vmId = 'quos';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'dolor';
    $request->key = 'qui';
    $request->name = 'Mindy Marks';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new NotebooksProjectsLocationsInstancesUpgradeInternalSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsInstancesUpgradeInternal($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'iure';
    $request->filter = 'odio';
    $request->key = 'quaerat';
    $request->name = 'Rickey Wolf';
    $request->oauthToken = 'eos';
    $request->pageSize = 542499;
    $request->pageToken = 'sit';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new NotebooksProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'voluptate' => 'dolorum',
        'deleniti' => 'omnis',
    ];
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'asperiores';
    $request->fields = 'nihil';
    $request->key = 'ipsum';
    $request->name = 'Alberta Ullrich';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new NotebooksProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'provident';
    $request->filter = 'minima';
    $request->key = 'repellendus';
    $request->name = 'Donnie Abbott';
    $request->oauthToken = 'tempora';
    $request->pageSize = 425451;
    $request->pageToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new NotebooksProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsRuntimesCreate

Creates a new Runtime in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeInput;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeAccessConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeAccessConfigAccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeSoftwareConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\ContainerImage;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeSoftwareConfigPostStartupScriptBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineInput;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeAcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeAcceleratorConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalDiskInput;
use \OpenAPI\OpenAPI\Models\Shared\LocalDiskInitializeParams;
use \OpenAPI\OpenAPI\Models\Shared\LocalDiskInitializeParamsDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineConfigNicTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsRuntimesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->runtimeInput = new RuntimeInput();
    $request->runtimeInput->accessConfig = new RuntimeAccessConfigInput();
    $request->runtimeInput->accessConfig->accessType = RuntimeAccessConfigAccessTypeEnum::SINGLE_USER;
    $request->runtimeInput->accessConfig->runtimeOwner = 'harum';
    $request->runtimeInput->labels = [
        'ipsum' => 'quisquam',
        'tenetur' => 'amet',
    ];
    $request->runtimeInput->softwareConfig = new RuntimeSoftwareConfigInput();
    $request->runtimeInput->softwareConfig->customGpuDriverPath = 'tempore';
    $request->runtimeInput->softwareConfig->disableTerminal = false;
    $request->runtimeInput->softwareConfig->enableHealthMonitoring = false;
    $request->runtimeInput->softwareConfig->idleShutdown = false;
    $request->runtimeInput->softwareConfig->idleShutdownTimeout = 880298;
    $request->runtimeInput->softwareConfig->installGpuDriver = false;
    $request->runtimeInput->softwareConfig->kernels = [
        new ContainerImage(),
        new ContainerImage(),
    ];
    $request->runtimeInput->softwareConfig->mixerDisabled = false;
    $request->runtimeInput->softwareConfig->notebookUpgradeSchedule = 'enim';
    $request->runtimeInput->softwareConfig->postStartupScript = 'dolorem';
    $request->runtimeInput->softwareConfig->postStartupScriptBehavior = RuntimeSoftwareConfigPostStartupScriptBehaviorEnum::DOWNLOAD_AND_RUN_EVERY_START;
    $request->runtimeInput->virtualMachine = new VirtualMachineInput();
    $request->runtimeInput->virtualMachine->virtualMachineConfig = new VirtualMachineConfigInput();
    $request->runtimeInput->virtualMachine->virtualMachineConfig->acceleratorConfig = new RuntimeAcceleratorConfig();
    $request->runtimeInput->virtualMachine->virtualMachineConfig->acceleratorConfig->coreCount = 'totam';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->acceleratorConfig->type = RuntimeAcceleratorConfigTypeEnum::NVIDIA_TESLA_T4;
    $request->runtimeInput->virtualMachine->virtualMachineConfig->bootImage = [
        'expedita' => 'neque',
    ];
    $request->runtimeInput->virtualMachine->virtualMachineConfig->containerImages = [
        new ContainerImage(),
    ];
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk = new LocalDiskInput();
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->initializeParams = new LocalDiskInitializeParams();
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->initializeParams->description = 'vel';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->initializeParams->diskName = 'libero';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->initializeParams->diskSizeGb = 'voluptas';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->initializeParams->diskType = LocalDiskInitializeParamsDiskTypeEnum::PD_BALANCED;
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->initializeParams->labels = [
        'ipsum' => 'incidunt',
        'qui' => 'cupiditate',
    ];
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->interface = 'maxime';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->mode = 'pariatur';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->source = 'soluta';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->type = 'dicta';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->encryptionConfig = new EncryptionConfig();
    $request->runtimeInput->virtualMachine->virtualMachineConfig->encryptionConfig->kmsKey = 'laborum';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->internalIpOnly = false;
    $request->runtimeInput->virtualMachine->virtualMachineConfig->labels = [
        'incidunt' => 'aspernatur',
        'dolores' => 'distinctio',
        'facilis' => 'aliquid',
    ];
    $request->runtimeInput->virtualMachine->virtualMachineConfig->machineType = 'quam';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->metadata = [
        'temporibus' => 'qui',
        'neque' => 'fugit',
        'magni' => 'odio',
    ];
    $request->runtimeInput->virtualMachine->virtualMachineConfig->network = 'sunt';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->nicType = VirtualMachineConfigNicTypeEnum::VIRTIO_NET;
    $request->runtimeInput->virtualMachine->virtualMachineConfig->reservedIpRange = 'nam';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->shieldedInstanceConfig = new RuntimeShieldedInstanceConfig();
    $request->runtimeInput->virtualMachine->virtualMachineConfig->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->runtimeInput->virtualMachine->virtualMachineConfig->shieldedInstanceConfig->enableSecureBoot = false;
    $request->runtimeInput->virtualMachine->virtualMachineConfig->shieldedInstanceConfig->enableVtpm = false;
    $request->runtimeInput->virtualMachine->virtualMachineConfig->subnet = 'hic';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->tags = [
        'cumque',
    ];
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'et';
    $request->fields = 'saepe';
    $request->key = 'ipsum';
    $request->oauthToken = 'veritatis';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->requestId = 'tempore';
    $request->runtimeId = 'cupiditate';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new NotebooksProjectsLocationsRuntimesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsRuntimesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsRuntimesDiagnose

Creates a Diagnostic File and runs Diagnostic Tool given a Runtime.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesDiagnoseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiagnoseRuntimeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DiagnosticConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesDiagnoseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsRuntimesDiagnoseRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->diagnoseRuntimeRequest = new DiagnoseRuntimeRequest();
    $request->diagnoseRuntimeRequest->diagnosticConfig = new DiagnosticConfig();
    $request->diagnoseRuntimeRequest->diagnosticConfig->copyHomeFilesFlagEnabled = false;
    $request->diagnoseRuntimeRequest->diagnosticConfig->gcsBucket = 'dolore';
    $request->diagnoseRuntimeRequest->diagnosticConfig->packetCaptureFlagEnabled = false;
    $request->diagnoseRuntimeRequest->diagnosticConfig->relativePath = 'labore';
    $request->diagnoseRuntimeRequest->diagnosticConfig->repairFlagEnabled = false;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'quae';
    $request->key = 'aut';
    $request->name = 'Percy Altenwerth';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new NotebooksProjectsLocationsRuntimesDiagnoseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsRuntimesDiagnose($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsRuntimesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsRuntimesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laudantium';
    $request->fields = 'odio';
    $request->key = 'occaecati';
    $request->oauthToken = 'voluptatibus';
    $request->optionsRequestedPolicyVersion = 787542;
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->resource = 'omnis';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new NotebooksProjectsLocationsRuntimesGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsRuntimesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsRuntimesList

Lists Runtimes in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsRuntimesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vero';
    $request->fields = 'tenetur';
    $request->key = 'dignissimos';
    $request->oauthToken = 'hic';
    $request->pageSize = 715561;
    $request->pageToken = 'quod';
    $request->parent = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'similique';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new NotebooksProjectsLocationsRuntimesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsRuntimesList($request, $requestSecurity);

    if ($response->listRuntimesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsRuntimesPatch

Update Notebook Runtime configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeInput;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeAccessConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeAccessConfigAccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeSoftwareConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\ContainerImage;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeSoftwareConfigPostStartupScriptBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineInput;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeAcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeAcceleratorConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalDiskInput;
use \OpenAPI\OpenAPI\Models\Shared\LocalDiskInitializeParams;
use \OpenAPI\OpenAPI\Models\Shared\LocalDiskInitializeParamsDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineConfigNicTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsRuntimesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runtimeInput = new RuntimeInput();
    $request->runtimeInput->accessConfig = new RuntimeAccessConfigInput();
    $request->runtimeInput->accessConfig->accessType = RuntimeAccessConfigAccessTypeEnum::RUNTIME_ACCESS_TYPE_UNSPECIFIED;
    $request->runtimeInput->accessConfig->runtimeOwner = 'quibusdam';
    $request->runtimeInput->labels = [
        'sequi' => 'natus',
        'impedit' => 'aut',
        'voluptatibus' => 'exercitationem',
        'nulla' => 'fugit',
    ];
    $request->runtimeInput->softwareConfig = new RuntimeSoftwareConfigInput();
    $request->runtimeInput->softwareConfig->customGpuDriverPath = 'porro';
    $request->runtimeInput->softwareConfig->disableTerminal = false;
    $request->runtimeInput->softwareConfig->enableHealthMonitoring = false;
    $request->runtimeInput->softwareConfig->idleShutdown = false;
    $request->runtimeInput->softwareConfig->idleShutdownTimeout = 981830;
    $request->runtimeInput->softwareConfig->installGpuDriver = false;
    $request->runtimeInput->softwareConfig->kernels = [
        new ContainerImage(),
        new ContainerImage(),
        new ContainerImage(),
        new ContainerImage(),
    ];
    $request->runtimeInput->softwareConfig->mixerDisabled = false;
    $request->runtimeInput->softwareConfig->notebookUpgradeSchedule = 'iusto';
    $request->runtimeInput->softwareConfig->postStartupScript = 'eligendi';
    $request->runtimeInput->softwareConfig->postStartupScriptBehavior = RuntimeSoftwareConfigPostStartupScriptBehaviorEnum::RUN_EVERY_START;
    $request->runtimeInput->virtualMachine = new VirtualMachineInput();
    $request->runtimeInput->virtualMachine->virtualMachineConfig = new VirtualMachineConfigInput();
    $request->runtimeInput->virtualMachine->virtualMachineConfig->acceleratorConfig = new RuntimeAcceleratorConfig();
    $request->runtimeInput->virtualMachine->virtualMachineConfig->acceleratorConfig->coreCount = 'alias';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->acceleratorConfig->type = RuntimeAcceleratorConfigTypeEnum::TPU_V2;
    $request->runtimeInput->virtualMachine->virtualMachineConfig->bootImage = [
        'ipsam' => 'ea',
        'aspernatur' => 'vel',
    ];
    $request->runtimeInput->virtualMachine->virtualMachineConfig->containerImages = [
        new ContainerImage(),
        new ContainerImage(),
        new ContainerImage(),
        new ContainerImage(),
    ];
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk = new LocalDiskInput();
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->initializeParams = new LocalDiskInitializeParams();
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->initializeParams->description = 'magnam';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->initializeParams->diskName = 'ratione';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->initializeParams->diskSizeGb = 'ex';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->initializeParams->diskType = LocalDiskInitializeParamsDiskTypeEnum::PD_SSD;
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->initializeParams->labels = [
        'dolor' => 'maiores',
    ];
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->interface = 'quasi';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->mode = 'ex';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->source = 'nulla';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->dataDisk->type = 'excepturi';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->encryptionConfig = new EncryptionConfig();
    $request->runtimeInput->virtualMachine->virtualMachineConfig->encryptionConfig->kmsKey = 'voluptatibus';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->internalIpOnly = false;
    $request->runtimeInput->virtualMachine->virtualMachineConfig->labels = [
        'sapiente' => 'quisquam',
        'saepe' => 'ea',
    ];
    $request->runtimeInput->virtualMachine->virtualMachineConfig->machineType = 'impedit';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->metadata = [
        'veniam' => 'aliquid',
        'inventore' => 'magnam',
    ];
    $request->runtimeInput->virtualMachine->virtualMachineConfig->network = 'ea';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->nicType = VirtualMachineConfigNicTypeEnum::GVNIC;
    $request->runtimeInput->virtualMachine->virtualMachineConfig->reservedIpRange = 'consectetur';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->shieldedInstanceConfig = new RuntimeShieldedInstanceConfig();
    $request->runtimeInput->virtualMachine->virtualMachineConfig->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->runtimeInput->virtualMachine->virtualMachineConfig->shieldedInstanceConfig->enableSecureBoot = false;
    $request->runtimeInput->virtualMachine->virtualMachineConfig->shieldedInstanceConfig->enableVtpm = false;
    $request->runtimeInput->virtualMachine->virtualMachineConfig->subnet = 'recusandae';
    $request->runtimeInput->virtualMachine->virtualMachineConfig->tags = [
        'minima',
    ];
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'aut';
    $request->key = 'aut';
    $request->name = 'Myron Haag';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->requestId = 'et';
    $request->updateMask = 'dolorum';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new NotebooksProjectsLocationsRuntimesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsRuntimesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternal

Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RefreshRuntimeTokenInternalRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->refreshRuntimeTokenInternalRequest = new RefreshRuntimeTokenInternalRequest();
    $request->refreshRuntimeTokenInternalRequest->vmId = 'eum';
    $request->accessToken = 'autem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quas';
    $request->fields = 'assumenda';
    $request->key = 'nulla';
    $request->name = 'Jeannette Boyer';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternal($request, $requestSecurity);

    if ($response->refreshRuntimeTokenInternalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsRuntimesReportEvent

Report and process a runtime event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesReportEventRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportRuntimeEventRequest;
use \OpenAPI\OpenAPI\Models\Shared\Event;
use \OpenAPI\OpenAPI\Models\Shared\EventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesReportEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsRuntimesReportEventRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->reportRuntimeEventRequest = new ReportRuntimeEventRequest();
    $request->reportRuntimeEventRequest->event = new Event();
    $request->reportRuntimeEventRequest->event->details = [
        'eius' => 'esse',
        'esse' => 'rem',
    ];
    $request->reportRuntimeEventRequest->event->reportTime = 'fuga';
    $request->reportRuntimeEventRequest->event->type = EventTypeEnum::HEARTBEAT;
    $request->reportRuntimeEventRequest->vmId = 'quidem';
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->fields = 'suscipit';
    $request->key = 'assumenda';
    $request->name = 'Mr. Irma Schaefer';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'neque';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new NotebooksProjectsLocationsRuntimesReportEventSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsRuntimesReportEvent($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsRuntimesReset

Resets a Managed Notebook Runtime.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesResetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResetRuntimeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesResetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsRuntimesResetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->resetRuntimeRequest = new ResetRuntimeRequest();
    $request->resetRuntimeRequest->requestId = 'fuga';
    $request->accessToken = 'eius';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptas';
    $request->fields = 'ab';
    $request->key = 'cupiditate';
    $request->name = 'Rhonda Toy';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new NotebooksProjectsLocationsRuntimesResetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsRuntimesReset($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsRuntimesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsRuntimesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'quod';
    $request->setIamPolicyRequest->policy->version = 490819;
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'accusamus';
    $request->key = 'aliquam';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->resource = 'commodi';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new NotebooksProjectsLocationsRuntimesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsRuntimesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsRuntimesStart

Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesStartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StartRuntimeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesStartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsRuntimesStartRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->startRuntimeRequest = new StartRuntimeRequest();
    $request->startRuntimeRequest->requestId = 'molestiae';
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'quas';
    $request->key = 'praesentium';
    $request->name = 'Cassandra Considine';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'atque';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new NotebooksProjectsLocationsRuntimesStartSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsRuntimesStart($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsRuntimesStop

Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StopRuntimeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesStopSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsRuntimesStopRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->stopRuntimeRequest = new StopRuntimeRequest();
    $request->stopRuntimeRequest->requestId = 'fugit';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ratione';
    $request->fields = 'explicabo';
    $request->key = 'saepe';
    $request->name = 'Ivan Bosco';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new NotebooksProjectsLocationsRuntimesStopSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsRuntimesStop($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsRuntimesSwitch

Switch a Managed Notebook Runtime.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesSwitchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SwitchRuntimeRequest;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeAcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeAcceleratorConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsRuntimesSwitchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->switchRuntimeRequest = new SwitchRuntimeRequest();
    $request->switchRuntimeRequest->acceleratorConfig = new RuntimeAcceleratorConfig();
    $request->switchRuntimeRequest->acceleratorConfig->coreCount = 'vero';
    $request->switchRuntimeRequest->acceleratorConfig->type = RuntimeAcceleratorConfigTypeEnum::NVIDIA_TESLA_P4;
    $request->switchRuntimeRequest->machineType = 'quasi';
    $request->switchRuntimeRequest->requestId = 'saepe';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'rerum';
    $request->key = 'occaecati';
    $request->name = 'Miss Verna Roob';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'consequatur';

    $requestSecurity = new NotebooksProjectsLocationsRuntimesSwitchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsRuntimesSwitch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsRuntimesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'sapiente',
        'consectetur',
    ];
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'a';
    $request->key = 'nulla';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->resource = 'quasi';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'error';

    $requestSecurity = new NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsRuntimesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsRuntimesUpgrade

Upgrades a Managed Notebook Runtime to the latest version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesUpgradeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeRuntimeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsRuntimesUpgradeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsRuntimesUpgradeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->upgradeRuntimeRequest = new UpgradeRuntimeRequest();
    $request->upgradeRuntimeRequest->requestId = 'pariatur';
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eveniet';
    $request->fields = 'asperiores';
    $request->key = 'facere';
    $request->name = 'Marilyn Botsford';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'earum';

    $requestSecurity = new NotebooksProjectsLocationsRuntimesUpgradeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsRuntimesUpgrade($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsSchedulesCreate

Creates a new Scheduled Notebook in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsSchedulesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleInput;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionTemplate;
use \OpenAPI\OpenAPI\Models\Shared\SchedulerAcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\SchedulerAcceleratorConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataprocParameters;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionTemplateJobTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionTemplateScaleTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\VertexAIParameters;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsSchedulesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsSchedulesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->scheduleInput = new ScheduleInput();
    $request->scheduleInput->cronSchedule = 'in';
    $request->scheduleInput->description = 'eius';
    $request->scheduleInput->executionTemplate = new ExecutionTemplate();
    $request->scheduleInput->executionTemplate->acceleratorConfig = new SchedulerAcceleratorConfig();
    $request->scheduleInput->executionTemplate->acceleratorConfig->coreCount = 'libero';
    $request->scheduleInput->executionTemplate->acceleratorConfig->type = SchedulerAcceleratorConfigTypeEnum::TPU_V2;
    $request->scheduleInput->executionTemplate->containerImageUri = 'soluta';
    $request->scheduleInput->executionTemplate->dataprocParameters = new DataprocParameters();
    $request->scheduleInput->executionTemplate->dataprocParameters->cluster = 'accusantium';
    $request->scheduleInput->executionTemplate->inputNotebookFile = 'aliquam';
    $request->scheduleInput->executionTemplate->jobType = ExecutionTemplateJobTypeEnum::DATAPROC;
    $request->scheduleInput->executionTemplate->kernelSpec = 'dicta';
    $request->scheduleInput->executionTemplate->labels = [
        'reprehenderit' => 'ullam',
        'nisi' => 'aut',
    ];
    $request->scheduleInput->executionTemplate->masterType = 'voluptatum';
    $request->scheduleInput->executionTemplate->outputNotebookFolder = 'qui';
    $request->scheduleInput->executionTemplate->parameters = 'quibusdam';
    $request->scheduleInput->executionTemplate->paramsYamlFile = 'ex';
    $request->scheduleInput->executionTemplate->scaleTier = ExecutionTemplateScaleTierEnum::PREMIUM1;
    $request->scheduleInput->executionTemplate->serviceAccount = 'itaque';
    $request->scheduleInput->executionTemplate->tensorboard = 'dolorum';
    $request->scheduleInput->executionTemplate->vertexAiParameters = new VertexAIParameters();
    $request->scheduleInput->executionTemplate->vertexAiParameters->env = [
        'omnis' => 'tenetur',
    ];
    $request->scheduleInput->executionTemplate->vertexAiParameters->network = 'quasi';
    $request->scheduleInput->state = ScheduleStateEnum::DELETING;
    $request->scheduleInput->timeZone = 'et';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minima';
    $request->fields = 'veritatis';
    $request->key = 'consectetur';
    $request->oauthToken = 'adipisci';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->scheduleId = 'accusantium';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new NotebooksProjectsLocationsSchedulesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsSchedulesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsSchedulesDelete

Deletes schedule and all underlying jobs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsSchedulesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsSchedulesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsSchedulesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ab';
    $request->fields = 'corrupti';
    $request->key = 'non';
    $request->name = 'Carmen McClure';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->requestId = 'aut';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new NotebooksProjectsLocationsSchedulesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsSchedulesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsSchedulesGet

Gets details of schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsSchedulesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsSchedulesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsSchedulesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatibus';
    $request->fields = 'voluptas';
    $request->key = 'asperiores';
    $request->name = 'Eileen Hagenes';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new NotebooksProjectsLocationsSchedulesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsSchedulesGet($request, $requestSecurity);

    if ($response->schedule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsSchedulesList

Lists schedules in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsSchedulesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsSchedulesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsSchedulesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quaerat';
    $request->fields = 'porro';
    $request->filter = 'quod';
    $request->key = 'labore';
    $request->oauthToken = 'ab';
    $request->orderBy = 'adipisci';
    $request->pageSize = 683573;
    $request->pageToken = 'id';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'est';

    $requestSecurity = new NotebooksProjectsLocationsSchedulesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsSchedulesList($request, $requestSecurity);

    if ($response->listSchedulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notebooksProjectsLocationsSchedulesTrigger

Triggers execution of an existing schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsSchedulesTriggerRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsSchedulesTriggerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsSchedulesTriggerRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'fugiat' => 'vel',
        'ducimus' => 'quos',
        'vel' => 'labore',
    ];
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'commodi';
    $request->key = 'in';
    $request->name = 'Lela Shields';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'consectetur';

    $requestSecurity = new NotebooksProjectsLocationsSchedulesTriggerSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsSchedulesTrigger($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
