# vpnTunnels

### Available Operations

* [computeVpnTunnelsAggregatedList](#computevpntunnelsaggregatedlist) - Retrieves an aggregated list of VPN tunnels.
* [computeVpnTunnelsDelete](#computevpntunnelsdelete) - Deletes the specified VpnTunnel resource.
* [computeVpnTunnelsGet](#computevpntunnelsget) - Returns the specified VpnTunnel resource.
* [computeVpnTunnelsInsert](#computevpntunnelsinsert) - Creates a VpnTunnel resource in the specified project and region using the data included in the request.
* [computeVpnTunnelsList](#computevpntunnelslist) - Retrieves a list of VpnTunnel resources contained in the specified project and region.
* [computeVpnTunnelsSetLabels](#computevpntunnelssetlabels) - Sets the labels on a VpnTunnel. To learn more about labels, read the Labeling Resources documentation.

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
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->fields = 'deserunt';
    $request->filter = 'labore';
    $request->includeAllScopes = false;
    $request->key = 'consectetur';
    $request->maxResults = 278294;
    $request->oauthToken = 'cumque';
    $request->orderBy = 'quibusdam';
    $request->pageToken = 'nam';
    $request->prettyPrint = false;
    $request->project = 'adipisci';
    $request->quotaUser = 'dicta';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'provident';
    $request->userIp = 'fuga';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'qui';
    $request->fields = 'quis';
    $request->key = 'sed';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'blanditiis';
    $request->region = 'similique';
    $request->requestId = 'sunt';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'mollitia';
    $request->userIp = 'magnam';
    $request->vpnTunnel = 'tempore';

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
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officiis';
    $request->fields = 'repellendus';
    $request->key = 'quaerat';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'placeat';
    $request->region = 'voluptatibus';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'eum';
    $request->userIp = 'sunt';
    $request->vpnTunnel = 'ex';

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
    $request->vpnTunnel->creationTimestamp = 'recusandae';
    $request->vpnTunnel->description = 'perspiciatis';
    $request->vpnTunnel->detailedStatus = 'ratione';
    $request->vpnTunnel->id = 'quia';
    $request->vpnTunnel->ikeVersion = 474076;
    $request->vpnTunnel->kind = 'ullam';
    $request->vpnTunnel->labelFingerprint = 'odio';
    $request->vpnTunnel->labels = [
        'soluta' => 'nulla',
        'iure' => 'doloremque',
    ];
    $request->vpnTunnel->localTrafficSelector = [
        'officia',
        'est',
        'voluptatem',
        'itaque',
    ];
    $request->vpnTunnel->name = 'Esther Mills';
    $request->vpnTunnel->peerExternalGateway = 'dicta';
    $request->vpnTunnel->peerExternalGatewayInterface = 797756;
    $request->vpnTunnel->peerGcpGateway = 'quod';
    $request->vpnTunnel->peerIp = 'assumenda';
    $request->vpnTunnel->region = 'illum';
    $request->vpnTunnel->remoteTrafficSelector = [
        'ea',
    ];
    $request->vpnTunnel->router = 'magni';
    $request->vpnTunnel->selfLink = 'rerum';
    $request->vpnTunnel->sharedSecret = 'quidem';
    $request->vpnTunnel->sharedSecretHash = 'reiciendis';
    $request->vpnTunnel->status = VpnTunnelStatusEnum::NETWORK_ERROR;
    $request->vpnTunnel->targetVpnGateway = 'qui';
    $request->vpnTunnel->vpnGateway = 'amet';
    $request->vpnTunnel->vpnGatewayInterface = 618141;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'illo';
    $request->fields = 'quis';
    $request->key = 'a';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->project = 'laboriosam';
    $request->quotaUser = 'deleniti';
    $request->region = 'excepturi';
    $request->requestId = 'unde';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'asperiores';
    $request->userIp = 'numquam';

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
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'excepturi';
    $request->filter = 'expedita';
    $request->key = 'officiis';
    $request->maxResults = 773043;
    $request->oauthToken = 'ullam';
    $request->orderBy = 'aperiam';
    $request->pageToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->project = 'beatae';
    $request->quotaUser = 'rem';
    $request->region = 'laborum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'eveniet';

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
    $request->regionSetLabelsRequest->labelFingerprint = 'consequatur';
    $request->regionSetLabelsRequest->labels = [
        'fugiat' => 'eos',
    ];
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'odio';
    $request->key = 'soluta';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->project = 'nemo';
    $request->quotaUser = 'suscipit';
    $request->region = 'culpa';
    $request->requestId = 'quas';
    $request->resource = 'ipsam';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'repudiandae';
    $request->userIp = 'nostrum';

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
