# targetSslProxies

### Available Operations

* [computeTargetSslProxiesDelete](#computetargetsslproxiesdelete) - Deletes the specified TargetSslProxy resource.
* [computeTargetSslProxiesGet](#computetargetsslproxiesget) - Returns the specified TargetSslProxy resource.
* [computeTargetSslProxiesInsert](#computetargetsslproxiesinsert) - Creates a TargetSslProxy resource in the specified project using the data included in the request.
* [computeTargetSslProxiesList](#computetargetsslproxieslist) - Retrieves the list of TargetSslProxy resources available to the specified project.
* [computeTargetSslProxiesSetBackendService](#computetargetsslproxiessetbackendservice) - Changes the BackendService for TargetSslProxy.
* [computeTargetSslProxiesSetCertificateMap](#computetargetsslproxiessetcertificatemap) - Changes the Certificate Map for TargetSslProxy.
* [computeTargetSslProxiesSetProxyHeader](#computetargetsslproxiessetproxyheader) - Changes the ProxyHeaderType for TargetSslProxy.
* [computeTargetSslProxiesSetSslCertificates](#computetargetsslproxiessetsslcertificates) - Changes SslCertificates for TargetSslProxy.
* [computeTargetSslProxiesSetSslPolicy](#computetargetsslproxiessetsslpolicy) - Sets the SSL policy for TargetSslProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the SSL proxy load balancer. They do not affect the connection between the load balancer and the backends.

## computeTargetSslProxiesDelete

Deletes the specified TargetSslProxy resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetSslProxiesDeleteRequest req = new ComputeTargetSslProxiesDeleteRequest("voluptates", "eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "eveniet";
                fields = "magni";
                key = "eaque";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "culpa";
                requestId = "deleniti";
                uploadType = "vitae";
                uploadProtocol = "quos";
                userIp = "consectetur";
            }};            

            ComputeTargetSslProxiesDeleteResponse res = sdk.targetSslProxies.computeTargetSslProxiesDelete(req, new ComputeTargetSslProxiesDeleteSecurity() {{
                option1 = new ComputeTargetSslProxiesDeleteSecurityOption1("doloribus", "optio") {{
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

## computeTargetSslProxiesGet

Returns the specified TargetSslProxy resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesGetRequest;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesGetResponse;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesGetSecurity;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetSslProxiesGetRequest req = new ComputeTargetSslProxiesGetRequest("ipsa", "nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                fields = "repellendus";
                key = "tempora";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "sed";
                uploadProtocol = "quod";
                userIp = "quasi";
            }};            

            ComputeTargetSslProxiesGetResponse res = sdk.targetSslProxies.computeTargetSslProxiesGet(req, new ComputeTargetSslProxiesGetSecurity() {{
                option1 = new ComputeTargetSslProxiesGetSecurityOption1("voluptates", "eveniet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetSslProxy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetSslProxiesInsert

Creates a TargetSslProxy resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesInsertRequest;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesInsertResponse;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetSslProxy;
import org.openapis.openapi.models.shared.TargetSslProxyProxyHeaderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetSslProxiesInsertRequest req = new ComputeTargetSslProxiesInsertRequest("velit") {{
                dollarXgafv = XgafvEnum.TWO;
                targetSslProxy = new TargetSslProxy() {{
                    certificateMap = "aliquid";
                    creationTimestamp = "modi";
                    description = "dolore";
                    id = "assumenda";
                    kind = "delectus";
                    name = "Jenny Quitzon";
                    proxyHeader = TargetSslProxyProxyHeaderEnum.PROXY_V1;
                    selfLink = "ipsa";
                    service = "voluptas";
                    sslCertificates = new String[]{{
                        add("porro"),
                        add("at"),
                        add("quo"),
                        add("perferendis"),
                    }};
                    sslPolicy = "provident";
                }};;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "ab";
                fields = "nesciunt";
                key = "aut";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "harum";
                requestId = "earum";
                uploadType = "dolorem";
                uploadProtocol = "amet";
                userIp = "explicabo";
            }};            

            ComputeTargetSslProxiesInsertResponse res = sdk.targetSslProxies.computeTargetSslProxiesInsert(req, new ComputeTargetSslProxiesInsertSecurity() {{
                option1 = new ComputeTargetSslProxiesInsertSecurityOption1("facere", "eligendi") {{
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

## computeTargetSslProxiesList

Retrieves the list of TargetSslProxy resources available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesListRequest;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesListResponse;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesListSecurity;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetSslProxiesListRequest req = new ComputeTargetSslProxiesListRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.PROTO;
                callback = "odio";
                fields = "nostrum";
                filter = "dolore";
                key = "numquam";
                maxResults = 39069L;
                oauthToken = "odit";
                orderBy = "enim";
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "cupiditate";
                returnPartialSuccess = false;
                uploadType = "pariatur";
                uploadProtocol = "omnis";
                userIp = "praesentium";
            }};            

            ComputeTargetSslProxiesListResponse res = sdk.targetSslProxies.computeTargetSslProxiesList(req, new ComputeTargetSslProxiesListSecurity() {{
                option1 = new ComputeTargetSslProxiesListSecurityOption1("molestiae", "laboriosam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetSslProxyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetSslProxiesSetBackendService

Changes the BackendService for TargetSslProxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetBackendServiceRequest;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetBackendServiceResponse;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetBackendServiceSecurity;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetBackendServiceSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetBackendServiceSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetSslProxiesSetBackendServiceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetSslProxiesSetBackendServiceRequest req = new ComputeTargetSslProxiesSetBackendServiceRequest("voluptatibus", "nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                targetSslProxiesSetBackendServiceRequest = new TargetSslProxiesSetBackendServiceRequest() {{
                    service = "libero";
                }};;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "temporibus";
                key = "repudiandae";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "sequi";
                requestId = "magnam";
                uploadType = "unde";
                uploadProtocol = "neque";
                userIp = "porro";
            }};            

            ComputeTargetSslProxiesSetBackendServiceResponse res = sdk.targetSslProxies.computeTargetSslProxiesSetBackendService(req, new ComputeTargetSslProxiesSetBackendServiceSecurity() {{
                option1 = new ComputeTargetSslProxiesSetBackendServiceSecurityOption1("quasi", "voluptas") {{
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

## computeTargetSslProxiesSetCertificateMap

Changes the Certificate Map for TargetSslProxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetCertificateMapRequest;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetCertificateMapResponse;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetCertificateMapSecurity;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetCertificateMapSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetCertificateMapSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetSslProxiesSetCertificateMapRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetSslProxiesSetCertificateMapRequest req = new ComputeTargetSslProxiesSetCertificateMapRequest("blanditiis", "exercitationem") {{
                dollarXgafv = XgafvEnum.ONE;
                targetSslProxiesSetCertificateMapRequest = new TargetSslProxiesSetCertificateMapRequest() {{
                    certificateMap = "iure";
                }};;
                accessToken = "officia";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                fields = "veritatis";
                key = "et";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "exercitationem";
                requestId = "repellendus";
                uploadType = "omnis";
                uploadProtocol = "repellat";
                userIp = "minima";
            }};            

            ComputeTargetSslProxiesSetCertificateMapResponse res = sdk.targetSslProxies.computeTargetSslProxiesSetCertificateMap(req, new ComputeTargetSslProxiesSetCertificateMapSecurity() {{
                option1 = new ComputeTargetSslProxiesSetCertificateMapSecurityOption1("officia", "vitae") {{
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

## computeTargetSslProxiesSetProxyHeader

Changes the ProxyHeaderType for TargetSslProxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetProxyHeaderRequest;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetProxyHeaderResponse;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetProxyHeaderSecurity;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetProxyHeaderSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetProxyHeaderSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetSslProxiesSetProxyHeaderRequest;
import org.openapis.openapi.models.shared.TargetSslProxiesSetProxyHeaderRequestProxyHeaderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetSslProxiesSetProxyHeaderRequest req = new ComputeTargetSslProxiesSetProxyHeaderRequest("odit", "aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                targetSslProxiesSetProxyHeaderRequest = new TargetSslProxiesSetProxyHeaderRequest() {{
                    proxyHeader = TargetSslProxiesSetProxyHeaderRequestProxyHeaderEnum.NONE;
                }};;
                accessToken = "cumque";
                alt = AltEnum.MEDIA;
                callback = "quidem";
                fields = "laborum";
                key = "iusto";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "quibusdam";
                requestId = "harum";
                uploadType = "aliquid";
                uploadProtocol = "assumenda";
                userIp = "dicta";
            }};            

            ComputeTargetSslProxiesSetProxyHeaderResponse res = sdk.targetSslProxies.computeTargetSslProxiesSetProxyHeader(req, new ComputeTargetSslProxiesSetProxyHeaderSecurity() {{
                option1 = new ComputeTargetSslProxiesSetProxyHeaderSecurityOption1("exercitationem", "voluptatem") {{
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

## computeTargetSslProxiesSetSslCertificates

Changes SslCertificates for TargetSslProxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetSslCertificatesRequest;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetSslCertificatesResponse;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetSslCertificatesSecurity;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetSslCertificatesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetSslCertificatesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetSslProxiesSetSslCertificatesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetSslProxiesSetSslCertificatesRequest req = new ComputeTargetSslProxiesSetSslCertificatesRequest("odit", "veniam") {{
                dollarXgafv = XgafvEnum.TWO;
                targetSslProxiesSetSslCertificatesRequest = new TargetSslProxiesSetSslCertificatesRequest() {{
                    sslCertificates = new String[]{{
                        add("quaerat"),
                        add("natus"),
                        add("praesentium"),
                    }};
                }};;
                accessToken = "asperiores";
                alt = AltEnum.MEDIA;
                callback = "vero";
                fields = "vitae";
                key = "adipisci";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "excepturi";
                requestId = "iste";
                uploadType = "quisquam";
                uploadProtocol = "qui";
                userIp = "iste";
            }};            

            ComputeTargetSslProxiesSetSslCertificatesResponse res = sdk.targetSslProxies.computeTargetSslProxiesSetSslCertificates(req, new ComputeTargetSslProxiesSetSslCertificatesSecurity() {{
                option1 = new ComputeTargetSslProxiesSetSslCertificatesSecurityOption1("quibusdam", "minima") {{
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

## computeTargetSslProxiesSetSslPolicy

Sets the SSL policy for TargetSslProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the SSL proxy load balancer. They do not affect the connection between the load balancer and the backends.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetSslPolicyRequest;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetSslPolicyResponse;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetSslPolicySecurity;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetSslPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesSetSslPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SslPolicyReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetSslProxiesSetSslPolicyRequest req = new ComputeTargetSslProxiesSetSslPolicyRequest("harum", "consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                sslPolicyReference = new SslPolicyReference() {{
                    sslPolicy = "est";
                }};;
                accessToken = "consequatur";
                alt = AltEnum.MEDIA;
                callback = "illum";
                fields = "libero";
                key = "beatae";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "sint";
                requestId = "assumenda";
                uploadType = "doloremque";
                uploadProtocol = "iure";
                userIp = "sapiente";
            }};            

            ComputeTargetSslProxiesSetSslPolicyResponse res = sdk.targetSslProxies.computeTargetSslProxiesSetSslPolicy(req, new ComputeTargetSslProxiesSetSslPolicySecurity() {{
                option1 = new ComputeTargetSslProxiesSetSslPolicySecurityOption1("dolorem", "aliquid") {{
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
