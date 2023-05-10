# geolocation

### Available Operations

* [geocodeAddress](#geocodeaddress) - Geocode Address
* [geocodeReverse](#geocodereverse) - Geocode Reverse
* [ipInfo](#ipinfo) - IP Info

## geocodeAddress

Geocode an address, partial address or just the name of a place

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GeocodeAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GeocodeAddressRequest();
    $request->address = '803 Lydia Bridge';
    $request->city = 'Port Verner';
    $request->countryCode = 'SB';
    $request->county = 'odit';
    $request->fuzzySearch = false;
    $request->houseNumber = 'at';
    $request->languageCode = 'at';
    $request->postalCode = '47845-7617';
    $request->state = 'officia';
    $request->street = '1597 Breitenberg Isle';

    $response = $sdk->geolocation->geocodeAddress($request);

    if ($response->geocodeAddressResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## geocodeReverse

Convert a geographic coordinate (latitude and longitude) into a real world address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GeocodeReverseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GeocodeReverseRequest();
    $request->languageCode = 'molestiae';
    $request->latitude = 'modi';
    $request->longitude = 'qui';
    $request->zoom = 'impedit';

    $response = $sdk->geolocation->geocodeReverse($request);

    if ($response->geocodeReverseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ipInfo

Get location information about an IP address and do reverse DNS (PTR) lookups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\IPInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IPInfoRequest();
    $request->ip = 'cum';
    $request->reverseLookup = false;

    $response = $sdk->geolocation->ipInfo($request);

    if ($response->ipInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
