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
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'eaque';
    $request->filter = 'nesciunt';
    $request->includeAllScopes = false;
    $request->key = 'ipsa';
    $request->maxResults = 288809;
    $request->oauthToken = 'culpa';
    $request->orderBy = 'in';
    $request->pageToken = 'aperiam';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'voluptates';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'veritatis';
    $request->userIp = 'perspiciatis';

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
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'nihil';
    $request->key = 'nesciunt';
    $request->oauthToken = 'ratione';
    $request->prettyPrint = false;
    $request->project = 'veniam';
    $request->quotaUser = 'exercitationem';
    $request->region = 'quasi';
    $request->requestId = 'perspiciatis';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'ipsa';
    $request->userIp = 'aut';
    $request->vpnTunnel = 'minus';

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
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'reprehenderit';
    $request->fields = 'ratione';
    $request->key = 'deserunt';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'sed';
    $request->region = 'autem';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'autem';
    $request->userIp = 'possimus';
    $request->vpnTunnel = 'commodi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->vpnTunnel = new VpnTunnel();
    $request->vpnTunnel->creationTimestamp = 'tenetur';
    $request->vpnTunnel->description = 'nobis';
    $request->vpnTunnel->detailedStatus = 'provident';
    $request->vpnTunnel->id = 'excepturi';
    $request->vpnTunnel->ikeVersion = 291361;
    $request->vpnTunnel->kind = 'dolor';
    $request->vpnTunnel->labelFingerprint = 'voluptas';
    $request->vpnTunnel->labels = [
        'ullam' => 'non',
    ];
    $request->vpnTunnel->localTrafficSelector = [
        'similique',
    ];
    $request->vpnTunnel->name = 'Tommie Lesch PhD';
    $request->vpnTunnel->peerExternalGateway = 'voluptas';
    $request->vpnTunnel->peerExternalGatewayInterface = 194078;
    $request->vpnTunnel->peerGcpGateway = 'perspiciatis';
    $request->vpnTunnel->peerIp = 'voluptates';
    $request->vpnTunnel->region = 'vel';
    $request->vpnTunnel->remoteTrafficSelector = [
        'assumenda',
    ];
    $request->vpnTunnel->router = 'hic';
    $request->vpnTunnel->selfLink = 'maiores';
    $request->vpnTunnel->sharedSecret = 'odit';
    $request->vpnTunnel->sharedSecretHash = 'velit';
    $request->vpnTunnel->status = VpnTunnelStatusEnum::FAILED;
    $request->vpnTunnel->targetVpnGateway = 'dolor';
    $request->vpnTunnel->vpnGateway = 'nostrum';
    $request->vpnTunnel->vpnGatewayInterface = 290865;
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'earum';
    $request->key = 'temporibus';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'quibusdam';
    $request->region = 'corrupti';
    $request->requestId = 'quis';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'saepe';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ea';
    $request->fields = 'fugiat';
    $request->filter = 'quas';
    $request->key = 'ea';
    $request->maxResults = 104466;
    $request->oauthToken = 'porro';
    $request->orderBy = 'vitae';
    $request->pageToken = 'a';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'aperiam';
    $request->region = 'ipsum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'amet';

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
    $request->regionSetLabelsRequest->labelFingerprint = 'beatae';
    $request->regionSetLabelsRequest->labels = [
        'nostrum' => 'quas',
        'vel' => 'nemo',
    ];
    $request->accessToken = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->fields = 'magni';
    $request->key = 'labore';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->project = 'voluptas';
    $request->quotaUser = 'autem';
    $request->region = 'adipisci';
    $request->requestId = 'hic';
    $request->resource = 'praesentium';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'modi';
    $request->userIp = 'natus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'eius',
        'quasi',
        'cum',
        'nam',
    ];
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'veniam';
    $request->key = 'sapiente';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'dolorum';
    $request->quotaUser = 'et';
    $request->region = 'perferendis';
    $request->resource = 'quis';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'non';
    $request->userIp = 'laborum';

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
