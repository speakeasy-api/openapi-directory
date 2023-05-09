<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesCancelRequest;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesCancelResponse;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesCancelRequest req = new AndroidpublisherPurchasesCancelRequest("corrupti", "provident", "distinctio") {{
                alt = AltEnum.JSON;
                fields = "quibusdam";
                key = "unde";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "corrupti";
                userIp = "illum";
            }};            

            AndroidpublisherPurchasesCancelResponse res = sdk.purchases.androidpublisherPurchasesCancel(req, new AndroidpublisherPurchasesCancelSecurity("vel", "error") {{
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