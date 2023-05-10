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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'suscipit';
    $request->fields = 'dicta';
    $request->filter = 'ipsam';
    $request->includeAllScopes = false;
    $request->key = 'aspernatur';
    $request->maxResults = 808751;
    $request->oauthToken = 'voluptatibus';
    $request->orderBy = 'ipsa';
    $request->pageToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'quibusdam';
    $request->quotaUser = 'doloremque';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'voluptatum';
    $request->userIp = 'eligendi';

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
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facilis';
    $request->fields = 'natus';
    $request->key = 'laborum';
    $request->oauthToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'repellat';
    $request->region = 'molestias';
    $request->requestId = 'amet';
    $request->router = 'veniam';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'vero';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellat';
    $request->fields = 'similique';
    $request->key = 'ut';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'et';
    $request->quotaUser = 'voluptates';
    $request->region = 'excepturi';
    $request->router = 'placeat';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'natus';
    $request->userIp = 'molestiae';

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
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->fields = 'fugit';
    $request->filter = 'neque';
    $request->key = 'magnam';
    $request->maxResults = 255655;
    $request->natName = 'fugit';
    $request->oauthToken = 'voluptates';
    $request->orderBy = 'beatae';
    $request->pageToken = 'id';
    $request->prettyPrint = false;
    $request->project = 'unde';
    $request->quotaUser = 'consequuntur';
    $request->region = 'ratione';
    $request->returnPartialSuccess = false;
    $request->router = 'quam';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'cupiditate';

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
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quas';
    $request->fields = 'consequatur';
    $request->key = 'facilis';
    $request->oauthToken = 'ut';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'sint';
    $request->region = 'saepe';
    $request->router = 'atque';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'architecto';
    $request->userIp = 'molestias';

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
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerEnableEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterInterface;
use \OpenAPI\OpenAPI\Models\Shared\RouterInterfaceManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterMd5AuthenticationKey;
use \OpenAPI\OpenAPI\Models\Shared\RouterNat;
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
    $request->router->bgp->advertiseMode = RouterBgpAdvertiseModeEnum::CUSTOM;
    $request->router->bgp->advertisedGroups = [
        RouterBgpAdvertisedGroupsEnum::ALL_SUBNETS,
        RouterBgpAdvertisedGroupsEnum::ALL_SUBNETS,
        RouterBgpAdvertisedGroupsEnum::ALL_SUBNETS,
        RouterBgpAdvertisedGroupsEnum::ALL_SUBNETS,
    ];
    $request->router->bgp->advertisedIpRanges = [
        new RouterAdvertisedIpRange(),
    ];
    $request->router->bgp->asn = 534786;
    $request->router->bgp->keepaliveInterval = 767112;
    $request->router->bgpPeers = [
        new RouterBgpPeer(),
        new RouterBgpPeer(),
        new RouterBgpPeer(),
    ];
    $request->router->creationTimestamp = 'rem';
    $request->router->description = 'facere';
    $request->router->encryptedInterconnectRouter = false;
    $request->router->id = 'vel';
    $request->router->interfaces = [
        new RouterInterface(),
        new RouterInterface(),
        new RouterInterface(),
    ];
    $request->router->kind = 'porro';
    $request->router->md5AuthenticationKeys = [
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
    ];
    $request->router->name = 'Patsy McGlynn I';
    $request->router->nats = [
        new RouterNat(),
        new RouterNat(),
        new RouterNat(),
        new RouterNat(),
    ];
    $request->router->network = 'animi';
    $request->router->region = 'consequuntur';
    $request->router->selfLink = 'doloremque';
    $request->accessToken = 'magni';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reprehenderit';
    $request->fields = 'officiis';
    $request->key = 'eius';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'similique';
    $request->quotaUser = 'saepe';
    $request->region = 'aut';
    $request->requestId = 'ipsum';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'eligendi';
    $request->userIp = 'facere';

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
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cum';
    $request->fields = 'minus';
    $request->filter = 'ratione';
    $request->key = 'placeat';
    $request->maxResults = 668865;
    $request->oauthToken = 'nam';
    $request->orderBy = 'dolorum';
    $request->pageToken = 'repellat';
    $request->prettyPrint = false;
    $request->project = 'dignissimos';
    $request->quotaUser = 'asperiores';
    $request->region = 'optio';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'minus';

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
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerEnableEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterInterface;
use \OpenAPI\OpenAPI\Models\Shared\RouterInterfaceManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterMd5AuthenticationKey;
use \OpenAPI\OpenAPI\Models\Shared\RouterNat;
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
        RouterBgpAdvertisedGroupsEnum::ALL_SUBNETS,
    ];
    $request->router1->bgp->advertisedIpRanges = [
        new RouterAdvertisedIpRange(),
        new RouterAdvertisedIpRange(),
        new RouterAdvertisedIpRange(),
    ];
    $request->router1->bgp->asn = 926482;
    $request->router1->bgp->keepaliveInterval = 990901;
    $request->router1->bgpPeers = [
        new RouterBgpPeer(),
    ];
    $request->router1->creationTimestamp = 'temporibus';
    $request->router1->description = 'reiciendis';
    $request->router1->encryptedInterconnectRouter = false;
    $request->router1->id = 'nisi';
    $request->router1->interfaces = [
        new RouterInterface(),
        new RouterInterface(),
        new RouterInterface(),
    ];
    $request->router1->kind = 'earum';
    $request->router1->md5AuthenticationKeys = [
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
    ];
    $request->router1->name = 'Levi Quigley';
    $request->router1->nats = [
        new RouterNat(),
        new RouterNat(),
        new RouterNat(),
        new RouterNat(),
    ];
    $request->router1->network = 'quam';
    $request->router1->region = 'consequatur';
    $request->router1->selfLink = 'expedita';
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ea';
    $request->fields = 'excepturi';
    $request->key = 'repellat';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->project = 'consectetur';
    $request->quotaUser = 'suscipit';
    $request->region = 'est';
    $request->requestId = 'pariatur';
    $request->routerPathParameter = 'illum';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'sit';
    $request->userIp = 'ut';

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
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerEnableEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterInterface;
use \OpenAPI\OpenAPI\Models\Shared\RouterInterfaceManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterMd5AuthenticationKey;
use \OpenAPI\OpenAPI\Models\Shared\RouterNat;
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
    $request->dollarXgafv = XgafvEnum::ONE;
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
    $request->router1->bgp->asn = 5964;
    $request->router1->bgp->keepaliveInterval = 682449;
    $request->router1->bgpPeers = [
        new RouterBgpPeer(),
    ];
    $request->router1->creationTimestamp = 'tenetur';
    $request->router1->description = 'maxime';
    $request->router1->encryptedInterconnectRouter = false;
    $request->router1->id = 'in';
    $request->router1->interfaces = [
        new RouterInterface(),
    ];
    $request->router1->kind = 'animi';
    $request->router1->md5AuthenticationKeys = [
        new RouterMd5AuthenticationKey(),
        new RouterMd5AuthenticationKey(),
    ];
    $request->router1->name = 'Jason Fisher';
    $request->router1->nats = [
        new RouterNat(),
    ];
    $request->router1->network = 'ab';
    $request->router1->region = 'ut';
    $request->router1->selfLink = 'sint';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eius';
    $request->fields = 'ratione';
    $request->key = 'error';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->project = 'mollitia';
    $request->quotaUser = 'suscipit';
    $request->region = 'occaecati';
    $request->routerPathParameter = 'totam';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'est';
    $request->userIp = 'eius';

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
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerEnableEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterBgpPeerManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterInterface;
use \OpenAPI\OpenAPI\Models\Shared\RouterInterfaceManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouterMd5AuthenticationKey;
use \OpenAPI\OpenAPI\Models\Shared\RouterNat;
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
    ];
    $request->router1->bgp->advertisedIpRanges = [
        new RouterAdvertisedIpRange(),
        new RouterAdvertisedIpRange(),
    ];
    $request->router1->bgp->asn = 26030;
    $request->router1->bgp->keepaliveInterval = 615199;
    $request->router1->bgpPeers = [
        new RouterBgpPeer(),
        new RouterBgpPeer(),
        new RouterBgpPeer(),
    ];
    $request->router1->creationTimestamp = 'vitae';
    $request->router1->description = 'minima';
    $request->router1->encryptedInterconnectRouter = false;
    $request->router1->id = 'ipsum';
    $request->router1->interfaces = [
        new RouterInterface(),
        new RouterInterface(),
        new RouterInterface(),
        new RouterInterface(),
    ];
    $request->router1->kind = 'eos';
    $request->router1->md5AuthenticationKeys = [
        new RouterMd5AuthenticationKey(),
    ];
    $request->router1->name = 'Ms. Sandra Carroll';
    $request->router1->nats = [
        new RouterNat(),
        new RouterNat(),
    ];
    $request->router1->network = 'ipsum';
    $request->router1->region = 'omnis';
    $request->router1->selfLink = 'eligendi';
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perspiciatis';
    $request->fields = 'consectetur';
    $request->key = 'eos';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->project = 'vitae';
    $request->quotaUser = 'aperiam';
    $request->region = 'animi';
    $request->requestId = 'quisquam';
    $request->routerPathParameter = 'possimus';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'ad';
    $request->userIp = 'quibusdam';

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
