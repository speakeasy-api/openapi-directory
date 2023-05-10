# objectAccessControls

### Available Operations

* [storageObjectAccessControlsDelete](#storageobjectaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified object.
* [storageObjectAccessControlsGet](#storageobjectaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified object.
* [storageObjectAccessControlsInsert](#storageobjectaccesscontrolsinsert) - Creates a new ACL entry on the specified object.
* [storageObjectAccessControlsList](#storageobjectaccesscontrolslist) - Retrieves ACL entries on the specified object.
* [storageObjectAccessControlsPatch](#storageobjectaccesscontrolspatch) - Patches an ACL entry on the specified object.
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
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectAccessControlsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'exercitationem';
    $request->entity = 'earum';
    $request->fields = 'facere';
    $request->generation = 'numquam';
    $request->key = 'doloribus';
    $request->oauthToken = 'suscipit';
    $request->object = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'saepe';
    $request->userIp = 'necessitatibus';
    $request->userProject = 'dolore';

    $requestSecurity = new StorageObjectAccessControlsDeleteSecurity();
    $requestSecurity->option1 = new StorageObjectAccessControlsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

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
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectAccessControlsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'sunt';
    $request->entity = 'asperiores';
    $request->fields = 'adipisci';
    $request->generation = 'non';
    $request->key = 'amet';
    $request->oauthToken = 'beatae';
    $request->object = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->uploadType = 'debitis';
    $request->userIp = 'consectetur';
    $request->userProject = 'corporis';

    $requestSecurity = new StorageObjectAccessControlsGetSecurity();
    $requestSecurity->option1 = new StorageObjectAccessControlsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

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
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectAccessControlsInsertRequest();
    $request->objectAccessControl = new ObjectAccessControl();
    $request->objectAccessControl->bucket = 'harum';
    $request->objectAccessControl->domain = 'laboriosam';
    $request->objectAccessControl->email = 'Terence88@gmail.com';
    $request->objectAccessControl->entity = 'similique';
    $request->objectAccessControl->entityId = 'tempora';
    $request->objectAccessControl->etag = 'aspernatur';
    $request->objectAccessControl->generation = 'voluptas';
    $request->objectAccessControl->id = '555ba3c2-8744-4ed5-bb88-f3a8d8f5c0b2';
    $request->objectAccessControl->kind = 'reiciendis';
    $request->objectAccessControl->object = 'explicabo';
    $request->objectAccessControl->projectTeam = new ObjectAccessControlProjectTeam();
    $request->objectAccessControl->projectTeam->projectNumber = 'asperiores';
    $request->objectAccessControl->projectTeam->team = 'facilis';
    $request->objectAccessControl->role = 'voluptate';
    $request->objectAccessControl->selfLink = 'expedita';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'ab';
    $request->fields = 'iste';
    $request->generation = 'dolore';
    $request->key = 'laborum';
    $request->oauthToken = 'sed';
    $request->object = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quidem';
    $request->userIp = 'explicabo';
    $request->userProject = 'voluptas';

    $requestSecurity = new StorageObjectAccessControlsInsertSecurity();
    $requestSecurity->option1 = new StorageObjectAccessControlsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

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
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectAccessControlsListRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'unde';
    $request->fields = 'architecto';
    $request->generation = 'suscipit';
    $request->key = 'sapiente';
    $request->oauthToken = 'debitis';
    $request->object = 'illo';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'perferendis';
    $request->userIp = 'corrupti';
    $request->userProject = 'maiores';

    $requestSecurity = new StorageObjectAccessControlsListSecurity();
    $requestSecurity->option1 = new StorageObjectAccessControlsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objectAccessControls->storageObjectAccessControlsList($request, $requestSecurity);

    if ($response->objectAccessControls !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectAccessControlsPatch

Patches an ACL entry on the specified object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectAccessControlsPatchRequest();
    $request->objectAccessControl = new ObjectAccessControl();
    $request->objectAccessControl->bucket = 'incidunt';
    $request->objectAccessControl->domain = 'sed';
    $request->objectAccessControl->email = 'Destinee40@yahoo.com';
    $request->objectAccessControl->entity = 'occaecati';
    $request->objectAccessControl->entityId = 'quos';
    $request->objectAccessControl->etag = 'voluptatibus';
    $request->objectAccessControl->generation = 'tempora';
    $request->objectAccessControl->id = '47f603e8-b445-4e80-8a55-efd20e457e18';
    $request->objectAccessControl->kind = 'exercitationem';
    $request->objectAccessControl->object = 'praesentium';
    $request->objectAccessControl->projectTeam = new ObjectAccessControlProjectTeam();
    $request->objectAccessControl->projectTeam->projectNumber = 'cum';
    $request->objectAccessControl->projectTeam->team = 'laboriosam';
    $request->objectAccessControl->role = 'dolorum';
    $request->objectAccessControl->selfLink = 'voluptatum';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'error';
    $request->entity = 'hic';
    $request->fields = 'expedita';
    $request->generation = 'debitis';
    $request->key = 'neque';
    $request->oauthToken = 'dolorum';
    $request->object = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'dolorum';
    $request->userIp = 'corrupti';
    $request->userProject = 'accusamus';

    $requestSecurity = new StorageObjectAccessControlsPatchSecurity();
    $requestSecurity->option1 = new StorageObjectAccessControlsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

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
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectAccessControlsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectAccessControlsUpdateRequest();
    $request->objectAccessControl = new ObjectAccessControl();
    $request->objectAccessControl->bucket = 'tempora';
    $request->objectAccessControl->domain = 'atque';
    $request->objectAccessControl->email = 'Easter63@gmail.com';
    $request->objectAccessControl->entity = 'expedita';
    $request->objectAccessControl->entityId = 'magnam';
    $request->objectAccessControl->etag = 'consequatur';
    $request->objectAccessControl->generation = 'esse';
    $request->objectAccessControl->id = '5088e518-6206-45e9-84f3-b1194b8abf60';
    $request->objectAccessControl->kind = 'amet';
    $request->objectAccessControl->object = 'deserunt';
    $request->objectAccessControl->projectTeam = new ObjectAccessControlProjectTeam();
    $request->objectAccessControl->projectTeam->projectNumber = 'voluptate';
    $request->objectAccessControl->projectTeam->team = 'unde';
    $request->objectAccessControl->role = 'reiciendis';
    $request->objectAccessControl->selfLink = 'provident';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'repellendus';
    $request->entity = 'delectus';
    $request->fields = 'voluptates';
    $request->generation = 'perferendis';
    $request->key = 'est';
    $request->oauthToken = 'quidem';
    $request->object = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->uploadType = 'fuga';
    $request->userIp = 'praesentium';
    $request->userProject = 'mollitia';

    $requestSecurity = new StorageObjectAccessControlsUpdateSecurity();
    $requestSecurity->option1 = new StorageObjectAccessControlsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objectAccessControls->storageObjectAccessControlsUpdate($request, $requestSecurity);

    if ($response->objectAccessControl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
