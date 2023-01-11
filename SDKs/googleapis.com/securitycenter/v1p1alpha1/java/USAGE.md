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

            SecuritycenterOrganizationsOperationsCancelRequest req = new SecuritycenterOrganizationsOperationsCancelRequest() {{
                security = new SecuritycenterOrganizationsOperationsCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new SecuritycenterOrganizationsOperationsCancelPathParams() {{
                    name = "ut";
                }};
                queryParams = new SecuritycenterOrganizationsOperationsCancelQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "pariatur";
                    alt = "json";
                    callback = "cumque";
                    fields = "laboriosam";
                    key = "sed";
                    oauthToken = "blanditiis";
                    prettyPrint = true;
                    quotaUser = "voluptatum";
                    uploadType = "exercitationem";
                    uploadProtocol = "inventore";
                }};
            }};

            SecuritycenterOrganizationsOperationsCancelResponse res = sdk.organizations.securitycenterOrganizationsOperationsCancel(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->