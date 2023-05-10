# bookings

## Overview

Making and managing bookings.

### Available Operations

* [cancelBooking](#cancelbooking) - Cancel a booking
* [createBooking](#createbooking) - Create a booking
* [listBookings](#listbookings) - List all bookings
* [retrieveBooking](#retrievebooking) - Retrieve a booking
* [updateBooking](#updatebooking) - Change a booking
* [updateBookingContact](#updatebookingcontact) - Change a booking contact

## cancelBooking

<!-- theme: danger -->

> Cancels the specified booking with immediate effect. This action might result in a cancellation charge being charged.

Submitting this request means we'll notify the hotel of the cancellation and that they won't expect your guest.

You can use `GET /bookings/{bookingId}`to see the cancellation policies that apply to a booking at a given point in time. Please note that cancelling a booking will incur a cancellation fee according to the rules that apply at the time of cancellation. You can find the cancellation fee that has been charged in the response of this call in the `cancellation.fee` object.

If the booking you cancelled allows for a partial or full refund, we'll credit your Impala balance with the amount we charged you as the seller of this booking – meaning we'll deduct the amount the next time we're requesting payment for the sum of all the bookings you made.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelBookingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelBookingRequest();
    $request->bookingId = 'provident';

    $response = $sdk->bookings->cancelBooking($request);

    if ($response->booking !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBooking

Creates a booking for for the rate and dates you specify in the request body.

You'll need a `roomTypes[].rates[].rateId` that's bookable for those dates, which you can find using the [Retrieve a hotel](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1hotels~1%7BhotelId%7D/get) endpoint.

If you have provided a credit card on the dashboard then **Impala will send the booking to the hotel immediately**. We'll ensure payment is taken care of before your guest arrives at the hotel.

* Your guest needs to be **paying you** the rate specified in `retailRate` (as listed in the [Retrieve a hotel](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1hotels~1%7BhotelId%7D/get) response) before you submit this request.
* Once your request is received and the booking is confirmed, **Impala will charge you** as the seller this `retailRate` minus the `sellerCommissionPercentage` (which is the affiliate commission you get to keep). We'll use the business credit card you've added to your account as payment method for this.
* The difference between the amount you charge your guest (`retailRate`, e.g. 200 €) and what Impala charges you (`retailRate` minus `sellerCommissionPercentage`, e.g. 200 €) is your commission (in this example: 20 €) to keep.

You can find more information on how money flows between your guest and you, and you and Impala, [in this article](https://impala.stoplight.io/docs/booking-api/branches/v1.003/docs/good-to-know/payments-and-commissions.md)

<!-- theme: warning -->

> **This request might take up to 20 seconds to load.** While we work to return a response to your request within milliseconds in most cases, some bookings require us to re-verify current pricing in real-time and doing so might take up to 20 seconds. Please make sure your app handles this waiting state appropriately.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BookingRequest;
use \OpenAPI\OpenAPI\Models\Shared\PersonInfo;
use \OpenAPI\OpenAPI\Models\Shared\NotesBooking;
use \OpenAPI\OpenAPI\Models\Shared\BookingRequestPaymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BookingRequestRooms;
use \OpenAPI\OpenAPI\Models\Shared\NotesBookedRoom;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookingRequest();
    $request->bookingContact = new PersonInfo();
    $request->bookingContact->email = 'jocelin.carreon.crespo@example.com';
    $request->bookingContact->firstName = 'Jocelín';
    $request->bookingContact->lastName = 'Carreón Sample';
    $request->end = DateTime::createFromFormat('Y-m-d', '2021-04-24');
    $request->notes = new NotesBooking();
    $request->notes->fromGuest = 'unde';
    $request->notes->fromSeller = 'nulla';
    $request->paymentType = BookingRequestPaymentTypeEnum::API;
    $request->rooms = [
        new BookingRequestRooms(),
        new BookingRequestRooms(),
        new BookingRequestRooms(),
    ];
    $request->start = DateTime::createFromFormat('Y-m-d', '2021-09-24');

    $response = $sdk->bookings->createBooking($request);

    if ($response->booking !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBookings

Returns a list of all the bookings you've made.

You can filter the list based on when bookings were created or last updated, as well as their arrival (`start`) and departure (`end`). These date-based filters allow to narrow down the result with modifiers for less than (`lt`), greater than (`gt`), lower than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`).

Example: Adding the query parameters `start[gt]=2021-05-20&updated[lte]=2020-11-20T11:11:00.000Z` would return bookings arriving after May 20th, 2020 that were updated before or on November 20th, 2020 at 11:11 am UTC.

You can specify the **sorting order** in which bookings are returned:
* This is done by using the `sortBy` query parameter.
* Results can be sorted by `createdAt` and `updatedAt`
* The parameter allows for a comma-separated list of arguments with `:asc` (ascending, the default if no sorting is specified) and `:desc` (descending) modifiers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBookingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBookingsRequest();
    $request->created = [
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->end = [
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
        'iusto' => 'excepturi',
    ];
    $request->offset = 3927.85;
    $request->size = 9255.97;
    $request->sortBy = 'createdAt:desc,updatedAt:asc';
    $request->start = [
        'ab' => 'quis',
        'veritatis' => 'deserunt',
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
    ];
    $request->updated = [
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
    ];

    $response = $sdk->bookings->listBookings($request);

    if ($response->listBookings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveBooking

Returns all details for the specified booking.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveBookingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveBookingRequest();
    $request->bookingId = 'totam';

    $response = $sdk->bookings->retrieveBooking($request);

    if ($response->booking !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBooking

<!-- theme: danger -->

> Updates the specified booking with immediate effect. This action might result in a cancellation charge being charged.

> Please note that if you wish to change the contact details associated with a booking, you should use the [Change a Booking's Contact Details](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1bookings~1%7BbookingId%7D~1booking-contact/put) endpoint.

Changes / updates a confirmed booking with the details you provide in the request body.

When your guest needs to change their booking, you can use this endpoint to change any of the details you initially supplied when you [made their booking](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1bookings/post), e.g. you'll need to query for availability and use the `roomTypes[].rates[].rateId` that are available currently for their new stay dates. Any new rates selected must be for the same hotel as the original booking.

A booking cannot be updated on or after the check in day of the original or new stay.

In addition, we require you do supply a `updateBookingVersionAtTimestamp` field with the `updatedAt` timestamp of the booking. You can find this value by looking up the booking via the [Retrieve a booking](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1bookings~1%7BbookingId%7D/get) endpoint. This is to avoid race conditions where another update might have happened since the last time you have checked for the current details of this booking.

The `status` of this booking will switch back to `PENDING` until we have submitted and confirmed the new details with the hotel.

<!-- theme: warning -->

> **This request might take up to 20 seconds to load.** While we work to return a response to your request within milliseconds in most cases, some bookings require us to re-verify current pricing in real-time and doing so might take up to 20 seconds. Please make sure your app handles this waiting state appropriately.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBookingRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBookingRequest;
use \OpenAPI\OpenAPI\Models\Shared\PersonInfo;
use \OpenAPI\OpenAPI\Models\Shared\NotesBooking;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBookingRequestPaymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBookingRequestRooms;
use \OpenAPI\OpenAPI\Models\Shared\NotesBookedRoom;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBookingRequest();
    $request->bookingId = 'porro';
    $request->updateBookingRequest = new UpdateBookingRequest();
    $request->updateBookingRequest->bookingContact = new PersonInfo();
    $request->updateBookingRequest->bookingContact->email = 'jocelin.carreon.crespo@example.com';
    $request->updateBookingRequest->bookingContact->firstName = 'Jocelín';
    $request->updateBookingRequest->bookingContact->lastName = 'Carreón Sample';
    $request->updateBookingRequest->end = DateTime::createFromFormat('Y-m-d', '2022-10-06');
    $request->updateBookingRequest->notes = new NotesBooking();
    $request->updateBookingRequest->notes->fromGuest = 'nam';
    $request->updateBookingRequest->notes->fromSeller = 'officia';
    $request->updateBookingRequest->paymentType = UpdateBookingRequestPaymentTypeEnum::API;
    $request->updateBookingRequest->rooms = [
        new UpdateBookingRequestRooms(),
        new UpdateBookingRequestRooms(),
        new UpdateBookingRequestRooms(),
    ];
    $request->updateBookingRequest->start = DateTime::createFromFormat('Y-m-d', '2022-06-18');
    $request->updateBookingRequest->updateBookingVersionAtTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-20T11:01:30.745Z');

    $response = $sdk->bookings->updateBooking($request);

    if ($response->booking !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBookingContact

Updates a confirmed booking with the booking contact details you provide in the request body.

In addition, we require you to supply a `updateBookingVersionAtTimestamp` field with the `updatedAt` timestamp of the booking. You can find this value by looking up the booking via the [Retrieve a booking](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1bookings~1%7BbookingId%7D/get) endpoint. This is to avoid race conditions where another update might have happened since the last time you have checked for the current details of this booking.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBookingContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBookingContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\PersonInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBookingContactRequest();
    $request->bookingId = 'hic';
    $request->updateBookingContactRequest = new UpdateBookingContactRequest();
    $request->updateBookingContactRequest->bookingContact = new PersonInfo();
    $request->updateBookingContactRequest->bookingContact->email = 'jocelin.carreon.crespo@example.com';
    $request->updateBookingContactRequest->bookingContact->firstName = 'Jocelín';
    $request->updateBookingContactRequest->bookingContact->lastName = 'Carreón Sample';
    $request->updateBookingContactRequest->updateBookingVersionAtTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-20T11:01:30.745Z');

    $response = $sdk->bookings->updateBookingContact($request);

    if ($response->booking !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
