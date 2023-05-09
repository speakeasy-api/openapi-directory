<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryAspsDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryAspsDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryAspsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryAspsDeleteRequest req = new DirectoryAspsDeleteRequest(548814L, "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            DirectoryAspsDeleteResponse res = sdk.asps.directoryAspsDelete(req, new DirectoryAspsDeleteSecurity("iure", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->