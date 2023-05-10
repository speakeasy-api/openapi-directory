# browsers

### Available Operations

* [dfareportingBrowsersList](#dfareportingbrowserslist) - Retrieves a list of browsers.

## dfareportingBrowsersList

Retrieves a list of browsers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBrowsersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBrowsersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingBrowsersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'quasi';
    $request->key = 'dicta';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->profileId = 'doloremque';
    $request->quotaUser = 'earum';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new DfareportingBrowsersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->browsers->dfareportingBrowsersList($request, $requestSecurity);

    if ($response->browsersListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
