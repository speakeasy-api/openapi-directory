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
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersGetLoginProfileOperatingSystemTypeEnum;
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
    $request->accessToken = 'minus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatum';
    $request->fields = 'iusto';
    $request->key = 'excepturi';
    $request->name = 'Mrs. Sophie Smith MD';
    $request->oauthToken = 'perferendis';
    $request->operatingSystemType = OsloginUsersGetLoginProfileOperatingSystemTypeEnum::LINUX;
    $request->prettyPrint = false;
    $request->projectId = 'repellendus';
    $request->quotaUser = 'sapiente';
    $request->systemId = 'quo';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'at';
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sshPublicKeyInput = new SshPublicKeyInput();
    $request->sshPublicKeyInput->expirationTimeUsec = 'molestiae';
    $request->sshPublicKeyInput->key = 'quod';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'porro';
    $request->key = 'dolorum';
    $request->oauthToken = 'dicta';
    $request->parent = 'nam';
    $request->prettyPrint = false;
    $request->projectId = 'officia';
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'deleniti';
    $request->view = OsloginUsersImportSshPublicKeyViewEnum::SECURITY_KEY;

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sshPublicKeyInput = new SshPublicKeyInput();
    $request->sshPublicKeyInput->expirationTimeUsec = 'totam';
    $request->sshPublicKeyInput->key = 'beatae';
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->key = 'impedit';
    $request->oauthToken = 'cum';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'aspernatur';

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
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysDeleteOperatingSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\OsloginUsersSshPublicKeysDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsloginUsersSshPublicKeysDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'iste';
    $request->key = 'dolor';
    $request->name = 'Lester Welch';
    $request->oauthToken = 'in';
    $request->operatingSystemType = OsloginUsersSshPublicKeysDeleteOperatingSystemTypeEnum::LINUX;
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'saepe';

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
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'est';
    $request->key = 'mollitia';
    $request->name = 'Ernest Ebert';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'nemo';

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
    $request->sshPublicKeyInput->expirationTimeUsec = 'excepturi';
    $request->sshPublicKeyInput->key = 'accusantium';
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->name = 'Mike Nicolas';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->updateMask = 'numquam';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'quam';

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
