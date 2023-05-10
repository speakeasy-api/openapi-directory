# documents

### Available Operations

* [languageDocumentsAnalyzeEntities](#languagedocumentsanalyzeentities) - Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
* [languageDocumentsAnalyzeEntitySentiment](#languagedocumentsanalyzeentitysentiment) - Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
* [languageDocumentsAnalyzeSentiment](#languagedocumentsanalyzesentiment) - Analyzes the sentiment of the provided text.
* [languageDocumentsAnalyzeSyntax](#languagedocumentsanalyzesyntax) - Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
* [languageDocumentsAnnotateText](#languagedocumentsannotatetext) - A convenience method that provides all syntax, sentiment, entity, and classification features in one call.
* [languageDocumentsClassifyText](#languagedocumentsclassifytext) - Classifies a document into categories.

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
use \OpenAPI\OpenAPI\Models\Shared\DocumentBoilerplateHandlingEnum;
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
    $request->analyzeEntitiesRequest->document->boilerplateHandling = DocumentBoilerplateHandlingEnum::SKIP_BOILERPLATE;
    $request->analyzeEntitiesRequest->document->content = 'molestiae';
    $request->analyzeEntitiesRequest->document->gcsContentUri = 'minus';
    $request->analyzeEntitiesRequest->document->language = 'placeat';
    $request->analyzeEntitiesRequest->document->referenceWebUri = 'voluptatum';
    $request->analyzeEntitiesRequest->document->type = DocumentTypeEnum::PLAIN_TEXT;
    $request->analyzeEntitiesRequest->encodingType = AnalyzeEntitiesRequestEncodingTypeEnum::UTF16;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'temporibus';
    $request->fields = 'ab';
    $request->key = 'quis';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';

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

## languageDocumentsAnalyzeEntitySentiment

Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnalyzeEntitySentimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnalyzeEntitySentimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\DocumentBoilerplateHandlingEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnalyzeEntitySentimentRequestEncodingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnalyzeEntitySentimentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnalyzeEntitySentimentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsAnalyzeEntitySentimentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LanguageDocumentsAnalyzeEntitySentimentRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->analyzeEntitySentimentRequest = new AnalyzeEntitySentimentRequest();
    $request->analyzeEntitySentimentRequest->document = new Document();
    $request->analyzeEntitySentimentRequest->document->boilerplateHandling = DocumentBoilerplateHandlingEnum::KEEP_BOILERPLATE;
    $request->analyzeEntitySentimentRequest->document->content = 'quo';
    $request->analyzeEntitySentimentRequest->document->gcsContentUri = 'odit';
    $request->analyzeEntitySentimentRequest->document->language = 'at';
    $request->analyzeEntitySentimentRequest->document->referenceWebUri = 'at';
    $request->analyzeEntitySentimentRequest->document->type = DocumentTypeEnum::HTML;
    $request->analyzeEntitySentimentRequest->encodingType = AnalyzeEntitySentimentRequestEncodingTypeEnum::UTF8;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'totam';
    $request->key = 'porro';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new LanguageDocumentsAnalyzeEntitySentimentSecurity();
    $requestSecurity->option1 = new LanguageDocumentsAnalyzeEntitySentimentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->documents->languageDocumentsAnalyzeEntitySentiment($request, $requestSecurity);

    if ($response->analyzeEntitySentimentResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\DocumentBoilerplateHandlingEnum;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->analyzeSentimentRequest = new AnalyzeSentimentRequest();
    $request->analyzeSentimentRequest->document = new Document();
    $request->analyzeSentimentRequest->document->boilerplateHandling = DocumentBoilerplateHandlingEnum::BOILERPLATE_HANDLING_UNSPECIFIED;
    $request->analyzeSentimentRequest->document->content = 'deleniti';
    $request->analyzeSentimentRequest->document->gcsContentUri = 'hic';
    $request->analyzeSentimentRequest->document->language = 'optio';
    $request->analyzeSentimentRequest->document->referenceWebUri = 'totam';
    $request->analyzeSentimentRequest->document->type = DocumentTypeEnum::TYPE_UNSPECIFIED;
    $request->analyzeSentimentRequest->encodingType = AnalyzeSentimentRequestEncodingTypeEnum::UTF8;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'impedit';
    $request->key = 'cum';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'aspernatur';

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
use \OpenAPI\OpenAPI\Models\Shared\DocumentBoilerplateHandlingEnum;
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->analyzeSyntaxRequest = new AnalyzeSyntaxRequest();
    $request->analyzeSyntaxRequest->document = new Document();
    $request->analyzeSyntaxRequest->document->boilerplateHandling = DocumentBoilerplateHandlingEnum::BOILERPLATE_HANDLING_UNSPECIFIED;
    $request->analyzeSyntaxRequest->document->content = 'natus';
    $request->analyzeSyntaxRequest->document->gcsContentUri = 'sed';
    $request->analyzeSyntaxRequest->document->language = 'iste';
    $request->analyzeSyntaxRequest->document->referenceWebUri = 'dolor';
    $request->analyzeSyntaxRequest->document->type = DocumentTypeEnum::PLAIN_TEXT;
    $request->analyzeSyntaxRequest->encodingType = AnalyzeSyntaxRequestEncodingTypeEnum::UTF8;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->fields = 'in';
    $request->key = 'corporis';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quidem';

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

A convenience method that provides all syntax, sentiment, entity, and classification features in one call.

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
use \OpenAPI\OpenAPI\Models\Shared\DocumentBoilerplateHandlingEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnnotateTextRequestEncodingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Features;
use \OpenAPI\OpenAPI\Models\Shared\ClassificationModelOptions;
use \OpenAPI\OpenAPI\Models\Shared\V2Model;
use \OpenAPI\OpenAPI\Models\Shared\V2ModelContentCategoriesVersionEnum;
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
    $request->annotateTextRequest->document->boilerplateHandling = DocumentBoilerplateHandlingEnum::BOILERPLATE_HANDLING_UNSPECIFIED;
    $request->annotateTextRequest->document->content = 'reiciendis';
    $request->annotateTextRequest->document->gcsContentUri = 'est';
    $request->annotateTextRequest->document->language = 'mollitia';
    $request->annotateTextRequest->document->referenceWebUri = 'laborum';
    $request->annotateTextRequest->document->type = DocumentTypeEnum::TYPE_UNSPECIFIED;
    $request->annotateTextRequest->encodingType = AnnotateTextRequestEncodingTypeEnum::NONE;
    $request->annotateTextRequest->features = new Features();
    $request->annotateTextRequest->features->classificationModelOptions = new ClassificationModelOptions();
    $request->annotateTextRequest->features->classificationModelOptions->v1Model = [
        'explicabo' => 'nobis',
        'enim' => 'omnis',
    ];
    $request->annotateTextRequest->features->classificationModelOptions->v2Model = new V2Model();
    $request->annotateTextRequest->features->classificationModelOptions->v2Model->contentCategoriesVersion = V2ModelContentCategoriesVersionEnum::V1;
    $request->annotateTextRequest->features->classifyText = false;
    $request->annotateTextRequest->features->extractDocumentSentiment = false;
    $request->annotateTextRequest->features->extractEntities = false;
    $request->annotateTextRequest->features->extractEntitySentiment = false;
    $request->annotateTextRequest->features->extractSyntax = false;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'iure';
    $request->key = 'culpa';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'mollitia';

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

## languageDocumentsClassifyText

Classifies a document into categories.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsClassifyTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClassifyTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClassificationModelOptions;
use \OpenAPI\OpenAPI\Models\Shared\V2Model;
use \OpenAPI\OpenAPI\Models\Shared\V2ModelContentCategoriesVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\DocumentBoilerplateHandlingEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsClassifyTextSecurity;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsClassifyTextSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDocumentsClassifyTextSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LanguageDocumentsClassifyTextRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->classifyTextRequest = new ClassifyTextRequest();
    $request->classifyTextRequest->classificationModelOptions = new ClassificationModelOptions();
    $request->classifyTextRequest->classificationModelOptions->v1Model = [
        'consequuntur' => 'repellat',
        'mollitia' => 'occaecati',
        'numquam' => 'commodi',
    ];
    $request->classifyTextRequest->classificationModelOptions->v2Model = new V2Model();
    $request->classifyTextRequest->classificationModelOptions->v2Model->contentCategoriesVersion = V2ModelContentCategoriesVersionEnum::V1;
    $request->classifyTextRequest->document = new Document();
    $request->classifyTextRequest->document->boilerplateHandling = DocumentBoilerplateHandlingEnum::SKIP_BOILERPLATE;
    $request->classifyTextRequest->document->content = 'velit';
    $request->classifyTextRequest->document->gcsContentUri = 'error';
    $request->classifyTextRequest->document->language = 'quia';
    $request->classifyTextRequest->document->referenceWebUri = 'quis';
    $request->classifyTextRequest->document->type = DocumentTypeEnum::TYPE_UNSPECIFIED;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'odit';
    $request->key = 'quo';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'id';

    $requestSecurity = new LanguageDocumentsClassifyTextSecurity();
    $requestSecurity->option1 = new LanguageDocumentsClassifyTextSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->documents->languageDocumentsClassifyText($request, $requestSecurity);

    if ($response->classifyTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
