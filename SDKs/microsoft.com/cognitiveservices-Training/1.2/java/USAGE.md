<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAccountInfoHeaders;
import org.openapis.openapi.models.operations.GetAccountInfoRequest;
import org.openapis.openapi.models.operations.GetAccountInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountInfoRequest req = new GetAccountInfoRequest() {{
                headers = new GetAccountInfoHeaders() {{
                    trainingKey = "corrupti";
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