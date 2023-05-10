# firewallActions

### Available Operations

* [getFirewallsIdActions](#getfirewallsidactions) - Get all Actions for a Firewall
* [getFirewallsIdActionsActionId](#getfirewallsidactionsactionid) - Get an Action for a Firewall
* [postFirewallsIdActionsApplyToResources](#postfirewallsidactionsapplytoresources) - Apply to Resources
* [postFirewallsIdActionsRemoveFromResources](#postfirewallsidactionsremovefromresources) - Remove from Resources
* [postFirewallsIdActionsSetRules](#postfirewallsidactionssetrules) - Set Rules

## getFirewallsIdActions

Returns all Action objects for a Firewall. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallsIdActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallsIdActionsSortParameterSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallsIdActionsStatusParameterStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFirewallsIdActionsRequest();
    $request->id = 143353;
    $request->sort = GetFirewallsIdActionsSortParameterSortEnum::PROGRESS;
    $request->status = GetFirewallsIdActionsStatusParameterStatusEnum::ERROR;

    $response = $sdk->firewallActions->getFirewallsIdActions($request);

    if ($response->actionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFirewallsIdActionsActionId

Returns a specific Action for a Firewall.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallsIdActionsActionIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFirewallsIdActionsActionIdRequest();
    $request->actionId = 758616;
    $request->id = 521848;

    $response = $sdk->firewallActions->getFirewallsIdActionsActionId($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFirewallsIdActionsApplyToResources

Applies one Firewall to multiple resources.

Currently servers (public network interface) and label selectors are supported.

#### Call specific error codes

| Code                          | Description                                                   |
|-------------------------------|---------------------------------------------------------------|
| `firewall_already_applied`    | Firewall was already applied on resource                      |
| `incompatible_network_type`   | The Network type is incompatible for the given resource       |
| `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsApplyToResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFirewallsIdActionsApplyToResourcesRequest();
    $request->requestBody = new PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest();
    $request->requestBody->applyTo = [
        new PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources(),
    ];
    $request->id = 414662;

    $response = $sdk->firewallActions->postFirewallsIdActionsApplyToResources($request);

    if ($response->actionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFirewallsIdActionsRemoveFromResources

Removes one Firewall from multiple resources.

Currently only Servers (and their public network interfaces) are supported.

#### Call specific error codes

| Code                                  | Description                                                            |
|---------------------------------------|------------------------------------------------------------------------|
| `firewall_already_removed`            | Firewall was already removed from the resource                         |
| `firewall_resource_not_found`         | The resource the Firewall should be attached to was not found          |
| `firewall_managed_by_label_selector`  | Firewall was applied via label selector and cannot be removed manually |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsRemoveFromResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFirewallsIdActionsRemoveFromResourcesRequest();
    $request->requestBody = new PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest();
    $request->requestBody->removeFrom = [
        new PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources(),
        new PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources(),
    ];
    $request->id = 264555;

    $response = $sdk->firewallActions->postFirewallsIdActionsRemoveFromResources($request);

    if ($response->actionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFirewallsIdActionsSetRules

Sets the rules of a Firewall.

All existing rules will be overwritten. Pass an empty `rules` array to remove all rules.
The maximum amount of rules that can be defined is 50.

#### Call specific error codes

| Code                          | Description                                                   |
|-------------------------------|---------------------------------------------------------------|
| `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsSetRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsSetRulesSetRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsSetRulesSetRulesRequestRule;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFirewallsIdActionsSetRulesRequest();
    $request->requestBody = new PostFirewallsIdActionsSetRulesSetRulesRequest();
    $request->requestBody->rules = [
        new PostFirewallsIdActionsSetRulesSetRulesRequestRule(),
    ];
    $request->id = 774234;

    $response = $sdk->firewallActions->postFirewallsIdActionsSetRules($request);

    if ($response->actionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
