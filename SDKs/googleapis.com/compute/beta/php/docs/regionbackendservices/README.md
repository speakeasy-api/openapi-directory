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
* [computeRegionBackendServicesTestIamPermissions](#computeregionbackendservicestestiampermissions) - Returns permissions that a caller has on the specified resource.
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
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->backendService = 'delectus';
    $request->callback = 'magni';
    $request->fields = 'rem';
    $request->key = 'assumenda';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->project = 'quia';
    $request->quotaUser = 'porro';
    $request->region = 'sapiente';
    $request->requestId = 'consequuntur';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'eius';

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
    $request->accessToken = 'neque';
    $request->alt = AltEnum::PROTO;
    $request->backendService = 'vero';
    $request->callback = 'quibusdam';
    $request->fields = 'amet';
    $request->key = 'minima';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'fugiat';
    $request->quotaUser = 'esse';
    $request->region = 'officiis';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'modi';
    $request->userIp = 'tempore';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->resourceGroupReference = new ResourceGroupReference();
    $request->resourceGroupReference->group = 'beatae';
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::PROTO;
    $request->backendService = 'occaecati';
    $request->callback = 'voluptatum';
    $request->fields = 'beatae';
    $request->key = 'natus';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->project = 'assumenda';
    $request->quotaUser = 'veniam';
    $request->region = 'quis';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'delectus';
    $request->userIp = 'autem';

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
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quod';
    $request->fields = 'labore';
    $request->key = 'facilis';
    $request->oauthToken = 'ducimus';
    $request->optionsRequestedPolicyVersion = 617535;
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'saepe';
    $request->region = 'nesciunt';
    $request->resource = 'non';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'praesentium';
    $request->userIp = 'beatae';

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
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCompressionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionDraining;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicyTrackingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConsistentHashLoadBalancerSettings;
use \OpenAPI\OpenAPI\Models\Shared\ConsistentHashLoadBalancerSettingsHttpCookie;
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
use \OpenAPI\OpenAPI\Models\Shared\Awsv4Signature;
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
    $request->backendService->affinityCookieTtlSec = 180544;
    $request->backendService->backends = [
        new Backend(),
    ];
    $request->backendService->cdnPolicy = new BackendServiceCdnPolicy();
    $request->backendService->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy = new CacheKeyPolicy();
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeHost = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'omnis',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'voluptate',
        'porro',
        'consequatur',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'ab',
        'in',
        'optio',
        'distinctio',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'dolores',
    ];
    $request->backendService->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::USE_ORIGIN_HEADERS;
    $request->backendService->cdnPolicy->clientTtl = 314759;
    $request->backendService->cdnPolicy->defaultTtl = 724169;
    $request->backendService->cdnPolicy->maxTtl = 632121;
    $request->backendService->cdnPolicy->negativeCaching = false;
    $request->backendService->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService->cdnPolicy->requestCoalescing = false;
    $request->backendService->cdnPolicy->serveWhileStale = 147883;
    $request->backendService->cdnPolicy->signedUrlCacheMaxAgeSec = 'corporis';
    $request->backendService->cdnPolicy->signedUrlKeyNames = [
        'necessitatibus',
        'explicabo',
        'eos',
        'quo',
    ];
    $request->backendService->circuitBreakers = new CircuitBreakers();
    $request->backendService->circuitBreakers->connectTimeout = new Duration();
    $request->backendService->circuitBreakers->connectTimeout->nanos = 855029;
    $request->backendService->circuitBreakers->connectTimeout->seconds = 'enim';
    $request->backendService->circuitBreakers->maxConnections = 763476;
    $request->backendService->circuitBreakers->maxPendingRequests = 732906;
    $request->backendService->circuitBreakers->maxRequests = 667735;
    $request->backendService->circuitBreakers->maxRequestsPerConnection = 404758;
    $request->backendService->circuitBreakers->maxRetries = 942371;
    $request->backendService->compressionMode = BackendServiceCompressionModeEnum::DISABLED;
    $request->backendService->connectionDraining = new ConnectionDraining();
    $request->backendService->connectionDraining->drainingTimeoutSec = 996128;
    $request->backendService->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::NEVER_PERSIST;
    $request->backendService->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService->connectionTrackingPolicy->idleTimeoutSec = 789235;
    $request->backendService->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::PER_CONNECTION;
    $request->backendService->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService->consistentHash->httpCookie->name = 'Kathryn Paucek';
    $request->backendService->consistentHash->httpCookie->path = 'voluptatum';
    $request->backendService->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService->consistentHash->httpCookie->ttl->nanos = 122353;
    $request->backendService->consistentHash->httpCookie->ttl->seconds = 'adipisci';
    $request->backendService->consistentHash->httpHeaderName = 'illum';
    $request->backendService->consistentHash->minimumRingSize = 'ea';
    $request->backendService->creationTimestamp = 'veniam';
    $request->backendService->customRequestHeaders = [
        'delectus',
        'earum',
        'placeat',
    ];
    $request->backendService->customResponseHeaders = [
        'quod',
        'odit',
        'assumenda',
        'at',
    ];
    $request->backendService->description = 'ea';
    $request->backendService->edgeSecurityPolicy = 'provident';
    $request->backendService->enableCDN = false;
    $request->backendService->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService->failoverPolicy->failoverRatio = 822.08;
    $request->backendService->fingerprint = 'ea';
    $request->backendService->healthChecks = [
        'quam',
        'delectus',
        'minus',
        'nihil',
    ];
    $request->backendService->iap = new BackendServiceIAP();
    $request->backendService->iap->enabled = false;
    $request->backendService->iap->oauth2ClientId = 'quibusdam';
    $request->backendService->iap->oauth2ClientSecret = 'assumenda';
    $request->backendService->iap->oauth2ClientSecretSha256 = 'animi';
    $request->backendService->id = 'molestiae';
    $request->backendService->kind = 'ipsa';
    $request->backendService->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::INVALID_LOAD_BALANCING_SCHEME;
    $request->backendService->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::ORIGINAL_DESTINATION;
    $request->backendService->logConfig = new BackendServiceLogConfig();
    $request->backendService->logConfig->enable = false;
    $request->backendService->logConfig->optionalFields = [
        'vero',
    ];
    $request->backendService->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::EXCLUDE_ALL_OPTIONAL;
    $request->backendService->logConfig->sampleRate = 129.48;
    $request->backendService->maxStreamDuration = new Duration();
    $request->backendService->maxStreamDuration->nanos = 444167;
    $request->backendService->maxStreamDuration->seconds = 'nostrum';
    $request->backendService->name = 'Luther Gerhold';
    $request->backendService->network = 'et';
    $request->backendService->outlierDetection = new OutlierDetection();
    $request->backendService->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService->outlierDetection->baseEjectionTime->nanos = 787299;
    $request->backendService->outlierDetection->baseEjectionTime->seconds = 'illo';
    $request->backendService->outlierDetection->consecutiveErrors = 271266;
    $request->backendService->outlierDetection->consecutiveGatewayFailure = 787873;
    $request->backendService->outlierDetection->enforcingConsecutiveErrors = 813251;
    $request->backendService->outlierDetection->enforcingConsecutiveGatewayFailure = 566111;
    $request->backendService->outlierDetection->enforcingSuccessRate = 12575;
    $request->backendService->outlierDetection->interval = new Duration();
    $request->backendService->outlierDetection->interval->nanos = 131924;
    $request->backendService->outlierDetection->interval->seconds = 'odit';
    $request->backendService->outlierDetection->maxEjectionPercent = 477381;
    $request->backendService->outlierDetection->successRateMinimumHosts = 925301;
    $request->backendService->outlierDetection->successRateRequestVolume = 204633;
    $request->backendService->outlierDetection->successRateStdevFactor = 470400;
    $request->backendService->port = 751392;
    $request->backendService->portName = 'eaque';
    $request->backendService->protocol = BackendServiceProtocolEnum::UDP;
    $request->backendService->region = 'iste';
    $request->backendService->securityPolicy = 'reprehenderit';
    $request->backendService->securitySettings = new SecuritySettings();
    $request->backendService->securitySettings->authentication = 'voluptate';
    $request->backendService->securitySettings->awsV4Authentication = new Awsv4Signature();
    $request->backendService->securitySettings->awsV4Authentication->accessKey = 'reiciendis';
    $request->backendService->securitySettings->awsV4Authentication->accessKeyId = 'et';
    $request->backendService->securitySettings->awsV4Authentication->accessKeyVersion = 'culpa';
    $request->backendService->securitySettings->awsV4Authentication->originRegion = 'exercitationem';
    $request->backendService->securitySettings->clientTlsPolicy = 'eius';
    $request->backendService->securitySettings->subjectAltNames = [
        'quae',
        'similique',
        'quidem',
    ];
    $request->backendService->selfLink = 'officiis';
    $request->backendService->serviceBindings = [
        'dignissimos',
        'nostrum',
        'beatae',
    ];
    $request->backendService->sessionAffinity = BackendServiceSessionAffinityEnum::HEADER_FIELD;
    $request->backendService->subsetting = new Subsetting();
    $request->backendService->subsetting->policy = SubsettingPolicyEnum::CONSISTENT_HASH_SUBSETTING;
    $request->backendService->subsetting->subsetSize = 38735;
    $request->backendService->timeoutSec = 416803;
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ratione';
    $request->fields = 'repudiandae';
    $request->key = 'accusantium';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'voluptas';
    $request->region = 'natus';
    $request->requestId = 'laudantium';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'veniam';
    $request->userIp = 'similique';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cupiditate';
    $request->fields = 'earum';
    $request->filter = 'nobis';
    $request->key = 'repellendus';
    $request->maxResults = 895651;
    $request->oauthToken = 'unde';
    $request->orderBy = 'voluptates';
    $request->pageToken = 'in';
    $request->prettyPrint = false;
    $request->project = 'odit';
    $request->quotaUser = 'iste';
    $request->region = 'eligendi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'error';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'tempora';

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
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCompressionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionDraining;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicyTrackingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConsistentHashLoadBalancerSettings;
use \OpenAPI\OpenAPI\Models\Shared\ConsistentHashLoadBalancerSettingsHttpCookie;
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
use \OpenAPI\OpenAPI\Models\Shared\Awsv4Signature;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->backendService1 = new BackendService();
    $request->backendService1->affinityCookieTtlSec = 178017;
    $request->backendService1->backends = [
        new Backend(),
        new Backend(),
        new Backend(),
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
        'aliquam',
        'tempora',
        'laboriosam',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'alias',
        'quisquam',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'commodi',
        'ipsa',
        'illum',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'nihil',
        'neque',
        'est',
    ];
    $request->backendService1->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::CACHE_ALL_STATIC;
    $request->backendService1->cdnPolicy->clientTtl = 955605;
    $request->backendService1->cdnPolicy->defaultTtl = 600556;
    $request->backendService1->cdnPolicy->maxTtl = 212287;
    $request->backendService1->cdnPolicy->negativeCaching = false;
    $request->backendService1->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService1->cdnPolicy->requestCoalescing = false;
    $request->backendService1->cdnPolicy->serveWhileStale = 288494;
    $request->backendService1->cdnPolicy->signedUrlCacheMaxAgeSec = 'autem';
    $request->backendService1->cdnPolicy->signedUrlKeyNames = [
        'at',
        'quisquam',
    ];
    $request->backendService1->circuitBreakers = new CircuitBreakers();
    $request->backendService1->circuitBreakers->connectTimeout = new Duration();
    $request->backendService1->circuitBreakers->connectTimeout->nanos = 61840;
    $request->backendService1->circuitBreakers->connectTimeout->seconds = 'possimus';
    $request->backendService1->circuitBreakers->maxConnections = 508668;
    $request->backendService1->circuitBreakers->maxPendingRequests = 818599;
    $request->backendService1->circuitBreakers->maxRequests = 681766;
    $request->backendService1->circuitBreakers->maxRequestsPerConnection = 327811;
    $request->backendService1->circuitBreakers->maxRetries = 375389;
    $request->backendService1->compressionMode = BackendServiceCompressionModeEnum::AUTOMATIC;
    $request->backendService1->connectionDraining = new ConnectionDraining();
    $request->backendService1->connectionDraining->drainingTimeoutSec = 129469;
    $request->backendService1->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService1->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::ALWAYS_PERSIST;
    $request->backendService1->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService1->connectionTrackingPolicy->idleTimeoutSec = 15406;
    $request->backendService1->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::INVALID_TRACKING_MODE;
    $request->backendService1->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService1->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService1->consistentHash->httpCookie->name = 'Janie Roberts';
    $request->backendService1->consistentHash->httpCookie->path = 'eos';
    $request->backendService1->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService1->consistentHash->httpCookie->ttl->nanos = 463073;
    $request->backendService1->consistentHash->httpCookie->ttl->seconds = 'voluptate';
    $request->backendService1->consistentHash->httpHeaderName = 'dolore';
    $request->backendService1->consistentHash->minimumRingSize = 'praesentium';
    $request->backendService1->creationTimestamp = 'exercitationem';
    $request->backendService1->customRequestHeaders = [
        'et',
        'cupiditate',
        'in',
        'voluptas',
    ];
    $request->backendService1->customResponseHeaders = [
        'tenetur',
        'error',
        'blanditiis',
    ];
    $request->backendService1->description = 'aut';
    $request->backendService1->edgeSecurityPolicy = 'nulla';
    $request->backendService1->enableCDN = false;
    $request->backendService1->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService1->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService1->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService1->failoverPolicy->failoverRatio = 6337.32;
    $request->backendService1->fingerprint = 'reprehenderit';
    $request->backendService1->healthChecks = [
        'aut',
        'blanditiis',
        'unde',
    ];
    $request->backendService1->iap = new BackendServiceIAP();
    $request->backendService1->iap->enabled = false;
    $request->backendService1->iap->oauth2ClientId = 'hic';
    $request->backendService1->iap->oauth2ClientSecret = 'maxime';
    $request->backendService1->iap->oauth2ClientSecretSha256 = 'numquam';
    $request->backendService1->id = 'ut';
    $request->backendService1->kind = 'fugiat';
    $request->backendService1->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::INTERNAL_SELF_MANAGED;
    $request->backendService1->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService1->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::ORIGINAL_DESTINATION;
    $request->backendService1->logConfig = new BackendServiceLogConfig();
    $request->backendService1->logConfig->enable = false;
    $request->backendService1->logConfig->optionalFields = [
        'ullam',
        'neque',
    ];
    $request->backendService1->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::CUSTOM;
    $request->backendService1->logConfig->sampleRate = 8853.2;
    $request->backendService1->maxStreamDuration = new Duration();
    $request->backendService1->maxStreamDuration->nanos = 355663;
    $request->backendService1->maxStreamDuration->seconds = 'minus';
    $request->backendService1->name = 'Jared Schinner';
    $request->backendService1->network = 'aut';
    $request->backendService1->outlierDetection = new OutlierDetection();
    $request->backendService1->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService1->outlierDetection->baseEjectionTime->nanos = 798905;
    $request->backendService1->outlierDetection->baseEjectionTime->seconds = 'rerum';
    $request->backendService1->outlierDetection->consecutiveErrors = 766705;
    $request->backendService1->outlierDetection->consecutiveGatewayFailure = 964939;
    $request->backendService1->outlierDetection->enforcingConsecutiveErrors = 833590;
    $request->backendService1->outlierDetection->enforcingConsecutiveGatewayFailure = 778520;
    $request->backendService1->outlierDetection->enforcingSuccessRate = 819632;
    $request->backendService1->outlierDetection->interval = new Duration();
    $request->backendService1->outlierDetection->interval->nanos = 233076;
    $request->backendService1->outlierDetection->interval->seconds = 'dolor';
    $request->backendService1->outlierDetection->maxEjectionPercent = 264502;
    $request->backendService1->outlierDetection->successRateMinimumHosts = 707258;
    $request->backendService1->outlierDetection->successRateRequestVolume = 422803;
    $request->backendService1->outlierDetection->successRateStdevFactor = 996450;
    $request->backendService1->port = 407732;
    $request->backendService1->portName = 'fugit';
    $request->backendService1->protocol = BackendServiceProtocolEnum::HTTP;
    $request->backendService1->region = 'tempore';
    $request->backendService1->securityPolicy = 'minus';
    $request->backendService1->securitySettings = new SecuritySettings();
    $request->backendService1->securitySettings->authentication = 'repudiandae';
    $request->backendService1->securitySettings->awsV4Authentication = new Awsv4Signature();
    $request->backendService1->securitySettings->awsV4Authentication->accessKey = 'quisquam';
    $request->backendService1->securitySettings->awsV4Authentication->accessKeyId = 'mollitia';
    $request->backendService1->securitySettings->awsV4Authentication->accessKeyVersion = 'facilis';
    $request->backendService1->securitySettings->awsV4Authentication->originRegion = 'nostrum';
    $request->backendService1->securitySettings->clientTlsPolicy = 'alias';
    $request->backendService1->securitySettings->subjectAltNames = [
        'voluptates',
        'recusandae',
        'quis',
    ];
    $request->backendService1->selfLink = 'earum';
    $request->backendService1->serviceBindings = [
        'pariatur',
    ];
    $request->backendService1->sessionAffinity = BackendServiceSessionAffinityEnum::HEADER_FIELD;
    $request->backendService1->subsetting = new Subsetting();
    $request->backendService1->subsetting->policy = SubsettingPolicyEnum::NONE;
    $request->backendService1->subsetting->subsetSize = 737600;
    $request->backendService1->timeoutSec = 571834;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->backendServicePathParameter = 'nisi';
    $request->callback = 'id';
    $request->fields = 'nulla';
    $request->key = 'perferendis';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'deleniti';
    $request->region = 'nisi';
    $request->requestId = 'repudiandae';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'libero';
    $request->userIp = 'aliquam';

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
    ];
    $request->regionSetPolicyRequest->etag = 'quo';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'magni';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 91092;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'assumenda';
    $request->fields = 'placeat';
    $request->key = 'illo';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->project = 'numquam';
    $request->quotaUser = 'adipisci';
    $request->region = 'pariatur';
    $request->resource = 'modi';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'doloribus';
    $request->userIp = 'aliquid';

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

## computeRegionBackendServicesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionBackendServicesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'inventore',
        'in',
        'et',
        'veritatis',
    ];
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cumque';
    $request->fields = 'tempore';
    $request->key = 'debitis';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'itaque';
    $request->quotaUser = 'saepe';
    $request->region = 'non';
    $request->resource = 'hic';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'quasi';

    $requestSecurity = new ComputeRegionBackendServicesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionBackendServicesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionBackendServices->computeRegionBackendServicesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceCompressionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionDraining;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceConnectionTrackingPolicyTrackingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConsistentHashLoadBalancerSettings;
use \OpenAPI\OpenAPI\Models\Shared\ConsistentHashLoadBalancerSettingsHttpCookie;
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
use \OpenAPI\OpenAPI\Models\Shared\Awsv4Signature;
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
    $request->backendService1->affinityCookieTtlSec = 556233;
    $request->backendService1->backends = [
        new Backend(),
        new Backend(),
    ];
    $request->backendService1->cdnPolicy = new BackendServiceCdnPolicy();
    $request->backendService1->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy = new CacheKeyPolicy();
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeHost = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'esse',
        'quia',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'adipisci',
        'odit',
        'itaque',
        'dolorem',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'incidunt',
        'perspiciatis',
        'pariatur',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'officiis',
        'alias',
        'tenetur',
    ];
    $request->backendService1->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::CACHE_ALL_STATIC;
    $request->backendService1->cdnPolicy->clientTtl = 248406;
    $request->backendService1->cdnPolicy->defaultTtl = 691750;
    $request->backendService1->cdnPolicy->maxTtl = 453494;
    $request->backendService1->cdnPolicy->negativeCaching = false;
    $request->backendService1->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService1->cdnPolicy->requestCoalescing = false;
    $request->backendService1->cdnPolicy->serveWhileStale = 382007;
    $request->backendService1->cdnPolicy->signedUrlCacheMaxAgeSec = 'fugiat';
    $request->backendService1->cdnPolicy->signedUrlKeyNames = [
        'cupiditate',
        'dolore',
        'quas',
    ];
    $request->backendService1->circuitBreakers = new CircuitBreakers();
    $request->backendService1->circuitBreakers->connectTimeout = new Duration();
    $request->backendService1->circuitBreakers->connectTimeout->nanos = 829016;
    $request->backendService1->circuitBreakers->connectTimeout->seconds = 'aliquid';
    $request->backendService1->circuitBreakers->maxConnections = 906140;
    $request->backendService1->circuitBreakers->maxPendingRequests = 816556;
    $request->backendService1->circuitBreakers->maxRequests = 899970;
    $request->backendService1->circuitBreakers->maxRequestsPerConnection = 852023;
    $request->backendService1->circuitBreakers->maxRetries = 263183;
    $request->backendService1->compressionMode = BackendServiceCompressionModeEnum::AUTOMATIC;
    $request->backendService1->connectionDraining = new ConnectionDraining();
    $request->backendService1->connectionDraining->drainingTimeoutSec = 484489;
    $request->backendService1->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService1->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::DEFAULT_FOR_PROTOCOL;
    $request->backendService1->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService1->connectionTrackingPolicy->idleTimeoutSec = 537851;
    $request->backendService1->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::INVALID_TRACKING_MODE;
    $request->backendService1->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService1->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService1->consistentHash->httpCookie->name = 'Kim Kessler III';
    $request->backendService1->consistentHash->httpCookie->path = 'deserunt';
    $request->backendService1->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService1->consistentHash->httpCookie->ttl->nanos = 504685;
    $request->backendService1->consistentHash->httpCookie->ttl->seconds = 'dolores';
    $request->backendService1->consistentHash->httpHeaderName = 'necessitatibus';
    $request->backendService1->consistentHash->minimumRingSize = 'nemo';
    $request->backendService1->creationTimestamp = 'vero';
    $request->backendService1->customRequestHeaders = [
        'eos',
        'delectus',
        'illum',
    ];
    $request->backendService1->customResponseHeaders = [
        'praesentium',
    ];
    $request->backendService1->description = 'fugiat';
    $request->backendService1->edgeSecurityPolicy = 'beatae';
    $request->backendService1->enableCDN = false;
    $request->backendService1->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService1->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService1->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService1->failoverPolicy->failoverRatio = 187.83;
    $request->backendService1->fingerprint = 'quaerat';
    $request->backendService1->healthChecks = [
        'harum',
    ];
    $request->backendService1->iap = new BackendServiceIAP();
    $request->backendService1->iap->enabled = false;
    $request->backendService1->iap->oauth2ClientId = 'iusto';
    $request->backendService1->iap->oauth2ClientSecret = 'debitis';
    $request->backendService1->iap->oauth2ClientSecretSha256 = 'sint';
    $request->backendService1->id = 'beatae';
    $request->backendService1->kind = 'ratione';
    $request->backendService1->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::INTERNAL_MANAGED;
    $request->backendService1->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService1->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::RING_HASH;
    $request->backendService1->logConfig = new BackendServiceLogConfig();
    $request->backendService1->logConfig->enable = false;
    $request->backendService1->logConfig->optionalFields = [
        'incidunt',
        'quaerat',
        'eligendi',
    ];
    $request->backendService1->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::INCLUDE_ALL_OPTIONAL;
    $request->backendService1->logConfig->sampleRate = 1033.28;
    $request->backendService1->maxStreamDuration = new Duration();
    $request->backendService1->maxStreamDuration->nanos = 517495;
    $request->backendService1->maxStreamDuration->seconds = 'adipisci';
    $request->backendService1->name = 'Mary Bayer';
    $request->backendService1->network = 'eius';
    $request->backendService1->outlierDetection = new OutlierDetection();
    $request->backendService1->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService1->outlierDetection->baseEjectionTime->nanos = 380012;
    $request->backendService1->outlierDetection->baseEjectionTime->seconds = 'inventore';
    $request->backendService1->outlierDetection->consecutiveErrors = 789636;
    $request->backendService1->outlierDetection->consecutiveGatewayFailure = 880882;
    $request->backendService1->outlierDetection->enforcingConsecutiveErrors = 336692;
    $request->backendService1->outlierDetection->enforcingConsecutiveGatewayFailure = 198665;
    $request->backendService1->outlierDetection->enforcingSuccessRate = 897785;
    $request->backendService1->outlierDetection->interval = new Duration();
    $request->backendService1->outlierDetection->interval->nanos = 567320;
    $request->backendService1->outlierDetection->interval->seconds = 'illo';
    $request->backendService1->outlierDetection->maxEjectionPercent = 271465;
    $request->backendService1->outlierDetection->successRateMinimumHosts = 281381;
    $request->backendService1->outlierDetection->successRateRequestVolume = 597500;
    $request->backendService1->outlierDetection->successRateStdevFactor = 526204;
    $request->backendService1->port = 654297;
    $request->backendService1->portName = 'iste';
    $request->backendService1->protocol = BackendServiceProtocolEnum::TCP;
    $request->backendService1->region = 'deserunt';
    $request->backendService1->securityPolicy = 'dolore';
    $request->backendService1->securitySettings = new SecuritySettings();
    $request->backendService1->securitySettings->authentication = 'nisi';
    $request->backendService1->securitySettings->awsV4Authentication = new Awsv4Signature();
    $request->backendService1->securitySettings->awsV4Authentication->accessKey = 'aperiam';
    $request->backendService1->securitySettings->awsV4Authentication->accessKeyId = 'similique';
    $request->backendService1->securitySettings->awsV4Authentication->accessKeyVersion = 'nulla';
    $request->backendService1->securitySettings->awsV4Authentication->originRegion = 'pariatur';
    $request->backendService1->securitySettings->clientTlsPolicy = 'reiciendis';
    $request->backendService1->securitySettings->subjectAltNames = [
        'officiis',
        'non',
        'veritatis',
        'doloremque',
    ];
    $request->backendService1->selfLink = 'porro';
    $request->backendService1->serviceBindings = [
        'odio',
    ];
    $request->backendService1->sessionAffinity = BackendServiceSessionAffinityEnum::HTTP_COOKIE;
    $request->backendService1->subsetting = new Subsetting();
    $request->backendService1->subsetting->policy = SubsettingPolicyEnum::NONE;
    $request->backendService1->subsetting->subsetSize = 658917;
    $request->backendService1->timeoutSec = 611715;
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::MEDIA;
    $request->backendServicePathParameter = 'consequuntur';
    $request->callback = 'laborum';
    $request->fields = 'modi';
    $request->key = 'natus';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->quotaUser = 'aliquid';
    $request->region = 'odit';
    $request->requestId = 'quis';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'eligendi';

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
