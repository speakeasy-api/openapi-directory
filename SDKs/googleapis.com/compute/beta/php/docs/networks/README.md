# networks

### Available Operations

* [computeNetworksAddPeering](#computenetworksaddpeering) - Adds a peering to the specified network.
* [computeNetworksDelete](#computenetworksdelete) - Deletes the specified network.
* [computeNetworksGet](#computenetworksget) - Returns the specified network.
* [computeNetworksGetEffectiveFirewalls](#computenetworksgeteffectivefirewalls) - Returns the effective firewalls on a given network.
* [computeNetworksInsert](#computenetworksinsert) - Creates a network in the specified project using the data included in the request.
* [computeNetworksList](#computenetworkslist) - Retrieves the list of networks available to the specified project.
* [computeNetworksListPeeringRoutes](#computenetworkslistpeeringroutes) - Lists the peering routes exchanged over peering connection.
* [computeNetworksPatch](#computenetworkspatch) - Patches the specified network with the data included in the request. Only the following fields can be modified: routingConfig.routingMode.
* [computeNetworksRemovePeering](#computenetworksremovepeering) - Removes a peering from the specified network.
* [computeNetworksSwitchToCustomMode](#computenetworksswitchtocustommode) - Switches the network mode from auto subnet mode to custom subnet mode.
* [computeNetworksTestIamPermissions](#computenetworkstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeNetworksUpdatePeering](#computenetworksupdatepeering) - Updates the specified network peering with the data included in the request. You can only modify the NetworkPeering.export_custom_routes field and the NetworkPeering.import_custom_routes field.

## computeNetworksAddPeering

Adds a peering to the specified network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksAddPeeringRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworksAddPeeringRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPeering;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPeeringStackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPeeringStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksAddPeeringSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksAddPeeringSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksAddPeeringSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworksAddPeeringRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->networksAddPeeringRequest = new NetworksAddPeeringRequest();
    $request->networksAddPeeringRequest->autoCreateRoutes = false;
    $request->networksAddPeeringRequest->name = 'Anna Mayer';
    $request->networksAddPeeringRequest->networkPeering = new NetworkPeering();
    $request->networksAddPeeringRequest->networkPeering->autoCreateRoutes = false;
    $request->networksAddPeeringRequest->networkPeering->exchangeSubnetRoutes = false;
    $request->networksAddPeeringRequest->networkPeering->exportCustomRoutes = false;
    $request->networksAddPeeringRequest->networkPeering->exportSubnetRoutesWithPublicIp = false;
    $request->networksAddPeeringRequest->networkPeering->importCustomRoutes = false;
    $request->networksAddPeeringRequest->networkPeering->importSubnetRoutesWithPublicIp = false;
    $request->networksAddPeeringRequest->networkPeering->name = 'Ray Connelly';
    $request->networksAddPeeringRequest->networkPeering->network = 'aliquam';
    $request->networksAddPeeringRequest->networkPeering->peerMtu = 631123;
    $request->networksAddPeeringRequest->networkPeering->stackType = NetworkPeeringStackTypeEnum::IPV4_ONLY;
    $request->networksAddPeeringRequest->networkPeering->state = NetworkPeeringStateEnum::ACTIVE;
    $request->networksAddPeeringRequest->networkPeering->stateDetails = 'dolore';
    $request->networksAddPeeringRequest->peerNetwork = 'commodi';
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'iusto';
    $request->key = 'optio';
    $request->network = 'ipsam';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'fugit';
    $request->quotaUser = 'dolorem';
    $request->requestId = 'nesciunt';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'inventore';
    $request->userIp = 'modi';

    $requestSecurity = new ComputeNetworksAddPeeringSecurity();
    $requestSecurity->option1 = new ComputeNetworksAddPeeringSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networks->computeNetworksAddPeering($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworksDelete

Deletes the specified network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworksDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veniam';
    $request->fields = 'et';
    $request->key = 'dolorum';
    $request->network = 'animi';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'illum';
    $request->requestId = 'at';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'nemo';
    $request->userIp = 'laborum';

    $requestSecurity = new ComputeNetworksDeleteSecurity();
    $requestSecurity->option1 = new ComputeNetworksDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networks->computeNetworksDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworksGet

Returns the specified network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworksGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eius';
    $request->fields = 'atque';
    $request->key = 'reprehenderit';
    $request->network = 'quo';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'reiciendis';
    $request->quotaUser = 'impedit';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'nobis';
    $request->userIp = 'voluptatum';

    $requestSecurity = new ComputeNetworksGetSecurity();
    $requestSecurity->option1 = new ComputeNetworksGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networks->computeNetworksGet($request, $requestSecurity);

    if ($response->network !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworksGetEffectiveFirewalls

Returns the effective firewalls on a given network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksGetEffectiveFirewallsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksGetEffectiveFirewallsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksGetEffectiveFirewallsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksGetEffectiveFirewallsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksGetEffectiveFirewallsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworksGetEffectiveFirewallsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatem';
    $request->fields = 'aut';
    $request->key = 'nobis';
    $request->network = 'saepe';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'perspiciatis';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'illo';
    $request->userIp = 'aperiam';

    $requestSecurity = new ComputeNetworksGetEffectiveFirewallsSecurity();
    $requestSecurity->option1 = new ComputeNetworksGetEffectiveFirewallsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networks->computeNetworksGetEffectiveFirewalls($request, $requestSecurity);

    if ($response->networksGetEffectiveFirewallsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworksInsert

Creates a network in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Network;
use \OpenAPI\OpenAPI\Models\Shared\NetworkNetworkFirewallPolicyEnforcementOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPeering;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPeeringStackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPeeringStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkRoutingConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkRoutingConfigRoutingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworksInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->network = new Network();
    $request->network->iPv4Range = 'veritatis';
    $request->network->autoCreateSubnetworks = false;
    $request->network->creationTimestamp = 'enim';
    $request->network->description = 'ducimus';
    $request->network->enableUlaInternalIpv6 = false;
    $request->network->firewallPolicy = 'suscipit';
    $request->network->gatewayIPv4 = 'dolor';
    $request->network->id = 'alias';
    $request->network->internalIpv6Range = 'libero';
    $request->network->kind = 'quibusdam';
    $request->network->mtu = 682888;
    $request->network->name = 'Harriet Ziemann';
    $request->network->networkFirewallPolicyEnforcementOrder = NetworkNetworkFirewallPolicyEnforcementOrderEnum::BEFORE_CLASSIC_FIREWALL;
    $request->network->peerings = [
        new NetworkPeering(),
        new NetworkPeering(),
        new NetworkPeering(),
    ];
    $request->network->routingConfig = new NetworkRoutingConfig();
    $request->network->routingConfig->routingMode = NetworkRoutingConfigRoutingModeEnum::GLOBAL;
    $request->network->selfLink = 'similique';
    $request->network->selfLinkWithId = 'dolor';
    $request->network->subnetworks = [
        'dolorum',
        'aliquam',
    ];
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nesciunt';
    $request->fields = 'corrupti';
    $request->key = 'officiis';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'in';
    $request->requestId = 'sequi';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'quisquam';

    $requestSecurity = new ComputeNetworksInsertSecurity();
    $requestSecurity->option1 = new ComputeNetworksInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networks->computeNetworksInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworksList

Retrieves the list of networks available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworksListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'ipsum';
    $request->filter = 'ratione';
    $request->key = 'expedita';
    $request->maxResults = 930547;
    $request->oauthToken = 'maiores';
    $request->orderBy = 'provident';
    $request->pageToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'id';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'repellat';
    $request->userIp = 'modi';

    $requestSecurity = new ComputeNetworksListSecurity();
    $requestSecurity->option1 = new ComputeNetworksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networks->computeNetworksList($request, $requestSecurity);

    if ($response->networkList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworksListPeeringRoutes

Lists the peering routes exchanged over peering connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListPeeringRoutesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListPeeringRoutesDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListPeeringRoutesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListPeeringRoutesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListPeeringRoutesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListPeeringRoutesSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworksListPeeringRoutesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->direction = ComputeNetworksListPeeringRoutesDirectionEnum::INCOMING;
    $request->fields = 'quae';
    $request->filter = 'aut';
    $request->key = 'commodi';
    $request->maxResults = 965711;
    $request->network = 'officiis';
    $request->oauthToken = 'omnis';
    $request->orderBy = 'ea';
    $request->pageToken = 'ipsam';
    $request->peeringName = 'soluta';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->quotaUser = 'vitae';
    $request->region = 'beatae';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'blanditiis';

    $requestSecurity = new ComputeNetworksListPeeringRoutesSecurity();
    $requestSecurity->option1 = new ComputeNetworksListPeeringRoutesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networks->computeNetworksListPeeringRoutes($request, $requestSecurity);

    if ($response->exchangedPeeringRoutesList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworksPatch

Patches the specified network with the data included in the request. Only the following fields can be modified: routingConfig.routingMode.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Network;
use \OpenAPI\OpenAPI\Models\Shared\NetworkNetworkFirewallPolicyEnforcementOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPeering;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPeeringStackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPeeringStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkRoutingConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkRoutingConfigRoutingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworksPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->network1 = new Network();
    $request->network1->iPv4Range = 'tenetur';
    $request->network1->autoCreateSubnetworks = false;
    $request->network1->creationTimestamp = 'deleniti';
    $request->network1->description = 'deleniti';
    $request->network1->enableUlaInternalIpv6 = false;
    $request->network1->firewallPolicy = 'necessitatibus';
    $request->network1->gatewayIPv4 = 'cumque';
    $request->network1->id = 'iste';
    $request->network1->internalIpv6Range = 'reiciendis';
    $request->network1->kind = 'nihil';
    $request->network1->mtu = 729347;
    $request->network1->name = 'Sergio Nitzsche';
    $request->network1->networkFirewallPolicyEnforcementOrder = NetworkNetworkFirewallPolicyEnforcementOrderEnum::AFTER_CLASSIC_FIREWALL;
    $request->network1->peerings = [
        new NetworkPeering(),
        new NetworkPeering(),
        new NetworkPeering(),
    ];
    $request->network1->routingConfig = new NetworkRoutingConfig();
    $request->network1->routingConfig->routingMode = NetworkRoutingConfigRoutingModeEnum::GLOBAL;
    $request->network1->selfLink = 'quis';
    $request->network1->selfLinkWithId = 'commodi';
    $request->network1->subnetworks = [
        'possimus',
        'dolor',
        'ratione',
        'velit',
    ];
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->fields = 'quo';
    $request->key = 'officiis';
    $request->networkPathParameter = 'laudantium';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'autem';
    $request->requestId = 'quis';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'consectetur';
    $request->userIp = 'qui';

    $requestSecurity = new ComputeNetworksPatchSecurity();
    $requestSecurity->option1 = new ComputeNetworksPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networks->computeNetworksPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworksRemovePeering

Removes a peering from the specified network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksRemovePeeringRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworksRemovePeeringRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksRemovePeeringSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksRemovePeeringSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksRemovePeeringSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworksRemovePeeringRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->networksRemovePeeringRequest = new NetworksRemovePeeringRequest();
    $request->networksRemovePeeringRequest->name = 'Ian Jenkins';
    $request->accessToken = 'odio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'beatae';
    $request->fields = 'dolore';
    $request->key = 'quisquam';
    $request->network = 'mollitia';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'non';
    $request->requestId = 'doloremque';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'natus';
    $request->userIp = 'beatae';

    $requestSecurity = new ComputeNetworksRemovePeeringSecurity();
    $requestSecurity->option1 = new ComputeNetworksRemovePeeringSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networks->computeNetworksRemovePeering($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworksSwitchToCustomMode

Switches the network mode from auto subnet mode to custom subnet mode.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksSwitchToCustomModeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksSwitchToCustomModeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksSwitchToCustomModeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksSwitchToCustomModeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworksSwitchToCustomModeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'nihil';
    $request->key = 'accusantium';
    $request->network = 'et';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'similique';
    $request->quotaUser = 'eius';
    $request->requestId = 'rem';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'laudantium';

    $requestSecurity = new ComputeNetworksSwitchToCustomModeSecurity();
    $requestSecurity->option1 = new ComputeNetworksSwitchToCustomModeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networks->computeNetworksSwitchToCustomMode($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworksTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworksTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'accusamus',
        'reprehenderit',
        'expedita',
        'hic',
    ];
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'non';
    $request->fields = 'saepe';
    $request->key = 'consequatur';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'sit';
    $request->resource = 'ad';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'sequi';
    $request->userIp = 'laudantium';

    $requestSecurity = new ComputeNetworksTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeNetworksTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networks->computeNetworksTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworksUpdatePeering

Updates the specified network peering with the data included in the request. You can only modify the NetworkPeering.export_custom_routes field and the NetworkPeering.import_custom_routes field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksUpdatePeeringRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworksUpdatePeeringRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPeering;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPeeringStackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPeeringStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksUpdatePeeringSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksUpdatePeeringSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksUpdatePeeringSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworksUpdatePeeringRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->networksUpdatePeeringRequest = new NetworksUpdatePeeringRequest();
    $request->networksUpdatePeeringRequest->networkPeering = new NetworkPeering();
    $request->networksUpdatePeeringRequest->networkPeering->autoCreateRoutes = false;
    $request->networksUpdatePeeringRequest->networkPeering->exchangeSubnetRoutes = false;
    $request->networksUpdatePeeringRequest->networkPeering->exportCustomRoutes = false;
    $request->networksUpdatePeeringRequest->networkPeering->exportSubnetRoutesWithPublicIp = false;
    $request->networksUpdatePeeringRequest->networkPeering->importCustomRoutes = false;
    $request->networksUpdatePeeringRequest->networkPeering->importSubnetRoutesWithPublicIp = false;
    $request->networksUpdatePeeringRequest->networkPeering->name = 'Nina Boyle';
    $request->networksUpdatePeeringRequest->networkPeering->network = 'quod';
    $request->networksUpdatePeeringRequest->networkPeering->peerMtu = 379552;
    $request->networksUpdatePeeringRequest->networkPeering->stackType = NetworkPeeringStackTypeEnum::IPV4_ONLY;
    $request->networksUpdatePeeringRequest->networkPeering->state = NetworkPeeringStateEnum::INACTIVE;
    $request->networksUpdatePeeringRequest->networkPeering->stateDetails = 'harum';
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'doloremque';
    $request->key = 'doloribus';
    $request->network = 'vel';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'ducimus';
    $request->quotaUser = 'quidem';
    $request->requestId = 'in';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'consectetur';

    $requestSecurity = new ComputeNetworksUpdatePeeringSecurity();
    $requestSecurity->option1 = new ComputeNetworksUpdatePeeringSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networks->computeNetworksUpdatePeering($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
