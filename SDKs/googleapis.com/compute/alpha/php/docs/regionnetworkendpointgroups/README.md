# regionNetworkEndpointGroups

### Available Operations

* [computeRegionNetworkEndpointGroupsAttachNetworkEndpoints](#computeregionnetworkendpointgroupsattachnetworkendpoints) - Attach a list of network endpoints to the specified network endpoint group.
* [computeRegionNetworkEndpointGroupsDelete](#computeregionnetworkendpointgroupsdelete) - Deletes the specified network endpoint group. Note that the NEG cannot be deleted if it is configured as a backend of a backend service.
* [computeRegionNetworkEndpointGroupsDetachNetworkEndpoints](#computeregionnetworkendpointgroupsdetachnetworkendpoints) - Detach the network endpoint from the specified network endpoint group.
* [computeRegionNetworkEndpointGroupsGet](#computeregionnetworkendpointgroupsget) - Returns the specified network endpoint group.
* [computeRegionNetworkEndpointGroupsInsert](#computeregionnetworkendpointgroupsinsert) - Creates a network endpoint group in the specified project using the parameters that are included in the request.
* [computeRegionNetworkEndpointGroupsList](#computeregionnetworkendpointgroupslist) - Retrieves the list of regional network endpoint groups available to the specified project in the given region.
* [computeRegionNetworkEndpointGroupsListNetworkEndpoints](#computeregionnetworkendpointgroupslistnetworkendpoints) - Lists the network endpoints in the specified network endpoint group.

## computeRegionNetworkEndpointGroupsAttachNetworkEndpoints

Attach a list of network endpoints to the specified network endpoint group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionNetworkEndpointGroupsAttachEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionNetworkEndpointGroupsAttachEndpointsRequest = new RegionNetworkEndpointGroupsAttachEndpointsRequest();
    $request->regionNetworkEndpointGroupsAttachEndpointsRequest->networkEndpoints = [
        new NetworkEndpoint(),
    ];
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'suscipit';
    $request->fields = 'autem';
    $request->key = 'omnis';
    $request->networkEndpointGroup = 'itaque';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->project = 'harum';
    $request->quotaUser = 'commodi';
    $request->region = 'fugit';
    $request->requestId = 'aliquid';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'ab';
    $request->userIp = 'sunt';

    $requestSecurity = new ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkEndpointGroups->computeRegionNetworkEndpointGroupsAttachNetworkEndpoints($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkEndpointGroupsDelete

Deletes the specified network endpoint group. Note that the NEG cannot be deleted if it is configured as a backend of a backend service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkEndpointGroupsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequatur';
    $request->fields = 'quis';
    $request->key = 'iusto';
    $request->networkEndpointGroup = 'unde';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->project = 'rem';
    $request->quotaUser = 'placeat';
    $request->region = 'suscipit';
    $request->requestId = 'in';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'impedit';

    $requestSecurity = new ComputeRegionNetworkEndpointGroupsDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkEndpointGroupsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkEndpointGroups->computeRegionNetworkEndpointGroupsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkEndpointGroupsDetachNetworkEndpoints

Detach the network endpoint from the specified network endpoint group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionNetworkEndpointGroupsDetachEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionNetworkEndpointGroupsDetachEndpointsRequest = new RegionNetworkEndpointGroupsDetachEndpointsRequest();
    $request->regionNetworkEndpointGroupsDetachEndpointsRequest->networkEndpoints = [
        new NetworkEndpoint(),
    ];
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'quae';
    $request->key = 'officia';
    $request->networkEndpointGroup = 'ut';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'eligendi';
    $request->quotaUser = 'doloremque';
    $request->region = 'tenetur';
    $request->requestId = 'amet';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'quo';
    $request->userIp = 'deleniti';

    $requestSecurity = new ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkEndpointGroups->computeRegionNetworkEndpointGroupsDetachNetworkEndpoints($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkEndpointGroupsGet

Returns the specified network endpoint group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkEndpointGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'at';
    $request->key = 'blanditiis';
    $request->networkEndpointGroup = 'debitis';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'tenetur';
    $request->region = 'optio';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'consectetur';
    $request->userIp = 'illo';

    $requestSecurity = new ComputeRegionNetworkEndpointGroupsGetSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkEndpointGroupsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkEndpointGroups->computeRegionNetworkEndpointGroupsGet($request, $requestSecurity);

    if ($response->networkEndpointGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkEndpointGroupsInsert

Creates a network endpoint group in the specified project using the parameters that are included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsInsertRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkEndpointGroupsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->networkEndpointGroup = new NetworkEndpointGroup();
    $request->networkEndpointGroup->annotations = [
        'voluptatibus' => 'alias',
        'officia' => 'mollitia',
        'animi' => 'officiis',
    ];
    $request->networkEndpointGroup->appEngine = new NetworkEndpointGroupAppEngine();
    $request->networkEndpointGroup->appEngine->service = 'vero';
    $request->networkEndpointGroup->appEngine->urlMask = 'repudiandae';
    $request->networkEndpointGroup->appEngine->version = 'sit';
    $request->networkEndpointGroup->cloudFunction = new NetworkEndpointGroupCloudFunction();
    $request->networkEndpointGroup->cloudFunction->function = 'aut';
    $request->networkEndpointGroup->cloudFunction->urlMask = 'labore';
    $request->networkEndpointGroup->cloudRun = new NetworkEndpointGroupCloudRun();
    $request->networkEndpointGroup->cloudRun->service = 'accusamus';
    $request->networkEndpointGroup->cloudRun->tag = 'distinctio';
    $request->networkEndpointGroup->cloudRun->urlMask = 'dolorum';
    $request->networkEndpointGroup->creationTimestamp = 'voluptate';
    $request->networkEndpointGroup->defaultPort = 742290;
    $request->networkEndpointGroup->description = 'hic';
    $request->networkEndpointGroup->id = 'quos';
    $request->networkEndpointGroup->kind = 'voluptate';
    $request->networkEndpointGroup->loadBalancer = new NetworkEndpointGroupLbNetworkEndpointGroup();
    $request->networkEndpointGroup->loadBalancer->defaultPort = 204109;
    $request->networkEndpointGroup->loadBalancer->network = 'explicabo';
    $request->networkEndpointGroup->loadBalancer->subnetwork = 'harum';
    $request->networkEndpointGroup->loadBalancer->zone = 'eveniet';
    $request->networkEndpointGroup->name = 'Linda McKenzie';
    $request->networkEndpointGroup->network = 'consequatur';
    $request->networkEndpointGroup->networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum::INTERNET_IP_PORT;
    $request->networkEndpointGroup->pscData = new NetworkEndpointGroupPscData();
    $request->networkEndpointGroup->pscData->consumerPscAddress = 'quam';
    $request->networkEndpointGroup->pscData->pscConnectionId = 'sunt';
    $request->networkEndpointGroup->pscData->pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum::CLOSED;
    $request->networkEndpointGroup->pscTargetService = 'quae';
    $request->networkEndpointGroup->region = 'a';
    $request->networkEndpointGroup->selfLink = 'eaque';
    $request->networkEndpointGroup->selfLinkWithId = 'aliquid';
    $request->networkEndpointGroup->serverlessDeployment = new NetworkEndpointGroupServerlessDeployment();
    $request->networkEndpointGroup->serverlessDeployment->platform = 'maiores';
    $request->networkEndpointGroup->serverlessDeployment->resource = 'voluptatem';
    $request->networkEndpointGroup->serverlessDeployment->urlMask = 'tempore';
    $request->networkEndpointGroup->serverlessDeployment->version = 'quo';
    $request->networkEndpointGroup->size = 915908;
    $request->networkEndpointGroup->subnetwork = 'enim';
    $request->networkEndpointGroup->type = NetworkEndpointGroupTypeEnum::LOAD_BALANCING;
    $request->networkEndpointGroup->zone = 'enim';
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ex';
    $request->fields = 'voluptatum';
    $request->key = 'iure';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'ratione';
    $request->region = 'quisquam';
    $request->requestId = 'iste';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'doloremque';

    $requestSecurity = new ComputeRegionNetworkEndpointGroupsInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkEndpointGroupsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkEndpointGroups->computeRegionNetworkEndpointGroupsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkEndpointGroupsList

Retrieves the list of regional network endpoint groups available to the specified project in the given region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkEndpointGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ducimus';
    $request->fields = 'sint';
    $request->filter = 'odio';
    $request->key = 'animi';
    $request->maxResults = 346450;
    $request->oauthToken = 'repellendus';
    $request->orderBy = 'culpa';
    $request->pageToken = 'vel';
    $request->prettyPrint = false;
    $request->project = 'ex';
    $request->quotaUser = 'non';
    $request->region = 'nobis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'in';
    $request->uploadProtocol = 'vero';
    $request->userIp = 'reprehenderit';

    $requestSecurity = new ComputeRegionNetworkEndpointGroupsListSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkEndpointGroupsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkEndpointGroups->computeRegionNetworkEndpointGroupsList($request, $requestSecurity);

    if ($response->networkEndpointGroupList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionNetworkEndpointGroupsListNetworkEndpoints

Lists the network endpoints in the specified network endpoint group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsListNetworkEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsListNetworkEndpointsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsListNetworkEndpointsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsListNetworkEndpointsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsListNetworkEndpointsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkEndpointGroupsListNetworkEndpointsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nihil';
    $request->fields = 'dolore';
    $request->filter = 'distinctio';
    $request->key = 'error';
    $request->maxResults = 635993;
    $request->networkEndpointGroup = 'culpa';
    $request->oauthToken = 'odit';
    $request->orderBy = 'laudantium';
    $request->pageToken = 'dolor';
    $request->prettyPrint = false;
    $request->project = 'consequuntur';
    $request->quotaUser = 'libero';
    $request->region = 'libero';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'ad';
    $request->userIp = 'totam';

    $requestSecurity = new ComputeRegionNetworkEndpointGroupsListNetworkEndpointsSecurity();
    $requestSecurity->option1 = new ComputeRegionNetworkEndpointGroupsListNetworkEndpointsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionNetworkEndpointGroups->computeRegionNetworkEndpointGroupsListNetworkEndpoints($request, $requestSecurity);

    if ($response->networkEndpointGroupsListNetworkEndpoints !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
