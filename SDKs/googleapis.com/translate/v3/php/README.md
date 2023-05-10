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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [translateProjectsLocationsBatchTranslateDocument](docs/projects/README.md#translateprojectslocationsbatchtranslatedocument) - Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* [translateProjectsLocationsBatchTranslateText](docs/projects/README.md#translateprojectslocationsbatchtranslatetext) - Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* [translateProjectsLocationsDatasetsCreate](docs/projects/README.md#translateprojectslocationsdatasetscreate) - Creates a Dataset.
* [translateProjectsLocationsDatasetsExamplesList](docs/projects/README.md#translateprojectslocationsdatasetsexampleslist) - Lists sentence pairs in the dataset.
* [translateProjectsLocationsDatasetsExportData](docs/projects/README.md#translateprojectslocationsdatasetsexportdata) - Exports dataset's data to the provided output location.
* [translateProjectsLocationsDatasetsImportData](docs/projects/README.md#translateprojectslocationsdatasetsimportdata) - Import sentence pairs into translation Dataset.
* [translateProjectsLocationsDatasetsList](docs/projects/README.md#translateprojectslocationsdatasetslist) - Lists datasets.
* [translateProjectsLocationsDetectLanguage](docs/projects/README.md#translateprojectslocationsdetectlanguage) - Detects the language of text within a request.
* [translateProjectsLocationsGetSupportedLanguages](docs/projects/README.md#translateprojectslocationsgetsupportedlanguages) - Returns a list of supported languages for translation.
* [translateProjectsLocationsGlossariesCreate](docs/projects/README.md#translateprojectslocationsglossariescreate) - Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
* [translateProjectsLocationsGlossariesGlossaryEntriesCreate](docs/projects/README.md#translateprojectslocationsglossariesglossaryentriescreate) - Creates a glossary entry.
* [translateProjectsLocationsGlossariesGlossaryEntriesList](docs/projects/README.md#translateprojectslocationsglossariesglossaryentrieslist) - List the entries for the glossary.
* [translateProjectsLocationsGlossariesGlossaryEntriesPatch](docs/projects/README.md#translateprojectslocationsglossariesglossaryentriespatch) - Updates a glossary entry.
* [translateProjectsLocationsGlossariesList](docs/projects/README.md#translateprojectslocationsglossarieslist) - Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
* [translateProjectsLocationsList](docs/projects/README.md#translateprojectslocationslist) - Lists information about the supported locations for this service.
* [translateProjectsLocationsModelsCreate](docs/projects/README.md#translateprojectslocationsmodelscreate) - Creates a Model.
* [translateProjectsLocationsModelsList](docs/projects/README.md#translateprojectslocationsmodelslist) - Lists models.
* [translateProjectsLocationsOperationsCancel](docs/projects/README.md#translateprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [translateProjectsLocationsOperationsDelete](docs/projects/README.md#translateprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [translateProjectsLocationsOperationsGet](docs/projects/README.md#translateprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [translateProjectsLocationsOperationsList](docs/projects/README.md#translateprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [translateProjectsLocationsOperationsWait](docs/projects/README.md#translateprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [translateProjectsLocationsTranslateDocument](docs/projects/README.md#translateprojectslocationstranslatedocument) - Translates documents in synchronous mode.
* [translateProjectsLocationsTranslateText](docs/projects/README.md#translateprojectslocationstranslatetext) - Translates input text and returns translated text.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
