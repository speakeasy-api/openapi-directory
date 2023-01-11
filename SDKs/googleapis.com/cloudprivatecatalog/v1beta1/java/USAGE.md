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

            CloudprivatecatalogOrganizationsCatalogsSearchRequest req = new CloudprivatecatalogOrganizationsCatalogsSearchRequest() {{
                security = new CloudprivatecatalogOrganizationsCatalogsSearchSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudprivatecatalogOrganizationsCatalogsSearchPathParams() {{
                    resource = "eum";
                }};
                queryParams = new CloudprivatecatalogOrganizationsCatalogsSearchQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "distinctio";
                    alt = "media";
                    callback = "sed";
                    fields = "sed";
                    key = "autem";
                    oauthToken = "ipsa";
                    pageSize = 3100161270969178692;
                    pageToken = "inventore";
                    prettyPrint = false;
                    query = "ad";
                    quotaUser = "eligendi";
                    uploadType = "quia";
                    uploadProtocol = "eum";
                }};
            }};

            CloudprivatecatalogOrganizationsCatalogsSearchResponse res = sdk.organizations.cloudprivatecatalogOrganizationsCatalogsSearch(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->