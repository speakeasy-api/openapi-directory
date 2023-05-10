# geocoding

### Available Operations

* [getSearchVersionNumberGeocodeQueryExt](#getsearchversionnumbergeocodequeryext) - Geocode
* [getSearchVersionNumberStructuredGeocodeExt](#getsearchversionnumberstructuredgeocodeext) - Structured Geocode

## getSearchVersionNumberGeocodeQueryExt

Geocode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberGeocodeQueryExtRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViewEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchVersionNumberGeocodeQueryExtRequest();
    $request->btmRight = 'minus';
    $request->countrySet = 'placeat';
    $request->ext = ExtEnum::JS;
    $request->extendedPostalCodesFor = 'iusto';
    $request->language = 'excepturi';
    $request->lat = 3927.85;
    $request->limit = 925597;
    $request->lon = 8360.79;
    $request->ofs = 71036;
    $request->query = 'quis';
    $request->radius = 87129;
    $request->storeResult = false;
    $request->topLeft = 'deserunt';
    $request->typeahead = false;
    $request->versionNumber = VersionNumberEnum::TWO;
    $request->view = ViewEnum::UNIFIED;

    $response = $sdk->geocoding->getSearchVersionNumberGeocodeQueryExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchVersionNumberStructuredGeocodeExt

Structured Geocode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberStructuredGeocodeExtRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchVersionNumberStructuredGeocodeExtRequest();
    $request->countryCode = 'GU';
    $request->countrySecondarySubdivision = 'repellendus';
    $request->countrySubdivision = 'sapiente';
    $request->countryTertiarySubdivision = 'quo';
    $request->crossStreet = 'odit';
    $request->ext = ExtEnum::XML;
    $request->extendedPostalCodesFor = 'at';
    $request->language = 'maiores';
    $request->limit = 473608;
    $request->municipality = 'quod';
    $request->municipalitySubdivision = 'quod';
    $request->ofs = 461479;
    $request->postalCode = '76176-5159';
    $request->streetName = 'optio';
    $request->streetNumber = 'totam';
    $request->versionNumber = VersionNumberEnum::TWO;

    $response = $sdk->geocoding->getSearchVersionNumberStructuredGeocodeExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
