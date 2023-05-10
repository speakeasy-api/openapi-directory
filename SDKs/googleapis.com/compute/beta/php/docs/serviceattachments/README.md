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
    $request->accessToken = 'iste';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'debitis';
    $request->fields = 'reiciendis';
    $request->filter = 'optio';
    $request->includeAllScopes = false;
    $request->key = 'perferendis';
    $request->maxResults = 689087;
    $request->oauthToken = 'fugit';
    $request->orderBy = 'velit';
    $request->pageToken = 'natus';
    $request->prettyPrint = false;
    $request->project = 'eum';
    $request->quotaUser = 'alias';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'eligendi';
    $request->userIp = 'doloribus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facere';
    $request->fields = 'error';
    $request->key = 'atque';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'architecto';
    $request->region = 'officia';
    $request->requestId = 'consectetur';
    $request->serviceAttachment = 'tempora';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'et';
    $request->userIp = 'veniam';

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
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'voluptatem';
    $request->key = 'quaerat';
    $request->oauthToken = 'eius';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'officia';
    $request->region = 'deserunt';
    $request->serviceAttachment = 'saepe';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'ex';
    $request->userIp = 'saepe';

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
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'consequuntur';
    $request->key = 'quae';
    $request->oauthToken = 'saepe';
    $request->optionsRequestedPolicyVersion = 147821;
    $request->prettyPrint = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'cupiditate';
    $request->region = 'illo';
    $request->resource = 'totam';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'iure';
    $request->userIp = 'quis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->serviceAttachment = new ServiceAttachment();
    $request->serviceAttachment->connectedEndpoints = [
        new ServiceAttachmentConnectedEndpoint(),
    ];
    $request->serviceAttachment->connectionPreference = ServiceAttachmentConnectionPreferenceEnum::ACCEPT_AUTOMATIC;
    $request->serviceAttachment->consumerAcceptLists = [
        new ServiceAttachmentConsumerProjectLimit(),
        new ServiceAttachmentConsumerProjectLimit(),
        new ServiceAttachmentConsumerProjectLimit(),
    ];
    $request->serviceAttachment->consumerRejectLists = [
        'minus',
        'earum',
    ];
    $request->serviceAttachment->creationTimestamp = 'amet';
    $request->serviceAttachment->description = 'excepturi';
    $request->serviceAttachment->domainNames = [
        'fuga',
        'voluptatem',
        'soluta',
    ];
    $request->serviceAttachment->enableProxyProtocol = false;
    $request->serviceAttachment->fingerprint = 'nesciunt';
    $request->serviceAttachment->id = 'in';
    $request->serviceAttachment->kind = 'eius';
    $request->serviceAttachment->name = 'Heather Kovacek';
    $request->serviceAttachment->natSubnets = [
        'nemo',
        'minus',
        'officiis',
    ];
    $request->serviceAttachment->producerForwardingRule = 'ipsum';
    $request->serviceAttachment->pscServiceAttachmentId = new Uint128();
    $request->serviceAttachment->pscServiceAttachmentId->high = 'doloremque';
    $request->serviceAttachment->pscServiceAttachmentId->low = 'ut';
    $request->serviceAttachment->reconcileConnections = false;
    $request->serviceAttachment->region = 'numquam';
    $request->serviceAttachment->selfLink = 'distinctio';
    $request->serviceAttachment->targetService = 'necessitatibus';
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'expedita';
    $request->fields = 'neque';
    $request->key = 'cum';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->project = 'quasi';
    $request->quotaUser = 'eligendi';
    $request->region = 'cum';
    $request->requestId = 'corporis';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'neque';
    $request->userIp = 'quo';

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
    $request->accessToken = 'et';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aperiam';
    $request->fields = 'repellendus';
    $request->filter = 'deleniti';
    $request->key = 'esse';
    $request->maxResults = 480529;
    $request->oauthToken = 'explicabo';
    $request->orderBy = 'cumque';
    $request->pageToken = 'ipsam';
    $request->prettyPrint = false;
    $request->project = 'consectetur';
    $request->quotaUser = 'ad';
    $request->region = 'itaque';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'illo';
    $request->uploadProtocol = 'possimus';
    $request->userIp = 'possimus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->serviceAttachment1 = new ServiceAttachment();
    $request->serviceAttachment1->connectedEndpoints = [
        new ServiceAttachmentConnectedEndpoint(),
        new ServiceAttachmentConnectedEndpoint(),
        new ServiceAttachmentConnectedEndpoint(),
    ];
    $request->serviceAttachment1->connectionPreference = ServiceAttachmentConnectionPreferenceEnum::CONNECTION_PREFERENCE_UNSPECIFIED;
    $request->serviceAttachment1->consumerAcceptLists = [
        new ServiceAttachmentConsumerProjectLimit(),
        new ServiceAttachmentConsumerProjectLimit(),
    ];
    $request->serviceAttachment1->consumerRejectLists = [
        'rerum',
        'non',
    ];
    $request->serviceAttachment1->creationTimestamp = 'quis';
    $request->serviceAttachment1->description = 'labore';
    $request->serviceAttachment1->domainNames = [
        'natus',
        'blanditiis',
        'sequi',
        'vitae',
    ];
    $request->serviceAttachment1->enableProxyProtocol = false;
    $request->serviceAttachment1->fingerprint = 'accusamus';
    $request->serviceAttachment1->id = 'molestiae';
    $request->serviceAttachment1->kind = 'omnis';
    $request->serviceAttachment1->name = 'Essie Barton';
    $request->serviceAttachment1->natSubnets = [
        'voluptatibus',
        'enim',
    ];
    $request->serviceAttachment1->producerForwardingRule = 'eius';
    $request->serviceAttachment1->pscServiceAttachmentId = new Uint128();
    $request->serviceAttachment1->pscServiceAttachmentId->high = 'necessitatibus';
    $request->serviceAttachment1->pscServiceAttachmentId->low = 'nam';
    $request->serviceAttachment1->reconcileConnections = false;
    $request->serviceAttachment1->region = 'delectus';
    $request->serviceAttachment1->selfLink = 'quia';
    $request->serviceAttachment1->targetService = 'pariatur';
    $request->accessToken = 'magni';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolore';
    $request->fields = 'laboriosam';
    $request->key = 'aut';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->project = 'odio';
    $request->quotaUser = 'earum';
    $request->region = 'reiciendis';
    $request->requestId = 'est';
    $request->serviceAttachmentPathParameter = 'ut';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'est';
    $request->userIp = 'voluptatum';

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
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->etag = 'earum';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'cumque';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 842230;
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'perferendis';
    $request->key = 'soluta';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->project = 'ipsam';
    $request->quotaUser = 'dolorum';
    $request->region = 'ipsa';
    $request->resource = 'minus';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'quas';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'blanditiis',
        'commodi',
    ];
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'voluptates';
    $request->key = 'similique';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->project = 'nobis';
    $request->quotaUser = 'laboriosam';
    $request->region = 'non';
    $request->resource = 'corporis';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'nesciunt';
    $request->userIp = 'eos';

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
