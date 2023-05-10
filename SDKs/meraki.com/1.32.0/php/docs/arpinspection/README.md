# arpInspection

### Available Operations

* [createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
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
    $request->requestBody->ipv4->address = '3304 Leta Plaza';
    $request->requestBody->mac = 'ab';
    $request->requestBody->vlan = 625358;
    $request->networkId = 'possimus';

    $response = $sdk->arpInspection->createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer($request);

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
    $request->networkId = 'voluptates';
    $request->trustedServerId = 'mollitia';

    $response = $sdk->arpInspection->deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer($request);

    if ($response->statusCode === 200) {
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
    $request->endingBefore = 'laborum';
    $request->networkId = 'libero';
    $request->perPage = 324083;
    $request->startingAfter = 'deleniti';

    $response = $sdk->arpInspection->getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers($request);

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
    $request->endingBefore = 'enim';
    $request->networkId = 'vitae';
    $request->perPage = 833316;
    $request->startingAfter = 'ex';

    $response = $sdk->arpInspection->getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice($request);

    if ($response->getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ApplicationJSONObjects !== null) {
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
    $request->requestBody->ipv4->address = '423 Bartell Mount';
    $request->requestBody->mac = 'cum';
    $request->requestBody->vlan = 399660;
    $request->networkId = 'beatae';
    $request->trustedServerId = 'voluptatum';

    $response = $sdk->arpInspection->updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer($request);

    if ($response->updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
