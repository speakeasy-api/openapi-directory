# terminal

### Available Operations

* [cancelTerminalCheckout](#cancelterminalcheckout) - CancelTerminalCheckout
* [cancelTerminalRefund](#cancelterminalrefund) - CancelTerminalRefund
* [createTerminalCheckout](#createterminalcheckout) - CreateTerminalCheckout
* [createTerminalRefund](#createterminalrefund) - CreateTerminalRefund
* [getTerminalCheckout](#getterminalcheckout) - GetTerminalCheckout
* [getTerminalRefund](#getterminalrefund) - GetTerminalRefund
* [searchTerminalCheckouts](#searchterminalcheckouts) - SearchTerminalCheckouts
* [searchTerminalRefunds](#searchterminalrefunds) - SearchTerminalRefunds

## cancelTerminalCheckout

Cancels a Terminal checkout request if the status of the request permits it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelTerminalCheckoutRequest;
import org.openapis.openapi.models.operations.CancelTerminalCheckoutResponse;
import org.openapis.openapi.models.operations.CancelTerminalCheckoutSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelTerminalCheckoutRequest req = new CancelTerminalCheckoutRequest("fugit");            

            CancelTerminalCheckoutResponse res = sdk.terminal.cancelTerminalCheckout(req, new CancelTerminalCheckoutSecurity("placeat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cancelTerminalCheckoutResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelTerminalRefund

Cancels an Interac Terminal refund request by refund request ID if the status of the request permits it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelTerminalRefundRequest;
import org.openapis.openapi.models.operations.CancelTerminalRefundResponse;
import org.openapis.openapi.models.operations.CancelTerminalRefundSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelTerminalRefundRequest req = new CancelTerminalRefundRequest("officia");            

            CancelTerminalRefundResponse res = sdk.terminal.cancelTerminalRefund(req, new CancelTerminalRefundSecurity("illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cancelTerminalRefundResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTerminalCheckout

Creates a Terminal checkout request and sends it to the specified device to take a payment
for the requested amount.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTerminalCheckoutResponse;
import org.openapis.openapi.models.operations.CreateTerminalCheckoutSecurity;
import org.openapis.openapi.models.shared.CreateTerminalCheckoutRequest;
import org.openapis.openapi.models.shared.DeviceCheckoutOptions;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.TerminalCheckout;
import org.openapis.openapi.models.shared.TipSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateTerminalCheckoutRequest req = new CreateTerminalCheckoutRequest(                new TerminalCheckout(                new Money() {{
                                                amount = 3418L;
                                                currency = "aperiam";
                                            }};,                 new DeviceCheckoutOptions("nisi") {{
                                                skipReceiptScreen = false;
                                                tipSettings = new TipSettings() {{
                                                    allowTipping = false;
                                                    customTipField = false;
                                                    separateTipScreen = false;
                                                    smartTipping = false;
                                                    tipPercentages = new Long[]{{
                                                        add(461028L),
                                                        add(458046L),
                                                        add(795557L),
                                                        add(435649L),
                                                    }};
                                                }};;
                                            }};) {{
                                appId = "accusamus";
                                cancelReason = "soluta";
                                createdAt = "distinctio";
                                deadlineDuration = "nam";
                                id = "c9e9744c-5b64-45a4-af2f-cabccbca3292";
                                locationId = "quis";
                                note = "officiis";
                                paymentIds = new String[]{{
                                    add("aut"),
                                    add("ex"),
                                    add("dolorum"),
                                }};
                                paymentType = "autem";
                                referenceId = "maxime";
                                status = "est";
                                updatedAt = "distinctio";
                            }};, "officiis");            

            CreateTerminalCheckoutResponse res = sdk.terminal.createTerminalCheckout(req, new CreateTerminalCheckoutSecurity("fugit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createTerminalCheckoutResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTerminalRefund

Creates a request to refund an Interac payment completed on a Square Terminal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTerminalRefundResponse;
import org.openapis.openapi.models.operations.CreateTerminalRefundSecurity;
import org.openapis.openapi.models.shared.CreateTerminalRefundRequest;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.TerminalRefund;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateTerminalRefundRequest req = new CreateTerminalRefundRequest("explicabo") {{
                refund = new TerminalRefund(                new Money() {{
                                    amount = 640504L;
                                    currency = "et";
                                }};, "sunt") {{
                    appId = "asperiores";
                    cancelReason = "quam";
                    createdAt = "iusto";
                    deadlineDuration = "animi";
                    deviceId = "nihil";
                    id = "5d8ff445-2bed-4747-8fc4-8c282b8716c2";
                    locationId = "iure";
                    orderId = "doloribus";
                    reason = "aliquid";
                    refundId = "libero";
                    status = "et";
                    updatedAt = "voluptate";
                }};;
            }};            

            CreateTerminalRefundResponse res = sdk.terminal.createTerminalRefund(req, new CreateTerminalRefundSecurity("minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createTerminalRefundResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTerminalCheckout

Retrieves a Terminal checkout request by `checkout_id`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTerminalCheckoutRequest;
import org.openapis.openapi.models.operations.GetTerminalCheckoutResponse;
import org.openapis.openapi.models.operations.GetTerminalCheckoutSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTerminalCheckoutRequest req = new GetTerminalCheckoutRequest("dignissimos");            

            GetTerminalCheckoutResponse res = sdk.terminal.getTerminalCheckout(req, new GetTerminalCheckoutSecurity("atque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getTerminalCheckoutResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTerminalRefund

Retrieves an Interac Terminal refund object by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTerminalRefundRequest;
import org.openapis.openapi.models.operations.GetTerminalRefundResponse;
import org.openapis.openapi.models.operations.GetTerminalRefundSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTerminalRefundRequest req = new GetTerminalRefundRequest("alias");            

            GetTerminalRefundResponse res = sdk.terminal.getTerminalRefund(req, new GetTerminalRefundSecurity("ratione") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getTerminalRefundResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchTerminalCheckouts

Retrieves a filtered list of Terminal checkout requests created by the account making the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTerminalCheckoutsResponse;
import org.openapis.openapi.models.operations.SearchTerminalCheckoutsSecurity;
import org.openapis.openapi.models.shared.SearchTerminalCheckoutsRequest;
import org.openapis.openapi.models.shared.TerminalCheckoutQuery;
import org.openapis.openapi.models.shared.TerminalCheckoutQueryFilter;
import org.openapis.openapi.models.shared.TerminalCheckoutQuerySort;
import org.openapis.openapi.models.shared.TimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchTerminalCheckoutsRequest req = new SearchTerminalCheckoutsRequest() {{
                cursor = "voluptatem";
                limit = 275188L;
                query = new TerminalCheckoutQuery() {{
                    filter = new TerminalCheckoutQueryFilter() {{
                        createdAt = new TimeRange() {{
                            endAt = "maxime";
                            startAt = "tempora";
                        }};;
                        deviceId = "aperiam";
                        status = "error";
                    }};;
                    sort = new TerminalCheckoutQuerySort() {{
                        sortOrder = "impedit";
                    }};;
                }};;
            }};            

            SearchTerminalCheckoutsResponse res = sdk.terminal.searchTerminalCheckouts(req, new SearchTerminalCheckoutsSecurity("magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchTerminalCheckoutsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchTerminalRefunds

Retrieves a filtered list of Interac Terminal refund requests created by the seller making the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTerminalRefundsResponse;
import org.openapis.openapi.models.operations.SearchTerminalRefundsSecurity;
import org.openapis.openapi.models.shared.SearchTerminalRefundsRequest;
import org.openapis.openapi.models.shared.TerminalRefundQuery;
import org.openapis.openapi.models.shared.TerminalRefundQueryFilter;
import org.openapis.openapi.models.shared.TerminalRefundQuerySort;
import org.openapis.openapi.models.shared.TimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchTerminalRefundsRequest req = new SearchTerminalRefundsRequest() {{
                cursor = "expedita";
                limit = 297037L;
                query = new TerminalRefundQuery() {{
                    filter = new TerminalRefundQueryFilter() {{
                        createdAt = new TimeRange() {{
                            endAt = "dolorum";
                            startAt = "temporibus";
                        }};;
                        deviceId = "corrupti";
                        status = "eos";
                    }};;
                    sort = new TerminalRefundQuerySort() {{
                        sortOrder = "exercitationem";
                    }};;
                }};;
            }};            

            SearchTerminalRefundsResponse res = sdk.terminal.searchTerminalRefunds(req, new SearchTerminalRefundsSecurity("ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchTerminalRefundsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
