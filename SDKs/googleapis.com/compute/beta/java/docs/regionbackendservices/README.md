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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionBackendServicesDeleteRequest req = new ComputeRegionBackendServicesDeleteRequest("quibusdam", "eos", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "vero";
                fields = "doloremque";
                key = "ullam";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "nemo";
                requestId = "veniam";
                uploadType = "unde";
                uploadProtocol = "dolores";
                userIp = "distinctio";
            }};            

            ComputeRegionBackendServicesDeleteResponse res = sdk.regionBackendServices.computeRegionBackendServicesDelete(req, new ComputeRegionBackendServicesDeleteSecurity() {{
                option1 = new ComputeRegionBackendServicesDeleteSecurityOption1("tenetur", "quo") {{
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

## computeRegionBackendServicesGet

Returns the specified regional BackendService resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionBackendServicesGetRequest req = new ComputeRegionBackendServicesGetRequest("odio", "nesciunt", "molestias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "eos";
                key = "qui";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "corporis";
                uploadProtocol = "molestias";
                userIp = "magnam";
            }};            

            ComputeRegionBackendServicesGetResponse res = sdk.regionBackendServices.computeRegionBackendServicesGet(req, new ComputeRegionBackendServicesGetSecurity() {{
                option1 = new ComputeRegionBackendServicesGetSecurityOption1("commodi", "deserunt") {{
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

## computeRegionBackendServicesGetHealth

Gets the most recent health check results for this regional BackendService.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetHealthRequest;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetHealthResponse;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetHealthSecurity;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetHealthSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetHealthSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetHealthSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ResourceGroupReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionBackendServicesGetHealthRequest req = new ComputeRegionBackendServicesGetHealthRequest("vitae", "tempore", "cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                resourceGroupReference = new ResourceGroupReference() {{
                    group = "reprehenderit";
                }};;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "magnam";
                key = "earum";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "quaerat";
                uploadProtocol = "accusantium";
                userIp = "nesciunt";
            }};            

            ComputeRegionBackendServicesGetHealthResponse res = sdk.regionBackendServices.computeRegionBackendServicesGetHealth(req, new ComputeRegionBackendServicesGetHealthSecurity() {{
                option1 = new ComputeRegionBackendServicesGetHealthSecurityOption1("ea", "praesentium") {{
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

## computeRegionBackendServicesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionBackendServicesGetIamPolicyRequest req = new ComputeRegionBackendServicesGetIamPolicyRequest("voluptates", "assumenda", "velit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tenetur";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "nobis";
                key = "recusandae";
                oauthToken = "culpa";
                optionsRequestedPolicyVersion = 744505L;
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "quas";
                uploadProtocol = "ipsa";
                userIp = "vitae";
            }};            

            ComputeRegionBackendServicesGetIamPolicyResponse res = sdk.regionBackendServices.computeRegionBackendServicesGetIamPolicy(req, new ComputeRegionBackendServicesGetIamPolicySecurity() {{
                option1 = new ComputeRegionBackendServicesGetIamPolicySecurityOption1("consequuntur", "modi") {{
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

## computeRegionBackendServicesInsert

Creates a regional BackendService resource in the specified project using the data included in the request. For more information, see Backend services overview.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesInsertSecurityOption2;
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

            ComputeRegionBackendServicesInsertRequest req = new ComputeRegionBackendServicesInsertRequest("ad", "perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                backendService = new BackendService() {{
                    affinityCookieTtlSec = 306690;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.UTILIZATION;
                            capacityScaler = 6406.35;
                            description = "suscipit";
                            failover = false;
                            group = "autem";
                            maxConnections = 490366;
                            maxConnectionsPerEndpoint = 417340;
                            maxConnectionsPerInstance = 438583;
                            maxRate = 877279;
                            maxRatePerEndpoint = 1732.18;
                            maxRatePerInstance = 6119.02;
                            maxUtilization = 8313.01;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.CONNECTION;
                            capacityScaler = 8761.44;
                            description = "ad";
                            failover = false;
                            group = "modi";
                            maxConnections = 200824;
                            maxConnectionsPerEndpoint = 800662;
                            maxConnectionsPerInstance = 264643;
                            maxRate = 846880;
                            maxRatePerEndpoint = 6701.62;
                            maxRatePerInstance = 3207.58;
                            maxUtilization = 6377.64;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.UTILIZATION;
                            capacityScaler = 2616.46;
                            description = "necessitatibus";
                            failover = false;
                            group = "atque";
                            maxConnections = 708873;
                            maxConnectionsPerEndpoint = 860632;
                            maxConnectionsPerInstance = 750026;
                            maxRate = 268379;
                            maxRatePerEndpoint = 4558.08;
                            maxRatePerInstance = 248.96;
                            maxUtilization = 5399.56;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "nesciunt";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "hic";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("perferendis"),
                                add("rem"),
                                add("sunt"),
                                add("deserunt"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("asperiores"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("voluptatibus"),
                                add("maiores"),
                                add("necessitatibus"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("velit"),
                                add("et"),
                                add("laborum"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.FORCE_CACHE_ALL;
                        clientTtl = 553901;
                        defaultTtl = 783071;
                        maxTtl = 275071;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 417117;
                                ttl = 295840;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 805490;
                        signedUrlCacheMaxAgeSec = "est";
                        signedUrlKeyNames = new String[]{{
                            add("enim"),
                            add("veritatis"),
                            add("libero"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        connectTimeout = new Duration() {{
                            nanos = 136723;
                            seconds = "minus";
                        }};;
                        maxConnections = 99;
                        maxPendingRequests = 830782;
                        maxRequests = 58322;
                        maxRequestsPerConnection = 551267;
                        maxRetries = 784256;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.AUTOMATIC;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 734704;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.DEFAULT_FOR_PROTOCOL;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 195016;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.INVALID_TRACKING_MODE;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Gladys Schiller";
                            path = "facere";
                            ttl = new Duration() {{
                                nanos = 445430;
                                seconds = "ea";
                            }};;
                        }};;
                        httpHeaderName = "odit";
                        minimumRingSize = "nihil";
                    }};;
                    creationTimestamp = "vitae";
                    customRequestHeaders = new String[]{{
                        add("nihil"),
                        add("voluptate"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("amet"),
                        add("deleniti"),
                    }};
                    description = "ipsum";
                    edgeSecurityPolicy = "in";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 8327.79;
                    }};;
                    fingerprint = "ab";
                    healthChecks = new String[]{{
                        add("mollitia"),
                        add("voluptatibus"),
                        add("earum"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "consequuntur";
                        oauth2ClientSecret = "facilis";
                        oauth2ClientSecretSha256 = "recusandae";
                    }};;
                    id = "quisquam";
                    kind = "cumque";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.EXTERNAL_MANAGED;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "rerum";
                                name = "Emmett Smitham";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.INVALID_LB_POLICY;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "deserunt";
                                name = "Jan Schmeler";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.INVALID_LB_POLICY;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "optio";
                                name = "Martin Wiza";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.RANDOM;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.INVALID_LB_POLICY;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optionalFields = new String[]{{
                            add("libero"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.EXCLUDE_ALL_OPTIONAL;
                        sampleRate = 3091.46;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 242481;
                        seconds = "repudiandae";
                    }};;
                    name = "Shawn Osinski";
                    network = "sit";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 707937;
                            seconds = "iure";
                        }};;
                        consecutiveErrors = 809734;
                        consecutiveGatewayFailure = 190003;
                        enforcingConsecutiveErrors = 110664;
                        enforcingConsecutiveGatewayFailure = 597092;
                        enforcingSuccessRate = 5960;
                        interval = new Duration() {{
                            nanos = 746187;
                            seconds = "veritatis";
                        }};;
                        maxEjectionPercent = 279840;
                        successRateMinimumHosts = 311000;
                        successRateRequestVolume = 133731;
                        successRateStdevFactor = 311100;
                    }};;
                    port = 119743;
                    portName = "cum";
                    protocol = BackendServiceProtocolEnum.HTTP2;
                    region = "in";
                    securityPolicy = "assumenda";
                    securitySettings = new SecuritySettings() {{
                        authentication = "consequatur";
                        awsV4Authentication = new Awsv4Signature() {{
                            accessKey = "eum";
                            accessKeyId = "esse";
                            accessKeyVersion = "sequi";
                            originRegion = "distinctio";
                        }};;
                        clientTlsPolicy = "ut";
                        subjectAltNames = new String[]{{
                            add("exercitationem"),
                        }};
                    }};;
                    selfLink = "deleniti";
                    serviceBindings = new String[]{{
                        add("ullam"),
                    }};
                    sessionAffinity = BackendServiceSessionAffinityEnum.GENERATED_COOKIE;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.CONSISTENT_HASH_SUBSETTING;
                        subsetSize = 569477;
                    }};;
                    timeoutSec = 125319;
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "quaerat";
                key = "velit";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "quia";
                requestId = "amet";
                uploadType = "saepe";
                uploadProtocol = "corporis";
                userIp = "assumenda";
            }};            

            ComputeRegionBackendServicesInsertResponse res = sdk.regionBackendServices.computeRegionBackendServicesInsert(req, new ComputeRegionBackendServicesInsertSecurity() {{
                option1 = new ComputeRegionBackendServicesInsertSecurityOption1("temporibus", "consequatur") {{
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

## computeRegionBackendServicesList

Retrieves the list of regional BackendService resources available to the specified project in the given region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesListRequest;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesListResponse;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionBackendServicesListRequest req = new ComputeRegionBackendServicesListRequest("necessitatibus", "sit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "temporibus";
                fields = "asperiores";
                filter = "recusandae";
                key = "explicabo";
                maxResults = 193960L;
                oauthToken = "rem";
                orderBy = "placeat";
                pageToken = "voluptates";
                prettyPrint = false;
                quotaUser = "commodi";
                returnPartialSuccess = false;
                uploadType = "sint";
                uploadProtocol = "mollitia";
                userIp = "illo";
            }};            

            ComputeRegionBackendServicesListResponse res = sdk.regionBackendServices.computeRegionBackendServicesList(req, new ComputeRegionBackendServicesListSecurity() {{
                option1 = new ComputeRegionBackendServicesListSecurityOption1("enim", "fugiat") {{
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

## computeRegionBackendServicesPatch

Updates the specified regional BackendService resource with the data included in the request. For more information, see Understanding backend services This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesPatchRequest;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesPatchResponse;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesPatchSecurityOption2;
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

            ComputeRegionBackendServicesPatchRequest req = new ComputeRegionBackendServicesPatchRequest("sunt", "iure", "facilis") {{
                dollarXgafv = XgafvEnum.ONE;
                backendService1 = new BackendService() {{
                    affinityCookieTtlSec = 308069;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.CONNECTION;
                            capacityScaler = 1833.78;
                            description = "delectus";
                            failover = false;
                            group = "reiciendis";
                            maxConnections = 428795;
                            maxConnectionsPerEndpoint = 189413;
                            maxConnectionsPerInstance = 99307;
                            maxRate = 939558;
                            maxRatePerEndpoint = 8124.27;
                            maxRatePerInstance = 5338.41;
                            maxUtilization = 8486.05;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.UTILIZATION;
                            capacityScaler = 3013.5;
                            description = "corrupti";
                            failover = false;
                            group = "fuga";
                            maxConnections = 864677;
                            maxConnectionsPerEndpoint = 120236;
                            maxConnectionsPerInstance = 115484;
                            maxRate = 387081;
                            maxRatePerEndpoint = 6692.42;
                            maxRatePerInstance = 2215.17;
                            maxUtilization = 9859.05;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.CONNECTION;
                            capacityScaler = 4678.65;
                            description = "delectus";
                            failover = false;
                            group = "quam";
                            maxConnections = 34675;
                            maxConnectionsPerEndpoint = 32072;
                            maxConnectionsPerInstance = 550733;
                            maxRate = 669903;
                            maxRatePerEndpoint = 6364.04;
                            maxRatePerInstance = 9659.89;
                            maxUtilization = 3338.48;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "velit";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("minus"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("dolores"),
                                add("esse"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("sequi"),
                                add("repellat"),
                                add("impedit"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("non"),
                                add("vel"),
                                add("sed"),
                                add("fuga"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.USE_ORIGIN_HEADERS;
                        clientTtl = 588469;
                        defaultTtl = 260637;
                        maxTtl = 652110;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 311435;
                                ttl = 277632;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 504987;
                                ttl = 105826;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 76448;
                                ttl = 542694;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 231987;
                                ttl = 475920;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 399739;
                        signedUrlCacheMaxAgeSec = "corporis";
                        signedUrlKeyNames = new String[]{{
                            add("eum"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        connectTimeout = new Duration() {{
                            nanos = 159487;
                            seconds = "optio";
                        }};;
                        maxConnections = 178274;
                        maxPendingRequests = 822417;
                        maxRequests = 551520;
                        maxRequestsPerConnection = 110541;
                        maxRetries = 452420;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.AUTOMATIC;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 622061;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.DEFAULT_FOR_PROTOCOL;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 980988;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.INVALID_TRACKING_MODE;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Tracy Fahey";
                            path = "ducimus";
                            ttl = new Duration() {{
                                nanos = 197432;
                                seconds = "impedit";
                            }};;
                        }};;
                        httpHeaderName = "quo";
                        minimumRingSize = "distinctio";
                    }};;
                    creationTimestamp = "ducimus";
                    customRequestHeaders = new String[]{{
                        add("vitae"),
                        add("veritatis"),
                        add("vero"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("aliquid"),
                    }};
                    description = "ex";
                    edgeSecurityPolicy = "omnis";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 9584.47;
                    }};;
                    fingerprint = "voluptatibus";
                    healthChecks = new String[]{{
                        add("cupiditate"),
                        add("minus"),
                        add("praesentium"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "asperiores";
                        oauth2ClientSecret = "eveniet";
                        oauth2ClientSecretSha256 = "ab";
                    }};;
                    id = "debitis";
                    kind = "molestiae";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.INTERNAL;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "fuga";
                                name = "Lorenzo Lehner";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.LEAST_REQUEST;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "aliquam";
                                name = "Tomas Bashirian";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.LEAST_REQUEST;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "optio";
                                name = "Malcolm Gulgowski";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.WEIGHTED_MAGLEV;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.INVALID_LB_POLICY;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optionalFields = new String[]{{
                            add("quaerat"),
                            add("laborum"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.INCLUDE_ALL_OPTIONAL;
                        sampleRate = 9745.76;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 837171;
                        seconds = "fugiat";
                    }};;
                    name = "Lyle Ritchie";
                    network = "soluta";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 133610;
                            seconds = "ipsa";
                        }};;
                        consecutiveErrors = 28043;
                        consecutiveGatewayFailure = 23181;
                        enforcingConsecutiveErrors = 740141;
                        enforcingConsecutiveGatewayFailure = 753618;
                        enforcingSuccessRate = 493460;
                        interval = new Duration() {{
                            nanos = 129523;
                            seconds = "incidunt";
                        }};;
                        maxEjectionPercent = 811886;
                        successRateMinimumHosts = 452773;
                        successRateRequestVolume = 394467;
                        successRateStdevFactor = 321635;
                    }};;
                    port = 951520;
                    portName = "laborum";
                    protocol = BackendServiceProtocolEnum.GRPC;
                    region = "aliquam";
                    securityPolicy = "blanditiis";
                    securitySettings = new SecuritySettings() {{
                        authentication = "eaque";
                        awsV4Authentication = new Awsv4Signature() {{
                            accessKey = "tempora";
                            accessKeyId = "impedit";
                            accessKeyVersion = "architecto";
                            originRegion = "consequatur";
                        }};;
                        clientTlsPolicy = "atque";
                        subjectAltNames = new String[]{{
                            add("consequatur"),
                        }};
                    }};;
                    selfLink = "iure";
                    serviceBindings = new String[]{{
                        add("occaecati"),
                    }};
                    sessionAffinity = BackendServiceSessionAffinityEnum.CLIENT_IP_PROTO;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.NONE;
                        subsetSize = 346168;
                    }};;
                    timeoutSec = 702989;
                }};;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "iure";
                key = "ad";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "eveniet";
                requestId = "neque";
                uploadType = "dolores";
                uploadProtocol = "nisi";
                userIp = "error";
            }};            

            ComputeRegionBackendServicesPatchResponse res = sdk.regionBackendServices.computeRegionBackendServicesPatch(req, new ComputeRegionBackendServicesPatchSecurity() {{
                option1 = new ComputeRegionBackendServicesPatchSecurityOption1("nemo", "aliquid") {{
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

## computeRegionBackendServicesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesSetIamPolicySecurityOption2;
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
import org.openapis.openapi.models.shared.LogConfig;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptions;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptionsLogNameEnum;
import org.openapis.openapi.models.shared.LogConfigCounterOptions;
import org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptions;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptionsLogModeEnum;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.RegionSetPolicyRequest;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionBackendServicesSetIamPolicyRequest req = new ComputeRegionBackendServicesSetIamPolicyRequest("optio", "quae", "nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "repellat";
                            condition = new Expr() {{
                                description = "doloribus";
                                expression = "autem";
                                location = "dolorem";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("temporibus"),
                                add("dolores"),
                            }};
                            role = "quisquam";
                        }}),
                        add(new Binding() {{
                            bindingId = "adipisci";
                            condition = new Expr() {{
                                description = "blanditiis";
                                expression = "omnis";
                                location = "ut";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("veniam"),
                                add("at"),
                            }};
                            role = "quas";
                        }}),
                        add(new Binding() {{
                            bindingId = "illo";
                            condition = new Expr() {{
                                description = "magnam";
                                expression = "provident";
                                location = "deserunt";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("dignissimos"),
                                add("iure"),
                                add("maxime"),
                            }};
                            role = "saepe";
                        }}),
                        add(new Binding() {{
                            bindingId = "sed";
                            condition = new Expr() {{
                                description = "vitae";
                                expression = "doloribus";
                                location = "labore";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("assumenda"),
                                add("dolores"),
                            }};
                            role = "magni";
                        }}),
                    }};
                    etag = "impedit";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sequi"),
                                            add("minus"),
                                            add("similique"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("fuga"),
                                            add("pariatur"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("rerum"),
                                }};
                                service = "occaecati";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("esse"),
                                            add("modi"),
                                            add("amet"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("totam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("optio"),
                                            add("excepturi"),
                                            add("exercitationem"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ducimus"),
                                            add("explicabo"),
                                            add("neque"),
                                            add("laborum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("praesentium"),
                                }};
                                service = "perspiciatis";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("maxime"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("minus"),
                                            add("suscipit"),
                                            add("commodi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("repudiandae"),
                                            add("consectetur"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("deleniti"),
                                            add("nihil"),
                                            add("totam"),
                                            add("eligendi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("necessitatibus"),
                                    add("fugit"),
                                    add("ea"),
                                }};
                                service = "magni";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quaerat"),
                                            add("nulla"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("a"),
                                            add("officiis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("error"),
                                    add("facilis"),
                                    add("vero"),
                                }};
                                service = "ut";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "aperiam";
                                condition = new Expr() {{
                                    description = "temporibus";
                                    expression = "voluptate";
                                    location = "corporis";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("quis"),
                                    add("vitae"),
                                    add("a"),
                                }};
                                role = "nostrum";
                            }}),
                            add(new Binding() {{
                                bindingId = "officia";
                                condition = new Expr() {{
                                    description = "molestias";
                                    expression = "asperiores";
                                    location = "blanditiis";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("praesentium"),
                                    add("distinctio"),
                                    add("consequuntur"),
                                    add("in"),
                                }};
                                role = "mollitia";
                            }}),
                        }};
                        etag = "ratione";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "reprehenderit";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("non"),
                                            add("eveniet"),
                                            add("sit"),
                                            add("nesciunt"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "voluptate";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("repellendus"),
                                        }};
                                    }}),
                                }};
                                description = "totam";
                                ins = new String[]{{
                                    add("vitae"),
                                    add("nulla"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Mary Spencer PhD";
                                                    value = "vero";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Madeline Mayert";
                                                    value = "repellat";
                                                }}),
                                            }};
                                            field = "perspiciatis";
                                            metric = "ipsam";
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
                                                    name = "Jake Nolan";
                                                    value = "est";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sheryl Williamson";
                                                    value = "facilis";
                                                }}),
                                            }};
                                            field = "ut";
                                            metric = "veritatis";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Herbert Schumm";
                                                    value = "fuga";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Alma Simonis";
                                                    value = "fugit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Johanna Strosin";
                                                    value = "a";
                                                }}),
                                            }};
                                            field = "culpa";
                                            metric = "consequatur";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
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
                                                    name = "Dewey Gutmann";
                                                    value = "voluptatum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Francis Bradtke";
                                                    value = "iste";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Woodrow Rosenbaum III";
                                                    value = "nihil";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Francis Bogisich III";
                                                    value = "veniam";
                                                }}),
                                            }};
                                            field = "eos";
                                            metric = "quibusdam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("veniam"),
                                }};
                                permissions = new String[]{{
                                    add("ut"),
                                    add("vero"),
                                }};
                            }}),
                        }};
                        version = 367728;
                    }};;
                }};;
                accessToken = "molestias";
                alt = AltEnum.JSON;
                callback = "eaque";
                fields = "amet";
                key = "similique";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "asperiores";
                uploadProtocol = "harum";
                userIp = "commodi";
            }};            

            ComputeRegionBackendServicesSetIamPolicyResponse res = sdk.regionBackendServices.computeRegionBackendServicesSetIamPolicy(req, new ComputeRegionBackendServicesSetIamPolicySecurity() {{
                option1 = new ComputeRegionBackendServicesSetIamPolicySecurityOption1("temporibus", "commodi") {{
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

## computeRegionBackendServicesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionBackendServicesTestIamPermissionsRequest req = new ComputeRegionBackendServicesTestIamPermissionsRequest("distinctio", "ut", "labore") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("nulla"),
                    }};
                }};;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "repellat";
                key = "consequuntur";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "quibusdam";
                uploadProtocol = "error";
                userIp = "doloremque";
            }};            

            ComputeRegionBackendServicesTestIamPermissionsResponse res = sdk.regionBackendServices.computeRegionBackendServicesTestIamPermissions(req, new ComputeRegionBackendServicesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionBackendServicesTestIamPermissionsSecurityOption1("neque", "eligendi") {{
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

## computeRegionBackendServicesUpdate

Updates the specified regional BackendService resource with the data included in the request. For more information, see Backend services overview .

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesUpdateRequest;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesUpdateResponse;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesUpdateSecurityOption2;
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

            ComputeRegionBackendServicesUpdateRequest req = new ComputeRegionBackendServicesUpdateRequest("ratione", "natus", "error") {{
                dollarXgafv = XgafvEnum.TWO;
                backendService1 = new BackendService() {{
                    affinityCookieTtlSec = 164098;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.UTILIZATION;
                            capacityScaler = 2204.74;
                            description = "harum";
                            failover = false;
                            group = "corporis";
                            maxConnections = 335492;
                            maxConnectionsPerEndpoint = 552589;
                            maxConnectionsPerInstance = 433072;
                            maxRate = 336087;
                            maxRatePerEndpoint = 2341.62;
                            maxRatePerInstance = 8646.25;
                            maxUtilization = 142.86;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 8049.37;
                            description = "alias";
                            failover = false;
                            group = "aliquid";
                            maxConnections = 911003;
                            maxConnectionsPerEndpoint = 643937;
                            maxConnectionsPerInstance = 522192;
                            maxRate = 276590;
                            maxRatePerEndpoint = 6860.35;
                            maxRatePerInstance = 7461.64;
                            maxUtilization = 5087.21;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.CONNECTION;
                            capacityScaler = 6141.11;
                            description = "facilis";
                            failover = false;
                            group = "maiores";
                            maxConnections = 803731;
                            maxConnectionsPerEndpoint = 441796;
                            maxConnectionsPerInstance = 3835;
                            maxRate = 697969;
                            maxRatePerEndpoint = 1993.6;
                            maxRatePerInstance = 8594.3;
                            maxUtilization = 9223.03;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.CONNECTION;
                            capacityScaler = 43.8;
                            description = "occaecati";
                            failover = false;
                            group = "architecto";
                            maxConnections = 458572;
                            maxConnectionsPerEndpoint = 36970;
                            maxConnectionsPerInstance = 992175;
                            maxRate = 934637;
                            maxRatePerEndpoint = 9369.74;
                            maxRatePerInstance = 2979.29;
                            maxUtilization = 1862.03;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "quasi";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("voluptate"),
                                add("quibusdam"),
                                add("perferendis"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("ducimus"),
                                add("magni"),
                                add("cum"),
                                add("ab"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("soluta"),
                                add("delectus"),
                                add("odit"),
                                add("voluptates"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("voluptates"),
                                add("odio"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.FORCE_CACHE_ALL;
                        clientTtl = 251911;
                        defaultTtl = 386586;
                        maxTtl = 571890;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 369747;
                                ttl = 467146;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 769639;
                                ttl = 150561;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 147232;
                                ttl = 454269;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 41491;
                                ttl = 369920;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 638848;
                        signedUrlCacheMaxAgeSec = "veritatis";
                        signedUrlKeyNames = new String[]{{
                            add("exercitationem"),
                            add("totam"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        connectTimeout = new Duration() {{
                            nanos = 959221;
                            seconds = "enim";
                        }};;
                        maxConnections = 926475;
                        maxPendingRequests = 800352;
                        maxRequests = 969138;
                        maxRequestsPerConnection = 240790;
                        maxRetries = 571683;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.DISABLED;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 105895;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.ALWAYS_PERSIST;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 226988;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.PER_SESSION;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Lula Dickens";
                            path = "itaque";
                            ttl = new Duration() {{
                                nanos = 204017;
                                seconds = "voluptates";
                            }};;
                        }};;
                        httpHeaderName = "voluptas";
                        minimumRingSize = "consequuntur";
                    }};;
                    creationTimestamp = "et";
                    customRequestHeaders = new String[]{{
                        add("accusantium"),
                        add("eius"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("excepturi"),
                        add("optio"),
                        add("temporibus"),
                        add("iure"),
                    }};
                    description = "ullam";
                    edgeSecurityPolicy = "magni";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 5168.93;
                    }};;
                    fingerprint = "maiores";
                    healthChecks = new String[]{{
                        add("iure"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "sit";
                        oauth2ClientSecret = "corrupti";
                        oauth2ClientSecretSha256 = "nemo";
                    }};;
                    id = "illo";
                    kind = "nobis";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.EXTERNAL_MANAGED;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "eius";
                                name = "Christina Considine I";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.RING_HASH;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.INVALID_LB_POLICY;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optionalFields = new String[]{{
                            add("doloribus"),
                            add("et"),
                            add("hic"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.INCLUDE_ALL_OPTIONAL;
                        sampleRate = 7229.47;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 182383;
                        seconds = "quibusdam";
                    }};;
                    name = "Mr. Howard Koelpin";
                    network = "nam";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 358485;
                            seconds = "est";
                        }};;
                        consecutiveErrors = 322776;
                        consecutiveGatewayFailure = 957158;
                        enforcingConsecutiveErrors = 688695;
                        enforcingConsecutiveGatewayFailure = 111435;
                        enforcingSuccessRate = 757041;
                        interval = new Duration() {{
                            nanos = 626434;
                            seconds = "iste";
                        }};;
                        maxEjectionPercent = 891850;
                        successRateMinimumHosts = 95287;
                        successRateRequestVolume = 824482;
                        successRateStdevFactor = 365272;
                    }};;
                    port = 885511;
                    portName = "aut";
                    protocol = BackendServiceProtocolEnum.GRPC;
                    region = "quasi";
                    securityPolicy = "ab";
                    securitySettings = new SecuritySettings() {{
                        authentication = "libero";
                        awsV4Authentication = new Awsv4Signature() {{
                            accessKey = "facere";
                            accessKeyId = "tempora";
                            accessKeyVersion = "pariatur";
                            originRegion = "consequuntur";
                        }};;
                        clientTlsPolicy = "repellat";
                        subjectAltNames = new String[]{{
                            add("maiores"),
                            add("possimus"),
                            add("vitae"),
                            add("fuga"),
                        }};
                    }};;
                    selfLink = "eum";
                    serviceBindings = new String[]{{
                        add("ipsam"),
                        add("magni"),
                    }};
                    sessionAffinity = BackendServiceSessionAffinityEnum.CLIENT_IP_PORT_PROTO;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.NONE;
                        subsetSize = 820436;
                    }};;
                    timeoutSec = 926540;
                }};;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "doloribus";
                fields = "non";
                key = "facilis";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "mollitia";
                requestId = "blanditiis";
                uploadType = "debitis";
                uploadProtocol = "impedit";
                userIp = "sed";
            }};            

            ComputeRegionBackendServicesUpdateResponse res = sdk.regionBackendServices.computeRegionBackendServicesUpdate(req, new ComputeRegionBackendServicesUpdateSecurity() {{
                option1 = new ComputeRegionBackendServicesUpdateSecurityOption1("maiores", "facere") {{
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
