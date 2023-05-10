# connectionTypes

### Available Operations

* [dfareportingConnectionTypesGet](#dfareportingconnectiontypesget) - Gets one connection type by ID.
* [dfareportingConnectionTypesList](#dfareportingconnectiontypeslist) - Retrieves a list of connection types.

## dfareportingConnectionTypesGet

Gets one connection type by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingConnectionTypesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingConnectionTypesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingConnectionTypesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magni';
    $request->fields = 'tempora';
    $request->id = 'd3b2ecfc-c8f8-4950-90f5-dd3d6fa1804e';
    $request->key = 'ad';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->profileId = 'quisquam';
    $request->quotaUser = 'quas';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new DfareportingConnectionTypesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->connectionTypes->dfareportingConnectionTypesGet($request, $requestSecurity);

    if ($response->connectionType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingConnectionTypesList

Retrieves a list of connection types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingConnectionTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingConnectionTypesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingConnectionTypesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'est';
    $request->fields = 'dolor';
    $request->key = 'aliquid';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->profileId = 'cumque';
    $request->quotaUser = 'rem';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'ducimus';

    $requestSecurity = new DfareportingConnectionTypesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->connectionTypes->dfareportingConnectionTypesList($request, $requestSecurity);

    if ($response->connectionTypesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
