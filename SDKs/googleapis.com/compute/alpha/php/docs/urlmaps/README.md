# urlMaps

### Available Operations

* [computeUrlMapsAggregatedList](#computeurlmapsaggregatedlist) - Retrieves the list of all UrlMap resources, regional and global, available to the specified project.
* [computeUrlMapsDelete](#computeurlmapsdelete) - Deletes the specified UrlMap resource.
* [computeUrlMapsGet](#computeurlmapsget) - Returns the specified UrlMap resource.
* [computeUrlMapsInsert](#computeurlmapsinsert) - Creates a UrlMap resource in the specified project using the data included in the request.
* [computeUrlMapsInvalidateCache](#computeurlmapsinvalidatecache) - Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap. For more information, see [Invalidating cached content](/cdn/docs/invalidating-cached-content).
* [computeUrlMapsList](#computeurlmapslist) - Retrieves the list of UrlMap resources available to the specified project.
* [computeUrlMapsPatch](#computeurlmapspatch) - Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeUrlMapsTestIamPermissions](#computeurlmapstestiampermissions) - Returns permissions that a caller has on the specified resource.
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'accusamus';
    $request->filter = 'modi';
    $request->includeAllScopes = false;
    $request->key = 'ipsam';
    $request->maxResults = 168523;
    $request->oauthToken = 'molestiae';
    $request->orderBy = 'exercitationem';
    $request->pageToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'beatae';
    $request->quotaUser = 'eaque';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'occaecati';

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
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'a';
    $request->key = 'impedit';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->project = 'voluptatibus';
    $request->quotaUser = 'quasi';
    $request->requestId = 'officia';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'hic';
    $request->urlMap = 'vitae';
    $request->userIp = 'maxime';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eligendi';
    $request->fields = 'consequatur';
    $request->key = 'sunt';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->project = 'praesentium';
    $request->quotaUser = 'qui';
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'quod';
    $request->urlMap = 'rem';
    $request->userIp = 'fugiat';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeUrlMapsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->urlMap = new UrlMap();
    $request->urlMap->creationTimestamp = 'consectetur';
    $request->urlMap->defaultCustomErrorResponsePolicy = new CustomErrorResponsePolicy();
    $request->urlMap->defaultCustomErrorResponsePolicy->errorResponseRules = [
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
    ];
    $request->urlMap->defaultCustomErrorResponsePolicy->errorService = 'modi';
    $request->urlMap->defaultRouteAction = new HttpRouteAction();
    $request->urlMap->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap->defaultRouteAction->corsPolicy->allowHeaders = [
        'aut',
        'excepturi',
        'nemo',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowMethods = [
        'repellendus',
        'facilis',
        'possimus',
        'perspiciatis',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'quae',
        'voluptatem',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowOrigins = [
        'exercitationem',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap->defaultRouteAction->corsPolicy->exposeHeaders = [
        'nulla',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->maxAge = 511158;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 136574;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort->percentage = 9908.18;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 738089;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'temporibus';
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->percentage = 2257.6;
    $request->urlMap->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap->defaultRouteAction->maxStreamDuration->nanos = 488835;
    $request->urlMap->defaultRouteAction->maxStreamDuration->seconds = 'accusamus';
    $request->urlMap->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap->defaultRouteAction->requestMirrorPolicy->backendService = 'laudantium';
    $request->urlMap->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap->defaultRouteAction->retryPolicy->numRetries = 319520;
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 41309;
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'officiis';
    $request->urlMap->defaultRouteAction->retryPolicy->retryConditions = [
        'quos',
        'suscipit',
        'nam',
        'voluptatem',
    ];
    $request->urlMap->defaultRouteAction->timeout = new Duration();
    $request->urlMap->defaultRouteAction->timeout->nanos = 849936;
    $request->urlMap->defaultRouteAction->timeout->seconds = 'recusandae';
    $request->urlMap->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap->defaultRouteAction->urlRewrite->hostRewrite = 'tenetur';
    $request->urlMap->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'reprehenderit';
    $request->urlMap->defaultRouteAction->urlRewrite->pathTemplateRewrite = 'non';
    $request->urlMap->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMap->defaultService = 'doloremque';
    $request->urlMap->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap->defaultUrlRedirect->hostRedirect = 'atque';
    $request->urlMap->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap->defaultUrlRedirect->pathRedirect = 'veniam';
    $request->urlMap->defaultUrlRedirect->prefixRedirect = 'quisquam';
    $request->urlMap->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::TEMPORARY_REDIRECT;
    $request->urlMap->defaultUrlRedirect->stripQuery = false;
    $request->urlMap->description = 'delectus';
    $request->urlMap->fingerprint = 'sapiente';
    $request->urlMap->headerAction = new HttpHeaderAction();
    $request->urlMap->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap->headerAction->requestHeadersToRemove = [
        'dicta',
        'voluptatem',
        'provident',
        'quod',
    ];
    $request->urlMap->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
    ];
    $request->urlMap->headerAction->responseHeadersToRemove = [
        'nostrum',
        'est',
        'illo',
    ];
    $request->urlMap->hostRules = [
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMap->id = 'ut';
    $request->urlMap->kind = 'explicabo';
    $request->urlMap->name = 'Jacob Effertz';
    $request->urlMap->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->urlMap->region = 'aliquid';
    $request->urlMap->selfLink = 'excepturi';
    $request->urlMap->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veniam';
    $request->fields = 'commodi';
    $request->key = 'perferendis';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->project = 'provident';
    $request->quotaUser = 'nesciunt';
    $request->requestId = 'nihil';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'dolores';
    $request->userIp = 'tempora';

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
    $request->cacheInvalidationRule->host = 'quas';
    $request->cacheInvalidationRule->path = 'iure';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aperiam';
    $request->fields = 'magnam';
    $request->key = 'ipsam';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'eos';
    $request->quotaUser = 'delectus';
    $request->requestId = 'odio';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'velit';
    $request->urlMap = 'vero';
    $request->userIp = 'doloremque';

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
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->fields = 'unde';
    $request->filter = 'dolores';
    $request->key = 'distinctio';
    $request->maxResults = 947974;
    $request->oauthToken = 'quo';
    $request->orderBy = 'odio';
    $request->pageToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->project = 'molestias';
    $request->quotaUser = 'enim';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'iusto';
    $request->userIp = 'dicta';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeUrlMapsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->urlMap1 = new UrlMap();
    $request->urlMap1->creationTimestamp = 'qui';
    $request->urlMap1->defaultCustomErrorResponsePolicy = new CustomErrorResponsePolicy();
    $request->urlMap1->defaultCustomErrorResponsePolicy->errorResponseRules = [
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
    ];
    $request->urlMap1->defaultCustomErrorResponsePolicy->errorService = 'expedita';
    $request->urlMap1->defaultRouteAction = new HttpRouteAction();
    $request->urlMap1->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap1->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->allowHeaders = [
        'molestias',
        'magnam',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowMethods = [
        'deserunt',
        'vitae',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'cupiditate',
        'quisquam',
        'reprehenderit',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOrigins = [
        'laborum',
        'dicta',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->exposeHeaders = [
        'earum',
        'ex',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->maxAge = 343145;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 308016;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->percentage = 353.96;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 200932;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'ea';
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->percentage = 5080.14;
    $request->urlMap1->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap1->defaultRouteAction->maxStreamDuration->nanos = 915011;
    $request->urlMap1->defaultRouteAction->maxStreamDuration->seconds = 'assumenda';
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy->backendService = 'velit';
    $request->urlMap1->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap1->defaultRouteAction->retryPolicy->numRetries = 34432;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 948341;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'odio';
    $request->urlMap1->defaultRouteAction->retryPolicy->retryConditions = [
        'nobis',
        'recusandae',
        'culpa',
    ];
    $request->urlMap1->defaultRouteAction->timeout = new Duration();
    $request->urlMap1->defaultRouteAction->timeout->nanos = 744505;
    $request->urlMap1->defaultRouteAction->timeout->seconds = 'asperiores';
    $request->urlMap1->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap1->defaultRouteAction->urlRewrite->hostRewrite = 'quas';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'ipsa';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathTemplateRewrite = 'vitae';
    $request->urlMap1->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
    ];
    $request->urlMap1->defaultService = 'modi';
    $request->urlMap1->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap1->defaultUrlRedirect->hostRedirect = 'ad';
    $request->urlMap1->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap1->defaultUrlRedirect->pathRedirect = 'perspiciatis';
    $request->urlMap1->defaultUrlRedirect->prefixRedirect = 'consequatur';
    $request->urlMap1->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::MOVED_PERMANENTLY_DEFAULT;
    $request->urlMap1->defaultUrlRedirect->stripQuery = false;
    $request->urlMap1->description = 'totam';
    $request->urlMap1->fingerprint = 'a';
    $request->urlMap1->headerAction = new HttpHeaderAction();
    $request->urlMap1->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->requestHeadersToRemove = [
        'autem',
        'dignissimos',
    ];
    $request->urlMap1->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->responseHeadersToRemove = [
        'vero',
        'dolores',
    ];
    $request->urlMap1->hostRules = [
        new HostRule(),
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMap1->id = 'repellendus';
    $request->urlMap1->kind = 'eius';
    $request->urlMap1->name = 'Lloyd Gleichner';
    $request->urlMap1->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->urlMap1->region = 'illum';
    $request->urlMap1->selfLink = 'est';
    $request->urlMap1->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'officia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->fields = 'necessitatibus';
    $request->key = 'atque';
    $request->oauthToken = 'expedita';
    $request->prettyPrint = false;
    $request->project = 'nulla';
    $request->quotaUser = 'nobis';
    $request->requestId = 'modi';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'sit';
    $request->urlMapPathParameter = 'atque';
    $request->userIp = 'incidunt';

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

## computeUrlMapsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeUrlMapsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'saepe',
        'perferendis',
        'rem',
        'sunt',
    ];
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'asperiores';
    $request->fields = 'facilis';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->project = 'necessitatibus';
    $request->quotaUser = 'provident';
    $request->resource = 'velit';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'laborum';
    $request->userIp = 'esse';

    $requestSecurity = new ComputeUrlMapsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeUrlMapsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlMaps->computeUrlMapsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeUrlMapsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->urlMap1 = new UrlMap();
    $request->urlMap1->creationTimestamp = 'porro';
    $request->urlMap1->defaultCustomErrorResponsePolicy = new CustomErrorResponsePolicy();
    $request->urlMap1->defaultCustomErrorResponsePolicy->errorResponseRules = [
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
    ];
    $request->urlMap1->defaultCustomErrorResponsePolicy->errorService = 'eos';
    $request->urlMap1->defaultRouteAction = new HttpRouteAction();
    $request->urlMap1->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap1->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->allowHeaders = [
        'dolore',
        'maxime',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowMethods = [
        'libero',
        'enim',
        'veritatis',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'aspernatur',
        'minus',
        'alias',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOrigins = [
        'ipsa',
        'quos',
        'porro',
        'voluptas',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->exposeHeaders = [
        'natus',
        'sequi',
        'qui',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->maxAge = 22158;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 204565;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->percentage = 7924.79;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 818705;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'magnam';
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->percentage = 8172.78;
    $request->urlMap1->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap1->defaultRouteAction->maxStreamDuration->nanos = 445430;
    $request->urlMap1->defaultRouteAction->maxStreamDuration->seconds = 'ea';
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy->backendService = 'odit';
    $request->urlMap1->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap1->defaultRouteAction->retryPolicy->numRetries = 467406;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 114692;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'eum';
    $request->urlMap1->defaultRouteAction->retryPolicy->retryConditions = [
        'voluptate',
        'eius',
    ];
    $request->urlMap1->defaultRouteAction->timeout = new Duration();
    $request->urlMap1->defaultRouteAction->timeout->nanos = 227791;
    $request->urlMap1->defaultRouteAction->timeout->seconds = 'deleniti';
    $request->urlMap1->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap1->defaultRouteAction->urlRewrite->hostRewrite = 'ipsum';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'in';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathTemplateRewrite = 'repellendus';
    $request->urlMap1->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
    ];
    $request->urlMap1->defaultService = 'est';
    $request->urlMap1->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap1->defaultUrlRedirect->hostRedirect = 'mollitia';
    $request->urlMap1->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap1->defaultUrlRedirect->pathRedirect = 'voluptatibus';
    $request->urlMap1->defaultUrlRedirect->prefixRedirect = 'earum';
    $request->urlMap1->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::FOUND;
    $request->urlMap1->defaultUrlRedirect->stripQuery = false;
    $request->urlMap1->description = 'facilis';
    $request->urlMap1->fingerprint = 'recusandae';
    $request->urlMap1->headerAction = new HttpHeaderAction();
    $request->urlMap1->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->requestHeadersToRemove = [
        'amet',
        'voluptatum',
        'rerum',
        'mollitia',
    ];
    $request->urlMap1->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->responseHeadersToRemove = [
        'labore',
        'voluptatum',
        'vitae',
        'deserunt',
    ];
    $request->urlMap1->hostRules = [
        new HostRule(),
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMap1->id = 'voluptatibus';
    $request->urlMap1->kind = 'quod';
    $request->urlMap1->name = 'Sam Block';
    $request->urlMap1->pathMatchers = [
        new PathMatcher(),
    ];
    $request->urlMap1->region = 'voluptatibus';
    $request->urlMap1->selfLink = 'quam';
    $request->urlMap1->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'libero';
    $request->key = 'occaecati';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->project = 'velit';
    $request->quotaUser = 'repudiandae';
    $request->requestId = 'hic';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'est';
    $request->urlMapPathParameter = 'voluptas';
    $request->userIp = 'explicabo';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsValidateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsValidateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeUrlMapsValidateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeUrlMapsValidateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->urlMapsValidateRequest = new UrlMapsValidateRequest();
    $request->urlMapsValidateRequest->loadBalancingSchemes = [
        UrlMapsValidateRequestLoadBalancingSchemesEnum::EXTERNAL_MANAGED,
        UrlMapsValidateRequestLoadBalancingSchemesEnum::LOAD_BALANCING_SCHEME_UNSPECIFIED,
        UrlMapsValidateRequestLoadBalancingSchemesEnum::EXTERNAL,
    ];
    $request->urlMapsValidateRequest->resource = new UrlMap();
    $request->urlMapsValidateRequest->resource->creationTimestamp = 'vitae';
    $request->urlMapsValidateRequest->resource->defaultCustomErrorResponsePolicy = new CustomErrorResponsePolicy();
    $request->urlMapsValidateRequest->resource->defaultCustomErrorResponsePolicy->errorResponseRules = [
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
    ];
    $request->urlMapsValidateRequest->resource->defaultCustomErrorResponsePolicy->errorService = 'consequatur';
    $request->urlMapsValidateRequest->resource->defaultRouteAction = new HttpRouteAction();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowHeaders = [
        'veritatis',
        'incidunt',
        'quaerat',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowMethods = [
        'quaerat',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'cum',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowOrigins = [
        'in',
        'assumenda',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->exposeHeaders = [
        'eum',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->maxAge = 460887;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 192964;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort->percentage = 7193.64;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 283637;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'quae';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->percentage = 3499.24;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration->nanos = 534738;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration->seconds = 'neque';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->requestMirrorPolicy->backendService = 'ullam';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->numRetries = 539528;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 286390;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'excepturi';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->retryConditions = [
        'quo',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->timeout = new Duration();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->timeout->nanos = 296488;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->timeout->seconds = 'quidem';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->urlRewrite->hostRewrite = 'quaerat';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'velit';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->urlRewrite->pathTemplateRewrite = 'porro';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
    ];
    $request->urlMapsValidateRequest->resource->defaultService = 'amet';
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->hostRedirect = 'saepe';
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->pathRedirect = 'corporis';
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->prefixRedirect = 'assumenda';
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::TEMPORARY_REDIRECT;
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->stripQuery = false;
    $request->urlMapsValidateRequest->resource->description = 'consequatur';
    $request->urlMapsValidateRequest->resource->fingerprint = 'necessitatibus';
    $request->urlMapsValidateRequest->resource->headerAction = new HttpHeaderAction();
    $request->urlMapsValidateRequest->resource->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
    ];
    $request->urlMapsValidateRequest->resource->headerAction->requestHeadersToRemove = [
        'odio',
        'quasi',
    ];
    $request->urlMapsValidateRequest->resource->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMapsValidateRequest->resource->headerAction->responseHeadersToRemove = [
        'recusandae',
        'explicabo',
        'sequi',
        'rem',
    ];
    $request->urlMapsValidateRequest->resource->hostRules = [
        new HostRule(),
        new HostRule(),
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMapsValidateRequest->resource->id = 'voluptates';
    $request->urlMapsValidateRequest->resource->kind = 'commodi';
    $request->urlMapsValidateRequest->resource->name = 'Angelo Blick';
    $request->urlMapsValidateRequest->resource->pathMatchers = [
        new PathMatcher(),
    ];
    $request->urlMapsValidateRequest->resource->region = 'iure';
    $request->urlMapsValidateRequest->resource->selfLink = 'facilis';
    $request->urlMapsValidateRequest->resource->tests = [
        new UrlMapTest(),
    ];
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatem';
    $request->fields = 'qui';
    $request->key = 'delectus';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->project = 'eum';
    $request->quotaUser = 'ratione';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'earum';
    $request->urlMap = 'placeat';
    $request->userIp = 'deleniti';

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
