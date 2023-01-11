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
                    dimensions = "est";
                    endDate = "est";
                    fields = "et";
                    filters = "ea";
                    ids = "qui";
                    includeEmptyRows = true;
                    key = "odit";
                    maxResults = 8912864906962859578;
                    metrics = "voluptate";
                    oauthToken = "ut";
                    output = "json";
                    prettyPrint = false;
                    quotaUser = "enim";
                    samplingLevel = "DEFAULT";
                    segment = "hic";
                    sort = "cumque";
                    startDate = "quia";
                    startIndex = 8100496912418235212;
                    userIp = "inventore";
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