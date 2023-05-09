# v1Transactions

### Available Operations

* [createRefund](#createrefund) - CreateRefund
* [listOrders](#listorders) - ListOrders
* [listPayments](#listpayments) - ListPayments
* [listRefunds](#listrefunds) - ListRefunds
* [listSettlements](#listsettlements) - ListSettlements
* [retrieveOrder](#retrieveorder) - RetrieveOrder
* [retrievePayment](#retrievepayment) - RetrievePayment
* [retrieveSettlement](#retrievesettlement) - RetrieveSettlement
* [updateOrder](#updateorder) - UpdateOrder

## createRefund

Issues a refund for a previously processed payment. You must issue
a refund within 60 days of the associated payment.

You cannot issue a partial refund for a split tender payment. You must
instead issue a full or partial refund for a particular tender, by
providing the applicable tender id to the V1CreateRefund endpoint.
Issuing a full refund for a split tender payment refunds all tenders
associated with the payment.

Issuing a refund for a card payment is not reversible. For development
purposes, you can create fake cash payments in Square Point of Sale and
refund them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRefundRequest;
import org.openapis.openapi.models.operations.CreateRefundResponse;
import org.openapis.openapi.models.operations.CreateRefundSecurity;
import org.openapis.openapi.models.shared.V1CreateRefundRequest;
import org.openapis.openapi.models.shared.V1Money;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateRefundRequest req = new CreateRefundRequest(                new V1CreateRefundRequest("quibusdam", "dolores", "officia") {{
                                refundedMoney = new V1Money() {{
                                    amount = 9830L;
                                    currencyCode = "error";
                                }};;
                                requestIdempotenceKey = "error";
                            }};, "architecto");            

            CreateRefundResponse res = sdk.v1Transactions.createRefund(req, new CreateRefundSecurity("facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1Refund != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOrders

Provides summary information for a merchant's online store orders.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOrdersRequest;
import org.openapis.openapi.models.operations.ListOrdersResponse;
import org.openapis.openapi.models.operations.ListOrdersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListOrdersRequest req = new ListOrdersRequest("ea") {{
                batchToken = "fugiat";
                limit = 71414L;
                order = "reprehenderit";
            }};            

            ListOrdersResponse res = sdk.v1Transactions.listOrders(req, new ListOrdersSecurity("aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1Orders != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPayments

Provides summary information for all payments taken for a given
Square account during a date range. Date ranges cannot exceed 1 year in
length. See Date ranges for details of inclusive and exclusive dates.

*Note**: Details for payments processed with Square Point of Sale while
in offline mode may not be transmitted to Square for up to 72 hours.
Offline payments have a `created_at` value that reflects the time the
payment was originally processed, not the time it was subsequently
transmitted to Square. Consequently, the ListPayments endpoint might
list an offline payment chronologically between online payments that
were seen in a previous request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPaymentsRequest;
import org.openapis.openapi.models.operations.ListPaymentsResponse;
import org.openapis.openapi.models.operations.ListPaymentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListPaymentsRequest req = new ListPaymentsRequest("ipsa") {{
                batchToken = "ipsa";
                beginTime = "magnam";
                endTime = "sequi";
                includePartial = false;
                limit = 788775L;
                order = "esse";
            }};            

            ListPaymentsResponse res = sdk.v1Transactions.listPayments(req, new ListPaymentsSecurity("unde") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1Payments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRefunds

Provides the details for all refunds initiated by a merchant or any of the merchant's mobile staff during a date range. Date ranges cannot exceed one year in length.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRefundsRequest;
import org.openapis.openapi.models.operations.ListRefundsResponse;
import org.openapis.openapi.models.operations.ListRefundsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRefundsRequest req = new ListRefundsRequest("natus") {{
                batchToken = "animi";
                beginTime = "eos";
                endTime = "id";
                limit = 82393L;
                order = "praesentium";
            }};            

            ListRefundsResponse res = sdk.v1Transactions.listRefunds(req, new ListRefundsSecurity("vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1Refunds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSettlements

Provides summary information for all deposits and withdrawals
initiated by Square to a linked bank account during a date range. Date
ranges cannot exceed one year in length.

*Note**: the ListSettlements endpoint does not provide entry
information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSettlementsRequest;
import org.openapis.openapi.models.operations.ListSettlementsResponse;
import org.openapis.openapi.models.operations.ListSettlementsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSettlementsRequest req = new ListSettlementsRequest("distinctio") {{
                batchToken = "veritatis";
                beginTime = "sunt";
                endTime = "excepturi";
                limit = 826327L;
                order = "minus";
                status = "ipsam";
            }};            

            ListSettlementsResponse res = sdk.v1Transactions.listSettlements(req, new ListSettlementsSecurity("magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1Settlements != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveOrder

Provides comprehensive information for a single online store order, including the order's history.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveOrderRequest;
import org.openapis.openapi.models.operations.RetrieveOrderResponse;
import org.openapis.openapi.models.operations.RetrieveOrderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveOrderRequest req = new RetrieveOrderRequest("labore", "deserunt");            

            RetrieveOrderResponse res = sdk.v1Transactions.retrieveOrder(req, new RetrieveOrderSecurity("nam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1Order != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrievePayment

Provides comprehensive information for a single payment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrievePaymentRequest;
import org.openapis.openapi.models.operations.RetrievePaymentResponse;
import org.openapis.openapi.models.operations.RetrievePaymentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrievePaymentRequest req = new RetrievePaymentRequest("libero", "iure");            

            RetrievePaymentResponse res = sdk.v1Transactions.retrievePayment(req, new RetrievePaymentSecurity("facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1Payment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveSettlement

Provides comprehensive information for a single settlement.

The returned `Settlement` objects include an `entries` field that lists
the transactions that contribute to the settlement total. Most
settlement entries correspond to a payment payout, but settlement
entries are also generated for less common events, like refunds, manual
adjustments, or chargeback holds.

Square initiates its regular deposits as indicated in the
[Deposit Options with Square](https://squareup.com/help/us/en/article/3807)
help article. Details for a regular deposit are usually not available
from Connect API endpoints before 10 p.m. PST the same day.

Square does not know when an initiated settlement **completes**, only
whether it has failed. A completed settlement is typically reflected in
a bank account within 3 business days, but in exceptional cases it may
take longer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveSettlementRequest;
import org.openapis.openapi.models.operations.RetrieveSettlementResponse;
import org.openapis.openapi.models.operations.RetrieveSettlementSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveSettlementRequest req = new RetrieveSettlementRequest("inventore", "eaque");            

            RetrieveSettlementResponse res = sdk.v1Transactions.retrieveSettlement(req, new RetrieveSettlementSecurity("impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1Settlement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrder

Updates the details of an online store order. Every update you perform on an order corresponds to one of three actions:

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrderRequest;
import org.openapis.openapi.models.operations.UpdateOrderResponse;
import org.openapis.openapi.models.operations.UpdateOrderSecurity;
import org.openapis.openapi.models.shared.V1UpdateOrderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateOrderRequest req = new UpdateOrderRequest(                new V1UpdateOrderRequest("officia") {{
                                canceledNote = "asperiores";
                                completedNote = "quia";
                                refundedNote = "magnam";
                                shippedTrackingNumber = "magnam";
                            }};, "illum", "itaque");            

            UpdateOrderResponse res = sdk.v1Transactions.updateOrder(req, new UpdateOrderSecurity("architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.v1Order != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
