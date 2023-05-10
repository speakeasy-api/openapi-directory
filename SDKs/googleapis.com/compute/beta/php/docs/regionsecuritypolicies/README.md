# regionSecurityPolicies

### Available Operations

* [computeRegionSecurityPoliciesAddRule](#computeregionsecuritypoliciesaddrule) - Inserts a rule into a security policy.
* [computeRegionSecurityPoliciesDelete](#computeregionsecuritypoliciesdelete) - Deletes the specified policy.
* [computeRegionSecurityPoliciesGet](#computeregionsecuritypoliciesget) - List all of the ordered rules present in a single specified policy.
* [computeRegionSecurityPoliciesGetRule](#computeregionsecuritypoliciesgetrule) - Gets a rule at the specified priority.
* [computeRegionSecurityPoliciesInsert](#computeregionsecuritypoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeRegionSecurityPoliciesList](#computeregionsecuritypolicieslist) - List all the policies that have been configured for the specified project and region.
* [computeRegionSecurityPoliciesPatch](#computeregionsecuritypoliciespatch) - Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.
* [computeRegionSecurityPoliciesPatchRule](#computeregionsecuritypoliciespatchrule) - Patches a rule at the specified priority. To clear fields in the rule, leave the fields empty and specify them in the updateMask.
* [computeRegionSecurityPoliciesRemoveRule](#computeregionsecuritypoliciesremoverule) - Deletes a rule at the specified priority.

## computeRegionSecurityPoliciesAddRule

Inserts a rule into a security policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesAddRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfigLayer4Config;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherVersionedExprEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusion;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsThreshold;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRedirectOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRedirectOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesAddRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesAddRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesAddRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSecurityPoliciesAddRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicyRule = new SecurityPolicyRule();
    $request->securityPolicyRule->action = 'odio';
    $request->securityPolicyRule->description = 'sit';
    $request->securityPolicyRule->direction = SecurityPolicyRuleDirectionEnum::EGRESS;
    $request->securityPolicyRule->enableLogging = false;
    $request->securityPolicyRule->headerAction = new SecurityPolicyRuleHttpHeaderAction();
    $request->securityPolicyRule->headerAction->requestHeadersToAdds = [
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
    ];
    $request->securityPolicyRule->kind = 'corrupti';
    $request->securityPolicyRule->match = new SecurityPolicyRuleMatcher();
    $request->securityPolicyRule->match->config = new SecurityPolicyRuleMatcherConfig();
    $request->securityPolicyRule->match->config->destIpRanges = [
        'saepe',
    ];
    $request->securityPolicyRule->match->config->layer4Configs = [
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
    ];
    $request->securityPolicyRule->match->config->srcIpRanges = [
        'dolorem',
        'tenetur',
        'maxime',
    ];
    $request->securityPolicyRule->match->expr = new Expr();
    $request->securityPolicyRule->match->expr->description = 'in';
    $request->securityPolicyRule->match->expr->expression = 'dolor';
    $request->securityPolicyRule->match->expr->location = 'animi';
    $request->securityPolicyRule->match->expr->title = 'Mrs.';
    $request->securityPolicyRule->match->versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum::SRC_IPS_V1;
    $request->securityPolicyRule->preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig();
    $request->securityPolicyRule->preconfiguredWafConfig->exclusions = [
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
    ];
    $request->securityPolicyRule->preview = false;
    $request->securityPolicyRule->priority = 239123;
    $request->securityPolicyRule->rateLimitOptions = new SecurityPolicyRuleRateLimitOptions();
    $request->securityPolicyRule->rateLimitOptions->banDurationSec = 306163;
    $request->securityPolicyRule->rateLimitOptions->banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->banThreshold->count = 744576;
    $request->securityPolicyRule->rateLimitOptions->banThreshold->intervalSec = 79812;
    $request->securityPolicyRule->rateLimitOptions->conformAction = 'ab';
    $request->securityPolicyRule->rateLimitOptions->enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum::HTTP_COOKIE;
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyConfigs = [
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
    ];
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyName = 'sint';
    $request->securityPolicyRule->rateLimitOptions->exceedAction = 'eos';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->target = 'eius';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::EXTERNAL302;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->count = 625392;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->intervalSec = 979832;
    $request->securityPolicyRule->redirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->redirectOptions->target = 'mollitia';
    $request->securityPolicyRule->redirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::EXTERNAL302;
    $request->securityPolicyRule->ruleNumber = 'occaecati';
    $request->securityPolicyRule->ruleTupleCount = 519611;
    $request->securityPolicyRule->targetResources = [
        'est',
        'eius',
    ];
    $request->securityPolicyRule->targetServiceAccounts = [
        'fugit',
        'libero',
    ];
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'dolorum';
    $request->key = 'vitae';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->project = 'ipsum';
    $request->quotaUser = 'accusamus';
    $request->region = 'eos';
    $request->securityPolicy = 'fugit';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'dicta';
    $request->validateOnly = false;

    $requestSecurity = new ComputeRegionSecurityPoliciesAddRuleSecurity();
    $requestSecurity->option1 = new ComputeRegionSecurityPoliciesAddRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSecurityPolicies->computeRegionSecurityPoliciesAddRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSecurityPoliciesDelete

Deletes the specified policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSecurityPoliciesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'autem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ad';
    $request->fields = 'ipsum';
    $request->key = 'omnis';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->project = 'saepe';
    $request->quotaUser = 'ipsa';
    $request->region = 'perspiciatis';
    $request->requestId = 'consectetur';
    $request->securityPolicy = 'eos';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'aperiam';

    $requestSecurity = new ComputeRegionSecurityPoliciesDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionSecurityPoliciesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSecurityPolicies->computeRegionSecurityPoliciesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSecurityPoliciesGet

List all of the ordered rules present in a single specified policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSecurityPoliciesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vitae';
    $request->fields = 'ad';
    $request->key = 'quibusdam';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'porro';
    $request->quotaUser = 'quisquam';
    $request->region = 'ipsum';
    $request->securityPolicy = 'perferendis';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'quidem';
    $request->userIp = 'esse';

    $requestSecurity = new ComputeRegionSecurityPoliciesGetSecurity();
    $requestSecurity->option1 = new ComputeRegionSecurityPoliciesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSecurityPolicies->computeRegionSecurityPoliciesGet($request, $requestSecurity);

    if ($response->securityPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSecurityPoliciesGetRule

Gets a rule at the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesGetRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesGetRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesGetRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesGetRuleSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesGetRuleSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSecurityPoliciesGetRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorem';
    $request->fields = 'at';
    $request->key = 'amet';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->priority = 690696;
    $request->project = 'fugiat';
    $request->quotaUser = 'sed';
    $request->region = 'aut';
    $request->securityPolicy = 'ut';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'quae';
    $request->userIp = 'doloribus';

    $requestSecurity = new ComputeRegionSecurityPoliciesGetRuleSecurity();
    $requestSecurity->option1 = new ComputeRegionSecurityPoliciesGetRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSecurityPolicies->computeRegionSecurityPoliciesGetRule($request, $requestSecurity);

    if ($response->securityPolicyRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSecurityPoliciesInsert

Creates a new policy in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesInsertRequest;
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
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyDdosProtectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRecaptchaOptionsConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfigLayer4Config;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherVersionedExprEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusion;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsThreshold;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRedirectOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRedirectOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSecurityPoliciesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->securityPolicy = new SecurityPolicy();
    $request->securityPolicy->adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig();
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig();
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->confidenceThreshold = 2936.48;
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->expirationSec = 37808;
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->impactedBaselineThreshold = 7231.59;
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->loadThreshold = 6983.39;
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig();
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig->enable = false;
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig->ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum::PREMIUM;
    $request->securityPolicy->advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig();
    $request->securityPolicy->advancedOptionsConfig->jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig();
    $request->securityPolicy->advancedOptionsConfig->jsonCustomConfig->contentTypes = [
        'voluptatibus',
        'voluptas',
    ];
    $request->securityPolicy->advancedOptionsConfig->jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum::DISABLED;
    $request->securityPolicy->advancedOptionsConfig->logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum::NORMAL;
    $request->securityPolicy->advancedOptionsConfig->userIpRequestHeaders = [
        'eius',
        'praesentium',
        'corporis',
    ];
    $request->securityPolicy->associations = [
        new SecurityPolicyAssociation(),
    ];
    $request->securityPolicy->creationTimestamp = 'provident';
    $request->securityPolicy->ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig();
    $request->securityPolicy->ddosProtectionConfig->ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum::STANDARD;
    $request->securityPolicy->description = 'dolor';
    $request->securityPolicy->displayName = 'velit';
    $request->securityPolicy->fingerprint = 'quam';
    $request->securityPolicy->id = 'incidunt';
    $request->securityPolicy->kind = 'sint';
    $request->securityPolicy->labelFingerprint = 'voluptatem';
    $request->securityPolicy->labels = [
        'quas' => 'aliquam',
    ];
    $request->securityPolicy->name = 'Isaac Denesik';
    $request->securityPolicy->parent = 'distinctio';
    $request->securityPolicy->recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig();
    $request->securityPolicy->recaptchaOptionsConfig->redirectSiteKey = 'aperiam';
    $request->securityPolicy->region = 'consectetur';
    $request->securityPolicy->ruleTupleCount = 784316;
    $request->securityPolicy->rules = [
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
    ];
    $request->securityPolicy->selfLink = 'asperiores';
    $request->securityPolicy->selfLinkWithId = 'possimus';
    $request->securityPolicy->type = SecurityPolicyTypeEnum::CLOUD_ARMOR;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'dolore';
    $request->key = 'in';
    $request->oauthToken = 'corrupti';
    $request->prettyPrint = false;
    $request->project = 'iusto';
    $request->quotaUser = 'architecto';
    $request->region = 'culpa';
    $request->requestId = 'blanditiis';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'necessitatibus';
    $request->userIp = 'possimus';
    $request->validateOnly = false;

    $requestSecurity = new ComputeRegionSecurityPoliciesInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionSecurityPoliciesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSecurityPolicies->computeRegionSecurityPoliciesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSecurityPoliciesList

List all the policies that have been configured for the specified project and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSecurityPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'repellendus';
    $request->filter = 'eius';
    $request->key = 'est';
    $request->maxResults = 997814;
    $request->oauthToken = 'quaerat';
    $request->orderBy = 'quasi';
    $request->pageToken = 'minima';
    $request->prettyPrint = false;
    $request->project = 'voluptatum';
    $request->quotaUser = 'id';
    $request->region = 'impedit';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'repellendus';
    $request->userIp = 'doloremque';

    $requestSecurity = new ComputeRegionSecurityPoliciesListSecurity();
    $requestSecurity->option1 = new ComputeRegionSecurityPoliciesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSecurityPolicies->computeRegionSecurityPoliciesList($request, $requestSecurity);

    if ($response->securityPolicyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSecurityPoliciesPatch

Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesPatchRequest;
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
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyDdosProtectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRecaptchaOptionsConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfigLayer4Config;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherVersionedExprEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusion;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsThreshold;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRedirectOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRedirectOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSecurityPoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicy1 = new SecurityPolicy();
    $request->securityPolicy1->adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig();
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig();
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->confidenceThreshold = 249.87;
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->expirationSec = 995167;
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->impactedBaselineThreshold = 3644.24;
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->loadThreshold = 5522.56;
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig();
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig->enable = false;
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig->ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum::STANDARD;
    $request->securityPolicy1->advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig();
    $request->securityPolicy1->advancedOptionsConfig->jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig();
    $request->securityPolicy1->advancedOptionsConfig->jsonCustomConfig->contentTypes = [
        'libero',
    ];
    $request->securityPolicy1->advancedOptionsConfig->jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum::STANDARD;
    $request->securityPolicy1->advancedOptionsConfig->logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum::NORMAL;
    $request->securityPolicy1->advancedOptionsConfig->userIpRequestHeaders = [
        'ut',
        'molestiae',
        'eaque',
    ];
    $request->securityPolicy1->associations = [
        new SecurityPolicyAssociation(),
        new SecurityPolicyAssociation(),
    ];
    $request->securityPolicy1->creationTimestamp = 'aut';
    $request->securityPolicy1->ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig();
    $request->securityPolicy1->ddosProtectionConfig->ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum::STANDARD;
    $request->securityPolicy1->description = 'aut';
    $request->securityPolicy1->displayName = 'assumenda';
    $request->securityPolicy1->fingerprint = 'excepturi';
    $request->securityPolicy1->id = 'quos';
    $request->securityPolicy1->kind = 'necessitatibus';
    $request->securityPolicy1->labelFingerprint = 'unde';
    $request->securityPolicy1->labels = [
        'laudantium' => 'eos',
        'porro' => 'nostrum',
        'officiis' => 'adipisci',
        'alias' => 'nisi',
    ];
    $request->securityPolicy1->name = 'Zachary Heathcote';
    $request->securityPolicy1->parent = 'maiores';
    $request->securityPolicy1->recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig();
    $request->securityPolicy1->recaptchaOptionsConfig->redirectSiteKey = 'nemo';
    $request->securityPolicy1->region = 'quisquam';
    $request->securityPolicy1->ruleTupleCount = 844364;
    $request->securityPolicy1->rules = [
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
    ];
    $request->securityPolicy1->selfLink = 'cum';
    $request->securityPolicy1->selfLinkWithId = 'consequatur';
    $request->securityPolicy1->type = SecurityPolicyTypeEnum::CLOUD_ARMOR;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->fields = 'alias';
    $request->key = 'distinctio';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->project = 'aliquam';
    $request->quotaUser = 'adipisci';
    $request->region = 'harum';
    $request->requestId = 'veritatis';
    $request->securityPolicyPathParameter = 'quas';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'ipsum';

    $requestSecurity = new ComputeRegionSecurityPoliciesPatchSecurity();
    $requestSecurity->option1 = new ComputeRegionSecurityPoliciesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSecurityPolicies->computeRegionSecurityPoliciesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSecurityPoliciesPatchRule

Patches a rule at the specified priority. To clear fields in the rule, leave the fields empty and specify them in the updateMask.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesPatchRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfigLayer4Config;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherVersionedExprEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusion;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsThreshold;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRedirectOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleRedirectOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesPatchRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesPatchRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesPatchRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSecurityPoliciesPatchRuleRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->securityPolicyRule = new SecurityPolicyRule();
    $request->securityPolicyRule->action = 'corrupti';
    $request->securityPolicyRule->description = 'sapiente';
    $request->securityPolicyRule->direction = SecurityPolicyRuleDirectionEnum::EGRESS;
    $request->securityPolicyRule->enableLogging = false;
    $request->securityPolicyRule->headerAction = new SecurityPolicyRuleHttpHeaderAction();
    $request->securityPolicyRule->headerAction->requestHeadersToAdds = [
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
    ];
    $request->securityPolicyRule->kind = 'quisquam';
    $request->securityPolicyRule->match = new SecurityPolicyRuleMatcher();
    $request->securityPolicyRule->match->config = new SecurityPolicyRuleMatcherConfig();
    $request->securityPolicyRule->match->config->destIpRanges = [
        'maiores',
        'laudantium',
        'beatae',
        'assumenda',
    ];
    $request->securityPolicyRule->match->config->layer4Configs = [
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
    ];
    $request->securityPolicyRule->match->config->srcIpRanges = [
        'dignissimos',
        'vero',
        'eaque',
        'deleniti',
    ];
    $request->securityPolicyRule->match->expr = new Expr();
    $request->securityPolicyRule->match->expr->description = 'totam';
    $request->securityPolicyRule->match->expr->expression = 'repellat';
    $request->securityPolicyRule->match->expr->location = 'iusto';
    $request->securityPolicyRule->match->expr->title = 'Mrs.';
    $request->securityPolicyRule->match->versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum::SRC_IPS_V1;
    $request->securityPolicyRule->preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig();
    $request->securityPolicyRule->preconfiguredWafConfig->exclusions = [
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
    ];
    $request->securityPolicyRule->preview = false;
    $request->securityPolicyRule->priority = 340392;
    $request->securityPolicyRule->rateLimitOptions = new SecurityPolicyRuleRateLimitOptions();
    $request->securityPolicyRule->rateLimitOptions->banDurationSec = 308351;
    $request->securityPolicyRule->rateLimitOptions->banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->banThreshold->count = 757492;
    $request->securityPolicyRule->rateLimitOptions->banThreshold->intervalSec = 575705;
    $request->securityPolicyRule->rateLimitOptions->conformAction = 'aspernatur';
    $request->securityPolicyRule->rateLimitOptions->enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum::ALL;
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyConfigs = [
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
    ];
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyName = 'vero';
    $request->securityPolicyRule->rateLimitOptions->exceedAction = 'atque';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->target = 'unde';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::EXTERNAL302;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->count = 397973;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->intervalSec = 197770;
    $request->securityPolicyRule->redirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->redirectOptions->target = 'quae';
    $request->securityPolicyRule->redirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::EXTERNAL302;
    $request->securityPolicyRule->ruleNumber = 'libero';
    $request->securityPolicyRule->ruleTupleCount = 742797;
    $request->securityPolicyRule->targetResources = [
        'hic',
        'quo',
    ];
    $request->securityPolicyRule->targetServiceAccounts = [
        'quo',
    ];
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fugit';
    $request->fields = 'reprehenderit';
    $request->key = 'eaque';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->priority = 39457;
    $request->project = 'unde';
    $request->quotaUser = 'eum';
    $request->region = 'quidem';
    $request->securityPolicy = 'vel';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'id';
    $request->userIp = 'fugiat';
    $request->validateOnly = false;

    $requestSecurity = new ComputeRegionSecurityPoliciesPatchRuleSecurity();
    $requestSecurity->option1 = new ComputeRegionSecurityPoliciesPatchRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSecurityPolicies->computeRegionSecurityPoliciesPatchRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSecurityPoliciesRemoveRule

Deletes a rule at the specified priority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesRemoveRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesRemoveRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesRemoveRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesRemoveRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSecurityPoliciesRemoveRuleRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'recusandae';
    $request->fields = 'quasi';
    $request->key = 'pariatur';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->priority = 853845;
    $request->project = 'ipsum';
    $request->quotaUser = 'libero';
    $request->region = 'voluptas';
    $request->securityPolicy = 'aliquid';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'nesciunt';
    $request->userIp = 'non';

    $requestSecurity = new ComputeRegionSecurityPoliciesRemoveRuleSecurity();
    $requestSecurity->option1 = new ComputeRegionSecurityPoliciesRemoveRuleSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSecurityPolicies->computeRegionSecurityPoliciesRemoveRule($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
