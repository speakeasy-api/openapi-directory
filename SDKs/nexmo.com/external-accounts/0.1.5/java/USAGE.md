<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllAccountsProviderEnum;
import org.openapis.openapi.models.operations.GetAllAccountsRequest;
import org.openapis.openapi.models.operations.GetAllAccountsResponse;
import org.openapis.openapi.models.operations.GetAllAccountsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllAccountsRequest req = new GetAllAccountsRequest() {{
                pageNumber = 1L;
                pageSize = 1L;
                provider = GetAllAccountsProviderEnum.VIBER_SERVICE_MSG;
            }};            

            GetAllAccountsResponse res = sdk.account.getAllAccounts(req, new GetAllAccountsSecurity() {{
                basicAuth = new SchemeBasicAuth("provident", "distinctio") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.getAllAccounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->