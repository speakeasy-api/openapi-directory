# offers

### Available Operations

* [allFares](#allfares) - All Fares
* [bestFares](#bestfares) - Best Fares
* [deepLinks](#deeplinks) - Deep Links
* [fares](#fares) - Fares
* [faresSubscriptions](#faressubscriptions) - Fares Subscriptions
* [lhDeepLinksFFP](#lhdeeplinksffp) - LH Deep Links - FFP
* [lhDeepLinksITCO](#lhdeeplinksitco) - LH Deep Links - ITCO
* [lowestFares](#lowestfares) - Lowest Fares
* [ondRoute](#ondroute) - OND Route
* [ondStatus](#ondstatus) - OND Status
* [topOND](#topond) - Top OND

## allFares

Retrieves all available fares for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AllFaresRequest;
use \OpenAPI\OpenAPI\Models\Operations\AllFaresSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllFaresRequest();
    $request->accept = 'unde';
    $request->cabinClass = 'nulla';
    $request->catalogues = 'corrupti';
    $request->destination = 'illum';
    $request->fareFamily = 'vel';
    $request->origin = 'error';
    $request->returnDate = 'deserunt';
    $request->trackingid = 'suscipit';
    $request->travelDate = 'iure';
    $request->travelers = 'magnam';

    $requestSecurity = new AllFaresSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->offers->allFares($request, $requestSecurity);

    if ($response->allFares200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bestFares

Retrieve best fares for the requested journey across multiple days or multiple months.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BestFaresRequest;
use \OpenAPI\OpenAPI\Models\Operations\BestFaresSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BestFaresRequest();
    $request->accept = 'debitis';
    $request->cabinClass = 'ipsa';
    $request->catalogues = 'delectus';
    $request->country = 'Ethiopia';
    $request->destination = 'suscipit';
    $request->fareFamily = 'molestiae';
    $request->origin = 'minus';
    $request->range = 'placeat';
    $request->trackingid = 'voluptatum';
    $request->travelDate = 'iusto';
    $request->tripDuration = 'excepturi';

    $requestSecurity = new BestFaresSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->offers->bestFares($request, $requestSecurity);

    if ($response->bestFares200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deepLinks

Returns valid deep links for the provided input parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeepLinksRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeepLinksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeepLinksRequest();
    $request->accept = 'nisi';
    $request->cabinClass = 'recusandae';
    $request->catalogues = 'temporibus';
    $request->country = 'Bangladesh';
    $request->destination = 'quis';
    $request->destinationName = 'veritatis';
    $request->encryptionKey = 'deserunt';
    $request->fare = 'perferendis';
    $request->fareCurrency = 'ipsam';
    $request->lang = 'repellendus';
    $request->netFare = 'sapiente';
    $request->origin = 'quo';
    $request->originName = 'odit';
    $request->outboundSegments = 'at';
    $request->partnerid = 'at';
    $request->returnDate = 'maiores';
    $request->returnSegments = 'molestiae';
    $request->trackingid = 'quod';
    $request->travelDate = 'quod';
    $request->travelers = 'esse';

    $requestSecurity = new DeepLinksSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->offers->deepLinks($request, $requestSecurity);

    if ($response->deepLinks200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fares

Retrieve all available fares per fare family for a specific Origin & Destination on a given date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FaresRequest;
use \OpenAPI\OpenAPI\Models\Operations\FaresSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FaresRequest();
    $request->accept = 'totam';
    $request->carriers = 'porro';
    $request->catalogues = 'dolorum';
    $request->fareTypes = 'dicta';
    $request->segments = 'nam';
    $request->travelers = 'officia';

    $requestSecurity = new FaresSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->offers->fares($request, $requestSecurity);

    if ($response->fares200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## faresSubscriptions

Create a subscription for best price O&D. Receive regular updates on lowest fares

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FaresSubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FaresSubscriptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FaresSubscriptionsRequest();
    $request->accept = 'occaecati';
    $request->cabinClass = 'fugit';
    $request->country = 'Maldives';
    $request->destination = 'hic';
    $request->email = 'Joy.Breitenberg@hotmail.com';
    $request->lang = 'modi';
    $request->origin = 'qui';
    $request->trackingid = 'impedit';
    $request->tripDuration = 'cum';

    $requestSecurity = new FaresSubscriptionsSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->offers->faresSubscriptions($request, $requestSecurity);

    if ($response->faresSubscriptions200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lhDeepLinksFFP

Returns valid LH deep links (FFP - links to flight selection screen on LH.COM)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LHDeepLinksFFPRequest;
use \OpenAPI\OpenAPI\Models\Operations\LHDeepLinksFFPSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LHDeepLinksFFPRequest();
    $request->accept = 'esse';
    $request->cabinClass = 'ipsum';
    $request->catalogues = 'excepturi';
    $request->country = 'Bulgaria';
    $request->destination = 'perferendis';
    $request->encryptionKey = 'ad';
    $request->lang = 'natus';
    $request->origin = 'sed';
    $request->partnerid = 'iste';
    $request->returnDate = 'dolor';
    $request->trackingid = 'natus';
    $request->travelDate = 'laboriosam';
    $request->travelers = 'hic';

    $requestSecurity = new LHDeepLinksFFPSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->offers->lhDeepLinksFFP($request, $requestSecurity);

    if ($response->lhDeepLinksFFP200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lhDeepLinksITCO

Returns valid LH deep links (ITCO - links to shopping cart on LH.COM)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LHDeepLinksITCORequest;
use \OpenAPI\OpenAPI\Models\Operations\LHDeepLinksITCOSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LHDeepLinksITCORequest();
    $request->accept = 'saepe';
    $request->cabinClass = 'fuga';
    $request->catalogues = 'in';
    $request->country = 'Guernsey';
    $request->destination = 'iste';
    $request->encryptionKey = 'iure';
    $request->fare = 'saepe';
    $request->fareCurrency = 'quidem';
    $request->lang = 'architecto';
    $request->netFare = 'ipsa';
    $request->origin = 'reiciendis';
    $request->outboundSegments = 'est';
    $request->partnerid = 'mollitia';
    $request->returnDate = 'laborum';
    $request->returnSegments = 'dolores';
    $request->trackingid = 'dolorem';
    $request->travelDate = 'corporis';
    $request->travelers = 'explicabo';

    $requestSecurity = new LHDeepLinksITCOSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->offers->lhDeepLinksITCO($request, $requestSecurity);

    if ($response->lhDeepLinksITCO200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lowestFares

Retrieve lowest fare for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS & LH

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LowestFaresRequest;
use \OpenAPI\OpenAPI\Models\Operations\LowestFaresSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LowestFaresRequest();
    $request->accept = 'nobis';
    $request->cabinClass = 'enim';
    $request->catalogues = 'omnis';
    $request->country = 'Guinea';
    $request->destination = 'minima';
    $request->fareFamily = 'excepturi';
    $request->origin = 'accusantium';
    $request->returnDate = 'iure';
    $request->travelDate = 'culpa';
    $request->travelers = 'doloribus';

    $requestSecurity = new LowestFaresSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->offers->lowestFares($request, $requestSecurity);

    if ($response->lowestFares200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ondRoute

Returns LH route origin & destination information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ONDRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\ONDRouteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ONDRouteRequest();
    $request->accept = 'sapiente';
    $request->catalogues = 'architecto';
    $request->destination = 'mollitia';
    $request->limit = 'dolorem';
    $request->offset = 'culpa';
    $request->origin = 'consequuntur';

    $requestSecurity = new ONDRouteSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->offers->ondRoute($request, $requestSecurity);

    if ($response->ondRoute200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ondStatus

Returns LH network route status information. Search for recently added or retired routes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ONDStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\ONDStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ONDStatusRequest();
    $request->accept = 'repellat';
    $request->catalogues = 'mollitia';
    $request->newRoutes = 'occaecati';
    $request->oldRoutes = 'numquam';

    $requestSecurity = new ONDStatusSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->offers->ondStatus($request, $requestSecurity);

    if ($response->ondStatus200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## topOND

Returns LH Top routes per country or across all countries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TopONDRequest;
use \OpenAPI\OpenAPI\Models\Operations\TopONDSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TopONDRequest();
    $request->accept = 'commodi';
    $request->catalogues = 'quam';
    $request->origin = 'molestiae';

    $requestSecurity = new TopONDSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->offers->topOND($request, $requestSecurity);

    if ($response->topOND200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
