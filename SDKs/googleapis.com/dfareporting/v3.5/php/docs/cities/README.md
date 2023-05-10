# cities

### Available Operations

* [dfareportingCitiesList](#dfareportingcitieslist) - Retrieves a list of cities, possibly filtered.

## dfareportingCitiesList

Retrieves a list of cities, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCitiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCitiesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCitiesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iure';
    $request->countryDartIds = [
        'minus',
    ];
    $request->dartIds = [
        'dolorum',
        'velit',
        'earum',
    ];
    $request->fields = 'praesentium';
    $request->key = 'error';
    $request->namePrefix = 'non';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->profileId = 'mollitia';
    $request->quotaUser = 'accusamus';
    $request->regionDartIds = [
        'cumque',
        'doloremque',
        'expedita',
    ];
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'eaque';

    $requestSecurity = new DfareportingCitiesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cities->dfareportingCitiesList($request, $requestSecurity);

    if ($response->citiesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
