# show

### Available Operations

* [getShows](#getshows) - Returns scheduled shows optionally filtered by {start} and/or {end} datetimes
* [getShowsId](#getshowsid) - Get a Show by id

## getShows

**Terminology**: Spinitron defines a *show* as a radio program. A show can have one or more *schedules*,
each of which may specify either an *occurence* or a *repetition*, which represents a set of occurences.
Thus scheduled shows have occurences that, for example, may be displayed in a calendar.

In the response, `items` is an array of objects representing occurences of scheduled shows.

You may optionally filter `items` to a datetime *range* by including in the request {start} and/or {end}
parameters, both of which must be no more than one hour in the past. An occurence starting at {end} is
included in the reponse.

`itmes` can include occurences that begin *or* end within the filter range. A show that goes on air before
{start} appears in `items` if it ends *after* but not *at* {start}. An occurence starting at or before {end}
is included.

If the request omits the {start} parameter, the server sets its value to the current time so that the filter
range's start is always defined. If the request specifies {end} then the requested range is *bounded*,
otherwise it is *unbounded*.

For a bounded request, `items` includes *every* occurence of all shows occuring in the range. The only
difference between objects in `items` representing a given show will be the `start` field value.

For an unbounded request, `items` includes *only one* occurence per show, specifically, the
next occurrence after {start} of all shows occuring after {start}.

Use an unbounded request to get a straight list all shows. Use a bounded request to get a calendar/agenda
of shows expanded into occurrences by thir shedules and repetitions.

Objects in `items` are ordered first by `datetime` and then by `id`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetShowsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShowsRequest();
    $request->count = 456150;
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-07T12:31:06.574Z');
    $request->expand = [
        'perferendis',
    ];
    $request->fields = [
        'natus',
        'sed',
    ];
    $request->page = 612096;
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T19:39:29.035Z');

    $response = $sdk->show->getShows($request);

    if ($response->getShows200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getShowsId

The response object represents the next occurence of the show specified by {id}.

Status 404 is returned if a show with {id} does not exist or if it does but all its scheduled occurences elapsed in the past.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetShowsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShowsIdRequest();
    $request->expand = [
        'hic',
        'saepe',
    ];
    $request->fields = [
        'in',
        'corporis',
        'iste',
    ];
    $request->id = 437032;

    $response = $sdk->show->getShowsId($request);

    if ($response->show !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
