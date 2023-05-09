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

            ComputeBackendServicesAddSignedUrlKeyRequest req = new ComputeBackendServicesAddSignedUrlKeyRequest("rem", "at") {{
                dollarXgafv = XgafvEnum.TWO;
                signedUrlKey = new SignedUrlKey() {{
                    keyName = "eos";
                    keyValue = "sapiente";
                }};;
                accessToken = "eum";
                alt = AltEnum.JSON;
                callback = "minima";
                fields = "beatae";
                key = "cupiditate";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "earum";
                requestId = "soluta";
                uploadType = "hic";
                uploadProtocol = "illum";
                userIp = "eaque";
            }};            

            ComputeBackendServicesAddSignedUrlKeyResponse res = sdk.backendServices.computeBackendServicesAddSignedUrlKey(req, new ComputeBackendServicesAddSignedUrlKeySecurity() {{
                option1 = new ComputeBackendServicesAddSignedUrlKeySecurityOption1("earum", "perspiciatis") {{
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

            ComputeBackendServicesAggregatedListRequest req = new ComputeBackendServicesAggregatedListRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquid";
                alt = AltEnum.PROTO;
                callback = "suscipit";
                fields = "dolorem";
                filter = "fugit";
                includeAllScopes = false;
                key = "cumque";
                maxResults = 684935L;
                oauthToken = "ratione";
                orderBy = "animi";
                pageToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "nulla";
                returnPartialSuccess = false;
                uploadType = "consequatur";
                uploadProtocol = "quasi";
                userIp = "et";
            }};            

            ComputeBackendServicesAggregatedListResponse res = sdk.backendServices.computeBackendServicesAggregatedList(req, new ComputeBackendServicesAggregatedListSecurity() {{
                option1 = new ComputeBackendServicesAggregatedListSecurityOption1("ducimus", "natus") {{
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

            ComputeBackendServicesDeleteRequest req = new ComputeBackendServicesDeleteRequest("occaecati", "suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "doloribus";
                fields = "nulla";
                key = "necessitatibus";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "tempora";
                requestId = "nihil";
                uploadType = "molestiae";
                uploadProtocol = "dicta";
                userIp = "iusto";
            }};            

            ComputeBackendServicesDeleteResponse res = sdk.backendServices.computeBackendServicesDelete(req, new ComputeBackendServicesDeleteSecurity() {{
                option1 = new ComputeBackendServicesDeleteSecurityOption1("esse", "praesentium") {{
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

            ComputeBackendServicesDeleteSignedUrlKeyRequest req = new ComputeBackendServicesDeleteSignedUrlKeyRequest("maiores", "reiciendis", "vel") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "dicta";
                fields = "odio";
                key = "tempora";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "ex";
                requestId = "consectetur";
                uploadType = "aliquid";
                uploadProtocol = "ipsa";
                userIp = "laborum";
            }};            

            ComputeBackendServicesDeleteSignedUrlKeyResponse res = sdk.backendServices.computeBackendServicesDeleteSignedUrlKey(req, new ComputeBackendServicesDeleteSignedUrlKeySecurity() {{
                option1 = new ComputeBackendServicesDeleteSignedUrlKeySecurityOption1("sunt", "nostrum") {{
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

            ComputeBackendServicesGetRequest req = new ComputeBackendServicesGetRequest("fugiat", "expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "perferendis";
                key = "eum";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "id";
                uploadProtocol = "ab";
                userIp = "error";
            }};            

            ComputeBackendServicesGetResponse res = sdk.backendServices.computeBackendServicesGet(req, new ComputeBackendServicesGetSecurity() {{
                option1 = new ComputeBackendServicesGetSecurityOption1("possimus", "voluptates") {{
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

            ComputeBackendServicesGetHealthRequest req = new ComputeBackendServicesGetHealthRequest("mollitia", "laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                resourceGroupReference = new ResourceGroupReference() {{
                    group = "ad";
                }};;
                accessToken = "deleniti";
                alt = AltEnum.JSON;
                callback = "vitae";
                fields = "repellendus";
                key = "ex";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "ut";
                uploadProtocol = "ad";
                userIp = "expedita";
            }};            

            ComputeBackendServicesGetHealthResponse res = sdk.backendServices.computeBackendServicesGetHealth(req, new ComputeBackendServicesGetHealthSecurity() {{
                option1 = new ComputeBackendServicesGetHealthSecurityOption1("voluptatem", "molestias") {{
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

            ComputeBackendServicesGetIamPolicyRequest req = new ComputeBackendServicesGetIamPolicyRequest("cum", "aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "rerum";
                key = "est";
                oauthToken = "culpa";
                optionsRequestedPolicyVersion = 29634L;
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "officiis";
                uploadProtocol = "architecto";
                userIp = "fuga";
            }};            

            ComputeBackendServicesGetIamPolicyResponse res = sdk.backendServices.computeBackendServicesGetIamPolicy(req, new ComputeBackendServicesGetIamPolicySecurity() {{
                option1 = new ComputeBackendServicesGetIamPolicySecurityOption1("pariatur", "debitis") {{
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
import org.openapis.openapi.models.shared.Awsv4Signature;
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

            ComputeBackendServicesInsertRequest req = new ComputeBackendServicesInsertRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.ONE;
                backendService = new BackendService() {{
                    affinityCookieTtlSec = 534917;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 9583.08;
                            description = "rem";
                            failover = false;
                            group = "minus";
                            maxConnections = 365100;
                            maxConnectionsPerEndpoint = 992074;
                            maxConnectionsPerInstance = 190567;
                            maxRate = 355225;
                            maxRatePerEndpoint = 191.22;
                            maxRatePerInstance = 8483.41;
                            maxUtilization = 5181.5;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.UTILIZATION;
                            capacityScaler = 8427.77;
                            description = "nam";
                            failover = false;
                            group = "ipsam";
                            maxConnections = 633415;
                            maxConnectionsPerEndpoint = 222864;
                            maxConnectionsPerInstance = 307376;
                            maxRate = 80532;
                            maxRatePerEndpoint = 5372.79;
                            maxRatePerInstance = 853.11;
                            maxUtilization = 2745.75;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.CONNECTION;
                            capacityScaler = 86.89;
                            description = "architecto";
                            failover = false;
                            group = "sit";
                            maxConnections = 265039;
                            maxConnectionsPerEndpoint = 144286;
                            maxConnectionsPerInstance = 66149;
                            maxRate = 513760;
                            maxRatePerEndpoint = 656.04;
                            maxRatePerInstance = 2226.58;
                            maxUtilization = 8562.77;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 1621.2;
                            description = "ipsa";
                            failover = false;
                            group = "quas";
                            maxConnections = 911198;
                            maxConnectionsPerEndpoint = 773456;
                            maxConnectionsPerInstance = 884952;
                            maxRate = 456410;
                            maxRatePerEndpoint = 8972.77;
                            maxRatePerInstance = 1533.69;
                            maxUtilization = 3321.91;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "expedita";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("vel"),
                                add("voluptatum"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("exercitationem"),
                                add("ab"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("autem"),
                                add("nobis"),
                                add("laboriosam"),
                                add("recusandae"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("voluptatem"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.FORCE_CACHE_ALL;
                        clientTtl = 895692;
                        defaultTtl = 95619;
                        maxTtl = 392569;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 878373;
                                ttl = 667593;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 690785;
                                ttl = 192718;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 987349;
                                ttl = 918092;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 759283;
                                ttl = 579681;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 364544;
                        signedUrlCacheMaxAgeSec = "voluptate";
                        signedUrlKeyNames = new String[]{{
                            add("officia"),
                            add("voluptas"),
                            add("numquam"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        connectTimeout = new Duration() {{
                            nanos = 364912;
                            seconds = "quos";
                        }};;
                        maxConnections = 260904;
                        maxPendingRequests = 131903;
                        maxRequests = 495970;
                        maxRequestsPerConnection = 200516;
                        maxRetries = 681740;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.DISABLED;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 277340;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.ALWAYS_PERSIST;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 524380;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.PER_SESSION;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Elsie Cronin V";
                            path = "reiciendis";
                            ttl = new Duration() {{
                                nanos = 746837;
                                seconds = "alias";
                            }};;
                        }};;
                        httpHeaderName = "omnis";
                        minimumRingSize = "eos";
                    }};;
                    creationTimestamp = "occaecati";
                    customRequestHeaders = new String[]{{
                        add("magni"),
                        add("inventore"),
                        add("fuga"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("voluptatibus"),
                        add("distinctio"),
                        add("omnis"),
                        add("delectus"),
                    }};
                    description = "minima";
                    edgeSecurityPolicy = "praesentium";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 8026.92;
                    }};;
                    fingerprint = "magnam";
                    healthChecks = new String[]{{
                        add("quos"),
                        add("commodi"),
                        add("itaque"),
                        add("commodi"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "totam";
                        oauth2ClientSecret = "earum";
                        oauth2ClientSecretSha256 = "modi";
                    }};;
                    id = "nam";
                    kind = "vero";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.EXTERNAL;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "vel";
                                name = "Frances Franey";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.RANDOM;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "nulla";
                                name = "Claude Hickle";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.MAGLEV;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.RANDOM;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optionalFields = new String[]{{
                            add("impedit"),
                            add("hic"),
                            add("necessitatibus"),
                            add("asperiores"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.EXCLUDE_ALL_OPTIONAL;
                        sampleRate = 3767.41;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 895346;
                        seconds = "delectus";
                    }};;
                    name = "Alexandra Pfannerstill";
                    network = "velit";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 538869;
                            seconds = "ipsum";
                        }};;
                        consecutiveErrors = 773035;
                        consecutiveGatewayFailure = 166047;
                        enforcingConsecutiveErrors = 746585;
                        enforcingConsecutiveGatewayFailure = 922757;
                        enforcingSuccessRate = 721430;
                        interval = new Duration() {{
                            nanos = 294076;
                            seconds = "iusto";
                        }};;
                        maxEjectionPercent = 453094;
                        successRateMinimumHosts = 194023;
                        successRateRequestVolume = 493958;
                        successRateStdevFactor = 205566;
                    }};;
                    port = 778172;
                    portName = "deleniti";
                    protocol = BackendServiceProtocolEnum.UDP;
                    region = "iure";
                    securityPolicy = "odit";
                    securitySettings = new SecuritySettings() {{
                        authentication = "voluptatibus";
                        awsV4Authentication = new Awsv4Signature() {{
                            accessKey = "vel";
                            accessKeyId = "magnam";
                            accessKeyVersion = "quibusdam";
                            originRegion = "inventore";
                        }};;
                        clientTlsPolicy = "facere";
                        subjectAltNames = new String[]{{
                            add("architecto"),
                            add("voluptatibus"),
                            add("quia"),
                        }};
                    }};;
                    selfLink = "porro";
                    serviceBindings = new String[]{{
                        add("velit"),
                        add("illo"),
                    }};
                    sessionAffinity = BackendServiceSessionAffinityEnum.CLIENT_IP;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.CONSISTENT_HASH_SUBSETTING;
                        subsetSize = 406922;
                    }};;
                    timeoutSec = 107617;
                }};;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "eum";
                fields = "velit";
                key = "ut";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "earum";
                requestId = "dicta";
                uploadType = "impedit";
                uploadProtocol = "voluptatibus";
                userIp = "iste";
            }};            

            ComputeBackendServicesInsertResponse res = sdk.backendServices.computeBackendServicesInsert(req, new ComputeBackendServicesInsertSecurity() {{
                option1 = new ComputeBackendServicesInsertSecurityOption1("itaque", "alias") {{
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

            ComputeBackendServicesListRequest req = new ComputeBackendServicesListRequest("nisi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "velit";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "dolor";
                filter = "iusto";
                key = "sit";
                maxResults = 39992L;
                oauthToken = "consequatur";
                orderBy = "officia";
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "ea";
                returnPartialSuccess = false;
                uploadType = "quidem";
                uploadProtocol = "voluptas";
                userIp = "facilis";
            }};            

            ComputeBackendServicesListResponse res = sdk.backendServices.computeBackendServicesList(req, new ComputeBackendServicesListSecurity() {{
                option1 = new ComputeBackendServicesListSecurityOption1("placeat", "perspiciatis") {{
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
import org.openapis.openapi.models.shared.Awsv4Signature;
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

            ComputeBackendServicesPatchRequest req = new ComputeBackendServicesPatchRequest("expedita", "deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                backendService1 = new BackendService() {{
                    affinityCookieTtlSec = 455579;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 8975.43;
                            description = "animi";
                            failover = false;
                            group = "impedit";
                            maxConnections = 373040;
                            maxConnectionsPerEndpoint = 357425;
                            maxConnectionsPerInstance = 668234;
                            maxRate = 621666;
                            maxRatePerEndpoint = 4568.85;
                            maxRatePerInstance = 2885.7;
                            maxUtilization = 850.66;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.UTILIZATION;
                            capacityScaler = 2331.73;
                            description = "vitae";
                            failover = false;
                            group = "inventore";
                            maxConnections = 212434;
                            maxConnectionsPerEndpoint = 322017;
                            maxConnectionsPerInstance = 183033;
                            maxRate = 611328;
                            maxRatePerEndpoint = 4030.26;
                            maxRatePerInstance = 3676.26;
                            maxUtilization = 7452.33;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "rem";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "dolorum";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "odio";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("alias"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("vel"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("quae"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("neque"),
                                add("exercitationem"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.USE_ORIGIN_HEADERS;
                        clientTtl = 88248;
                        defaultTtl = 215398;
                        maxTtl = 602229;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 714376;
                                ttl = 802894;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 157222;
                                ttl = 159146;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 342137;
                                ttl = 605712;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 727250;
                                ttl = 115661;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 663318;
                        signedUrlCacheMaxAgeSec = "libero";
                        signedUrlKeyNames = new String[]{{
                            add("officia"),
                            add("quos"),
                            add("placeat"),
                            add("sit"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        connectTimeout = new Duration() {{
                            nanos = 479385;
                            seconds = "ipsa";
                        }};;
                        maxConnections = 914864;
                        maxPendingRequests = 80061;
                        maxRequests = 49348;
                        maxRequestsPerConnection = 517137;
                        maxRetries = 292888;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.DISABLED;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 715053;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.ALWAYS_PERSIST;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 418109;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.PER_CONNECTION;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Krystal Breitenberg";
                            path = "corrupti";
                            ttl = new Duration() {{
                                nanos = 473143;
                                seconds = "provident";
                            }};;
                        }};;
                        httpHeaderName = "accusamus";
                        minimumRingSize = "necessitatibus";
                    }};;
                    creationTimestamp = "tempore";
                    customRequestHeaders = new String[]{{
                        add("ea"),
                        add("autem"),
                        add("ipsam"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("laudantium"),
                        add("corporis"),
                        add("officiis"),
                    }};
                    description = "voluptatibus";
                    edgeSecurityPolicy = "cum";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 8723.03;
                    }};;
                    fingerprint = "alias";
                    healthChecks = new String[]{{
                        add("quidem"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "fuga";
                        oauth2ClientSecret = "repudiandae";
                        oauth2ClientSecretSha256 = "accusantium";
                    }};;
                    id = "expedita";
                    kind = "officiis";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.EXTERNAL_MANAGED;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "odio";
                                name = "Fred Champlin";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.WEIGHTED_MAGLEV;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "adipisci";
                                name = "Otis Grady";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.INVALID_LB_POLICY;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "unde";
                                name = "Lucia McDermott";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.MAGLEV;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "nesciunt";
                                name = "Oliver Kulas";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.MAGLEV;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.LEAST_REQUEST;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optionalFields = new String[]{{
                            add("voluptatum"),
                            add("cupiditate"),
                            add("minima"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.INCLUDE_ALL_OPTIONAL;
                        sampleRate = 3165.42;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 204072;
                        seconds = "in";
                    }};;
                    name = "Andre Gleichner";
                    network = "voluptates";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 978173;
                            seconds = "tempore";
                        }};;
                        consecutiveErrors = 46013;
                        consecutiveGatewayFailure = 727547;
                        enforcingConsecutiveErrors = 189753;
                        enforcingConsecutiveGatewayFailure = 289913;
                        enforcingSuccessRate = 520875;
                        interval = new Duration() {{
                            nanos = 577709;
                            seconds = "voluptas";
                        }};;
                        maxEjectionPercent = 779180;
                        successRateMinimumHosts = 242099;
                        successRateRequestVolume = 795591;
                        successRateStdevFactor = 684553;
                    }};;
                    port = 344530;
                    portName = "est";
                    protocol = BackendServiceProtocolEnum.UDP;
                    region = "delectus";
                    securityPolicy = "tempore";
                    securitySettings = new SecuritySettings() {{
                        authentication = "vero";
                        awsV4Authentication = new Awsv4Signature() {{
                            accessKey = "odit";
                            accessKeyId = "repellat";
                            accessKeyVersion = "pariatur";
                            originRegion = "nemo";
                        }};;
                        clientTlsPolicy = "reprehenderit";
                        subjectAltNames = new String[]{{
                            add("odio"),
                        }};
                    }};;
                    selfLink = "minima";
                    serviceBindings = new String[]{{
                        add("ducimus"),
                        add("excepturi"),
                    }};
                    sessionAffinity = BackendServiceSessionAffinityEnum.CLIENT_IP_NO_DESTINATION;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.NONE;
                        subsetSize = 85076;
                    }};;
                    timeoutSec = 498180;
                }};;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "itaque";
                fields = "similique";
                key = "optio";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "quaerat";
                requestId = "commodi";
                uploadType = "officiis";
                uploadProtocol = "placeat";
                userIp = "quidem";
            }};            

            ComputeBackendServicesPatchResponse res = sdk.backendServices.computeBackendServicesPatch(req, new ComputeBackendServicesPatchSecurity() {{
                option1 = new ComputeBackendServicesPatchSecurityOption1("exercitationem", "quam") {{
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

            ComputeBackendServicesSetEdgeSecurityPolicyRequest req = new ComputeBackendServicesSetEdgeSecurityPolicyRequest("dolorem", "modi") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyReference = new SecurityPolicyReference() {{
                    securityPolicy = "sint";
                }};;
                accessToken = "vero";
                alt = AltEnum.JSON;
                callback = "repudiandae";
                fields = "cum";
                key = "dicta";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "veniam";
                requestId = "animi";
                uploadType = "dolores";
                uploadProtocol = "nam";
                userIp = "dicta";
            }};            

            ComputeBackendServicesSetEdgeSecurityPolicyResponse res = sdk.backendServices.computeBackendServicesSetEdgeSecurityPolicy(req, new ComputeBackendServicesSetEdgeSecurityPolicySecurity() {{
                option1 = new ComputeBackendServicesSetEdgeSecurityPolicySecurityOption1("consequuntur", "necessitatibus") {{
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

            ComputeBackendServicesSetIamPolicyRequest req = new ComputeBackendServicesSetIamPolicyRequest("nobis", "ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "veritatis";
                            condition = new Expr() {{
                                description = "quasi";
                                expression = "laboriosam";
                                location = "pariatur";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("occaecati"),
                                add("nemo"),
                                add("aliquam"),
                            }};
                            role = "nostrum";
                        }}),
                        add(new Binding() {{
                            bindingId = "doloribus";
                            condition = new Expr() {{
                                description = "eligendi";
                                expression = "sint";
                                location = "enim";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("quas"),
                                add("totam"),
                                add("molestias"),
                            }};
                            role = "odio";
                        }}),
                        add(new Binding() {{
                            bindingId = "eaque";
                            condition = new Expr() {{
                                description = "saepe";
                                expression = "architecto";
                                location = "quos";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("tempore"),
                                add("libero"),
                                add("velit"),
                                add("doloremque"),
                            }};
                            role = "delectus";
                        }}),
                        add(new Binding() {{
                            bindingId = "impedit";
                            condition = new Expr() {{
                                description = "cum";
                                expression = "ipsum";
                                location = "adipisci";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("doloremque"),
                                add("quis"),
                                add("veniam"),
                            }};
                            role = "libero";
                        }}),
                    }};
                    etag = "architecto";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("possimus"),
                                            add("non"),
                                            add("magnam"),
                                            add("itaque"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("veniam"),
                                            add("consequuntur"),
                                            add("facere"),
                                            add("laudantium"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("amet"),
                                    add("exercitationem"),
                                    add("ab"),
                                    add("velit"),
                                }};
                                service = "facilis";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptatibus"),
                                            add("quaerat"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nisi"),
                                            add("quis"),
                                            add("nisi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("facere"),
                                            add("facilis"),
                                            add("ipsum"),
                                            add("ad"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("consequuntur"),
                                    add("debitis"),
                                    add("labore"),
                                    add("rerum"),
                                }};
                                service = "eos";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("neque"),
                                            add("iusto"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eligendi"),
                                            add("fugiat"),
                                            add("unde"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("dolor"),
                                    add("dicta"),
                                }};
                                service = "error";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "vitae";
                                condition = new Expr() {{
                                    description = "dignissimos";
                                    expression = "esse";
                                    location = "fugiat";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("enim"),
                                }};
                                role = "delectus";
                            }}),
                            add(new Binding() {{
                                bindingId = "iusto";
                                condition = new Expr() {{
                                    description = "dignissimos";
                                    expression = "libero";
                                    location = "illo";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("accusamus"),
                                    add("saepe"),
                                }};
                                role = "tempore";
                            }}),
                            add(new Binding() {{
                                bindingId = "veniam";
                                condition = new Expr() {{
                                    description = "eos";
                                    expression = "reiciendis";
                                    location = "earum";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("nemo"),
                                    add("repellat"),
                                    add("quisquam"),
                                }};
                                role = "sequi";
                            }}),
                            add(new Binding() {{
                                bindingId = "nihil";
                                condition = new Expr() {{
                                    description = "deleniti";
                                    expression = "illo";
                                    location = "labore";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("quisquam"),
                                    add("provident"),
                                }};
                                role = "laudantium";
                            }}),
                        }};
                        etag = "repudiandae";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "quas";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("rerum"),
                                            add("dignissimos"),
                                            add("corporis"),
                                            add("vero"),
                                        }};
                                    }}),
                                }};
                                description = "similique";
                                ins = new String[]{{
                                    add("iure"),
                                    add("dolorem"),
                                    add("commodi"),
                                    add("impedit"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Wendy Stanton";
                                                    value = "cum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Joyce Carroll DVM";
                                                    value = "iusto";
                                                }}),
                                            }};
                                            field = "amet";
                                            metric = "provident";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Vivian Kreiger";
                                                    value = "corrupti";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Bobbie Thompson";
                                                    value = "dicta";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Shannon Fahey";
                                                    value = "occaecati";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Albert Stroman";
                                                    value = "esse";
                                                }}),
                                            }};
                                            field = "voluptatem";
                                            metric = "perferendis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("aperiam"),
                                    add("dignissimos"),
                                }};
                                permissions = new String[]{{
                                    add("velit"),
                                    add("porro"),
                                    add("provident"),
                                    add("consectetur"),
                                }};
                            }}),
                        }};
                        version = 753240;
                    }};;
                }};;
                accessToken = "dignissimos";
                alt = AltEnum.JSON;
                callback = "soluta";
                fields = "natus";
                key = "temporibus";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "tenetur";
                uploadProtocol = "aspernatur";
                userIp = "quo";
            }};            

            ComputeBackendServicesSetIamPolicyResponse res = sdk.backendServices.computeBackendServicesSetIamPolicy(req, new ComputeBackendServicesSetIamPolicySecurity() {{
                option1 = new ComputeBackendServicesSetIamPolicySecurityOption1("itaque", "illum") {{
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

            ComputeBackendServicesSetSecurityPolicyRequest req = new ComputeBackendServicesSetSecurityPolicyRequest("laborum", "dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                securityPolicyReference = new SecurityPolicyReference() {{
                    securityPolicy = "qui";
                }};;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "explicabo";
                key = "exercitationem";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "non";
                requestId = "ab";
                uploadType = "illo";
                uploadProtocol = "hic";
                userIp = "deserunt";
            }};            

            ComputeBackendServicesSetSecurityPolicyResponse res = sdk.backendServices.computeBackendServicesSetSecurityPolicy(req, new ComputeBackendServicesSetSecurityPolicySecurity() {{
                option1 = new ComputeBackendServicesSetSecurityPolicySecurityOption1("delectus", "non") {{
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

## computeBackendServicesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendServicesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeBackendServicesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeBackendServicesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeBackendServicesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendServicesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeBackendServicesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendServicesTestIamPermissionsRequest req = new ComputeBackendServicesTestIamPermissionsRequest("distinctio", "in") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("numquam"),
                        add("repudiandae"),
                    }};
                }};;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                fields = "accusamus";
                key = "rem";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "deleniti";
                uploadProtocol = "enim";
                userIp = "voluptate";
            }};            

            ComputeBackendServicesTestIamPermissionsResponse res = sdk.backendServices.computeBackendServicesTestIamPermissions(req, new ComputeBackendServicesTestIamPermissionsSecurity() {{
                option1 = new ComputeBackendServicesTestIamPermissionsSecurityOption1("similique", "minima") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testPermissionsResponse != null) {
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
import org.openapis.openapi.models.shared.Awsv4Signature;
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

            ComputeBackendServicesUpdateRequest req = new ComputeBackendServicesUpdateRequest("libero", "magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                backendService1 = new BackendService() {{
                    affinityCookieTtlSec = 266788;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.CONNECTION;
                            capacityScaler = 6521.25;
                            description = "dignissimos";
                            failover = false;
                            group = "fugiat";
                            maxConnections = 345138;
                            maxConnectionsPerEndpoint = 475325;
                            maxConnectionsPerInstance = 330600;
                            maxRate = 969206;
                            maxRatePerEndpoint = 662.07;
                            maxRatePerInstance = 2656.32;
                            maxUtilization = 138.65;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.CONNECTION;
                            capacityScaler = 9116.57;
                            description = "odio";
                            failover = false;
                            group = "commodi";
                            maxConnections = 256114;
                            maxConnectionsPerEndpoint = 677045;
                            maxConnectionsPerInstance = 823718;
                            maxRate = 452399;
                            maxRatePerEndpoint = 2327.72;
                            maxRatePerInstance = 2006.37;
                            maxUtilization = 3106.29;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "minus";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "sunt";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "distinctio";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "iusto";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("et"),
                                add("facilis"),
                                add("amet"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("fuga"),
                                add("alias"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("aut"),
                                add("quos"),
                                add("laudantium"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("veritatis"),
                                add("quae"),
                                add("eaque"),
                                add("saepe"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.USE_ORIGIN_HEADERS;
                        clientTtl = 651228;
                        defaultTtl = 859003;
                        maxTtl = 640907;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 30208;
                                ttl = 664;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 910073;
                        signedUrlCacheMaxAgeSec = "hic";
                        signedUrlKeyNames = new String[]{{
                            add("incidunt"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        connectTimeout = new Duration() {{
                            nanos = 185448;
                            seconds = "qui";
                        }};;
                        maxConnections = 895912;
                        maxPendingRequests = 691508;
                        maxRequests = 126727;
                        maxRequestsPerConnection = 108903;
                        maxRetries = 397988;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.AUTOMATIC;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 760049;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.NEVER_PERSIST;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 562948;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.PER_CONNECTION;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Everett Dickinson";
                            path = "impedit";
                            ttl = new Duration() {{
                                nanos = 498388;
                                seconds = "odit";
                            }};;
                        }};;
                        httpHeaderName = "velit";
                        minimumRingSize = "reiciendis";
                    }};;
                    creationTimestamp = "repellat";
                    customRequestHeaders = new String[]{{
                        add("laborum"),
                        add("natus"),
                        add("accusamus"),
                        add("doloremque"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("rerum"),
                        add("recusandae"),
                    }};
                    description = "voluptates";
                    edgeSecurityPolicy = "non";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 5245.77;
                    }};;
                    fingerprint = "quia";
                    healthChecks = new String[]{{
                        add("quisquam"),
                        add("dicta"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "voluptatibus";
                        oauth2ClientSecret = "eligendi";
                        oauth2ClientSecretSha256 = "quae";
                    }};;
                    id = "officiis";
                    kind = "architecto";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.EXTERNAL;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "optio";
                                name = "Joseph Purdy";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.RANDOM;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "dicta";
                                name = "Dan Grimes";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.ROUND_ROBIN;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.MAGLEV;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optionalFields = new String[]{{
                            add("assumenda"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.INCLUDE_ALL_OPTIONAL;
                        sampleRate = 9851.09;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 773711;
                        seconds = "porro";
                    }};;
                    name = "Ms. Jimmie Wisozk";
                    network = "esse";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 438256;
                            seconds = "odio";
                        }};;
                        consecutiveErrors = 202796;
                        consecutiveGatewayFailure = 895513;
                        enforcingConsecutiveErrors = 423588;
                        enforcingConsecutiveGatewayFailure = 208683;
                        enforcingSuccessRate = 357758;
                        interval = new Duration() {{
                            nanos = 375350;
                            seconds = "consequuntur";
                        }};;
                        maxEjectionPercent = 641133;
                        successRateMinimumHosts = 441374;
                        successRateRequestVolume = 716033;
                        successRateStdevFactor = 262800;
                    }};;
                    port = 56372;
                    portName = "rem";
                    protocol = BackendServiceProtocolEnum.UNSPECIFIED;
                    region = "accusantium";
                    securityPolicy = "veniam";
                    securitySettings = new SecuritySettings() {{
                        authentication = "saepe";
                        awsV4Authentication = new Awsv4Signature() {{
                            accessKey = "neque";
                            accessKeyId = "facere";
                            accessKeyVersion = "aliquam";
                            originRegion = "quos";
                        }};;
                        clientTlsPolicy = "doloribus";
                        subjectAltNames = new String[]{{
                            add("est"),
                            add("delectus"),
                            add("velit"),
                            add("vitae"),
                        }};
                    }};;
                    selfLink = "nesciunt";
                    serviceBindings = new String[]{{
                        add("illo"),
                        add("repellat"),
                        add("nemo"),
                    }};
                    sessionAffinity = BackendServiceSessionAffinityEnum.NONE;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.NONE;
                        subsetSize = 603323;
                    }};;
                    timeoutSec = 275425;
                }};;
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "optio";
                key = "alias";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "nesciunt";
                requestId = "commodi";
                uploadType = "sapiente";
                uploadProtocol = "consequuntur";
                userIp = "veniam";
            }};            

            ComputeBackendServicesUpdateResponse res = sdk.backendServices.computeBackendServicesUpdate(req, new ComputeBackendServicesUpdateSecurity() {{
                option1 = new ComputeBackendServicesUpdateSecurityOption1("debitis", "officia") {{
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
