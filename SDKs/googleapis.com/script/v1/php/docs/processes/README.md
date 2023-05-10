# processes

### Available Operations

* [scriptProcessesList](#scriptprocesseslist) - List information about processes made by or on behalf of a user, such as process type and current status.
* [scriptProcessesListScriptProcesses](#scriptprocesseslistscriptprocesses) - List information about a script's executed processes, such as process type and current status.

## scriptProcessesList

List information about processes made by or on behalf of a user, such as process type and current status.

### Example Usage

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
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellendus';
    $request->fields = 'sapiente';
    $request->key = 'quo';
    $request->oauthToken = 'odit';
    $request->pageSize = 870013;
    $request->pageToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'quod';
    $request->userProcessFilterDeploymentId = 'quod';
    $request->userProcessFilterEndTime = 'esse';
    $request->userProcessFilterFunctionName = 'totam';
    $request->userProcessFilterProjectName = 'porro';
    $request->userProcessFilterScriptId = 'dolorum';
    $request->userProcessFilterStartTime = 'dicta';
    $request->userProcessFilterStatuses = [
        ScriptProcessesListUserProcessFilterStatusesEnum::FAILED,
        ScriptProcessesListUserProcessFilterStatusesEnum::FAILED,
        ScriptProcessesListUserProcessFilterStatusesEnum::RUNNING,
    ];
    $request->userProcessFilterTypes = [
        ScriptProcessesListUserProcessFilterTypesEnum::BATCH_TASK,
        ScriptProcessesListUserProcessFilterTypesEnum::SIMPLE_TRIGGER,
        ScriptProcessesListUserProcessFilterTypesEnum::WEBAPP,
    ];
    $request->userProcessFilterUserAccessLevels = [
        ScriptProcessesListUserProcessFilterUserAccessLevelsEnum::READ,
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

## scriptProcessesListScriptProcesses

List information about a script's executed processes, such as process type and current status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProcessesListScriptProcessesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptProcessesListScriptProcessesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScriptProcessesListScriptProcessesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'cum';
    $request->key = 'esse';
    $request->oauthToken = 'ipsum';
    $request->pageSize = 568434;
    $request->pageToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->scriptId = 'ad';
    $request->scriptProcessFilterDeploymentId = 'natus';
    $request->scriptProcessFilterEndTime = 'sed';
    $request->scriptProcessFilterFunctionName = 'iste';
    $request->scriptProcessFilterStartTime = 'dolor';
    $request->scriptProcessFilterStatuses = [
        ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum::COMPLETED,
        ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum::DELAYED,
        ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum::DELAYED,
    ];
    $request->scriptProcessFilterTypes = [
        ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum::TRIGGER,
        ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum::TIME_DRIVEN,
        ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum::EDITOR,
    ];
    $request->scriptProcessFilterUserAccessLevels = [
        ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum::OWNER,
        ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum::WRITE,
    ];
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new ScriptProcessesListScriptProcessesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->processes->scriptProcessesListScriptProcesses($request, $requestSecurity);

    if ($response->listScriptProcessesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
