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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewallPolicyAssociation = new FirewallPolicyAssociation();
    $request->firewallPolicyAssociation->attachmentTarget = 'ipsum';
    $request->firewallPolicyAssociation->displayName = 'adipisci';
    $request->firewallPolicyAssociation->firewallPolicyId = 'saepe';
    $request->firewallPolicyAssociation->name = 'Anthony Hayes';
    $request->firewallPolicyAssociation->shortName = 'architecto';
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eligendi';
    $request->fields = 'possimus';
    $request->firewallPolicy = 'non';
    $request->key = 'magnam';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->replaceExistingAssociation = false;
    $request->requestId = 'asperiores';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'consequuntur';
    $request->userIp = 'facere';

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
    $request->firewallPolicyRule->action = 'odit';
    $request->firewallPolicyRule->description = 'pariatur';
    $request->firewallPolicyRule->direction = FirewallPolicyRuleDirectionEnum::EGRESS;
    $request->firewallPolicyRule->disabled = false;
    $request->firewallPolicyRule->enableLogging = false;
    $request->firewallPolicyRule->kind = 'exercitationem';
    $request->firewallPolicyRule->match = new FirewallPolicyRuleMatcher();
    $request->firewallPolicyRule->match->destAddressGroups = [
        'velit',
    ];
    $request->firewallPolicyRule->match->destFqdns = [
        'tempore',
        'nisi',
        'voluptatibus',
    ];
    $request->firewallPolicyRule->match->destIpRanges = [
        'blanditiis',
        'distinctio',
    ];
    $request->firewallPolicyRule->match->destRegionCodes = [
        'quis',
        'nisi',
    ];
    $request->firewallPolicyRule->match->destThreatIntelligences = [
        'minus',
        'facere',
        'facilis',
    ];
    $request->firewallPolicyRule->match->layer4Configs = [
        new FirewallPolicyRuleMatcherLayer4Config(),
    ];
    $request->firewallPolicyRule->match->srcAddressGroups = [
        'voluptatibus',
        'voluptatibus',
    ];
    $request->firewallPolicyRule->match->srcFqdns = [
        'debitis',
    ];
    $request->firewallPolicyRule->match->srcIpRanges = [
        'rerum',
        'eos',
    ];
    $request->firewallPolicyRule->match->srcRegionCodes = [
        'nostrum',
        'neque',
    ];
    $request->firewallPolicyRule->match->srcSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->match->srcThreatIntelligences = [
        'rem',
        'eligendi',
        'fugiat',
    ];
    $request->firewallPolicyRule->priority = 604078;
    $request->firewallPolicyRule->ruleName = 'officiis';
    $request->firewallPolicyRule->ruleTupleCount = 495617;
    $request->firewallPolicyRule->targetResources = [
        'dicta',
    ];
    $request->firewallPolicyRule->targetSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->targetServiceAccounts = [
        'vitae',
        'dignissimos',
        'esse',
        'fugiat',
    ];
    $request->accessToken = 'ad';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'delectus';
    $request->firewallPolicy = 'iusto';
    $request->key = 'dignissimos';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'illo';
    $request->requestId = 'ab';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'accusamus';
    $request->userIp = 'saepe';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'earum';
    $request->firewallPolicy = 'reprehenderit';
    $request->key = 'praesentium';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->requestId = 'quisquam';
    $request->sourceFirewallPolicy = 'sequi';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'deleniti';
    $request->userIp = 'illo';

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
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quisquam';
    $request->fields = 'provident';
    $request->firewallPolicy = 'laudantium';
    $request->key = 'repudiandae';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->requestId = 'aspernatur';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'quas';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'corporis';
    $request->firewallPolicy = 'vero';
    $request->key = 'similique';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'commodi';
    $request->userIp = 'impedit';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'quae';
    $request->firewallPolicy = 'amet';
    $request->key = 'illum';
    $request->name = 'Willis Rippin Sr.';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'iusto';
    $request->userIp = 'amet';

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
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->fields = 'repudiandae';
    $request->key = 'consequatur';
    $request->oauthToken = 'nemo';
    $request->optionsRequestedPolicyVersion = 475826;
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->resource = 'facilis';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'aperiam';
    $request->userIp = 'sint';

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
    $request->accessToken = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->fields = 'voluptatem';
    $request->firewallPolicy = 'velit';
    $request->key = 'dolor';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->priority = 953676;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'atque';
    $request->userIp = 'beatae';

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
    ];
    $request->firewallPolicy->creationTimestamp = 'minus';
    $request->firewallPolicy->description = 'esse';
    $request->firewallPolicy->displayName = 'voluptatem';
    $request->firewallPolicy->fingerprint = 'perferendis';
    $request->firewallPolicy->id = 'rerum';
    $request->firewallPolicy->kind = 'ea';
    $request->firewallPolicy->name = 'Courtney Zulauf';
    $request->firewallPolicy->parent = 'provident';
    $request->firewallPolicy->region = 'consectetur';
    $request->firewallPolicy->ruleTupleCount = 753240;
    $request->firewallPolicy->rules = [
        new FirewallPolicyRule(),
        new FirewallPolicyRule(),
    ];
    $request->firewallPolicy->selfLink = 'consectetur';
    $request->firewallPolicy->selfLinkWithId = 'soluta';
    $request->firewallPolicy->shortName = 'natus';
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'amet';
    $request->fields = 'tenetur';
    $request->key = 'aspernatur';
    $request->oauthToken = 'quo';
    $request->parentId = 'itaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->requestId = 'laborum';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'vero';
    $request->userIp = 'qui';

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
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'explicabo';
    $request->fields = 'exercitationem';
    $request->filter = 'nihil';
    $request->key = 'non';
    $request->maxResults = 68093;
    $request->oauthToken = 'illo';
    $request->orderBy = 'hic';
    $request->pageToken = 'deserunt';
    $request->parentId = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'in';
    $request->userIp = 'exercitationem';

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
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'in';
    $request->key = 'explicabo';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->targetResource = 'aperiam';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'deleniti';
    $request->userIp = 'enim';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'libero';
    $request->fields = 'magnam';
    $request->firewallPolicy = 'sit';
    $request->key = 'modi';
    $request->oauthToken = 'eum';
    $request->parentId = 'nesciunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->requestId = 'dignissimos';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'nostrum';
    $request->userIp = 'molestiae';

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeFirewallPoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeFirewallPoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firewallPolicy1 = new FirewallPolicy();
    $request->firewallPolicy1->associations = [
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
        new FirewallPolicyAssociation(),
    ];
    $request->firewallPolicy1->creationTimestamp = 'ab';
    $request->firewallPolicy1->description = 'modi';
    $request->firewallPolicy1->displayName = 'aut';
    $request->firewallPolicy1->fingerprint = 'aut';
    $request->firewallPolicy1->id = 'eveniet';
    $request->firewallPolicy1->kind = 'odio';
    $request->firewallPolicy1->name = 'Carrie Pagac';
    $request->firewallPolicy1->parent = 'consectetur';
    $request->firewallPolicy1->region = 'nesciunt';
    $request->firewallPolicy1->ruleTupleCount = 310629;
    $request->firewallPolicy1->rules = [
        new FirewallPolicyRule(),
        new FirewallPolicyRule(),
        new FirewallPolicyRule(),
        new FirewallPolicyRule(),
    ];
    $request->firewallPolicy1->selfLink = 'minus';
    $request->firewallPolicy1->selfLinkWithId = 'sunt';
    $request->firewallPolicy1->shortName = 'distinctio';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'et';
    $request->fields = 'facilis';
    $request->firewallPolicyPathParameter = 'amet';
    $request->key = 'autem';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->requestId = 'rem';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quos';
    $request->userIp = 'laudantium';

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
    $request->firewallPolicyRule->action = 'veritatis';
    $request->firewallPolicyRule->description = 'quae';
    $request->firewallPolicyRule->direction = FirewallPolicyRuleDirectionEnum::EGRESS;
    $request->firewallPolicyRule->disabled = false;
    $request->firewallPolicyRule->enableLogging = false;
    $request->firewallPolicyRule->kind = 'saepe';
    $request->firewallPolicyRule->match = new FirewallPolicyRuleMatcher();
    $request->firewallPolicyRule->match->destAddressGroups = [
        'mollitia',
        'nulla',
        'officia',
        'sed',
    ];
    $request->firewallPolicyRule->match->destFqdns = [
        'alias',
    ];
    $request->firewallPolicyRule->match->destIpRanges = [
        'hic',
        'voluptatem',
        'incidunt',
        'qui',
    ];
    $request->firewallPolicyRule->match->destRegionCodes = [
        'necessitatibus',
    ];
    $request->firewallPolicyRule->match->destThreatIntelligences = [
        'explicabo',
        'beatae',
        'aliquid',
    ];
    $request->firewallPolicyRule->match->layer4Configs = [
        new FirewallPolicyRuleMatcherLayer4Config(),
        new FirewallPolicyRuleMatcherLayer4Config(),
    ];
    $request->firewallPolicyRule->match->srcAddressGroups = [
        'voluptatibus',
        'molestias',
        'officia',
        'libero',
    ];
    $request->firewallPolicyRule->match->srcFqdns = [
        'sequi',
        'aliquid',
        'ea',
    ];
    $request->firewallPolicyRule->match->srcIpRanges = [
        'ducimus',
        'odit',
        'velit',
        'reiciendis',
    ];
    $request->firewallPolicyRule->match->srcRegionCodes = [
        'nulla',
        'laborum',
        'natus',
        'accusamus',
    ];
    $request->firewallPolicyRule->match->srcSecureTags = [
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->match->srcThreatIntelligences = [
        'rerum',
        'recusandae',
    ];
    $request->firewallPolicyRule->priority = 913285;
    $request->firewallPolicyRule->ruleName = 'non';
    $request->firewallPolicyRule->ruleTupleCount = 524577;
    $request->firewallPolicyRule->targetResources = [
        'ullam',
    ];
    $request->firewallPolicyRule->targetSecureTags = [
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
        new FirewallPolicyRuleSecureTag(),
    ];
    $request->firewallPolicyRule->targetServiceAccounts = [
        'voluptatibus',
    ];
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officiis';
    $request->fields = 'architecto';
    $request->firewallPolicy = 'architecto';
    $request->key = 'enim';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->priority = 525951;
    $request->quotaUser = 'perferendis';
    $request->requestId = 'facilis';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'a';
    $request->userIp = 'iste';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolore';
    $request->fields = 'modi';
    $request->firewallPolicy = 'itaque';
    $request->key = 'maxime';
    $request->name = 'Kathryn Shields';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->requestId = 'accusamus';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'reiciendis';
    $request->userIp = 'ab';

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
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'odio';
    $request->firewallPolicy = 'nesciunt';
    $request->key = 'debitis';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->priority = 208683;
    $request->quotaUser = 'corporis';
    $request->requestId = 'voluptas';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'officia';
    $request->userIp = 'reprehenderit';

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
    ];
    $request->globalOrganizationSetPolicyRequest->etag = 'ipsa';
    $request->globalOrganizationSetPolicyRequest->policy = new Policy();
    $request->globalOrganizationSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalOrganizationSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalOrganizationSetPolicyRequest->policy->etag = 'accusantium';
    $request->globalOrganizationSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->globalOrganizationSetPolicyRequest->policy->version = 906232;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquam';
    $request->fields = 'quos';
    $request->key = 'doloribus';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->resource = 'delectus';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'nesciunt';

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
        'repellat',
    ];
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'possimus';
    $request->fields = 'unde';
    $request->key = 'incidunt';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->resource = 'cupiditate';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'quidem';

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
