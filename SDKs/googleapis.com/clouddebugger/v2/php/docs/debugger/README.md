# debugger

### Available Operations

* [clouddebuggerDebuggerDebuggeesBreakpointsDelete](#clouddebuggerdebuggerdebuggeesbreakpointsdelete) - Deletes the breakpoint from the debuggee.
* [clouddebuggerDebuggerDebuggeesBreakpointsGet](#clouddebuggerdebuggerdebuggeesbreakpointsget) - Gets breakpoint information.
* [clouddebuggerDebuggerDebuggeesBreakpointsList](#clouddebuggerdebuggerdebuggeesbreakpointslist) - Lists all breakpoints for the debuggee.
* [clouddebuggerDebuggerDebuggeesBreakpointsSet](#clouddebuggerdebuggerdebuggeesbreakpointsset) - Sets the breakpoint to the debuggee.
* [clouddebuggerDebuggerDebuggeesList](#clouddebuggerdebuggerdebuggeeslist) - Lists all the debuggees that the user has access to.

## clouddebuggerDebuggerDebuggeesBreakpointsDelete

Deletes the breakpoint from the debuggee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->breakpointId = 'modi';
    $request->callback = 'qui';
    $request->clientVersion = 'aliquid';
    $request->debuggeeId = 'cupiditate';
    $request->fields = 'quos';
    $request->key = 'perferendis';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity();
    $requestSecurity->option1 = new ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->debugger->clouddebuggerDebuggerDebuggeesBreakpointsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddebuggerDebuggerDebuggeesBreakpointsGet

Gets breakpoint information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->breakpointId = 'tempora';
    $request->callback = 'facilis';
    $request->clientVersion = 'tempore';
    $request->debuggeeId = 'labore';
    $request->fields = 'delectus';
    $request->key = 'eum';
    $request->oauthToken = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity();
    $requestSecurity->option1 = new ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->debugger->clouddebuggerDebuggerDebuggeesBreakpointsGet($request, $requestSecurity);

    if ($response->getBreakpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddebuggerDebuggerDebuggeesBreakpointsList

Lists all breakpoints for the debuggee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddebuggerDebuggerDebuggeesBreakpointsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'necessitatibus';
    $request->actionValue = ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum::LOG;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->clientVersion = 'debitis';
    $request->debuggeeId = 'a';
    $request->fields = 'dolorum';
    $request->includeAllUsers = false;
    $request->includeInactive = false;
    $request->key = 'in';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->stripResults = false;
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'rerum';
    $request->waitToken = 'dicta';

    $requestSecurity = new ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity();
    $requestSecurity->option1 = new ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->debugger->clouddebuggerDebuggerDebuggeesBreakpointsList($request, $requestSecurity);

    if ($response->listBreakpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddebuggerDebuggerDebuggeesBreakpointsSet

Sets the breakpoint to the debuggee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
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
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->breakpoint = new Breakpoint();
    $request->breakpoint->action = BreakpointActionEnum::LOG;
    $request->breakpoint->canaryExpireTime = 'facere';
    $request->breakpoint->condition = 'ea';
    $request->breakpoint->createTime = 'aliquid';
    $request->breakpoint->evaluatedExpressions = [
        new Variable(),
        new Variable(),
        new Variable(),
    ];
    $request->breakpoint->expressions = [
        'non',
        'occaecati',
        'enim',
        'accusamus',
    ];
    $request->breakpoint->finalTime = 'delectus';
    $request->breakpoint->id = 'b9ba88f3-a669-4970-b4ba-4469b6e21419';
    $request->breakpoint->isFinalState = false;
    $request->breakpoint->labels = [
        'provident' => 'quos',
        'sint' => 'accusantium',
    ];
    $request->breakpoint->location = new SourceLocation();
    $request->breakpoint->location->column = 653201;
    $request->breakpoint->location->line = 968962;
    $request->breakpoint->location->path = 'mollitia';
    $request->breakpoint->logLevel = BreakpointLogLevelEnum::INFO;
    $request->breakpoint->logMessageFormat = 'eum';
    $request->breakpoint->stackFrames = [
        new StackFrame(),
    ];
    $request->breakpoint->state = BreakpointStateEnum::STATE_IS_FINAL;
    $request->breakpoint->status = new StatusMessage();
    $request->breakpoint->status->description = new FormatMessage();
    $request->breakpoint->status->description->format = 'odit';
    $request->breakpoint->status->description->parameters = [
        'quasi',
        'iure',
    ];
    $request->breakpoint->status->isError = false;
    $request->breakpoint->status->refersTo = StatusMessageRefersToEnum::VARIABLE_VALUE;
    $request->breakpoint->userEmail = 'debitis';
    $request->breakpoint->variableTable = [
        new Variable(),
        new Variable(),
    ];
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->canaryOption = ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum::CANARY_OPTION_TRY_ENABLE;
    $request->clientVersion = 'architecto';
    $request->debuggeeId = 'architecto';
    $request->fields = 'repudiandae';
    $request->key = 'ullam';
    $request->oauthToken = 'expedita';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity();
    $requestSecurity->option1 = new ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->debugger->clouddebuggerDebuggerDebuggeesBreakpointsSet($request, $requestSecurity);

    if ($response->setBreakpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddebuggerDebuggerDebuggeesList

Lists all the debuggees that the user has access to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ClouddebuggerDebuggerDebuggeesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddebuggerDebuggerDebuggeesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->clientVersion = 'consequuntur';
    $request->fields = 'praesentium';
    $request->includeInactive = false;
    $request->key = 'natus';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->project = 'sunt';
    $request->quotaUser = 'quo';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new ClouddebuggerDebuggerDebuggeesListSecurity();
    $requestSecurity->option1 = new ClouddebuggerDebuggerDebuggeesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->debugger->clouddebuggerDebuggerDebuggeesList($request, $requestSecurity);

    if ($response->listDebuggeesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
