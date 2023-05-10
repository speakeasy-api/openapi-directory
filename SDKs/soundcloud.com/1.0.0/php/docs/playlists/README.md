# playlists

## Overview

Playlists Endpoints.

### Available Operations

* [deletePlaylistsPlaylistId](#deleteplaylistsplaylistid) - Deletes a playlist.
* [getPlaylistsPlaylistId](#getplaylistsplaylistid) - Returns a playlist.
* [getPlaylistsPlaylistIdReposters](#getplaylistsplaylistidreposters) - Returns a collection of playlist's reposters.
* [getPlaylistsPlaylistIdTracks](#getplaylistsplaylistidtracks) - Returns tracks under a playlist.
* [postPlaylists](#postplaylists) - Creates a playlist.
* [putPlaylistsPlaylistId](#putplaylistsplaylistid) - Updates a playlist.

## deletePlaylistsPlaylistId

Deletes a playlist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePlaylistsPlaylistIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePlaylistsPlaylistIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePlaylistsPlaylistIdRequest();
    $request->playlistId = 758616;

    $requestSecurity = new DeletePlaylistsPlaylistIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->playlists->deletePlaylistsPlaylistId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlaylistsPlaylistId

Returns a playlist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaylistsPlaylistIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaylistsPlaylistIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlaylistsPlaylistIdRequest();
    $request->access = [
        AccessEnum::PLAYABLE,
        AccessEnum::PREVIEW,
        AccessEnum::PREVIEW,
    ];
    $request->playlistId = 264555;
    $request->secretToken = 'qui';

    $requestSecurity = new GetPlaylistsPlaylistIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->playlists->getPlaylistsPlaylistId($request, $requestSecurity);

    if ($response->playlist !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlaylistsPlaylistIdReposters

Returns a collection of playlist's reposters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaylistsPlaylistIdRepostersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaylistsPlaylistIdRepostersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlaylistsPlaylistIdRepostersRequest();
    $request->limit = 774234;
    $request->playlistId = 736918;

    $requestSecurity = new GetPlaylistsPlaylistIdRepostersSecurity();
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->playlists->getPlaylistsPlaylistIdReposters($request, $requestSecurity);

    if ($response->metaUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlaylistsPlaylistIdTracks

Returns tracks under a playlist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaylistsPlaylistIdTracksRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaylistsPlaylistIdTracksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlaylistsPlaylistIdTracksRequest();
    $request->access = [
        AccessEnum::PLAYABLE,
        AccessEnum::PREVIEW,
    ];
    $request->linkedPartitioning = false;
    $request->playlistId = 135218;
    $request->secretToken = 'perferendis';

    $requestSecurity = new GetPlaylistsPlaylistIdTracksSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->playlists->getPlaylistsPlaylistIdTracks($request, $requestSecurity);

    if ($response->getPlaylistsPlaylistIdTracks200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPlaylists

Creates a playlist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateUpdatePlaylistRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUpdatePlaylistRequestPlaylist;
use \OpenAPI\OpenAPI\Models\Shared\CreateUpdatePlaylistRequestPlaylistSharingEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateUpdatePlaylistRequestPlaylistTracks;
use \OpenAPI\OpenAPI\Models\Operations\PostPlaylistsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUpdatePlaylistRequest();
    $request->playlist = new CreateUpdatePlaylistRequestPlaylist();
    $request->playlist->description = 'ad';
    $request->playlist->sharing = CreateUpdatePlaylistRequestPlaylistSharingEnum::PRIVATE;
    $request->playlist->title = 'Mr.';
    $request->playlist->tracks = [
        new CreateUpdatePlaylistRequestPlaylistTracks(),
        new CreateUpdatePlaylistRequestPlaylistTracks(),
        new CreateUpdatePlaylistRequestPlaylistTracks(),
    ];

    $requestSecurity = new PostPlaylistsSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->playlists->postPlaylists($request, $requestSecurity);

    if ($response->postPlaylists201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPlaylistsPlaylistId

Updates a playlist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutPlaylistsPlaylistIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUpdatePlaylistRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUpdatePlaylistRequestPlaylist;
use \OpenAPI\OpenAPI\Models\Shared\CreateUpdatePlaylistRequestPlaylistSharingEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateUpdatePlaylistRequestPlaylistTracks;
use \OpenAPI\OpenAPI\Models\Operations\PutPlaylistsPlaylistIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPlaylistsPlaylistIdRequest();
    $request->createUpdatePlaylistRequest = new CreateUpdatePlaylistRequest();
    $request->createUpdatePlaylistRequest->playlist = new CreateUpdatePlaylistRequestPlaylist();
    $request->createUpdatePlaylistRequest->playlist->description = 'dolor';
    $request->createUpdatePlaylistRequest->playlist->sharing = CreateUpdatePlaylistRequestPlaylistSharingEnum::PRIVATE;
    $request->createUpdatePlaylistRequest->playlist->title = 'Mrs.';
    $request->createUpdatePlaylistRequest->playlist->tracks = [
        new CreateUpdatePlaylistRequestPlaylistTracks(),
        new CreateUpdatePlaylistRequestPlaylistTracks(),
        new CreateUpdatePlaylistRequestPlaylistTracks(),
        new CreateUpdatePlaylistRequestPlaylistTracks(),
    ];
    $request->playlistId = 902599;

    $requestSecurity = new PutPlaylistsPlaylistIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->playlists->putPlaylistsPlaylistId($request, $requestSecurity);

    if ($response->putPlaylistsPlaylistId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
