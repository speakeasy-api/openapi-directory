# repricingrules

### Available Operations

* [contentRepricingrulesCreate](#contentrepricingrulescreate) - Creates a repricing rule for your Merchant Center account.
* [contentRepricingrulesDelete](#contentrepricingrulesdelete) - Deletes a repricing rule in your Merchant Center account.
* [contentRepricingrulesGet](#contentrepricingrulesget) - Retrieves a repricing rule from your Merchant Center account.
* [contentRepricingrulesList](#contentrepricingruleslist) - Lists the repricing rules in your Merchant Center account.
* [contentRepricingrulesPatch](#contentrepricingrulespatch) - Updates a repricing rule in your Merchant Center account. All mutable fields will be overwritten in each update request. In each update, you must provide all required mutable fields, or an error will be thrown. If you do not provide an optional field in the update request, if that field currently exists, it will be deleted from the rule.
* [contentRepricingrulesRepricingreportsList](#contentrepricingrulesrepricingreportslist) - Lists the metrics report for a given Repricing rule.

## contentRepricingrulesCreate

Creates a repricing rule for your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentRepricingrulesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleInput;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleCostOfGoodsSaleRule;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleEffectiveTime;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleEffectiveTimeFixedTimePeriod;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleEligibleOfferMatcher;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleEligibleOfferMatcherStringMatcher;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleEligibleOfferMatcherMatcherOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleRestriction;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleRestrictionBoundary;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleStatsBasedRule;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentRepricingrulesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentRepricingrulesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->repricingRuleInput = new RepricingRuleInput();
    $request->repricingRuleInput->cogsBasedRule = new RepricingRuleCostOfGoodsSaleRule();
    $request->repricingRuleInput->cogsBasedRule->percentageDelta = 65118;
    $request->repricingRuleInput->cogsBasedRule->priceDelta = 'deleniti';
    $request->repricingRuleInput->countryCode = 'PK';
    $request->repricingRuleInput->effectiveTimePeriod = new RepricingRuleEffectiveTime();
    $request->repricingRuleInput->effectiveTimePeriod->fixedTimePeriods = [
        new RepricingRuleEffectiveTimeFixedTimePeriod(),
        new RepricingRuleEffectiveTimeFixedTimePeriod(),
        new RepricingRuleEffectiveTimeFixedTimePeriod(),
        new RepricingRuleEffectiveTimeFixedTimePeriod(),
    ];
    $request->repricingRuleInput->eligibleOfferMatcher = new RepricingRuleEligibleOfferMatcher();
    $request->repricingRuleInput->eligibleOfferMatcher->brandMatcher = new RepricingRuleEligibleOfferMatcherStringMatcher();
    $request->repricingRuleInput->eligibleOfferMatcher->brandMatcher->strAttributes = [
        'aliquid',
        'sed',
        'beatae',
    ];
    $request->repricingRuleInput->eligibleOfferMatcher->itemGroupIdMatcher = new RepricingRuleEligibleOfferMatcherStringMatcher();
    $request->repricingRuleInput->eligibleOfferMatcher->itemGroupIdMatcher->strAttributes = [
        'ea',
        'animi',
        'dolore',
    ];
    $request->repricingRuleInput->eligibleOfferMatcher->matcherOption = RepricingRuleEligibleOfferMatcherMatcherOptionEnum::MATCHER_OPTION_ALL_PRODUCTS;
    $request->repricingRuleInput->eligibleOfferMatcher->offerIdMatcher = new RepricingRuleEligibleOfferMatcherStringMatcher();
    $request->repricingRuleInput->eligibleOfferMatcher->offerIdMatcher->strAttributes = [
        'esse',
        'animi',
    ];
    $request->repricingRuleInput->eligibleOfferMatcher->skipWhenOnPromotion = false;
    $request->repricingRuleInput->languageCode = 'laudantium';
    $request->repricingRuleInput->paused = false;
    $request->repricingRuleInput->restriction = new RepricingRuleRestriction();
    $request->repricingRuleInput->restriction->floor = new RepricingRuleRestrictionBoundary();
    $request->repricingRuleInput->restriction->floor->percentageDelta = 461050;
    $request->repricingRuleInput->restriction->floor->priceDelta = 'eveniet';
    $request->repricingRuleInput->restriction->useAutoPricingMinPrice = false;
    $request->repricingRuleInput->statsBasedRule = new RepricingRuleStatsBasedRule();
    $request->repricingRuleInput->statsBasedRule->percentageDelta = 935161;
    $request->repricingRuleInput->statsBasedRule->priceDelta = 'velit';
    $request->repricingRuleInput->title = 'Dr.';
    $request->repricingRuleInput->type = RepricingRuleTypeEnum::TYPE_STATS_BASED;
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'ipsam';
    $request->key = 'explicabo';
    $request->merchantId = 'impedit';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->ruleId = 'facilis';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new ContentRepricingrulesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->repricingrules->contentRepricingrulesCreate($request, $requestSecurity);

    if ($response->repricingRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentRepricingrulesDelete

Deletes a repricing rule in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentRepricingrulesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentRepricingrulesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentRepricingrulesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eveniet';
    $request->fields = 'dolor';
    $request->key = 'expedita';
    $request->merchantId = 'libero';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'illo';
    $request->ruleId = 'minus';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new ContentRepricingrulesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->repricingrules->contentRepricingrulesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentRepricingrulesGet

Retrieves a repricing rule from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentRepricingrulesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentRepricingrulesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentRepricingrulesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'aperiam';
    $request->key = 'voluptates';
    $request->merchantId = 'laudantium';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->ruleId = 'omnis';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new ContentRepricingrulesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->repricingrules->contentRepricingrulesGet($request, $requestSecurity);

    if ($response->repricingRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentRepricingrulesList

Lists the repricing rules in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentRepricingrulesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentRepricingrulesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentRepricingrulesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::JSON;
    $request->callback = 'earum';
    $request->countryCode = 'BL';
    $request->fields = 'aliquam';
    $request->key = 'labore';
    $request->languageCode = 'maiores';
    $request->merchantId = 'sequi';
    $request->oauthToken = 'saepe';
    $request->pageSize = 8904;
    $request->pageToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'quisquam';

    $requestSecurity = new ContentRepricingrulesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->repricingrules->contentRepricingrulesList($request, $requestSecurity);

    if ($response->listRepricingRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentRepricingrulesPatch

Updates a repricing rule in your Merchant Center account. All mutable fields will be overwritten in each update request. In each update, you must provide all required mutable fields, or an error will be thrown. If you do not provide an optional field in the update request, if that field currently exists, it will be deleted from the rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentRepricingrulesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleInput;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleCostOfGoodsSaleRule;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleEffectiveTime;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleEffectiveTimeFixedTimePeriod;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleEligibleOfferMatcher;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleEligibleOfferMatcherStringMatcher;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleEligibleOfferMatcherMatcherOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleRestriction;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleRestrictionBoundary;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleStatsBasedRule;
use \OpenAPI\OpenAPI\Models\Shared\RepricingRuleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentRepricingrulesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentRepricingrulesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->repricingRuleInput = new RepricingRuleInput();
    $request->repricingRuleInput->cogsBasedRule = new RepricingRuleCostOfGoodsSaleRule();
    $request->repricingRuleInput->cogsBasedRule->percentageDelta = 302878;
    $request->repricingRuleInput->cogsBasedRule->priceDelta = 'dolorum';
    $request->repricingRuleInput->countryCode = 'NC';
    $request->repricingRuleInput->effectiveTimePeriod = new RepricingRuleEffectiveTime();
    $request->repricingRuleInput->effectiveTimePeriod->fixedTimePeriods = [
        new RepricingRuleEffectiveTimeFixedTimePeriod(),
        new RepricingRuleEffectiveTimeFixedTimePeriod(),
    ];
    $request->repricingRuleInput->eligibleOfferMatcher = new RepricingRuleEligibleOfferMatcher();
    $request->repricingRuleInput->eligibleOfferMatcher->brandMatcher = new RepricingRuleEligibleOfferMatcherStringMatcher();
    $request->repricingRuleInput->eligibleOfferMatcher->brandMatcher->strAttributes = [
        'sequi',
        'porro',
        'laborum',
        'nobis',
    ];
    $request->repricingRuleInput->eligibleOfferMatcher->itemGroupIdMatcher = new RepricingRuleEligibleOfferMatcherStringMatcher();
    $request->repricingRuleInput->eligibleOfferMatcher->itemGroupIdMatcher->strAttributes = [
        'omnis',
        'aut',
        'ipsam',
        'officia',
    ];
    $request->repricingRuleInput->eligibleOfferMatcher->matcherOption = RepricingRuleEligibleOfferMatcherMatcherOptionEnum::MATCHER_OPTION_USE_FEED_ATTRIBUTE;
    $request->repricingRuleInput->eligibleOfferMatcher->offerIdMatcher = new RepricingRuleEligibleOfferMatcherStringMatcher();
    $request->repricingRuleInput->eligibleOfferMatcher->offerIdMatcher->strAttributes = [
        'quia',
        'necessitatibus',
    ];
    $request->repricingRuleInput->eligibleOfferMatcher->skipWhenOnPromotion = false;
    $request->repricingRuleInput->languageCode = 'accusantium';
    $request->repricingRuleInput->paused = false;
    $request->repricingRuleInput->restriction = new RepricingRuleRestriction();
    $request->repricingRuleInput->restriction->floor = new RepricingRuleRestrictionBoundary();
    $request->repricingRuleInput->restriction->floor->percentageDelta = 321473;
    $request->repricingRuleInput->restriction->floor->priceDelta = 'nisi';
    $request->repricingRuleInput->restriction->useAutoPricingMinPrice = false;
    $request->repricingRuleInput->statsBasedRule = new RepricingRuleStatsBasedRule();
    $request->repricingRuleInput->statsBasedRule->percentageDelta = 474185;
    $request->repricingRuleInput->statsBasedRule->priceDelta = 'quia';
    $request->repricingRuleInput->title = 'Ms.';
    $request->repricingRuleInput->type = RepricingRuleTypeEnum::REPRICING_RULE_TYPE_UNSPECIFIED;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'expedita';
    $request->fields = 'eos';
    $request->key = 'repellendus';
    $request->merchantId = 'nesciunt';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->ruleId = 'dolore';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new ContentRepricingrulesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->repricingrules->contentRepricingrulesPatch($request, $requestSecurity);

    if ($response->repricingRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentRepricingrulesRepricingreportsList

Lists the metrics report for a given Repricing rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentRepricingrulesRepricingreportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentRepricingrulesRepricingreportsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentRepricingrulesRepricingreportsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'est';
    $request->endDate = 'aliquam';
    $request->fields = 'delectus';
    $request->key = 'culpa';
    $request->merchantId = 'voluptatum';
    $request->oauthToken = 'iusto';
    $request->pageSize = 802069;
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->ruleId = 'non';
    $request->startDate = 'ullam';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new ContentRepricingrulesRepricingreportsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->repricingrules->contentRepricingrulesRepricingreportsList($request, $requestSecurity);

    if ($response->listRepricingRuleReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
