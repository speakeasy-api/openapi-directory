# users

### Available Operations

* [cloudshellUsersEnvironmentsAddPublicKey](#cloudshellusersenvironmentsaddpublickey) - Adds a public SSH key to an environment, allowing clients with the corresponding private key to connect to that environment via SSH. If a key with the same content already exists, this will error with ALREADY_EXISTS.
* [cloudshellUsersEnvironmentsAuthorize](#cloudshellusersenvironmentsauthorize) - Sends OAuth credentials to a running environment on behalf of a user. When this completes, the environment will be authorized to run various Google Cloud command line tools without requiring the user to manually authenticate.
* [cloudshellUsersEnvironmentsGet](#cloudshellusersenvironmentsget) - Gets an environment. Returns NOT_FOUND if the environment does not exist.
* [cloudshellUsersEnvironmentsRemovePublicKey](#cloudshellusersenvironmentsremovepublickey) - Removes a public SSH key from an environment. Clients will no longer be able to connect to the environment using the corresponding private key. If a key with the same content is not present, this will error with NOT_FOUND.
* [cloudshellUsersEnvironmentsStart](#cloudshellusersenvironmentsstart) - Starts an existing environment, allowing clients to connect to it. The returned operation will contain an instance of StartEnvironmentMetadata in its metadata field. Users can wait for the environment to start by polling this operation via GetOperation. Once the environment has finished starting and is ready to accept connections, the operation will contain a StartEnvironmentResponse in its response field.

## cloudshellUsersEnvironmentsAddPublicKey

Adds a public SSH key to an environment, allowing clients with the corresponding private key to connect to that environment via SSH. If a key with the same content already exists, this will error with ALREADY_EXISTS.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudshellUsersEnvironmentsAddPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudshellUsersEnvironmentsAddPublicKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudshellUsersEnvironmentsAddPublicKeyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->addPublicKeyRequest = new AddPublicKeyRequest();
    $request->addPublicKeyRequest->key = 'commodi';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->environment = 'impedit';
    $request->fields = 'cum';
    $request->key = 'esse';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new CloudshellUsersEnvironmentsAddPublicKeySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->cloudshellUsersEnvironmentsAddPublicKey($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudshellUsersEnvironmentsAuthorize

Sends OAuth credentials to a running environment on behalf of a user. When this completes, the environment will be authorized to run various Google Cloud command line tools without requiring the user to manually authenticate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudshellUsersEnvironmentsAuthorizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizeEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudshellUsersEnvironmentsAuthorizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudshellUsersEnvironmentsAuthorizeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->authorizeEnvironmentRequest = new AuthorizeEnvironmentRequest();
    $request->authorizeEnvironmentRequest->accessToken = 'natus';
    $request->authorizeEnvironmentRequest->expireTime = 'sed';
    $request->authorizeEnvironmentRequest->idToken = 'iste';
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'hic';
    $request->key = 'saepe';
    $request->name = 'Harvey Hessel';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new CloudshellUsersEnvironmentsAuthorizeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->cloudshellUsersEnvironmentsAuthorize($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudshellUsersEnvironmentsGet

Gets an environment. Returns NOT_FOUND if the environment does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudshellUsersEnvironmentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudshellUsersEnvironmentsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudshellUsersEnvironmentsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'est';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'dolores';
    $request->filter = 'dolorem';
    $request->key = 'corporis';
    $request->name = 'Della Halvorson';
    $request->oauthToken = 'minima';
    $request->pageSize = 570197;
    $request->pageToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new CloudshellUsersEnvironmentsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->cloudshellUsersEnvironmentsGet($request, $requestSecurity);

    if ($response->environment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudshellUsersEnvironmentsRemovePublicKey

Removes a public SSH key from an environment. Clients will no longer be able to connect to the environment using the corresponding private key. If a key with the same content is not present, this will error with NOT_FOUND.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudshellUsersEnvironmentsRemovePublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemovePublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudshellUsersEnvironmentsRemovePublicKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudshellUsersEnvironmentsRemovePublicKeyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->removePublicKeyRequest = new RemovePublicKeyRequest();
    $request->removePublicKeyRequest->key = 'architecto';
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->environment = 'consequuntur';
    $request->fields = 'repellat';
    $request->key = 'mollitia';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'quam';

    $requestSecurity = new CloudshellUsersEnvironmentsRemovePublicKeySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->cloudshellUsersEnvironmentsRemovePublicKey($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudshellUsersEnvironmentsStart

Starts an existing environment, allowing clients to connect to it. The returned operation will contain an instance of StartEnvironmentMetadata in its metadata field. Users can wait for the environment to start by polling this operation via GetOperation. Once the environment has finished starting and is ready to accept connections, the operation will contain a StartEnvironmentResponse in its response field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudshellUsersEnvironmentsStartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StartEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudshellUsersEnvironmentsStartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudshellUsersEnvironmentsStartRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->startEnvironmentRequest = new StartEnvironmentRequest();
    $request->startEnvironmentRequest->accessToken = 'velit';
    $request->startEnvironmentRequest->publicKeys = [
        'quia',
        'quis',
        'vitae',
    ];
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'odit';
    $request->key = 'quo';
    $request->name = 'Mandy Hills';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new CloudshellUsersEnvironmentsStartSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->cloudshellUsersEnvironmentsStart($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
