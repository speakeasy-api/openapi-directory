# thirdPartyVPNPeers

### Available Operations

* [getOrganizationApplianceVPNThirdPartyVPNPeers](#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [updateOrganizationApplianceVPNThirdPartyVPNPeers](#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization

## getOrganizationApplianceVPNThirdPartyVPNPeers

Return the third party VPN peers for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceVPNThirdPartyVPNPeersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceVPNThirdPartyVPNPeersRequest();
    $request->organizationId = 'debitis';

    $response = $sdk->thirdPartyVPNPeers->getOrganizationApplianceVPNThirdPartyVPNPeers($request);

    if ($response->getOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationApplianceVPNThirdPartyVPNPeers

Update the third party VPN peers for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest();
    $request->requestBody = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody();
    $request->requestBody->peers = [
        new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers(),
    ];
    $request->organizationId = 'assumenda';

    $response = $sdk->thirdPartyVPNPeers->updateOrganizationApplianceVPNThirdPartyVPNPeers($request);

    if ($response->updateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
