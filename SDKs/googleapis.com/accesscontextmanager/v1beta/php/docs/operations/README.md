# operations

### Available Operations

* [accesscontextmanagerOperationsGet](#accesscontextmanageroperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## accesscontextmanagerOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerOperationsGetAccessLevelFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessLevelFormat = AccesscontextmanagerOperationsGetAccessLevelFormatEnum::CEL;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eligendi';
    $request->fields = 'sint';
    $request->key = 'aliquid';
    $request->name = 'Terence Marquardt';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'in';

    $requestSecurity = new AccesscontextmanagerOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->accesscontextmanagerOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
