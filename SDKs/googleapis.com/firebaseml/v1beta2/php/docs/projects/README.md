# projects

### Available Operations

* [firebasemlProjectsModelsCreate](#firebasemlprojectsmodelscreate) - Creates a model in Firebase ML. The longrunning operation will eventually return a Model
* [firebasemlProjectsModelsDelete](#firebasemlprojectsmodelsdelete) - Deletes a model
* [firebasemlProjectsModelsDownload](#firebasemlprojectsmodelsdownload) - Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.
* [firebasemlProjectsModelsList](#firebasemlprojectsmodelslist) - Lists the models
* [firebasemlProjectsModelsPatch](#firebasemlprojectsmodelspatch) - Updates a model. The longrunning operation will eventually return a Model.
* [firebasemlProjectsOperationsGet](#firebasemlprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## firebasemlProjectsModelsCreate

Creates a model in Firebase ML. The longrunning operation will eventually return a Model

### Example Usage

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
    $request->modelInput->displayName = 'esse';
    $request->modelInput->name = 'Miss Lowell Parisian';
    $request->modelInput->state = new ModelState();
    $request->modelInput->state->published = false;
    $request->modelInput->state->validationError = new Status();
    $request->modelInput->state->validationError->code = 582020;
    $request->modelInput->state->validationError->details = [
        [
            'hic' => 'optio',
            'totam' => 'beatae',
            'commodi' => 'molestiae',
        ],
    ];
    $request->modelInput->state->validationError->message = 'modi';
    $request->modelInput->tags = [
        'impedit',
    ];
    $request->modelInput->tfliteModel = new TfLiteModelInput();
    $request->modelInput->tfliteModel->automlModel = 'cum';
    $request->modelInput->tfliteModel->gcsTfliteUri = 'esse';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'perferendis';
    $request->key = 'ad';
    $request->oauthToken = 'natus';
    $request->parent = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'natus';

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

## firebasemlProjectsModelsDelete

Deletes a model

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasemlProjectsModelsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasemlProjectsModelsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasemlProjectsModelsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->fields = 'in';
    $request->key = 'corporis';
    $request->name = 'Brad Turcotte Jr.';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new FirebasemlProjectsModelsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasemlProjectsModelsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasemlProjectsModelsDownload

Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasemlProjectsModelsDownloadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasemlProjectsModelsDownloadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'nobis';
    $request->key = 'enim';
    $request->name = 'Corey Hane III';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'architecto';

    $response = $sdk->projects->firebasemlProjectsModelsDownload($request);

    if ($response->downloadModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasemlProjectsModelsList

Lists the models

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasemlProjectsModelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasemlProjectsModelsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasemlProjectsModelsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'repellat';
    $request->filter = 'mollitia';
    $request->key = 'occaecati';
    $request->oauthToken = 'numquam';
    $request->pageSize = 414369;
    $request->pageToken = 'quam';
    $request->parent = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'quia';

    $requestSecurity = new FirebasemlProjectsModelsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasemlProjectsModelsList($request, $requestSecurity);

    if ($response->listModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasemlProjectsModelsPatch

Updates a model. The longrunning operation will eventually return a Model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasemlProjectsModelsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelInput;
use \OpenAPI\OpenAPI\Models\Shared\ModelState;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\TfLiteModelInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasemlProjectsModelsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasemlProjectsModelsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->modelInput = new ModelInput();
    $request->modelInput->displayName = 'vitae';
    $request->modelInput->name = 'Matt Hamill';
    $request->modelInput->state = new ModelState();
    $request->modelInput->state->published = false;
    $request->modelInput->state->validationError = new Status();
    $request->modelInput->state->validationError->code = 196582;
    $request->modelInput->state->validationError->details = [
        [
            'id' => 'possimus',
            'aut' => 'quasi',
        ],
        [
            'temporibus' => 'laborum',
            'quasi' => 'reiciendis',
            'voluptatibus' => 'vero',
        ],
        [
            'praesentium' => 'voluptatibus',
            'ipsa' => 'omnis',
        ],
        [
            'cum' => 'perferendis',
            'doloremque' => 'reprehenderit',
        ],
    ];
    $request->modelInput->state->validationError->message = 'ut';
    $request->modelInput->tags = [
        'dicta',
        'corporis',
        'dolore',
        'iusto',
    ];
    $request->modelInput->tfliteModel = new TfLiteModelInput();
    $request->modelInput->tfliteModel->automlModel = 'dicta';
    $request->modelInput->tfliteModel->gcsTfliteUri = 'harum';
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'commodi';
    $request->fields = 'repudiandae';
    $request->key = 'quae';
    $request->name = 'Alison Mann';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->updateMask = 'rem';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new FirebasemlProjectsModelsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasemlProjectsModelsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasemlProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasemlProjectsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasemlProjectsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasemlProjectsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'itaque';
    $request->fields = 'incidunt';
    $request->key = 'enim';
    $request->name = 'Monique Spinka';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new FirebasemlProjectsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasemlProjectsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
