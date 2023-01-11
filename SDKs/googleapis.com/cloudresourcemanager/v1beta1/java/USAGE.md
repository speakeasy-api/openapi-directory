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
                    name = "sit";
                }};
                queryParams = new CloudresourcemanagerOrganizationsGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    organizationId = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
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