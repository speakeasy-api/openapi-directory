# spin

### Available Operations

* [getSpins](#getspins) - Returns spins optionally filtered by {start} and/or {end} datetimes
* [getSpinsId](#getspinsid) - Get a Spin by id
* [postSpins](#postspins) - Log a Spin

## getSpins

Get Spins optionally filtered by a datetime range. Only past Spins will be returned.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSpinsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpinsRequest();
    $request->count = 902349;
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-20T12:36:28.767Z');
    $request->expand = [
        'reiciendis',
    ];
    $request->fields = [
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->page = 210382;
    $request->playlistId = 358152;
    $request->showId = 128926;
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-20T14:32:34.011Z');

    $response = $sdk->spin->getSpins($request);

    if ($response->getSpins200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpinsId

Get a Spin by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSpinsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpinsIdRequest();
    $request->expand = [
        'nemo',
        'minima',
        'excepturi',
    ];
    $request->fields = [
        'iure',
    ];
    $request->id = 634274;

    $response = $sdk->spin->getSpinsId($request);

    if ($response->spin !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSpins

An endpoint for automation systems to log spins into the spin table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSpinsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSpinsRequestBody();
    $request->artist = 'doloribus';
    $request->composer = 'sapiente';
    $request->duration = 102044;
    $request->genre = 'mollitia';
    $request->isrc = 'dolorem';
    $request->label = 'culpa';
    $request->live = false;
    $request->release = 'consequuntur';
    $request->song = 'repellat';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-02T05:58:55.429Z');

    $response = $sdk->spin->postSpins($request);

    if ($response->spin !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
