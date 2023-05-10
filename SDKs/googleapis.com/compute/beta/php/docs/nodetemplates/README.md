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
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ex';
    $request->fields = 'autem';
    $request->filter = 'nostrum';
    $request->includeAllScopes = false;
    $request->key = 'atque';
    $request->maxResults = 903378;
    $request->oauthToken = 'eum';
    $request->orderBy = 'molestias';
    $request->pageToken = 'fuga';
    $request->prettyPrint = false;
    $request->project = 'non';
    $request->quotaUser = 'nam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'ut';
    $request->userIp = 'non';

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
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'quibusdam';
    $request->key = 'harum';
    $request->nodeTemplate = 'itaque';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'ducimus';
    $request->quotaUser = 'ad';
    $request->region = 'optio';
    $request->requestId = 'ea';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'minus';
    $request->userIp = 'autem';

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
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cupiditate';
    $request->fields = 'aliquam';
    $request->key = 'suscipit';
    $request->nodeTemplate = 'atque';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'neque';
    $request->region = 'doloremque';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'deleniti';

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
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'expedita';
    $request->fields = 'sapiente';
    $request->key = 'deleniti';
    $request->oauthToken = 'explicabo';
    $request->optionsRequestedPolicyVersion = 86917;
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'eligendi';
    $request->region = 'amet';
    $request->resource = 'ipsum';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'hic';
    $request->userIp = 'occaecati';

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
    $request->nodeTemplate->creationTimestamp = 'eaque';
    $request->nodeTemplate->description = 'porro';
    $request->nodeTemplate->disks = [
        new LocalDisk(),
        new LocalDisk(),
    ];
    $request->nodeTemplate->id = 'omnis';
    $request->nodeTemplate->kind = 'recusandae';
    $request->nodeTemplate->name = 'Constance Conroy';
    $request->nodeTemplate->nodeAffinityLabels = [
        'non' => 'labore',
    ];
    $request->nodeTemplate->nodeType = 'incidunt';
    $request->nodeTemplate->nodeTypeFlexibility = new NodeTemplateNodeTypeFlexibility();
    $request->nodeTemplate->nodeTypeFlexibility->cpus = 'tempore';
    $request->nodeTemplate->nodeTypeFlexibility->localSsd = 'deserunt';
    $request->nodeTemplate->nodeTypeFlexibility->memory = 'error';
    $request->nodeTemplate->region = 'doloribus';
    $request->nodeTemplate->selfLink = 'reprehenderit';
    $request->nodeTemplate->serverBinding = new ServerBinding();
    $request->nodeTemplate->serverBinding->type = ServerBindingTypeEnum::RESTART_NODE_ON_MINIMAL_SERVERS;
    $request->nodeTemplate->status = NodeTemplateStatusEnum::INVALID;
    $request->nodeTemplate->statusMessage = 'quis';
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'necessitatibus';
    $request->fields = 'facere';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'soluta';
    $request->region = 'suscipit';
    $request->requestId = 'explicabo';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'unde';
    $request->userIp = 'iusto';

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
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'earum';
    $request->fields = 'cum';
    $request->filter = 'alias';
    $request->key = 'quod';
    $request->maxResults = 331971;
    $request->oauthToken = 'corrupti';
    $request->orderBy = 'temporibus';
    $request->pageToken = 'odit';
    $request->prettyPrint = false;
    $request->project = 'voluptate';
    $request->quotaUser = 'nobis';
    $request->region = 'exercitationem';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'cupiditate';
    $request->userIp = 'cupiditate';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionSetPolicyRequest = new RegionSetPolicyRequest();
    $request->regionSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->etag = 'minima';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'expedita';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 37560;
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'iusto';
    $request->key = 'quasi';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->project = 'tempore';
    $request->quotaUser = 'ducimus';
    $request->region = 'animi';
    $request->resource = 'ducimus';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'voluptatem';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'modi',
        'soluta',
    ];
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'sit';
    $request->key = 'autem';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'deleniti';
    $request->quotaUser = 'illum';
    $request->region = 'necessitatibus';
    $request->resource = 'vero';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'necessitatibus';
    $request->userIp = 'asperiores';

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
