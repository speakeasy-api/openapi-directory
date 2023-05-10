# projects

### Available Operations

* [translateProjectsLocationsBatchTranslateDocument](#translateprojectslocationsbatchtranslatedocument) - Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* [translateProjectsLocationsBatchTranslateText](#translateprojectslocationsbatchtranslatetext) - Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* [translateProjectsLocationsDetectLanguage](#translateprojectslocationsdetectlanguage) - Detects the language of text within a request.
* [translateProjectsLocationsGetSupportedLanguages](#translateprojectslocationsgetsupportedlanguages) - Returns a list of supported languages for translation.
* [translateProjectsLocationsGlossariesCreate](#translateprojectslocationsglossariescreate) - Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
* [translateProjectsLocationsGlossariesList](#translateprojectslocationsglossarieslist) - Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
* [translateProjectsLocationsList](#translateprojectslocationslist) - Lists information about the supported locations for this service.
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->detectLanguageRequest = new DetectLanguageRequest();
    $request->detectLanguageRequest->content = 'mollitia';
    $request->detectLanguageRequest->labels = [
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->detectLanguageRequest->mimeType = 'quia';
    $request->detectLanguageRequest->model = 'quis';
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'animi';
    $request->fields = 'enim';
    $request->key = 'odit';
    $request->oauthToken = 'quo';
    $request->parent = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'id';

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
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->displayLanguageCode = 'temporibus';
    $request->fields = 'laborum';
    $request->key = 'quasi';
    $request->model = 'reiciendis';
    $request->oauthToken = 'voluptatibus';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'voluptatibus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->glossaryInput = new GlossaryInput();
    $request->glossaryInput->inputConfig = new GlossaryInputConfig();
    $request->glossaryInput->inputConfig->gcsSource = new GcsSource();
    $request->glossaryInput->inputConfig->gcsSource->inputUri = 'omnis';
    $request->glossaryInput->languageCodesSet = new LanguageCodesSet();
    $request->glossaryInput->languageCodesSet->languageCodes = [
        'cum',
        'perferendis',
    ];
    $request->glossaryInput->languagePair = new LanguageCodePair();
    $request->glossaryInput->languagePair->sourceLanguageCode = 'doloremque';
    $request->glossaryInput->languagePair->targetLanguageCode = 'reprehenderit';
    $request->glossaryInput->name = 'Shawna Carter';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'commodi';
    $request->parent = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quidem';

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
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'praesentium';
    $request->filter = 'rem';
    $request->key = 'voluptates';
    $request->oauthToken = 'quasi';
    $request->pageSize = 921158;
    $request->pageToken = 'sint';
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'enim';

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
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'deserunt';
    $request->filter = 'distinctio';
    $request->key = 'quibusdam';
    $request->name = 'Pauline Deckow';
    $request->oauthToken = 'quos';
    $request->pageSize = 20107;
    $request->pageToken = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'alias';

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
        'excepturi' => 'tempora',
        'facilis' => 'tempore',
        'labore' => 'delectus',
    ];
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eligendi';
    $request->fields = 'sint';
    $request->key = 'aliquid';
    $request->name = 'Terence Marquardt';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'in';

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
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'rerum';
    $request->fields = 'dicta';
    $request->key = 'magnam';
    $request->name = 'Irving Jenkins';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'enim';

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
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->fields = 'nam';
    $request->key = 'id';
    $request->name = 'Jaime Will';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'omnis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'distinctio';
    $request->filter = 'id';
    $request->key = 'labore';
    $request->name = 'Laurie Mosciski';
    $request->oauthToken = 'vero';
    $request->pageSize = 135474;
    $request->pageToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'excepturi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->waitOperationRequest = new WaitOperationRequest();
    $request->waitOperationRequest->timeout = 'provident';
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'mollitia';
    $request->key = 'reiciendis';
    $request->name = 'Tommy Kemmer';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'iure';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->translateDocumentRequest = new TranslateDocumentRequest();
    $request->translateDocumentRequest->customizedAttribution = 'debitis';
    $request->translateDocumentRequest->documentInputConfig = new DocumentInputConfig();
    $request->translateDocumentRequest->documentInputConfig->content = 'eius';
    $request->translateDocumentRequest->documentInputConfig->gcsSource = new GcsSource();
    $request->translateDocumentRequest->documentInputConfig->gcsSource->inputUri = 'maxime';
    $request->translateDocumentRequest->documentInputConfig->mimeType = 'deleniti';
    $request->translateDocumentRequest->documentOutputConfig = new DocumentOutputConfig();
    $request->translateDocumentRequest->documentOutputConfig->gcsDestination = new GcsDestination();
    $request->translateDocumentRequest->documentOutputConfig->gcsDestination->outputUriPrefix = 'facilis';
    $request->translateDocumentRequest->documentOutputConfig->mimeType = 'in';
    $request->translateDocumentRequest->enableRotationCorrection = false;
    $request->translateDocumentRequest->enableShadowRemovalNativePdf = false;
    $request->translateDocumentRequest->glossaryConfig = new TranslateTextGlossaryConfig();
    $request->translateDocumentRequest->glossaryConfig->glossary = 'architecto';
    $request->translateDocumentRequest->glossaryConfig->ignoreCase = false;
    $request->translateDocumentRequest->isTranslateNativePdfOnly = false;
    $request->translateDocumentRequest->labels = [
        'repudiandae' => 'ullam',
    ];
    $request->translateDocumentRequest->model = 'expedita';
    $request->translateDocumentRequest->sourceLanguageCode = 'nihil';
    $request->translateDocumentRequest->targetLanguageCode = 'repellat';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'pariatur';
    $request->key = 'accusantium';
    $request->oauthToken = 'consequuntur';
    $request->parent = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'sunt';

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
        'maxime',
        'ea',
        'excepturi',
    ];
    $request->translateTextRequest->glossaryConfig = new TranslateTextGlossaryConfig();
    $request->translateTextRequest->glossaryConfig->glossary = 'odit';
    $request->translateTextRequest->glossaryConfig->ignoreCase = false;
    $request->translateTextRequest->labels = [
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->translateTextRequest->mimeType = 'ipsam';
    $request->translateTextRequest->model = 'voluptate';
    $request->translateTextRequest->sourceLanguageCode = 'autem';
    $request->translateTextRequest->targetLanguageCode = 'nam';
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nemo';
    $request->fields = 'voluptatibus';
    $request->key = 'perferendis';
    $request->oauthToken = 'fugiat';
    $request->parent = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'corporis';

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
