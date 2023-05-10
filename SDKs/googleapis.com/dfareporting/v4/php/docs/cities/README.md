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
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veritatis';
    $request->countryDartIds = [
        'laudantium',
    ];
    $request->dartIds = [
        'dolor',
        'voluptates',
    ];
    $request->fields = 'tempora';
    $request->key = 'magni';
    $request->namePrefix = 'rerum';
    $request->oauthToken = 'doloremque';
    $request->prettyPrint = false;
    $request->profileId = 'voluptatem';
    $request->quotaUser = 'eum';
    $request->regionDartIds = [
        'eum',
        'reprehenderit',
        'voluptatum',
        'blanditiis',
    ];
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'atque';

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
