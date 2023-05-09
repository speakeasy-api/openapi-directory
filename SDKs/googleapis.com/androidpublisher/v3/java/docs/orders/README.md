# orders

### Available Operations

* [androidpublisherOrdersRefund](#androidpublisherordersrefund) - Refunds a user's subscription or in-app purchase order. Orders older than 1 year cannot be refunded.

## androidpublisherOrdersRefund

Refunds a user's subscription or in-app purchase order. Orders older than 1 year cannot be refunded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherOrdersRefundRequest;
import org.openapis.openapi.models.operations.AndroidpublisherOrdersRefundResponse;
import org.openapis.openapi.models.operations.AndroidpublisherOrdersRefundSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherOrdersRefundRequest req = new AndroidpublisherOrdersRefundRequest("itaque", "nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "officiis";
                fields = "enim";
                key = "officia";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "eum";
                revoke = false;
                uploadType = "repudiandae";
                uploadProtocol = "accusantium";
            }};            

            AndroidpublisherOrdersRefundResponse res = sdk.orders.androidpublisherOrdersRefund(req, new AndroidpublisherOrdersRefundSecurity("officia", "impedit") {{
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
