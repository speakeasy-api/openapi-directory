# controller

### Available Operations

* [clouddebuggerControllerDebuggeesBreakpointsList](#clouddebuggercontrollerdebuggeesbreakpointslist) - Returns the list of all active breakpoints for the debuggee. The breakpoint specification (`location`, `condition`, and `expressions` fields) is semantically immutable, although the field values may change. For example, an agent may update the location line number to reflect the actual line where the breakpoint was set, but this doesn't change the breakpoint semantics. This means that an agent does not need to check if a breakpoint has changed when it encounters the same breakpoint on a successive call. Moreover, an agent should remember the breakpoints that are completed until the controller removes them from the active list to avoid setting those breakpoints again.
* [clouddebuggerControllerDebuggeesBreakpointsUpdate](#clouddebuggercontrollerdebuggeesbreakpointsupdate) - Updates the breakpoint state or mutable fields. The entire Breakpoint message must be sent back to the controller service. Updates to active breakpoint fields are only allowed if the new value does not change the breakpoint specification. Updates to the `location`, `condition` and `expressions` fields should not alter the breakpoint semantics. These may only make changes such as canonicalizing a value or snapping the location to the correct line of code.
* [clouddebuggerControllerDebuggeesRegister](#clouddebuggercontrollerdebuggeesregister) - Registers the debuggee with the controller service. All agents attached to the same application must call this method with exactly the same request content to get back the same stable `debuggee_id`. Agents should call this method again whenever `google.rpc.Code.NOT_FOUND` is returned from any controller method. This protocol allows the controller service to disable debuggees, recover from data loss, or change the `debuggee_id` format. Agents must handle `debuggee_id` value changing upon re-registration.

## clouddebuggerControllerDebuggeesBreakpointsList

Returns the list of all active breakpoints for the debuggee. The breakpoint specification (`location`, `condition`, and `expressions` fields) is semantically immutable, although the field values may change. For example, an agent may update the location line number to reflect the actual line where the breakpoint was set, but this doesn't change the breakpoint semantics. This means that an agent does not need to check if a breakpoint has changed when it encounters the same breakpoint on a successive call. Moreover, an agent should remember the breakpoints that are completed until the controller removes them from the active list to avoid setting those breakpoints again.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->agentId = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->debuggeeId = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatum';
    $request->successOnTimeout = false;
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'excepturi';
    $request->waitToken = 'nisi';

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

## clouddebuggerControllerDebuggeesBreakpointsUpdate

Updates the breakpoint state or mutable fields. The entire Breakpoint message must be sent back to the controller service. Updates to active breakpoint fields are only allowed if the new value does not change the breakpoint specification. Updates to the `location`, `condition` and `expressions` fields should not alter the breakpoint semantics. These may only make changes such as canonicalizing a value or snapping the location to the correct line of code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateActiveBreakpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\Breakpoint;
use \OpenAPI\OpenAPI\Models\Shared\BreakpointActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Variable;
use \OpenAPI\OpenAPI\Models\Shared\StatusMessage;
use \OpenAPI\OpenAPI\Models\Shared\FormatMessage;
use \OpenAPI\OpenAPI\Models\Shared\StatusMessageRefersToEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceLocation;
use \OpenAPI\OpenAPI\Models\Shared\BreakpointLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\StackFrame;
use \OpenAPI\OpenAPI\Models\Shared\BreakpointStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->updateActiveBreakpointRequest = new UpdateActiveBreakpointRequest();
    $request->updateActiveBreakpointRequest->breakpoint = new Breakpoint();
    $request->updateActiveBreakpointRequest->breakpoint->action = BreakpointActionEnum::LOG;
    $request->updateActiveBreakpointRequest->breakpoint->canaryExpireTime = 'ab';
    $request->updateActiveBreakpointRequest->breakpoint->condition = 'quis';
    $request->updateActiveBreakpointRequest->breakpoint->createTime = 'veritatis';
    $request->updateActiveBreakpointRequest->breakpoint->evaluatedExpressions = [
        new Variable(),
        new Variable(),
        new Variable(),
    ];
    $request->updateActiveBreakpointRequest->breakpoint->expressions = [
        'ipsam',
    ];
    $request->updateActiveBreakpointRequest->breakpoint->finalTime = 'repellendus';
    $request->updateActiveBreakpointRequest->breakpoint->id = 'fc2ddf7c-c78c-4a1b-a928-fc816742cb73';
    $request->updateActiveBreakpointRequest->breakpoint->isFinalState = false;
    $request->updateActiveBreakpointRequest->breakpoint->labels = [
        'aspernatur' => 'perferendis',
        'ad' => 'natus',
        'sed' => 'iste',
    ];
    $request->updateActiveBreakpointRequest->breakpoint->location = new SourceLocation();
    $request->updateActiveBreakpointRequest->breakpoint->location->column = 222321;
    $request->updateActiveBreakpointRequest->breakpoint->location->line = 616934;
    $request->updateActiveBreakpointRequest->breakpoint->location->path = 'laboriosam';
    $request->updateActiveBreakpointRequest->breakpoint->logLevel = BreakpointLogLevelEnum::ERROR;
    $request->updateActiveBreakpointRequest->breakpoint->logMessageFormat = 'saepe';
    $request->updateActiveBreakpointRequest->breakpoint->stackFrames = [
        new StackFrame(),
        new StackFrame(),
        new StackFrame(),
    ];
    $request->updateActiveBreakpointRequest->breakpoint->state = BreakpointStateEnum::STATE_CANARY_ACTIVE;
    $request->updateActiveBreakpointRequest->breakpoint->status = new StatusMessage();
    $request->updateActiveBreakpointRequest->breakpoint->status->description = new FormatMessage();
    $request->updateActiveBreakpointRequest->breakpoint->status->description->format = 'corporis';
    $request->updateActiveBreakpointRequest->breakpoint->status->description->parameters = [
        'iure',
        'saepe',
        'quidem',
    ];
    $request->updateActiveBreakpointRequest->breakpoint->status->isError = false;
    $request->updateActiveBreakpointRequest->breakpoint->status->refersTo = StatusMessageRefersToEnum::UNSPECIFIED;
    $request->updateActiveBreakpointRequest->breakpoint->userEmail = 'ipsa';
    $request->updateActiveBreakpointRequest->breakpoint->variableTable = [
        new Variable(),
        new Variable(),
        new Variable(),
        new Variable(),
    ];
    $request->accessToken = 'est';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->debuggeeId = 'dolores';
    $request->fields = 'dolorem';
    $request->id = '52c59559-07af-4f1a-ba2f-a9467739251a';
    $request->key = 'animi';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'sequi';

    $requestSecurity = new ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity();
    $requestSecurity->option1 = new ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->controller->clouddebuggerControllerDebuggeesBreakpointsUpdate($request, $requestSecurity);

    if ($response->updateActiveBreakpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddebuggerControllerDebuggeesRegister

Registers the debuggee with the controller service. All agents attached to the same application must call this method with exactly the same request content to get back the same stable `debuggee_id`. Agents should call this method again whenever `google.rpc.Code.NOT_FOUND` is returned from any controller method. This protocol allows the controller service to disable debuggees, recover from data loss, or change the `debuggee_id` format. Agents must handle `debuggee_id` value changing upon re-registration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerControllerDebuggeesRegisterRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegisterDebuggeeRequest;
use \OpenAPI\OpenAPI\Models\Shared\Debuggee;
use \OpenAPI\OpenAPI\Models\Shared\DebuggeeCanaryModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExtendedSourceContext;
use \OpenAPI\OpenAPI\Models\Shared\SourceContext;
use \OpenAPI\OpenAPI\Models\Shared\CloudRepoSourceContext;
use \OpenAPI\OpenAPI\Models\Shared\AliasContext;
use \OpenAPI\OpenAPI\Models\Shared\AliasContextKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\RepoId;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRepoId;
use \OpenAPI\OpenAPI\Models\Shared\CloudWorkspaceSourceContext;
use \OpenAPI\OpenAPI\Models\Shared\CloudWorkspaceId;
use \OpenAPI\OpenAPI\Models\Shared\GerritSourceContext;
use \OpenAPI\OpenAPI\Models\Shared\GitSourceContext;
use \OpenAPI\OpenAPI\Models\Shared\StatusMessage;
use \OpenAPI\OpenAPI\Models\Shared\FormatMessage;
use \OpenAPI\OpenAPI\Models\Shared\StatusMessageRefersToEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerControllerDebuggeesRegisterSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerControllerDebuggeesRegisterSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerControllerDebuggeesRegisterSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddebuggerControllerDebuggeesRegisterRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->registerDebuggeeRequest = new RegisterDebuggeeRequest();
    $request->registerDebuggeeRequest->debuggee = new Debuggee();
    $request->registerDebuggeeRequest->debuggee->agentVersion = 'ipsam';
    $request->registerDebuggeeRequest->debuggee->canaryMode = DebuggeeCanaryModeEnum::CANARY_MODE_DEFAULT_ENABLED;
    $request->registerDebuggeeRequest->debuggee->description = 'possimus';
    $request->registerDebuggeeRequest->debuggee->extSourceContexts = [
        new ExtendedSourceContext(),
    ];
    $request->registerDebuggeeRequest->debuggee->id = '19da1ffe-78f0-497b-8074-f15471b5e6e1';
    $request->registerDebuggeeRequest->debuggee->isDisabled = false;
    $request->registerDebuggeeRequest->debuggee->isInactive = false;
    $request->registerDebuggeeRequest->debuggee->labels = [
        'quidem' => 'molestias',
    ];
    $request->registerDebuggeeRequest->debuggee->project = 'excepturi';
    $request->registerDebuggeeRequest->debuggee->sourceContexts = [
        new SourceContext(),
        new SourceContext(),
        new SourceContext(),
        new SourceContext(),
    ];
    $request->registerDebuggeeRequest->debuggee->status = new StatusMessage();
    $request->registerDebuggeeRequest->debuggee->status->description = new FormatMessage();
    $request->registerDebuggeeRequest->debuggee->status->description->format = 'modi';
    $request->registerDebuggeeRequest->debuggee->status->description->parameters = [
        'rem',
        'voluptates',
        'quasi',
    ];
    $request->registerDebuggeeRequest->debuggee->status->isError = false;
    $request->registerDebuggeeRequest->debuggee->status->refersTo = StatusMessageRefersToEnum::VARIABLE_VALUE;
    $request->registerDebuggeeRequest->debuggee->uniquifier = 'sint';
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->fields = 'enim';
    $request->key = 'consequatur';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new ClouddebuggerControllerDebuggeesRegisterSecurity();
    $requestSecurity->option1 = new ClouddebuggerControllerDebuggeesRegisterSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->controller->clouddebuggerControllerDebuggeesRegister($request, $requestSecurity);

    if ($response->registerDebuggeeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
