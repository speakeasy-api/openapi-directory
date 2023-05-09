# httpHealthChecks

### Available Operations

* [computeHttpHealthChecksDelete](#computehttphealthchecksdelete) - Deletes the specified HttpHealthCheck resource.
* [computeHttpHealthChecksGet](#computehttphealthchecksget) - Returns the specified HttpHealthCheck resource.
* [computeHttpHealthChecksInsert](#computehttphealthchecksinsert) - Creates a HttpHealthCheck resource in the specified project using the data included in the request.
* [computeHttpHealthChecksList](#computehttphealthcheckslist) - Retrieves the list of HttpHealthCheck resources available to the specified project.
* [computeHttpHealthChecksPatch](#computehttphealthcheckspatch) - Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
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

            ComputeHttpHealthChecksDeleteRequest req = new ComputeHttpHealthChecksDeleteRequest("mollitia", "ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "modi";
                key = "dicta";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "non";
                requestId = "dolore";
                uploadType = "soluta";
                uploadProtocol = "occaecati";
                userIp = "sit";
            }};            

            ComputeHttpHealthChecksDeleteResponse res = sdk.httpHealthChecks.computeHttpHealthChecksDelete(req, new ComputeHttpHealthChecksDeleteSecurity() {{
                option1 = new ComputeHttpHealthChecksDeleteSecurityOption1("asperiores", "aspernatur") {{
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

            ComputeHttpHealthChecksGetRequest req = new ComputeHttpHealthChecksGetRequest("officiis", "sit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nulla";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "possimus";
                key = "magni";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "explicabo";
                uploadProtocol = "delectus";
                userIp = "natus";
            }};            

            ComputeHttpHealthChecksGetResponse res = sdk.httpHealthChecks.computeHttpHealthChecksGet(req, new ComputeHttpHealthChecksGetSecurity() {{
                option1 = new ComputeHttpHealthChecksGetSecurityOption1("earum", "fugit") {{
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

            ComputeHttpHealthChecksInsertRequest req = new ComputeHttpHealthChecksInsertRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                httpHealthCheck1 = new HttpHealthCheck1() {{
                    checkIntervalSec = 7810;
                    creationTimestamp = "nemo";
                    description = "provident";
                    healthyThreshold = 252957;
                    host = "numquam";
                    id = "tempore";
                    kind = "molestias";
                    name = "Erin Stamm";
                    port = 444494;
                    requestPath = "id";
                    selfLink = "ducimus";
                    timeoutSec = 174757;
                    unhealthyThreshold = 989766;
                }};;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "magnam";
                key = "excepturi";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "laboriosam";
                requestId = "id";
                uploadType = "itaque";
                uploadProtocol = "assumenda";
                userIp = "quaerat";
            }};            

            ComputeHttpHealthChecksInsertResponse res = sdk.httpHealthChecks.computeHttpHealthChecksInsert(req, new ComputeHttpHealthChecksInsertSecurity() {{
                option1 = new ComputeHttpHealthChecksInsertSecurityOption1("id", "eveniet") {{
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

            ComputeHttpHealthChecksListRequest req = new ComputeHttpHealthChecksListRequest("optio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dignissimos";
                alt = AltEnum.MEDIA;
                callback = "neque";
                fields = "esse";
                filter = "placeat";
                key = "at";
                maxResults = 567821L;
                oauthToken = "eos";
                orderBy = "odit";
                pageToken = "quia";
                prettyPrint = false;
                quotaUser = "maxime";
                returnPartialSuccess = false;
                uploadType = "excepturi";
                uploadProtocol = "sapiente";
                userIp = "maiores";
            }};            

            ComputeHttpHealthChecksListResponse res = sdk.httpHealthChecks.computeHttpHealthChecksList(req, new ComputeHttpHealthChecksListSecurity() {{
                option1 = new ComputeHttpHealthChecksListSecurityOption1("exercitationem", "ducimus") {{
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

            ComputeHttpHealthChecksPatchRequest req = new ComputeHttpHealthChecksPatchRequest("dolore", "iste") {{
                dollarXgafv = XgafvEnum.ONE;
                httpHealthCheck1 = new HttpHealthCheck1() {{
                    checkIntervalSec = 625815;
                    creationTimestamp = "id";
                    description = "harum";
                    healthyThreshold = 958962;
                    host = "laborum";
                    id = "aspernatur";
                    kind = "vero";
                    name = "Agnes Boyle DDS";
                    port = 664501;
                    requestPath = "tempora";
                    selfLink = "pariatur";
                    timeoutSec = 289342;
                    unhealthyThreshold = 337570;
                }};;
                accessToken = "aliquid";
                alt = AltEnum.PROTO;
                callback = "reiciendis";
                fields = "dicta";
                key = "sit";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "inventore";
                requestId = "saepe";
                uploadType = "iure";
                uploadProtocol = "praesentium";
                userIp = "perspiciatis";
            }};            

            ComputeHttpHealthChecksPatchResponse res = sdk.httpHealthChecks.computeHttpHealthChecksPatch(req, new ComputeHttpHealthChecksPatchSecurity() {{
                option1 = new ComputeHttpHealthChecksPatchSecurityOption1("omnis", "hic") {{
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

            ComputeHttpHealthChecksUpdateRequest req = new ComputeHttpHealthChecksUpdateRequest("accusantium", "minus") {{
                dollarXgafv = XgafvEnum.ONE;
                httpHealthCheck1 = new HttpHealthCheck1() {{
                    checkIntervalSec = 38173;
                    creationTimestamp = "ipsa";
                    description = "quasi";
                    healthyThreshold = 905001;
                    host = "quia";
                    id = "aspernatur";
                    kind = "minus";
                    name = "Jerome Herman";
                    port = 4703;
                    requestPath = "nemo";
                    selfLink = "molestias";
                    timeoutSec = 267684;
                    unhealthyThreshold = 629440;
                }};;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "possimus";
                key = "nihil";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "facere";
                requestId = "omnis";
                uploadType = "voluptate";
                uploadProtocol = "vitae";
                userIp = "reiciendis";
            }};            

            ComputeHttpHealthChecksUpdateResponse res = sdk.httpHealthChecks.computeHttpHealthChecksUpdate(req, new ComputeHttpHealthChecksUpdateSecurity() {{
                option1 = new ComputeHttpHealthChecksUpdateSecurityOption1("cumque", "atque") {{
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
