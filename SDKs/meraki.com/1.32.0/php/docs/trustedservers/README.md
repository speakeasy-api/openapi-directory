# trustedServers

### Available Operations

* [createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
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
    $request->requestBody->ipv4->address = '207 Weber Canyon';
    $request->requestBody->mac = 'non';
    $request->requestBody->vlan = 262883;
    $request->networkId = 'cupiditate';

    $response = $sdk->trustedServers->createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer($request);

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
    $request->networkId = 'sit';
    $request->trustedServerId = 'minus';

    $response = $sdk->trustedServers->deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer($request);

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
    $request->endingBefore = 'sapiente';
    $request->networkId = 'odit';
    $request->perPage = 51685;
    $request->startingAfter = 'sed';

    $response = $sdk->trustedServers->getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers($request);

    if ($response->getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ApplicationJSONObjects !== null) {
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
    $request->requestBody->ipv4->address = '3663 Adams Garden';
    $request->requestBody->mac = 'adipisci';
    $request->requestBody->vlan = 804998;
    $request->networkId = 'distinctio';
    $request->trustedServerId = 'numquam';

    $response = $sdk->trustedServers->updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer($request);

    if ($response->updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
