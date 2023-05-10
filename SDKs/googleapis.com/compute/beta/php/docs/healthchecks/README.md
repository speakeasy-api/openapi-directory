# healthChecks

### Available Operations

* [computeHealthChecksAggregatedList](#computehealthchecksaggregatedlist) - Retrieves the list of all HealthCheck resources, regional and global, available to the specified project.
* [computeHealthChecksDelete](#computehealthchecksdelete) - Deletes the specified HealthCheck resource.
* [computeHealthChecksGet](#computehealthchecksget) - Returns the specified HealthCheck resource.
* [computeHealthChecksInsert](#computehealthchecksinsert) - Creates a HealthCheck resource in the specified project using the data included in the request.
* [computeHealthChecksList](#computehealthcheckslist) - Retrieves the list of HealthCheck resources available to the specified project.
* [computeHealthChecksPatch](#computehealthcheckspatch) - Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeHealthChecksTestIamPermissions](#computehealthcheckstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeHealthChecksUpdate](#computehealthchecksupdate) - Updates a HealthCheck resource in the specified project using the data included in the request.

## computeHealthChecksAggregatedList

Retrieves the list of all HealthCheck resources, regional and global, available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHealthChecksAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'atque';
    $request->filter = 'ut';
    $request->includeAllScopes = false;
    $request->key = 'asperiores';
    $request->maxResults = 444625;
    $request->oauthToken = 'deserunt';
    $request->orderBy = 'itaque';
    $request->pageToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'eos';
    $request->quotaUser = 'impedit';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'praesentium';
    $request->userIp = 'natus';

    $requestSecurity = new ComputeHealthChecksAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeHealthChecksAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->healthChecks->computeHealthChecksAggregatedList($request, $requestSecurity);

    if ($response->healthChecksAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHealthChecksDelete

Deletes the specified HealthCheck resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHealthChecksDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'eligendi';
    $request->healthCheck = 'repudiandae';
    $request->key = 'dicta';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'ullam';
    $request->quotaUser = 'iusto';
    $request->requestId = 'inventore';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'sed';
    $request->userIp = 'dolorem';

    $requestSecurity = new ComputeHealthChecksDeleteSecurity();
    $requestSecurity->option1 = new ComputeHealthChecksDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->healthChecks->computeHealthChecksDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHealthChecksGet

Returns the specified HealthCheck resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHealthChecksGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptate';
    $request->fields = 'voluptate';
    $request->healthCheck = 'pariatur';
    $request->key = 'minus';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'totam';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'at';
    $request->userIp = 'doloribus';

    $requestSecurity = new ComputeHealthChecksGetSecurity();
    $requestSecurity->option1 = new ComputeHealthChecksGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->healthChecks->computeHealthChecksGet($request, $requestSecurity);

    if ($response->healthCheck !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHealthChecksInsert

Creates a HealthCheck resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\GRPCHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\GRPCHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Http2HealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\Http2HealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Http2HealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHealthChecksInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->healthCheck = new HealthCheck();
    $request->healthCheck->checkIntervalSec = 463695;
    $request->healthCheck->creationTimestamp = 'exercitationem';
    $request->healthCheck->description = 'voluptates';
    $request->healthCheck->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck->grpcHealthCheck->grpcServiceName = 'sequi';
    $request->healthCheck->grpcHealthCheck->port = 336640;
    $request->healthCheck->grpcHealthCheck->portName = 'commodi';
    $request->healthCheck->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck->healthyThreshold = 522824;
    $request->healthCheck->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck->http2HealthCheck->host = 'aliquid';
    $request->healthCheck->http2HealthCheck->port = 44443;
    $request->healthCheck->http2HealthCheck->portName = 'perspiciatis';
    $request->healthCheck->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck->http2HealthCheck->requestPath = 'unde';
    $request->healthCheck->http2HealthCheck->response = 'cumque';
    $request->healthCheck->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck->httpHealthCheck->host = 'dolor';
    $request->healthCheck->httpHealthCheck->port = 833946;
    $request->healthCheck->httpHealthCheck->portName = 'temporibus';
    $request->healthCheck->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck->httpHealthCheck->requestPath = 'a';
    $request->healthCheck->httpHealthCheck->response = 'beatae';
    $request->healthCheck->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck->httpsHealthCheck->host = 'vitae';
    $request->healthCheck->httpsHealthCheck->port = 83530;
    $request->healthCheck->httpsHealthCheck->portName = 'facere';
    $request->healthCheck->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck->httpsHealthCheck->requestPath = 'dicta';
    $request->healthCheck->httpsHealthCheck->response = 'voluptatem';
    $request->healthCheck->id = 'odit';
    $request->healthCheck->kind = 'aliquid';
    $request->healthCheck->logConfig = new HealthCheckLogConfig();
    $request->healthCheck->logConfig->enable = false;
    $request->healthCheck->name = 'Miss Lloyd Funk';
    $request->healthCheck->region = 'facere';
    $request->healthCheck->selfLink = 'vitae';
    $request->healthCheck->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck->sslHealthCheck->port = 607181;
    $request->healthCheck->sslHealthCheck->portName = 'alias';
    $request->healthCheck->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck->sslHealthCheck->request = 'expedita';
    $request->healthCheck->sslHealthCheck->response = 'quia';
    $request->healthCheck->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck->tcpHealthCheck->port = 112751;
    $request->healthCheck->tcpHealthCheck->portName = 'odio';
    $request->healthCheck->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck->tcpHealthCheck->request = 'distinctio';
    $request->healthCheck->tcpHealthCheck->response = 'placeat';
    $request->healthCheck->timeoutSec = 801958;
    $request->healthCheck->type = HealthCheckTypeEnum::SSL;
    $request->healthCheck->unhealthyThreshold = 26321;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'distinctio';
    $request->fields = 'assumenda';
    $request->key = 'illum';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'laudantium';
    $request->requestId = 'tempora';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'doloremque';
    $request->userIp = 'corrupti';

    $requestSecurity = new ComputeHealthChecksInsertSecurity();
    $requestSecurity->option1 = new ComputeHealthChecksInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->healthChecks->computeHealthChecksInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHealthChecksList

Retrieves the list of HealthCheck resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHealthChecksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->fields = 'amet';
    $request->filter = 'natus';
    $request->key = 'ab';
    $request->maxResults = 887835;
    $request->oauthToken = 'eum';
    $request->orderBy = 'rerum';
    $request->pageToken = 'placeat';
    $request->prettyPrint = false;
    $request->project = 'ab';
    $request->quotaUser = 'ad';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'porro';
    $request->userIp = 'labore';

    $requestSecurity = new ComputeHealthChecksListSecurity();
    $requestSecurity->option1 = new ComputeHealthChecksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->healthChecks->computeHealthChecksList($request, $requestSecurity);

    if ($response->healthCheckList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHealthChecksPatch

Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\GRPCHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\GRPCHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Http2HealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\Http2HealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Http2HealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHealthChecksPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->healthCheck1 = new HealthCheck();
    $request->healthCheck1->checkIntervalSec = 285175;
    $request->healthCheck1->creationTimestamp = 'earum';
    $request->healthCheck1->description = 'ullam';
    $request->healthCheck1->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck1->grpcHealthCheck->grpcServiceName = 'numquam';
    $request->healthCheck1->grpcHealthCheck->port = 314733;
    $request->healthCheck1->grpcHealthCheck->portName = 'cupiditate';
    $request->healthCheck1->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->healthyThreshold = 929443;
    $request->healthCheck1->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck1->http2HealthCheck->host = 'fuga';
    $request->healthCheck1->http2HealthCheck->port = 234845;
    $request->healthCheck1->http2HealthCheck->portName = 'modi';
    $request->healthCheck1->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->http2HealthCheck->requestPath = 'suscipit';
    $request->healthCheck1->http2HealthCheck->response = 'ipsa';
    $request->healthCheck1->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck1->httpHealthCheck->host = 'eveniet';
    $request->healthCheck1->httpHealthCheck->port = 575753;
    $request->healthCheck1->httpHealthCheck->portName = 'nobis';
    $request->healthCheck1->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->httpHealthCheck->requestPath = 'consequatur';
    $request->healthCheck1->httpHealthCheck->response = 'impedit';
    $request->healthCheck1->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck1->httpsHealthCheck->host = 'recusandae';
    $request->healthCheck1->httpsHealthCheck->port = 451831;
    $request->healthCheck1->httpsHealthCheck->portName = 'deleniti';
    $request->healthCheck1->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->httpsHealthCheck->requestPath = 'expedita';
    $request->healthCheck1->httpsHealthCheck->response = 'quibusdam';
    $request->healthCheck1->id = 'quos';
    $request->healthCheck1->kind = 'maiores';
    $request->healthCheck1->logConfig = new HealthCheckLogConfig();
    $request->healthCheck1->logConfig->enable = false;
    $request->healthCheck1->name = 'Miss Harvey Nicolas Sr.';
    $request->healthCheck1->region = 'suscipit';
    $request->healthCheck1->selfLink = 'eligendi';
    $request->healthCheck1->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck1->sslHealthCheck->port = 885523;
    $request->healthCheck1->sslHealthCheck->portName = 'dignissimos';
    $request->healthCheck1->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->sslHealthCheck->request = 'possimus';
    $request->healthCheck1->sslHealthCheck->response = 'quaerat';
    $request->healthCheck1->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck1->tcpHealthCheck->port = 14976;
    $request->healthCheck1->tcpHealthCheck->portName = 'natus';
    $request->healthCheck1->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->tcpHealthCheck->request = 'deserunt';
    $request->healthCheck1->tcpHealthCheck->response = 'ratione';
    $request->healthCheck1->timeoutSec = 60379;
    $request->healthCheck1->type = HealthCheckTypeEnum::TCP;
    $request->healthCheck1->unhealthyThreshold = 614763;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ducimus';
    $request->fields = 'consequuntur';
    $request->healthCheckPathParameter = 'ipsam';
    $request->key = 'libero';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->project = 'omnis';
    $request->quotaUser = 'dicta';
    $request->requestId = 'qui';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'amet';

    $requestSecurity = new ComputeHealthChecksPatchSecurity();
    $requestSecurity->option1 = new ComputeHealthChecksPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->healthChecks->computeHealthChecksPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHealthChecksTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHealthChecksTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'voluptatum',
        'velit',
        'hic',
        'ullam',
    ];
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'distinctio';
    $request->fields = 'iusto';
    $request->key = 'dignissimos';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->project = 'occaecati';
    $request->quotaUser = 'assumenda';
    $request->resource = 'sunt';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'vero';
    $request->userIp = 'deleniti';

    $requestSecurity = new ComputeHealthChecksTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeHealthChecksTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->healthChecks->computeHealthChecksTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeHealthChecksUpdate

Updates a HealthCheck resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\GRPCHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\GRPCHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Http2HealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\Http2HealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Http2HealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHealthChecksUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->healthCheck1 = new HealthCheck();
    $request->healthCheck1->checkIntervalSec = 98805;
    $request->healthCheck1->creationTimestamp = 'repellat';
    $request->healthCheck1->description = 'atque';
    $request->healthCheck1->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck1->grpcHealthCheck->grpcServiceName = 'magnam';
    $request->healthCheck1->grpcHealthCheck->port = 594379;
    $request->healthCheck1->grpcHealthCheck->portName = 'amet';
    $request->healthCheck1->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->healthyThreshold = 125161;
    $request->healthCheck1->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck1->http2HealthCheck->host = 'nemo';
    $request->healthCheck1->http2HealthCheck->port = 964210;
    $request->healthCheck1->http2HealthCheck->portName = 'illum';
    $request->healthCheck1->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->http2HealthCheck->requestPath = 'magni';
    $request->healthCheck1->http2HealthCheck->response = 'cumque';
    $request->healthCheck1->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck1->httpHealthCheck->host = 'quos';
    $request->healthCheck1->httpHealthCheck->port = 448482;
    $request->healthCheck1->httpHealthCheck->portName = 'commodi';
    $request->healthCheck1->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->httpHealthCheck->requestPath = 'minus';
    $request->healthCheck1->httpHealthCheck->response = 'consequuntur';
    $request->healthCheck1->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck1->httpsHealthCheck->host = 'possimus';
    $request->healthCheck1->httpsHealthCheck->port = 963470;
    $request->healthCheck1->httpsHealthCheck->portName = 'harum';
    $request->healthCheck1->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->httpsHealthCheck->requestPath = 'hic';
    $request->healthCheck1->httpsHealthCheck->response = 'quo';
    $request->healthCheck1->id = 'illo';
    $request->healthCheck1->kind = 'nobis';
    $request->healthCheck1->logConfig = new HealthCheckLogConfig();
    $request->healthCheck1->logConfig->enable = false;
    $request->healthCheck1->name = 'Sue Christiansen DVM';
    $request->healthCheck1->region = 'quos';
    $request->healthCheck1->selfLink = 'numquam';
    $request->healthCheck1->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck1->sslHealthCheck->port = 113894;
    $request->healthCheck1->sslHealthCheck->portName = 'maiores';
    $request->healthCheck1->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->sslHealthCheck->request = 'rerum';
    $request->healthCheck1->sslHealthCheck->response = 'assumenda';
    $request->healthCheck1->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck1->tcpHealthCheck->port = 176333;
    $request->healthCheck1->tcpHealthCheck->portName = 'dolorem';
    $request->healthCheck1->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->tcpHealthCheck->request = 'nam';
    $request->healthCheck1->tcpHealthCheck->response = 'ab';
    $request->healthCheck1->timeoutSec = 297970;
    $request->healthCheck1->type = HealthCheckTypeEnum::TCP;
    $request->healthCheck1->unhealthyThreshold = 709234;
    $request->accessToken = 'autem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'recusandae';
    $request->fields = 'nostrum';
    $request->healthCheckPathParameter = 'officia';
    $request->key = 'voluptas';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'excepturi';
    $request->requestId = 'natus';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'necessitatibus';
    $request->userIp = 'aspernatur';

    $requestSecurity = new ComputeHealthChecksUpdateSecurity();
    $requestSecurity->option1 = new ComputeHealthChecksUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->healthChecks->computeHealthChecksUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
