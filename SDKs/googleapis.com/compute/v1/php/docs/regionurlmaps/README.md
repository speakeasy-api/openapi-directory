# regionUrlMaps

### Available Operations

* [computeRegionUrlMapsDelete](#computeregionurlmapsdelete) - Deletes the specified UrlMap resource.
* [computeRegionUrlMapsGet](#computeregionurlmapsget) - Returns the specified UrlMap resource.
* [computeRegionUrlMapsInsert](#computeregionurlmapsinsert) - Creates a UrlMap resource in the specified project using the data included in the request.
* [computeRegionUrlMapsList](#computeregionurlmapslist) - Retrieves the list of UrlMap resources available to the specified project in the specified region.
* [computeRegionUrlMapsPatch](#computeregionurlmapspatch) - Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cupiditate';
    $request->fields = 'modi';
    $request->key = 'commodi';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'dolorum';
    $request->region = 'ducimus';
    $request->requestId = 'id';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'ullam';
    $request->urlMap = 'deserunt';
    $request->userIp = 'totam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perspiciatis';
    $request->fields = 'voluptates';
    $request->key = 'impedit';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->project = 'rerum';
    $request->quotaUser = 'amet';
    $request->region = 'eum';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'rem';
    $request->urlMap = 'maxime';
    $request->userIp = 'impedit';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionUrlMapsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->urlMap = new UrlMap();
    $request->urlMap->creationTimestamp = 'consectetur';
    $request->urlMap->defaultRouteAction = new HttpRouteAction();
    $request->urlMap->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap->defaultRouteAction->corsPolicy->allowHeaders = [
        'dolor',
        'magni',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowMethods = [
        'magni',
        'dignissimos',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'sit',
        'necessitatibus',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->allowOrigins = [
        'vel',
        'autem',
        'earum',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap->defaultRouteAction->corsPolicy->exposeHeaders = [
        'nihil',
        'voluptates',
        'accusantium',
    ];
    $request->urlMap->defaultRouteAction->corsPolicy->maxAge = 333118;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 261243;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->abort->percentage = 1078.35;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 11921;
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'neque';
    $request->urlMap->defaultRouteAction->faultInjectionPolicy->delay->percentage = 1988.76;
    $request->urlMap->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap->defaultRouteAction->maxStreamDuration->nanos = 306537;
    $request->urlMap->defaultRouteAction->maxStreamDuration->seconds = 'esse';
    $request->urlMap->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap->defaultRouteAction->requestMirrorPolicy->backendService = 'pariatur';
    $request->urlMap->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap->defaultRouteAction->retryPolicy->numRetries = 474767;
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 549074;
    $request->urlMap->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'asperiores';
    $request->urlMap->defaultRouteAction->retryPolicy->retryConditions = [
        'odit',
        'ut',
        'cupiditate',
        'ab',
    ];
    $request->urlMap->defaultRouteAction->timeout = new Duration();
    $request->urlMap->defaultRouteAction->timeout->nanos = 112148;
    $request->urlMap->defaultRouteAction->timeout->seconds = 'magnam';
    $request->urlMap->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap->defaultRouteAction->urlRewrite->hostRewrite = 'ullam';
    $request->urlMap->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'asperiores';
    $request->urlMap->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMap->defaultService = 'soluta';
    $request->urlMap->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap->defaultUrlRedirect->hostRedirect = 'excepturi';
    $request->urlMap->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap->defaultUrlRedirect->pathRedirect = 'voluptates';
    $request->urlMap->defaultUrlRedirect->prefixRedirect = 'veniam';
    $request->urlMap->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::PERMANENT_REDIRECT;
    $request->urlMap->defaultUrlRedirect->stripQuery = false;
    $request->urlMap->description = 'laborum';
    $request->urlMap->fingerprint = 'incidunt';
    $request->urlMap->headerAction = new HttpHeaderAction();
    $request->urlMap->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap->headerAction->requestHeadersToRemove = [
        'ipsum',
        'amet',
        'nisi',
        'aliquid',
    ];
    $request->urlMap->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap->headerAction->responseHeadersToRemove = [
        'accusamus',
        'deserunt',
    ];
    $request->urlMap->hostRules = [
        new HostRule(),
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMap->id = 'autem';
    $request->urlMap->kind = 'rerum';
    $request->urlMap->name = 'Todd Wisoky II';
    $request->urlMap->pathMatchers = [
        new PathMatcher(),
        new PathMatcher(),
        new PathMatcher(),
        new PathMatcher(),
    ];
    $request->urlMap->region = 'praesentium';
    $request->urlMap->selfLink = 'quod';
    $request->urlMap->tests = [
        new UrlMapTest(),
    ];
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nemo';
    $request->fields = 'magni';
    $request->key = 'dolorum';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'placeat';
    $request->quotaUser = 'recusandae';
    $request->region = 'repellendus';
    $request->requestId = 'dolorum';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'minus';
    $request->userIp = 'ad';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'atque';
    $request->fields = 'architecto';
    $request->filter = 'numquam';
    $request->key = 'recusandae';
    $request->maxResults = 784985;
    $request->oauthToken = 'fuga';
    $request->orderBy = 'aperiam';
    $request->pageToken = 'architecto';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'cum';
    $request->region = 'quo';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'inventore';
    $request->userIp = 'repudiandae';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionUrlMapsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->urlMap1 = new UrlMap();
    $request->urlMap1->creationTimestamp = 'quae';
    $request->urlMap1->defaultRouteAction = new HttpRouteAction();
    $request->urlMap1->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap1->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->allowHeaders = [
        'quaerat',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowMethods = [
        'fugiat',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'architecto',
        'perferendis',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOrigins = [
        'similique',
        'dolores',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->exposeHeaders = [
        'debitis',
        'asperiores',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->maxAge = 479864;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 97839;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->percentage = 8560.48;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 894885;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'minima';
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->percentage = 4979.58;
    $request->urlMap1->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap1->defaultRouteAction->maxStreamDuration->nanos = 669050;
    $request->urlMap1->defaultRouteAction->maxStreamDuration->seconds = 'dicta';
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy->backendService = 'architecto';
    $request->urlMap1->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap1->defaultRouteAction->retryPolicy->numRetries = 856118;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 430379;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'vitae';
    $request->urlMap1->defaultRouteAction->retryPolicy->retryConditions = [
        'deserunt',
        'tempora',
    ];
    $request->urlMap1->defaultRouteAction->timeout = new Duration();
    $request->urlMap1->defaultRouteAction->timeout->nanos = 245217;
    $request->urlMap1->defaultRouteAction->timeout->seconds = 'dicta';
    $request->urlMap1->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap1->defaultRouteAction->urlRewrite->hostRewrite = 'in';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'laboriosam';
    $request->urlMap1->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMap1->defaultService = 'dolores';
    $request->urlMap1->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap1->defaultUrlRedirect->hostRedirect = 'repudiandae';
    $request->urlMap1->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap1->defaultUrlRedirect->pathRedirect = 'fuga';
    $request->urlMap1->defaultUrlRedirect->prefixRedirect = 'ut';
    $request->urlMap1->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::PERMANENT_REDIRECT;
    $request->urlMap1->defaultUrlRedirect->stripQuery = false;
    $request->urlMap1->description = 'laboriosam';
    $request->urlMap1->fingerprint = 'esse';
    $request->urlMap1->headerAction = new HttpHeaderAction();
    $request->urlMap1->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->requestHeadersToRemove = [
        'nostrum',
        'qui',
        'sunt',
        'rerum',
    ];
    $request->urlMap1->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->responseHeadersToRemove = [
        'quas',
    ];
    $request->urlMap1->hostRules = [
        new HostRule(),
        new HostRule(),
        new HostRule(),
    ];
    $request->urlMap1->id = 'error';
    $request->urlMap1->kind = 'doloremque';
    $request->urlMap1->name = 'Carol Kemmer DVM';
    $request->urlMap1->pathMatchers = [
        new PathMatcher(),
    ];
    $request->urlMap1->region = 'fugit';
    $request->urlMap1->selfLink = 'quaerat';
    $request->urlMap1->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quidem';
    $request->fields = 'ut';
    $request->key = 'optio';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->project = 'ex';
    $request->quotaUser = 'dolore';
    $request->region = 'eligendi';
    $request->requestId = 'magni';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'sequi';
    $request->urlMapPathParameter = 'culpa';
    $request->userIp = 'ratione';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionUrlMapsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionUrlMapsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->urlMap1 = new UrlMap();
    $request->urlMap1->creationTimestamp = 'optio';
    $request->urlMap1->defaultRouteAction = new HttpRouteAction();
    $request->urlMap1->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->urlMap1->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->allowHeaders = [
        'voluptatum',
        'deleniti',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowMethods = [
        'facere',
        'debitis',
        'ex',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'reiciendis',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->allowOrigins = [
        'est',
        'dolorum',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->disabled = false;
    $request->urlMap1->defaultRouteAction->corsPolicy->exposeHeaders = [
        'exercitationem',
        'molestias',
    ];
    $request->urlMap1->defaultRouteAction->corsPolicy->maxAge = 661606;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 375074;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->abort->percentage = 3597.32;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 911982;
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'eos';
    $request->urlMap1->defaultRouteAction->faultInjectionPolicy->delay->percentage = 483.47;
    $request->urlMap1->defaultRouteAction->maxStreamDuration = new Duration();
    $request->urlMap1->defaultRouteAction->maxStreamDuration->nanos = 534039;
    $request->urlMap1->defaultRouteAction->maxStreamDuration->seconds = 'amet';
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->urlMap1->defaultRouteAction->requestMirrorPolicy->backendService = 'aut';
    $request->urlMap1->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->urlMap1->defaultRouteAction->retryPolicy->numRetries = 96566;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 385079;
    $request->urlMap1->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'maxime';
    $request->urlMap1->defaultRouteAction->retryPolicy->retryConditions = [
        'ratione',
        'modi',
        'soluta',
    ];
    $request->urlMap1->defaultRouteAction->timeout = new Duration();
    $request->urlMap1->defaultRouteAction->timeout->nanos = 726165;
    $request->urlMap1->defaultRouteAction->timeout->seconds = 'molestias';
    $request->urlMap1->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->urlMap1->defaultRouteAction->urlRewrite->hostRewrite = 'dignissimos';
    $request->urlMap1->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'repellendus';
    $request->urlMap1->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
        new WeightedBackendService(),
    ];
    $request->urlMap1->defaultService = 'repellat';
    $request->urlMap1->defaultUrlRedirect = new HttpRedirectAction();
    $request->urlMap1->defaultUrlRedirect->hostRedirect = 'eum';
    $request->urlMap1->defaultUrlRedirect->httpsRedirect = false;
    $request->urlMap1->defaultUrlRedirect->pathRedirect = 'quia';
    $request->urlMap1->defaultUrlRedirect->prefixRedirect = 'quae';
    $request->urlMap1->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::FOUND;
    $request->urlMap1->defaultUrlRedirect->stripQuery = false;
    $request->urlMap1->description = 'iusto';
    $request->urlMap1->fingerprint = 'culpa';
    $request->urlMap1->headerAction = new HttpHeaderAction();
    $request->urlMap1->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->requestHeadersToRemove = [
        'esse',
    ];
    $request->urlMap1->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->urlMap1->headerAction->responseHeadersToRemove = [
        'voluptas',
    ];
    $request->urlMap1->hostRules = [
        new HostRule(),
    ];
    $request->urlMap1->id = 'aliquid';
    $request->urlMap1->kind = 'explicabo';
    $request->urlMap1->name = 'Mrs. Alex Heaney';
    $request->urlMap1->pathMatchers = [
        new PathMatcher(),
    ];
    $request->urlMap1->region = 'pariatur';
    $request->urlMap1->selfLink = 'distinctio';
    $request->urlMap1->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->fields = 'sapiente';
    $request->key = 'consectetur';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'at';
    $request->region = 'quia';
    $request->requestId = 'libero';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'quos';
    $request->urlMapPathParameter = 'in';
    $request->userIp = 'laudantium';

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
    $request->regionUrlMapsValidateRequest->resource->creationTimestamp = 'voluptatem';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction = new HttpRouteAction();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy = new CorsPolicy();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowCredentials = false;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowHeaders = [
        'magnam',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowMethods = [
        'adipisci',
        'doloribus',
        'dolore',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowOriginRegexes = [
        'est',
        'mollitia',
        'laudantium',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->allowOrigins = [
        'ex',
        'minima',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->disabled = false;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->exposeHeaders = [
        'sequi',
        'eos',
        'laudantium',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->corsPolicy->maxAge = 236482;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy = new HttpFaultInjection();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort = new HttpFaultAbort();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort->httpStatus = 147974;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->abort->percentage = 4812.82;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay = new HttpFaultDelay();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay = new Duration();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->nanos = 618481;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->fixedDelay->seconds = 'facilis';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->faultInjectionPolicy->delay->percentage = 4653.1;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration = new Duration();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration->nanos = 109150;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->maxStreamDuration->seconds = 'error';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->requestMirrorPolicy = new RequestMirrorPolicy();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->requestMirrorPolicy->backendService = 'quibusdam';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy = new HttpRetryPolicy();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->numRetries = 70720;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout = new Duration();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout->nanos = 757322;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->perTryTimeout->seconds = 'accusamus';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->retryPolicy->retryConditions = [
        'voluptas',
        'reprehenderit',
        'neque',
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->timeout = new Duration();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->timeout->nanos = 814251;
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->timeout->seconds = 'blanditiis';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->urlRewrite = new UrlRewrite();
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->urlRewrite->hostRewrite = 'suscipit';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->urlRewrite->pathPrefixRewrite = 'itaque';
    $request->regionUrlMapsValidateRequest->resource->defaultRouteAction->weightedBackendServices = [
        new WeightedBackendService(),
    ];
    $request->regionUrlMapsValidateRequest->resource->defaultService = 'quidem';
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect = new HttpRedirectAction();
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->hostRedirect = 'sequi';
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->httpsRedirect = false;
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->pathRedirect = 'quis';
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->prefixRedirect = 'voluptates';
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->redirectResponseCode = HttpRedirectActionRedirectResponseCodeEnum::MOVED_PERMANENTLY_DEFAULT;
    $request->regionUrlMapsValidateRequest->resource->defaultUrlRedirect->stripQuery = false;
    $request->regionUrlMapsValidateRequest->resource->description = 'perspiciatis';
    $request->regionUrlMapsValidateRequest->resource->fingerprint = 'id';
    $request->regionUrlMapsValidateRequest->resource->headerAction = new HttpHeaderAction();
    $request->regionUrlMapsValidateRequest->resource->headerAction->requestHeadersToAdd = [
        new HttpHeaderOption(),
    ];
    $request->regionUrlMapsValidateRequest->resource->headerAction->requestHeadersToRemove = [
        'consectetur',
    ];
    $request->regionUrlMapsValidateRequest->resource->headerAction->responseHeadersToAdd = [
        new HttpHeaderOption(),
        new HttpHeaderOption(),
    ];
    $request->regionUrlMapsValidateRequest->resource->headerAction->responseHeadersToRemove = [
        'iusto',
        'quas',
    ];
    $request->regionUrlMapsValidateRequest->resource->hostRules = [
        new HostRule(),
        new HostRule(),
        new HostRule(),
        new HostRule(),
    ];
    $request->regionUrlMapsValidateRequest->resource->id = 'necessitatibus';
    $request->regionUrlMapsValidateRequest->resource->kind = 'minima';
    $request->regionUrlMapsValidateRequest->resource->name = 'Brooke Olson';
    $request->regionUrlMapsValidateRequest->resource->pathMatchers = [
        new PathMatcher(),
    ];
    $request->regionUrlMapsValidateRequest->resource->region = 'accusamus';
    $request->regionUrlMapsValidateRequest->resource->selfLink = 'ratione';
    $request->regionUrlMapsValidateRequest->resource->tests = [
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
        new UrlMapTest(),
    ];
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ducimus';
    $request->fields = 'minima';
    $request->key = 'voluptatem';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'harum';
    $request->region = 'error';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'asperiores';
    $request->urlMap = 'ea';
    $request->userIp = 'neque';

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
