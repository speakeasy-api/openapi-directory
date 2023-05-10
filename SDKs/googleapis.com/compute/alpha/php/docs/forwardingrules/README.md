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
* [computeForwardingRulesTestIamPermissions](#computeforwardingrulestestiampermissions) - Returns permissions that a caller has on the specified resource.

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->fields = 'necessitatibus';
    $request->filter = 'distinctio';
    $request->includeAllScopes = false;
    $request->key = 'maiores';
    $request->maxResults = 386538;
    $request->oauthToken = 'voluptatem';
    $request->orderBy = 'optio';
    $request->pageToken = 'sequi';
    $request->prettyPrint = false;
    $request->project = 'sunt';
    $request->quotaUser = 'vitae';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'doloremque';
    $request->userIp = 'sed';

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
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nostrum';
    $request->fields = 'temporibus';
    $request->forwardingRule = 'ratione';
    $request->key = 'dolor';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->project = 'dignissimos';
    $request->quotaUser = 'reiciendis';
    $request->region = 'itaque';
    $request->requestId = 'vitae';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'accusantium';
    $request->userIp = 'quod';

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
    $request->accessToken = 'quos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'odio';
    $request->forwardingRule = 'provident';
    $request->key = 'sapiente';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->project = 'similique';
    $request->quotaUser = 'nesciunt';
    $request->region = 'provident';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'repellendus';
    $request->userIp = 'unde';

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
    $request->forwardingRule->ipAddress = 'impedit';
    $request->forwardingRule->ipProtocol = ForwardingRuleIPProtocolEnum::ALL;
    $request->forwardingRule->allPorts = false;
    $request->forwardingRule->allowGlobalAccess = false;
    $request->forwardingRule->allowPscGlobalAccess = false;
    $request->forwardingRule->backendService = 'commodi';
    $request->forwardingRule->baseForwardingRule = 'labore';
    $request->forwardingRule->creationTimestamp = 'expedita';
    $request->forwardingRule->description = 'in';
    $request->forwardingRule->fingerprint = 'quisquam';
    $request->forwardingRule->id = 'sunt';
    $request->forwardingRule->ipVersion = ForwardingRuleIpVersionEnum::IPV4;
    $request->forwardingRule->isMirroringCollector = false;
    $request->forwardingRule->kind = 'nulla';
    $request->forwardingRule->labelFingerprint = 'maiores';
    $request->forwardingRule->labels = [
        'mollitia' => 'impedit',
        'accusamus' => 'et',
        'quas' => 'blanditiis',
    ];
    $request->forwardingRule->loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum::INTERNAL_SELF_MANAGED;
    $request->forwardingRule->metadataFilters = [
        new MetadataFilter(),
    ];
    $request->forwardingRule->name = 'Troy Upton';
    $request->forwardingRule->network = 'impedit';
    $request->forwardingRule->networkTier = ForwardingRuleNetworkTierEnum::SELECT;
    $request->forwardingRule->noAutomateDnsZone = false;
    $request->forwardingRule->portRange = 'impedit';
    $request->forwardingRule->ports = [
        'eligendi',
        'recusandae',
    ];
    $request->forwardingRule->pscConnectionId = 'ex';
    $request->forwardingRule->pscConnectionStatus = ForwardingRulePscConnectionStatusEnum::ACCEPTED;
    $request->forwardingRule->region = 'veritatis';
    $request->forwardingRule->selfLink = 'maiores';
    $request->forwardingRule->selfLinkWithId = 'itaque';
    $request->forwardingRule->serviceDirectoryRegistrations = [
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
    ];
    $request->forwardingRule->serviceLabel = 'quidem';
    $request->forwardingRule->serviceName = 'illo';
    $request->forwardingRule->sourceIpRanges = [
        'dignissimos',
        'minus',
        'distinctio',
        'possimus',
    ];
    $request->forwardingRule->subnetwork = 'cum';
    $request->forwardingRule->target = 'suscipit';
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'nihil';
    $request->key = 'quaerat';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->project = 'ducimus';
    $request->quotaUser = 'laudantium';
    $request->region = 'rerum';
    $request->requestId = 'deserunt';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'ad';
    $request->userIp = 'sequi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'odio';
    $request->filter = 'nulla';
    $request->key = 'impedit';
    $request->maxResults = 586277;
    $request->oauthToken = 'illo';
    $request->orderBy = 'exercitationem';
    $request->pageToken = 'laborum';
    $request->prettyPrint = false;
    $request->project = 'illum';
    $request->quotaUser = 'fugit';
    $request->region = 'maxime';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'repellat';
    $request->userIp = 'nostrum';

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
    $request->forwardingRule1->ipAddress = 'quibusdam';
    $request->forwardingRule1->ipProtocol = ForwardingRuleIPProtocolEnum::ICMP;
    $request->forwardingRule1->allPorts = false;
    $request->forwardingRule1->allowGlobalAccess = false;
    $request->forwardingRule1->allowPscGlobalAccess = false;
    $request->forwardingRule1->backendService = 'esse';
    $request->forwardingRule1->baseForwardingRule = 'explicabo';
    $request->forwardingRule1->creationTimestamp = 'consectetur';
    $request->forwardingRule1->description = 'temporibus';
    $request->forwardingRule1->fingerprint = 'optio';
    $request->forwardingRule1->id = 'ipsa';
    $request->forwardingRule1->ipVersion = ForwardingRuleIpVersionEnum::UNSPECIFIED_VERSION;
    $request->forwardingRule1->isMirroringCollector = false;
    $request->forwardingRule1->kind = 'exercitationem';
    $request->forwardingRule1->labelFingerprint = 'culpa';
    $request->forwardingRule1->labels = [
        'aspernatur' => 'sapiente',
        'neque' => 'officia',
        'suscipit' => 'harum',
        'ducimus' => 'doloremque',
    ];
    $request->forwardingRule1->loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum::EXTERNAL;
    $request->forwardingRule1->metadataFilters = [
        new MetadataFilter(),
        new MetadataFilter(),
        new MetadataFilter(),
    ];
    $request->forwardingRule1->name = 'Naomi Krajcik';
    $request->forwardingRule1->network = 'ab';
    $request->forwardingRule1->networkTier = ForwardingRuleNetworkTierEnum::PREMIUM;
    $request->forwardingRule1->noAutomateDnsZone = false;
    $request->forwardingRule1->portRange = 'amet';
    $request->forwardingRule1->ports = [
        'corporis',
        'est',
        'iure',
        'quisquam',
    ];
    $request->forwardingRule1->pscConnectionId = 'provident';
    $request->forwardingRule1->pscConnectionStatus = ForwardingRulePscConnectionStatusEnum::PENDING;
    $request->forwardingRule1->region = 'nam';
    $request->forwardingRule1->selfLink = 'nemo';
    $request->forwardingRule1->selfLinkWithId = 'enim';
    $request->forwardingRule1->serviceDirectoryRegistrations = [
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
    ];
    $request->forwardingRule1->serviceLabel = 'minima';
    $request->forwardingRule1->serviceName = 'tempora';
    $request->forwardingRule1->sourceIpRanges = [
        'corrupti',
    ];
    $request->forwardingRule1->subnetwork = 'doloremque';
    $request->forwardingRule1->target = 'fugiat';
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cum';
    $request->fields = 'nobis';
    $request->forwardingRulePathParameter = 'similique';
    $request->key = 'porro';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'nisi';
    $request->quotaUser = 'cumque';
    $request->region = 'soluta';
    $request->requestId = 'fugiat';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'nam';
    $request->userIp = 'enim';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionSetLabelsRequest = new RegionSetLabelsRequest();
    $request->regionSetLabelsRequest->labelFingerprint = 'consectetur';
    $request->regionSetLabelsRequest->labels = [
        'maxime' => 'cupiditate',
        'voluptatem' => 'provident',
        'adipisci' => 'accusantium',
        'magnam' => 'repellat',
    ];
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'cum';
    $request->key = 'id';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->project = 'fugit';
    $request->quotaUser = 'ipsam';
    $request->region = 'nostrum';
    $request->requestId = 'sequi';
    $request->resource = 'voluptatum';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'error';
    $request->userIp = 'nobis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetReference = new TargetReference();
    $request->targetReference->target = 'voluptate';
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aperiam';
    $request->fields = 'voluptates';
    $request->forwardingRule = 'possimus';
    $request->key = 'fugit';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'repudiandae';
    $request->quotaUser = 'corporis';
    $request->region = 'ea';
    $request->requestId = 'eos';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'hic';

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

## computeForwardingRulesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeForwardingRulesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeForwardingRulesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'autem',
        'nesciunt',
        'cupiditate',
        'animi',
    ];
    $request->accessToken = 'provident';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'mollitia';
    $request->key = 'nam';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->project = 'quo';
    $request->quotaUser = 'fuga';
    $request->region = 'tempore';
    $request->resource = 'commodi';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'suscipit';
    $request->userIp = 'voluptate';

    $requestSecurity = new ComputeForwardingRulesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeForwardingRulesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->forwardingRules->computeForwardingRulesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
