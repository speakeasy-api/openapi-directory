<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AbusiveexperiencereportSitesGetPathParams;
import org.openapis.openapi.models.operations.AbusiveexperiencereportSitesGetQueryParams;
import org.openapis.openapi.models.operations.AbusiveexperiencereportSitesGetRequest;
import org.openapis.openapi.models.operations.AbusiveexperiencereportSitesGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AbusiveexperiencereportSitesGetRequest req = new AbusiveexperiencereportSitesGetRequest() {{
                pathParams = new AbusiveexperiencereportSitesGetPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new AbusiveexperiencereportSitesGetQueryParams() {{
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

            AbusiveexperiencereportSitesGetResponse res = sdk.sites.abusiveexperiencereportSitesGet(req);

            if (res.siteSummaryResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->