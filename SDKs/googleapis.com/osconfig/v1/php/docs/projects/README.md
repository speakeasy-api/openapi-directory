# projects

### Available Operations

* [osconfigProjectsLocationsInstancesInventoriesList](#osconfigprojectslocationsinstancesinventorieslist) - List inventory data for all VM instances in the specified zone.
* [osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList](#osconfigprojectslocationsinstancesospolicyassignmentsreportslist) - List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
* [osconfigProjectsLocationsInstancesVulnerabilityReportsList](#osconfigprojectslocationsinstancesvulnerabilityreportslist) - List vulnerability reports for all VM instances in the specified zone.
* [osconfigProjectsLocationsOsPolicyAssignmentsCreate](#osconfigprojectslocationsospolicyassignmentscreate) - Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
* [osconfigProjectsLocationsOsPolicyAssignmentsList](#osconfigprojectslocationsospolicyassignmentslist) - List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
* [osconfigProjectsLocationsOsPolicyAssignmentsListRevisions](#osconfigprojectslocationsospolicyassignmentslistrevisions) - List the OS policy assignment revisions for a given OS policy assignment.
* [osconfigProjectsPatchDeploymentsCreate](#osconfigprojectspatchdeploymentscreate) - Create an OS Config patch deployment.
* [osconfigProjectsPatchDeploymentsDelete](#osconfigprojectspatchdeploymentsdelete) - Delete an OS Config patch deployment.
* [osconfigProjectsPatchDeploymentsList](#osconfigprojectspatchdeploymentslist) - Get a page of OS Config patch deployments.
* [osconfigProjectsPatchDeploymentsPatch](#osconfigprojectspatchdeploymentspatch) - Update an OS Config patch deployment.
* [osconfigProjectsPatchDeploymentsPause](#osconfigprojectspatchdeploymentspause) - Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
* [osconfigProjectsPatchDeploymentsResume](#osconfigprojectspatchdeploymentsresume) - Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
* [osconfigProjectsPatchJobsCancel](#osconfigprojectspatchjobscancel) - Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
* [osconfigProjectsPatchJobsExecute](#osconfigprojectspatchjobsexecute) - Patch VM instances by creating and running a patch job.
* [osconfigProjectsPatchJobsGet](#osconfigprojectspatchjobsget) - Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
* [osconfigProjectsPatchJobsInstanceDetailsList](#osconfigprojectspatchjobsinstancedetailslist) - Get a list of instance details for a given patch job.
* [osconfigProjectsPatchJobsList](#osconfigprojectspatchjobslist) - Get a list of patch jobs.

## osconfigProjectsLocationsInstancesInventoriesList

List inventory data for all VM instances in the specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesInventoriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesInventoriesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesInventoriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsInstancesInventoriesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->filter = 'minus';
    $request->key = 'placeat';
    $request->oauthToken = 'voluptatum';
    $request->pageSize = 479977;
    $request->pageToken = 'excepturi';
    $request->parent = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'ab';
    $request->view = OsconfigProjectsLocationsInstancesInventoriesListViewEnum::BASIC;

    $requestSecurity = new OsconfigProjectsLocationsInstancesInventoriesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsInstancesInventoriesList($request, $requestSecurity);

    if ($response->listInventoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList

List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'repellendus';
    $request->filter = 'sapiente';
    $request->key = 'quo';
    $request->oauthToken = 'odit';
    $request->pageSize = 870013;
    $request->pageToken = 'at';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList($request, $requestSecurity);

    if ($response->listOSPolicyAssignmentReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsLocationsInstancesVulnerabilityReportsList

List vulnerability reports for all VM instances in the specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesVulnerabilityReportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesVulnerabilityReportsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsInstancesVulnerabilityReportsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'dicta';
    $request->filter = 'nam';
    $request->key = 'officia';
    $request->oauthToken = 'occaecati';
    $request->pageSize = 143353;
    $request->pageToken = 'deleniti';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'beatae';

    $requestSecurity = new OsconfigProjectsLocationsInstancesVulnerabilityReportsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsInstancesVulnerabilityReportsList($request, $requestSecurity);

    if ($response->listVulnerabilityReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsCreate

Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyAssignmentInput;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyAssignmentInstanceFilter;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyAssignmentLabelSet;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyAssignmentInstanceFilterInventory;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicy;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceGroup;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyInventoryFilter;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResource;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceExecResource;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceExecResourceExec;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceFile;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceFileGcs;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceFileRemote;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceExecResourceExecInterpreterEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceFileResource;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceFileResourceStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResource;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceAPT;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceDeb;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceDesiredStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceGooGet;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceMSI;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceRPM;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceYUM;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceZypper;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResource;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResourceAptRepository;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResourceGooRepository;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResourceYumRepository;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResourceZypperRepository;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyAssignmentRollout;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->osPolicyAssignmentInput = new OSPolicyAssignmentInput();
    $request->osPolicyAssignmentInput->description = 'molestiae';
    $request->osPolicyAssignmentInput->etag = 'modi';
    $request->osPolicyAssignmentInput->instanceFilter = new OSPolicyAssignmentInstanceFilter();
    $request->osPolicyAssignmentInput->instanceFilter->all = false;
    $request->osPolicyAssignmentInput->instanceFilter->exclusionLabels = [
        new OSPolicyAssignmentLabelSet(),
    ];
    $request->osPolicyAssignmentInput->instanceFilter->inclusionLabels = [
        new OSPolicyAssignmentLabelSet(),
        new OSPolicyAssignmentLabelSet(),
        new OSPolicyAssignmentLabelSet(),
        new OSPolicyAssignmentLabelSet(),
    ];
    $request->osPolicyAssignmentInput->instanceFilter->inventories = [
        new OSPolicyAssignmentInstanceFilterInventory(),
        new OSPolicyAssignmentInstanceFilterInventory(),
        new OSPolicyAssignmentInstanceFilterInventory(),
    ];
    $request->osPolicyAssignmentInput->name = 'Edna Mante II';
    $request->osPolicyAssignmentInput->osPolicies = [
        new OSPolicy(),
        new OSPolicy(),
        new OSPolicy(),
    ];
    $request->osPolicyAssignmentInput->rollout = new OSPolicyAssignmentRollout();
    $request->osPolicyAssignmentInput->rollout->disruptionBudget = new FixedOrPercent();
    $request->osPolicyAssignmentInput->rollout->disruptionBudget->fixed = 149675;
    $request->osPolicyAssignmentInput->rollout->disruptionBudget->percent = 612096;
    $request->osPolicyAssignmentInput->rollout->minWaitDuration = 'dolor';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'saepe';
    $request->key = 'fuga';
    $request->oauthToken = 'in';
    $request->osPolicyAssignmentId = 'corporis';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsOsPolicyAssignmentsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsList

List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsOsPolicyAssignmentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'mollitia';
    $request->key = 'laborum';
    $request->oauthToken = 'dolores';
    $request->pageSize = 210382;
    $request->pageToken = 'corporis';
    $request->parent = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new OsconfigProjectsLocationsOsPolicyAssignmentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsOsPolicyAssignmentsList($request, $requestSecurity);

    if ($response->listOSPolicyAssignmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsListRevisions

List the OS policy assignment revisions for a given OS policy assignment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'iure';
    $request->key = 'culpa';
    $request->name = 'Darrin Brakus';
    $request->oauthToken = 'culpa';
    $request->pageSize = 161309;
    $request->pageToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsOsPolicyAssignmentsListRevisions($request, $requestSecurity);

    if ($response->listOSPolicyAssignmentRevisionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsPatchDeploymentsCreate

Create an OS Config patch deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchDeploymentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchDeploymentInput;
use \OpenAPI\OpenAPI\Models\Shared\PatchInstanceFilter;
use \OpenAPI\OpenAPI\Models\Shared\PatchInstanceFilterGroupLabel;
use \OpenAPI\OpenAPI\Models\Shared\OneTimeSchedule;
use \OpenAPI\OpenAPI\Models\Shared\PatchConfig;
use \OpenAPI\OpenAPI\Models\Shared\AptSettings;
use \OpenAPI\OpenAPI\Models\Shared\AptSettingsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecStep;
use \OpenAPI\OpenAPI\Models\Shared\ExecStepConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsObject;
use \OpenAPI\OpenAPI\Models\Shared\ExecStepConfigInterpreterEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchConfigRebootConfigEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindowsUpdateSettings;
use \OpenAPI\OpenAPI\Models\Shared\WindowsUpdateSettingsClassificationsEnum;
use \OpenAPI\OpenAPI\Models\Shared\YumSettings;
use \OpenAPI\OpenAPI\Models\Shared\ZypperSettings;
use \OpenAPI\OpenAPI\Models\Shared\RecurringScheduleInput;
use \OpenAPI\OpenAPI\Models\Shared\RecurringScheduleFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonthlySchedule;
use \OpenAPI\OpenAPI\Models\Shared\WeekDayOfMonth;
use \OpenAPI\OpenAPI\Models\Shared\WeekDayOfMonthDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\TimeZone;
use \OpenAPI\OpenAPI\Models\Shared\WeeklySchedule;
use \OpenAPI\OpenAPI\Models\Shared\WeeklyScheduleDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchRollout;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
use \OpenAPI\OpenAPI\Models\Shared\PatchRolloutModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchDeploymentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsPatchDeploymentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->patchDeploymentInput = new PatchDeploymentInput();
    $request->patchDeploymentInput->description = 'quam';
    $request->patchDeploymentInput->duration = 'molestiae';
    $request->patchDeploymentInput->instanceFilter = new PatchInstanceFilter();
    $request->patchDeploymentInput->instanceFilter->all = false;
    $request->patchDeploymentInput->instanceFilter->groupLabels = [
        new PatchInstanceFilterGroupLabel(),
    ];
    $request->patchDeploymentInput->instanceFilter->instanceNamePrefixes = [
        'quia',
        'quis',
        'vitae',
    ];
    $request->patchDeploymentInput->instanceFilter->instances = [
        'animi',
        'enim',
        'odit',
    ];
    $request->patchDeploymentInput->instanceFilter->zones = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->patchDeploymentInput->name = 'Richard Boyer';
    $request->patchDeploymentInput->oneTimeSchedule = new OneTimeSchedule();
    $request->patchDeploymentInput->oneTimeSchedule->executeTime = 'laborum';
    $request->patchDeploymentInput->patchConfig = new PatchConfig();
    $request->patchDeploymentInput->patchConfig->apt = new AptSettings();
    $request->patchDeploymentInput->patchConfig->apt->excludes = [
        'reiciendis',
    ];
    $request->patchDeploymentInput->patchConfig->apt->exclusivePackages = [
        'vero',
        'nihil',
        'praesentium',
        'voluptatibus',
    ];
    $request->patchDeploymentInput->patchConfig->apt->type = AptSettingsTypeEnum::TYPE_UNSPECIFIED;
    $request->patchDeploymentInput->patchConfig->goo = [
        'voluptate' => 'cum',
        'perferendis' => 'doloremque',
        'reprehenderit' => 'ut',
    ];
    $request->patchDeploymentInput->patchConfig->migInstancesAllowed = false;
    $request->patchDeploymentInput->patchConfig->postStep = new ExecStep();
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig = new ExecStepConfig();
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->allowedSuccessCodes = [
        120196,
        359444,
        296140,
        480894,
    ];
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->gcsObject = new GcsObject();
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->gcsObject->bucket = 'dicta';
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->gcsObject->generationNumber = 'harum';
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->gcsObject->object = 'enim';
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::POWERSHELL;
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->localPath = 'commodi';
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig = new ExecStepConfig();
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->allowedSuccessCodes = [
        64147,
        216822,
        692472,
        565189,
    ];
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->gcsObject = new GcsObject();
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->gcsObject->bucket = 'excepturi';
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->gcsObject->generationNumber = 'pariatur';
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->gcsObject->object = 'modi';
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::SHELL;
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->localPath = 'rem';
    $request->patchDeploymentInput->patchConfig->preStep = new ExecStep();
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig = new ExecStepConfig();
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->allowedSuccessCodes = [
        93940,
        921158,
        575947,
        83112,
    ];
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->gcsObject = new GcsObject();
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->gcsObject->bucket = 'itaque';
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->gcsObject->generationNumber = 'incidunt';
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->gcsObject->object = 'enim';
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::INTERPRETER_UNSPECIFIED;
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->localPath = 'est';
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig = new ExecStepConfig();
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->allowedSuccessCodes = [
        131797,
        647174,
        716327,
        841386,
    ];
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->gcsObject = new GcsObject();
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->gcsObject->bucket = 'labore';
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->gcsObject->generationNumber = 'modi';
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->gcsObject->object = 'qui';
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::NONE;
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->localPath = 'cupiditate';
    $request->patchDeploymentInput->patchConfig->rebootConfig = PatchConfigRebootConfigEnum::ALWAYS;
    $request->patchDeploymentInput->patchConfig->windowsUpdate = new WindowsUpdateSettings();
    $request->patchDeploymentInput->patchConfig->windowsUpdate->classifications = [
        WindowsUpdateSettingsClassificationsEnum::CRITICAL,
    ];
    $request->patchDeploymentInput->patchConfig->windowsUpdate->excludes = [
        'ipsam',
        'alias',
        'fugit',
        'dolorum',
    ];
    $request->patchDeploymentInput->patchConfig->windowsUpdate->exclusivePatches = [
        'tempora',
        'facilis',
        'tempore',
    ];
    $request->patchDeploymentInput->patchConfig->yum = new YumSettings();
    $request->patchDeploymentInput->patchConfig->yum->excludes = [
        'delectus',
        'eum',
    ];
    $request->patchDeploymentInput->patchConfig->yum->exclusivePackages = [
        'eligendi',
    ];
    $request->patchDeploymentInput->patchConfig->yum->minimal = false;
    $request->patchDeploymentInput->patchConfig->yum->security = false;
    $request->patchDeploymentInput->patchConfig->zypper = new ZypperSettings();
    $request->patchDeploymentInput->patchConfig->zypper->categories = [
        'aliquid',
        'provident',
        'necessitatibus',
    ];
    $request->patchDeploymentInput->patchConfig->zypper->excludes = [
        'officia',
        'dolor',
        'debitis',
    ];
    $request->patchDeploymentInput->patchConfig->zypper->exclusivePatches = [
        'dolorum',
        'in',
        'in',
        'illum',
    ];
    $request->patchDeploymentInput->patchConfig->zypper->severities = [
        'rerum',
        'dicta',
        'magnam',
        'cumque',
    ];
    $request->patchDeploymentInput->patchConfig->zypper->withOptional = false;
    $request->patchDeploymentInput->patchConfig->zypper->withUpdate = false;
    $request->patchDeploymentInput->recurringSchedule = new RecurringScheduleInput();
    $request->patchDeploymentInput->recurringSchedule->endTime = 'facere';
    $request->patchDeploymentInput->recurringSchedule->frequency = RecurringScheduleFrequencyEnum::WEEKLY;
    $request->patchDeploymentInput->recurringSchedule->monthly = new MonthlySchedule();
    $request->patchDeploymentInput->recurringSchedule->monthly->monthDay = 396506;
    $request->patchDeploymentInput->recurringSchedule->monthly->weekDayOfMonth = new WeekDayOfMonth();
    $request->patchDeploymentInput->recurringSchedule->monthly->weekDayOfMonth->dayOfWeek = WeekDayOfMonthDayOfWeekEnum::FRIDAY;
    $request->patchDeploymentInput->recurringSchedule->monthly->weekDayOfMonth->dayOffset = 881104;
    $request->patchDeploymentInput->recurringSchedule->monthly->weekDayOfMonth->weekOrdinal = 249796;
    $request->patchDeploymentInput->recurringSchedule->startTime = 'occaecati';
    $request->patchDeploymentInput->recurringSchedule->timeOfDay = new TimeOfDay();
    $request->patchDeploymentInput->recurringSchedule->timeOfDay->hours = 313218;
    $request->patchDeploymentInput->recurringSchedule->timeOfDay->minutes = 881736;
    $request->patchDeploymentInput->recurringSchedule->timeOfDay->nanos = 965417;
    $request->patchDeploymentInput->recurringSchedule->timeOfDay->seconds = 692532;
    $request->patchDeploymentInput->recurringSchedule->timeZone = new TimeZone();
    $request->patchDeploymentInput->recurringSchedule->timeZone->id = '9ba88f3a-6699-4707-8ba4-469b6e214195';
    $request->patchDeploymentInput->recurringSchedule->timeZone->version = 'provident';
    $request->patchDeploymentInput->recurringSchedule->weekly = new WeeklySchedule();
    $request->patchDeploymentInput->recurringSchedule->weekly->dayOfWeek = WeeklyScheduleDayOfWeekEnum::THURSDAY;
    $request->patchDeploymentInput->rollout = new PatchRollout();
    $request->patchDeploymentInput->rollout->disruptionBudget = new FixedOrPercent();
    $request->patchDeploymentInput->rollout->disruptionBudget->fixed = 574325;
    $request->patchDeploymentInput->rollout->disruptionBudget->percent = 33625;
    $request->patchDeploymentInput->rollout->mode = PatchRolloutModeEnum::ZONE_BY_ZONE;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ad';
    $request->fields = 'eum';
    $request->key = 'dolor';
    $request->oauthToken = 'necessitatibus';
    $request->parent = 'odit';
    $request->patchDeploymentId = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new OsconfigProjectsPatchDeploymentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsPatchDeploymentsCreate($request, $requestSecurity);

    if ($response->patchDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsPatchDeploymentsDelete

Delete an OS Config patch deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchDeploymentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchDeploymentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsPatchDeploymentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'facilis';
    $request->key = 'in';
    $request->name = 'Diane VonRueden';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new OsconfigProjectsPatchDeploymentsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsPatchDeploymentsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsPatchDeploymentsList

Get a page of OS Config patch deployments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchDeploymentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchDeploymentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsPatchDeploymentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->fields = 'praesentium';
    $request->key = 'natus';
    $request->oauthToken = 'magni';
    $request->pageSize = 123820;
    $request->pageToken = 'quo';
    $request->parent = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new OsconfigProjectsPatchDeploymentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsPatchDeploymentsList($request, $requestSecurity);

    if ($response->listPatchDeploymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsPatchDeploymentsPatch

Update an OS Config patch deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchDeploymentsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchDeploymentInput;
use \OpenAPI\OpenAPI\Models\Shared\PatchInstanceFilter;
use \OpenAPI\OpenAPI\Models\Shared\PatchInstanceFilterGroupLabel;
use \OpenAPI\OpenAPI\Models\Shared\OneTimeSchedule;
use \OpenAPI\OpenAPI\Models\Shared\PatchConfig;
use \OpenAPI\OpenAPI\Models\Shared\AptSettings;
use \OpenAPI\OpenAPI\Models\Shared\AptSettingsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecStep;
use \OpenAPI\OpenAPI\Models\Shared\ExecStepConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsObject;
use \OpenAPI\OpenAPI\Models\Shared\ExecStepConfigInterpreterEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchConfigRebootConfigEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindowsUpdateSettings;
use \OpenAPI\OpenAPI\Models\Shared\WindowsUpdateSettingsClassificationsEnum;
use \OpenAPI\OpenAPI\Models\Shared\YumSettings;
use \OpenAPI\OpenAPI\Models\Shared\ZypperSettings;
use \OpenAPI\OpenAPI\Models\Shared\RecurringScheduleInput;
use \OpenAPI\OpenAPI\Models\Shared\RecurringScheduleFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonthlySchedule;
use \OpenAPI\OpenAPI\Models\Shared\WeekDayOfMonth;
use \OpenAPI\OpenAPI\Models\Shared\WeekDayOfMonthDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\TimeZone;
use \OpenAPI\OpenAPI\Models\Shared\WeeklySchedule;
use \OpenAPI\OpenAPI\Models\Shared\WeeklyScheduleDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchRollout;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
use \OpenAPI\OpenAPI\Models\Shared\PatchRolloutModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchDeploymentsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsPatchDeploymentsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->patchDeploymentInput = new PatchDeploymentInput();
    $request->patchDeploymentInput->description = 'odit';
    $request->patchDeploymentInput->duration = 'ea';
    $request->patchDeploymentInput->instanceFilter = new PatchInstanceFilter();
    $request->patchDeploymentInput->instanceFilter->all = false;
    $request->patchDeploymentInput->instanceFilter->groupLabels = [
        new PatchInstanceFilterGroupLabel(),
    ];
    $request->patchDeploymentInput->instanceFilter->instanceNamePrefixes = [
        'maiores',
    ];
    $request->patchDeploymentInput->instanceFilter->instances = [
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->patchDeploymentInput->instanceFilter->zones = [
        'eaque',
        'pariatur',
        'nemo',
    ];
    $request->patchDeploymentInput->name = 'Joseph Steuber DDS';
    $request->patchDeploymentInput->oneTimeSchedule = new OneTimeSchedule();
    $request->patchDeploymentInput->oneTimeSchedule->executeTime = 'corporis';
    $request->patchDeploymentInput->patchConfig = new PatchConfig();
    $request->patchDeploymentInput->patchConfig->apt = new AptSettings();
    $request->patchDeploymentInput->patchConfig->apt->excludes = [
        'libero',
        'nobis',
        'dolores',
        'quis',
    ];
    $request->patchDeploymentInput->patchConfig->apt->exclusivePackages = [
        'dignissimos',
        'eaque',
        'quis',
    ];
    $request->patchDeploymentInput->patchConfig->apt->type = AptSettingsTypeEnum::TYPE_UNSPECIFIED;
    $request->patchDeploymentInput->patchConfig->goo = [
        'perferendis' => 'dolores',
    ];
    $request->patchDeploymentInput->patchConfig->migInstancesAllowed = false;
    $request->patchDeploymentInput->patchConfig->postStep = new ExecStep();
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig = new ExecStepConfig();
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->allowedSuccessCodes = [
        463451,
        223924,
        874573,
        345352,
    ];
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->gcsObject = new GcsObject();
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->gcsObject->bucket = 'hic';
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->gcsObject->generationNumber = 'recusandae';
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->gcsObject->object = 'omnis';
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::SHELL;
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->localPath = 'perspiciatis';
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig = new ExecStepConfig();
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->allowedSuccessCodes = [
        783645,
    ];
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->gcsObject = new GcsObject();
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->gcsObject->bucket = 'consequuntur';
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->gcsObject->generationNumber = 'blanditiis';
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->gcsObject->object = 'error';
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::INTERPRETER_UNSPECIFIED;
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->localPath = 'occaecati';
    $request->patchDeploymentInput->patchConfig->preStep = new ExecStep();
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig = new ExecStepConfig();
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->allowedSuccessCodes = [
        237893,
        992397,
        934214,
    ];
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->gcsObject = new GcsObject();
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->gcsObject->bucket = 'modi';
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->gcsObject->generationNumber = 'iste';
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->gcsObject->object = 'dolorum';
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::SHELL;
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->localPath = 'pariatur';
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig = new ExecStepConfig();
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->allowedSuccessCodes = [
        750844,
        730122,
        964490,
    ];
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->gcsObject = new GcsObject();
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->gcsObject->bucket = 'quaerat';
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->gcsObject->generationNumber = 'quos';
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->gcsObject->object = 'aliquid';
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::INTERPRETER_UNSPECIFIED;
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->localPath = 'dolorem';
    $request->patchDeploymentInput->patchConfig->rebootConfig = PatchConfigRebootConfigEnum::REBOOT_CONFIG_UNSPECIFIED;
    $request->patchDeploymentInput->patchConfig->windowsUpdate = new WindowsUpdateSettings();
    $request->patchDeploymentInput->patchConfig->windowsUpdate->classifications = [
        WindowsUpdateSettingsClassificationsEnum::SECURITY,
    ];
    $request->patchDeploymentInput->patchConfig->windowsUpdate->excludes = [
        'excepturi',
        'cum',
        'voluptate',
        'dignissimos',
    ];
    $request->patchDeploymentInput->patchConfig->windowsUpdate->exclusivePatches = [
        'amet',
        'dolorum',
        'numquam',
        'veritatis',
    ];
    $request->patchDeploymentInput->patchConfig->yum = new YumSettings();
    $request->patchDeploymentInput->patchConfig->yum->excludes = [
        'ipsa',
    ];
    $request->patchDeploymentInput->patchConfig->yum->exclusivePackages = [
        'odio',
        'quaerat',
    ];
    $request->patchDeploymentInput->patchConfig->yum->minimal = false;
    $request->patchDeploymentInput->patchConfig->yum->security = false;
    $request->patchDeploymentInput->patchConfig->zypper = new ZypperSettings();
    $request->patchDeploymentInput->patchConfig->zypper->categories = [
        'quidem',
        'voluptatibus',
        'voluptas',
        'natus',
    ];
    $request->patchDeploymentInput->patchConfig->zypper->excludes = [
        'atque',
    ];
    $request->patchDeploymentInput->patchConfig->zypper->exclusivePatches = [
        'fugiat',
    ];
    $request->patchDeploymentInput->patchConfig->zypper->severities = [
        'soluta',
    ];
    $request->patchDeploymentInput->patchConfig->zypper->withOptional = false;
    $request->patchDeploymentInput->patchConfig->zypper->withUpdate = false;
    $request->patchDeploymentInput->recurringSchedule = new RecurringScheduleInput();
    $request->patchDeploymentInput->recurringSchedule->endTime = 'dolorum';
    $request->patchDeploymentInput->recurringSchedule->frequency = RecurringScheduleFrequencyEnum::WEEKLY;
    $request->patchDeploymentInput->recurringSchedule->monthly = new MonthlySchedule();
    $request->patchDeploymentInput->recurringSchedule->monthly->monthDay = 453697;
    $request->patchDeploymentInput->recurringSchedule->monthly->weekDayOfMonth = new WeekDayOfMonth();
    $request->patchDeploymentInput->recurringSchedule->monthly->weekDayOfMonth->dayOfWeek = WeekDayOfMonthDayOfWeekEnum::FRIDAY;
    $request->patchDeploymentInput->recurringSchedule->monthly->weekDayOfMonth->dayOffset = 536579;
    $request->patchDeploymentInput->recurringSchedule->monthly->weekDayOfMonth->weekOrdinal = 607045;
    $request->patchDeploymentInput->recurringSchedule->startTime = 'necessitatibus';
    $request->patchDeploymentInput->recurringSchedule->timeOfDay = new TimeOfDay();
    $request->patchDeploymentInput->recurringSchedule->timeOfDay->hours = 714697;
    $request->patchDeploymentInput->recurringSchedule->timeOfDay->minutes = 990339;
    $request->patchDeploymentInput->recurringSchedule->timeOfDay->nanos = 469497;
    $request->patchDeploymentInput->recurringSchedule->timeOfDay->seconds = 216897;
    $request->patchDeploymentInput->recurringSchedule->timeZone = new TimeZone();
    $request->patchDeploymentInput->recurringSchedule->timeZone->id = '7ae4203c-e5e6-4a95-98a0-d446ce2af7a7';
    $request->patchDeploymentInput->recurringSchedule->timeZone->version = 'ipsum';
    $request->patchDeploymentInput->recurringSchedule->weekly = new WeeklySchedule();
    $request->patchDeploymentInput->recurringSchedule->weekly->dayOfWeek = WeeklyScheduleDayOfWeekEnum::SATURDAY;
    $request->patchDeploymentInput->rollout = new PatchRollout();
    $request->patchDeploymentInput->rollout->disruptionBudget = new FixedOrPercent();
    $request->patchDeploymentInput->rollout->disruptionBudget->fixed = 947371;
    $request->patchDeploymentInput->rollout->disruptionBudget->percent = 229442;
    $request->patchDeploymentInput->rollout->mode = PatchRolloutModeEnum::CONCURRENT_ZONES;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'dolorem';
    $request->key = 'sapiente';
    $request->name = 'Christian Balistreri';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->updateMask = 'libero';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new OsconfigProjectsPatchDeploymentsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsPatchDeploymentsPatch($request, $requestSecurity);

    if ($response->patchDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsPatchDeploymentsPause

Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchDeploymentsPauseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchDeploymentsPauseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsPatchDeploymentsPauseRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'incidunt' => 'qui',
    ];
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'soluta';
    $request->key = 'dicta';
    $request->name = 'Felix Gorczany';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'quam';

    $requestSecurity = new OsconfigProjectsPatchDeploymentsPauseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsPatchDeploymentsPause($request, $requestSecurity);

    if ($response->patchDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsPatchDeploymentsResume

Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchDeploymentsResumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchDeploymentsResumeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsPatchDeploymentsResumeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'qui' => 'neque',
        'fugit' => 'magni',
        'odio' => 'sunt',
        'ullam' => 'nam',
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'soluta';
    $request->key = 'nobis';
    $request->name = 'Miss Kerry Emmerich';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new OsconfigProjectsPatchDeploymentsResumeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsPatchDeploymentsResume($request, $requestSecurity);

    if ($response->patchDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsPatchJobsCancel

Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchJobsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchJobsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsPatchJobsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'labore' => 'adipisci',
        'dolorum' => 'architecto',
    ];
    $request->accessToken = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quas';
    $request->fields = 'itaque';
    $request->key = 'consequatur';
    $request->name = 'Marcos Schaden';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new OsconfigProjectsPatchJobsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsPatchJobsCancel($request, $requestSecurity);

    if ($response->patchJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsPatchJobsExecute

Patch VM instances by creating and running a patch job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchJobsExecuteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecutePatchJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatchInstanceFilter;
use \OpenAPI\OpenAPI\Models\Shared\PatchInstanceFilterGroupLabel;
use \OpenAPI\OpenAPI\Models\Shared\PatchConfig;
use \OpenAPI\OpenAPI\Models\Shared\AptSettings;
use \OpenAPI\OpenAPI\Models\Shared\AptSettingsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecStep;
use \OpenAPI\OpenAPI\Models\Shared\ExecStepConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsObject;
use \OpenAPI\OpenAPI\Models\Shared\ExecStepConfigInterpreterEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchConfigRebootConfigEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindowsUpdateSettings;
use \OpenAPI\OpenAPI\Models\Shared\WindowsUpdateSettingsClassificationsEnum;
use \OpenAPI\OpenAPI\Models\Shared\YumSettings;
use \OpenAPI\OpenAPI\Models\Shared\ZypperSettings;
use \OpenAPI\OpenAPI\Models\Shared\PatchRollout;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
use \OpenAPI\OpenAPI\Models\Shared\PatchRolloutModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchJobsExecuteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsPatchJobsExecuteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->executePatchJobRequest = new ExecutePatchJobRequest();
    $request->executePatchJobRequest->description = 'odio';
    $request->executePatchJobRequest->displayName = 'occaecati';
    $request->executePatchJobRequest->dryRun = false;
    $request->executePatchJobRequest->duration = 'voluptatibus';
    $request->executePatchJobRequest->instanceFilter = new PatchInstanceFilter();
    $request->executePatchJobRequest->instanceFilter->all = false;
    $request->executePatchJobRequest->instanceFilter->groupLabels = [
        new PatchInstanceFilterGroupLabel(),
        new PatchInstanceFilterGroupLabel(),
        new PatchInstanceFilterGroupLabel(),
        new PatchInstanceFilterGroupLabel(),
    ];
    $request->executePatchJobRequest->instanceFilter->instanceNamePrefixes = [
        'omnis',
        'quis',
        'ipsum',
        'delectus',
    ];
    $request->executePatchJobRequest->instanceFilter->instances = [
        'consectetur',
        'vero',
    ];
    $request->executePatchJobRequest->instanceFilter->zones = [
        'dignissimos',
        'hic',
        'distinctio',
        'quod',
    ];
    $request->executePatchJobRequest->patchConfig = new PatchConfig();
    $request->executePatchJobRequest->patchConfig->apt = new AptSettings();
    $request->executePatchJobRequest->patchConfig->apt->excludes = [
        'similique',
        'facilis',
    ];
    $request->executePatchJobRequest->patchConfig->apt->exclusivePackages = [
        'ducimus',
        'dolore',
        'quibusdam',
        'illum',
    ];
    $request->executePatchJobRequest->patchConfig->apt->type = AptSettingsTypeEnum::TYPE_UNSPECIFIED;
    $request->executePatchJobRequest->patchConfig->goo = [
        'impedit' => 'aut',
        'voluptatibus' => 'exercitationem',
        'nulla' => 'fugit',
    ];
    $request->executePatchJobRequest->patchConfig->migInstancesAllowed = false;
    $request->executePatchJobRequest->patchConfig->postStep = new ExecStep();
    $request->executePatchJobRequest->patchConfig->postStep->linuxExecStepConfig = new ExecStepConfig();
    $request->executePatchJobRequest->patchConfig->postStep->linuxExecStepConfig->allowedSuccessCodes = [
        981830,
        985033,
        478370,
        753570,
    ];
    $request->executePatchJobRequest->patchConfig->postStep->linuxExecStepConfig->gcsObject = new GcsObject();
    $request->executePatchJobRequest->patchConfig->postStep->linuxExecStepConfig->gcsObject->bucket = 'ducimus';
    $request->executePatchJobRequest->patchConfig->postStep->linuxExecStepConfig->gcsObject->generationNumber = 'alias';
    $request->executePatchJobRequest->patchConfig->postStep->linuxExecStepConfig->gcsObject->object = 'officia';
    $request->executePatchJobRequest->patchConfig->postStep->linuxExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::NONE;
    $request->executePatchJobRequest->patchConfig->postStep->linuxExecStepConfig->localPath = 'ipsam';
    $request->executePatchJobRequest->patchConfig->postStep->windowsExecStepConfig = new ExecStepConfig();
    $request->executePatchJobRequest->patchConfig->postStep->windowsExecStepConfig->allowedSuccessCodes = [
        136900,
        428224,
    ];
    $request->executePatchJobRequest->patchConfig->postStep->windowsExecStepConfig->gcsObject = new GcsObject();
    $request->executePatchJobRequest->patchConfig->postStep->windowsExecStepConfig->gcsObject->bucket = 'possimus';
    $request->executePatchJobRequest->patchConfig->postStep->windowsExecStepConfig->gcsObject->generationNumber = 'magnam';
    $request->executePatchJobRequest->patchConfig->postStep->windowsExecStepConfig->gcsObject->object = 'ratione';
    $request->executePatchJobRequest->patchConfig->postStep->windowsExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::NONE;
    $request->executePatchJobRequest->patchConfig->postStep->windowsExecStepConfig->localPath = 'laudantium';
    $request->executePatchJobRequest->patchConfig->preStep = new ExecStep();
    $request->executePatchJobRequest->patchConfig->preStep->linuxExecStepConfig = new ExecStepConfig();
    $request->executePatchJobRequest->patchConfig->preStep->linuxExecStepConfig->allowedSuccessCodes = [
        224317,
    ];
    $request->executePatchJobRequest->patchConfig->preStep->linuxExecStepConfig->gcsObject = new GcsObject();
    $request->executePatchJobRequest->patchConfig->preStep->linuxExecStepConfig->gcsObject->bucket = 'maiores';
    $request->executePatchJobRequest->patchConfig->preStep->linuxExecStepConfig->gcsObject->generationNumber = 'quasi';
    $request->executePatchJobRequest->patchConfig->preStep->linuxExecStepConfig->gcsObject->object = 'ex';
    $request->executePatchJobRequest->patchConfig->preStep->linuxExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::POWERSHELL;
    $request->executePatchJobRequest->patchConfig->preStep->linuxExecStepConfig->localPath = 'excepturi';
    $request->executePatchJobRequest->patchConfig->preStep->windowsExecStepConfig = new ExecStepConfig();
    $request->executePatchJobRequest->patchConfig->preStep->windowsExecStepConfig->allowedSuccessCodes = [
        343605,
        960835,
        788873,
        906556,
    ];
    $request->executePatchJobRequest->patchConfig->preStep->windowsExecStepConfig->gcsObject = new GcsObject();
    $request->executePatchJobRequest->patchConfig->preStep->windowsExecStepConfig->gcsObject->bucket = 'ea';
    $request->executePatchJobRequest->patchConfig->preStep->windowsExecStepConfig->gcsObject->generationNumber = 'impedit';
    $request->executePatchJobRequest->patchConfig->preStep->windowsExecStepConfig->gcsObject->object = 'corporis';
    $request->executePatchJobRequest->patchConfig->preStep->windowsExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::NONE;
    $request->executePatchJobRequest->patchConfig->preStep->windowsExecStepConfig->localPath = 'aliquid';
    $request->executePatchJobRequest->patchConfig->rebootConfig = PatchConfigRebootConfigEnum::REBOOT_CONFIG_UNSPECIFIED;
    $request->executePatchJobRequest->patchConfig->windowsUpdate = new WindowsUpdateSettings();
    $request->executePatchJobRequest->patchConfig->windowsUpdate->classifications = [
        WindowsUpdateSettingsClassificationsEnum::DRIVER,
        WindowsUpdateSettingsClassificationsEnum::TOOL,
    ];
    $request->executePatchJobRequest->patchConfig->windowsUpdate->excludes = [
        'recusandae',
    ];
    $request->executePatchJobRequest->patchConfig->windowsUpdate->exclusivePatches = [
        'minima',
    ];
    $request->executePatchJobRequest->patchConfig->yum = new YumSettings();
    $request->executePatchJobRequest->patchConfig->yum->excludes = [
        'a',
    ];
    $request->executePatchJobRequest->patchConfig->yum->exclusivePackages = [
        'aut',
        'aut',
        'deleniti',
    ];
    $request->executePatchJobRequest->patchConfig->yum->minimal = false;
    $request->executePatchJobRequest->patchConfig->yum->security = false;
    $request->executePatchJobRequest->patchConfig->zypper = new ZypperSettings();
    $request->executePatchJobRequest->patchConfig->zypper->categories = [
        'aliquam',
        'fugit',
        'accusamus',
        'inventore',
    ];
    $request->executePatchJobRequest->patchConfig->zypper->excludes = [
        'et',
        'dolorum',
    ];
    $request->executePatchJobRequest->patchConfig->zypper->exclusivePatches = [
        'placeat',
        'velit',
        'eum',
    ];
    $request->executePatchJobRequest->patchConfig->zypper->severities = [
        'nobis',
        'quas',
    ];
    $request->executePatchJobRequest->patchConfig->zypper->withOptional = false;
    $request->executePatchJobRequest->patchConfig->zypper->withUpdate = false;
    $request->executePatchJobRequest->rollout = new PatchRollout();
    $request->executePatchJobRequest->rollout->disruptionBudget = new FixedOrPercent();
    $request->executePatchJobRequest->rollout->disruptionBudget->fixed = 829603;
    $request->executePatchJobRequest->rollout->disruptionBudget->percent = 860552;
    $request->executePatchJobRequest->rollout->mode = PatchRolloutModeEnum::ZONE_BY_ZONE;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'numquam';
    $request->key = 'explicabo';
    $request->oauthToken = 'provident';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new OsconfigProjectsPatchJobsExecuteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsPatchJobsExecute($request, $requestSecurity);

    if ($response->patchJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsPatchJobsGet

Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchJobsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchJobsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchJobsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsPatchJobsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'fuga';
    $request->key = 'reprehenderit';
    $request->name = 'Nicolas Graham';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'eos';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'quisquam';
    $request->view = OsconfigProjectsPatchJobsGetViewEnum::INVENTORY_VIEW_UNSPECIFIED;

    $requestSecurity = new OsconfigProjectsPatchJobsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsPatchJobsGet($request, $requestSecurity);

    if ($response->patchJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsPatchJobsInstanceDetailsList

Get a list of instance details for a given patch job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchJobsInstanceDetailsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchJobsInstanceDetailsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsPatchJobsInstanceDetailsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'neque';
    $request->fields = 'quo';
    $request->filter = 'illum';
    $request->key = 'quo';
    $request->oauthToken = 'fuga';
    $request->pageSize = 259422;
    $request->pageToken = 'eos';
    $request->parent = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'consequatur';

    $requestSecurity = new OsconfigProjectsPatchJobsInstanceDetailsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsPatchJobsInstanceDetailsList($request, $requestSecurity);

    if ($response->listPatchJobInstanceDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsPatchJobsList

Get a list of patch jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchJobsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsPatchJobsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'sequi';
    $request->filter = 'quo';
    $request->key = 'esse';
    $request->oauthToken = 'recusandae';
    $request->pageSize = 44612;
    $request->pageToken = 'distinctio';
    $request->parent = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new OsconfigProjectsPatchJobsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsPatchJobsList($request, $requestSecurity);

    if ($response->listPatchJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
