# liveChatModerators

### Available Operations

* [youtubeLiveChatModeratorsDelete](#youtubelivechatmoderatorsdelete) - Deletes a chat moderator.
* [youtubeLiveChatModeratorsInsert](#youtubelivechatmoderatorsinsert) - Inserts a new resource into this collection.
* [youtubeLiveChatModeratorsList](#youtubelivechatmoderatorslist) - Retrieves a list of resources, possibly filtered.

## youtubeLiveChatModeratorsDelete

Deletes a chat moderator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatModeratorsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatModeratorsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatModeratorsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatModeratorsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveChatModeratorsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsam';
    $request->fields = 'rerum';
    $request->id = '85efbd02-bae0-4be2-9782-259e3ea4b519';
    $request->key = 'molestiae';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new YoutubeLiveChatModeratorsDeleteSecurity();
    $requestSecurity->option1 = new YoutubeLiveChatModeratorsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveChatModerators->youtubeLiveChatModeratorsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeLiveChatModeratorsInsert

Inserts a new resource into this collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatModeratorsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatModerator;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatModeratorSnippet;
use \OpenAPI\OpenAPI\Models\Shared\ChannelProfileDetails;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatModeratorsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatModeratorsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatModeratorsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveChatModeratorsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->liveChatModerator = new LiveChatModerator();
    $request->liveChatModerator->etag = 'nesciunt';
    $request->liveChatModerator->id = 'da7ce52b-895c-4537-8645-4efb0b34896c';
    $request->liveChatModerator->kind = 'velit';
    $request->liveChatModerator->snippet = new LiveChatModeratorSnippet();
    $request->liveChatModerator->snippet->liveChatId = 'minus';
    $request->liveChatModerator->snippet->moderatorDetails = new ChannelProfileDetails();
    $request->liveChatModerator->snippet->moderatorDetails->channelId = 'fuga';
    $request->liveChatModerator->snippet->moderatorDetails->channelUrl = 'nostrum';
    $request->liveChatModerator->snippet->moderatorDetails->displayName = 'est';
    $request->liveChatModerator->snippet->moderatorDetails->profileImageUrl = 'impedit';
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'odit';
    $request->key = 'repellat';
    $request->oauthToken = 'pariatur';
    $request->part = [
        'reprehenderit',
        'aperiam',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'in';

    $requestSecurity = new YoutubeLiveChatModeratorsInsertSecurity();
    $requestSecurity->option1 = new YoutubeLiveChatModeratorsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveChatModerators->youtubeLiveChatModeratorsInsert($request, $requestSecurity);

    if ($response->liveChatModerator !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeLiveChatModeratorsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatModeratorsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatModeratorsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatModeratorsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatModeratorsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatModeratorsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveChatModeratorsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'veritatis';
    $request->key = 'ducimus';
    $request->liveChatId = 'voluptate';
    $request->maxResults = 866789;
    $request->oauthToken = 'itaque';
    $request->pageToken = 'similique';
    $request->part = [
        'ex',
        'quaerat',
        'commodi',
        'officiis',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'exercitationem';

    $requestSecurity = new YoutubeLiveChatModeratorsListSecurity();
    $requestSecurity->option1 = new YoutubeLiveChatModeratorsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveChatModerators->youtubeLiveChatModeratorsList($request, $requestSecurity);

    if ($response->liveChatModeratorListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
