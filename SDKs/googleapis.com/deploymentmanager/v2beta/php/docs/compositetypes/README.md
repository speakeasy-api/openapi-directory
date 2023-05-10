# compositeTypes

### Available Operations

* [deploymentmanagerCompositeTypesDelete](#deploymentmanagercompositetypesdelete) - Deletes a composite type.
* [deploymentmanagerCompositeTypesGet](#deploymentmanagercompositetypesget) - Gets information about a specific composite type.
* [deploymentmanagerCompositeTypesInsert](#deploymentmanagercompositetypesinsert) - Creates a composite type.
* [deploymentmanagerCompositeTypesList](#deploymentmanagercompositetypeslist) - Lists all composite types for Deployment Manager.
* [deploymentmanagerCompositeTypesPatch](#deploymentmanagercompositetypespatch) - Patches a composite type.
* [deploymentmanagerCompositeTypesUpdate](#deploymentmanagercompositetypesupdate) - Updates a composite type.

## deploymentmanagerCompositeTypesDelete

Deletes a composite type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerCompositeTypesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->compositeType = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->project = 'minus';
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new DeploymentmanagerCompositeTypesDeleteSecurity();
    $requestSecurity->option1 = new DeploymentmanagerCompositeTypesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->compositeTypes->deploymentmanagerCompositeTypesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerCompositeTypesGet

Gets information about a specific composite type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerCompositeTypesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'temporibus';
    $request->compositeType = 'ab';
    $request->fields = 'quis';
    $request->key = 'veritatis';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'perferendis';
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new DeploymentmanagerCompositeTypesGetSecurity();
    $requestSecurity->option1 = new DeploymentmanagerCompositeTypesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->compositeTypes->deploymentmanagerCompositeTypesGet($request, $requestSecurity);

    if ($response->compositeType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerCompositeTypesInsert

Creates a composite type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompositeType;
use \OpenAPI\OpenAPI\Models\Shared\CompositeTypeLabelEntry;
use \OpenAPI\OpenAPI\Models\Shared\Operation;
use \OpenAPI\OpenAPI\Models\Shared\OperationError;
use \OpenAPI\OpenAPI\Models\Shared\OperationErrorErrors;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarnings;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\CompositeTypeStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateContents;
use \OpenAPI\OpenAPI\Models\Shared\ImportFile;
use \OpenAPI\OpenAPI\Models\Shared\TemplateContentsInterpreterEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerCompositeTypesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->compositeType = new CompositeType();
    $request->compositeType->description = 'odit';
    $request->compositeType->id = 'at';
    $request->compositeType->insertTime = 'at';
    $request->compositeType->labels = [
        new CompositeTypeLabelEntry(),
        new CompositeTypeLabelEntry(),
        new CompositeTypeLabelEntry(),
        new CompositeTypeLabelEntry(),
    ];
    $request->compositeType->name = 'Bernadette Schmidt';
    $request->compositeType->operation = new Operation();
    $request->compositeType->operation->clientOperationId = 'porro';
    $request->compositeType->operation->creationTimestamp = 'dolorum';
    $request->compositeType->operation->description = 'dicta';
    $request->compositeType->operation->endTime = 'nam';
    $request->compositeType->operation->error = new OperationError();
    $request->compositeType->operation->error->errors = [
        new OperationErrorErrors(),
        new OperationErrorErrors(),
        new OperationErrorErrors(),
    ];
    $request->compositeType->operation->httpErrorMessage = 'occaecati';
    $request->compositeType->operation->httpErrorStatusCode = 143353;
    $request->compositeType->operation->id = 'deleniti';
    $request->compositeType->operation->insertTime = 'hic';
    $request->compositeType->operation->kind = 'optio';
    $request->compositeType->operation->name = 'Jack Johns';
    $request->compositeType->operation->operationGroupId = 'qui';
    $request->compositeType->operation->operationType = 'impedit';
    $request->compositeType->operation->progress = 736918;
    $request->compositeType->operation->region = 'esse';
    $request->compositeType->operation->selfLink = 'ipsum';
    $request->compositeType->operation->startTime = 'excepturi';
    $request->compositeType->operation->status = OperationStatusEnum::PENDING;
    $request->compositeType->operation->statusMessage = 'perferendis';
    $request->compositeType->operation->targetId = 'ad';
    $request->compositeType->operation->targetLink = 'natus';
    $request->compositeType->operation->user = 'sed';
    $request->compositeType->operation->warnings = [
        new OperationWarnings(),
        new OperationWarnings(),
        new OperationWarnings(),
    ];
    $request->compositeType->operation->zone = 'dolor';
    $request->compositeType->selfLink = 'natus';
    $request->compositeType->status = CompositeTypeStatusEnum::DEPRECATED;
    $request->compositeType->templateContents = new TemplateContents();
    $request->compositeType->templateContents->imports = [
        new ImportFile(),
        new ImportFile(),
        new ImportFile(),
        new ImportFile(),
    ];
    $request->compositeType->templateContents->interpreter = TemplateContentsInterpreterEnum::JINJA;
    $request->compositeType->templateContents->mainTemplate = 'fuga';
    $request->compositeType->templateContents->schema = 'in';
    $request->compositeType->templateContents->template = 'corporis';
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'quidem';
    $request->key = 'architecto';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->project = 'reiciendis';
    $request->quotaUser = 'est';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new DeploymentmanagerCompositeTypesInsertSecurity();
    $requestSecurity->option1 = new DeploymentmanagerCompositeTypesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->compositeTypes->deploymentmanagerCompositeTypesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerCompositeTypesList

Lists all composite types for Deployment Manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerCompositeTypesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'nobis';
    $request->filter = 'enim';
    $request->key = 'omnis';
    $request->maxResults = 363711;
    $request->oauthToken = 'minima';
    $request->orderBy = 'excepturi';
    $request->pageToken = 'accusantium';
    $request->prettyPrint = false;
    $request->project = 'iure';
    $request->quotaUser = 'culpa';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new DeploymentmanagerCompositeTypesListSecurity();
    $requestSecurity->option1 = new DeploymentmanagerCompositeTypesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->compositeTypes->deploymentmanagerCompositeTypesList($request, $requestSecurity);

    if ($response->compositeTypesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerCompositeTypesPatch

Patches a composite type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompositeType;
use \OpenAPI\OpenAPI\Models\Shared\CompositeTypeLabelEntry;
use \OpenAPI\OpenAPI\Models\Shared\Operation;
use \OpenAPI\OpenAPI\Models\Shared\OperationError;
use \OpenAPI\OpenAPI\Models\Shared\OperationErrorErrors;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarnings;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\CompositeTypeStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateContents;
use \OpenAPI\OpenAPI\Models\Shared\ImportFile;
use \OpenAPI\OpenAPI\Models\Shared\TemplateContentsInterpreterEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerCompositeTypesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->compositeType1 = new CompositeType();
    $request->compositeType1->description = 'mollitia';
    $request->compositeType1->id = 'dolorem';
    $request->compositeType1->insertTime = 'culpa';
    $request->compositeType1->labels = [
        new CompositeTypeLabelEntry(),
    ];
    $request->compositeType1->name = 'Shaun McCullough';
    $request->compositeType1->operation = new Operation();
    $request->compositeType1->operation->clientOperationId = 'quam';
    $request->compositeType1->operation->creationTimestamp = 'molestiae';
    $request->compositeType1->operation->description = 'velit';
    $request->compositeType1->operation->endTime = 'error';
    $request->compositeType1->operation->error = new OperationError();
    $request->compositeType1->operation->error->errors = [
        new OperationErrorErrors(),
    ];
    $request->compositeType1->operation->httpErrorMessage = 'quis';
    $request->compositeType1->operation->httpErrorStatusCode = 110375;
    $request->compositeType1->operation->id = 'laborum';
    $request->compositeType1->operation->insertTime = 'animi';
    $request->compositeType1->operation->kind = 'enim';
    $request->compositeType1->operation->name = 'Angelica Dietrich';
    $request->compositeType1->operation->operationGroupId = 'id';
    $request->compositeType1->operation->operationType = 'possimus';
    $request->compositeType1->operation->progress = 13571;
    $request->compositeType1->operation->region = 'quasi';
    $request->compositeType1->operation->selfLink = 'error';
    $request->compositeType1->operation->startTime = 'temporibus';
    $request->compositeType1->operation->status = OperationStatusEnum::DONE;
    $request->compositeType1->operation->statusMessage = 'quasi';
    $request->compositeType1->operation->targetId = 'reiciendis';
    $request->compositeType1->operation->targetLink = 'voluptatibus';
    $request->compositeType1->operation->user = 'vero';
    $request->compositeType1->operation->warnings = [
        new OperationWarnings(),
        new OperationWarnings(),
    ];
    $request->compositeType1->operation->zone = 'praesentium';
    $request->compositeType1->selfLink = 'voluptatibus';
    $request->compositeType1->status = CompositeTypeStatusEnum::UNKNOWN_STATUS;
    $request->compositeType1->templateContents = new TemplateContents();
    $request->compositeType1->templateContents->imports = [
        new ImportFile(),
        new ImportFile(),
        new ImportFile(),
    ];
    $request->compositeType1->templateContents->interpreter = TemplateContentsInterpreterEnum::PYTHON;
    $request->compositeType1->templateContents->mainTemplate = 'cum';
    $request->compositeType1->templateContents->schema = 'perferendis';
    $request->compositeType1->templateContents->template = 'doloremque';
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->compositeTypePathParameter = 'dicta';
    $request->fields = 'corporis';
    $request->key = 'dolore';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'harum';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new DeploymentmanagerCompositeTypesPatchSecurity();
    $requestSecurity->option1 = new DeploymentmanagerCompositeTypesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->compositeTypes->deploymentmanagerCompositeTypesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerCompositeTypesUpdate

Updates a composite type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompositeType;
use \OpenAPI\OpenAPI\Models\Shared\CompositeTypeLabelEntry;
use \OpenAPI\OpenAPI\Models\Shared\Operation;
use \OpenAPI\OpenAPI\Models\Shared\OperationError;
use \OpenAPI\OpenAPI\Models\Shared\OperationErrorErrors;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarnings;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\CompositeTypeStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateContents;
use \OpenAPI\OpenAPI\Models\Shared\ImportFile;
use \OpenAPI\OpenAPI\Models\Shared\TemplateContentsInterpreterEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerCompositeTypesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerCompositeTypesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->compositeType1 = new CompositeType();
    $request->compositeType1->description = 'repudiandae';
    $request->compositeType1->id = 'quae';
    $request->compositeType1->insertTime = 'ipsum';
    $request->compositeType1->labels = [
        new CompositeTypeLabelEntry(),
        new CompositeTypeLabelEntry(),
        new CompositeTypeLabelEntry(),
    ];
    $request->compositeType1->name = 'Andy Streich';
    $request->compositeType1->operation = new Operation();
    $request->compositeType1->operation->clientOperationId = 'rem';
    $request->compositeType1->operation->creationTimestamp = 'voluptates';
    $request->compositeType1->operation->description = 'quasi';
    $request->compositeType1->operation->endTime = 'repudiandae';
    $request->compositeType1->operation->error = new OperationError();
    $request->compositeType1->operation->error->errors = [
        new OperationErrorErrors(),
        new OperationErrorErrors(),
        new OperationErrorErrors(),
    ];
    $request->compositeType1->operation->httpErrorMessage = 'veritatis';
    $request->compositeType1->operation->httpErrorStatusCode = 929297;
    $request->compositeType1->operation->id = 'incidunt';
    $request->compositeType1->operation->insertTime = 'enim';
    $request->compositeType1->operation->kind = 'consequatur';
    $request->compositeType1->operation->name = 'Taylor Cole';
    $request->compositeType1->operation->operationGroupId = 'quibusdam';
    $request->compositeType1->operation->operationType = 'labore';
    $request->compositeType1->operation->progress = 264730;
    $request->compositeType1->operation->region = 'qui';
    $request->compositeType1->operation->selfLink = 'aliquid';
    $request->compositeType1->operation->startTime = 'cupiditate';
    $request->compositeType1->operation->status = OperationStatusEnum::RUNNING;
    $request->compositeType1->operation->statusMessage = 'perferendis';
    $request->compositeType1->operation->targetId = 'magni';
    $request->compositeType1->operation->targetLink = 'assumenda';
    $request->compositeType1->operation->user = 'ipsam';
    $request->compositeType1->operation->warnings = [
        new OperationWarnings(),
    ];
    $request->compositeType1->operation->zone = 'fugit';
    $request->compositeType1->selfLink = 'dolorum';
    $request->compositeType1->status = CompositeTypeStatusEnum::EXPERIMENTAL;
    $request->compositeType1->templateContents = new TemplateContents();
    $request->compositeType1->templateContents->imports = [
        new ImportFile(),
        new ImportFile(),
    ];
    $request->compositeType1->templateContents->interpreter = TemplateContentsInterpreterEnum::JINJA;
    $request->compositeType1->templateContents->mainTemplate = 'tempore';
    $request->compositeType1->templateContents->schema = 'labore';
    $request->compositeType1->templateContents->template = 'delectus';
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eligendi';
    $request->compositeTypePathParameter = 'sint';
    $request->fields = 'aliquid';
    $request->key = 'provident';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->quotaUser = 'officia';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new DeploymentmanagerCompositeTypesUpdateSecurity();
    $requestSecurity->option1 = new DeploymentmanagerCompositeTypesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->compositeTypes->deploymentmanagerCompositeTypesUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
