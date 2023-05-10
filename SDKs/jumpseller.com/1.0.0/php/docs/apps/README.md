# apps

### Available Operations

* [deleteJsappsCodeJson](#deletejsappscodejson) - Delete an existing JSApp.
* [getJsappsJson](#getjsappsjson) - Retrieve all the Store's JSApps.
* [getJsappsCodeJson](#getjsappscodejson) - Retrieve a JSApp.
* [postJsappsJson](#postjsappsjson) - Create a Store JSApp.

## deleteJsappsCodeJson

Delete an existing JSApp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJsappsCodeJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJsappsCodeJsonRequest();
    $request->authtoken = 'quibusdam';
    $request->code = 'unde';
    $request->login = 'nulla';

    $response = $sdk->apps->deleteJsappsCodeJson($request);

    if ($response->deleteJsappsCodeJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJsappsJson

Retrieve all the Store's JSApps.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJsappsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJsappsJsonRequest();
    $request->authtoken = 'corrupti';
    $request->login = 'illum';

    $response = $sdk->apps->getJsappsJson($request);

    if ($response->app !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJsappsCodeJson

Retrieve a JSApp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJsappsCodeJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJsappsCodeJsonRequest();
    $request->authtoken = 'vel';
    $request->code = 'error';
    $request->login = 'deserunt';

    $response = $sdk->apps->getJsappsCodeJson($request);

    if ($response->jsApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postJsappsJson

Create a Store JSApp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostJsappsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\JSAppEdit;
use \OpenAPI\OpenAPI\Models\Shared\JSApp;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostJsappsJsonRequest();
    $request->jsAppEdit = new JSAppEdit();
    $request->jsAppEdit->app = new JSApp();
    $request->jsAppEdit->app->element = 'suscipit';
    $request->jsAppEdit->app->template = 'iure';
    $request->jsAppEdit->app->url = 'magnam';
    $request->authtoken = 'debitis';
    $request->login = 'ipsa';

    $response = $sdk->apps->postJsappsJson($request);

    if ($response->jsApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
