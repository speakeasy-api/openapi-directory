# routes

### Available Operations

* [computeRoutesDelete](#computeroutesdelete) - Deletes the specified Route resource.
* [computeRoutesGet](#computeroutesget) - Returns the specified Route resource.
* [computeRoutesInsert](#computeroutesinsert) - Creates a Route resource in the specified project using the data included in the request.
* [computeRoutesList](#computerouteslist) - Retrieves the list of Route resources available to the specified project.
* [computeRoutesTestIamPermissions](#computeroutestestiampermissions) - Returns permissions that a caller has on the specified resource.

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'necessitatibus';
    $request->key = 'iure';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->project = 'nulla';
    $request->quotaUser = 'eum';
    $request->requestId = 'reiciendis';
    $request->route = 'dignissimos';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'asperiores';
    $request->userIp = 'eaque';

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
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'perferendis';
    $request->key = 'non';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->project = 'voluptas';
    $request->quotaUser = 'cupiditate';
    $request->route = 'officiis';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'voluptates';
    $request->userIp = 'quas';

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
use \OpenAPI\OpenAPI\Models\Shared\RouteIlbRouteBehaviorOnUnhealthyEnum;
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->route = new Route();
    $request->route->allowConflictingSubnetworks = false;
    $request->route->asPaths = [
        new RouteAsPath(),
        new RouteAsPath(),
        new RouteAsPath(),
    ];
    $request->route->creationTimestamp = 'fugit';
    $request->route->description = 'tempora';
    $request->route->destRange = 'aperiam';
    $request->route->id = 'nesciunt';
    $request->route->ilbRouteBehaviorOnUnhealthy = RouteIlbRouteBehaviorOnUnhealthyEnum::DO_NOT_WITHDRAW_ROUTE_IF_ILB_UNHEALTHY;
    $request->route->kind = 'veniam';
    $request->route->name = 'Monique Pacocha';
    $request->route->network = 'sequi';
    $request->route->nextHopGateway = 'quod';
    $request->route->nextHopHub = 'modi';
    $request->route->nextHopIlb = 'occaecati';
    $request->route->nextHopInstance = 'occaecati';
    $request->route->nextHopInterconnectAttachment = 'vitae';
    $request->route->nextHopIp = 'provident';
    $request->route->nextHopNetwork = 'necessitatibus';
    $request->route->nextHopPeering = 'tempore';
    $request->route->nextHopVpnTunnel = 'illum';
    $request->route->priority = 124503;
    $request->route->routeStatus = RouteRouteStatusEnum::PENDING;
    $request->route->routeType = RouteRouteTypeEnum::TRANSIT;
    $request->route->selfLink = 'iusto';
    $request->route->selfLinkWithId = 'quam';
    $request->route->tags = [
        'nemo',
        'sequi',
        'quos',
    ];
    $request->route->warnings = [
        new RouteWarnings(),
        new RouteWarnings(),
        new RouteWarnings(),
        new RouteWarnings(),
    ];
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'quod';
    $request->key = 'temporibus';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'ut';
    $request->quotaUser = 'officiis';
    $request->requestId = 'porro';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'eum';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'expedita';
    $request->filter = 'modi';
    $request->key = 'fugit';
    $request->maxResults = 765202;
    $request->oauthToken = 'dolor';
    $request->orderBy = 'velit';
    $request->pageToken = 'ipsa';
    $request->prettyPrint = false;
    $request->project = 'ut';
    $request->quotaUser = 'provident';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'illo';
    $request->userIp = 'reprehenderit';

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

## computeRoutesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRoutesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRoutesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'molestiae',
        'beatae',
        'repellendus',
    ];
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aspernatur';
    $request->fields = 'corporis';
    $request->key = 'sit';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->project = 'ex';
    $request->quotaUser = 'consequatur';
    $request->resource = 'quo';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'dicta';

    $requestSecurity = new ComputeRoutesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRoutesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->routes->computeRoutesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
