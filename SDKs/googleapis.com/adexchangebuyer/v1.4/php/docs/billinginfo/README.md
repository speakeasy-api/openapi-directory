# billingInfo

### Available Operations

* [adexchangebuyerBillingInfoGet](#adexchangebuyerbillinginfoget) - Returns the billing information for one account specified by account ID.
* [adexchangebuyerBillingInfoList](#adexchangebuyerbillinginfolist) - Retrieves a list of billing information for all accounts of the authenticated user.

## adexchangebuyerBillingInfoGet

Returns the billing information for one account specified by account ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerBillingInfoGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerBillingInfoGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerBillingInfoGetRequest();
    $request->accountId = 520478;
    $request->alt = AltEnum::JSON;
    $request->fields = 'porro';
    $request->key = 'dolorum';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->userIp = 'officia';

    $requestSecurity = new AdexchangebuyerBillingInfoGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingInfo->adexchangebuyerBillingInfoGet($request, $requestSecurity);

    if ($response->billingInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerBillingInfoList

Retrieves a list of billing information for all accounts of the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerBillingInfoListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerBillingInfoListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerBillingInfoListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'occaecati';
    $request->key = 'fugit';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->userIp = 'optio';

    $requestSecurity = new AdexchangebuyerBillingInfoListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingInfo->adexchangebuyerBillingInfoList($request, $requestSecurity);

    if ($response->billingInfoList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
