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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'libero';
    $request->advertiserId = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->customListId = 'ea';
    $request->fields = 'impedit';
    $request->key = 'ducimus';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'repellat';

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
    $request->accessToken = 'laborum';
    $request->advertiserId = 'natus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloremque';
    $request->fields = 'nisi';
    $request->filter = 'rerum';
    $request->key = 'recusandae';
    $request->oauthToken = 'voluptates';
    $request->orderBy = 'non';
    $request->pageSize = 524577;
    $request->pageToken = 'quia';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'dicta';

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
