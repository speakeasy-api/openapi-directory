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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'atque';
    $request->filter = 'officiis';
    $request->includeAllScopes = false;
    $request->key = 'cum';
    $request->maxResults = 863330;
    $request->oauthToken = 'sapiente';
    $request->orderBy = 'quo';
    $request->pageToken = 'incidunt';
    $request->prettyPrint = false;
    $request->project = 'quod';
    $request->quotaUser = 'minus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'id';
    $request->userIp = 'excepturi';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'hic';
    $request->forwardingRule = 'maxime';
    $request->key = 'accusantium';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->project = 'fugit';
    $request->quotaUser = 'pariatur';
    $request->region = 'eligendi';
    $request->requestId = 'recusandae';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'aut';
    $request->userIp = 'laudantium';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'magni';
    $request->forwardingRule = 'rerum';
    $request->key = 'doloremque';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'eum';
    $request->quotaUser = 'at';
    $request->region = 'eum';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'voluptatum';
    $request->userIp = 'blanditiis';

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
    $request->forwardingRule->ipAddress = 'atque';
    $request->forwardingRule->ipProtocol = ForwardingRuleIPProtocolEnum::SCTP;
    $request->forwardingRule->allPorts = false;
    $request->forwardingRule->allowGlobalAccess = false;
    $request->forwardingRule->allowPscGlobalAccess = false;
    $request->forwardingRule->backendService = 'deserunt';
    $request->forwardingRule->baseForwardingRule = 'atque';
    $request->forwardingRule->creationTimestamp = 'nostrum';
    $request->forwardingRule->description = 'atque';
    $request->forwardingRule->fingerprint = 'architecto';
    $request->forwardingRule->id = 'est';
    $request->forwardingRule->ipVersion = ForwardingRuleIpVersionEnum::IPV4;
    $request->forwardingRule->isMirroringCollector = false;
    $request->forwardingRule->kind = 'rem';
    $request->forwardingRule->labelFingerprint = 'magni';
    $request->forwardingRule->labels = [
        'quas' => 'placeat',
    ];
    $request->forwardingRule->loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum::EXTERNAL_MANAGED;
    $request->forwardingRule->metadataFilters = [
        new MetadataFilter(),
        new MetadataFilter(),
    ];
    $request->forwardingRule->name = 'Alonzo Wintheiser';
    $request->forwardingRule->network = 'cumque';
    $request->forwardingRule->networkTier = ForwardingRuleNetworkTierEnum::STANDARD;
    $request->forwardingRule->noAutomateDnsZone = false;
    $request->forwardingRule->portRange = 'quaerat';
    $request->forwardingRule->ports = [
        'quia',
        'officiis',
        'mollitia',
        'cumque',
    ];
    $request->forwardingRule->pscConnectionId = 'quis';
    $request->forwardingRule->pscConnectionStatus = ForwardingRulePscConnectionStatusEnum::CLOSED;
    $request->forwardingRule->region = 'eum';
    $request->forwardingRule->selfLink = 'nemo';
    $request->forwardingRule->serviceDirectoryRegistrations = [
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
        new ForwardingRuleServiceDirectoryRegistration(),
    ];
    $request->forwardingRule->serviceLabel = 'nesciunt';
    $request->forwardingRule->serviceName = 'sit';
    $request->forwardingRule->sourceIpRanges = [
        'minus',
        'asperiores',
    ];
    $request->forwardingRule->subnetwork = 'recusandae';
    $request->forwardingRule->target = 'voluptates';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'sit';
    $request->key = 'aliquid';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->project = 'sed';
    $request->quotaUser = 'deleniti';
    $request->region = 'sunt';
    $request->requestId = 'nesciunt';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'laborum';
    $request->userIp = 'aliquam';

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
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'eius';
    $request->filter = 'voluptatum';
    $request->key = 'ipsa';
    $request->maxResults = 872991;
    $request->oauthToken = 'dolorem';
    $request->orderBy = 'repellat';
    $request->pageToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->project = 'inventore';
    $request->quotaUser = 'sequi';
    $request->region = 'fugit';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'hic';
    $request->userIp = 'eaque';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->forwardingRule1 = new ForwardingRule();
    $request->forwardingRule1->ipAddress = 'architecto';
    $request->forwardingRule1->ipProtocol = ForwardingRuleIPProtocolEnum::AH;
    $request->forwardingRule1->allPorts = false;
    $request->forwardingRule1->allowGlobalAccess = false;
    $request->forwardingRule1->allowPscGlobalAccess = false;
    $request->forwardingRule1->backendService = 'aspernatur';
    $request->forwardingRule1->baseForwardingRule = 'nulla';
    $request->forwardingRule1->creationTimestamp = 'enim';
    $request->forwardingRule1->description = 'illo';
    $request->forwardingRule1->fingerprint = 'magnam';
    $request->forwardingRule1->id = 'delectus';
    $request->forwardingRule1->ipVersion = ForwardingRuleIpVersionEnum::IPV4;
    $request->forwardingRule1->isMirroringCollector = false;
    $request->forwardingRule1->kind = 'optio';
    $request->forwardingRule1->labelFingerprint = 'nobis';
    $request->forwardingRule1->labels = [
        'repellat' => 'quae',
        'deleniti' => 'expedita',
    ];
    $request->forwardingRule1->loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum::INVALID;
    $request->forwardingRule1->metadataFilters = [
        new MetadataFilter(),
        new MetadataFilter(),
        new MetadataFilter(),
    ];
    $request->forwardingRule1->name = 'Irene Breitenberg';
    $request->forwardingRule1->network = 'animi';
    $request->forwardingRule1->networkTier = ForwardingRuleNetworkTierEnum::PREMIUM;
    $request->forwardingRule1->noAutomateDnsZone = false;
    $request->forwardingRule1->portRange = 'tenetur';
    $request->forwardingRule1->ports = [
        'esse',
        'animi',
    ];
    $request->forwardingRule1->pscConnectionId = 'laudantium';
    $request->forwardingRule1->pscConnectionStatus = ForwardingRulePscConnectionStatusEnum::NEEDS_ATTENTION;
    $request->forwardingRule1->region = 'eveniet';
    $request->forwardingRule1->selfLink = 'earum';
    $request->forwardingRule1->serviceDirectoryRegistrations = [
        new ForwardingRuleServiceDirectoryRegistration(),
    ];
    $request->forwardingRule1->serviceLabel = 'officiis';
    $request->forwardingRule1->serviceName = 'eius';
    $request->forwardingRule1->sourceIpRanges = [
        'itaque',
        'dignissimos',
        'ipsam',
    ];
    $request->forwardingRule1->subnetwork = 'explicabo';
    $request->forwardingRule1->target = 'impedit';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'ipsum';
    $request->forwardingRulePathParameter = 'ut';
    $request->key = 'quaerat';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->project = 'praesentium';
    $request->quotaUser = 'eveniet';
    $request->region = 'dolor';
    $request->requestId = 'expedita';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'illo';

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
    $request->regionSetLabelsRequest->labelFingerprint = 'quos';
    $request->regionSetLabelsRequest->labels = [
        'sint' => 'iusto',
        'enim' => 'accusamus',
        'aperiam' => 'voluptates',
        'laudantium' => 'tempora',
    ];
    $request->accessToken = 'quae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illum';
    $request->fields = 'rem';
    $request->key = 'tenetur';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'earum';
    $request->region = 'architecto';
    $request->requestId = 'aliquam';
    $request->resource = 'labore';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'sequi';
    $request->userIp = 'saepe';

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
    $request->targetReference->target = 'esse';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quisquam';
    $request->fields = 'cumque';
    $request->forwardingRule = 'aliquam';
    $request->key = 'dolorum';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'reiciendis';
    $request->region = 'sequi';
    $request->requestId = 'porro';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'nobis';
    $request->userIp = 'quibusdam';

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
        'ipsam',
    ];
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reprehenderit';
    $request->fields = 'quia';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'nisi';
    $request->region = 'molestiae';
    $request->resource = 'quia';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'sed';
    $request->userIp = 'odit';

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
