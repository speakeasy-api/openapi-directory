<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    dimensions = "voluptas";
                    endDate = "culpa";
                    fields = "expedita";
                    filters = "consequuntur";
                    ids = "dolor";
                    key = "expedita";
                    maxResults = 6044372234677422456;
                    metrics = "fugit";
                    oauthToken = "et";
                    prettyPrint = true;
                    quotaUser = "rerum";
                    segment = "dicta";
                    sort = "debitis";
                    startDate = "voluptatum";
                    startIndex = 2339563716805116249;
                    userIp = "ut";
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