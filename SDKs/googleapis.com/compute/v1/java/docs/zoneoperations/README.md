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

            ComputeZoneOperationsDeleteRequest req = new ComputeZoneOperationsDeleteRequest("esse", "maxime", "corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consectetur";
                alt = AltEnum.MEDIA;
                callback = "ratione";
                fields = "vitae";
                key = "libero";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "officia";
                uploadProtocol = "animi";
                userIp = "atque";
            }};            

            ComputeZoneOperationsDeleteResponse res = sdk.zoneOperations.computeZoneOperationsDelete(req, new ComputeZoneOperationsDeleteSecurity() {{
                option1 = new ComputeZoneOperationsDeleteSecurityOption1("illo", "a") {{
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

            ComputeZoneOperationsGetRequest req = new ComputeZoneOperationsGetRequest("eveniet", "eum", "ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "sunt";
                key = "praesentium";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "fugit";
                uploadProtocol = "consequuntur";
                userIp = "similique";
            }};            

            ComputeZoneOperationsGetResponse res = sdk.zoneOperations.computeZoneOperationsGet(req, new ComputeZoneOperationsGetSecurity() {{
                option1 = new ComputeZoneOperationsGetSecurityOption1("non", "error") {{
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

            ComputeZoneOperationsListRequest req = new ComputeZoneOperationsListRequest("dignissimos", "tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illo";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "reiciendis";
                filter = "voluptates";
                key = "consequatur";
                maxResults = 60945L;
                oauthToken = "fuga";
                orderBy = "aspernatur";
                pageToken = "nobis";
                prettyPrint = false;
                quotaUser = "repellendus";
                returnPartialSuccess = false;
                uploadType = "deleniti";
                uploadProtocol = "quod";
                userIp = "consequuntur";
            }};            

            ComputeZoneOperationsListResponse res = sdk.zoneOperations.computeZoneOperationsList(req, new ComputeZoneOperationsListSecurity() {{
                option1 = new ComputeZoneOperationsListSecurityOption1("excepturi", "enim") {{
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

            ComputeZoneOperationsWaitRequest req = new ComputeZoneOperationsWaitRequest("illo", "repudiandae", "fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "illum";
                fields = "exercitationem";
                key = "commodi";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "doloribus";
                uploadProtocol = "doloremque";
                userIp = "officia";
            }};            

            ComputeZoneOperationsWaitResponse res = sdk.zoneOperations.computeZoneOperationsWait(req, new ComputeZoneOperationsWaitSecurity() {{
                option1 = new ComputeZoneOperationsWaitSecurityOption1("minima", "soluta") {{
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
