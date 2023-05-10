# thirdPartyLinks

### Available Operations

* [youtubeThirdPartyLinksDelete](#youtubethirdpartylinksdelete) - Deletes a resource.
* [youtubeThirdPartyLinksInsert](#youtubethirdpartylinksinsert) - Inserts a new resource into this collection.
* [youtubeThirdPartyLinksList](#youtubethirdpartylinkslist) - Retrieves a list of resources, possibly filtered.
* [youtubeThirdPartyLinksUpdate](#youtubethirdpartylinksupdate) - Updates an existing resource.

## youtubeThirdPartyLinksDelete

Deletes a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeThirdPartyLinksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeThirdPartyLinksDeleteTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeThirdPartyLinksDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'rerum';
    $request->externalChannelId = 'doloremque';
    $request->fields = 'voluptatem';
    $request->key = 'eum';
    $request->linkingToken = 'at';
    $request->oauthToken = 'eum';
    $request->part = [
        'voluptatum',
        'blanditiis',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->type = YoutubeThirdPartyLinksDeleteTypeEnum::CHANNEL_TO_STORE_LINK;
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'deserunt';

    $response = $sdk->thirdPartyLinks->youtubeThirdPartyLinksDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeThirdPartyLinksInsert

Inserts a new resource into this collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeThirdPartyLinksInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyLink;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyLinkSnippet;
use \OpenAPI\OpenAPI\Models\Shared\ChannelToStoreLinkDetails;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyLinkSnippetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyLinkStatus;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyLinkStatusLinkStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeThirdPartyLinksInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->thirdPartyLink = new ThirdPartyLink();
    $request->thirdPartyLink->etag = 'nostrum';
    $request->thirdPartyLink->kind = 'atque';
    $request->thirdPartyLink->linkingToken = 'architecto';
    $request->thirdPartyLink->snippet = new ThirdPartyLinkSnippet();
    $request->thirdPartyLink->snippet->channelToStoreLink = new ChannelToStoreLinkDetails();
    $request->thirdPartyLink->snippet->channelToStoreLink->merchantId = 'est';
    $request->thirdPartyLink->snippet->channelToStoreLink->storeName = 'enim';
    $request->thirdPartyLink->snippet->channelToStoreLink->storeUrl = 'rem';
    $request->thirdPartyLink->snippet->type = ThirdPartyLinkSnippetTypeEnum::LINK_UNSPECIFIED;
    $request->thirdPartyLink->status = new ThirdPartyLinkStatus();
    $request->thirdPartyLink->status->linkStatus = ThirdPartyLinkStatusLinkStatusEnum::UNKNOWN;
    $request->accessToken = 'quas';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->externalChannelId = 'labore';
    $request->fields = 'sapiente';
    $request->key = 'saepe';
    $request->oauthToken = 'delectus';
    $request->part = [
        'natus',
        'cumque',
        'natus',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'quia';

    $response = $sdk->thirdPartyLinks->youtubeThirdPartyLinksInsert($request);

    if ($response->thirdPartyLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeThirdPartyLinksList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeThirdPartyLinksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeThirdPartyLinksListTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeThirdPartyLinksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quis';
    $request->externalChannelId = 'enim';
    $request->fields = 'eum';
    $request->key = 'nemo';
    $request->linkingToken = 'illum';
    $request->oauthToken = 'nesciunt';
    $request->part = [
        'odio',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->type = YoutubeThirdPartyLinksListTypeEnum::CHANNEL_TO_STORE_LINK;
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'voluptates';

    $response = $sdk->thirdPartyLinks->youtubeThirdPartyLinksList($request);

    if ($response->thirdPartyLinkListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeThirdPartyLinksUpdate

Updates an existing resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeThirdPartyLinksUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyLink;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyLinkSnippet;
use \OpenAPI\OpenAPI\Models\Shared\ChannelToStoreLinkDetails;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyLinkSnippetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyLinkStatus;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyLinkStatusLinkStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeThirdPartyLinksUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->thirdPartyLink = new ThirdPartyLink();
    $request->thirdPartyLink->etag = 'dicta';
    $request->thirdPartyLink->kind = 'fugit';
    $request->thirdPartyLink->linkingToken = 'sit';
    $request->thirdPartyLink->snippet = new ThirdPartyLinkSnippet();
    $request->thirdPartyLink->snippet->channelToStoreLink = new ChannelToStoreLinkDetails();
    $request->thirdPartyLink->snippet->channelToStoreLink->merchantId = 'aliquid';
    $request->thirdPartyLink->snippet->channelToStoreLink->storeName = 'necessitatibus';
    $request->thirdPartyLink->snippet->channelToStoreLink->storeUrl = 'sed';
    $request->thirdPartyLink->snippet->type = ThirdPartyLinkSnippetTypeEnum::CHANNEL_TO_STORE_LINK;
    $request->thirdPartyLink->status = new ThirdPartyLinkStatus();
    $request->thirdPartyLink->status->linkStatus = ThirdPartyLinkStatusLinkStatusEnum::UNKNOWN;
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->externalChannelId = 'aliquam';
    $request->fields = 'deserunt';
    $request->key = 'modi';
    $request->oauthToken = 'sunt';
    $request->part = [
        'eius',
        'voluptatum',
        'ipsa',
        'at',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'aspernatur';

    $response = $sdk->thirdPartyLinks->youtubeThirdPartyLinksUpdate($request);

    if ($response->thirdPartyLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
