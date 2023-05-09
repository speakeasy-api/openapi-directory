<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PremiumNewsFormatEnum;
import org.openapis.openapi.models.operations.PremiumNewsRequest;
import org.openapis.openapi.models.operations.PremiumNewsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PremiumNewsRequest req = new PremiumNewsRequest(PremiumNewsFormatEnum.JSON);            

            PremiumNewsResponse res = sdk.premiumNews(req);

            if (res.news != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->