# pubprofiles

### Available Operations

* [adexchangebuyerPubprofilesList](#adexchangebuyerpubprofileslist) - Gets the requested publisher profile(s) by publisher accountId.

## adexchangebuyerPubprofilesList

Gets the requested publisher profile(s) by publisher accountId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPubprofilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPubprofilesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerPubprofilesListRequest();
    $request->accountId = 766964;
    $request->alt = AltEnum::JSON;
    $request->fields = 'consequuntur';
    $request->key = 'consequatur';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->userIp = 'sapiente';

    $requestSecurity = new AdexchangebuyerPubprofilesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pubprofiles->adexchangebuyerPubprofilesList($request, $requestSecurity);

    if ($response->getPublisherProfilesByAccountIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
