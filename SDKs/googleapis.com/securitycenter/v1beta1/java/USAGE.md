<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsGroupSecurity;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsGroupPathParams;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsGroupQueryParams;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsGroupRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsGroupResponse;
import org.openapis.openapi.models.shared.GroupAssetsRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new SecuritycenterOrganizationsAssetsGroupQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GroupAssetsRequest() {{
                    compareDuration = "suscipit";
                    filter = "iure";
                    groupBy = "magnam";
                    pageSize = 891773;
                    pageToken = "ipsa";
                    readTime = "delectus";
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