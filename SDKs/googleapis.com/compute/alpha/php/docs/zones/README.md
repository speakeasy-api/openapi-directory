# zones

### Available Operations

* [computeZonesGet](#computezonesget) - Returns the specified Zone resource.
* [computeZonesList](#computezoneslist) - Retrieves the list of Zone resources available to the specified project.

## computeZonesGet

Returns the specified Zone resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZonesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZonesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZonesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZonesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZonesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeZonesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloremque';
    $request->fields = 'ipsam';
    $request->key = 'officia';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->project = 'dignissimos';
    $request->quotaUser = 'exercitationem';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'sapiente';
    $request->userIp = 'enim';
    $request->zone = 'recusandae';

    $requestSecurity = new ComputeZonesGetSecurity();
    $requestSecurity->option1 = new ComputeZonesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->zones->computeZonesGet($request, $requestSecurity);

    if ($response->zone !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeZonesList

Retrieves the list of Zone resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZonesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZonesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZonesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZonesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZonesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeZonesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sint';
    $request->fields = 'nulla';
    $request->filter = 'beatae';
    $request->key = 'nesciunt';
    $request->maxResults = 226988;
    $request->oauthToken = 'rerum';
    $request->orderBy = 'qui';
    $request->pageToken = 'expedita';
    $request->prettyPrint = false;
    $request->project = 'ratione';
    $request->quotaUser = 'atque';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'itaque';
    $request->userIp = 'neque';

    $requestSecurity = new ComputeZonesListSecurity();
    $requestSecurity->option1 = new ComputeZonesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->zones->computeZonesList($request, $requestSecurity);

    if ($response->zoneList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
