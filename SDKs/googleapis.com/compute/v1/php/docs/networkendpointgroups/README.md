# networkEndpointGroups

### Available Operations

* [computeNetworkEndpointGroupsAggregatedList](#computenetworkendpointgroupsaggregatedlist) - Retrieves the list of network endpoint groups and sorts them by zone.
* [computeNetworkEndpointGroupsAttachNetworkEndpoints](#computenetworkendpointgroupsattachnetworkendpoints) - Attach a list of network endpoints to the specified network endpoint group.
* [computeNetworkEndpointGroupsDelete](#computenetworkendpointgroupsdelete) - Deletes the specified network endpoint group. The network endpoints in the NEG and the VM instances they belong to are not terminated when the NEG is deleted. Note that the NEG cannot be deleted if there are backend services referencing it.
* [computeNetworkEndpointGroupsDetachNetworkEndpoints](#computenetworkendpointgroupsdetachnetworkendpoints) - Detach a list of network endpoints from the specified network endpoint group.
* [computeNetworkEndpointGroupsGet](#computenetworkendpointgroupsget) - Returns the specified network endpoint group.
* [computeNetworkEndpointGroupsInsert](#computenetworkendpointgroupsinsert) - Creates a network endpoint group in the specified project using the parameters that are included in the request.
* [computeNetworkEndpointGroupsList](#computenetworkendpointgroupslist) - Retrieves the list of network endpoint groups that are located in the specified project and zone.
* [computeNetworkEndpointGroupsListNetworkEndpoints](#computenetworkendpointgroupslistnetworkendpoints) - Lists the network endpoints in the specified network endpoint group.
* [computeNetworkEndpointGroupsTestIamPermissions](#computenetworkendpointgroupstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeNetworkEndpointGroupsAggregatedList

Retrieves the list of network endpoint groups and sorts them by zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkEndpointGroupsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'delectus';
    $request->fields = 'sint';
    $request->filter = 'voluptatibus';
    $request->includeAllScopes = false;
    $request->key = 'sint';
    $request->maxResults = 445002;
    $request->oauthToken = 'est';
    $request->orderBy = 'numquam';
    $request->pageToken = 'nam';
    $request->prettyPrint = false;
    $request->project = 'sapiente';
    $request->quotaUser = 'fuga';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'nam';

    $requestSecurity = new ComputeNetworkEndpointGroupsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeNetworkEndpointGroupsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkEndpointGroups->computeNetworkEndpointGroupsAggregatedList($request, $requestSecurity);

    if ($response->networkEndpointGroupAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkEndpointGroupsAttachNetworkEndpoints

Attach a list of network endpoints to the specified network endpoint group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsAttachNetworkEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupsAttachEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsAttachNetworkEndpointsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkEndpointGroupsAttachNetworkEndpointsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->networkEndpointGroupsAttachEndpointsRequest = new NetworkEndpointGroupsAttachEndpointsRequest();
    $request->networkEndpointGroupsAttachEndpointsRequest->networkEndpoints = [
        new NetworkEndpoint(),
        new NetworkEndpoint(),
    ];
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'quo';
    $request->key = 'deserunt';
    $request->networkEndpointGroup = 'totam';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->project = 'id';
    $request->quotaUser = 'repellendus';
    $request->requestId = 'excepturi';
    $request->uploadType = 'unde';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'eius';
    $request->zone = 'quasi';

    $requestSecurity = new ComputeNetworkEndpointGroupsAttachNetworkEndpointsSecurity();
    $requestSecurity->option1 = new ComputeNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkEndpointGroups->computeNetworkEndpointGroupsAttachNetworkEndpoints($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkEndpointGroupsDelete

Deletes the specified network endpoint group. The network endpoints in the NEG and the VM instances they belong to are not terminated when the NEG is deleted. Note that the NEG cannot be deleted if there are backend services referencing it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkEndpointGroupsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'numquam';
    $request->key = 'velit';
    $request->networkEndpointGroup = 'quis';
    $request->oauthToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->project = 'sunt';
    $request->quotaUser = 'blanditiis';
    $request->requestId = 'quam';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'cumque';
    $request->userIp = 'delectus';
    $request->zone = 'ea';

    $requestSecurity = new ComputeNetworkEndpointGroupsDeleteSecurity();
    $requestSecurity->option1 = new ComputeNetworkEndpointGroupsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkEndpointGroups->computeNetworkEndpointGroupsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkEndpointGroupsDetachNetworkEndpoints

Detach a list of network endpoints from the specified network endpoint group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsDetachNetworkEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupsDetachEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsDetachNetworkEndpointsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkEndpointGroupsDetachNetworkEndpointsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->networkEndpointGroupsDetachEndpointsRequest = new NetworkEndpointGroupsDetachEndpointsRequest();
    $request->networkEndpointGroupsDetachEndpointsRequest->networkEndpoints = [
        new NetworkEndpoint(),
        new NetworkEndpoint(),
        new NetworkEndpoint(),
    ];
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fuga';
    $request->fields = 'assumenda';
    $request->key = 'modi';
    $request->networkEndpointGroup = 'dolores';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->project = 'rerum';
    $request->quotaUser = 'repellendus';
    $request->requestId = 'ut';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'facere';
    $request->userIp = 'beatae';
    $request->zone = 'delectus';

    $requestSecurity = new ComputeNetworkEndpointGroupsDetachNetworkEndpointsSecurity();
    $requestSecurity->option1 = new ComputeNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkEndpointGroups->computeNetworkEndpointGroupsDetachNetworkEndpoints($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkEndpointGroupsGet

Returns the specified network endpoint group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkEndpointGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eaque';
    $request->fields = 'animi';
    $request->key = 'doloremque';
    $request->networkEndpointGroup = 'consequatur';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'earum';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'eos';
    $request->userIp = 'sed';
    $request->zone = 'fugiat';

    $requestSecurity = new ComputeNetworkEndpointGroupsGetSecurity();
    $requestSecurity->option1 = new ComputeNetworkEndpointGroupsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkEndpointGroups->computeNetworkEndpointGroupsGet($request, $requestSecurity);

    if ($response->networkEndpointGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkEndpointGroupsInsert

Creates a network endpoint group in the specified project using the parameters that are included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroup;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupAppEngine;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupCloudFunction;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupCloudRun;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupNetworkEndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupPscData;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupPscDataPscConnectionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkEndpointGroupsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->networkEndpointGroup = new NetworkEndpointGroup();
    $request->networkEndpointGroup->annotations = [
        'dolorem' => 'dolorum',
        'in' => 'aperiam',
        'pariatur' => 'excepturi',
    ];
    $request->networkEndpointGroup->appEngine = new NetworkEndpointGroupAppEngine();
    $request->networkEndpointGroup->appEngine->service = 'aliquam';
    $request->networkEndpointGroup->appEngine->urlMask = 'voluptatibus';
    $request->networkEndpointGroup->appEngine->version = 'fuga';
    $request->networkEndpointGroup->cloudFunction = new NetworkEndpointGroupCloudFunction();
    $request->networkEndpointGroup->cloudFunction->function = 'deserunt';
    $request->networkEndpointGroup->cloudFunction->urlMask = 'iure';
    $request->networkEndpointGroup->cloudRun = new NetworkEndpointGroupCloudRun();
    $request->networkEndpointGroup->cloudRun->service = 'labore';
    $request->networkEndpointGroup->cloudRun->tag = 'quasi';
    $request->networkEndpointGroup->cloudRun->urlMask = 'cumque';
    $request->networkEndpointGroup->creationTimestamp = 'corporis';
    $request->networkEndpointGroup->defaultPort = 485239;
    $request->networkEndpointGroup->description = 'quibusdam';
    $request->networkEndpointGroup->id = 'dicta';
    $request->networkEndpointGroup->kind = 'voluptatibus';
    $request->networkEndpointGroup->name = 'Ellis Schneider II';
    $request->networkEndpointGroup->network = 'doloremque';
    $request->networkEndpointGroup->networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum::PRIVATE_SERVICE_CONNECT;
    $request->networkEndpointGroup->pscData = new NetworkEndpointGroupPscData();
    $request->networkEndpointGroup->pscData->consumerPscAddress = 'ratione';
    $request->networkEndpointGroup->pscData->pscConnectionId = 'quos';
    $request->networkEndpointGroup->pscData->pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum::STATUS_UNSPECIFIED;
    $request->networkEndpointGroup->pscTargetService = 'quo';
    $request->networkEndpointGroup->region = 'sequi';
    $request->networkEndpointGroup->selfLink = 'quo';
    $request->networkEndpointGroup->size = 921724;
    $request->networkEndpointGroup->subnetwork = 'ab';
    $request->networkEndpointGroup->zone = 'praesentium';
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->fields = 'sunt';
    $request->key = 'tenetur';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->project = 'necessitatibus';
    $request->quotaUser = 'necessitatibus';
    $request->requestId = 'autem';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'quasi';
    $request->userIp = 'iure';
    $request->zone = 'ex';

    $requestSecurity = new ComputeNetworkEndpointGroupsInsertSecurity();
    $requestSecurity->option1 = new ComputeNetworkEndpointGroupsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkEndpointGroups->computeNetworkEndpointGroupsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkEndpointGroupsList

Retrieves the list of network endpoint groups that are located in the specified project and zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkEndpointGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'adipisci';
    $request->filter = 'dolore';
    $request->key = 'tempora';
    $request->maxResults = 308864;
    $request->oauthToken = 'debitis';
    $request->orderBy = 'similique';
    $request->pageToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'blanditiis';
    $request->quotaUser = 'libero';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'laborum';
    $request->userIp = 'fugit';
    $request->zone = 'totam';

    $requestSecurity = new ComputeNetworkEndpointGroupsListSecurity();
    $requestSecurity->option1 = new ComputeNetworkEndpointGroupsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkEndpointGroups->computeNetworkEndpointGroupsList($request, $requestSecurity);

    if ($response->networkEndpointGroupList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkEndpointGroupsListNetworkEndpoints

Lists the network endpoints in the specified network endpoint group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsListNetworkEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupsListEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupsListEndpointsRequestHealthStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsListNetworkEndpointsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsListNetworkEndpointsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsListNetworkEndpointsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsListNetworkEndpointsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkEndpointGroupsListNetworkEndpointsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->networkEndpointGroupsListEndpointsRequest = new NetworkEndpointGroupsListEndpointsRequest();
    $request->networkEndpointGroupsListEndpointsRequest->healthStatus = NetworkEndpointGroupsListEndpointsRequestHealthStatusEnum::SHOW;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quo';
    $request->fields = 'inventore';
    $request->filter = 'voluptatibus';
    $request->key = 'officiis';
    $request->maxResults = 382718;
    $request->networkEndpointGroup = 'perferendis';
    $request->oauthToken = 'nisi';
    $request->orderBy = 'quibusdam';
    $request->pageToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'voluptate';
    $request->quotaUser = 'repellendus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'deserunt';
    $request->userIp = 'error';
    $request->zone = 'impedit';

    $requestSecurity = new ComputeNetworkEndpointGroupsListNetworkEndpointsSecurity();
    $requestSecurity->option1 = new ComputeNetworkEndpointGroupsListNetworkEndpointsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkEndpointGroups->computeNetworkEndpointGroupsListNetworkEndpoints($request, $requestSecurity);

    if ($response->networkEndpointGroupsListNetworkEndpoints !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNetworkEndpointGroupsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkEndpointGroupsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'officia',
        'repudiandae',
    ];
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quod';
    $request->fields = 'vitae';
    $request->key = 'vel';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->project = 'laboriosam';
    $request->quotaUser = 'veritatis';
    $request->resource = 'similique';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'temporibus';
    $request->userIp = 'excepturi';
    $request->zone = 'veritatis';

    $requestSecurity = new ComputeNetworkEndpointGroupsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeNetworkEndpointGroupsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->networkEndpointGroups->computeNetworkEndpointGroupsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
