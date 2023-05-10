# customLists

### Available Operations

* [displayvideoCustomListsGet](#displayvideocustomlistsget) - Gets a custom list.
* [displayvideoCustomListsList](#displayvideocustomlistslist) - Lists custom lists. The order is defined by the order_by parameter.

## displayvideoCustomListsGet

Gets a custom list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomListsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomListsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoCustomListsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->advertiserId = 'sint';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sequi';
    $request->customListId = 'repudiandae';
    $request->fields = 'cum';
    $request->key = 'dicta';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->quotaUser = 'veniam';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new DisplayvideoCustomListsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customLists->displayvideoCustomListsGet($request, $requestSecurity);

    if ($response->customList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoCustomListsList

Lists custom lists. The order is defined by the order_by parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomListsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomListsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoCustomListsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->advertiserId = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nobis';
    $request->fields = 'ipsa';
    $request->filter = 'ducimus';
    $request->key = 'maiores';
    $request->oauthToken = 'veritatis';
    $request->orderBy = 'quasi';
    $request->pageSize = 386447;
    $request->pageToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new DisplayvideoCustomListsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customLists->displayvideoCustomListsList($request, $requestSecurity);

    if ($response->listCustomListsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
