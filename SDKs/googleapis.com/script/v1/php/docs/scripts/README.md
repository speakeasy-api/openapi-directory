# scripts

### Available Operations

* [scriptScriptsRun](#scriptscriptsrun) - Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project **Overview** page and scroll down to "Project OAuth Scopes." The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.

## scriptScriptsRun

Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project **Overview** page and scroll down to "Project OAuth Scopes." The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ScriptScriptsRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScriptScriptsRunSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ScriptScriptsRunSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ScriptScriptsRunSecurityOption10;
use \OpenAPI\OpenAPI\Models\Operations\ScriptScriptsRunSecurityOption11;
use \OpenAPI\OpenAPI\Models\Operations\ScriptScriptsRunSecurityOption12;
use \OpenAPI\OpenAPI\Models\Operations\ScriptScriptsRunSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ScriptScriptsRunSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ScriptScriptsRunSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\ScriptScriptsRunSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\ScriptScriptsRunSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\ScriptScriptsRunSecurityOption7;
use \OpenAPI\OpenAPI\Models\Operations\ScriptScriptsRunSecurityOption8;
use \OpenAPI\OpenAPI\Models\Operations\ScriptScriptsRunSecurityOption9;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScriptScriptsRunRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->executionRequest = new ExecutionRequest();
    $request->executionRequest->devMode = false;
    $request->executionRequest->function = 'labore';
    $request->executionRequest->parameters = [
        'suscipit',
        'natus',
    ];
    $request->executionRequest->sessionState = 'nobis';
    $request->accessToken = 'eum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aspernatur';
    $request->fields = 'architecto';
    $request->key = 'magnam';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->scriptId = 'ullam';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new ScriptScriptsRunSecurity();
    $requestSecurity->option1 = new ScriptScriptsRunSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->scripts->scriptScriptsRun($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
