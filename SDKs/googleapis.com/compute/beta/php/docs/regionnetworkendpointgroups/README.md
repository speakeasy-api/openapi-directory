# regionNetworkEndpointGroups

### Available Operations

* [computeRegionNetworkEndpointGroupsDelete](#computeregionnetworkendpointgroupsdelete) - Deletes the specified network endpoint group. Note that the NEG cannot be deleted if it is configured as a backend of a backend service.
* [computeRegionNetworkEndpointGroupsGet](#computeregionnetworkendpointgroupsget) - Returns the specified network endpoint group.
* [computeRegionNetworkEndpointGroupsInsert](#computeregionnetworkendpointgroupsinsert) - Creates a network endpoint group in the specified project using the parameters that are included in the request.
* [computeRegionNetworkEndpointGroupsList](#computeregionnetworkendpointgroupslist) - Retrieves the list of regional network endpoint groups available to the specified project in the given region.

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cupiditate';
    $request->fields = 'cumque';
    $request->key = 'similique';
    $request->networkEndpointGroup = 'omnis';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->project = 'consectetur';
    $request->quotaUser = 'quos';
    $request->region = 'quidem';
    $request->requestId = 'at';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'libero';
    $request->userIp = 'vero';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'voluptatem';
    $request->key = 'neque';
    $request->networkEndpointGroup = 'magnam';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->project = 'adipisci';
    $request->quotaUser = 'doloribus';
    $request->region = 'dolore';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'est';
    $request->userIp = 'mollitia';

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionNetworkEndpointGroupsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionNetworkEndpointGroupsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->networkEndpointGroup = new NetworkEndpointGroup();
    $request->networkEndpointGroup->annotations = [
        'ex' => 'minima',
        'mollitia' => 'sequi',
    ];
    $request->networkEndpointGroup->appEngine = new NetworkEndpointGroupAppEngine();
    $request->networkEndpointGroup->appEngine->service = 'eos';
    $request->networkEndpointGroup->appEngine->urlMask = 'laudantium';
    $request->networkEndpointGroup->appEngine->version = 'adipisci';
    $request->networkEndpointGroup->cloudFunction = new NetworkEndpointGroupCloudFunction();
    $request->networkEndpointGroup->cloudFunction->function = 'fugit';
    $request->networkEndpointGroup->cloudFunction->urlMask = 'iusto';
    $request->networkEndpointGroup->cloudRun = new NetworkEndpointGroupCloudRun();
    $request->networkEndpointGroup->cloudRun->service = 'natus';
    $request->networkEndpointGroup->cloudRun->tag = 'facilis';
    $request->networkEndpointGroup->cloudRun->urlMask = 'quam';
    $request->networkEndpointGroup->creationTimestamp = 'beatae';
    $request->networkEndpointGroup->defaultPort = 624312;
    $request->networkEndpointGroup->description = 'quibusdam';
    $request->networkEndpointGroup->id = 'ab';
    $request->networkEndpointGroup->kind = 'eligendi';
    $request->networkEndpointGroup->loadBalancer = new NetworkEndpointGroupLbNetworkEndpointGroup();
    $request->networkEndpointGroup->loadBalancer->defaultPort = 884057;
    $request->networkEndpointGroup->loadBalancer->network = 'officia';
    $request->networkEndpointGroup->loadBalancer->subnetwork = 'voluptas';
    $request->networkEndpointGroup->loadBalancer->zone = 'reprehenderit';
    $request->networkEndpointGroup->name = 'Mable Kutch';
    $request->networkEndpointGroup->network = 'nesciunt';
    $request->networkEndpointGroup->networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum::NON_GCP_PRIVATE_IP_PORT;
    $request->networkEndpointGroup->pscData = new NetworkEndpointGroupPscData();
    $request->networkEndpointGroup->pscData->consumerPscAddress = 'sequi';
    $request->networkEndpointGroup->pscData->pscConnectionId = 'quis';
    $request->networkEndpointGroup->pscData->pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum::STATUS_UNSPECIFIED;
    $request->networkEndpointGroup->pscTargetService = 'aliquam';
    $request->networkEndpointGroup->region = 'perspiciatis';
    $request->networkEndpointGroup->selfLink = 'id';
    $request->networkEndpointGroup->serverlessDeployment = new NetworkEndpointGroupServerlessDeployment();
    $request->networkEndpointGroup->serverlessDeployment->platform = 'adipisci';
    $request->networkEndpointGroup->serverlessDeployment->resource = 'et';
    $request->networkEndpointGroup->serverlessDeployment->urlMask = 'consectetur';
    $request->networkEndpointGroup->serverlessDeployment->version = 'nemo';
    $request->networkEndpointGroup->size = 479750;
    $request->networkEndpointGroup->subnetwork = 'iusto';
    $request->networkEndpointGroup->zone = 'quas';
    $request->accessToken = 'optio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'minima';
    $request->fields = 'numquam';
    $request->key = 'minus';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->project = 'porro';
    $request->quotaUser = 'libero';
    $request->region = 'perferendis';
    $request->requestId = 'accusamus';
    $request->uploadType = 'ratione';
    $request->uploadProtocol = 'vero';
    $request->userIp = 'mollitia';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatem';
    $request->fields = 'labore';
    $request->filter = 'corporis';
    $request->key = 'harum';
    $request->maxResults = 625774;
    $request->oauthToken = 'quod';
    $request->orderBy = 'asperiores';
    $request->pageToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'neque';
    $request->quotaUser = 'nam';
    $request->region = 'sed';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'nemo';
    $request->userIp = 'sunt';

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
