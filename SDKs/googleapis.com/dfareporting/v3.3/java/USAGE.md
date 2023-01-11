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
                    profileId = "quasi";
                    summaryAccountId = "odit";
                }};
                queryParams = new DfareportingAccountActiveAdSummariesGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "voluptas";
                    alt = "json";
                    callback = "voluptate";
                    fields = "aperiam";
                    key = "aut";
                    oauthToken = "unde";
                    prettyPrint = true;
                    quotaUser = "aspernatur";
                    uploadType = "quia";
                    uploadProtocol = "autem";
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