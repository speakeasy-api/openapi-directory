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

            ComputeRegionHealthChecksDeleteRequest req = new ComputeRegionHealthChecksDeleteRequest("consequuntur", "eligendi", "aut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "eaque";
                fields = "dolore";
                key = "et";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "ipsum";
                requestId = "culpa";
                uploadType = "aliquid";
                uploadProtocol = "aut";
                userIp = "architecto";
            }};            

            ComputeRegionHealthChecksDeleteResponse res = sdk.regionHealthChecks.computeRegionHealthChecksDelete(req, new ComputeRegionHealthChecksDeleteSecurity() {{
                option1 = new ComputeRegionHealthChecksDeleteSecurityOption1("eos", "similique") {{
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

            ComputeRegionHealthChecksGetRequest req = new ComputeRegionHealthChecksGetRequest("temporibus", "quidem", "quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "repellendus";
                key = "nulla";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "dignissimos";
                uploadProtocol = "quos";
                userIp = "ex";
            }};            

            ComputeRegionHealthChecksGetResponse res = sdk.regionHealthChecks.computeRegionHealthChecksGet(req, new ComputeRegionHealthChecksGetSecurity() {{
                option1 = new ComputeRegionHealthChecksGetSecurityOption1("cum", "reprehenderit") {{
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

            ComputeRegionHealthChecksInsertRequest req = new ComputeRegionHealthChecksInsertRequest("earum", "qui") {{
                dollarXgafv = XgafvEnum.TWO;
                healthCheck = new HealthCheck() {{
                    checkIntervalSec = 362710;
                    creationTimestamp = "asperiores";
                    description = "qui";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "saepe";
                        port = 15157;
                        portName = "omnis";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                    }};;
                    healthyThreshold = 430974;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "repudiandae";
                        port = 34672;
                        portName = "ratione";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "numquam";
                        response = "sed";
                        weightReportMode = Http2HealthCheckWeightReportModeEnum.DRY_RUN;
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "nam";
                        port = 325550;
                        portName = "dolor";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "sunt";
                        response = "nemo";
                        weightReportMode = HTTPHealthCheckWeightReportModeEnum.ENABLE;
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "quisquam";
                        port = 421478;
                        portName = "unde";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "beatae";
                        response = "temporibus";
                        weightReportMode = HTTPSHealthCheckWeightReportModeEnum.DRY_RUN;
                    }};;
                    id = "ullam";
                    kind = "nemo";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Mrs. Antonia Stokes";
                    region = "suscipit";
                    selfLink = "exercitationem";
                    selfLinkWithId = "consectetur";
                    sourceRegions = new String[]{{
                        add("voluptate"),
                        add("voluptate"),
                        add("quisquam"),
                    }};
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 74461;
                        portName = "sed";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.NONE;
                        request = "odio";
                        response = "officia";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 384897;
                        portName = "accusamus";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.PROXY_V1;
                        request = "qui";
                        response = "ullam";
                    }};;
                    timeoutSec = 938584;
                    type = HealthCheckTypeEnum.GRPC;
                    udpHealthCheck = new UDPHealthCheck() {{
                        port = 455936;
                        portName = "similique";
                        request = "aliquam";
                        response = "hic";
                    }};;
                    unhealthyThreshold = 395634;
                }};;
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "accusantium";
                key = "culpa";
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "dolores";
                requestId = "sit";
                uploadType = "et";
                uploadProtocol = "vero";
                userIp = "minima";
            }};            

            ComputeRegionHealthChecksInsertResponse res = sdk.regionHealthChecks.computeRegionHealthChecksInsert(req, new ComputeRegionHealthChecksInsertSecurity() {{
                option1 = new ComputeRegionHealthChecksInsertSecurityOption1("tempora", "quibusdam") {{
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

            ComputeRegionHealthChecksListRequest req = new ComputeRegionHealthChecksListRequest("aperiam", "ea") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "beatae";
                alt = AltEnum.PROTO;
                callback = "culpa";
                fields = "earum";
                filter = "ex";
                key = "temporibus";
                maxResults = 160742L;
                oauthToken = "quae";
                orderBy = "sint";
                pageToken = "dolore";
                prettyPrint = false;
                quotaUser = "quisquam";
                returnPartialSuccess = false;
                uploadType = "maxime";
                uploadProtocol = "recusandae";
                userIp = "quod";
            }};            

            ComputeRegionHealthChecksListResponse res = sdk.regionHealthChecks.computeRegionHealthChecksList(req, new ComputeRegionHealthChecksListSecurity() {{
                option1 = new ComputeRegionHealthChecksListSecurityOption1("ipsum", "velit") {{
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

            ComputeRegionHealthChecksPatchRequest req = new ComputeRegionHealthChecksPatchRequest("alias", "expedita", "modi") {{
                dollarXgafv = XgafvEnum.TWO;
                healthCheck1 = new HealthCheck() {{
                    checkIntervalSec = 784235;
                    creationTimestamp = "tempora";
                    description = "in";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "aspernatur";
                        port = 624818;
                        portName = "veritatis";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                    }};;
                    healthyThreshold = 660800;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "numquam";
                        port = 616841;
                        portName = "dignissimos";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "blanditiis";
                        response = "in";
                        weightReportMode = Http2HealthCheckWeightReportModeEnum.ENABLE;
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "quis";
                        port = 216725;
                        portName = "magni";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "cum";
                        response = "dicta";
                        weightReportMode = HTTPHealthCheckWeightReportModeEnum.DRY_RUN;
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "eum";
                        port = 721609;
                        portName = "quis";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "deleniti";
                        response = "itaque";
                        weightReportMode = HTTPSHealthCheckWeightReportModeEnum.DISABLE;
                    }};;
                    id = "tenetur";
                    kind = "consectetur";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Mr. Kristine Casper";
                    region = "ipsam";
                    selfLink = "temporibus";
                    selfLinkWithId = "dolorum";
                    sourceRegions = new String[]{{
                        add("cumque"),
                        add("atque"),
                        add("consectetur"),
                    }};
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 299209;
                        portName = "nemo";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.PROXY_V1;
                        request = "eius";
                        response = "corrupti";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 385965;
                        portName = "quo";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.NONE;
                        request = "corporis";
                        response = "fugit";
                    }};;
                    timeoutSec = 530086;
                    type = HealthCheckTypeEnum.UDP;
                    udpHealthCheck = new UDPHealthCheck() {{
                        port = 852517;
                        portName = "illo";
                        request = "totam";
                        response = "quos";
                    }};;
                    unhealthyThreshold = 405768;
                }};;
                accessToken = "nostrum";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "aliquam";
                key = "amet";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "ullam";
                requestId = "et";
                uploadType = "quod";
                uploadProtocol = "deleniti";
                userIp = "enim";
            }};            

            ComputeRegionHealthChecksPatchResponse res = sdk.regionHealthChecks.computeRegionHealthChecksPatch(req, new ComputeRegionHealthChecksPatchSecurity() {{
                option1 = new ComputeRegionHealthChecksPatchSecurityOption1("fugiat", "repellat") {{
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

            ComputeRegionHealthChecksTestIamPermissionsRequest req = new ComputeRegionHealthChecksTestIamPermissionsRequest("dolore", "eveniet", "distinctio") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("natus"),
                        add("dicta"),
                        add("qui"),
                        add("nisi"),
                    }};
                }};;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "voluptate";
                key = "modi";
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "nihil";
                uploadProtocol = "quam";
                userIp = "fuga";
            }};            

            ComputeRegionHealthChecksTestIamPermissionsResponse res = sdk.regionHealthChecks.computeRegionHealthChecksTestIamPermissions(req, new ComputeRegionHealthChecksTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionHealthChecksTestIamPermissionsSecurityOption1("aliquam", "molestiae") {{
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

            ComputeRegionHealthChecksUpdateRequest req = new ComputeRegionHealthChecksUpdateRequest("sunt", "ullam", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                healthCheck1 = new HealthCheck() {{
                    checkIntervalSec = 641592;
                    creationTimestamp = "aut";
                    description = "dignissimos";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "laboriosam";
                        port = 483568;
                        portName = "repudiandae";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                    }};;
                    healthyThreshold = 46134;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "adipisci";
                        port = 515994;
                        portName = "similique";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.NONE;
                        requestPath = "quia";
                        response = "repudiandae";
                        weightReportMode = Http2HealthCheckWeightReportModeEnum.DISABLE;
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "aliquam";
                        port = 415903;
                        portName = "modi";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "molestiae";
                        response = "minima";
                        weightReportMode = HTTPHealthCheckWeightReportModeEnum.DISABLE;
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "perferendis";
                        port = 804767;
                        portName = "aliquam";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "at";
                        response = "cumque";
                        weightReportMode = HTTPSHealthCheckWeightReportModeEnum.DRY_RUN;
                    }};;
                    id = "culpa";
                    kind = "voluptates";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Marco Becker";
                    region = "repellat";
                    selfLink = "illo";
                    selfLinkWithId = "inventore";
                    sourceRegions = new String[]{{
                        add("voluptatum"),
                        add("perferendis"),
                        add("aspernatur"),
                    }};
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 661363;
                        portName = "beatae";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.NONE;
                        request = "magni";
                        response = "excepturi";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 742852;
                        portName = "quasi";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.NONE;
                        request = "nulla";
                        response = "illum";
                    }};;
                    timeoutSec = 536647;
                    type = HealthCheckTypeEnum.HTTPS;
                    udpHealthCheck = new UDPHealthCheck() {{
                        port = 981168;
                        portName = "ducimus";
                        request = "veniam";
                        response = "non";
                    }};;
                    unhealthyThreshold = 422911;
                }};;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "nemo";
                key = "necessitatibus";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "cumque";
                requestId = "commodi";
                uploadType = "aut";
                uploadProtocol = "suscipit";
                userIp = "corrupti";
            }};            

            ComputeRegionHealthChecksUpdateResponse res = sdk.regionHealthChecks.computeRegionHealthChecksUpdate(req, new ComputeRegionHealthChecksUpdateSecurity() {{
                option1 = new ComputeRegionHealthChecksUpdateSecurityOption1("sed", "placeat") {{
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
