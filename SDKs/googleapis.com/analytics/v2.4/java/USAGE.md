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
                    dimensions = "distinctio";
                    endDate = "assumenda";
                    fields = "et";
                    filters = "alias";
                    ids = "in";
                    key = "repellendus";
                    maxResults = 401577251513399995;
                    metrics = "sed";
                    oauthToken = "praesentium";
                    prettyPrint = true;
                    quotaUser = "sunt";
                    segment = "odit";
                    sort = "alias";
                    startDate = "voluptas";
                    startIndex = 1609080482621670973;
                    userIp = "ratione";
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