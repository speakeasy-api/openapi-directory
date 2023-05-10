# globalForwardingRules

### Available Operations

* [computeGlobalForwardingRulesDelete](#computeglobalforwardingrulesdelete) - Deletes the specified GlobalForwardingRule resource.
* [computeGlobalForwardingRulesGet](#computeglobalforwardingrulesget) - Returns the specified GlobalForwardingRule resource. Gets a list of available forwarding rules by making a list() request.
* [computeGlobalForwardingRulesInsert](#computeglobalforwardingrulesinsert) - Creates a GlobalForwardingRule resource in the specified project using the data included in the request.
* [computeGlobalForwardingRulesList](#computeglobalforwardingruleslist) - Retrieves a list of GlobalForwardingRule resources available to the specified project.
* [computeGlobalForwardingRulesPatch](#computeglobalforwardingrulespatch) - Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.
* [computeGlobalForwardingRulesSetLabels](#computeglobalforwardingrulessetlabels) - Sets the labels on the specified resource. To learn more about labels, read the Labeling resources documentation.
* [computeGlobalForwardingRulesSetTarget](#computeglobalforwardingrulessettarget) - Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.

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
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eaque';
    $request->fields = 'dolorem';
    $request->forwardingRule = 'architecto';
    $request->key = 'aperiam';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->project = 'nulla';
    $request->quotaUser = 'enim';
    $request->requestId = 'illo';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'delectus';
    $request->userIp = 'numquam';

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
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellat';
    $request->fields = 'quae';
    $request->forwardingRule = 'deleniti';
    $request->key = 'expedita';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'beatae';
    $request->userIp = 'similique';

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
    $request->forwardingRule->ipAddress = 'animi';
    $request->forwardingRule->ipProtocol = ForwardingRuleIPProtocolEnum::ICMP;
    $request->forwardingRule->allPorts = false;
    $request->forwardingRule->allowGlobalAccess = false;
    $request->forwardingRule->allowPscGlobalAccess = false;
    $request->forwardingRule->backendService = 'tenetur';
    $request->forwardingRule->baseForwardingRule = 'dignissimos';
    $request->forwardingRule->creationTimestamp = 'esse';
    $request->forwardingRule->description = 'animi';
    $request->forwardingRule->fingerprint = 'laudantium';
    $request->forwardingRule->id = 'esse';
    $request->forwardingRule->ipVersion = ForwardingRuleIpVersionEnum::UNSPECIFIED_VERSION;
    $request->forwardingRule->isMirroringCollector = false;
    $request->forwardingRule->kind = 'earum';
    $request->forwardingRule->labelFingerprint = 'velit';
    $request->forwardingRule->labels = [
        'eius' => 'rerum',
        'itaque' => 'dignissimos',
        'ipsam' => 'explicabo',
        'impedit' => 'aliquid',
    ];
    $request->forwardingRule->loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum::INTERNAL;
    $request->forwardingRule->metadataFilters = [
        new MetadataFilter(),
        new MetadataFilter(),
        new MetadataFilter(),
    ];
    $request->forwardingRule->name = 'Ms. Leslie Hagenes';
    $request->forwardingRule->network = 'dolor';
    $request->forwardingRule->networkTier = ForwardingRuleNetworkTierEnum::STANDARD;
    $request->forwardingRule->noAutomateDnsZone = false;
    $request->forwardingRule->portRange = 'libero';
    $request->forwardingRule->ports = [
        'illo',
        'minus',
        'quos',
    ];
    $request->forwardingRule->pscConnectionId = 'temporibus';
    $request->forwardingRule->pscConnectionStatus = ForwardingRulePscConnectionStatusEnum::PENDING;
    $request->forwardingRule->region = 'iusto';
    $request->forwardingRule->selfLink = 'enim';
    $request->forwardingRule->serviceDirectoryRegistrations = [
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
    ];
    $request->forwardingRule->serviceLabel = 'aperiam';
    $request->forwardingRule->serviceName = 'voluptates';
    $request->forwardingRule->sourceIpRanges = [
        'tempora',
        'quae',
        'omnis',
    ];
    $request->forwardingRule->subnetwork = 'illum';
    $request->forwardingRule->target = 'rem';
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'earum';
    $request->key = 'architecto';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'maiores';
    $request->requestId = 'sequi';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'esse';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facere';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cumque';
    $request->fields = 'aliquam';
    $request->filter = 'dolorum';
    $request->key = 'deserunt';
    $request->maxResults = 319834;
    $request->oauthToken = 'reiciendis';
    $request->orderBy = 'sequi';
    $request->pageToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'laborum';
    $request->quotaUser = 'nobis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'omnis';
    $request->userIp = 'aut';

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
    $request->forwardingRule1->ipAddress = 'officia';
    $request->forwardingRule1->ipProtocol = ForwardingRuleIPProtocolEnum::SCTP;
    $request->forwardingRule1->allPorts = false;
    $request->forwardingRule1->allowGlobalAccess = false;
    $request->forwardingRule1->allowPscGlobalAccess = false;
    $request->forwardingRule1->backendService = 'reprehenderit';
    $request->forwardingRule1->baseForwardingRule = 'quia';
    $request->forwardingRule1->creationTimestamp = 'necessitatibus';
    $request->forwardingRule1->description = 'accusantium';
    $request->forwardingRule1->fingerprint = 'ad';
    $request->forwardingRule1->id = 'nisi';
    $request->forwardingRule1->ipVersion = ForwardingRuleIpVersionEnum::IPV6;
    $request->forwardingRule1->isMirroringCollector = false;
    $request->forwardingRule1->kind = 'quia';
    $request->forwardingRule1->labelFingerprint = 'laudantium';
    $request->forwardingRule1->labels = [
        'odit' => 'iusto',
    ];
    $request->forwardingRule1->loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum::INTERNAL_SELF_MANAGED;
    $request->forwardingRule1->metadataFilters = [
        new MetadataFilter(),
    ];
    $request->forwardingRule1->name = 'Antonio Beer';
    $request->forwardingRule1->network = 'esse';
    $request->forwardingRule1->networkTier = ForwardingRuleNetworkTierEnum::FIXED_STANDARD;
    $request->forwardingRule1->noAutomateDnsZone = false;
    $request->forwardingRule1->portRange = 'distinctio';
    $request->forwardingRule1->ports = [
        'quam',
        'est',
        'aliquam',
        'delectus',
    ];
    $request->forwardingRule1->pscConnectionId = 'culpa';
    $request->forwardingRule1->pscConnectionStatus = ForwardingRulePscConnectionStatusEnum::PENDING;
    $request->forwardingRule1->region = 'iusto';
    $request->forwardingRule1->selfLink = 'quod';
    $request->forwardingRule1->serviceDirectoryRegistrations = [
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
    ];
    $request->forwardingRule1->serviceLabel = 'voluptas';
    $request->forwardingRule1->serviceName = 'non';
    $request->forwardingRule1->sourceIpRanges = [
        'laborum',
        'voluptas',
    ];
    $request->forwardingRule1->subnetwork = 'doloribus';
    $request->forwardingRule1->target = 'animi';
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->fields = 'necessitatibus';
    $request->forwardingRulePathParameter = 'distinctio';
    $request->key = 'maiores';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->project = 'voluptatem';
    $request->quotaUser = 'optio';
    $request->requestId = 'sequi';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'voluptatibus';

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
    $request->globalSetLabelsRequest->labelFingerprint = 'sed';
    $request->globalSetLabelsRequest->labels = [
        'rerum' => 'in',
    ];
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ratione';
    $request->fields = 'dolor';
    $request->key = 'nisi';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'reiciendis';
    $request->quotaUser = 'itaque';
    $request->resource = 'vitae';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'accusantium';
    $request->userIp = 'quod';

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
    $request->targetReference->target = 'quos';
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odio';
    $request->fields = 'provident';
    $request->forwardingRule = 'sapiente';
    $request->key = 'aperiam';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'provident';
    $request->requestId = 'ex';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'unde';
    $request->userIp = 'alias';

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
