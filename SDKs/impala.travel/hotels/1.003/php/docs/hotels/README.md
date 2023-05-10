# hotels

## Overview

Accessing hotel content, available rooms and rates.

### Available Operations

* [listHotels](#listhotels) - List all hotels
* [retrieveHotel](#retrievehotel) - Retrieve a hotel

## listHotels

Returns a list of all hotels worldwide that can be booked through Impala.

You can **filter** the results:

* Adding `longitude`, `latitude` and a `radius` (in meters) query parameters will filter the results to hotels around this location.
* Adding `start` and `end` dates (in ISO 8601 notation, e.g. `2021-12-31`) for the expected arrival and departure dates of your guests will limit the results to hotels that have at least one room bookable for this timeframe.
* Adding `starRating`, `name` or `country` allows you to filter to hotels based on these values (e.g. `?starRating[gte]=4&name[like]=palace` for hotels with a rating of 4 or up with a name containing "palace")
* Adding `hotelIds` allows you to limit the results to include only hotels with the ids listed. Its value should be a comma-separated list of hotel ids (e.g. `?hotelIds[]=hotelIdA,hotelIdB`)

* Adding `contractable` allows you to filter to hotels that you can directly negotiate with through our [deals feature](https://docs.impala.travel/docs/booking-api/ZG9jOjcyNjgzMTA-contracting-with-hotels). (e.g `?contractable=true` or `?contractable=false`)

You can specify the **sorting order** in which hotels are returned:
* This is done by using the `sortBy` query parameter.
* Results can be sorted by `name` alphabetically, star `rating` and `distance_m` (in meters from the specified latitude/longitude location).
* The parameter allows for a comma-separated list of arguments with optional `:asc` (ascending, the default if the modifier is omitted) and `:desc` (descending) modifiers.

If no hotels match your filter criteria, an empty array will be returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListHotelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHotelsRequest();
    $request->country = [
        'totam' => 'beatae',
        'commodi' => 'molestiae',
        'modi' => 'qui',
        'impedit' => 'cum',
    ];
    $request->created = [
        'ipsum' => 'excepturi',
        'aspernatur' => 'perferendis',
    ];
    $request->end = '2021-05-22';
    $request->hotelIds = [
        '8a39290a-bcd0-461e-92c6-38e71a06d2f7',
        '8a39290a-bcd0-461e-92c6-38e71a06d2f7',
    ];
    $request->latitude = 58.386186;
    $request->longitude = -9.952549;
    $request->name = [
        'sed' => 'iste',
        'dolor' => 'natus',
        'laboriosam' => 'hic',
    ];
    $request->offset = 25;
    $request->radius = 25000;
    $request->size = 40;
    $request->sortBy = 'name:asc,distance_m:desc';
    $request->starRating = [
        'fuga' => 'in',
        'corporis' => 'iste',
        'iure' => 'saepe',
        'quidem' => 'architecto',
    ];
    $request->start = '2021-05-20';
    $request->updated = [
        'reiciendis' => 'est',
    ];

    $response = $sdk->hotels->listHotels($request);

    if ($response->listHotels200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveHotel

Returns the full content, room types and rates for the specified hotel.

When querying the hotels API you can query with or without dates. Where querying with dates requires providing valid values for the `start` and `end` parameters. Requests without these values will be considered a query without dates.

**Querying without dates:**

When you query without dates, the search result will include all properties that match your request. Including all content that is associated with those properties. However you will find that the `rates` attribute for each room will always be empty.

**Querying with dates:**

When you query with dates, the search result will include all properties that match your request, including all content that is associated with those properties. Rooms which do not have available prices for the provided dates will appear with an empty `rates` array.

For rooms where there are available prices the `rates` array will include both the public rates of the hotel, along with prices that come from deals in which you are participating. This would include private deals which you have negotiated with a hotel, along with Impala deals which you have been verified for.

Using the `rateId` of any of those rates, you can use the [Create a booking](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1bookings/post) endpoint to make a booking.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveHotelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveHotelRequest();
    $request->end = '2021-05-22';
    $request->hotelId = 'aa2352c5-9559-407a-bf1a-3a2fa9467739';
    $request->start = '2021-05-20';

    $response = $sdk->hotels->retrieveHotel($request);

    if ($response->hotelFullDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
