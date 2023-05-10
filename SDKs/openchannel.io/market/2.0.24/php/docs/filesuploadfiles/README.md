# filesUploadFiles

### Available Operations

* [getFiles](#getfiles) - Returns a paginated list of files
* [getFilesByIdOrUrl](#getfilesbyidorurl) - Get the details for a file.
* [getFilesDownload](#getfilesdownload) - A signed URL for downloading a private file can be returned by providing the fileId.
* [postFiles](#postfiles) - Uploads a file.
* [postFilesUrl](#postfilesurl) - Uploads a file from a URL

## getFiles

Returns a paginated list of files

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilesRequest();
    $request->limit = 83112;
    $request->pageNumber = 929297;
    $request->query = 'incidunt';
    $request->sort = 'enim';

    $response = $sdk->filesUploadFiles->getFiles($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFilesByIdOrUrl

Get the details for a file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFilesByIdOrUrlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilesByIdOrUrlRequest();
    $request->fileIdOrUrl = 'consequatur';

    $response = $sdk->filesUploadFiles->getFilesByIdOrUrl($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFilesDownload

A signed URL for downloading a private file can be returned by providing the fileId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFilesDownloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilesDownloadRequest();
    $request->fileId = 'est';
    $request->validSeconds = 842342;

    $response = $sdk->filesUploadFiles->getFilesDownload($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFiles

- WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days. 
- This method is called on behalf of a developer.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostFilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostFilesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostFilesRequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFilesRequest();
    $request->requestBody = new PostFilesRequestBody();
    $request->requestBody->file = new PostFilesRequestBodyFile();
    $request->requestBody->file->content = 'explicabo';
    $request->requestBody->file->file = 'deserunt';
    $request->hash = 'distinctio';
    $request->isPrivate = false;

    $response = $sdk->filesUploadFiles->postFiles($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFilesUrl

- WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days.
- This method is called on behalf of a developer.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostFilesUrlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFilesUrlRequest();
    $request->isPrivate = false;
    $request->url = 'quibusdam';

    $response = $sdk->filesUploadFiles->postFilesUrl($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
