# objectAccessControls

### Available Operations

* [storageObjectAccessControlsDelete](#storageobjectaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified object.
* [storageObjectAccessControlsGet](#storageobjectaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified object.
* [storageObjectAccessControlsInsert](#storageobjectaccesscontrolsinsert) - Creates a new ACL entry on the specified object.
* [storageObjectAccessControlsList](#storageobjectaccesscontrolslist) - Retrieves ACL entries on the specified object.
* [storageObjectAccessControlsPatch](#storageobjectaccesscontrolspatch) - Updates an ACL entry on the specified object. This method supports patch semantics.
* [storageObjectAccessControlsUpdate](#storageobjectaccesscontrolsupdate) - Updates an ACL entry on the specified object.

## storageObjectAccessControlsDelete

Permanently deletes the ACL entry for the specified entity on the specified object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectAccessControlsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'nobis';
    $request->entity = 'quas';
    $request->fields = 'assumenda';
    $request->generation = 'nulla';
    $request->key = 'voluptas';
    $request->oauthToken = 'libero';
    $request->object = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->userIp = 'numquam';

    $requestSecurity = new StorageObjectAccessControlsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objectAccessControls->storageObjectAccessControlsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectAccessControlsGet

Returns the ACL entry for the specified entity on the specified object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectAccessControlsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'explicabo';
    $request->entity = 'provident';
    $request->fields = 'ipsa';
    $request->generation = 'molestiae';
    $request->key = 'magnam';
    $request->oauthToken = 'odio';
    $request->object = 'eius';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->userIp = 'esse';

    $requestSecurity = new StorageObjectAccessControlsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objectAccessControls->storageObjectAccessControlsGet($request, $requestSecurity);

    if ($response->objectAccessControl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectAccessControlsInsert

Creates a new ACL entry on the specified object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectAccessControlsInsertRequest();
    $request->objectAccessControl = new ObjectAccessControl();
    $request->objectAccessControl->bucket = 'rem';
    $request->objectAccessControl->domain = 'fuga';
    $request->objectAccessControl->email = 'Maurice43@yahoo.com';
    $request->objectAccessControl->entity = 'suscipit';
    $request->objectAccessControl->entityId = 'assumenda';
    $request->objectAccessControl->etag = 'eos';
    $request->objectAccessControl->generation = 'praesentium';
    $request->objectAccessControl->id = 'c10ab3cd-ca42-4519-84e5-23c7e0bc7178';
    $request->objectAccessControl->kind = 'accusamus';
    $request->objectAccessControl->object = 'aliquam';
    $request->objectAccessControl->role = 'odio';
    $request->objectAccessControl->selfLink = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'commodi';
    $request->fields = 'sapiente';
    $request->generation = 'dolores';
    $request->key = 'deserunt';
    $request->oauthToken = 'molestiae';
    $request->object = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->userIp = 'eum';

    $requestSecurity = new StorageObjectAccessControlsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objectAccessControls->storageObjectAccessControlsInsert($request, $requestSecurity);

    if ($response->objectAccessControl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectAccessControlsList

Retrieves ACL entries on the specified object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectAccessControlsListRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'quas';
    $request->fields = 'praesentium';
    $request->generation = 'consequuntur';
    $request->key = 'deleniti';
    $request->oauthToken = 'fugit';
    $request->object = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->userIp = 'incidunt';

    $requestSecurity = new StorageObjectAccessControlsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objectAccessControls->storageObjectAccessControlsList($request, $requestSecurity);

    if ($response->objectAccessControls !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectAccessControlsPatch

Updates an ACL entry on the specified object. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectAccessControlsPatchRequest();
    $request->objectAccessControl = new ObjectAccessControl();
    $request->objectAccessControl->bucket = 'atque';
    $request->objectAccessControl->domain = 'explicabo';
    $request->objectAccessControl->email = 'Gladys.Corkery18@gmail.com';
    $request->objectAccessControl->entity = 'explicabo';
    $request->objectAccessControl->entityId = 'saepe';
    $request->objectAccessControl->etag = 'occaecati';
    $request->objectAccessControl->generation = 'atque';
    $request->objectAccessControl->id = '17ee17cb-e61e-46b7-b95b-c0ab3c20c4f3';
    $request->objectAccessControl->kind = 'esse';
    $request->objectAccessControl->object = 'blanditiis';
    $request->objectAccessControl->role = 'provident';
    $request->objectAccessControl->selfLink = 'a';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'nulla';
    $request->entity = 'quas';
    $request->fields = 'esse';
    $request->generation = 'quasi';
    $request->key = 'a';
    $request->oauthToken = 'error';
    $request->object = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->userIp = 'possimus';

    $requestSecurity = new StorageObjectAccessControlsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objectAccessControls->storageObjectAccessControlsPatch($request, $requestSecurity);

    if ($response->objectAccessControl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectAccessControlsUpdate

Updates an ACL entry on the specified object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectAccessControlsUpdateRequest();
    $request->objectAccessControl = new ObjectAccessControl();
    $request->objectAccessControl->bucket = 'quia';
    $request->objectAccessControl->domain = 'eveniet';
    $request->objectAccessControl->email = 'Raven9@hotmail.com';
    $request->objectAccessControl->entity = 'similique';
    $request->objectAccessControl->entityId = 'culpa';
    $request->objectAccessControl->etag = 'aliquid';
    $request->objectAccessControl->generation = 'tenetur';
    $request->objectAccessControl->id = '1e674bdb-04f1-4575-a082-d68ea19f1d17';
    $request->objectAccessControl->kind = 'ipsa';
    $request->objectAccessControl->object = 'minima';
    $request->objectAccessControl->role = 'veritatis';
    $request->objectAccessControl->selfLink = 'consectetur';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'adipisci';
    $request->entity = 'iste';
    $request->fields = 'temporibus';
    $request->generation = 'accusantium';
    $request->key = 'rem';
    $request->oauthToken = 'aut';
    $request->object = 'laudantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->userIp = 'mollitia';

    $requestSecurity = new StorageObjectAccessControlsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objectAccessControls->storageObjectAccessControlsUpdate($request, $requestSecurity);

    if ($response->objectAccessControl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
