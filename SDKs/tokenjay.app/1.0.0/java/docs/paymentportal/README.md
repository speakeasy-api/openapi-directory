# paymentPortal

## Overview

ErgoPay payment portal

### Available Operations

* [addPaymentRequest](#addpaymentrequest) - Creates a new payment request. Will return request id to check for transaction state and ergopay url to show the user as QR code
* [getPaymentState](#getpaymentstate) - Returns the state of a payment request. Please note that payment requests are purged after some time, so persist the state at your side when needed

## addPaymentRequest

Creates a new payment request. Will return request id to check for transaction state and ergopay url to show the user as QR code

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddPaymentRequestResponse;
import org.openapis.openapi.models.shared.CreatePaymentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreatePaymentRequest req = new CreatePaymentRequest(216550L, "excepturi") {{
                message = "aspernatur";
                senderAddress = "perferendis";
                tokenId = "ad";
                tokenRawAmount = 617636L;
            }};            

            AddPaymentRequestResponse res = sdk.paymentPortal.addPaymentRequest(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentState

Returns the state of a payment request. Please note that payment requests are purged after some time, so persist the state at your side when needed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentStateRequest;
import org.openapis.openapi.models.operations.GetPaymentStateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentStateRequest req = new GetPaymentStateRequest("sed");            

            GetPaymentStateResponse res = sdk.paymentPortal.getPaymentState(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
