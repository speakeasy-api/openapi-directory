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

            ComputeTargetSslProxiesDeleteRequest req = new ComputeTargetSslProxiesDeleteRequest("nostrum", "neque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tenetur";
                alt = AltEnum.MEDIA;
                callback = "debitis";
                fields = "autem";
                key = "delectus";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "quidem";
                requestId = "unde";
                uploadType = "delectus";
                uploadProtocol = "est";
                userIp = "placeat";
            }};            

            ComputeTargetSslProxiesDeleteResponse res = sdk.targetSslProxies.computeTargetSslProxiesDelete(req, new ComputeTargetSslProxiesDeleteSecurity() {{
                option1 = new ComputeTargetSslProxiesDeleteSecurityOption1("blanditiis", "porro") {{
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

            ComputeTargetSslProxiesGetRequest req = new ComputeTargetSslProxiesGetRequest("minima", "eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "id";
                key = "laboriosam";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "consequatur";
                uploadProtocol = "molestias";
                userIp = "corrupti";
            }};            

            ComputeTargetSslProxiesGetResponse res = sdk.targetSslProxies.computeTargetSslProxiesGet(req, new ComputeTargetSslProxiesGetSecurity() {{
                option1 = new ComputeTargetSslProxiesGetSecurityOption1("ducimus", "qui") {{
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

            ComputeTargetSslProxiesInsertRequest req = new ComputeTargetSslProxiesInsertRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                targetSslProxy = new TargetSslProxy() {{
                    certificateMap = "doloremque";
                    creationTimestamp = "ipsa";
                    description = "accusamus";
                    id = "recusandae";
                    kind = "ullam";
                    name = "Willie Bauch";
                    proxyHeader = TargetSslProxyProxyHeaderEnum.PROXY_V1;
                    selfLink = "at";
                    service = "rem";
                    sslCertificates = new String[]{{
                        add("natus"),
                        add("velit"),
                        add("suscipit"),
                    }};
                    sslPolicy = "nostrum";
                }};;
                accessToken = "eligendi";
                alt = AltEnum.JSON;
                callback = "sed";
                fields = "veniam";
                key = "error";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "animi";
                requestId = "enim";
                uploadType = "quibusdam";
                uploadProtocol = "laudantium";
                userIp = "nobis";
            }};            

            ComputeTargetSslProxiesInsertResponse res = sdk.targetSslProxies.computeTargetSslProxiesInsert(req, new ComputeTargetSslProxiesInsertSecurity() {{
                option1 = new ComputeTargetSslProxiesInsertSecurityOption1("illo", "reprehenderit") {{
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

            ComputeTargetSslProxiesListRequest req = new ComputeTargetSslProxiesListRequest("molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minima";
                alt = AltEnum.JSON;
                callback = "libero";
                fields = "nulla";
                filter = "natus";
                key = "ipsa";
                maxResults = 352653L;
                oauthToken = "libero";
                orderBy = "a";
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "vero";
                returnPartialSuccess = false;
                uploadType = "laborum";
                uploadProtocol = "incidunt";
                userIp = "laborum";
            }};            

            ComputeTargetSslProxiesListResponse res = sdk.targetSslProxies.computeTargetSslProxiesList(req, new ComputeTargetSslProxiesListSecurity() {{
                option1 = new ComputeTargetSslProxiesListSecurityOption1("est", "at") {{
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

            ComputeTargetSslProxiesSetBackendServiceRequest req = new ComputeTargetSslProxiesSetBackendServiceRequest("doloremque", "expedita") {{
                dollarXgafv = XgafvEnum.TWO;
                targetSslProxiesSetBackendServiceRequest = new TargetSslProxiesSetBackendServiceRequest() {{
                    service = "voluptas";
                }};;
                accessToken = "asperiores";
                alt = AltEnum.PROTO;
                callback = "illo";
                fields = "reprehenderit";
                key = "quas";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "laboriosam";
                requestId = "molestias";
                uploadType = "possimus";
                uploadProtocol = "voluptatibus";
                userIp = "beatae";
            }};            

            ComputeTargetSslProxiesSetBackendServiceResponse res = sdk.targetSslProxies.computeTargetSslProxiesSetBackendService(req, new ComputeTargetSslProxiesSetBackendServiceSecurity() {{
                option1 = new ComputeTargetSslProxiesSetBackendServiceSecurityOption1("libero", "sapiente") {{
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

            ComputeTargetSslProxiesSetCertificateMapRequest req = new ComputeTargetSslProxiesSetCertificateMapRequest("molestiae", "nam") {{
                dollarXgafv = XgafvEnum.ONE;
                targetSslProxiesSetCertificateMapRequest = new TargetSslProxiesSetCertificateMapRequest() {{
                    certificateMap = "ut";
                }};;
                accessToken = "at";
                alt = AltEnum.JSON;
                callback = "vero";
                fields = "temporibus";
                key = "repudiandae";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "debitis";
                requestId = "ipsa";
                uploadType = "quisquam";
                uploadProtocol = "porro";
                userIp = "sint";
            }};            

            ComputeTargetSslProxiesSetCertificateMapResponse res = sdk.targetSslProxies.computeTargetSslProxiesSetCertificateMap(req, new ComputeTargetSslProxiesSetCertificateMapSecurity() {{
                option1 = new ComputeTargetSslProxiesSetCertificateMapSecurityOption1("similique", "temporibus") {{
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

            ComputeTargetSslProxiesSetProxyHeaderRequest req = new ComputeTargetSslProxiesSetProxyHeaderRequest("dignissimos", "minus") {{
                dollarXgafv = XgafvEnum.TWO;
                targetSslProxiesSetProxyHeaderRequest = new TargetSslProxiesSetProxyHeaderRequest() {{
                    proxyHeader = TargetSslProxiesSetProxyHeaderRequestProxyHeaderEnum.PROXY_V1;
                }};;
                accessToken = "illo";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "tempora";
                key = "dolore";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "laudantium";
                requestId = "quibusdam";
                uploadType = "molestias";
                uploadProtocol = "nulla";
                userIp = "distinctio";
            }};            

            ComputeTargetSslProxiesSetProxyHeaderResponse res = sdk.targetSslProxies.computeTargetSslProxiesSetProxyHeader(req, new ComputeTargetSslProxiesSetProxyHeaderSecurity() {{
                option1 = new ComputeTargetSslProxiesSetProxyHeaderSecurityOption1("a", "eum") {{
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

            ComputeTargetSslProxiesSetSslCertificatesRequest req = new ComputeTargetSslProxiesSetSslCertificatesRequest("error", "necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                targetSslProxiesSetSslCertificatesRequest = new TargetSslProxiesSetSslCertificatesRequest() {{
                    sslCertificates = new String[]{{
                        add("pariatur"),
                        add("consequatur"),
                        add("amet"),
                        add("vitae"),
                    }};
                }};;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "eveniet";
                fields = "magnam";
                key = "enim";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "ipsa";
                requestId = "molestias";
                uploadType = "delectus";
                uploadProtocol = "perspiciatis";
                userIp = "dolorem";
            }};            

            ComputeTargetSslProxiesSetSslCertificatesResponse res = sdk.targetSslProxies.computeTargetSslProxiesSetSslCertificates(req, new ComputeTargetSslProxiesSetSslCertificatesSecurity() {{
                option1 = new ComputeTargetSslProxiesSetSslCertificatesSecurityOption1("officiis", "non") {{
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

            ComputeTargetSslProxiesSetSslPolicyRequest req = new ComputeTargetSslProxiesSetSslPolicyRequest("aspernatur", "debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                sslPolicyReference = new SslPolicyReference() {{
                    sslPolicy = "atque";
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "eaque";
                key = "natus";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "laboriosam";
                requestId = "omnis";
                uploadType = "consectetur";
                uploadProtocol = "officiis";
                userIp = "quos";
            }};            

            ComputeTargetSslProxiesSetSslPolicyResponse res = sdk.targetSslProxies.computeTargetSslProxiesSetSslPolicy(req, new ComputeTargetSslProxiesSetSslPolicySecurity() {{
                option1 = new ComputeTargetSslProxiesSetSslPolicySecurityOption1("error", "ex") {{
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

            ComputeTargetSslProxiesTestIamPermissionsRequest req = new ComputeTargetSslProxiesTestIamPermissionsRequest("laboriosam", "deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("distinctio"),
                        add("aperiam"),
                        add("cumque"),
                    }};
                }};;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "culpa";
                fields = "autem";
                key = "nam";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "assumenda";
                uploadProtocol = "ipsa";
                userIp = "corporis";
            }};            

            ComputeTargetSslProxiesTestIamPermissionsResponse res = sdk.targetSslProxies.computeTargetSslProxiesTestIamPermissions(req, new ComputeTargetSslProxiesTestIamPermissionsSecurity() {{
                option1 = new ComputeTargetSslProxiesTestIamPermissionsSecurityOption1("ut", "provident") {{
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
