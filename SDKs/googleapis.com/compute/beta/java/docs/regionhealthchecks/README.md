# regionHealthChecks

### Available Operations

* [computeRegionHealthChecksDelete](#computeregionhealthchecksdelete) - Deletes the specified HealthCheck resource.
* [computeRegionHealthChecksGet](#computeregionhealthchecksget) - Returns the specified HealthCheck resource.
* [computeRegionHealthChecksInsert](#computeregionhealthchecksinsert) - Creates a HealthCheck resource in the specified project using the data included in the request.
* [computeRegionHealthChecksList](#computeregionhealthcheckslist) - Retrieves the list of HealthCheck resources available to the specified project.
* [computeRegionHealthChecksPatch](#computeregionhealthcheckspatch) - Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeRegionHealthChecksTestIamPermissions](#computeregionhealthcheckstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionHealthChecksUpdate](#computeregionhealthchecksupdate) - Updates a HealthCheck resource in the specified project using the data included in the request.

## computeRegionHealthChecksDelete

Deletes the specified HealthCheck resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionHealthChecksDeleteRequest req = new ComputeRegionHealthChecksDeleteRequest("repellendus", "cupiditate", "commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "adipisci";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "soluta";
                key = "rerum";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "porro";
                requestId = "fuga";
                uploadType = "sunt";
                uploadProtocol = "nobis";
                userIp = "sapiente";
            }};            

            ComputeRegionHealthChecksDeleteResponse res = sdk.regionHealthChecks.computeRegionHealthChecksDelete(req, new ComputeRegionHealthChecksDeleteSecurity() {{
                option1 = new ComputeRegionHealthChecksDeleteSecurityOption1("veritatis", "unde") {{
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

## computeRegionHealthChecksGet

Returns the specified HealthCheck resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionHealthChecksGetRequest req = new ComputeRegionHealthChecksGetRequest("incidunt", "soluta", "recusandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quam";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "consequatur";
                key = "impedit";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "placeat";
                uploadProtocol = "architecto";
                userIp = "eaque";
            }};            

            ComputeRegionHealthChecksGetResponse res = sdk.regionHealthChecks.computeRegionHealthChecksGet(req, new ComputeRegionHealthChecksGetSecurity() {{
                option1 = new ComputeRegionHealthChecksGetSecurityOption1("voluptatum", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.healthCheck != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionHealthChecksInsert

Creates a HealthCheck resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GRPCHealthCheck;
import org.openapis.openapi.models.shared.GRPCHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.HTTPHealthCheck;
import org.openapis.openapi.models.shared.HTTPHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.HTTPHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.HTTPSHealthCheck;
import org.openapis.openapi.models.shared.HTTPSHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.HTTPSHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.HealthCheck;
import org.openapis.openapi.models.shared.HealthCheckLogConfig;
import org.openapis.openapi.models.shared.HealthCheckTypeEnum;
import org.openapis.openapi.models.shared.Http2HealthCheck;
import org.openapis.openapi.models.shared.Http2HealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.Http2HealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.SSLHealthCheck;
import org.openapis.openapi.models.shared.SSLHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.SSLHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.TCPHealthCheck;
import org.openapis.openapi.models.shared.TCPHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.TCPHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionHealthChecksInsertRequest req = new ComputeRegionHealthChecksInsertRequest("neque", "fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                healthCheck = new HealthCheck() {{
                    checkIntervalSec = 691991;
                    creationTimestamp = "hic";
                    description = "dolorum";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "aperiam";
                        port = 387826;
                        portName = "deserunt";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                    }};;
                    healthyThreshold = 641713;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "eum";
                        port = 414709;
                        portName = "sapiente";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.NONE;
                        requestPath = "laboriosam";
                        response = "optio";
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "doloribus";
                        port = 807230;
                        portName = "iusto";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "est";
                        response = "itaque";
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "expedita";
                        port = 741205;
                        portName = "excepturi";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "facilis";
                        response = "voluptatum";
                    }};;
                    id = "explicabo";
                    kind = "qui";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Bobbie Koch";
                    region = "fugit";
                    selfLink = "consequuntur";
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 414152;
                        portName = "ad";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.PROXY_V1;
                        request = "modi";
                        response = "eaque";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 336533;
                        portName = "culpa";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.NONE;
                        request = "odio";
                        response = "earum";
                    }};;
                    timeoutSec = 88583;
                    type = HealthCheckTypeEnum.HTTP2;
                    unhealthyThreshold = 880155;
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "fugiat";
                fields = "saepe";
                key = "dolorem";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                requestId = "impedit";
                uploadType = "quaerat";
                uploadProtocol = "officiis";
                userIp = "reprehenderit";
            }};            

            ComputeRegionHealthChecksInsertResponse res = sdk.regionHealthChecks.computeRegionHealthChecksInsert(req, new ComputeRegionHealthChecksInsertSecurity() {{
                option1 = new ComputeRegionHealthChecksInsertSecurityOption1("ad", "eum") {{
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

## computeRegionHealthChecksList

Retrieves the list of HealthCheck resources available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksListRequest;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksListResponse;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionHealthChecksListRequest req = new ComputeRegionHealthChecksListRequest("assumenda", "consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "eaque";
                fields = "veniam";
                filter = "reiciendis";
                key = "perspiciatis";
                maxResults = 421655L;
                oauthToken = "excepturi";
                orderBy = "repellendus";
                pageToken = "provident";
                prettyPrint = false;
                quotaUser = "aliquam";
                returnPartialSuccess = false;
                uploadType = "praesentium";
                uploadProtocol = "labore";
                userIp = "totam";
            }};            

            ComputeRegionHealthChecksListResponse res = sdk.regionHealthChecks.computeRegionHealthChecksList(req, new ComputeRegionHealthChecksListSecurity() {{
                option1 = new ComputeRegionHealthChecksListSecurityOption1("unde", "dolores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.healthCheckList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionHealthChecksPatch

Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksPatchRequest;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksPatchResponse;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksPatchSecurity;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GRPCHealthCheck;
import org.openapis.openapi.models.shared.GRPCHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.HTTPHealthCheck;
import org.openapis.openapi.models.shared.HTTPHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.HTTPHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.HTTPSHealthCheck;
import org.openapis.openapi.models.shared.HTTPSHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.HTTPSHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.HealthCheck;
import org.openapis.openapi.models.shared.HealthCheckLogConfig;
import org.openapis.openapi.models.shared.HealthCheckTypeEnum;
import org.openapis.openapi.models.shared.Http2HealthCheck;
import org.openapis.openapi.models.shared.Http2HealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.Http2HealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.SSLHealthCheck;
import org.openapis.openapi.models.shared.SSLHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.SSLHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.TCPHealthCheck;
import org.openapis.openapi.models.shared.TCPHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.TCPHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionHealthChecksPatchRequest req = new ComputeRegionHealthChecksPatchRequest("impedit", "dolorum", "minima") {{
                dollarXgafv = XgafvEnum.ONE;
                healthCheck1 = new HealthCheck() {{
                    checkIntervalSec = 736389;
                    creationTimestamp = "unde";
                    description = "beatae";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "magnam";
                        port = 73536;
                        portName = "facilis";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                    }};;
                    healthyThreshold = 597336;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "ut";
                        port = 724479;
                        portName = "totam";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.NONE;
                        requestPath = "libero";
                        response = "magnam";
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "at";
                        port = 502849;
                        portName = "delectus";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "repellendus";
                        response = "tempora";
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "excepturi";
                        port = 502350;
                        portName = "dicta";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "quis";
                        response = "labore";
                    }};;
                    id = "enim";
                    kind = "consectetur";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Dewey Harber";
                    region = "dignissimos";
                    selfLink = "dignissimos";
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 878080;
                        portName = "necessitatibus";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.NONE;
                        request = "sit";
                        response = "consequatur";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 721823;
                        portName = "nihil";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.NONE;
                        request = "ad";
                        response = "vel";
                    }};;
                    timeoutSec = 929785;
                    type = HealthCheckTypeEnum.TCP;
                    unhealthyThreshold = 621912;
                }};;
                accessToken = "itaque";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "deleniti";
                key = "harum";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "veniam";
                requestId = "cumque";
                uploadType = "ea";
                uploadProtocol = "tenetur";
                userIp = "ipsa";
            }};            

            ComputeRegionHealthChecksPatchResponse res = sdk.regionHealthChecks.computeRegionHealthChecksPatch(req, new ComputeRegionHealthChecksPatchSecurity() {{
                option1 = new ComputeRegionHealthChecksPatchSecurityOption1("expedita", "explicabo") {{
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

## computeRegionHealthChecksTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionHealthChecksTestIamPermissionsRequest req = new ComputeRegionHealthChecksTestIamPermissionsRequest("voluptatem", "cumque", "ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("impedit"),
                        add("accusantium"),
                        add("voluptates"),
                        add("accusamus"),
                    }};
                }};;
                accessToken = "quaerat";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "adipisci";
                key = "ipsa";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "voluptatem";
                uploadProtocol = "a";
                userIp = "ab";
            }};            

            ComputeRegionHealthChecksTestIamPermissionsResponse res = sdk.regionHealthChecks.computeRegionHealthChecksTestIamPermissions(req, new ComputeRegionHealthChecksTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionHealthChecksTestIamPermissionsSecurityOption1("ipsum", "quos") {{
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

## computeRegionHealthChecksUpdate

Updates a HealthCheck resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksUpdateRequest;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksUpdateResponse;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionHealthChecksUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GRPCHealthCheck;
import org.openapis.openapi.models.shared.GRPCHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.HTTPHealthCheck;
import org.openapis.openapi.models.shared.HTTPHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.HTTPHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.HTTPSHealthCheck;
import org.openapis.openapi.models.shared.HTTPSHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.HTTPSHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.HealthCheck;
import org.openapis.openapi.models.shared.HealthCheckLogConfig;
import org.openapis.openapi.models.shared.HealthCheckTypeEnum;
import org.openapis.openapi.models.shared.Http2HealthCheck;
import org.openapis.openapi.models.shared.Http2HealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.Http2HealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.SSLHealthCheck;
import org.openapis.openapi.models.shared.SSLHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.SSLHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.TCPHealthCheck;
import org.openapis.openapi.models.shared.TCPHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.TCPHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionHealthChecksUpdateRequest req = new ComputeRegionHealthChecksUpdateRequest("amet", "amet", "modi") {{
                dollarXgafv = XgafvEnum.ONE;
                healthCheck1 = new HealthCheck() {{
                    checkIntervalSec = 310069;
                    creationTimestamp = "tenetur";
                    description = "dignissimos";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "mollitia";
                        port = 403226;
                        portName = "doloremque";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                    }};;
                    healthyThreshold = 296266;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "dolore";
                        port = 182953;
                        portName = "molestiae";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "aliquam";
                        response = "voluptatibus";
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "omnis";
                        port = 129042;
                        portName = "totam";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "doloremque";
                        response = "alias";
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "dolores";
                        port = 325989;
                        portName = "distinctio";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "porro";
                        response = "illo";
                    }};;
                    id = "laboriosam";
                    kind = "tempore";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Raul Legros";
                    region = "doloribus";
                    selfLink = "reprehenderit";
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 366543;
                        portName = "exercitationem";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.PROXY_V1;
                        request = "ratione";
                        response = "qui";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 626803;
                        portName = "officia";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.NONE;
                        request = "iste";
                        response = "libero";
                    }};;
                    timeoutSec = 756064;
                    type = HealthCheckTypeEnum.SSL;
                    unhealthyThreshold = 502134;
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.MEDIA;
                callback = "accusamus";
                fields = "alias";
                key = "et";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "soluta";
                requestId = "veniam";
                uploadType = "voluptates";
                uploadProtocol = "modi";
                userIp = "deserunt";
            }};            

            ComputeRegionHealthChecksUpdateResponse res = sdk.regionHealthChecks.computeRegionHealthChecksUpdate(req, new ComputeRegionHealthChecksUpdateSecurity() {{
                option1 = new ComputeRegionHealthChecksUpdateSecurityOption1("commodi", "excepturi") {{
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
