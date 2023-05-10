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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->analyzeEntitiesRequest = new AnalyzeEntitiesRequest();
    $request->analyzeEntitiesRequest->document = new Document();
    $request->analyzeEntitiesRequest->document->boilerplateHandling = DocumentBoilerplateHandlingEnum::SKIP_BOILERPLATE;
    $request->analyzeEntitiesRequest->document->content = 'distinctio';
    $request->analyzeEntitiesRequest->document->gcsContentUri = 'quibusdam';
    $request->analyzeEntitiesRequest->document->language = 'unde';
    $request->analyzeEntitiesRequest->document->referenceWebUri = 'nulla';
    $request->analyzeEntitiesRequest->document->type = DocumentTypeEnum::PLAIN_TEXT;
    $request->analyzeEntitiesRequest->encodingType = AnalyzeEntitiesRequestEncodingTypeEnum::UTF32;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'delectus';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [documents](docs/documents/README.md)

* [languageDocumentsAnalyzeEntities](docs/documents/README.md#languagedocumentsanalyzeentities) - Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
* [languageDocumentsAnalyzeEntitySentiment](docs/documents/README.md#languagedocumentsanalyzeentitysentiment) - Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
* [languageDocumentsAnalyzeSentiment](docs/documents/README.md#languagedocumentsanalyzesentiment) - Analyzes the sentiment of the provided text.
* [languageDocumentsAnalyzeSyntax](docs/documents/README.md#languagedocumentsanalyzesyntax) - Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
* [languageDocumentsAnnotateText](docs/documents/README.md#languagedocumentsannotatetext) - A convenience method that provides all syntax, sentiment, entity, and classification features in one call.
* [languageDocumentsClassifyText](docs/documents/README.md#languagedocumentsclassifytext) - Classifies a document into categories.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
