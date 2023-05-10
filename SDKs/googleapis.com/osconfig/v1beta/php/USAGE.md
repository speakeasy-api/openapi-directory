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