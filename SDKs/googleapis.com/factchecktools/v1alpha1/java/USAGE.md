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
                    dollarXgafv = "2";
                    accessToken = "at";
                    alt = "json";
                    callback = "unde";
                    fields = "voluptatem";
                    key = "dolorum";
                    languageCode = "sed";
                    maxAgeDays = 6956020902767859994;
                    oauthToken = "est";
                    offset = 7781412893310479408;
                    pageSize = 7279352338994932997;
                    pageToken = "quam";
                    prettyPrint = false;
                    query = "non";
                    quotaUser = "aut";
                    reviewPublisherSiteFilter = "aspernatur";
                    uploadType = "accusantium";
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