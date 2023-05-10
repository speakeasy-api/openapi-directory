# bucketAccessControls

### Available Operations

* [storageBucketAccessControlsDelete](#storagebucketaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified bucket.
* [storageBucketAccessControlsGet](#storagebucketaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified bucket.
* [storageBucketAccessControlsInsert](#storagebucketaccesscontrolsinsert) - Creates a new ACL entry on the specified bucket.
* [storageBucketAccessControlsList](#storagebucketaccesscontrolslist) - Retrieves ACL entries on the specified bucket.
* [storageBucketAccessControlsPatch](#storagebucketaccesscontrolspatch) - Updates an ACL entry on the specified bucket. This method supports patch semantics.
* [storageBucketAccessControlsUpdate](#storagebucketaccesscontrolsupdate) - Updates an ACL entry on the specified bucket.

## storageBucketAccessControlsDelete

Permanently deletes the ACL entry for the specified entity on the specified bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketAccessControlsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'illum';
    $request->entity = 'vel';
    $request->fields = 'error';
    $request->key = 'deserunt';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->userIp = 'magnam';

    $requestSecurity = new StorageBucketAccessControlsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bucketAccessControls->storageBucketAccessControlsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageBucketAccessControlsGet

Returns the ACL entry for the specified entity on the specified bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketAccessControlsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'debitis';
    $request->entity = 'ipsa';
    $request->fields = 'delectus';
    $request->key = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->userIp = 'minus';

    $requestSecurity = new StorageBucketAccessControlsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bucketAccessControls->storageBucketAccessControlsGet($request, $requestSecurity);

    if ($response->bucketAccessControl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageBucketAccessControlsInsert

Creates a new ACL entry on the specified bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\BucketAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketAccessControlsInsertRequest();
    $request->bucketAccessControl = new BucketAccessControl();
    $request->bucketAccessControl->bucket = 'placeat';
    $request->bucketAccessControl->domain = 'voluptatum';
    $request->bucketAccessControl->email = 'Kenyon_Huel7@yahoo.com';
    $request->bucketAccessControl->entity = 'quis';
    $request->bucketAccessControl->entityId = 'veritatis';
    $request->bucketAccessControl->etag = 'deserunt';
    $request->bucketAccessControl->id = '05dfc2dd-f7cc-478c-a1ba-928fc816742c';
    $request->bucketAccessControl->kind = 'cum';
    $request->bucketAccessControl->role = 'esse';
    $request->bucketAccessControl->selfLink = 'ipsum';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'excepturi';
    $request->fields = 'aspernatur';
    $request->key = 'perferendis';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->userIp = 'sed';

    $requestSecurity = new StorageBucketAccessControlsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bucketAccessControls->storageBucketAccessControlsInsert($request, $requestSecurity);

    if ($response->bucketAccessControl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageBucketAccessControlsList

Retrieves ACL entries on the specified bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketAccessControlsListRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'iste';
    $request->fields = 'dolor';
    $request->key = 'natus';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->userIp = 'saepe';

    $requestSecurity = new StorageBucketAccessControlsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bucketAccessControls->storageBucketAccessControlsList($request, $requestSecurity);

    if ($response->bucketAccessControls !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageBucketAccessControlsPatch

Updates an ACL entry on the specified bucket. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\BucketAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketAccessControlsPatchRequest();
    $request->bucketAccessControl = new BucketAccessControl();
    $request->bucketAccessControl->bucket = 'fuga';
    $request->bucketAccessControl->domain = 'in';
    $request->bucketAccessControl->email = 'Leslie_Kertzmann9@yahoo.com';
    $request->bucketAccessControl->entity = 'ipsa';
    $request->bucketAccessControl->entityId = 'reiciendis';
    $request->bucketAccessControl->etag = 'est';
    $request->bucketAccessControl->id = 'aa2352c5-9559-407a-bf1a-3a2fa9467739';
    $request->bucketAccessControl->kind = 'quia';
    $request->bucketAccessControl->role = 'quis';
    $request->bucketAccessControl->selfLink = 'vitae';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'laborum';
    $request->entity = 'animi';
    $request->fields = 'enim';
    $request->key = 'odit';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->userIp = 'tenetur';

    $requestSecurity = new StorageBucketAccessControlsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bucketAccessControls->storageBucketAccessControlsPatch($request, $requestSecurity);

    if ($response->bucketAccessControl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageBucketAccessControlsUpdate

Updates an ACL entry on the specified bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\BucketAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketAccessControlsUpdateRequest();
    $request->bucketAccessControl = new BucketAccessControl();
    $request->bucketAccessControl->bucket = 'ipsam';
    $request->bucketAccessControl->domain = 'id';
    $request->bucketAccessControl->email = 'Adrain_Boyer@hotmail.com';
    $request->bucketAccessControl->entity = 'laborum';
    $request->bucketAccessControl->entityId = 'quasi';
    $request->bucketAccessControl->etag = 'reiciendis';
    $request->bucketAccessControl->id = 'fe78f097-b007-44f1-9471-b5e6e13b99d4';
    $request->bucketAccessControl->kind = 'praesentium';
    $request->bucketAccessControl->role = 'rem';
    $request->bucketAccessControl->selfLink = 'voluptates';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'quasi';
    $request->entity = 'repudiandae';
    $request->fields = 'sint';
    $request->key = 'veritatis';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->userIp = 'enim';

    $requestSecurity = new StorageBucketAccessControlsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bucketAccessControls->storageBucketAccessControlsUpdate($request, $requestSecurity);

    if ($response->bucketAccessControl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
