<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AdexperiencereportSitesGetPathParams;
import org.openapis.openapi.models.operations.AdexperiencereportSitesGetQueryParams;
import org.openapis.openapi.models.operations.AdexperiencereportSitesGetRequest;
import org.openapis.openapi.models.operations.AdexperiencereportSitesGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexperiencereportSitesGetRequest req = new AdexperiencereportSitesGetRequest() {{
                pathParams = new AdexperiencereportSitesGetPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new AdexperiencereportSitesGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
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