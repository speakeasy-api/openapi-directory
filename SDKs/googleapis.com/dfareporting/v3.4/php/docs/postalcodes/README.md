# postalCodes

### Available Operations

* [dfareportingPostalCodesGet](#dfareportingpostalcodesget) - Gets one postal code by ID.
* [dfareportingPostalCodesList](#dfareportingpostalcodeslist) - Retrieves a list of postal codes.

## dfareportingPostalCodesGet

Gets one postal code by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPostalCodesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPostalCodesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPostalCodesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iste';
    $request->code = 'amet';
    $request->fields = 'quae';
    $request->key = 'pariatur';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->profileId = 'velit';
    $request->quotaUser = 'debitis';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'tempore';

    $requestSecurity = new DfareportingPostalCodesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->postalCodes->dfareportingPostalCodesGet($request, $requestSecurity);

    if ($response->postalCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingPostalCodesList

Retrieves a list of postal codes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPostalCodesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPostalCodesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPostalCodesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'facere';
    $request->key = 'iste';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->profileId = 'similique';
    $request->quotaUser = 'optio';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new DfareportingPostalCodesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->postalCodes->dfareportingPostalCodesList($request, $requestSecurity);

    if ($response->postalCodesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
