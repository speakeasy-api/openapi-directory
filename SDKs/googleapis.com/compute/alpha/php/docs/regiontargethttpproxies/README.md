# regionTargetHttpProxies

### Available Operations

* [computeRegionTargetHttpProxiesDelete](#computeregiontargethttpproxiesdelete) - Deletes the specified TargetHttpProxy resource.
* [computeRegionTargetHttpProxiesGet](#computeregiontargethttpproxiesget) - Returns the specified TargetHttpProxy resource in the specified region.
* [computeRegionTargetHttpProxiesInsert](#computeregiontargethttpproxiesinsert) - Creates a TargetHttpProxy resource in the specified project and region using the data included in the request.
* [computeRegionTargetHttpProxiesList](#computeregiontargethttpproxieslist) - Retrieves the list of TargetHttpProxy resources available to the specified project in the specified region.
* [computeRegionTargetHttpProxiesSetUrlMap](#computeregiontargethttpproxiesseturlmap) - Changes the URL map for TargetHttpProxy.
* [computeRegionTargetHttpProxiesTestIamPermissions](#computeregiontargethttpproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionTargetHttpProxiesDelete

Deletes the specified TargetHttpProxy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetHttpProxiesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ratione';
    $request->fields = 'magni';
    $request->key = 'vel';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'beatae';
    $request->region = 'laborum';
    $request->requestId = 'quo';
    $request->targetHttpProxy = 'eligendi';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'culpa';

    $requestSecurity = new ComputeRegionTargetHttpProxiesDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetHttpProxiesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetHttpProxies->computeRegionTargetHttpProxiesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetHttpProxiesGet

Returns the specified TargetHttpProxy resource in the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetHttpProxiesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facere';
    $request->fields = 'dolore';
    $request->key = 'officia';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'iste';
    $request->region = 'corporis';
    $request->targetHttpProxy = 'minus';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'distinctio';
    $request->userIp = 'amet';

    $requestSecurity = new ComputeRegionTargetHttpProxiesGetSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetHttpProxiesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetHttpProxies->computeRegionTargetHttpProxiesGet($request, $requestSecurity);

    if ($response->targetHttpProxy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetHttpProxiesInsert

Creates a TargetHttpProxy resource in the specified project and region using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetHttpProxy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetHttpProxiesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetHttpProxy = new TargetHttpProxy();
    $request->targetHttpProxy->creationTimestamp = 'quidem';
    $request->targetHttpProxy->description = 'soluta';
    $request->targetHttpProxy->fingerprint = 'magni';
    $request->targetHttpProxy->httpFilters = [
        'consectetur',
    ];
    $request->targetHttpProxy->httpKeepAliveTimeoutSec = 917755;
    $request->targetHttpProxy->id = 'nesciunt';
    $request->targetHttpProxy->kind = 'harum';
    $request->targetHttpProxy->name = 'Gloria Sawayn';
    $request->targetHttpProxy->proxyBind = false;
    $request->targetHttpProxy->region = 'dolorum';
    $request->targetHttpProxy->selfLink = 'exercitationem';
    $request->targetHttpProxy->selfLinkWithId = 'expedita';
    $request->targetHttpProxy->urlMap = 'repudiandae';
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'doloremque';
    $request->key = 'vel';
    $request->oauthToken = 'expedita';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'vel';
    $request->region = 'quisquam';
    $request->requestId = 'iure';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'vel';
    $request->userIp = 'vero';

    $requestSecurity = new ComputeRegionTargetHttpProxiesInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetHttpProxiesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetHttpProxies->computeRegionTargetHttpProxiesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetHttpProxiesList

Retrieves the list of TargetHttpProxy resources available to the specified project in the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetHttpProxiesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fugit';
    $request->fields = 'totam';
    $request->filter = 'culpa';
    $request->key = 'quaerat';
    $request->maxResults = 524410;
    $request->oauthToken = 'et';
    $request->orderBy = 'dolore';
    $request->pageToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'similique';
    $request->quotaUser = 'quae';
    $request->region = 'distinctio';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'veritatis';

    $requestSecurity = new ComputeRegionTargetHttpProxiesListSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetHttpProxiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetHttpProxies->computeRegionTargetHttpProxiesList($request, $requestSecurity);

    if ($response->targetHttpProxyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetHttpProxiesSetUrlMap

Changes the URL map for TargetHttpProxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesSetUrlMapRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesSetUrlMapSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesSetUrlMapSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesSetUrlMapSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetHttpProxiesSetUrlMapRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->urlMapReference = new UrlMapReference();
    $request->urlMapReference->urlMap = 'perspiciatis';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ut';
    $request->fields = 'aut';
    $request->key = 'minima';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'dignissimos';
    $request->quotaUser = 'vel';
    $request->region = 'tempore';
    $request->requestId = 'dolorem';
    $request->targetHttpProxy = 'aut';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'iusto';
    $request->userIp = 'dicta';

    $requestSecurity = new ComputeRegionTargetHttpProxiesSetUrlMapSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetHttpProxiesSetUrlMapSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetHttpProxies->computeRegionTargetHttpProxiesSetUrlMap($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionTargetHttpProxiesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionTargetHttpProxiesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionTargetHttpProxiesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'fugiat',
    ];
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->fields = 'ex';
    $request->key = 'inventore';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'sed';
    $request->region = 'nulla';
    $request->resource = 'alias';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'corporis';
    $request->userIp = 'dolorem';

    $requestSecurity = new ComputeRegionTargetHttpProxiesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionTargetHttpProxiesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionTargetHttpProxies->computeRegionTargetHttpProxiesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
