# youtube

### Available Operations

* [youtubeYoutubeV3UpdateCommentThreads](#youtubeyoutubev3updatecommentthreads) - Updates an existing resource.

## youtubeYoutubeV3UpdateCommentThreads

Updates an existing resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeYoutubeV3UpdateCommentThreadsRequest;
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

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeYoutubeV3UpdateCommentThreadsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->commentThread = new CommentThread();
    $request->commentThread->etag = 'molestias';
    $request->commentThread->id = '57a9e618-76c6-4ab2-9d29-dfc94d6fecd7';
    $request->commentThread->kind = 'iste';
    $request->commentThread->replies = new CommentThreadReplies();
    $request->commentThread->replies->comments = [
        new Comment(),
        new Comment(),
        new Comment(),
    ];
    $request->commentThread->snippet = new CommentThreadSnippet();
    $request->commentThread->snippet->canReply = false;
    $request->commentThread->snippet->channelId = 'dolor';
    $request->commentThread->snippet->isPublic = false;
    $request->commentThread->snippet->topLevelComment = new Comment();
    $request->commentThread->snippet->topLevelComment->etag = 'sint';
    $request->commentThread->snippet->topLevelComment->id = '0066a6d2-d000-4355-b38c-ec086fa21e91';
    $request->commentThread->snippet->topLevelComment->kind = 'ipsam';
    $request->commentThread->snippet->topLevelComment->snippet = new CommentSnippet();
    $request->commentThread->snippet->topLevelComment->snippet->authorChannelId = new CommentSnippetAuthorChannelId();
    $request->commentThread->snippet->topLevelComment->snippet->authorChannelId->value = 'consequuntur';
    $request->commentThread->snippet->topLevelComment->snippet->authorChannelUrl = 'cumque';
    $request->commentThread->snippet->topLevelComment->snippet->authorDisplayName = 'quidem';
    $request->commentThread->snippet->topLevelComment->snippet->authorProfileImageUrl = 'non';
    $request->commentThread->snippet->topLevelComment->snippet->canRate = false;
    $request->commentThread->snippet->topLevelComment->snippet->channelId = 'beatae';
    $request->commentThread->snippet->topLevelComment->snippet->likeCount = 123495;
    $request->commentThread->snippet->topLevelComment->snippet->moderationStatus = CommentSnippetModerationStatusEnum::LIKELY_SPAM;
    $request->commentThread->snippet->topLevelComment->snippet->parentId = 'beatae';
    $request->commentThread->snippet->topLevelComment->snippet->publishedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-04T09:51:39.451Z');
    $request->commentThread->snippet->topLevelComment->snippet->textDisplay = 'libero';
    $request->commentThread->snippet->topLevelComment->snippet->textOriginal = 'molestias';
    $request->commentThread->snippet->topLevelComment->snippet->updatedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-06T10:22:27.901Z');
    $request->commentThread->snippet->topLevelComment->snippet->videoId = 'impedit';
    $request->commentThread->snippet->topLevelComment->snippet->viewerRating = CommentSnippetViewerRatingEnum::LIKE;
    $request->commentThread->snippet->totalReplyCount = 849690;
    $request->commentThread->snippet->videoId = 'distinctio';
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quaerat';
    $request->fields = 'consequatur';
    $request->key = 'laudantium';
    $request->oauthToken = 'repellendus';
    $request->part = [
        'quibusdam',
        'consectetur',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'earum';

    $response = $sdk->youtube->youtubeYoutubeV3UpdateCommentThreads($request);

    if ($response->commentThread !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
