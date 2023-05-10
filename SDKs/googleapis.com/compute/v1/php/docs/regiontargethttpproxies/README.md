# regionTargetHttpProxies

### Available Operations

* [computeRegionTargetHttpProxiesDelete](#computeregiontargethttpproxiesdelete) - Deletes the specified TargetHttpProxy resource.
* [computeRegionTargetHttpProxiesGet](#computeregiontargethttpproxiesget) - Returns the specified TargetHttpProxy resource in the specified region.
* [computeRegionTargetHttpProxiesInsert](#computeregiontargethttpproxiesinsert) - Creates a TargetHttpProxy resource in the specified project and region using the data included in the request.
* [computeRegionTargetHttpProxiesList](#computeregiontargethttpproxieslist) - Retrieves the list of TargetHttpProxy resources available to the specified project in the specified region.
* [computeRegionTargetHttpProxiesSetUrlMap](#computeregiontargethttpproxiesseturlmap) - Changes the URL map for TargetHttpProxy.

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quo';
    $request->fields = 'maiores';
    $request->key = 'maxime';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->project = 'quisquam';
    $request->quotaUser = 'eaque';
    $request->region = 'officiis';
    $request->requestId = 'corporis';
    $request->targetHttpProxy = 'eaque';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'quis';

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
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'illo';
    $request->fields = 'reiciendis';
    $request->key = 'et';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->project = 'molestias';
    $request->quotaUser = 'itaque';
    $request->region = 'at';
    $request->targetHttpProxy = 'rem';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'nobis';
    $request->userIp = 'qui';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetHttpProxy = new TargetHttpProxy();
    $request->targetHttpProxy->creationTimestamp = 'recusandae';
    $request->targetHttpProxy->description = 'atque';
    $request->targetHttpProxy->fingerprint = 'deserunt';
    $request->targetHttpProxy->id = 'a';
    $request->targetHttpProxy->kind = 'culpa';
    $request->targetHttpProxy->name = 'Israel Mante';
    $request->targetHttpProxy->proxyBind = false;
    $request->targetHttpProxy->region = 'necessitatibus';
    $request->targetHttpProxy->selfLink = 'consequuntur';
    $request->targetHttpProxy->urlMap = 'aliquam';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->fields = 'dolorem';
    $request->key = 'quidem';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->project = 'ratione';
    $request->quotaUser = 'ut';
    $request->region = 'explicabo';
    $request->requestId = 'dolore';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'molestiae';
    $request->userIp = 'illum';

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
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nesciunt';
    $request->fields = 'sapiente';
    $request->filter = 'nisi';
    $request->key = 'explicabo';
    $request->maxResults = 629486;
    $request->oauthToken = 'culpa';
    $request->orderBy = 'cupiditate';
    $request->pageToken = 'culpa';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'labore';
    $request->region = 'fuga';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'molestias';
    $request->userIp = 'animi';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->urlMapReference = new UrlMapReference();
    $request->urlMapReference->urlMap = 'numquam';
    $request->accessToken = 'id';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cumque';
    $request->fields = 'dolore';
    $request->key = 'sint';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->project = 'maxime';
    $request->quotaUser = 'exercitationem';
    $request->region = 'necessitatibus';
    $request->requestId = 'deleniti';
    $request->targetHttpProxy = 'quidem';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'corporis';
    $request->userIp = 'repellendus';

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
