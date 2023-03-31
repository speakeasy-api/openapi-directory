<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.PlayByPlayFormatEnum;
import org.openapis.openapi.models.operations.PlayByPlayPathParams;
import org.openapis.openapi.models.operations.PlayByPlayRequest;
import org.openapis.openapi.models.operations.PlayByPlayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = new SchemeAPIKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            PlayByPlayRequest req = new PlayByPlayRequest() {{
                pathParams = new PlayByPlayPathParams() {{
                    format = "JSON";
                    hometeam = "provident";
                    season = "distinctio";
                    week = "quibusdam";
                }};
            }};            

            PlayByPlayResponse res = sdk.playByPlay(req);

            if (res.playByPlay.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->