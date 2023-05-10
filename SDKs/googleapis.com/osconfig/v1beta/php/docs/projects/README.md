# projects

### Available Operations

* [osconfigProjectsGuestPoliciesCreate](#osconfigprojectsguestpoliciescreate) - Create an OS Config guest policy.
* [osconfigProjectsGuestPoliciesList](#osconfigprojectsguestpolicieslist) - Get a page of OS Config guest policies.
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
* [osconfigProjectsZonesInstancesLookupEffectiveGuestPolicy](#osconfigprojectszonesinstanceslookupeffectiveguestpolicy) - Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.

## osconfigProjectsGuestPoliciesCreate

Create an OS Config guest policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsGuestPoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GuestPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\Assignment;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentGroupLabel;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentOsType;
use \OpenAPI\OpenAPI\Models\Shared\PackageRepository;
use \OpenAPI\OpenAPI\Models\Shared\AptRepository;
use \OpenAPI\OpenAPI\Models\Shared\AptRepositoryArchiveTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooRepository;
use \OpenAPI\OpenAPI\Models\Shared\YumRepository;
use \OpenAPI\OpenAPI\Models\Shared\ZypperRepository;
use \OpenAPI\OpenAPI\Models\Shared\Package;
use \OpenAPI\OpenAPI\Models\Shared\PackageDesiredStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\PackageManagerEnum;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareRecipe;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareRecipeArtifact;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareRecipeArtifactGcs;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareRecipeArtifactRemote;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareRecipeDesiredStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareRecipeStep;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareRecipeStepExtractArchive;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareRecipeStepExtractArchiveTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareRecipeStepInstallDpkg;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareRecipeStepCopyFile;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareRecipeStepExecFile;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareRecipeStepInstallMsi;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareRecipeStepInstallRpm;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareRecipeStepRunScript;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareRecipeStepRunScriptInterpreterEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsGuestPoliciesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsGuestPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->guestPolicyInput = new GuestPolicyInput();
    $request->guestPolicyInput->assignment = new Assignment();
    $request->guestPolicyInput->assignment->groupLabels = [
        new AssignmentGroupLabel(),
        new AssignmentGroupLabel(),
        new AssignmentGroupLabel(),
        new AssignmentGroupLabel(),
    ];
    $request->guestPolicyInput->assignment->instanceNamePrefixes = [
        'at',
    ];
    $request->guestPolicyInput->assignment->instances = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->guestPolicyInput->assignment->osTypes = [
        new AssignmentOsType(),
        new AssignmentOsType(),
    ];
    $request->guestPolicyInput->assignment->zones = [
        'porro',
        'dolorum',
        'dicta',
    ];
    $request->guestPolicyInput->description = 'nam';
    $request->guestPolicyInput->etag = 'officia';
    $request->guestPolicyInput->name = 'Wayne Lind';
    $request->guestPolicyInput->packageRepositories = [
        new PackageRepository(),
        new PackageRepository(),
        new PackageRepository(),
    ];
    $request->guestPolicyInput->packages = [
        new Package(),
    ];
    $request->guestPolicyInput->recipes = [
        new SoftwareRecipe(),
        new SoftwareRecipe(),
    ];
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'impedit';
    $request->guestPolicyId = 'cum';
    $request->key = 'esse';
    $request->oauthToken = 'ipsum';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new OsconfigProjectsGuestPoliciesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsGuestPoliciesCreate($request, $requestSecurity);

    if ($response->guestPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsGuestPoliciesList

Get a page of OS Config guest policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsGuestPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsGuestPoliciesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsGuestPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->oauthToken = 'hic';
    $request->pageSize = 902599;
    $request->pageToken = 'fuga';
    $request->parent = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new OsconfigProjectsGuestPoliciesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsGuestPoliciesList($request, $requestSecurity);

    if ($response->listGuestPoliciesResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->patchDeploymentInput = new PatchDeploymentInput();
    $request->patchDeploymentInput->description = 'quidem';
    $request->patchDeploymentInput->duration = 'architecto';
    $request->patchDeploymentInput->instanceFilter = new PatchInstanceFilter();
    $request->patchDeploymentInput->instanceFilter->all = false;
    $request->patchDeploymentInput->instanceFilter->groupLabels = [
        new PatchInstanceFilterGroupLabel(),
    ];
    $request->patchDeploymentInput->instanceFilter->instanceNamePrefixes = [
        'est',
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->patchDeploymentInput->instanceFilter->instances = [
        'corporis',
    ];
    $request->patchDeploymentInput->instanceFilter->zones = [
        'nobis',
    ];
    $request->patchDeploymentInput->name = 'Guadalupe Hickle';
    $request->patchDeploymentInput->oneTimeSchedule = new OneTimeSchedule();
    $request->patchDeploymentInput->oneTimeSchedule->executeTime = 'accusantium';
    $request->patchDeploymentInput->patchConfig = new PatchConfig();
    $request->patchDeploymentInput->patchConfig->apt = new AptSettings();
    $request->patchDeploymentInput->patchConfig->apt->excludes = [
        'culpa',
        'doloribus',
    ];
    $request->patchDeploymentInput->patchConfig->apt->exclusivePackages = [
        'architecto',
        'mollitia',
        'dolorem',
        'culpa',
    ];
    $request->patchDeploymentInput->patchConfig->apt->type = AptSettingsTypeEnum::TYPE_UNSPECIFIED;
    $request->patchDeploymentInput->patchConfig->goo = [
        'mollitia' => 'occaecati',
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->patchDeploymentInput->patchConfig->migInstancesAllowed = false;
    $request->patchDeploymentInput->patchConfig->postStep = new ExecStep();
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig = new ExecStepConfig();
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->allowedSuccessCodes = [
        338007,
    ];
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->gcsObject = new GcsObject();
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->gcsObject->bucket = 'vitae';
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->gcsObject->generationNumber = 'laborum';
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->gcsObject->object = 'animi';
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::NONE;
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->localPath = 'odit';
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig = new ExecStepConfig();
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->allowedSuccessCodes = [
        196582,
        949572,
        368725,
        662527,
    ];
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->gcsObject = new GcsObject();
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->gcsObject->bucket = 'possimus';
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->gcsObject->generationNumber = 'aut';
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->gcsObject->object = 'quasi';
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::SHELL;
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->localPath = 'temporibus';
    $request->patchDeploymentInput->patchConfig->preStep = new ExecStep();
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig = new ExecStepConfig();
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->allowedSuccessCodes = [
        96098,
        971945,
        976460,
    ];
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->gcsObject = new GcsObject();
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->gcsObject->bucket = 'vero';
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->gcsObject->generationNumber = 'nihil';
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->gcsObject->object = 'praesentium';
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::POWERSHELL;
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->localPath = 'ipsa';
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig = new ExecStepConfig();
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->allowedSuccessCodes = [
        451159,
        739264,
        19987,
    ];
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->gcsObject = new GcsObject();
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->gcsObject->bucket = 'doloremque';
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->gcsObject->generationNumber = 'reprehenderit';
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->gcsObject->object = 'ut';
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::POWERSHELL;
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->localPath = 'dicta';
    $request->patchDeploymentInput->patchConfig->rebootConfig = PatchConfigRebootConfigEnum::DEFAULT;
    $request->patchDeploymentInput->patchConfig->windowsUpdate = new WindowsUpdateSettings();
    $request->patchDeploymentInput->patchConfig->windowsUpdate->classifications = [
        WindowsUpdateSettingsClassificationsEnum::DRIVER,
        WindowsUpdateSettingsClassificationsEnum::CRITICAL,
    ];
    $request->patchDeploymentInput->patchConfig->windowsUpdate->excludes = [
        'enim',
        'accusamus',
        'commodi',
    ];
    $request->patchDeploymentInput->patchConfig->windowsUpdate->exclusivePatches = [
        'quae',
        'ipsum',
        'quidem',
        'molestias',
    ];
    $request->patchDeploymentInput->patchConfig->yum = new YumSettings();
    $request->patchDeploymentInput->patchConfig->yum->excludes = [
        'pariatur',
        'modi',
        'praesentium',
    ];
    $request->patchDeploymentInput->patchConfig->yum->exclusivePackages = [
        'voluptates',
        'quasi',
        'repudiandae',
    ];
    $request->patchDeploymentInput->patchConfig->yum->minimal = false;
    $request->patchDeploymentInput->patchConfig->yum->security = false;
    $request->patchDeploymentInput->patchConfig->zypper = new ZypperSettings();
    $request->patchDeploymentInput->patchConfig->zypper->categories = [
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->patchDeploymentInput->patchConfig->zypper->excludes = [
        'consequatur',
        'est',
    ];
    $request->patchDeploymentInput->patchConfig->zypper->exclusivePatches = [
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];
    $request->patchDeploymentInput->patchConfig->zypper->severities = [
        'modi',
        'qui',
    ];
    $request->patchDeploymentInput->patchConfig->zypper->withOptional = false;
    $request->patchDeploymentInput->patchConfig->zypper->withUpdate = false;
    $request->patchDeploymentInput->recurringSchedule = new RecurringScheduleInput();
    $request->patchDeploymentInput->recurringSchedule->endTime = 'aliquid';
    $request->patchDeploymentInput->recurringSchedule->frequency = RecurringScheduleFrequencyEnum::MONTHLY;
    $request->patchDeploymentInput->recurringSchedule->monthly = new MonthlySchedule();
    $request->patchDeploymentInput->recurringSchedule->monthly->monthDay = 552822;
    $request->patchDeploymentInput->recurringSchedule->monthly->weekDayOfMonth = new WeekDayOfMonth();
    $request->patchDeploymentInput->recurringSchedule->monthly->weekDayOfMonth->dayOfWeek = WeekDayOfMonthDayOfWeekEnum::DAY_OF_WEEK_UNSPECIFIED;
    $request->patchDeploymentInput->recurringSchedule->monthly->weekDayOfMonth->dayOffset = 164940;
    $request->patchDeploymentInput->recurringSchedule->monthly->weekDayOfMonth->weekOrdinal = 828940;
    $request->patchDeploymentInput->recurringSchedule->startTime = 'ipsam';
    $request->patchDeploymentInput->recurringSchedule->timeOfDay = new TimeOfDay();
    $request->patchDeploymentInput->recurringSchedule->timeOfDay->hours = 4695;
    $request->patchDeploymentInput->recurringSchedule->timeOfDay->minutes = 146441;
    $request->patchDeploymentInput->recurringSchedule->timeOfDay->nanos = 677817;
    $request->patchDeploymentInput->recurringSchedule->timeOfDay->seconds = 569618;
    $request->patchDeploymentInput->recurringSchedule->timeZone = new TimeZone();
    $request->patchDeploymentInput->recurringSchedule->timeZone->id = '4bb4f63c-969e-49a3-afa7-7dfb14cd66ae';
    $request->patchDeploymentInput->recurringSchedule->timeZone->version = 'non';
    $request->patchDeploymentInput->recurringSchedule->weekly = new WeeklySchedule();
    $request->patchDeploymentInput->recurringSchedule->weekly->dayOfWeek = WeeklyScheduleDayOfWeekEnum::THURSDAY;
    $request->patchDeploymentInput->rollout = new PatchRollout();
    $request->patchDeploymentInput->rollout->disruptionBudget = new FixedOrPercent();
    $request->patchDeploymentInput->rollout->disruptionBudget->fixed = 313218;
    $request->patchDeploymentInput->rollout->disruptionBudget->percent = 881736;
    $request->patchDeploymentInput->rollout->mode = PatchRolloutModeEnum::CONCURRENT_ZONES;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->fields = 'id';
    $request->key = 'blanditiis';
    $request->oauthToken = 'deleniti';
    $request->parent = 'sapiente';
    $request->patchDeploymentId = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'vel';

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
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'nihil';
    $request->key = 'magnam';
    $request->name = 'Alfonso Green';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'vero';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'et';
    $request->fields = 'excepturi';
    $request->key = 'ullam';
    $request->oauthToken = 'provident';
    $request->pageSize = 551816;
    $request->pageToken = 'sint';
    $request->parent = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'mollitia';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->patchDeploymentInput = new PatchDeploymentInput();
    $request->patchDeploymentInput->description = 'eum';
    $request->patchDeploymentInput->duration = 'dolor';
    $request->patchDeploymentInput->instanceFilter = new PatchInstanceFilter();
    $request->patchDeploymentInput->instanceFilter->all = false;
    $request->patchDeploymentInput->instanceFilter->groupLabels = [
        new PatchInstanceFilterGroupLabel(),
        new PatchInstanceFilterGroupLabel(),
        new PatchInstanceFilterGroupLabel(),
        new PatchInstanceFilterGroupLabel(),
    ];
    $request->patchDeploymentInput->instanceFilter->instanceNamePrefixes = [
        'nemo',
    ];
    $request->patchDeploymentInput->instanceFilter->instances = [
        'iure',
    ];
    $request->patchDeploymentInput->instanceFilter->zones = [
        'debitis',
        'eius',
        'maxime',
        'deleniti',
    ];
    $request->patchDeploymentInput->name = 'Dr. Arnold Bradtke';
    $request->patchDeploymentInput->oneTimeSchedule = new OneTimeSchedule();
    $request->patchDeploymentInput->oneTimeSchedule->executeTime = 'expedita';
    $request->patchDeploymentInput->patchConfig = new PatchConfig();
    $request->patchDeploymentInput->patchConfig->apt = new AptSettings();
    $request->patchDeploymentInput->patchConfig->apt->excludes = [
        'repellat',
        'quibusdam',
    ];
    $request->patchDeploymentInput->patchConfig->apt->exclusivePackages = [
        'saepe',
    ];
    $request->patchDeploymentInput->patchConfig->apt->type = AptSettingsTypeEnum::UPGRADE;
    $request->patchDeploymentInput->patchConfig->goo = [
        'consequuntur' => 'praesentium',
    ];
    $request->patchDeploymentInput->patchConfig->migInstancesAllowed = false;
    $request->patchDeploymentInput->patchConfig->postStep = new ExecStep();
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig = new ExecStepConfig();
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->allowedSuccessCodes = [
        166847,
        123820,
        779051,
    ];
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->gcsObject = new GcsObject();
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->gcsObject->bucket = 'illum';
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->gcsObject->generationNumber = 'pariatur';
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->gcsObject->object = 'maxime';
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::NONE;
    $request->patchDeploymentInput->patchConfig->postStep->linuxExecStepConfig->localPath = 'excepturi';
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig = new ExecStepConfig();
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->allowedSuccessCodes = [
        407183,
    ];
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->gcsObject = new GcsObject();
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->gcsObject->bucket = 'accusantium';
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->gcsObject->generationNumber = 'ab';
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->gcsObject->object = 'maiores';
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::SHELL;
    $request->patchDeploymentInput->patchConfig->postStep->windowsExecStepConfig->localPath = 'ipsam';
    $request->patchDeploymentInput->patchConfig->preStep = new ExecStep();
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig = new ExecStepConfig();
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->allowedSuccessCodes = [
        420075,
        722056,
    ];
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->gcsObject = new GcsObject();
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->gcsObject->bucket = 'eaque';
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->gcsObject->generationNumber = 'pariatur';
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->gcsObject->object = 'nemo';
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::POWERSHELL;
    $request->patchDeploymentInput->patchConfig->preStep->linuxExecStepConfig->localPath = 'perferendis';
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig = new ExecStepConfig();
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->allowedSuccessCodes = [
        230742,
        11714,
        764912,
        359978,
    ];
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->gcsObject = new GcsObject();
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->gcsObject->bucket = 'hic';
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->gcsObject->generationNumber = 'libero';
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->gcsObject->object = 'nobis';
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::INTERPRETER_UNSPECIFIED;
    $request->patchDeploymentInput->patchConfig->preStep->windowsExecStepConfig->localPath = 'quis';
    $request->patchDeploymentInput->patchConfig->rebootConfig = PatchConfigRebootConfigEnum::ALWAYS;
    $request->patchDeploymentInput->patchConfig->windowsUpdate = new WindowsUpdateSettings();
    $request->patchDeploymentInput->patchConfig->windowsUpdate->classifications = [
        WindowsUpdateSettingsClassificationsEnum::CLASSIFICATION_UNSPECIFIED,
        WindowsUpdateSettingsClassificationsEnum::DEFINITION,
    ];
    $request->patchDeploymentInput->patchConfig->windowsUpdate->excludes = [
        'eos',
    ];
    $request->patchDeploymentInput->patchConfig->windowsUpdate->exclusivePatches = [
        'dolores',
    ];
    $request->patchDeploymentInput->patchConfig->yum = new YumSettings();
    $request->patchDeploymentInput->patchConfig->yum->excludes = [
        'quam',
        'dolor',
        'vero',
        'nostrum',
    ];
    $request->patchDeploymentInput->patchConfig->yum->exclusivePackages = [
        'recusandae',
        'omnis',
        'facilis',
        'perspiciatis',
    ];
    $request->patchDeploymentInput->patchConfig->yum->minimal = false;
    $request->patchDeploymentInput->patchConfig->yum->security = false;
    $request->patchDeploymentInput->patchConfig->zypper = new ZypperSettings();
    $request->patchDeploymentInput->patchConfig->zypper->categories = [
        'porro',
    ];
    $request->patchDeploymentInput->patchConfig->zypper->excludes = [
        'blanditiis',
    ];
    $request->patchDeploymentInput->patchConfig->zypper->exclusivePatches = [
        'eaque',
        'occaecati',
        'rerum',
    ];
    $request->patchDeploymentInput->patchConfig->zypper->severities = [
        'asperiores',
    ];
    $request->patchDeploymentInput->patchConfig->zypper->withOptional = false;
    $request->patchDeploymentInput->patchConfig->zypper->withUpdate = false;
    $request->patchDeploymentInput->recurringSchedule = new RecurringScheduleInput();
    $request->patchDeploymentInput->recurringSchedule->endTime = 'earum';
    $request->patchDeploymentInput->recurringSchedule->frequency = RecurringScheduleFrequencyEnum::WEEKLY;
    $request->patchDeploymentInput->recurringSchedule->monthly = new MonthlySchedule();
    $request->patchDeploymentInput->recurringSchedule->monthly->monthDay = 613966;
    $request->patchDeploymentInput->recurringSchedule->monthly->weekDayOfMonth = new WeekDayOfMonth();
    $request->patchDeploymentInput->recurringSchedule->monthly->weekDayOfMonth->dayOfWeek = WeekDayOfMonthDayOfWeekEnum::FRIDAY;
    $request->patchDeploymentInput->recurringSchedule->monthly->weekDayOfMonth->dayOffset = 535633;
    $request->patchDeploymentInput->recurringSchedule->monthly->weekDayOfMonth->weekOrdinal = 864282;
    $request->patchDeploymentInput->recurringSchedule->startTime = 'provident';
    $request->patchDeploymentInput->recurringSchedule->timeOfDay = new TimeOfDay();
    $request->patchDeploymentInput->recurringSchedule->timeOfDay->hours = 750844;
    $request->patchDeploymentInput->recurringSchedule->timeOfDay->minutes = 730122;
    $request->patchDeploymentInput->recurringSchedule->timeOfDay->nanos = 964490;
    $request->patchDeploymentInput->recurringSchedule->timeOfDay->seconds = 311945;
    $request->patchDeploymentInput->recurringSchedule->timeZone = new TimeZone();
    $request->patchDeploymentInput->recurringSchedule->timeZone->id = '8633323f-9b77-4f3a-8100-674ebf69280d';
    $request->patchDeploymentInput->recurringSchedule->timeZone->version = 'ab';
    $request->patchDeploymentInput->recurringSchedule->weekly = new WeeklySchedule();
    $request->patchDeploymentInput->recurringSchedule->weekly->dayOfWeek = WeeklyScheduleDayOfWeekEnum::FRIDAY;
    $request->patchDeploymentInput->rollout = new PatchRollout();
    $request->patchDeploymentInput->rollout->disruptionBudget = new FixedOrPercent();
    $request->patchDeploymentInput->rollout->disruptionBudget->fixed = 679393;
    $request->patchDeploymentInput->rollout->disruptionBudget->percent = 478596;
    $request->patchDeploymentInput->rollout->mode = PatchRolloutModeEnum::ZONE_BY_ZONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->fields = 'necessitatibus';
    $request->key = 'distinctio';
    $request->name = 'Jessie Emmerich';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->updateMask = 'aspernatur';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'amet';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'ad' => 'saepe',
        'suscipit' => 'deserunt',
        'provident' => 'minima',
        'repellendus' => 'totam',
    ];
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'quaerat';
    $request->key = 'tempora';
    $request->name = 'Bernadette Torp';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'iusto';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'tenetur' => 'amet',
        'tempore' => 'accusamus',
        'numquam' => 'enim',
        'dolorem' => 'sapiente',
    ];
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->fields = 'expedita';
    $request->key = 'neque';
    $request->name = 'Gina Renner';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'qui';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'pariatur' => 'soluta',
        'dicta' => 'laborum',
        'totam' => 'incidunt',
        'aspernatur' => 'dolores',
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquid';
    $request->fields = 'quam';
    $request->key = 'molestias';
    $request->name = 'Shawn Doyle';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'sunt';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'nam';

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
    $request->executePatchJobRequest->description = 'voluptatem';
    $request->executePatchJobRequest->displayName = 'cumque';
    $request->executePatchJobRequest->dryRun = false;
    $request->executePatchJobRequest->duration = 'soluta';
    $request->executePatchJobRequest->instanceFilter = new PatchInstanceFilter();
    $request->executePatchJobRequest->instanceFilter->all = false;
    $request->executePatchJobRequest->instanceFilter->groupLabels = [
        new PatchInstanceFilterGroupLabel(),
        new PatchInstanceFilterGroupLabel(),
        new PatchInstanceFilterGroupLabel(),
    ];
    $request->executePatchJobRequest->instanceFilter->instanceNamePrefixes = [
        'saepe',
    ];
    $request->executePatchJobRequest->instanceFilter->instances = [
        'veritatis',
    ];
    $request->executePatchJobRequest->instanceFilter->zones = [
        'quos',
        'tempore',
        'cupiditate',
    ];
    $request->executePatchJobRequest->patchConfig = new PatchConfig();
    $request->executePatchJobRequest->patchConfig->apt = new AptSettings();
    $request->executePatchJobRequest->patchConfig->apt->excludes = [
        'delectus',
    ];
    $request->executePatchJobRequest->patchConfig->apt->exclusivePackages = [
        'dolore',
    ];
    $request->executePatchJobRequest->patchConfig->apt->type = AptSettingsTypeEnum::TYPE_UNSPECIFIED;
    $request->executePatchJobRequest->patchConfig->goo = [
        'dolorum' => 'architecto',
    ];
    $request->executePatchJobRequest->patchConfig->migInstancesAllowed = false;
    $request->executePatchJobRequest->patchConfig->postStep = new ExecStep();
    $request->executePatchJobRequest->patchConfig->postStep->linuxExecStepConfig = new ExecStepConfig();
    $request->executePatchJobRequest->patchConfig->postStep->linuxExecStepConfig->allowedSuccessCodes = [
        16429,
    ];
    $request->executePatchJobRequest->patchConfig->postStep->linuxExecStepConfig->gcsObject = new GcsObject();
    $request->executePatchJobRequest->patchConfig->postStep->linuxExecStepConfig->gcsObject->bucket = 'quas';
    $request->executePatchJobRequest->patchConfig->postStep->linuxExecStepConfig->gcsObject->generationNumber = 'itaque';
    $request->executePatchJobRequest->patchConfig->postStep->linuxExecStepConfig->gcsObject->object = 'consequatur';
    $request->executePatchJobRequest->patchConfig->postStep->linuxExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::SHELL;
    $request->executePatchJobRequest->patchConfig->postStep->linuxExecStepConfig->localPath = 'repellendus';
    $request->executePatchJobRequest->patchConfig->postStep->windowsExecStepConfig = new ExecStepConfig();
    $request->executePatchJobRequest->patchConfig->postStep->windowsExecStepConfig->allowedSuccessCodes = [
        984330,
        281730,
        703495,
        586410,
    ];
    $request->executePatchJobRequest->patchConfig->postStep->windowsExecStepConfig->gcsObject = new GcsObject();
    $request->executePatchJobRequest->patchConfig->postStep->windowsExecStepConfig->gcsObject->bucket = 'qui';
    $request->executePatchJobRequest->patchConfig->postStep->windowsExecStepConfig->gcsObject->generationNumber = 'quae';
    $request->executePatchJobRequest->patchConfig->postStep->windowsExecStepConfig->gcsObject->object = 'laudantium';
    $request->executePatchJobRequest->patchConfig->postStep->windowsExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::NONE;
    $request->executePatchJobRequest->patchConfig->postStep->windowsExecStepConfig->localPath = 'occaecati';
    $request->executePatchJobRequest->patchConfig->preStep = new ExecStep();
    $request->executePatchJobRequest->patchConfig->preStep->linuxExecStepConfig = new ExecStepConfig();
    $request->executePatchJobRequest->patchConfig->preStep->linuxExecStepConfig->allowedSuccessCodes = [
        787542,
        876506,
        606476,
        338159,
    ];
    $request->executePatchJobRequest->patchConfig->preStep->linuxExecStepConfig->gcsObject = new GcsObject();
    $request->executePatchJobRequest->patchConfig->preStep->linuxExecStepConfig->gcsObject->bucket = 'ipsum';
    $request->executePatchJobRequest->patchConfig->preStep->linuxExecStepConfig->gcsObject->generationNumber = 'delectus';
    $request->executePatchJobRequest->patchConfig->preStep->linuxExecStepConfig->gcsObject->object = 'voluptate';
    $request->executePatchJobRequest->patchConfig->preStep->linuxExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::INTERPRETER_UNSPECIFIED;
    $request->executePatchJobRequest->patchConfig->preStep->linuxExecStepConfig->localPath = 'vero';
    $request->executePatchJobRequest->patchConfig->preStep->windowsExecStepConfig = new ExecStepConfig();
    $request->executePatchJobRequest->patchConfig->preStep->windowsExecStepConfig->allowedSuccessCodes = [
        492268,
        941378,
        715561,
        799203,
    ];
    $request->executePatchJobRequest->patchConfig->preStep->windowsExecStepConfig->gcsObject = new GcsObject();
    $request->executePatchJobRequest->patchConfig->preStep->windowsExecStepConfig->gcsObject->bucket = 'odio';
    $request->executePatchJobRequest->patchConfig->preStep->windowsExecStepConfig->gcsObject->generationNumber = 'similique';
    $request->executePatchJobRequest->patchConfig->preStep->windowsExecStepConfig->gcsObject->object = 'facilis';
    $request->executePatchJobRequest->patchConfig->preStep->windowsExecStepConfig->interpreter = ExecStepConfigInterpreterEnum::POWERSHELL;
    $request->executePatchJobRequest->patchConfig->preStep->windowsExecStepConfig->localPath = 'ducimus';
    $request->executePatchJobRequest->patchConfig->rebootConfig = PatchConfigRebootConfigEnum::DEFAULT;
    $request->executePatchJobRequest->patchConfig->windowsUpdate = new WindowsUpdateSettings();
    $request->executePatchJobRequest->patchConfig->windowsUpdate->classifications = [
        WindowsUpdateSettingsClassificationsEnum::UPDATE_ROLLUP,
        WindowsUpdateSettingsClassificationsEnum::CRITICAL,
        WindowsUpdateSettingsClassificationsEnum::SERVICE_PACK,
        WindowsUpdateSettingsClassificationsEnum::TOOL,
    ];
    $request->executePatchJobRequest->patchConfig->windowsUpdate->excludes = [
        'voluptatibus',
    ];
    $request->executePatchJobRequest->patchConfig->windowsUpdate->exclusivePatches = [
        'nulla',
        'fugit',
    ];
    $request->executePatchJobRequest->patchConfig->yum = new YumSettings();
    $request->executePatchJobRequest->patchConfig->yum->excludes = [
        'maiores',
        'doloribus',
        'iusto',
        'eligendi',
    ];
    $request->executePatchJobRequest->patchConfig->yum->exclusivePackages = [
        'alias',
        'officia',
    ];
    $request->executePatchJobRequest->patchConfig->yum->minimal = false;
    $request->executePatchJobRequest->patchConfig->yum->security = false;
    $request->executePatchJobRequest->patchConfig->zypper = new ZypperSettings();
    $request->executePatchJobRequest->patchConfig->zypper->categories = [
        'ipsam',
        'ea',
    ];
    $request->executePatchJobRequest->patchConfig->zypper->excludes = [
        'vel',
    ];
    $request->executePatchJobRequest->patchConfig->zypper->exclusivePatches = [
        'magnam',
        'ratione',
        'ex',
        'laudantium',
    ];
    $request->executePatchJobRequest->patchConfig->zypper->severities = [
        'dolor',
    ];
    $request->executePatchJobRequest->patchConfig->zypper->withOptional = false;
    $request->executePatchJobRequest->patchConfig->zypper->withUpdate = false;
    $request->executePatchJobRequest->rollout = new PatchRollout();
    $request->executePatchJobRequest->rollout->disruptionBudget = new FixedOrPercent();
    $request->executePatchJobRequest->rollout->disruptionBudget->fixed = 980700;
    $request->executePatchJobRequest->rollout->disruptionBudget->percent = 97844;
    $request->executePatchJobRequest->rollout->mode = PatchRolloutModeEnum::ZONE_BY_ZONE;
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'nostrum';
    $request->key = 'sapiente';
    $request->oauthToken = 'quisquam';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'corporis';

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
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsPatchJobsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsPatchJobsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magnam';
    $request->fields = 'ea';
    $request->key = 'quo';
    $request->name = 'Kate Cole DVM';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'deleniti';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'inventore';
    $request->filter = 'non';
    $request->key = 'et';
    $request->oauthToken = 'dolorum';
    $request->pageSize = 672048;
    $request->pageToken = 'placeat';
    $request->parent = 'velit';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'nobis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'libero';
    $request->filter = 'quasi';
    $request->key = 'tempora';
    $request->oauthToken = 'numquam';
    $request->pageSize = 131482;
    $request->pageToken = 'provident';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'odio';

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

## osconfigProjectsZonesInstancesLookupEffectiveGuestPolicy

Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LookupEffectiveGuestPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->lookupEffectiveGuestPolicyRequest = new LookupEffectiveGuestPolicyRequest();
    $request->lookupEffectiveGuestPolicyRequest->osArchitecture = 'esse';
    $request->lookupEffectiveGuestPolicyRequest->osShortName = 'esse';
    $request->lookupEffectiveGuestPolicyRequest->osVersion = 'rem';
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quidem';
    $request->fields = 'fugiat';
    $request->instance = 'ut';
    $request->key = 'eum';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsZonesInstancesLookupEffectiveGuestPolicy($request, $requestSecurity);

    if ($response->effectiveGuestPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
