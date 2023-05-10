# volumes

## Overview

A Volume is a highly-available, scalable, and SSD-based block storage for Servers.

Pricing for Volumes depends on the Volume size and Location, not the actual used storage.

Please see [Hetzner Docs](https://docs.hetzner.com/cloud/#Volumes) for more details about Volumes.


### Available Operations

* [deleteVolumesId](#deletevolumesid) - Delete a Volume
* [getVolumes](#getvolumes) - Get all Volumes
* [getVolumesId](#getvolumesid) - Get a Volume
* [postVolumes](#postvolumes) - Create a Volume
* [putVolumesId](#putvolumesid) - Update a Volume

## deleteVolumesId

Deletes a volume. All Volume data is irreversibly destroyed. The Volume must not be attached to a Server and it must not have delete protection enabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVolumesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVolumesIdRequest();
    $request->id = '422bb679-d232-4271-9bf0-cbb1e31b8b90';

    $response = $sdk->volumes->deleteVolumesId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVolumes

Gets all existing Volumes that you have available.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumesStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVolumesRequest();
    $request->labelSelector = 'delectus';
    $request->name = 'Joanne Grant';
    $request->sort = GetVolumesSortEnum::ID;
    $request->status = GetVolumesStatusEnum::AVAILABLE;

    $response = $sdk->volumes->getVolumes($request);

    if ($response->getVolumes200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVolumesId

Gets a specific Volume object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVolumesIdRequest();
    $request->id = 16429;

    $response = $sdk->volumes->getVolumesId($request);

    if ($response->getVolumesId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVolumes

Creates a new Volume attached to a Server. If you want to create a Volume that is not attached to a Server, you need to provide the `location` key instead of `server`. This can be either the ID or the name of the Location this Volume will be created in. Note that a Volume can be attached to a Server only in the same Location as the Volume itself.

Specifying the Server during Volume creation will automatically attach the Volume to that Server after it has been initialized. In that case, the `next_actions` key in the response is an array which contains a single `attach_volume` action.

The minimum Volume size is 10GB and the maximum size is 10TB (10240GB).

A volume’s name can consist of alphanumeric characters, dashes, underscores, and dots, but has to start and end with an alphanumeric character. The total length is limited to 64 characters. Volume names must be unique per Project.

#### Call specific error codes

| Code                                | Description                                         |
|-------------------------------------|-----------------------------------------------------|
| `no_space_left_in_location`         | There is no volume space left in the given location |


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostVolumesCreateVolumeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostVolumesCreateVolumeRequest();
    $request->automount = false;
    $request->format = 'xfs';
    $request->labels = [
        'itaque' => 'consequatur',
        'est' => 'repellendus',
        'porro' => 'doloribus',
    ];
    $request->location = 'nbg1';
    $request->name = 'databases-storage';
    $request->server = 281730;
    $request->size = 42;

    $response = $sdk->volumes->postVolumes($request);

    if ($response->postVolumes201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putVolumesId

Updates the Volume properties.

Note that when updating labels, the volume’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutVolumesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutVolumesIdUpdateVolumeRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutVolumesIdUpdateVolumeRequestLabels;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutVolumesIdRequest();
    $request->requestBody = new PutVolumesIdUpdateVolumeRequest();
    $request->requestBody->labels = new PutVolumesIdUpdateVolumeRequestLabels();
    $request->requestBody->labels->labelkey = 'value';
    $request->requestBody->name = 'database-storage';
    $request->id = 'b921879f-ce95-43f7-bef7-fbc7abd74dd3';

    $response = $sdk->volumes->putVolumesId($request);

    if ($response->putVolumesId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
