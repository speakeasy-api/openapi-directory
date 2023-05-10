# urlMaps

### Available Operations

* [computeUrlMapsAggregatedList](#computeurlmapsaggregatedlist) - Retrieves the list of all UrlMap resources, regional and global, available to the specified project.
* [computeUrlMapsDelete](#computeurlmapsdelete) - Deletes the specified UrlMap resource.
* [computeUrlMapsGet](#computeurlmapsget) - Returns the specified UrlMap resource.
* [computeUrlMapsInsert](#computeurlmapsinsert) - Creates a UrlMap resource in the specified project using the data included in the request.
* [computeUrlMapsInvalidateCache](#computeurlmapsinvalidatecache) - Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap. For more information, see [Invalidating cached content](/cdn/docs/invalidating-cached-content).
* [computeUrlMapsList](#computeurlmapslist) - Retrieves the list of UrlMap resources available to the specified project.
* [computeUrlMapsPatch](#computeurlmapspatch) - Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeUrlMapsUpdate](#computeurlmapsupdate) - Updates the specified UrlMap resource with the data included in the request.
* [computeUrlMapsValidate](#computeurlmapsvalidate) - Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.

## computeUrlMapsAggregatedList

Retrieves the list of all UrlMap resources, regional and global, available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeUrlMapsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'exercitationem';
    $request->fields = 'optio';
    $request->filter = 'aperiam';
    $request->includeAllScopes = false;
    $request->key = 'optio';
    $request->maxResults = 702498;
    $request->oauthToken = 'eligendi';
    $request->orderBy = 'tempore';
    $request->pageToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'quod';
    $request->quotaUser = 'mollitia';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'iusto';
    $request->userIp = 'sint';

    $requestSecurity = new ComputeUrlMapsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeUrlMapsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlMaps->computeUrlMapsAggregatedList($request, $requestSecurity);

    if ($response->urlMapsAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeUrlMapsDelete

Deletes the specified UrlMap resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeUrlMapsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'ipsum';
    $request->key = 'corrupti';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->project = 'iste';
    $request->quotaUser = 'deserunt';
    $request->requestId = 'aut';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'doloribus';
    $request->urlMap = 'quae';
    $request->userIp = 'eum';

    $requestSecurity = new ComputeUrlMapsDeleteSecurity();
    $requestSecurity->option1 = new ComputeUrlMapsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlMaps->computeUrlMapsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeUrlMapsGet

Returns the specified UrlMap resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeUrlMapsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'unde';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'totam';
    $request->key = 'cum';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->project = 'ex';
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'enim';
    $request->urlMap = 'similique';
    $request->userIp = 'exercitationem';

    $requestSecurity = new ComputeUrlMapsGetSecurity();
    $requestSecurity->option1 = new ComputeUrlMapsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlMaps->computeUrlMapsGet($request, $requestSecurity);

    if ($response->urlMap !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeUrlMapsInsert

Creates a UrlMap resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlMap;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\CorsPolicy;
use \OpenAPI\OpenAPI\Models\Shared\HttpFaultInjection;
use \OpenAPI\OpenAPI\Models\Shared\HttpFaultAbort;
use \OpenAPI\OpenAPI\Models\Shared\HttpFaultDelay;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\RequestMirrorPolicy;
use \OpenAPI\OpenAPI\Models\Shared\HttpRetryPolicy;
use \OpenAPI\OpenAPI\Models\Shared\UrlRewrite;
use \OpenAPI\OpenAPI\Models\Shared\WeightedBackendService;
use \OpenAPI\OpenAPI\Models\Shared\HttpHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpHeaderOption;
use \OpenAPI\OpenAPI\Models\Shared\HttpRedirectAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpRedirectActionRedirectResponseCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HostRule;
use \OpenAPI\OpenAPI\Models\Shared\PathMatcher;
use \OpenAPI\OpenAPI\Models\Shared\PathRule;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteRule;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteRuleMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpHeaderMatch;
use \OpenAPI\OpenAPI\Models\Shared\Int64RangeMatch;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilter;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilterLabelMatch;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilterFilterMatchCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpQueryParameterMatch;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapTest;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapTestHeader;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeUrlMapsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->urlMap = new UrlMap();
    $request->urlMap->creationTimestamp = 'dignissimos';
    $request->urlMap->defaultRouteAction = new HttpRouteAction();
    $request->urlMap->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap->defaultRouteAction->corsPolicy->allowHeaders = [
        'facilis',
        'officiis',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowMethods = [
        'cum',
        'totam',
        'laborum',
        'hic',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'rem',
        'ut',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowOrigins = [
        'possimus',
        'odit',
        'harum',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap->defaultRouteAction->corsPolicy->exposeHeaders = [
        'iste',
        'eius',
        'consequatur',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->maxAge = 274048;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 206024;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort->percentage = 4338.78;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 240512;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'mollitia';
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->percentage = 233.98;
    $request->urlMap->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap->defaultRouteAction->maxStreamDuration->nanos = 617330;
    $request->urlMap->defaultRouteAction->maxStreamDuration->seconds = 'nisi';
    $request->urlMap->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap->defaultRouteAction->requestMirrorPolicy->backendService = 'aliquam';
    $request->urlMap->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap->defaultRouteAction->retryPolicy->numRetries = 770034;
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 28751;
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'ipsam';
    $request->urlMap->defaultRouteAction->retryPolicy->retryConditions = [
        'praesentium',
    ];
    $request->urlMap->defaultRouteAction->timeout = new Duration();
    $request->urlMap->defaultRouteAction->timeout->nanos = 452831;
    $request->urlMap->defaultRouteAction->timeout->seconds = 'ea';
    $request->urlMap->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap->defaultRouteAction->urlRewrite->hostRewrite = 'eveniet';
    $request->urlMap->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'ratione';
    $request->urlMap->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMap->defaultService = 'fugiat';
    $request->urlMap->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap->defaultUrlRedirect->hostRedirect = 'vero';
    $request->urlMap->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap->defaultUrlRedirect->pathRedirect = 'tenetur';
    $request->urlMap->defaultUrlRedirect->prefixRedirect = 'perspiciatis';
    $request->urlMap->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::SEE_OTHER;
    $request->urlMap->defaultUrlRedirect->stripQuery = false;
    $request->urlMap->description = 'reprehenderit';
    $request->urlMap->fingerprint = 'suscipit';
    $request->urlMap->headerAction = new HttpHeaderAction();
    $request->urlMap->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap->headerAction->requestHeadersToRemove = [
        'reiciendis',
        'fugiat',
        'iusto',
        'ipsum',
    ];
    $request->urlMap->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap->headerAction->responseHeadersToRemove = [
        'eveniet',
        'veniam',
    ];
    $request->urlMap->hostRules = [
        new HostRule(),
        new HostRule(),
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMap->id = 'nam';
    $request->urlMap->kind = 'provident';
    $request->urlMap->name = 'Sonia Kiehn Sr.';
    $request->urlMap->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->urlMap->region = 'harum';
    $request->urlMap->selfLink = 'quia';
    $request->urlMap->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eius';
    $request->fields = 'libero';
    $request->key = 'soluta';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->project = 'eum';
    $request->quotaUser = 'quod';
    $request->requestId = 'laborum';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'eveniet';
    $request->userIp = 'cupiditate';

    $requestSecurity = new ComputeUrlMapsInsertSecurity();
    $requestSecurity->option1 = new ComputeUrlMapsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlMaps->computeUrlMapsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeUrlMapsInvalidateCache

Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap. For more information, see [Invalidating cached content](/cdn/docs/invalidating-cached-content).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsInvalidateCacheRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CacheInvalidationRule;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsInvalidateCacheSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsInvalidateCacheSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsInvalidateCacheSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeUrlMapsInvalidateCacheRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->cacheInvalidationRule = new CacheInvalidationRule();
    $request->cacheInvalidationRule->host = 'excepturi';
    $request->cacheInvalidationRule->path = 'quos';
    $request->accessToken = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'iste';
    $request->key = 'possimus';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->project = 'reiciendis';
    $request->quotaUser = 'optio';
    $request->requestId = 'perferendis';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'fugit';
    $request->urlMap = 'velit';
    $request->userIp = 'natus';

    $requestSecurity = new ComputeUrlMapsInvalidateCacheSecurity();
    $requestSecurity->option1 = new ComputeUrlMapsInvalidateCacheSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlMaps->computeUrlMapsInvalidateCache($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeUrlMapsList

Retrieves the list of UrlMap resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeUrlMapsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eligendi';
    $request->fields = 'doloribus';
    $request->filter = 'cupiditate';
    $request->key = 'aut';
    $request->maxResults = 672865;
    $request->oauthToken = 'facere';
    $request->orderBy = 'error';
    $request->pageToken = 'atque';
    $request->prettyPrint = false;
    $request->project = 'unde';
    $request->quotaUser = 'recusandae';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'officia';
    $request->userIp = 'consectetur';

    $requestSecurity = new ComputeUrlMapsListSecurity();
    $requestSecurity->option1 = new ComputeUrlMapsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlMaps->computeUrlMapsList($request, $requestSecurity);

    if ($response->urlMapList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeUrlMapsPatch

Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlMap;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\CorsPolicy;
use \OpenAPI\OpenAPI\Models\Shared\HttpFaultInjection;
use \OpenAPI\OpenAPI\Models\Shared\HttpFaultAbort;
use \OpenAPI\OpenAPI\Models\Shared\HttpFaultDelay;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\RequestMirrorPolicy;
use \OpenAPI\OpenAPI\Models\Shared\HttpRetryPolicy;
use \OpenAPI\OpenAPI\Models\Shared\UrlRewrite;
use \OpenAPI\OpenAPI\Models\Shared\WeightedBackendService;
use \OpenAPI\OpenAPI\Models\Shared\HttpHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpHeaderOption;
use \OpenAPI\OpenAPI\Models\Shared\HttpRedirectAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpRedirectActionRedirectResponseCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HostRule;
use \OpenAPI\OpenAPI\Models\Shared\PathMatcher;
use \OpenAPI\OpenAPI\Models\Shared\PathRule;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteRule;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteRuleMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpHeaderMatch;
use \OpenAPI\OpenAPI\Models\Shared\Int64RangeMatch;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilter;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilterLabelMatch;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilterFilterMatchCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpQueryParameterMatch;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapTest;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapTestHeader;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeUrlMapsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->urlMap1 = new UrlMap();
    $request->urlMap1->creationTimestamp = 'quam';
    $request->urlMap1->defaultRouteAction = new HttpRouteAction();
    $request->urlMap1->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap1->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->allowHeaders = [
        'veniam',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowMethods = [
        'porro',
        'possimus',
        'laborum',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'quaerat',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOrigins = [
        'a',
        'officia',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->exposeHeaders = [
        'saepe',
        'illum',
        'ex',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->maxAge = 904586;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 120538;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->percentage = 1976.33;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 648467;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'aliquid';
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->percentage = 1637.26;
    $request->urlMap1->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap1->defaultRouteAction->maxStreamDuration->nanos = 60969;
    $request->urlMap1->defaultRouteAction->maxStreamDuration->seconds = 'saepe';
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy->backendService = 'fugit';
    $request->urlMap1->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap1->defaultRouteAction->retryPolicy->numRetries = 883266;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 587466;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'illo';
    $request->urlMap1->defaultRouteAction->retryPolicy->retryConditions = [
        'eligendi',
        'iure',
        'quis',
    ];
    $request->urlMap1->defaultRouteAction->timeout = new Duration();
    $request->urlMap1->defaultRouteAction->timeout->nanos = 716963;
    $request->urlMap1->defaultRouteAction->timeout->seconds = 'alias';
    $request->urlMap1->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap1->defaultRouteAction->urlRewrite->hostRewrite = 'modi';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'rem';
    $request->urlMap1->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMap1->defaultService = 'minus';
    $request->urlMap1->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap1->defaultUrlRedirect->hostRedirect = 'earum';
    $request->urlMap1->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap1->defaultUrlRedirect->pathRedirect = 'amet';
    $request->urlMap1->defaultUrlRedirect->prefixRedirect = 'excepturi';
    $request->urlMap1->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::PERMANENT_REDIRECT;
    $request->urlMap1->defaultUrlRedirect->stripQuery = false;
    $request->urlMap1->description = 'fuga';
    $request->urlMap1->fingerprint = 'voluptatem';
    $request->urlMap1->headerAction = new HttpHeaderAction();
    $request->urlMap1->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->requestHeadersToRemove = [
        'in',
    ];
    $request->urlMap1->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->responseHeadersToRemove = [
        'beatae',
        'nihil',
    ];
    $request->urlMap1->hostRules = [
        new HostRule(),
        new HostRule(),
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMap1->id = 'nulla';
    $request->urlMap1->kind = 'sint';
    $request->urlMap1->name = 'Brooke Torp II';
    $request->urlMap1->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->urlMap1->region = 'distinctio';
    $request->urlMap1->selfLink = 'necessitatibus';
    $request->urlMap1->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'neque';
    $request->fields = 'cum';
    $request->key = 'ipsum';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'eligendi';
    $request->quotaUser = 'cum';
    $request->requestId = 'corporis';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'neque';
    $request->urlMapPathParameter = 'quo';
    $request->userIp = 'amet';

    $requestSecurity = new ComputeUrlMapsPatchSecurity();
    $requestSecurity->option1 = new ComputeUrlMapsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlMaps->computeUrlMapsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeUrlMapsUpdate

Updates the specified UrlMap resource with the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlMap;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\CorsPolicy;
use \OpenAPI\OpenAPI\Models\Shared\HttpFaultInjection;
use \OpenAPI\OpenAPI\Models\Shared\HttpFaultAbort;
use \OpenAPI\OpenAPI\Models\Shared\HttpFaultDelay;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\RequestMirrorPolicy;
use \OpenAPI\OpenAPI\Models\Shared\HttpRetryPolicy;
use \OpenAPI\OpenAPI\Models\Shared\UrlRewrite;
use \OpenAPI\OpenAPI\Models\Shared\WeightedBackendService;
use \OpenAPI\OpenAPI\Models\Shared\HttpHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpHeaderOption;
use \OpenAPI\OpenAPI\Models\Shared\HttpRedirectAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpRedirectActionRedirectResponseCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HostRule;
use \OpenAPI\OpenAPI\Models\Shared\PathMatcher;
use \OpenAPI\OpenAPI\Models\Shared\PathRule;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteRule;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteRuleMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpHeaderMatch;
use \OpenAPI\OpenAPI\Models\Shared\Int64RangeMatch;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilter;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilterLabelMatch;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilterFilterMatchCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpQueryParameterMatch;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapTest;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapTestHeader;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeUrlMapsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->urlMap1 = new UrlMap();
    $request->urlMap1->creationTimestamp = 'aliquam';
    $request->urlMap1->defaultRouteAction = new HttpRouteAction();
    $request->urlMap1->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap1->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->allowHeaders = [
        'repellendus',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowMethods = [
        'esse',
        'iusto',
        'explicabo',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'ipsam',
        'consectetur',
        'ad',
        'itaque',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOrigins = [
        'possimus',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->exposeHeaders = [
        'ea',
        'tempore',
        'sapiente',
        'iure',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->maxAge = 264772;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 701543;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->percentage = 2515.24;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 338709;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'labore';
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->percentage = 9358.36;
    $request->urlMap1->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap1->defaultRouteAction->maxStreamDuration->nanos = 619890;
    $request->urlMap1->defaultRouteAction->maxStreamDuration->seconds = 'blanditiis';
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy->backendService = 'sequi';
    $request->urlMap1->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap1->defaultRouteAction->retryPolicy->numRetries = 111203;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 883349;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'molestiae';
    $request->urlMap1->defaultRouteAction->retryPolicy->retryConditions = [
        'corporis',
        'tenetur',
        'accusantium',
    ];
    $request->urlMap1->defaultRouteAction->timeout = new Duration();
    $request->urlMap1->defaultRouteAction->timeout->nanos = 894455;
    $request->urlMap1->defaultRouteAction->timeout->seconds = 'exercitationem';
    $request->urlMap1->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap1->defaultRouteAction->urlRewrite->hostRewrite = 'ducimus';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'voluptatibus';
    $request->urlMap1->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMap1->defaultService = 'eius';
    $request->urlMap1->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap1->defaultUrlRedirect->hostRedirect = 'necessitatibus';
    $request->urlMap1->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap1->defaultUrlRedirect->pathRedirect = 'nam';
    $request->urlMap1->defaultUrlRedirect->prefixRedirect = 'delectus';
    $request->urlMap1->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::FOUND;
    $request->urlMap1->defaultUrlRedirect->stripQuery = false;
    $request->urlMap1->description = 'pariatur';
    $request->urlMap1->fingerprint = 'magni';
    $request->urlMap1->headerAction = new HttpHeaderAction();
    $request->urlMap1->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->requestHeadersToRemove = [
        'laboriosam',
        'aut',
    ];
    $request->urlMap1->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->responseHeadersToRemove = [
        'earum',
        'reiciendis',
    ];
    $request->urlMap1->hostRules = [
        new HostRule(),
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMap1->id = 'ut';
    $request->urlMap1->kind = 'dolore';
    $request->urlMap1->name = 'Jaime Sporer';
    $request->urlMap1->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->urlMap1->region = 'sit';
    $request->urlMap1->selfLink = 'cumque';
    $request->urlMap1->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatum';
    $request->fields = 'enim';
    $request->key = 'perferendis';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->project = 'tenetur';
    $request->quotaUser = 'ipsam';
    $request->requestId = 'dolorum';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'minus';
    $request->urlMapPathParameter = 'soluta';
    $request->userIp = 'impedit';

    $requestSecurity = new ComputeUrlMapsUpdateSecurity();
    $requestSecurity->option1 = new ComputeUrlMapsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlMaps->computeUrlMapsUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeUrlMapsValidate

Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsValidateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapsValidateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapsValidateRequestLoadBalancingSchemesEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlMap;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\CorsPolicy;
use \OpenAPI\OpenAPI\Models\Shared\HttpFaultInjection;
use \OpenAPI\OpenAPI\Models\Shared\HttpFaultAbort;
use \OpenAPI\OpenAPI\Models\Shared\HttpFaultDelay;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\RequestMirrorPolicy;
use \OpenAPI\OpenAPI\Models\Shared\HttpRetryPolicy;
use \OpenAPI\OpenAPI\Models\Shared\UrlRewrite;
use \OpenAPI\OpenAPI\Models\Shared\WeightedBackendService;
use \OpenAPI\OpenAPI\Models\Shared\HttpHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpHeaderOption;
use \OpenAPI\OpenAPI\Models\Shared\HttpRedirectAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpRedirectActionRedirectResponseCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HostRule;
use \OpenAPI\OpenAPI\Models\Shared\PathMatcher;
use \OpenAPI\OpenAPI\Models\Shared\PathRule;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteRule;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteRuleMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpHeaderMatch;
use \OpenAPI\OpenAPI\Models\Shared\Int64RangeMatch;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilter;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilterLabelMatch;
use \OpenAPI\OpenAPI\Models\Shared\MetadataFilterFilterMatchCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpQueryParameterMatch;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapTest;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapTestHeader;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsValidateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsValidateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsValidateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeUrlMapsValidateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->urlMapsValidateRequest = new UrlMapsValidateRequest();
    $request->urlMapsValidateRequest->loadBalancingSchemes = [
        UrlMapsValidateRequestLoadBalancingSchemesEnum::EXTERNAL_MANAGED,
        UrlMapsValidateRequestLoadBalancingSchemesEnum::EXTERNAL_MANAGED,
        UrlMapsValidateRequestLoadBalancingSchemesEnum::EXTERNAL_MANAGED,
    ];
    $request->urlMapsValidateRequest->resource = new UrlMap();
    $request->urlMapsValidateRequest->resource->creationTimestamp = 'eaque';
    $request->urlMapsValidateRequest->resource->defaultRouteAction = new HttpRouteAction();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowHeaders = [
        'voluptatibus',
        'voluptates',
        'similique',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowMethods = [
        'nobis',
        'laboriosam',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'corporis',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowOrigins = [
        'nesciunt',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->exposeHeaders = [
        'repellendus',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->maxAge = 372457;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 230161;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort->percentage = 256.85;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 554412;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'voluptas';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->percentage = 7813.42;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration->nanos = 72854;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration->seconds = 'sit';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->requestMirrorPolicy->backendService = 'culpa';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->numRetries = 503514;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 313058;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'ex';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->retryConditions = [
        'illo',
        'perspiciatis',
        'possimus',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->timeout = new Duration();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->timeout->nanos = 266727;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->timeout->seconds = 'ex';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->urlRewrite->hostRewrite = 'nisi';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'ipsam';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMapsValidateRequest->resource->defaultService = 'laborum';
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->hostRedirect = 'omnis';
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->pathRedirect = 'reprehenderit';
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->prefixRedirect = 'qui';
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::MOVED_PERMANENTLY_DEFAULT;
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->stripQuery = false;
    $request->urlMapsValidateRequest->resource->description = 'perspiciatis';
    $request->urlMapsValidateRequest->resource->fingerprint = 'molestias';
    $request->urlMapsValidateRequest->resource->headerAction = new HttpHeaderAction();
    $request->urlMapsValidateRequest->resource->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMapsValidateRequest->resource->headerAction->requestHeadersToRemove = [
        'at',
        'eligendi',
    ];
    $request->urlMapsValidateRequest->resource->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
    ];
    $request->urlMapsValidateRequest->resource->headerAction->responseHeadersToRemove = [
        'vero',
        'eligendi',
        'facilis',
        'quisquam',
    ];
    $request->urlMapsValidateRequest->resource->hostRules = [
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMapsValidateRequest->resource->id = 'atque';
    $request->urlMapsValidateRequest->resource->kind = 'libero';
    $request->urlMapsValidateRequest->resource->name = 'Billy Gleichner';
    $request->urlMapsValidateRequest->resource->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->urlMapsValidateRequest->resource->region = 'ex';
    $request->urlMapsValidateRequest->resource->selfLink = 'voluptates';
    $request->urlMapsValidateRequest->resource->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquam';
    $request->fields = 'accusantium';
    $request->key = 'distinctio';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'quo';
    $request->quotaUser = 'alias';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'impedit';
    $request->urlMap = 'perspiciatis';
    $request->userIp = 'optio';

    $requestSecurity = new ComputeUrlMapsValidateSecurity();
    $requestSecurity->option1 = new ComputeUrlMapsValidateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlMaps->computeUrlMapsValidate($request, $requestSecurity);

    if ($response->urlMapsValidateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
