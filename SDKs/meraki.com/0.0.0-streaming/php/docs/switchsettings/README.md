# switchSettings

### Available Operations

* [createNetworkSwitchSettingsQosRule](#createnetworkswitchsettingsqosrule) - Add a quality of service rule
* [deleteNetworkSwitchSettingsQosRule](#deletenetworkswitchsettingsqosrule) - Delete a quality of service rule
* [getNetworkSwitchSettings](#getnetworkswitchsettings) - Returns the switch network settings
* [getNetworkSwitchSettingsMtu](#getnetworkswitchsettingsmtu) - Return the MTU configuration
* [getNetworkSwitchSettingsMulticast](#getnetworkswitchsettingsmulticast) - Return multicast settings for a network
* [getNetworkSwitchSettingsQosRule](#getnetworkswitchsettingsqosrule) - Return a quality of service rule
* [getNetworkSwitchSettingsQosRules](#getnetworkswitchsettingsqosrules) - List quality of service rules
* [getNetworkSwitchSettingsQosRulesOrder](#getnetworkswitchsettingsqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [getNetworkSwitchSettingsStormControl](#getnetworkswitchsettingsstormcontrol) - Return the storm control configuration for a switch network
* [updateNetworkSwitchSettings](#updatenetworkswitchsettings) - Update switch network settings
* [updateNetworkSwitchSettingsMulticast](#updatenetworkswitchsettingsmulticast) - Update multicast settings for a network
* [updateNetworkSwitchSettingsQosRule](#updatenetworkswitchsettingsqosrule) - Update a quality of service rule
* [updateNetworkSwitchSettingsQosRulesOrder](#updatenetworkswitchsettingsqosrulesorder) - Update the order in which the rules should be processed by the switch
* [updateNetworkSwitchSettingsStormControl](#updatenetworkswitchsettingsstormcontrol) - Update the storm control configuration for a switch network

## createNetworkSwitchSettingsQosRule

Add a quality of service rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchSettingsQosRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchSettingsQosRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchSettingsQosRuleRequestBodyProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchSettingsQosRuleRequest();
    $request->requestBody = new CreateNetworkSwitchSettingsQosRuleRequestBody();
    $request->requestBody->dscp = 659177;
    $request->requestBody->dstPort = 402767;
    $request->requestBody->dstPortRange = 'aliquid';
    $request->requestBody->protocol = CreateNetworkSwitchSettingsQosRuleRequestBodyProtocolEnum::ANY;
    $request->requestBody->srcPort = 999278;
    $request->requestBody->srcPortRange = 'doloribus';
    $request->requestBody->vlan = 351893;
    $request->networkId = 'in';

    $response = $sdk->switchSettings->createNetworkSwitchSettingsQosRule($request);

    if ($response->createNetworkSwitchSettingsQosRule201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchSettingsQosRule

Delete a quality of service rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchSettingsQosRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchSettingsQosRuleRequest();
    $request->networkId = 'nam';
    $request->qosRuleId = 'earum';

    $response = $sdk->switchSettings->deleteNetworkSwitchSettingsQosRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchSettings

Returns the switch network settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchSettingsRequest();
    $request->networkId = 'officia';

    $response = $sdk->switchSettings->getNetworkSwitchSettings($request);

    if ($response->getNetworkSwitchSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchSettingsMtu

Return the MTU configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchSettingsMtuRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchSettingsMtuRequest();
    $request->networkId = 'laborum';

    $response = $sdk->switchSettings->getNetworkSwitchSettingsMtu($request);

    if ($response->getNetworkSwitchSettingsMtu200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchSettingsMulticast

Return multicast settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchSettingsMulticastRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchSettingsMulticastRequest();
    $request->networkId = 'placeat';

    $response = $sdk->switchSettings->getNetworkSwitchSettingsMulticast($request);

    if ($response->getNetworkSwitchSettingsMulticast200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchSettingsQosRule

Return a quality of service rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchSettingsQosRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchSettingsQosRuleRequest();
    $request->networkId = 'modi';
    $request->qosRuleId = 'voluptatibus';

    $response = $sdk->switchSettings->getNetworkSwitchSettingsQosRule($request);

    if ($response->getNetworkSwitchSettingsQosRule200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchSettingsQosRules

List quality of service rules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchSettingsQosRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchSettingsQosRulesRequest();
    $request->networkId = 'molestias';

    $response = $sdk->switchSettings->getNetworkSwitchSettingsQosRules($request);

    if ($response->getNetworkSwitchSettingsQosRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchSettingsQosRulesOrder

Return the quality of service rule IDs by order in which they will be processed by the switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchSettingsQosRulesOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchSettingsQosRulesOrderRequest();
    $request->networkId = 'officiis';

    $response = $sdk->switchSettings->getNetworkSwitchSettingsQosRulesOrder($request);

    if ($response->getNetworkSwitchSettingsQosRulesOrder200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchSettingsStormControl

Return the storm control configuration for a switch network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchSettingsStormControlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchSettingsStormControlRequest();
    $request->networkId = 'sapiente';

    $response = $sdk->switchSettings->getNetworkSwitchSettingsStormControl($request);

    if ($response->getNetworkSwitchSettingsStormControl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchSettings

Update switch network settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsRequestBodyPowerExceptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchSettingsRequest();
    $request->requestBody = new UpdateNetworkSwitchSettingsRequestBody();
    $request->requestBody->powerExceptions = [
        new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(),
        new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(),
        new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(),
        new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(),
    ];
    $request->requestBody->useCombinedPower = false;
    $request->requestBody->vlan = 113486;
    $request->networkId = 'rerum';

    $response = $sdk->switchSettings->updateNetworkSwitchSettings($request);

    if ($response->updateNetworkSwitchSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchSettingsMulticast

Update multicast settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsMulticastRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsMulticastRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsMulticastRequestBodyDefaultSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsMulticastRequestBodyOverrides;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchSettingsMulticastRequest();
    $request->requestBody = new UpdateNetworkSwitchSettingsMulticastRequestBody();
    $request->requestBody->defaultSettings = new UpdateNetworkSwitchSettingsMulticastRequestBodyDefaultSettings();
    $request->requestBody->defaultSettings->floodUnknownMulticastTrafficEnabled = false;
    $request->requestBody->defaultSettings->igmpSnoopingEnabled = false;
    $request->requestBody->overrides = [
        new UpdateNetworkSwitchSettingsMulticastRequestBodyOverrides(),
        new UpdateNetworkSwitchSettingsMulticastRequestBodyOverrides(),
    ];
    $request->networkId = 'quis';

    $response = $sdk->switchSettings->updateNetworkSwitchSettingsMulticast($request);

    if ($response->updateNetworkSwitchSettingsMulticast200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchSettingsQosRule

Update a quality of service rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsQosRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsQosRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsQosRuleRequestBodyProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchSettingsQosRuleRequest();
    $request->requestBody = new UpdateNetworkSwitchSettingsQosRuleRequestBody();
    $request->requestBody->dscp = 82057;
    $request->requestBody->dstPort = 147685;
    $request->requestBody->dstPortRange = 'cumque';
    $request->requestBody->protocol = UpdateNetworkSwitchSettingsQosRuleRequestBodyProtocolEnum::ANY;
    $request->requestBody->srcPort = 21688;
    $request->requestBody->srcPortRange = 'velit';
    $request->requestBody->vlan = 137251;
    $request->networkId = 'eum';
    $request->qosRuleId = 'eius';

    $response = $sdk->switchSettings->updateNetworkSwitchSettingsQosRule($request);

    if ($response->updateNetworkSwitchSettingsQosRule200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchSettingsQosRulesOrder

Update the order in which the rules should be processed by the switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsQosRulesOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsQosRulesOrderRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchSettingsQosRulesOrderRequest();
    $request->requestBody = new UpdateNetworkSwitchSettingsQosRulesOrderRequestBody();
    $request->requestBody->ruleIds = [
        'at',
        'impedit',
        'eos',
    ];
    $request->networkId = 'sapiente';

    $response = $sdk->switchSettings->updateNetworkSwitchSettingsQosRulesOrder($request);

    if ($response->updateNetworkSwitchSettingsQosRulesOrder200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchSettingsStormControl

Update the storm control configuration for a switch network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsStormControlRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsStormControlRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchSettingsStormControlRequest();
    $request->requestBody = new UpdateNetworkSwitchSettingsStormControlRequestBody();
    $request->requestBody->broadcastThreshold = 433279;
    $request->requestBody->multicastThreshold = 117320;
    $request->requestBody->unknownUnicastThreshold = 325118;
    $request->networkId = 'beatae';

    $response = $sdk->switchSettings->updateNetworkSwitchSettingsStormControl($request);

    if ($response->updateNetworkSwitchSettingsStormControl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
