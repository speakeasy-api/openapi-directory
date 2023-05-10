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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'aliquid';
    $request->filter = 'facilis';
    $request->includeAllScopes = false;
    $request->key = 'cum';
    $request->maxResults = 445960;
    $request->oauthToken = 'voluptatum';
    $request->orderBy = 'error';
    $request->pageToken = 'id';
    $request->prettyPrint = false;
    $request->project = 'in';
    $request->quotaUser = 'sequi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'doloremque';
    $request->userIp = 'nobis';

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
    $request->accessToken = 'at';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eius';
    $request->fields = 'rerum';
    $request->key = 'laborum';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'eos';
    $request->quotaUser = 'minus';
    $request->requestId = 'sed';
    $request->targetHttpsProxy = 'ex';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'eius';
    $request->userIp = 'unde';

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
    $request->accessToken = 'quis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'molestiae';
    $request->key = 'explicabo';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->project = 'pariatur';
    $request->quotaUser = 'exercitationem';
    $request->targetHttpsProxy = 'sit';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'ea';
    $request->userIp = 'numquam';

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
    $request->targetHttpsProxy->authentication = 'aspernatur';
    $request->targetHttpsProxy->authorization = 'eligendi';
    $request->targetHttpsProxy->authorizationPolicy = 'excepturi';
    $request->targetHttpsProxy->certificateMap = 'excepturi';
    $request->targetHttpsProxy->creationTimestamp = 'repudiandae';
    $request->targetHttpsProxy->description = 'laborum';
    $request->targetHttpsProxy->fingerprint = 'mollitia';
    $request->targetHttpsProxy->httpFilters = [
        'id',
        'eligendi',
        'nulla',
        'magni',
    ];
    $request->targetHttpsProxy->httpKeepAliveTimeoutSec = 700121;
    $request->targetHttpsProxy->id = 'atque';
    $request->targetHttpsProxy->kind = 'voluptas';
    $request->targetHttpsProxy->name = 'Ms. Jody Turner';
    $request->targetHttpsProxy->proxyBind = false;
    $request->targetHttpsProxy->quicOverride = TargetHttpsProxyQuicOverrideEnum::NONE;
    $request->targetHttpsProxy->region = 'praesentium';
    $request->targetHttpsProxy->selfLink = 'quae';
    $request->targetHttpsProxy->selfLinkWithId = 'corrupti';
    $request->targetHttpsProxy->serverTlsPolicy = 'sunt';
    $request->targetHttpsProxy->sslCertificates = [
        'accusantium',
        'fuga',
        'quidem',
        'inventore',
    ];
    $request->targetHttpsProxy->sslPolicy = 'eum';
    $request->targetHttpsProxy->urlMap = 'numquam';
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'et';
    $request->key = 'labore';
    $request->oauthToken = 'eius';
    $request->prettyPrint = false;
    $request->project = 'cupiditate';
    $request->quotaUser = 'eius';
    $request->requestId = 'repellendus';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'libero';
    $request->userIp = 'eaque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'totam';
    $request->filter = 'illo';
    $request->key = 'id';
    $request->maxResults = 458401;
    $request->oauthToken = 'maiores';
    $request->orderBy = 'voluptatum';
    $request->pageToken = 'natus';
    $request->prettyPrint = false;
    $request->project = 'reiciendis';
    $request->quotaUser = 'dignissimos';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'at';
    $request->uploadProtocol = 'perspiciatis';
    $request->userIp = 'itaque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetHttpsProxy1 = new TargetHttpsProxy();
    $request->targetHttpsProxy1->authentication = 'tempora';
    $request->targetHttpsProxy1->authorization = 'non';
    $request->targetHttpsProxy1->authorizationPolicy = 'sed';
    $request->targetHttpsProxy1->certificateMap = 'nobis';
    $request->targetHttpsProxy1->creationTimestamp = 'officia';
    $request->targetHttpsProxy1->description = 'reprehenderit';
    $request->targetHttpsProxy1->fingerprint = 'nesciunt';
    $request->targetHttpsProxy1->httpFilters = [
        'cupiditate',
    ];
    $request->targetHttpsProxy1->httpKeepAliveTimeoutSec = 131671;
    $request->targetHttpsProxy1->id = 'sequi';
    $request->targetHttpsProxy1->kind = 'error';
    $request->targetHttpsProxy1->name = 'Grace Kirlin';
    $request->targetHttpsProxy1->proxyBind = false;
    $request->targetHttpsProxy1->quicOverride = TargetHttpsProxyQuicOverrideEnum::NONE;
    $request->targetHttpsProxy1->region = 'quasi';
    $request->targetHttpsProxy1->selfLink = 'delectus';
    $request->targetHttpsProxy1->selfLinkWithId = 'quos';
    $request->targetHttpsProxy1->serverTlsPolicy = 'consequatur';
    $request->targetHttpsProxy1->sslCertificates = [
        'nulla',
        'numquam',
    ];
    $request->targetHttpsProxy1->sslPolicy = 'eveniet';
    $request->targetHttpsProxy1->urlMap = 'dolores';
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sint';
    $request->fields = 'necessitatibus';
    $request->key = 'iure';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'commodi';
    $request->quotaUser = 'fugit';
    $request->requestId = 'molestiae';
    $request->targetHttpsProxyPathParameter = 'totam';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'quod';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetHttpsProxiesSetCertificateMapRequest = new TargetHttpsProxiesSetCertificateMapRequest();
    $request->targetHttpsProxiesSetCertificateMapRequest->certificateMap = 'inventore';
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'tempore';
    $request->key = 'mollitia';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'amet';
    $request->requestId = 'reiciendis';
    $request->targetHttpsProxy = 'esse';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'possimus';
    $request->userIp = 'autem';

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
    $request->targetHttpsProxiesSetQuicOverrideRequest->quicOverride = TargetHttpsProxiesSetQuicOverrideRequestQuicOverrideEnum::DISABLE;
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'atque';
    $request->fields = 'libero';
    $request->key = 'eum';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'ratione';
    $request->quotaUser = 'ipsa';
    $request->requestId = 'tempora';
    $request->targetHttpsProxy = 'dolor';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'autem';
    $request->userIp = 'quisquam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetHttpsProxiesSetSslCertificatesRequest = new TargetHttpsProxiesSetSslCertificatesRequest();
    $request->targetHttpsProxiesSetSslCertificatesRequest->sslCertificates = [
        'consequatur',
        'illum',
    ];
    $request->accessToken = 'atque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'doloribus';
    $request->key = 'veniam';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->project = 'eum';
    $request->quotaUser = 'accusantium';
    $request->requestId = 'esse';
    $request->targetHttpsProxy = 'numquam';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'non';
    $request->userIp = 'veritatis';

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
    $request->sslPolicyReference->sslPolicy = 'quia';
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'harum';
    $request->fields = 'laboriosam';
    $request->key = 'odit';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'impedit';
    $request->requestId = 'dolor';
    $request->targetHttpsProxy = 'cupiditate';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'corrupti';
    $request->userIp = 'possimus';

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
    $request->urlMapReference->urlMap = 'voluptas';
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestias';
    $request->fields = 'iure';
    $request->key = 'laudantium';
    $request->oauthToken = 'voluptates';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'similique';
    $request->requestId = 'porro';
    $request->targetHttpsProxy = 'non';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'eaque';
    $request->userIp = 'qui';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'quisquam',
        'veniam',
        'tempore',
    ];
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aperiam';
    $request->fields = 'delectus';
    $request->key = 'autem';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'hic';
    $request->quotaUser = 'repudiandae';
    $request->resource = 'harum';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'possimus';
    $request->userIp = 'dolorem';

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
