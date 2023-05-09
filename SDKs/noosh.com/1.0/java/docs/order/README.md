# order

### Available Operations

* [getBuyOrder](#getbuyorder) - Get a specific buy order
* [getBuyOrderList](#getbuyorderlist) - List the buy orders
* [getBuyOrderListOfWorkgroup](#getbuyorderlistofworkgroup) - List the buy orders of workgroup
* [getBuyOrderOfWorkgroup](#getbuyorderofworkgroup) - Get a specific buy order of workgroup
* [getOrder](#getorder) - Get a specific buy/sell order
* [getSellOrder](#getsellorder) - Get a specific sell order
* [getSellOrderList](#getsellorderlist) - List the sell orders
* [getSellOrderListOfWorkgroup](#getsellorderlistofworkgroup) - List the sell orders of workgrop
* [getSellOrderOfWorkgroup](#getsellorderofworkgroup) - Get a specific sell order
* [postBuyOrderJson](#postbuyorderjson) - Create a quick buy order
* [postBuyOrderRaw](#postbuyorderraw) - Create a quick buy order
* [putBuyOrderJson](#putbuyorderjson) - Update a specific buy order
* [putBuyOrderRaw](#putbuyorderraw) - Update a specific buy order
* [putSellOrderJson](#putsellorderjson) - Update / Accept or Reject a specific sell order
* [putSellOrderRaw](#putsellorderraw) - Update / Accept or Reject a specific sell order

## getBuyOrder

Get a specific buy order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBuyOrderRequest;
import org.openapis.openapi.models.operations.GetBuyOrderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBuyOrderRequest req = new GetBuyOrderRequest("ipsum", "quidem", "molestias");            

            GetBuyOrderResponse res = sdk.order.getBuyOrder(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBuyOrderList

List the buy orders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBuyOrderListRequest;
import org.openapis.openapi.models.operations.GetBuyOrderListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBuyOrderListRequest req = new GetBuyOrderListRequest("excepturi", "pariatur");            

            GetBuyOrderListResponse res = sdk.order.getBuyOrderList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBuyOrderListOfWorkgroup

List the buy orders of workgroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBuyOrderListOfWorkgroupRequest;
import org.openapis.openapi.models.operations.GetBuyOrderListOfWorkgroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBuyOrderListOfWorkgroupRequest req = new GetBuyOrderListOfWorkgroupRequest("modi");            

            GetBuyOrderListOfWorkgroupResponse res = sdk.order.getBuyOrderListOfWorkgroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBuyOrderOfWorkgroup

Get a specific buy order of workgroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBuyOrderOfWorkgroupRequest;
import org.openapis.openapi.models.operations.GetBuyOrderOfWorkgroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBuyOrderOfWorkgroupRequest req = new GetBuyOrderOfWorkgroupRequest("praesentium", "rem");            

            GetBuyOrderOfWorkgroupResponse res = sdk.order.getBuyOrderOfWorkgroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrder

Get a specific buy/sell order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderRequest;
import org.openapis.openapi.models.operations.GetOrderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderRequest req = new GetOrderRequest("voluptates", "quasi", "repudiandae");            

            GetOrderResponse res = sdk.order.getOrder(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSellOrder

Get a specific sell order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSellOrderRequest;
import org.openapis.openapi.models.operations.GetSellOrderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSellOrderRequest req = new GetSellOrderRequest("sint", "veritatis", "itaque");            

            GetSellOrderResponse res = sdk.order.getSellOrder(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSellOrderList

List the sell orders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSellOrderListRequest;
import org.openapis.openapi.models.operations.GetSellOrderListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSellOrderListRequest req = new GetSellOrderListRequest("incidunt", "enim");            

            GetSellOrderListResponse res = sdk.order.getSellOrderList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSellOrderListOfWorkgroup

List the sell orders of workgrop

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSellOrderListOfWorkgroupRequest;
import org.openapis.openapi.models.operations.GetSellOrderListOfWorkgroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSellOrderListOfWorkgroupRequest req = new GetSellOrderListOfWorkgroupRequest("consequatur");            

            GetSellOrderListOfWorkgroupResponse res = sdk.order.getSellOrderListOfWorkgroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSellOrderOfWorkgroup

Get a specific sell order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSellOrderOfWorkgroupRequest;
import org.openapis.openapi.models.operations.GetSellOrderOfWorkgroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSellOrderOfWorkgroupRequest req = new GetSellOrderOfWorkgroupRequest("est", "quibusdam");            

            GetSellOrderOfWorkgroupResponse res = sdk.order.getSellOrderOfWorkgroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBuyOrderJson

Create a quick buy order

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBuyOrderJsonRequest;
import org.openapis.openapi.models.operations.PostBuyOrderJsonResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.OrderItemPersistVO;
import org.openapis.openapi.models.shared.OrderPO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBuyOrderJsonRequest req = new PostBuyOrderJsonRequest("explicabo", "deserunt") {{
                orderPO = new OrderPO() {{
                    buyerUserId = 1L;
                    comments = "sample comments";
                    customFields = new org.openapis.openapi.models.shared.CustomFieldPersistVO[]{{
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-02-18");
                            numberValue = "modi";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-08-08");
                            numberValue = "cupiditate";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-12-17");
                            numberValue = "magni";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                    }};
                    invoiceOrBillingRecipient = 1L;
                    orderCompletionDate = LocalDate.parse("2021-11-22");
                    orderItems = new org.openapis.openapi.models.shared.OrderItemPersistVO[]{{
                        add(new OrderItemPersistVO() {{
                            completionDate = LocalDate.parse("2022-04-28");
                            customFields = new org.openapis.openapi.models.shared.CustomFieldPersistVO[]{{
                                add(new CustomFieldPersistVO() {{
                                    dateValue = LocalDate.parse("2022-04-19");
                                    numberValue = "tempore";
                                    paramName = "sample param_name";
                                    stringValue = "sample string_value";
                                }}),
                                add(new CustomFieldPersistVO() {{
                                    dateValue = LocalDate.parse("2022-01-14");
                                    numberValue = "eum";
                                    paramName = "sample param_name";
                                    stringValue = "sample string_value";
                                }}),
                                add(new CustomFieldPersistVO() {{
                                    dateValue = LocalDate.parse("2022-03-31");
                                    numberValue = "sint";
                                    paramName = "sample param_name";
                                    stringValue = "sample string_value";
                                }}),
                            }};
                            exTaxValueCalculated = "aliquid";
                            notes = "sample notes";
                            per = 1L;
                            price = "provident";
                            quantity = "necessitatibus";
                            shipping = "sint";
                            specId = 1L;
                            specReferenceId = 1L;
                            tax = "sample tax";
                        }}),
                    }};
                    otherSelectionReason = "sample other_selection_reason";
                    paymentMethodId = 1L;
                    paymentReferenceNo = "sample payment_reference_no";
                    sellOrder = true;
                    shipping = "officia";
                    supplierReference = "sample supplier_reference";
                    supplierSelectionReasonId = 1L;
                    supplierUserId = 1L;
                    tax = "sample tax";
                    title = "sample title";
                }};;
            }};            

            PostBuyOrderJsonResponse res = sdk.order.postBuyOrderJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBuyOrderRaw

Create a quick buy order

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBuyOrderRawRequest;
import org.openapis.openapi.models.operations.PostBuyOrderRawResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.OrderItemPersistVO;
import org.openapis.openapi.models.shared.OrderPO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBuyOrderRawRequest req = new PostBuyOrderRawRequest("dolor", "debitis") {{
                requestBody = "a".getBytes();
            }};            

            PostBuyOrderRawResponse res = sdk.order.postBuyOrderRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putBuyOrderJson

Update a specific buy order

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutBuyOrderJsonRequest;
import org.openapis.openapi.models.operations.PutBuyOrderJsonResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.OrderUpdPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutBuyOrderJsonRequest req = new PutBuyOrderJsonRequest("dolorum", "in", "in") {{
                orderUpdPersistVO = new OrderUpdPersistVO() {{
                    action = "sample action";
                    budgetTypeFieldId = 1L;
                    comments = "sample comments";
                    customFields = new org.openapis.openapi.models.shared.CustomFieldPersistVO[]{{
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2020-11-26");
                            numberValue = "dicta";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-03-27");
                            numberValue = "facere";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-08-09");
                            numberValue = "laborum";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-04-02");
                            numberValue = "occaecati";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                    }};
                    orderCompletionDate = LocalDate.parse("2022-02-13");
                    orderId = 1L;
                    otherSelectionReason = "sample other_selection_reason";
                    oversPercent = "delectus";
                    paymentMethodId = 1L;
                    paymentReferenceNo = "sample payment_reference_no";
                    rejectReason = "sample reject_reason";
                    supplierSelectionReasonId = 1L;
                    undersPercent = "quidem";
                }};;
            }};            

            PutBuyOrderJsonResponse res = sdk.order.putBuyOrderJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putBuyOrderRaw

Update a specific buy order

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutBuyOrderRawRequest;
import org.openapis.openapi.models.operations.PutBuyOrderRawResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.OrderUpdPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutBuyOrderRawRequest req = new PutBuyOrderRawRequest("provident", "nam", "id") {{
                requestBody = "blanditiis".getBytes();
            }};            

            PutBuyOrderRawResponse res = sdk.order.putBuyOrderRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSellOrderJson

Update / Accept or Reject a specific sell order

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSellOrderJsonRequest;
import org.openapis.openapi.models.operations.PutSellOrderJsonResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.OrderUpdPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutSellOrderJsonRequest req = new PutSellOrderJsonRequest("deleniti", "sapiente", "amet") {{
                orderUpdPersistVO = new OrderUpdPersistVO() {{
                    action = "sample action";
                    budgetTypeFieldId = 1L;
                    comments = "sample comments";
                    customFields = new org.openapis.openapi.models.shared.CustomFieldPersistVO[]{{
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-07-30");
                            numberValue = "natus";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-01-19");
                            numberValue = "perferendis";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-09-12");
                            numberValue = "distinctio";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                    }};
                    orderCompletionDate = LocalDate.parse("2022-06-04");
                    orderId = 1L;
                    otherSelectionReason = "sample other_selection_reason";
                    oversPercent = "labore";
                    paymentMethodId = 1L;
                    paymentReferenceNo = "sample payment_reference_no";
                    rejectReason = "sample reject_reason";
                    supplierSelectionReasonId = 1L;
                    undersPercent = "suscipit";
                }};;
            }};            

            PutSellOrderJsonResponse res = sdk.order.putSellOrderJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSellOrderRaw

Update / Accept or Reject a specific sell order

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSellOrderRawRequest;
import org.openapis.openapi.models.operations.PutSellOrderRawResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.OrderUpdPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutSellOrderRawRequest req = new PutSellOrderRawRequest("natus", "nobis", "eum") {{
                requestBody = "vero".getBytes();
            }};            

            PutSellOrderRawResponse res = sdk.order.putSellOrderRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
