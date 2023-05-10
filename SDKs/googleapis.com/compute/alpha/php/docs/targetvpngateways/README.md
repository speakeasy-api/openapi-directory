# targetVpnGateways

### Available Operations

* [computeTargetVpnGatewaysAggregatedList](#computetargetvpngatewaysaggregatedlist) - Retrieves an aggregated list of target VPN gateways.
* [computeTargetVpnGatewaysDelete](#computetargetvpngatewaysdelete) - Deletes the specified target VPN gateway.
* [computeTargetVpnGatewaysGet](#computetargetvpngatewaysget) - Returns the specified target VPN gateway.
* [computeTargetVpnGatewaysInsert](#computetargetvpngatewaysinsert) - Creates a target VPN gateway in the specified project and region using the data included in the request.
* [computeTargetVpnGatewaysList](#computetargetvpngatewayslist) - Retrieves a list of target VPN gateways available to the specified project and region.
* [computeTargetVpnGatewaysSetLabels](#computetargetvpngatewayssetlabels) - Sets the labels on a TargetVpnGateway. To learn more about labels, read the Labeling Resources documentation.
* [computeTargetVpnGatewaysTestIamPermissions](#computetargetvpngatewaystestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeTargetVpnGatewaysAggregatedList

Retrieves an aggregated list of target VPN gateways.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetVpnGatewaysAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'officiis';
    $request->filter = 'qui';
    $request->includeAllScopes = false;
    $request->key = 'minus';
    $request->maxResults = 880907;
    $request->oauthToken = 'eligendi';
    $request->orderBy = 'harum';
    $request->pageToken = 'quam';
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->quotaUser = 'eius';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'minima';

    $requestSecurity = new ComputeTargetVpnGatewaysAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeTargetVpnGatewaysAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetVpnGateways->computeTargetVpnGatewaysAggregatedList($request, $requestSecurity);

    if ($response->targetVpnGatewayAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetVpnGatewaysDelete

Deletes the specified target VPN gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetVpnGatewaysDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cum';
    $request->fields = 'saepe';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'possimus';
    $request->region = 'qui';
    $request->requestId = 'perferendis';
    $request->targetVpnGateway = 'odio';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'quaerat';

    $requestSecurity = new ComputeTargetVpnGatewaysDeleteSecurity();
    $requestSecurity->option1 = new ComputeTargetVpnGatewaysDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetVpnGateways->computeTargetVpnGatewaysDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetVpnGatewaysGet

Returns the specified target VPN gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetVpnGatewaysGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatum';
    $request->fields = 'dolore';
    $request->key = 'laudantium';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->project = 'eaque';
    $request->quotaUser = 'iste';
    $request->region = 'corporis';
    $request->targetVpnGateway = 'quibusdam';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'incidunt';
    $request->userIp = 'incidunt';

    $requestSecurity = new ComputeTargetVpnGatewaysGetSecurity();
    $requestSecurity->option1 = new ComputeTargetVpnGatewaysGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetVpnGateways->computeTargetVpnGatewaysGet($request, $requestSecurity);

    if ($response->targetVpnGateway !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetVpnGatewaysInsert

Creates a target VPN gateway in the specified project and region using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetVpnGateway;
use \OpenAPI\OpenAPI\Models\Shared\TargetVpnGatewayStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetVpnGatewaysInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetVpnGateway = new TargetVpnGateway();
    $request->targetVpnGateway->creationTimestamp = 'eos';
    $request->targetVpnGateway->description = 'deserunt';
    $request->targetVpnGateway->forwardingRules = [
        'repellat',
    ];
    $request->targetVpnGateway->id = 'eligendi';
    $request->targetVpnGateway->kind = 'amet';
    $request->targetVpnGateway->labelFingerprint = 'animi';
    $request->targetVpnGateway->labels = [
        'harum' => 'possimus',
    ];
    $request->targetVpnGateway->name = 'Jermaine Simonis';
    $request->targetVpnGateway->network = 'aut';
    $request->targetVpnGateway->region = 'voluptatem';
    $request->targetVpnGateway->selfLink = 'eum';
    $request->targetVpnGateway->status = TargetVpnGatewayStatusEnum::FAILED;
    $request->targetVpnGateway->tunnels = [
        'eligendi',
        'optio',
        'iste',
    ];
    $request->accessToken = 'id';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'qui';
    $request->key = 'maxime';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->project = 'quo';
    $request->quotaUser = 'ex';
    $request->region = 'molestiae';
    $request->requestId = 'dolor';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'itaque';
    $request->userIp = 'facere';

    $requestSecurity = new ComputeTargetVpnGatewaysInsertSecurity();
    $requestSecurity->option1 = new ComputeTargetVpnGatewaysInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetVpnGateways->computeTargetVpnGatewaysInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetVpnGatewaysList

Retrieves a list of target VPN gateways available to the specified project and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetVpnGatewaysListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'unde';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusantium';
    $request->fields = 'pariatur';
    $request->filter = 'quisquam';
    $request->key = 'perspiciatis';
    $request->maxResults = 393339;
    $request->oauthToken = 'ratione';
    $request->orderBy = 'enim';
    $request->pageToken = 'ut';
    $request->prettyPrint = false;
    $request->project = 'laudantium';
    $request->quotaUser = 'assumenda';
    $request->region = 'laborum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'recusandae';
    $request->userIp = 'occaecati';

    $requestSecurity = new ComputeTargetVpnGatewaysListSecurity();
    $requestSecurity->option1 = new ComputeTargetVpnGatewaysListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetVpnGateways->computeTargetVpnGatewaysList($request, $requestSecurity);

    if ($response->targetVpnGatewayList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetVpnGatewaysSetLabels

Sets the labels on a TargetVpnGateway. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetVpnGatewaysSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionSetLabelsRequest = new RegionSetLabelsRequest();
    $request->regionSetLabelsRequest->labelFingerprint = 'nisi';
    $request->regionSetLabelsRequest->labels = [
        'culpa' => 'doloremque',
        'expedita' => 'quibusdam',
    ];
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquam';
    $request->fields = 'tempora';
    $request->key = 'delectus';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'perferendis';
    $request->quotaUser = 'culpa';
    $request->region = 'laborum';
    $request->requestId = 'id';
    $request->resource = 'quas';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'consequuntur';

    $requestSecurity = new ComputeTargetVpnGatewaysSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeTargetVpnGatewaysSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetVpnGateways->computeTargetVpnGatewaysSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetVpnGatewaysTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetVpnGatewaysTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetVpnGatewaysTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'alias',
        'totam',
        'quia',
    ];
    $request->accessToken = 'quis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'libero';
    $request->fields = 'veritatis';
    $request->key = 'iure';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'perferendis';
    $request->region = 'dolorem';
    $request->resource = 'eveniet';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'ea';
    $request->userIp = 'consequatur';

    $requestSecurity = new ComputeTargetVpnGatewaysTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeTargetVpnGatewaysTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetVpnGateways->computeTargetVpnGatewaysTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
