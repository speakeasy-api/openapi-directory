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
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'adipisci';
    $request->fields = 'rerum';
    $request->key = 'nesciunt';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->project = 'placeat';
    $request->quotaUser = 'blanditiis';
    $request->region = 'cumque';
    $request->requestId = 'dignissimos';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'ratione';
    $request->urlMap = 'eligendi';
    $request->userIp = 'esse';

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
    $request->accessToken = 'alias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'inventore';
    $request->fields = 'voluptas';
    $request->key = 'molestiae';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->project = 'at';
    $request->quotaUser = 'excepturi';
    $request->region = 'perferendis';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'quisquam';
    $request->urlMap = 'expedita';
    $request->userIp = 'labore';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->urlMap = new UrlMap();
    $request->urlMap->creationTimestamp = 'recusandae';
    $request->urlMap->defaultCustomErrorResponsePolicy = new CustomErrorResponsePolicy();
    $request->urlMap->defaultCustomErrorResponsePolicy->errorResponseRules = [
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
    ];
    $request->urlMap->defaultCustomErrorResponsePolicy->errorService = 'itaque';
    $request->urlMap->defaultRouteAction = new HttpRouteAction();
    $request->urlMap->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap->defaultRouteAction->corsPolicy->allowHeaders = [
        'amet',
        'quod',
        'inventore',
        'odit',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowMethods = [
        'optio',
        'ipsum',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'aperiam',
        'molestias',
        'iste',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowOrigins = [
        'veniam',
        'consequuntur',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap->defaultRouteAction->corsPolicy->exposeHeaders = [
        'dolores',
        'ipsam',
        'ipsa',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->maxAge = 865885;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 805350;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort->percentage = 7498.85;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 743949;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'eligendi';
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->percentage = 8567.29;
    $request->urlMap->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap->defaultRouteAction->maxStreamDuration->nanos = 246111;
    $request->urlMap->defaultRouteAction->maxStreamDuration->seconds = 'facilis';
    $request->urlMap->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap->defaultRouteAction->requestMirrorPolicy->backendService = 'architecto';
    $request->urlMap->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap->defaultRouteAction->retryPolicy->numRetries = 167786;
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 120736;
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'tempore';
    $request->urlMap->defaultRouteAction->retryPolicy->retryConditions = [
        'quas',
        'placeat',
        'beatae',
    ];
    $request->urlMap->defaultRouteAction->timeout = new Duration();
    $request->urlMap->defaultRouteAction->timeout->nanos = 889061;
    $request->urlMap->defaultRouteAction->timeout->seconds = 'saepe';
    $request->urlMap->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap->defaultRouteAction->urlRewrite->hostRewrite = 'minima';
    $request->urlMap->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'saepe';
    $request->urlMap->defaultRouteAction->urlRewrite->pathTemplateRewrite = 'voluptate';
    $request->urlMap->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMap->defaultService = 'doloremque';
    $request->urlMap->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap->defaultUrlRedirect->hostRedirect = 'autem';
    $request->urlMap->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap->defaultUrlRedirect->pathRedirect = 'quasi';
    $request->urlMap->defaultUrlRedirect->prefixRedirect = 'adipisci';
    $request->urlMap->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::PERMANENT_REDIRECT;
    $request->urlMap->defaultUrlRedirect->stripQuery = false;
    $request->urlMap->description = 'quasi';
    $request->urlMap->fingerprint = 'placeat';
    $request->urlMap->headerAction = new HttpHeaderAction();
    $request->urlMap->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap->headerAction->requestHeadersToRemove = [
        'delectus',
        'deserunt',
        'aut',
    ];
    $request->urlMap->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap->headerAction->responseHeadersToRemove = [
        'repellendus',
        'beatae',
    ];
    $request->urlMap->hostRules = [
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMap->id = 'autem';
    $request->urlMap->kind = 'ut';
    $request->urlMap->name = 'Bruce Keebler DDS';
    $request->urlMap->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->urlMap->region = 'minima';
    $request->urlMap->selfLink = 'recusandae';
    $request->urlMap->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquid';
    $request->fields = 'necessitatibus';
    $request->key = 'harum';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'debitis';
    $request->region = 'quis';
    $request->requestId = 'accusamus';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'error';

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
    $request->cacheInvalidationRule->host = 'tenetur';
    $request->cacheInvalidationRule->path = 'velit';
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'amet';
    $request->fields = 'enim';
    $request->key = 'quas';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->project = 'nisi';
    $request->quotaUser = 'deserunt';
    $request->region = 'corrupti';
    $request->requestId = 'reprehenderit';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'soluta';
    $request->urlMap = 'odio';
    $request->userIp = 'est';

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
    $request->accessToken = 'minus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'recusandae';
    $request->fields = 'ullam';
    $request->filter = 'eum';
    $request->key = 'iste';
    $request->maxResults = 868274;
    $request->oauthToken = 'voluptate';
    $request->orderBy = 'alias';
    $request->pageToken = 'minus';
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'consequatur';
    $request->region = 'suscipit';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'occaecati';
    $request->userIp = 'sit';

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
    $request->urlMap1->creationTimestamp = 'maiores';
    $request->urlMap1->defaultCustomErrorResponsePolicy = new CustomErrorResponsePolicy();
    $request->urlMap1->defaultCustomErrorResponsePolicy->errorResponseRules = [
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
    ];
    $request->urlMap1->defaultCustomErrorResponsePolicy->errorService = 'praesentium';
    $request->urlMap1->defaultRouteAction = new HttpRouteAction();
    $request->urlMap1->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap1->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->allowHeaders = [
        'incidunt',
        'incidunt',
        'vitae',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowMethods = [
        'nostrum',
        'explicabo',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'sint',
        'voluptatibus',
        'ipsa',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOrigins = [
        'sapiente',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->exposeHeaders = [
        'quaerat',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->maxAge = 276943;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 179524;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->percentage = 7660.04;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 424434;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'inventore';
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->percentage = 6958.15;
    $request->urlMap1->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap1->defaultRouteAction->maxStreamDuration->nanos = 894398;
    $request->urlMap1->defaultRouteAction->maxStreamDuration->seconds = 'quae';
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy->backendService = 'ipsum';
    $request->urlMap1->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap1->defaultRouteAction->retryPolicy->numRetries = 199631;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 718028;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'dolorum';
    $request->urlMap1->defaultRouteAction->retryPolicy->retryConditions = [
        'nulla',
        'debitis',
        'corporis',
        'neque',
    ];
    $request->urlMap1->defaultRouteAction->timeout = new Duration();
    $request->urlMap1->defaultRouteAction->timeout->nanos = 177507;
    $request->urlMap1->defaultRouteAction->timeout->seconds = 'nam';
    $request->urlMap1->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap1->defaultRouteAction->urlRewrite->hostRewrite = 'ea';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'ullam';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathTemplateRewrite = 'eos';
    $request->urlMap1->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMap1->defaultService = 'reiciendis';
    $request->urlMap1->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap1->defaultUrlRedirect->hostRedirect = 'praesentium';
    $request->urlMap1->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap1->defaultUrlRedirect->pathRedirect = 'suscipit';
    $request->urlMap1->defaultUrlRedirect->prefixRedirect = 'explicabo';
    $request->urlMap1->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::PERMANENT_REDIRECT;
    $request->urlMap1->defaultUrlRedirect->stripQuery = false;
    $request->urlMap1->description = 'corporis';
    $request->urlMap1->fingerprint = 'dolorem';
    $request->urlMap1->headerAction = new HttpHeaderAction();
    $request->urlMap1->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->requestHeadersToRemove = [
        'eos',
        'laudantium',
        'enim',
        'provident',
    ];
    $request->urlMap1->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->responseHeadersToRemove = [
        'non',
        'magni',
        'consequuntur',
        'quia',
    ];
    $request->urlMap1->hostRules = [
        new HostRule(),
    ];
    $request->urlMap1->id = 'illo';
    $request->urlMap1->kind = 'doloribus';
    $request->urlMap1->name = 'Rafael Hudson';
    $request->urlMap1->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->urlMap1->region = 'numquam';
    $request->urlMap1->selfLink = 'quae';
    $request->urlMap1->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'magni';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nam';
    $request->fields = 'est';
    $request->key = 'ad';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->project = 'rerum';
    $request->quotaUser = 'culpa';
    $request->region = 'sit';
    $request->requestId = 'eum';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'tempore';
    $request->urlMapPathParameter = 'corrupti';
    $request->userIp = 'at';

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
        'dicta',
        'libero',
        'recusandae',
    ];
    $request->accessToken = 'libero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quae';
    $request->fields = 'eaque';
    $request->key = 'est';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'dolorum';
    $request->quotaUser = 'laborum';
    $request->region = 'atque';
    $request->resource = 'molestiae';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'perspiciatis';
    $request->userIp = 'labore';

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
    $request->urlMap1->creationTimestamp = 'unde';
    $request->urlMap1->defaultCustomErrorResponsePolicy = new CustomErrorResponsePolicy();
    $request->urlMap1->defaultCustomErrorResponsePolicy->errorResponseRules = [
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
    ];
    $request->urlMap1->defaultCustomErrorResponsePolicy->errorService = 'quibusdam';
    $request->urlMap1->defaultRouteAction = new HttpRouteAction();
    $request->urlMap1->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap1->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->allowHeaders = [
        'modi',
        'maiores',
        'cumque',
        'earum',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowMethods = [
        'libero',
        'corporis',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'optio',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOrigins = [
        'blanditiis',
        'molestiae',
        'a',
        'quae',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->exposeHeaders = [
        'asperiores',
        'dolor',
        'excepturi',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->maxAge = 143247;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 459004;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->percentage = 762.27;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 19789;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'reprehenderit';
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->percentage = 4284.01;
    $request->urlMap1->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap1->defaultRouteAction->maxStreamDuration->nanos = 636996;
    $request->urlMap1->defaultRouteAction->maxStreamDuration->seconds = 'qui';
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy->backendService = 'dolore';
    $request->urlMap1->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap1->defaultRouteAction->retryPolicy->numRetries = 718949;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 274809;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'consequatur';
    $request->urlMap1->defaultRouteAction->retryPolicy->retryConditions = [
        'deleniti',
        'maiores',
        'doloremque',
        'praesentium',
    ];
    $request->urlMap1->defaultRouteAction->timeout = new Duration();
    $request->urlMap1->defaultRouteAction->timeout->nanos = 714830;
    $request->urlMap1->defaultRouteAction->timeout->seconds = 'sapiente';
    $request->urlMap1->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap1->defaultRouteAction->urlRewrite->hostRewrite = 'a';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'quae';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathTemplateRewrite = 'doloremque';
    $request->urlMap1->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMap1->defaultService = 'architecto';
    $request->urlMap1->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap1->defaultUrlRedirect->hostRedirect = 'saepe';
    $request->urlMap1->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap1->defaultUrlRedirect->pathRedirect = 'laudantium';
    $request->urlMap1->defaultUrlRedirect->prefixRedirect = 'praesentium';
    $request->urlMap1->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::TEMPORARY_REDIRECT;
    $request->urlMap1->defaultUrlRedirect->stripQuery = false;
    $request->urlMap1->description = 'blanditiis';
    $request->urlMap1->fingerprint = 'ea';
    $request->urlMap1->headerAction = new HttpHeaderAction();
    $request->urlMap1->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->requestHeadersToRemove = [
        'voluptas',
        'optio',
        'totam',
    ];
    $request->urlMap1->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->responseHeadersToRemove = [
        'eos',
    ];
    $request->urlMap1->hostRules = [
        new HostRule(),
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMap1->id = 'eveniet';
    $request->urlMap1->kind = 'aut';
    $request->urlMap1->name = 'Dale Schoen';
    $request->urlMap1->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->urlMap1->region = 'blanditiis';
    $request->urlMap1->selfLink = 'sint';
    $request->urlMap1->tests = [
        new UrlMapTest(),
    ];
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fugit';
    $request->fields = 'neque';
    $request->key = 'asperiores';
    $request->oauthToken = 'corrupti';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'autem';
    $request->region = 'alias';
    $request->requestId = 'eaque';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'commodi';
    $request->urlMapPathParameter = 'inventore';
    $request->userIp = 'porro';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionUrlMapsValidateRequest = new RegionUrlMapsValidateRequest();
    $request->regionUrlMapsValidateRequest->resource = new UrlMap();
    $request->regionUrlMapsValidateRequest->resource->creationTimestamp = 'voluptatum';
    $request->regionUrlMapsValidateRequest->resource->defaultCustomErrorResponsePolicy = new CustomErrorResponsePolicy();
    $request->regionUrlMapsValidateRequest->resource->defaultCustomErrorResponsePolicy->errorResponseRules = [
        new CustomErrorResponsePolicyCustomErrorResponseRule(),
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultCustomErrorResponsePolicy->errorService = 'aliquam';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction = new HttpRouteAction();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowHeaders = [
        'in',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowMethods = [
        'impedit',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'est',
        'provident',
        'vitae',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowOrigins = [
        'voluptatum',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->disabled = false;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->exposeHeaders = [
        'nesciunt',
        'atque',
        'maiores',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->maxAge = 87714;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 738626;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort->percentage = 4105.47;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 81000;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'est';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->percentage = 2482.29;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration = new Duration();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration->nanos = 191069;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration->seconds = 'inventore';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->requestMirrorPolicy->backendService = 'dolorum';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->numRetries = 370096;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 266037;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'possimus';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->retryConditions = [
        'ab',
        'voluptatem',
        'magni',
        'iste',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->timeout = new Duration();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->timeout->nanos = 267445;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->timeout->seconds = 'reiciendis';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->urlRewrite->hostRewrite = 'error';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'eos';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->urlRewrite->pathTemplateRewrite = 'voluptatibus';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultService = 'possimus';
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect = new HttpRedirectAction();
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->hostRedirect = 'omnis';
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->httpsRedirect = false;
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->pathRedirect = 'nesciunt';
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->prefixRedirect = 'perspiciatis';
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::SEE_OTHER;
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->stripQuery = false;
    $request->regionUrlMapsValidateRequest->resource->description = 'mollitia';
    $request->regionUrlMapsValidateRequest->resource->fingerprint = 'quas';
    $request->regionUrlMapsValidateRequest->resource->headerAction = new HttpHeaderAction();
    $request->regionUrlMapsValidateRequest->resource->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->regionUrlMapsValidateRequest->resource->headerAction->requestHeadersToRemove = [
        'et',
        'eveniet',
    ];
    $request->regionUrlMapsValidateRequest->resource->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
    ];
    $request->regionUrlMapsValidateRequest->resource->headerAction->responseHeadersToRemove = [
        'iste',
        'aspernatur',
        'placeat',
    ];
    $request->regionUrlMapsValidateRequest->resource->hostRules = [
        new HostRule(),
    ];
    $request->regionUrlMapsValidateRequest->resource->id = 'doloremque';
    $request->regionUrlMapsValidateRequest->resource->kind = 'repudiandae';
    $request->regionUrlMapsValidateRequest->resource->name = 'Walter Crist';
    $request->regionUrlMapsValidateRequest->resource->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->regionUrlMapsValidateRequest->resource->region = 'cumque';
    $request->regionUrlMapsValidateRequest->resource->selfLink = 'dolor';
    $request->regionUrlMapsValidateRequest->resource->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'commodi';
    $request->fields = 'dolore';
    $request->key = 'iusto';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->project = 'explicabo';
    $request->quotaUser = 'numquam';
    $request->region = 'voluptatem';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'optio';
    $request->urlMap = 'beatae';
    $request->userIp = 'illo';

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
