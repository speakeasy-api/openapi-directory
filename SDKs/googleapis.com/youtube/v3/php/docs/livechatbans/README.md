# liveChatBans

### Available Operations

* [youtubeLiveChatBansDelete](#youtubelivechatbansdelete) - Deletes a chat ban.
* [youtubeLiveChatBansInsert](#youtubelivechatbansinsert) - Inserts a new resource into this collection.

## youtubeLiveChatBansDelete

Deletes a chat ban.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatBansDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatBansDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatBansDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatBansDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveChatBansDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'harum';
    $request->id = '3fec9578-a645-4842-b3a8-418d162309fb';
    $request->key = 'alias';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eos';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new YoutubeLiveChatBansDeleteSecurity();
    $requestSecurity->option1 = new YoutubeLiveChatBansDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveChatBans->youtubeLiveChatBansDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeLiveChatBansInsert

Inserts a new resource into this collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatBansInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatBan;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatBanSnippet;
use \OpenAPI\OpenAPI\Models\Shared\ChannelProfileDetails;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatBanSnippetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatBansInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatBansInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatBansInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveChatBansInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->liveChatBan = new LiveChatBan();
    $request->liveChatBan->etag = 'inventore';
    $request->liveChatBan->id = 'aefb9f58-c4d8-46e6-8e4b-e056013f59da';
    $request->liveChatBan->kind = 'esse';
    $request->liveChatBan->snippet = new LiveChatBanSnippet();
    $request->liveChatBan->snippet->banDurationSeconds = 'nemo';
    $request->liveChatBan->snippet->bannedUserDetails = new ChannelProfileDetails();
    $request->liveChatBan->snippet->bannedUserDetails->channelId = 'reprehenderit';
    $request->liveChatBan->snippet->bannedUserDetails->channelUrl = 'est';
    $request->liveChatBan->snippet->bannedUserDetails->displayName = 'quis';
    $request->liveChatBan->snippet->bannedUserDetails->profileImageUrl = 'sint';
    $request->liveChatBan->snippet->liveChatId = 'accusamus';
    $request->liveChatBan->snippet->type = LiveChatBanSnippetTypeEnum::TEMPORARY;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'asperiores';
    $request->fields = 'ex';
    $request->key = 'voluptas';
    $request->oauthToken = 'debitis';
    $request->part = [
        'quae',
        'minus',
        'fuga',
        'laborum',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'consectetur';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'atque';

    $requestSecurity = new YoutubeLiveChatBansInsertSecurity();
    $requestSecurity->option1 = new YoutubeLiveChatBansInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveChatBans->youtubeLiveChatBansInsert($request, $requestSecurity);

    if ($response->liveChatBan !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
