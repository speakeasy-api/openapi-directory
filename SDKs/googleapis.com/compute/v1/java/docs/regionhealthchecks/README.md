# regionHealthChecks

### Available Operations

* [computeRegionHealthChecksDelete](#computeregionhealthchecksdelete) - Deletes the specified HealthCheck resource.
* [computeRegionHealthChecksGet](#computeregionhealthchecksget) - Returns the specified HealthCheck resource.
* [computeRegionHealthChecksInsert](#computeregionhealthchecksinsert) - Creates a HealthCheck resource in the specified project using the data included in the request.
* [computeRegionHealthChecksList](#computeregionhealthcheckslist) - Retrieves the list of HealthCheck resources available to the specified project.
* [computeRegionHealthChecksPatch](#computeregionhealthcheckspatch) - Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
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

            ComputeRegionHealthChecksDeleteRequest req = new ComputeRegionHealthChecksDeleteRequest("pariatur", "earum", "itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "dignissimos";
                key = "deserunt";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "totam";
                requestId = "dolor";
                uploadType = "saepe";
                uploadProtocol = "ipsa";
                userIp = "quod";
            }};            

            ComputeRegionHealthChecksDeleteResponse res = sdk.regionHealthChecks.computeRegionHealthChecksDelete(req, new ComputeRegionHealthChecksDeleteSecurity() {{
                option1 = new ComputeRegionHealthChecksDeleteSecurityOption1("harum", "blanditiis") {{
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

            ComputeRegionHealthChecksGetRequest req = new ComputeRegionHealthChecksGetRequest("exercitationem", "ab", "accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "aliquam";
                key = "distinctio";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "est";
                uploadProtocol = "quam";
                userIp = "tempora";
            }};            

            ComputeRegionHealthChecksGetResponse res = sdk.regionHealthChecks.computeRegionHealthChecksGet(req, new ComputeRegionHealthChecksGetSecurity() {{
                option1 = new ComputeRegionHealthChecksGetSecurityOption1("quidem", "ullam") {{
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

            ComputeRegionHealthChecksInsertRequest req = new ComputeRegionHealthChecksInsertRequest("ut", "inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                healthCheck = new HealthCheck() {{
                    checkIntervalSec = 249688;
                    creationTimestamp = "doloremque";
                    description = "ad";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "vitae";
                        port = 641948;
                        portName = "magnam";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                    }};;
                    healthyThreshold = 227896;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "dolorum";
                        port = 575611;
                        portName = "dicta";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "sunt";
                        response = "similique";
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "odio";
                        port = 577473;
                        portName = "eaque";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "cum";
                        response = "molestiae";
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "consectetur";
                        port = 857234;
                        portName = "quod";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "saepe";
                        response = "earum";
                    }};;
                    id = "culpa";
                    kind = "porro";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Ida Mraz";
                    region = "similique";
                    selfLink = "quam";
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 267518;
                        portName = "officiis";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.NONE;
                        request = "minima";
                        response = "voluptatum";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 130136;
                        portName = "tempore";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.PROXY_V1;
                        request = "id";
                        response = "sint";
                    }};;
                    timeoutSec = 264711;
                    type = HealthCheckTypeEnum.HTTPS;
                    unhealthyThreshold = 851576;
                }};;
                accessToken = "quam";
                alt = AltEnum.PROTO;
                callback = "nobis";
                fields = "vitae";
                key = "ducimus";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "possimus";
                requestId = "reiciendis";
                uploadType = "in";
                uploadProtocol = "assumenda";
                userIp = "optio";
            }};            

            ComputeRegionHealthChecksInsertResponse res = sdk.regionHealthChecks.computeRegionHealthChecksInsert(req, new ComputeRegionHealthChecksInsertSecurity() {{
                option1 = new ComputeRegionHealthChecksInsertSecurityOption1("at", "occaecati") {{
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

            ComputeRegionHealthChecksListRequest req = new ComputeRegionHealthChecksListRequest("eius", "amet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "assumenda";
                filter = "amet";
                key = "architecto";
                maxResults = 267531L;
                oauthToken = "fuga";
                orderBy = "quidem";
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "quas";
                returnPartialSuccess = false;
                uploadType = "eius";
                uploadProtocol = "praesentium";
                userIp = "culpa";
            }};            

            ComputeRegionHealthChecksListResponse res = sdk.regionHealthChecks.computeRegionHealthChecksList(req, new ComputeRegionHealthChecksListSecurity() {{
                option1 = new ComputeRegionHealthChecksListSecurityOption1("voluptatibus", "eveniet") {{
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

            ComputeRegionHealthChecksPatchRequest req = new ComputeRegionHealthChecksPatchRequest("rem", "iste", "voluptatem") {{
                dollarXgafv = XgafvEnum.ONE;
                healthCheck1 = new HealthCheck() {{
                    checkIntervalSec = 703873;
                    creationTimestamp = "aliquam";
                    description = "atque";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "exercitationem";
                        port = 245570;
                        portName = "quaerat";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                    }};;
                    healthyThreshold = 684408;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "ipsum";
                        port = 950003;
                        portName = "quo";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.NONE;
                        requestPath = "quisquam";
                        response = "inventore";
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "hic";
                        port = 801960;
                        portName = "voluptas";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "est";
                        response = "eligendi";
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "at";
                        port = 734991;
                        portName = "alias";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "modi";
                        response = "corrupti";
                    }};;
                    id = "facilis";
                    kind = "aliquam";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Stella Spinka";
                    region = "accusamus";
                    selfLink = "excepturi";
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 378727;
                        portName = "ipsum";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.PROXY_V1;
                        request = "doloremque";
                        response = "consectetur";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 910949;
                        portName = "quaerat";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.NONE;
                        request = "assumenda";
                        response = "totam";
                    }};;
                    timeoutSec = 581248;
                    type = HealthCheckTypeEnum.HTTPS;
                    unhealthyThreshold = 40954;
                }};;
                accessToken = "alias";
                alt = AltEnum.JSON;
                callback = "nulla";
                fields = "eveniet";
                key = "sit";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "accusamus";
                requestId = "maiores";
                uploadType = "possimus";
                uploadProtocol = "magnam";
                userIp = "earum";
            }};            

            ComputeRegionHealthChecksPatchResponse res = sdk.regionHealthChecks.computeRegionHealthChecksPatch(req, new ComputeRegionHealthChecksPatchSecurity() {{
                option1 = new ComputeRegionHealthChecksPatchSecurityOption1("inventore", "enim") {{
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

            ComputeRegionHealthChecksUpdateRequest req = new ComputeRegionHealthChecksUpdateRequest("sapiente", "eos", "neque") {{
                dollarXgafv = XgafvEnum.ONE;
                healthCheck1 = new HealthCheck() {{
                    checkIntervalSec = 213062;
                    creationTimestamp = "harum";
                    description = "amet";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "quia";
                        port = 351175;
                        portName = "magni";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                    }};;
                    healthyThreshold = 230393;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "laudantium";
                        port = 278619;
                        portName = "quae";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.NONE;
                        requestPath = "omnis";
                        response = "eius";
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "laudantium";
                        port = 663228;
                        portName = "mollitia";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "soluta";
                        response = "fugiat";
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "dolorum";
                        port = 36726;
                        portName = "odit";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "laboriosam";
                        response = "veniam";
                    }};;
                    id = "quisquam";
                    kind = "fugit";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Betty Monahan";
                    region = "fugiat";
                    selfLink = "consectetur";
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 255015;
                        portName = "minima";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.NONE;
                        request = "unde";
                        response = "soluta";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 715435;
                        portName = "accusamus";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.NONE;
                        request = "maxime";
                        response = "mollitia";
                    }};;
                    timeoutSec = 611057;
                    type = HealthCheckTypeEnum.HTTPS;
                    unhealthyThreshold = 67247;
                }};;
                accessToken = "saepe";
                alt = AltEnum.JSON;
                callback = "fuga";
                fields = "dignissimos";
                key = "autem";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "occaecati";
                requestId = "nemo";
                uploadType = "explicabo";
                uploadProtocol = "eaque";
                userIp = "consequuntur";
            }};            

            ComputeRegionHealthChecksUpdateResponse res = sdk.regionHealthChecks.computeRegionHealthChecksUpdate(req, new ComputeRegionHealthChecksUpdateSecurity() {{
                option1 = new ComputeRegionHealthChecksUpdateSecurityOption1("tempore", "dolor") {{
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
