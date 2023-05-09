# httpHealthChecks

### Available Operations

* [computeHttpHealthChecksDelete](#computehttphealthchecksdelete) - Deletes the specified HttpHealthCheck resource.
* [computeHttpHealthChecksGet](#computehttphealthchecksget) - Returns the specified HttpHealthCheck resource.
* [computeHttpHealthChecksInsert](#computehttphealthchecksinsert) - Creates a HttpHealthCheck resource in the specified project using the data included in the request.
* [computeHttpHealthChecksList](#computehttphealthcheckslist) - Retrieves the list of HttpHealthCheck resources available to the specified project.
* [computeHttpHealthChecksPatch](#computehttphealthcheckspatch) - Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeHttpHealthChecksTestIamPermissions](#computehttphealthcheckstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeHttpHealthChecksUpdate](#computehttphealthchecksupdate) - Updates a HttpHealthCheck resource in the specified project using the data included in the request.

## computeHttpHealthChecksDelete

Deletes the specified HttpHealthCheck resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksDeleteRequest;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksDeleteResponse;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHttpHealthChecksDeleteRequest req = new ComputeHttpHealthChecksDeleteRequest("at", "alias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "numquam";
                fields = "praesentium";
                key = "aperiam";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "blanditiis";
                requestId = "at";
                uploadType = "repudiandae";
                uploadProtocol = "ipsum";
                userIp = "voluptatem";
            }};            

            ComputeHttpHealthChecksDeleteResponse res = sdk.httpHealthChecks.computeHttpHealthChecksDelete(req, new ComputeHttpHealthChecksDeleteSecurity() {{
                option1 = new ComputeHttpHealthChecksDeleteSecurityOption1("tenetur", "aut") {{
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

## computeHttpHealthChecksGet

Returns the specified HttpHealthCheck resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksGetRequest;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksGetResponse;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksGetSecurity;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHttpHealthChecksGetRequest req = new ComputeHttpHealthChecksGetRequest("ex", "cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "atque";
                alt = AltEnum.JSON;
                callback = "aut";
                fields = "commodi";
                key = "architecto";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "unde";
                uploadProtocol = "voluptate";
                userIp = "debitis";
            }};            

            ComputeHttpHealthChecksGetResponse res = sdk.httpHealthChecks.computeHttpHealthChecksGet(req, new ComputeHttpHealthChecksGetSecurity() {{
                option1 = new ComputeHttpHealthChecksGetSecurityOption1("sunt", "ad") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.httpHealthCheck != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeHttpHealthChecksInsert

Creates a HttpHealthCheck resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksInsertRequest;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksInsertResponse;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksInsertSecurity;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HttpHealthCheck1;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHttpHealthChecksInsertRequest req = new ComputeHttpHealthChecksInsertRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                httpHealthCheck1 = new HttpHealthCheck1() {{
                    checkIntervalSec = 611423;
                    creationTimestamp = "molestiae";
                    description = "minima";
                    healthyThreshold = 90067;
                    host = "sit";
                    id = "quibusdam";
                    kind = "culpa";
                    name = "Mr. Kenneth Fay";
                    port = 591082;
                    requestPath = "fugit";
                    selfLink = "nobis";
                    selfLinkWithId = "optio";
                    timeoutSec = 387067;
                    unhealthyThreshold = 93445;
                }};;
                accessToken = "porro";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "in";
                key = "eaque";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "distinctio";
                requestId = "soluta";
                uploadType = "sint";
                uploadProtocol = "odio";
                userIp = "repudiandae";
            }};            

            ComputeHttpHealthChecksInsertResponse res = sdk.httpHealthChecks.computeHttpHealthChecksInsert(req, new ComputeHttpHealthChecksInsertSecurity() {{
                option1 = new ComputeHttpHealthChecksInsertSecurityOption1("accusamus", "quasi") {{
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

## computeHttpHealthChecksList

Retrieves the list of HttpHealthCheck resources available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksListRequest;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksListResponse;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksListSecurity;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHttpHealthChecksListRequest req = new ComputeHttpHealthChecksListRequest("accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugiat";
                alt = AltEnum.MEDIA;
                callback = "sed";
                fields = "fugiat";
                filter = "recusandae";
                key = "neque";
                maxResults = 326041L;
                oauthToken = "tenetur";
                orderBy = "praesentium";
                pageToken = "officiis";
                prettyPrint = false;
                quotaUser = "sit";
                returnPartialSuccess = false;
                uploadType = "quasi";
                uploadProtocol = "libero";
                userIp = "tenetur";
            }};            

            ComputeHttpHealthChecksListResponse res = sdk.httpHealthChecks.computeHttpHealthChecksList(req, new ComputeHttpHealthChecksListSecurity() {{
                option1 = new ComputeHttpHealthChecksListSecurityOption1("dolorem", "adipisci") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.httpHealthCheckList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeHttpHealthChecksPatch

Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksPatchRequest;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksPatchResponse;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksPatchSecurity;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HttpHealthCheck1;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHttpHealthChecksPatchRequest req = new ComputeHttpHealthChecksPatchRequest("voluptates", "similique") {{
                dollarXgafv = XgafvEnum.TWO;
                httpHealthCheck1 = new HttpHealthCheck1() {{
                    checkIntervalSec = 695002;
                    creationTimestamp = "ut";
                    description = "veniam";
                    healthyThreshold = 260908;
                    host = "quae";
                    id = "dolores";
                    kind = "dolorum";
                    name = "Mrs. Willie Kessler";
                    port = 952820;
                    requestPath = "vitae";
                    selfLink = "maxime";
                    selfLinkWithId = "placeat";
                    timeoutSec = 586303;
                    unhealthyThreshold = 989079;
                }};;
                accessToken = "maxime";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "deserunt";
                key = "laborum";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "ad";
                requestId = "voluptates";
                uploadType = "harum";
                uploadProtocol = "quaerat";
                userIp = "delectus";
            }};            

            ComputeHttpHealthChecksPatchResponse res = sdk.httpHealthChecks.computeHttpHealthChecksPatch(req, new ComputeHttpHealthChecksPatchSecurity() {{
                option1 = new ComputeHttpHealthChecksPatchSecurityOption1("sit", "porro") {{
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

## computeHttpHealthChecksTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHttpHealthChecksTestIamPermissionsRequest req = new ComputeHttpHealthChecksTestIamPermissionsRequest("labore", "molestias") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("ullam"),
                        add("nihil"),
                        add("ut"),
                    }};
                }};;
                accessToken = "incidunt";
                alt = AltEnum.PROTO;
                callback = "doloremque";
                fields = "rem";
                key = "dolorum";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "laboriosam";
                uploadProtocol = "esse";
                userIp = "est";
            }};            

            ComputeHttpHealthChecksTestIamPermissionsResponse res = sdk.httpHealthChecks.computeHttpHealthChecksTestIamPermissions(req, new ComputeHttpHealthChecksTestIamPermissionsSecurity() {{
                option1 = new ComputeHttpHealthChecksTestIamPermissionsSecurityOption1("est", "accusamus") {{
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

## computeHttpHealthChecksUpdate

Updates a HttpHealthCheck resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksUpdateRequest;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksUpdateResponse;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeHttpHealthChecksUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HttpHealthCheck1;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeHttpHealthChecksUpdateRequest req = new ComputeHttpHealthChecksUpdateRequest("debitis", "esse") {{
                dollarXgafv = XgafvEnum.TWO;
                httpHealthCheck1 = new HttpHealthCheck1() {{
                    checkIntervalSec = 918147;
                    creationTimestamp = "ipsum";
                    description = "minus";
                    healthyThreshold = 474056;
                    host = "illo";
                    id = "est";
                    kind = "placeat";
                    name = "Catherine Reynolds";
                    port = 717836;
                    requestPath = "rem";
                    selfLink = "consectetur";
                    selfLinkWithId = "nulla";
                    timeoutSec = 169011;
                    unhealthyThreshold = 224740;
                }};;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "mollitia";
                fields = "debitis";
                key = "neque";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "sapiente";
                requestId = "maxime";
                uploadType = "sed";
                uploadProtocol = "dolor";
                userIp = "nulla";
            }};            

            ComputeHttpHealthChecksUpdateResponse res = sdk.httpHealthChecks.computeHttpHealthChecksUpdate(req, new ComputeHttpHealthChecksUpdateSecurity() {{
                option1 = new ComputeHttpHealthChecksUpdateSecurityOption1("sint", "eius") {{
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
