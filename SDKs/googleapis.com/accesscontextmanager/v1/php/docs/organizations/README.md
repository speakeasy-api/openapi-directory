# organizations

### Available Operations

* [accesscontextmanagerOrganizationsGcpUserAccessBindingsCreate](#accesscontextmanagerorganizationsgcpuseraccessbindingscreate) - Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.
* [accesscontextmanagerOrganizationsGcpUserAccessBindingsDelete](#accesscontextmanagerorganizationsgcpuseraccessbindingsdelete) - Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.
* [accesscontextmanagerOrganizationsGcpUserAccessBindingsGet](#accesscontextmanagerorganizationsgcpuseraccessbindingsget) - Gets the GcpUserAccessBinding with the given name.
* [accesscontextmanagerOrganizationsGcpUserAccessBindingsList](#accesscontextmanagerorganizationsgcpuseraccessbindingslist) - Lists all GcpUserAccessBindings for a Google Cloud organization.
* [accesscontextmanagerOrganizationsGcpUserAccessBindingsPatch](#accesscontextmanagerorganizationsgcpuseraccessbindingspatch) - Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.

## accesscontextmanagerOrganizationsGcpUserAccessBindingsCreate

Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GcpUserAccessBinding;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->gcpUserAccessBinding = new GcpUserAccessBinding();
    $request->gcpUserAccessBinding->accessLevels = [
        'saepe',
    ];
    $request->gcpUserAccessBinding->dryRunAccessLevels = [
        'accusantium',
        'consequuntur',
        'praesentium',
        'natus',
    ];
    $request->gcpUserAccessBinding->groupKey = 'magni';
    $request->gcpUserAccessBinding->name = 'Angelica Stanton';
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odit';
    $request->fields = 'ea';
    $request->key = 'accusantium';
    $request->oauthToken = 'ab';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->accesscontextmanagerOrganizationsGcpUserAccessBindingsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerOrganizationsGcpUserAccessBindingsDelete

Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'pariatur';
    $request->fields = 'nemo';
    $request->key = 'voluptatibus';
    $request->name = 'Miss Ginger Feeney';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->accesscontextmanagerOrganizationsGcpUserAccessBindingsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerOrganizationsGcpUserAccessBindingsGet

Gets the GcpUserAccessBinding with the given name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eaque';
    $request->fields = 'quis';
    $request->filter = AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum::LEVEL_FORMAT_UNSPECIFIED;
    $request->key = 'eos';
    $request->name = 'Jacqueline Schimmel';
    $request->oauthToken = 'vero';
    $request->pageSize = 345352;
    $request->pageToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->accesscontextmanagerOrganizationsGcpUserAccessBindingsGet($request, $requestSecurity);

    if ($response->gcpUserAccessBinding !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerOrganizationsGcpUserAccessBindingsList

Lists all GcpUserAccessBindings for a Google Cloud organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerOrganizationsGcpUserAccessBindingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequuntur';
    $request->fields = 'blanditiis';
    $request->key = 'error';
    $request->oauthToken = 'eaque';
    $request->pageSize = 577229;
    $request->pageToken = 'rerum';
    $request->parent = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new AccesscontextmanagerOrganizationsGcpUserAccessBindingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->accesscontextmanagerOrganizationsGcpUserAccessBindingsList($request, $requestSecurity);

    if ($response->listGcpUserAccessBindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerOrganizationsGcpUserAccessBindingsPatch

Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GcpUserAccessBinding;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->gcpUserAccessBinding = new GcpUserAccessBinding();
    $request->gcpUserAccessBinding->accessLevels = [
        'deleniti',
        'pariatur',
        'provident',
    ];
    $request->gcpUserAccessBinding->dryRunAccessLevels = [
        'libero',
        'delectus',
        'quaerat',
        'quos',
    ];
    $request->gcpUserAccessBinding->groupKey = 'aliquid';
    $request->gcpUserAccessBinding->name = 'Dawn Fadel';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'voluptate';
    $request->key = 'dignissimos';
    $request->name = 'Allen Parisian Jr.';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->updateMask = 'odio';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->accesscontextmanagerOrganizationsGcpUserAccessBindingsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
