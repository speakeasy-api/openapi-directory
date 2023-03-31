<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.LocalservicesAccountReportsSearchSecurity;
import org.openapis.openapi.models.operations.LocalservicesAccountReportsSearchQueryParams;
import org.openapis.openapi.models.operations.LocalservicesAccountReportsSearchRequest;
import org.openapis.openapi.models.operations.LocalservicesAccountReportsSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocalservicesAccountReportsSearchRequest req = new LocalservicesAccountReportsSearchRequest() {{
                security = new LocalservicesAccountReportsSearchSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new LocalservicesAccountReportsSearchQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    endDateDay = 602763;
                    endDateMonth = 857946;
                    endDateYear = 544883;
                    fields = "illum";
                    key = "vel";
                    oauthToken = "error";
                    pageSize = 645894;
                    pageToken = "suscipit";
                    prettyPrint = false;
                    query = "iure";
                    quotaUser = "magnam";
                    startDateDay = 891773;
                    startDateMonth = 56713;
                    startDateYear = 963663;
                    uploadType = "tempora";
                    uploadProtocol = "suscipit";
                }};
            }};            

            LocalservicesAccountReportsSearchResponse res = sdk.accountReports.localservicesAccountReportsSearch(req);

            if (res.googleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->