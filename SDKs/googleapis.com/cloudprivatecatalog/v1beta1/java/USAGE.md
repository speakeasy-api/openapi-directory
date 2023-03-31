<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsCatalogsSearchSecurity;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsCatalogsSearchPathParams;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsCatalogsSearchQueryParams;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsCatalogsSearchRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsCatalogsSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    resource = "corrupti";
                }};
                queryParams = new CloudprivatecatalogOrganizationsCatalogsSearchQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    pageSize = 423655;
                    pageToken = "error";
                    prettyPrint = false;
                    query = "deserunt";
                    quotaUser = "suscipit";
                    uploadType = "iure";
                    uploadProtocol = "magnam";
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