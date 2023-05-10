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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aperiam';
    $request->dartId = 'voluptates';
    $request->fields = 'laudantium';
    $request->key = 'tempora';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->profileId = 'omnis';
    $request->quotaUser = 'illum';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'tenetur';

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
    $request->accessToken = 'modi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'aliquam';
    $request->key = 'labore';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->profileId = 'sequi';
    $request->quotaUser = 'saepe';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'esse';

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
