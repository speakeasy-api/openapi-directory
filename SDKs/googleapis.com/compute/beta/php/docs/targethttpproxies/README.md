# targetHttpProxies

### Available Operations

* [computeTargetHttpProxiesAggregatedList](#computetargethttpproxiesaggregatedlist) - Retrieves the list of all TargetHttpProxy resources, regional and global, available to the specified project.
* [computeTargetHttpProxiesDelete](#computetargethttpproxiesdelete) - Deletes the specified TargetHttpProxy resource.
* [computeTargetHttpProxiesGet](#computetargethttpproxiesget) - Returns the specified TargetHttpProxy resource.
* [computeTargetHttpProxiesInsert](#computetargethttpproxiesinsert) - Creates a TargetHttpProxy resource in the specified project using the data included in the request.
* [computeTargetHttpProxiesList](#computetargethttpproxieslist) - Retrieves the list of TargetHttpProxy resources available to the specified project.
* [computeTargetHttpProxiesPatch](#computetargethttpproxiespatch) - Patches the specified TargetHttpProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeTargetHttpProxiesSetUrlMap](#computetargethttpproxiesseturlmap) - Changes the URL map for TargetHttpProxy.
* [computeTargetHttpProxiesTestIamPermissions](#computetargethttpproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeTargetHttpProxiesAggregatedList

Retrieves the list of all TargetHttpProxy resources, regional and global, available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpProxiesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eveniet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ullam';
    $request->fields = 'voluptatibus';
    $request->filter = 'esse';
    $request->includeAllScopes = false;
    $request->key = 'odit';
    $request->maxResults = 682326;
    $request->oauthToken = 'fugiat';
    $request->orderBy = 'fuga';
    $request->pageToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'hic';
    $request->quotaUser = 'laboriosam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'perferendis';
    $request->userIp = 'eaque';

    $requestSecurity = new ComputeTargetHttpProxiesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpProxiesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpProxies->computeTargetHttpProxiesAggregatedList($request, $requestSecurity);

    if ($response->targetHttpProxyAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpProxiesDelete

Deletes the specified TargetHttpProxy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpProxiesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempore';
    $request->fields = 'placeat';
    $request->key = 'tempore';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->project = 'aperiam';
    $request->quotaUser = 'ipsum';
    $request->requestId = 'sunt';
    $request->targetHttpProxy = 'delectus';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'minus';
    $request->userIp = 'illo';

    $requestSecurity = new ComputeTargetHttpProxiesDeleteSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpProxiesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpProxies->computeTargetHttpProxiesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpProxiesGet

Returns the specified TargetHttpProxy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpProxiesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'asperiores';
    $request->fields = 'nihil';
    $request->key = 'architecto';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->quotaUser = 'culpa';
    $request->targetHttpProxy = 'molestias';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'assumenda';
    $request->userIp = 'maiores';

    $requestSecurity = new ComputeTargetHttpProxiesGetSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpProxiesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpProxies->computeTargetHttpProxiesGet($request, $requestSecurity);

    if ($response->targetHttpProxy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpProxiesInsert

Creates a TargetHttpProxy resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetHttpProxy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpProxiesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetHttpProxy = new TargetHttpProxy();
    $request->targetHttpProxy->creationTimestamp = 'quae';
    $request->targetHttpProxy->description = 'ullam';
    $request->targetHttpProxy->fingerprint = 'consequuntur';
    $request->targetHttpProxy->httpFilters = [
        'necessitatibus',
    ];
    $request->targetHttpProxy->id = 'consectetur';
    $request->targetHttpProxy->kind = 'odio';
    $request->targetHttpProxy->name = 'Annie Johnson';
    $request->targetHttpProxy->proxyBind = false;
    $request->targetHttpProxy->region = 'illo';
    $request->targetHttpProxy->selfLink = 'reprehenderit';
    $request->targetHttpProxy->urlMap = 'culpa';
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ad';
    $request->fields = 'excepturi';
    $request->key = 'suscipit';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->project = 'laborum';
    $request->quotaUser = 'dolore';
    $request->requestId = 'dicta';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'cupiditate';
    $request->userIp = 'voluptates';

    $requestSecurity = new ComputeTargetHttpProxiesInsertSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpProxiesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpProxies->computeTargetHttpProxiesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpProxiesList

Retrieves the list of TargetHttpProxy resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpProxiesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'est';
    $request->filter = 'earum';
    $request->key = 'quos';
    $request->maxResults = 804973;
    $request->oauthToken = 'nesciunt';
    $request->orderBy = 'ab';
    $request->pageToken = 'ullam';
    $request->prettyPrint = false;
    $request->project = 'consectetur';
    $request->quotaUser = 'fugit';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'ad';

    $requestSecurity = new ComputeTargetHttpProxiesListSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpProxiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpProxies->computeTargetHttpProxiesList($request, $requestSecurity);

    if ($response->targetHttpProxyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpProxiesPatch

Patches the specified TargetHttpProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetHttpProxy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpProxiesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetHttpProxy1 = new TargetHttpProxy();
    $request->targetHttpProxy1->creationTimestamp = 'eaque';
    $request->targetHttpProxy1->description = 'dolores';
    $request->targetHttpProxy1->fingerprint = 'dolores';
    $request->targetHttpProxy1->httpFilters = [
        'ut',
        'iusto',
        'sed',
    ];
    $request->targetHttpProxy1->id = 'voluptas';
    $request->targetHttpProxy1->kind = 'assumenda';
    $request->targetHttpProxy1->name = 'Everett Cartwright';
    $request->targetHttpProxy1->proxyBind = false;
    $request->targetHttpProxy1->region = 'illum';
    $request->targetHttpProxy1->selfLink = 'animi';
    $request->targetHttpProxy1->urlMap = 'optio';
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vero';
    $request->fields = 'quibusdam';
    $request->key = 'dolores';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->project = 'consequatur';
    $request->quotaUser = 'error';
    $request->requestId = 'error';
    $request->targetHttpProxyPathParameter = 'architecto';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'ea';
    $request->userIp = 'fugiat';

    $requestSecurity = new ComputeTargetHttpProxiesPatchSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpProxiesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpProxies->computeTargetHttpProxiesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpProxiesSetUrlMap

Changes the URL map for TargetHttpProxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesSetUrlMapRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesSetUrlMapSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesSetUrlMapSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesSetUrlMapSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpProxiesSetUrlMapRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->urlMapReference = new UrlMapReference();
    $request->urlMapReference->urlMap = 'reprehenderit';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'magnam';
    $request->key = 'sequi';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->quotaUser = 'unde';
    $request->requestId = 'natus';
    $request->targetHttpProxy = 'animi';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'id';
    $request->userIp = 'inventore';

    $requestSecurity = new ComputeTargetHttpProxiesSetUrlMapSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpProxiesSetUrlMapSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpProxies->computeTargetHttpProxiesSetUrlMap($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeTargetHttpProxiesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeTargetHttpProxiesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeTargetHttpProxiesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'distinctio',
        'veritatis',
        'sunt',
        'excepturi',
    ];
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'magni';
    $request->key = 'labore';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'libero';
    $request->resource = 'iure';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'inventore';
    $request->userIp = 'eaque';

    $requestSecurity = new ComputeTargetHttpProxiesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeTargetHttpProxiesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetHttpProxies->computeTargetHttpProxiesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
