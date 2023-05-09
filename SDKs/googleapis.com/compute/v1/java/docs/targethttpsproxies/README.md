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

            ComputeTargetHttpsProxiesAggregatedListRequest req = new ComputeTargetHttpsProxiesAggregatedListRequest("animi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quis";
                alt = AltEnum.PROTO;
                callback = "aperiam";
                fields = "beatae";
                filter = "quis";
                includeAllScopes = false;
                key = "consequuntur";
                maxResults = 820540L;
                oauthToken = "vitae";
                orderBy = "in";
                pageToken = "porro";
                prettyPrint = false;
                quotaUser = "impedit";
                returnPartialSuccess = false;
                uploadType = "error";
                uploadProtocol = "corrupti";
                userIp = "tempore";
            }};            

            ComputeTargetHttpsProxiesAggregatedListResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesAggregatedList(req, new ComputeTargetHttpsProxiesAggregatedListSecurity() {{
                option1 = new ComputeTargetHttpsProxiesAggregatedListSecurityOption1("ut", "reiciendis") {{
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

            ComputeTargetHttpsProxiesDeleteRequest req = new ComputeTargetHttpsProxiesDeleteRequest("quibusdam", "impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "eveniet";
                fields = "nesciunt";
                key = "beatae";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                requestId = "suscipit";
                uploadType = "deserunt";
                uploadProtocol = "aperiam";
                userIp = "quis";
            }};            

            ComputeTargetHttpsProxiesDeleteResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesDelete(req, new ComputeTargetHttpsProxiesDeleteSecurity() {{
                option1 = new ComputeTargetHttpsProxiesDeleteSecurityOption1("quis", "rem") {{
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

            ComputeTargetHttpsProxiesGetRequest req = new ComputeTargetHttpsProxiesGetRequest("facilis", "tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "officia";
                fields = "quo";
                key = "consectetur";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "libero";
                uploadProtocol = "maiores";
                userIp = "laborum";
            }};            

            ComputeTargetHttpsProxiesGetResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesGet(req, new ComputeTargetHttpsProxiesGetSecurity() {{
                option1 = new ComputeTargetHttpsProxiesGetSecurityOption1("culpa", "deleniti") {{
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

            ComputeTargetHttpsProxiesInsertRequest req = new ComputeTargetHttpsProxiesInsertRequest("cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                targetHttpsProxy = new TargetHttpsProxy() {{
                    authorizationPolicy = "nemo";
                    certificateMap = "itaque";
                    creationTimestamp = "at";
                    description = "labore";
                    fingerprint = "blanditiis";
                    id = "aliquid";
                    kind = "animi";
                    name = "Gayle Cassin";
                    proxyBind = false;
                    quicOverride = TargetHttpsProxyQuicOverrideEnum.ENABLE;
                    region = "sapiente";
                    selfLink = "delectus";
                    serverTlsPolicy = "exercitationem";
                    sslCertificates = new String[]{{
                        add("autem"),
                        add("accusamus"),
                        add("maxime"),
                        add("veniam"),
                    }};
                    sslPolicy = "quaerat";
                    urlMap = "molestiae";
                }};;
                accessToken = "in";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "aperiam";
                key = "nostrum";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "dignissimos";
                requestId = "molestias";
                uploadType = "voluptatibus";
                uploadProtocol = "possimus";
                userIp = "quis";
            }};            

            ComputeTargetHttpsProxiesInsertResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesInsert(req, new ComputeTargetHttpsProxiesInsertSecurity() {{
                option1 = new ComputeTargetHttpsProxiesInsertSecurityOption1("eligendi", "omnis") {{
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

            ComputeTargetHttpsProxiesListRequest req = new ComputeTargetHttpsProxiesListRequest("itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "at";
                fields = "enim";
                filter = "error";
                key = "voluptatum";
                maxResults = 33974L;
                oauthToken = "pariatur";
                orderBy = "commodi";
                pageToken = "non";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                returnPartialSuccess = false;
                uploadType = "rerum";
                uploadProtocol = "ea";
                userIp = "quidem";
            }};            

            ComputeTargetHttpsProxiesListResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesList(req, new ComputeTargetHttpsProxiesListSecurity() {{
                option1 = new ComputeTargetHttpsProxiesListSecurityOption1("tenetur", "cum") {{
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

            ComputeTargetHttpsProxiesPatchRequest req = new ComputeTargetHttpsProxiesPatchRequest("quidem", "nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                targetHttpsProxy1 = new TargetHttpsProxy() {{
                    authorizationPolicy = "facere";
                    certificateMap = "beatae";
                    creationTimestamp = "adipisci";
                    description = "libero";
                    fingerprint = "quos";
                    id = "numquam";
                    kind = "excepturi";
                    name = "Kathy Zulauf";
                    proxyBind = false;
                    quicOverride = TargetHttpsProxyQuicOverrideEnum.DISABLE;
                    region = "occaecati";
                    selfLink = "rerum";
                    serverTlsPolicy = "voluptatum";
                    sslCertificates = new String[]{{
                        add("harum"),
                        add("repellendus"),
                        add("maiores"),
                    }};
                    sslPolicy = "magnam";
                    urlMap = "nobis";
                }};;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "quos";
                key = "non";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "blanditiis";
                requestId = "repudiandae";
                uploadType = "vel";
                uploadProtocol = "cum";
                userIp = "perferendis";
            }};            

            ComputeTargetHttpsProxiesPatchResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesPatch(req, new ComputeTargetHttpsProxiesPatchSecurity() {{
                option1 = new ComputeTargetHttpsProxiesPatchSecurityOption1("rerum", "voluptatibus") {{
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

            ComputeTargetHttpsProxiesSetCertificateMapRequest req = new ComputeTargetHttpsProxiesSetCertificateMapRequest("perferendis", "saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                targetHttpsProxiesSetCertificateMapRequest = new TargetHttpsProxiesSetCertificateMapRequest() {{
                    certificateMap = "minima";
                }};;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "eveniet";
                fields = "vero";
                key = "nulla";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "hic";
                requestId = "quam";
                uploadType = "dolore";
                uploadProtocol = "saepe";
                userIp = "ut";
            }};            

            ComputeTargetHttpsProxiesSetCertificateMapResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesSetCertificateMap(req, new ComputeTargetHttpsProxiesSetCertificateMapSecurity() {{
                option1 = new ComputeTargetHttpsProxiesSetCertificateMapSecurityOption1("quis", "quasi") {{
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

            ComputeTargetHttpsProxiesSetQuicOverrideRequest req = new ComputeTargetHttpsProxiesSetQuicOverrideRequest("aspernatur", "quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                targetHttpsProxiesSetQuicOverrideRequest = new TargetHttpsProxiesSetQuicOverrideRequest() {{
                    quicOverride = TargetHttpsProxiesSetQuicOverrideRequestQuicOverrideEnum.NONE;
                }};;
                accessToken = "delectus";
                alt = AltEnum.PROTO;
                callback = "perspiciatis";
                fields = "aliquam";
                key = "repudiandae";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "est";
                requestId = "nulla";
                uploadType = "quibusdam";
                uploadProtocol = "voluptates";
                userIp = "beatae";
            }};            

            ComputeTargetHttpsProxiesSetQuicOverrideResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesSetQuicOverride(req, new ComputeTargetHttpsProxiesSetQuicOverrideSecurity() {{
                option1 = new ComputeTargetHttpsProxiesSetQuicOverrideSecurityOption1("odio", "facilis") {{
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

            ComputeTargetHttpsProxiesSetSslCertificatesRequest req = new ComputeTargetHttpsProxiesSetSslCertificatesRequest("neque", "ea") {{
                dollarXgafv = XgafvEnum.TWO;
                targetHttpsProxiesSetSslCertificatesRequest = new TargetHttpsProxiesSetSslCertificatesRequest() {{
                    sslCertificates = new String[]{{
                        add("necessitatibus"),
                        add("corporis"),
                    }};
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.PROTO;
                callback = "nisi";
                fields = "illum";
                key = "quaerat";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "esse";
                requestId = "magni";
                uploadType = "cupiditate";
                uploadProtocol = "incidunt";
                userIp = "aut";
            }};            

            ComputeTargetHttpsProxiesSetSslCertificatesResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesSetSslCertificates(req, new ComputeTargetHttpsProxiesSetSslCertificatesSecurity() {{
                option1 = new ComputeTargetHttpsProxiesSetSslCertificatesSecurityOption1("ipsam", "magni") {{
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

            ComputeTargetHttpsProxiesSetSslPolicyRequest req = new ComputeTargetHttpsProxiesSetSslPolicyRequest("mollitia", "quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                sslPolicyReference = new SslPolicyReference() {{
                    sslPolicy = "voluptatum";
                }};;
                accessToken = "dolores";
                alt = AltEnum.PROTO;
                callback = "nisi";
                fields = "consectetur";
                key = "corrupti";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "dolorem";
                requestId = "occaecati";
                uploadType = "omnis";
                uploadProtocol = "nesciunt";
                userIp = "ipsum";
            }};            

            ComputeTargetHttpsProxiesSetSslPolicyResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesSetSslPolicy(req, new ComputeTargetHttpsProxiesSetSslPolicySecurity() {{
                option1 = new ComputeTargetHttpsProxiesSetSslPolicySecurityOption1("in", "commodi") {{
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

            ComputeTargetHttpsProxiesSetUrlMapRequest req = new ComputeTargetHttpsProxiesSetUrlMapRequest("accusamus", "fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                urlMapReference = new UrlMapReference() {{
                    urlMap = "accusamus";
                }};;
                accessToken = "facere";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                fields = "voluptatum";
                key = "quae";
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "tenetur";
                requestId = "debitis";
                uploadType = "nisi";
                uploadProtocol = "aliquam";
                userIp = "quasi";
            }};            

            ComputeTargetHttpsProxiesSetUrlMapResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesSetUrlMap(req, new ComputeTargetHttpsProxiesSetUrlMapSecurity() {{
                option1 = new ComputeTargetHttpsProxiesSetUrlMapSecurityOption1("optio", "voluptates") {{
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
