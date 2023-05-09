# healthChecks

### Available Operations

* [computeHealthChecksAggregatedList](#computehealthchecksaggregatedlist) - Retrieves the list of all HealthCheck resources, regional and global, available to the specified project.
* [computeHealthChecksDelete](#computehealthchecksdelete) - Deletes the specified HealthCheck resource.
* [computeHealthChecksGet](#computehealthchecksget) - Returns the specified HealthCheck resource.
* [computeHealthChecksInsert](#computehealthchecksinsert) - Creates a HealthCheck resource in the specified project using the data included in the request.
* [computeHealthChecksList](#computehealthcheckslist) - Retrieves the list of HealthCheck resources available to the specified project.
* [computeHealthChecksPatch](#computehealthcheckspatch) - Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
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

            ComputeHealthChecksAggregatedListRequest req = new ComputeHealthChecksAggregatedListRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptates";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "ut";
                filter = "non";
                includeAllScopes = false;
                key = "laboriosam";
                maxResults = 37044L;
                oauthToken = "tempora";
                orderBy = "aliquam";
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "expedita";
                returnPartialSuccess = false;
                uploadType = "impedit";
                uploadProtocol = "architecto";
                userIp = "minima";
            }};            

            ComputeHealthChecksAggregatedListResponse res = sdk.healthChecks.computeHealthChecksAggregatedList(req, new ComputeHealthChecksAggregatedListSecurity() {{
                option1 = new ComputeHealthChecksAggregatedListSecurityOption1("magnam", "vitae") {{
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

            ComputeHealthChecksDeleteRequest req = new ComputeHealthChecksDeleteRequest("quos", "atque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "corporis";
                fields = "vel";
                key = "accusamus";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "ipsam";
                requestId = "at";
                uploadType = "culpa";
                uploadProtocol = "nihil";
                userIp = "laudantium";
            }};            

            ComputeHealthChecksDeleteResponse res = sdk.healthChecks.computeHealthChecksDelete(req, new ComputeHealthChecksDeleteSecurity() {{
                option1 = new ComputeHealthChecksDeleteSecurityOption1("dolorem", "odit") {{
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

            ComputeHealthChecksGetRequest req = new ComputeHealthChecksGetRequest("officiis", "mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugiat";
                alt = AltEnum.MEDIA;
                callback = "et";
                fields = "odio";
                key = "eligendi";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "aperiam";
                uploadProtocol = "pariatur";
                userIp = "ad";
            }};            

            ComputeHealthChecksGetResponse res = sdk.healthChecks.computeHealthChecksGet(req, new ComputeHealthChecksGetSecurity() {{
                option1 = new ComputeHealthChecksGetSecurityOption1("architecto", "culpa") {{
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

            ComputeHealthChecksInsertRequest req = new ComputeHealthChecksInsertRequest("aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                healthCheck = new HealthCheck() {{
                    checkIntervalSec = 694292;
                    creationTimestamp = "doloribus";
                    description = "sit";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "architecto";
                        port = 734076;
                        portName = "deserunt";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                    }};;
                    healthyThreshold = 546199;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "voluptate";
                        port = 3201;
                        portName = "iure";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.NONE;
                        requestPath = "ea";
                        response = "alias";
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "laudantium";
                        port = 186303;
                        portName = "libero";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "pariatur";
                        response = "quod";
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "modi";
                        port = 114341;
                        portName = "delectus";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "at";
                        response = "magnam";
                    }};;
                    id = "officiis";
                    kind = "sed";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Alonzo Green";
                    region = "minima";
                    selfLink = "impedit";
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 703431;
                        portName = "amet";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.PROXY_V1;
                        request = "beatae";
                        response = "dignissimos";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 392692;
                        portName = "consectetur";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.PROXY_V1;
                        request = "sunt";
                        response = "repudiandae";
                    }};;
                    timeoutSec = 818273;
                    type = HealthCheckTypeEnum.SSL;
                    unhealthyThreshold = 497363;
                }};;
                accessToken = "atque";
                alt = AltEnum.JSON;
                callback = "nemo";
                fields = "provident";
                key = "accusamus";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "impedit";
                requestId = "minima";
                uploadType = "cumque";
                uploadProtocol = "rerum";
                userIp = "praesentium";
            }};            

            ComputeHealthChecksInsertResponse res = sdk.healthChecks.computeHealthChecksInsert(req, new ComputeHealthChecksInsertSecurity() {{
                option1 = new ComputeHealthChecksInsertSecurityOption1("vel", "doloremque") {{
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

            ComputeHealthChecksListRequest req = new ComputeHealthChecksListRequest("delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "ullam";
                fields = "praesentium";
                filter = "perferendis";
                key = "soluta";
                maxResults = 657520L;
                oauthToken = "molestiae";
                orderBy = "nesciunt";
                pageToken = "quas";
                prettyPrint = false;
                quotaUser = "sunt";
                returnPartialSuccess = false;
                uploadType = "aperiam";
                uploadProtocol = "itaque";
                userIp = "quaerat";
            }};            

            ComputeHealthChecksListResponse res = sdk.healthChecks.computeHealthChecksList(req, new ComputeHealthChecksListSecurity() {{
                option1 = new ComputeHealthChecksListSecurityOption1("repellat", "necessitatibus") {{
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

            ComputeHealthChecksPatchRequest req = new ComputeHealthChecksPatchRequest("tempora", "quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                healthCheck1 = new HealthCheck() {{
                    checkIntervalSec = 453562;
                    creationTimestamp = "magni";
                    description = "excepturi";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "esse";
                        port = 765463;
                        portName = "pariatur";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                    }};;
                    healthyThreshold = 701506;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "illo";
                        port = 846332;
                        portName = "nulla";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "libero";
                        response = "impedit";
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "repudiandae";
                        port = 170819;
                        portName = "ut";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "voluptate";
                        response = "aliquid";
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "blanditiis";
                        port = 290226;
                        portName = "repudiandae";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "exercitationem";
                        response = "voluptatem";
                    }};;
                    id = "beatae";
                    kind = "qui";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Miss Mona King";
                    region = "tenetur";
                    selfLink = "facilis";
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 817057;
                        portName = "aut";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.PROXY_V1;
                        request = "molestiae";
                        response = "quaerat";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 719317;
                        portName = "blanditiis";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.NONE;
                        request = "ab";
                        response = "unde";
                    }};;
                    timeoutSec = 365473;
                    type = HealthCheckTypeEnum.HTTP;
                    unhealthyThreshold = 697915;
                }};;
                accessToken = "ut";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "nulla";
                key = "nesciunt";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "labore";
                requestId = "sequi";
                uploadType = "veritatis";
                uploadProtocol = "veniam";
                userIp = "unde";
            }};            

            ComputeHealthChecksPatchResponse res = sdk.healthChecks.computeHealthChecksPatch(req, new ComputeHealthChecksPatchSecurity() {{
                option1 = new ComputeHealthChecksPatchSecurityOption1("assumenda", "adipisci") {{
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

            ComputeHealthChecksUpdateRequest req = new ComputeHealthChecksUpdateRequest("velit", "accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                healthCheck1 = new HealthCheck() {{
                    checkIntervalSec = 591367;
                    creationTimestamp = "nostrum";
                    description = "dolor";
                    grpcHealthCheck = new GRPCHealthCheck() {{
                        grpcServiceName = "quod";
                        port = 7287;
                        portName = "accusantium";
                        portSpecification = GRPCHealthCheckPortSpecificationEnum.USE_FIXED_PORT;
                    }};;
                    healthyThreshold = 73787;
                    http2HealthCheck = new Http2HealthCheck() {{
                        host = "amet";
                        port = 578452;
                        portName = "quos";
                        portSpecification = Http2HealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = Http2HealthCheckProxyHeaderEnum.NONE;
                        requestPath = "culpa";
                        response = "fuga";
                    }};;
                    httpHealthCheck = new HTTPHealthCheck() {{
                        host = "modi";
                        port = 88777;
                        portName = "eveniet";
                        portSpecification = HTTPHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = HTTPHealthCheckProxyHeaderEnum.PROXY_V1;
                        requestPath = "adipisci";
                        response = "ab";
                    }};;
                    httpsHealthCheck = new HTTPSHealthCheck() {{
                        host = "maxime";
                        port = 783906;
                        portName = "explicabo";
                        portSpecification = HTTPSHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = HTTPSHealthCheckProxyHeaderEnum.NONE;
                        requestPath = "hic";
                        response = "porro";
                    }};;
                    id = "tempore";
                    kind = "ullam";
                    logConfig = new HealthCheckLogConfig() {{
                        enable = false;
                    }};;
                    name = "Adrienne Mayer";
                    region = "et";
                    selfLink = "reiciendis";
                    sslHealthCheck = new SSLHealthCheck() {{
                        port = 971050;
                        portName = "distinctio";
                        portSpecification = SSLHealthCheckPortSpecificationEnum.USE_SERVING_PORT;
                        proxyHeader = SSLHealthCheckProxyHeaderEnum.PROXY_V1;
                        request = "quod";
                        response = "quidem";
                    }};;
                    tcpHealthCheck = new TCPHealthCheck() {{
                        port = 838374;
                        portName = "iure";
                        portSpecification = TCPHealthCheckPortSpecificationEnum.USE_NAMED_PORT;
                        proxyHeader = TCPHealthCheckProxyHeaderEnum.NONE;
                        request = "repudiandae";
                        response = "earum";
                    }};;
                    timeoutSec = 415787;
                    type = HealthCheckTypeEnum.HTTP2;
                    unhealthyThreshold = 893425;
                }};;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "porro";
                key = "quisquam";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "mollitia";
                requestId = "quidem";
                uploadType = "delectus";
                uploadProtocol = "eum";
                userIp = "beatae";
            }};            

            ComputeHealthChecksUpdateResponse res = sdk.healthChecks.computeHealthChecksUpdate(req, new ComputeHealthChecksUpdateSecurity() {{
                option1 = new ComputeHealthChecksUpdateSecurityOption1("suscipit", "eveniet") {{
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
