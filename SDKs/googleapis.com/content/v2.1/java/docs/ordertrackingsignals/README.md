# ordertrackingsignals

### Available Operations

* [contentOrdertrackingsignalsCreate](#contentordertrackingsignalscreate) - Creates new order tracking signal.

## contentOrdertrackingsignalsCreate

Creates new order tracking signal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrdertrackingsignalsCreateRequest;
import org.openapis.openapi.models.operations.ContentOrdertrackingsignalsCreateResponse;
import org.openapis.openapi.models.operations.ContentOrdertrackingsignalsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DateTime;
import org.openapis.openapi.models.shared.OrderTrackingSignalInput;
import org.openapis.openapi.models.shared.OrderTrackingSignalLineItemDetails;
import org.openapis.openapi.models.shared.OrderTrackingSignalShipmentLineItemMapping;
import org.openapis.openapi.models.shared.OrderTrackingSignalShippingInfo;
import org.openapis.openapi.models.shared.OrderTrackingSignalShippingInfoShippingStatusEnum;
import org.openapis.openapi.models.shared.PriceAmount;
import org.openapis.openapi.models.shared.TimeZone;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrdertrackingsignalsCreateRequest req = new ContentOrdertrackingsignalsCreateRequest("nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                orderTrackingSignalInput = new OrderTrackingSignalInput() {{
                    customerShippingFee = new PriceAmount() {{
                        currency = "doloribus";
                        value = "cumque";
                    }};;
                    deliveryPostalCode = "expedita";
                    deliveryRegionCode = "modi";
                    lineItems = new org.openapis.openapi.models.shared.OrderTrackingSignalLineItemDetails[]{{
                        add(new OrderTrackingSignalLineItemDetails() {{
                            brand = "ipsam";
                            gtin = "occaecati";
                            lineItemId = "ipsum";
                            mpn = "accusamus";
                            productDescription = "quisquam";
                            productId = "quasi";
                            productTitle = "fugit";
                            quantity = "quo";
                            sku = "temporibus";
                            upc = "mollitia";
                        }}),
                        add(new OrderTrackingSignalLineItemDetails() {{
                            brand = "id";
                            gtin = "quibusdam";
                            lineItemId = "ipsa";
                            mpn = "accusamus";
                            productDescription = "placeat";
                            productId = "quam";
                            productTitle = "similique";
                            quantity = "delectus";
                            sku = "saepe";
                            upc = "facere";
                        }}),
                        add(new OrderTrackingSignalLineItemDetails() {{
                            brand = "nobis";
                            gtin = "at";
                            lineItemId = "molestias";
                            mpn = "aut";
                            productDescription = "temporibus";
                            productId = "tenetur";
                            productTitle = "incidunt";
                            quantity = "numquam";
                            sku = "corrupti";
                            upc = "similique";
                        }}),
                        add(new OrderTrackingSignalLineItemDetails() {{
                            brand = "dolore";
                            gtin = "esse";
                            lineItemId = "reiciendis";
                            mpn = "iste";
                            productDescription = "amet";
                            productId = "occaecati";
                            productTitle = "aut";
                            quantity = "impedit";
                            sku = "minima";
                            upc = "quos";
                        }}),
                    }};
                    merchantId = "blanditiis";
                    orderCreatedTime = new DateTime() {{
                        day = 559937;
                        hours = 28362;
                        minutes = 591774;
                        month = 559248;
                        nanos = 218413;
                        seconds = 874283;
                        timeZone = new TimeZone() {{
                            id = "abf9ef3f-fdd9-4f7f-879a-f4d35724cdb0";
                            version = "reiciendis";
                        }};;
                        utcOffset = "labore";
                        year = 874843;
                    }};;
                    orderId = "eos";
                    shipmentLineItemMapping = new org.openapis.openapi.models.shared.OrderTrackingSignalShipmentLineItemMapping[]{{
                        add(new OrderTrackingSignalShipmentLineItemMapping() {{
                            lineItemId = "quasi";
                            quantity = "architecto";
                            shipmentId = "praesentium";
                        }}),
                        add(new OrderTrackingSignalShipmentLineItemMapping() {{
                            lineItemId = "iusto";
                            quantity = "fugiat";
                            shipmentId = "enim";
                        }}),
                        add(new OrderTrackingSignalShipmentLineItemMapping() {{
                            lineItemId = "iure";
                            quantity = "laudantium";
                            shipmentId = "modi";
                        }}),
                    }};
                    shippingInfo = new org.openapis.openapi.models.shared.OrderTrackingSignalShippingInfo[]{{
                        add(new OrderTrackingSignalShippingInfo() {{
                            actualDeliveryTime = new DateTime() {{
                                day = 882157;
                                hours = 861823;
                                minutes = 921127;
                                month = 844327;
                                nanos = 505799;
                                seconds = 315465;
                                timeZone = new TimeZone() {{
                                    id = "a9065e62-8bdf-4c20-b2b6-c879923b7e13";
                                    version = "ad";
                                }};
                                utcOffset = "atque";
                                year = 284779;
                            }};
                            carrierName = "asperiores";
                            carrierServiceName = "reprehenderit";
                            earliestDeliveryPromiseTime = new DateTime() {{
                                day = 644129;
                                hours = 930127;
                                minutes = 93254;
                                month = 181267;
                                nanos = 773355;
                                seconds = 401388;
                                timeZone = new TimeZone() {{
                                    id = "891f82ce-1157-4172-b053-77dcfa89df97";
                                    version = "exercitationem";
                                }};
                                utcOffset = "voluptates";
                                year = 194194;
                            }};
                            latestDeliveryPromiseTime = new DateTime() {{
                                day = 336640;
                                hours = 413135;
                                minutes = 426481;
                                month = 522824;
                                nanos = 397268;
                                seconds = 44443;
                                timeZone = new TimeZone() {{
                                    id = "92e9c3dd-c5f1-411d-aa10-26d541a4d190";
                                    version = "sapiente";
                                }};
                                utcOffset = "officiis";
                                year = 708883;
                            }};
                            originPostalCode = "quia";
                            originRegionCode = "vitae";
                            shipmentId = "odio";
                            shippedTime = new DateTime() {{
                                day = 558410;
                                hours = 55407;
                                minutes = 718187;
                                month = 811903;
                                nanos = 801958;
                                seconds = 756074;
                                timeZone = new TimeZone() {{
                                    id = "0dbbddb4-8470-48fb-8e39-1e6bc158c4c4";
                                    version = "earum";
                                }};
                                utcOffset = "ullam";
                                year = 256813;
                            }};
                            shippingStatus = OrderTrackingSignalShippingInfoShippingStatusEnum.SHIPPING_STATE_UNSPECIFIED;
                            trackingId = "cupiditate";
                        }}),
                        add(new OrderTrackingSignalShippingInfo() {{
                            actualDeliveryTime = new DateTime() {{
                                day = 578610;
                                hours = 929443;
                                minutes = 683602;
                                month = 234845;
                                nanos = 268749;
                                seconds = 134832;
                                timeZone = new TimeZone() {{
                                    id = "260e9b20-0ce7-48a1-bd8f-b7a0a116ce72";
                                    version = "ratione";
                                }};
                                utcOffset = "possimus";
                                year = 311548;
                            }};
                            carrierName = "aut";
                            carrierServiceName = "natus";
                            earliestDeliveryPromiseTime = new DateTime() {{
                                day = 457389;
                                hours = 963908;
                                minutes = 644397;
                                month = 188081;
                                nanos = 60379;
                                seconds = 895293;
                                timeZone = new TimeZone() {{
                                    id = "9af725b2-9122-4030-983f-5aeb7799d22e";
                                    version = "deleniti";
                                }};
                                utcOffset = "optio";
                                year = 98805;
                            }};
                            latestDeliveryPromiseTime = new DateTime() {{
                                day = 998199;
                                hours = 542783;
                                minutes = 297723;
                                month = 594379;
                                nanos = 227017;
                                seconds = 546089;
                                timeZone = new TimeZone() {{
                                    id = "25fdc42c-876c-42c2-9fb4-cfc1c76230f8";
                                    version = "numquam";
                                }};
                                utcOffset = "vitae";
                                year = 980376;
                            }};
                            originPostalCode = "nam";
                            originRegionCode = "architecto";
                            shipmentId = "rerum";
                            shippedTime = new DateTime() {{
                                day = 826975;
                                hours = 176333;
                                minutes = 211518;
                                month = 941743;
                                nanos = 830948;
                                seconds = 721044;
                                timeZone = new TimeZone() {{
                                    id = "14db6be5-a685-4998-a22a-e20da16fc2b2";
                                    version = "iusto";
                                }};
                                utcOffset = "ab";
                                year = 643864;
                            }};
                            shippingStatus = OrderTrackingSignalShippingInfoShippingStatusEnum.SHIPPING_STATE_UNSPECIFIED;
                            trackingId = "blanditiis";
                        }}),
                    }};
                }};;
                accessToken = "sint";
                alt = AltEnum.PROTO;
                callback = "ullam";
                fields = "molestiae";
                key = "itaque";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "non";
                uploadProtocol = "recusandae";
            }};            

            ContentOrdertrackingsignalsCreateResponse res = sdk.ordertrackingsignals.contentOrdertrackingsignalsCreate(req, new ContentOrdertrackingsignalsCreateSecurity("omnis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orderTrackingSignal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
