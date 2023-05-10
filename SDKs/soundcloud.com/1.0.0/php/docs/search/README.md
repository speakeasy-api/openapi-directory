# search

## Overview

Search Endpoints.

### Available Operations

* [getPlaylists](#getplaylists) - Performs a playlist search based on a query
* [getTracks](#gettracks) - Performs a track search based on a query
* [getUsers](#getusers) - Performs a user search based on a query

## getPlaylists

Performs a playlist search based on a query

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaylistsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaylistsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlaylistsRequest();
    $request->access = [
        AccessEnum::BLOCKED,
        AccessEnum::BLOCKED,
    ];
    $request->limit = 99280;
    $request->linkedPartitioning = false;
    $request->offset = 60225;
    $request->q = 'reiciendis';

    $requestSecurity = new GetPlaylistsSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->search->getPlaylists($request, $requestSecurity);

    if ($response->getPlaylists200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTracks

Performs a track search based on a query

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTracksRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\Bpm;
use \OpenAPI\OpenAPI\Models\Shared\CreatedAt;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Operations\GetTracksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTracksRequest();
    $request->access = [
        AccessEnum::PREVIEW,
        AccessEnum::BLOCKED,
        AccessEnum::PLAYABLE,
    ];
    $request->bpm = new Bpm();
    $request->bpm->from = 123;
    $request->bpm->to = 456;
    $request->createdAt = new CreatedAt();
    $request->createdAt->from = '2020-12-24T00:00:00.000Z';
    $request->createdAt->to = '2020-12-26T00:00:00.000Z';
    $request->duration = new Duration();
    $request->duration->from = 123456;
    $request->duration->to = 456789;
    $request->genres = 'dolorem';
    $request->ids = 'corporis';
    $request->limit = 128926;
    $request->linkedPartitioning = false;
    $request->offset = 750686;
    $request->q = 'enim';
    $request->tags = 'omnis';

    $requestSecurity = new GetTracksSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->search->getTracks($request, $requestSecurity);

    if ($response->getTracks200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsers

Performs a user search based on a query

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersRequest();
    $request->ids = 'nemo';
    $request->limit = 325047;
    $request->linkedPartitioning = false;
    $request->offset = 570197;
    $request->q = 'accusantium';

    $requestSecurity = new GetUsersSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->search->getUsers($request, $requestSecurity);

    if ($response->getUsers200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
