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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nisi';
    $request->countryDartIds = [
        'quis',
        'quibusdam',
        'nemo',
        'suscipit',
    ];
    $request->dartIds = [
        'sit',
        'quidem',
        'repellendus',
        'perferendis',
    ];
    $request->fields = 'id';
    $request->key = 'sapiente';
    $request->namePrefix = 'sed';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->profileId = 'repellat';
    $request->quotaUser = 'repudiandae';
    $request->regionDartIds = [
        'adipisci',
    ];
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'harum';

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
