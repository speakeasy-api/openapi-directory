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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'rerum';
    $request->fields = 'doloribus';
    $request->filter = 'cum';
    $request->includeAllScopes = false;
    $request->key = 'consectetur';
    $request->maxResults = 41255;
    $request->oauthToken = 'necessitatibus';
    $request->orderBy = 'possimus';
    $request->pageToken = 'fuga';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'sapiente';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'eveniet';
    $request->userIp = 'veniam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'delectus';
    $request->key = 'fugit';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->project = 'dolorum';
    $request->quotaUser = 'voluptate';
    $request->requestId = 'ducimus';
    $request->targetTcpProxy = 'porro';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'iusto';
    $request->userIp = 'deserunt';

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
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'suscipit';
    $request->fields = 'neque';
    $request->key = 'eveniet';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->project = 'pariatur';
    $request->quotaUser = 'officiis';
    $request->targetTcpProxy = 'alias';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'aperiam';
    $request->userIp = 'asperiores';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetTcpProxy = new TargetTcpProxy();
    $request->targetTcpProxy->creationTimestamp = 'deleniti';
    $request->targetTcpProxy->description = 'consequatur';
    $request->targetTcpProxy->id = 'impedit';
    $request->targetTcpProxy->kind = 'aperiam';
    $request->targetTcpProxy->name = 'Yolanda Ferry';
    $request->targetTcpProxy->proxyBind = false;
    $request->targetTcpProxy->proxyHeader = TargetTcpProxyProxyHeaderEnum::NONE;
    $request->targetTcpProxy->region = 'sequi';
    $request->targetTcpProxy->selfLink = 'illum';
    $request->targetTcpProxy->service = 'ut';
    $request->accessToken = 'quae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'error';
    $request->key = 'exercitationem';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->project = 'minus';
    $request->quotaUser = 'ad';
    $request->requestId = 'maxime';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'inventore';
    $request->userIp = 'in';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'provident';
    $request->filter = 'nihil';
    $request->key = 'maiores';
    $request->maxResults = 235488;
    $request->oauthToken = 'odio';
    $request->orderBy = 'molestiae';
    $request->pageToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'temporibus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'quo';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetTcpProxiesSetBackendServiceRequest = new TargetTcpProxiesSetBackendServiceRequest();
    $request->targetTcpProxiesSetBackendServiceRequest->service = 'numquam';
    $request->accessToken = 'quos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'alias';
    $request->key = 'fugit';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->project = 'minima';
    $request->quotaUser = 'fugiat';
    $request->requestId = 'sint';
    $request->targetTcpProxy = 'consequuntur';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'labore';
    $request->userIp = 'nobis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetTcpProxiesSetProxyHeaderRequest = new TargetTcpProxiesSetProxyHeaderRequest();
    $request->targetTcpProxiesSetProxyHeaderRequest->proxyHeader = TargetTcpProxiesSetProxyHeaderRequestProxyHeaderEnum::PROXY_V1;
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corrupti';
    $request->fields = 'similique';
    $request->key = 'alias';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'impedit';
    $request->quotaUser = 'quae';
    $request->requestId = 'necessitatibus';
    $request->targetTcpProxy = 'perferendis';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'illum';
    $request->userIp = 'aspernatur';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'eveniet',
        'libero',
        'aut',
        'minus',
    ];
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'aperiam';
    $request->key = 'itaque';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'necessitatibus';
    $request->quotaUser = 'quisquam';
    $request->resource = 'delectus';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'inventore';
    $request->userIp = 'quos';

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
