<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FactchecktoolsClaimsSearchQueryParams;
import org.openapis.openapi.models.operations.FactchecktoolsClaimsSearchRequest;
import org.openapis.openapi.models.operations.FactchecktoolsClaimsSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FactchecktoolsClaimsSearchRequest req = new FactchecktoolsClaimsSearchRequest() {{
                queryParams = new FactchecktoolsClaimsSearchQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    languageCode = "corrupti";
                    maxAgeDays = 847252;
                    oauthToken = "vel";
                    offset = 623564;
                    pageSize = 645894;
                    pageToken = "suscipit";
                    prettyPrint = false;
                    query = "iure";
                    quotaUser = "magnam";
                    reviewPublisherSiteFilter = "debitis";
                    uploadType = "ipsa";
                    uploadProtocol = "delectus";
                }};
            }};            

            FactchecktoolsClaimsSearchResponse res = sdk.claims.factchecktoolsClaimsSearch(req);

            if (res.googleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->