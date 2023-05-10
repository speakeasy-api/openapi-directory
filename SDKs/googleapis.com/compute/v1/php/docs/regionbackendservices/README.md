# regionBackendServices

### Available Operations

* [computeRegionBackendServicesDelete](#computeregionbackendservicesdelete) - Deletes the specified regional BackendService resource.
* [computeRegionBackendServicesGet](#computeregionbackendservicesget) - Returns the specified regional BackendService resource.
* [computeRegionBackendServicesGetHealth](#computeregionbackendservicesgethealth) - Gets the most recent health check results for this regional BackendService.
* [computeRegionBackendServicesGetIamPolicy](#computeregionbackendservicesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeRegionBackendServicesInsert](#computeregionbackendservicesinsert) - Creates a regional BackendService resource in the specified project using the data included in the request. For more information, see Backend services overview.
* [computeRegionBackendServicesList](#computeregionbackendserviceslist) - Retrieves the list of regional BackendService resources available to the specified project in the given region.
* [computeRegionBackendServicesPatch](#computeregionbackendservicespatch) - Updates the specified regional BackendService resource with the data included in the request. For more information, see Understanding backend services This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeRegionBackendServicesSetIamPolicy](#computeregionbackendservicessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeRegionBackendServicesUpdate](#computeregionbackendservicesupdate) - Updates the specified regional BackendService resource with the data included in the request. For more information, see Backend services overview .

## computeRegionBackendServicesDelete

Deletes the specified regional BackendService resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionBackendServicesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::PROTO;
    $request->backendService = 'dignissimos';
    $request->callback = 'ab';
    $request->fields = 'quo';
    $request->key = 'optio';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->project = 'pariatur';
    $request->quotaUser = 'sequi';
    $request->region = 'quo';
    $request->requestId = 'facere';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'quis';

    $requestSecurity = new ComputeRegionBackendServicesDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionBackendServicesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionBackendServices->computeRegionBackendServicesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionBackendServicesGet

Returns the specified regional BackendService resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionBackendServicesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->backendService = 'amet';
    $request->callback = 'ipsam';
    $request->fields = 'deleniti';
    $request->key = 'laborum';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'odit';
    $request->quotaUser = 'placeat';
    $request->region = 'rem';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'atque';
    $request->userIp = 'repellat';

    $requestSecurity = new ComputeRegionBackendServicesGetSecurity();
    $requestSecurity->option1 = new ComputeRegionBackendServicesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionBackendServices->computeRegionBackendServicesGet($request, $requestSecurity);

    if ($response->backendService !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionBackendServicesGetHealth

Gets the most recent health check results for this regional BackendService.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesGetHealthRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceGroupReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesGetHealthSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesGetHealthSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesGetHealthSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesGetHealthSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionBackendServicesGetHealthRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->resourceGroupReference = new ResourceGroupReference();
    $request->resourceGroupReference->group = 'odit';
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->backendService = 'inventore';
    $request->callback = 'laborum';
    $request->fields = 'fugit';
    $request->key = 'perferendis';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->project = 'ducimus';
    $request->quotaUser = 'quod';
    $request->region = 'aut';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'numquam';
    $request->userIp = 'omnis';

    $requestSecurity = new ComputeRegionBackendServicesGetHealthSecurity();
    $requestSecurity->option1 = new ComputeRegionBackendServicesGetHealthSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionBackendServices->computeRegionBackendServicesGetHealth($request, $requestSecurity);

    if ($response->backendServiceGroupHealth !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionBackendServicesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionBackendServicesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nesciunt';
    $request->fields = 'hic';
    $request->key = 'natus';
    $request->oauthToken = 'laboriosam';
    $request->optionsRequestedPolicyVersion = 98138;
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'distinctio';
    $request->region = 'cum';
    $request->resource = 'in';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'incidunt';
    $request->userIp = 'aperiam';

    $requestSecurity = new ComputeRegionBackendServicesGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeRegionBackendServicesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionBackendServices->computeRegionBackendServicesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionBackendServicesInsert

Creates a regional BackendService resource in the specified project using the data included in the request. For more information, see Backend services overview.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendService;
use \OpenAPI\OpenAPI\Models\Shared\Backend;
use \OpenAPI\OpenAPI\Models\Shared\BackendBalancingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCdnPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCdnPolicyBypassCacheOnRequestHeader;
use \OpenAPI\OpenAPI\Models\Shared\CacheKeyPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCdnPolicyCacheModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCdnPolicyNegativeCachingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\CircuitBreakers;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCompressionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionDraining;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicyTrackingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConsistentHashLoadBalancerSettings;
use \OpenAPI\OpenAPI\Models\Shared\ConsistentHashLoadBalancerSettingsHttpCookie;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceFailoverPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceIAP;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLoadBalancingSchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLbPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLogConfigOptionalModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutlierDetection;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecuritySettings;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceSessionAffinityEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subsetting;
use \OpenAPI\OpenAPI\Models\Shared\SubsettingPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionBackendServicesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->backendService = new BackendService();
    $request->backendService->affinityCookieTtlSec = 357589;
    $request->backendService->backends = [
        new Backend(),
        new Backend(),
        new Backend(),
    ];
    $request->backendService->cdnPolicy = new BackendServiceCdnPolicy();
    $request->backendService->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy = new CacheKeyPolicy();
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeHost = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'voluptatibus',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'modi',
        'nesciunt',
        'autem',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'commodi',
        'sed',
        'exercitationem',
        'natus',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'velit',
    ];
    $request->backendService->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::CACHE_ALL_STATIC;
    $request->backendService->cdnPolicy->clientTtl = 942167;
    $request->backendService->cdnPolicy->defaultTtl = 617854;
    $request->backendService->cdnPolicy->maxTtl = 324467;
    $request->backendService->cdnPolicy->negativeCaching = false;
    $request->backendService->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService->cdnPolicy->requestCoalescing = false;
    $request->backendService->cdnPolicy->serveWhileStale = 589637;
    $request->backendService->cdnPolicy->signedUrlCacheMaxAgeSec = 'quibusdam';
    $request->backendService->cdnPolicy->signedUrlKeyNames = [
        'adipisci',
    ];
    $request->backendService->circuitBreakers = new CircuitBreakers();
    $request->backendService->circuitBreakers->maxConnections = 479372;
    $request->backendService->circuitBreakers->maxPendingRequests = 190599;
    $request->backendService->circuitBreakers->maxRequests = 608836;
    $request->backendService->circuitBreakers->maxRequestsPerConnection = 461863;
    $request->backendService->circuitBreakers->maxRetries = 770696;
    $request->backendService->compressionMode = BackendServiceCompressionModeEnum::AUTOMATIC;
    $request->backendService->connectionDraining = new ConnectionDraining();
    $request->backendService->connectionDraining->drainingTimeoutSec = 557068;
    $request->backendService->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::DEFAULT_FOR_PROTOCOL;
    $request->backendService->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService->connectionTrackingPolicy->idleTimeoutSec = 703599;
    $request->backendService->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::PER_CONNECTION;
    $request->backendService->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService->consistentHash->httpCookie->name = 'Randolph Gusikowski';
    $request->backendService->consistentHash->httpCookie->path = 'aut';
    $request->backendService->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService->consistentHash->httpCookie->ttl->nanos = 29573;
    $request->backendService->consistentHash->httpCookie->ttl->seconds = 'vitae';
    $request->backendService->consistentHash->httpHeaderName = 'quos';
    $request->backendService->consistentHash->minimumRingSize = 'adipisci';
    $request->backendService->creationTimestamp = 'reiciendis';
    $request->backendService->customRequestHeaders = [
        'tempore',
        'vero',
        'asperiores',
        'ea',
    ];
    $request->backendService->customResponseHeaders = [
        'aliquid',
        'nobis',
    ];
    $request->backendService->description = 'reprehenderit';
    $request->backendService->edgeSecurityPolicy = 'consequuntur';
    $request->backendService->enableCDN = false;
    $request->backendService->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService->failoverPolicy->failoverRatio = 378.34;
    $request->backendService->fingerprint = 'autem';
    $request->backendService->healthChecks = [
        'deserunt',
        'facilis',
        'in',
        'ad',
    ];
    $request->backendService->iap = new BackendServiceIAP();
    $request->backendService->iap->enabled = false;
    $request->backendService->iap->oauth2ClientId = 'voluptatem';
    $request->backendService->iap->oauth2ClientSecret = 'sit';
    $request->backendService->iap->oauth2ClientSecretSha256 = 'enim';
    $request->backendService->id = 'qui';
    $request->backendService->kind = 'dolorum';
    $request->backendService->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::EXTERNAL_MANAGED;
    $request->backendService->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::MAGLEV;
    $request->backendService->logConfig = new BackendServiceLogConfig();
    $request->backendService->logConfig->enable = false;
    $request->backendService->logConfig->optionalFields = [
        'officiis',
        'fugiat',
    ];
    $request->backendService->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::INCLUDE_ALL_OPTIONAL;
    $request->backendService->logConfig->sampleRate = 2693.91;
    $request->backendService->maxStreamDuration = new Duration();
    $request->backendService->maxStreamDuration->nanos = 192871;
    $request->backendService->maxStreamDuration->seconds = 'natus';
    $request->backendService->name = 'Ellis Lowe';
    $request->backendService->network = 'adipisci';
    $request->backendService->outlierDetection = new OutlierDetection();
    $request->backendService->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService->outlierDetection->baseEjectionTime->nanos = 130147;
    $request->backendService->outlierDetection->baseEjectionTime->seconds = 'eaque';
    $request->backendService->outlierDetection->consecutiveErrors = 941709;
    $request->backendService->outlierDetection->consecutiveGatewayFailure = 276828;
    $request->backendService->outlierDetection->enforcingConsecutiveErrors = 65826;
    $request->backendService->outlierDetection->enforcingConsecutiveGatewayFailure = 176403;
    $request->backendService->outlierDetection->enforcingSuccessRate = 261784;
    $request->backendService->outlierDetection->interval = new Duration();
    $request->backendService->outlierDetection->interval->nanos = 27710;
    $request->backendService->outlierDetection->interval->seconds = 'temporibus';
    $request->backendService->outlierDetection->maxEjectionPercent = 304361;
    $request->backendService->outlierDetection->successRateMinimumHosts = 279004;
    $request->backendService->outlierDetection->successRateRequestVolume = 520811;
    $request->backendService->outlierDetection->successRateStdevFactor = 480849;
    $request->backendService->port = 650319;
    $request->backendService->portName = 'porro';
    $request->backendService->protocol = BackendServiceProtocolEnum::HTTPS;
    $request->backendService->region = 'provident';
    $request->backendService->securityPolicy = 'neque';
    $request->backendService->securitySettings = new SecuritySettings();
    $request->backendService->securitySettings->clientTlsPolicy = 'expedita';
    $request->backendService->securitySettings->subjectAltNames = [
        'quaerat',
        'nobis',
        'nesciunt',
    ];
    $request->backendService->selfLink = 'quidem';
    $request->backendService->serviceBindings = [
        'fugiat',
        'magni',
        'modi',
    ];
    $request->backendService->sessionAffinity = BackendServiceSessionAffinityEnum::GENERATED_COOKIE;
    $request->backendService->subsetting = new Subsetting();
    $request->backendService->subsetting->policy = SubsettingPolicyEnum::NONE;
    $request->backendService->timeoutSec = 842241;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ad';
    $request->fields = 'officia';
    $request->key = 'fuga';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->quotaUser = 'asperiores';
    $request->region = 'maxime';
    $request->requestId = 'dolore';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'corporis';
    $request->userIp = 'laboriosam';

    $requestSecurity = new ComputeRegionBackendServicesInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionBackendServicesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionBackendServices->computeRegionBackendServicesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionBackendServicesList

Retrieves the list of regional BackendService resources available to the specified project in the given region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionBackendServicesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vel';
    $request->fields = 'iste';
    $request->filter = 'animi';
    $request->key = 'quae';
    $request->maxResults = 38800;
    $request->oauthToken = 'voluptas';
    $request->orderBy = 'pariatur';
    $request->pageToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'inventore';
    $request->quotaUser = 'odit';
    $request->region = 'labore';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'dolore';
    $request->userIp = 'ullam';

    $requestSecurity = new ComputeRegionBackendServicesListSecurity();
    $requestSecurity->option1 = new ComputeRegionBackendServicesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionBackendServices->computeRegionBackendServicesList($request, $requestSecurity);

    if ($response->backendServiceList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionBackendServicesPatch

Updates the specified regional BackendService resource with the data included in the request. For more information, see Understanding backend services This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendService;
use \OpenAPI\OpenAPI\Models\Shared\Backend;
use \OpenAPI\OpenAPI\Models\Shared\BackendBalancingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCdnPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCdnPolicyBypassCacheOnRequestHeader;
use \OpenAPI\OpenAPI\Models\Shared\CacheKeyPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCdnPolicyCacheModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCdnPolicyNegativeCachingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\CircuitBreakers;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCompressionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionDraining;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicyTrackingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConsistentHashLoadBalancerSettings;
use \OpenAPI\OpenAPI\Models\Shared\ConsistentHashLoadBalancerSettingsHttpCookie;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceFailoverPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceIAP;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLoadBalancingSchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLbPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLogConfigOptionalModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutlierDetection;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecuritySettings;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceSessionAffinityEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subsetting;
use \OpenAPI\OpenAPI\Models\Shared\SubsettingPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionBackendServicesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->backendService1 = new BackendService();
    $request->backendService1->affinityCookieTtlSec = 540570;
    $request->backendService1->backends = [
        new Backend(),
    ];
    $request->backendService1->cdnPolicy = new BackendServiceCdnPolicy();
    $request->backendService1->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy = new CacheKeyPolicy();
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeHost = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'odio',
        'quo',
        'ipsum',
        'cum',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'harum',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'illo',
        'atque',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'incidunt',
        'consequatur',
    ];
    $request->backendService1->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::FORCE_CACHE_ALL;
    $request->backendService1->cdnPolicy->clientTtl = 60521;
    $request->backendService1->cdnPolicy->defaultTtl = 905705;
    $request->backendService1->cdnPolicy->maxTtl = 37887;
    $request->backendService1->cdnPolicy->negativeCaching = false;
    $request->backendService1->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService1->cdnPolicy->requestCoalescing = false;
    $request->backendService1->cdnPolicy->serveWhileStale = 198934;
    $request->backendService1->cdnPolicy->signedUrlCacheMaxAgeSec = 'veritatis';
    $request->backendService1->cdnPolicy->signedUrlKeyNames = [
        'possimus',
    ];
    $request->backendService1->circuitBreakers = new CircuitBreakers();
    $request->backendService1->circuitBreakers->maxConnections = 16883;
    $request->backendService1->circuitBreakers->maxPendingRequests = 186103;
    $request->backendService1->circuitBreakers->maxRequests = 244914;
    $request->backendService1->circuitBreakers->maxRequestsPerConnection = 832215;
    $request->backendService1->circuitBreakers->maxRetries = 798854;
    $request->backendService1->compressionMode = BackendServiceCompressionModeEnum::DISABLED;
    $request->backendService1->connectionDraining = new ConnectionDraining();
    $request->backendService1->connectionDraining->drainingTimeoutSec = 56311;
    $request->backendService1->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService1->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::ALWAYS_PERSIST;
    $request->backendService1->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService1->connectionTrackingPolicy->idleTimeoutSec = 984550;
    $request->backendService1->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::PER_CONNECTION;
    $request->backendService1->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService1->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService1->consistentHash->httpCookie->name = 'Winston Stroman';
    $request->backendService1->consistentHash->httpCookie->path = 'commodi';
    $request->backendService1->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService1->consistentHash->httpCookie->ttl->nanos = 776874;
    $request->backendService1->consistentHash->httpCookie->ttl->seconds = 'aliquam';
    $request->backendService1->consistentHash->httpHeaderName = 'magnam';
    $request->backendService1->consistentHash->minimumRingSize = 'praesentium';
    $request->backendService1->creationTimestamp = 'numquam';
    $request->backendService1->customRequestHeaders = [
        'id',
        'itaque',
    ];
    $request->backendService1->customResponseHeaders = [
        'assumenda',
        'praesentium',
        'occaecati',
    ];
    $request->backendService1->description = 'eos';
    $request->backendService1->edgeSecurityPolicy = 'veniam';
    $request->backendService1->enableCDN = false;
    $request->backendService1->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService1->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService1->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService1->failoverPolicy->failoverRatio = 2306.48;
    $request->backendService1->fingerprint = 'nobis';
    $request->backendService1->healthChecks = [
        'provident',
        'ea',
        'consequuntur',
    ];
    $request->backendService1->iap = new BackendServiceIAP();
    $request->backendService1->iap->enabled = false;
    $request->backendService1->iap->oauth2ClientId = 'delectus';
    $request->backendService1->iap->oauth2ClientSecret = 'quaerat';
    $request->backendService1->iap->oauth2ClientSecretSha256 = 'quos';
    $request->backendService1->id = 'excepturi';
    $request->backendService1->kind = 'eum';
    $request->backendService1->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::INTERNAL_SELF_MANAGED;
    $request->backendService1->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService1->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::MAGLEV;
    $request->backendService1->logConfig = new BackendServiceLogConfig();
    $request->backendService1->logConfig->enable = false;
    $request->backendService1->logConfig->optionalFields = [
        'eveniet',
    ];
    $request->backendService1->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::CUSTOM;
    $request->backendService1->logConfig->sampleRate = 4082;
    $request->backendService1->maxStreamDuration = new Duration();
    $request->backendService1->maxStreamDuration->nanos = 346394;
    $request->backendService1->maxStreamDuration->seconds = 'sed';
    $request->backendService1->name = 'Leonard Runolfsson';
    $request->backendService1->network = 'consectetur';
    $request->backendService1->outlierDetection = new OutlierDetection();
    $request->backendService1->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService1->outlierDetection->baseEjectionTime->nanos = 872564;
    $request->backendService1->outlierDetection->baseEjectionTime->seconds = 'suscipit';
    $request->backendService1->outlierDetection->consecutiveErrors = 62556;
    $request->backendService1->outlierDetection->consecutiveGatewayFailure = 464944;
    $request->backendService1->outlierDetection->enforcingConsecutiveErrors = 493467;
    $request->backendService1->outlierDetection->enforcingConsecutiveGatewayFailure = 542276;
    $request->backendService1->outlierDetection->enforcingSuccessRate = 654684;
    $request->backendService1->outlierDetection->interval = new Duration();
    $request->backendService1->outlierDetection->interval->nanos = 938027;
    $request->backendService1->outlierDetection->interval->seconds = 'quaerat';
    $request->backendService1->outlierDetection->maxEjectionPercent = 569960;
    $request->backendService1->outlierDetection->successRateMinimumHosts = 69171;
    $request->backendService1->outlierDetection->successRateRequestVolume = 179646;
    $request->backendService1->outlierDetection->successRateStdevFactor = 257160;
    $request->backendService1->port = 455355;
    $request->backendService1->portName = 'odio';
    $request->backendService1->protocol = BackendServiceProtocolEnum::HTTP;
    $request->backendService1->region = 'enim';
    $request->backendService1->securityPolicy = 'eveniet';
    $request->backendService1->securitySettings = new SecuritySettings();
    $request->backendService1->securitySettings->clientTlsPolicy = 'commodi';
    $request->backendService1->securitySettings->subjectAltNames = [
        'et',
    ];
    $request->backendService1->selfLink = 'iste';
    $request->backendService1->serviceBindings = [
        'occaecati',
    ];
    $request->backendService1->sessionAffinity = BackendServiceSessionAffinityEnum::NONE;
    $request->backendService1->subsetting = new Subsetting();
    $request->backendService1->subsetting->policy = SubsettingPolicyEnum::NONE;
    $request->backendService1->timeoutSec = 78111;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::JSON;
    $request->backendServicePathParameter = 'labore';
    $request->callback = 'id';
    $request->fields = 'ullam';
    $request->key = 'quibusdam';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'omnis';
    $request->region = 'mollitia';
    $request->requestId = 'placeat';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'ducimus';
    $request->userIp = 'eaque';

    $requestSecurity = new ComputeRegionBackendServicesPatchSecurity();
    $requestSecurity->option1 = new ComputeRegionBackendServicesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionBackendServices->computeRegionBackendServicesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionBackendServicesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionSetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\ConditionIamEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionSysEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfig;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCloudAuditOptions;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationLoggingOptions;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationLoggingOptionsPermissionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCloudAuditOptionsLogNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCounterOptions;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCounterOptionsCustomField;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigDataAccessOptions;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigDataAccessOptionsLogModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionBackendServicesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionSetPolicyRequest = new RegionSetPolicyRequest();
    $request->regionSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->etag = 'odio';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'delectus';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 762184;
    $request->accessToken = 'a';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'unde';
    $request->fields = 'consectetur';
    $request->key = 'qui';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->project = 'doloremque';
    $request->quotaUser = 'enim';
    $request->region = 'explicabo';
    $request->resource = 'ipsam';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'repudiandae';
    $request->userIp = 'ex';

    $requestSecurity = new ComputeRegionBackendServicesSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeRegionBackendServicesSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionBackendServices->computeRegionBackendServicesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionBackendServicesUpdate

Updates the specified regional BackendService resource with the data included in the request. For more information, see Backend services overview .

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendService;
use \OpenAPI\OpenAPI\Models\Shared\Backend;
use \OpenAPI\OpenAPI\Models\Shared\BackendBalancingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCdnPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCdnPolicyBypassCacheOnRequestHeader;
use \OpenAPI\OpenAPI\Models\Shared\CacheKeyPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCdnPolicyCacheModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCdnPolicyNegativeCachingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\CircuitBreakers;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCompressionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionDraining;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicyTrackingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConsistentHashLoadBalancerSettings;
use \OpenAPI\OpenAPI\Models\Shared\ConsistentHashLoadBalancerSettingsHttpCookie;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceFailoverPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceIAP;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLoadBalancingSchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLbPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLogConfigOptionalModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutlierDetection;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecuritySettings;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceSessionAffinityEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subsetting;
use \OpenAPI\OpenAPI\Models\Shared\SubsettingPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionBackendServicesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->backendService1 = new BackendService();
    $request->backendService1->affinityCookieTtlSec = 691991;
    $request->backendService1->backends = [
        new Backend(),
        new Backend(),
        new Backend(),
    ];
    $request->backendService1->cdnPolicy = new BackendServiceCdnPolicy();
    $request->backendService1->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy = new CacheKeyPolicy();
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeHost = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'laboriosam',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'molestias',
        'dignissimos',
        'facere',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'omnis',
        'dolorum',
        'qui',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'velit',
        'amet',
        'ipsam',
        'suscipit',
    ];
    $request->backendService1->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::FORCE_CACHE_ALL;
    $request->backendService1->cdnPolicy->clientTtl = 57182;
    $request->backendService1->cdnPolicy->defaultTtl = 884206;
    $request->backendService1->cdnPolicy->maxTtl = 624181;
    $request->backendService1->cdnPolicy->negativeCaching = false;
    $request->backendService1->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService1->cdnPolicy->requestCoalescing = false;
    $request->backendService1->cdnPolicy->serveWhileStale = 934760;
    $request->backendService1->cdnPolicy->signedUrlCacheMaxAgeSec = 'recusandae';
    $request->backendService1->cdnPolicy->signedUrlKeyNames = [
        'impedit',
        'reiciendis',
    ];
    $request->backendService1->circuitBreakers = new CircuitBreakers();
    $request->backendService1->circuitBreakers->maxConnections = 319513;
    $request->backendService1->circuitBreakers->maxPendingRequests = 597875;
    $request->backendService1->circuitBreakers->maxRequests = 966801;
    $request->backendService1->circuitBreakers->maxRequestsPerConnection = 211246;
    $request->backendService1->circuitBreakers->maxRetries = 368785;
    $request->backendService1->compressionMode = BackendServiceCompressionModeEnum::DISABLED;
    $request->backendService1->connectionDraining = new ConnectionDraining();
    $request->backendService1->connectionDraining->drainingTimeoutSec = 679433;
    $request->backendService1->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService1->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::DEFAULT_FOR_PROTOCOL;
    $request->backendService1->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService1->connectionTrackingPolicy->idleTimeoutSec = 936554;
    $request->backendService1->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::PER_CONNECTION;
    $request->backendService1->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService1->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService1->consistentHash->httpCookie->name = 'Luke Torphy';
    $request->backendService1->consistentHash->httpCookie->path = 'neque';
    $request->backendService1->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService1->consistentHash->httpCookie->ttl->nanos = 643521;
    $request->backendService1->consistentHash->httpCookie->ttl->seconds = 'adipisci';
    $request->backendService1->consistentHash->httpHeaderName = 'inventore';
    $request->backendService1->consistentHash->minimumRingSize = 'tempore';
    $request->backendService1->creationTimestamp = 'maiores';
    $request->backendService1->customRequestHeaders = [
        'rerum',
        'laborum',
    ];
    $request->backendService1->customResponseHeaders = [
        'quod',
    ];
    $request->backendService1->description = 'minus';
    $request->backendService1->edgeSecurityPolicy = 'molestias';
    $request->backendService1->enableCDN = false;
    $request->backendService1->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService1->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService1->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService1->failoverPolicy->failoverRatio = 4623.08;
    $request->backendService1->fingerprint = 'nihil';
    $request->backendService1->healthChecks = [
        'ex',
    ];
    $request->backendService1->iap = new BackendServiceIAP();
    $request->backendService1->iap->enabled = false;
    $request->backendService1->iap->oauth2ClientId = 'maxime';
    $request->backendService1->iap->oauth2ClientSecret = 'deleniti';
    $request->backendService1->iap->oauth2ClientSecretSha256 = 'accusantium';
    $request->backendService1->id = 'sed';
    $request->backendService1->kind = 'minus';
    $request->backendService1->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::INTERNAL_SELF_MANAGED;
    $request->backendService1->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService1->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::WEIGHTED_MAGLEV;
    $request->backendService1->logConfig = new BackendServiceLogConfig();
    $request->backendService1->logConfig->enable = false;
    $request->backendService1->logConfig->optionalFields = [
        'placeat',
    ];
    $request->backendService1->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::EXCLUDE_ALL_OPTIONAL;
    $request->backendService1->logConfig->sampleRate = 8218.96;
    $request->backendService1->maxStreamDuration = new Duration();
    $request->backendService1->maxStreamDuration->nanos = 610584;
    $request->backendService1->maxStreamDuration->seconds = 'assumenda';
    $request->backendService1->name = 'Bonnie Feil MD';
    $request->backendService1->network = 'est';
    $request->backendService1->outlierDetection = new OutlierDetection();
    $request->backendService1->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService1->outlierDetection->baseEjectionTime->nanos = 420927;
    $request->backendService1->outlierDetection->baseEjectionTime->seconds = 'sequi';
    $request->backendService1->outlierDetection->consecutiveErrors = 888024;
    $request->backendService1->outlierDetection->consecutiveGatewayFailure = 861090;
    $request->backendService1->outlierDetection->enforcingConsecutiveErrors = 582351;
    $request->backendService1->outlierDetection->enforcingConsecutiveGatewayFailure = 758522;
    $request->backendService1->outlierDetection->enforcingSuccessRate = 993625;
    $request->backendService1->outlierDetection->interval = new Duration();
    $request->backendService1->outlierDetection->interval->nanos = 92960;
    $request->backendService1->outlierDetection->interval->seconds = 'nobis';
    $request->backendService1->outlierDetection->maxEjectionPercent = 557673;
    $request->backendService1->outlierDetection->successRateMinimumHosts = 367511;
    $request->backendService1->outlierDetection->successRateRequestVolume = 412509;
    $request->backendService1->outlierDetection->successRateStdevFactor = 742562;
    $request->backendService1->port = 778726;
    $request->backendService1->portName = 'libero';
    $request->backendService1->protocol = BackendServiceProtocolEnum::TCP;
    $request->backendService1->region = 'quaerat';
    $request->backendService1->securityPolicy = 'inventore';
    $request->backendService1->securitySettings = new SecuritySettings();
    $request->backendService1->securitySettings->clientTlsPolicy = 'accusamus';
    $request->backendService1->securitySettings->subjectAltNames = [
        'odit',
        'numquam',
        'nemo',
        'numquam',
    ];
    $request->backendService1->selfLink = 'culpa';
    $request->backendService1->serviceBindings = [
        'iusto',
        'voluptatibus',
    ];
    $request->backendService1->sessionAffinity = BackendServiceSessionAffinityEnum::HEADER_FIELD;
    $request->backendService1->subsetting = new Subsetting();
    $request->backendService1->subsetting->policy = SubsettingPolicyEnum::NONE;
    $request->backendService1->timeoutSec = 997354;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->backendServicePathParameter = 'autem';
    $request->callback = 'optio';
    $request->fields = 'fugiat';
    $request->key = 'facere';
    $request->oauthToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->project = 'ut';
    $request->quotaUser = 'dolore';
    $request->region = 'numquam';
    $request->requestId = 'officia';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'nemo';
    $request->userIp = 'nisi';

    $requestSecurity = new ComputeRegionBackendServicesUpdateSecurity();
    $requestSecurity->option1 = new ComputeRegionBackendServicesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionBackendServices->computeRegionBackendServicesUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
