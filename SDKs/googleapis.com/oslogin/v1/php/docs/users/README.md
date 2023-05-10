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
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minus';
    $request->fields = 'placeat';
    $request->key = 'voluptatum';
    $request->name = 'Miriam Huel';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->projectId = 'quis';
    $request->quotaUser = 'veritatis';
    $request->systemId = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';

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
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersImportSshPublicKeySecurity;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersImportSshPublicKeySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersImportSshPublicKeySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsloginUsersImportSshPublicKeyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sshPublicKeyInput = new SshPublicKeyInput();
    $request->sshPublicKeyInput->expirationTimeUsec = 'sapiente';
    $request->sshPublicKeyInput->key = 'quo';
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'maiores';
    $request->key = 'molestiae';
    $request->oauthToken = 'quod';
    $request->parent = 'quod';
    $request->prettyPrint = false;
    $request->projectId = 'esse';
    $request->quotaUser = 'totam';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'dolorum';

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
    $request->sshPublicKeyInput->expirationTimeUsec = 'nam';
    $request->sshPublicKeyInput->key = 'officia';
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'hic';
    $request->key = 'optio';
    $request->oauthToken = 'totam';
    $request->parent = 'beatae';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'modi';

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
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'ipsum';
    $request->key = 'excepturi';
    $request->name = 'Dorothy Hane';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'laboriosam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'corporis';
    $request->key = 'iste';
    $request->name = 'Mr. Kerry Predovic';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'dolores';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sshPublicKeyInput = new SshPublicKeyInput();
    $request->sshPublicKeyInput->expirationTimeUsec = 'corporis';
    $request->sshPublicKeyInput->key = 'explicabo';
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'nemo';
    $request->key = 'minima';
    $request->name = 'Brian Kessler';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->updateMask = 'mollitia';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'culpa';

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
