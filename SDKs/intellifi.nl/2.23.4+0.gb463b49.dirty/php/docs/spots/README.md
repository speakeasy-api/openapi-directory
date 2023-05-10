# spots

## Overview

The `spots` resource contains representations of Smartspot devices that have connected to this Brain at least once.
It is possible to configure Smartspots through this resource.

Smartspots also have their own locally stored sets, referred to as "spotsets".
Spotsets can be created and managed within a single spot instance or by using `spotsets` resource.
Created or updated spotsets are automatically synced between Smartspot and server.


<https://intellifi.zendesk.com/hc/en-us/categories/360000685434>
### Available Operations

* [addSpotSet](#addspotset) - Create spotset
* [getSpotById](#getspotbyid) - Get spot
* [getSpotSetById](#getspotsetbyid) - Get spotset
* [getSpotSetsById](#getspotsetsbyid) - Get spotsets
* [getSpots](#getspots) - Get all spots
* [updateSpot](#updatespot) - Update existing spot
* [updateSpotSet](#updatespotset) - Update existing spotset

## addSpotSet

Create spotset

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddSpotSetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddSpotSetRequest();
    $request->requestBody = new SpotSetTypeCodemaskInput();
    $request->requestBody->code = 'expedita';
    $request->requestBody->mask = 'voluptatem';
    $request->requestBody->setid = 561577;
    $request->requestBody->type = SpotSetTypeCodemaskTypeEnum::CODEMASK;
    $request->id = 'b61891ba-a0fe-41ad-a008-e6f8c5f350d8';

    $response = $sdk->spots->addSpotSet($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpotById

Get spot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSpotByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpotByIdRequest();
    $request->id = 'cdb5a341-8143-4010-8218-13d5208ece7e';

    $response = $sdk->spots->getSpotById($request);

    if ($response->spotGet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpotSetById

Get spotset

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSpotSetByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpotSetByIdRequest();
    $request->id = '253b6684-51c6-4c6e-a05e-16deab3fec95';
    $request->setId = 'voluptate';

    $response = $sdk->spots->getSpotSetById($request);

    if ($response->spotSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpotSetsById

Get spotsets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSpotSetsByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpotSetsByIdRequest();
    $request->id = '8a645842-73a8-4418-9162-309fb0929921';

    $response = $sdk->spots->getSpotSetsById($request);

    if ($response->spotSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpots

Get all spots

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSpotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpotsRequest();
    $request->after = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-28T05:10:23.789Z');
    $request->afterId = 'voluptatibus';
    $request->before = 'distinctio';
    $request->beforeId = 'omnis';
    $request->from = 'delectus';
    $request->fromId = 'minima';
    $request->id = '5b7d6cbd7503c445552a1664';
    $request->idOnly = false;
    $request->isOnline = true;
    $request->limit = 507636;
    $request->populate = 'maxime';
    $request->requestCounter = 73807;
    $request->resultsOnly = false;
    $request->select = 'magnam';
    $request->serialNumber = 1337;
    $request->sort = 'temporibus';
    $request->timeCreated = '2018-08-30T09:51:59.737Z';
    $request->timeUpdated = '2018-08-30T09:51:59.737Z';
    $request->timeoutS = 5495.01;
    $request->until = 'commodi';
    $request->untilId = 'itaque';

    $response = $sdk->spots->getSpots($request);

    if ($response->getSpots200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSpot

Update existing spot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSpotRequest;
use \OpenAPI\OpenAPI\Models\Shared\SpotUpdateInput;
use \OpenAPI\OpenAPI\Models\Shared\SpotUpdateAntennaReportLocationsInput;
use \OpenAPI\OpenAPI\Models\Shared\GeoCoordsInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSpotRequest();
    $request->spotUpdateInput = new SpotUpdateInput();
    $request->spotUpdateInput->antennaReportLocations = [
        new SpotUpdateAntennaReportLocationsInput(),
        new SpotUpdateAntennaReportLocationsInput(),
    ];
    $request->spotUpdateInput->configRequest = [
        'earum' => 'modi',
        'nam' => 'vero',
        'voluptatem' => 'ipsam',
    ];
    $request->spotUpdateInput->geoCoords = new GeoCoordsInput();
    $request->spotUpdateInput->geoCoords->lat = 4259.46;
    $request->spotUpdateInput->geoCoords->lng = 13.83;
    $request->spotUpdateInput->reportLocation = '5b7d6cbd7503c445552a1664';
    $request->spotUpdateInput->sensesRequest = [
        'non' => 'maiores',
    ];
    $request->id = '59da757a-59ec-4fef-a6ef-1caa3383c2be';

    $response = $sdk->spots->updateSpot($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSpotSet

Update existing spotset

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSpotSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\SpotSetUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSpotSetRequest();
    $request->spotSetUpdate = new SpotSetUpdate();
    $request->spotSetUpdate->delete = false;
    $request->id = 'b477373c-8d72-4f64-91db-1f2c4310661e';
    $request->setId = 'excepturi';

    $response = $sdk->spots->updateSpotSet($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
