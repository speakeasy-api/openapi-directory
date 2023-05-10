# mobileCarriers

### Available Operations

* [dfareportingMobileCarriersGet](#dfareportingmobilecarriersget) - Gets one mobile carrier by ID.
* [dfareportingMobileCarriersList](#dfareportingmobilecarrierslist) - Retrieves a list of mobile carriers.

## dfareportingMobileCarriersGet

Gets one mobile carrier by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingMobileCarriersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingMobileCarriersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingMobileCarriersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'at';
    $request->alt = AltEnum::JSON;
    $request->callback = 'amet';
    $request->fields = 'aut';
    $request->id = '84fbba5c-ceff-45cb-81fe-51e528a45ac8';
    $request->key = 'explicabo';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->profileId = 'praesentium';
    $request->quotaUser = 'ullam';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'corrupti';

    $requestSecurity = new DfareportingMobileCarriersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mobileCarriers->dfareportingMobileCarriersGet($request, $requestSecurity);

    if ($response->mobileCarrier !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingMobileCarriersList

Retrieves a list of mobile carriers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingMobileCarriersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingMobileCarriersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingMobileCarriersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'placeat';
    $request->fields = 'animi';
    $request->key = 'expedita';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->profileId = 'atque';
    $request->quotaUser = 'assumenda';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new DfareportingMobileCarriersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mobileCarriers->dfareportingMobileCarriersList($request, $requestSecurity);

    if ($response->mobileCarriersListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
