<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.PlayByPlayFormatEnum;
import org.openapis.openapi.models.operations.PlayByPlayRequest;
import org.openapis.openapi.models.operations.PlayByPlayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayByPlayRequest req = new PlayByPlayRequest() {{
                format = "JSON";
                hometeam = "provident";
                season = "distinctio";
                week = "quibusdam";
            }}            

            PlayByPlayResponse res = sdk.playByPlay(req);

            if (res.playByPlay.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->