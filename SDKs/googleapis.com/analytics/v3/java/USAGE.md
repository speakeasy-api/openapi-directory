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

            AnalyticsDataGaGetRequest req = new AnalyticsDataGaGetRequest() {{
                security = new AnalyticsDataGaGetSecurity() {{
                    option1 = new AnalyticsDataGaGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new AnalyticsDataGaGetQueryParams() {{
                    alt = "json";
                    dimensions = "voluptas";
                    endDate = "culpa";
                    fields = "expedita";
                    filters = "consequuntur";
                    ids = "dolor";
                    includeEmptyRows = true;
                    key = "voluptas";
                    maxResults = 8274930044578894929;
                    metrics = "et";
                    oauthToken = "nihil";
                    output = "json";
                    prettyPrint = false;
                    quotaUser = "debitis";
                    samplingLevel = "DEFAULT";
                    segment = "et";
                    sort = "ut";
                    startDate = "dolorem";
                    startIndex = 7259475919510918339;
                    userIp = "voluptate";
                }};
            }};

            AnalyticsDataGaGetResponse res = sdk.data.analyticsDataGaGet(req);

            if (res.gaData.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->