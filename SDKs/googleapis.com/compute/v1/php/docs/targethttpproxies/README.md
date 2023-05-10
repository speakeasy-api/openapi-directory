# targetHttpProxies

### Available Operations

* [computeTargetHttpProxiesAggregatedList](#computetargethttpproxiesaggregatedlist) - Retrieves the list of all TargetHttpProxy resources, regional and global, available to the specified project.
* [computeTargetHttpProxiesDelete](#computetargethttpproxiesdelete) - Deletes the specified TargetHttpProxy resource.
* [computeTargetHttpProxiesGet](#computetargethttpproxiesget) - Returns the specified TargetHttpProxy resource.
* [computeTargetHttpProxiesInsert](#computetargethttpproxiesinsert) - Creates a TargetHttpProxy resource in the specified project using the data included in the request.
* [computeTargetHttpProxiesList](#computetargethttpproxieslist) - Retrieves the list of TargetHttpProxy resources available to the specified project.
* [computeTargetHttpProxiesPatch](#computetargethttpproxiespatch) - Patches the specified TargetHttpProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeTargetHttpProxiesSetUrlMap](#computetargethttpproxiesseturlmap) - Changes the URL map for TargetHttpProxy.

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
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ducimus';
    $request->fields = 'repudiandae';
    $request->filter = 'ducimus';
    $request->includeAllScopes = false;
    $request->key = 'officiis';
    $request->maxResults = 295107;
    $request->oauthToken = 'neque';
    $request->orderBy = 'molestias';
    $request->pageToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'odio';
    $request->quotaUser = 'sunt';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'non';
    $request->uploadProtocol = 'soluta';
    $request->userIp = 'similique';

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
    $request->accessToken = 'optio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'reprehenderit';
    $request->key = 'qui';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'quibusdam';
    $request->requestId = 'ex';
    $request->targetHttpProxy = 'et';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'dicta';
    $request->userIp = 'rem';

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
    $request->accessToken = 'magni';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->fields = 'maxime';
    $request->key = 'vitae';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'maxime';
    $request->quotaUser = 'vitae';
    $request->targetHttpProxy = 'blanditiis';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'ab';
    $request->userIp = 'aliquid';

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
    $request->targetHttpProxy->creationTimestamp = 'repellendus';
    $request->targetHttpProxy->description = 'in';
    $request->targetHttpProxy->fingerprint = 'praesentium';
    $request->targetHttpProxy->id = 'rerum';
    $request->targetHttpProxy->kind = 'repudiandae';
    $request->targetHttpProxy->name = 'Mr. Gina Considine';
    $request->targetHttpProxy->proxyBind = false;
    $request->targetHttpProxy->region = 'sed';
    $request->targetHttpProxy->selfLink = 'ea';
    $request->targetHttpProxy->urlMap = 'odit';
    $request->accessToken = 'quos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'ullam';
    $request->key = 'ipsa';
    $request->oauthToken = 'ratione';
    $request->prettyPrint = false;
    $request->project = 'natus';
    $request->quotaUser = 'vel';
    $request->requestId = 'aspernatur';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'eum';
    $request->userIp = 'esse';

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
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nam';
    $request->fields = 'neque';
    $request->filter = 'laborum';
    $request->key = 'autem';
    $request->maxResults = 327373;
    $request->oauthToken = 'ipsa';
    $request->orderBy = 'qui';
    $request->pageToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'rerum';
    $request->quotaUser = 'inventore';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'molestiae';
    $request->userIp = 'voluptatibus';

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
    $request->targetHttpProxy1->creationTimestamp = 'libero';
    $request->targetHttpProxy1->description = 'nobis';
    $request->targetHttpProxy1->fingerprint = 'laboriosam';
    $request->targetHttpProxy1->id = 'recusandae';
    $request->targetHttpProxy1->kind = 'repellat';
    $request->targetHttpProxy1->name = 'Nicole Murazik IV';
    $request->targetHttpProxy1->proxyBind = false;
    $request->targetHttpProxy1->region = 'molestiae';
    $request->targetHttpProxy1->selfLink = 'sunt';
    $request->targetHttpProxy1->urlMap = 'at';
    $request->accessToken = 'unde';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->fields = 'voluptas';
    $request->key = 'autem';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'ducimus';
    $request->requestId = 'vero';
    $request->targetHttpProxyPathParameter = 'repudiandae';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'illo';
    $request->userIp = 'commodi';

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
    $request->urlMapReference->urlMap = 'nam';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->fields = 'facilis';
    $request->key = 'sed';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'dolores';
    $request->quotaUser = 'dolores';
    $request->requestId = 'distinctio';
    $request->targetHttpProxy = 'modi';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'perspiciatis';
    $request->userIp = 'totam';

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
