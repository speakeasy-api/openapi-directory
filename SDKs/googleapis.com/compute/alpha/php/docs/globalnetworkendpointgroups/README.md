# globalNetworkEndpointGroups

### Available Operations

* [computeGlobalNetworkEndpointGroupsAttachNetworkEndpoints](#computeglobalnetworkendpointgroupsattachnetworkendpoints) - Attach a network endpoint to the specified network endpoint group.
* [computeGlobalNetworkEndpointGroupsDelete](#computeglobalnetworkendpointgroupsdelete) - Deletes the specified network endpoint group.Note that the NEG cannot be deleted if there are backend services referencing it.
* [computeGlobalNetworkEndpointGroupsDetachNetworkEndpoints](#computeglobalnetworkendpointgroupsdetachnetworkendpoints) - Detach the network endpoint from the specified network endpoint group.
* [computeGlobalNetworkEndpointGroupsGet](#computeglobalnetworkendpointgroupsget) - Returns the specified network endpoint group.
* [computeGlobalNetworkEndpointGroupsInsert](#computeglobalnetworkendpointgroupsinsert) - Creates a network endpoint group in the specified project using the parameters that are included in the request.
* [computeGlobalNetworkEndpointGroupsList](#computeglobalnetworkendpointgroupslist) - Retrieves the list of network endpoint groups that are located in the specified project.
* [computeGlobalNetworkEndpointGroupsListNetworkEndpoints](#computeglobalnetworkendpointgroupslistnetworkendpoints) - Lists the network endpoints in the specified network endpoint group.

## computeGlobalNetworkEndpointGroupsAttachNetworkEndpoints

Attach a network endpoint to the specified network endpoint group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalNetworkEndpointGroupsAttachEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalNetworkEndpointGroupsAttachEndpointsRequest = new GlobalNetworkEndpointGroupsAttachEndpointsRequest();
    $request->globalNetworkEndpointGroupsAttachEndpointsRequest->networkEndpoints = [
        new NetworkEndpoint(),
        new NetworkEndpoint(),
        new NetworkEndpoint(),
        new NetworkEndpoint(),
    ];
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ullam';
    $request->fields = 'numquam';
    $request->key = 'enim';
    $request->networkEndpointGroup = 'cupiditate';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->project = 'itaque';
    $request->quotaUser = 'fuga';
    $request->requestId = 'consectetur';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'aspernatur';
    $request->userIp = 'explicabo';

    $requestSecurity = new ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurity();
    $requestSecurity->option1 = new ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalNetworkEndpointGroups->computeGlobalNetworkEndpointGroupsAttachNetworkEndpoints($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalNetworkEndpointGroupsDelete

Deletes the specified network endpoint group.Note that the NEG cannot be deleted if there are backend services referencing it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalNetworkEndpointGroupsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'nobis';
    $request->key = 'qui';
    $request->networkEndpointGroup = 'accusantium';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'impedit';
    $request->quotaUser = 'recusandae';
    $request->requestId = 'voluptate';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'est';
    $request->userIp = 'et';

    $requestSecurity = new ComputeGlobalNetworkEndpointGroupsDeleteSecurity();
    $requestSecurity->option1 = new ComputeGlobalNetworkEndpointGroupsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalNetworkEndpointGroups->computeGlobalNetworkEndpointGroupsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalNetworkEndpointGroupsDetachNetworkEndpoints

Detach the network endpoint from the specified network endpoint group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalNetworkEndpointGroupsDetachEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalNetworkEndpointGroupsDetachEndpointsRequest = new GlobalNetworkEndpointGroupsDetachEndpointsRequest();
    $request->globalNetworkEndpointGroupsDetachEndpointsRequest->networkEndpoints = [
        new NetworkEndpoint(),
        new NetworkEndpoint(),
        new NetworkEndpoint(),
        new NetworkEndpoint(),
    ];
    $request->accessToken = 'quos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'in';
    $request->key = 'culpa';
    $request->networkEndpointGroup = 'doloremque';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'architecto';
    $request->requestId = 'suscipit';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'dignissimos';

    $requestSecurity = new ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurity();
    $requestSecurity->option1 = new ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalNetworkEndpointGroups->computeGlobalNetworkEndpointGroupsDetachNetworkEndpoints($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalNetworkEndpointGroupsGet

Returns the specified network endpoint group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalNetworkEndpointGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->fields = 'aut';
    $request->key = 'natus';
    $request->networkEndpointGroup = 'esse';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'deserunt';
    $request->quotaUser = 'ratione';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'iste';

    $requestSecurity = new ComputeGlobalNetworkEndpointGroupsGetSecurity();
    $requestSecurity->option1 = new ComputeGlobalNetworkEndpointGroupsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalNetworkEndpointGroups->computeGlobalNetworkEndpointGroupsGet($request, $requestSecurity);

    if ($response->networkEndpointGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalNetworkEndpointGroupsInsert

Creates a network endpoint group in the specified project using the parameters that are included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsInsertRequest;
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
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalNetworkEndpointGroupsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->networkEndpointGroup = new NetworkEndpointGroup();
    $request->networkEndpointGroup->annotations = [
        'ducimus' => 'consequuntur',
        'ipsam' => 'libero',
        'quia' => 'omnis',
        'dicta' => 'qui',
    ];
    $request->networkEndpointGroup->appEngine = new NetworkEndpointGroupAppEngine();
    $request->networkEndpointGroup->appEngine->service = 'explicabo';
    $request->networkEndpointGroup->appEngine->urlMask = 'consequatur';
    $request->networkEndpointGroup->appEngine->version = 'amet';
    $request->networkEndpointGroup->cloudFunction = new NetworkEndpointGroupCloudFunction();
    $request->networkEndpointGroup->cloudFunction->function = 'consequatur';
    $request->networkEndpointGroup->cloudFunction->urlMask = 'fugiat';
    $request->networkEndpointGroup->cloudRun = new NetworkEndpointGroupCloudRun();
    $request->networkEndpointGroup->cloudRun->service = 'voluptatum';
    $request->networkEndpointGroup->cloudRun->tag = 'velit';
    $request->networkEndpointGroup->cloudRun->urlMask = 'hic';
    $request->networkEndpointGroup->creationTimestamp = 'ullam';
    $request->networkEndpointGroup->defaultPort = 644299;
    $request->networkEndpointGroup->description = 'itaque';
    $request->networkEndpointGroup->id = 'distinctio';
    $request->networkEndpointGroup->kind = 'iusto';
    $request->networkEndpointGroup->loadBalancer = new NetworkEndpointGroupLbNetworkEndpointGroup();
    $request->networkEndpointGroup->loadBalancer->defaultPort = 493865;
    $request->networkEndpointGroup->loadBalancer->network = 'provident';
    $request->networkEndpointGroup->loadBalancer->subnetwork = 'occaecati';
    $request->networkEndpointGroup->loadBalancer->zone = 'assumenda';
    $request->networkEndpointGroup->name = 'Theresa Terry';
    $request->networkEndpointGroup->network = 'quasi';
    $request->networkEndpointGroup->networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum::SERVERLESS;
    $request->networkEndpointGroup->pscData = new NetworkEndpointGroupPscData();
    $request->networkEndpointGroup->pscData->consumerPscAddress = 'atque';
    $request->networkEndpointGroup->pscData->pscConnectionId = 'magnam';
    $request->networkEndpointGroup->pscData->pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum::PENDING;
    $request->networkEndpointGroup->pscTargetService = 'amet';
    $request->networkEndpointGroup->region = 'corrupti';
    $request->networkEndpointGroup->selfLink = 'sunt';
    $request->networkEndpointGroup->selfLinkWithId = 'nemo';
    $request->networkEndpointGroup->serverlessDeployment = new NetworkEndpointGroupServerlessDeployment();
    $request->networkEndpointGroup->serverlessDeployment->platform = 'delectus';
    $request->networkEndpointGroup->serverlessDeployment->resource = 'illum';
    $request->networkEndpointGroup->serverlessDeployment->urlMask = 'porro';
    $request->networkEndpointGroup->serverlessDeployment->version = 'quaerat';
    $request->networkEndpointGroup->size = 166324;
    $request->networkEndpointGroup->subnetwork = 'cumque';
    $request->networkEndpointGroup->type = NetworkEndpointGroupTypeEnum::LOAD_BALANCING;
    $request->networkEndpointGroup->zone = 'quos';
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'maxime';
    $request->fields = 'sed';
    $request->key = 'minus';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->project = 'possimus';
    $request->quotaUser = 'delectus';
    $request->requestId = 'harum';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'eligendi';
    $request->userIp = 'hic';

    $requestSecurity = new ComputeGlobalNetworkEndpointGroupsInsertSecurity();
    $requestSecurity->option1 = new ComputeGlobalNetworkEndpointGroupsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalNetworkEndpointGroups->computeGlobalNetworkEndpointGroupsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalNetworkEndpointGroupsList

Retrieves the list of network endpoint groups that are located in the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalNetworkEndpointGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'nisi';
    $request->filter = 'explicabo';
    $request->key = 'sequi';
    $request->maxResults = 4787;
    $request->oauthToken = 'reiciendis';
    $request->orderBy = 'quos';
    $request->pageToken = 'numquam';
    $request->prettyPrint = false;
    $request->project = 'vitae';
    $request->quotaUser = 'maiores';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'architecto';
    $request->userIp = 'rerum';

    $requestSecurity = new ComputeGlobalNetworkEndpointGroupsListSecurity();
    $requestSecurity->option1 = new ComputeGlobalNetworkEndpointGroupsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalNetworkEndpointGroups->computeGlobalNetworkEndpointGroupsList($request, $requestSecurity);

    if ($response->networkEndpointGroupList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalNetworkEndpointGroupsListNetworkEndpoints

Lists the network endpoints in the specified network endpoint group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'hic';
    $request->fields = 'repellendus';
    $request->filter = 'nam';
    $request->key = 'ab';
    $request->maxResults = 297970;
    $request->networkEndpointGroup = 'pariatur';
    $request->oauthToken = 'expedita';
    $request->orderBy = 'autem';
    $request->pageToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'nostrum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'voluptas';
    $request->userIp = 'laudantium';

    $requestSecurity = new ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurity();
    $requestSecurity->option1 = new ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalNetworkEndpointGroups->computeGlobalNetworkEndpointGroupsListNetworkEndpoints($request, $requestSecurity);

    if ($response->networkEndpointGroupsListNetworkEndpoints !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
