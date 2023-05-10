# projects

### Available Operations

* [networkconnectivityProjectsLocationsGlobalHubsCreate](#networkconnectivityprojectslocationsglobalhubscreate) - Creates a new Network Connectivity Center hub in the specified project.
* [networkconnectivityProjectsLocationsGlobalHubsList](#networkconnectivityprojectslocationsglobalhubslist) - Lists the Network Connectivity Center hubs associated with a given project.
* [networkconnectivityProjectsLocationsInternalRangesCreate](#networkconnectivityprojectslocationsinternalrangescreate) - Creates a new internal range in a given project and location.
* [networkconnectivityProjectsLocationsInternalRangesList](#networkconnectivityprojectslocationsinternalrangeslist) - Lists internal ranges in a given project and location.
* [networkconnectivityProjectsLocationsList](#networkconnectivityprojectslocationslist) - Lists information about the supported locations for this service.
* [networkconnectivityProjectsLocationsOperationsCancel](#networkconnectivityprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [networkconnectivityProjectsLocationsOperationsList](#networkconnectivityprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [networkconnectivityProjectsLocationsSpokesCreate](#networkconnectivityprojectslocationsspokescreate) - Creates a Network Connectivity Center spoke.
* [networkconnectivityProjectsLocationsSpokesDelete](#networkconnectivityprojectslocationsspokesdelete) - Deletes a Network Connectivity Center spoke.
* [networkconnectivityProjectsLocationsSpokesGet](#networkconnectivityprojectslocationsspokesget) - Gets details about a Network Connectivity Center spoke.
* [networkconnectivityProjectsLocationsSpokesGetIamPolicy](#networkconnectivityprojectslocationsspokesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [networkconnectivityProjectsLocationsSpokesList](#networkconnectivityprojectslocationsspokeslist) - Lists the Network Connectivity Center spokes in a specified project and location.
* [networkconnectivityProjectsLocationsSpokesPatch](#networkconnectivityprojectslocationsspokespatch) - Updates the parameters of a Network Connectivity Center spoke.
* [networkconnectivityProjectsLocationsSpokesSetIamPolicy](#networkconnectivityprojectslocationsspokessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [networkconnectivityProjectsLocationsSpokesTestIamPermissions](#networkconnectivityprojectslocationsspokestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## networkconnectivityProjectsLocationsGlobalHubsCreate

Creates a new Network Connectivity Center hub in the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HubInput;
use \OpenAPI\OpenAPI\Models\Shared\RoutingVPCInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->hubInput = new HubInput();
    $request->hubInput->description = 'ab';
    $request->hubInput->labels = [
        'veritatis' => 'deserunt',
        'perferendis' => 'ipsam',
    ];
    $request->hubInput->name = 'Timmy Satterfield';
    $request->hubInput->routingVpcs = [
        new RoutingVPCInput(),
        new RoutingVPCInput(),
        new RoutingVPCInput(),
        new RoutingVPCInput(),
    ];
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->hubId = 'esse';
    $request->key = 'totam';
    $request->oauthToken = 'porro';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->requestId = 'nam';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkconnectivityProjectsLocationsGlobalHubsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkconnectivityProjectsLocationsGlobalHubsList

Lists the Network Connectivity Center hubs associated with a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsGlobalHubsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsGlobalHubsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsGlobalHubsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->fields = 'totam';
    $request->filter = 'beatae';
    $request->key = 'commodi';
    $request->oauthToken = 'molestiae';
    $request->orderBy = 'modi';
    $request->pageSize = 186332;
    $request->pageToken = 'impedit';
    $request->parent = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new NetworkconnectivityProjectsLocationsGlobalHubsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkconnectivityProjectsLocationsGlobalHubsList($request, $requestSecurity);

    if ($response->listHubsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkconnectivityProjectsLocationsInternalRangesCreate

Creates a new internal range in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsInternalRangesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InternalRangeInput;
use \OpenAPI\OpenAPI\Models\Shared\InternalRangeOverlapsEnum;
use \OpenAPI\OpenAPI\Models\Shared\InternalRangePeeringEnum;
use \OpenAPI\OpenAPI\Models\Shared\InternalRangeUsageEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsInternalRangesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->internalRangeInput = new InternalRangeInput();
    $request->internalRangeInput->createTime = 'perferendis';
    $request->internalRangeInput->description = 'ad';
    $request->internalRangeInput->ipCidrRange = 'natus';
    $request->internalRangeInput->labels = [
        'iste' => 'dolor',
    ];
    $request->internalRangeInput->name = 'Lester Welch';
    $request->internalRangeInput->network = 'in';
    $request->internalRangeInput->overlaps = [
        InternalRangeOverlapsEnum::OVERLAP_ROUTE_RANGE,
        InternalRangeOverlapsEnum::OVERLAP_UNSPECIFIED,
    ];
    $request->internalRangeInput->peering = InternalRangePeeringEnum::NOT_SHARED;
    $request->internalRangeInput->prefixLength = 697631;
    $request->internalRangeInput->targetCidrRange = [
        'ipsa',
    ];
    $request->internalRangeInput->updateTime = 'reiciendis';
    $request->internalRangeInput->usage = InternalRangeUsageEnum::EXTERNAL_TO_VPC;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'dolorem';
    $request->internalRangeId = 'corporis';
    $request->key = 'explicabo';
    $request->oauthToken = 'nobis';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->requestId = 'nemo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkconnectivityProjectsLocationsInternalRangesCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkconnectivityProjectsLocationsInternalRangesList

Lists internal ranges in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsInternalRangesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsInternalRangesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsInternalRangesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->filter = 'architecto';
    $request->key = 'mollitia';
    $request->oauthToken = 'dolorem';
    $request->orderBy = 'culpa';
    $request->pageSize = 161309;
    $request->pageToken = 'repellat';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new NetworkconnectivityProjectsLocationsInternalRangesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkconnectivityProjectsLocationsInternalRangesList($request, $requestSecurity);

    if ($response->listInternalRangesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkconnectivityProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'quia';
    $request->filter = 'quis';
    $request->key = 'vitae';
    $request->name = 'Matt Hamill';
    $request->oauthToken = 'sequi';
    $request->pageSize = 949572;
    $request->pageToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new NetworkconnectivityProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkconnectivityProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkconnectivityProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'temporibus' => 'laborum',
        'quasi' => 'reiciendis',
        'voluptatibus' => 'vero',
    ];
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'ipsa';
    $request->key = 'omnis';
    $request->name = 'Ms. Karla Aufderhar';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new NetworkconnectivityProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkconnectivityProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkconnectivityProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->filter = 'commodi';
    $request->key = 'repudiandae';
    $request->name = 'Edna Pouros';
    $request->oauthToken = 'pariatur';
    $request->pageSize = 265389;
    $request->pageToken = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new NetworkconnectivityProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkconnectivityProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkconnectivityProjectsLocationsSpokesCreate

Creates a Network Connectivity Center spoke.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpokeInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedInterconnectAttachmentsInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedRouterApplianceInstancesInput;
use \OpenAPI\OpenAPI\Models\Shared\RouterApplianceInstance;
use \OpenAPI\OpenAPI\Models\Shared\LinkedVpnTunnelsInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsSpokesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->spokeInput = new SpokeInput();
    $request->spokeInput->description = 'sint';
    $request->spokeInput->hub = 'veritatis';
    $request->spokeInput->labels = [
        'incidunt' => 'enim',
        'consequatur' => 'est',
        'quibusdam' => 'explicabo',
        'deserunt' => 'distinctio',
    ];
    $request->spokeInput->linkedInterconnectAttachments = new LinkedInterconnectAttachmentsInput();
    $request->spokeInput->linkedInterconnectAttachments->siteToSiteDataTransfer = false;
    $request->spokeInput->linkedInterconnectAttachments->uris = [
        'labore',
        'modi',
        'qui',
        'aliquid',
    ];
    $request->spokeInput->linkedRouterApplianceInstances = new LinkedRouterApplianceInstancesInput();
    $request->spokeInput->linkedRouterApplianceInstances->instances = [
        new RouterApplianceInstance(),
        new RouterApplianceInstance(),
        new RouterApplianceInstance(),
    ];
    $request->spokeInput->linkedRouterApplianceInstances->siteToSiteDataTransfer = false;
    $request->spokeInput->linkedVpnTunnels = new LinkedVpnTunnelsInput();
    $request->spokeInput->linkedVpnTunnels->siteToSiteDataTransfer = false;
    $request->spokeInput->linkedVpnTunnels->uris = [
        'perferendis',
        'magni',
        'assumenda',
    ];
    $request->spokeInput->name = 'Linda Corkery';
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'labore';
    $request->key = 'delectus';
    $request->oauthToken = 'eum';
    $request->parent = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->requestId = 'sint';
    $request->spokeId = 'aliquid';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new NetworkconnectivityProjectsLocationsSpokesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkconnectivityProjectsLocationsSpokesCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkconnectivityProjectsLocationsSpokesDelete

Deletes a Network Connectivity Center spoke.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsSpokesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'a';
    $request->key = 'dolorum';
    $request->name = 'Arlene Stamm';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->requestId = 'cumque';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new NetworkconnectivityProjectsLocationsSpokesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkconnectivityProjectsLocationsSpokesDelete($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkconnectivityProjectsLocationsSpokesGet

Gets details about a Network Connectivity Center spoke.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsSpokesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'non';
    $request->fields = 'occaecati';
    $request->key = 'enim';
    $request->name = 'Toby Pouros';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new NetworkconnectivityProjectsLocationsSpokesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkconnectivityProjectsLocationsSpokesGet($request, $requestSecurity);

    if ($response->spoke !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkconnectivityProjectsLocationsSpokesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsSpokesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vel';
    $request->fields = 'natus';
    $request->key = 'omnis';
    $request->oauthToken = 'molestiae';
    $request->optionsRequestedPolicyVersion = 19193;
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->resource = 'magnam';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'id';

    $requestSecurity = new NetworkconnectivityProjectsLocationsSpokesGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkconnectivityProjectsLocationsSpokesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkconnectivityProjectsLocationsSpokesList

Lists the Network Connectivity Center spokes in a specified project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsSpokesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'nobis';
    $request->filter = 'eum';
    $request->key = 'vero';
    $request->oauthToken = 'aspernatur';
    $request->orderBy = 'architecto';
    $request->pageSize = 298282;
    $request->pageToken = 'et';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new NetworkconnectivityProjectsLocationsSpokesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkconnectivityProjectsLocationsSpokesList($request, $requestSecurity);

    if ($response->listSpokesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkconnectivityProjectsLocationsSpokesPatch

Updates the parameters of a Network Connectivity Center spoke.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpokeInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedInterconnectAttachmentsInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedRouterApplianceInstancesInput;
use \OpenAPI\OpenAPI\Models\Shared\RouterApplianceInstance;
use \OpenAPI\OpenAPI\Models\Shared\LinkedVpnTunnelsInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsSpokesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->spokeInput = new SpokeInput();
    $request->spokeInput->description = 'accusantium';
    $request->spokeInput->hub = 'mollitia';
    $request->spokeInput->labels = [
        'mollitia' => 'ad',
        'eum' => 'dolor',
        'necessitatibus' => 'odit',
        'nemo' => 'quasi',
    ];
    $request->spokeInput->linkedInterconnectAttachments = new LinkedInterconnectAttachmentsInput();
    $request->spokeInput->linkedInterconnectAttachments->siteToSiteDataTransfer = false;
    $request->spokeInput->linkedInterconnectAttachments->uris = [
        'doloribus',
        'debitis',
    ];
    $request->spokeInput->linkedRouterApplianceInstances = new LinkedRouterApplianceInstancesInput();
    $request->spokeInput->linkedRouterApplianceInstances->instances = [
        new RouterApplianceInstance(),
        new RouterApplianceInstance(),
    ];
    $request->spokeInput->linkedRouterApplianceInstances->siteToSiteDataTransfer = false;
    $request->spokeInput->linkedVpnTunnels = new LinkedVpnTunnelsInput();
    $request->spokeInput->linkedVpnTunnels->siteToSiteDataTransfer = false;
    $request->spokeInput->linkedVpnTunnels->uris = [
        'deleniti',
        'facilis',
        'in',
        'architecto',
    ];
    $request->spokeInput->name = 'Elvira Herman';
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'saepe';
    $request->key = 'pariatur';
    $request->name = 'Kathryn Lang';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->requestId = 'illum';
    $request->updateMask = 'pariatur';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new NetworkconnectivityProjectsLocationsSpokesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkconnectivityProjectsLocationsSpokesPatch($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkconnectivityProjectsLocationsSpokesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'accusantium';
    $request->setIamPolicyRequest->policy->version = 69167;
    $request->setIamPolicyRequest->updateMask = 'maiores';
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'autem';
    $request->key = 'nam';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->resource = 'nemo';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new NetworkconnectivityProjectsLocationsSpokesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkconnectivityProjectsLocationsSpokesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## networkconnectivityProjectsLocationsSpokesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'aut',
    ];
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'libero';
    $request->key = 'nobis';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->resource = 'totam';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'eaque';

    $requestSecurity = new NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkconnectivityProjectsLocationsSpokesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
