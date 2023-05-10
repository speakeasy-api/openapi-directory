# defaultObjectAccessControls

### Available Operations

* [storageDefaultObjectAccessControlsDelete](#storagedefaultobjectaccesscontrolsdelete) - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
* [storageDefaultObjectAccessControlsGet](#storagedefaultobjectaccesscontrolsget) - Returns the default object ACL entry for the specified entity on the specified bucket.
* [storageDefaultObjectAccessControlsInsert](#storagedefaultobjectaccesscontrolsinsert) - Creates a new default object ACL entry on the specified bucket.
* [storageDefaultObjectAccessControlsList](#storagedefaultobjectaccesscontrolslist) - Retrieves default object ACL entries on the specified bucket.
* [storageDefaultObjectAccessControlsPatch](#storagedefaultobjectaccesscontrolspatch) - Patches a default object ACL entry on the specified bucket.
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
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageDefaultObjectAccessControlsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'aspernatur';
    $request->entity = 'minima';
    $request->fields = 'eaque';
    $request->key = 'a';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'aut';
    $request->userIp = 'deleniti';
    $request->userProject = 'impedit';

    $requestSecurity = new StorageDefaultObjectAccessControlsDeleteSecurity();
    $requestSecurity->option1 = new StorageDefaultObjectAccessControlsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

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
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageDefaultObjectAccessControlsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'aliquam';
    $request->entity = 'fugit';
    $request->fields = 'accusamus';
    $request->key = 'inventore';
    $request->oauthToken = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->uploadType = 'dolorum';
    $request->userIp = 'laborum';
    $request->userProject = 'placeat';

    $requestSecurity = new StorageDefaultObjectAccessControlsGetSecurity();
    $requestSecurity->option1 = new StorageDefaultObjectAccessControlsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

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
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageDefaultObjectAccessControlsInsertRequest();
    $request->objectAccessControl = new ObjectAccessControl();
    $request->objectAccessControl->bucket = 'velit';
    $request->objectAccessControl->domain = 'eum';
    $request->objectAccessControl->email = 'Nia_Lynch37@yahoo.com';
    $request->objectAccessControl->entity = 'libero';
    $request->objectAccessControl->entityId = 'quasi';
    $request->objectAccessControl->etag = 'tempora';
    $request->objectAccessControl->generation = 'numquam';
    $request->objectAccessControl->id = '29074747-78a7-4bd4-a6d2-8c10ab3cdca4';
    $request->objectAccessControl->kind = 'eos';
    $request->objectAccessControl->object = 'voluptas';
    $request->objectAccessControl->projectTeam = new ObjectAccessControlProjectTeam();
    $request->objectAccessControl->projectTeam->projectNumber = 'ab';
    $request->objectAccessControl->projectTeam->team = 'cupiditate';
    $request->objectAccessControl->role = 'consequatur';
    $request->objectAccessControl->selfLink = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'debitis';
    $request->fields = 'ipsam';
    $request->key = 'aspernatur';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'esse';
    $request->userIp = 'recusandae';
    $request->userProject = 'aperiam';

    $requestSecurity = new StorageDefaultObjectAccessControlsInsertSecurity();
    $requestSecurity->option1 = new StorageDefaultObjectAccessControlsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

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
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageDefaultObjectAccessControlsListRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'distinctio';
    $request->fields = 'quod';
    $request->ifMetagenerationMatch = 'dignissimos';
    $request->ifMetagenerationNotMatch = 'inventore';
    $request->key = 'nihil';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'aliquam';
    $request->userIp = 'odio';
    $request->userProject = 'occaecati';

    $requestSecurity = new StorageDefaultObjectAccessControlsListSecurity();
    $requestSecurity->option1 = new StorageDefaultObjectAccessControlsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->defaultObjectAccessControls->storageDefaultObjectAccessControlsList($request, $requestSecurity);

    if ($response->objectAccessControls !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageDefaultObjectAccessControlsPatch

Patches a default object ACL entry on the specified bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageDefaultObjectAccessControlsPatchRequest();
    $request->objectAccessControl = new ObjectAccessControl();
    $request->objectAccessControl->bucket = 'commodi';
    $request->objectAccessControl->domain = 'sapiente';
    $request->objectAccessControl->email = 'Lulu78@gmail.com';
    $request->objectAccessControl->entity = 'eum';
    $request->objectAccessControl->entityId = 'quas';
    $request->objectAccessControl->etag = 'praesentium';
    $request->objectAccessControl->generation = 'consequuntur';
    $request->objectAccessControl->id = '82aa4825-62f2-422e-9817-ee17cbe61e6b';
    $request->objectAccessControl->kind = 'molestiae';
    $request->objectAccessControl->object = 'rerum';
    $request->objectAccessControl->projectTeam = new ObjectAccessControlProjectTeam();
    $request->objectAccessControl->projectTeam->projectNumber = 'occaecati';
    $request->objectAccessControl->projectTeam->team = 'minima';
    $request->objectAccessControl->role = 'distinctio';
    $request->objectAccessControl->selfLink = 'eligendi';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'sit';
    $request->entity = 'culpa';
    $request->fields = 'tempore';
    $request->key = 'adipisci';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'consequatur';
    $request->userIp = 'minus';
    $request->userProject = 'quaerat';

    $requestSecurity = new StorageDefaultObjectAccessControlsPatchSecurity();
    $requestSecurity->option1 = new StorageDefaultObjectAccessControlsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

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
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageDefaultObjectAccessControlsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageDefaultObjectAccessControlsUpdateRequest();
    $request->objectAccessControl = new ObjectAccessControl();
    $request->objectAccessControl->bucket = 'sapiente';
    $request->objectAccessControl->domain = 'consectetur';
    $request->objectAccessControl->email = 'Joana_McLaughlin55@yahoo.com';
    $request->objectAccessControl->entity = 'esse';
    $request->objectAccessControl->entityId = 'quasi';
    $request->objectAccessControl->etag = 'a';
    $request->objectAccessControl->generation = 'error';
    $request->objectAccessControl->id = '9dd2efd1-21aa-46f1-a674-bdb04f157560';
    $request->objectAccessControl->kind = 'voluptatum';
    $request->objectAccessControl->object = 'qui';
    $request->objectAccessControl->projectTeam = new ObjectAccessControlProjectTeam();
    $request->objectAccessControl->projectTeam->projectNumber = 'quibusdam';
    $request->objectAccessControl->projectTeam->team = 'ex';
    $request->objectAccessControl->role = 'deleniti';
    $request->objectAccessControl->selfLink = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'dolorum';
    $request->entity = 'architecto';
    $request->fields = 'omnis';
    $request->key = 'tenetur';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'et';
    $request->userIp = 'voluptate';
    $request->userProject = 'ipsa';

    $requestSecurity = new StorageDefaultObjectAccessControlsUpdateSecurity();
    $requestSecurity->option1 = new StorageDefaultObjectAccessControlsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->defaultObjectAccessControls->storageDefaultObjectAccessControlsUpdate($request, $requestSecurity);

    if ($response->objectAccessControl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
