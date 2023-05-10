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
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'corrupti';
    $request->id = '6bcf1525-58da-4a95-be6c-d02756c354aa';
    $request->key = 'labore';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->profileId = 'ratione';
    $request->projectId = 'cum';
    $request->quotaUser = 'magnam';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'officiis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->approved = false;
    $request->callback = 'amet';
    $request->fields = 'minus';
    $request->ids = [
        'explicabo',
        'alias',
    ];
    $request->key = 'blanditiis';
    $request->maxResults = 755809;
    $request->oauthToken = 'qui';
    $request->orderId = [
        'recusandae',
    ];
    $request->pageToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->profileId = 'corrupti';
    $request->projectId = 'sit';
    $request->quotaUser = 'magni';
    $request->searchString = 'repellendus';
    $request->siteId = [
        'ratione',
        'sapiente',
        'alias',
    ];
    $request->sortField = DfareportingOrderDocumentsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingOrderDocumentsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'repudiandae';

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
