# organizations

### Available Operations

* [kmsinventoryOrganizationsProtectedResourcesSearch](#kmsinventoryorganizationsprotectedresourcessearch) - Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.

## kmsinventoryOrganizationsProtectedResourcesSearch

Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchRequest;
import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchResponse;
import org.openapis.openapi.models.operations.KmsinventoryOrganizationsProtectedResourcesSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KmsinventoryOrganizationsProtectedResourcesSearchRequest req = new KmsinventoryOrganizationsProtectedResourcesSearchRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                cryptoKey = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                pageSize = 392785L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            KmsinventoryOrganizationsProtectedResourcesSearchResponse res = sdk.organizations.kmsinventoryOrganizationsProtectedResourcesSearch(req, new KmsinventoryOrganizationsProtectedResourcesSearchSecurity("veritatis", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudKmsInventoryV1SearchProtectedResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
