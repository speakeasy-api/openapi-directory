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

            SecuritycenterOrganizationsAssetsGroupRequest req = new SecuritycenterOrganizationsAssetsGroupRequest() {{
                security = new SecuritycenterOrganizationsAssetsGroupSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new SecuritycenterOrganizationsAssetsGroupPathParams() {{
                    parent = "sit";
                }};
                queryParams = new SecuritycenterOrganizationsAssetsGroupQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new GroupAssetsRequest() {{
                    compareDuration = "dicta";
                    filter = "debitis";
                    groupBy = "voluptatum";
                    pageSize = 2339563716805116249;
                    pageToken = "ut";
                    readTime = "dolorem";
                }};
            }};

            SecuritycenterOrganizationsAssetsGroupResponse res = sdk.organizations.securitycenterOrganizationsAssetsGroup(req);

            if (res.groupAssetsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->