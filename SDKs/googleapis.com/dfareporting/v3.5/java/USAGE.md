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
                    profileId = "eum";
                    summaryAccountId = "voluptates";
                }};
                queryParams = new DfareportingAccountActiveAdSummariesGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "aliquid";
                    alt = "json";
                    callback = "ut";
                    fields = "dolor";
                    key = "tempora";
                    oauthToken = "et";
                    prettyPrint = true;
                    quotaUser = "est";
                    uploadType = "quibusdam";
                    uploadProtocol = "minima";
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