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
    $request->accessToken = 'minus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'magni';
    $request->key = 'tenetur';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'harum';
    $request->requestId = 'dicta';
    $request->route = 'nesciunt';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'placeat';
    $request->userIp = 'sed';

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
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ab';
    $request->fields = 'quaerat';
    $request->key = 'sequi';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'voluptas';
    $request->route = 'suscipit';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'ullam';
    $request->userIp = 'iusto';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->route = new Route();
    $request->route->asPaths = [
        new RouteAsPath(),
        new RouteAsPath(),
        new RouteAsPath(),
    ];
    $request->route->creationTimestamp = 'ab';
    $request->route->description = 'recusandae';
    $request->route->destRange = 'quia';
    $request->route->id = 'iure';
    $request->route->kind = 'ex';
    $request->route->name = 'Miss Kurt Dickens';
    $request->route->network = 'dolorem';
    $request->route->nextHopGateway = 'ducimus';
    $request->route->nextHopIlb = 'harum';
    $request->route->nextHopInstance = 'sit';
    $request->route->nextHopInterconnectAttachment = 'recusandae';
    $request->route->nextHopIp = 'corrupti';
    $request->route->nextHopNetwork = 'hic';
    $request->route->nextHopPeering = 'nam';
    $request->route->nextHopVpnTunnel = 'quod';
    $request->route->priority = 295268;
    $request->route->routeStatus = RouteRouteStatusEnum::INACTIVE;
    $request->route->routeType = RouteRouteTypeEnum::TRANSIT;
    $request->route->selfLink = 'temporibus';
    $request->route->tags = [
        'esse',
        'officiis',
        'voluptas',
        'excepturi',
    ];
    $request->route->warnings = [
        new RouteWarnings(),
        new RouteWarnings(),
        new RouteWarnings(),
    ];
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'illo';
    $request->key = 'sit';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->project = 'consequatur';
    $request->quotaUser = 'quis';
    $request->requestId = 'aperiam';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'ut';
    $request->userIp = 'fugiat';

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
    $request->accessToken = 'est';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sit';
    $request->fields = 'nemo';
    $request->filter = 'atque';
    $request->key = 'laudantium';
    $request->maxResults = 153803;
    $request->oauthToken = 'quaerat';
    $request->orderBy = 'laudantium';
    $request->pageToken = 'eius';
    $request->prettyPrint = false;
    $request->project = 'impedit';
    $request->quotaUser = 'consectetur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'perspiciatis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'corrupti',
        'occaecati',
        'eos',
    ];
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magni';
    $request->fields = 'assumenda';
    $request->key = 'adipisci';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'sit';
    $request->resource = 'cum';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'quo';

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
