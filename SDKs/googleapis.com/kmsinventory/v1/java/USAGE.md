<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchSecurity;
import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchRequest;
import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KmsinventoryOrganizationsProtectedResourcesSearchRequest req = new KmsinventoryOrganizationsProtectedResourcesSearchRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                cryptoKey = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                pageSize = 423655;
                pageToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                scope = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }}            

            KmsinventoryOrganizationsProtectedResourcesSearchResponse res = sdk.organizations.kmsinventoryOrganizationsProtectedResourcesSearch(req, new KmsinventoryOrganizationsProtectedResourcesSearchSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudKmsInventoryV1SearchProtectedResourcesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->