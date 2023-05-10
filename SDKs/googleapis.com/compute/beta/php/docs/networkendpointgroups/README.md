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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aperiam';
    $request->fields = 'laudantium';
    $request->filter = 'ab';
    $request->includeAllScopes = false;
    $request->key = 'voluptatem';
    $request->maxResults = 593163;
    $request->oauthToken = 'ipsa';
    $request->orderBy = 'delectus';
    $request->pageToken = 'voluptas';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'quae';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'ducimus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->networkEndpointGroupsAttachEndpointsRequest = new NetworkEndpointGroupsAttachEndpointsRequest();
    $request->networkEndpointGroupsAttachEndpointsRequest->networkEndpoints = [
        new NetworkEndpoint(),
        new NetworkEndpoint(),
        new NetworkEndpoint(),
        new NetworkEndpoint(),
    ];
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ex';
    $request->fields = 'quos';
    $request->key = 'dicta';
    $request->networkEndpointGroup = 'minus';
    $request->oauthToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->project = 'molestiae';
    $request->quotaUser = 'iure';
    $request->requestId = 'blanditiis';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'itaque';
    $request->zone = 'molestiae';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusantium';
    $request->fields = 'excepturi';
    $request->key = 'deserunt';
    $request->networkEndpointGroup = 'odit';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->project = 'exercitationem';
    $request->quotaUser = 'officiis';
    $request->requestId = 'eaque';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'voluptas';
    $request->userIp = 'aut';
    $request->zone = 'vitae';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->networkEndpointGroupsDetachEndpointsRequest = new NetworkEndpointGroupsDetachEndpointsRequest();
    $request->networkEndpointGroupsDetachEndpointsRequest->networkEndpoints = [
        new NetworkEndpoint(),
        new NetworkEndpoint(),
        new NetworkEndpoint(),
    ];
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'doloribus';
    $request->key = 'suscipit';
    $request->networkEndpointGroup = 'sequi';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->project = 'neque';
    $request->quotaUser = 'mollitia';
    $request->requestId = 'tenetur';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'pariatur';
    $request->userIp = 'vero';
    $request->zone = 'natus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'velit';
    $request->key = 'vero';
    $request->networkEndpointGroup = 'placeat';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'non';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'praesentium';
    $request->userIp = 'ipsum';
    $request->zone = 'itaque';

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
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupLbNetworkEndpointGroup;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupNetworkEndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupPscData;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupPscDataPscConnectionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupServerlessDeployment;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNetworkEndpointGroupsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNetworkEndpointGroupsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->networkEndpointGroup = new NetworkEndpointGroup();
    $request->networkEndpointGroup->annotations = [
        'esse' => 'id',
        'natus' => 'quas',
        'saepe' => 'modi',
    ];
    $request->networkEndpointGroup->appEngine = new NetworkEndpointGroupAppEngine();
    $request->networkEndpointGroup->appEngine->service = 'assumenda';
    $request->networkEndpointGroup->appEngine->urlMask = 'maiores';
    $request->networkEndpointGroup->appEngine->version = 'neque';
    $request->networkEndpointGroup->cloudFunction = new NetworkEndpointGroupCloudFunction();
    $request->networkEndpointGroup->cloudFunction->function = 'in';
    $request->networkEndpointGroup->cloudFunction->urlMask = 'debitis';
    $request->networkEndpointGroup->cloudRun = new NetworkEndpointGroupCloudRun();
    $request->networkEndpointGroup->cloudRun->service = 'quaerat';
    $request->networkEndpointGroup->cloudRun->tag = 'nostrum';
    $request->networkEndpointGroup->cloudRun->urlMask = 'libero';
    $request->networkEndpointGroup->creationTimestamp = 'totam';
    $request->networkEndpointGroup->defaultPort = 607705;
    $request->networkEndpointGroup->description = 'veniam';
    $request->networkEndpointGroup->id = 'nostrum';
    $request->networkEndpointGroup->kind = 'facere';
    $request->networkEndpointGroup->loadBalancer = new NetworkEndpointGroupLbNetworkEndpointGroup();
    $request->networkEndpointGroup->loadBalancer->defaultPort = 303791;
    $request->networkEndpointGroup->loadBalancer->network = 'vitae';
    $request->networkEndpointGroup->loadBalancer->subnetwork = 'ipsum';
    $request->networkEndpointGroup->loadBalancer->zone = 'recusandae';
    $request->networkEndpointGroup->name = 'Tiffany Muller';
    $request->networkEndpointGroup->network = 'dolores';
    $request->networkEndpointGroup->networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum::GCE_VM_IP_PORT;
    $request->networkEndpointGroup->pscData = new NetworkEndpointGroupPscData();
    $request->networkEndpointGroup->pscData->consumerPscAddress = 'dicta';
    $request->networkEndpointGroup->pscData->pscConnectionId = 'ipsa';
    $request->networkEndpointGroup->pscData->pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum::PENDING;
    $request->networkEndpointGroup->pscTargetService = 'perferendis';
    $request->networkEndpointGroup->region = 'iure';
    $request->networkEndpointGroup->selfLink = 'cum';
    $request->networkEndpointGroup->serverlessDeployment = new NetworkEndpointGroupServerlessDeployment();
    $request->networkEndpointGroup->serverlessDeployment->platform = 'facere';
    $request->networkEndpointGroup->serverlessDeployment->resource = 'ratione';
    $request->networkEndpointGroup->serverlessDeployment->urlMask = 'quis';
    $request->networkEndpointGroup->serverlessDeployment->version = 'modi';
    $request->networkEndpointGroup->size = 780157;
    $request->networkEndpointGroup->subnetwork = 'aut';
    $request->networkEndpointGroup->zone = 'cupiditate';
    $request->accessToken = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'nihil';
    $request->key = 'velit';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'consequatur';
    $request->requestId = 'consequuntur';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'numquam';
    $request->userIp = 'excepturi';
    $request->zone = 'pariatur';

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
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'expedita';
    $request->filter = 'quidem';
    $request->key = 'consequuntur';
    $request->maxResults = 51228;
    $request->oauthToken = 'asperiores';
    $request->orderBy = 'debitis';
    $request->pageToken = 'nostrum';
    $request->prettyPrint = false;
    $request->project = 'quibusdam';
    $request->quotaUser = 'provident';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'sunt';
    $request->userIp = 'quod';
    $request->zone = 'expedita';

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
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpoint;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->networkEndpointGroupsListEndpointsRequest = new NetworkEndpointGroupsListEndpointsRequest();
    $request->networkEndpointGroupsListEndpointsRequest->endpointFilters = [
        new NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter(),
        new NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter(),
        new NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter(),
        new NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter(),
    ];
    $request->networkEndpointGroupsListEndpointsRequest->healthStatus = NetworkEndpointGroupsListEndpointsRequestHealthStatusEnum::SHOW;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'placeat';
    $request->fields = 'dolorum';
    $request->filter = 'voluptatibus';
    $request->key = 'modi';
    $request->maxResults = 314838;
    $request->networkEndpointGroup = 'mollitia';
    $request->oauthToken = 'sed';
    $request->orderBy = 'molestiae';
    $request->pageToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'ex';
    $request->quotaUser = 'error';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'consequuntur';
    $request->userIp = 'quod';
    $request->zone = 'occaecati';

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
        'temporibus',
        'quae',
    ];
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->fields = 'temporibus';
    $request->key = 'quidem';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->project = 'est';
    $request->quotaUser = 'repellendus';
    $request->resource = 'tempora';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'vel';
    $request->userIp = 'cum';
    $request->zone = 'doloremque';

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
