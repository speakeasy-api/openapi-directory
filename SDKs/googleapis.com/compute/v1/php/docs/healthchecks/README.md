# healthChecks

### Available Operations

* [computeHealthChecksAggregatedList](#computehealthchecksaggregatedlist) - Retrieves the list of all HealthCheck resources, regional and global, available to the specified project.
* [computeHealthChecksDelete](#computehealthchecksdelete) - Deletes the specified HealthCheck resource.
* [computeHealthChecksGet](#computehealthchecksget) - Returns the specified HealthCheck resource.
* [computeHealthChecksInsert](#computehealthchecksinsert) - Creates a HealthCheck resource in the specified project using the data included in the request.
* [computeHealthChecksList](#computehealthcheckslist) - Retrieves the list of HealthCheck resources available to the specified project.
* [computeHealthChecksPatch](#computehealthcheckspatch) - Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
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
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'fugit';
    $request->filter = 'veritatis';
    $request->includeAllScopes = false;
    $request->key = 'necessitatibus';
    $request->maxResults = 611970;
    $request->oauthToken = 'dicta';
    $request->orderBy = 'ipsam';
    $request->pageToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'quidem';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'non';
    $request->uploadProtocol = 'beatae';
    $request->userIp = 'sunt';

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
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ducimus';
    $request->fields = 'libero';
    $request->healthCheck = 'molestias';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->project = 'impedit';
    $request->quotaUser = 'quos';
    $request->requestId = 'illum';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'non';

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
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellendus';
    $request->fields = 'commodi';
    $request->healthCheck = 'quibusdam';
    $request->key = 'consectetur';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->project = 'quaerat';
    $request->quotaUser = 'earum';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'assumenda';
    $request->userIp = 'dolore';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->healthCheck = new HealthCheck();
    $request->healthCheck->checkIntervalSec = 353904;
    $request->healthCheck->creationTimestamp = 'perspiciatis';
    $request->healthCheck->description = 'alias';
    $request->healthCheck->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck->grpcHealthCheck->grpcServiceName = 'ex';
    $request->healthCheck->grpcHealthCheck->port = 845078;
    $request->healthCheck->grpcHealthCheck->portName = 'dicta';
    $request->healthCheck->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck->healthyThreshold = 412481;
    $request->healthCheck->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck->http2HealthCheck->host = 'neque';
    $request->healthCheck->http2HealthCheck->port = 843659;
    $request->healthCheck->http2HealthCheck->portName = 'numquam';
    $request->healthCheck->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck->http2HealthCheck->requestPath = 'omnis';
    $request->healthCheck->http2HealthCheck->response = 'neque';
    $request->healthCheck->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck->httpHealthCheck->host = 'corporis';
    $request->healthCheck->httpHealthCheck->port = 797527;
    $request->healthCheck->httpHealthCheck->portName = 'dolores';
    $request->healthCheck->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck->httpHealthCheck->requestPath = 'recusandae';
    $request->healthCheck->httpHealthCheck->response = 'quos';
    $request->healthCheck->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck->httpsHealthCheck->host = 'dicta';
    $request->healthCheck->httpsHealthCheck->port = 956130;
    $request->healthCheck->httpsHealthCheck->portName = 'ipsum';
    $request->healthCheck->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck->httpsHealthCheck->requestPath = 'necessitatibus';
    $request->healthCheck->httpsHealthCheck->response = 'sequi';
    $request->healthCheck->id = 'recusandae';
    $request->healthCheck->kind = 'labore';
    $request->healthCheck->logConfig = new HealthCheckLogConfig();
    $request->healthCheck->logConfig->enable = false;
    $request->healthCheck->name = 'Sara Bayer';
    $request->healthCheck->region = 'iusto';
    $request->healthCheck->selfLink = 'magni';
    $request->healthCheck->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck->sslHealthCheck->port = 109683;
    $request->healthCheck->sslHealthCheck->portName = 'aliquid';
    $request->healthCheck->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck->sslHealthCheck->request = 'vel';
    $request->healthCheck->sslHealthCheck->response = 'minima';
    $request->healthCheck->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck->tcpHealthCheck->port = 24548;
    $request->healthCheck->tcpHealthCheck->portName = 'vel';
    $request->healthCheck->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck->tcpHealthCheck->request = 'quasi';
    $request->healthCheck->tcpHealthCheck->response = 'rem';
    $request->healthCheck->timeoutSec = 493579;
    $request->healthCheck->type = HealthCheckTypeEnum::GRPC;
    $request->healthCheck->unhealthyThreshold = 825739;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'inventore';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'deserunt';
    $request->quotaUser = 'repellendus';
    $request->requestId = 'consequatur';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'doloremque';
    $request->userIp = 'optio';

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
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'et';
    $request->filter = 'beatae';
    $request->key = 'id';
    $request->maxResults = 9060;
    $request->oauthToken = 'quos';
    $request->orderBy = 'ratione';
    $request->pageToken = 'iure';
    $request->prettyPrint = false;
    $request->project = 'tempora';
    $request->quotaUser = 'eos';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'suscipit';

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
    $request->healthCheck1->checkIntervalSec = 703407;
    $request->healthCheck1->creationTimestamp = 'laudantium';
    $request->healthCheck1->description = 'ullam';
    $request->healthCheck1->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck1->grpcHealthCheck->grpcServiceName = 'aut';
    $request->healthCheck1->grpcHealthCheck->port = 154425;
    $request->healthCheck1->grpcHealthCheck->portName = 'officia';
    $request->healthCheck1->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->healthyThreshold = 361371;
    $request->healthCheck1->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck1->http2HealthCheck->host = 'accusamus';
    $request->healthCheck1->http2HealthCheck->port = 481307;
    $request->healthCheck1->http2HealthCheck->portName = 'sapiente';
    $request->healthCheck1->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->http2HealthCheck->requestPath = 'quidem';
    $request->healthCheck1->http2HealthCheck->response = 'quisquam';
    $request->healthCheck1->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck1->httpHealthCheck->host = 'praesentium';
    $request->healthCheck1->httpHealthCheck->port = 273349;
    $request->healthCheck1->httpHealthCheck->portName = 'ipsam';
    $request->healthCheck1->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->httpHealthCheck->requestPath = 'magni';
    $request->healthCheck1->httpHealthCheck->response = 'voluptatem';
    $request->healthCheck1->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck1->httpsHealthCheck->host = 'est';
    $request->healthCheck1->httpsHealthCheck->port = 226181;
    $request->healthCheck1->httpsHealthCheck->portName = 'veritatis';
    $request->healthCheck1->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->httpsHealthCheck->requestPath = 'numquam';
    $request->healthCheck1->httpsHealthCheck->response = 'rerum';
    $request->healthCheck1->id = 'dolorum';
    $request->healthCheck1->kind = 'quibusdam';
    $request->healthCheck1->logConfig = new HealthCheckLogConfig();
    $request->healthCheck1->logConfig->enable = false;
    $request->healthCheck1->name = 'Andy Gerhold';
    $request->healthCheck1->region = 'error';
    $request->healthCheck1->selfLink = 'animi';
    $request->healthCheck1->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck1->sslHealthCheck->port = 528742;
    $request->healthCheck1->sslHealthCheck->portName = 'aliquid';
    $request->healthCheck1->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->sslHealthCheck->request = 'optio';
    $request->healthCheck1->sslHealthCheck->response = 'incidunt';
    $request->healthCheck1->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck1->tcpHealthCheck->port = 178201;
    $request->healthCheck1->tcpHealthCheck->portName = 'magnam';
    $request->healthCheck1->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::NONE;
    $request->healthCheck1->tcpHealthCheck->request = 'eum';
    $request->healthCheck1->tcpHealthCheck->response = 'vel';
    $request->healthCheck1->timeoutSec = 320748;
    $request->healthCheck1->type = HealthCheckTypeEnum::HTTPS;
    $request->healthCheck1->unhealthyThreshold = 74124;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fugiat';
    $request->fields = 'impedit';
    $request->healthCheckPathParameter = 'culpa';
    $request->key = 'atque';
    $request->oauthToken = 'voluptates';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'nemo';
    $request->requestId = 'illo';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'cumque';
    $request->userIp = 'expedita';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->healthCheck1 = new HealthCheck();
    $request->healthCheck1->checkIntervalSec = 768244;
    $request->healthCheck1->creationTimestamp = 'ipsam';
    $request->healthCheck1->description = 'occaecati';
    $request->healthCheck1->grpcHealthCheck = new GRPCHealthCheck();
    $request->healthCheck1->grpcHealthCheck->grpcServiceName = 'ipsum';
    $request->healthCheck1->grpcHealthCheck->port = 879193;
    $request->healthCheck1->grpcHealthCheck->portName = 'quisquam';
    $request->healthCheck1->grpcHealthCheck->portSpecification = GRPCHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->healthyThreshold = 144240;
    $request->healthCheck1->http2HealthCheck = new Http2HealthCheck();
    $request->healthCheck1->http2HealthCheck->host = 'quo';
    $request->healthCheck1->http2HealthCheck->port = 840017;
    $request->healthCheck1->http2HealthCheck->portName = 'mollitia';
    $request->healthCheck1->http2HealthCheck->portSpecification = Http2HealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->http2HealthCheck->proxyHeader = Http2HealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->http2HealthCheck->requestPath = 'ipsa';
    $request->healthCheck1->http2HealthCheck->response = 'accusamus';
    $request->healthCheck1->httpHealthCheck = new HTTPHealthCheck();
    $request->healthCheck1->httpHealthCheck->host = 'placeat';
    $request->healthCheck1->httpHealthCheck->port = 464878;
    $request->healthCheck1->httpHealthCheck->portName = 'similique';
    $request->healthCheck1->httpHealthCheck->portSpecification = HTTPHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->httpHealthCheck->proxyHeader = HTTPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->httpHealthCheck->requestPath = 'facere';
    $request->healthCheck1->httpHealthCheck->response = 'nobis';
    $request->healthCheck1->httpsHealthCheck = new HTTPSHealthCheck();
    $request->healthCheck1->httpsHealthCheck->host = 'at';
    $request->healthCheck1->httpsHealthCheck->port = 561121;
    $request->healthCheck1->httpsHealthCheck->portName = 'aut';
    $request->healthCheck1->httpsHealthCheck->portSpecification = HTTPSHealthCheckPortSpecificationEnum::USE_SERVING_PORT;
    $request->healthCheck1->httpsHealthCheck->proxyHeader = HTTPSHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->httpsHealthCheck->requestPath = 'incidunt';
    $request->healthCheck1->httpsHealthCheck->response = 'numquam';
    $request->healthCheck1->id = 'corrupti';
    $request->healthCheck1->kind = 'similique';
    $request->healthCheck1->logConfig = new HealthCheckLogConfig();
    $request->healthCheck1->logConfig->enable = false;
    $request->healthCheck1->name = 'Tamara Wisoky';
    $request->healthCheck1->region = 'occaecati';
    $request->healthCheck1->selfLink = 'aut';
    $request->healthCheck1->sslHealthCheck = new SSLHealthCheck();
    $request->healthCheck1->sslHealthCheck->port = 771289;
    $request->healthCheck1->sslHealthCheck->portName = 'minima';
    $request->healthCheck1->sslHealthCheck->portSpecification = SSLHealthCheckPortSpecificationEnum::USE_NAMED_PORT;
    $request->healthCheck1->sslHealthCheck->proxyHeader = SSLHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->sslHealthCheck->request = 'quas';
    $request->healthCheck1->sslHealthCheck->response = 'voluptatem';
    $request->healthCheck1->tcpHealthCheck = new TCPHealthCheck();
    $request->healthCheck1->tcpHealthCheck->port = 591774;
    $request->healthCheck1->tcpHealthCheck->portName = 'quas';
    $request->healthCheck1->tcpHealthCheck->portSpecification = TCPHealthCheckPortSpecificationEnum::USE_FIXED_PORT;
    $request->healthCheck1->tcpHealthCheck->proxyHeader = TCPHealthCheckProxyHeaderEnum::PROXY_V1;
    $request->healthCheck1->tcpHealthCheck->request = 'fuga';
    $request->healthCheck1->tcpHealthCheck->response = 'facilis';
    $request->healthCheck1->timeoutSec = 983060;
    $request->healthCheck1->type = HealthCheckTypeEnum::INVALID;
    $request->healthCheck1->unhealthyThreshold = 926119;
    $request->accessToken = 'a';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sapiente';
    $request->fields = 'voluptatibus';
    $request->healthCheckPathParameter = 'assumenda';
    $request->key = 'repellendus';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'odio';
    $request->requestId = 'voluptatibus';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quam';
    $request->userIp = 'omnis';

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
