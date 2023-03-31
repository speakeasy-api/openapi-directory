<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchSecurity;
import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchPathParams;
import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchQueryParams;
import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchRequest;
import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KmsinventoryOrganizationsProtectedResourcesSearchRequest req = new KmsinventoryOrganizationsProtectedResourcesSearchRequest() {{
                security = new KmsinventoryOrganizationsProtectedResourcesSearchSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new KmsinventoryOrganizationsProtectedResourcesSearchPathParams() {{
                    scope = "corrupti";
                }};
                queryParams = new KmsinventoryOrganizationsProtectedResourcesSearchQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    cryptoKey = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    pageSize = 623564;
                    pageToken = "deserunt";
                    prettyPrint = false;
                    quotaUser = "suscipit";
                    uploadType = "iure";
                    uploadProtocol = "magnam";
                }};
            }};            

            KmsinventoryOrganizationsProtectedResourcesSearchResponse res = sdk.organizations.kmsinventoryOrganizationsProtectedResourcesSearch(req);

            if (res.googleCloudKmsInventoryV1SearchProtectedResourcesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->