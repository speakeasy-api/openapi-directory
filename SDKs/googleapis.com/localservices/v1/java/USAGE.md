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
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    endDateDay = 3390393562759376202;
                    endDateMonth = 2669985732393126063;
                    endDateYear = 1774932891286980153;
                    fields = "voluptas";
                    key = "fugit";
                    oauthToken = "et";
                    pageSize = 2661732831099943416;
                    pageToken = "rerum";
                    prettyPrint = false;
                    query = "debitis";
                    quotaUser = "voluptatum";
                    startDateDay = 2339563716805116249;
                    startDateMonth = 7144924247938981575;
                    startDateYear = 161231572858529631;
                    uploadType = "et";
                    uploadProtocol = "voluptate";
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