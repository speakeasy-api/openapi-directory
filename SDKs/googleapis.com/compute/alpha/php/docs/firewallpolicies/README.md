# firewallPolicies

### Available Operations

* [computeFirewallPoliciesAddAssociation](#computefirewallpoliciesaddassociation) - Inserts an association for the specified firewall policy.
* [computeFirewallPoliciesAddRule](#computefirewallpoliciesaddrule) - Inserts a rule into a firewall policy.
* [computeFirewallPoliciesCloneRules](#computefirewallpoliciesclonerules) - Copies rules to the specified firewall policy.
* [computeFirewallPoliciesDelete](#computefirewallpoliciesdelete) - Deletes the specified policy.
* [computeFirewallPoliciesGet](#computefirewallpoliciesget) - Returns the specified firewall policy.
* [computeFirewallPoliciesGetAssociation](#computefirewallpoliciesgetassociation) - Gets an association with the specified name.
* [computeFirewallPoliciesGetIamPolicy](#computefirewallpoliciesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeFirewallPoliciesGetRule](#computefirewallpoliciesgetrule) - Gets a rule of the specified priority.
* [computeFirewallPoliciesInsert](#computefirewallpoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeFirewallPoliciesList](#computefirewallpolicieslist) - Lists all the policies that have been configured for the specified folder or organization.
* [computeFirewallPoliciesListAssociations](#computefirewallpolicieslistassociations) - Lists associations of a specified target, i.e., organization or folder.
* [computeFirewallPoliciesMove](#computefirewallpoliciesmove) - Moves the specified firewall policy.
* [computeFirewallPoliciesPatch](#computefirewallpoliciespatch) - Patches the specified policy with the data included in the request.
* [computeFirewallPoliciesPatchRule](#computefirewallpoliciespatchrule) - Patches a rule of the specified priority.
* [computeFirewallPoliciesRemoveAssociation](#computefirewallpoliciesremoveassociation) - Removes an association for the specified firewall policy.
* [computeFirewallPoliciesRemoveRule](#computefirewallpoliciesremoverule) - Deletes a rule of the specified priority.
* [computeFirewallPoliciesSetIamPolicy](#computefirewallpoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeFirewallPoliciesTestIamPermissions](#computefirewallpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeFirewallPoliciesAddAssociation

Inserts an association for the specified firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesAddAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyAssociation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesAddAssociationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesAddAssociationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesAddAssociationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesAddAssociationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firewallPolicyAssociation = new FirewallPolicyAssociation();
    $request->firewallPolicyAssociation->attachmentTarget = 'unde';
    $request->firewallPolicyAssociation->displayName = 'modi';
    $request->firewallPolicyAssociation->firewallPolicyId = 'perspiciatis';
    $request->firewallPolicyAssociation->name = 'Jonathon Collins';
    $request->firewallPolicyAssociation->priority = 279172;
    $request->firewallPolicyAssociation->shortName = 'recusandae';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'autem';
    $request->firewallPolicy = 'quo';
    $request->key = 'nesciunt';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->replaceExistingAssociation = false;
    $request->requestId = 'illum';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'non';
    $request->userIp = 'mollitia';

    $requestSecurity = new ComputeFirewallPoliciesAddAssociationSecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesAddAssociationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesAddAssociation($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesAddRule

Inserts a rule into a firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesAddRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleMatcherLayer4Config;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleSecureTag;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleSecureTagStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesAddRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesAddRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesAddRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesAddRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewallPolicyRule = new FirewallPolicyRule();
    $request->firewallPolicyRule->action = 'recusandae';
    $request->firewallPolicyRule->description = 'distinctio';
    $request->firewallPolicyRule->direction = FirewallPolicyRuleDirectionEnum::INGRESS;
    $request->firewallPolicyRule->disabled = false;
    $request->firewallPolicyRule->enableLogging = false;
    $request->firewallPolicyRule->kind = 'ad';
    $request->firewallPolicyRule->match = new FirewallPolicyRuleMatcher();
    $request->firewallPolicyRule->match->destAddressGroups = [
        'laborum',
        'eveniet',
        'laborum',
        'incidunt',
    ];
    $request->firewallPolicyRule->match->destFqdns = [
        'ipsam',
        'alias',
        'suscipit',
        'deserunt',
    ];
    $request->firewallPolicyRule->match->destIpRanges = [
        'laborum',
        'est',
        'occaecati',
    ];
    $request->firewallPolicyRule->match->destRegionCodes = [
        'quo',
        'perferendis',
    ];
    $request->firewallPolicyRule->match->destThreatIntelligences = [
        'aliquid',
    ];
    $request->firewallPolicyRule->match->layer4Configs = [
        new FirewallPolicyRuleMatcherLayer4Config(),
        new FirewallPolicyRuleMatcherLayer4Config(),
    ];
    $request->firewallPolicyRule->match->srcAddressGroups = [
        'eligendi',
        'hic',
    ];
    $request->firewallPolicyRule->match->srcFqdns = [
        'officiis',
        'unde',
    ];
    $request->firewallPolicyRule->match->srcIpRanges = [
        'error',
        'mollitia',
        'magnam',
        'nostrum',
    ];
    $request->firewallPolicyRule->match->srcRegionCodes = [
        'corrupti',
        'fuga',
    ];
    $request->firewallPolicyRule->match->srcSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->match->srcThreatIntelligences = [
        'quasi',
        'deserunt',
        'quod',
        'laboriosam',
    ];
    $request->firewallPolicyRule->priority = 41179;
    $request->firewallPolicyRule->ruleName = 'voluptatem';
    $request->firewallPolicyRule->ruleTupleCount = 816421;
    $request->firewallPolicyRule->securityProfileGroup = 'necessitatibus';
    $request->firewallPolicyRule->targetResources = [
        'consequatur',
        'eaque',
        'architecto',
        'similique',
    ];
    $request->firewallPolicyRule->targetSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->targetServiceAccounts = [
        'quae',
        'magni',
        'officiis',
    ];
    $request->firewallPolicyRule->tlsInspect = false;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'impedit';
    $request->fields = 'ipsa';
    $request->firewallPolicy = 'excepturi';
    $request->key = 'a';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'laudantium';
    $request->requestId = 'maiores';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'asperiores';
    $request->userIp = 'rem';

    $requestSecurity = new ComputeFirewallPoliciesAddRuleSecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesAddRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesAddRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesCloneRules

Copies rules to the specified firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesCloneRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesCloneRulesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesCloneRulesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesCloneRulesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesCloneRulesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloribus';
    $request->fields = 'velit';
    $request->firewallPolicy = 'eius';
    $request->key = 'esse';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->requestId = 'quasi';
    $request->sourceFirewallPolicy = 'neque';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'excepturi';
    $request->userIp = 'accusantium';

    $requestSecurity = new ComputeFirewallPoliciesCloneRulesSecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesCloneRulesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesCloneRules($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesDelete

Deletes the specified policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'dicta';
    $request->firewallPolicy = 'odit';
    $request->key = 'corporis';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->requestId = 'error';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'accusantium';
    $request->userIp = 'id';

    $requestSecurity = new ComputeFirewallPoliciesDeleteSecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesGet

Returns the specified firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ex';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'ullam';
    $request->firewallPolicy = 'quae';
    $request->key = 'similique';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'deserunt';
    $request->userIp = 'delectus';

    $requestSecurity = new ComputeFirewallPoliciesGetSecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesGet($request, $requestSecurity);

    if ($response->firewallPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesGetAssociation

Gets an association with the specified name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetAssociationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetAssociationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetAssociationSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetAssociationSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesGetAssociationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->fields = 'quis';
    $request->firewallPolicy = 'cupiditate';
    $request->key = 'aliquam';
    $request->name = 'Elijah Langworth';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'quisquam';
    $request->userIp = 'tenetur';

    $requestSecurity = new ComputeFirewallPoliciesGetAssociationSecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesGetAssociationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesGetAssociation($request, $requestSecurity);

    if ($response->firewallPolicyAssociation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'asperiores';
    $request->fields = 'a';
    $request->key = 'nobis';
    $request->oauthToken = 'perspiciatis';
    $request->optionsRequestedPolicyVersion = 34245;
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->resource = 'minus';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'eveniet';
    $request->userIp = 'porro';

    $requestSecurity = new ComputeFirewallPoliciesGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesGetRule

Gets a rule of the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetRuleSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesGetRuleSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesGetRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptates';
    $request->fields = 'fugit';
    $request->firewallPolicy = 'eius';
    $request->key = 'sequi';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->priority = 992887;
    $request->quotaUser = 'esse';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'sint';
    $request->userIp = 'repellat';

    $requestSecurity = new ComputeFirewallPoliciesGetRuleSecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesGetRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesGetRule($request, $requestSecurity);

    if ($response->firewallPolicyRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesInsert

Creates a new policy in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesInsertRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewallPolicy = new FirewallPolicy();
    $request->firewallPolicy->associations = [
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
    ];
    $request->firewallPolicy->creationTimestamp = 'maiores';
    $request->firewallPolicy->description = 'itaque';
    $request->firewallPolicy->displayName = 'nulla';
    $request->firewallPolicy->fingerprint = 'deserunt';
    $request->firewallPolicy->id = 'corporis';
    $request->firewallPolicy->kind = 'velit';
    $request->firewallPolicy->name = 'Ronnie Nikolaus';
    $request->firewallPolicy->parent = 'repudiandae';
    $request->firewallPolicy->region = 'accusantium';
    $request->firewallPolicy->ruleTupleCount = 637840;
    $request->firewallPolicy->rules = [
        new FirewallPolicyRule(),
        new FirewallPolicyRule(),
        new FirewallPolicyRule(),
        new FirewallPolicyRule(),
    ];
    $request->firewallPolicy->selfLink = 'quasi';
    $request->firewallPolicy->selfLinkWithId = 'blanditiis';
    $request->firewallPolicy->shortName = 'eius';
    $request->firewallPolicy->vpcNetworkScope = FirewallPolicyVpcNetworkScopeEnum::REGIONAL_VPC_NETWORK;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'natus';
    $request->fields = 'minus';
    $request->key = 'quia';
    $request->oauthToken = 'magnam';
    $request->parentId = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->requestId = 'quos';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'molestiae';

    $requestSecurity = new ComputeFirewallPoliciesInsertSecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesList

Lists all the policies that have been configured for the specified folder or organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'necessitatibus';
    $request->filter = 'architecto';
    $request->key = 'molestias';
    $request->maxResults = 292177;
    $request->oauthToken = 'sunt';
    $request->orderBy = 'maiores';
    $request->pageToken = 'neque';
    $request->parentId = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'earum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'ipsam';
    $request->userIp = 'eaque';

    $requestSecurity = new ComputeFirewallPoliciesListSecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesList($request, $requestSecurity);

    if ($response->firewallPolicyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesListAssociations

Lists associations of a specified target, i.e., organization or folder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesListAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesListAssociationsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesListAssociationsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesListAssociationsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesListAssociationsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesListAssociationsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ad';
    $request->fields = 'nisi';
    $request->key = 'tenetur';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->targetResource = 'nemo';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'pariatur';
    $request->userIp = 'sit';

    $requestSecurity = new ComputeFirewallPoliciesListAssociationsSecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesListAssociationsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesListAssociations($request, $requestSecurity);

    if ($response->firewallPoliciesListAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesMove

Moves the specified firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesMoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesMoveSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesMoveSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesMoveSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesMoveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'id';
    $request->fields = 'sapiente';
    $request->firewallPolicy = 'sed';
    $request->key = 'possimus';
    $request->oauthToken = 'repellat';
    $request->parentId = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->requestId = 'adipisci';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'harum';
    $request->userIp = 'dolore';

    $requestSecurity = new ComputeFirewallPoliciesMoveSecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesMoveSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesMove($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesPatch

Patches the specified policy with the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesPatchRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewallPolicy1 = new FirewallPolicy();
    $request->firewallPolicy1->associations = [
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
    ];
    $request->firewallPolicy1->creationTimestamp = 'explicabo';
    $request->firewallPolicy1->description = 'minus';
    $request->firewallPolicy1->displayName = 'soluta';
    $request->firewallPolicy1->fingerprint = 'dolorum';
    $request->firewallPolicy1->id = 'velit';
    $request->firewallPolicy1->kind = 'earum';
    $request->firewallPolicy1->name = 'Miss Jeremiah Fritsch';
    $request->firewallPolicy1->parent = 'harum';
    $request->firewallPolicy1->region = 'cumque';
    $request->firewallPolicy1->ruleTupleCount = 42615;
    $request->firewallPolicy1->rules = [
        new FirewallPolicyRule(),
        new FirewallPolicyRule(),
        new FirewallPolicyRule(),
    ];
    $request->firewallPolicy1->selfLink = 'corrupti';
    $request->firewallPolicy1->selfLinkWithId = 'eaque';
    $request->firewallPolicy1->shortName = 'deserunt';
    $request->firewallPolicy1->vpcNetworkScope = FirewallPolicyVpcNetworkScopeEnum::GLOBAL_VPC_NETWORK;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'possimus';
    $request->firewallPolicyPathParameter = 'dolor';
    $request->key = 'rerum';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->requestId = 'optio';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'minus';
    $request->userIp = 'quo';

    $requestSecurity = new ComputeFirewallPoliciesPatchSecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesPatchRule

Patches a rule of the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesPatchRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleMatcherLayer4Config;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleSecureTag;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyRuleSecureTagStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesPatchRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesPatchRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesPatchRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesPatchRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewallPolicyRule = new FirewallPolicyRule();
    $request->firewallPolicyRule->action = 'asperiores';
    $request->firewallPolicyRule->description = 'voluptatum';
    $request->firewallPolicyRule->direction = FirewallPolicyRuleDirectionEnum::INGRESS;
    $request->firewallPolicyRule->disabled = false;
    $request->firewallPolicyRule->enableLogging = false;
    $request->firewallPolicyRule->kind = 'corporis';
    $request->firewallPolicyRule->match = new FirewallPolicyRuleMatcher();
    $request->firewallPolicyRule->match->destAddressGroups = [
        'illo',
    ];
    $request->firewallPolicyRule->match->destFqdns = [
        'doloribus',
    ];
    $request->firewallPolicyRule->match->destIpRanges = [
        'at',
        'possimus',
    ];
    $request->firewallPolicyRule->match->destRegionCodes = [
        'pariatur',
    ];
    $request->firewallPolicyRule->match->destThreatIntelligences = [
        'sapiente',
        'mollitia',
    ];
    $request->firewallPolicyRule->match->layer4Configs = [
        new FirewallPolicyRuleMatcherLayer4Config(),
    ];
    $request->firewallPolicyRule->match->srcAddressGroups = [
        'aperiam',
        'non',
        'voluptates',
    ];
    $request->firewallPolicyRule->match->srcFqdns = [
        'aliquam',
        'quisquam',
    ];
    $request->firewallPolicyRule->match->srcIpRanges = [
        'consequuntur',
        'maiores',
        'inventore',
    ];
    $request->firewallPolicyRule->match->srcRegionCodes = [
        'laudantium',
        'est',
    ];
    $request->firewallPolicyRule->match->srcSecureTags = [
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->match->srcThreatIntelligences = [
        'consectetur',
        'cumque',
    ];
    $request->firewallPolicyRule->priority = 525917;
    $request->firewallPolicyRule->ruleName = 'voluptatum';
    $request->firewallPolicyRule->ruleTupleCount = 498534;
    $request->firewallPolicyRule->securityProfileGroup = 'adipisci';
    $request->firewallPolicyRule->targetResources = [
        'tempora',
        'blanditiis',
        'numquam',
        'sequi',
    ];
    $request->firewallPolicyRule->targetSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->targetServiceAccounts = [
        'rerum',
    ];
    $request->firewallPolicyRule->tlsInspect = false;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'autem';
    $request->fields = 'quidem';
    $request->firewallPolicy = 'totam';
    $request->key = 'porro';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->priority = 168926;
    $request->quotaUser = 'nihil';
    $request->requestId = 'voluptas';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'commodi';
    $request->userIp = 'alias';

    $requestSecurity = new ComputeFirewallPoliciesPatchRuleSecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesPatchRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesPatchRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesRemoveAssociation

Removes an association for the specified firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesRemoveAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesRemoveAssociationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesRemoveAssociationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesRemoveAssociationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesRemoveAssociationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->fields = 'aliquam';
    $request->firewallPolicy = 'iste';
    $request->key = 'ullam';
    $request->name = 'Clark Hodkiewicz';
    $request->oauthToken = 'illo';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->requestId = 'inventore';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'ipsam';
    $request->userIp = 'quasi';

    $requestSecurity = new ComputeFirewallPoliciesRemoveAssociationSecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesRemoveAssociationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesRemoveAssociation($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesRemoveRule

Deletes a rule of the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesRemoveRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesRemoveRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesRemoveRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesRemoveRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesRemoveRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facere';
    $request->fields = 'facilis';
    $request->firewallPolicy = 'beatae';
    $request->key = 'cumque';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->priority = 287152;
    $request->quotaUser = 'expedita';
    $request->requestId = 'corrupti';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'atque';
    $request->userIp = 'officiis';

    $requestSecurity = new ComputeFirewallPoliciesRemoveRuleSecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesRemoveRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesRemoveRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalOrganizationSetPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalOrganizationSetPolicyRequest = new GlobalOrganizationSetPolicyRequest();
    $request->globalOrganizationSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalOrganizationSetPolicyRequest->etag = 'sapiente';
    $request->globalOrganizationSetPolicyRequest->policy = new Policy();
    $request->globalOrganizationSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalOrganizationSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->globalOrganizationSetPolicyRequest->policy->etag = 'quod';
    $request->globalOrganizationSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->globalOrganizationSetPolicyRequest->policy->version = 781491;
    $request->accessToken = 'id';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'libero';
    $request->key = 'quo';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->resource = 'maxime';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'soluta';
    $request->userIp = 'fugit';

    $requestSecurity = new ComputeFirewallPoliciesSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeFirewallPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'recusandae',
        'veritatis',
        'aut',
        'laudantium',
    ];
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptates';
    $request->fields = 'tempora';
    $request->key = 'magni';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->resource = 'voluptatem';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'at';
    $request->userIp = 'eum';

    $requestSecurity = new ComputeFirewallPoliciesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeFirewallPoliciesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->firewallPolicies->computeFirewallPoliciesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
