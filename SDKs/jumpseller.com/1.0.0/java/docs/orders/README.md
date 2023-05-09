# orders

### Available Operations

* [getOrdersJson](#getordersjson) - Retrieve all Orders.
* [getOrdersAfterIdJson](#getordersafteridjson) - Retrieve orders filtered by Order Id.
* [getOrdersCountJson](#getorderscountjson) - Count all Orders.
* [getOrdersStatusStatusJson](#getordersstatusstatusjson) - Retrieve orders filtered by status.
* [getOrdersIdJson](#getordersidjson) - Retrieve a single Order.
* [getOrdersIdHistoryJson](#getordersidhistoryjson) - Retrieve all Order History.
* [postOrdersJson](#postordersjson) - Create a new Order.
* [postOrdersIdHistoryJson](#postordersidhistoryjson) - Create a new Order History Entry.
* [putOrdersIdJson](#putordersidjson) - Modify an existing Order.

## getOrdersJson

Retrieve all Orders.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrdersJsonRequest;
import org.openapis.openapi.models.operations.GetOrdersJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrdersJsonRequest req = new GetOrdersJsonRequest("ipsa", "ipsa") {{
                limit = 434417L;
                page = 487838L;
            }};            

            GetOrdersJsonResponse res = sdk.orders.getOrdersJson(req);

            if (res.orders != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrdersAfterIdJson

For example the GET /orders/after/5000 will return Order 5001, 5002, 5003, etc.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrdersAfterIdJsonRequest;
import org.openapis.openapi.models.operations.GetOrdersAfterIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrdersAfterIdJsonRequest req = new GetOrdersAfterIdJsonRequest("quaerat", 881005, "quidem");            

            GetOrdersAfterIdJsonResponse res = sdk.orders.getOrdersAfterIdJson(req);

            if (res.order != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrdersCountJson

Count all Orders.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrdersCountJsonRequest;
import org.openapis.openapi.models.operations.GetOrdersCountJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrdersCountJsonRequest req = new GetOrdersCountJsonRequest("voluptatibus", "voluptas");            

            GetOrdersCountJsonResponse res = sdk.orders.getOrdersCountJson(req);

            if (res.count != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrdersStatusStatusJson

Retrieve orders filtered by status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrdersStatusStatusJsonRequest;
import org.openapis.openapi.models.operations.GetOrdersStatusStatusJsonResponse;
import org.openapis.openapi.models.operations.GetOrdersStatusStatusJsonStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrdersStatusStatusJsonRequest req = new GetOrdersStatusStatusJsonRequest("natus", "eos", GetOrdersStatusStatusJsonStatusEnum.PENDING_PAYMENT);            

            GetOrdersStatusStatusJsonResponse res = sdk.orders.getOrdersStatusStatusJson(req);

            if (res.orders != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrdersIdJson

Retrieve a single Order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrdersIdJsonRequest;
import org.openapis.openapi.models.operations.GetOrdersIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrdersIdJsonRequest req = new GetOrdersIdJsonRequest("sit", 854614, "ab");            

            GetOrdersIdJsonResponse res = sdk.orders.getOrdersIdJson(req);

            if (res.order != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrdersIdHistoryJson

Retrieve all Order History.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrdersIdHistoryJsonRequest;
import org.openapis.openapi.models.operations.GetOrdersIdHistoryJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrdersIdHistoryJsonRequest req = new GetOrdersIdHistoryJsonRequest("soluta", 679393, "iusto");            

            GetOrdersIdHistoryJsonResponse res = sdk.orders.getOrdersIdHistoryJson(req);

            if (res.orderHistories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOrdersJson

Orders created externally keep the given order product's values (bypassing internal promotion or product amounts).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOrdersJsonRequest;
import org.openapis.openapi.models.operations.PostOrdersJsonResponse;
import org.openapis.openapi.models.shared.BillingAddress;
import org.openapis.openapi.models.shared.CustomerFieldsWithBillingAddressAndShippingAddressFields;
import org.openapis.openapi.models.shared.OrderCreate;
import org.openapis.openapi.models.shared.OrderCreateFields;
import org.openapis.openapi.models.shared.OrderCreateFieldsStatusEnum;
import org.openapis.openapi.models.shared.OrderProductOrderCreate;
import org.openapis.openapi.models.shared.ShippingAddress;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostOrdersJsonRequest req = new PostOrdersJsonRequest(                new OrderCreate() {{
                                order = new OrderCreateFields() {{
                                    customer = new CustomerFieldsWithBillingAddressAndShippingAddressFields() {{
                                        billingAddress = new BillingAddress() {{
                                            address = "6568 Zboncak Lane";
                                            city = "South Makenzie";
                                            country = "Tunisia";
                                            municipality = "eius";
                                            name = "Lisa Fay";
                                            postal = "ad";
                                            region = "saepe";
                                            surname = "suscipit";
                                            taxid = "deserunt";
                                        }};;
                                        id = 588317;
                                        shippingAddress = new ShippingAddress() {{
                                            address = "85608 Dorcas Junctions";
                                            city = "Torpberg";
                                            country = "Palau";
                                            municipality = "a";
                                            name = "Fannie Kub";
                                            postal = "tenetur";
                                            region = "amet";
                                            surname = "tempore";
                                        }};;
                                    }};;
                                    products = new org.openapis.openapi.models.shared.OrderProductOrderCreate[]{{
                                        add(new OrderProductOrderCreate() {{
                                            discount = 2539.41;
                                            id = 313692;
                                            price = 2133.12;
                                            qty = 957451;
                                            variantId = 518201;
                                        }}),
                                        add(new OrderProductOrderCreate() {{
                                            discount = 4717.52;
                                            id = 25662;
                                            price = 7115.84;
                                            qty = 207470;
                                            variantId = 153694;
                                        }}),
                                        add(new OrderProductOrderCreate() {{
                                            discount = 4246.85;
                                            id = 730442;
                                            price = 3741.7;
                                            qty = 646265;
                                            variantId = 463575;
                                        }}),
                                        add(new OrderProductOrderCreate() {{
                                            discount = 2148.8;
                                            id = 277628;
                                            price = 1864.58;
                                            qty = 586784;
                                            variantId = 807581;
                                        }}),
                                    }};
                                    shippingMethodId = 863856;
                                    shippingMethodName = "soluta";
                                    shippingPrice = 1175.31;
                                    status = OrderCreateFieldsStatusEnum.PENDING_PAYMENT;
                                }};;
                            }};, "totam", "incidunt");            

            PostOrdersJsonResponse res = sdk.orders.postOrdersJson(req);

            if (res.order != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOrdersIdHistoryJson

Create a new Order History Entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOrdersIdHistoryJsonRequest;
import org.openapis.openapi.models.operations.PostOrdersIdHistoryJsonResponse;
import org.openapis.openapi.models.shared.OrderHistoryEdit;
import org.openapis.openapi.models.shared.OrderHistoryEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostOrdersIdHistoryJsonRequest req = new PostOrdersIdHistoryJsonRequest(                new OrderHistoryEdit() {{
                                orderHistory = new OrderHistoryEditFields() {{
                                    message = "aspernatur";
                                }};;
                            }};, "dolores", 716860, "facilis");            

            PostOrdersIdHistoryJsonResponse res = sdk.orders.postOrdersIdHistoryJson(req);

            if (res.orderHistory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putOrdersIdJson

Only `status`, `shipment_status`, `tracking_number`, `tracking_company`, `tracking_url`, `additional_information` and `additional_fields` are available for update. An email is send if `shipment_status` changes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutOrdersIdJsonRequest;
import org.openapis.openapi.models.operations.PutOrdersIdJsonResponse;
import org.openapis.openapi.models.shared.OrderAdditionalFields;
import org.openapis.openapi.models.shared.OrderEdit;
import org.openapis.openapi.models.shared.OrderEditFields;
import org.openapis.openapi.models.shared.OrderEditFieldsShipmentStatusEnum;
import org.openapis.openapi.models.shared.OrderEditFieldsStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutOrdersIdJsonRequest req = new PutOrdersIdJsonRequest(                new OrderEdit() {{
                                order = new OrderEditFields() {{
                                    additionalFields = new org.openapis.openapi.models.shared.OrderAdditionalFields[]{{
                                        add(new OrderAdditionalFields() {{
                                            label = "quam";
                                            value = "molestias";
                                        }}),
                                        add(new OrderAdditionalFields() {{
                                            label = "temporibus";
                                            value = "qui";
                                        }}),
                                    }};
                                    additionalInformation = "neque";
                                    shipmentStatus = OrderEditFieldsShipmentStatusEnum.REQUESTED;
                                    status = OrderEditFieldsStatusEnum.ABANDONED;
                                    trackingCompany = "odio";
                                    trackingNumber = "sunt";
                                    trackingUrl = "ullam";
                                }};;
                            }};, "nam", 940432, "voluptatem");            

            PutOrdersIdJsonResponse res = sdk.orders.putOrdersIdJson(req);

            if (res.order != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
