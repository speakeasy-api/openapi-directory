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

            AnalyticsadminAccountSummariesListRequest req = new AnalyticsadminAccountSummariesListRequest() {{
                security = new AnalyticsadminAccountSummariesListSecurity() {{
                    option1 = new AnalyticsadminAccountSummariesListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new AnalyticsadminAccountSummariesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "rerum";
                    alt = "media";
                    callback = "aut";
                    fields = "quia";
                    key = "debitis";
                    oauthToken = "harum";
                    pageSize = 3959252866103534258;
                    pageToken = "quo";
                    prettyPrint = false;
                    quotaUser = "a";
                    uploadType = "mollitia";
                    uploadProtocol = "dolorum";
                }};
            }};

            AnalyticsadminAccountSummariesListResponse res = sdk.accountSummaries.analyticsadminAccountSummariesList(req);

            if (res.googleAnalyticsAdminV1betaListAccountSummariesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->