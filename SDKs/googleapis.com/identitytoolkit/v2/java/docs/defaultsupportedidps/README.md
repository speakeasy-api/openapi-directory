# defaultSupportedIdps

### Available Operations

* [identitytoolkitDefaultSupportedIdpsList](#identitytoolkitdefaultsupportedidpslist) - List all default supported Idps.

## identitytoolkitDefaultSupportedIdpsList

List all default supported Idps.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitDefaultSupportedIdpsListRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitDefaultSupportedIdpsListResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitDefaultSupportedIdpsListSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitDefaultSupportedIdpsListSecurityOption1;
import org.openapis.openapi.models.operations.IdentitytoolkitDefaultSupportedIdpsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitDefaultSupportedIdpsListRequest req = new IdentitytoolkitDefaultSupportedIdpsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "necessitatibus";
                key = "sint";
                oauthToken = "officia";
                pageSize = 223081L;
                pageToken = "debitis";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "dolorum";
                uploadProtocol = "in";
            }};            

            IdentitytoolkitDefaultSupportedIdpsListResponse res = sdk.defaultSupportedIdps.identitytoolkitDefaultSupportedIdpsList(req, new IdentitytoolkitDefaultSupportedIdpsListSecurity() {{
                option1 = new IdentitytoolkitDefaultSupportedIdpsListSecurityOption1("in", "illum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
