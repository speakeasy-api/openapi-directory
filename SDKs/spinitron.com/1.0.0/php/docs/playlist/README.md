# playlist

### Available Operations

* [getPlaylists](#getplaylists) - Returns playlists optionally filtered by {start} and/or {end} datetimes
* [getPlaylistsId](#getplaylistsid) - Get a Playlist by id

## getPlaylists

Get Playlists optionally filtered by a datetime range.
Only past Playlists will be returned (with allowed tolerance equals 1 hour in future).

Ordered chronologically from newest to oldest.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaylistsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlaylistsRequest();
    $request->count = 799159;
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-13T16:19:19.906Z');
    $request->expand = [
        'porro',
        'dolorum',
        'dicta',
    ];
    $request->fields = [
        'officia',
        'occaecati',
        'fugit',
    ];
    $request->page = 537373;
    $request->personaId = 944669;
    $request->showId = 758616;
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-15T16:29:54.554Z');

    $response = $sdk->playlist->getPlaylists($request);

    if ($response->getPlaylists200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlaylistsId

The response object represents the playlist specified by {id}.

Status 404 is returned if a playlist with {id} does not exist or if it does but starts in the future (with allowed tolerance equals 1 hour in future).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaylistsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlaylistsIdRequest();
    $request->expand = [
        'molestiae',
        'modi',
    ];
    $request->fields = [
        'impedit',
    ];
    $request->id = 736918;

    $response = $sdk->playlist->getPlaylistsId($request);

    if ($response->playlist !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
