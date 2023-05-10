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
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfig;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesAddRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesAddRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesAddRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesAddRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicyRule = new SecurityPolicyRule();
    $request->securityPolicyRule->action = 'quaerat';
    $request->securityPolicyRule->description = 'quasi';
    $request->securityPolicyRule->headerAction = new SecurityPolicyRuleHttpHeaderAction();
    $request->securityPolicyRule->headerAction->requestHeadersToAdds = [
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
    ];
    $request->securityPolicyRule->kind = 'voluptatum';
    $request->securityPolicyRule->match = new SecurityPolicyRuleMatcher();
    $request->securityPolicyRule->match->config = new SecurityPolicyRuleMatcherConfig();
    $request->securityPolicyRule->match->config->srcIpRanges = [
        'impedit',
        'magni',
        'repellendus',
    ];
    $request->securityPolicyRule->match->expr = new Expr();
    $request->securityPolicyRule->match->expr->description = 'doloremque';
    $request->securityPolicyRule->match->expr->expression = 'sapiente';
    $request->securityPolicyRule->match->expr->location = 'sit';
    $request->securityPolicyRule->match->expr->title = 'Dr.';
    $request->securityPolicyRule->match->versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum::SRC_IPS_V1;
    $request->securityPolicyRule->preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig();
    $request->securityPolicyRule->preconfiguredWafConfig->exclusions = [
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
    ];
    $request->securityPolicyRule->preview = false;
    $request->securityPolicyRule->priority = 552256;
    $request->securityPolicyRule->rateLimitOptions = new SecurityPolicyRuleRateLimitOptions();
    $request->securityPolicyRule->rateLimitOptions->banDurationSec = 758860;
    $request->securityPolicyRule->rateLimitOptions->banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->banThreshold->count = 240787;
    $request->securityPolicyRule->rateLimitOptions->banThreshold->intervalSec = 728920;
    $request->securityPolicyRule->rateLimitOptions->conformAction = 'totam';
    $request->securityPolicyRule->rateLimitOptions->enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum::HTTP_PATH;
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyConfigs = [
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
    ];
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyName = 'ut';
    $request->securityPolicyRule->rateLimitOptions->exceedAction = 'molestiae';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->target = 'eaque';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::EXTERNAL302;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->count = 14298;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->intervalSec = 822093;
    $request->securityPolicyRule->redirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->redirectOptions->target = 'aut';
    $request->securityPolicyRule->redirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::GOOGLE_RECAPTCHA;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'unde';
    $request->key = 'fugiat';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'eos';
    $request->quotaUser = 'porro';
    $request->securityPolicy = 'nostrum';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'adipisci';
    $request->userIp = 'alias';
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
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nostrum';
    $request->fields = 'molestiae';
    $request->filter = 'aliquid';
    $request->includeAllScopes = false;
    $request->key = 'maiores';
    $request->maxResults = 367683;
    $request->oauthToken = 'quisquam';
    $request->orderBy = 'quibusdam';
    $request->pageToken = 'voluptates';
    $request->prettyPrint = false;
    $request->project = 'cum';
    $request->quotaUser = 'consequatur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'totam';
    $request->userIp = 'ea';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'aliquam';
    $request->key = 'adipisci';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->project = 'veritatis';
    $request->quotaUser = 'quas';
    $request->requestId = 'id';
    $request->securityPolicy = 'expedita';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'molestiae';
    $request->userIp = 'corrupti';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quisquam';
    $request->fields = 'maiores';
    $request->key = 'maiores';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'beatae';
    $request->quotaUser = 'assumenda';
    $request->securityPolicy = 'quibusdam';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'dignissimos';
    $request->userIp = 'vero';

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
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellat';
    $request->fields = 'iusto';
    $request->key = 'labore';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->priority = 963072;
    $request->project = 'quis';
    $request->quotaUser = 'quaerat';
    $request->securityPolicy = 'eligendi';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'aspernatur';
    $request->userIp = 'ab';

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
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdvancedOptionsConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdvancedOptionsConfigJsonParsingEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdvancedOptionsConfigLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyDdosProtectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRecaptchaOptionsConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfig;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->securityPolicy = new SecurityPolicy();
    $request->securityPolicy->adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig();
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig();
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig->enable = false;
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig->ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum::STANDARD;
    $request->securityPolicy->advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig();
    $request->securityPolicy->advancedOptionsConfig->jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig();
    $request->securityPolicy->advancedOptionsConfig->jsonCustomConfig->contentTypes = [
        'unde',
        'qui',
        'aliquid',
    ];
    $request->securityPolicy->advancedOptionsConfig->jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum::DISABLED;
    $request->securityPolicy->advancedOptionsConfig->logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum::NORMAL;
    $request->securityPolicy->creationTimestamp = 'velit';
    $request->securityPolicy->ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig();
    $request->securityPolicy->ddosProtectionConfig->ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum::STANDARD;
    $request->securityPolicy->description = 'soluta';
    $request->securityPolicy->fingerprint = 'eum';
    $request->securityPolicy->id = 'hic';
    $request->securityPolicy->kind = 'quo';
    $request->securityPolicy->labelFingerprint = 'explicabo';
    $request->securityPolicy->labels = [
        'corrupti' => 'illum',
        'fugit' => 'reprehenderit',
        'eaque' => 'inventore',
        'doloremque' => 'unde',
    ];
    $request->securityPolicy->name = 'Alison Kautzer';
    $request->securityPolicy->recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig();
    $request->securityPolicy->recaptchaOptionsConfig->redirectSiteKey = 'fugiat';
    $request->securityPolicy->region = 'laboriosam';
    $request->securityPolicy->rules = [
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
    ];
    $request->securityPolicy->selfLink = 'amet';
    $request->securityPolicy->type = SecurityPolicyTypeEnum::CLOUD_ARMOR_NETWORK;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'fugiat';
    $request->key = 'ipsum';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->project = 'voluptas';
    $request->quotaUser = 'aliquid';
    $request->requestId = 'perferendis';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'non';
    $request->userIp = 'quaerat';
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'id';
    $request->fields = 'id';
    $request->filter = 'ab';
    $request->key = 'nulla';
    $request->maxResults = 368398;
    $request->oauthToken = 'at';
    $request->orderBy = 'magni';
    $request->pageToken = 'quia';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'nihil';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'perspiciatis';

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
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'laboriosam';
    $request->filter = 'quasi';
    $request->key = 'ducimus';
    $request->maxResults = 51452;
    $request->oauthToken = 'debitis';
    $request->orderBy = 'iusto';
    $request->pageToken = 'eum';
    $request->prettyPrint = false;
    $request->project = 'quos';
    $request->quotaUser = 'est';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'vel';
    $request->userIp = 'nobis';

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
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdvancedOptionsConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdvancedOptionsConfigJsonParsingEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyAdvancedOptionsConfigLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyDdosProtectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRecaptchaOptionsConfig;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfig;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicy1 = new SecurityPolicy();
    $request->securityPolicy1->adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig();
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig();
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig->enable = false;
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig->ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum::PREMIUM;
    $request->securityPolicy1->advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig();
    $request->securityPolicy1->advancedOptionsConfig->jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig();
    $request->securityPolicy1->advancedOptionsConfig->jsonCustomConfig->contentTypes = [
        'totam',
        'reprehenderit',
        'voluptatum',
    ];
    $request->securityPolicy1->advancedOptionsConfig->jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum::STANDARD;
    $request->securityPolicy1->advancedOptionsConfig->logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum::NORMAL;
    $request->securityPolicy1->creationTimestamp = 'perspiciatis';
    $request->securityPolicy1->ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig();
    $request->securityPolicy1->ddosProtectionConfig->ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum::STANDARD;
    $request->securityPolicy1->description = 'vero';
    $request->securityPolicy1->fingerprint = 'tempore';
    $request->securityPolicy1->id = 'dolorum';
    $request->securityPolicy1->kind = 'architecto';
    $request->securityPolicy1->labelFingerprint = 'expedita';
    $request->securityPolicy1->labels = [
        'reiciendis' => 'dignissimos',
        'ab' => 'dolore',
        'ratione' => 'dolor',
    ];
    $request->securityPolicy1->name = 'Carla West';
    $request->securityPolicy1->recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig();
    $request->securityPolicy1->recaptchaOptionsConfig->redirectSiteKey = 'ut';
    $request->securityPolicy1->region = 'molestias';
    $request->securityPolicy1->rules = [
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
    ];
    $request->securityPolicy1->selfLink = 'dicta';
    $request->securityPolicy1->type = SecurityPolicyTypeEnum::CLOUD_ARMOR_EDGE;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'cupiditate';
    $request->key = 'facilis';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->project = 'beatae';
    $request->quotaUser = 'dicta';
    $request->requestId = 'eligendi';
    $request->securityPolicyPathParameter = 'recusandae';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'ex';
    $request->userIp = 'tempore';

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
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcher;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyRuleMatcherConfig;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesPatchRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesPatchRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSecurityPoliciesPatchRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSecurityPoliciesPatchRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicyRule = new SecurityPolicyRule();
    $request->securityPolicyRule->action = 'nemo';
    $request->securityPolicyRule->description = 'veritatis';
    $request->securityPolicyRule->headerAction = new SecurityPolicyRuleHttpHeaderAction();
    $request->securityPolicyRule->headerAction->requestHeadersToAdds = [
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
    ];
    $request->securityPolicyRule->kind = 'enim';
    $request->securityPolicyRule->match = new SecurityPolicyRuleMatcher();
    $request->securityPolicyRule->match->config = new SecurityPolicyRuleMatcherConfig();
    $request->securityPolicyRule->match->config->srcIpRanges = [
        'facilis',
    ];
    $request->securityPolicyRule->match->expr = new Expr();
    $request->securityPolicyRule->match->expr->description = 'beatae';
    $request->securityPolicyRule->match->expr->expression = 'corporis';
    $request->securityPolicyRule->match->expr->location = 'atque';
    $request->securityPolicyRule->match->expr->title = 'Miss';
    $request->securityPolicyRule->match->versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum::SRC_IPS_V1;
    $request->securityPolicyRule->preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig();
    $request->securityPolicyRule->preconfiguredWafConfig->exclusions = [
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
    ];
    $request->securityPolicyRule->preview = false;
    $request->securityPolicyRule->priority = 571005;
    $request->securityPolicyRule->rateLimitOptions = new SecurityPolicyRuleRateLimitOptions();
    $request->securityPolicyRule->rateLimitOptions->banDurationSec = 92130;
    $request->securityPolicyRule->rateLimitOptions->banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->banThreshold->count = 250518;
    $request->securityPolicyRule->rateLimitOptions->banThreshold->intervalSec = 139432;
    $request->securityPolicyRule->rateLimitOptions->conformAction = 'reiciendis';
    $request->securityPolicyRule->rateLimitOptions->enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum::ALL;
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyConfigs = [
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
    ];
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyName = 'consequuntur';
    $request->securityPolicyRule->rateLimitOptions->exceedAction = 'iure';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->target = 'dolor';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::EXTERNAL302;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->count = 690703;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->intervalSec = 194273;
    $request->securityPolicyRule->redirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->redirectOptions->target = 'quae';
    $request->securityPolicyRule->redirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::GOOGLE_RECAPTCHA;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ex';
    $request->fields = 'unde';
    $request->key = 'fugit';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->priority = 982330;
    $request->project = 'quisquam';
    $request->quotaUser = 'blanditiis';
    $request->securityPolicy = 'reprehenderit';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'nostrum';
    $request->userIp = 'ipsa';
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iste';
    $request->fields = 'pariatur';
    $request->key = 'velit';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->priority = 569242;
    $request->project = 'consectetur';
    $request->quotaUser = 'incidunt';
    $request->securityPolicy = 'vero';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'non';
    $request->userIp = 'commodi';

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
    $request->globalSetLabelsRequest->labelFingerprint = 'ullam';
    $request->globalSetLabelsRequest->labels = [
        'velit' => 'quas',
        'voluptatum' => 'ea',
        'laboriosam' => 'numquam',
        'tenetur' => 'ea',
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corporis';
    $request->fields = 'quis';
    $request->key = 'ipsum';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->project = 'est';
    $request->quotaUser = 'fugit';
    $request->resource = 'repudiandae';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'similique';
    $request->userIp = 'repudiandae';

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
