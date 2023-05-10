# networks

### Available Operations

* [computeNetworksAddPeering](#computenetworksaddpeering) - Adds a peering to the specified network.
* [computeNetworksDelete](#computenetworksdelete) - Deletes the specified network.
* [computeNetworksGet](#computenetworksget) - Returns the specified network.
* [computeNetworksGetEffectiveFirewalls](#computenetworksgeteffectivefirewalls) - Returns the effective firewalls on a given network.
* [computeNetworksInsert](#computenetworksinsert) - Creates a network in the specified project using the data included in the request.
* [computeNetworksList](#computenetworkslist) - Retrieves the list of networks available to the specified project.
* [computeNetworksListIpAddresses](#computenetworkslistipaddresses) - Lists the internal IP addresses in the specified network.
* [computeNetworksListIpOwners](#computenetworkslistipowners) - Lists the internal IP owners in the specified network.
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
    $request->networksAddPeeringRequest->exportCustomRoutes = false;
    $request->networksAddPeeringRequest->importCustomRoutes = false;
    $request->networksAddPeeringRequest->name = 'Vincent Medhurst III';
    $request->networksAddPeeringRequest->networkPeering = new NetworkPeering();
    $request->networksAddPeeringRequest->networkPeering->advertisePeerSubnetsViaRouters = false;
    $request->networksAddPeeringRequest->networkPeering->autoCreateRoutes = false;
    $request->networksAddPeeringRequest->networkPeering->exchangeSubnetRoutes = false;
    $request->networksAddPeeringRequest->networkPeering->exportCustomRoutes = false;
    $request->networksAddPeeringRequest->networkPeering->exportSubnetRoutesWithPublicIp = false;
    $request->networksAddPeeringRequest->networkPeering->importCustomRoutes = false;
    $request->networksAddPeeringRequest->networkPeering->importSubnetRoutesWithPublicIp = false;
    $request->networksAddPeeringRequest->networkPeering->name = 'Jean Ziemann';
    $request->networksAddPeeringRequest->networkPeering->network = 'hic';
    $request->networksAddPeeringRequest->networkPeering->peerMtu = 825846;
    $request->networksAddPeeringRequest->networkPeering->stackType = NetworkPeeringStackTypeEnum::IPV4_IPV6;
    $request->networksAddPeeringRequest->networkPeering->state = NetworkPeeringStateEnum::ACTIVE;
    $request->networksAddPeeringRequest->networkPeering->stateDetails = 'quia';
    $request->networksAddPeeringRequest->peerNetwork = 'quidem';
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'debitis';
    $request->key = 'consectetur';
    $request->network = 'aperiam';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'quidem';
    $request->requestId = 'excepturi';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'accusamus';
    $request->userIp = 'consectetur';

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
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->fields = 'placeat';
    $request->key = 'sapiente';
    $request->network = 'corporis';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->project = 'soluta';
    $request->quotaUser = 'magnam';
    $request->requestId = 'sequi';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'consectetur';
    $request->userIp = 'ullam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->fields = 'earum';
    $request->key = 'vitae';
    $request->network = 'quisquam';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'consequatur';
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'labore';
    $request->userIp = 'culpa';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'occaecati';
    $request->key = 'voluptatem';
    $request->network = 'labore';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'illo';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'cum';

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
    $request->network->iPv4Range = 'suscipit';
    $request->network->autoCreateSubnetworks = false;
    $request->network->creationTimestamp = 'labore';
    $request->network->description = 'praesentium';
    $request->network->enableUlaInternalIpv6 = false;
    $request->network->firewallPolicy = 'optio';
    $request->network->gatewayIPv4 = 'officiis';
    $request->network->id = 'voluptatibus';
    $request->network->internalIpv6Range = 'mollitia';
    $request->network->kind = 'quam';
    $request->network->mtu = 535550;
    $request->network->name = 'Raymond Von';
    $request->network->networkFirewallPolicyEnforcementOrder = NetworkNetworkFirewallPolicyEnforcementOrderEnum::AFTER_CLASSIC_FIREWALL;
    $request->network->peerings = [
        new NetworkPeering(),
        new NetworkPeering(),
        new NetworkPeering(),
    ];
    $request->network->region = 'error';
    $request->network->routingConfig = new NetworkRoutingConfig();
    $request->network->routingConfig->routingMode = NetworkRoutingConfigRoutingModeEnum::GLOBAL;
    $request->network->selfLink = 'beatae';
    $request->network->selfLinkWithId = 'saepe';
    $request->network->subnetworks = [
        'sint',
    ];
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'distinctio';
    $request->fields = 'harum';
    $request->key = 'quidem';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'minus';
    $request->quotaUser = 'harum';
    $request->requestId = 'quidem';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'voluptatibus';

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
    $request->accessToken = 'ab';
    $request->alt = AltEnum::JSON;
    $request->callback = 'pariatur';
    $request->fields = 'excepturi';
    $request->filter = 'enim';
    $request->key = 'culpa';
    $request->maxResults = 293095;
    $request->oauthToken = 'sunt';
    $request->orderBy = 'nisi';
    $request->pageToken = 'molestias';
    $request->prettyPrint = false;
    $request->project = 'impedit';
    $request->quotaUser = 'quasi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'corrupti';
    $request->userIp = 'in';

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

## computeNetworksListIpAddresses

Lists the internal IP addresses in the specified network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListIpAddressesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListIpAddressesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListIpAddressesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListIpAddressesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListIpAddressesSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworksListIpAddressesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eveniet';
    $request->fields = 'vitae';
    $request->filter = 'quos';
    $request->key = 'eveniet';
    $request->maxResults = 638654;
    $request->network = 'perspiciatis';
    $request->oauthToken = 'debitis';
    $request->orderBy = 'non';
    $request->pageToken = 'veniam';
    $request->prettyPrint = false;
    $request->project = 'illo';
    $request->quotaUser = 'illo';
    $request->returnPartialSuccess = false;
    $request->types = 'deleniti';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'optio';

    $requestSecurity = new ComputeNetworksListIpAddressesSecurity();
    $requestSecurity->option1 = new ComputeNetworksListIpAddressesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networks->computeNetworksListIpAddresses($request, $requestSecurity);

    if ($response->ipAddressesList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworksListIpOwners

Lists the internal IP owners in the specified network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListIpOwnersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListIpOwnersSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListIpOwnersSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListIpOwnersSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworksListIpOwnersSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworksListIpOwnersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tenetur';
    $request->fields = 'libero';
    $request->filter = 'repellendus';
    $request->ipCidrRange = 'aliquid';
    $request->key = 'alias';
    $request->maxResults = 702323;
    $request->network = 'beatae';
    $request->oauthToken = 'fuga';
    $request->orderBy = 'quam';
    $request->ownerProjects = 'molestias';
    $request->ownerTypes = 'eveniet';
    $request->pageToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'eos';
    $request->quotaUser = 'cupiditate';
    $request->returnPartialSuccess = false;
    $request->subnetName = 'est';
    $request->subnetRegion = 'occaecati';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'quaerat';
    $request->userIp = 'itaque';

    $requestSecurity = new ComputeNetworksListIpOwnersSecurity();
    $requestSecurity->option1 = new ComputeNetworksListIpOwnersSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networks->computeNetworksListIpOwners($request, $requestSecurity);

    if ($response->ipOwnerList !== null) {
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'animi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ullam';
    $request->direction = ComputeNetworksListPeeringRoutesDirectionEnum::INCOMING;
    $request->fields = 'nemo';
    $request->filter = 'atque';
    $request->key = 'optio';
    $request->maxResults = 145242;
    $request->network = 'at';
    $request->oauthToken = 'modi';
    $request->orderBy = 'delectus';
    $request->pageToken = 'aliquam';
    $request->peeringName = 'optio';
    $request->prettyPrint = false;
    $request->project = 'laudantium';
    $request->quotaUser = 'quas';
    $request->region = 'quidem';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'labore';
    $request->userIp = 'hic';

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
    $request->network1->iPv4Range = 'nihil';
    $request->network1->autoCreateSubnetworks = false;
    $request->network1->creationTimestamp = 'quas';
    $request->network1->description = 'tenetur';
    $request->network1->enableUlaInternalIpv6 = false;
    $request->network1->firewallPolicy = 'fugiat';
    $request->network1->gatewayIPv4 = 'unde';
    $request->network1->id = 'autem';
    $request->network1->internalIpv6Range = 'ea';
    $request->network1->kind = 'molestiae';
    $request->network1->mtu = 882826;
    $request->network1->name = 'Ella Schowalter PhD';
    $request->network1->networkFirewallPolicyEnforcementOrder = NetworkNetworkFirewallPolicyEnforcementOrderEnum::AFTER_CLASSIC_FIREWALL;
    $request->network1->peerings = [
        new NetworkPeering(),
        new NetworkPeering(),
        new NetworkPeering(),
        new NetworkPeering(),
    ];
    $request->network1->region = 'repellat';
    $request->network1->routingConfig = new NetworkRoutingConfig();
    $request->network1->routingConfig->routingMode = NetworkRoutingConfigRoutingModeEnum::REGIONAL;
    $request->network1->selfLink = 'fuga';
    $request->network1->selfLinkWithId = 'ad';
    $request->network1->subnetworks = [
        'temporibus',
        'minus',
        'voluptates',
    ];
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ratione';
    $request->fields = 'quaerat';
    $request->key = 'minus';
    $request->networkPathParameter = 'natus';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->project = 'veniam';
    $request->quotaUser = 'tempore';
    $request->requestId = 'natus';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'assumenda';
    $request->userIp = 'repellat';

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
    $request->networksRemovePeeringRequest->name = 'Isabel Abernathy';
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'expedita';
    $request->fields = 'harum';
    $request->key = 'quisquam';
    $request->network = 'eligendi';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->project = 'dignissimos';
    $request->quotaUser = 'aspernatur';
    $request->requestId = 'ullam';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'magni';

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
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quisquam';
    $request->fields = 'debitis';
    $request->key = 'ipsa';
    $request->network = 'quia';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->project = 'consequatur';
    $request->quotaUser = 'corrupti';
    $request->requestId = 'numquam';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'quod';
    $request->userIp = 'nisi';

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
        'tenetur',
        'vel',
        'corrupti',
        'voluptates',
    ];
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'blanditiis';
    $request->key = 'animi';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'possimus';
    $request->quotaUser = 'maiores';
    $request->resource = 'est';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'voluptate';
    $request->userIp = 'nostrum';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->networksUpdatePeeringRequest = new NetworksUpdatePeeringRequest();
    $request->networksUpdatePeeringRequest->networkPeering = new NetworkPeering();
    $request->networksUpdatePeeringRequest->networkPeering->advertisePeerSubnetsViaRouters = false;
    $request->networksUpdatePeeringRequest->networkPeering->autoCreateRoutes = false;
    $request->networksUpdatePeeringRequest->networkPeering->exchangeSubnetRoutes = false;
    $request->networksUpdatePeeringRequest->networkPeering->exportCustomRoutes = false;
    $request->networksUpdatePeeringRequest->networkPeering->exportSubnetRoutesWithPublicIp = false;
    $request->networksUpdatePeeringRequest->networkPeering->importCustomRoutes = false;
    $request->networksUpdatePeeringRequest->networkPeering->importSubnetRoutesWithPublicIp = false;
    $request->networksUpdatePeeringRequest->networkPeering->name = 'Cynthia Bednar';
    $request->networksUpdatePeeringRequest->networkPeering->network = 'aperiam';
    $request->networksUpdatePeeringRequest->networkPeering->peerMtu = 759731;
    $request->networksUpdatePeeringRequest->networkPeering->stackType = NetworkPeeringStackTypeEnum::IPV4_IPV6;
    $request->networksUpdatePeeringRequest->networkPeering->state = NetworkPeeringStateEnum::ACTIVE;
    $request->networksUpdatePeeringRequest->networkPeering->stateDetails = 'amet';
    $request->accessToken = 'quia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->fields = 'dolor';
    $request->key = 'provident';
    $request->network = 'inventore';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->project = 'temporibus';
    $request->quotaUser = 'sapiente';
    $request->requestId = 'ipsa';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'nobis';
    $request->userIp = 'adipisci';

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
