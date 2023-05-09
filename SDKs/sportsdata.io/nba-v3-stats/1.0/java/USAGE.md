<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllStarsFormatEnum;
import org.openapis.openapi.models.operations.AllStarsRequest;
import org.openapis.openapi.models.operations.AllStarsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            AllStarsRequest req = new AllStarsRequest(AllStarsFormatEnum.JSON, "provident");            

            AllStarsResponse res = sdk.allStars(req);

            if (res.playerInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->