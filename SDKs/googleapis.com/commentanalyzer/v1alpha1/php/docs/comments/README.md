# comments

### Available Operations

* [commentanalyzerCommentsAnalyze](#commentanalyzercommentsanalyze) - Analyzes the provided text and returns scores for requested attributes.
* [commentanalyzerCommentsSuggestscore](#commentanalyzercommentssuggestscore) - Suggest comment scores as training data.

## commentanalyzerCommentsAnalyze

Analyzes the provided text and returns scores for requested attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CommentanalyzerCommentsAnalyzeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnalyzeCommentRequest;
use \OpenAPI\OpenAPI\Models\Shared\TextEntry;
use \OpenAPI\OpenAPI\Models\Shared\TextEntryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Context;
use \OpenAPI\OpenAPI\Models\Shared\ArticleAndParentComment;
use \OpenAPI\OpenAPI\Models\Shared\AttributeParameters;
use \OpenAPI\OpenAPI\Models\Shared\AttributeParametersScoreTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CommentanalyzerCommentsAnalyzeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CommentanalyzerCommentsAnalyzeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->analyzeCommentRequest = new AnalyzeCommentRequest();
    $request->analyzeCommentRequest->clientToken = 'veritatis';
    $request->analyzeCommentRequest->comment = new TextEntry();
    $request->analyzeCommentRequest->comment->text = 'deserunt';
    $request->analyzeCommentRequest->comment->type = TextEntryTypeEnum::TEXT_TYPE_UNSPECIFIED;
    $request->analyzeCommentRequest->communityId = 'ipsam';
    $request->analyzeCommentRequest->context = new Context();
    $request->analyzeCommentRequest->context->articleAndParentComment = new ArticleAndParentComment();
    $request->analyzeCommentRequest->context->articleAndParentComment->article = new TextEntry();
    $request->analyzeCommentRequest->context->articleAndParentComment->article->text = 'repellendus';
    $request->analyzeCommentRequest->context->articleAndParentComment->article->type = TextEntryTypeEnum::HTML;
    $request->analyzeCommentRequest->context->articleAndParentComment->parentComment = new TextEntry();
    $request->analyzeCommentRequest->context->articleAndParentComment->parentComment->text = 'quo';
    $request->analyzeCommentRequest->context->articleAndParentComment->parentComment->type = TextEntryTypeEnum::TEXT_TYPE_UNSPECIFIED;
    $request->analyzeCommentRequest->context->entries = [
        new TextEntry(),
        new TextEntry(),
        new TextEntry(),
        new TextEntry(),
    ];
    $request->analyzeCommentRequest->doNotStore = false;
    $request->analyzeCommentRequest->dropUnsupportedAttributes = false;
    $request->analyzeCommentRequest->languages = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->analyzeCommentRequest->requestedAttributes = [
        'totam' => new AttributeParameters(),
        'porro' => new AttributeParameters(),
    ];
    $request->analyzeCommentRequest->sessionId = 'dolorum';
    $request->analyzeCommentRequest->spanAnnotations = false;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'occaecati';
    $request->key = 'fugit';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new CommentanalyzerCommentsAnalyzeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->commentanalyzerCommentsAnalyze($request, $requestSecurity);

    if ($response->analyzeCommentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## commentanalyzerCommentsSuggestscore

Suggest comment scores as training data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CommentanalyzerCommentsSuggestscoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SuggestCommentScoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttributeScores;
use \OpenAPI\OpenAPI\Models\Shared\SpanScore;
use \OpenAPI\OpenAPI\Models\Shared\Score;
use \OpenAPI\OpenAPI\Models\Shared\ScoreTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextEntry;
use \OpenAPI\OpenAPI\Models\Shared\TextEntryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Context;
use \OpenAPI\OpenAPI\Models\Shared\ArticleAndParentComment;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CommentanalyzerCommentsSuggestscoreSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CommentanalyzerCommentsSuggestscoreRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->suggestCommentScoreRequest = new SuggestCommentScoreRequest();
    $request->suggestCommentScoreRequest->attributeScores = [
        'molestiae' => new AttributeScores(),
        'modi' => new AttributeScores(),
    ];
    $request->suggestCommentScoreRequest->clientToken = 'qui';
    $request->suggestCommentScoreRequest->comment = new TextEntry();
    $request->suggestCommentScoreRequest->comment->text = 'impedit';
    $request->suggestCommentScoreRequest->comment->type = TextEntryTypeEnum::HTML;
    $request->suggestCommentScoreRequest->communityId = 'esse';
    $request->suggestCommentScoreRequest->context = new Context();
    $request->suggestCommentScoreRequest->context->articleAndParentComment = new ArticleAndParentComment();
    $request->suggestCommentScoreRequest->context->articleAndParentComment->article = new TextEntry();
    $request->suggestCommentScoreRequest->context->articleAndParentComment->article->text = 'ipsum';
    $request->suggestCommentScoreRequest->context->articleAndParentComment->article->type = TextEntryTypeEnum::PLAIN_TEXT;
    $request->suggestCommentScoreRequest->context->articleAndParentComment->parentComment = new TextEntry();
    $request->suggestCommentScoreRequest->context->articleAndParentComment->parentComment->text = 'aspernatur';
    $request->suggestCommentScoreRequest->context->articleAndParentComment->parentComment->type = TextEntryTypeEnum::TEXT_TYPE_UNSPECIFIED;
    $request->suggestCommentScoreRequest->context->entries = [
        new TextEntry(),
        new TextEntry(),
    ];
    $request->suggestCommentScoreRequest->languages = [
        'sed',
        'iste',
        'dolor',
    ];
    $request->suggestCommentScoreRequest->sessionId = 'natus';
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'fuga';
    $request->key = 'in';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new CommentanalyzerCommentsSuggestscoreSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->commentanalyzerCommentsSuggestscore($request, $requestSecurity);

    if ($response->suggestCommentScoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
