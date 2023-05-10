# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createCredentialAws](#createcredentialaws) - Create a new AWS Credential
* [createCredentialPublicKey](#createcredentialpublickey) - Create a new Public Key Credential
* [createSecondaryAuthToken](#createsecondaryauthtoken) - Create a new secondary Auth Token
* [deleteCredentialAws](#deletecredentialaws) - Delete a Credential from your account
* [deleteCredentialPublicKey](#deletecredentialpublickey) - Delete a Credential from your account
* [deleteSecondaryAuthToken](#deletesecondaryauthtoken) - Delete the secondary Auth Token from your account
* [fetchCredentialAws](#fetchcredentialaws) - Fetch the AWS credentials specified by the provided Credential Sid
* [fetchCredentialPublicKey](#fetchcredentialpublickey) - Fetch the public key specified by the provided Credential Sid
* [listCredentialAws](#listcredentialaws) - Retrieves a collection of AWS Credentials belonging to the account used to make the request
* [listCredentialPublicKey](#listcredentialpublickey) - Retrieves a collection of Public Key Credentials belonging to the account used to make the request
* [updateAuthTokenPromotion](#updateauthtokenpromotion) - Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.
* [updateCredentialAws](#updatecredentialaws) - Modify the properties of a given Account
* [updateCredentialPublicKey](#updatecredentialpublickey) - Modify the properties of a given Account

## createCredentialAws

Create a new AWS Credential

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialAwsCreateCredentialAwsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialAwsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCredentialAwsCreateCredentialAwsRequest();
    $request->accountSid = 'quibusdam';
    $request->credentials = 'unde';
    $request->friendlyName = 'nulla';

    $requestSecurity = new CreateCredentialAwsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCredentialAws($request, $requestSecurity);

    if ($response->accountsV1CredentialCredentialAws !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCredentialPublicKey

Create a new Public Key Credential

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialPublicKeyCreateCredentialPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialPublicKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCredentialPublicKeyCreateCredentialPublicKeyRequest();
    $request->accountSid = 'corrupti';
    $request->friendlyName = 'illum';
    $request->publicKey = 'vel';

    $requestSecurity = new CreateCredentialPublicKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCredentialPublicKey($request, $requestSecurity);

    if ($response->accountsV1CredentialCredentialPublicKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSecondaryAuthToken

Create a new secondary Auth Token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSecondaryAuthTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new CreateSecondaryAuthTokenSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSecondaryAuthToken($requestSecurity);

    if ($response->accountsV1SecondaryAuthToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCredentialAws

Delete a Credential from your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCredentialAwsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCredentialAwsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCredentialAwsRequest();
    $request->sid = 'error';

    $requestSecurity = new DeleteCredentialAwsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteCredentialAws($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCredentialPublicKey

Delete a Credential from your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCredentialPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCredentialPublicKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCredentialPublicKeyRequest();
    $request->sid = 'deserunt';

    $requestSecurity = new DeleteCredentialPublicKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteCredentialPublicKey($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSecondaryAuthToken

Delete the secondary Auth Token from your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecondaryAuthTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new DeleteSecondaryAuthTokenSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSecondaryAuthToken($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCredentialAws

Fetch the AWS credentials specified by the provided Credential Sid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCredentialAwsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCredentialAwsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCredentialAwsRequest();
    $request->sid = 'suscipit';

    $requestSecurity = new FetchCredentialAwsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCredentialAws($request, $requestSecurity);

    if ($response->accountsV1CredentialCredentialAws !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCredentialPublicKey

Fetch the public key specified by the provided Credential Sid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCredentialPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCredentialPublicKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCredentialPublicKeyRequest();
    $request->sid = 'iure';

    $requestSecurity = new FetchCredentialPublicKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCredentialPublicKey($request, $requestSecurity);

    if ($response->accountsV1CredentialCredentialPublicKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCredentialAws

Retrieves a collection of AWS Credentials belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCredentialAwsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCredentialAwsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCredentialAwsRequest();
    $request->page = 297534;
    $request->pageSize = 891773;
    $request->pageToken = 'ipsa';

    $requestSecurity = new ListCredentialAwsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listCredentialAws($request, $requestSecurity);

    if ($response->listCredentialAwsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCredentialPublicKey

Retrieves a collection of Public Key Credentials belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCredentialPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCredentialPublicKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCredentialPublicKeyRequest();
    $request->page = 963663;
    $request->pageSize = 272656;
    $request->pageToken = 'suscipit';

    $requestSecurity = new ListCredentialPublicKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listCredentialPublicKey($request, $requestSecurity);

    if ($response->listCredentialPublicKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAuthTokenPromotion

Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAuthTokenPromotionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new UpdateAuthTokenPromotionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateAuthTokenPromotion($requestSecurity);

    if ($response->accountsV1AuthTokenPromotion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCredentialAws

Modify the properties of a given Account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCredentialAwsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCredentialAwsUpdateCredentialAwsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCredentialAwsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCredentialAwsRequest();
    $request->requestBody = new UpdateCredentialAwsUpdateCredentialAwsRequest();
    $request->requestBody->friendlyName = 'molestiae';
    $request->sid = 'minus';

    $requestSecurity = new UpdateCredentialAwsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateCredentialAws($request, $requestSecurity);

    if ($response->accountsV1CredentialCredentialAws !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCredentialPublicKey

Modify the properties of a given Account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCredentialPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCredentialPublicKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCredentialPublicKeyRequest();
    $request->requestBody = new UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest();
    $request->requestBody->friendlyName = 'placeat';
    $request->sid = 'voluptatum';

    $requestSecurity = new UpdateCredentialPublicKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateCredentialPublicKey($request, $requestSecurity);

    if ($response->accountsV1CredentialCredentialPublicKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
