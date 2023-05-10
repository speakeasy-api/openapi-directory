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
use \OpenAPI\OpenAPI\Models\Operations\FirebasemlProjectsModelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelInput;
use \OpenAPI\OpenAPI\Models\Shared\ModelState;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\TfLiteModelInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasemlProjectsModelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasemlProjectsModelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->modelInput = new ModelInput();
    $request->modelInput->displayName = 'provident';
    $request->modelInput->name = 'Ellis Mitchell';
    $request->modelInput->state = new ModelState();
    $request->modelInput->state->published = false;
    $request->modelInput->state->validationError = new Status();
    $request->modelInput->state->validationError->code = 847252;
    $request->modelInput->state->validationError->details = [
        [
            'deserunt' => 'suscipit',
            'iure' => 'magnam',
            'debitis' => 'ipsa',
        ],
        [
            'tempora' => 'suscipit',
            'molestiae' => 'minus',
            'placeat' => 'voluptatum',
            'iusto' => 'excepturi',
        ],
    ];
    $request->modelInput->state->validationError->message = 'nisi';
    $request->modelInput->tags = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->modelInput->tfliteModel = new TfLiteModelInput();
    $request->modelInput->tfliteModel->automlModel = 'deserunt';
    $request->modelInput->tfliteModel->gcsTfliteUri = 'perferendis';
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'quo';
    $request->key = 'odit';
    $request->oauthToken = 'at';
    $request->parent = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new FirebasemlProjectsModelsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasemlProjectsModelsCreate($request, $requestSecurity);

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

* [firebasemlProjectsModelsCreate](docs/projects/README.md#firebasemlprojectsmodelscreate) - Creates a model in Firebase ML. The longrunning operation will eventually return a Model
* [firebasemlProjectsModelsDelete](docs/projects/README.md#firebasemlprojectsmodelsdelete) - Deletes a model
* [firebasemlProjectsModelsDownload](docs/projects/README.md#firebasemlprojectsmodelsdownload) - Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.
* [firebasemlProjectsModelsList](docs/projects/README.md#firebasemlprojectsmodelslist) - Lists the models
* [firebasemlProjectsModelsPatch](docs/projects/README.md#firebasemlprojectsmodelspatch) - Updates a model. The longrunning operation will eventually return a Model.
* [firebasemlProjectsOperationsGet](docs/projects/README.md#firebasemlprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
