<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsDataGetRequest;
import org.openapis.openapi.models.operations.AnalyticsDataGetResponse;
import org.openapis.openapi.models.operations.AnalyticsDataGetSecurity;
import org.openapis.openapi.models.operations.AnalyticsDataGetSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsDataGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsDataGetRequest req = new AnalyticsDataGetRequest("corrupti", "provident", "distinctio", "quibusdam") {{
                alt = AltEnum.ATOM;
                dimensions = "unde";
                fields = "nulla";
                filters = "corrupti";
                key = "illum";
                maxResults = 423655L;
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                segment = "suscipit";
                sort = "iure";
                startIndex = 297534L;
                userIp = "debitis";
            }};            

            AnalyticsDataGetResponse res = sdk.data.analyticsDataGet(req, new AnalyticsDataGetSecurity() {{
                option1 = new AnalyticsDataGetSecurityOption1("ipsa", "delectus") {{
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
    }
}
```
<!-- End SDK Example Usage -->