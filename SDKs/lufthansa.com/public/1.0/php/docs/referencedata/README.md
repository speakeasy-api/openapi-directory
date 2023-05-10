# referenceData

### Available Operations

* [referencesAircraftByAircraftCodeGet](#referencesaircraftbyaircraftcodeget) - Aircraft
* [referencesAirlinesByAirlineCodeGet](#referencesairlinesbyairlinecodeget) - Airlines
* [referencesAirportsByAirportCodeGet](#referencesairportsbyairportcodeget) - Airports
* [referencesAirportsNearestByLatitudeAndLongitudeGet](#referencesairportsnearestbylatitudeandlongitudeget) - Nearest Airports
* [referencesCitiesByCityCodeGet](#referencescitiesbycitycodeget) - Cities
* [referencesCountriesByCountryCodeGet](#referencescountriesbycountrycodeget) - Countries

## referencesAircraftByAircraftCodeGet

List all aircraft types or one specific aircraft type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReferencesAircraftByAircraftCodeGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReferencesAircraftByAircraftCodeGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReferencesAircraftByAircraftCodeGetRequest();
    $request->accept = 'occaecati';
    $request->aircraftCode = 'fugit';
    $request->limit = 'deleniti';
    $request->offset = 'hic';

    $requestSecurity = new ReferencesAircraftByAircraftCodeGetSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->referenceData->referencesAircraftByAircraftCodeGet($request, $requestSecurity);

    if ($response->referencesAircraftByAircraftCodeGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## referencesAirlinesByAirlineCodeGet

List all airlines or one specific airline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReferencesAirlinesByAirlineCodeGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReferencesAirlinesByAirlineCodeGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReferencesAirlinesByAirlineCodeGetRequest();
    $request->accept = 'optio';
    $request->airlineCode = 'totam';
    $request->limit = 'beatae';
    $request->offset = 'commodi';

    $requestSecurity = new ReferencesAirlinesByAirlineCodeGetSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->referenceData->referencesAirlinesByAirlineCodeGet($request, $requestSecurity);

    if ($response->referencesAirlinesByAirlineCodeGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## referencesAirportsByAirportCodeGet

List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReferencesAirportsByAirportCodeGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReferencesAirportsByAirportCodeGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReferencesAirportsByAirportCodeGetRequest();
    $request->accept = 'molestiae';
    $request->lHoperated = false;
    $request->airportCode = 'modi';
    $request->lang = 'qui';
    $request->limit = 'impedit';
    $request->offset = 'cum';

    $requestSecurity = new ReferencesAirportsByAirportCodeGetSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->referenceData->referencesAirportsByAirportCodeGet($request, $requestSecurity);

    if ($response->airportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## referencesAirportsNearestByLatitudeAndLongitudeGet

List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest();
    $request->accept = 'esse';
    $request->lang = 'ipsum';
    $request->latitude = 568434;
    $request->longitude = 135218;

    $requestSecurity = new ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->referenceData->referencesAirportsNearestByLatitudeAndLongitudeGet($request, $requestSecurity);

    if ($response->referencesAirportsNearestByLatitudeAndLongitudeGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## referencesCitiesByCityCodeGet

List all cities or one specific city. It is possible to request the response in a specific language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReferencesCitiesByCityCodeGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReferencesCitiesByCityCodeGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReferencesCitiesByCityCodeGetRequest();
    $request->accept = 'perferendis';
    $request->cityCode = 'ad';
    $request->lang = 'natus';
    $request->limit = 'sed';
    $request->offset = 'iste';

    $requestSecurity = new ReferencesCitiesByCityCodeGetSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->referenceData->referencesCitiesByCityCodeGet($request, $requestSecurity);

    if ($response->referencesCitiesByCityCodeGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## referencesCountriesByCountryCodeGet

List all countries or one specific country. It is possible to request the response in a specific language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReferencesCountriesByCountryCodeGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReferencesCountriesByCountryCodeGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReferencesCountriesByCountryCodeGetRequest();
    $request->accept = 'dolor';
    $request->countryCode = 'MU';
    $request->lang = 'laboriosam';
    $request->limit = 'hic';
    $request->offset = 'saepe';

    $requestSecurity = new ReferencesCountriesByCountryCodeGetSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->referenceData->referencesCountriesByCountryCodeGet($request, $requestSecurity);

    if ($response->referencesCountriesByCountryCodeGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
