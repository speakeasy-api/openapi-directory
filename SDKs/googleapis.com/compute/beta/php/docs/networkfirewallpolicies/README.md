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
    $request->firewallPolicyAssociation->attachmentTarget = 'quasi';
    $request->firewallPolicyAssociation->displayName = 'accusantium';
    $request->firewallPolicyAssociation->firewallPolicyId = 'molestias';
    $request->firewallPolicyAssociation->name = 'Seth Schaefer';
    $request->firewallPolicyAssociation->shortName = 'in';
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->fields = 'aut';
    $request->firewallPolicy = 'rem';
    $request->key = 'odit';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->project = 'error';
    $request->quotaUser = 'incidunt';
    $request->replaceExistingAssociation = false;
    $request->requestId = 'asperiores';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'mollitia';
    $request->userIp = 'distinctio';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firewallPolicyRule = new FirewallPolicyRule();
    $request->firewallPolicyRule->action = 'earum';
    $request->firewallPolicyRule->description = 'possimus';
    $request->firewallPolicyRule->direction = FirewallPolicyRuleDirectionEnum::EGRESS;
    $request->firewallPolicyRule->disabled = false;
    $request->firewallPolicyRule->enableLogging = false;
    $request->firewallPolicyRule->kind = 'eum';
    $request->firewallPolicyRule->match = new FirewallPolicyRuleMatcher();
    $request->firewallPolicyRule->match->destAddressGroups = [
        'veritatis',
        'voluptates',
    ];
    $request->firewallPolicyRule->match->destFqdns = [
        'impedit',
        'amet',
        'dolores',
    ];
    $request->firewallPolicyRule->match->destIpRanges = [
        'neque',
        'enim',
    ];
    $request->firewallPolicyRule->match->destRegionCodes = [
        'officia',
    ];
    $request->firewallPolicyRule->match->destThreatIntelligences = [
        'eum',
        'molestiae',
    ];
    $request->firewallPolicyRule->match->layer4Configs = [
        new FirewallPolicyRuleMatcherLayer4Config(),
    ];
    $request->firewallPolicyRule->match->srcAddressGroups = [
        'ipsum',
        'nihil',
    ];
    $request->firewallPolicyRule->match->srcFqdns = [
        'natus',
        'quisquam',
        'itaque',
    ];
    $request->firewallPolicyRule->match->srcIpRanges = [
        'recusandae',
    ];
    $request->firewallPolicyRule->match->srcRegionCodes = [
        'error',
        'dicta',
        'nemo',
    ];
    $request->firewallPolicyRule->match->srcSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->match->srcThreatIntelligences = [
        'temporibus',
        'omnis',
    ];
    $request->firewallPolicyRule->priority = 228483;
    $request->firewallPolicyRule->ruleName = 'deserunt';
    $request->firewallPolicyRule->ruleTupleCount = 495515;
    $request->firewallPolicyRule->targetResources = [
        'impedit',
        'ipsa',
    ];
    $request->firewallPolicyRule->targetSecureTags = [
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->targetServiceAccounts = [
        'sed',
        'a',
    ];
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->fields = 'quaerat';
    $request->firewallPolicy = 'cum';
    $request->key = 'dolore';
    $request->maxPriority = 843969;
    $request->minPriority = 701366;
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->project = 'tempore';
    $request->quotaUser = 'odio';
    $request->requestId = 'reprehenderit';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'voluptates';
    $request->userIp = 'distinctio';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'fugiat';
    $request->firewallPolicy = 'aspernatur';
    $request->key = 'impedit';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'eaque';
    $request->requestId = 'aspernatur';
    $request->sourceFirewallPolicy = 'expedita';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'hic';
    $request->userIp = 'rerum';

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
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'aliquam';
    $request->firewallPolicy = 'aliquid';
    $request->key = 'adipisci';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->project = 'fugiat';
    $request->quotaUser = 'enim';
    $request->requestId = 'eveniet';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'at';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quos';
    $request->fields = 'quisquam';
    $request->firewallPolicy = 'dolor';
    $request->key = 'accusamus';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->project = 'enim';
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'veritatis';
    $request->userIp = 'vero';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fugiat';
    $request->fields = 'deserunt';
    $request->firewallPolicy = 'sint';
    $request->key = 'eum';
    $request->name = 'Megan Ledner';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'quam';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'odio';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consectetur';
    $request->fields = 'fuga';
    $request->key = 'quasi';
    $request->oauthToken = 'eos';
    $request->optionsRequestedPolicyVersion = 678638;
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'rerum';
    $request->resource = 'cupiditate';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'eius';

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
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'numquam';
    $request->firewallPolicy = 'tempora';
    $request->key = 'corrupti';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->priority = 989060;
    $request->project = 'veniam';
    $request->quotaUser = 'cumque';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'ut';
    $request->userIp = 'amet';

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkFirewallPoliciesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkFirewallPoliciesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewallPolicy = new FirewallPolicy();
    $request->firewallPolicy->associations = [
        new FirewallPolicyAssociation(),
    ];
    $request->firewallPolicy->creationTimestamp = 'ex';
    $request->firewallPolicy->description = 'tempore';
    $request->firewallPolicy->displayName = 'rem';
    $request->firewallPolicy->fingerprint = 'laboriosam';
    $request->firewallPolicy->id = 'harum';
    $request->firewallPolicy->kind = 'consectetur';
    $request->firewallPolicy->name = 'Orville Will';
    $request->firewallPolicy->parent = 'dicta';
    $request->firewallPolicy->region = 'minima';
    $request->firewallPolicy->ruleTupleCount = 708048;
    $request->firewallPolicy->rules = [
        new FirewallPolicyRule(),
    ];
    $request->firewallPolicy->selfLink = 'incidunt';
    $request->firewallPolicy->selfLinkWithId = 'magnam';
    $request->firewallPolicy->shortName = 'molestias';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellendus';
    $request->fields = 'delectus';
    $request->key = 'dicta';
    $request->oauthToken = 'ratione';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'ut';
    $request->requestId = 'officiis';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'distinctio';

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
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'reiciendis';
    $request->filter = 'commodi';
    $request->key = 'sit';
    $request->maxResults = 410051;
    $request->oauthToken = 'molestias';
    $request->orderBy = 'quia';
    $request->pageToken = 'ipsam';
    $request->prettyPrint = false;
    $request->project = 'rem';
    $request->quotaUser = 'molestias';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'necessitatibus';
    $request->userIp = 'culpa';

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
    $request->firewallPolicy1->creationTimestamp = 'amet';
    $request->firewallPolicy1->description = 'fugiat';
    $request->firewallPolicy1->displayName = 'corporis';
    $request->firewallPolicy1->fingerprint = 'impedit';
    $request->firewallPolicy1->id = 'in';
    $request->firewallPolicy1->kind = 'fugit';
    $request->firewallPolicy1->name = 'Ramona Hauck';
    $request->firewallPolicy1->parent = 'laudantium';
    $request->firewallPolicy1->region = 'exercitationem';
    $request->firewallPolicy1->ruleTupleCount = 113947;
    $request->firewallPolicy1->rules = [
        new FirewallPolicyRule(),
        new FirewallPolicyRule(),
    ];
    $request->firewallPolicy1->selfLink = 'blanditiis';
    $request->firewallPolicy1->selfLinkWithId = 'nulla';
    $request->firewallPolicy1->shortName = 'eum';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ut';
    $request->fields = 'cupiditate';
    $request->firewallPolicyPathParameter = 'debitis';
    $request->key = 'minima';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->project = 'consectetur';
    $request->quotaUser = 'nostrum';
    $request->requestId = 'tempore';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'dolorem';
    $request->userIp = 'expedita';

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
    $request->firewallPolicyRule->action = 'voluptatem';
    $request->firewallPolicyRule->description = 'maiores';
    $request->firewallPolicyRule->direction = FirewallPolicyRuleDirectionEnum::INGRESS;
    $request->firewallPolicyRule->disabled = false;
    $request->firewallPolicyRule->enableLogging = false;
    $request->firewallPolicyRule->kind = 'reprehenderit';
    $request->firewallPolicyRule->match = new FirewallPolicyRuleMatcher();
    $request->firewallPolicyRule->match->destAddressGroups = [
        'placeat',
    ];
    $request->firewallPolicyRule->match->destFqdns = [
        'magni',
        'voluptatibus',
    ];
    $request->firewallPolicyRule->match->destIpRanges = [
        'provident',
        'delectus',
        'dolore',
        'totam',
    ];
    $request->firewallPolicyRule->match->destRegionCodes = [
        'numquam',
        'sunt',
    ];
    $request->firewallPolicyRule->match->destThreatIntelligences = [
        'veniam',
    ];
    $request->firewallPolicyRule->match->layer4Configs = [
        new FirewallPolicyRuleMatcherLayer4Config(),
        new FirewallPolicyRuleMatcherLayer4Config(),
        new FirewallPolicyRuleMatcherLayer4Config(),
        new FirewallPolicyRuleMatcherLayer4Config(),
    ];
    $request->firewallPolicyRule->match->srcAddressGroups = [
        'minima',
        'expedita',
    ];
    $request->firewallPolicyRule->match->srcFqdns = [
        'excepturi',
        'eum',
    ];
    $request->firewallPolicyRule->match->srcIpRanges = [
        'iure',
    ];
    $request->firewallPolicyRule->match->srcRegionCodes = [
        'cumque',
        'eaque',
    ];
    $request->firewallPolicyRule->match->srcSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->match->srcThreatIntelligences = [
        'culpa',
        'vel',
        'sapiente',
        'perspiciatis',
    ];
    $request->firewallPolicyRule->priority = 190444;
    $request->firewallPolicyRule->ruleName = 'libero';
    $request->firewallPolicyRule->ruleTupleCount = 563937;
    $request->firewallPolicyRule->targetResources = [
        'fuga',
    ];
    $request->firewallPolicyRule->targetSecureTags = [
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->targetServiceAccounts = [
        'deleniti',
        'eligendi',
        'unde',
    ];
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'vitae';
    $request->firewallPolicy = 'explicabo';
    $request->key = 'corporis';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->priority = 746782;
    $request->project = 'nihil';
    $request->quotaUser = 'adipisci';
    $request->requestId = 'provident';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'dolore';
    $request->userIp = 'voluptatibus';

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
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'architecto';
    $request->firewallPolicy = 'perferendis';
    $request->key = 'possimus';
    $request->name = 'Marta Hodkiewicz';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->project = 'impedit';
    $request->quotaUser = 'cupiditate';
    $request->requestId = 'excepturi';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'iure';
    $request->userIp = 'sed';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nam';
    $request->fields = 'optio';
    $request->firewallPolicy = 'accusantium';
    $request->key = 'earum';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->priority = 256890;
    $request->project = 'voluptatem';
    $request->quotaUser = 'voluptatum';
    $request->requestId = 'ducimus';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'unde';
    $request->userIp = 'maxime';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'recusandae';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'quia';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 840468;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'est';
    $request->key = 'placeat';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'modi';
    $request->resource = 'minus';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'culpa';
    $request->userIp = 'beatae';

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
        'sint',
        'saepe',
        'illo',
    ];
    $request->accessToken = 'minima';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'reiciendis';
    $request->fields = 'molestias';
    $request->key = 'ipsa';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->project = 'natus';
    $request->quotaUser = 'aperiam';
    $request->resource = 'ducimus';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'ducimus';

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
