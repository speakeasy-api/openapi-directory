<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DfareportingAccountActiveAdSummariesGetSecurity;
import org.openapis.openapi.models.operations.DfareportingAccountActiveAdSummariesGetPathParams;
import org.openapis.openapi.models.operations.DfareportingAccountActiveAdSummariesGetQueryParams;
import org.openapis.openapi.models.operations.DfareportingAccountActiveAdSummariesGetRequest;
import org.openapis.openapi.models.operations.DfareportingAccountActiveAdSummariesGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    profileId = "corrupti";
                    summaryAccountId = "provident";
                }};
                queryParams = new DfareportingAccountActiveAdSummariesGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "quibusdam";
                    alt = "media";
                    callback = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
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