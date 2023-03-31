<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteAccountsIdPathParams;
import org.openapis.openapi.models.operations.DeleteAccountsIdRequest;
import org.openapis.openapi.models.operations.DeleteAccountsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    developerKey = new SchemeDeveloperKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            DeleteAccountsIdRequest req = new DeleteAccountsIdRequest() {{
                pathParams = new DeleteAccountsIdPathParams() {{
                    id = 548814;
                }};
            }};            

            DeleteAccountsIdResponse res = sdk.accounts.deleteAccountsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->