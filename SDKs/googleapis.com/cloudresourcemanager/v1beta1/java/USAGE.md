<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetSecurityOption2;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetPathParams;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetQueryParams;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerOrganizationsGetRequest req = new CloudresourcemanagerOrganizationsGetRequest() {{
                security = new CloudresourcemanagerOrganizationsGetSecurity() {{
                    option1 = new CloudresourcemanagerOrganizationsGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new CloudresourcemanagerOrganizationsGetPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new CloudresourcemanagerOrganizationsGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
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
            }};            

            CloudresourcemanagerOrganizationsGetResponse res = sdk.organizations.cloudresourcemanagerOrganizationsGet(req);

            if (res.organization.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->