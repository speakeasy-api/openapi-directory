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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendServicesAddSignedUrlKeyRequest;
import org.openapis.openapi.models.operations.ComputeBackendServicesAddSignedUrlKeyResponse;
import org.openapis.openapi.models.operations.ComputeBackendServicesAddSignedUrlKeySecurity;
import org.openapis.openapi.models.operations.ComputeBackendServicesAddSignedUrlKeySecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendServicesAddSignedUrlKeySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SignedUrlKey;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendServicesAddSignedUrlKeyRequest req = new ComputeBackendServicesAddSignedUrlKeyRequest("adipisci", "non") {{
                dollarXgafv = XgafvEnum.ONE;
                signedUrlKey = new SignedUrlKey() {{
                    keyName = "beatae";
                    keyValue = "dignissimos";
                }};;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "consectetur";
                fields = "corporis";
                key = "harum";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "ipsa";
                requestId = "voluptates";
                uploadType = "libero";
                uploadProtocol = "vitae";
                userIp = "accusamus";
            }};            

            ComputeBackendServicesAddSignedUrlKeyResponse res = sdk.backendServices.computeBackendServicesAddSignedUrlKey(req, new ComputeBackendServicesAddSignedUrlKeySecurity() {{
                option1 = new ComputeBackendServicesAddSignedUrlKeySecurityOption1("similique", "tempora") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendServicesAggregatedList

Retrieves the list of all BackendService resources, regional and global, available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendServicesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeBackendServicesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeBackendServicesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeBackendServicesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendServicesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeBackendServicesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendServicesAggregatedListRequest req = new ComputeBackendServicesAggregatedListRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "nobis";
                filter = "dolorum";
                includeAllScopes = false;
                key = "adipisci";
                maxResults = 795535L;
                oauthToken = "dolores";
                orderBy = "blanditiis";
                pageToken = "in";
                prettyPrint = false;
                quotaUser = "dolore";
                returnPartialSuccess = false;
                uploadType = "aliquam";
                uploadProtocol = "officiis";
                userIp = "temporibus";
            }};            

            ComputeBackendServicesAggregatedListResponse res = sdk.backendServices.computeBackendServicesAggregatedList(req, new ComputeBackendServicesAggregatedListSecurity() {{
                option1 = new ComputeBackendServicesAggregatedListSecurityOption1("ullam", "adipisci") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.backendServiceAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendServicesDelete

Deletes the specified BackendService resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendServicesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeBackendServicesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeBackendServicesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeBackendServicesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendServicesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendServicesDeleteRequest req = new ComputeBackendServicesDeleteRequest("cum", "blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "corrupti";
                key = "pariatur";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "hic";
                requestId = "exercitationem";
                uploadType = "nobis";
                uploadProtocol = "sit";
                userIp = "rerum";
            }};            

            ComputeBackendServicesDeleteResponse res = sdk.backendServices.computeBackendServicesDelete(req, new ComputeBackendServicesDeleteSecurity() {{
                option1 = new ComputeBackendServicesDeleteSecurityOption1("sed", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendServicesDeleteSignedUrlKey

Deletes a key for validating requests with signed URLs for this backend service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendServicesDeleteSignedUrlKeyRequest;
import org.openapis.openapi.models.operations.ComputeBackendServicesDeleteSignedUrlKeyResponse;
import org.openapis.openapi.models.operations.ComputeBackendServicesDeleteSignedUrlKeySecurity;
import org.openapis.openapi.models.operations.ComputeBackendServicesDeleteSignedUrlKeySecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendServicesDeleteSignedUrlKeySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendServicesDeleteSignedUrlKeyRequest req = new ComputeBackendServicesDeleteSignedUrlKeyRequest("explicabo", "asperiores", "facilis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolore";
                key = "laborum";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "in";
                requestId = "commodi";
                uploadType = "quidem";
                uploadProtocol = "explicabo";
                userIp = "voluptas";
            }};            

            ComputeBackendServicesDeleteSignedUrlKeyResponse res = sdk.backendServices.computeBackendServicesDeleteSignedUrlKey(req, new ComputeBackendServicesDeleteSignedUrlKeySecurity() {{
                option1 = new ComputeBackendServicesDeleteSignedUrlKeySecurityOption1("unde", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendServicesGet

Returns the specified BackendService resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetRequest;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetResponse;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetSecurity;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendServicesGetRequest req = new ComputeBackendServicesGetRequest("suscipit", "sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illo";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "corrupti";
                key = "maiores";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "provident";
                uploadProtocol = "eius";
                userIp = "necessitatibus";
            }};            

            ComputeBackendServicesGetResponse res = sdk.backendServices.computeBackendServicesGet(req, new ComputeBackendServicesGetSecurity() {{
                option1 = new ComputeBackendServicesGetSecurityOption1("ipsum", "ea") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.backendService != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendServicesGetHealth

Gets the most recent health check results for this BackendService. Example request body: { "group": "/zones/us-east1-b/instanceGroups/lb-backend-example" }

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetHealthRequest;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetHealthResponse;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetHealthSecurity;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetHealthSecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetHealthSecurityOption2;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetHealthSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ResourceGroupReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendServicesGetHealthRequest req = new ComputeBackendServicesGetHealthRequest("occaecati", "quos") {{
                dollarXgafv = XgafvEnum.TWO;
                resourceGroupReference = new ResourceGroupReference() {{
                    group = "tempora";
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "ex";
                key = "sit";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "praesentium";
                uploadProtocol = "facilis";
                userIp = "quaerat";
            }};            

            ComputeBackendServicesGetHealthResponse res = sdk.backendServices.computeBackendServicesGetHealth(req, new ComputeBackendServicesGetHealthSecurity() {{
                option1 = new ComputeBackendServicesGetHealthSecurityOption1("incidunt", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.backendServiceGroupHealth != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendServicesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeBackendServicesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendServicesGetIamPolicyRequest req = new ComputeBackendServicesGetIamPolicyRequest("debitis", "rem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "veniam";
                fields = "minima";
                key = "recusandae";
                oauthToken = "reiciendis";
                optionsRequestedPolicyVersion = 862319L;
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "aperiam";
                uploadProtocol = "saepe";
                userIp = "numquam";
            }};            

            ComputeBackendServicesGetIamPolicyResponse res = sdk.backendServices.computeBackendServicesGetIamPolicy(req, new ComputeBackendServicesGetIamPolicySecurity() {{
                option1 = new ComputeBackendServicesGetIamPolicySecurityOption1("veniam", "in") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendServicesInsert

Creates a BackendService resource in the specified project using the data included in the request. For more information, see Backend services overview .

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendServicesInsertRequest;
import org.openapis.openapi.models.operations.ComputeBackendServicesInsertResponse;
import org.openapis.openapi.models.operations.ComputeBackendServicesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeBackendServicesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendServicesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Backend;
import org.openapis.openapi.models.shared.BackendBalancingModeEnum;
import org.openapis.openapi.models.shared.BackendService;
import org.openapis.openapi.models.shared.BackendServiceCdnPolicy;
import org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader;
import org.openapis.openapi.models.shared.BackendServiceCdnPolicyCacheModeEnum;
import org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy;
import org.openapis.openapi.models.shared.BackendServiceCompressionModeEnum;
import org.openapis.openapi.models.shared.BackendServiceConnectionTrackingPolicy;
import org.openapis.openapi.models.shared.BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum;
import org.openapis.openapi.models.shared.BackendServiceConnectionTrackingPolicyTrackingModeEnum;
import org.openapis.openapi.models.shared.BackendServiceFailoverPolicy;
import org.openapis.openapi.models.shared.BackendServiceIAP;
import org.openapis.openapi.models.shared.BackendServiceLoadBalancingSchemeEnum;
import org.openapis.openapi.models.shared.BackendServiceLocalityLbPolicyEnum;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigPolicy;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum;
import org.openapis.openapi.models.shared.BackendServiceLogConfig;
import org.openapis.openapi.models.shared.BackendServiceLogConfigOptionalModeEnum;
import org.openapis.openapi.models.shared.BackendServiceProtocolEnum;
import org.openapis.openapi.models.shared.BackendServiceSessionAffinityEnum;
import org.openapis.openapi.models.shared.CacheKeyPolicy;
import org.openapis.openapi.models.shared.CircuitBreakers;
import org.openapis.openapi.models.shared.ConnectionDraining;
import org.openapis.openapi.models.shared.ConsistentHashLoadBalancerSettings;
import org.openapis.openapi.models.shared.ConsistentHashLoadBalancerSettingsHttpCookie;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.OutlierDetection;
import org.openapis.openapi.models.shared.SecuritySettings;
import org.openapis.openapi.models.shared.Subsetting;
import org.openapis.openapi.models.shared.SubsettingPolicyEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendServicesInsertRequest req = new ComputeBackendServicesInsertRequest("officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                backendService = new BackendService() {{
                    affinityCookieTtlSec = 512452;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 7400.98;
                            description = "laboriosam";
                            failover = false;
                            group = "dolorum";
                            maxConnections = 530089;
                            maxConnectionsPerEndpoint = 622385;
                            maxConnectionsPerInstance = 944708;
                            maxRate = 710529;
                            maxRatePerEndpoint = 8928.63;
                            maxRatePerInstance = 2049.23;
                            maxUtilization = 6771.15;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 6390.28;
                            description = "dolorum";
                            failover = false;
                            group = "corrupti";
                            maxConnections = 879235;
                            maxConnectionsPerEndpoint = 272683;
                            maxConnectionsPerInstance = 543678;
                            maxRate = 148268;
                            maxRatePerEndpoint = 2826.99;
                            maxRatePerInstance = 8563.03;
                            maxUtilization = 302.35;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "expedita";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "magnam";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "consequatur";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("ipsam"),
                                add("sit"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("quas"),
                                add("repudiandae"),
                                add("corporis"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("blanditiis"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("sed"),
                                add("sit"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.FORCE_CACHE_ALL;
                        clientTtl = 342611;
                        defaultTtl = 906172;
                        maxTtl = 622231;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 279068;
                                ttl = 968865;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 209750;
                        signedUrlCacheMaxAgeSec = "harum";
                        signedUrlKeyNames = new String[]{{
                            add("architecto"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        maxConnections = 577140;
                        maxPendingRequests = 289776;
                        maxRequests = 695270;
                        maxRequestsPerConnection = 539074;
                        maxRetries = 671957;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.DISABLED;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 948861;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.DEFAULT_FOR_PROTOCOL;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 2703;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.INVALID_TRACKING_MODE;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Karl Miller";
                            path = "repellendus";
                            ttl = new Duration() {{
                                nanos = 962771;
                                seconds = "voluptates";
                            }};;
                        }};;
                        httpHeaderName = "perferendis";
                        minimumRingSize = "est";
                    }};;
                    creationTimestamp = "quidem";
                    customRequestHeaders = new String[]{{
                        add("facere"),
                        add("fuga"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("mollitia"),
                        add("veniam"),
                        add("voluptatem"),
                    }};
                    description = "quisquam";
                    edgeSecurityPolicy = "repudiandae";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 972.43;
                    }};;
                    fingerprint = "atque";
                    healthChecks = new String[]{{
                        add("asperiores"),
                        add("totam"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "suscipit";
                        oauth2ClientSecret = "quidem";
                        oauth2ClientSecretSha256 = "maxime";
                    }};;
                    id = "et";
                    kind = "esse";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.EXTERNAL_MANAGED;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "ea";
                                name = "Evan Torphy";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.RANDOM;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "minima";
                                name = "Tara Wuckert";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.RANDOM;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "blanditiis";
                                name = "Delia Littel DVM";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.RING_HASH;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "repellendus";
                                name = "Lela Baumbach Jr.";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.INVALID_LB_POLICY;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.LEAST_REQUEST;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optionalFields = new String[]{{
                            add("laboriosam"),
                            add("velit"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.INCLUDE_ALL_OPTIONAL;
                        sampleRate = 5627.83;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 300029;
                        seconds = "saepe";
                    }};;
                    name = "Toni Torphy";
                    network = "adipisci";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 907876;
                            seconds = "occaecati";
                        }};;
                        consecutiveErrors = 160230;
                        consecutiveGatewayFailure = 145870;
                        enforcingConsecutiveErrors = 661118;
                        enforcingConsecutiveGatewayFailure = 335631;
                        enforcingSuccessRate = 440264;
                        interval = new Duration() {{
                            nanos = 625528;
                            seconds = "illo";
                        }};;
                        maxEjectionPercent = 361306;
                        successRateMinimumHosts = 696463;
                        successRateRequestVolume = 910994;
                        successRateStdevFactor = 247399;
                    }};;
                    port = 878493;
                    portName = "doloremque";
                    protocol = BackendServiceProtocolEnum.HTTPS;
                    region = "ipsa";
                    securityPolicy = "totam";
                    securitySettings = new SecuritySettings() {{
                        clientTlsPolicy = "quae";
                        subjectAltNames = new String[]{{
                            add("eveniet"),
                            add("qui"),
                        }};
                    }};;
                    selfLink = "cum";
                    serviceBindings = new String[]{{
                        add("necessitatibus"),
                        add("ratione"),
                    }};
                    sessionAffinity = BackendServiceSessionAffinityEnum.HEADER_FIELD;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.NONE;
                    }};;
                    timeoutSec = 528940;
                }};;
                accessToken = "rem";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "repellat";
                key = "alias";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                requestId = "nihil";
                uploadType = "mollitia";
                uploadProtocol = "voluptas";
                userIp = "alias";
            }};            

            ComputeBackendServicesInsertResponse res = sdk.backendServices.computeBackendServicesInsert(req, new ComputeBackendServicesInsertSecurity() {{
                option1 = new ComputeBackendServicesInsertSecurityOption1("maiores", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendServicesList

Retrieves the list of BackendService resources available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendServicesListRequest;
import org.openapis.openapi.models.operations.ComputeBackendServicesListResponse;
import org.openapis.openapi.models.operations.ComputeBackendServicesListSecurity;
import org.openapis.openapi.models.operations.ComputeBackendServicesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendServicesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeBackendServicesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendServicesListRequest req = new ComputeBackendServicesListRequest("dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minima";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "nesciunt";
                filter = "quae";
                key = "recusandae";
                maxResults = 607249L;
                oauthToken = "quaerat";
                orderBy = "molestiae";
                pageToken = "ex";
                prettyPrint = false;
                quotaUser = "ut";
                returnPartialSuccess = false;
                uploadType = "culpa";
                uploadProtocol = "adipisci";
                userIp = "debitis";
            }};            

            ComputeBackendServicesListResponse res = sdk.backendServices.computeBackendServicesList(req, new ComputeBackendServicesListSecurity() {{
                option1 = new ComputeBackendServicesListSecurityOption1("laudantium", "eum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.backendServiceList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendServicesPatch

Patches the specified BackendService resource with the data included in the request. For more information, see Backend services overview. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendServicesPatchRequest;
import org.openapis.openapi.models.operations.ComputeBackendServicesPatchResponse;
import org.openapis.openapi.models.operations.ComputeBackendServicesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeBackendServicesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendServicesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Backend;
import org.openapis.openapi.models.shared.BackendBalancingModeEnum;
import org.openapis.openapi.models.shared.BackendService;
import org.openapis.openapi.models.shared.BackendServiceCdnPolicy;
import org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader;
import org.openapis.openapi.models.shared.BackendServiceCdnPolicyCacheModeEnum;
import org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy;
import org.openapis.openapi.models.shared.BackendServiceCompressionModeEnum;
import org.openapis.openapi.models.shared.BackendServiceConnectionTrackingPolicy;
import org.openapis.openapi.models.shared.BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum;
import org.openapis.openapi.models.shared.BackendServiceConnectionTrackingPolicyTrackingModeEnum;
import org.openapis.openapi.models.shared.BackendServiceFailoverPolicy;
import org.openapis.openapi.models.shared.BackendServiceIAP;
import org.openapis.openapi.models.shared.BackendServiceLoadBalancingSchemeEnum;
import org.openapis.openapi.models.shared.BackendServiceLocalityLbPolicyEnum;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigPolicy;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum;
import org.openapis.openapi.models.shared.BackendServiceLogConfig;
import org.openapis.openapi.models.shared.BackendServiceLogConfigOptionalModeEnum;
import org.openapis.openapi.models.shared.BackendServiceProtocolEnum;
import org.openapis.openapi.models.shared.BackendServiceSessionAffinityEnum;
import org.openapis.openapi.models.shared.CacheKeyPolicy;
import org.openapis.openapi.models.shared.CircuitBreakers;
import org.openapis.openapi.models.shared.ConnectionDraining;
import org.openapis.openapi.models.shared.ConsistentHashLoadBalancerSettings;
import org.openapis.openapi.models.shared.ConsistentHashLoadBalancerSettingsHttpCookie;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.OutlierDetection;
import org.openapis.openapi.models.shared.SecuritySettings;
import org.openapis.openapi.models.shared.Subsetting;
import org.openapis.openapi.models.shared.SubsettingPolicyEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendServicesPatchRequest req = new ComputeBackendServicesPatchRequest("nemo", "recusandae") {{
                dollarXgafv = XgafvEnum.ONE;
                backendService1 = new BackendService() {{
                    affinityCookieTtlSec = 592081;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 9704.94;
                            description = "provident";
                            failover = false;
                            group = "aspernatur";
                            maxConnections = 354506;
                            maxConnectionsPerEndpoint = 96804;
                            maxConnectionsPerInstance = 657020;
                            maxRate = 343392;
                            maxRatePerEndpoint = 6523.09;
                            maxRatePerInstance = 5910.27;
                            maxUtilization = 8217.19;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 4027.67;
                            description = "aliquid";
                            failover = false;
                            group = "accusantium";
                            maxConnections = 999278;
                            maxConnectionsPerEndpoint = 984632;
                            maxConnectionsPerInstance = 351893;
                            maxRate = 448143;
                            maxRatePerEndpoint = 7214.07;
                            maxRatePerInstance = 9376.36;
                            maxUtilization = 6375.83;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "placeat";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "modi";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "voluptatibus";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("officiis"),
                                add("sapiente"),
                                add("cumque"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("rerum"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("quis"),
                                add("inventore"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("cumque"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.CACHE_ALL_STATIC;
                        clientTtl = 21688;
                        defaultTtl = 241901;
                        maxTtl = 137251;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 260628;
                                ttl = 521996;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 871083;
                                ttl = 773084;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 179410;
                        signedUrlCacheMaxAgeSec = "sapiente";
                        signedUrlKeyNames = new String[]{{
                            add("dicta"),
                            add("minima"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        maxConnections = 107004;
                        maxPendingRequests = 583404;
                        maxRequests = 589695;
                        maxRequestsPerConnection = 936469;
                        maxRetries = 745398;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.DISABLED;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 848151;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.ALWAYS_PERSIST;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 935833;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.PER_CONNECTION;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Doyle Jacobs";
                            path = "dolorem";
                            ttl = new Duration() {{
                                nanos = 147808;
                                seconds = "cumque";
                            }};;
                        }};;
                        httpHeaderName = "fuga";
                        minimumRingSize = "ratione";
                    }};;
                    creationTimestamp = "animi";
                    customRequestHeaders = new String[]{{
                        add("nulla"),
                        add("consequatur"),
                        add("quasi"),
                        add("et"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("natus"),
                        add("occaecati"),
                    }};
                    description = "suscipit";
                    edgeSecurityPolicy = "adipisci";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 965.62;
                    }};;
                    fingerprint = "magni";
                    healthChecks = new String[]{{
                        add("nulla"),
                        add("necessitatibus"),
                        add("ipsa"),
                        add("tempora"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "nihil";
                        oauth2ClientSecret = "molestiae";
                        oauth2ClientSecretSha256 = "dicta";
                    }};;
                    id = "iusto";
                    kind = "esse";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.INTERNAL_MANAGED;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "reiciendis";
                                name = "Mr. Diane Stiedemann";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.MAGLEV;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "esse";
                                name = "Miss Kim Jacobs II";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.ROUND_ROBIN;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "expedita";
                                name = "Brandi Homenick III";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.MAGLEV;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "iste";
                                name = "Raymond Muller";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.RING_HASH;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.RING_HASH;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optionalFields = new String[]{{
                            add("ad"),
                            add("deleniti"),
                            add("enim"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.CUSTOM;
                        sampleRate = 8333.16;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 405036;
                        seconds = "quo";
                    }};;
                    name = "Debbie Hammes V";
                    network = "cum";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 399660;
                            seconds = "beatae";
                        }};;
                        consecutiveErrors = 530860;
                        consecutiveGatewayFailure = 606308;
                        enforcingConsecutiveErrors = 85233;
                        enforcingConsecutiveGatewayFailure = 703218;
                        enforcingSuccessRate = 665678;
                        interval = new Duration() {{
                            nanos = 634786;
                            seconds = "voluptatem";
                        }};;
                        maxEjectionPercent = 959143;
                        successRateMinimumHosts = 889288;
                        successRateRequestVolume = 103298;
                        successRateStdevFactor = 682119;
                    }};;
                    port = 867168;
                    portName = "debitis";
                    protocol = BackendServiceProtocolEnum.GRPC;
                    region = "alias";
                    securityPolicy = "deleniti";
                    securitySettings = new SecuritySettings() {{
                        clientTlsPolicy = "earum";
                        subjectAltNames = new String[]{{
                            add("sapiente"),
                            add("rem"),
                        }};
                    }};;
                    selfLink = "minus";
                    serviceBindings = new String[]{{
                        add("asperiores"),
                        add("ratione"),
                    }};
                    sessionAffinity = BackendServiceSessionAffinityEnum.CLIENT_IP_PORT_PROTO;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.CONSISTENT_HASH_SUBSETTING;
                    }};;
                    timeoutSec = 848341;
                }};;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "nam";
                key = "ipsam";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "dolor";
                requestId = "aliquam";
                uploadType = "inventore";
                uploadProtocol = "deleniti";
                userIp = "veritatis";
            }};            

            ComputeBackendServicesPatchResponse res = sdk.backendServices.computeBackendServicesPatch(req, new ComputeBackendServicesPatchSecurity() {{
                option1 = new ComputeBackendServicesPatchSecurityOption1("tempora", "dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendServicesSetEdgeSecurityPolicy

Sets the edge security policy for the specified backend service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendServicesSetEdgeSecurityPolicyRequest;
import org.openapis.openapi.models.operations.ComputeBackendServicesSetEdgeSecurityPolicyResponse;
import org.openapis.openapi.models.operations.ComputeBackendServicesSetEdgeSecurityPolicySecurity;
import org.openapis.openapi.models.operations.ComputeBackendServicesSetEdgeSecurityPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendServicesSetEdgeSecurityPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SecurityPolicyReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendServicesSetEdgeSecurityPolicyRequest req = new ComputeBackendServicesSetEdgeSecurityPolicyRequest("consequatur", "architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyReference = new SecurityPolicyReference() {{
                    securityPolicy = "modi";
                }};;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "quae";
                key = "dolor";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "ipsam";
                requestId = "consequuntur";
                uploadType = "ipsa";
                uploadProtocol = "quas";
                userIp = "eveniet";
            }};            

            ComputeBackendServicesSetEdgeSecurityPolicyResponse res = sdk.backendServices.computeBackendServicesSetEdgeSecurityPolicy(req, new ComputeBackendServicesSetEdgeSecurityPolicySecurity() {{
                option1 = new ComputeBackendServicesSetEdgeSecurityPolicySecurityOption1("impedit", "officiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendServicesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendServicesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeBackendServicesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeBackendServicesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeBackendServicesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendServicesSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptions;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptionsPermissionTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.ConditionIamEnum;
import org.openapis.openapi.models.shared.ConditionOpEnum;
import org.openapis.openapi.models.shared.ConditionSysEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.GlobalSetPolicyRequest;
import org.openapis.openapi.models.shared.LogConfig;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptions;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptionsLogNameEnum;
import org.openapis.openapi.models.shared.LogConfigCounterOptions;
import org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptions;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptionsLogModeEnum;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendServicesSetIamPolicyRequest req = new ComputeBackendServicesSetIamPolicyRequest("esse", "necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "nesciunt";
                            condition = new Expr() {{
                                description = "expedita";
                                expression = "eum";
                                location = "vel";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("exercitationem"),
                                add("ab"),
                            }};
                            role = "porro";
                        }}),
                        add(new Binding() {{
                            bindingId = "autem";
                            condition = new Expr() {{
                                description = "nobis";
                                expression = "laboriosam";
                                location = "recusandae";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("exercitationem"),
                            }};
                            role = "necessitatibus";
                        }}),
                    }};
                    etag = "quasi";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("est"),
                                            add("harum"),
                                            add("sequi"),
                                            add("doloribus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("occaecati"),
                                            add("nemo"),
                                            add("voluptate"),
                                            add("blanditiis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("numquam"),
                                            add("nemo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aspernatur"),
                                            add("ducimus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("laudantium"),
                                    add("incidunt"),
                                    add("quasi"),
                                }};
                                service = "rem";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nisi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aperiam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("soluta"),
                                            add("alias"),
                                            add("omnis"),
                                            add("eos"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("magni"),
                                            add("inventore"),
                                            add("fuga"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("distinctio"),
                                    add("omnis"),
                                    add("delectus"),
                                    add("minima"),
                                }};
                                service = "praesentium";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "magnam";
                                condition = new Expr() {{
                                    description = "temporibus";
                                    expression = "quos";
                                    location = "commodi";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("totam"),
                                    add("earum"),
                                }};
                                role = "modi";
                            }}),
                            add(new Binding() {{
                                bindingId = "nam";
                                condition = new Expr() {{
                                    description = "vero";
                                    expression = "voluptatem";
                                    location = "ipsam";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("quasi"),
                                }};
                                role = "non";
                            }}),
                            add(new Binding() {{
                                bindingId = "maiores";
                                condition = new Expr() {{
                                    description = "enim";
                                    expression = "sint";
                                    location = "nulla";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("nemo"),
                                    add("reprehenderit"),
                                }};
                                role = "est";
                            }}),
                            add(new Binding() {{
                                bindingId = "quis";
                                condition = new Expr() {{
                                    description = "sint";
                                    expression = "accusamus";
                                    location = "impedit";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("asperiores"),
                                    add("ex"),
                                    add("voluptas"),
                                    add("debitis"),
                                }};
                                role = "delectus";
                            }}),
                        }};
                        etag = "quae";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "atque";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("magni"),
                                            add("soluta"),
                                            add("repudiandae"),
                                            add("nam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.IN;
                                        svc = "voluptate";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("neque"),
                                            add("quo"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "iure";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("vel"),
                                            add("magnam"),
                                            add("quibusdam"),
                                            add("inventore"),
                                        }};
                                    }}),
                                }};
                                description = "facere";
                                ins = new String[]{{
                                    add("architecto"),
                                    add("voluptatibus"),
                                    add("quia"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Gina Jaskolski";
                                                    value = "eum";
                                                }}),
                                            }};
                                            field = "velit";
                                            metric = "ut";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Jackie Watsica";
                                                    value = "velit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kyle Fahey Jr.";
                                                    value = "consequatur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Clay Jast";
                                                    value = "facilis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Freddie Quitzon";
                                                    value = "voluptate";
                                                }}),
                                            }};
                                            field = "ullam";
                                            metric = "unde";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jodi Mueller";
                                                    value = "veritatis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Glenn Bruen";
                                                    value = "qui";
                                                }}),
                                            }};
                                            field = "iste";
                                            metric = "ex";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Lonnie Considine";
                                                    value = "quae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Pauline Durgan";
                                                    value = "et";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lindsay Stiedemann";
                                                    value = "quia";
                                                }}),
                                            }};
                                            field = "quia";
                                            metric = "nostrum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("dicta"),
                                    add("id"),
                                    add("libero"),
                                }};
                                permissions = new String[]{{
                                    add("officia"),
                                    add("quos"),
                                    add("placeat"),
                                    add("sit"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "aperiam";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("eligendi"),
                                            add("distinctio"),
                                        }};
                                    }}),
                                }};
                                description = "voluptatem";
                                ins = new String[]{{
                                    add("esse"),
                                    add("dolores"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Javier McKenzie";
                                                    value = "tempore";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Angel Jones";
                                                    value = "laudantium";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Cecelia Wiza";
                                                    value = "alias";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Yvette Paucek MD";
                                                    value = "officiis";
                                                }}),
                                            }};
                                            field = "eos";
                                            metric = "quibusdam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Natasha Wehner";
                                                    value = "similique";
                                                }}),
                                            }};
                                            field = "ut";
                                            metric = "quidem";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kent Corkery";
                                                    value = "nesciunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Oliver Kulas";
                                                    value = "corporis";
                                                }}),
                                            }};
                                            field = "qui";
                                            metric = "expedita";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Gladys King";
                                                    value = "modi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Danielle Volkman";
                                                    value = "aperiam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Philip Greenfelder";
                                                    value = "voluptas";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jacob Schinner";
                                                    value = "est";
                                                }}),
                                            }};
                                            field = "impedit";
                                            metric = "delectus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("odit"),
                                    add("repellat"),
                                    add("pariatur"),
                                    add("nemo"),
                                }};
                                permissions = new String[]{{
                                    add("aperiam"),
                                    add("odio"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "dolores";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("ducimus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "itaque";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("ex"),
                                            add("quaerat"),
                                            add("commodi"),
                                            add("officiis"),
                                        }};
                                    }}),
                                }};
                                description = "placeat";
                                ins = new String[]{{
                                    add("exercitationem"),
                                    add("quam"),
                                    add("dolorem"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Elvira Robel";
                                                    value = "animi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Juana Buckridge";
                                                    value = "nobis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Dora Wuckert";
                                                    value = "pariatur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Andy Mayert";
                                                    value = "nostrum";
                                                }}),
                                            }};
                                            field = "doloribus";
                                            metric = "eligendi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Felix Mann PhD";
                                                    value = "architecto";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Nick Shields";
                                                    value = "velit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lucia Rutherford";
                                                    value = "adipisci";
                                                }}),
                                            }};
                                            field = "saepe";
                                            metric = "deserunt";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("veniam"),
                                    add("libero"),
                                }};
                                permissions = new String[]{{
                                    add("cupiditate"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "magnam";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("asperiores"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "facere";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("pariatur"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "ab";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("tempore"),
                                            add("nisi"),
                                            add("voluptatibus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "distinctio";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("nisi"),
                                            add("libero"),
                                        }};
                                    }}),
                                }};
                                description = "minus";
                                ins = new String[]{{
                                    add("facilis"),
                                    add("ipsum"),
                                    add("ad"),
                                    add("voluptatibus"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Craig Kiehn";
                                                    value = "iusto";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jordan Romaguera";
                                                    value = "officiis";
                                                }}),
                                            }};
                                            field = "ducimus";
                                            metric = "dolor";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Joy Stehr";
                                                    value = "enim";
                                                }}),
                                            }};
                                            field = "delectus";
                                            metric = "iusto";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Meghan Turcotte";
                                                    value = "eos";
                                                }}),
                                            }};
                                            field = "reiciendis";
                                            metric = "earum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jimmy Konopelski II";
                                                    value = "assumenda";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Alexandra McLaughlin";
                                                    value = "consequatur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Adam Reilly";
                                                    value = "provident";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ira Kulas";
                                                    value = "similique";
                                                }}),
                                            }};
                                            field = "repellendus";
                                            metric = "iure";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("impedit"),
                                    add("commodi"),
                                }};
                                permissions = new String[]{{
                                    add("voluptatem"),
                                }};
                            }}),
                        }};
                        version = 322829;
                    }};;
                }};;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "illum";
                fields = "praesentium";
                key = "quidem";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "quasi";
                uploadProtocol = "dicta";
                userIp = "laudantium";
            }};            

            ComputeBackendServicesSetIamPolicyResponse res = sdk.backendServices.computeBackendServicesSetIamPolicy(req, new ComputeBackendServicesSetIamPolicySecurity() {{
                option1 = new ComputeBackendServicesSetIamPolicySecurityOption1("doloremque", "earum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendServicesSetSecurityPolicy

Sets the Google Cloud Armor security policy for the specified backend service. For more information, see Google Cloud Armor Overview

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendServicesSetSecurityPolicyRequest;
import org.openapis.openapi.models.operations.ComputeBackendServicesSetSecurityPolicyResponse;
import org.openapis.openapi.models.operations.ComputeBackendServicesSetSecurityPolicySecurity;
import org.openapis.openapi.models.operations.ComputeBackendServicesSetSecurityPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendServicesSetSecurityPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SecurityPolicyReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendServicesSetSecurityPolicyRequest req = new ComputeBackendServicesSetSecurityPolicyRequest("iusto", "amet") {{
                dollarXgafv = XgafvEnum.TWO;
                securityPolicyReference = new SecurityPolicyReference() {{
                    securityPolicy = "dolorum";
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "consequatur";
                key = "nemo";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "itaque";
                requestId = "facilis";
                uploadType = "corrupti";
                uploadProtocol = "aperiam";
                userIp = "sint";
            }};            

            ComputeBackendServicesSetSecurityPolicyResponse res = sdk.backendServices.computeBackendServicesSetSecurityPolicy(req, new ComputeBackendServicesSetSecurityPolicySecurity() {{
                option1 = new ComputeBackendServicesSetSecurityPolicySecurityOption1("accusamus", "eos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendServicesUpdate

Updates the specified BackendService resource with the data included in the request. For more information, see Backend services overview.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendServicesUpdateRequest;
import org.openapis.openapi.models.operations.ComputeBackendServicesUpdateResponse;
import org.openapis.openapi.models.operations.ComputeBackendServicesUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeBackendServicesUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendServicesUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Backend;
import org.openapis.openapi.models.shared.BackendBalancingModeEnum;
import org.openapis.openapi.models.shared.BackendService;
import org.openapis.openapi.models.shared.BackendServiceCdnPolicy;
import org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader;
import org.openapis.openapi.models.shared.BackendServiceCdnPolicyCacheModeEnum;
import org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy;
import org.openapis.openapi.models.shared.BackendServiceCompressionModeEnum;
import org.openapis.openapi.models.shared.BackendServiceConnectionTrackingPolicy;
import org.openapis.openapi.models.shared.BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum;
import org.openapis.openapi.models.shared.BackendServiceConnectionTrackingPolicyTrackingModeEnum;
import org.openapis.openapi.models.shared.BackendServiceFailoverPolicy;
import org.openapis.openapi.models.shared.BackendServiceIAP;
import org.openapis.openapi.models.shared.BackendServiceLoadBalancingSchemeEnum;
import org.openapis.openapi.models.shared.BackendServiceLocalityLbPolicyEnum;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigPolicy;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum;
import org.openapis.openapi.models.shared.BackendServiceLogConfig;
import org.openapis.openapi.models.shared.BackendServiceLogConfigOptionalModeEnum;
import org.openapis.openapi.models.shared.BackendServiceProtocolEnum;
import org.openapis.openapi.models.shared.BackendServiceSessionAffinityEnum;
import org.openapis.openapi.models.shared.CacheKeyPolicy;
import org.openapis.openapi.models.shared.CircuitBreakers;
import org.openapis.openapi.models.shared.ConnectionDraining;
import org.openapis.openapi.models.shared.ConsistentHashLoadBalancerSettings;
import org.openapis.openapi.models.shared.ConsistentHashLoadBalancerSettingsHttpCookie;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.OutlierDetection;
import org.openapis.openapi.models.shared.SecuritySettings;
import org.openapis.openapi.models.shared.Subsetting;
import org.openapis.openapi.models.shared.SubsettingPolicyEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendServicesUpdateRequest req = new ComputeBackendServicesUpdateRequest("totam", "dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                backendService1 = new BackendService() {{
                    affinityCookieTtlSec = 244376;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.CONNECTION;
                            capacityScaler = 9536.76;
                            description = "dolor";
                            failover = false;
                            group = "occaecati";
                            maxConnections = 539813;
                            maxConnectionsPerEndpoint = 107472;
                            maxConnectionsPerInstance = 868255;
                            maxRate = 287544;
                            maxRatePerEndpoint = 7949.88;
                            maxRatePerInstance = 4567.04;
                            maxUtilization = 323.56;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "rerum";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("aperiam"),
                                add("dignissimos"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("velit"),
                                add("porro"),
                                add("provident"),
                                add("consectetur"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("dignissimos"),
                                add("consectetur"),
                                add("soluta"),
                                add("natus"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("officia"),
                                add("amet"),
                                add("tenetur"),
                                add("aspernatur"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.USE_ORIGIN_HEADERS;
                        clientTtl = 931077;
                        defaultTtl = 848346;
                        maxTtl = 670762;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 876285;
                                ttl = 185348;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 232383;
                                ttl = 995816;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 128696;
                        signedUrlCacheMaxAgeSec = "explicabo";
                        signedUrlKeyNames = new String[]{{
                            add("nihil"),
                            add("non"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        maxConnections = 68093;
                        maxPendingRequests = 72754;
                        maxRequests = 943851;
                        maxRequestsPerConnection = 644479;
                        maxRetries = 964925;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.AUTOMATIC;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 719389;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.DEFAULT_FOR_PROTOCOL;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 349993;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.INVALID_TRACKING_MODE;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Casey Gleason PhD";
                            path = "rem";
                            ttl = new Duration() {{
                                nanos = 44016;
                                seconds = "odit";
                            }};;
                        }};;
                        httpHeaderName = "deleniti";
                        minimumRingSize = "enim";
                    }};;
                    creationTimestamp = "voluptate";
                    customRequestHeaders = new String[]{{
                        add("minima"),
                        add("libero"),
                        add("magnam"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("modi"),
                    }};
                    description = "eum";
                    edgeSecurityPolicy = "nesciunt";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 6521.25;
                    }};;
                    fingerprint = "dignissimos";
                    healthChecks = new String[]{{
                        add("nostrum"),
                        add("molestiae"),
                        add("veniam"),
                        add("reiciendis"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "ab";
                        oauth2ClientSecret = "modi";
                        oauth2ClientSecretSha256 = "aut";
                    }};;
                    id = "aut";
                    kind = "eveniet";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.INTERNAL;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "numquam";
                                name = "Woodrow Klein";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.MAGLEV;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "itaque";
                                name = "Ralph Rau";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.INVALID_LB_POLICY;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.RING_HASH;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optionalFields = new String[]{{
                            add("autem"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.INCLUDE_ALL_OPTIONAL;
                        sampleRate = 53.1;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 526413;
                        seconds = "aut";
                    }};;
                    name = "Mr. Dwayne Sipes PhD";
                    network = "delectus";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 651228;
                            seconds = "nulla";
                        }};;
                        consecutiveErrors = 640907;
                        consecutiveGatewayFailure = 152027;
                        enforcingConsecutiveErrors = 30208;
                        enforcingConsecutiveGatewayFailure = 664;
                        enforcingSuccessRate = 910073;
                        interval = new Duration() {{
                            nanos = 941668;
                            seconds = "voluptatem";
                        }};;
                        maxEjectionPercent = 278325;
                        successRateMinimumHosts = 185448;
                        successRateRequestVolume = 185897;
                        successRateStdevFactor = 895912;
                    }};;
                    port = 691508;
                    portName = "explicabo";
                    protocol = BackendServiceProtocolEnum.GRPC;
                    region = "aliquid";
                    securityPolicy = "modi";
                    securitySettings = new SecuritySettings() {{
                        clientTlsPolicy = "optio";
                        subjectAltNames = new String[]{{
                            add("molestias"),
                            add("officia"),
                            add("libero"),
                            add("totam"),
                        }};
                    }};;
                    selfLink = "sequi";
                    serviceBindings = new String[]{{
                        add("ea"),
                        add("impedit"),
                    }};
                    sessionAffinity = BackendServiceSessionAffinityEnum.CLIENT_IP_PROTO;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.CONSISTENT_HASH_SUBSETTING;
                    }};;
                    timeoutSec = 243623;
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "laborum";
                key = "natus";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "doloremque";
                requestId = "nisi";
                uploadType = "rerum";
                uploadProtocol = "recusandae";
                userIp = "voluptates";
            }};            

            ComputeBackendServicesUpdateResponse res = sdk.backendServices.computeBackendServicesUpdate(req, new ComputeBackendServicesUpdateSecurity() {{
                option1 = new ComputeBackendServicesUpdateSecurityOption1("non", "rem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
