# networkAttachments

### Available Operations

* [computeNetworkAttachmentsAggregatedList](#computenetworkattachmentsaggregatedlist) - Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project.
* [computeNetworkAttachmentsDelete](#computenetworkattachmentsdelete) - Deletes the specified NetworkAttachment in the given scope
* [computeNetworkAttachmentsGet](#computenetworkattachmentsget) - Returns the specified NetworkAttachment resource in the given scope.
* [computeNetworkAttachmentsGetIamPolicy](#computenetworkattachmentsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeNetworkAttachmentsInsert](#computenetworkattachmentsinsert) - Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.
* [computeNetworkAttachmentsList](#computenetworkattachmentslist) - Lists the NetworkAttachments for a project in the given scope.
* [computeNetworkAttachmentsSetIamPolicy](#computenetworkattachmentssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeNetworkAttachmentsTestIamPermissions](#computenetworkattachmentstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeNetworkAttachmentsAggregatedList

Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkAttachmentsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dignissimos';
    $request->fields = 'minima';
    $request->filter = 'eaque';
    $request->includeAllScopes = false;
    $request->key = 'mollitia';
    $request->maxResults = 72;
    $request->oauthToken = 'sit';
    $request->orderBy = 'accusamus';
    $request->pageToken = 'sint';
    $request->prettyPrint = false;
    $request->project = 'commodi';
    $request->quotaUser = 'voluptas';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'eligendi';
    $request->userIp = 'ducimus';

    $requestSecurity = new ComputeNetworkAttachmentsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeNetworkAttachmentsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkAttachments->computeNetworkAttachmentsAggregatedList($request, $requestSecurity);

    if ($response->networkAttachmentAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkAttachmentsDelete

Deletes the specified NetworkAttachment in the given scope

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkAttachmentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolore';
    $request->fields = 'neque';
    $request->key = 'inventore';
    $request->networkAttachment = 'omnis';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'omnis';
    $request->region = 'corrupti';
    $request->requestId = 'optio';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'atque';
    $request->userIp = 'dolor';

    $requestSecurity = new ComputeNetworkAttachmentsDeleteSecurity();
    $requestSecurity->option1 = new ComputeNetworkAttachmentsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkAttachments->computeNetworkAttachmentsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkAttachmentsGet

Returns the specified NetworkAttachment resource in the given scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkAttachmentsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'cupiditate';
    $request->key = 'praesentium';
    $request->networkAttachment = 'accusamus';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->project = 'ipsum';
    $request->quotaUser = 'pariatur';
    $request->region = 'amet';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'nobis';
    $request->userIp = 'quam';

    $requestSecurity = new ComputeNetworkAttachmentsGetSecurity();
    $requestSecurity->option1 = new ComputeNetworkAttachmentsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkAttachments->computeNetworkAttachmentsGet($request, $requestSecurity);

    if ($response->networkAttachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkAttachmentsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkAttachmentsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'est';
    $request->alt = AltEnum::JSON;
    $request->callback = 'placeat';
    $request->fields = 'veniam';
    $request->key = 'minus';
    $request->oauthToken = 'similique';
    $request->optionsRequestedPolicyVersion = 548403;
    $request->prettyPrint = false;
    $request->project = 'aliquid';
    $request->quotaUser = 'aliquam';
    $request->region = 'error';
    $request->resource = 'animi';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'perferendis';
    $request->userIp = 'impedit';

    $requestSecurity = new ComputeNetworkAttachmentsGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeNetworkAttachmentsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkAttachments->computeNetworkAttachmentsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkAttachmentsInsert

Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAttachment;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAttachmentConnectedEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAttachmentConnectedEndpointStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAttachmentConnectionPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkAttachmentsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->networkAttachment = new NetworkAttachment();
    $request->networkAttachment->connectionEndpoints = [
        new NetworkAttachmentConnectedEndpoint(),
        new NetworkAttachmentConnectedEndpoint(),
        new NetworkAttachmentConnectedEndpoint(),
        new NetworkAttachmentConnectedEndpoint(),
    ];
    $request->networkAttachment->connectionPreference = NetworkAttachmentConnectionPreferenceEnum::ACCEPT_AUTOMATIC;
    $request->networkAttachment->creationTimestamp = 'pariatur';
    $request->networkAttachment->description = 'commodi';
    $request->networkAttachment->fingerprint = 'iste';
    $request->networkAttachment->id = 'corrupti';
    $request->networkAttachment->kind = 'iste';
    $request->networkAttachment->name = 'Mrs. Harvey Crooks';
    $request->networkAttachment->network = 'ad';
    $request->networkAttachment->producerAcceptLists = [
        'ipsa',
    ];
    $request->networkAttachment->producerRejectLists = [
        'voluptate',
        'illum',
    ];
    $request->networkAttachment->region = 'et';
    $request->networkAttachment->selfLink = 'perspiciatis';
    $request->networkAttachment->selfLinkWithId = 'accusamus';
    $request->networkAttachment->subnetworks = [
        'voluptatum',
        'ratione',
        'facere',
    ];
    $request->accessToken = 'eius';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'earum';
    $request->key = 'quibusdam';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'ut';
    $request->quotaUser = 'tempore';
    $request->region = 'molestias';
    $request->requestId = 'fuga';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'minus';
    $request->userIp = 'sunt';

    $requestSecurity = new ComputeNetworkAttachmentsInsertSecurity();
    $requestSecurity->option1 = new ComputeNetworkAttachmentsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkAttachments->computeNetworkAttachmentsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkAttachmentsList

Lists the NetworkAttachments for a project in the given scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkAttachmentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veniam';
    $request->fields = 'quaerat';
    $request->filter = 'minima';
    $request->key = 'officiis';
    $request->maxResults = 600933;
    $request->oauthToken = 'ullam';
    $request->orderBy = 'enim';
    $request->pageToken = 'facere';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'cumque';
    $request->region = 'et';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'minima';
    $request->userIp = 'eveniet';

    $requestSecurity = new ComputeNetworkAttachmentsListSecurity();
    $requestSecurity->option1 = new ComputeNetworkAttachmentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkAttachments->computeNetworkAttachmentsList($request, $requestSecurity);

    if ($response->networkAttachmentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkAttachmentsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsSetIamPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkAttachmentsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionSetPolicyRequest = new RegionSetPolicyRequest();
    $request->regionSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->etag = 'unde';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'eligendi';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 764782;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->fields = 'facere';
    $request->key = 'explicabo';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->project = 'laborum';
    $request->quotaUser = 'animi';
    $request->region = 'quam';
    $request->resource = 'totam';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'similique';
    $request->userIp = 'nobis';

    $requestSecurity = new ComputeNetworkAttachmentsSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeNetworkAttachmentsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkAttachments->computeNetworkAttachmentsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkAttachmentsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkAttachmentsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'illum',
    ];
    $request->accessToken = 'sed';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->fields = 'voluptates';
    $request->key = 'nulla';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->project = 'dignissimos';
    $request->quotaUser = 'dolor';
    $request->region = 'totam';
    $request->resource = 'beatae';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'laborum';
    $request->userIp = 'beatae';

    $requestSecurity = new ComputeNetworkAttachmentsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeNetworkAttachmentsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkAttachments->computeNetworkAttachmentsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
