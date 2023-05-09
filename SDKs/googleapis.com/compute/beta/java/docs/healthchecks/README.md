# healthChecks

### Available Operations

* [computeHealthChecksAggregatedList](#computehealthchecksaggregatedlist) - Retrieves the list of all HealthCheck resources, regional and global, available to the specified project.
* [computeHealthChecksDelete](#computehealthchecksdelete) - Deletes the specified HealthCheck resource.
* [computeHealthChecksGet](#computehealthchecksget) - Returns the specified HealthCheck resource.
* [computeHealthChecksInsert](#computehealthchecksinsert) - Creates a HealthCheck resource in the specified project using the data included in the request.
* [computeHealthChecksList](#computehealthcheckslist) - Retrieves the list of HealthCheck resources available to the specified project.
* [computeHealthChecksPatch](#computehealthcheckspatch) - Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeHealthChecksTestIamPermissions](#computehealthcheckstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeHealthChecksUpdate](#computehealthchecksupdate) - Updates a HealthCheck resource in the specified project using the data included in the request.

## computeHealthChecksAggregatedList

Retrieves the list of all HealthCheck resources, regional and global, available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHealthChecksAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeHealthChecksAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeHealthChecksAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeHealthChecksAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHealthChecksAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeHealthChecksAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHealthChecksAggregatedListRequest req = new ComputeHealthChecksAggregatedListRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nulla";
                alt = AltEnum.JSON;
                callback = "similique";
                fields = "eligendi";
                filter = "impedit";
                includeAllScopes = false;
                key = "officia";
                maxResults = 485097L;
                oauthToken = "voluptate";
                orderBy = "mollitia";
                pageToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "tempore";
                returnPartialSuccess = false;
                uploadType = "voluptate";
                uploadProtocol = "cum";
                userIp = "esse";
            }};            

            ComputeHealthChecksAggregatedListResponse res = sdk.healthChecks.computeHealthChecksAggregatedList(req, new ComputeHealthChecksAggregatedListSecurity() {{
                option1 = new ComputeHealthChecksAggregatedListSecurityOption1("alias", "consequuntur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.healthChecksAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeHealthChecksDelete

Deletes the specified HealthCheck resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHealthChecksDeleteRequest;
import org.openapis.openapi.models.operations.ComputeHealthChecksDeleteResponse;
import org.openapis.openapi.models.operations.ComputeHealthChecksDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeHealthChecksDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHealthChecksDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHealthChecksDeleteRequest req = new ComputeHealthChecksDeleteRequest("architecto", "est") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magni";
                alt = AltEnum.JSON;
                callback = "quaerat";
                fields = "suscipit";
                key = "rerum";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "aliquam";
                requestId = "repudiandae";
                uploadType = "unde";
                uploadProtocol = "excepturi";
                userIp = "voluptatibus";
            }};            

            ComputeHealthChecksDeleteResponse res = sdk.healthChecks.computeHealthChecksDelete(req, new ComputeHealthChecksDeleteSecurity() {{
                option1 = new ComputeHealthChecksDeleteSecurityOption1("facilis", "doloremque") {{
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

## computeHealthChecksGet

Returns the specified HealthCheck resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHealthChecksGetRequest;
import org.openapis.openapi.models.operations.ComputeHealthChecksGetResponse;
import org.openapis.openapi.models.operations.ComputeHealthChecksGetSecurity;
import org.openapis.openapi.models.operations.ComputeHealthChecksGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHealthChecksGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeHealthChecksGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHealthChecksGetRequest req = new ComputeHealthChecksGetRequest("officiis", "nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "provident";
                fields = "ut";
                key = "hic";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "saepe";
                uploadProtocol = "assumenda";
                userIp = "exercitationem";
            }};            

            ComputeHealthChecksGetResponse res = sdk.healthChecks.computeHealthChecksGet(req, new ComputeHealthChecksGetSecurity() {{
                option1 = new ComputeHealthChecksGetSecurityOption1("exercitationem", "dolore") {{
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

## computeHealthChecksInsert

Creates a HealthCheck resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHealthChecksInsertRequest;
import org.openapis.openapi.models.operations.ComputeHealthChecksInsertResponse;
import org.openapis.openapi.models.operations.ComputeHealthChecksInsertSecurity;
import org.openapis.openapi.models.operations.ComputeHealthChecksInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHealthChecksInsertSecurityOption2;
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

            ComputeHealthChecksInsertRequest req = new ComputeHealthChecksInsertRequest("sit") {{
                dollarXgafv = XgafvEnum.TWO;
                healthCheck = new HealthCheck() {{
                    checkIntervalSec = 953806;
                    creationTimestamp = "exercitationem";
                    description = "neque";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "mollitia";
                        port = 242582;
                        portName = "ut";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                    }};;
                    healthyThreshold = 97918;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "rerum";
                        port = 501236;
                        portName = "sapiente";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "natus";
                        response = "reprehenderit";
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "dolorem";
                        port = 124381;
                        portName = "fuga";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "aperiam";
                        response = "ad";
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "fugiat";
                        port = 559209;
                        portName = "quis";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "consequuntur";
                        response = "illum";
                    }};;
                    id = "delectus";
                    kind = "rerum";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Lisa Wuckert";
                    region = "molestias";
                    selfLink = "odio";
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 252183;
                        portName = "magni";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.NONE;
                        request = "illum";
                        response = "adipisci";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 210651;
                        portName = "ex";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.NONE;
                        request = "et";
                        response = "officiis";
                    }};;
                    timeoutSec = 778374;
                    type = HealthCheckTypeEnum.INVALID;
                    unhealthyThreshold = 99343;
                }};;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "doloribus";
                fields = "praesentium";
                key = "iste";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "ad";
                requestId = "ab";
                uploadType = "harum";
                uploadProtocol = "facere";
                userIp = "ducimus";
            }};            

            ComputeHealthChecksInsertResponse res = sdk.healthChecks.computeHealthChecksInsert(req, new ComputeHealthChecksInsertSecurity() {{
                option1 = new ComputeHealthChecksInsertSecurityOption1("nisi", "accusamus") {{
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

## computeHealthChecksList

Retrieves the list of HealthCheck resources available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHealthChecksListRequest;
import org.openapis.openapi.models.operations.ComputeHealthChecksListResponse;
import org.openapis.openapi.models.operations.ComputeHealthChecksListSecurity;
import org.openapis.openapi.models.operations.ComputeHealthChecksListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHealthChecksListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeHealthChecksListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHealthChecksListRequest req = new ComputeHealthChecksListRequest("officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "molestias";
                filter = "impedit";
                key = "modi";
                maxResults = 822631L;
                oauthToken = "similique";
                orderBy = "architecto";
                pageToken = "asperiores";
                prettyPrint = false;
                quotaUser = "est";
                returnPartialSuccess = false;
                uploadType = "repellendus";
                uploadProtocol = "dolor";
                userIp = "nemo";
            }};            

            ComputeHealthChecksListResponse res = sdk.healthChecks.computeHealthChecksList(req, new ComputeHealthChecksListSecurity() {{
                option1 = new ComputeHealthChecksListSecurityOption1("quis", "quasi") {{
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

## computeHealthChecksPatch

Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHealthChecksPatchRequest;
import org.openapis.openapi.models.operations.ComputeHealthChecksPatchResponse;
import org.openapis.openapi.models.operations.ComputeHealthChecksPatchSecurity;
import org.openapis.openapi.models.operations.ComputeHealthChecksPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHealthChecksPatchSecurityOption2;
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

            ComputeHealthChecksPatchRequest req = new ComputeHealthChecksPatchRequest("odit", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                healthCheck1 = new HealthCheck() {{
                    checkIntervalSec = 389585;
                    creationTimestamp = "nulla";
                    description = "dolore";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "itaque";
                        port = 316335;
                        portName = "nam";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                    }};;
                    healthyThreshold = 164377;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "sapiente";
                        port = 912;
                        portName = "doloribus";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.NONE;
                        requestPath = "corrupti";
                        response = "exercitationem";
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "commodi";
                        port = 511807;
                        portName = "est";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "dolores";
                        response = "labore";
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "earum";
                        port = 6060;
                        portName = "voluptatem";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "quibusdam";
                        response = "autem";
                    }};;
                    id = "voluptates";
                    kind = "tempore";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Don Dicki";
                    region = "aliquam";
                    selfLink = "corporis";
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 872602;
                        portName = "ipsa";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.NONE;
                        request = "molestias";
                        response = "quaerat";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 999932;
                        portName = "expedita";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.PROXY_V1;
                        request = "quis";
                        response = "cumque";
                    }};;
                    timeoutSec = 765459;
                    type = HealthCheckTypeEnum.TCP;
                    unhealthyThreshold = 953916;
                }};;
                accessToken = "tenetur";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "facilis";
                key = "doloremque";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "reiciendis";
                requestId = "debitis";
                uploadType = "enim";
                uploadProtocol = "quasi";
                userIp = "accusamus";
            }};            

            ComputeHealthChecksPatchResponse res = sdk.healthChecks.computeHealthChecksPatch(req, new ComputeHealthChecksPatchSecurity() {{
                option1 = new ComputeHealthChecksPatchSecurityOption1("ipsam", "aspernatur") {{
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

## computeHealthChecksTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHealthChecksTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeHealthChecksTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeHealthChecksTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeHealthChecksTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHealthChecksTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeHealthChecksTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHealthChecksTestIamPermissionsRequest req = new ComputeHealthChecksTestIamPermissionsRequest("atque", "animi") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("mollitia"),
                        add("minus"),
                    }};
                }};;
                accessToken = "quos";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "praesentium";
                key = "ullam";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "libero";
                uploadProtocol = "placeat";
                userIp = "explicabo";
            }};            

            ComputeHealthChecksTestIamPermissionsResponse res = sdk.healthChecks.computeHealthChecksTestIamPermissions(req, new ComputeHealthChecksTestIamPermissionsSecurity() {{
                option1 = new ComputeHealthChecksTestIamPermissionsSecurityOption1("placeat", "animi") {{
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

## computeHealthChecksUpdate

Updates a HealthCheck resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHealthChecksUpdateRequest;
import org.openapis.openapi.models.operations.ComputeHealthChecksUpdateResponse;
import org.openapis.openapi.models.operations.ComputeHealthChecksUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeHealthChecksUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHealthChecksUpdateSecurityOption2;
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

            ComputeHealthChecksUpdateRequest req = new ComputeHealthChecksUpdateRequest("expedita", "laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                healthCheck1 = new HealthCheck() {{
                    checkIntervalSec = 825782;
                    creationTimestamp = "laborum";
                    description = "magnam";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "veritatis";
                        port = 146820;
                        portName = "nihil";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                    }};;
                    healthyThreshold = 860144;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "nemo";
                        port = 607365;
                        portName = "iure";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "eius";
                        response = "esse";
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "quasi";
                        port = 81613;
                        portName = "similique";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "distinctio";
                        response = "porro";
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "nihil";
                        port = 256742;
                        portName = "rerum";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "placeat";
                        response = "necessitatibus";
                    }};;
                    id = "quisquam";
                    kind = "impedit";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Eva Wolf";
                    region = "nam";
                    selfLink = "incidunt";
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 534175;
                        portName = "aliquam";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.PROXY_V1;
                        request = "quibusdam";
                        response = "iure";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 652703;
                        portName = "autem";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.NONE;
                        request = "tempora";
                        response = "aliquam";
                    }};;
                    timeoutSec = 99732;
                    type = HealthCheckTypeEnum.TCP;
                    unhealthyThreshold = 185983;
                }};;
                accessToken = "maxime";
                alt = AltEnum.JSON;
                callback = "soluta";
                fields = "quos";
                key = "sit";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "sit";
                requestId = "perspiciatis";
                uploadType = "quaerat";
                uploadProtocol = "nesciunt";
                userIp = "molestiae";
            }};            

            ComputeHealthChecksUpdateResponse res = sdk.healthChecks.computeHealthChecksUpdate(req, new ComputeHealthChecksUpdateSecurity() {{
                option1 = new ComputeHealthChecksUpdateSecurityOption1("adipisci", "eveniet") {{
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
