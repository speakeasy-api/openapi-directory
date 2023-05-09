# httpsHealthChecks

### Available Operations

* [computeHttpsHealthChecksDelete](#computehttpshealthchecksdelete) - Deletes the specified HttpsHealthCheck resource.
* [computeHttpsHealthChecksGet](#computehttpshealthchecksget) - Returns the specified HttpsHealthCheck resource.
* [computeHttpsHealthChecksInsert](#computehttpshealthchecksinsert) - Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
* [computeHttpsHealthChecksList](#computehttpshealthcheckslist) - Retrieves the list of HttpsHealthCheck resources available to the specified project.
* [computeHttpsHealthChecksPatch](#computehttpshealthcheckspatch) - Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeHttpsHealthChecksTestIamPermissions](#computehttpshealthcheckstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeHttpsHealthChecksUpdate](#computehttpshealthchecksupdate) - Updates a HttpsHealthCheck resource in the specified project using the data included in the request.

## computeHttpsHealthChecksDelete

Deletes the specified HttpsHealthCheck resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksDeleteRequest;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksDeleteResponse;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHttpsHealthChecksDeleteRequest req = new ComputeHttpsHealthChecksDeleteRequest("ad", "aperiam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "unde";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "error";
                key = "aliquam";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "ad";
                requestId = "cum";
                uploadType = "dolorum";
                uploadProtocol = "quod";
                userIp = "nihil";
            }};            

            ComputeHttpsHealthChecksDeleteResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksDelete(req, new ComputeHttpsHealthChecksDeleteSecurity() {{
                option1 = new ComputeHttpsHealthChecksDeleteSecurityOption1("quae", "ducimus") {{
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

## computeHttpsHealthChecksGet

Returns the specified HttpsHealthCheck resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksGetRequest;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksGetResponse;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksGetSecurity;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHttpsHealthChecksGetRequest req = new ComputeHttpsHealthChecksGetRequest("tenetur", "eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "repudiandae";
                key = "minus";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "autem";
                uploadProtocol = "eius";
                userIp = "unde";
            }};            

            ComputeHttpsHealthChecksGetResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksGet(req, new ComputeHttpsHealthChecksGetSecurity() {{
                option1 = new ComputeHttpsHealthChecksGetSecurityOption1("sunt", "amet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.httpsHealthCheck != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeHttpsHealthChecksInsert

Creates a HttpsHealthCheck resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksInsertRequest;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksInsertResponse;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksInsertSecurity;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HttpsHealthCheck1;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHttpsHealthChecksInsertRequest req = new ComputeHttpsHealthChecksInsertRequest("laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                httpsHealthCheck1 = new HttpsHealthCheck1() {{
                    checkIntervalSec = 954344;
                    creationTimestamp = "aliquid";
                    description = "qui";
                    healthyThreshold = 754041;
                    host = "perspiciatis";
                    id = "eum";
                    kind = "sint";
                    name = "Randall Schamberger";
                    port = 697056;
                    requestPath = "reprehenderit";
                    selfLink = "praesentium";
                    selfLinkWithId = "totam";
                    timeoutSec = 623602;
                    unhealthyThreshold = 3510;
                }};;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "sapiente";
                fields = "illum";
                key = "nesciunt";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "corrupti";
                requestId = "inventore";
                uploadType = "quibusdam";
                uploadProtocol = "culpa";
                userIp = "dicta";
            }};            

            ComputeHttpsHealthChecksInsertResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksInsert(req, new ComputeHttpsHealthChecksInsertSecurity() {{
                option1 = new ComputeHttpsHealthChecksInsertSecurityOption1("perferendis", "asperiores") {{
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

## computeHttpsHealthChecksList

Retrieves the list of HttpsHealthCheck resources available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksListRequest;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksListResponse;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksListSecurity;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHttpsHealthChecksListRequest req = new ComputeHttpsHealthChecksListRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "voluptatibus";
                filter = "iste";
                key = "amet";
                maxResults = 63982L;
                oauthToken = "pariatur";
                orderBy = "officia";
                pageToken = "velit";
                prettyPrint = false;
                quotaUser = "debitis";
                returnPartialSuccess = false;
                uploadType = "facere";
                uploadProtocol = "tempore";
                userIp = "minima";
            }};            

            ComputeHttpsHealthChecksListResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksList(req, new ComputeHttpsHealthChecksListSecurity() {{
                option1 = new ComputeHttpsHealthChecksListSecurityOption1("vitae", "repellat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.httpsHealthCheckList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeHttpsHealthChecksPatch

Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksPatchRequest;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksPatchResponse;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksPatchSecurity;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HttpsHealthCheck1;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHttpsHealthChecksPatchRequest req = new ComputeHttpsHealthChecksPatchRequest("est", "facere") {{
                dollarXgafv = XgafvEnum.TWO;
                httpsHealthCheck1 = new HttpsHealthCheck1() {{
                    checkIntervalSec = 254663;
                    creationTimestamp = "similique";
                    description = "optio";
                    healthyThreshold = 795162;
                    host = "sint";
                    id = "aliquam";
                    kind = "consectetur";
                    name = "Jean Douglas";
                    port = 166811;
                    requestPath = "ea";
                    selfLink = "quibusdam";
                    selfLinkWithId = "veritatis";
                    timeoutSec = 321932;
                    unhealthyThreshold = 242606;
                }};;
                accessToken = "quia";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "quos";
                key = "velit";
                oauthToken = "ratione";
                prettyPrint = false;
                quotaUser = "fuga";
                requestId = "minima";
                uploadType = "aliquid";
                uploadProtocol = "facere";
                userIp = "laboriosam";
            }};            

            ComputeHttpsHealthChecksPatchResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksPatch(req, new ComputeHttpsHealthChecksPatchSecurity() {{
                option1 = new ComputeHttpsHealthChecksPatchSecurityOption1("sint", "architecto") {{
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

## computeHttpsHealthChecksTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHttpsHealthChecksTestIamPermissionsRequest req = new ComputeHttpsHealthChecksTestIamPermissionsRequest("totam", "alias") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("iure"),
                        add("consequatur"),
                        add("accusamus"),
                        add("cum"),
                    }};
                }};;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "ex";
                fields = "autem";
                key = "nostrum";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "eum";
                uploadProtocol = "molestias";
                userIp = "fuga";
            }};            

            ComputeHttpsHealthChecksTestIamPermissionsResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksTestIamPermissions(req, new ComputeHttpsHealthChecksTestIamPermissionsSecurity() {{
                option1 = new ComputeHttpsHealthChecksTestIamPermissionsSecurityOption1("non", "nam") {{
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

## computeHttpsHealthChecksUpdate

Updates a HttpsHealthCheck resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksUpdateRequest;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksUpdateResponse;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHttpsHealthChecksUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HttpsHealthCheck1;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHttpsHealthChecksUpdateRequest req = new ComputeHttpsHealthChecksUpdateRequest("totam", "ut") {{
                dollarXgafv = XgafvEnum.ONE;
                httpsHealthCheck1 = new HttpsHealthCheck1() {{
                    checkIntervalSec = 849421;
                    creationTimestamp = "adipisci";
                    description = "totam";
                    healthyThreshold = 129141;
                    host = "quibusdam";
                    id = "harum";
                    kind = "itaque";
                    name = "Kurt Hane";
                    port = 547140;
                    requestPath = "minus";
                    selfLink = "autem";
                    selfLinkWithId = "aut";
                    timeoutSec = 391499;
                    unhealthyThreshold = 332831;
                }};;
                accessToken = "cupiditate";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "atque";
                key = "minus";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "neque";
                requestId = "doloremque";
                uploadType = "tempora";
                uploadProtocol = "quibusdam";
                userIp = "deleniti";
            }};            

            ComputeHttpsHealthChecksUpdateResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksUpdate(req, new ComputeHttpsHealthChecksUpdateSecurity() {{
                option1 = new ComputeHttpsHealthChecksUpdateSecurityOption1("quas", "magnam") {{
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
