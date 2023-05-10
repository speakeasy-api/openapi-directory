# documents

### Available Operations

* [languageDocumentsAnalyzeEntities](#languagedocumentsanalyzeentities) - Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
* [languageDocumentsAnalyzeSentiment](#languagedocumentsanalyzesentiment) - Analyzes the sentiment of the provided text.
* [languageDocumentsAnalyzeSyntax](#languagedocumentsanalyzesyntax) - Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
* [languageDocumentsAnnotateText](#languagedocumentsannotatetext) - A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.

## languageDocumentsAnalyzeEntities

Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnalyzeEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnalyzeEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\DocumentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnalyzeEntitiesRequestEncodingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnalyzeEntitiesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnalyzeEntitiesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnalyzeEntitiesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LanguageDocumentsAnalyzeEntitiesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->analyzeEntitiesRequest = new AnalyzeEntitiesRequest();
    $request->analyzeEntitiesRequest->document = new Document();
    $request->analyzeEntitiesRequest->document->content = 'delectus';
    $request->analyzeEntitiesRequest->document->gcsContentUri = 'tempora';
    $request->analyzeEntitiesRequest->document->language = 'suscipit';
    $request->analyzeEntitiesRequest->document->type = DocumentTypeEnum::PLAIN_TEXT;
    $request->analyzeEntitiesRequest->encodingType = AnalyzeEntitiesRequestEncodingTypeEnum::UTF32;
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iusto';
    $request->fields = 'excepturi';
    $request->key = 'nisi';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new LanguageDocumentsAnalyzeEntitiesSecurity();
    $requestSecurity->option1 = new LanguageDocumentsAnalyzeEntitiesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->documents->languageDocumentsAnalyzeEntities($request, $requestSecurity);

    if ($response->analyzeEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## languageDocumentsAnalyzeSentiment

Analyzes the sentiment of the provided text.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnalyzeSentimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnalyzeSentimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\DocumentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnalyzeSentimentRequestEncodingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnalyzeSentimentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnalyzeSentimentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnalyzeSentimentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LanguageDocumentsAnalyzeSentimentRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->analyzeSentimentRequest = new AnalyzeSentimentRequest();
    $request->analyzeSentimentRequest->document = new Document();
    $request->analyzeSentimentRequest->document->content = 'deserunt';
    $request->analyzeSentimentRequest->document->gcsContentUri = 'perferendis';
    $request->analyzeSentimentRequest->document->language = 'ipsam';
    $request->analyzeSentimentRequest->document->type = DocumentTypeEnum::HTML;
    $request->analyzeSentimentRequest->encodingType = AnalyzeSentimentRequestEncodingTypeEnum::UTF32;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'at';
    $request->key = 'maiores';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new LanguageDocumentsAnalyzeSentimentSecurity();
    $requestSecurity->option1 = new LanguageDocumentsAnalyzeSentimentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->documents->languageDocumentsAnalyzeSentiment($request, $requestSecurity);

    if ($response->analyzeSentimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## languageDocumentsAnalyzeSyntax

Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnalyzeSyntaxRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnalyzeSyntaxRequest;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\DocumentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnalyzeSyntaxRequestEncodingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnalyzeSyntaxSecurity;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnalyzeSyntaxSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnalyzeSyntaxSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LanguageDocumentsAnalyzeSyntaxRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->analyzeSyntaxRequest = new AnalyzeSyntaxRequest();
    $request->analyzeSyntaxRequest->document = new Document();
    $request->analyzeSyntaxRequest->document->content = 'porro';
    $request->analyzeSyntaxRequest->document->gcsContentUri = 'dolorum';
    $request->analyzeSyntaxRequest->document->language = 'dicta';
    $request->analyzeSyntaxRequest->document->type = DocumentTypeEnum::HTML;
    $request->analyzeSyntaxRequest->encodingType = AnalyzeSyntaxRequestEncodingTypeEnum::UTF16;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'hic';
    $request->key = 'optio';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new LanguageDocumentsAnalyzeSyntaxSecurity();
    $requestSecurity->option1 = new LanguageDocumentsAnalyzeSyntaxSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->documents->languageDocumentsAnalyzeSyntax($request, $requestSecurity);

    if ($response->analyzeSyntaxResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## languageDocumentsAnnotateText

A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnnotateTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnnotateTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\DocumentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnnotateTextRequestEncodingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Features;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnnotateTextSecurity;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnnotateTextSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnnotateTextSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LanguageDocumentsAnnotateTextRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->annotateTextRequest = new AnnotateTextRequest();
    $request->annotateTextRequest->document = new Document();
    $request->annotateTextRequest->document->content = 'qui';
    $request->annotateTextRequest->document->gcsContentUri = 'impedit';
    $request->annotateTextRequest->document->language = 'cum';
    $request->annotateTextRequest->document->type = DocumentTypeEnum::PLAIN_TEXT;
    $request->annotateTextRequest->encodingType = AnnotateTextRequestEncodingTypeEnum::NONE;
    $request->annotateTextRequest->features = new Features();
    $request->annotateTextRequest->features->extractDocumentSentiment = false;
    $request->annotateTextRequest->features->extractEntities = false;
    $request->annotateTextRequest->features->extractSyntax = false;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'ad';
    $request->key = 'natus';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new LanguageDocumentsAnnotateTextSecurity();
    $requestSecurity->option1 = new LanguageDocumentsAnnotateTextSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->documents->languageDocumentsAnnotateText($request, $requestSecurity);

    if ($response->annotateTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
