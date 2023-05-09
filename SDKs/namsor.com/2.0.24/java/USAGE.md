<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnonymizeRequest;
import org.openapis.openapi.models.operations.AnonymizeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AnonymizeRequest req = new AnonymizeRequest(false, "provident", "distinctio");            

            AnonymizeResponse res = sdk.admin.anonymize(req);

            if (res.apiKeyOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->