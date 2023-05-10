# version

### Available Operations

* [createVersion](#createversion) - Create version
* [deleteVersion](#deleteversion) - Delete version
* [getVersion](#getversion) - Get version
* [getVersions](#getversions) - Get versions
* [updateVersion](#updateversion) - Update version

## createVersion

Create a new version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Version;
use \OpenAPI\OpenAPI\Models\Operations\CreateVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Version();
    $request->codename = 'provident';
    $request->from = 'necessitatibus';
    $request->isBeta = false;
    $request->isDeprecated = false;
    $request->isHidden = false;
    $request->isStable = false;
    $request->version = 'sint';

    $requestSecurity = new CreateVersionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->version->createVersion($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVersion

Delete a version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVersionRequest();
    $request->versionId = 'officia';

    $requestSecurity = new DeleteVersionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->version->deleteVersion($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVersion

Returns the version with this version ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVersionRequest();
    $request->versionId = 'dolor';

    $requestSecurity = new GetVersionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->version->getVersion($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVersions

Retrieve a list of versions associated with a project API key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVersionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetVersionsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->version->getVersions($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVersion

Update an existing version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Version;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVersionRequest();
    $request->version = new Version();
    $request->version->codename = 'debitis';
    $request->version->from = 'a';
    $request->version->isBeta = false;
    $request->version->isDeprecated = false;
    $request->version->isHidden = false;
    $request->version->isStable = false;
    $request->version->version = 'dolorum';
    $request->versionId = 'in';

    $requestSecurity = new UpdateVersionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->version->updateVersion($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
