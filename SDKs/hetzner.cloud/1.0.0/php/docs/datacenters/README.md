# datacenters

## Overview

Each Datacenter represents a *virtual* Datacenter which is made up of possible many physical Datacenters where Servers are hosted.

Datacenter names are composed from their Location and virtual Datacenter number, for example `fsn1-dc14` means virtual Datacenter `14` in Location `fsn1`.

Right now there is only one Datacenter for each Location. The Datacenter numbers for `fsn`, `nbg` and `hel` are arbitrarily set to `14`, `3` and `2` for historic reasons and do not represent real physical Hetzner datacenters.


### Available Operations

* [getDatacenters](#getdatacenters) - Get all Datacenters
* [getDatacentersId](#getdatacentersid) - Get a Datacenter

## getDatacenters

Returns all Datacenter objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDatacentersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatacentersRequest();
    $request->name = 'Miss Lowell Parisian';

    $response = $sdk->datacenters->getDatacenters($request);

    if ($response->getDatacenters200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDatacentersId

Returns a specific Datacenter object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDatacentersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatacentersIdRequest();
    $request->id = 582020;

    $response = $sdk->datacenters->getDatacentersId($request);

    if ($response->getDatacentersId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
