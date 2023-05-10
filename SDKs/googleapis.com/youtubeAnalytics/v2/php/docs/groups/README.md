# groups

### Available Operations

* [youtubeAnalyticsGroupsDelete](#youtubeanalyticsgroupsdelete) - Deletes a group.
* [youtubeAnalyticsGroupsInsert](#youtubeanalyticsgroupsinsert) - Creates a group.
* [youtubeAnalyticsGroupsList](#youtubeanalyticsgroupslist) - Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.
* [youtubeAnalyticsGroupsUpdate](#youtubeanalyticsgroupsupdate) - Modifies a group. For example, you could change a group's title.

## youtubeAnalyticsGroupsDelete

Deletes a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsDeleteSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsDeleteSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsDeleteSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeAnalyticsGroupsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->fields = 'enim';
    $request->id = '0ad2abd4-4269-4802-9502-a94bb4f63c96';
    $request->key = 'provident';
    $request->oauthToken = 'necessitatibus';
    $request->onBehalfOfContentOwner = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new YoutubeAnalyticsGroupsDeleteSecurity();
    $requestSecurity->option1 = new YoutubeAnalyticsGroupsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->youtubeAnalyticsGroupsDelete($request, $requestSecurity);

    if ($response->emptyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeAnalyticsGroupsInsert

Creates a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Shared\GroupContentDetails;
use \OpenAPI\OpenAPI\Models\Shared\Errors;
use \OpenAPI\OpenAPI\Models\Shared\ErrorsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ErrorProto;
use \OpenAPI\OpenAPI\Models\Shared\ErrorProtoLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupSnippet;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsInsertSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsInsertSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsInsertSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeAnalyticsGroupsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->group = new Group();
    $request->group->contentDetails = new GroupContentDetails();
    $request->group->contentDetails->itemCount = 'dolorum';
    $request->group->contentDetails->itemType = 'in';
    $request->group->errors = new Errors();
    $request->group->errors->code = ErrorsCodeEnum::CONFLICT;
    $request->group->errors->error = [
        new ErrorProto(),
        new ErrorProto(),
        new ErrorProto(),
        new ErrorProto(),
    ];
    $request->group->errors->requestId = 'maiores';
    $request->group->etag = 'rerum';
    $request->group->id = '14cd66ae-395e-4fb9-ba88-f3a66997074b';
    $request->group->kind = 'id';
    $request->group->snippet = new GroupSnippet();
    $request->group->snippet->publishedAt = 'labore';
    $request->group->snippet->title = 'Mrs.';
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'eum';
    $request->key = 'vero';
    $request->oauthToken = 'aspernatur';
    $request->onBehalfOfContentOwner = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new YoutubeAnalyticsGroupsInsertSecurity();
    $requestSecurity->option1 = new YoutubeAnalyticsGroupsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->youtubeAnalyticsGroupsInsert($request, $requestSecurity);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeAnalyticsGroupsList

Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsListSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeAnalyticsGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sint';
    $request->fields = 'accusantium';
    $request->id = 'afa563e2-516f-4e4c-8b71-1e5b7fd2ed02';
    $request->key = 'praesentium';
    $request->mine = false;
    $request->oauthToken = 'natus';
    $request->onBehalfOfContentOwner = 'magni';
    $request->pageToken = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new YoutubeAnalyticsGroupsListSecurity();
    $requestSecurity->option1 = new YoutubeAnalyticsGroupsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->youtubeAnalyticsGroupsList($request, $requestSecurity);

    if ($response->listGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeAnalyticsGroupsUpdate

Modifies a group. For example, you could change a group's title.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Shared\GroupContentDetails;
use \OpenAPI\OpenAPI\Models\Shared\Errors;
use \OpenAPI\OpenAPI\Models\Shared\ErrorsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ErrorProto;
use \OpenAPI\OpenAPI\Models\Shared\ErrorProtoLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupSnippet;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsUpdateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsUpdateSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupsUpdateSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeAnalyticsGroupsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->group = new Group();
    $request->group->contentDetails = new GroupContentDetails();
    $request->group->contentDetails->itemCount = 'ea';
    $request->group->contentDetails->itemType = 'excepturi';
    $request->group->errors = new Errors();
    $request->group->errors->code = ErrorsCodeEnum::FORBIDDEN;
    $request->group->errors->error = [
        new ErrorProto(),
        new ErrorProto(),
    ];
    $request->group->errors->requestId = 'accusantium';
    $request->group->etag = 'ab';
    $request->group->id = 'fb576b0d-5f0d-430c-9fbb-2587053202c7';
    $request->group->kind = 'dolor';
    $request->group->snippet = new GroupSnippet();
    $request->group->snippet->publishedAt = 'vero';
    $request->group->snippet->title = 'Mrs.';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->fields = 'facilis';
    $request->key = 'perspiciatis';
    $request->oauthToken = 'voluptatem';
    $request->onBehalfOfContentOwner = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'error';

    $requestSecurity = new YoutubeAnalyticsGroupsUpdateSecurity();
    $requestSecurity->option1 = new YoutubeAnalyticsGroupsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->youtubeAnalyticsGroupsUpdate($request, $requestSecurity);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
