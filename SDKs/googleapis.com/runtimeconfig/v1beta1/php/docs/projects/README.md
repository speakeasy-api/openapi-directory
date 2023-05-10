# projects

### Available Operations

* [runtimeconfigProjectsConfigsCreate](#runtimeconfigprojectsconfigscreate) - Creates a new RuntimeConfig resource. The configuration name must be unique within project.
* [runtimeconfigProjectsConfigsGetIamPolicy](#runtimeconfigprojectsconfigsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [runtimeconfigProjectsConfigsList](#runtimeconfigprojectsconfigslist) - Lists all the RuntimeConfig resources within project.
* [runtimeconfigProjectsConfigsSetIamPolicy](#runtimeconfigprojectsconfigssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [runtimeconfigProjectsConfigsVariablesCreate](#runtimeconfigprojectsconfigsvariablescreate) - Creates a variable within the given configuration. You cannot create a variable with a name that is a prefix of an existing variable name, or a name that has an existing variable name as a prefix. To learn more about creating a variable, read the [Setting and Getting Data](/deployment-manager/runtime-configurator/set-and-get-variables) documentation.
* [runtimeconfigProjectsConfigsVariablesList](#runtimeconfigprojectsconfigsvariableslist) - Lists variables within given a configuration, matching any provided filters. This only lists variable names, not the values, unless `return_values` is true, in which case only variables that user has IAM permission to GetVariable will be returned.
* [runtimeconfigProjectsConfigsVariablesUpdate](#runtimeconfigprojectsconfigsvariablesupdate) - Updates an existing variable with a new value.
* [runtimeconfigProjectsConfigsVariablesWatch](#runtimeconfigprojectsconfigsvariableswatch) - Watches a specific variable and waits for a change in the variable's value. When there is a change, this method returns the new value or times out. If a variable is deleted while being watched, the `variableState` state is set to `DELETED` and the method returns the last known variable `value`. If you set the deadline for watching to a larger value than internal timeout (60 seconds), the current variable value is returned and the `variableState` will be `VARIABLE_STATE_UNSPECIFIED`. To learn more about creating a watcher, read the [Watching a Variable for Changes](/deployment-manager/runtime-configurator/watching-a-variable) documentation.
* [runtimeconfigProjectsConfigsWaitersCreate](#runtimeconfigprojectsconfigswaiterscreate) - Creates a Waiter resource. This operation returns a long-running Operation resource which can be polled for completion. However, a waiter with the given name will exist (and can be retrieved) prior to the operation completing. If the operation fails, the failed Waiter resource will still exist and must be deleted prior to subsequent creation attempts.
* [runtimeconfigProjectsConfigsWaitersDelete](#runtimeconfigprojectsconfigswaitersdelete) - Deletes the waiter with the specified name.
* [runtimeconfigProjectsConfigsWaitersGet](#runtimeconfigprojectsconfigswaitersget) - Gets information about a single waiter.
* [runtimeconfigProjectsConfigsWaitersList](#runtimeconfigprojectsconfigswaiterslist) - List waiters within the given configuration.
* [runtimeconfigProjectsConfigsWaitersTestIamPermissions](#runtimeconfigprojectsconfigswaiterstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## runtimeconfigProjectsConfigsCreate

Creates a new RuntimeConfig resource. The configuration name must be unique within project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuntimeconfigProjectsConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runtimeConfig = new RuntimeConfig();
    $request->runtimeConfig->description = 'molestiae';
    $request->runtimeConfig->name = 'Irving Lehner';
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'temporibus';
    $request->fields = 'ab';
    $request->key = 'quis';
    $request->oauthToken = 'veritatis';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->requestId = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new RuntimeconfigProjectsConfigsCreateSecurity();
    $requestSecurity->option1 = new RuntimeconfigProjectsConfigsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runtimeconfigProjectsConfigsCreate($request, $requestSecurity);

    if ($response->runtimeConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runtimeconfigProjectsConfigsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsGetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuntimeconfigProjectsConfigsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'maiores';
    $request->key = 'molestiae';
    $request->oauthToken = 'quod';
    $request->optionsRequestedPolicyVersion = 800911;
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->resource = 'totam';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new RuntimeconfigProjectsConfigsGetIamPolicySecurity();
    $requestSecurity->option1 = new RuntimeconfigProjectsConfigsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runtimeconfigProjectsConfigsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runtimeconfigProjectsConfigsList

Lists all the RuntimeConfig resources within project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuntimeconfigProjectsConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'fugit';
    $request->key = 'deleniti';
    $request->oauthToken = 'hic';
    $request->pageSize = 758616;
    $request->pageToken = 'totam';
    $request->parent = 'beatae';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new RuntimeconfigProjectsConfigsListSecurity();
    $requestSecurity->option1 = new RuntimeconfigProjectsConfigsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runtimeconfigProjectsConfigsList($request, $requestSecurity);

    if ($response->listConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runtimeconfigProjectsConfigsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuntimeconfigProjectsConfigsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'cum';
    $request->setIamPolicyRequest->policy->version = 456150;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'perferendis';
    $request->key = 'ad';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->resource = 'iste';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new RuntimeconfigProjectsConfigsSetIamPolicySecurity();
    $requestSecurity->option1 = new RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runtimeconfigProjectsConfigsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runtimeconfigProjectsConfigsVariablesCreate

Creates a variable within the given configuration. You cannot create a variable with a name that is a prefix of an existing variable name, or a name that has an existing variable name as a prefix. To learn more about creating a variable, read the [Setting and Getting Data](/deployment-manager/runtime-configurator/set-and-get-variables) documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsVariablesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Variable;
use \OpenAPI\OpenAPI\Models\Shared\VariableStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsVariablesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsVariablesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsVariablesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuntimeconfigProjectsConfigsVariablesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->variable = new Variable();
    $request->variable->name = 'Elias Parker';
    $request->variable->state = VariableStateEnum::UPDATED;
    $request->variable->text = 'iure';
    $request->variable->updateTime = 'saepe';
    $request->variable->value = 'quidem';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'est';
    $request->key = 'mollitia';
    $request->oauthToken = 'laborum';
    $request->parent = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->requestId = 'corporis';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new RuntimeconfigProjectsConfigsVariablesCreateSecurity();
    $requestSecurity->option1 = new RuntimeconfigProjectsConfigsVariablesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runtimeconfigProjectsConfigsVariablesCreate($request, $requestSecurity);

    if ($response->variable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runtimeconfigProjectsConfigsVariablesList

Lists variables within given a configuration, matching any provided filters. This only lists variable names, not the values, unless `return_values` is true, in which case only variables that user has IAM permission to GetVariable will be returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsVariablesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsVariablesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsVariablesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsVariablesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuntimeconfigProjectsConfigsVariablesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'excepturi';
    $request->filter = 'accusantium';
    $request->key = 'iure';
    $request->oauthToken = 'culpa';
    $request->pageSize = 988374;
    $request->pageToken = 'sapiente';
    $request->parent = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->returnValues = false;
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new RuntimeconfigProjectsConfigsVariablesListSecurity();
    $requestSecurity->option1 = new RuntimeconfigProjectsConfigsVariablesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runtimeconfigProjectsConfigsVariablesList($request, $requestSecurity);

    if ($response->listVariablesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runtimeconfigProjectsConfigsVariablesUpdate

Updates an existing variable with a new value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsVariablesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Variable;
use \OpenAPI\OpenAPI\Models\Shared\VariableStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsVariablesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuntimeconfigProjectsConfigsVariablesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->variable = new Variable();
    $request->variable->name = 'Shaun McCullough';
    $request->variable->state = VariableStateEnum::UPDATED;
    $request->variable->text = 'molestiae';
    $request->variable->updateTime = 'velit';
    $request->variable->value = 'error';
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'laborum';
    $request->key = 'animi';
    $request->name = 'Christina Satterfield';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new RuntimeconfigProjectsConfigsVariablesUpdateSecurity();
    $requestSecurity->option1 = new RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runtimeconfigProjectsConfigsVariablesUpdate($request, $requestSecurity);

    if ($response->variable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runtimeconfigProjectsConfigsVariablesWatch

Watches a specific variable and waits for a change in the variable's value. When there is a change, this method returns the new value or times out. If a variable is deleted while being watched, the `variableState` state is set to `DELETED` and the method returns the last known variable `value`. If you set the deadline for watching to a larger value than internal timeout (60 seconds), the current variable value is returned and the `variableState` will be `VARIABLE_STATE_UNSPECIFIED`. To learn more about creating a watcher, read the [Watching a Variable for Changes](/deployment-manager/runtime-configurator/watching-a-variable) documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsVariablesWatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WatchVariableRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsVariablesWatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsVariablesWatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuntimeconfigProjectsConfigsVariablesWatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->watchVariableRequest = new WatchVariableRequest();
    $request->watchVariableRequest->newerThan = 'error';
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'reiciendis';
    $request->key = 'voluptatibus';
    $request->name = 'Jessie Langosh V';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'doloremque';

    $requestSecurity = new RuntimeconfigProjectsConfigsVariablesWatchSecurity();
    $requestSecurity->option1 = new RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runtimeconfigProjectsConfigsVariablesWatch($request, $requestSecurity);

    if ($response->variable !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runtimeconfigProjectsConfigsWaitersCreate

Creates a Waiter resource. This operation returns a long-running Operation resource which can be polled for completion. However, a waiter with the given name will exist (and can be retrieved) prior to the operation completing. If the operation fails, the failed Waiter resource will still exist and must be deleted prior to subsequent creation attempts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Waiter;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\EndCondition;
use \OpenAPI\OpenAPI\Models\Shared\Cardinality;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuntimeconfigProjectsConfigsWaitersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->waiter = new Waiter();
    $request->waiter->createTime = 'ut';
    $request->waiter->done = false;
    $request->waiter->error = new Status();
    $request->waiter->error->code = 979587;
    $request->waiter->error->details = [
        [
            'dolore' => 'iusto',
            'dicta' => 'harum',
        ],
    ];
    $request->waiter->error->message = 'enim';
    $request->waiter->failure = new EndCondition();
    $request->waiter->failure->cardinality = new Cardinality();
    $request->waiter->failure->cardinality->number = 880476;
    $request->waiter->failure->cardinality->path = 'commodi';
    $request->waiter->name = 'Eric Emmerich';
    $request->waiter->success = new EndCondition();
    $request->waiter->success->cardinality = new Cardinality();
    $request->waiter->success->cardinality->number = 566602;
    $request->waiter->success->cardinality->path = 'pariatur';
    $request->waiter->timeout = 'modi';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptates';
    $request->fields = 'quasi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'sint';
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->requestId = 'incidunt';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'consequatur';

    $requestSecurity = new RuntimeconfigProjectsConfigsWaitersCreateSecurity();
    $requestSecurity->option1 = new RuntimeconfigProjectsConfigsWaitersCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runtimeconfigProjectsConfigsWaitersCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runtimeconfigProjectsConfigsWaitersDelete

Deletes the waiter with the specified name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuntimeconfigProjectsConfigsWaitersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'distinctio';
    $request->key = 'quibusdam';
    $request->name = 'Pauline Deckow';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->recursive = false;
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'assumenda';

    $requestSecurity = new RuntimeconfigProjectsConfigsWaitersDeleteSecurity();
    $requestSecurity->option1 = new RuntimeconfigProjectsConfigsWaitersDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runtimeconfigProjectsConfigsWaitersDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runtimeconfigProjectsConfigsWaitersGet

Gets information about a single waiter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuntimeconfigProjectsConfigsWaitersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'excepturi';
    $request->key = 'tempora';
    $request->name = 'Geoffrey Green';
    $request->oauthToken = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new RuntimeconfigProjectsConfigsWaitersGetSecurity();
    $requestSecurity->option1 = new RuntimeconfigProjectsConfigsWaitersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runtimeconfigProjectsConfigsWaitersGet($request, $requestSecurity);

    if ($response->waiter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runtimeconfigProjectsConfigsWaitersList

List waiters within the given configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuntimeconfigProjectsConfigsWaitersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officia';
    $request->fields = 'dolor';
    $request->key = 'debitis';
    $request->oauthToken = 'a';
    $request->pageSize = 680056;
    $request->pageToken = 'in';
    $request->parent = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new RuntimeconfigProjectsConfigsWaitersListSecurity();
    $requestSecurity->option1 = new RuntimeconfigProjectsConfigsWaitersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runtimeconfigProjectsConfigsWaitersList($request, $requestSecurity);

    if ($response->listWaitersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runtimeconfigProjectsConfigsWaitersTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuntimeconfigProjectsConfigsWaitersTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'cumque',
        'facere',
    ];
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'accusamus';
    $request->key = 'non';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->resource = 'accusamus';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurity();
    $requestSecurity->option1 = new RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runtimeconfigProjectsConfigsWaitersTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
