# rootUserDefinedTag

## Overview

User-defined resource tag management.

### Available Operations

* [createUserDefinedTag](#createuserdefinedtag) - Create a user-defined resource tag for tagging cloud compute resources
* [deleteUserDefinedTag](#deleteuserdefinedtag) - Delete a user-defined resource tag
* [deleteUserDefinedTagBulk](#deleteuserdefinedtagbulk) - Delete a list of user-defined resource tags
* [getUserDefinedTag](#getuserdefinedtag) - Get user-defined tag
* [queryUserDefinedTag](#queryuserdefinedtag) - Get user-defined resource tags
* [updateUserDefinedTag](#updateuserdefinedtag) - Update the value of a user-defined resource tag

## createUserDefinedTag

Create a user-defined resource tag for tagging cloud compute resources created by CloudOn and CloutOut.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTagDefinition;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResourceTagDefinition();
    $request->key = 'hic';
    $request->scopeRefId = 'blanditiis';
    $request->value = 'maiores';

    $response = $sdk->rootUserDefinedTag->createUserDefinedTag($request);

    if ($response->resourceTagDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserDefinedTag

Delete a user-defined resource tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserDefinedTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserDefinedTagRequest();
    $request->id = '1bf0bc8e-1f20-46d5-9831-d0081090f670';

    $response = $sdk->rootUserDefinedTag->deleteUserDefinedTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserDefinedTagBulk

Delete a list of user-defined resource tags in one delete operation.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserDefinedTagBulkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserDefinedTagBulkRequest();
    $request->ids = [
        'laboriosam',
        'ducimus',
    ];

    $response = $sdk->rootUserDefinedTag->deleteUserDefinedTagBulk($request);

    if ($response->resourceTagDeleteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserDefinedTag

Retrieve details of a user-defined resource tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetUserDefinedTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserDefinedTagRequest();
    $request->id = '3f3a681c-5768-4dce-b424-09a215e08601';

    $response = $sdk->rootUserDefinedTag->getUserDefinedTag($request);

    if ($response->resourceTagDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryUserDefinedTag

Get user-defined resource tags for the cloud compute resources created by CloudOn and CloudOut.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryUserDefinedTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryUserDefinedTagRequest();
    $request->key = 'tempora';
    $request->scopeRefId = 'molestias';

    $response = $sdk->rootUserDefinedTag->queryUserDefinedTag($request);

    if ($response->resourceTagGetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUserDefinedTag

Update the value of a user-defined resource tag.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserDefinedTagRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTagUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserDefinedTagRequest();
    $request->resourceTagUpdate = new ResourceTagUpdate();
    $request->resourceTagUpdate->value = 'cupiditate';
    $request->id = 'a5f63e3a-f3dd-49dd-a33d-cd63483e4a7a';

    $response = $sdk->rootUserDefinedTag->updateUserDefinedTag($request);

    if ($response->resourceTagDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
