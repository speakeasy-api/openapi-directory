# qosRules

### Available Operations

* [createNetworkSwitchQosRule](#createnetworkswitchqosrule) - Add a quality of service rule
* [deleteNetworkSwitchQosRule](#deletenetworkswitchqosrule) - Delete a quality of service rule
* [getNetworkSwitchQosRule](#getnetworkswitchqosrule) - Return a quality of service rule
* [getNetworkSwitchQosRules](#getnetworkswitchqosrules) - List quality of service rules
* [getNetworkSwitchQosRulesOrder](#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [updateNetworkSwitchQosRule](#updatenetworkswitchqosrule) - Update a quality of service rule
* [updateNetworkSwitchQosRulesOrder](#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch

## createNetworkSwitchQosRule

Add a quality of service rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchQosRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchQosRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchQosRuleRequestBodyProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchQosRuleRequest();
    $request->requestBody = new CreateNetworkSwitchQosRuleRequestBody();
    $request->requestBody->dscp = 854088;
    $request->requestBody->dstPort = 66632;
    $request->requestBody->dstPortRange = 'voluptate';
    $request->requestBody->protocol = CreateNetworkSwitchQosRuleRequestBodyProtocolEnum::ANY;
    $request->requestBody->srcPort = 928167;
    $request->requestBody->srcPortRange = 'qui';
    $request->requestBody->vlan = 620507;
    $request->networkId = 'eius';

    $response = $sdk->qosRules->createNetworkSwitchQosRule($request);

    if ($response->createNetworkSwitchQosRule201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchQosRule

Delete a quality of service rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchQosRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchQosRuleRequest();
    $request->networkId = 'veritatis';
    $request->qosRuleId = 'totam';

    $response = $sdk->qosRules->deleteNetworkSwitchQosRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchQosRule

Return a quality of service rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchQosRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchQosRuleRequest();
    $request->networkId = 'ab';
    $request->qosRuleId = 'deleniti';

    $response = $sdk->qosRules->getNetworkSwitchQosRule($request);

    if ($response->getNetworkSwitchQosRule200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchQosRules

List quality of service rules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchQosRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchQosRulesRequest();
    $request->networkId = 'maiores';

    $response = $sdk->qosRules->getNetworkSwitchQosRules($request);

    if ($response->getNetworkSwitchQosRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchQosRulesOrder

Return the quality of service rule IDs by order in which they will be processed by the switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchQosRulesOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchQosRulesOrderRequest();
    $request->networkId = 'optio';

    $response = $sdk->qosRules->getNetworkSwitchQosRulesOrder($request);

    if ($response->getNetworkSwitchQosRulesOrder200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchQosRule

Update a quality of service rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchQosRuleRequest();
    $request->requestBody = new UpdateNetworkSwitchQosRuleRequestBody();
    $request->requestBody->dscp = 399359;
    $request->requestBody->dstPort = 450405;
    $request->requestBody->dstPortRange = 'cupiditate';
    $request->requestBody->protocol = UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum::UDP;
    $request->requestBody->srcPort = 431586;
    $request->requestBody->srcPortRange = 'facilis';
    $request->requestBody->vlan = 158896;
    $request->networkId = 'delectus';
    $request->qosRuleId = 'sunt';

    $response = $sdk->qosRules->updateNetworkSwitchQosRule($request);

    if ($response->updateNetworkSwitchQosRule200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchQosRulesOrder

Update the order in which the rules should be processed by the switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRulesOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRulesOrderRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchQosRulesOrderRequest();
    $request->requestBody = new UpdateNetworkSwitchQosRulesOrderRequestBody();
    $request->requestBody->ruleIds = [
        'dolorem',
        'corporis',
    ];
    $request->networkId = 'omnis';

    $response = $sdk->qosRules->updateNetworkSwitchQosRulesOrder($request);

    if ($response->updateNetworkSwitchQosRulesOrder200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
