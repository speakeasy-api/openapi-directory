# privateQOD

## Overview

Define and host your own quote of the day service. You can set filter conditions based on tags, authors, your own quote collection etc. and our platform  will do the magic for you.

Find out more
<https://theysaidso.com/api/quote#qod>
### Available Operations

* [getQod](#getqod) - Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day

* [patchQod](#patchqod) - Update an existing private `Quote of the Day` definition.

* [putQod](#putqod) - Create a private `Quote of the Day` service. 


## getQod

Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQodRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQodSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQodRequest();
    $request->category = 'quibusdam';
    $request->id = 'unde';
    $request->language = 'nulla';

    $requestSecurity = new GetQodSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->privateQOD->getQod($request, $requestSecurity);

    if ($response->qodResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchQod

Update an existing private `Quote of the Day` definition.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchQodRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchQodSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchQodRequest();
    $request->authors = 'corrupti';
    $request->language = 'illum';
    $request->private = false;
    $request->repeatAfter = 423655;
    $request->sfw = false;
    $request->title = 'error';

    $requestSecurity = new PatchQodSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->privateQOD->patchQod($request, $requestSecurity);

    if ($response->quoteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putQod

Create a private `Quote of the Day` service. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutQodRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutQodSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutQodRequest();
    $request->authors = 'deserunt';
    $request->language = 'suscipit';
    $request->private = false;
    $request->repeatAfter = 437587;
    $request->sfw = false;
    $request->title = 'magnam';

    $requestSecurity = new PutQodSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->privateQOD->putQod($request, $requestSecurity);

    if ($response->successResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
