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
    $request->accessToken = 'eveniet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->dartId = 'impedit';
    $request->fields = 'quas';
    $request->key = 'impedit';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->profileId = 'eligendi';
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'beatae';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'quidem';
    $request->key = 'illo';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->profileId = 'dignissimos';
    $request->quotaUser = 'minus';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'possimus';

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
