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

            ComputeRegionBackendServicesDeleteRequest req = new ComputeRegionBackendServicesDeleteRequest("occaecati", "molestiae", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "distinctio";
                fields = "ducimus";
                key = "sint";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "explicabo";
                requestId = "tempore";
                uploadType = "est";
                uploadProtocol = "sapiente";
                userIp = "provident";
            }};            

            ComputeRegionBackendServicesDeleteResponse res = sdk.regionBackendServices.computeRegionBackendServicesDelete(req, new ComputeRegionBackendServicesDeleteSecurity() {{
                option1 = new ComputeRegionBackendServicesDeleteSecurityOption1("animi", "quam") {{
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

            ComputeRegionBackendServicesGetRequest req = new ComputeRegionBackendServicesGetRequest("illum", "animi", "ex") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eos";
                alt = AltEnum.MEDIA;
                callback = "facilis";
                fields = "perspiciatis";
                key = "velit";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "exercitationem";
                uploadProtocol = "inventore";
                userIp = "similique";
            }};            

            ComputeRegionBackendServicesGetResponse res = sdk.regionBackendServices.computeRegionBackendServicesGet(req, new ComputeRegionBackendServicesGetSecurity() {{
                option1 = new ComputeRegionBackendServicesGetSecurityOption1("molestiae", "necessitatibus") {{
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

            ComputeRegionBackendServicesGetHealthRequest req = new ComputeRegionBackendServicesGetHealthRequest("iure", "accusamus", "nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                resourceGroupReference = new ResourceGroupReference() {{
                    group = "reiciendis";
                }};;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "asperiores";
                fields = "eaque";
                key = "modi";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "est";
                uploadProtocol = "perferendis";
                userIp = "non";
            }};            

            ComputeRegionBackendServicesGetHealthResponse res = sdk.regionBackendServices.computeRegionBackendServicesGetHealth(req, new ComputeRegionBackendServicesGetHealthSecurity() {{
                option1 = new ComputeRegionBackendServicesGetHealthSecurityOption1("commodi", "voluptas") {{
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

            ComputeRegionBackendServicesGetIamPolicyRequest req = new ComputeRegionBackendServicesGetIamPolicyRequest("cupiditate", "officiis", "fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quas";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "fugit";
                key = "tempora";
                oauthToken = "aperiam";
                optionsRequestedPolicyVersion = 201669L;
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "veniam";
                uploadProtocol = "nostrum";
                userIp = "est";
            }};            

            ComputeRegionBackendServicesGetIamPolicyResponse res = sdk.regionBackendServices.computeRegionBackendServicesGetIamPolicy(req, new ComputeRegionBackendServicesGetIamPolicySecurity() {{
                option1 = new ComputeRegionBackendServicesGetIamPolicySecurityOption1("laborum", "excepturi") {{
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

            ComputeRegionBackendServicesInsertRequest req = new ComputeRegionBackendServicesInsertRequest("consequuntur", "sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                backendService = new BackendService() {{
                    affinityCookieTtlSec = 264337;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 1110.08;
                            description = "provident";
                            failover = false;
                            group = "necessitatibus";
                            maxConnections = 734749;
                            maxConnectionsPerEndpoint = 849427;
                            maxConnectionsPerInstance = 124503;
                            maxRate = 754099;
                            maxRatePerEndpoint = 9458.89;
                            maxRatePerInstance = 4797.41;
                            maxUtilization = 4620.96;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 3679.14;
                            description = "sequi";
                            failover = false;
                            group = "quos";
                            maxConnections = 759799;
                            maxConnectionsPerEndpoint = 709605;
                            maxConnectionsPerInstance = 693945;
                            maxRate = 973424;
                            maxRatePerEndpoint = 7989.12;
                            maxRatePerInstance = 8359.57;
                            maxUtilization = 9378.97;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.CONNECTION;
                            capacityScaler = 8888.68;
                            description = "porro";
                            failover = false;
                            group = "debitis";
                            maxConnections = 612713;
                            maxConnectionsPerEndpoint = 429992;
                            maxConnectionsPerInstance = 668719;
                            maxRate = 788599;
                            maxRatePerEndpoint = 3011.77;
                            maxRatePerInstance = 9695.79;
                            maxUtilization = 7140.11;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "fugit";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "cumque";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("velit"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("ut"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("vel"),
                                add("illo"),
                                add("reprehenderit"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("rerum"),
                                add("molestiae"),
                                add("beatae"),
                                add("repellendus"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.USE_ORIGIN_HEADERS;
                        clientTtl = 804731;
                        defaultTtl = 136127;
                        maxTtl = 360550;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 739859;
                                ttl = 403196;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 9101;
                        signedUrlCacheMaxAgeSec = "quo";
                        signedUrlKeyNames = new String[]{{
                            add("exercitationem"),
                            add("dicta"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        maxConnections = 850288;
                        maxPendingRequests = 167954;
                        maxRequests = 663370;
                        maxRequestsPerConnection = 889976;
                        maxRetries = 708899;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.DISABLED;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 516918;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.NEVER_PERSIST;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 589391;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.PER_CONNECTION;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Leona Torphy";
                            path = "aliquam";
                            ttl = new Duration() {{
                                nanos = 438894;
                                seconds = "ab";
                            }};;
                        }};;
                        httpHeaderName = "dolorum";
                        minimumRingSize = "veniam";
                    }};;
                    creationTimestamp = "officiis";
                    customRequestHeaders = new String[]{{
                        add("soluta"),
                        add("corrupti"),
                        add("reprehenderit"),
                        add("a"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("cupiditate"),
                        add("incidunt"),
                    }};
                    description = "voluptatibus";
                    edgeSecurityPolicy = "ipsa";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 2667.48;
                    }};;
                    fingerprint = "hic";
                    healthChecks = new String[]{{
                        add("architecto"),
                        add("magnam"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "tempora";
                        oauth2ClientSecret = "vel";
                        oauth2ClientSecretSha256 = "tenetur";
                    }};;
                    id = "dignissimos";
                    kind = "occaecati";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.EXTERNAL_MANAGED;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "dolorem";
                                name = "Mr. Keith Bayer Sr.";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.MAGLEV;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "iusto";
                                name = "Bryant Carter";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.LEAST_REQUEST;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "quasi";
                                name = "Amy Price";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.LEAST_REQUEST;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "voluptates";
                                name = "Clayton McClure MD";
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
                            add("voluptatibus"),
                            add("quo"),
                            add("ducimus"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.EXCLUDE_ALL_OPTIONAL;
                        sampleRate = 5376.14;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 407432;
                        seconds = "esse";
                    }};;
                    name = "Rudy Nikolaus Jr.";
                    network = "officia";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 556156;
                            seconds = "hic";
                        }};;
                        consecutiveErrors = 281288;
                        consecutiveGatewayFailure = 792318;
                        enforcingConsecutiveErrors = 748004;
                        enforcingConsecutiveGatewayFailure = 468417;
                        enforcingSuccessRate = 171764;
                        interval = new Duration() {{
                            nanos = 908881;
                            seconds = "quibusdam";
                        }};;
                        maxEjectionPercent = 402141;
                        successRateMinimumHosts = 760910;
                        successRateRequestVolume = 952316;
                        successRateStdevFactor = 376595;
                    }};;
                    port = 185960;
                    portName = "dolores";
                    protocol = BackendServiceProtocolEnum.HTTP2;
                    region = "fugiat";
                    securityPolicy = "corporis";
                    securitySettings = new SecuritySettings() {{
                        clientTlsPolicy = "nostrum";
                        subjectAltNames = new String[]{{
                            add("architecto"),
                            add("enim"),
                        }};
                    }};;
                    selfLink = "praesentium";
                    serviceBindings = new String[]{{
                        add("doloremque"),
                        add("non"),
                        add("consequuntur"),
                    }};
                    sessionAffinity = BackendServiceSessionAffinityEnum.CLIENT_IP;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.CONSISTENT_HASH_SUBSETTING;
                    }};;
                    timeoutSec = 984728;
                }};;
                accessToken = "ducimus";
                alt = AltEnum.PROTO;
                callback = "minima";
                fields = "unde";
                key = "nam";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "beatae";
                requestId = "nemo";
                uploadType = "aliquam";
                uploadProtocol = "voluptas";
                userIp = "magnam";
            }};            

            ComputeRegionBackendServicesInsertResponse res = sdk.regionBackendServices.computeRegionBackendServicesInsert(req, new ComputeRegionBackendServicesInsertSecurity() {{
                option1 = new ComputeRegionBackendServicesInsertSecurityOption1("odit", "nobis") {{
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

            ComputeRegionBackendServicesListRequest req = new ComputeRegionBackendServicesListRequest("occaecati", "accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "aliquam";
                filter = "quod";
                key = "sequi";
                maxResults = 871210L;
                oauthToken = "dolor";
                orderBy = "optio";
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "eius";
                returnPartialSuccess = false;
                uploadType = "sint";
                uploadProtocol = "illo";
                userIp = "blanditiis";
            }};            

            ComputeRegionBackendServicesListResponse res = sdk.regionBackendServices.computeRegionBackendServicesList(req, new ComputeRegionBackendServicesListSecurity() {{
                option1 = new ComputeRegionBackendServicesListSecurityOption1("dolorem", "molestiae") {{
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

            ComputeRegionBackendServicesPatchRequest req = new ComputeRegionBackendServicesPatchRequest("natus", "odio", "corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                backendService1 = new BackendService() {{
                    affinityCookieTtlSec = 507825;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.CONNECTION;
                            capacityScaler = 3566.45;
                            description = "ea";
                            failover = false;
                            group = "earum";
                            maxConnections = 26189;
                            maxConnectionsPerEndpoint = 66436;
                            maxConnectionsPerInstance = 653390;
                            maxRate = 930290;
                            maxRatePerEndpoint = 2458.7;
                            maxRatePerInstance = 4327.12;
                            maxUtilization = 7070.5;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.UTILIZATION;
                            capacityScaler = 5322.48;
                            description = "temporibus";
                            failover = false;
                            group = "eaque";
                            maxConnections = 6916;
                            maxConnectionsPerEndpoint = 139213;
                            maxConnectionsPerInstance = 508249;
                            maxRate = 911778;
                            maxRatePerEndpoint = 1911.57;
                            maxRatePerInstance = 8757.85;
                            maxUtilization = 678.07;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.UTILIZATION;
                            capacityScaler = 7944.22;
                            description = "excepturi";
                            failover = false;
                            group = "alias";
                            maxConnections = 360189;
                            maxConnectionsPerEndpoint = 582181;
                            maxConnectionsPerInstance = 958764;
                            maxRate = 474558;
                            maxRatePerEndpoint = 9094.41;
                            maxRatePerInstance = 9736.27;
                            maxUtilization = 170.27;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.UTILIZATION;
                            capacityScaler = 1210.66;
                            description = "adipisci";
                            failover = false;
                            group = "atque";
                            maxConnections = 366129;
                            maxConnectionsPerEndpoint = 690525;
                            maxConnectionsPerInstance = 382183;
                            maxRate = 464839;
                            maxRatePerEndpoint = 7867.03;
                            maxRatePerInstance = 1820.66;
                            maxUtilization = 3120.28;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "reprehenderit";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "neque";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("maxime"),
                                add("omnis"),
                                add("atque"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("ea"),
                                add("repellendus"),
                                add("odit"),
                                add("ea"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("voluptatibus"),
                                add("excepturi"),
                                add("explicabo"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("suscipit"),
                                add("facilis"),
                                add("cum"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.CACHE_ALL_STATIC;
                        clientTtl = 511024;
                        defaultTtl = 377797;
                        maxTtl = 123182;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 136924;
                                ttl = 170491;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 163539;
                                ttl = 322218;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 697171;
                        signedUrlCacheMaxAgeSec = "aperiam";
                        signedUrlKeyNames = new String[]{{
                            add("quam"),
                            add("qui"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        maxConnections = 513819;
                        maxPendingRequests = 919222;
                        maxRequests = 489203;
                        maxRequestsPerConnection = 668265;
                        maxRetries = 141984;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.AUTOMATIC;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 105865;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.NEVER_PERSIST;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 759165;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.PER_SESSION;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Jared Gulgowski";
                            path = "maiores";
                            ttl = new Duration() {{
                                nanos = 941515;
                                seconds = "minima";
                            }};;
                        }};;
                        httpHeaderName = "temporibus";
                        minimumRingSize = "repudiandae";
                    }};;
                    creationTimestamp = "dolore";
                    customRequestHeaders = new String[]{{
                        add("aspernatur"),
                        add("expedita"),
                        add("eaque"),
                        add("culpa"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("corporis"),
                        add("esse"),
                        add("soluta"),
                    }};
                    description = "nobis";
                    edgeSecurityPolicy = "saepe";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 7683.54;
                    }};;
                    fingerprint = "molestias";
                    healthChecks = new String[]{{
                        add("voluptatibus"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "reiciendis";
                        oauth2ClientSecret = "sequi";
                        oauth2ClientSecretSha256 = "numquam";
                    }};;
                    id = "rerum";
                    kind = "voluptas";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.EXTERNAL;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "eaque";
                                name = "Dawn Ratke";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.MAGLEV;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "voluptates";
                                name = "Melvin Sauer";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.LEAST_REQUEST;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "ex";
                                name = "Corey Hodkiewicz";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.RING_HASH;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.ROUND_ROBIN;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optionalFields = new String[]{{
                            add("rerum"),
                            add("repellat"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.EXCLUDE_ALL_OPTIONAL;
                        sampleRate = 5991.67;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 285935;
                        seconds = "ipsa";
                    }};;
                    name = "Eddie Johnston";
                    network = "eaque";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 191993;
                            seconds = "iste";
                        }};;
                        consecutiveErrors = 833921;
                        consecutiveGatewayFailure = 253573;
                        enforcingConsecutiveErrors = 549905;
                        enforcingConsecutiveGatewayFailure = 565293;
                        enforcingSuccessRate = 656898;
                        interval = new Duration() {{
                            nanos = 943764;
                            seconds = "autem";
                        }};;
                        maxEjectionPercent = 30457;
                        successRateMinimumHosts = 19377;
                        successRateRequestVolume = 371510;
                        successRateStdevFactor = 300512;
                    }};;
                    port = 379655;
                    portName = "perferendis";
                    protocol = BackendServiceProtocolEnum.TCP;
                    region = "voluptatem";
                    securityPolicy = "ullam";
                    securitySettings = new SecuritySettings() {{
                        clientTlsPolicy = "doloribus";
                        subjectAltNames = new String[]{{
                            add("quasi"),
                        }};
                    }};;
                    selfLink = "debitis";
                    serviceBindings = new String[]{{
                        add("libero"),
                        add("temporibus"),
                    }};
                    sessionAffinity = BackendServiceSessionAffinityEnum.GENERATED_COOKIE;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.CONSISTENT_HASH_SUBSETTING;
                    }};;
                    timeoutSec = 284475;
                }};;
                accessToken = "non";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "voluptatum";
                key = "possimus";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "aperiam";
                requestId = "repellendus";
                uploadType = "odio";
                uploadProtocol = "in";
                userIp = "sequi";
            }};            

            ComputeRegionBackendServicesPatchResponse res = sdk.regionBackendServices.computeRegionBackendServicesPatch(req, new ComputeRegionBackendServicesPatchSecurity() {{
                option1 = new ComputeRegionBackendServicesPatchSecurityOption1("similique", "ipsa") {{
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

            ComputeRegionBackendServicesSetIamPolicyRequest req = new ComputeRegionBackendServicesSetIamPolicyRequest("quam", "porro", "sequi") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "commodi";
                            condition = new Expr() {{
                                description = "placeat";
                                expression = "corrupti";
                                location = "ea";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("necessitatibus"),
                                add("occaecati"),
                                add("ea"),
                                add("occaecati"),
                            }};
                            role = "qui";
                        }}),
                        add(new Binding() {{
                            bindingId = "a";
                            condition = new Expr() {{
                                description = "iste";
                                expression = "vero";
                                location = "officia";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("quisquam"),
                                add("voluptatem"),
                            }};
                            role = "ipsum";
                        }}),
                    }};
                    etag = "id";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sed"),
                                            add("dolor"),
                                            add("possimus"),
                                            add("maxime"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("in"),
                                }};
                                service = "sequi";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nihil"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("corrupti"),
                                            add("ex"),
                                            add("dolore"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("molestias"),
                                            add("explicabo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("necessitatibus"),
                                            add("harum"),
                                            add("optio"),
                                            add("inventore"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("animi"),
                                    add("deserunt"),
                                    add("dolor"),
                                }};
                                service = "pariatur";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nulla"),
                                            add("sit"),
                                            add("quisquam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("alias"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptates"),
                                            add("dolore"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("illum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("eos"),
                                    add("numquam"),
                                }};
                                service = "assumenda";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sapiente"),
                                            add("magnam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolore"),
                                            add("eos"),
                                            add("facere"),
                                            add("repellendus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ab"),
                                            add("eius"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("incidunt"),
                                    add("incidunt"),
                                    add("laboriosam"),
                                }};
                                service = "laudantium";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "iste";
                                condition = new Expr() {{
                                    description = "occaecati";
                                    expression = "cupiditate";
                                    location = "modi";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("natus"),
                                    add("quis"),
                                    add("dolor"),
                                    add("nobis"),
                                }};
                                role = "dolore";
                            }}),
                            add(new Binding() {{
                                bindingId = "sed";
                                condition = new Expr() {{
                                    description = "ex";
                                    expression = "autem";
                                    location = "impedit";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("ipsam"),
                                    add("sit"),
                                    add("perferendis"),
                                    add("asperiores"),
                                }};
                                role = "minus";
                            }}),
                            add(new Binding() {{
                                bindingId = "dignissimos";
                                condition = new Expr() {{
                                    description = "modi";
                                    expression = "explicabo";
                                    location = "porro";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("esse"),
                                    add("inventore"),
                                    add("aperiam"),
                                    add("totam"),
                                }};
                                role = "occaecati";
                            }}),
                        }};
                        etag = "vitae";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "dicta";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("modi"),
                                            add("asperiores"),
                                            add("voluptates"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.IN;
                                        svc = "libero";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("aperiam"),
                                            add("sapiente"),
                                            add("tempore"),
                                            add("deserunt"),
                                        }};
                                    }}),
                                }};
                                description = "fugit";
                                ins = new String[]{{
                                    add("ipsum"),
                                    add("dolore"),
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
                                                    name = "Arlene Hills";
                                                    value = "necessitatibus";
                                                }}),
                                            }};
                                            field = "fugit";
                                            metric = "deserunt";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Molly Kilback";
                                                    value = "dolores";
                                                }}),
                                            }};
                                            field = "veritatis";
                                            metric = "perspiciatis";
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
                                                    name = "Peggy Dibbert";
                                                    value = "quasi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Ed Beer";
                                                    value = "perferendis";
                                                }}),
                                            }};
                                            field = "recusandae";
                                            metric = "reprehenderit";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Wilma Wiegand";
                                                    value = "commodi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lorene Rolfson";
                                                    value = "dolore";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Yolanda Collier";
                                                    value = "ratione";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dwight Wilkinson";
                                                    value = "dicta";
                                                }}),
                                            }};
                                            field = "saepe";
                                            metric = "voluptas";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("voluptates"),
                                    add("vel"),
                                    add("veritatis"),
                                }};
                                permissions = new String[]{{
                                    add("hic"),
                                    add("maiores"),
                                    add("odit"),
                                    add("velit"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "veniam";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("earum"),
                                            add("temporibus"),
                                            add("iure"),
                                        }};
                                    }}),
                                }};
                                description = "excepturi";
                                ins = new String[]{{
                                    add("corrupti"),
                                    add("quis"),
                                    add("eius"),
                                    add("officiis"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Janis Macejkovic DDS";
                                                    value = "vitae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Clay Beahan";
                                                    value = "tempora";
                                                }}),
                                            }};
                                            field = "amet";
                                            metric = "quas";
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
                                                    name = "Ida Friesen";
                                                    value = "magni";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dora Hirthe";
                                                    value = "hic";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Roy Glover";
                                                    value = "delectus";
                                                }}),
                                            }};
                                            field = "eius";
                                            metric = "quasi";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Floyd Will";
                                                    value = "et";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Erica MacGyver";
                                                    value = "fuga";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jose Waelchi V";
                                                    value = "ex";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Seth Waelchi IV";
                                                    value = "occaecati";
                                                }}),
                                            }};
                                            field = "ea";
                                            metric = "aliquid";
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
                                                    name = "Hazel Sauer";
                                                    value = "repudiandae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Cecelia Swift";
                                                    value = "rem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lydia Batz";
                                                    value = "impedit";
                                                }}),
                                            }};
                                            field = "rem";
                                            metric = "aut";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("reprehenderit"),
                                }};
                                permissions = new String[]{{
                                    add("eos"),
                                    add("pariatur"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "et";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("debitis"),
                                            add("tempore"),
                                        }};
                                    }}),
                                }};
                                description = "modi";
                                ins = new String[]{{
                                    add("temporibus"),
                                    add("incidunt"),
                                    add("eligendi"),
                                    add("odio"),
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
                                                    name = "Steve Bednar";
                                                    value = "deserunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lee Von";
                                                    value = "inventore";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Terri Langworth";
                                                    value = "maiores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Olga Schinner";
                                                    value = "quisquam";
                                                }}),
                                            }};
                                            field = "numquam";
                                            metric = "sint";
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
                                                    name = "Alison McDermott";
                                                    value = "a";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Betsy Schaden";
                                                    value = "officia";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Garry Keebler";
                                                    value = "nesciunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Stella Crist";
                                                    value = "doloribus";
                                                }}),
                                            }};
                                            field = "labore";
                                            metric = "qui";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Arthur Sipes";
                                                    value = "voluptatem";
                                                }}),
                                            }};
                                            field = "nemo";
                                            metric = "maxime";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Terrence Corkery";
                                                    value = "debitis";
                                                }}),
                                            }};
                                            field = "hic";
                                            metric = "accusamus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("illo"),
                                }};
                                permissions = new String[]{{
                                    add("sit"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "necessitatibus";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("repellat"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "saepe";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("placeat"),
                                            add("possimus"),
                                            add("atque"),
                                            add("consectetur"),
                                        }};
                                    }}),
                                }};
                                description = "et";
                                ins = new String[]{{
                                    add("explicabo"),
                                    add("provident"),
                                    add("facere"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jamie Tillman";
                                                    value = "voluptates";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Tommie Kohler";
                                                    value = "molestias";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Austin Koch III";
                                                    value = "vitae";
                                                }}),
                                            }};
                                            field = "similique";
                                            metric = "fuga";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Cecil Marks";
                                                    value = "nobis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Leigh Crist";
                                                    value = "sequi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rodney Koelpin";
                                                    value = "voluptatum";
                                                }}),
                                            }};
                                            field = "fugiat";
                                            metric = "nobis";
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
                                                    name = "Candace Witting";
                                                    value = "voluptas";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Donald Gusikowski Jr.";
                                                    value = "vero";
                                                }}),
                                            }};
                                            field = "ipsa";
                                            metric = "commodi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("ea"),
                                    add("doloribus"),
                                }};
                                permissions = new String[]{{
                                    add("ea"),
                                    add("voluptas"),
                                    add("sint"),
                                }};
                            }}),
                        }};
                        version = 658417;
                    }};;
                }};;
                accessToken = "cum";
                alt = AltEnum.PROTO;
                callback = "dolor";
                fields = "blanditiis";
                key = "tempora";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "possimus";
                uploadProtocol = "maxime";
                userIp = "dolor";
            }};            

            ComputeRegionBackendServicesSetIamPolicyResponse res = sdk.regionBackendServices.computeRegionBackendServicesSetIamPolicy(req, new ComputeRegionBackendServicesSetIamPolicySecurity() {{
                option1 = new ComputeRegionBackendServicesSetIamPolicySecurityOption1("nesciunt", "aut") {{
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

            ComputeRegionBackendServicesUpdateRequest req = new ComputeRegionBackendServicesUpdateRequest("quaerat", "quis", "consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                backendService1 = new BackendService() {{
                    affinityCookieTtlSec = 384833;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.UTILIZATION;
                            capacityScaler = 9900.41;
                            description = "ex";
                            failover = false;
                            group = "praesentium";
                            maxConnections = 759015;
                            maxConnectionsPerEndpoint = 72529;
                            maxConnectionsPerInstance = 57387;
                            maxRate = 307694;
                            maxRatePerEndpoint = 5878.95;
                            maxRatePerInstance = 3078.49;
                            maxUtilization = 9540.44;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 9843.85;
                            description = "veritatis";
                            failover = false;
                            group = "occaecati";
                            maxConnections = 949838;
                            maxConnectionsPerEndpoint = 14318;
                            maxConnectionsPerInstance = 414876;
                            maxRate = 839896;
                            maxRatePerEndpoint = 9571.63;
                            maxRatePerInstance = 7347.15;
                            maxUtilization = 9400.02;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "tempora";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("dolore"),
                                add("distinctio"),
                                add("culpa"),
                                add("quasi"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("deleniti"),
                                add("veniam"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("mollitia"),
                                add("debitis"),
                                add("adipisci"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("nesciunt"),
                                add("quas"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.FORCE_CACHE_ALL;
                        clientTtl = 550946;
                        defaultTtl = 596817;
                        maxTtl = 519376;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 853159;
                                ttl = 91584;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 946630;
                        signedUrlCacheMaxAgeSec = "voluptatum";
                        signedUrlKeyNames = new String[]{{
                            add("omnis"),
                            add("sequi"),
                            add("eius"),
                            add("pariatur"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        maxConnections = 767085;
                        maxPendingRequests = 317755;
                        maxRequests = 69964;
                        maxRequestsPerConnection = 12811;
                        maxRetries = 713067;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.DISABLED;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 400192;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.ALWAYS_PERSIST;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 405020;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.PER_CONNECTION;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Karla Wuckert";
                            path = "ad";
                            ttl = new Duration() {{
                                nanos = 194352;
                                seconds = "temporibus";
                            }};;
                        }};;
                        httpHeaderName = "eos";
                        minimumRingSize = "ipsa";
                    }};;
                    creationTimestamp = "cum";
                    customRequestHeaders = new String[]{{
                        add("ad"),
                        add("exercitationem"),
                        add("minus"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("voluptatum"),
                        add("ratione"),
                        add("cupiditate"),
                    }};
                    description = "consectetur";
                    edgeSecurityPolicy = "amet";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 8363.86;
                    }};;
                    fingerprint = "nostrum";
                    healthChecks = new String[]{{
                        add("eius"),
                        add("fugiat"),
                        add("assumenda"),
                        add("iusto"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "ipsam";
                        oauth2ClientSecret = "id";
                        oauth2ClientSecretSha256 = "pariatur";
                    }};;
                    id = "esse";
                    kind = "tenetur";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.EXTERNAL_MANAGED;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "consequatur";
                                name = "Phil Will";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.ROUND_ROBIN;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "similique";
                                name = "Meredith Tillman";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.RANDOM;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.ROUND_ROBIN;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optionalFields = new String[]{{
                            add("cumque"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.INCLUDE_ALL_OPTIONAL;
                        sampleRate = 7388.18;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 490522;
                        seconds = "harum";
                    }};;
                    name = "Crystal Lehner";
                    network = "beatae";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 776105;
                            seconds = "nulla";
                        }};;
                        consecutiveErrors = 694729;
                        consecutiveGatewayFailure = 200370;
                        enforcingConsecutiveErrors = 886929;
                        enforcingConsecutiveGatewayFailure = 439605;
                        enforcingSuccessRate = 765206;
                        interval = new Duration() {{
                            nanos = 906045;
                            seconds = "doloremque";
                        }};;
                        maxEjectionPercent = 795428;
                        successRateMinimumHosts = 233151;
                        successRateRequestVolume = 38122;
                        successRateStdevFactor = 684182;
                    }};;
                    port = 488506;
                    portName = "quibusdam";
                    protocol = BackendServiceProtocolEnum.SSL;
                    region = "odio";
                    securityPolicy = "temporibus";
                    securitySettings = new SecuritySettings() {{
                        clientTlsPolicy = "nam";
                        subjectAltNames = new String[]{{
                            add("totam"),
                            add("quae"),
                            add("nisi"),
                        }};
                    }};;
                    selfLink = "autem";
                    serviceBindings = new String[]{{
                        add("id"),
                        add("eaque"),
                    }};
                    sessionAffinity = BackendServiceSessionAffinityEnum.NONE;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.CONSISTENT_HASH_SUBSETTING;
                    }};;
                    timeoutSec = 384084;
                }};;
                accessToken = "aliquam";
                alt = AltEnum.PROTO;
                callback = "iure";
                fields = "corrupti";
                key = "iste";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "fugit";
                requestId = "commodi";
                uploadType = "id";
                uploadProtocol = "occaecati";
                userIp = "aspernatur";
            }};            

            ComputeRegionBackendServicesUpdateResponse res = sdk.regionBackendServices.computeRegionBackendServicesUpdate(req, new ComputeRegionBackendServicesUpdateSecurity() {{
                option1 = new ComputeRegionBackendServicesUpdateSecurityOption1("vel", "quidem") {{
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
