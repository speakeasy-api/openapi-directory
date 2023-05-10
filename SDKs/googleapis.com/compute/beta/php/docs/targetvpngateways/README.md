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
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'dolor';
    $request->filter = 'saepe';
    $request->includeAllScopes = false;
    $request->key = 'sint';
    $request->maxResults = 210787;
    $request->oauthToken = 'doloribus';
    $request->orderBy = 'sit';
    $request->pageToken = 'doloremque';
    $request->prettyPrint = false;
    $request->project = 'culpa';
    $request->quotaUser = 'sunt';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'explicabo';

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
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nisi';
    $request->fields = 'nulla';
    $request->key = 'modi';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->quotaUser = 'odio';
    $request->region = 'deleniti';
    $request->requestId = 'ullam';
    $request->targetVpnGateway = 'consequuntur';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'praesentium';

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
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'expedita';
    $request->key = 'ipsa';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->project = 'at';
    $request->quotaUser = 'nisi';
    $request->region = 'error';
    $request->targetVpnGateway = 'sunt';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'doloribus';
    $request->userIp = 'praesentium';

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
    $request->targetVpnGateway->creationTimestamp = 'vitae';
    $request->targetVpnGateway->description = 'nemo';
    $request->targetVpnGateway->forwardingRules = [
        'dolorem',
        'officia',
        'atque',
    ];
    $request->targetVpnGateway->id = 'dolore';
    $request->targetVpnGateway->kind = 'repudiandae';
    $request->targetVpnGateway->labelFingerprint = 'similique';
    $request->targetVpnGateway->labels = [
        'pariatur' => 'soluta',
        'et' => 'ullam',
    ];
    $request->targetVpnGateway->name = 'Mrs. Bernard Runolfsson';
    $request->targetVpnGateway->network = 'accusamus';
    $request->targetVpnGateway->region = 'voluptas';
    $request->targetVpnGateway->selfLink = 'placeat';
    $request->targetVpnGateway->status = TargetVpnGatewayStatusEnum::READY;
    $request->targetVpnGateway->tunnels = [
        'natus',
    ];
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nisi';
    $request->fields = 'esse';
    $request->key = 'veniam';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->project = 'occaecati';
    $request->quotaUser = 'molestiae';
    $request->region = 'accusamus';
    $request->requestId = 'cumque';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'voluptates';
    $request->userIp = 'distinctio';

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
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'tempore';
    $request->filter = 'est';
    $request->key = 'sapiente';
    $request->maxResults = 589927;
    $request->oauthToken = 'animi';
    $request->orderBy = 'quam';
    $request->pageToken = 'illum';
    $request->prettyPrint = false;
    $request->project = 'animi';
    $request->quotaUser = 'ex';
    $request->region = 'optio';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'cupiditate';
    $request->userIp = 'facilis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionSetLabelsRequest = new RegionSetLabelsRequest();
    $request->regionSetLabelsRequest->labelFingerprint = 'velit';
    $request->regionSetLabelsRequest->labels = [
        'officiis' => 'exercitationem',
        'inventore' => 'similique',
        'molestiae' => 'necessitatibus',
    ];
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nulla';
    $request->fields = 'eum';
    $request->key = 'reiciendis';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'asperiores';
    $request->region = 'eaque';
    $request->requestId = 'modi';
    $request->resource = 'asperiores';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'est';
    $request->userIp = 'perferendis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'voluptas',
        'cupiditate',
    ];
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptates';
    $request->fields = 'quas';
    $request->key = 'sunt';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'fugit';
    $request->quotaUser = 'tempora';
    $request->region = 'aperiam';
    $request->resource = 'nesciunt';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'veniam';
    $request->userIp = 'nostrum';

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
