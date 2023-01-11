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

            GetAccountInfoRequest req = new GetAccountInfoRequest() {{
                headers = new GetAccountInfoHeaders() {{
                    trainingKey = "sit";
                }};
            }};

            GetAccountInfoResponse res = sdk.accountApi.getAccountInfo(req);

            if (res.account.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->