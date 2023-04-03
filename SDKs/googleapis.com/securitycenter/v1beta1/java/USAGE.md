<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsGroupSecurity;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsGroupRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsAssetsGroupResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GroupAssetsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsAssetsGroupRequest req = new SecuritycenterOrganizationsAssetsGroupRequest() {{
                dollarXgafv = "2";
                groupAssetsRequest = new GroupAssetsRequest() {{
                    compareDuration = "provident";
                    filter = "distinctio";
                    groupBy = "quibusdam";
                    pageSize = 602763;
                    pageToken = "nulla";
                    readTime = "corrupti";
                }};
                accessToken = "illum";
                alt = "media";
                callback = "error";
                fields = "deserunt";
                key = "suscipit";
                oauthToken = "iure";
                parent = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "ipsa";
                uploadProtocol = "delectus";
            }}            

            SecuritycenterOrganizationsAssetsGroupResponse res = sdk.organizations.securitycenterOrganizationsAssetsGroup(req, new SecuritycenterOrganizationsAssetsGroupSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groupAssetsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->