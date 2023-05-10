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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloribus';
    $request->fields = 'praesentium';
    $request->id = '9451bd76-eeeb-4518-84da-1fad35512f06';
    $request->key = 'nulla';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->profileId = 'itaque';
    $request->projectId = 'enim';
    $request->quotaUser = 'nam';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'consequuntur';

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
    $request->accessToken = 'alias';
    $request->alt = AltEnum::PROTO;
    $request->approved = false;
    $request->callback = 'nemo';
    $request->fields = 'dolore';
    $request->ids = [
        'exercitationem',
        'commodi',
        'laudantium',
    ];
    $request->key = 'est';
    $request->maxResults = 8187;
    $request->oauthToken = 'incidunt';
    $request->orderId = [
        'labore',
    ];
    $request->pageToken = 'earum';
    $request->prettyPrint = false;
    $request->profileId = 'consequatur';
    $request->projectId = 'voluptatem';
    $request->quotaUser = 'officia';
    $request->searchString = 'architecto';
    $request->siteId = [
        'autem',
        'voluptates',
        'tempore',
        'cupiditate',
    ];
    $request->sortField = DfareportingOrderDocumentsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingOrderDocumentsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'ea';

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
