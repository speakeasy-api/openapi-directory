<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BadWordFilterRequestBody;
import org.openapis.openapi.models.operations.BadWordFilterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "provident") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            BadWordFilterRequestBody req = new BadWordFilterRequestBody("distinctio") {{
                catalog = "quibusdam";
                censorCharacter = "unde";
            }};            

            BadWordFilterResponse res = sdk.dataTools.badWordFilter(req);

            if (res.badWordFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->