# targetHttpsProxies

### Available Operations

* [computeTargetHttpsProxiesAggregatedList](#computetargethttpsproxiesaggregatedlist) - Retrieves the list of all TargetHttpsProxy resources, regional and global, available to the specified project.
* [computeTargetHttpsProxiesDelete](#computetargethttpsproxiesdelete) - Deletes the specified TargetHttpsProxy resource.
* [computeTargetHttpsProxiesGet](#computetargethttpsproxiesget) - Returns the specified TargetHttpsProxy resource.
* [computeTargetHttpsProxiesInsert](#computetargethttpsproxiesinsert) - Creates a TargetHttpsProxy resource in the specified project using the data included in the request.
* [computeTargetHttpsProxiesList](#computetargethttpsproxieslist) - Retrieves the list of TargetHttpsProxy resources available to the specified project.
* [computeTargetHttpsProxiesPatch](#computetargethttpsproxiespatch) - Patches the specified TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computeTargetHttpsProxiesSetCertificateMap](#computetargethttpsproxiessetcertificatemap) - Changes the Certificate Map for TargetHttpsProxy.
* [computeTargetHttpsProxiesSetQuicOverride](#computetargethttpsproxiessetquicoverride) - Sets the QUIC override policy for TargetHttpsProxy.
* [computeTargetHttpsProxiesSetSslCertificates](#computetargethttpsproxiessetsslcertificates) - Replaces SslCertificates for TargetHttpsProxy.
* [computeTargetHttpsProxiesSetSslPolicy](#computetargethttpsproxiessetsslpolicy) - Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the HTTPS proxy load balancer. They do not affect the connection between the load balancer and the backends.
* [computeTargetHttpsProxiesSetUrlMap](#computetargethttpsproxiesseturlmap) - Changes the URL map for TargetHttpsProxy.
* [computeTargetHttpsProxiesTestIamPermissions](#computetargethttpsproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeTargetHttpsProxiesAggregatedList

Retrieves the list of all TargetHttpsProxy resources, regional and global, available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpsProxiesAggregatedListRequest req = new ComputeTargetHttpsProxiesAggregatedListRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "assumenda";
                fields = "quaerat";
                filter = "numquam";
                includeAllScopes = false;
                key = "minima";
                maxResults = 715098L;
                oauthToken = "nesciunt";
                orderBy = "error";
                pageToken = "sunt";
                prettyPrint = false;
                quotaUser = "aspernatur";
                returnPartialSuccess = false;
                uploadType = "non";
                uploadProtocol = "iste";
                userIp = "pariatur";
            }};            

            ComputeTargetHttpsProxiesAggregatedListResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesAggregatedList(req, new ComputeTargetHttpsProxiesAggregatedListSecurity() {{
                option1 = new ComputeTargetHttpsProxiesAggregatedListSecurityOption1("distinctio", "minus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetHttpsProxyAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetHttpsProxiesDelete

Deletes the specified TargetHttpsProxy resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpsProxiesDeleteRequest req = new ComputeTargetHttpsProxiesDeleteRequest("voluptatum", "ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ex";
                alt = AltEnum.JSON;
                callback = "nemo";
                fields = "corporis";
                key = "fuga";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "quos";
                requestId = "numquam";
                uploadType = "est";
                uploadProtocol = "esse";
                userIp = "rerum";
            }};            

            ComputeTargetHttpsProxiesDeleteResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesDelete(req, new ComputeTargetHttpsProxiesDeleteSecurity() {{
                option1 = new ComputeTargetHttpsProxiesDeleteSecurityOption1("reiciendis", "voluptatum") {{
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

## computeTargetHttpsProxiesGet

Returns the specified TargetHttpsProxy resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesGetRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesGetResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesGetSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpsProxiesGetRequest req = new ComputeTargetHttpsProxiesGetRequest("occaecati", "veniam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.PROTO;
                callback = "et";
                fields = "repellat";
                key = "quam";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "sunt";
                uploadProtocol = "quis";
                userIp = "quos";
            }};            

            ComputeTargetHttpsProxiesGetResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesGet(req, new ComputeTargetHttpsProxiesGetSecurity() {{
                option1 = new ComputeTargetHttpsProxiesGetSecurityOption1("quidem", "eaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetHttpsProxy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetHttpsProxiesInsert

Creates a TargetHttpsProxy resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesInsertRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesInsertResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetHttpsProxy;
import org.openapis.openapi.models.shared.TargetHttpsProxyQuicOverrideEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpsProxiesInsertRequest req = new ComputeTargetHttpsProxiesInsertRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                targetHttpsProxy = new TargetHttpsProxy() {{
                    authentication = "qui";
                    authorization = "quae";
                    authorizationPolicy = "itaque";
                    certificateMap = "nemo";
                    creationTimestamp = "voluptatibus";
                    description = "consequatur";
                    fingerprint = "culpa";
                    httpFilters = new String[]{{
                        add("officiis"),
                    }};
                    id = "eos";
                    kind = "quam";
                    name = "Kent Hermann";
                    proxyBind = false;
                    quicOverride = TargetHttpsProxyQuicOverrideEnum.DISABLE;
                    region = "commodi";
                    selfLink = "doloribus";
                    serverTlsPolicy = "modi";
                    sslCertificates = new String[]{{
                        add("quia"),
                    }};
                    sslPolicy = "esse";
                    urlMap = "eligendi";
                }};;
                accessToken = "non";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "eos";
                key = "est";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "perferendis";
                requestId = "modi";
                uploadType = "quidem";
                uploadProtocol = "omnis";
                userIp = "minus";
            }};            

            ComputeTargetHttpsProxiesInsertResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesInsert(req, new ComputeTargetHttpsProxiesInsertSecurity() {{
                option1 = new ComputeTargetHttpsProxiesInsertSecurityOption1("magnam", "quaerat") {{
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

## computeTargetHttpsProxiesList

Retrieves the list of TargetHttpsProxy resources available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesListRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesListResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesListSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpsProxiesListRequest req = new ComputeTargetHttpsProxiesListRequest("sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "fugiat";
                fields = "autem";
                filter = "recusandae";
                key = "explicabo";
                maxResults = 402982L;
                oauthToken = "ullam";
                orderBy = "nisi";
                pageToken = "quas";
                prettyPrint = false;
                quotaUser = "facere";
                returnPartialSuccess = false;
                uploadType = "odio";
                uploadProtocol = "impedit";
                userIp = "labore";
            }};            

            ComputeTargetHttpsProxiesListResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesList(req, new ComputeTargetHttpsProxiesListSecurity() {{
                option1 = new ComputeTargetHttpsProxiesListSecurityOption1("at", "ducimus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetHttpsProxyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetHttpsProxiesPatch

Patches the specified TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesPatchRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesPatchResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetHttpsProxy;
import org.openapis.openapi.models.shared.TargetHttpsProxyQuicOverrideEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpsProxiesPatchRequest req = new ComputeTargetHttpsProxiesPatchRequest("odit", "hic") {{
                dollarXgafv = XgafvEnum.TWO;
                targetHttpsProxy1 = new TargetHttpsProxy() {{
                    authentication = "sed";
                    authorization = "suscipit";
                    authorizationPolicy = "libero";
                    certificateMap = "laudantium";
                    creationTimestamp = "voluptate";
                    description = "doloremque";
                    fingerprint = "in";
                    httpFilters = new String[]{{
                        add("ad"),
                        add("est"),
                        add("debitis"),
                    }};
                    id = "aperiam";
                    kind = "tempore";
                    name = "Arthur Herzog";
                    proxyBind = false;
                    quicOverride = TargetHttpsProxyQuicOverrideEnum.DISABLE;
                    region = "aut";
                    selfLink = "ad";
                    serverTlsPolicy = "amet";
                    sslCertificates = new String[]{{
                        add("harum"),
                        add("sapiente"),
                    }};
                    sslPolicy = "dolor";
                    urlMap = "dolorem";
                }};;
                accessToken = "eum";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "autem";
                key = "recusandae";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "sequi";
                requestId = "quos";
                uploadType = "accusamus";
                uploadProtocol = "incidunt";
                userIp = "quo";
            }};            

            ComputeTargetHttpsProxiesPatchResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesPatch(req, new ComputeTargetHttpsProxiesPatchSecurity() {{
                option1 = new ComputeTargetHttpsProxiesPatchSecurityOption1("cum", "error") {{
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

## computeTargetHttpsProxiesSetCertificateMap

Changes the Certificate Map for TargetHttpsProxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetCertificateMapRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetCertificateMapResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetCertificateMapSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetCertificateMapSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetCertificateMapSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetHttpsProxiesSetCertificateMapRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpsProxiesSetCertificateMapRequest req = new ComputeTargetHttpsProxiesSetCertificateMapRequest("neque", "repellendus") {{
                dollarXgafv = XgafvEnum.ONE;
                targetHttpsProxiesSetCertificateMapRequest = new TargetHttpsProxiesSetCertificateMapRequest() {{
                    certificateMap = "est";
                }};;
                accessToken = "deserunt";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                fields = "dolorum";
                key = "dolores";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "numquam";
                requestId = "autem";
                uploadType = "ut";
                uploadProtocol = "quibusdam";
                userIp = "optio";
            }};            

            ComputeTargetHttpsProxiesSetCertificateMapResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesSetCertificateMap(req, new ComputeTargetHttpsProxiesSetCertificateMapSecurity() {{
                option1 = new ComputeTargetHttpsProxiesSetCertificateMapSecurityOption1("veniam", "porro") {{
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

## computeTargetHttpsProxiesSetQuicOverride

Sets the QUIC override policy for TargetHttpsProxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetQuicOverrideRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetQuicOverrideResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetQuicOverrideSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetQuicOverrideSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetQuicOverrideSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetHttpsProxiesSetQuicOverrideRequest;
import org.openapis.openapi.models.shared.TargetHttpsProxiesSetQuicOverrideRequestQuicOverrideEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpsProxiesSetQuicOverrideRequest req = new ComputeTargetHttpsProxiesSetQuicOverrideRequest("necessitatibus", "beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                targetHttpsProxiesSetQuicOverrideRequest = new TargetHttpsProxiesSetQuicOverrideRequest() {{
                    quicOverride = TargetHttpsProxiesSetQuicOverrideRequestQuicOverrideEnum.NONE;
                }};;
                accessToken = "eum";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "veniam";
                key = "nisi";
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "itaque";
                requestId = "voluptatum";
                uploadType = "nemo";
                uploadProtocol = "quod";
                userIp = "consequatur";
            }};            

            ComputeTargetHttpsProxiesSetQuicOverrideResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesSetQuicOverride(req, new ComputeTargetHttpsProxiesSetQuicOverrideSecurity() {{
                option1 = new ComputeTargetHttpsProxiesSetQuicOverrideSecurityOption1("officia", "quidem") {{
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

## computeTargetHttpsProxiesSetSslCertificates

Replaces SslCertificates for TargetHttpsProxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetSslCertificatesRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetSslCertificatesResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetSslCertificatesSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetSslCertificatesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetSslCertificatesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetHttpsProxiesSetSslCertificatesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpsProxiesSetSslCertificatesRequest req = new ComputeTargetHttpsProxiesSetSslCertificatesRequest("commodi", "dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                targetHttpsProxiesSetSslCertificatesRequest = new TargetHttpsProxiesSetSslCertificatesRequest() {{
                    sslCertificates = new String[]{{
                        add("fugiat"),
                        add("exercitationem"),
                        add("fugit"),
                    }};
                }};;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                fields = "velit";
                key = "saepe";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "odit";
                requestId = "quia";
                uploadType = "officia";
                uploadProtocol = "similique";
                userIp = "pariatur";
            }};            

            ComputeTargetHttpsProxiesSetSslCertificatesResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesSetSslCertificates(req, new ComputeTargetHttpsProxiesSetSslCertificatesSecurity() {{
                option1 = new ComputeTargetHttpsProxiesSetSslCertificatesSecurityOption1("sapiente", "excepturi") {{
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

## computeTargetHttpsProxiesSetSslPolicy

Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the HTTPS proxy load balancer. They do not affect the connection between the load balancer and the backends.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetSslPolicyRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetSslPolicyResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetSslPolicySecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetSslPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetSslPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SslPolicyReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpsProxiesSetSslPolicyRequest req = new ComputeTargetHttpsProxiesSetSslPolicyRequest("eius", "aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                sslPolicyReference = new SslPolicyReference() {{
                    sslPolicy = "dolores";
                }};;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "asperiores";
                key = "eveniet";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "doloribus";
                requestId = "amet";
                uploadType = "exercitationem";
                uploadProtocol = "minima";
                userIp = "cumque";
            }};            

            ComputeTargetHttpsProxiesSetSslPolicyResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesSetSslPolicy(req, new ComputeTargetHttpsProxiesSetSslPolicySecurity() {{
                option1 = new ComputeTargetHttpsProxiesSetSslPolicySecurityOption1("beatae", "quae") {{
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

## computeTargetHttpsProxiesSetUrlMap

Changes the URL map for TargetHttpsProxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetUrlMapRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetUrlMapResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetUrlMapSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetUrlMapSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesSetUrlMapSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UrlMapReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpsProxiesSetUrlMapRequest req = new ComputeTargetHttpsProxiesSetUrlMapRequest("quo", "atque") {{
                dollarXgafv = XgafvEnum.ONE;
                urlMapReference = new UrlMapReference() {{
                    urlMap = "consequatur";
                }};;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "voluptatibus";
                key = "iste";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "inventore";
                requestId = "ipsum";
                uploadType = "rem";
                uploadProtocol = "dolorum";
                userIp = "sed";
            }};            

            ComputeTargetHttpsProxiesSetUrlMapResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesSetUrlMap(req, new ComputeTargetHttpsProxiesSetUrlMapSecurity() {{
                option1 = new ComputeTargetHttpsProxiesSetUrlMapSecurityOption1("ea", "consectetur") {{
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

## computeTargetHttpsProxiesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetHttpsProxiesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetHttpsProxiesTestIamPermissionsRequest req = new ComputeTargetHttpsProxiesTestIamPermissionsRequest("exercitationem", "aut") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("ipsa"),
                        add("hic"),
                        add("iusto"),
                    }};
                }};;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "quisquam";
                fields = "dolores";
                key = "commodi";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "odio";
                uploadProtocol = "veniam";
                userIp = "sint";
            }};            

            ComputeTargetHttpsProxiesTestIamPermissionsResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesTestIamPermissions(req, new ComputeTargetHttpsProxiesTestIamPermissionsSecurity() {{
                option1 = new ComputeTargetHttpsProxiesTestIamPermissionsSecurityOption1("corporis", "provident") {{
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
