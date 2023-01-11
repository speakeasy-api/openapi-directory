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

            ChromemanagementCustomersAppsCountChromeAppRequestsRequest req = new ChromemanagementCustomersAppsCountChromeAppRequestsRequest() {{
                security = new ChromemanagementCustomersAppsCountChromeAppRequestsSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ChromemanagementCustomersAppsCountChromeAppRequestsPathParams() {{
                    customer = "sit";
                }};
                queryParams = new ChromemanagementCustomersAppsCountChromeAppRequestsQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    orderBy = "fugit";
                    orgUnitId = "et";
                    pageSize = 2661732831099943416;
                    pageToken = "rerum";
                    prettyPrint = false;
                    quotaUser = "debitis";
                    uploadType = "voluptatum";
                    uploadProtocol = "et";
                }};
            }};

            ChromemanagementCustomersAppsCountChromeAppRequestsResponse res = sdk.customers.chromemanagementCustomersAppsCountChromeAppRequests(req);

            if (res.googleChromeManagementV1CountChromeAppRequestsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->