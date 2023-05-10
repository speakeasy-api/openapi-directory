<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsBatchTranslateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchTranslateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\TranslateTextGlossaryConfig;
use \OpenAPI\OpenAPI\Models\Shared\BatchDocumentInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\BatchDocumentOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsBatchTranslateDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsBatchTranslateDocumentRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchTranslateDocumentRequest = new BatchTranslateDocumentRequest();
    $request->batchTranslateDocumentRequest->customizedAttribution = 'provident';
    $request->batchTranslateDocumentRequest->enableShadowRemovalNativePdf = false;
    $request->batchTranslateDocumentRequest->formatConversions = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->batchTranslateDocumentRequest->glossaries = [
        'deserunt' => new TranslateTextGlossaryConfig(),
        'suscipit' => new TranslateTextGlossaryConfig(),
        'iure' => new TranslateTextGlossaryConfig(),
    ];
    $request->batchTranslateDocumentRequest->inputConfigs = [
        new BatchDocumentInputConfig(),
        new BatchDocumentInputConfig(),
    ];
    $request->batchTranslateDocumentRequest->models = [
        'ipsa' => 'delectus',
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];
    $request->batchTranslateDocumentRequest->outputConfig = new BatchDocumentOutputConfig();
    $request->batchTranslateDocumentRequest->outputConfig->gcsDestination = new GcsDestination();
    $request->batchTranslateDocumentRequest->outputConfig->gcsDestination->outputUriPrefix = 'iusto';
    $request->batchTranslateDocumentRequest->sourceLanguageCode = 'excepturi';
    $request->batchTranslateDocumentRequest->targetLanguageCodes = [
        'recusandae',
        'temporibus',
    ];
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->parent = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new TranslateProjectsLocationsBatchTranslateDocumentSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsBatchTranslateDocument($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->