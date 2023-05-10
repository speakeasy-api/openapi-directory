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
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'blanditiis';
    $request->fields = 'esse';
    $request->filter = 'omnis';
    $request->includeAllScopes = false;
    $request->key = 'consequatur';
    $request->maxResults = 907495;
    $request->oauthToken = 'sed';
    $request->orderBy = 'voluptates';
    $request->pageToken = 'autem';
    $request->prettyPrint = false;
    $request->project = 'eaque';
    $request->quotaUser = 'inventore';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'deserunt';
    $request->userIp = 'consectetur';

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
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iusto';
    $request->fields = 'consequatur';
    $request->key = 'rerum';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'libero';
    $request->quotaUser = 'minima';
    $request->region = 'ipsum';
    $request->requestId = 'veritatis';
    $request->router = 'rerum';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'cum';
    $request->userIp = 'consectetur';

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
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->fields = 'dolor';
    $request->key = 'sapiente';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'eveniet';
    $request->quotaUser = 'veniam';
    $request->region = 'vero';
    $request->router = 'dolor';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'explicabo';
    $request->userIp = 'delectus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->fields = 'ducimus';
    $request->filter = 'porro';
    $request->key = 'rerum';
    $request->maxResults = 483512;
    $request->natName = 'deserunt';
    $request->oauthToken = 'asperiores';
    $request->orderBy = 'ab';
    $request->pageToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'suscipit';
    $request->quotaUser = 'neque';
    $request->region = 'eveniet';
    $request->returnPartialSuccess = false;
    $request->router = 'placeat';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'alias';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'rerum';
    $request->fields = 'deleniti';
    $request->key = 'consequatur';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'aperiam';
    $request->quotaUser = 'ad';
    $request->region = 'voluptas';
    $request->router = 'adipisci';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'porro';
    $request->userIp = 'corporis';

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
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerBfdModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerBfdPacketModeEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\RouterNatTypeEnum;
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
        RouterBgpAdvertisedGroupsEnum::ALL_PEER_VPC_SUBNETS,
        RouterBgpAdvertisedGroupsEnum::ALL_SUBNETS,
    ];
    $request->router->bgp->advertisedIpRanges = [
        new RouterAdvertisedIpRange(),
        new RouterAdvertisedIpRange(),
        new RouterAdvertisedIpRange(),
    ];
    $request->router->bgp->asn = 624507;
    $request->router->bgp->keepaliveInterval = 347853;
    $request->router->bgpPeers = [
        new RouterBgpPeer(),
        new RouterBgpPeer(),
    ];
    $request->router->creationTimestamp = 'minus';
    $request->router->description = 'ad';
    $request->router->encryptedInterconnectRouter = false;
    $request->router->id = 'maxime';
    $request->router->interfaces = [
        new RouterInterface(),
        new RouterInterface(),
    ];
    $request->router->kind = 'inventore';
    $request->router->md5AuthenticationKeys = [
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
    ];
    $request->router->name = 'Lisa Graham';
    $request->router->nats = [
        new RouterNat(),
        new RouterNat(),
    ];
    $request->router->network = 'maiores';
    $request->router->region = 'consectetur';
    $request->router->selfLink = 'odio';
    $request->router->selfLinkWithId = 'molestiae';
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'temporibus';
    $request->key = 'blanditiis';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'numquam';
    $request->region = 'quos';
    $request->requestId = 'explicabo';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'fugit';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'consequuntur';
    $request->filter = 'quod';
    $request->key = 'labore';
    $request->maxResults = 751945;
    $request->oauthToken = 'atque';
    $request->orderBy = 'eligendi';
    $request->pageToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'corrupti';
    $request->region = 'similique';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'deserunt';
    $request->userIp = 'impedit';

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
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerBfdModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerBfdPacketModeEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\RouterNatTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutersPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->router1 = new Router();
    $request->router1->bgp = new RouterBgp();
    $request->router1->bgp->advertiseMode = RouterBgpAdvertiseModeEnum::DEFAULT;
    $request->router1->bgp->advertisedGroups = [
        RouterBgpAdvertisedGroupsEnum::ALL_PEER_VPC_SUBNETS,
    ];
    $request->router1->bgp->advertisedIpRanges = [
        new RouterAdvertisedIpRange(),
        new RouterAdvertisedIpRange(),
        new RouterAdvertisedIpRange(),
        new RouterAdvertisedIpRange(),
    ];
    $request->router1->bgp->asn = 133216;
    $request->router1->bgp->keepaliveInterval = 638005;
    $request->router1->bgpPeers = [
        new RouterBgpPeer(),
        new RouterBgpPeer(),
        new RouterBgpPeer(),
        new RouterBgpPeer(),
    ];
    $request->router1->creationTimestamp = 'eveniet';
    $request->router1->description = 'libero';
    $request->router1->encryptedInterconnectRouter = false;
    $request->router1->id = 'aut';
    $request->router1->interfaces = [
        new RouterInterface(),
        new RouterInterface(),
        new RouterInterface(),
        new RouterInterface(),
    ];
    $request->router1->kind = 'temporibus';
    $request->router1->md5AuthenticationKeys = [
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
    ];
    $request->router1->name = 'Sarah Waters';
    $request->router1->nats = [
        new RouterNat(),
        new RouterNat(),
        new RouterNat(),
        new RouterNat(),
    ];
    $request->router1->network = 'delectus';
    $request->router1->region = 'blanditiis';
    $request->router1->selfLink = 'inventore';
    $request->router1->selfLinkWithId = 'quos';
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'amet';
    $request->fields = 'consequatur';
    $request->key = 'dolor';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->quotaUser = 'dolorem';
    $request->region = 'doloribus';
    $request->requestId = 'sit';
    $request->routerPathParameter = 'doloremque';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'sunt';
    $request->userIp = 'quas';

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
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerBfdModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerBfdPacketModeEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\RouterNatTypeEnum;
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
    $request->router1->bgp->advertiseMode = RouterBgpAdvertiseModeEnum::CUSTOM;
    $request->router1->bgp->advertisedGroups = [
        RouterBgpAdvertisedGroupsEnum::ALL_VPC_SUBNETS,
    ];
    $request->router1->bgp->advertisedIpRanges = [
        new RouterAdvertisedIpRange(),
    ];
    $request->router1->bgp->asn = 391495;
    $request->router1->bgp->keepaliveInterval = 860911;
    $request->router1->bgpPeers = [
        new RouterBgpPeer(),
        new RouterBgpPeer(),
    ];
    $request->router1->creationTimestamp = 'temporibus';
    $request->router1->description = 'architecto';
    $request->router1->encryptedInterconnectRouter = false;
    $request->router1->id = 'odio';
    $request->router1->interfaces = [
        new RouterInterface(),
        new RouterInterface(),
        new RouterInterface(),
    ];
    $request->router1->kind = 'ullam';
    $request->router1->md5AuthenticationKeys = [
        new RouterMd5AuthenticationKey(),
    ];
    $request->router1->name = 'Billy Langosh';
    $request->router1->nats = [
        new RouterNat(),
    ];
    $request->router1->network = 'at';
    $request->router1->region = 'expedita';
    $request->router1->selfLink = 'ipsa';
    $request->router1->selfLinkWithId = 'ab';
    $request->accessToken = 'at';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'sunt';
    $request->key = 'iste';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->project = 'praesentium';
    $request->quotaUser = 'consectetur';
    $request->region = 'vitae';
    $request->routerPathParameter = 'nemo';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'dolorem';
    $request->userIp = 'officia';

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
        'repudiandae',
        'similique',
    ];
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->fields = 'et';
    $request->key = 'ullam';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->project = 'ut';
    $request->quotaUser = 'cumque';
    $request->region = 'quasi';
    $request->resource = 'nostrum';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'accusamus';
    $request->userIp = 'voluptas';

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
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerBfdModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerBfdPacketModeEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\RouterNatTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutersUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutersUpdateRequest();
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
    ];
    $request->router1->bgp->asn = 678213;
    $request->router1->bgp->keepaliveInterval = 394800;
    $request->router1->bgpPeers = [
        new RouterBgpPeer(),
        new RouterBgpPeer(),
    ];
    $request->router1->creationTimestamp = 'veniam';
    $request->router1->description = 'minima';
    $request->router1->encryptedInterconnectRouter = false;
    $request->router1->id = 'occaecati';
    $request->router1->interfaces = [
        new RouterInterface(),
        new RouterInterface(),
    ];
    $request->router1->kind = 'accusamus';
    $request->router1->md5AuthenticationKeys = [
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
    ];
    $request->router1->name = 'Pat Rau';
    $request->router1->nats = [
        new RouterNat(),
        new RouterNat(),
        new RouterNat(),
    ];
    $request->router1->network = 'explicabo';
    $request->router1->region = 'tempore';
    $request->router1->selfLink = 'est';
    $request->router1->selfLinkWithId = 'sapiente';
    $request->accessToken = 'provident';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'illum';
    $request->key = 'animi';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->project = 'optio';
    $request->quotaUser = 'eos';
    $request->region = 'cupiditate';
    $request->requestId = 'facilis';
    $request->routerPathParameter = 'perspiciatis';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'molestias';
    $request->userIp = 'officiis';

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
