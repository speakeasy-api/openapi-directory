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
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'provident';
    $request->id = '2f4f127f-b0e0-4bf1-b821-7978d0acca77';
    $request->key = 'mollitia';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->profileId = 'tempore';
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'esse';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'est';
    $request->fields = 'nemo';
    $request->key = 'magni';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->profileId = 'quaerat';
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'laboriosam';

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
