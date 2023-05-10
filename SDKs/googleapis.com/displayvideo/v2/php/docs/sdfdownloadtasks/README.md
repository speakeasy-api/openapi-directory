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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createSdfDownloadTaskRequest = new CreateSdfDownloadTaskRequest();
    $request->createSdfDownloadTaskRequest->advertiserId = 'necessitatibus';
    $request->createSdfDownloadTaskRequest->idFilter = new IdFilter();
    $request->createSdfDownloadTaskRequest->idFilter->adGroupAdIds = [
        'maiores',
        'laboriosam',
        'voluptatem',
    ];
    $request->createSdfDownloadTaskRequest->idFilter->adGroupIds = [
        'sequi',
        'sunt',
        'vitae',
        'voluptatibus',
    ];
    $request->createSdfDownloadTaskRequest->idFilter->campaignIds = [
        'sed',
    ];
    $request->createSdfDownloadTaskRequest->idFilter->insertionOrderIds = [
        'rerum',
    ];
    $request->createSdfDownloadTaskRequest->idFilter->lineItemIds = [
        'nostrum',
        'temporibus',
    ];
    $request->createSdfDownloadTaskRequest->idFilter->mediaProductIds = [
        'dolor',
    ];
    $request->createSdfDownloadTaskRequest->inventorySourceFilter = new InventorySourceFilter();
    $request->createSdfDownloadTaskRequest->inventorySourceFilter->inventorySourceIds = [
        'dignissimos',
        'reiciendis',
    ];
    $request->createSdfDownloadTaskRequest->parentEntityFilter = new ParentEntityFilter();
    $request->createSdfDownloadTaskRequest->parentEntityFilter->fileType = [
        ParentEntityFilterFileTypeEnum::FILE_TYPE_UNSPECIFIED,
        ParentEntityFilterFileTypeEnum::FILE_TYPE_LINE_ITEM,
        ParentEntityFilterFileTypeEnum::FILE_TYPE_UNSPECIFIED,
        ParentEntityFilterFileTypeEnum::FILE_TYPE_AD_GROUP,
    ];
    $request->createSdfDownloadTaskRequest->parentEntityFilter->filterIds = [
        'quos',
        'possimus',
        'maiores',
        'odio',
    ];
    $request->createSdfDownloadTaskRequest->parentEntityFilter->filterType = ParentEntityFilterFilterTypeEnum::FILTER_TYPE_MEDIA_PRODUCT_ID;
    $request->createSdfDownloadTaskRequest->partnerId = 'sapiente';
    $request->createSdfDownloadTaskRequest->version = CreateSdfDownloadTaskRequestVersionEnum::SDF_VERSION_UNSPECIFIED;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'provident';
    $request->fields = 'ex';
    $request->key = 'repellendus';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'sequi';

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
    $request->accessToken = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'quisquam';
    $request->key = 'sunt';
    $request->name = 'Betsy Wuckert';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'quas';

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
