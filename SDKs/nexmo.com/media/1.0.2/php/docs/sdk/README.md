# SDK

## Overview

The Media API can be used to query, download and delete media items such as audio files for use with other Nexmo APIs.

### Available Operations

* [deleteAMediaItem](#deleteamediaitem) - Delete a media item
* [listAndSearchMediaItems](#listandsearchmediaitems) - List and search media items
* [retrieveAMediaItem](#retrieveamediaitem) - Retrieve a media item
* [updateAMediaItem](#updateamediaitem) - Update a media item

## deleteAMediaItem

Delete a previously created media item by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->deleteAMediaItem();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAndSearchMediaItems

Retrieve information about multiple media items with the ability to search and paginate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAndSearchMediaItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAndSearchMediaItemsOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAndSearchMediaItemsRequest();
    $request->endTime = '2020-01-01T14:00:00.000Z';
    $request->order = ListAndSearchMediaItemsOrderEnum::ASCENDING;
    $request->pageIndex = 1;
    $request->pageSize = 50;
    $request->startTime = '2020-01-01T14:00:00.000Z';

    $response = $sdk->sdk->listAndSearchMediaItems($request);

    if ($response->listAndSearchMediaItems200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveAMediaItem

Retrieve information about a single media item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->retrieveAMediaItem();

    if ($response->media !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAMediaItem

Update a previously created media item by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAMediaItemRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAMediaItemRequestBody();
    $request->description = 'This is a very important recording. Do not delete.';
    $request->maxDownloadsAllowed = 100;
    $request->metadataPrimary = 'foo,bar';
    $request->metadataSecondary = '123';
    $request->mimeType = 'audio/vnd.wave';
    $request->public = true;
    $request->title = 'Very important recording';

    $response = $sdk->sdk->updateAMediaItem($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
