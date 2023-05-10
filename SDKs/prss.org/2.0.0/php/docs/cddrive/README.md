# cdDrive

## Overview

ContentDepot Drive functionality for uploading and stating content files for use in other API operations.

### Available Operations

* [deleteApiV2CddriveFilesFileId](#deleteapiv2cddrivefilesfileid) - Delete a file.
* [deleteApiV2CddriveFoldersFolderId](#deleteapiv2cddrivefoldersfolderid) - UNDER DEVELOPMENT - Delete a folder.
* [getApiV2CddriveFilesFileId](#getapiv2cddrivefilesfileid) - Get file information.
* [getApiV2CddriveFilesFileIdContent](#getapiv2cddrivefilesfileidcontent) - UNDER DEVELOPMENT - Download a file.
* [getApiV2CddriveFoldersFolderId](#getapiv2cddrivefoldersfolderid) - UNDER DEVELOPMENT - Get folder information.
* [getApiV2CddriveFoldersFolderIdItems](#getapiv2cddrivefoldersfolderiditems) - Get the items in the folder.
* [postApiV2CddriveFilesContent](#postapiv2cddrivefilescontent) - Upload a file.
* [postApiV2CddriveFolders](#postapiv2cddrivefolders) - Create a folder.

## deleteApiV2CddriveFilesFileId

Delete a file from the customer's private CD Drive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV2CddriveFilesFileIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV2CddriveFilesFileIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiV2CddriveFilesFileIdRequest();
    $request->fileId = 847252;

    $requestSecurity = new DeleteApiV2CddriveFilesFileIdSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cdDrive->deleteApiV2CddriveFilesFileId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiV2CddriveFoldersFolderId

Delete a file from the customer's private CD Drive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV2CddriveFoldersFolderIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV2CddriveFoldersFolderIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiV2CddriveFoldersFolderIdRequest();
    $request->folderId = 423655;
    $request->recursive = false;

    $requestSecurity = new DeleteApiV2CddriveFoldersFolderIdSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cdDrive->deleteApiV2CddriveFoldersFolderId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2CddriveFilesFileId

Get the information about a file in the customer's private CD Drive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2CddriveFilesFileIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2CddriveFilesFileIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2CddriveFilesFileIdRequest();
    $request->fileId = 623564;

    $requestSecurity = new GetApiV2CddriveFilesFileIdSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cdDrive->getApiV2CddriveFilesFileId($request, $requestSecurity);

    if ($response->cdDriveFile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2CddriveFilesFileIdContent

Download a file from the customer's private CD Drive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2CddriveFilesFileIdContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2CddriveFilesFileIdContentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2CddriveFilesFileIdContentRequest();
    $request->range = 'deserunt';
    $request->fileId = 384382;

    $requestSecurity = new GetApiV2CddriveFilesFileIdContentSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cdDrive->getApiV2CddriveFilesFileIdContent($request, $requestSecurity);

    if ($response->getApiV2CddriveFilesFileIdContent200ApplicationOctetStreamBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2CddriveFoldersFolderId

Get the information about a folder in the customer's private CD Drive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2CddriveFoldersFolderIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2CddriveFoldersFolderIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2CddriveFoldersFolderIdRequest();
    $request->folderId = 437587;

    $requestSecurity = new GetApiV2CddriveFoldersFolderIdSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cdDrive->getApiV2CddriveFoldersFolderId($request, $requestSecurity);

    if ($response->cdDriveFolder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2CddriveFoldersFolderIdItems

Get the information about a folder in the customer's private CD Drive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2CddriveFoldersFolderIdItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2CddriveFoldersFolderIdItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2CddriveFoldersFolderIdItemsRequest();
    $request->folderId = 297534;
    $request->limit = 891773;
    $request->offset = 56713;

    $requestSecurity = new GetApiV2CddriveFoldersFolderIdItemsSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cdDrive->getApiV2CddriveFoldersFolderIdItems($request, $requestSecurity);

    if ($response->getApiV2CddriveFoldersFolderIdItems200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV2CddriveFilesContent

Upload a file to the customer's private CD Drive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV2CddriveFilesContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV2CddriveFilesContentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV2CddriveFilesContentRequestBodyFile;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV2CddriveFilesContentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV2CddriveFilesContentRequest();
    $request->contentMd5 = 'delectus';
    $request->requestBody = new PostApiV2CddriveFilesContentRequestBody();
    $request->requestBody->file = new PostApiV2CddriveFilesContentRequestBodyFile();
    $request->requestBody->file->content = 'tempora';
    $request->requestBody->file->file = 'suscipit';
    $request->requestBody->name = 'Alexandra Schulist';
    $request->requestBody->parentId = 568045;

    $requestSecurity = new PostApiV2CddriveFilesContentSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cdDrive->postApiV2CddriveFilesContent($request, $requestSecurity);

    if ($response->cdDriveFile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV2CddriveFolders

Create a new folder in the customer's private CD Drive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV2CddriveFoldersRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV2CddriveFoldersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV2CddriveFoldersRequestBody();
    $request->name = 'Mrs. Sophie Smith MD';
    $request->parentId = 20218;

    $requestSecurity = new PostApiV2CddriveFoldersSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cdDrive->postApiV2CddriveFolders($request, $requestSecurity);

    if ($response->cdDriveFolder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
