# organizationSecurityPolicies

### Available Operations

* [computeOrganizationSecurityPoliciesAddAssociation](#computeorganizationsecuritypoliciesaddassociation) - Inserts an association for the specified security policy.
* [computeOrganizationSecurityPoliciesAddRule](#computeorganizationsecuritypoliciesaddrule) - Inserts a rule into a security policy.
* [computeOrganizationSecurityPoliciesCopyRules](#computeorganizationsecuritypoliciescopyrules) - Copies rules to the specified security policy.
* [computeOrganizationSecurityPoliciesDelete](#computeorganizationsecuritypoliciesdelete) - Deletes the specified policy.
* [computeOrganizationSecurityPoliciesGet](#computeorganizationsecuritypoliciesget) - List all of the ordered rules present in a single specified policy.
* [computeOrganizationSecurityPoliciesGetAssociation](#computeorganizationsecuritypoliciesgetassociation) - Gets an association with the specified name.
* [computeOrganizationSecurityPoliciesGetRule](#computeorganizationsecuritypoliciesgetrule) - Gets a rule at the specified priority.
* [computeOrganizationSecurityPoliciesInsert](#computeorganizationsecuritypoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeOrganizationSecurityPoliciesList](#computeorganizationsecuritypolicieslist) - List all the policies that have been configured for the specified project.
* [computeOrganizationSecurityPoliciesListAssociations](#computeorganizationsecuritypolicieslistassociations) - Lists associations of a specified target, i.e., organization or folder.
* [computeOrganizationSecurityPoliciesMove](#computeorganizationsecuritypoliciesmove) - Moves the specified security policy.
* [computeOrganizationSecurityPoliciesPatch](#computeorganizationsecuritypoliciespatch) - Patches the specified policy with the data included in the request.
* [computeOrganizationSecurityPoliciesPatchRule](#computeorganizationsecuritypoliciespatchrule) - Patches a rule at the specified priority.
* [computeOrganizationSecurityPoliciesRemoveAssociation](#computeorganizationsecuritypoliciesremoveassociation) - Removes an association for the specified security policy.
* [computeOrganizationSecurityPoliciesRemoveRule](#computeorganizationsecuritypoliciesremoverule) - Deletes a rule at the specified priority.

## computeOrganizationSecurityPoliciesAddAssociation

Inserts an association for the specified security policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesAddAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAssociation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesAddAssociationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesAddAssociationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesAddAssociationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesAddAssociationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicyAssociation = new SecurityPolicyAssociation();
    $request->securityPolicyAssociation->attachmentId = 'quas';
    $request->securityPolicyAssociation->displayName = 'asperiores';
    $request->securityPolicyAssociation->name = 'Constance Klein';
    $request->securityPolicyAssociation->securityPolicyId = 'exercitationem';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cupiditate';
    $request->fields = 'in';
    $request->key = 'voluptas';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->replaceExistingAssociation = false;
    $request->requestId = 'error';
    $request->securityPolicy = 'blanditiis';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'culpa';

    $requestSecurity = new ComputeOrganizationSecurityPoliciesAddAssociationSecurity();
    $requestSecurity->option1 = new ComputeOrganizationSecurityPoliciesAddAssociationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizationSecurityPolicies->computeOrganizationSecurityPoliciesAddAssociation($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeOrganizationSecurityPoliciesAddRule

Inserts a rule into a security policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesAddRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfigDestinationPort;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfigLayer4Config;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherVersionedExprEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleNetworkMatcher;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusion;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsThreshold;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsRpcStatus;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRedirectOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRedirectOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRuleManagedProtectionTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesAddRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesAddRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesAddRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesAddRuleRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->securityPolicyRule = new SecurityPolicyRule();
    $request->securityPolicyRule->action = 'est';
    $request->securityPolicyRule->description = 'aut';
    $request->securityPolicyRule->direction = SecurityPolicyRuleDirectionEnum::INGRESS;
    $request->securityPolicyRule->enableLogging = false;
    $request->securityPolicyRule->headerAction = new SecurityPolicyRuleHttpHeaderAction();
    $request->securityPolicyRule->headerAction->requestHeadersToAdds = [
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
    ];
    $request->securityPolicyRule->kind = 'hic';
    $request->securityPolicyRule->match = new SecurityPolicyRuleMatcher();
    $request->securityPolicyRule->match->config = new SecurityPolicyRuleMatcherConfig();
    $request->securityPolicyRule->match->config->destIpRanges = [
        'numquam',
        'ut',
        'fugiat',
        'facilis',
    ];
    $request->securityPolicyRule->match->config->destPorts = [
        new SecurityPolicyRuleMatcherConfigDestinationPort(),
    ];
    $request->securityPolicyRule->match->config->layer4Configs = [
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
    ];
    $request->securityPolicyRule->match->config->srcIpRanges = [
        'ullam',
        'neque',
    ];
    $request->securityPolicyRule->match->expr = new Expr();
    $request->securityPolicyRule->match->expr->description = 'ipsa';
    $request->securityPolicyRule->match->expr->expression = 'officiis';
    $request->securityPolicyRule->match->expr->location = 'ullam';
    $request->securityPolicyRule->match->expr->title = 'Miss';
    $request->securityPolicyRule->match->versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum::SRC_IPS_V1;
    $request->securityPolicyRule->networkMatch = new SecurityPolicyRuleNetworkMatcher();
    $request->securityPolicyRule->networkMatch->destIpRanges = [
        'minus',
        'voluptas',
    ];
    $request->securityPolicyRule->networkMatch->destPorts = [
        'aut',
        'quod',
        'rerum',
        'cumque',
    ];
    $request->securityPolicyRule->networkMatch->ipProtocols = [
        'repellendus',
        'quo',
        'possimus',
        'consectetur',
    ];
    $request->securityPolicyRule->networkMatch->srcAsns = [
        264502,
    ];
    $request->securityPolicyRule->networkMatch->srcIpRanges = [
        'autem',
        'repellat',
        'ea',
    ];
    $request->securityPolicyRule->networkMatch->srcPorts = [
        'consectetur',
    ];
    $request->securityPolicyRule->networkMatch->srcRegionCodes = [
        'minus',
        'repudiandae',
        'quisquam',
    ];
    $request->securityPolicyRule->networkMatch->userDefinedFields = [
        new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch(),
        new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch(),
        new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch(),
    ];
    $request->securityPolicyRule->preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig();
    $request->securityPolicyRule->preconfiguredWafConfig->exclusions = [
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
    ];
    $request->securityPolicyRule->preview = false;
    $request->securityPolicyRule->priority = 342007;
    $request->securityPolicyRule->rateLimitOptions = new SecurityPolicyRuleRateLimitOptions();
    $request->securityPolicyRule->rateLimitOptions->banDurationSec = 4960;
    $request->securityPolicyRule->rateLimitOptions->banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->banThreshold->count = 672115;
    $request->securityPolicyRule->rateLimitOptions->banThreshold->intervalSec = 917379;
    $request->securityPolicyRule->rateLimitOptions->conformAction = 'recusandae';
    $request->securityPolicyRule->rateLimitOptions->enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum::HTTP_HEADER;
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyConfigs = [
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
    ];
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyName = 'voluptatem';
    $request->securityPolicyRule->rateLimitOptions->exceedAction = 'pariatur';
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus();
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus->code = 637419;
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus->message = 'quas';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->target = 'cum';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::GOOGLE_RECAPTCHA;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->count = 670961;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->intervalSec = 959477;
    $request->securityPolicyRule->redirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->redirectOptions->target = 'nisi';
    $request->securityPolicyRule->redirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::GOOGLE_RECAPTCHA;
    $request->securityPolicyRule->redirectTarget = 'nulla';
    $request->securityPolicyRule->ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum::NONE;
    $request->securityPolicyRule->ruleNumber = 'ullam';
    $request->securityPolicyRule->ruleTupleCount = 277022;
    $request->securityPolicyRule->targetResources = [
        'nisi',
        'repudiandae',
        'odio',
    ];
    $request->securityPolicyRule->targetServiceAccounts = [
        'aliquam',
        'quasi',
        'ipsum',
    ];
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'magni';
    $request->key = 'assumenda';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->requestId = 'ea';
    $request->securityPolicy = 'assumenda';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'illo';
    $request->userIp = 'optio';

    $requestSecurity = new ComputeOrganizationSecurityPoliciesAddRuleSecurity();
    $requestSecurity->option1 = new ComputeOrganizationSecurityPoliciesAddRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizationSecurityPolicies->computeOrganizationSecurityPoliciesAddRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeOrganizationSecurityPoliciesCopyRules

Copies rules to the specified security policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesCopyRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesCopyRulesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesCopyRulesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesCopyRulesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesCopyRulesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'doloremque';
    $request->key = 'doloribus';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'illo';
    $request->requestId = 'nulla';
    $request->securityPolicy = 'inventore';
    $request->sourceSecurityPolicy = 'in';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'veritatis';
    $request->userIp = 'ad';

    $requestSecurity = new ComputeOrganizationSecurityPoliciesCopyRulesSecurity();
    $requestSecurity->option1 = new ComputeOrganizationSecurityPoliciesCopyRulesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizationSecurityPolicies->computeOrganizationSecurityPoliciesCopyRules($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeOrganizationSecurityPoliciesDelete

Deletes the specified policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'debitis';
    $request->fields = 'enim';
    $request->key = 'itaque';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->requestId = 'hic';
    $request->securityPolicy = 'esse';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'quasi';
    $request->userIp = 'et';

    $requestSecurity = new ComputeOrganizationSecurityPoliciesDeleteSecurity();
    $requestSecurity->option1 = new ComputeOrganizationSecurityPoliciesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizationSecurityPolicies->computeOrganizationSecurityPoliciesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeOrganizationSecurityPoliciesGet

List all of the ordered rules present in a single specified policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'esse';
    $request->key = 'quia';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->securityPolicy = 'odit';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'dolorem';
    $request->userIp = 'distinctio';

    $requestSecurity = new ComputeOrganizationSecurityPoliciesGetSecurity();
    $requestSecurity->option1 = new ComputeOrganizationSecurityPoliciesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizationSecurityPolicies->computeOrganizationSecurityPoliciesGet($request, $requestSecurity);

    if ($response->securityPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeOrganizationSecurityPoliciesGetAssociation

Gets an association with the specified name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesGetAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesGetAssociationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesGetAssociationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesGetAssociationSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesGetAssociationSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesGetAssociationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facilis';
    $request->fields = 'officiis';
    $request->key = 'alias';
    $request->name = 'Billy Franey';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->securityPolicy = 'fugiat';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'cupiditate';
    $request->userIp = 'dolore';

    $requestSecurity = new ComputeOrganizationSecurityPoliciesGetAssociationSecurity();
    $requestSecurity->option1 = new ComputeOrganizationSecurityPoliciesGetAssociationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizationSecurityPolicies->computeOrganizationSecurityPoliciesGetAssociation($request, $requestSecurity);

    if ($response->securityPolicyAssociation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeOrganizationSecurityPoliciesGetRule

Gets a rule at the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesGetRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesGetRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesGetRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesGetRuleSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesGetRuleSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesGetRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'facere';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->priority = 263183;
    $request->quotaUser = 'voluptate';
    $request->securityPolicy = 'odio';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'deleniti';
    $request->userIp = 'eaque';

    $requestSecurity = new ComputeOrganizationSecurityPoliciesGetRuleSecurity();
    $requestSecurity->option1 = new ComputeOrganizationSecurityPoliciesGetRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizationSecurityPolicies->computeOrganizationSecurityPoliciesGetRule($request, $requestSecurity);

    if ($response->securityPolicyRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeOrganizationSecurityPoliciesInsert

Creates a new policy in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicy;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdaptiveProtectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdvancedOptionsConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdvancedOptionsConfigJsonParsingEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdvancedOptionsConfigLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAssociation;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyCloudArmorConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyDdosProtectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRecaptchaOptionsConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfigDestinationPort;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfigLayer4Config;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherVersionedExprEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleNetworkMatcher;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusion;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsThreshold;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsRpcStatus;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRedirectOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRedirectOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRuleManagedProtectionTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyUserDefinedField;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyUserDefinedFieldBaseEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicy = new SecurityPolicy();
    $request->securityPolicy->adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig();
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig();
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->confidenceThreshold = 7920.77;
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->expirationSec = 437920;
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->impactedBaselineThreshold = 6730.57;
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->loadThreshold = 698.25;
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig();
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig->enable = false;
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig->ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum::PREMIUM;
    $request->securityPolicy->advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig();
    $request->securityPolicy->advancedOptionsConfig->jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig();
    $request->securityPolicy->advancedOptionsConfig->jsonCustomConfig->contentTypes = [
        'blanditiis',
        'dolores',
        'necessitatibus',
    ];
    $request->securityPolicy->advancedOptionsConfig->jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum::DISABLED;
    $request->securityPolicy->advancedOptionsConfig->logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum::VERBOSE;
    $request->securityPolicy->advancedOptionsConfig->userIpRequestHeaders = [
        'eos',
        'delectus',
        'illum',
    ];
    $request->securityPolicy->associations = [
        new SecurityPolicyAssociation(),
    ];
    $request->securityPolicy->cloudArmorConfig = new SecurityPolicyCloudArmorConfig();
    $request->securityPolicy->cloudArmorConfig->enableMl = false;
    $request->securityPolicy->creationTimestamp = 'praesentium';
    $request->securityPolicy->ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig();
    $request->securityPolicy->ddosProtectionConfig->ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum::STANDARD;
    $request->securityPolicy->description = 'beatae';
    $request->securityPolicy->displayName = 'perferendis';
    $request->securityPolicy->fingerprint = 'quaerat';
    $request->securityPolicy->id = 'aperiam';
    $request->securityPolicy->kind = 'harum';
    $request->securityPolicy->labelFingerprint = 'iusto';
    $request->securityPolicy->labels = [
        'sint' => 'beatae',
        'ratione' => 'omnis',
        'qui' => 'dolorum',
        'distinctio' => 'incidunt',
    ];
    $request->securityPolicy->name = 'Ms. Sheri Quitzon';
    $request->securityPolicy->parent = 'nemo';
    $request->securityPolicy->recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig();
    $request->securityPolicy->recaptchaOptionsConfig->redirectSiteKey = 'alias';
    $request->securityPolicy->region = 'aperiam';
    $request->securityPolicy->ruleTupleCount = 502738;
    $request->securityPolicy->rules = [
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
    ];
    $request->securityPolicy->selfLink = 'eius';
    $request->securityPolicy->selfLinkWithId = 'suscipit';
    $request->securityPolicy->type = SecurityPolicyTypeEnum::CLOUD_ARMOR;
    $request->securityPolicy->userDefinedFields = [
        new SecurityPolicyUserDefinedField(),
        new SecurityPolicyUserDefinedField(),
        new SecurityPolicyUserDefinedField(),
        new SecurityPolicyUserDefinedField(),
    ];
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nesciunt';
    $request->fields = 'necessitatibus';
    $request->key = 'excepturi';
    $request->oauthToken = 'illo';
    $request->parentId = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'ut';
    $request->requestId = 'perspiciatis';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'animi';
    $request->userIp = 'iste';

    $requestSecurity = new ComputeOrganizationSecurityPoliciesInsertSecurity();
    $requestSecurity->option1 = new ComputeOrganizationSecurityPoliciesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizationSecurityPolicies->computeOrganizationSecurityPoliciesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeOrganizationSecurityPoliciesList

List all the policies that have been configured for the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nisi';
    $request->fields = 'aperiam';
    $request->filter = 'similique';
    $request->key = 'nulla';
    $request->maxResults = 866224;
    $request->oauthToken = 'reiciendis';
    $request->orderBy = 'temporibus';
    $request->pageToken = 'officiis';
    $request->parentId = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'porro';
    $request->userIp = 'adipisci';

    $requestSecurity = new ComputeOrganizationSecurityPoliciesListSecurity();
    $requestSecurity->option1 = new ComputeOrganizationSecurityPoliciesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizationSecurityPolicies->computeOrganizationSecurityPoliciesList($request, $requestSecurity);

    if ($response->securityPolicyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeOrganizationSecurityPoliciesListAssociations

Lists associations of a specified target, i.e., organization or folder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesListAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesListAssociationsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesListAssociationsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesListAssociationsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesListAssociationsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesListAssociationsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'animi';
    $request->fields = 'iste';
    $request->key = 'sunt';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->targetResource = 'laborum';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'natus';
    $request->userIp = 'fugiat';

    $requestSecurity = new ComputeOrganizationSecurityPoliciesListAssociationsSecurity();
    $requestSecurity->option1 = new ComputeOrganizationSecurityPoliciesListAssociationsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizationSecurityPolicies->computeOrganizationSecurityPoliciesListAssociations($request, $requestSecurity);

    if ($response->organizationSecurityPoliciesListAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeOrganizationSecurityPoliciesMove

Moves the specified security policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesMoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesMoveSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesMoveSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesMoveSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesMoveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'pariatur';
    $request->key = 'amet';
    $request->oauthToken = 'eligendi';
    $request->parentId = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->requestId = 'reiciendis';
    $request->securityPolicy = 'minus';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'cupiditate';
    $request->userIp = 'blanditiis';

    $requestSecurity = new ComputeOrganizationSecurityPoliciesMoveSecurity();
    $requestSecurity->option1 = new ComputeOrganizationSecurityPoliciesMoveSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizationSecurityPolicies->computeOrganizationSecurityPoliciesMove($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeOrganizationSecurityPoliciesPatch

Patches the specified policy with the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicy;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdaptiveProtectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdvancedOptionsConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdvancedOptionsConfigJsonParsingEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdvancedOptionsConfigLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAssociation;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyCloudArmorConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyDdosProtectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRecaptchaOptionsConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfigDestinationPort;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfigLayer4Config;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherVersionedExprEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleNetworkMatcher;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusion;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsThreshold;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsRpcStatus;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRedirectOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRedirectOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRuleManagedProtectionTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyUserDefinedField;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyUserDefinedFieldBaseEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicy1 = new SecurityPolicy();
    $request->securityPolicy1->adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig();
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig();
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->confidenceThreshold = 9025.46;
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->expirationSec = 654263;
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->impactedBaselineThreshold = 2675.78;
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->loadThreshold = 3101.3;
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig();
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig->enable = false;
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig->ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum::PREMIUM;
    $request->securityPolicy1->advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig();
    $request->securityPolicy1->advancedOptionsConfig->jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig();
    $request->securityPolicy1->advancedOptionsConfig->jsonCustomConfig->contentTypes = [
        'dignissimos',
    ];
    $request->securityPolicy1->advancedOptionsConfig->jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum::STANDARD;
    $request->securityPolicy1->advancedOptionsConfig->logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum::NORMAL;
    $request->securityPolicy1->advancedOptionsConfig->userIpRequestHeaders = [
        'maxime',
        'possimus',
        'non',
    ];
    $request->securityPolicy1->associations = [
        new SecurityPolicyAssociation(),
        new SecurityPolicyAssociation(),
    ];
    $request->securityPolicy1->cloudArmorConfig = new SecurityPolicyCloudArmorConfig();
    $request->securityPolicy1->cloudArmorConfig->enableMl = false;
    $request->securityPolicy1->creationTimestamp = 'ipsa';
    $request->securityPolicy1->ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig();
    $request->securityPolicy1->ddosProtectionConfig->ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum::STANDARD;
    $request->securityPolicy1->description = 'id';
    $request->securityPolicy1->displayName = 'occaecati';
    $request->securityPolicy1->fingerprint = 'corrupti';
    $request->securityPolicy1->id = 'nam';
    $request->securityPolicy1->kind = 'itaque';
    $request->securityPolicy1->labelFingerprint = 'placeat';
    $request->securityPolicy1->labels = [
        'itaque' => 'accusantium',
        'labore' => 'voluptatum',
        'nisi' => 'pariatur',
        'necessitatibus' => 'perferendis',
    ];
    $request->securityPolicy1->name = 'Clyde Jacobi';
    $request->securityPolicy1->parent = 'non';
    $request->securityPolicy1->recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig();
    $request->securityPolicy1->recaptchaOptionsConfig->redirectSiteKey = 'distinctio';
    $request->securityPolicy1->region = 'aut';
    $request->securityPolicy1->ruleTupleCount = 61249;
    $request->securityPolicy1->rules = [
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
    ];
    $request->securityPolicy1->selfLink = 'nemo';
    $request->securityPolicy1->selfLinkWithId = 'accusantium';
    $request->securityPolicy1->type = SecurityPolicyTypeEnum::CLOUD_ARMOR_EDGE;
    $request->securityPolicy1->userDefinedFields = [
        new SecurityPolicyUserDefinedField(),
        new SecurityPolicyUserDefinedField(),
        new SecurityPolicyUserDefinedField(),
        new SecurityPolicyUserDefinedField(),
    ];
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'impedit';
    $request->fields = 'autem';
    $request->key = 'explicabo';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->requestId = 'maiores';
    $request->securityPolicyPathParameter = 'nihil';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'iure';

    $requestSecurity = new ComputeOrganizationSecurityPoliciesPatchSecurity();
    $requestSecurity->option1 = new ComputeOrganizationSecurityPoliciesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizationSecurityPolicies->computeOrganizationSecurityPoliciesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeOrganizationSecurityPoliciesPatchRule

Patches a rule at the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesPatchRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfigDestinationPort;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfigLayer4Config;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherVersionedExprEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleNetworkMatcher;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusion;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsThreshold;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsRpcStatus;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRedirectOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRedirectOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRuleManagedProtectionTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesPatchRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesPatchRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesPatchRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesPatchRuleRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->securityPolicyRule = new SecurityPolicyRule();
    $request->securityPolicyRule->action = 'aliquid';
    $request->securityPolicyRule->description = 'odio';
    $request->securityPolicyRule->direction = SecurityPolicyRuleDirectionEnum::EGRESS;
    $request->securityPolicyRule->enableLogging = false;
    $request->securityPolicyRule->headerAction = new SecurityPolicyRuleHttpHeaderAction();
    $request->securityPolicyRule->headerAction->requestHeadersToAdds = [
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
    ];
    $request->securityPolicyRule->kind = 'nostrum';
    $request->securityPolicyRule->match = new SecurityPolicyRuleMatcher();
    $request->securityPolicyRule->match->config = new SecurityPolicyRuleMatcherConfig();
    $request->securityPolicyRule->match->config->destIpRanges = [
        'reprehenderit',
        'sit',
        'recusandae',
    ];
    $request->securityPolicyRule->match->config->destPorts = [
        new SecurityPolicyRuleMatcherConfigDestinationPort(),
    ];
    $request->securityPolicyRule->match->config->layer4Configs = [
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
    ];
    $request->securityPolicyRule->match->config->srcIpRanges = [
        'optio',
        'sapiente',
    ];
    $request->securityPolicyRule->match->expr = new Expr();
    $request->securityPolicyRule->match->expr->description = 'porro';
    $request->securityPolicyRule->match->expr->expression = 'impedit';
    $request->securityPolicyRule->match->expr->location = 'vel';
    $request->securityPolicyRule->match->expr->title = 'Miss';
    $request->securityPolicyRule->match->versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum::SRC_IPS_V1;
    $request->securityPolicyRule->networkMatch = new SecurityPolicyRuleNetworkMatcher();
    $request->securityPolicyRule->networkMatch->destIpRanges = [
        'necessitatibus',
    ];
    $request->securityPolicyRule->networkMatch->destPorts = [
        'veniam',
        'qui',
        'aliquid',
        'sed',
    ];
    $request->securityPolicyRule->networkMatch->ipProtocols = [
        'at',
        'aperiam',
    ];
    $request->securityPolicyRule->networkMatch->srcAsns = [
        16233,
    ];
    $request->securityPolicyRule->networkMatch->srcIpRanges = [
        'tempora',
    ];
    $request->securityPolicyRule->networkMatch->srcPorts = [
        'hic',
        'non',
        'minima',
        'impedit',
    ];
    $request->securityPolicyRule->networkMatch->srcRegionCodes = [
        'animi',
        'dicta',
        'vitae',
        'laborum',
    ];
    $request->securityPolicyRule->networkMatch->userDefinedFields = [
        new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch(),
        new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch(),
        new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch(),
        new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch(),
    ];
    $request->securityPolicyRule->preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig();
    $request->securityPolicyRule->preconfiguredWafConfig->exclusions = [
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
    ];
    $request->securityPolicyRule->preview = false;
    $request->securityPolicyRule->priority = 207391;
    $request->securityPolicyRule->rateLimitOptions = new SecurityPolicyRuleRateLimitOptions();
    $request->securityPolicyRule->rateLimitOptions->banDurationSec = 892485;
    $request->securityPolicyRule->rateLimitOptions->banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->banThreshold->count = 695427;
    $request->securityPolicyRule->rateLimitOptions->banThreshold->intervalSec = 697735;
    $request->securityPolicyRule->rateLimitOptions->conformAction = 'suscipit';
    $request->securityPolicyRule->rateLimitOptions->enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum::HTTP_HEADER;
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyConfigs = [
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
    ];
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyName = 'odio';
    $request->securityPolicyRule->rateLimitOptions->exceedAction = 'tenetur';
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus();
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus->code = 234641;
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus->message = 'eius';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->target = 'voluptatem';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::EXTERNAL302;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->count = 64733;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->intervalSec = 292525;
    $request->securityPolicyRule->redirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->redirectOptions->target = 'placeat';
    $request->securityPolicyRule->redirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::EXTERNAL302;
    $request->securityPolicyRule->redirectTarget = 'cum';
    $request->securityPolicyRule->ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum::PLUS;
    $request->securityPolicyRule->ruleNumber = 'est';
    $request->securityPolicyRule->ruleTupleCount = 800251;
    $request->securityPolicyRule->targetResources = [
        'debitis',
        'non',
        'quae',
        'perferendis',
    ];
    $request->securityPolicyRule->targetServiceAccounts = [
        'voluptates',
        'provident',
        'doloribus',
    ];
    $request->accessToken = 'unde';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minus';
    $request->fields = 'id';
    $request->key = 'earum';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->priority = 748256;
    $request->quotaUser = 'ipsa';
    $request->requestId = 'dolores';
    $request->securityPolicy = 'nemo';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'architecto';
    $request->userIp = 'pariatur';

    $requestSecurity = new ComputeOrganizationSecurityPoliciesPatchRuleSecurity();
    $requestSecurity->option1 = new ComputeOrganizationSecurityPoliciesPatchRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizationSecurityPolicies->computeOrganizationSecurityPoliciesPatchRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeOrganizationSecurityPoliciesRemoveAssociation

Removes an association for the specified security policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesRemoveAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesRemoveAssociationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesRemoveAssociationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesRemoveAssociationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesRemoveAssociationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sunt';
    $request->fields = 'voluptatum';
    $request->key = 'maxime';
    $request->name = 'Dr. Tami O'Reilly';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequatur';
    $request->requestId = 'cumque';
    $request->securityPolicy = 'accusantium';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'porro';
    $request->userIp = 'veniam';

    $requestSecurity = new ComputeOrganizationSecurityPoliciesRemoveAssociationSecurity();
    $requestSecurity->option1 = new ComputeOrganizationSecurityPoliciesRemoveAssociationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizationSecurityPolicies->computeOrganizationSecurityPoliciesRemoveAssociation($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeOrganizationSecurityPoliciesRemoveRule

Deletes a rule at the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesRemoveRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesRemoveRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesRemoveRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesRemoveRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesRemoveRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quaerat';
    $request->fields = 'in';
    $request->key = 'magni';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->priority = 868231;
    $request->quotaUser = 'nulla';
    $request->requestId = 'dicta';
    $request->securityPolicy = 'incidunt';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'porro';
    $request->userIp = 'eius';

    $requestSecurity = new ComputeOrganizationSecurityPoliciesRemoveRuleSecurity();
    $requestSecurity->option1 = new ComputeOrganizationSecurityPoliciesRemoveRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizationSecurityPolicies->computeOrganizationSecurityPoliciesRemoveRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
