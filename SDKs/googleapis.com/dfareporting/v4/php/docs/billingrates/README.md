# billingRates

### Available Operations

* [dfareportingBillingRatesList](#dfareportingbillingrateslist) - Retrieves a list of billing rates. This method supports paging.

## dfareportingBillingRatesList

Retrieves a list of billing rates. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBillingRatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBillingRatesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingBillingRatesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->billingProfileId = 'qui';
    $request->callback = 'necessitatibus';
    $request->fields = 'harum';
    $request->key = 'explicabo';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->profileId = 'aliquid';
    $request->quotaUser = 'modi';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new DfareportingBillingRatesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingRates->dfareportingBillingRatesList($request, $requestSecurity);

    if ($response->billingRatesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
