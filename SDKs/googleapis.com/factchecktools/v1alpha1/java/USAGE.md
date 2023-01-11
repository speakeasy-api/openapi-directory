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

            FactchecktoolsClaimsSearchRequest req = new FactchecktoolsClaimsSearchRequest() {{
                queryParams = new FactchecktoolsClaimsSearchQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    languageCode = "expedita";
                    maxAgeDays = 6044372234677422456;
                    oauthToken = "fugit";
                    offset = 1543572285742637646;
                    pageSize = 2661732831099943416;
                    pageToken = "rerum";
                    prettyPrint = false;
                    query = "debitis";
                    quotaUser = "voluptatum";
                    reviewPublisherSiteFilter = "et";
                    uploadType = "ut";
                    uploadProtocol = "dolorem";
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