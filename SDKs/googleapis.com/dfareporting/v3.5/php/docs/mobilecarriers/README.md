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
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->fields = 'magni';
    $request->id = '046b64e9-9fb0-4e67-a094-fdfed5540ef5';
    $request->key = 'neque';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->profileId = 'velit';
    $request->quotaUser = 'ut';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'quasi';

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
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'recusandae';
    $request->fields = 'perspiciatis';
    $request->key = 'natus';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->profileId = 'dolorem';
    $request->quotaUser = 'sunt';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'nulla';

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
