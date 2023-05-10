# networkFirewallPolicies

### Available Operations

* [computeNetworkFirewallPoliciesAddAssociation](#computenetworkfirewallpoliciesaddassociation) - Inserts an association for the specified firewall policy.
* [computeNetworkFirewallPoliciesAddRule](#computenetworkfirewallpoliciesaddrule) - Inserts a rule into a firewall policy.
* [computeNetworkFirewallPoliciesCloneRules](#computenetworkfirewallpoliciesclonerules) - Copies rules to the specified firewall policy.
* [computeNetworkFirewallPoliciesDelete](#computenetworkfirewallpoliciesdelete) - Deletes the specified policy.
* [computeNetworkFirewallPoliciesGet](#computenetworkfirewallpoliciesget) - Returns the specified network firewall policy.
* [computeNetworkFirewallPoliciesGetAssociation](#computenetworkfirewallpoliciesgetassociation) - Gets an association with the specified name.
* [computeNetworkFirewallPoliciesGetIamPolicy](#computenetworkfirewallpoliciesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeNetworkFirewallPoliciesGetRule](#computenetworkfirewallpoliciesgetrule) - Gets a rule of the specified priority.
* [computeNetworkFirewallPoliciesInsert](#computenetworkfirewallpoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeNetworkFirewallPoliciesList](#computenetworkfirewallpolicieslist) - Lists all the policies that have been configured for the specified project.
* [computeNetworkFirewallPoliciesPatch](#computenetworkfirewallpoliciespatch) - Patches the specified policy with the data included in the request.
* [computeNetworkFirewallPoliciesPatchRule](#computenetworkfirewallpoliciespatchrule) - Patches a rule of the specified priority.
* [computeNetworkFirewallPoliciesRemoveAssociation](#computenetworkfirewallpoliciesremoveassociation) - Removes an association for the specified firewall policy.
* [computeNetworkFirewallPoliciesRemoveRule](#computenetworkfirewallpoliciesremoverule) - Deletes a rule of the specified priority.
* [computeNetworkFirewallPoliciesSetIamPolicy](#computenetworkfirewallpoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeNetworkFirewallPoliciesTestIamPermissions](#computenetworkfirewallpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeNetworkFirewallPoliciesAddAssociation

Inserts an association for the specified firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesAddAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyAssociation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesAddAssociationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesAddAssociationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesAddAssociationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesAddAssociationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firewallPolicyAssociation = new FirewallPolicyAssociation();
    $request->firewallPolicyAssociation->attachmentTarget = 'incidunt';
    $request->firewallPolicyAssociation->displayName = 'consequatur';
    $request->firewallPolicyAssociation->firewallPolicyId = 'nisi';
    $request->firewallPolicyAssociation->name = 'Mr. Jenna Bashirian Jr.';
    $request->firewallPolicyAssociation->priority = 820063;
    $request->firewallPolicyAssociation->shortName = 'perferendis';
    $request->accessToken = 'qui';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellendus';
    $request->fields = 'quod';
    $request->firewallPolicy = 'error';
    $request->key = 'ipsa';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->project = 'doloribus';
    $request->quotaUser = 'veniam';
    $request->replaceExistingAssociation = false;
    $request->requestId = 'animi';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'pariatur';
    $request->userIp = 'eos';

    $requestSecurity = new ComputeNetworkFirewallPoliciesAddAssociationSecurity();
    $requestSecurity->option1 = new ComputeNetworkFirewallPoliciesAddAssociationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkFirewallPolicies->computeNetworkFirewallPoliciesAddAssociation($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkFirewallPoliciesAddRule

Inserts a rule into a firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesAddRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleMatcherLayer4Config;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleSecureTag;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleSecureTagStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesAddRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesAddRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesAddRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesAddRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewallPolicyRule = new FirewallPolicyRule();
    $request->firewallPolicyRule->action = 'commodi';
    $request->firewallPolicyRule->description = 'quo';
    $request->firewallPolicyRule->direction = FirewallPolicyRuleDirectionEnum::EGRESS;
    $request->firewallPolicyRule->disabled = false;
    $request->firewallPolicyRule->enableLogging = false;
    $request->firewallPolicyRule->kind = 'magnam';
    $request->firewallPolicyRule->match = new FirewallPolicyRuleMatcher();
    $request->firewallPolicyRule->match->destAddressGroups = [
        'numquam',
        'iure',
        'id',
    ];
    $request->firewallPolicyRule->match->destFqdns = [
        'molestias',
        'assumenda',
        'praesentium',
        'occaecati',
    ];
    $request->firewallPolicyRule->match->destIpRanges = [
        'veniam',
    ];
    $request->firewallPolicyRule->match->destRegionCodes = [
        'nobis',
    ];
    $request->firewallPolicyRule->match->destThreatIntelligences = [
        'provident',
        'ea',
        'consequuntur',
    ];
    $request->firewallPolicyRule->match->layer4Configs = [
        new FirewallPolicyRuleMatcherLayer4Config(),
        new FirewallPolicyRuleMatcherLayer4Config(),
        new FirewallPolicyRuleMatcherLayer4Config(),
        new FirewallPolicyRuleMatcherLayer4Config(),
    ];
    $request->firewallPolicyRule->match->srcAddressGroups = [
        'quos',
        'excepturi',
    ];
    $request->firewallPolicyRule->match->srcFqdns = [
        'rerum',
        'a',
    ];
    $request->firewallPolicyRule->match->srcIpRanges = [
        'et',
        'eveniet',
    ];
    $request->firewallPolicyRule->match->srcRegionCodes = [
        'ea',
        'exercitationem',
    ];
    $request->firewallPolicyRule->match->srcSecureTags = [
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->match->srcThreatIntelligences = [
        'dolorem',
        'cumque',
        'nesciunt',
        'aliquam',
    ];
    $request->firewallPolicyRule->priority = 233804;
    $request->firewallPolicyRule->ruleName = 'at';
    $request->firewallPolicyRule->ruleTupleCount = 383672;
    $request->firewallPolicyRule->securityProfileGroup = 'quae';
    $request->firewallPolicyRule->targetResources = [
        'dignissimos',
        'atque',
    ];
    $request->firewallPolicyRule->targetSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->targetServiceAccounts = [
        'quaerat',
        'excepturi',
        'ab',
        'eos',
    ];
    $request->firewallPolicyRule->tlsInspect = false;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odio';
    $request->fields = 'magni';
    $request->firewallPolicy = 'enim';
    $request->key = 'eveniet';
    $request->maxPriority = 415672;
    $request->minPriority = 168376;
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'iste';
    $request->quotaUser = 'aut';
    $request->requestId = 'occaecati';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'error';
    $request->userIp = 'inventore';

    $requestSecurity = new ComputeNetworkFirewallPoliciesAddRuleSecurity();
    $requestSecurity->option1 = new ComputeNetworkFirewallPoliciesAddRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkFirewallPolicies->computeNetworkFirewallPoliciesAddRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkFirewallPoliciesCloneRules

Copies rules to the specified firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesCloneRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesCloneRulesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesCloneRulesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesCloneRulesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesCloneRulesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'id';
    $request->fields = 'ullam';
    $request->firewallPolicy = 'quibusdam';
    $request->key = 'recusandae';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->project = 'omnis';
    $request->quotaUser = 'mollitia';
    $request->requestId = 'placeat';
    $request->sourceFirewallPolicy = 'nihil';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'eaque';
    $request->userIp = 'aliquid';

    $requestSecurity = new ComputeNetworkFirewallPoliciesCloneRulesSecurity();
    $requestSecurity->option1 = new ComputeNetworkFirewallPoliciesCloneRulesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkFirewallPolicies->computeNetworkFirewallPoliciesCloneRules($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkFirewallPoliciesDelete

Deletes the specified policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quisquam';
    $request->fields = 'delectus';
    $request->firewallPolicy = 'et';
    $request->key = 'optio';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->project = 'quis';
    $request->quotaUser = 'unde';
    $request->requestId = 'consectetur';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'aliquid';
    $request->userIp = 'doloremque';

    $requestSecurity = new ComputeNetworkFirewallPoliciesDeleteSecurity();
    $requestSecurity->option1 = new ComputeNetworkFirewallPoliciesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkFirewallPolicies->computeNetworkFirewallPoliciesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkFirewallPoliciesGet

Returns the specified network firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'beatae';
    $request->fields = 'repudiandae';
    $request->firewallPolicy = 'ex';
    $request->key = 'ex';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->project = 'cum';
    $request->quotaUser = 'non';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'deleniti';

    $requestSecurity = new ComputeNetworkFirewallPoliciesGetSecurity();
    $requestSecurity->option1 = new ComputeNetworkFirewallPoliciesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkFirewallPolicies->computeNetworkFirewallPoliciesGet($request, $requestSecurity);

    if ($response->firewallPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkFirewallPoliciesGetAssociation

Gets an association with the specified name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetAssociationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetAssociationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetAssociationSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetAssociationSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesGetAssociationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->fields = 'omnis';
    $request->firewallPolicy = 'dolorum';
    $request->key = 'qui';
    $request->name = 'Lee Fay';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->project = 'ipsa';
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'velit';
    $request->userIp = 'earum';

    $requestSecurity = new ComputeNetworkFirewallPoliciesGetAssociationSecurity();
    $requestSecurity->option1 = new ComputeNetworkFirewallPoliciesGetAssociationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkFirewallPolicies->computeNetworkFirewallPoliciesGetAssociation($request, $requestSecurity);

    if ($response->firewallPolicyAssociation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkFirewallPoliciesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'reiciendis';
    $request->fields = 'ad';
    $request->key = 'perspiciatis';
    $request->oauthToken = 'delectus';
    $request->optionsRequestedPolicyVersion = 211246;
    $request->prettyPrint = false;
    $request->project = 'ipsam';
    $request->quotaUser = 'voluptatum';
    $request->resource = 'dolorum';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'earum';
    $request->userIp = 'est';

    $requestSecurity = new ComputeNetworkFirewallPoliciesGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeNetworkFirewallPoliciesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkFirewallPolicies->computeNetworkFirewallPoliciesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkFirewallPoliciesGetRule

Gets a rule of the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetRuleSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesGetRuleSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesGetRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ratione';
    $request->fields = 'consequuntur';
    $request->firewallPolicy = 'neque';
    $request->key = 'deserunt';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->priority = 79907;
    $request->project = 'tempore';
    $request->quotaUser = 'maiores';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'rerum';
    $request->userIp = 'laborum';

    $requestSecurity = new ComputeNetworkFirewallPoliciesGetRuleSecurity();
    $requestSecurity->option1 = new ComputeNetworkFirewallPoliciesGetRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkFirewallPolicies->computeNetworkFirewallPoliciesGetRule($request, $requestSecurity);

    if ($response->firewallPolicyRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkFirewallPoliciesInsert

Creates a new policy in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesInsertRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firewallPolicy = new FirewallPolicy();
    $request->firewallPolicy->associations = [
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
    ];
    $request->firewallPolicy->creationTimestamp = 'minus';
    $request->firewallPolicy->description = 'molestias';
    $request->firewallPolicy->displayName = 'quam';
    $request->firewallPolicy->fingerprint = 'nihil';
    $request->firewallPolicy->id = 'inventore';
    $request->firewallPolicy->kind = 'ex';
    $request->firewallPolicy->name = 'Alfredo Barton';
    $request->firewallPolicy->parent = 'quisquam';
    $request->firewallPolicy->region = 'sint';
    $request->firewallPolicy->ruleTupleCount = 912760;
    $request->firewallPolicy->rules = [
        new FirewallPolicyRule(),
    ];
    $request->firewallPolicy->selfLink = 'placeat';
    $request->firewallPolicy->selfLinkWithId = 'in';
    $request->firewallPolicy->shortName = 'possimus';
    $request->firewallPolicy->vpcNetworkScope = FirewallPolicyVpcNetworkScopeEnum::REGIONAL_VPC_NETWORK;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolores';
    $request->fields = 'consectetur';
    $request->key = 'repellat';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'animi';
    $request->quotaUser = 'est';
    $request->requestId = 'autem';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'nulla';

    $requestSecurity = new ComputeNetworkFirewallPoliciesInsertSecurity();
    $requestSecurity->option1 = new ComputeNetworkFirewallPoliciesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkFirewallPolicies->computeNetworkFirewallPoliciesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkFirewallPoliciesList

Lists all the policies that have been configured for the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'optio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'et';
    $request->fields = 'nobis';
    $request->filter = 'quas';
    $request->key = 'nemo';
    $request->maxResults = 412509;
    $request->oauthToken = 'soluta';
    $request->orderBy = 'quo';
    $request->pageToken = 'libero';
    $request->prettyPrint = false;
    $request->project = 'id';
    $request->quotaUser = 'quaerat';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'accusamus';
    $request->userIp = 'maiores';

    $requestSecurity = new ComputeNetworkFirewallPoliciesListSecurity();
    $requestSecurity->option1 = new ComputeNetworkFirewallPoliciesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkFirewallPolicies->computeNetworkFirewallPoliciesList($request, $requestSecurity);

    if ($response->firewallPolicyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkFirewallPoliciesPatch

Patches the specified policy with the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesPatchRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firewallPolicy1 = new FirewallPolicy();
    $request->firewallPolicy1->associations = [
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
    ];
    $request->firewallPolicy1->creationTimestamp = 'nemo';
    $request->firewallPolicy1->description = 'numquam';
    $request->firewallPolicy1->displayName = 'culpa';
    $request->firewallPolicy1->fingerprint = 'aliquam';
    $request->firewallPolicy1->id = 'iusto';
    $request->firewallPolicy1->kind = 'voluptatibus';
    $request->firewallPolicy1->name = 'Mr. Wilbert Zieme';
    $request->firewallPolicy1->parent = 'optio';
    $request->firewallPolicy1->region = 'fugiat';
    $request->firewallPolicy1->ruleTupleCount = 817425;
    $request->firewallPolicy1->rules = [
        new FirewallPolicyRule(),
        new FirewallPolicyRule(),
    ];
    $request->firewallPolicy1->selfLink = 'ut';
    $request->firewallPolicy1->selfLinkWithId = 'dolore';
    $request->firewallPolicy1->shortName = 'numquam';
    $request->firewallPolicy1->vpcNetworkScope = FirewallPolicyVpcNetworkScopeEnum::REGIONAL_VPC_NETWORK;
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'consequuntur';
    $request->firewallPolicyPathParameter = 'praesentium';
    $request->key = 'iusto';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->project = 'placeat';
    $request->quotaUser = 'dignissimos';
    $request->requestId = 'quibusdam';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'natus';
    $request->userIp = 'accusamus';

    $requestSecurity = new ComputeNetworkFirewallPoliciesPatchSecurity();
    $requestSecurity->option1 = new ComputeNetworkFirewallPoliciesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkFirewallPolicies->computeNetworkFirewallPoliciesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkFirewallPoliciesPatchRule

Patches a rule of the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesPatchRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleMatcherLayer4Config;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleSecureTag;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleSecureTagStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesPatchRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesPatchRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesPatchRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesPatchRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewallPolicyRule = new FirewallPolicyRule();
    $request->firewallPolicyRule->action = 'est';
    $request->firewallPolicyRule->description = 'doloribus';
    $request->firewallPolicyRule->direction = FirewallPolicyRuleDirectionEnum::EGRESS;
    $request->firewallPolicyRule->disabled = false;
    $request->firewallPolicyRule->enableLogging = false;
    $request->firewallPolicyRule->kind = 'adipisci';
    $request->firewallPolicyRule->match = new FirewallPolicyRuleMatcher();
    $request->firewallPolicyRule->match->destAddressGroups = [
        'impedit',
        'autem',
        'qui',
        'consectetur',
    ];
    $request->firewallPolicyRule->match->destFqdns = [
        'aspernatur',
        'consequatur',
    ];
    $request->firewallPolicyRule->match->destIpRanges = [
        'nesciunt',
        'et',
        'dolor',
        'voluptatum',
    ];
    $request->firewallPolicyRule->match->destRegionCodes = [
        'nesciunt',
        'doloremque',
        'at',
        'tenetur',
    ];
    $request->firewallPolicyRule->match->destThreatIntelligences = [
        'temporibus',
    ];
    $request->firewallPolicyRule->match->layer4Configs = [
        new FirewallPolicyRuleMatcherLayer4Config(),
        new FirewallPolicyRuleMatcherLayer4Config(),
        new FirewallPolicyRuleMatcherLayer4Config(),
    ];
    $request->firewallPolicyRule->match->srcAddressGroups = [
        'magni',
    ];
    $request->firewallPolicyRule->match->srcFqdns = [
        'earum',
    ];
    $request->firewallPolicyRule->match->srcIpRanges = [
        'id',
        'exercitationem',
        'commodi',
    ];
    $request->firewallPolicyRule->match->srcRegionCodes = [
        'delectus',
        'quidem',
    ];
    $request->firewallPolicyRule->match->srcSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->match->srcThreatIntelligences = [
        'suscipit',
        'veniam',
        'consequuntur',
        'repudiandae',
    ];
    $request->firewallPolicyRule->priority = 721090;
    $request->firewallPolicyRule->ruleName = 'libero';
    $request->firewallPolicyRule->ruleTupleCount = 596333;
    $request->firewallPolicyRule->securityProfileGroup = 'illum';
    $request->firewallPolicyRule->targetResources = [
        'praesentium',
    ];
    $request->firewallPolicyRule->targetSecureTags = [
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->targetServiceAccounts = [
        'dolor',
        'corrupti',
        'ducimus',
    ];
    $request->firewallPolicyRule->tlsInspect = false;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'labore';
    $request->firewallPolicy = 'neque';
    $request->key = 'cum';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->priority = 621230;
    $request->project = 'ratione';
    $request->quotaUser = 'facere';
    $request->requestId = 'est';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'neque';
    $request->userIp = 'perferendis';

    $requestSecurity = new ComputeNetworkFirewallPoliciesPatchRuleSecurity();
    $requestSecurity->option1 = new ComputeNetworkFirewallPoliciesPatchRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkFirewallPolicies->computeNetworkFirewallPoliciesPatchRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkFirewallPoliciesRemoveAssociation

Removes an association for the specified firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesRemoveAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesRemoveAssociationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesRemoveAssociationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesRemoveAssociationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesRemoveAssociationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'doloribus';
    $request->firewallPolicy = 'corporis';
    $request->key = 'alias';
    $request->name = 'Mrs. Taylor O'Kon';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->project = 'libero';
    $request->quotaUser = 'quasi';
    $request->requestId = 'quidem';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'exercitationem';

    $requestSecurity = new ComputeNetworkFirewallPoliciesRemoveAssociationSecurity();
    $requestSecurity->option1 = new ComputeNetworkFirewallPoliciesRemoveAssociationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkFirewallPolicies->computeNetworkFirewallPoliciesRemoveAssociation($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkFirewallPoliciesRemoveRule

Deletes a rule of the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesRemoveRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesRemoveRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesRemoveRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesRemoveRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesRemoveRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'cum';
    $request->firewallPolicy = 'aut';
    $request->key = 'expedita';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->priority = 248232;
    $request->project = 'libero';
    $request->quotaUser = 'expedita';
    $request->requestId = 'odio';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'aliquam';
    $request->userIp = 'laboriosam';

    $requestSecurity = new ComputeNetworkFirewallPoliciesRemoveRuleSecurity();
    $requestSecurity->option1 = new ComputeNetworkFirewallPoliciesRemoveRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkFirewallPolicies->computeNetworkFirewallPoliciesRemoveRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkFirewallPoliciesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSetPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'accusamus';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'repellendus';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 248650;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'facilis';
    $request->key = 'consequatur';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->quotaUser = 'libero';
    $request->resource = 'rerum';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'in';
    $request->userIp = 'fuga';

    $requestSecurity = new ComputeNetworkFirewallPoliciesSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeNetworkFirewallPoliciesSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkFirewallPolicies->computeNetworkFirewallPoliciesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkFirewallPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'eveniet',
        'reprehenderit',
        'incidunt',
        'soluta',
    ];
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'repudiandae';
    $request->fields = 'quidem';
    $request->key = 'occaecati';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'ipsam';
    $request->quotaUser = 'voluptate';
    $request->resource = 'quod';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'recusandae';
    $request->userIp = 'illum';

    $requestSecurity = new ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkFirewallPolicies->computeNetworkFirewallPoliciesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
