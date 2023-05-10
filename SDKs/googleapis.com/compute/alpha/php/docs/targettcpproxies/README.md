# targetTcpProxies

### Available Operations

* [computeTargetTcpProxiesAggregatedList](#computetargettcpproxiesaggregatedlist) - Retrieves the list of all TargetTcpProxy resources, regional and global, available to the specified project.
* [computeTargetTcpProxiesDelete](#computetargettcpproxiesdelete) - Deletes the specified TargetTcpProxy resource.
* [computeTargetTcpProxiesGet](#computetargettcpproxiesget) - Returns the specified TargetTcpProxy resource.
* [computeTargetTcpProxiesInsert](#computetargettcpproxiesinsert) - Creates a TargetTcpProxy resource in the specified project using the data included in the request.
* [computeTargetTcpProxiesList](#computetargettcpproxieslist) - Retrieves the list of TargetTcpProxy resources available to the specified project.
* [computeTargetTcpProxiesSetBackendService](#computetargettcpproxiessetbackendservice) - Changes the BackendService for TargetTcpProxy.
* [computeTargetTcpProxiesSetProxyHeader](#computetargettcpproxiessetproxyheader) - Changes the ProxyHeaderType for TargetTcpProxy.
* [computeTargetTcpProxiesTestIamPermissions](#computetargettcpproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeTargetTcpProxiesAggregatedList

Retrieves the list of all TargetTcpProxy resources, regional and global, available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetTcpProxiesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'aliquid';
    $request->filter = 'totam';
    $request->includeAllScopes = false;
    $request->key = 'cupiditate';
    $request->maxResults = 697830;
    $request->oauthToken = 'aliquid';
    $request->orderBy = 'quasi';
    $request->pageToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'libero';
    $request->quotaUser = 'non';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'quidem';
    $request->userIp = 'rerum';

    $requestSecurity = new ComputeTargetTcpProxiesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeTargetTcpProxiesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetTcpProxies->computeTargetTcpProxiesAggregatedList($request, $requestSecurity);

    if ($response->targetTcpProxyAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetTcpProxiesDelete

Deletes the specified TargetTcpProxy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetTcpProxiesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'a';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'esse';
    $request->fields = 'eius';
    $request->key = 'quae';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'ut';
    $request->quotaUser = 'id';
    $request->requestId = 'fugit';
    $request->targetTcpProxy = 'at';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'eos';

    $requestSecurity = new ComputeTargetTcpProxiesDeleteSecurity();
    $requestSecurity->option1 = new ComputeTargetTcpProxiesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetTcpProxies->computeTargetTcpProxiesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetTcpProxiesGet

Returns the specified TargetTcpProxy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetTcpProxiesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'autem';
    $request->fields = 'reiciendis';
    $request->key = 'laboriosam';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->project = 'quae';
    $request->quotaUser = 'recusandae';
    $request->targetTcpProxy = 'perspiciatis';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'sunt';
    $request->userIp = 'corrupti';

    $requestSecurity = new ComputeTargetTcpProxiesGetSecurity();
    $requestSecurity->option1 = new ComputeTargetTcpProxiesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetTcpProxies->computeTargetTcpProxiesGet($request, $requestSecurity);

    if ($response->targetTcpProxy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetTcpProxiesInsert

Creates a TargetTcpProxy resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetTcpProxy;
use \OpenAPI\OpenAPI\Models\Shared\TargetTcpProxyProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetTcpProxiesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetTcpProxy = new TargetTcpProxy();
    $request->targetTcpProxy->creationTimestamp = 'quisquam';
    $request->targetTcpProxy->description = 'magnam';
    $request->targetTcpProxy->id = 'labore';
    $request->targetTcpProxy->kind = 'quasi';
    $request->targetTcpProxy->name = 'Miss Levi Nitzsche';
    $request->targetTcpProxy->proxyBind = false;
    $request->targetTcpProxy->proxyHeader = TargetTcpProxyProxyHeaderEnum::PROXY_V1;
    $request->targetTcpProxy->region = 'labore';
    $request->targetTcpProxy->selfLink = 'quidem';
    $request->targetTcpProxy->service = 'adipisci';
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aperiam';
    $request->fields = 'est';
    $request->key = 'iste';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->project = 'natus';
    $request->quotaUser = 'ea';
    $request->requestId = 'saepe';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'qui';
    $request->userIp = 'tempore';

    $requestSecurity = new ComputeTargetTcpProxiesInsertSecurity();
    $requestSecurity->option1 = new ComputeTargetTcpProxiesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetTcpProxies->computeTargetTcpProxiesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetTcpProxiesList

Retrieves the list of TargetTcpProxy resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetTcpProxiesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'at';
    $request->fields = 'quidem';
    $request->filter = 'dolore';
    $request->key = 'ratione';
    $request->maxResults = 51252;
    $request->oauthToken = 'culpa';
    $request->orderBy = 'nihil';
    $request->pageToken = 'error';
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'id';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'dolore';

    $requestSecurity = new ComputeTargetTcpProxiesListSecurity();
    $requestSecurity->option1 = new ComputeTargetTcpProxiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetTcpProxies->computeTargetTcpProxiesList($request, $requestSecurity);

    if ($response->targetTcpProxyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetTcpProxiesSetBackendService

Changes the BackendService for TargetTcpProxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesSetBackendServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetTcpProxiesSetBackendServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesSetBackendServiceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesSetBackendServiceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesSetBackendServiceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetTcpProxiesSetBackendServiceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetTcpProxiesSetBackendServiceRequest = new TargetTcpProxiesSetBackendServiceRequest();
    $request->targetTcpProxiesSetBackendServiceRequest->service = 'doloribus';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'natus';
    $request->key = 'modi';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->project = 'adipisci';
    $request->quotaUser = 'quaerat';
    $request->requestId = 'exercitationem';
    $request->targetTcpProxy = 'quisquam';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'cumque';
    $request->userIp = 'omnis';

    $requestSecurity = new ComputeTargetTcpProxiesSetBackendServiceSecurity();
    $requestSecurity->option1 = new ComputeTargetTcpProxiesSetBackendServiceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetTcpProxies->computeTargetTcpProxiesSetBackendService($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetTcpProxiesSetProxyHeader

Changes the ProxyHeaderType for TargetTcpProxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesSetProxyHeaderRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetTcpProxiesSetProxyHeaderRequest;
use \OpenAPI\OpenAPI\Models\Shared\TargetTcpProxiesSetProxyHeaderRequestProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesSetProxyHeaderSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesSetProxyHeaderSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesSetProxyHeaderSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetTcpProxiesSetProxyHeaderRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetTcpProxiesSetProxyHeaderRequest = new TargetTcpProxiesSetProxyHeaderRequest();
    $request->targetTcpProxiesSetProxyHeaderRequest->proxyHeader = TargetTcpProxiesSetProxyHeaderRequestProxyHeaderEnum::PROXY_V1;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quasi';
    $request->fields = 'suscipit';
    $request->key = 'consectetur';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->project = 'dolorem';
    $request->quotaUser = 'distinctio';
    $request->requestId = 'error';
    $request->targetTcpProxy = 'consectetur';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'autem';
    $request->userIp = 'ut';

    $requestSecurity = new ComputeTargetTcpProxiesSetProxyHeaderSecurity();
    $requestSecurity->option1 = new ComputeTargetTcpProxiesSetProxyHeaderSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetTcpProxies->computeTargetTcpProxiesSetProxyHeader($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetTcpProxiesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetTcpProxiesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetTcpProxiesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'sint',
        'hic',
    ];
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vel';
    $request->fields = 'repellendus';
    $request->key = 'omnis';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->project = 'saepe';
    $request->quotaUser = 'dignissimos';
    $request->resource = 'rerum';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'similique';
    $request->userIp = 'esse';

    $requestSecurity = new ComputeTargetTcpProxiesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeTargetTcpProxiesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetTcpProxies->computeTargetTcpProxiesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
