# orders

### Available Operations

* [contentOrdersAcknowledge](#contentordersacknowledge) - Marks an order as acknowledged.
* [contentOrdersAdvancetestorder](#contentordersadvancetestorder) - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
* [contentOrdersCancel](#contentorderscancel) - Cancels all line items in an order, making a full refund.
* [contentOrdersCancellineitem](#contentorderscancellineitem) - Cancels a line item, making a full refund.
* [contentOrdersCanceltestorderbycustomer](#contentorderscanceltestorderbycustomer) - Sandbox only. Cancels a test order for customer-initiated cancellation.
* [contentOrdersCaptureOrder](#contentorderscaptureorder) - Capture funds from the customer for the current order total. This method should be called after the merchant verifies that they are able and ready to start shipping the order. This method blocks until a response is received from the payment processsor. If this method succeeds, the merchant is guaranteed to receive funds for the order after shipment. If the request fails, it can be retried or the order may be cancelled. This method cannot be called after the entire order is already shipped. A rejected error code is returned when the payment service provider has declined the charge. This indicates a problem between the PSP and either the merchant's or customer's account. Sometimes this error will be resolved by the customer. We recommend retrying these errors once per day or cancelling the order with reason `failedToCaptureFunds` if the items cannot be held.
* [contentOrdersCreatetestorder](#contentorderscreatetestorder) - Sandbox only. Creates a test order.
* [contentOrdersCreatetestreturn](#contentorderscreatetestreturn) - Sandbox only. Creates a test return.
* [contentOrdersGet](#contentordersget) - Retrieves an order from your Merchant Center account.
* [contentOrdersGetbymerchantorderid](#contentordersgetbymerchantorderid) - Retrieves an order using merchant order ID.
* [contentOrdersGettestordertemplate](#contentordersgettestordertemplate) - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
* [contentOrdersInstorerefundlineitem](#contentordersinstorerefundlineitem) - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (for example, cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding through Google then through an in-store return.
* [contentOrdersList](#contentorderslist) - Lists the orders in your Merchant Center account.
* [contentOrdersRefunditem](#contentordersrefunditem) - Issues a partial or total refund for items and shipment.
* [contentOrdersRefundorder](#contentordersrefundorder) - Issues a partial or total refund for an order.
* [contentOrdersRejectreturnlineitem](#contentordersrejectreturnlineitem) - Rejects return on an line item.
* [contentOrdersReturnrefundlineitem](#contentordersreturnrefundlineitem) - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. The Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
* [contentOrdersSetlineitemmetadata](#contentorderssetlineitemmetadata) - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided through other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
* [contentOrdersShiplineitems](#contentordersshiplineitems) - Marks line item(s) as shipped.
* [contentOrdersUpdatelineitemshippingdetails](#contentordersupdatelineitemshippingdetails) - Updates ship by and delivery by dates for a line item.
* [contentOrdersUpdatemerchantorderid](#contentordersupdatemerchantorderid) - Updates the merchant order ID for a given order.
* [contentOrdersUpdateshipment](#contentordersupdateshipment) - Updates a shipment's status, carrier, and/or tracking ID.

## contentOrdersAcknowledge

Marks an order as acknowledged.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersAcknowledgeRequest;
import org.openapis.openapi.models.operations.ContentOrdersAcknowledgeResponse;
import org.openapis.openapi.models.operations.ContentOrdersAcknowledgeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrdersAcknowledgeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersAcknowledgeRequest req = new ContentOrdersAcknowledgeRequest("aperiam", "aspernatur") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersAcknowledgeRequest = new OrdersAcknowledgeRequest() {{
                    operationId = "enim";
                }};;
                accessToken = "illo";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "numquam";
                key = "optio";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "repellat";
                uploadProtocol = "quae";
            }};            

            ContentOrdersAcknowledgeResponse res = sdk.orders.contentOrdersAcknowledge(req, new ContentOrdersAcknowledgeSecurity("deleniti", "expedita") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersAcknowledgeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersAdvancetestorder

Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersAdvancetestorderRequest;
import org.openapis.openapi.models.operations.ContentOrdersAdvancetestorderResponse;
import org.openapis.openapi.models.operations.ContentOrdersAdvancetestorderSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersAdvancetestorderRequest req = new ContentOrdersAdvancetestorderRequest("hic", "excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "similique";
                fields = "ea";
                key = "animi";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "dignissimos";
                uploadProtocol = "esse";
            }};            

            ContentOrdersAdvancetestorderResponse res = sdk.orders.contentOrdersAdvancetestorder(req, new ContentOrdersAdvancetestorderSecurity("animi", "laudantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersAdvanceTestOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersCancel

Cancels all line items in an order, making a full refund.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersCancelRequest;
import org.openapis.openapi.models.operations.ContentOrdersCancelResponse;
import org.openapis.openapi.models.operations.ContentOrdersCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrdersCancelRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersCancelRequest req = new ContentOrdersCancelRequest("esse", "eveniet") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersCancelRequest = new OrdersCancelRequest() {{
                    operationId = "velit";
                    reason = "officiis";
                    reasonText = "eius";
                }};;
                accessToken = "rerum";
                alt = AltEnum.PROTO;
                callback = "dignissimos";
                fields = "ipsam";
                key = "explicabo";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "quis";
                uploadProtocol = "facilis";
            }};            

            ContentOrdersCancelResponse res = sdk.orders.contentOrdersCancel(req, new ContentOrdersCancelSecurity("ipsum", "ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersCancelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersCancellineitem

Cancels a line item, making a full refund.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersCancellineitemRequest;
import org.openapis.openapi.models.operations.ContentOrdersCancellineitemResponse;
import org.openapis.openapi.models.operations.ContentOrdersCancellineitemSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrdersCancelLineItemRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersCancellineitemRequest req = new ContentOrdersCancellineitemRequest("quaerat", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersCancelLineItemRequest = new OrdersCancelLineItemRequest() {{
                    lineItemId = "eveniet";
                    operationId = "dolor";
                    productId = "expedita";
                    quantity = 730003L;
                    reason = "iste";
                    reasonText = "illo";
                }};;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "sint";
                key = "iusto";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "aperiam";
                uploadProtocol = "voluptates";
            }};            

            ContentOrdersCancellineitemResponse res = sdk.orders.contentOrdersCancellineitem(req, new ContentOrdersCancellineitemSecurity("laudantium", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersCancelLineItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersCanceltestorderbycustomer

Sandbox only. Cancels a test order for customer-initiated cancellation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersCanceltestorderbycustomerRequest;
import org.openapis.openapi.models.operations.ContentOrdersCanceltestorderbycustomerResponse;
import org.openapis.openapi.models.operations.ContentOrdersCanceltestorderbycustomerSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrdersCancelTestOrderByCustomerRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersCanceltestorderbycustomerRequest req = new ContentOrdersCanceltestorderbycustomerRequest("quae", "omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersCancelTestOrderByCustomerRequest = new OrdersCancelTestOrderByCustomerRequest() {{
                    reason = "rem";
                }};;
                accessToken = "tenetur";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "earum";
                key = "architecto";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "maiores";
                uploadProtocol = "sequi";
            }};            

            ContentOrdersCanceltestorderbycustomerResponse res = sdk.orders.contentOrdersCanceltestorderbycustomer(req, new ContentOrdersCanceltestorderbycustomerSecurity("saepe", "consequatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersCancelTestOrderByCustomerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersCaptureOrder

Capture funds from the customer for the current order total. This method should be called after the merchant verifies that they are able and ready to start shipping the order. This method blocks until a response is received from the payment processsor. If this method succeeds, the merchant is guaranteed to receive funds for the order after shipment. If the request fails, it can be retried or the order may be cancelled. This method cannot be called after the entire order is already shipped. A rejected error code is returned when the payment service provider has declined the charge. This indicates a problem between the PSP and either the merchant's or customer's account. Sometimes this error will be resolved by the customer. We recommend retrying these errors once per day or cancelling the order with reason `failedToCaptureFunds` if the items cannot be held.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersCaptureOrderRequest;
import org.openapis.openapi.models.operations.ContentOrdersCaptureOrderResponse;
import org.openapis.openapi.models.operations.ContentOrdersCaptureOrderSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersCaptureOrderRequest req = new ContentOrdersCaptureOrderRequest("esse", "debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("cumque", "aliquam");
                    put("dolorum", "deserunt");
                    put("ad", "reiciendis");
                    put("sequi", "porro");
                }};
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "omnis";
                key = "aut";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "cupiditate";
                uploadProtocol = "reprehenderit";
            }};            

            ContentOrdersCaptureOrderResponse res = sdk.orders.contentOrdersCaptureOrder(req, new ContentOrdersCaptureOrderSecurity("quia", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.captureOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersCreatetestorder

Sandbox only. Creates a test order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersCreatetestorderRequest;
import org.openapis.openapi.models.operations.ContentOrdersCreatetestorderResponse;
import org.openapis.openapi.models.operations.ContentOrdersCreatetestorderSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrderLineItemProductFee;
import org.openapis.openapi.models.shared.OrderLineItemProductVariantAttribute;
import org.openapis.openapi.models.shared.OrderLineItemReturnInfo;
import org.openapis.openapi.models.shared.OrderLineItemShippingDetails;
import org.openapis.openapi.models.shared.OrderLineItemShippingDetailsMethod;
import org.openapis.openapi.models.shared.OrderPromotion;
import org.openapis.openapi.models.shared.OrderPromotionItem;
import org.openapis.openapi.models.shared.OrdersCreateTestOrderRequest;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.TestOrder;
import org.openapis.openapi.models.shared.TestOrderAddress;
import org.openapis.openapi.models.shared.TestOrderDeliveryDetails;
import org.openapis.openapi.models.shared.TestOrderLineItem;
import org.openapis.openapi.models.shared.TestOrderLineItemProduct;
import org.openapis.openapi.models.shared.TestOrderPickupDetails;
import org.openapis.openapi.models.shared.TestOrderPickupDetailsPickupPerson;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersCreatetestorderRequest req = new ContentOrdersCreatetestorderRequest("accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                ordersCreateTestOrderRequest = new OrdersCreateTestOrderRequest() {{
                    country = "Hong Kong";
                    templateName = "molestiae";
                    testOrder = new TestOrder() {{
                        deliveryDetails = new TestOrderDeliveryDetails() {{
                            address = new TestOrderAddress() {{
                                country = "Canada";
                                fullAddress = new String[]{{
                                    add("sed"),
                                    add("odit"),
                                    add("iusto"),
                                }};
                                isPostOfficeBox = false;
                                locality = "expedita";
                                postalCode = "81052";
                                recipientName = "esse";
                                region = "accusantium";
                                streetAddress = new String[]{{
                                    add("sapiente"),
                                    add("quam"),
                                    add("est"),
                                }};
                            }};;
                            isScheduledDelivery = false;
                            phoneNumber = "aliquam";
                        }};;
                        enableOrderinvoices = false;
                        kind = "delectus";
                        lineItems = new org.openapis.openapi.models.shared.TestOrderLineItem[]{{
                            add(new TestOrderLineItem() {{
                                product = new TestOrderLineItemProduct() {{
                                    brand = "voluptatum";
                                    condition = "iusto";
                                    contentLanguage = "quod";
                                    fees = new org.openapis.openapi.models.shared.OrderLineItemProductFee[]{{
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "voluptas";
                                                value = "non";
                                            }};
                                            name = "Kayla Hodkiewicz";
                                        }}),
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "recusandae";
                                                value = "corporis";
                                            }};
                                            name = "Gwen Reichel";
                                        }}),
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "voluptatem";
                                                value = "optio";
                                            }};
                                            name = "Ashley Bruen Sr.";
                                        }}),
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "amet";
                                                value = "rerum";
                                            }};
                                            name = "Audrey Smith";
                                        }}),
                                    }};
                                    gtin = "nisi";
                                    imageLink = "dignissimos";
                                    itemGroupId = "reiciendis";
                                    mpn = "itaque";
                                    offerId = "vitae";
                                    price = new Price() {{
                                        currency = "est";
                                        value = "accusantium";
                                    }};
                                    targetCountry = "quod";
                                    title = "Miss";
                                    variantAttributes = new org.openapis.openapi.models.shared.OrderLineItemProductVariantAttribute[]{{
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "possimus";
                                            value = "maiores";
                                        }}),
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "odio";
                                            value = "provident";
                                        }}),
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "sapiente";
                                            value = "aperiam";
                                        }}),
                                    }};
                                }};
                                quantityOrdered = 627717L;
                                returnInfo = new OrderLineItemReturnInfo() {{
                                    daysToReturn = 197982;
                                    isReturnable = false;
                                    policyUrl = "provident";
                                }};
                                shippingDetails = new OrderLineItemShippingDetails() {{
                                    deliverByDate = "ex";
                                    method = new OrderLineItemShippingDetailsMethod() {{
                                        carrier = "repellendus";
                                        maxDaysInTransit = 601277L;
                                        methodName = "alias";
                                        minDaysInTransit = 771931L;
                                    }};
                                    pickupPromiseInMinutes = 196700L;
                                    shipByDate = "commodi";
                                    type = "labore";
                                }};
                            }}),
                            add(new TestOrderLineItem() {{
                                product = new TestOrderLineItemProduct() {{
                                    brand = "expedita";
                                    condition = "in";
                                    contentLanguage = "quisquam";
                                    fees = new org.openapis.openapi.models.shared.OrderLineItemProductFee[]{{
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "enim";
                                                value = "nulla";
                                            }};
                                            name = "Kelvin O'Conner";
                                        }}),
                                    }};
                                    gtin = "et";
                                    imageLink = "quas";
                                    itemGroupId = "blanditiis";
                                    mpn = "cum";
                                    offerId = "dicta";
                                    price = new Price() {{
                                        currency = "impedit";
                                        value = "tempora";
                                    }};
                                    targetCountry = "eveniet";
                                    title = "Dr.";
                                    variantAttributes = new org.openapis.openapi.models.shared.OrderLineItemProductVariantAttribute[]{{
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "impedit";
                                            value = "quas";
                                        }}),
                                    }};
                                }};
                                quantityOrdered = 772057L;
                                returnInfo = new OrderLineItemReturnInfo() {{
                                    daysToReturn = 428378;
                                    isReturnable = false;
                                    policyUrl = "eligendi";
                                }};
                                shippingDetails = new OrderLineItemShippingDetails() {{
                                    deliverByDate = "recusandae";
                                    method = new OrderLineItemShippingDetailsMethod() {{
                                        carrier = "ex";
                                        maxDaysInTransit = 105094L;
                                        methodName = "veritatis";
                                        minDaysInTransit = 982574L;
                                    }};
                                    pickupPromiseInMinutes = 930877L;
                                    shipByDate = "vero";
                                    type = "quidem";
                                }};
                            }}),
                            add(new TestOrderLineItem() {{
                                product = new TestOrderLineItemProduct() {{
                                    brand = "illo";
                                    condition = "quo";
                                    contentLanguage = "dignissimos";
                                    fees = new org.openapis.openapi.models.shared.OrderLineItemProductFee[]{{
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "distinctio";
                                                value = "possimus";
                                            }};
                                            name = "Sam Ullrich";
                                        }}),
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "nihil";
                                                value = "quaerat";
                                            }};
                                            name = "Jo Larkin";
                                        }}),
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "odit";
                                                value = "ad";
                                            }};
                                            name = "Teresa Kshlerin";
                                        }}),
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "odio";
                                                value = "nulla";
                                            }};
                                            name = "Terrance Bins";
                                        }}),
                                    }};
                                    gtin = "illum";
                                    imageLink = "fugit";
                                    itemGroupId = "maxime";
                                    mpn = "dolorum";
                                    offerId = "repellat";
                                    price = new Price() {{
                                        currency = "nostrum";
                                        value = "illum";
                                    }};
                                    targetCountry = "quibusdam";
                                    title = "Ms.";
                                    variantAttributes = new org.openapis.openapi.models.shared.OrderLineItemProductVariantAttribute[]{{
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "explicabo";
                                            value = "consectetur";
                                        }}),
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "temporibus";
                                            value = "optio";
                                        }}),
                                    }};
                                }};
                                quantityOrdered = 59757L;
                                returnInfo = new OrderLineItemReturnInfo() {{
                                    daysToReturn = 978655;
                                    isReturnable = false;
                                    policyUrl = "exercitationem";
                                }};
                                shippingDetails = new OrderLineItemShippingDetails() {{
                                    deliverByDate = "culpa";
                                    method = new OrderLineItemShippingDetailsMethod() {{
                                        carrier = "repudiandae";
                                        maxDaysInTransit = 134428L;
                                        methodName = "sapiente";
                                        minDaysInTransit = 204373L;
                                    }};
                                    pickupPromiseInMinutes = 640565L;
                                    shipByDate = "suscipit";
                                    type = "harum";
                                }};
                            }}),
                        }};
                        notificationMode = "ducimus";
                        pickupDetails = new TestOrderPickupDetails() {{
                            locationCode = "doloremque";
                            pickupLocationAddress = new TestOrderAddress() {{
                                country = "Andorra";
                                fullAddress = new String[]{{
                                    add("iusto"),
                                    add("corrupti"),
                                    add("molestiae"),
                                }};
                                isPostOfficeBox = false;
                                locality = "quis";
                                postalCode = "03293";
                                recipientName = "est";
                                region = "iure";
                                streetAddress = new String[]{{
                                    add("provident"),
                                    add("laudantium"),
                                    add("nam"),
                                    add("nemo"),
                                }};
                            }};;
                            pickupLocationType = "enim";
                            pickupPersons = new org.openapis.openapi.models.shared.TestOrderPickupDetailsPickupPerson[]{{
                                add(new TestOrderPickupDetailsPickupPerson() {{
                                    name = "Rhonda Aufderhar PhD";
                                    phoneNumber = "numquam";
                                }}),
                                add(new TestOrderPickupDetailsPickupPerson() {{
                                    name = "Celia Rolfson";
                                    phoneNumber = "impedit";
                                }}),
                            }};
                        }};;
                        predefinedBillingAddress = "nisi";
                        predefinedDeliveryAddress = "cumque";
                        predefinedEmail = "soluta";
                        predefinedPickupDetails = "fugiat";
                        promotions = new org.openapis.openapi.models.shared.OrderPromotion[]{{
                            add(new OrderPromotion() {{
                                applicableItems = new org.openapis.openapi.models.shared.OrderPromotionItem[]{{
                                    add(new OrderPromotionItem() {{
                                        lineItemId = "enim";
                                        offerId = "maiores";
                                        productId = "consectetur";
                                        quantity = 898826;
                                    }}),
                                    add(new OrderPromotionItem() {{
                                        lineItemId = "maxime";
                                        offerId = "cupiditate";
                                        productId = "voluptatem";
                                        quantity = 588158;
                                    }}),
                                    add(new OrderPromotionItem() {{
                                        lineItemId = "adipisci";
                                        offerId = "accusantium";
                                        productId = "magnam";
                                        quantity = 998527;
                                    }}),
                                }};
                                appliedItems = new org.openapis.openapi.models.shared.OrderPromotionItem[]{{
                                    add(new OrderPromotionItem() {{
                                        lineItemId = "explicabo";
                                        offerId = "vel";
                                        productId = "cum";
                                        quantity = 663062;
                                    }}),
                                    add(new OrderPromotionItem() {{
                                        lineItemId = "possimus";
                                        offerId = "fugit";
                                        productId = "ipsam";
                                        quantity = 343454;
                                    }}),
                                    add(new OrderPromotionItem() {{
                                        lineItemId = "sequi";
                                        offerId = "voluptatum";
                                        productId = "quasi";
                                        quantity = 622566;
                                    }}),
                                }};
                                endTime = "nobis";
                                funder = "tempora";
                                merchantPromotionId = "voluptate";
                                priceValue = new Price() {{
                                    currency = "eius";
                                    value = "expedita";
                                }};
                                shortTitle = "aperiam";
                                startTime = "voluptates";
                                subtype = "possimus";
                                taxValue = new Price() {{
                                    currency = "fugit";
                                    value = "voluptatem";
                                }};
                                title = "Dr.";
                                type = "corporis";
                            }}),
                            add(new OrderPromotion() {{
                                applicableItems = new org.openapis.openapi.models.shared.OrderPromotionItem[]{{
                                    add(new OrderPromotionItem() {{
                                        lineItemId = "eos";
                                        offerId = "aliquam";
                                        productId = "blanditiis";
                                        quantity = 943063;
                                    }}),
                                    add(new OrderPromotionItem() {{
                                        lineItemId = "maiores";
                                        offerId = "asperiores";
                                        productId = "autem";
                                        quantity = 198892;
                                    }}),
                                }};
                                appliedItems = new org.openapis.openapi.models.shared.OrderPromotionItem[]{{
                                    add(new OrderPromotionItem() {{
                                        lineItemId = "animi";
                                        offerId = "provident";
                                        productId = "beatae";
                                        quantity = 56998;
                                    }}),
                                    add(new OrderPromotionItem() {{
                                        lineItemId = "mollitia";
                                        offerId = "nam";
                                        productId = "assumenda";
                                        quantity = 776421;
                                    }}),
                                    add(new OrderPromotionItem() {{
                                        lineItemId = "fuga";
                                        offerId = "tempore";
                                        productId = "commodi";
                                        quantity = 146742;
                                    }}),
                                }};
                                endTime = "suscipit";
                                funder = "voluptate";
                                merchantPromotionId = "nisi";
                                priceValue = new Price() {{
                                    currency = "aliquid";
                                    value = "provident";
                                }};
                                shortTitle = "laboriosam";
                                startTime = "accusamus";
                                subtype = "ab";
                                taxValue = new Price() {{
                                    currency = "itaque";
                                    value = "quisquam";
                                }};
                                title = "Mr.";
                                type = "alias";
                            }}),
                        }};
                        shippingCost = new Price() {{
                            currency = "qui";
                            value = "consequuntur";
                        }};;
                        shippingOption = "vitae";
                    }};;
                }};;
                accessToken = "quidem";
                alt = AltEnum.JSON;
                callback = "amet";
                fields = "exercitationem";
                key = "illum";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "similique";
                uploadProtocol = "eligendi";
            }};            

            ContentOrdersCreatetestorderResponse res = sdk.orders.contentOrdersCreatetestorder(req, new ContentOrdersCreatetestorderSecurity("tempore", "amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersCreateTestOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersCreatetestreturn

Sandbox only. Creates a test return.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersCreatetestreturnRequest;
import org.openapis.openapi.models.operations.ContentOrdersCreatetestreturnResponse;
import org.openapis.openapi.models.operations.ContentOrdersCreatetestreturnSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrdersCreateTestReturnRequest;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersCreatetestreturnRequest req = new ContentOrdersCreatetestreturnRequest("debitis", "nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersCreateTestReturnRequest = new OrdersCreateTestReturnRequest() {{
                    items = new org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem[]{{
                        add(new OrdersCustomBatchRequestEntryCreateTestReturnReturnItem() {{
                            lineItemId = "id";
                            quantity = 542017L;
                        }}),
                        add(new OrdersCustomBatchRequestEntryCreateTestReturnReturnItem() {{
                            lineItemId = "quibusdam";
                            quantity = 27400L;
                        }}),
                        add(new OrdersCustomBatchRequestEntryCreateTestReturnReturnItem() {{
                            lineItemId = "quo";
                            quantity = 329973L;
                        }}),
                        add(new OrdersCustomBatchRequestEntryCreateTestReturnReturnItem() {{
                            lineItemId = "aliquam";
                            quantity = 591143L;
                        }}),
                    }};
                }};;
                accessToken = "vero";
                alt = AltEnum.PROTO;
                callback = "doloremque";
                fields = "ipsum";
                key = "alias";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "perspiciatis";
                uploadProtocol = "quam";
            }};            

            ContentOrdersCreatetestreturnResponse res = sdk.orders.contentOrdersCreatetestreturn(req, new ContentOrdersCreatetestreturnSecurity("atque", "officia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersCreateTestReturnResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersGet

Retrieves an order from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersGetRequest;
import org.openapis.openapi.models.operations.ContentOrdersGetResponse;
import org.openapis.openapi.models.operations.ContentOrdersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersGetRequest req = new ContentOrdersGetRequest("ex", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "quod";
                fields = "a";
                key = "qui";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "atque";
                uploadProtocol = "totam";
            }};            

            ContentOrdersGetResponse res = sdk.orders.contentOrdersGet(req, new ContentOrdersGetSecurity("tenetur", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.order != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersGetbymerchantorderid

Retrieves an order using merchant order ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersGetbymerchantorderidRequest;
import org.openapis.openapi.models.operations.ContentOrdersGetbymerchantorderidResponse;
import org.openapis.openapi.models.operations.ContentOrdersGetbymerchantorderidSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersGetbymerchantorderidRequest req = new ContentOrdersGetbymerchantorderidRequest("quam", "quod") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "quod";
                fields = "voluptate";
                key = "inventore";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "fuga";
                uploadProtocol = "ab";
            }};            

            ContentOrdersGetbymerchantorderidResponse res = sdk.orders.contentOrdersGetbymerchantorderid(req, new ContentOrdersGetbymerchantorderidSecurity("ex", "consectetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersGetByMerchantOrderIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersGettestordertemplate

Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersGettestordertemplateRequest;
import org.openapis.openapi.models.operations.ContentOrdersGettestordertemplateResponse;
import org.openapis.openapi.models.operations.ContentOrdersGettestordertemplateSecurity;
import org.openapis.openapi.models.operations.ContentOrdersGettestordertemplateTemplateNameEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersGettestordertemplateRequest req = new ContentOrdersGettestordertemplateRequest("maiores", ContentOrdersGettestordertemplateTemplateNameEnum.TEMPLATE1) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sequi";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                country = "Angola";
                fields = "laborum";
                key = "omnis";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "sapiente";
                uploadProtocol = "velit";
            }};            

            ContentOrdersGettestordertemplateResponse res = sdk.orders.contentOrdersGettestordertemplate(req, new ContentOrdersGettestordertemplateSecurity("adipisci", "non") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersGetTestOrderTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersInstorerefundlineitem

Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (for example, cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding through Google then through an in-store return.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersInstorerefundlineitemRequest;
import org.openapis.openapi.models.operations.ContentOrdersInstorerefundlineitemResponse;
import org.openapis.openapi.models.operations.ContentOrdersInstorerefundlineitemSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrdersInStoreRefundLineItemRequest;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersInstorerefundlineitemRequest req = new ContentOrdersInstorerefundlineitemRequest("optio", "illum") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersInStoreRefundLineItemRequest = new OrdersInStoreRefundLineItemRequest() {{
                    lineItemId = "tenetur";
                    operationId = "molestias";
                    priceAmount = new Price() {{
                        currency = "ipsam";
                        value = "esse";
                    }};;
                    productId = "laborum";
                    quantity = 596185L;
                    reason = "voluptates";
                    reasonText = "eum";
                    taxAmount = new Price() {{
                        currency = "quasi";
                        value = "quas";
                    }};;
                }};;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "aliquid";
                key = "mollitia";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "et";
                uploadProtocol = "nulla";
            }};            

            ContentOrdersInstorerefundlineitemResponse res = sdk.orders.contentOrdersInstorerefundlineitem(req, new ContentOrdersInstorerefundlineitemSecurity("magni", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersInStoreRefundLineItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersList

Lists the orders in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersListRequest;
import org.openapis.openapi.models.operations.ContentOrdersListResponse;
import org.openapis.openapi.models.operations.ContentOrdersListSecurity;
import org.openapis.openapi.models.operations.ContentOrdersListStatusesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersListRequest req = new ContentOrdersListRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "impedit";
                acknowledged = false;
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "facere";
                key = "voluptas";
                maxResults = 987384L;
                oauthToken = "recusandae";
                orderBy = "quisquam";
                pageToken = "facere";
                placedDateEnd = "dignissimos";
                placedDateStart = "iste";
                prettyPrint = false;
                quotaUser = "provident";
                statuses = new org.openapis.openapi.models.operations.ContentOrdersListStatusesEnum[]{{
                    add(ContentOrdersListStatusesEnum.SHIPPED),
                }};
                uploadType = "aperiam";
                uploadProtocol = "eaque";
            }};            

            ContentOrdersListResponse res = sdk.orders.contentOrdersList(req, new ContentOrdersListSecurity("eum", "laboriosam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersRefunditem

Issues a partial or total refund for items and shipment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersRefunditemRequest;
import org.openapis.openapi.models.operations.ContentOrdersRefunditemResponse;
import org.openapis.openapi.models.operations.ContentOrdersRefunditemSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MonetaryAmount;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryRefundItemItem;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryRefundItemShipping;
import org.openapis.openapi.models.shared.OrdersRefundItemRequest;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersRefunditemRequest req = new ContentOrdersRefunditemRequest("laborum", "autem") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersRefundItemRequest = new OrdersRefundItemRequest() {{
                    items = new org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryRefundItemItem[]{{
                        add(new OrdersCustomBatchRequestEntryRefundItemItem() {{
                            amount = new MonetaryAmount() {{
                                priceAmount = new Price() {{
                                    currency = "fugiat";
                                    value = "doloremque";
                                }};
                                taxAmount = new Price() {{
                                    currency = "voluptatem";
                                    value = "alias";
                                }};
                            }};
                            fullRefund = false;
                            lineItemId = "velit";
                            productId = "ullam";
                            quantity = 339094;
                        }}),
                    }};
                    operationId = "velit";
                    reason = "ratione";
                    reasonText = "quas";
                    shipping = new OrdersCustomBatchRequestEntryRefundItemShipping() {{
                        amount = new Price() {{
                            currency = "maxime";
                            value = "recusandae";
                        }};;
                        fullRefund = false;
                    }};;
                }};;
                accessToken = "cumque";
                alt = AltEnum.JSON;
                callback = "totam";
                fields = "iure";
                key = "maiores";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "veritatis";
                uploadProtocol = "necessitatibus";
            }};            

            ContentOrdersRefunditemResponse res = sdk.orders.contentOrdersRefunditem(req, new ContentOrdersRefunditemSecurity("iste", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersRefundItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersRefundorder

Issues a partial or total refund for an order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersRefundorderRequest;
import org.openapis.openapi.models.operations.ContentOrdersRefundorderResponse;
import org.openapis.openapi.models.operations.ContentOrdersRefundorderSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MonetaryAmount;
import org.openapis.openapi.models.shared.OrdersRefundOrderRequest;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersRefundorderRequest req = new ContentOrdersRefundorderRequest("ipsam", "consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersRefundOrderRequest = new OrdersRefundOrderRequest() {{
                    amount = new MonetaryAmount() {{
                        priceAmount = new Price() {{
                            currency = "quidem";
                            value = "non";
                        }};;
                        taxAmount = new Price() {{
                            currency = "beatae";
                            value = "sunt";
                        }};;
                    }};;
                    fullRefund = false;
                    operationId = "molestias";
                    reason = "beatae";
                    reasonText = "autem";
                }};;
                accessToken = "ducimus";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "necessitatibus";
                key = "ipsum";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "illum";
                uploadProtocol = "distinctio";
            }};            

            ContentOrdersRefundorderResponse res = sdk.orders.contentOrdersRefundorder(req, new ContentOrdersRefundorderSecurity("voluptatem", "non") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersRefundOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersRejectreturnlineitem

Rejects return on an line item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersRejectreturnlineitemRequest;
import org.openapis.openapi.models.operations.ContentOrdersRejectreturnlineitemResponse;
import org.openapis.openapi.models.operations.ContentOrdersRejectreturnlineitemSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrdersRejectReturnLineItemRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersRejectreturnlineitemRequest req = new ContentOrdersRejectreturnlineitemRequest("quaerat", "consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersRejectReturnLineItemRequest = new OrdersRejectReturnLineItemRequest() {{
                    lineItemId = "repellendus";
                    operationId = "commodi";
                    productId = "quibusdam";
                    quantity = 231255L;
                    reason = "voluptas";
                    reasonText = "quaerat";
                }};;
                accessToken = "earum";
                alt = AltEnum.PROTO;
                callback = "assumenda";
                fields = "dolore";
                key = "enim";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "alias";
                uploadProtocol = "ex";
            }};            

            ContentOrdersRejectreturnlineitemResponse res = sdk.orders.contentOrdersRejectreturnlineitem(req, new ContentOrdersRejectreturnlineitemSecurity("quibusdam", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersRejectReturnLineItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersReturnrefundlineitem

Returns and refunds a line item. Note that this method can only be called on fully shipped orders. The Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersReturnrefundlineitemRequest;
import org.openapis.openapi.models.operations.ContentOrdersReturnrefundlineitemResponse;
import org.openapis.openapi.models.operations.ContentOrdersReturnrefundlineitemSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrdersReturnRefundLineItemRequest;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersReturnrefundlineitemRequest req = new ContentOrdersReturnrefundlineitemRequest("quia", "commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                ordersReturnRefundLineItemRequest = new OrdersReturnRefundLineItemRequest() {{
                    lineItemId = "quibusdam";
                    operationId = "numquam";
                    priceAmount = new Price() {{
                        currency = "rem";
                        value = "officiis";
                    }};;
                    productId = "omnis";
                    quantity = 206451L;
                    reason = "corporis";
                    reasonText = "quod";
                    taxAmount = new Price() {{
                        currency = "dolores";
                        value = "placeat";
                    }};;
                }};;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "quos";
                fields = "dicta";
                key = "sapiente";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "soluta";
                uploadProtocol = "necessitatibus";
            }};            

            ContentOrdersReturnrefundlineitemResponse res = sdk.orders.contentOrdersReturnrefundlineitem(req, new ContentOrdersReturnrefundlineitemSecurity("sequi", "recusandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersReturnRefundLineItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersSetlineitemmetadata

Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided through other methods. Submitted key-value pairs can be retrieved as part of the orders resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersSetlineitemmetadataRequest;
import org.openapis.openapi.models.operations.ContentOrdersSetlineitemmetadataResponse;
import org.openapis.openapi.models.operations.ContentOrdersSetlineitemmetadataSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrderMerchantProvidedAnnotation;
import org.openapis.openapi.models.shared.OrdersSetLineItemMetadataRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersSetlineitemmetadataRequest req = new ContentOrdersSetlineitemmetadataRequest("labore", "adipisci") {{
                dollarXgafv = XgafvEnum.ONE;
                ordersSetLineItemMetadataRequest = new OrdersSetLineItemMetadataRequest() {{
                    annotations = new org.openapis.openapi.models.shared.OrderMerchantProvidedAnnotation[]{{
                        add(new OrderMerchantProvidedAnnotation() {{
                            key = "dolores";
                            value = "illum";
                        }}),
                    }};
                    lineItemId = "iusto";
                    operationId = "magni";
                    productId = "beatae";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "voluptate";
                fields = "vel";
                key = "minima";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "laboriosam";
                uploadProtocol = "quaerat";
            }};            

            ContentOrdersSetlineitemmetadataResponse res = sdk.orders.contentOrdersSetlineitemmetadata(req, new ContentOrdersSetlineitemmetadataSecurity("quasi", "rem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersSetLineItemMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersShiplineitems

Marks line item(s) as shipped.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersShiplineitemsRequest;
import org.openapis.openapi.models.operations.ContentOrdersShiplineitemsResponse;
import org.openapis.openapi.models.operations.ContentOrdersShiplineitemsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrderShipmentLineItemShipment;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo;
import org.openapis.openapi.models.shared.OrdersShipLineItemsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersShiplineitemsRequest req = new ContentOrdersShiplineitemsRequest("dignissimos", "doloremque") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersShipLineItemsRequest = new OrdersShipLineItemsRequest() {{
                    lineItems = new org.openapis.openapi.models.shared.OrderShipmentLineItemShipment[]{{
                        add(new OrderShipmentLineItemShipment() {{
                            lineItemId = "facere";
                            productId = "sed";
                            quantity = 80448L;
                        }}),
                        add(new OrderShipmentLineItemShipment() {{
                            lineItemId = "voluptatibus";
                            productId = "unde";
                            quantity = 645609L;
                        }}),
                        add(new OrderShipmentLineItemShipment() {{
                            lineItemId = "repellendus";
                            productId = "consequatur";
                            quantity = 237972L;
                        }}),
                    }};
                    operationId = "doloremque";
                    shipmentGroupId = "optio";
                    shipmentInfos = new org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[]{{
                        add(new OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo() {{
                            carrier = "debitis";
                            shipmentId = "cumque";
                            trackingId = "maxime";
                        }}),
                        add(new OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo() {{
                            carrier = "et";
                            shipmentId = "beatae";
                            trackingId = "id";
                        }}),
                    }};
                }};;
                accessToken = "consequatur";
                alt = AltEnum.MEDIA;
                callback = "ratione";
                fields = "iure";
                key = "tempora";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "voluptatem";
                uploadProtocol = "suscipit";
            }};            

            ContentOrdersShiplineitemsResponse res = sdk.orders.contentOrdersShiplineitems(req, new ContentOrdersShiplineitemsSecurity("laudantium", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersShipLineItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersUpdatelineitemshippingdetails

Updates ship by and delivery by dates for a line item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersUpdatelineitemshippingdetailsRequest;
import org.openapis.openapi.models.operations.ContentOrdersUpdatelineitemshippingdetailsResponse;
import org.openapis.openapi.models.operations.ContentOrdersUpdatelineitemshippingdetailsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrdersUpdateLineItemShippingDetailsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersUpdatelineitemshippingdetailsRequest req = new ContentOrdersUpdatelineitemshippingdetailsRequest("laudantium", "ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                ordersUpdateLineItemShippingDetailsRequest = new OrdersUpdateLineItemShippingDetailsRequest() {{
                    deliverByDate = "quia";
                    lineItemId = "officia";
                    operationId = "quaerat";
                    productId = "corporis";
                    shipByDate = "accusamus";
                }};;
                accessToken = "iusto";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "neque";
                key = "quidem";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "tempora";
                uploadProtocol = "ipsam";
            }};            

            ContentOrdersUpdatelineitemshippingdetailsResponse res = sdk.orders.contentOrdersUpdatelineitemshippingdetails(req, new ContentOrdersUpdatelineitemshippingdetailsSecurity("officiis", "sequi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersUpdateLineItemShippingDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersUpdatemerchantorderid

Updates the merchant order ID for a given order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersUpdatemerchantorderidRequest;
import org.openapis.openapi.models.operations.ContentOrdersUpdatemerchantorderidResponse;
import org.openapis.openapi.models.operations.ContentOrdersUpdatemerchantorderidSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrdersUpdateMerchantOrderIdRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersUpdatemerchantorderidRequest req = new ContentOrdersUpdatemerchantorderidRequest("magni", "voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersUpdateMerchantOrderIdRequest = new OrdersUpdateMerchantOrderIdRequest() {{
                    merchantOrderId = "amet";
                    operationId = "veritatis";
                }};;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "rerum";
                key = "dolorum";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "excepturi";
                uploadProtocol = "numquam";
            }};            

            ContentOrdersUpdatemerchantorderidResponse res = sdk.orders.contentOrdersUpdatemerchantorderid(req, new ContentOrdersUpdatemerchantorderidSecurity("molestiae", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersUpdateMerchantOrderIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersUpdateshipment

Updates a shipment's status, carrier, and/or tracking ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersUpdateshipmentRequest;
import org.openapis.openapi.models.operations.ContentOrdersUpdateshipmentResponse;
import org.openapis.openapi.models.operations.ContentOrdersUpdateshipmentSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails;
import org.openapis.openapi.models.shared.OrdersUpdateShipmentRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersUpdateshipmentRequest req = new ContentOrdersUpdateshipmentRequest("error", "animi") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersUpdateShipmentRequest = new OrdersUpdateShipmentRequest() {{
                    carrier = "aliquid";
                    deliveryDate = "nihil";
                    lastPickupDate = "facilis";
                    operationId = "optio";
                    readyPickupDate = "incidunt";
                    scheduledDeliveryDetails = new OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails() {{
                        carrierPhoneNumber = "eos";
                        scheduledDate = "magnam";
                    }};;
                    shipmentId = "dolores";
                    status = "aliquid";
                    trackingId = "eum";
                    undeliveredDate = "vel";
                }};;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "illo";
                fields = "suscipit";
                key = "quibusdam";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "culpa";
                uploadProtocol = "atque";
            }};            

            ContentOrdersUpdateshipmentResponse res = sdk.orders.contentOrdersUpdateshipment(req, new ContentOrdersUpdateshipmentSecurity("voluptates", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersUpdateShipmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
