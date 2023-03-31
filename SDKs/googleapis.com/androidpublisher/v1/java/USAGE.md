<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AndroidpublisherPurchasesCancelSecurity;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesCancelPathParams;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesCancelQueryParams;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesCancelRequest;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesCancelRequest req = new AndroidpublisherPurchasesCancelRequest() {{
                security = new AndroidpublisherPurchasesCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AndroidpublisherPurchasesCancelPathParams() {{
                    packageName = "corrupti";
                    subscriptionId = "provident";
                    token = "distinctio";
                }};
                queryParams = new AndroidpublisherPurchasesCancelQueryParams() {{
                    alt = "json";
                    fields = "quibusdam";
                    key = "unde";
                    oauthToken = "nulla";
                    prettyPrint = false;
                    quotaUser = "corrupti";
                    userIp = "illum";
                }};
            }};            

            AndroidpublisherPurchasesCancelResponse res = sdk.purchases.androidpublisherPurchasesCancel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->