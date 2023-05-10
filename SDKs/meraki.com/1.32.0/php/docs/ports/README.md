# ports

### Available Operations

* [cycleDeviceSwitchPorts](#cycledeviceswitchports) - Cycle a set of switch ports
* [getDeviceSwitchPort](#getdeviceswitchport) - Return a switch port
* [getDeviceSwitchPorts](#getdeviceswitchports) - List the switch ports for a switch
* [getDeviceSwitchPortsStatuses](#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [getDeviceSwitchPortsStatusesPackets](#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [getNetworkAppliancePort](#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [getNetworkAppliancePorts](#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [getOrganizationConfigTemplateSwitchProfilePort](#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [getOrganizationConfigTemplateSwitchProfilePorts](#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [getOrganizationSwitchPortsBySwitch](#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch
* [updateDeviceSwitchPort](#updatedeviceswitchport) - Update a switch port
* [updateNetworkAppliancePort](#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.
* [updateOrganizationConfigTemplateSwitchProfilePort](#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

## cycleDeviceSwitchPorts

Cycle a set of switch ports

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CycleDeviceSwitchPortsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CycleDeviceSwitchPortsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CycleDeviceSwitchPortsRequest();
    $request->requestBody = new CycleDeviceSwitchPortsRequestBody();
    $request->requestBody->ports = [
        'consectetur',
        'occaecati',
        'impedit',
        'quam',
    ];
    $request->serial = 'saepe';

    $response = $sdk->ports->cycleDeviceSwitchPorts($request);

    if ($response->cycleDeviceSwitchPorts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchPort

Return a switch port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortRequest();
    $request->portId = 'odit';
    $request->serial = 'consectetur';

    $response = $sdk->ports->getDeviceSwitchPort($request);

    if ($response->getDeviceSwitchPort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchPorts

List the switch ports for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortsRequest();
    $request->serial = 'itaque';

    $response = $sdk->ports->getDeviceSwitchPorts($request);

    if ($response->getDeviceSwitchPorts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchPortsStatuses

Return the status for all the ports of a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortsStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortsStatusesRequest();
    $request->serial = 'impedit';
    $request->t0 = 'quidem';
    $request->timespan = 289.46;

    $response = $sdk->ports->getDeviceSwitchPortsStatuses($request);

    if ($response->getDeviceSwitchPortsStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchPortsStatusesPackets

Return the packet counters for all the ports of a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortsStatusesPacketsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortsStatusesPacketsRequest();
    $request->serial = 'voluptas';
    $request->t0 = 'aperiam';
    $request->timespan = 2556.89;

    $response = $sdk->ports->getDeviceSwitchPortsStatusesPackets($request);

    if ($response->getDeviceSwitchPortsStatusesPackets200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAppliancePort

Return per-port VLAN settings for a single MX port.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAppliancePortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAppliancePortRequest();
    $request->networkId = 'nisi';
    $request->portId = 'voluptas';

    $response = $sdk->ports->getNetworkAppliancePort($request);

    if ($response->getNetworkAppliancePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAppliancePorts

List per-port VLAN settings for all ports of a MX.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAppliancePortsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAppliancePortsRequest();
    $request->networkId = 'fugit';

    $response = $sdk->ports->getNetworkAppliancePorts($request);

    if ($response->getNetworkAppliancePorts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplateSwitchProfilePort

Return a switch profile port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateSwitchProfilePortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateSwitchProfilePortRequest();
    $request->configTemplateId = 'recusandae';
    $request->organizationId = 'magni';
    $request->portId = 'ipsum';
    $request->profileId = 'similique';

    $response = $sdk->ports->getOrganizationConfigTemplateSwitchProfilePort($request);

    if ($response->getOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplateSwitchProfilePorts

Return all the ports of a switch profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateSwitchProfilePortsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateSwitchProfilePortsRequest();
    $request->configTemplateId = 'dolor';
    $request->organizationId = 'nulla';
    $request->profileId = 'autem';

    $response = $sdk->ports->getOrganizationConfigTemplateSwitchProfilePorts($request);

    if ($response->getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSwitchPortsBySwitch

List the switchports in an organization by switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSwitchPortsBySwitchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSwitchPortsBySwitchRequest();
    $request->configurationUpdatedAfter = 'quo';
    $request->endingBefore = 'voluptas';
    $request->mac = 'quis';
    $request->macs = [
        'vero',
        'unde',
    ];
    $request->name = 'Darrel Ledner';
    $request->networkIds = [
        'ipsa',
        'consequatur',
        'sed',
        'fugiat',
    ];
    $request->organizationId = 'veritatis';
    $request->perPage = 581892;
    $request->portProfileIds = [
        'ex',
        'dolorum',
        'officia',
    ];
    $request->serial = 'natus';
    $request->serials = [
        'at',
        'neque',
        'animi',
    ];
    $request->startingAfter = 'veritatis';

    $response = $sdk->ports->getOrganizationSwitchPortsBySwitch($request);

    if ($response->getOrganizationSwitchPortsBySwitch200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSwitchPort

Update a switch port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBodyProfile;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBodyStpGuardEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBodyUdldEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSwitchPortRequest();
    $request->requestBody = new UpdateDeviceSwitchPortRequestBody();
    $request->requestBody->accessPolicyNumber = 829708;
    $request->requestBody->accessPolicyType = UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum::CUSTOM_ACCESS_POLICY;
    $request->requestBody->adaptivePolicyGroupId = 'odit';
    $request->requestBody->allowedVlans = 'amet';
    $request->requestBody->daiTrusted = false;
    $request->requestBody->enabled = false;
    $request->requestBody->flexibleStackingEnabled = false;
    $request->requestBody->isolationEnabled = false;
    $request->requestBody->linkNegotiation = 'dolores';
    $request->requestBody->macAllowList = [
        'repudiandae',
        'ut',
        'ullam',
    ];
    $request->requestBody->name = 'Dale Klein';
    $request->requestBody->peerSgtCapable = false;
    $request->requestBody->poeEnabled = false;
    $request->requestBody->portScheduleId = 'reiciendis';
    $request->requestBody->profile = new UpdateDeviceSwitchPortRequestBodyProfile();
    $request->requestBody->profile->enabled = false;
    $request->requestBody->profile->id = '2ad6bb10-e255-4fdc-880d-6e3308675cbf';
    $request->requestBody->profile->iname = 'quae';
    $request->requestBody->rstpEnabled = false;
    $request->requestBody->stickyMacAllowList = [
        'voluptas',
        'molestias',
        'nostrum',
    ];
    $request->requestBody->stickyMacAllowListLimit = 423218;
    $request->requestBody->stormControlEnabled = false;
    $request->requestBody->stpGuard = UpdateDeviceSwitchPortRequestBodyStpGuardEnum::LOOP_GUARD;
    $request->requestBody->tags = [
        'officiis',
        'deleniti',
    ];
    $request->requestBody->type = UpdateDeviceSwitchPortRequestBodyTypeEnum::ACCESS;
    $request->requestBody->udld = UpdateDeviceSwitchPortRequestBodyUdldEnum::ENFORCE;
    $request->requestBody->vlan = 816254;
    $request->requestBody->voiceVlan = 984362;
    $request->portId = 'omnis';
    $request->serial = 'assumenda';

    $response = $sdk->ports->updateDeviceSwitchPort($request);

    if ($response->updateDeviceSwitchPort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkAppliancePort

Update the per-port VLAN settings for a single MX port.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePortRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePortRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkAppliancePortRequest();
    $request->requestBody = new UpdateNetworkAppliancePortRequestBody();
    $request->requestBody->accessPolicy = 'voluptatem';
    $request->requestBody->allowedVlans = 'a';
    $request->requestBody->dropUntaggedTraffic = false;
    $request->requestBody->enabled = false;
    $request->requestBody->type = 'cumque';
    $request->requestBody->vlan = 146614;
    $request->networkId = 'deleniti';
    $request->portId = 'magni';

    $response = $sdk->ports->updateNetworkAppliancePort($request);

    if ($response->updateNetworkAppliancePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationConfigTemplateSwitchProfilePort

Update a switch profile port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationConfigTemplateSwitchProfilePortRequest();
    $request->requestBody = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody();
    $request->requestBody->accessPolicyNumber = 799929;
    $request->requestBody->accessPolicyType = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum::MAC_ALLOW_LIST;
    $request->requestBody->allowedVlans = 'ea';
    $request->requestBody->daiTrusted = false;
    $request->requestBody->enabled = false;
    $request->requestBody->flexibleStackingEnabled = false;
    $request->requestBody->isolationEnabled = false;
    $request->requestBody->linkNegotiation = 'vel';
    $request->requestBody->macAllowList = [
        'sapiente',
        'nesciunt',
        'optio',
    ];
    $request->requestBody->name = 'Lorene Hayes';
    $request->requestBody->poeEnabled = false;
    $request->requestBody->portScheduleId = 'provident';
    $request->requestBody->profile = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile();
    $request->requestBody->profile->enabled = false;
    $request->requestBody->profile->id = 'bea5d264-e41e-42ca-8482-2e513f6d9d2a';
    $request->requestBody->profile->iname = 'possimus';
    $request->requestBody->rstpEnabled = false;
    $request->requestBody->stickyMacAllowList = [
        'molestiae',
    ];
    $request->requestBody->stickyMacAllowListLimit = 798092;
    $request->requestBody->stormControlEnabled = false;
    $request->requestBody->stpGuard = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum::BPDU_GUARD;
    $request->requestBody->tags = [
        'error',
    ];
    $request->requestBody->type = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum::TRUNK;
    $request->requestBody->udld = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum::ALERT_ONLY;
    $request->requestBody->vlan = 439160;
    $request->requestBody->voiceVlan = 457558;
    $request->configTemplateId = 'nobis';
    $request->organizationId = 'quae';
    $request->portId = 'sit';
    $request->profileId = 'rerum';

    $response = $sdk->ports->updateOrganizationConfigTemplateSwitchProfilePort($request);

    if ($response->updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
