# locations

## Overview

The `locations` resource is an abstraction for the area around a physical location that items can be localized at.


<https://intellifi.zendesk.com/hc/en-us/articles/360007502554>
### Available Operations

* [addLocation](#addlocation) - Create location
* [deleteLocation](#deletelocation) - Delete location
* [getLocationById](#getlocationbyid) - Get location
* [getLocations](#getlocations) - Get all locations
* [updateLocation](#updatelocation) - Update existing location

## addLocation

Create location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\LocationInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LocationInput();
    $request->custom = 'voluptas';
    $request->label = 'Foo Bar';
    $request->metadata = [
        'cupiditate' => 'consequatur',
    ];

    $response = $sdk->locations->addLocation($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLocation

Delete location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLocationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLocationRequest();
    $request->id = '4e523c7e-0bc7-4178-a479-6f2a70c68828';

    $response = $sdk->locations->deleteLocation($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLocationById

Get location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLocationByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLocationByIdRequest();
    $request->id = '2aa48256-2f22-42e9-817e-e17cbe61e6b7';

    $response = $sdk->locations->getLocationById($request);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLocations

Get all locations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLocationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLocationsRequest();
    $request->after = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-03T10:56:47.600Z');
    $request->afterId = 'minima';
    $request->before = 'distinctio';
    $request->beforeId = 'eligendi';
    $request->from = 'sit';
    $request->fromId = 'culpa';
    $request->id = '5b7d6cbd7503c445552a1664';
    $request->idOnly = false;
    $request->label = 'Foo Bar';
    $request->limit = 731398;
    $request->metadata = 'adipisci';
    $request->populate = 'cumque';
    $request->resultsOnly = false;
    $request->select = 'consequuntur';
    $request->sort = 'consequatur';
    $request->text = 'minus';
    $request->timeCreated = '2018-08-30T09:51:59.737Z';
    $request->timeUpdated = '2018-08-30T09:51:59.737Z';
    $request->timeoutS = 3082.86;
    $request->until = 'sapiente';
    $request->untilId = 'consectetur';

    $response = $sdk->locations->getLocations($request);

    if ($response->getLocations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLocation

Update existing location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\LocationInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLocationRequest();
    $request->locationInput = new LocationInput();
    $request->locationInput->custom = 'esse';
    $request->locationInput->label = 'Foo Bar';
    $request->locationInput->metadata = [
        'provident' => 'a',
        'nulla' => 'quas',
        'esse' => 'quasi',
    ];
    $request->id = 'f99dd2ef-d121-4aa6-b1e6-74bdb04f1575';

    $response = $sdk->locations->updateLocation($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
