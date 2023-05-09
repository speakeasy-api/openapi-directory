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

            ComputeHttpsHealthChecksDeleteRequest req = new ComputeHttpsHealthChecksDeleteRequest("officiis", "reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aperiam";
                alt = AltEnum.MEDIA;
                callback = "animi";
                fields = "officia";
                key = "eveniet";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "adipisci";
                requestId = "hic";
                uploadType = "dolorem";
                uploadProtocol = "adipisci";
                userIp = "optio";
            }};            

            ComputeHttpsHealthChecksDeleteResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksDelete(req, new ComputeHttpsHealthChecksDeleteSecurity() {{
                option1 = new ComputeHttpsHealthChecksDeleteSecurityOption1("similique", "odio") {{
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

            ComputeHttpsHealthChecksGetRequest req = new ComputeHttpsHealthChecksGetRequest("unde", "asperiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "recusandae";
                fields = "non";
                key = "aut";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "quia";
                uploadType = "soluta";
                uploadProtocol = "fuga";
                userIp = "qui";
            }};            

            ComputeHttpsHealthChecksGetResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksGet(req, new ComputeHttpsHealthChecksGetSecurity() {{
                option1 = new ComputeHttpsHealthChecksGetSecurityOption1("commodi", "a") {{
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

            ComputeHttpsHealthChecksInsertRequest req = new ComputeHttpsHealthChecksInsertRequest("temporibus") {{
                dollarXgafv = XgafvEnum.ONE;
                httpsHealthCheck1 = new HttpsHealthCheck1() {{
                    checkIntervalSec = 428898;
                    creationTimestamp = "rem";
                    description = "expedita";
                    healthyThreshold = 656272;
                    host = "excepturi";
                    id = "dolores";
                    kind = "dicta";
                    name = "Verna Satterfield";
                    port = 115718;
                    requestPath = "nostrum";
                    selfLink = "molestias";
                    timeoutSec = 204121;
                    unhealthyThreshold = 335650;
                }};;
                accessToken = "optio";
                alt = AltEnum.MEDIA;
                callback = "adipisci";
                fields = "autem";
                key = "tempora";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "dignissimos";
                requestId = "quia";
                uploadType = "ratione";
                uploadProtocol = "veritatis";
                userIp = "amet";
            }};            

            ComputeHttpsHealthChecksInsertResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksInsert(req, new ComputeHttpsHealthChecksInsertSecurity() {{
                option1 = new ComputeHttpsHealthChecksInsertSecurityOption1("sequi", "recusandae") {{
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

            ComputeHttpsHealthChecksListRequest req = new ComputeHttpsHealthChecksListRequest("fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sit";
                alt = AltEnum.JSON;
                callback = "eum";
                fields = "rerum";
                filter = "quod";
                key = "nemo";
                maxResults = 100258L;
                oauthToken = "vel";
                orderBy = "amet";
                pageToken = "facilis";
                prettyPrint = false;
                quotaUser = "libero";
                returnPartialSuccess = false;
                uploadType = "maxime";
                uploadProtocol = "deserunt";
                userIp = "eius";
            }};            

            ComputeHttpsHealthChecksListResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksList(req, new ComputeHttpsHealthChecksListSecurity() {{
                option1 = new ComputeHttpsHealthChecksListSecurityOption1("molestias", "dolores") {{
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

            ComputeHttpsHealthChecksPatchRequest req = new ComputeHttpsHealthChecksPatchRequest("dolores", "reprehenderit") {{
                dollarXgafv = XgafvEnum.TWO;
                httpsHealthCheck1 = new HttpsHealthCheck1() {{
                    checkIntervalSec = 251599;
                    creationTimestamp = "odit";
                    description = "maxime";
                    healthyThreshold = 134798;
                    host = "magni";
                    id = "minus";
                    kind = "minima";
                    name = "Mrs. Annie Hahn";
                    port = 324972;
                    requestPath = "quo";
                    selfLink = "quis";
                    timeoutSec = 817729;
                    unhealthyThreshold = 696368;
                }};;
                accessToken = "harum";
                alt = AltEnum.JSON;
                callback = "optio";
                fields = "minima";
                key = "reprehenderit";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "vitae";
                requestId = "voluptates";
                uploadType = "tempora";
                uploadProtocol = "iste";
                userIp = "molestias";
            }};            

            ComputeHttpsHealthChecksPatchResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksPatch(req, new ComputeHttpsHealthChecksPatchSecurity() {{
                option1 = new ComputeHttpsHealthChecksPatchSecurityOption1("beatae", "itaque") {{
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

            ComputeHttpsHealthChecksTestIamPermissionsRequest req = new ComputeHttpsHealthChecksTestIamPermissionsRequest("atque", "dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("enim"),
                    }};
                }};;
                accessToken = "quam";
                alt = AltEnum.PROTO;
                callback = "temporibus";
                fields = "porro";
                key = "quasi";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "fugit";
                uploadProtocol = "earum";
                userIp = "quidem";
            }};            

            ComputeHttpsHealthChecksTestIamPermissionsResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksTestIamPermissions(req, new ComputeHttpsHealthChecksTestIamPermissionsSecurity() {{
                option1 = new ComputeHttpsHealthChecksTestIamPermissionsSecurityOption1("at", "debitis") {{
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

            ComputeHttpsHealthChecksUpdateRequest req = new ComputeHttpsHealthChecksUpdateRequest("eum", "non") {{
                dollarXgafv = XgafvEnum.TWO;
                httpsHealthCheck1 = new HttpsHealthCheck1() {{
                    checkIntervalSec = 958686;
                    creationTimestamp = "porro";
                    description = "impedit";
                    healthyThreshold = 330358;
                    host = "magnam";
                    id = "iure";
                    kind = "natus";
                    name = "Mrs. Tom Ankunding";
                    port = 970712;
                    requestPath = "est";
                    selfLink = "esse";
                    timeoutSec = 614001;
                    unhealthyThreshold = 405419;
                }};;
                accessToken = "odit";
                alt = AltEnum.JSON;
                callback = "voluptas";
                fields = "libero";
                key = "vero";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "consequuntur";
                requestId = "quidem";
                uploadType = "aperiam";
                uploadProtocol = "animi";
                userIp = "ratione";
            }};            

            ComputeHttpsHealthChecksUpdateResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksUpdate(req, new ComputeHttpsHealthChecksUpdateSecurity() {{
                option1 = new ComputeHttpsHealthChecksUpdateSecurityOption1("itaque", "non") {{
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
