# regionTargetTcpProxies

### Available Operations

* [computeRegionTargetTcpProxiesDelete](#computeregiontargettcpproxiesdelete) - Deletes the specified TargetTcpProxy resource.
* [computeRegionTargetTcpProxiesGet](#computeregiontargettcpproxiesget) - Returns the specified TargetTcpProxy resource.
* [computeRegionTargetTcpProxiesInsert](#computeregiontargettcpproxiesinsert) - Creates a TargetTcpProxy resource in the specified project and region using the data included in the request.
* [computeRegionTargetTcpProxiesList](#computeregiontargettcpproxieslist) - Retrieves a list of TargetTcpProxy resources available to the specified project in a given region.

## computeRegionTargetTcpProxiesDelete

Deletes the specified TargetTcpProxy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetTcpProxiesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptate';
    $request->fields = 'et';
    $request->key = 'recusandae';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->project = 'natus';
    $request->quotaUser = 'eius';
    $request->region = 'veritatis';
    $request->requestId = 'totam';
    $request->targetTcpProxy = 'ab';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'optio';

    $requestSecurity = new ComputeRegionTargetTcpProxiesDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetTcpProxiesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetTcpProxies->computeRegionTargetTcpProxiesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetTcpProxiesGet

Returns the specified TargetTcpProxy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetTcpProxiesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'eum';
    $request->key = 'facilis';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'sunt';
    $request->region = 'veniam';
    $request->targetTcpProxy = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'omnis';
    $request->userIp = 'quidem';

    $requestSecurity = new ComputeRegionTargetTcpProxiesGetSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetTcpProxiesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetTcpProxies->computeRegionTargetTcpProxiesGet($request, $requestSecurity);

    if ($response->targetTcpProxy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetTcpProxiesInsert

Creates a TargetTcpProxy resource in the specified project and region using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetTcpProxy;
use \OpenAPI\OpenAPI\Models\Shared\TargetTcpProxyProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetTcpProxiesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetTcpProxy = new TargetTcpProxy();
    $request->targetTcpProxy->creationTimestamp = 'ipsam';
    $request->targetTcpProxy->description = 'minima';
    $request->targetTcpProxy->id = 'assumenda';
    $request->targetTcpProxy->kind = 'aperiam';
    $request->targetTcpProxy->name = 'Cathy Powlowski';
    $request->targetTcpProxy->proxyBind = false;
    $request->targetTcpProxy->proxyHeader = TargetTcpProxyProxyHeaderEnum::PROXY_V1;
    $request->targetTcpProxy->region = 'quos';
    $request->targetTcpProxy->selfLink = 'cum';
    $request->targetTcpProxy->service = 'praesentium';
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'molestias';
    $request->key = 'similique';
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->project = 'mollitia';
    $request->quotaUser = 'laudantium';
    $request->region = 'molestias';
    $request->requestId = 'quo';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'modi';
    $request->userIp = 'labore';

    $requestSecurity = new ComputeRegionTargetTcpProxiesInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetTcpProxiesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetTcpProxies->computeRegionTargetTcpProxiesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetTcpProxiesList

Retrieves a list of TargetTcpProxy resources available to the specified project in a given region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetTcpProxiesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetTcpProxiesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'aspernatur';
    $request->filter = 'maxime';
    $request->key = 'deserunt';
    $request->maxResults = 920481;
    $request->oauthToken = 'nam';
    $request->orderBy = 'et';
    $request->pageToken = 'similique';
    $request->prettyPrint = false;
    $request->project = 'saepe';
    $request->quotaUser = 'ab';
    $request->region = 'repudiandae';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'repellat';
    $request->userIp = 'laudantium';

    $requestSecurity = new ComputeRegionTargetTcpProxiesListSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetTcpProxiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetTcpProxies->computeRegionTargetTcpProxiesList($request, $requestSecurity);

    if ($response->targetTcpProxyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
