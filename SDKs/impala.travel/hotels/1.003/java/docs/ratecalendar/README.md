# rateCalendar

## Overview

Getting rates for future dates.

### Available Operations

* [listRatePlanForHotelForRatePlanId](#listrateplanforhotelforrateplanid) - List a rate plan (rate calendar) for a hotel (Beta endpoint).
* [listRatePlansForHotel](#listrateplansforhotel) - List all rate plans (rate calendar) for a hotel (Beta endpoint)

## listRatePlanForHotelForRatePlanId

Returns a single rate plan available for you for a hotel.

Rate plans are products the hotel is offering. They typically consist of a combination of restrictiveness in case of cancellations or changes, the time they're bookable, minimum or maximum length of stay restrictions (e.g. week-long bookings), included components like breakfast or dinner and/or the conditions under which the room can be sold (e.g. private rates that can only be offered and sold to a closed user group behind login).

Examples of rate plans:

* Non-refundable room rate that includes breakfast
* Room-only rate with free cancellation up to 14 days before arrival

This endpoint returns a singular available rate plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRatePlanForHotelForRatePlanIdRequest;
import org.openapis.openapi.models.operations.ListRatePlanForHotelForRatePlanIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    apiKeyAuthentication = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRatePlanForHotelForRatePlanIdRequest req = new ListRatePlanForHotelForRatePlanIdRequest("19da1ffe-78f0-497b-8074-f15471b5e6e1", 216822L) {{
                end = "2022-05-12";
                offset = 25;
                roomTypeId = "6d3a255d-3b22-48a4-8076-3ae3d0ade3d7";
                size = 40;
                start = "2022-05-12";
                updatedAt = new java.util.HashMap<String, Object>() {{
                    put("molestias", "excepturi");
                    put("pariatur", "modi");
                    put("praesentium", "rem");
                }};
            }};            

            ListRatePlanForHotelForRatePlanIdResponse res = sdk.rateCalendar.listRatePlanForHotelForRatePlanId(req);

            if (res.ratePlan != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRatePlansForHotel

Returns a list of all rate plans available for you for a hotel.

Rate plans are products the hotel is offering. They typically consist of a combination of restrictiveness in case of cancellations or changes, the time they're bookable, minimum or maximum length of stay restrictions (e.g. week-long bookings), included components like breakfast or dinner and/or the conditions under which the room can be sold (e.g. private rates that can only be offered and sold to a closed user group behind login).

Examples of rate plans:

* Non-refundable room rate that includes breakfast
* Room-only rate with free cancellation up to 14 days before arrival

For each such rate plan this endpoint returns the room types it's available for, alongside prices for each date and occupancy that can be sold – or the information that the room isn't available (closed) for a certain date.

For the vast majority of our customers, availability searches using the [List all hotels](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1hotels/get) endpoint are the best choice. It accepts the dates your guest is looking for and provides the rates to display.

This endpoint can help augment this for two additional use cases:

This endpoint allows you to query rate prices for all future dates in one go, making it a great choice to feed availability information and prices into your own system or displaying a rate calender to guide your guests to gain an overview of future availability and prices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRatePlansForHotelRequest;
import org.openapis.openapi.models.operations.ListRatePlansForHotelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    apiKeyAuthentication = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRatePlansForHotelRequest req = new ListRatePlansForHotelRequest("1e91e450-ad2a-4bd4-8269-802d502a94bb") {{
                end = "2022-05-12";
                offset = 25;
                roomId = "6d3a255d-3b22-48a4-8076-3ae3d0ade3d7";
                size = 40;
                start = "2022-05-12";
                updatedAt = new java.util.HashMap<String, Object>() {{
                    put("delectus", "eum");
                    put("non", "eligendi");
                }};
            }};            

            ListRatePlansForHotelResponse res = sdk.rateCalendar.listRatePlansForHotel(req);

            if (res.listRatePlansForHotel200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
