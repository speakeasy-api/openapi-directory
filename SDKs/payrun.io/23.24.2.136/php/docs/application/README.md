# application

### Available Operations

* [deleteApplicationSecret](#deleteapplicationsecret) - Deletes Application secret
* [getApplicationSecret](#getapplicationsecret) - Get Application secret
* [getApplicationSecrets](#getapplicationsecrets) - Get all Application secret links
* [postApplicationSecret](#postapplicationsecret) - Create a new Application secret
* [putApplicationSecret](#putapplicationsecret) - Create a new Application secret

## deleteApplicationSecret

Deletes an Application secret from the given resource location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationSecretRequest();
    $request->apiVersion = 'aspernatur';
    $request->authorization = 'perferendis';
    $request->secretId = 'ad';

    $response = $sdk->application->deleteApplicationSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplicationSecret

Get the public visible Application secret object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationSecretRequest();
    $request->apiVersion = 'natus';
    $request->authorization = 'sed';
    $request->secretId = 'iste';

    $response = $sdk->application->getApplicationSecret($request);

    if ($response->applicationSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplicationSecrets

Get all the Application secret links

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationSecretsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationSecretsRequest();
    $request->apiVersion = 'dolor';
    $request->authorization = 'natus';

    $response = $sdk->application->getApplicationSecrets($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApplicationSecret

Create new Application secret using auto generated resource location key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApplicationSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApplicationSecretRequest();
    $request->apiVersion = 'laboriosam';
    $request->authorization = 'hic';

    $response = $sdk->application->postApplicationSecret($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putApplicationSecret

Create / update an Application secret at the given resource location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutApplicationSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutApplicationSecretRequest();
    $request->apiVersion = 'saepe';
    $request->authorization = 'fuga';
    $request->secretId = 'in';

    $response = $sdk->application->putApplicationSecret($request);

    if ($response->applicationSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
