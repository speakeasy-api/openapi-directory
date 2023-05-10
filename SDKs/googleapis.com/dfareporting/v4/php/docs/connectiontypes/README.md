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
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nostrum';
    $request->fields = 'atque';
    $request->id = '1a58208c-54fe-4fa9-895f-2eac5565d307';
    $request->key = 'minus';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->profileId = 'recusandae';
    $request->quotaUser = 'voluptates';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'dicta';

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
    $request->accessToken = 'sit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'sed';
    $request->key = 'deleniti';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->profileId = 'nesciunt';
    $request->quotaUser = 'delectus';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'aliquam';

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
