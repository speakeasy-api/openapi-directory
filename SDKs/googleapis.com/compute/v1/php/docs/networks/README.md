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
    $request->networksAddPeeringRequest->name = 'Joey Raynor';
    $request->networksAddPeeringRequest->networkPeering = new NetworkPeering();
    $request->networksAddPeeringRequest->networkPeering->autoCreateRoutes = false;
    $request->networksAddPeeringRequest->networkPeering->exchangeSubnetRoutes = false;
    $request->networksAddPeeringRequest->networkPeering->exportCustomRoutes = false;
    $request->networksAddPeeringRequest->networkPeering->exportSubnetRoutesWithPublicIp = false;
    $request->networksAddPeeringRequest->networkPeering->importCustomRoutes = false;
    $request->networksAddPeeringRequest->networkPeering->importSubnetRoutesWithPublicIp = false;
    $request->networksAddPeeringRequest->networkPeering->name = 'Melanie Gusikowski Jr.';
    $request->networksAddPeeringRequest->networkPeering->network = 'iure';
    $request->networksAddPeeringRequest->networkPeering->peerMtu = 453871;
    $request->networksAddPeeringRequest->networkPeering->stackType = NetworkPeeringStackTypeEnum::IPV4_ONLY;
    $request->networksAddPeeringRequest->networkPeering->state = NetworkPeeringStateEnum::ACTIVE;
    $request->networksAddPeeringRequest->networkPeering->stateDetails = 'perspiciatis';
    $request->networksAddPeeringRequest->peerNetwork = 'accusamus';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ratione';
    $request->fields = 'facere';
    $request->key = 'eius';
    $request->network = 'perspiciatis';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->project = 'earum';
    $request->quotaUser = 'quibusdam';
    $request->requestId = 'inventore';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'molestias';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sunt';
    $request->fields = 'sint';
    $request->key = 'exercitationem';
    $request->network = 'magnam';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->project = 'quaerat';
    $request->quotaUser = 'minima';
    $request->requestId = 'officiis';
    $request->uploadType = 'unde';
    $request->uploadProtocol = 'ullam';
    $request->userIp = 'enim';

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
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'et';
    $request->fields = 'praesentium';
    $request->key = 'minima';
    $request->network = 'eveniet';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'unde';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'dicta';
    $request->userIp = 'eligendi';

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
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sequi';
    $request->fields = 'culpa';
    $request->key = 'facere';
    $request->network = 'explicabo';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->project = 'laborum';
    $request->quotaUser = 'animi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'totam';
    $request->userIp = 'incidunt';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->network = new Network();
    $request->network->iPv4Range = 'nobis';
    $request->network->autoCreateSubnetworks = false;
    $request->network->creationTimestamp = 'culpa';
    $request->network->description = 'ratione';
    $request->network->enableUlaInternalIpv6 = false;
    $request->network->firewallPolicy = 'illum';
    $request->network->gatewayIPv4 = 'sed';
    $request->network->id = 'amet';
    $request->network->internalIpv6Range = 'aut';
    $request->network->kind = 'voluptates';
    $request->network->mtu = 861301;
    $request->network->name = 'Julio Ernser Sr.';
    $request->network->networkFirewallPolicyEnforcementOrder = NetworkNetworkFirewallPolicyEnforcementOrderEnum::BEFORE_CLASSIC_FIREWALL;
    $request->network->peerings = [
        new NetworkPeering(),
    ];
    $request->network->routingConfig = new NetworkRoutingConfig();
    $request->network->routingConfig->routingMode = NetworkRoutingConfigRoutingModeEnum::GLOBAL;
    $request->network->selfLink = 'veniam';
    $request->network->selfLinkWithId = 'non';
    $request->network->subnetworks = [
        'consequuntur',
        'rerum',
        'nulla',
    ];
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'repellendus';
    $request->fields = 'enim';
    $request->key = 'voluptas';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->project = 'voluptatem';
    $request->quotaUser = 'quam';
    $request->requestId = 'vel';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'veritatis';
    $request->userIp = 'porro';

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
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->fields = 'nulla';
    $request->filter = 'iusto';
    $request->key = 'adipisci';
    $request->maxResults = 592813;
    $request->oauthToken = 'voluptas';
    $request->orderBy = 'nostrum';
    $request->pageToken = 'eum';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'cumque';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'accusantium';
    $request->userIp = 'fuga';

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
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veritatis';
    $request->direction = ComputeNetworksListPeeringRoutesDirectionEnum::OUTGOING;
    $request->fields = 'omnis';
    $request->filter = 'commodi';
    $request->key = 'dicta';
    $request->maxResults = 848926;
    $request->network = 'aspernatur';
    $request->oauthToken = 'ut';
    $request->orderBy = 'deserunt';
    $request->pageToken = 'dignissimos';
    $request->peeringName = 'nulla';
    $request->prettyPrint = false;
    $request->project = 'facilis';
    $request->quotaUser = 'libero';
    $request->region = 'corrupti';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'velit';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->network1 = new Network();
    $request->network1->iPv4Range = 'assumenda';
    $request->network1->autoCreateSubnetworks = false;
    $request->network1->creationTimestamp = 'atque';
    $request->network1->description = 'perspiciatis';
    $request->network1->enableUlaInternalIpv6 = false;
    $request->network1->firewallPolicy = 'odit';
    $request->network1->gatewayIPv4 = 'eligendi';
    $request->network1->id = 'earum';
    $request->network1->internalIpv6Range = 'iusto';
    $request->network1->kind = 'atque';
    $request->network1->mtu = 124692;
    $request->network1->name = 'Rachael Reichel Sr.';
    $request->network1->networkFirewallPolicyEnforcementOrder = NetworkNetworkFirewallPolicyEnforcementOrderEnum::BEFORE_CLASSIC_FIREWALL;
    $request->network1->peerings = [
        new NetworkPeering(),
        new NetworkPeering(),
        new NetworkPeering(),
    ];
    $request->network1->routingConfig = new NetworkRoutingConfig();
    $request->network1->routingConfig->routingMode = NetworkRoutingConfigRoutingModeEnum::GLOBAL;
    $request->network1->selfLink = 'voluptatum';
    $request->network1->selfLinkWithId = 'aspernatur';
    $request->network1->subnetworks = [
        'accusantium',
        'nobis',
    ];
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempora';
    $request->fields = 'voluptatum';
    $request->key = 'a';
    $request->networkPathParameter = 'corrupti';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->project = 'hic';
    $request->quotaUser = 'blanditiis';
    $request->requestId = 'maiores';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'harum';
    $request->userIp = 'a';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->networksRemovePeeringRequest = new NetworksRemovePeeringRequest();
    $request->networksRemovePeeringRequest->name = 'Forrest Leannon DVM';
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->fields = 'nulla';
    $request->key = 'corporis';
    $request->network = 'pariatur';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'sequi';
    $request->quotaUser = 'illo';
    $request->requestId = 'temporibus';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'aperiam';
    $request->userIp = 'laudantium';

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
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsa';
    $request->fields = 'delectus';
    $request->key = 'voluptas';
    $request->network = 'nihil';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'voluptas';
    $request->quotaUser = 'laboriosam';
    $request->requestId = 'ducimus';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'doloribus';
    $request->userIp = 'ratione';

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
    $request->networksUpdatePeeringRequest->networkPeering->name = 'Carole Carter';
    $request->networksUpdatePeeringRequest->networkPeering->network = 'molestiae';
    $request->networksUpdatePeeringRequest->networkPeering->peerMtu = 434874;
    $request->networksUpdatePeeringRequest->networkPeering->stackType = NetworkPeeringStackTypeEnum::IPV4_ONLY;
    $request->networksUpdatePeeringRequest->networkPeering->state = NetworkPeeringStateEnum::INACTIVE;
    $request->networksUpdatePeeringRequest->networkPeering->stateDetails = 'impedit';
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quaerat';
    $request->fields = 'explicabo';
    $request->key = 'dolore';
    $request->network = 'accusantium';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'deserunt';
    $request->quotaUser = 'odit';
    $request->requestId = 'beatae';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'eaque';

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
