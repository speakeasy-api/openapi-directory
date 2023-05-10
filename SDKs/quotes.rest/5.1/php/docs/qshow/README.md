# qshow

## Overview

Access Qshow - quote collection service. Create curated quotes collection. You can group quotes by any way you want and access them as a single unit. You need an API key to access this service.

### Available Operations

* [deleteQshow](#deleteqshow) - Delete a qshow.

* [getQshow](#getqshow) - Gets a details about a qshow.

* [getQshowList](#getqshowlist) - Get the list of Qshows in They Said So platform.
* [getQshowQuotes](#getqshowquotes) - Get the quotes in a given Qshow.
* [patchQshow](#patchqshow) - Update an existing qshow.
* [postQshowQuotesAdd](#postqshowquotesadd) - Add a quote to a given Qshow.
* [postQshowQuotesRemove](#postqshowquotesremove) - Remove a quote to a given Qshow.
* [putQshow](#putqshow) - Create and add a new qshow to your private collection.

## deleteQshow

Delete a qshow.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQshowRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQshowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteQshowRequest();
    $request->id = 'sapiente';

    $requestSecurity = new DeleteQshowSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->qshow->deleteQshow($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQshow

Gets a details about a qshow.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQshowRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQshowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQshowRequest();
    $request->id = 'quo';

    $requestSecurity = new GetQshowSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->qshow->getQshow($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQshowList

Get the list of Qshows in They Said So platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQshowListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQshowListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQshowListRequest();
    $request->public = false;
    $request->start = 140350;

    $requestSecurity = new GetQshowListSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->qshow->getQshowList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQshowQuotes

Get the quotes in a given Qshow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQshowQuotesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQshowQuotesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQshowQuotesRequest();
    $request->id = 'at';

    $requestSecurity = new GetQshowQuotesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->qshow->getQshowQuotes($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchQshow

Update an existing qshow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchQshowRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchQshowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchQshowRequest();
    $request->description = 'at';
    $request->id = 'maiores';
    $request->tags = [
        'quod',
        'quod',
    ];
    $request->title = 'esse';

    $requestSecurity = new PatchQshowSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->qshow->patchQshow($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postQshowQuotesAdd

Add a quote to a given Qshow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostQshowQuotesAddRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostQshowQuotesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostQshowQuotesAddRequest();
    $request->id = 'totam';
    $request->quoteid = 'porro';

    $requestSecurity = new PostQshowQuotesAddSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->qshow->postQshowQuotesAdd($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postQshowQuotesRemove

Remove a quote to a given Qshow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostQshowQuotesRemoveRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostQshowQuotesRemoveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostQshowQuotesRemoveRequest();
    $request->id = 'dolorum';
    $request->quoteid = 'dicta';

    $requestSecurity = new PostQshowQuotesRemoveSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->qshow->postQshowQuotesRemove($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putQshow

Create and add a new qshow to your private collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutQshowRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutQshowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutQshowRequest();
    $request->description = 'nam';
    $request->tags = [
        'occaecati',
        'fugit',
        'deleniti',
    ];
    $request->title = 'hic';

    $requestSecurity = new PutQshowSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->qshow->putQshow($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
