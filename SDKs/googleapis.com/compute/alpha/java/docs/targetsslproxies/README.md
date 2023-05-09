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
* [computeTargetSslProxiesTestIamPermissions](#computetargetsslproxiestestiampermissions) - Returns permissions that a caller has on the specified resource.

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

            ComputeTargetSslProxiesDeleteRequest req = new ComputeTargetSslProxiesDeleteRequest("voluptas", "ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "animi";
                alt = AltEnum.MEDIA;
                callback = "inventore";
                fields = "perspiciatis";
                key = "rerum";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "illo";
                requestId = "optio";
                uploadType = "magni";
                uploadProtocol = "amet";
                userIp = "quasi";
            }};            

            ComputeTargetSslProxiesDeleteResponse res = sdk.targetSslProxies.computeTargetSslProxiesDelete(req, new ComputeTargetSslProxiesDeleteSecurity() {{
                option1 = new ComputeTargetSslProxiesDeleteSecurityOption1("quas", "id") {{
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

            ComputeTargetSslProxiesGetRequest req = new ComputeTargetSslProxiesGetRequest("voluptatibus", "quam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "explicabo";
                alt = AltEnum.JSON;
                callback = "quia";
                fields = "accusantium";
                key = "dolor";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "perferendis";
                uploadProtocol = "ipsa";
                userIp = "voluptatem";
            }};            

            ComputeTargetSslProxiesGetResponse res = sdk.targetSslProxies.computeTargetSslProxiesGet(req, new ComputeTargetSslProxiesGetSecurity() {{
                option1 = new ComputeTargetSslProxiesGetSecurityOption1("tenetur", "unde") {{
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

            ComputeTargetSslProxiesInsertRequest req = new ComputeTargetSslProxiesInsertRequest("quia") {{
                dollarXgafv = XgafvEnum.TWO;
                targetSslProxy = new TargetSslProxy() {{
                    certificateMap = "eaque";
                    creationTimestamp = "ullam";
                    description = "minus";
                    id = "deleniti";
                    kind = "dolor";
                    name = "Miss Dennis Hermann";
                    proxyHeader = TargetSslProxyProxyHeaderEnum.NONE;
                    selfLink = "illum";
                    service = "voluptate";
                    sslCertificates = new String[]{{
                        add("iste"),
                        add("ex"),
                        add("fugit"),
                        add("ipsam"),
                    }};
                    sslPolicy = "quam";
                }};;
                accessToken = "dolores";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "occaecati";
                key = "accusantium";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "placeat";
                requestId = "necessitatibus";
                uploadType = "enim";
                uploadProtocol = "eum";
                userIp = "inventore";
            }};            

            ComputeTargetSslProxiesInsertResponse res = sdk.targetSslProxies.computeTargetSslProxiesInsert(req, new ComputeTargetSslProxiesInsertSecurity() {{
                option1 = new ComputeTargetSslProxiesInsertSecurityOption1("minus", "corporis") {{
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

            ComputeTargetSslProxiesListRequest req = new ComputeTargetSslProxiesListRequest("ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "nisi";
                filter = "veniam";
                key = "cum";
                maxResults = 603901L;
                oauthToken = "dolore";
                orderBy = "incidunt";
                pageToken = "impedit";
                prettyPrint = false;
                quotaUser = "laborum";
                returnPartialSuccess = false;
                uploadType = "doloribus";
                uploadProtocol = "repellat";
                userIp = "nostrum";
            }};            

            ComputeTargetSslProxiesListResponse res = sdk.targetSslProxies.computeTargetSslProxiesList(req, new ComputeTargetSslProxiesListSecurity() {{
                option1 = new ComputeTargetSslProxiesListSecurityOption1("possimus", "fugiat") {{
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

            ComputeTargetSslProxiesSetBackendServiceRequest req = new ComputeTargetSslProxiesSetBackendServiceRequest("libero", "perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                targetSslProxiesSetBackendServiceRequest = new TargetSslProxiesSetBackendServiceRequest() {{
                    service = "illum";
                }};;
                accessToken = "libero";
                alt = AltEnum.JSON;
                callback = "minima";
                fields = "reprehenderit";
                key = "alias";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "soluta";
                requestId = "iste";
                uploadType = "nobis";
                uploadProtocol = "nostrum";
                userIp = "corrupti";
            }};            

            ComputeTargetSslProxiesSetBackendServiceResponse res = sdk.targetSslProxies.computeTargetSslProxiesSetBackendService(req, new ComputeTargetSslProxiesSetBackendServiceSecurity() {{
                option1 = new ComputeTargetSslProxiesSetBackendServiceSecurityOption1("sed", "magni") {{
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

            ComputeTargetSslProxiesSetCertificateMapRequest req = new ComputeTargetSslProxiesSetCertificateMapRequest("architecto", "placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                targetSslProxiesSetCertificateMapRequest = new TargetSslProxiesSetCertificateMapRequest() {{
                    certificateMap = "dolorem";
                }};;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "similique";
                fields = "sed";
                key = "vel";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "animi";
                requestId = "fugit";
                uploadType = "numquam";
                uploadProtocol = "tenetur";
                userIp = "harum";
            }};            

            ComputeTargetSslProxiesSetCertificateMapResponse res = sdk.targetSslProxies.computeTargetSslProxiesSetCertificateMap(req, new ComputeTargetSslProxiesSetCertificateMapSecurity() {{
                option1 = new ComputeTargetSslProxiesSetCertificateMapSecurityOption1("quod", "tenetur") {{
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

            ComputeTargetSslProxiesSetProxyHeaderRequest req = new ComputeTargetSslProxiesSetProxyHeaderRequest("cum", "rem") {{
                dollarXgafv = XgafvEnum.TWO;
                targetSslProxiesSetProxyHeaderRequest = new TargetSslProxiesSetProxyHeaderRequest() {{
                    proxyHeader = TargetSslProxiesSetProxyHeaderRequestProxyHeaderEnum.NONE;
                }};;
                accessToken = "cumque";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "quis";
                key = "incidunt";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "magni";
                requestId = "laudantium";
                uploadType = "aliquid";
                uploadProtocol = "modi";
                userIp = "nihil";
            }};            

            ComputeTargetSslProxiesSetProxyHeaderResponse res = sdk.targetSslProxies.computeTargetSslProxiesSetProxyHeader(req, new ComputeTargetSslProxiesSetProxyHeaderSecurity() {{
                option1 = new ComputeTargetSslProxiesSetProxyHeaderSecurityOption1("porro", "ipsa") {{
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

            ComputeTargetSslProxiesSetSslCertificatesRequest req = new ComputeTargetSslProxiesSetSslCertificatesRequest("non", "eveniet") {{
                dollarXgafv = XgafvEnum.TWO;
                targetSslProxiesSetSslCertificatesRequest = new TargetSslProxiesSetSslCertificatesRequest() {{
                    sslCertificates = new String[]{{
                        add("eveniet"),
                        add("facere"),
                    }};
                }};;
                accessToken = "similique";
                alt = AltEnum.JSON;
                callback = "totam";
                fields = "neque";
                key = "dolor";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "rem";
                requestId = "culpa";
                uploadType = "provident";
                uploadProtocol = "possimus";
                userIp = "natus";
            }};            

            ComputeTargetSslProxiesSetSslCertificatesResponse res = sdk.targetSslProxies.computeTargetSslProxiesSetSslCertificates(req, new ComputeTargetSslProxiesSetSslCertificatesSecurity() {{
                option1 = new ComputeTargetSslProxiesSetSslCertificatesSecurityOption1("laboriosam", "reiciendis") {{
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

            ComputeTargetSslProxiesSetSslPolicyRequest req = new ComputeTargetSslProxiesSetSslPolicyRequest("est", "enim") {{
                dollarXgafv = XgafvEnum.ONE;
                sslPolicyReference = new SslPolicyReference() {{
                    sslPolicy = "reprehenderit";
                }};;
                accessToken = "amet";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "sequi";
                key = "itaque";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "doloremque";
                requestId = "molestias";
                uploadType = "quas";
                uploadProtocol = "aperiam";
                userIp = "voluptatibus";
            }};            

            ComputeTargetSslProxiesSetSslPolicyResponse res = sdk.targetSslProxies.computeTargetSslProxiesSetSslPolicy(req, new ComputeTargetSslProxiesSetSslPolicySecurity() {{
                option1 = new ComputeTargetSslProxiesSetSslPolicySecurityOption1("officia", "omnis") {{
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

## computeTargetSslProxiesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetSslProxiesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetSslProxiesTestIamPermissionsRequest req = new ComputeTargetSslProxiesTestIamPermissionsRequest("nostrum", "eveniet") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("quae"),
                        add("iusto"),
                        add("optio"),
                        add("ullam"),
                    }};
                }};;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "ducimus";
                fields = "debitis";
                key = "eius";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "eligendi";
                uploadProtocol = "voluptatem";
                userIp = "exercitationem";
            }};            

            ComputeTargetSslProxiesTestIamPermissionsResponse res = sdk.targetSslProxies.computeTargetSslProxiesTestIamPermissions(req, new ComputeTargetSslProxiesTestIamPermissionsSecurity() {{
                option1 = new ComputeTargetSslProxiesTestIamPermissionsSecurityOption1("quis", "alias") {{
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
