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

            ComputeZoneOperationsDeleteRequest req = new ComputeZoneOperationsDeleteRequest("maiores", "illo", "ab") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.MEDIA;
                callback = "laudantium";
                fields = "porro";
                key = "dignissimos";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "ab";
                uploadProtocol = "iste";
                userIp = "explicabo";
            }};            

            ComputeZoneOperationsDeleteResponse res = sdk.zoneOperations.computeZoneOperationsDelete(req, new ComputeZoneOperationsDeleteSecurity() {{
                option1 = new ComputeZoneOperationsDeleteSecurityOption1("tenetur", "eaque") {{
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

            ComputeZoneOperationsGetRequest req = new ComputeZoneOperationsGetRequest("doloribus", "voluptatum", "iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "voluptatum";
                fields = "ducimus";
                key = "incidunt";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "id";
                uploadProtocol = "velit";
                userIp = "expedita";
            }};            

            ComputeZoneOperationsGetResponse res = sdk.zoneOperations.computeZoneOperationsGet(req, new ComputeZoneOperationsGetSecurity() {{
                option1 = new ComputeZoneOperationsGetSecurityOption1("culpa", "voluptates") {{
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

            ComputeZoneOperationsListRequest req = new ComputeZoneOperationsListRequest("consequuntur", "possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.JSON;
                callback = "aut";
                fields = "nulla";
                filter = "ipsa";
                key = "voluptates";
                maxResults = 587807L;
                oauthToken = "dolorum";
                orderBy = "illo";
                pageToken = "rem";
                prettyPrint = false;
                quotaUser = "neque";
                returnPartialSuccess = false;
                uploadType = "dignissimos";
                uploadProtocol = "magni";
                userIp = "provident";
            }};            

            ComputeZoneOperationsListResponse res = sdk.zoneOperations.computeZoneOperationsList(req, new ComputeZoneOperationsListSecurity() {{
                option1 = new ComputeZoneOperationsListSecurityOption1("corrupti", "aliquid") {{
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

            ComputeZoneOperationsWaitRequest req = new ComputeZoneOperationsWaitRequest("laudantium", "eum", "et") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "nam";
                key = "blanditiis";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "tempora";
                uploadProtocol = "corrupti";
                userIp = "animi";
            }};            

            ComputeZoneOperationsWaitResponse res = sdk.zoneOperations.computeZoneOperationsWait(req, new ComputeZoneOperationsWaitSecurity() {{
                option1 = new ComputeZoneOperationsWaitSecurityOption1("iure", "facilis") {{
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
