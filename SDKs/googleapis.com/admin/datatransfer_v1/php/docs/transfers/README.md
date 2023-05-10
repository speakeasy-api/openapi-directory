# transfers

### Available Operations

* [datatransferTransfersGet](#datatransfertransfersget) - Retrieves a data transfer request by its resource ID.
* [datatransferTransfersInsert](#datatransfertransfersinsert) - Inserts a data transfer request. See the [Transfer parameters](/admin-sdk/data-transfer/v1/parameters) reference for specific application requirements.
* [datatransferTransfersList](#datatransfertransferslist) - Lists the transfers for a customer by source user, destination user, or status.

## datatransferTransfersGet

Retrieves a data transfer request by its resource ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferTransfersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferTransfersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferTransfersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferTransfersGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatatransferTransfersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->dataTransferId = 'at';
    $request->fields = 'maiores';
    $request->key = 'molestiae';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new DatatransferTransfersGetSecurity();
    $requestSecurity->option1 = new DatatransferTransfersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->transfers->datatransferTransfersGet($request, $requestSecurity);

    if ($response->dataTransfer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datatransferTransfersInsert

Inserts a data transfer request. See the [Transfer parameters](/admin-sdk/data-transfer/v1/parameters) reference for specific application requirements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferTransfersInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataTransfer;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationDataTransfer;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationTransferParam;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferTransfersInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatatransferTransfersInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->dataTransfer = new DataTransfer();
    $request->dataTransfer->applicationDataTransfers = [
        new ApplicationDataTransfer(),
        new ApplicationDataTransfer(),
        new ApplicationDataTransfer(),
    ];
    $request->dataTransfer->etag = 'dicta';
    $request->dataTransfer->id = 'ba928fc8-1674-42cb-b392-05929396fea7';
    $request->dataTransfer->kind = 'corporis';
    $request->dataTransfer->newOwnerUserId = 'iste';
    $request->dataTransfer->oldOwnerUserId = 'iure';
    $request->dataTransfer->overallTransferStatusCode = 'saepe';
    $request->dataTransfer->requestTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-20T12:36:28.767Z');
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'mollitia';
    $request->key = 'laborum';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new DatatransferTransfersInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->transfers->datatransferTransfersInsert($request, $requestSecurity);

    if ($response->dataTransfer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datatransferTransfersList

Lists the transfers for a customer by source user, destination user, or status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferTransfersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferTransfersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferTransfersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferTransfersListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatatransferTransfersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->customerId = 'minima';
    $request->fields = 'excepturi';
    $request->key = 'accusantium';
    $request->maxResults = 438601;
    $request->newOwnerUserId = 'culpa';
    $request->oauthToken = 'doloribus';
    $request->oldOwnerUserId = 'sapiente';
    $request->pageToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->status = 'dolorem';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new DatatransferTransfersListSecurity();
    $requestSecurity->option1 = new DatatransferTransfersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->transfers->datatransferTransfersList($request, $requestSecurity);

    if ($response->dataTransfersListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
