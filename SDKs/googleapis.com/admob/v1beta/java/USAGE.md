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

            AdmobAccountsAdSourcesListRequest req = new AdmobAccountsAdSourcesListRequest() {{
                pathParams = new AdmobAccountsAdSourcesListPathParams() {{
                    parent = "praesentium";
                }};
                queryParams = new AdmobAccountsAdSourcesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "ab";
                    alt = "media";
                    callback = "minus";
                    fields = "quo";
                    key = "enim";
                    oauthToken = "eaque";
                    pageSize = 2653267917996046848;
                    pageToken = "maxime";
                    prettyPrint = false;
                    quotaUser = "qui";
                    uploadType = "ea";
                    uploadProtocol = "porro";
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