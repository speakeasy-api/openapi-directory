# operations

### Available Operations

* [servicemanagementOperationsGet](#servicemanagementoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [servicemanagementOperationsList](#servicemanagementoperationslist) - Lists service operations that match the specified filter in the request.

## servicemanagementOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementOperationsGetRequest;
import org.openapis.openapi.models.operations.ServicemanagementOperationsGetResponse;
import org.openapis.openapi.models.operations.ServicemanagementOperationsGetSecurity;
import org.openapis.openapi.models.operations.ServicemanagementOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementOperationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementOperationsGetRequest req = new ServicemanagementOperationsGetRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            ServicemanagementOperationsGetResponse res = sdk.operations.servicemanagementOperationsGet(req, new ServicemanagementOperationsGetSecurity() {{
                option1 = new ServicemanagementOperationsGetSecurityOption1("excepturi", "nisi") {{
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

## servicemanagementOperationsList

Lists service operations that match the specified filter in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementOperationsListRequest;
import org.openapis.openapi.models.operations.ServicemanagementOperationsListResponse;
import org.openapis.openapi.models.operations.ServicemanagementOperationsListSecurity;
import org.openapis.openapi.models.operations.ServicemanagementOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementOperationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementOperationsListRequest req = new ServicemanagementOperationsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "veritatis";
                filter = "deserunt";
                key = "perferendis";
                name = "Estelle Will";
                oauthToken = "at";
                pageSize = 870088L;
                pageToken = "maiores";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "quod";
                uploadProtocol = "quod";
            }};            

            ServicemanagementOperationsListResponse res = sdk.operations.servicemanagementOperationsList(req, new ServicemanagementOperationsListSecurity() {{
                option1 = new ServicemanagementOperationsListSecurityOption1("esse", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
