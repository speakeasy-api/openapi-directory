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