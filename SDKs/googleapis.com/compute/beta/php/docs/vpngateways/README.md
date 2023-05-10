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
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corrupti';
    $request->fields = 'laboriosam';
    $request->filter = 'quisquam';
    $request->includeAllScopes = false;
    $request->key = 'voluptatem';
    $request->maxResults = 218265;
    $request->oauthToken = 'id';
    $request->orderBy = 'quod';
    $request->pageToken = 'adipisci';
    $request->prettyPrint = false;
    $request->project = 'voluptatibus';
    $request->quotaUser = 'sed';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'possimus';
    $request->userIp = 'maxime';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sequi';
    $request->fields = 'eligendi';
    $request->key = 'dicta';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->project = 'iure';
    $request->quotaUser = 'iste';
    $request->region = 'corrupti';
    $request->requestId = 'ex';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'ad';
    $request->vpnGateway = 'molestias';

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
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'necessitatibus';
    $request->fields = 'harum';
    $request->key = 'optio';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'fuga';
    $request->region = 'animi';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'dolor';
    $request->userIp = 'pariatur';
    $request->vpnGateway = 'repudiandae';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quisquam';
    $request->fields = 'perspiciatis';
    $request->key = 'sit';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'sequi';
    $request->quotaUser = 'ad';
    $request->region = 'voluptates';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'placeat';
    $request->userIp = 'et';
    $request->vpnGateway = 'illum';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->vpnGateway = new VpnGateway();
    $request->vpnGateway->creationTimestamp = 'ex';
    $request->vpnGateway->description = 'eos';
    $request->vpnGateway->gatewayIpVersion = VpnGatewayGatewayIpVersionEnum::IPV4;
    $request->vpnGateway->id = 'assumenda';
    $request->vpnGateway->kind = 'debitis';
    $request->vpnGateway->labelFingerprint = 'non';
    $request->vpnGateway->labels = [
        'nesciunt' => 'magnam',
        'sapiente' => 'magnam',
    ];
    $request->vpnGateway->name = 'Eloise Gulgowski';
    $request->vpnGateway->network = 'repellendus';
    $request->vpnGateway->region = 'culpa';
    $request->vpnGateway->selfLink = 'molestiae';
    $request->vpnGateway->stackType = VpnGatewayStackTypeEnum::IPV4_IPV6;
    $request->vpnGateway->vpnInterfaces = [
        new VpnGatewayVpnGatewayInterface(),
        new VpnGatewayVpnGatewayInterface(),
    ];
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'incidunt';
    $request->fields = 'incidunt';
    $request->key = 'laboriosam';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->quotaUser = 'iste';
    $request->region = 'occaecati';
    $request->requestId = 'cupiditate';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'facere';
    $request->userIp = 'impedit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->fields = 'dolore';
    $request->filter = 'sed';
    $request->key = 'ex';
    $request->maxResults = 418785;
    $request->oauthToken = 'impedit';
    $request->orderBy = 'sit';
    $request->pageToken = 'saepe';
    $request->prettyPrint = false;
    $request->project = 'ipsam';
    $request->quotaUser = 'sit';
    $request->region = 'perferendis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'minus';
    $request->userIp = 'dignissimos';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionSetLabelsRequest = new RegionSetLabelsRequest();
    $request->regionSetLabelsRequest->labelFingerprint = 'explicabo';
    $request->regionSetLabelsRequest->labels = [
        'molestias' => 'minus',
        'esse' => 'inventore',
        'aperiam' => 'totam',
        'occaecati' => 'vitae',
    ];
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'tempore';
    $request->key = 'amet';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'laborum';
    $request->quotaUser = 'praesentium';
    $request->region = 'modi';
    $request->requestId = 'asperiores';
    $request->resource = 'voluptates';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'molestiae';
    $request->userIp = 'libero';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'aperiam',
        'sapiente',
        'tempore',
        'deserunt',
    ];
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'dolore';
    $request->key = 'nulla';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->project = 'sunt';
    $request->quotaUser = 'dolor';
    $request->region = 'dolore';
    $request->resource = 'in';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'eum';
    $request->userIp = 'eveniet';

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
