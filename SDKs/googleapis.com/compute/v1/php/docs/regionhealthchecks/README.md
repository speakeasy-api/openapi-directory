# regionHealthChecks

### Available Operations

* [computeRegionHealthChecksDelete](#computeregionhealthchecksdelete) - Deletes the specified HealthCheck resource.
* [computeRegionHealthChecksGet](#computeregionhealthchecksget) - Returns the specified HealthCheck resource.
* [computeRegionHealthChecksInsert](#computeregionhealthchecksinsert) - Creates a HealthCheck resource in the specified project using the data included in the request.
* [computeRegionHealthChecksList](#computeregionhealthcheckslist) - Retrieves the list of HealthCheck resources available to the specified project.
* [computeRegionHealthChecksPatch](#computeregionhealthcheckspatch) - Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
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
    $request->accessToken = 'amet';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ea';
    $request->fields = 'fugiat';
    $request->healthCheck = 'esse';
    $request->key = 'officiis';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'tempore';
    $request->region = 'dolores';
    $request->requestId = 'beatae';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'fugiat';
    $request->userIp = 'occaecati';

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
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'assumenda';
    $request->healthCheck = 'veniam';
    $request->key = 'quis';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'autem';
    $request->region = 'iste';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'sunt';
    $request->userIp = 'quod';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->healthCheck = new HealthCheck();
    $request->healthCheck->checkIntervalSec = 707073;
    $request->healthCheck->creationTimestamp = 'ducimus';
    $request->healthCheck->description = 'natus';
    $request->healthCheck->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck->grpcHealthCheck->grpcServiceName = 'fuga';
    $request->healthCheck->grpcHealthCheck->port = 906468;
    $request->healthCheck->grpcHealthCheck->portName = 'nesciunt';
    $request->healthCheck->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck->healthyThreshold = 426964;
    $request->healthCheck->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck->http2HealthCheck->host = 'praesentium';
    $request->healthCheck->http2HealthCheck->port = 107679;
    $request->healthCheck->http2HealthCheck->portName = 'eligendi';
    $request->healthCheck->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck->http2HealthCheck->requestPath = 'eligendi';
    $request->healthCheck->http2HealthCheck->response = 'dolorem';
    $request->healthCheck->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck->httpHealthCheck->host = 'omnis';
    $request->healthCheck->httpHealthCheck->port = 684273;
    $request->healthCheck->httpHealthCheck->portName = 'voluptate';
    $request->healthCheck->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck->httpHealthCheck->requestPath = 'officiis';
    $request->healthCheck->httpHealthCheck->response = 'ab';
    $request->healthCheck->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck->httpsHealthCheck->host = 'in';
    $request->healthCheck->httpsHealthCheck->port = 763567;
    $request->healthCheck->httpsHealthCheck->portName = 'distinctio';
    $request->healthCheck->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck->httpsHealthCheck->requestPath = 'impedit';
    $request->healthCheck->httpsHealthCheck->response = 'enim';
    $request->healthCheck->id = 'nam';
    $request->healthCheck->kind = 'culpa';
    $request->healthCheck->logConfig = new HealthCheckLogConfig();
    $request->healthCheck->logConfig->enable = false;
    $request->healthCheck->name = 'Steve Herzog';
    $request->healthCheck->region = 'explicabo';
    $request->healthCheck->selfLink = 'eos';
    $request->healthCheck->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck->sslHealthCheck->port = 776764;
    $request->healthCheck->sslHealthCheck->portName = 'fugiat';
    $request->healthCheck->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck->sslHealthCheck->request = 'tempore';
    $request->healthCheck->sslHealthCheck->response = 'est';
    $request->healthCheck->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck->tcpHealthCheck->port = 404758;
    $request->healthCheck->tcpHealthCheck->portName = 'hic';
    $request->healthCheck->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck->tcpHealthCheck->request = 'necessitatibus';
    $request->healthCheck->tcpHealthCheck->response = 'quisquam';
    $request->healthCheck->timeoutSec = 596143;
    $request->healthCheck->type = HealthCheckTypeEnum::HTTP;
    $request->healthCheck->unhealthyThreshold = 163928;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquid';
    $request->fields = 'voluptatum';
    $request->key = 'sunt';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->project = 'illum';
    $request->quotaUser = 'ea';
    $request->region = 'veniam';
    $request->requestId = 'nam';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'earum';
    $request->userIp = 'placeat';

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
    $request->accessToken = 'quod';
    $request->alt = AltEnum::JSON;
    $request->callback = 'assumenda';
    $request->fields = 'at';
    $request->filter = 'ea';
    $request->key = 'provident';
    $request->maxResults = 82208;
    $request->oauthToken = 'ea';
    $request->orderBy = 'repellat';
    $request->pageToken = 'quam';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'minus';
    $request->region = 'nihil';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'assumenda';
    $request->userIp = 'animi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->healthCheck1 = new HealthCheck();
    $request->healthCheck1->checkIntervalSec = 58461;
    $request->healthCheck1->creationTimestamp = 'recusandae';
    $request->healthCheck1->description = 'placeat';
    $request->healthCheck1->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck1->grpcHealthCheck->grpcServiceName = 'aliquid';
    $request->healthCheck1->grpcHealthCheck->port = 25744;
    $request->healthCheck1->grpcHealthCheck->portName = 'vero';
    $request->healthCheck1->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->healthyThreshold = 12948;
    $request->healthCheck1->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck1->http2HealthCheck->host = 'reprehenderit';
    $request->healthCheck1->http2HealthCheck->port = 341302;
    $request->healthCheck1->http2HealthCheck->portName = 'praesentium';
    $request->healthCheck1->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->http2HealthCheck->requestPath = 'fugiat';
    $request->healthCheck1->http2HealthCheck->response = 'autem';
    $request->healthCheck1->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck1->httpHealthCheck->host = 'et';
    $request->healthCheck1->httpHealthCheck->port = 787299;
    $request->healthCheck1->httpHealthCheck->portName = 'illo';
    $request->healthCheck1->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->httpHealthCheck->requestPath = 'facere';
    $request->healthCheck1->httpHealthCheck->response = 'excepturi';
    $request->healthCheck1->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck1->httpsHealthCheck->host = 'aut';
    $request->healthCheck1->httpsHealthCheck->port = 131924;
    $request->healthCheck1->httpsHealthCheck->portName = 'odit';
    $request->healthCheck1->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->httpsHealthCheck->requestPath = 'neque';
    $request->healthCheck1->httpsHealthCheck->response = 'nihil';
    $request->healthCheck1->id = 'nobis';
    $request->healthCheck1->kind = 'eaque';
    $request->healthCheck1->logConfig = new HealthCheckLogConfig();
    $request->healthCheck1->logConfig->enable = false;
    $request->healthCheck1->name = 'Jackie Kiehn';
    $request->healthCheck1->region = 'et';
    $request->healthCheck1->selfLink = 'culpa';
    $request->healthCheck1->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck1->sslHealthCheck->port = 347962;
    $request->healthCheck1->sslHealthCheck->portName = 'eius';
    $request->healthCheck1->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->sslHealthCheck->request = 'similique';
    $request->healthCheck1->sslHealthCheck->response = 'quidem';
    $request->healthCheck1->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck1->tcpHealthCheck->port = 886903;
    $request->healthCheck1->tcpHealthCheck->portName = 'provident';
    $request->healthCheck1->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->tcpHealthCheck->request = 'beatae';
    $request->healthCheck1->tcpHealthCheck->response = 'cum';
    $request->healthCheck1->timeoutSec = 113553;
    $request->healthCheck1->type = HealthCheckTypeEnum::GRPC;
    $request->healthCheck1->unhealthyThreshold = 416803;
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ratione';
    $request->fields = 'repudiandae';
    $request->healthCheckPathParameter = 'accusantium';
    $request->key = 'dolorem';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->project = 'voluptas';
    $request->quotaUser = 'natus';
    $request->region = 'laudantium';
    $request->requestId = 'sunt';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'similique';
    $request->userIp = 'id';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->healthCheck1 = new HealthCheck();
    $request->healthCheck1->checkIntervalSec = 605256;
    $request->healthCheck1->creationTimestamp = 'cupiditate';
    $request->healthCheck1->description = 'earum';
    $request->healthCheck1->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck1->grpcHealthCheck->grpcServiceName = 'nobis';
    $request->healthCheck1->grpcHealthCheck->port = 831959;
    $request->healthCheck1->grpcHealthCheck->portName = 'necessitatibus';
    $request->healthCheck1->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->healthyThreshold = 916110;
    $request->healthCheck1->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck1->http2HealthCheck->host = 'in';
    $request->healthCheck1->http2HealthCheck->port = 142501;
    $request->healthCheck1->http2HealthCheck->portName = 'iste';
    $request->healthCheck1->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->http2HealthCheck->requestPath = 'nulla';
    $request->healthCheck1->http2HealthCheck->response = 'tempora';
    $request->healthCheck1->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck1->httpHealthCheck->host = 'maiores';
    $request->healthCheck1->httpHealthCheck->port = 178017;
    $request->healthCheck1->httpHealthCheck->portName = 'pariatur';
    $request->healthCheck1->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->httpHealthCheck->requestPath = 'aliquam';
    $request->healthCheck1->httpHealthCheck->response = 'tempora';
    $request->healthCheck1->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck1->httpsHealthCheck->host = 'laboriosam';
    $request->healthCheck1->httpsHealthCheck->port = 311450;
    $request->healthCheck1->httpsHealthCheck->portName = 'alias';
    $request->healthCheck1->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->httpsHealthCheck->requestPath = 'commodi';
    $request->healthCheck1->httpsHealthCheck->response = 'ipsa';
    $request->healthCheck1->id = 'illum';
    $request->healthCheck1->kind = 'tempore';
    $request->healthCheck1->logConfig = new HealthCheckLogConfig();
    $request->healthCheck1->logConfig->enable = false;
    $request->healthCheck1->name = 'Rita O'Reilly';
    $request->healthCheck1->region = 'unde';
    $request->healthCheck1->selfLink = 'dolorem';
    $request->healthCheck1->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck1->sslHealthCheck->port = 983473;
    $request->healthCheck1->sslHealthCheck->portName = 'labore';
    $request->healthCheck1->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->sslHealthCheck->request = 'at';
    $request->healthCheck1->sslHealthCheck->response = 'quisquam';
    $request->healthCheck1->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck1->tcpHealthCheck->port = 61840;
    $request->healthCheck1->tcpHealthCheck->portName = 'possimus';
    $request->healthCheck1->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->tcpHealthCheck->request = 'fuga';
    $request->healthCheck1->tcpHealthCheck->response = 'minima';
    $request->healthCheck1->timeoutSec = 375389;
    $request->healthCheck1->type = HealthCheckTypeEnum::GRPC;
    $request->healthCheck1->unhealthyThreshold = 129469;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quia';
    $request->fields = 'laboriosam';
    $request->healthCheckPathParameter = 'laborum';
    $request->key = 'soluta';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'eos';
    $request->region = 'quam';
    $request->requestId = 'voluptate';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'praesentium';
    $request->userIp = 'exercitationem';

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
