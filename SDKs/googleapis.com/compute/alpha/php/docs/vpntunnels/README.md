# vpnTunnels

### Available Operations

* [computeVpnTunnelsAggregatedList](#computevpntunnelsaggregatedlist) - Retrieves an aggregated list of VPN tunnels.
* [computeVpnTunnelsDelete](#computevpntunnelsdelete) - Deletes the specified VpnTunnel resource.
* [computeVpnTunnelsGet](#computevpntunnelsget) - Returns the specified VpnTunnel resource.
* [computeVpnTunnelsInsert](#computevpntunnelsinsert) - Creates a VpnTunnel resource in the specified project and region using the data included in the request.
* [computeVpnTunnelsList](#computevpntunnelslist) - Retrieves a list of VpnTunnel resources contained in the specified project and region.
* [computeVpnTunnelsSetLabels](#computevpntunnelssetlabels) - Sets the labels on a VpnTunnel. To learn more about labels, read the Labeling Resources documentation.
* [computeVpnTunnelsTestIamPermissions](#computevpntunnelstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeVpnTunnelsAggregatedList

Retrieves an aggregated list of VPN tunnels.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeVpnTunnelsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'architecto';
    $request->filter = 'consequatur';
    $request->includeAllScopes = false;
    $request->key = 'atque';
    $request->maxResults = 124090;
    $request->oauthToken = 'consequatur';
    $request->orderBy = 'iure';
    $request->pageToken = 'dolorem';
    $request->prettyPrint = false;
    $request->project = 'occaecati';
    $request->quotaUser = 'voluptate';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'rerum';

    $requestSecurity = new ComputeVpnTunnelsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeVpnTunnelsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vpnTunnels->computeVpnTunnelsAggregatedList($request, $requestSecurity);

    if ($response->vpnTunnelAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeVpnTunnelsDelete

Deletes the specified VpnTunnel resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeVpnTunnelsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'ad';
    $request->key = 'assumenda';
    $request->oauthToken = 'eveniet';
    $request->prettyPrint = false;
    $request->project = 'neque';
    $request->quotaUser = 'dolores';
    $request->region = 'nisi';
    $request->requestId = 'error';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'aliquid';
    $request->userIp = 'optio';
    $request->vpnTunnel = 'quae';

    $requestSecurity = new ComputeVpnTunnelsDeleteSecurity();
    $requestSecurity->option1 = new ComputeVpnTunnelsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vpnTunnels->computeVpnTunnelsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeVpnTunnelsGet

Returns the specified VpnTunnel resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeVpnTunnelsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'repellat';
    $request->fields = 'doloribus';
    $request->key = 'autem';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->project = 'perspiciatis';
    $request->quotaUser = 'ullam';
    $request->region = 'temporibus';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'quisquam';
    $request->userIp = 'adipisci';
    $request->vpnTunnel = 'blanditiis';

    $requestSecurity = new ComputeVpnTunnelsGetSecurity();
    $requestSecurity->option1 = new ComputeVpnTunnelsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vpnTunnels->computeVpnTunnelsGet($request, $requestSecurity);

    if ($response->vpnTunnel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeVpnTunnelsInsert

Creates a VpnTunnel resource in the specified project and region using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\VpnTunnel;
use \OpenAPI\OpenAPI\Models\Shared\VpnTunnelStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeVpnTunnelsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->vpnTunnel = new VpnTunnel();
    $request->vpnTunnel->creationTimestamp = 'ut';
    $request->vpnTunnel->description = 'cupiditate';
    $request->vpnTunnel->detailedStatus = 'non';
    $request->vpnTunnel->id = 'veniam';
    $request->vpnTunnel->ikeVersion = 869255;
    $request->vpnTunnel->kind = 'quas';
    $request->vpnTunnel->labelFingerprint = 'illo';
    $request->vpnTunnel->labels = [
        'provident' => 'deserunt',
        'dignissimos' => 'quidem',
    ];
    $request->vpnTunnel->localTrafficSelector = [
        'iure',
        'maxime',
    ];
    $request->vpnTunnel->name = 'Aaron Buckridge';
    $request->vpnTunnel->peerExternalGateway = 'enim';
    $request->vpnTunnel->peerExternalGatewayInterface = 285127;
    $request->vpnTunnel->peerGcpGateway = 'assumenda';
    $request->vpnTunnel->peerIp = 'dolores';
    $request->vpnTunnel->region = 'magni';
    $request->vpnTunnel->remoteTrafficSelector = [
        'optio',
        'non',
        'laborum',
        'sequi',
    ];
    $request->vpnTunnel->router = 'minus';
    $request->vpnTunnel->selfLink = 'similique';
    $request->vpnTunnel->sharedSecret = 'repellat';
    $request->vpnTunnel->sharedSecretHash = 'dignissimos';
    $request->vpnTunnel->status = VpnTunnelStatusEnum::NO_INCOMING_PACKETS;
    $request->vpnTunnel->targetVpnGateway = 'pariatur';
    $request->vpnTunnel->vpnGateway = 'laudantium';
    $request->vpnTunnel->vpnGatewayInterface = 208414;
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'optio';
    $request->fields = 'mollitia';
    $request->key = 'esse';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->project = 'amet';
    $request->quotaUser = 'dolores';
    $request->region = 'ipsum';
    $request->requestId = 'totam';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'optio';

    $requestSecurity = new ComputeVpnTunnelsInsertSecurity();
    $requestSecurity->option1 = new ComputeVpnTunnelsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vpnTunnels->computeVpnTunnelsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeVpnTunnelsList

Retrieves a list of VpnTunnel resources contained in the specified project and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeVpnTunnelsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'optio';
    $request->fields = 'ducimus';
    $request->filter = 'explicabo';
    $request->key = 'neque';
    $request->maxResults = 672217;
    $request->oauthToken = 'dolorum';
    $request->orderBy = 'doloremque';
    $request->pageToken = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'perspiciatis';
    $request->quotaUser = 'temporibus';
    $request->region = 'sit';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'quidem';
    $request->userIp = 'atque';

    $requestSecurity = new ComputeVpnTunnelsListSecurity();
    $requestSecurity->option1 = new ComputeVpnTunnelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vpnTunnels->computeVpnTunnelsList($request, $requestSecurity);

    if ($response->vpnTunnelList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeVpnTunnelsSetLabels

Sets the labels on a VpnTunnel. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeVpnTunnelsSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionSetLabelsRequest = new RegionSetLabelsRequest();
    $request->regionSetLabelsRequest->labelFingerprint = 'suscipit';
    $request->regionSetLabelsRequest->labels = [
        'totam' => 'ullam',
        'repudiandae' => 'consectetur',
    ];
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'nihil';
    $request->key = 'totam';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->project = 'voluptatibus';
    $request->quotaUser = 'natus';
    $request->region = 'necessitatibus';
    $request->requestId = 'fugit';
    $request->resource = 'ea';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'molestiae';
    $request->userIp = 'eius';

    $requestSecurity = new ComputeVpnTunnelsSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeVpnTunnelsSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vpnTunnels->computeVpnTunnelsSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeVpnTunnelsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeVpnTunnelsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeVpnTunnelsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'aperiam',
        'ad',
        'a',
        'officiis',
    ];
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'facilis';
    $request->key = 'vero';
    $request->oauthToken = 'ut';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'aperiam';
    $request->region = 'temporibus';
    $request->resource = 'voluptate';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'officia';
    $request->userIp = 'tempore';

    $requestSecurity = new ComputeVpnTunnelsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeVpnTunnelsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vpnTunnels->computeVpnTunnelsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
