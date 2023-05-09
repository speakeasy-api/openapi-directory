# orders

### Available Operations

* [batchRetrieveOrders](#batchretrieveorders) - BatchRetrieveOrders
* [calculateOrder](#calculateorder) - CalculateOrder
* [createOrder](#createorder) - CreateOrder
* [payOrder](#payorder) - PayOrder
* [searchOrders](#searchorders) - SearchOrders
* [getV2OrdersOrderId](#getv2ordersorderid) - RetrieveOrder
* [putV2OrdersOrderId](#putv2ordersorderid) - UpdateOrder

## batchRetrieveOrders

Retrieves a set of [orders](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) by their IDs.

If a given order ID does not exist, the ID is ignored instead of generating an error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchRetrieveOrdersResponse;
import org.openapis.openapi.models.operations.BatchRetrieveOrdersSecurity;
import org.openapis.openapi.models.shared.BatchRetrieveOrdersRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchRetrieveOrdersRequest req = new BatchRetrieveOrdersRequest(                new String[]{{
                                add("consectetur"),
                            }}) {{
                locationId = "ullam";
            }};            

            BatchRetrieveOrdersResponse res = sdk.orders.batchRetrieveOrders(req, new BatchRetrieveOrdersSecurity("ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchRetrieveOrdersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calculateOrder

Enables applications to preview order pricing without creating an order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalculateOrderResponse;
import org.openapis.openapi.models.operations.CalculateOrderSecurity;
import org.openapis.openapi.models.shared.AdditionalRecipient;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.CalculateOrderRequest;
import org.openapis.openapi.models.shared.Card;
import org.openapis.openapi.models.shared.MeasurementUnit;
import org.openapis.openapi.models.shared.MeasurementUnitCustom;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.Order;
import org.openapis.openapi.models.shared.OrderFulfillment;
import org.openapis.openapi.models.shared.OrderFulfillmentPickupDetails;
import org.openapis.openapi.models.shared.OrderFulfillmentPickupDetailsCurbsidePickupDetails;
import org.openapis.openapi.models.shared.OrderFulfillmentRecipient;
import org.openapis.openapi.models.shared.OrderFulfillmentShipmentDetails;
import org.openapis.openapi.models.shared.OrderLineItem;
import org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount;
import org.openapis.openapi.models.shared.OrderLineItemAppliedTax;
import org.openapis.openapi.models.shared.OrderLineItemDiscount;
import org.openapis.openapi.models.shared.OrderLineItemModifier;
import org.openapis.openapi.models.shared.OrderLineItemPricingBlocklists;
import org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount;
import org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax;
import org.openapis.openapi.models.shared.OrderLineItemTax;
import org.openapis.openapi.models.shared.OrderMoneyAmounts;
import org.openapis.openapi.models.shared.OrderPricingOptions;
import org.openapis.openapi.models.shared.OrderQuantityUnit;
import org.openapis.openapi.models.shared.OrderReturn;
import org.openapis.openapi.models.shared.OrderReturnDiscount;
import org.openapis.openapi.models.shared.OrderReturnLineItem;
import org.openapis.openapi.models.shared.OrderReturnLineItemModifier;
import org.openapis.openapi.models.shared.OrderReturnServiceCharge;
import org.openapis.openapi.models.shared.OrderReturnTax;
import org.openapis.openapi.models.shared.OrderReward;
import org.openapis.openapi.models.shared.OrderRoundingAdjustment;
import org.openapis.openapi.models.shared.OrderServiceCharge;
import org.openapis.openapi.models.shared.OrderSource;
import org.openapis.openapi.models.shared.Refund;
import org.openapis.openapi.models.shared.Tender;
import org.openapis.openapi.models.shared.TenderCardDetails;
import org.openapis.openapi.models.shared.TenderCashDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CalculateOrderRequest req = new CalculateOrderRequest(                new Order("consectetur") {{
                                closedAt = "porro";
                                createdAt = "optio";
                                customerId = "earum";
                                discounts = new org.openapis.openapi.models.shared.OrderLineItemDiscount[]{{
                                    add(new OrderLineItemDiscount() {{
                                        amountMoney = new Money() {{
                                            amount = 787210L;
                                            currency = "fugit";
                                        }};
                                        appliedMoney = new Money() {{
                                            amount = 7766L;
                                            currency = "incidunt";
                                        }};
                                        catalogObjectId = "placeat";
                                        catalogVersion = 288027L;
                                        metadata = new java.util.HashMap<String, String>() {{
                                            put("illum", "quod");
                                            put("minus", "sint");
                                            put("occaecati", "voluptatem");
                                        }};
                                        name = "Ms. Jody Hamill";
                                        percentage = "cum";
                                        pricingRuleId = "atque";
                                        rewardIds = new String[]{{
                                            add("labore"),
                                            add("praesentium"),
                                        }};
                                        scope = "optio";
                                        type = "officiis";
                                        uid = "voluptatibus";
                                    }}),
                                }};
                                fulfillments = new org.openapis.openapi.models.shared.OrderFulfillment[]{{
                                    add(new OrderFulfillment() {{
                                        metadata = new java.util.HashMap<String, String>() {{
                                            put("deleniti", "a");
                                            put("ab", "voluptates");
                                        }};
                                        pickupDetails = new OrderFulfillmentPickupDetails() {{
                                            acceptedAt = "eos";
                                            autoCompleteDuration = "facere";
                                            cancelReason = "nesciunt";
                                            canceledAt = "libero";
                                            curbsidePickupDetails = new OrderFulfillmentPickupDetailsCurbsidePickupDetails() {{
                                                buyerArrivedAt = "error";
                                                curbsideDetails = "perferendis";
                                            }};
                                            expiredAt = "beatae";
                                            expiresAt = "saepe";
                                            isCurbsidePickup = false;
                                            note = "voluptatem";
                                            pickedUpAt = "sint";
                                            pickupAt = "corporis";
                                            pickupWindowDuration = "explicabo";
                                            placedAt = "distinctio";
                                            prepTimeDuration = "harum";
                                            readyAt = "quidem";
                                            recipient = new OrderFulfillmentRecipient() {{
                                                address = new Address() {{
                                                    addressLine1 = "tempora";
                                                    addressLine2 = "minus";
                                                    addressLine3 = "harum";
                                                    administrativeDistrictLevel1 = "quidem";
                                                    administrativeDistrictLevel2 = "inventore";
                                                    administrativeDistrictLevel3 = "iste";
                                                    country = "Virgin Islands, British";
                                                    firstName = "Jeanie";
                                                    lastName = "Bergstrom";
                                                    locality = "neque";
                                                    organization = "pariatur";
                                                    postalCode = "36213-5701";
                                                    sublocality = "corrupti";
                                                    sublocality2 = "in";
                                                    sublocality3 = "quia";
                                                }};
                                                customerId = "odio";
                                                displayName = "dicta";
                                                emailAddress = "eveniet";
                                                phoneNumber = "vitae";
                                            }};
                                            rejectedAt = "quos";
                                            scheduleType = "eveniet";
                                        }};
                                        shipmentDetails = new OrderFulfillmentShipmentDetails() {{
                                            cancelReason = "officia";
                                            canceledAt = "perspiciatis";
                                            carrier = "debitis";
                                            expectedShippedAt = "non";
                                            failedAt = "veniam";
                                            failureReason = "illo";
                                            inProgressAt = "illo";
                                            packagedAt = "deleniti";
                                            placedAt = "quisquam";
                                            recipient = new OrderFulfillmentRecipient() {{
                                                address = new Address() {{
                                                    addressLine1 = "fugit";
                                                    addressLine2 = "optio";
                                                    addressLine3 = "quo";
                                                    administrativeDistrictLevel1 = "minima";
                                                    administrativeDistrictLevel2 = "ducimus";
                                                    administrativeDistrictLevel3 = "tenetur";
                                                    country = "Reunion";
                                                    firstName = "Robbie";
                                                    lastName = "Hyatt";
                                                    locality = "alias";
                                                    organization = "rerum";
                                                    postalCode = "64598";
                                                    sublocality = "eos";
                                                    sublocality2 = "cupiditate";
                                                    sublocality3 = "est";
                                                }};
                                                customerId = "occaecati";
                                                displayName = "pariatur";
                                                emailAddress = "quaerat";
                                                phoneNumber = "itaque";
                                            }};
                                            shippedAt = "itaque";
                                            shippingNote = "animi";
                                            shippingType = "totam";
                                            trackingNumber = "ullam";
                                            trackingUrl = "nisi";
                                        }};
                                        state = "nemo";
                                        type = "atque";
                                        uid = "optio";
                                    }}),
                                    add(new OrderFulfillment() {{
                                        metadata = new java.util.HashMap<String, String>() {{
                                            put("at", "modi");
                                        }};
                                        pickupDetails = new OrderFulfillmentPickupDetails() {{
                                            acceptedAt = "delectus";
                                            autoCompleteDuration = "aliquam";
                                            cancelReason = "optio";
                                            canceledAt = "laudantium";
                                            curbsidePickupDetails = new OrderFulfillmentPickupDetailsCurbsidePickupDetails() {{
                                                buyerArrivedAt = "quas";
                                                curbsideDetails = "quidem";
                                            }};
                                            expiredAt = "voluptates";
                                            expiresAt = "labore";
                                            isCurbsidePickup = false;
                                            note = "hic";
                                            pickedUpAt = "aspernatur";
                                            pickupAt = "nihil";
                                            pickupWindowDuration = "quas";
                                            placedAt = "tenetur";
                                            prepTimeDuration = "fugiat";
                                            readyAt = "unde";
                                            recipient = new OrderFulfillmentRecipient() {{
                                                address = new Address() {{
                                                    addressLine1 = "autem";
                                                    addressLine2 = "ea";
                                                    addressLine3 = "molestiae";
                                                    administrativeDistrictLevel1 = "accusamus";
                                                    administrativeDistrictLevel2 = "labore";
                                                    administrativeDistrictLevel3 = "autem";
                                                    country = "Slovakia (Slovak Republic)";
                                                    firstName = "Ford";
                                                    lastName = "Cartwright";
                                                    locality = "possimus";
                                                    organization = "dolores";
                                                    postalCode = "96635-8799";
                                                    sublocality = "sed";
                                                    sublocality2 = "ratione";
                                                    sublocality3 = "quaerat";
                                                }};
                                                customerId = "minus";
                                                displayName = "natus";
                                                emailAddress = "nostrum";
                                                phoneNumber = "veniam";
                                            }};
                                            rejectedAt = "tempore";
                                            scheduleType = "natus";
                                        }};
                                        shipmentDetails = new OrderFulfillmentShipmentDetails() {{
                                            cancelReason = "facilis";
                                            canceledAt = "assumenda";
                                            carrier = "repellat";
                                            expectedShippedAt = "odit";
                                            failedAt = "vitae";
                                            failureReason = "error";
                                            inProgressAt = "alias";
                                            packagedAt = "id";
                                            placedAt = "nobis";
                                            recipient = new OrderFulfillmentRecipient() {{
                                                address = new Address() {{
                                                    addressLine1 = "vero";
                                                    addressLine2 = "excepturi";
                                                    addressLine3 = "expedita";
                                                    administrativeDistrictLevel1 = "harum";
                                                    administrativeDistrictLevel2 = "quisquam";
                                                    administrativeDistrictLevel3 = "eligendi";
                                                    country = "Central African Republic";
                                                    firstName = "Jeremie";
                                                    lastName = "Cole";
                                                    locality = "ullam";
                                                    organization = "saepe";
                                                    postalCode = "13367-8015";
                                                    sublocality = "consequatur";
                                                    sublocality2 = "corrupti";
                                                    sublocality3 = "numquam";
                                                }};
                                                customerId = "alias";
                                                displayName = "quod";
                                                emailAddress = "nisi";
                                                phoneNumber = "excepturi";
                                            }};
                                            shippedAt = "eveniet";
                                            shippingNote = "tenetur";
                                            shippingType = "vel";
                                            trackingNumber = "corrupti";
                                            trackingUrl = "voluptates";
                                        }};
                                        state = "modi";
                                        type = "enim";
                                        uid = "cumque";
                                    }}),
                                    add(new OrderFulfillment() {{
                                        metadata = new java.util.HashMap<String, String>() {{
                                            put("animi", "quibusdam");
                                            put("possimus", "maiores");
                                            put("est", "optio");
                                        }};
                                        pickupDetails = new OrderFulfillmentPickupDetails() {{
                                            acceptedAt = "voluptate";
                                            autoCompleteDuration = "nostrum";
                                            cancelReason = "incidunt";
                                            canceledAt = "enim";
                                            curbsidePickupDetails = new OrderFulfillmentPickupDetailsCurbsidePickupDetails() {{
                                                buyerArrivedAt = "ipsa";
                                                curbsideDetails = "ipsa";
                                            }};
                                            expiredAt = "quaerat";
                                            expiresAt = "nesciunt";
                                            isCurbsidePickup = false;
                                            note = "aperiam";
                                            pickedUpAt = "optio";
                                            pickupAt = "eum";
                                            pickupWindowDuration = "commodi";
                                            placedAt = "amet";
                                            prepTimeDuration = "quia";
                                            readyAt = "facilis";
                                            recipient = new OrderFulfillmentRecipient() {{
                                                address = new Address() {{
                                                    addressLine1 = "magnam";
                                                    addressLine2 = "dolor";
                                                    addressLine3 = "provident";
                                                    administrativeDistrictLevel1 = "inventore";
                                                    administrativeDistrictLevel2 = "sapiente";
                                                    administrativeDistrictLevel3 = "temporibus";
                                                    country = "Vanuatu";
                                                    firstName = "Andy";
                                                    lastName = "Bruen";
                                                    locality = "nobis";
                                                    organization = "adipisci";
                                                    postalCode = "51959-4774";
                                                    sublocality = "error";
                                                    sublocality2 = "at";
                                                    sublocality3 = "incidunt";
                                                }};
                                                customerId = "autem";
                                                displayName = "alias";
                                                emailAddress = "est";
                                                phoneNumber = "iusto";
                                            }};
                                            rejectedAt = "dignissimos";
                                            scheduleType = "debitis";
                                        }};
                                        shipmentDetails = new OrderFulfillmentShipmentDetails() {{
                                            cancelReason = "quo";
                                            canceledAt = "saepe";
                                            carrier = "tempore";
                                            expectedShippedAt = "sunt";
                                            failedAt = "nisi";
                                            failureReason = "nulla";
                                            inProgressAt = "architecto";
                                            packagedAt = "accusantium";
                                            placedAt = "a";
                                            recipient = new OrderFulfillmentRecipient() {{
                                                address = new Address() {{
                                                    addressLine1 = "et";
                                                    addressLine2 = "repudiandae";
                                                    addressLine3 = "delectus";
                                                    administrativeDistrictLevel1 = "qui";
                                                    administrativeDistrictLevel2 = "laboriosam";
                                                    administrativeDistrictLevel3 = "neque";
                                                    country = "Bangladesh";
                                                    firstName = "Parker";
                                                    lastName = "Kovacek";
                                                    locality = "quisquam";
                                                    organization = "aperiam";
                                                    postalCode = "09542-9683";
                                                    sublocality = "eligendi";
                                                    sublocality2 = "aspernatur";
                                                    sublocality3 = "nemo";
                                                }};
                                                customerId = "doloribus";
                                                displayName = "illum";
                                                emailAddress = "non";
                                                phoneNumber = "repudiandae";
                                            }};
                                            shippedAt = "quae";
                                            shippingNote = "tempore";
                                            shippingType = "incidunt";
                                            trackingNumber = "deserunt";
                                            trackingUrl = "non";
                                        }};
                                        state = "officia";
                                        type = "magnam";
                                        uid = "quia";
                                    }}),
                                }};
                                id = "53c30257-11f4-42c7-a7dc-548be09e41a7";
                                lineItems = new org.openapis.openapi.models.shared.OrderLineItem[]{{
                                    add(new OrderLineItem("voluptate") {{
                                        appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                            add(new OrderLineItemAppliedDiscount("et") {{
                                                appliedMoney = new Money() {{
                                                    amount = 81673L;
                                                    currency = "ipsam";
                                                }};
                                                discountUid = "impedit";
                                                uid = "officia";
                                            }}),
                                        }};
                                        appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                            add(new OrderLineItemAppliedTax("provident") {{
                                                appliedMoney = new Money() {{
                                                    amount = 628558L;
                                                    currency = "labore";
                                                }};
                                                taxUid = "harum";
                                                uid = "dolorum";
                                            }}),
                                        }};
                                        basePriceMoney = new Money() {{
                                            amount = 844545L;
                                            currency = "ipsam";
                                        }};
                                        catalogObjectId = "provident";
                                        catalogVersion = 605748L;
                                        grossSalesMoney = new Money() {{
                                            amount = 522985L;
                                            currency = "quos";
                                        }};
                                        itemType = "beatae";
                                        metadata = new java.util.HashMap<String, String>() {{
                                            put("fugit", "placeat");
                                            put("sapiente", "assumenda");
                                            put("alias", "eligendi");
                                        }};
                                        modifiers = new org.openapis.openapi.models.shared.OrderLineItemModifier[]{{
                                            add(new OrderLineItemModifier() {{
                                                basePriceMoney = new Money() {{
                                                    amount = 482297L;
                                                    currency = "eligendi";
                                                }};
                                                catalogObjectId = "ullam";
                                                catalogVersion = 209963L;
                                                name = "Claude Terry";
                                                totalPriceMoney = new Money() {{
                                                    amount = 260397L;
                                                    currency = "accusamus";
                                                }};
                                                uid = "vero";
                                            }}),
                                            add(new OrderLineItemModifier() {{
                                                basePriceMoney = new Money() {{
                                                    amount = 395260L;
                                                    currency = "recusandae";
                                                }};
                                                catalogObjectId = "deleniti";
                                                catalogVersion = 749337L;
                                                name = "William Raynor";
                                                totalPriceMoney = new Money() {{
                                                    amount = 232112L;
                                                    currency = "molestias";
                                                }};
                                                uid = "modi";
                                            }}),
                                        }};
                                        name = "Shawn Fahey";
                                        note = "in";
                                        pricingBlocklists = new OrderLineItemPricingBlocklists() {{
                                            blockedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount[]{{
                                                add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                    discountCatalogObjectId = "sequi";
                                                    discountUid = "maiores";
                                                    uid = "itaque";
                                                }}),
                                            }};
                                            blockedTaxes = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax[]{{
                                                add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                    taxCatalogObjectId = "adipisci";
                                                    taxUid = "sunt";
                                                    uid = "quo";
                                                }}),
                                                add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                    taxCatalogObjectId = "veniam";
                                                    taxUid = "sit";
                                                    uid = "deleniti";
                                                }}),
                                                add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                    taxCatalogObjectId = "qui";
                                                    taxUid = "dolore";
                                                    uid = "possimus";
                                                }}),
                                                add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                    taxCatalogObjectId = "dicta";
                                                    taxUid = "deleniti";
                                                    uid = "perspiciatis";
                                                }}),
                                            }};
                                        }};
                                        quantity = "deserunt";
                                        quantityUnit = new OrderQuantityUnit() {{
                                            catalogVersion = 223636L;
                                            measurementUnit = new MeasurementUnit() {{
                                                areaUnit = "eum";
                                                customUnit = new MeasurementUnitCustom("in", "repudiandae") {{
                                                    abbreviation = "culpa";
                                                    name = "Opal Cassin";
                                                }};
                                                genericUnit = "rerum";
                                                lengthUnit = "esse";
                                                timeUnit = "accusantium";
                                                type = "nihil";
                                                volumeUnit = "similique";
                                                weightUnit = "est";
                                            }};
                                            precision = 434552L;
                                        }};
                                        totalDiscountMoney = new Money() {{
                                            amount = 14126L;
                                            currency = "placeat";
                                        }};
                                        totalMoney = new Money() {{
                                            amount = 532694L;
                                            currency = "doloribus";
                                        }};
                                        totalTaxMoney = new Money() {{
                                            amount = 885336L;
                                            currency = "dolore";
                                        }};
                                        uid = "commodi";
                                        variationName = "debitis";
                                        variationTotalPriceMoney = new Money() {{
                                            amount = 412604L;
                                            currency = "beatae";
                                        }};
                                    }}),
                                    add(new OrderLineItem("fugiat") {{
                                        appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                            add(new OrderLineItemAppliedDiscount("nobis") {{
                                                appliedMoney = new Money() {{
                                                    amount = 855102L;
                                                    currency = "quidem";
                                                }};
                                                discountUid = "iste";
                                                uid = "pariatur";
                                            }}),
                                            add(new OrderLineItemAppliedDiscount("voluptatibus") {{
                                                appliedMoney = new Money() {{
                                                    amount = 221213L;
                                                    currency = "distinctio";
                                                }};
                                                discountUid = "dignissimos";
                                                uid = "eaque";
                                            }}),
                                        }};
                                        appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                            add(new OrderLineItemAppliedTax("ducimus") {{
                                                appliedMoney = new Money() {{
                                                    amount = 737275L;
                                                    currency = "facilis";
                                                }};
                                                taxUid = "nisi";
                                                uid = "occaecati";
                                            }}),
                                            add(new OrderLineItemAppliedTax("nihil") {{
                                                appliedMoney = new Money() {{
                                                    amount = 45176L;
                                                    currency = "repudiandae";
                                                }};
                                                taxUid = "repudiandae";
                                                uid = "odio";
                                            }}),
                                            add(new OrderLineItemAppliedTax("alias") {{
                                                appliedMoney = new Money() {{
                                                    amount = 58086L;
                                                    currency = "eveniet";
                                                }};
                                                taxUid = "neque";
                                                uid = "autem";
                                            }}),
                                            add(new OrderLineItemAppliedTax("esse") {{
                                                appliedMoney = new Money() {{
                                                    amount = 577305L;
                                                    currency = "iusto";
                                                }};
                                                taxUid = "debitis";
                                                uid = "voluptatibus";
                                            }}),
                                        }};
                                        basePriceMoney = new Money() {{
                                            amount = 802472L;
                                            currency = "eos";
                                        }};
                                        catalogObjectId = "doloremque";
                                        catalogVersion = 425065L;
                                        grossSalesMoney = new Money() {{
                                            amount = 930866L;
                                            currency = "suscipit";
                                        }};
                                        itemType = "vitae";
                                        metadata = new java.util.HashMap<String, String>() {{
                                            put("sit", "quibusdam");
                                            put("dolorem", "aut");
                                            put("blanditiis", "ducimus");
                                        }};
                                        modifiers = new org.openapis.openapi.models.shared.OrderLineItemModifier[]{{
                                            add(new OrderLineItemModifier() {{
                                                basePriceMoney = new Money() {{
                                                    amount = 267267L;
                                                    currency = "porro";
                                                }};
                                                catalogObjectId = "consequuntur";
                                                catalogVersion = 17481L;
                                                name = "Manuel Smith";
                                                totalPriceMoney = new Money() {{
                                                    amount = 410574L;
                                                    currency = "sequi";
                                                }};
                                                uid = "esse";
                                            }}),
                                        }};
                                        name = "Ernesto Lebsack";
                                        note = "adipisci";
                                        pricingBlocklists = new OrderLineItemPricingBlocklists() {{
                                            blockedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount[]{{
                                                add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                    discountCatalogObjectId = "repudiandae";
                                                    discountUid = "autem";
                                                    uid = "nostrum";
                                                }}),
                                                add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                    discountCatalogObjectId = "ad";
                                                    discountUid = "molestiae";
                                                    uid = "ut";
                                                }}),
                                                add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                    discountCatalogObjectId = "possimus";
                                                    discountUid = "harum";
                                                    uid = "culpa";
                                                }}),
                                                add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                    discountCatalogObjectId = "reiciendis";
                                                    discountUid = "natus";
                                                    uid = "labore";
                                                }}),
                                            }};
                                            blockedTaxes = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax[]{{
                                                add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                    taxCatalogObjectId = "quam";
                                                    taxUid = "placeat";
                                                    uid = "sint";
                                                }}),
                                                add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                    taxCatalogObjectId = "rem";
                                                    taxUid = "a";
                                                    uid = "illo";
                                                }}),
                                                add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                    taxCatalogObjectId = "velit";
                                                    taxUid = "est";
                                                    uid = "delectus";
                                                }}),
                                            }};
                                        }};
                                        quantity = "magni";
                                        quantityUnit = new OrderQuantityUnit() {{
                                            catalogVersion = 524026L;
                                            measurementUnit = new MeasurementUnit() {{
                                                areaUnit = "assumenda";
                                                customUnit = new MeasurementUnitCustom("voluptatibus", "eius") {{
                                                    abbreviation = "libero";
                                                    name = "Johnnie Will";
                                                }};
                                                genericUnit = "voluptatibus";
                                                lengthUnit = "neque";
                                                timeUnit = "pariatur";
                                                type = "vero";
                                                volumeUnit = "quibusdam";
                                                weightUnit = "amet";
                                            }};
                                            precision = 326264L;
                                        }};
                                        totalDiscountMoney = new Money() {{
                                            amount = 411861L;
                                            currency = "fugiat";
                                        }};
                                        totalMoney = new Money() {{
                                            amount = 460318L;
                                            currency = "officiis";
                                        }};
                                        totalTaxMoney = new Money() {{
                                            amount = 124368L;
                                            currency = "modi";
                                        }};
                                        uid = "tempore";
                                        variationName = "dolores";
                                        variationTotalPriceMoney = new Money() {{
                                            amount = 107671L;
                                            currency = "eligendi";
                                        }};
                                    }}),
                                    add(new OrderLineItem("laboriosam") {{
                                        appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                            add(new OrderLineItemAppliedDiscount("assumenda") {{
                                                appliedMoney = new Money() {{
                                                    amount = 531763L;
                                                    currency = "beatae";
                                                }};
                                                discountUid = "natus";
                                                uid = "aliquid";
                                            }}),
                                            add(new OrderLineItemAppliedDiscount("autem") {{
                                                appliedMoney = new Money() {{
                                                    amount = 332000L;
                                                    currency = "quis";
                                                }};
                                                discountUid = "id";
                                                uid = "delectus";
                                            }}),
                                            add(new OrderLineItemAppliedDiscount("labore") {{
                                                appliedMoney = new Money() {{
                                                    amount = 611802L;
                                                    currency = "mollitia";
                                                }};
                                                discountUid = "sunt";
                                                uid = "quod";
                                            }}),
                                        }};
                                        appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                            add(new OrderLineItemAppliedTax("nesciunt") {{
                                                appliedMoney = new Money() {{
                                                    amount = 496261L;
                                                    currency = "natus";
                                                }};
                                                taxUid = "fuga";
                                                uid = "saepe";
                                            }}),
                                            add(new OrderLineItemAppliedTax("eligendi") {{
                                                appliedMoney = new Money() {{
                                                    amount = 247782L;
                                                    currency = "vel";
                                                }};
                                                taxUid = "praesentium";
                                                uid = "beatae";
                                            }}),
                                            add(new OrderLineItemAppliedTax("omnis") {{
                                                appliedMoney = new Money() {{
                                                    amount = 180544L;
                                                    currency = "dolor";
                                                }};
                                                taxUid = "eligendi";
                                                uid = "dolorem";
                                            }}),
                                        }};
                                        basePriceMoney = new Money() {{
                                            amount = 684273L;
                                            currency = "voluptate";
                                        }};
                                        catalogObjectId = "porro";
                                        catalogVersion = 7135L;
                                        grossSalesMoney = new Money() {{
                                            amount = 886365L;
                                            currency = "ab";
                                        }};
                                        itemType = "in";
                                        metadata = new java.util.HashMap<String, String>() {{
                                            put("distinctio", "quasi");
                                            put("dolores", "impedit");
                                            put("enim", "nam");
                                            put("culpa", "laudantium");
                                        }};
                                        modifiers = new org.openapis.openapi.models.shared.OrderLineItemModifier[]{{
                                            add(new OrderLineItemModifier() {{
                                                basePriceMoney = new Money() {{
                                                    amount = 358882L;
                                                    currency = "a";
                                                }};
                                                catalogObjectId = "necessitatibus";
                                                catalogVersion = 127857L;
                                                name = "Roxanne Steuber";
                                                totalPriceMoney = new Money() {{
                                                    amount = 732906L;
                                                    currency = "est";
                                                }};
                                                uid = "ex";
                                            }}),
                                        }};
                                        name = "Dominic Zieme";
                                        note = "perspiciatis";
                                        pricingBlocklists = new OrderLineItemPricingBlocklists() {{
                                            blockedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount[]{{
                                                add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                    discountCatalogObjectId = "consequuntur";
                                                    discountUid = "fuga";
                                                    uid = "a";
                                                }}),
                                            }};
                                            blockedTaxes = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax[]{{
                                                add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                    taxCatalogObjectId = "voluptatum";
                                                    taxUid = "sunt";
                                                    uid = "adipisci";
                                                }}),
                                                add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                    taxCatalogObjectId = "illum";
                                                    taxUid = "ea";
                                                    uid = "veniam";
                                                }}),
                                            }};
                                        }};
                                        quantity = "nam";
                                        quantityUnit = new OrderQuantityUnit() {{
                                            catalogVersion = 964452L;
                                            measurementUnit = new MeasurementUnit() {{
                                                areaUnit = "earum";
                                                customUnit = new MeasurementUnitCustom("ea", "provident") {{
                                                    abbreviation = "placeat";
                                                    name = "Forrest Connelly";
                                                }};
                                                genericUnit = "inventore";
                                                lengthUnit = "ea";
                                                timeUnit = "repellat";
                                                type = "quam";
                                                volumeUnit = "delectus";
                                                weightUnit = "minus";
                                            }};
                                            precision = 467701L;
                                        }};
                                        totalDiscountMoney = new Money() {{
                                            amount = 844775L;
                                            currency = "assumenda";
                                        }};
                                        totalMoney = new Money() {{
                                            amount = 657897L;
                                            currency = "molestiae";
                                        }};
                                        totalTaxMoney = new Money() {{
                                            amount = 58461L;
                                            currency = "recusandae";
                                        }};
                                        uid = "placeat";
                                        variationName = "aliquid";
                                        variationTotalPriceMoney = new Money() {{
                                            amount = 25744L;
                                            currency = "vero";
                                        }};
                                    }}),
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("reprehenderit", "nostrum");
                                }};
                                netAmounts = new OrderMoneyAmounts() {{
                                    discountMoney = new Money() {{
                                        amount = 506107L;
                                        currency = "natus";
                                    }};;
                                    serviceChargeMoney = new Money() {{
                                        amount = 255953L;
                                        currency = "fugiat";
                                    }};;
                                    taxMoney = new Money() {{
                                        amount = 419066L;
                                        currency = "et";
                                    }};;
                                    tipMoney = new Money() {{
                                        amount = 787299L;
                                        currency = "illo";
                                    }};;
                                    totalMoney = new Money() {{
                                        amount = 271266L;
                                        currency = "quisquam";
                                    }};;
                                }};;
                                pricingOptions = new OrderPricingOptions() {{
                                    autoApplyDiscounts = false;
                                    autoApplyTaxes = false;
                                }};;
                                referenceId = "facere";
                                refunds = new org.openapis.openapi.models.shared.Refund[]{{
                                    add(new Refund(                new Money() {{
                                                        amount = 831959L;
                                                        currency = "necessitatibus";
                                                    }};, "unde", "voluptates", "in", "odit", "iste", "eligendi") {{
                                        additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                            add(new AdditionalRecipient(                new Money() {{
                                                                amount = 470400L;
                                                                currency = "nobis";
                                                            }};, "eaque") {{
                                                amountMoney = new Money() {{
                                                    amount = 131924L;
                                                    currency = "odit";
                                                }};
                                                description = "molestiae";
                                                locationId = "recusandae";
                                                receivableId = "neque";
                                            }}),
                                        }};
                                        amountMoney = new Money() {{
                                            amount = 815607L;
                                            currency = "iste";
                                        }};
                                        createdAt = "reprehenderit";
                                        id = "7f1a5491-abe9-4751-b106-d23e03e69815";
                                        locationId = "similique";
                                        processingFeeMoney = new Money() {{
                                            amount = 664596L;
                                            currency = "officiis";
                                        }};
                                        reason = "omnis";
                                        status = "cupiditate";
                                        tenderId = "earum";
                                        transactionId = "nobis";
                                    }}),
                                    add(new Refund(                new Money() {{
                                                        amount = 633732L;
                                                        currency = "reprehenderit";
                                                    }};, "est", "aut", "blanditiis", "unde", "hic", "maxime") {{
                                        additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                            add(new AdditionalRecipient(                new Money() {{
                                                                amount = 519008L;
                                                                currency = "fuga";
                                                            }};, "aliquam") {{
                                                amountMoney = new Money() {{
                                                    amount = 858227L;
                                                    currency = "tempora";
                                                }};
                                                description = "maiores";
                                                locationId = "eos";
                                                receivableId = "pariatur";
                                            }}),
                                            add(new AdditionalRecipient(                new Money() {{
                                                                amount = 681678L;
                                                                currency = "commodi";
                                                            }};, "ipsa") {{
                                                amountMoney = new Money() {{
                                                    amount = 274611L;
                                                    currency = "laboriosam";
                                                }};
                                                description = "quaerat";
                                                locationId = "alias";
                                                receivableId = "quisquam";
                                            }}),
                                            add(new AdditionalRecipient(                new Money() {{
                                                                amount = 164765L;
                                                                currency = "a";
                                                            }};, "unde") {{
                                                amountMoney = new Money() {{
                                                    amount = 849802L;
                                                    currency = "tempore";
                                                }};
                                                description = "nihil";
                                                locationId = "neque";
                                                receivableId = "est";
                                            }}),
                                        }};
                                        amountMoney = new Money() {{
                                            amount = 212287L;
                                            currency = "maiores";
                                        }};
                                        createdAt = "labore";
                                        id = "67dc0d8d-a561-4220-a6ab-8f277485c197";
                                        locationId = "voluptas";
                                        processingFeeMoney = new Money() {{
                                            amount = 627129L;
                                            currency = "tenetur";
                                        }};
                                        reason = "error";
                                        status = "blanditiis";
                                        tenderId = "aut";
                                        transactionId = "nulla";
                                    }}),
                                    add(new Refund(                new Money() {{
                                                        amount = 861166L;
                                                        currency = "perferendis";
                                                    }};, "ullam", "incidunt", "deleniti", "nisi", "repudiandae", "odio") {{
                                        additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                            add(new AdditionalRecipient(                new Money() {{
                                                                amount = 261955L;
                                                                currency = "ullam";
                                                            }};, "neque") {{
                                                amountMoney = new Money() {{
                                                    amount = 283848L;
                                                    currency = "fugiat";
                                                }};
                                                description = "facilis";
                                                locationId = "dolores";
                                                receivableId = "quam";
                                            }}),
                                            add(new AdditionalRecipient(                new Money() {{
                                                                amount = 450484L;
                                                                currency = "minus";
                                                            }};, "voluptas") {{
                                                amountMoney = new Money() {{
                                                    amount = 60123L;
                                                    currency = "officiis";
                                                }};
                                                description = "ullam";
                                                locationId = "minus";
                                                receivableId = "placeat";
                                            }}),
                                        }};
                                        amountMoney = new Money() {{
                                            amount = 842299L;
                                            currency = "aut";
                                        }};
                                        createdAt = "quod";
                                        id = "bcfdcd33-4b6f-4623-bcec-ab50aee5e0da";
                                        locationId = "quas";
                                        processingFeeMoney = new Money() {{
                                            amount = 737600L;
                                            currency = "sint";
                                        }};
                                        reason = "laborum";
                                        status = "sapiente";
                                        tenderId = "nisi";
                                        transactionId = "id";
                                    }}),
                                }};
                                returnAmounts = new OrderMoneyAmounts() {{
                                    discountMoney = new Money() {{
                                        amount = 727896L;
                                        currency = "aliquam";
                                    }};;
                                    serviceChargeMoney = new Money() {{
                                        amount = 94668L;
                                        currency = "ipsum";
                                    }};;
                                    taxMoney = new Money() {{
                                        amount = 777139L;
                                        currency = "expedita";
                                    }};;
                                    tipMoney = new Money() {{
                                        amount = 901691L;
                                        currency = "magni";
                                    }};;
                                    totalMoney = new Money() {{
                                        amount = 825389L;
                                        currency = "et";
                                    }};;
                                }};;
                                returns = new org.openapis.openapi.models.shared.OrderReturn[]{{
                                    add(new OrderReturn() {{
                                        returnAmounts = new OrderMoneyAmounts() {{
                                            discountMoney = new Money() {{
                                                amount = 410045L;
                                                currency = "assumenda";
                                            }};
                                            serviceChargeMoney = new Money() {{
                                                amount = 810526L;
                                                currency = "illo";
                                            }};
                                            taxMoney = new Money() {{
                                                amount = 760272L;
                                                currency = "numquam";
                                            }};
                                            tipMoney = new Money() {{
                                                amount = 236392L;
                                                currency = "pariatur";
                                            }};
                                            totalMoney = new Money() {{
                                                amount = 266895L;
                                                currency = "doloremque";
                                            }};
                                        }};
                                        returnDiscounts = new org.openapis.openapi.models.shared.OrderReturnDiscount[]{{
                                            add(new OrderReturnDiscount() {{
                                                amountMoney = new Money() {{
                                                    amount = 398054L;
                                                    currency = "illo";
                                                }};
                                                appliedMoney = new Money() {{
                                                    amount = 860470L;
                                                    currency = "inventore";
                                                }};
                                                catalogObjectId = "in";
                                                catalogVersion = 90659L;
                                                name = "Lauren Koelpin";
                                                percentage = "debitis";
                                                scope = "enim";
                                                sourceDiscountUid = "itaque";
                                                type = "saepe";
                                                uid = "non";
                                            }}),
                                            add(new OrderReturnDiscount() {{
                                                amountMoney = new Money() {{
                                                    amount = 940797L;
                                                    currency = "esse";
                                                }};
                                                appliedMoney = new Money() {{
                                                    amount = 167765L;
                                                    currency = "quasi";
                                                }};
                                                catalogObjectId = "et";
                                                catalogVersion = 556233L;
                                                name = "Barbara Koss";
                                                percentage = "maiores";
                                                scope = "adipisci";
                                                sourceDiscountUid = "odit";
                                                type = "itaque";
                                                uid = "dolorem";
                                            }}),
                                            add(new OrderReturnDiscount() {{
                                                amountMoney = new Money() {{
                                                    amount = 714880L;
                                                    currency = "incidunt";
                                                }};
                                                appliedMoney = new Money() {{
                                                    amount = 597946L;
                                                    currency = "pariatur";
                                                }};
                                                catalogObjectId = "facilis";
                                                catalogVersion = 889994L;
                                                name = "Mindy Considine";
                                                percentage = "voluptate";
                                                scope = "distinctio";
                                                sourceDiscountUid = "suscipit";
                                                type = "fugiat";
                                                uid = "perspiciatis";
                                            }}),
                                            add(new OrderReturnDiscount() {{
                                                amountMoney = new Money() {{
                                                    amount = 585550L;
                                                    currency = "dolore";
                                                }};
                                                appliedMoney = new Money() {{
                                                    amount = 557250L;
                                                    currency = "assumenda";
                                                }};
                                                catalogObjectId = "aliquid";
                                                catalogVersion = 906140L;
                                                name = "Santiago Stehr";
                                                percentage = "odio";
                                                scope = "voluptas";
                                                sourceDiscountUid = "deleniti";
                                                type = "eaque";
                                                uid = "reiciendis";
                                            }}),
                                        }};
                                        returnLineItems = new org.openapis.openapi.models.shared.OrderReturnLineItem[]{{
                                            add(new OrderReturnLineItem("fugiat") {{
                                                appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                    add(new OrderLineItemAppliedDiscount("blanditiis") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 673057L;
                                                            currency = "ab";
                                                        }};
                                                        discountUid = "iure";
                                                        uid = "deserunt";
                                                    }}),
                                                    add(new OrderLineItemAppliedDiscount("totam") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 174464L;
                                                            currency = "necessitatibus";
                                                        }};
                                                        discountUid = "nemo";
                                                        uid = "vero";
                                                    }}),
                                                }};
                                                appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                    add(new OrderLineItemAppliedTax("fugiat") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 962776L;
                                                            currency = "illum";
                                                        }};
                                                        taxUid = "consequuntur";
                                                        uid = "praesentium";
                                                    }}),
                                                }};
                                                basePriceMoney = new Money() {{
                                                    amount = 106118L;
                                                    currency = "perferendis";
                                                }};
                                                catalogObjectId = "quaerat";
                                                catalogVersion = 47905L;
                                                grossReturnMoney = new Money() {{
                                                    amount = 686946L;
                                                    currency = "iusto";
                                                }};
                                                itemType = "debitis";
                                                name = "Jonathan Dickens";
                                                note = "dolorum";
                                                quantity = "distinctio";
                                                quantityUnit = new OrderQuantityUnit() {{
                                                    catalogVersion = 276177L;
                                                    measurementUnit = new MeasurementUnit() {{
                                                        areaUnit = "quaerat";
                                                        customUnit = new MeasurementUnitCustom("alias", "aperiam") {{
                                                            abbreviation = "eligendi";
                                                            name = "Juan Larson";
                                                        }};
                                                        genericUnit = "blanditiis";
                                                        lengthUnit = "reiciendis";
                                                        timeUnit = "eius";
                                                        type = "suscipit";
                                                        volumeUnit = "inventore";
                                                        weightUnit = "quisquam";
                                                    }};
                                                    precision = 880882L;
                                                }};
                                                returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                                    add(new OrderReturnLineItemModifier() {{
                                                        basePriceMoney = new Money() {{
                                                            amount = 198665L;
                                                            currency = "necessitatibus";
                                                        }};
                                                        catalogObjectId = "excepturi";
                                                        catalogVersion = 72126L;
                                                        name = "Debbie Metz";
                                                        sourceModifierUid = "iste";
                                                        totalPriceMoney = new Money() {{
                                                            amount = 725592L;
                                                            currency = "deserunt";
                                                        }};
                                                        uid = "dolore";
                                                    }}),
                                                    add(new OrderReturnLineItemModifier() {{
                                                        basePriceMoney = new Money() {{
                                                            amount = 391899L;
                                                            currency = "aperiam";
                                                        }};
                                                        catalogObjectId = "similique";
                                                        catalogVersion = 857272L;
                                                        name = "Abel Smitham";
                                                        sourceModifierUid = "veritatis";
                                                        totalPriceMoney = new Money() {{
                                                            amount = 41597L;
                                                            currency = "porro";
                                                        }};
                                                        uid = "adipisci";
                                                    }}),
                                                }};
                                                sourceLineItemUid = "odio";
                                                totalDiscountMoney = new Money() {{
                                                    amount = 819506L;
                                                    currency = "culpa";
                                                }};
                                                totalMoney = new Money() {{
                                                    amount = 658917L;
                                                    currency = "iste";
                                                }};
                                                totalTaxMoney = new Money() {{
                                                    amount = 124500L;
                                                    currency = "deleniti";
                                                }};
                                                uid = "consequuntur";
                                                variationName = "laborum";
                                                variationTotalPriceMoney = new Money() {{
                                                    amount = 265148L;
                                                    currency = "natus";
                                                }};
                                            }}),
                                            add(new OrderReturnLineItem("vel") {{
                                                appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                    add(new OrderLineItemAppliedDiscount("amet") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 397965L;
                                                            currency = "odit";
                                                        }};
                                                        discountUid = "quis";
                                                        uid = "pariatur";
                                                    }}),
                                                    add(new OrderLineItemAppliedDiscount("minus") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 753496L;
                                                            currency = "laborum";
                                                        }};
                                                        discountUid = "delectus";
                                                        uid = "reiciendis";
                                                    }}),
                                                    add(new OrderLineItemAppliedDiscount("saepe") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 79349L;
                                                            currency = "cupiditate";
                                                        }};
                                                        discountUid = "blanditiis";
                                                        uid = "voluptates";
                                                    }}),
                                                }};
                                                appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                    add(new OrderLineItemAppliedTax("dignissimos") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 267578L;
                                                            currency = "quaerat";
                                                        }};
                                                        taxUid = "quis";
                                                        uid = "dolores";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("possimus") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 604308L;
                                                            currency = "odit";
                                                        }};
                                                        taxUid = "tempore";
                                                        uid = "maxime";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("id") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 251811L;
                                                            currency = "ut";
                                                        }};
                                                        taxUid = "ipsa";
                                                        uid = "saepe";
                                                    }}),
                                                }};
                                                basePriceMoney = new Money() {{
                                                    amount = 577971L;
                                                    currency = "corrupti";
                                                }};
                                                catalogObjectId = "nam";
                                                catalogVersion = 929639L;
                                                grossReturnMoney = new Money() {{
                                                    amount = 808133L;
                                                    currency = "porro";
                                                }};
                                                itemType = "itaque";
                                                name = "Lucille Lehner";
                                                note = "necessitatibus";
                                                quantity = "perferendis";
                                                quantityUnit = new OrderQuantityUnit() {{
                                                    catalogVersion = 834476L;
                                                    measurementUnit = new MeasurementUnit() {{
                                                        areaUnit = "ipsam";
                                                        customUnit = new MeasurementUnitCustom("quis", "nemo") {{
                                                            abbreviation = "aliquid";
                                                            name = "Neil Franey Jr.";
                                                        }};
                                                        genericUnit = "accusantium";
                                                        lengthUnit = "neque";
                                                        timeUnit = "voluptates";
                                                        type = "totam";
                                                        volumeUnit = "fugiat";
                                                        weightUnit = "impedit";
                                                    }};
                                                    precision = 421921L;
                                                }};
                                                returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                                    add(new OrderReturnLineItemModifier() {{
                                                        basePriceMoney = new Money() {{
                                                            amount = 407819L;
                                                            currency = "doloribus";
                                                        }};
                                                        catalogObjectId = "maiores";
                                                        catalogVersion = 467112L;
                                                        name = "Pat Kertzmann";
                                                        sourceModifierUid = "odio";
                                                        totalPriceMoney = new Money() {{
                                                            amount = 317697L;
                                                            currency = "delectus";
                                                        }};
                                                        uid = "nostrum";
                                                    }}),
                                                }};
                                                sourceLineItemUid = "harum";
                                                totalDiscountMoney = new Money() {{
                                                    amount = 444384L;
                                                    currency = "sit";
                                                }};
                                                totalMoney = new Money() {{
                                                    amount = 923524L;
                                                    currency = "consectetur";
                                                }};
                                                totalTaxMoney = new Money() {{
                                                    amount = 877848L;
                                                    currency = "eius";
                                                }};
                                                uid = "optio";
                                                variationName = "sapiente";
                                                variationTotalPriceMoney = new Money() {{
                                                    amount = 783785L;
                                                    currency = "impedit";
                                                }};
                                            }}),
                                            add(new OrderReturnLineItem("tenetur") {{
                                                appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                    add(new OrderLineItemAppliedDiscount("veniam") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 582822L;
                                                            currency = "ab";
                                                        }};
                                                        discountUid = "necessitatibus";
                                                        uid = "maxime";
                                                    }}),
                                                    add(new OrderLineItemAppliedDiscount("at") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 181673L;
                                                            currency = "aliquid";
                                                        }};
                                                        discountUid = "sed";
                                                        uid = "modi";
                                                    }}),
                                                    add(new OrderLineItemAppliedDiscount("tempora") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 44938L;
                                                            currency = "alias";
                                                        }};
                                                        discountUid = "aut";
                                                        uid = "quae";
                                                    }}),
                                                }};
                                                appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                    add(new OrderLineItemAppliedTax("officiis") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 941174L;
                                                            currency = "non";
                                                        }};
                                                        taxUid = "minima";
                                                        uid = "impedit";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("minus") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 657173L;
                                                            currency = "dicta";
                                                        }};
                                                        taxUid = "vitae";
                                                        uid = "laborum";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("quidem") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 328577L;
                                                            currency = "neque";
                                                        }};
                                                        taxUid = "debitis";
                                                        uid = "quidem";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("tenetur") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 380853L;
                                                            currency = "nostrum";
                                                        }};
                                                        taxUid = "corrupti";
                                                        uid = "odio";
                                                    }}),
                                                }};
                                                basePriceMoney = new Money() {{
                                                    amount = 234641L;
                                                    currency = "eius";
                                                }};
                                                catalogObjectId = "voluptatem";
                                                catalogVersion = 301099L;
                                                grossReturnMoney = new Money() {{
                                                    amount = 64733L;
                                                    currency = "dolore";
                                                }};
                                                itemType = "placeat";
                                                name = "Karla Mayer";
                                                note = "voluptates";
                                                quantity = "debitis";
                                                quantityUnit = new OrderQuantityUnit() {{
                                                    catalogVersion = 252395L;
                                                    measurementUnit = new MeasurementUnit() {{
                                                        areaUnit = "quae";
                                                        customUnit = new MeasurementUnitCustom("magni", "minus") {{
                                                            abbreviation = "perferendis";
                                                            name = "Noah Medhurst";
                                                        }};
                                                        genericUnit = "id";
                                                        lengthUnit = "earum";
                                                        timeUnit = "architecto";
                                                        type = "nobis";
                                                        volumeUnit = "ipsa";
                                                        weightUnit = "dolores";
                                                    }};
                                                    precision = 362656L;
                                                }};
                                                returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                                    add(new OrderReturnLineItemModifier() {{
                                                        basePriceMoney = new Money() {{
                                                            amount = 100596L;
                                                            currency = "pariatur";
                                                        }};
                                                        catalogObjectId = "vitae";
                                                        catalogVersion = 299655L;
                                                        name = "Joan Lehner";
                                                        sourceModifierUid = "voluptatibus";
                                                        totalPriceMoney = new Money() {{
                                                            amount = 665052L;
                                                            currency = "explicabo";
                                                        }};
                                                        uid = "doloribus";
                                                    }}),
                                                    add(new OrderReturnLineItemModifier() {{
                                                        basePriceMoney = new Money() {{
                                                            amount = 651359L;
                                                            currency = "quibusdam";
                                                        }};
                                                        catalogObjectId = "consequatur";
                                                        catalogVersion = 764166L;
                                                        name = "Tonya Schaden";
                                                        sourceModifierUid = "excepturi";
                                                        totalPriceMoney = new Money() {{
                                                            amount = 349346L;
                                                            currency = "quaerat";
                                                        }};
                                                        uid = "in";
                                                    }}),
                                                    add(new OrderReturnLineItemModifier() {{
                                                        basePriceMoney = new Money() {{
                                                            amount = 169937L;
                                                            currency = "quo";
                                                        }};
                                                        catalogObjectId = "at";
                                                        catalogVersion = 857705L;
                                                        name = "Amber Wyman";
                                                        sourceModifierUid = "nesciunt";
                                                        totalPriceMoney = new Money() {{
                                                            amount = 737253L;
                                                            currency = "in";
                                                        }};
                                                        uid = "quae";
                                                    }}),
                                                    add(new OrderReturnLineItemModifier() {{
                                                        basePriceMoney = new Money() {{
                                                            amount = 718897L;
                                                            currency = "maxime";
                                                        }};
                                                        catalogObjectId = "fuga";
                                                        catalogVersion = 515768L;
                                                        name = "Van Ortiz DDS";
                                                        sourceModifierUid = "labore";
                                                        totalPriceMoney = new Money() {{
                                                            amount = 232501L;
                                                            currency = "ipsum";
                                                        }};
                                                        uid = "exercitationem";
                                                    }}),
                                                }};
                                                sourceLineItemUid = "inventore";
                                                totalDiscountMoney = new Money() {{
                                                    amount = 788647L;
                                                    currency = "neque";
                                                }};
                                                totalMoney = new Money() {{
                                                    amount = 872770L;
                                                    currency = "nulla";
                                                }};
                                                totalTaxMoney = new Money() {{
                                                    amount = 106404L;
                                                    currency = "necessitatibus";
                                                }};
                                                uid = "harum";
                                                variationName = "deleniti";
                                                variationTotalPriceMoney = new Money() {{
                                                    amount = 980433L;
                                                    currency = "odio";
                                                }};
                                            }}),
                                            add(new OrderReturnLineItem("voluptates") {{
                                                appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                    add(new OrderLineItemAppliedDiscount("aspernatur") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 364332L;
                                                            currency = "sapiente";
                                                        }};
                                                        discountUid = "magnam";
                                                        uid = "hic";
                                                    }}),
                                                    add(new OrderLineItemAppliedDiscount("eaque") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 216488L;
                                                            currency = "doloribus";
                                                        }};
                                                        discountUid = "quasi";
                                                        uid = "cumque";
                                                    }}),
                                                }};
                                                appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                    add(new OrderLineItemAppliedTax("non") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 357663L;
                                                            currency = "totam";
                                                        }};
                                                        taxUid = "commodi";
                                                        uid = "maxime";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("reprehenderit") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 651659L;
                                                            currency = "repudiandae";
                                                        }};
                                                        taxUid = "odio";
                                                        uid = "temporibus";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("officiis") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 744463L;
                                                            currency = "voluptas";
                                                        }};
                                                        taxUid = "odio";
                                                        uid = "reiciendis";
                                                    }}),
                                                }};
                                                basePriceMoney = new Money() {{
                                                    amount = 914803L;
                                                    currency = "tenetur";
                                                }};
                                                catalogObjectId = "veniam";
                                                catalogVersion = 887672L;
                                                grossReturnMoney = new Money() {{
                                                    amount = 64880L;
                                                    currency = "eius";
                                                }};
                                                itemType = "quia";
                                                name = "Freddie Heller PhD";
                                                note = "soluta";
                                                quantity = "eveniet";
                                                quantityUnit = new OrderQuantityUnit() {{
                                                    catalogVersion = 808885L;
                                                    measurementUnit = new MeasurementUnit() {{
                                                        areaUnit = "earum";
                                                        customUnit = new MeasurementUnitCustom("quae", "quis") {{
                                                            abbreviation = "doloribus";
                                                            name = "Mathew Satterfield";
                                                        }};
                                                        genericUnit = "commodi";
                                                        lengthUnit = "itaque";
                                                        timeUnit = "occaecati";
                                                        type = "odit";
                                                        volumeUnit = "ducimus";
                                                        weightUnit = "corrupti";
                                                    }};
                                                    precision = 162787L;
                                                }};
                                                returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                                    add(new OrderReturnLineItemModifier() {{
                                                        basePriceMoney = new Money() {{
                                                            amount = 371545L;
                                                            currency = "debitis";
                                                        }};
                                                        catalogObjectId = "repudiandae";
                                                        catalogVersion = 642425L;
                                                        name = "Ms. Katie Langworth";
                                                        sourceModifierUid = "laboriosam";
                                                        totalPriceMoney = new Money() {{
                                                            amount = 508067L;
                                                            currency = "quae";
                                                        }};
                                                        uid = "nisi";
                                                    }}),
                                                    add(new OrderReturnLineItemModifier() {{
                                                        basePriceMoney = new Money() {{
                                                            amount = 229184L;
                                                            currency = "tenetur";
                                                        }};
                                                        catalogObjectId = "ducimus";
                                                        catalogVersion = 597313L;
                                                        name = "Johnathan Kris";
                                                        sourceModifierUid = "ex";
                                                        totalPriceMoney = new Money() {{
                                                            amount = 803498L;
                                                            currency = "quae";
                                                        }};
                                                        uid = "quidem";
                                                    }}),
                                                }};
                                                sourceLineItemUid = "voluptatem";
                                                totalDiscountMoney = new Money() {{
                                                    amount = 945421L;
                                                    currency = "mollitia";
                                                }};
                                                totalMoney = new Money() {{
                                                    amount = 27735L;
                                                    currency = "quidem";
                                                }};
                                                totalTaxMoney = new Money() {{
                                                    amount = 744080L;
                                                    currency = "eos";
                                                }};
                                                uid = "quae";
                                                variationName = "culpa";
                                                variationTotalPriceMoney = new Money() {{
                                                    amount = 290979L;
                                                    currency = "consequatur";
                                                }};
                                            }}),
                                        }};
                                        returnServiceCharges = new org.openapis.openapi.models.shared.OrderReturnServiceCharge[]{{
                                            add(new OrderReturnServiceCharge() {{
                                                amountMoney = new Money() {{
                                                    amount = 775356L;
                                                    currency = "incidunt";
                                                }};
                                                appliedMoney = new Money() {{
                                                    amount = 662019L;
                                                    currency = "accusamus";
                                                }};
                                                appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                    add(new OrderLineItemAppliedTax("consequuntur") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 308127L;
                                                            currency = "eaque";
                                                        }};
                                                        taxUid = "nisi";
                                                        uid = "eius";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("esse") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 480869L;
                                                            currency = "explicabo";
                                                        }};
                                                        taxUid = "autem";
                                                        uid = "nostrum";
                                                    }}),
                                                }};
                                                calculationPhase = "nobis";
                                                catalogObjectId = "voluptatem";
                                                catalogVersion = 67981L;
                                                name = "Jeffrey Klein IV";
                                                percentage = "earum";
                                                sourceServiceChargeUid = "nulla";
                                                taxable = false;
                                                totalMoney = new Money() {{
                                                    amount = 197700L;
                                                    currency = "iste";
                                                }};
                                                totalTaxMoney = new Money() {{
                                                    amount = 169589L;
                                                    currency = "inventore";
                                                }};
                                                uid = "eligendi";
                                            }}),
                                            add(new OrderReturnServiceCharge() {{
                                                amountMoney = new Money() {{
                                                    amount = 173849L;
                                                    currency = "exercitationem";
                                                }};
                                                appliedMoney = new Money() {{
                                                    amount = 442079L;
                                                    currency = "iste";
                                                }};
                                                appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                    add(new OrderLineItemAppliedTax("sit") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 5966L;
                                                            currency = "pariatur";
                                                        }};
                                                        taxUid = "eum";
                                                        uid = "maiores";
                                                    }}),
                                                }};
                                                calculationPhase = "natus";
                                                catalogObjectId = "dolorem";
                                                catalogVersion = 648815L;
                                                name = "Cecelia Witting";
                                                percentage = "laboriosam";
                                                sourceServiceChargeUid = "temporibus";
                                                taxable = false;
                                                totalMoney = new Money() {{
                                                    amount = 239836L;
                                                    currency = "autem";
                                                }};
                                                totalTaxMoney = new Money() {{
                                                    amount = 409341L;
                                                    currency = "nulla";
                                                }};
                                                uid = "delectus";
                                            }}),
                                        }};
                                        returnTaxes = new org.openapis.openapi.models.shared.OrderReturnTax[]{{
                                            add(new OrderReturnTax() {{
                                                appliedMoney = new Money() {{
                                                    amount = 80268L;
                                                    currency = "consequatur";
                                                }};
                                                catalogObjectId = "architecto";
                                                catalogVersion = 111600L;
                                                name = "Miss George Mitchell";
                                                percentage = "necessitatibus";
                                                scope = "porro";
                                                sourceTaxUid = "laudantium";
                                                type = "tempore";
                                                uid = "exercitationem";
                                            }}),
                                            add(new OrderReturnTax() {{
                                                appliedMoney = new Money() {{
                                                    amount = 244713L;
                                                    currency = "totam";
                                                }};
                                                catalogObjectId = "nisi";
                                                catalogVersion = 174370L;
                                                name = "Alonzo Bins";
                                                percentage = "at";
                                                scope = "vitae";
                                                sourceTaxUid = "aliquam";
                                                type = "asperiores";
                                                uid = "debitis";
                                            }}),
                                            add(new OrderReturnTax() {{
                                                appliedMoney = new Money() {{
                                                    amount = 441646L;
                                                    currency = "sed";
                                                }};
                                                catalogObjectId = "voluptates";
                                                catalogVersion = 370205L;
                                                name = "Kathleen Zboncak I";
                                                percentage = "ipsa";
                                                scope = "consectetur";
                                                sourceTaxUid = "possimus";
                                                type = "asperiores";
                                                uid = "quo";
                                            }}),
                                        }};
                                        roundingAdjustment = new OrderRoundingAdjustment() {{
                                            amountMoney = new Money() {{
                                                amount = 239970L;
                                                currency = "non";
                                            }};
                                            name = "Melvin Morissette";
                                            uid = "hic";
                                        }};
                                        sourceOrderId = "hic";
                                        uid = "error";
                                    }}),
                                    add(new OrderReturn() {{
                                        returnAmounts = new OrderMoneyAmounts() {{
                                            discountMoney = new Money() {{
                                                amount = 411243L;
                                                currency = "repellendus";
                                            }};
                                            serviceChargeMoney = new Money() {{
                                                amount = 111859L;
                                                currency = "pariatur";
                                            }};
                                            taxMoney = new Money() {{
                                                amount = 194052L;
                                                currency = "aspernatur";
                                            }};
                                            tipMoney = new Money() {{
                                                amount = 10226L;
                                                currency = "occaecati";
                                            }};
                                            totalMoney = new Money() {{
                                                amount = 947L;
                                                currency = "doloribus";
                                            }};
                                        }};
                                        returnDiscounts = new org.openapis.openapi.models.shared.OrderReturnDiscount[]{{
                                            add(new OrderReturnDiscount() {{
                                                amountMoney = new Money() {{
                                                    amount = 95645L;
                                                    currency = "ullam";
                                                }};
                                                appliedMoney = new Money() {{
                                                    amount = 443546L;
                                                    currency = "mollitia";
                                                }};
                                                catalogObjectId = "cumque";
                                                catalogVersion = 563260L;
                                                name = "Caleb Carter";
                                                percentage = "vitae";
                                                scope = "eligendi";
                                                sourceDiscountUid = "accusamus";
                                                type = "perspiciatis";
                                                uid = "nam";
                                            }}),
                                            add(new OrderReturnDiscount() {{
                                                amountMoney = new Money() {{
                                                    amount = 878653L;
                                                    currency = "aliquam";
                                                }};
                                                appliedMoney = new Money() {{
                                                    amount = 102146L;
                                                    currency = "eligendi";
                                                }};
                                                catalogObjectId = "atque";
                                                catalogVersion = 393177L;
                                                name = "Drew Schultz";
                                                percentage = "omnis";
                                                scope = "molestiae";
                                                sourceDiscountUid = "illo";
                                                type = "unde";
                                                uid = "repellendus";
                                            }}),
                                            add(new OrderReturnDiscount() {{
                                                amountMoney = new Money() {{
                                                    amount = 7852L;
                                                    currency = "dignissimos";
                                                }};
                                                appliedMoney = new Money() {{
                                                    amount = 689029L;
                                                    currency = "odit";
                                                }};
                                                catalogObjectId = "aut";
                                                catalogVersion = 49892L;
                                                name = "Zachary Lakin";
                                                percentage = "temporibus";
                                                scope = "consequuntur";
                                                sourceDiscountUid = "iste";
                                                type = "suscipit";
                                                uid = "iusto";
                                            }}),
                                            add(new OrderReturnDiscount() {{
                                                amountMoney = new Money() {{
                                                    amount = 857298L;
                                                    currency = "delectus";
                                                }};
                                                appliedMoney = new Money() {{
                                                    amount = 514095L;
                                                    currency = "sapiente";
                                                }};
                                                catalogObjectId = "facere";
                                                catalogVersion = 512782L;
                                                name = "Aaron Parker";
                                                percentage = "voluptas";
                                                scope = "eaque";
                                                sourceDiscountUid = "tempore";
                                                type = "accusamus";
                                                uid = "commodi";
                                            }}),
                                        }};
                                        returnLineItems = new org.openapis.openapi.models.shared.OrderReturnLineItem[]{{
                                            add(new OrderReturnLineItem("suscipit") {{
                                                appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                    add(new OrderLineItemAppliedDiscount("veniam") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 755297L;
                                                            currency = "facere";
                                                        }};
                                                        discountUid = "molestias";
                                                        uid = "quisquam";
                                                    }}),
                                                }};
                                                appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                    add(new OrderLineItemAppliedTax("ut") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 958510L;
                                                            currency = "possimus";
                                                        }};
                                                        taxUid = "quibusdam";
                                                        uid = "doloremque";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("aspernatur") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 756102L;
                                                            currency = "nesciunt";
                                                        }};
                                                        taxUid = "voluptate";
                                                        uid = "corporis";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("earum") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 332116L;
                                                            currency = "quasi";
                                                        }};
                                                        taxUid = "consequuntur";
                                                        uid = "harum";
                                                    }}),
                                                }};
                                                basePriceMoney = new Money() {{
                                                    amount = 648491L;
                                                    currency = "officiis";
                                                }};
                                                catalogObjectId = "quasi";
                                                catalogVersion = 874845L;
                                                grossReturnMoney = new Money() {{
                                                    amount = 543144L;
                                                    currency = "voluptate";
                                                }};
                                                itemType = "itaque";
                                                name = "Roosevelt Hessel";
                                                note = "quod";
                                                quantity = "saepe";
                                                quantityUnit = new OrderQuantityUnit() {{
                                                    catalogVersion = 655102L;
                                                    measurementUnit = new MeasurementUnit() {{
                                                        areaUnit = "deleniti";
                                                        customUnit = new MeasurementUnitCustom("et", "et") {{
                                                            abbreviation = "eveniet";
                                                            name = "Maggie Lemke";
                                                        }};
                                                        genericUnit = "commodi";
                                                        lengthUnit = "laboriosam";
                                                        timeUnit = "ratione";
                                                        type = "porro";
                                                        volumeUnit = "at";
                                                        weightUnit = "fuga";
                                                    }};
                                                    precision = 428284L;
                                                }};
                                                returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                                    add(new OrderReturnLineItemModifier() {{
                                                        basePriceMoney = new Money() {{
                                                            amount = 480421L;
                                                            currency = "voluptate";
                                                        }};
                                                        catalogObjectId = "cumque";
                                                        catalogVersion = 124272L;
                                                        name = "Mrs. Jordan Howell";
                                                        sourceModifierUid = "odit";
                                                        totalPriceMoney = new Money() {{
                                                            amount = 201417L;
                                                            currency = "esse";
                                                        }};
                                                        uid = "quibusdam";
                                                    }}),
                                                    add(new OrderReturnLineItemModifier() {{
                                                        basePriceMoney = new Money() {{
                                                            amount = 270505L;
                                                            currency = "explicabo";
                                                        }};
                                                        catalogObjectId = "magni";
                                                        catalogVersion = 474637L;
                                                        name = "Rick Hyatt";
                                                        sourceModifierUid = "molestias";
                                                        totalPriceMoney = new Money() {{
                                                            amount = 634481L;
                                                            currency = "molestiae";
                                                        }};
                                                        uid = "labore";
                                                    }}),
                                                    add(new OrderReturnLineItemModifier() {{
                                                        basePriceMoney = new Money() {{
                                                            amount = 596194L;
                                                            currency = "officiis";
                                                        }};
                                                        catalogObjectId = "consectetur";
                                                        catalogVersion = 591270L;
                                                        name = "Mr. Randall Heller";
                                                        sourceModifierUid = "minus";
                                                        totalPriceMoney = new Money() {{
                                                            amount = 446611L;
                                                            currency = "corporis";
                                                        }};
                                                        uid = "itaque";
                                                    }}),
                                                    add(new OrderReturnLineItemModifier() {{
                                                        basePriceMoney = new Money() {{
                                                            amount = 278911L;
                                                            currency = "asperiores";
                                                        }};
                                                        catalogObjectId = "alias";
                                                        catalogVersion = 755508L;
                                                        name = "Sandra Fritsch";
                                                        sourceModifierUid = "tempore";
                                                        totalPriceMoney = new Money() {{
                                                            amount = 699128L;
                                                            currency = "molestiae";
                                                        }};
                                                        uid = "ipsam";
                                                    }}),
                                                }};
                                                sourceLineItemUid = "quos";
                                                totalDiscountMoney = new Money() {{
                                                    amount = 796525L;
                                                    currency = "nobis";
                                                }};
                                                totalMoney = new Money() {{
                                                    amount = 587166L;
                                                    currency = "tempora";
                                                }};
                                                totalTaxMoney = new Money() {{
                                                    amount = 350567L;
                                                    currency = "voluptas";
                                                }};
                                                uid = "quia";
                                                variationName = "delectus";
                                                variationTotalPriceMoney = new Money() {{
                                                    amount = 1369L;
                                                    currency = "consequatur";
                                                }};
                                            }}),
                                        }};
                                        returnServiceCharges = new org.openapis.openapi.models.shared.OrderReturnServiceCharge[]{{
                                            add(new OrderReturnServiceCharge() {{
                                                amountMoney = new Money() {{
                                                    amount = 406720L;
                                                    currency = "rem";
                                                }};
                                                appliedMoney = new Money() {{
                                                    amount = 363891L;
                                                    currency = "a";
                                                }};
                                                appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                    add(new OrderLineItemAppliedTax("nihil") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 819490L;
                                                            currency = "quasi";
                                                        }};
                                                        taxUid = "est";
                                                        uid = "vitae";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("libero") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 233463L;
                                                            currency = "illum";
                                                        }};
                                                        taxUid = "laudantium";
                                                        uid = "non";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("tenetur") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 739429L;
                                                            currency = "saepe";
                                                        }};
                                                        taxUid = "odit";
                                                        uid = "modi";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("magnam") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 127799L;
                                                            currency = "error";
                                                        }};
                                                        taxUid = "praesentium";
                                                        uid = "sequi";
                                                    }}),
                                                }};
                                                calculationPhase = "mollitia";
                                                catalogObjectId = "doloribus";
                                                catalogVersion = 689133L;
                                                name = "Viola Dicki";
                                                percentage = "expedita";
                                                sourceServiceChargeUid = "laboriosam";
                                                taxable = false;
                                                totalMoney = new Money() {{
                                                    amount = 169991L;
                                                    currency = "molestias";
                                                }};
                                                totalTaxMoney = new Money() {{
                                                    amount = 361978L;
                                                    currency = "facere";
                                                }};
                                                uid = "labore";
                                            }}),
                                            add(new OrderReturnServiceCharge() {{
                                                amountMoney = new Money() {{
                                                    amount = 666863L;
                                                    currency = "odit";
                                                }};
                                                appliedMoney = new Money() {{
                                                    amount = 603551L;
                                                    currency = "est";
                                                }};
                                                appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                    add(new OrderLineItemAppliedTax("voluptas") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 666215L;
                                                            currency = "quae";
                                                        }};
                                                        taxUid = "debitis";
                                                        uid = "quasi";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("repellat") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 607549L;
                                                            currency = "veritatis";
                                                        }};
                                                        taxUid = "nemo";
                                                        uid = "nisi";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("repudiandae") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 453835L;
                                                            currency = "possimus";
                                                        }};
                                                        taxUid = "aspernatur";
                                                        uid = "recusandae";
                                                    }}),
                                                }};
                                                calculationPhase = "eos";
                                                catalogObjectId = "perferendis";
                                                catalogVersion = 624730L;
                                                name = "Betty Herzog";
                                                percentage = "doloremque";
                                                sourceServiceChargeUid = "consectetur";
                                                taxable = false;
                                                totalMoney = new Money() {{
                                                    amount = 674080L;
                                                    currency = "occaecati";
                                                }};
                                                totalTaxMoney = new Money() {{
                                                    amount = 212369L;
                                                    currency = "repudiandae";
                                                }};
                                                uid = "provident";
                                            }}),
                                            add(new OrderReturnServiceCharge() {{
                                                amountMoney = new Money() {{
                                                    amount = 278241L;
                                                    currency = "incidunt";
                                                }};
                                                appliedMoney = new Money() {{
                                                    amount = 526451L;
                                                    currency = "sit";
                                                }};
                                                appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                    add(new OrderLineItemAppliedTax("nam") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 685537L;
                                                            currency = "ratione";
                                                        }};
                                                        taxUid = "in";
                                                        uid = "voluptatibus";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("natus") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 69569L;
                                                            currency = "ipsa";
                                                        }};
                                                        taxUid = "ducimus";
                                                        uid = "voluptatum";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("porro") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 54266L;
                                                            currency = "sequi";
                                                        }};
                                                        taxUid = "fugit";
                                                        uid = "deserunt";
                                                    }}),
                                                    add(new OrderLineItemAppliedTax("quam") {{
                                                        appliedMoney = new Money() {{
                                                            amount = 226131L;
                                                            currency = "amet";
                                                        }};
                                                        taxUid = "nesciunt";
                                                        uid = "et";
                                                    }}),
                                                }};
                                                calculationPhase = "odit";
                                                catalogObjectId = "saepe";
                                                catalogVersion = 141432L;
                                                name = "Taylor Kozey";
                                                percentage = "minus";
                                                sourceServiceChargeUid = "in";
                                                taxable = false;
                                                totalMoney = new Money() {{
                                                    amount = 257219L;
                                                    currency = "distinctio";
                                                }};
                                                totalTaxMoney = new Money() {{
                                                    amount = 626341L;
                                                    currency = "odio";
                                                }};
                                                uid = "necessitatibus";
                                            }}),
                                        }};
                                        returnTaxes = new org.openapis.openapi.models.shared.OrderReturnTax[]{{
                                            add(new OrderReturnTax() {{
                                                appliedMoney = new Money() {{
                                                    amount = 533956L;
                                                    currency = "possimus";
                                                }};
                                                catalogObjectId = "at";
                                                catalogVersion = 710032L;
                                                name = "Tonya Wisoky DDS";
                                                percentage = "optio";
                                                scope = "maxime";
                                                sourceTaxUid = "nesciunt";
                                                type = "labore";
                                                uid = "dicta";
                                            }}),
                                            add(new OrderReturnTax() {{
                                                appliedMoney = new Money() {{
                                                    amount = 785984L;
                                                    currency = "quas";
                                                }};
                                                catalogObjectId = "autem";
                                                catalogVersion = 317022L;
                                                name = "Rosa Gulgowski";
                                                percentage = "doloribus";
                                                scope = "doloremque";
                                                sourceTaxUid = "culpa";
                                                type = "voluptate";
                                                uid = "incidunt";
                                            }}),
                                            add(new OrderReturnTax() {{
                                                appliedMoney = new Money() {{
                                                    amount = 53477L;
                                                    currency = "doloribus";
                                                }};
                                                catalogObjectId = "cum";
                                                catalogVersion = 279166L;
                                                name = "Preston Gutkowski DDS";
                                                percentage = "ipsum";
                                                scope = "deserunt";
                                                sourceTaxUid = "doloremque";
                                                type = "sint";
                                                uid = "saepe";
                                            }}),
                                        }};
                                        roundingAdjustment = new OrderRoundingAdjustment() {{
                                            amountMoney = new Money() {{
                                                amount = 458895L;
                                                currency = "commodi";
                                            }};
                                            name = "Katrina Monahan";
                                            uid = "rem";
                                        }};
                                        sourceOrderId = "voluptatem";
                                        uid = "corrupti";
                                    }}),
                                }};
                                rewards = new org.openapis.openapi.models.shared.OrderReward[]{{
                                    add(new OrderReward("architecto", "neque") {{
                                        id = "be794455-ebc5-450a-9c42-6b59c8366fdc";
                                        rewardTierId = "minus";
                                    }}),
                                    add(new OrderReward("veritatis", "consequuntur") {{
                                        id = "5582c1b8-55e8-489d-9ef9-32e9000a13ad";
                                        rewardTierId = "voluptatum";
                                    }}),
                                    add(new OrderReward("tempore", "odio") {{
                                        id = "4208efd2-3411-4898-a738-79efbe8baeba";
                                        rewardTierId = "libero";
                                    }}),
                                }};
                                roundingAdjustment = new OrderRoundingAdjustment() {{
                                    amountMoney = new Money() {{
                                        amount = 614407L;
                                        currency = "ut";
                                    }};;
                                    name = "Rita Keeling";
                                    uid = "ipsa";
                                }};;
                                serviceCharges = new org.openapis.openapi.models.shared.OrderServiceCharge[]{{
                                    add(new OrderServiceCharge() {{
                                        amountMoney = new Money() {{
                                            amount = 337073L;
                                            currency = "inventore";
                                        }};
                                        appliedMoney = new Money() {{
                                            amount = 690050L;
                                            currency = "quidem";
                                        }};
                                        appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                            add(new OrderLineItemAppliedTax("iure") {{
                                                appliedMoney = new Money() {{
                                                    amount = 487876L;
                                                    currency = "eum";
                                                }};
                                                taxUid = "adipisci";
                                                uid = "architecto";
                                            }}),
                                            add(new OrderLineItemAppliedTax("odio") {{
                                                appliedMoney = new Money() {{
                                                    amount = 139528L;
                                                    currency = "voluptatem";
                                                }};
                                                taxUid = "quidem";
                                                uid = "molestiae";
                                            }}),
                                            add(new OrderLineItemAppliedTax("dolorem") {{
                                                appliedMoney = new Money() {{
                                                    amount = 635370L;
                                                    currency = "quis";
                                                }};
                                                taxUid = "mollitia";
                                                uid = "voluptas";
                                            }}),
                                        }};
                                        calculationPhase = "eum";
                                        catalogObjectId = "ipsam";
                                        catalogVersion = 683057L;
                                        metadata = new java.util.HashMap<String, String>() {{
                                            put("unde", "sapiente");
                                            put("ab", "ipsam");
                                        }};
                                        name = "Allison Bernier Jr.";
                                        percentage = "quo";
                                        taxable = false;
                                        totalMoney = new Money() {{
                                            amount = 3409L;
                                            currency = "illum";
                                        }};
                                        totalTaxMoney = new Money() {{
                                            amount = 207887L;
                                            currency = "commodi";
                                        }};
                                        type = "veritatis";
                                        uid = "reiciendis";
                                    }}),
                                }};
                                source = new OrderSource() {{
                                    name = "Jody Kutch";
                                }};;
                                state = "nemo";
                                taxes = new org.openapis.openapi.models.shared.OrderLineItemTax[]{{
                                    add(new OrderLineItemTax() {{
                                        appliedMoney = new Money() {{
                                            amount = 954348L;
                                            currency = "a";
                                        }};
                                        autoApplied = false;
                                        catalogObjectId = "nobis";
                                        catalogVersion = 312368L;
                                        metadata = new java.util.HashMap<String, String>() {{
                                            put("velit", "officiis");
                                            put("perspiciatis", "alias");
                                        }};
                                        name = "Salvador Tromp";
                                        percentage = "inventore";
                                        scope = "asperiores";
                                        type = "nulla";
                                        uid = "soluta";
                                    }}),
                                    add(new OrderLineItemTax() {{
                                        appliedMoney = new Money() {{
                                            amount = 281711L;
                                            currency = "at";
                                        }};
                                        autoApplied = false;
                                        catalogObjectId = "voluptas";
                                        catalogVersion = 596808L;
                                        metadata = new java.util.HashMap<String, String>() {{
                                            put("tempore", "facere");
                                            put("at", "perspiciatis");
                                        }};
                                        name = "Ross Lockman";
                                        percentage = "incidunt";
                                        scope = "neque";
                                        type = "iusto";
                                        uid = "adipisci";
                                    }}),
                                    add(new OrderLineItemTax() {{
                                        appliedMoney = new Money() {{
                                            amount = 255733L;
                                            currency = "officia";
                                        }};
                                        autoApplied = false;
                                        catalogObjectId = "quis";
                                        catalogVersion = 865792L;
                                        metadata = new java.util.HashMap<String, String>() {{
                                            put("odit", "quibusdam");
                                            put("cupiditate", "itaque");
                                        }};
                                        name = "Mack Kirlin";
                                        percentage = "expedita";
                                        scope = "vero";
                                        type = "quis";
                                        uid = "earum";
                                    }}),
                                    add(new OrderLineItemTax() {{
                                        appliedMoney = new Money() {{
                                            amount = 459197L;
                                            currency = "mollitia";
                                        }};
                                        autoApplied = false;
                                        catalogObjectId = "hic";
                                        catalogVersion = 882423L;
                                        metadata = new java.util.HashMap<String, String>() {{
                                            put("minima", "dolores");
                                            put("occaecati", "nihil");
                                        }};
                                        name = "Ms. Shaun Howe DVM";
                                        percentage = "aliquam";
                                        scope = "modi";
                                        type = "eveniet";
                                        uid = "dolorem";
                                    }}),
                                }};
                                tenders = new org.openapis.openapi.models.shared.Tender[]{{
                                    add(new Tender("odit") {{
                                        additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                            add(new AdditionalRecipient(                new Money() {{
                                                                amount = 429332L;
                                                                currency = "rem";
                                                            }};, "eligendi") {{
                                                amountMoney = new Money() {{
                                                    amount = 221934L;
                                                    currency = "consectetur";
                                                }};
                                                description = "unde";
                                                locationId = "eius";
                                                receivableId = "id";
                                            }}),
                                        }};
                                        amountMoney = new Money() {{
                                            amount = 759383L;
                                            currency = "deleniti";
                                        }};
                                        cardDetails = new TenderCardDetails() {{
                                            card = new Card() {{
                                                billingAddress = new Address() {{
                                                    addressLine1 = "sit";
                                                    addressLine2 = "illum";
                                                    addressLine3 = "ratione";
                                                    administrativeDistrictLevel1 = "alias";
                                                    administrativeDistrictLevel2 = "delectus";
                                                    administrativeDistrictLevel3 = "hic";
                                                    country = "Liberia";
                                                    firstName = "Cecile";
                                                    lastName = "Blick";
                                                    locality = "aliquid";
                                                    organization = "quaerat";
                                                    postalCode = "06519-9586";
                                                    sublocality = "autem";
                                                    sublocality2 = "minima";
                                                    sublocality3 = "nemo";
                                                }};
                                                bin = "adipisci";
                                                cardBrand = "tempore";
                                                cardType = "praesentium";
                                                cardholderName = "excepturi";
                                                customerId = "necessitatibus";
                                                enabled = false;
                                                expMonth = 17533L;
                                                expYear = 9751L;
                                                fingerprint = "doloremque";
                                                id = "9c6692de-7b35-4622-81a6-aab4ae7b1a5b";
                                                last4 = "omnis";
                                                prepaidType = "alias";
                                                referenceId = "rem";
                                                version = 813007L;
                                            }};
                                            entryMethod = "dolore";
                                            status = "repudiandae";
                                        }};
                                        cashDetails = new TenderCashDetails() {{
                                            buyerTenderedMoney = new Money() {{
                                                amount = 235758L;
                                                currency = "perferendis";
                                            }};
                                            changeBackMoney = new Money() {{
                                                amount = 304839L;
                                                currency = "perspiciatis";
                                            }};
                                        }};
                                        createdAt = "quae";
                                        customerId = "dolorum";
                                        id = "a35d4a83-9f03-4bab-b7b9-18f031398450";
                                        locationId = "reprehenderit";
                                        note = "officiis";
                                        paymentId = "accusantium";
                                        processingFeeMoney = new Money() {{
                                            amount = 915968L;
                                            currency = "consectetur";
                                        }};
                                        tipMoney = new Money() {{
                                            amount = 577369L;
                                            currency = "impedit";
                                        }};
                                        transactionId = "quam";
                                        type = "saepe";
                                    }}),
                                    add(new Tender("totam") {{
                                        additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                            add(new AdditionalRecipient(                new Money() {{
                                                                amount = 44724L;
                                                                currency = "numquam";
                                                            }};, "nisi") {{
                                                amountMoney = new Money() {{
                                                    amount = 930437L;
                                                    currency = "impedit";
                                                }};
                                                description = "quidem";
                                                locationId = "voluptatem";
                                                receivableId = "voluptas";
                                            }}),
                                        }};
                                        amountMoney = new Money() {{
                                            amount = 374897L;
                                            currency = "fugit";
                                        }};
                                        cardDetails = new TenderCardDetails() {{
                                            card = new Card() {{
                                                billingAddress = new Address() {{
                                                    addressLine1 = "recusandae";
                                                    addressLine2 = "magni";
                                                    addressLine3 = "ipsum";
                                                    administrativeDistrictLevel1 = "similique";
                                                    administrativeDistrictLevel2 = "dolor";
                                                    administrativeDistrictLevel3 = "nulla";
                                                    country = "Ireland";
                                                    firstName = "Orpha";
                                                    lastName = "Hodkiewicz";
                                                    locality = "quis";
                                                    organization = "reprehenderit";
                                                    postalCode = "68859-4900";
                                                    sublocality = "sed";
                                                    sublocality2 = "fugiat";
                                                    sublocality3 = "veritatis";
                                                }};
                                                bin = "occaecati";
                                                cardBrand = "rem";
                                                cardType = "ex";
                                                cardholderName = "dolorum";
                                                customerId = "officia";
                                                enabled = false;
                                                expMonth = 618782L;
                                                expYear = 569448L;
                                                fingerprint = "at";
                                                id = "3a1d3232-9e45-4837-a8f2-ad6bb10e255f";
                                                last4 = "repellendus";
                                                prepaidType = "cumque";
                                                referenceId = "aliquam";
                                                version = 547454L;
                                            }};
                                            entryMethod = "ipsa";
                                            status = "assumenda";
                                        }};
                                        cashDetails = new TenderCashDetails() {{
                                            buyerTenderedMoney = new Money() {{
                                                amount = 378735L;
                                                currency = "necessitatibus";
                                            }};
                                            changeBackMoney = new Money() {{
                                                amount = 241254L;
                                                currency = "ipsum";
                                            }};
                                        }};
                                        createdAt = "ipsa";
                                        customerId = "totam";
                                        id = "675cbf18-6856-4a7e-82cd-f9d0fc282c66";
                                        locationId = "vel";
                                        note = "est";
                                        paymentId = "sapiente";
                                        processingFeeMoney = new Money() {{
                                            amount = 198804L;
                                            currency = "optio";
                                        }};
                                        tipMoney = new Money() {{
                                            amount = 191844L;
                                            currency = "a";
                                        }};
                                        transactionId = "quis";
                                        type = "nostrum";
                                    }}),
                                    add(new Tender("ullam") {{
                                        additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                            add(new AdditionalRecipient(                new Money() {{
                                                                amount = 173608L;
                                                                currency = "vel";
                                                            }};, "eius") {{
                                                amountMoney = new Money() {{
                                                    amount = 716527L;
                                                    currency = "accusamus";
                                                }};
                                                description = "est";
                                                locationId = "veniam";
                                                receivableId = "possimus";
                                            }}),
                                            add(new AdditionalRecipient(                new Money() {{
                                                                amount = 781810L;
                                                                currency = "fuga";
                                                            }};, "corrupti") {{
                                                amountMoney = new Money() {{
                                                    amount = 912530L;
                                                    currency = "modi";
                                                }};
                                                description = "beatae";
                                                locationId = "necessitatibus";
                                                receivableId = "ratione";
                                            }}),
                                            add(new AdditionalRecipient(                new Money() {{
                                                                amount = 331099L;
                                                                currency = "ab";
                                                            }};, "neque") {{
                                                amountMoney = new Money() {{
                                                    amount = 253772L;
                                                    currency = "corrupti";
                                                }};
                                                description = "consequuntur";
                                                locationId = "consequuntur";
                                                receivableId = "officiis";
                                            }}),
                                        }};
                                        amountMoney = new Money() {{
                                            amount = 991472L;
                                            currency = "autem";
                                        }};
                                        cardDetails = new TenderCardDetails() {{
                                            card = new Card() {{
                                                billingAddress = new Address() {{
                                                    addressLine1 = "nulla";
                                                    addressLine2 = "excepturi";
                                                    addressLine3 = "at";
                                                    administrativeDistrictLevel1 = "magni";
                                                    administrativeDistrictLevel2 = "similique";
                                                    administrativeDistrictLevel3 = "possimus";
                                                    country = "Cyprus";
                                                    firstName = "Jarret";
                                                    lastName = "Schmeler";
                                                    locality = "dolorem";
                                                    organization = "eaque";
                                                    postalCode = "50447-0073";
                                                    sublocality = "deleniti";
                                                    sublocality2 = "molestiae";
                                                    sublocality3 = "iste";
                                                }};
                                                bin = "sed";
                                                cardBrand = "veritatis";
                                                cardType = "commodi";
                                                cardholderName = "amet";
                                                customerId = "eveniet";
                                                enabled = false;
                                                expMonth = 417848L;
                                                expYear = 468634L;
                                                fingerprint = "repellendus";
                                                id = "48860543-c0a3-4049-83cf-6c0276e7b21b";
                                                last4 = "dolorum";
                                                prepaidType = "quibusdam";
                                                referenceId = "provident";
                                                version = 4464L;
                                            }};
                                            entryMethod = "illum";
                                            status = "aspernatur";
                                        }};
                                        cashDetails = new TenderCashDetails() {{
                                            buyerTenderedMoney = new Money() {{
                                                amount = 471925L;
                                                currency = "ut";
                                            }};
                                            changeBackMoney = new Money() {{
                                                amount = 243727L;
                                                currency = "doloribus";
                                            }};
                                        }};
                                        createdAt = "nulla";
                                        customerId = "ex";
                                        id = "c2a10e6c-2978-4ec2-96a5-b09227fcc479";
                                        locationId = "natus";
                                        note = "nisi";
                                        paymentId = "optio";
                                        processingFeeMoney = new Money() {{
                                            amount = 574403L;
                                            currency = "esse";
                                        }};
                                        tipMoney = new Money() {{
                                            amount = 445255L;
                                            currency = "cum";
                                        }};
                                        transactionId = "soluta";
                                        type = "impedit";
                                    }}),
                                }};
                                totalDiscountMoney = new Money() {{
                                    amount = 459007L;
                                    currency = "sapiente";
                                }};;
                                totalMoney = new Money() {{
                                    amount = 187768L;
                                    currency = "praesentium";
                                }};;
                                totalServiceChargeMoney = new Money() {{
                                    amount = 597767L;
                                    currency = "eos";
                                }};;
                                totalTaxMoney = new Money() {{
                                    amount = 554289L;
                                    currency = "est";
                                }};;
                                totalTipMoney = new Money() {{
                                    amount = 500494L;
                                    currency = "laboriosam";
                                }};;
                                updatedAt = "ipsa";
                                version = 52016L;
                            }};) {{
                proposedRewards = new org.openapis.openapi.models.shared.OrderReward[]{{
                    add(new OrderReward("quis", "vel") {{
                        id = "58d67d63-e4aa-4568-8645-79cfc6c0e503";
                        rewardTierId = "maiores";
                    }}),
                    add(new OrderReward("consequuntur", "ratione") {{
                        id = "831f1d8e-d87b-428e-8afa-bc986e241e43";
                        rewardTierId = "quidem";
                    }}),
                    add(new OrderReward("exercitationem", "necessitatibus") {{
                        id = "42417d13-e3f6-42aa-9ae4-ae8ab4a9c492";
                        rewardTierId = "maxime";
                    }}),
                    add(new OrderReward("mollitia", "ipsum") {{
                        id = "8ba5d4aa-4a50-48bd-b80c-29aa8dd71bdd";
                        rewardTierId = "mollitia";
                    }}),
                }};
            }};            

            CalculateOrderResponse res = sdk.orders.calculateOrder(req, new CalculateOrderSecurity("quae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.calculateOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrder

Creates a new [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) that can include information about products for
purchase and settings to apply to the purchase.

To pay for a created order, see 
[Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).

You can modify open orders using the [UpdateOrder](https://developer.squareup.com/reference/square_2021-08-18/orders-api/update-order) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrderResponse;
import org.openapis.openapi.models.operations.CreateOrderSecurity;
import org.openapis.openapi.models.shared.AdditionalRecipient;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Card;
import org.openapis.openapi.models.shared.CreateOrderRequest;
import org.openapis.openapi.models.shared.MeasurementUnit;
import org.openapis.openapi.models.shared.MeasurementUnitCustom;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.Order;
import org.openapis.openapi.models.shared.OrderFulfillment;
import org.openapis.openapi.models.shared.OrderFulfillmentPickupDetails;
import org.openapis.openapi.models.shared.OrderFulfillmentPickupDetailsCurbsidePickupDetails;
import org.openapis.openapi.models.shared.OrderFulfillmentRecipient;
import org.openapis.openapi.models.shared.OrderFulfillmentShipmentDetails;
import org.openapis.openapi.models.shared.OrderLineItem;
import org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount;
import org.openapis.openapi.models.shared.OrderLineItemAppliedTax;
import org.openapis.openapi.models.shared.OrderLineItemDiscount;
import org.openapis.openapi.models.shared.OrderLineItemModifier;
import org.openapis.openapi.models.shared.OrderLineItemPricingBlocklists;
import org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount;
import org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax;
import org.openapis.openapi.models.shared.OrderLineItemTax;
import org.openapis.openapi.models.shared.OrderMoneyAmounts;
import org.openapis.openapi.models.shared.OrderPricingOptions;
import org.openapis.openapi.models.shared.OrderQuantityUnit;
import org.openapis.openapi.models.shared.OrderReturn;
import org.openapis.openapi.models.shared.OrderReturnDiscount;
import org.openapis.openapi.models.shared.OrderReturnLineItem;
import org.openapis.openapi.models.shared.OrderReturnLineItemModifier;
import org.openapis.openapi.models.shared.OrderReturnServiceCharge;
import org.openapis.openapi.models.shared.OrderReturnTax;
import org.openapis.openapi.models.shared.OrderReward;
import org.openapis.openapi.models.shared.OrderRoundingAdjustment;
import org.openapis.openapi.models.shared.OrderServiceCharge;
import org.openapis.openapi.models.shared.OrderSource;
import org.openapis.openapi.models.shared.Refund;
import org.openapis.openapi.models.shared.Tender;
import org.openapis.openapi.models.shared.TenderCardDetails;
import org.openapis.openapi.models.shared.TenderCashDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateOrderRequest req = new CreateOrderRequest() {{
                idempotencyKey = "cum";
                order = new Order("odio") {{
                    closedAt = "cum";
                    createdAt = "perspiciatis";
                    customerId = "beatae";
                    discounts = new org.openapis.openapi.models.shared.OrderLineItemDiscount[]{{
                        add(new OrderLineItemDiscount() {{
                            amountMoney = new Money() {{
                                amount = 266447L;
                                currency = "omnis";
                            }};
                            appliedMoney = new Money() {{
                                amount = 638865L;
                                currency = "saepe";
                            }};
                            catalogObjectId = "suscipit";
                            catalogVersion = 604351L;
                            metadata = new java.util.HashMap<String, String>() {{
                                put("perferendis", "deleniti");
                                put("totam", "fugiat");
                                put("labore", "vitae");
                                put("deleniti", "tempore");
                            }};
                            name = "Jamie Cartwright II";
                            percentage = "repellat";
                            pricingRuleId = "modi";
                            rewardIds = new String[]{{
                                add("ratione"),
                            }};
                            scope = "pariatur";
                            type = "ipsam";
                            uid = "tempora";
                        }}),
                        add(new OrderLineItemDiscount() {{
                            amountMoney = new Money() {{
                                amount = 238988L;
                                currency = "sint";
                            }};
                            appliedMoney = new Money() {{
                                amount = 189728L;
                                currency = "quis";
                            }};
                            catalogObjectId = "delectus";
                            catalogVersion = 189662L;
                            metadata = new java.util.HashMap<String, String>() {{
                                put("nihil", "dolorum");
                                put("quisquam", "voluptas");
                            }};
                            name = "Marshall Reichert";
                            percentage = "iste";
                            pricingRuleId = "velit";
                            rewardIds = new String[]{{
                                add("suscipit"),
                                add("id"),
                                add("sequi"),
                            }};
                            scope = "optio";
                            type = "minima";
                            uid = "fugit";
                        }}),
                    }};
                    fulfillments = new org.openapis.openapi.models.shared.OrderFulfillment[]{{
                        add(new OrderFulfillment() {{
                            metadata = new java.util.HashMap<String, String>() {{
                                put("doloremque", "quis");
                            }};
                            pickupDetails = new OrderFulfillmentPickupDetails() {{
                                acceptedAt = "recusandae";
                                autoCompleteDuration = "iusto";
                                cancelReason = "impedit";
                                canceledAt = "dolor";
                                curbsidePickupDetails = new OrderFulfillmentPickupDetailsCurbsidePickupDetails() {{
                                    buyerArrivedAt = "quaerat";
                                    curbsideDetails = "impedit";
                                }};
                                expiredAt = "deserunt";
                                expiresAt = "distinctio";
                                isCurbsidePickup = false;
                                note = "alias";
                                pickedUpAt = "voluptates";
                                pickupAt = "optio";
                                pickupWindowDuration = "libero";
                                placedAt = "voluptatum";
                                prepTimeDuration = "beatae";
                                readyAt = "explicabo";
                                recipient = new OrderFulfillmentRecipient() {{
                                    address = new Address() {{
                                        addressLine1 = "est";
                                        addressLine2 = "laboriosam";
                                        addressLine3 = "ea";
                                        administrativeDistrictLevel1 = "beatae";
                                        administrativeDistrictLevel2 = "eius";
                                        administrativeDistrictLevel3 = "atque";
                                        country = "Morocco";
                                        firstName = "Earl";
                                        lastName = "Gutkowski";
                                        locality = "fuga";
                                        organization = "voluptatum";
                                        postalCode = "50530-4377";
                                        sublocality = "qui";
                                        sublocality2 = "exercitationem";
                                        sublocality3 = "dolorem";
                                    }};
                                    customerId = "praesentium";
                                    displayName = "sed";
                                    emailAddress = "exercitationem";
                                    phoneNumber = "ratione";
                                }};
                                rejectedAt = "nesciunt";
                                scheduleType = "tempora";
                            }};
                            shipmentDetails = new OrderFulfillmentShipmentDetails() {{
                                cancelReason = "nesciunt";
                                canceledAt = "asperiores";
                                carrier = "nobis";
                                expectedShippedAt = "doloremque";
                                failedAt = "similique";
                                failureReason = "modi";
                                inProgressAt = "itaque";
                                packagedAt = "autem";
                                placedAt = "autem";
                                recipient = new OrderFulfillmentRecipient() {{
                                    address = new Address() {{
                                        addressLine1 = "earum";
                                        addressLine2 = "culpa";
                                        addressLine3 = "tempora";
                                        administrativeDistrictLevel1 = "nihil";
                                        administrativeDistrictLevel2 = "exercitationem";
                                        administrativeDistrictLevel3 = "molestiae";
                                        country = "Lithuania";
                                        firstName = "Ruby";
                                        lastName = "Bergstrom";
                                        locality = "voluptate";
                                        organization = "et";
                                        postalCode = "16205-0597";
                                        sublocality = "aliquid";
                                        sublocality2 = "in";
                                        sublocality3 = "cupiditate";
                                    }};
                                    customerId = "facilis";
                                    displayName = "eum";
                                    emailAddress = "facilis";
                                    phoneNumber = "quia";
                                }};
                                shippedAt = "delectus";
                                shippingNote = "sunt";
                                shippingType = "veniam";
                                trackingNumber = "dolorem";
                                trackingUrl = "corporis";
                            }};
                            state = "omnis";
                            type = "quidem";
                            uid = "corrupti";
                        }}),
                    }};
                    id = "55d015b6-2c8b-483a-b8a8-a88c144200c2";
                    lineItems = new org.openapis.openapi.models.shared.OrderLineItem[]{{
                        add(new OrderLineItem("ad") {{
                            appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                add(new OrderLineItemAppliedDiscount("saepe") {{
                                    appliedMoney = new Money() {{
                                        amount = 920481L;
                                        currency = "nam";
                                    }};
                                    discountUid = "et";
                                    uid = "similique";
                                }}),
                                add(new OrderLineItemAppliedDiscount("laudantium") {{
                                    appliedMoney = new Money() {{
                                        amount = 68620L;
                                        currency = "repudiandae";
                                    }};
                                    discountUid = "impedit";
                                    uid = "repellat";
                                }}),
                                add(new OrderLineItemAppliedDiscount("modi") {{
                                    appliedMoney = new Money() {{
                                        amount = 777889L;
                                        currency = "adipisci";
                                    }};
                                    discountUid = "eius";
                                    uid = "cupiditate";
                                }}),
                            }};
                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                add(new OrderLineItemAppliedTax("id") {{
                                    appliedMoney = new Money() {{
                                        amount = 688217L;
                                        currency = "quidem";
                                    }};
                                    taxUid = "dolorum";
                                    uid = "ducimus";
                                }}),
                                add(new OrderLineItemAppliedTax("expedita") {{
                                    appliedMoney = new Money() {{
                                        amount = 35980L;
                                        currency = "ullam";
                                    }};
                                    taxUid = "deserunt";
                                    uid = "totam";
                                }}),
                            }};
                            basePriceMoney = new Money() {{
                                amount = 301497L;
                                currency = "deserunt";
                            }};
                            catalogObjectId = "perspiciatis";
                            catalogVersion = 914673L;
                            grossSalesMoney = new Money() {{
                                amount = 772402L;
                                currency = "veniam";
                            }};
                            itemType = "rerum";
                            metadata = new java.util.HashMap<String, String>() {{
                                put("eum", "praesentium");
                            }};
                            modifiers = new org.openapis.openapi.models.shared.OrderLineItemModifier[]{{
                                add(new OrderLineItemModifier() {{
                                    basePriceMoney = new Money() {{
                                        amount = 806850L;
                                        currency = "impedit";
                                    }};
                                    catalogObjectId = "fuga";
                                    catalogVersion = 232853L;
                                    name = "Carmen Cummings";
                                    totalPriceMoney = new Money() {{
                                        amount = 494136L;
                                        currency = "iure";
                                    }};
                                    uid = "sit";
                                }}),
                                add(new OrderLineItemModifier() {{
                                    basePriceMoney = new Money() {{
                                        amount = 897352L;
                                        currency = "occaecati";
                                    }};
                                    catalogObjectId = "vel";
                                    catalogVersion = 417741L;
                                    name = "Sergio Koss II";
                                    totalPriceMoney = new Money() {{
                                        amount = 261243L;
                                        currency = "beatae";
                                    }};
                                    uid = "aut";
                                }}),
                                add(new OrderLineItemModifier() {{
                                    basePriceMoney = new Money() {{
                                        amount = 206518L;
                                        currency = "nesciunt";
                                    }};
                                    catalogObjectId = "aliquam";
                                    catalogVersion = 460782L;
                                    name = "Fernando Lowe";
                                    totalPriceMoney = new Money() {{
                                        amount = 139332L;
                                        currency = "ut";
                                    }};
                                    uid = "cupiditate";
                                }}),
                            }};
                            name = "Evelyn Gutkowski";
                            note = "animi";
                            pricingBlocklists = new OrderLineItemPricingBlocklists() {{
                                blockedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount[]{{
                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                        discountCatalogObjectId = "excepturi";
                                        discountUid = "voluptates";
                                        uid = "veniam";
                                    }}),
                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                        discountCatalogObjectId = "perspiciatis";
                                        discountUid = "laborum";
                                        uid = "incidunt";
                                    }}),
                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                        discountCatalogObjectId = "fuga";
                                        discountUid = "a";
                                        uid = "ipsum";
                                    }}),
                                }};
                                blockedTaxes = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax[]{{
                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                        taxCatalogObjectId = "nisi";
                                        taxUid = "aliquid";
                                        uid = "ex";
                                    }}),
                                }};
                            }};
                            quantity = "dolore";
                            quantityUnit = new OrderQuantityUnit() {{
                                catalogVersion = 881052L;
                                measurementUnit = new MeasurementUnit() {{
                                    areaUnit = "deserunt";
                                    customUnit = new MeasurementUnitCustom("doloribus", "quasi") {{
                                        abbreviation = "mollitia";
                                        name = "Luz Will";
                                    }};
                                    genericUnit = "quaerat";
                                    lengthUnit = "recusandae";
                                    timeUnit = "praesentium";
                                    type = "quod";
                                    volumeUnit = "beatae";
                                    weightUnit = "expedita";
                                }};
                                precision = 247207L;
                            }};
                            totalDiscountMoney = new Money() {{
                                amount = 362786L;
                                currency = "magni";
                            }};
                            totalMoney = new Money() {{
                                amount = 679557L;
                                currency = "porro";
                            }};
                            totalTaxMoney = new Money() {{
                                amount = 810667L;
                                currency = "recusandae";
                            }};
                            uid = "repellendus";
                            variationName = "dolorum";
                            variationTotalPriceMoney = new Money() {{
                                amount = 805776L;
                                currency = "minus";
                            }};
                        }}),
                        add(new OrderLineItem("deleniti") {{
                            appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                add(new OrderLineItemAppliedDiscount("numquam") {{
                                    appliedMoney = new Money() {{
                                        amount = 185013L;
                                        currency = "reprehenderit";
                                    }};
                                    discountUid = "atque";
                                    uid = "architecto";
                                }}),
                            }};
                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                add(new OrderLineItemAppliedTax("vel") {{
                                    appliedMoney = new Money() {{
                                        amount = 784985L;
                                        currency = "fuga";
                                    }};
                                    taxUid = "aperiam";
                                    uid = "architecto";
                                }}),
                                add(new OrderLineItemAppliedTax("repudiandae") {{
                                    appliedMoney = new Money() {{
                                        amount = 737971L;
                                        currency = "quo";
                                    }};
                                    taxUid = "aliquam";
                                    uid = "inventore";
                                }}),
                                add(new OrderLineItemAppliedTax("explicabo") {{
                                    appliedMoney = new Money() {{
                                        amount = 686979L;
                                        currency = "quae";
                                    }};
                                    taxUid = "consectetur";
                                    uid = "quaerat";
                                }}),
                                add(new OrderLineItemAppliedTax("tempora") {{
                                    appliedMoney = new Money() {{
                                        amount = 852547L;
                                        currency = "quaerat";
                                    }};
                                    taxUid = "architecto";
                                    uid = "perferendis";
                                }}),
                            }};
                            basePriceMoney = new Money() {{
                                amount = 630023L;
                                currency = "dolores";
                            }};
                            catalogObjectId = "veniam";
                            catalogVersion = 892527L;
                            grossSalesMoney = new Money() {{
                                amount = 993712L;
                                currency = "iusto";
                            }};
                            itemType = "quasi";
                            metadata = new java.util.HashMap<String, String>() {{
                                put("debitis", "minima");
                                put("ducimus", "est");
                                put("dicta", "architecto");
                                put("fugiat", "eum");
                            }};
                            modifiers = new org.openapis.openapi.models.shared.OrderLineItemModifier[]{{
                                add(new OrderLineItemModifier() {{
                                    basePriceMoney = new Money() {{
                                        amount = 257831L;
                                        currency = "deserunt";
                                    }};
                                    catalogObjectId = "tempora";
                                    catalogVersion = 245217L;
                                    name = "Arlene Howell";
                                    totalPriceMoney = new Money() {{
                                        amount = 919676L;
                                        currency = "fuga";
                                    }};
                                    uid = "ut";
                                }}),
                            }};
                            name = "Lester Koch";
                            note = "nostrum";
                            pricingBlocklists = new OrderLineItemPricingBlocklists() {{
                                blockedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount[]{{
                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                        discountCatalogObjectId = "sunt";
                                        discountUid = "rerum";
                                        uid = "corrupti";
                                    }}),
                                }};
                                blockedTaxes = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax[]{{
                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                        taxCatalogObjectId = "quas";
                                        taxUid = "similique";
                                        uid = "error";
                                    }}),
                                }};
                            }};
                            quantity = "doloremque";
                            quantityUnit = new OrderQuantityUnit() {{
                                catalogVersion = 230352L;
                                measurementUnit = new MeasurementUnit() {{
                                    areaUnit = "accusantium";
                                    customUnit = new MeasurementUnitCustom("eligendi", "dignissimos") {{
                                        abbreviation = "eum";
                                        name = "Mr. Michelle Zemlak";
                                    }};
                                    genericUnit = "sint";
                                    lengthUnit = "quidem";
                                    timeUnit = "ut";
                                    type = "optio";
                                    volumeUnit = "cumque";
                                    weightUnit = "ex";
                                }};
                                precision = 295377L;
                            }};
                            totalDiscountMoney = new Money() {{
                                amount = 755607L;
                                currency = "magni";
                            }};
                            totalMoney = new Money() {{
                                amount = 727604L;
                                currency = "sequi";
                            }};
                            totalTaxMoney = new Money() {{
                                amount = 632474L;
                                currency = "ratione";
                            }};
                            uid = "odit";
                            variationName = "optio";
                            variationTotalPriceMoney = new Money() {{
                                amount = 287244L;
                                currency = "voluptatum";
                            }};
                        }}),
                        add(new OrderLineItem("error") {{
                            appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                add(new OrderLineItemAppliedDiscount("reiciendis") {{
                                    appliedMoney = new Money() {{
                                        amount = 813932L;
                                        currency = "debitis";
                                    }};
                                    discountUid = "ex";
                                    uid = "magni";
                                }}),
                                add(new OrderLineItemAppliedDiscount("exercitationem") {{
                                    appliedMoney = new Money() {{
                                        amount = 422353L;
                                        currency = "est";
                                    }};
                                    discountUid = "dolorum";
                                    uid = "quaerat";
                                }}),
                                add(new OrderLineItemAppliedDiscount("eveniet") {{
                                    appliedMoney = new Money() {{
                                        amount = 561434L;
                                        currency = "id";
                                    }};
                                    discountUid = "voluptas";
                                    uid = "corporis";
                                }}),
                            }};
                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                add(new OrderLineItemAppliedTax("quasi") {{
                                    appliedMoney = new Money() {{
                                        amount = 48347L;
                                        currency = "deleniti";
                                    }};
                                    taxUid = "amet";
                                    uid = "aut";
                                }}),
                            }};
                            basePriceMoney = new Money() {{
                                amount = 385079L;
                                currency = "maxime";
                            }};
                            catalogObjectId = "fuga";
                            catalogVersion = 191079L;
                            grossSalesMoney = new Money() {{
                                amount = 264392L;
                                currency = "soluta";
                            }};
                            itemType = "libero";
                            metadata = new java.util.HashMap<String, String>() {{
                                put("dignissimos", "repellendus");
                                put("labore", "repellat");
                                put("eum", "quia");
                            }};
                            modifiers = new org.openapis.openapi.models.shared.OrderLineItemModifier[]{{
                                add(new OrderLineItemModifier() {{
                                    basePriceMoney = new Money() {{
                                        amount = 150417L;
                                        currency = "iusto";
                                    }};
                                    catalogObjectId = "culpa";
                                    catalogVersion = 409610L;
                                    name = "Mrs. Georgia Schumm III";
                                    totalPriceMoney = new Money() {{
                                        amount = 131466L;
                                        currency = "sint";
                                    }};
                                    uid = "quaerat";
                                }}),
                            }};
                            name = "Doris Gutkowski";
                            note = "pariatur";
                            pricingBlocklists = new OrderLineItemPricingBlocklists() {{
                                blockedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount[]{{
                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                        discountCatalogObjectId = "cupiditate";
                                        discountUid = "cumque";
                                        uid = "similique";
                                    }}),
                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                        discountCatalogObjectId = "omnis";
                                        discountUid = "sapiente";
                                        uid = "consectetur";
                                    }}),
                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                        discountCatalogObjectId = "quos";
                                        discountUid = "quidem";
                                        uid = "at";
                                    }}),
                                }};
                                blockedTaxes = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax[]{{
                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                        taxCatalogObjectId = "libero";
                                        taxUid = "vero";
                                        uid = "quos";
                                    }}),
                                }};
                            }};
                            quantity = "in";
                            quantityUnit = new OrderQuantityUnit() {{
                                catalogVersion = 511447L;
                                measurementUnit = new MeasurementUnit() {{
                                    areaUnit = "molestiae";
                                    customUnit = new MeasurementUnitCustom("dolore", "provident") {{
                                        abbreviation = "voluptatem";
                                        name = "Valerie Morissette";
                                    }};
                                    genericUnit = "est";
                                    lengthUnit = "mollitia";
                                    timeUnit = "laudantium";
                                    type = "labore";
                                    volumeUnit = "ex";
                                    weightUnit = "minima";
                                }};
                                precision = 653043L;
                            }};
                            totalDiscountMoney = new Money() {{
                                amount = 196355L;
                                currency = "eos";
                            }};
                            totalMoney = new Money() {{
                                amount = 514602L;
                                currency = "adipisci";
                            }};
                            totalTaxMoney = new Money() {{
                                amount = 147974L;
                                currency = "iusto";
                            }};
                            uid = "natus";
                            variationName = "facilis";
                            variationTotalPriceMoney = new Money() {{
                                amount = 465310L;
                                currency = "beatae";
                            }};
                        }}),
                        add(new OrderLineItem("distinctio") {{
                            appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                add(new OrderLineItemAppliedDiscount("voluptas") {{
                                    appliedMoney = new Money() {{
                                        amount = 70720L;
                                        currency = "eligendi";
                                    }};
                                    discountUid = "accusamus";
                                    uid = "officia";
                                }}),
                                add(new OrderLineItemAppliedDiscount("suscipit") {{
                                    appliedMoney = new Money() {{
                                        amount = 442932L;
                                        currency = "neque";
                                    }};
                                    discountUid = "facere";
                                    uid = "blanditiis";
                                }}),
                                add(new OrderLineItemAppliedDiscount("quis") {{
                                    appliedMoney = new Money() {{
                                        amount = 929821L;
                                        currency = "nesciunt";
                                    }};
                                    discountUid = "quidem";
                                    uid = "sequi";
                                }}),
                                add(new OrderLineItemAppliedDiscount("adipisci") {{
                                    appliedMoney = new Money() {{
                                        amount = 912739L;
                                        currency = "aliquam";
                                    }};
                                    discountUid = "perspiciatis";
                                    uid = "id";
                                }}),
                            }};
                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                add(new OrderLineItemAppliedTax("quas") {{
                                    appliedMoney = new Money() {{
                                        amount = 232175L;
                                        currency = "nemo";
                                    }};
                                    taxUid = "iusto";
                                    uid = "iusto";
                                }}),
                            }};
                            basePriceMoney = new Money() {{
                                amount = 760518L;
                                currency = "necessitatibus";
                            }};
                            catalogObjectId = "minima";
                            catalogVersion = 255661L;
                            grossSalesMoney = new Money() {{
                                amount = 792152L;
                                currency = "id";
                            }};
                            itemType = "porro";
                            metadata = new java.util.HashMap<String, String>() {{
                                put("perferendis", "accusamus");
                                put("ratione", "vero");
                                put("mollitia", "sint");
                            }};
                            modifiers = new org.openapis.openapi.models.shared.OrderLineItemModifier[]{{
                                add(new OrderLineItemModifier() {{
                                    basePriceMoney = new Money() {{
                                        amount = 326482L;
                                        currency = "voluptatem";
                                    }};
                                    catalogObjectId = "labore";
                                    catalogVersion = 359649L;
                                    name = "Julius Schmeler";
                                    totalPriceMoney = new Money() {{
                                        amount = 206874L;
                                        currency = "nam";
                                    }};
                                    uid = "sed";
                                }}),
                                add(new OrderLineItemModifier() {{
                                    basePriceMoney = new Money() {{
                                        amount = 94986L;
                                        currency = "nemo";
                                    }};
                                    catalogObjectId = "sunt";
                                    catalogVersion = 550913L;
                                    name = "Genevieve Reilly";
                                    totalPriceMoney = new Money() {{
                                        amount = 228441L;
                                        currency = "laborum";
                                    }};
                                    uid = "alias";
                                }}),
                            }};
                            name = "Mrs. Tina Johnston";
                            note = "ab";
                            pricingBlocklists = new OrderLineItemPricingBlocklists() {{
                                blockedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount[]{{
                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                        discountCatalogObjectId = "assumenda";
                                        discountUid = "inventore";
                                        uid = "nostrum";
                                    }}),
                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                        discountCatalogObjectId = "ex";
                                        discountUid = "totam";
                                        uid = "magni";
                                    }}),
                                }};
                                blockedTaxes = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax[]{{
                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                        taxCatalogObjectId = "occaecati";
                                        taxUid = "repudiandae";
                                        uid = "voluptas";
                                    }}),
                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                        taxCatalogObjectId = "architecto";
                                        taxUid = "officia";
                                        uid = "reiciendis";
                                    }}),
                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                        taxCatalogObjectId = "quo";
                                        taxUid = "in";
                                        uid = "veritatis";
                                    }}),
                                }};
                            }};
                            quantity = "totam";
                            quantityUnit = new OrderQuantityUnit() {{
                                catalogVersion = 382479L;
                                measurementUnit = new MeasurementUnit() {{
                                    areaUnit = "asperiores";
                                    customUnit = new MeasurementUnitCustom("nihil", "dolor") {{
                                        abbreviation = "voluptatibus";
                                        name = "Patricia Rice";
                                    }};
                                    genericUnit = "possimus";
                                    lengthUnit = "delectus";
                                    timeUnit = "labore";
                                    type = "accusantium";
                                    volumeUnit = "quo";
                                    weightUnit = "id";
                                }};
                                precision = 2200L;
                            }};
                            totalDiscountMoney = new Money() {{
                                amount = 873549L;
                                currency = "dignissimos";
                            }};
                            totalMoney = new Money() {{
                                amount = 400351L;
                                currency = "ad";
                            }};
                            totalTaxMoney = new Money() {{
                                amount = 443244L;
                                currency = "placeat";
                            }};
                            uid = "quae";
                            variationName = "ex";
                            variationTotalPriceMoney = new Money() {{
                                amount = 263290L;
                                currency = "ab";
                            }};
                        }}),
                    }};
                    metadata = new java.util.HashMap<String, String>() {{
                        put("maiores", "aut");
                        put("nostrum", "veniam");
                        put("fugit", "ducimus");
                    }};
                    netAmounts = new OrderMoneyAmounts() {{
                        discountMoney = new Money() {{
                            amount = 92895L;
                            currency = "cum";
                        }};;
                        serviceChargeMoney = new Money() {{
                            amount = 180369L;
                            currency = "quaerat";
                        }};;
                        taxMoney = new Money() {{
                            amount = 111040L;
                            currency = "architecto";
                        }};;
                        tipMoney = new Money() {{
                            amount = 829841L;
                            currency = "assumenda";
                        }};;
                        totalMoney = new Money() {{
                            amount = 383421L;
                            currency = "consequatur";
                        }};;
                    }};;
                    pricingOptions = new OrderPricingOptions() {{
                        autoApplyDiscounts = false;
                        autoApplyTaxes = false;
                    }};;
                    referenceId = "aliquid";
                    refunds = new org.openapis.openapi.models.shared.Refund[]{{
                        add(new Refund(                new Money() {{
                                            amount = 415782L;
                                            currency = "quibusdam";
                                        }};, "cumque", "libero", "expedita", "reprehenderit", "nulla", "reiciendis") {{
                            additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 499990L;
                                                    currency = "fugit";
                                                }};, "quidem") {{
                                    amountMoney = new Money() {{
                                        amount = 106497L;
                                        currency = "soluta";
                                    }};
                                    description = "sunt";
                                    locationId = "rem";
                                    receivableId = "magni";
                                }}),
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 125769L;
                                                    currency = "vitae";
                                                }};, "ex") {{
                                    amountMoney = new Money() {{
                                        amount = 794779L;
                                        currency = "cupiditate";
                                    }};
                                    description = "placeat";
                                    locationId = "ratione";
                                    receivableId = "magni";
                                }}),
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 535663L;
                                                    currency = "voluptatem";
                                                }};, "reiciendis") {{
                                    amountMoney = new Money() {{
                                        amount = 572481L;
                                        currency = "dignissimos";
                                    }};
                                    description = "rerum";
                                    locationId = "inventore";
                                    receivableId = "quas";
                                }}),
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 569578L;
                                                    currency = "neque";
                                                }};, "maxime") {{
                                    amountMoney = new Money() {{
                                        amount = 766089L;
                                        currency = "rerum";
                                    }};
                                    description = "expedita";
                                    locationId = "odit";
                                    receivableId = "distinctio";
                                }}),
                            }};
                            amountMoney = new Money() {{
                                amount = 70282L;
                                currency = "nostrum";
                            }};
                            createdAt = "repellat";
                            id = "670bd178-4831-4653-aeb3-b6e241c31099";
                            locationId = "deleniti";
                            processingFeeMoney = new Money() {{
                                amount = 222282L;
                                currency = "eum";
                            }};
                            reason = "eum";
                            status = "dolorem";
                            tenderId = "placeat";
                            transactionId = "vel";
                        }}),
                        add(new Refund(                new Money() {{
                                            amount = 24994L;
                                            currency = "esse";
                                        }};, "accusamus", "ut", "quae", "dolore", "molestias", "maiores") {{
                            additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 520852L;
                                                    currency = "distinctio";
                                                }};, "modi") {{
                                    amountMoney = new Money() {{
                                        amount = 785292L;
                                        currency = "soluta";
                                    }};
                                    description = "aperiam";
                                    locationId = "molestias";
                                    receivableId = "nobis";
                                }}),
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 115455L;
                                                    currency = "adipisci";
                                                }};, "molestiae") {{
                                    amountMoney = new Money() {{
                                        amount = 49220L;
                                        currency = "praesentium";
                                    }};
                                    description = "recusandae";
                                    locationId = "eaque";
                                    receivableId = "nihil";
                                }}),
                            }};
                            amountMoney = new Money() {{
                                amount = 448226L;
                                currency = "magnam";
                            }};
                            createdAt = "repellendus";
                            id = "e4fee101-d978-40a1-8c47-b95040d6c8b2";
                            locationId = "similique";
                            processingFeeMoney = new Money() {{
                                amount = 371580L;
                                currency = "a";
                            }};
                            reason = "alias";
                            status = "perferendis";
                            tenderId = "aspernatur";
                            transactionId = "sed";
                        }}),
                        add(new Refund(                new Money() {{
                                            amount = 303087L;
                                            currency = "necessitatibus";
                                        }};, "tempore", "provident", "recusandae", "numquam", "cumque", "a") {{
                            additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 847943L;
                                                    currency = "consequuntur";
                                                }};, "occaecati") {{
                                    amountMoney = new Money() {{
                                        amount = 44220L;
                                        currency = "alias";
                                    }};
                                    description = "sit";
                                    locationId = "iste";
                                    receivableId = "earum";
                                }}),
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 697783L;
                                                    currency = "aliquam";
                                                }};, "fuga") {{
                                    amountMoney = new Money() {{
                                        amount = 42977L;
                                        currency = "qui";
                                    }};
                                    description = "esse";
                                    locationId = "quos";
                                    receivableId = "accusamus";
                                }}),
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 121414L;
                                                    currency = "iure";
                                                }};, "ab") {{
                                    amountMoney = new Money() {{
                                        amount = 932252L;
                                        currency = "iste";
                                    }};
                                    description = "pariatur";
                                    locationId = "suscipit";
                                    receivableId = "ut";
                                }}),
                            }};
                            amountMoney = new Money() {{
                                amount = 923738L;
                                currency = "iste";
                            }};
                            createdAt = "sunt";
                            id = "500323b2-c09b-4924-b71f-5669e5b7ec76";
                            locationId = "magni";
                            processingFeeMoney = new Money() {{
                                amount = 437489L;
                                currency = "ea";
                            }};
                            reason = "labore";
                            status = "perspiciatis";
                            tenderId = "possimus";
                            transactionId = "atque";
                        }}),
                        add(new Refund(                new Money() {{
                                            amount = 789055L;
                                            currency = "asperiores";
                                        }};, "praesentium", "accusamus", "inventore", "ab", "dolore", "amet") {{
                            additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 25635L;
                                                    currency = "expedita";
                                                }};, "rem") {{
                                    amountMoney = new Money() {{
                                        amount = 173926L;
                                        currency = "odit";
                                    }};
                                    description = "molestiae";
                                    locationId = "ex";
                                    receivableId = "officiis";
                                }}),
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 861675L;
                                                    currency = "aliquid";
                                                }};, "asperiores") {{
                                    amountMoney = new Money() {{
                                        amount = 535382L;
                                        currency = "repellat";
                                    }};
                                    description = "harum";
                                    locationId = "atque";
                                    receivableId = "iure";
                                }}),
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 546767L;
                                                    currency = "temporibus";
                                                }};, "libero") {{
                                    amountMoney = new Money() {{
                                        amount = 627838L;
                                        currency = "veniam";
                                    }};
                                    description = "cum";
                                    locationId = "vel";
                                    receivableId = "earum";
                                }}),
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 502275L;
                                                    currency = "nesciunt";
                                                }};, "nam") {{
                                    amountMoney = new Money() {{
                                        amount = 960693L;
                                        currency = "praesentium";
                                    }};
                                    description = "dicta";
                                    locationId = "qui";
                                    receivableId = "asperiores";
                                }}),
                            }};
                            amountMoney = new Money() {{
                                amount = 80904L;
                                currency = "eligendi";
                            }};
                            createdAt = "animi";
                            id = "6a9ffc56-1929-4cca-9560-a1395918da1d";
                            locationId = "magnam";
                            processingFeeMoney = new Money() {{
                                amount = 541662L;
                                currency = "recusandae";
                            }};
                            reason = "nihil";
                            status = "quas";
                            tenderId = "officiis";
                            transactionId = "ipsum";
                        }}),
                    }};
                    returnAmounts = new OrderMoneyAmounts() {{
                        discountMoney = new Money() {{
                            amount = 858838L;
                            currency = "officia";
                        }};;
                        serviceChargeMoney = new Money() {{
                            amount = 618177L;
                            currency = "nesciunt";
                        }};;
                        taxMoney = new Money() {{
                            amount = 52164L;
                            currency = "deleniti";
                        }};;
                        tipMoney = new Money() {{
                            amount = 749851L;
                            currency = "magni";
                        }};;
                        totalMoney = new Money() {{
                            amount = 468252L;
                            currency = "laborum";
                        }};;
                    }};;
                    returns = new org.openapis.openapi.models.shared.OrderReturn[]{{
                        add(new OrderReturn() {{
                            returnAmounts = new OrderMoneyAmounts() {{
                                discountMoney = new Money() {{
                                    amount = 531236L;
                                    currency = "animi";
                                }};
                                serviceChargeMoney = new Money() {{
                                    amount = 969433L;
                                    currency = "qui";
                                }};
                                taxMoney = new Money() {{
                                    amount = 133813L;
                                    currency = "et";
                                }};
                                tipMoney = new Money() {{
                                    amount = 530721L;
                                    currency = "eius";
                                }};
                                totalMoney = new Money() {{
                                    amount = 311724L;
                                    currency = "amet";
                                }};
                            }};
                            returnDiscounts = new org.openapis.openapi.models.shared.OrderReturnDiscount[]{{
                                add(new OrderReturnDiscount() {{
                                    amountMoney = new Money() {{
                                        amount = 729673L;
                                        currency = "nesciunt";
                                    }};
                                    appliedMoney = new Money() {{
                                        amount = 848008L;
                                        currency = "recusandae";
                                    }};
                                    catalogObjectId = "deleniti";
                                    catalogVersion = 437922L;
                                    name = "Natalie Romaguera";
                                    percentage = "eveniet";
                                    scope = "incidunt";
                                    sourceDiscountUid = "dignissimos";
                                    type = "accusantium";
                                    uid = "impedit";
                                }}),
                                add(new OrderReturnDiscount() {{
                                    amountMoney = new Money() {{
                                        amount = 855106L;
                                        currency = "fugit";
                                    }};
                                    appliedMoney = new Money() {{
                                        amount = 86098L;
                                        currency = "non";
                                    }};
                                    catalogObjectId = "reprehenderit";
                                    catalogVersion = 692991L;
                                    name = "Mrs. Kate Hoeger";
                                    percentage = "placeat";
                                    scope = "voluptatibus";
                                    sourceDiscountUid = "ipsa";
                                    type = "et";
                                    uid = "quibusdam";
                                }}),
                                add(new OrderReturnDiscount() {{
                                    amountMoney = new Money() {{
                                        amount = 42895L;
                                        currency = "vero";
                                    }};
                                    appliedMoney = new Money() {{
                                        amount = 531754L;
                                        currency = "eligendi";
                                    }};
                                    catalogObjectId = "dolor";
                                    catalogVersion = 635479L;
                                    name = "Shelley Mosciski";
                                    percentage = "quidem";
                                    scope = "repellat";
                                    sourceDiscountUid = "molestias";
                                    type = "amet";
                                    uid = "veniam";
                                }}),
                            }};
                            returnLineItems = new org.openapis.openapi.models.shared.OrderReturnLineItem[]{{
                                add(new OrderReturnLineItem("nisi") {{
                                    appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                        add(new OrderLineItemAppliedDiscount("repellat") {{
                                            appliedMoney = new Money() {{
                                                amount = 875223L;
                                                currency = "provident";
                                            }};
                                            discountUid = "iure";
                                            uid = "incidunt";
                                        }}),
                                        add(new OrderLineItemAppliedDiscount("voluptates") {{
                                            appliedMoney = new Money() {{
                                                amount = 630983L;
                                                currency = "ut";
                                            }};
                                            discountUid = "tempore";
                                            uid = "et";
                                        }}),
                                        add(new OrderLineItemAppliedDiscount("molestiae") {{
                                            appliedMoney = new Money() {{
                                                amount = 567195L;
                                                currency = "placeat";
                                            }};
                                            discountUid = "consequatur";
                                            uid = "natus";
                                        }}),
                                        add(new OrderLineItemAppliedDiscount("fugit") {{
                                            appliedMoney = new Money() {{
                                                amount = 881035L;
                                                currency = "temporibus";
                                            }};
                                            discountUid = "animi";
                                            uid = "autem";
                                        }}),
                                    }};
                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                        add(new OrderLineItemAppliedTax("beatae") {{
                                            appliedMoney = new Money() {{
                                                amount = 301051L;
                                                currency = "numquam";
                                            }};
                                            taxUid = "fugit";
                                            uid = "voluptates";
                                        }}),
                                    }};
                                    basePriceMoney = new Money() {{
                                        amount = 662213L;
                                        currency = "unde";
                                    }};
                                    catalogObjectId = "consequuntur";
                                    catalogVersion = 190873L;
                                    grossReturnMoney = new Money() {{
                                        amount = 463193L;
                                        currency = "recusandae";
                                    }};
                                    itemType = "iste";
                                    name = "Clayton Funk";
                                    note = "consequatur";
                                    quantity = "facilis";
                                    quantityUnit = new OrderQuantityUnit() {{
                                        catalogVersion = 281064L;
                                        measurementUnit = new MeasurementUnit() {{
                                            areaUnit = "nihil";
                                            customUnit = new MeasurementUnitCustom("dolorem", "eligendi") {{
                                                abbreviation = "sint";
                                                name = "Ms. Alberto Marks";
                                            }};
                                            genericUnit = "veritatis";
                                            lengthUnit = "deleniti";
                                            timeUnit = "cumque";
                                            type = "officia";
                                            volumeUnit = "rem";
                                            weightUnit = "facere";
                                        }};
                                        precision = 426502L;
                                    }};
                                    returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                        add(new OrderReturnLineItemModifier() {{
                                            basePriceMoney = new Money() {{
                                                amount = 781600L;
                                                currency = "enim";
                                            }};
                                            catalogObjectId = "ex";
                                            catalogVersion = 523250L;
                                            name = "Benjamin Bruen";
                                            sourceModifierUid = "animi";
                                            totalPriceMoney = new Money() {{
                                                amount = 164363L;
                                                currency = "doloremque";
                                            }};
                                            uid = "magni";
                                        }}),
                                        add(new OrderReturnLineItemModifier() {{
                                            basePriceMoney = new Money() {{
                                                amount = 850L;
                                                currency = "reprehenderit";
                                            }};
                                            catalogObjectId = "officiis";
                                            catalogVersion = 258598L;
                                            name = "Mrs. Donnie Ullrich";
                                            sourceModifierUid = "eligendi";
                                            totalPriceMoney = new Money() {{
                                                amount = 814966L;
                                                currency = "esse";
                                            }};
                                            uid = "tenetur";
                                        }}),
                                        add(new OrderReturnLineItemModifier() {{
                                            basePriceMoney = new Money() {{
                                                amount = 70943L;
                                                currency = "cum";
                                            }};
                                            catalogObjectId = "minus";
                                            catalogVersion = 187238L;
                                            name = "Ernesto Reichert";
                                            sourceModifierUid = "dignissimos";
                                            totalPriceMoney = new Money() {{
                                                amount = 992118L;
                                                currency = "optio";
                                            }};
                                            uid = "eos";
                                        }}),
                                    }};
                                    sourceLineItemUid = "impedit";
                                    totalDiscountMoney = new Money() {{
                                        amount = 795413L;
                                        currency = "facilis";
                                    }};
                                    totalMoney = new Money() {{
                                        amount = 659824L;
                                        currency = "numquam";
                                    }};
                                    totalTaxMoney = new Money() {{
                                        amount = 726468L;
                                        currency = "recusandae";
                                    }};
                                    uid = "asperiores";
                                    variationName = "aperiam";
                                    variationTotalPriceMoney = new Money() {{
                                        amount = 836620L;
                                        currency = "reiciendis";
                                    }};
                                }}),
                                add(new OrderReturnLineItem("possimus") {{
                                    appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                        add(new OrderLineItemAppliedDiscount("facilis") {{
                                            appliedMoney = new Money() {{
                                                amount = 937466L;
                                                currency = "mollitia";
                                            }};
                                            discountUid = "vero";
                                            uid = "repellendus";
                                        }}),
                                        add(new OrderLineItemAppliedDiscount("consequatur") {{
                                            appliedMoney = new Money() {{
                                                amount = 162548L;
                                                currency = "earum";
                                            }};
                                            discountUid = "necessitatibus";
                                            uid = "quam";
                                        }}),
                                        add(new OrderLineItemAppliedDiscount("excepturi") {{
                                            appliedMoney = new Money() {{
                                                amount = 713256L;
                                                currency = "itaque";
                                            }};
                                            discountUid = "alias";
                                            uid = "ea";
                                        }}),
                                    }};
                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                        add(new OrderLineItemAppliedTax("pariatur") {{
                                            appliedMoney = new Money() {{
                                                amount = 723689L;
                                                currency = "consectetur";
                                            }};
                                            taxUid = "suscipit";
                                            uid = "est";
                                        }}),
                                        add(new OrderLineItemAppliedTax("sit") {{
                                            appliedMoney = new Money() {{
                                                amount = 849181L;
                                                currency = "odio";
                                            }};
                                            taxUid = "sit";
                                            uid = "ut";
                                        }}),
                                        add(new OrderLineItemAppliedTax("fuga") {{
                                            appliedMoney = new Money() {{
                                                amount = 549445L;
                                                currency = "accusantium";
                                            }};
                                            taxUid = "saepe";
                                            uid = "consequatur";
                                        }}),
                                        add(new OrderLineItemAppliedTax("dolor") {{
                                            appliedMoney = new Money() {{
                                                amount = 213543L;
                                                currency = "tenetur";
                                            }};
                                            taxUid = "maxime";
                                            uid = "in";
                                        }}),
                                    }};
                                    basePriceMoney = new Money() {{
                                        amount = 658480L;
                                        currency = "ullam";
                                    }};
                                    catalogObjectId = "similique";
                                    catalogVersion = 46574L;
                                    grossReturnMoney = new Money() {{
                                        amount = 239123L;
                                        currency = "aliquam";
                                    }};
                                    itemType = "soluta";
                                    name = "Rebecca Graham";
                                    note = "eos";
                                    quantity = "eius";
                                    quantityUnit = new OrderQuantityUnit() {{
                                        catalogVersion = 188343L;
                                        measurementUnit = new MeasurementUnit() {{
                                            areaUnit = "error";
                                            customUnit = new MeasurementUnitCustom("est", "eius") {{
                                                abbreviation = "maiores";
                                                name = "Rick Mayert";
                                            }};
                                            genericUnit = "ducimus";
                                            lengthUnit = "fugit";
                                            timeUnit = "libero";
                                            type = "esse";
                                            volumeUnit = "sit";
                                            weightUnit = "iste";
                                        }};
                                        precision = 676702L;
                                    }};
                                    returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                        add(new OrderReturnLineItemModifier() {{
                                            basePriceMoney = new Money() {{
                                                amount = 324393L;
                                                currency = "ipsum";
                                            }};
                                            catalogObjectId = "accusamus";
                                            catalogVersion = 179101L;
                                            name = "Mr. Victoria Bartell";
                                            sourceModifierUid = "rem";
                                            totalPriceMoney = new Money() {{
                                                amount = 320712L;
                                                currency = "ipsum";
                                            }};
                                            uid = "omnis";
                                        }}),
                                    }};
                                    sourceLineItemUid = "eligendi";
                                    totalDiscountMoney = new Money() {{
                                        amount = 903793L;
                                        currency = "ipsa";
                                    }};
                                    totalMoney = new Money() {{
                                        amount = 598239L;
                                        currency = "consectetur";
                                    }};
                                    totalTaxMoney = new Money() {{
                                        amount = 181016L;
                                        currency = "repellendus";
                                    }};
                                    uid = "vitae";
                                    variationName = "aperiam";
                                    variationTotalPriceMoney = new Money() {{
                                        amount = 654535L;
                                        currency = "quisquam";
                                    }};
                                }}),
                                add(new OrderReturnLineItem("ut") {{
                                    appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                        add(new OrderLineItemAppliedDiscount("quisquam") {{
                                            appliedMoney = new Money() {{
                                                amount = 322138L;
                                                currency = "quibusdam";
                                            }};
                                            discountUid = "praesentium";
                                            uid = "porro";
                                        }}),
                                    }};
                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                        add(new OrderLineItemAppliedTax("praesentium") {{
                                            appliedMoney = new Money() {{
                                                amount = 16891L;
                                                currency = "ex";
                                            }};
                                            taxUid = "quidem";
                                            uid = "esse";
                                        }}),
                                    }};
                                    basePriceMoney = new Money() {{
                                        amount = 393776L;
                                        currency = "libero";
                                    }};
                                    catalogObjectId = "dolorem";
                                    catalogVersion = 872371L;
                                    grossReturnMoney = new Money() {{
                                        amount = 226158L;
                                        currency = "ducimus";
                                    }};
                                    itemType = "harum";
                                    name = "Jeremy Ankunding";
                                    note = "quae";
                                    quantity = "doloribus";
                                    quantityUnit = new OrderQuantityUnit() {{
                                        catalogVersion = 218108L;
                                        measurementUnit = new MeasurementUnit() {{
                                            areaUnit = "dolore";
                                            customUnit = new MeasurementUnitCustom("voluptas", "reprehenderit") {{
                                                abbreviation = "accusantium";
                                                name = "Jean Fahey";
                                            }};
                                            genericUnit = "odio";
                                            lengthUnit = "dolorum";
                                            timeUnit = "eius";
                                            type = "praesentium";
                                            volumeUnit = "corporis";
                                            weightUnit = "inventore";
                                        }};
                                        precision = 590966L;
                                    }};
                                    returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                        add(new OrderReturnLineItemModifier() {{
                                            basePriceMoney = new Money() {{
                                                amount = 224524L;
                                                currency = "velit";
                                            }};
                                            catalogObjectId = "quam";
                                            catalogVersion = 279150L;
                                            name = "George Conn";
                                            sourceModifierUid = "deleniti";
                                            totalPriceMoney = new Money() {{
                                                amount = 552212L;
                                                currency = "qui";
                                            }};
                                            uid = "ex";
                                        }}),
                                        add(new OrderReturnLineItemModifier() {{
                                            basePriceMoney = new Money() {{
                                                amount = 723951L;
                                                currency = "distinctio";
                                            }};
                                            catalogObjectId = "aperiam";
                                            catalogVersion = 231322L;
                                            name = "Christian Ziemann";
                                            sourceModifierUid = "odit";
                                            totalPriceMoney = new Money() {{
                                                amount = 314732L;
                                                currency = "debitis";
                                            }};
                                            uid = "dolore";
                                        }}),
                                        add(new OrderReturnLineItemModifier() {{
                                            basePriceMoney = new Money() {{
                                                amount = 447246L;
                                                currency = "corrupti";
                                            }};
                                            catalogObjectId = "iusto";
                                            catalogVersion = 100075L;
                                            name = "Nelson Littel";
                                            sourceModifierUid = "in";
                                            totalPriceMoney = new Money() {{
                                                amount = 186640L;
                                                currency = "laborum";
                                            }};
                                            uid = "explicabo";
                                        }}),
                                        add(new OrderReturnLineItemModifier() {{
                                            basePriceMoney = new Money() {{
                                                amount = 829873L;
                                                currency = "eius";
                                            }};
                                            catalogObjectId = "est";
                                            catalogVersion = 997814L;
                                            name = "Diane Hansen";
                                            sourceModifierUid = "impedit";
                                            totalPriceMoney = new Money() {{
                                                amount = 167752L;
                                                currency = "repellendus";
                                            }};
                                            uid = "doloremque";
                                        }}),
                                    }};
                                    sourceLineItemUid = "sapiente";
                                    totalDiscountMoney = new Money() {{
                                        amount = 24987L;
                                        currency = "repellat";
                                    }};
                                    totalMoney = new Money() {{
                                        amount = 364424L;
                                        currency = "quos";
                                    }};
                                    totalTaxMoney = new Money() {{
                                        amount = 758860L;
                                        currency = "adipisci";
                                    }};
                                    uid = "libero";
                                    variationName = "totam";
                                    variationTotalPriceMoney = new Money() {{
                                        amount = 446283L;
                                        currency = "tempore";
                                    }};
                                }}),
                                add(new OrderReturnLineItem("voluptas") {{
                                    appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                        add(new OrderLineItemAppliedDiscount("aut") {{
                                            appliedMoney = new Money() {{
                                                amount = 50921L;
                                                currency = "tempora";
                                            }};
                                            discountUid = "aut";
                                            uid = "possimus";
                                        }}),
                                        add(new OrderLineItemAppliedDiscount("unde") {{
                                            appliedMoney = new Money() {{
                                                amount = 829115L;
                                                currency = "excepturi";
                                            }};
                                            discountUid = "quos";
                                            uid = "necessitatibus";
                                        }}),
                                    }};
                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                        add(new OrderLineItemAppliedTax("officiis") {{
                                            appliedMoney = new Money() {{
                                                amount = 513534L;
                                                currency = "eos";
                                            }};
                                            taxUid = "porro";
                                            uid = "nostrum";
                                        }}),
                                        add(new OrderLineItemAppliedTax("corporis") {{
                                            appliedMoney = new Money() {{
                                                amount = 238266L;
                                                currency = "alias";
                                            }};
                                            taxUid = "nisi";
                                            uid = "voluptatibus";
                                        }}),
                                        add(new OrderLineItemAppliedTax("nemo") {{
                                            appliedMoney = new Money() {{
                                                amount = 344121L;
                                                currency = "molestiae";
                                            }};
                                            taxUid = "aliquid";
                                            uid = "maiores";
                                        }}),
                                        add(new OrderLineItemAppliedTax("consequatur") {{
                                            appliedMoney = new Money() {{
                                                amount = 787052L;
                                                currency = "quibusdam";
                                            }};
                                            taxUid = "voluptates";
                                            uid = "cum";
                                        }}),
                                    }};
                                    basePriceMoney = new Money() {{
                                        amount = 178911L;
                                        currency = "totam";
                                    }};
                                    catalogObjectId = "ea";
                                    catalogVersion = 865272L;
                                    grossReturnMoney = new Money() {{
                                        amount = 2726L;
                                        currency = "distinctio";
                                    }};
                                    itemType = "maxime";
                                    name = "Ms. Sherry Pfeffer";
                                    note = "expedita";
                                    quantity = "ipsum";
                                    quantityUnit = new OrderQuantityUnit() {{
                                        catalogVersion = 475131L;
                                        measurementUnit = new MeasurementUnit() {{
                                            areaUnit = "corrupti";
                                            customUnit = new MeasurementUnitCustom("laudantium", "beatae") {{
                                                abbreviation = "sapiente";
                                                name = "Ollie Schamberger";
                                            }};
                                            genericUnit = "assumenda";
                                            lengthUnit = "quibusdam";
                                            timeUnit = "hic";
                                            type = "dignissimos";
                                            volumeUnit = "vero";
                                            weightUnit = "eaque";
                                        }};
                                        precision = 534764L;
                                    }};
                                    returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                        add(new OrderReturnLineItemModifier() {{
                                            basePriceMoney = new Money() {{
                                                amount = 995663L;
                                                currency = "iusto";
                                            }};
                                            catalogObjectId = "labore";
                                            catalogVersion = 891413L;
                                            name = "Wesley Hackett";
                                            sourceModifierUid = "aspernatur";
                                            totalPriceMoney = new Money() {{
                                                amount = 68943L;
                                                currency = "laboriosam";
                                            }};
                                            uid = "vero";
                                        }}),
                                        add(new OrderReturnLineItemModifier() {{
                                            basePriceMoney = new Money() {{
                                                amount = 539359L;
                                                currency = "unde";
                                            }};
                                            catalogObjectId = "qui";
                                            catalogVersion = 397973L;
                                            name = "Anna Franecki";
                                            sourceModifierUid = "eum";
                                            totalPriceMoney = new Money() {{
                                                amount = 943491L;
                                                currency = "quo";
                                            }};
                                            uid = "explicabo";
                                        }}),
                                        add(new OrderReturnLineItemModifier() {{
                                            basePriceMoney = new Money() {{
                                                amount = 778716L;
                                                currency = "corrupti";
                                            }};
                                            catalogObjectId = "illum";
                                            catalogVersion = 147103L;
                                            name = "Miss Cynthia Bode";
                                            sourceModifierUid = "quidem";
                                            totalPriceMoney = new Money() {{
                                                amount = 425323L;
                                                currency = "autem";
                                            }};
                                            uid = "id";
                                        }}),
                                    }};
                                    sourceLineItemUid = "fugiat";
                                    totalDiscountMoney = new Money() {{
                                        amount = 389932L;
                                        currency = "necessitatibus";
                                    }};
                                    totalMoney = new Money() {{
                                        amount = 229716L;
                                        currency = "recusandae";
                                    }};
                                    totalTaxMoney = new Money() {{
                                        amount = 96303L;
                                        currency = "pariatur";
                                    }};
                                    uid = "excepturi";
                                    variationName = "fugiat";
                                    variationTotalPriceMoney = new Money() {{
                                        amount = 217338L;
                                        currency = "libero";
                                    }};
                                }}),
                            }};
                            returnServiceCharges = new org.openapis.openapi.models.shared.OrderReturnServiceCharge[]{{
                                add(new OrderReturnServiceCharge() {{
                                    amountMoney = new Money() {{
                                        amount = 17530L;
                                        currency = "nesciunt";
                                    }};
                                    appliedMoney = new Money() {{
                                        amount = 249042L;
                                        currency = "quaerat";
                                    }};
                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                        add(new OrderLineItemAppliedTax("ab") {{
                                            appliedMoney = new Money() {{
                                                amount = 119228L;
                                                currency = "sunt";
                                            }};
                                            taxUid = "id";
                                            uid = "id";
                                        }}),
                                        add(new OrderLineItemAppliedTax("quia") {{
                                            appliedMoney = new Money() {{
                                                amount = 860421L;
                                                currency = "ipsam";
                                            }};
                                            taxUid = "at";
                                            uid = "magni";
                                        }}),
                                        add(new OrderLineItemAppliedTax("perspiciatis") {{
                                            appliedMoney = new Money() {{
                                                amount = 265887L;
                                                currency = "nihil";
                                            }};
                                            taxUid = "assumenda";
                                            uid = "debitis";
                                        }}),
                                    }};
                                    calculationPhase = "libero";
                                    catalogObjectId = "dolorem";
                                    catalogVersion = 866387L;
                                    name = "Kristen Botsford PhD";
                                    percentage = "iusto";
                                    sourceServiceChargeUid = "eum";
                                    taxable = false;
                                    totalMoney = new Money() {{
                                        amount = 550538L;
                                        currency = "est";
                                    }};
                                    totalTaxMoney = new Money() {{
                                        amount = 596846L;
                                        currency = "vel";
                                    }};
                                    uid = "nobis";
                                }}),
                                add(new OrderReturnServiceCharge() {{
                                    amountMoney = new Money() {{
                                        amount = 708007L;
                                        currency = "sequi";
                                    }};
                                    appliedMoney = new Money() {{
                                        amount = 613225L;
                                        currency = "totam";
                                    }};
                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                        add(new OrderLineItemAppliedTax("rem") {{
                                            appliedMoney = new Money() {{
                                                amount = 532481L;
                                                currency = "corrupti";
                                            }};
                                            taxUid = "sequi";
                                            uid = "perspiciatis";
                                        }}),
                                        add(new OrderLineItemAppliedTax("expedita") {{
                                            appliedMoney = new Money() {{
                                                amount = 879059L;
                                                currency = "tempore";
                                            }};
                                            taxUid = "dolorum";
                                            uid = "architecto";
                                        }}),
                                    }};
                                    calculationPhase = "cum";
                                    catalogObjectId = "reiciendis";
                                    catalogVersion = 493936L;
                                    name = "Joanne Dibbert";
                                    percentage = "ex";
                                    sourceServiceChargeUid = "tenetur";
                                    taxable = false;
                                    totalMoney = new Money() {{
                                        amount = 400649L;
                                        currency = "amet";
                                    }};
                                    totalTaxMoney = new Money() {{
                                        amount = 280538L;
                                        currency = "molestias";
                                    }};
                                    uid = "id";
                                }}),
                            }};
                            returnTaxes = new org.openapis.openapi.models.shared.OrderReturnTax[]{{
                                add(new OrderReturnTax() {{
                                    appliedMoney = new Money() {{
                                        amount = 378582L;
                                        currency = "tempora";
                                    }};
                                    catalogObjectId = "explicabo";
                                    catalogVersion = 276109L;
                                    name = "Mr. Malcolm Daniel";
                                    percentage = "recusandae";
                                    scope = "aliquam";
                                    sourceTaxUid = "ex";
                                    type = "tempore";
                                    uid = "iste";
                                }}),
                            }};
                            roundingAdjustment = new OrderRoundingAdjustment() {{
                                amountMoney = new Money() {{
                                    amount = 366561L;
                                    currency = "veritatis";
                                }};
                                name = "Erin Cassin II";
                                uid = "atque";
                            }};
                            sourceOrderId = "optio";
                            uid = "culpa";
                        }}),
                    }};
                    rewards = new org.openapis.openapi.models.shared.OrderReward[]{{
                        add(new OrderReward("velit", "temporibus") {{
                            id = "142f0526-32b3-41ca-9692-ffc8745005e9";
                            rewardTierId = "pariatur";
                        }}),
                        add(new OrderReward("fuga", "est") {{
                            id = "934e036f-5c38-4866-8f69-85530a2e2aed";
                            rewardTierId = "vel";
                        }}),
                        add(new OrderReward("neque", "provident") {{
                            id = "f863c28d-040c-469a-bd90-6f6ebd5ad7ec";
                            rewardTierId = "dignissimos";
                        }}),
                    }};
                    roundingAdjustment = new OrderRoundingAdjustment() {{
                        amountMoney = new Money() {{
                            amount = 292291L;
                            currency = "reiciendis";
                        }};;
                        name = "Stacy Zulauf";
                        uid = "tempora";
                    }};;
                    serviceCharges = new org.openapis.openapi.models.shared.OrderServiceCharge[]{{
                        add(new OrderServiceCharge() {{
                            amountMoney = new Money() {{
                                amount = 191655L;
                                currency = "quam";
                            }};
                            appliedMoney = new Money() {{
                                amount = 211864L;
                                currency = "accusantium";
                            }};
                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                add(new OrderLineItemAppliedTax("soluta") {{
                                    appliedMoney = new Money() {{
                                        amount = 81263L;
                                        currency = "numquam";
                                    }};
                                    taxUid = "itaque";
                                    uid = "commodi";
                                }}),
                                add(new OrderLineItemAppliedTax("debitis") {{
                                    appliedMoney = new Money() {{
                                        amount = 926650L;
                                        currency = "corrupti";
                                    }};
                                    taxUid = "minus";
                                    uid = "dolorem";
                                }}),
                            }};
                            calculationPhase = "consequatur";
                            catalogObjectId = "perspiciatis";
                            catalogVersion = 772650L;
                            metadata = new java.util.HashMap<String, String>() {{
                                put("quaerat", "quibusdam");
                                put("dolorem", "aliquam");
                            }};
                            name = "Jan Schowalter";
                            percentage = "provident";
                            taxable = false;
                            totalMoney = new Money() {{
                                amount = 641301L;
                                currency = "aliquid";
                            }};
                            totalTaxMoney = new Money() {{
                                amount = 925438L;
                                currency = "voluptas";
                            }};
                            type = "debitis";
                            uid = "quam";
                        }}),
                        add(new OrderServiceCharge() {{
                            amountMoney = new Money() {{
                                amount = 680461L;
                                currency = "earum";
                            }};
                            appliedMoney = new Money() {{
                                amount = 961027L;
                                currency = "inventore";
                            }};
                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                add(new OrderLineItemAppliedTax("natus") {{
                                    appliedMoney = new Money() {{
                                        amount = 309962L;
                                        currency = "perferendis";
                                    }};
                                    taxUid = "qui";
                                    uid = "repudiandae";
                                }}),
                            }};
                            calculationPhase = "modi";
                            catalogObjectId = "ullam";
                            catalogVersion = 973103L;
                            metadata = new java.util.HashMap<String, String>() {{
                                put("dolor", "quam");
                                put("incidunt", "consectetur");
                            }};
                            name = "Moses Schulist Jr.";
                            percentage = "sint";
                            taxable = false;
                            totalMoney = new Money() {{
                                amount = 506692L;
                                currency = "quia";
                            }};
                            totalTaxMoney = new Money() {{
                                amount = 175668L;
                                currency = "illo";
                            }};
                            type = "repellat";
                            uid = "iste";
                        }}),
                        add(new OrderServiceCharge() {{
                            amountMoney = new Money() {{
                                amount = 730646L;
                                currency = "inventore";
                            }};
                            appliedMoney = new Money() {{
                                amount = 946041L;
                                currency = "nihil";
                            }};
                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                add(new OrderLineItemAppliedTax("repudiandae") {{
                                    appliedMoney = new Money() {{
                                        amount = 614513L;
                                        currency = "deserunt";
                                    }};
                                    taxUid = "earum";
                                    uid = "a";
                                }}),
                                add(new OrderLineItemAppliedTax("sed") {{
                                    appliedMoney = new Money() {{
                                        amount = 432215L;
                                        currency = "omnis";
                                    }};
                                    taxUid = "aliquid";
                                    uid = "blanditiis";
                                }}),
                                add(new OrderLineItemAppliedTax("asperiores") {{
                                    appliedMoney = new Money() {{
                                        amount = 650391L;
                                        currency = "minus";
                                    }};
                                    taxUid = "recusandae";
                                    uid = "recusandae";
                                }}),
                                add(new OrderLineItemAppliedTax("voluptatum") {{
                                    appliedMoney = new Money() {{
                                        amount = 740206L;
                                        currency = "accusantium";
                                    }};
                                    taxUid = "magnam";
                                    uid = "reiciendis";
                                }}),
                            }};
                            calculationPhase = "maxime";
                            catalogObjectId = "ad";
                            catalogVersion = 75004L;
                            metadata = new java.util.HashMap<String, String>() {{
                                put("quod", "animi");
                            }};
                            name = "Marco Ullrich";
                            percentage = "voluptatem";
                            taxable = false;
                            totalMoney = new Money() {{
                                amount = 503338L;
                                currency = "voluptates";
                            }};
                            totalTaxMoney = new Money() {{
                                amount = 837314L;
                                currency = "corporis";
                            }};
                            type = "odio";
                            uid = "iste";
                        }}),
                    }};
                    source = new OrderSource() {{
                        name = "Carroll Frami";
                    }};;
                    state = "illum";
                    taxes = new org.openapis.openapi.models.shared.OrderLineItemTax[]{{
                        add(new OrderLineItemTax() {{
                            appliedMoney = new Money() {{
                                amount = 406783L;
                                currency = "aperiam";
                            }};
                            autoApplied = false;
                            catalogObjectId = "ullam";
                            catalogVersion = 583034L;
                            metadata = new java.util.HashMap<String, String>() {{
                                put("quibusdam", "nostrum");
                                put("impedit", "nesciunt");
                                put("velit", "magnam");
                            }};
                            name = "Herman Kuhn";
                            percentage = "minima";
                            scope = "ullam";
                            type = "dolores";
                            uid = "accusantium";
                        }}),
                        add(new OrderLineItemTax() {{
                            appliedMoney = new Money() {{
                                amount = 624582L;
                                currency = "officiis";
                            }};
                            autoApplied = false;
                            catalogObjectId = "perspiciatis";
                            catalogVersion = 670281L;
                            metadata = new java.util.HashMap<String, String>() {{
                                put("qui", "corporis");
                            }};
                            name = "Flora Jacobi";
                            percentage = "nisi";
                            scope = "veniam";
                            type = "praesentium";
                            uid = "laudantium";
                        }}),
                    }};
                    tenders = new org.openapis.openapi.models.shared.Tender[]{{
                        add(new Tender("culpa") {{
                            additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 860443L;
                                                    currency = "dolore";
                                                }};, "quidem") {{
                                    amountMoney = new Money() {{
                                        amount = 934512L;
                                        currency = "similique";
                                    }};
                                    description = "officiis";
                                    locationId = "ipsam";
                                    receivableId = "sapiente";
                                }}),
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 87837L;
                                                    currency = "eius";
                                                }};, "provident") {{
                                    amountMoney = new Money() {{
                                        amount = 219117L;
                                        currency = "perspiciatis";
                                    }};
                                    description = "voluptatibus";
                                    locationId = "totam";
                                    receivableId = "mollitia";
                                }}),
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 124065L;
                                                    currency = "dolor";
                                                }};, "quisquam") {{
                                    amountMoney = new Money() {{
                                        amount = 16967L;
                                        currency = "aliquid";
                                    }};
                                    description = "in";
                                    locationId = "quos";
                                    receivableId = "reiciendis";
                                }}),
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 206812L;
                                                    currency = "omnis";
                                                }};, "earum") {{
                                    amountMoney = new Money() {{
                                        amount = 417221L;
                                        currency = "laudantium";
                                    }};
                                    description = "laboriosam";
                                    locationId = "repellendus";
                                    receivableId = "quos";
                                }}),
                            }};
                            amountMoney = new Money() {{
                                amount = 756221L;
                                currency = "occaecati";
                            }};
                            cardDetails = new TenderCardDetails() {{
                                card = new Card() {{
                                    billingAddress = new Address() {{
                                        addressLine1 = "saepe";
                                        addressLine2 = "illo";
                                        addressLine3 = "esse";
                                        administrativeDistrictLevel1 = "enim";
                                        administrativeDistrictLevel2 = "reiciendis";
                                        administrativeDistrictLevel3 = "maiores";
                                        country = "Netherlands";
                                        firstName = "Lesly";
                                        lastName = "Altenwerth";
                                        locality = "autem";
                                        organization = "similique";
                                        postalCode = "33674-1864";
                                        sublocality = "dignissimos";
                                        sublocality2 = "magnam";
                                        sublocality3 = "vel";
                                    }};
                                    bin = "accusantium";
                                    cardBrand = "consectetur";
                                    cardType = "sit";
                                    cardholderName = "doloribus";
                                    customerId = "accusamus";
                                    enabled = false;
                                    expMonth = 123619L;
                                    expYear = 560561L;
                                    fingerprint = "neque";
                                    id = "76c2bede-e767-490e-90c1-6a7ba4784044";
                                    last4 = "totam";
                                    prepaidType = "unde";
                                    referenceId = "repellat";
                                    version = 376769L;
                                }};
                                entryMethod = "dignissimos";
                                status = "dignissimos";
                            }};
                            cashDetails = new TenderCashDetails() {{
                                buyerTenderedMoney = new Money() {{
                                    amount = 55797L;
                                    currency = "itaque";
                                }};
                                changeBackMoney = new Money() {{
                                    amount = 938696L;
                                    currency = "ipsa";
                                }};
                            }};
                            createdAt = "aliquam";
                            customerId = "praesentium";
                            id = "091a2ba2-5ee6-4c75-af8a-60a7ae346e09";
                            locationId = "esse";
                            note = "cupiditate";
                            paymentId = "debitis";
                            processingFeeMoney = new Money() {{
                                amount = 365827L;
                                currency = "officia";
                            }};
                            tipMoney = new Money() {{
                                amount = 956924L;
                                currency = "debitis";
                            }};
                            transactionId = "eum";
                            type = "consequatur";
                        }}),
                        add(new Tender("eos") {{
                            additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 364556L;
                                                    currency = "pariatur";
                                                }};, "repudiandae") {{
                                    amountMoney = new Money() {{
                                        amount = 637086L;
                                        currency = "quisquam";
                                    }};
                                    description = "deserunt";
                                    locationId = "nisi";
                                    receivableId = "aliquam";
                                }}),
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 333899L;
                                                    currency = "vitae";
                                                }};, "deserunt") {{
                                    amountMoney = new Money() {{
                                        amount = 593604L;
                                        currency = "atque";
                                    }};
                                    description = "laboriosam";
                                    locationId = "voluptate";
                                    receivableId = "ad";
                                }}),
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 63033L;
                                                    currency = "voluptates";
                                                }};, "impedit") {{
                                    amountMoney = new Money() {{
                                        amount = 610243L;
                                        currency = "porro";
                                    }};
                                    description = "porro";
                                    locationId = "eveniet";
                                    receivableId = "autem";
                                }}),
                                add(new AdditionalRecipient(                new Money() {{
                                                    amount = 234248L;
                                                    currency = "excepturi";
                                                }};, "fuga") {{
                                    amountMoney = new Money() {{
                                        amount = 125535L;
                                        currency = "optio";
                                    }};
                                    description = "odio";
                                    locationId = "occaecati";
                                    receivableId = "officia";
                                }}),
                            }};
                            amountMoney = new Money() {{
                                amount = 889495L;
                                currency = "ipsam";
                            }};
                            cardDetails = new TenderCardDetails() {{
                                card = new Card() {{
                                    billingAddress = new Address() {{
                                        addressLine1 = "fuga";
                                        addressLine2 = "magnam";
                                        addressLine3 = "assumenda";
                                        administrativeDistrictLevel1 = "nemo";
                                        administrativeDistrictLevel2 = "id";
                                        administrativeDistrictLevel3 = "laboriosam";
                                        country = "Grenada";
                                        firstName = "Mervin";
                                        lastName = "Goldner";
                                        locality = "fugiat";
                                        organization = "exercitationem";
                                        postalCode = "41857";
                                        sublocality = "odio";
                                        sublocality2 = "assumenda";
                                        sublocality3 = "excepturi";
                                    }};
                                    bin = "recusandae";
                                    cardBrand = "eos";
                                    cardType = "facere";
                                    cardholderName = "iure";
                                    customerId = "delectus";
                                    enabled = false;
                                    expMonth = 798905L;
                                    expYear = 949862L;
                                    fingerprint = "veniam";
                                    id = "57629db8-75c3-4a89-8282-a51f41cf6796";
                                    last4 = "necessitatibus";
                                    prepaidType = "illum";
                                    referenceId = "dolor";
                                    version = 831476L;
                                }};
                                entryMethod = "nihil";
                                status = "aspernatur";
                            }};
                            cashDetails = new TenderCashDetails() {{
                                buyerTenderedMoney = new Money() {{
                                    amount = 253754L;
                                    currency = "placeat";
                                }};
                                changeBackMoney = new Money() {{
                                    amount = 70947L;
                                    currency = "praesentium";
                                }};
                            }};
                            createdAt = "repellat";
                            customerId = "ad";
                            id = "81e98cce-3f71-4660-8da0-e3aa61c6fe09";
                            locationId = "assumenda";
                            note = "totam";
                            paymentId = "minima";
                            processingFeeMoney = new Money() {{
                                amount = 127062L;
                                currency = "soluta";
                            }};
                            tipMoney = new Money() {{
                                amount = 322025L;
                                currency = "adipisci";
                            }};
                            transactionId = "rerum";
                            type = "nesciunt";
                        }}),
                    }};
                    totalDiscountMoney = new Money() {{
                        amount = 809598L;
                        currency = "blanditiis";
                    }};;
                    totalMoney = new Money() {{
                        amount = 767388L;
                        currency = "dignissimos";
                    }};;
                    totalServiceChargeMoney = new Money() {{
                        amount = 811221L;
                        currency = "ratione";
                    }};;
                    totalTaxMoney = new Money() {{
                        amount = 757340L;
                        currency = "esse";
                    }};;
                    totalTipMoney = new Money() {{
                        amount = 95862L;
                        currency = "alias";
                    }};;
                    updatedAt = "accusamus";
                    version = 77112L;
                }};;
            }};            

            CreateOrderResponse res = sdk.orders.createOrder(req, new CreateOrderSecurity("voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## payOrder

Pay for an [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) using one or more approved [payments](https://developer.squareup.com/reference/square_2021-08-18/objects/Payment)
or settle an order with a total of `0`.

The total of the `payment_ids` listed in the request must be equal to the order
total. Orders with a total amount of `0` can be marked as paid by specifying an empty
array of `payment_ids` in the request.

To be used with `PayOrder`, a payment must:

- Reference the order by specifying the `order_id` when [creating the payment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/create-payment).
Any approved payments that reference the same `order_id` not specified in the
`payment_ids` is canceled.
- Be approved with [delayed capture](https://developer.squareup.com/docs/payments-api/take-payments#delayed-capture).
Using a delayed capture payment with `PayOrder` completes the approved payment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PayOrderRequest;
import org.openapis.openapi.models.operations.PayOrderResponse;
import org.openapis.openapi.models.operations.PayOrderSecurity;
import org.openapis.openapi.models.shared.PayOrderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PayOrderRequest req = new PayOrderRequest(                new PayOrderRequest("molestiae") {{
                                orderVersion = 219664L;
                                paymentIds = new String[]{{
                                    add("excepturi"),
                                    add("perferendis"),
                                    add("nostrum"),
                                    add("quisquam"),
                                }};
                            }};, "expedita");            

            PayOrderResponse res = sdk.orders.payOrder(req, new PayOrderSecurity("labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchOrders

Search all orders for one or more locations. Orders include all sales,
returns, and exchanges regardless of how or when they entered the Square
ecosystem (such as Point of Sale, Invoices, and Connect APIs).

`SearchOrders` requests need to specify which locations to search and define a
[SearchOrdersQuery](https://developer.squareup.com/reference/square_2021-08-18/objects/SearchOrdersQuery) object that controls
how to sort or filter the results. Your `SearchOrdersQuery` can:

  Set filter criteria.
  Set the sort order.
  Determine whether to return results as complete `Order` objects or as
[OrderEntry](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderEntry) objects.

Note that details for orders processed with Square Point of Sale while in
offline mode might not be transmitted to Square for up to 72 hours. Offline
orders have a `created_at` value that reflects the time the order was created,
not the time it was subsequently transmitted to Square.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchOrdersResponse;
import org.openapis.openapi.models.operations.SearchOrdersSecurity;
import org.openapis.openapi.models.shared.SearchOrdersCustomerFilter;
import org.openapis.openapi.models.shared.SearchOrdersDateTimeFilter;
import org.openapis.openapi.models.shared.SearchOrdersFilter;
import org.openapis.openapi.models.shared.SearchOrdersFulfillmentFilter;
import org.openapis.openapi.models.shared.SearchOrdersQuery;
import org.openapis.openapi.models.shared.SearchOrdersRequest;
import org.openapis.openapi.models.shared.SearchOrdersSort;
import org.openapis.openapi.models.shared.SearchOrdersSourceFilter;
import org.openapis.openapi.models.shared.SearchOrdersStateFilter;
import org.openapis.openapi.models.shared.TimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchOrdersRequest req = new SearchOrdersRequest() {{
                cursor = "quidem";
                limit = 926319L;
                locationIds = new String[]{{
                    add("itaque"),
                    add("asperiores"),
                    add("amet"),
                    add("quod"),
                }};
                query = new SearchOrdersQuery() {{
                    filter = new SearchOrdersFilter() {{
                        customerFilter = new SearchOrdersCustomerFilter() {{
                            customerIds = new String[]{{
                                add("odit"),
                            }};
                        }};;
                        dateTimeFilter = new SearchOrdersDateTimeFilter() {{
                            closedAt = new TimeRange() {{
                                endAt = "in";
                                startAt = "optio";
                            }};;
                            createdAt = new TimeRange() {{
                                endAt = "ipsum";
                                startAt = "excepturi";
                            }};;
                            updatedAt = new TimeRange() {{
                                endAt = "aperiam";
                                startAt = "molestias";
                            }};;
                        }};;
                        fulfillmentFilter = new SearchOrdersFulfillmentFilter() {{
                            fulfillmentStates = new String[]{{
                                add("quis"),
                                add("veniam"),
                                add("consequuntur"),
                            }};
                            fulfillmentTypes = new String[]{{
                                add("dolores"),
                                add("ipsam"),
                                add("ipsa"),
                            }};
                        }};;
                        sourceFilter = new SearchOrdersSourceFilter() {{
                            sourceNames = new String[]{{
                                add("maxime"),
                                add("nobis"),
                                add("soluta"),
                                add("eligendi"),
                            }};
                        }};;
                        stateFilter = new SearchOrdersStateFilter(                new String[]{{
                                            add("velit"),
                                            add("facilis"),
                                            add("architecto"),
                                            add("magni"),
                                        }});;
                    }};;
                    sort = new SearchOrdersSort("dicta") {{
                        sortOrder = "tempore";
                    }};;
                }};;
                returnEntries = false;
            }};            

            SearchOrdersResponse res = sdk.orders.searchOrders(req, new SearchOrdersSecurity("atque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchOrdersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2OrdersOrderId

Retrieves an [Order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2OrdersOrderIdRequest;
import org.openapis.openapi.models.operations.GetV2OrdersOrderIdResponse;
import org.openapis.openapi.models.operations.GetV2OrdersOrderIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2OrdersOrderIdRequest req = new GetV2OrdersOrderIdRequest("quas");            

            GetV2OrdersOrderIdResponse res = sdk.orders.getV2OrdersOrderId(req, new GetV2OrdersOrderIdSecurity("placeat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV2OrdersOrderId

Updates an open [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) by adding, replacing, or deleting
fields. Orders with a `COMPLETED` or `CANCELED` state cannot be updated.

An `UpdateOrder` request requires the following:

- The `order_id` in the endpoint path, identifying the order to update.
- The latest `version` of the order to update.
- The [sparse order](https://developer.squareup.com/docs/orders-api/manage-orders#sparse-order-objects)
containing only the fields to update and the version to which the update is
being applied.
- If deleting fields, the [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-orders#on-dot-notation)
identifying the fields to clear.

To pay for an order, see 
[Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2OrdersOrderIdRequest;
import org.openapis.openapi.models.operations.PutV2OrdersOrderIdResponse;
import org.openapis.openapi.models.operations.PutV2OrdersOrderIdSecurity;
import org.openapis.openapi.models.shared.AdditionalRecipient;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Card;
import org.openapis.openapi.models.shared.MeasurementUnit;
import org.openapis.openapi.models.shared.MeasurementUnitCustom;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.Order;
import org.openapis.openapi.models.shared.OrderFulfillment;
import org.openapis.openapi.models.shared.OrderFulfillmentPickupDetails;
import org.openapis.openapi.models.shared.OrderFulfillmentPickupDetailsCurbsidePickupDetails;
import org.openapis.openapi.models.shared.OrderFulfillmentRecipient;
import org.openapis.openapi.models.shared.OrderFulfillmentShipmentDetails;
import org.openapis.openapi.models.shared.OrderLineItem;
import org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount;
import org.openapis.openapi.models.shared.OrderLineItemAppliedTax;
import org.openapis.openapi.models.shared.OrderLineItemDiscount;
import org.openapis.openapi.models.shared.OrderLineItemModifier;
import org.openapis.openapi.models.shared.OrderLineItemPricingBlocklists;
import org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount;
import org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax;
import org.openapis.openapi.models.shared.OrderLineItemTax;
import org.openapis.openapi.models.shared.OrderMoneyAmounts;
import org.openapis.openapi.models.shared.OrderPricingOptions;
import org.openapis.openapi.models.shared.OrderQuantityUnit;
import org.openapis.openapi.models.shared.OrderReturn;
import org.openapis.openapi.models.shared.OrderReturnDiscount;
import org.openapis.openapi.models.shared.OrderReturnLineItem;
import org.openapis.openapi.models.shared.OrderReturnLineItemModifier;
import org.openapis.openapi.models.shared.OrderReturnServiceCharge;
import org.openapis.openapi.models.shared.OrderReturnTax;
import org.openapis.openapi.models.shared.OrderReward;
import org.openapis.openapi.models.shared.OrderRoundingAdjustment;
import org.openapis.openapi.models.shared.OrderServiceCharge;
import org.openapis.openapi.models.shared.OrderSource;
import org.openapis.openapi.models.shared.Refund;
import org.openapis.openapi.models.shared.Tender;
import org.openapis.openapi.models.shared.TenderCardDetails;
import org.openapis.openapi.models.shared.TenderCashDetails;
import org.openapis.openapi.models.shared.UpdateOrderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2OrdersOrderIdRequest req = new PutV2OrdersOrderIdRequest(                new UpdateOrderRequest() {{
                                fieldsToClear = new String[]{{
                                    add("officiis"),
                                }};
                                idempotencyKey = "saepe";
                                order = new Order("minima") {{
                                    closedAt = "saepe";
                                    createdAt = "voluptate";
                                    customerId = "similique";
                                    discounts = new org.openapis.openapi.models.shared.OrderLineItemDiscount[]{{
                                        add(new OrderLineItemDiscount() {{
                                            amountMoney = new Money() {{
                                                amount = 419641L;
                                                currency = "quasi";
                                            }};
                                            appliedMoney = new Money() {{
                                                amount = 237924L;
                                                currency = "excepturi";
                                            }};
                                            catalogObjectId = "quasi";
                                            catalogVersion = 810794L;
                                            metadata = new java.util.HashMap<String, String>() {{
                                                put("laudantium", "delectus");
                                                put("deserunt", "aut");
                                                put("soluta", "iusto");
                                                put("repellendus", "beatae");
                                            }};
                                            name = "Ella Grady";
                                            percentage = "eum";
                                            pricingRuleId = "facilis";
                                            rewardIds = new String[]{{
                                                add("cumque"),
                                            }};
                                            scope = "doloribus";
                                            type = "minima";
                                            uid = "recusandae";
                                        }}),
                                    }};
                                    fulfillments = new org.openapis.openapi.models.shared.OrderFulfillment[]{{
                                        add(new OrderFulfillment() {{
                                            metadata = new java.util.HashMap<String, String>() {{
                                                put("harum", "aliquid");
                                                put("necessitatibus", "harum");
                                                put("similique", "expedita");
                                                put("debitis", "quis");
                                            }};
                                            pickupDetails = new OrderFulfillmentPickupDetails() {{
                                                acceptedAt = "accusamus";
                                                autoCompleteDuration = "doloremque";
                                                cancelReason = "tempore";
                                                canceledAt = "error";
                                                curbsidePickupDetails = new OrderFulfillmentPickupDetailsCurbsidePickupDetails() {{
                                                    buyerArrivedAt = "cupiditate";
                                                    curbsideDetails = "tenetur";
                                                }};
                                                expiredAt = "velit";
                                                expiresAt = "nobis";
                                                isCurbsidePickup = false;
                                                note = "illo";
                                                pickedUpAt = "amet";
                                                pickupAt = "enim";
                                                pickupWindowDuration = "quas";
                                                placedAt = "nulla";
                                                prepTimeDuration = "nisi";
                                                readyAt = "deserunt";
                                                recipient = new OrderFulfillmentRecipient() {{
                                                    address = new Address() {{
                                                        addressLine1 = "corrupti";
                                                        addressLine2 = "reprehenderit";
                                                        addressLine3 = "nam";
                                                        administrativeDistrictLevel1 = "soluta";
                                                        administrativeDistrictLevel2 = "odio";
                                                        administrativeDistrictLevel3 = "est";
                                                        country = "Turkey";
                                                        firstName = "Peyton";
                                                        lastName = "Pouros";
                                                        locality = "recusandae";
                                                        organization = "ullam";
                                                        postalCode = "68407";
                                                        sublocality = "expedita";
                                                        sublocality2 = "consequatur";
                                                        sublocality3 = "suscipit";
                                                    }};
                                                    customerId = "cupiditate";
                                                    displayName = "occaecati";
                                                    emailAddress = "sit";
                                                    phoneNumber = "dignissimos";
                                                }};
                                                rejectedAt = "maiores";
                                                scheduleType = "provident";
                                            }};
                                            shipmentDetails = new OrderFulfillmentShipmentDetails() {{
                                                cancelReason = "praesentium";
                                                canceledAt = "omnis";
                                                carrier = "incidunt";
                                                expectedShippedAt = "incidunt";
                                                failedAt = "vitae";
                                                failureReason = "incidunt";
                                                inProgressAt = "nostrum";
                                                packagedAt = "explicabo";
                                                placedAt = "culpa";
                                                recipient = new OrderFulfillmentRecipient() {{
                                                    address = new Address() {{
                                                        addressLine1 = "sint";
                                                        addressLine2 = "voluptatibus";
                                                        addressLine3 = "ipsa";
                                                        administrativeDistrictLevel1 = "quasi";
                                                        administrativeDistrictLevel2 = "sapiente";
                                                        administrativeDistrictLevel3 = "dolorem";
                                                        country = "Gambia";
                                                        firstName = "Doyle";
                                                        lastName = "Daugherty";
                                                        locality = "cumque";
                                                        organization = "vel";
                                                        postalCode = "68021";
                                                        sublocality = "distinctio";
                                                        sublocality2 = "dolorum";
                                                        sublocality3 = "optio";
                                                    }};
                                                    customerId = "nulla";
                                                    displayName = "debitis";
                                                    emailAddress = "corporis";
                                                    phoneNumber = "neque";
                                                }};
                                                shippedAt = "eos";
                                                shippingNote = "nam";
                                                shippingType = "ea";
                                                trackingNumber = "ullam";
                                                trackingUrl = "eos";
                                            }};
                                            state = "laboriosam";
                                            type = "reiciendis";
                                            uid = "praesentium";
                                        }}),
                                        add(new OrderFulfillment() {{
                                            metadata = new java.util.HashMap<String, String>() {{
                                                put("explicabo", "quos");
                                                put("corporis", "dolorem");
                                            }};
                                            pickupDetails = new OrderFulfillmentPickupDetails() {{
                                                acceptedAt = "hic";
                                                autoCompleteDuration = "eveniet";
                                                cancelReason = "eos";
                                                canceledAt = "laudantium";
                                                curbsidePickupDetails = new OrderFulfillmentPickupDetailsCurbsidePickupDetails() {{
                                                    buyerArrivedAt = "enim";
                                                    curbsideDetails = "provident";
                                                }};
                                                expiredAt = "maxime";
                                                expiresAt = "officiis";
                                                isCurbsidePickup = false;
                                                note = "non";
                                                pickedUpAt = "magni";
                                                pickupAt = "consequuntur";
                                                pickupWindowDuration = "quia";
                                                placedAt = "ratione";
                                                prepTimeDuration = "illo";
                                                readyAt = "doloribus";
                                                recipient = new OrderFulfillmentRecipient() {{
                                                    address = new Address() {{
                                                        addressLine1 = "earum";
                                                        addressLine2 = "commodi";
                                                        addressLine3 = "nisi";
                                                        administrativeDistrictLevel1 = "aliquid";
                                                        administrativeDistrictLevel2 = "dolore";
                                                        administrativeDistrictLevel3 = "eligendi";
                                                        country = "El Salvador";
                                                        firstName = "Angie";
                                                        lastName = "Streich";
                                                        locality = "magni";
                                                        organization = "maiores";
                                                        postalCode = "63876-0457";
                                                        sublocality = "corrupti";
                                                        sublocality2 = "at";
                                                        sublocality3 = "fugit";
                                                    }};
                                                    customerId = "cupiditate";
                                                    displayName = "dicta";
                                                    emailAddress = "libero";
                                                    phoneNumber = "recusandae";
                                                }};
                                                rejectedAt = "libero";
                                                scheduleType = "blanditiis";
                                            }};
                                            shipmentDetails = new OrderFulfillmentShipmentDetails() {{
                                                cancelReason = "quae";
                                                canceledAt = "eaque";
                                                carrier = "est";
                                                expectedShippedAt = "sed";
                                                failedAt = "dolorum";
                                                failureReason = "laborum";
                                                inProgressAt = "atque";
                                                packagedAt = "molestiae";
                                                placedAt = "aliquam";
                                                recipient = new OrderFulfillmentRecipient() {{
                                                    address = new Address() {{
                                                        addressLine1 = "perspiciatis";
                                                        addressLine2 = "labore";
                                                        addressLine3 = "esse";
                                                        administrativeDistrictLevel1 = "unde";
                                                        administrativeDistrictLevel2 = "recusandae";
                                                        administrativeDistrictLevel3 = "quibusdam";
                                                        country = "South Africa";
                                                        firstName = "Dimitri";
                                                        lastName = "Wuckert";
                                                        locality = "cumque";
                                                        organization = "earum";
                                                        postalCode = "73079";
                                                        sublocality = "blanditiis";
                                                        sublocality2 = "molestiae";
                                                        sublocality3 = "a";
                                                    }};
                                                    customerId = "quae";
                                                    displayName = "deleniti";
                                                    emailAddress = "asperiores";
                                                    phoneNumber = "dolor";
                                                }};
                                                shippedAt = "excepturi";
                                                shippingNote = "fugit";
                                                shippingType = "esse";
                                                trackingNumber = "illo";
                                                trackingUrl = "perferendis";
                                            }};
                                            state = "reprehenderit";
                                            type = "vel";
                                            uid = "culpa";
                                        }}),
                                    }};
                                    id = "24b40c8f-08bf-4f10-81e8-8f86996c8e22";
                                    lineItems = new org.openapis.openapi.models.shared.OrderLineItem[]{{
                                        add(new OrderLineItem("laborum") {{
                                            appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                add(new OrderLineItemAppliedDiscount("tenetur") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 16413L;
                                                        currency = "similique";
                                                    }};
                                                    discountUid = "ipsum";
                                                    uid = "maxime";
                                                }}),
                                                add(new OrderLineItemAppliedDiscount("dolorem") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 295555L;
                                                        currency = "voluptate";
                                                    }};
                                                    discountUid = "blanditiis";
                                                    uid = "sint";
                                                }}),
                                                add(new OrderLineItemAppliedDiscount("asperiores") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 744532L;
                                                        currency = "fugiat";
                                                    }};
                                                    discountUid = "fugit";
                                                    uid = "neque";
                                                }}),
                                                add(new OrderLineItemAppliedDiscount("eaque") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 548327L;
                                                        currency = "autem";
                                                    }};
                                                    discountUid = "autem";
                                                    uid = "alias";
                                                }}),
                                            }};
                                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                add(new OrderLineItemAppliedTax("voluptatum") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 412148L;
                                                        currency = "inventore";
                                                    }};
                                                    taxUid = "porro";
                                                    uid = "nihil";
                                                }}),
                                                add(new OrderLineItemAppliedTax("ipsum") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 234260L;
                                                        currency = "aliquam";
                                                    }};
                                                    taxUid = "magni";
                                                    uid = "in";
                                                }}),
                                                add(new OrderLineItemAppliedTax("vitae") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 774266L;
                                                        currency = "est";
                                                    }};
                                                    taxUid = "est";
                                                    uid = "provident";
                                                }}),
                                                add(new OrderLineItemAppliedTax("atque") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 64942L;
                                                        currency = "voluptatum";
                                                    }};
                                                    taxUid = "tempore";
                                                    uid = "nesciunt";
                                                }}),
                                            }};
                                            basePriceMoney = new Money() {{
                                                amount = 978408L;
                                                currency = "veritatis";
                                            }};
                                            catalogObjectId = "cum";
                                            catalogVersion = 410547L;
                                            grossSalesMoney = new Money() {{
                                                amount = 81000L;
                                                currency = "est";
                                            }};
                                            itemType = "non";
                                            metadata = new java.util.HashMap<String, String>() {{
                                                put("inventore", "dolorum");
                                            }};
                                            modifiers = new org.openapis.openapi.models.shared.OrderLineItemModifier[]{{
                                                add(new OrderLineItemModifier() {{
                                                    basePriceMoney = new Money() {{
                                                        amount = 266037L;
                                                        currency = "possimus";
                                                    }};
                                                    catalogObjectId = "cumque";
                                                    catalogVersion = 66755L;
                                                    name = "Louise Monahan";
                                                    totalPriceMoney = new Money() {{
                                                        amount = 624080L;
                                                        currency = "eos";
                                                    }};
                                                    uid = "voluptatibus";
                                                }}),
                                                add(new OrderLineItemModifier() {{
                                                    basePriceMoney = new Money() {{
                                                        amount = 890760L;
                                                        currency = "possimus";
                                                    }};
                                                    catalogObjectId = "omnis";
                                                    catalogVersion = 200926L;
                                                    name = "Rudolph O'Conner";
                                                    totalPriceMoney = new Money() {{
                                                        amount = 491628L;
                                                        currency = "et";
                                                    }};
                                                    uid = "eveniet";
                                                }}),
                                            }};
                                            name = "Daisy Moore";
                                            note = "magni";
                                            pricingBlocklists = new OrderLineItemPricingBlocklists() {{
                                                blockedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount[]{{
                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                        discountCatalogObjectId = "repudiandae";
                                                        discountUid = "officiis";
                                                        uid = "inventore";
                                                    }}),
                                                }};
                                                blockedTaxes = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax[]{{
                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                        taxCatalogObjectId = "odit";
                                                        taxUid = "quas";
                                                        uid = "mollitia";
                                                    }}),
                                                }};
                                            }};
                                            quantity = "cumque";
                                            quantityUnit = new OrderQuantityUnit() {{
                                                catalogVersion = 224337L;
                                                measurementUnit = new MeasurementUnit() {{
                                                    areaUnit = "id";
                                                    customUnit = new MeasurementUnitCustom("explicabo", "numquam") {{
                                                        abbreviation = "assumenda";
                                                        name = "Edgar Greenholt";
                                                    }};
                                                    genericUnit = "voluptatem";
                                                    lengthUnit = "expedita";
                                                    timeUnit = "optio";
                                                    type = "beatae";
                                                    volumeUnit = "illo";
                                                    weightUnit = "itaque";
                                                }};
                                                precision = 640159L;
                                            }};
                                            totalDiscountMoney = new Money() {{
                                                amount = 281335L;
                                                currency = "deleniti";
                                            }};
                                            totalMoney = new Money() {{
                                                amount = 127980L;
                                                currency = "totam";
                                            }};
                                            totalTaxMoney = new Money() {{
                                                amount = 125620L;
                                                currency = "magnam";
                                            }};
                                            uid = "quisquam";
                                            variationName = "eligendi";
                                            variationTotalPriceMoney = new Money() {{
                                                amount = 782715L;
                                                currency = "aliquid";
                                            }};
                                        }}),
                                        add(new OrderLineItem("vitae") {{
                                            appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                add(new OrderLineItemAppliedDiscount("libero") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 977919L;
                                                        currency = "ipsa";
                                                    }};
                                                    discountUid = "reiciendis";
                                                    uid = "nostrum";
                                                }}),
                                            }};
                                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                add(new OrderLineItemAppliedTax("inventore") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 840878L;
                                                        currency = "dolor";
                                                    }};
                                                    taxUid = "quo";
                                                    uid = "soluta";
                                                }}),
                                                add(new OrderLineItemAppliedTax("deleniti") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 108725L;
                                                        currency = "similique";
                                                    }};
                                                    taxUid = "nihil";
                                                    uid = "commodi";
                                                }}),
                                                add(new OrderLineItemAppliedTax("voluptatem") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 489164L;
                                                        currency = "possimus";
                                                    }};
                                                    taxUid = "dolor";
                                                    uid = "dicta";
                                                }}),
                                            }};
                                            basePriceMoney = new Money() {{
                                                amount = 1674L;
                                                currency = "necessitatibus";
                                            }};
                                            catalogObjectId = "deleniti";
                                            catalogVersion = 922793L;
                                            grossSalesMoney = new Money() {{
                                                amount = 150725L;
                                                currency = "cum";
                                            }};
                                            itemType = "sint";
                                            metadata = new java.util.HashMap<String, String>() {{
                                                put("voluptatem", "repellendus");
                                                put("dignissimos", "quaerat");
                                                put("nisi", "possimus");
                                            }};
                                            modifiers = new org.openapis.openapi.models.shared.OrderLineItemModifier[]{{
                                                add(new OrderLineItemModifier() {{
                                                    basePriceMoney = new Money() {{
                                                        amount = 676665L;
                                                        currency = "nihil";
                                                    }};
                                                    catalogObjectId = "quisquam";
                                                    catalogVersion = 477169L;
                                                    name = "Stephen Toy DVM";
                                                    totalPriceMoney = new Money() {{
                                                        amount = 461817L;
                                                        currency = "iste";
                                                    }};
                                                    uid = "tenetur";
                                                }}),
                                            }};
                                            name = "Sergio Rogahn";
                                            note = "veniam";
                                            pricingBlocklists = new OrderLineItemPricingBlocklists() {{
                                                blockedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount[]{{
                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                        discountCatalogObjectId = "et";
                                                        discountUid = "dignissimos";
                                                        uid = "sint";
                                                    }}),
                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                        discountCatalogObjectId = "hic";
                                                        discountUid = "vel";
                                                        uid = "corporis";
                                                    }}),
                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                        discountCatalogObjectId = "sit";
                                                        discountUid = "libero";
                                                        uid = "quasi";
                                                    }}),
                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                        discountCatalogObjectId = "earum";
                                                        discountUid = "quam";
                                                        uid = "aut";
                                                    }}),
                                                }};
                                                blockedTaxes = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax[]{{
                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                        taxCatalogObjectId = "repudiandae";
                                                        taxUid = "ducimus";
                                                        uid = "officiis";
                                                    }}),
                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                        taxCatalogObjectId = "dolore";
                                                        taxUid = "neque";
                                                        uid = "molestias";
                                                    }}),
                                                }};
                                            }};
                                            quantity = "ea";
                                            quantityUnit = new OrderQuantityUnit() {{
                                                catalogVersion = 488699L;
                                                measurementUnit = new MeasurementUnit() {{
                                                    areaUnit = "sunt";
                                                    customUnit = new MeasurementUnitCustom("ipsa", "reprehenderit") {{
                                                        abbreviation = "non";
                                                        name = "Otis Sanford";
                                                    }};
                                                    genericUnit = "qui";
                                                    lengthUnit = "similique";
                                                    timeUnit = "expedita";
                                                    type = "quibusdam";
                                                    volumeUnit = "ex";
                                                    weightUnit = "et";
                                                }};
                                                precision = 585511L;
                                            }};
                                            totalDiscountMoney = new Money() {{
                                                amount = 119158L;
                                                currency = "rem";
                                            }};
                                            totalMoney = new Money() {{
                                                amount = 817785L;
                                                currency = "magni";
                                            }};
                                            totalTaxMoney = new Money() {{
                                                amount = 441969L;
                                                currency = "omnis";
                                            }};
                                            uid = "maxime";
                                            variationName = "vitae";
                                            variationTotalPriceMoney = new Money() {{
                                                amount = 150L;
                                                currency = "maxime";
                                            }};
                                        }}),
                                        add(new OrderLineItem("cumque") {{
                                            appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                add(new OrderLineItemAppliedDiscount("repellendus") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 368343L;
                                                        currency = "ab";
                                                    }};
                                                    discountUid = "aliquid";
                                                    uid = "doloribus";
                                                }}),
                                                add(new OrderLineItemAppliedDiscount("fugit") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 450454L;
                                                        currency = "praesentium";
                                                    }};
                                                    discountUid = "rerum";
                                                    uid = "repudiandae";
                                                }}),
                                                add(new OrderLineItemAppliedDiscount("esse") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 424698L;
                                                        currency = "fugit";
                                                    }};
                                                    discountUid = "ab";
                                                    uid = "quia";
                                                }}),
                                            }};
                                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                add(new OrderLineItemAppliedTax("officia") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 411009L;
                                                        currency = "odit";
                                                    }};
                                                    taxUid = "quos";
                                                    uid = "doloribus";
                                                }}),
                                            }};
                                            basePriceMoney = new Money() {{
                                                amount = 352126L;
                                                currency = "ipsa";
                                            }};
                                            catalogObjectId = "ratione";
                                            catalogVersion = 617530L;
                                            grossSalesMoney = new Money() {{
                                                amount = 424546L;
                                                currency = "aspernatur";
                                            }};
                                            itemType = "blanditiis";
                                            metadata = new java.util.HashMap<String, String>() {{
                                                put("esse", "debitis");
                                                put("esse", "aspernatur");
                                            }};
                                            modifiers = new org.openapis.openapi.models.shared.OrderLineItemModifier[]{{
                                                add(new OrderLineItemModifier() {{
                                                    basePriceMoney = new Money() {{
                                                        amount = 208759L;
                                                        currency = "laborum";
                                                    }};
                                                    catalogObjectId = "autem";
                                                    catalogVersion = 327373L;
                                                    name = "Phyllis Grant II";
                                                    totalPriceMoney = new Money() {{
                                                        amount = 477044L;
                                                        currency = "voluptatibus";
                                                    }};
                                                    uid = "sint";
                                                }}),
                                                add(new OrderLineItemModifier() {{
                                                    basePriceMoney = new Money() {{
                                                        amount = 729927L;
                                                        currency = "nobis";
                                                    }};
                                                    catalogObjectId = "laboriosam";
                                                    catalogVersion = 923240L;
                                                    name = "Brad Collier";
                                                    totalPriceMoney = new Money() {{
                                                        amount = 60068L;
                                                        currency = "voluptatum";
                                                    }};
                                                    uid = "molestiae";
                                                }}),
                                                add(new OrderLineItemModifier() {{
                                                    basePriceMoney = new Money() {{
                                                        amount = 124093L;
                                                        currency = "at";
                                                    }};
                                                    catalogObjectId = "unde";
                                                    catalogVersion = 592279L;
                                                    name = "Miss Glen Jones";
                                                    totalPriceMoney = new Money() {{
                                                        amount = 874137L;
                                                        currency = "repudiandae";
                                                    }};
                                                    uid = "sapiente";
                                                }}),
                                            }};
                                            name = "Tonya Lemke";
                                            note = "impedit";
                                            pricingBlocklists = new OrderLineItemPricingBlocklists() {{
                                                blockedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount[]{{
                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                        discountCatalogObjectId = "facilis";
                                                        discountUid = "sed";
                                                        uid = "deleniti";
                                                    }}),
                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                        discountCatalogObjectId = "dolores";
                                                        discountUid = "dolores";
                                                        uid = "distinctio";
                                                    }}),
                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                        discountCatalogObjectId = "modi";
                                                        discountUid = "dolorum";
                                                        uid = "perspiciatis";
                                                    }}),
                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                        discountCatalogObjectId = "totam";
                                                        discountUid = "ipsam";
                                                        uid = "alias";
                                                    }}),
                                                }};
                                                blockedTaxes = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax[]{{
                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                        taxCatalogObjectId = "fugiat";
                                                        taxUid = "magni";
                                                        uid = "doloribus";
                                                    }}),
                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                        taxCatalogObjectId = "dolore";
                                                        taxUid = "est";
                                                        uid = "veritatis";
                                                    }}),
                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                        taxCatalogObjectId = "itaque";
                                                        taxUid = "excepturi";
                                                        uid = "eligendi";
                                                    }}),
                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                        taxCatalogObjectId = "numquam";
                                                        taxUid = "fuga";
                                                        uid = "voluptates";
                                                    }}),
                                                }};
                                            }};
                                            quantity = "exercitationem";
                                            quantityUnit = new OrderQuantityUnit() {{
                                                catalogVersion = 353827L;
                                                measurementUnit = new MeasurementUnit() {{
                                                    areaUnit = "inventore";
                                                    customUnit = new MeasurementUnitCustom("dolores", "laboriosam") {{
                                                        abbreviation = "eius";
                                                        name = "Eloise Klein";
                                                    }};
                                                    genericUnit = "earum";
                                                    lengthUnit = "voluptatem";
                                                    timeUnit = "consequatur";
                                                    type = "nesciunt";
                                                    volumeUnit = "porro";
                                                    weightUnit = "aspernatur";
                                                }};
                                                precision = 990014L;
                                            }};
                                            totalDiscountMoney = new Money() {{
                                                amount = 12738L;
                                                currency = "consequuntur";
                                            }};
                                            totalMoney = new Money() {{
                                                amount = 619134L;
                                                currency = "aliquam";
                                            }};
                                            totalTaxMoney = new Money() {{
                                                amount = 98946L;
                                                currency = "excepturi";
                                            }};
                                            uid = "sed";
                                            variationName = "enim";
                                            variationTotalPriceMoney = new Money() {{
                                                amount = 99113L;
                                                currency = "atque";
                                            }};
                                        }}),
                                    }};
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("accusamus", "incidunt");
                                        put("dicta", "quo");
                                        put("natus", "excepturi");
                                        put("natus", "hic");
                                    }};
                                    netAmounts = new OrderMoneyAmounts() {{
                                        discountMoney = new Money() {{
                                            amount = 281326L;
                                            currency = "nisi";
                                        }};;
                                        serviceChargeMoney = new Money() {{
                                            amount = 588513L;
                                            currency = "delectus";
                                        }};;
                                        taxMoney = new Money() {{
                                            amount = 433282L;
                                            currency = "delectus";
                                        }};;
                                        tipMoney = new Money() {{
                                            amount = 107645L;
                                            currency = "quod";
                                        }};;
                                        totalMoney = new Money() {{
                                            amount = 958248L;
                                            currency = "quasi";
                                        }};;
                                    }};;
                                    pricingOptions = new OrderPricingOptions() {{
                                        autoApplyDiscounts = false;
                                        autoApplyTaxes = false;
                                    }};;
                                    referenceId = "dolorum";
                                    refunds = new org.openapis.openapi.models.shared.Refund[]{{
                                        add(new Refund(                new Money() {{
                                                            amount = 285888L;
                                                            currency = "accusamus";
                                                        }};, "distinctio", "dolorum", "voluptate", "soluta", "hic", "quos") {{
                                            additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                                add(new AdditionalRecipient(                new Money() {{
                                                                    amount = 420626L;
                                                                    currency = "omnis";
                                                                }};, "itaque") {{
                                                    amountMoney = new Money() {{
                                                        amount = 60284L;
                                                        currency = "sed";
                                                    }};
                                                    description = "sequi";
                                                    locationId = "minus";
                                                    receivableId = "suscipit";
                                                }}),
                                                add(new AdditionalRecipient(                new Money() {{
                                                                    amount = 32474L;
                                                                    currency = "ab";
                                                                }};, "sunt") {{
                                                    amountMoney = new Money() {{
                                                        amount = 385500L;
                                                        currency = "harum";
                                                    }};
                                                    description = "commodi";
                                                    locationId = "fugit";
                                                    receivableId = "aliquid";
                                                }}),
                                                add(new AdditionalRecipient(                new Money() {{
                                                                    amount = 478264L;
                                                                    currency = "unde";
                                                                }};, "quos") {{
                                                    amountMoney = new Money() {{
                                                        amount = 875144L;
                                                        currency = "expedita";
                                                    }};
                                                    description = "id";
                                                    locationId = "consequatur";
                                                    receivableId = "quis";
                                                }}),
                                                add(new AdditionalRecipient(                new Money() {{
                                                                    amount = 5486L;
                                                                    currency = "impedit";
                                                                }};, "ipsum") {{
                                                    amountMoney = new Money() {{
                                                        amount = 526474L;
                                                        currency = "placeat";
                                                    }};
                                                    description = "suscipit";
                                                    locationId = "in";
                                                    receivableId = "odit";
                                                }}),
                                            }};
                                            amountMoney = new Money() {{
                                                amount = 74837L;
                                                currency = "aperiam";
                                            }};
                                            createdAt = "sequi";
                                            id = "f1a40c0f-3ec8-4688-bd8e-c6fc03128f0a";
                                            locationId = "mollitia";
                                            processingFeeMoney = new Money() {{
                                                amount = 657288L;
                                                currency = "officiis";
                                            }};
                                            reason = "vero";
                                            status = "repudiandae";
                                            tenderId = "sit";
                                            transactionId = "aut";
                                        }}),
                                    }};
                                    returnAmounts = new OrderMoneyAmounts() {{
                                        discountMoney = new Money() {{
                                            amount = 450574L;
                                            currency = "neque";
                                        }};;
                                        serviceChargeMoney = new Money() {{
                                            amount = 127032L;
                                            currency = "harum";
                                        }};;
                                        taxMoney = new Money() {{
                                            amount = 907301L;
                                            currency = "quis";
                                        }};;
                                        tipMoney = new Money() {{
                                            amount = 5116L;
                                            currency = "provident";
                                        }};;
                                        totalMoney = new Money() {{
                                            amount = 758764L;
                                            currency = "exercitationem";
                                        }};;
                                    }};;
                                    returns = new org.openapis.openapi.models.shared.OrderReturn[]{{
                                        add(new OrderReturn() {{
                                            returnAmounts = new OrderMoneyAmounts() {{
                                                discountMoney = new Money() {{
                                                    amount = 543079L;
                                                    currency = "quam";
                                                }};
                                                serviceChargeMoney = new Money() {{
                                                    amount = 122678L;
                                                    currency = "neque";
                                                }};
                                                taxMoney = new Money() {{
                                                    amount = 63741L;
                                                    currency = "a";
                                                }};
                                                tipMoney = new Money() {{
                                                    amount = 54132L;
                                                    currency = "aliquid";
                                                }};
                                                totalMoney = new Money() {{
                                                    amount = 980075L;
                                                    currency = "voluptatem";
                                                }};
                                            }};
                                            returnDiscounts = new org.openapis.openapi.models.shared.OrderReturnDiscount[]{{
                                                add(new OrderReturnDiscount() {{
                                                    amountMoney = new Money() {{
                                                        amount = 776795L;
                                                        currency = "voluptates";
                                                    }};
                                                    appliedMoney = new Money() {{
                                                        amount = 316584L;
                                                        currency = "enim";
                                                    }};
                                                    catalogObjectId = "officia";
                                                    catalogVersion = 557797L;
                                                    name = "Mrs. Jennie Kessler";
                                                    percentage = "quisquam";
                                                    scope = "iste";
                                                    sourceDiscountUid = "quam";
                                                    type = "iste";
                                                    uid = "doloremque";
                                                }}),
                                                add(new OrderReturnDiscount() {{
                                                    amountMoney = new Money() {{
                                                        amount = 352902L;
                                                        currency = "hic";
                                                    }};
                                                    appliedMoney = new Money() {{
                                                        amount = 989781L;
                                                        currency = "ducimus";
                                                    }};
                                                    catalogObjectId = "sint";
                                                    catalogVersion = 485972L;
                                                    name = "Greg Sipes";
                                                    percentage = "ex";
                                                    scope = "non";
                                                    sourceDiscountUid = "nobis";
                                                    type = "in";
                                                    uid = "vero";
                                                }}),
                                                add(new OrderReturnDiscount() {{
                                                    amountMoney = new Money() {{
                                                        amount = 442266L;
                                                        currency = "dignissimos";
                                                    }};
                                                    appliedMoney = new Money() {{
                                                        amount = 531039L;
                                                        currency = "mollitia";
                                                    }};
                                                    catalogObjectId = "nihil";
                                                    catalogVersion = 295537L;
                                                    name = "Julius Nicolas";
                                                    percentage = "laudantium";
                                                    scope = "dolor";
                                                    sourceDiscountUid = "consequuntur";
                                                    type = "libero";
                                                    uid = "libero";
                                                }}),
                                            }};
                                            returnLineItems = new org.openapis.openapi.models.shared.OrderReturnLineItem[]{{
                                                add(new OrderReturnLineItem("praesentium") {{
                                                    appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                        add(new OrderLineItemAppliedDiscount("odit") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 518038L;
                                                                currency = "laboriosam";
                                                            }};
                                                            discountUid = "fugit";
                                                            uid = "illum";
                                                        }}),
                                                        add(new OrderLineItemAppliedDiscount("molestias") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 681125L;
                                                                currency = "velit";
                                                            }};
                                                            discountUid = "veritatis";
                                                            uid = "doloribus";
                                                        }}),
                                                    }};
                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                        add(new OrderLineItemAppliedTax("nisi") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 86920L;
                                                                currency = "tempora";
                                                            }};
                                                            taxUid = "deserunt";
                                                            uid = "deserunt";
                                                        }}),
                                                        add(new OrderLineItemAppliedTax("reprehenderit") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 688157L;
                                                                currency = "placeat";
                                                            }};
                                                            taxUid = "debitis";
                                                            uid = "quo";
                                                        }}),
                                                        add(new OrderLineItemAppliedTax("dolores") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 999709L;
                                                                currency = "eius";
                                                            }};
                                                            taxUid = "magnam";
                                                            uid = "dolore";
                                                        }}),
                                                    }};
                                                    basePriceMoney = new Money() {{
                                                        amount = 188419L;
                                                        currency = "qui";
                                                    }};
                                                    catalogObjectId = "voluptates";
                                                    catalogVersion = 598919L;
                                                    grossReturnMoney = new Money() {{
                                                        amount = 649826L;
                                                        currency = "veniam";
                                                    }};
                                                    itemType = "at";
                                                    name = "Rogelio Block";
                                                    note = "repellendus";
                                                    quantity = "dignissimos";
                                                    quantityUnit = new OrderQuantityUnit() {{
                                                        catalogVersion = 153395L;
                                                        measurementUnit = new MeasurementUnit() {{
                                                            areaUnit = "officia";
                                                            customUnit = new MeasurementUnitCustom("corrupti", "tenetur") {{
                                                                abbreviation = "voluptatum";
                                                                name = "Miss Andy Lehner";
                                                            }};
                                                            genericUnit = "repudiandae";
                                                            lengthUnit = "ex";
                                                            timeUnit = "quos";
                                                            type = "magni";
                                                            volumeUnit = "repudiandae";
                                                            weightUnit = "sunt";
                                                        }};
                                                        precision = 806335L;
                                                    }};
                                                    returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                                        add(new OrderReturnLineItemModifier() {{
                                                            basePriceMoney = new Money() {{
                                                                amount = 847548L;
                                                                currency = "facilis";
                                                            }};
                                                            catalogObjectId = "necessitatibus";
                                                            catalogVersion = 148997L;
                                                            name = "Meredith Heathcote";
                                                            sourceModifierUid = "deleniti";
                                                            totalPriceMoney = new Money() {{
                                                                amount = 149214L;
                                                                currency = "magnam";
                                                            }};
                                                            uid = "dignissimos";
                                                        }}),
                                                    }};
                                                    sourceLineItemUid = "facere";
                                                    totalDiscountMoney = new Money() {{
                                                        amount = 104748L;
                                                        currency = "consequuntur";
                                                    }};
                                                    totalMoney = new Money() {{
                                                        amount = 152546L;
                                                        currency = "minus";
                                                    }};
                                                    totalTaxMoney = new Money() {{
                                                        amount = 588889L;
                                                        currency = "doloribus";
                                                    }};
                                                    uid = "aliquid";
                                                    variationName = "iusto";
                                                    variationTotalPriceMoney = new Money() {{
                                                        amount = 423692L;
                                                        currency = "nihil";
                                                    }};
                                                }}),
                                                add(new OrderReturnLineItem("earum") {{
                                                    appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                        add(new OrderLineItemAppliedDiscount("nostrum") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 660728L;
                                                                currency = "dolores";
                                                            }};
                                                            discountUid = "ducimus";
                                                            uid = "occaecati";
                                                        }}),
                                                        add(new OrderLineItemAppliedDiscount("dolor") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 541650L;
                                                                currency = "sequi";
                                                            }};
                                                            discountUid = "commodi";
                                                            uid = "quam";
                                                        }}),
                                                        add(new OrderLineItemAppliedDiscount("aut") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 375553L;
                                                                currency = "dolor";
                                                            }};
                                                            discountUid = "facere";
                                                            uid = "est";
                                                        }}),
                                                        add(new OrderLineItemAppliedDiscount("ea") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 480917L;
                                                                currency = "excepturi";
                                                            }};
                                                            discountUid = "doloremque";
                                                            uid = "natus";
                                                        }}),
                                                    }};
                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                        add(new OrderLineItemAppliedTax("ex") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 645320L;
                                                                currency = "officiis";
                                                            }};
                                                            taxUid = "nam";
                                                            uid = "totam";
                                                        }}),
                                                        add(new OrderLineItemAppliedTax("adipisci") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 288515L;
                                                                currency = "atque";
                                                            }};
                                                            taxUid = "consequatur";
                                                            uid = "reprehenderit";
                                                        }}),
                                                        add(new OrderLineItemAppliedTax("quos") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 31409L;
                                                                currency = "illum";
                                                            }};
                                                            taxUid = "laudantium";
                                                            uid = "voluptatibus";
                                                        }}),
                                                        add(new OrderLineItemAppliedTax("omnis") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 701054L;
                                                                currency = "rem";
                                                            }};
                                                            taxUid = "unde";
                                                            uid = "pariatur";
                                                        }}),
                                                    }};
                                                    basePriceMoney = new Money() {{
                                                        amount = 778183L;
                                                        currency = "mollitia";
                                                    }};
                                                    catalogObjectId = "nisi";
                                                    catalogVersion = 1789L;
                                                    grossReturnMoney = new Money() {{
                                                        amount = 439874L;
                                                        currency = "ipsam";
                                                    }};
                                                    itemType = "commodi";
                                                    name = "Laurie Wolff PhD";
                                                    note = "cum";
                                                    quantity = "earum";
                                                    quantityUnit = new OrderQuantityUnit() {{
                                                        catalogVersion = 405287L;
                                                        measurementUnit = new MeasurementUnit() {{
                                                            areaUnit = "iusto";
                                                            customUnit = new MeasurementUnitCustom("fuga", "ipsum") {{
                                                                abbreviation = "quae";
                                                                name = "Dr. Ana Toy III";
                                                            }};
                                                            genericUnit = "sit";
                                                            lengthUnit = "in";
                                                            timeUnit = "aut";
                                                            type = "nulla";
                                                            volumeUnit = "vel";
                                                            weightUnit = "earum";
                                                        }};
                                                        precision = 130565L;
                                                    }};
                                                    returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                                        add(new OrderReturnLineItemModifier() {{
                                                            basePriceMoney = new Money() {{
                                                                amount = 446128L;
                                                                currency = "hic";
                                                            }};
                                                            catalogObjectId = "nemo";
                                                            catalogVersion = 520467L;
                                                            name = "Lorene Nikolaus";
                                                            sourceModifierUid = "dolorum";
                                                            totalPriceMoney = new Money() {{
                                                                amount = 644678L;
                                                                currency = "odio";
                                                            }};
                                                            uid = "pariatur";
                                                        }}),
                                                        add(new OrderReturnLineItemModifier() {{
                                                            basePriceMoney = new Money() {{
                                                                amount = 511056L;
                                                                currency = "consequatur";
                                                            }};
                                                            catalogObjectId = "et";
                                                            catalogVersion = 27735L;
                                                            name = "Jordan Becker";
                                                            sourceModifierUid = "asperiores";
                                                            totalPriceMoney = new Money() {{
                                                                amount = 965472L;
                                                                currency = "corporis";
                                                            }};
                                                            uid = "tenetur";
                                                        }}),
                                                        add(new OrderReturnLineItemModifier() {{
                                                            basePriceMoney = new Money() {{
                                                                amount = 389104L;
                                                                currency = "recusandae";
                                                            }};
                                                            catalogObjectId = "temporibus";
                                                            catalogVersion = 154559L;
                                                            name = "Armando Bernier V";
                                                            sourceModifierUid = "voluptatum";
                                                            totalPriceMoney = new Money() {{
                                                                amount = 127271L;
                                                                currency = "aliquid";
                                                            }};
                                                            uid = "perspiciatis";
                                                        }}),
                                                    }};
                                                    sourceLineItemUid = "tempore";
                                                    totalDiscountMoney = new Money() {{
                                                        amount = 393835L;
                                                        currency = "similique";
                                                    }};
                                                    totalMoney = new Money() {{
                                                        amount = 456645L;
                                                        currency = "alias";
                                                    }};
                                                    totalTaxMoney = new Money() {{
                                                        amount = 728027L;
                                                        currency = "perferendis";
                                                    }};
                                                    uid = "possimus";
                                                    variationName = "temporibus";
                                                    variationTotalPriceMoney = new Money() {{
                                                        amount = 550119L;
                                                        currency = "consequuntur";
                                                    }};
                                                }}),
                                            }};
                                            returnServiceCharges = new org.openapis.openapi.models.shared.OrderReturnServiceCharge[]{{
                                                add(new OrderReturnServiceCharge() {{
                                                    amountMoney = new Money() {{
                                                        amount = 253805L;
                                                        currency = "hic";
                                                    }};
                                                    appliedMoney = new Money() {{
                                                        amount = 997625L;
                                                        currency = "delectus";
                                                    }};
                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                        add(new OrderLineItemAppliedTax("saepe") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 844253L;
                                                                currency = "et";
                                                            }};
                                                            taxUid = "officiis";
                                                            uid = "vitae";
                                                        }}),
                                                        add(new OrderLineItemAppliedTax("quisquam") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 171156L;
                                                                currency = "illo";
                                                            }};
                                                            taxUid = "nulla";
                                                            uid = "nulla";
                                                        }}),
                                                        add(new OrderLineItemAppliedTax("deleniti") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 415732L;
                                                                currency = "sint";
                                                            }};
                                                            taxUid = "doloremque";
                                                            uid = "sequi";
                                                        }}),
                                                    }};
                                                    calculationPhase = "quidem";
                                                    catalogObjectId = "dicta";
                                                    catalogVersion = 842364L;
                                                    name = "Maxine Koss";
                                                    percentage = "vitae";
                                                    sourceServiceChargeUid = "accusamus";
                                                    taxable = false;
                                                    totalMoney = new Money() {{
                                                        amount = 735537L;
                                                        currency = "enim";
                                                    }};
                                                    totalTaxMoney = new Money() {{
                                                        amount = 986360L;
                                                        currency = "possimus";
                                                    }};
                                                    uid = "non";
                                                }}),
                                                add(new OrderReturnServiceCharge() {{
                                                    amountMoney = new Money() {{
                                                        amount = 4891L;
                                                        currency = "tempore";
                                                    }};
                                                    appliedMoney = new Money() {{
                                                        amount = 949209L;
                                                        currency = "earum";
                                                    }};
                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                        add(new OrderLineItemAppliedTax("minus") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 248846L;
                                                                currency = "eius";
                                                            }};
                                                            taxUid = "cupiditate";
                                                            uid = "sit";
                                                        }}),
                                                    }};
                                                    calculationPhase = "sapiente";
                                                    catalogObjectId = "odit";
                                                    catalogVersion = 51685L;
                                                    name = "Annette Hackett";
                                                    percentage = "ad";
                                                    sourceServiceChargeUid = "unde";
                                                    taxable = false;
                                                    totalMoney = new Money() {{
                                                        amount = 7486L;
                                                        currency = "quaerat";
                                                    }};
                                                    totalTaxMoney = new Money() {{
                                                        amount = 240572L;
                                                        currency = "maxime";
                                                    }};
                                                    uid = "distinctio";
                                                }}),
                                                add(new OrderReturnServiceCharge() {{
                                                    amountMoney = new Money() {{
                                                        amount = 254168L;
                                                        currency = "voluptas";
                                                    }};
                                                    appliedMoney = new Money() {{
                                                        amount = 133575L;
                                                        currency = "possimus";
                                                    }};
                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                        add(new OrderLineItemAppliedTax("quasi") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 738980L;
                                                                currency = "minus";
                                                            }};
                                                            taxUid = "cupiditate";
                                                            uid = "cupiditate";
                                                        }}),
                                                        add(new OrderLineItemAppliedTax("accusamus") {{
                                                            appliedMoney = new Money() {{
                                                                amount = 493610L;
                                                                currency = "maiores";
                                                            }};
                                                            taxUid = "iste";
                                                            uid = "totam";
                                                        }}),
                                                    }};
                                                    calculationPhase = "eius";
                                                    catalogObjectId = "dignissimos";
                                                    catalogVersion = 602135L;
                                                    name = "Shelley McDermott";
                                                    percentage = "officia";
                                                    sourceServiceChargeUid = "ut";
                                                    taxable = false;
                                                    totalMoney = new Money() {{
                                                        amount = 108040L;
                                                        currency = "sequi";
                                                    }};
                                                    totalTaxMoney = new Money() {{
                                                        amount = 874066L;
                                                        currency = "laboriosam";
                                                    }};
                                                    uid = "dolorum";
                                                }}),
                                            }};
                                            returnTaxes = new org.openapis.openapi.models.shared.OrderReturnTax[]{{
                                                add(new OrderReturnTax() {{
                                                    appliedMoney = new Money() {{
                                                        amount = 772987L;
                                                        currency = "perspiciatis";
                                                    }};
                                                    catalogObjectId = "vitae";
                                                    catalogVersion = 384150L;
                                                    name = "Bryan Pouros";
                                                    percentage = "iure";
                                                    scope = "architecto";
                                                    sourceTaxUid = "illum";
                                                    type = "quae";
                                                    uid = "quibusdam";
                                                }}),
                                                add(new OrderReturnTax() {{
                                                    appliedMoney = new Money() {{
                                                        amount = 616016L;
                                                        currency = "molestias";
                                                    }};
                                                    catalogObjectId = "quod";
                                                    catalogVersion = 777533L;
                                                    name = "Wallace Mante";
                                                    percentage = "totam";
                                                    scope = "ex";
                                                    sourceTaxUid = "quae";
                                                    type = "beatae";
                                                    uid = "praesentium";
                                                }}),
                                                add(new OrderReturnTax() {{
                                                    appliedMoney = new Money() {{
                                                        amount = 413871L;
                                                        currency = "vero";
                                                    }};
                                                    catalogObjectId = "temporibus";
                                                    catalogVersion = 454416L;
                                                    name = "Mr. Sadie Bechtelar";
                                                    percentage = "est";
                                                    scope = "cumque";
                                                    sourceTaxUid = "harum";
                                                    type = "dicta";
                                                    uid = "nesciunt";
                                                }}),
                                            }};
                                            roundingAdjustment = new OrderRoundingAdjustment() {{
                                                amountMoney = new Money() {{
                                                    amount = 678161L;
                                                    currency = "placeat";
                                                }};
                                                name = "Debbie Schowalter II";
                                                uid = "sequi";
                                            }};
                                            sourceOrderId = "quidem";
                                            uid = "corrupti";
                                        }}),
                                    }};
                                    rewards = new org.openapis.openapi.models.shared.OrderReward[]{{
                                        add(new OrderReward("officiis", "voluptas") {{
                                            id = "6c575a1e-2668-4730-be37-b0e8fbc48ddc";
                                            rewardTierId = "esse";
                                        }}),
                                        add(new OrderReward("corrupti", "occaecati") {{
                                            id = "9b535105-0501-44dc-a105-882484c36e94";
                                            rewardTierId = "corrupti";
                                        }}),
                                    }};
                                    roundingAdjustment = new OrderRoundingAdjustment() {{
                                        amountMoney = new Money() {{
                                            amount = 176208L;
                                            currency = "iusto";
                                        }};;
                                        name = "Victor Shields";
                                        uid = "debitis";
                                    }};;
                                    serviceCharges = new org.openapis.openapi.models.shared.OrderServiceCharge[]{{
                                        add(new OrderServiceCharge() {{
                                            amountMoney = new Money() {{
                                                amount = 738207L;
                                                currency = "voluptatum";
                                            }};
                                            appliedMoney = new Money() {{
                                                amount = 982866L;
                                                currency = "quo";
                                            }};
                                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                add(new OrderLineItemAppliedTax("ad") {{
                                                    appliedMoney = new Money() {{
                                                        amount = 849989L;
                                                        currency = "enim";
                                                    }};
                                                    taxUid = "natus";
                                                    uid = "sapiente";
                                                }}),
                                            }};
                                            calculationPhase = "iure";
                                            catalogObjectId = "tempore";
                                            catalogVersion = 604338L;
                                            metadata = new java.util.HashMap<String, String>() {{
                                                put("excepturi", "rem");
                                                put("odit", "eaque");
                                                put("tempore", "accusamus");
                                                put("ipsa", "iusto");
                                            }};
                                            name = "Kevin Lueilwitz";
                                            percentage = "commodi";
                                            taxable = false;
                                            totalMoney = new Money() {{
                                                amount = 750424L;
                                                currency = "cupiditate";
                                            }};
                                            totalTaxMoney = new Money() {{
                                                amount = 896177L;
                                                currency = "consequuntur";
                                            }};
                                            type = "maiores";
                                            uid = "esse";
                                        }}),
                                    }};
                                    source = new OrderSource() {{
                                        name = "Josephine Hagenes";
                                    }};;
                                    state = "accusantium";
                                    taxes = new org.openapis.openapi.models.shared.OrderLineItemTax[]{{
                                        add(new OrderLineItemTax() {{
                                            appliedMoney = new Money() {{
                                                amount = 983308L;
                                                currency = "tempora";
                                            }};
                                            autoApplied = false;
                                            catalogObjectId = "reprehenderit";
                                            catalogVersion = 533389L;
                                            metadata = new java.util.HashMap<String, String>() {{
                                                put("cum", "ad");
                                                put("amet", "error");
                                                put("magnam", "praesentium");
                                                put("sequi", "maiores");
                                            }};
                                            name = "Eleanor Labadie";
                                            percentage = "delectus";
                                            scope = "impedit";
                                            type = "quisquam";
                                            uid = "distinctio";
                                        }}),
                                    }};
                                    tenders = new org.openapis.openapi.models.shared.Tender[]{{
                                        add(new Tender("laborum") {{
                                            additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                                add(new AdditionalRecipient(                new Money() {{
                                                                    amount = 258807L;
                                                                    currency = "tempore";
                                                                }};, "sequi") {{
                                                    amountMoney = new Money() {{
                                                        amount = 834183L;
                                                        currency = "minima";
                                                    }};
                                                    description = "numquam";
                                                    locationId = "ab";
                                                    receivableId = "expedita";
                                                }}),
                                                add(new AdditionalRecipient(                new Money() {{
                                                                    amount = 430547L;
                                                                    currency = "nisi";
                                                                }};, "suscipit") {{
                                                    amountMoney = new Money() {{
                                                        amount = 576770L;
                                                        currency = "amet";
                                                    }};
                                                    description = "voluptatibus";
                                                    locationId = "amet";
                                                    receivableId = "ad";
                                                }}),
                                                add(new AdditionalRecipient(                new Money() {{
                                                                    amount = 202737L;
                                                                    currency = "magni";
                                                                }};, "consequuntur") {{
                                                    amountMoney = new Money() {{
                                                        amount = 164821L;
                                                        currency = "quis";
                                                    }};
                                                    description = "expedita";
                                                    locationId = "accusamus";
                                                    receivableId = "laborum";
                                                }}),
                                            }};
                                            amountMoney = new Money() {{
                                                amount = 60699L;
                                                currency = "illo";
                                            }};
                                            cardDetails = new TenderCardDetails() {{
                                                card = new Card() {{
                                                    billingAddress = new Address() {{
                                                        addressLine1 = "temporibus";
                                                        addressLine2 = "recusandae";
                                                        addressLine3 = "porro";
                                                        administrativeDistrictLevel1 = "sequi";
                                                        administrativeDistrictLevel2 = "reprehenderit";
                                                        administrativeDistrictLevel3 = "sint";
                                                        country = "Saint Martin";
                                                        firstName = "Garfield";
                                                        lastName = "Muller";
                                                        locality = "quas";
                                                        organization = "saepe";
                                                        postalCode = "08257-3819";
                                                        sublocality = "omnis";
                                                        sublocality2 = "itaque";
                                                        sublocality3 = "aspernatur";
                                                    }};
                                                    bin = "et";
                                                    cardBrand = "fugiat";
                                                    cardType = "provident";
                                                    cardholderName = "voluptatem";
                                                    customerId = "earum";
                                                    enabled = false;
                                                    expMonth = 845300L;
                                                    expYear = 316099L;
                                                    fingerprint = "ipsum";
                                                    id = "776bfc76-77f0-4f50-8a6e-4828fb6daee1";
                                                    last4 = "sint";
                                                    prepaidType = "cumque";
                                                    referenceId = "explicabo";
                                                    version = 390897L;
                                                }};
                                                entryMethod = "quisquam";
                                                status = "quae";
                                            }};
                                            cashDetails = new TenderCashDetails() {{
                                                buyerTenderedMoney = new Money() {{
                                                    amount = 774664L;
                                                    currency = "facilis";
                                                }};
                                                changeBackMoney = new Money() {{
                                                    amount = 404610L;
                                                    currency = "quasi";
                                                }};
                                            }};
                                            createdAt = "atque";
                                            customerId = "maxime";
                                            id = "6331cabd-ab76-47a4-84dd-0da0abe58eb3";
                                            locationId = "nulla";
                                            note = "quis";
                                            paymentId = "labore";
                                            processingFeeMoney = new Money() {{
                                                amount = 747336L;
                                                currency = "animi";
                                            }};
                                            tipMoney = new Money() {{
                                                amount = 74099L;
                                                currency = "eligendi";
                                            }};
                                            transactionId = "facilis";
                                            type = "nesciunt";
                                        }}),
                                        add(new Tender("natus") {{
                                            additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                                add(new AdditionalRecipient(                new Money() {{
                                                                    amount = 357745L;
                                                                    currency = "maxime";
                                                                }};, "quasi") {{
                                                    amountMoney = new Money() {{
                                                        amount = 304021L;
                                                        currency = "sint";
                                                    }};
                                                    description = "expedita";
                                                    locationId = "molestias";
                                                    receivableId = "saepe";
                                                }}),
                                                add(new AdditionalRecipient(                new Money() {{
                                                                    amount = 523233L;
                                                                    currency = "dignissimos";
                                                                }};, "maiores") {{
                                                    amountMoney = new Money() {{
                                                        amount = 517842L;
                                                        currency = "harum";
                                                    }};
                                                    description = "aspernatur";
                                                    locationId = "ipsam";
                                                    receivableId = "debitis";
                                                }}),
                                                add(new AdditionalRecipient(                new Money() {{
                                                                    amount = 139578L;
                                                                    currency = "quis";
                                                                }};, "voluptas") {{
                                                    amountMoney = new Money() {{
                                                        amount = 407877L;
                                                        currency = "incidunt";
                                                    }};
                                                    description = "corrupti";
                                                    locationId = "aspernatur";
                                                    receivableId = "dolorem";
                                                }}),
                                                add(new AdditionalRecipient(                new Money() {{
                                                                    amount = 47897L;
                                                                    currency = "optio";
                                                                }};, "rerum") {{
                                                    amountMoney = new Money() {{
                                                        amount = 735506L;
                                                        currency = "repudiandae";
                                                    }};
                                                    description = "molestias";
                                                    locationId = "exercitationem";
                                                    receivableId = "optio";
                                                }}),
                                            }};
                                            amountMoney = new Money() {{
                                                amount = 753580L;
                                                currency = "tempore";
                                            }};
                                            cardDetails = new TenderCardDetails() {{
                                                card = new Card() {{
                                                    billingAddress = new Address() {{
                                                        addressLine1 = "fugit";
                                                        addressLine2 = "quod";
                                                        addressLine3 = "mollitia";
                                                        administrativeDistrictLevel1 = "laudantium";
                                                        administrativeDistrictLevel2 = "iusto";
                                                        administrativeDistrictLevel3 = "sint";
                                                        country = "Bahamas";
                                                        firstName = "Kathlyn";
                                                        lastName = "Skiles";
                                                        locality = "in";
                                                        organization = "ipsum";
                                                        postalCode = "06601-9049";
                                                        sublocality = "unde";
                                                        sublocality2 = "sed";
                                                        sublocality3 = "qui";
                                                    }};
                                                    bin = "totam";
                                                    cardBrand = "cum";
                                                    cardType = "nemo";
                                                    cardholderName = "ex";
                                                    customerId = "aperiam";
                                                    enabled = false;
                                                    expMonth = 390418L;
                                                    expYear = 314354L;
                                                    fingerprint = "similique";
                                                    id = "5074befb-8af6-4849-92b9-9404363a0964";
                                                    last4 = "impedit";
                                                    prepaidType = "voluptatem";
                                                    referenceId = "ipsam";
                                                    version = 244046L;
                                                }};
                                                entryMethod = "praesentium";
                                                status = "voluptate";
                                            }};
                                            cashDetails = new TenderCashDetails() {{
                                                buyerTenderedMoney = new Money() {{
                                                    amount = 408565L;
                                                    currency = "eveniet";
                                                }};
                                                changeBackMoney = new Money() {{
                                                    amount = 191852L;
                                                    currency = "iste";
                                                }};
                                            }};
                                            createdAt = "fugiat";
                                            customerId = "vero";
                                            id = "f9c765df-d735-44e5-8b94-977017a26204";
                                            locationId = "libero";
                                            note = "soluta";
                                            paymentId = "explicabo";
                                            processingFeeMoney = new Money() {{
                                                amount = 428691L;
                                                currency = "quod";
                                            }};
                                            tipMoney = new Money() {{
                                                amount = 671449L;
                                                currency = "eius";
                                            }};
                                            transactionId = "eveniet";
                                            type = "cupiditate";
                                        }}),
                                    }};
                                    totalDiscountMoney = new Money() {{
                                        amount = 569764L;
                                        currency = "quos";
                                    }};;
                                    totalMoney = new Money() {{
                                        amount = 176870L;
                                        currency = "voluptatum";
                                    }};;
                                    totalServiceChargeMoney = new Money() {{
                                        amount = 439037L;
                                        currency = "iste";
                                    }};;
                                    totalTaxMoney = new Money() {{
                                        amount = 819038L;
                                        currency = "debitis";
                                    }};;
                                    totalTipMoney = new Money() {{
                                        amount = 971980L;
                                        currency = "optio";
                                    }};;
                                    updatedAt = "perferendis";
                                    version = 689087L;
                                }};;
                            }};, "fugit");            

            PutV2OrdersOrderIdResponse res = sdk.orders.putV2OrdersOrderId(req, new PutV2OrdersOrderIdSecurity("velit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
