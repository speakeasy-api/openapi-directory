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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quae';
    $request->fields = 'doloribus';
    $request->healthCheck = 'ipsum';
    $request->key = 'dolore';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'rerum';
    $request->region = 'dolor';
    $request->requestId = 'ex';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'voluptas';
    $request->userIp = 'reprehenderit';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'corporis';
    $request->healthCheck = 'inventore';
    $request->key = 'provident';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'velit';
    $request->region = 'quam';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'sint';
    $request->userIp = 'voluptatem';

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
use \OpenAPI\OpenAPI\Models\Shared\Http2HealthCheckWeightReportModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheckWeightReportModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheckWeightReportModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UDPHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthChecksInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->healthCheck = new HealthCheck();
    $request->healthCheck->checkIntervalSec = 555115;
    $request->healthCheck->creationTimestamp = 'aliquam';
    $request->healthCheck->description = 'deleniti';
    $request->healthCheck->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck->grpcHealthCheck->grpcServiceName = 'quos';
    $request->healthCheck->grpcHealthCheck->port = 184070;
    $request->healthCheck->grpcHealthCheck->portName = 'ex';
    $request->healthCheck->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck->healthyThreshold = 715995;
    $request->healthCheck->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck->http2HealthCheck->host = 'aperiam';
    $request->healthCheck->http2HealthCheck->port = 231322;
    $request->healthCheck->http2HealthCheck->portName = 'porro';
    $request->healthCheck->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck->http2HealthCheck->requestPath = 'possimus';
    $request->healthCheck->http2HealthCheck->response = 'consequuntur';
    $request->healthCheck->http2HealthCheck->weightReportMode = Http2HealthCheckWeightReportModeEnum::DISABLE;
    $request->healthCheck->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck->httpHealthCheck->host = 'enim';
    $request->healthCheck->httpHealthCheck->port = 894928;
    $request->healthCheck->httpHealthCheck->portName = 'dolore';
    $request->healthCheck->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck->httpHealthCheck->requestPath = 'iusto';
    $request->healthCheck->httpHealthCheck->response = 'architecto';
    $request->healthCheck->httpHealthCheck->weightReportMode = HTTPHealthCheckWeightReportModeEnum::DRY_RUN;
    $request->healthCheck->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck->httpsHealthCheck->host = 'blanditiis';
    $request->healthCheck->httpsHealthCheck->port = 541834;
    $request->healthCheck->httpsHealthCheck->portName = 'necessitatibus';
    $request->healthCheck->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck->httpsHealthCheck->requestPath = 'qui';
    $request->healthCheck->httpsHealthCheck->response = 'laborum';
    $request->healthCheck->httpsHealthCheck->weightReportMode = HTTPSHealthCheckWeightReportModeEnum::DISABLE;
    $request->healthCheck->id = 'repellendus';
    $request->healthCheck->kind = 'eius';
    $request->healthCheck->logConfig = new HealthCheckLogConfig();
    $request->healthCheck->logConfig->enable = false;
    $request->healthCheck->name = 'Mrs. Jerald Hahn';
    $request->healthCheck->region = 'id';
    $request->healthCheck->selfLink = 'impedit';
    $request->healthCheck->selfLinkWithId = 'magni';
    $request->healthCheck->sourceRegions = [
        'doloremque',
        'sapiente',
        'sit',
        'repellat',
    ];
    $request->healthCheck->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck->sslHealthCheck->port = 364424;
    $request->healthCheck->sslHealthCheck->portName = 'quos';
    $request->healthCheck->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck->sslHealthCheck->request = 'libero';
    $request->healthCheck->sslHealthCheck->response = 'totam';
    $request->healthCheck->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck->tcpHealthCheck->port = 446283;
    $request->healthCheck->tcpHealthCheck->portName = 'tempore';
    $request->healthCheck->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck->tcpHealthCheck->request = 'eaque';
    $request->healthCheck->tcpHealthCheck->response = 'tempora';
    $request->healthCheck->timeoutSec = 14298;
    $request->healthCheck->type = HealthCheckTypeEnum::TCP;
    $request->healthCheck->udpHealthCheck = new UDPHealthCheck();
    $request->healthCheck->udpHealthCheck->port = 12119;
    $request->healthCheck->udpHealthCheck->portName = 'assumenda';
    $request->healthCheck->udpHealthCheck->request = 'excepturi';
    $request->healthCheck->udpHealthCheck->response = 'quos';
    $request->healthCheck->unhealthyThreshold = 900756;
    $request->accessToken = 'unde';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laudantium';
    $request->fields = 'eos';
    $request->key = 'porro';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->project = 'officiis';
    $request->quotaUser = 'adipisci';
    $request->region = 'alias';
    $request->requestId = 'nisi';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'corporis';
    $request->userIp = 'nostrum';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nemo';
    $request->fields = 'quisquam';
    $request->filter = 'quibusdam';
    $request->key = 'voluptates';
    $request->maxResults = 736793;
    $request->oauthToken = 'consequatur';
    $request->orderBy = 'eos';
    $request->pageToken = 'totam';
    $request->prettyPrint = false;
    $request->project = 'ea';
    $request->quotaUser = 'pariatur';
    $request->region = 'alias';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'maxime';
    $request->userIp = 'aliquam';

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
use \OpenAPI\OpenAPI\Models\Shared\Http2HealthCheckWeightReportModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheckWeightReportModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheckWeightReportModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UDPHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionHealthChecksPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionHealthChecksPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->healthCheck1 = new HealthCheck();
    $request->healthCheck1->checkIntervalSec = 688930;
    $request->healthCheck1->creationTimestamp = 'veritatis';
    $request->healthCheck1->description = 'quas';
    $request->healthCheck1->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck1->grpcHealthCheck->grpcServiceName = 'id';
    $request->healthCheck1->grpcHealthCheck->port = 709741;
    $request->healthCheck1->grpcHealthCheck->portName = 'ipsum';
    $request->healthCheck1->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->healthyThreshold = 549008;
    $request->healthCheck1->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck1->http2HealthCheck->host = 'sapiente';
    $request->healthCheck1->http2HealthCheck->port = 161205;
    $request->healthCheck1->http2HealthCheck->portName = 'asperiores';
    $request->healthCheck1->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->http2HealthCheck->requestPath = 'maiores';
    $request->healthCheck1->http2HealthCheck->response = 'laudantium';
    $request->healthCheck1->http2HealthCheck->weightReportMode = Http2HealthCheckWeightReportModeEnum::DISABLE;
    $request->healthCheck1->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck1->httpHealthCheck->host = 'assumenda';
    $request->healthCheck1->httpHealthCheck->port = 841413;
    $request->healthCheck1->httpHealthCheck->portName = 'hic';
    $request->healthCheck1->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->httpHealthCheck->requestPath = 'eaque';
    $request->healthCheck1->httpHealthCheck->response = 'deleniti';
    $request->healthCheck1->httpHealthCheck->weightReportMode = HTTPHealthCheckWeightReportModeEnum::DRY_RUN;
    $request->healthCheck1->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck1->httpsHealthCheck->host = 'repellat';
    $request->healthCheck1->httpsHealthCheck->port = 481923;
    $request->healthCheck1->httpsHealthCheck->portName = 'labore';
    $request->healthCheck1->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->httpsHealthCheck->requestPath = 'quis';
    $request->healthCheck1->httpsHealthCheck->response = 'quaerat';
    $request->healthCheck1->httpsHealthCheck->weightReportMode = HTTPSHealthCheckWeightReportModeEnum::ENABLE;
    $request->healthCheck1->id = 'sint';
    $request->healthCheck1->kind = 'aspernatur';
    $request->healthCheck1->logConfig = new HealthCheckLogConfig();
    $request->healthCheck1->logConfig->enable = false;
    $request->healthCheck1->name = 'Vanessa Thiel';
    $request->healthCheck1->region = 'qui';
    $request->healthCheck1->selfLink = 'aliquid';
    $request->healthCheck1->selfLinkWithId = 'sequi';
    $request->healthCheck1->sourceRegions = [
        'velit',
    ];
    $request->healthCheck1->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck1->sslHealthCheck->port = 729384;
    $request->healthCheck1->sslHealthCheck->portName = 'soluta';
    $request->healthCheck1->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->sslHealthCheck->request = 'quo';
    $request->healthCheck1->sslHealthCheck->response = 'explicabo';
    $request->healthCheck1->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck1->tcpHealthCheck->port = 778716;
    $request->healthCheck1->tcpHealthCheck->portName = 'corrupti';
    $request->healthCheck1->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->tcpHealthCheck->request = 'reprehenderit';
    $request->healthCheck1->tcpHealthCheck->response = 'eaque';
    $request->healthCheck1->timeoutSec = 80875;
    $request->healthCheck1->type = HealthCheckTypeEnum::GRPC;
    $request->healthCheck1->udpHealthCheck = new UDPHealthCheck();
    $request->healthCheck1->udpHealthCheck->port = 603749;
    $request->healthCheck1->udpHealthCheck->portName = 'eum';
    $request->healthCheck1->udpHealthCheck->request = 'quidem';
    $request->healthCheck1->udpHealthCheck->response = 'vel';
    $request->healthCheck1->unhealthyThreshold = 419001;
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laboriosam';
    $request->fields = 'necessitatibus';
    $request->healthCheckPathParameter = 'amet';
    $request->key = 'recusandae';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'pariatur';
    $request->quotaUser = 'excepturi';
    $request->region = 'fugiat';
    $request->requestId = 'ipsum';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'voluptas';
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
        'non',
    ];
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->fields = 'sunt';
    $request->key = 'id';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->project = 'ab';
    $request->quotaUser = 'nulla';
    $request->region = 'ipsam';
    $request->resource = 'at';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'quia';
    $request->userIp = 'modi';

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
use \OpenAPI\OpenAPI\Models\Shared\Http2HealthCheckWeightReportModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPHealthCheckWeightReportModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HTTPSHealthCheckWeightReportModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\SSLHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheckPortSpecificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\TCPHealthCheckProxyHeaderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UDPHealthCheck;
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
    $request->healthCheck1->checkIntervalSec = 827923;
    $request->healthCheck1->creationTimestamp = 'debitis';
    $request->healthCheck1->description = 'perspiciatis';
    $request->healthCheck1->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck1->grpcHealthCheck->grpcServiceName = 'libero';
    $request->healthCheck1->grpcHealthCheck->port = 213487;
    $request->healthCheck1->grpcHealthCheck->portName = 'pariatur';
    $request->healthCheck1->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->healthyThreshold = 386893;
    $request->healthCheck1->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck1->http2HealthCheck->host = 'quasi';
    $request->healthCheck1->http2HealthCheck->port = 499013;
    $request->healthCheck1->http2HealthCheck->portName = 'eaque';
    $request->healthCheck1->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->http2HealthCheck->requestPath = 'eum';
    $request->healthCheck1->http2HealthCheck->response = 'quos';
    $request->healthCheck1->http2HealthCheck->weightReportMode = Http2HealthCheckWeightReportModeEnum::ENABLE;
    $request->healthCheck1->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck1->httpHealthCheck->host = 'perspiciatis';
    $request->healthCheck1->httpHealthCheck->port = 424591;
    $request->healthCheck1->httpHealthCheck->portName = 'nobis';
    $request->healthCheck1->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->httpHealthCheck->requestPath = 'iste';
    $request->healthCheck1->httpHealthCheck->response = 'totam';
    $request->healthCheck1->httpHealthCheck->weightReportMode = HTTPHealthCheckWeightReportModeEnum::DRY_RUN;
    $request->healthCheck1->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck1->httpsHealthCheck->host = 'voluptatum';
    $request->healthCheck1->httpsHealthCheck->port = 549022;
    $request->healthCheck1->httpsHealthCheck->portName = 'sequi';
    $request->healthCheck1->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->httpsHealthCheck->requestPath = 'vero';
    $request->healthCheck1->httpsHealthCheck->response = 'tempore';
    $request->healthCheck1->httpsHealthCheck->weightReportMode = HTTPSHealthCheckWeightReportModeEnum::ENABLE;
    $request->healthCheck1->id = 'architecto';
    $request->healthCheck1->kind = 'expedita';
    $request->healthCheck1->logConfig = new HealthCheckLogConfig();
    $request->healthCheck1->logConfig->enable = false;
    $request->healthCheck1->name = 'Mrs. Abel Kunde';
    $request->healthCheck1->region = 'dolor';
    $request->healthCheck1->selfLink = 'enim';
    $request->healthCheck1->selfLinkWithId = 'ex';
    $request->healthCheck1->sourceRegions = [
        'aliquid',
        'amet',
        'ut',
        'molestias',
    ];
    $request->healthCheck1->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck1->sslHealthCheck->port = 663447;
    $request->healthCheck1->sslHealthCheck->portName = 'dicta';
    $request->healthCheck1->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->sslHealthCheck->request = 'explicabo';
    $request->healthCheck1->sslHealthCheck->response = 'incidunt';
    $request->healthCheck1->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck1->tcpHealthCheck->port = 587487;
    $request->healthCheck1->tcpHealthCheck->portName = 'facilis';
    $request->healthCheck1->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->tcpHealthCheck->request = 'dicta';
    $request->healthCheck1->tcpHealthCheck->response = 'eligendi';
    $request->healthCheck1->timeoutSec = 925122;
    $request->healthCheck1->type = HealthCheckTypeEnum::HTTP2;
    $request->healthCheck1->udpHealthCheck = new UDPHealthCheck();
    $request->healthCheck1->udpHealthCheck->port = 404925;
    $request->healthCheck1->udpHealthCheck->portName = 'tempore';
    $request->healthCheck1->udpHealthCheck->request = 'iste';
    $request->healthCheck1->udpHealthCheck->response = 'nemo';
    $request->healthCheck1->unhealthyThreshold = 84046;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'facilis';
    $request->healthCheckPathParameter = 'beatae';
    $request->key = 'corporis';
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->project = 'optio';
    $request->quotaUser = 'culpa';
    $request->region = 'excepturi';
    $request->requestId = 'et';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'reiciendis';

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
