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

            DfareportingAccountActiveAdSummariesGetRequest req = new DfareportingAccountActiveAdSummariesGetRequest() {{
                security = new DfareportingAccountActiveAdSummariesGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DfareportingAccountActiveAdSummariesGetPathParams() {{
                    profileId = "aspernatur";
                    summaryAccountId = "a";
                }};
                queryParams = new DfareportingAccountActiveAdSummariesGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "repellat";
                    alt = "media";
                    callback = "dolore";
                    fields = "omnis";
                    key = "aliquam";
                    oauthToken = "provident";
                    prettyPrint = true;
                    quotaUser = "aut";
                    uploadType = "at";
                    uploadProtocol = "omnis";
                }};
            }};

            DfareportingAccountActiveAdSummariesGetResponse res = sdk.accountActiveAdSummaries.dfareportingAccountActiveAdSummariesGet(req);

            if (res.accountActiveAdSummary.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->