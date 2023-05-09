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

            ComputeHttpHealthChecksDeleteRequest req = new ComputeHttpHealthChecksDeleteRequest("ipsa", "laboriosam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "soluta";
                key = "voluptates";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "cum";
                requestId = "est";
                uploadType = "fugiat";
                uploadProtocol = "perferendis";
                userIp = "qui";
            }};            

            ComputeHttpHealthChecksDeleteResponse res = sdk.httpHealthChecks.computeHttpHealthChecksDelete(req, new ComputeHttpHealthChecksDeleteSecurity() {{
                option1 = new ComputeHttpHealthChecksDeleteSecurityOption1("tenetur", "sunt") {{
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

            ComputeHttpHealthChecksGetRequest req = new ComputeHttpHealthChecksGetRequest("quis", "corrupti") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quidem";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "et";
                key = "ipsam";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "minima";
                uploadProtocol = "laudantium";
                userIp = "quibusdam";
            }};            

            ComputeHttpHealthChecksGetResponse res = sdk.httpHealthChecks.computeHttpHealthChecksGet(req, new ComputeHttpHealthChecksGetSecurity() {{
                option1 = new ComputeHttpHealthChecksGetSecurityOption1("fuga", "fuga") {{
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

            ComputeHttpHealthChecksInsertRequest req = new ComputeHttpHealthChecksInsertRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                httpHealthCheck1 = new HttpHealthCheck1() {{
                    checkIntervalSec = 723031;
                    creationTimestamp = "itaque";
                    description = "suscipit";
                    healthyThreshold = 783702;
                    host = "nulla";
                    id = "consequatur";
                    kind = "qui";
                    name = "Veronica Kautzer";
                    port = 335672;
                    requestPath = "ut";
                    selfLink = "est";
                    timeoutSec = 682847;
                    unhealthyThreshold = 287797;
                }};;
                accessToken = "adipisci";
                alt = AltEnum.JSON;
                callback = "cum";
                fields = "magnam";
                key = "nihil";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "inventore";
                requestId = "esse";
                uploadType = "ex";
                uploadProtocol = "amet";
                userIp = "minus";
            }};            

            ComputeHttpHealthChecksInsertResponse res = sdk.httpHealthChecks.computeHttpHealthChecksInsert(req, new ComputeHttpHealthChecksInsertSecurity() {{
                option1 = new ComputeHttpHealthChecksInsertSecurityOption1("ad", "explicabo") {{
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

            ComputeHttpHealthChecksListRequest req = new ComputeHttpHealthChecksListRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eligendi";
                alt = AltEnum.JSON;
                callback = "amet";
                fields = "recusandae";
                filter = "perspiciatis";
                key = "corrupti";
                maxResults = 25109L;
                oauthToken = "magni";
                orderBy = "repellendus";
                pageToken = "quas";
                prettyPrint = false;
                quotaUser = "ratione";
                returnPartialSuccess = false;
                uploadType = "sapiente";
                uploadProtocol = "alias";
                userIp = "repellendus";
            }};            

            ComputeHttpHealthChecksListResponse res = sdk.httpHealthChecks.computeHttpHealthChecksList(req, new ComputeHttpHealthChecksListSecurity() {{
                option1 = new ComputeHttpHealthChecksListSecurityOption1("magnam", "quis") {{
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

            ComputeHttpHealthChecksPatchRequest req = new ComputeHttpHealthChecksPatchRequest("repudiandae", "soluta") {{
                dollarXgafv = XgafvEnum.ONE;
                httpHealthCheck1 = new HttpHealthCheck1() {{
                    checkIntervalSec = 686448;
                    creationTimestamp = "blanditiis";
                    description = "nobis";
                    healthyThreshold = 407230;
                    host = "iusto";
                    id = "dolore";
                    kind = "repudiandae";
                    name = "Clyde Schamberger";
                    port = 122426;
                    requestPath = "rem";
                    selfLink = "itaque";
                    timeoutSec = 824862;
                    unhealthyThreshold = 762296;
                }};;
                accessToken = "esse";
                alt = AltEnum.PROTO;
                callback = "quam";
                fields = "quos";
                key = "dignissimos";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "adipisci";
                requestId = "magni";
                uploadType = "recusandae";
                uploadProtocol = "voluptatem";
                userIp = "eius";
            }};            

            ComputeHttpHealthChecksPatchResponse res = sdk.httpHealthChecks.computeHttpHealthChecksPatch(req, new ComputeHttpHealthChecksPatchSecurity() {{
                option1 = new ComputeHttpHealthChecksPatchSecurityOption1("rerum", "nesciunt") {{
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

            ComputeHttpHealthChecksTestIamPermissionsRequest req = new ComputeHttpHealthChecksTestIamPermissionsRequest("pariatur", "velit") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("quae"),
                        add("cumque"),
                        add("ullam"),
                        add("vel"),
                    }};
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "recusandae";
                fields = "voluptatibus";
                key = "dolore";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "illum";
                uploadProtocol = "dolor";
                userIp = "porro";
            }};            

            ComputeHttpHealthChecksTestIamPermissionsResponse res = sdk.httpHealthChecks.computeHttpHealthChecksTestIamPermissions(req, new ComputeHttpHealthChecksTestIamPermissionsSecurity() {{
                option1 = new ComputeHttpHealthChecksTestIamPermissionsSecurityOption1("iste", "earum") {{
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

            ComputeHttpHealthChecksUpdateRequest req = new ComputeHttpHealthChecksUpdateRequest("vitae", "impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                httpHealthCheck1 = new HttpHealthCheck1() {{
                    checkIntervalSec = 331371;
                    creationTimestamp = "aperiam";
                    description = "consectetur";
                    healthyThreshold = 998344;
                    host = "voluptas";
                    id = "quod";
                    kind = "nesciunt";
                    name = "Preston Runte MD";
                    port = 428395;
                    requestPath = "qui";
                    selfLink = "perspiciatis";
                    timeoutSec = 37384;
                    unhealthyThreshold = 976202;
                }};;
                accessToken = "occaecati";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "reiciendis";
                key = "nesciunt";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "nemo";
                requestId = "ab";
                uploadType = "atque";
                uploadProtocol = "natus";
                userIp = "culpa";
            }};            

            ComputeHttpHealthChecksUpdateResponse res = sdk.httpHealthChecks.computeHttpHealthChecksUpdate(req, new ComputeHttpHealthChecksUpdateSecurity() {{
                option1 = new ComputeHttpHealthChecksUpdateSecurityOption1("possimus", "molestiae") {{
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
