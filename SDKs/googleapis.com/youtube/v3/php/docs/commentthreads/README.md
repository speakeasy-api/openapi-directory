# commentThreads

### Available Operations

* [youtubeCommentThreadsInsert](#youtubecommentthreadsinsert) - Inserts a new resource into this collection.
* [youtubeCommentThreadsList](#youtubecommentthreadslist) - Retrieves a list of resources, possibly filtered.

## youtubeCommentThreadsInsert

Inserts a new resource into this collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommentThread;
use \OpenAPI\OpenAPI\Models\Shared\CommentThreadReplies;
use \OpenAPI\OpenAPI\Models\Shared\Comment;
use \OpenAPI\OpenAPI\Models\Shared\CommentSnippet;
use \OpenAPI\OpenAPI\Models\Shared\CommentSnippetAuthorChannelId;
use \OpenAPI\OpenAPI\Models\Shared\CommentSnippetModerationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommentSnippetViewerRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommentThreadSnippet;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeCommentThreadsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->commentThread = new CommentThread();
    $request->commentThread->etag = 'quidem';
    $request->commentThread->id = 'd466d28c-10ab-43cd-8a42-51904e523c7e';
    $request->commentThread->kind = 'aperiam';
    $request->commentThread->replies = new CommentThreadReplies();
    $request->commentThread->replies->comments = [
        new Comment(),
        new Comment(),
        new Comment(),
    ];
    $request->commentThread->snippet = new CommentThreadSnippet();
    $request->commentThread->snippet->canReply = false;
    $request->commentThread->snippet->channelId = 'quod';
    $request->commentThread->snippet->isPublic = false;
    $request->commentThread->snippet->topLevelComment = new Comment();
    $request->commentThread->snippet->topLevelComment->etag = 'dignissimos';
    $request->commentThread->snippet->topLevelComment->id = '178e4796-f2a7-40c6-8828-2aa482562f22';
    $request->commentThread->snippet->topLevelComment->kind = 'explicabo';
    $request->commentThread->snippet->topLevelComment->snippet = new CommentSnippet();
    $request->commentThread->snippet->topLevelComment->snippet->authorChannelId = new CommentSnippetAuthorChannelId();
    $request->commentThread->snippet->topLevelComment->snippet->authorChannelId->value = 'saepe';
    $request->commentThread->snippet->topLevelComment->snippet->authorChannelUrl = 'occaecati';
    $request->commentThread->snippet->topLevelComment->snippet->authorDisplayName = 'atque';
    $request->commentThread->snippet->topLevelComment->snippet->authorProfileImageUrl = 'et';
    $request->commentThread->snippet->topLevelComment->snippet->canRate = false;
    $request->commentThread->snippet->topLevelComment->snippet->channelId = 'esse';
    $request->commentThread->snippet->topLevelComment->snippet->likeCount = 910545;
    $request->commentThread->snippet->topLevelComment->snippet->moderationStatus = CommentSnippetModerationStatusEnum::REJECTED;
    $request->commentThread->snippet->topLevelComment->snippet->parentId = 'veritatis';
    $request->commentThread->snippet->topLevelComment->snippet->publishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-14T20:41:04.723Z');
    $request->commentThread->snippet->topLevelComment->snippet->textDisplay = 'nam';
    $request->commentThread->snippet->topLevelComment->snippet->textOriginal = 'vero';
    $request->commentThread->snippet->topLevelComment->snippet->updatedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-27T21:17:41.726Z');
    $request->commentThread->snippet->topLevelComment->snippet->videoId = 'saepe';
    $request->commentThread->snippet->topLevelComment->snippet->viewerRating = CommentSnippetViewerRatingEnum::LIKE;
    $request->commentThread->snippet->totalReplyCount = 690025;
    $request->commentThread->snippet->videoId = 'molestiae';
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'distinctio';
    $request->key = 'eligendi';
    $request->oauthToken = 'sit';
    $request->part = [
        'tempore',
        'adipisci',
        'cumque',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'minus';

    $requestSecurity = new YoutubeCommentThreadsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->commentThreads->youtubeCommentThreadsInsert($request, $requestSecurity);

    if ($response->commentThread !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeCommentThreadsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsListModerationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsListOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsListTextFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeCommentThreadsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sapiente';
    $request->allThreadsRelatedToChannelId = 'consectetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'blanditiis';
    $request->channelId = 'provident';
    $request->fields = 'a';
    $request->id = [
        'quas',
        'esse',
        'quasi',
        'a',
    ];
    $request->key = 'error';
    $request->maxResults = 575751;
    $request->moderationStatus = YoutubeCommentThreadsListModerationStatusEnum::REJECTED;
    $request->oauthToken = 'possimus';
    $request->order = YoutubeCommentThreadsListOrderEnum::ORDER_UNSPECIFIED;
    $request->pageToken = 'eveniet';
    $request->part = [
        'facere',
        'veritatis',
        'consequuntur',
        'quasi',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'similique';
    $request->searchTerms = 'culpa';
    $request->textFormat = YoutubeCommentThreadsListTextFormatEnum::HTML;
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'quae';
    $request->videoId = 'earum';

    $requestSecurity = new YoutubeCommentThreadsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->commentThreads->youtubeCommentThreadsList($request, $requestSecurity);

    if ($response->commentThreadListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
