# globalForwardingRules

### Available Operations

* [computeGlobalForwardingRulesDelete](#computeglobalforwardingrulesdelete) - Deletes the specified GlobalForwardingRule resource.
* [computeGlobalForwardingRulesGet](#computeglobalforwardingrulesget) - Returns the specified GlobalForwardingRule resource. Gets a list of available forwarding rules by making a list() request.
* [computeGlobalForwardingRulesInsert](#computeglobalforwardingrulesinsert) - Creates a GlobalForwardingRule resource in the specified project using the data included in the request.
* [computeGlobalForwardingRulesList](#computeglobalforwardingruleslist) - Retrieves a list of GlobalForwardingRule resources available to the specified project.
* [computeGlobalForwardingRulesPatch](#computeglobalforwardingrulespatch) - Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.
* [computeGlobalForwardingRulesSetLabels](#computeglobalforwardingrulessetlabels) - Sets the labels on the specified resource. To learn more about labels, read the Labeling resources documentation.
* [computeGlobalForwardingRulesSetTarget](#computeglobalforwardingrulessettarget) - Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.
* [computeGlobalForwardingRulesTestIamPermissions](#computeglobalforwardingrulestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeGlobalForwardingRulesDelete

Deletes the specified GlobalForwardingRule resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalForwardingRulesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'error';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'consectetur';
    $request->forwardingRule = 'sapiente';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->project = 'repellendus';
    $request->quotaUser = 'omnis';
    $request->requestId = 'delectus';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'aut';

    $requestSecurity = new ComputeGlobalForwardingRulesDeleteSecurity();
    $requestSecurity->option1 = new ComputeGlobalForwardingRulesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalForwardingRules->computeGlobalForwardingRulesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalForwardingRulesGet

Returns the specified GlobalForwardingRule resource. Gets a list of available forwarding rules by making a list() request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalForwardingRulesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'asperiores';
    $request->fields = 'modi';
    $request->forwardingRule = 'facere';
    $request->key = 'neque';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->project = 'in';
    $request->quotaUser = 'sed';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'porro';
    $request->userIp = 'fugiat';

    $requestSecurity = new ComputeGlobalForwardingRulesGetSecurity();
    $requestSecurity->option1 = new ComputeGlobalForwardingRulesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalForwardingRules->computeGlobalForwardingRulesGet($request, $requestSecurity);

    if ($response->forwardingRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalForwardingRulesInsert

Creates a GlobalForwardingRule resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingRule;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingRuleIPProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingRuleIpVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingRuleLoadBalancingSchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilter;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilterLabelMatch;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilterFilterMatchCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingRuleNetworkTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingRulePscConnectionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingRuleServiceDirectoryRegistration;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalForwardingRulesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->forwardingRule = new ForwardingRule();
    $request->forwardingRule->ipAddress = 'ipsa';
    $request->forwardingRule->ipProtocol = ForwardingRuleIPProtocolEnum::UDP;
    $request->forwardingRule->allPorts = false;
    $request->forwardingRule->allowGlobalAccess = false;
    $request->forwardingRule->allowPscGlobalAccess = false;
    $request->forwardingRule->backendService = 'labore';
    $request->forwardingRule->baseForwardingRule = 'vero';
    $request->forwardingRule->creationTimestamp = 'eos';
    $request->forwardingRule->description = 'quas';
    $request->forwardingRule->fingerprint = 'quasi';
    $request->forwardingRule->id = 'architecto';
    $request->forwardingRule->ipVersion = ForwardingRuleIpVersionEnum::IPV6;
    $request->forwardingRule->isMirroringCollector = false;
    $request->forwardingRule->kind = 'iusto';
    $request->forwardingRule->labelFingerprint = 'fugiat';
    $request->forwardingRule->labels = [
        'iure' => 'laudantium',
        'modi' => 'magnam',
    ];
    $request->forwardingRule->loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum::INVALID;
    $request->forwardingRule->metadataFilters = [
        new MetadataFilter(),
        new MetadataFilter(),
        new MetadataFilter(),
        new MetadataFilter(),
    ];
    $request->forwardingRule->name = 'Ellis Lakin';
    $request->forwardingRule->network = 'unde';
    $request->forwardingRule->networkTier = ForwardingRuleNetworkTierEnum::FIXED_STANDARD;
    $request->forwardingRule->noAutomateDnsZone = false;
    $request->forwardingRule->portRange = 'eum';
    $request->forwardingRule->ports = [
        'eveniet',
        'laboriosam',
    ];
    $request->forwardingRule->pscConnectionId = 'ratione';
    $request->forwardingRule->pscConnectionStatus = ForwardingRulePscConnectionStatusEnum::PENDING;
    $request->forwardingRule->region = 'quidem';
    $request->forwardingRule->selfLink = 'illum';
    $request->forwardingRule->selfLinkWithId = 'reiciendis';
    $request->forwardingRule->serviceDirectoryRegistrations = [
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
    ];
    $request->forwardingRule->serviceLabel = 'dolores';
    $request->forwardingRule->serviceName = 'consequatur';
    $request->forwardingRule->sourceIpRanges = [
        'quia',
    ];
    $request->forwardingRule->subnetwork = 'quidem';
    $request->forwardingRule->target = 'voluptas';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dignissimos';
    $request->fields = 'omnis';
    $request->key = 'omnis';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'dolorem';
    $request->quotaUser = 'quidem';
    $request->requestId = 'molestiae';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'dolor';

    $requestSecurity = new ComputeGlobalForwardingRulesInsertSecurity();
    $requestSecurity->option1 = new ComputeGlobalForwardingRulesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalForwardingRules->computeGlobalForwardingRulesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalForwardingRulesList

Retrieves a list of GlobalForwardingRule resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalForwardingRulesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'asperiores';
    $request->fields = 'reprehenderit';
    $request->filter = 'deserunt';
    $request->key = 'itaque';
    $request->maxResults = 93254;
    $request->oauthToken = 'eos';
    $request->orderBy = 'impedit';
    $request->pageToken = 'ex';
    $request->prettyPrint = false;
    $request->project = 'praesentium';
    $request->quotaUser = 'natus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'tenetur';
    $request->userIp = 'laudantium';

    $requestSecurity = new ComputeGlobalForwardingRulesListSecurity();
    $requestSecurity->option1 = new ComputeGlobalForwardingRulesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalForwardingRules->computeGlobalForwardingRulesList($request, $requestSecurity);

    if ($response->forwardingRuleList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalForwardingRulesPatch

Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingRule;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingRuleIPProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingRuleIpVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingRuleLoadBalancingSchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilter;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilterLabelMatch;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilterFilterMatchCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingRuleNetworkTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingRulePscConnectionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForwardingRuleServiceDirectoryRegistration;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalForwardingRulesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->forwardingRule1 = new ForwardingRule();
    $request->forwardingRule1->ipAddress = 'eligendi';
    $request->forwardingRule1->ipProtocol = ForwardingRuleIPProtocolEnum::UDP;
    $request->forwardingRule1->allPorts = false;
    $request->forwardingRule1->allowGlobalAccess = false;
    $request->forwardingRule1->allowPscGlobalAccess = false;
    $request->forwardingRule1->backendService = 'dicta';
    $request->forwardingRule1->baseForwardingRule = 'inventore';
    $request->forwardingRule1->creationTimestamp = 'ullam';
    $request->forwardingRule1->description = 'iusto';
    $request->forwardingRule1->fingerprint = 'inventore';
    $request->forwardingRule1->id = 'voluptate';
    $request->forwardingRule1->ipVersion = ForwardingRuleIpVersionEnum::IPV4;
    $request->forwardingRule1->isMirroringCollector = false;
    $request->forwardingRule1->kind = 'dolorem';
    $request->forwardingRule1->labelFingerprint = 'eaque';
    $request->forwardingRule1->labels = [
        'amet' => 'voluptate',
        'voluptate' => 'pariatur',
    ];
    $request->forwardingRule1->loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum::INTERNAL_SELF_MANAGED;
    $request->forwardingRule1->metadataFilters = [
        new MetadataFilter(),
        new MetadataFilter(),
        new MetadataFilter(),
        new MetadataFilter(),
    ];
    $request->forwardingRule1->name = 'Jimmie McGlynn';
    $request->forwardingRule1->network = 'omnis';
    $request->forwardingRule1->networkTier = ForwardingRuleNetworkTierEnum::SELECT;
    $request->forwardingRule1->noAutomateDnsZone = false;
    $request->forwardingRule1->portRange = 'exercitationem';
    $request->forwardingRule1->ports = [
        'sequi',
        'quis',
        'commodi',
        'vel',
    ];
    $request->forwardingRule1->pscConnectionId = 'rem';
    $request->forwardingRule1->pscConnectionStatus = ForwardingRulePscConnectionStatusEnum::NEEDS_ATTENTION;
    $request->forwardingRule1->region = 'aperiam';
    $request->forwardingRule1->selfLink = 'perspiciatis';
    $request->forwardingRule1->selfLinkWithId = 'fugit';
    $request->forwardingRule1->serviceDirectoryRegistrations = [
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
    ];
    $request->forwardingRule1->serviceLabel = 'unde';
    $request->forwardingRule1->serviceName = 'cumque';
    $request->forwardingRule1->sourceIpRanges = [
        'repellendus',
    ];
    $request->forwardingRule1->subnetwork = 'temporibus';
    $request->forwardingRule1->target = 'minus';
    $request->accessToken = 'minima';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'beatae';
    $request->fields = 'vitae';
    $request->forwardingRulePathParameter = 'veritatis';
    $request->key = 'facere';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'laborum';
    $request->quotaUser = 'dicta';
    $request->requestId = 'voluptatem';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'aliquid';
    $request->userIp = 'pariatur';

    $requestSecurity = new ComputeGlobalForwardingRulesPatchSecurity();
    $requestSecurity->option1 = new ComputeGlobalForwardingRulesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalForwardingRules->computeGlobalForwardingRulesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalForwardingRulesSetLabels

Sets the labels on the specified resource. To learn more about labels, read the Labeling resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalForwardingRulesSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetLabelsRequest = new GlobalSetLabelsRequest();
    $request->globalSetLabelsRequest->labelFingerprint = 'numquam';
    $request->globalSetLabelsRequest->labels = [
        'est' => 'quaerat',
    ];
    $request->accessToken = 'facere';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'alias';
    $request->key = 'sapiente';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'quia';
    $request->resource = 'vitae';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'quas';
    $request->userIp = 'ipsa';

    $requestSecurity = new ComputeGlobalForwardingRulesSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeGlobalForwardingRulesSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalForwardingRules->computeGlobalForwardingRulesSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalForwardingRulesSetTarget

Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetTargetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetTargetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetTargetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetTargetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalForwardingRulesSetTargetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetReference = new TargetReference();
    $request->targetReference->target = 'placeat';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sit';
    $request->fields = 'possimus';
    $request->forwardingRule = 'distinctio';
    $request->key = 'distinctio';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->project = 'illum';
    $request->quotaUser = 'soluta';
    $request->requestId = 'magnam';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'esse';

    $requestSecurity = new ComputeGlobalForwardingRulesSetTargetSecurity();
    $requestSecurity->option1 = new ComputeGlobalForwardingRulesSetTargetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalForwardingRules->computeGlobalForwardingRulesSetTarget($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalForwardingRulesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalForwardingRulesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'reiciendis',
        'facilis',
        'aliquam',
    ];
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'ab';
    $request->key = 'officiis';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->project = 'rerum';
    $request->quotaUser = 'placeat';
    $request->resource = 'ab';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'porro';

    $requestSecurity = new ComputeGlobalForwardingRulesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeGlobalForwardingRulesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalForwardingRules->computeGlobalForwardingRulesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
