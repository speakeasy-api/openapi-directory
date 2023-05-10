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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fugiat';
    $request->fields = 'magni';
    $request->filter = 'doloribus';
    $request->includeAllScopes = false;
    $request->key = 'dolore';
    $request->maxResults = 667444;
    $request->oauthToken = 'veritatis';
    $request->orderBy = 'itaque';
    $request->pageToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'eligendi';
    $request->quotaUser = 'numquam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'voluptates';
    $request->userIp = 'exercitationem';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatem';
    $request->fields = 'accusamus';
    $request->key = 'voluptate';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->quotaUser = 'dolores';
    $request->requestId = 'laboriosam';
    $request->targetHttpsProxy = 'earum';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'nesciunt';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aut';
    $request->fields = 'consequuntur';
    $request->key = 'natus';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->quotaUser = 'excepturi';
    $request->targetHttpsProxy = 'sed';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'architecto';
    $request->userIp = 'atque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetHttpsProxy = new TargetHttpsProxy();
    $request->targetHttpsProxy->authorizationPolicy = 'saepe';
    $request->targetHttpsProxy->certificateMap = 'accusamus';
    $request->targetHttpsProxy->creationTimestamp = 'incidunt';
    $request->targetHttpsProxy->description = 'dicta';
    $request->targetHttpsProxy->fingerprint = 'quo';
    $request->targetHttpsProxy->id = 'natus';
    $request->targetHttpsProxy->kind = 'excepturi';
    $request->targetHttpsProxy->name = 'Irvin Grady';
    $request->targetHttpsProxy->proxyBind = false;
    $request->targetHttpsProxy->quicOverride = TargetHttpsProxyQuicOverrideEnum::NONE;
    $request->targetHttpsProxy->region = 'eum';
    $request->targetHttpsProxy->selfLink = 'delectus';
    $request->targetHttpsProxy->serverTlsPolicy = 'beatae';
    $request->targetHttpsProxy->sslCertificates = [
        'sapiente',
        'quasi',
        'dolorum',
        'adipisci',
    ];
    $request->targetHttpsProxy->sslPolicy = 'a';
    $request->targetHttpsProxy->urlMap = 'ipsa';
    $request->accessToken = 'sed';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minus';
    $request->fields = 'suscipit';
    $request->key = 'autem';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->project = 'itaque';
    $request->quotaUser = 'laboriosam';
    $request->requestId = 'harum';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'aliquid';

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
    $request->accessToken = 'ab';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vero';
    $request->fields = 'expedita';
    $request->filter = 'id';
    $request->key = 'consequatur';
    $request->maxResults = 335894;
    $request->oauthToken = 'iusto';
    $request->orderBy = 'unde';
    $request->pageToken = 'quos';
    $request->prettyPrint = false;
    $request->project = 'rem';
    $request->quotaUser = 'placeat';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'in';
    $request->userIp = 'odit';

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
    $request->targetHttpsProxy1->authorizationPolicy = 'impedit';
    $request->targetHttpsProxy1->certificateMap = 'ipsum';
    $request->targetHttpsProxy1->creationTimestamp = 'illo';
    $request->targetHttpsProxy1->description = 'aperiam';
    $request->targetHttpsProxy1->fingerprint = 'sequi';
    $request->targetHttpsProxy1->id = 'maiores';
    $request->targetHttpsProxy1->kind = 'quae';
    $request->targetHttpsProxy1->name = 'Bernard Abbott DVM';
    $request->targetHttpsProxy1->proxyBind = false;
    $request->targetHttpsProxy1->quicOverride = TargetHttpsProxyQuicOverrideEnum::DISABLE;
    $request->targetHttpsProxy1->region = 'debitis';
    $request->targetHttpsProxy1->selfLink = 'quo';
    $request->targetHttpsProxy1->serverTlsPolicy = 'deleniti';
    $request->targetHttpsProxy1->sslCertificates = [
        'blanditiis',
        'blanditiis',
    ];
    $request->targetHttpsProxy1->sslPolicy = 'doloribus';
    $request->targetHttpsProxy1->urlMap = 'at';
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nobis';
    $request->fields = 'vel';
    $request->key = 'tenetur';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->project = 'consequatur';
    $request->quotaUser = 'consectetur';
    $request->requestId = 'illo';
    $request->targetHttpsProxyPathParameter = 'dolores';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'alias';

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
    $request->targetHttpsProxiesSetCertificateMapRequest->certificateMap = 'mollitia';
    $request->accessToken = 'animi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'repudiandae';
    $request->key = 'sit';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'accusamus';
    $request->requestId = 'distinctio';
    $request->targetHttpsProxy = 'dolorum';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'soluta';
    $request->userIp = 'hic';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetHttpsProxiesSetQuicOverrideRequest = new TargetHttpsProxiesSetQuicOverrideRequest();
    $request->targetHttpsProxiesSetQuicOverrideRequest->quicOverride = TargetHttpsProxiesSetQuicOverrideRequestQuicOverrideEnum::ENABLE;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'eveniet';
    $request->key = 'quis';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'provident';
    $request->quotaUser = 'optio';
    $request->requestId = 'exercitationem';
    $request->targetHttpsProxy = 'consequatur';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'quam';
    $request->userIp = 'sunt';

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
        'a',
    ];
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'maiores';
    $request->fields = 'voluptatem';
    $request->key = 'tempore';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->project = 'voluptates';
    $request->quotaUser = 'enim';
    $request->requestId = 'enim';
    $request->targetHttpsProxy = 'officia';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'ex';
    $request->userIp = 'voluptatum';

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
    $request->sslPolicyReference->sslPolicy = 'veritatis';
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quisquam';
    $request->fields = 'iste';
    $request->key = 'quam';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->project = 'doloremque';
    $request->quotaUser = 'ullam';
    $request->requestId = 'hic';
    $request->targetHttpsProxy = 'asperiores';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'sint';
    $request->userIp = 'odio';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->urlMapReference = new UrlMapReference();
    $request->urlMapReference->urlMap = 'exercitationem';
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vel';
    $request->fields = 'ex';
    $request->key = 'non';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'in';
    $request->quotaUser = 'vero';
    $request->requestId = 'reprehenderit';
    $request->targetHttpsProxy = 'dignissimos';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'mollitia';
    $request->userIp = 'nihil';

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
