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

            AdexperiencereportSitesGetRequest req = new AdexperiencereportSitesGetRequest() {{
                pathParams = new AdexperiencereportSitesGetPathParams() {{
                    name = "et";
                }};
                queryParams = new AdexperiencereportSitesGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "qui";
                    alt = "media";
                    callback = "sint";
                    fields = "aperiam";
                    key = "nulla";
                    oauthToken = "odit";
                    prettyPrint = true;
                    quotaUser = "ea";
                    uploadType = "mollitia";
                    uploadProtocol = "eveniet";
                }};
            }};

            AdexperiencereportSitesGetResponse res = sdk.sites.adexperiencereportSitesGet(req);

            if (res.siteSummaryResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->