# operations

### Available Operations

* [accesscontextmanagerOperationsGet](#accesscontextmanageroperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## accesscontextmanagerOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerOperationsGetAccessLevelFormatEnum;
import org.openapis.openapi.models.operations.AccesscontextmanagerOperationsGetRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerOperationsGetResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerOperationsGetRequest req = new AccesscontextmanagerOperationsGetRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessLevelFormat = AccesscontextmanagerOperationsGetAccessLevelFormatEnum.LEVEL_FORMAT_UNSPECIFIED;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "optio";
                fields = "accusamus";
                key = "ad";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "deserunt";
                uploadProtocol = "provident";
            }};            

            AccesscontextmanagerOperationsGetResponse res = sdk.operations.accesscontextmanagerOperationsGet(req, new AccesscontextmanagerOperationsGetSecurity("minima", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
