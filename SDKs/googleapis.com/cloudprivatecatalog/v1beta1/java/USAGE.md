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
                    resource = "sit";
                }};
                queryParams = new CloudprivatecatalogOrganizationsCatalogsSearchQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    pageSize = 8274930044578894929;
                    pageToken = "et";
                    prettyPrint = true;
                    query = "rerum";
                    quotaUser = "dicta";
                    uploadType = "debitis";
                    uploadProtocol = "voluptatum";
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