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
use \OpenAPI\OpenAPI\Models\Operations\ScriptProcessesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProcessesListUserProcessFilterStatusesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProcessesListUserProcessFilterTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProcessesListUserProcessFilterUserAccessLevelsEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProcessesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScriptProcessesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->pageSize = 847252;
    $request->pageToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';
    $request->userProcessFilterDeploymentId = 'iure';
    $request->userProcessFilterEndTime = 'magnam';
    $request->userProcessFilterFunctionName = 'debitis';
    $request->userProcessFilterProjectName = 'ipsa';
    $request->userProcessFilterScriptId = 'delectus';
    $request->userProcessFilterStartTime = 'tempora';
    $request->userProcessFilterStatuses = [
        ScriptProcessesListUserProcessFilterStatusesEnum::CANCELED,
        ScriptProcessesListUserProcessFilterStatusesEnum::UNKNOWN,
    ];
    $request->userProcessFilterTypes = [
        ScriptProcessesListUserProcessFilterTypesEnum::WEBAPP,
        ScriptProcessesListUserProcessFilterTypesEnum::TRIGGER,
        ScriptProcessesListUserProcessFilterTypesEnum::WEBAPP,
        ScriptProcessesListUserProcessFilterTypesEnum::TIME_DRIVEN,
    ];
    $request->userProcessFilterUserAccessLevels = [
        ScriptProcessesListUserProcessFilterUserAccessLevelsEnum::OWNER,
        ScriptProcessesListUserProcessFilterUserAccessLevelsEnum::USER_ACCESS_LEVEL_UNSPECIFIED,
        ScriptProcessesListUserProcessFilterUserAccessLevelsEnum::NONE,
        ScriptProcessesListUserProcessFilterUserAccessLevelsEnum::USER_ACCESS_LEVEL_UNSPECIFIED,
    ];

    $requestSecurity = new ScriptProcessesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->processes->scriptProcessesList($request, $requestSecurity);

    if ($response->listUserProcessesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [processes](docs/processes/README.md)

* [scriptProcessesList](docs/processes/README.md#scriptprocesseslist) - List information about processes made by or on behalf of a user, such as process type and current status.
* [scriptProcessesListScriptProcesses](docs/processes/README.md#scriptprocesseslistscriptprocesses) - List information about a script's executed processes, such as process type and current status.

### [projects](docs/projects/README.md)

* [scriptProjectsCreate](docs/projects/README.md#scriptprojectscreate) - Creates a new, empty script project with no script files and a base manifest file.
* [scriptProjectsDeploymentsCreate](docs/projects/README.md#scriptprojectsdeploymentscreate) - Creates a deployment of an Apps Script project.
* [scriptProjectsDeploymentsDelete](docs/projects/README.md#scriptprojectsdeploymentsdelete) - Deletes a deployment of an Apps Script project.
* [scriptProjectsDeploymentsGet](docs/projects/README.md#scriptprojectsdeploymentsget) - Gets a deployment of an Apps Script project.
* [scriptProjectsDeploymentsList](docs/projects/README.md#scriptprojectsdeploymentslist) - Lists the deployments of an Apps Script project.
* [scriptProjectsDeploymentsUpdate](docs/projects/README.md#scriptprojectsdeploymentsupdate) - Updates a deployment of an Apps Script project.
* [scriptProjectsGet](docs/projects/README.md#scriptprojectsget) - Gets a script project's metadata.
* [scriptProjectsGetContent](docs/projects/README.md#scriptprojectsgetcontent) - Gets the content of the script project, including the code source and metadata for each script file.
* [scriptProjectsGetMetrics](docs/projects/README.md#scriptprojectsgetmetrics) - Get metrics data for scripts, such as number of executions and active users.
* [scriptProjectsUpdateContent](docs/projects/README.md#scriptprojectsupdatecontent) - Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.
* [scriptProjectsVersionsCreate](docs/projects/README.md#scriptprojectsversionscreate) - Creates a new immutable version using the current code, with a unique version number.
* [scriptProjectsVersionsGet](docs/projects/README.md#scriptprojectsversionsget) - Gets a version of a script project.
* [scriptProjectsVersionsList](docs/projects/README.md#scriptprojectsversionslist) - List the versions of a script project.

### [scripts](docs/scripts/README.md)

* [scriptScriptsRun](docs/scripts/README.md#scriptscriptsrun) - Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project **Overview** page and scroll down to "Project OAuth Scopes." The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
