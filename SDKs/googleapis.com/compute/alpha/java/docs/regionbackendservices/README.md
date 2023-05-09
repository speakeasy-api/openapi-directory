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

            ComputeRegionBackendServicesDeleteRequest req = new ComputeRegionBackendServicesDeleteRequest("quidem", "dolores", "reprehenderit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laudantium";
                alt = AltEnum.JSON;
                callback = "quas";
                fields = "voluptas";
                key = "in";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "expedita";
                requestId = "error";
                uploadType = "quam";
                uploadProtocol = "ex";
                userIp = "amet";
            }};            

            ComputeRegionBackendServicesDeleteResponse res = sdk.regionBackendServices.computeRegionBackendServicesDelete(req, new ComputeRegionBackendServicesDeleteSecurity() {{
                option1 = new ComputeRegionBackendServicesDeleteSecurityOption1("expedita", "eius") {{
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

            ComputeRegionBackendServicesGetRequest req = new ComputeRegionBackendServicesGetRequest("amet", "fugiat", "quis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corrupti";
                alt = AltEnum.JSON;
                callback = "dignissimos";
                fields = "quidem";
                key = "porro";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "quod";
                uploadProtocol = "pariatur";
                userIp = "cupiditate";
            }};            

            ComputeRegionBackendServicesGetResponse res = sdk.regionBackendServices.computeRegionBackendServicesGet(req, new ComputeRegionBackendServicesGetSecurity() {{
                option1 = new ComputeRegionBackendServicesGetSecurityOption1("facere", "numquam") {{
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

            ComputeRegionBackendServicesGetHealthRequest req = new ComputeRegionBackendServicesGetHealthRequest("aliquid", "suscipit", "vero") {{
                dollarXgafv = XgafvEnum.TWO;
                resourceGroupReference = new ResourceGroupReference() {{
                    group = "culpa";
                }};;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "cupiditate";
                key = "a";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "deserunt";
                uploadProtocol = "ipsa";
                userIp = "iure";
            }};            

            ComputeRegionBackendServicesGetHealthResponse res = sdk.regionBackendServices.computeRegionBackendServicesGetHealth(req, new ComputeRegionBackendServicesGetHealthSecurity() {{
                option1 = new ComputeRegionBackendServicesGetHealthSecurityOption1("neque", "voluptate") {{
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

            ComputeRegionBackendServicesGetIamPolicyRequest req = new ComputeRegionBackendServicesGetIamPolicyRequest("veritatis", "amet", "minima") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fuga";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "ullam";
                key = "cupiditate";
                oauthToken = "architecto";
                optionsRequestedPolicyVersion = 553735L;
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "laudantium";
                uploadProtocol = "maiores";
                userIp = "animi";
            }};            

            ComputeRegionBackendServicesGetIamPolicyResponse res = sdk.regionBackendServices.computeRegionBackendServicesGetIamPolicy(req, new ComputeRegionBackendServicesGetIamPolicySecurity() {{
                option1 = new ComputeRegionBackendServicesGetIamPolicySecurityOption1("tempora", "adipisci") {{
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
import org.openapis.openapi.models.shared.AuthenticationPolicy;
import org.openapis.openapi.models.shared.AuthenticationPolicyPrincipalBindingEnum;
import org.openapis.openapi.models.shared.AuthorizationConfig;
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
import org.openapis.openapi.models.shared.BackendServiceIAPOAuth2ClientInfo;
import org.openapis.openapi.models.shared.BackendServiceIpAddressSelectionPolicyEnum;
import org.openapis.openapi.models.shared.BackendServiceLoadBalancingSchemeEnum;
import org.openapis.openapi.models.shared.BackendServiceLocalityLbPolicyEnum;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigPolicy;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum;
import org.openapis.openapi.models.shared.BackendServiceLogConfig;
import org.openapis.openapi.models.shared.BackendServiceLogConfigOptionalEnum;
import org.openapis.openapi.models.shared.BackendServiceLogConfigOptionalModeEnum;
import org.openapis.openapi.models.shared.BackendServiceProtocolEnum;
import org.openapis.openapi.models.shared.BackendServiceSessionAffinityEnum;
import org.openapis.openapi.models.shared.BackendServiceVpcNetworkScopeEnum;
import org.openapis.openapi.models.shared.CacheKeyPolicy;
import org.openapis.openapi.models.shared.CallCredentials;
import org.openapis.openapi.models.shared.CallCredentialsCallCredentialTypeEnum;
import org.openapis.openapi.models.shared.ChannelCredentials;
import org.openapis.openapi.models.shared.ChannelCredentialsChannelCredentialTypeEnum;
import org.openapis.openapi.models.shared.CircuitBreakers;
import org.openapis.openapi.models.shared.ClientTlsSettings;
import org.openapis.openapi.models.shared.ClientTlsSettingsModeEnum;
import org.openapis.openapi.models.shared.ConnectionDraining;
import org.openapis.openapi.models.shared.ConsistentHashLoadBalancerSettings;
import org.openapis.openapi.models.shared.ConsistentHashLoadBalancerSettingsHttpCookie;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.GrpcServiceConfig;
import org.openapis.openapi.models.shared.Jwt;
import org.openapis.openapi.models.shared.JwtHeader;
import org.openapis.openapi.models.shared.MetadataCredentialsFromPlugin;
import org.openapis.openapi.models.shared.MutualTls;
import org.openapis.openapi.models.shared.MutualTlsModeEnum;
import org.openapis.openapi.models.shared.OriginAuthenticationMethod;
import org.openapis.openapi.models.shared.OutlierDetection;
import org.openapis.openapi.models.shared.PeerAuthenticationMethod;
import org.openapis.openapi.models.shared.Permission;
import org.openapis.openapi.models.shared.PermissionConstraint;
import org.openapis.openapi.models.shared.Principal;
import org.openapis.openapi.models.shared.RbacPolicy;
import org.openapis.openapi.models.shared.SdsConfig;
import org.openapis.openapi.models.shared.SecuritySettings;
import org.openapis.openapi.models.shared.Subsetting;
import org.openapis.openapi.models.shared.SubsettingPolicyEnum;
import org.openapis.openapi.models.shared.TlsCertificateContext;
import org.openapis.openapi.models.shared.TlsCertificateContextCertificateSourceEnum;
import org.openapis.openapi.models.shared.TlsCertificatePaths;
import org.openapis.openapi.models.shared.TlsContext;
import org.openapis.openapi.models.shared.TlsValidationContext;
import org.openapis.openapi.models.shared.TlsValidationContextValidationSourceEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionBackendServicesInsertRequest req = new ComputeRegionBackendServicesInsertRequest("officiis", "praesentium") {{
                dollarXgafv = XgafvEnum.ONE;
                backendService = new BackendService() {{
                    affinityCookieTtlSec = 731534;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 8608.89;
                            description = "error";
                            failover = false;
                            group = "magnam";
                            maxConnections = 942376;
                            maxConnectionsPerEndpoint = 169347;
                            maxConnectionsPerInstance = 22115;
                            maxRate = 658850;
                            maxRatePerEndpoint = 5655.26;
                            maxRatePerInstance = 9496.47;
                            maxUtilization = 4810.93;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 9615.81;
                            description = "et";
                            failover = false;
                            group = "ad";
                            maxConnections = 749091;
                            maxConnectionsPerEndpoint = 976229;
                            maxConnectionsPerInstance = 5935;
                            maxRate = 993922;
                            maxRatePerEndpoint = 5418.63;
                            maxRatePerInstance = 6689.33;
                            maxUtilization = 8491.24;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "eum";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "fuga";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "ipsum";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("vero"),
                                add("debitis"),
                                add("quia"),
                                add("facilis"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("saepe"),
                                add("esse"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("voluptatem"),
                                add("expedita"),
                                add("rem"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("unde"),
                                add("non"),
                                add("commodi"),
                                add("ducimus"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.CACHE_ALL_STATIC;
                        clientTtl = 588401;
                        defaultTtl = 110305;
                        maxTtl = 890006;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 535504;
                                ttl = 424011;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 980751;
                                ttl = 913396;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 813481;
                        signedUrlCacheMaxAgeSec = "ipsam";
                        signedUrlKeyNames = new String[]{{
                            add("nam"),
                            add("culpa"),
                            add("iste"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        connectTimeout = new Duration() {{
                            nanos = 123680;
                            seconds = "doloremque";
                        }};;
                        maxConnections = 697265;
                        maxPendingRequests = 460149;
                        maxRequests = 813343;
                        maxRequestsPerConnection = 672546;
                        maxRetries = 371532;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.AUTOMATIC;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 622701;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.NEVER_PERSIST;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 475417;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.PER_SESSION;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Eddie Armstrong Jr.";
                            path = "molestiae";
                            ttl = new Duration() {{
                                nanos = 633010;
                                seconds = "culpa";
                            }};;
                        }};;
                        httpHeaderName = "laudantium";
                        minimumRingSize = "illo";
                    }};;
                    creationTimestamp = "suscipit";
                    customRequestHeaders = new String[]{{
                        add("saepe"),
                        add("officia"),
                        add("hic"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("quis"),
                        add("totam"),
                        add("voluptatum"),
                    }};
                    description = "fuga";
                    edgeSecurityPolicy = "et";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 5285.83;
                    }};;
                    fingerprint = "voluptatum";
                    healthChecks = new String[]{{
                        add("accusamus"),
                        add("aliquid"),
                        add("nesciunt"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "mollitia";
                        oauth2ClientInfo = new BackendServiceIAPOAuth2ClientInfo() {{
                            applicationName = "aperiam";
                            clientName = "veniam";
                            developerEmailAddress = "nisi";
                        }};;
                        oauth2ClientSecret = "a";
                        oauth2ClientSecretSha256 = "nesciunt";
                    }};;
                    id = "officiis";
                    ipAddressSelectionPolicy = BackendServiceIpAddressSelectionPolicyEnum.IPV6_ONLY;
                    kind = "in";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.INVALID_LOAD_BALANCING_SCHEME;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "vero";
                                name = "Floyd Thompson";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.ROUND_ROBIN;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "dicta";
                                name = "Zachary Legros";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.ORIGINAL_DESTINATION;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "hic";
                                name = "Tomas Zboncak";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.MAGLEV;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "voluptate";
                                name = "Lena Schimmel";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.ROUND_ROBIN;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.INVALID_LB_POLICY;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optional = BackendServiceLogConfigOptionalEnum.EXCLUDE_ALL_OPTIONAL;
                        optionalFields = new String[]{{
                            add("distinctio"),
                            add("voluptatum"),
                            add("vitae"),
                            add("aliquid"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.UNSPECIFIED_OPTIONAL_MODE;
                        sampleRate = 7579.86;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 93628;
                        seconds = "architecto";
                    }};;
                    metadatas = new java.util.HashMap<String, String>() {{
                        put("iusto", "esse");
                        put("molestias", "distinctio");
                        put("dolore", "quaerat");
                        put("porro", "incidunt");
                    }};
                    name = "Kirk Murray";
                    network = "itaque";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 924696;
                            seconds = "repellat";
                        }};;
                        consecutiveErrors = 518188;
                        consecutiveGatewayFailure = 501608;
                        enforcingConsecutiveErrors = 127814;
                        enforcingConsecutiveGatewayFailure = 462508;
                        enforcingSuccessRate = 842683;
                        interval = new Duration() {{
                            nanos = 752175;
                            seconds = "hic";
                        }};;
                        maxEjectionPercent = 776926;
                        successRateMinimumHosts = 232600;
                        successRateRequestVolume = 216076;
                        successRateStdevFactor = 206286;
                    }};;
                    port = 469310;
                    portName = "voluptatum";
                    protocol = BackendServiceProtocolEnum.TCP;
                    region = "magnam";
                    securityPolicy = "sint";
                    securitySettings = new SecuritySettings() {{
                        authentication = "illum";
                        authenticationPolicy = new AuthenticationPolicy() {{
                            origins = new org.openapis.openapi.models.shared.OriginAuthenticationMethod[]{{
                                add(new OriginAuthenticationMethod() {{
                                    jwt = new Jwt() {{
                                        audiences = new String[]{{
                                            add("quod"),
                                            add("consectetur"),
                                        }};
                                        issuer = "pariatur";
                                        jwksPublicKeys = "alias";
                                        jwtHeaders = new org.openapis.openapi.models.shared.JwtHeader[]{{
                                            add(new JwtHeader() {{
                                                name = "Karla Herzog";
                                                valuePrefix = "unde";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Tina Collier";
                                                valuePrefix = "voluptatem";
                                            }}),
                                        }};
                                        jwtParams = new String[]{{
                                            add("error"),
                                            add("commodi"),
                                            add("atque"),
                                        }};
                                    }};
                                }}),
                            }};
                            peers = new org.openapis.openapi.models.shared.PeerAuthenticationMethod[]{{
                                add(new PeerAuthenticationMethod() {{
                                    mtls = new MutualTls() {{
                                        mode = MutualTlsModeEnum.INVALID;
                                    }};
                                }}),
                                add(new PeerAuthenticationMethod() {{
                                    mtls = new MutualTls() {{
                                        mode = MutualTlsModeEnum.STRICT;
                                    }};
                                }}),
                                add(new PeerAuthenticationMethod() {{
                                    mtls = new MutualTls() {{
                                        mode = MutualTlsModeEnum.PERMISSIVE;
                                    }};
                                }}),
                            }};
                            principalBinding = AuthenticationPolicyPrincipalBindingEnum.INVALID;
                            serverTlsContext = new TlsContext() {{
                                certificateContext = new TlsCertificateContext() {{
                                    certificatePaths = new TlsCertificatePaths() {{
                                        certificatePath = "dolores";
                                        privateKeyPath = "quas";
                                    }};;
                                    certificateSource = TlsCertificateContextCertificateSourceEnum.USE_PATH;
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.INVALID;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Shawna Jast";
                                                    structConfig = "esse";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "alias";
                                                    privateKeyPath = "odit";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.INVALID;
                                            }};;
                                            targetUri = "sint";
                                        }};;
                                    }};;
                                }};;
                                validationContext = new TlsValidationContext() {{
                                    certificatePath = "non";
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.GCE_VM;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Omar Emard";
                                                    structConfig = "amet";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "mollitia";
                                                    privateKeyPath = "reprehenderit";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.CERTIFICATES;
                                            }};;
                                            targetUri = "dolores";
                                        }};;
                                    }};;
                                    validationSource = TlsValidationContextValidationSourceEnum.USE_SDS;
                                }};;
                            }};;
                        }};;
                        authorizationConfig = new AuthorizationConfig() {{
                            policies = new org.openapis.openapi.models.shared.RbacPolicy[]{{
                                add(new RbacPolicy() {{
                                    name = "Tommy Grimes";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "aut";
                                                    values = new String[]{{
                                                        add("a"),
                                                        add("esse"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "sunt";
                                                    values = new String[]{{
                                                        add("officiis"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "quas";
                                                    values = new String[]{{
                                                        add("quo"),
                                                        add("error"),
                                                        add("asperiores"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("officia"),
                                                add("ex"),
                                                add("est"),
                                            }};
                                            methods = new String[]{{
                                                add("vel"),
                                                add("accusantium"),
                                            }};
                                            notHosts = new String[]{{
                                                add("sapiente"),
                                                add("quidem"),
                                                add("a"),
                                            }};
                                            notMethods = new String[]{{
                                                add("esse"),
                                            }};
                                            notPaths = new String[]{{
                                                add("praesentium"),
                                                add("modi"),
                                            }};
                                            notPorts = new String[]{{
                                                add("delectus"),
                                                add("ratione"),
                                            }};
                                            paths = new String[]{{
                                                add("veritatis"),
                                            }};
                                            ports = new String[]{{
                                                add("earum"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "perferendis";
                                                    values = new String[]{{
                                                        add("laudantium"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "iste";
                                                    values = new String[]{{
                                                        add("nobis"),
                                                        add("eveniet"),
                                                        add("nisi"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("quibusdam"),
                                                add("laboriosam"),
                                                add("eligendi"),
                                            }};
                                            methods = new String[]{{
                                                add("molestias"),
                                            }};
                                            notHosts = new String[]{{
                                                add("id"),
                                            }};
                                            notMethods = new String[]{{
                                                add("cum"),
                                                add("hic"),
                                                add("similique"),
                                                add("minus"),
                                            }};
                                            notPaths = new String[]{{
                                                add("in"),
                                                add("provident"),
                                                add("quis"),
                                                add("expedita"),
                                            }};
                                            notPorts = new String[]{{
                                                add("ea"),
                                            }};
                                            paths = new String[]{{
                                                add("hic"),
                                                add("vel"),
                                                add("consectetur"),
                                            }};
                                            ports = new String[]{{
                                                add("quos"),
                                                add("assumenda"),
                                                add("facilis"),
                                            }};
                                        }}),
                                    }};
                                    principals = new org.openapis.openapi.models.shared.Principal[]{{
                                        add(new Principal() {{
                                            condition = "in";
                                            groups = new String[]{{
                                                add("perspiciatis"),
                                            }};
                                            ips = new String[]{{
                                                add("explicabo"),
                                            }};
                                            namespaces = new String[]{{
                                                add("voluptates"),
                                            }};
                                            notGroups = new String[]{{
                                                add("quibusdam"),
                                            }};
                                            notIps = new String[]{{
                                                add("esse"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("excepturi"),
                                            }};
                                            notUsers = new String[]{{
                                                add("corporis"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("accusamus", "labore");
                                                put("numquam", "vero");
                                            }};
                                            users = new String[]{{
                                                add("aperiam"),
                                                add("dolore"),
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                        }};;
                        awsV4Authentication = new Awsv4Signature() {{
                            accessKey = "voluptas";
                            accessKeyId = "aut";
                            accessKeyVersion = "praesentium";
                            originRegion = "incidunt";
                        }};;
                        clientTlsPolicy = "quod";
                        clientTlsSettings = new ClientTlsSettings() {{
                            clientTlsContext = new TlsContext() {{
                                certificateContext = new TlsCertificateContext() {{
                                    certificatePaths = new TlsCertificatePaths() {{
                                        certificatePath = "atque";
                                        privateKeyPath = "itaque";
                                    }};;
                                    certificateSource = TlsCertificateContextCertificateSourceEnum.INVALID;
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.INVALID;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Clint Langworth";
                                                    structConfig = "exercitationem";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "fugit";
                                                    privateKeyPath = "eius";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.GCE_VM;
                                            }};;
                                            targetUri = "nulla";
                                        }};;
                                    }};;
                                }};;
                                validationContext = new TlsValidationContext() {{
                                    certificatePath = "minus";
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.GCE_VM;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Megan Zulauf";
                                                    structConfig = "at";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "aperiam";
                                                    privateKeyPath = "vel";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.GCE_VM;
                                            }};;
                                            targetUri = "asperiores";
                                        }};;
                                    }};;
                                    validationSource = TlsValidationContextValidationSourceEnum.USE_SDS;
                                }};;
                            }};;
                            mode = ClientTlsSettingsModeEnum.MUTUAL;
                            sni = "fugiat";
                            subjectAltNames = new String[]{{
                                add("magnam"),
                                add("odio"),
                                add("dolorum"),
                                add("nostrum"),
                            }};
                        }};;
                        subjectAltNames = new String[]{{
                            add("consequuntur"),
                        }};
                    }};;
                    selfLink = "officiis";
                    selfLinkWithId = "voluptas";
                    serviceBindings = new String[]{{
                        add("atque"),
                    }};
                    serviceLbPolicy = "quo";
                    sessionAffinity = BackendServiceSessionAffinityEnum.HTTP_COOKIE;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.NONE;
                        subsetSize = 105123;
                    }};;
                    timeoutSec = 796305;
                    vpcNetworkScope = BackendServiceVpcNetworkScopeEnum.REGIONAL_VPC_NETWORK;
                }};;
                accessToken = "accusamus";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "culpa";
                key = "perferendis";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "laboriosam";
                requestId = "quod";
                uploadType = "non";
                uploadProtocol = "accusamus";
                userIp = "suscipit";
            }};            

            ComputeRegionBackendServicesInsertResponse res = sdk.regionBackendServices.computeRegionBackendServicesInsert(req, new ComputeRegionBackendServicesInsertSecurity() {{
                option1 = new ComputeRegionBackendServicesInsertSecurityOption1("illo", "facilis") {{
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

            ComputeRegionBackendServicesListRequest req = new ComputeRegionBackendServicesListRequest("error", "excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "corrupti";
                fields = "eaque";
                filter = "sequi";
                key = "doloremque";
                maxResults = 881094L;
                oauthToken = "aperiam";
                orderBy = "a";
                pageToken = "nisi";
                prettyPrint = false;
                quotaUser = "magni";
                returnPartialSuccess = false;
                uploadType = "illo";
                uploadProtocol = "cupiditate";
                userIp = "possimus";
            }};            

            ComputeRegionBackendServicesListResponse res = sdk.regionBackendServices.computeRegionBackendServicesList(req, new ComputeRegionBackendServicesListSecurity() {{
                option1 = new ComputeRegionBackendServicesListSecurityOption1("illo", "saepe") {{
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
import org.openapis.openapi.models.shared.AuthenticationPolicy;
import org.openapis.openapi.models.shared.AuthenticationPolicyPrincipalBindingEnum;
import org.openapis.openapi.models.shared.AuthorizationConfig;
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
import org.openapis.openapi.models.shared.BackendServiceIAPOAuth2ClientInfo;
import org.openapis.openapi.models.shared.BackendServiceIpAddressSelectionPolicyEnum;
import org.openapis.openapi.models.shared.BackendServiceLoadBalancingSchemeEnum;
import org.openapis.openapi.models.shared.BackendServiceLocalityLbPolicyEnum;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigPolicy;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum;
import org.openapis.openapi.models.shared.BackendServiceLogConfig;
import org.openapis.openapi.models.shared.BackendServiceLogConfigOptionalEnum;
import org.openapis.openapi.models.shared.BackendServiceLogConfigOptionalModeEnum;
import org.openapis.openapi.models.shared.BackendServiceProtocolEnum;
import org.openapis.openapi.models.shared.BackendServiceSessionAffinityEnum;
import org.openapis.openapi.models.shared.BackendServiceVpcNetworkScopeEnum;
import org.openapis.openapi.models.shared.CacheKeyPolicy;
import org.openapis.openapi.models.shared.CallCredentials;
import org.openapis.openapi.models.shared.CallCredentialsCallCredentialTypeEnum;
import org.openapis.openapi.models.shared.ChannelCredentials;
import org.openapis.openapi.models.shared.ChannelCredentialsChannelCredentialTypeEnum;
import org.openapis.openapi.models.shared.CircuitBreakers;
import org.openapis.openapi.models.shared.ClientTlsSettings;
import org.openapis.openapi.models.shared.ClientTlsSettingsModeEnum;
import org.openapis.openapi.models.shared.ConnectionDraining;
import org.openapis.openapi.models.shared.ConsistentHashLoadBalancerSettings;
import org.openapis.openapi.models.shared.ConsistentHashLoadBalancerSettingsHttpCookie;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.GrpcServiceConfig;
import org.openapis.openapi.models.shared.Jwt;
import org.openapis.openapi.models.shared.JwtHeader;
import org.openapis.openapi.models.shared.MetadataCredentialsFromPlugin;
import org.openapis.openapi.models.shared.MutualTls;
import org.openapis.openapi.models.shared.MutualTlsModeEnum;
import org.openapis.openapi.models.shared.OriginAuthenticationMethod;
import org.openapis.openapi.models.shared.OutlierDetection;
import org.openapis.openapi.models.shared.PeerAuthenticationMethod;
import org.openapis.openapi.models.shared.Permission;
import org.openapis.openapi.models.shared.PermissionConstraint;
import org.openapis.openapi.models.shared.Principal;
import org.openapis.openapi.models.shared.RbacPolicy;
import org.openapis.openapi.models.shared.SdsConfig;
import org.openapis.openapi.models.shared.SecuritySettings;
import org.openapis.openapi.models.shared.Subsetting;
import org.openapis.openapi.models.shared.SubsettingPolicyEnum;
import org.openapis.openapi.models.shared.TlsCertificateContext;
import org.openapis.openapi.models.shared.TlsCertificateContextCertificateSourceEnum;
import org.openapis.openapi.models.shared.TlsCertificatePaths;
import org.openapis.openapi.models.shared.TlsContext;
import org.openapis.openapi.models.shared.TlsValidationContext;
import org.openapis.openapi.models.shared.TlsValidationContextValidationSourceEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionBackendServicesPatchRequest req = new ComputeRegionBackendServicesPatchRequest("exercitationem", "magnam", "consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                backendService1 = new BackendService() {{
                    affinityCookieTtlSec = 918755;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 4447.43;
                            description = "expedita";
                            failover = false;
                            group = "delectus";
                            maxConnections = 437265;
                            maxConnectionsPerEndpoint = 256821;
                            maxConnectionsPerInstance = 457608;
                            maxRate = 134103;
                            maxRatePerEndpoint = 4257.63;
                            maxRatePerInstance = 223.9;
                            maxUtilization = 266.99;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.CONNECTION;
                            capacityScaler = 9751.85;
                            description = "temporibus";
                            failover = false;
                            group = "nihil";
                            maxConnections = 312348;
                            maxConnectionsPerEndpoint = 349166;
                            maxConnectionsPerInstance = 484562;
                            maxRate = 849630;
                            maxRatePerEndpoint = 4960.55;
                            maxRatePerInstance = 4487.36;
                            maxUtilization = 4110.05;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "sed";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("fuga"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("praesentium"),
                                add("ipsa"),
                                add("dolores"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("nobis"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("minus"),
                                add("accusantium"),
                                add("dolor"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.CACHE_ALL_STATIC;
                        clientTtl = 90289;
                        defaultTtl = 779110;
                        maxTtl = 816886;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 514085;
                                ttl = 270722;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 263949;
                                ttl = 908533;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 196743;
                                ttl = 272740;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 53814;
                                ttl = 559536;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 316425;
                        signedUrlCacheMaxAgeSec = "id";
                        signedUrlKeyNames = new String[]{{
                            add("hic"),
                            add("magni"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        connectTimeout = new Duration() {{
                            nanos = 518250;
                            seconds = "reprehenderit";
                        }};;
                        maxConnections = 72353;
                        maxPendingRequests = 572835;
                        maxRequests = 665409;
                        maxRequestsPerConnection = 58395;
                        maxRetries = 511441;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.DISABLED;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 269651;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.NEVER_PERSIST;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 564254;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.INVALID_TRACKING_MODE;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Dr. Chad O'Kon";
                            path = "at";
                            ttl = new Duration() {{
                                nanos = 677727;
                                seconds = "iste";
                            }};;
                        }};;
                        httpHeaderName = "dicta";
                        minimumRingSize = "eligendi";
                    }};;
                    creationTimestamp = "porro";
                    customRequestHeaders = new String[]{{
                        add("dolorum"),
                        add("reiciendis"),
                        add("laboriosam"),
                        add("distinctio"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("esse"),
                    }};
                    description = "ex";
                    edgeSecurityPolicy = "est";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 4911.6;
                    }};;
                    fingerprint = "reiciendis";
                    healthChecks = new String[]{{
                        add("incidunt"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "labore";
                        oauth2ClientInfo = new BackendServiceIAPOAuth2ClientInfo() {{
                            applicationName = "sed";
                            clientName = "consequatur";
                            developerEmailAddress = "vel";
                        }};;
                        oauth2ClientSecret = "consequatur";
                        oauth2ClientSecretSha256 = "saepe";
                    }};;
                    id = "quidem";
                    ipAddressSelectionPolicy = BackendServiceIpAddressSelectionPolicyEnum.PREFER_IPV6;
                    kind = "sint";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.INTERNAL_MANAGED;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "in";
                                name = "Christina Mills";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.LEAST_REQUEST;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "architecto";
                                name = "Archie Prosacco";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.LEAST_REQUEST;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "impedit";
                                name = "Mrs. Mona Baumbach";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.WEIGHTED_MAGLEV;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.INVALID_LB_POLICY;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optional = BackendServiceLogConfigOptionalEnum.UNSPECIFIED_OPTIONAL_MODE;
                        optionalFields = new String[]{{
                            add("quod"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.INCLUDE_ALL_OPTIONAL;
                        sampleRate = 226.9;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 228853;
                        seconds = "porro";
                    }};;
                    metadatas = new java.util.HashMap<String, String>() {{
                        put("eius", "placeat");
                        put("iure", "quo");
                        put("error", "nemo");
                    }};
                    name = "Ellen Bauch";
                    network = "architecto";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 32421;
                            seconds = "facere";
                        }};;
                        consecutiveErrors = 232261;
                        consecutiveGatewayFailure = 669874;
                        enforcingConsecutiveErrors = 382670;
                        enforcingConsecutiveGatewayFailure = 139627;
                        enforcingSuccessRate = 939763;
                        interval = new Duration() {{
                            nanos = 107928;
                            seconds = "iusto";
                        }};;
                        maxEjectionPercent = 730532;
                        successRateMinimumHosts = 218577;
                        successRateRequestVolume = 184030;
                        successRateStdevFactor = 787397;
                    }};;
                    port = 723764;
                    portName = "omnis";
                    protocol = BackendServiceProtocolEnum.HTTP2;
                    region = "maxime";
                    securityPolicy = "sequi";
                    securitySettings = new SecuritySettings() {{
                        authentication = "sequi";
                        authenticationPolicy = new AuthenticationPolicy() {{
                            origins = new org.openapis.openapi.models.shared.OriginAuthenticationMethod[]{{
                                add(new OriginAuthenticationMethod() {{
                                    jwt = new Jwt() {{
                                        audiences = new String[]{{
                                            add("ipsum"),
                                            add("ducimus"),
                                        }};
                                        issuer = "quis";
                                        jwksPublicKeys = "voluptatum";
                                        jwtHeaders = new org.openapis.openapi.models.shared.JwtHeader[]{{
                                            add(new JwtHeader() {{
                                                name = "Mr. Vanessa Renner";
                                                valuePrefix = "eligendi";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Dwayne Feest";
                                                valuePrefix = "eum";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Karen Hyatt";
                                                valuePrefix = "illo";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Judith Hane MD";
                                                valuePrefix = "nesciunt";
                                            }}),
                                        }};
                                        jwtParams = new String[]{{
                                            add("eius"),
                                            add("quis"),
                                            add("error"),
                                        }};
                                    }};
                                }}),
                                add(new OriginAuthenticationMethod() {{
                                    jwt = new Jwt() {{
                                        audiences = new String[]{{
                                            add("maiores"),
                                            add("suscipit"),
                                            add("laboriosam"),
                                        }};
                                        issuer = "in";
                                        jwksPublicKeys = "cumque";
                                        jwtHeaders = new org.openapis.openapi.models.shared.JwtHeader[]{{
                                            add(new JwtHeader() {{
                                                name = "Miss Dora Mante";
                                                valuePrefix = "beatae";
                                            }}),
                                        }};
                                        jwtParams = new String[]{{
                                            add("perferendis"),
                                            add("maxime"),
                                            add("beatae"),
                                        }};
                                    }};
                                }}),
                                add(new OriginAuthenticationMethod() {{
                                    jwt = new Jwt() {{
                                        audiences = new String[]{{
                                            add("blanditiis"),
                                        }};
                                        issuer = "deleniti";
                                        jwksPublicKeys = "tempore";
                                        jwtHeaders = new org.openapis.openapi.models.shared.JwtHeader[]{{
                                            add(new JwtHeader() {{
                                                name = "Sara Luettgen";
                                                valuePrefix = "laboriosam";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Jill Cole";
                                                valuePrefix = "vitae";
                                            }}),
                                        }};
                                        jwtParams = new String[]{{
                                            add("sapiente"),
                                            add("pariatur"),
                                            add("perspiciatis"),
                                        }};
                                    }};
                                }}),
                            }};
                            peers = new org.openapis.openapi.models.shared.PeerAuthenticationMethod[]{{
                                add(new PeerAuthenticationMethod() {{
                                    mtls = new MutualTls() {{
                                        mode = MutualTlsModeEnum.INVALID;
                                    }};
                                }}),
                            }};
                            principalBinding = AuthenticationPolicyPrincipalBindingEnum.USE_PEER;
                            serverTlsContext = new TlsContext() {{
                                certificateContext = new TlsCertificateContext() {{
                                    certificatePaths = new TlsCertificatePaths() {{
                                        certificatePath = "vero";
                                        privateKeyPath = "nesciunt";
                                    }};;
                                    certificateSource = TlsCertificateContextCertificateSourceEnum.INVALID;
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.FROM_PLUGIN;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Mr. Harriet Kutch";
                                                    structConfig = "repellendus";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "et";
                                                    privateKeyPath = "veritatis";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.INVALID;
                                            }};;
                                            targetUri = "consectetur";
                                        }};;
                                    }};;
                                }};;
                                validationContext = new TlsValidationContext() {{
                                    certificatePath = "velit";
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.GCE_VM;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Beatrice Kessler";
                                                    structConfig = "odit";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "molestiae";
                                                    privateKeyPath = "necessitatibus";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.CERTIFICATES;
                                            }};;
                                            targetUri = "quia";
                                        }};;
                                    }};;
                                    validationSource = TlsValidationContextValidationSourceEnum.USE_PATH;
                                }};;
                            }};;
                        }};;
                        authorizationConfig = new AuthorizationConfig() {{
                            policies = new org.openapis.openapi.models.shared.RbacPolicy[]{{
                                add(new RbacPolicy() {{
                                    name = "Elijah Cummerata";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "minima";
                                                    values = new String[]{{
                                                        add("perspiciatis"),
                                                        add("voluptate"),
                                                        add("perferendis"),
                                                        add("dolorem"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "id";
                                                    values = new String[]{{
                                                        add("provident"),
                                                        add("laboriosam"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "natus";
                                                    values = new String[]{{
                                                        add("assumenda"),
                                                        add("et"),
                                                        add("dignissimos"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("earum"),
                                            }};
                                            methods = new String[]{{
                                                add("deleniti"),
                                                add("minus"),
                                                add("ut"),
                                                add("dolore"),
                                            }};
                                            notHosts = new String[]{{
                                                add("perferendis"),
                                            }};
                                            notMethods = new String[]{{
                                                add("eius"),
                                                add("sunt"),
                                                add("quos"),
                                                add("porro"),
                                            }};
                                            notPaths = new String[]{{
                                                add("natus"),
                                                add("temporibus"),
                                                add("molestiae"),
                                            }};
                                            notPorts = new String[]{{
                                                add("iusto"),
                                                add("libero"),
                                                add("et"),
                                            }};
                                            paths = new String[]{{
                                                add("dolor"),
                                            }};
                                            ports = new String[]{{
                                                add("officia"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "at";
                                                    values = new String[]{{
                                                        add("adipisci"),
                                                        add("exercitationem"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("sit"),
                                            }};
                                            methods = new String[]{{
                                                add("qui"),
                                            }};
                                            notHosts = new String[]{{
                                                add("sed"),
                                            }};
                                            notMethods = new String[]{{
                                                add("occaecati"),
                                            }};
                                            notPaths = new String[]{{
                                                add("ratione"),
                                                add("quaerat"),
                                            }};
                                            notPorts = new String[]{{
                                                add("deserunt"),
                                            }};
                                            paths = new String[]{{
                                                add("maxime"),
                                                add("eveniet"),
                                                add("esse"),
                                                add("fugit"),
                                            }};
                                            ports = new String[]{{
                                                add("sunt"),
                                                add("nisi"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "iste";
                                                    values = new String[]{{
                                                        add("consequatur"),
                                                        add("commodi"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("vel"),
                                                add("quos"),
                                            }};
                                            methods = new String[]{{
                                                add("illum"),
                                                add("explicabo"),
                                            }};
                                            notHosts = new String[]{{
                                                add("nesciunt"),
                                            }};
                                            notMethods = new String[]{{
                                                add("culpa"),
                                                add("eius"),
                                                add("ratione"),
                                                add("iusto"),
                                            }};
                                            notPaths = new String[]{{
                                                add("beatae"),
                                                add("nisi"),
                                                add("quisquam"),
                                                add("odit"),
                                            }};
                                            notPorts = new String[]{{
                                                add("ducimus"),
                                                add("repudiandae"),
                                                add("voluptatem"),
                                                add("iste"),
                                            }};
                                            paths = new String[]{{
                                                add("recusandae"),
                                                add("laborum"),
                                                add("possimus"),
                                            }};
                                            ports = new String[]{{
                                                add("commodi"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "voluptates";
                                                    values = new String[]{{
                                                        add("dolore"),
                                                        add("ipsa"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "in";
                                                    values = new String[]{{
                                                        add("possimus"),
                                                        add("recusandae"),
                                                        add("iste"),
                                                        add("laudantium"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "veniam";
                                                    values = new String[]{{
                                                        add("debitis"),
                                                        add("dignissimos"),
                                                        add("consequatur"),
                                                        add("doloribus"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("dicta"),
                                                add("non"),
                                                add("dolorum"),
                                                add("doloribus"),
                                            }};
                                            methods = new String[]{{
                                                add("doloremque"),
                                                add("nulla"),
                                                add("fugit"),
                                                add("expedita"),
                                            }};
                                            notHosts = new String[]{{
                                                add("odit"),
                                                add("explicabo"),
                                            }};
                                            notMethods = new String[]{{
                                                add("magnam"),
                                                add("rem"),
                                                add("cupiditate"),
                                            }};
                                            notPaths = new String[]{{
                                                add("explicabo"),
                                            }};
                                            notPorts = new String[]{{
                                                add("facilis"),
                                                add("earum"),
                                            }};
                                            paths = new String[]{{
                                                add("eligendi"),
                                                add("est"),
                                            }};
                                            ports = new String[]{{
                                                add("aliquid"),
                                                add("voluptatem"),
                                                add("atque"),
                                            }};
                                        }}),
                                    }};
                                    principals = new org.openapis.openapi.models.shared.Principal[]{{
                                        add(new Principal() {{
                                            condition = "magni";
                                            groups = new String[]{{
                                                add("possimus"),
                                                add("suscipit"),
                                                add("nam"),
                                            }};
                                            ips = new String[]{{
                                                add("dolor"),
                                                add("error"),
                                                add("consectetur"),
                                            }};
                                            namespaces = new String[]{{
                                                add("amet"),
                                                add("dolore"),
                                                add("sed"),
                                            }};
                                            notGroups = new String[]{{
                                                add("quos"),
                                                add("perferendis"),
                                            }};
                                            notIps = new String[]{{
                                                add("libero"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("ad"),
                                                add("quia"),
                                            }};
                                            notUsers = new String[]{{
                                                add("occaecati"),
                                                add("esse"),
                                                add("quae"),
                                                add("nemo"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("quibusdam", "nostrum");
                                                put("qui", "architecto");
                                                put("blanditiis", "ducimus");
                                                put("error", "necessitatibus");
                                            }};
                                            users = new String[]{{
                                                add("rem"),
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new RbacPolicy() {{
                                    name = "Wendell Hackett";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "possimus";
                                                    values = new String[]{{
                                                        add("eaque"),
                                                        add("magni"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "architecto";
                                                    values = new String[]{{
                                                        add("quasi"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("sapiente"),
                                                add("consectetur"),
                                                add("voluptatum"),
                                            }};
                                            methods = new String[]{{
                                                add("alias"),
                                                add("molestiae"),
                                                add("voluptates"),
                                            }};
                                            notHosts = new String[]{{
                                                add("sapiente"),
                                                add("iure"),
                                                add("reiciendis"),
                                                add("dolor"),
                                            }};
                                            notMethods = new String[]{{
                                                add("cumque"),
                                                add("ad"),
                                            }};
                                            notPaths = new String[]{{
                                                add("est"),
                                                add("commodi"),
                                                add("enim"),
                                                add("ut"),
                                            }};
                                            notPorts = new String[]{{
                                                add("ex"),
                                                add("architecto"),
                                                add("expedita"),
                                            }};
                                            paths = new String[]{{
                                                add("tempora"),
                                                add("eveniet"),
                                            }};
                                            ports = new String[]{{
                                                add("perferendis"),
                                                add("culpa"),
                                                add("blanditiis"),
                                                add("eum"),
                                            }};
                                        }}),
                                    }};
                                    principals = new org.openapis.openapi.models.shared.Principal[]{{
                                        add(new Principal() {{
                                            condition = "modi";
                                            groups = new String[]{{
                                                add("incidunt"),
                                                add("rem"),
                                                add("unde"),
                                                add("delectus"),
                                            }};
                                            ips = new String[]{{
                                                add("totam"),
                                                add("nulla"),
                                            }};
                                            namespaces = new String[]{{
                                                add("tenetur"),
                                                add("sunt"),
                                            }};
                                            notGroups = new String[]{{
                                                add("aut"),
                                                add("sunt"),
                                                add("molestiae"),
                                                add("tempora"),
                                            }};
                                            notIps = new String[]{{
                                                add("voluptatibus"),
                                                add("consequuntur"),
                                                add("optio"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("tempora"),
                                                add("suscipit"),
                                            }};
                                            notUsers = new String[]{{
                                                add("ullam"),
                                                add("labore"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("rerum", "rem");
                                                put("non", "blanditiis");
                                                put("sapiente", "modi");
                                            }};
                                            users = new String[]{{
                                                add("maxime"),
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new RbacPolicy() {{
                                    name = "Tami Franey";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "voluptatibus";
                                                    values = new String[]{{
                                                        add("laborum"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "sunt";
                                                    values = new String[]{{
                                                        add("doloremque"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "reiciendis";
                                                    values = new String[]{{
                                                        add("natus"),
                                                        add("quis"),
                                                        add("sit"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("dolor"),
                                                add("magnam"),
                                                add("totam"),
                                                add("consequatur"),
                                            }};
                                            methods = new String[]{{
                                                add("sapiente"),
                                                add("eaque"),
                                                add("cum"),
                                                add("voluptate"),
                                            }};
                                            notHosts = new String[]{{
                                                add("et"),
                                            }};
                                            notMethods = new String[]{{
                                                add("commodi"),
                                                add("odit"),
                                                add("aspernatur"),
                                                add("ratione"),
                                            }};
                                            notPaths = new String[]{{
                                                add("cum"),
                                                add("quaerat"),
                                                add("odio"),
                                                add("cumque"),
                                            }};
                                            notPorts = new String[]{{
                                                add("vitae"),
                                                add("est"),
                                                add("sapiente"),
                                                add("ullam"),
                                            }};
                                            paths = new String[]{{
                                                add("soluta"),
                                                add("adipisci"),
                                                add("unde"),
                                            }};
                                            ports = new String[]{{
                                                add("laudantium"),
                                                add("occaecati"),
                                                add("nemo"),
                                                add("velit"),
                                            }};
                                        }}),
                                    }};
                                    principals = new org.openapis.openapi.models.shared.Principal[]{{
                                        add(new Principal() {{
                                            condition = "id";
                                            groups = new String[]{{
                                                add("culpa"),
                                                add("nihil"),
                                                add("delectus"),
                                            }};
                                            ips = new String[]{{
                                                add("distinctio"),
                                                add("cumque"),
                                                add("id"),
                                            }};
                                            namespaces = new String[]{{
                                                add("quaerat"),
                                                add("incidunt"),
                                                add("quo"),
                                            }};
                                            notGroups = new String[]{{
                                                add("veritatis"),
                                                add("ab"),
                                            }};
                                            notIps = new String[]{{
                                                add("assumenda"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("deserunt"),
                                            }};
                                            notUsers = new String[]{{
                                                add("fugiat"),
                                                add("ratione"),
                                                add("dicta"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("voluptas", "cupiditate");
                                            }};
                                            users = new String[]{{
                                                add("ut"),
                                                add("commodi"),
                                            }};
                                        }}),
                                        add(new Principal() {{
                                            condition = "officia";
                                            groups = new String[]{{
                                                add("iusto"),
                                                add("suscipit"),
                                                add("pariatur"),
                                                add("quas"),
                                            }};
                                            ips = new String[]{{
                                                add("soluta"),
                                            }};
                                            namespaces = new String[]{{
                                                add("ex"),
                                                add("molestiae"),
                                                add("quasi"),
                                            }};
                                            notGroups = new String[]{{
                                                add("magnam"),
                                                add("excepturi"),
                                                add("eius"),
                                            }};
                                            notIps = new String[]{{
                                                add("beatae"),
                                                add("non"),
                                                add("tempora"),
                                                add("laborum"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("minus"),
                                                add("at"),
                                            }};
                                            notUsers = new String[]{{
                                                add("eos"),
                                                add("ut"),
                                                add("officia"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("deleniti", "voluptate");
                                                put("similique", "beatae");
                                            }};
                                            users = new String[]{{
                                                add("ad"),
                                                add("temporibus"),
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                        }};;
                        awsV4Authentication = new Awsv4Signature() {{
                            accessKey = "ab";
                            accessKeyId = "incidunt";
                            accessKeyVersion = "voluptate";
                            originRegion = "adipisci";
                        }};;
                        clientTlsPolicy = "adipisci";
                        clientTlsSettings = new ClientTlsSettings() {{
                            clientTlsContext = new TlsContext() {{
                                certificateContext = new TlsCertificateContext() {{
                                    certificatePaths = new TlsCertificatePaths() {{
                                        certificatePath = "iure";
                                        privateKeyPath = "excepturi";
                                    }};;
                                    certificateSource = TlsCertificateContextCertificateSourceEnum.USE_SDS;
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.INVALID;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Robin Runte";
                                                    structConfig = "explicabo";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "nostrum";
                                                    privateKeyPath = "odio";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.INVALID;
                                            }};;
                                            targetUri = "nihil";
                                        }};;
                                    }};;
                                }};;
                                validationContext = new TlsValidationContext() {{
                                    certificatePath = "deserunt";
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.GCE_VM;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Miss Santos Cole";
                                                    structConfig = "magnam";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "animi";
                                                    privateKeyPath = "minima";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.CERTIFICATES;
                                            }};;
                                            targetUri = "impedit";
                                        }};;
                                    }};;
                                    validationSource = TlsValidationContextValidationSourceEnum.USE_SDS;
                                }};;
                            }};;
                            mode = ClientTlsSettingsModeEnum.DISABLE;
                            sni = "explicabo";
                            subjectAltNames = new String[]{{
                                add("in"),
                                add("pariatur"),
                            }};
                        }};;
                        subjectAltNames = new String[]{{
                            add("ullam"),
                            add("dicta"),
                            add("repellat"),
                        }};
                    }};;
                    selfLink = "repudiandae";
                    selfLinkWithId = "minima";
                    serviceBindings = new String[]{{
                        add("provident"),
                        add("vero"),
                    }};
                    serviceLbPolicy = "soluta";
                    sessionAffinity = BackendServiceSessionAffinityEnum.HEADER_FIELD;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.CONSISTENT_HASH_SUBSETTING;
                        subsetSize = 174206;
                    }};;
                    timeoutSec = 363384;
                    vpcNetworkScope = BackendServiceVpcNetworkScopeEnum.REGIONAL_VPC_NETWORK;
                }};;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "dignissimos";
                key = "aut";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "voluptatem";
                requestId = "itaque";
                uploadType = "animi";
                uploadProtocol = "enim";
                userIp = "earum";
            }};            

            ComputeRegionBackendServicesPatchResponse res = sdk.regionBackendServices.computeRegionBackendServicesPatch(req, new ComputeRegionBackendServicesPatchSecurity() {{
                option1 = new ComputeRegionBackendServicesPatchSecurityOption1("vero", "aut") {{
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

            ComputeRegionBackendServicesSetIamPolicyRequest req = new ComputeRegionBackendServicesSetIamPolicyRequest("fugit", "ad", "accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "rerum";
                            condition = new Expr() {{
                                description = "minima";
                                expression = "commodi";
                                location = "labore";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("laudantium"),
                                add("ad"),
                                add("ducimus"),
                                add("soluta"),
                            }};
                            role = "debitis";
                        }}),
                        add(new Binding() {{
                            bindingId = "animi";
                            condition = new Expr() {{
                                description = "accusamus";
                                expression = "perspiciatis";
                                location = "nemo";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("deserunt"),
                                add("eos"),
                                add("totam"),
                                add("hic"),
                            }};
                            role = "sit";
                        }}),
                        add(new Binding() {{
                            bindingId = "saepe";
                            condition = new Expr() {{
                                description = "eveniet";
                                expression = "consectetur";
                                location = "odio";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("exercitationem"),
                                add("perferendis"),
                                add("hic"),
                                add("porro"),
                            }};
                            role = "incidunt";
                        }}),
                        add(new Binding() {{
                            bindingId = "a";
                            condition = new Expr() {{
                                description = "corrupti";
                                expression = "quis";
                                location = "officiis";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("alias"),
                                add("qui"),
                            }};
                            role = "nemo";
                        }}),
                    }};
                    etag = "non";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("temporibus"),
                                            add("quis"),
                                            add("corrupti"),
                                            add("cumque"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("cumque"),
                                            add("debitis"),
                                            add("earum"),
                                            add("iure"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("iusto"),
                                            add("voluptatibus"),
                                            add("est"),
                                            add("assumenda"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("minus"),
                                            add("veritatis"),
                                            add("praesentium"),
                                            add("eum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("repellendus"),
                                    add("nesciunt"),
                                }};
                                service = "sit";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eius"),
                                            add("recusandae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quaerat"),
                                            add("omnis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("dolores"),
                                }};
                                service = "ullam";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "veniam";
                                condition = new Expr() {{
                                    description = "perspiciatis";
                                    expression = "ducimus";
                                    location = "culpa";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("dolorum"),
                                    add("rerum"),
                                }};
                                role = "nobis";
                            }}),
                        }};
                        etag = "magni";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "culpa";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("adipisci"),
                                            add("sunt"),
                                            add("quos"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "minima";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("vitae"),
                                            add("nesciunt"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "est";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("consequuntur"),
                                        }};
                                    }}),
                                }};
                                description = "ipsum";
                                ins = new String[]{{
                                    add("quas"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Pedro Oberbrunner";
                                                    value = "reiciendis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Holly Kunze";
                                                    value = "quod";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Patrick Kunde";
                                                    value = "reiciendis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Willis Homenick";
                                                    value = "quaerat";
                                                }}),
                                            }};
                                            field = "deleniti";
                                            metric = "veritatis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
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
                                                    name = "Gregory Turner";
                                                    value = "eius";
                                                }}),
                                            }};
                                            field = "atque";
                                            metric = "iure";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("earum"),
                                    add("perspiciatis"),
                                    add("accusantium"),
                                    add("blanditiis"),
                                }};
                                permissions = new String[]{{
                                    add("accusantium"),
                                    add("nesciunt"),
                                    add("optio"),
                                    add("enim"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "architecto";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("eaque"),
                                            add("ratione"),
                                            add("assumenda"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "expedita";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("quas"),
                                            add("similique"),
                                            add("ipsum"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "architecto";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("asperiores"),
                                        }};
                                    }}),
                                }};
                                description = "impedit";
                                ins = new String[]{{
                                    add("tempora"),
                                    add("placeat"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Mr. Della Kulas DDS";
                                                    value = "magni";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lance Hermann";
                                                    value = "pariatur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ian Rogahn";
                                                    value = "amet";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Amanda Schiller III";
                                                    value = "quaerat";
                                                }}),
                                            }};
                                            field = "sequi";
                                            metric = "nemo";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
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
                                                    name = "Rachel Hane";
                                                    value = "excepturi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Virgil Marks";
                                                    value = "et";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kathryn Streich";
                                                    value = "ea";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Christopher Bosco MD";
                                                    value = "quae";
                                                }}),
                                            }};
                                            field = "velit";
                                            metric = "itaque";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Pamela Denesik";
                                                    value = "provident";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jeanne Ziemann";
                                                    value = "asperiores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Denise Heller";
                                                    value = "asperiores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Doug Shanahan";
                                                    value = "vitae";
                                                }}),
                                            }};
                                            field = "commodi";
                                            metric = "sed";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("iure"),
                                    add("similique"),
                                }};
                                permissions = new String[]{{
                                    add("quaerat"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "saepe";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("reprehenderit"),
                                            add("reprehenderit"),
                                            add("molestiae"),
                                            add("veniam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "voluptatum";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("voluptatum"),
                                            add("saepe"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "a";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("possimus"),
                                            add("maxime"),
                                            add("porro"),
                                        }};
                                    }}),
                                }};
                                description = "a";
                                ins = new String[]{{
                                    add("doloremque"),
                                    add("excepturi"),
                                    add("sapiente"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Garrett Gorczany";
                                                    value = "laudantium";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Irving Wiza PhD";
                                                    value = "temporibus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rosemarie Schiller";
                                                    value = "eveniet";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lana Littel";
                                                    value = "itaque";
                                                }}),
                                            }};
                                            field = "temporibus";
                                            metric = "laboriosam";
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
                                                    name = "Alonzo Breitenberg";
                                                    value = "id";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Vicki Bailey PhD";
                                                    value = "debitis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kay Feil";
                                                    value = "nulla";
                                                }}),
                                            }};
                                            field = "aliquid";
                                            metric = "pariatur";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("perspiciatis"),
                                    add("sit"),
                                    add("placeat"),
                                    add("asperiores"),
                                }};
                                permissions = new String[]{{
                                    add("quisquam"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "eos";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("nisi"),
                                            add("ad"),
                                            add("molestias"),
                                        }};
                                    }}),
                                }};
                                description = "distinctio";
                                ins = new String[]{{
                                    add("quisquam"),
                                    add("tempore"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Jeanne Bayer";
                                                    value = "culpa";
                                                }}),
                                            }};
                                            field = "blanditiis";
                                            metric = "vitae";
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
                                                    name = "Erick Boehm";
                                                    value = "possimus";
                                                }}),
                                            }};
                                            field = "iure";
                                            metric = "vero";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
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
                                                    name = "Gladys Dickinson";
                                                    value = "nihil";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Salvador Becker";
                                                    value = "incidunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Katherine Mills";
                                                    value = "totam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Delia Cremin";
                                                    value = "unde";
                                                }}),
                                            }};
                                            field = "maxime";
                                            metric = "modi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("deserunt"),
                                }};
                                permissions = new String[]{{
                                    add("commodi"),
                                    add("enim"),
                                }};
                            }}),
                        }};
                        version = 651556;
                    }};;
                }};;
                accessToken = "eos";
                alt = AltEnum.JSON;
                callback = "magni";
                fields = "quisquam";
                key = "necessitatibus";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "delectus";
                uploadProtocol = "maxime";
                userIp = "numquam";
            }};            

            ComputeRegionBackendServicesSetIamPolicyResponse res = sdk.regionBackendServices.computeRegionBackendServicesSetIamPolicy(req, new ComputeRegionBackendServicesSetIamPolicySecurity() {{
                option1 = new ComputeRegionBackendServicesSetIamPolicySecurityOption1("eos", "officia") {{
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

## computeRegionBackendServicesSetSecurityPolicy

Sets the Google Cloud Armor security policy for the specified backend service. For more information, see Google Cloud Armor Overview

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesSetSecurityPolicyRequest;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesSetSecurityPolicyResponse;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesSetSecurityPolicySecurity;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesSetSecurityPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionBackendServicesSetSecurityPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SecurityPolicyReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionBackendServicesSetSecurityPolicyRequest req = new ComputeRegionBackendServicesSetSecurityPolicyRequest("sed", "fugiat", "impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyReference = new SecurityPolicyReference() {{
                    securityPolicy = "deserunt";
                }};;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "iure";
                fields = "dolorem";
                key = "laudantium";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "ipsum";
                requestId = "voluptates";
                uploadType = "maxime";
                uploadProtocol = "reprehenderit";
                userIp = "libero";
            }};            

            ComputeRegionBackendServicesSetSecurityPolicyResponse res = sdk.regionBackendServices.computeRegionBackendServicesSetSecurityPolicy(req, new ComputeRegionBackendServicesSetSecurityPolicySecurity() {{
                option1 = new ComputeRegionBackendServicesSetSecurityPolicySecurityOption1("asperiores", "molestias") {{
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

            ComputeRegionBackendServicesTestIamPermissionsRequest req = new ComputeRegionBackendServicesTestIamPermissionsRequest("cupiditate", "maiores", "consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("commodi"),
                        add("nam"),
                        add("sed"),
                        add("a"),
                    }};
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "maiores";
                key = "veniam";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "reiciendis";
                uploadProtocol = "quod";
                userIp = "iste";
            }};            

            ComputeRegionBackendServicesTestIamPermissionsResponse res = sdk.regionBackendServices.computeRegionBackendServicesTestIamPermissions(req, new ComputeRegionBackendServicesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionBackendServicesTestIamPermissionsSecurityOption1("et", "fuga") {{
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
import org.openapis.openapi.models.shared.AuthenticationPolicy;
import org.openapis.openapi.models.shared.AuthenticationPolicyPrincipalBindingEnum;
import org.openapis.openapi.models.shared.AuthorizationConfig;
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
import org.openapis.openapi.models.shared.BackendServiceIAPOAuth2ClientInfo;
import org.openapis.openapi.models.shared.BackendServiceIpAddressSelectionPolicyEnum;
import org.openapis.openapi.models.shared.BackendServiceLoadBalancingSchemeEnum;
import org.openapis.openapi.models.shared.BackendServiceLocalityLbPolicyEnum;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigPolicy;
import org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum;
import org.openapis.openapi.models.shared.BackendServiceLogConfig;
import org.openapis.openapi.models.shared.BackendServiceLogConfigOptionalEnum;
import org.openapis.openapi.models.shared.BackendServiceLogConfigOptionalModeEnum;
import org.openapis.openapi.models.shared.BackendServiceProtocolEnum;
import org.openapis.openapi.models.shared.BackendServiceSessionAffinityEnum;
import org.openapis.openapi.models.shared.BackendServiceVpcNetworkScopeEnum;
import org.openapis.openapi.models.shared.CacheKeyPolicy;
import org.openapis.openapi.models.shared.CallCredentials;
import org.openapis.openapi.models.shared.CallCredentialsCallCredentialTypeEnum;
import org.openapis.openapi.models.shared.ChannelCredentials;
import org.openapis.openapi.models.shared.ChannelCredentialsChannelCredentialTypeEnum;
import org.openapis.openapi.models.shared.CircuitBreakers;
import org.openapis.openapi.models.shared.ClientTlsSettings;
import org.openapis.openapi.models.shared.ClientTlsSettingsModeEnum;
import org.openapis.openapi.models.shared.ConnectionDraining;
import org.openapis.openapi.models.shared.ConsistentHashLoadBalancerSettings;
import org.openapis.openapi.models.shared.ConsistentHashLoadBalancerSettingsHttpCookie;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.GrpcServiceConfig;
import org.openapis.openapi.models.shared.Jwt;
import org.openapis.openapi.models.shared.JwtHeader;
import org.openapis.openapi.models.shared.MetadataCredentialsFromPlugin;
import org.openapis.openapi.models.shared.MutualTls;
import org.openapis.openapi.models.shared.MutualTlsModeEnum;
import org.openapis.openapi.models.shared.OriginAuthenticationMethod;
import org.openapis.openapi.models.shared.OutlierDetection;
import org.openapis.openapi.models.shared.PeerAuthenticationMethod;
import org.openapis.openapi.models.shared.Permission;
import org.openapis.openapi.models.shared.PermissionConstraint;
import org.openapis.openapi.models.shared.Principal;
import org.openapis.openapi.models.shared.RbacPolicy;
import org.openapis.openapi.models.shared.SdsConfig;
import org.openapis.openapi.models.shared.SecuritySettings;
import org.openapis.openapi.models.shared.Subsetting;
import org.openapis.openapi.models.shared.SubsettingPolicyEnum;
import org.openapis.openapi.models.shared.TlsCertificateContext;
import org.openapis.openapi.models.shared.TlsCertificateContextCertificateSourceEnum;
import org.openapis.openapi.models.shared.TlsCertificatePaths;
import org.openapis.openapi.models.shared.TlsContext;
import org.openapis.openapi.models.shared.TlsValidationContext;
import org.openapis.openapi.models.shared.TlsValidationContextValidationSourceEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionBackendServicesUpdateRequest req = new ComputeRegionBackendServicesUpdateRequest("veritatis", "error", "et") {{
                dollarXgafv = XgafvEnum.ONE;
                backendService1 = new BackendService() {{
                    affinityCookieTtlSec = 33417;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 2120.56;
                            description = "qui";
                            failover = false;
                            group = "quos";
                            maxConnections = 668446;
                            maxConnectionsPerEndpoint = 249362;
                            maxConnectionsPerInstance = 848030;
                            maxRate = 245516;
                            maxRatePerEndpoint = 5266.72;
                            maxRatePerInstance = 9333.47;
                            maxUtilization = 8292.11;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "nemo";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "quam";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "minus";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "eos";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("ex"),
                                add("consectetur"),
                                add("suscipit"),
                                add("asperiores"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("nam"),
                                add("hic"),
                                add("eaque"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("consequuntur"),
                                add("veniam"),
                                add("temporibus"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("iste"),
                                add("voluptates"),
                                add("reprehenderit"),
                                add("placeat"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.INVALID_CACHE_MODE;
                        clientTtl = 404;
                        defaultTtl = 285353;
                        maxTtl = 521585;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 801581;
                                ttl = 23554;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 374437;
                                ttl = 964450;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 359190;
                                ttl = 999963;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 53846;
                        signedUrlCacheMaxAgeSec = "amet";
                        signedUrlKeyNames = new String[]{{
                            add("corporis"),
                            add("quisquam"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        connectTimeout = new Duration() {{
                            nanos = 328402;
                            seconds = "iusto";
                        }};;
                        maxConnections = 247840;
                        maxPendingRequests = 509797;
                        maxRequests = 109575;
                        maxRequestsPerConnection = 273549;
                        maxRetries = 688938;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.AUTOMATIC;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 334282;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.DEFAULT_FOR_PROTOCOL;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 195498;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.INVALID_TRACKING_MODE;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Elmer Hintz Jr.";
                            path = "laboriosam";
                            ttl = new Duration() {{
                                nanos = 95489;
                                seconds = "expedita";
                            }};;
                        }};;
                        httpHeaderName = "nihil";
                        minimumRingSize = "occaecati";
                    }};;
                    creationTimestamp = "exercitationem";
                    customRequestHeaders = new String[]{{
                        add("magni"),
                        add("hic"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("soluta"),
                        add("nobis"),
                        add("hic"),
                        add("reiciendis"),
                    }};
                    description = "maxime";
                    edgeSecurityPolicy = "fuga";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 1540.52;
                    }};;
                    fingerprint = "a";
                    healthChecks = new String[]{{
                        add("voluptatibus"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "ab";
                        oauth2ClientInfo = new BackendServiceIAPOAuth2ClientInfo() {{
                            applicationName = "fugit";
                            clientName = "aliquid";
                            developerEmailAddress = "eos";
                        }};;
                        oauth2ClientSecret = "dignissimos";
                        oauth2ClientSecretSha256 = "aperiam";
                    }};;
                    id = "asperiores";
                    ipAddressSelectionPolicy = BackendServiceIpAddressSelectionPolicyEnum.IPV6_ONLY;
                    kind = "saepe";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.INTERNAL_MANAGED;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "dolor";
                                name = "Lynne Larkin";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.ORIGINAL_DESTINATION;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.LEAST_REQUEST;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optional = BackendServiceLogConfigOptionalEnum.CUSTOM;
                        optionalFields = new String[]{{
                            add("possimus"),
                            add("natus"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.UNSPECIFIED_OPTIONAL_MODE;
                        sampleRate = 3376.79;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 314123;
                        seconds = "distinctio";
                    }};;
                    metadatas = new java.util.HashMap<String, String>() {{
                        put("magnam", "voluptatem");
                        put("dolorem", "reprehenderit");
                        put("deleniti", "voluptatum");
                    }};
                    name = "Heidi Weber";
                    network = "molestias";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 461617;
                            seconds = "minus";
                        }};;
                        consecutiveErrors = 715660;
                        consecutiveGatewayFailure = 843988;
                        enforcingConsecutiveErrors = 604358;
                        enforcingConsecutiveGatewayFailure = 904719;
                        enforcingSuccessRate = 291294;
                        interval = new Duration() {{
                            nanos = 117456;
                            seconds = "earum";
                        }};;
                        maxEjectionPercent = 961548;
                        successRateMinimumHosts = 456317;
                        successRateRequestVolume = 715942;
                        successRateStdevFactor = 681306;
                    }};;
                    port = 348727;
                    portName = "fugit";
                    protocol = BackendServiceProtocolEnum.ALL;
                    region = "eius";
                    securityPolicy = "doloribus";
                    securitySettings = new SecuritySettings() {{
                        authentication = "consequuntur";
                        authenticationPolicy = new AuthenticationPolicy() {{
                            origins = new org.openapis.openapi.models.shared.OriginAuthenticationMethod[]{{
                                add(new OriginAuthenticationMethod() {{
                                    jwt = new Jwt() {{
                                        audiences = new String[]{{
                                            add("illum"),
                                            add("inventore"),
                                            add("necessitatibus"),
                                        }};
                                        issuer = "autem";
                                        jwksPublicKeys = "ipsam";
                                        jwtHeaders = new org.openapis.openapi.models.shared.JwtHeader[]{{
                                            add(new JwtHeader() {{
                                                name = "Tina Donnelly";
                                                valuePrefix = "minima";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Felix Osinski";
                                                valuePrefix = "facilis";
                                            }}),
                                        }};
                                        jwtParams = new String[]{{
                                            add("placeat"),
                                            add("vel"),
                                            add("ex"),
                                        }};
                                    }};
                                }}),
                                add(new OriginAuthenticationMethod() {{
                                    jwt = new Jwt() {{
                                        audiences = new String[]{{
                                            add("commodi"),
                                            add("veniam"),
                                        }};
                                        issuer = "quas";
                                        jwksPublicKeys = "dolor";
                                        jwtHeaders = new org.openapis.openapi.models.shared.JwtHeader[]{{
                                            add(new JwtHeader() {{
                                                name = "Kirk Kassulke";
                                                valuePrefix = "odit";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Mrs. Debra Kulas";
                                                valuePrefix = "quasi";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Tabitha Beatty";
                                                valuePrefix = "optio";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Margie Ryan";
                                                valuePrefix = "velit";
                                            }}),
                                        }};
                                        jwtParams = new String[]{{
                                            add("deleniti"),
                                            add("doloribus"),
                                        }};
                                    }};
                                }}),
                            }};
                            peers = new org.openapis.openapi.models.shared.PeerAuthenticationMethod[]{{
                                add(new PeerAuthenticationMethod() {{
                                    mtls = new MutualTls() {{
                                        mode = MutualTlsModeEnum.INVALID;
                                    }};
                                }}),
                            }};
                            principalBinding = AuthenticationPolicyPrincipalBindingEnum.INVALID;
                            serverTlsContext = new TlsContext() {{
                                certificateContext = new TlsCertificateContext() {{
                                    certificatePaths = new TlsCertificatePaths() {{
                                        certificatePath = "aperiam";
                                        privateKeyPath = "molestias";
                                    }};;
                                    certificateSource = TlsCertificateContextCertificateSourceEnum.INVALID;
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.FROM_PLUGIN;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Marlon Ankunding Jr.";
                                                    structConfig = "necessitatibus";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "expedita";
                                                    privateKeyPath = "officiis";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.GCE_VM;
                                            }};;
                                            targetUri = "assumenda";
                                        }};;
                                    }};;
                                }};;
                                validationContext = new TlsValidationContext() {{
                                    certificatePath = "nisi";
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.INVALID;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Sophie Sawayn";
                                                    structConfig = "veniam";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "corporis";
                                                    privateKeyPath = "recusandae";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.INVALID;
                                            }};;
                                            targetUri = "aspernatur";
                                        }};;
                                    }};;
                                    validationSource = TlsValidationContextValidationSourceEnum.INVALID;
                                }};;
                            }};;
                        }};;
                        authorizationConfig = new AuthorizationConfig() {{
                            policies = new org.openapis.openapi.models.shared.RbacPolicy[]{{
                                add(new RbacPolicy() {{
                                    name = "Jennifer Schaden";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "vitae";
                                                    values = new String[]{{
                                                        add("culpa"),
                                                        add("distinctio"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("nostrum"),
                                                add("non"),
                                                add("sequi"),
                                                add("nesciunt"),
                                            }};
                                            methods = new String[]{{
                                                add("porro"),
                                                add("voluptatum"),
                                            }};
                                            notHosts = new String[]{{
                                                add("temporibus"),
                                            }};
                                            notMethods = new String[]{{
                                                add("voluptate"),
                                                add("deserunt"),
                                                add("labore"),
                                                add("at"),
                                            }};
                                            notPaths = new String[]{{
                                                add("maiores"),
                                                add("quisquam"),
                                            }};
                                            notPorts = new String[]{{
                                                add("consequuntur"),
                                                add("debitis"),
                                                add("fugiat"),
                                            }};
                                            paths = new String[]{{
                                                add("eveniet"),
                                                add("eaque"),
                                                add("dolores"),
                                            }};
                                            ports = new String[]{{
                                                add("iste"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "at";
                                                    values = new String[]{{
                                                        add("natus"),
                                                        add("molestiae"),
                                                        add("voluptas"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("iste"),
                                                add("quaerat"),
                                                add("modi"),
                                            }};
                                            methods = new String[]{{
                                                add("nostrum"),
                                            }};
                                            notHosts = new String[]{{
                                                add("dolores"),
                                                add("velit"),
                                            }};
                                            notMethods = new String[]{{
                                                add("exercitationem"),
                                                add("corrupti"),
                                                add("tenetur"),
                                                add("repellendus"),
                                            }};
                                            notPaths = new String[]{{
                                                add("rerum"),
                                                add("quaerat"),
                                                add("magni"),
                                                add("labore"),
                                            }};
                                            notPorts = new String[]{{
                                                add("qui"),
                                                add("corporis"),
                                                add("itaque"),
                                            }};
                                            paths = new String[]{{
                                                add("consectetur"),
                                                add("soluta"),
                                                add("autem"),
                                            }};
                                            ports = new String[]{{
                                                add("quidem"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "cum";
                                                    values = new String[]{{
                                                        add("asperiores"),
                                                        add("saepe"),
                                                        add("aspernatur"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "consequatur";
                                                    values = new String[]{{
                                                        add("in"),
                                                        add("molestias"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "beatae";
                                                    values = new String[]{{
                                                        add("pariatur"),
                                                        add("nostrum"),
                                                        add("voluptatibus"),
                                                        add("saepe"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "aut";
                                                    values = new String[]{{
                                                        add("ex"),
                                                        add("maiores"),
                                                        add("numquam"),
                                                        add("explicabo"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("consequuntur"),
                                                add("quam"),
                                            }};
                                            methods = new String[]{{
                                                add("voluptatum"),
                                                add("autem"),
                                            }};
                                            notHosts = new String[]{{
                                                add("repellat"),
                                            }};
                                            notMethods = new String[]{{
                                                add("impedit"),
                                                add("eaque"),
                                                add("deserunt"),
                                            }};
                                            notPaths = new String[]{{
                                                add("distinctio"),
                                            }};
                                            notPorts = new String[]{{
                                                add("exercitationem"),
                                                add("odit"),
                                                add("officia"),
                                                add("magni"),
                                            }};
                                            paths = new String[]{{
                                                add("explicabo"),
                                            }};
                                            ports = new String[]{{
                                                add("repellat"),
                                                add("doloribus"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "quos";
                                                    values = new String[]{{
                                                        add("optio"),
                                                        add("nihil"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "natus";
                                                    values = new String[]{{
                                                        add("nobis"),
                                                        add("laborum"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "ducimus";
                                                    values = new String[]{{
                                                        add("repellat"),
                                                        add("error"),
                                                        add("recusandae"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("fugiat"),
                                                add("numquam"),
                                            }};
                                            methods = new String[]{{
                                                add("maxime"),
                                            }};
                                            notHosts = new String[]{{
                                                add("sequi"),
                                            }};
                                            notMethods = new String[]{{
                                                add("aperiam"),
                                                add("corrupti"),
                                            }};
                                            notPaths = new String[]{{
                                                add("ad"),
                                            }};
                                            notPorts = new String[]{{
                                                add("fuga"),
                                                add("repellat"),
                                                add("neque"),
                                            }};
                                            paths = new String[]{{
                                                add("ea"),
                                                add("architecto"),
                                                add("nam"),
                                            }};
                                            ports = new String[]{{
                                                add("nemo"),
                                                add("eligendi"),
                                                add("asperiores"),
                                            }};
                                        }}),
                                    }};
                                    principals = new org.openapis.openapi.models.shared.Principal[]{{
                                        add(new Principal() {{
                                            condition = "laudantium";
                                            groups = new String[]{{
                                                add("quod"),
                                                add("iste"),
                                                add("molestias"),
                                                add("repellendus"),
                                            }};
                                            ips = new String[]{{
                                                add("aspernatur"),
                                                add("deserunt"),
                                                add("ad"),
                                            }};
                                            namespaces = new String[]{{
                                                add("eligendi"),
                                            }};
                                            notGroups = new String[]{{
                                                add("suscipit"),
                                                add("consectetur"),
                                                add("aperiam"),
                                                add("aliquam"),
                                            }};
                                            notIps = new String[]{{
                                                add("sunt"),
                                                add("excepturi"),
                                                add("iusto"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("in"),
                                                add("harum"),
                                            }};
                                            notUsers = new String[]{{
                                                add("facilis"),
                                                add("asperiores"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("voluptates", "explicabo");
                                            }};
                                            users = new String[]{{
                                                add("laudantium"),
                                            }};
                                        }}),
                                        add(new Principal() {{
                                            condition = "cum";
                                            groups = new String[]{{
                                                add("quis"),
                                            }};
                                            ips = new String[]{{
                                                add("animi"),
                                                add("optio"),
                                                add("vero"),
                                            }};
                                            namespaces = new String[]{{
                                                add("libero"),
                                                add("deserunt"),
                                                add("perferendis"),
                                                add("nemo"),
                                            }};
                                            notGroups = new String[]{{
                                                add("voluptates"),
                                                add("unde"),
                                                add("assumenda"),
                                                add("nulla"),
                                            }};
                                            notIps = new String[]{{
                                                add("tenetur"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("impedit"),
                                            }};
                                            notUsers = new String[]{{
                                                add("blanditiis"),
                                                add("ipsa"),
                                                add("sed"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("porro", "excepturi");
                                                put("praesentium", "neque");
                                                put("repudiandae", "optio");
                                            }};
                                            users = new String[]{{
                                                add("laboriosam"),
                                                add("et"),
                                                add("doloremque"),
                                                add("fuga"),
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new RbacPolicy() {{
                                    name = "Brandi Klocko";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "magnam";
                                                    values = new String[]{{
                                                        add("omnis"),
                                                        add("iusto"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "itaque";
                                                    values = new String[]{{
                                                        add("tenetur"),
                                                        add("saepe"),
                                                        add("quidem"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "eaque";
                                                    values = new String[]{{
                                                        add("quisquam"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("atque"),
                                            }};
                                            methods = new String[]{{
                                                add("doloremque"),
                                            }};
                                            notHosts = new String[]{{
                                                add("repellat"),
                                            }};
                                            notMethods = new String[]{{
                                                add("deleniti"),
                                                add("velit"),
                                            }};
                                            notPaths = new String[]{{
                                                add("expedita"),
                                            }};
                                            notPorts = new String[]{{
                                                add("illo"),
                                                add("sapiente"),
                                            }};
                                            paths = new String[]{{
                                                add("quos"),
                                                add("fugit"),
                                                add("provident"),
                                                add("esse"),
                                            }};
                                            ports = new String[]{{
                                                add("doloribus"),
                                                add("quam"),
                                                add("voluptatem"),
                                            }};
                                        }}),
                                    }};
                                    principals = new org.openapis.openapi.models.shared.Principal[]{{
                                        add(new Principal() {{
                                            condition = "eveniet";
                                            groups = new String[]{{
                                                add("saepe"),
                                                add("animi"),
                                                add("perspiciatis"),
                                                add("et"),
                                            }};
                                            ips = new String[]{{
                                                add("expedita"),
                                                add("amet"),
                                                add("commodi"),
                                                add("nihil"),
                                            }};
                                            namespaces = new String[]{{
                                                add("hic"),
                                                add("perspiciatis"),
                                                add("atque"),
                                            }};
                                            notGroups = new String[]{{
                                                add("asperiores"),
                                                add("laudantium"),
                                                add("sint"),
                                                add("laborum"),
                                            }};
                                            notIps = new String[]{{
                                                add("iusto"),
                                                add("voluptatum"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("ad"),
                                                add("neque"),
                                                add("labore"),
                                            }};
                                            notUsers = new String[]{{
                                                add("officia"),
                                                add("eaque"),
                                                add("recusandae"),
                                                add("totam"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("pariatur", "voluptas");
                                            }};
                                            users = new String[]{{
                                                add("qui"),
                                                add("tenetur"),
                                            }};
                                        }}),
                                        add(new Principal() {{
                                            condition = "vitae";
                                            groups = new String[]{{
                                                add("laboriosam"),
                                                add("unde"),
                                                add("voluptates"),
                                                add("omnis"),
                                            }};
                                            ips = new String[]{{
                                                add("libero"),
                                                add("voluptate"),
                                            }};
                                            namespaces = new String[]{{
                                                add("a"),
                                            }};
                                            notGroups = new String[]{{
                                                add("delectus"),
                                                add("ipsum"),
                                                add("laudantium"),
                                            }};
                                            notIps = new String[]{{
                                                add("harum"),
                                                add("similique"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("suscipit"),
                                                add("ipsam"),
                                                add("debitis"),
                                            }};
                                            notUsers = new String[]{{
                                                add("cumque"),
                                                add("totam"),
                                                add("culpa"),
                                                add("animi"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("vel", "suscipit");
                                                put("doloremque", "voluptatem");
                                            }};
                                            users = new String[]{{
                                                add("dicta"),
                                                add("dolore"),
                                            }};
                                        }}),
                                        add(new Principal() {{
                                            condition = "dignissimos";
                                            groups = new String[]{{
                                                add("deleniti"),
                                            }};
                                            ips = new String[]{{
                                                add("sunt"),
                                            }};
                                            namespaces = new String[]{{
                                                add("reprehenderit"),
                                                add("est"),
                                                add("soluta"),
                                                add("iure"),
                                            }};
                                            notGroups = new String[]{{
                                                add("facere"),
                                            }};
                                            notIps = new String[]{{
                                                add("ad"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("magnam"),
                                            }};
                                            notUsers = new String[]{{
                                                add("at"),
                                                add("deserunt"),
                                                add("molestiae"),
                                                add("dolores"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("ullam", "aut");
                                            }};
                                            users = new String[]{{
                                                add("cum"),
                                                add("sapiente"),
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new RbacPolicy() {{
                                    name = "Brendan Sawayn PhD";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "est";
                                                    values = new String[]{{
                                                        add("fuga"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "ipsa";
                                                    values = new String[]{{
                                                        add("a"),
                                                        add("et"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("autem"),
                                            }};
                                            methods = new String[]{{
                                                add("molestias"),
                                                add("eveniet"),
                                                add("doloribus"),
                                            }};
                                            notHosts = new String[]{{
                                                add("eum"),
                                                add("occaecati"),
                                                add("animi"),
                                                add("unde"),
                                            }};
                                            notMethods = new String[]{{
                                                add("repellat"),
                                                add("reprehenderit"),
                                                add("fugit"),
                                                add("quia"),
                                            }};
                                            notPaths = new String[]{{
                                                add("quisquam"),
                                                add("veniam"),
                                                add("hic"),
                                            }};
                                            notPorts = new String[]{{
                                                add("fuga"),
                                                add("quod"),
                                                add("omnis"),
                                            }};
                                            paths = new String[]{{
                                                add("accusamus"),
                                                add("deleniti"),
                                            }};
                                            ports = new String[]{{
                                                add("ab"),
                                                add("tempora"),
                                                add("possimus"),
                                                add("assumenda"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "ipsum";
                                                    values = new String[]{{
                                                        add("amet"),
                                                        add("quia"),
                                                        add("nisi"),
                                                        add("dignissimos"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "adipisci";
                                                    values = new String[]{{
                                                        add("quisquam"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "exercitationem";
                                                    values = new String[]{{
                                                        add("dicta"),
                                                        add("reiciendis"),
                                                        add("consequuntur"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "exercitationem";
                                                    values = new String[]{{
                                                        add("eligendi"),
                                                        add("quibusdam"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("sed"),
                                                add("similique"),
                                                add("enim"),
                                                add("dolorum"),
                                            }};
                                            methods = new String[]{{
                                                add("commodi"),
                                            }};
                                            notHosts = new String[]{{
                                                add("iusto"),
                                                add("praesentium"),
                                                add("occaecati"),
                                            }};
                                            notMethods = new String[]{{
                                                add("ipsum"),
                                                add("nam"),
                                                add("ipsa"),
                                            }};
                                            notPaths = new String[]{{
                                                add("illo"),
                                                add("reprehenderit"),
                                                add("hic"),
                                            }};
                                            notPorts = new String[]{{
                                                add("perspiciatis"),
                                                add("quis"),
                                                add("alias"),
                                                add("cum"),
                                            }};
                                            paths = new String[]{{
                                                add("accusamus"),
                                            }};
                                            ports = new String[]{{
                                                add("occaecati"),
                                                add("minima"),
                                                add("nemo"),
                                                add("distinctio"),
                                            }};
                                        }}),
                                    }};
                                    principals = new org.openapis.openapi.models.shared.Principal[]{{
                                        add(new Principal() {{
                                            condition = "libero";
                                            groups = new String[]{{
                                                add("nam"),
                                                add("eum"),
                                                add("sit"),
                                                add("architecto"),
                                            }};
                                            ips = new String[]{{
                                                add("blanditiis"),
                                                add("magnam"),
                                            }};
                                            namespaces = new String[]{{
                                                add("beatae"),
                                                add("laboriosam"),
                                            }};
                                            notGroups = new String[]{{
                                                add("nulla"),
                                                add("voluptates"),
                                            }};
                                            notIps = new String[]{{
                                                add("et"),
                                                add("earum"),
                                                add("nesciunt"),
                                                add("sequi"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("iste"),
                                                add("ex"),
                                            }};
                                            notUsers = new String[]{{
                                                add("dolorum"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("nesciunt", "vero");
                                            }};
                                            users = new String[]{{
                                                add("nemo"),
                                                add("facere"),
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new RbacPolicy() {{
                                    name = "Cora Emard";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "voluptatum";
                                                    values = new String[]{{
                                                        add("molestias"),
                                                        add("ipsum"),
                                                        add("perferendis"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("voluptatibus"),
                                                add("atque"),
                                            }};
                                            methods = new String[]{{
                                                add("odio"),
                                            }};
                                            notHosts = new String[]{{
                                                add("harum"),
                                                add("reiciendis"),
                                            }};
                                            notMethods = new String[]{{
                                                add("quas"),
                                                add("amet"),
                                            }};
                                            notPaths = new String[]{{
                                                add("minus"),
                                                add("harum"),
                                            }};
                                            notPorts = new String[]{{
                                                add("inventore"),
                                                add("nostrum"),
                                                add("temporibus"),
                                            }};
                                            paths = new String[]{{
                                                add("sint"),
                                            }};
                                            ports = new String[]{{
                                                add("itaque"),
                                                add("incidunt"),
                                                add("doloribus"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "itaque";
                                                    values = new String[]{{
                                                        add("repellat"),
                                                        add("inventore"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("veniam"),
                                                add("cupiditate"),
                                            }};
                                            methods = new String[]{{
                                                add("itaque"),
                                                add("voluptas"),
                                                add("nesciunt"),
                                                add("iste"),
                                            }};
                                            notHosts = new String[]{{
                                                add("adipisci"),
                                            }};
                                            notMethods = new String[]{{
                                                add("illo"),
                                                add("quibusdam"),
                                            }};
                                            notPaths = new String[]{{
                                                add("vitae"),
                                                add("mollitia"),
                                                add("vitae"),
                                            }};
                                            notPorts = new String[]{{
                                                add("incidunt"),
                                                add("soluta"),
                                            }};
                                            paths = new String[]{{
                                                add("fugiat"),
                                                add("porro"),
                                                add("iure"),
                                                add("nostrum"),
                                            }};
                                            ports = new String[]{{
                                                add("harum"),
                                                add("sed"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "rem";
                                                    values = new String[]{{
                                                        add("ut"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("ad"),
                                                add("odio"),
                                            }};
                                            methods = new String[]{{
                                                add("voluptatum"),
                                                add("mollitia"),
                                            }};
                                            notHosts = new String[]{{
                                                add("quasi"),
                                            }};
                                            notMethods = new String[]{{
                                                add("distinctio"),
                                                add("eligendi"),
                                            }};
                                            notPaths = new String[]{{
                                                add("modi"),
                                                add("quasi"),
                                            }};
                                            notPorts = new String[]{{
                                                add("ducimus"),
                                            }};
                                            paths = new String[]{{
                                                add("expedita"),
                                                add("sint"),
                                            }};
                                            ports = new String[]{{
                                                add("fugiat"),
                                                add("molestiae"),
                                                add("vel"),
                                            }};
                                        }}),
                                    }};
                                    principals = new org.openapis.openapi.models.shared.Principal[]{{
                                        add(new Principal() {{
                                            condition = "explicabo";
                                            groups = new String[]{{
                                                add("laudantium"),
                                                add("magni"),
                                                add("ullam"),
                                            }};
                                            ips = new String[]{{
                                                add("possimus"),
                                                add("sequi"),
                                                add("laudantium"),
                                                add("molestiae"),
                                            }};
                                            namespaces = new String[]{{
                                                add("atque"),
                                            }};
                                            notGroups = new String[]{{
                                                add("quos"),
                                            }};
                                            notIps = new String[]{{
                                                add("rem"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("fuga"),
                                                add("doloribus"),
                                                add("tempora"),
                                            }};
                                            notUsers = new String[]{{
                                                add("qui"),
                                                add("fuga"),
                                                add("quaerat"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("error", "labore");
                                            }};
                                            users = new String[]{{
                                                add("doloremque"),
                                                add("optio"),
                                            }};
                                        }}),
                                        add(new Principal() {{
                                            condition = "voluptatum";
                                            groups = new String[]{{
                                                add("labore"),
                                            }};
                                            ips = new String[]{{
                                                add("unde"),
                                                add("explicabo"),
                                                add("praesentium"),
                                                add("ullam"),
                                            }};
                                            namespaces = new String[]{{
                                                add("doloremque"),
                                                add("ipsum"),
                                            }};
                                            notGroups = new String[]{{
                                                add("voluptatum"),
                                                add("quo"),
                                                add("eligendi"),
                                                add("impedit"),
                                            }};
                                            notIps = new String[]{{
                                                add("consequuntur"),
                                                add("pariatur"),
                                                add("esse"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("exercitationem"),
                                            }};
                                            notUsers = new String[]{{
                                                add("quos"),
                                                add("at"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("nihil", "neque");
                                                put("et", "maxime");
                                            }};
                                            users = new String[]{{
                                                add("reprehenderit"),
                                                add("quaerat"),
                                            }};
                                        }}),
                                        add(new Principal() {{
                                            condition = "odio";
                                            groups = new String[]{{
                                                add("hic"),
                                                add("officia"),
                                            }};
                                            ips = new String[]{{
                                                add("dicta"),
                                            }};
                                            namespaces = new String[]{{
                                                add("totam"),
                                                add("veniam"),
                                                add("beatae"),
                                                add("reiciendis"),
                                            }};
                                            notGroups = new String[]{{
                                                add("itaque"),
                                            }};
                                            notIps = new String[]{{
                                                add("quaerat"),
                                                add("quas"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("blanditiis"),
                                                add("doloremque"),
                                                add("esse"),
                                                add("aperiam"),
                                            }};
                                            notUsers = new String[]{{
                                                add("similique"),
                                                add("nostrum"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("quae", "animi");
                                                put("perspiciatis", "voluptas");
                                            }};
                                            users = new String[]{{
                                                add("error"),
                                                add("odio"),
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                        }};;
                        awsV4Authentication = new Awsv4Signature() {{
                            accessKey = "ullam";
                            accessKeyId = "libero";
                            accessKeyVersion = "facilis";
                            originRegion = "mollitia";
                        }};;
                        clientTlsPolicy = "ea";
                        clientTlsSettings = new ClientTlsSettings() {{
                            clientTlsContext = new TlsContext() {{
                                certificateContext = new TlsCertificateContext() {{
                                    certificatePaths = new TlsCertificatePaths() {{
                                        certificatePath = "rem";
                                        privateKeyPath = "quae";
                                    }};;
                                    certificateSource = TlsCertificateContextCertificateSourceEnum.INVALID;
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.GCE_VM;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Winston Mohr PhD";
                                                    structConfig = "qui";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "perspiciatis";
                                                    privateKeyPath = "reprehenderit";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.INVALID;
                                            }};;
                                            targetUri = "assumenda";
                                        }};;
                                    }};;
                                }};;
                                validationContext = new TlsValidationContext() {{
                                    certificatePath = "expedita";
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.FROM_PLUGIN;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Jessie Dickinson MD";
                                                    structConfig = "possimus";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "officiis";
                                                    privateKeyPath = "officiis";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.GCE_VM;
                                            }};;
                                            targetUri = "fugiat";
                                        }};;
                                    }};;
                                    validationSource = TlsValidationContextValidationSourceEnum.USE_PATH;
                                }};;
                            }};;
                            mode = ClientTlsSettingsModeEnum.SIMPLE;
                            sni = "voluptate";
                            subjectAltNames = new String[]{{
                                add("recusandae"),
                            }};
                        }};;
                        subjectAltNames = new String[]{{
                            add("similique"),
                        }};
                    }};;
                    selfLink = "delectus";
                    selfLinkWithId = "sit";
                    serviceBindings = new String[]{{
                        add("magni"),
                    }};
                    serviceLbPolicy = "et";
                    sessionAffinity = BackendServiceSessionAffinityEnum.HTTP_COOKIE;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.CONSISTENT_HASH_SUBSETTING;
                        subsetSize = 89421;
                    }};;
                    timeoutSec = 600951;
                    vpcNetworkScope = BackendServiceVpcNetworkScopeEnum.REGIONAL_VPC_NETWORK;
                }};;
                accessToken = "culpa";
                alt = AltEnum.JSON;
                callback = "quas";
                fields = "sint";
                key = "commodi";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "asperiores";
                requestId = "repellat";
                uploadType = "illo";
                uploadProtocol = "impedit";
                userIp = "neque";
            }};            

            ComputeRegionBackendServicesUpdateResponse res = sdk.regionBackendServices.computeRegionBackendServicesUpdate(req, new ComputeRegionBackendServicesUpdateSecurity() {{
                option1 = new ComputeRegionBackendServicesUpdateSecurityOption1("unde", "nihil") {{
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
