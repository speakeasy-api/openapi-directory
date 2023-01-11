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
                    dollarXgafv = "1";
                    accessToken = "rerum";
                    alt = "proto";
                    callback = "sit";
                    endDateDay = 2031768245481661634;
                    endDateMonth = 3012206272612525779;
                    endDateYear = 6893758365320311086;
                    fields = "et";
                    key = "rerum";
                    oauthToken = "consectetur";
                    pageSize = 6573908137435751237;
                    pageToken = "labore";
                    prettyPrint = false;
                    query = "quo";
                    quotaUser = "autem";
                    startDateDay = 2034973696394282330;
                    startDateMonth = 5259426522700221464;
                    startDateYear = 3399465935352536048;
                    uploadType = "iure";
                    uploadProtocol = "ut";
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