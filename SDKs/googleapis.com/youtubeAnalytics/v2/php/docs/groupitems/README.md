# groupItems

### Available Operations

* [youtubeAnalyticsGroupItemsDelete](#youtubeanalyticsgroupitemsdelete) - Removes an item from a group.
* [youtubeAnalyticsGroupItemsInsert](#youtubeanalyticsgroupitemsinsert) - Creates a group item.
* [youtubeAnalyticsGroupItemsList](#youtubeanalyticsgroupitemslist) - Returns a collection of group items that match the API request parameters.

## youtubeAnalyticsGroupItemsDelete

Removes an item from a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeAnalyticsGroupItemsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'porro';
    $request->id = 'a1ba928f-c816-4742-8b73-9205929396fe';
    $request->key = 'fuga';
    $request->oauthToken = 'in';
    $request->onBehalfOfContentOwner = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new YoutubeAnalyticsGroupItemsDeleteSecurity();
    $requestSecurity->option1 = new YoutubeAnalyticsGroupItemsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupItems->youtubeAnalyticsGroupItemsDelete($request, $requestSecurity);

    if ($response->emptyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeAnalyticsGroupItemsInsert

Creates a group item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupItem;
use \OpenAPI\OpenAPI\Models\Shared\Errors;
use \OpenAPI\OpenAPI\Models\Shared\ErrorsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ErrorProto;
use \OpenAPI\OpenAPI\Models\Shared\ErrorProtoLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupItemResource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsInsertSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsInsertSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsInsertSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeAnalyticsGroupItemsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->groupItem = new GroupItem();
    $request->groupItem->errors = new Errors();
    $request->groupItem->errors->code = ErrorsCodeEnum::BAD_REQUEST;
    $request->groupItem->errors->error = [
        new ErrorProto(),
    ];
    $request->groupItem->errors->requestId = 'reiciendis';
    $request->groupItem->etag = 'est';
    $request->groupItem->groupId = 'mollitia';
    $request->groupItem->id = 'a2352c59-5590-47af-b1a3-a2fa94677392';
    $request->groupItem->kind = 'quis';
    $request->groupItem->resource = new GroupItemResource();
    $request->groupItem->resource->id = '1aa52c3f-5ad0-419d-a1ff-e78f097b0074';
    $request->groupItem->resource->kind = 'maiores';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolore';
    $request->fields = 'iusto';
    $request->key = 'dicta';
    $request->oauthToken = 'harum';
    $request->onBehalfOfContentOwner = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new YoutubeAnalyticsGroupItemsInsertSecurity();
    $requestSecurity->option1 = new YoutubeAnalyticsGroupItemsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupItems->youtubeAnalyticsGroupItemsInsert($request, $requestSecurity);

    if ($response->groupItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeAnalyticsGroupItemsList

Returns a collection of group items that match the API request parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsListSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeAnalyticsGroupItemsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestias';
    $request->fields = 'excepturi';
    $request->groupId = 'pariatur';
    $request->key = 'modi';
    $request->oauthToken = 'praesentium';
    $request->onBehalfOfContentOwner = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptates';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new YoutubeAnalyticsGroupItemsListSecurity();
    $requestSecurity->option1 = new YoutubeAnalyticsGroupItemsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupItems->youtubeAnalyticsGroupItemsList($request, $requestSecurity);

    if ($response->listGroupItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
