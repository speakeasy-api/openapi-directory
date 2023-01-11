<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    packageName = "sit";
                    subscriptionId = "voluptas";
                    token = "culpa";
                }};
                queryParams = new AndroidpublisherPurchasesCancelQueryParams() {{
                    alt = "json";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    userIp = "et";
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