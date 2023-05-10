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
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolores';
    $request->fields = 'perferendis';
    $request->fileId = 'esse';
    $request->key = 'quas';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'laudantium';
    $request->reportId = 'voluptates';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'autem';

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
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consectetur';
    $request->fields = 'soluta';
    $request->key = 'tenetur';
    $request->maxResults = 897146;
    $request->oauthToken = 'perspiciatis';
    $request->pageToken = 'suscipit';
    $request->prettyPrint = false;
    $request->profileId = 'ullam';
    $request->quotaUser = 'unde';
    $request->scope = DfareportingFilesListScopeEnum::SHARED_WITH_ME;
    $request->sortField = DfareportingFilesListSortFieldEnum::LAST_MODIFIED_TIME;
    $request->sortOrder = DfareportingFilesListSortOrderEnum::ASCENDING;
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'accusamus';

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
