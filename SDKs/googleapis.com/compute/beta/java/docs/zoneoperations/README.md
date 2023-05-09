# zoneOperations

### Available Operations

* [computeZoneOperationsDelete](#computezoneoperationsdelete) - Deletes the specified zone-specific Operations resource.
* [computeZoneOperationsGet](#computezoneoperationsget) - Retrieves the specified zone-specific Operations resource.
* [computeZoneOperationsList](#computezoneoperationslist) - Retrieves a list of Operation resources contained within the specified zone.
* [computeZoneOperationsWait](#computezoneoperationswait) - Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method waits for no more than the 2 minutes and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

## computeZoneOperationsDelete

Deletes the specified zone-specific Operations resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeZoneOperationsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeZoneOperationsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeZoneOperationsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeZoneOperationsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeZoneOperationsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeZoneOperationsDeleteRequest req = new ComputeZoneOperationsDeleteRequest("natus", "suscipit", "facere") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "id";
                alt = AltEnum.MEDIA;
                callback = "eos";
                fields = "illum";
                key = "aspernatur";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "natus";
                uploadProtocol = "assumenda";
                userIp = "saepe";
            }};            

            ComputeZoneOperationsDeleteResponse res = sdk.zoneOperations.computeZoneOperationsDelete(req, new ComputeZoneOperationsDeleteSecurity() {{
                option1 = new ComputeZoneOperationsDeleteSecurityOption1("debitis", "laboriosam") {{
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

## computeZoneOperationsGet

Retrieves the specified zone-specific Operations resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeZoneOperationsGetRequest;
import org.openapis.openapi.models.operations.ComputeZoneOperationsGetResponse;
import org.openapis.openapi.models.operations.ComputeZoneOperationsGetSecurity;
import org.openapis.openapi.models.operations.ComputeZoneOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeZoneOperationsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeZoneOperationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeZoneOperationsGetRequest req = new ComputeZoneOperationsGetRequest("quo", "doloremque", "fugit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "aspernatur";
                fields = "doloribus";
                key = "tenetur";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "possimus";
                uploadProtocol = "totam";
                userIp = "officia";
            }};            

            ComputeZoneOperationsGetResponse res = sdk.zoneOperations.computeZoneOperationsGet(req, new ComputeZoneOperationsGetSecurity() {{
                option1 = new ComputeZoneOperationsGetSecurityOption1("quod", "consectetur") {{
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

## computeZoneOperationsList

Retrieves a list of Operation resources contained within the specified zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeZoneOperationsListRequest;
import org.openapis.openapi.models.operations.ComputeZoneOperationsListResponse;
import org.openapis.openapi.models.operations.ComputeZoneOperationsListSecurity;
import org.openapis.openapi.models.operations.ComputeZoneOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeZoneOperationsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeZoneOperationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeZoneOperationsListRequest req = new ComputeZoneOperationsListRequest("totam", "eligendi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "at";
                alt = AltEnum.JSON;
                callback = "velit";
                fields = "praesentium";
                filter = "beatae";
                key = "eligendi";
                maxResults = 369834L;
                oauthToken = "ea";
                orderBy = "numquam";
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "sed";
                returnPartialSuccess = false;
                uploadType = "odio";
                uploadProtocol = "modi";
                userIp = "culpa";
            }};            

            ComputeZoneOperationsListResponse res = sdk.zoneOperations.computeZoneOperationsList(req, new ComputeZoneOperationsListSecurity() {{
                option1 = new ComputeZoneOperationsListSecurityOption1("a", "tenetur") {{
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

## computeZoneOperationsWait

Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method waits for no more than the 2 minutes and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeZoneOperationsWaitRequest;
import org.openapis.openapi.models.operations.ComputeZoneOperationsWaitResponse;
import org.openapis.openapi.models.operations.ComputeZoneOperationsWaitSecurity;
import org.openapis.openapi.models.operations.ComputeZoneOperationsWaitSecurityOption1;
import org.openapis.openapi.models.operations.ComputeZoneOperationsWaitSecurityOption2;
import org.openapis.openapi.models.operations.ComputeZoneOperationsWaitSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeZoneOperationsWaitRequest req = new ComputeZoneOperationsWaitRequest("error", "aliquam", "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "dicta";
                key = "veritatis";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "facilis";
                uploadProtocol = "optio";
                userIp = "aspernatur";
            }};            

            ComputeZoneOperationsWaitResponse res = sdk.zoneOperations.computeZoneOperationsWait(req, new ComputeZoneOperationsWaitSecurity() {{
                option1 = new ComputeZoneOperationsWaitSecurityOption1("aut", "quasi") {{
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
