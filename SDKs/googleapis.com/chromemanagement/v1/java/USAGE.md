<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ChromemanagementCustomersAppsCountChromeAppRequestsSecurity;
import org.openapis.openapi.models.operations.ChromemanagementCustomersAppsCountChromeAppRequestsPathParams;
import org.openapis.openapi.models.operations.ChromemanagementCustomersAppsCountChromeAppRequestsQueryParams;
import org.openapis.openapi.models.operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest;
import org.openapis.openapi.models.operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    customer = "corrupti";
                }};
                queryParams = new ChromemanagementCustomersAppsCountChromeAppRequestsQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    orderBy = "vel";
                    orgUnitId = "error";
                    pageSize = 645894;
                    pageToken = "suscipit";
                    prettyPrint = false;
                    quotaUser = "iure";
                    uploadType = "magnam";
                    uploadProtocol = "debitis";
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