# liveChatMessages

### Available Operations

* [youtubeLiveChatMessagesDelete](#youtubelivechatmessagesdelete) - Deletes a chat message.
* [youtubeLiveChatMessagesInsert](#youtubelivechatmessagesinsert) - Inserts a new resource into this collection.
* [youtubeLiveChatMessagesList](#youtubelivechatmessageslist) - Retrieves a list of resources, possibly filtered.

## youtubeLiveChatMessagesDelete

Deletes a chat message.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatMessagesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatMessagesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatMessagesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatMessagesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveChatMessagesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'soluta';
    $request->fields = 'repudiandae';
    $request->id = 'b477373c-8d72-4f64-91db-1f2c4310661e';
    $request->key = 'excepturi';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'perspiciatis';

    $requestSecurity = new YoutubeLiveChatMessagesDeleteSecurity();
    $requestSecurity->option1 = new YoutubeLiveChatMessagesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveChatMessages->youtubeLiveChatMessagesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeLiveChatMessagesInsert

Inserts a new resource into this collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatMessagesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatMessage;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatMessageAuthorDetails;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatMessageSnippet;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatFanFundingEventDetails;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatGiftMembershipReceivedDetails;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatMemberMilestoneChatDetails;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatMembershipGiftingDetails;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatMessageDeletedDetails;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatMessageRetractedDetails;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatNewSponsorDetails;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatSuperChatDetails;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatSuperStickerDetails;
use \OpenAPI\OpenAPI\Models\Shared\SuperStickerMetadata;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatTextMessageDetails;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatMessageSnippetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatUserBannedMessageDetails;
use \OpenAPI\OpenAPI\Models\Shared\LiveChatUserBannedMessageDetailsBanTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelProfileDetails;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatMessagesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatMessagesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatMessagesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveChatMessagesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->liveChatMessage = new LiveChatMessage();
    $request->liveChatMessage->authorDetails = new LiveChatMessageAuthorDetails();
    $request->liveChatMessage->authorDetails->channelId = 'dicta';
    $request->liveChatMessage->authorDetails->channelUrl = 'impedit';
    $request->liveChatMessage->authorDetails->displayName = 'voluptatibus';
    $request->liveChatMessage->authorDetails->isChatModerator = false;
    $request->liveChatMessage->authorDetails->isChatOwner = false;
    $request->liveChatMessage->authorDetails->isChatSponsor = false;
    $request->liveChatMessage->authorDetails->isVerified = false;
    $request->liveChatMessage->authorDetails->profileImageUrl = 'iste';
    $request->liveChatMessage->etag = 'itaque';
    $request->liveChatMessage->id = '06e3a437-000a-4e6b-abc9-b8f759eac55a';
    $request->liveChatMessage->kind = 'error';
    $request->liveChatMessage->snippet = new LiveChatMessageSnippet();
    $request->liveChatMessage->snippet->authorChannelId = 'esse';
    $request->liveChatMessage->snippet->displayMessage = 'labore';
    $request->liveChatMessage->snippet->fanFundingEventDetails = new LiveChatFanFundingEventDetails();
    $request->liveChatMessage->snippet->fanFundingEventDetails->amountDisplayString = 'veritatis';
    $request->liveChatMessage->snippet->fanFundingEventDetails->amountMicros = 'vero';
    $request->liveChatMessage->snippet->fanFundingEventDetails->currency = 'consectetur';
    $request->liveChatMessage->snippet->fanFundingEventDetails->userComment = 'vitae';
    $request->liveChatMessage->snippet->giftMembershipReceivedDetails = new LiveChatGiftMembershipReceivedDetails();
    $request->liveChatMessage->snippet->giftMembershipReceivedDetails->associatedMembershipGiftingMessageId = 'inventore';
    $request->liveChatMessage->snippet->giftMembershipReceivedDetails->gifterChannelId = 'dolorem';
    $request->liveChatMessage->snippet->giftMembershipReceivedDetails->memberLevelName = 'ad';
    $request->liveChatMessage->snippet->hasDisplayContent = false;
    $request->liveChatMessage->snippet->liveChatId = 'qui';
    $request->liveChatMessage->snippet->memberMilestoneChatDetails = new LiveChatMemberMilestoneChatDetails();
    $request->liveChatMessage->snippet->memberMilestoneChatDetails->memberLevelName = 'iste';
    $request->liveChatMessage->snippet->memberMilestoneChatDetails->memberMonth = 403026;
    $request->liveChatMessage->snippet->memberMilestoneChatDetails->userComment = 'nemo';
    $request->liveChatMessage->snippet->membershipGiftingDetails = new LiveChatMembershipGiftingDetails();
    $request->liveChatMessage->snippet->membershipGiftingDetails->giftMembershipsCount = 745233;
    $request->liveChatMessage->snippet->membershipGiftingDetails->giftMembershipsLevelName = 'libero';
    $request->liveChatMessage->snippet->messageDeletedDetails = new LiveChatMessageDeletedDetails();
    $request->liveChatMessage->snippet->messageDeletedDetails->deletedMessageId = 'rem';
    $request->liveChatMessage->snippet->messageRetractedDetails = new LiveChatMessageRetractedDetails();
    $request->liveChatMessage->snippet->messageRetractedDetails->retractedMessageId = 'dolorum';
    $request->liveChatMessage->snippet->newSponsorDetails = new LiveChatNewSponsorDetails();
    $request->liveChatMessage->snippet->newSponsorDetails->isUpgrade = false;
    $request->liveChatMessage->snippet->newSponsorDetails->memberLevelName = 'odio';
    $request->liveChatMessage->snippet->publishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-31T19:13:01.264Z');
    $request->liveChatMessage->snippet->superChatDetails = new LiveChatSuperChatDetails();
    $request->liveChatMessage->snippet->superChatDetails->amountDisplayString = 'magni';
    $request->liveChatMessage->snippet->superChatDetails->amountMicros = 'vel';
    $request->liveChatMessage->snippet->superChatDetails->currency = 'quae';
    $request->liveChatMessage->snippet->superChatDetails->tier = 63553;
    $request->liveChatMessage->snippet->superChatDetails->userComment = 'modi';
    $request->liveChatMessage->snippet->superStickerDetails = new LiveChatSuperStickerDetails();
    $request->liveChatMessage->snippet->superStickerDetails->amountDisplayString = 'neque';
    $request->liveChatMessage->snippet->superStickerDetails->amountMicros = 'exercitationem';
    $request->liveChatMessage->snippet->superStickerDetails->currency = 'itaque';
    $request->liveChatMessage->snippet->superStickerDetails->superStickerMetadata = new SuperStickerMetadata();
    $request->liveChatMessage->snippet->superStickerDetails->superStickerMetadata->altText = 'et';
    $request->liveChatMessage->snippet->superStickerDetails->superStickerMetadata->altTextLanguage = 'ipsum';
    $request->liveChatMessage->snippet->superStickerDetails->superStickerMetadata->stickerId = 'unde';
    $request->liveChatMessage->snippet->superStickerDetails->tier = 858338;
    $request->liveChatMessage->snippet->textMessageDetails = new LiveChatTextMessageDetails();
    $request->liveChatMessage->snippet->textMessageDetails->messageText = 'distinctio';
    $request->liveChatMessage->snippet->type = LiveChatMessageSnippetTypeEnum::MESSAGE_RETRACTED_EVENT;
    $request->liveChatMessage->snippet->userBannedDetails = new LiveChatUserBannedMessageDetails();
    $request->liveChatMessage->snippet->userBannedDetails->banDurationSeconds = 'quia';
    $request->liveChatMessage->snippet->userBannedDetails->banType = LiveChatUserBannedMessageDetailsBanTypeEnum::PERMANENT;
    $request->liveChatMessage->snippet->userBannedDetails->bannedUserDetails = new ChannelProfileDetails();
    $request->liveChatMessage->snippet->userBannedDetails->bannedUserDetails->channelId = 'nostrum';
    $request->liveChatMessage->snippet->userBannedDetails->bannedUserDetails->channelUrl = 'omnis';
    $request->liveChatMessage->snippet->userBannedDetails->bannedUserDetails->displayName = 'libero';
    $request->liveChatMessage->snippet->userBannedDetails->bannedUserDetails->profileImageUrl = 'dicta';
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fugiat';
    $request->fields = 'officia';
    $request->key = 'quos';
    $request->oauthToken = 'placeat';
    $request->part = [
        'iusto',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'inventore';

    $requestSecurity = new YoutubeLiveChatMessagesInsertSecurity();
    $requestSecurity->option1 = new YoutubeLiveChatMessagesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveChatMessages->youtubeLiveChatMessagesInsert($request, $requestSecurity);

    if ($response->liveChatMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeLiveChatMessagesList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatMessagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatMessagesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatMessagesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatMessagesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeLiveChatMessagesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeLiveChatMessagesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eligendi';
    $request->fields = 'distinctio';
    $request->hl = 'voluptatem';
    $request->key = 'autem';
    $request->liveChatId = 'esse';
    $request->maxResults = 172951;
    $request->oauthToken = 'assumenda';
    $request->pageToken = 'beatae';
    $request->part = [
        'facere',
        'corrupti',
        'molestiae',
    ];
    $request->prettyPrint = false;
    $request->profileImageSize = 588812;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'tempore';

    $requestSecurity = new YoutubeLiveChatMessagesListSecurity();
    $requestSecurity->option1 = new YoutubeLiveChatMessagesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liveChatMessages->youtubeLiveChatMessagesList($request, $requestSecurity);

    if ($response->liveChatMessageListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
