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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewallPolicyAssociation = new FirewallPolicyAssociation();
    $request->firewallPolicyAssociation->attachmentTarget = 'commodi';
    $request->firewallPolicyAssociation->displayName = 'id';
    $request->firewallPolicyAssociation->firewallPolicyId = 'nam';
    $request->firewallPolicyAssociation->name = 'Tasha Fay Sr.';
    $request->firewallPolicyAssociation->shortName = 'qui';
    $request->accessToken = 'autem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'velit';
    $request->firewallPolicy = 'ab';
    $request->key = 'ad';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->project = 'inventore';
    $request->quotaUser = 'nostrum';
    $request->region = 'ex';
    $request->replaceExistingAssociation = false;
    $request->requestId = 'totam';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'sint';
    $request->userIp = 'occaecati';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewallPolicyRule = new FirewallPolicyRule();
    $request->firewallPolicyRule->action = 'voluptas';
    $request->firewallPolicyRule->description = 'architecto';
    $request->firewallPolicyRule->direction = FirewallPolicyRuleDirectionEnum::INGRESS;
    $request->firewallPolicyRule->disabled = false;
    $request->firewallPolicyRule->enableLogging = false;
    $request->firewallPolicyRule->kind = 'reiciendis';
    $request->firewallPolicyRule->match = new FirewallPolicyRuleMatcher();
    $request->firewallPolicyRule->match->destAddressGroups = [
        'in',
        'veritatis',
        'totam',
        'suscipit',
    ];
    $request->firewallPolicyRule->match->destFqdns = [
        'voluptatibus',
        'dolores',
        'alias',
        'tempore',
    ];
    $request->firewallPolicyRule->match->destIpRanges = [
        'fuga',
        'nihil',
    ];
    $request->firewallPolicyRule->match->destRegionCodes = [
        'possimus',
    ];
    $request->firewallPolicyRule->match->destThreatIntelligences = [
        'labore',
        'accusantium',
        'quo',
        'id',
    ];
    $request->firewallPolicyRule->match->layer4Configs = [
        new FirewallPolicyRuleMatcherLayer4Config(),
    ];
    $request->firewallPolicyRule->match->srcAddressGroups = [
        'dignissimos',
        'aliquid',
        'ad',
        'reprehenderit',
    ];
    $request->firewallPolicyRule->match->srcFqdns = [
        'quae',
        'ex',
        'eius',
        'ab',
    ];
    $request->firewallPolicyRule->match->srcIpRanges = [
        'facilis',
        'maiores',
        'aut',
    ];
    $request->firewallPolicyRule->match->srcRegionCodes = [
        'veniam',
        'fugit',
    ];
    $request->firewallPolicyRule->match->srcSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->match->srcThreatIntelligences = [
        'cum',
    ];
    $request->firewallPolicyRule->priority = 180369;
    $request->firewallPolicyRule->ruleName = 'quaerat';
    $request->firewallPolicyRule->ruleTupleCount = 111040;
    $request->firewallPolicyRule->targetResources = [
        'repellendus',
    ];
    $request->firewallPolicyRule->targetSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->targetServiceAccounts = [
        'consequatur',
        'aliquid',
    ];
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'beatae';
    $request->fields = 'soluta';
    $request->firewallPolicy = 'sunt';
    $request->key = 'rem';
    $request->maxPriority = 166229;
    $request->minPriority = 499990;
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'minus';
    $request->region = 'cupiditate';
    $request->requestId = 'placeat';
    $request->uploadType = 'ratione';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'sunt';

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
    $request->accessToken = 'ex';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dignissimos';
    $request->fields = 'rerum';
    $request->firewallPolicy = 'inventore';
    $request->key = 'quas';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'voluptatem';
    $request->quotaUser = 'reiciendis';
    $request->region = 'cumque';
    $request->requestId = 'rerum';
    $request->sourceFirewallPolicy = 'expedita';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'distinctio';
    $request->userIp = 'excepturi';

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
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nostrum';
    $request->fields = 'repellat';
    $request->firewallPolicy = 'eum';
    $request->key = 'molestiae';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'libero';
    $request->quotaUser = 'at';
    $request->region = 'quasi';
    $request->requestId = 'nihil';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'numquam';
    $request->userIp = 'blanditiis';

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
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'exercitationem';
    $request->fields = 'dolor';
    $request->firewallPolicy = 'debitis';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->project = 'amet';
    $request->quotaUser = 'tempore';
    $request->region = 'ex';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'quaerat';

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
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'alias';
    $request->firewallPolicy = 'occaecati';
    $request->key = 'perspiciatis';
    $request->name = 'Curtis Keeling';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'commodi';
    $request->region = 'quibusdam';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'libero';
    $request->userIp = 'expedita';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquid';
    $request->fields = 'porro';
    $request->key = 'soluta';
    $request->network = 'aperiam';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->project = 'nobis';
    $request->quotaUser = 'totam';
    $request->region = 'distinctio';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'aperiam';
    $request->userIp = 'praesentium';

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
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->fields = 'adipisci';
    $request->key = 'molestiae';
    $request->oauthToken = 'in';
    $request->optionsRequestedPolicyVersion = 298660;
    $request->prettyPrint = false;
    $request->project = 'repellendus';
    $request->quotaUser = 'saepe';
    $request->region = 'non';
    $request->resource = 'a';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'vero';
    $request->userIp = 'quae';

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
    $request->accessToken = 'et';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'esse';
    $request->firewallPolicy = 'praesentium';
    $request->key = 'aperiam';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->priority = 117989;
    $request->project = 'doloremque';
    $request->quotaUser = 'minus';
    $request->region = 'eius';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'rerum';
    $request->userIp = 'provident';

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firewallPolicy = new FirewallPolicy();
    $request->firewallPolicy->associations = [
        new FirewallPolicyAssociation(),
    ];
    $request->firewallPolicy->creationTimestamp = 'aliquam';
    $request->firewallPolicy->description = 'accusantium';
    $request->firewallPolicy->displayName = 'possimus';
    $request->firewallPolicy->fingerprint = 'vel';
    $request->firewallPolicy->id = 'minus';
    $request->firewallPolicy->kind = 'blanditiis';
    $request->firewallPolicy->name = 'Eugene Murazik';
    $request->firewallPolicy->parent = 'alias';
    $request->firewallPolicy->region = 'perferendis';
    $request->firewallPolicy->ruleTupleCount = 133346;
    $request->firewallPolicy->rules = [
        new FirewallPolicyRule(),
    ];
    $request->firewallPolicy->selfLink = 'sit';
    $request->firewallPolicy->selfLinkWithId = 'esse';
    $request->firewallPolicy->shortName = 'accusamus';
    $request->accessToken = 'ut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolore';
    $request->fields = 'molestias';
    $request->key = 'maiores';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->project = 'aperiam';
    $request->quotaUser = 'alias';
    $request->region = 'sit';
    $request->requestId = 'iste';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'illum';
    $request->userIp = 'consequuntur';

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
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'quos';
    $request->filter = 'accusamus';
    $request->key = 'quidem';
    $request->maxResults = 306065;
    $request->oauthToken = 'fuga';
    $request->orderBy = 'itaque';
    $request->pageToken = 'iste';
    $request->prettyPrint = false;
    $request->project = 'pariatur';
    $request->quotaUser = 'suscipit';
    $request->region = 'ut';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'iure';
    $request->userIp = 'ab';

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkFirewallPoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkFirewallPoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewallPolicy1 = new FirewallPolicy();
    $request->firewallPolicy1->associations = [
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
    ];
    $request->firewallPolicy1->creationTimestamp = 'sunt';
    $request->firewallPolicy1->description = 'corporis';
    $request->firewallPolicy1->displayName = 'quae';
    $request->firewallPolicy1->fingerprint = 'alias';
    $request->firewallPolicy1->id = 'ratione';
    $request->firewallPolicy1->kind = 'sed';
    $request->firewallPolicy1->name = 'Melody Daugherty V';
    $request->firewallPolicy1->parent = 'distinctio';
    $request->firewallPolicy1->region = 'omnis';
    $request->firewallPolicy1->ruleTupleCount = 161952;
    $request->firewallPolicy1->rules = [
        new FirewallPolicyRule(),
        new FirewallPolicyRule(),
    ];
    $request->firewallPolicy1->selfLink = 'voluptate';
    $request->firewallPolicy1->selfLinkWithId = 'odio';
    $request->firewallPolicy1->shortName = 'dicta';
    $request->accessToken = 'earum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'aliquid';
    $request->firewallPolicyPathParameter = 'iste';
    $request->key = 'voluptates';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->project = 'facilis';
    $request->quotaUser = 'in';
    $request->region = 'saepe';
    $request->requestId = 'porro';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'nisi';
    $request->userIp = 'magni';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firewallPolicyRule = new FirewallPolicyRule();
    $request->firewallPolicyRule->action = 'ea';
    $request->firewallPolicyRule->description = 'labore';
    $request->firewallPolicyRule->direction = FirewallPolicyRuleDirectionEnum::INGRESS;
    $request->firewallPolicyRule->disabled = false;
    $request->firewallPolicyRule->enableLogging = false;
    $request->firewallPolicyRule->kind = 'possimus';
    $request->firewallPolicyRule->match = new FirewallPolicyRuleMatcher();
    $request->firewallPolicyRule->match->destAddressGroups = [
        'aliquam',
        'necessitatibus',
        'tempore',
    ];
    $request->firewallPolicyRule->match->destFqdns = [
        'recusandae',
        'numquam',
        'cumque',
    ];
    $request->firewallPolicyRule->match->destIpRanges = [
        'at',
        'dolores',
        'odit',
        'molestiae',
    ];
    $request->firewallPolicyRule->match->destRegionCodes = [
        'officiis',
        'sit',
    ];
    $request->firewallPolicyRule->match->destThreatIntelligences = [
        'rem',
        'deleniti',
        'repellat',
    ];
    $request->firewallPolicyRule->match->layer4Configs = [
        new FirewallPolicyRuleMatcherLayer4Config(),
        new FirewallPolicyRuleMatcherLayer4Config(),
        new FirewallPolicyRuleMatcherLayer4Config(),
    ];
    $request->firewallPolicyRule->match->srcAddressGroups = [
        'iure',
        'nulla',
        'aliquid',
    ];
    $request->firewallPolicyRule->match->srcFqdns = [
        'similique',
        'veniam',
        'cum',
        'vel',
    ];
    $request->firewallPolicyRule->match->srcIpRanges = [
        'corrupti',
        'temporibus',
        'libero',
        'sapiente',
    ];
    $request->firewallPolicyRule->match->srcRegionCodes = [
        'dicta',
        'qui',
        'asperiores',
    ];
    $request->firewallPolicyRule->match->srcSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->match->srcThreatIntelligences = [
        'nam',
    ];
    $request->firewallPolicyRule->priority = 80904;
    $request->firewallPolicyRule->ruleName = 'eligendi';
    $request->firewallPolicyRule->ruleTupleCount = 656811;
    $request->firewallPolicyRule->targetResources = [
        'laborum',
        'omnis',
    ];
    $request->firewallPolicyRule->targetSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->targetServiceAccounts = [
        'impedit',
        'quis',
        'nisi',
        'vitae',
    ];
    $request->accessToken = 'unde';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'placeat';
    $request->firewallPolicy = 'cumque';
    $request->key = 'officia';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->priority = 366609;
    $request->project = 'laboriosam';
    $request->quotaUser = 'eaque';
    $request->region = 'fuga';
    $request->requestId = 'quasi';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'occaecati';
    $request->userIp = 'exercitationem';

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
    $request->accessToken = 'illo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facere';
    $request->fields = 'fuga';
    $request->firewallPolicy = 'ab';
    $request->key = 'fugiat';
    $request->name = 'Penny Walsh';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->project = 'ipsum';
    $request->quotaUser = 'quisquam';
    $request->region = 'asperiores';
    $request->requestId = 'praesentium';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'inventore';
    $request->userIp = 'ab';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'natus';
    $request->firewallPolicy = 'nesciunt';
    $request->key = 'eaque';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->priority = 749851;
    $request->project = 'magni';
    $request->quotaUser = 'nihil';
    $request->region = 'laborum';
    $request->requestId = 'aut';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'animi';
    $request->userIp = 'reiciendis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionSetPolicyRequest = new RegionSetPolicyRequest();
    $request->regionSetPolicyRequest->bindings = [
        new Binding(),
    ];
    $request->regionSetPolicyRequest->etag = 'et';
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
    $request->regionSetPolicyRequest->policy->etag = 'quaerat';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 612689;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'illum';
    $request->fields = 'recusandae';
    $request->key = 'deleniti';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->project = 'quis';
    $request->quotaUser = 'eum';
    $request->region = 'eligendi';
    $request->resource = 'quisquam';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'eveniet';
    $request->userIp = 'incidunt';

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
        'impedit',
    ];
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veritatis';
    $request->fields = 'non';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'eum';
    $request->quotaUser = 'recusandae';
    $request->region = 'suscipit';
    $request->resource = 'dicta';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'aspernatur';
    $request->userIp = 'placeat';

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
