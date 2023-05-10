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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sunt';
    $request->fields = 'dolor';
    $request->key = 'quisquam';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->project = 'laudantium';
    $request->quotaUser = 'laboriosam';
    $request->region = 'repellendus';
    $request->requestId = 'quos';
    $request->targetHttpsProxy = 'neque';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'earum';
    $request->userIp = 'eligendi';

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
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'enim';
    $request->key = 'reiciendis';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->project = 'similique';
    $request->quotaUser = 'iste';
    $request->region = 'consequatur';
    $request->targetHttpsProxy = 'autem';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'voluptates';
    $request->userIp = 'enim';

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
    $request->targetHttpsProxy->authentication = 'error';
    $request->targetHttpsProxy->authorization = 'soluta';
    $request->targetHttpsProxy->authorizationPolicy = 'nihil';
    $request->targetHttpsProxy->certificateMap = 'fugit';
    $request->targetHttpsProxy->creationTimestamp = 'debitis';
    $request->targetHttpsProxy->description = 'quidem';
    $request->targetHttpsProxy->fingerprint = 'vel';
    $request->targetHttpsProxy->httpFilters = [
        'magnam',
        'vel',
    ];
    $request->targetHttpsProxy->id = 'accusantium';
    $request->targetHttpsProxy->kind = 'consectetur';
    $request->targetHttpsProxy->name = 'Ms. Ora Thompson';
    $request->targetHttpsProxy->proxyBind = false;
    $request->targetHttpsProxy->quicOverride = TargetHttpsProxyQuicOverrideEnum::ENABLE;
    $request->targetHttpsProxy->region = 'voluptas';
    $request->targetHttpsProxy->selfLink = 'eligendi';
    $request->targetHttpsProxy->serverTlsPolicy = 'explicabo';
    $request->targetHttpsProxy->sslCertificates = [
        'earum',
        'at',
        'eveniet',
    ];
    $request->targetHttpsProxy->sslPolicy = 'vero';
    $request->targetHttpsProxy->urlMap = 'iure';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perspiciatis';
    $request->fields = 'quae';
    $request->key = 'recusandae';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->project = 'doloremque';
    $request->quotaUser = 'porro';
    $request->region = 'inventore';
    $request->requestId = 'nisi';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'molestiae';
    $request->userIp = 'harum';

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
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'tempora';
    $request->filter = 'alias';
    $request->key = 'magnam';
    $request->maxResults = 281698;
    $request->oauthToken = 'totam';
    $request->orderBy = 'unde';
    $request->pageToken = 'repellat';
    $request->prettyPrint = false;
    $request->project = 'voluptas';
    $request->quotaUser = 'dignissimos';
    $request->region = 'dignissimos';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'itaque';
    $request->userIp = 'earum';

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
    $request->targetHttpsProxy1->authentication = 'aliquam';
    $request->targetHttpsProxy1->authorization = 'praesentium';
    $request->targetHttpsProxy1->authorizationPolicy = 'doloremque';
    $request->targetHttpsProxy1->certificateMap = 'occaecati';
    $request->targetHttpsProxy1->creationTimestamp = 'illo';
    $request->targetHttpsProxy1->description = 'id';
    $request->targetHttpsProxy1->fingerprint = 'dolores';
    $request->targetHttpsProxy1->httpFilters = [
        'culpa',
        'fugit',
        'nemo',
    ];
    $request->targetHttpsProxy1->id = 'repudiandae';
    $request->targetHttpsProxy1->kind = 'voluptates';
    $request->targetHttpsProxy1->name = 'Brooke Kuhn';
    $request->targetHttpsProxy1->proxyBind = false;
    $request->targetHttpsProxy1->quicOverride = TargetHttpsProxyQuicOverrideEnum::NONE;
    $request->targetHttpsProxy1->region = 'voluptatum';
    $request->targetHttpsProxy1->selfLink = 'est';
    $request->targetHttpsProxy1->serverTlsPolicy = 'autem';
    $request->targetHttpsProxy1->sslCertificates = [
        'laborum',
    ];
    $request->targetHttpsProxy1->sslPolicy = 'quam';
    $request->targetHttpsProxy1->urlMap = 'laborum';
    $request->accessToken = 'eveniet';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolore';
    $request->fields = 'vel';
    $request->key = 'recusandae';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->project = 'iste';
    $request->quotaUser = 'esse';
    $request->region = 'cupiditate';
    $request->requestId = 'debitis';
    $request->targetHttpsProxyPathParameter = 'nemo';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'sapiente';
    $request->userIp = 'debitis';

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
        'culpa',
    ];
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quisquam';
    $request->fields = 'deserunt';
    $request->key = 'nisi';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'nemo';
    $request->quotaUser = 'pariatur';
    $request->region = 'repudiandae';
    $request->requestId = 'perspiciatis';
    $request->targetHttpsProxy = 'atque';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'voluptate';
    $request->userIp = 'ad';

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
    $request->urlMapReference->urlMap = 'vitae';
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->fields = 'porro';
    $request->key = 'eveniet';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->project = 'quae';
    $request->quotaUser = 'voluptates';
    $request->region = 'impedit';
    $request->requestId = 'sunt';
    $request->targetHttpsProxy = 'optio';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'occaecati';
    $request->userIp = 'officia';

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
        'fuga',
        'officiis',
        'ipsam',
    ];
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'assumenda';
    $request->fields = 'nemo';
    $request->key = 'id';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->project = 'nostrum';
    $request->quotaUser = 'expedita';
    $request->region = 'tempora';
    $request->resource = 'fugiat';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'veniam';
    $request->userIp = 'ea';

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
