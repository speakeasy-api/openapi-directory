<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AnalyticsadminAccountSummariesListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminAccountSummariesListSecurityOption2;
import org.openapis.openapi.models.operations.AnalyticsadminAccountSummariesListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminAccountSummariesListQueryParams;
import org.openapis.openapi.models.operations.AnalyticsadminAccountSummariesListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminAccountSummariesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    pageSize = 847252;
                    pageToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
            }};            

            AnalyticsadminAccountSummariesListResponse res = sdk.accountSummaries.analyticsadminAccountSummariesList(req);

            if (res.googleAnalyticsAdminV1alphaListAccountSummariesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->