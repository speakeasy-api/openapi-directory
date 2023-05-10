# managedZoneOperations

### Available Operations

* [dnsManagedZoneOperationsGet](#dnsmanagedzoneoperationsget) - Fetches the representation of an existing Operation.
* [dnsManagedZoneOperationsList](#dnsmanagedzoneoperationslist) - Enumerates Operations for the given ManagedZone.

## dnsManagedZoneOperationsGet

Fetches the representation of an existing Operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZoneOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZoneOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZoneOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZoneOperationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZoneOperationsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZoneOperationsGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsManagedZoneOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->clientOperationId = 'molestias';
    $request->fields = 'excepturi';
    $request->key = 'pariatur';
    $request->location = 'modi';
    $request->managedZone = 'praesentium';
    $request->oauthToken = 'rem';
    $request->operation = 'voluptates';
    $request->prettyPrint = false;
    $request->project = 'quasi';
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new DnsManagedZoneOperationsGetSecurity();
    $requestSecurity->option1 = new DnsManagedZoneOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedZoneOperations->dnsManagedZoneOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsManagedZoneOperationsList

Enumerates Operations for the given ManagedZone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZoneOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZoneOperationsListSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZoneOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZoneOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZoneOperationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZoneOperationsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZoneOperationsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsManagedZoneOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'est';
    $request->key = 'quibusdam';
    $request->location = 'explicabo';
    $request->managedZone = 'deserunt';
    $request->maxResults = 716327;
    $request->oauthToken = 'quibusdam';
    $request->pageToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'qui';
    $request->sortBy = DnsManagedZoneOperationsListSortByEnum::START_TIME;
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new DnsManagedZoneOperationsListSecurity();
    $requestSecurity->option1 = new DnsManagedZoneOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedZoneOperations->dnsManagedZoneOperationsList($request, $requestSecurity);

    if ($response->managedZoneOperationsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
