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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesAddRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesAddRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesAddRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSecurityPoliciesAddRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicyRule = new SecurityPolicyRule();
    $request->securityPolicyRule->action = 'quis';
    $request->securityPolicyRule->description = 'labore';
    $request->securityPolicyRule->direction = SecurityPolicyRuleDirectionEnum::INGRESS;
    $request->securityPolicyRule->enableLogging = false;
    $request->securityPolicyRule->headerAction = new SecurityPolicyRuleHttpHeaderAction();
    $request->securityPolicyRule->headerAction->requestHeadersToAdds = [
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
    ];
    $request->securityPolicyRule->kind = 'illo';
    $request->securityPolicyRule->match = new SecurityPolicyRuleMatcher();
    $request->securityPolicyRule->match->config = new SecurityPolicyRuleMatcherConfig();
    $request->securityPolicyRule->match->config->destIpRanges = [
        'facilis',
        'nesciunt',
        'laborum',
        'quibusdam',
    ];
    $request->securityPolicyRule->match->config->destPorts = [
        new SecurityPolicyRuleMatcherConfigDestinationPort(),
        new SecurityPolicyRuleMatcherConfigDestinationPort(),
    ];
    $request->securityPolicyRule->match->config->layer4Configs = [
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
    ];
    $request->securityPolicyRule->match->config->srcIpRanges = [
        'molestias',
        'saepe',
        'corporis',
    ];
    $request->securityPolicyRule->match->expr = new Expr();
    $request->securityPolicyRule->match->expr->description = 'maxime';
    $request->securityPolicyRule->match->expr->expression = 'quasi';
    $request->securityPolicyRule->match->expr->location = 'totam';
    $request->securityPolicyRule->match->expr->title = 'Miss';
    $request->securityPolicyRule->match->versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum::FIREWALL;
    $request->securityPolicyRule->networkMatch = new SecurityPolicyRuleNetworkMatcher();
    $request->securityPolicyRule->networkMatch->destIpRanges = [
        'debitis',
        'rem',
    ];
    $request->securityPolicyRule->networkMatch->destPorts = [
        'maiores',
        'ea',
    ];
    $request->securityPolicyRule->networkMatch->ipProtocols = [
        'corrupti',
        'aspernatur',
    ];
    $request->securityPolicyRule->networkMatch->srcAsns = [
        139578,
    ];
    $request->securityPolicyRule->networkMatch->srcIpRanges = [
        'voluptas',
        'tempore',
    ];
    $request->securityPolicyRule->networkMatch->srcPorts = [
        'molestias',
        'exercitationem',
        'optio',
        'aperiam',
    ];
    $request->securityPolicyRule->networkMatch->srcRegionCodes = [
        'rerum',
        'eligendi',
        'tempore',
        'fugit',
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
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
    ];
    $request->securityPolicyRule->preview = false;
    $request->securityPolicyRule->priority = 515492;
    $request->securityPolicyRule->rateLimitOptions = new SecurityPolicyRuleRateLimitOptions();
    $request->securityPolicyRule->rateLimitOptions->banDurationSec = 480180;
    $request->securityPolicyRule->rateLimitOptions->banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->banThreshold->count = 573885;
    $request->securityPolicyRule->rateLimitOptions->banThreshold->intervalSec = 62091;
    $request->securityPolicyRule->rateLimitOptions->conformAction = 'quos';
    $request->securityPolicyRule->rateLimitOptions->enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum::SNI;
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyConfigs = [
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
    ];
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyName = 'ipsum';
    $request->securityPolicyRule->rateLimitOptions->exceedAction = 'corrupti';
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus();
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus->code = 12940;
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus->message = 'iste';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->target = 'deserunt';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::EXTERNAL302;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->count = 172105;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->intervalSec = 984832;
    $request->securityPolicyRule->redirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->redirectOptions->target = 'quae';
    $request->securityPolicyRule->redirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::EXTERNAL302;
    $request->securityPolicyRule->redirectTarget = 'itaque';
    $request->securityPolicyRule->ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum::PLUS;
    $request->securityPolicyRule->ruleNumber = 'sed';
    $request->securityPolicyRule->ruleTupleCount = 186316;
    $request->securityPolicyRule->targetResources = [
        'cum',
        'nemo',
        'ex',
    ];
    $request->securityPolicyRule->targetServiceAccounts = [
        'nisi',
    ];
    $request->accessToken = 'enim';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'exercitationem';
    $request->fields = 'voluptatem';
    $request->key = 'dignissimos';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->project = 'facilis';
    $request->quotaUser = 'officiis';
    $request->region = 'repellat';
    $request->securityPolicy = 'cum';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'laborum';
    $request->userIp = 'hic';
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
    $request->accessToken = 'rem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perspiciatis';
    $request->fields = 'possimus';
    $request->key = 'odit';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'iste';
    $request->region = 'eius';
    $request->requestId = 'consequatur';
    $request->securityPolicy = 'tempora';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'eum';
    $request->userIp = 'adipisci';

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
    $request->accessToken = 'sit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'aliquam';
    $request->key = 'impedit';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'ipsam';
    $request->quotaUser = 'velit';
    $request->region = 'praesentium';
    $request->securityPolicy = 'voluptate';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'eveniet';
    $request->userIp = 'ratione';

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
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tenetur';
    $request->fields = 'perspiciatis';
    $request->key = 'quisquam';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->priority = 383631;
    $request->project = 'minima';
    $request->quotaUser = 'temporibus';
    $request->region = 'reiciendis';
    $request->securityPolicy = 'fugiat';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'ipsum';
    $request->userIp = 'corporis';

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
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->confidenceThreshold = 9077.29;
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->expirationSec = 334649;
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->impactedBaselineThreshold = 8118.65;
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->loadThreshold = 7243.92;
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig();
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig->enable = false;
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig->ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum::STANDARD;
    $request->securityPolicy->advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig();
    $request->securityPolicy->advancedOptionsConfig->jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig();
    $request->securityPolicy->advancedOptionsConfig->jsonCustomConfig->contentTypes = [
        'excepturi',
        'reprehenderit',
    ];
    $request->securityPolicy->advancedOptionsConfig->jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum::DISABLED;
    $request->securityPolicy->advancedOptionsConfig->logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum::NORMAL;
    $request->securityPolicy->advancedOptionsConfig->userIpRequestHeaders = [
        'voluptate',
    ];
    $request->securityPolicy->associations = [
        new SecurityPolicyAssociation(),
        new SecurityPolicyAssociation(),
        new SecurityPolicyAssociation(),
    ];
    $request->securityPolicy->cloudArmorConfig = new SecurityPolicyCloudArmorConfig();
    $request->securityPolicy->cloudArmorConfig->enableMl = false;
    $request->securityPolicy->creationTimestamp = 'quia';
    $request->securityPolicy->ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig();
    $request->securityPolicy->ddosProtectionConfig->ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum::ADVANCED_PREVIEW;
    $request->securityPolicy->description = 'fugit';
    $request->securityPolicy->displayName = 'perferendis';
    $request->securityPolicy->fingerprint = 'eius';
    $request->securityPolicy->id = 'libero';
    $request->securityPolicy->kind = 'soluta';
    $request->securityPolicy->labelFingerprint = 'explicabo';
    $request->securityPolicy->labels = [
        'quod' => 'laborum',
        'eius' => 'eveniet',
    ];
    $request->securityPolicy->name = 'Wendell Marks';
    $request->securityPolicy->parent = 'voluptatum';
    $request->securityPolicy->recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig();
    $request->securityPolicy->recaptchaOptionsConfig->redirectSiteKey = 'iure';
    $request->securityPolicy->region = 'iste';
    $request->securityPolicy->ruleTupleCount = 819038;
    $request->securityPolicy->rules = [
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
    ];
    $request->securityPolicy->selfLink = 'reiciendis';
    $request->securityPolicy->selfLinkWithId = 'optio';
    $request->securityPolicy->type = SecurityPolicyTypeEnum::CLOUD_ARMOR;
    $request->securityPolicy->userDefinedFields = [
        new SecurityPolicyUserDefinedField(),
        new SecurityPolicyUserDefinedField(),
        new SecurityPolicyUserDefinedField(),
    ];
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'eum';
    $request->key = 'alias';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->project = 'eligendi';
    $request->quotaUser = 'doloribus';
    $request->region = 'cupiditate';
    $request->requestId = 'aut';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'facere';
    $request->userIp = 'error';
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'unde';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'officia';
    $request->filter = 'consectetur';
    $request->key = 'tempora';
    $request->maxResults = 463917;
    $request->oauthToken = 'et';
    $request->orderBy = 'veniam';
    $request->pageToken = 'culpa';
    $request->prettyPrint = false;
    $request->project = 'porro';
    $request->quotaUser = 'possimus';
    $request->region = 'laborum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'quaerat';
    $request->userIp = 'eius';

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
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->confidenceThreshold = 6409.86;
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->expirationSec = 644242;
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->impactedBaselineThreshold = 9015.7;
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->loadThreshold = 8466.26;
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig();
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig->enable = false;
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig->ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum::PREMIUM;
    $request->securityPolicy1->advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig();
    $request->securityPolicy1->advancedOptionsConfig->jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig();
    $request->securityPolicy1->advancedOptionsConfig->jsonCustomConfig->contentTypes = [
        'dicta',
        'sequi',
        'mollitia',
        'aliquid',
    ];
    $request->securityPolicy1->advancedOptionsConfig->jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum::DISABLED;
    $request->securityPolicy1->advancedOptionsConfig->logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum::NORMAL;
    $request->securityPolicy1->advancedOptionsConfig->userIpRequestHeaders = [
        'fugit',
        'accusamus',
        'cupiditate',
        'illo',
    ];
    $request->securityPolicy1->associations = [
        new SecurityPolicyAssociation(),
        new SecurityPolicyAssociation(),
        new SecurityPolicyAssociation(),
    ];
    $request->securityPolicy1->cloudArmorConfig = new SecurityPolicyCloudArmorConfig();
    $request->securityPolicy1->cloudArmorConfig->enableMl = false;
    $request->securityPolicy1->creationTimestamp = 'eligendi';
    $request->securityPolicy1->ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig();
    $request->securityPolicy1->ddosProtectionConfig->ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum::ADVANCED_PREVIEW;
    $request->securityPolicy1->description = 'quis';
    $request->securityPolicy1->displayName = 'distinctio';
    $request->securityPolicy1->fingerprint = 'alias';
    $request->securityPolicy1->id = 'modi';
    $request->securityPolicy1->kind = 'rem';
    $request->securityPolicy1->labelFingerprint = 'commodi';
    $request->securityPolicy1->labels = [
        'earum' => 'amet',
        'excepturi' => 'laudantium',
        'fuga' => 'voluptatem',
        'soluta' => 'nesciunt',
    ];
    $request->securityPolicy1->name = 'Ms. Monica Keeling';
    $request->securityPolicy1->parent = 'nulla';
    $request->securityPolicy1->recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig();
    $request->securityPolicy1->recaptchaOptionsConfig->redirectSiteKey = 'sint';
    $request->securityPolicy1->region = 'nemo';
    $request->securityPolicy1->ruleTupleCount = 793945;
    $request->securityPolicy1->rules = [
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
    ];
    $request->securityPolicy1->selfLink = 'ipsum';
    $request->securityPolicy1->selfLinkWithId = 'doloremque';
    $request->securityPolicy1->type = SecurityPolicyTypeEnum::CLOUD_ARMOR_EDGE;
    $request->securityPolicy1->userDefinedFields = [
        new SecurityPolicyUserDefinedField(),
        new SecurityPolicyUserDefinedField(),
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->fields = 'itaque';
    $request->key = 'expedita';
    $request->oauthToken = 'neque';
    $request->paths = [
        'ipsum',
        'quasi',
        'eligendi',
    ];
    $request->prettyPrint = false;
    $request->project = 'cum';
    $request->quotaUser = 'corporis';
    $request->region = 'voluptatem';
    $request->requestId = 'neque';
    $request->securityPolicyPathParameter = 'quo';
    $request->updateMask = 'amet';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'aliquam';
    $request->userIp = 'aperiam';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesPatchRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesPatchRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSecurityPoliciesPatchRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSecurityPoliciesPatchRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicyRule = new SecurityPolicyRule();
    $request->securityPolicyRule->action = 'deleniti';
    $request->securityPolicyRule->description = 'esse';
    $request->securityPolicyRule->direction = SecurityPolicyRuleDirectionEnum::EGRESS;
    $request->securityPolicyRule->enableLogging = false;
    $request->securityPolicyRule->headerAction = new SecurityPolicyRuleHttpHeaderAction();
    $request->securityPolicyRule->headerAction->requestHeadersToAdds = [
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
    ];
    $request->securityPolicyRule->kind = 'cumque';
    $request->securityPolicyRule->match = new SecurityPolicyRuleMatcher();
    $request->securityPolicyRule->match->config = new SecurityPolicyRuleMatcherConfig();
    $request->securityPolicyRule->match->config->destIpRanges = [
        'consectetur',
        'ad',
    ];
    $request->securityPolicyRule->match->config->destPorts = [
        new SecurityPolicyRuleMatcherConfigDestinationPort(),
        new SecurityPolicyRuleMatcherConfigDestinationPort(),
        new SecurityPolicyRuleMatcherConfigDestinationPort(),
        new SecurityPolicyRuleMatcherConfigDestinationPort(),
    ];
    $request->securityPolicyRule->match->config->layer4Configs = [
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
    ];
    $request->securityPolicyRule->match->config->srcIpRanges = [
        'possimus',
        'ea',
        'tempore',
        'sapiente',
    ];
    $request->securityPolicyRule->match->expr = new Expr();
    $request->securityPolicyRule->match->expr->description = 'iure';
    $request->securityPolicyRule->match->expr->expression = 'modi';
    $request->securityPolicyRule->match->expr->location = 'rerum';
    $request->securityPolicyRule->match->expr->title = 'Mrs.';
    $request->securityPolicyRule->match->versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum::FIREWALL;
    $request->securityPolicyRule->networkMatch = new SecurityPolicyRuleNetworkMatcher();
    $request->securityPolicyRule->networkMatch->destIpRanges = [
        'earum',
        'natus',
    ];
    $request->securityPolicyRule->networkMatch->destPorts = [
        'sequi',
        'vitae',
        'accusamus',
    ];
    $request->securityPolicyRule->networkMatch->ipProtocols = [
        'omnis',
        'corporis',
    ];
    $request->securityPolicyRule->networkMatch->srcAsns = [
        34104,
        894455,
        349710,
        495775,
    ];
    $request->securityPolicyRule->networkMatch->srcIpRanges = [
        'enim',
        'eius',
        'necessitatibus',
        'nam',
    ];
    $request->securityPolicyRule->networkMatch->srcPorts = [
        'quia',
        'pariatur',
        'magni',
        'tempore',
    ];
    $request->securityPolicyRule->networkMatch->srcRegionCodes = [
        'laboriosam',
        'aut',
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
    ];
    $request->securityPolicyRule->preview = false;
    $request->securityPolicyRule->priority = 935541;
    $request->securityPolicyRule->rateLimitOptions = new SecurityPolicyRuleRateLimitOptions();
    $request->securityPolicyRule->rateLimitOptions->banDurationSec = 969826;
    $request->securityPolicyRule->rateLimitOptions->banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->banThreshold->count = 667239;
    $request->securityPolicyRule->rateLimitOptions->banThreshold->intervalSec = 281531;
    $request->securityPolicyRule->rateLimitOptions->conformAction = 'dolore';
    $request->securityPolicyRule->rateLimitOptions->enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum::REGION_CODE;
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyConfigs = [
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
    ];
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyName = 'quibusdam';
    $request->securityPolicyRule->rateLimitOptions->exceedAction = 'reiciendis';
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus();
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus->code = 939456;
    $request->securityPolicyRule->rateLimitOptions->exceedActionRpcStatus->message = 'incidunt';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->target = 'sit';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::GOOGLE_RECAPTCHA;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->count = 845119;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->intervalSec = 842230;
    $request->securityPolicyRule->redirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->redirectOptions->target = 'inventore';
    $request->securityPolicyRule->redirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::GOOGLE_RECAPTCHA;
    $request->securityPolicyRule->redirectTarget = 'enim';
    $request->securityPolicyRule->ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum::NONE;
    $request->securityPolicyRule->ruleNumber = 'soluta';
    $request->securityPolicyRule->ruleTupleCount = 948043;
    $request->securityPolicyRule->targetResources = [
        'dolorum',
        'ipsa',
    ];
    $request->securityPolicyRule->targetServiceAccounts = [
        'soluta',
        'impedit',
        'quas',
        'facilis',
    ];
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'commodi';
    $request->fields = 'eaque';
    $request->key = 'similique';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->priority = 917050;
    $request->project = 'similique';
    $request->quotaUser = 'autem';
    $request->region = 'nobis';
    $request->securityPolicy = 'laboriosam';
    $request->updateMask = 'non';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'ab';
    $request->userIp = 'nesciunt';
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
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'amet';
    $request->fields = 'sit';
    $request->key = 'quos';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->priority = 781342;
    $request->project = 'illo';
    $request->quotaUser = 'sit';
    $request->region = 'culpa';
    $request->securityPolicy = 'blanditiis';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'ex';
    $request->userIp = 'dolorum';

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
