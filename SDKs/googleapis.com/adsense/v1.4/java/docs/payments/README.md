# payments

### Available Operations

* [adsensePaymentsList](#adsensepaymentslist) - List the payments for this AdSense account.

## adsensePaymentsList

List the payments for this AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensePaymentsListRequest;
import org.openapis.openapi.models.operations.AdsensePaymentsListResponse;
import org.openapis.openapi.models.operations.AdsensePaymentsListSecurity;
import org.openapis.openapi.models.operations.AdsensePaymentsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsensePaymentsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensePaymentsListRequest req = new AdsensePaymentsListRequest() {{
                alt = AltEnum.JSON;
                fields = "provident";
                key = "nobis";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "delectus";
                userIp = "quaerat";
            }};            

            AdsensePaymentsListResponse res = sdk.payments.adsensePaymentsList(req, new AdsensePaymentsListSecurity() {{
                option1 = new AdsensePaymentsListSecurityOption1("quos", "aliquid") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.payments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
