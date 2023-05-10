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
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'quam';
    $request->filter = 'ullam';
    $request->includeAllScopes = false;
    $request->key = 'inventore';
    $request->maxResults = 670734;
    $request->oauthToken = 'fugit';
    $request->orderBy = 'perferendis';
    $request->pageToken = 'incidunt';
    $request->prettyPrint = false;
    $request->project = 'ducimus';
    $request->quotaUser = 'quod';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'numquam';
    $request->userIp = 'numquam';

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
        new NetworkEndpoint(),
        new NetworkEndpoint(),
    ];
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nesciunt';
    $request->fields = 'hic';
    $request->key = 'natus';
    $request->networkEndpointGroup = 'laboriosam';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'distinctio';
    $request->requestId = 'cum';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'repellendus';
    $request->userIp = 'incidunt';
    $request->zone = 'aperiam';

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
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'quae';
    $request->key = 'voluptatibus';
    $request->networkEndpointGroup = 'est';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'autem';
    $request->requestId = 'repudiandae';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'sed';
    $request->userIp = 'exercitationem';
    $request->zone = 'natus';

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
    ];
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'natus';
    $request->fields = 'minima';
    $request->key = 'minus';
    $request->networkEndpointGroup = 'provident';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'explicabo';
    $request->quotaUser = 'adipisci';
    $request->requestId = 'iusto';
    $request->uploadType = 'ratione';
    $request->uploadProtocol = 'omnis';
    $request->userIp = 'quam';
    $request->zone = 'impedit';

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
    $request->accessToken = 'quas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'exercitationem';
    $request->key = 'nulla';
    $request->networkEndpointGroup = 'tempore';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'quis';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'vitae';
    $request->zone = 'quos';

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
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupTypeEnum;
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
        'accusamus' => 'tempore',
        'vero' => 'asperiores',
        'ea' => 'voluptate',
        'aliquid' => 'nobis',
    ];
    $request->networkEndpointGroup->appEngine = new NetworkEndpointGroupAppEngine();
    $request->networkEndpointGroup->appEngine->service = 'reprehenderit';
    $request->networkEndpointGroup->appEngine->urlMask = 'consequuntur';
    $request->networkEndpointGroup->appEngine->version = 'accusantium';
    $request->networkEndpointGroup->cloudFunction = new NetworkEndpointGroupCloudFunction();
    $request->networkEndpointGroup->cloudFunction->function = 'autem';
    $request->networkEndpointGroup->cloudFunction->urlMask = 'pariatur';
    $request->networkEndpointGroup->cloudRun = new NetworkEndpointGroupCloudRun();
    $request->networkEndpointGroup->cloudRun->service = 'deserunt';
    $request->networkEndpointGroup->cloudRun->tag = 'facilis';
    $request->networkEndpointGroup->cloudRun->urlMask = 'in';
    $request->networkEndpointGroup->creationTimestamp = 'ad';
    $request->networkEndpointGroup->defaultPort = 29722;
    $request->networkEndpointGroup->description = 'sit';
    $request->networkEndpointGroup->id = 'enim';
    $request->networkEndpointGroup->kind = 'qui';
    $request->networkEndpointGroup->loadBalancer = new NetworkEndpointGroupLbNetworkEndpointGroup();
    $request->networkEndpointGroup->loadBalancer->defaultPort = 676068;
    $request->networkEndpointGroup->loadBalancer->network = 'ad';
    $request->networkEndpointGroup->loadBalancer->subnetwork = 'nisi';
    $request->networkEndpointGroup->loadBalancer->zone = 'dolore';
    $request->networkEndpointGroup->name = 'Gretchen Steuber';
    $request->networkEndpointGroup->network = 'sequi';
    $request->networkEndpointGroup->networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum::INTERNET_IP_PORT;
    $request->networkEndpointGroup->pscData = new NetworkEndpointGroupPscData();
    $request->networkEndpointGroup->pscData->consumerPscAddress = 'saepe';
    $request->networkEndpointGroup->pscData->pscConnectionId = 'quibusdam';
    $request->networkEndpointGroup->pscData->pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum::PENDING;
    $request->networkEndpointGroup->pscTargetService = 'maxime';
    $request->networkEndpointGroup->region = 'aliquam';
    $request->networkEndpointGroup->selfLink = 'adipisci';
    $request->networkEndpointGroup->selfLinkWithId = 'explicabo';
    $request->networkEndpointGroup->serverlessDeployment = new NetworkEndpointGroupServerlessDeployment();
    $request->networkEndpointGroup->serverlessDeployment->platform = 'eaque';
    $request->networkEndpointGroup->serverlessDeployment->resource = 'hic';
    $request->networkEndpointGroup->serverlessDeployment->urlMask = 'incidunt';
    $request->networkEndpointGroup->serverlessDeployment->version = 'quae';
    $request->networkEndpointGroup->size = 176403;
    $request->networkEndpointGroup->subnetwork = 'eius';
    $request->networkEndpointGroup->type = NetworkEndpointGroupTypeEnum::LOAD_BALANCING;
    $request->networkEndpointGroup->zone = 'voluptatem';
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'totam';
    $request->key = 'iusto';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->project = 'porro';
    $request->quotaUser = 'voluptas';
    $request->requestId = 'provident';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'excepturi';
    $request->zone = 'quaerat';

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
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'fugiat';
    $request->filter = 'magni';
    $request->key = 'modi';
    $request->maxResults = 538979;
    $request->oauthToken = 'blanditiis';
    $request->orderBy = 'quibusdam';
    $request->pageToken = 'odio';
    $request->prettyPrint = false;
    $request->project = 'unde';
    $request->quotaUser = 'ad';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'incidunt';
    $request->zone = 'aspernatur';

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
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'laboriosam';
    $request->filter = 'omnis';
    $request->key = 'tenetur';
    $request->maxResults = 424364;
    $request->networkEndpointGroup = 'iste';
    $request->oauthToken = 'animi';
    $request->orderBy = 'quae';
    $request->pageToken = 'doloremque';
    $request->prettyPrint = false;
    $request->project = 'voluptas';
    $request->quotaUser = 'pariatur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'inventore';
    $request->userIp = 'odit';
    $request->zone = 'labore';

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
        'ullam',
        'aut',
    ];
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'fugiat';
    $request->key = 'odio';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->project = 'ipsum';
    $request->quotaUser = 'cum';
    $request->resource = 'et';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'magnam';
    $request->userIp = 'illo';
    $request->zone = 'atque';

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
