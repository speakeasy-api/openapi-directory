# projects

### Available Operations

* [storageProjectsHmacKeysCreate](#storageprojectshmackeyscreate) - Creates a new HMAC key for the specified service account.
* [storageProjectsHmacKeysDelete](#storageprojectshmackeysdelete) - Deletes an HMAC key.
* [storageProjectsHmacKeysGet](#storageprojectshmackeysget) - Retrieves an HMAC key's metadata
* [storageProjectsHmacKeysList](#storageprojectshmackeyslist) - Retrieves a list of HMAC keys matching the criteria.
* [storageProjectsHmacKeysUpdate](#storageprojectshmackeysupdate) - Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.
* [storageProjectsServiceAccountGet](#storageprojectsserviceaccountget) - Get the email address of this project's Google Cloud Storage service account.

## storageProjectsHmacKeysCreate

Creates a new HMAC key for the specified service account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageProjectsHmacKeysCreateRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'totam';
    $request->key = 'occaecati';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->projectId = 'quo';
    $request->quotaUser = 'velit';
    $request->serviceAccountEmail = 'minus';
    $request->uploadType = 'fuga';
    $request->userIp = 'nostrum';
    $request->userProject = 'est';

    $requestSecurity = new StorageProjectsHmacKeysCreateSecurity();
    $requestSecurity->option1 = new StorageProjectsHmacKeysCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->storageProjectsHmacKeysCreate($request, $requestSecurity);

    if ($response->hmacKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageProjectsHmacKeysDelete

Deletes an HMAC key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysDeleteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageProjectsHmacKeysDeleteRequest();
    $request->accessId = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->fields = 'delectus';
    $request->key = 'tempore';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->projectId = 'odit';
    $request->quotaUser = 'repellat';
    $request->uploadType = 'pariatur';
    $request->userIp = 'nemo';
    $request->userProject = 'reprehenderit';

    $requestSecurity = new StorageProjectsHmacKeysDeleteSecurity();
    $requestSecurity->option1 = new StorageProjectsHmacKeysDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->storageProjectsHmacKeysDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageProjectsHmacKeysGet

Retrieves an HMAC key's metadata

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageProjectsHmacKeysGetRequest();
    $request->accessId = 'aperiam';
    $request->alt = AltEnum::JSON;
    $request->fields = 'odio';
    $request->key = 'minima';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->projectId = 'ducimus';
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'dolores';
    $request->userIp = 'error';
    $request->userProject = 'veritatis';

    $requestSecurity = new StorageProjectsHmacKeysGetSecurity();
    $requestSecurity->option1 = new StorageProjectsHmacKeysGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->storageProjectsHmacKeysGet($request, $requestSecurity);

    if ($response->hmacKeyMetadata !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageProjectsHmacKeysList

Retrieves a list of HMAC keys matching the criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageProjectsHmacKeysListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'ducimus';
    $request->key = 'voluptate';
    $request->maxResults = 866789;
    $request->oauthToken = 'itaque';
    $request->pageToken = 'similique';
    $request->prettyPrint = false;
    $request->projectId = 'optio';
    $request->quotaUser = 'ex';
    $request->serviceAccountEmail = 'quaerat';
    $request->showDeletedKeys = false;
    $request->uploadType = 'commodi';
    $request->userIp = 'officiis';
    $request->userProject = 'placeat';

    $requestSecurity = new StorageProjectsHmacKeysListSecurity();
    $requestSecurity->option1 = new StorageProjectsHmacKeysListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->storageProjectsHmacKeysList($request, $requestSecurity);

    if ($response->hmacKeysMetadata !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageProjectsHmacKeysUpdate

Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\HmacKeyMetadata;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsHmacKeysUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageProjectsHmacKeysUpdateRequest();
    $request->hmacKeyMetadata = new HmacKeyMetadata();
    $request->hmacKeyMetadata->accessId = 'quidem';
    $request->hmacKeyMetadata->etag = 'exercitationem';
    $request->hmacKeyMetadata->id = '73409e3e-b1e5-4a2b-92eb-07f116db9954';
    $request->hmacKeyMetadata->kind = 'nostrum';
    $request->hmacKeyMetadata->projectId = 'doloribus';
    $request->hmacKeyMetadata->selfLink = 'eligendi';
    $request->hmacKeyMetadata->serviceAccountEmail = 'sint';
    $request->hmacKeyMetadata->state = 'enim';
    $request->hmacKeyMetadata->timeCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-11T05:39:31.724Z');
    $request->hmacKeyMetadata->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-19T08:26:48.749Z');
    $request->accessId = 'molestias';
    $request->alt = AltEnum::JSON;
    $request->fields = 'odio';
    $request->key = 'eaque';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->projectId = 'architecto';
    $request->quotaUser = 'quos';
    $request->uploadType = 'iste';
    $request->userIp = 'assumenda';
    $request->userProject = 'tempore';

    $requestSecurity = new StorageProjectsHmacKeysUpdateSecurity();
    $requestSecurity->option1 = new StorageProjectsHmacKeysUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->storageProjectsHmacKeysUpdate($request, $requestSecurity);

    if ($response->hmacKeyMetadata !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageProjectsServiceAccountGet

Get the email address of this project's Google Cloud Storage service account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsServiceAccountGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsServiceAccountGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsServiceAccountGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsServiceAccountGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsServiceAccountGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsServiceAccountGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\StorageProjectsServiceAccountGetSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageProjectsServiceAccountGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'libero';
    $request->key = 'velit';
    $request->oauthToken = 'doloremque';
    $request->prettyPrint = false;
    $request->projectId = 'delectus';
    $request->quotaUser = 'impedit';
    $request->uploadType = 'cum';
    $request->userIp = 'ipsum';
    $request->userProject = 'adipisci';

    $requestSecurity = new StorageProjectsServiceAccountGetSecurity();
    $requestSecurity->option1 = new StorageProjectsServiceAccountGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->storageProjectsServiceAccountGet($request, $requestSecurity);

    if ($response->serviceAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
