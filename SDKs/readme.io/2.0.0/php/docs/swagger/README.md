# swagger

### Available Operations

* [~~deleteSwagger~~](#deleteswagger) - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe :warning: **Deprecated**
* [~~updateSwagger~~](#updateswagger) - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file. :warning: **Deprecated**
* [~~uploadSwagger~~](#uploadswagger) - DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe :warning: **Deprecated**

## ~~deleteSwagger~~

DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSwaggerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSwaggerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSwaggerRequest();
    $request->id = '97b0074f-1547-41b5-a6e1-3b99d488e1e9';

    $requestSecurity = new DeleteSwaggerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->swagger->deleteSwagger($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~updateSwagger~~

DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSwaggerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSwaggerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSwaggerRequestBodySwagger;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSwaggerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSwaggerRequest();
    $request->requestBody = new UpdateSwaggerRequestBody();
    $request->requestBody->swagger = new UpdateSwaggerRequestBodySwagger();
    $request->requestBody->swagger->content = 'veritatis';
    $request->requestBody->swagger->swagger = 'itaque';
    $request->id = '450ad2ab-d442-4698-82d5-02a94bb4f63c';

    $requestSecurity = new UpdateSwaggerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->swagger->updateSwagger($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~uploadSwagger~~

DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UploadSwaggerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UploadSwaggerRequestBodySwagger;
use \OpenAPI\OpenAPI\Models\Operations\UploadSwaggerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadSwaggerRequestBody();
    $request->swagger = new UploadSwaggerRequestBodySwagger();
    $request->swagger->content = 'sint';
    $request->swagger->swagger = 'aliquid';

    $requestSecurity = new UploadSwaggerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->swagger->uploadSwagger($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
