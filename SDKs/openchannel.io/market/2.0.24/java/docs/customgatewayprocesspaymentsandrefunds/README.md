# customGatewayProcessPaymentsAndRefunds

### Available Operations

* [postCustomGatewayPaymentOwnershipId](#postcustomgatewaypaymentownershipid) - Adds a payment for an app on behalf of a user
* [postCustomGatewayRefundOwnershipId](#postcustomgatewayrefundownershipid) - Fully or partially refund payment for an app on behalf of a user

## postCustomGatewayPaymentOwnershipId

- Results are returned for the market provided within the basic authentication credentials 
- Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCustomGatewayPaymentOwnershipIdRequest;
import org.openapis.openapi.models.operations.PostCustomGatewayPaymentOwnershipIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam", "commodi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostCustomGatewayPaymentOwnershipIdRequest req = new PostCustomGatewayPaymentOwnershipIdRequest(466311L, "molestiae") {{
                customData = "velit";
                date = 623510L;
                developerAmount = 158969L;
                feeAmount = 338007L;
                marketplaceAmount = 110375L;
            }};            

            PostCustomGatewayPaymentOwnershipIdResponse res = sdk.customGatewayProcessPaymentsAndRefunds.postCustomGatewayPaymentOwnershipId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCustomGatewayRefundOwnershipId

- Results are returned for the market provided within the basic authentication credentials
- Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCustomGatewayRefundOwnershipIdRequest;
import org.openapis.openapi.models.operations.PostCustomGatewayRefundOwnershipIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum", "animi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostCustomGatewayRefundOwnershipIdRequest req = new PostCustomGatewayRefundOwnershipIdRequest(317202L, "odit") {{
                customData = "quo";
                date = 196582L;
                developerAmount = 949572L;
                feeAmount = 368725L;
                marketplaceAmount = 662527L;
            }};            

            PostCustomGatewayRefundOwnershipIdResponse res = sdk.customGatewayProcessPaymentsAndRefunds.postCustomGatewayRefundOwnershipId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
