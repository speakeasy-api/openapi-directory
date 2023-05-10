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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->clientOperationId = 'accusamus';
    $request->fields = 'commodi';
    $request->key = 'repudiandae';
    $request->managedZone = 'quae';
    $request->oauthToken = 'ipsum';
    $request->operation = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'molestias';
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'modi';

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
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'repudiandae';
    $request->key = 'sint';
    $request->managedZone = 'veritatis';
    $request->maxResults = 929297;
    $request->oauthToken = 'incidunt';
    $request->pageToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'consequatur';
    $request->quotaUser = 'est';
    $request->sortBy = DnsManagedZoneOperationsListSortByEnum::ID;
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'deserunt';

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
