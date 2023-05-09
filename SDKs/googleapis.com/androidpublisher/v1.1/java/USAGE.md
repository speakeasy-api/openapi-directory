<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInapppurchasesGetRequest req = new AndroidpublisherInapppurchasesGetRequest("corrupti", "provident", "distinctio") {{
                alt = AltEnum.JSON;
                fields = "quibusdam";
                key = "unde";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "corrupti";
                userIp = "illum";
            }};            

            AndroidpublisherInapppurchasesGetResponse res = sdk.inapppurchases.androidpublisherInapppurchasesGet(req, new AndroidpublisherInapppurchasesGetSecurity("vel", "error") {{
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