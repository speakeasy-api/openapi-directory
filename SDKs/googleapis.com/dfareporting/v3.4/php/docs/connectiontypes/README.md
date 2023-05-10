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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'minus';
    $request->id = 'ba3f8941-aebc-40b8-8a69-24d3b2ecfcc8';
    $request->key = 'asperiores';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->profileId = 'iste';
    $request->quotaUser = 'corporis';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'illo';

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
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'at';
    $request->fields = 'possimus';
    $request->key = 'neque';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->profileId = 'vel';
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'quae';

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
