# sslCerts

### Available Operations

* [sqlSslCertsCreateEphemeral](#sqlsslcertscreateephemeral) - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
* [sqlSslCertsDelete](#sqlsslcertsdelete) - Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.
* [sqlSslCertsGet](#sqlsslcertsget) - Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
* [sqlSslCertsInsert](#sqlsslcertsinsert) - Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
* [sqlSslCertsList](#sqlsslcertslist) - Lists all of the current SSL certificates for the instance.

## sqlSslCertsCreateEphemeral

Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsCreateEphemeralRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslCertsCreateEphemeralRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsCreateEphemeralSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsCreateEphemeralSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsCreateEphemeralSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlSslCertsCreateEphemeralRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sslCertsCreateEphemeralRequest = new SslCertsCreateEphemeralRequest();
    $request->sslCertsCreateEphemeralRequest->accessToken = 'dolores';
    $request->sslCertsCreateEphemeralRequest->publicKey = 'id';
    $request->accessToken = 'minima';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'nesciunt';
    $request->instance = 'quae';
    $request->key = 'recusandae';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->project = 'quaerat';
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new SqlSslCertsCreateEphemeralSecurity();
    $requestSecurity->option1 = new SqlSslCertsCreateEphemeralSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslCerts->sqlSslCertsCreateEphemeral($request, $requestSecurity);

    if ($response->sslCert !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlSslCertsDelete

Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlSslCertsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laudantium';
    $request->fields = 'eum';
    $request->instance = 'nemo';
    $request->key = 'recusandae';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->project = 'provident';
    $request->quotaUser = 'quis';
    $request->sha1Fingerprint = 'eum';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new SqlSslCertsDeleteSecurity();
    $requestSecurity->option1 = new SqlSslCertsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslCerts->sqlSslCertsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlSslCertsGet

Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlSslCertsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'animi';
    $request->fields = 'nostrum';
    $request->instance = 'mollitia';
    $request->key = 'provident';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->project = 'animi';
    $request->quotaUser = 'ex';
    $request->sha1Fingerprint = 'aliquid';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new SqlSslCertsGetSecurity();
    $requestSecurity->option1 = new SqlSslCertsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslCerts->sqlSslCertsGet($request, $requestSecurity);

    if ($response->sslCert !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlSslCertsInsert

Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslCertsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlSslCertsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sslCertsInsertRequest = new SslCertsInsertRequest();
    $request->sslCertsInsertRequest->commonName = 'ullam';
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'earum';
    $request->fields = 'officia';
    $request->instance = 'laborum';
    $request->key = 'placeat';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->project = 'voluptatibus';
    $request->quotaUser = 'molestias';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new SqlSslCertsInsertSecurity();
    $requestSecurity->option1 = new SqlSslCertsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslCerts->sqlSslCertsInsert($request, $requestSecurity);

    if ($response->sslCertsInsertResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlSslCertsList

Lists all of the current SSL certificates for the instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlSslCertsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlSslCertsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'quis';
    $request->instance = 'inventore';
    $request->key = 'fugit';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->project = 'quae';
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new SqlSslCertsListSecurity();
    $requestSecurity->option1 = new SqlSslCertsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslCerts->sqlSslCertsList($request, $requestSecurity);

    if ($response->sslCertsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
