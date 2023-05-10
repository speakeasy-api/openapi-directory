# regionHealthChecks

### Available Operations

* [computeRegionHealthChecksDelete](#computeregionhealthchecksdelete) - Deletes the specified HealthCheck resource.
* [computeRegionHealthChecksGet](#computeregionhealthchecksget) - Returns the specified HealthCheck resource.
* [computeRegionHealthChecksInsert](#computeregionhealthchecksinsert) - Creates a HealthCheck resource in the specified project using the data included in the request.
* [computeRegionHealthChecksList](#computeregionhealthcheckslist) - Retrieves the list of HealthCheck resources available to the specified project.
* [computeRegionHealthChecksPatch](#computeregionhealthcheckspatch) - Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeRegionHealthChecksTestIamPermissions](#computeregionhealthcheckstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionHealthChecksUpdate](#computeregionhealthchecksupdate) - Updates a HealthCheck resource in the specified project using the data included in the request.

## computeRegionHealthChecksDelete

Deletes the specified HealthCheck resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthChecksDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'at';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consectetur';
    $request->fields = 'eius';
    $request->healthCheck = 'dicta';
    $request->key = 'dicta';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'perspiciatis';
    $request->quotaUser = 'rem';
    $request->region = 'recusandae';
    $request->requestId = 'quam';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'praesentium';
    $request->userIp = 'nihil';

    $requestSecurity = new ComputeRegionHealthChecksDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionHealthChecksDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionHealthChecks->computeRegionHealthChecksDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionHealthChecksGet

Returns the specified HealthCheck resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthChecksGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eveniet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facilis';
    $request->fields = 'eveniet';
    $request->healthCheck = 'voluptatum';
    $request->key = 'rerum';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->project = 'saepe';
    $request->quotaUser = 'tempore';
    $request->region = 'mollitia';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'odio';

    $requestSecurity = new ComputeRegionHealthChecksGetSecurity();
    $requestSecurity->option1 = new ComputeRegionHealthChecksGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionHealthChecks->computeRegionHealthChecksGet($request, $requestSecurity);

    if ($response->healthCheck !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionHealthChecksInsert

Creates a HealthCheck resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksInsertRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthChecksInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->healthCheck = new HealthCheck();
    $request->healthCheck->checkIntervalSec = 281476;
    $request->healthCheck->creationTimestamp = 'voluptas';
    $request->healthCheck->description = 'neque';
    $request->healthCheck->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck->grpcHealthCheck->grpcServiceName = 'eum';
    $request->healthCheck->grpcHealthCheck->port = 918614;
    $request->healthCheck->grpcHealthCheck->portName = 'excepturi';
    $request->healthCheck->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck->healthyThreshold = 244586;
    $request->healthCheck->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck->http2HealthCheck->host = 'quis';
    $request->healthCheck->http2HealthCheck->port = 77001;
    $request->healthCheck->http2HealthCheck->portName = 'harum';
    $request->healthCheck->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck->http2HealthCheck->requestPath = 'odio';
    $request->healthCheck->http2HealthCheck->response = 'eum';
    $request->healthCheck->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck->httpHealthCheck->host = 'adipisci';
    $request->healthCheck->httpHealthCheck->port = 104232;
    $request->healthCheck->httpHealthCheck->portName = 'iure';
    $request->healthCheck->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck->httpHealthCheck->requestPath = 'quidem';
    $request->healthCheck->httpHealthCheck->response = 'molestiae';
    $request->healthCheck->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck->httpsHealthCheck->host = 'odio';
    $request->healthCheck->httpsHealthCheck->port = 635370;
    $request->healthCheck->httpsHealthCheck->portName = 'quis';
    $request->healthCheck->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck->httpsHealthCheck->requestPath = 'dolorem';
    $request->healthCheck->httpsHealthCheck->response = 'eum';
    $request->healthCheck->id = 'ipsam';
    $request->healthCheck->kind = 'fuga';
    $request->healthCheck->logConfig = new HealthCheckLogConfig();
    $request->healthCheck->logConfig->enable = false;
    $request->healthCheck->name = 'Mrs. Lindsey Will';
    $request->healthCheck->region = 'voluptate';
    $request->healthCheck->selfLink = 'ab';
    $request->healthCheck->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck->sslHealthCheck->port = 996197;
    $request->healthCheck->sslHealthCheck->portName = 'accusantium';
    $request->healthCheck->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck->sslHealthCheck->request = 'alias';
    $request->healthCheck->sslHealthCheck->response = 'illum';
    $request->healthCheck->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck->tcpHealthCheck->port = 207887;
    $request->healthCheck->tcpHealthCheck->portName = 'commodi';
    $request->healthCheck->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck->tcpHealthCheck->request = 'debitis';
    $request->healthCheck->tcpHealthCheck->response = 'pariatur';
    $request->healthCheck->timeoutSec = 500181;
    $request->healthCheck->type = HealthCheckTypeEnum::TCP;
    $request->healthCheck->unhealthyThreshold = 794094;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'a';
    $request->key = 'nobis';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->project = 'ullam';
    $request->quotaUser = 'velit';
    $request->region = 'officiis';
    $request->requestId = 'perspiciatis';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'quas';
    $request->userIp = 'sint';

    $requestSecurity = new ComputeRegionHealthChecksInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionHealthChecksInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionHealthChecks->computeRegionHealthChecksInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionHealthChecksList

Retrieves the list of HealthCheck resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthChecksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'inventore';
    $request->fields = 'asperiores';
    $request->filter = 'nulla';
    $request->key = 'soluta';
    $request->maxResults = 281711;
    $request->oauthToken = 'at';
    $request->orderBy = 'voluptas';
    $request->pageToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->project = 'molestiae';
    $request->quotaUser = 'tempore';
    $request->region = 'facere';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'at';
    $request->uploadProtocol = 'perspiciatis';
    $request->userIp = 'quisquam';

    $requestSecurity = new ComputeRegionHealthChecksListSecurity();
    $requestSecurity->option1 = new ComputeRegionHealthChecksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionHealthChecks->computeRegionHealthChecksList($request, $requestSecurity);

    if ($response->healthCheckList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionHealthChecksPatch

Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksPatchRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthChecksPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->healthCheck1 = new HealthCheck();
    $request->healthCheck1->checkIntervalSec = 546689;
    $request->healthCheck1->creationTimestamp = 'corporis';
    $request->healthCheck1->description = 'repudiandae';
    $request->healthCheck1->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck1->grpcHealthCheck->grpcServiceName = 'incidunt';
    $request->healthCheck1->grpcHealthCheck->port = 204310;
    $request->healthCheck1->grpcHealthCheck->portName = 'iusto';
    $request->healthCheck1->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->healthyThreshold = 255733;
    $request->healthCheck1->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck1->http2HealthCheck->host = 'officia';
    $request->healthCheck1->http2HealthCheck->port = 339511;
    $request->healthCheck1->http2HealthCheck->portName = 'pariatur';
    $request->healthCheck1->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->http2HealthCheck->requestPath = 'quibusdam';
    $request->healthCheck1->http2HealthCheck->response = 'cupiditate';
    $request->healthCheck1->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck1->httpHealthCheck->host = 'itaque';
    $request->healthCheck1->httpHealthCheck->port = 859600;
    $request->healthCheck1->httpHealthCheck->portName = 'repellendus';
    $request->healthCheck1->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->httpHealthCheck->requestPath = 'nostrum';
    $request->healthCheck1->httpHealthCheck->response = 'expedita';
    $request->healthCheck1->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck1->httpsHealthCheck->host = 'vero';
    $request->healthCheck1->httpsHealthCheck->port = 335208;
    $request->healthCheck1->httpsHealthCheck->portName = 'earum';
    $request->healthCheck1->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->httpsHealthCheck->requestPath = 'hic';
    $request->healthCheck1->httpsHealthCheck->response = 'accusamus';
    $request->healthCheck1->id = 'ullam';
    $request->healthCheck1->kind = 'minima';
    $request->healthCheck1->logConfig = new HealthCheckLogConfig();
    $request->healthCheck1->logConfig->enable = false;
    $request->healthCheck1->name = 'Kristina Kozey';
    $request->healthCheck1->region = 'laboriosam';
    $request->healthCheck1->selfLink = 'explicabo';
    $request->healthCheck1->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck1->sslHealthCheck->port = 511098;
    $request->healthCheck1->sslHealthCheck->portName = 'sunt';
    $request->healthCheck1->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->sslHealthCheck->request = 'modi';
    $request->healthCheck1->sslHealthCheck->response = 'eveniet';
    $request->healthCheck1->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck1->tcpHealthCheck->port = 210926;
    $request->healthCheck1->tcpHealthCheck->portName = 'laborum';
    $request->healthCheck1->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->tcpHealthCheck->request = 'consectetur';
    $request->healthCheck1->tcpHealthCheck->response = 'unde';
    $request->healthCheck1->timeoutSec = 262936;
    $request->healthCheck1->type = HealthCheckTypeEnum::INVALID;
    $request->healthCheck1->unhealthyThreshold = 429332;
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->fields = 'deleniti';
    $request->healthCheckPathParameter = 'sit';
    $request->key = 'illum';
    $request->oauthToken = 'ratione';
    $request->prettyPrint = false;
    $request->project = 'alias';
    $request->quotaUser = 'delectus';
    $request->region = 'hic';
    $request->requestId = 'ducimus';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'illo';
    $request->userIp = 'aliquid';

    $requestSecurity = new ComputeRegionHealthChecksPatchSecurity();
    $requestSecurity->option1 = new ComputeRegionHealthChecksPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionHealthChecks->computeRegionHealthChecksPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionHealthChecksTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthChecksTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'alias',
        'deserunt',
        'occaecati',
        'dicta',
    ];
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->fields = 'illum';
    $request->key = 'iste';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->project = 'minima';
    $request->quotaUser = 'nemo';
    $request->region = 'adipisci';
    $request->resource = 'tempore';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'excepturi';
    $request->userIp = 'necessitatibus';

    $requestSecurity = new ComputeRegionHealthChecksTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionHealthChecksTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionHealthChecks->computeRegionHealthChecksTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionHealthChecksUpdate

Updates a HealthCheck resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksUpdateRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthChecksUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->healthCheck1 = new HealthCheck();
    $request->healthCheck1->checkIntervalSec = 9751;
    $request->healthCheck1->creationTimestamp = 'doloremque';
    $request->healthCheck1->description = 'excepturi';
    $request->healthCheck1->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck1->grpcHealthCheck->grpcServiceName = 'quod';
    $request->healthCheck1->grpcHealthCheck->port = 428511;
    $request->healthCheck1->grpcHealthCheck->portName = 'ea';
    $request->healthCheck1->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->healthyThreshold = 131130;
    $request->healthCheck1->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck1->http2HealthCheck->host = 'temporibus';
    $request->healthCheck1->http2HealthCheck->port = 893005;
    $request->healthCheck1->http2HealthCheck->portName = 'in';
    $request->healthCheck1->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->http2HealthCheck->requestPath = 'voluptas';
    $request->healthCheck1->http2HealthCheck->response = 'voluptas';
    $request->healthCheck1->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck1->httpHealthCheck->host = 'aspernatur';
    $request->healthCheck1->httpHealthCheck->port = 150551;
    $request->healthCheck1->httpHealthCheck->portName = 'eaque';
    $request->healthCheck1->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->httpHealthCheck->requestPath = 'voluptas';
    $request->healthCheck1->httpHealthCheck->response = 'error';
    $request->healthCheck1->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck1->httpsHealthCheck->host = 'error';
    $request->healthCheck1->httpsHealthCheck->port = 741747;
    $request->healthCheck1->httpsHealthCheck->portName = 'eius';
    $request->healthCheck1->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->httpsHealthCheck->requestPath = 'in';
    $request->healthCheck1->httpsHealthCheck->response = 'harum';
    $request->healthCheck1->id = 'vitae';
    $request->healthCheck1->kind = 'fuga';
    $request->healthCheck1->logConfig = new HealthCheckLogConfig();
    $request->healthCheck1->logConfig->enable = false;
    $request->healthCheck1->name = 'Ms. Opal Mohr';
    $request->healthCheck1->region = 'dolore';
    $request->healthCheck1->selfLink = 'repudiandae';
    $request->healthCheck1->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck1->sslHealthCheck->port = 235758;
    $request->healthCheck1->sslHealthCheck->portName = 'perferendis';
    $request->healthCheck1->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->sslHealthCheck->request = 'quae';
    $request->healthCheck1->sslHealthCheck->response = 'dolorum';
    $request->healthCheck1->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck1->tcpHealthCheck->port = 686361;
    $request->healthCheck1->tcpHealthCheck->portName = 'sequi';
    $request->healthCheck1->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->tcpHealthCheck->request = 'aliquam';
    $request->healthCheck1->tcpHealthCheck->response = 'error';
    $request->healthCheck1->timeoutSec = 536908;
    $request->healthCheck1->type = HealthCheckTypeEnum::HTTP;
    $request->healthCheck1->unhealthyThreshold = 617160;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'quidem';
    $request->healthCheckPathParameter = 'dolorum';
    $request->key = 'quidem';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->project = 'reprehenderit';
    $request->quotaUser = 'nam';
    $request->region = 'occaecati';
    $request->requestId = 'quasi';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'a';
    $request->userIp = 'aut';

    $requestSecurity = new ComputeRegionHealthChecksUpdateSecurity();
    $requestSecurity->option1 = new ComputeRegionHealthChecksUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionHealthChecks->computeRegionHealthChecksUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
