<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsCatalogsSearchRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsCatalogsSearchResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsCatalogsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogOrganizationsCatalogsSearchRequest req = new CloudprivatecatalogOrganizationsCatalogsSearchRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                pageSize = 423655L;
                pageToken = "error";
                prettyPrint = false;
                query = "deserunt";
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            CloudprivatecatalogOrganizationsCatalogsSearchResponse res = sdk.organizations.cloudprivatecatalogOrganizationsCatalogsSearch(req, new CloudprivatecatalogOrganizationsCatalogsSearchSecurity("debitis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->