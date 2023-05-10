# ownershipFindOwnership

### Available Operations

* [getOwnership](#getownership) - Returns a paginated list of app licenses
* [getOwnershipOwnershipId](#getownershipownershipid) - Returns an ownership record
* [patchOwnershipOwnershipId](#patchownershipownershipid) - Updates ownership fields
* [postOwnershipInstall](#postownershipinstall) - Aquires an app license for a user (installs app)
* [postOwnershipUninstallOwnershipId](#postownershipuninstallownershipid) - Uninstalls a license for a particular user and app (uninstalls app)
* [postOwnershipOwnershipId](#postownershipownershipid) - Updates an ownership record

## getOwnership

 - Results are returned for the market provided within the basic authentication credentials 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOwnershipRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOwnershipRequest();
    $request->limit = 289406;
    $request->pageNumber = 264730;
    $request->query = 'qui';
    $request->sort = 'aliquid';

    $response = $sdk->ownershipFindOwnership->getOwnership($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOwnershipOwnershipId

 - Results are returned for the market provided within the basic authentication credentials 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOwnershipOwnershipIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOwnershipOwnershipIdRequest();
    $request->ownershipId = 'cupiditate';

    $response = $sdk->ownershipFindOwnership->getOwnershipOwnershipId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchOwnershipOwnershipId

 - Results are returned for the market provided within the basic authentication credentials 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchOwnershipOwnershipIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchOwnershipOwnershipIdRequest();
    $request->customData = 'quos';
    $request->expires = 20107;
    $request->ownershipId = 'magni';

    $response = $sdk->ownershipFindOwnership->patchOwnershipOwnershipId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOwnershipInstall

 - This method is called on behalf of a user - This method requires either a modelId from the app or a custom model - User data and statistics are recorded when this method is called 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostOwnershipInstallRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOwnershipInstallRequest();
    $request->appId = 'assumenda';
    $request->customData = 'ipsam';
    $request->model = 'alias';
    $request->modelId = 'fugit';
    $request->userId = 'dolorum';

    $response = $sdk->ownershipFindOwnership->postOwnershipInstall($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOwnershipUninstallOwnershipId

 - This method is called on behalf of a user - User data and statistics are recorded when this method is called 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostOwnershipUninstallOwnershipIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOwnershipUninstallOwnershipIdRequest();
    $request->cancelOwnership = false;
    $request->customData = 'excepturi';
    $request->ownershipId = 'tempora';
    $request->userId = 'facilis';

    $response = $sdk->ownershipFindOwnership->postOwnershipUninstallOwnershipId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOwnershipOwnershipId

 - Results are returned for the market provided within the basic authentication credentials 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostOwnershipOwnershipIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOwnershipOwnershipIdRequest();
    $request->customData = 'tempore';
    $request->expires = 288476;
    $request->ownershipId = 'delectus';

    $response = $sdk->ownershipFindOwnership->postOwnershipOwnershipId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
