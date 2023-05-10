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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalNetworkEndpointGroupsAttachEndpointsRequest = new GlobalNetworkEndpointGroupsAttachEndpointsRequest();
    $request->globalNetworkEndpointGroupsAttachEndpointsRequest->networkEndpoints = [
        new NetworkEndpoint(),
    ];
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'expedita';
    $request->fields = 'in';
    $request->key = 'quisquam';
    $request->networkEndpointGroup = 'sunt';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'nulla';
    $request->quotaUser = 'maiores';
    $request->requestId = 'distinctio';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'accusamus';

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
    $request->accessToken = 'quas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'dicta';
    $request->key = 'impedit';
    $request->networkEndpointGroup = 'tempora';
    $request->oauthToken = 'eveniet';
    $request->prettyPrint = false;
    $request->project = 'repudiandae';
    $request->quotaUser = 'sed';
    $request->requestId = 'impedit';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'vel';

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
    $request->accessToken = 'ex';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veritatis';
    $request->fields = 'maiores';
    $request->key = 'itaque';
    $request->networkEndpointGroup = 'vero';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'illo';
    $request->quotaUser = 'quo';
    $request->requestId = 'dignissimos';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'distinctio';
    $request->userIp = 'possimus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'earum';
    $request->fields = 'quod';
    $request->key = 'nihil';
    $request->networkEndpointGroup = 'quaerat';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->project = 'ducimus';
    $request->quotaUser = 'laudantium';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'deserunt';
    $request->userIp = 'odit';

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
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupNetworkEndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupPscData;
use \OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupPscDataPscConnectionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalNetworkEndpointGroupsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->networkEndpointGroup = new NetworkEndpointGroup();
    $request->networkEndpointGroup->annotations = [
        'beatae' => 'iusto',
    ];
    $request->networkEndpointGroup->appEngine = new NetworkEndpointGroupAppEngine();
    $request->networkEndpointGroup->appEngine->service = 'esse';
    $request->networkEndpointGroup->appEngine->urlMask = 'magnam';
    $request->networkEndpointGroup->appEngine->version = 'odio';
    $request->networkEndpointGroup->cloudFunction = new NetworkEndpointGroupCloudFunction();
    $request->networkEndpointGroup->cloudFunction->function = 'nulla';
    $request->networkEndpointGroup->cloudFunction->urlMask = 'impedit';
    $request->networkEndpointGroup->cloudRun = new NetworkEndpointGroupCloudRun();
    $request->networkEndpointGroup->cloudRun->service = 'cupiditate';
    $request->networkEndpointGroup->cloudRun->tag = 'illo';
    $request->networkEndpointGroup->cloudRun->urlMask = 'exercitationem';
    $request->networkEndpointGroup->creationTimestamp = 'laborum';
    $request->networkEndpointGroup->defaultPort = 848833;
    $request->networkEndpointGroup->description = 'fugit';
    $request->networkEndpointGroup->id = 'maxime';
    $request->networkEndpointGroup->kind = 'dolorum';
    $request->networkEndpointGroup->name = 'Wesley Stamm';
    $request->networkEndpointGroup->network = 'esse';
    $request->networkEndpointGroup->networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum::GCE_VM_IP;
    $request->networkEndpointGroup->pscData = new NetworkEndpointGroupPscData();
    $request->networkEndpointGroup->pscData->consumerPscAddress = 'consectetur';
    $request->networkEndpointGroup->pscData->pscConnectionId = 'temporibus';
    $request->networkEndpointGroup->pscData->pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum::REJECTED;
    $request->networkEndpointGroup->pscTargetService = 'ipsa';
    $request->networkEndpointGroup->region = 'maiores';
    $request->networkEndpointGroup->selfLink = 'exercitationem';
    $request->networkEndpointGroup->size = 633643;
    $request->networkEndpointGroup->subnetwork = 'repudiandae';
    $request->networkEndpointGroup->zone = 'aspernatur';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officia';
    $request->fields = 'suscipit';
    $request->key = 'harum';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->project = 'doloremque';
    $request->quotaUser = 'perferendis';
    $request->requestId = 'laudantium';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'corrupti';
    $request->userIp = 'molestiae';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quaerat';
    $request->fields = 'amet';
    $request->filter = 'sapiente';
    $request->key = 'corporis';
    $request->maxResults = 666005;
    $request->oauthToken = 'iure';
    $request->orderBy = 'quisquam';
    $request->pageToken = 'provident';
    $request->prettyPrint = false;
    $request->project = 'laudantium';
    $request->quotaUser = 'nam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'ipsam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corrupti';
    $request->fields = 'doloremque';
    $request->filter = 'fugiat';
    $request->key = 'numquam';
    $request->maxResults = 39202;
    $request->networkEndpointGroup = 'cum';
    $request->oauthToken = 'nobis';
    $request->orderBy = 'similique';
    $request->pageToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'impedit';
    $request->quotaUser = 'nisi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'soluta';
    $request->userIp = 'fugiat';

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
