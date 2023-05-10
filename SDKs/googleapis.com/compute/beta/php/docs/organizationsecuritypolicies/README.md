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
    $request->securityPolicyAssociation->attachmentId = 'laudantium';
    $request->securityPolicyAssociation->displayName = 'recusandae';
    $request->securityPolicyAssociation->name = 'Dr. Janis Donnelly';
    $request->securityPolicyAssociation->securityPolicyId = 'at';
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'incidunt';
    $request->key = 'maiores';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->replaceExistingAssociation = false;
    $request->requestId = 'eius';
    $request->securityPolicy = 'iure';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'molestiae';
    $request->userIp = 'rerum';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesAddRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesAddRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesAddRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesAddRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicyRule = new SecurityPolicyRule();
    $request->securityPolicyRule->action = 'sequi';
    $request->securityPolicyRule->description = 'ducimus';
    $request->securityPolicyRule->direction = SecurityPolicyRuleDirectionEnum::EGRESS;
    $request->securityPolicyRule->enableLogging = false;
    $request->securityPolicyRule->headerAction = new SecurityPolicyRuleHttpHeaderAction();
    $request->securityPolicyRule->headerAction->requestHeadersToAdds = [
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
    ];
    $request->securityPolicyRule->kind = 'ut';
    $request->securityPolicyRule->match = new SecurityPolicyRuleMatcher();
    $request->securityPolicyRule->match->config = new SecurityPolicyRuleMatcherConfig();
    $request->securityPolicyRule->match->config->destIpRanges = [
        'sed',
        'quas',
    ];
    $request->securityPolicyRule->match->config->layer4Configs = [
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
    ];
    $request->securityPolicyRule->match->config->srcIpRanges = [
        'fugit',
        'et',
        'reiciendis',
    ];
    $request->securityPolicyRule->match->expr = new Expr();
    $request->securityPolicyRule->match->expr->description = 'nulla';
    $request->securityPolicyRule->match->expr->expression = 'libero';
    $request->securityPolicyRule->match->expr->location = 'sed';
    $request->securityPolicyRule->match->expr->title = 'Dr.';
    $request->securityPolicyRule->match->versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum::FIREWALL;
    $request->securityPolicyRule->preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig();
    $request->securityPolicyRule->preconfiguredWafConfig->exclusions = [
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
    ];
    $request->securityPolicyRule->preview = false;
    $request->securityPolicyRule->priority = 909351;
    $request->securityPolicyRule->rateLimitOptions = new SecurityPolicyRuleRateLimitOptions();
    $request->securityPolicyRule->rateLimitOptions->banDurationSec = 331009;
    $request->securityPolicyRule->rateLimitOptions->banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->banThreshold->count = 602681;
    $request->securityPolicyRule->rateLimitOptions->banThreshold->intervalSec = 163927;
    $request->securityPolicyRule->rateLimitOptions->conformAction = 'laboriosam';
    $request->securityPolicyRule->rateLimitOptions->enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum::HTTP_PATH;
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyConfigs = [
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
    ];
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyName = 'dignissimos';
    $request->securityPolicyRule->rateLimitOptions->exceedAction = 'ab';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->target = 'quo';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::GOOGLE_RECAPTCHA;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->count = 528440;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->intervalSec = 864617;
    $request->securityPolicyRule->redirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->redirectOptions->target = 'sequi';
    $request->securityPolicyRule->redirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::GOOGLE_RECAPTCHA;
    $request->securityPolicyRule->ruleNumber = 'facere';
    $request->securityPolicyRule->ruleTupleCount = 286446;
    $request->securityPolicyRule->targetResources = [
        'quis',
    ];
    $request->securityPolicyRule->targetServiceAccounts = [
        'temporibus',
        'doloremque',
        'amet',
    ];
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'quas';
    $request->key = 'odit';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->requestId = 'aut';
    $request->securityPolicy = 'atque';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'eveniet';
    $request->userIp = 'odit';

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
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'fugit';
    $request->key = 'perferendis';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'ducimus';
    $request->requestId = 'quod';
    $request->securityPolicy = 'aut';
    $request->sourceSecurityPolicy = 'numquam';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'omnis';
    $request->userIp = 'repudiandae';

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
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'hic';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->requestId = 'distinctio';
    $request->securityPolicy = 'cum';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'repellendus';
    $request->userIp = 'incidunt';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'quae';
    $request->key = 'quae';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->securityPolicy = 'modi';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'autem';
    $request->userIp = 'repudiandae';

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
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'explicabo';
    $request->key = 'velit';
    $request->name = 'May Mosciski';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->securityPolicy = 'explicabo';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'iusto';
    $request->userIp = 'ratione';

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
    $request->accessToken = 'quam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iusto';
    $request->fields = 'quas';
    $request->key = 'nemo';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->priority = 349496;
    $request->quotaUser = 'nulla';
    $request->securityPolicy = 'tempore';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'quis';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->securityPolicy = new SecurityPolicy();
    $request->securityPolicy->adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig();
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig();
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->confidenceThreshold = 295.73;
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->expirationSec = 110436;
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->impactedBaselineThreshold = 5542.62;
    $request->securityPolicy->adaptiveProtectionConfig->autoDeployConfig->loadThreshold = 2399.58;
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig();
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig->enable = false;
    $request->securityPolicy->adaptiveProtectionConfig->layer7DdosDefenseConfig->ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum::STANDARD;
    $request->securityPolicy->advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig();
    $request->securityPolicy->advancedOptionsConfig->jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig();
    $request->securityPolicy->advancedOptionsConfig->jsonCustomConfig->contentTypes = [
        'tempore',
        'vero',
        'asperiores',
        'ea',
    ];
    $request->securityPolicy->advancedOptionsConfig->jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum::DISABLED;
    $request->securityPolicy->advancedOptionsConfig->logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum::NORMAL;
    $request->securityPolicy->advancedOptionsConfig->userIpRequestHeaders = [
        'reprehenderit',
        'consequuntur',
        'accusantium',
    ];
    $request->securityPolicy->associations = [
        new SecurityPolicyAssociation(),
        new SecurityPolicyAssociation(),
    ];
    $request->securityPolicy->creationTimestamp = 'pariatur';
    $request->securityPolicy->ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig();
    $request->securityPolicy->ddosProtectionConfig->ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum::ADVANCED_PREVIEW;
    $request->securityPolicy->description = 'facilis';
    $request->securityPolicy->displayName = 'in';
    $request->securityPolicy->fingerprint = 'ad';
    $request->securityPolicy->id = 'voluptatem';
    $request->securityPolicy->kind = 'sit';
    $request->securityPolicy->labelFingerprint = 'enim';
    $request->securityPolicy->labels = [
        'dolorum' => 'ad',
    ];
    $request->securityPolicy->name = 'Valerie Kirlin';
    $request->securityPolicy->parent = 'minus';
    $request->securityPolicy->recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig();
    $request->securityPolicy->recaptchaOptionsConfig->redirectSiteKey = 'tempora';
    $request->securityPolicy->region = 'sequi';
    $request->securityPolicy->ruleTupleCount = 615932;
    $request->securityPolicy->rules = [
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
    ];
    $request->securityPolicy->selfLink = 'quibusdam';
    $request->securityPolicy->selfLinkWithId = 'corrupti';
    $request->securityPolicy->type = SecurityPolicyTypeEnum::FIREWALL;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'explicabo';
    $request->fields = 'eaque';
    $request->key = 'hic';
    $request->oauthToken = 'incidunt';
    $request->parentId = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'eos';
    $request->requestId = 'eius';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'temporibus';
    $request->userIp = 'aliquam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'mollitia';
    $request->fields = 'porro';
    $request->filter = 'voluptas';
    $request->key = 'provident';
    $request->maxResults = 204283;
    $request->oauthToken = 'expedita';
    $request->orderBy = 'excepturi';
    $request->pageToken = 'quaerat';
    $request->parentId = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nesciunt';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'unde';
    $request->userIp = 'fugiat';

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
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'blanditiis';
    $request->fields = 'quibusdam';
    $request->key = 'odio';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->targetResource = 'officia';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'incidunt';
    $request->userIp = 'aspernatur';

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
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusantium';
    $request->fields = 'corporis';
    $request->key = 'laboriosam';
    $request->oauthToken = 'laboriosam';
    $request->parentId = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->requestId = 'vel';
    $request->securityPolicy = 'iste';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'quae';
    $request->userIp = 'doloremque';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->securityPolicy1 = new SecurityPolicy();
    $request->securityPolicy1->adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig();
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig();
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->confidenceThreshold = 8671.61;
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->expirationSec = 146693;
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->impactedBaselineThreshold = 776.57;
    $request->securityPolicy1->adaptiveProtectionConfig->autoDeployConfig->loadThreshold = 1386.48;
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig();
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig->enable = false;
    $request->securityPolicy1->adaptiveProtectionConfig->layer7DdosDefenseConfig->ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum::PREMIUM;
    $request->securityPolicy1->advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig();
    $request->securityPolicy1->advancedOptionsConfig->jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig();
    $request->securityPolicy1->advancedOptionsConfig->jsonCustomConfig->contentTypes = [
        'dolore',
        'ullam',
        'aut',
    ];
    $request->securityPolicy1->advancedOptionsConfig->jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum::STANDARD;
    $request->securityPolicy1->advancedOptionsConfig->logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum::NORMAL;
    $request->securityPolicy1->advancedOptionsConfig->userIpRequestHeaders = [
        'fugiat',
        'odio',
        'quo',
    ];
    $request->securityPolicy1->associations = [
        new SecurityPolicyAssociation(),
    ];
    $request->securityPolicy1->creationTimestamp = 'cum';
    $request->securityPolicy1->ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig();
    $request->securityPolicy1->ddosProtectionConfig->ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum::ADVANCED;
    $request->securityPolicy1->description = 'harum';
    $request->securityPolicy1->displayName = 'magnam';
    $request->securityPolicy1->fingerprint = 'illo';
    $request->securityPolicy1->id = 'atque';
    $request->securityPolicy1->kind = 'magnam';
    $request->securityPolicy1->labelFingerprint = 'incidunt';
    $request->securityPolicy1->labels = [
        'nisi' => 'quae',
    ];
    $request->securityPolicy1->name = 'Edward Balistreri Jr.';
    $request->securityPolicy1->parent = 'possimus';
    $request->securityPolicy1->recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig();
    $request->securityPolicy1->recaptchaOptionsConfig->redirectSiteKey = 'perferendis';
    $request->securityPolicy1->region = 'qui';
    $request->securityPolicy1->ruleTupleCount = 244914;
    $request->securityPolicy1->rules = [
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
        new SecurityPolicyRule(),
    ];
    $request->securityPolicy1->selfLink = 'quod';
    $request->securityPolicy1->selfLinkWithId = 'error';
    $request->securityPolicy1->type = SecurityPolicyTypeEnum::CLOUD_ARMOR;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veniam';
    $request->fields = 'animi';
    $request->key = 'delectus';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'eos';
    $request->requestId = 'id';
    $request->securityPolicyPathParameter = 'commodi';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'aliquam';
    $request->userIp = 'magnam';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesPatchRuleSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesPatchRuleSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeOrganizationSecurityPoliciesPatchRuleSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeOrganizationSecurityPoliciesPatchRuleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicyRule = new SecurityPolicyRule();
    $request->securityPolicyRule->action = 'numquam';
    $request->securityPolicyRule->description = 'iure';
    $request->securityPolicyRule->direction = SecurityPolicyRuleDirectionEnum::INGRESS;
    $request->securityPolicyRule->enableLogging = false;
    $request->securityPolicyRule->headerAction = new SecurityPolicyRuleHttpHeaderAction();
    $request->securityPolicyRule->headerAction->requestHeadersToAdds = [
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
        new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption(),
    ];
    $request->securityPolicyRule->kind = 'molestias';
    $request->securityPolicyRule->match = new SecurityPolicyRuleMatcher();
    $request->securityPolicyRule->match->config = new SecurityPolicyRuleMatcherConfig();
    $request->securityPolicyRule->match->config->destIpRanges = [
        'praesentium',
        'occaecati',
        'eos',
        'veniam',
    ];
    $request->securityPolicyRule->match->config->layer4Configs = [
        new SecurityPolicyRuleMatcherConfigLayer4Config(),
    ];
    $request->securityPolicyRule->match->config->srcIpRanges = [
        'quos',
        'provident',
        'ea',
        'consequuntur',
    ];
    $request->securityPolicyRule->match->expr = new Expr();
    $request->securityPolicyRule->match->expr->description = 'delectus';
    $request->securityPolicyRule->match->expr->expression = 'quaerat';
    $request->securityPolicyRule->match->expr->location = 'quos';
    $request->securityPolicyRule->match->expr->title = 'Ms.';
    $request->securityPolicyRule->match->versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum::FIREWALL;
    $request->securityPolicyRule->preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig();
    $request->securityPolicyRule->preconfiguredWafConfig->exclusions = [
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
        new SecurityPolicyRulePreconfiguredWafConfigExclusion(),
    ];
    $request->securityPolicyRule->preview = false;
    $request->securityPolicyRule->priority = 950599;
    $request->securityPolicyRule->rateLimitOptions = new SecurityPolicyRuleRateLimitOptions();
    $request->securityPolicyRule->rateLimitOptions->banDurationSec = 320504;
    $request->securityPolicyRule->rateLimitOptions->banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->banThreshold->count = 91613;
    $request->securityPolicyRule->rateLimitOptions->banThreshold->intervalSec = 910224;
    $request->securityPolicyRule->rateLimitOptions->conformAction = 'tempora';
    $request->securityPolicyRule->rateLimitOptions->enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum::HTTP_HEADER;
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyConfigs = [
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
        new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig(),
    ];
    $request->securityPolicyRule->rateLimitOptions->enforceOnKeyName = 'sed';
    $request->securityPolicyRule->rateLimitOptions->exceedAction = 'fugiat';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->target = 'dolorem';
    $request->securityPolicyRule->rateLimitOptions->exceedRedirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::GOOGLE_RECAPTCHA;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold();
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->count = 198788;
    $request->securityPolicyRule->rateLimitOptions->rateLimitThreshold->intervalSec = 304714;
    $request->securityPolicyRule->redirectOptions = new SecurityPolicyRuleRedirectOptions();
    $request->securityPolicyRule->redirectOptions->target = 'consectetur';
    $request->securityPolicyRule->redirectOptions->type = SecurityPolicyRuleRedirectOptionsTypeEnum::GOOGLE_RECAPTCHA;
    $request->securityPolicyRule->ruleNumber = 'suscipit';
    $request->securityPolicyRule->ruleTupleCount = 62556;
    $request->securityPolicyRule->targetResources = [
        'dignissimos',
        'atque',
    ];
    $request->securityPolicyRule->targetServiceAccounts = [
        'earum',
        'quaerat',
        'excepturi',
    ];
    $request->accessToken = 'ab';
    $request->alt = AltEnum::JSON;
    $request->callback = 'numquam';
    $request->fields = 'voluptate';
    $request->key = 'odio';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->priority = 318106;
    $request->quotaUser = 'eveniet';
    $request->requestId = 'commodi';
    $request->securityPolicy = 'magni';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'aut';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'inventore';
    $request->fields = 'ipsa';
    $request->key = 'dolore';
    $request->name = 'Genevieve Hermann';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->requestId = 'mollitia';
    $request->securityPolicy = 'placeat';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'ducimus';
    $request->userIp = 'eaque';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatem';
    $request->fields = 'quisquam';
    $request->key = 'delectus';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->priority = 762184;
    $request->quotaUser = 'a';
    $request->requestId = 'quis';
    $request->securityPolicy = 'unde';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'qui';
    $request->userIp = 'aliquid';

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
