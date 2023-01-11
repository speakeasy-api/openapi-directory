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
                    customer = "ipsam";
                }};
                queryParams = new ChromemanagementCustomersAppsCountChromeAppRequestsQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "numquam";
                    alt = "media";
                    callback = "dolores";
                    fields = "aut";
                    key = "est";
                    oauthToken = "nobis";
                    orderBy = "et";
                    orgUnitId = "ea";
                    pageSize = 6325129825433886288;
                    pageToken = "consequatur";
                    prettyPrint = true;
                    quotaUser = "voluptate";
                    uploadType = "dolore";
                    uploadProtocol = "dignissimos";
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