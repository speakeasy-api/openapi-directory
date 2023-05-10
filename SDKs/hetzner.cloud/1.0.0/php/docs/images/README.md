# images

## Overview

Images are blueprints for your VM disks. They can be of different types:

### System Images
Distribution Images maintained by us, e.g. “Ubuntu 20.04”

### Snapshot Images
Maintained by you, for example “Ubuntu 20.04 with my own settings”. These are billed per GB per month.

### Backup Images
Daily Backups of your Server. Will automatically be created for Servers which have backups enabled (`POST /servers/{id}/actions/enable_backup`)

Bound to exactly one Server. If you delete the Server, you also delete all backups bound to it. You may convert backup Images to snapshot Images to keep them.

These are billed at 20% of your instance price for 7 backup slots.

### App Images
Prebuild images with specific software configurations, e.g. “Wordpress”. All app images are created by us.


### Available Operations

* [deleteImagesId](#deleteimagesid) - Delete an Image
* [getImages](#getimages) - Get all Images
* [getImagesId](#getimagesid) - Get an Image
* [putImagesId](#putimagesid) - Update an Image

## deleteImagesId

Deletes an Image. Only Images of type `snapshot` and `backup` can be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImagesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImagesIdRequest();
    $request->id = 778346;

    $response = $sdk->images->deleteImagesId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImages

Returns all Image objects. You can select specific Image types only and sort the results by using URI parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImagesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetImagesStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetImagesTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImagesRequest();
    $request->architecture = 'sequi';
    $request->boundTo = 'tenetur';
    $request->includeDeprecated = false;
    $request->labelSelector = 'ipsam';
    $request->name = 'Miss Rufus Ankunding';
    $request->sort = GetImagesSortEnum::CREATED;
    $request->status = GetImagesStatusEnum::AVAILABLE;
    $request->type = GetImagesTypeEnum::APP;

    $response = $sdk->images->getImages($request);

    if ($response->getImages200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImagesId

Returns a specific Image object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImagesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImagesIdRequest();
    $request->id = 976460;

    $response = $sdk->images->getImagesId($request);

    if ($response->getImagesId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putImagesId

Updates the Image. You may change the description, convert a Backup Image to a Snapshot Image or change the Image labels. Only Images of type `snapshot` and `backup` can be updated.

Note that when updating labels, the current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutImagesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutImagesIdUpdateImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutImagesIdUpdateImageRequestTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutImagesIdRequest();
    $request->requestBody = new PutImagesIdUpdateImageRequest();
    $request->requestBody->description = 'My new Image description';
    $request->requestBody->labels = [
        'nihil' => 'praesentium',
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
        'cum' => 'perferendis',
    ];
    $request->requestBody->type = PutImagesIdUpdateImageRequestTypeEnum::SNAPSHOT;
    $request->id = 39187;

    $response = $sdk->images->putImagesId($request);

    if ($response->putImagesId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
