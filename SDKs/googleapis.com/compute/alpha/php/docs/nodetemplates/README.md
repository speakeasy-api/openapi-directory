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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'nesciunt';
    $request->filter = 'non';
    $request->includeAllScopes = false;
    $request->key = 'vel';
    $request->maxResults = 507557;
    $request->oauthToken = 'beatae';
    $request->orderBy = 'eligendi';
    $request->pageToken = 'eos';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'eligendi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'omnis';
    $request->userIp = 'fuga';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officiis';
    $request->fields = 'ab';
    $request->key = 'in';
    $request->nodeTemplate = 'optio';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->project = 'quasi';
    $request->quotaUser = 'dolores';
    $request->region = 'impedit';
    $request->requestId = 'enim';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'culpa';
    $request->userIp = 'laudantium';

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
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'necessitatibus';
    $request->fields = 'explicabo';
    $request->key = 'eos';
    $request->nodeTemplate = 'quo';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->project = 'enim';
    $request->quotaUser = 'optio';
    $request->region = 'tempore';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'ex';
    $request->userIp = 'hic';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quisquam';
    $request->fields = 'perspiciatis';
    $request->key = 'amet';
    $request->oauthToken = 'consequuntur';
    $request->optionsRequestedPolicyVersion = 684964;
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'aliquid';
    $request->region = 'voluptatum';
    $request->resource = 'sunt';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'illum';
    $request->userIp = 'ea';

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
    ];
    $request->nodeTemplate->cpuOvercommitType = NodeTemplateCpuOvercommitTypeEnum::NONE;
    $request->nodeTemplate->creationTimestamp = 'earum';
    $request->nodeTemplate->description = 'placeat';
    $request->nodeTemplate->disks = [
        new LocalDisk(),
        new LocalDisk(),
        new LocalDisk(),
        new LocalDisk(),
    ];
    $request->nodeTemplate->id = 'quod';
    $request->nodeTemplate->kind = 'odit';
    $request->nodeTemplate->name = 'Wilfred Jast III';
    $request->nodeTemplate->nodeAffinityLabels = [
        'quam' => 'delectus',
        'minus' => 'nihil',
        'quibusdam' => 'assumenda',
        'animi' => 'molestiae',
    ];
    $request->nodeTemplate->nodeType = 'ipsa';
    $request->nodeTemplate->nodeTypeFlexibility = new NodeTemplateNodeTypeFlexibility();
    $request->nodeTemplate->nodeTypeFlexibility->cpus = 'recusandae';
    $request->nodeTemplate->nodeTypeFlexibility->localSsd = 'placeat';
    $request->nodeTemplate->nodeTypeFlexibility->memory = 'aliquid';
    $request->nodeTemplate->region = 'sit';
    $request->nodeTemplate->selfLink = 'vero';
    $request->nodeTemplate->selfLinkWithId = 'laboriosam';
    $request->nodeTemplate->serverBinding = new ServerBinding();
    $request->nodeTemplate->serverBinding->type = ServerBindingTypeEnum::RESTART_NODE_ON_ANY_SERVER;
    $request->nodeTemplate->status = NodeTemplateStatusEnum::DELETING;
    $request->nodeTemplate->statusMessage = 'nostrum';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'fugiat';
    $request->key = 'autem';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'quisquam';
    $request->quotaUser = 'illo';
    $request->region = 'tempora';
    $request->requestId = 'quisquam';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'excepturi';
    $request->userIp = 'aut';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'neque';
    $request->filter = 'nihil';
    $request->key = 'nobis';
    $request->maxResults = 50797;
    $request->oauthToken = 'facere';
    $request->orderBy = 'iste';
    $request->pageToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->project = 'voluptate';
    $request->quotaUser = 'reiciendis';
    $request->region = 'et';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'eius';

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
    ];
    $request->regionSetPolicyRequest->etag = 'similique';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'provident';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 343163;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vitae';
    $request->fields = 'doloremque';
    $request->key = 'commodi';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'ratione';
    $request->region = 'repudiandae';
    $request->resource = 'accusantium';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'voluptas';

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
        'sunt',
        'veniam',
        'similique',
    ];
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->fields = 'cupiditate';
    $request->key = 'earum';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'repellendus';
    $request->quotaUser = 'necessitatibus';
    $request->region = 'unde';
    $request->resource = 'voluptates';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'iste';

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
