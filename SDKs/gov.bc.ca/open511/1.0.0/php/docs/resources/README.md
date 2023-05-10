# resources

### Available Operations

* [getAreas](#getareas) - Lists the geographical areas (e.g. districts) that can be used to filter events.
* [getEvents](#getevents) - Lists road events
* [getJurisdiction](#getjurisdiction) - Lists the jurisdictions publishing data through this Open511 API implementation
* [getJurisdictiongeography](#getjurisdictiongeography) - Provides the geographical boundaries for all the jurisdictions.

## getAreas

Lists the geographical areas (e.g. districts) that can be used to filter events.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAreasRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAreasFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAreasRequest();
    $request->format = GetAreasFormatEnum::XML;

    $response = $sdk->resources->getAreas($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEvents

The events resource provides information about road events (e.g. accidents, construction, special events). The response is a list of event elements matching the filtering parameters if any are provided. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsRequest();
    $request->areaId = 'distinctio';
    $request->bbox = 'quibusdam';
    $request->created = 'unde';
    $request->eventType = GetEventsEventTypeEnum::ROAD_CONDITION;
    $request->format = GetEventsFormatEnum::XML;
    $request->jurisdiction = 'illum';
    $request->roadName = 'vel';
    $request->severity = 'error';
    $request->status = GetEventsStatusEnum::ACTIVE;
    $request->updated = 'suscipit';

    $response = $sdk->resources->getEvents($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJurisdiction

Lists the jurisdictions publishing data through this Open511 API implementation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJurisdictionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetJurisdictionFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJurisdictionRequest();
    $request->format = GetJurisdictionFormatEnum::JSON;

    $response = $sdk->resources->getJurisdiction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJurisdictiongeography

Provides the geographical boundaries for all the jurisdictions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJurisdictiongeographyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetJurisdictiongeographyFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJurisdictiongeographyRequest();
    $request->format = GetJurisdictiongeographyFormatEnum::JSON;

    $response = $sdk->resources->getJurisdictiongeography($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
