# orders

### Available Operations

* [androidpublisherOrdersRefund](#androidpublisherordersrefund) - Refund a user's subscription or in-app purchase order.

## androidpublisherOrdersRefund

Refund a user's subscription or in-app purchase order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherOrdersRefundRequest;
import org.openapis.openapi.models.operations.AndroidpublisherOrdersRefundResponse;
import org.openapis.openapi.models.operations.AndroidpublisherOrdersRefundSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherOrdersRefundRequest req = new AndroidpublisherOrdersRefundRequest("distinctio", "quod") {{
                alt = AltEnum.JSON;
                fields = "dignissimos";
                key = "inventore";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "totam";
                revoke = false;
                userIp = "accusamus";
            }};            

            AndroidpublisherOrdersRefundResponse res = sdk.orders.androidpublisherOrdersRefund(req, new AndroidpublisherOrdersRefundSecurity("aliquam", "odio") {{
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
