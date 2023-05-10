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