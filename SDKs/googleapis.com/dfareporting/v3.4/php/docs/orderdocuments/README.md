# orderDocuments

### Available Operations

* [dfareportingOrderDocumentsGet](#dfareportingorderdocumentsget) - Gets one order document by ID.
* [dfareportingOrderDocumentsList](#dfareportingorderdocumentslist) - Retrieves a list of order documents, possibly filtered. This method supports paging.

## dfareportingOrderDocumentsGet

Gets one order document by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOrderDocumentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOrderDocumentsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingOrderDocumentsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nemo';
    $request->fields = 'dolore';
    $request->id = '8568a042-4e00-4a1d-aeb9-434645d03084';
    $request->key = 'repellat';
    $request->oauthToken = 'expedita';
    $request->prettyPrint = false;
    $request->profileId = 'libero';
    $request->projectId = 'mollitia';
    $request->quotaUser = 'quis';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new DfareportingOrderDocumentsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orderDocuments->dfareportingOrderDocumentsGet($request, $requestSecurity);

    if ($response->orderDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingOrderDocumentsList

Retrieves a list of order documents, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOrderDocumentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOrderDocumentsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOrderDocumentsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOrderDocumentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingOrderDocumentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->approved = false;
    $request->callback = 'ipsam';
    $request->fields = 'quod';
    $request->ids = [
        'doloremque',
        'illo',
        'reiciendis',
    ];
    $request->key = 'debitis';
    $request->maxResults = 314728;
    $request->oauthToken = 'quasi';
    $request->orderId = [
        'ipsam',
        'aspernatur',
        'atque',
        'animi',
    ];
    $request->pageToken = 'eius';
    $request->prettyPrint = false;
    $request->profileId = 'ad';
    $request->projectId = 'mollitia';
    $request->quotaUser = 'minus';
    $request->searchString = 'quos';
    $request->siteId = [
        'distinctio',
    ];
    $request->sortField = DfareportingOrderDocumentsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingOrderDocumentsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'corrupti';

    $requestSecurity = new DfareportingOrderDocumentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orderDocuments->dfareportingOrderDocumentsList($request, $requestSecurity);

    if ($response->orderDocumentsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
