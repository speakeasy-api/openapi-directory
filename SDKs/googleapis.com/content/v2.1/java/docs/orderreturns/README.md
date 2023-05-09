# orderreturns

### Available Operations

* [contentOrderreturnsAcknowledge](#contentorderreturnsacknowledge) - Acks an order return in your Merchant Center account.
* [contentOrderreturnsCreateorderreturn](#contentorderreturnscreateorderreturn) - Create return in your Merchant Center account.
* [contentOrderreturnsGet](#contentorderreturnsget) - Retrieves an order return from your Merchant Center account.
* [contentOrderreturnsLabelsCreate](#contentorderreturnslabelscreate) - Links a return shipping label to a return id. You can only create one return label per return id. Since the label is sent to the buyer, the linked return label cannot be updated or deleted. If you try to create multiple return shipping labels for a single return id, every create request except the first will fail.
* [contentOrderreturnsList](#contentorderreturnslist) - Lists order returns in your Merchant Center account.
* [contentOrderreturnsProcess](#contentorderreturnsprocess) - Processes return in your Merchant Center account.

## contentOrderreturnsAcknowledge

Acks an order return in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrderreturnsAcknowledgeRequest;
import org.openapis.openapi.models.operations.ContentOrderreturnsAcknowledgeResponse;
import org.openapis.openapi.models.operations.ContentOrderreturnsAcknowledgeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrderreturnsAcknowledgeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrderreturnsAcknowledgeRequest req = new ContentOrderreturnsAcknowledgeRequest("consectetur", "cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                orderreturnsAcknowledgeRequest = new OrderreturnsAcknowledgeRequest() {{
                    operationId = "voluptatum";
                }};;
                accessToken = "ducimus";
                alt = AltEnum.JSON;
                callback = "recusandae";
                fields = "tempora";
                key = "blanditiis";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "voluptatum";
                uploadProtocol = "sit";
            }};            

            ContentOrderreturnsAcknowledgeResponse res = sdk.orderreturns.contentOrderreturnsAcknowledge(req, new ContentOrderreturnsAcknowledgeSecurity("rerum", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orderreturnsAcknowledgeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrderreturnsCreateorderreturn

Create return in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrderreturnsCreateorderreturnRequest;
import org.openapis.openapi.models.operations.ContentOrderreturnsCreateorderreturnResponse;
import org.openapis.openapi.models.operations.ContentOrderreturnsCreateorderreturnSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrderreturnsCreateOrderReturnRequest;
import org.openapis.openapi.models.shared.OrderreturnsLineItem;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrderreturnsCreateorderreturnRequest req = new ContentOrderreturnsCreateorderreturnRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                orderreturnsCreateOrderReturnRequest = new OrderreturnsCreateOrderReturnRequest() {{
                    lineItems = new org.openapis.openapi.models.shared.OrderreturnsLineItem[]{{
                        add(new OrderreturnsLineItem() {{
                            lineItemId = "totam";
                            productId = "porro";
                            quantity = 646491L;
                        }}),
                        add(new OrderreturnsLineItem() {{
                            lineItemId = "magni";
                            productId = "nihil";
                            quantity = 374062L;
                        }}),
                        add(new OrderreturnsLineItem() {{
                            lineItemId = "animi";
                            productId = "commodi";
                            quantity = 716L;
                        }}),
                    }};
                    operationId = "fuga";
                    orderId = "aut";
                    returnMethodType = "dolore";
                }};;
                accessToken = "maxime";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "ullam";
                key = "eligendi";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "occaecati";
                uploadProtocol = "unde";
            }};            

            ContentOrderreturnsCreateorderreturnResponse res = sdk.orderreturns.contentOrderreturnsCreateorderreturn(req, new ContentOrderreturnsCreateorderreturnSecurity("illo", "nihil") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orderreturnsCreateOrderReturnResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrderreturnsGet

Retrieves an order return from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrderreturnsGetRequest;
import org.openapis.openapi.models.operations.ContentOrderreturnsGetResponse;
import org.openapis.openapi.models.operations.ContentOrderreturnsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrderreturnsGetRequest req = new ContentOrderreturnsGetRequest("inventore", "libero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "harum";
                key = "facere";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "cumque";
                uploadProtocol = "delectus";
            }};            

            ContentOrderreturnsGetResponse res = sdk.orderreturns.contentOrderreturnsGet(req, new ContentOrderreturnsGetSecurity("labore", "expedita") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.merchantOrderReturn != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrderreturnsLabelsCreate

Links a return shipping label to a return id. You can only create one return label per return id. Since the label is sent to the buyer, the linked return label cannot be updated or deleted. If you try to create multiple return shipping labels for a single return id, every create request except the first will fail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrderreturnsLabelsCreateRequest;
import org.openapis.openapi.models.operations.ContentOrderreturnsLabelsCreateResponse;
import org.openapis.openapi.models.operations.ContentOrderreturnsLabelsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReturnShippingLabel;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrderreturnsLabelsCreateRequest req = new ContentOrderreturnsLabelsCreateRequest("corrupti", "rem") {{
                dollarXgafv = XgafvEnum.TWO;
                returnShippingLabel = new ReturnShippingLabel() {{
                    carrier = "officiis";
                    labelUri = "cum";
                    trackingId = "pariatur";
                }};;
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                fields = "quod";
                key = "minus";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "excepturi";
                uploadProtocol = "occaecati";
            }};            

            ContentOrderreturnsLabelsCreateResponse res = sdk.orderreturns.contentOrderreturnsLabelsCreate(req, new ContentOrderreturnsLabelsCreateSecurity("libero", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.returnShippingLabel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrderreturnsList

Lists order returns in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrderreturnsListOrderByEnum;
import org.openapis.openapi.models.operations.ContentOrderreturnsListRequest;
import org.openapis.openapi.models.operations.ContentOrderreturnsListResponse;
import org.openapis.openapi.models.operations.ContentOrderreturnsListSecurity;
import org.openapis.openapi.models.operations.ContentOrderreturnsListShipmentStatesEnum;
import org.openapis.openapi.models.operations.ContentOrderreturnsListShipmentStatusEnum;
import org.openapis.openapi.models.operations.ContentOrderreturnsListShipmentTypesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrderreturnsListRequest req = new ContentOrderreturnsListRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maxime";
                acknowledged = false;
                alt = AltEnum.JSON;
                callback = "soluta";
                createdEndDate = "fugit";
                createdStartDate = "pariatur";
                fields = "eligendi";
                googleOrderIds = new String[]{{
                    add("veritatis"),
                    add("aut"),
                    add("laudantium"),
                    add("iusto"),
                }};
                key = "dolor";
                maxResults = 917152L;
                oauthToken = "tempora";
                orderBy = ContentOrderreturnsListOrderByEnum.RETURN_CREATION_TIME_DESC;
                pageToken = "rerum";
                prettyPrint = false;
                quotaUser = "doloremque";
                shipmentStates = new org.openapis.openapi.models.operations.ContentOrderreturnsListShipmentStatesEnum[]{{
                    add(ContentOrderreturnsListShipmentStatesEnum.COMPLETED),
                }};
                shipmentStatus = new org.openapis.openapi.models.operations.ContentOrderreturnsListShipmentStatusEnum[]{{
                    add(ContentOrderreturnsListShipmentStatusEnum.IN_PROGRESS),
                    add(ContentOrderreturnsListShipmentStatusEnum.IN_PROGRESS),
                    add(ContentOrderreturnsListShipmentStatusEnum.IN_PROGRESS),
                    add(ContentOrderreturnsListShipmentStatusEnum.IN_PROGRESS),
                }};
                shipmentTrackingNumbers = new String[]{{
                    add("atque"),
                    add("rerum"),
                }};
                shipmentTypes = new org.openapis.openapi.models.operations.ContentOrderreturnsListShipmentTypesEnum[]{{
                    add(ContentOrderreturnsListShipmentTypesEnum.RETURNLESS),
                    add(ContentOrderreturnsListShipmentTypesEnum.RETURNLESS),
                    add(ContentOrderreturnsListShipmentTypesEnum.RETURNLESS),
                }};
                uploadType = "architecto";
                uploadProtocol = "est";
            }};            

            ContentOrderreturnsListResponse res = sdk.orderreturns.contentOrderreturnsList(req, new ContentOrderreturnsListSecurity("enim", "rem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orderreturnsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrderreturnsProcess

Processes return in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrderreturnsProcessRequest;
import org.openapis.openapi.models.operations.ContentOrderreturnsProcessResponse;
import org.openapis.openapi.models.operations.ContentOrderreturnsProcessSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrderreturnsPartialRefund;
import org.openapis.openapi.models.shared.OrderreturnsProcessRequest;
import org.openapis.openapi.models.shared.OrderreturnsRefundOperation;
import org.openapis.openapi.models.shared.OrderreturnsRejectOperation;
import org.openapis.openapi.models.shared.OrderreturnsReturnItem;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrderreturnsProcessRequest req = new ContentOrderreturnsProcessRequest("magni", "quae") {{
                dollarXgafv = XgafvEnum.TWO;
                orderreturnsProcessRequest = new OrderreturnsProcessRequest() {{
                    fullChargeReturnShippingCost = false;
                    operationId = "placeat";
                    refundShippingFee = new OrderreturnsRefundOperation() {{
                        fullRefund = false;
                        partialRefund = new OrderreturnsPartialRefund() {{
                            priceAmount = new Price() {{
                                currency = "enim";
                                value = "labore";
                            }};;
                            taxAmount = new Price() {{
                                currency = "sapiente";
                                value = "saepe";
                            }};;
                        }};;
                        paymentType = "delectus";
                        reasonText = "officia";
                        returnRefundReason = "natus";
                    }};;
                    returnItems = new org.openapis.openapi.models.shared.OrderreturnsReturnItem[]{{
                        add(new OrderreturnsReturnItem() {{
                            refund = new OrderreturnsRefundOperation() {{
                                fullRefund = false;
                                partialRefund = new OrderreturnsPartialRefund() {{
                                    priceAmount = new Price() {{
                                        currency = "natus";
                                        value = "quaerat";
                                    }};
                                    taxAmount = new Price() {{
                                        currency = "doloribus";
                                        value = "quia";
                                    }};
                                }};
                                paymentType = "officiis";
                                reasonText = "mollitia";
                                returnRefundReason = "cumque";
                            }};
                            reject = new OrderreturnsRejectOperation() {{
                                reason = "quis";
                                reasonText = "enim";
                            }};
                            returnItemId = "eum";
                        }}),
                        add(new OrderreturnsReturnItem() {{
                            refund = new OrderreturnsRefundOperation() {{
                                fullRefund = false;
                                partialRefund = new OrderreturnsPartialRefund() {{
                                    priceAmount = new Price() {{
                                        currency = "nemo";
                                        value = "illum";
                                    }};
                                    taxAmount = new Price() {{
                                        currency = "nesciunt";
                                        value = "sit";
                                    }};
                                }};
                                paymentType = "odio";
                                reasonText = "minus";
                                returnRefundReason = "asperiores";
                            }};
                            reject = new OrderreturnsRejectOperation() {{
                                reason = "recusandae";
                                reasonText = "voluptates";
                            }};
                            returnItemId = "praesentium";
                        }}),
                        add(new OrderreturnsReturnItem() {{
                            refund = new OrderreturnsRefundOperation() {{
                                fullRefund = false;
                                partialRefund = new OrderreturnsPartialRefund() {{
                                    priceAmount = new Price() {{
                                        currency = "dicta";
                                        value = "fugit";
                                    }};
                                    taxAmount = new Price() {{
                                        currency = "sit";
                                        value = "aliquid";
                                    }};
                                }};
                                paymentType = "necessitatibus";
                                reasonText = "sed";
                                returnRefundReason = "deleniti";
                            }};
                            reject = new OrderreturnsRejectOperation() {{
                                reason = "sunt";
                                reasonText = "nesciunt";
                            }};
                            returnItemId = "delectus";
                        }}),
                        add(new OrderreturnsReturnItem() {{
                            refund = new OrderreturnsRefundOperation() {{
                                fullRefund = false;
                                partialRefund = new OrderreturnsPartialRefund() {{
                                    priceAmount = new Price() {{
                                        currency = "laborum";
                                        value = "aliquam";
                                    }};
                                    taxAmount = new Price() {{
                                        currency = "deserunt";
                                        value = "modi";
                                    }};
                                }};
                                paymentType = "sunt";
                                reasonText = "impedit";
                                returnRefundReason = "eius";
                            }};
                            reject = new OrderreturnsRejectOperation() {{
                                reason = "voluptatum";
                                reasonText = "ipsa";
                            }};
                            returnItemId = "at";
                        }}),
                    }};
                }};;
                accessToken = "dolorem";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "inventore";
                key = "sequi";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "hic";
                uploadProtocol = "eaque";
            }};            

            ContentOrderreturnsProcessResponse res = sdk.orderreturns.contentOrderreturnsProcess(req, new ContentOrderreturnsProcessSecurity("dolorem", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orderreturnsProcessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
