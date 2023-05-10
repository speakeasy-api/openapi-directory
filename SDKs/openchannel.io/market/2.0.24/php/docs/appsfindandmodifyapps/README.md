# appsFindAndModifyApps

### Available Operations

* [deleteAppsAppId](#deleteappsappid) - Removes app and all versions
* [deleteAppsAppIdVersionsVersion](#deleteappsappidversionsversion) - Removes AppVersion
* [getApps](#getapps) - Returns a paginated list of APPROVED or SUSPENDED apps
* [getAppsBySafeNameSafeName](#getappsbysafenamesafename) - Returns a single APPROVED or SUSPENDED app
* [getAppsTextSearch](#getappstextsearch) - Searches through the text of fields to find APPROVED or SUSPENDED apps
* [getAppsVersions](#getappsversions) - Returns a paginated list of AppVersions
* [getAppsAppId](#getappsappid) - Returns a single APPROVED or SUSPENDED app
* [getAppsAppIdVersionsVersion](#getappsappidversionsversion) - Returns a single AppVersion
* [patchAppsAppIdVersionsVersion](#patchappsappidversionsversion) - Updates the app fields or creates a new version
* [postApps](#postapps) - Adds a new app for this developer
* [postAppsAppIdLive](#postappsappidlive) - Change the live app to another, previously approved version
* [postAppsAppIdPublish](#postappsappidpublish) - Publishes the current working version of the app to the marketplace
* [postAppsAppIdVersionsVersion](#postappsappidversionsversion) - Updates the app or creates a new version
* [postAppsAppIdVersionsVersionStatus](#postappsappidversionsversionstatus) - Allows a developer or administrator to change the status of apps

## deleteAppsAppId

- This method is called on behalf of a developer.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppsAppIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppsAppIdRequest();
    $request->appId = 'distinctio';
    $request->developerId = 'quibusdam';

    $response = $sdk->appsFindAndModifyApps->deleteAppsAppId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAppsAppIdVersionsVersion

- This method is called on behalf of a developer.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppsAppIdVersionsVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppsAppIdVersionsVersionRequest();
    $request->appId = 'unde';
    $request->developerId = 'nulla';
    $request->version = 'corrupti';

    $response = $sdk->appsFindAndModifyApps->deleteAppsAppIdVersionsVersion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApps

- Results are paginated and the default is value is 1000 if no limit is provided
- If no query is specified, returns all APPROVED or SUSPENDED apps within the marketplace


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppsRequest();
    $request->isOwner = false;
    $request->limit = 847252;
    $request->pageNumber = 423655;
    $request->query = 'error';
    $request->sort = 'deserunt';
    $request->userId = 'suscipit';

    $response = $sdk->appsFindAndModifyApps->getApps($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAppsBySafeNameSafeName

- A 'view' event is recorded when trackViews is set to true


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsBySafeNameSafeNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppsBySafeNameSafeNameRequest();
    $request->safeName = 'iure';
    $request->trackViews = false;
    $request->userId = 'magnam';

    $response = $sdk->appsFindAndModifyApps->getAppsBySafeNameSafeName($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAppsTextSearch

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsTextSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppsTextSearchRequest();
    $request->fields = 'debitis';
    $request->isOwned = false;
    $request->limit = 56713;
    $request->pageNumber = 963663;
    $request->query = 'tempora';
    $request->text = 'suscipit';
    $request->userId = 'molestiae';

    $response = $sdk->appsFindAndModifyApps->getAppsTextSearch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAppsVersions

- Results are paginated when limit is set, otherwise all results are returned
- If no query is specified, returns all AppVersions within the marketplace
- Only returns AppVersions owned by this developer


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppsVersionsRequest();
    $request->developerId = 'minus';
    $request->limit = 812169;
    $request->pageNumber = 528895;
    $request->query = 'iusto';
    $request->sort = 'excepturi';

    $response = $sdk->appsFindAndModifyApps->getAppsVersions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAppsAppId

- A 'view' event is recorded when trackViews is set to true


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsAppIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppsAppIdRequest();
    $request->appId = 'nisi';
    $request->trackViews = false;
    $request->userId = 'recusandae';

    $response = $sdk->appsFindAndModifyApps->getAppsAppId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAppsAppIdVersionsVersion

- Only returns AppVersions owned by this developer


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsAppIdVersionsVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppsAppIdVersionsVersionRequest();
    $request->appId = 'temporibus';
    $request->developerId = 'ab';
    $request->version = 337396;

    $response = $sdk->appsFindAndModifyApps->getAppsAppIdVersionsVersion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchAppsAppIdVersionsVersion

- This method is called on behalf of a developer.
- Price and is required if the model is 'single' or 'recurring'
- Returns the newly updated app
- This endpoint updates only the fields provided in the request (relative update). In contrast, the POST version of this method replaces the entire object to match the request (absolute update). 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchAppsAppIdVersionsVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchAppsAppIdVersionsVersionRequest();
    $request->access = 'veritatis';
    $request->allow = 'deserunt';
    $request->appId = 'perferendis';
    $request->approvalRequired = 'ipsam';
    $request->attributes = 'repellendus';
    $request->customData = 'sapiente';
    $request->developerId = 'quo';
    $request->model = 'odit';
    $request->name = 'Wilfred Wolff';
    $request->restrict = 'quod';
    $request->type = 'esse';
    $request->version = 'totam';

    $response = $sdk->appsFindAndModifyApps->patchAppsAppIdVersionsVersion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApps

- This method is called on behalf of a developer.
- Price is required if the model is 'single' or 'recurring'
- Returns the newly created app


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAppsRequest();
    $request->access = 'porro';
    $request->allow = 'dolorum';
    $request->attributes = 'dicta';
    $request->customData = 'nam';
    $request->developerId = 'officia';
    $request->model = 'occaecati';
    $request->name = 'Cassandra Welch';
    $request->restrict = 'beatae';
    $request->type = 'commodi';

    $response = $sdk->appsFindAndModifyApps->postApps($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAppsAppIdLive

- This method is called on behalf of a developer.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsAppIdLiveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAppsAppIdLiveRequest();
    $request->appId = 'molestiae';
    $request->developerId = 'modi';
    $request->version = 'qui';

    $response = $sdk->appsFindAndModifyApps->postAppsAppIdLive($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAppsAppIdPublish

- This method is called on behalf of a developer. 
- Only effects the current working version of the app.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsAppIdPublishRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAppsAppIdPublishRequest();
    $request->appId = 'impedit';
    $request->autoApprove = false;
    $request->developerId = 'cum';
    $request->version = 456150;

    $response = $sdk->appsFindAndModifyApps->postAppsAppIdPublish($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAppsAppIdVersionsVersion

- This method is called on behalf of a developer.
- Price and is required if the model is 'single' or 'recurring'
- Returns the newly updated app
- This endpoint replaces the entire object to match the request (absolute update). In contrast, the PATCH version of this endpoint updates only the fields provided in the request (relative update).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsAppIdVersionsVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAppsAppIdVersionsVersionRequest();
    $request->access = 'ipsum';
    $request->allow = 'excepturi';
    $request->appId = 'aspernatur';
    $request->approvalRequired = 'perferendis';
    $request->attributes = 'ad';
    $request->customData = 'natus';
    $request->developerId = 'sed';
    $request->model = 'iste';
    $request->name = 'Faye Howe';
    $request->restrict = 'fuga';
    $request->type = 'in';
    $request->version = 'corporis';

    $response = $sdk->appsFindAndModifyApps->postAppsAppIdVersionsVersion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAppsAppIdVersionsVersionStatus

Only certain status changes are allowed. For instance, a developer is only able to suspend and unsuspend their app (which must already be approved). See here for a state change diagram of allowed status changes for administrators: https://support.openchannel.io/documentation/api/#415-apps-status-change


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsAppIdVersionsVersionStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsAppIdVersionsVersionStatusModifiedByEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsAppIdVersionsVersionStatusStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAppsAppIdVersionsVersionStatusRequest();
    $request->appId = 'iste';
    $request->developerId = 'iure';
    $request->modifiedBy = PostAppsAppIdVersionsVersionStatusModifiedByEnum::ADMINISTRATOR;
    $request->reason = 'quidem';
    $request->status = PostAppsAppIdVersionsVersionStatusStatusEnum::IN_REVIEW;
    $request->version = 60225;

    $response = $sdk->appsFindAndModifyApps->postAppsAppIdVersionsVersionStatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
