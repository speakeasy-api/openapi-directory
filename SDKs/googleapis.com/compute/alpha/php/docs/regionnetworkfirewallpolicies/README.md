# regionNetworkFirewallPolicies

### Available Operations

* [computeRegionNetworkFirewallPoliciesAddAssociation](#computeregionnetworkfirewallpoliciesaddassociation) - Inserts an association for the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesAddRule](#computeregionnetworkfirewallpoliciesaddrule) - Inserts a rule into a network firewall policy.
* [computeRegionNetworkFirewallPoliciesCloneRules](#computeregionnetworkfirewallpoliciesclonerules) - Copies rules to the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesDelete](#computeregionnetworkfirewallpoliciesdelete) - Deletes the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesGet](#computeregionnetworkfirewallpoliciesget) - Returns the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesGetAssociation](#computeregionnetworkfirewallpoliciesgetassociation) - Gets an association with the specified name.
* [computeRegionNetworkFirewallPoliciesGetEffectiveFirewalls](#computeregionnetworkfirewallpoliciesgeteffectivefirewalls) - Returns the effective firewalls on a given network.
* [computeRegionNetworkFirewallPoliciesGetIamPolicy](#computeregionnetworkfirewallpoliciesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeRegionNetworkFirewallPoliciesGetRule](#computeregionnetworkfirewallpoliciesgetrule) - Gets a rule of the specified priority.
* [computeRegionNetworkFirewallPoliciesInsert](#computeregionnetworkfirewallpoliciesinsert) - Creates a new network firewall policy in the specified project and region.
* [computeRegionNetworkFirewallPoliciesList](#computeregionnetworkfirewallpolicieslist) - Lists all the network firewall policies that have been configured for the specified project in the given region.
* [computeRegionNetworkFirewallPoliciesPatch](#computeregionnetworkfirewallpoliciespatch) - Patches the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesPatchAssociation](#computeregionnetworkfirewallpoliciespatchassociation) - Updates an association for the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesPatchRule](#computeregionnetworkfirewallpoliciespatchrule) - Patches a rule of the specified priority.
* [computeRegionNetworkFirewallPoliciesRemoveAssociation](#computeregionnetworkfirewallpoliciesremoveassociation) - Removes an association for the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesRemoveRule](#computeregionnetworkfirewallpoliciesremoverule) - Deletes a rule of the specified priority.
* [computeRegionNetworkFirewallPoliciesSetIamPolicy](#computeregionnetworkfirewallpoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeRegionNetworkFirewallPoliciesTestIamPermissions](#computeregionnetworkfirewallpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionNetworkFirewallPoliciesAddAssociation

Inserts an association for the specified network firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesAddAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyAssociation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesAddAssociationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesAddAssociationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firewallPolicyAssociation = new FirewallPolicyAssociation();
    $request->firewallPolicyAssociation->attachmentTarget = 'fugit';
    $request->firewallPolicyAssociation->displayName = 'illum';
    $request->firewallPolicyAssociation->firewallPolicyId = 'odit';
    $request->firewallPolicyAssociation->name = 'Jacob Boehm';
    $request->firewallPolicyAssociation->priority = 716835;
    $request->firewallPolicyAssociation->shortName = 'veritatis';
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'nisi';
    $request->firewallPolicy = 'harum';
    $request->key = 'placeat';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->project = 'quo';
    $request->quotaUser = 'reprehenderit';
    $request->region = 'repellat';
    $request->replaceExistingAssociation = false;
    $request->requestId = 'eius';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'dolore';
    $request->userIp = 'dolores';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesAddAssociationSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesAddAssociation($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesAddRule

Inserts a rule into a network firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesAddRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleMatcherLayer4Config;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleSecureTag;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleSecureTagStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesAddRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesAddRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesAddRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesAddRuleRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firewallPolicyRule = new FirewallPolicyRule();
    $request->firewallPolicyRule->action = 'qui';
    $request->firewallPolicyRule->description = 'voluptates';
    $request->firewallPolicyRule->direction = FirewallPolicyRuleDirectionEnum::INGRESS;
    $request->firewallPolicyRule->disabled = false;
    $request->firewallPolicyRule->enableLogging = false;
    $request->firewallPolicyRule->kind = 'mollitia';
    $request->firewallPolicyRule->match = new FirewallPolicyRuleMatcher();
    $request->firewallPolicyRule->match->destAddressGroups = [
        'at',
        'eveniet',
    ];
    $request->firewallPolicyRule->match->destFqdns = [
        'inventore',
        'laborum',
        'cumque',
        'repellendus',
    ];
    $request->firewallPolicyRule->match->destIpRanges = [
        'sed',
        'officia',
    ];
    $request->firewallPolicyRule->match->destRegionCodes = [
        'cupiditate',
        'excepturi',
        'voluptatum',
    ];
    $request->firewallPolicyRule->match->destThreatIntelligences = [
        'rerum',
    ];
    $request->firewallPolicyRule->match->layer4Configs = [
        new FirewallPolicyRuleMatcherLayer4Config(),
        new FirewallPolicyRuleMatcherLayer4Config(),
    ];
    $request->firewallPolicyRule->match->srcAddressGroups = [
        'tenetur',
        'repudiandae',
        'ex',
    ];
    $request->firewallPolicyRule->match->srcFqdns = [
        'magni',
        'repudiandae',
        'sunt',
    ];
    $request->firewallPolicyRule->match->srcIpRanges = [
        'aspernatur',
        'illum',
        'facilis',
        'necessitatibus',
    ];
    $request->firewallPolicyRule->match->srcRegionCodes = [
        'nesciunt',
    ];
    $request->firewallPolicyRule->match->srcSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->match->srcThreatIntelligences = [
        'voluptatum',
        'necessitatibus',
    ];
    $request->firewallPolicyRule->priority = 537087;
    $request->firewallPolicyRule->ruleName = 'sed';
    $request->firewallPolicyRule->ruleTupleCount = 301948;
    $request->firewallPolicyRule->securityProfileGroup = 'dignissimos';
    $request->firewallPolicyRule->targetResources = [
        'beatae',
        'consequuntur',
        'sed',
        'minus',
    ];
    $request->firewallPolicyRule->targetSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->targetServiceAccounts = [
        'aliquid',
        'iusto',
        'vel',
        'nihil',
    ];
    $request->firewallPolicyRule->tlsInspect = false;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'dolores';
    $request->firewallPolicy = 'ducimus';
    $request->key = 'occaecati';
    $request->maxPriority = 341772;
    $request->minPriority = 541650;
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->project = 'commodi';
    $request->quotaUser = 'quam';
    $request->region = 'dolor';
    $request->requestId = 'voluptas';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'facere';
    $request->userIp = 'est';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesAddRuleSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesAddRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesAddRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesCloneRules

Copies rules to the specified network firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesCloneRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesCloneRulesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesCloneRulesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesCloneRulesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesCloneRulesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloremque';
    $request->fields = 'natus';
    $request->firewallPolicy = 'ea';
    $request->key = 'doloribus';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'officiis';
    $request->quotaUser = 'nam';
    $request->region = 'totam';
    $request->requestId = 'ex';
    $request->sourceFirewallPolicy = 'labore';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'reprehenderit';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesCloneRulesSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesCloneRulesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesCloneRules($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesDelete

Deletes the specified network firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laudantium';
    $request->fields = 'voluptatibus';
    $request->firewallPolicy = 'quos';
    $request->key = 'rerum';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'unde';
    $request->quotaUser = 'pariatur';
    $request->region = 'omnis';
    $request->requestId = 'quo';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'nisi';
    $request->userIp = 'alias';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesGet

Returns the specified network firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'suscipit';
    $request->firewallPolicy = 'voluptatibus';
    $request->key = 'quo';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'cum';
    $request->region = 'earum';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'iusto';
    $request->userIp = 'quae';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesGetSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesGet($request, $requestSecurity);

    if ($response->firewallPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesGetAssociation

Gets an association with the specified name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetAssociationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetAssociationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetAssociationSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetAssociationSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesGetAssociationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'assumenda';
    $request->firewallPolicy = 'accusantium';
    $request->key = 'autem';
    $request->name = 'Nathan Bailey PhD';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->project = 'earum';
    $request->quotaUser = 'explicabo';
    $request->region = 'natus';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'hic';
    $request->userIp = 'nemo';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesGetAssociationSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesGetAssociationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesGetAssociation($request, $requestSecurity);

    if ($response->firewallPolicyAssociation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesGetEffectiveFirewalls

Returns the effective firewalls on a given network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'soluta';
    $request->key = 'mollitia';
    $request->network = 'dolorum';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'odio';
    $request->quotaUser = 'pariatur';
    $request->region = 'laudantium';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'et';
    $request->userIp = 'voluptatem';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesGetEffectiveFirewalls($request, $requestSecurity);

    if ($response->regionNetworkFirewallPoliciesGetEffectiveFirewallsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'rem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quam';
    $request->fields = 'laboriosam';
    $request->key = 'asperiores';
    $request->oauthToken = 'delectus';
    $request->optionsRequestedPolicyVersion = 357536;
    $request->prettyPrint = false;
    $request->project = 'tenetur';
    $request->quotaUser = 'laboriosam';
    $request->region = 'recusandae';
    $request->resource = 'temporibus';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'error';
    $request->userIp = 'laudantium';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesGetRule

Gets a rule of the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetRuleSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesGetRuleSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesGetRuleRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quos';
    $request->fields = 'voluptatum';
    $request->firewallPolicy = 'explicabo';
    $request->key = 'aliquid';
    $request->oauthToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->priority = 735432;
    $request->project = 'nisi';
    $request->quotaUser = 'similique';
    $request->region = 'esse';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'libero';
    $request->userIp = 'perferendis';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesGetRuleSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesGetRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesGetRule($request, $requestSecurity);

    if ($response->firewallPolicyRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesInsert

Creates a new network firewall policy in the specified project and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicy;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyAssociation;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleMatcherLayer4Config;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleSecureTag;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleSecureTagStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyVpcNetworkScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewallPolicy = new FirewallPolicy();
    $request->firewallPolicy->associations = [
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
    ];
    $request->firewallPolicy->creationTimestamp = 'quos';
    $request->firewallPolicy->description = 'consequuntur';
    $request->firewallPolicy->displayName = 'earum';
    $request->firewallPolicy->fingerprint = 'excepturi';
    $request->firewallPolicy->id = 'numquam';
    $request->firewallPolicy->kind = 'hic';
    $request->firewallPolicy->name = 'Van Pouros PhD';
    $request->firewallPolicy->parent = 'vitae';
    $request->firewallPolicy->region = 'saepe';
    $request->firewallPolicy->ruleTupleCount = 171156;
    $request->firewallPolicy->rules = [
        new FirewallPolicyRule(),
    ];
    $request->firewallPolicy->selfLink = 'nulla';
    $request->firewallPolicy->selfLinkWithId = 'nulla';
    $request->firewallPolicy->shortName = 'quisquam';
    $request->firewallPolicy->vpcNetworkScope = FirewallPolicyVpcNetworkScopeEnum::GLOBAL_VPC_NETWORK;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sequi';
    $request->fields = 'deleniti';
    $request->key = 'quidem';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'quibusdam';
    $request->quotaUser = 'inventore';
    $request->region = 'praesentium';
    $request->requestId = 'nihil';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'vitae';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesList

Lists all the network firewall policies that have been configured for the specified project in the given region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloribus';
    $request->fields = 'possimus';
    $request->filter = 'non';
    $request->key = 'alias';
    $request->maxResults = 735371;
    $request->oauthToken = 'tenetur';
    $request->orderBy = 'earum';
    $request->pageToken = 'eaque';
    $request->prettyPrint = false;
    $request->project = 'non';
    $request->quotaUser = 'eius';
    $request->region = 'cupiditate';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'minus';
    $request->userIp = 'sapiente';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesListSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesList($request, $requestSecurity);

    if ($response->firewallPolicyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesPatch

Patches the specified network firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicy;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyAssociation;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleMatcherLayer4Config;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleSecureTag;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleSecureTagStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyVpcNetworkScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firewallPolicy1 = new FirewallPolicy();
    $request->firewallPolicy1->associations = [
        new FirewallPolicyAssociation(),
    ];
    $request->firewallPolicy1->creationTimestamp = 'sed';
    $request->firewallPolicy1->description = 'exercitationem';
    $request->firewallPolicy1->displayName = 'aliquam';
    $request->firewallPolicy1->fingerprint = 'id';
    $request->firewallPolicy1->id = 'omnis';
    $request->firewallPolicy1->kind = 'ad';
    $request->firewallPolicy1->name = 'Michael Hagenes';
    $request->firewallPolicy1->parent = 'distinctio';
    $request->firewallPolicy1->region = 'numquam';
    $request->firewallPolicy1->ruleTupleCount = 378278;
    $request->firewallPolicy1->rules = [
        new FirewallPolicyRule(),
    ];
    $request->firewallPolicy1->selfLink = 'possimus';
    $request->firewallPolicy1->selfLinkWithId = 'aliquid';
    $request->firewallPolicy1->shortName = 'cum';
    $request->firewallPolicy1->vpcNetworkScope = FirewallPolicyVpcNetworkScopeEnum::REGIONAL_VPC_NETWORK;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quasi';
    $request->fields = 'dignissimos';
    $request->firewallPolicyPathParameter = 'maiores';
    $request->key = 'iste';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'eius';
    $request->region = 'dignissimos';
    $request->requestId = 'unde';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'facilis';
    $request->userIp = 'cupiditate';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesPatchSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesPatchAssociation

Updates an association for the specified network firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesPatchAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyAssociation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesPatchAssociationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesPatchAssociationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesPatchAssociationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesPatchAssociationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firewallPolicyAssociation = new FirewallPolicyAssociation();
    $request->firewallPolicyAssociation->attachmentTarget = 'perspiciatis';
    $request->firewallPolicyAssociation->displayName = 'officia';
    $request->firewallPolicyAssociation->firewallPolicyId = 'ut';
    $request->firewallPolicyAssociation->name = 'Lillian Swift';
    $request->firewallPolicyAssociation->priority = 526385;
    $request->firewallPolicyAssociation->shortName = 'impedit';
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'totam';
    $request->firewallPolicy = 'nesciunt';
    $request->key = 'quidem';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->project = 'rem';
    $request->quotaUser = 'iure';
    $request->region = 'architecto';
    $request->requestId = 'illum';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'natus';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesPatchAssociationSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesPatchAssociationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesPatchAssociation($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesPatchRule

Patches a rule of the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesPatchRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleMatcherLayer4Config;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleSecureTag;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleSecureTagStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesPatchRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesPatchRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesPatchRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesPatchRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewallPolicyRule = new FirewallPolicyRule();
    $request->firewallPolicyRule->action = 'quod';
    $request->firewallPolicyRule->description = 'quo';
    $request->firewallPolicyRule->direction = FirewallPolicyRuleDirectionEnum::INGRESS;
    $request->firewallPolicyRule->disabled = false;
    $request->firewallPolicyRule->enableLogging = false;
    $request->firewallPolicyRule->kind = 'voluptatum';
    $request->firewallPolicyRule->match = new FirewallPolicyRuleMatcher();
    $request->firewallPolicyRule->match->destAddressGroups = [
        'illum',
        'amet',
        'totam',
    ];
    $request->firewallPolicyRule->match->destFqdns = [
        'quae',
        'beatae',
    ];
    $request->firewallPolicyRule->match->destIpRanges = [
        'commodi',
        'vero',
        'temporibus',
    ];
    $request->firewallPolicyRule->match->destRegionCodes = [
        'nisi',
        'minus',
    ];
    $request->firewallPolicyRule->match->destThreatIntelligences = [
        'consequatur',
    ];
    $request->firewallPolicyRule->match->layer4Configs = [
        new FirewallPolicyRuleMatcherLayer4Config(),
    ];
    $request->firewallPolicyRule->match->srcAddressGroups = [
        'est',
        'cumque',
        'harum',
        'dicta',
    ];
    $request->firewallPolicyRule->match->srcFqdns = [
        'dolorum',
    ];
    $request->firewallPolicyRule->match->srcIpRanges = [
        'sed',
        'ut',
        'placeat',
        'quas',
    ];
    $request->firewallPolicyRule->match->srcRegionCodes = [
        'quaerat',
    ];
    $request->firewallPolicyRule->match->srcSecureTags = [
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->match->srcThreatIntelligences = [
        'corrupti',
        'voluptas',
        'suscipit',
    ];
    $request->firewallPolicyRule->priority = 761807;
    $request->firewallPolicyRule->ruleName = 'ullam';
    $request->firewallPolicyRule->ruleTupleCount = 483426;
    $request->firewallPolicyRule->securityProfileGroup = 'exercitationem';
    $request->firewallPolicyRule->targetResources = [
        'ab',
        'recusandae',
        'quia',
    ];
    $request->firewallPolicyRule->targetSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->targetServiceAccounts = [
        'quos',
        'ducimus',
    ];
    $request->firewallPolicyRule->tlsInspect = false;
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->fields = 'accusamus';
    $request->firewallPolicy = 'dolorem';
    $request->key = 'ducimus';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->priority = 23817;
    $request->project = 'recusandae';
    $request->quotaUser = 'corrupti';
    $request->region = 'hic';
    $request->requestId = 'nam';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'dolore';
    $request->userIp = 'atque';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesPatchRuleSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesPatchRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesPatchRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesRemoveAssociation

Removes an association for the specified network firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesRemoveAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesRemoveAssociationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesRemoveAssociationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesRemoveAssociationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesRemoveAssociationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'officiis';
    $request->firewallPolicy = 'voluptas';
    $request->key = 'excepturi';
    $request->name = 'Roberto Durgan Jr.';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->project = 'consequatur';
    $request->quotaUser = 'quis';
    $request->region = 'aperiam';
    $request->requestId = 'dicta';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'fugiat';
    $request->userIp = 'porro';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesRemoveAssociationSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesRemoveAssociationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesRemoveAssociation($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesRemoveRule

Deletes a rule of the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesRemoveRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesRemoveRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesRemoveRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesRemoveRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesRemoveRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'et';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nemo';
    $request->fields = 'atque';
    $request->firewallPolicy = 'laudantium';
    $request->key = 'sed';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->priority = 511220;
    $request->project = 'eius';
    $request->quotaUser = 'impedit';
    $request->region = 'consectetur';
    $request->requestId = 'commodi';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'perspiciatis';
    $request->userIp = 'ut';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesRemoveRuleSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesRemoveRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesRemoveRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesSetIamPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionSetPolicyRequest = new RegionSetPolicyRequest();
    $request->regionSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->etag = 'occaecati';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'laudantium';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 826677;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'sit';
    $request->key = 'cum';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'quo';
    $request->region = 'eaque';
    $request->resource = 'illum';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'natus';
    $request->userIp = 'sapiente';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkFirewallPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'tempore',
        'unde',
    ];
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'odit';
    $request->key = 'eaque';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'ipsa';
    $request->region = 'iusto';
    $request->resource = 'deleniti';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'quos';
    $request->userIp = 'maxime';

    $requestSecurity = new ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkFirewallPolicies->computeRegionNetworkFirewallPoliciesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
