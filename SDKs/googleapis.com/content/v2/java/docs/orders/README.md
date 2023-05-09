# orders

### Available Operations

* [contentOrdersAcknowledge](#contentordersacknowledge) - Marks an order as acknowledged.
* [contentOrdersAdvancetestorder](#contentordersadvancetestorder) - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
* [contentOrdersCancel](#contentorderscancel) - Cancels all line items in an order, making a full refund.
* [contentOrdersCancellineitem](#contentorderscancellineitem) - Cancels a line item, making a full refund.
* [contentOrdersCanceltestorderbycustomer](#contentorderscanceltestorderbycustomer) - Sandbox only. Cancels a test order for customer-initiated cancellation.
* [contentOrdersCreatetestorder](#contentorderscreatetestorder) - Sandbox only. Creates a test order.
* [contentOrdersCreatetestreturn](#contentorderscreatetestreturn) - Sandbox only. Creates a test return.
* [contentOrdersCustombatch](#contentorderscustombatch) - Retrieves or modifies multiple orders in a single request.
* [contentOrdersGet](#contentordersget) - Retrieves an order from your Merchant Center account.
* [contentOrdersGetbymerchantorderid](#contentordersgetbymerchantorderid) - Retrieves an order using merchant order ID.
* [contentOrdersGettestordertemplate](#contentordersgettestordertemplate) - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
* [contentOrdersInstorerefundlineitem](#contentordersinstorerefundlineitem) - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.
* [contentOrdersList](#contentorderslist) - Lists the orders in your Merchant Center account.
* [contentOrdersRefund](#contentordersrefund) - Deprecated, please use returnRefundLineItem instead.
* [contentOrdersRejectreturnlineitem](#contentordersrejectreturnlineitem) - Rejects return on an line item.
* [contentOrdersReturnlineitem](#contentordersreturnlineitem) - Returns a line item.
* [contentOrdersReturnrefundlineitem](#contentordersreturnrefundlineitem) - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
* [contentOrdersSetlineitemmetadata](#contentorderssetlineitemmetadata) - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
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

            ContentOrdersAcknowledgeRequest req = new ContentOrdersAcknowledgeRequest("quisquam", "eos") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersAcknowledgeRequest = new OrdersAcknowledgeRequest() {{
                    operationId = "natus";
                }};;
                accessToken = "minus";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "reprehenderit";
                key = "quod";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "amet";
                uploadProtocol = "molestiae";
            }};            

            ContentOrdersAcknowledgeResponse res = sdk.orders.contentOrdersAcknowledge(req, new ContentOrdersAcknowledgeSecurity("amet", "laborum") {{
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

            ContentOrdersAdvancetestorderRequest req = new ContentOrdersAdvancetestorderRequest("modi", "perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                fields = "sunt";
                key = "maiores";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "earum";
                uploadProtocol = "veniam";
            }};            

            ContentOrdersAdvancetestorderResponse res = sdk.orders.contentOrdersAdvancetestorder(req, new ContentOrdersAdvancetestorderSecurity("ipsam", "eaque") {{
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

            ContentOrdersCancelRequest req = new ContentOrdersCancelRequest("exercitationem", "veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                ordersCancelRequest = new OrdersCancelRequest() {{
                    operationId = "ad";
                    reason = "nisi";
                    reasonText = "tenetur";
                }};;
                accessToken = "quis";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "suscipit";
                key = "pariatur";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "repellendus";
                uploadProtocol = "perferendis";
            }};            

            ContentOrdersCancelResponse res = sdk.orders.contentOrdersCancel(req, new ContentOrdersCancelSecurity("id", "sapiente") {{
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
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersCancellineitemRequest req = new ContentOrdersCancellineitemRequest("sed", "possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersCancelLineItemRequest = new OrdersCancelLineItemRequest() {{
                    amount = new Price() {{
                        currency = "repudiandae";
                        value = "architecto";
                    }};;
                    amountPretax = new Price() {{
                        currency = "adipisci";
                        value = "pariatur";
                    }};;
                    amountTax = new Price() {{
                        currency = "harum";
                        value = "dolore";
                    }};;
                    lineItemId = "voluptatibus";
                    operationId = "iure";
                    productId = "explicabo";
                    quantity = 795457L;
                    reason = "soluta";
                    reasonText = "dolorum";
                }};;
                accessToken = "velit";
                alt = AltEnum.PROTO;
                callback = "praesentium";
                fields = "error";
                key = "non";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "accusamus";
                uploadProtocol = "harum";
            }};            

            ContentOrdersCancellineitemResponse res = sdk.orders.contentOrdersCancellineitem(req, new ContentOrdersCancellineitemSecurity("cumque", "doloremque") {{
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

            ContentOrdersCanceltestorderbycustomerRequest req = new ContentOrdersCanceltestorderbycustomerRequest("expedita", "corrupti") {{
                dollarXgafv = XgafvEnum.ONE;
                ordersCancelTestOrderByCustomerRequest = new OrdersCancelTestOrderByCustomerRequest() {{
                    reason = "deserunt";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "magni";
                fields = "tempora";
                key = "possimus";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "sed";
                uploadProtocol = "accusamus";
            }};            

            ContentOrdersCanceltestorderbycustomerResponse res = sdk.orders.contentOrdersCanceltestorderbycustomer(req, new ContentOrdersCanceltestorderbycustomerSecurity("optio", "delectus") {{
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
import org.openapis.openapi.models.shared.OrderLegacyPromotion;
import org.openapis.openapi.models.shared.OrderLegacyPromotionBenefit;
import org.openapis.openapi.models.shared.OrderLineItemProductFee;
import org.openapis.openapi.models.shared.OrderLineItemProductVariantAttribute;
import org.openapis.openapi.models.shared.OrderLineItemReturnInfo;
import org.openapis.openapi.models.shared.OrderLineItemShippingDetails;
import org.openapis.openapi.models.shared.OrderLineItemShippingDetailsMethod;
import org.openapis.openapi.models.shared.OrdersCreateTestOrderRequest;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.TestOrder;
import org.openapis.openapi.models.shared.TestOrderCustomer;
import org.openapis.openapi.models.shared.TestOrderCustomerMarketingRightsInfo;
import org.openapis.openapi.models.shared.TestOrderLineItem;
import org.openapis.openapi.models.shared.TestOrderLineItemProduct;
import org.openapis.openapi.models.shared.TestOrderPaymentMethod;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersCreatetestorderRequest req = new ContentOrdersCreatetestorderRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersCreateTestOrderRequest = new OrdersCreateTestOrderRequest() {{
                    country = "Marshall Islands";
                    templateName = "asperiores";
                    testOrder = new TestOrder() {{
                        customer = new TestOrderCustomer() {{
                            email = "Letha7@yahoo.com";
                            explicitMarketingPreference = false;
                            fullName = "aut";
                            marketingRightsInfo = new TestOrderCustomerMarketingRightsInfo() {{
                                explicitMarketingPreference = "doloribus";
                                lastUpdatedTimestamp = "nostrum";
                            }};;
                        }};;
                        enableOrderinvoices = false;
                        kind = "at";
                        lineItems = new org.openapis.openapi.models.shared.TestOrderLineItem[]{{
                            add(new TestOrderLineItem() {{
                                product = new TestOrderLineItemProduct() {{
                                    brand = "neque";
                                    channel = "pariatur";
                                    condition = "vel";
                                    contentLanguage = "sapiente";
                                    fees = new org.openapis.openapi.models.shared.OrderLineItemProductFee[]{{
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "quae";
                                                value = "quos";
                                            }};
                                            name = "Ellen Veum";
                                        }}),
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "quisquam";
                                                value = "quas";
                                            }};
                                            name = "Ebony Bode";
                                        }}),
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "est";
                                                value = "dolor";
                                            }};
                                            name = "Edith Runte";
                                        }}),
                                    }};
                                    gtin = "ducimus";
                                    imageLink = "adipisci";
                                    itemGroupId = "recusandae";
                                    mpn = "tempora";
                                    offerId = "blanditiis";
                                    price = new Price() {{
                                        currency = "numquam";
                                        value = "sequi";
                                    }};
                                    targetCountry = "voluptatum";
                                    title = "Mr.";
                                    variantAttributes = new org.openapis.openapi.models.shared.OrderLineItemProductVariantAttribute[]{{
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "veritatis";
                                            value = "tenetur";
                                        }}),
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "autem";
                                            value = "quidem";
                                        }}),
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "totam";
                                            value = "porro";
                                        }}),
                                    }};
                                }};
                                quantityOrdered = 646491L;
                                returnInfo = new OrderLineItemReturnInfo() {{
                                    daysToReturn = 168926;
                                    isReturnable = false;
                                    policyUrl = "nihil";
                                }};
                                shippingDetails = new OrderLineItemShippingDetails() {{
                                    deliverByDate = "voluptas";
                                    method = new OrderLineItemShippingDetailsMethod() {{
                                        carrier = "animi";
                                        maxDaysInTransit = 413780L;
                                        methodName = "alias";
                                        minDaysInTransit = 686380L;
                                    }};
                                    shipByDate = "aut";
                                    type = "dolore";
                                }};
                                unitTax = new Price() {{
                                    currency = "maxime";
                                    value = "aliquam";
                                }};
                            }}),
                            add(new TestOrderLineItem() {{
                                product = new TestOrderLineItemProduct() {{
                                    brand = "iste";
                                    channel = "ullam";
                                    condition = "eligendi";
                                    contentLanguage = "placeat";
                                    fees = new org.openapis.openapi.models.shared.OrderLineItemProductFee[]{{
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "occaecati";
                                                value = "unde";
                                            }};
                                            name = "Jackie Block";
                                        }}),
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "quasi";
                                                value = "cumque";
                                            }};
                                            name = "Maryann Schulist DDS";
                                        }}),
                                    }};
                                    gtin = "delectus";
                                    imageLink = "labore";
                                    itemGroupId = "expedita";
                                    mpn = "corrupti";
                                    offerId = "rem";
                                    price = new Price() {{
                                        currency = "atque";
                                        value = "officiis";
                                    }};
                                    targetCountry = "cum";
                                    title = "Dr.";
                                    variantAttributes = new org.openapis.openapi.models.shared.OrderLineItemProductVariantAttribute[]{{
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "quo";
                                            value = "incidunt";
                                        }}),
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "quod";
                                            value = "minus";
                                        }}),
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "porro";
                                            value = "id";
                                        }}),
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "excepturi";
                                            value = "occaecati";
                                        }}),
                                    }};
                                }};
                                quantityOrdered = 726851L;
                                returnInfo = new OrderLineItemReturnInfo() {{
                                    daysToReturn = 774880;
                                    isReturnable = false;
                                    policyUrl = "esse";
                                }};
                                shippingDetails = new OrderLineItemShippingDetails() {{
                                    deliverByDate = "hic";
                                    method = new OrderLineItemShippingDetailsMethod() {{
                                        carrier = "maxime";
                                        maxDaysInTransit = 36691L;
                                        methodName = "soluta";
                                        minDaysInTransit = 147400L;
                                    }};
                                    shipByDate = "pariatur";
                                    type = "eligendi";
                                }};
                                unitTax = new Price() {{
                                    currency = "recusandae";
                                    value = "veritatis";
                                }};
                            }}),
                            add(new TestOrderLineItem() {{
                                product = new TestOrderLineItemProduct() {{
                                    brand = "aut";
                                    channel = "laudantium";
                                    condition = "iusto";
                                    contentLanguage = "dolor";
                                    fees = new org.openapis.openapi.models.shared.OrderLineItemProductFee[]{{
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "tempora";
                                                value = "magni";
                                            }};
                                            name = "Brian Bartell";
                                        }}),
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "eum";
                                                value = "reprehenderit";
                                            }};
                                            name = "Guy Kovacek";
                                        }}),
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "deserunt";
                                                value = "atque";
                                            }};
                                            name = "Kay Bradtke";
                                        }}),
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "rem";
                                                value = "magni";
                                            }};
                                            name = "Dianne Schroeder";
                                        }}),
                                    }};
                                    gtin = "sapiente";
                                    imageLink = "saepe";
                                    itemGroupId = "delectus";
                                    mpn = "officia";
                                    offerId = "natus";
                                    price = new Price() {{
                                        currency = "cumque";
                                        value = "natus";
                                    }};
                                    targetCountry = "quaerat";
                                    title = "Dr.";
                                    variantAttributes = new org.openapis.openapi.models.shared.OrderLineItemProductVariantAttribute[]{{
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "officiis";
                                            value = "mollitia";
                                        }}),
                                    }};
                                }};
                                quantityOrdered = 765070L;
                                returnInfo = new OrderLineItemReturnInfo() {{
                                    daysToReturn = 337081;
                                    isReturnable = false;
                                    policyUrl = "enim";
                                }};
                                shippingDetails = new OrderLineItemShippingDetails() {{
                                    deliverByDate = "eum";
                                    method = new OrderLineItemShippingDetailsMethod() {{
                                        carrier = "nemo";
                                        maxDaysInTransit = 849337L;
                                        methodName = "nesciunt";
                                        minDaysInTransit = 22331L;
                                    }};
                                    shipByDate = "odio";
                                    type = "minus";
                                }};
                                unitTax = new Price() {{
                                    currency = "asperiores";
                                    value = "recusandae";
                                }};
                            }}),
                            add(new TestOrderLineItem() {{
                                product = new TestOrderLineItemProduct() {{
                                    brand = "voluptates";
                                    channel = "praesentium";
                                    condition = "dicta";
                                    contentLanguage = "fugit";
                                    fees = new org.openapis.openapi.models.shared.OrderLineItemProductFee[]{{
                                        add(new OrderLineItemProductFee() {{
                                            amount = new Price() {{
                                                currency = "aliquid";
                                                value = "necessitatibus";
                                            }};
                                            name = "Cassandra Casper";
                                        }}),
                                    }};
                                    gtin = "laborum";
                                    imageLink = "aliquam";
                                    itemGroupId = "deserunt";
                                    mpn = "modi";
                                    offerId = "sunt";
                                    price = new Price() {{
                                        currency = "impedit";
                                        value = "eius";
                                    }};
                                    targetCountry = "voluptatum";
                                    title = "Mr.";
                                    variantAttributes = new org.openapis.openapi.models.shared.OrderLineItemProductVariantAttribute[]{{
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "dolorem";
                                            value = "repellat";
                                        }}),
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "aspernatur";
                                            value = "inventore";
                                        }}),
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "sequi";
                                            value = "fugit";
                                        }}),
                                        add(new OrderLineItemProductVariantAttribute() {{
                                            dimension = "fuga";
                                            value = "hic";
                                        }}),
                                    }};
                                }};
                                quantityOrdered = 49499L;
                                returnInfo = new OrderLineItemReturnInfo() {{
                                    daysToReturn = 211301;
                                    isReturnable = false;
                                    policyUrl = "architecto";
                                }};
                                shippingDetails = new OrderLineItemShippingDetails() {{
                                    deliverByDate = "aperiam";
                                    method = new OrderLineItemShippingDetailsMethod() {{
                                        carrier = "aspernatur";
                                        maxDaysInTransit = 860362L;
                                        methodName = "enim";
                                        minDaysInTransit = 73574L;
                                    }};
                                    shipByDate = "magnam";
                                    type = "delectus";
                                }};
                                unitTax = new Price() {{
                                    currency = "numquam";
                                    value = "optio";
                                }};
                            }}),
                        }};
                        notificationMode = "nobis";
                        paymentMethod = new TestOrderPaymentMethod() {{
                            expirationMonth = 404422;
                            expirationYear = 998023;
                            lastFourDigits = "quae";
                            predefinedBillingAddress = "deleniti";
                            type = "expedita";
                        }};;
                        predefinedDeliveryAddress = "hic";
                        predefinedPickupDetails = "excepturi";
                        promotions = new org.openapis.openapi.models.shared.OrderLegacyPromotion[]{{
                            add(new OrderLegacyPromotion() {{
                                benefits = new org.openapis.openapi.models.shared.OrderLegacyPromotionBenefit[]{{
                                    add(new OrderLegacyPromotionBenefit() {{
                                        discount = new Price() {{
                                            currency = "beatae";
                                            value = "similique";
                                        }};
                                        offerIds = new String[]{{
                                            add("animi"),
                                            add("dolore"),
                                        }};
                                        subType = "tenetur";
                                        taxImpact = new Price() {{
                                            currency = "dignissimos";
                                            value = "esse";
                                        }};
                                        type = "animi";
                                    }}),
                                }};
                                effectiveDates = "laudantium";
                                genericRedemptionCode = "esse";
                                id = "ee3e4be7-52c6-45b3-8418-e3bb91c8d975";
                                longTitle = "accusamus";
                                productApplicability = "aperiam";
                                redemptionChannel = "voluptates";
                            }}),
                            add(new OrderLegacyPromotion() {{
                                benefits = new org.openapis.openapi.models.shared.OrderLegacyPromotionBenefit[]{{
                                    add(new OrderLegacyPromotionBenefit() {{
                                        discount = new Price() {{
                                            currency = "tempora";
                                            value = "quae";
                                        }};
                                        offerIds = new String[]{{
                                            add("illum"),
                                            add("rem"),
                                            add("tenetur"),
                                        }};
                                        subType = "deleniti";
                                        taxImpact = new Price() {{
                                            currency = "modi";
                                            value = "earum";
                                        }};
                                        type = "architecto";
                                    }}),
                                    add(new OrderLegacyPromotionBenefit() {{
                                        discount = new Price() {{
                                            currency = "aliquam";
                                            value = "labore";
                                        }};
                                        offerIds = new String[]{{
                                            add("sequi"),
                                            add("saepe"),
                                            add("consequatur"),
                                            add("esse"),
                                        }};
                                        subType = "debitis";
                                        taxImpact = new Price() {{
                                            currency = "facere";
                                            value = "quisquam";
                                        }};
                                        type = "cumque";
                                    }}),
                                    add(new OrderLegacyPromotionBenefit() {{
                                        discount = new Price() {{
                                            currency = "aliquam";
                                            value = "dolorum";
                                        }};
                                        offerIds = new String[]{{
                                            add("ad"),
                                            add("reiciendis"),
                                            add("sequi"),
                                        }};
                                        subType = "porro";
                                        taxImpact = new Price() {{
                                            currency = "laborum";
                                            value = "nobis";
                                        }};
                                        type = "quibusdam";
                                    }}),
                                }};
                                effectiveDates = "omnis";
                                genericRedemptionCode = "aut";
                                id = "5a972e05-6728-4227-b2d3-09470bf7a4fa";
                                longTitle = "voluptatum";
                                productApplicability = "iusto";
                                redemptionChannel = "quod";
                            }}),
                        }};
                        shippingCost = new Price() {{
                            currency = "voluptatibus";
                            value = "voluptas";
                        }};;
                        shippingCostTax = new Price() {{
                            currency = "non";
                            value = "ullam";
                        }};;
                        shippingOption = "laborum";
                    }};;
                }};;
                accessToken = "voluptas";
                alt = AltEnum.PROTO;
                callback = "animi";
                fields = "recusandae";
                key = "corporis";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "distinctio";
                uploadProtocol = "maiores";
            }};            

            ContentOrdersCreatetestorderResponse res = sdk.orders.contentOrdersCreatetestorder(req, new ContentOrdersCreatetestorderSecurity("laboriosam", "voluptatem") {{
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

            ContentOrdersCreatetestreturnRequest req = new ContentOrdersCreatetestreturnRequest("optio", "sequi") {{
                dollarXgafv = XgafvEnum.ONE;
                ordersCreateTestReturnRequest = new OrdersCreateTestReturnRequest() {{
                    items = new org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem[]{{
                        add(new OrdersCustomBatchRequestEntryCreateTestReturnReturnItem() {{
                            lineItemId = "voluptatibus";
                            quantity = 42364L;
                        }}),
                    }};
                }};;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "in";
                key = "nostrum";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "dolor";
                uploadProtocol = "nisi";
            }};            

            ContentOrdersCreatetestreturnResponse res = sdk.orders.contentOrdersCreatetestreturn(req, new ContentOrdersCreatetestreturnSecurity("dignissimos", "reiciendis") {{
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

## contentOrdersCustombatch

Retrieves or modifies multiple orders in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersCustombatchRequest;
import org.openapis.openapi.models.operations.ContentOrdersCustombatchResponse;
import org.openapis.openapi.models.operations.ContentOrdersCustombatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrderMerchantProvidedAnnotation;
import org.openapis.openapi.models.shared.OrderShipmentLineItemShipment;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequest;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntry;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryCancel;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryCancelLineItem;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryInStoreRefundLineItem;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryRefund;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryRejectReturnLineItem;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryReturnLineItem;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryReturnRefundLineItem;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntrySetLineItemMetadata;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryShipLineItems;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;
import org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryUpdateShipment;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersCustombatchRequest req = new ContentOrdersCustombatchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                ordersCustomBatchRequest = new OrdersCustomBatchRequest() {{
                    entries = new org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntry[]{{
                        add(new OrdersCustomBatchRequestEntry() {{
                            batchId = 667215L;
                            cancel = new OrdersCustomBatchRequestEntryCancel() {{
                                reason = "accusantium";
                                reasonText = "quod";
                            }};
                            cancelLineItem = new OrdersCustomBatchRequestEntryCancelLineItem() {{
                                amount = new Price() {{
                                    currency = "minus";
                                    value = "quos";
                                }};
                                amountPretax = new Price() {{
                                    currency = "possimus";
                                    value = "maiores";
                                }};
                                amountTax = new Price() {{
                                    currency = "odio";
                                    value = "provident";
                                }};
                                lineItemId = "sapiente";
                                productId = "aperiam";
                                quantity = 627717L;
                                reason = "nesciunt";
                                reasonText = "provident";
                            }};
                            inStoreRefundLineItem = new OrdersCustomBatchRequestEntryInStoreRefundLineItem() {{
                                amountPretax = new Price() {{
                                    currency = "ex";
                                    value = "repellendus";
                                }};
                                amountTax = new Price() {{
                                    currency = "unde";
                                    value = "alias";
                                }};
                                lineItemId = "impedit";
                                productId = "sequi";
                                quantity = 413086L;
                                reason = "labore";
                                reasonText = "expedita";
                            }};
                            merchantId = "in";
                            merchantOrderId = "quisquam";
                            method = "sunt";
                            operationId = "enim";
                            orderId = "nulla";
                            refund = new OrdersCustomBatchRequestEntryRefund() {{
                                amount = new Price() {{
                                    currency = "maiores";
                                    value = "distinctio";
                                }};
                                amountPretax = new Price() {{
                                    currency = "mollitia";
                                    value = "impedit";
                                }};
                                amountTax = new Price() {{
                                    currency = "accusamus";
                                    value = "et";
                                }};
                                reason = "quas";
                                reasonText = "blanditiis";
                            }};
                            rejectReturnLineItem = new OrdersCustomBatchRequestEntryRejectReturnLineItem() {{
                                lineItemId = "cum";
                                productId = "dicta";
                                quantity = 770544L;
                                reason = "tempora";
                                reasonText = "eveniet";
                            }};
                            returnLineItem = new OrdersCustomBatchRequestEntryReturnLineItem() {{
                                lineItemId = "repudiandae";
                                productId = "sed";
                                quantity = 772628L;
                                reason = "quas";
                                reasonText = "impedit";
                            }};
                            returnRefundLineItem = new OrdersCustomBatchRequestEntryReturnRefundLineItem() {{
                                amountPretax = new Price() {{
                                    currency = "vel";
                                    value = "eligendi";
                                }};
                                amountTax = new Price() {{
                                    currency = "recusandae";
                                    value = "ex";
                                }};
                                lineItemId = "beatae";
                                productId = "veritatis";
                                quantity = 982574L;
                                reason = "itaque";
                                reasonText = "vero";
                            }};
                            setLineItemMetadata = new OrdersCustomBatchRequestEntrySetLineItemMetadata() {{
                                annotations = new org.openapis.openapi.models.shared.OrderMerchantProvidedAnnotation[]{{
                                    add(new OrderMerchantProvidedAnnotation() {{
                                        key = "illo";
                                        value = "quo";
                                    }}),
                                    add(new OrderMerchantProvidedAnnotation() {{
                                        key = "dignissimos";
                                        value = "minus";
                                    }}),
                                    add(new OrderMerchantProvidedAnnotation() {{
                                        key = "distinctio";
                                        value = "possimus";
                                    }}),
                                }};
                                lineItemId = "cum";
                                productId = "suscipit";
                            }};
                            shipLineItems = new OrdersCustomBatchRequestEntryShipLineItems() {{
                                carrier = "saepe";
                                lineItems = new org.openapis.openapi.models.shared.OrderShipmentLineItemShipment[]{{
                                    add(new OrderShipmentLineItemShipment() {{
                                        lineItemId = "quod";
                                        productId = "nihil";
                                        quantity = 310930L;
                                    }}),
                                    add(new OrderShipmentLineItemShipment() {{
                                        lineItemId = "ipsum";
                                        productId = "ducimus";
                                        quantity = 514625L;
                                    }}),
                                    add(new OrderShipmentLineItemShipment() {{
                                        lineItemId = "rerum";
                                        productId = "deserunt";
                                        quantity = 138436L;
                                    }}),
                                    add(new OrderShipmentLineItemShipment() {{
                                        lineItemId = "ad";
                                        productId = "sequi";
                                        quantity = 106806L;
                                    }}),
                                }};
                                shipmentGroupId = "iusto";
                                shipmentId = "esse";
                                shipmentInfos = new org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[]{{
                                    add(new OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo() {{
                                        carrier = "odio";
                                        shipmentId = "nulla";
                                        trackingId = "impedit";
                                    }}),
                                    add(new OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo() {{
                                        carrier = "cupiditate";
                                        shipmentId = "illo";
                                        trackingId = "exercitationem";
                                    }}),
                                }};
                                trackingId = "laborum";
                            }};
                            updateLineItemShippingDetails = new OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails() {{
                                deliverByDate = "illum";
                                lineItemId = "fugit";
                                productId = "maxime";
                                shipByDate = "dolorum";
                            }};
                            updateShipment = new OrdersCustomBatchRequestEntryUpdateShipment() {{
                                carrier = "repellat";
                                deliveryDate = "nostrum";
                                shipmentId = "illum";
                                status = "quibusdam";
                                trackingId = "commodi";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "consectetur";
                fields = "temporibus";
                key = "optio";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "exercitationem";
                uploadProtocol = "culpa";
            }};            

            ContentOrdersCustombatchResponse res = sdk.orders.contentOrdersCustombatch(req, new ContentOrdersCustombatchSecurity("repudiandae", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersCustomBatchResponse != null) {
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

            ContentOrdersGetRequest req = new ContentOrdersGetRequest("sapiente", "neque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "suscipit";
                alt = AltEnum.PROTO;
                callback = "ducimus";
                fields = "doloremque";
                key = "perferendis";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "corrupti";
                uploadProtocol = "molestiae";
            }};            

            ContentOrdersGetResponse res = sdk.orders.contentOrdersGet(req, new ContentOrdersGetSecurity("quis", "iure") {{
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

            ContentOrdersGetbymerchantorderidRequest req = new ContentOrdersGetbymerchantorderidRequest("ab", "quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sapiente";
                alt = AltEnum.MEDIA;
                callback = "est";
                fields = "iure";
                key = "quisquam";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "nam";
                uploadProtocol = "nemo";
            }};            

            ContentOrdersGetbymerchantorderidResponse res = sdk.orders.contentOrdersGetbymerchantorderid(req, new ContentOrdersGetbymerchantorderidSecurity("enim", "ipsam") {{
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

            ContentOrdersGettestordertemplateRequest req = new ContentOrdersGettestordertemplateRequest("minima", ContentOrdersGettestordertemplateTemplateNameEnum.TEMPLATE2) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corrupti";
                alt = AltEnum.JSON;
                callback = "fugiat";
                country = "El Salvador";
                fields = "doloremque";
                key = "cum";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "porro";
                uploadProtocol = "impedit";
            }};            

            ContentOrdersGettestordertemplateResponse res = sdk.orders.contentOrdersGettestordertemplate(req, new ContentOrdersGettestordertemplateSecurity("nisi", "cumque") {{
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

Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.

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

            ContentOrdersInstorerefundlineitemRequest req = new ContentOrdersInstorerefundlineitemRequest("soluta", "fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                ordersInStoreRefundLineItemRequest = new OrdersInStoreRefundLineItemRequest() {{
                    amountPretax = new Price() {{
                        currency = "nam";
                        value = "enim";
                    }};;
                    amountTax = new Price() {{
                        currency = "maiores";
                        value = "consectetur";
                    }};;
                    lineItemId = "necessitatibus";
                    operationId = "maxime";
                    productId = "cupiditate";
                    quantity = 29080L;
                    reason = "provident";
                    reasonText = "adipisci";
                }};;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "omnis";
                key = "explicabo";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "id";
                uploadProtocol = "possimus";
            }};            

            ContentOrdersInstorerefundlineitemResponse res = sdk.orders.contentOrdersInstorerefundlineitem(req, new ContentOrdersInstorerefundlineitemSecurity("fugit", "ipsam") {{
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

            ContentOrdersListRequest req = new ContentOrdersListRequest("nostrum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatum";
                acknowledged = false;
                alt = AltEnum.JSON;
                callback = "error";
                fields = "nobis";
                key = "tempora";
                maxResults = 452653L;
                oauthToken = "eius";
                orderBy = "expedita";
                pageToken = "aperiam";
                placedDateEnd = "voluptates";
                placedDateStart = "possimus";
                prettyPrint = false;
                quotaUser = "fugit";
                statuses = new org.openapis.openapi.models.operations.ContentOrdersListStatusesEnum[]{{
                    add(ContentOrdersListStatusesEnum.RETURNED),
                }};
                uploadType = "corporis";
                uploadProtocol = "ea";
            }};            

            ContentOrdersListResponse res = sdk.orders.contentOrdersList(req, new ContentOrdersListSecurity("eos", "aliquam") {{
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

## contentOrdersRefund

Deprecated, please use returnRefundLineItem instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersRefundRequest;
import org.openapis.openapi.models.operations.ContentOrdersRefundResponse;
import org.openapis.openapi.models.operations.ContentOrdersRefundSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrdersRefundRequest;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersRefundRequest req = new ContentOrdersRefundRequest("blanditiis", "hic") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersRefundRequest = new OrdersRefundRequest() {{
                    amount = new Price() {{
                        currency = "asperiores";
                        value = "autem";
                    }};;
                    amountPretax = new Price() {{
                        currency = "nesciunt";
                        value = "cupiditate";
                    }};;
                    amountTax = new Price() {{
                        currency = "animi";
                        value = "provident";
                    }};;
                    operationId = "beatae";
                    reason = "ipsa";
                    reasonText = "mollitia";
                }};;
                accessToken = "nam";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "fuga";
                key = "tempore";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "suscipit";
                uploadProtocol = "voluptate";
            }};            

            ContentOrdersRefundResponse res = sdk.orders.contentOrdersRefund(req, new ContentOrdersRefundSecurity("nisi", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersRefundResponse != null) {
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

            ContentOrdersRejectreturnlineitemRequest req = new ContentOrdersRejectreturnlineitemRequest("provident", "laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersRejectReturnLineItemRequest = new OrdersRejectReturnLineItemRequest() {{
                    lineItemId = "ab";
                    operationId = "itaque";
                    productId = "quisquam";
                    quantity = 53529L;
                    reason = "alias";
                    reasonText = "qui";
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "sequi";
                key = "amet";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "praesentium";
                uploadProtocol = "unde";
            }};            

            ContentOrdersRejectreturnlineitemResponse res = sdk.orders.contentOrdersRejectreturnlineitem(req, new ContentOrdersRejectreturnlineitemSecurity("similique", "eligendi") {{
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

## contentOrdersReturnlineitem

Returns a line item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdersReturnlineitemRequest;
import org.openapis.openapi.models.operations.ContentOrdersReturnlineitemResponse;
import org.openapis.openapi.models.operations.ContentOrdersReturnlineitemSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrdersReturnLineItemRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersReturnlineitemRequest req = new ContentOrdersReturnlineitemRequest("tempore", "amet") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersReturnLineItemRequest = new OrdersReturnLineItemRequest() {{
                    lineItemId = "nobis";
                    operationId = "asperiores";
                    productId = "temporibus";
                    quantity = 662857L;
                    reason = "atque";
                    reasonText = "quibusdam";
                }};;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "veniam";
                fields = "aliquam";
                key = "provident";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "doloremque";
                uploadProtocol = "ipsum";
            }};            

            ContentOrdersReturnlineitemResponse res = sdk.orders.contentOrdersReturnlineitem(req, new ContentOrdersReturnlineitemSecurity("alias", "doloremque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersReturnLineItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrdersReturnrefundlineitem

Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.

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

            ContentOrdersReturnrefundlineitemRequest req = new ContentOrdersReturnrefundlineitemRequest("tempora", "perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                ordersReturnRefundLineItemRequest = new OrdersReturnRefundLineItemRequest() {{
                    amountPretax = new Price() {{
                        currency = "atque";
                        value = "officia";
                    }};;
                    amountTax = new Price() {{
                        currency = "ex";
                        value = "architecto";
                    }};;
                    lineItemId = "a";
                    operationId = "laborum";
                    productId = "veritatis";
                    quantity = 801816L;
                    reason = "a";
                    reasonText = "qui";
                }};;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "atque";
                fields = "totam";
                key = "tenetur";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "quod";
                uploadProtocol = "vitae";
            }};            

            ContentOrdersReturnrefundlineitemResponse res = sdk.orders.contentOrdersReturnrefundlineitem(req, new ContentOrdersReturnrefundlineitemSecurity("sapiente", "reiciendis") {{
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

Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.

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

            ContentOrdersSetlineitemmetadataRequest req = new ContentOrdersSetlineitemmetadataRequest("quod", "voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                ordersSetLineItemMetadataRequest = new OrdersSetLineItemMetadataRequest() {{
                    annotations = new org.openapis.openapi.models.shared.OrderMerchantProvidedAnnotation[]{{
                        add(new OrderMerchantProvidedAnnotation() {{
                            key = "maxime";
                            value = "fuga";
                        }}),
                        add(new OrderMerchantProvidedAnnotation() {{
                            key = "ab";
                            value = "ex";
                        }}),
                        add(new OrderMerchantProvidedAnnotation() {{
                            key = "consectetur";
                            value = "maiores";
                        }}),
                        add(new OrderMerchantProvidedAnnotation() {{
                            key = "sed";
                            value = "animi";
                        }}),
                    }};
                    lineItemId = "sequi";
                    operationId = "eligendi";
                    productId = "voluptatum";
                }};;
                accessToken = "perferendis";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "nihil";
                key = "tenetur";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "adipisci";
                uploadProtocol = "non";
            }};            

            ContentOrdersSetlineitemmetadataResponse res = sdk.orders.contentOrdersSetlineitemmetadata(req, new ContentOrdersSetlineitemmetadataSecurity("optio", "illum") {{
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

            ContentOrdersShiplineitemsRequest req = new ContentOrdersShiplineitemsRequest("at", "tenetur") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersShipLineItemsRequest = new OrdersShipLineItemsRequest() {{
                    carrier = "ipsam";
                    lineItems = new org.openapis.openapi.models.shared.OrderShipmentLineItemShipment[]{{
                        add(new OrderShipmentLineItemShipment() {{
                            lineItemId = "laborum";
                            productId = "perspiciatis";
                            quantity = 915647L;
                        }}),
                        add(new OrderShipmentLineItemShipment() {{
                            lineItemId = "eum";
                            productId = "quasi";
                            quantity = 555194L;
                        }}),
                    }};
                    operationId = "odio";
                    shipmentGroupId = "commodi";
                    shipmentId = "porro";
                    shipmentInfos = new org.openapis.openapi.models.shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[]{{
                        add(new OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo() {{
                            carrier = "mollitia";
                            shipmentId = "quidem";
                            trackingId = "explicabo";
                        }}),
                        add(new OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo() {{
                            carrier = "et";
                            shipmentId = "nulla";
                            trackingId = "magni";
                        }}),
                    }};
                    trackingId = "natus";
                }};;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "unde";
                key = "ut";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "doloribus";
                uploadProtocol = "recusandae";
            }};            

            ContentOrdersShiplineitemsResponse res = sdk.orders.contentOrdersShiplineitems(req, new ContentOrdersShiplineitemsSecurity("quisquam", "facere") {{
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

            ContentOrdersUpdatelineitemshippingdetailsRequest req = new ContentOrdersUpdatelineitemshippingdetailsRequest("dignissimos", "iste") {{
                dollarXgafv = XgafvEnum.TWO;
                ordersUpdateLineItemShippingDetailsRequest = new OrdersUpdateLineItemShippingDetailsRequest() {{
                    deliverByDate = "dolor";
                    lineItemId = "sint";
                    operationId = "aperiam";
                    productId = "eaque";
                    shipByDate = "eum";
                }};;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "autem";
                fields = "assumenda";
                key = "explicabo";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "voluptatem";
                uploadProtocol = "alias";
            }};            

            ContentOrdersUpdatelineitemshippingdetailsResponse res = sdk.orders.contentOrdersUpdatelineitemshippingdetails(req, new ContentOrdersUpdatelineitemshippingdetailsSecurity("velit", "ullam") {{
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

            ContentOrdersUpdatemerchantorderidRequest req = new ContentOrdersUpdatemerchantorderidRequest("quis", "velit") {{
                dollarXgafv = XgafvEnum.ONE;
                ordersUpdateMerchantOrderIdRequest = new OrdersUpdateMerchantOrderIdRequest() {{
                    merchantOrderId = "quas";
                    operationId = "maxime";
                }};;
                accessToken = "recusandae";
                alt = AltEnum.PROTO;
                callback = "doloremque";
                fields = "totam";
                key = "iure";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "fugit";
                uploadProtocol = "veritatis";
            }};            

            ContentOrdersUpdatemerchantorderidResponse res = sdk.orders.contentOrdersUpdatemerchantorderid(req, new ContentOrdersUpdatemerchantorderidSecurity("necessitatibus", "iste") {{
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
import org.openapis.openapi.models.shared.OrdersUpdateShipmentRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdersUpdateshipmentRequest req = new ContentOrdersUpdateshipmentRequest("dicta", "ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                ordersUpdateShipmentRequest = new OrdersUpdateShipmentRequest() {{
                    carrier = "cumque";
                    deliveryDate = "quidem";
                    operationId = "non";
                    shipmentId = "beatae";
                    status = "sunt";
                    trackingId = "molestias";
                }};;
                accessToken = "beatae";
                alt = AltEnum.MEDIA;
                callback = "ducimus";
                fields = "libero";
                key = "molestias";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "impedit";
                uploadProtocol = "quos";
            }};            

            ContentOrdersUpdateshipmentResponse res = sdk.orders.contentOrdersUpdateshipment(req, new ContentOrdersUpdateshipmentSecurity("illum", "distinctio") {{
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
