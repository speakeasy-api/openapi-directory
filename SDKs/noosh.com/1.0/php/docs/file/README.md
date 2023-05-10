# file

### Available Operations

* [getFile](#getfile) - Get File from Project.  Works for Regular and Remote Files
* [getFileTags](#getfiletags) - List Tags from Workgroup and Project.
* [getFiles](#getfiles) - List Files from Project.  Works for Regular and Remote Files
* [uploadFile](#uploadfile) - Upload File to Project.  A multipart/form-data request with a name "file"

## getFile

Get File from Project.  Works for Regular and Remote Files

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFileRequest();
    $request->fileId = 'excepturi';
    $request->projectId = 'nisi';
    $request->workgroupId = 'recusandae';

    $response = $sdk->file->getFile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFileTags

List Tags from Workgroup and Project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFileTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFileTagsRequest();
    $request->projectId = 'temporibus';
    $request->workgroupId = 'ab';

    $response = $sdk->file->getFileTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFiles

List Files from Project.  Works for Regular and Remote Files

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilesRequest();
    $request->projectId = 'quis';
    $request->workgroupId = 'veritatis';

    $response = $sdk->file->getFiles($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadFile

Upload File to Project.  A multipart/form-data request with a name "file"

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UploadFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UploadFileRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadFileRequest();
    $request->requestBody = new UploadFileRequestBody();
    $request->requestBody->content = 'deserunt';
    $request->requestBody->requestBody = 'perferendis';
    $request->projectId = 'ipsam';
    $request->workgroupId = 'repellendus';

    $response = $sdk->file->uploadFile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
