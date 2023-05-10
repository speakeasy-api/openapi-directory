# users

### Available Operations

* [polyUsersAssetsList](#polyusersassetslist) - Lists assets authored by the given user. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of PRIVATE or UNLISTED and assets which are All Rights Reserved for the currently-authenticated user.
* [polyUsersLikedassetsList](#polyuserslikedassetslist) - Lists assets that the user has liked. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of UNLISTED.

## polyUsersAssetsList

Lists assets authored by the given user. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of PRIVATE or UNLISTED and assets which are All Rights Reserved for the currently-authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PolyUsersAssetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PolyUsersAssetsListVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolyUsersAssetsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'occaecati';
    $request->format = 'fugit';
    $request->key = 'deleniti';
    $request->name = 'Ms. Earnest Lebsack';
    $request->oauthToken = 'modi';
    $request->orderBy = 'qui';
    $request->pageSize = 774234;
    $request->pageToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'excepturi';
    $request->visibility = PolyUsersAssetsListVisibilityEnum::VISIBILITY_UNSPECIFIED;

    $response = $sdk->users->polyUsersAssetsList($request);

    if ($response->listUserAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## polyUsersLikedassetsList

Lists assets that the user has liked. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of UNLISTED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PolyUsersLikedassetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolyUsersLikedassetsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'iste';
    $request->format = 'dolor';
    $request->key = 'natus';
    $request->name = 'May Turcotte';
    $request->oauthToken = 'corporis';
    $request->orderBy = 'iste';
    $request->pageSize = 437032;
    $request->pageToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'ipsa';

    $response = $sdk->users->polyUsersLikedassetsList($request);

    if ($response->listLikedAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
