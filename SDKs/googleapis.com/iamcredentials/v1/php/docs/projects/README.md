# projects

### Available Operations

* [iamcredentialsProjectsServiceAccountsGenerateAccessToken](#iamcredentialsprojectsserviceaccountsgenerateaccesstoken) - Generates an OAuth 2.0 access token for a service account.
* [iamcredentialsProjectsServiceAccountsGenerateIdToken](#iamcredentialsprojectsserviceaccountsgenerateidtoken) - Generates an OpenID Connect ID token for a service account.
* [iamcredentialsProjectsServiceAccountsSignBlob](#iamcredentialsprojectsserviceaccountssignblob) - Signs a blob using a service account's system-managed private key.
* [iamcredentialsProjectsServiceAccountsSignJwt](#iamcredentialsprojectsserviceaccountssignjwt) - Signs a JWT using a service account's system-managed private key.

## iamcredentialsProjectsServiceAccountsGenerateAccessToken

Generates an OAuth 2.0 access token for a service account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenerateAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->generateAccessTokenRequest = new GenerateAccessTokenRequest();
    $request->generateAccessTokenRequest->delegates = [
        'recusandae',
        'temporibus',
    ];
    $request->generateAccessTokenRequest->lifetime = 'ab';
    $request->generateAccessTokenRequest->scope = [
        'veritatis',
        'deserunt',
    ];
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellendus';
    $request->fields = 'sapiente';
    $request->key = 'quo';
    $request->name = 'Teri Strosin';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iamcredentialsProjectsServiceAccountsGenerateAccessToken($request, $requestSecurity);

    if ($response->generateAccessTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## iamcredentialsProjectsServiceAccountsGenerateIdToken

Generates an OpenID Connect ID token for a service account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IamcredentialsProjectsServiceAccountsGenerateIdTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenerateIdTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IamcredentialsProjectsServiceAccountsGenerateIdTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IamcredentialsProjectsServiceAccountsGenerateIdTokenRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->generateIdTokenRequest = new GenerateIdTokenRequest();
    $request->generateIdTokenRequest->audience = 'dolorum';
    $request->generateIdTokenRequest->delegates = [
        'nam',
    ];
    $request->generateIdTokenRequest->includeEmail = false;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'deleniti';
    $request->key = 'hic';
    $request->name = 'Everett Breitenberg';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new IamcredentialsProjectsServiceAccountsGenerateIdTokenSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iamcredentialsProjectsServiceAccountsGenerateIdToken($request, $requestSecurity);

    if ($response->generateIdTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## iamcredentialsProjectsServiceAccountsSignBlob

Signs a blob using a service account's system-managed private key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IamcredentialsProjectsServiceAccountsSignBlobRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SignBlobRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IamcredentialsProjectsServiceAccountsSignBlobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IamcredentialsProjectsServiceAccountsSignBlobRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->signBlobRequest = new SignBlobRequest();
    $request->signBlobRequest->delegates = [
        'excepturi',
    ];
    $request->signBlobRequest->payload = 'aspernatur';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'sed';
    $request->key = 'iste';
    $request->name = 'Faye Howe';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new IamcredentialsProjectsServiceAccountsSignBlobSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iamcredentialsProjectsServiceAccountsSignBlob($request, $requestSecurity);

    if ($response->signBlobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## iamcredentialsProjectsServiceAccountsSignJwt

Signs a JWT using a service account's system-managed private key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IamcredentialsProjectsServiceAccountsSignJwtRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SignJwtRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IamcredentialsProjectsServiceAccountsSignJwtSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IamcredentialsProjectsServiceAccountsSignJwtRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->signJwtRequest = new SignJwtRequest();
    $request->signJwtRequest->delegates = [
        'quidem',
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->signJwtRequest->payload = 'est';
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'dolorem';
    $request->key = 'corporis';
    $request->name = 'Della Halvorson';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new IamcredentialsProjectsServiceAccountsSignJwtSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iamcredentialsProjectsServiceAccountsSignJwt($request, $requestSecurity);

    if ($response->signJwtResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
