# securityPolicies

### Available Operations

* [computeSecurityPoliciesAddRule](#computesecuritypoliciesaddrule) - Inserts a rule into a security policy.
* [computeSecurityPoliciesAggregatedList](#computesecuritypoliciesaggregatedlist) - Retrieves the list of all SecurityPolicy resources, regional and global, available to the specified project.
* [computeSecurityPoliciesDelete](#computesecuritypoliciesdelete) - Deletes the specified policy.
* [computeSecurityPoliciesGet](#computesecuritypoliciesget) - List all of the ordered rules present in a single specified policy.
* [computeSecurityPoliciesGetRule](#computesecuritypoliciesgetrule) - Gets a rule at the specified priority.
* [computeSecurityPoliciesInsert](#computesecuritypoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeSecurityPoliciesList](#computesecuritypolicieslist) - List all the policies that have been configured for the specified project.
* [computeSecurityPoliciesListPreconfiguredExpressionSets](#computesecuritypolicieslistpreconfiguredexpressionsets) - Gets the current list of preconfigured Web Application Firewall (WAF) expressions.
* [computeSecurityPoliciesPatch](#computesecuritypoliciespatch) - Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.
* [computeSecurityPoliciesPatchRule](#computesecuritypoliciespatchrule) - Patches a rule at the specified priority.
* [computeSecurityPoliciesRemoveRule](#computesecuritypoliciesremoverule) - Deletes a rule at the specified priority.
* [computeSecurityPoliciesSetLabels](#computesecuritypoliciessetlabels) - Sets the labels on a security policy. To learn more about labels, read the Labeling Resources documentation.
* [computeSecurityPoliciesTestIamPermissions](#computesecuritypoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeSecurityPoliciesAddRule

Inserts a rule into a security policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesAddRuleRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesAddRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesAddRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesAddRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesAddRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicyRule = new SecurityPolicyRule();
    $request->securityPolicyRule->action = 'magni';
    $request->securityPolicyRule->description = 'id';
    $request->securityPolicyRule->direction = SecurityPolicyRuleDirectionEnum::INGRESS;
    $request->securityPolicyRule->enableLogging = false;
    $request->securityPolicyRule->headerAction = new SecurityPolicyRuleHttpHeaderAction();
    $request->securityPolicyRule->headerAction->requestHeadersToAdds = [
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
    ];
    $request->securityPolicyRule->kind = 'necessitatibus';
    $request->securityPolicyRule->match = new SecurityPolicyRuleMatcher();
    $request->securityPolicyRule->match->config = new SecurityPolicyRuleMatcherConfig();
    $request->securityPolicyRule->match->config->destIpRanges = [
        'tempore',
        'provident',
        'rem',
    ];
    $request->securityPolicyRule->match->config->destPorts = [
        new SecurityPolicyRuleMatcherConfigDestinationPort(),
    ];
    $request->securityPolicyRule->match->config->layer4Configs = [
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
    ];
    $request->securityPolicyRule->match->config->srcIpRanges = [
        'qui',
        'vel',
        'aliquam',
        'iure',
    ];
    $request->securityPolicyRule->match->expr = new Expr();
    $request->securityPolicyRule->match->expr->description = 'ab';
    $request->securityPolicyRule->match->expr->expression = 'dolorum';
    $request->securityPolicyRule->match->expr->location = 'veniam';
    $request->securityPolicyRule->match->expr->title = 'Dr.';
    $request->securityPolicyRule->match->versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum::SRC_IPS_V1;
    $request->securityPolicyRule->networkMatch = new SecurityPolicyRuleNetworkMatcher();
    $request->securityPolicyRule->networkMatch->destIpRanges = [
        'corrupti',
        'reprehenderit',
        'a',
    ];
    $request->securityPolicyRule->networkMatch->destPorts = [
        'cupiditate',
        'incidunt',
    ];
    $request->securityPolicyRule->networkMatch->ipProtocols = [
        'ipsa',
        'modi',
        'hic',
        'incidunt',
    ];
    $request->securityPolicyRule->networkMatch->srcAsns = [
        299728,
    ];
    $request->securityPolicyRule->networkMatch->srcIpRanges = [
        'vel',
        'tenetur',
    ];
    $request->securityPolicyRule->networkMatch->srcPorts = [
        'occaecati',
        'ratione',
    ];
    $request->securityPolicyRule->networkMatch->srcRegionCodes = [
        'dolorem',
        'quidem',
        'dicta',
        'aperiam',
    ];
    $request->securityPolicyRule->networkMatch->userDefinedFields = [
        new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch(),
    ];
    $request->securityPolicyRule->preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig();
    $request->securityPolicyRule->preconfiguredWafConfig->exclusions = [
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
    ];
    $request->securityPolicyRule->preview = false;
    $request->securityPolicyRule->priority = 18210;
    $request->securityPolicyRule->rateLimitOptions = new SecurityPolicyRuleRateLimitOptions();
    $request->securityPolicyRule->rateLimitOptions->banDurationSec = 117538;
    $request->securityPolicyRule->rateLimitOptions->banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->banThreshold->count = 283181;
    $request->securityPolicyRule->rateLimitOptions->banThreshold->intervalSec = 481283;
    $request->securityPolicyRule->rateLimitOptions->conformAction = 'optio';
    $request->securityPolicyRule->rateLimitOptions->enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum::SNI;
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyConfigs = [
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
    ];
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyName = 'distinctio';
    $request->securityPolicyRule->rateLimitOptions->exceedAction = 'quos';
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus();
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus->code = 207139;
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus->message = 'quasi';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->target = 'commodi';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::EXTERNAL302;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->count = 698299;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->intervalSec = 231676;
    $request->securityPolicyRule->redirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->redirectOptions->target = 'debitis';
    $request->securityPolicyRule->redirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::EXTERNAL302;
    $request->securityPolicyRule->redirectTarget = 'voluptates';
    $request->securityPolicyRule->ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum::PLUS;
    $request->securityPolicyRule->ruleNumber = 'blanditiis';
    $request->securityPolicyRule->ruleTupleCount = 580319;
    $request->securityPolicyRule->targetResources = [
        'perferendis',
        'mollitia',
    ];
    $request->securityPolicyRule->targetServiceAccounts = [
        'id',
    ];
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quo';
    $request->fields = 'ducimus';
    $request->key = 'est';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'ea';
    $request->quotaUser = 'esse';
    $request->securityPolicy = 'rem';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'officia';
    $request->userIp = 'quis';
    $request->validateOnly = false;

    $requestSecurity = new ComputeSecurityPoliciesAddRuleSecurity();
    $requestSecurity->option1 = new ComputeSecurityPoliciesAddRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->securityPolicies->computeSecurityPoliciesAddRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSecurityPoliciesAggregatedList

Retrieves the list of all SecurityPolicy resources, regional and global, available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quas';
    $request->fields = 'hic';
    $request->filter = 'ut';
    $request->includeAllScopes = false;
    $request->key = 'minus';
    $request->maxResults = 748004;
    $request->oauthToken = 'nihil';
    $request->orderBy = 'dolores';
    $request->pageToken = 'eveniet';
    $request->prettyPrint = false;
    $request->project = 'quibusdam';
    $request->quotaUser = 'ex';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'a';
    $request->userIp = 'voluptas';

    $requestSecurity = new ComputeSecurityPoliciesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeSecurityPoliciesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->securityPolicies->computeSecurityPoliciesAggregatedList($request, $requestSecurity);

    if ($response->securityPoliciesAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSecurityPoliciesDelete

Deletes the specified policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugiat';
    $request->fields = 'corporis';
    $request->key = 'nostrum';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->quotaUser = 'enim';
    $request->requestId = 'praesentium';
    $request->securityPolicy = 'corrupti';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'non';
    $request->userIp = 'consequuntur';

    $requestSecurity = new ComputeSecurityPoliciesDeleteSecurity();
    $requestSecurity->option1 = new ComputeSecurityPoliciesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->securityPolicies->computeSecurityPoliciesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSecurityPoliciesGet

List all of the ordered rules present in a single specified policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ducimus';
    $request->fields = 'facilis';
    $request->key = 'minima';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'ducimus';
    $request->securityPolicy = 'beatae';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'aliquam';
    $request->userIp = 'voluptas';

    $requestSecurity = new ComputeSecurityPoliciesGetSecurity();
    $requestSecurity->option1 = new ComputeSecurityPoliciesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->securityPolicies->computeSecurityPoliciesGet($request, $requestSecurity);

    if ($response->securityPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSecurityPoliciesGetRule

Gets a rule at the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesGetRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesGetRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesGetRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesGetRuleSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesGetRuleSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesGetRuleRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'occaecati';
    $request->fields = 'accusamus';
    $request->key = 'ipsum';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->priority = 811465;
    $request->project = 'molestias';
    $request->quotaUser = 'aliquam';
    $request->securityPolicy = 'quod';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'at';
    $request->userIp = 'dolor';

    $requestSecurity = new ComputeSecurityPoliciesGetRuleSecurity();
    $requestSecurity->option1 = new ComputeSecurityPoliciesGetRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->securityPolicies->computeSecurityPoliciesGetRule($request, $requestSecurity);

    if ($response->securityPolicyRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSecurityPoliciesInsert

Creates a new policy in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesInsertRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicy = new SecurityPolicy();
    $request->securityPolicy->adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig();
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig();
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->confidenceThreshold = 6749.11;
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->expirationSec = 258996;
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->impactedBaselineThreshold = 5734.04;
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->loadThreshold = 729.68;
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig();
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig->enable = false;
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig->ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum::STANDARD;
    $request->securityPolicy->advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig();
    $request->securityPolicy->advancedOptionsConfig->jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig();
    $request->securityPolicy->advancedOptionsConfig->jsonCustomConfig->contentTypes = [
        'molestiae',
    ];
    $request->securityPolicy->advancedOptionsConfig->jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum::STANDARD;
    $request->securityPolicy->advancedOptionsConfig->logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum::NORMAL;
    $request->securityPolicy->advancedOptionsConfig->userIpRequestHeaders = [
        'corrupti',
        'praesentium',
        'repellendus',
    ];
    $request->securityPolicy->associations = [
        new SecurityPolicyAssociation(),
    ];
    $request->securityPolicy->cloudArmorConfig = new SecurityPolicyCloudArmorConfig();
    $request->securityPolicy->cloudArmorConfig->enableMl = false;
    $request->securityPolicy->creationTimestamp = 'ullam';
    $request->securityPolicy->ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig();
    $request->securityPolicy->ddosProtectionConfig->ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum::ADVANCED_PREVIEW;
    $request->securityPolicy->description = 'earum';
    $request->securityPolicy->displayName = 'sit';
    $request->securityPolicy->fingerprint = 'ab';
    $request->securityPolicy->id = 'mollitia';
    $request->securityPolicy->kind = 'itaque';
    $request->securityPolicy->labelFingerprint = 'velit';
    $request->securityPolicy->labels = [
        'facilis' => 'harum',
        'voluptatum' => 'temporibus',
    ];
    $request->securityPolicy->name = 'Barbara Conn';
    $request->securityPolicy->parent = 'ratione';
    $request->securityPolicy->recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig();
    $request->securityPolicy->recaptchaOptionsConfig->redirectSiteKey = 'vero';
    $request->securityPolicy->region = 'ab';
    $request->securityPolicy->ruleTupleCount = 815754;
    $request->securityPolicy->rules = [
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
    ];
    $request->securityPolicy->selfLink = 'excepturi';
    $request->securityPolicy->selfLinkWithId = 'alias';
    $request->securityPolicy->type = SecurityPolicyTypeEnum::CLOUD_ARMOR_EDGE;
    $request->securityPolicy->userDefinedFields = [
        new SecurityPolicyUserDefinedField(),
        new SecurityPolicyUserDefinedField(),
        new SecurityPolicyUserDefinedField(),
    ];
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eveniet';
    $request->fields = 'voluptatibus';
    $request->key = 'perferendis';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'sunt';
    $request->quotaUser = 'adipisci';
    $request->requestId = 'atque';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'harum';
    $request->userIp = 'suscipit';
    $request->validateOnly = false;

    $requestSecurity = new ComputeSecurityPoliciesInsertSecurity();
    $requestSecurity->option1 = new ComputeSecurityPoliciesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->securityPolicies->computeSecurityPoliciesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSecurityPoliciesList

List all the policies that have been configured for the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quaerat';
    $request->fields = 'autem';
    $request->filter = 'reprehenderit';
    $request->key = 'neque';
    $request->maxResults = 634117;
    $request->oauthToken = 'maxime';
    $request->orderBy = 'omnis';
    $request->pageToken = 'atque';
    $request->prettyPrint = false;
    $request->project = 'reiciendis';
    $request->quotaUser = 'ea';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'ea';

    $requestSecurity = new ComputeSecurityPoliciesListSecurity();
    $requestSecurity->option1 = new ComputeSecurityPoliciesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->securityPolicies->computeSecurityPoliciesList($request, $requestSecurity);

    if ($response->securityPolicyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSecurityPoliciesListPreconfiguredExpressionSets

Gets the current list of preconfigured Web Application Firewall (WAF) expressions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesListPreconfiguredExpressionSetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesListPreconfiguredExpressionSetsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'mollitia';
    $request->filter = 'suscipit';
    $request->key = 'facilis';
    $request->maxResults = 738789;
    $request->oauthToken = 'doloremque';
    $request->orderBy = 'laudantium';
    $request->pageToken = 'voluptas';
    $request->prettyPrint = false;
    $request->project = 'sunt';
    $request->quotaUser = 'ipsam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'dolores';
    $request->userIp = 'consequuntur';

    $requestSecurity = new ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurity();
    $requestSecurity->option1 = new ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->securityPolicies->computeSecurityPoliciesListPreconfiguredExpressionSets($request, $requestSecurity);

    if ($response->securityPoliciesListPreconfiguredExpressionSetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSecurityPoliciesPatch

Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesPatchRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->securityPolicy1 = new SecurityPolicy();
    $request->securityPolicy1->adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig();
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig();
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->confidenceThreshold = 6971.71;
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->expirationSec = 44137;
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->impactedBaselineThreshold = 3341.33;
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->loadThreshold = 4621.43;
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig();
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig->enable = false;
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig->ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum::PREMIUM;
    $request->securityPolicy1->advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig();
    $request->securityPolicy1->advancedOptionsConfig->jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig();
    $request->securityPolicy1->advancedOptionsConfig->jsonCustomConfig->contentTypes = [
        'repudiandae',
        'dignissimos',
        'est',
    ];
    $request->securityPolicy1->advancedOptionsConfig->jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum::DISABLED;
    $request->securityPolicy1->advancedOptionsConfig->logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum::NORMAL;
    $request->securityPolicy1->advancedOptionsConfig->userIpRequestHeaders = [
        'vero',
    ];
    $request->securityPolicy1->associations = [
        new SecurityPolicyAssociation(),
        new SecurityPolicyAssociation(),
        new SecurityPolicyAssociation(),
        new SecurityPolicyAssociation(),
    ];
    $request->securityPolicy1->cloudArmorConfig = new SecurityPolicyCloudArmorConfig();
    $request->securityPolicy1->cloudArmorConfig->enableMl = false;
    $request->securityPolicy1->creationTimestamp = 'reiciendis';
    $request->securityPolicy1->ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig();
    $request->securityPolicy1->ddosProtectionConfig->ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum::STANDARD;
    $request->securityPolicy1->description = 'voluptate';
    $request->securityPolicy1->displayName = 'magnam';
    $request->securityPolicy1->fingerprint = 'doloribus';
    $request->securityPolicy1->id = 'dolorum';
    $request->securityPolicy1->kind = 'maiores';
    $request->securityPolicy1->labelFingerprint = 'hic';
    $request->securityPolicy1->labels = [
        'temporibus' => 'repudiandae',
        'dolore' => 'voluptatibus',
    ];
    $request->securityPolicy1->name = 'Mamie Bechtelar';
    $request->securityPolicy1->parent = 'corporis';
    $request->securityPolicy1->recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig();
    $request->securityPolicy1->recaptchaOptionsConfig->redirectSiteKey = 'esse';
    $request->securityPolicy1->region = 'soluta';
    $request->securityPolicy1->ruleTupleCount = 751139;
    $request->securityPolicy1->rules = [
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
    ];
    $request->securityPolicy1->selfLink = 'cumque';
    $request->securityPolicy1->selfLinkWithId = 'molestias';
    $request->securityPolicy1->type = SecurityPolicyTypeEnum::CLOUD_ARMOR;
    $request->securityPolicy1->userDefinedFields = [
        new SecurityPolicyUserDefinedField(),
        new SecurityPolicyUserDefinedField(),
        new SecurityPolicyUserDefinedField(),
        new SecurityPolicyUserDefinedField(),
    ];
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'numquam';
    $request->fields = 'rerum';
    $request->key = 'voluptas';
    $request->oauthToken = 'et';
    $request->paths = [
        'eaque',
        'accusantium',
        'neque',
    ];
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'quia';
    $request->requestId = 'ratione';
    $request->securityPolicyPathParameter = 'incidunt';
    $request->updateMask = 'voluptates';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'velit';
    $request->userIp = 'porro';

    $requestSecurity = new ComputeSecurityPoliciesPatchSecurity();
    $requestSecurity->option1 = new ComputeSecurityPoliciesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->securityPolicies->computeSecurityPoliciesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSecurityPoliciesPatchRule

Patches a rule at the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesPatchRuleRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesPatchRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesPatchRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesPatchRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesPatchRuleRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->securityPolicyRule = new SecurityPolicyRule();
    $request->securityPolicyRule->action = 'nobis';
    $request->securityPolicyRule->description = 'dolor';
    $request->securityPolicyRule->direction = SecurityPolicyRuleDirectionEnum::EGRESS;
    $request->securityPolicyRule->enableLogging = false;
    $request->securityPolicyRule->headerAction = new SecurityPolicyRuleHttpHeaderAction();
    $request->securityPolicyRule->headerAction->requestHeadersToAdds = [
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
    ];
    $request->securityPolicyRule->kind = 'corporis';
    $request->securityPolicyRule->match = new SecurityPolicyRuleMatcher();
    $request->securityPolicyRule->match->config = new SecurityPolicyRuleMatcherConfig();
    $request->securityPolicyRule->match->config->destIpRanges = [
        'expedita',
        'adipisci',
    ];
    $request->securityPolicyRule->match->config->destPorts = [
        new SecurityPolicyRuleMatcherConfigDestinationPort(),
        new SecurityPolicyRuleMatcherConfigDestinationPort(),
        new SecurityPolicyRuleMatcherConfigDestinationPort(),
    ];
    $request->securityPolicyRule->match->config->layer4Configs = [
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
    ];
    $request->securityPolicyRule->match->config->srcIpRanges = [
        'rerum',
        'repellat',
    ];
    $request->securityPolicyRule->match->expr = new Expr();
    $request->securityPolicyRule->match->expr->description = 'nihil';
    $request->securityPolicyRule->match->expr->expression = 'unde';
    $request->securityPolicyRule->match->expr->location = 'labore';
    $request->securityPolicyRule->match->expr->title = 'Mr.';
    $request->securityPolicyRule->match->versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum::SRC_IPS_V1;
    $request->securityPolicyRule->networkMatch = new SecurityPolicyRuleNetworkMatcher();
    $request->securityPolicyRule->networkMatch->destIpRanges = [
        'autem',
        'repellendus',
    ];
    $request->securityPolicyRule->networkMatch->destPorts = [
        'eaque',
        'ratione',
    ];
    $request->securityPolicyRule->networkMatch->ipProtocols = [
        'repellendus',
        'numquam',
        'quos',
    ];
    $request->securityPolicyRule->networkMatch->srcAsns = [
        656898,
        943764,
        418817,
    ];
    $request->securityPolicyRule->networkMatch->srcIpRanges = [
        'perferendis',
    ];
    $request->securityPolicyRule->networkMatch->srcPorts = [
        'magnam',
        'suscipit',
    ];
    $request->securityPolicyRule->networkMatch->srcRegionCodes = [
        'distinctio',
    ];
    $request->securityPolicyRule->networkMatch->userDefinedFields = [
        new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch(),
    ];
    $request->securityPolicyRule->preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig();
    $request->securityPolicyRule->preconfiguredWafConfig->exclusions = [
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
    ];
    $request->securityPolicyRule->preview = false;
    $request->securityPolicyRule->priority = 985129;
    $request->securityPolicyRule->rateLimitOptions = new SecurityPolicyRuleRateLimitOptions();
    $request->securityPolicyRule->rateLimitOptions->banDurationSec = 37420;
    $request->securityPolicyRule->rateLimitOptions->banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->banThreshold->count = 94746;
    $request->securityPolicyRule->rateLimitOptions->banThreshold->intervalSec = 894143;
    $request->securityPolicyRule->rateLimitOptions->conformAction = 'voluptate';
    $request->securityPolicyRule->rateLimitOptions->enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum::REGION_CODE;
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyConfigs = [
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
    ];
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyName = 'totam';
    $request->securityPolicyRule->rateLimitOptions->exceedAction = 'autem';
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus();
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus->code = 284475;
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus->message = 'non';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->target = 'excepturi';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::EXTERNAL302;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->count = 531908;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->intervalSec = 823889;
    $request->securityPolicyRule->redirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->redirectOptions->target = 'temporibus';
    $request->securityPolicyRule->redirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::EXTERNAL302;
    $request->securityPolicyRule->redirectTarget = 'repellendus';
    $request->securityPolicyRule->ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum::NONE;
    $request->securityPolicyRule->ruleNumber = 'in';
    $request->securityPolicyRule->ruleTupleCount = 193506;
    $request->securityPolicyRule->targetResources = [
        'ipsa',
        'quam',
        'porro',
    ];
    $request->securityPolicyRule->targetServiceAccounts = [
        'aut',
    ];
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'placeat';
    $request->fields = 'corrupti';
    $request->key = 'ea';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->priority = 814689;
    $request->project = 'necessitatibus';
    $request->quotaUser = 'occaecati';
    $request->securityPolicy = 'ea';
    $request->updateMask = 'occaecati';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'a';
    $request->userIp = 'iste';
    $request->validateOnly = false;

    $requestSecurity = new ComputeSecurityPoliciesPatchRuleSecurity();
    $requestSecurity->option1 = new ComputeSecurityPoliciesPatchRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->securityPolicies->computeSecurityPoliciesPatchRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSecurityPoliciesRemoveRule

Deletes a rule at the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesRemoveRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesRemoveRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesRemoveRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesRemoveRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesRemoveRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'quisquam';
    $request->key = 'voluptatem';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->priority = 661646;
    $request->project = 'quod';
    $request->quotaUser = 'adipisci';
    $request->securityPolicy = 'voluptatibus';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'dolor';
    $request->userIp = 'possimus';

    $requestSecurity = new ComputeSecurityPoliciesRemoveRuleSecurity();
    $requestSecurity->option1 = new ComputeSecurityPoliciesRemoveRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->securityPolicies->computeSecurityPoliciesRemoveRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSecurityPoliciesSetLabels

Sets the labels on a security policy. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalSetLabelsRequest = new GlobalSetLabelsRequest();
    $request->globalSetLabelsRequest->labelFingerprint = 'blanditiis';
    $request->globalSetLabelsRequest->labels = [
        'in' => 'sequi',
    ];
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'iure';
    $request->key = 'iste';
    $request->oauthToken = 'corrupti';
    $request->prettyPrint = false;
    $request->project = 'ex';
    $request->quotaUser = 'dolore';
    $request->resource = 'officiis';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'molestias';
    $request->userIp = 'explicabo';

    $requestSecurity = new ComputeSecurityPoliciesSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeSecurityPoliciesSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->securityPolicies->computeSecurityPoliciesSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSecurityPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'necessitatibus',
        'harum',
        'optio',
        'inventore',
    ];
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'animi';
    $request->fields = 'deserunt';
    $request->key = 'dolor';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->project = 'repudiandae';
    $request->quotaUser = 'facilis';
    $request->resource = 'nulla';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'quisquam';
    $request->userIp = 'perspiciatis';

    $requestSecurity = new ComputeSecurityPoliciesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeSecurityPoliciesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->securityPolicies->computeSecurityPoliciesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
