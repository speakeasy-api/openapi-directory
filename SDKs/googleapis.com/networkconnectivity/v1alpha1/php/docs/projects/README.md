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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->hubInput = new HubInput();
    $request->hubInput->createTime = 'perferendis';
    $request->hubInput->description = 'ipsam';
    $request->hubInput->labels = [
        'sapiente' => 'quo',
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
    ];
    $request->hubInput->name = 'Erik Lebsack';
    $request->hubInput->updateTime = 'dicta';
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'fugit';
    $request->hubId = 'deleniti';
    $request->key = 'hic';
    $request->oauthToken = 'optio';
    $request->parent = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->requestId = 'commodi';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'modi';

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
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'ipsum';
    $request->filter = 'excepturi';
    $request->key = 'aspernatur';
    $request->oauthToken = 'perferendis';
    $request->orderBy = 'ad';
    $request->pageSize = 617636;
    $request->pageToken = 'sed';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'laboriosam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->internalRangeInput = new InternalRangeInput();
    $request->internalRangeInput->createTime = 'saepe';
    $request->internalRangeInput->description = 'fuga';
    $request->internalRangeInput->ipCidrRange = 'in';
    $request->internalRangeInput->labels = [
        'iste' => 'iure',
        'saepe' => 'quidem',
    ];
    $request->internalRangeInput->name = 'Brenda Wisozk';
    $request->internalRangeInput->network = 'laborum';
    $request->internalRangeInput->overlaps = [
        InternalRangeOverlapsEnum::OVERLAP_UNSPECIFIED,
    ];
    $request->internalRangeInput->peering = InternalRangePeeringEnum::FOR_SELF;
    $request->internalRangeInput->prefixLength = 128926;
    $request->internalRangeInput->targetCidrRange = [
        'enim',
        'omnis',
        'nemo',
        'minima',
    ];
    $request->internalRangeInput->updateTime = 'excepturi';
    $request->internalRangeInput->usage = InternalRangeUsageEnum::USAGE_UNSPECIFIED;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->internalRangeId = 'architecto';
    $request->key = 'mollitia';
    $request->oauthToken = 'dolorem';
    $request->parent = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->requestId = 'repellat';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'occaecati';

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
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'velit';
    $request->filter = 'error';
    $request->key = 'quia';
    $request->oauthToken = 'quis';
    $request->orderBy = 'vitae';
    $request->pageSize = 674752;
    $request->pageToken = 'animi';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'sequi';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'aut';
    $request->filter = 'quasi';
    $request->key = 'error';
    $request->name = 'Neal Boyer';
    $request->oauthToken = 'vero';
    $request->pageSize = 468651;
    $request->pageToken = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'omnis';

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
        'perferendis' => 'doloremque',
        'reprehenderit' => 'ut',
        'maiores' => 'dicta',
    ];
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->fields = 'dicta';
    $request->key = 'harum';
    $request->name = 'Sophia Jerde I';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestias';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'pariatur';

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
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptates';
    $request->fields = 'quasi';
    $request->filter = 'repudiandae';
    $request->key = 'sint';
    $request->name = 'Patti Gottlieb MD';
    $request->oauthToken = 'quibusdam';
    $request->pageSize = 131797;
    $request->pageToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'labore';

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
use \OpenAPI\OpenAPI\Models\Shared\RouterApplianceInstance;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsSpokesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->spokeInput = new SpokeInput();
    $request->spokeInput->createTime = 'qui';
    $request->spokeInput->description = 'aliquid';
    $request->spokeInput->hub = 'cupiditate';
    $request->spokeInput->labels = [
        'perferendis' => 'magni',
        'assumenda' => 'ipsam',
        'alias' => 'fugit',
    ];
    $request->spokeInput->linkedInterconnectAttachments = [
        'excepturi',
        'tempora',
        'facilis',
    ];
    $request->spokeInput->linkedRouterApplianceInstances = [
        new RouterApplianceInstance(),
        new RouterApplianceInstance(),
        new RouterApplianceInstance(),
    ];
    $request->spokeInput->linkedVpnTunnels = [
        'delectus',
        'eum',
    ];
    $request->spokeInput->name = 'Sheri Mayer';
    $request->spokeInput->updateTime = 'necessitatibus';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'debitis';
    $request->key = 'a';
    $request->oauthToken = 'dolorum';
    $request->parent = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->requestId = 'illum';
    $request->spokeId = 'maiores';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'dicta';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'aliquid';
    $request->key = 'laborum';
    $request->name = 'Alfred McClure';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->requestId = 'provident';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'id';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'deserunt';
    $request->key = 'nisi';
    $request->name = 'Ada Moen IV';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'labore';

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
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'eum';
    $request->key = 'vero';
    $request->oauthToken = 'aspernatur';
    $request->optionsRequestedPolicyVersion = 102863;
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->resource = 'et';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'ullam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'mollitia';
    $request->filter = 'reiciendis';
    $request->key = 'mollitia';
    $request->oauthToken = 'ad';
    $request->orderBy = 'eum';
    $request->pageSize = 221262;
    $request->pageToken = 'necessitatibus';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'iure';

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
use \OpenAPI\OpenAPI\Models\Shared\RouterApplianceInstance;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsSpokesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsSpokesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->spokeInput = new SpokeInput();
    $request->spokeInput->createTime = 'debitis';
    $request->spokeInput->description = 'eius';
    $request->spokeInput->hub = 'maxime';
    $request->spokeInput->labels = [
        'facilis' => 'in',
        'architecto' => 'architecto',
        'repudiandae' => 'ullam',
    ];
    $request->spokeInput->linkedInterconnectAttachments = [
        'nihil',
        'repellat',
        'quibusdam',
    ];
    $request->spokeInput->linkedRouterApplianceInstances = [
        new RouterApplianceInstance(),
    ];
    $request->spokeInput->linkedVpnTunnels = [
        'pariatur',
        'accusantium',
        'consequuntur',
        'praesentium',
    ];
    $request->spokeInput->name = 'Victor Casper';
    $request->spokeInput->updateTime = 'pariatur';
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'odit';
    $request->key = 'ea';
    $request->name = 'Virginia Wunsch';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'autem';
    $request->requestId = 'nam';
    $request->updateMask = 'eaque';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'nemo';

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
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'amet';
    $request->setIamPolicyRequest->policy->version = 11714;
    $request->setIamPolicyRequest->updateMask = 'cumque';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'nobis';
    $request->key = 'dolores';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->resource = 'dignissimos';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'quis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'perferendis',
    ];
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quam';
    $request->fields = 'dolor';
    $request->key = 'vero';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->resource = 'recusandae';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'facilis';

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
