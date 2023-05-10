# locations

### Available Operations

* [createLocation](#createlocation) - CreateLocation
* [listLocations](#listlocations) - ListLocations
* [retrieveLocation](#retrievelocation) - RetrieveLocation
* [updateLocation](#updatelocation) - UpdateLocation

## createLocation

Creates a location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\BusinessHours;
use \OpenAPI\OpenAPI\Models\Shared\BusinessHoursPeriod;
use \OpenAPI\OpenAPI\Models\Shared\Coordinates;
use \OpenAPI\OpenAPI\Models\Shared\TaxIds;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLocationRequest();
    $request->location = new Location();
    $request->location->address = new Address();
    $request->location->address->addressLine1 = 'labore';
    $request->location->address->addressLine2 = 'assumenda';
    $request->location->address->addressLine3 = 'aliquam';
    $request->location->address->administrativeDistrictLevel1 = 'quisquam';
    $request->location->address->administrativeDistrictLevel2 = 'provident';
    $request->location->address->administrativeDistrictLevel3 = 'laudantium';
    $request->location->address->country = 'Turks and Caicos Islands';
    $request->location->address->firstName = 'Adelia';
    $request->location->address->lastName = 'Schneider';
    $request->location->address->locality = 'aspernatur';
    $request->location->address->organization = 'nam';
    $request->location->address->postalCode = '55974-3868';
    $request->location->address->sublocality = 'iure';
    $request->location->address->sublocality2 = 'dolorem';
    $request->location->address->sublocality3 = 'commodi';
    $request->location->businessEmail = 'impedit';
    $request->location->businessHours = new BusinessHours();
    $request->location->businessHours->periods = [
        new BusinessHoursPeriod(),
        new BusinessHoursPeriod(),
    ];
    $request->location->businessName = 'aut';
    $request->location->capabilities = [
        'ad',
    ];
    $request->location->coordinates = new Coordinates();
    $request->location->coordinates->latitude = 609.95;
    $request->location->coordinates->longitude = 2295.67;
    $request->location->country = 'Svalbard & Jan Mayen Islands';
    $request->location->createdAt = 'praesentium';
    $request->location->currency = 'quidem';
    $request->location->description = 'cum';
    $request->location->facebookUrl = 'amet';
    $request->location->fullFormatLogoUrl = 'quasi';
    $request->location->id = '180f739a-e9e0-457e-b809-e2810331f398';
    $request->location->instagramUsername = 'beatae';
    $request->location->languageCode = 'at';
    $request->location->logoUrl = 'labore';
    $request->location->mcc = 'minus';
    $request->location->merchantId = 'esse';
    $request->location->name = 'Lisa Price IV';
    $request->location->phoneNumber = 'repellat';
    $request->location->posBackgroundUrl = 'velit';
    $request->location->status = 'porro';
    $request->location->taxIds = new TaxIds();
    $request->location->taxIds->euVat = 'provident';
    $request->location->taxIds->frNaf = 'consectetur';
    $request->location->taxIds->frSiret = 'eligendi';
    $request->location->timezone = 'dignissimos';
    $request->location->twitterUsername = 'consectetur';
    $request->location->type = 'soluta';
    $request->location->websiteUrl = 'natus';

    $requestSecurity = new CreateLocationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->locations->createLocation($request, $requestSecurity);

    if ($response->createLocationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLocations

Provides information of all locations of a business.

Many Square API endpoints require a `location_id` parameter.
The `id` field of the [`Location`](https://developer.squareup.com/reference/square_2021-08-18/objects/Location) objects returned by this
endpoint correspond to that `location_id` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListLocationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListLocationsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->locations->listLocations($requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveLocation

Retrieves details of a location. You can specify "main" 
as the location ID to retrieve details of the 
main location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveLocationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveLocationRequest();
    $request->locationId = 'temporibus';

    $requestSecurity = new RetrieveLocationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->locations->retrieveLocation($request, $requestSecurity);

    if ($response->retrieveLocationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLocation

Updates a location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\BusinessHours;
use \OpenAPI\OpenAPI\Models\Shared\BusinessHoursPeriod;
use \OpenAPI\OpenAPI\Models\Shared\Coordinates;
use \OpenAPI\OpenAPI\Models\Shared\TaxIds;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLocationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLocationRequest();
    $request->updateLocationRequest = new UpdateLocationRequest();
    $request->updateLocationRequest->location = new Location();
    $request->updateLocationRequest->location->address = new Address();
    $request->updateLocationRequest->location->address->addressLine1 = 'officia';
    $request->updateLocationRequest->location->address->addressLine2 = 'amet';
    $request->updateLocationRequest->location->address->addressLine3 = 'tenetur';
    $request->updateLocationRequest->location->address->administrativeDistrictLevel1 = 'aspernatur';
    $request->updateLocationRequest->location->address->administrativeDistrictLevel2 = 'quo';
    $request->updateLocationRequest->location->address->administrativeDistrictLevel3 = 'itaque';
    $request->updateLocationRequest->location->address->country = 'Suriname';
    $request->updateLocationRequest->location->address->firstName = 'Marcos';
    $request->updateLocationRequest->location->address->lastName = 'Kuhn';
    $request->updateLocationRequest->location->address->locality = 'vero';
    $request->updateLocationRequest->location->address->organization = 'qui';
    $request->updateLocationRequest->location->address->postalCode = '91134';
    $request->updateLocationRequest->location->address->sublocality = 'non';
    $request->updateLocationRequest->location->address->sublocality2 = 'ab';
    $request->updateLocationRequest->location->address->sublocality3 = 'illo';
    $request->updateLocationRequest->location->businessEmail = 'hic';
    $request->updateLocationRequest->location->businessHours = new BusinessHours();
    $request->updateLocationRequest->location->businessHours->periods = [
        new BusinessHoursPeriod(),
        new BusinessHoursPeriod(),
        new BusinessHoursPeriod(),
    ];
    $request->updateLocationRequest->location->businessName = 'delectus';
    $request->updateLocationRequest->location->capabilities = [
        'distinctio',
        'in',
    ];
    $request->updateLocationRequest->location->coordinates = new Coordinates();
    $request->updateLocationRequest->location->coordinates->latitude = 3499.93;
    $request->updateLocationRequest->location->coordinates->longitude = 2883;
    $request->updateLocationRequest->location->country = 'El Salvador';
    $request->updateLocationRequest->location->createdAt = 'repudiandae';
    $request->updateLocationRequest->location->currency = 'modi';
    $request->updateLocationRequest->location->description = 'in';
    $request->updateLocationRequest->location->facebookUrl = 'explicabo';
    $request->updateLocationRequest->location->fullFormatLogoUrl = 'accusamus';
    $request->updateLocationRequest->location->id = '802857a5-b404-463a-bd57-5f1400e764ad';
    $request->updateLocationRequest->location->instagramUsername = 'voluptate';
    $request->updateLocationRequest->location->languageCode = 'consectetur';
    $request->updateLocationRequest->location->logoUrl = 'nesciunt';
    $request->updateLocationRequest->location->mcc = 'quaerat';
    $request->updateLocationRequest->location->merchantId = 'itaque';
    $request->updateLocationRequest->location->name = 'Ralph Rau';
    $request->updateLocationRequest->location->phoneNumber = 'et';
    $request->updateLocationRequest->location->posBackgroundUrl = 'facilis';
    $request->updateLocationRequest->location->status = 'amet';
    $request->updateLocationRequest->location->taxIds = new TaxIds();
    $request->updateLocationRequest->location->taxIds->euVat = 'autem';
    $request->updateLocationRequest->location->taxIds->frNaf = 'fuga';
    $request->updateLocationRequest->location->taxIds->frSiret = 'alias';
    $request->updateLocationRequest->location->timezone = 'rem';
    $request->updateLocationRequest->location->twitterUsername = 'aut';
    $request->updateLocationRequest->location->type = 'quos';
    $request->updateLocationRequest->location->websiteUrl = 'laudantium';
    $request->locationId = 'repellendus';

    $requestSecurity = new UpdateLocationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->locations->updateLocation($request, $requestSecurity);

    if ($response->updateLocationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
