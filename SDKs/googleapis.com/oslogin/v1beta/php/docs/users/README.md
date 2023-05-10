# users

### Available Operations

* [osloginUsersGetLoginProfile](#osloginusersgetloginprofile) - Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
* [osloginUsersImportSshPublicKey](#osloginusersimportsshpublickey) - Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
* [osloginUsersSshPublicKeysCreate](#osloginuserssshpublickeyscreate) - Create an SSH public key
* [osloginUsersSshPublicKeysDelete](#osloginuserssshpublickeysdelete) - Deletes an SSH public key.
* [osloginUsersSshPublicKeysGet](#osloginuserssshpublickeysget) - Retrieves an SSH public key.
* [osloginUsersSshPublicKeysPatch](#osloginuserssshpublickeyspatch) - Updates an SSH public key and returns the profile information. This method supports patch semantics.

## osloginUsersGetLoginProfile

Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileSecurity;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsloginUsersGetLoginProfileRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'voluptatum';
    $request->key = 'iusto';
    $request->name = 'Charlie Walsh II';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->projectId = 'deserunt';
    $request->quotaUser = 'perferendis';
    $request->systemId = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';
    $request->view = OsloginUsersGetLoginProfileViewEnum::SECURITY_KEY;

    $requestSecurity = new OsloginUsersGetLoginProfileSecurity();
    $requestSecurity->option1 = new OsloginUsersGetLoginProfileSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->osloginUsersGetLoginProfile($request, $requestSecurity);

    if ($response->loginProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osloginUsersImportSshPublicKey

Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersImportSshPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SshPublicKeyInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersImportSshPublicKeyViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersImportSshPublicKeySecurity;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersImportSshPublicKeySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersImportSshPublicKeySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsloginUsersImportSshPublicKeyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sshPublicKeyInput = new SshPublicKeyInput();
    $request->sshPublicKeyInput->expirationTimeUsec = 'at';
    $request->sshPublicKeyInput->key = 'at';
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->key = 'esse';
    $request->oauthToken = 'totam';
    $request->parent = 'porro';
    $request->prettyPrint = false;
    $request->projectId = 'dolorum';
    $request->quotaUser = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';
    $request->view = OsloginUsersImportSshPublicKeyViewEnum::BASIC;

    $requestSecurity = new OsloginUsersImportSshPublicKeySecurity();
    $requestSecurity->option1 = new OsloginUsersImportSshPublicKeySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->osloginUsersImportSshPublicKey($request, $requestSecurity);

    if ($response->importSshPublicKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osloginUsersSshPublicKeysCreate

Create an SSH public key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SshPublicKeyInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsloginUsersSshPublicKeysCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sshPublicKeyInput = new SshPublicKeyInput();
    $request->sshPublicKeyInput->expirationTimeUsec = 'deleniti';
    $request->sshPublicKeyInput->key = 'hic';
    $request->accessToken = 'optio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'beatae';
    $request->fields = 'commodi';
    $request->key = 'molestiae';
    $request->oauthToken = 'modi';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new OsloginUsersSshPublicKeysCreateSecurity();
    $requestSecurity->option1 = new OsloginUsersSshPublicKeysCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->osloginUsersSshPublicKeysCreate($request, $requestSecurity);

    if ($response->sshPublicKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osloginUsersSshPublicKeysDelete

Deletes an SSH public key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsloginUsersSshPublicKeysDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'ad';
    $request->key = 'natus';
    $request->name = 'Sheryl Fadel';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'in';

    $requestSecurity = new OsloginUsersSshPublicKeysDeleteSecurity();
    $requestSecurity->option1 = new OsloginUsersSshPublicKeysDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->osloginUsersSshPublicKeysDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osloginUsersSshPublicKeysGet

Retrieves an SSH public key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsloginUsersSshPublicKeysGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'quidem';
    $request->key = 'architecto';
    $request->name = 'Lela Orn';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new OsloginUsersSshPublicKeysGetSecurity();
    $requestSecurity->option1 = new OsloginUsersSshPublicKeysGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->osloginUsersSshPublicKeysGet($request, $requestSecurity);

    if ($response->sshPublicKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osloginUsersSshPublicKeysPatch

Updates an SSH public key and returns the profile information. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SshPublicKeyInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsloginUsersSshPublicKeysPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sshPublicKeyInput = new SshPublicKeyInput();
    $request->sshPublicKeyInput->expirationTimeUsec = 'enim';
    $request->sshPublicKeyInput->key = 'omnis';
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'accusantium';
    $request->key = 'iure';
    $request->name = 'Miss Aubrey Williamson';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->updateMask = 'repellat';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new OsloginUsersSshPublicKeysPatchSecurity();
    $requestSecurity->option1 = new OsloginUsersSshPublicKeysPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->osloginUsersSshPublicKeysPatch($request, $requestSecurity);

    if ($response->sshPublicKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
