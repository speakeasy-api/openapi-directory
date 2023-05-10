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
    ];
    $request->guestPolicyInput->assignment->instanceNamePrefixes = [
        'quibusdam',
        'unde',
        'nulla',
    ];
    $request->guestPolicyInput->assignment->instances = [
        'illum',
        'vel',
        'error',
    ];
    $request->guestPolicyInput->assignment->osTypes = [
        new AssignmentOsType(),
        new AssignmentOsType(),
        new AssignmentOsType(),
    ];
    $request->guestPolicyInput->assignment->zones = [
        'iure',
        'magnam',
    ];
    $request->guestPolicyInput->description = 'debitis';
    $request->guestPolicyInput->etag = 'ipsa';
    $request->guestPolicyInput->name = 'Ricky Hoppe';
    $request->guestPolicyInput->packageRepositories = [
        new PackageRepository(),
        new PackageRepository(),
        new PackageRepository(),
        new PackageRepository(),
    ];
    $request->guestPolicyInput->packages = [
        new Package(),
        new Package(),
        new Package(),
    ];
    $request->guestPolicyInput->recipes = [
        new SoftwareRecipe(),
        new SoftwareRecipe(),
    ];
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'temporibus';
    $request->guestPolicyId = 'ab';
    $request->key = 'quis';
    $request->oauthToken = 'veritatis';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'repellendus';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [osconfigProjectsGuestPoliciesCreate](docs/projects/README.md#osconfigprojectsguestpoliciescreate) - Create an OS Config guest policy.
* [osconfigProjectsGuestPoliciesList](docs/projects/README.md#osconfigprojectsguestpolicieslist) - Get a page of OS Config guest policies.
* [osconfigProjectsPatchDeploymentsCreate](docs/projects/README.md#osconfigprojectspatchdeploymentscreate) - Create an OS Config patch deployment.
* [osconfigProjectsPatchDeploymentsDelete](docs/projects/README.md#osconfigprojectspatchdeploymentsdelete) - Delete an OS Config patch deployment.
* [osconfigProjectsPatchDeploymentsList](docs/projects/README.md#osconfigprojectspatchdeploymentslist) - Get a page of OS Config patch deployments.
* [osconfigProjectsPatchDeploymentsPatch](docs/projects/README.md#osconfigprojectspatchdeploymentspatch) - Update an OS Config patch deployment.
* [osconfigProjectsPatchDeploymentsPause](docs/projects/README.md#osconfigprojectspatchdeploymentspause) - Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
* [osconfigProjectsPatchDeploymentsResume](docs/projects/README.md#osconfigprojectspatchdeploymentsresume) - Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
* [osconfigProjectsPatchJobsCancel](docs/projects/README.md#osconfigprojectspatchjobscancel) - Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
* [osconfigProjectsPatchJobsExecute](docs/projects/README.md#osconfigprojectspatchjobsexecute) - Patch VM instances by creating and running a patch job.
* [osconfigProjectsPatchJobsGet](docs/projects/README.md#osconfigprojectspatchjobsget) - Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
* [osconfigProjectsPatchJobsInstanceDetailsList](docs/projects/README.md#osconfigprojectspatchjobsinstancedetailslist) - Get a list of instance details for a given patch job.
* [osconfigProjectsPatchJobsList](docs/projects/README.md#osconfigprojectspatchjobslist) - Get a list of patch jobs.
* [osconfigProjectsZonesInstancesLookupEffectiveGuestPolicy](docs/projects/README.md#osconfigprojectszonesinstanceslookupeffectiveguestpolicy) - Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
