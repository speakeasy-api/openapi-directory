# defaultObjectAccessControls

### Available Operations

* [storageDefaultObjectAccessControlsDelete](#storagedefaultobjectaccesscontrolsdelete) - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
* [storageDefaultObjectAccessControlsGet](#storagedefaultobjectaccesscontrolsget) - Returns the default object ACL entry for the specified entity on the specified bucket.
* [storageDefaultObjectAccessControlsInsert](#storagedefaultobjectaccesscontrolsinsert) - Creates a new default object ACL entry on the specified bucket.
* [storageDefaultObjectAccessControlsList](#storagedefaultobjectaccesscontrolslist) - Retrieves default object ACL entries on the specified bucket.
* [storageDefaultObjectAccessControlsPatch](#storagedefaultobjectaccesscontrolspatch) - Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
* [storageDefaultObjectAccessControlsUpdate](#storagedefaultobjectaccesscontrolsupdate) - Updates a default object ACL entry on the specified bucket.

## storageDefaultObjectAccessControlsDelete

Permanently deletes the default object ACL entry for the specified entity on the specified bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageDefaultObjectAccessControlsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'harum';
    $request->entity = 'iusto';
    $request->fields = 'ipsum';
    $request->key = 'quisquam';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->userIp = 'tempore';

    $requestSecurity = new StorageDefaultObjectAccessControlsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->defaultObjectAccessControls->storageDefaultObjectAccessControlsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageDefaultObjectAccessControlsGet

Returns the default object ACL entry for the specified entity on the specified bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageDefaultObjectAccessControlsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'accusamus';
    $request->entity = 'numquam';
    $request->fields = 'enim';
    $request->key = 'dolorem';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->userIp = 'nihil';

    $requestSecurity = new StorageDefaultObjectAccessControlsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->defaultObjectAccessControls->storageDefaultObjectAccessControlsGet($request, $requestSecurity);

    if ($response->objectAccessControl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageDefaultObjectAccessControlsInsert

Creates a new default object ACL entry on the specified bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageDefaultObjectAccessControlsInsertRequest();
    $request->objectAccessControl = new ObjectAccessControl();
    $request->objectAccessControl->bucket = 'sit';
    $request->objectAccessControl->domain = 'expedita';
    $request->objectAccessControl->email = 'Candida.Kassulke64@gmail.com';
    $request->objectAccessControl->entity = 'quam';
    $request->objectAccessControl->entityId = 'ipsum';
    $request->objectAccessControl->etag = 'incidunt';
    $request->objectAccessControl->generation = 'qui';
    $request->objectAccessControl->id = '9cdb1a84-22bb-4679-9232-2715bf0cbb1e';
    $request->objectAccessControl->kind = 'ipsum';
    $request->objectAccessControl->object = 'veritatis';
    $request->objectAccessControl->role = 'nobis';
    $request->objectAccessControl->selfLink = 'quos';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'tempore';
    $request->fields = 'cupiditate';
    $request->key = 'aperiam';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->userIp = 'dolore';

    $requestSecurity = new StorageDefaultObjectAccessControlsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->defaultObjectAccessControls->storageDefaultObjectAccessControlsInsert($request, $requestSecurity);

    if ($response->objectAccessControl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageDefaultObjectAccessControlsList

Retrieves default object ACL entries on the specified bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageDefaultObjectAccessControlsListRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'labore';
    $request->fields = 'adipisci';
    $request->ifMetagenerationMatch = 'dolorum';
    $request->ifMetagenerationNotMatch = 'architecto';
    $request->key = 'quae';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quas';
    $request->userIp = 'itaque';

    $requestSecurity = new StorageDefaultObjectAccessControlsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->defaultObjectAccessControls->storageDefaultObjectAccessControlsList($request, $requestSecurity);

    if ($response->objectAccessControls !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageDefaultObjectAccessControlsPatch

Updates a default object ACL entry on the specified bucket. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageDefaultObjectAccessControlsPatchRequest();
    $request->objectAccessControl = new ObjectAccessControl();
    $request->objectAccessControl->bucket = 'consequatur';
    $request->objectAccessControl->domain = 'est';
    $request->objectAccessControl->email = 'Ozella70@hotmail.com';
    $request->objectAccessControl->entity = 'cupiditate';
    $request->objectAccessControl->entityId = 'qui';
    $request->objectAccessControl->etag = 'quae';
    $request->objectAccessControl->generation = 'laudantium';
    $request->objectAccessControl->id = '79fce953-f73e-4f7f-bc7a-bd74dd39c0f5';
    $request->objectAccessControl->kind = 'nulla';
    $request->objectAccessControl->object = 'fugit';
    $request->objectAccessControl->role = 'porro';
    $request->objectAccessControl->selfLink = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'doloribus';
    $request->entity = 'iusto';
    $request->fields = 'eligendi';
    $request->key = 'ducimus';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->userIp = 'tempora';

    $requestSecurity = new StorageDefaultObjectAccessControlsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->defaultObjectAccessControls->storageDefaultObjectAccessControlsPatch($request, $requestSecurity);

    if ($response->objectAccessControl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageDefaultObjectAccessControlsUpdate

Updates a default object ACL entry on the specified bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageDefaultObjectAccessControlsUpdateRequest();
    $request->objectAccessControl = new ObjectAccessControl();
    $request->objectAccessControl->bucket = 'ipsam';
    $request->objectAccessControl->domain = 'ea';
    $request->objectAccessControl->email = 'Hilbert18@gmail.com';
    $request->objectAccessControl->entity = 'ex';
    $request->objectAccessControl->entityId = 'laudantium';
    $request->objectAccessControl->etag = 'dicta';
    $request->objectAccessControl->generation = 'dolor';
    $request->objectAccessControl->id = 'f16d9f5f-ce6c-4556-946c-3e250fb008c4';
    $request->objectAccessControl->kind = 'fugit';
    $request->objectAccessControl->object = 'accusamus';
    $request->objectAccessControl->role = 'inventore';
    $request->objectAccessControl->selfLink = 'non';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'et';
    $request->entity = 'dolorum';
    $request->fields = 'laborum';
    $request->key = 'placeat';
    $request->oauthToken = 'velit';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->userIp = 'autem';

    $requestSecurity = new StorageDefaultObjectAccessControlsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->defaultObjectAccessControls->storageDefaultObjectAccessControlsUpdate($request, $requestSecurity);

    if ($response->objectAccessControl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
