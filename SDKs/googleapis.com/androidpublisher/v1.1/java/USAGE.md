<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetSecurity;
import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetResponse;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInapppurchasesGetRequest req = new AndroidpublisherInapppurchasesGetRequest() {{
                alt = "json";
                fields = "corrupti";
                key = "provident";
                oauthToken = "distinctio";
                packageName = "quibusdam";
                prettyPrint = false;
                productId = "unde";
                quotaUser = "nulla";
                token = "corrupti";
                userIp = "illum";
            }}            

            AndroidpublisherInapppurchasesGetResponse res = sdk.inapppurchases.androidpublisherInapppurchasesGet(req, new AndroidpublisherInapppurchasesGetSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->