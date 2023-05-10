# developerAccountsFindAndModifyDeveloperAccounts

### Available Operations

* [deleteDeveloperAccountsDeveloperAccountId](#deletedeveloperaccountsdeveloperaccountid) - Removes the developer account
* [getDeveloperAccounts](#getdeveloperaccounts) - Returns a paginated list of developerAccounts
* [getDeveloperAccountsDeveloperAccountId](#getdeveloperaccountsdeveloperaccountid) - Returns a single developer account
* [patchDeveloperAccountsDeveloperAccountId](#patchdeveloperaccountsdeveloperaccountid) - Updates the developer account fields
* [postDeveloperAccountsDeveloperAccountId](#postdeveloperaccountsdeveloperaccountid) - Updates the developer account or adds the developer account if it doesn't exist

## deleteDeveloperAccountsDeveloperAccountId

Removes the developer account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeveloperAccountsDeveloperAccountIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeveloperAccountsDeveloperAccountIdRequest();
    $request->developerAccountId = 'accusantium';

    $response = $sdk->developerAccountsFindAndModifyDeveloperAccounts->deleteDeveloperAccountsDeveloperAccountId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeveloperAccounts

- Results are paginated and the default is value is 1000 if no limit is provided


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeveloperAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeveloperAccountsRequest();
    $request->limit = 438601;
    $request->pageNumber = 634274;
    $request->query = 'doloribus';
    $request->sort = 'sapiente';

    $response = $sdk->developerAccountsFindAndModifyDeveloperAccounts->getDeveloperAccounts($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeveloperAccountsDeveloperAccountId

Returns a single developer account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeveloperAccountsDeveloperAccountIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeveloperAccountsDeveloperAccountIdRequest();
    $request->developerAccountId = 'architecto';

    $response = $sdk->developerAccountsFindAndModifyDeveloperAccounts->getDeveloperAccountsDeveloperAccountId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchDeveloperAccountsDeveloperAccountId

Updates the developer account fields

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchDeveloperAccountsDeveloperAccountIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchDeveloperAccountsDeveloperAccountIdRequest();
    $request->customData = 'mollitia';
    $request->developerAccountId = 'dolorem';
    $request->developerId = 'culpa';
    $request->email = 'Zechariah.OHara@gmail.com';
    $request->name = 'Claudia Krajcik';

    $response = $sdk->developerAccountsFindAndModifyDeveloperAccounts->patchDeveloperAccountsDeveloperAccountId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeveloperAccountsDeveloperAccountId

Updates the developer account or adds the developer account if it doesn't exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostDeveloperAccountsDeveloperAccountIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostDeveloperAccountsDeveloperAccountIdRequest();
    $request->customData = 'quia';
    $request->developerAccountId = 'quis';
    $request->developerId = 'vitae';
    $request->email = 'Madison77@hotmail.com';
    $request->name = 'Mandy Hills';

    $response = $sdk->developerAccountsFindAndModifyDeveloperAccounts->postDeveloperAccountsDeveloperAccountId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
