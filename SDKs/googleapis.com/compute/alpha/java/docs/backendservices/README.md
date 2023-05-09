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

            ComputeBackendServicesAddSignedUrlKeyRequest req = new ComputeBackendServicesAddSignedUrlKeyRequest("dicta", "odio") {{
                dollarXgafv = XgafvEnum.ONE;
                signedUrlKey = new SignedUrlKey() {{
                    keyName = "esse";
                    keyValue = "ex";
                }};;
                accessToken = "consectetur";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "laborum";
                key = "sunt";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "fugiat";
                requestId = "expedita";
                uploadType = "aliquid";
                uploadProtocol = "officia";
                userIp = "suscipit";
            }};            

            ComputeBackendServicesAddSignedUrlKeyResponse res = sdk.backendServices.computeBackendServicesAddSignedUrlKey(req, new ComputeBackendServicesAddSignedUrlKeySecurity() {{
                option1 = new ComputeBackendServicesAddSignedUrlKeySecurityOption1("aliquid", "perferendis") {{
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

            ComputeBackendServicesAggregatedListRequest req = new ComputeBackendServicesAggregatedListRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                alt = AltEnum.MEDIA;
                callback = "ab";
                fields = "error";
                filter = "possimus";
                includeAllScopes = false;
                key = "voluptates";
                maxResults = 653421L;
                oauthToken = "laborum";
                orderBy = "libero";
                pageToken = "ad";
                prettyPrint = false;
                quotaUser = "deleniti";
                returnPartialSuccess = false;
                uploadType = "enim";
                uploadProtocol = "vitae";
                userIp = "repellendus";
            }};            

            ComputeBackendServicesAggregatedListResponse res = sdk.backendServices.computeBackendServicesAggregatedList(req, new ComputeBackendServicesAggregatedListSecurity() {{
                option1 = new ComputeBackendServicesAggregatedListSecurityOption1("ex", "quo") {{
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

            ComputeBackendServicesDeleteRequest req = new ComputeBackendServicesDeleteRequest("ex", "ut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "molestias";
                fields = "cum";
                key = "aliquid";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "voluptatum";
                requestId = "omnis";
                uploadType = "veritatis";
                uploadProtocol = "rerum";
                userIp = "est";
            }};            

            ComputeBackendServicesDeleteResponse res = sdk.backendServices.computeBackendServicesDelete(req, new ComputeBackendServicesDeleteSecurity() {{
                option1 = new ComputeBackendServicesDeleteSecurityOption1("culpa", "voluptatem") {{
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

            ComputeBackendServicesDeleteSignedUrlKeyRequest req = new ComputeBackendServicesDeleteSignedUrlKeyRequest("sapiente", "officiis", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "voluptatem";
                fields = "alias";
                key = "deleniti";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "ex";
                requestId = "sapiente";
                uploadType = "rem";
                uploadProtocol = "minus";
                userIp = "nemo";
            }};            

            ComputeBackendServicesDeleteSignedUrlKeyResponse res = sdk.backendServices.computeBackendServicesDeleteSignedUrlKey(req, new ComputeBackendServicesDeleteSignedUrlKeySecurity() {{
                option1 = new ComputeBackendServicesDeleteSignedUrlKeySecurityOption1("asperiores", "ratione") {{
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

            ComputeBackendServicesGetRequest req = new ComputeBackendServicesGetRequest("ullam", "perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "nam";
                key = "ipsam";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "aliquam";
                uploadProtocol = "inventore";
                userIp = "deleniti";
            }};            

            ComputeBackendServicesGetResponse res = sdk.backendServices.computeBackendServicesGet(req, new ComputeBackendServicesGetSecurity() {{
                option1 = new ComputeBackendServicesGetSecurityOption1("veritatis", "tempora") {{
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

            ComputeBackendServicesGetHealthRequest req = new ComputeBackendServicesGetHealthRequest("dolor", "consequatur") {{
                dollarXgafv = XgafvEnum.ONE;
                resourceGroupReference = new ResourceGroupReference() {{
                    group = "sit";
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "ab";
                fields = "laudantium";
                key = "quae";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "ipsam";
                uploadProtocol = "consequuntur";
                userIp = "ipsa";
            }};            

            ComputeBackendServicesGetHealthResponse res = sdk.backendServices.computeBackendServicesGetHealth(req, new ComputeBackendServicesGetHealthSecurity() {{
                option1 = new ComputeBackendServicesGetHealthSecurityOption1("quas", "eveniet") {{
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

            ComputeBackendServicesGetIamPolicyRequest req = new ComputeBackendServicesGetIamPolicyRequest("impedit", "officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "veniam";
                fields = "nesciunt";
                key = "expedita";
                oauthToken = "eum";
                optionsRequestedPolicyVersion = 426943L;
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "magnam";
                uploadProtocol = "exercitationem";
                userIp = "ab";
            }};            

            ComputeBackendServicesGetIamPolicyResponse res = sdk.backendServices.computeBackendServicesGetIamPolicy(req, new ComputeBackendServicesGetIamPolicySecurity() {{
                option1 = new ComputeBackendServicesGetIamPolicySecurityOption1("porro", "autem") {{
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

            ComputeBackendServicesInsertRequest req = new ComputeBackendServicesInsertRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                backendService = new BackendService() {{
                    affinityCookieTtlSec = 927212;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.CONNECTION;
                            capacityScaler = 3502.07;
                            description = "necessitatibus";
                            failover = false;
                            group = "quasi";
                            maxConnections = 392569;
                            maxConnectionsPerEndpoint = 871103;
                            maxConnectionsPerInstance = 878373;
                            maxRate = 667593;
                            maxRatePerEndpoint = 6907.85;
                            maxRatePerInstance = 1927.18;
                            maxUtilization = 9873.49;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "optio";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "occaecati";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "nemo";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "voluptate";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("officia"),
                                add("voluptas"),
                                add("numquam"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("quos"),
                                add("eius"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("ducimus"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("fuga"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.INVALID_CACHE_MODE;
                        clientTtl = 277340;
                        defaultTtl = 97493;
                        maxTtl = 524380;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 117380;
                                ttl = 395544;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 159845;
                                ttl = 233078;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 46806;
                                ttl = 585432;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 970732;
                                ttl = 746837;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 3860;
                        signedUrlCacheMaxAgeSec = "omnis";
                        signedUrlKeyNames = new String[]{{
                            add("occaecati"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        connectTimeout = new Duration() {{
                            nanos = 612867;
                            seconds = "magni";
                        }};;
                        maxConnections = 81369;
                        maxPendingRequests = 686362;
                        maxRequests = 881897;
                        maxRequestsPerConnection = 976802;
                        maxRetries = 719620;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.DISABLED;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 966390;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.ALWAYS_PERSIST;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 507636;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.PER_SESSION;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Paulette Lowe";
                            path = "commodi";
                            ttl = new Duration() {{
                                nanos = 520761;
                                seconds = "earum";
                            }};;
                        }};;
                        httpHeaderName = "modi";
                        minimumRingSize = "nam";
                    }};;
                    creationTimestamp = "vero";
                    customRequestHeaders = new String[]{{
                        add("ipsam"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("alias"),
                        add("quasi"),
                    }};
                    description = "non";
                    edgeSecurityPolicy = "maiores";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 3182.33;
                    }};;
                    fingerprint = "sint";
                    healthChecks = new String[]{{
                        add("deserunt"),
                        add("esse"),
                        add("nemo"),
                        add("reprehenderit"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "est";
                        oauth2ClientInfo = new BackendServiceIAPOAuth2ClientInfo() {{
                            applicationName = "quis";
                            clientName = "sint";
                            developerEmailAddress = "accusamus";
                        }};;
                        oauth2ClientSecret = "impedit";
                        oauth2ClientSecretSha256 = "hic";
                    }};;
                    id = "necessitatibus";
                    ipAddressSelectionPolicy = BackendServiceIpAddressSelectionPolicyEnum.PREFER_IPV6;
                    kind = "ex";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.INTERNAL;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "delectus";
                                name = "Alexandra Pfannerstill";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.LEAST_REQUEST;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "atque";
                                name = "Pat Cummerata";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.RING_HASH;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "dolore";
                                name = "Colleen Dickinson";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.ROUND_ROBIN;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "deleniti";
                                name = "Brad Conn";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.MAGLEV;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.ROUND_ROBIN;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optional = BackendServiceLogConfigOptionalEnum.CUSTOM;
                        optionalFields = new String[]{{
                            add("libero"),
                            add("architecto"),
                            add("voluptatibus"),
                            add("quia"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.UNSPECIFIED_OPTIONAL_MODE;
                        sampleRate = 3041.98;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 247045;
                        seconds = "illo";
                    }};;
                    metadatas = new java.util.HashMap<String, String>() {{
                        put("vel", "ea");
                    }};
                    name = "Leigh Mante";
                    network = "ut";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 596433;
                            seconds = "earum";
                        }};;
                        consecutiveErrors = 117525;
                        consecutiveGatewayFailure = 772266;
                        enforcingConsecutiveErrors = 975884;
                        enforcingConsecutiveGatewayFailure = 610987;
                        enforcingSuccessRate = 932562;
                        interval = new Duration() {{
                            nanos = 2677;
                            seconds = "nisi";
                        }};;
                        maxEjectionPercent = 931505;
                        successRateMinimumHosts = 242178;
                        successRateRequestVolume = 673838;
                        successRateStdevFactor = 250398;
                    }};;
                    port = 224467;
                    portName = "iusto";
                    protocol = BackendServiceProtocolEnum.ALL;
                    region = "doloremque";
                    securityPolicy = "consequatur";
                    securitySettings = new SecuritySettings() {{
                        authentication = "officia";
                        authenticationPolicy = new AuthenticationPolicy() {{
                            origins = new org.openapis.openapi.models.shared.OriginAuthenticationMethod[]{{
                                add(new OriginAuthenticationMethod() {{
                                    jwt = new Jwt() {{
                                        audiences = new String[]{{
                                            add("quidem"),
                                            add("voluptas"),
                                        }};
                                        issuer = "facilis";
                                        jwksPublicKeys = "placeat";
                                        jwtHeaders = new org.openapis.openapi.models.shared.JwtHeader[]{{
                                            add(new JwtHeader() {{
                                                name = "Alfredo Wilkinson";
                                                valuePrefix = "unde";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Lyle Russel";
                                                valuePrefix = "est";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Dr. Cory Green";
                                                valuePrefix = "vitae";
                                            }}),
                                        }};
                                        jwtParams = new String[]{{
                                            add("dolorem"),
                                        }};
                                    }};
                                }}),
                                add(new OriginAuthenticationMethod() {{
                                    jwt = new Jwt() {{
                                        audiences = new String[]{{
                                            add("qui"),
                                            add("iste"),
                                        }};
                                        issuer = "ex";
                                        jwksPublicKeys = "nemo";
                                        jwtHeaders = new org.openapis.openapi.models.shared.JwtHeader[]{{
                                            add(new JwtHeader() {{
                                                name = "Wallace Pagac";
                                                valuePrefix = "alias";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Mrs. Gina Bergnaum";
                                                valuePrefix = "exercitationem";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Douglas Emard";
                                                valuePrefix = "distinctio";
                                            }}),
                                        }};
                                        jwtParams = new String[]{{
                                            add("quia"),
                                            add("quia"),
                                            add("nostrum"),
                                            add("omnis"),
                                        }};
                                    }};
                                }}),
                                add(new OriginAuthenticationMethod() {{
                                    jwt = new Jwt() {{
                                        audiences = new String[]{{
                                            add("dicta"),
                                            add("id"),
                                            add("libero"),
                                        }};
                                        issuer = "fugiat";
                                        jwksPublicKeys = "officia";
                                        jwtHeaders = new org.openapis.openapi.models.shared.JwtHeader[]{{
                                            add(new JwtHeader() {{
                                                name = "Dr. Paul Kris Jr.";
                                                valuePrefix = "totam";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Ms. Lynne Rau";
                                                valuePrefix = "dolores";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Albert Ortiz";
                                                valuePrefix = "molestiae";
                                            }}),
                                        }};
                                        jwtParams = new String[]{{
                                            add("accusamus"),
                                            add("necessitatibus"),
                                            add("tempore"),
                                        }};
                                    }};
                                }}),
                                add(new OriginAuthenticationMethod() {{
                                    jwt = new Jwt() {{
                                        audiences = new String[]{{
                                            add("ea"),
                                            add("autem"),
                                            add("ipsam"),
                                        }};
                                        issuer = "rerum";
                                        jwksPublicKeys = "laudantium";
                                        jwtHeaders = new org.openapis.openapi.models.shared.JwtHeader[]{{
                                            add(new JwtHeader() {{
                                                name = "Boyd Rippin Sr.";
                                                valuePrefix = "quidem";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Phil Barton";
                                                valuePrefix = "eos";
                                            }}),
                                        }};
                                        jwtParams = new String[]{{
                                            add("odio"),
                                            add("praesentium"),
                                            add("odit"),
                                            add("explicabo"),
                                        }};
                                    }};
                                }}),
                            }};
                            peers = new org.openapis.openapi.models.shared.PeerAuthenticationMethod[]{{
                                add(new PeerAuthenticationMethod() {{
                                    mtls = new MutualTls() {{
                                        mode = MutualTlsModeEnum.PERMISSIVE;
                                    }};
                                }}),
                                add(new PeerAuthenticationMethod() {{
                                    mtls = new MutualTls() {{
                                        mode = MutualTlsModeEnum.STRICT;
                                    }};
                                }}),
                            }};
                            principalBinding = AuthenticationPolicyPrincipalBindingEnum.INVALID;
                            serverTlsContext = new TlsContext() {{
                                certificateContext = new TlsCertificateContext() {{
                                    certificatePaths = new TlsCertificatePaths() {{
                                        certificatePath = "recusandae";
                                        privateKeyPath = "similique";
                                    }};;
                                    certificateSource = TlsCertificateContextCertificateSourceEnum.INVALID;
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.INVALID;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Teresa Miller";
                                                    structConfig = "cupiditate";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "fugit";
                                                    privateKeyPath = "numquam";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.CERTIFICATES;
                                            }};;
                                            targetUri = "nesciunt";
                                        }};;
                                    }};;
                                }};;
                                validationContext = new TlsValidationContext() {{
                                    certificatePath = "at";
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.GCE_VM;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Kara Tromp";
                                                    structConfig = "expedita";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "voluptatum";
                                                    privateKeyPath = "cupiditate";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.CERTIFICATES;
                                            }};;
                                            targetUri = "placeat";
                                        }};;
                                    }};;
                                    validationSource = TlsValidationContextValidationSourceEnum.INVALID;
                                }};;
                            }};;
                        }};;
                        authorizationConfig = new AuthorizationConfig() {{
                            policies = new org.openapis.openapi.models.shared.RbacPolicy[]{{
                                add(new RbacPolicy() {{
                                    name = "Sadie Kemmer";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "maiores";
                                                    values = new String[]{{
                                                        add("aperiam"),
                                                        add("libero"),
                                                        add("ratione"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "labore";
                                                    values = new String[]{{
                                                        add("occaecati"),
                                                        add("voluptas"),
                                                        add("quo"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "velit";
                                                    values = new String[]{{
                                                        add("fuga"),
                                                        add("nostrum"),
                                                        add("est"),
                                                        add("impedit"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "delectus";
                                                    values = new String[]{{
                                                        add("vero"),
                                                        add("odit"),
                                                        add("repellat"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("nemo"),
                                                add("reprehenderit"),
                                                add("aperiam"),
                                                add("odio"),
                                            }};
                                            methods = new String[]{{
                                                add("in"),
                                                add("ducimus"),
                                            }};
                                            notHosts = new String[]{{
                                                add("dolores"),
                                                add("error"),
                                                add("veritatis"),
                                            }};
                                            notMethods = new String[]{{
                                                add("voluptate"),
                                                add("pariatur"),
                                            }};
                                            notPaths = new String[]{{
                                                add("similique"),
                                                add("optio"),
                                                add("ex"),
                                                add("quaerat"),
                                            }};
                                            notPorts = new String[]{{
                                                add("officiis"),
                                                add("placeat"),
                                            }};
                                            paths = new String[]{{
                                                add("exercitationem"),
                                                add("quam"),
                                                add("dolorem"),
                                            }};
                                            ports = new String[]{{
                                                add("ipsa"),
                                                add("sint"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "sequi";
                                                    values = new String[]{{
                                                        add("cum"),
                                                        add("dicta"),
                                                        add("earum"),
                                                        add("veniam"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "animi";
                                                    values = new String[]{{
                                                        add("nam"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "dicta";
                                                    values = new String[]{{
                                                        add("necessitatibus"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "nobis";
                                                    values = new String[]{{
                                                        add("ducimus"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("veritatis"),
                                                add("quasi"),
                                                add("laboriosam"),
                                                add("pariatur"),
                                            }};
                                            methods = new String[]{{
                                                add("excepturi"),
                                                add("occaecati"),
                                                add("nemo"),
                                            }};
                                            notHosts = new String[]{{
                                                add("nostrum"),
                                                add("doloribus"),
                                            }};
                                            notMethods = new String[]{{
                                                add("sint"),
                                                add("enim"),
                                                add("hic"),
                                                add("animi"),
                                            }};
                                            notPaths = new String[]{{
                                                add("totam"),
                                                add("molestias"),
                                                add("odio"),
                                            }};
                                            notPorts = new String[]{{
                                                add("saepe"),
                                            }};
                                            paths = new String[]{{
                                                add("quos"),
                                            }};
                                            ports = new String[]{{
                                                add("assumenda"),
                                                add("tempore"),
                                                add("libero"),
                                            }};
                                        }}),
                                    }};
                                    principals = new org.openapis.openapi.models.shared.Principal[]{{
                                        add(new Principal() {{
                                            condition = "doloremque";
                                            groups = new String[]{{
                                                add("impedit"),
                                                add("cum"),
                                                add("ipsum"),
                                                add("adipisci"),
                                            }};
                                            ips = new String[]{{
                                                add("deserunt"),
                                                add("doloremque"),
                                                add("quis"),
                                                add("veniam"),
                                            }};
                                            namespaces = new String[]{{
                                                add("architecto"),
                                                add("cupiditate"),
                                                add("molestiae"),
                                            }};
                                            notGroups = new String[]{{
                                                add("possimus"),
                                                add("non"),
                                                add("magnam"),
                                                add("itaque"),
                                            }};
                                            notIps = new String[]{{
                                                add("asperiores"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("consequuntur"),
                                                add("facere"),
                                            }};
                                            notUsers = new String[]{{
                                                add("odit"),
                                                add("pariatur"),
                                                add("amet"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("ab", "velit");
                                                put("facilis", "tempore");
                                            }};
                                            users = new String[]{{
                                                add("voluptatibus"),
                                                add("quaerat"),
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                        }};;
                        awsV4Authentication = new Awsv4Signature() {{
                            accessKey = "blanditiis";
                            accessKeyId = "distinctio";
                            accessKeyVersion = "nisi";
                            originRegion = "quis";
                        }};;
                        clientTlsPolicy = "nisi";
                        clientTlsSettings = new ClientTlsSettings() {{
                            clientTlsContext = new TlsContext() {{
                                certificateContext = new TlsCertificateContext() {{
                                    certificatePaths = new TlsCertificatePaths() {{
                                        certificatePath = "libero";
                                        privateKeyPath = "minus";
                                    }};;
                                    certificateSource = TlsCertificateContextCertificateSourceEnum.USE_SDS;
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.INVALID;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Erin Wiza";
                                                    structConfig = "debitis";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "labore";
                                                    privateKeyPath = "rerum";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.CERTIFICATES;
                                            }};;
                                            targetUri = "reprehenderit";
                                        }};;
                                    }};;
                                }};;
                                validationContext = new TlsValidationContext() {{
                                    certificatePath = "nostrum";
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.FROM_PLUGIN;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Genevieve Lebsack";
                                                    structConfig = "unde";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "officiis";
                                                    privateKeyPath = "ducimus";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.CERTIFICATES;
                                            }};;
                                            targetUri = "dicta";
                                        }};;
                                    }};;
                                    validationSource = TlsValidationContextValidationSourceEnum.USE_PATH;
                                }};;
                            }};;
                            mode = ClientTlsSettingsModeEnum.SIMPLE;
                            sni = "vitae";
                            subjectAltNames = new String[]{{
                                add("esse"),
                                add("fugiat"),
                            }};
                        }};;
                        subjectAltNames = new String[]{{
                            add("aspernatur"),
                            add("enim"),
                        }};
                    }};;
                    selfLink = "delectus";
                    selfLinkWithId = "iusto";
                    serviceBindings = new String[]{{
                        add("libero"),
                        add("illo"),
                    }};
                    serviceLbPolicy = "ab";
                    sessionAffinity = BackendServiceSessionAffinityEnum.CLIENT_IP_PORT_PROTO;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.NONE;
                        subsetSize = 902581;
                    }};;
                    timeoutSec = 734814;
                    vpcNetworkScope = BackendServiceVpcNetworkScopeEnum.GLOBAL_VPC_NETWORK;
                }};;
                accessToken = "eos";
                alt = AltEnum.PROTO;
                callback = "earum";
                fields = "reprehenderit";
                key = "praesentium";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "repellat";
                requestId = "quisquam";
                uploadType = "sequi";
                uploadProtocol = "nihil";
                userIp = "deleniti";
            }};            

            ComputeBackendServicesInsertResponse res = sdk.backendServices.computeBackendServicesInsert(req, new ComputeBackendServicesInsertSecurity() {{
                option1 = new ComputeBackendServicesInsertSecurityOption1("illo", "labore") {{
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

            ComputeBackendServicesListRequest req = new ComputeBackendServicesListRequest("assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quisquam";
                alt = AltEnum.MEDIA;
                callback = "laudantium";
                fields = "repudiandae";
                filter = "consequatur";
                key = "maxime";
                maxResults = 136357L;
                oauthToken = "nam";
                orderBy = "expedita";
                pageToken = "quas";
                prettyPrint = false;
                quotaUser = "provident";
                returnPartialSuccess = false;
                uploadType = "repudiandae";
                uploadProtocol = "rerum";
                userIp = "dignissimos";
            }};            

            ComputeBackendServicesListResponse res = sdk.backendServices.computeBackendServicesList(req, new ComputeBackendServicesListSecurity() {{
                option1 = new ComputeBackendServicesListSecurityOption1("corporis", "vero") {{
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

            ComputeBackendServicesPatchRequest req = new ComputeBackendServicesPatchRequest("similique", "repellendus") {{
                dollarXgafv = XgafvEnum.ONE;
                backendService1 = new BackendService() {{
                    affinityCookieTtlSec = 213835;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.UTILIZATION;
                            capacityScaler = 4150.33;
                            description = "aut";
                            failover = false;
                            group = "voluptatem";
                            maxConnections = 322829;
                            maxConnectionsPerEndpoint = 60995;
                            maxConnectionsPerInstance = 229567;
                            maxRate = 849320;
                            maxRatePerEndpoint = 5068.63;
                            maxRatePerInstance = 6955.26;
                            maxUtilization = 7368.53;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.CONNECTION;
                            capacityScaler = 976.76;
                            description = "dicta";
                            failover = false;
                            group = "laudantium";
                            maxConnections = 40710;
                            maxConnectionsPerEndpoint = 938412;
                            maxConnectionsPerInstance = 479707;
                            maxRate = 228646;
                            maxRatePerEndpoint = 5879.67;
                            maxRatePerInstance = 6771.41;
                            maxUtilization = 8979.56;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "repudiandae";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "consequatur";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "nemo";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("itaque"),
                                add("facilis"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("aperiam"),
                                add("sint"),
                                add("accusamus"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("totam"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("voluptatem"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.CACHE_ALL_STATIC;
                        clientTtl = 224413;
                        defaultTtl = 124289;
                        maxTtl = 953676;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 582320;
                                ttl = 539813;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 107472;
                        signedUrlCacheMaxAgeSec = "at";
                        signedUrlKeyNames = new String[]{{
                            add("minus"),
                            add("esse"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        connectTimeout = new Duration() {{
                            nanos = 32356;
                            seconds = "perferendis";
                        }};;
                        maxConnections = 698558;
                        maxPendingRequests = 411615;
                        maxRequests = 46791;
                        maxRequestsPerConnection = 489459;
                        maxRetries = 998026;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.AUTOMATIC;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 784115;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.DEFAULT_FOR_PROTOCOL;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 231382;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.PER_SESSION;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Kim Roberts";
                            path = "officia";
                            ttl = new Duration() {{
                                nanos = 228857;
                                seconds = "tenetur";
                            }};;
                        }};;
                        httpHeaderName = "aspernatur";
                        minimumRingSize = "quo";
                    }};;
                    creationTimestamp = "itaque";
                    customRequestHeaders = new String[]{{
                        add("laborum"),
                        add("dignissimos"),
                        add("vero"),
                        add("qui"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("repellat"),
                    }};
                    description = "explicabo";
                    edgeSecurityPolicy = "explicabo";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 3503.25;
                    }};;
                    fingerprint = "nihil";
                    healthChecks = new String[]{{
                        add("ab"),
                        add("illo"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "hic";
                        oauth2ClientInfo = new BackendServiceIAPOAuth2ClientInfo() {{
                            applicationName = "deserunt";
                            clientName = "delectus";
                            developerEmailAddress = "non";
                        }};;
                        oauth2ClientSecret = "distinctio";
                        oauth2ClientSecretSha256 = "in";
                    }};;
                    id = "exercitationem";
                    ipAddressSelectionPolicy = BackendServiceIpAddressSelectionPolicyEnum.IPV6_ONLY;
                    kind = "numquam";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.INVALID_LOAD_BALANCING_SCHEME;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "in";
                                name = "Mr. Meghan Leffler";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.MAGLEV;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "voluptate";
                                name = "Warren Rempel I";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.ORIGINAL_DESTINATION;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.LEAST_REQUEST;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optional = BackendServiceLogConfigOptionalEnum.INCLUDE_ALL_OPTIONAL;
                        optionalFields = new String[]{{
                            add("fugiat"),
                            add("nostrum"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.EXCLUDE_ALL_OPTIONAL;
                        sampleRate = 3306;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 969206;
                        seconds = "ab";
                    }};;
                    metadatas = new java.util.HashMap<String, String>() {{
                        put("aut", "aut");
                        put("eveniet", "odio");
                    }};
                    name = "Carrie Pagac";
                    network = "consectetur";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 200637;
                            seconds = "quaerat";
                        }};;
                        consecutiveErrors = 929476;
                        consecutiveGatewayFailure = 791228;
                        enforcingConsecutiveErrors = 122662;
                        enforcingConsecutiveGatewayFailure = 715143;
                        enforcingSuccessRate = 481375;
                        interval = new Duration() {{
                            nanos = 558051;
                            seconds = "et";
                        }};;
                        maxEjectionPercent = 704948;
                        successRateMinimumHosts = 229276;
                        successRateRequestVolume = 418637;
                        successRateStdevFactor = 685415;
                    }};;
                    port = 5310;
                    portName = "rem";
                    protocol = BackendServiceProtocolEnum.ALL;
                    region = "quos";
                    securityPolicy = "laudantium";
                    securitySettings = new SecuritySettings() {{
                        authentication = "repellendus";
                        authenticationPolicy = new AuthenticationPolicy() {{
                            origins = new org.openapis.openapi.models.shared.OriginAuthenticationMethod[]{{
                                add(new OriginAuthenticationMethod() {{
                                    jwt = new Jwt() {{
                                        audiences = new String[]{{
                                            add("eaque"),
                                        }};
                                        issuer = "saepe";
                                        jwksPublicKeys = "delectus";
                                        jwtHeaders = new org.openapis.openapi.models.shared.JwtHeader[]{{
                                            add(new JwtHeader() {{
                                                name = "Mr. Homer Corwin";
                                                valuePrefix = "hic";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Eva Denesik";
                                                valuePrefix = "harum";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Doris Jacobi";
                                                valuePrefix = "voluptatibus";
                                            }}),
                                        }};
                                        jwtParams = new String[]{{
                                            add("officia"),
                                            add("libero"),
                                            add("totam"),
                                        }};
                                    }};
                                }}),
                            }};
                            peers = new org.openapis.openapi.models.shared.PeerAuthenticationMethod[]{{
                                add(new PeerAuthenticationMethod() {{
                                    mtls = new MutualTls() {{
                                        mode = MutualTlsModeEnum.PERMISSIVE;
                                    }};
                                }}),
                            }};
                            principalBinding = AuthenticationPolicyPrincipalBindingEnum.USE_ORIGIN;
                            serverTlsContext = new TlsContext() {{
                                certificateContext = new TlsCertificateContext() {{
                                    certificatePaths = new TlsCertificatePaths() {{
                                        certificatePath = "impedit";
                                        privateKeyPath = "ducimus";
                                    }};;
                                    certificateSource = TlsCertificateContextCertificateSourceEnum.INVALID;
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.FROM_PLUGIN;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Jerald Stoltenberg";
                                                    structConfig = "accusamus";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "doloremque";
                                                    privateKeyPath = "nisi";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.INVALID;
                                            }};;
                                            targetUri = "recusandae";
                                        }};;
                                    }};;
                                }};;
                                validationContext = new TlsValidationContext() {{
                                    certificatePath = "voluptates";
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.FROM_PLUGIN;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Howard Hermann DVM";
                                                    structConfig = "eligendi";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "quae";
                                                    privateKeyPath = "officiis";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.CERTIFICATES;
                                            }};;
                                            targetUri = "architecto";
                                        }};;
                                    }};;
                                    validationSource = TlsValidationContextValidationSourceEnum.INVALID;
                                }};;
                            }};;
                        }};;
                        authorizationConfig = new AuthorizationConfig() {{
                            policies = new org.openapis.openapi.models.shared.RbacPolicy[]{{
                                add(new RbacPolicy() {{
                                    name = "Joseph Purdy";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "quos";
                                                    values = new String[]{{
                                                        add("dolore"),
                                                        add("modi"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("maxime"),
                                                add("modi"),
                                                add("consequuntur"),
                                                add("assumenda"),
                                            }};
                                            methods = new String[]{{
                                                add("doloribus"),
                                                add("impedit"),
                                                add("porro"),
                                                add("accusamus"),
                                            }};
                                            notHosts = new String[]{{
                                                add("reiciendis"),
                                                add("ab"),
                                                add("sint"),
                                            }};
                                            notMethods = new String[]{{
                                                add("esse"),
                                                add("iure"),
                                            }};
                                            notPaths = new String[]{{
                                                add("nesciunt"),
                                                add("debitis"),
                                            }};
                                            notPorts = new String[]{{
                                                add("neque"),
                                                add("corporis"),
                                            }};
                                            paths = new String[]{{
                                                add("consequuntur"),
                                                add("officia"),
                                            }};
                                            ports = new String[]{{
                                                add("distinctio"),
                                                add("eius"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "rem";
                                                    values = new String[]{{
                                                        add("accusantium"),
                                                        add("veniam"),
                                                        add("saepe"),
                                                        add("neque"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("aliquam"),
                                                add("quos"),
                                                add("doloribus"),
                                                add("fugiat"),
                                            }};
                                            methods = new String[]{{
                                                add("delectus"),
                                                add("velit"),
                                                add("vitae"),
                                            }};
                                            notHosts = new String[]{{
                                                add("similique"),
                                            }};
                                            notMethods = new String[]{{
                                                add("repellat"),
                                            }};
                                            notPaths = new String[]{{
                                                add("doloribus"),
                                                add("possimus"),
                                            }};
                                            notPorts = new String[]{{
                                                add("incidunt"),
                                                add("explicabo"),
                                                add("ipsam"),
                                            }};
                                            paths = new String[]{{
                                                add("optio"),
                                                add("alias"),
                                                add("quidem"),
                                            }};
                                            ports = new String[]{{
                                                add("commodi"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "consequuntur";
                                                    values = new String[]{{
                                                        add("debitis"),
                                                        add("officia"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "sint";
                                                    values = new String[]{{
                                                        add("numquam"),
                                                        add("tenetur"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "adipisci";
                                                    values = new String[]{{
                                                        add("in"),
                                                        add("minima"),
                                                        add("ex"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "minus";
                                                    values = new String[]{{
                                                        add("beatae"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("nisi"),
                                                add("quisquam"),
                                                add("dolor"),
                                                add("ducimus"),
                                            }};
                                            methods = new String[]{{
                                                add("minima"),
                                                add("architecto"),
                                                add("qui"),
                                            }};
                                            notHosts = new String[]{{
                                                add("magni"),
                                                add("incidunt"),
                                            }};
                                            notMethods = new String[]{{
                                                add("praesentium"),
                                            }};
                                            notPaths = new String[]{{
                                                add("exercitationem"),
                                            }};
                                            notPorts = new String[]{{
                                                add("facilis"),
                                                add("impedit"),
                                                add("sit"),
                                            }};
                                            paths = new String[]{{
                                                add("culpa"),
                                                add("consequuntur"),
                                            }};
                                            ports = new String[]{{
                                                add("deserunt"),
                                            }};
                                        }}),
                                    }};
                                    principals = new org.openapis.openapi.models.shared.Principal[]{{
                                        add(new Principal() {{
                                            condition = "veniam";
                                            groups = new String[]{{
                                                add("itaque"),
                                                add("a"),
                                                add("quisquam"),
                                                add("enim"),
                                            }};
                                            ips = new String[]{{
                                                add("assumenda"),
                                                add("officiis"),
                                                add("architecto"),
                                                add("alias"),
                                            }};
                                            namespaces = new String[]{{
                                                add("ipsa"),
                                                add("nobis"),
                                                add("necessitatibus"),
                                            }};
                                            notGroups = new String[]{{
                                                add("dicta"),
                                            }};
                                            notIps = new String[]{{
                                                add("perspiciatis"),
                                                add("debitis"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("architecto"),
                                                add("accusantium"),
                                            }};
                                            notUsers = new String[]{{
                                                add("veritatis"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("cumque", "iure");
                                                put("quibusdam", "quod");
                                                put("nemo", "recusandae");
                                            }};
                                            users = new String[]{{
                                                add("magnam"),
                                            }};
                                        }}),
                                        add(new Principal() {{
                                            condition = "dignissimos";
                                            groups = new String[]{{
                                                add("sed"),
                                                add("odio"),
                                            }};
                                            ips = new String[]{{
                                                add("provident"),
                                                add("cum"),
                                                add("doloribus"),
                                            }};
                                            namespaces = new String[]{{
                                                add("quidem"),
                                                add("itaque"),
                                                add("laboriosam"),
                                            }};
                                            notGroups = new String[]{{
                                                add("modi"),
                                                add("perspiciatis"),
                                                add("hic"),
                                            }};
                                            notIps = new String[]{{
                                                add("aspernatur"),
                                                add("libero"),
                                                add("nam"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("recusandae"),
                                                add("quod"),
                                            }};
                                            notUsers = new String[]{{
                                                add("saepe"),
                                                add("autem"),
                                                add("quo"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("illum", "nemo");
                                            }};
                                            users = new String[]{{
                                                add("facilis"),
                                                add("non"),
                                                add("mollitia"),
                                                add("assumenda"),
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new RbacPolicy() {{
                                    name = "Preston Stroman";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "laborum";
                                                    values = new String[]{{
                                                        add("maxime"),
                                                        add("ipsam"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "alias";
                                                    values = new String[]{{
                                                        add("deserunt"),
                                                        add("molestias"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "laborum";
                                                    values = new String[]{{
                                                        add("occaecati"),
                                                        add("labore"),
                                                        add("quo"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "perferendis";
                                                    values = new String[]{{
                                                        add("aliquid"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("quaerat"),
                                                add("eligendi"),
                                            }};
                                            methods = new String[]{{
                                                add("nostrum"),
                                                add("officiis"),
                                                add("unde"),
                                                add("nulla"),
                                            }};
                                            notHosts = new String[]{{
                                                add("mollitia"),
                                                add("magnam"),
                                                add("nostrum"),
                                            }};
                                            notMethods = new String[]{{
                                                add("corrupti"),
                                                add("fuga"),
                                            }};
                                            notPaths = new String[]{{
                                                add("impedit"),
                                                add("quasi"),
                                                add("deserunt"),
                                                add("quod"),
                                            }};
                                            notPorts = new String[]{{
                                                add("doloremque"),
                                                add("voluptatem"),
                                            }};
                                            paths = new String[]{{
                                                add("necessitatibus"),
                                                add("maxime"),
                                                add("consequatur"),
                                                add("eaque"),
                                            }};
                                            ports = new String[]{{
                                                add("similique"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "blanditiis";
                                                    values = new String[]{{
                                                        add("magni"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "officiis";
                                                    values = new String[]{{
                                                        add("necessitatibus"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "impedit";
                                                    values = new String[]{{
                                                        add("excepturi"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "a";
                                                    values = new String[]{{
                                                        add("laudantium"),
                                                        add("maiores"),
                                                        add("alias"),
                                                        add("asperiores"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("dicta"),
                                                add("suscipit"),
                                                add("earum"),
                                            }};
                                            methods = new String[]{{
                                                add("velit"),
                                                add("eius"),
                                                add("esse"),
                                                add("in"),
                                            }};
                                            notHosts = new String[]{{
                                                add("quasi"),
                                                add("neque"),
                                                add("vero"),
                                                add("excepturi"),
                                            }};
                                            notMethods = new String[]{{
                                                add("qui"),
                                            }};
                                            notPaths = new String[]{{
                                                add("beatae"),
                                                add("incidunt"),
                                                add("dicta"),
                                                add("odit"),
                                            }};
                                            notPorts = new String[]{{
                                                add("rerum"),
                                                add("alias"),
                                            }};
                                            paths = new String[]{{
                                                add("vel"),
                                                add("accusantium"),
                                                add("id"),
                                            }};
                                            ports = new String[]{{
                                                add("ex"),
                                                add("quas"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "ullam";
                                                    values = new String[]{{
                                                        add("similique"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("quam"),
                                                add("magni"),
                                            }};
                                            methods = new String[]{{
                                                add("delectus"),
                                                add("omnis"),
                                                add("sed"),
                                            }};
                                            notHosts = new String[]{{
                                                add("maxime"),
                                            }};
                                            notMethods = new String[]{{
                                                add("cupiditate"),
                                                add("aliquam"),
                                            }};
                                            notPaths = new String[]{{
                                                add("maiores"),
                                                add("laudantium"),
                                                add("velit"),
                                            }};
                                            notPorts = new String[]{{
                                                add("amet"),
                                                add("nemo"),
                                                add("ipsa"),
                                                add("quisquam"),
                                            }};
                                            paths = new String[]{{
                                                add("quas"),
                                                add("molestiae"),
                                                add("aliquid"),
                                                add("asperiores"),
                                            }};
                                            ports = new String[]{{
                                                add("nobis"),
                                                add("perspiciatis"),
                                                add("accusantium"),
                                                add("dicta"),
                                            }};
                                        }}),
                                    }};
                                    principals = new org.openapis.openapi.models.shared.Principal[]{{
                                        add(new Principal() {{
                                            condition = "commodi";
                                            groups = new String[]{{
                                                add("porro"),
                                                add("tempore"),
                                                add("quidem"),
                                                add("modi"),
                                            }};
                                            ips = new String[]{{
                                                add("fugit"),
                                                add("eius"),
                                                add("sequi"),
                                                add("eligendi"),
                                            }};
                                            namespaces = new String[]{{
                                                add("esse"),
                                                add("blanditiis"),
                                                add("sint"),
                                                add("repellat"),
                                            }};
                                            notGroups = new String[]{{
                                                add("animi"),
                                                add("maiores"),
                                                add("itaque"),
                                                add("nulla"),
                                            }};
                                            notIps = new String[]{{
                                                add("corporis"),
                                                add("velit"),
                                                add("officiis"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("officia"),
                                                add("saepe"),
                                            }};
                                            notUsers = new String[]{{
                                                add("repudiandae"),
                                                add("accusantium"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("impedit", "quasi");
                                                put("blanditiis", "eius");
                                                put("quisquam", "eos");
                                            }};
                                            users = new String[]{{
                                                add("natus"),
                                                add("minus"),
                                                add("quia"),
                                            }};
                                        }}),
                                        add(new Principal() {{
                                            condition = "magnam";
                                            groups = new String[]{{
                                                add("quod"),
                                                add("quos"),
                                            }};
                                            ips = new String[]{{
                                                add("amet"),
                                                add("molestiae"),
                                                add("amet"),
                                            }};
                                            namespaces = new String[]{{
                                                add("modi"),
                                                add("perferendis"),
                                                add("necessitatibus"),
                                            }};
                                            notGroups = new String[]{{
                                                add("molestias"),
                                            }};
                                            notIps = new String[]{{
                                                add("sunt"),
                                                add("maiores"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("odit"),
                                            }};
                                            notUsers = new String[]{{
                                                add("veniam"),
                                                add("ipsam"),
                                                add("eaque"),
                                                add("exercitationem"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("nihil", "ad");
                                                put("nisi", "tenetur");
                                            }};
                                            users = new String[]{{
                                                add("quibusdam"),
                                                add("nemo"),
                                            }};
                                        }}),
                                        add(new Principal() {{
                                            condition = "suscipit";
                                            groups = new String[]{{
                                                add("sit"),
                                                add("quidem"),
                                                add("repellendus"),
                                                add("perferendis"),
                                            }};
                                            ips = new String[]{{
                                                add("sapiente"),
                                                add("sed"),
                                                add("possimus"),
                                            }};
                                            namespaces = new String[]{{
                                                add("repudiandae"),
                                                add("architecto"),
                                                add("adipisci"),
                                                add("pariatur"),
                                            }};
                                            notGroups = new String[]{{
                                                add("dolore"),
                                                add("voluptatibus"),
                                                add("iure"),
                                            }};
                                            notIps = new String[]{{
                                                add("minus"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("dolorum"),
                                                add("velit"),
                                                add("earum"),
                                            }};
                                            notUsers = new String[]{{
                                                add("error"),
                                                add("non"),
                                                add("quasi"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("accusamus", "harum");
                                                put("cumque", "doloremque");
                                                put("expedita", "corrupti");
                                            }};
                                            users = new String[]{{
                                                add("deserunt"),
                                            }};
                                        }}),
                                        add(new Principal() {{
                                            condition = "aliquid";
                                            groups = new String[]{{
                                                add("magni"),
                                                add("tempora"),
                                                add("possimus"),
                                            }};
                                            ips = new String[]{{
                                                add("rerum"),
                                            }};
                                            namespaces = new String[]{{
                                                add("accusamus"),
                                            }};
                                            notGroups = new String[]{{
                                                add("delectus"),
                                                add("minus"),
                                                add("quo"),
                                                add("quos"),
                                            }};
                                            notIps = new String[]{{
                                                add("voluptatum"),
                                                add("iste"),
                                                add("corporis"),
                                                add("accusantium"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("aut"),
                                            }};
                                            notUsers = new String[]{{
                                                add("nostrum"),
                                                add("at"),
                                                add("possimus"),
                                                add("neque"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("vel", "sapiente");
                                                put("mollitia", "quae");
                                                put("quos", "aperiam");
                                                put("non", "voluptates");
                                            }};
                                            users = new String[]{{
                                                add("aliquam"),
                                                add("quisquam"),
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new RbacPolicy() {{
                                    name = "Ms. Russell Wunsch";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "aliquid";
                                                    values = new String[]{{
                                                        add("cumque"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("voluptatum"),
                                                add("ducimus"),
                                                add("adipisci"),
                                            }};
                                            methods = new String[]{{
                                                add("tempora"),
                                                add("blanditiis"),
                                                add("numquam"),
                                                add("sequi"),
                                            }};
                                            notHosts = new String[]{{
                                                add("sit"),
                                                add("rerum"),
                                                add("veritatis"),
                                            }};
                                            notMethods = new String[]{{
                                                add("autem"),
                                                add("quidem"),
                                                add("totam"),
                                                add("porro"),
                                            }};
                                            notPaths = new String[]{{
                                                add("magni"),
                                                add("nihil"),
                                                add("voluptas"),
                                            }};
                                            notPorts = new String[]{{
                                                add("commodi"),
                                                add("alias"),
                                                add("fuga"),
                                            }};
                                            paths = new String[]{{
                                                add("dolore"),
                                            }};
                                            ports = new String[]{{
                                                add("aliquam"),
                                                add("iste"),
                                                add("ullam"),
                                                add("eligendi"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "voluptas";
                                                    values = new String[]{{
                                                        add("unde"),
                                                        add("illo"),
                                                        add("nihil"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "inventore";
                                                    values = new String[]{{
                                                        add("ipsam"),
                                                        add("quasi"),
                                                        add("cumque"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "dicta";
                                                    values = new String[]{{
                                                        add("facere"),
                                                        add("facilis"),
                                                        add("beatae"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "cumque";
                                                    values = new String[]{{
                                                        add("labore"),
                                                        add("expedita"),
                                                        add("corrupti"),
                                                        add("rem"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("officiis"),
                                                add("cum"),
                                                add("pariatur"),
                                            }};
                                            methods = new String[]{{
                                                add("quo"),
                                                add("incidunt"),
                                                add("quod"),
                                                add("minus"),
                                            }};
                                            notHosts = new String[]{{
                                                add("id"),
                                                add("excepturi"),
                                                add("occaecati"),
                                                add("libero"),
                                            }};
                                            notMethods = new String[]{{
                                                add("esse"),
                                                add("hic"),
                                                add("maxime"),
                                                add("accusantium"),
                                            }};
                                            notPaths = new String[]{{
                                                add("fugit"),
                                                add("pariatur"),
                                                add("eligendi"),
                                            }};
                                            notPorts = new String[]{{
                                                add("veritatis"),
                                                add("aut"),
                                                add("laudantium"),
                                                add("iusto"),
                                            }};
                                            paths = new String[]{{
                                                add("voluptates"),
                                            }};
                                            ports = new String[]{{
                                                add("magni"),
                                                add("rerum"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "voluptatem";
                                                    values = new String[]{{
                                                        add("at"),
                                                        add("eum"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("voluptatum"),
                                                add("blanditiis"),
                                            }};
                                            methods = new String[]{{
                                                add("atque"),
                                                add("rerum"),
                                            }};
                                            notHosts = new String[]{{
                                                add("atque"),
                                                add("nostrum"),
                                                add("atque"),
                                            }};
                                            notMethods = new String[]{{
                                                add("est"),
                                            }};
                                            notPaths = new String[]{{
                                                add("rem"),
                                                add("magni"),
                                            }};
                                            notPorts = new String[]{{
                                                add("quas"),
                                            }};
                                            paths = new String[]{{
                                                add("enim"),
                                                add("labore"),
                                                add("sapiente"),
                                                add("saepe"),
                                            }};
                                            ports = new String[]{{
                                                add("officia"),
                                                add("natus"),
                                                add("cumque"),
                                                add("natus"),
                                            }};
                                        }}),
                                    }};
                                    principals = new org.openapis.openapi.models.shared.Principal[]{{
                                        add(new Principal() {{
                                            condition = "doloribus";
                                            groups = new String[]{{
                                                add("officiis"),
                                            }};
                                            ips = new String[]{{
                                                add("cumque"),
                                                add("quis"),
                                                add("enim"),
                                            }};
                                            namespaces = new String[]{{
                                                add("nemo"),
                                                add("illum"),
                                            }};
                                            notGroups = new String[]{{
                                                add("sit"),
                                            }};
                                            notIps = new String[]{{
                                                add("minus"),
                                                add("asperiores"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("voluptates"),
                                                add("praesentium"),
                                                add("dicta"),
                                                add("fugit"),
                                            }};
                                            notUsers = new String[]{{
                                                add("aliquid"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("sed", "deleniti");
                                                put("sunt", "nesciunt");
                                                put("delectus", "laborum");
                                                put("aliquam", "deserunt");
                                            }};
                                            users = new String[]{{
                                                add("sunt"),
                                                add("impedit"),
                                            }};
                                        }}),
                                        add(new Principal() {{
                                            condition = "eius";
                                            groups = new String[]{{
                                                add("ipsa"),
                                                add("at"),
                                                add("dolorem"),
                                            }};
                                            ips = new String[]{{
                                                add("aspernatur"),
                                                add("inventore"),
                                                add("sequi"),
                                                add("fugit"),
                                            }};
                                            namespaces = new String[]{{
                                                add("hic"),
                                                add("eaque"),
                                                add("dolorem"),
                                            }};
                                            notGroups = new String[]{{
                                                add("aperiam"),
                                            }};
                                            notIps = new String[]{{
                                                add("nulla"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("illo"),
                                                add("magnam"),
                                            }};
                                            notUsers = new String[]{{
                                                add("numquam"),
                                                add("optio"),
                                                add("nobis"),
                                                add("ex"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("quae", "deleniti");
                                                put("expedita", "hic");
                                                put("excepturi", "aliquid");
                                                put("sed", "beatae");
                                            }};
                                            users = new String[]{{
                                                add("ea"),
                                                add("animi"),
                                                add("dolore"),
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new RbacPolicy() {{
                                    name = "Julio Koch";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "earum";
                                                    values = new String[]{{
                                                        add("officiis"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "eius";
                                                    values = new String[]{{
                                                        add("itaque"),
                                                        add("dignissimos"),
                                                        add("ipsam"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "explicabo";
                                                    values = new String[]{{
                                                        add("aliquid"),
                                                        add("quis"),
                                                        add("facilis"),
                                                        add("ipsum"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "ut";
                                                    values = new String[]{{
                                                        add("architecto"),
                                                        add("praesentium"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("dolor"),
                                                add("expedita"),
                                                add("libero"),
                                                add("iste"),
                                            }};
                                            methods = new String[]{{
                                                add("minus"),
                                            }};
                                            notHosts = new String[]{{
                                                add("temporibus"),
                                                add("sint"),
                                                add("iusto"),
                                            }};
                                            notMethods = new String[]{{
                                                add("accusamus"),
                                                add("aperiam"),
                                            }};
                                            notPaths = new String[]{{
                                                add("laudantium"),
                                                add("tempora"),
                                                add("quae"),
                                                add("omnis"),
                                            }};
                                            notPorts = new String[]{{
                                                add("rem"),
                                                add("tenetur"),
                                                add("deleniti"),
                                                add("modi"),
                                            }};
                                            paths = new String[]{{
                                                add("architecto"),
                                                add("aliquam"),
                                                add("labore"),
                                                add("maiores"),
                                            }};
                                            ports = new String[]{{
                                                add("saepe"),
                                            }};
                                        }}),
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "esse";
                                                    values = new String[]{{
                                                        add("facere"),
                                                        add("quisquam"),
                                                        add("cumque"),
                                                        add("aliquam"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("deserunt"),
                                                add("ad"),
                                                add("reiciendis"),
                                            }};
                                            methods = new String[]{{
                                                add("porro"),
                                            }};
                                            notHosts = new String[]{{
                                                add("nobis"),
                                                add("quibusdam"),
                                                add("omnis"),
                                            }};
                                            notMethods = new String[]{{
                                                add("ipsam"),
                                            }};
                                            notPaths = new String[]{{
                                                add("cupiditate"),
                                                add("reprehenderit"),
                                                add("quia"),
                                            }};
                                            notPorts = new String[]{{
                                                add("accusantium"),
                                                add("ad"),
                                                add("nisi"),
                                                add("molestiae"),
                                            }};
                                            paths = new String[]{{
                                                add("laudantium"),
                                            }};
                                            ports = new String[]{{
                                                add("odit"),
                                            }};
                                        }}),
                                    }};
                                    principals = new org.openapis.openapi.models.shared.Principal[]{{
                                        add(new Principal() {{
                                            condition = "expedita";
                                            groups = new String[]{{
                                                add("repellendus"),
                                            }};
                                            ips = new String[]{{
                                                add("ipsa"),
                                            }};
                                            namespaces = new String[]{{
                                                add("dolore"),
                                                add("esse"),
                                                add("accusantium"),
                                            }};
                                            notGroups = new String[]{{
                                                add("sapiente"),
                                                add("quam"),
                                                add("est"),
                                            }};
                                            notIps = new String[]{{
                                                add("delectus"),
                                                add("culpa"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("iusto"),
                                                add("quod"),
                                                add("voluptatibus"),
                                            }};
                                            notUsers = new String[]{{
                                                add("non"),
                                                add("ullam"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("voluptas", "doloribus");
                                                put("animi", "recusandae");
                                                put("corporis", "non");
                                            }};
                                            users = new String[]{{
                                                add("distinctio"),
                                                add("maiores"),
                                                add("laboriosam"),
                                                add("voluptatem"),
                                            }};
                                        }}),
                                        add(new Principal() {{
                                            condition = "optio";
                                            groups = new String[]{{
                                                add("sunt"),
                                            }};
                                            ips = new String[]{{
                                                add("voluptatibus"),
                                            }};
                                            namespaces = new String[]{{
                                                add("sed"),
                                            }};
                                            notGroups = new String[]{{
                                                add("rerum"),
                                            }};
                                            notIps = new String[]{{
                                                add("nostrum"),
                                                add("temporibus"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("dolor"),
                                            }};
                                            notUsers = new String[]{{
                                                add("dignissimos"),
                                                add("reiciendis"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("vitae", "est");
                                                put("accusantium", "quod");
                                                put("minus", "quos");
                                                put("possimus", "maiores");
                                            }};
                                            users = new String[]{{
                                                add("provident"),
                                                add("sapiente"),
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                        }};;
                        awsV4Authentication = new Awsv4Signature() {{
                            accessKey = "aperiam";
                            accessKeyId = "similique";
                            accessKeyVersion = "nesciunt";
                            originRegion = "provident";
                        }};;
                        clientTlsPolicy = "ex";
                        clientTlsSettings = new ClientTlsSettings() {{
                            clientTlsContext = new TlsContext() {{
                                certificateContext = new TlsCertificateContext() {{
                                    certificatePaths = new TlsCertificatePaths() {{
                                        certificatePath = "repellendus";
                                        privateKeyPath = "unde";
                                    }};;
                                    certificateSource = TlsCertificateContextCertificateSourceEnum.INVALID;
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.INVALID;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Gertrude Grant";
                                                    structConfig = "quisquam";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "sunt";
                                                    privateKeyPath = "enim";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.INVALID;
                                            }};;
                                            targetUri = "maiores";
                                        }};;
                                    }};;
                                }};;
                                validationContext = new TlsValidationContext() {{
                                    certificatePath = "distinctio";
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.GCE_VM;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Tomas Bosco";
                                                    structConfig = "cum";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "dicta";
                                                    privateKeyPath = "impedit";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.CERTIFICATES;
                                            }};;
                                            targetUri = "eveniet";
                                        }};;
                                    }};;
                                    validationSource = TlsValidationContextValidationSourceEnum.USE_SDS;
                                }};;
                            }};;
                            mode = ClientTlsSettingsModeEnum.DISABLE;
                            sni = "impedit";
                            subjectAltNames = new String[]{{
                                add("impedit"),
                                add("vel"),
                                add("eligendi"),
                            }};
                        }};;
                        subjectAltNames = new String[]{{
                            add("ex"),
                            add("beatae"),
                            add("veritatis"),
                            add("maiores"),
                        }};
                    }};;
                    selfLink = "itaque";
                    selfLinkWithId = "vero";
                    serviceBindings = new String[]{{
                        add("illo"),
                        add("quo"),
                        add("dignissimos"),
                    }};
                    serviceLbPolicy = "minus";
                    sessionAffinity = BackendServiceSessionAffinityEnum.HEADER_FIELD;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.NONE;
                        subsetSize = 738152;
                    }};;
                    timeoutSec = 382342;
                    vpcNetworkScope = BackendServiceVpcNetworkScopeEnum.REGIONAL_VPC_NETWORK;
                }};;
                accessToken = "earum";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "quaerat";
                key = "ipsum";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "laudantium";
                requestId = "rerum";
                uploadType = "deserunt";
                uploadProtocol = "odit";
                userIp = "ad";
            }};            

            ComputeBackendServicesPatchResponse res = sdk.backendServices.computeBackendServicesPatch(req, new ComputeBackendServicesPatchSecurity() {{
                option1 = new ComputeBackendServicesPatchSecurityOption1("sequi", "beatae") {{
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

            ComputeBackendServicesSetEdgeSecurityPolicyRequest req = new ComputeBackendServicesSetEdgeSecurityPolicyRequest("iusto", "esse") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyReference = new SecurityPolicyReference() {{
                    securityPolicy = "odio";
                }};;
                accessToken = "nulla";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "illo";
                key = "exercitationem";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "illum";
                requestId = "fugit";
                uploadType = "maxime";
                uploadProtocol = "dolorum";
                userIp = "repellat";
            }};            

            ComputeBackendServicesSetEdgeSecurityPolicyResponse res = sdk.backendServices.computeBackendServicesSetEdgeSecurityPolicy(req, new ComputeBackendServicesSetEdgeSecurityPolicySecurity() {{
                option1 = new ComputeBackendServicesSetEdgeSecurityPolicySecurityOption1("nostrum", "illum") {{
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

            ComputeBackendServicesSetIamPolicyRequest req = new ComputeBackendServicesSetIamPolicyRequest("quibusdam", "commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "consectetur";
                            condition = new Expr() {{
                                description = "temporibus";
                                expression = "optio";
                                location = "ipsa";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("culpa"),
                                add("repudiandae"),
                            }};
                            role = "aspernatur";
                        }}),
                    }};
                    etag = "sapiente";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("harum"),
                                            add("ducimus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("laudantium"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("molestiae"),
                                            add("quis"),
                                            add("iure"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("amet"),
                                    add("sapiente"),
                                }};
                                service = "corporis";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "iure";
                                condition = new Expr() {{
                                    description = "quisquam";
                                    expression = "provident";
                                    location = "laudantium";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("enim"),
                                    add("ipsam"),
                                }};
                                role = "minima";
                            }}),
                            add(new Binding() {{
                                bindingId = "tempora";
                                condition = new Expr() {{
                                    description = "perferendis";
                                    expression = "corrupti";
                                    location = "doloremque";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("doloremque"),
                                    add("cum"),
                                }};
                                role = "nobis";
                            }}),
                            add(new Binding() {{
                                bindingId = "similique";
                                condition = new Expr() {{
                                    description = "porro";
                                    expression = "impedit";
                                    location = "nisi";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("fugiat"),
                                    add("laboriosam"),
                                    add("nam"),
                                }};
                                role = "enim";
                            }}),
                        }};
                        etag = "maiores";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "provident";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("magnam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "explicabo";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("id"),
                                            add("possimus"),
                                            add("fugit"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.IN;
                                        svc = "sequi";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("error"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "voluptate";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("aperiam"),
                                            add("voluptates"),
                                            add("possimus"),
                                        }};
                                    }}),
                                }};
                                description = "fugit";
                                ins = new String[]{{
                                    add("repudiandae"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Moses Wuckert";
                                                    value = "nesciunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Matt McLaughlin";
                                                    value = "nam";
                                                }}),
                                            }};
                                            field = "assumenda";
                                            metric = "quo";
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
                                                    name = "Colleen Huel";
                                                    value = "laboriosam";
                                                }}),
                                            }};
                                            field = "accusamus";
                                            metric = "ab";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("eaque"),
                                    add("alias"),
                                    add("qui"),
                                    add("consequuntur"),
                                }};
                                permissions = new String[]{{
                                    add("quidem"),
                                }};
                            }}),
                        }};
                        version = 193334;
                    }};;
                }};;
                accessToken = "amet";
                alt = AltEnum.MEDIA;
                callback = "illum";
                fields = "praesentium";
                key = "unde";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "tempore";
                uploadProtocol = "amet";
                userIp = "debitis";
            }};            

            ComputeBackendServicesSetIamPolicyResponse res = sdk.backendServices.computeBackendServicesSetIamPolicy(req, new ComputeBackendServicesSetIamPolicySecurity() {{
                option1 = new ComputeBackendServicesSetIamPolicySecurityOption1("nobis", "asperiores") {{
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

            ComputeBackendServicesSetSecurityPolicyRequest req = new ComputeBackendServicesSetSecurityPolicyRequest("temporibus", "id") {{
                dollarXgafv = XgafvEnum.TWO;
                securityPolicyReference = new SecurityPolicyReference() {{
                    securityPolicy = "quibusdam";
                }};;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "veniam";
                fields = "aliquam";
                key = "provident";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "earum";
                requestId = "doloremque";
                uploadType = "ipsum";
                uploadProtocol = "alias";
                userIp = "doloremque";
            }};            

            ComputeBackendServicesSetSecurityPolicyResponse res = sdk.backendServices.computeBackendServicesSetSecurityPolicy(req, new ComputeBackendServicesSetSecurityPolicySecurity() {{
                option1 = new ComputeBackendServicesSetSecurityPolicySecurityOption1("tempora", "perspiciatis") {{
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

            ComputeBackendServicesTestIamPermissionsRequest req = new ComputeBackendServicesTestIamPermissionsRequest("quam", "atque") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("architecto"),
                        add("a"),
                    }};
                }};;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "quod";
                fields = "a";
                key = "qui";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "atque";
                uploadProtocol = "totam";
                userIp = "tenetur";
            }};            

            ComputeBackendServicesTestIamPermissionsResponse res = sdk.backendServices.computeBackendServicesTestIamPermissions(req, new ComputeBackendServicesTestIamPermissionsSecurity() {{
                option1 = new ComputeBackendServicesTestIamPermissionsSecurityOption1("voluptate", "quam") {{
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

            ComputeBackendServicesUpdateRequest req = new ComputeBackendServicesUpdateRequest("quod", "vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                backendService1 = new BackendService() {{
                    affinityCookieTtlSec = 968689;
                    backends = new org.openapis.openapi.models.shared.Backend[]{{
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 779.92;
                            description = "facere";
                            failover = false;
                            group = "maxime";
                            maxConnections = 681578;
                            maxConnectionsPerEndpoint = 66596;
                            maxConnectionsPerInstance = 405789;
                            maxRate = 235970;
                            maxRatePerEndpoint = 9824.09;
                            maxRatePerInstance = 1530.97;
                            maxUtilization = 6571.41;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.CONNECTION;
                            capacityScaler = 7574.71;
                            description = "voluptatum";
                            failover = false;
                            group = "perferendis";
                            maxConnections = 671690;
                            maxConnectionsPerEndpoint = 609172;
                            maxConnectionsPerInstance = 470321;
                            maxRate = 945190;
                            maxRatePerEndpoint = 9596.96;
                            maxRatePerInstance = 2420.13;
                            maxUtilization = 2402.92;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.CONNECTION;
                            capacityScaler = 7631.4;
                            description = "illum";
                            failover = false;
                            group = "at";
                            maxConnections = 945320;
                            maxConnectionsPerEndpoint = 562066;
                            maxConnectionsPerInstance = 371295;
                            maxRate = 456222;
                            maxRatePerEndpoint = 6757.55;
                            maxRatePerInstance = 5961.85;
                            maxUtilization = 9156.47;
                        }}),
                        add(new Backend() {{
                            balancingMode = BackendBalancingModeEnum.RATE;
                            capacityScaler = 951.23;
                            description = "quas";
                            failover = false;
                            group = "odio";
                            maxConnections = 416934;
                            maxConnectionsPerEndpoint = 780789;
                            maxConnectionsPerInstance = 400470;
                            maxRate = 648497;
                            maxRatePerEndpoint = 6953.47;
                            maxRatePerInstance = 1265.12;
                            maxUtilization = 928.51;
                        }}),
                    }};
                    cdnPolicy = new BackendServiceCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "magni";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "natus";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "illum";
                            }}),
                            add(new BackendServiceCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "a";
                            }}),
                        }};
                        cacheKeyPolicy = new CacheKeyPolicy() {{
                            includeHost = false;
                            includeHttpHeaders = new String[]{{
                                add("unde"),
                                add("ut"),
                                add("facere"),
                                add("voluptas"),
                            }};
                            includeNamedCookies = new String[]{{
                                add("recusandae"),
                                add("quisquam"),
                                add("facere"),
                                add("dignissimos"),
                            }};
                            includeProtocol = false;
                            includeQueryString = false;
                            queryStringBlacklist = new String[]{{
                                add("provident"),
                                add("dolor"),
                                add("sint"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("eaque"),
                            }};
                        }};;
                        cacheMode = BackendServiceCdnPolicyCacheModeEnum.FORCE_CACHE_ALL;
                        clientTtl = 385291;
                        defaultTtl = 672627;
                        maxTtl = 422276;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendServiceCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 129631;
                                ttl = 852689;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 41306;
                                ttl = 32775;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 4747;
                                ttl = 244157;
                            }}),
                            add(new BackendServiceCdnPolicyNegativeCachingPolicy() {{
                                code = 356805;
                                ttl = 339094;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 242532;
                        signedUrlCacheMaxAgeSec = "ratione";
                        signedUrlKeyNames = new String[]{{
                            add("maxime"),
                            add("recusandae"),
                            add("cumque"),
                        }};
                    }};;
                    circuitBreakers = new CircuitBreakers() {{
                        connectTimeout = new Duration() {{
                            nanos = 39047;
                            seconds = "totam";
                        }};;
                        maxConnections = 435266;
                        maxPendingRequests = 982927;
                        maxRequests = 667646;
                        maxRequestsPerConnection = 144058;
                        maxRetries = 84207;
                    }};;
                    compressionMode = BackendServiceCompressionModeEnum.DISABLED;
                    connectionDraining = new ConnectionDraining() {{
                        drainingTimeoutSec = 611970;
                    }};;
                    connectionTrackingPolicy = new BackendServiceConnectionTrackingPolicy() {{
                        connectionPersistenceOnUnhealthyBackends = BackendServiceConnectionTrackingPolicyConnectionPersistenceOnUnhealthyBackendsEnum.ALWAYS_PERSIST;
                        enableStrongAffinity = false;
                        idleTimeoutSec = 369099;
                        trackingMode = BackendServiceConnectionTrackingPolicyTrackingModeEnum.INVALID_TRACKING_MODE;
                    }};;
                    consistentHash = new ConsistentHashLoadBalancerSettings() {{
                        httpCookie = new ConsistentHashLoadBalancerSettingsHttpCookie() {{
                            name = "Mr. Rickey Franey";
                            path = "beatae";
                            ttl = new Duration() {{
                                nanos = 420233;
                                seconds = "ducimus";
                            }};;
                        }};;
                        httpHeaderName = "libero";
                        minimumRingSize = "molestias";
                    }};;
                    creationTimestamp = "necessitatibus";
                    customRequestHeaders = new String[]{{
                        add("impedit"),
                    }};
                    customResponseHeaders = new String[]{{
                        add("illum"),
                        add("distinctio"),
                        add("voluptatem"),
                    }};
                    description = "non";
                    edgeSecurityPolicy = "quaerat";
                    enableCDN = false;
                    failoverPolicy = new BackendServiceFailoverPolicy() {{
                        disableConnectionDrainOnFailover = false;
                        dropTrafficIfUnhealthy = false;
                        failoverRatio = 101.64;
                    }};;
                    fingerprint = "laudantium";
                    healthChecks = new String[]{{
                        add("commodi"),
                        add("quibusdam"),
                        add("consectetur"),
                        add("voluptas"),
                    }};
                    iap = new BackendServiceIAP() {{
                        enabled = false;
                        oauth2ClientId = "quaerat";
                        oauth2ClientInfo = new BackendServiceIAPOAuth2ClientInfo() {{
                            applicationName = "earum";
                            clientName = "tenetur";
                            developerEmailAddress = "assumenda";
                        }};;
                        oauth2ClientSecret = "dolore";
                        oauth2ClientSecretSha256 = "enim";
                    }};;
                    id = "ullam";
                    ipAddressSelectionPolicy = BackendServiceIpAddressSelectionPolicyEnum.IP_ADDRESS_SELECTION_POLICY_UNSPECIFIED;
                    kind = "alias";
                    loadBalancingScheme = BackendServiceLoadBalancingSchemeEnum.INTERNAL;
                    localityLbPolicies = new org.openapis.openapi.models.shared.BackendServiceLocalityLoadBalancingPolicyConfig[]{{
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "dicta";
                                name = "Gertrude Doyle";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.RANDOM;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "officiis";
                                name = "Luis Hessel";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.ROUND_ROBIN;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "excepturi";
                                name = "Julian Buckridge";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.INVALID_LB_POLICY;
                            }};
                        }}),
                        add(new BackendServiceLocalityLoadBalancingPolicyConfig() {{
                            customPolicy = new BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy() {{
                                data = "soluta";
                                name = "Jimmy Walsh";
                            }};
                            policy = new BackendServiceLocalityLoadBalancingPolicyConfigPolicy() {{
                                name = BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum.LEAST_REQUEST;
                            }};
                        }}),
                    }};
                    localityLbPolicy = BackendServiceLocalityLbPolicyEnum.INVALID_LB_POLICY;
                    logConfig = new BackendServiceLogConfig() {{
                        enable = false;
                        optional = BackendServiceLogConfigOptionalEnum.CUSTOM;
                        optionalFields = new String[]{{
                            add("iusto"),
                            add("magni"),
                            add("beatae"),
                            add("aliquid"),
                        }};
                        optionalMode = BackendServiceLogConfigOptionalModeEnum.EXCLUDE_ALL_OPTIONAL;
                        sampleRate = 4531.98;
                    }};;
                    maxStreamDuration = new Duration() {{
                        nanos = 426594;
                        seconds = "minima";
                    }};;
                    metadatas = new java.util.HashMap<String, String>() {{
                        put("vel", "laboriosam");
                    }};
                    name = "Ann Leffler PhD";
                    network = "provident";
                    outlierDetection = new OutlierDetection() {{
                        baseEjectionTime = new Duration() {{
                            nanos = 818422;
                            seconds = "sed";
                        }};;
                        consecutiveErrors = 80448;
                        consecutiveGatewayFailure = 976403;
                        enforcingConsecutiveErrors = 601228;
                        enforcingConsecutiveGatewayFailure = 645609;
                        enforcingSuccessRate = 834587;
                        interval = new Duration() {{
                            nanos = 7919;
                            seconds = "adipisci";
                        }};;
                        maxEjectionPercent = 39069;
                        successRateMinimumHosts = 761927;
                        successRateRequestVolume = 269731;
                        successRateStdevFactor = 890765;
                    }};;
                    port = 763937;
                    portName = "maxime";
                    protocol = BackendServiceProtocolEnum.ALL;
                    region = "beatae";
                    securityPolicy = "id";
                    securitySettings = new SecuritySettings() {{
                        authentication = "consequatur";
                        authenticationPolicy = new AuthenticationPolicy() {{
                            origins = new org.openapis.openapi.models.shared.OriginAuthenticationMethod[]{{
                                add(new OriginAuthenticationMethod() {{
                                    jwt = new Jwt() {{
                                        audiences = new String[]{{
                                            add("iure"),
                                        }};
                                        issuer = "tempora";
                                        jwksPublicKeys = "eos";
                                        jwtHeaders = new org.openapis.openapi.models.shared.JwtHeader[]{{
                                            add(new JwtHeader() {{
                                                name = "Katie Langworth";
                                                valuePrefix = "ullam";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Lori Nitzsche";
                                                valuePrefix = "accusamus";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Miranda Koelpin";
                                                valuePrefix = "quisquam";
                                            }}),
                                        }};
                                        jwtParams = new String[]{{
                                            add("tempora"),
                                            add("ipsam"),
                                            add("officiis"),
                                        }};
                                    }};
                                }}),
                                add(new OriginAuthenticationMethod() {{
                                    jwt = new Jwt() {{
                                        audiences = new String[]{{
                                            add("magni"),
                                        }};
                                        issuer = "voluptatem";
                                        jwksPublicKeys = "est";
                                        jwtHeaders = new org.openapis.openapi.models.shared.JwtHeader[]{{
                                            add(new JwtHeader() {{
                                                name = "Natasha Wiza";
                                                valuePrefix = "dolorum";
                                            }}),
                                        }};
                                        jwtParams = new String[]{{
                                            add("earum"),
                                            add("excepturi"),
                                            add("numquam"),
                                            add("molestiae"),
                                        }};
                                    }};
                                }}),
                                add(new OriginAuthenticationMethod() {{
                                    jwt = new Jwt() {{
                                        audiences = new String[]{{
                                            add("error"),
                                            add("animi"),
                                            add("voluptatum"),
                                            add("aliquid"),
                                        }};
                                        issuer = "nihil";
                                        jwksPublicKeys = "facilis";
                                        jwtHeaders = new org.openapis.openapi.models.shared.JwtHeader[]{{
                                            add(new JwtHeader() {{
                                                name = "Ruby Gusikowski";
                                                valuePrefix = "eum";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Mrs. Geraldine Lueilwitz";
                                                valuePrefix = "fugiat";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Shannon Little";
                                                valuePrefix = "nemo";
                                            }}),
                                            add(new JwtHeader() {{
                                                name = "Melba Runolfsson";
                                                valuePrefix = "cumque";
                                            }}),
                                        }};
                                        jwtParams = new String[]{{
                                            add("occaecati"),
                                            add("ipsum"),
                                        }};
                                    }};
                                }}),
                            }};
                            peers = new org.openapis.openapi.models.shared.PeerAuthenticationMethod[]{{
                                add(new PeerAuthenticationMethod() {{
                                    mtls = new MutualTls() {{
                                        mode = MutualTlsModeEnum.STRICT;
                                    }};
                                }}),
                                add(new PeerAuthenticationMethod() {{
                                    mtls = new MutualTls() {{
                                        mode = MutualTlsModeEnum.INVALID;
                                    }};
                                }}),
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
                            }};
                            principalBinding = AuthenticationPolicyPrincipalBindingEnum.USE_PEER;
                            serverTlsContext = new TlsContext() {{
                                certificateContext = new TlsCertificateContext() {{
                                    certificatePaths = new TlsCertificatePaths() {{
                                        certificatePath = "mollitia";
                                        privateKeyPath = "id";
                                    }};;
                                    certificateSource = TlsCertificateContextCertificateSourceEnum.USE_SDS;
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.FROM_PLUGIN;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Clark Kohler";
                                                    structConfig = "saepe";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "facere";
                                                    privateKeyPath = "nobis";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.INVALID;
                                            }};;
                                            targetUri = "molestias";
                                        }};;
                                    }};;
                                }};;
                                validationContext = new TlsValidationContext() {{
                                    certificatePath = "aut";
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.INVALID;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Barry Funk";
                                                    structConfig = "dolore";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "esse";
                                                    privateKeyPath = "reiciendis";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.GCE_VM;
                                            }};;
                                            targetUri = "amet";
                                        }};;
                                    }};;
                                    validationSource = TlsValidationContextValidationSourceEnum.USE_PATH;
                                }};;
                            }};;
                        }};;
                        authorizationConfig = new AuthorizationConfig() {{
                            policies = new org.openapis.openapi.models.shared.RbacPolicy[]{{
                                add(new RbacPolicy() {{
                                    name = "Derek Lubowitz";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            constraints = new org.openapis.openapi.models.shared.PermissionConstraint[]{{
                                                add(new PermissionConstraint() {{
                                                    key = "quas";
                                                    values = new String[]{{
                                                        add("vero"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "fuga";
                                                    values = new String[]{{
                                                        add("maiores"),
                                                        add("error"),
                                                        add("recusandae"),
                                                    }};
                                                }}),
                                                add(new PermissionConstraint() {{
                                                    key = "a";
                                                    values = new String[]{{
                                                        add("sapiente"),
                                                    }};
                                                }}),
                                            }};
                                            hosts = new String[]{{
                                                add("assumenda"),
                                                add("repellendus"),
                                                add("omnis"),
                                                add("delectus"),
                                            }};
                                            methods = new String[]{{
                                                add("voluptatibus"),
                                                add("aut"),
                                            }};
                                            notHosts = new String[]{{
                                                add("omnis"),
                                                add("similique"),
                                            }};
                                            notMethods = new String[]{{
                                                add("modi"),
                                                add("facere"),
                                                add("neque"),
                                                add("quis"),
                                            }};
                                            notPaths = new String[]{{
                                                add("sed"),
                                                add("non"),
                                            }};
                                            notPorts = new String[]{{
                                                add("fugiat"),
                                                add("soluta"),
                                                add("ipsa"),
                                                add("reiciendis"),
                                            }};
                                            paths = new String[]{{
                                                add("vero"),
                                                add("eos"),
                                            }};
                                            ports = new String[]{{
                                                add("quasi"),
                                                add("architecto"),
                                                add("praesentium"),
                                            }};
                                        }}),
                                    }};
                                    principals = new org.openapis.openapi.models.shared.Principal[]{{
                                        add(new Principal() {{
                                            condition = "fugiat";
                                            groups = new String[]{{
                                                add("iure"),
                                                add("laudantium"),
                                            }};
                                            ips = new String[]{{
                                                add("magnam"),
                                                add("accusamus"),
                                            }};
                                            namespaces = new String[]{{
                                                add("repudiandae"),
                                                add("quibusdam"),
                                                add("praesentium"),
                                                add("enim"),
                                            }};
                                            notGroups = new String[]{{
                                                add("unde"),
                                                add("quae"),
                                                add("eum"),
                                            }};
                                            notIps = new String[]{{
                                                add("eveniet"),
                                                add("laboriosam"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("blanditiis"),
                                            }};
                                            notUsers = new String[]{{
                                                add("illum"),
                                                add("reiciendis"),
                                                add("placeat"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("consequatur", "nesciunt");
                                            }};
                                            users = new String[]{{
                                                add("quidem"),
                                            }};
                                        }}),
                                        add(new Principal() {{
                                            condition = "voluptas";
                                            groups = new String[]{{
                                                add("laudantium"),
                                                add("dignissimos"),
                                                add("omnis"),
                                                add("omnis"),
                                            }};
                                            ips = new String[]{{
                                                add("dolorem"),
                                            }};
                                            namespaces = new String[]{{
                                                add("molestiae"),
                                                add("debitis"),
                                                add("vitae"),
                                            }};
                                            notGroups = new String[]{{
                                                add("ad"),
                                            }};
                                            notIps = new String[]{{
                                                add("ut"),
                                                add("asperiores"),
                                                add("reprehenderit"),
                                            }};
                                            notNamespaces = new String[]{{
                                                add("itaque"),
                                                add("et"),
                                                add("eos"),
                                            }};
                                            notUsers = new String[]{{
                                                add("ex"),
                                                add("praesentium"),
                                                add("natus"),
                                                add("vitae"),
                                            }};
                                            properties = new java.util.HashMap<String, String>() {{
                                                put("laudantium", "aspernatur");
                                                put("eligendi", "repudiandae");
                                                put("dicta", "inventore");
                                                put("ullam", "iusto");
                                            }};
                                            users = new String[]{{
                                                add("voluptate"),
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                        }};;
                        awsV4Authentication = new Awsv4Signature() {{
                            accessKey = "sed";
                            accessKeyId = "dolorem";
                            accessKeyVersion = "eaque";
                            originRegion = "exercitationem";
                        }};;
                        clientTlsPolicy = "amet";
                        clientTlsSettings = new ClientTlsSettings() {{
                            clientTlsContext = new TlsContext() {{
                                certificateContext = new TlsCertificateContext() {{
                                    certificatePaths = new TlsCertificatePaths() {{
                                        certificatePath = "voluptate";
                                        privateKeyPath = "voluptate";
                                    }};;
                                    certificateSource = TlsCertificateContextCertificateSourceEnum.USE_SDS;
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.INVALID;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Horace Leannon";
                                                    structConfig = "doloribus";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "omnis";
                                                    privateKeyPath = "quam";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.GCE_VM;
                                            }};;
                                            targetUri = "voluptates";
                                        }};;
                                    }};;
                                }};;
                                validationContext = new TlsValidationContext() {{
                                    certificatePath = "sequi";
                                    sdsConfig = new SdsConfig() {{
                                        grpcServiceConfig = new GrpcServiceConfig() {{
                                            callCredentials = new CallCredentials() {{
                                                callCredentialType = CallCredentialsCallCredentialTypeEnum.GCE_VM;
                                                fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                    name = "Kristin Ledner V";
                                                    structConfig = "fugit";
                                                }};;
                                            }};;
                                            channelCredentials = new ChannelCredentials() {{
                                                certificates = new TlsCertificatePaths() {{
                                                    certificatePath = "itaque";
                                                    privateKeyPath = "unde";
                                                }};;
                                                channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.INVALID;
                                            }};;
                                            targetUri = "dolor";
                                        }};;
                                    }};;
                                    validationSource = TlsValidationContextValidationSourceEnum.USE_SDS;
                                }};;
                            }};;
                            mode = ClientTlsSettingsModeEnum.SIMPLE;
                            sni = "minus";
                            subjectAltNames = new String[]{{
                                add("a"),
                                add("beatae"),
                            }};
                        }};;
                        subjectAltNames = new String[]{{
                            add("veritatis"),
                        }};
                    }};;
                    selfLink = "facere";
                    selfLinkWithId = "earum";
                    serviceBindings = new String[]{{
                        add("dicta"),
                        add("voluptatem"),
                        add("odit"),
                    }};
                    serviceLbPolicy = "aliquid";
                    sessionAffinity = BackendServiceSessionAffinityEnum.HTTP_COOKIE;
                    subsetting = new Subsetting() {{
                        policy = SubsettingPolicyEnum.CONSISTENT_HASH_SUBSETTING;
                        subsetSize = 254288;
                    }};;
                    timeoutSec = 103193;
                    vpcNetworkScope = BackendServiceVpcNetworkScopeEnum.REGIONAL_VPC_NETWORK;
                }};;
                accessToken = "quaerat";
                alt = AltEnum.PROTO;
                callback = "vitae";
                fields = "omnis";
                key = "alias";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "officiis";
                requestId = "expedita";
                uploadType = "quia";
                uploadProtocol = "vitae";
                userIp = "odio";
            }};            

            ComputeBackendServicesUpdateResponse res = sdk.backendServices.computeBackendServicesUpdate(req, new ComputeBackendServicesUpdateSecurity() {{
                option1 = new ComputeBackendServicesUpdateSecurityOption1("quas", "ipsa") {{
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
