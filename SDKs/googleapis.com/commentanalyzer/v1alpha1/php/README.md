# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->analyzeCommentRequest = new AnalyzeCommentRequest();
    $request->analyzeCommentRequest->clientToken = 'provident';
    $request->analyzeCommentRequest->comment = new TextEntry();
    $request->analyzeCommentRequest->comment->text = 'distinctio';
    $request->analyzeCommentRequest->comment->type = TextEntryTypeEnum::HTML;
    $request->analyzeCommentRequest->communityId = 'unde';
    $request->analyzeCommentRequest->context = new Context();
    $request->analyzeCommentRequest->context->articleAndParentComment = new ArticleAndParentComment();
    $request->analyzeCommentRequest->context->articleAndParentComment->article = new TextEntry();
    $request->analyzeCommentRequest->context->articleAndParentComment->article->text = 'nulla';
    $request->analyzeCommentRequest->context->articleAndParentComment->article->type = TextEntryTypeEnum::PLAIN_TEXT;
    $request->analyzeCommentRequest->context->articleAndParentComment->parentComment = new TextEntry();
    $request->analyzeCommentRequest->context->articleAndParentComment->parentComment->text = 'illum';
    $request->analyzeCommentRequest->context->articleAndParentComment->parentComment->type = TextEntryTypeEnum::PLAIN_TEXT;
    $request->analyzeCommentRequest->context->entries = [
        new TextEntry(),
        new TextEntry(),
        new TextEntry(),
    ];
    $request->analyzeCommentRequest->doNotStore = false;
    $request->analyzeCommentRequest->dropUnsupportedAttributes = false;
    $request->analyzeCommentRequest->languages = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->analyzeCommentRequest->requestedAttributes = [
        'ipsa' => new AttributeParameters(),
        'delectus' => new AttributeParameters(),
        'tempora' => new AttributeParameters(),
        'suscipit' => new AttributeParameters(),
    ];
    $request->analyzeCommentRequest->sessionId = 'molestiae';
    $request->analyzeCommentRequest->spanAnnotations = false;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatum';
    $request->fields = 'iusto';
    $request->key = 'excepturi';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'ab';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [comments](docs/comments/README.md)

* [commentanalyzerCommentsAnalyze](docs/comments/README.md#commentanalyzercommentsanalyze) - Analyzes the provided text and returns scores for requested attributes.
* [commentanalyzerCommentsSuggestscore](docs/comments/README.md#commentanalyzercommentssuggestscore) - Suggest comment scores as training data.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
