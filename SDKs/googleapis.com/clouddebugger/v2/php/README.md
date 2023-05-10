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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [controller](docs/controller/README.md)

* [clouddebuggerControllerDebuggeesBreakpointsList](docs/controller/README.md#clouddebuggercontrollerdebuggeesbreakpointslist) - Returns the list of all active breakpoints for the debuggee. The breakpoint specification (`location`, `condition`, and `expressions` fields) is semantically immutable, although the field values may change. For example, an agent may update the location line number to reflect the actual line where the breakpoint was set, but this doesn't change the breakpoint semantics. This means that an agent does not need to check if a breakpoint has changed when it encounters the same breakpoint on a successive call. Moreover, an agent should remember the breakpoints that are completed until the controller removes them from the active list to avoid setting those breakpoints again.
* [clouddebuggerControllerDebuggeesBreakpointsUpdate](docs/controller/README.md#clouddebuggercontrollerdebuggeesbreakpointsupdate) - Updates the breakpoint state or mutable fields. The entire Breakpoint message must be sent back to the controller service. Updates to active breakpoint fields are only allowed if the new value does not change the breakpoint specification. Updates to the `location`, `condition` and `expressions` fields should not alter the breakpoint semantics. These may only make changes such as canonicalizing a value or snapping the location to the correct line of code.
* [clouddebuggerControllerDebuggeesRegister](docs/controller/README.md#clouddebuggercontrollerdebuggeesregister) - Registers the debuggee with the controller service. All agents attached to the same application must call this method with exactly the same request content to get back the same stable `debuggee_id`. Agents should call this method again whenever `google.rpc.Code.NOT_FOUND` is returned from any controller method. This protocol allows the controller service to disable debuggees, recover from data loss, or change the `debuggee_id` format. Agents must handle `debuggee_id` value changing upon re-registration.

### [debugger](docs/debugger/README.md)

* [clouddebuggerDebuggerDebuggeesBreakpointsDelete](docs/debugger/README.md#clouddebuggerdebuggerdebuggeesbreakpointsdelete) - Deletes the breakpoint from the debuggee.
* [clouddebuggerDebuggerDebuggeesBreakpointsGet](docs/debugger/README.md#clouddebuggerdebuggerdebuggeesbreakpointsget) - Gets breakpoint information.
* [clouddebuggerDebuggerDebuggeesBreakpointsList](docs/debugger/README.md#clouddebuggerdebuggerdebuggeesbreakpointslist) - Lists all breakpoints for the debuggee.
* [clouddebuggerDebuggerDebuggeesBreakpointsSet](docs/debugger/README.md#clouddebuggerdebuggerdebuggeesbreakpointsset) - Sets the breakpoint to the debuggee.
* [clouddebuggerDebuggerDebuggeesList](docs/debugger/README.md#clouddebuggerdebuggerdebuggeeslist) - Lists all the debuggees that the user has access to.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
