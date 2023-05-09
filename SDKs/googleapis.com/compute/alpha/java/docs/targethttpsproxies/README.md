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

            ComputeTargetHttpsProxiesAggregatedListRequest req = new ComputeTargetHttpsProxiesAggregatedListRequest("cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eum";
                alt = AltEnum.MEDIA;
                callback = "quibusdam";
                fields = "laboriosam";
                filter = "voluptates";
                includeAllScopes = false;
                key = "odit";
                maxResults = 791694L;
                oauthToken = "veritatis";
                orderBy = "dolorum";
                pageToken = "accusantium";
                prettyPrint = false;
                quotaUser = "odio";
                returnPartialSuccess = false;
                uploadType = "occaecati";
                uploadProtocol = "temporibus";
                userIp = "incidunt";
            }};            

            ComputeTargetHttpsProxiesAggregatedListResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesAggregatedList(req, new ComputeTargetHttpsProxiesAggregatedListSecurity() {{
                option1 = new ComputeTargetHttpsProxiesAggregatedListSecurityOption1("cum", "amet") {{
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

            ComputeTargetHttpsProxiesDeleteRequest req = new ComputeTargetHttpsProxiesDeleteRequest("asperiores", "itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptates";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "aliquid";
                key = "atque";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "aperiam";
                requestId = "dignissimos";
                uploadType = "occaecati";
                uploadProtocol = "non";
                userIp = "praesentium";
            }};            

            ComputeTargetHttpsProxiesDeleteResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesDelete(req, new ComputeTargetHttpsProxiesDeleteSecurity() {{
                option1 = new ComputeTargetHttpsProxiesDeleteSecurityOption1("ipsa", "inventore") {{
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

            ComputeTargetHttpsProxiesGetRequest req = new ComputeTargetHttpsProxiesGetRequest("ex", "quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "assumenda";
                alt = AltEnum.JSON;
                callback = "sequi";
                fields = "corrupti";
                key = "nobis";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "deserunt";
                uploadProtocol = "repellat";
                userIp = "atque";
            }};            

            ComputeTargetHttpsProxiesGetResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesGet(req, new ComputeTargetHttpsProxiesGetSecurity() {{
                option1 = new ComputeTargetHttpsProxiesGetSecurityOption1("cum", "voluptatem") {{
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

            ComputeTargetHttpsProxiesInsertRequest req = new ComputeTargetHttpsProxiesInsertRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                targetHttpsProxy = new TargetHttpsProxy() {{
                    authentication = "sit";
                    authorization = "sit";
                    authorizationPolicy = "veniam";
                    certificateMap = "distinctio";
                    creationTimestamp = "modi";
                    description = "porro";
                    fingerprint = "earum";
                    httpFilters = new String[]{{
                        add("autem"),
                        add("illo"),
                    }};
                    httpKeepAliveTimeoutSec = 93850;
                    id = "nulla";
                    kind = "rerum";
                    name = "Clint Nolan";
                    proxyBind = false;
                    quicOverride = TargetHttpsProxyQuicOverrideEnum.ENABLE;
                    region = "iste";
                    selfLink = "numquam";
                    selfLinkWithId = "blanditiis";
                    serverTlsPolicy = "a";
                    sslCertificates = new String[]{{
                        add("minus"),
                    }};
                    sslPolicy = "illo";
                    urlMap = "a";
                }};;
                accessToken = "eveniet";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "vitae";
                key = "aut";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "esse";
                requestId = "earum";
                uploadType = "doloribus";
                uploadProtocol = "ipsa";
                userIp = "adipisci";
            }};            

            ComputeTargetHttpsProxiesInsertResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesInsert(req, new ComputeTargetHttpsProxiesInsertSecurity() {{
                option1 = new ComputeTargetHttpsProxiesInsertSecurityOption1("ullam", "dignissimos") {{
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

            ComputeTargetHttpsProxiesListRequest req = new ComputeTargetHttpsProxiesListRequest("vero") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illo";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "asperiores";
                filter = "at";
                key = "id";
                maxResults = 941973L;
                oauthToken = "totam";
                orderBy = "assumenda";
                pageToken = "ducimus";
                prettyPrint = false;
                quotaUser = "debitis";
                returnPartialSuccess = false;
                uploadType = "blanditiis";
                uploadProtocol = "nam";
                userIp = "ipsam";
            }};            

            ComputeTargetHttpsProxiesListResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesList(req, new ComputeTargetHttpsProxiesListSecurity() {{
                option1 = new ComputeTargetHttpsProxiesListSecurityOption1("eos", "aliquam") {{
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

            ComputeTargetHttpsProxiesPatchRequest req = new ComputeTargetHttpsProxiesPatchRequest("officia", "deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                targetHttpsProxy1 = new TargetHttpsProxy() {{
                    authentication = "quas";
                    authorization = "sapiente";
                    authorizationPolicy = "autem";
                    certificateMap = "a";
                    creationTimestamp = "nesciunt";
                    description = "alias";
                    fingerprint = "rerum";
                    httpFilters = new String[]{{
                        add("et"),
                        add("magni"),
                        add("repellendus"),
                    }};
                    httpKeepAliveTimeoutSec = 273064;
                    id = "optio";
                    kind = "consectetur";
                    name = "Elbert Zulauf";
                    proxyBind = false;
                    quicOverride = TargetHttpsProxyQuicOverrideEnum.DISABLE;
                    region = "fugiat";
                    selfLink = "unde";
                    selfLinkWithId = "voluptatem";
                    serverTlsPolicy = "libero";
                    sslCertificates = new String[]{{
                        add("assumenda"),
                    }};
                    sslPolicy = "voluptates";
                    urlMap = "asperiores";
                }};;
                accessToken = "optio";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "et";
                key = "possimus";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "totam";
                requestId = "in";
                uploadType = "corrupti";
                uploadProtocol = "ipsa";
                userIp = "cum";
            }};            

            ComputeTargetHttpsProxiesPatchResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesPatch(req, new ComputeTargetHttpsProxiesPatchSecurity() {{
                option1 = new ComputeTargetHttpsProxiesPatchSecurityOption1("enim", "facilis") {{
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

            ComputeTargetHttpsProxiesSetCertificateMapRequest req = new ComputeTargetHttpsProxiesSetCertificateMapRequest("molestiae", "quod") {{
                dollarXgafv = XgafvEnum.ONE;
                targetHttpsProxiesSetCertificateMapRequest = new TargetHttpsProxiesSetCertificateMapRequest() {{
                    certificateMap = "mollitia";
                }};;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "incidunt";
                key = "cumque";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "nostrum";
                requestId = "unde";
                uploadType = "deleniti";
                uploadProtocol = "voluptas";
                userIp = "rem";
            }};            

            ComputeTargetHttpsProxiesSetCertificateMapResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesSetCertificateMap(req, new ComputeTargetHttpsProxiesSetCertificateMapSecurity() {{
                option1 = new ComputeTargetHttpsProxiesSetCertificateMapSecurityOption1("natus", "nam") {{
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

            ComputeTargetHttpsProxiesSetQuicOverrideRequest req = new ComputeTargetHttpsProxiesSetQuicOverrideRequest("temporibus", "repellendus") {{
                dollarXgafv = XgafvEnum.ONE;
                targetHttpsProxiesSetQuicOverrideRequest = new TargetHttpsProxiesSetQuicOverrideRequest() {{
                    quicOverride = TargetHttpsProxiesSetQuicOverrideRequestQuicOverrideEnum.DISABLE;
                }};;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "iusto";
                fields = "consequuntur";
                key = "tenetur";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "quis";
                requestId = "nesciunt";
                uploadType = "asperiores";
                uploadProtocol = "quisquam";
                userIp = "ut";
            }};            

            ComputeTargetHttpsProxiesSetQuicOverrideResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesSetQuicOverride(req, new ComputeTargetHttpsProxiesSetQuicOverrideSecurity() {{
                option1 = new ComputeTargetHttpsProxiesSetQuicOverrideSecurityOption1("voluptatibus", "magni") {{
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

            ComputeTargetHttpsProxiesSetSslCertificatesRequest req = new ComputeTargetHttpsProxiesSetSslCertificatesRequest("ex", "quam") {{
                dollarXgafv = XgafvEnum.ONE;
                targetHttpsProxiesSetSslCertificatesRequest = new TargetHttpsProxiesSetSslCertificatesRequest() {{
                    sslCertificates = new String[]{{
                        add("quam"),
                        add("occaecati"),
                    }};
                }};;
                accessToken = "soluta";
                alt = AltEnum.JSON;
                callback = "sit";
                fields = "non";
                key = "dolorum";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "quam";
                requestId = "ex";
                uploadType = "accusantium";
                uploadProtocol = "maiores";
                userIp = "ullam";
            }};            

            ComputeTargetHttpsProxiesSetSslCertificatesResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesSetSslCertificates(req, new ComputeTargetHttpsProxiesSetSslCertificatesSecurity() {{
                option1 = new ComputeTargetHttpsProxiesSetSslCertificatesSecurityOption1("totam", "non") {{
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

            ComputeTargetHttpsProxiesSetSslPolicyRequest req = new ComputeTargetHttpsProxiesSetSslPolicyRequest("dicta", "voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                sslPolicyReference = new SslPolicyReference() {{
                    sslPolicy = "corrupti";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "magnam";
                fields = "quod";
                key = "dolorem";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "tempore";
                requestId = "perspiciatis";
                uploadType = "velit";
                uploadProtocol = "earum";
                userIp = "exercitationem";
            }};            

            ComputeTargetHttpsProxiesSetSslPolicyResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesSetSslPolicy(req, new ComputeTargetHttpsProxiesSetSslPolicySecurity() {{
                option1 = new ComputeTargetHttpsProxiesSetSslPolicySecurityOption1("dolores", "itaque") {{
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

            ComputeTargetHttpsProxiesSetUrlMapRequest req = new ComputeTargetHttpsProxiesSetUrlMapRequest("cupiditate", "veritatis") {{
                dollarXgafv = XgafvEnum.ONE;
                urlMapReference = new UrlMapReference() {{
                    urlMap = "tempore";
                }};;
                accessToken = "autem";
                alt = AltEnum.MEDIA;
                callback = "labore";
                fields = "veritatis";
                key = "officiis";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "saepe";
                requestId = "sapiente";
                uploadType = "veniam";
                uploadProtocol = "dignissimos";
                userIp = "assumenda";
            }};            

            ComputeTargetHttpsProxiesSetUrlMapResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesSetUrlMap(req, new ComputeTargetHttpsProxiesSetUrlMapSecurity() {{
                option1 = new ComputeTargetHttpsProxiesSetUrlMapSecurityOption1("veritatis", "deleniti") {{
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

            ComputeTargetHttpsProxiesTestIamPermissionsRequest req = new ComputeTargetHttpsProxiesTestIamPermissionsRequest("ipsa", "officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("consequatur"),
                        add("sit"),
                    }};
                }};;
                accessToken = "non";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "mollitia";
                key = "aspernatur";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "facere";
                uploadProtocol = "vitae";
                userIp = "culpa";
            }};            

            ComputeTargetHttpsProxiesTestIamPermissionsResponse res = sdk.targetHttpsProxies.computeTargetHttpsProxiesTestIamPermissions(req, new ComputeTargetHttpsProxiesTestIamPermissionsSecurity() {{
                option1 = new ComputeTargetHttpsProxiesTestIamPermissionsSecurityOption1("incidunt", "nisi") {{
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
