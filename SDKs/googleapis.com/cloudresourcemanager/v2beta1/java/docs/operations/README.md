# operations

### Available Operations

* [cloudresourcemanagerOperationsGet](#cloudresourcemanageroperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## cloudresourcemanagerOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerOperationsGetRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerOperationsGetResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerOperationsGetSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerOperationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerOperationsGetRequest req = new CloudresourcemanagerOperationsGetRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "ullam";
                key = "provident";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "accusantium";
                uploadProtocol = "mollitia";
            }};            

            CloudresourcemanagerOperationsGetResponse res = sdk.operations.cloudresourcemanagerOperationsGet(req, new CloudresourcemanagerOperationsGetSecurity() {{
                option1 = new CloudresourcemanagerOperationsGetSecurityOption1("reiciendis", "mollitia") {{
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
