# regionTargetHttpsProxies

### Available Operations

* [computeRegionTargetHttpsProxiesDelete](#computeregiontargethttpsproxiesdelete) - Deletes the specified TargetHttpsProxy resource.
* [computeRegionTargetHttpsProxiesGet](#computeregiontargethttpsproxiesget) - Returns the specified TargetHttpsProxy resource in the specified region.
* [computeRegionTargetHttpsProxiesInsert](#computeregiontargethttpsproxiesinsert) - Creates a TargetHttpsProxy resource in the specified project and region using the data included in the request.
* [computeRegionTargetHttpsProxiesList](#computeregiontargethttpsproxieslist) - Retrieves the list of TargetHttpsProxy resources available to the specified project in the specified region.
* [computeRegionTargetHttpsProxiesPatch](#computeregiontargethttpsproxiespatch) - Patches the specified regional TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeRegionTargetHttpsProxiesSetSslCertificates](#computeregiontargethttpsproxiessetsslcertificates) - Replaces SslCertificates for TargetHttpsProxy.
* [computeRegionTargetHttpsProxiesSetUrlMap](#computeregiontargethttpsproxiesseturlmap) - Changes the URL map for TargetHttpsProxy.

## computeRegionTargetHttpsProxiesDelete

Deletes the specified TargetHttpsProxy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetHttpsProxiesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'similique';
    $request->key = 'veniam';
    $request->oauthToken = 'sit';
    $request->prettyPrint = false;
    $request->project = 'quas';
    $request->quotaUser = 'soluta';
    $request->region = 'quibusdam';
    $request->requestId = 'dolor';
    $request->targetHttpsProxy = 'rem';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'optio';
    $request->userIp = 'sed';

    $requestSecurity = new ComputeRegionTargetHttpsProxiesDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetHttpsProxiesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetHttpsProxies->computeRegionTargetHttpsProxiesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetHttpsProxiesGet

Returns the specified TargetHttpsProxy resource in the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetHttpsProxiesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'animi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'fugiat';
    $request->key = 'illum';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->project = 'beatae';
    $request->quotaUser = 'quidem';
    $request->region = 'assumenda';
    $request->targetHttpsProxy = 'repellendus';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'mollitia';
    $request->userIp = 'ipsum';

    $requestSecurity = new ComputeRegionTargetHttpsProxiesGetSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetHttpsProxiesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetHttpsProxies->computeRegionTargetHttpsProxiesGet($request, $requestSecurity);

    if ($response->targetHttpsProxy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetHttpsProxiesInsert

Creates a TargetHttpsProxy resource in the specified project and region using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetHttpsProxy;
use \OpenAPI\OpenAPI\Models\Shared\TargetHttpsProxyQuicOverrideEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetHttpsProxiesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetHttpsProxy = new TargetHttpsProxy();
    $request->targetHttpsProxy->authorizationPolicy = 'cum';
    $request->targetHttpsProxy->certificateMap = 'odio';
    $request->targetHttpsProxy->creationTimestamp = 'cum';
    $request->targetHttpsProxy->description = 'perspiciatis';
    $request->targetHttpsProxy->fingerprint = 'beatae';
    $request->targetHttpsProxy->id = 'labore';
    $request->targetHttpsProxy->kind = 'modi';
    $request->targetHttpsProxy->name = 'Luke Turner';
    $request->targetHttpsProxy->proxyBind = false;
    $request->targetHttpsProxy->quicOverride = TargetHttpsProxyQuicOverrideEnum::NONE;
    $request->targetHttpsProxy->region = 'perferendis';
    $request->targetHttpsProxy->selfLink = 'deleniti';
    $request->targetHttpsProxy->serverTlsPolicy = 'totam';
    $request->targetHttpsProxy->sslCertificates = [
        'labore',
        'vitae',
        'deleniti',
        'tempore',
    ];
    $request->targetHttpsProxy->sslPolicy = 'libero';
    $request->targetHttpsProxy->urlMap = 'quam';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'ut';
    $request->key = 'repellat';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->project = 'dolores';
    $request->quotaUser = 'ratione';
    $request->region = 'pariatur';
    $request->requestId = 'ipsam';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'adipisci';
    $request->userIp = 'sint';

    $requestSecurity = new ComputeRegionTargetHttpsProxiesInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetHttpsProxiesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetHttpsProxies->computeRegionTargetHttpsProxiesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetHttpsProxiesList

Retrieves the list of TargetHttpsProxy resources available to the specified project in the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetHttpsProxiesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ratione';
    $request->fields = 'in';
    $request->filter = 'nihil';
    $request->key = 'dolorum';
    $request->maxResults = 789394;
    $request->oauthToken = 'voluptas';
    $request->orderBy = 'impedit';
    $request->pageToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'ducimus';
    $request->region = 'officiis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'velit';
    $request->userIp = 'nam';

    $requestSecurity = new ComputeRegionTargetHttpsProxiesListSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetHttpsProxiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetHttpsProxies->computeRegionTargetHttpsProxiesList($request, $requestSecurity);

    if ($response->targetHttpsProxyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetHttpsProxiesPatch

Patches the specified regional TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetHttpsProxy;
use \OpenAPI\OpenAPI\Models\Shared\TargetHttpsProxyQuicOverrideEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetHttpsProxiesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetHttpsProxy1 = new TargetHttpsProxy();
    $request->targetHttpsProxy1->authorizationPolicy = 'id';
    $request->targetHttpsProxy1->certificateMap = 'sequi';
    $request->targetHttpsProxy1->creationTimestamp = 'optio';
    $request->targetHttpsProxy1->description = 'minima';
    $request->targetHttpsProxy1->fingerprint = 'fugit';
    $request->targetHttpsProxy1->id = 'amet';
    $request->targetHttpsProxy1->kind = 'quasi';
    $request->targetHttpsProxy1->name = 'Beatrice Ward';
    $request->targetHttpsProxy1->proxyBind = false;
    $request->targetHttpsProxy1->quicOverride = TargetHttpsProxyQuicOverrideEnum::DISABLE;
    $request->targetHttpsProxy1->region = 'quaerat';
    $request->targetHttpsProxy1->selfLink = 'impedit';
    $request->targetHttpsProxy1->serverTlsPolicy = 'deserunt';
    $request->targetHttpsProxy1->sslCertificates = [
        'alias',
        'voluptates',
        'optio',
    ];
    $request->targetHttpsProxy1->sslPolicy = 'libero';
    $request->targetHttpsProxy1->urlMap = 'voluptatum';
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'est';
    $request->fields = 'laboriosam';
    $request->key = 'ea';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->project = 'eius';
    $request->quotaUser = 'atque';
    $request->region = 'unde';
    $request->requestId = 'ut';
    $request->targetHttpsProxyPathParameter = 'magnam';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'voluptatum';
    $request->userIp = 'recusandae';

    $requestSecurity = new ComputeRegionTargetHttpsProxiesPatchSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetHttpsProxiesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetHttpsProxies->computeRegionTargetHttpsProxiesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetHttpsProxiesSetSslCertificates

Replaces SslCertificates for TargetHttpsProxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesSetSslCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionTargetHttpsProxiesSetSslCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesSetSslCertificatesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesSetSslCertificatesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesSetSslCertificatesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetHttpsProxiesSetSslCertificatesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionTargetHttpsProxiesSetSslCertificatesRequest = new RegionTargetHttpsProxiesSetSslCertificatesRequest();
    $request->regionTargetHttpsProxiesSetSslCertificatesRequest->sslCertificates = [
        'voluptatum',
    ];
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'exercitationem';
    $request->key = 'nam';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'exercitationem';
    $request->region = 'dolorem';
    $request->requestId = 'praesentium';
    $request->targetHttpsProxy = 'sed';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'ratione';
    $request->userIp = 'nesciunt';

    $requestSecurity = new ComputeRegionTargetHttpsProxiesSetSslCertificatesSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetHttpsProxiesSetSslCertificatesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetHttpsProxies->computeRegionTargetHttpsProxiesSetSslCertificates($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetHttpsProxiesSetUrlMap

Changes the URL map for TargetHttpsProxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesSetUrlMapRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesSetUrlMapSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesSetUrlMapSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesSetUrlMapSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetHttpsProxiesSetUrlMapRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->urlMapReference = new UrlMapReference();
    $request->urlMapReference->urlMap = 'nesciunt';
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloremque';
    $request->fields = 'similique';
    $request->key = 'modi';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'autem';
    $request->region = 'earum';
    $request->requestId = 'culpa';
    $request->targetHttpsProxy = 'tempora';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'molestiae';

    $requestSecurity = new ComputeRegionTargetHttpsProxiesSetUrlMapSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetHttpsProxiesSetUrlMapSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetHttpsProxies->computeRegionTargetHttpsProxiesSetUrlMap($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
