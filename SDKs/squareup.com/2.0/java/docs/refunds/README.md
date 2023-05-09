# refunds

### Available Operations

* [getPaymentRefund](#getpaymentrefund) - GetPaymentRefund
* [listPaymentRefunds](#listpaymentrefunds) - ListPaymentRefunds
* [refundPayment](#refundpayment) - RefundPayment

## getPaymentRefund

Retrieves a specific refund using the `refund_id`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentRefundRequest;
import org.openapis.openapi.models.operations.GetPaymentRefundResponse;
import org.openapis.openapi.models.operations.GetPaymentRefundSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentRefundRequest req = new GetPaymentRefundRequest("cum");            

            GetPaymentRefundResponse res = sdk.refunds.getPaymentRefund(req, new GetPaymentRefundSecurity("deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getPaymentRefundResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPaymentRefunds

Retrieves a list of refunds for the account making the request.

Results are eventually consistent, and new refunds or changes to refunds might take several
seconds to appear.

The maximum results per page is 100.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPaymentRefundsRequest;
import org.openapis.openapi.models.operations.ListPaymentRefundsResponse;
import org.openapis.openapi.models.operations.ListPaymentRefundsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListPaymentRefundsRequest req = new ListPaymentRefundsRequest() {{
                beginTime = "sunt";
                cursor = "reprehenderit";
                endTime = "ullam";
                limit = 536347L;
                locationId = "repellendus";
                sortOrder = "tempora";
                sourceType = "laborum";
                status = "quidem";
            }};            

            ListPaymentRefundsResponse res = sdk.refunds.listPaymentRefunds(req, new ListPaymentRefundsSecurity("veniam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPaymentRefundsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## refundPayment

Refunds a payment. You can refund the entire payment amount or a
portion of it. You can use this endpoint to refund a card payment or record a 
refund of a cash or external payment. For more information, see
[Refund Payment](https://developer.squareup.com/docs/payments-api/refund-payments).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RefundPaymentResponse;
import org.openapis.openapi.models.operations.RefundPaymentSecurity;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.RefundPaymentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RefundPaymentRequest req = new RefundPaymentRequest(                new Money() {{
                                amount = 709929L;
                                currency = "impedit";
                            }};, "totam", "alias") {{
                appFeeMoney = new Money() {{
                    amount = 859509L;
                    currency = "accusamus";
                }};;
                reason = "id";
            }};            

            RefundPaymentResponse res = sdk.refunds.refundPayment(req, new RefundPaymentSecurity("reprehenderit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.refundPaymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
