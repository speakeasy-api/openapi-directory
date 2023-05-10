# groupPolicies

### Available Operations

* [createNetworkGroupPolicy](#createnetworkgrouppolicy) - Create a group policy
* [deleteNetworkGroupPolicy](#deletenetworkgrouppolicy) - Delete a group policy
* [getNetworkGroupPolicies](#getnetworkgrouppolicies) - List the group policies in a network
* [getNetworkGroupPolicy](#getnetworkgrouppolicy) - Display a group policy
* [updateNetworkGroupPolicy](#updatenetworkgrouppolicy) - Update a group policy

## createNetworkGroupPolicy

Create a group policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBandwidth;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBonjourForwarding;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFiltering;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyScheduling;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingFriday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingMonday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingSaturday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingSunday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingThursday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingTuesday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingWednesday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyVlanTagging;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkGroupPolicyRequest();
    $request->requestBody = new CreateNetworkGroupPolicyRequestBody();
    $request->requestBody->bandwidth = new CreateNetworkGroupPolicyRequestBodyBandwidth();
    $request->requestBody->bandwidth->bandwidthLimits = new CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits();
    $request->requestBody->bandwidth->bandwidthLimits->limitDown = 762148;
    $request->requestBody->bandwidth->bandwidthLimits->limitUp = 774960;
    $request->requestBody->bandwidth->settings = CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum::IGNORE;
    $request->requestBody->bonjourForwarding = new CreateNetworkGroupPolicyRequestBodyBonjourForwarding();
    $request->requestBody->bonjourForwarding->rules = [
        new CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules(),
    ];
    $request->requestBody->bonjourForwarding->settings = CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->contentFiltering = new CreateNetworkGroupPolicyRequestBodyContentFiltering();
    $request->requestBody->contentFiltering->allowedUrlPatterns = new CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns();
    $request->requestBody->contentFiltering->allowedUrlPatterns->patterns = [
        'culpa',
        'consectetur',
        'nostrum',
    ];
    $request->requestBody->contentFiltering->allowedUrlPatterns->settings = CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum::APPEND;
    $request->requestBody->contentFiltering->blockedUrlCategories = new CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories();
    $request->requestBody->contentFiltering->blockedUrlCategories->categories = [
        'porro',
    ];
    $request->requestBody->contentFiltering->blockedUrlCategories->settings = CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->contentFiltering->blockedUrlPatterns = new CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns();
    $request->requestBody->contentFiltering->blockedUrlPatterns->patterns = [
        'voluptate',
    ];
    $request->requestBody->contentFiltering->blockedUrlPatterns->settings = CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->firewallAndTrafficShaping = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping();
    $request->requestBody->firewallAndTrafficShaping->l3FirewallRules = [
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
    ];
    $request->requestBody->firewallAndTrafficShaping->l7FirewallRules = [
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules(),
    ];
    $request->requestBody->firewallAndTrafficShaping->settings = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum::IGNORE;
    $request->requestBody->firewallAndTrafficShaping->trafficShapingRules = [
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(),
    ];
    $request->requestBody->name = 'Miss Stella Hansen Jr.';
    $request->requestBody->scheduling = new CreateNetworkGroupPolicyRequestBodyScheduling();
    $request->requestBody->scheduling->enabled = false;
    $request->requestBody->scheduling->friday = new CreateNetworkGroupPolicyRequestBodySchedulingFriday();
    $request->requestBody->scheduling->friday->active = false;
    $request->requestBody->scheduling->friday->from = 'accusamus';
    $request->requestBody->scheduling->friday->to = 'sint';
    $request->requestBody->scheduling->monday = new CreateNetworkGroupPolicyRequestBodySchedulingMonday();
    $request->requestBody->scheduling->monday->active = false;
    $request->requestBody->scheduling->monday->from = 'commodi';
    $request->requestBody->scheduling->monday->to = 'voluptas';
    $request->requestBody->scheduling->saturday = new CreateNetworkGroupPolicyRequestBodySchedulingSaturday();
    $request->requestBody->scheduling->saturday->active = false;
    $request->requestBody->scheduling->saturday->from = 'eveniet';
    $request->requestBody->scheduling->saturday->to = 'eligendi';
    $request->requestBody->scheduling->sunday = new CreateNetworkGroupPolicyRequestBodySchedulingSunday();
    $request->requestBody->scheduling->sunday->active = false;
    $request->requestBody->scheduling->sunday->from = 'ducimus';
    $request->requestBody->scheduling->sunday->to = 'dolorem';
    $request->requestBody->scheduling->thursday = new CreateNetworkGroupPolicyRequestBodySchedulingThursday();
    $request->requestBody->scheduling->thursday->active = false;
    $request->requestBody->scheduling->thursday->from = 'eum';
    $request->requestBody->scheduling->thursday->to = 'possimus';
    $request->requestBody->scheduling->tuesday = new CreateNetworkGroupPolicyRequestBodySchedulingTuesday();
    $request->requestBody->scheduling->tuesday->active = false;
    $request->requestBody->scheduling->tuesday->from = 'dolore';
    $request->requestBody->scheduling->tuesday->to = 'neque';
    $request->requestBody->scheduling->wednesday = new CreateNetworkGroupPolicyRequestBodySchedulingWednesday();
    $request->requestBody->scheduling->wednesday->active = false;
    $request->requestBody->scheduling->wednesday->from = 'inventore';
    $request->requestBody->scheduling->wednesday->to = 'omnis';
    $request->requestBody->splashAuthSettings = CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum::BYPASS;
    $request->requestBody->vlanTagging = new CreateNetworkGroupPolicyRequestBodyVlanTagging();
    $request->requestBody->vlanTagging->settings = CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum::CUSTOM;
    $request->requestBody->vlanTagging->vlanId = 'omnis';
    $request->networkId = 'corrupti';

    $response = $sdk->groupPolicies->createNetworkGroupPolicy($request);

    if ($response->createNetworkGroupPolicy201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkGroupPolicy

Delete a group policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkGroupPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkGroupPolicyRequest();
    $request->groupPolicyId = 'optio';
    $request->networkId = 'molestiae';

    $response = $sdk->groupPolicies->deleteNetworkGroupPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkGroupPolicies

List the group policies in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkGroupPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkGroupPoliciesRequest();
    $request->networkId = 'atque';

    $response = $sdk->groupPolicies->getNetworkGroupPolicies($request);

    if ($response->getNetworkGroupPolicies200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkGroupPolicy

Display a group policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkGroupPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkGroupPolicyRequest();
    $request->groupPolicyId = 'dolor';
    $request->networkId = 'optio';

    $response = $sdk->groupPolicies->getNetworkGroupPolicy($request);

    if ($response->getNetworkGroupPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkGroupPolicy

Update a group policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBandwidth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBonjourForwarding;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFiltering;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyScheduling;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingFriday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingMonday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingSaturday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingSunday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingThursday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingTuesday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingWednesday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyVlanTagging;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkGroupPolicyRequest();
    $request->requestBody = new UpdateNetworkGroupPolicyRequestBody();
    $request->requestBody->bandwidth = new UpdateNetworkGroupPolicyRequestBodyBandwidth();
    $request->requestBody->bandwidth->bandwidthLimits = new UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits();
    $request->requestBody->bandwidth->bandwidthLimits->limitDown = 583657;
    $request->requestBody->bandwidth->bandwidthLimits->limitUp = 157751;
    $request->requestBody->bandwidth->settings = UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum::CUSTOM;
    $request->requestBody->bonjourForwarding = new UpdateNetworkGroupPolicyRequestBodyBonjourForwarding();
    $request->requestBody->bonjourForwarding->rules = [
        new UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules(),
        new UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules(),
        new UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules(),
    ];
    $request->requestBody->bonjourForwarding->settings = UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum::IGNORE;
    $request->requestBody->contentFiltering = new UpdateNetworkGroupPolicyRequestBodyContentFiltering();
    $request->requestBody->contentFiltering->allowedUrlPatterns = new UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns();
    $request->requestBody->contentFiltering->allowedUrlPatterns->patterns = [
        'fugiat',
        'ipsum',
        'pariatur',
        'amet',
    ];
    $request->requestBody->contentFiltering->allowedUrlPatterns->settings = UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->contentFiltering->blockedUrlCategories = new UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories();
    $request->requestBody->contentFiltering->blockedUrlCategories->categories = [
        'quam',
        'placeat',
        'est',
    ];
    $request->requestBody->contentFiltering->blockedUrlCategories->settings = UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum::APPEND;
    $request->requestBody->contentFiltering->blockedUrlPatterns = new UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns();
    $request->requestBody->contentFiltering->blockedUrlPatterns->patterns = [
        'veniam',
        'minus',
        'similique',
        'corrupti',
    ];
    $request->requestBody->contentFiltering->blockedUrlPatterns->settings = UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->firewallAndTrafficShaping = new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping();
    $request->requestBody->firewallAndTrafficShaping->l3FirewallRules = [
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
    ];
    $request->requestBody->firewallAndTrafficShaping->l7FirewallRules = [
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules(),
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules(),
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules(),
    ];
    $request->requestBody->firewallAndTrafficShaping->settings = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum::IGNORE;
    $request->requestBody->firewallAndTrafficShaping->trafficShapingRules = [
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(),
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(),
    ];
    $request->requestBody->name = 'Pat Wisozk';
    $request->requestBody->scheduling = new UpdateNetworkGroupPolicyRequestBodyScheduling();
    $request->requestBody->scheduling->enabled = false;
    $request->requestBody->scheduling->friday = new UpdateNetworkGroupPolicyRequestBodySchedulingFriday();
    $request->requestBody->scheduling->friday->active = false;
    $request->requestBody->scheduling->friday->from = 'pariatur';
    $request->requestBody->scheduling->friday->to = 'commodi';
    $request->requestBody->scheduling->monday = new UpdateNetworkGroupPolicyRequestBodySchedulingMonday();
    $request->requestBody->scheduling->monday->active = false;
    $request->requestBody->scheduling->monday->from = 'iste';
    $request->requestBody->scheduling->monday->to = 'corrupti';
    $request->requestBody->scheduling->saturday = new UpdateNetworkGroupPolicyRequestBodySchedulingSaturday();
    $request->requestBody->scheduling->saturday->active = false;
    $request->requestBody->scheduling->saturday->from = 'iste';
    $request->requestBody->scheduling->saturday->to = 'distinctio';
    $request->requestBody->scheduling->sunday = new UpdateNetworkGroupPolicyRequestBodySchedulingSunday();
    $request->requestBody->scheduling->sunday->active = false;
    $request->requestBody->scheduling->sunday->from = 'in';
    $request->requestBody->scheduling->sunday->to = 'consequuntur';
    $request->requestBody->scheduling->thursday = new UpdateNetworkGroupPolicyRequestBodySchedulingThursday();
    $request->requestBody->scheduling->thursday->active = false;
    $request->requestBody->scheduling->thursday->from = 'voluptatem';
    $request->requestBody->scheduling->thursday->to = 'voluptas';
    $request->requestBody->scheduling->tuesday = new UpdateNetworkGroupPolicyRequestBodySchedulingTuesday();
    $request->requestBody->scheduling->tuesday->active = false;
    $request->requestBody->scheduling->tuesday->from = 'magnam';
    $request->requestBody->scheduling->tuesday->to = 'ad';
    $request->requestBody->scheduling->wednesday = new UpdateNetworkGroupPolicyRequestBodySchedulingWednesday();
    $request->requestBody->scheduling->wednesday->active = false;
    $request->requestBody->scheduling->wednesday->from = 'quae';
    $request->requestBody->scheduling->wednesday->to = 'ipsa';
    $request->requestBody->splashAuthSettings = UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum::BYPASS;
    $request->requestBody->vlanTagging = new UpdateNetworkGroupPolicyRequestBodyVlanTagging();
    $request->requestBody->vlanTagging->settings = UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum::IGNORE;
    $request->requestBody->vlanTagging->vlanId = 'illum';
    $request->groupPolicyId = 'et';
    $request->networkId = 'perspiciatis';

    $response = $sdk->groupPolicies->updateNetworkGroupPolicy($request);

    if ($response->updateNetworkGroupPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
