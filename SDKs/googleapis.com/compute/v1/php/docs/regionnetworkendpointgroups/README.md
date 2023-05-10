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
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'pariatur';
    $request->fields = 'sequi';
    $request->key = 'aspernatur';
    $request->networkEndpointGroup = 'consequatur';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->project = 'alias';
    $request->quotaUser = 'doloribus';
    $request->region = 'quo';
    $request->requestId = 'quasi';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'reprehenderit';
    $request->userIp = 'mollitia';

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
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'dicta';
    $request->key = 'sint';
    $request->networkEndpointGroup = 'ex';
    $request->oauthToken = 'vitae';
    $request->prettyPrint = false;
    $request->project = 'eligendi';
    $request->quotaUser = 'accusamus';
    $request->region = 'perspiciatis';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'vero';
    $request->userIp = 'aliquam';

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
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupNetworkEndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupPscData;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupPscDataPscConnectionStatusEnum;
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
        'atque' => 'nisi',
        'omnis' => 'nulla',
        'facere' => 'ducimus',
        'quibusdam' => 'omnis',
    ];
    $request->networkEndpointGroup->appEngine = new NetworkEndpointGroupAppEngine();
    $request->networkEndpointGroup->appEngine->service = 'molestiae';
    $request->networkEndpointGroup->appEngine->urlMask = 'illo';
    $request->networkEndpointGroup->appEngine->version = 'unde';
    $request->networkEndpointGroup->cloudFunction = new NetworkEndpointGroupCloudFunction();
    $request->networkEndpointGroup->cloudFunction->function = 'repellendus';
    $request->networkEndpointGroup->cloudFunction->urlMask = 'consequatur';
    $request->networkEndpointGroup->cloudRun = new NetworkEndpointGroupCloudRun();
    $request->networkEndpointGroup->cloudRun->service = 'dignissimos';
    $request->networkEndpointGroup->cloudRun->tag = 'harum';
    $request->networkEndpointGroup->cloudRun->urlMask = 'odit';
    $request->networkEndpointGroup->creationTimestamp = 'aut';
    $request->networkEndpointGroup->defaultPort = 49892;
    $request->networkEndpointGroup->description = 'deserunt';
    $request->networkEndpointGroup->id = 'corporis';
    $request->networkEndpointGroup->kind = 'praesentium';
    $request->networkEndpointGroup->name = 'Tommie Smitham';
    $request->networkEndpointGroup->network = 'suscipit';
    $request->networkEndpointGroup->networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum::INTERNET_IP_PORT;
    $request->networkEndpointGroup->pscData = new NetworkEndpointGroupPscData();
    $request->networkEndpointGroup->pscData->consumerPscAddress = 'nulla';
    $request->networkEndpointGroup->pscData->pscConnectionId = 'delectus';
    $request->networkEndpointGroup->pscData->pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum::PENDING;
    $request->networkEndpointGroup->pscTargetService = 'sapiente';
    $request->networkEndpointGroup->region = 'facere';
    $request->networkEndpointGroup->selfLink = 'laudantium';
    $request->networkEndpointGroup->size = 507425;
    $request->networkEndpointGroup->subnetwork = 'sed';
    $request->networkEndpointGroup->zone = 'fuga';
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'eaque';
    $request->key = 'tempore';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->project = 'commodi';
    $request->quotaUser = 'eos';
    $request->region = 'perferendis';
    $request->requestId = 'eligendi';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'molestias';
    $request->userIp = 'quisquam';

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
    $request->accessToken = 'officia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'possimus';
    $request->fields = 'quibusdam';
    $request->filter = 'doloremque';
    $request->key = 'ut';
    $request->maxResults = 756102;
    $request->oauthToken = 'nesciunt';
    $request->orderBy = 'voluptate';
    $request->pageToken = 'corporis';
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->quotaUser = 'veniam';
    $request->region = 'quasi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'harum';
    $request->userIp = 'earum';

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
