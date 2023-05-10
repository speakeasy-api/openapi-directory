# networkAttachments

### Available Operations

* [computeNetworkAttachmentsAggregatedList](#computenetworkattachmentsaggregatedlist) - Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project.
* [computeNetworkAttachmentsDelete](#computenetworkattachmentsdelete) - Deletes the specified NetworkAttachment in the given scope
* [computeNetworkAttachmentsGet](#computenetworkattachmentsget) - Returns the specified NetworkAttachment resource in the given scope.
* [computeNetworkAttachmentsGetIamPolicy](#computenetworkattachmentsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeNetworkAttachmentsInsert](#computenetworkattachmentsinsert) - Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.
* [computeNetworkAttachmentsList](#computenetworkattachmentslist) - Lists the NetworkAttachments for a project in the given scope.
* [computeNetworkAttachmentsPatch](#computenetworkattachmentspatch) - Patches the specified NetworkAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quibusdam';
    $request->fields = 'veritatis';
    $request->filter = 'ad';
    $request->includeAllScopes = false;
    $request->key = 'velit';
    $request->maxResults = 158451;
    $request->oauthToken = 'dicta';
    $request->orderBy = 'nam';
    $request->pageToken = 'quos';
    $request->prettyPrint = false;
    $request->project = 'velit';
    $request->quotaUser = 'ratione';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'minima';
    $request->userIp = 'aliquid';

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
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'architecto';
    $request->fields = 'totam';
    $request->key = 'alias';
    $request->networkAttachment = 'hic';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->project = 'iure';
    $request->quotaUser = 'consequatur';
    $request->region = 'accusamus';
    $request->requestId = 'cum';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'ex';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'eum';
    $request->key = 'molestias';
    $request->networkAttachment = 'fuga';
    $request->oauthToken = 'non';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'totam';
    $request->region = 'ut';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'illum';
    $request->userIp = 'adipisci';

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
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'harum';
    $request->fields = 'itaque';
    $request->key = 'porro';
    $request->oauthToken = 'ducimus';
    $request->optionsRequestedPolicyVersion = 323612;
    $request->prettyPrint = false;
    $request->project = 'optio';
    $request->quotaUser = 'ea';
    $request->region = 'corrupti';
    $request->resource = 'minus';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'aut';
    $request->userIp = 'nisi';

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
    ];
    $request->networkAttachment->connectionPreference = NetworkAttachmentConnectionPreferenceEnum::ACCEPT_AUTOMATIC;
    $request->networkAttachment->creationTimestamp = 'suscipit';
    $request->networkAttachment->description = 'atque';
    $request->networkAttachment->fingerprint = 'minus';
    $request->networkAttachment->id = 'debitis';
    $request->networkAttachment->kind = 'neque';
    $request->networkAttachment->name = 'Anita Spinka';
    $request->networkAttachment->network = 'magnam';
    $request->networkAttachment->producerAcceptLists = [
        'expedita',
        'sapiente',
        'deleniti',
    ];
    $request->networkAttachment->producerRejectLists = [
        'veritatis',
    ];
    $request->networkAttachment->region = 'incidunt';
    $request->networkAttachment->selfLink = 'eligendi';
    $request->networkAttachment->selfLinkWithId = 'amet';
    $request->networkAttachment->subnetworks = [
        'nihil',
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'libero';
    $request->key = 'cum';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->project = 'porro';
    $request->quotaUser = 'vel';
    $request->region = 'omnis';
    $request->requestId = 'recusandae';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'quam';
    $request->userIp = 'fugit';

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
    $request->accessToken = 'libero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'non';
    $request->fields = 'labore';
    $request->filter = 'incidunt';
    $request->key = 'tempore';
    $request->maxResults = 644817;
    $request->oauthToken = 'error';
    $request->orderBy = 'doloribus';
    $request->pageToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->project = 'rem';
    $request->quotaUser = 'est';
    $request->region = 'quis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'accusantium';
    $request->userIp = 'necessitatibus';

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

## computeNetworkAttachmentsPatch

Patches the specified NetworkAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAttachment;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAttachmentConnectedEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAttachmentConnectedEndpointStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAttachmentConnectionPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkAttachmentsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkAttachmentsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->networkAttachment1 = new NetworkAttachment();
    $request->networkAttachment1->connectionEndpoints = [
        new NetworkAttachmentConnectedEndpoint(),
        new NetworkAttachmentConnectedEndpoint(),
    ];
    $request->networkAttachment1->connectionPreference = NetworkAttachmentConnectionPreferenceEnum::INVALID;
    $request->networkAttachment1->creationTimestamp = 'officia';
    $request->networkAttachment1->description = 'soluta';
    $request->networkAttachment1->fingerprint = 'suscipit';
    $request->networkAttachment1->id = 'explicabo';
    $request->networkAttachment1->kind = 'recusandae';
    $request->networkAttachment1->name = 'Mathew Cole DVM';
    $request->networkAttachment1->network = 'cum';
    $request->networkAttachment1->producerAcceptLists = [
        'quod',
    ];
    $request->networkAttachment1->producerRejectLists = [
        'corrupti',
        'temporibus',
    ];
    $request->networkAttachment1->region = 'odit';
    $request->networkAttachment1->selfLink = 'voluptate';
    $request->networkAttachment1->selfLinkWithId = 'nobis';
    $request->networkAttachment1->subnetworks = [
        'beatae',
        'cupiditate',
    ];
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'minima';
    $request->key = 'expedita';
    $request->networkAttachmentPathParameter = 'modi';
    $request->oauthToken = 'expedita';
    $request->prettyPrint = false;
    $request->project = 'quaerat';
    $request->quotaUser = 'accusantium';
    $request->region = 'recusandae';
    $request->requestId = 'saepe';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'iusto';
    $request->userIp = 'quasi';

    $requestSecurity = new ComputeNetworkAttachmentsPatchSecurity();
    $requestSecurity->option1 = new ComputeNetworkAttachmentsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkAttachments->computeNetworkAttachmentsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionSetPolicyRequest = new RegionSetPolicyRequest();
    $request->regionSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->etag = 'ducimus';
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
    $request->regionSetPolicyRequest->policy->etag = 'similique';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 32843;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::JSON;
    $request->callback = 'modi';
    $request->fields = 'soluta';
    $request->key = 'inventore';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->project = 'vitae';
    $request->quotaUser = 'sit';
    $request->region = 'autem';
    $request->resource = 'rem';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'illum';
    $request->userIp = 'necessitatibus';

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
        'necessitatibus',
        'asperiores',
        'rem',
    ];
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'earum';
    $request->fields = 'velit';
    $request->key = 'fugiat';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->project = 'voluptatem';
    $request->quotaUser = 'quod';
    $request->region = 'minus';
    $request->resource = 'pariatur';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'tenetur';

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
