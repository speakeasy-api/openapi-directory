<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerOrganizationsGetRequest req = new CloudresourcemanagerOrganizationsGetRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                organizationId = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            CloudresourcemanagerOrganizationsGetResponse res = sdk.organizations.cloudresourcemanagerOrganizationsGet(req, new CloudresourcemanagerOrganizationsGetSecurity() {{
                option1 = new CloudresourcemanagerOrganizationsGetSecurityOption1("iure", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.organization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->