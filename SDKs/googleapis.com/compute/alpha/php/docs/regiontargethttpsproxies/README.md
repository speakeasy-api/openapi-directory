# regionTargetHttpsProxies

### Available Operations

* [computeRegionTargetHttpsProxiesDelete](#computeregiontargethttpsproxiesdelete) - Deletes the specified TargetHttpsProxy resource.
* [computeRegionTargetHttpsProxiesGet](#computeregiontargethttpsproxiesget) - Returns the specified TargetHttpsProxy resource in the specified region.
* [computeRegionTargetHttpsProxiesInsert](#computeregiontargethttpsproxiesinsert) - Creates a TargetHttpsProxy resource in the specified project and region using the data included in the request.
* [computeRegionTargetHttpsProxiesList](#computeregiontargethttpsproxieslist) - Retrieves the list of TargetHttpsProxy resources available to the specified project in the specified region.
* [computeRegionTargetHttpsProxiesPatch](#computeregiontargethttpsproxiespatch) - Patches the specified regional TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeRegionTargetHttpsProxiesSetSslCertificates](#computeregiontargethttpsproxiessetsslcertificates) - Replaces SslCertificates for TargetHttpsProxy.
* [computeRegionTargetHttpsProxiesSetUrlMap](#computeregiontargethttpsproxiesseturlmap) - Changes the URL map for TargetHttpsProxy.
* [computeRegionTargetHttpsProxiesTestIamPermissions](#computeregiontargethttpsproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'temporibus';
    $request->key = 'sint';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->project = 'odio';
    $request->quotaUser = 'dolorum';
    $request->region = 'ad';
    $request->requestId = 'soluta';
    $request->targetHttpsProxy = 'officia';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'vitae';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'ipsum';
    $request->key = 'nihil';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->project = 'temporibus';
    $request->quotaUser = 'iste';
    $request->region = 'dignissimos';
    $request->targetHttpsProxy = 'rem';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'nobis';

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
    $request->targetHttpsProxy->authentication = 'tempora';
    $request->targetHttpsProxy->authorization = 'eum';
    $request->targetHttpsProxy->authorizationPolicy = 'incidunt';
    $request->targetHttpsProxy->certificateMap = 'ducimus';
    $request->targetHttpsProxy->creationTimestamp = 'neque';
    $request->targetHttpsProxy->description = 'sequi';
    $request->targetHttpsProxy->fingerprint = 'architecto';
    $request->targetHttpsProxy->httpFilters = [
        'quod',
        'minima',
        'rerum',
    ];
    $request->targetHttpsProxy->httpKeepAliveTimeoutSec = 912906;
    $request->targetHttpsProxy->id = 'suscipit';
    $request->targetHttpsProxy->kind = 'veritatis';
    $request->targetHttpsProxy->name = 'Jacob Willms';
    $request->targetHttpsProxy->proxyBind = false;
    $request->targetHttpsProxy->quicOverride = TargetHttpsProxyQuicOverrideEnum::DISABLE;
    $request->targetHttpsProxy->region = 'odio';
    $request->targetHttpsProxy->selfLink = 'dolores';
    $request->targetHttpsProxy->selfLinkWithId = 'voluptatum';
    $request->targetHttpsProxy->serverTlsPolicy = 'reprehenderit';
    $request->targetHttpsProxy->sslCertificates = [
        'minus',
        'non',
    ];
    $request->targetHttpsProxy->sslPolicy = 'in';
    $request->targetHttpsProxy->urlMap = 'odio';
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'labore';
    $request->key = 'consectetur';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->project = 'voluptates';
    $request->quotaUser = 'impedit';
    $request->region = 'ea';
    $request->requestId = 'harum';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'placeat';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aperiam';
    $request->fields = 'nisi';
    $request->filter = 'quibusdam';
    $request->key = 'esse';
    $request->maxResults = 458046;
    $request->oauthToken = 'minus';
    $request->orderBy = 'iure';
    $request->pageToken = 'accusamus';
    $request->prettyPrint = false;
    $request->project = 'soluta';
    $request->quotaUser = 'distinctio';
    $request->region = 'nam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'itaque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetHttpsProxy1 = new TargetHttpsProxy();
    $request->targetHttpsProxy1->authentication = 'odio';
    $request->targetHttpsProxy1->authorization = 'aliquam';
    $request->targetHttpsProxy1->authorizationPolicy = 'incidunt';
    $request->targetHttpsProxy1->certificateMap = 'eligendi';
    $request->targetHttpsProxy1->creationTimestamp = 'ipsam';
    $request->targetHttpsProxy1->description = 'quidem';
    $request->targetHttpsProxy1->fingerprint = 'eum';
    $request->targetHttpsProxy1->httpFilters = [
        'enim',
        'fuga',
    ];
    $request->targetHttpsProxy1->httpKeepAliveTimeoutSec = 303714;
    $request->targetHttpsProxy1->id = 'est';
    $request->targetHttpsProxy1->kind = 'maiores';
    $request->targetHttpsProxy1->name = 'Ollie Romaguera';
    $request->targetHttpsProxy1->proxyBind = false;
    $request->targetHttpsProxy1->quicOverride = TargetHttpsProxyQuicOverrideEnum::NONE;
    $request->targetHttpsProxy1->region = 'quisquam';
    $request->targetHttpsProxy1->selfLink = 'nam';
    $request->targetHttpsProxy1->selfLinkWithId = 'quo';
    $request->targetHttpsProxy1->serverTlsPolicy = 'fuga';
    $request->targetHttpsProxy1->sslCertificates = [
        'fugit',
    ];
    $request->targetHttpsProxy1->sslPolicy = 'excepturi';
    $request->targetHttpsProxy1->urlMap = 'aspernatur';
    $request->accessToken = 'quis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'aut';
    $request->key = 'ex';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'maxime';
    $request->region = 'est';
    $request->requestId = 'distinctio';
    $request->targetHttpsProxyPathParameter = 'officiis';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'explicabo';
    $request->userIp = 'officia';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionTargetHttpsProxiesSetSslCertificatesRequest = new RegionTargetHttpsProxiesSetSslCertificatesRequest();
    $request->regionTargetHttpsProxiesSetSslCertificatesRequest->sslCertificates = [
        'asperiores',
    ];
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'animi';
    $request->fields = 'nihil';
    $request->key = 'ipsam';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'totam';
    $request->quotaUser = 'maiores';
    $request->region = 'tenetur';
    $request->requestId = 'tempora';
    $request->targetHttpsProxy = 'quaerat';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'dolores';
    $request->userIp = 'harum';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->urlMapReference = new UrlMapReference();
    $request->urlMapReference->urlMap = 'fugiat';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ducimus';
    $request->fields = 'aut';
    $request->key = 'a';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'blanditiis';
    $request->region = 'minus';
    $request->requestId = 'odit';
    $request->targetHttpsProxy = 'quas';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'harum';
    $request->userIp = 'praesentium';

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

## computeRegionTargetHttpsProxiesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpsProxiesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetHttpsProxiesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'suscipit',
    ];
    $request->accessToken = 'porro';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'doloribus';
    $request->key = 'aliquid';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->project = 'et';
    $request->quotaUser = 'voluptate';
    $request->region = 'minima';
    $request->resource = 'dignissimos';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'ratione';

    $requestSecurity = new ComputeRegionTargetHttpsProxiesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetHttpsProxiesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetHttpsProxies->computeRegionTargetHttpsProxiesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
