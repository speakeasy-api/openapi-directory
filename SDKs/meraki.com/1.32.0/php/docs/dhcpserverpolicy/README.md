# dhcpServerPolicy

### Available Operations

* [createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicy](#getnetworkswitchdhcpserverpolicy) - Return the DHCP server settings
* [getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [updateNetworkSwitchDhcpServerPolicy](#updatenetworkswitchdhcpserverpolicy) - Update the DHCP server settings
* [updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network

## createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Add a server to be trusted by Dynamic ARP Inspection on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest();
    $request->requestBody = new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody();
    $request->requestBody->ipv4 = new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4();
    $request->requestBody->ipv4->address = '9029 Dawson Rue';
    $request->requestBody->mac = 'similique';
    $request->requestBody->vlan = 486374;
    $request->networkId = 'unde';

    $response = $sdk->dhcpServerPolicy->createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer($request);

    if ($response->createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Remove a server from being trusted by Dynamic ARP Inspection on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest();
    $request->networkId = 'asperiores';
    $request->trustedServerId = 'nam';

    $response = $sdk->dhcpServerPolicy->deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchDhcpServerPolicy

Return the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDhcpServerPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDhcpServerPolicyRequest();
    $request->networkId = 'provident';

    $response = $sdk->dhcpServerPolicy->getNetworkSwitchDhcpServerPolicy($request);

    if ($response->getNetworkSwitchDhcpServerPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers

Return the list of servers trusted by Dynamic ARP Inspection on this network. These are also known as whitelisted snoop entries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest();
    $request->endingBefore = 'fugiat';
    $request->networkId = 'recusandae';
    $request->perPage = 252685;
    $request->startingAfter = 'aut';

    $response = $sdk->dhcpServerPolicy->getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers($request);

    if ($response->getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice

Return the devices that have a Dynamic ARP Inspection warning and their warnings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest();
    $request->endingBefore = 'neque';
    $request->networkId = 'quia';
    $request->perPage = 746232;
    $request->startingAfter = 'fuga';

    $response = $sdk->dhcpServerPolicy->getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice($request);

    if ($response->getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchDhcpServerPolicy

Update the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlerts;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlertsEmail;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequestBodyArpInspection;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchDhcpServerPolicyRequest();
    $request->requestBody = new UpdateNetworkSwitchDhcpServerPolicyRequestBody();
    $request->requestBody->alerts = new UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlerts();
    $request->requestBody->alerts->email = new UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlertsEmail();
    $request->requestBody->alerts->email->enabled = false;
    $request->requestBody->allowedServers = [
        'commodi',
    ];
    $request->requestBody->arpInspection = new UpdateNetworkSwitchDhcpServerPolicyRequestBodyArpInspection();
    $request->requestBody->arpInspection->enabled = false;
    $request->requestBody->blockedServers = [
        'temporibus',
        'sequi',
        'eum',
        'rem',
    ];
    $request->requestBody->defaultPolicy = UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum::BLOCK;
    $request->networkId = 'animi';

    $response = $sdk->dhcpServerPolicy->updateNetworkSwitchDhcpServerPolicy($request);

    if ($response->updateNetworkSwitchDhcpServerPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Update a server that is trusted by Dynamic ARP Inspection on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest();
    $request->requestBody = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody();
    $request->requestBody->ipv4 = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4();
    $request->requestBody->ipv4->address = '1137 Quigley Fort';
    $request->requestBody->mac = 'dicta';
    $request->requestBody->vlan = 344198;
    $request->networkId = 'molestias';
    $request->trustedServerId = 'neque';

    $response = $sdk->dhcpServerPolicy->updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer($request);

    if ($response->updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
