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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ratione';
    $request->fields = 'eos';
    $request->fileId = 'id';
    $request->key = 'modi';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->reportId = 'consectetur';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'eligendi';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'a';
    $request->fields = 'magnam';
    $request->key = 'eius';
    $request->maxResults = 323876;
    $request->oauthToken = 'quia';
    $request->pageToken = 'quod';
    $request->prettyPrint = false;
    $request->profileId = 'quaerat';
    $request->quotaUser = 'voluptatum';
    $request->scope = DfareportingFilesListScopeEnum::ALL;
    $request->sortField = DfareportingFilesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingFilesListSortOrderEnum::DESCENDING;
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'tempore';

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
