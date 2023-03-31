<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AdmobAccountsAdSourcesListPathParams;
import org.openapis.openapi.models.operations.AdmobAccountsAdSourcesListQueryParams;
import org.openapis.openapi.models.operations.AdmobAccountsAdSourcesListRequest;
import org.openapis.openapi.models.operations.AdmobAccountsAdSourcesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdmobAccountsAdSourcesListRequest req = new AdmobAccountsAdSourcesListRequest() {{
                pathParams = new AdmobAccountsAdSourcesListPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new AdmobAccountsAdSourcesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    pageSize = 423655;
                    pageToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
            }};            

            AdmobAccountsAdSourcesListResponse res = sdk.accounts.admobAccountsAdSourcesList(req);

            if (res.listAdSourcesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->