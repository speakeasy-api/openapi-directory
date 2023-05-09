# checkout

### Available Operations

* [createCheckout](#createcheckout) - CreateCheckout

## createCheckout

Links a `checkoutId` to a `checkout_page_url` that customers are
directed to in order to provide their payment information using a
payment processing workflow hosted on connect.squareup.com.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCheckoutRequest;
import org.openapis.openapi.models.operations.CreateCheckoutResponse;
import org.openapis.openapi.models.operations.CreateCheckoutSecurity;
import org.openapis.openapi.models.shared.AdditionalRecipient;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Card;
import org.openapis.openapi.models.shared.ChargeRequestAdditionalRecipient;
import org.openapis.openapi.models.shared.CreateCheckoutRequest;
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

            CreateCheckoutRequest req = new CreateCheckoutRequest(                new CreateCheckoutRequest("officia",                 new CreateOrderRequest() {{
                                                idempotencyKey = "sint";
                                                order = new Order("laborum") {{
                                                    closedAt = "dolor";
                                                    createdAt = "ad";
                                                    customerId = "illum";
                                                    discounts = new org.openapis.openapi.models.shared.OrderLineItemDiscount[]{{
                                                        add(new OrderLineItemDiscount() {{
                                                            amountMoney = new Money() {{
                                                                amount = 561399L;
                                                                currency = "voluptas";
                                                            }};
                                                            appliedMoney = new Money() {{
                                                                amount = 713246L;
                                                                currency = "voluptas";
                                                            }};
                                                            catalogObjectId = "maiores";
                                                            catalogVersion = 412024L;
                                                            metadata = new java.util.HashMap<String, String>() {{
                                                                put("delectus", "accusamus");
                                                                put("reiciendis", "consequatur");
                                                            }};
                                                            name = "Donna Volkman";
                                                            percentage = "quaerat";
                                                            pricingRuleId = "numquam";
                                                            rewardIds = new String[]{{
                                                                add("cum"),
                                                            }};
                                                            scope = "incidunt";
                                                            type = "dolores";
                                                            uid = "enim";
                                                        }}),
                                                    }};
                                                    fulfillments = new org.openapis.openapi.models.shared.OrderFulfillment[]{{
                                                        add(new OrderFulfillment() {{
                                                            metadata = new java.util.HashMap<String, String>() {{
                                                                put("omnis", "excepturi");
                                                                put("eos", "quisquam");
                                                                put("corrupti", "repellendus");
                                                            }};
                                                            pickupDetails = new OrderFulfillmentPickupDetails() {{
                                                                acceptedAt = "cum";
                                                                autoCompleteDuration = "quibusdam";
                                                                cancelReason = "est";
                                                                canceledAt = "commodi";
                                                                curbsidePickupDetails = new OrderFulfillmentPickupDetailsCurbsidePickupDetails() {{
                                                                    buyerArrivedAt = "similique";
                                                                    curbsideDetails = "autem";
                                                                }};
                                                                expiredAt = "dicta";
                                                                expiresAt = "recusandae";
                                                                isCurbsidePickup = false;
                                                                note = "sapiente";
                                                                pickedUpAt = "id";
                                                                pickupAt = "odit";
                                                                pickupWindowDuration = "inventore";
                                                                placedAt = "iste";
                                                                prepTimeDuration = "atque";
                                                                readyAt = "explicabo";
                                                                recipient = new OrderFulfillmentRecipient() {{
                                                                    address = new Address() {{
                                                                        addressLine1 = "ullam";
                                                                        addressLine2 = "atque";
                                                                        addressLine3 = "doloribus";
                                                                        administrativeDistrictLevel1 = "pariatur";
                                                                        administrativeDistrictLevel2 = "aut";
                                                                        administrativeDistrictLevel3 = "similique";
                                                                        country = "Namibia";
                                                                        firstName = "Sylvan";
                                                                        lastName = "Reilly";
                                                                        locality = "animi";
                                                                        organization = "labore";
                                                                        postalCode = "94829";
                                                                        sublocality = "a";
                                                                        sublocality2 = "perferendis";
                                                                        sublocality3 = "quaerat";
                                                                    }};
                                                                    customerId = "excepturi";
                                                                    displayName = "aliquid";
                                                                    emailAddress = "dolore";
                                                                    phoneNumber = "voluptatem";
                                                                }};
                                                                rejectedAt = "illum";
                                                                scheduleType = "laboriosam";
                                                            }};
                                                            shipmentDetails = new OrderFulfillmentShipmentDetails() {{
                                                                cancelReason = "culpa";
                                                                canceledAt = "dicta";
                                                                carrier = "atque";
                                                                expectedShippedAt = "ratione";
                                                                failedAt = "vitae";
                                                                failureReason = "quisquam";
                                                                inProgressAt = "atque";
                                                                packagedAt = "nihil";
                                                                placedAt = "culpa";
                                                                recipient = new OrderFulfillmentRecipient() {{
                                                                    address = new Address() {{
                                                                        addressLine1 = "temporibus";
                                                                        addressLine2 = "a";
                                                                        addressLine3 = "ad";
                                                                        administrativeDistrictLevel1 = "cupiditate";
                                                                        administrativeDistrictLevel2 = "suscipit";
                                                                        administrativeDistrictLevel3 = "reiciendis";
                                                                        country = "Spain";
                                                                        firstName = "Vida";
                                                                        lastName = "Bergstrom";
                                                                        locality = "mollitia";
                                                                        organization = "possimus";
                                                                        postalCode = "24685-0717";
                                                                        sublocality = "architecto";
                                                                        sublocality2 = "sint";
                                                                        sublocality3 = "eligendi";
                                                                    }};
                                                                    customerId = "occaecati";
                                                                    displayName = "quis";
                                                                    emailAddress = "tempore";
                                                                    phoneNumber = "officia";
                                                                }};
                                                                shippedAt = "iste";
                                                                shippingNote = "unde";
                                                                shippingType = "quas";
                                                                trackingNumber = "laboriosam";
                                                                trackingUrl = "ducimus";
                                                            }};
                                                            state = "voluptatum";
                                                            type = "sapiente";
                                                            uid = "deserunt";
                                                        }}),
                                                        add(new OrderFulfillment() {{
                                                            metadata = new java.util.HashMap<String, String>() {{
                                                                put("hic", "iure");
                                                            }};
                                                            pickupDetails = new OrderFulfillmentPickupDetails() {{
                                                                acceptedAt = "sint";
                                                                autoCompleteDuration = "autem";
                                                                cancelReason = "iste";
                                                                canceledAt = "cupiditate";
                                                                curbsidePickupDetails = new OrderFulfillmentPickupDetailsCurbsidePickupDetails() {{
                                                                    buyerArrivedAt = "ab";
                                                                    curbsideDetails = "fuga";
                                                                }};
                                                                expiredAt = "a";
                                                                expiresAt = "dolor";
                                                                isCurbsidePickup = false;
                                                                note = "voluptatum";
                                                                pickedUpAt = "molestias";
                                                                pickupAt = "quod";
                                                                pickupWindowDuration = "repudiandae";
                                                                placedAt = "eaque";
                                                                prepTimeDuration = "consectetur";
                                                                readyAt = "autem";
                                                                recipient = new OrderFulfillmentRecipient() {{
                                                                    address = new Address() {{
                                                                        addressLine1 = "vitae";
                                                                        addressLine2 = "numquam";
                                                                        addressLine3 = "incidunt";
                                                                        administrativeDistrictLevel1 = "modi";
                                                                        administrativeDistrictLevel2 = "quos";
                                                                        administrativeDistrictLevel3 = "minus";
                                                                        country = "Kazakhstan";
                                                                        firstName = "Lindsay";
                                                                        lastName = "Kiehn";
                                                                        locality = "reprehenderit";
                                                                        organization = "animi";
                                                                        postalCode = "99193";
                                                                        sublocality = "ipsum";
                                                                        sublocality2 = "laboriosam";
                                                                        sublocality3 = "doloremque";
                                                                    }};
                                                                    customerId = "sed";
                                                                    displayName = "voluptatum";
                                                                    emailAddress = "debitis";
                                                                    phoneNumber = "a";
                                                                }};
                                                                rejectedAt = "itaque";
                                                                scheduleType = "eveniet";
                                                            }};
                                                            shipmentDetails = new OrderFulfillmentShipmentDetails() {{
                                                                cancelReason = "repellat";
                                                                canceledAt = "cupiditate";
                                                                carrier = "adipisci";
                                                                expectedShippedAt = "aliquam";
                                                                failedAt = "illo";
                                                                failureReason = "veniam";
                                                                inProgressAt = "sed";
                                                                packagedAt = "necessitatibus";
                                                                placedAt = "possimus";
                                                                recipient = new OrderFulfillmentRecipient() {{
                                                                    address = new Address() {{
                                                                        addressLine1 = "dignissimos";
                                                                        addressLine2 = "itaque";
                                                                        addressLine3 = "explicabo";
                                                                        administrativeDistrictLevel1 = "ullam";
                                                                        administrativeDistrictLevel2 = "non";
                                                                        administrativeDistrictLevel3 = "delectus";
                                                                        country = "Faroe Islands";
                                                                        firstName = "Philip";
                                                                        lastName = "Casper";
                                                                        locality = "ullam";
                                                                        organization = "quam";
                                                                        postalCode = "96640-4092";
                                                                        sublocality = "dolore";
                                                                        sublocality2 = "nemo";
                                                                        sublocality3 = "est";
                                                                    }};
                                                                    customerId = "quo";
                                                                    displayName = "maxime";
                                                                    emailAddress = "delectus";
                                                                    phoneNumber = "laboriosam";
                                                                }};
                                                                shippedAt = "laboriosam";
                                                                shippingNote = "quam";
                                                                shippingType = "fuga";
                                                                trackingNumber = "officia";
                                                                trackingUrl = "repellat";
                                                            }};
                                                            state = "cupiditate";
                                                            type = "soluta";
                                                            uid = "tempore";
                                                        }}),
                                                    }};
                                                    id = "ad185fe4-31d6-4bf5-8838-fbb8c20cb67f";
                                                    lineItems = new org.openapis.openapi.models.shared.OrderLineItem[]{{
                                                        add(new OrderLineItem("atque") {{
                                                            appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                                add(new OrderLineItemAppliedDiscount("repudiandae") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 716058L;
                                                                        currency = "eius";
                                                                    }};
                                                                    discountUid = "eos";
                                                                    uid = "veniam";
                                                                }}),
                                                                add(new OrderLineItemAppliedDiscount("eos") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 572317L;
                                                                        currency = "occaecati";
                                                                    }};
                                                                    discountUid = "debitis";
                                                                    uid = "laboriosam";
                                                                }}),
                                                            }};
                                                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                add(new OrderLineItemAppliedTax("voluptate") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 279679L;
                                                                        currency = "porro";
                                                                    }};
                                                                    taxUid = "occaecati";
                                                                    uid = "reiciendis";
                                                                }}),
                                                            }};
                                                            basePriceMoney = new Money() {{
                                                                amount = 735521L;
                                                                currency = "in";
                                                            }};
                                                            catalogObjectId = "omnis";
                                                            catalogVersion = 820735L;
                                                            grossSalesMoney = new Money() {{
                                                                amount = 950337L;
                                                                currency = "recusandae";
                                                            }};
                                                            itemType = "expedita";
                                                            metadata = new java.util.HashMap<String, String>() {{
                                                                put("esse", "harum");
                                                                put("ad", "quod");
                                                            }};
                                                            modifiers = new org.openapis.openapi.models.shared.OrderLineItemModifier[]{{
                                                                add(new OrderLineItemModifier() {{
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 518366L;
                                                                        currency = "vero";
                                                                    }};
                                                                    catalogObjectId = "dolore";
                                                                    catalogVersion = 722889L;
                                                                    name = "Dr. Emilio McDermott";
                                                                    totalPriceMoney = new Money() {{
                                                                        amount = 52407L;
                                                                        currency = "ex";
                                                                    }};
                                                                    uid = "eveniet";
                                                                }}),
                                                            }};
                                                            name = "Miss Casey McLaughlin";
                                                            note = "tempora";
                                                            pricingBlocklists = new OrderLineItemPricingBlocklists() {{
                                                                blockedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount[]{{
                                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                                        discountCatalogObjectId = "numquam";
                                                                        discountUid = "odio";
                                                                        uid = "nostrum";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                                        discountCatalogObjectId = "maiores";
                                                                        discountUid = "veritatis";
                                                                        uid = "autem";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                                        discountCatalogObjectId = "earum";
                                                                        discountUid = "minima";
                                                                        uid = "ex";
                                                                    }}),
                                                                }};
                                                                blockedTaxes = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax[]{{
                                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                                        taxCatalogObjectId = "nesciunt";
                                                                        taxUid = "corrupti";
                                                                        uid = "nostrum";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                                        taxCatalogObjectId = "fuga";
                                                                        taxUid = "sequi";
                                                                        uid = "maxime";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                                        taxCatalogObjectId = "numquam";
                                                                        taxUid = "laborum";
                                                                        uid = "eligendi";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                                        taxCatalogObjectId = "autem";
                                                                        taxUid = "adipisci";
                                                                        uid = "sunt";
                                                                    }}),
                                                                }};
                                                            }};
                                                            quantity = "rerum";
                                                            quantityUnit = new OrderQuantityUnit() {{
                                                                catalogVersion = 580248L;
                                                                measurementUnit = new MeasurementUnit() {{
                                                                    areaUnit = "provident";
                                                                    customUnit = new MeasurementUnitCustom("blanditiis", "a") {{
                                                                        abbreviation = "necessitatibus";
                                                                        name = "Ella Runolfsdottir";
                                                                    }};
                                                                    genericUnit = "natus";
                                                                    lengthUnit = "sapiente";
                                                                    timeUnit = "repellendus";
                                                                    type = "facilis";
                                                                    volumeUnit = "molestias";
                                                                    weightUnit = "dolore";
                                                                }};
                                                                precision = 90969L;
                                                            }};
                                                            totalDiscountMoney = new Money() {{
                                                                amount = 37911L;
                                                                currency = "maiores";
                                                            }};
                                                            totalMoney = new Money() {{
                                                                amount = 390230L;
                                                                currency = "velit";
                                                            }};
                                                            totalTaxMoney = new Money() {{
                                                                amount = 733127L;
                                                                currency = "expedita";
                                                            }};
                                                            uid = "hic";
                                                            variationName = "blanditiis";
                                                            variationTotalPriceMoney = new Money() {{
                                                                amount = 113540L;
                                                                currency = "iusto";
                                                            }};
                                                        }}),
                                                        add(new OrderLineItem("officiis") {{
                                                            appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                                add(new OrderLineItemAppliedDiscount("mollitia") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 474774L;
                                                                        currency = "nam";
                                                                    }};
                                                                    discountUid = "aperiam";
                                                                    uid = "vitae";
                                                                }}),
                                                            }};
                                                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                add(new OrderLineItemAppliedTax("rem") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 872580L;
                                                                        currency = "quibusdam";
                                                                    }};
                                                                    taxUid = "quam";
                                                                    uid = "deleniti";
                                                                }}),
                                                                add(new OrderLineItemAppliedTax("blanditiis") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 424553L;
                                                                        currency = "eos";
                                                                    }};
                                                                    taxUid = "labore";
                                                                    uid = "sunt";
                                                                }}),
                                                                add(new OrderLineItemAppliedTax("labore") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 613848L;
                                                                        currency = "accusamus";
                                                                    }};
                                                                    taxUid = "distinctio";
                                                                    uid = "incidunt";
                                                                }}),
                                                                add(new OrderLineItemAppliedTax("quis") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 500537L;
                                                                        currency = "ducimus";
                                                                    }};
                                                                    taxUid = "consectetur";
                                                                    uid = "sapiente";
                                                                }}),
                                                            }};
                                                            basePriceMoney = new Money() {{
                                                                amount = 33323L;
                                                                currency = "ratione";
                                                            }};
                                                            catalogObjectId = "consectetur";
                                                            catalogVersion = 990540L;
                                                            grossSalesMoney = new Money() {{
                                                                amount = 103053L;
                                                                currency = "sint";
                                                            }};
                                                            itemType = "possimus";
                                                            metadata = new java.util.HashMap<String, String>() {{
                                                                put("asperiores", "quasi");
                                                                put("consequuntur", "nemo");
                                                                put("nobis", "debitis");
                                                            }};
                                                            modifiers = new org.openapis.openapi.models.shared.OrderLineItemModifier[]{{
                                                                add(new OrderLineItemModifier() {{
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 84438L;
                                                                        currency = "minima";
                                                                    }};
                                                                    catalogObjectId = "magni";
                                                                    catalogVersion = 929849L;
                                                                    name = "Damon Mueller";
                                                                    totalPriceMoney = new Money() {{
                                                                        amount = 454761L;
                                                                        currency = "earum";
                                                                    }};
                                                                    uid = "minima";
                                                                }}),
                                                                add(new OrderLineItemModifier() {{
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 141986L;
                                                                        currency = "odit";
                                                                    }};
                                                                    catalogObjectId = "eius";
                                                                    catalogVersion = 625378L;
                                                                    name = "Jan Abbott Sr.";
                                                                    totalPriceMoney = new Money() {{
                                                                        amount = 226491L;
                                                                        currency = "cum";
                                                                    }};
                                                                    uid = "iusto";
                                                                }}),
                                                            }};
                                                            name = "Kyle Koch";
                                                            note = "minima";
                                                            pricingBlocklists = new OrderLineItemPricingBlocklists() {{
                                                                blockedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount[]{{
                                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                                        discountCatalogObjectId = "recusandae";
                                                                        discountUid = "architecto";
                                                                        uid = "voluptatibus";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                                        discountCatalogObjectId = "autem";
                                                                        discountUid = "in";
                                                                        uid = "repellat";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                                        discountCatalogObjectId = "amet";
                                                                        discountUid = "cumque";
                                                                        uid = "dolore";
                                                                    }}),
                                                                }};
                                                                blockedTaxes = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax[]{{
                                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                                        taxCatalogObjectId = "quo";
                                                                        taxUid = "repudiandae";
                                                                        uid = "tempora";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                                        taxCatalogObjectId = "libero";
                                                                        taxUid = "suscipit";
                                                                        uid = "illum";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                                        taxCatalogObjectId = "iusto";
                                                                        taxUid = "aliquid";
                                                                        uid = "sint";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                                        taxCatalogObjectId = "aliquid";
                                                                        taxUid = "repellat";
                                                                        uid = "sapiente";
                                                                    }}),
                                                                }};
                                                            }};
                                                            quantity = "consectetur";
                                                            quantityUnit = new OrderQuantityUnit() {{
                                                                catalogVersion = 757494L;
                                                                measurementUnit = new MeasurementUnit() {{
                                                                    areaUnit = "ullam";
                                                                    customUnit = new MeasurementUnitCustom("corporis", "nihil") {{
                                                                        abbreviation = "nihil";
                                                                        name = "Mr. Courtney Hessel";
                                                                    }};
                                                                    genericUnit = "officiis";
                                                                    lengthUnit = "dolore";
                                                                    timeUnit = "magnam";
                                                                    type = "maiores";
                                                                    volumeUnit = "ipsam";
                                                                    weightUnit = "dicta";
                                                                }};
                                                                precision = 944475L;
                                                            }};
                                                            totalDiscountMoney = new Money() {{
                                                                amount = 505558L;
                                                                currency = "libero";
                                                            }};
                                                            totalMoney = new Money() {{
                                                                amount = 9912L;
                                                                currency = "totam";
                                                            }};
                                                            totalTaxMoney = new Money() {{
                                                                amount = 272518L;
                                                                currency = "quo";
                                                            }};
                                                            uid = "dolor";
                                                            variationName = "sunt";
                                                            variationTotalPriceMoney = new Money() {{
                                                                amount = 605089L;
                                                                currency = "quam";
                                                            }};
                                                        }}),
                                                        add(new OrderLineItem("suscipit") {{
                                                            appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                                add(new OrderLineItemAppliedDiscount("incidunt") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 566444L;
                                                                        currency = "consectetur";
                                                                    }};
                                                                    discountUid = "deserunt";
                                                                    uid = "odit";
                                                                }}),
                                                            }};
                                                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                add(new OrderLineItemAppliedTax("excepturi") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 308866L;
                                                                        currency = "suscipit";
                                                                    }};
                                                                    taxUid = "ducimus";
                                                                    uid = "tenetur";
                                                                }}),
                                                                add(new OrderLineItemAppliedTax("placeat") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 264125L;
                                                                        currency = "corrupti";
                                                                    }};
                                                                    taxUid = "nihil";
                                                                    uid = "eius";
                                                                }}),
                                                            }};
                                                            basePriceMoney = new Money() {{
                                                                amount = 145973L;
                                                                currency = "facere";
                                                            }};
                                                            catalogObjectId = "ipsam";
                                                            catalogVersion = 750343L;
                                                            grossSalesMoney = new Money() {{
                                                                amount = 784120L;
                                                                currency = "labore";
                                                            }};
                                                            itemType = "perspiciatis";
                                                            metadata = new java.util.HashMap<String, String>() {{
                                                                put("qui", "qui");
                                                                put("consectetur", "ratione");
                                                            }};
                                                            modifiers = new org.openapis.openapi.models.shared.OrderLineItemModifier[]{{
                                                                add(new OrderLineItemModifier() {{
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 435841L;
                                                                        currency = "aliquid";
                                                                    }};
                                                                    catalogObjectId = "cum";
                                                                    catalogVersion = 853701L;
                                                                    name = "Jan Torphy";
                                                                    totalPriceMoney = new Money() {{
                                                                        amount = 12917L;
                                                                        currency = "voluptatem";
                                                                    }};
                                                                    uid = "libero";
                                                                }}),
                                                                add(new OrderLineItemModifier() {{
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 568419L;
                                                                        currency = "odio";
                                                                    }};
                                                                    catalogObjectId = "omnis";
                                                                    catalogVersion = 887422L;
                                                                    name = "Martin Bahringer";
                                                                    totalPriceMoney = new Money() {{
                                                                        amount = 471642L;
                                                                        currency = "neque";
                                                                    }};
                                                                    uid = "aspernatur";
                                                                }}),
                                                                add(new OrderLineItemModifier() {{
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 53662L;
                                                                        currency = "corporis";
                                                                    }};
                                                                    catalogObjectId = "cupiditate";
                                                                    catalogVersion = 15563L;
                                                                    name = "Mr. Forrest Ryan";
                                                                    totalPriceMoney = new Money() {{
                                                                        amount = 406946L;
                                                                        currency = "eius";
                                                                    }};
                                                                    uid = "aperiam";
                                                                }}),
                                                                add(new OrderLineItemModifier() {{
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 30015L;
                                                                        currency = "non";
                                                                    }};
                                                                    catalogObjectId = "beatae";
                                                                    catalogVersion = 192880L;
                                                                    name = "Nathan Toy II";
                                                                    totalPriceMoney = new Money() {{
                                                                        amount = 281436L;
                                                                        currency = "delectus";
                                                                    }};
                                                                    uid = "aliquid";
                                                                }}),
                                                            }};
                                                            name = "Shawna Trantow";
                                                            note = "assumenda";
                                                            pricingBlocklists = new OrderLineItemPricingBlocklists() {{
                                                                blockedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount[]{{
                                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                                        discountCatalogObjectId = "ut";
                                                                        discountUid = "quae";
                                                                        uid = "nihil";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                                        discountCatalogObjectId = "quam";
                                                                        discountUid = "assumenda";
                                                                        uid = "consequatur";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                                        discountCatalogObjectId = "cumque";
                                                                        discountUid = "placeat";
                                                                        uid = "adipisci";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                                        discountCatalogObjectId = "tenetur";
                                                                        discountUid = "non";
                                                                        uid = "accusantium";
                                                                    }}),
                                                                }};
                                                                blockedTaxes = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax[]{{
                                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                                        taxCatalogObjectId = "itaque";
                                                                        taxUid = "earum";
                                                                        uid = "impedit";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                                        taxCatalogObjectId = "dicta";
                                                                        taxUid = "corporis";
                                                                        uid = "impedit";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                                        taxCatalogObjectId = "eveniet";
                                                                        taxUid = "cum";
                                                                        uid = "dolore";
                                                                    }}),
                                                                }};
                                                            }};
                                                            quantity = "illum";
                                                            quantityUnit = new OrderQuantityUnit() {{
                                                                catalogVersion = 409295L;
                                                                measurementUnit = new MeasurementUnit() {{
                                                                    areaUnit = "officiis";
                                                                    customUnit = new MeasurementUnitCustom("veniam", "fuga") {{
                                                                        abbreviation = "quasi";
                                                                        name = "Dr. Matt Turcotte";
                                                                    }};
                                                                    genericUnit = "itaque";
                                                                    lengthUnit = "possimus";
                                                                    timeUnit = "tenetur";
                                                                    type = "sed";
                                                                    volumeUnit = "deserunt";
                                                                    weightUnit = "eligendi";
                                                                }};
                                                                precision = 664591L;
                                                            }};
                                                            totalDiscountMoney = new Money() {{
                                                                amount = 719077L;
                                                                currency = "corporis";
                                                            }};
                                                            totalMoney = new Money() {{
                                                                amount = 559571L;
                                                                currency = "soluta";
                                                            }};
                                                            totalTaxMoney = new Money() {{
                                                                amount = 584645L;
                                                                currency = "unde";
                                                            }};
                                                            uid = "et";
                                                            variationName = "quisquam";
                                                            variationTotalPriceMoney = new Money() {{
                                                                amount = 600471L;
                                                                currency = "sed";
                                                            }};
                                                        }}),
                                                        add(new OrderLineItem("sapiente") {{
                                                            appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                                add(new OrderLineItemAppliedDiscount("sint") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 867581L;
                                                                        currency = "nam";
                                                                    }};
                                                                    discountUid = "quaerat";
                                                                    uid = "corrupti";
                                                                }}),
                                                                add(new OrderLineItemAppliedDiscount("odio") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 259716L;
                                                                        currency = "vel";
                                                                    }};
                                                                    discountUid = "quasi";
                                                                    uid = "vero";
                                                                }}),
                                                                add(new OrderLineItemAppliedDiscount("nobis") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 253916L;
                                                                        currency = "fugit";
                                                                    }};
                                                                    discountUid = "inventore";
                                                                    uid = "optio";
                                                                }}),
                                                                add(new OrderLineItemAppliedDiscount("veniam") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 924559L;
                                                                        currency = "commodi";
                                                                    }};
                                                                    discountUid = "possimus";
                                                                    uid = "provident";
                                                                }}),
                                                            }};
                                                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                add(new OrderLineItemAppliedTax("id") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 146004L;
                                                                        currency = "a";
                                                                    }};
                                                                    taxUid = "consequatur";
                                                                    uid = "vero";
                                                                }}),
                                                            }};
                                                            basePriceMoney = new Money() {{
                                                                amount = 623868L;
                                                                currency = "ratione";
                                                            }};
                                                            catalogObjectId = "perferendis";
                                                            catalogVersion = 716555L;
                                                            grossSalesMoney = new Money() {{
                                                                amount = 377976L;
                                                                currency = "sint";
                                                            }};
                                                            itemType = "maiores";
                                                            metadata = new java.util.HashMap<String, String>() {{
                                                                put("fuga", "cumque");
                                                                put("consequuntur", "maiores");
                                                            }};
                                                            modifiers = new org.openapis.openapi.models.shared.OrderLineItemModifier[]{{
                                                                add(new OrderLineItemModifier() {{
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 128594L;
                                                                        currency = "delectus";
                                                                    }};
                                                                    catalogObjectId = "quos";
                                                                    catalogVersion = 534708L;
                                                                    name = "Karen Barrows I";
                                                                    totalPriceMoney = new Money() {{
                                                                        amount = 577622L;
                                                                        currency = "quasi";
                                                                    }};
                                                                    uid = "veritatis";
                                                                }}),
                                                                add(new OrderLineItemModifier() {{
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 402908L;
                                                                        currency = "doloremque";
                                                                    }};
                                                                    catalogObjectId = "quas";
                                                                    catalogVersion = 172878L;
                                                                    name = "Joy Macejkovic";
                                                                    totalPriceMoney = new Money() {{
                                                                        amount = 915267L;
                                                                        currency = "minus";
                                                                    }};
                                                                    uid = "autem";
                                                                }}),
                                                            }};
                                                            name = "Teresa Lueilwitz";
                                                            note = "tenetur";
                                                            pricingBlocklists = new OrderLineItemPricingBlocklists() {{
                                                                blockedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedDiscount[]{{
                                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                                        discountCatalogObjectId = "perspiciatis";
                                                                        discountUid = "suscipit";
                                                                        uid = "ullam";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                                        discountCatalogObjectId = "unde";
                                                                        discountUid = "debitis";
                                                                        uid = "quidem";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                                        discountCatalogObjectId = "magnam";
                                                                        discountUid = "doloremque";
                                                                        uid = "accusamus";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedDiscount() {{
                                                                        discountCatalogObjectId = "quod";
                                                                        discountUid = "sunt";
                                                                        uid = "voluptas";
                                                                    }}),
                                                                }};
                                                                blockedTaxes = new org.openapis.openapi.models.shared.OrderLineItemPricingBlocklistsBlockedTax[]{{
                                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                                        taxCatalogObjectId = "est";
                                                                        taxUid = "earum";
                                                                        uid = "nihil";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                                        taxCatalogObjectId = "nostrum";
                                                                        taxUid = "rerum";
                                                                        uid = "perferendis";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                                        taxCatalogObjectId = "nam";
                                                                        taxUid = "ullam";
                                                                        uid = "ratione";
                                                                    }}),
                                                                    add(new OrderLineItemPricingBlocklistsBlockedTax() {{
                                                                        taxCatalogObjectId = "eos";
                                                                        taxUid = "id";
                                                                        uid = "modi";
                                                                    }}),
                                                                }};
                                                            }};
                                                            quantity = "illum";
                                                            quantityUnit = new OrderQuantityUnit() {{
                                                                catalogVersion = 625683L;
                                                                measurementUnit = new MeasurementUnit() {{
                                                                    areaUnit = "consectetur";
                                                                    customUnit = new MeasurementUnitCustom("magnam", "eius") {{
                                                                        abbreviation = "reprehenderit";
                                                                        name = "Jonathon Nader";
                                                                    }};
                                                                    genericUnit = "ad";
                                                                    lengthUnit = "quia";
                                                                    timeUnit = "quod";
                                                                    type = "quaerat";
                                                                    volumeUnit = "voluptatum";
                                                                    weightUnit = "numquam";
                                                                }};
                                                                precision = 127380L;
                                                            }};
                                                            totalDiscountMoney = new Money() {{
                                                                amount = 756833L;
                                                                currency = "cupiditate";
                                                            }};
                                                            totalMoney = new Money() {{
                                                                amount = 733110L;
                                                                currency = "odit";
                                                            }};
                                                            totalTaxMoney = new Money() {{
                                                                amount = 669685L;
                                                                currency = "at";
                                                            }};
                                                            uid = "ipsum";
                                                            variationName = "explicabo";
                                                            variationTotalPriceMoney = new Money() {{
                                                                amount = 861807L;
                                                                currency = "est";
                                                            }};
                                                        }}),
                                                    }};
                                                    metadata = new java.util.HashMap<String, String>() {{
                                                        put("voluptatum", "quasi");
                                                        put("mollitia", "voluptatum");
                                                        put("blanditiis", "sapiente");
                                                        put("ut", "incidunt");
                                                    }};
                                                    netAmounts = new OrderMoneyAmounts() {{
                                                        discountMoney = new Money() {{
                                                            amount = 286147L;
                                                            currency = "ut";
                                                        }};;
                                                        serviceChargeMoney = new Money() {{
                                                            amount = 313420L;
                                                            currency = "nihil";
                                                        }};;
                                                        taxMoney = new Money() {{
                                                            amount = 190850L;
                                                            currency = "tenetur";
                                                        }};;
                                                        tipMoney = new Money() {{
                                                            amount = 901924L;
                                                            currency = "quod";
                                                        }};;
                                                        totalMoney = new Money() {{
                                                            amount = 858398L;
                                                            currency = "tempora";
                                                        }};;
                                                    }};;
                                                    pricingOptions = new OrderPricingOptions() {{
                                                        autoApplyDiscounts = false;
                                                        autoApplyTaxes = false;
                                                    }};;
                                                    referenceId = "quam";
                                                    refunds = new org.openapis.openapi.models.shared.Refund[]{{
                                                        add(new Refund(                new Money() {{
                                                                            amount = 356253L;
                                                                            currency = "inventore";
                                                                        }};, "eligendi", "occaecati", "doloribus", "necessitatibus", "rem", "a") {{
                                                            additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                                                add(new AdditionalRecipient(                new Money() {{
                                                                                    amount = 553542L;
                                                                                    currency = "sed";
                                                                                }};, "eaque") {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 198616L;
                                                                        currency = "earum";
                                                                    }};
                                                                    description = "eum";
                                                                    locationId = "dolor";
                                                                    receivableId = "placeat";
                                                                }}),
                                                                add(new AdditionalRecipient(                new Money() {{
                                                                                    amount = 662184L;
                                                                                    currency = "ex";
                                                                                }};, "occaecati") {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 617060L;
                                                                        currency = "ratione";
                                                                    }};
                                                                    description = "nihil";
                                                                    locationId = "unde";
                                                                    receivableId = "deserunt";
                                                                }}),
                                                            }};
                                                            amountMoney = new Money() {{
                                                                amount = 759822L;
                                                                currency = "at";
                                                            }};
                                                            createdAt = "ad";
                                                            id = "fbcf79da-18a7-4822-bf95-894e6861adb5";
                                                            locationId = "quaerat";
                                                            processingFeeMoney = new Money() {{
                                                                amount = 983067L;
                                                                currency = "iste";
                                                            }};
                                                            reason = "accusamus";
                                                            status = "ipsam";
                                                            tenderId = "fugiat";
                                                            transactionId = "odio";
                                                        }}),
                                                    }};
                                                    returnAmounts = new OrderMoneyAmounts() {{
                                                        discountMoney = new Money() {{
                                                            amount = 470732L;
                                                            currency = "veniam";
                                                        }};;
                                                        serviceChargeMoney = new Money() {{
                                                            amount = 14665L;
                                                            currency = "magni";
                                                        }};;
                                                        taxMoney = new Money() {{
                                                            amount = 700204L;
                                                            currency = "voluptatibus";
                                                        }};;
                                                        tipMoney = new Money() {{
                                                            amount = 858478L;
                                                            currency = "quod";
                                                        }};;
                                                        totalMoney = new Money() {{
                                                            amount = 247457L;
                                                            currency = "dolore";
                                                        }};;
                                                    }};;
                                                    returns = new org.openapis.openapi.models.shared.OrderReturn[]{{
                                                        add(new OrderReturn() {{
                                                            returnAmounts = new OrderMoneyAmounts() {{
                                                                discountMoney = new Money() {{
                                                                    amount = 4490L;
                                                                    currency = "blanditiis";
                                                                }};
                                                                serviceChargeMoney = new Money() {{
                                                                    amount = 264204L;
                                                                    currency = "illo";
                                                                }};
                                                                taxMoney = new Money() {{
                                                                    amount = 954946L;
                                                                    currency = "et";
                                                                }};
                                                                tipMoney = new Money() {{
                                                                    amount = 474267L;
                                                                    currency = "autem";
                                                                }};
                                                                totalMoney = new Money() {{
                                                                    amount = 294314L;
                                                                    currency = "eius";
                                                                }};
                                                            }};
                                                            returnDiscounts = new org.openapis.openapi.models.shared.OrderReturnDiscount[]{{
                                                                add(new OrderReturnDiscount() {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 406037L;
                                                                        currency = "amet";
                                                                    }};
                                                                    appliedMoney = new Money() {{
                                                                        amount = 454386L;
                                                                        currency = "molestias";
                                                                    }};
                                                                    catalogObjectId = "voluptatibus";
                                                                    catalogVersion = 217167L;
                                                                    name = "Willis Connelly";
                                                                    percentage = "quia";
                                                                    scope = "inventore";
                                                                    sourceDiscountUid = "doloribus";
                                                                    type = "praesentium";
                                                                    uid = "aliquid";
                                                                }}),
                                                                add(new OrderReturnDiscount() {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 163910L;
                                                                        currency = "laboriosam";
                                                                    }};
                                                                    appliedMoney = new Money() {{
                                                                        amount = 365892L;
                                                                        currency = "reprehenderit";
                                                                    }};
                                                                    catalogObjectId = "soluta";
                                                                    catalogVersion = 217571L;
                                                                    name = "Lucia Schoen";
                                                                    percentage = "cupiditate";
                                                                    scope = "hic";
                                                                    sourceDiscountUid = "quis";
                                                                    type = "deleniti";
                                                                    uid = "iusto";
                                                                }}),
                                                            }};
                                                            returnLineItems = new org.openapis.openapi.models.shared.OrderReturnLineItem[]{{
                                                                add(new OrderReturnLineItem("similique") {{
                                                                    appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                                        add(new OrderLineItemAppliedDiscount("aliquid") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 322907L;
                                                                                currency = "magni";
                                                                            }};
                                                                            discountUid = "nostrum";
                                                                            uid = "minus";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedDiscount("fuga") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 462136L;
                                                                                currency = "ea";
                                                                            }};
                                                                            discountUid = "numquam";
                                                                            uid = "architecto";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedDiscount("officiis") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 519099L;
                                                                                currency = "velit";
                                                                            }};
                                                                            discountUid = "quasi";
                                                                            uid = "sed";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedDiscount("libero") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 330156L;
                                                                                currency = "quae";
                                                                            }};
                                                                            discountUid = "dolore";
                                                                            uid = "in";
                                                                        }}),
                                                                    }};
                                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                        add(new OrderLineItemAppliedTax("cumque") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 766005L;
                                                                                currency = "quia";
                                                                            }};
                                                                            taxUid = "beatae";
                                                                            uid = "porro";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("culpa") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 714933L;
                                                                                currency = "numquam";
                                                                            }};
                                                                            taxUid = "fugit";
                                                                            uid = "amet";
                                                                        }}),
                                                                    }};
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 705753L;
                                                                        currency = "minus";
                                                                    }};
                                                                    catalogObjectId = "vero";
                                                                    catalogVersion = 773332L;
                                                                    grossReturnMoney = new Money() {{
                                                                        amount = 607242L;
                                                                        currency = "et";
                                                                    }};
                                                                    itemType = "earum";
                                                                    name = "Rex Rau";
                                                                    note = "totam";
                                                                    quantity = "praesentium";
                                                                    quantityUnit = new OrderQuantityUnit() {{
                                                                        catalogVersion = 885721L;
                                                                        measurementUnit = new MeasurementUnit() {{
                                                                            areaUnit = "esse";
                                                                            customUnit = new MeasurementUnitCustom("sed", "veniam") {{
                                                                                abbreviation = "vitae";
                                                                                name = "Lester Schinner";
                                                                            }};
                                                                            genericUnit = "sed";
                                                                            lengthUnit = "quibusdam";
                                                                            timeUnit = "reprehenderit";
                                                                            type = "voluptate";
                                                                            volumeUnit = "reprehenderit";
                                                                            weightUnit = "et";
                                                                        }};
                                                                        precision = 910712L;
                                                                    }};
                                                                    returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 941091L;
                                                                                currency = "at";
                                                                            }};
                                                                            catalogObjectId = "perferendis";
                                                                            catalogVersion = 448282L;
                                                                            name = "Susan Adams";
                                                                            sourceModifierUid = "repellat";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 532110L;
                                                                                currency = "facere";
                                                                            }};
                                                                            uid = "consequuntur";
                                                                        }}),
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 617238L;
                                                                                currency = "repellendus";
                                                                            }};
                                                                            catalogObjectId = "voluptates";
                                                                            catalogVersion = 71741L;
                                                                            name = "Ms. Nicolas Kuphal";
                                                                            sourceModifierUid = "tempore";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 353967L;
                                                                                currency = "illum";
                                                                            }};
                                                                            uid = "mollitia";
                                                                        }}),
                                                                    }};
                                                                    sourceLineItemUid = "ipsa";
                                                                    totalDiscountMoney = new Money() {{
                                                                        amount = 550216L;
                                                                        currency = "quo";
                                                                    }};
                                                                    totalMoney = new Money() {{
                                                                        amount = 353806L;
                                                                        currency = "in";
                                                                    }};
                                                                    totalTaxMoney = new Money() {{
                                                                        amount = 986059L;
                                                                        currency = "id";
                                                                    }};
                                                                    uid = "eum";
                                                                    variationName = "cumque";
                                                                    variationTotalPriceMoney = new Money() {{
                                                                        amount = 484696L;
                                                                        currency = "atque";
                                                                    }};
                                                                }}),
                                                                add(new OrderReturnLineItem("dolore") {{
                                                                    appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                                        add(new OrderLineItemAppliedDiscount("excepturi") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 99160L;
                                                                                currency = "ea";
                                                                            }};
                                                                            discountUid = "accusamus";
                                                                            uid = "illo";
                                                                        }}),
                                                                    }};
                                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                        add(new OrderLineItemAppliedTax("officia") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 675689L;
                                                                                currency = "a";
                                                                            }};
                                                                            taxUid = "repudiandae";
                                                                            uid = "minus";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("aliquam") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 389786L;
                                                                                currency = "illo";
                                                                            }};
                                                                            taxUid = "cupiditate";
                                                                            uid = "veritatis";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("doloremque") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 568231L;
                                                                                currency = "atque";
                                                                            }};
                                                                            taxUid = "dicta";
                                                                            uid = "magnam";
                                                                        }}),
                                                                    }};
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 738325L;
                                                                        currency = "suscipit";
                                                                    }};
                                                                    catalogObjectId = "eius";
                                                                    catalogVersion = 978113L;
                                                                    grossReturnMoney = new Money() {{
                                                                        amount = 964021L;
                                                                        currency = "quos";
                                                                    }};
                                                                    itemType = "id";
                                                                    name = "Dr. Andrew Kling";
                                                                    note = "voluptatem";
                                                                    quantity = "dolor";
                                                                    quantityUnit = new OrderQuantityUnit() {{
                                                                        catalogVersion = 719450L;
                                                                        measurementUnit = new MeasurementUnit() {{
                                                                            areaUnit = "quaerat";
                                                                            customUnit = new MeasurementUnitCustom("mollitia", "blanditiis") {{
                                                                                abbreviation = "a";
                                                                                name = "Jackie Walter";
                                                                            }};
                                                                            genericUnit = "suscipit";
                                                                            lengthUnit = "quas";
                                                                            timeUnit = "quis";
                                                                            type = "enim";
                                                                            volumeUnit = "corporis";
                                                                            weightUnit = "iste";
                                                                        }};
                                                                        precision = 411669L;
                                                                    }};
                                                                    returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 450895L;
                                                                                currency = "nesciunt";
                                                                            }};
                                                                            catalogObjectId = "magni";
                                                                            catalogVersion = 656605L;
                                                                            name = "Clyde Spencer";
                                                                            sourceModifierUid = "commodi";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 419585L;
                                                                                currency = "praesentium";
                                                                            }};
                                                                            uid = "magni";
                                                                        }}),
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 787467L;
                                                                                currency = "expedita";
                                                                            }};
                                                                            catalogObjectId = "in";
                                                                            catalogVersion = 52659L;
                                                                            name = "Nelson Schimmel";
                                                                            sourceModifierUid = "exercitationem";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 953921L;
                                                                                currency = "tempore";
                                                                            }};
                                                                            uid = "laboriosam";
                                                                        }}),
                                                                    }};
                                                                    sourceLineItemUid = "earum";
                                                                    totalDiscountMoney = new Money() {{
                                                                        amount = 580080L;
                                                                        currency = "dicta";
                                                                    }};
                                                                    totalMoney = new Money() {{
                                                                        amount = 693592L;
                                                                        currency = "omnis";
                                                                    }};
                                                                    totalTaxMoney = new Money() {{
                                                                        amount = 673459L;
                                                                        currency = "molestias";
                                                                    }};
                                                                    uid = "a";
                                                                    variationName = "dignissimos";
                                                                    variationTotalPriceMoney = new Money() {{
                                                                        amount = 288348L;
                                                                        currency = "laudantium";
                                                                    }};
                                                                }}),
                                                                add(new OrderReturnLineItem("quia") {{
                                                                    appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                                        add(new OrderLineItemAppliedDiscount("neque") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 918005L;
                                                                                currency = "aspernatur";
                                                                            }};
                                                                            discountUid = "quod";
                                                                            uid = "dolorem";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedDiscount("aut") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 56371L;
                                                                                currency = "excepturi";
                                                                            }};
                                                                            discountUid = "repellendus";
                                                                            uid = "soluta";
                                                                        }}),
                                                                    }};
                                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                        add(new OrderLineItemAppliedTax("voluptates") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 227185L;
                                                                                currency = "iure";
                                                                            }};
                                                                            taxUid = "quibusdam";
                                                                            uid = "sint";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("consequatur") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 467109L;
                                                                                currency = "ad";
                                                                            }};
                                                                            taxUid = "eligendi";
                                                                            uid = "fuga";
                                                                        }}),
                                                                    }};
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 26493L;
                                                                        currency = "iure";
                                                                    }};
                                                                    catalogObjectId = "earum";
                                                                    catalogVersion = 337581L;
                                                                    grossReturnMoney = new Money() {{
                                                                        amount = 211756L;
                                                                        currency = "omnis";
                                                                    }};
                                                                    itemType = "sed";
                                                                    name = "Henry Blick";
                                                                    note = "veniam";
                                                                    quantity = "est";
                                                                    quantityUnit = new OrderQuantityUnit() {{
                                                                        catalogVersion = 526894L;
                                                                        measurementUnit = new MeasurementUnit() {{
                                                                            areaUnit = "cum";
                                                                            customUnit = new MeasurementUnitCustom("dolore", "aspernatur") {{
                                                                                abbreviation = "maiores";
                                                                                name = "Lawrence Wunsch";
                                                                            }};
                                                                            genericUnit = "molestias";
                                                                            lengthUnit = "fuga";
                                                                            timeUnit = "at";
                                                                            type = "unde";
                                                                            volumeUnit = "laborum";
                                                                            weightUnit = "provident";
                                                                        }};
                                                                        precision = 940971L;
                                                                    }};
                                                                    returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 743313L;
                                                                                currency = "earum";
                                                                            }};
                                                                            catalogObjectId = "praesentium";
                                                                            catalogVersion = 129156L;
                                                                            name = "Pamela Braun";
                                                                            sourceModifierUid = "velit";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 355685L;
                                                                                currency = "provident";
                                                                            }};
                                                                            uid = "possimus";
                                                                        }}),
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 612425L;
                                                                                currency = "blanditiis";
                                                                            }};
                                                                            catalogObjectId = "consectetur";
                                                                            catalogVersion = 520824L;
                                                                            name = "Winifred Kub";
                                                                            sourceModifierUid = "cupiditate";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 803546L;
                                                                                currency = "assumenda";
                                                                            }};
                                                                            uid = "nihil";
                                                                        }}),
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 152052L;
                                                                                currency = "optio";
                                                                            }};
                                                                            catalogObjectId = "nulla";
                                                                            catalogVersion = 166481L;
                                                                            name = "Nora Greenfelder";
                                                                            sourceModifierUid = "eos";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 121161L;
                                                                                currency = "quam";
                                                                            }};
                                                                            uid = "eos";
                                                                        }}),
                                                                    }};
                                                                    sourceLineItemUid = "omnis";
                                                                    totalDiscountMoney = new Money() {{
                                                                        amount = 970108L;
                                                                        currency = "qui";
                                                                    }};
                                                                    totalMoney = new Money() {{
                                                                        amount = 626827L;
                                                                        currency = "eligendi";
                                                                    }};
                                                                    totalTaxMoney = new Money() {{
                                                                        amount = 253972L;
                                                                        currency = "inventore";
                                                                    }};
                                                                    uid = "necessitatibus";
                                                                    variationName = "tenetur";
                                                                    variationTotalPriceMoney = new Money() {{
                                                                        amount = 349558L;
                                                                        currency = "nihil";
                                                                    }};
                                                                }}),
                                                                add(new OrderReturnLineItem("non") {{
                                                                    appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                                        add(new OrderLineItemAppliedDiscount("sint") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 980323L;
                                                                                currency = "dicta";
                                                                            }};
                                                                            discountUid = "dicta";
                                                                            uid = "eum";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedDiscount("aliquam") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 659804L;
                                                                                currency = "nobis";
                                                                            }};
                                                                            discountUid = "quasi";
                                                                            uid = "itaque";
                                                                        }}),
                                                                    }};
                                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                        add(new OrderLineItemAppliedTax("neque") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 836018L;
                                                                                currency = "voluptatum";
                                                                            }};
                                                                            taxUid = "deserunt";
                                                                            uid = "aspernatur";
                                                                        }}),
                                                                    }};
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 772048L;
                                                                        currency = "consequuntur";
                                                                    }};
                                                                    catalogObjectId = "neque";
                                                                    catalogVersion = 904485L;
                                                                    grossReturnMoney = new Money() {{
                                                                        amount = 226705L;
                                                                        currency = "labore";
                                                                    }};
                                                                    itemType = "repellat";
                                                                    name = "Rosemarie Zulauf";
                                                                    note = "officia";
                                                                    quantity = "sunt";
                                                                    quantityUnit = new OrderQuantityUnit() {{
                                                                        catalogVersion = 598066L;
                                                                        measurementUnit = new MeasurementUnit() {{
                                                                            areaUnit = "quam";
                                                                            customUnit = new MeasurementUnitCustom("aspernatur", "et") {{
                                                                                abbreviation = "a";
                                                                                name = "Betsy Walter";
                                                                            }};
                                                                            genericUnit = "ipsam";
                                                                            lengthUnit = "et";
                                                                            timeUnit = "delectus";
                                                                            type = "saepe";
                                                                            volumeUnit = "sunt";
                                                                            weightUnit = "in";
                                                                        }};
                                                                        precision = 99163L;
                                                                    }};
                                                                    returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 30962L;
                                                                                currency = "perspiciatis";
                                                                            }};
                                                                            catalogObjectId = "error";
                                                                            catalogVersion = 537623L;
                                                                            name = "Robin Turcotte";
                                                                            sourceModifierUid = "quis";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 264656L;
                                                                                currency = "adipisci";
                                                                            }};
                                                                            uid = "pariatur";
                                                                        }}),
                                                                    }};
                                                                    sourceLineItemUid = "praesentium";
                                                                    totalDiscountMoney = new Money() {{
                                                                        amount = 364679L;
                                                                        currency = "dolore";
                                                                    }};
                                                                    totalMoney = new Money() {{
                                                                        amount = 253607L;
                                                                        currency = "dolor";
                                                                    }};
                                                                    totalTaxMoney = new Money() {{
                                                                        amount = 596888L;
                                                                        currency = "accusamus";
                                                                    }};
                                                                    uid = "voluptates";
                                                                    variationName = "quia";
                                                                    variationTotalPriceMoney = new Money() {{
                                                                        amount = 135110L;
                                                                        currency = "ut";
                                                                    }};
                                                                }}),
                                                            }};
                                                            returnServiceCharges = new org.openapis.openapi.models.shared.OrderReturnServiceCharge[]{{
                                                                add(new OrderReturnServiceCharge() {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 37044L;
                                                                        currency = "tempora";
                                                                    }};
                                                                    appliedMoney = new Money() {{
                                                                        amount = 302228L;
                                                                        currency = "dolorem";
                                                                    }};
                                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                        add(new OrderLineItemAppliedTax("vitae") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 771146L;
                                                                                currency = "architecto";
                                                                            }};
                                                                            taxUid = "minima";
                                                                            uid = "magnam";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("asperiores") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 552965L;
                                                                                currency = "atque";
                                                                            }};
                                                                            taxUid = "quisquam";
                                                                            uid = "sunt";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("ipsam") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 357519L;
                                                                                currency = "vel";
                                                                            }};
                                                                            taxUid = "accusamus";
                                                                            uid = "totam";
                                                                        }}),
                                                                    }};
                                                                    calculationPhase = "at";
                                                                    catalogObjectId = "culpa";
                                                                    catalogVersion = 468579L;
                                                                    name = "Leonard Conn";
                                                                    percentage = "libero";
                                                                    sourceServiceChargeUid = "fugiat";
                                                                    taxable = false;
                                                                    totalMoney = new Money() {{
                                                                        amount = 376942L;
                                                                        currency = "et";
                                                                    }};
                                                                    totalTaxMoney = new Money() {{
                                                                        amount = 487625L;
                                                                        currency = "eligendi";
                                                                    }};
                                                                    uid = "nesciunt";
                                                                }}),
                                                                add(new OrderReturnServiceCharge() {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 690211L;
                                                                        currency = "aperiam";
                                                                    }};
                                                                    appliedMoney = new Money() {{
                                                                        amount = 866661L;
                                                                        currency = "ad";
                                                                    }};
                                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                        add(new OrderLineItemAppliedTax("doloribus") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 634084L;
                                                                                currency = "aliquam";
                                                                            }};
                                                                            taxUid = "ut";
                                                                            uid = "quidem";
                                                                        }}),
                                                                    }};
                                                                    calculationPhase = "sit";
                                                                    catalogObjectId = "architecto";
                                                                    catalogVersion = 734076L;
                                                                    name = "Ismael Lockman III";
                                                                    percentage = "temporibus";
                                                                    sourceServiceChargeUid = "incidunt";
                                                                    taxable = false;
                                                                    totalMoney = new Money() {{
                                                                        amount = 407468L;
                                                                        currency = "alias";
                                                                    }};
                                                                    totalTaxMoney = new Money() {{
                                                                        amount = 514234L;
                                                                        currency = "qui";
                                                                    }};
                                                                    uid = "libero";
                                                                }}),
                                                            }};
                                                            returnTaxes = new org.openapis.openapi.models.shared.OrderReturnTax[]{{
                                                                add(new OrderReturnTax() {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 723374L;
                                                                        currency = "pariatur";
                                                                    }};
                                                                    catalogObjectId = "quod";
                                                                    catalogVersion = 266504L;
                                                                    name = "Lucia Wintheiser";
                                                                    percentage = "magnam";
                                                                    scope = "officiis";
                                                                    sourceTaxUid = "sed";
                                                                    type = "mollitia";
                                                                    uid = "saepe";
                                                                }}),
                                                                add(new OrderReturnTax() {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 289373L;
                                                                        currency = "doloribus";
                                                                    }};
                                                                    catalogObjectId = "facilis";
                                                                    catalogVersion = 327411L;
                                                                    name = "Andres Fay";
                                                                    percentage = "beatae";
                                                                    scope = "dignissimos";
                                                                    sourceTaxUid = "nisi";
                                                                    type = "consectetur";
                                                                    uid = "quos";
                                                                }}),
                                                                add(new OrderReturnTax() {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 966415L;
                                                                        currency = "sunt";
                                                                    }};
                                                                    catalogObjectId = "repudiandae";
                                                                    catalogVersion = 818273L;
                                                                    name = "Kurt Lindgren";
                                                                    percentage = "provident";
                                                                    scope = "accusamus";
                                                                    sourceTaxUid = "minus";
                                                                    type = "impedit";
                                                                    uid = "minima";
                                                                }}),
                                                                add(new OrderReturnTax() {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 767235L;
                                                                        currency = "rerum";
                                                                    }};
                                                                    catalogObjectId = "praesentium";
                                                                    catalogVersion = 427859L;
                                                                    name = "Marta Macejkovic";
                                                                    percentage = "ullam";
                                                                    scope = "praesentium";
                                                                    sourceTaxUid = "perferendis";
                                                                    type = "soluta";
                                                                    uid = "animi";
                                                                }}),
                                                            }};
                                                            roundingAdjustment = new OrderRoundingAdjustment() {{
                                                                amountMoney = new Money() {{
                                                                    amount = 472759L;
                                                                    currency = "nesciunt";
                                                                }};
                                                                name = "Willie Bayer";
                                                                uid = "repellat";
                                                            }};
                                                            sourceOrderId = "necessitatibus";
                                                            uid = "tempora";
                                                        }}),
                                                        add(new OrderReturn() {{
                                                            returnAmounts = new OrderMoneyAmounts() {{
                                                                discountMoney = new Money() {{
                                                                    amount = 308751L;
                                                                    currency = "magnam";
                                                                }};
                                                                serviceChargeMoney = new Money() {{
                                                                    amount = 453562L;
                                                                    currency = "magni";
                                                                }};
                                                                taxMoney = new Money() {{
                                                                    amount = 569677L;
                                                                    currency = "esse";
                                                                }};
                                                                tipMoney = new Money() {{
                                                                    amount = 765463L;
                                                                    currency = "pariatur";
                                                                }};
                                                                totalMoney = new Money() {{
                                                                    amount = 248131L;
                                                                    currency = "rerum";
                                                                }};
                                                            }};
                                                            returnDiscounts = new org.openapis.openapi.models.shared.OrderReturnDiscount[]{{
                                                                add(new OrderReturnDiscount() {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 846332L;
                                                                        currency = "nulla";
                                                                    }};
                                                                    appliedMoney = new Money() {{
                                                                        amount = 228481L;
                                                                        currency = "expedita";
                                                                    }};
                                                                    catalogObjectId = "libero";
                                                                    catalogVersion = 771381L;
                                                                    name = "Ernest Grady";
                                                                    percentage = "voluptate";
                                                                    scope = "aliquid";
                                                                    sourceDiscountUid = "blanditiis";
                                                                    type = "labore";
                                                                    uid = "repudiandae";
                                                                }}),
                                                            }};
                                                            returnLineItems = new org.openapis.openapi.models.shared.OrderReturnLineItem[]{{
                                                                add(new OrderReturnLineItem("occaecati") {{
                                                                    appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                                        add(new OrderLineItemAppliedDiscount("laboriosam") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 348633L;
                                                                                currency = "voluptatem";
                                                                            }};
                                                                            discountUid = "beatae";
                                                                            uid = "qui";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedDiscount("voluptatibus") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 840558L;
                                                                                currency = "in";
                                                                            }};
                                                                            discountUid = "veritatis";
                                                                            uid = "nobis";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedDiscount("itaque") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 949915L;
                                                                                currency = "facilis";
                                                                            }};
                                                                            discountUid = "facere";
                                                                            uid = "aut";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedDiscount("blanditiis") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 698001L;
                                                                                currency = "molestiae";
                                                                            }};
                                                                            discountUid = "quaerat";
                                                                            uid = "distinctio";
                                                                        }}),
                                                                    }};
                                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                        add(new OrderLineItemAppliedTax("dolorem") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 139707L;
                                                                                currency = "ab";
                                                                            }};
                                                                            taxUid = "unde";
                                                                            uid = "nemo";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("nulla") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 697915L;
                                                                                currency = "ut";
                                                                            }};
                                                                            taxUid = "tempora";
                                                                            uid = "quidem";
                                                                        }}),
                                                                    }};
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 198810L;
                                                                        currency = "quisquam";
                                                                    }};
                                                                    catalogObjectId = "labore";
                                                                    catalogVersion = 194042L;
                                                                    grossReturnMoney = new Money() {{
                                                                        amount = 86885L;
                                                                        currency = "veniam";
                                                                    }};
                                                                    itemType = "unde";
                                                                    name = "Jeff Frami";
                                                                    note = "provident";
                                                                    quantity = "nostrum";
                                                                    quantityUnit = new OrderQuantityUnit() {{
                                                                        catalogVersion = 221756L;
                                                                        measurementUnit = new MeasurementUnit() {{
                                                                            areaUnit = "quod";
                                                                            customUnit = new MeasurementUnitCustom("quos", "aliquid") {{
                                                                                abbreviation = "consequatur";
                                                                                name = "Cheryl Bins";
                                                                            }};
                                                                            genericUnit = "sequi";
                                                                            lengthUnit = "culpa";
                                                                            timeUnit = "fuga";
                                                                            type = "modi";
                                                                            volumeUnit = "et";
                                                                            weightUnit = "eveniet";
                                                                        }};
                                                                        precision = 399732L;
                                                                    }};
                                                                    returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 236588L;
                                                                                currency = "ab";
                                                                            }};
                                                                            catalogObjectId = "maxime";
                                                                            catalogVersion = 783906L;
                                                                            name = "Lela Cartwright";
                                                                            sourceModifierUid = "tempore";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 351786L;
                                                                                currency = "sunt";
                                                                            }};
                                                                            uid = "quisquam";
                                                                        }}),
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 576077L;
                                                                                currency = "id";
                                                                            }};
                                                                            catalogObjectId = "ut";
                                                                            catalogVersion = 88210L;
                                                                            name = "Dominick Raynor";
                                                                            sourceModifierUid = "quod";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 695088L;
                                                                                currency = "temporibus";
                                                                            }};
                                                                            uid = "iure";
                                                                        }}),
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 620520L;
                                                                                currency = "ipsam";
                                                                            }};
                                                                            catalogObjectId = "repudiandae";
                                                                            catalogVersion = 935800L;
                                                                            name = "Ms. Lynn Trantow";
                                                                            sourceModifierUid = "porro";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 790341L;
                                                                                currency = "molestiae";
                                                                            }};
                                                                            uid = "mollitia";
                                                                        }}),
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 697217L;
                                                                                currency = "delectus";
                                                                            }};
                                                                            catalogObjectId = "eum";
                                                                            catalogVersion = 106201L;
                                                                            name = "Olive O'Hara";
                                                                            sourceModifierUid = "molestiae";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 81455L;
                                                                                currency = "vel";
                                                                            }};
                                                                            uid = "modi";
                                                                        }}),
                                                                    }};
                                                                    sourceLineItemUid = "dicta";
                                                                    totalDiscountMoney = new Money() {{
                                                                        amount = 588645L;
                                                                        currency = "non";
                                                                    }};
                                                                    totalMoney = new Money() {{
                                                                        amount = 293887L;
                                                                        currency = "soluta";
                                                                    }};
                                                                    totalTaxMoney = new Money() {{
                                                                        amount = 581017L;
                                                                        currency = "sit";
                                                                    }};
                                                                    uid = "asperiores";
                                                                    variationName = "aspernatur";
                                                                    variationTotalPriceMoney = new Money() {{
                                                                        amount = 885103L;
                                                                        currency = "sit";
                                                                    }};
                                                                }}),
                                                                add(new OrderReturnLineItem("facere") {{
                                                                    appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                                        add(new OrderLineItemAppliedDiscount("a") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 68300L;
                                                                                currency = "natus";
                                                                            }};
                                                                            discountUid = "possimus";
                                                                            uid = "magni";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedDiscount("earum") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 768772L;
                                                                                currency = "explicabo";
                                                                            }};
                                                                            discountUid = "delectus";
                                                                            uid = "natus";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedDiscount("nemo") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 148248L;
                                                                                currency = "repudiandae";
                                                                            }};
                                                                            discountUid = "vitae";
                                                                            uid = "consequatur";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedDiscount("molestias") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 589014L;
                                                                                currency = "numquam";
                                                                            }};
                                                                            discountUid = "numquam";
                                                                            uid = "tempore";
                                                                        }}),
                                                                    }};
                                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                        add(new OrderLineItemAppliedTax("reprehenderit") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 318030L;
                                                                                currency = "illum";
                                                                            }};
                                                                            taxUid = "sed";
                                                                            uid = "adipisci";
                                                                        }}),
                                                                    }};
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 659418L;
                                                                        currency = "ducimus";
                                                                    }};
                                                                    catalogObjectId = "dolores";
                                                                    catalogVersion = 989766L;
                                                                    grossReturnMoney = new Money() {{
                                                                        amount = 581857L;
                                                                        currency = "doloremque";
                                                                    }};
                                                                    itemType = "blanditiis";
                                                                    name = "Velma Stark";
                                                                    note = "itaque";
                                                                    quantity = "assumenda";
                                                                    quantityUnit = new OrderQuantityUnit() {{
                                                                        catalogVersion = 310508L;
                                                                        measurementUnit = new MeasurementUnit() {{
                                                                            areaUnit = "id";
                                                                            customUnit = new MeasurementUnitCustom("esse", "placeat") {{
                                                                                abbreviation = "eveniet";
                                                                                name = "Dominic Kunde";
                                                                            }};
                                                                            genericUnit = "at";
                                                                            lengthUnit = "excepturi";
                                                                            timeUnit = "eos";
                                                                            type = "odit";
                                                                            volumeUnit = "quia";
                                                                            weightUnit = "maxime";
                                                                        }};
                                                                        precision = 567379L;
                                                                    }};
                                                                    returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 981677L;
                                                                                currency = "exercitationem";
                                                                            }};
                                                                            catalogObjectId = "ducimus";
                                                                            catalogVersion = 293512L;
                                                                            name = "Walter Murazik";
                                                                            sourceModifierUid = "sapiente";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 673803L;
                                                                                currency = "aspernatur";
                                                                            }};
                                                                            uid = "vero";
                                                                        }}),
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 485160L;
                                                                                currency = "eum";
                                                                            }};
                                                                            catalogObjectId = "quasi";
                                                                            catalogVersion = 947004L;
                                                                            name = "Angelica O'Reilly";
                                                                            sourceModifierUid = "labore";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 337570L;
                                                                                currency = "aliquid";
                                                                            }};
                                                                            uid = "vero";
                                                                        }}),
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 970848L;
                                                                                currency = "dicta";
                                                                            }};
                                                                            catalogObjectId = "sit";
                                                                            catalogVersion = 237960L;
                                                                            name = "Gwen Kerluke";
                                                                            sourceModifierUid = "omnis";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 940141L;
                                                                                currency = "accusantium";
                                                                            }};
                                                                            uid = "minus";
                                                                        }}),
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 128390L;
                                                                                currency = "accusantium";
                                                                            }};
                                                                            catalogObjectId = "ipsa";
                                                                            catalogVersion = 97138L;
                                                                            name = "Randy Collier";
                                                                            sourceModifierUid = "veniam";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 351035L;
                                                                                currency = "quod";
                                                                            }};
                                                                            uid = "quod";
                                                                        }}),
                                                                    }};
                                                                    sourceLineItemUid = "alias";
                                                                    totalDiscountMoney = new Money() {{
                                                                        amount = 365043L;
                                                                        currency = "molestias";
                                                                    }};
                                                                    totalMoney = new Money() {{
                                                                        amount = 267684L;
                                                                        currency = "similique";
                                                                    }};
                                                                    totalTaxMoney = new Money() {{
                                                                        amount = 93660L;
                                                                        currency = "laudantium";
                                                                    }};
                                                                    uid = "ut";
                                                                    variationName = "possimus";
                                                                    variationTotalPriceMoney = new Money() {{
                                                                        amount = 471480L;
                                                                        currency = "voluptas";
                                                                    }};
                                                                }}),
                                                                add(new OrderReturnLineItem("quam") {{
                                                                    appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                                        add(new OrderLineItemAppliedDiscount("atque") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 452515L;
                                                                                currency = "vitae";
                                                                            }};
                                                                            discountUid = "reiciendis";
                                                                            uid = "cumque";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedDiscount("enim") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 126733L;
                                                                                currency = "sit";
                                                                            }};
                                                                            discountUid = "eligendi";
                                                                            uid = "commodi";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedDiscount("rerum") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 688899L;
                                                                                currency = "aut";
                                                                            }};
                                                                            discountUid = "consectetur";
                                                                            uid = "in";
                                                                        }}),
                                                                    }};
                                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                        add(new OrderLineItemAppliedTax("impedit") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 503697L;
                                                                                currency = "saepe";
                                                                            }};
                                                                            taxUid = "sit";
                                                                            uid = "optio";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("quas") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 549332L;
                                                                                currency = "quas";
                                                                            }};
                                                                            taxUid = "ullam";
                                                                            uid = "veritatis";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("accusamus") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 475214L;
                                                                                currency = "officiis";
                                                                            }};
                                                                            taxUid = "labore";
                                                                            uid = "nulla";
                                                                        }}),
                                                                    }};
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 9687L;
                                                                        currency = "ut";
                                                                    }};
                                                                    catalogObjectId = "laborum";
                                                                    catalogVersion = 941688L;
                                                                    grossReturnMoney = new Money() {{
                                                                        amount = 153131L;
                                                                        currency = "corrupti";
                                                                    }};
                                                                    itemType = "maxime";
                                                                    name = "Rosemarie Schulist";
                                                                    note = "labore";
                                                                    quantity = "commodi";
                                                                    quantityUnit = new OrderQuantityUnit() {{
                                                                        catalogVersion = 649511L;
                                                                        measurementUnit = new MeasurementUnit() {{
                                                                            areaUnit = "similique";
                                                                            customUnit = new MeasurementUnitCustom("corrupti", "magni") {{
                                                                                abbreviation = "quasi";
                                                                                name = "Courtney Stark";
                                                                            }};
                                                                            genericUnit = "blanditiis";
                                                                            lengthUnit = "assumenda";
                                                                            timeUnit = "culpa";
                                                                            type = "ipsa";
                                                                            volumeUnit = "inventore";
                                                                            weightUnit = "nesciunt";
                                                                        }};
                                                                        precision = 89928L;
                                                                    }};
                                                                    returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 77749L;
                                                                                currency = "vitae";
                                                                            }};
                                                                            catalogObjectId = "qui";
                                                                            catalogVersion = 603348L;
                                                                            name = "Michele Hyatt";
                                                                            sourceModifierUid = "enim";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 768237L;
                                                                                currency = "ab";
                                                                            }};
                                                                            uid = "quibusdam";
                                                                        }}),
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 500759L;
                                                                                currency = "et";
                                                                            }};
                                                                            catalogObjectId = "delectus";
                                                                            catalogVersion = 128744L;
                                                                            name = "Thomas Gusikowski";
                                                                            sourceModifierUid = "nemo";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 389237L;
                                                                                currency = "iste";
                                                                            }};
                                                                            uid = "quidem";
                                                                        }}),
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 479585L;
                                                                                currency = "culpa";
                                                                            }};
                                                                            catalogObjectId = "reiciendis";
                                                                            catalogVersion = 952911L;
                                                                            name = "Tasha Pagac";
                                                                            sourceModifierUid = "veritatis";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 427876L;
                                                                                currency = "placeat";
                                                                            }};
                                                                            uid = "libero";
                                                                        }}),
                                                                    }};
                                                                    sourceLineItemUid = "saepe";
                                                                    totalDiscountMoney = new Money() {{
                                                                        amount = 57719L;
                                                                        currency = "dignissimos";
                                                                    }};
                                                                    totalMoney = new Money() {{
                                                                        amount = 82503L;
                                                                        currency = "harum";
                                                                    }};
                                                                    totalTaxMoney = new Money() {{
                                                                        amount = 764355L;
                                                                        currency = "ab";
                                                                    }};
                                                                    uid = "ex";
                                                                    variationName = "dolor";
                                                                    variationTotalPriceMoney = new Money() {{
                                                                        amount = 884704L;
                                                                        currency = "sed";
                                                                    }};
                                                                }}),
                                                                add(new OrderReturnLineItem("odio") {{
                                                                    appliedDiscounts = new org.openapis.openapi.models.shared.OrderLineItemAppliedDiscount[]{{
                                                                        add(new OrderLineItemAppliedDiscount("blanditiis") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 687240L;
                                                                                currency = "sequi";
                                                                            }};
                                                                            discountUid = "libero";
                                                                            uid = "ipsa";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedDiscount("occaecati") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 302207L;
                                                                                currency = "vero";
                                                                            }};
                                                                            discountUid = "dolorum";
                                                                            uid = "omnis";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedDiscount("eaque") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 164044L;
                                                                                currency = "veniam";
                                                                            }};
                                                                            discountUid = "quam";
                                                                            uid = "repellendus";
                                                                        }}),
                                                                    }};
                                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                        add(new OrderLineItemAppliedTax("incidunt") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 993970L;
                                                                                currency = "eius";
                                                                            }};
                                                                            taxUid = "ipsa";
                                                                            uid = "quas";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("quia") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 478216L;
                                                                                currency = "laborum";
                                                                            }};
                                                                            taxUid = "in";
                                                                            uid = "numquam";
                                                                        }}),
                                                                    }};
                                                                    basePriceMoney = new Money() {{
                                                                        amount = 831089L;
                                                                        currency = "blanditiis";
                                                                    }};
                                                                    catalogObjectId = "ut";
                                                                    catalogVersion = 259019L;
                                                                    grossReturnMoney = new Money() {{
                                                                        amount = 585730L;
                                                                        currency = "nisi";
                                                                    }};
                                                                    itemType = "placeat";
                                                                    name = "Carroll Wehner";
                                                                    note = "reiciendis";
                                                                    quantity = "ex";
                                                                    quantityUnit = new OrderQuantityUnit() {{
                                                                        catalogVersion = 736126L;
                                                                        measurementUnit = new MeasurementUnit() {{
                                                                            areaUnit = "provident";
                                                                            customUnit = new MeasurementUnitCustom("nisi", "aspernatur") {{
                                                                                abbreviation = "provident";
                                                                                name = "Wilbert Jerde";
                                                                            }};
                                                                            genericUnit = "eveniet";
                                                                            lengthUnit = "tempore";
                                                                            timeUnit = "asperiores";
                                                                            type = "temporibus";
                                                                            volumeUnit = "delectus";
                                                                            weightUnit = "enim";
                                                                        }};
                                                                        precision = 368658L;
                                                                    }};
                                                                    returnModifiers = new org.openapis.openapi.models.shared.OrderReturnLineItemModifier[]{{
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 174897L;
                                                                                currency = "iste";
                                                                            }};
                                                                            catalogObjectId = "labore";
                                                                            catalogVersion = 784083L;
                                                                            name = "Terri Adams III";
                                                                            sourceModifierUid = "laborum";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 88758L;
                                                                                currency = "fugit";
                                                                            }};
                                                                            uid = "quos";
                                                                        }}),
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 476770L;
                                                                                currency = "voluptate";
                                                                            }};
                                                                            catalogObjectId = "autem";
                                                                            catalogVersion = 252880L;
                                                                            name = "Darrel Wehner";
                                                                            sourceModifierUid = "doloremque";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 781916L;
                                                                                currency = "suscipit";
                                                                            }};
                                                                            uid = "temporibus";
                                                                        }}),
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 424510L;
                                                                                currency = "itaque";
                                                                            }};
                                                                            catalogObjectId = "nulla";
                                                                            catalogVersion = 566213L;
                                                                            name = "Arnold Dooley";
                                                                            sourceModifierUid = "eum";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 247927L;
                                                                                currency = "ut";
                                                                            }};
                                                                            uid = "nostrum";
                                                                        }}),
                                                                        add(new OrderReturnLineItemModifier() {{
                                                                            basePriceMoney = new Money() {{
                                                                                amount = 492227L;
                                                                                currency = "illo";
                                                                            }};
                                                                            catalogObjectId = "corporis";
                                                                            catalogVersion = 55356L;
                                                                            name = "Wilbur Kuvalis";
                                                                            sourceModifierUid = "dignissimos";
                                                                            totalPriceMoney = new Money() {{
                                                                                amount = 41508L;
                                                                                currency = "quibusdam";
                                                                            }};
                                                                            uid = "adipisci";
                                                                        }}),
                                                                    }};
                                                                    sourceLineItemUid = "minus";
                                                                    totalDiscountMoney = new Money() {{
                                                                        amount = 330908L;
                                                                        currency = "id";
                                                                    }};
                                                                    totalMoney = new Money() {{
                                                                        amount = 102182L;
                                                                        currency = "maiores";
                                                                    }};
                                                                    totalTaxMoney = new Money() {{
                                                                        amount = 598497L;
                                                                        currency = "quod";
                                                                    }};
                                                                    uid = "magni";
                                                                    variationName = "incidunt";
                                                                    variationTotalPriceMoney = new Money() {{
                                                                        amount = 144974L;
                                                                        currency = "quisquam";
                                                                    }};
                                                                }}),
                                                            }};
                                                            returnServiceCharges = new org.openapis.openapi.models.shared.OrderReturnServiceCharge[]{{
                                                                add(new OrderReturnServiceCharge() {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 436965L;
                                                                        currency = "aliquid";
                                                                    }};
                                                                    appliedMoney = new Money() {{
                                                                        amount = 637077L;
                                                                        currency = "illo";
                                                                    }};
                                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                        add(new OrderLineItemAppliedTax("non") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 214359L;
                                                                                currency = "doloremque";
                                                                            }};
                                                                            taxUid = "quod";
                                                                            uid = "dignissimos";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("ea") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 815046L;
                                                                                currency = "repellat";
                                                                            }};
                                                                            taxUid = "exercitationem";
                                                                            uid = "quidem";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("iste") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 477222L;
                                                                                currency = "vitae";
                                                                            }};
                                                                            taxUid = "excepturi";
                                                                            uid = "voluptatum";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("est") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 50903L;
                                                                                currency = "reiciendis";
                                                                            }};
                                                                            taxUid = "magnam";
                                                                            uid = "consequuntur";
                                                                        }}),
                                                                    }};
                                                                    calculationPhase = "tempora";
                                                                    catalogObjectId = "nobis";
                                                                    catalogVersion = 709591L;
                                                                    name = "Sylvia Lindgren";
                                                                    percentage = "exercitationem";
                                                                    sourceServiceChargeUid = "tempore";
                                                                    taxable = false;
                                                                    totalMoney = new Money() {{
                                                                        amount = 180839L;
                                                                        currency = "laboriosam";
                                                                    }};
                                                                    totalTaxMoney = new Money() {{
                                                                        amount = 47620L;
                                                                        currency = "minima";
                                                                    }};
                                                                    uid = "perspiciatis";
                                                                }}),
                                                                add(new OrderReturnServiceCharge() {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 119543L;
                                                                        currency = "assumenda";
                                                                    }};
                                                                    appliedMoney = new Money() {{
                                                                        amount = 440877L;
                                                                        currency = "tempora";
                                                                    }};
                                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                        add(new OrderLineItemAppliedTax("quae") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 917540L;
                                                                                currency = "sequi";
                                                                            }};
                                                                            taxUid = "eligendi";
                                                                            uid = "consequuntur";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("porro") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 329836L;
                                                                                currency = "sint";
                                                                            }};
                                                                            taxUid = "minus";
                                                                            uid = "excepturi";
                                                                        }}),
                                                                    }};
                                                                    calculationPhase = "nesciunt";
                                                                    catalogObjectId = "maiores";
                                                                    catalogVersion = 334544L;
                                                                    name = "Dr. Joy Torphy";
                                                                    percentage = "corporis";
                                                                    sourceServiceChargeUid = "consequuntur";
                                                                    taxable = false;
                                                                    totalMoney = new Money() {{
                                                                        amount = 488447L;
                                                                        currency = "suscipit";
                                                                    }};
                                                                    totalTaxMoney = new Money() {{
                                                                        amount = 339503L;
                                                                        currency = "nobis";
                                                                    }};
                                                                    uid = "beatae";
                                                                }}),
                                                                add(new OrderReturnServiceCharge() {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 831304L;
                                                                        currency = "ex";
                                                                    }};
                                                                    appliedMoney = new Money() {{
                                                                        amount = 162849L;
                                                                        currency = "delectus";
                                                                    }};
                                                                    appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                        add(new OrderLineItemAppliedTax("architecto") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 822315L;
                                                                                currency = "laborum";
                                                                            }};
                                                                            taxUid = "optio";
                                                                            uid = "debitis";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("inventore") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 968792L;
                                                                                currency = "consequatur";
                                                                            }};
                                                                            taxUid = "sunt";
                                                                            uid = "odit";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("aspernatur") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 388889L;
                                                                                currency = "quod";
                                                                            }};
                                                                            taxUid = "repudiandae";
                                                                            uid = "consequuntur";
                                                                        }}),
                                                                        add(new OrderLineItemAppliedTax("earum") {{
                                                                            appliedMoney = new Money() {{
                                                                                amount = 194574L;
                                                                                currency = "sint";
                                                                            }};
                                                                            taxUid = "accusamus";
                                                                            uid = "deleniti";
                                                                        }}),
                                                                    }};
                                                                    calculationPhase = "consequuntur";
                                                                    catalogObjectId = "enim";
                                                                    catalogVersion = 792676L;
                                                                    name = "Miss Steven Stokes";
                                                                    percentage = "excepturi";
                                                                    sourceServiceChargeUid = "nostrum";
                                                                    taxable = false;
                                                                    totalMoney = new Money() {{
                                                                        amount = 575838L;
                                                                        currency = "doloribus";
                                                                    }};
                                                                    totalTaxMoney = new Money() {{
                                                                        amount = 301289L;
                                                                        currency = "adipisci";
                                                                    }};
                                                                    uid = "natus";
                                                                }}),
                                                            }};
                                                            returnTaxes = new org.openapis.openapi.models.shared.OrderReturnTax[]{{
                                                                add(new OrderReturnTax() {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 243580L;
                                                                        currency = "sint";
                                                                    }};
                                                                    catalogObjectId = "eos";
                                                                    catalogVersion = 393385L;
                                                                    name = "Myra Purdy";
                                                                    percentage = "quaerat";
                                                                    scope = "delectus";
                                                                    sourceTaxUid = "molestiae";
                                                                    type = "deserunt";
                                                                    uid = "laborum";
                                                                }}),
                                                                add(new OrderReturnTax() {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 141314L;
                                                                        currency = "rerum";
                                                                    }};
                                                                    catalogObjectId = "consequuntur";
                                                                    catalogVersion = 300341L;
                                                                    name = "Frances Dicki";
                                                                    percentage = "nostrum";
                                                                    scope = "temporibus";
                                                                    sourceTaxUid = "et";
                                                                    type = "debitis";
                                                                    uid = "nisi";
                                                                }}),
                                                                add(new OrderReturnTax() {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 400044L;
                                                                        currency = "excepturi";
                                                                    }};
                                                                    catalogObjectId = "quas";
                                                                    catalogVersion = 996338L;
                                                                    name = "Guillermo Hahn";
                                                                    percentage = "commodi";
                                                                    scope = "dolores";
                                                                    sourceTaxUid = "dicta";
                                                                    type = "molestiae";
                                                                    uid = "maxime";
                                                                }}),
                                                                add(new OrderReturnTax() {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 173072L;
                                                                        currency = "molestias";
                                                                    }};
                                                                    catalogObjectId = "quam";
                                                                    catalogVersion = 473193L;
                                                                    name = "Allison Kemmer";
                                                                    percentage = "tempora";
                                                                    scope = "aspernatur";
                                                                    sourceTaxUid = "ad";
                                                                    type = "incidunt";
                                                                    uid = "alias";
                                                                }}),
                                                            }};
                                                            roundingAdjustment = new OrderRoundingAdjustment() {{
                                                                amountMoney = new Money() {{
                                                                    amount = 239580L;
                                                                    currency = "atque";
                                                                }};
                                                                name = "Aubrey Raynor";
                                                                uid = "molestiae";
                                                            }};
                                                            sourceOrderId = "et";
                                                            uid = "accusamus";
                                                        }}),
                                                    }};
                                                    rewards = new org.openapis.openapi.models.shared.OrderReward[]{{
                                                        add(new OrderReward("officiis", "aliquam") {{
                                                            id = "81905573-89ce-4dba-87fd-a39594d66bc2";
                                                            rewardTierId = "mollitia";
                                                        }}),
                                                        add(new OrderReward("doloremque", "autem") {{
                                                            id = "80632b99-54b6-4fa2-a063-69828553cb10";
                                                            rewardTierId = "accusantium";
                                                        }}),
                                                        add(new OrderReward("veniam", "quos") {{
                                                            id = "bef4921e-c205-43b7-8936-6ac8ee0f2bf1";
                                                            rewardTierId = "provident";
                                                        }}),
                                                    }};
                                                    roundingAdjustment = new OrderRoundingAdjustment() {{
                                                        amountMoney = new Money() {{
                                                            amount = 521694L;
                                                            currency = "facere";
                                                        }};;
                                                        name = "Mr. Sharon Swift";
                                                        uid = "neque";
                                                    }};;
                                                    serviceCharges = new org.openapis.openapi.models.shared.OrderServiceCharge[]{{
                                                        add(new OrderServiceCharge() {{
                                                            amountMoney = new Money() {{
                                                                amount = 904968L;
                                                                currency = "nobis";
                                                            }};
                                                            appliedMoney = new Money() {{
                                                                amount = 669343L;
                                                                currency = "quia";
                                                            }};
                                                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                add(new OrderLineItemAppliedTax("itaque") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 476604L;
                                                                        currency = "facilis";
                                                                    }};
                                                                    taxUid = "earum";
                                                                    uid = "ipsum";
                                                                }}),
                                                                add(new OrderLineItemAppliedTax("numquam") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 586366L;
                                                                        currency = "consequatur";
                                                                    }};
                                                                    taxUid = "harum";
                                                                    uid = "nobis";
                                                                }}),
                                                                add(new OrderLineItemAppliedTax("commodi") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 6237L;
                                                                        currency = "temporibus";
                                                                    }};
                                                                    taxUid = "doloribus";
                                                                    uid = "quos";
                                                                }}),
                                                            }};
                                                            calculationPhase = "blanditiis";
                                                            catalogObjectId = "voluptatibus";
                                                            catalogVersion = 861471L;
                                                            metadata = new java.util.HashMap<String, String>() {{
                                                                put("ratione", "dolore");
                                                                put("perferendis", "enim");
                                                            }};
                                                            name = "Randolph Ernser PhD";
                                                            percentage = "numquam";
                                                            taxable = false;
                                                            totalMoney = new Money() {{
                                                                amount = 590573L;
                                                                currency = "quia";
                                                            }};
                                                            totalTaxMoney = new Money() {{
                                                                amount = 969911L;
                                                                currency = "modi";
                                                            }};
                                                            type = "doloribus";
                                                            uid = "et";
                                                        }}),
                                                        add(new OrderServiceCharge() {{
                                                            amountMoney = new Money() {{
                                                                amount = 185182L;
                                                                currency = "iusto";
                                                            }};
                                                            appliedMoney = new Money() {{
                                                                amount = 955783L;
                                                                currency = "quidem";
                                                            }};
                                                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                add(new OrderLineItemAppliedTax("beatae") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 906373L;
                                                                        currency = "voluptatem";
                                                                    }};
                                                                    taxUid = "soluta";
                                                                    uid = "hic";
                                                                }}),
                                                            }};
                                                            calculationPhase = "delectus";
                                                            catalogObjectId = "deleniti";
                                                            catalogVersion = 147247L;
                                                            metadata = new java.util.HashMap<String, String>() {{
                                                                put("reprehenderit", "sint");
                                                            }};
                                                            name = "Miss Jennie Stokes";
                                                            percentage = "impedit";
                                                            taxable = false;
                                                            totalMoney = new Money() {{
                                                                amount = 641425L;
                                                                currency = "odio";
                                                            }};
                                                            totalTaxMoney = new Money() {{
                                                                amount = 453755L;
                                                                currency = "mollitia";
                                                            }};
                                                            type = "repudiandae";
                                                            uid = "tempore";
                                                        }}),
                                                        add(new OrderServiceCharge() {{
                                                            amountMoney = new Money() {{
                                                                amount = 452605L;
                                                                currency = "cum";
                                                            }};
                                                            appliedMoney = new Money() {{
                                                                amount = 461103L;
                                                                currency = "alias";
                                                            }};
                                                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                add(new OrderLineItemAppliedTax("quae") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 99908L;
                                                                        currency = "est";
                                                                    }};
                                                                    taxUid = "nemo";
                                                                    uid = "magni";
                                                                }}),
                                                            }};
                                                            calculationPhase = "quaerat";
                                                            catalogObjectId = "suscipit";
                                                            catalogVersion = 699191L;
                                                            metadata = new java.util.HashMap<String, String>() {{
                                                                put("aliquam", "repudiandae");
                                                                put("unde", "excepturi");
                                                            }};
                                                            name = "Johnathan Baumbach";
                                                            percentage = "reprehenderit";
                                                            taxable = false;
                                                            totalMoney = new Money() {{
                                                                amount = 899735L;
                                                                currency = "alias";
                                                            }};
                                                            totalTaxMoney = new Money() {{
                                                                amount = 589868L;
                                                                currency = "ut";
                                                            }};
                                                            type = "hic";
                                                            uid = "facere";
                                                        }}),
                                                        add(new OrderServiceCharge() {{
                                                            amountMoney = new Money() {{
                                                                amount = 950465L;
                                                                currency = "saepe";
                                                            }};
                                                            appliedMoney = new Money() {{
                                                                amount = 827429L;
                                                                currency = "exercitationem";
                                                            }};
                                                            appliedTaxes = new org.openapis.openapi.models.shared.OrderLineItemAppliedTax[]{{
                                                                add(new OrderLineItemAppliedTax("exercitationem") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 293991L;
                                                                        currency = "sit";
                                                                    }};
                                                                    taxUid = "recusandae";
                                                                    uid = "a";
                                                                }}),
                                                                add(new OrderLineItemAppliedTax("est") {{
                                                                    appliedMoney = new Money() {{
                                                                        amount = 204080L;
                                                                        currency = "mollitia";
                                                                    }};
                                                                    taxUid = "velit";
                                                                    uid = "ut";
                                                                }}),
                                                            }};
                                                            calculationPhase = "quasi";
                                                            catalogObjectId = "rerum";
                                                            catalogVersion = 501236L;
                                                            metadata = new java.util.HashMap<String, String>() {{
                                                                put("recusandae", "perspiciatis");
                                                                put("natus", "reprehenderit");
                                                                put("dolorem", "sunt");
                                                                put("fuga", "nulla");
                                                            }};
                                                            name = "Kevin Hammes";
                                                            percentage = "quis";
                                                            taxable = false;
                                                            totalMoney = new Money() {{
                                                                amount = 681953L;
                                                                currency = "eveniet";
                                                            }};
                                                            totalTaxMoney = new Money() {{
                                                                amount = 160353L;
                                                                currency = "illum";
                                                            }};
                                                            type = "delectus";
                                                            uid = "rerum";
                                                        }}),
                                                    }};
                                                    source = new OrderSource() {{
                                                        name = "Lisa Wuckert";
                                                    }};;
                                                    state = "molestias";
                                                    taxes = new org.openapis.openapi.models.shared.OrderLineItemTax[]{{
                                                        add(new OrderLineItemTax() {{
                                                            appliedMoney = new Money() {{
                                                                amount = 252183L;
                                                                currency = "magni";
                                                            }};
                                                            autoApplied = false;
                                                            catalogObjectId = "sint";
                                                            catalogVersion = 10180L;
                                                            metadata = new java.util.HashMap<String, String>() {{
                                                                put("adipisci", "dolorem");
                                                                put("ex", "quis");
                                                                put("eum", "et");
                                                                put("officiis", "quo");
                                                            }};
                                                            name = "Roger Kerluke";
                                                            percentage = "praesentium";
                                                            scope = "iste";
                                                            type = "tempora";
                                                            uid = "ad";
                                                        }}),
                                                        add(new OrderLineItemTax() {{
                                                            appliedMoney = new Money() {{
                                                                amount = 70026L;
                                                                currency = "harum";
                                                            }};
                                                            autoApplied = false;
                                                            catalogObjectId = "facere";
                                                            catalogVersion = 495700L;
                                                            metadata = new java.util.HashMap<String, String>() {{
                                                                put("accusamus", "officiis");
                                                                put("necessitatibus", "nam");
                                                            }};
                                                            name = "Christine MacGyver";
                                                            percentage = "possimus";
                                                            scope = "similique";
                                                            type = "architecto";
                                                            uid = "asperiores";
                                                        }}),
                                                    }};
                                                    tenders = new org.openapis.openapi.models.shared.Tender[]{{
                                                        add(new Tender("soluta") {{
                                                            additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                                                add(new AdditionalRecipient(                new Money() {{
                                                                                    amount = 966682L;
                                                                                    currency = "doloremque";
                                                                                }};, "laboriosam") {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 220981L;
                                                                        currency = "nemo";
                                                                    }};
                                                                    description = "quis";
                                                                    locationId = "quasi";
                                                                    receivableId = "odit";
                                                                }}),
                                                                add(new AdditionalRecipient(                new Money() {{
                                                                                    amount = 489923L;
                                                                                    currency = "consequuntur";
                                                                                }};, "sapiente") {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 857507L;
                                                                        currency = "dolore";
                                                                    }};
                                                                    description = "itaque";
                                                                    locationId = "enim";
                                                                    receivableId = "nam";
                                                                }}),
                                                                add(new AdditionalRecipient(                new Money() {{
                                                                                    amount = 351469L;
                                                                                    currency = "commodi";
                                                                                }};, "laudantium") {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 912L;
                                                                        currency = "doloribus";
                                                                    }};
                                                                    description = "nemo";
                                                                    locationId = "dolore";
                                                                    receivableId = "corrupti";
                                                                }}),
                                                                add(new AdditionalRecipient(                new Money() {{
                                                                                    amount = 936059L;
                                                                                    currency = "consequatur";
                                                                                }};, "voluptatem") {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 667559L;
                                                                        currency = "consequatur";
                                                                    }};
                                                                    description = "incidunt";
                                                                    locationId = "dolores";
                                                                    receivableId = "labore";
                                                                }}),
                                                            }};
                                                            amountMoney = new Money() {{
                                                                amount = 641517L;
                                                                currency = "architecto";
                                                            }};
                                                            cardDetails = new TenderCardDetails() {{
                                                                card = new Card() {{
                                                                    billingAddress = new Address() {{
                                                                        addressLine1 = "quibusdam";
                                                                        addressLine2 = "autem";
                                                                        addressLine3 = "voluptates";
                                                                        administrativeDistrictLevel1 = "tempore";
                                                                        administrativeDistrictLevel2 = "cupiditate";
                                                                        administrativeDistrictLevel3 = "modi";
                                                                        country = "Colombia";
                                                                        firstName = "Elmo";
                                                                        lastName = "Jenkins";
                                                                        locality = "aliquam";
                                                                        organization = "corporis";
                                                                        postalCode = "02053-9776";
                                                                        sublocality = "quis";
                                                                        sublocality2 = "cumque";
                                                                        sublocality3 = "cumque";
                                                                    }};
                                                                    bin = "vero";
                                                                    cardBrand = "a";
                                                                    cardType = "tenetur";
                                                                    cardholderName = "ipsam";
                                                                    customerId = "quod";
                                                                    enabled = false;
                                                                    expMonth = 708011L;
                                                                    expYear = 40568L;
                                                                    fingerprint = "illo";
                                                                    id = "fe51e528-a45a-4c82-b85f-8bc2caba8da4";
                                                                    last4 = "veritatis";
                                                                    prepaidType = "fugit";
                                                                    referenceId = "nihil";
                                                                    version = 846715L;
                                                                }};
                                                                entryMethod = "nulla";
                                                                status = "nemo";
                                                            }};
                                                            cashDetails = new TenderCashDetails() {{
                                                                buyerTenderedMoney = new Money() {{
                                                                    amount = 607365L;
                                                                    currency = "iure";
                                                                }};
                                                                changeBackMoney = new Money() {{
                                                                    amount = 941684L;
                                                                    currency = "sapiente";
                                                                }};
                                                            }};
                                                            createdAt = "eius";
                                                            customerId = "esse";
                                                            id = "11aa1bc7-4b86-4cec-874f-77b4848bd6a6";
                                                            locationId = "hic";
                                                            note = "perferendis";
                                                            paymentId = "tempora";
                                                            processingFeeMoney = new Money() {{
                                                                amount = 305278L;
                                                                currency = "architecto";
                                                            }};
                                                            tipMoney = new Money() {{
                                                                amount = 860383L;
                                                                currency = "qui";
                                                            }};
                                                            transactionId = "maxime";
                                                            type = "ratione";
                                                        }}),
                                                        add(new Tender("iste") {{
                                                            additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                                                add(new AdditionalRecipient(                new Money() {{
                                                                                    amount = 201056L;
                                                                                    currency = "molestiae";
                                                                                }};, "adipisci") {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 23128L;
                                                                        currency = "laudantium";
                                                                    }};
                                                                    description = "sit";
                                                                    locationId = "perspiciatis";
                                                                    receivableId = "quaerat";
                                                                }}),
                                                                add(new AdditionalRecipient(                new Money() {{
                                                                                    amount = 355451L;
                                                                                    currency = "excepturi";
                                                                                }};, "soluta") {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 909742L;
                                                                        currency = "ipsa";
                                                                    }};
                                                                    description = "laboriosam";
                                                                    locationId = "sit";
                                                                    receivableId = "labore";
                                                                }}),
                                                                add(new AdditionalRecipient(                new Money() {{
                                                                                    amount = 21470L;
                                                                                    currency = "qui";
                                                                                }};, "tenetur") {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 914695L;
                                                                        currency = "rerum";
                                                                    }};
                                                                    description = "cum";
                                                                    locationId = "est";
                                                                    receivableId = "fugiat";
                                                                }}),
                                                            }};
                                                            amountMoney = new Money() {{
                                                                amount = 125664L;
                                                                currency = "quis";
                                                            }};
                                                            cardDetails = new TenderCardDetails() {{
                                                                card = new Card() {{
                                                                    billingAddress = new Address() {{
                                                                        addressLine1 = "corrupti";
                                                                        addressLine2 = "iure";
                                                                        addressLine3 = "quidem";
                                                                        administrativeDistrictLevel1 = "quod";
                                                                        administrativeDistrictLevel2 = "a";
                                                                        administrativeDistrictLevel3 = "et";
                                                                        country = "Guyana";
                                                                        firstName = "Charley";
                                                                        lastName = "Hegmann";
                                                                        locality = "minima";
                                                                        organization = "laudantium";
                                                                        postalCode = "66537-9378";
                                                                        sublocality = "consequatur";
                                                                        sublocality2 = "qui";
                                                                        sublocality3 = "in";
                                                                    }};
                                                                    bin = "enim";
                                                                    cardBrand = "vel";
                                                                    cardType = "impedit";
                                                                    cardholderName = "consectetur";
                                                                    customerId = "quis";
                                                                    enabled = false;
                                                                    expMonth = 281753L;
                                                                    expYear = 668155L;
                                                                    fingerprint = "fuga";
                                                                    id = "432b47e1-763c-4520-8c23-e9802d82f0d4";
                                                                    last4 = "quis";
                                                                    prepaidType = "repudiandae";
                                                                    referenceId = "soluta";
                                                                    version = 262614L;
                                                                }};
                                                                entryMethod = "fuga";
                                                                status = "blanditiis";
                                                            }};
                                                            cashDetails = new TenderCashDetails() {{
                                                                buyerTenderedMoney = new Money() {{
                                                                    amount = 748266L;
                                                                    currency = "ea";
                                                                }};
                                                                changeBackMoney = new Money() {{
                                                                    amount = 483485L;
                                                                    currency = "dolore";
                                                                }};
                                                            }};
                                                            createdAt = "repudiandae";
                                                            customerId = "recusandae";
                                                            id = "5cfc18ed-c7f7-487e-b2e0-4b3d3ed0c567";
                                                            locationId = "aut";
                                                            note = "recusandae";
                                                            paymentId = "voluptatibus";
                                                            processingFeeMoney = new Money() {{
                                                                amount = 292938L;
                                                                currency = "aspernatur";
                                                            }};
                                                            tipMoney = new Money() {{
                                                                amount = 688376L;
                                                                currency = "illum";
                                                            }};
                                                            transactionId = "dolor";
                                                            type = "porro";
                                                        }}),
                                                        add(new Tender("iste") {{
                                                            additionalRecipients = new org.openapis.openapi.models.shared.AdditionalRecipient[]{{
                                                                add(new AdditionalRecipient(                new Money() {{
                                                                                    amount = 231914L;
                                                                                    currency = "repellat";
                                                                                }};, "voluptas") {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 113123L;
                                                                        currency = "impedit";
                                                                    }};
                                                                    description = "eligendi";
                                                                    locationId = "veniam";
                                                                    receivableId = "aperiam";
                                                                }}),
                                                                add(new AdditionalRecipient(                new Money() {{
                                                                                    amount = 826519L;
                                                                                    currency = "alias";
                                                                                }};, "deserunt") {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 801405L;
                                                                        currency = "nesciunt";
                                                                    }};
                                                                    description = "iste";
                                                                    locationId = "distinctio";
                                                                    receivableId = "cumque";
                                                                }}),
                                                                add(new AdditionalRecipient(                new Money() {{
                                                                                    amount = 580401L;
                                                                                    currency = "nemo";
                                                                                }};, "quam") {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 428395L;
                                                                        currency = "qui";
                                                                    }};
                                                                    description = "perspiciatis";
                                                                    locationId = "accusantium";
                                                                    receivableId = "voluptatibus";
                                                                }}),
                                                                add(new AdditionalRecipient(                new Money() {{
                                                                                    amount = 541466L;
                                                                                    currency = "natus";
                                                                                }};, "culpa") {{
                                                                    amountMoney = new Money() {{
                                                                        amount = 970491L;
                                                                        currency = "nesciunt";
                                                                    }};
                                                                    description = "laudantium";
                                                                    locationId = "nemo";
                                                                    receivableId = "ab";
                                                                }}),
                                                            }};
                                                            amountMoney = new Money() {{
                                                                amount = 822084L;
                                                                currency = "molestiae";
                                                            }};
                                                            cardDetails = new TenderCardDetails() {{
                                                                card = new Card() {{
                                                                    billingAddress = new Address() {{
                                                                        addressLine1 = "officiis";
                                                                        addressLine2 = "reiciendis";
                                                                        addressLine3 = "voluptatum";
                                                                        administrativeDistrictLevel1 = "aperiam";
                                                                        administrativeDistrictLevel2 = "reprehenderit";
                                                                        administrativeDistrictLevel3 = "animi";
                                                                        country = "New Zealand";
                                                                        firstName = "Tabitha";
                                                                        lastName = "Berge";
                                                                        locality = "adipisci";
                                                                        organization = "hic";
                                                                        postalCode = "27646";
                                                                        sublocality = "asperiores";
                                                                        sublocality2 = "nam";
                                                                        sublocality3 = "provident";
                                                                    }};
                                                                    bin = "fugiat";
                                                                    cardBrand = "recusandae";
                                                                    cardType = "non";
                                                                    cardholderName = "aut";
                                                                    customerId = "neque";
                                                                    enabled = false;
                                                                    expMonth = 154539L;
                                                                    expYear = 746232L;
                                                                    fingerprint = "fuga";
                                                                    id = "26fd368b-a921-46bc-b415-835c73641723";
                                                                    last4 = "veritatis";
                                                                    prepaidType = "amet";
                                                                    referenceId = "sequi";
                                                                    version = 926229L;
                                                                }};
                                                                entryMethod = "fugiat";
                                                                status = "quod";
                                                            }};
                                                            cashDetails = new TenderCashDetails() {{
                                                                buyerTenderedMoney = new Money() {{
                                                                    amount = 24522L;
                                                                    currency = "modi";
                                                                }};
                                                                changeBackMoney = new Money() {{
                                                                    amount = 431617L;
                                                                    currency = "rerum";
                                                                }};
                                                            }};
                                                            createdAt = "quod";
                                                            customerId = "nemo";
                                                            id = "163bbca4-9227-4c42-822c-55350495c5db";
                                                            locationId = "harum";
                                                            note = "adipisci";
                                                            paymentId = "optio";
                                                            processingFeeMoney = new Money() {{
                                                                amount = 325326L;
                                                                currency = "reprehenderit";
                                                            }};
                                                            tipMoney = new Money() {{
                                                                amount = 776212L;
                                                                currency = "vitae";
                                                            }};
                                                            transactionId = "voluptates";
                                                            type = "tempora";
                                                        }}),
                                                    }};
                                                    totalDiscountMoney = new Money() {{
                                                        amount = 560736L;
                                                        currency = "beatae";
                                                    }};;
                                                    totalMoney = new Money() {{
                                                        amount = 929881L;
                                                        currency = "atque";
                                                    }};;
                                                    totalServiceChargeMoney = new Money() {{
                                                        amount = 679962L;
                                                        currency = "similique";
                                                    }};;
                                                    totalTaxMoney = new Money() {{
                                                        amount = 184797L;
                                                        currency = "enim";
                                                    }};;
                                                    totalTipMoney = new Money() {{
                                                        amount = 464545L;
                                                        currency = "assumenda";
                                                    }};;
                                                    updatedAt = "temporibus";
                                                    version = 782079L;
                                                }};;
                                            }};) {{
                                additionalRecipients = new org.openapis.openapi.models.shared.ChargeRequestAdditionalRecipient[]{{
                                    add(new ChargeRequestAdditionalRecipient(                new Money() {{
                                                        amount = 697382L;
                                                        currency = "at";
                                                    }};, "debitis", "eum") {{
                                        amountMoney = new Money() {{
                                            amount = 575307L;
                                            currency = "inventore";
                                        }};
                                        description = "fugit";
                                        locationId = "earum";
                                    }}),
                                }};
                                askForShippingAddress = false;
                                merchantSupportEmail = "non";
                                note = "nam";
                                prePopulateBuyerEmail = "sapiente";
                                prePopulateShippingAddress = new Address() {{
                                    addressLine1 = "porro";
                                    addressLine2 = "impedit";
                                    addressLine3 = "veniam";
                                    administrativeDistrictLevel1 = "magnam";
                                    administrativeDistrictLevel2 = "iure";
                                    administrativeDistrictLevel3 = "natus";
                                    country = "Switzerland";
                                    firstName = "Eloise";
                                    lastName = "Ankunding";
                                    locality = "architecto";
                                    organization = "quis";
                                    postalCode = "96464-1037";
                                    sublocality = "vero";
                                    sublocality2 = "hic";
                                    sublocality3 = "consequuntur";
                                }};;
                                redirectUrl = "quidem";
                            }};, "aperiam");            

            CreateCheckoutResponse res = sdk.checkout.createCheckout(req, new CreateCheckoutSecurity("animi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createCheckoutResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
