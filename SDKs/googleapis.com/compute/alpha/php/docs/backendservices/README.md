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
    $request->signedUrlKey->keyName = 'aliquam';
    $request->signedUrlKey->keyValue = 'sapiente';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::MEDIA;
    $request->backendService = 'reprehenderit';
    $request->callback = 'ullam';
    $request->fields = 'nisi';
    $request->key = 'aut';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'quibusdam';
    $request->requestId = 'ex';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'itaque';
    $request->userIp = 'dolorum';

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
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'at';
    $request->filter = 'et';
    $request->includeAllScopes = false;
    $request->key = 'voluptate';
    $request->maxResults = 55965;
    $request->oauthToken = 'minima';
    $request->orderBy = 'veritatis';
    $request->pageToken = 'consectetur';
    $request->prettyPrint = false;
    $request->project = 'adipisci';
    $request->quotaUser = 'iste';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'accusantium';
    $request->userIp = 'rem';

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
    $request->accessToken = 'laudantium';
    $request->alt = AltEnum::MEDIA;
    $request->backendService = 'mollitia';
    $request->callback = 'ab';
    $request->fields = 'corrupti';
    $request->key = 'non';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'occaecati';
    $request->requestId = 'numquam';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'explicabo';
    $request->userIp = 'voluptas';

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
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::JSON;
    $request->backendService = 'maiores';
    $request->callback = 'natus';
    $request->fields = 'velit';
    $request->key = 'voluptatibus';
    $request->keyName = 'voluptas';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->project = 'aperiam';
    $request->quotaUser = 'ea';
    $request->requestId = 'quaerat';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellendus';
    $request->userIp = 'officia';

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
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::MEDIA;
    $request->backendService = 'asperiores';
    $request->callback = 'nemo';
    $request->fields = 'quae';
    $request->key = 'quaerat';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'quod';
    $request->quotaUser = 'labore';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'adipisci';
    $request->userIp = 'fuga';

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
    $request->resourceGroupReference->group = 'suscipit';
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->backendService = 'est';
    $request->callback = 'recusandae';
    $request->fields = 'totam';
    $request->key = 'fugiat';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->project = 'ducimus';
    $request->quotaUser = 'quos';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'labore';
    $request->userIp = 'possimus';

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
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->fields = 'corporis';
    $request->key = 'reiciendis';
    $request->oauthToken = 'assumenda';
    $request->optionsRequestedPolicyVersion = 363161;
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'aliquid';
    $request->resource = 'aperiam';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'consectetur';
    $request->userIp = 'in';

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
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceIAPOAuth2ClientInfo;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceIpAddressSelectionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLoadBalancingSchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLbPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLogConfigOptionalEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLogConfigOptionalModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutlierDetection;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecuritySettings;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\OriginAuthenticationMethod;
use \OpenAPI\OpenAPI\Models\Shared\Jwt;
use \OpenAPI\OpenAPI\Models\Shared\JwtHeader;
use \OpenAPI\OpenAPI\Models\Shared\PeerAuthenticationMethod;
use \OpenAPI\OpenAPI\Models\Shared\MutualTls;
use \OpenAPI\OpenAPI\Models\Shared\MutualTlsModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationPolicyPrincipalBindingEnum;
use \OpenAPI\OpenAPI\Models\Shared\TlsContext;
use \OpenAPI\OpenAPI\Models\Shared\TlsCertificateContext;
use \OpenAPI\OpenAPI\Models\Shared\TlsCertificatePaths;
use \OpenAPI\OpenAPI\Models\Shared\TlsCertificateContextCertificateSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SdsConfig;
use \OpenAPI\OpenAPI\Models\Shared\GrpcServiceConfig;
use \OpenAPI\OpenAPI\Models\Shared\CallCredentials;
use \OpenAPI\OpenAPI\Models\Shared\CallCredentialsCallCredentialTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetadataCredentialsFromPlugin;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCredentials;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCredentialsChannelCredentialTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContext;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContextValidationSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationConfig;
use \OpenAPI\OpenAPI\Models\Shared\RbacPolicy;
use \OpenAPI\OpenAPI\Models\Shared\Permission;
use \OpenAPI\OpenAPI\Models\Shared\PermissionConstraint;
use \OpenAPI\OpenAPI\Models\Shared\Principal;
use \OpenAPI\OpenAPI\Models\Shared\Awsv4Signature;
use \OpenAPI\OpenAPI\Models\Shared\ClientTlsSettings;
use \OpenAPI\OpenAPI\Models\Shared\ClientTlsSettingsModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceSessionAffinityEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subsetting;
use \OpenAPI\OpenAPI\Models\Shared\SubsettingPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceVpcNetworkScopeEnum;
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
    $request->backendService->affinityCookieTtlSec = 937285;
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
        'suscipit',
        'reiciendis',
        'quidem',
        'saepe',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'dolore',
        'sunt',
        'asperiores',
        'adipisci',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'amet',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'dignissimos',
    ];
    $request->backendService->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::USE_ORIGIN_HEADERS;
    $request->backendService->cdnPolicy->clientTtl = 891523;
    $request->backendService->cdnPolicy->defaultTtl = 233420;
    $request->backendService->cdnPolicy->maxTtl = 358107;
    $request->backendService->cdnPolicy->negativeCaching = false;
    $request->backendService->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService->cdnPolicy->requestCoalescing = false;
    $request->backendService->cdnPolicy->serveWhileStale = 385237;
    $request->backendService->cdnPolicy->signedUrlCacheMaxAgeSec = 'ipsa';
    $request->backendService->cdnPolicy->signedUrlKeyNames = [
        'libero',
        'vitae',
        'accusamus',
        'similique',
    ];
    $request->backendService->circuitBreakers = new CircuitBreakers();
    $request->backendService->circuitBreakers->connectTimeout = new Duration();
    $request->backendService->circuitBreakers->connectTimeout->nanos = 272437;
    $request->backendService->circuitBreakers->connectTimeout->seconds = 'aspernatur';
    $request->backendService->circuitBreakers->maxConnections = 379057;
    $request->backendService->circuitBreakers->maxPendingRequests = 374244;
    $request->backendService->circuitBreakers->maxRequests = 374296;
    $request->backendService->circuitBreakers->maxRequestsPerConnection = 324405;
    $request->backendService->circuitBreakers->maxRetries = 748789;
    $request->backendService->compressionMode = BackendServiceCompressionModeEnum::DISABLED;
    $request->backendService->connectionDraining = new ConnectionDraining();
    $request->backendService->connectionDraining->drainingTimeoutSec = 237807;
    $request->backendService->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::NEVER_PERSIST;
    $request->backendService->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService->connectionTrackingPolicy->idleTimeoutSec = 171853;
    $request->backendService->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::PER_CONNECTION;
    $request->backendService->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService->consistentHash->httpCookie->name = 'Valerie Haag';
    $request->backendService->consistentHash->httpCookie->path = 'ullam';
    $request->backendService->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService->consistentHash->httpCookie->ttl->nanos = 237742;
    $request->backendService->consistentHash->httpCookie->ttl->seconds = 'cum';
    $request->backendService->consistentHash->httpHeaderName = 'blanditiis';
    $request->backendService->consistentHash->minimumRingSize = 'quas';
    $request->backendService->creationTimestamp = 'hic';
    $request->backendService->customRequestHeaders = [
        'culpa',
    ];
    $request->backendService->customResponseHeaders = [
        'pariatur',
        'totam',
        'hic',
    ];
    $request->backendService->description = 'exercitationem';
    $request->backendService->edgeSecurityPolicy = 'nobis';
    $request->backendService->enableCDN = false;
    $request->backendService->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService->failoverPolicy->failoverRatio = 246.19;
    $request->backendService->fingerprint = 'rerum';
    $request->backendService->healthChecks = [
        'reiciendis',
    ];
    $request->backendService->iap = new BackendServiceIAP();
    $request->backendService->iap->enabled = false;
    $request->backendService->iap->oauth2ClientId = 'explicabo';
    $request->backendService->iap->oauth2ClientInfo = new BackendServiceIAPOAuth2ClientInfo();
    $request->backendService->iap->oauth2ClientInfo->applicationName = 'asperiores';
    $request->backendService->iap->oauth2ClientInfo->clientName = 'facilis';
    $request->backendService->iap->oauth2ClientInfo->developerEmailAddress = 'voluptate';
    $request->backendService->iap->oauth2ClientSecret = 'expedita';
    $request->backendService->iap->oauth2ClientSecretSha256 = 'ab';
    $request->backendService->id = 'iste';
    $request->backendService->ipAddressSelectionPolicy = BackendServiceIpAddressSelectionPolicyEnum::IPV6_ONLY;
    $request->backendService->kind = 'laborum';
    $request->backendService->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::EXTERNAL;
    $request->backendService->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::ORIGINAL_DESTINATION;
    $request->backendService->logConfig = new BackendServiceLogConfig();
    $request->backendService->logConfig->enable = false;
    $request->backendService->logConfig->optional = BackendServiceLogConfigOptionalEnum::INCLUDE_ALL_OPTIONAL;
    $request->backendService->logConfig->optionalFields = [
        'voluptas',
    ];
    $request->backendService->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::INCLUDE_ALL_OPTIONAL;
    $request->backendService->logConfig->sampleRate = 1000.32;
    $request->backendService->maxStreamDuration = new Duration();
    $request->backendService->maxStreamDuration->nanos = 382808;
    $request->backendService->maxStreamDuration->seconds = 'sapiente';
    $request->backendService->metadatas = [
        'illo' => 'reiciendis',
        'perferendis' => 'corrupti',
        'maiores' => 'incidunt',
        'sed' => 'provident',
    ];
    $request->backendService->name = 'Jana Emard';
    $request->backendService->network = 'quos';
    $request->backendService->outlierDetection = new OutlierDetection();
    $request->backendService->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService->outlierDetection->baseEjectionTime->nanos = 975752;
    $request->backendService->outlierDetection->baseEjectionTime->seconds = 'tempora';
    $request->backendService->outlierDetection->consecutiveErrors = 273009;
    $request->backendService->outlierDetection->consecutiveGatewayFailure = 455444;
    $request->backendService->outlierDetection->enforcingConsecutiveErrors = 970076;
    $request->backendService->outlierDetection->enforcingConsecutiveGatewayFailure = 401713;
    $request->backendService->outlierDetection->enforcingSuccessRate = 25497;
    $request->backendService->outlierDetection->interval = new Duration();
    $request->backendService->outlierDetection->interval->nanos = 248413;
    $request->backendService->outlierDetection->interval->seconds = 'officiis';
    $request->backendService->outlierDetection->maxEjectionPercent = 505866;
    $request->backendService->outlierDetection->successRateMinimumHosts = 708609;
    $request->backendService->outlierDetection->successRateRequestVolume = 310381;
    $request->backendService->outlierDetection->successRateStdevFactor = 277773;
    $request->backendService->port = 373035;
    $request->backendService->portName = 'debitis';
    $request->backendService->protocol = BackendServiceProtocolEnum::HTTPS;
    $request->backendService->region = 'sit';
    $request->backendService->securityPolicy = 'nobis';
    $request->backendService->securitySettings = new SecuritySettings();
    $request->backendService->securitySettings->authentication = 'error';
    $request->backendService->securitySettings->authenticationPolicy = new AuthenticationPolicy();
    $request->backendService->securitySettings->authenticationPolicy->origins = [
        new OriginAuthenticationMethod(),
        new OriginAuthenticationMethod(),
    ];
    $request->backendService->securitySettings->authenticationPolicy->peers = [
        new PeerAuthenticationMethod(),
        new PeerAuthenticationMethod(),
    ];
    $request->backendService->securitySettings->authenticationPolicy->principalBinding = AuthenticationPolicyPrincipalBindingEnum::USE_PEER;
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext = new TlsContext();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext = new TlsCertificateContext();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths = new TlsCertificatePaths();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths->certificatePath = 'reiciendis';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths->privateKeyPath = 'nulla';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificateSource = TlsCertificateContextCertificateSourceEnum::INVALID;
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig = new SdsConfig();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::FROM_PLUGIN;
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Francis Harris';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'beatae';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'laudantium';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'exercitationem';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::GCE_VM;
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->targetUri = 'cum';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext = new TlsValidationContext();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->certificatePath = 'laboriosam';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig = new SdsConfig();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::INVALID;
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Evan Welch';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'neque';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'dolorum';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'nostrum';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::GCE_VM;
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->targetUri = 'dolorum';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->validationSource = TlsValidationContextValidationSourceEnum::USE_PATH;
    $request->backendService->securitySettings->authorizationConfig = new AuthorizationConfig();
    $request->backendService->securitySettings->authorizationConfig->policies = [
        new RbacPolicy(),
        new RbacPolicy(),
        new RbacPolicy(),
        new RbacPolicy(),
    ];
    $request->backendService->securitySettings->awsV4Authentication = new Awsv4Signature();
    $request->backendService->securitySettings->awsV4Authentication->accessKey = 'tempora';
    $request->backendService->securitySettings->awsV4Authentication->accessKeyId = 'atque';
    $request->backendService->securitySettings->awsV4Authentication->accessKeyVersion = 'fugit';
    $request->backendService->securitySettings->awsV4Authentication->originRegion = 'ut';
    $request->backendService->securitySettings->clientTlsPolicy = 'fugiat';
    $request->backendService->securitySettings->clientTlsSettings = new ClientTlsSettings();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext = new TlsContext();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext = new TlsCertificateContext();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths = new TlsCertificatePaths();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths->certificatePath = 'voluptatem';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths->privateKeyPath = 'culpa';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificateSource = TlsCertificateContextCertificateSourceEnum::USE_SDS;
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig = new SdsConfig();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::FROM_PLUGIN;
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Ms. Georgia Hintz';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'repudiandae';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'corporis';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'et';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::GCE_VM;
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->targetUri = 'ex';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext = new TlsValidationContext();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->certificatePath = 'sed';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig = new SdsConfig();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::FROM_PLUGIN;
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Bernice Ullrich II';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'reiciendis';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'dolorem';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'harum';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::CERTIFICATES;
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->targetUri = 'architecto';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->validationSource = TlsValidationContextValidationSourceEnum::USE_PATH;
    $request->backendService->securitySettings->clientTlsSettings->mode = ClientTlsSettingsModeEnum::INVALID;
    $request->backendService->securitySettings->clientTlsSettings->sni = 'quidem';
    $request->backendService->securitySettings->clientTlsSettings->subjectAltNames = [
        'laborum',
        'nam',
        'tenetur',
    ];
    $request->backendService->securitySettings->subjectAltNames = [
        'alias',
        'amet',
    ];
    $request->backendService->selfLink = 'deserunt';
    $request->backendService->selfLinkWithId = 'voluptate';
    $request->backendService->serviceBindings = [
        'reiciendis',
        'provident',
        'repellendus',
    ];
    $request->backendService->serviceLbPolicy = 'delectus';
    $request->backendService->sessionAffinity = BackendServiceSessionAffinityEnum::NONE;
    $request->backendService->subsetting = new Subsetting();
    $request->backendService->subsetting->policy = SubsettingPolicyEnum::CONSISTENT_HASH_SUBSETTING;
    $request->backendService->subsetting->subsetSize = 667285;
    $request->backendService->timeoutSec = 696483;
    $request->backendService->vpcNetworkScope = BackendServiceVpcNetworkScopeEnum::GLOBAL_VPC_NETWORK;
    $request->accessToken = 'facere';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'praesentium';
    $request->fields = 'mollitia';
    $request->key = 'veniam';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'quisquam';
    $request->quotaUser = 'repudiandae';
    $request->requestId = 'quasi';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'reprehenderit';
    $request->userIp = 'asperiores';

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
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'et';
    $request->filter = 'esse';
    $request->key = 'amet';
    $request->maxResults = 826825;
    $request->oauthToken = 'ea';
    $request->orderBy = 'atque';
    $request->pageToken = 'error';
    $request->prettyPrint = false;
    $request->project = 'officiis';
    $request->quotaUser = 'officiis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'natus';
    $request->userIp = 'minima';

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
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceIAPOAuth2ClientInfo;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceIpAddressSelectionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLoadBalancingSchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLbPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLogConfigOptionalEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLogConfigOptionalModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutlierDetection;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecuritySettings;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\OriginAuthenticationMethod;
use \OpenAPI\OpenAPI\Models\Shared\Jwt;
use \OpenAPI\OpenAPI\Models\Shared\JwtHeader;
use \OpenAPI\OpenAPI\Models\Shared\PeerAuthenticationMethod;
use \OpenAPI\OpenAPI\Models\Shared\MutualTls;
use \OpenAPI\OpenAPI\Models\Shared\MutualTlsModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationPolicyPrincipalBindingEnum;
use \OpenAPI\OpenAPI\Models\Shared\TlsContext;
use \OpenAPI\OpenAPI\Models\Shared\TlsCertificateContext;
use \OpenAPI\OpenAPI\Models\Shared\TlsCertificatePaths;
use \OpenAPI\OpenAPI\Models\Shared\TlsCertificateContextCertificateSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SdsConfig;
use \OpenAPI\OpenAPI\Models\Shared\GrpcServiceConfig;
use \OpenAPI\OpenAPI\Models\Shared\CallCredentials;
use \OpenAPI\OpenAPI\Models\Shared\CallCredentialsCallCredentialTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetadataCredentialsFromPlugin;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCredentials;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCredentialsChannelCredentialTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContext;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContextValidationSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationConfig;
use \OpenAPI\OpenAPI\Models\Shared\RbacPolicy;
use \OpenAPI\OpenAPI\Models\Shared\Permission;
use \OpenAPI\OpenAPI\Models\Shared\PermissionConstraint;
use \OpenAPI\OpenAPI\Models\Shared\Principal;
use \OpenAPI\OpenAPI\Models\Shared\Awsv4Signature;
use \OpenAPI\OpenAPI\Models\Shared\ClientTlsSettings;
use \OpenAPI\OpenAPI\Models\Shared\ClientTlsSettingsModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceSessionAffinityEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subsetting;
use \OpenAPI\OpenAPI\Models\Shared\SubsettingPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceVpcNetworkScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendServicesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendServicesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->backendService1 = new BackendService();
    $request->backendService1->affinityCookieTtlSec = 404425;
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
        'error',
        'blanditiis',
        'suscipit',
        'repudiandae',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'atque',
        'sunt',
        'recusandae',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'repellendus',
        'labore',
        'reiciendis',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'repudiandae',
    ];
    $request->backendService1->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::CACHE_ALL_STATIC;
    $request->backendService1->cdnPolicy->clientTtl = 36033;
    $request->backendService1->cdnPolicy->defaultTtl = 106429;
    $request->backendService1->cdnPolicy->maxTtl = 174772;
    $request->backendService1->cdnPolicy->negativeCaching = false;
    $request->backendService1->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService1->cdnPolicy->requestCoalescing = false;
    $request->backendService1->cdnPolicy->serveWhileStale = 389135;
    $request->backendService1->cdnPolicy->signedUrlCacheMaxAgeSec = 'velit';
    $request->backendService1->cdnPolicy->signedUrlKeyNames = [
        'molestias',
        'magnam',
        'saepe',
        'consequuntur',
    ];
    $request->backendService1->circuitBreakers = new CircuitBreakers();
    $request->backendService1->circuitBreakers->connectTimeout = new Duration();
    $request->backendService1->circuitBreakers->connectTimeout->nanos = 580107;
    $request->backendService1->circuitBreakers->connectTimeout->seconds = 'officiis';
    $request->backendService1->circuitBreakers->maxConnections = 597937;
    $request->backendService1->circuitBreakers->maxPendingRequests = 446394;
    $request->backendService1->circuitBreakers->maxRequests = 238043;
    $request->backendService1->circuitBreakers->maxRequestsPerConnection = 907876;
    $request->backendService1->circuitBreakers->maxRetries = 580887;
    $request->backendService1->compressionMode = BackendServiceCompressionModeEnum::AUTOMATIC;
    $request->backendService1->connectionDraining = new ConnectionDraining();
    $request->backendService1->connectionDraining->drainingTimeoutSec = 145870;
    $request->backendService1->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService1->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::DEFAULT_FOR_PROTOCOL;
    $request->backendService1->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService1->connectionTrackingPolicy->idleTimeoutSec = 335631;
    $request->backendService1->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::PER_CONNECTION;
    $request->backendService1->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService1->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService1->consistentHash->httpCookie->name = 'Jerry Hessel';
    $request->backendService1->consistentHash->httpCookie->path = 'non';
    $request->backendService1->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService1->consistentHash->httpCookie->ttl->nanos = 878493;
    $request->backendService1->consistentHash->httpCookie->ttl->seconds = 'doloremque';
    $request->backendService1->consistentHash->httpHeaderName = 'iure';
    $request->backendService1->consistentHash->minimumRingSize = 'ipsa';
    $request->backendService1->creationTimestamp = 'totam';
    $request->backendService1->customRequestHeaders = [
        'molestiae',
    ];
    $request->backendService1->customResponseHeaders = [
        'qui',
        'cum',
        'iure',
        'necessitatibus',
    ];
    $request->backendService1->description = 'ratione';
    $request->backendService1->edgeSecurityPolicy = 'laborum';
    $request->backendService1->enableCDN = false;
    $request->backendService1->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService1->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService1->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService1->failoverPolicy->failoverRatio = 7152.08;
    $request->backendService1->fingerprint = 'voluptatum';
    $request->backendService1->healthChecks = [
        'aliquam',
        'ad',
        'repellat',
    ];
    $request->backendService1->iap = new BackendServiceIAP();
    $request->backendService1->iap->enabled = false;
    $request->backendService1->iap->oauth2ClientId = 'alias';
    $request->backendService1->iap->oauth2ClientInfo = new BackendServiceIAPOAuth2ClientInfo();
    $request->backendService1->iap->oauth2ClientInfo->applicationName = 'corporis';
    $request->backendService1->iap->oauth2ClientInfo->clientName = 'perspiciatis';
    $request->backendService1->iap->oauth2ClientInfo->developerEmailAddress = 'nihil';
    $request->backendService1->iap->oauth2ClientSecret = 'mollitia';
    $request->backendService1->iap->oauth2ClientSecretSha256 = 'voluptas';
    $request->backendService1->id = 'alias';
    $request->backendService1->ipAddressSelectionPolicy = BackendServiceIpAddressSelectionPolicyEnum::PREFER_IPV6;
    $request->backendService1->kind = 'reiciendis';
    $request->backendService1->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::EXTERNAL_MANAGED;
    $request->backendService1->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService1->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::MAGLEV;
    $request->backendService1->logConfig = new BackendServiceLogConfig();
    $request->backendService1->logConfig->enable = false;
    $request->backendService1->logConfig->optional = BackendServiceLogConfigOptionalEnum::EXCLUDE_ALL_OPTIONAL;
    $request->backendService1->logConfig->optionalFields = [
        'nesciunt',
        'quae',
        'recusandae',
    ];
    $request->backendService1->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::INCLUDE_ALL_OPTIONAL;
    $request->backendService1->logConfig->sampleRate = 3092.51;
    $request->backendService1->maxStreamDuration = new Duration();
    $request->backendService1->maxStreamDuration->nanos = 477646;
    $request->backendService1->maxStreamDuration->seconds = 'ex';
    $request->backendService1->metadatas = [
        'culpa' => 'adipisci',
        'debitis' => 'laudantium',
    ];
    $request->backendService1->name = 'Vivian Ward';
    $request->backendService1->network = 'quis';
    $request->backendService1->outlierDetection = new OutlierDetection();
    $request->backendService1->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService1->outlierDetection->baseEjectionTime->nanos = 431785;
    $request->backendService1->outlierDetection->baseEjectionTime->seconds = 'reiciendis';
    $request->backendService1->outlierDetection->consecutiveErrors = 592780;
    $request->backendService1->outlierDetection->consecutiveGatewayFailure = 133439;
    $request->backendService1->outlierDetection->enforcingConsecutiveErrors = 354506;
    $request->backendService1->outlierDetection->enforcingConsecutiveGatewayFailure = 96804;
    $request->backendService1->outlierDetection->enforcingSuccessRate = 657020;
    $request->backendService1->outlierDetection->interval = new Duration();
    $request->backendService1->outlierDetection->interval->nanos = 343392;
    $request->backendService1->outlierDetection->interval->seconds = 'mollitia';
    $request->backendService1->outlierDetection->maxEjectionPercent = 591027;
    $request->backendService1->outlierDetection->successRateMinimumHosts = 821719;
    $request->backendService1->outlierDetection->successRateRequestVolume = 659177;
    $request->backendService1->outlierDetection->successRateStdevFactor = 402767;
    $request->backendService1->port = 397257;
    $request->backendService1->portName = 'accusantium';
    $request->backendService1->protocol = BackendServiceProtocolEnum::UNSPECIFIED;
    $request->backendService1->region = 'doloribus';
    $request->backendService1->securityPolicy = 'ullam';
    $request->backendService1->securitySettings = new SecuritySettings();
    $request->backendService1->securitySettings->authentication = 'in';
    $request->backendService1->securitySettings->authenticationPolicy = new AuthenticationPolicy();
    $request->backendService1->securitySettings->authenticationPolicy->origins = [
        new OriginAuthenticationMethod(),
        new OriginAuthenticationMethod(),
        new OriginAuthenticationMethod(),
    ];
    $request->backendService1->securitySettings->authenticationPolicy->peers = [
        new PeerAuthenticationMethod(),
        new PeerAuthenticationMethod(),
        new PeerAuthenticationMethod(),
        new PeerAuthenticationMethod(),
    ];
    $request->backendService1->securitySettings->authenticationPolicy->principalBinding = AuthenticationPolicyPrincipalBindingEnum::USE_ORIGIN;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext = new TlsContext();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext = new TlsCertificateContext();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths = new TlsCertificatePaths();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths->certificatePath = 'laborum';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths->privateKeyPath = 'placeat';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificateSource = TlsCertificateContextCertificateSourceEnum::INVALID;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig = new SdsConfig();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::INVALID;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Stewart Will MD';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'tempora';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'quis';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'inventore';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::CERTIFICATES;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->targetUri = 'cumque';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext = new TlsValidationContext();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->certificatePath = 'quae';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig = new SdsConfig();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::FROM_PLUGIN;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Judy Kemmer';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'at';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'impedit';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'eos';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::INVALID;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->targetUri = 'eum';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->validationSource = TlsValidationContextValidationSourceEnum::INVALID;
    $request->backendService1->securitySettings->authorizationConfig = new AuthorizationConfig();
    $request->backendService1->securitySettings->authorizationConfig->policies = [
        new RbacPolicy(),
        new RbacPolicy(),
    ];
    $request->backendService1->securitySettings->awsV4Authentication = new Awsv4Signature();
    $request->backendService1->securitySettings->awsV4Authentication->accessKey = 'beatae';
    $request->backendService1->securitySettings->awsV4Authentication->accessKeyId = 'cupiditate';
    $request->backendService1->securitySettings->awsV4Authentication->accessKeyVersion = 'provident';
    $request->backendService1->securitySettings->awsV4Authentication->originRegion = 'earum';
    $request->backendService1->securitySettings->clientTlsPolicy = 'soluta';
    $request->backendService1->securitySettings->clientTlsSettings = new ClientTlsSettings();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext = new TlsContext();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext = new TlsCertificateContext();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths = new TlsCertificatePaths();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths->certificatePath = 'hic';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths->privateKeyPath = 'illum';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificateSource = TlsCertificateContextCertificateSourceEnum::INVALID;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig = new SdsConfig();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::INVALID;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Cary Toy';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'suscipit';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'dolorem';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'fugit';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::INVALID;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->targetUri = 'fuga';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext = new TlsValidationContext();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->certificatePath = 'ratione';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig = new SdsConfig();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::GCE_VM;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Mr. Jody Altenwerth';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'natus';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'occaecati';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'suscipit';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::CERTIFICATES;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->targetUri = 'quasi';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->validationSource = TlsValidationContextValidationSourceEnum::INVALID;
    $request->backendService1->securitySettings->clientTlsSettings->mode = ClientTlsSettingsModeEnum::SIMPLE;
    $request->backendService1->securitySettings->clientTlsSettings->sni = 'nulla';
    $request->backendService1->securitySettings->clientTlsSettings->subjectAltNames = [
        'ipsa',
        'tempora',
        'nihil',
        'molestiae',
    ];
    $request->backendService1->securitySettings->subjectAltNames = [
        'iusto',
    ];
    $request->backendService1->selfLink = 'esse';
    $request->backendService1->selfLinkWithId = 'praesentium';
    $request->backendService1->serviceBindings = [
        'reiciendis',
        'vel',
        'architecto',
        'fugiat',
    ];
    $request->backendService1->serviceLbPolicy = 'doloremque';
    $request->backendService1->sessionAffinity = BackendServiceSessionAffinityEnum::CLIENT_IP;
    $request->backendService1->subsetting = new Subsetting();
    $request->backendService1->subsetting->policy = SubsettingPolicyEnum::CONSISTENT_HASH_SUBSETTING;
    $request->backendService1->subsetting->subsetSize = 271252;
    $request->backendService1->timeoutSec = 458259;
    $request->backendService1->vpcNetworkScope = BackendServiceVpcNetworkScopeEnum::GLOBAL_VPC_NETWORK;
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::MEDIA;
    $request->backendServicePathParameter = 'ipsa';
    $request->callback = 'laborum';
    $request->fields = 'sunt';
    $request->key = 'nostrum';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'aliquid';
    $request->requestId = 'officia';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'aliquid';
    $request->userIp = 'perferendis';

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
    $request->securityPolicyReference->securityPolicy = 'voluptas';
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->backendService = 'ab';
    $request->callback = 'error';
    $request->fields = 'possimus';
    $request->key = 'voluptates';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->project = 'laborum';
    $request->quotaUser = 'libero';
    $request->requestId = 'ad';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'vitae';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'quo';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'ad';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 29950;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquid';
    $request->fields = 'beatae';
    $request->key = 'voluptatum';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->project = 'veritatis';
    $request->quotaUser = 'rerum';
    $request->resource = 'est';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'sapiente';

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
    $request->securityPolicyReference->securityPolicy = 'architecto';
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::PROTO;
    $request->backendService = 'debitis';
    $request->callback = 'voluptatem';
    $request->fields = 'alias';
    $request->key = 'deleniti';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'ex';
    $request->quotaUser = 'sapiente';
    $request->requestId = 'rem';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'nemo';
    $request->userIp = 'asperiores';

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
        'perferendis',
        'illum',
    ];
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'nam';
    $request->key = 'ipsam';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'aliquam';
    $request->resource = 'inventore';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'veritatis';
    $request->userIp = 'tempora';

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
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceIAPOAuth2ClientInfo;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceIpAddressSelectionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLoadBalancingSchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLocalityLbPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLogConfigOptionalEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceLogConfigOptionalModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutlierDetection;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecuritySettings;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\OriginAuthenticationMethod;
use \OpenAPI\OpenAPI\Models\Shared\Jwt;
use \OpenAPI\OpenAPI\Models\Shared\JwtHeader;
use \OpenAPI\OpenAPI\Models\Shared\PeerAuthenticationMethod;
use \OpenAPI\OpenAPI\Models\Shared\MutualTls;
use \OpenAPI\OpenAPI\Models\Shared\MutualTlsModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationPolicyPrincipalBindingEnum;
use \OpenAPI\OpenAPI\Models\Shared\TlsContext;
use \OpenAPI\OpenAPI\Models\Shared\TlsCertificateContext;
use \OpenAPI\OpenAPI\Models\Shared\TlsCertificatePaths;
use \OpenAPI\OpenAPI\Models\Shared\TlsCertificateContextCertificateSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SdsConfig;
use \OpenAPI\OpenAPI\Models\Shared\GrpcServiceConfig;
use \OpenAPI\OpenAPI\Models\Shared\CallCredentials;
use \OpenAPI\OpenAPI\Models\Shared\CallCredentialsCallCredentialTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetadataCredentialsFromPlugin;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCredentials;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCredentialsChannelCredentialTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContext;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContextValidationSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationConfig;
use \OpenAPI\OpenAPI\Models\Shared\RbacPolicy;
use \OpenAPI\OpenAPI\Models\Shared\Permission;
use \OpenAPI\OpenAPI\Models\Shared\PermissionConstraint;
use \OpenAPI\OpenAPI\Models\Shared\Principal;
use \OpenAPI\OpenAPI\Models\Shared\Awsv4Signature;
use \OpenAPI\OpenAPI\Models\Shared\ClientTlsSettings;
use \OpenAPI\OpenAPI\Models\Shared\ClientTlsSettingsModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceSessionAffinityEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subsetting;
use \OpenAPI\OpenAPI\Models\Shared\SubsettingPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendServiceVpcNetworkScopeEnum;
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
    $request->backendService1->affinityCookieTtlSec = 8689;
    $request->backendService1->backends = [
        new Backend(),
    ];
    $request->backendService1->cdnPolicy = new BackendServiceCdnPolicy();
    $request->backendService1->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy = new CacheKeyPolicy();
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeHost = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'fugit',
        'ab',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'quae',
        'dolor',
        'fugiat',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'consequuntur',
        'ipsa',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'eveniet',
        'impedit',
        'officiis',
    ];
    $request->backendService1->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::FORCE_CACHE_ALL;
    $request->backendService1->cdnPolicy->clientTtl = 897277;
    $request->backendService1->cdnPolicy->defaultTtl = 153369;
    $request->backendService1->cdnPolicy->maxTtl = 332191;
    $request->backendService1->cdnPolicy->negativeCaching = false;
    $request->backendService1->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService1->cdnPolicy->requestCoalescing = false;
    $request->backendService1->cdnPolicy->serveWhileStale = 712927;
    $request->backendService1->cdnPolicy->signedUrlCacheMaxAgeSec = 'eum';
    $request->backendService1->cdnPolicy->signedUrlKeyNames = [
        'voluptatum',
        'magnam',
    ];
    $request->backendService1->circuitBreakers = new CircuitBreakers();
    $request->backendService1->circuitBreakers->connectTimeout = new Duration();
    $request->backendService1->circuitBreakers->connectTimeout->nanos = 349440;
    $request->backendService1->circuitBreakers->connectTimeout->seconds = 'ab';
    $request->backendService1->circuitBreakers->maxConnections = 781480;
    $request->backendService1->circuitBreakers->maxPendingRequests = 421844;
    $request->backendService1->circuitBreakers->maxRequests = 751022;
    $request->backendService1->circuitBreakers->maxRequestsPerConnection = 388319;
    $request->backendService1->circuitBreakers->maxRetries = 927212;
    $request->backendService1->compressionMode = BackendServiceCompressionModeEnum::AUTOMATIC;
    $request->backendService1->connectionDraining = new ConnectionDraining();
    $request->backendService1->connectionDraining->drainingTimeoutSec = 28952;
    $request->backendService1->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService1->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::DEFAULT_FOR_PROTOCOL;
    $request->backendService1->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService1->connectionTrackingPolicy->idleTimeoutSec = 895692;
    $request->backendService1->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::INVALID_TRACKING_MODE;
    $request->backendService1->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService1->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService1->consistentHash->httpCookie->name = 'Teri Thiel';
    $request->backendService1->consistentHash->httpCookie->path = 'sequi';
    $request->backendService1->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService1->consistentHash->httpCookie->ttl->nanos = 987349;
    $request->backendService1->consistentHash->httpCookie->ttl->seconds = 'repudiandae';
    $request->backendService1->consistentHash->httpHeaderName = 'optio';
    $request->backendService1->consistentHash->minimumRingSize = 'occaecati';
    $request->backendService1->creationTimestamp = 'nemo';
    $request->backendService1->customRequestHeaders = [
        'blanditiis',
        'officia',
    ];
    $request->backendService1->customResponseHeaders = [
        'numquam',
        'nemo',
    ];
    $request->backendService1->description = 'quos';
    $request->backendService1->edgeSecurityPolicy = 'eius';
    $request->backendService1->enableCDN = false;
    $request->backendService1->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService1->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService1->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService1->failoverPolicy->failoverRatio = 1319.03;
    $request->backendService1->fingerprint = 'ducimus';
    $request->backendService1->healthChecks = [
        'fuga',
    ];
    $request->backendService1->iap = new BackendServiceIAP();
    $request->backendService1->iap->enabled = false;
    $request->backendService1->iap->oauth2ClientId = 'laudantium';
    $request->backendService1->iap->oauth2ClientInfo = new BackendServiceIAPOAuth2ClientInfo();
    $request->backendService1->iap->oauth2ClientInfo->applicationName = 'incidunt';
    $request->backendService1->iap->oauth2ClientInfo->clientName = 'quasi';
    $request->backendService1->iap->oauth2ClientInfo->developerEmailAddress = 'rem';
    $request->backendService1->iap->oauth2ClientSecret = 'fugiat';
    $request->backendService1->iap->oauth2ClientSecretSha256 = 'dicta';
    $request->backendService1->id = 'nisi';
    $request->backendService1->ipAddressSelectionPolicy = BackendServiceIpAddressSelectionPolicyEnum::IPV4_ONLY;
    $request->backendService1->kind = 'consectetur';
    $request->backendService1->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::EXTERNAL;
    $request->backendService1->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService1->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::WEIGHTED_MAGLEV;
    $request->backendService1->logConfig = new BackendServiceLogConfig();
    $request->backendService1->logConfig->enable = false;
    $request->backendService1->logConfig->optional = BackendServiceLogConfigOptionalEnum::INCLUDE_ALL_OPTIONAL;
    $request->backendService1->logConfig->optionalFields = [
        'omnis',
    ];
    $request->backendService1->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::CUSTOM;
    $request->backendService1->logConfig->sampleRate = 5790.11;
    $request->backendService1->maxStreamDuration = new Duration();
    $request->backendService1->maxStreamDuration->nanos = 612867;
    $request->backendService1->maxStreamDuration->seconds = 'magni';
    $request->backendService1->metadatas = [
        'fuga' => 'accusamus',
    ];
    $request->backendService1->name = 'Preston Mohr';
    $request->backendService1->network = 'praesentium';
    $request->backendService1->outlierDetection = new OutlierDetection();
    $request->backendService1->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService1->outlierDetection->baseEjectionTime->nanos = 802692;
    $request->backendService1->outlierDetection->baseEjectionTime->seconds = 'magnam';
    $request->backendService1->outlierDetection->consecutiveErrors = 836364;
    $request->backendService1->outlierDetection->consecutiveGatewayFailure = 549501;
    $request->backendService1->outlierDetection->enforcingConsecutiveErrors = 415280;
    $request->backendService1->outlierDetection->enforcingConsecutiveGatewayFailure = 930819;
    $request->backendService1->outlierDetection->enforcingSuccessRate = 415608;
    $request->backendService1->outlierDetection->interval = new Duration();
    $request->backendService1->outlierDetection->interval->nanos = 520761;
    $request->backendService1->outlierDetection->interval->seconds = 'earum';
    $request->backendService1->outlierDetection->maxEjectionPercent = 267207;
    $request->backendService1->outlierDetection->successRateMinimumHosts = 722184;
    $request->backendService1->outlierDetection->successRateRequestVolume = 877399;
    $request->backendService1->outlierDetection->successRateStdevFactor = 32901;
    $request->backendService1->port = 371919;
    $request->backendService1->portName = 'vel';
    $request->backendService1->protocol = BackendServiceProtocolEnum::ALL;
    $request->backendService1->region = 'quasi';
    $request->backendService1->securityPolicy = 'non';
    $request->backendService1->securitySettings = new SecuritySettings();
    $request->backendService1->securitySettings->authentication = 'maiores';
    $request->backendService1->securitySettings->authenticationPolicy = new AuthenticationPolicy();
    $request->backendService1->securitySettings->authenticationPolicy->origins = [
        new OriginAuthenticationMethod(),
        new OriginAuthenticationMethod(),
    ];
    $request->backendService1->securitySettings->authenticationPolicy->peers = [
        new PeerAuthenticationMethod(),
        new PeerAuthenticationMethod(),
        new PeerAuthenticationMethod(),
    ];
    $request->backendService1->securitySettings->authenticationPolicy->principalBinding = AuthenticationPolicyPrincipalBindingEnum::USE_PEER;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext = new TlsContext();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext = new TlsCertificateContext();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths = new TlsCertificatePaths();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths->certificatePath = 'deserunt';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths->privateKeyPath = 'esse';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificateSource = TlsCertificateContextCertificateSourceEnum::USE_PATH;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig = new SdsConfig();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::GCE_VM;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Alvin Marquardt';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'hic';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'necessitatibus';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'asperiores';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::GCE_VM;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->targetUri = 'voluptas';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext = new TlsValidationContext();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->certificatePath = 'debitis';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig = new SdsConfig();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::INVALID;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Alexandra Pfannerstill';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'velit';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'atque';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'ipsum';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::INVALID;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->targetUri = 'magni';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->validationSource = TlsValidationContextValidationSourceEnum::USE_SDS;
    $request->backendService1->securitySettings->authorizationConfig = new AuthorizationConfig();
    $request->backendService1->securitySettings->authorizationConfig->policies = [
        new RbacPolicy(),
        new RbacPolicy(),
        new RbacPolicy(),
        new RbacPolicy(),
    ];
    $request->backendService1->securitySettings->awsV4Authentication = new Awsv4Signature();
    $request->backendService1->securitySettings->awsV4Authentication->accessKey = 'nam';
    $request->backendService1->securitySettings->awsV4Authentication->accessKeyId = 'dolore';
    $request->backendService1->securitySettings->awsV4Authentication->accessKeyVersion = 'iusto';
    $request->backendService1->securitySettings->awsV4Authentication->originRegion = 'voluptate';
    $request->backendService1->securitySettings->clientTlsPolicy = 'sequi';
    $request->backendService1->securitySettings->clientTlsSettings = new ClientTlsSettings();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext = new TlsContext();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext = new TlsCertificateContext();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths = new TlsCertificatePaths();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths->certificatePath = 'dignissimos';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths->privateKeyPath = 'neque';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificateSource = TlsCertificateContextCertificateSourceEnum::USE_SDS;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig = new SdsConfig();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::GCE_VM;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Brad Conn';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'magnam';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'quibusdam';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'inventore';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::INVALID;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->targetUri = 'libero';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext = new TlsValidationContext();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->certificatePath = 'architecto';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig = new SdsConfig();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::INVALID;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Robyn Gutmann Jr.';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'vel';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'ea';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'beatae';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::INVALID;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->targetUri = 'excepturi';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->validationSource = TlsValidationContextValidationSourceEnum::USE_PATH;
    $request->backendService1->securitySettings->clientTlsSettings->mode = ClientTlsSettingsModeEnum::DISABLE;
    $request->backendService1->securitySettings->clientTlsSettings->sni = 'ut';
    $request->backendService1->securitySettings->clientTlsSettings->subjectAltNames = [
        'earum',
        'dicta',
        'impedit',
    ];
    $request->backendService1->securitySettings->subjectAltNames = [
        'iste',
        'itaque',
        'alias',
        'nisi',
    ];
    $request->backendService1->selfLink = 'itaque';
    $request->backendService1->selfLinkWithId = 'velit';
    $request->backendService1->serviceBindings = [
        'non',
        'dolor',
        'iusto',
    ];
    $request->backendService1->serviceLbPolicy = 'sit';
    $request->backendService1->sessionAffinity = BackendServiceSessionAffinityEnum::CLIENT_IP;
    $request->backendService1->subsetting = new Subsetting();
    $request->backendService1->subsetting->policy = SubsettingPolicyEnum::CONSISTENT_HASH_SUBSETTING;
    $request->backendService1->subsetting->subsetSize = 639705;
    $request->backendService1->timeoutSec = 927403;
    $request->backendService1->vpcNetworkScope = BackendServiceVpcNetworkScopeEnum::GLOBAL_VPC_NETWORK;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->backendServicePathParameter = 'facilis';
    $request->callback = 'placeat';
    $request->fields = 'perspiciatis';
    $request->key = 'expedita';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'voluptate';
    $request->requestId = 'ullam';
    $request->uploadType = 'unde';
    $request->uploadProtocol = 'necessitatibus';
    $request->userIp = 'animi';

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
