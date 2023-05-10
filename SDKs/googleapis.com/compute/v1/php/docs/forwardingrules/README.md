# forwardingRules

### Available Operations

* [computeForwardingRulesAggregatedList](#computeforwardingrulesaggregatedlist) - Retrieves an aggregated list of forwarding rules.
* [computeForwardingRulesDelete](#computeforwardingrulesdelete) - Deletes the specified ForwardingRule resource.
* [computeForwardingRulesGet](#computeforwardingrulesget) - Returns the specified ForwardingRule resource.
* [computeForwardingRulesInsert](#computeforwardingrulesinsert) - Creates a ForwardingRule resource in the specified project and region using the data included in the request.
* [computeForwardingRulesList](#computeforwardingruleslist) - Retrieves a list of ForwardingRule resources available to the specified project and region.
* [computeForwardingRulesPatch](#computeforwardingrulespatch) - Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.
* [computeForwardingRulesSetLabels](#computeforwardingrulessetlabels) - Sets the labels on the specified resource. To learn more about labels, read the Labeling Resources documentation.
* [computeForwardingRulesSetTarget](#computeforwardingrulessettarget) - Changes target URL for forwarding rule. The new target should be of the same type as the old target.

## computeForwardingRulesAggregatedList

Retrieves an aggregated list of forwarding rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeForwardingRulesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'alias';
    $request->fields = 'error';
    $request->filter = 'vel';
    $request->includeAllScopes = false;
    $request->key = 'accusantium';
    $request->maxResults = 664197;
    $request->oauthToken = 'laboriosam';
    $request->orderBy = 'ex';
    $request->pageToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'veritatis';
    $request->quotaUser = 'ullam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'similique';
    $request->userIp = 'incidunt';

    $requestSecurity = new ComputeForwardingRulesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeForwardingRulesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forwardingRules->computeForwardingRulesAggregatedList($request, $requestSecurity);

    if ($response->forwardingRuleAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeForwardingRulesDelete

Deletes the specified ForwardingRule resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeForwardingRulesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'delectus';
    $request->fields = 'omnis';
    $request->forwardingRule = 'sed';
    $request->key = 'nesciunt';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->project = 'quis';
    $request->quotaUser = 'cupiditate';
    $request->region = 'aliquam';
    $request->requestId = 'excepturi';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'laudantium';
    $request->userIp = 'velit';

    $requestSecurity = new ComputeForwardingRulesDeleteSecurity();
    $requestSecurity->option1 = new ComputeForwardingRulesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forwardingRules->computeForwardingRulesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeForwardingRulesGet

Returns the specified ForwardingRule resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeForwardingRulesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsa';
    $request->fields = 'quisquam';
    $request->forwardingRule = 'tenetur';
    $request->key = 'quas';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->project = 'aliquid';
    $request->quotaUser = 'asperiores';
    $request->region = 'a';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'perspiciatis';
    $request->userIp = 'accusantium';

    $requestSecurity = new ComputeForwardingRulesGetSecurity();
    $requestSecurity->option1 = new ComputeForwardingRulesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forwardingRules->computeForwardingRulesGet($request, $requestSecurity);

    if ($response->forwardingRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeForwardingRulesInsert

Creates a ForwardingRule resource in the specified project and region using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesInsertRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeForwardingRulesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->forwardingRule = new ForwardingRule();
    $request->forwardingRule->ipAddress = 'minus';
    $request->forwardingRule->ipProtocol = ForwardingRuleIPProtocolEnum::ICMP;
    $request->forwardingRule->allPorts = false;
    $request->forwardingRule->allowGlobalAccess = false;
    $request->forwardingRule->allowPscGlobalAccess = false;
    $request->forwardingRule->backendService = 'eveniet';
    $request->forwardingRule->baseForwardingRule = 'porro';
    $request->forwardingRule->creationTimestamp = 'tempore';
    $request->forwardingRule->description = 'quidem';
    $request->forwardingRule->fingerprint = 'modi';
    $request->forwardingRule->id = 'voluptates';
    $request->forwardingRule->ipVersion = ForwardingRuleIpVersionEnum::IPV4;
    $request->forwardingRule->isMirroringCollector = false;
    $request->forwardingRule->kind = 'eius';
    $request->forwardingRule->labelFingerprint = 'sequi';
    $request->forwardingRule->labels = [
        'asperiores' => 'esse',
        'blanditiis' => 'sint',
        'repellat' => 'a',
        'animi' => 'maiores',
    ];
    $request->forwardingRule->loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum::INVALID;
    $request->forwardingRule->metadataFilters = [
        new MetadataFilter(),
        new MetadataFilter(),
        new MetadataFilter(),
        new MetadataFilter(),
    ];
    $request->forwardingRule->name = 'Lewis Franecki';
    $request->forwardingRule->network = 'officia';
    $request->forwardingRule->networkTier = ForwardingRuleNetworkTierEnum::STANDARD_OVERRIDES_FIXED_STANDARD;
    $request->forwardingRule->noAutomateDnsZone = false;
    $request->forwardingRule->portRange = 'eum';
    $request->forwardingRule->ports = [
        'accusantium',
        'officia',
        'impedit',
        'quasi',
    ];
    $request->forwardingRule->pscConnectionId = 'blanditiis';
    $request->forwardingRule->pscConnectionStatus = ForwardingRulePscConnectionStatusEnum::CLOSED;
    $request->forwardingRule->region = 'quisquam';
    $request->forwardingRule->selfLink = 'eos';
    $request->forwardingRule->serviceDirectoryRegistrations = [
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
    ];
    $request->forwardingRule->serviceLabel = 'natus';
    $request->forwardingRule->serviceName = 'minus';
    $request->forwardingRule->sourceIpRanges = [
        'magnam',
    ];
    $request->forwardingRule->subnetwork = 'reprehenderit';
    $request->forwardingRule->target = 'quod';
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'amet';
    $request->fields = 'molestiae';
    $request->key = 'amet';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'perferendis';
    $request->region = 'necessitatibus';
    $request->requestId = 'architecto';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'dolore';
    $request->userIp = 'sunt';

    $requestSecurity = new ComputeForwardingRulesInsertSecurity();
    $requestSecurity->option1 = new ComputeForwardingRulesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forwardingRules->computeForwardingRulesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeForwardingRulesList

Retrieves a list of ForwardingRule resources available to the specified project and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeForwardingRulesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'earum';
    $request->fields = 'veniam';
    $request->filter = 'ipsam';
    $request->key = 'eaque';
    $request->maxResults = 350387;
    $request->oauthToken = 'veniam';
    $request->orderBy = 'nihil';
    $request->pageToken = 'ad';
    $request->prettyPrint = false;
    $request->project = 'nisi';
    $request->quotaUser = 'tenetur';
    $request->region = 'quis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'nemo';
    $request->userIp = 'suscipit';

    $requestSecurity = new ComputeForwardingRulesListSecurity();
    $requestSecurity->option1 = new ComputeForwardingRulesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forwardingRules->computeForwardingRulesList($request, $requestSecurity);

    if ($response->forwardingRuleList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeForwardingRulesPatch

Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesPatchRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeForwardingRulesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->forwardingRule1 = new ForwardingRule();
    $request->forwardingRule1->ipAddress = 'sit';
    $request->forwardingRule1->ipProtocol = ForwardingRuleIPProtocolEnum::SCTP;
    $request->forwardingRule1->allPorts = false;
    $request->forwardingRule1->allowGlobalAccess = false;
    $request->forwardingRule1->allowPscGlobalAccess = false;
    $request->forwardingRule1->backendService = 'repellendus';
    $request->forwardingRule1->baseForwardingRule = 'perferendis';
    $request->forwardingRule1->creationTimestamp = 'id';
    $request->forwardingRule1->description = 'sapiente';
    $request->forwardingRule1->fingerprint = 'sed';
    $request->forwardingRule1->id = 'possimus';
    $request->forwardingRule1->ipVersion = ForwardingRuleIpVersionEnum::UNSPECIFIED_VERSION;
    $request->forwardingRule1->isMirroringCollector = false;
    $request->forwardingRule1->kind = 'repudiandae';
    $request->forwardingRule1->labelFingerprint = 'architecto';
    $request->forwardingRule1->labels = [
        'pariatur' => 'harum',
    ];
    $request->forwardingRule1->loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum::EXTERNAL_MANAGED;
    $request->forwardingRule1->metadataFilters = [
        new MetadataFilter(),
        new MetadataFilter(),
        new MetadataFilter(),
        new MetadataFilter(),
    ];
    $request->forwardingRule1->name = 'Judith Schinner';
    $request->forwardingRule1->network = 'velit';
    $request->forwardingRule1->networkTier = ForwardingRuleNetworkTierEnum::STANDARD_OVERRIDES_FIXED_STANDARD;
    $request->forwardingRule1->noAutomateDnsZone = false;
    $request->forwardingRule1->portRange = 'praesentium';
    $request->forwardingRule1->ports = [
        'non',
        'quasi',
        'mollitia',
    ];
    $request->forwardingRule1->pscConnectionId = 'accusamus';
    $request->forwardingRule1->pscConnectionStatus = ForwardingRulePscConnectionStatusEnum::REJECTED;
    $request->forwardingRule1->region = 'cumque';
    $request->forwardingRule1->selfLink = 'doloremque';
    $request->forwardingRule1->serviceDirectoryRegistrations = [
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
    ];
    $request->forwardingRule1->serviceLabel = 'corrupti';
    $request->forwardingRule1->serviceName = 'eaque';
    $request->forwardingRule1->sourceIpRanges = [
        'aliquid',
        'excepturi',
        'magni',
    ];
    $request->forwardingRule1->subnetwork = 'tempora';
    $request->forwardingRule1->target = 'possimus';
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'accusamus';
    $request->forwardingRulePathParameter = 'optio';
    $request->key = 'delectus';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->project = 'quo';
    $request->quotaUser = 'quos';
    $request->region = 'asperiores';
    $request->requestId = 'voluptatum';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'corporis';
    $request->userIp = 'accusantium';

    $requestSecurity = new ComputeForwardingRulesPatchSecurity();
    $requestSecurity->option1 = new ComputeForwardingRulesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forwardingRules->computeForwardingRulesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeForwardingRulesSetLabels

Sets the labels on the specified resource. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeForwardingRulesSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionSetLabelsRequest = new RegionSetLabelsRequest();
    $request->regionSetLabelsRequest->labelFingerprint = 'aut';
    $request->regionSetLabelsRequest->labels = [
        'nostrum' => 'at',
        'possimus' => 'neque',
        'pariatur' => 'vel',
        'sapiente' => 'mollitia',
    ];
    $request->accessToken = 'quae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'non';
    $request->key = 'voluptates';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->project = 'aliquam';
    $request->quotaUser = 'quisquam';
    $request->region = 'quas';
    $request->requestId = 'consequuntur';
    $request->resource = 'maiores';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'aliquid';
    $request->userIp = 'laudantium';

    $requestSecurity = new ComputeForwardingRulesSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeForwardingRulesSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forwardingRules->computeForwardingRulesSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeForwardingRulesSetTarget

Changes target URL for forwarding rule. The new target should be of the same type as the old target.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesSetTargetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesSetTargetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesSetTargetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesSetTargetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeForwardingRulesSetTargetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetReference = new TargetReference();
    $request->targetReference->target = 'dolor';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'rem';
    $request->forwardingRule = 'voluptatum';
    $request->key = 'ducimus';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'tempora';
    $request->region = 'blanditiis';
    $request->requestId = 'numquam';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'voluptatum';
    $request->userIp = 'sit';

    $requestSecurity = new ComputeForwardingRulesSetTargetSecurity();
    $requestSecurity->option1 = new ComputeForwardingRulesSetTargetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forwardingRules->computeForwardingRulesSetTarget($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
