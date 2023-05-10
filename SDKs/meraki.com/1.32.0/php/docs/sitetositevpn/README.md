# siteToSiteVpn

### Available Operations

* [getNetworkApplianceVpnSiteToSiteVpn](#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [updateNetworkApplianceVpnSiteToSiteVpn](#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network

## getNetworkApplianceVpnSiteToSiteVpn

Return the site-to-site VPN settings of a network. Only valid for MX networks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceVpnSiteToSiteVpnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceVpnSiteToSiteVpnRequest();
    $request->networkId = 'repellendus';

    $response = $sdk->siteToSiteVpn->getNetworkApplianceVpnSiteToSiteVpn($request);

    if ($response->getNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceVpnSiteToSiteVpn

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnSiteToSiteVpnRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceVpnSiteToSiteVpnRequest();
    $request->requestBody = new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody();
    $request->requestBody->hubs = [
        new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs(),
    ];
    $request->requestBody->mode = UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum::SPOKE;
    $request->requestBody->subnets = [
        new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets(),
    ];
    $request->networkId = 'repellat';

    $response = $sdk->siteToSiteVpn->updateNetworkApplianceVpnSiteToSiteVpn($request);

    if ($response->updateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
