# sdfdownloadtasks

### Available Operations

* [displayvideoSdfdownloadtasksCreate](#displayvideosdfdownloadtaskscreate) - Creates an SDF Download Task. Returns an Operation. An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with sdfdownloadtask.operations.get. Any errors can be found in the error.message. Note that error.details is expected to be empty.
* [displayvideoSdfdownloadtasksOperationsGet](#displayvideosdfdownloadtasksoperationsget) - Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.

## displayvideoSdfdownloadtasksCreate

Creates an SDF Download Task. Returns an Operation. An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with sdfdownloadtask.operations.get. Any errors can be found in the error.message. Note that error.details is expected to be empty.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoSdfdownloadtasksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateSdfDownloadTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdFilter;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceFilter;
use \OpenAPI\OpenAPI\Models\Shared\ParentEntityFilter;
use \OpenAPI\OpenAPI\Models\Shared\ParentEntityFilterFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParentEntityFilterFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateSdfDownloadTaskRequestVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoSdfdownloadtasksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoSdfdownloadtasksCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createSdfDownloadTaskRequest = new CreateSdfDownloadTaskRequest();
    $request->createSdfDownloadTaskRequest->advertiserId = 'minus';
    $request->createSdfDownloadTaskRequest->idFilter = new IdFilter();
    $request->createSdfDownloadTaskRequest->idFilter->adGroupAdIds = [
        'quos',
        'asperiores',
        'voluptatum',
        'iste',
    ];
    $request->createSdfDownloadTaskRequest->idFilter->adGroupIds = [
        'accusantium',
        'illo',
    ];
    $request->createSdfDownloadTaskRequest->idFilter->campaignIds = [
        'doloribus',
    ];
    $request->createSdfDownloadTaskRequest->idFilter->insertionOrderIds = [
        'at',
        'possimus',
    ];
    $request->createSdfDownloadTaskRequest->idFilter->lineItemIds = [
        'pariatur',
    ];
    $request->createSdfDownloadTaskRequest->idFilter->mediaProductIds = [
        'sapiente',
        'mollitia',
    ];
    $request->createSdfDownloadTaskRequest->inventorySourceFilter = new InventorySourceFilter();
    $request->createSdfDownloadTaskRequest->inventorySourceFilter->inventorySourceIds = [
        'quos',
    ];
    $request->createSdfDownloadTaskRequest->parentEntityFilter = new ParentEntityFilter();
    $request->createSdfDownloadTaskRequest->parentEntityFilter->fileType = [
        ParentEntityFilterFileTypeEnum::FILE_TYPE_CAMPAIGN,
    ];
    $request->createSdfDownloadTaskRequest->parentEntityFilter->filterIds = [
        'ad',
        'aliquam',
        'quisquam',
        'quas',
    ];
    $request->createSdfDownloadTaskRequest->parentEntityFilter->filterType = ParentEntityFilterFilterTypeEnum::FILTER_TYPE_NONE;
    $request->createSdfDownloadTaskRequest->partnerId = 'maiores';
    $request->createSdfDownloadTaskRequest->version = CreateSdfDownloadTaskRequestVersionEnum::SDF_VERSION_UNSPECIFIED;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'est';
    $request->fields = 'dolor';
    $request->key = 'aliquid';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new DisplayvideoSdfdownloadtasksCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdfdownloadtasks->displayvideoSdfdownloadtasksCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoSdfdownloadtasksOperationsGet

Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoSdfdownloadtasksOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoSdfdownloadtasksOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoSdfdownloadtasksOperationsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoSdfdownloadtasksOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'blanditiis';
    $request->key = 'numquam';
    $request->name = 'Margie Balistreri DVM';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new DisplayvideoSdfdownloadtasksOperationsGetSecurity();
    $requestSecurity->option1 = new DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdfdownloadtasks->displayvideoSdfdownloadtasksOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
