# presences

## Overview

The `presences` resource is an abstraction for the detection of an item (from the `items` resource) at a location (from the `locations` resource).
Presences are always kept current by the Brain, i.e. if the hold time of a presence expires it is simply removed from the resource.


<https://intellifi.zendesk.com/hc/en-us/articles/360008309313>
### Available Operations

* [getPresenceById](#getpresencebyid) - Get presence
* [getPresences](#getpresences) - Get all presences

## getPresenceById

Get presence

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPresenceByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPresenceByIdRequest();
    $request->id = '6082d68e-a19f-41d1-b051-339d08086a18';

    $response = $sdk->presences->getPresenceById($request);

    if ($response->presence !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPresences

Get all presences

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPresencesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProximityEnum;
use \OpenAPI\OpenAPI\Models\Shared\TechnologyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPresencesRequest();
    $request->after = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-20T03:36:13.455Z');
    $request->afterId = 'dolor';
    $request->before = 'occaecati';
    $request->beforeId = 'numquam';
    $request->from = 'impedit';
    $request->fromId = 'explicabo';
    $request->id = '5b7d6cbd7503c445552a1664';
    $request->idOnly = false;
    $request->item = '5b7d6cbd7503c445552a1664';
    $request->limit = 376226;
    $request->location = '5b7d6cbd7503c445552a1664';
    $request->populate = 'aut';
    $request->proximity = ProximityEnum::IMMEDIATE;
    $request->resultsOnly = false;
    $request->select = 'dignissimos';
    $request->sort = 'dicta';
    $request->technology = TechnologyEnum::RFID;
    $request->timeCreated = '2018-08-30T09:51:59.737Z';
    $request->timeUpdated = '2018-08-30T09:51:59.737Z';
    $request->timeoutS = 9816.4;
    $request->until = 'natus';
    $request->untilId = 'velit';

    $response = $sdk->presences->getPresences($request);

    if ($response->getPresences200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
