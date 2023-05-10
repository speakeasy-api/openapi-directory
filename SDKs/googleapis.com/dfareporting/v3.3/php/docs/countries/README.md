# countries

### Available Operations

* [dfareportingCountriesGet](#dfareportingcountriesget) - Gets one country by ID.
* [dfareportingCountriesList](#dfareportingcountrieslist) - Retrieves a list of countries.

## dfareportingCountriesGet

Gets one country by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCountriesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCountriesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCountriesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->dartId = 'ipsum';
    $request->fields = 'ut';
    $request->key = 'quaerat';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->profileId = 'praesentium';
    $request->quotaUser = 'eveniet';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'expedita';

    $requestSecurity = new DfareportingCountriesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->countries->dfareportingCountriesGet($request, $requestSecurity);

    if ($response->country !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCountriesList

Retrieves a list of countries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCountriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCountriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCountriesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minus';
    $request->fields = 'quos';
    $request->key = 'temporibus';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->profileId = 'iusto';
    $request->quotaUser = 'enim';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'aperiam';

    $requestSecurity = new DfareportingCountriesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->countries->dfareportingCountriesList($request, $requestSecurity);

    if ($response->countriesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
