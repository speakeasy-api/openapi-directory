# projects

### Available Operations

* [publiccaProjectsLocationsExternalAccountKeysCreate](#publiccaprojectslocationsexternalaccountkeyscreate) - Creates a new ExternalAccountKey bound to the project.

## publiccaProjectsLocationsExternalAccountKeysCreate

Creates a new ExternalAccountKey bound to the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PubliccaProjectsLocationsExternalAccountKeysCreateRequest;
import org.openapis.openapi.models.operations.PubliccaProjectsLocationsExternalAccountKeysCreateResponse;
import org.openapis.openapi.models.operations.PubliccaProjectsLocationsExternalAccountKeysCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubliccaProjectsLocationsExternalAccountKeysCreateRequest req = new PubliccaProjectsLocationsExternalAccountKeysCreateRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            PubliccaProjectsLocationsExternalAccountKeysCreateResponse res = sdk.projects.publiccaProjectsLocationsExternalAccountKeysCreate(req, new PubliccaProjectsLocationsExternalAccountKeysCreateSecurity("excepturi", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.externalAccountKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
