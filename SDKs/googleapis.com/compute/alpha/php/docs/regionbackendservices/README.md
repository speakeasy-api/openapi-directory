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
* [computeRegionBackendServicesSetSecurityPolicy](#computeregionbackendservicessetsecuritypolicy) - Sets the Google Cloud Armor security policy for the specified backend service. For more information, see Google Cloud Armor Overview
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
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::JSON;
    $request->backendService = 'reprehenderit';
    $request->callback = 'officiis';
    $request->fields = 'accusantium';
    $request->key = 'voluptates';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->project = 'occaecati';
    $request->quotaUser = 'impedit';
    $request->region = 'quam';
    $request->requestId = 'saepe';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'consectetur';
    $request->userIp = 'itaque';

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
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->backendService = 'voluptas';
    $request->callback = 'aperiam';
    $request->fields = 'numquam';
    $request->key = 'nisi';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->project = 'fugit';
    $request->quotaUser = 'recusandae';
    $request->region = 'magni';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'similique';
    $request->userIp = 'dolor';

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
    $request->resourceGroupReference->group = 'autem';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::MEDIA;
    $request->backendService = 'quis';
    $request->callback = 'reprehenderit';
    $request->fields = 'vero';
    $request->key = 'unde';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'rem';
    $request->region = 'earum';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'hic';
    $request->userIp = 'ipsa';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veritatis';
    $request->fields = 'occaecati';
    $request->key = 'rem';
    $request->oauthToken = 'ex';
    $request->optionsRequestedPolicyVersion = 676639;
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'natus';
    $request->region = 'excepturi';
    $request->resource = 'at';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'animi';
    $request->userIp = 'veritatis';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionBackendServicesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->backendService = new BackendService();
    $request->backendService->affinityCookieTtlSec = 192236;
    $request->backendService->backends = [
        new Backend(),
    ];
    $request->backendService->cdnPolicy = new BackendServiceCdnPolicy();
    $request->backendService->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendServiceCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy = new CacheKeyPolicy();
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeHost = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'provident',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'ut',
        'ullam',
        'rem',
        'ipsum',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'eveniet',
        'atque',
    ];
    $request->backendService->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'qui',
        'officia',
        'fugiat',
        'laboriosam',
    ];
    $request->backendService->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::INVALID_CACHE_MODE;
    $request->backendService->cdnPolicy->clientTtl = 688386;
    $request->backendService->cdnPolicy->defaultTtl = 77166;
    $request->backendService->cdnPolicy->maxTtl = 15557;
    $request->backendService->cdnPolicy->negativeCaching = false;
    $request->backendService->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService->cdnPolicy->requestCoalescing = false;
    $request->backendService->cdnPolicy->serveWhileStale = 144712;
    $request->backendService->cdnPolicy->signedUrlCacheMaxAgeSec = 'nostrum';
    $request->backendService->cdnPolicy->signedUrlKeyNames = [
        'reiciendis',
        'repellendus',
    ];
    $request->backendService->circuitBreakers = new CircuitBreakers();
    $request->backendService->circuitBreakers->connectTimeout = new Duration();
    $request->backendService->circuitBreakers->connectTimeout->nanos = 765623;
    $request->backendService->circuitBreakers->connectTimeout->seconds = 'aliquam';
    $request->backendService->circuitBreakers->maxConnections = 547454;
    $request->backendService->circuitBreakers->maxPendingRequests = 57871;
    $request->backendService->circuitBreakers->maxRequests = 825596;
    $request->backendService->circuitBreakers->maxRequestsPerConnection = 378735;
    $request->backendService->circuitBreakers->maxRetries = 900333;
    $request->backendService->compressionMode = BackendServiceCompressionModeEnum::AUTOMATIC;
    $request->backendService->connectionDraining = new ConnectionDraining();
    $request->backendService->connectionDraining->drainingTimeoutSec = 216675;
    $request->backendService->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::ALWAYS_PERSIST;
    $request->backendService->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService->connectionTrackingPolicy->idleTimeoutSec = 519677;
    $request->backendService->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::PER_CONNECTION;
    $request->backendService->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService->consistentHash->httpCookie->name = 'June Schinner';
    $request->backendService->consistentHash->httpCookie->path = 'quae';
    $request->backendService->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService->consistentHash->httpCookie->ttl->nanos = 502381;
    $request->backendService->consistentHash->httpCookie->ttl->seconds = 'voluptas';
    $request->backendService->consistentHash->httpHeaderName = 'molestias';
    $request->backendService->consistentHash->minimumRingSize = 'nostrum';
    $request->backendService->creationTimestamp = 'vel';
    $request->backendService->customRequestHeaders = [
        'ducimus',
        'officiis',
        'deleniti',
    ];
    $request->backendService->customResponseHeaders = [
        'eligendi',
    ];
    $request->backendService->description = 'facere';
    $request->backendService->edgeSecurityPolicy = 'doloribus';
    $request->backendService->enableCDN = false;
    $request->backendService->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService->failoverPolicy->failoverRatio = 6097.24;
    $request->backendService->fingerprint = 'assumenda';
    $request->backendService->healthChecks = [
        'a',
    ];
    $request->backendService->iap = new BackendServiceIAP();
    $request->backendService->iap->enabled = false;
    $request->backendService->iap->oauth2ClientId = 'cumque';
    $request->backendService->iap->oauth2ClientInfo = new BackendServiceIAPOAuth2ClientInfo();
    $request->backendService->iap->oauth2ClientInfo->applicationName = 'fugit';
    $request->backendService->iap->oauth2ClientInfo->clientName = 'deleniti';
    $request->backendService->iap->oauth2ClientInfo->developerEmailAddress = 'magni';
    $request->backendService->iap->oauth2ClientSecret = 'quod';
    $request->backendService->iap->oauth2ClientSecretSha256 = 'aliquid';
    $request->backendService->id = 'ea';
    $request->backendService->ipAddressSelectionPolicy = BackendServiceIpAddressSelectionPolicyEnum::IPV6_ONLY;
    $request->backendService->kind = 'est';
    $request->backendService->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::INVALID_LOAD_BALANCING_SCHEME;
    $request->backendService->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::ROUND_ROBIN;
    $request->backendService->logConfig = new BackendServiceLogConfig();
    $request->backendService->logConfig->enable = false;
    $request->backendService->logConfig->optional = BackendServiceLogConfigOptionalEnum::CUSTOM;
    $request->backendService->logConfig->optionalFields = [
        'quis',
        'nostrum',
        'totam',
        'provident',
    ];
    $request->backendService->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::INCLUDE_ALL_OPTIONAL;
    $request->backendService->logConfig->sampleRate = 8826.89;
    $request->backendService->maxStreamDuration = new Duration();
    $request->backendService->maxStreamDuration->nanos = 666805;
    $request->backendService->maxStreamDuration->seconds = 'veniam';
    $request->backendService->metadatas = [
        'dolores' => 'vel',
        'eius' => 'voluptates',
        'modi' => 'beatae',
        'necessitatibus' => 'ratione',
    ];
    $request->backendService->name = 'Blake Lowe';
    $request->backendService->network = 'consequuntur';
    $request->backendService->outlierDetection = new OutlierDetection();
    $request->backendService->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService->outlierDetection->baseEjectionTime->nanos = 161702;
    $request->backendService->outlierDetection->baseEjectionTime->seconds = 'officiis';
    $request->backendService->outlierDetection->consecutiveErrors = 331099;
    $request->backendService->outlierDetection->consecutiveGatewayFailure = 68400;
    $request->backendService->outlierDetection->enforcingConsecutiveErrors = 208112;
    $request->backendService->outlierDetection->enforcingConsecutiveGatewayFailure = 991472;
    $request->backendService->outlierDetection->enforcingSuccessRate = 417665;
    $request->backendService->outlierDetection->interval = new Duration();
    $request->backendService->outlierDetection->interval->nanos = 862590;
    $request->backendService->outlierDetection->interval->seconds = 'excepturi';
    $request->backendService->outlierDetection->maxEjectionPercent = 868258;
    $request->backendService->outlierDetection->successRateMinimumHosts = 168024;
    $request->backendService->outlierDetection->successRateRequestVolume = 628713;
    $request->backendService->outlierDetection->successRateStdevFactor = 818816;
    $request->backendService->port = 224855;
    $request->backendService->portName = 'molestiae';
    $request->backendService->protocol = BackendServiceProtocolEnum::UDP;
    $request->backendService->region = 'dolorem';
    $request->backendService->securityPolicy = 'eaque';
    $request->backendService->securitySettings = new SecuritySettings();
    $request->backendService->securitySettings->authentication = 'error';
    $request->backendService->securitySettings->authenticationPolicy = new AuthenticationPolicy();
    $request->backendService->securitySettings->authenticationPolicy->origins = [
        new OriginAuthenticationMethod(),
        new OriginAuthenticationMethod(),
        new OriginAuthenticationMethod(),
    ];
    $request->backendService->securitySettings->authenticationPolicy->peers = [
        new PeerAuthenticationMethod(),
    ];
    $request->backendService->securitySettings->authenticationPolicy->principalBinding = AuthenticationPolicyPrincipalBindingEnum::USE_ORIGIN;
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext = new TlsContext();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext = new TlsCertificateContext();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths = new TlsCertificatePaths();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths->certificatePath = 'esse';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths->privateKeyPath = 'nobis';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificateSource = TlsCertificateContextCertificateSourceEnum::INVALID;
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig = new SdsConfig();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::FROM_PLUGIN;
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Lester Leuschke';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'sed';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'veritatis';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'commodi';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::CERTIFICATES;
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->targetUri = 'eveniet';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext = new TlsValidationContext();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->certificatePath = 'autem';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig = new SdsConfig();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::GCE_VM;
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Kyle Ledner';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'quae';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'quis';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'dolore';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::CERTIFICATES;
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->targetUri = 'porro';
    $request->backendService->securitySettings->authenticationPolicy->serverTlsContext->validationContext->validationSource = TlsValidationContextValidationSourceEnum::INVALID;
    $request->backendService->securitySettings->authorizationConfig = new AuthorizationConfig();
    $request->backendService->securitySettings->authorizationConfig->policies = [
        new RbacPolicy(),
        new RbacPolicy(),
        new RbacPolicy(),
    ];
    $request->backendService->securitySettings->awsV4Authentication = new Awsv4Signature();
    $request->backendService->securitySettings->awsV4Authentication->accessKey = 'adipisci';
    $request->backendService->securitySettings->awsV4Authentication->accessKeyId = 'sit';
    $request->backendService->securitySettings->awsV4Authentication->accessKeyVersion = 'labore';
    $request->backendService->securitySettings->awsV4Authentication->originRegion = 'excepturi';
    $request->backendService->securitySettings->clientTlsPolicy = 'quisquam';
    $request->backendService->securitySettings->clientTlsSettings = new ClientTlsSettings();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext = new TlsContext();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext = new TlsCertificateContext();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths = new TlsCertificatePaths();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths->certificatePath = 'ipsum';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths->privateKeyPath = 'quod';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificateSource = TlsCertificateContextCertificateSourceEnum::USE_SDS;
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig = new SdsConfig();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::GCE_VM;
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Paul Champlin';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'necessitatibus';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'dignissimos';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'libero';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::CERTIFICATES;
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->targetUri = 'illo';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext = new TlsValidationContext();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->certificatePath = 'facilis';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig = new SdsConfig();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::INVALID;
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Eduardo Abshire';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'nihil';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'ut';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'velit';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::INVALID;
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->targetUri = 'nulla';
    $request->backendService->securitySettings->clientTlsSettings->clientTlsContext->validationContext->validationSource = TlsValidationContextValidationSourceEnum::USE_PATH;
    $request->backendService->securitySettings->clientTlsSettings->mode = ClientTlsSettingsModeEnum::SIMPLE;
    $request->backendService->securitySettings->clientTlsSettings->sni = 'magni';
    $request->backendService->securitySettings->clientTlsSettings->subjectAltNames = [
        'sunt',
        'voluptatem',
        'saepe',
    ];
    $request->backendService->securitySettings->subjectAltNames = [
        'placeat',
        'odit',
    ];
    $request->backendService->selfLink = 'natus';
    $request->backendService->selfLinkWithId = 'quam';
    $request->backendService->serviceBindings = [
        'saepe',
        'quo',
        'eos',
    ];
    $request->backendService->serviceLbPolicy = 'enim';
    $request->backendService->sessionAffinity = BackendServiceSessionAffinityEnum::CLIENT_IP_PROTO;
    $request->backendService->subsetting = new Subsetting();
    $request->backendService->subsetting->policy = SubsettingPolicyEnum::NONE;
    $request->backendService->subsetting->subsetSize = 331724;
    $request->backendService->timeoutSec = 736846;
    $request->backendService->vpcNetworkScope = BackendServiceVpcNetworkScopeEnum::GLOBAL_VPC_NETWORK;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'iure';
    $request->key = 'doloribus';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->project = 'placeat';
    $request->quotaUser = 'numquam';
    $request->region = 'dignissimos';
    $request->requestId = 'natus';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'nisi';
    $request->userIp = 'optio';

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
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'soluta';
    $request->filter = 'impedit';
    $request->key = 'ullam';
    $request->maxResults = 459007;
    $request->oauthToken = 'sapiente';
    $request->orderBy = 'ratione';
    $request->pageToken = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'perspiciatis';
    $request->quotaUser = 'eos';
    $request->region = 'quos';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'est';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'laboriosam';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionBackendServicesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->backendService1 = new BackendService();
    $request->backendService1->affinityCookieTtlSec = 52016;
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
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy = new CacheKeyPolicy();
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeHost = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'illum',
        'eum',
        'iusto',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'ea',
        'sequi',
        'voluptates',
        'tempora',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'officia',
        'exercitationem',
        'laboriosam',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'aliquam',
        'vel',
        'numquam',
    ];
    $request->backendService1->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::FORCE_CACHE_ALL;
    $request->backendService1->cdnPolicy->clientTtl = 485731;
    $request->backendService1->cdnPolicy->defaultTtl = 605544;
    $request->backendService1->cdnPolicy->maxTtl = 775537;
    $request->backendService1->cdnPolicy->negativeCaching = false;
    $request->backendService1->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService1->cdnPolicy->requestCoalescing = false;
    $request->backendService1->cdnPolicy->serveWhileStale = 805326;
    $request->backendService1->cdnPolicy->signedUrlCacheMaxAgeSec = 'suscipit';
    $request->backendService1->cdnPolicy->signedUrlKeyNames = [
        'eaque',
        'officiis',
        'corporis',
        'eaque',
    ];
    $request->backendService1->circuitBreakers = new CircuitBreakers();
    $request->backendService1->circuitBreakers->connectTimeout = new Duration();
    $request->backendService1->circuitBreakers->connectTimeout->nanos = 222984;
    $request->backendService1->circuitBreakers->connectTimeout->seconds = 'maiores';
    $request->backendService1->circuitBreakers->maxConnections = 340416;
    $request->backendService1->circuitBreakers->maxPendingRequests = 426461;
    $request->backendService1->circuitBreakers->maxRequests = 507356;
    $request->backendService1->circuitBreakers->maxRequestsPerConnection = 192982;
    $request->backendService1->circuitBreakers->maxRetries = 73133;
    $request->backendService1->compressionMode = BackendServiceCompressionModeEnum::DISABLED;
    $request->backendService1->connectionDraining = new ConnectionDraining();
    $request->backendService1->connectionDraining->drainingTimeoutSec = 91839;
    $request->backendService1->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService1->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::NEVER_PERSIST;
    $request->backendService1->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService1->connectionTrackingPolicy->idleTimeoutSec = 562197;
    $request->backendService1->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::PER_SESSION;
    $request->backendService1->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService1->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService1->consistentHash->httpCookie->name = 'Jordan Konopelski';
    $request->backendService1->consistentHash->httpCookie->path = 'totam';
    $request->backendService1->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService1->consistentHash->httpCookie->ttl->nanos = 927771;
    $request->backendService1->consistentHash->httpCookie->ttl->seconds = 'atque';
    $request->backendService1->consistentHash->httpHeaderName = 'deserunt';
    $request->backendService1->consistentHash->minimumRingSize = 'a';
    $request->backendService1->creationTimestamp = 'culpa';
    $request->backendService1->customRequestHeaders = [
        'quod',
        'excepturi',
        'laudantium',
    ];
    $request->backendService1->customResponseHeaders = [
        'necessitatibus',
        'consequuntur',
    ];
    $request->backendService1->description = 'aliquam';
    $request->backendService1->edgeSecurityPolicy = 'dicta';
    $request->backendService1->enableCDN = false;
    $request->backendService1->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService1->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService1->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService1->failoverPolicy->failoverRatio = 9361.02;
    $request->backendService1->fingerprint = 'magnam';
    $request->backendService1->healthChecks = [
        'quidem',
    ];
    $request->backendService1->iap = new BackendServiceIAP();
    $request->backendService1->iap->enabled = false;
    $request->backendService1->iap->oauth2ClientId = 'consequuntur';
    $request->backendService1->iap->oauth2ClientInfo = new BackendServiceIAPOAuth2ClientInfo();
    $request->backendService1->iap->oauth2ClientInfo->applicationName = 'ratione';
    $request->backendService1->iap->oauth2ClientInfo->clientName = 'ut';
    $request->backendService1->iap->oauth2ClientInfo->developerEmailAddress = 'explicabo';
    $request->backendService1->iap->oauth2ClientSecret = 'dolore';
    $request->backendService1->iap->oauth2ClientSecretSha256 = 'inventore';
    $request->backendService1->id = 'molestiae';
    $request->backendService1->ipAddressSelectionPolicy = BackendServiceIpAddressSelectionPolicyEnum::PREFER_IPV6;
    $request->backendService1->kind = 'vitae';
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
    $request->backendService1->logConfig->optional = BackendServiceLogConfigOptionalEnum::UNSPECIFIED_OPTIONAL_MODE;
    $request->backendService1->logConfig->optionalFields = [
        'explicabo',
        'similique',
    ];
    $request->backendService1->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::INCLUDE_ALL_OPTIONAL;
    $request->backendService1->logConfig->sampleRate = 5862.6;
    $request->backendService1->maxStreamDuration = new Duration();
    $request->backendService1->maxStreamDuration->nanos = 633887;
    $request->backendService1->maxStreamDuration->seconds = 'recusandae';
    $request->backendService1->metadatas = [
        'fuga' => 'necessitatibus',
        'molestias' => 'animi',
    ];
    $request->backendService1->name = 'Francis Ondricka';
    $request->backendService1->network = 'dolore';
    $request->backendService1->outlierDetection = new OutlierDetection();
    $request->backendService1->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService1->outlierDetection->baseEjectionTime->nanos = 572426;
    $request->backendService1->outlierDetection->baseEjectionTime->seconds = 'quia';
    $request->backendService1->outlierDetection->consecutiveErrors = 807291;
    $request->backendService1->outlierDetection->consecutiveGatewayFailure = 347580;
    $request->backendService1->outlierDetection->enforcingConsecutiveErrors = 900058;
    $request->backendService1->outlierDetection->enforcingConsecutiveGatewayFailure = 538225;
    $request->backendService1->outlierDetection->enforcingSuccessRate = 696477;
    $request->backendService1->outlierDetection->interval = new Duration();
    $request->backendService1->outlierDetection->interval->nanos = 648667;
    $request->backendService1->outlierDetection->interval->seconds = 'corporis';
    $request->backendService1->outlierDetection->maxEjectionPercent = 834064;
    $request->backendService1->outlierDetection->successRateMinimumHosts = 279978;
    $request->backendService1->outlierDetection->successRateRequestVolume = 672065;
    $request->backendService1->outlierDetection->successRateStdevFactor = 637186;
    $request->backendService1->port = 298911;
    $request->backendService1->portName = 'similique';
    $request->backendService1->protocol = BackendServiceProtocolEnum::HTTP;
    $request->backendService1->region = 'sit';
    $request->backendService1->securityPolicy = 'quas';
    $request->backendService1->securitySettings = new SecuritySettings();
    $request->backendService1->securitySettings->authentication = 'soluta';
    $request->backendService1->securitySettings->authenticationPolicy = new AuthenticationPolicy();
    $request->backendService1->securitySettings->authenticationPolicy->origins = [
        new OriginAuthenticationMethod(),
        new OriginAuthenticationMethod(),
        new OriginAuthenticationMethod(),
        new OriginAuthenticationMethod(),
    ];
    $request->backendService1->securitySettings->authenticationPolicy->peers = [
        new PeerAuthenticationMethod(),
    ];
    $request->backendService1->securitySettings->authenticationPolicy->principalBinding = AuthenticationPolicyPrincipalBindingEnum::USE_ORIGIN;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext = new TlsContext();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext = new TlsCertificateContext();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths = new TlsCertificatePaths();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths->certificatePath = 'eaque';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths->privateKeyPath = 'optio';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificateSource = TlsCertificateContextCertificateSourceEnum::INVALID;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig = new SdsConfig();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::GCE_VM;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Doug Ledner';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'iure';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'beatae';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'quidem';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::INVALID;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->targetUri = 'repellendus';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext = new TlsValidationContext();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->certificatePath = 'mollitia';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig = new SdsConfig();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::GCE_VM;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Amy Rippin';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'perspiciatis';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'beatae';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'labore';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::CERTIFICATES;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->targetUri = 'omnis';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->validationSource = TlsValidationContextValidationSourceEnum::USE_PATH;
    $request->backendService1->securitySettings->authorizationConfig = new AuthorizationConfig();
    $request->backendService1->securitySettings->authorizationConfig->policies = [
        new RbacPolicy(),
        new RbacPolicy(),
        new RbacPolicy(),
        new RbacPolicy(),
    ];
    $request->backendService1->securitySettings->awsV4Authentication = new Awsv4Signature();
    $request->backendService1->securitySettings->awsV4Authentication->accessKey = 'suscipit';
    $request->backendService1->securitySettings->awsV4Authentication->accessKeyId = 'unde';
    $request->backendService1->securitySettings->awsV4Authentication->accessKeyVersion = 'cumque';
    $request->backendService1->securitySettings->awsV4Authentication->originRegion = 'perferendis';
    $request->backendService1->securitySettings->clientTlsPolicy = 'deleniti';
    $request->backendService1->securitySettings->clientTlsSettings = new ClientTlsSettings();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext = new TlsContext();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext = new TlsCertificateContext();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths = new TlsCertificatePaths();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths->certificatePath = 'totam';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths->privateKeyPath = 'fugiat';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificateSource = TlsCertificateContextCertificateSourceEnum::INVALID;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig = new SdsConfig();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::FROM_PLUGIN;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Garry Reinger IV';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'accusantium';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'ut';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'repellat';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::CERTIFICATES;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->targetUri = 'dolores';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext = new TlsValidationContext();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->certificatePath = 'ratione';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig = new SdsConfig();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::INVALID;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Anita Fisher';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'quis';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'delectus';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'ratione';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::GCE_VM;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->targetUri = 'nihil';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->validationSource = TlsValidationContextValidationSourceEnum::USE_SDS;
    $request->backendService1->securitySettings->clientTlsSettings->mode = ClientTlsSettingsModeEnum::SIMPLE;
    $request->backendService1->securitySettings->clientTlsSettings->sni = 'voluptas';
    $request->backendService1->securitySettings->clientTlsSettings->subjectAltNames = [
        'excepturi',
        'nam',
        'ducimus',
        'officiis',
    ];
    $request->backendService1->securitySettings->subjectAltNames = [
        'velit',
        'nam',
        'suscipit',
    ];
    $request->backendService1->selfLink = 'id';
    $request->backendService1->selfLinkWithId = 'sequi';
    $request->backendService1->serviceBindings = [
        'minima',
        'fugit',
        'amet',
        'quasi',
    ];
    $request->backendService1->serviceLbPolicy = 'doloremque';
    $request->backendService1->sessionAffinity = BackendServiceSessionAffinityEnum::CLIENT_IP_PORT_PROTO;
    $request->backendService1->subsetting = new Subsetting();
    $request->backendService1->subsetting->policy = SubsettingPolicyEnum::NONE;
    $request->backendService1->subsetting->subsetSize = 481828;
    $request->backendService1->timeoutSec = 773755;
    $request->backendService1->vpcNetworkScope = BackendServiceVpcNetworkScopeEnum::GLOBAL_VPC_NETWORK;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::PROTO;
    $request->backendServicePathParameter = 'deserunt';
    $request->callback = 'distinctio';
    $request->fields = 'alias';
    $request->key = 'voluptates';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->project = 'libero';
    $request->quotaUser = 'voluptatum';
    $request->region = 'beatae';
    $request->requestId = 'explicabo';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'ea';

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
    $request->regionSetPolicyRequest->etag = 'atque';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'magnam';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 530856;
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloremque';
    $request->fields = 'voluptatum';
    $request->key = 'veniam';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'exercitationem';
    $request->region = 'nam';
    $request->resource = 'quisquam';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'dolorem';

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

## computeRegionBackendServicesSetSecurityPolicy

Sets the Google Cloud Armor security policy for the specified backend service. For more information, see Google Cloud Armor Overview

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesSetSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesSetSecurityPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesSetSecurityPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesSetSecurityPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionBackendServicesSetSecurityPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->securityPolicyReference = new SecurityPolicyReference();
    $request->securityPolicyReference->securityPolicy = 'sed';
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::JSON;
    $request->backendService = 'nesciunt';
    $request->callback = 'tempora';
    $request->fields = 'nesciunt';
    $request->key = 'asperiores';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'doloremque';
    $request->quotaUser = 'similique';
    $request->region = 'modi';
    $request->requestId = 'itaque';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'autem';
    $request->userIp = 'earum';

    $requestSecurity = new ComputeRegionBackendServicesSetSecurityPolicySecurity();
    $requestSecurity->option1 = new ComputeRegionBackendServicesSetSecurityPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionBackendServices->computeRegionBackendServicesSetSecurityPolicy($request, $requestSecurity);

    if ($response->operation !== null) {
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'nihil',
        'exercitationem',
    ];
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugiat';
    $request->fields = 'ab';
    $request->key = 'voluptate';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'qui';
    $request->region = 'natus';
    $request->resource = 'eius';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'totam';
    $request->userIp = 'ab';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionBackendServicesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionBackendServicesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->backendService1 = new BackendService();
    $request->backendService1->affinityCookieTtlSec = 982315;
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
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy = new CacheKeyPolicy();
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeHost = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'cupiditate',
        'facilis',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeNamedCookies = [
        'facilis',
        'quia',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeProtocol = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->includeQueryString = false;
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringBlacklist = [
        'sunt',
        'veniam',
        'dolorem',
        'corporis',
    ];
    $request->backendService1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'quidem',
        'corrupti',
        'ipsam',
    ];
    $request->backendService1->cdnPolicy->cacheMode = BackendServiceCdnPolicyCacheModeEnum::FORCE_CACHE_ALL;
    $request->backendService1->cdnPolicy->clientTtl = 828577;
    $request->backendService1->cdnPolicy->defaultTtl = 44174;
    $request->backendService1->cdnPolicy->maxTtl = 89757;
    $request->backendService1->cdnPolicy->negativeCaching = false;
    $request->backendService1->cdnPolicy->negativeCachingPolicy = [
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
        new BackendServiceCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendService1->cdnPolicy->requestCoalescing = false;
    $request->backendService1->cdnPolicy->serveWhileStale = 694334;
    $request->backendService1->cdnPolicy->signedUrlCacheMaxAgeSec = 'aliquid';
    $request->backendService1->cdnPolicy->signedUrlKeyNames = [
        'eligendi',
    ];
    $request->backendService1->circuitBreakers = new CircuitBreakers();
    $request->backendService1->circuitBreakers->connectTimeout = new Duration();
    $request->backendService1->circuitBreakers->connectTimeout->nanos = 550576;
    $request->backendService1->circuitBreakers->connectTimeout->seconds = 'cum';
    $request->backendService1->circuitBreakers->maxConnections = 506183;
    $request->backendService1->circuitBreakers->maxPendingRequests = 221408;
    $request->backendService1->circuitBreakers->maxRequests = 677871;
    $request->backendService1->circuitBreakers->maxRequestsPerConnection = 227674;
    $request->backendService1->circuitBreakers->maxRetries = 561449;
    $request->backendService1->compressionMode = BackendServiceCompressionModeEnum::DISABLED;
    $request->backendService1->connectionDraining = new ConnectionDraining();
    $request->backendService1->connectionDraining->drainingTimeoutSec = 542203;
    $request->backendService1->connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy();
    $request->backendService1->connectionTrackingPolicy->connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum::DEFAULT_FOR_PROTOCOL;
    $request->backendService1->connectionTrackingPolicy->enableStrongAffinity = false;
    $request->backendService1->connectionTrackingPolicy->idleTimeoutSec = 511535;
    $request->backendService1->connectionTrackingPolicy->trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum::PER_CONNECTION;
    $request->backendService1->consistentHash = new ConsistentHashLoadBalancerSettings();
    $request->backendService1->consistentHash->httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie();
    $request->backendService1->consistentHash->httpCookie->name = 'Justin Glover';
    $request->backendService1->consistentHash->httpCookie->path = 'voluptatem';
    $request->backendService1->consistentHash->httpCookie->ttl = new Duration();
    $request->backendService1->consistentHash->httpCookie->ttl->nanos = 12608;
    $request->backendService1->consistentHash->httpCookie->ttl->seconds = 'optio';
    $request->backendService1->consistentHash->httpHeaderName = 'aspernatur';
    $request->backendService1->consistentHash->minimumRingSize = 'maxime';
    $request->backendService1->creationTimestamp = 'deserunt';
    $request->backendService1->customRequestHeaders = [
        'nam',
        'et',
        'similique',
        'saepe',
    ];
    $request->backendService1->customResponseHeaders = [
        'repudiandae',
    ];
    $request->backendService1->description = 'impedit';
    $request->backendService1->edgeSecurityPolicy = 'repellat';
    $request->backendService1->enableCDN = false;
    $request->backendService1->failoverPolicy = new BackendServiceFailoverPolicy();
    $request->backendService1->failoverPolicy->disableConnectionDrainOnFailover = false;
    $request->backendService1->failoverPolicy->dropTrafficIfUnhealthy = false;
    $request->backendService1->failoverPolicy->failoverRatio = 5162.33;
    $request->backendService1->fingerprint = 'quo';
    $request->backendService1->healthChecks = [
        'eius',
    ];
    $request->backendService1->iap = new BackendServiceIAP();
    $request->backendService1->iap->enabled = false;
    $request->backendService1->iap->oauth2ClientId = 'cupiditate';
    $request->backendService1->iap->oauth2ClientInfo = new BackendServiceIAPOAuth2ClientInfo();
    $request->backendService1->iap->oauth2ClientInfo->applicationName = 'modi';
    $request->backendService1->iap->oauth2ClientInfo->clientName = 'commodi';
    $request->backendService1->iap->oauth2ClientInfo->developerEmailAddress = 'harum';
    $request->backendService1->iap->oauth2ClientSecret = 'quidem';
    $request->backendService1->iap->oauth2ClientSecretSha256 = 'dolorum';
    $request->backendService1->id = 'ducimus';
    $request->backendService1->ipAddressSelectionPolicy = BackendServiceIpAddressSelectionPolicyEnum::IP_ADDRESS_SELECTION_POLICY_UNSPECIFIED;
    $request->backendService1->kind = 'accusantium';
    $request->backendService1->loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum::INTERNAL;
    $request->backendService1->localityLbPolicies = [
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
        new BackendServiceLocalityLoadBalancingPolicyConfig(),
    ];
    $request->backendService1->localityLbPolicy = BackendServiceLocalityLbPolicyEnum::RANDOM;
    $request->backendService1->logConfig = new BackendServiceLogConfig();
    $request->backendService1->logConfig->enable = false;
    $request->backendService1->logConfig->optional = BackendServiceLogConfigOptionalEnum::INCLUDE_ALL_OPTIONAL;
    $request->backendService1->logConfig->optionalFields = [
        'deserunt',
        'perspiciatis',
    ];
    $request->backendService1->logConfig->optionalMode = BackendServiceLogConfigOptionalModeEnum::UNSPECIFIED_OPTIONAL_MODE;
    $request->backendService1->logConfig->sampleRate = 7724.02;
    $request->backendService1->maxStreamDuration = new Duration();
    $request->backendService1->maxStreamDuration->nanos = 333112;
    $request->backendService1->maxStreamDuration->seconds = 'rerum';
    $request->backendService1->metadatas = [
        'eum' => 'praesentium',
    ];
    $request->backendService1->name = 'Simon Rutherford';
    $request->backendService1->network = 'vel';
    $request->backendService1->outlierDetection = new OutlierDetection();
    $request->backendService1->outlierDetection->baseEjectionTime = new Duration();
    $request->backendService1->outlierDetection->baseEjectionTime->nanos = 221298;
    $request->backendService1->outlierDetection->baseEjectionTime->seconds = 'magni';
    $request->backendService1->outlierDetection->consecutiveErrors = 484987;
    $request->backendService1->outlierDetection->consecutiveGatewayFailure = 169079;
    $request->backendService1->outlierDetection->enforcingConsecutiveErrors = 494136;
    $request->backendService1->outlierDetection->enforcingConsecutiveGatewayFailure = 436752;
    $request->backendService1->outlierDetection->enforcingSuccessRate = 23472;
    $request->backendService1->outlierDetection->interval = new Duration();
    $request->backendService1->outlierDetection->interval->nanos = 897352;
    $request->backendService1->outlierDetection->interval->seconds = 'occaecati';
    $request->backendService1->outlierDetection->maxEjectionPercent = 425090;
    $request->backendService1->outlierDetection->successRateMinimumHosts = 417741;
    $request->backendService1->outlierDetection->successRateRequestVolume = 934848;
    $request->backendService1->outlierDetection->successRateStdevFactor = 576380;
    $request->backendService1->port = 468482;
    $request->backendService1->portName = 'voluptates';
    $request->backendService1->protocol = BackendServiceProtocolEnum::ALL;
    $request->backendService1->region = 'veniam';
    $request->backendService1->securityPolicy = 'eius';
    $request->backendService1->securitySettings = new SecuritySettings();
    $request->backendService1->securitySettings->authentication = 'beatae';
    $request->backendService1->securitySettings->authenticationPolicy = new AuthenticationPolicy();
    $request->backendService1->securitySettings->authenticationPolicy->origins = [
        new OriginAuthenticationMethod(),
    ];
    $request->backendService1->securitySettings->authenticationPolicy->peers = [
        new PeerAuthenticationMethod(),
    ];
    $request->backendService1->securitySettings->authenticationPolicy->principalBinding = AuthenticationPolicyPrincipalBindingEnum::INVALID;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext = new TlsContext();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext = new TlsCertificateContext();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths = new TlsCertificatePaths();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths->certificatePath = 'aliquam';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificatePaths->privateKeyPath = 'esse';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->certificateSource = TlsCertificateContextCertificateSourceEnum::USE_SDS;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig = new SdsConfig();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::GCE_VM;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Emmett Ziemann';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'cupiditate';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'ab';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'vitae';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::CERTIFICATES;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->certificateContext->sdsConfig->grpcServiceConfig->targetUri = 'ullam';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext = new TlsValidationContext();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->certificatePath = 'asperiores';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig = new SdsConfig();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::GCE_VM;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Marshall Volkman';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'laborum';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'incidunt';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'fuga';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::INVALID;
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->sdsConfig->grpcServiceConfig->targetUri = 'ipsum';
    $request->backendService1->securitySettings->authenticationPolicy->serverTlsContext->validationContext->validationSource = TlsValidationContextValidationSourceEnum::INVALID;
    $request->backendService1->securitySettings->authorizationConfig = new AuthorizationConfig();
    $request->backendService1->securitySettings->authorizationConfig->policies = [
        new RbacPolicy(),
        new RbacPolicy(),
    ];
    $request->backendService1->securitySettings->awsV4Authentication = new Awsv4Signature();
    $request->backendService1->securitySettings->awsV4Authentication->accessKey = 'aliquid';
    $request->backendService1->securitySettings->awsV4Authentication->accessKeyId = 'ex';
    $request->backendService1->securitySettings->awsV4Authentication->accessKeyVersion = 'dolore';
    $request->backendService1->securitySettings->awsV4Authentication->originRegion = 'accusamus';
    $request->backendService1->securitySettings->clientTlsPolicy = 'deserunt';
    $request->backendService1->securitySettings->clientTlsSettings = new ClientTlsSettings();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext = new TlsContext();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext = new TlsCertificateContext();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths = new TlsCertificatePaths();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths->certificatePath = 'mollitia';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificatePaths->privateKeyPath = 'autem';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->certificateSource = TlsCertificateContextCertificateSourceEnum::USE_SDS;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig = new SdsConfig();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::INVALID;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Mrs. Faith Yundt';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'praesentium';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'quod';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'beatae';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::INVALID;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->certificateContext->sdsConfig->grpcServiceConfig->targetUri = 'velit';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext = new TlsValidationContext();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->certificatePath = 'nemo';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig = new SdsConfig();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::FROM_PLUGIN;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Lowell Schroeder';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'dolorum';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'maxime';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'minus';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::CERTIFICATES;
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->sdsConfig->grpcServiceConfig->targetUri = 'consequuntur';
    $request->backendService1->securitySettings->clientTlsSettings->clientTlsContext->validationContext->validationSource = TlsValidationContextValidationSourceEnum::INVALID;
    $request->backendService1->securitySettings->clientTlsSettings->mode = ClientTlsSettingsModeEnum::INVALID;
    $request->backendService1->securitySettings->clientTlsSettings->sni = 'atque';
    $request->backendService1->securitySettings->clientTlsSettings->subjectAltNames = [
        'numquam',
    ];
    $request->backendService1->securitySettings->subjectAltNames = [
        'porro',
        'fuga',
        'aperiam',
        'architecto',
    ];
    $request->backendService1->selfLink = 'vel';
    $request->backendService1->selfLinkWithId = 'cum';
    $request->backendService1->serviceBindings = [
        'aliquam',
        'inventore',
        'repudiandae',
        'harum',
    ];
    $request->backendService1->serviceLbPolicy = 'quae';
    $request->backendService1->sessionAffinity = BackendServiceSessionAffinityEnum::CLIENT_IP_NO_DESTINATION;
    $request->backendService1->subsetting = new Subsetting();
    $request->backendService1->subsetting->policy = SubsettingPolicyEnum::CONSISTENT_HASH_SUBSETTING;
    $request->backendService1->subsetting->subsetSize = 127394;
    $request->backendService1->timeoutSec = 852547;
    $request->backendService1->vpcNetworkScope = BackendServiceVpcNetworkScopeEnum::GLOBAL_VPC_NETWORK;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->backendServicePathParameter = 'tempora';
    $request->callback = 'similique';
    $request->fields = 'dolores';
    $request->key = 'veniam';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'iusto';
    $request->region = 'quasi';
    $request->requestId = 'fugiat';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'minima';
    $request->userIp = 'ducimus';

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
