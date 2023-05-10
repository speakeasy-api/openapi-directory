# bucketAccessControls

### Available Operations

* [storageBucketAccessControlsDelete](#storagebucketaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified bucket.
* [storageBucketAccessControlsGet](#storagebucketaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified bucket.
* [storageBucketAccessControlsInsert](#storagebucketaccesscontrolsinsert) - Creates a new ACL entry on the specified bucket.
* [storageBucketAccessControlsList](#storagebucketaccesscontrolslist) - Retrieves ACL entries on the specified bucket.
* [storageBucketAccessControlsPatch](#storagebucketaccesscontrolspatch) - Patches an ACL entry on the specified bucket.
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
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketAccessControlsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'error';
    $request->entity = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'ipsa';
    $request->userIp = 'delectus';
    $request->userProject = 'tempora';

    $requestSecurity = new StorageBucketAccessControlsDeleteSecurity();
    $requestSecurity->option1 = new StorageBucketAccessControlsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

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
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketAccessControlsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'suscipit';
    $request->entity = 'molestiae';
    $request->fields = 'minus';
    $request->key = 'placeat';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->userIp = 'nisi';
    $request->userProject = 'recusandae';

    $requestSecurity = new StorageBucketAccessControlsGetSecurity();
    $requestSecurity->option1 = new StorageBucketAccessControlsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

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
use \OpenAPI\OpenAPI\Models\Shared\BucketAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketAccessControlsInsertRequest();
    $request->bucketAccessControl = new BucketAccessControl();
    $request->bucketAccessControl->bucket = 'temporibus';
    $request->bucketAccessControl->domain = 'ab';
    $request->bucketAccessControl->email = 'Ashlee36@yahoo.com';
    $request->bucketAccessControl->entity = 'repellendus';
    $request->bucketAccessControl->entityId = 'sapiente';
    $request->bucketAccessControl->etag = 'quo';
    $request->bucketAccessControl->id = '2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392';
    $request->bucketAccessControl->kind = 'perferendis';
    $request->bucketAccessControl->projectTeam = new BucketAccessControlProjectTeam();
    $request->bucketAccessControl->projectTeam->projectNumber = 'ad';
    $request->bucketAccessControl->projectTeam->team = 'natus';
    $request->bucketAccessControl->role = 'sed';
    $request->bucketAccessControl->selfLink = 'iste';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'dolor';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'fuga';
    $request->userIp = 'in';
    $request->userProject = 'corporis';

    $requestSecurity = new StorageBucketAccessControlsInsertSecurity();
    $requestSecurity->option1 = new StorageBucketAccessControlsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

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
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketAccessControlsListRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'iste';
    $request->fields = 'iure';
    $request->key = 'saepe';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'ipsa';
    $request->userIp = 'reiciendis';
    $request->userProject = 'est';

    $requestSecurity = new StorageBucketAccessControlsListSecurity();
    $requestSecurity->option1 = new StorageBucketAccessControlsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bucketAccessControls->storageBucketAccessControlsList($request, $requestSecurity);

    if ($response->bucketAccessControls !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageBucketAccessControlsPatch

Patches an ACL entry on the specified bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\BucketAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\BucketAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketAccessControlsPatchRequest();
    $request->bucketAccessControl = new BucketAccessControl();
    $request->bucketAccessControl->bucket = 'mollitia';
    $request->bucketAccessControl->domain = 'laborum';
    $request->bucketAccessControl->email = 'Corrine75@gmail.com';
    $request->bucketAccessControl->entity = 'enim';
    $request->bucketAccessControl->entityId = 'omnis';
    $request->bucketAccessControl->etag = 'nemo';
    $request->bucketAccessControl->id = '5907aff1-a3a2-4fa9-8677-39251aa52c3f';
    $request->bucketAccessControl->kind = 'ipsam';
    $request->bucketAccessControl->projectTeam = new BucketAccessControlProjectTeam();
    $request->bucketAccessControl->projectTeam->projectNumber = 'id';
    $request->bucketAccessControl->projectTeam->team = 'possimus';
    $request->bucketAccessControl->role = 'aut';
    $request->bucketAccessControl->selfLink = 'quasi';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'error';
    $request->entity = 'temporibus';
    $request->fields = 'laborum';
    $request->key = 'quasi';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'vero';
    $request->userIp = 'nihil';
    $request->userProject = 'praesentium';

    $requestSecurity = new StorageBucketAccessControlsPatchSecurity();
    $requestSecurity->option1 = new StorageBucketAccessControlsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

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
use \OpenAPI\OpenAPI\Models\Shared\BucketAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketAccessControlsUpdateRequest();
    $request->bucketAccessControl = new BucketAccessControl();
    $request->bucketAccessControl->bucket = 'voluptatibus';
    $request->bucketAccessControl->domain = 'ipsa';
    $request->bucketAccessControl->email = 'Ivah3@yahoo.com';
    $request->bucketAccessControl->entity = 'reprehenderit';
    $request->bucketAccessControl->entityId = 'ut';
    $request->bucketAccessControl->etag = 'maiores';
    $request->bucketAccessControl->id = '15471b5e-6e13-4b99-9488-e1e91e450ad2';
    $request->bucketAccessControl->kind = 'deserunt';
    $request->bucketAccessControl->projectTeam = new BucketAccessControlProjectTeam();
    $request->bucketAccessControl->projectTeam->projectNumber = 'distinctio';
    $request->bucketAccessControl->projectTeam->team = 'quibusdam';
    $request->bucketAccessControl->role = 'labore';
    $request->bucketAccessControl->selfLink = 'modi';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'qui';
    $request->entity = 'aliquid';
    $request->fields = 'cupiditate';
    $request->key = 'quos';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->uploadType = 'assumenda';
    $request->userIp = 'ipsam';
    $request->userProject = 'alias';

    $requestSecurity = new StorageBucketAccessControlsUpdateSecurity();
    $requestSecurity->option1 = new StorageBucketAccessControlsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bucketAccessControls->storageBucketAccessControlsUpdate($request, $requestSecurity);

    if ($response->bucketAccessControl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
