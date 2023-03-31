<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AnonymizePathParams;
import org.openapis.openapi.models.operations.AnonymizeRequest;
import org.openapis.openapi.models.operations.AnonymizeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AnonymizeRequest req = new AnonymizeRequest() {{
                pathParams = new AnonymizePathParams() {{
                    anonymized = false;
                    source = "corrupti";
                    token = "provident";
                }};
            }};            

            AnonymizeResponse res = sdk.admin.anonymize(req);

            if (res.apiKeyOut.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->