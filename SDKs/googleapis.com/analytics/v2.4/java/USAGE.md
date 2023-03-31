<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AnalyticsDataGetSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsDataGetSecurityOption2;
import org.openapis.openapi.models.operations.AnalyticsDataGetSecurity;
import org.openapis.openapi.models.operations.AnalyticsDataGetQueryParams;
import org.openapis.openapi.models.operations.AnalyticsDataGetRequest;
import org.openapis.openapi.models.operations.AnalyticsDataGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsDataGetRequest req = new AnalyticsDataGetRequest() {{
                security = new AnalyticsDataGetSecurity() {{
                    option1 = new AnalyticsDataGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new AnalyticsDataGetQueryParams() {{
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
                }};
            }};            

            AnalyticsDataGetResponse res = sdk.data.analyticsDataGet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->