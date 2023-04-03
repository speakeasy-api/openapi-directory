<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetCallToken1Response;
import org.openapis.openapi.models.shared.GetCallTokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1() {{
                        jwt = "YOUR_API_KEY_HERE";
                        apiKey = "YOUR_API_KEY_HERE";
                        streamAuthType = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.GetCallTokenRequest req = new GetCallTokenRequest() {{
                user = new java.util.HashMap<String, Object>() {{
                    put("provident", "distinctio");
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                }};
                userId = "illum";
            }}            

            GetCallToken1Response res = sdk.getCallToken1(req);

            if (res.getCallTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->