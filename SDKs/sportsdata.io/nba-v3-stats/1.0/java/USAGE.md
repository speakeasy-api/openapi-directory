<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AllStarsFormatEnum;
import org.openapis.openapi.models.operations.AllStarsRequest;
import org.openapis.openapi.models.operations.AllStarsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            AllStarsRequest req = new AllStarsRequest() {{
                format = "JSON";
                season = "provident";
            }}            

            AllStarsResponse res = sdk.allStars(req);

            if (res.playerInfos.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->