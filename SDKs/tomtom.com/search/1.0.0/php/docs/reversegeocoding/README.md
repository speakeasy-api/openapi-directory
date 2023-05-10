# reverseGeocoding

### Available Operations

* [getSearchVersionNumberReverseGeocodeCrossStreetPositionExt](#getsearchversionnumberreversegeocodecrossstreetpositionext) - Cross Street lookup
* [getSearchVersionNumberReverseGeocodePositionExt](#getsearchversionnumberreversegeocodepositionext) - Reverse Geocode

## getSearchVersionNumberReverseGeocodeCrossStreetPositionExt

Cross Street lookup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest();
    $request->ext = ExtEnum::JSON;
    $request->heading = 4146.62;
    $request->language = 'molestiae';
    $request->limit = 264555;
    $request->position = 'qui';
    $request->radius = 774234;
    $request->spatialKeys = false;
    $request->versionNumber = VersionNumberEnum::TWO;

    $response = $sdk->reverseGeocoding->getSearchVersionNumberReverseGeocodeCrossStreetPositionExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchVersionNumberReverseGeocodePositionExt

Reverse Geocode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberReverseGeocodePositionExtRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchVersionNumberReverseGeocodePositionExtRequest();
    $request->callback = 'cum';
    $request->ext = ExtEnum::JSONP;
    $request->heading = 2165.5;
    $request->number = 'excepturi';
    $request->position = 'aspernatur';
    $request->radius = 18789;
    $request->returnRoadUse = false;
    $request->returnSpeedLimit = false;
    $request->roadUse = 'ad';
    $request->spatialKeys = false;
    $request->versionNumber = VersionNumberEnum::TWO;

    $response = $sdk->reverseGeocoding->getSearchVersionNumberReverseGeocodePositionExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
