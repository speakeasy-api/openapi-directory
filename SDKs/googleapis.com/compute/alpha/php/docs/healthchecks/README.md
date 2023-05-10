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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'fugiat';
    $request->filter = 'molestiae';
    $request->includeAllScopes = false;
    $request->key = 'quas';
    $request->maxResults = 834177;
    $request->oauthToken = 'saepe';
    $request->orderBy = 'amet';
    $request->pageToken = 'distinctio';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'necessitatibus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'nesciunt';
    $request->userIp = 'corrupti';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->fields = 'soluta';
    $request->healthCheck = 'cum';
    $request->key = 'in';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'commodi';
    $request->quotaUser = 'commodi';
    $request->requestId = 'fugit';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'ullam';
    $request->userIp = 'doloremque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'adipisci';
    $request->fields = 'totam';
    $request->healthCheck = 'qui';
    $request->key = 'deserunt';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'est';
    $request->userIp = 'reiciendis';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHealthChecksInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->healthCheck = new HealthCheck();
    $request->healthCheck->checkIntervalSec = 137831;
    $request->healthCheck->creationTimestamp = 'consectetur';
    $request->healthCheck->description = 'inventore';
    $request->healthCheck->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck->grpcHealthCheck->grpcServiceName = 'minima';
    $request->healthCheck->grpcHealthCheck->port = 703651;
    $request->healthCheck->grpcHealthCheck->portName = 'facilis';
    $request->healthCheck->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck->healthyThreshold = 392759;
    $request->healthCheck->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck->http2HealthCheck->host = 'ipsam';
    $request->healthCheck->http2HealthCheck->port = 29270;
    $request->healthCheck->http2HealthCheck->portName = 'illo';
    $request->healthCheck->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck->http2HealthCheck->requestPath = 'eveniet';
    $request->healthCheck->http2HealthCheck->response = 'quae';
    $request->healthCheck->http2HealthCheck->weightReportMode = Http2HealthCheckWeightReportModeEnum::DRY_RUN;
    $request->healthCheck->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck->httpHealthCheck->host = 'asperiores';
    $request->healthCheck->httpHealthCheck->port = 332249;
    $request->healthCheck->httpHealthCheck->portName = 'quidem';
    $request->healthCheck->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck->httpHealthCheck->requestPath = 'deserunt';
    $request->healthCheck->httpHealthCheck->response = 'repudiandae';
    $request->healthCheck->httpHealthCheck->weightReportMode = HTTPHealthCheckWeightReportModeEnum::DRY_RUN;
    $request->healthCheck->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck->httpsHealthCheck->host = 'molestias';
    $request->healthCheck->httpsHealthCheck->port = 102019;
    $request->healthCheck->httpsHealthCheck->portName = 'expedita';
    $request->healthCheck->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck->httpsHealthCheck->requestPath = 'facilis';
    $request->healthCheck->httpsHealthCheck->response = 'assumenda';
    $request->healthCheck->httpsHealthCheck->weightReportMode = HTTPSHealthCheckWeightReportModeEnum::ENABLE;
    $request->healthCheck->id = 'maiores';
    $request->healthCheck->kind = 'ipsum';
    $request->healthCheck->logConfig = new HealthCheckLogConfig();
    $request->healthCheck->logConfig->enable = false;
    $request->healthCheck->name = 'Jean Corkery';
    $request->healthCheck->region = 'neque';
    $request->healthCheck->selfLink = 'quod';
    $request->healthCheck->selfLinkWithId = 'eos';
    $request->healthCheck->sourceRegions = [
        'ad',
    ];
    $request->healthCheck->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck->sslHealthCheck->port = 954595;
    $request->healthCheck->sslHealthCheck->portName = 'facere';
    $request->healthCheck->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck->sslHealthCheck->request = 'quaerat';
    $request->healthCheck->sslHealthCheck->response = 'aperiam';
    $request->healthCheck->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck->tcpHealthCheck->port = 489821;
    $request->healthCheck->tcpHealthCheck->portName = 'quam';
    $request->healthCheck->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck->tcpHealthCheck->request = 'iure';
    $request->healthCheck->tcpHealthCheck->response = 'deleniti';
    $request->healthCheck->timeoutSec = 638219;
    $request->healthCheck->type = HealthCheckTypeEnum::INVALID;
    $request->healthCheck->udpHealthCheck = new UDPHealthCheck();
    $request->healthCheck->udpHealthCheck->port = 674077;
    $request->healthCheck->udpHealthCheck->portName = 'dolor';
    $request->healthCheck->udpHealthCheck->request = 'ad';
    $request->healthCheck->udpHealthCheck->response = 'illum';
    $request->healthCheck->unhealthyThreshold = 22966;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'expedita';
    $request->fields = 'voluptas';
    $request->key = 'maiores';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'delectus';
    $request->requestId = 'accusamus';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'sed';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'maiores';
    $request->fields = 'quaerat';
    $request->filter = 'numquam';
    $request->key = 'non';
    $request->maxResults = 741024;
    $request->oauthToken = 'incidunt';
    $request->orderBy = 'dolores';
    $request->pageToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'libero';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'excepturi';
    $request->userIp = 'eos';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHealthChecksPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->healthCheck1 = new HealthCheck();
    $request->healthCheck1->checkIntervalSec = 547184;
    $request->healthCheck1->creationTimestamp = 'repellendus';
    $request->healthCheck1->description = 'cum';
    $request->healthCheck1->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck1->grpcHealthCheck->grpcServiceName = 'quibusdam';
    $request->healthCheck1->grpcHealthCheck->port = 667418;
    $request->healthCheck1->grpcHealthCheck->portName = 'commodi';
    $request->healthCheck1->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->healthyThreshold = 421273;
    $request->healthCheck1->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck1->http2HealthCheck->host = 'dicta';
    $request->healthCheck1->http2HealthCheck->port = 926266;
    $request->healthCheck1->http2HealthCheck->portName = 'sapiente';
    $request->healthCheck1->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->http2HealthCheck->requestPath = 'inventore';
    $request->healthCheck1->http2HealthCheck->response = 'iste';
    $request->healthCheck1->http2HealthCheck->weightReportMode = Http2HealthCheckWeightReportModeEnum::DRY_RUN;
    $request->healthCheck1->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck1->httpHealthCheck->host = 'explicabo';
    $request->healthCheck1->httpHealthCheck->port = 356007;
    $request->healthCheck1->httpHealthCheck->portName = 'atque';
    $request->healthCheck1->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->httpHealthCheck->requestPath = 'aut';
    $request->healthCheck1->httpHealthCheck->response = 'similique';
    $request->healthCheck1->httpHealthCheck->weightReportMode = HTTPHealthCheckWeightReportModeEnum::DRY_RUN;
    $request->healthCheck1->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck1->httpsHealthCheck->host = 'eveniet';
    $request->healthCheck1->httpsHealthCheck->port = 723623;
    $request->healthCheck1->httpsHealthCheck->portName = 'animi';
    $request->healthCheck1->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->httpsHealthCheck->requestPath = 'voluptatibus';
    $request->healthCheck1->httpsHealthCheck->response = 'quam';
    $request->healthCheck1->httpsHealthCheck->weightReportMode = HTTPSHealthCheckWeightReportModeEnum::ENABLE;
    $request->healthCheck1->id = 'dolorem';
    $request->healthCheck1->kind = 'voluptates';
    $request->healthCheck1->logConfig = new HealthCheckLogConfig();
    $request->healthCheck1->logConfig->enable = false;
    $request->healthCheck1->name = 'Thomas Hahn';
    $request->healthCheck1->region = 'dolore';
    $request->healthCheck1->selfLink = 'voluptatem';
    $request->healthCheck1->selfLinkWithId = 'illum';
    $request->healthCheck1->sourceRegions = [
        'culpa',
        'dicta',
    ];
    $request->healthCheck1->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck1->sslHealthCheck->port = 538877;
    $request->healthCheck1->sslHealthCheck->portName = 'ratione';
    $request->healthCheck1->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->sslHealthCheck->request = 'atque';
    $request->healthCheck1->sslHealthCheck->response = 'nihil';
    $request->healthCheck1->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck1->tcpHealthCheck->port = 631904;
    $request->healthCheck1->tcpHealthCheck->portName = 'temporibus';
    $request->healthCheck1->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->tcpHealthCheck->request = 'cupiditate';
    $request->healthCheck1->tcpHealthCheck->response = 'suscipit';
    $request->healthCheck1->timeoutSec = 967401;
    $request->healthCheck1->type = HealthCheckTypeEnum::TCP;
    $request->healthCheck1->udpHealthCheck = new UDPHealthCheck();
    $request->healthCheck1->udpHealthCheck->port = 961607;
    $request->healthCheck1->udpHealthCheck->portName = 'ab';
    $request->healthCheck1->udpHealthCheck->request = 'mollitia';
    $request->healthCheck1->udpHealthCheck->response = 'possimus';
    $request->healthCheck1->unhealthyThreshold = 505908;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'animi';
    $request->fields = 'debitis';
    $request->healthCheckPathParameter = 'voluptatum';
    $request->key = 'voluptatem';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->project = 'vitae';
    $request->quotaUser = 'cumque';
    $request->requestId = 'architecto';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'eligendi';
    $request->userIp = 'occaecati';

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
        'officia',
        'iste',
        'unde',
    ];
    $request->accessToken = 'quas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ducimus';
    $request->fields = 'voluptatum';
    $request->key = 'sapiente';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'hic';
    $request->resource = 'iure';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'autem';
    $request->userIp = 'iste';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeHealthChecksUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeHealthChecksUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->healthCheck1 = new HealthCheck();
    $request->healthCheck1->checkIntervalSec = 67855;
    $request->healthCheck1->creationTimestamp = 'fuga';
    $request->healthCheck1->description = 'a';
    $request->healthCheck1->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck1->grpcHealthCheck->grpcServiceName = 'dolor';
    $request->healthCheck1->grpcHealthCheck->port = 528082;
    $request->healthCheck1->grpcHealthCheck->portName = 'molestias';
    $request->healthCheck1->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->healthyThreshold = 920389;
    $request->healthCheck1->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck1->http2HealthCheck->host = 'eaque';
    $request->healthCheck1->http2HealthCheck->port = 234347;
    $request->healthCheck1->http2HealthCheck->portName = 'autem';
    $request->healthCheck1->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->http2HealthCheck->requestPath = 'incidunt';
    $request->healthCheck1->http2HealthCheck->response = 'modi';
    $request->healthCheck1->http2HealthCheck->weightReportMode = Http2HealthCheckWeightReportModeEnum::DRY_RUN;
    $request->healthCheck1->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck1->httpHealthCheck->host = 'minus';
    $request->healthCheck1->httpHealthCheck->port = 452481;
    $request->healthCheck1->httpHealthCheck->portName = 'error';
    $request->healthCheck1->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->httpHealthCheck->requestPath = 'animi';
    $request->healthCheck1->httpHealthCheck->response = 'consequatur';
    $request->healthCheck1->httpHealthCheck->weightReportMode = HTTPHealthCheckWeightReportModeEnum::ENABLE;
    $request->healthCheck1->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck1->httpsHealthCheck->host = 'delectus';
    $request->healthCheck1->httpsHealthCheck->port = 185862;
    $request->healthCheck1->httpsHealthCheck->portName = 'delectus';
    $request->healthCheck1->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->httpsHealthCheck->requestPath = 'laboriosam';
    $request->healthCheck1->httpsHealthCheck->response = 'doloremque';
    $request->healthCheck1->httpsHealthCheck->weightReportMode = HTTPSHealthCheckWeightReportModeEnum::DISABLE;
    $request->healthCheck1->id = 'voluptatum';
    $request->healthCheck1->kind = 'debitis';
    $request->healthCheck1->logConfig = new HealthCheckLogConfig();
    $request->healthCheck1->logConfig->enable = false;
    $request->healthCheck1->name = 'Bradford Vandervort';
    $request->healthCheck1->region = 'adipisci';
    $request->healthCheck1->selfLink = 'aliquam';
    $request->healthCheck1->selfLinkWithId = 'illo';
    $request->healthCheck1->sourceRegions = [
        'sed',
        'necessitatibus',
    ];
    $request->healthCheck1->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck1->sslHealthCheck->port = 820866;
    $request->healthCheck1->sslHealthCheck->portName = 'dignissimos';
    $request->healthCheck1->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->sslHealthCheck->request = 'ullam';
    $request->healthCheck1->sslHealthCheck->response = 'non';
    $request->healthCheck1->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck1->tcpHealthCheck->port = 962497;
    $request->healthCheck1->tcpHealthCheck->portName = 'incidunt';
    $request->healthCheck1->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->tcpHealthCheck->request = 'ullam';
    $request->healthCheck1->tcpHealthCheck->response = 'quam';
    $request->healthCheck1->timeoutSec = 850953;
    $request->healthCheck1->type = HealthCheckTypeEnum::UDP;
    $request->healthCheck1->udpHealthCheck = new UDPHealthCheck();
    $request->healthCheck1->udpHealthCheck->port = 641006;
    $request->healthCheck1->udpHealthCheck->portName = 'est';
    $request->healthCheck1->udpHealthCheck->request = 'in';
    $request->healthCheck1->udpHealthCheck->response = 'illo';
    $request->healthCheck1->unhealthyThreshold = 451926;
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->fields = 'dolore';
    $request->healthCheckPathParameter = 'nemo';
    $request->key = 'est';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->project = 'maxime';
    $request->quotaUser = 'delectus';
    $request->requestId = 'laboriosam';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'quam';
    $request->userIp = 'fuga';

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
