# files

### Available Operations

* [getFilesFileId](#getfilesfileid) - /files/{file_id}
* [postFilesFileIdGetTemporaryLink](#postfilesfileidgettemporarylink) - /files/{file_id}/get_temporary_link

## getFilesFileId

### Get details for a file.

Retrieve the metadata for an individual file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFilesFileIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilesFileIdRequest();
    $request->fileId = '7aff1a3a-2fa9-4467-b392-51aa52c3f5ad';

    $response = $sdk->files->getFilesFileId($request);

    if ($response->getFilesFileId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFilesFileIdGetTemporaryLink

### Get a temporary link to stream the contents of a file

Generates and returns a temporary link to access the content of a file that expires in 15 minutes. The Content-Type of the link is determined automatically by the file's format.

<!-- theme: info -->

> #### The Link URL should not be displayed on your front-end
> Since these links are temporary, Herald encourages you to not display the URL on your front end.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostFilesFileIdGetTemporaryLinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFilesFileIdGetTemporaryLinkRequest();
    $request->fileId = '019da1ff-e78f-4097-b007-4f15471b5e6e';

    $response = $sdk->files->postFilesFileIdGetTemporaryLink($request);

    if ($response->postFilesFileIdGetTemporaryLink200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
