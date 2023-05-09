# regionOperations

### Available Operations

* [computeRegionOperationsDelete](#computeregionoperationsdelete) - Deletes the specified region-specific Operations resource.
* [computeRegionOperationsGet](#computeregionoperationsget) - Retrieves the specified region-specific Operations resource.
* [computeRegionOperationsList](#computeregionoperationslist) - Retrieves a list of Operation resources contained within the specified region.
* [computeRegionOperationsWait](#computeregionoperationswait) - Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

## computeRegionOperationsDelete

Deletes the specified region-specific Operations resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionOperationsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionOperationsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionOperationsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionOperationsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionOperationsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionOperationsDeleteRequest req = new ComputeRegionOperationsDeleteRequest("beatae", "maxime", "ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "eligendi";
                key = "porro";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "reiciendis";
                uploadProtocol = "laboriosam";
                userIp = "distinctio";
            }};            

            ComputeRegionOperationsDeleteResponse res = sdk.regionOperations.computeRegionOperationsDelete(req, new ComputeRegionOperationsDeleteSecurity() {{
                option1 = new ComputeRegionOperationsDeleteSecurityOption1("dolores", "esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionOperationsGet

Retrieves the specified region-specific Operations resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionOperationsGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionOperationsGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionOperationsGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionOperationsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionOperationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionOperationsGetRequest req = new ComputeRegionOperationsGetRequest("ex", "est", "dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "sed";
                key = "consequatur";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "saepe";
                uploadProtocol = "quidem";
                userIp = "repellendus";
            }};            

            ComputeRegionOperationsGetResponse res = sdk.regionOperations.computeRegionOperationsGet(req, new ComputeRegionOperationsGetSecurity() {{
                option1 = new ComputeRegionOperationsGetSecurityOption1("sint", "corrupti") {{
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

## computeRegionOperationsList

Retrieves a list of Operation resources contained within the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionOperationsListRequest;
import org.openapis.openapi.models.operations.ComputeRegionOperationsListResponse;
import org.openapis.openapi.models.operations.ComputeRegionOperationsListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionOperationsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionOperationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionOperationsListRequest req = new ComputeRegionOperationsListRequest("tempore", "in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "ad";
                fields = "distinctio";
                filter = "neque";
                key = "architecto";
                maxResults = 880018L;
                oauthToken = "nam";
                orderBy = "rerum";
                pageToken = "quos";
                prettyPrint = false;
                quotaUser = "dolorum";
                returnPartialSuccess = false;
                uploadType = "magni";
                uploadProtocol = "impedit";
                userIp = "ex";
            }};            

            ComputeRegionOperationsListResponse res = sdk.regionOperations.computeRegionOperationsList(req, new ComputeRegionOperationsListSecurity() {{
                option1 = new ComputeRegionOperationsListSecurityOption1("quibusdam", "doloremque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operationList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionOperationsWait

Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionOperationsWaitRequest;
import org.openapis.openapi.models.operations.ComputeRegionOperationsWaitResponse;
import org.openapis.openapi.models.operations.ComputeRegionOperationsWaitSecurity;
import org.openapis.openapi.models.operations.ComputeRegionOperationsWaitSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionOperationsWaitSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionOperationsWaitSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionOperationsWaitRequest req = new ComputeRegionOperationsWaitRequest("quasi", "non", "nam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "quod";
                key = "totam";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "porro";
                uploadProtocol = "officia";
                userIp = "eius";
            }};            

            ComputeRegionOperationsWaitResponse res = sdk.regionOperations.computeRegionOperationsWait(req, new ComputeRegionOperationsWaitSecurity() {{
                option1 = new ComputeRegionOperationsWaitSecurityOption1("placeat", "iure") {{
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
