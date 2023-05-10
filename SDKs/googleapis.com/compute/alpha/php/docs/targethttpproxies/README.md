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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'necessitatibus';
    $request->filter = 'eius';
    $request->includeAllScopes = false;
    $request->key = 'aspernatur';
    $request->maxResults = 655171;
    $request->oauthToken = 'ipsum';
    $request->orderBy = 'neque';
    $request->pageToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'ullam';
    $request->quotaUser = 'expedita';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'voluptatum';
    $request->userIp = 'eos';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->fields = 'sapiente';
    $request->key = 'nisi';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'odit';
    $request->quotaUser = 'possimus';
    $request->requestId = 'saepe';
    $request->targetHttpProxy = 'vero';
    $request->uploadType = 'illo';
    $request->uploadProtocol = 'quo';
    $request->userIp = 'rerum';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fugiat';
    $request->fields = 'itaque';
    $request->key = 'voluptatem';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'ex';
    $request->quotaUser = 'dolore';
    $request->targetHttpProxy = 'quas';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'reprehenderit';
    $request->userIp = 'odio';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetHttpProxy = new TargetHttpProxy();
    $request->targetHttpProxy->creationTimestamp = 'perspiciatis';
    $request->targetHttpProxy->description = 'harum';
    $request->targetHttpProxy->fingerprint = 'asperiores';
    $request->targetHttpProxy->httpFilters = [
        'aspernatur',
        'labore',
        'et',
        'fuga',
    ];
    $request->targetHttpProxy->httpKeepAliveTimeoutSec = 426318;
    $request->targetHttpProxy->id = 'sed';
    $request->targetHttpProxy->kind = 'nobis';
    $request->targetHttpProxy->name = 'Wesley Yost';
    $request->targetHttpProxy->proxyBind = false;
    $request->targetHttpProxy->region = 'officiis';
    $request->targetHttpProxy->selfLink = 'in';
    $request->targetHttpProxy->selfLinkWithId = 'minus';
    $request->targetHttpProxy->urlMap = 'suscipit';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'in';
    $request->fields = 'recusandae';
    $request->key = 'accusantium';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->project = 'magni';
    $request->quotaUser = 'optio';
    $request->requestId = 'impedit';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'dolores';
    $request->userIp = 'natus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'qui';
    $request->fields = 'quia';
    $request->filter = 'tempora';
    $request->key = 'voluptates';
    $request->maxResults = 181742;
    $request->oauthToken = 'ipsa';
    $request->orderBy = 'aperiam';
    $request->pageToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->project = 'nemo';
    $request->quotaUser = 'vitae';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'necessitatibus';
    $request->userIp = 'laboriosam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetHttpProxy1 = new TargetHttpProxy();
    $request->targetHttpProxy1->creationTimestamp = 'nemo';
    $request->targetHttpProxy1->description = 'quisquam';
    $request->targetHttpProxy1->fingerprint = 'labore';
    $request->targetHttpProxy1->httpFilters = [
        'quidem',
        'tempore',
    ];
    $request->targetHttpProxy1->httpKeepAliveTimeoutSec = 423563;
    $request->targetHttpProxy1->id = 'fugiat';
    $request->targetHttpProxy1->kind = 'quas';
    $request->targetHttpProxy1->name = 'Mrs. Darren Jacobson';
    $request->targetHttpProxy1->proxyBind = false;
    $request->targetHttpProxy1->region = 'ipsa';
    $request->targetHttpProxy1->selfLink = 'temporibus';
    $request->targetHttpProxy1->selfLinkWithId = 'aut';
    $request->targetHttpProxy1->urlMap = 'officiis';
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'vero';
    $request->key = 'sed';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'at';
    $request->quotaUser = 'natus';
    $request->requestId = 'officia';
    $request->targetHttpProxyPathParameter = 'doloribus';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'doloribus';
    $request->userIp = 'ullam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->urlMapReference = new UrlMapReference();
    $request->urlMapReference->urlMap = 'nostrum';
    $request->accessToken = 'id';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'officiis';
    $request->key = 'facilis';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->project = 'minus';
    $request->quotaUser = 'perferendis';
    $request->requestId = 'odio';
    $request->targetHttpProxy = 'fugit';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'quibusdam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'possimus',
        'delectus',
    ];
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veniam';
    $request->fields = 'reprehenderit';
    $request->key = 'odio';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'aperiam';
    $request->quotaUser = 'dolorem';
    $request->resource = 'sequi';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'similique';

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
