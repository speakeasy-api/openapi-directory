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

            ComputeHealthChecksAggregatedListRequest req = new ComputeHealthChecksAggregatedListRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "odio";
                fields = "voluptate";
                filter = "explicabo";
                includeAllScopes = false;
                key = "architecto";
                maxResults = 18584L;
                oauthToken = "possimus";
                orderBy = "dicta";
                pageToken = "delectus";
                prettyPrint = false;
                quotaUser = "voluptas";
                returnPartialSuccess = false;
                uploadType = "exercitationem";
                uploadProtocol = "quis";
                userIp = "quos";
            }};            

            ComputeHealthChecksAggregatedListResponse res = sdk.healthChecks.computeHealthChecksAggregatedList(req, new ComputeHealthChecksAggregatedListSecurity() {{
                option1 = new ComputeHealthChecksAggregatedListSecurityOption1("impedit", "cupiditate") {{
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

            ComputeHealthChecksDeleteRequest req = new ComputeHealthChecksDeleteRequest("excepturi", "quod") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "quibusdam";
                fields = "fugit";
                key = "nam";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "accusantium";
                requestId = "earum";
                uploadType = "excepturi";
                uploadProtocol = "numquam";
                userIp = "voluptatem";
            }};            

            ComputeHealthChecksDeleteResponse res = sdk.healthChecks.computeHealthChecksDelete(req, new ComputeHealthChecksDeleteSecurity() {{
                option1 = new ComputeHealthChecksDeleteSecurityOption1("voluptatum", "ducimus") {{
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

            ComputeHealthChecksGetRequest req = new ComputeHealthChecksGetRequest("possimus", "unde") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "culpa";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "doloremque";
                key = "magnam";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "temporibus";
                uploadProtocol = "voluptate";
                userIp = "placeat";
            }};            

            ComputeHealthChecksGetResponse res = sdk.healthChecks.computeHealthChecksGet(req, new ComputeHealthChecksGetSecurity() {{
                option1 = new ComputeHealthChecksGetSecurityOption1("est", "est") {{
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
import org.openapis.openapi.models.shared.HTTPHealthCheckWeightReportModeEnum;
import org.openapis.openapi.models.shared.HTTPSHealthCheck;
import org.openapis.openapi.models.shared.HTTPSHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.HTTPSHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.HTTPSHealthCheckWeightReportModeEnum;
import org.openapis.openapi.models.shared.HealthCheck;
import org.openapis.openapi.models.shared.HealthCheckLogConfig;
import org.openapis.openapi.models.shared.HealthCheckTypeEnum;
import org.openapis.openapi.models.shared.Http2HealthCheck;
import org.openapis.openapi.models.shared.Http2HealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.Http2HealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.Http2HealthCheckWeightReportModeEnum;
import org.openapis.openapi.models.shared.SSLHealthCheck;
import org.openapis.openapi.models.shared.SSLHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.SSLHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.TCPHealthCheck;
import org.openapis.openapi.models.shared.TCPHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.TCPHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.UDPHealthCheck;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHealthChecksInsertRequest req = new ComputeHealthChecksInsertRequest("placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                healthCheck = new HealthCheck() {{
                    checkIntervalSec = 724041;
                    creationTimestamp = "modi";
                    description = "minus";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "id";
                        port = 636070;
                        portName = "beatae";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                    }};;
                    healthyThreshold = 953677;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "eveniet";
                        port = 573938;
                        portName = "saepe";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.NONE;
                        requestPath = "nulla";
                        response = "reiciendis";
                        weightReportMode = Http2HealthCheckWeightReportModeEnum.DRY_RUN;
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "ipsa";
                        port = 225589;
                        portName = "natus";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "doloribus";
                        response = "amet";
                        weightReportMode = HTTPHealthCheckWeightReportModeEnum.DRY_RUN;
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "deleniti";
                        port = 224026;
                        portName = "ab";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "sequi";
                        response = "fugiat";
                        weightReportMode = HTTPSHealthCheckWeightReportModeEnum.DISABLE;
                    }};;
                    id = "odit";
                    kind = "recusandae";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Suzanne Murray";
                    region = "dolore";
                    selfLink = "commodi";
                    selfLinkWithId = "commodi";
                    sourceRegions = new String[]{{
                        add("provident"),
                        add("iusto"),
                    }};
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 761961;
                        portName = "ipsam";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.NONE;
                        request = "dolorem";
                        response = "nesciunt";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 803113;
                        portName = "inventore";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.NONE;
                        request = "vitae";
                        response = "quibusdam";
                    }};;
                    timeoutSec = 332023;
                    type = HealthCheckTypeEnum.GRPC;
                    udpHealthCheck = new UDPHealthCheck() {{
                        port = 679899;
                        portName = "animi";
                        request = "mollitia";
                        response = "autem";
                    }};;
                    unhealthyThreshold = 849049;
                }};;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "laborum";
                key = "quidem";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "aliquid";
                requestId = "eius";
                uploadType = "atque";
                uploadProtocol = "reprehenderit";
                userIp = "quo";
            }};            

            ComputeHealthChecksInsertResponse res = sdk.healthChecks.computeHealthChecksInsert(req, new ComputeHealthChecksInsertSecurity() {{
                option1 = new ComputeHealthChecksInsertSecurityOption1("enim", "reiciendis") {{
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

            ComputeHealthChecksListRequest req = new ComputeHealthChecksListRequest("impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "ex";
                fields = "aspernatur";
                filter = "est";
                key = "voluptatem";
                maxResults = 13057L;
                oauthToken = "nobis";
                orderBy = "saepe";
                pageToken = "maiores";
                prettyPrint = false;
                quotaUser = "autem";
                returnPartialSuccess = false;
                uploadType = "perspiciatis";
                uploadProtocol = "saepe";
                userIp = "illo";
            }};            

            ComputeHealthChecksListResponse res = sdk.healthChecks.computeHealthChecksList(req, new ComputeHealthChecksListSecurity() {{
                option1 = new ComputeHealthChecksListSecurityOption1("aperiam", "quae") {{
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
import org.openapis.openapi.models.shared.HTTPHealthCheckWeightReportModeEnum;
import org.openapis.openapi.models.shared.HTTPSHealthCheck;
import org.openapis.openapi.models.shared.HTTPSHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.HTTPSHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.HTTPSHealthCheckWeightReportModeEnum;
import org.openapis.openapi.models.shared.HealthCheck;
import org.openapis.openapi.models.shared.HealthCheckLogConfig;
import org.openapis.openapi.models.shared.HealthCheckTypeEnum;
import org.openapis.openapi.models.shared.Http2HealthCheck;
import org.openapis.openapi.models.shared.Http2HealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.Http2HealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.Http2HealthCheckWeightReportModeEnum;
import org.openapis.openapi.models.shared.SSLHealthCheck;
import org.openapis.openapi.models.shared.SSLHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.SSLHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.TCPHealthCheck;
import org.openapis.openapi.models.shared.TCPHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.TCPHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.UDPHealthCheck;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHealthChecksPatchRequest req = new ComputeHealthChecksPatchRequest("veritatis", "enim") {{
                dollarXgafv = XgafvEnum.ONE;
                healthCheck1 = new HealthCheck() {{
                    checkIntervalSec = 380884;
                    creationTimestamp = "dolor";
                    description = "alias";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "libero";
                        port = 842683;
                        portName = "fuga";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                    }};;
                    healthyThreshold = 630668;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "repellat";
                        port = 840994;
                        portName = "accusamus";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "tempora";
                        response = "similique";
                        weightReportMode = Http2HealthCheckWeightReportModeEnum.DISABLE;
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "enim";
                        port = 677473;
                        portName = "aliquam";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "nesciunt";
                        response = "corrupti";
                        weightReportMode = HTTPHealthCheckWeightReportModeEnum.ENABLE;
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "inventore";
                        port = 642391;
                        portName = "in";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "fuga";
                        response = "quisquam";
                        weightReportMode = HTTPSHealthCheckWeightReportModeEnum.DISABLE;
                    }};;
                    id = "suscipit";
                    kind = "officia";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Dale Dickens";
                    region = "maiores";
                    selfLink = "provident";
                    selfLinkWithId = "dignissimos";
                    sourceRegions = new String[]{{
                        add("id"),
                    }};
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 502150;
                        portName = "repellat";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.NONE;
                        request = "nobis";
                        response = "placeat";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 651310;
                        portName = "architecto";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.NONE;
                        request = "commodi";
                        response = "delectus";
                    }};;
                    timeoutSec = 887137;
                    type = HealthCheckTypeEnum.INVALID;
                    udpHealthCheck = new UDPHealthCheck() {{
                        port = 407827;
                        portName = "ipsam";
                        request = "soluta";
                        response = "esse";
                    }};;
                    unhealthyThreshold = 113382;
                }};;
                accessToken = "beatae";
                alt = AltEnum.PROTO;
                callback = "voluptatem";
                fields = "blanditiis";
                key = "eligendi";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "deleniti";
                requestId = "deleniti";
                uploadType = "necessitatibus";
                uploadProtocol = "cumque";
                userIp = "iste";
            }};            

            ComputeHealthChecksPatchResponse res = sdk.healthChecks.computeHealthChecksPatch(req, new ComputeHealthChecksPatchSecurity() {{
                option1 = new ComputeHealthChecksPatchSecurityOption1("reiciendis", "nihil") {{
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

            ComputeHealthChecksTestIamPermissionsRequest req = new ComputeHealthChecksTestIamPermissionsRequest("libero", "perspiciatis") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("nemo"),
                        add("quis"),
                        add("doloremque"),
                    }};
                }};;
                accessToken = "similique";
                alt = AltEnum.MEDIA;
                callback = "quis";
                fields = "commodi";
                key = "eveniet";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "ratione";
                uploadProtocol = "velit";
                userIp = "soluta";
            }};            

            ComputeHealthChecksTestIamPermissionsResponse res = sdk.healthChecks.computeHealthChecksTestIamPermissions(req, new ComputeHealthChecksTestIamPermissionsSecurity() {{
                option1 = new ComputeHealthChecksTestIamPermissionsSecurityOption1("cum", "accusantium") {{
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
import org.openapis.openapi.models.shared.HTTPHealthCheckWeightReportModeEnum;
import org.openapis.openapi.models.shared.HTTPSHealthCheck;
import org.openapis.openapi.models.shared.HTTPSHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.HTTPSHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.HTTPSHealthCheckWeightReportModeEnum;
import org.openapis.openapi.models.shared.HealthCheck;
import org.openapis.openapi.models.shared.HealthCheckLogConfig;
import org.openapis.openapi.models.shared.HealthCheckTypeEnum;
import org.openapis.openapi.models.shared.Http2HealthCheck;
import org.openapis.openapi.models.shared.Http2HealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.Http2HealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.Http2HealthCheckWeightReportModeEnum;
import org.openapis.openapi.models.shared.SSLHealthCheck;
import org.openapis.openapi.models.shared.SSLHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.SSLHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.TCPHealthCheck;
import org.openapis.openapi.models.shared.TCPHealthCheckPortSpecificationEnum;
import org.openapis.openapi.models.shared.TCPHealthCheckProxyHeaderEnum;
import org.openapis.openapi.models.shared.UDPHealthCheck;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHealthChecksUpdateRequest req = new ComputeHealthChecksUpdateRequest("quo", "officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                healthCheck1 = new HealthCheck() {{
                    checkIntervalSec = 667943;
                    creationTimestamp = "fuga";
                    description = "autem";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "quis";
                        port = 265507;
                        portName = "consectetur";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                    }};;
                    healthyThreshold = 642434;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "cupiditate";
                        port = 525089;
                        portName = "ea";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "odio";
                        response = "eveniet";
                        weightReportMode = Http2HealthCheckWeightReportModeEnum.DISABLE;
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "dolore";
                        port = 790842;
                        portName = "mollitia";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "non";
                        response = "doloremque";
                        weightReportMode = HTTPHealthCheckWeightReportModeEnum.DRY_RUN;
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "natus";
                        port = 105102;
                        portName = "nemo";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "natus";
                        response = "nihil";
                        weightReportMode = HTTPSHealthCheckWeightReportModeEnum.DISABLE;
                    }};;
                    id = "et";
                    kind = "unde";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Herbert Legros";
                    region = "laudantium";
                    selfLink = "earum";
                    selfLinkWithId = "impedit";
                    sourceRegions = new String[]{{
                        add("reprehenderit"),
                        add("expedita"),
                        add("hic"),
                        add("occaecati"),
                    }};
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 20590;
                        portName = "non";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.NONE;
                        request = "architecto";
                        response = "dicta";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 25476;
                        portName = "ad";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.NONE;
                        request = "laudantium";
                        response = "excepturi";
                    }};;
                    timeoutSec = 4431;
                    type = HealthCheckTypeEnum.INVALID;
                    udpHealthCheck = new UDPHealthCheck() {{
                        port = 98172;
                        portName = "laboriosam";
                        request = "aspernatur";
                        response = "quod";
                    }};;
                    unhealthyThreshold = 379552;
                }};;
                accessToken = "tempore";
                alt = AltEnum.PROTO;
                callback = "harum";
                fields = "nisi";
                key = "blanditiis";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "doloremque";
                requestId = "doloribus";
                uploadType = "vel";
                uploadProtocol = "enim";
                userIp = "ducimus";
            }};            

            ComputeHealthChecksUpdateResponse res = sdk.healthChecks.computeHealthChecksUpdate(req, new ComputeHealthChecksUpdateSecurity() {{
                option1 = new ComputeHealthChecksUpdateSecurityOption1("quidem", "in") {{
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
