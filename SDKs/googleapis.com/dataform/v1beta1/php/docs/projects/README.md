# projects

### Available Operations

* [dataformProjectsLocationsList](#dataformprojectslocationslist) - Lists information about the supported locations for this service.
* [dataformProjectsLocationsRepositoriesCompilationResultsCreate](#dataformprojectslocationsrepositoriescompilationresultscreate) - Creates a new CompilationResult in a given project and location.
* [dataformProjectsLocationsRepositoriesCompilationResultsList](#dataformprojectslocationsrepositoriescompilationresultslist) - Lists CompilationResults in a given Repository.
* [dataformProjectsLocationsRepositoriesCreate](#dataformprojectslocationsrepositoriescreate) - Creates a new Repository in a given project and location.
* [dataformProjectsLocationsRepositoriesFetchRemoteBranches](#dataformprojectslocationsrepositoriesfetchremotebranches) - Fetches a Repository's remote branches.
* [dataformProjectsLocationsRepositoriesList](#dataformprojectslocationsrepositorieslist) - Lists Repositories in a given project and location.
* [dataformProjectsLocationsRepositoriesReleaseConfigsCreate](#dataformprojectslocationsrepositoriesreleaseconfigscreate) - Creates a new ReleaseConfig in a given Repository.
* [dataformProjectsLocationsRepositoriesReleaseConfigsList](#dataformprojectslocationsrepositoriesreleaseconfigslist) - Lists ReleaseConfigs in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkflowConfigsCreate](#dataformprojectslocationsrepositoriesworkflowconfigscreate) - Creates a new WorkflowConfig in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkflowConfigsList](#dataformprojectslocationsrepositoriesworkflowconfigslist) - Lists WorkflowConfigs in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkflowConfigsPatch](#dataformprojectslocationsrepositoriesworkflowconfigspatch) - Updates a single WorkflowConfig.
* [dataformProjectsLocationsRepositoriesWorkflowInvocationsCancel](#dataformprojectslocationsrepositoriesworkflowinvocationscancel) - Requests cancellation of a running WorkflowInvocation.
* [dataformProjectsLocationsRepositoriesWorkflowInvocationsCreate](#dataformprojectslocationsrepositoriesworkflowinvocationscreate) - Creates a new WorkflowInvocation in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkflowInvocationsList](#dataformprojectslocationsrepositoriesworkflowinvocationslist) - Lists WorkflowInvocations in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkflowInvocationsQuery](#dataformprojectslocationsrepositoriesworkflowinvocationsquery) - Returns WorkflowInvocationActions in a given WorkflowInvocation.
* [dataformProjectsLocationsRepositoriesWorkspacesCommit](#dataformprojectslocationsrepositoriesworkspacescommit) - Applies a Git commit for uncommitted files in a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesCreate](#dataformprojectslocationsrepositoriesworkspacescreate) - Creates a new Workspace in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkspacesDelete](#dataformprojectslocationsrepositoriesworkspacesdelete) - Deletes a single Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesFetchFileDiff](#dataformprojectslocationsrepositoriesworkspacesfetchfilediff) - Fetches Git diff for an uncommitted file in a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatuses](#dataformprojectslocationsrepositoriesworkspacesfetchfilegitstatuses) - Fetches Git statuses for the files in a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehind](#dataformprojectslocationsrepositoriesworkspacesfetchgitaheadbehind) - Fetches Git ahead/behind against a remote branch.
* [dataformProjectsLocationsRepositoriesWorkspacesGet](#dataformprojectslocationsrepositoriesworkspacesget) - Fetches a single Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesGetIamPolicy](#dataformprojectslocationsrepositoriesworkspacesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [dataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackages](#dataformprojectslocationsrepositoriesworkspacesinstallnpmpackages) - Installs dependency NPM packages (inside a Workspace).
* [dataformProjectsLocationsRepositoriesWorkspacesList](#dataformprojectslocationsrepositoriesworkspaceslist) - Lists Workspaces in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkspacesMakeDirectory](#dataformprojectslocationsrepositoriesworkspacesmakedirectory) - Creates a directory inside a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesMoveDirectory](#dataformprojectslocationsrepositoriesworkspacesmovedirectory) - Moves a directory (inside a Workspace), and all of its contents, to a new location.
* [dataformProjectsLocationsRepositoriesWorkspacesMoveFile](#dataformprojectslocationsrepositoriesworkspacesmovefile) - Moves a file (inside a Workspace) to a new location.
* [dataformProjectsLocationsRepositoriesWorkspacesPull](#dataformprojectslocationsrepositoriesworkspacespull) - Pulls Git commits from the Repository's remote into a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesPush](#dataformprojectslocationsrepositoriesworkspacespush) - Pushes Git commits from a Workspace to the Repository's remote.
* [dataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContents](#dataformprojectslocationsrepositoriesworkspacesquerydirectorycontents) - Returns the contents of a given Workspace directory.
* [dataformProjectsLocationsRepositoriesWorkspacesReadFile](#dataformprojectslocationsrepositoriesworkspacesreadfile) - Returns the contents of a file (inside a Workspace).
* [dataformProjectsLocationsRepositoriesWorkspacesRemoveDirectory](#dataformprojectslocationsrepositoriesworkspacesremovedirectory) - Deletes a directory (inside a Workspace) and all of its contents.
* [dataformProjectsLocationsRepositoriesWorkspacesRemoveFile](#dataformprojectslocationsrepositoriesworkspacesremovefile) - Deletes a file (inside a Workspace).
* [dataformProjectsLocationsRepositoriesWorkspacesReset](#dataformprojectslocationsrepositoriesworkspacesreset) - Performs a Git reset for uncommitted files in a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesSetIamPolicy](#dataformprojectslocationsrepositoriesworkspacessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [dataformProjectsLocationsRepositoriesWorkspacesTestIamPermissions](#dataformprojectslocationsrepositoriesworkspacestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [dataformProjectsLocationsRepositoriesWorkspacesWriteFile](#dataformprojectslocationsrepositoriesworkspaceswritefile) - Writes to a file (inside a Workspace).

## dataformProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'voluptatum';
    $request->filter = 'iusto';
    $request->key = 'excepturi';
    $request->name = 'Mrs. Sophie Smith MD';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 368241;
    $request->pageToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new DataformProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesCompilationResultsCreate

Creates a new CompilationResult in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesCompilationResultsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompilationResultInput;
use \OpenAPI\OpenAPI\Models\Shared\CodeCompilationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesCompilationResultsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesCompilationResultsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->compilationResultInput = new CompilationResultInput();
    $request->compilationResultInput->codeCompilationConfig = new CodeCompilationConfig();
    $request->compilationResultInput->codeCompilationConfig->assertionSchema = 'at';
    $request->compilationResultInput->codeCompilationConfig->databaseSuffix = 'maiores';
    $request->compilationResultInput->codeCompilationConfig->defaultDatabase = 'molestiae';
    $request->compilationResultInput->codeCompilationConfig->defaultLocation = 'quod';
    $request->compilationResultInput->codeCompilationConfig->defaultSchema = 'quod';
    $request->compilationResultInput->codeCompilationConfig->schemaSuffix = 'esse';
    $request->compilationResultInput->codeCompilationConfig->tablePrefix = 'totam';
    $request->compilationResultInput->codeCompilationConfig->vars = [
        'dolorum' => 'dicta',
        'nam' => 'officia',
        'occaecati' => 'fugit',
        'deleniti' => 'hic',
    ];
    $request->compilationResultInput->gitCommitish = 'optio';
    $request->compilationResultInput->releaseConfig = 'totam';
    $request->compilationResultInput->workspace = 'beatae';
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->key = 'impedit';
    $request->oauthToken = 'cum';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new DataformProjectsLocationsRepositoriesCompilationResultsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesCompilationResultsCreate($request, $requestSecurity);

    if ($response->compilationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesCompilationResultsList

Lists CompilationResults in a given Repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesCompilationResultsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesCompilationResultsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesCompilationResultsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'iste';
    $request->key = 'dolor';
    $request->oauthToken = 'natus';
    $request->pageSize = 386489;
    $request->pageToken = 'hic';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new DataformProjectsLocationsRepositoriesCompilationResultsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesCompilationResultsList($request, $requestSecurity);

    if ($response->listCompilationResultsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesCreate

Creates a new Repository in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryInput;
use \OpenAPI\OpenAPI\Models\Shared\GitRemoteSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceCompilationOverrides;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->repositoryInput = new RepositoryInput();
    $request->repositoryInput->gitRemoteSettings = new GitRemoteSettingsInput();
    $request->repositoryInput->gitRemoteSettings->authenticationTokenSecretVersion = 'iure';
    $request->repositoryInput->gitRemoteSettings->defaultBranch = 'saepe';
    $request->repositoryInput->gitRemoteSettings->url = 'quidem';
    $request->repositoryInput->npmrcEnvironmentVariablesSecretVersion = 'architecto';
    $request->repositoryInput->workspaceCompilationOverrides = new WorkspaceCompilationOverrides();
    $request->repositoryInput->workspaceCompilationOverrides->defaultDatabase = 'ipsa';
    $request->repositoryInput->workspaceCompilationOverrides->schemaSuffix = 'reiciendis';
    $request->repositoryInput->workspaceCompilationOverrides->tablePrefix = 'est';
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'dolorem';
    $request->key = 'corporis';
    $request->oauthToken = 'explicabo';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->repositoryId = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new DataformProjectsLocationsRepositoriesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesCreate($request, $requestSecurity);

    if ($response->repository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesFetchRemoteBranches

Fetches a Repository's remote branches.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesFetchRemoteBranchesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesFetchRemoteBranchesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesFetchRemoteBranchesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'doloribus';
    $request->key = 'sapiente';
    $request->name = 'Angie Durgan';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new DataformProjectsLocationsRepositoriesFetchRemoteBranchesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesFetchRemoteBranches($request, $requestSecurity);

    if ($response->fetchRemoteBranchesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesList

Lists Repositories in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->fields = 'error';
    $request->filter = 'quia';
    $request->key = 'quis';
    $request->oauthToken = 'vitae';
    $request->orderBy = 'laborum';
    $request->pageSize = 656330;
    $request->pageToken = 'enim';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'tenetur';

    $requestSecurity = new DataformProjectsLocationsRepositoriesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesList($request, $requestSecurity);

    if ($response->listRepositoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesReleaseConfigsCreate

Creates a new ReleaseConfig in a given Repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesReleaseConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\CodeCompilationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesReleaseConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesReleaseConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->releaseConfigInput = new ReleaseConfigInput();
    $request->releaseConfigInput->codeCompilationConfig = new CodeCompilationConfig();
    $request->releaseConfigInput->codeCompilationConfig->assertionSchema = 'id';
    $request->releaseConfigInput->codeCompilationConfig->databaseSuffix = 'possimus';
    $request->releaseConfigInput->codeCompilationConfig->defaultDatabase = 'aut';
    $request->releaseConfigInput->codeCompilationConfig->defaultLocation = 'quasi';
    $request->releaseConfigInput->codeCompilationConfig->defaultSchema = 'error';
    $request->releaseConfigInput->codeCompilationConfig->schemaSuffix = 'temporibus';
    $request->releaseConfigInput->codeCompilationConfig->tablePrefix = 'laborum';
    $request->releaseConfigInput->codeCompilationConfig->vars = [
        'reiciendis' => 'voluptatibus',
    ];
    $request->releaseConfigInput->cronSchedule = 'vero';
    $request->releaseConfigInput->gitCommitish = 'nihil';
    $request->releaseConfigInput->releaseCompilationResult = 'praesentium';
    $request->releaseConfigInput->timeZone = 'voluptatibus';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'cum';
    $request->key = 'perferendis';
    $request->oauthToken = 'doloremque';
    $request->parent = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ut';
    $request->releaseConfigId = 'maiores';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new DataformProjectsLocationsRepositoriesReleaseConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesReleaseConfigsCreate($request, $requestSecurity);

    if ($response->releaseConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesReleaseConfigsList

Lists ReleaseConfigs in a given Repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesReleaseConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesReleaseConfigsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesReleaseConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'commodi';
    $request->pageSize = 918236;
    $request->pageToken = 'quae';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new DataformProjectsLocationsRepositoriesReleaseConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesReleaseConfigsList($request, $requestSecurity);

    if ($response->listReleaseConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkflowConfigsCreate

Creates a new WorkflowConfig in a given Repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkflowConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\InvocationConfig;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkflowConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkflowConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->workflowConfigInput = new WorkflowConfigInput();
    $request->workflowConfigInput->cronSchedule = 'modi';
    $request->workflowConfigInput->invocationConfig = new InvocationConfig();
    $request->workflowConfigInput->invocationConfig->fullyRefreshIncrementalTablesEnabled = false;
    $request->workflowConfigInput->invocationConfig->includedTags = [
        'rem',
        'voluptates',
        'quasi',
    ];
    $request->workflowConfigInput->invocationConfig->includedTargets = [
        new Target(),
        new Target(),
        new Target(),
        new Target(),
    ];
    $request->workflowConfigInput->invocationConfig->transitiveDependenciesIncluded = false;
    $request->workflowConfigInput->invocationConfig->transitiveDependentsIncluded = false;
    $request->workflowConfigInput->releaseConfig = 'sint';
    $request->workflowConfigInput->timeZone = 'veritatis';
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'consequatur';
    $request->key = 'est';
    $request->oauthToken = 'quibusdam';
    $request->parent = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';
    $request->workflowConfigId = 'labore';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkflowConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkflowConfigsCreate($request, $requestSecurity);

    if ($response->workflowConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkflowConfigsList

Lists WorkflowConfigs in a given Repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkflowConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkflowConfigsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkflowConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cupiditate';
    $request->fields = 'quos';
    $request->key = 'perferendis';
    $request->oauthToken = 'magni';
    $request->pageSize = 828940;
    $request->pageToken = 'ipsam';
    $request->parent = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkflowConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkflowConfigsList($request, $requestSecurity);

    if ($response->listWorkflowConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkflowConfigsPatch

Updates a single WorkflowConfig.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkflowConfigsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\InvocationConfig;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkflowConfigsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkflowConfigsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->workflowConfigInput = new WorkflowConfigInput();
    $request->workflowConfigInput->cronSchedule = 'facilis';
    $request->workflowConfigInput->invocationConfig = new InvocationConfig();
    $request->workflowConfigInput->invocationConfig->fullyRefreshIncrementalTablesEnabled = false;
    $request->workflowConfigInput->invocationConfig->includedTags = [
        'labore',
        'delectus',
        'eum',
    ];
    $request->workflowConfigInput->invocationConfig->includedTargets = [
        new Target(),
    ];
    $request->workflowConfigInput->invocationConfig->transitiveDependenciesIncluded = false;
    $request->workflowConfigInput->invocationConfig->transitiveDependentsIncluded = false;
    $request->workflowConfigInput->releaseConfig = 'eligendi';
    $request->workflowConfigInput->timeZone = 'sint';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'sint';
    $request->key = 'officia';
    $request->name = 'Raquel Wilderman';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->updateMask = 'maiores';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkflowConfigsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkflowConfigsPatch($request, $requestSecurity);

    if ($response->workflowConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkflowInvocationsCancel

Requests cancellation of a running WorkflowInvocation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkflowInvocationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkflowInvocationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkflowInvocationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'facere' => 'ea',
        'aliquid' => 'laborum',
        'accusamus' => 'non',
        'occaecati' => 'enim',
    ];
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'provident';
    $request->key = 'nam';
    $request->name = 'Nelson Lesch';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkflowInvocationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkflowInvocationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkflowInvocationsCreate

Creates a new WorkflowInvocation in a given Repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkflowInvocationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowInvocationInput;
use \OpenAPI\OpenAPI\Models\Shared\InvocationConfig;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Shared\Interval;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkflowInvocationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkflowInvocationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->workflowInvocationInput = new WorkflowInvocationInput();
    $request->workflowInvocationInput->compilationResult = 'molestiae';
    $request->workflowInvocationInput->invocationConfig = new InvocationConfig();
    $request->workflowInvocationInput->invocationConfig->fullyRefreshIncrementalTablesEnabled = false;
    $request->workflowInvocationInput->invocationConfig->includedTags = [
        'nihil',
    ];
    $request->workflowInvocationInput->invocationConfig->includedTargets = [
        new Target(),
        new Target(),
    ];
    $request->workflowInvocationInput->invocationConfig->transitiveDependenciesIncluded = false;
    $request->workflowInvocationInput->invocationConfig->transitiveDependentsIncluded = false;
    $request->workflowInvocationInput->invocationTiming = new Interval();
    $request->workflowInvocationInput->invocationTiming->endTime = 'distinctio';
    $request->workflowInvocationInput->invocationTiming->startTime = 'id';
    $request->workflowInvocationInput->workflowConfig = 'labore';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'nobis';
    $request->key = 'eum';
    $request->oauthToken = 'vero';
    $request->parent = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'et';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkflowInvocationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkflowInvocationsCreate($request, $requestSecurity);

    if ($response->workflowInvocation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkflowInvocationsList

Lists WorkflowInvocations in a given Repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkflowInvocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkflowInvocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkflowInvocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'sint';
    $request->filter = 'accusantium';
    $request->key = 'mollitia';
    $request->oauthToken = 'reiciendis';
    $request->orderBy = 'mollitia';
    $request->pageSize = 320997;
    $request->pageToken = 'eum';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkflowInvocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkflowInvocationsList($request, $requestSecurity);

    if ($response->listWorkflowInvocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkflowInvocationsQuery

Returns WorkflowInvocationActions in a given WorkflowInvocation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkflowInvocationsQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkflowInvocationsQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkflowInvocationsQueryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'debitis';
    $request->fields = 'eius';
    $request->key = 'maxime';
    $request->name = 'Mr. Andres King';
    $request->oauthToken = 'ullam';
    $request->pageSize = 714242;
    $request->pageToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkflowInvocationsQuerySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkflowInvocationsQuery($request, $requestSecurity);

    if ($response->queryWorkflowInvocationActionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesCommit

Applies a Git commit for uncommitted files in a Workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesCommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommitWorkspaceChangesRequest;
use \OpenAPI\OpenAPI\Models\Shared\CommitAuthor;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesCommitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesCommitRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->commitWorkspaceChangesRequest = new CommitWorkspaceChangesRequest();
    $request->commitWorkspaceChangesRequest->author = new CommitAuthor();
    $request->commitWorkspaceChangesRequest->author->emailAddress = 'pariatur';
    $request->commitWorkspaceChangesRequest->author->name = 'Kathryn Lang';
    $request->commitWorkspaceChangesRequest->commitMessage = 'sunt';
    $request->commitWorkspaceChangesRequest->paths = [
        'illum',
        'pariatur',
        'maxime',
        'ea',
    ];
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ea';
    $request->fields = 'accusantium';
    $request->key = 'ab';
    $request->name = 'Rickey Hintz';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesCommitSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesCommit($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesCreate

Creates a new Workspace in a given Repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'aut';
    $request->key = 'cumque';
    $request->oauthToken = 'corporis';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'dolores';
    $request->workspaceId = 'quis';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesCreate($request, $requestSecurity);

    if ($response->workspace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesDelete

Deletes a single Workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'nesciunt';
    $request->force = false;
    $request->key = 'eos';
    $request->name = 'Jacqueline Schimmel';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesFetchFileDiff

Fetches Git diff for an uncommitted file in a Workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiffRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiffSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiffRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatem';
    $request->fields = 'porro';
    $request->key = 'consequuntur';
    $request->oauthToken = 'blanditiis';
    $request->path = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'rerum';
    $request->workspace = 'adipisci';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiffSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesFetchFileDiff($request, $requestSecurity);

    if ($response->fetchFileDiffResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatuses

Fetches Git statuses for the files in a Workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatusesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatusesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatusesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'earum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'dolorum';
    $request->key = 'deleniti';
    $request->name = 'Rene Rolfson';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatusesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatuses($request, $requestSecurity);

    if ($response->fetchFileGitStatusesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehind

Fetches Git ahead/behind against a remote branch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'hic';
    $request->key = 'excepturi';
    $request->name = 'Adrian Kuhn';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->remoteBranch = 'veritatis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehind($request, $requestSecurity);

    if ($response->fetchGitAheadBehindResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesGet

Fetches a single Workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'quidem';
    $request->key = 'voluptatibus';
    $request->name = 'Faye Daugherty PhD';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'soluta';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesGet($request, $requestSecurity);

    if ($response->workspace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->fields = 'necessitatibus';
    $request->key = 'distinctio';
    $request->oauthToken = 'asperiores';
    $request->optionsRequestedPolicyVersion = 469497;
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->resource = 'voluptate';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackages

Installs dependency NPM packages (inside a Workspace).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackagesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'perferendis' => 'amet',
    ];
    $request->accessToken = 'optio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ad';
    $request->fields = 'saepe';
    $request->key = 'suscipit';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'repellendus';
    $request->workspace = 'totam';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackagesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackages($request, $requestSecurity);

    if ($response->installNpmPackagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesList

Lists Workspaces in a given Repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->fields = 'tempora';
    $request->filter = 'vel';
    $request->key = 'quod';
    $request->oauthToken = 'officiis';
    $request->orderBy = 'qui';
    $request->pageSize = 679880;
    $request->pageToken = 'a';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesList($request, $requestSecurity);

    if ($response->listWorkspacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesMakeDirectory

Creates a directory inside a Workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesMakeDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MakeDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesMakeDirectorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesMakeDirectoryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->makeDirectoryRequest = new MakeDirectoryRequest();
    $request->makeDirectoryRequest->path = 'tenetur';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'numquam';
    $request->key = 'enim';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'nihil';
    $request->workspace = 'sit';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesMakeDirectorySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesMakeDirectory($request, $requestSecurity);

    if ($response->makeDirectoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesMoveDirectory

Moves a directory (inside a Workspace), and all of its contents, to a new location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesMoveDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MoveDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesMoveDirectorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesMoveDirectoryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->moveDirectoryRequest = new MoveDirectoryRequest();
    $request->moveDirectoryRequest->newPath = 'neque';
    $request->moveDirectoryRequest->path = 'sed';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'deserunt';
    $request->key = 'quam';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'cupiditate';
    $request->workspace = 'maxime';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesMoveDirectorySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesMoveDirectory($request, $requestSecurity);

    if ($response->moveDirectoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesMoveFile

Moves a file (inside a Workspace) to a new location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesMoveFileRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MoveFileRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesMoveFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesMoveFileRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->moveFileRequest = new MoveFileRequest();
    $request->moveFileRequest->newPath = 'soluta';
    $request->moveFileRequest->path = 'dicta';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'incidunt';
    $request->fields = 'aspernatur';
    $request->key = 'dolores';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'quam';
    $request->workspace = 'molestias';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesMoveFileSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesMoveFile($request, $requestSecurity);

    if ($response->moveFileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesPull

Pulls Git commits from the Repository's remote into a Workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesPullRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PullGitCommitsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CommitAuthor;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesPullSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesPullRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->pullGitCommitsRequest = new PullGitCommitsRequest();
    $request->pullGitCommitsRequest->author = new CommitAuthor();
    $request->pullGitCommitsRequest->author->emailAddress = 'qui';
    $request->pullGitCommitsRequest->author->name = 'Beverly Cummerata II';
    $request->pullGitCommitsRequest->remoteBranch = 'nam';
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

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesPullSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesPull($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesPush

Pushes Git commits from a Workspace to the Repository's remote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesPushRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PushGitCommitsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesPushSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesPushRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->pushGitCommitsRequest = new PushGitCommitsRequest();
    $request->pushGitCommitsRequest->remoteBranch = 'dolore';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'architecto';
    $request->key = 'quae';
    $request->name = 'Miss Billie Ward';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesPushSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesPush($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContents

Returns the contents of a given Workspace directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContentsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laudantium';
    $request->fields = 'odio';
    $request->key = 'occaecati';
    $request->oauthToken = 'voluptatibus';
    $request->pageSize = 787542;
    $request->pageToken = 'vero';
    $request->path = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'delectus';
    $request->workspace = 'voluptate';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContentsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContents($request, $requestSecurity);

    if ($response->queryDirectoryContentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesReadFile

Returns the contents of a file (inside a Workspace).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesReadFileRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesReadFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesReadFileRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'hic';
    $request->key = 'distinctio';
    $request->oauthToken = 'quod';
    $request->path = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'similique';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'vero';
    $request->workspace = 'ducimus';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesReadFileSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesReadFile($request, $requestSecurity);

    if ($response->readFileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesRemoveDirectory

Deletes a directory (inside a Workspace) and all of its contents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectoryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->removeDirectoryRequest = new RemoveDirectoryRequest();
    $request->removeDirectoryRequest->path = 'quibusdam';
    $request->accessToken = 'illum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'impedit';
    $request->key = 'aut';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'exercitationem';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'fugit';
    $request->workspace = 'porro';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectorySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesRemoveDirectory($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesRemoveFile

Deletes a file (inside a Workspace).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesRemoveFileRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveFileRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesRemoveFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesRemoveFileRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->removeFileRequest = new RemoveFileRequest();
    $request->removeFileRequest->path = 'doloribus';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ducimus';
    $request->fields = 'alias';
    $request->key = 'officia';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'aspernatur';
    $request->workspace = 'vel';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesRemoveFileSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesRemoveFile($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesReset

Performs a Git reset for uncommitted files in a Workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesResetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResetWorkspaceChangesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesResetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesResetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->resetWorkspaceChangesRequest = new ResetWorkspaceChangesRequest();
    $request->resetWorkspaceChangesRequest->clean = false;
    $request->resetWorkspaceChangesRequest->paths = [
        'ratione',
        'ex',
    ];
    $request->accessToken = 'laudantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'maiores';
    $request->key = 'quasi';
    $request->name = 'Freda Marks';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesResetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesReset($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'veniam';
    $request->setIamPolicyRequest->policy->version = 399499;
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ea';
    $request->fields = 'quo';
    $request->key = 'consectetur';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->resource = 'minima';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'a';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'aut',
    ];
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquam';
    $request->fields = 'fugit';
    $request->key = 'accusamus';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->resource = 'et';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataformProjectsLocationsRepositoriesWorkspacesWriteFile

Writes to a file (inside a Workspace).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesWriteFileRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WriteFileRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataformProjectsLocationsRepositoriesWorkspacesWriteFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataformProjectsLocationsRepositoriesWorkspacesWriteFileRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->writeFileRequest = new WriteFileRequest();
    $request->writeFileRequest->contents = 'velit';
    $request->writeFileRequest->path = 'eum';
    $request->accessToken = 'autem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quas';
    $request->fields = 'assumenda';
    $request->key = 'nulla';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'tempora';
    $request->workspace = 'numquam';

    $requestSecurity = new DataformProjectsLocationsRepositoriesWorkspacesWriteFileSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataformProjectsLocationsRepositoriesWorkspacesWriteFile($request, $requestSecurity);

    if ($response->writeFileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
