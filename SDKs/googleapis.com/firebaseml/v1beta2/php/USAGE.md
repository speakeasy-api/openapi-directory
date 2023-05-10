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