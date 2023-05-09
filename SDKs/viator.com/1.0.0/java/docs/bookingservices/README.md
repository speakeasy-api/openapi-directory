# bookingServices

## Overview

Booking services

### Available Operations

* [bookingAvailability](#bookingavailability) - /booking/availability
* [bookingAvailabilityDates](#bookingavailabilitydates) - /booking/availability/dates
* [bookingAvailabilityTourgrades](#bookingavailabilitytourgrades) - /booking/availability/tourgrades
* [bookingAvailabilityTourgradesPricingmatrix](#bookingavailabilitytourgradespricingmatrix) - /booking/availability/tourgrades/pricingmatrix
* [bookingBook](#bookingbook) - /booking/book
* [bookingCalculateprice](#bookingcalculateprice) - /booking/calculateprice
* [bookingHotels](#bookinghotels) - /booking/hotels
* [bookingMybookings](#bookingmybookings) - /booking/mybookings
* [bookingPastbooking](#bookingpastbooking) - /booking/pastbooking
* [bookingPricingmatrix](#bookingpricingmatrix) - /booking/pricingmatrix
* [bookingStatus](#bookingstatus) - /booking/status
* [bookingStatusItems](#bookingstatusitems) - /booking/status/items
* [bookingVoucher](#bookingvoucher) - /booking/voucher
* [cancelBooking](#cancelbooking) - /bookings/{booking-reference}/cancel
* [cancelBookingQuote](#cancelbookingquote) - /bookings/{booking-reference}/cancel-quote
* [cancellationReasons](#cancellationreasons) - /bookings/cancel-reasons

## bookingAvailability

Get the tour-grade with the lowest price that is available for a product on each day of the specified month

This service:
- returns 
- useful when displaying a calendar of available tours
- For more information, see: [Availability services](#section/Key-concepts/Availability-services)
- **Notes:** 
  - [/booking/availability/dates](#operation/bookingAvailabilityDates) provides all availability in one call and is more suitable for calendars, etc.

  - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BookingAvailabilityRequest;
import org.openapis.openapi.models.operations.BookingAvailabilityRequestBody;
import org.openapis.openapi.models.operations.BookingAvailabilityRequestBodyAgeBands;
import org.openapis.openapi.models.operations.BookingAvailabilityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BookingAvailabilityRequest req = new BookingAvailabilityRequest("en-US") {{
                requestBody = new BookingAvailabilityRequestBody() {{
                    ageBands = new org.openapis.openapi.models.operations.BookingAvailabilityRequestBodyAgeBands[]{{
                        add(new BookingAvailabilityRequestBodyAgeBands() {{
                            bandId = 437587L;
                            count = 297534L;
                        }}),
                        add(new BookingAvailabilityRequestBodyAgeBands() {{
                            bandId = 891773L;
                            count = 56713L;
                        }}),
                    }};
                    currencyCode = "delectus";
                    month = "tempora";
                    productCode = "suscipit";
                    year = "molestiae";
                }};;
            }};            

            BookingAvailabilityResponse res = sdk.bookingServices.bookingAvailability(req);

            if (res.bookingAvailability200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bookingAvailabilityDates

Get dates on which a product is available

This service:
- retrieves all available dates for a product, excluding days it does not operate and blocked-out dates
- returns a multi-dimensional array of year-month -&gt; days that have any availabile tour grade or traveler mix
- useful to present the user with a list of dates for selection on which *this* product is available for booking
- **Notes**: 

  - The user's desired traveler mix may not be eligible for booking; these details can be displayed when you retrieve its list of tour grades
  - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BookingAvailabilityDatesRequest;
import org.openapis.openapi.models.operations.BookingAvailabilityDatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BookingAvailabilityDatesRequest req = new BookingAvailabilityDatesRequest("en-US") {{
                productCode = "minus";
            }};            

            BookingAvailabilityDatesResponse res = sdk.bookingServices.bookingAvailabilityDates(req);

            if (res.bookingAvailabilityDates200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bookingAvailabilityTourgrades

Get the tour grades of a product that are currently available

This service reports:
- all tour grades for the specified product, on the specified day, that are available for the specified age bands
- the pricing breakdown and the total depending on the travel date and traveler mix

**Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BookingAvailabilityTourgradesRequest;
import org.openapis.openapi.models.operations.BookingAvailabilityTourgradesRequestBody;
import org.openapis.openapi.models.operations.BookingAvailabilityTourgradesRequestBodyAgeBands;
import org.openapis.openapi.models.operations.BookingAvailabilityTourgradesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BookingAvailabilityTourgradesRequest req = new BookingAvailabilityTourgradesRequest("en-US") {{
                requestBody = new BookingAvailabilityTourgradesRequestBody() {{
                    ageBands = new org.openapis.openapi.models.operations.BookingAvailabilityTourgradesRequestBodyAgeBands[]{{
                        add(new BookingAvailabilityTourgradesRequestBodyAgeBands() {{
                            bandId = 528895L;
                            count = 479977L;
                        }}),
                        add(new BookingAvailabilityTourgradesRequestBodyAgeBands() {{
                            bandId = 568045L;
                            count = 392785L;
                        }}),
                        add(new BookingAvailabilityTourgradesRequestBodyAgeBands() {{
                            bandId = 925597L;
                            count = 836079L;
                        }}),
                        add(new BookingAvailabilityTourgradesRequestBodyAgeBands() {{
                            bandId = 71036L;
                            count = 337396L;
                        }}),
                    }};
                    bookingDate = "veritatis";
                    currencyCode = "deserunt";
                    productCode = "perferendis";
                }};;
            }};            

            BookingAvailabilityTourgradesResponse res = sdk.bookingServices.bookingAvailabilityTourgrades(req);

            if (res.bookingAvailabilityTourgrades200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bookingAvailabilityTourgradesPricingmatrix

Get a pricing matrix that includes availability and tour-grades for a product

Given a month, this service returns days with available tour grades only (i.e., days which have at least one tourgrade available), and the pricing matrix for that tour grade for that day.

- **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BookingAvailabilityTourgradesPricingmatrixRequest;
import org.openapis.openapi.models.operations.BookingAvailabilityTourgradesPricingmatrixRequestBody;
import org.openapis.openapi.models.operations.BookingAvailabilityTourgradesPricingmatrixResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BookingAvailabilityTourgradesPricingmatrixRequest req = new BookingAvailabilityTourgradesPricingmatrixRequest("en-US") {{
                requestBody = new BookingAvailabilityTourgradesPricingmatrixRequestBody() {{
                    currencyCode = "ipsam";
                    month = "repellendus";
                    productCode = "sapiente";
                    year = "quo";
                }};;
            }};            

            BookingAvailabilityTourgradesPricingmatrixResponse res = sdk.bookingServices.bookingAvailabilityTourgradesPricingmatrix(req);

            if (res.bookingAvailabilityTourgradesPricingmatrix200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bookingBook

Make a booking

For more information, see: 

  - [Cancellation policy](#section/Key-concepts/Cancellation-policy)
  - [Booking concepts](#section/Key-concepts/Booking-concepts)
  - [Booking process flow](#section/Common-workflows-and-data-validation/Booking-process-flow)
  - [Making a booking](#section/Common-workflows-and-data-validation/Making-a-booking)
  - [Supplier communications](#section/Key-concepts/Supplier-communications)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BookingBookRequest;
import org.openapis.openapi.models.operations.BookingBookRequestBody;
import org.openapis.openapi.models.operations.BookingBookRequestBodyBooker;
import org.openapis.openapi.models.operations.BookingBookRequestBodyItems;
import org.openapis.openapi.models.operations.BookingBookRequestBodyItemsBookingQuestionAnswers;
import org.openapis.openapi.models.operations.BookingBookRequestBodyItemsPartnerItemDetail;
import org.openapis.openapi.models.operations.BookingBookRequestBodyItemsTravellers;
import org.openapis.openapi.models.operations.BookingBookRequestBodyPartnerDetail;
import org.openapis.openapi.models.operations.BookingBookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BookingBookRequest req = new BookingBookRequest("en-US") {{
                requestBody = new BookingBookRequestBody() {{
                    booker = new BookingBookRequestBodyBooker("odit", "at") {{
                        cellPhone = "at";
                        cellPhoneCountryCode = "maiores";
                        email = "Pinkie_Schmidt@yahoo.com";
                        homePhone = "porro";
                        title = "Miss";
                    }};;
                    currencyCode = "dicta";
                    demo = false;
                    items = new org.openapis.openapi.models.operations.BookingBookRequestBodyItems[]{{
                        add(new BookingBookRequestBodyItems() {{
                            bookingQuestionAnswers = new org.openapis.openapi.models.operations.BookingBookRequestBodyItemsBookingQuestionAnswers[]{{
                                add(new BookingBookRequestBodyItemsBookingQuestionAnswers() {{
                                    answer = "occaecati";
                                    questionId = 143353L;
                                }}),
                                add(new BookingBookRequestBodyItemsBookingQuestionAnswers() {{
                                    answer = "deleniti";
                                    questionId = 944669L;
                                }}),
                                add(new BookingBookRequestBodyItemsBookingQuestionAnswers() {{
                                    answer = "optio";
                                    questionId = 521848L;
                                }}),
                            }};
                            hotelId = "beatae";
                            languageOptionCode = "commodi";
                            partnerItemDetail = new BookingBookRequestBodyItemsPartnerItemDetail() {{
                                distributorItemRef = "molestiae";
                            }};
                            pickupPoint = "modi";
                            productCode = "qui";
                            specialRequirements = "impedit";
                            tourGradeCode = "cum";
                            travelDate = "esse";
                            travellers = new org.openapis.openapi.models.operations.BookingBookRequestBodyItemsTravellers[]{{
                                add(new BookingBookRequestBodyItemsTravellers() {{
                                    bandId = 568434L;
                                    firstname = "Brianne";
                                    leadTraveller = false;
                                    surname = "perferendis";
                                    title = "Mrs.";
                                }}),
                            }};
                        }}),
                        add(new BookingBookRequestBodyItems() {{
                            bookingQuestionAnswers = new org.openapis.openapi.models.operations.BookingBookRequestBodyItemsBookingQuestionAnswers[]{{
                                add(new BookingBookRequestBodyItemsBookingQuestionAnswers() {{
                                    answer = "sed";
                                    questionId = 612096L;
                                }}),
                                add(new BookingBookRequestBodyItemsBookingQuestionAnswers() {{
                                    answer = "dolor";
                                    questionId = 616934L;
                                }}),
                                add(new BookingBookRequestBodyItemsBookingQuestionAnswers() {{
                                    answer = "laboriosam";
                                    questionId = 943749L;
                                }}),
                            }};
                            hotelId = "saepe";
                            languageOptionCode = "fuga";
                            partnerItemDetail = new BookingBookRequestBodyItemsPartnerItemDetail() {{
                                distributorItemRef = "in";
                            }};
                            pickupPoint = "corporis";
                            productCode = "iste";
                            specialRequirements = "iure";
                            tourGradeCode = "saepe";
                            travelDate = "quidem";
                            travellers = new org.openapis.openapi.models.operations.BookingBookRequestBodyItemsTravellers[]{{
                                add(new BookingBookRequestBodyItemsTravellers() {{
                                    bandId = 60225L;
                                    firstname = "Waino";
                                    leadTraveller = false;
                                    surname = "est";
                                    title = "Miss";
                                }}),
                            }};
                        }}),
                        add(new BookingBookRequestBodyItems() {{
                            bookingQuestionAnswers = new org.openapis.openapi.models.operations.BookingBookRequestBodyItemsBookingQuestionAnswers[]{{
                                add(new BookingBookRequestBodyItemsBookingQuestionAnswers() {{
                                    answer = "dolores";
                                    questionId = 210382L;
                                }}),
                                add(new BookingBookRequestBodyItemsBookingQuestionAnswers() {{
                                    answer = "corporis";
                                    questionId = 128926L;
                                }}),
                                add(new BookingBookRequestBodyItemsBookingQuestionAnswers() {{
                                    answer = "nobis";
                                    questionId = 315428L;
                                }}),
                            }};
                            hotelId = "omnis";
                            languageOptionCode = "nemo";
                            partnerItemDetail = new BookingBookRequestBodyItemsPartnerItemDetail() {{
                                distributorItemRef = "minima";
                            }};
                            pickupPoint = "excepturi";
                            productCode = "accusantium";
                            specialRequirements = "iure";
                            tourGradeCode = "culpa";
                            travelDate = "doloribus";
                            travellers = new org.openapis.openapi.models.operations.BookingBookRequestBodyItemsTravellers[]{{
                                add(new BookingBookRequestBodyItemsTravellers() {{
                                    bandId = 102044L;
                                    firstname = "Macy";
                                    leadTraveller = false;
                                    surname = "dolorem";
                                    title = "Miss";
                                }}),
                                add(new BookingBookRequestBodyItemsTravellers() {{
                                    bandId = 161309L;
                                    firstname = "Zechariah";
                                    leadTraveller = false;
                                    surname = "mollitia";
                                    title = "Ms.";
                                }}),
                                add(new BookingBookRequestBodyItemsTravellers() {{
                                    bandId = 253291L;
                                    firstname = "Harvey";
                                    leadTraveller = false;
                                    surname = "quam";
                                    title = "Ms.";
                                }}),
                                add(new BookingBookRequestBodyItemsTravellers() {{
                                    bandId = 244425L;
                                    firstname = "Linda";
                                    leadTraveller = false;
                                    surname = "quia";
                                    title = "Mrs.";
                                }}),
                            }};
                        }}),
                    }};
                    partnerDetail = new BookingBookRequestBodyPartnerDetail() {{
                        distributorRef = "vitae";
                    }};;
                }};;
            }};            

            BookingBookResponse res = sdk.bookingServices.bookingBook(req);

            if (res.bookingBook200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bookingCalculateprice

Confirm the price of a tour / activity prior to booking

For more information, see: [Calculating prices](#section/Common-workflows-and-data-validation/Calculating-prices)  

- **Note**: Availability and pricing data is limited to a period of **six months** into the future from the present time


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BookingCalculatepriceRequest;
import org.openapis.openapi.models.operations.BookingCalculatepriceRequestBody;
import org.openapis.openapi.models.operations.BookingCalculatepriceRequestBodyItems;
import org.openapis.openapi.models.operations.BookingCalculatepriceRequestBodyItemsTravellers;
import org.openapis.openapi.models.operations.BookingCalculatepriceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BookingCalculatepriceRequest req = new BookingCalculatepriceRequest("en-US") {{
                requestBody = new BookingCalculatepriceRequestBody() {{
                    currencyCode = "laborum";
                    items = new org.openapis.openapi.models.operations.BookingCalculatepriceRequestBodyItems[]{{
                        add(new BookingCalculatepriceRequestBodyItems() {{
                            productCode = "enim";
                            tourGradeCode = "odit";
                            travelDate = "quo";
                            travellers = new org.openapis.openapi.models.operations.BookingCalculatepriceRequestBodyItemsTravellers[]{{
                                add(new BookingCalculatepriceRequestBodyItemsTravellers() {{
                                    bandId = 949572L;
                                }}),
                            }};
                        }}),
                        add(new BookingCalculatepriceRequestBodyItems() {{
                            productCode = "ipsam";
                            tourGradeCode = "id";
                            travelDate = "possimus";
                            travellers = new org.openapis.openapi.models.operations.BookingCalculatepriceRequestBodyItemsTravellers[]{{
                                add(new BookingCalculatepriceRequestBodyItemsTravellers() {{
                                    bandId = 97101L;
                                }}),
                            }};
                        }}),
                        add(new BookingCalculatepriceRequestBodyItems() {{
                            productCode = "error";
                            tourGradeCode = "temporibus";
                            travelDate = "laborum";
                            travellers = new org.openapis.openapi.models.operations.BookingCalculatepriceRequestBodyItemsTravellers[]{{
                                add(new BookingCalculatepriceRequestBodyItemsTravellers() {{
                                    bandId = 971945L;
                                }}),
                            }};
                        }}),
                    }};
                }};;
            }};            

            BookingCalculatepriceResponse res = sdk.bookingServices.bookingCalculateprice(req);

            if (res.bookingCalculateprice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bookingHotels

Get hotel pick-ups
Lists the hotel pickups available for either a product or a destination


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BookingHotelsRequest;
import org.openapis.openapi.models.operations.BookingHotelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BookingHotelsRequest req = new BookingHotelsRequest("en-US") {{
                destId = 976460L;
                productCode = "vero";
            }};            

            BookingHotelsResponse res = sdk.bookingServices.bookingHotels(req);

            if (res.bookingHotels200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bookingMybookings

Get a user's bookings with travel dates in the future. 

This service can also be used to check the status of a booking. 

**Provide either:** 
- A `voucherKey`, **or...** 
- An email address (`email`) and a booking reference (`itineraryOrItemId`) ([Booking Reference](#section/Key-concepts/Booking-references))


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BookingMybookingsRequest;
import org.openapis.openapi.models.operations.BookingMybookingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BookingMybookingsRequest req = new BookingMybookingsRequest("en-US") {{
                email = "John60@yahoo.com";
                itineraryOrItemId = "voluptate";
                voucherKey = "cum";
            }};            

            BookingMybookingsResponse res = sdk.bookingServices.bookingMybookings(req);

            if (res.bookingMybookings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bookingPastbooking

Get the details of a single specific past booking based on the `voucherKey` or `itemId` and email address sent in the request.

**Note**: this service will only return past bookings that were made with the same API key that was used to make the booking

**Sample query parameters**:
- email=apitest@viator.com&amp;itemId=580669678

**or**
- voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678

**email**
- The email address passed must match the email address associated with the booking

**Departure details**

- Departure details such as the `departurePoint`, `departurePointAddress` and `departurePointDirections` is included in the response. 
- These fields may contain HTML escape characters such as &amp;amp; and special characters that are escaped by a backslash. Ensure that these fields are parsed after receiving the response as it will cause your JSON to be invalid.

For more information, see: [Reviewing bookings](#section/Common-workflows-and-data-validation/Reviewing-bookings)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BookingPastbookingRequest;
import org.openapis.openapi.models.operations.BookingPastbookingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BookingPastbookingRequest req = new BookingPastbookingRequest("en-US") {{
                email = "Alison97@gmail.com";
                itemId = "dicta";
                voucherKey = "corporis";
            }};            

            BookingPastbookingResponse res = sdk.bookingServices.bookingPastbooking(req);

            if (res.bookingPastbooking200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bookingPricingmatrix

Get the pricing matrix for tour-grades, product age bands and pax mixes

For more information, see: [Get the tour-grade pricing matrix](#section/Common-workflows-and-data-validation/Get-the-tour-grade-pricing-matrix)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BookingPricingmatrixRequest;
import org.openapis.openapi.models.operations.BookingPricingmatrixRequestBody;
import org.openapis.openapi.models.operations.BookingPricingmatrixResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BookingPricingmatrixRequest req = new BookingPricingmatrixRequest("en-US") {{
                requestBody = new BookingPricingmatrixRequestBody() {{
                    bookingDate = "dolore";
                    currencyCode = "iusto";
                    productCode = "dicta";
                    tourGradeCode = "harum";
                }};;
            }};            

            BookingPricingmatrixResponse res = sdk.bookingServices.bookingPricingmatrix(req);

            if (res.bookingPricingmatrix200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bookingStatus

Get the booking status for multiple items based on different criteria

This service: 
- is ideally be used in software for bulk updates of pending bookings
- returns a maximum of 1000 bookings (narrow your search if you expect a greater number of results)
- will return &lt;u&gt;both&lt;/u&gt; live &lt;u&gt;and&lt;/u&gt; test bookings
- rate limited to &lt;u&gt;one request every 30 minutes&lt;/u&gt;
- For more information, see: [Get the bookiing status for multiple items](#section/Common-workflows-and-data-validation/Get-the-booking-status-for-multiple-items)

**Exceeding the rate limit**
- You will receive the following error message if you exceed the rate limit allowed for this service. Set `test` to `true` to bypass this limit:
```javascript
{
    "data": null
    "vmid": 221002
    "errorMessage": ["Access allowed every 30 minutes"]
    "errorType": "EXCEPTION"
    "dateStamp": "2013-03-26T10:28:51+0000"
    "errorReference": 55315512721712161381352771
    "errorMessageText": ["Access allowed every 30 minutes"]
    "success": false
    "totalCount": 1
    "errorName": "PollingDeniedException"  
}
```


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BookingStatusRequest;
import org.openapis.openapi.models.operations.BookingStatusRequestBody;
import org.openapis.openapi.models.operations.BookingStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BookingStatusRequest req = new BookingStatusRequest("en-US") {{
                requestBody = new BookingStatusRequestBody() {{
                    bookingDateFrom = "enim";
                    bookingDateTo = "accusamus";
                    distributorItemRefs = new String[]{{
                        add("repudiandae"),
                        add("quae"),
                    }};
                    distributorRefs = new String[]{{
                        add("quidem"),
                    }};
                    itemIds = new Long[]{{
                        add(566602L),
                        add(865103L),
                        add(265389L),
                    }};
                    leadFirstName = "praesentium";
                    leadSurname = "rem";
                    test = false;
                }};;
            }};            

            BookingStatusResponse res = sdk.bookingServices.bookingStatus(req);

            if (res.bookingStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bookingStatusItems

Get brief booking statuses

This service is similar to [/booking/status](#operation/bookingStatus) in that it:
- retrieves the booking status for multiple items based on different criteria
- has the same request parameters as [/booking/status](#operation/bookingStatus)

However, it differs in that it returns a multi-item array of booking items with less detail than what would be received from [/booking/status](#operation/bookingStatus).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BookingStatusItemsRequest;
import org.openapis.openapi.models.operations.BookingStatusItemsRequestBody;
import org.openapis.openapi.models.operations.BookingStatusItemsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BookingStatusItemsRequest req = new BookingStatusItemsRequest("en-US") {{
                requestBody = new BookingStatusItemsRequestBody() {{
                    bookingDateFrom = "voluptates";
                    bookingDateTo = "quasi";
                    distributorItemRefs = new String[]{{
                        add("sint"),
                        add("veritatis"),
                        add("itaque"),
                        add("incidunt"),
                    }};
                    distributorRefs = new String[]{{
                        add("consequatur"),
                        add("est"),
                    }};
                    itemIds = new Long[]{{
                        add(131797L),
                        add(647174L),
                        add(716327L),
                        add(841386L),
                    }};
                    leadFirstName = "labore";
                    leadSurname = "modi";
                    test = false;
                }};;
            }};            

            BookingStatusItemsResponse res = sdk.bookingServices.bookingStatusItems(req);

            if (res.bookingStatusItems200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bookingVoucher

Get voucher details
- Use this service to retrieve the voucher details of a booked item.
- The data returned is HTML-formatted and can be wrapped in a header and/or footer.

**Sample query parameters**
- leadLastName=Simpson test&amp;itemId=580669678

**or** 
- voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;fullHTML=true&amp;mobileVoucher=true


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BookingVoucherRequest;
import org.openapis.openapi.models.operations.BookingVoucherResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BookingVoucherRequest req = new BookingVoucherRequest("en-US") {{
                embeddedResources = false;
                fullHTML = false;
                itemId = 183191L;
                leadLastName = "aliquid";
                mobileVoucher = false;
                voucherKey = "3299307:93c7f36a56b18ba1068787ba7fb7988da5c8ad08db77604110141ff21498603e:600033670";
            }};            

            BookingVoucherResponse res = sdk.bookingServices.bookingVoucher(req);

            if (res.bookingVoucher200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelBooking

Submits a cancellation request for the specified booking

For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)

**Note**: 

  * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
  * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel`


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelBookingRequest;
import org.openapis.openapi.models.operations.CancelBookingResponse;
import org.openapis.openapi.models.shared.CancellationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelBookingRequest req = new CancelBookingRequest("en-US", "cupiditate") {{
                cancellationRequest = new CancellationRequest() {{
                    reasonCode = "Customer_Service.I_canceled_my_entire_trip";
                }};;
            }};            

            CancelBookingResponse res = sdk.bookingServices.cancelBooking(req);

            if (res.cancelBookingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelBookingQuote

Retrieves a quote for the cancellation of a booking

For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)

**Note**: 

  * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
  * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel-quote`


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelBookingQuoteRequest;
import org.openapis.openapi.models.operations.CancelBookingQuoteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelBookingQuoteRequest req = new CancelBookingQuoteRequest("quos");            

            CancelBookingQuoteResponse res = sdk.bookingServices.cancelBookingQuote(req);

            if (res.cancelBookingQuoteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancellationReasons

Retrieves a dictionary of unique identification codes (`cancellationReasonCode`) and their associated natural-language descriptions (`cancellationReasonText`).

For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)

**Note**: 

  * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
  * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/cancel-reasons`


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancellationReasonsRequest;
import org.openapis.openapi.models.operations.CancellationReasonsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancellationReasonsRequest req = new CancellationReasonsRequest("en-US");            

            CancellationReasonsResponse res = sdk.bookingServices.cancellationReasons(req);

            if (res.cancellationReasonsResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
