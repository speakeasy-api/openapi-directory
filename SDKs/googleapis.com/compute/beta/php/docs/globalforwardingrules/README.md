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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laudantium';
    $request->fields = 'iusto';
    $request->forwardingRule = 'corrupti';
    $request->key = 'molestiae';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->project = 'iure';
    $request->quotaUser = 'ab';
    $request->requestId = 'quaerat';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'sapiente';
    $request->userIp = 'corporis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->fields = 'laudantium';
    $request->forwardingRule = 'nam';
    $request->key = 'nemo';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'ipsam';
    $request->quotaUser = 'minima';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'perferendis';
    $request->userIp = 'corrupti';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->forwardingRule = new ForwardingRule();
    $request->forwardingRule->ipAddress = 'fugiat';
    $request->forwardingRule->ipProtocol = ForwardingRuleIPProtocolEnum::ESP;
    $request->forwardingRule->allPorts = false;
    $request->forwardingRule->allowGlobalAccess = false;
    $request->forwardingRule->allowPscGlobalAccess = false;
    $request->forwardingRule->backendService = 'doloremque';
    $request->forwardingRule->baseForwardingRule = 'cum';
    $request->forwardingRule->creationTimestamp = 'nobis';
    $request->forwardingRule->description = 'similique';
    $request->forwardingRule->fingerprint = 'porro';
    $request->forwardingRule->id = 'impedit';
    $request->forwardingRule->ipVersion = ForwardingRuleIpVersionEnum::IPV6;
    $request->forwardingRule->isMirroringCollector = false;
    $request->forwardingRule->kind = 'cumque';
    $request->forwardingRule->labelFingerprint = 'soluta';
    $request->forwardingRule->labels = [
        'laboriosam' => 'nam',
        'enim' => 'maiores',
        'consectetur' => 'necessitatibus',
        'maxime' => 'cupiditate',
    ];
    $request->forwardingRule->loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum::EXTERNAL;
    $request->forwardingRule->metadataFilters = [
        new MetadataFilter(),
        new MetadataFilter(),
        new MetadataFilter(),
    ];
    $request->forwardingRule->name = 'Carol Gutkowski';
    $request->forwardingRule->network = 'explicabo';
    $request->forwardingRule->networkTier = ForwardingRuleNetworkTierEnum::PREMIUM;
    $request->forwardingRule->noAutomateDnsZone = false;
    $request->forwardingRule->portRange = 'cum';
    $request->forwardingRule->ports = [
        'possimus',
        'fugit',
        'ipsam',
    ];
    $request->forwardingRule->pscConnectionId = 'nostrum';
    $request->forwardingRule->pscConnectionStatus = ForwardingRulePscConnectionStatusEnum::CLOSED;
    $request->forwardingRule->region = 'voluptatum';
    $request->forwardingRule->selfLink = 'quasi';
    $request->forwardingRule->serviceDirectoryRegistrations = [
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
    ];
    $request->forwardingRule->serviceLabel = 'nobis';
    $request->forwardingRule->serviceName = 'tempora';
    $request->forwardingRule->sourceIpRanges = [
        'eius',
        'expedita',
    ];
    $request->forwardingRule->subnetwork = 'aperiam';
    $request->forwardingRule->target = 'voluptates';
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatem';
    $request->fields = 'repudiandae';
    $request->key = 'corporis';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'eos';
    $request->quotaUser = 'aliquam';
    $request->requestId = 'blanditiis';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'asperiores';

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
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'animi';
    $request->fields = 'provident';
    $request->filter = 'beatae';
    $request->key = 'ipsa';
    $request->maxResults = 650914;
    $request->oauthToken = 'nam';
    $request->orderBy = 'assumenda';
    $request->pageToken = 'quo';
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'tempore';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'suscipit';

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
    $request->forwardingRule1->ipAddress = 'nisi';
    $request->forwardingRule1->ipProtocol = ForwardingRuleIPProtocolEnum::ICMP;
    $request->forwardingRule1->allPorts = false;
    $request->forwardingRule1->allowGlobalAccess = false;
    $request->forwardingRule1->allowPscGlobalAccess = false;
    $request->forwardingRule1->backendService = 'provident';
    $request->forwardingRule1->baseForwardingRule = 'laboriosam';
    $request->forwardingRule1->creationTimestamp = 'accusamus';
    $request->forwardingRule1->description = 'ab';
    $request->forwardingRule1->fingerprint = 'itaque';
    $request->forwardingRule1->id = 'quisquam';
    $request->forwardingRule1->ipVersion = ForwardingRuleIpVersionEnum::IPV4;
    $request->forwardingRule1->isMirroringCollector = false;
    $request->forwardingRule1->kind = 'alias';
    $request->forwardingRule1->labelFingerprint = 'qui';
    $request->forwardingRule1->labels = [
        'vitae' => 'quidem',
    ];
    $request->forwardingRule1->loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum::EXTERNAL_MANAGED;
    $request->forwardingRule1->metadataFilters = [
        new MetadataFilter(),
    ];
    $request->forwardingRule1->name = 'Angel Lakin';
    $request->forwardingRule1->network = 'eligendi';
    $request->forwardingRule1->networkTier = ForwardingRuleNetworkTierEnum::STANDARD;
    $request->forwardingRule1->noAutomateDnsZone = false;
    $request->forwardingRule1->portRange = 'amet';
    $request->forwardingRule1->ports = [
        'nobis',
        'asperiores',
        'temporibus',
        'id',
    ];
    $request->forwardingRule1->pscConnectionId = 'atque';
    $request->forwardingRule1->pscConnectionStatus = ForwardingRulePscConnectionStatusEnum::STATUS_UNSPECIFIED;
    $request->forwardingRule1->region = 'sit';
    $request->forwardingRule1->selfLink = 'quo';
    $request->forwardingRule1->serviceDirectoryRegistrations = [
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
    ];
    $request->forwardingRule1->serviceLabel = 'aliquam';
    $request->forwardingRule1->serviceName = 'provident';
    $request->forwardingRule1->sourceIpRanges = [
        'earum',
        'doloremque',
        'ipsum',
        'alias',
    ];
    $request->forwardingRule1->subnetwork = 'doloremque';
    $request->forwardingRule1->target = 'tempora';
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'atque';
    $request->fields = 'officia';
    $request->forwardingRulePathParameter = 'ex';
    $request->key = 'architecto';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->project = 'laborum';
    $request->quotaUser = 'veritatis';
    $request->requestId = 'quod';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'qui';
    $request->userIp = 'accusantium';

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
    $request->globalSetLabelsRequest->labelFingerprint = 'atque';
    $request->globalSetLabelsRequest->labels = [
        'tenetur' => 'voluptate',
        'quam' => 'quod',
        'vitae' => 'sapiente',
    ];
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->fields = 'inventore';
    $request->key = 'facere';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'ab';
    $request->resource = 'ex';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'sed';

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
    $request->targetReference->target = 'sequi';
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'laborum';
    $request->forwardingRule = 'omnis';
    $request->key = 'nihil';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->project = 'sapiente';
    $request->quotaUser = 'velit';
    $request->requestId = 'adipisci';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'optio';
    $request->userIp = 'illum';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'molestias',
        'ipsam',
        'esse',
        'laborum',
    ];
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'quasi';
    $request->key = 'quas';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->project = 'commodi';
    $request->quotaUser = 'porro';
    $request->resource = 'aliquid';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'quidem';
    $request->userIp = 'explicabo';

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
