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
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sunt';
    $request->fields = 'rem';
    $request->filter = 'itaque';
    $request->includeAllScopes = false;
    $request->key = 'assumenda';
    $request->maxResults = 762296;
    $request->oauthToken = 'esse';
    $request->orderBy = 'a';
    $request->pageToken = 'quam';
    $request->prettyPrint = false;
    $request->project = 'quos';
    $request->quotaUser = 'dignissimos';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'adipisci';
    $request->userIp = 'magni';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'rerum';
    $request->fields = 'nesciunt';
    $request->key = 'pariatur';
    $request->networkAttachment = 'velit';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->project = 'facere';
    $request->quotaUser = 'quae';
    $request->region = 'cumque';
    $request->requestId = 'ullam';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'reprehenderit';
    $request->userIp = 'aut';

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
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aspernatur';
    $request->fields = 'harum';
    $request->key = 'illum';
    $request->networkAttachment = 'dolor';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'iste';
    $request->quotaUser = 'earum';
    $request->region = 'vitae';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'eligendi';
    $request->userIp = 'veniam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'quod';
    $request->key = 'nesciunt';
    $request->oauthToken = 'iste';
    $request->optionsRequestedPolicyVersion = 719575;
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'assumenda';
    $request->region = 'alias';
    $request->resource = 'deserunt';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'qui';
    $request->userIp = 'perspiciatis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->networkAttachment = new NetworkAttachment();
    $request->networkAttachment->connectionEndpoints = [
        new NetworkAttachmentConnectedEndpoint(),
        new NetworkAttachmentConnectedEndpoint(),
        new NetworkAttachmentConnectedEndpoint(),
        new NetworkAttachmentConnectedEndpoint(),
    ];
    $request->networkAttachment->connectionPreference = NetworkAttachmentConnectionPreferenceEnum::ACCEPT_MANUAL;
    $request->networkAttachment->creationTimestamp = 'nemo';
    $request->networkAttachment->description = 'quam';
    $request->networkAttachment->fingerprint = 'reiciendis';
    $request->networkAttachment->id = 'nesciunt';
    $request->networkAttachment->kind = 'laudantium';
    $request->networkAttachment->name = 'Virginia Littel';
    $request->networkAttachment->network = 'possimus';
    $request->networkAttachment->producerAcceptLists = [
        'officiis',
        'reiciendis',
    ];
    $request->networkAttachment->producerRejectLists = [
        'aperiam',
        'reprehenderit',
        'animi',
    ];
    $request->networkAttachment->region = 'officia';
    $request->networkAttachment->selfLink = 'eveniet';
    $request->networkAttachment->selfLinkWithId = 'quae';
    $request->networkAttachment->subnetworks = [
        'hic',
    ];
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'similique';
    $request->key = 'odio';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'nam';
    $request->region = 'provident';
    $request->requestId = 'fugiat';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'non';
    $request->userIp = 'aut';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->fields = 'qui';
    $request->filter = 'commodi';
    $request->key = 'a';
    $request->maxResults = 835965;
    $request->oauthToken = 'sequi';
    $request->orderBy = 'eum';
    $request->pageToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'animi';
    $request->region = 'excepturi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'dicta';
    $request->userIp = 'laboriosam';

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
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->etag = 'facilis';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'nostrum';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 204121;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'adipisci';
    $request->key = 'autem';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'beatae';
    $request->quotaUser = 'dignissimos';
    $request->region = 'quia';
    $request->resource = 'ratione';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'sequi';

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
        'quod',
        'sit',
        'modi',
        'eum',
    ];
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nemo';
    $request->fields = 'architecto';
    $request->key = 'vel';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->project = 'facilis';
    $request->quotaUser = 'libero';
    $request->region = 'maxime';
    $request->resource = 'deserunt';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'molestias';
    $request->userIp = 'dolores';

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
