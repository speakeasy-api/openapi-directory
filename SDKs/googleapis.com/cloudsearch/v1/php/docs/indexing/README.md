# indexing

### Available Operations

* [cloudsearchIndexingDatasourcesDeleteSchema](#cloudsearchindexingdatasourcesdeleteschema) - Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.
* [cloudsearchIndexingDatasourcesGetSchema](#cloudsearchindexingdatasourcesgetschema) - Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.
* [cloudsearchIndexingDatasourcesItemsDelete](#cloudsearchindexingdatasourcesitemsdelete) - Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsDeleteQueueItems](#cloudsearchindexingdatasourcesitemsdeletequeueitems) - Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsGet](#cloudsearchindexingdatasourcesitemsget) - Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsIndex](#cloudsearchindexingdatasourcesitemsindex) - Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsList](#cloudsearchindexingdatasourcesitemslist) - Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsPoll](#cloudsearchindexingdatasourcesitemspoll) - Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsPush](#cloudsearchindexingdatasourcesitemspush) - Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsUnreserve](#cloudsearchindexingdatasourcesitemsunreserve) - Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsUpload](#cloudsearchindexingdatasourcesitemsupload) - Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesUpdateSchema](#cloudsearchindexingdatasourcesupdateschema) - Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.

## cloudsearchIndexingDatasourcesDeleteSchema

Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesDeleteSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesDeleteSchemaSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchIndexingDatasourcesDeleteSchemaRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->debugOptionsEnableDebugging = false;
    $request->fields = 'mollitia';
    $request->key = 'laborum';
    $request->name = 'Connie Herzog';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new CloudsearchIndexingDatasourcesDeleteSchemaSecurity();
    $requestSecurity->option1 = new CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->indexing->cloudsearchIndexingDatasourcesDeleteSchema($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchIndexingDatasourcesGetSchema

Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesGetSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesGetSchemaSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesGetSchemaSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesGetSchemaSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesGetSchemaSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchIndexingDatasourcesGetSchemaRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->debugOptionsEnableDebugging = false;
    $request->fields = 'doloribus';
    $request->key = 'sapiente';
    $request->name = 'Angie Durgan';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new CloudsearchIndexingDatasourcesGetSchemaSecurity();
    $requestSecurity->option1 = new CloudsearchIndexingDatasourcesGetSchemaSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->indexing->cloudsearchIndexingDatasourcesGetSchema($request, $requestSecurity);

    if ($response->schema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchIndexingDatasourcesItemsDelete

Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsDeleteModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchIndexingDatasourcesItemsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->connectorName = 'error';
    $request->debugOptionsEnableDebugging = false;
    $request->fields = 'quia';
    $request->key = 'quis';
    $request->mode = CloudsearchIndexingDatasourcesItemsDeleteModeEnum::UNSPECIFIED;
    $request->name = 'Matt Hamill';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'id';
    $request->version = 'possimus';

    $requestSecurity = new CloudsearchIndexingDatasourcesItemsDeleteSecurity();
    $requestSecurity->option1 = new CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->indexing->cloudsearchIndexingDatasourcesItemsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchIndexingDatasourcesItemsDeleteQueueItems

Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteQueueItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DebugOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->deleteQueueItemsRequest = new DeleteQueueItemsRequest();
    $request->deleteQueueItemsRequest->connectorName = 'quasi';
    $request->deleteQueueItemsRequest->debugOptions = new DebugOptions();
    $request->deleteQueueItemsRequest->debugOptions->enableDebugging = false;
    $request->deleteQueueItemsRequest->queue = 'error';
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'reiciendis';
    $request->key = 'voluptatibus';
    $request->name = 'Jessie Langosh V';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'doloremque';

    $requestSecurity = new CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurity();
    $requestSecurity->option1 = new CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->indexing->cloudsearchIndexingDatasourcesItemsDeleteQueueItems($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchIndexingDatasourcesItemsGet

Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchIndexingDatasourcesItemsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->connectorName = 'corporis';
    $request->debugOptionsEnableDebugging = false;
    $request->fields = 'dolore';
    $request->key = 'iusto';
    $request->name = 'Maryann Hamill';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new CloudsearchIndexingDatasourcesItemsGetSecurity();
    $requestSecurity->option1 = new CloudsearchIndexingDatasourcesItemsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->indexing->cloudsearchIndexingDatasourcesItemsGet($request, $requestSecurity);

    if ($response->item !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchIndexingDatasourcesItemsIndex

Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsIndexRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\IndexItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\DebugOptions;
use \OpenAPI\OpenAPI\Models\Shared\IndexItemOptions;
use \OpenAPI\OpenAPI\Models\Shared\Item;
use \OpenAPI\OpenAPI\Models\Shared\ItemAcl;
use \OpenAPI\OpenAPI\Models\Shared\ItemAclAclInheritanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Principal;
use \OpenAPI\OpenAPI\Models\Shared\GSuitePrincipal;
use \OpenAPI\OpenAPI\Models\Shared\ItemContent;
use \OpenAPI\OpenAPI\Models\Shared\UploadItemRef;
use \OpenAPI\OpenAPI\Models\Shared\ItemContentContentFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemMetadata;
use \OpenAPI\OpenAPI\Models\Shared\ContextAttribute;
use \OpenAPI\OpenAPI\Models\Shared\Interaction;
use \OpenAPI\OpenAPI\Models\Shared\InteractionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchQualityMetadata;
use \OpenAPI\OpenAPI\Models\Shared\ItemStatus;
use \OpenAPI\OpenAPI\Models\Shared\ItemStatusCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingError;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldViolation;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryError;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryErrorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemStructuredData;
use \OpenAPI\OpenAPI\Models\Shared\StructuredDataObject;
use \OpenAPI\OpenAPI\Models\Shared\NamedProperty;
use \OpenAPI\OpenAPI\Models\Shared\DateValues;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\DoubleValues;
use \OpenAPI\OpenAPI\Models\Shared\EnumValues;
use \OpenAPI\OpenAPI\Models\Shared\HtmlValues;
use \OpenAPI\OpenAPI\Models\Shared\IntegerValues;
use \OpenAPI\OpenAPI\Models\Shared\ObjectValues;
use \OpenAPI\OpenAPI\Models\Shared\TextValues;
use \OpenAPI\OpenAPI\Models\Shared\TimestampValues;
use \OpenAPI\OpenAPI\Models\Shared\IndexItemRequestModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsIndexSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsIndexSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsIndexSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchIndexingDatasourcesItemsIndexRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->indexItemRequest = new IndexItemRequest();
    $request->indexItemRequest->connectorName = 'excepturi';
    $request->indexItemRequest->debugOptions = new DebugOptions();
    $request->indexItemRequest->debugOptions->enableDebugging = false;
    $request->indexItemRequest->indexItemOptions = new IndexItemOptions();
    $request->indexItemRequest->indexItemOptions->allowUnknownGsuitePrincipals = false;
    $request->indexItemRequest->item = new Item();
    $request->indexItemRequest->item->acl = new ItemAcl();
    $request->indexItemRequest->item->acl->aclInheritanceType = ItemAclAclInheritanceTypeEnum::BOTH_PERMIT;
    $request->indexItemRequest->item->acl->deniedReaders = [
        new Principal(),
        new Principal(),
    ];
    $request->indexItemRequest->item->acl->inheritAclFrom = 'praesentium';
    $request->indexItemRequest->item->acl->owners = [
        new Principal(),
        new Principal(),
        new Principal(),
    ];
    $request->indexItemRequest->item->acl->readers = [
        new Principal(),
        new Principal(),
        new Principal(),
        new Principal(),
    ];
    $request->indexItemRequest->item->content = new ItemContent();
    $request->indexItemRequest->item->content->contentDataRef = new UploadItemRef();
    $request->indexItemRequest->item->content->contentDataRef->name = 'Dr. Casey Mayer';
    $request->indexItemRequest->item->content->contentFormat = ItemContentContentFormatEnum::HTML;
    $request->indexItemRequest->item->content->hash = 'consequatur';
    $request->indexItemRequest->item->content->inlineContent = 'est';
    $request->indexItemRequest->item->itemType = ItemItemTypeEnum::VIRTUAL_CONTAINER_ITEM;
    $request->indexItemRequest->item->metadata = new ItemMetadata();
    $request->indexItemRequest->item->metadata->containerName = 'explicabo';
    $request->indexItemRequest->item->metadata->contentLanguage = 'deserunt';
    $request->indexItemRequest->item->metadata->contextAttributes = [
        new ContextAttribute(),
        new ContextAttribute(),
        new ContextAttribute(),
    ];
    $request->indexItemRequest->item->metadata->createTime = 'quibusdam';
    $request->indexItemRequest->item->metadata->hash = 'labore';
    $request->indexItemRequest->item->metadata->interactions = [
        new Interaction(),
        new Interaction(),
    ];
    $request->indexItemRequest->item->metadata->keywords = [
        'aliquid',
    ];
    $request->indexItemRequest->item->metadata->mimeType = 'cupiditate';
    $request->indexItemRequest->item->metadata->objectType = 'quos';
    $request->indexItemRequest->item->metadata->searchQualityMetadata = new SearchQualityMetadata();
    $request->indexItemRequest->item->metadata->searchQualityMetadata->quality = 201.07;
    $request->indexItemRequest->item->metadata->sourceRepositoryUrl = 'magni';
    $request->indexItemRequest->item->metadata->title = 'Dr.';
    $request->indexItemRequest->item->metadata->updateTime = 'ipsam';
    $request->indexItemRequest->item->name = 'Denise Pagac';
    $request->indexItemRequest->item->payload = 'facilis';
    $request->indexItemRequest->item->queue = 'tempore';
    $request->indexItemRequest->item->status = new ItemStatus();
    $request->indexItemRequest->item->status->code = ItemStatusCodeEnum::ERROR;
    $request->indexItemRequest->item->status->processingErrors = [
        new ProcessingError(),
        new ProcessingError(),
        new ProcessingError(),
        new ProcessingError(),
    ];
    $request->indexItemRequest->item->status->repositoryErrors = [
        new RepositoryError(),
        new RepositoryError(),
    ];
    $request->indexItemRequest->item->structuredData = new ItemStructuredData();
    $request->indexItemRequest->item->structuredData->hash = 'non';
    $request->indexItemRequest->item->structuredData->object = new StructuredDataObject();
    $request->indexItemRequest->item->structuredData->object->properties = [
        new NamedProperty(),
        new NamedProperty(),
        new NamedProperty(),
        new NamedProperty(),
    ];
    $request->indexItemRequest->item->version = 'sint';
    $request->indexItemRequest->mode = IndexItemRequestModeEnum::SYNCHRONOUS;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'officia';
    $request->key = 'dolor';
    $request->name = 'Randal Parisian';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new CloudsearchIndexingDatasourcesItemsIndexSecurity();
    $requestSecurity->option1 = new CloudsearchIndexingDatasourcesItemsIndexSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->indexing->cloudsearchIndexingDatasourcesItemsIndex($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchIndexingDatasourcesItemsList

Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchIndexingDatasourcesItemsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->brief = false;
    $request->callback = 'ea';
    $request->connectorName = 'aliquid';
    $request->debugOptionsEnableDebugging = false;
    $request->fields = 'laborum';
    $request->key = 'accusamus';
    $request->name = 'Toni Haley';
    $request->oauthToken = 'quidem';
    $request->pageSize = 588465;
    $request->pageToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new CloudsearchIndexingDatasourcesItemsListSecurity();
    $requestSecurity->option1 = new CloudsearchIndexingDatasourcesItemsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->indexing->cloudsearchIndexingDatasourcesItemsList($request, $requestSecurity);

    if ($response->listItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchIndexingDatasourcesItemsPoll

Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsPollRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PollItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DebugOptions;
use \OpenAPI\OpenAPI\Models\Shared\PollItemsRequestStatusCodesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsPollSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsPollSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsPollSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchIndexingDatasourcesItemsPollRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->pollItemsRequest = new PollItemsRequest();
    $request->pollItemsRequest->connectorName = 'amet';
    $request->pollItemsRequest->debugOptions = new DebugOptions();
    $request->pollItemsRequest->debugOptions->enableDebugging = false;
    $request->pollItemsRequest->limit = 643990;
    $request->pollItemsRequest->queue = 'nisi';
    $request->pollItemsRequest->statusCodes = [
        PollItemsRequestStatusCodesEnum::NEW_ITEM,
        PollItemsRequestStatusCodesEnum::NEW_ITEM,
    ];
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'magnam';
    $request->key = 'distinctio';
    $request->name = 'Leroy Greenfelder';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new CloudsearchIndexingDatasourcesItemsPollSecurity();
    $requestSecurity->option1 = new CloudsearchIndexingDatasourcesItemsPollSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->indexing->cloudsearchIndexingDatasourcesItemsPoll($request, $requestSecurity);

    if ($response->pollItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchIndexingDatasourcesItemsPush

Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsPushRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PushItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\DebugOptions;
use \OpenAPI\OpenAPI\Models\Shared\PushItem;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryError;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryErrorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PushItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsPushSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsPushSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsPushSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchIndexingDatasourcesItemsPushRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->pushItemRequest = new PushItemRequest();
    $request->pushItemRequest->connectorName = 'magnam';
    $request->pushItemRequest->debugOptions = new DebugOptions();
    $request->pushItemRequest->debugOptions->enableDebugging = false;
    $request->pushItemRequest->item = new PushItem();
    $request->pushItemRequest->item->contentHash = 'et';
    $request->pushItemRequest->item->metadataHash = 'excepturi';
    $request->pushItemRequest->item->payload = 'ullam';
    $request->pushItemRequest->item->queue = 'provident';
    $request->pushItemRequest->item->repositoryError = new RepositoryError();
    $request->pushItemRequest->item->repositoryError->errorMessage = 'quos';
    $request->pushItemRequest->item->repositoryError->httpStatusCode = 574325;
    $request->pushItemRequest->item->repositoryError->type = RepositoryErrorTypeEnum::UNKNOWN;
    $request->pushItemRequest->item->structuredDataHash = 'mollitia';
    $request->pushItemRequest->item->type = PushItemTypeEnum::REQUEUE;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->fields = 'dolor';
    $request->key = 'necessitatibus';
    $request->name = 'Vivian Boyle';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new CloudsearchIndexingDatasourcesItemsPushSecurity();
    $requestSecurity->option1 = new CloudsearchIndexingDatasourcesItemsPushSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->indexing->cloudsearchIndexingDatasourcesItemsPush($request, $requestSecurity);

    if ($response->item !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchIndexingDatasourcesItemsUnreserve

Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsUnreserveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnreserveItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DebugOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsUnreserveSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsUnreserveSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsUnreserveSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchIndexingDatasourcesItemsUnreserveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->unreserveItemsRequest = new UnreserveItemsRequest();
    $request->unreserveItemsRequest->connectorName = 'in';
    $request->unreserveItemsRequest->debugOptions = new DebugOptions();
    $request->unreserveItemsRequest->debugOptions->enableDebugging = false;
    $request->unreserveItemsRequest->queue = 'architecto';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ullam';
    $request->fields = 'expedita';
    $request->key = 'nihil';
    $request->name = 'Marty Cormier';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new CloudsearchIndexingDatasourcesItemsUnreserveSecurity();
    $requestSecurity->option1 = new CloudsearchIndexingDatasourcesItemsUnreserveSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->indexing->cloudsearchIndexingDatasourcesItemsUnreserve($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchIndexingDatasourcesItemsUpload

Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StartUploadItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\DebugOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsUploadSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsUploadSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesItemsUploadSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchIndexingDatasourcesItemsUploadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->startUploadItemRequest = new StartUploadItemRequest();
    $request->startUploadItemRequest->connectorName = 'sunt';
    $request->startUploadItemRequest->debugOptions = new DebugOptions();
    $request->startUploadItemRequest->debugOptions->enableDebugging = false;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'maxime';
    $request->key = 'ea';
    $request->name = 'Mr. Harry Jaskolski';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'autem';

    $requestSecurity = new CloudsearchIndexingDatasourcesItemsUploadSecurity();
    $requestSecurity->option1 = new CloudsearchIndexingDatasourcesItemsUploadSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->indexing->cloudsearchIndexingDatasourcesItemsUpload($request, $requestSecurity);

    if ($response->uploadItemRef !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchIndexingDatasourcesUpdateSchema

Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesUpdateSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\DebugOptions;
use \OpenAPI\OpenAPI\Models\Shared\Schema;
use \OpenAPI\OpenAPI\Models\Shared\ObjectDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ObjectOptions;
use \OpenAPI\OpenAPI\Models\Shared\ObjectDisplayOptions;
use \OpenAPI\OpenAPI\Models\Shared\Metaline;
use \OpenAPI\OpenAPI\Models\Shared\DisplayedProperty;
use \OpenAPI\OpenAPI\Models\Shared\FreshnessOptions;
use \OpenAPI\OpenAPI\Models\Shared\PropertyDefinition;
use \OpenAPI\OpenAPI\Models\Shared\BooleanPropertyOptions;
use \OpenAPI\OpenAPI\Models\Shared\BooleanOperatorOptions;
use \OpenAPI\OpenAPI\Models\Shared\DatePropertyOptions;
use \OpenAPI\OpenAPI\Models\Shared\DateOperatorOptions;
use \OpenAPI\OpenAPI\Models\Shared\PropertyDisplayOptions;
use \OpenAPI\OpenAPI\Models\Shared\DoublePropertyOptions;
use \OpenAPI\OpenAPI\Models\Shared\DoubleOperatorOptions;
use \OpenAPI\OpenAPI\Models\Shared\EnumPropertyOptions;
use \OpenAPI\OpenAPI\Models\Shared\EnumOperatorOptions;
use \OpenAPI\OpenAPI\Models\Shared\EnumPropertyOptionsOrderedRankingEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnumValuePair;
use \OpenAPI\OpenAPI\Models\Shared\HtmlPropertyOptions;
use \OpenAPI\OpenAPI\Models\Shared\HtmlOperatorOptions;
use \OpenAPI\OpenAPI\Models\Shared\RetrievalImportance;
use \OpenAPI\OpenAPI\Models\Shared\RetrievalImportanceImportanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegerPropertyOptions;
use \OpenAPI\OpenAPI\Models\Shared\IntegerFacetingOptions;
use \OpenAPI\OpenAPI\Models\Shared\IntegerOperatorOptions;
use \OpenAPI\OpenAPI\Models\Shared\IntegerPropertyOptionsOrderedRankingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ObjectPropertyOptions;
use \OpenAPI\OpenAPI\Models\Shared\TextPropertyOptions;
use \OpenAPI\OpenAPI\Models\Shared\TextOperatorOptions;
use \OpenAPI\OpenAPI\Models\Shared\TimestampPropertyOptions;
use \OpenAPI\OpenAPI\Models\Shared\TimestampOperatorOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesUpdateSchemaSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchIndexingDatasourcesUpdateSchemaRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->updateSchemaRequest = new UpdateSchemaRequest();
    $request->updateSchemaRequest->debugOptions = new DebugOptions();
    $request->updateSchemaRequest->debugOptions->enableDebugging = false;
    $request->updateSchemaRequest->schema = new Schema();
    $request->updateSchemaRequest->schema->objectDefinitions = [
        new ObjectDefinition(),
    ];
    $request->updateSchemaRequest->schema->operationIds = [
        'nemo',
        'voluptatibus',
        'perferendis',
        'fugiat',
    ];
    $request->updateSchemaRequest->validateOnly = false;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'corporis';
    $request->key = 'hic';
    $request->name = 'Robin D'Amore';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'nesciunt';

    $requestSecurity = new CloudsearchIndexingDatasourcesUpdateSchemaSecurity();
    $requestSecurity->option1 = new CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->indexing->cloudsearchIndexingDatasourcesUpdateSchema($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
