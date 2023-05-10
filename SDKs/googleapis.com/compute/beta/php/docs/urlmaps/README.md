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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'sequi';
    $request->filter = 'quod';
    $request->includeAllScopes = false;
    $request->key = 'modi';
    $request->maxResults = 580148;
    $request->oauthToken = 'occaecati';
    $request->orderBy = 'vitae';
    $request->pageToken = 'provident';
    $request->prettyPrint = false;
    $request->project = 'necessitatibus';
    $request->quotaUser = 'tempore';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'sunt';
    $request->userIp = 'eligendi';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'nemo';
    $request->key = 'sequi';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->project = 'optio';
    $request->quotaUser = 'expedita';
    $request->requestId = 'quidem';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'quod';
    $request->urlMap = 'temporibus';
    $request->userIp = 'earum';

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
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'debitis';
    $request->fields = 'iste';
    $request->key = 'eum';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->project = 'quisquam';
    $request->quotaUser = 'magnam';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'expedita';
    $request->urlMap = 'modi';
    $request->userIp = 'fugit';

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
    $request->urlMap->creationTimestamp = 'dolor';
    $request->urlMap->defaultCustomErrorResponsePolicy = new CustomErrorResponsePolicy();
    $request->urlMap->defaultCustomErrorResponsePolicy->errorResponseRules = [
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
    ];
    $request->urlMap->defaultCustomErrorResponsePolicy->errorService = 'ipsa';
    $request->urlMap->defaultRouteAction = new HttpRouteAction();
    $request->urlMap->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap->defaultRouteAction->corsPolicy->allowHeaders = [
        'provident',
        'vel',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowMethods = [
        'reprehenderit',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'rerum',
        'molestiae',
        'beatae',
        'repellendus',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowOrigins = [
        'maxime',
        'aspernatur',
        'corporis',
        'sit',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap->defaultRouteAction->corsPolicy->exposeHeaders = [
        'ex',
        'consequatur',
        'quo',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->maxAge = 492596;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 348424;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort->percentage = 1188.86;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 850288;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'magni';
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->percentage = 6633.7;
    $request->urlMap->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap->defaultRouteAction->maxStreamDuration->nanos = 889976;
    $request->urlMap->defaultRouteAction->maxStreamDuration->seconds = 'expedita';
    $request->urlMap->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap->defaultRouteAction->requestMirrorPolicy->backendService = 'necessitatibus';
    $request->urlMap->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap->defaultRouteAction->retryPolicy->numRetries = 516918;
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 731106;
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'provident';
    $request->urlMap->defaultRouteAction->retryPolicy->retryConditions = [
        'consequuntur',
        'molestias',
        'officiis',
    ];
    $request->urlMap->defaultRouteAction->timeout = new Duration();
    $request->urlMap->defaultRouteAction->timeout->nanos = 183777;
    $request->urlMap->defaultRouteAction->timeout->seconds = 'vel';
    $request->urlMap->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap->defaultRouteAction->urlRewrite->hostRewrite = 'aliquam';
    $request->urlMap->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'iure';
    $request->urlMap->defaultRouteAction->urlRewrite->pathTemplateRewrite = 'ab';
    $request->urlMap->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMap->defaultService = 'veniam';
    $request->urlMap->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap->defaultUrlRedirect->hostRedirect = 'officiis';
    $request->urlMap->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap->defaultUrlRedirect->pathRedirect = 'minus';
    $request->urlMap->defaultUrlRedirect->prefixRedirect = 'soluta';
    $request->urlMap->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::PERMANENT_REDIRECT;
    $request->urlMap->defaultUrlRedirect->stripQuery = false;
    $request->urlMap->description = 'reprehenderit';
    $request->urlMap->fingerprint = 'a';
    $request->urlMap->headerAction = new HttpHeaderAction();
    $request->urlMap->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap->headerAction->requestHeadersToRemove = [
        'incidunt',
        'voluptatibus',
        'ipsa',
    ];
    $request->urlMap->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap->headerAction->responseHeadersToRemove = [
        'incidunt',
        'architecto',
        'magnam',
        'tempora',
    ];
    $request->urlMap->hostRules = [
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMap->id = 'tenetur';
    $request->urlMap->kind = 'dignissimos';
    $request->urlMap->name = 'Johnny Stehr';
    $request->urlMap->pathMatchers = [
        new PathMatcher(),
    ];
    $request->urlMap->region = 'aperiam';
    $request->urlMap->selfLink = 'alias';
    $request->urlMap->tests = [
        new UrlMapTest(),
    ];
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ut';
    $request->fields = 'iusto';
    $request->key = 'optio';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'distinctio';
    $request->requestId = 'quos';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'quasi';
    $request->userIp = 'commodi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->cacheInvalidationRule = new CacheInvalidationRule();
    $request->cacheInvalidationRule->host = 'rerum';
    $request->cacheInvalidationRule->path = 'consectetur';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptates';
    $request->fields = 'unde';
    $request->key = 'blanditiis';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->project = 'commodi';
    $request->quotaUser = 'perferendis';
    $request->requestId = 'mollitia';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'id';
    $request->urlMap = 'mollitia';
    $request->userIp = 'voluptatibus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deleniti';
    $request->fields = 'ea';
    $request->filter = 'esse';
    $request->key = 'rem';
    $request->maxResults = 717070;
    $request->oauthToken = 'officia';
    $request->orderBy = 'quis';
    $request->pageToken = 'ipsa';
    $request->prettyPrint = false;
    $request->project = 'accusantium';
    $request->quotaUser = 'officia';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'hic';
    $request->userIp = 'ut';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->urlMap1 = new UrlMap();
    $request->urlMap1->creationTimestamp = 'nobis';
    $request->urlMap1->defaultCustomErrorResponsePolicy = new CustomErrorResponsePolicy();
    $request->urlMap1->defaultCustomErrorResponsePolicy->errorResponseRules = [
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
    ];
    $request->urlMap1->defaultCustomErrorResponsePolicy->errorService = 'dolores';
    $request->urlMap1->defaultRouteAction = new HttpRouteAction();
    $request->urlMap1->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap1->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->allowHeaders = [
        'quibusdam',
        'ex',
        'optio',
        'a',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowMethods = [
        'qui',
        'dolores',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'fugiat',
        'corporis',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOrigins = [
        'ea',
        'architecto',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->exposeHeaders = [
        'praesentium',
        'corrupti',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->maxAge = 40319;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 249240;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->percentage = 1607.96;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 105897;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'aspernatur';
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->percentage = 9847.28;
    $request->urlMap1->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap1->defaultRouteAction->maxStreamDuration->nanos = 498960;
    $request->urlMap1->defaultRouteAction->maxStreamDuration->seconds = 'facilis';
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy->backendService = 'minima';
    $request->urlMap1->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap1->defaultRouteAction->retryPolicy->numRetries = 601705;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 724676;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'ducimus';
    $request->urlMap1->defaultRouteAction->retryPolicy->retryConditions = [
        'nemo',
    ];
    $request->urlMap1->defaultRouteAction->timeout = new Duration();
    $request->urlMap1->defaultRouteAction->timeout->nanos = 305662;
    $request->urlMap1->defaultRouteAction->timeout->seconds = 'voluptas';
    $request->urlMap1->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap1->defaultRouteAction->urlRewrite->hostRewrite = 'magnam';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'odit';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathTemplateRewrite = 'nobis';
    $request->urlMap1->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMap1->defaultService = 'accusamus';
    $request->urlMap1->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap1->defaultUrlRedirect->hostRedirect = 'ipsum';
    $request->urlMap1->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap1->defaultUrlRedirect->pathRedirect = 'dignissimos';
    $request->urlMap1->defaultUrlRedirect->prefixRedirect = 'placeat';
    $request->urlMap1->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::PERMANENT_REDIRECT;
    $request->urlMap1->defaultUrlRedirect->stripQuery = false;
    $request->urlMap1->description = 'aliquam';
    $request->urlMap1->fingerprint = 'quod';
    $request->urlMap1->headerAction = new HttpHeaderAction();
    $request->urlMap1->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->requestHeadersToRemove = [
        'dolor',
        'optio',
        'laborum',
        'eius',
    ];
    $request->urlMap1->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->responseHeadersToRemove = [
        'blanditiis',
    ];
    $request->urlMap1->hostRules = [
        new HostRule(),
    ];
    $request->urlMap1->id = 'molestiae';
    $request->urlMap1->kind = 'natus';
    $request->urlMap1->name = 'Carole Lowe';
    $request->urlMap1->pathMatchers = [
        new PathMatcher(),
    ];
    $request->urlMap1->region = 'ullam';
    $request->urlMap1->selfLink = 'ea';
    $request->urlMap1->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'sit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'itaque';
    $request->key = 'velit';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->project = 'facilis';
    $request->quotaUser = 'harum';
    $request->requestId = 'voluptatum';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'eaque';
    $request->urlMapPathParameter = 'consequatur';
    $request->userIp = 'odit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'ratione',
        'vero',
        'ab',
        'facere',
    ];
    $request->accessToken = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'corporis';
    $request->key = 'occaecati';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->project = 'molestiae';
    $request->quotaUser = 'eveniet';
    $request->resource = 'voluptatibus';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'earum';
    $request->userIp = 'sunt';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->urlMap1 = new UrlMap();
    $request->urlMap1->creationTimestamp = 'atque';
    $request->urlMap1->defaultCustomErrorResponsePolicy = new CustomErrorResponsePolicy();
    $request->urlMap1->defaultCustomErrorResponsePolicy->errorResponseRules = [
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
    ];
    $request->urlMap1->defaultCustomErrorResponsePolicy->errorService = 'harum';
    $request->urlMap1->defaultRouteAction = new HttpRouteAction();
    $request->urlMap1->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap1->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->allowHeaders = [
        'quam',
        'quisquam',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowMethods = [
        'quaerat',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'reprehenderit',
        'neque',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOrigins = [
        'maxime',
        'omnis',
        'atque',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->exposeHeaders = [
        'ea',
        'repellendus',
        'odit',
        'ea',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->maxAge = 514438;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 973421;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->percentage = 5663.9;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 128470;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'mollitia';
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->percentage = 3833.7;
    $request->urlMap1->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap1->defaultRouteAction->maxStreamDuration->nanos = 705555;
    $request->urlMap1->defaultRouteAction->maxStreamDuration->seconds = 'cum';
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy->backendService = 'doloremque';
    $request->urlMap1->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap1->defaultRouteAction->retryPolicy->numRetries = 511024;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 377797;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'sunt';
    $request->urlMap1->defaultRouteAction->retryPolicy->retryConditions = [
        'aspernatur',
        'dolores',
    ];
    $request->urlMap1->defaultRouteAction->timeout = new Duration();
    $request->urlMap1->defaultRouteAction->timeout->nanos = 163539;
    $request->urlMap1->defaultRouteAction->timeout->seconds = 'ad';
    $request->urlMap1->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap1->defaultRouteAction->urlRewrite->hostRewrite = 'quidem';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'aperiam';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathTemplateRewrite = 'veniam';
    $request->urlMap1->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMap1->defaultService = 'qui';
    $request->urlMap1->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap1->defaultUrlRedirect->hostRedirect = 'laudantium';
    $request->urlMap1->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap1->defaultUrlRedirect->pathRedirect = 'repudiandae';
    $request->urlMap1->defaultUrlRedirect->prefixRedirect = 'dignissimos';
    $request->urlMap1->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::SEE_OTHER;
    $request->urlMap1->defaultUrlRedirect->stripQuery = false;
    $request->urlMap1->description = 'odit';
    $request->urlMap1->fingerprint = 'quae';
    $request->urlMap1->headerAction = new HttpHeaderAction();
    $request->urlMap1->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->requestHeadersToRemove = [
        'optio',
        'reiciendis',
        'nobis',
        'voluptate',
    ];
    $request->urlMap1->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->responseHeadersToRemove = [
        'dolorum',
        'maiores',
        'hic',
        'minima',
    ];
    $request->urlMap1->hostRules = [
        new HostRule(),
        new HostRule(),
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMap1->id = 'repudiandae';
    $request->urlMap1->kind = 'dolore';
    $request->urlMap1->name = 'Miss Bruce Rath';
    $request->urlMap1->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->urlMap1->region = 'esse';
    $request->urlMap1->selfLink = 'soluta';
    $request->urlMap1->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestias';
    $request->fields = 'ab';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->project = 'sequi';
    $request->quotaUser = 'numquam';
    $request->requestId = 'rerum';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'et';
    $request->urlMapPathParameter = 'sint';
    $request->userIp = 'eaque';

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
        UrlMapsValidateRequestLoadBalancingSchemesEnum::LOAD_BALANCING_SCHEME_UNSPECIFIED,
    ];
    $request->urlMapsValidateRequest->resource = new UrlMap();
    $request->urlMapsValidateRequest->resource->creationTimestamp = 'quia';
    $request->urlMapsValidateRequest->resource->defaultCustomErrorResponsePolicy = new CustomErrorResponsePolicy();
    $request->urlMapsValidateRequest->resource->defaultCustomErrorResponsePolicy->errorResponseRules = [
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
    ];
    $request->urlMapsValidateRequest->resource->defaultCustomErrorResponsePolicy->errorService = 'incidunt';
    $request->urlMapsValidateRequest->resource->defaultRouteAction = new HttpRouteAction();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowHeaders = [
        'blanditiis',
        'velit',
        'porro',
        'commodi',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowMethods = [
        'dolor',
        'ex',
        'deserunt',
        'corporis',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'expedita',
        'adipisci',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowOrigins = [
        'quibusdam',
        'ullam',
        'rerum',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->exposeHeaders = [
        'nihil',
        'unde',
        'labore',
        'ipsa',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->maxAge = 872293;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 270140;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort->percentage = 4193.84;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 832608;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'quam';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->percentage = 526.86;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration->nanos = 191993;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration->seconds = 'iste';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->requestMirrorPolicy->backendService = 'repellendus';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->numRetries = 253573;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 549905;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'molestias';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->retryConditions = [
        'hic',
        'autem',
        'voluptatem',
    ];
    $request->urlMapsValidateRequest->resource->defaultRouteAction->timeout = new Duration();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->timeout->nanos = 19377;
    $request->urlMapsValidateRequest->resource->defaultRouteAction->timeout->seconds = 'ipsam';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMapsValidateRequest->resource->defaultRouteAction->urlRewrite->hostRewrite = 'magnam';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'suscipit';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->urlRewrite->pathTemplateRewrite = 'perferendis';
    $request->urlMapsValidateRequest->resource->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMapsValidateRequest->resource->defaultService = 'voluptatem';
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->hostRedirect = 'ullam';
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->pathRedirect = 'doloribus';
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->prefixRedirect = 'accusantium';
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::FOUND;
    $request->urlMapsValidateRequest->resource->defaultUrlRedirect->stripQuery = false;
    $request->urlMapsValidateRequest->resource->description = 'debitis';
    $request->urlMapsValidateRequest->resource->fingerprint = 'voluptate';
    $request->urlMapsValidateRequest->resource->headerAction = new HttpHeaderAction();
    $request->urlMapsValidateRequest->resource->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMapsValidateRequest->resource->headerAction->requestHeadersToRemove = [
        'totam',
        'autem',
        'ut',
        'non',
    ];
    $request->urlMapsValidateRequest->resource->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMapsValidateRequest->resource->headerAction->responseHeadersToRemove = [
        'voluptatum',
        'possimus',
    ];
    $request->urlMapsValidateRequest->resource->hostRules = [
        new HostRule(),
        new HostRule(),
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMapsValidateRequest->resource->id = 'aperiam';
    $request->urlMapsValidateRequest->resource->kind = 'repellendus';
    $request->urlMapsValidateRequest->resource->name = 'Arlene Dickinson IV';
    $request->urlMapsValidateRequest->resource->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->urlMapsValidateRequest->resource->region = 'sequi';
    $request->urlMapsValidateRequest->resource->selfLink = 'aut';
    $request->urlMapsValidateRequest->resource->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corrupti';
    $request->fields = 'ea';
    $request->key = 'dolores';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->project = 'necessitatibus';
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'occaecati';
    $request->urlMap = 'qui';
    $request->userIp = 'a';

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
