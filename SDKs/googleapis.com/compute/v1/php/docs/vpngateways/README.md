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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'nulla';
    $request->filter = 'sed';
    $request->includeAllScopes = false;
    $request->key = 'distinctio';
    $request->maxResults = 844550;
    $request->oauthToken = 'fugiat';
    $request->orderBy = 'error';
    $request->pageToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->project = 'ullam';
    $request->quotaUser = 'deleniti';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'temporibus';
    $request->userIp = 'expedita';

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
    $request->accessToken = 'autem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->fields = 'optio';
    $request->key = 'nesciunt';
    $request->oauthToken = 'illo';
    $request->prettyPrint = false;
    $request->project = 'dolores';
    $request->quotaUser = 'cumque';
    $request->region = 'voluptate';
    $request->requestId = 'delectus';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'ullam';
    $request->userIp = 'quae';
    $request->vpnGateway = 'at';

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
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'quod';
    $request->key = 'veritatis';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->project = 'aliquid';
    $request->quotaUser = 'qui';
    $request->region = 'error';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'facere';
    $request->vpnGateway = 'voluptate';

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
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'in';
    $request->key = 'dicta';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'quos';
    $request->region = 'quo';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'numquam';
    $request->userIp = 'ab';
    $request->vpnGateway = 'quos';

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
    $request->vpnGateway->creationTimestamp = 'vitae';
    $request->vpnGateway->description = 'voluptatibus';
    $request->vpnGateway->id = 'officiis';
    $request->vpnGateway->kind = 'inventore';
    $request->vpnGateway->labelFingerprint = 'a';
    $request->vpnGateway->labels = [
        'voluptate' => 'repudiandae',
        'id' => 'illo',
        'aut' => 'ratione',
    ];
    $request->vpnGateway->name = 'Mrs. Jeremiah Lemke';
    $request->vpnGateway->network = 'laborum';
    $request->vpnGateway->region = 'beatae';
    $request->vpnGateway->selfLink = 'commodi';
    $request->vpnGateway->stackType = VpnGatewayStackTypeEnum::IPV4_IPV6;
    $request->vpnGateway->vpnInterfaces = [
        new VpnGatewayVpnGatewayInterface(),
        new VpnGatewayVpnGatewayInterface(),
    ];
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'accusamus';
    $request->key = 'hic';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->project = 'iusto';
    $request->quotaUser = 'cum';
    $request->region = 'deleniti';
    $request->requestId = 'sunt';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ullam';
    $request->userIp = 'deleniti';

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
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'veniam';
    $request->filter = 'expedita';
    $request->key = 'impedit';
    $request->maxResults = 520841;
    $request->oauthToken = 'alias';
    $request->orderBy = 'nulla';
    $request->pageToken = 'accusamus';
    $request->prettyPrint = false;
    $request->project = 'id';
    $request->quotaUser = 'reprehenderit';
    $request->region = 'dignissimos';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'omnis';

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
    $request->regionSetLabelsRequest->labelFingerprint = 'dolor';
    $request->regionSetLabelsRequest->labels = [
        'debitis' => 'maxime',
    ];
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'aperiam';
    $request->key = 'aliquid';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'tenetur';
    $request->quotaUser = 'maiores';
    $request->region = 'magni';
    $request->requestId = 'quisquam';
    $request->resource = 'dolores';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'culpa';
    $request->userIp = 'distinctio';

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
        'doloremque',
        'animi',
    ];
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repudiandae';
    $request->fields = 'id';
    $request->key = 'aperiam';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->project = 'ducimus';
    $request->quotaUser = 'quia';
    $request->region = 'quibusdam';
    $request->resource = 'autem';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'molestiae';
    $request->userIp = 'neque';

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
