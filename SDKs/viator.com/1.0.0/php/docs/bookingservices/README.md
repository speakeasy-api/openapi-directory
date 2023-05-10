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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BookingAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Operations\BookingAvailabilityRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\BookingAvailabilityRequestBodyAgeBands;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookingAvailabilityRequest();
    $request->acceptLanguage = 'en-US';
    $request->requestBody = new BookingAvailabilityRequestBody();
    $request->requestBody->ageBands = [
        new BookingAvailabilityRequestBodyAgeBands(),
        new BookingAvailabilityRequestBodyAgeBands(),
        new BookingAvailabilityRequestBodyAgeBands(),
        new BookingAvailabilityRequestBodyAgeBands(),
    ];
    $request->requestBody->currencyCode = 'corrupti';
    $request->requestBody->month = 'illum';
    $request->requestBody->productCode = 'vel';
    $request->requestBody->year = 'error';

    $response = $sdk->bookingServices->bookingAvailability($request);

    if ($response->bookingAvailability200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BookingAvailabilityDatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookingAvailabilityDatesRequest();
    $request->acceptLanguage = 'en-US';
    $request->productCode = 'deserunt';

    $response = $sdk->bookingServices->bookingAvailabilityDates($request);

    if ($response->bookingAvailabilityDates200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bookingAvailabilityTourgrades

Get the tour grades of a product that are currently available

This service reports:
- all tour grades for the specified product, on the specified day, that are available for the specified age bands
- the pricing breakdown and the total depending on the travel date and traveler mix

**Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BookingAvailabilityTourgradesRequest;
use \OpenAPI\OpenAPI\Models\Operations\BookingAvailabilityTourgradesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\BookingAvailabilityTourgradesRequestBodyAgeBands;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookingAvailabilityTourgradesRequest();
    $request->acceptLanguage = 'en-US';
    $request->requestBody = new BookingAvailabilityTourgradesRequestBody();
    $request->requestBody->ageBands = [
        new BookingAvailabilityTourgradesRequestBodyAgeBands(),
        new BookingAvailabilityTourgradesRequestBodyAgeBands(),
    ];
    $request->requestBody->bookingDate = 'iure';
    $request->requestBody->currencyCode = 'magnam';
    $request->requestBody->productCode = 'debitis';

    $response = $sdk->bookingServices->bookingAvailabilityTourgrades($request);

    if ($response->bookingAvailabilityTourgrades200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bookingAvailabilityTourgradesPricingmatrix

Get a pricing matrix that includes availability and tour-grades for a product

Given a month, this service returns days with available tour grades only (i.e., days which have at least one tourgrade available), and the pricing matrix for that tour grade for that day.

- **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BookingAvailabilityTourgradesPricingmatrixRequest;
use \OpenAPI\OpenAPI\Models\Operations\BookingAvailabilityTourgradesPricingmatrixRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookingAvailabilityTourgradesPricingmatrixRequest();
    $request->acceptLanguage = 'en-US';
    $request->requestBody = new BookingAvailabilityTourgradesPricingmatrixRequestBody();
    $request->requestBody->currencyCode = 'ipsa';
    $request->requestBody->month = 'delectus';
    $request->requestBody->productCode = 'tempora';
    $request->requestBody->year = 'suscipit';

    $response = $sdk->bookingServices->bookingAvailabilityTourgradesPricingmatrix($request);

    if ($response->bookingAvailabilityTourgradesPricingmatrix200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BookingBookRequest;
use \OpenAPI\OpenAPI\Models\Operations\BookingBookRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\BookingBookRequestBodyBooker;
use \OpenAPI\OpenAPI\Models\Operations\BookingBookRequestBodyItems;
use \OpenAPI\OpenAPI\Models\Operations\BookingBookRequestBodyItemsBookingQuestionAnswers;
use \OpenAPI\OpenAPI\Models\Operations\BookingBookRequestBodyItemsPartnerItemDetail;
use \OpenAPI\OpenAPI\Models\Operations\BookingBookRequestBodyItemsTravellers;
use \OpenAPI\OpenAPI\Models\Operations\BookingBookRequestBodyPartnerDetail;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookingBookRequest();
    $request->acceptLanguage = 'en-US';
    $request->requestBody = new BookingBookRequestBody();
    $request->requestBody->booker = new BookingBookRequestBodyBooker();
    $request->requestBody->booker->cellPhone = 'molestiae';
    $request->requestBody->booker->cellPhoneCountryCode = 'minus';
    $request->requestBody->booker->email = 'Junior.Kshlerin@hotmail.com';
    $request->requestBody->booker->firstname = 'recusandae';
    $request->requestBody->booker->homePhone = 'temporibus';
    $request->requestBody->booker->surname = 'ab';
    $request->requestBody->booker->title = 'Mrs.';
    $request->requestBody->currencyCode = 'veritatis';
    $request->requestBody->demo = false;
    $request->requestBody->items = [
        new BookingBookRequestBodyItems(),
        new BookingBookRequestBodyItems(),
        new BookingBookRequestBodyItems(),
    ];
    $request->requestBody->partnerDetail = new BookingBookRequestBodyPartnerDetail();
    $request->requestBody->partnerDetail->distributorRef = 'perferendis';

    $response = $sdk->bookingServices->bookingBook($request);

    if ($response->bookingBook200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bookingCalculateprice

Confirm the price of a tour / activity prior to booking

For more information, see: [Calculating prices](#section/Common-workflows-and-data-validation/Calculating-prices)  

- **Note**: Availability and pricing data is limited to a period of **six months** into the future from the present time


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BookingCalculatepriceRequest;
use \OpenAPI\OpenAPI\Models\Operations\BookingCalculatepriceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\BookingCalculatepriceRequestBodyItems;
use \OpenAPI\OpenAPI\Models\Operations\BookingCalculatepriceRequestBodyItemsTravellers;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookingCalculatepriceRequest();
    $request->acceptLanguage = 'en-US';
    $request->requestBody = new BookingCalculatepriceRequestBody();
    $request->requestBody->currencyCode = 'ipsam';
    $request->requestBody->items = [
        new BookingCalculatepriceRequestBodyItems(),
        new BookingCalculatepriceRequestBodyItems(),
        new BookingCalculatepriceRequestBodyItems(),
        new BookingCalculatepriceRequestBodyItems(),
    ];

    $response = $sdk->bookingServices->bookingCalculateprice($request);

    if ($response->bookingCalculateprice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bookingHotels

Get hotel pick-ups
Lists the hotel pickups available for either a product or a destination


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BookingHotelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookingHotelsRequest();
    $request->acceptLanguage = 'en-US';
    $request->destId = 957156;
    $request->productCode = 'quo';

    $response = $sdk->bookingServices->bookingHotels($request);

    if ($response->bookingHotels200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bookingMybookings

Get a user's bookings with travel dates in the future. 

This service can also be used to check the status of a booking. 

**Provide either:** 
- A `voucherKey`, **or...** 
- An email address (`email`) and a booking reference (`itineraryOrItemId`) ([Booking Reference](#section/Key-concepts/Booking-references))


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BookingMybookingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookingMybookingsRequest();
    $request->acceptLanguage = 'en-US';
    $request->email = 'Sarah.Strosin79@gmail.com';
    $request->itineraryOrItemId = 'quod';
    $request->voucherKey = 'esse';

    $response = $sdk->bookingServices->bookingMybookings($request);

    if ($response->bookingMybookings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BookingPastbookingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookingPastbookingRequest();
    $request->acceptLanguage = 'en-US';
    $request->email = 'Osborne72@yahoo.com';
    $request->itemId = 'officia';
    $request->voucherKey = 'occaecati';

    $response = $sdk->bookingServices->bookingPastbooking($request);

    if ($response->bookingPastbooking200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bookingPricingmatrix

Get the pricing matrix for tour-grades, product age bands and pax mixes

For more information, see: [Get the tour-grade pricing matrix](#section/Common-workflows-and-data-validation/Get-the-tour-grade-pricing-matrix)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BookingPricingmatrixRequest;
use \OpenAPI\OpenAPI\Models\Operations\BookingPricingmatrixRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookingPricingmatrixRequest();
    $request->acceptLanguage = 'en-US';
    $request->requestBody = new BookingPricingmatrixRequestBody();
    $request->requestBody->bookingDate = 'fugit';
    $request->requestBody->currencyCode = 'deleniti';
    $request->requestBody->productCode = 'hic';
    $request->requestBody->tourGradeCode = 'optio';

    $response = $sdk->bookingServices->bookingPricingmatrix($request);

    if ($response->bookingPricingmatrix200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BookingStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\BookingStatusRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookingStatusRequest();
    $request->acceptLanguage = 'en-US';
    $request->requestBody = new BookingStatusRequestBody();
    $request->requestBody->bookingDateFrom = 'totam';
    $request->requestBody->bookingDateTo = 'beatae';
    $request->requestBody->distributorItemRefs = [
        'molestiae',
        'modi',
    ];
    $request->requestBody->distributorRefs = [
        'impedit',
    ];
    $request->requestBody->itemIds = [
        456150,
        216550,
        568434,
    ];
    $request->requestBody->leadFirstName = 'aspernatur';
    $request->requestBody->leadSurname = 'perferendis';
    $request->requestBody->test = false;

    $response = $sdk->bookingServices->bookingStatus($request);

    if ($response->bookingStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bookingStatusItems

Get brief booking statuses

This service is similar to [/booking/status](#operation/bookingStatus) in that it:
- retrieves the booking status for multiple items based on different criteria
- has the same request parameters as [/booking/status](#operation/bookingStatus)

However, it differs in that it returns a multi-item array of booking items with less detail than what would be received from [/booking/status](#operation/bookingStatus).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BookingStatusItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BookingStatusItemsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookingStatusItemsRequest();
    $request->acceptLanguage = 'en-US';
    $request->requestBody = new BookingStatusItemsRequestBody();
    $request->requestBody->bookingDateFrom = 'ad';
    $request->requestBody->bookingDateTo = 'natus';
    $request->requestBody->distributorItemRefs = [
        'iste',
    ];
    $request->requestBody->distributorRefs = [
        'natus',
    ];
    $request->requestBody->itemIds = [
        943749,
        902599,
    ];
    $request->requestBody->leadFirstName = 'fuga';
    $request->requestBody->leadSurname = 'in';
    $request->requestBody->test = false;

    $response = $sdk->bookingServices->bookingStatusItems($request);

    if ($response->bookingStatusItems200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BookingVoucherRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookingVoucherRequest();
    $request->acceptLanguage = 'en-US';
    $request->embeddedResources = false;
    $request->fullHTML = false;
    $request->itemId = 359508;
    $request->leadLastName = 'iste';
    $request->mobileVoucher = false;
    $request->voucherKey = '3299307:93c7f36a56b18ba1068787ba7fb7988da5c8ad08db77604110141ff21498603e:600033670';

    $response = $sdk->bookingServices->bookingVoucher($request);

    if ($response->bookingVoucher200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelBooking

Submits a cancellation request for the specified booking

For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)

**Note**: 

  * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
  * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel`


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelBookingRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancellationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelBookingRequest();
    $request->acceptLanguage = 'en-US';
    $request->cancellationRequest = new CancellationRequest();
    $request->cancellationRequest->reasonCode = 'Customer_Service.I_canceled_my_entire_trip';
    $request->bookingReference = 'iure';

    $response = $sdk->bookingServices->cancelBooking($request);

    if ($response->cancelBookingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelBookingQuote

Retrieves a quote for the cancellation of a booking

For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)

**Note**: 

  * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
  * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel-quote`


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelBookingQuoteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelBookingQuoteRequest();
    $request->bookingReference = 'saepe';

    $response = $sdk->bookingServices->cancelBookingQuote($request);

    if ($response->cancelBookingQuoteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancellationReasons

Retrieves a dictionary of unique identification codes (`cancellationReasonCode`) and their associated natural-language descriptions (`cancellationReasonText`).

For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)

**Note**: 

  * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
  * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/cancel-reasons`


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancellationReasonsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancellationReasonsRequest();
    $request->acceptLanguage = 'en-US';

    $response = $sdk->bookingServices->cancellationReasons($request);

    if ($response->cancellationReasonsResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
