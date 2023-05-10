<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerControllerDebuggeesBreakpointsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerControllerDebuggeesBreakpointsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddebuggerControllerDebuggeesBreakpointsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->agentId = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->debuggeeId = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->successOnTimeout = false;
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';
    $request->waitToken = 'iure';

    $requestSecurity = new ClouddebuggerControllerDebuggeesBreakpointsListSecurity();
    $requestSecurity->option1 = new ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->controller->clouddebuggerControllerDebuggeesBreakpointsList($request, $requestSecurity);

    if ($response->listActiveBreakpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->