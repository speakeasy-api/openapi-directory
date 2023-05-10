# targetHttpsProxies

### Available Operations

* [computeTargetHttpsProxiesAggregatedList](#computetargethttpsproxiesaggregatedlist) - Retrieves the list of all TargetHttpsProxy resources, regional and global, available to the specified project.
* [computeTargetHttpsProxiesDelete](#computetargethttpsproxiesdelete) - Deletes the specified TargetHttpsProxy resource.
* [computeTargetHttpsProxiesGet](#computetargethttpsproxiesget) - Returns the specified TargetHttpsProxy resource.
* [computeTargetHttpsProxiesInsert](#computetargethttpsproxiesinsert) - Creates a TargetHttpsProxy resource in the specified project using the data included in the request.
* [computeTargetHttpsProxiesList](#computetargethttpsproxieslist) - Retrieves the list of TargetHttpsProxy resources available to the specified project.
* [computeTargetHttpsProxiesPatch](#computetargethttpsproxiespatch) - Patches the specified TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeTargetHttpsProxiesSetCertificateMap](#computetargethttpsproxiessetcertificatemap) - Changes the Certificate Map for TargetHttpsProxy.
* [computeTargetHttpsProxiesSetQuicOverride](#computetargethttpsproxiessetquicoverride) - Sets the QUIC override policy for TargetHttpsProxy.
* [computeTargetHttpsProxiesSetSslCertificates](#computetargethttpsproxiessetsslcertificates) - Replaces SslCertificates for TargetHttpsProxy.
* [computeTargetHttpsProxiesSetSslPolicy](#computetargethttpsproxiessetsslpolicy) - Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the HTTPS proxy load balancer. They do not affect the connection between the load balancer and the backends.
* [computeTargetHttpsProxiesSetUrlMap](#computetargethttpsproxiesseturlmap) - Changes the URL map for TargetHttpsProxy.
* [computeTargetHttpsProxiesTestIamPermissions](#computetargethttpsproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeTargetHttpsProxiesAggregatedList

Retrieves the list of all TargetHttpsProxy resources, regional and global, available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpsProxiesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quia';
    $request->fields = 'magnam';
    $request->filter = 'magnam';
    $request->includeAllScopes = false;
    $request->key = 'illum';
    $request->maxResults = 928814;
    $request->oauthToken = 'architecto';
    $request->orderBy = 'eaque';
    $request->pageToken = 'neque';
    $request->prettyPrint = false;
    $request->project = 'nulla';
    $request->quotaUser = 'consequatur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'ratione';
    $request->userIp = 'voluptatem';

    $requestSecurity = new ComputeTargetHttpsProxiesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpsProxiesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpsProxies->computeTargetHttpsProxiesAggregatedList($request, $requestSecurity);

    if ($response->targetHttpsProxyAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpsProxiesDelete

Deletes the specified TargetHttpsProxy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpsProxiesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nulla';
    $request->fields = 'doloremque';
    $request->key = 'esse';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->project = 'minus';
    $request->quotaUser = 'aliquam';
    $request->requestId = 'eveniet';
    $request->targetHttpsProxy = 'adipisci';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'voluptates';

    $requestSecurity = new ComputeTargetHttpsProxiesDeleteSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpsProxiesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpsProxies->computeTargetHttpsProxiesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpsProxiesGet

Returns the specified TargetHttpsProxy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpsProxiesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'placeat';
    $request->fields = 'quis';
    $request->key = 'porro';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'distinctio';
    $request->quotaUser = 'ab';
    $request->targetHttpsProxy = 'ea';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'nihil';
    $request->userIp = 'ipsum';

    $requestSecurity = new ComputeTargetHttpsProxiesGetSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpsProxiesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpsProxies->computeTargetHttpsProxiesGet($request, $requestSecurity);

    if ($response->targetHttpsProxy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpsProxiesInsert

Creates a TargetHttpsProxy resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetHttpsProxy;
use \OpenAPI\OpenAPI\Models\Shared\TargetHttpsProxyQuicOverrideEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpsProxiesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetHttpsProxy = new TargetHttpsProxy();
    $request->targetHttpsProxy->authentication = 'inventore';
    $request->targetHttpsProxy->authorization = 'incidunt';
    $request->targetHttpsProxy->authorizationPolicy = 'illum';
    $request->targetHttpsProxy->certificateMap = 'fuga';
    $request->targetHttpsProxy->creationTimestamp = 'quibusdam';
    $request->targetHttpsProxy->description = 'minima';
    $request->targetHttpsProxy->fingerprint = 'quas';
    $request->targetHttpsProxy->httpFilters = [
        'praesentium',
        'error',
        'alias',
    ];
    $request->targetHttpsProxy->id = 'ullam';
    $request->targetHttpsProxy->kind = 'numquam';
    $request->targetHttpsProxy->name = 'Gretchen Hammes';
    $request->targetHttpsProxy->proxyBind = false;
    $request->targetHttpsProxy->quicOverride = TargetHttpsProxyQuicOverrideEnum::DISABLE;
    $request->targetHttpsProxy->region = 'deserunt';
    $request->targetHttpsProxy->selfLink = 'veritatis';
    $request->targetHttpsProxy->serverTlsPolicy = 'quae';
    $request->targetHttpsProxy->sslCertificates = [
        'pariatur',
        'deleniti',
        'error',
        'maxime',
    ];
    $request->targetHttpsProxy->sslPolicy = 'eaque';
    $request->targetHttpsProxy->urlMap = 'tenetur';
    $request->accessToken = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'maiores';
    $request->key = 'occaecati';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'laborum';
    $request->requestId = 'nemo';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'optio';
    $request->userIp = 'ratione';

    $requestSecurity = new ComputeTargetHttpsProxiesInsertSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpsProxiesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpsProxies->computeTargetHttpsProxiesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpsProxiesList

Retrieves the list of TargetHttpsProxy resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpsProxiesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'officiis';
    $request->filter = 'sunt';
    $request->key = 'qui';
    $request->maxResults = 159663;
    $request->oauthToken = 'hic';
    $request->orderBy = 'ipsa';
    $request->pageToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'hic';
    $request->quotaUser = 'debitis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'minus';
    $request->userIp = 'quaerat';

    $requestSecurity = new ComputeTargetHttpsProxiesListSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpsProxiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpsProxies->computeTargetHttpsProxiesList($request, $requestSecurity);

    if ($response->targetHttpsProxyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpsProxiesPatch

Patches the specified TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetHttpsProxy;
use \OpenAPI\OpenAPI\Models\Shared\TargetHttpsProxyQuicOverrideEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpsProxiesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetHttpsProxy1 = new TargetHttpsProxy();
    $request->targetHttpsProxy1->authentication = 'cupiditate';
    $request->targetHttpsProxy1->authorization = 'velit';
    $request->targetHttpsProxy1->authorizationPolicy = 'sed';
    $request->targetHttpsProxy1->certificateMap = 'illum';
    $request->targetHttpsProxy1->creationTimestamp = 'voluptate';
    $request->targetHttpsProxy1->description = 'aperiam';
    $request->targetHttpsProxy1->fingerprint = 'eius';
    $request->targetHttpsProxy1->httpFilters = [
        'dolorem',
        'fuga',
        'eveniet',
    ];
    $request->targetHttpsProxy1->id = 'reprehenderit';
    $request->targetHttpsProxy1->kind = 'eaque';
    $request->targetHttpsProxy1->name = 'Nathan Gibson';
    $request->targetHttpsProxy1->proxyBind = false;
    $request->targetHttpsProxy1->quicOverride = TargetHttpsProxyQuicOverrideEnum::NONE;
    $request->targetHttpsProxy1->region = 'harum';
    $request->targetHttpsProxy1->selfLink = 'nobis';
    $request->targetHttpsProxy1->serverTlsPolicy = 'laboriosam';
    $request->targetHttpsProxy1->sslCertificates = [
        'fugit',
        'voluptatum',
        'hic',
    ];
    $request->targetHttpsProxy1->sslPolicy = 'vel';
    $request->targetHttpsProxy1->urlMap = 'asperiores';
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cum';
    $request->fields = 'ipsa';
    $request->key = 'laboriosam';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->project = 'consequuntur';
    $request->quotaUser = 'earum';
    $request->requestId = 'accusamus';
    $request->targetHttpsProxyPathParameter = 'suscipit';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'vel';

    $requestSecurity = new ComputeTargetHttpsProxiesPatchSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpsProxiesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpsProxies->computeTargetHttpsProxiesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpsProxiesSetCertificateMap

Changes the Certificate Map for TargetHttpsProxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetCertificateMapRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetHttpsProxiesSetCertificateMapRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetCertificateMapSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetCertificateMapSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetCertificateMapSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpsProxiesSetCertificateMapRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetHttpsProxiesSetCertificateMapRequest = new TargetHttpsProxiesSetCertificateMapRequest();
    $request->targetHttpsProxiesSetCertificateMapRequest->certificateMap = 'tempore';
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fuga';
    $request->fields = 'modi';
    $request->key = 'vitae';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'culpa';
    $request->quotaUser = 'id';
    $request->requestId = 'fugit';
    $request->targetHttpsProxy = 'unde';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'iure';

    $requestSecurity = new ComputeTargetHttpsProxiesSetCertificateMapSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpsProxiesSetCertificateMapSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpsProxies->computeTargetHttpsProxiesSetCertificateMap($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpsProxiesSetQuicOverride

Sets the QUIC override policy for TargetHttpsProxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetQuicOverrideRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetHttpsProxiesSetQuicOverrideRequest;
use \OpenAPI\OpenAPI\Models\Shared\TargetHttpsProxiesSetQuicOverrideRequestQuicOverrideEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetQuicOverrideSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetQuicOverrideSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetQuicOverrideSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpsProxiesSetQuicOverrideRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetHttpsProxiesSetQuicOverrideRequest = new TargetHttpsProxiesSetQuicOverrideRequest();
    $request->targetHttpsProxiesSetQuicOverrideRequest->quicOverride = TargetHttpsProxiesSetQuicOverrideRequestQuicOverrideEnum::NONE;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officia';
    $request->fields = 'eos';
    $request->key = 'accusamus';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->project = 'inventore';
    $request->quotaUser = 'officia';
    $request->requestId = 'laudantium';
    $request->targetHttpsProxy = 'perferendis';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'quae';
    $request->userIp = 'nemo';

    $requestSecurity = new ComputeTargetHttpsProxiesSetQuicOverrideSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpsProxiesSetQuicOverrideSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpsProxies->computeTargetHttpsProxiesSetQuicOverride($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpsProxiesSetSslCertificates

Replaces SslCertificates for TargetHttpsProxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetSslCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetHttpsProxiesSetSslCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetSslCertificatesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetSslCertificatesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetSslCertificatesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpsProxiesSetSslCertificatesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetHttpsProxiesSetSslCertificatesRequest = new TargetHttpsProxiesSetSslCertificatesRequest();
    $request->targetHttpsProxiesSetSslCertificatesRequest->sslCertificates = [
        'non',
        'ullam',
        'incidunt',
    ];
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'mollitia';
    $request->key = 'commodi';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->quotaUser = 'facere';
    $request->requestId = 'pariatur';
    $request->targetHttpsProxy = 'quisquam';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'provident';
    $request->userIp = 'sint';

    $requestSecurity = new ComputeTargetHttpsProxiesSetSslCertificatesSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpsProxiesSetSslCertificatesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpsProxies->computeTargetHttpsProxiesSetSslCertificates($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpsProxiesSetSslPolicy

Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the HTTPS proxy load balancer. They do not affect the connection between the load balancer and the backends.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetSslPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetSslPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetSslPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetSslPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpsProxiesSetSslPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sslPolicyReference = new SslPolicyReference();
    $request->sslPolicyReference->sslPolicy = 'nihil';
    $request->accessToken = 'harum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquam';
    $request->fields = 'non';
    $request->key = 'porro';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'nemo';
    $request->quotaUser = 'aut';
    $request->requestId = 'aspernatur';
    $request->targetHttpsProxy = 'officia';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'omnis';
    $request->userIp = 'accusamus';

    $requestSecurity = new ComputeTargetHttpsProxiesSetSslPolicySecurity();
    $requestSecurity->option1 = new ComputeTargetHttpsProxiesSetSslPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpsProxies->computeTargetHttpsProxiesSetSslPolicy($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpsProxiesSetUrlMap

Changes the URL map for TargetHttpsProxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetUrlMapRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetUrlMapSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetUrlMapSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesSetUrlMapSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpsProxiesSetUrlMapRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->urlMapReference = new UrlMapReference();
    $request->urlMapReference->urlMap = 'eos';
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'modi';
    $request->key = 'laboriosam';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'est';
    $request->quotaUser = 'sed';
    $request->requestId = 'nulla';
    $request->targetHttpsProxy = 'reprehenderit';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'voluptas';
    $request->userIp = 'autem';

    $requestSecurity = new ComputeTargetHttpsProxiesSetUrlMapSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpsProxiesSetUrlMapSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpsProxies->computeTargetHttpsProxiesSetUrlMap($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpsProxiesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpsProxiesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpsProxiesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'iure',
        'autem',
        'non',
        'quos',
    ];
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odio';
    $request->fields = 'odit';
    $request->key = 'non';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'aut';
    $request->resource = 'adipisci';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'deleniti';
    $request->userIp = 'amet';

    $requestSecurity = new ComputeTargetHttpsProxiesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpsProxiesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpsProxies->computeTargetHttpsProxiesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
