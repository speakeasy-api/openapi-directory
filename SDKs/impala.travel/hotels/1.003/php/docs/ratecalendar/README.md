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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRatePlanForHotelForRatePlanIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRatePlanForHotelForRatePlanIdRequest();
    $request->end = '2022-05-12';
    $request->hotelId = '251aa52c-3f5a-4d01-9da1-ffe78f097b00';
    $request->offset = 25;
    $request->ratePlanId = 441711;
    $request->roomTypeId = '6d3a255d-3b22-48a4-8076-3ae3d0ade3d7';
    $request->size = 40;
    $request->start = '2022-05-12';
    $request->updatedAt = [
        'maiores' => 'dicta',
        'corporis' => 'dolore',
    ];

    $response = $sdk->rateCalendar->listRatePlanForHotelForRatePlanId($request);

    if ($response->ratePlan !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRatePlansForHotelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRatePlansForHotelRequest();
    $request->end = '2022-05-12';
    $request->hotelId = '71b5e6e1-3b99-4d48-8e1e-91e450ad2abd';
    $request->offset = 25;
    $request->roomId = '6d3a255d-3b22-48a4-8076-3ae3d0ade3d7';
    $request->size = 40;
    $request->start = '2022-05-12';
    $request->updatedAt = [
        'modi' => 'qui',
        'aliquid' => 'cupiditate',
    ];

    $response = $sdk->rateCalendar->listRatePlansForHotel($request);

    if ($response->listRatePlansForHotel200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
