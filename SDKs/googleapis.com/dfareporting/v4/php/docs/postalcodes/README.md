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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::JSON;
    $request->callback = 'adipisci';
    $request->code = 'tempora';
    $request->fields = 'modi';
    $request->key = 'soluta';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->profileId = 'ducimus';
    $request->quotaUser = 'vitae';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'autem';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'necessitatibus';
    $request->fields = 'vero';
    $request->key = 'facilis';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->profileId = 'asperiores';
    $request->quotaUser = 'rem';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'quam';

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
