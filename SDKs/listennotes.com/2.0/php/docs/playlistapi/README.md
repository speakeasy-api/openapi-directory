# playlistAPI

## Overview

Endpoints to fetch Listen Later playlists data

### Available Operations

* [getPlaylistById](#getplaylistbyid) - Fetch a playlist's info and items (i.e., episodes or podcasts).
* [getPlaylists](#getplaylists) - Fetch a list of your playlists.

## getPlaylistById

A playlist can be an episode list (i.e., all items are episodes) or a podcast list (i.e., all items are podcasts),
which is essentially the same as those created via listennotes.com/listen/.
This endpoint fetches a list of items (i.e., episodes or podcasts) in the playlist.
You can use the **last_pub_date_ms** parameter to do pagination and fetch more items.
A playlist can be **public** (discoverable on ListenNotes.com),
**unlisted** (accessible to anyone who knows the playlist id),
or **private** (accessible to its owner).
You can fetch all playlists created by you, and **public** / **unlisted** playlists created by others.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaylistByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaylistByIdSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaylistByIdTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlaylistByIdRequest();
    $request->xListenAPIKey = 'accusamus';
    $request->id = '395efb9b-a88f-43a6-a997-074ba4469b6e';
    $request->lastTimestampMs = 135474;
    $request->sort = GetPlaylistByIdSortEnum::RECENT_ADDED_FIRST;
    $request->type = GetPlaylistByIdTypeEnum::EPISODE_LIST;

    $response = $sdk->playlistAPI->getPlaylistById($request);

    if ($response->playlistResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlaylists

This endpoint returns same data as listennotes.com/listen under your account.
You can use the **page** parameter to do pagination and fetch more playlists.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaylistsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaylistsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlaylistsRequest();
    $request->xListenAPIKey = 'et';
    $request->page = 569965;
    $request->sort = GetPlaylistsSortEnum::OLDEST_ADDED_FIRST;

    $response = $sdk->playlistAPI->getPlaylists($request);

    if ($response->playlistsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
