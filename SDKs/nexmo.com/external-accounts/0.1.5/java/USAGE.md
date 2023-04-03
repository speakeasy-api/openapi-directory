<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAllAccountsSecurity;
import org.openapis.openapi.models.operations.GetAllAccountsProviderEnum;
import org.openapis.openapi.models.operations.GetAllAccountsRequest;
import org.openapis.openapi.models.operations.GetAllAccountsResponse;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllAccountsRequest req = new GetAllAccountsRequest() {{
                pageNumber = 1;
                pageSize = 1;
                provider = "viber_service_msg";
            }}            

            GetAllAccountsResponse res = sdk.account.getAllAccounts(req, new GetAllAccountsSecurity() {{
                basicAuth = new SchemeBasicAuth() {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.getAllAccounts200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->