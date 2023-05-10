# projects

### Available Operations

* [translateProjectsLocationsBatchTranslateDocument](#translateprojectslocationsbatchtranslatedocument) - Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* [translateProjectsLocationsBatchTranslateText](#translateprojectslocationsbatchtranslatetext) - Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* [translateProjectsLocationsDatasetsCreate](#translateprojectslocationsdatasetscreate) - Creates a Dataset.
* [translateProjectsLocationsDatasetsExamplesList](#translateprojectslocationsdatasetsexampleslist) - Lists sentence pairs in the dataset.
* [translateProjectsLocationsDatasetsExportData](#translateprojectslocationsdatasetsexportdata) - Exports dataset's data to the provided output location.
* [translateProjectsLocationsDatasetsImportData](#translateprojectslocationsdatasetsimportdata) - Import sentence pairs into translation Dataset.
* [translateProjectsLocationsDatasetsList](#translateprojectslocationsdatasetslist) - Lists datasets.
* [translateProjectsLocationsDetectLanguage](#translateprojectslocationsdetectlanguage) - Detects the language of text within a request.
* [translateProjectsLocationsGetSupportedLanguages](#translateprojectslocationsgetsupportedlanguages) - Returns a list of supported languages for translation.
* [translateProjectsLocationsGlossariesCreate](#translateprojectslocationsglossariescreate) - Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
* [translateProjectsLocationsGlossariesGlossaryEntriesCreate](#translateprojectslocationsglossariesglossaryentriescreate) - Creates a glossary entry.
* [translateProjectsLocationsGlossariesGlossaryEntriesList](#translateprojectslocationsglossariesglossaryentrieslist) - List the entries for the glossary.
* [translateProjectsLocationsGlossariesGlossaryEntriesPatch](#translateprojectslocationsglossariesglossaryentriespatch) - Updates a glossary entry.
* [translateProjectsLocationsGlossariesList](#translateprojectslocationsglossarieslist) - Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
* [translateProjectsLocationsList](#translateprojectslocationslist) - Lists information about the supported locations for this service.
* [translateProjectsLocationsModelsCreate](#translateprojectslocationsmodelscreate) - Creates a Model.
* [translateProjectsLocationsModelsList](#translateprojectslocationsmodelslist) - Lists models.
* [translateProjectsLocationsOperationsCancel](#translateprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [translateProjectsLocationsOperationsDelete](#translateprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [translateProjectsLocationsOperationsGet](#translateprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [translateProjectsLocationsOperationsList](#translateprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [translateProjectsLocationsOperationsWait](#translateprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [translateProjectsLocationsTranslateDocument](#translateprojectslocationstranslatedocument) - Translates documents in synchronous mode.
* [translateProjectsLocationsTranslateText](#translateprojectslocationstranslatetext) - Translates input text and returns translated text.

## translateProjectsLocationsBatchTranslateDocument

Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

### Example Usage

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
    $request->batchTranslateDocumentRequest->customizedAttribution = 'at';
    $request->batchTranslateDocumentRequest->enableShadowRemovalNativePdf = false;
    $request->batchTranslateDocumentRequest->formatConversions = [
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
        'dolorum' => 'dicta',
    ];
    $request->batchTranslateDocumentRequest->glossaries = [
        'officia' => new TranslateTextGlossaryConfig(),
        'occaecati' => new TranslateTextGlossaryConfig(),
        'fugit' => new TranslateTextGlossaryConfig(),
    ];
    $request->batchTranslateDocumentRequest->inputConfigs = [
        new BatchDocumentInputConfig(),
        new BatchDocumentInputConfig(),
        new BatchDocumentInputConfig(),
    ];
    $request->batchTranslateDocumentRequest->models = [
        'optio' => 'totam',
        'beatae' => 'commodi',
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->batchTranslateDocumentRequest->outputConfig = new BatchDocumentOutputConfig();
    $request->batchTranslateDocumentRequest->outputConfig->gcsDestination = new GcsDestination();
    $request->batchTranslateDocumentRequest->outputConfig->gcsDestination->outputUriPrefix = 'cum';
    $request->batchTranslateDocumentRequest->sourceLanguageCode = 'esse';
    $request->batchTranslateDocumentRequest->targetLanguageCodes = [
        'excepturi',
    ];
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'natus';
    $request->key = 'sed';
    $request->oauthToken = 'iste';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';

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

## translateProjectsLocationsBatchTranslateText

Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsBatchTranslateTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchTranslateTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\TranslateTextGlossaryConfig;
use \OpenAPI\OpenAPI\Models\Shared\InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsBatchTranslateTextSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsBatchTranslateTextRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchTranslateTextRequest = new BatchTranslateTextRequest();
    $request->batchTranslateTextRequest->glossaries = [
        'in' => new TranslateTextGlossaryConfig(),
        'corporis' => new TranslateTextGlossaryConfig(),
        'iste' => new TranslateTextGlossaryConfig(),
    ];
    $request->batchTranslateTextRequest->inputConfigs = [
        new InputConfig(),
        new InputConfig(),
    ];
    $request->batchTranslateTextRequest->labels = [
        'quidem' => 'architecto',
        'ipsa' => 'reiciendis',
        'est' => 'mollitia',
        'laborum' => 'dolores',
    ];
    $request->batchTranslateTextRequest->models = [
        'corporis' => 'explicabo',
    ];
    $request->batchTranslateTextRequest->outputConfig = new OutputConfig();
    $request->batchTranslateTextRequest->outputConfig->gcsDestination = new GcsDestination();
    $request->batchTranslateTextRequest->outputConfig->gcsDestination->outputUriPrefix = 'nobis';
    $request->batchTranslateTextRequest->sourceLanguageCode = 'enim';
    $request->batchTranslateTextRequest->targetLanguageCodes = [
        'nemo',
        'minima',
        'excepturi',
    ];
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'doloribus';
    $request->key = 'sapiente';
    $request->oauthToken = 'architecto';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new TranslateProjectsLocationsBatchTranslateTextSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsBatchTranslateText($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsDatasetsCreate

Creates a Dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatasetInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsDatasetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->datasetInput = new DatasetInput();
    $request->datasetInput->displayName = 'mollitia';
    $request->datasetInput->name = 'Francis Jerde';
    $request->datasetInput->sourceLanguageCode = 'velit';
    $request->datasetInput->targetLanguageCode = 'error';
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'laborum';
    $request->key = 'animi';
    $request->oauthToken = 'enim';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'tenetur';

    $requestSecurity = new TranslateProjectsLocationsDatasetsCreateSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsDatasetsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsDatasetsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsDatasetsExamplesList

Lists sentence pairs in the dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsExamplesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsExamplesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsExamplesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsExamplesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsDatasetsExamplesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aut';
    $request->fields = 'quasi';
    $request->filter = 'error';
    $request->key = 'temporibus';
    $request->oauthToken = 'laborum';
    $request->pageSize = 96098;
    $request->pageToken = 'reiciendis';
    $request->parent = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new TranslateProjectsLocationsDatasetsExamplesListSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsDatasetsExamplesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsDatasetsExamplesList($request, $requestSecurity);

    if ($response->listExamplesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsDatasetsExportData

Exports dataset's data to the provided output location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsExportDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExportDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\DatasetOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsOutputDestination;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsExportDataSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsExportDataSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsExportDataSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsDatasetsExportDataRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->exportDataRequest = new ExportDataRequest();
    $request->exportDataRequest->outputConfig = new DatasetOutputConfig();
    $request->exportDataRequest->outputConfig->gcsDestination = new GcsOutputDestination();
    $request->exportDataRequest->outputConfig->gcsDestination->outputUriPrefix = 'ipsa';
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->dataset = 'perferendis';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new TranslateProjectsLocationsDatasetsExportDataSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsDatasetsExportDataSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsDatasetsExportData($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsDatasetsImportData

Import sentence pairs into translation Dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsImportDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\DatasetInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\InputFile;
use \OpenAPI\OpenAPI\Models\Shared\GcsInputSource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsImportDataSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsImportDataSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsImportDataSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsDatasetsImportDataRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->importDataRequest = new ImportDataRequest();
    $request->importDataRequest->inputConfig = new DatasetInputConfig();
    $request->importDataRequest->inputConfig->inputFiles = [
        new InputFile(),
        new InputFile(),
    ];
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->dataset = 'accusamus';
    $request->fields = 'commodi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'molestias';

    $requestSecurity = new TranslateProjectsLocationsDatasetsImportDataSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsDatasetsImportDataSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsDatasetsImportData($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsDatasetsList

Lists datasets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDatasetsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsDatasetsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'rem';
    $request->key = 'voluptates';
    $request->oauthToken = 'quasi';
    $request->pageSize = 921158;
    $request->pageToken = 'sint';
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new TranslateProjectsLocationsDatasetsListSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsDatasetsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsDatasetsList($request, $requestSecurity);

    if ($response->listDatasetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsDetectLanguage

Detects the language of text within a request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDetectLanguageRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DetectLanguageRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDetectLanguageSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDetectLanguageSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsDetectLanguageSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsDetectLanguageRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->detectLanguageRequest = new DetectLanguageRequest();
    $request->detectLanguageRequest->content = 'est';
    $request->detectLanguageRequest->labels = [
        'explicabo' => 'deserunt',
        'distinctio' => 'quibusdam',
        'labore' => 'modi',
        'qui' => 'aliquid',
    ];
    $request->detectLanguageRequest->mimeType = 'cupiditate';
    $request->detectLanguageRequest->model = 'quos';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'assumenda';
    $request->fields = 'ipsam';
    $request->key = 'alias';
    $request->oauthToken = 'fugit';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new TranslateProjectsLocationsDetectLanguageSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsDetectLanguageSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsDetectLanguage($request, $requestSecurity);

    if ($response->detectLanguageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsGetSupportedLanguages

Returns a list of supported languages for translation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGetSupportedLanguagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGetSupportedLanguagesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGetSupportedLanguagesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsGetSupportedLanguagesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->displayLanguageCode = 'non';
    $request->fields = 'eligendi';
    $request->key = 'sint';
    $request->model = 'aliquid';
    $request->oauthToken = 'provident';
    $request->parent = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new TranslateProjectsLocationsGetSupportedLanguagesSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsGetSupportedLanguages($request, $requestSecurity);

    if ($response->supportedLanguages !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsGlossariesCreate

Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlossaryInput;
use \OpenAPI\OpenAPI\Models\Shared\GlossaryInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodesSet;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodePair;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsGlossariesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->glossaryInput = new GlossaryInput();
    $request->glossaryInput->displayName = 'a';
    $request->glossaryInput->inputConfig = new GlossaryInputConfig();
    $request->glossaryInput->inputConfig->gcsSource = new GcsSource();
    $request->glossaryInput->inputConfig->gcsSource->inputUri = 'dolorum';
    $request->glossaryInput->languageCodesSet = new LanguageCodesSet();
    $request->glossaryInput->languageCodesSet->languageCodes = [
        'in',
        'illum',
    ];
    $request->glossaryInput->languagePair = new LanguageCodePair();
    $request->glossaryInput->languagePair->sourceLanguageCode = 'maiores';
    $request->glossaryInput->languagePair->targetLanguageCode = 'rerum';
    $request->glossaryInput->name = 'Valerie Runolfsson';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'non';
    $request->key = 'occaecati';
    $request->oauthToken = 'enim';
    $request->parent = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new TranslateProjectsLocationsGlossariesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsGlossariesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsGlossariesGlossaryEntriesCreate

Creates a glossary entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlossaryEntry;
use \OpenAPI\OpenAPI\Models\Shared\GlossaryTermsPair;
use \OpenAPI\OpenAPI\Models\Shared\GlossaryTerm;
use \OpenAPI\OpenAPI\Models\Shared\GlossaryTermsSet;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->glossaryEntry = new GlossaryEntry();
    $request->glossaryEntry->description = 'id';
    $request->glossaryEntry->name = 'Jaime Will';
    $request->glossaryEntry->termsPair = new GlossaryTermsPair();
    $request->glossaryEntry->termsPair->sourceTerm = new GlossaryTerm();
    $request->glossaryEntry->termsPair->sourceTerm->languageCode = 'nisi';
    $request->glossaryEntry->termsPair->sourceTerm->text = 'vel';
    $request->glossaryEntry->termsPair->targetTerm = new GlossaryTerm();
    $request->glossaryEntry->termsPair->targetTerm->languageCode = 'natus';
    $request->glossaryEntry->termsPair->targetTerm->text = 'omnis';
    $request->glossaryEntry->termsSet = new GlossaryTermsSet();
    $request->glossaryEntry->termsSet->terms = [
        new GlossaryTerm(),
        new GlossaryTerm(),
    ];
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'distinctio';
    $request->key = 'id';
    $request->oauthToken = 'labore';
    $request->parent = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsGlossariesGlossaryEntriesCreate($request, $requestSecurity);

    if ($response->glossaryEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsGlossariesGlossaryEntriesList

List the entries for the glossary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->fields = 'magnam';
    $request->key = 'et';
    $request->oauthToken = 'excepturi';
    $request->pageSize = 354047;
    $request->pageToken = 'provident';
    $request->parent = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsGlossariesGlossaryEntriesList($request, $requestSecurity);

    if ($response->listGlossaryEntriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsGlossariesGlossaryEntriesPatch

Updates a glossary entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlossaryEntry;
use \OpenAPI\OpenAPI\Models\Shared\GlossaryTermsPair;
use \OpenAPI\OpenAPI\Models\Shared\GlossaryTerm;
use \OpenAPI\OpenAPI\Models\Shared\GlossaryTermsSet;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->glossaryEntry = new GlossaryEntry();
    $request->glossaryEntry->description = 'mollitia';
    $request->glossaryEntry->name = 'Natalie Ernser';
    $request->glossaryEntry->termsPair = new GlossaryTermsPair();
    $request->glossaryEntry->termsPair->sourceTerm = new GlossaryTerm();
    $request->glossaryEntry->termsPair->sourceTerm->languageCode = 'nemo';
    $request->glossaryEntry->termsPair->sourceTerm->text = 'quasi';
    $request->glossaryEntry->termsPair->targetTerm = new GlossaryTerm();
    $request->glossaryEntry->termsPair->targetTerm->languageCode = 'iure';
    $request->glossaryEntry->termsPair->targetTerm->text = 'doloribus';
    $request->glossaryEntry->termsSet = new GlossaryTermsSet();
    $request->glossaryEntry->termsSet->terms = [
        new GlossaryTerm(),
        new GlossaryTerm(),
        new GlossaryTerm(),
        new GlossaryTerm(),
    ];
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'facilis';
    $request->key = 'in';
    $request->name = 'Diane VonRueden';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->updateMask = 'quibusdam';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsGlossariesGlossaryEntriesPatch($request, $requestSecurity);

    if ($response->glossaryEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsGlossariesList

Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsGlossariesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsGlossariesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'natus';
    $request->filter = 'magni';
    $request->key = 'sunt';
    $request->oauthToken = 'quo';
    $request->pageSize = 848009;
    $request->pageToken = 'pariatur';
    $request->parent = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new TranslateProjectsLocationsGlossariesListSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsGlossariesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsGlossariesList($request, $requestSecurity);

    if ($response->listGlossariesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'quidem';
    $request->filter = 'ipsam';
    $request->key = 'voluptate';
    $request->name = 'Candice Beatty';
    $request->oauthToken = 'voluptatibus';
    $request->pageSize = 16627;
    $request->pageToken = 'fugiat';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new TranslateProjectsLocationsListSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsModelsCreate

Creates a Model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsModelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsModelsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsModelsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsModelsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsModelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->modelInput = new ModelInput();
    $request->modelInput->dataset = 'hic';
    $request->modelInput->displayName = 'libero';
    $request->modelInput->name = 'Ernest Hayes';
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nesciunt';
    $request->fields = 'eos';
    $request->key = 'perferendis';
    $request->oauthToken = 'dolores';
    $request->parent = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new TranslateProjectsLocationsModelsCreateSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsModelsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsModelsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsModelsList

Lists models.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsModelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsModelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsModelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsModelsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsModelsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->fields = 'facilis';
    $request->filter = 'perspiciatis';
    $request->key = 'voluptatem';
    $request->oauthToken = 'porro';
    $request->pageSize = 164694;
    $request->pageToken = 'blanditiis';
    $request->parent = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new TranslateProjectsLocationsModelsListSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsModelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsModelsList($request, $requestSecurity);

    if ($response->listModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsCancelSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsCancelSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsCancelSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'earum' => 'modi',
        'iste' => 'dolorum',
        'deleniti' => 'pariatur',
        'provident' => 'nobis',
    ];
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->fields = 'quos';
    $request->key = 'aliquid';
    $request->name = 'Dawn Fadel';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new TranslateProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsOperationsCancelSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'numquam';
    $request->key = 'veritatis';
    $request->name = 'Angela Kerluke';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new TranslateProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsOperationsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->fields = 'fugiat';
    $request->key = 'ab';
    $request->name = 'Omar Kris';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new TranslateProjectsLocationsOperationsGetSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptate';
    $request->fields = 'id';
    $request->filter = 'saepe';
    $request->key = 'eius';
    $request->name = 'Lisa Fay';
    $request->oauthToken = 'ad';
    $request->pageSize = 904425;
    $request->pageToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new TranslateProjectsLocationsOperationsListSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsOperationsWait

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsWaitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WaitOperationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsWaitSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsWaitSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsOperationsWaitSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsOperationsWaitRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->waitOperationRequest = new WaitOperationRequest();
    $request->waitOperationRequest->timeout = 'totam';
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'quaerat';
    $request->key = 'tempora';
    $request->name = 'Bernadette Torp';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new TranslateProjectsLocationsOperationsWaitSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsOperationsWaitSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsOperationsWait($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsTranslateDocument

Translates documents in synchronous mode.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsTranslateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TranslateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\DocumentOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\TranslateTextGlossaryConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsTranslateDocumentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsTranslateDocumentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsTranslateDocumentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsTranslateDocumentRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->translateDocumentRequest = new TranslateDocumentRequest();
    $request->translateDocumentRequest->customizedAttribution = 'quisquam';
    $request->translateDocumentRequest->documentInputConfig = new DocumentInputConfig();
    $request->translateDocumentRequest->documentInputConfig->content = 'tenetur';
    $request->translateDocumentRequest->documentInputConfig->gcsSource = new GcsSource();
    $request->translateDocumentRequest->documentInputConfig->gcsSource->inputUri = 'amet';
    $request->translateDocumentRequest->documentInputConfig->mimeType = 'tempore';
    $request->translateDocumentRequest->documentOutputConfig = new DocumentOutputConfig();
    $request->translateDocumentRequest->documentOutputConfig->gcsDestination = new GcsDestination();
    $request->translateDocumentRequest->documentOutputConfig->gcsDestination->outputUriPrefix = 'accusamus';
    $request->translateDocumentRequest->documentOutputConfig->mimeType = 'numquam';
    $request->translateDocumentRequest->enableRotationCorrection = false;
    $request->translateDocumentRequest->enableShadowRemovalNativePdf = false;
    $request->translateDocumentRequest->glossaryConfig = new TranslateTextGlossaryConfig();
    $request->translateDocumentRequest->glossaryConfig->glossary = 'enim';
    $request->translateDocumentRequest->glossaryConfig->ignoreCase = false;
    $request->translateDocumentRequest->isTranslateNativePdfOnly = false;
    $request->translateDocumentRequest->labels = [
        'sapiente' => 'totam',
    ];
    $request->translateDocumentRequest->model = 'nihil';
    $request->translateDocumentRequest->sourceLanguageCode = 'sit';
    $request->translateDocumentRequest->targetLanguageCode = 'expedita';
    $request->accessToken = 'neque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'libero';
    $request->key = 'voluptas';
    $request->oauthToken = 'deserunt';
    $request->parent = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new TranslateProjectsLocationsTranslateDocumentSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsTranslateDocumentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsTranslateDocument($request, $requestSecurity);

    if ($response->translateDocumentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateProjectsLocationsTranslateText

Translates input text and returns translated text.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsTranslateTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TranslateTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\TranslateTextGlossaryConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsTranslateTextSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsTranslateTextSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TranslateProjectsLocationsTranslateTextSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateProjectsLocationsTranslateTextRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->translateTextRequest = new TranslateTextRequest();
    $request->translateTextRequest->contents = [
        'pariatur',
        'soluta',
        'dicta',
        'laborum',
    ];
    $request->translateTextRequest->glossaryConfig = new TranslateTextGlossaryConfig();
    $request->translateTextRequest->glossaryConfig->glossary = 'totam';
    $request->translateTextRequest->glossaryConfig->ignoreCase = false;
    $request->translateTextRequest->labels = [
        'aspernatur' => 'dolores',
        'distinctio' => 'facilis',
    ];
    $request->translateTextRequest->mimeType = 'aliquid';
    $request->translateTextRequest->model = 'quam';
    $request->translateTextRequest->sourceLanguageCode = 'molestias';
    $request->translateTextRequest->targetLanguageCode = 'temporibus';
    $request->accessToken = 'qui';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'magni';
    $request->key = 'odio';
    $request->oauthToken = 'sunt';
    $request->parent = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'voluptatem';

    $requestSecurity = new TranslateProjectsLocationsTranslateTextSecurity();
    $requestSecurity->option1 = new TranslateProjectsLocationsTranslateTextSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->translateProjectsLocationsTranslateText($request, $requestSecurity);

    if ($response->translateTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
