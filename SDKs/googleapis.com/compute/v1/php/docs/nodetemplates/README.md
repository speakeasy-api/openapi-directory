# nodeTemplates

### Available Operations

* [computeNodeTemplatesAggregatedList](#computenodetemplatesaggregatedlist) - Retrieves an aggregated list of node templates.
* [computeNodeTemplatesDelete](#computenodetemplatesdelete) - Deletes the specified NodeTemplate resource.
* [computeNodeTemplatesGet](#computenodetemplatesget) - Returns the specified node template.
* [computeNodeTemplatesGetIamPolicy](#computenodetemplatesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeNodeTemplatesInsert](#computenodetemplatesinsert) - Creates a NodeTemplate resource in the specified project using the data included in the request.
* [computeNodeTemplatesList](#computenodetemplateslist) - Retrieves a list of node templates available to the specified project.
* [computeNodeTemplatesSetIamPolicy](#computenodetemplatessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeNodeTemplatesTestIamPermissions](#computenodetemplatestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeNodeTemplatesAggregatedList

Retrieves an aggregated list of node templates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeTemplatesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'odio';
    $request->filter = 'adipisci';
    $request->includeAllScopes = false;
    $request->key = 'necessitatibus';
    $request->maxResults = 84451;
    $request->oauthToken = 'consectetur';
    $request->orderBy = 'fuga';
    $request->pageToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'eos';
    $request->quotaUser = 'dolorum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'rerum';
    $request->userIp = 'cupiditate';

    $requestSecurity = new ComputeNodeTemplatesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeNodeTemplatesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeTemplates->computeNodeTemplatesAggregatedList($request, $requestSecurity);

    if ($response->nodeTemplateAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeTemplatesDelete

Deletes the specified NodeTemplate resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeTemplatesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perspiciatis';
    $request->fields = 'dolore';
    $request->key = 'corporis';
    $request->nodeTemplate = 'natus';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->project = 'tempora';
    $request->quotaUser = 'corrupti';
    $request->region = 'ducimus';
    $request->requestId = 'asperiores';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'cumque';
    $request->userIp = 'praesentium';

    $requestSecurity = new ComputeNodeTemplatesDeleteSecurity();
    $requestSecurity->option1 = new ComputeNodeTemplatesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeTemplates->computeNodeTemplatesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeTemplatesGet

Returns the specified node template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeTemplatesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nesciunt';
    $request->fields = 'ex';
    $request->key = 'tempore';
    $request->nodeTemplate = 'rem';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->project = 'harum';
    $request->quotaUser = 'consectetur';
    $request->region = 'quisquam';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'a';
    $request->userIp = 'ex';

    $requestSecurity = new ComputeNodeTemplatesGetSecurity();
    $requestSecurity->option1 = new ComputeNodeTemplatesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeTemplates->computeNodeTemplatesGet($request, $requestSecurity);

    if ($response->nodeTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeTemplatesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeTemplatesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facilis';
    $request->fields = 'sit';
    $request->key = 'incidunt';
    $request->oauthToken = 'magnam';
    $request->optionsRequestedPolicyVersion = 565242;
    $request->prettyPrint = false;
    $request->project = 'hic';
    $request->quotaUser = 'error';
    $request->region = 'repellendus';
    $request->resource = 'delectus';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'ratione';
    $request->userIp = 'delectus';

    $requestSecurity = new ComputeNodeTemplatesGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeNodeTemplatesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeTemplates->computeNodeTemplatesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeTemplatesInsert

Creates a NodeTemplate resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeTemplate;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodeTemplateCpuOvercommitTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalDisk;
use \OpenAPI\OpenAPI\Models\Shared\NodeTemplateNodeTypeFlexibility;
use \OpenAPI\OpenAPI\Models\Shared\ServerBinding;
use \OpenAPI\OpenAPI\Models\Shared\ServerBindingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeTemplateStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeTemplatesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->nodeTemplate = new NodeTemplate();
    $request->nodeTemplate->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->nodeTemplate->cpuOvercommitType = NodeTemplateCpuOvercommitTypeEnum::NONE;
    $request->nodeTemplate->creationTimestamp = 'nulla';
    $request->nodeTemplate->description = 'distinctio';
    $request->nodeTemplate->disks = [
        new LocalDisk(),
        new LocalDisk(),
        new LocalDisk(),
        new LocalDisk(),
    ];
    $request->nodeTemplate->id = 'in';
    $request->nodeTemplate->kind = 'deleniti';
    $request->nodeTemplate->name = 'Ms. Dominick Jerde';
    $request->nodeTemplate->nodeAffinityLabels = [
        'ipsam' => 'rem',
    ];
    $request->nodeTemplate->nodeType = 'molestias';
    $request->nodeTemplate->nodeTypeFlexibility = new NodeTemplateNodeTypeFlexibility();
    $request->nodeTemplate->nodeTypeFlexibility->cpus = 'eius';
    $request->nodeTemplate->nodeTypeFlexibility->localSsd = 'necessitatibus';
    $request->nodeTemplate->nodeTypeFlexibility->memory = 'culpa';
    $request->nodeTemplate->region = 'in';
    $request->nodeTemplate->selfLink = 'aliquid';
    $request->nodeTemplate->serverBinding = new ServerBinding();
    $request->nodeTemplate->serverBinding->type = ServerBindingTypeEnum::RESTART_NODE_ON_ANY_SERVER;
    $request->nodeTemplate->status = NodeTemplateStatusEnum::READY;
    $request->nodeTemplate->statusMessage = 'corporis';
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'voluptate';
    $request->key = 'provident';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'quam';
    $request->region = 'laudantium';
    $request->requestId = 'exercitationem';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'magnam';
    $request->userIp = 'blanditiis';

    $requestSecurity = new ComputeNodeTemplatesInsertSecurity();
    $requestSecurity->option1 = new ComputeNodeTemplatesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeTemplates->computeNodeTemplatesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeTemplatesList

Retrieves a list of node templates available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeTemplatesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'minima';
    $request->fields = 'ut';
    $request->filter = 'cupiditate';
    $request->key = 'debitis';
    $request->maxResults = 324872;
    $request->oauthToken = 'vel';
    $request->orderBy = 'consectetur';
    $request->pageToken = 'nostrum';
    $request->prettyPrint = false;
    $request->project = 'tempore';
    $request->quotaUser = 'ipsum';
    $request->region = 'dolorem';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'maxime';
    $request->userIp = 'voluptatem';

    $requestSecurity = new ComputeNodeTemplatesListSecurity();
    $requestSecurity->option1 = new ComputeNodeTemplatesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeTemplates->computeNodeTemplatesList($request, $requestSecurity);

    if ($response->nodeTemplateList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeTemplatesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionSetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\ConditionIamEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionSysEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfig;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCloudAuditOptions;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationLoggingOptions;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationLoggingOptionsPermissionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCloudAuditOptionsLogNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCounterOptions;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCounterOptionsCustomField;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigDataAccessOptions;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigDataAccessOptionsLogModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeTemplatesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionSetPolicyRequest = new RegionSetPolicyRequest();
    $request->regionSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->etag = 'reprehenderit';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'dolore';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 973003;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'delectus';
    $request->fields = 'dolore';
    $request->key = 'totam';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'numquam';
    $request->quotaUser = 'sunt';
    $request->region = 'consequuntur';
    $request->resource = 'veniam';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'in';
    $request->userIp = 'minima';

    $requestSecurity = new ComputeNodeTemplatesSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeNodeTemplatesSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeTemplates->computeNodeTemplatesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeTemplatesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTemplatesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeTemplatesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'excepturi',
        'eum',
    ];
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nostrum';
    $request->fields = 'cumque';
    $request->key = 'eaque';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'earum';
    $request->quotaUser = 'culpa';
    $request->region = 'vel';
    $request->resource = 'sapiente';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'ratione';
    $request->userIp = 'libero';

    $requestSecurity = new ComputeNodeTemplatesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeNodeTemplatesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeTemplates->computeNodeTemplatesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
