# serviceAttachments

### Available Operations

* [computeServiceAttachmentsAggregatedList](#computeserviceattachmentsaggregatedlist) - Retrieves the list of all ServiceAttachment resources, regional and global, available to the specified project.
* [computeServiceAttachmentsDelete](#computeserviceattachmentsdelete) - Deletes the specified ServiceAttachment in the given scope
* [computeServiceAttachmentsGet](#computeserviceattachmentsget) - Returns the specified ServiceAttachment resource in the given scope.
* [computeServiceAttachmentsGetIamPolicy](#computeserviceattachmentsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeServiceAttachmentsInsert](#computeserviceattachmentsinsert) - Creates a ServiceAttachment in the specified project in the given scope using the parameters that are included in the request.
* [computeServiceAttachmentsList](#computeserviceattachmentslist) - Lists the ServiceAttachments for a project in the given scope.
* [computeServiceAttachmentsPatch](#computeserviceattachmentspatch) - Patches the specified ServiceAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeServiceAttachmentsSetIamPolicy](#computeserviceattachmentssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeServiceAttachmentsTestIamPermissions](#computeserviceattachmentstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeServiceAttachmentsAggregatedList

Retrieves the list of all ServiceAttachment resources, regional and global, available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeServiceAttachmentsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'voluptates';
    $request->filter = 'dolore';
    $request->includeAllScopes = false;
    $request->key = 'placeat';
    $request->maxResults = 90188;
    $request->oauthToken = 'illum';
    $request->orderBy = 'aperiam';
    $request->pageToken = 'ex';
    $request->prettyPrint = false;
    $request->project = 'eos';
    $request->quotaUser = 'numquam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'non';

    $requestSecurity = new ComputeServiceAttachmentsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeServiceAttachmentsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->serviceAttachments->computeServiceAttachmentsAggregatedList($request, $requestSecurity);

    if ($response->serviceAttachmentAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeServiceAttachmentsDelete

Deletes the specified ServiceAttachment in the given scope

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeServiceAttachmentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sapiente';
    $request->fields = 'magnam';
    $request->key = 'vitae';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->project = 'dolore';
    $request->quotaUser = 'eos';
    $request->region = 'facere';
    $request->requestId = 'repellendus';
    $request->serviceAttachment = 'culpa';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'ab';
    $request->userIp = 'eius';

    $requestSecurity = new ComputeServiceAttachmentsDeleteSecurity();
    $requestSecurity->option1 = new ComputeServiceAttachmentsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->serviceAttachments->computeServiceAttachmentsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeServiceAttachmentsGet

Returns the specified ServiceAttachment resource in the given scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeServiceAttachmentsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'laboriosam';
    $request->key = 'laudantium';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->project = 'iste';
    $request->quotaUser = 'occaecati';
    $request->region = 'cupiditate';
    $request->serviceAttachment = 'modi';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'natus';

    $requestSecurity = new ComputeServiceAttachmentsGetSecurity();
    $requestSecurity->option1 = new ComputeServiceAttachmentsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->serviceAttachments->computeServiceAttachmentsGet($request, $requestSecurity);

    if ($response->serviceAttachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeServiceAttachmentsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeServiceAttachmentsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolore';
    $request->fields = 'sed';
    $request->key = 'ex';
    $request->oauthToken = 'autem';
    $request->optionsRequestedPolicyVersion = 769488;
    $request->prettyPrint = false;
    $request->project = 'sit';
    $request->quotaUser = 'saepe';
    $request->region = 'ipsam';
    $request->resource = 'sit';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'asperiores';
    $request->userIp = 'minus';

    $requestSecurity = new ComputeServiceAttachmentsGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeServiceAttachmentsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->serviceAttachments->computeServiceAttachmentsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeServiceAttachmentsInsert

Creates a ServiceAttachment in the specified project in the given scope using the parameters that are included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAttachment;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAttachmentConnectedEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAttachmentConnectedEndpointStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAttachmentConnectionPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAttachmentConsumerProjectLimit;
use \OpenAPI\OpenAPI\Models\Shared\Uint128;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeServiceAttachmentsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->serviceAttachment = new ServiceAttachment();
    $request->serviceAttachment->connectedEndpoints = [
        new ServiceAttachmentConnectedEndpoint(),
        new ServiceAttachmentConnectedEndpoint(),
    ];
    $request->serviceAttachment->connectionPreference = ServiceAttachmentConnectionPreferenceEnum::ACCEPT_AUTOMATIC;
    $request->serviceAttachment->consumerAcceptLists = [
        new ServiceAttachmentConsumerProjectLimit(),
        new ServiceAttachmentConsumerProjectLimit(),
        new ServiceAttachmentConsumerProjectLimit(),
        new ServiceAttachmentConsumerProjectLimit(),
    ];
    $request->serviceAttachment->consumerRejectLists = [
        'minus',
        'esse',
        'inventore',
    ];
    $request->serviceAttachment->creationTimestamp = 'aperiam';
    $request->serviceAttachment->description = 'totam';
    $request->serviceAttachment->domainNames = [
        'vitae',
        'itaque',
        'voluptatibus',
    ];
    $request->serviceAttachment->enableProxyProtocol = false;
    $request->serviceAttachment->fingerprint = 'molestiae';
    $request->serviceAttachment->id = 'tempore';
    $request->serviceAttachment->kind = 'amet';
    $request->serviceAttachment->name = 'Janie Lang';
    $request->serviceAttachment->natSubnets = [
        'facere',
        'molestiae',
        'libero',
        'porro',
    ];
    $request->serviceAttachment->producerForwardingRule = 'vero';
    $request->serviceAttachment->pscServiceAttachmentId = new Uint128();
    $request->serviceAttachment->pscServiceAttachmentId->high = 'aperiam';
    $request->serviceAttachment->pscServiceAttachmentId->low = 'sapiente';
    $request->serviceAttachment->reconcileConnections = false;
    $request->serviceAttachment->region = 'tempore';
    $request->serviceAttachment->selfLink = 'deserunt';
    $request->serviceAttachment->targetService = 'fugit';
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolore';
    $request->fields = 'nulla';
    $request->key = 'dolor';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'dolore';
    $request->region = 'in';
    $request->requestId = 'ipsam';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'eveniet';
    $request->userIp = 'necessitatibus';

    $requestSecurity = new ComputeServiceAttachmentsInsertSecurity();
    $requestSecurity->option1 = new ComputeServiceAttachmentsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->serviceAttachments->computeServiceAttachmentsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeServiceAttachmentsList

Lists the ServiceAttachments for a project in the given scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeServiceAttachmentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eaque';
    $request->fields = 'nesciunt';
    $request->filter = 'ipsa';
    $request->key = 'labore';
    $request->maxResults = 632081;
    $request->oauthToken = 'in';
    $request->orderBy = 'aperiam';
    $request->pageToken = 'corrupti';
    $request->prettyPrint = false;
    $request->project = 'voluptates';
    $request->quotaUser = 'dolores';
    $request->region = 'veritatis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'ipsa';
    $request->userIp = 'omnis';

    $requestSecurity = new ComputeServiceAttachmentsListSecurity();
    $requestSecurity->option1 = new ComputeServiceAttachmentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->serviceAttachments->computeServiceAttachmentsList($request, $requestSecurity);

    if ($response->serviceAttachmentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeServiceAttachmentsPatch

Patches the specified ServiceAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAttachment;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAttachmentConnectedEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAttachmentConnectedEndpointStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAttachmentConnectionPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAttachmentConsumerProjectLimit;
use \OpenAPI\OpenAPI\Models\Shared\Uint128;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeServiceAttachmentsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->serviceAttachment1 = new ServiceAttachment();
    $request->serviceAttachment1->connectedEndpoints = [
        new ServiceAttachmentConnectedEndpoint(),
        new ServiceAttachmentConnectedEndpoint(),
    ];
    $request->serviceAttachment1->connectionPreference = ServiceAttachmentConnectionPreferenceEnum::ACCEPT_MANUAL;
    $request->serviceAttachment1->consumerAcceptLists = [
        new ServiceAttachmentConsumerProjectLimit(),
    ];
    $request->serviceAttachment1->consumerRejectLists = [
        'veniam',
    ];
    $request->serviceAttachment1->creationTimestamp = 'exercitationem';
    $request->serviceAttachment1->description = 'quasi';
    $request->serviceAttachment1->domainNames = [
        'soluta',
        'ipsa',
        'aut',
    ];
    $request->serviceAttachment1->enableProxyProtocol = false;
    $request->serviceAttachment1->fingerprint = 'minus';
    $request->serviceAttachment1->id = 'veniam';
    $request->serviceAttachment1->kind = 'perferendis';
    $request->serviceAttachment1->name = 'Ron Dibbert';
    $request->serviceAttachment1->natSubnets = [
        'sed',
        'autem',
        'tenetur',
        'autem',
    ];
    $request->serviceAttachment1->producerForwardingRule = 'possimus';
    $request->serviceAttachment1->pscServiceAttachmentId = new Uint128();
    $request->serviceAttachment1->pscServiceAttachmentId->high = 'commodi';
    $request->serviceAttachment1->pscServiceAttachmentId->low = 'quaerat';
    $request->serviceAttachment1->reconcileConnections = false;
    $request->serviceAttachment1->region = 'tenetur';
    $request->serviceAttachment1->selfLink = 'nobis';
    $request->serviceAttachment1->targetService = 'provident';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'voluptas';
    $request->key = 'aspernatur';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->project = 'non';
    $request->quotaUser = 'ratione';
    $request->region = 'similique';
    $request->requestId = 'laudantium';
    $request->serviceAttachmentPathParameter = 'a';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'quo';
    $request->userIp = 'dicta';

    $requestSecurity = new ComputeServiceAttachmentsPatchSecurity();
    $requestSecurity->option1 = new ComputeServiceAttachmentsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->serviceAttachments->computeServiceAttachmentsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeServiceAttachmentsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsSetIamPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeServiceAttachmentsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionSetPolicyRequest = new RegionSetPolicyRequest();
    $request->regionSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->etag = 'sequi';
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
    $request->regionSetPolicyRequest->policy->etag = 'vel';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 825598;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'velit';
    $request->key = 'corporis';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->project = 'nostrum';
    $request->quotaUser = 'labore';
    $request->region = 'veniam';
    $request->resource = 'pariatur';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'earum';
    $request->userIp = 'temporibus';

    $requestSecurity = new ComputeServiceAttachmentsSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeServiceAttachmentsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->serviceAttachments->computeServiceAttachmentsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeServiceAttachmentsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeServiceAttachmentsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeServiceAttachmentsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'quibusdam',
        'corrupti',
        'quis',
    ];
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'magnam';
    $request->key = 'molestias';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->project = 'ea';
    $request->quotaUser = 'fugiat';
    $request->region = 'quas';
    $request->resource = 'ea';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'porro';
    $request->userIp = 'vitae';

    $requestSecurity = new ComputeServiceAttachmentsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeServiceAttachmentsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->serviceAttachments->computeServiceAttachmentsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
