# httpsHealthChecks

### Available Operations

* [computeHttpsHealthChecksDelete](#computehttpshealthchecksdelete) - Deletes the specified HttpsHealthCheck resource.
* [computeHttpsHealthChecksGet](#computehttpshealthchecksget) - Returns the specified HttpsHealthCheck resource.
* [computeHttpsHealthChecksInsert](#computehttpshealthchecksinsert) - Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
* [computeHttpsHealthChecksList](#computehttpshealthcheckslist) - Retrieves the list of HttpsHealthCheck resources available to the specified project.
* [computeHttpsHealthChecksPatch](#computehttpshealthcheckspatch) - Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
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

            ComputeHttpsHealthChecksDeleteRequest req = new ComputeHttpsHealthChecksDeleteRequest("explicabo", "sit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "commodi";
                alt = AltEnum.JSON;
                callback = "harum";
                fields = "aut";
                key = "consectetur";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "rerum";
                requestId = "distinctio";
                uploadType = "blanditiis";
                uploadProtocol = "saepe";
                userIp = "sit";
            }};            

            ComputeHttpsHealthChecksDeleteResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksDelete(req, new ComputeHttpsHealthChecksDeleteSecurity() {{
                option1 = new ComputeHttpsHealthChecksDeleteSecurityOption1("optio", "impedit") {{
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

            ComputeHttpsHealthChecksGetRequest req = new ComputeHttpsHealthChecksGetRequest("corrupti", "quas") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "officiis";
                key = "labore";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "consequatur";
                uploadProtocol = "ut";
                userIp = "laborum";
            }};            

            ComputeHttpsHealthChecksGetResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksGet(req, new ComputeHttpsHealthChecksGetSecurity() {{
                option1 = new ComputeHttpsHealthChecksGetSecurityOption1("hic", "sed") {{
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

            ComputeHttpsHealthChecksInsertRequest req = new ComputeHttpsHealthChecksInsertRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                httpsHealthCheck1 = new HttpsHealthCheck1() {{
                    checkIntervalSec = 323614;
                    creationTimestamp = "quibusdam";
                    description = "facere";
                    healthyThreshold = 863508;
                    host = "quidem";
                    id = "labore";
                    kind = "commodi";
                    name = "Donnie Boyer";
                    port = 851558;
                    requestPath = "ea";
                    selfLink = "facere";
                    timeoutSec = 545016;
                    unhealthyThreshold = 166077;
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.PROTO;
                callback = "culpa";
                fields = "ipsa";
                key = "inventore";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "et";
                requestId = "error";
                uploadType = "inventore";
                uploadProtocol = "vitae";
                userIp = "qui";
            }};            

            ComputeHttpsHealthChecksInsertResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksInsert(req, new ComputeHttpsHealthChecksInsertSecurity() {{
                option1 = new ComputeHttpsHealthChecksInsertSecurityOption1("unde", "ex") {{
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

            ComputeHttpsHealthChecksListRequest req = new ComputeHttpsHealthChecksListRequest("quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eum";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "cumque";
                filter = "ab";
                key = "quibusdam";
                maxResults = 500759L;
                oauthToken = "et";
                orderBy = "delectus";
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "iste";
                returnPartialSuccess = false;
                uploadType = "perferendis";
                uploadProtocol = "magnam";
                userIp = "aspernatur";
            }};            

            ComputeHttpsHealthChecksListResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksList(req, new ComputeHttpsHealthChecksListSecurity() {{
                option1 = new ComputeHttpsHealthChecksListSecurityOption1("sapiente", "nemo") {{
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

            ComputeHttpsHealthChecksPatchRequest req = new ComputeHttpsHealthChecksPatchRequest("laboriosam", "iste") {{
                dollarXgafv = XgafvEnum.TWO;
                httpsHealthCheck1 = new HttpsHealthCheck1() {{
                    checkIntervalSec = 479585;
                    creationTimestamp = "culpa";
                    description = "reiciendis";
                    healthyThreshold = 952911;
                    host = "consequatur";
                    id = "voluptates";
                    kind = "dolorum";
                    name = "Ruby Bogan";
                    port = 729790;
                    requestPath = "saepe";
                    selfLink = "ipsa";
                    timeoutSec = 492974;
                    unhealthyThreshold = 82503;
                }};;
                accessToken = "harum";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "ex";
                key = "dolor";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "sed";
                requestId = "quam";
                uploadType = "unde";
                uploadProtocol = "harum";
                userIp = "sequi";
            }};            

            ComputeHttpsHealthChecksPatchResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksPatch(req, new ComputeHttpsHealthChecksPatchSecurity() {{
                option1 = new ComputeHttpsHealthChecksPatchSecurityOption1("libero", "ipsa") {{
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

            ComputeHttpsHealthChecksUpdateRequest req = new ComputeHttpsHealthChecksUpdateRequest("blanditiis", "aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                httpsHealthCheck1 = new HttpsHealthCheck1() {{
                    checkIntervalSec = 677213;
                    creationTimestamp = "omnis";
                    description = "occaecati";
                    healthyThreshold = 164044;
                    host = "veniam";
                    id = "quam";
                    kind = "repellendus";
                    name = "Amber Ziemann V";
                    port = 275661;
                    requestPath = "iusto";
                    selfLink = "laborum";
                    timeoutSec = 445973;
                    unhealthyThreshold = 255895;
                }};;
                accessToken = "quia";
                alt = AltEnum.PROTO;
                callback = "blanditiis";
                fields = "ut";
                key = "eius";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "nisi";
                requestId = "placeat";
                uploadType = "tempore";
                uploadProtocol = "facere";
                userIp = "earum";
            }};            

            ComputeHttpsHealthChecksUpdateResponse res = sdk.httpsHealthChecks.computeHttpsHealthChecksUpdate(req, new ComputeHttpsHealthChecksUpdateSecurity() {{
                option1 = new ComputeHttpsHealthChecksUpdateSecurityOption1("debitis", "impedit") {{
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
