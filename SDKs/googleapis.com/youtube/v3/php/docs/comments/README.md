# comments

### Available Operations

* [youtubeCommentsDelete](#youtubecommentsdelete) - Deletes a resource.
* [youtubeCommentsInsert](#youtubecommentsinsert) - Inserts a new resource into this collection.
* [youtubeCommentsList](#youtubecommentslist) - Retrieves a list of resources, possibly filtered.
* [youtubeCommentsMarkAsSpam](#youtubecommentsmarkasspam) - Expresses the caller's opinion that one or more comments should be flagged as spam.
* [youtubeCommentsSetModerationStatus](#youtubecommentssetmoderationstatus) - Sets the moderation status of one or more comments.
* [youtubeCommentsUpdate](#youtubecommentsupdate) - Updates an existing resource.

## youtubeCommentsDelete

Deletes a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeCommentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'in';
    $request->alt = AltEnum::JSON;
    $request->callback = 'libero';
    $request->fields = 'illum';
    $request->id = 'b04f1575-6082-4d68-aa19-f1d17051339d';
    $request->key = 'accusantium';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new YoutubeCommentsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->youtubeCommentsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeCommentsInsert

Inserts a new resource into this collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Comment;
use \OpenAPI\OpenAPI\Models\Shared\CommentSnippet;
use \OpenAPI\OpenAPI\Models\Shared\CommentSnippetAuthorChannelId;
use \OpenAPI\OpenAPI\Models\Shared\CommentSnippetModerationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommentSnippetViewerRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeCommentsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->comment = new Comment();
    $request->comment->etag = 'ab';
    $request->comment->id = '840394c2-6071-4f93-b5f0-642dac7af515';
    $request->comment->kind = 'porro';
    $request->comment->snippet = new CommentSnippet();
    $request->comment->snippet->authorChannelId = new CommentSnippetAuthorChannelId();
    $request->comment->snippet->authorChannelId->value = 'quod';
    $request->comment->snippet->authorChannelUrl = 'labore';
    $request->comment->snippet->authorDisplayName = 'ab';
    $request->comment->snippet->authorProfileImageUrl = 'adipisci';
    $request->comment->snippet->canRate = false;
    $request->comment->snippet->channelId = 'fuga';
    $request->comment->snippet->likeCount = 662505;
    $request->comment->snippet->moderationStatus = CommentSnippetModerationStatusEnum::HELD_FOR_REVIEW;
    $request->comment->snippet->parentId = 'velit';
    $request->comment->snippet->publishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-01T22:08:53.618Z');
    $request->comment->snippet->textDisplay = 'recusandae';
    $request->comment->snippet->textOriginal = 'totam';
    $request->comment->snippet->updatedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-23T14:56:28.537Z');
    $request->comment->snippet->videoId = 'ducimus';
    $request->comment->snippet->viewerRating = CommentSnippetViewerRatingEnum::LIKE;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::JSON;
    $request->callback = 'possimus';
    $request->fields = 'facilis';
    $request->key = 'cum';
    $request->oauthToken = 'commodi';
    $request->part = [
        'corporis',
        'reiciendis',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new YoutubeCommentsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->youtubeCommentsInsert($request, $requestSecurity);

    if ($response->comment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeCommentsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentsListTextFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeCommentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consectetur';
    $request->fields = 'in';
    $request->id = [
        'earum',
        'facere',
    ];
    $request->key = 'numquam';
    $request->maxResults = 985492;
    $request->oauthToken = 'suscipit';
    $request->pageToken = 'reiciendis';
    $request->parentId = 'quidem';
    $request->part = [
        'necessitatibus',
        'dolore',
        'sunt',
        'asperiores',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->textFormat = YoutubeCommentsListTextFormatEnum::TEXT_FORMAT_UNSPECIFIED;
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'beatae';

    $requestSecurity = new YoutubeCommentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->youtubeCommentsList($request, $requestSecurity);

    if ($response->commentListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeCommentsMarkAsSpam

Expresses the caller's opinion that one or more comments should be flagged as spam.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentsMarkAsSpamRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentsMarkAsSpamSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeCommentsMarkAsSpamRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consectetur';
    $request->fields = 'corporis';
    $request->id = [
        'laboriosam',
        'ipsa',
        'voluptates',
    ];
    $request->key = 'libero';
    $request->oauthToken = 'vitae';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new YoutubeCommentsMarkAsSpamSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->youtubeCommentsMarkAsSpam($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeCommentsSetModerationStatus

Sets the moderation status of one or more comments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentsSetModerationStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentsSetModerationStatusModerationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentsSetModerationStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeCommentsSetModerationStatusRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->banAuthor = false;
    $request->callback = 'voluptas';
    $request->fields = 'minima';
    $request->id = [
        'dolorum',
        'adipisci',
        'minus',
    ];
    $request->key = 'dolores';
    $request->moderationStatus = YoutubeCommentsSetModerationStatusModerationStatusEnum::LIKELY_SPAM;
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'officiis';

    $requestSecurity = new YoutubeCommentsSetModerationStatusSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->youtubeCommentsSetModerationStatus($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeCommentsUpdate

Updates an existing resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Comment;
use \OpenAPI\OpenAPI\Models\Shared\CommentSnippet;
use \OpenAPI\OpenAPI\Models\Shared\CommentSnippetAuthorChannelId;
use \OpenAPI\OpenAPI\Models\Shared\CommentSnippetModerationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommentSnippetViewerRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeCommentsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->comment = new Comment();
    $request->comment->etag = 'ullam';
    $request->comment->id = '3b88f3a8-d8f5-4c0b-af2f-b7b194a276b2';
    $request->comment->kind = 'voluptas';
    $request->comment->snippet = new CommentSnippet();
    $request->comment->snippet->authorChannelId = new CommentSnippetAuthorChannelId();
    $request->comment->snippet->authorChannelId->value = 'unde';
    $request->comment->snippet->authorChannelUrl = 'architecto';
    $request->comment->snippet->authorDisplayName = 'suscipit';
    $request->comment->snippet->authorProfileImageUrl = 'sapiente';
    $request->comment->snippet->canRate = false;
    $request->comment->snippet->channelId = 'debitis';
    $request->comment->snippet->likeCount = 72434;
    $request->comment->snippet->moderationStatus = CommentSnippetModerationStatusEnum::REJECTED;
    $request->comment->snippet->parentId = 'perferendis';
    $request->comment->snippet->publishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-15T21:52:35.790Z');
    $request->comment->snippet->textDisplay = 'incidunt';
    $request->comment->snippet->textOriginal = 'sed';
    $request->comment->snippet->updatedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-26T03:32:06.720Z');
    $request->comment->snippet->videoId = 'necessitatibus';
    $request->comment->snippet->viewerRating = CommentSnippetViewerRatingEnum::NONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'voluptatibus';
    $request->key = 'tempora';
    $request->oauthToken = 'tempora';
    $request->part = [
        'reiciendis',
        'ex',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'officiis';

    $requestSecurity = new YoutubeCommentsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->youtubeCommentsUpdate($request, $requestSecurity);

    if ($response->comment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
