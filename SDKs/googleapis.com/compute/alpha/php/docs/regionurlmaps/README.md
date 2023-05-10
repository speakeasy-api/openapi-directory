# regionUrlMaps

### Available Operations

* [computeRegionUrlMapsDelete](#computeregionurlmapsdelete) - Deletes the specified UrlMap resource.
* [computeRegionUrlMapsGet](#computeregionurlmapsget) - Returns the specified UrlMap resource.
* [computeRegionUrlMapsInsert](#computeregionurlmapsinsert) - Creates a UrlMap resource in the specified project using the data included in the request.
* [computeRegionUrlMapsInvalidateCache](#computeregionurlmapsinvalidatecache) - Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap. For more information, see [Invalidating cached content](/cdn/docs/invalidating-cached-content).
* [computeRegionUrlMapsList](#computeregionurlmapslist) - Retrieves the list of UrlMap resources available to the specified project in the specified region.
* [computeRegionUrlMapsPatch](#computeregionurlmapspatch) - Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeRegionUrlMapsTestIamPermissions](#computeregionurlmapstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionUrlMapsUpdate](#computeregionurlmapsupdate) - Updates the specified UrlMap resource with the data included in the request.
* [computeRegionUrlMapsValidate](#computeregionurlmapsvalidate) - Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.

## computeRegionUrlMapsDelete

Deletes the specified UrlMap resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionUrlMapsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'recusandae';
    $request->fields = 'provident';
    $request->key = 'quod';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'aut';
    $request->region = 'ipsam';
    $request->requestId = 'nulla';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'saepe';
    $request->urlMap = 'odio';
    $request->userIp = 'laboriosam';

    $requestSecurity = new ComputeRegionUrlMapsDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionUrlMapsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionUrlMaps->computeRegionUrlMapsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionUrlMapsGet

Returns the specified UrlMap resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionUrlMapsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'rerum';
    $request->key = 'eligendi';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'rem';
    $request->quotaUser = 'commodi';
    $request->region = 'aperiam';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'ad';
    $request->urlMap = 'maiores';
    $request->userIp = 'magni';

    $requestSecurity = new ComputeRegionUrlMapsGetSecurity();
    $requestSecurity->option1 = new ComputeRegionUrlMapsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionUrlMaps->computeRegionUrlMapsGet($request, $requestSecurity);

    if ($response->urlMap !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionUrlMapsInsert

Creates a UrlMap resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlMap;
use \OpenAPI\OpenAPI\Models\Shared\CustomErrorResponsePolicy;
use \OpenAPI\OpenAPI\Models\Shared\CustomErrorResponsePolicyCustomErrorResponseRule;
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
use \OpenAPI\OpenAPI\Models\Shared\HttpFilterConfig;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionUrlMapsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->urlMap = new UrlMap();
    $request->urlMap->creationTimestamp = 'aliquid';
    $request->urlMap->defaultCustomErrorResponsePolicy = new CustomErrorResponsePolicy();
    $request->urlMap->defaultCustomErrorResponsePolicy->errorResponseRules = [
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
    ];
    $request->urlMap->defaultCustomErrorResponsePolicy->errorService = 'fuga';
    $request->urlMap->defaultRouteAction = new HttpRouteAction();
    $request->urlMap->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap->defaultRouteAction->corsPolicy->allowHeaders = [
        'magnam',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowMethods = [
        'esse',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'odio',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowOrigins = [
        'dolorum',
        'quam',
        'amet',
        'unde',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap->defaultRouteAction->corsPolicy->exposeHeaders = [
        'odit',
        'modi',
        'odio',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->maxAge = 641279;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 518803;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort->percentage = 4613.1;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 152643;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'beatae';
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->percentage = 4580.27;
    $request->urlMap->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap->defaultRouteAction->maxStreamDuration->nanos = 941121;
    $request->urlMap->defaultRouteAction->maxStreamDuration->seconds = 'officiis';
    $request->urlMap->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap->defaultRouteAction->requestMirrorPolicy->backendService = 'illum';
    $request->urlMap->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap->defaultRouteAction->retryPolicy->numRetries = 575198;
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 412614;
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'qui';
    $request->urlMap->defaultRouteAction->retryPolicy->retryConditions = [
        'a',
        'consectetur',
        'debitis',
        'itaque',
    ];
    $request->urlMap->defaultRouteAction->timeout = new Duration();
    $request->urlMap->defaultRouteAction->timeout->nanos = 927007;
    $request->urlMap->defaultRouteAction->timeout->seconds = 'dignissimos';
    $request->urlMap->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap->defaultRouteAction->urlRewrite->hostRewrite = 'porro';
    $request->urlMap->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'consectetur';
    $request->urlMap->defaultRouteAction->urlRewrite->pathTemplateRewrite = 'molestias';
    $request->urlMap->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMap->defaultService = 'quo';
    $request->urlMap->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap->defaultUrlRedirect->hostRedirect = 'in';
    $request->urlMap->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap->defaultUrlRedirect->pathRedirect = 'natus';
    $request->urlMap->defaultUrlRedirect->prefixRedirect = 'in';
    $request->urlMap->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::FOUND;
    $request->urlMap->defaultUrlRedirect->stripQuery = false;
    $request->urlMap->description = 'officiis';
    $request->urlMap->fingerprint = 'dicta';
    $request->urlMap->headerAction = new HttpHeaderAction();
    $request->urlMap->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap->headerAction->requestHeadersToRemove = [
        'culpa',
    ];
    $request->urlMap->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap->headerAction->responseHeadersToRemove = [
        'quidem',
        'impedit',
        'earum',
        'eum',
    ];
    $request->urlMap->hostRules = [
        new HostRule(),
        new HostRule(),
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMap->id = 'et';
    $request->urlMap->kind = 'perspiciatis';
    $request->urlMap->name = 'Mr. Salvador Bayer';
    $request->urlMap->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->urlMap->region = 'modi';
    $request->urlMap->selfLink = 'modi';
    $request->urlMap->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dicta';
    $request->fields = 'quidem';
    $request->key = 'deserunt';
    $request->oauthToken = 'vitae';
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'dignissimos';
    $request->region = 'in';
    $request->requestId = 'sed';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'eveniet';

    $requestSecurity = new ComputeRegionUrlMapsInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionUrlMapsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionUrlMaps->computeRegionUrlMapsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionUrlMapsInvalidateCache

Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap. For more information, see [Invalidating cached content](/cdn/docs/invalidating-cached-content).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsInvalidateCacheRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CacheInvalidationRule;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsInvalidateCacheSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsInvalidateCacheSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsInvalidateCacheSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionUrlMapsInvalidateCacheRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->cacheInvalidationRule = new CacheInvalidationRule();
    $request->cacheInvalidationRule->host = 'ullam';
    $request->cacheInvalidationRule->path = 'voluptatibus';
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fuga';
    $request->fields = 'fugiat';
    $request->key = 'fuga';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'hic';
    $request->quotaUser = 'laboriosam';
    $request->region = 'rem';
    $request->requestId = 'perferendis';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'tempore';
    $request->urlMap = 'eaque';
    $request->userIp = 'quasi';

    $requestSecurity = new ComputeRegionUrlMapsInvalidateCacheSecurity();
    $requestSecurity->option1 = new ComputeRegionUrlMapsInvalidateCacheSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionUrlMaps->computeRegionUrlMapsInvalidateCache($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionUrlMapsList

Retrieves the list of UrlMap resources available to the specified project in the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionUrlMapsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'aperiam';
    $request->filter = 'ipsum';
    $request->key = 'sunt';
    $request->maxResults = 965909;
    $request->oauthToken = 'fugit';
    $request->orderBy = 'minus';
    $request->pageToken = 'illo';
    $request->prettyPrint = false;
    $request->project = 'omnis';
    $request->quotaUser = 'quibusdam';
    $request->region = 'tempore';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'nihil';
    $request->userIp = 'architecto';

    $requestSecurity = new ComputeRegionUrlMapsListSecurity();
    $requestSecurity->option1 = new ComputeRegionUrlMapsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionUrlMaps->computeRegionUrlMapsList($request, $requestSecurity);

    if ($response->urlMapList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionUrlMapsPatch

Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlMap;
use \OpenAPI\OpenAPI\Models\Shared\CustomErrorResponsePolicy;
use \OpenAPI\OpenAPI\Models\Shared\CustomErrorResponsePolicyCustomErrorResponseRule;
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
use \OpenAPI\OpenAPI\Models\Shared\HttpFilterConfig;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionUrlMapsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->urlMap1 = new UrlMap();
    $request->urlMap1->creationTimestamp = 'architecto';
    $request->urlMap1->defaultCustomErrorResponsePolicy = new CustomErrorResponsePolicy();
    $request->urlMap1->defaultCustomErrorResponsePolicy->errorResponseRules = [
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
    ];
    $request->urlMap1->defaultCustomErrorResponsePolicy->errorService = 'molestias';
    $request->urlMap1->defaultRouteAction = new HttpRouteAction();
    $request->urlMap1->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap1->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->allowHeaders = [
        'assumenda',
        'maiores',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowMethods = [
        'quae',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'consequuntur',
        'ratione',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOrigins = [
        'consectetur',
        'odio',
        'beatae',
        'sequi',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->exposeHeaders = [
        'quaerat',
        'aspernatur',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->maxAge = 76300;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 441661;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->percentage = 6339.11;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 389282;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'repudiandae';
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->percentage = 3192.99;
    $request->urlMap1->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap1->defaultRouteAction->maxStreamDuration->nanos = 570198;
    $request->urlMap1->defaultRouteAction->maxStreamDuration->seconds = 'suscipit';
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy->backendService = 'officia';
    $request->urlMap1->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap1->defaultRouteAction->retryPolicy->numRetries = 671894;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 292804;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'dicta';
    $request->urlMap1->defaultRouteAction->retryPolicy->retryConditions = [
        'cupiditate',
        'voluptates',
        'odit',
    ];
    $request->urlMap1->defaultRouteAction->timeout = new Duration();
    $request->urlMap1->defaultRouteAction->timeout->nanos = 46371;
    $request->urlMap1->defaultRouteAction->timeout->seconds = 'nostrum';
    $request->urlMap1->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap1->defaultRouteAction->urlRewrite->hostRewrite = 'ipsum';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'est';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathTemplateRewrite = 'earum';
    $request->urlMap1->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMap1->defaultService = 'maxime';
    $request->urlMap1->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap1->defaultUrlRedirect->hostRedirect = 'nesciunt';
    $request->urlMap1->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap1->defaultUrlRedirect->pathRedirect = 'ab';
    $request->urlMap1->defaultUrlRedirect->prefixRedirect = 'ullam';
    $request->urlMap1->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::MOVED_PERMANENTLY_DEFAULT;
    $request->urlMap1->defaultUrlRedirect->stripQuery = false;
    $request->urlMap1->description = 'fugit';
    $request->urlMap1->fingerprint = 'nemo';
    $request->urlMap1->headerAction = new HttpHeaderAction();
    $request->urlMap1->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->requestHeadersToRemove = [
        'eveniet',
        'eaque',
    ];
    $request->urlMap1->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->responseHeadersToRemove = [
        'iste',
    ];
    $request->urlMap1->hostRules = [
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMap1->id = 'iusto';
    $request->urlMap1->kind = 'sed';
    $request->urlMap1->name = 'Angelina Lehner I';
    $request->urlMap1->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->urlMap1->region = 'illum';
    $request->urlMap1->selfLink = 'animi';
    $request->urlMap1->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vero';
    $request->fields = 'quibusdam';
    $request->key = 'dolores';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->project = 'consequatur';
    $request->quotaUser = 'error';
    $request->region = 'error';
    $request->requestId = 'architecto';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'ea';
    $request->urlMapPathParameter = 'fugiat';
    $request->userIp = 'ab';

    $requestSecurity = new ComputeRegionUrlMapsPatchSecurity();
    $requestSecurity->option1 = new ComputeRegionUrlMapsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionUrlMaps->computeRegionUrlMapsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionUrlMapsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionUrlMapsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'ipsa',
        'ipsa',
    ];
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quisquam';
    $request->fields = 'esse';
    $request->key = 'unde';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->project = 'animi';
    $request->quotaUser = 'eos';
    $request->region = 'id';
    $request->resource = 'inventore';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'vero';
    $request->userIp = 'distinctio';

    $requestSecurity = new ComputeRegionUrlMapsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionUrlMapsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionUrlMaps->computeRegionUrlMapsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionUrlMapsUpdate

Updates the specified UrlMap resource with the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlMap;
use \OpenAPI\OpenAPI\Models\Shared\CustomErrorResponsePolicy;
use \OpenAPI\OpenAPI\Models\Shared\CustomErrorResponsePolicyCustomErrorResponseRule;
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
use \OpenAPI\OpenAPI\Models\Shared\HttpFilterConfig;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionUrlMapsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->urlMap1 = new UrlMap();
    $request->urlMap1->creationTimestamp = 'sunt';
    $request->urlMap1->defaultCustomErrorResponsePolicy = new CustomErrorResponsePolicy();
    $request->urlMap1->defaultCustomErrorResponsePolicy->errorResponseRules = [
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
    ];
    $request->urlMap1->defaultCustomErrorResponsePolicy->errorService = 'assumenda';
    $request->urlMap1->defaultRouteAction = new HttpRouteAction();
    $request->urlMap1->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap1->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->allowHeaders = [
        'ipsam',
        'magni',
        'labore',
        'deserunt',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowMethods = [
        'libero',
        'iure',
        'facilis',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'eaque',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOrigins = [
        'officia',
        'asperiores',
        'quia',
        'magnam',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->exposeHeaders = [
        'illum',
        'itaque',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->maxAge = 103982;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 52231;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->percentage = 2042.81;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 861729;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'consequatur';
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->percentage = 5512.28;
    $request->urlMap1->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap1->defaultRouteAction->maxStreamDuration->nanos = 190973;
    $request->urlMap1->defaultRouteAction->maxStreamDuration->seconds = 'voluptatem';
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy->backendService = 'id';
    $request->urlMap1->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap1->defaultRouteAction->retryPolicy->numRetries = 753997;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 291648;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'nulla';
    $request->urlMap1->defaultRouteAction->retryPolicy->retryConditions = [
        'esse',
    ];
    $request->urlMap1->defaultRouteAction->timeout = new Duration();
    $request->urlMap1->defaultRouteAction->timeout->nanos = 12492;
    $request->urlMap1->defaultRouteAction->timeout->seconds = 'minus';
    $request->urlMap1->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap1->defaultRouteAction->urlRewrite->hostRewrite = 'aliquam';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'eveniet';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathTemplateRewrite = 'adipisci';
    $request->urlMap1->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMap1->defaultService = 'laboriosam';
    $request->urlMap1->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap1->defaultUrlRedirect->hostRedirect = 'voluptates';
    $request->urlMap1->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap1->defaultUrlRedirect->pathRedirect = 'corporis';
    $request->urlMap1->defaultUrlRedirect->prefixRedirect = 'commodi';
    $request->urlMap1->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::FOUND;
    $request->urlMap1->defaultUrlRedirect->stripQuery = false;
    $request->urlMap1->description = 'placeat';
    $request->urlMap1->fingerprint = 'quis';
    $request->urlMap1->headerAction = new HttpHeaderAction();
    $request->urlMap1->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->requestHeadersToRemove = [
        'distinctio',
        'ab',
        'ea',
        'dolor',
    ];
    $request->urlMap1->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->responseHeadersToRemove = [
        'dolorem',
    ];
    $request->urlMap1->hostRules = [
        new HostRule(),
    ];
    $request->urlMap1->id = 'incidunt';
    $request->urlMap1->kind = 'illum';
    $request->urlMap1->name = 'Taylor Hane';
    $request->urlMap1->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->urlMap1->region = 'error';
    $request->urlMap1->selfLink = 'alias';
    $request->urlMap1->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officiis';
    $request->fields = 'ad';
    $request->key = 'laborum';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->project = 'minima';
    $request->quotaUser = 'deserunt';
    $request->region = 'veritatis';
    $request->requestId = 'quae';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'pariatur';
    $request->urlMapPathParameter = 'deleniti';
    $request->userIp = 'error';

    $requestSecurity = new ComputeRegionUrlMapsUpdateSecurity();
    $requestSecurity->option1 = new ComputeRegionUrlMapsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionUrlMaps->computeRegionUrlMapsUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionUrlMapsValidate

Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsValidateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionUrlMapsValidateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UrlMap;
use \OpenAPI\OpenAPI\Models\Shared\CustomErrorResponsePolicy;
use \OpenAPI\OpenAPI\Models\Shared\CustomErrorResponsePolicyCustomErrorResponseRule;
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
use \OpenAPI\OpenAPI\Models\Shared\HttpFilterConfig;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsValidateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsValidateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsValidateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionUrlMapsValidateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionUrlMapsValidateRequest = new RegionUrlMapsValidateRequest();
    $request->regionUrlMapsValidateRequest->resource = new UrlMap();
    $request->regionUrlMapsValidateRequest->resource->creationTimestamp = 'eaque';
    $request->regionUrlMapsValidateRequest->resource->defaultCustomErrorResponsePolicy = new CustomErrorResponsePolicy();
    $request->regionUrlMapsValidateRequest->resource->defaultCustomErrorResponsePolicy->errorResponseRules = [
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultCustomErrorResponsePolicy->errorService = 'non';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction = new HttpRouteAction();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowHeaders = [
        'sed',
        'maiores',
        'occaecati',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowMethods = [
        'excepturi',
        'laborum',
        'nemo',
        'neque',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'ratione',
        'quae',
        'non',
        'assumenda',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowOrigins = [
        'officiis',
        'sunt',
        'qui',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->disabled = false;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->exposeHeaders = [
        'hic',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->maxAge = 58130;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 732365;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort->percentage = 9418.84;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 893446;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'quo';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->percentage = 7914.82;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration = new Duration();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration->nanos = 308459;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration->seconds = 'ab';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->requestMirrorPolicy->backendService = 'cupiditate';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->numRetries = 246893;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 149126;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'illum';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->retryConditions = [
        'aperiam',
        'eius',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->timeout = new Duration();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->timeout->nanos = 709209;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->timeout->seconds = 'dolorem';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->urlRewrite->hostRewrite = 'fuga';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'eveniet';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->urlRewrite->pathTemplateRewrite = 'reprehenderit';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultService = 'sint';
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect = new HttpRedirectAction();
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->hostRedirect = 'ipsum';
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->httpsRedirect = false;
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->pathRedirect = 'eius';
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->prefixRedirect = 'nulla';
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::PERMANENT_REDIRECT;
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->stripQuery = false;
    $request->regionUrlMapsValidateRequest->resource->description = 'recusandae';
    $request->regionUrlMapsValidateRequest->resource->fingerprint = 'harum';
    $request->regionUrlMapsValidateRequest->resource->headerAction = new HttpHeaderAction();
    $request->regionUrlMapsValidateRequest->resource->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->regionUrlMapsValidateRequest->resource->headerAction->requestHeadersToRemove = [
        'est',
        'fugit',
    ];
    $request->regionUrlMapsValidateRequest->resource->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->regionUrlMapsValidateRequest->resource->headerAction->responseHeadersToRemove = [
        'vel',
        'asperiores',
        'iure',
        'ab',
    ];
    $request->regionUrlMapsValidateRequest->resource->hostRules = [
        new HostRule(),
        new HostRule(),
        new HostRule(),
    ];
    $request->regionUrlMapsValidateRequest->resource->id = 'ipsa';
    $request->regionUrlMapsValidateRequest->resource->kind = 'laboriosam';
    $request->regionUrlMapsValidateRequest->resource->name = 'Andrea Weimann';
    $request->regionUrlMapsValidateRequest->resource->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->regionUrlMapsValidateRequest->resource->region = 'amet';
    $request->regionUrlMapsValidateRequest->resource->selfLink = 'vel';
    $request->regionUrlMapsValidateRequest->resource->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eaque';
    $request->fields = 'fuga';
    $request->key = 'modi';
    $request->oauthToken = 'vitae';
    $request->prettyPrint = false;
    $request->project = 'aliquam';
    $request->quotaUser = 'culpa';
    $request->region = 'id';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'unde';
    $request->urlMap = 'incidunt';
    $request->userIp = 'nulla';

    $requestSecurity = new ComputeRegionUrlMapsValidateSecurity();
    $requestSecurity->option1 = new ComputeRegionUrlMapsValidateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionUrlMaps->computeRegionUrlMapsValidate($request, $requestSecurity);

    if ($response->urlMapsValidateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
