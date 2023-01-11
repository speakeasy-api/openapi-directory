<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            AddUserToAccountRequest req = new AddUserToAccountRequest() {{
                pathParams = new AddUserToAccountPathParams() {{
                    accountId = "reprehenderit";
                }};
                request = new AddUserToAccountRequestBody() {{
                    userId = "et";
                }};
            }};

            AddUserToAccountResponse res = sdk.accounts.addUserToAccount(req);

            if (res.addUserToAccount201ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->