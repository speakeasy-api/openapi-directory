# routers

### Available Operations

* [computeRoutersAggregatedList](#computeroutersaggregatedlist) - Retrieves an aggregated list of routers.
* [computeRoutersDelete](#computeroutersdelete) - Deletes the specified Router resource.
* [computeRoutersGet](#computeroutersget) - Returns the specified Router resource.
* [computeRoutersGetNatMappingInfo](#computeroutersgetnatmappinginfo) - Retrieves runtime Nat mapping information of VM endpoints.
* [computeRoutersGetRouterStatus](#computeroutersgetrouterstatus) - Retrieves runtime information of the specified router.
* [computeRoutersInsert](#computeroutersinsert) - Creates a Router resource in the specified project and region using the data included in the request.
* [computeRoutersList](#computerouterslist) - Retrieves a list of Router resources available to the specified project.
* [computeRoutersPatch](#computerouterspatch) - Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeRoutersPreview](#computerouterspreview) - Preview fields auto-generated during router create and update operations. Calling this method does NOT create or update the router.
* [computeRoutersTestIamPermissions](#computerouterstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRoutersUpdate](#computeroutersupdate) - Updates the specified Router resource with the data included in the request. This method conforms to PUT semantics, which requests that the state of the target resource be created or replaced with the state defined by the representation enclosed in the request message payload.

## computeRoutersAggregatedList

Retrieves an aggregated list of routers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutersAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nihil';
    $request->fields = 'praesentium';
    $request->filter = 'maiores';
    $request->includeAllScopes = false;
    $request->key = 'id';
    $request->maxResults = 174368;
    $request->oauthToken = 'ducimus';
    $request->orderBy = 'occaecati';
    $request->pageToken = 'nostrum';
    $request->prettyPrint = false;
    $request->project = 'atque';
    $request->quotaUser = 'sequi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'quam';
    $request->userIp = 'dolor';

    $requestSecurity = new ComputeRoutersAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeRoutersAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routers->computeRoutersAggregatedList($request, $requestSecurity);

    if ($response->routerAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRoutersDelete

Deletes the specified Router resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'aut';
    $request->key = 'iusto';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'doloremque';
    $request->quotaUser = 'natus';
    $request->region = 'ea';
    $request->requestId = 'doloribus';
    $request->router = 'deserunt';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'nam';
    $request->userIp = 'totam';

    $requestSecurity = new ComputeRoutersDeleteSecurity();
    $requestSecurity->option1 = new ComputeRoutersDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routers->computeRoutersDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRoutersGet

Returns the specified Router resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequatur';
    $request->fields = 'reprehenderit';
    $request->key = 'adipisci';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'illum';
    $request->quotaUser = 'laudantium';
    $request->region = 'voluptatibus';
    $request->router = 'quos';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'rem';
    $request->userIp = 'unde';

    $requestSecurity = new ComputeRoutersGetSecurity();
    $requestSecurity->option1 = new ComputeRoutersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routers->computeRoutersGet($request, $requestSecurity);

    if ($response->router !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRoutersGetNatMappingInfo

Retrieves runtime Nat mapping information of VM endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersGetNatMappingInfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersGetNatMappingInfoSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersGetNatMappingInfoSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersGetNatMappingInfoSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersGetNatMappingInfoSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutersGetNatMappingInfoRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'nisi';
    $request->filter = 'alias';
    $request->key = 'reprehenderit';
    $request->maxResults = 369958;
    $request->natName = 'commodi';
    $request->oauthToken = 'minima';
    $request->orderBy = 'suscipit';
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'quo';
    $request->quotaUser = 'alias';
    $request->region = 'debitis';
    $request->returnPartialSuccess = false;
    $request->router = 'cum';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'ex';
    $request->userIp = 'iusto';

    $requestSecurity = new ComputeRoutersGetNatMappingInfoSecurity();
    $requestSecurity->option1 = new ComputeRoutersGetNatMappingInfoSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routers->computeRoutersGetNatMappingInfo($request, $requestSecurity);

    if ($response->vmEndpointNatMappingsList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRoutersGetRouterStatus

Retrieves runtime information of the specified router.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersGetRouterStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersGetRouterStatusSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersGetRouterStatusSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersGetRouterStatusSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersGetRouterStatusSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutersGetRouterStatusRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'debitis';
    $request->fields = 'explicabo';
    $request->key = 'assumenda';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'fuga';
    $request->region = 'ipsum';
    $request->router = 'sit';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'aut';
    $request->userIp = 'nulla';

    $requestSecurity = new ComputeRoutersGetRouterStatusSecurity();
    $requestSecurity->option1 = new ComputeRoutersGetRouterStatusSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routers->computeRoutersGetRouterStatus($request, $requestSecurity);

    if ($response->routerStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRoutersInsert

Creates a Router resource in the specified project and region using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Router;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgp;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpAdvertiseModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpAdvertisedGroupsEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterAdvertisedIpRange;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeer;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerAdvertiseModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerAdvertisedGroupsEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerBfd;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerBfdSessionInitializationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerCustomLearnedIpRange;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerEnableEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterInterface;
use \OpenAPI\OpenAPI\Models\Shared\RouterInterfaceManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterMd5AuthenticationKey;
use \OpenAPI\OpenAPI\Models\Shared\RouterNat;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatAutoNetworkTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatEndpointTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatLogConfigFilterEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatNatIpAllocateOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatRule;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatRuleAction;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatSourceSubnetworkIpRangesToNatEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatSubnetworkToNat;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatSubnetworkToNatSourceIpRangesToNatEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutersInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->router = new Router();
    $request->router->bgp = new RouterBgp();
    $request->router->bgp->advertiseMode = RouterBgpAdvertiseModeEnum::DEFAULT;
    $request->router->bgp->advertisedGroups = [
        RouterBgpAdvertisedGroupsEnum::ALL_SUBNETS,
    ];
    $request->router->bgp->advertisedIpRanges = [
        new RouterAdvertisedIpRange(),
        new RouterAdvertisedIpRange(),
        new RouterAdvertisedIpRange(),
    ];
    $request->router->bgp->asn = 446128;
    $request->router->bgp->keepaliveInterval = 941030;
    $request->router->bgpPeers = [
        new RouterBgpPeer(),
        new RouterBgpPeer(),
    ];
    $request->router->creationTimestamp = 'totam';
    $request->router->description = 'architecto';
    $request->router->encryptedInterconnectRouter = false;
    $request->router->id = 'a';
    $request->router->interfaces = [
        new RouterInterface(),
        new RouterInterface(),
        new RouterInterface(),
    ];
    $request->router->kind = 'soluta';
    $request->router->md5AuthenticationKeys = [
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
    ];
    $request->router->name = 'Doug Kub';
    $request->router->nats = [
        new RouterNat(),
    ];
    $request->router->network = 'et';
    $request->router->region = 'voluptatem';
    $request->router->selfLink = 'blanditiis';
    $request->accessToken = 'rem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quam';
    $request->fields = 'laboriosam';
    $request->key = 'asperiores';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'tenetur';
    $request->region = 'laboriosam';
    $request->requestId = 'recusandae';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'quia';
    $request->userIp = 'error';

    $requestSecurity = new ComputeRoutersInsertSecurity();
    $requestSecurity->option1 = new ComputeRoutersInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routers->computeRoutersInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRoutersList

Retrieves a list of Router resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ab';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'quos';
    $request->filter = 'voluptatum';
    $request->key = 'explicabo';
    $request->maxResults = 396772;
    $request->oauthToken = 'perspiciatis';
    $request->orderBy = 'tempore';
    $request->pageToken = 'nisi';
    $request->prettyPrint = false;
    $request->project = 'similique';
    $request->quotaUser = 'esse';
    $request->region = 'alias';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'perferendis';
    $request->userIp = 'possimus';

    $requestSecurity = new ComputeRoutersListSecurity();
    $requestSecurity->option1 = new ComputeRoutersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routers->computeRoutersList($request, $requestSecurity);

    if ($response->routerList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRoutersPatch

Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Router;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgp;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpAdvertiseModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpAdvertisedGroupsEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterAdvertisedIpRange;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeer;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerAdvertiseModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerAdvertisedGroupsEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerBfd;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerBfdSessionInitializationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerCustomLearnedIpRange;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerEnableEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterInterface;
use \OpenAPI\OpenAPI\Models\Shared\RouterInterfaceManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterMd5AuthenticationKey;
use \OpenAPI\OpenAPI\Models\Shared\RouterNat;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatAutoNetworkTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatEndpointTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatLogConfigFilterEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatNatIpAllocateOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatRule;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatRuleAction;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatSourceSubnetworkIpRangesToNatEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatSubnetworkToNat;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatSubnetworkToNatSourceIpRangesToNatEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutersPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->router1 = new Router();
    $request->router1->bgp = new RouterBgp();
    $request->router1->bgp->advertiseMode = RouterBgpAdvertiseModeEnum::DEFAULT;
    $request->router1->bgp->advertisedGroups = [
        RouterBgpAdvertisedGroupsEnum::ALL_SUBNETS,
    ];
    $request->router1->bgp->advertisedIpRanges = [
        new RouterAdvertisedIpRange(),
        new RouterAdvertisedIpRange(),
        new RouterAdvertisedIpRange(),
        new RouterAdvertisedIpRange(),
    ];
    $request->router1->bgp->asn = 569596;
    $request->router1->bgp->keepaliveInterval = 253805;
    $request->router1->bgpPeers = [
        new RouterBgpPeer(),
        new RouterBgpPeer(),
        new RouterBgpPeer(),
        new RouterBgpPeer(),
    ];
    $request->router1->creationTimestamp = 'repellat';
    $request->router1->description = 'delectus';
    $request->router1->encryptedInterconnectRouter = false;
    $request->router1->id = 'quidem';
    $request->router1->interfaces = [
        new RouterInterface(),
        new RouterInterface(),
        new RouterInterface(),
        new RouterInterface(),
    ];
    $request->router1->kind = 'et';
    $request->router1->md5AuthenticationKeys = [
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
    ];
    $request->router1->name = 'Dr. Jenna Dach';
    $request->router1->nats = [
        new RouterNat(),
        new RouterNat(),
        new RouterNat(),
        new RouterNat(),
    ];
    $request->router1->network = 'commodi';
    $request->router1->region = 'sint';
    $request->router1->selfLink = 'doloremque';
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quidem';
    $request->fields = 'dicta';
    $request->key = 'quibusdam';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'praesentium';
    $request->quotaUser = 'nihil';
    $request->region = 'quidem';
    $request->requestId = 'enim';
    $request->routerPathParameter = 'vitae';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'enim';

    $requestSecurity = new ComputeRoutersPatchSecurity();
    $requestSecurity->option1 = new ComputeRoutersPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routers->computeRoutersPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRoutersPreview

Preview fields auto-generated during router create and update operations. Calling this method does NOT create or update the router.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersPreviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Router;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgp;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpAdvertiseModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpAdvertisedGroupsEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterAdvertisedIpRange;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeer;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerAdvertiseModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerAdvertisedGroupsEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerBfd;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerBfdSessionInitializationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerCustomLearnedIpRange;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerEnableEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterInterface;
use \OpenAPI\OpenAPI\Models\Shared\RouterInterfaceManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterMd5AuthenticationKey;
use \OpenAPI\OpenAPI\Models\Shared\RouterNat;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatAutoNetworkTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatEndpointTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatLogConfigFilterEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatNatIpAllocateOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatRule;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatRuleAction;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatSourceSubnetworkIpRangesToNatEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatSubnetworkToNat;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatSubnetworkToNatSourceIpRangesToNatEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersPreviewSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersPreviewSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersPreviewSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersPreviewSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutersPreviewRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->router1 = new Router();
    $request->router1->bgp = new RouterBgp();
    $request->router1->bgp->advertiseMode = RouterBgpAdvertiseModeEnum::DEFAULT;
    $request->router1->bgp->advertisedGroups = [
        RouterBgpAdvertisedGroupsEnum::ALL_SUBNETS,
    ];
    $request->router1->bgp->advertisedIpRanges = [
        new RouterAdvertisedIpRange(),
    ];
    $request->router1->bgp->asn = 735371;
    $request->router1->bgp->keepaliveInterval = 949209;
    $request->router1->bgpPeers = [
        new RouterBgpPeer(),
        new RouterBgpPeer(),
        new RouterBgpPeer(),
        new RouterBgpPeer(),
    ];
    $request->router1->creationTimestamp = 'eaque';
    $request->router1->description = 'non';
    $request->router1->encryptedInterconnectRouter = false;
    $request->router1->id = 'eius';
    $request->router1->interfaces = [
        new RouterInterface(),
        new RouterInterface(),
        new RouterInterface(),
    ];
    $request->router1->kind = 'sit';
    $request->router1->md5AuthenticationKeys = [
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
    ];
    $request->router1->name = 'Harry Bechtelar';
    $request->router1->nats = [
        new RouterNat(),
        new RouterNat(),
    ];
    $request->router1->network = 'id';
    $request->router1->region = 'omnis';
    $request->router1->selfLink = 'ad';
    $request->accessToken = 'unde';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quaerat';
    $request->fields = 'adipisci';
    $request->key = 'maxime';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->project = 'numquam';
    $request->quotaUser = 'voluptas';
    $request->region = 'aspernatur';
    $request->routerPathParameter = 'possimus';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'cum';
    $request->userIp = 'minus';

    $requestSecurity = new ComputeRoutersPreviewSecurity();
    $requestSecurity->option1 = new ComputeRoutersPreviewSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routers->computeRoutersPreview($request, $requestSecurity);

    if ($response->routersPreviewResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRoutersTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutersTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'quasi',
        'dignissimos',
        'maiores',
    ];
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusamus';
    $request->fields = 'eius';
    $request->key = 'dignissimos';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->quotaUser = 'facilis';
    $request->region = 'cupiditate';
    $request->resource = 'nihil';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'officia';
    $request->userIp = 'ut';

    $requestSecurity = new ComputeRoutersTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRoutersTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routers->computeRoutersTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRoutersUpdate

Updates the specified Router resource with the data included in the request. This method conforms to PUT semantics, which requests that the state of the target resource be created or replaced with the state defined by the representation enclosed in the request message payload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Router;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgp;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpAdvertiseModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpAdvertisedGroupsEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterAdvertisedIpRange;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeer;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerAdvertiseModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerAdvertisedGroupsEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerBfd;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerBfdSessionInitializationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerCustomLearnedIpRange;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerEnableEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterInterface;
use \OpenAPI\OpenAPI\Models\Shared\RouterInterfaceManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterMd5AuthenticationKey;
use \OpenAPI\OpenAPI\Models\Shared\RouterNat;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatAutoNetworkTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatEndpointTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatLogConfigFilterEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatNatIpAllocateOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatRule;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatRuleAction;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatSourceSubnetworkIpRangesToNatEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatSubnetworkToNat;
use \OpenAPI\OpenAPI\Models\Shared\RouterNatSubnetworkToNatSourceIpRangesToNatEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->router1 = new Router();
    $request->router1->bgp = new RouterBgp();
    $request->router1->bgp->advertiseMode = RouterBgpAdvertiseModeEnum::CUSTOM;
    $request->router1->bgp->advertisedGroups = [
        RouterBgpAdvertisedGroupsEnum::ALL_SUBNETS,
        RouterBgpAdvertisedGroupsEnum::ALL_SUBNETS,
        RouterBgpAdvertisedGroupsEnum::ALL_SUBNETS,
        RouterBgpAdvertisedGroupsEnum::ALL_SUBNETS,
    ];
    $request->router1->bgp->advertisedIpRanges = [
        new RouterAdvertisedIpRange(),
        new RouterAdvertisedIpRange(),
    ];
    $request->router1->bgp->asn = 680725;
    $request->router1->bgp->keepaliveInterval = 526385;
    $request->router1->bgpPeers = [
        new RouterBgpPeer(),
        new RouterBgpPeer(),
        new RouterBgpPeer(),
        new RouterBgpPeer(),
    ];
    $request->router1->creationTimestamp = 'perspiciatis';
    $request->router1->description = 'vitae';
    $request->router1->encryptedInterconnectRouter = false;
    $request->router1->id = 'suscipit';
    $request->router1->interfaces = [
        new RouterInterface(),
        new RouterInterface(),
        new RouterInterface(),
    ];
    $request->router1->kind = 'nesciunt';
    $request->router1->md5AuthenticationKeys = [
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
    ];
    $request->router1->name = 'Dr. Jordan Kerluke PhD';
    $request->router1->nats = [
        new RouterNat(),
        new RouterNat(),
        new RouterNat(),
    ];
    $request->router1->network = 'molestias';
    $request->router1->region = 'quod';
    $request->router1->selfLink = 'quo';
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'illum';
    $request->key = 'amet';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->project = 'ex';
    $request->quotaUser = 'quae';
    $request->region = 'beatae';
    $request->requestId = 'praesentium';
    $request->routerPathParameter = 'commodi';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'temporibus';
    $request->userIp = 'voluptate';

    $requestSecurity = new ComputeRoutersUpdateSecurity();
    $requestSecurity->option1 = new ComputeRoutersUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routers->computeRoutersUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
