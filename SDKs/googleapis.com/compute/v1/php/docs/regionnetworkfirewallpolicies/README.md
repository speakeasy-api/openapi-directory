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
    $request->firewallPolicyAssociation->attachmentTarget = 'officiis';
    $request->firewallPolicyAssociation->displayName = 'quasi';
    $request->firewallPolicyAssociation->firewallPolicyId = 'vero';
    $request->firewallPolicyAssociation->name = 'Karl Ward';
    $request->firewallPolicyAssociation->shortName = 'corporis';
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'saepe';
    $request->firewallPolicy = 'animi';
    $request->key = 'deleniti';
    $request->oauthToken = 'eveniet';
    $request->prettyPrint = false;
    $request->project = 'molestiae';
    $request->quotaUser = 'laborum';
    $request->region = 'voluptatum';
    $request->replaceExistingAssociation = false;
    $request->requestId = 'blanditiis';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'et';
    $request->userIp = 'et';

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
    $request->firewallPolicyRule->action = 'laboriosam';
    $request->firewallPolicyRule->description = 'ratione';
    $request->firewallPolicyRule->direction = FirewallPolicyRuleDirectionEnum::INGRESS;
    $request->firewallPolicyRule->disabled = false;
    $request->firewallPolicyRule->enableLogging = false;
    $request->firewallPolicyRule->kind = 'at';
    $request->firewallPolicyRule->match = new FirewallPolicyRuleMatcher();
    $request->firewallPolicyRule->match->destAddressGroups = [
        'vel',
        'quibusdam',
        'iusto',
    ];
    $request->firewallPolicyRule->match->destFqdns = [
        'cumque',
        'sunt',
    ];
    $request->firewallPolicyRule->match->destIpRanges = [
        'rem',
        'laboriosam',
        'doloremque',
        'nisi',
    ];
    $request->firewallPolicyRule->match->destRegionCodes = [
        'odit',
        'nesciunt',
    ];
    $request->firewallPolicyRule->match->destThreatIntelligences = [
        'quibusdam',
        'tempora',
    ];
    $request->firewallPolicyRule->match->layer4Configs = [
        new FirewallPolicyRuleMatcherLayer4Config(),
    ];
    $request->firewallPolicyRule->match->srcAddressGroups = [
        'molestiae',
    ];
    $request->firewallPolicyRule->match->srcFqdns = [
        'laboriosam',
        'aliquid',
        'quibusdam',
    ];
    $request->firewallPolicyRule->match->srcIpRanges = [
        'molestias',
        'culpa',
        'molestiae',
    ];
    $request->firewallPolicyRule->match->srcRegionCodes = [
        'perspiciatis',
        'officiis',
    ];
    $request->firewallPolicyRule->match->srcSecureTags = [
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->match->srcThreatIntelligences = [
        'totam',
        'incidunt',
        'exercitationem',
    ];
    $request->firewallPolicyRule->priority = 98825;
    $request->firewallPolicyRule->ruleName = 'beatae';
    $request->firewallPolicyRule->ruleTupleCount = 773351;
    $request->firewallPolicyRule->targetResources = [
        'in',
        'corporis',
        'itaque',
        'incidunt',
    ];
    $request->firewallPolicyRule->targetSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->targetServiceAccounts = [
        'eligendi',
    ];
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'non';
    $request->fields = 'soluta';
    $request->firewallPolicy = 'minima';
    $request->key = 'tempore';
    $request->maxPriority = 699128;
    $request->minPriority = 473783;
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->project = 'quos';
    $request->quotaUser = 'minus';
    $request->region = 'nobis';
    $request->requestId = 'cupiditate';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'voluptas';

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
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'suscipit';
    $request->firewallPolicy = 'occaecati';
    $request->key = 'ea';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'nemo';
    $request->quotaUser = 'a';
    $request->region = 'maxime';
    $request->requestId = 'possimus';
    $request->sourceFirewallPolicy = 'quasi';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'nihil';

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
    $request->accessToken = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->fields = 'libero';
    $request->firewallPolicy = 'cum';
    $request->key = 'saepe';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'tenetur';
    $request->region = 'explicabo';
    $request->requestId = 'error';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'sequi';
    $request->userIp = 'magnam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloremque';
    $request->fields = 'odio';
    $request->firewallPolicy = 'ratione';
    $request->key = 'corporis';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'laboriosam';
    $request->region = 'magni';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'corporis';
    $request->userIp = 'facere';

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
    $request->accessToken = 'est';
    $request->alt = AltEnum::JSON;
    $request->callback = 'unde';
    $request->fields = 'est';
    $request->firewallPolicy = 'fuga';
    $request->key = 'est';
    $request->name = 'Raquel Boyle';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->project = 'nemo';
    $request->quotaUser = 'nisi';
    $request->region = 'repellat';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'possimus';
    $request->userIp = 'aspernatur';

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
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'error';
    $request->key = 'ullam';
    $request->network = 'voluptatem';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->project = 'tempore';
    $request->quotaUser = 'maiores';
    $request->region = 'doloremque';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'laborum';
    $request->userIp = 'occaecati';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'incidunt';
    $request->fields = 'incidunt';
    $request->key = 'rem';
    $request->oauthToken = 'sit';
    $request->optionsRequestedPolicyVersion = 768855;
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'ratione';
    $request->region = 'in';
    $request->resource = 'voluptatibus';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'ab';
    $request->userIp = 'ipsa';

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
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eaque';
    $request->fields = 'sequi';
    $request->firewallPolicy = 'fugit';
    $request->key = 'deserunt';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->priority = 226131;
    $request->project = 'amet';
    $request->quotaUser = 'nesciunt';
    $request->region = 'et';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'saepe';

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
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
    ];
    $request->firewallPolicy->creationTimestamp = 'quibusdam';
    $request->firewallPolicy->description = 'nihil';
    $request->firewallPolicy->displayName = 'provident';
    $request->firewallPolicy->fingerprint = 'recusandae';
    $request->firewallPolicy->id = 'minus';
    $request->firewallPolicy->kind = 'in';
    $request->firewallPolicy->name = 'Lola Murazik';
    $request->firewallPolicy->parent = 'corrupti';
    $request->firewallPolicy->region = 'deleniti';
    $request->firewallPolicy->ruleTupleCount = 821700;
    $request->firewallPolicy->rules = [
        new FirewallPolicyRule(),
        new FirewallPolicyRule(),
        new FirewallPolicyRule(),
        new FirewallPolicyRule(),
    ];
    $request->firewallPolicy->selfLink = 'expedita';
    $request->firewallPolicy->selfLinkWithId = 'ipsum';
    $request->firewallPolicy->shortName = 'commodi';
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'inventore';
    $request->fields = 'eligendi';
    $request->key = 'optio';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'labore';
    $request->region = 'dicta';
    $request->requestId = 'quisquam';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'autem';
    $request->userIp = 'enim';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'eius';
    $request->filter = 'doloribus';
    $request->key = 'doloremque';
    $request->maxResults = 632678;
    $request->oauthToken = 'voluptate';
    $request->orderBy = 'incidunt';
    $request->pageToken = 'eaque';
    $request->prettyPrint = false;
    $request->project = 'doloribus';
    $request->quotaUser = 'cum';
    $request->region = 'incidunt';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'distinctio';
    $request->userIp = 'magnam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firewallPolicy1 = new FirewallPolicy();
    $request->firewallPolicy1->associations = [
        new FirewallPolicyAssociation(),
    ];
    $request->firewallPolicy1->creationTimestamp = 'impedit';
    $request->firewallPolicy1->description = 'ipsum';
    $request->firewallPolicy1->displayName = 'deserunt';
    $request->firewallPolicy1->fingerprint = 'doloremque';
    $request->firewallPolicy1->id = 'sint';
    $request->firewallPolicy1->kind = 'saepe';
    $request->firewallPolicy1->name = 'Lucy Flatley';
    $request->firewallPolicy1->parent = 'minima';
    $request->firewallPolicy1->region = 'vero';
    $request->firewallPolicy1->ruleTupleCount = 524890;
    $request->firewallPolicy1->rules = [
        new FirewallPolicyRule(),
    ];
    $request->firewallPolicy1->selfLink = 'corrupti';
    $request->firewallPolicy1->selfLinkWithId = 'tempore';
    $request->firewallPolicy1->shortName = 'nam';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'dolore';
    $request->firewallPolicyPathParameter = 'eius';
    $request->key = 'minima';
    $request->oauthToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'nobis';
    $request->region = 'quo';
    $request->requestId = 'nemo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'est';

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
    $request->firewallPolicyRule->action = 'impedit';
    $request->firewallPolicyRule->description = 'ut';
    $request->firewallPolicyRule->direction = FirewallPolicyRuleDirectionEnum::EGRESS;
    $request->firewallPolicyRule->disabled = false;
    $request->firewallPolicyRule->enableLogging = false;
    $request->firewallPolicyRule->kind = 'nisi';
    $request->firewallPolicyRule->match = new FirewallPolicyRuleMatcher();
    $request->firewallPolicyRule->match->destAddressGroups = [
        'nemo',
        'cupiditate',
        'maxime',
    ];
    $request->firewallPolicyRule->match->destFqdns = [
        'dolor',
        'commodi',
        'ea',
    ];
    $request->firewallPolicyRule->match->destIpRanges = [
        'facere',
        'maxime',
        'minus',
        'architecto',
    ];
    $request->firewallPolicyRule->match->destRegionCodes = [
        'veniam',
    ];
    $request->firewallPolicyRule->match->destThreatIntelligences = [
        'voluptatum',
        'quia',
    ];
    $request->firewallPolicyRule->match->layer4Configs = [
        new FirewallPolicyRuleMatcherLayer4Config(),
        new FirewallPolicyRuleMatcherLayer4Config(),
        new FirewallPolicyRuleMatcherLayer4Config(),
        new FirewallPolicyRuleMatcherLayer4Config(),
    ];
    $request->firewallPolicyRule->match->srcAddressGroups = [
        'expedita',
    ];
    $request->firewallPolicyRule->match->srcFqdns = [
        'veniam',
        'ad',
        'accusamus',
    ];
    $request->firewallPolicyRule->match->srcIpRanges = [
        'atque',
        'cupiditate',
        'fugiat',
    ];
    $request->firewallPolicyRule->match->srcRegionCodes = [
        'officiis',
        'hic',
        'error',
    ];
    $request->firewallPolicyRule->match->srcSecureTags = [
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->match->srcThreatIntelligences = [
        'necessitatibus',
    ];
    $request->firewallPolicyRule->priority = 607539;
    $request->firewallPolicyRule->ruleName = 'eaque';
    $request->firewallPolicyRule->ruleTupleCount = 17960;
    $request->firewallPolicyRule->targetResources = [
        'culpa',
    ];
    $request->firewallPolicyRule->targetSecureTags = [
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->targetServiceAccounts = [
        'deserunt',
    ];
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'consequuntur';
    $request->firewallPolicy = 'dolore';
    $request->key = 'fugit';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->priority = 529429;
    $request->project = 'voluptates';
    $request->quotaUser = 'sapiente';
    $request->region = 'at';
    $request->requestId = 'qui';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'eius';
    $request->userIp = 'dicta';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'recusandae';
    $request->firewallPolicy = 'quam';
    $request->key = 'adipisci';
    $request->name = 'Javier Mitchell';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->project = 'eveniet';
    $request->quotaUser = 'voluptatum';
    $request->region = 'rerum';
    $request->requestId = 'officia';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'mollitia';

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
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'ut';
    $request->firewallPolicy = 'voluptas';
    $request->key = 'neque';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->priority = 918614;
    $request->project = 'excepturi';
    $request->quotaUser = 'ipsa';
    $request->region = 'velit';
    $request->requestId = 'quis';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'harum';
    $request->userIp = 'quidem';

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
    ];
    $request->regionSetPolicyRequest->etag = 'eum';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'iure';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 32260;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odio';
    $request->fields = 'culpa';
    $request->key = 'quis';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->project = 'voluptas';
    $request->quotaUser = 'dolorem';
    $request->region = 'eum';
    $request->resource = 'ipsam';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'odio';
    $request->userIp = 'unde';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'ipsam',
    ];
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ab';
    $request->fields = 'repellat';
    $request->key = 'accusantium';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'quo';
    $request->quotaUser = 'alias';
    $request->region = 'illum';
    $request->resource = 'neque';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'veritatis';
    $request->userIp = 'reiciendis';

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
