<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AnalyticsDataGetSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsDataGetSecurityOption2;
import org.openapis.openapi.models.operations.AnalyticsDataGetSecurity;
import org.openapis.openapi.models.operations.AnalyticsDataGetRequest;
import org.openapis.openapi.models.operations.AnalyticsDataGetResponse;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsDataGetRequest req = new AnalyticsDataGetRequest() {{
                alt = "atom";
                dimensions = "corrupti";
                endDate = "provident";
                fields = "distinctio";
                filters = "quibusdam";
                ids = "unde";
                key = "nulla";
                maxResults = 544883;
                metrics = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                segment = "deserunt";
                sort = "suscipit";
                startDate = "iure";
                startIndex = 297534;
                userIp = "debitis";
            }}            

            AnalyticsDataGetResponse res = sdk.data.analyticsDataGet(req, new AnalyticsDataGetSecurity() {{
                option1 = new AnalyticsDataGetSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->