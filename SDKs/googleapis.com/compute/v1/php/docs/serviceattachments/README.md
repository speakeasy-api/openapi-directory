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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'tenetur';
    $request->filter = 'atque';
    $request->includeAllScopes = false;
    $request->key = 'ea';
    $request->maxResults = 199180;
    $request->oauthToken = 'impedit';
    $request->orderBy = 'eos';
    $request->pageToken = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'illum';
    $request->quotaUser = 'eaque';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'aut';
    $request->userIp = 'eligendi';

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
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'amet';
    $request->fields = 'pariatur';
    $request->key = 'iste';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'voluptas';
    $request->quotaUser = 'hic';
    $request->region = 'ea';
    $request->requestId = 'officiis';
    $request->serviceAttachment = 'soluta';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'nostrum';
    $request->userIp = 'officia';

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
    $request->accessToken = 'quam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'dignissimos';
    $request->key = 'neque';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->project = 'dolore';
    $request->quotaUser = 'reiciendis';
    $request->region = 'dolores';
    $request->serviceAttachment = 'corporis';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'ex';
    $request->userIp = 'ratione';

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
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quam';
    $request->fields = 'dolorem';
    $request->key = 'accusantium';
    $request->oauthToken = 'ducimus';
    $request->optionsRequestedPolicyVersion = 81263;
    $request->prettyPrint = false;
    $request->project = 'numquam';
    $request->quotaUser = 'itaque';
    $request->region = 'commodi';
    $request->resource = 'soluta';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'corrupti';
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
        new ServiceAttachmentConnectedEndpoint(),
        new ServiceAttachmentConnectedEndpoint(),
    ];
    $request->serviceAttachment->connectionPreference = ServiceAttachmentConnectionPreferenceEnum::ACCEPT_AUTOMATIC;
    $request->serviceAttachment->consumerAcceptLists = [
        new ServiceAttachmentConsumerProjectLimit(),
        new ServiceAttachmentConsumerProjectLimit(),
        new ServiceAttachmentConsumerProjectLimit(),
    ];
    $request->serviceAttachment->consumerRejectLists = [
        'vel',
        'quaerat',
        'quibusdam',
        'dolorem',
    ];
    $request->serviceAttachment->creationTimestamp = 'aliquam';
    $request->serviceAttachment->description = 'dolores';
    $request->serviceAttachment->domainNames = [
        'placeat',
        'eos',
        'natus',
    ];
    $request->serviceAttachment->enableProxyProtocol = false;
    $request->serviceAttachment->fingerprint = 'provident';
    $request->serviceAttachment->id = 'officia';
    $request->serviceAttachment->kind = 'aliquid';
    $request->serviceAttachment->name = 'Glen Toy';
    $request->serviceAttachment->natSubnets = [
        'sapiente',
        'inventore',
        'amet',
        'quaerat',
    ];
    $request->serviceAttachment->producerForwardingRule = 'perferendis';
    $request->serviceAttachment->pscServiceAttachmentId = new Uint128();
    $request->serviceAttachment->pscServiceAttachmentId->high = 'qui';
    $request->serviceAttachment->pscServiceAttachmentId->low = 'repudiandae';
    $request->serviceAttachment->reconcileConnections = false;
    $request->serviceAttachment->region = 'natus';
    $request->serviceAttachment->selfLink = 'modi';
    $request->serviceAttachment->targetService = 'ullam';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'quam';
    $request->key = 'incidunt';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->project = 'eveniet';
    $request->quotaUser = 'hic';
    $request->region = 'placeat';
    $request->requestId = 'repudiandae';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'quae';
    $request->userIp = 'sint';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'illo';
    $request->fields = 'repellat';
    $request->filter = 'iste';
    $request->key = 'libero';
    $request->maxResults = 78052;
    $request->oauthToken = 'tenetur';
    $request->orderBy = 'nihil';
    $request->pageToken = 'fugiat';
    $request->prettyPrint = false;
    $request->project = 'iste';
    $request->quotaUser = 'deserunt';
    $request->region = 'earum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'a';
    $request->uploadProtocol = 'repudiandae';
    $request->userIp = 'eum';

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
        'minus',
        'recusandae',
        'recusandae',
    ];
    $request->serviceAttachment1->creationTimestamp = 'asperiores';
    $request->serviceAttachment1->description = 'cum';
    $request->serviceAttachment1->domainNames = [
        'magnam',
    ];
    $request->serviceAttachment1->enableProxyProtocol = false;
    $request->serviceAttachment1->fingerprint = 'reiciendis';
    $request->serviceAttachment1->id = 'voluptatum';
    $request->serviceAttachment1->kind = 'maxime';
    $request->serviceAttachment1->name = 'Martha Dibbert';
    $request->serviceAttachment1->natSubnets = [
        'nam',
        'saepe',
        'mollitia',
    ];
    $request->serviceAttachment1->producerForwardingRule = 'esse';
    $request->serviceAttachment1->pscServiceAttachmentId = new Uint128();
    $request->serviceAttachment1->pscServiceAttachmentId->high = 'voluptatem';
    $request->serviceAttachment1->pscServiceAttachmentId->low = 'blanditiis';
    $request->serviceAttachment1->reconcileConnections = false;
    $request->serviceAttachment1->region = 'voluptates';
    $request->serviceAttachment1->selfLink = 'temporibus';
    $request->serviceAttachment1->targetService = 'corporis';
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'facere';
    $request->key = 'velit';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'veniam';
    $request->quotaUser = 'illum';
    $request->region = 'labore';
    $request->requestId = 'ea';
    $request->serviceAttachmentPathParameter = 'aperiam';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'cupiditate';
    $request->userIp = 'omnis';

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
    $request->regionSetPolicyRequest->etag = 'impedit';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'magnam';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 364199;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facere';
    $request->fields = 'minima';
    $request->key = 'ullam';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->project = 'accusantium';
    $request->quotaUser = 'error';
    $request->region = 'officiis';
    $request->resource = 'perspiciatis';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'eos';
    $request->userIp = 'qui';

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
        'facilis',
    ];
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'nisi';
    $request->key = 'veniam';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'laudantium';
    $request->quotaUser = 'aliquid';
    $request->region = 'debitis';
    $request->resource = 'earum';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'ipsam';

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
