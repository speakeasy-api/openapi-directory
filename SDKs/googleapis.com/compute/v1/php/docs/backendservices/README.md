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
    $request->signedUrlKey->keyName = 'eos';
    $request->signedUrlKey->keyValue = 'voluptas';
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->backendService = 'consequatur';
    $request->callback = 'tempora';
    $request->fields = 'debitis';
    $request->key = 'ipsam';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->project = 'sequi';
    $request->quotaUser = 'quo';
    $request->requestId = 'esse';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'aperiam';
    $request->userIp = 'distinctio';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'totam';
    $request->filter = 'accusamus';
    $request->includeAllScopes = false;
    $request->key = 'aliquam';
    $request->maxResults = 488410;
    $request->oauthToken = 'occaecati';
    $request->orderBy = 'commodi';
    $request->pageToken = 'sapiente';
    $request->prettyPrint = false;
    $request->project = 'dolores';
    $request->quotaUser = 'deserunt';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'accusantium';
    $request->userIp = 'porro';

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
    $request->accessToken = 'quas';
    $request->alt = AltEnum::MEDIA;
    $request->backendService = 'consequuntur';
    $request->callback = 'deleniti';
    $request->fields = 'fugit';
    $request->key = 'fuga';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'atque';
    $request->requestId = 'explicabo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'nisi';
    $request->userIp = 'fugit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->backendService = 'explicabo';
    $request->callback = 'saepe';
    $request->fields = 'occaecati';
    $request->key = 'atque';
    $request->keyName = 'et';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->project = 'eveniet';
    $request->quotaUser = 'accusamus';
    $request->requestId = 'veritatis';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'quod';
    $request->userIp = 'nam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->backendService = 'saepe';
    $request->callback = 'vel';
    $request->fields = 'harum';
    $request->key = 'molestiae';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->project = 'occaecati';
    $request->quotaUser = 'minima';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'eligendi';
    $request->userIp = 'sit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->resourceGroupReference = new ResourceGroupReference();
    $request->resourceGroupReference->group = 'tempore';
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->backendService = 'consequuntur';
    $request->callback = 'consequatur';
    $request->fields = 'minus';
    $request->key = 'quaerat';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->project = 'consectetur';
    $request->quotaUser = 'esse';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'provident';
    $request->userIp = 'a';

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
    $request->accessToken = 'quas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quasi';
    $request->fields = 'a';
    $request->key = 'error';
    $request->oauthToken = 'sint';
    $request->optionsRequestedPolicyVersion = 863023;
    $request->prettyPrint = false;
    $request->project = 'possimus';
    $request->quotaUser = 'quia';
    $request->resource = 'eveniet';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'facere';
    $request->userIp = 'veritatis';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->backendService = new BackendService();
    $request->backendService->affinityCookieTtlSec = 94458;
    $request->backendService->backends = [
        new Backend(),
        new Backend(),
        new Backend(),
    ];
    $request->backendService->cdnPolicy = new BackendServiceCdnPolicy();
    $request->backendService->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy = new CacheKeyPolicy();
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeHost = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'tenetur',
        'quae',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'vel',
        'in',
        'eius',
        'libero',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'soluta',
        'accusantium',
        'aliquam',
        'sapiente',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'ullam',
    ];
    $request->backendService->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::FORCE_CACHE_ALL;
    $request->backendService->cdnPolicy->clientTtl = 356707;
    $request->backendService->cdnPolicy->defaultTtl = 391774;
    $request->backendService->cdnPolicy->maxTtl = 16328;
    $request->backendService->cdnPolicy->negativeCaching = false;
    $request->backendService->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService->cdnPolicy->requestCoalescing = false;
    $request->backendService->cdnPolicy->serveWhileStale = 185232;
    $request->backendService->cdnPolicy->signedUrlCacheMaxAgeSec = 'quibusdam';
    $request->backendService->cdnPolicy->signedUrlKeyNames = [
        'deleniti',
        'itaque',
    ];
    $request->backendService->circuitBreakers = new CircuitBreakers();
    $request->backendService->circuitBreakers->maxConnections = 680270;
    $request->backendService->circuitBreakers->maxPendingRequests = 99615;
    $request->backendService->circuitBreakers->maxRequests = 609178;
    $request->backendService->circuitBreakers->maxRequestsPerConnection = 945302;
    $request->backendService->circuitBreakers->maxRetries = 98478;
    $request->backendService->compressionMode = BackendServiceCompressionModeEnum::DISABLED;
    $request->backendService->connectionDraining = new ConnectionDraining();
    $request->backendService->connectionDraining->drainingTimeoutSec = 92027;
    $request->backendService->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::DEFAULT_FOR_PROTOCOL;
    $request->backendService->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService->connectionTrackingPolicy->idleTimeoutSec = 55965;
    $request->backendService->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::INVALID_TRACKING_MODE;
    $request->backendService->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService->consistentHash->httpCookie->name = 'Edith Ferry';
    $request->backendService->consistentHash->httpCookie->path = 'accusantium';
    $request->backendService->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService->consistentHash->httpCookie->ttl->nanos = 522371;
    $request->backendService->consistentHash->httpCookie->ttl->seconds = 'aut';
    $request->backendService->consistentHash->httpHeaderName = 'laudantium';
    $request->backendService->consistentHash->minimumRingSize = 'eum';
    $request->backendService->creationTimestamp = 'mollitia';
    $request->backendService->customRequestHeaders = [
        'corrupti',
    ];
    $request->backendService->customResponseHeaders = [
        'voluptatem',
        'dolor',
    ];
    $request->backendService->description = 'occaecati';
    $request->backendService->edgeSecurityPolicy = 'numquam';
    $request->backendService->enableCDN = false;
    $request->backendService->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService->failoverPolicy->failoverRatio = 7710.89;
    $request->backendService->fingerprint = 'explicabo';
    $request->backendService->healthChecks = [
        'aut',
        'dignissimos',
    ];
    $request->backendService->iap = new BackendServiceIAP();
    $request->backendService->iap->enabled = false;
    $request->backendService->iap->oauth2ClientId = 'dicta';
    $request->backendService->iap->oauth2ClientSecret = 'maiores';
    $request->backendService->iap->oauth2ClientSecretSha256 = 'natus';
    $request->backendService->id = 'velit';
    $request->backendService->kind = 'voluptatibus';
    $request->backendService->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::INTERNAL;
    $request->backendService->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::INVALID_LB_POLICY;
    $request->backendService->logConfig = new BackendServiceLogConfig();
    $request->backendService->logConfig->enable = false;
    $request->backendService->logConfig->optionalFields = [
        'quaerat',
        'consequuntur',
    ];
    $request->backendService->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::INCLUDE_ALL_OPTIONAL;
    $request->backendService->logConfig->sampleRate = 6387.62;
    $request->backendService->maxStreamDuration = new Duration();
    $request->backendService->maxStreamDuration->nanos = 807023;
    $request->backendService->maxStreamDuration->seconds = 'dignissimos';
    $request->backendService->name = 'Mrs. Aubrey Hills';
    $request->backendService->network = 'quod';
    $request->backendService->outlierDetection = new OutlierDetection();
    $request->backendService->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService->outlierDetection->baseEjectionTime->nanos = 288398;
    $request->backendService->outlierDetection->baseEjectionTime->seconds = 'ab';
    $request->backendService->outlierDetection->consecutiveErrors = 241418;
    $request->backendService->outlierDetection->consecutiveGatewayFailure = 683573;
    $request->backendService->outlierDetection->enforcingConsecutiveErrors = 662505;
    $request->backendService->outlierDetection->enforcingConsecutiveGatewayFailure = 380729;
    $request->backendService->outlierDetection->enforcingSuccessRate = 246063;
    $request->backendService->outlierDetection->interval = new Duration();
    $request->backendService->outlierDetection->interval->nanos = 633931;
    $request->backendService->outlierDetection->interval->seconds = 'est';
    $request->backendService->outlierDetection->maxEjectionPercent = 926880;
    $request->backendService->outlierDetection->successRateMinimumHosts = 517309;
    $request->backendService->outlierDetection->successRateRequestVolume = 853940;
    $request->backendService->outlierDetection->successRateStdevFactor = 424089;
    $request->backendService->port = 497678;
    $request->backendService->portName = 'quos';
    $request->backendService->protocol = BackendServiceProtocolEnum::HTTPS;
    $request->backendService->region = 'labore';
    $request->backendService->securityPolicy = 'possimus';
    $request->backendService->securitySettings = new SecuritySettings();
    $request->backendService->securitySettings->clientTlsPolicy = 'facilis';
    $request->backendService->securitySettings->subjectAltNames = [
        'commodi',
        'in',
        'corporis',
    ];
    $request->backendService->selfLink = 'reiciendis';
    $request->backendService->serviceBindings = [
        'nemo',
        'recusandae',
        'aliquid',
        'aperiam',
    ];
    $request->backendService->sessionAffinity = BackendServiceSessionAffinityEnum::HEADER_FIELD;
    $request->backendService->subsetting = new Subsetting();
    $request->backendService->subsetting->policy = SubsettingPolicyEnum::CONSISTENT_HASH_SUBSETTING;
    $request->backendService->timeoutSec = 449083;
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facere';
    $request->fields = 'numquam';
    $request->key = 'doloribus';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->project = 'reiciendis';
    $request->quotaUser = 'quidem';
    $request->requestId = 'saepe';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'dolore';
    $request->userIp = 'sunt';

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
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::JSON;
    $request->callback = 'amet';
    $request->fields = 'beatae';
    $request->filter = 'dignissimos';
    $request->key = 'a';
    $request->maxResults = 891523;
    $request->oauthToken = 'consectetur';
    $request->orderBy = 'corporis';
    $request->pageToken = 'harum';
    $request->prettyPrint = false;
    $request->project = 'laboriosam';
    $request->quotaUser = 'ipsa';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'libero';
    $request->userIp = 'vitae';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->backendService1 = new BackendService();
    $request->backendService1->affinityCookieTtlSec = 631126;
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
        'voluptas',
        'voluptas',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'nobis',
        'dolorum',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'minus',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'blanditiis',
    ];
    $request->backendService1->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::FORCE_CACHE_ALL;
    $request->backendService1->cdnPolicy->clientTtl = 296242;
    $request->backendService1->cdnPolicy->defaultTtl = 304468;
    $request->backendService1->cdnPolicy->maxTtl = 885963;
    $request->backendService1->cdnPolicy->negativeCaching = false;
    $request->backendService1->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService1->cdnPolicy->requestCoalescing = false;
    $request->backendService1->cdnPolicy->serveWhileStale = 351870;
    $request->backendService1->cdnPolicy->signedUrlCacheMaxAgeSec = 'adipisci';
    $request->backendService1->cdnPolicy->signedUrlKeyNames = [
        'blanditiis',
        'quas',
        'hic',
    ];
    $request->backendService1->circuitBreakers = new CircuitBreakers();
    $request->backendService1->circuitBreakers->maxConnections = 201517;
    $request->backendService1->circuitBreakers->maxPendingRequests = 633998;
    $request->backendService1->circuitBreakers->maxRequests = 548519;
    $request->backendService1->circuitBreakers->maxRequestsPerConnection = 867290;
    $request->backendService1->circuitBreakers->maxRetries = 519643;
    $request->backendService1->compressionMode = BackendServiceCompressionModeEnum::DISABLED;
    $request->backendService1->connectionDraining = new ConnectionDraining();
    $request->backendService1->connectionDraining->drainingTimeoutSec = 348783;
    $request->backendService1->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService1->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::NEVER_PERSIST;
    $request->backendService1->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService1->connectionTrackingPolicy->idleTimeoutSec = 24619;
    $request->backendService1->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::PER_SESSION;
    $request->backendService1->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService1->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService1->consistentHash->httpCookie->name = 'Faith Cole';
    $request->backendService1->consistentHash->httpCookie->path = 'voluptate';
    $request->backendService1->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService1->consistentHash->httpCookie->ttl->nanos = 709072;
    $request->backendService1->consistentHash->httpCookie->ttl->seconds = 'ab';
    $request->backendService1->consistentHash->httpHeaderName = 'iste';
    $request->backendService1->consistentHash->minimumRingSize = 'dolore';
    $request->backendService1->creationTimestamp = 'laborum';
    $request->backendService1->customRequestHeaders = [
        'in',
    ];
    $request->backendService1->customResponseHeaders = [
        'quidem',
        'explicabo',
    ];
    $request->backendService1->description = 'voluptas';
    $request->backendService1->edgeSecurityPolicy = 'unde';
    $request->backendService1->enableCDN = false;
    $request->backendService1->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService1->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService1->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService1->failoverPolicy->failoverRatio = 1000.32;
    $request->backendService1->fingerprint = 'suscipit';
    $request->backendService1->healthChecks = [
        'debitis',
        'illo',
        'reiciendis',
        'perferendis',
    ];
    $request->backendService1->iap = new BackendServiceIAP();
    $request->backendService1->iap->enabled = false;
    $request->backendService1->iap->oauth2ClientId = 'corrupti';
    $request->backendService1->iap->oauth2ClientSecret = 'maiores';
    $request->backendService1->iap->oauth2ClientSecretSha256 = 'incidunt';
    $request->backendService1->id = 'sed';
    $request->backendService1->kind = 'provident';
    $request->backendService1->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::EXTERNAL_MANAGED;
    $request->backendService1->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService1->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::LEAST_REQUEST;
    $request->backendService1->logConfig = new BackendServiceLogConfig();
    $request->backendService1->logConfig->enable = false;
    $request->backendService1->logConfig->optionalFields = [
        'occaecati',
        'quos',
    ];
    $request->backendService1->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::INCLUDE_ALL_OPTIONAL;
    $request->backendService1->logConfig->sampleRate = 2716.53;
    $request->backendService1->maxStreamDuration = new Duration();
    $request->backendService1->maxStreamDuration->nanos = 273009;
    $request->backendService1->maxStreamDuration->seconds = 'voluptate';
    $request->backendService1->name = 'Marc Balistreri';
    $request->backendService1->network = 'praesentium';
    $request->backendService1->outlierDetection = new OutlierDetection();
    $request->backendService1->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService1->outlierDetection->baseEjectionTime->nanos = 708609;
    $request->backendService1->outlierDetection->baseEjectionTime->seconds = 'quaerat';
    $request->backendService1->outlierDetection->consecutiveErrors = 277773;
    $request->backendService1->outlierDetection->consecutiveGatewayFailure = 373035;
    $request->backendService1->outlierDetection->enforcingConsecutiveErrors = 894864;
    $request->backendService1->outlierDetection->enforcingConsecutiveGatewayFailure = 524970;
    $request->backendService1->outlierDetection->enforcingSuccessRate = 26522;
    $request->backendService1->outlierDetection->interval = new Duration();
    $request->backendService1->outlierDetection->interval->nanos = 750595;
    $request->backendService1->outlierDetection->interval->seconds = 'error';
    $request->backendService1->outlierDetection->maxEjectionPercent = 333507;
    $request->backendService1->outlierDetection->successRateMinimumHosts = 329543;
    $request->backendService1->outlierDetection->successRateRequestVolume = 924159;
    $request->backendService1->outlierDetection->successRateStdevFactor = 967122;
    $request->backendService1->port = 862319;
    $request->backendService1->portName = 'magni';
    $request->backendService1->protocol = BackendServiceProtocolEnum::GRPC;
    $request->backendService1->region = 'saepe';
    $request->backendService1->securityPolicy = 'numquam';
    $request->backendService1->securitySettings = new SecuritySettings();
    $request->backendService1->securitySettings->clientTlsPolicy = 'veniam';
    $request->backendService1->securitySettings->subjectAltNames = [
        'officiis',
        'beatae',
    ];
    $request->backendService1->selfLink = 'laudantium';
    $request->backendService1->serviceBindings = [
        'praesentium',
        'cum',
    ];
    $request->backendService1->sessionAffinity = BackendServiceSessionAffinityEnum::CLIENT_IP_PROTO;
    $request->backendService1->subsetting = new Subsetting();
    $request->backendService1->subsetting->policy = SubsettingPolicyEnum::NONE;
    $request->backendService1->timeoutSec = 530089;
    $request->accessToken = 'error';
    $request->alt = AltEnum::PROTO;
    $request->backendServicePathParameter = 'expedita';
    $request->callback = 'debitis';
    $request->fields = 'neque';
    $request->key = 'dolorum';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'dolorum';
    $request->requestId = 'corrupti';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'atque';

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
    $request->securityPolicyReference->securityPolicy = 'ut';
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->backendService = 'culpa';
    $request->callback = 'expedita';
    $request->fields = 'magnam';
    $request->key = 'consequatur';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->project = 'ipsam';
    $request->quotaUser = 'sit';
    $request->requestId = 'voluptatum';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'repudiandae';
    $request->userIp = 'corporis';

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
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'ex';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'vel';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 906172;
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'reiciendis';
    $request->key = 'dolorem';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'architecto';
    $request->resource = 'occaecati';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'quidem';
    $request->userIp = 'atque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicyReference = new SecurityPolicyReference();
    $request->securityPolicyReference->securityPolicy = 'nam';
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->backendService = 'alias';
    $request->callback = 'amet';
    $request->fields = 'deserunt';
    $request->key = 'voluptate';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'reiciendis';
    $request->quotaUser = 'provident';
    $request->requestId = 'repellendus';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'voluptates';
    $request->userIp = 'perferendis';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->backendService1 = new BackendService();
    $request->backendService1->affinityCookieTtlSec = 696483;
    $request->backendService1->backends = [
        new Backend(),
        new Backend(),
    ];
    $request->backendService1->cdnPolicy = new BackendServiceCdnPolicy();
    $request->backendService1->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy = new CacheKeyPolicy();
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeHost = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'praesentium',
        'mollitia',
        'veniam',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'quisquam',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'quasi',
        'atque',
        'reprehenderit',
        'asperiores',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'suscipit',
        'quidem',
        'maxime',
    ];
    $request->backendService1->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::CACHE_ALL_STATIC;
    $request->backendService1->cdnPolicy->clientTtl = 461007;
    $request->backendService1->cdnPolicy->defaultTtl = 227759;
    $request->backendService1->cdnPolicy->maxTtl = 826825;
    $request->backendService1->cdnPolicy->negativeCaching = false;
    $request->backendService1->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService1->cdnPolicy->requestCoalescing = false;
    $request->backendService1->cdnPolicy->serveWhileStale = 539118;
    $request->backendService1->cdnPolicy->signedUrlCacheMaxAgeSec = 'error';
    $request->backendService1->cdnPolicy->signedUrlKeyNames = [
        'officiis',
        'accusamus',
        'natus',
        'minima',
    ];
    $request->backendService1->circuitBreakers = new CircuitBreakers();
    $request->backendService1->circuitBreakers->maxConnections = 133461;
    $request->backendService1->circuitBreakers->maxPendingRequests = 404425;
    $request->backendService1->circuitBreakers->maxRequests = 980581;
    $request->backendService1->circuitBreakers->maxRequestsPerConnection = 544647;
    $request->backendService1->circuitBreakers->maxRetries = 871786;
    $request->backendService1->compressionMode = BackendServiceCompressionModeEnum::DISABLED;
    $request->backendService1->connectionDraining = new ConnectionDraining();
    $request->backendService1->connectionDraining->drainingTimeoutSec = 502721;
    $request->backendService1->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService1->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::DEFAULT_FOR_PROTOCOL;
    $request->backendService1->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService1->connectionTrackingPolicy->idleTimeoutSec = 922348;
    $request->backendService1->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::PER_CONNECTION;
    $request->backendService1->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService1->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService1->consistentHash->httpCookie->name = 'Willie Walker';
    $request->backendService1->consistentHash->httpCookie->path = 'labore';
    $request->backendService1->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService1->consistentHash->httpCookie->ttl->nanos = 968287;
    $request->backendService1->consistentHash->httpCookie->ttl->seconds = 'doloremque';
    $request->backendService1->consistentHash->httpHeaderName = 'repudiandae';
    $request->backendService1->consistentHash->minimumRingSize = 'dicta';
    $request->backendService1->creationTimestamp = 'accusantium';
    $request->backendService1->customRequestHeaders = [
        'dolores',
    ];
    $request->backendService1->customResponseHeaders = [
        'laboriosam',
        'velit',
    ];
    $request->backendService1->description = 'a';
    $request->backendService1->edgeSecurityPolicy = 'molestias';
    $request->backendService1->enableCDN = false;
    $request->backendService1->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService1->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService1->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService1->failoverPolicy->failoverRatio = 3000.29;
    $request->backendService1->fingerprint = 'saepe';
    $request->backendService1->healthChecks = [
        'occaecati',
    ];
    $request->backendService1->iap = new BackendServiceIAP();
    $request->backendService1->iap->enabled = false;
    $request->backendService1->iap->oauth2ClientId = 'officiis';
    $request->backendService1->iap->oauth2ClientSecret = 'perspiciatis';
    $request->backendService1->iap->oauth2ClientSecretSha256 = 'in';
    $request->backendService1->id = 'adipisci';
    $request->backendService1->kind = 'eveniet';
    $request->backendService1->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::INTERNAL_MANAGED;
    $request->backendService1->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService1->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::LEAST_REQUEST;
    $request->backendService1->logConfig = new BackendServiceLogConfig();
    $request->backendService1->logConfig->enable = false;
    $request->backendService1->logConfig->optionalFields = [
        'quis',
        'reprehenderit',
        'error',
    ];
    $request->backendService1->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::CUSTOM;
    $request->backendService1->logConfig->sampleRate = 3613.06;
    $request->backendService1->maxStreamDuration = new Duration();
    $request->backendService1->maxStreamDuration->nanos = 696463;
    $request->backendService1->maxStreamDuration->seconds = 'eveniet';
    $request->backendService1->name = 'Meghan Batz IV';
    $request->backendService1->network = 'quae';
    $request->backendService1->outlierDetection = new OutlierDetection();
    $request->backendService1->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService1->outlierDetection->baseEjectionTime->nanos = 474668;
    $request->backendService1->outlierDetection->baseEjectionTime->seconds = 'eveniet';
    $request->backendService1->outlierDetection->consecutiveErrors = 184362;
    $request->backendService1->outlierDetection->consecutiveGatewayFailure = 739884;
    $request->backendService1->outlierDetection->enforcingConsecutiveErrors = 434761;
    $request->backendService1->outlierDetection->enforcingConsecutiveGatewayFailure = 898063;
    $request->backendService1->outlierDetection->enforcingSuccessRate = 187552;
    $request->backendService1->outlierDetection->interval = new Duration();
    $request->backendService1->outlierDetection->interval->nanos = 672582;
    $request->backendService1->outlierDetection->interval->seconds = 'distinctio';
    $request->backendService1->outlierDetection->maxEjectionPercent = 528940;
    $request->backendService1->outlierDetection->successRateMinimumHosts = 523006;
    $request->backendService1->outlierDetection->successRateRequestVolume = 304446;
    $request->backendService1->outlierDetection->successRateStdevFactor = 320565;
    $request->backendService1->port = 997963;
    $request->backendService1->portName = 'alias';
    $request->backendService1->protocol = BackendServiceProtocolEnum::HTTP2;
    $request->backendService1->region = 'perspiciatis';
    $request->backendService1->securityPolicy = 'nihil';
    $request->backendService1->securitySettings = new SecuritySettings();
    $request->backendService1->securitySettings->clientTlsPolicy = 'mollitia';
    $request->backendService1->securitySettings->subjectAltNames = [
        'alias',
        'maiores',
    ];
    $request->backendService1->selfLink = 'reiciendis';
    $request->backendService1->serviceBindings = [
        'id',
    ];
    $request->backendService1->sessionAffinity = BackendServiceSessionAffinityEnum::CLIENT_IP_PORT_PROTO;
    $request->backendService1->subsetting = new Subsetting();
    $request->backendService1->subsetting->policy = SubsettingPolicyEnum::CONSISTENT_HASH_SUBSETTING;
    $request->backendService1->timeoutSec = 680349;
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::JSON;
    $request->backendServicePathParameter = 'recusandae';
    $request->callback = 'omnis';
    $request->fields = 'quaerat';
    $request->key = 'molestiae';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->project = 'ut';
    $request->quotaUser = 'culpa';
    $request->requestId = 'adipisci';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'laudantium';
    $request->userIp = 'eum';

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
