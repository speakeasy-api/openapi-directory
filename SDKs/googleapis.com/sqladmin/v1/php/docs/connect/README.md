# connect

### Available Operations

* [sqlConnectGenerateEphemeral](#sqlconnectgenerateephemeral) - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
* [sqlConnectGet](#sqlconnectget) - Retrieves connect settings about a Cloud SQL instance.

## sqlConnectGenerateEphemeral

Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlConnectGenerateEphemeralRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenerateEphemeralCertRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlConnectGenerateEphemeralSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlConnectGenerateEphemeralSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlConnectGenerateEphemeralSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlConnectGenerateEphemeralRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->generateEphemeralCertRequest = new GenerateEphemeralCertRequest();
    $request->generateEphemeralCertRequest->accessToken = 'veritatis';
    $request->generateEphemeralCertRequest->publicKey = 'itaque';
    $request->generateEphemeralCertRequest->readTime = 'incidunt';
    $request->generateEphemeralCertRequest->validDuration = 'enim';
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'explicabo';
    $request->instance = 'deserunt';
    $request->key = 'distinctio';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new SqlConnectGenerateEphemeralSecurity();
    $requestSecurity->option1 = new SqlConnectGenerateEphemeralSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->connect->sqlConnectGenerateEphemeral($request, $requestSecurity);

    if ($response->generateEphemeralCertResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlConnectGet

Retrieves connect settings about a Cloud SQL instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlConnectGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlConnectGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlConnectGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlConnectGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlConnectGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'assumenda';
    $request->instance = 'ipsam';
    $request->key = 'alias';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'dolorum';
    $request->quotaUser = 'excepturi';
    $request->readTime = 'tempora';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'tempore';

    $requestSecurity = new SqlConnectGetSecurity();
    $requestSecurity->option1 = new SqlConnectGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->connect->sqlConnectGet($request, $requestSecurity);

    if ($response->connectSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
