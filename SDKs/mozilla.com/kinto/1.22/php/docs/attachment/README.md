# attachment

### Available Operations

* [createAttachment](#createattachment)
* [deleteAttachment](#deleteattachment)

## createAttachment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAttachmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAttachmentRequest();
    $request->bucketId = 'ipsam';
    $request->collectionId = 'repellendus';
    $request->id = 'fc2ddf7c-c78c-4a1b-a928-fc816742cb73';

    $response = $sdk->attachment->createAttachment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAttachment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAttachmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAttachmentRequest();
    $request->bucketId = 'excepturi';
    $request->collectionId = 'aspernatur';
    $request->id = '05929396-fea7-4596-ab10-faaa2352c595';

    $response = $sdk->attachment->deleteAttachment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
