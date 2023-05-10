# vpnGateways

### Available Operations

* [computeVpnGatewaysAggregatedList](#computevpngatewaysaggregatedlist) - Retrieves an aggregated list of VPN gateways.
* [computeVpnGatewaysDelete](#computevpngatewaysdelete) - Deletes the specified VPN gateway.
* [computeVpnGatewaysGet](#computevpngatewaysget) - Returns the specified VPN gateway.
* [computeVpnGatewaysGetStatus](#computevpngatewaysgetstatus) - Returns the status for the specified VPN gateway.
* [computeVpnGatewaysInsert](#computevpngatewaysinsert) - Creates a VPN gateway in the specified project and region using the data included in the request.
* [computeVpnGatewaysList](#computevpngatewayslist) - Retrieves a list of VPN gateways available to the specified project and region.
* [computeVpnGatewaysSetLabels](#computevpngatewayssetlabels) - Sets the labels on a VpnGateway. To learn more about labels, read the Labeling Resources documentation.
* [computeVpnGatewaysTestIamPermissions](#computevpngatewaystestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeVpnGatewaysAggregatedList

Retrieves an aggregated list of VPN gateways.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeVpnGatewaysAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corrupti';
    $request->fields = 'fuga';
    $request->filter = 'pariatur';
    $request->includeAllScopes = false;
    $request->key = 'dicta';
    $request->maxResults = 115484;
    $request->oauthToken = 'laboriosam';
    $request->orderBy = 'est';
    $request->pageToken = 'dolor';
    $request->prettyPrint = false;
    $request->project = 'doloribus';
    $request->quotaUser = 'velit';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'delectus';
    $request->userIp = 'quam';

    $requestSecurity = new ComputeVpnGatewaysAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeVpnGatewaysAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vpnGateways->computeVpnGatewaysAggregatedList($request, $requestSecurity);

    if ($response->vpnGatewayAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeVpnGatewaysDelete

Deletes the specified VPN gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeVpnGatewaysDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'est';
    $request->fields = 'culpa';
    $request->key = 'delectus';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->project = 'magni';
    $request->quotaUser = 'velit';
    $request->region = 'alias';
    $request->requestId = 'minus';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'dolores';
    $request->userIp = 'esse';
    $request->vpnGateway = 'mollitia';

    $requestSecurity = new ComputeVpnGatewaysDeleteSecurity();
    $requestSecurity->option1 = new ComputeVpnGatewaysDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vpnGateways->computeVpnGatewaysDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeVpnGatewaysGet

Returns the specified VPN gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeVpnGatewaysGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'temporibus';
    $request->fields = 'non';
    $request->key = 'vel';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'at';
    $request->region = 'provident';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'mollitia';
    $request->userIp = 'a';
    $request->vpnGateway = 'quaerat';

    $requestSecurity = new ComputeVpnGatewaysGetSecurity();
    $requestSecurity->option1 = new ComputeVpnGatewaysGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vpnGateways->computeVpnGatewaysGet($request, $requestSecurity);

    if ($response->vpnGateway !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeVpnGatewaysGetStatus

Returns the status for the specified VPN gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysGetStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysGetStatusSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysGetStatusSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysGetStatusSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysGetStatusSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeVpnGatewaysGetStatusRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'illo';
    $request->fields = 'atque';
    $request->key = 'consectetur';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->project = 'aliquid';
    $request->quotaUser = 'corporis';
    $request->region = 'quia';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'consequuntur';
    $request->userIp = 'optio';
    $request->vpnGateway = 'eos';

    $requestSecurity = new ComputeVpnGatewaysGetStatusSecurity();
    $requestSecurity->option1 = new ComputeVpnGatewaysGetStatusSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vpnGateways->computeVpnGatewaysGetStatus($request, $requestSecurity);

    if ($response->vpnGatewaysGetStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeVpnGatewaysInsert

Creates a VPN gateway in the specified project and region using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\VpnGateway;
use \OpenAPI\OpenAPI\Models\Shared\VpnGatewayGatewayIpVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\VpnGatewayStackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VpnGatewayVpnGatewayInterface;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeVpnGatewaysInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->vpnGateway = new VpnGateway();
    $request->vpnGateway->creationTimestamp = 'quos';
    $request->vpnGateway->description = 'vitae';
    $request->vpnGateway->gatewayIpVersion = VpnGatewayGatewayIpVersionEnum::IPV4;
    $request->vpnGateway->id = 'nemo';
    $request->vpnGateway->kind = 'error';
    $request->vpnGateway->labelFingerprint = 'animi';
    $request->vpnGateway->labels = [
        'aut' => 'omnis',
        'occaecati' => 'dolor',
        'neque' => 'modi',
        'ducimus' => 'sequi',
    ];
    $request->vpnGateway->name = 'Salvatore Rau';
    $request->vpnGateway->network = 'vitae';
    $request->vpnGateway->region = 'veritatis';
    $request->vpnGateway->selfLink = 'vero';
    $request->vpnGateway->stackType = VpnGatewayStackTypeEnum::IPV4_IPV6;
    $request->vpnGateway->vpnInterfaces = [
        new VpnGatewayVpnGatewayInterface(),
        new VpnGatewayVpnGatewayInterface(),
    ];
    $request->accessToken = 'ex';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sapiente';
    $request->fields = 'voluptatibus';
    $request->key = 'mollitia';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->project = 'minus';
    $request->quotaUser = 'praesentium';
    $request->region = 'asperiores';
    $request->requestId = 'eveniet';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'molestiae';

    $requestSecurity = new ComputeVpnGatewaysInsertSecurity();
    $requestSecurity->option1 = new ComputeVpnGatewaysInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vpnGateways->computeVpnGatewaysInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeVpnGatewaysList

Retrieves a list of VPN gateways available to the specified project and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeVpnGatewaysListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'dolorum';
    $request->filter = 'voluptatum';
    $request->key = 'dolore';
    $request->maxResults = 367990;
    $request->oauthToken = 'consequuntur';
    $request->orderBy = 'aliquam';
    $request->pageToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'accusantium';
    $request->region = 'totam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'optio';

    $requestSecurity = new ComputeVpnGatewaysListSecurity();
    $requestSecurity->option1 = new ComputeVpnGatewaysListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vpnGateways->computeVpnGatewaysList($request, $requestSecurity);

    if ($response->vpnGatewayList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeVpnGatewaysSetLabels

Sets the labels on a VpnGateway. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeVpnGatewaysSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionSetLabelsRequest = new RegionSetLabelsRequest();
    $request->regionSetLabelsRequest->labelFingerprint = 'expedita';
    $request->regionSetLabelsRequest->labels = [
        'recusandae' => 'enim',
        'sapiente' => 'sit',
    ];
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'soluta';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->project = 'fugiat';
    $request->quotaUser = 'itaque';
    $request->region = 'animi';
    $request->requestId = 'cum';
    $request->resource = 'iure';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'soluta';
    $request->userIp = 'aspernatur';

    $requestSecurity = new ComputeVpnGatewaysSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeVpnGatewaysSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vpnGateways->computeVpnGatewaysSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeVpnGatewaysTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnGatewaysTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeVpnGatewaysTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'sit',
    ];
    $request->accessToken = 'cum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'explicabo';
    $request->key = 'incidunt';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->project = 'voluptate';
    $request->quotaUser = 'nisi';
    $request->region = 'ad';
    $request->resource = 'a';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'quae';
    $request->userIp = 'aliquam';

    $requestSecurity = new ComputeVpnGatewaysTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeVpnGatewaysTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vpnGateways->computeVpnGatewaysTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
