# targetVpnGateways

### Available Operations

* [computeTargetVpnGatewaysAggregatedList](#computetargetvpngatewaysaggregatedlist) - Retrieves an aggregated list of target VPN gateways.
* [computeTargetVpnGatewaysDelete](#computetargetvpngatewaysdelete) - Deletes the specified target VPN gateway.
* [computeTargetVpnGatewaysGet](#computetargetvpngatewaysget) - Returns the specified target VPN gateway.
* [computeTargetVpnGatewaysInsert](#computetargetvpngatewaysinsert) - Creates a target VPN gateway in the specified project and region using the data included in the request.
* [computeTargetVpnGatewaysList](#computetargetvpngatewayslist) - Retrieves a list of target VPN gateways available to the specified project and region.
* [computeTargetVpnGatewaysSetLabels](#computetargetvpngatewayssetlabels) - Sets the labels on a TargetVpnGateway. To learn more about labels, read the Labeling Resources documentation.

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
    $request->accessToken = 'ut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->fields = 'minima';
    $request->filter = 'placeat';
    $request->includeAllScopes = false;
    $request->key = 'eos';
    $request->maxResults = 946348;
    $request->oauthToken = 'omnis';
    $request->orderBy = 'itaque';
    $request->pageToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->project = 'et';
    $request->quotaUser = 'fugiat';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'earum';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'odio';
    $request->key = 'commodi';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->project = 'repellat';
    $request->quotaUser = 'porro';
    $request->region = 'dignissimos';
    $request->requestId = 'ex';
    $request->targetVpnGateway = 'molestiae';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'voluptatem';

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
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eius';
    $request->fields = 'mollitia';
    $request->key = 'laboriosam';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'deleniti';
    $request->region = 'consequuntur';
    $request->targetVpnGateway = 'totam';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'nam';
    $request->userIp = 'eum';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetVpnGateway = new TargetVpnGateway();
    $request->targetVpnGateway->creationTimestamp = 'officia';
    $request->targetVpnGateway->description = 'repudiandae';
    $request->targetVpnGateway->forwardingRules = [
        'architecto',
        'sint',
        'cumque',
        'explicabo',
    ];
    $request->targetVpnGateway->id = 'nisi';
    $request->targetVpnGateway->kind = 'quisquam';
    $request->targetVpnGateway->labelFingerprint = 'quae';
    $request->targetVpnGateway->labels = [
        'facilis' => 'ex',
        'quasi' => 'atque',
        'maxime' => 'vel',
        'neque' => 'dolor',
    ];
    $request->targetVpnGateway->name = 'Jacquelyn Orn';
    $request->targetVpnGateway->network = 'deserunt';
    $request->targetVpnGateway->region = 'rerum';
    $request->targetVpnGateway->selfLink = 'voluptate';
    $request->targetVpnGateway->status = TargetVpnGatewayStatusEnum::DELETING;
    $request->targetVpnGateway->tunnels = [
        'est',
        'magnam',
    ];
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facere';
    $request->fields = 'illum';
    $request->key = 'perferendis';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->project = 'culpa';
    $request->quotaUser = 'aut';
    $request->region = 'animi';
    $request->requestId = 'distinctio';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'veniam';
    $request->userIp = 'totam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nulla';
    $request->fields = 'quis';
    $request->filter = 'labore';
    $request->key = 'nobis';
    $request->maxResults = 655777;
    $request->oauthToken = 'illo';
    $request->orderBy = 'eligendi';
    $request->pageToken = 'facilis';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'laborum';
    $request->region = 'quibusdam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'sint';
    $request->userIp = 'expedita';

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
    $request->regionSetLabelsRequest->labelFingerprint = 'saepe';
    $request->regionSetLabelsRequest->labels = [
        'maxime' => 'quasi',
        'totam' => 'harum',
    ];
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'debitis';
    $request->fields = 'rem';
    $request->key = 'dignissimos';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->project = 'ea';
    $request->quotaUser = 'incidunt';
    $request->region = 'corrupti';
    $request->requestId = 'aspernatur';
    $request->resource = 'dolorem';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'quis';
    $request->userIp = 'voluptas';

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
