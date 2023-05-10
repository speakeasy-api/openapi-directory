# routes

### Available Operations

* [computeRoutesDelete](#computeroutesdelete) - Deletes the specified Route resource.
* [computeRoutesGet](#computeroutesget) - Returns the specified Route resource.
* [computeRoutesInsert](#computeroutesinsert) - Creates a Route resource in the specified project using the data included in the request.
* [computeRoutesList](#computerouteslist) - Retrieves the list of Route resources available to the specified project.

## computeRoutesDelete

Deletes the specified Route resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsum';
    $request->fields = 'perferendis';
    $request->key = 'ex';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->quotaUser = 'praesentium';
    $request->requestId = 'nisi';
    $request->route = 'libero';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'at';
    $request->userIp = 'amet';

    $requestSecurity = new ComputeRoutesDeleteSecurity();
    $requestSecurity->option1 = new ComputeRoutesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routes->computeRoutesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRoutesGet

Returns the specified Route resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'aut';
    $request->key = 'ut';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->project = 'quae';
    $request->quotaUser = 'doloribus';
    $request->route = 'ipsum';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'accusantium';
    $request->userIp = 'nam';

    $requestSecurity = new ComputeRoutesGetSecurity();
    $requestSecurity->option1 = new ComputeRoutesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routes->computeRoutesGet($request, $requestSecurity);

    if ($response->route !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRoutesInsert

Creates a Route resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Route;
use \OpenAPI\OpenAPI\Models\Shared\RouteAsPath;
use \OpenAPI\OpenAPI\Models\Shared\RouteAsPathPathSegmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteRouteStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteRouteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteWarnings;
use \OpenAPI\OpenAPI\Models\Shared\RouteWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->route = new Route();
    $request->route->asPaths = [
        new RouteAsPath(),
    ];
    $request->route->creationTimestamp = 'ex';
    $request->route->description = 'voluptatibus';
    $request->route->destRange = 'voluptas';
    $request->route->id = 'reprehenderit';
    $request->route->kind = 'odio';
    $request->route->name = 'Frederick Lakin V';
    $request->route->network = 'quod';
    $request->route->nextHopGateway = 'dolor';
    $request->route->nextHopIlb = 'velit';
    $request->route->nextHopInstance = 'quam';
    $request->route->nextHopIp = 'incidunt';
    $request->route->nextHopNetwork = 'sint';
    $request->route->nextHopPeering = 'voluptatem';
    $request->route->nextHopVpnTunnel = 'odit';
    $request->route->priority = 555115;
    $request->route->routeStatus = RouteRouteStatusEnum::DROPPED;
    $request->route->routeType = RouteRouteTypeEnum::SUBNET;
    $request->route->selfLink = 'quos';
    $request->route->tags = [
        'ex',
    ];
    $request->route->warnings = [
        new RouteWarnings(),
        new RouteWarnings(),
        new RouteWarnings(),
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consectetur';
    $request->fields = 'porro';
    $request->key = 'nihil';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->project = 'possimus';
    $request->quotaUser = 'consequuntur';
    $request->requestId = 'odit';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'dolore';

    $requestSecurity = new ComputeRoutesInsertSecurity();
    $requestSecurity->option1 = new ComputeRoutesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routes->computeRoutesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRoutesList

Retrieves the list of Route resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'architecto';
    $request->fields = 'culpa';
    $request->filter = 'blanditiis';
    $request->key = 'atque';
    $request->maxResults = 897283;
    $request->oauthToken = 'possimus';
    $request->orderBy = 'in';
    $request->pageToken = 'qui';
    $request->prettyPrint = false;
    $request->project = 'laborum';
    $request->quotaUser = 'explicabo';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'eius';
    $request->userIp = 'est';

    $requestSecurity = new ComputeRoutesListSecurity();
    $requestSecurity->option1 = new ComputeRoutesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routes->computeRoutesList($request, $requestSecurity);

    if ($response->routeList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
