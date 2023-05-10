# files

### Available Operations

* [dfareportingFilesGet](#dfareportingfilesget) - Retrieves a report file by its report ID and file ID. This method supports media download.
* [dfareportingFilesList](#dfareportingfileslist) - Lists files for a user profile.

## dfareportingFilesGet

Retrieves a report file by its report ID and file ID. This method supports media download.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFilesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFilesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFilesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'laboriosam';
    $request->fileId = 'nemo';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->reportId = 'vel';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'maxime';

    $requestSecurity = new DfareportingFilesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->dfareportingFilesGet($request, $requestSecurity);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingFilesList

Lists files for a user profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFilesListScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFilesListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFilesListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFilesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFilesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'quis';
    $request->key = 'deleniti';
    $request->maxResults = 480558;
    $request->oauthToken = 'quod';
    $request->pageToken = 'saepe';
    $request->prettyPrint = false;
    $request->profileId = 'ad';
    $request->quotaUser = 'magni';
    $request->scope = DfareportingFilesListScopeEnum::MINE;
    $request->sortField = DfareportingFilesListSortFieldEnum::LAST_MODIFIED_TIME;
    $request->sortOrder = DfareportingFilesListSortOrderEnum::ASCENDING;
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new DfareportingFilesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->dfareportingFilesList($request, $requestSecurity);

    if ($response->fileList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
