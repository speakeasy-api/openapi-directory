# backendServices

### Available Operations

* [computeBackendServicesAddSignedUrlKey](#computebackendservicesaddsignedurlkey) - Adds a key for validating requests with signed URLs for this backend service.
* [computeBackendServicesAggregatedList](#computebackendservicesaggregatedlist) - Retrieves the list of all BackendService resources, regional and global, available to the specified project.
* [computeBackendServicesDelete](#computebackendservicesdelete) - Deletes the specified BackendService resource.
* [computeBackendServicesDeleteSignedUrlKey](#computebackendservicesdeletesignedurlkey) - Deletes a key for validating requests with signed URLs for this backend service.
* [computeBackendServicesGet](#computebackendservicesget) - Returns the specified BackendService resource.
* [computeBackendServicesGetHealth](#computebackendservicesgethealth) - Gets the most recent health check results for this BackendService. Example request body: { "group": "/zones/us-east1-b/instanceGroups/lb-backend-example" }
* [computeBackendServicesGetIamPolicy](#computebackendservicesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeBackendServicesInsert](#computebackendservicesinsert) - Creates a BackendService resource in the specified project using the data included in the request. For more information, see Backend services overview .
* [computeBackendServicesList](#computebackendserviceslist) - Retrieves the list of BackendService resources available to the specified project.
* [computeBackendServicesPatch](#computebackendservicespatch) - Patches the specified BackendService resource with the data included in the request. For more information, see Backend services overview. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeBackendServicesSetEdgeSecurityPolicy](#computebackendservicessetedgesecuritypolicy) - Sets the edge security policy for the specified backend service.
* [computeBackendServicesSetIamPolicy](#computebackendservicessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeBackendServicesSetSecurityPolicy](#computebackendservicessetsecuritypolicy) - Sets the Google Cloud Armor security policy for the specified backend service. For more information, see Google Cloud Armor Overview
* [computeBackendServicesTestIamPermissions](#computebackendservicestestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeBackendServicesUpdate](#computebackendservicesupdate) - Updates the specified BackendService resource with the data included in the request. For more information, see Backend services overview.

## computeBackendServicesAddSignedUrlKey

Adds a key for validating requests with signed URLs for this backend service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesAddSignedUrlKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SignedUrlKey;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesAddSignedUrlKeySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesAddSignedUrlKeySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesAddSignedUrlKeySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesAddSignedUrlKeyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->signedUrlKey = new SignedUrlKey();
    $request->signedUrlKey->keyName = 'earum';
    $request->signedUrlKey->keyValue = 'vel';
    $request->accessToken = 'in';
    $request->alt = AltEnum::JSON;
    $request->backendService = 'libero';
    $request->callback = 'illum';
    $request->fields = 'soluta';
    $request->key = 'accusantium';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'sapiente';
    $request->quotaUser = 'dicta';
    $request->requestId = 'ullam';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ullam';
    $request->userIp = 'nisi';

    $requestSecurity = new ComputeBackendServicesAddSignedUrlKeySecurity();
    $requestSecurity->option1 = new ComputeBackendServicesAddSignedUrlKeySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendServices->computeBackendServicesAddSignedUrlKey($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendServicesAggregatedList

Retrieves the list of all BackendService resources, regional and global, available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quibusdam';
    $request->fields = 'ex';
    $request->filter = 'deleniti';
    $request->includeAllScopes = false;
    $request->key = 'itaque';
    $request->maxResults = 680270;
    $request->oauthToken = 'architecto';
    $request->orderBy = 'omnis';
    $request->pageToken = 'tenetur';
    $request->prettyPrint = false;
    $request->project = 'quasi';
    $request->quotaUser = 'at';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'et';
    $request->uploadProtocol = 'voluptate';
    $request->userIp = 'ipsa';

    $requestSecurity = new ComputeBackendServicesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeBackendServicesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendServices->computeBackendServicesAggregatedList($request, $requestSecurity);

    if ($response->backendServiceAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendServicesDelete

Deletes the specified BackendService resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->backendService = 'adipisci';
    $request->callback = 'iste';
    $request->fields = 'temporibus';
    $request->key = 'accusantium';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'aut';
    $request->quotaUser = 'laudantium';
    $request->requestId = 'eum';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'ab';
    $request->userIp = 'corrupti';

    $requestSecurity = new ComputeBackendServicesDeleteSecurity();
    $requestSecurity->option1 = new ComputeBackendServicesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendServices->computeBackendServicesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendServicesDeleteSignedUrlKey

Deletes a key for validating requests with signed URLs for this backend service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesDeleteSignedUrlKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesDeleteSignedUrlKeySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesDeleteSignedUrlKeySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesDeleteSignedUrlKeySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesDeleteSignedUrlKeyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::JSON;
    $request->backendService = 'occaecati';
    $request->callback = 'numquam';
    $request->fields = 'impedit';
    $request->key = 'explicabo';
    $request->keyName = 'voluptas';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->project = 'dignissimos';
    $request->quotaUser = 'dicta';
    $request->requestId = 'maiores';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'velit';
    $request->userIp = 'voluptatibus';

    $requestSecurity = new ComputeBackendServicesDeleteSignedUrlKeySecurity();
    $requestSecurity->option1 = new ComputeBackendServicesDeleteSignedUrlKeySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendServices->computeBackendServicesDeleteSignedUrlKey($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendServicesGet

Returns the specified BackendService resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::JSON;
    $request->backendService = 'ea';
    $request->callback = 'quaerat';
    $request->fields = 'consequuntur';
    $request->key = 'repellendus';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->project = 'maxime';
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'asperiores';
    $request->userIp = 'nemo';

    $requestSecurity = new ComputeBackendServicesGetSecurity();
    $requestSecurity->option1 = new ComputeBackendServicesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendServices->computeBackendServicesGet($request, $requestSecurity);

    if ($response->backendService !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendServicesGetHealth

Gets the most recent health check results for this BackendService. Example request body: { "group": "/zones/us-east1-b/instanceGroups/lb-backend-example" }

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesGetHealthRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceGroupReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesGetHealthSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesGetHealthSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesGetHealthSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesGetHealthSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesGetHealthRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->resourceGroupReference = new ResourceGroupReference();
    $request->resourceGroupReference->group = 'quaerat';
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->backendService = 'labore';
    $request->callback = 'ab';
    $request->fields = 'adipisci';
    $request->key = 'fuga';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->project = 'suscipit';
    $request->quotaUser = 'velit';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'est';
    $request->userIp = 'recusandae';

    $requestSecurity = new ComputeBackendServicesGetHealthSecurity();
    $requestSecurity->option1 = new ComputeBackendServicesGetHealthSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendServices->computeBackendServicesGetHealth($request, $requestSecurity);

    if ($response->backendServiceGroupHealth !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendServicesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ducimus';
    $request->fields = 'quos';
    $request->key = 'vel';
    $request->oauthToken = 'labore';
    $request->optionsRequestedPolicyVersion = 822560;
    $request->prettyPrint = false;
    $request->project = 'facilis';
    $request->quotaUser = 'cum';
    $request->resource = 'commodi';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';
    $request->userIp = 'reiciendis';

    $requestSecurity = new ComputeBackendServicesGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeBackendServicesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendServices->computeBackendServicesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendServicesInsert

Creates a BackendService resource in the specified project using the data included in the request. For more information, see Backend services overview .

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesInsertRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->backendService = new BackendService();
    $request->backendService->affinityCookieTtlSec = 363161;
    $request->backendService->backends = [
        new Backend(),
        new Backend(),
        new Backend(),
        new Backend(),
    ];
    $request->backendService->cdnPolicy = new BackendServiceCdnPolicy();
    $request->backendService->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy = new CacheKeyPolicy();
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeHost = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'cum',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'in',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'earum',
        'facere',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'doloribus',
        'suscipit',
    ];
    $request->backendService->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::USE_ORIGIN_HEADERS;
    $request->backendService->cdnPolicy->clientTtl = 697142;
    $request->backendService->cdnPolicy->defaultTtl = 904949;
    $request->backendService->cdnPolicy->maxTtl = 897071;
    $request->backendService->cdnPolicy->negativeCaching = false;
    $request->backendService->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService->cdnPolicy->requestCoalescing = false;
    $request->backendService->cdnPolicy->serveWhileStale = 121059;
    $request->backendService->cdnPolicy->signedUrlCacheMaxAgeSec = 'asperiores';
    $request->backendService->cdnPolicy->signedUrlKeyNames = [
        'non',
    ];
    $request->backendService->circuitBreakers = new CircuitBreakers();
    $request->backendService->circuitBreakers->connectTimeout = new Duration();
    $request->backendService->circuitBreakers->connectTimeout->nanos = 228263;
    $request->backendService->circuitBreakers->connectTimeout->seconds = 'beatae';
    $request->backendService->circuitBreakers->maxConnections = 489509;
    $request->backendService->circuitBreakers->maxPendingRequests = 950953;
    $request->backendService->circuitBreakers->maxRequests = 891523;
    $request->backendService->circuitBreakers->maxRequestsPerConnection = 233420;
    $request->backendService->circuitBreakers->maxRetries = 358107;
    $request->backendService->compressionMode = BackendServiceCompressionModeEnum::DISABLED;
    $request->backendService->connectionDraining = new ConnectionDraining();
    $request->backendService->connectionDraining->drainingTimeoutSec = 385237;
    $request->backendService->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::ALWAYS_PERSIST;
    $request->backendService->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService->connectionTrackingPolicy->idleTimeoutSec = 916727;
    $request->backendService->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::PER_SESSION;
    $request->backendService->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService->consistentHash->httpCookie->name = 'Sophia Murray';
    $request->backendService->consistentHash->httpCookie->path = 'voluptas';
    $request->backendService->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService->consistentHash->httpCookie->ttl->nanos = 374244;
    $request->backendService->consistentHash->httpCookie->ttl->seconds = 'voluptas';
    $request->backendService->consistentHash->httpHeaderName = 'minima';
    $request->backendService->consistentHash->minimumRingSize = 'nobis';
    $request->backendService->creationTimestamp = 'dolorum';
    $request->backendService->customRequestHeaders = [
        'minus',
    ];
    $request->backendService->customResponseHeaders = [
        'blanditiis',
    ];
    $request->backendService->description = 'in';
    $request->backendService->edgeSecurityPolicy = 'dolore';
    $request->backendService->enableCDN = false;
    $request->backendService->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService->failoverPolicy->failoverRatio = 3044.68;
    $request->backendService->fingerprint = 'officiis';
    $request->backendService->healthChecks = [
        'ullam',
        'adipisci',
        'cum',
        'blanditiis',
    ];
    $request->backendService->iap = new BackendServiceIAP();
    $request->backendService->iap->enabled = false;
    $request->backendService->iap->oauth2ClientId = 'quas';
    $request->backendService->iap->oauth2ClientSecret = 'hic';
    $request->backendService->iap->oauth2ClientSecretSha256 = 'nesciunt';
    $request->backendService->id = 'culpa';
    $request->backendService->kind = 'corrupti';
    $request->backendService->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::INVALID_LOAD_BALANCING_SCHEME;
    $request->backendService->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::WEIGHTED_MAGLEV;
    $request->backendService->logConfig = new BackendServiceLogConfig();
    $request->backendService->logConfig->enable = false;
    $request->backendService->logConfig->optionalFields = [
        'nobis',
        'sit',
    ];
    $request->backendService->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::INCLUDE_ALL_OPTIONAL;
    $request->backendService->logConfig->sampleRate = 1488.29;
    $request->backendService->maxStreamDuration = new Duration();
    $request->backendService->maxStreamDuration->nanos = 967966;
    $request->backendService->maxStreamDuration->seconds = 'explicabo';
    $request->backendService->name = 'Johnathan Klein V';
    $request->backendService->network = 'dolore';
    $request->backendService->outlierDetection = new OutlierDetection();
    $request->backendService->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService->outlierDetection->baseEjectionTime->nanos = 671907;
    $request->backendService->outlierDetection->baseEjectionTime->seconds = 'sed';
    $request->backendService->outlierDetection->consecutiveErrors = 447516;
    $request->backendService->outlierDetection->consecutiveGatewayFailure = 417486;
    $request->backendService->outlierDetection->enforcingConsecutiveErrors = 696077;
    $request->backendService->outlierDetection->enforcingConsecutiveGatewayFailure = 131289;
    $request->backendService->outlierDetection->enforcingSuccessRate = 378326;
    $request->backendService->outlierDetection->interval = new Duration();
    $request->backendService->outlierDetection->interval->nanos = 604118;
    $request->backendService->outlierDetection->interval->seconds = 'architecto';
    $request->backendService->outlierDetection->maxEjectionPercent = 382808;
    $request->backendService->outlierDetection->successRateMinimumHosts = 960257;
    $request->backendService->outlierDetection->successRateRequestVolume = 895386;
    $request->backendService->outlierDetection->successRateStdevFactor = 72434;
    $request->backendService->port = 967795;
    $request->backendService->portName = 'perferendis';
    $request->backendService->protocol = BackendServiceProtocolEnum::SSL;
    $request->backendService->region = 'maiores';
    $request->backendService->securityPolicy = 'incidunt';
    $request->backendService->securitySettings = new SecuritySettings();
    $request->backendService->securitySettings->authentication = 'sed';
    $request->backendService->securitySettings->awsV4Authentication = new Awsv4Signature();
    $request->backendService->securitySettings->awsV4Authentication->accessKey = 'provident';
    $request->backendService->securitySettings->awsV4Authentication->accessKeyId = 'eius';
    $request->backendService->securitySettings->awsV4Authentication->accessKeyVersion = 'necessitatibus';
    $request->backendService->securitySettings->awsV4Authentication->originRegion = 'ipsum';
    $request->backendService->securitySettings->clientTlsPolicy = 'ea';
    $request->backendService->securitySettings->subjectAltNames = [
        'quos',
        'voluptatibus',
        'tempora',
    ];
    $request->backendService->selfLink = 'tempora';
    $request->backendService->serviceBindings = [
        'reiciendis',
        'ex',
    ];
    $request->backendService->sessionAffinity = BackendServiceSessionAffinityEnum::CLIENT_IP;
    $request->backendService->subsetting = new Subsetting();
    $request->backendService->subsetting->policy = SubsettingPolicyEnum::CONSISTENT_HASH_SUBSETTING;
    $request->backendService->subsetting->subsetSize = 888044;
    $request->backendService->timeoutSec = 505866;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'ipsam';
    $request->key = 'debitis';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'sit';
    $request->quotaUser = 'nobis';
    $request->requestId = 'error';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'minima';
    $request->userIp = 'recusandae';

    $requestSecurity = new ComputeBackendServicesInsertSecurity();
    $requestSecurity->option1 = new ComputeBackendServicesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendServices->computeBackendServicesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendServicesList

Retrieves the list of BackendService resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aperiam';
    $request->fields = 'saepe';
    $request->filter = 'numquam';
    $request->key = 'veniam';
    $request->maxResults = 446135;
    $request->oauthToken = 'officiis';
    $request->orderBy = 'beatae';
    $request->pageToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'exercitationem';
    $request->quotaUser = 'praesentium';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'dolorum';

    $requestSecurity = new ComputeBackendServicesListSecurity();
    $requestSecurity->option1 = new ComputeBackendServicesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendServices->computeBackendServicesList($request, $requestSecurity);

    if ($response->backendServiceList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendServicesPatch

Patches the specified BackendService resource with the data included in the request. For more information, see Backend services overview. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesPatchRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->backendService1 = new BackendService();
    $request->backendService1->affinityCookieTtlSec = 622385;
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
        'neque',
        'dolorum',
        'nostrum',
        'officia',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'corrupti',
        'accusamus',
        'tempora',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'fugit',
        'ut',
        'fugiat',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'culpa',
    ];
    $request->backendService1->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::INVALID_CACHE_MODE;
    $request->backendService1->cdnPolicy->clientTtl = 299643;
    $request->backendService1->cdnPolicy->defaultTtl = 7884;
    $request->backendService1->cdnPolicy->maxTtl = 460220;
    $request->backendService1->cdnPolicy->negativeCaching = false;
    $request->backendService1->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService1->cdnPolicy->requestCoalescing = false;
    $request->backendService1->cdnPolicy->serveWhileStale = 24527;
    $request->backendService1->cdnPolicy->signedUrlCacheMaxAgeSec = 'voluptatum';
    $request->backendService1->cdnPolicy->signedUrlKeyNames = [
        'repudiandae',
        'corporis',
        'et',
    ];
    $request->backendService1->circuitBreakers = new CircuitBreakers();
    $request->backendService1->circuitBreakers->connectTimeout = new Duration();
    $request->backendService1->circuitBreakers->connectTimeout->nanos = 502710;
    $request->backendService1->circuitBreakers->connectTimeout->seconds = 'ex';
    $request->backendService1->circuitBreakers->maxConnections = 153627;
    $request->backendService1->circuitBreakers->maxPendingRequests = 24313;
    $request->backendService1->circuitBreakers->maxRequests = 425508;
    $request->backendService1->circuitBreakers->maxRequestsPerConnection = 342611;
    $request->backendService1->circuitBreakers->maxRetries = 906172;
    $request->backendService1->compressionMode = BackendServiceCompressionModeEnum::DISABLED;
    $request->backendService1->connectionDraining = new ConnectionDraining();
    $request->backendService1->connectionDraining->drainingTimeoutSec = 8511;
    $request->backendService1->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService1->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::ALWAYS_PERSIST;
    $request->backendService1->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService1->connectionTrackingPolicy->idleTimeoutSec = 968865;
    $request->backendService1->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::INVALID_TRACKING_MODE;
    $request->backendService1->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService1->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService1->consistentHash->httpCookie->name = 'Gerald Bradtke';
    $request->backendService1->consistentHash->httpCookie->path = 'quidem';
    $request->backendService1->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService1->consistentHash->httpCookie->ttl->nanos = 539074;
    $request->backendService1->consistentHash->httpCookie->ttl->seconds = 'laborum';
    $request->backendService1->consistentHash->httpHeaderName = 'nam';
    $request->backendService1->consistentHash->minimumRingSize = 'tenetur';
    $request->backendService1->creationTimestamp = 'laboriosam';
    $request->backendService1->customRequestHeaders = [
        'amet',
    ];
    $request->backendService1->customResponseHeaders = [
        'voluptate',
        'unde',
        'reiciendis',
    ];
    $request->backendService1->description = 'provident';
    $request->backendService1->edgeSecurityPolicy = 'repellendus';
    $request->backendService1->enableCDN = false;
    $request->backendService1->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService1->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService1->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService1->failoverPolicy->failoverRatio = 9627.71;
    $request->backendService1->fingerprint = 'voluptates';
    $request->backendService1->healthChecks = [
        'est',
    ];
    $request->backendService1->iap = new BackendServiceIAP();
    $request->backendService1->iap->enabled = false;
    $request->backendService1->iap->oauth2ClientId = 'quidem';
    $request->backendService1->iap->oauth2ClientSecret = 'reprehenderit';
    $request->backendService1->iap->oauth2ClientSecretSha256 = 'facere';
    $request->backendService1->id = 'fuga';
    $request->backendService1->kind = 'praesentium';
    $request->backendService1->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::INTERNAL_MANAGED;
    $request->backendService1->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService1->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::INVALID_LB_POLICY;
    $request->backendService1->logConfig = new BackendServiceLogConfig();
    $request->backendService1->logConfig->enable = false;
    $request->backendService1->logConfig->optionalFields = [
        'repudiandae',
        'quasi',
        'atque',
        'reprehenderit',
    ];
    $request->backendService1->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::INCLUDE_ALL_OPTIONAL;
    $request->backendService1->logConfig->sampleRate = 5199.52;
    $request->backendService1->maxStreamDuration = new Duration();
    $request->backendService1->maxStreamDuration->nanos = 383103;
    $request->backendService1->maxStreamDuration->seconds = 'quidem';
    $request->backendService1->name = 'Henry Koepp';
    $request->backendService1->network = 'ea';
    $request->backendService1->outlierDetection = new OutlierDetection();
    $request->backendService1->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService1->outlierDetection->baseEjectionTime->nanos = 539118;
    $request->backendService1->outlierDetection->baseEjectionTime->seconds = 'error';
    $request->backendService1->outlierDetection->consecutiveErrors = 887265;
    $request->backendService1->outlierDetection->consecutiveGatewayFailure = 886961;
    $request->backendService1->outlierDetection->enforcingConsecutiveErrors = 880107;
    $request->backendService1->outlierDetection->enforcingConsecutiveGatewayFailure = 618826;
    $request->backendService1->outlierDetection->enforcingSuccessRate = 328303;
    $request->backendService1->outlierDetection->interval = new Duration();
    $request->backendService1->outlierDetection->interval->nanos = 133461;
    $request->backendService1->outlierDetection->interval->seconds = 'ex';
    $request->backendService1->outlierDetection->maxEjectionPercent = 980581;
    $request->backendService1->outlierDetection->successRateMinimumHosts = 544647;
    $request->backendService1->outlierDetection->successRateRequestVolume = 871786;
    $request->backendService1->outlierDetection->successRateStdevFactor = 621693;
    $request->backendService1->port = 502721;
    $request->backendService1->portName = 'suscipit';
    $request->backendService1->protocol = BackendServiceProtocolEnum::UNSPECIFIED;
    $request->backendService1->region = 'atque';
    $request->backendService1->securityPolicy = 'atque';
    $request->backendService1->securitySettings = new SecuritySettings();
    $request->backendService1->securitySettings->authentication = 'sunt';
    $request->backendService1->securitySettings->awsV4Authentication = new Awsv4Signature();
    $request->backendService1->securitySettings->awsV4Authentication->accessKey = 'recusandae';
    $request->backendService1->securitySettings->awsV4Authentication->accessKeyId = 'dolorum';
    $request->backendService1->securitySettings->awsV4Authentication->accessKeyVersion = 'repellendus';
    $request->backendService1->securitySettings->awsV4Authentication->originRegion = 'labore';
    $request->backendService1->securitySettings->clientTlsPolicy = 'reiciendis';
    $request->backendService1->securitySettings->subjectAltNames = [
        'repudiandae',
    ];
    $request->backendService1->selfLink = 'dicta';
    $request->backendService1->serviceBindings = [
        'beatae',
    ];
    $request->backendService1->sessionAffinity = BackendServiceSessionAffinityEnum::CLIENT_IP_NO_DESTINATION;
    $request->backendService1->subsetting = new Subsetting();
    $request->backendService1->subsetting->policy = SubsettingPolicyEnum::CONSISTENT_HASH_SUBSETTING;
    $request->backendService1->subsetting->subsetSize = 389135;
    $request->backendService1->timeoutSec = 246535;
    $request->accessToken = 'a';
    $request->alt = AltEnum::MEDIA;
    $request->backendServicePathParameter = 'magnam';
    $request->callback = 'saepe';
    $request->fields = 'consequuntur';
    $request->key = 'occaecati';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->project = 'perspiciatis';
    $request->quotaUser = 'in';
    $request->requestId = 'adipisci';
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'occaecati';
    $request->userIp = 'consequuntur';

    $requestSecurity = new ComputeBackendServicesPatchSecurity();
    $requestSecurity->option1 = new ComputeBackendServicesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendServices->computeBackendServicesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendServicesSetEdgeSecurityPolicy

Sets the edge security policy for the specified backend service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesSetEdgeSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesSetEdgeSecurityPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesSetEdgeSecurityPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesSetEdgeSecurityPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesSetEdgeSecurityPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->securityPolicyReference = new SecurityPolicyReference();
    $request->securityPolicyReference->securityPolicy = 'id';
    $request->accessToken = 'quis';
    $request->alt = AltEnum::MEDIA;
    $request->backendService = 'error';
    $request->callback = 'illo';
    $request->fields = 'corporis';
    $request->key = 'quidem';
    $request->oauthToken = 'eveniet';
    $request->prettyPrint = false;
    $request->project = 'non';
    $request->quotaUser = 'vero';
    $request->requestId = 'doloremque';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'ipsa';
    $request->userIp = 'totam';

    $requestSecurity = new ComputeBackendServicesSetEdgeSecurityPolicySecurity();
    $requestSecurity->option1 = new ComputeBackendServicesSetEdgeSecurityPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendServices->computeBackendServicesSetEdgeSecurityPolicy($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendServicesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSetPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'eveniet';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'iure';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 187552;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatum';
    $request->fields = 'rem';
    $request->key = 'aliquam';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->project = 'repellat';
    $request->quotaUser = 'alias';
    $request->resource = 'corporis';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'nihil';
    $request->userIp = 'mollitia';

    $requestSecurity = new ComputeBackendServicesSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeBackendServicesSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendServices->computeBackendServicesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendServicesSetSecurityPolicy

Sets the Google Cloud Armor security policy for the specified backend service. For more information, see Google Cloud Armor Overview

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesSetSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesSetSecurityPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesSetSecurityPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesSetSecurityPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesSetSecurityPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->securityPolicyReference = new SecurityPolicyReference();
    $request->securityPolicyReference->securityPolicy = 'alias';
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->backendService = 'dolores';
    $request->callback = 'id';
    $request->fields = 'minima';
    $request->key = 'dolore';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'quae';
    $request->requestId = 'recusandae';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'quaerat';
    $request->userIp = 'molestiae';

    $requestSecurity = new ComputeBackendServicesSetSecurityPolicySecurity();
    $requestSecurity->option1 = new ComputeBackendServicesSetSecurityPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendServices->computeBackendServicesSetSecurityPolicy($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendServicesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'culpa',
        'adipisci',
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eum';
    $request->fields = 'nemo';
    $request->key = 'recusandae';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->project = 'provident';
    $request->quotaUser = 'quis';
    $request->resource = 'eum';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'provident';
    $request->userIp = 'aspernatur';

    $requestSecurity = new ComputeBackendServicesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeBackendServicesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendServices->computeBackendServicesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendServicesUpdate

Updates the specified BackendService resource with the data included in the request. For more information, see Backend services overview.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesUpdateRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->backendService1 = new BackendService();
    $request->backendService1->affinityCookieTtlSec = 96804;
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
        'provident',
        'possimus',
        'animi',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'aliquid',
        'accusantium',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'doloribus',
        'ullam',
        'in',
        'nam',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'officia',
        'laborum',
        'placeat',
        'modi',
    ];
    $request->backendService1->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::USE_ORIGIN_HEADERS;
    $request->backendService1->cdnPolicy->clientTtl = 564064;
    $request->backendService1->cdnPolicy->defaultTtl = 889794;
    $request->backendService1->cdnPolicy->maxTtl = 956933;
    $request->backendService1->cdnPolicy->negativeCaching = false;
    $request->backendService1->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService1->cdnPolicy->requestCoalescing = false;
    $request->backendService1->cdnPolicy->serveWhileStale = 113486;
    $request->backendService1->cdnPolicy->signedUrlCacheMaxAgeSec = 'rerum';
    $request->backendService1->cdnPolicy->signedUrlKeyNames = [
        'quis',
        'inventore',
    ];
    $request->backendService1->circuitBreakers = new CircuitBreakers();
    $request->backendService1->circuitBreakers->connectTimeout = new Duration();
    $request->backendService1->circuitBreakers->connectTimeout->nanos = 147685;
    $request->backendService1->circuitBreakers->connectTimeout->seconds = 'cumque';
    $request->backendService1->circuitBreakers->maxConnections = 62636;
    $request->backendService1->circuitBreakers->maxPendingRequests = 21688;
    $request->backendService1->circuitBreakers->maxRequests = 241901;
    $request->backendService1->circuitBreakers->maxRequestsPerConnection = 137251;
    $request->backendService1->circuitBreakers->maxRetries = 432281;
    $request->backendService1->compressionMode = BackendServiceCompressionModeEnum::AUTOMATIC;
    $request->backendService1->connectionDraining = new ConnectionDraining();
    $request->backendService1->connectionDraining->drainingTimeoutSec = 521996;
    $request->backendService1->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService1->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::NEVER_PERSIST;
    $request->backendService1->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService1->connectionTrackingPolicy->idleTimeoutSec = 773084;
    $request->backendService1->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::INVALID_TRACKING_MODE;
    $request->backendService1->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService1->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService1->consistentHash->httpCookie->name = 'Andre Carroll V';
    $request->backendService1->consistentHash->httpCookie->path = 'provident';
    $request->backendService1->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService1->consistentHash->httpCookie->ttl->nanos = 936469;
    $request->backendService1->consistentHash->httpCookie->ttl->seconds = 'soluta';
    $request->backendService1->consistentHash->httpHeaderName = 'hic';
    $request->backendService1->consistentHash->minimumRingSize = 'illum';
    $request->backendService1->creationTimestamp = 'eaque';
    $request->backendService1->customRequestHeaders = [
        'perspiciatis',
        'maiores',
        'debitis',
        'aliquid',
    ];
    $request->backendService1->customResponseHeaders = [
        'suscipit',
        'dolorem',
        'fugit',
        'cumque',
    ];
    $request->backendService1->description = 'fuga';
    $request->backendService1->edgeSecurityPolicy = 'ratione';
    $request->backendService1->enableCDN = false;
    $request->backendService1->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService1->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService1->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService1->failoverPolicy->failoverRatio = 6567.62;
    $request->backendService1->fingerprint = 'necessitatibus';
    $request->backendService1->healthChecks = [
        'consequatur',
        'quasi',
        'et',
        'ducimus',
    ];
    $request->backendService1->iap = new BackendServiceIAP();
    $request->backendService1->iap->enabled = false;
    $request->backendService1->iap->oauth2ClientId = 'natus';
    $request->backendService1->iap->oauth2ClientSecret = 'occaecati';
    $request->backendService1->iap->oauth2ClientSecretSha256 = 'suscipit';
    $request->backendService1->id = 'adipisci';
    $request->backendService1->kind = 'quasi';
    $request->backendService1->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::EXTERNAL_MANAGED;
    $request->backendService1->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService1->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::ROUND_ROBIN;
    $request->backendService1->logConfig = new BackendServiceLogConfig();
    $request->backendService1->logConfig->enable = false;
    $request->backendService1->logConfig->optionalFields = [
        'ipsa',
        'tempora',
        'nihil',
        'molestiae',
    ];
    $request->backendService1->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::CUSTOM;
    $request->backendService1->logConfig->sampleRate = 4797.54;
    $request->backendService1->maxStreamDuration = new Duration();
    $request->backendService1->maxStreamDuration->nanos = 457059;
    $request->backendService1->maxStreamDuration->seconds = 'praesentium';
    $request->backendService1->name = 'Dr. Van Kassulke Sr.';
    $request->backendService1->network = 'odio';
    $request->backendService1->outlierDetection = new OutlierDetection();
    $request->backendService1->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService1->outlierDetection->baseEjectionTime->nanos = 271252;
    $request->backendService1->outlierDetection->baseEjectionTime->seconds = 'esse';
    $request->backendService1->outlierDetection->consecutiveErrors = 403793;
    $request->backendService1->outlierDetection->consecutiveGatewayFailure = 235263;
    $request->backendService1->outlierDetection->enforcingConsecutiveErrors = 399812;
    $request->backendService1->outlierDetection->enforcingConsecutiveGatewayFailure = 58870;
    $request->backendService1->outlierDetection->enforcingSuccessRate = 671384;
    $request->backendService1->outlierDetection->interval = new Duration();
    $request->backendService1->outlierDetection->interval->nanos = 123844;
    $request->backendService1->outlierDetection->interval->seconds = 'nostrum';
    $request->backendService1->outlierDetection->maxEjectionPercent = 856756;
    $request->backendService1->outlierDetection->successRateMinimumHosts = 713767;
    $request->backendService1->outlierDetection->successRateRequestVolume = 399667;
    $request->backendService1->outlierDetection->successRateStdevFactor = 639187;
    $request->backendService1->port = 381397;
    $request->backendService1->portName = 'aliquid';
    $request->backendService1->protocol = BackendServiceProtocolEnum::GRPC;
    $request->backendService1->region = 'eum';
    $request->backendService1->securityPolicy = 'voluptas';
    $request->backendService1->securitySettings = new SecuritySettings();
    $request->backendService1->securitySettings->authentication = 'iste';
    $request->backendService1->securitySettings->awsV4Authentication = new Awsv4Signature();
    $request->backendService1->securitySettings->awsV4Authentication->accessKey = 'id';
    $request->backendService1->securitySettings->awsV4Authentication->accessKeyId = 'ab';
    $request->backendService1->securitySettings->awsV4Authentication->accessKeyVersion = 'error';
    $request->backendService1->securitySettings->awsV4Authentication->originRegion = 'possimus';
    $request->backendService1->securitySettings->clientTlsPolicy = 'voluptates';
    $request->backendService1->securitySettings->subjectAltNames = [
        'laborum',
        'libero',
        'ad',
    ];
    $request->backendService1->selfLink = 'deleniti';
    $request->backendService1->serviceBindings = [
        'vitae',
        'repellendus',
    ];
    $request->backendService1->sessionAffinity = BackendServiceSessionAffinityEnum::CLIENT_IP_PROTO;
    $request->backendService1->subsetting = new Subsetting();
    $request->backendService1->subsetting->policy = SubsettingPolicyEnum::NONE;
    $request->backendService1->subsetting->subsetSize = 405373;
    $request->backendService1->timeoutSec = 281153;
    $request->accessToken = 'ad';
    $request->alt = AltEnum::PROTO;
    $request->backendServicePathParameter = 'voluptatem';
    $request->callback = 'molestias';
    $request->fields = 'cum';
    $request->key = 'aliquid';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->project = 'voluptatum';
    $request->quotaUser = 'omnis';
    $request->requestId = 'veritatis';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'est';
    $request->userIp = 'culpa';

    $requestSecurity = new ComputeBackendServicesUpdateSecurity();
    $requestSecurity->option1 = new ComputeBackendServicesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendServices->computeBackendServicesUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
