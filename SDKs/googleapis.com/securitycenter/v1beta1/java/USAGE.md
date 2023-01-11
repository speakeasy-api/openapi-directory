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
                    parent = "ab";
                }};
                queryParams = new SecuritycenterOrganizationsAssetsGroupQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "iure";
                    alt = "proto";
                    callback = "et";
                    fields = "quis";
                    key = "et";
                    oauthToken = "quia";
                    prettyPrint = true;
                    quotaUser = "perferendis";
                    uploadType = "fugit";
                    uploadProtocol = "earum";
                }};
                request = new GroupAssetsRequest() {{
                    compareDuration = "et";
                    filter = "magni";
                    groupBy = "voluptatem";
                    pageSize = 7178277312729210;
                    pageToken = "repudiandae";
                    readTime = "nisi";
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