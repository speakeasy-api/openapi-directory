# typeProviders

### Available Operations

* [deploymentmanagerTypeProvidersDelete](#deploymentmanagertypeprovidersdelete) - Deletes a type provider.
* [deploymentmanagerTypeProvidersGet](#deploymentmanagertypeprovidersget) - Gets information about a specific type provider.
* [deploymentmanagerTypeProvidersGetType](#deploymentmanagertypeprovidersgettype) - Gets a type info for a type provided by a TypeProvider.
* [deploymentmanagerTypeProvidersInsert](#deploymentmanagertypeprovidersinsert) - Creates a type provider.
* [deploymentmanagerTypeProvidersList](#deploymentmanagertypeproviderslist) - Lists all resource type providers for Deployment Manager.
* [deploymentmanagerTypeProvidersListTypes](#deploymentmanagertypeproviderslisttypes) - Lists all the type info for a TypeProvider.
* [deploymentmanagerTypeProvidersPatch](#deploymentmanagertypeproviderspatch) - Patches a type provider.
* [deploymentmanagerTypeProvidersUpdate](#deploymentmanagertypeprovidersupdate) - Updates a type provider.

## deploymentmanagerTypeProvidersDelete

Deletes a type provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerTypeProvidersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'nostrum';
    $request->key = 'sapiente';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->project = 'saepe';
    $request->quotaUser = 'ea';
    $request->typeProvider = 'impedit';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'veniam';

    $requestSecurity = new DeploymentmanagerTypeProvidersDeleteSecurity();
    $requestSecurity->option1 = new DeploymentmanagerTypeProvidersDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->typeProviders->deploymentmanagerTypeProvidersDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerTypeProvidersGet

Gets information about a specific type provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerTypeProvidersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ea';
    $request->fields = 'quo';
    $request->key = 'consectetur';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->quotaUser = 'minima';
    $request->typeProvider = 'eaque';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new DeploymentmanagerTypeProvidersGetSecurity();
    $requestSecurity->option1 = new DeploymentmanagerTypeProvidersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->typeProviders->deploymentmanagerTypeProvidersGet($request, $requestSecurity);

    if ($response->typeProvider !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerTypeProvidersGetType

Gets a type info for a type provided by a TypeProvider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersGetTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersGetTypeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersGetTypeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersGetTypeSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersGetTypeSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersGetTypeSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerTypeProvidersGetTypeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'impedit';
    $request->fields = 'aliquam';
    $request->key = 'fugit';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->project = 'inventore';
    $request->quotaUser = 'non';
    $request->type = 'et';
    $request->typeProvider = 'dolorum';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new DeploymentmanagerTypeProvidersGetTypeSecurity();
    $requestSecurity->option1 = new DeploymentmanagerTypeProvidersGetTypeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->typeProviders->deploymentmanagerTypeProvidersGetType($request, $requestSecurity);

    if ($response->typeInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerTypeProvidersInsert

Creates a type provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypeProvider;
use \OpenAPI\OpenAPI\Models\Shared\CollectionOverride;
use \OpenAPI\OpenAPI\Models\Shared\Options;
use \OpenAPI\OpenAPI\Models\Shared\AsyncOptions;
use \OpenAPI\OpenAPI\Models\Shared\PollingOptions;
use \OpenAPI\OpenAPI\Models\Shared\Diagnostic;
use \OpenAPI\OpenAPI\Models\Shared\DiagnosticLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputMapping;
use \OpenAPI\OpenAPI\Models\Shared\InputMappingLocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidationOptions;
use \OpenAPI\OpenAPI\Models\Shared\ValidationOptionsSchemaValidationEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidationOptionsUndeclaredPropertiesEnum;
use \OpenAPI\OpenAPI\Models\Shared\Credential;
use \OpenAPI\OpenAPI\Models\Shared\BasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\TypeProviderLabelEntry;
use \OpenAPI\OpenAPI\Models\Shared\Operation;
use \OpenAPI\OpenAPI\Models\Shared\OperationError;
use \OpenAPI\OpenAPI\Models\Shared\OperationErrorErrors;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarnings;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerTypeProvidersInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->typeProvider = new TypeProvider();
    $request->typeProvider->collectionOverrides = [
        new CollectionOverride(),
        new CollectionOverride(),
    ];
    $request->typeProvider->credential = new Credential();
    $request->typeProvider->credential->basicAuth = new BasicAuth();
    $request->typeProvider->credential->basicAuth->password = 'autem';
    $request->typeProvider->credential->basicAuth->user = 'nobis';
    $request->typeProvider->credential->serviceAccount = new ServiceAccount();
    $request->typeProvider->credential->serviceAccount->email = 'Richard_Stoltenberg@yahoo.com';
    $request->typeProvider->credential->useProjectDefault = false;
    $request->typeProvider->customCertificateAuthorityRoots = [
        'tempora',
    ];
    $request->typeProvider->description = 'numquam';
    $request->typeProvider->descriptorUrl = 'explicabo';
    $request->typeProvider->id = 'provident';
    $request->typeProvider->insertTime = 'ipsa';
    $request->typeProvider->labels = [
        new TypeProviderLabelEntry(),
        new TypeProviderLabelEntry(),
    ];
    $request->typeProvider->name = 'Viola Gibson';
    $request->typeProvider->operation = new Operation();
    $request->typeProvider->operation->clientOperationId = 'rem';
    $request->typeProvider->operation->creationTimestamp = 'fuga';
    $request->typeProvider->operation->description = 'reprehenderit';
    $request->typeProvider->operation->endTime = 'quidem';
    $request->typeProvider->operation->error = new OperationError();
    $request->typeProvider->operation->error->errors = [
        new OperationErrorErrors(),
        new OperationErrorErrors(),
        new OperationErrorErrors(),
        new OperationErrorErrors(),
    ];
    $request->typeProvider->operation->httpErrorMessage = 'ut';
    $request->typeProvider->operation->httpErrorStatusCode = 433439;
    $request->typeProvider->operation->id = 'suscipit';
    $request->typeProvider->operation->insertTime = 'assumenda';
    $request->typeProvider->operation->kind = 'eos';
    $request->typeProvider->operation->name = 'Miss Devin Bogan';
    $request->typeProvider->operation->operationGroupId = 'neque';
    $request->typeProvider->operation->operationType = 'quo';
    $request->typeProvider->operation->progress = 847276;
    $request->typeProvider->operation->region = 'quo';
    $request->typeProvider->operation->selfLink = 'fuga';
    $request->typeProvider->operation->startTime = 'eius';
    $request->typeProvider->operation->status = OperationStatusEnum::PENDING;
    $request->typeProvider->operation->statusMessage = 'voluptas';
    $request->typeProvider->operation->targetId = 'ab';
    $request->typeProvider->operation->targetLink = 'cupiditate';
    $request->typeProvider->operation->user = 'consequatur';
    $request->typeProvider->operation->warnings = [
        new OperationWarnings(),
        new OperationWarnings(),
    ];
    $request->typeProvider->operation->zone = 'debitis';
    $request->typeProvider->options = new Options();
    $request->typeProvider->options->asyncOptions = [
        new AsyncOptions(),
        new AsyncOptions(),
    ];
    $request->typeProvider->options->inputMappings = [
        new InputMapping(),
    ];
    $request->typeProvider->options->validationOptions = new ValidationOptions();
    $request->typeProvider->options->validationOptions->schemaValidation = ValidationOptionsSchemaValidationEnum::UNKNOWN;
    $request->typeProvider->options->validationOptions->undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum::IGNORE_WITH_WARNINGS;
    $request->typeProvider->options->virtualProperties = 'esse';
    $request->typeProvider->selfLink = 'recusandae';
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'dignissimos';
    $request->key = 'inventore';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->project = 'totam';
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new DeploymentmanagerTypeProvidersInsertSecurity();
    $requestSecurity->option1 = new DeploymentmanagerTypeProvidersInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->typeProviders->deploymentmanagerTypeProvidersInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerTypeProvidersList

Lists all resource type providers for Deployment Manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerTypeProvidersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'deserunt';
    $request->filter = 'molestiae';
    $request->key = 'accusantium';
    $request->maxResults = 783648;
    $request->oauthToken = 'eum';
    $request->orderBy = 'quas';
    $request->pageToken = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'consequuntur';
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new DeploymentmanagerTypeProvidersListSecurity();
    $requestSecurity->option1 = new DeploymentmanagerTypeProvidersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->typeProviders->deploymentmanagerTypeProvidersList($request, $requestSecurity);

    if ($response->typeProvidersListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerTypeProvidersListTypes

Lists all the type info for a TypeProvider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersListTypesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersListTypesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersListTypesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersListTypesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersListTypesSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersListTypesSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerTypeProvidersListTypesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'minima';
    $request->filter = 'nisi';
    $request->key = 'fugit';
    $request->maxResults = 956406;
    $request->oauthToken = 'consequuntur';
    $request->orderBy = 'ratione';
    $request->pageToken = 'explicabo';
    $request->prettyPrint = false;
    $request->project = 'saepe';
    $request->quotaUser = 'occaecati';
    $request->typeProvider = 'atque';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new DeploymentmanagerTypeProvidersListTypesSecurity();
    $requestSecurity->option1 = new DeploymentmanagerTypeProvidersListTypesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->typeProviders->deploymentmanagerTypeProvidersListTypes($request, $requestSecurity);

    if ($response->typeProvidersListTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerTypeProvidersPatch

Patches a type provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypeProvider;
use \OpenAPI\OpenAPI\Models\Shared\CollectionOverride;
use \OpenAPI\OpenAPI\Models\Shared\Options;
use \OpenAPI\OpenAPI\Models\Shared\AsyncOptions;
use \OpenAPI\OpenAPI\Models\Shared\PollingOptions;
use \OpenAPI\OpenAPI\Models\Shared\Diagnostic;
use \OpenAPI\OpenAPI\Models\Shared\DiagnosticLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputMapping;
use \OpenAPI\OpenAPI\Models\Shared\InputMappingLocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidationOptions;
use \OpenAPI\OpenAPI\Models\Shared\ValidationOptionsSchemaValidationEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidationOptionsUndeclaredPropertiesEnum;
use \OpenAPI\OpenAPI\Models\Shared\Credential;
use \OpenAPI\OpenAPI\Models\Shared\BasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\TypeProviderLabelEntry;
use \OpenAPI\OpenAPI\Models\Shared\Operation;
use \OpenAPI\OpenAPI\Models\Shared\OperationError;
use \OpenAPI\OpenAPI\Models\Shared\OperationErrorErrors;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarnings;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerTypeProvidersPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->typeProvider1 = new TypeProvider();
    $request->typeProvider1->collectionOverrides = [
        new CollectionOverride(),
        new CollectionOverride(),
        new CollectionOverride(),
        new CollectionOverride(),
    ];
    $request->typeProvider1->credential = new Credential();
    $request->typeProvider1->credential->basicAuth = new BasicAuth();
    $request->typeProvider1->credential->basicAuth->password = 'veritatis';
    $request->typeProvider1->credential->basicAuth->user = 'esse';
    $request->typeProvider1->credential->serviceAccount = new ServiceAccount();
    $request->typeProvider1->credential->serviceAccount->email = 'Modesta.Terry@hotmail.com';
    $request->typeProvider1->credential->useProjectDefault = false;
    $request->typeProvider1->customCertificateAuthorityRoots = [
        'vel',
        'harum',
        'molestiae',
        'rerum',
    ];
    $request->typeProvider1->description = 'occaecati';
    $request->typeProvider1->descriptorUrl = 'minima';
    $request->typeProvider1->id = 'distinctio';
    $request->typeProvider1->insertTime = 'eligendi';
    $request->typeProvider1->labels = [
        new TypeProviderLabelEntry(),
    ];
    $request->typeProvider1->name = 'Randolph Fisher';
    $request->typeProvider1->operation = new Operation();
    $request->typeProvider1->operation->clientOperationId = 'consequatur';
    $request->typeProvider1->operation->creationTimestamp = 'minus';
    $request->typeProvider1->operation->description = 'quaerat';
    $request->typeProvider1->operation->endTime = 'sapiente';
    $request->typeProvider1->operation->error = new OperationError();
    $request->typeProvider1->operation->error->errors = [
        new OperationErrorErrors(),
    ];
    $request->typeProvider1->operation->httpErrorMessage = 'esse';
    $request->typeProvider1->operation->httpErrorStatusCode = 503427;
    $request->typeProvider1->operation->id = 'provident';
    $request->typeProvider1->operation->insertTime = 'a';
    $request->typeProvider1->operation->kind = 'nulla';
    $request->typeProvider1->operation->name = 'Cory Boyle';
    $request->typeProvider1->operation->operationGroupId = 'sint';
    $request->typeProvider1->operation->operationType = 'pariatur';
    $request->typeProvider1->operation->progress = 820767;
    $request->typeProvider1->operation->region = 'quia';
    $request->typeProvider1->operation->selfLink = 'eveniet';
    $request->typeProvider1->operation->startTime = 'asperiores';
    $request->typeProvider1->operation->status = OperationStatusEnum::DONE;
    $request->typeProvider1->operation->statusMessage = 'veritatis';
    $request->typeProvider1->operation->targetId = 'consequuntur';
    $request->typeProvider1->operation->targetLink = 'quasi';
    $request->typeProvider1->operation->user = 'similique';
    $request->typeProvider1->operation->warnings = [
        new OperationWarnings(),
        new OperationWarnings(),
        new OperationWarnings(),
    ];
    $request->typeProvider1->operation->zone = 'aliquid';
    $request->typeProvider1->options = new Options();
    $request->typeProvider1->options->asyncOptions = [
        new AsyncOptions(),
        new AsyncOptions(),
        new AsyncOptions(),
        new AsyncOptions(),
    ];
    $request->typeProvider1->options->inputMappings = [
        new InputMapping(),
    ];
    $request->typeProvider1->options->validationOptions = new ValidationOptions();
    $request->typeProvider1->options->validationOptions->schemaValidation = ValidationOptionsSchemaValidationEnum::FAIL;
    $request->typeProvider1->options->validationOptions->undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum::IGNORE;
    $request->typeProvider1->options->virtualProperties = 'in';
    $request->typeProvider1->selfLink = 'eius';
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->fields = 'accusantium';
    $request->key = 'aliquam';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'ullam';
    $request->typeProviderPathParameter = 'reprehenderit';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new DeploymentmanagerTypeProvidersPatchSecurity();
    $requestSecurity->option1 = new DeploymentmanagerTypeProvidersPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->typeProviders->deploymentmanagerTypeProvidersPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerTypeProvidersUpdate

Updates a type provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypeProvider;
use \OpenAPI\OpenAPI\Models\Shared\CollectionOverride;
use \OpenAPI\OpenAPI\Models\Shared\Options;
use \OpenAPI\OpenAPI\Models\Shared\AsyncOptions;
use \OpenAPI\OpenAPI\Models\Shared\PollingOptions;
use \OpenAPI\OpenAPI\Models\Shared\Diagnostic;
use \OpenAPI\OpenAPI\Models\Shared\DiagnosticLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputMapping;
use \OpenAPI\OpenAPI\Models\Shared\InputMappingLocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidationOptions;
use \OpenAPI\OpenAPI\Models\Shared\ValidationOptionsSchemaValidationEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidationOptionsUndeclaredPropertiesEnum;
use \OpenAPI\OpenAPI\Models\Shared\Credential;
use \OpenAPI\OpenAPI\Models\Shared\BasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\TypeProviderLabelEntry;
use \OpenAPI\OpenAPI\Models\Shared\Operation;
use \OpenAPI\OpenAPI\Models\Shared\OperationError;
use \OpenAPI\OpenAPI\Models\Shared\OperationErrorErrors;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarnings;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypeProvidersUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerTypeProvidersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->typeProvider1 = new TypeProvider();
    $request->typeProvider1->collectionOverrides = [
        new CollectionOverride(),
        new CollectionOverride(),
        new CollectionOverride(),
    ];
    $request->typeProvider1->credential = new Credential();
    $request->typeProvider1->credential->basicAuth = new BasicAuth();
    $request->typeProvider1->credential->basicAuth->password = 'qui';
    $request->typeProvider1->credential->basicAuth->user = 'quibusdam';
    $request->typeProvider1->credential->serviceAccount = new ServiceAccount();
    $request->typeProvider1->credential->serviceAccount->email = 'Kailyn.Ward60@yahoo.com';
    $request->typeProvider1->credential->useProjectDefault = false;
    $request->typeProvider1->customCertificateAuthorityRoots = [
        'quasi',
        'at',
        'et',
        'voluptate',
    ];
    $request->typeProvider1->description = 'ipsa';
    $request->typeProvider1->descriptorUrl = 'minima';
    $request->typeProvider1->id = 'veritatis';
    $request->typeProvider1->insertTime = 'consectetur';
    $request->typeProvider1->labels = [
        new TypeProviderLabelEntry(),
    ];
    $request->typeProvider1->name = 'Lionel Bartoletti IV';
    $request->typeProvider1->operation = new Operation();
    $request->typeProvider1->operation->clientOperationId = 'eum';
    $request->typeProvider1->operation->creationTimestamp = 'mollitia';
    $request->typeProvider1->operation->description = 'ab';
    $request->typeProvider1->operation->endTime = 'corrupti';
    $request->typeProvider1->operation->error = new OperationError();
    $request->typeProvider1->operation->error->errors = [
        new OperationErrorErrors(),
        new OperationErrorErrors(),
    ];
    $request->typeProvider1->operation->httpErrorMessage = 'voluptatem';
    $request->typeProvider1->operation->httpErrorStatusCode = 221161;
    $request->typeProvider1->operation->id = 'occaecati';
    $request->typeProvider1->operation->insertTime = 'numquam';
    $request->typeProvider1->operation->kind = 'impedit';
    $request->typeProvider1->operation->name = 'Loretta Anderson DVM';
    $request->typeProvider1->operation->operationGroupId = 'natus';
    $request->typeProvider1->operation->operationType = 'velit';
    $request->typeProvider1->operation->progress = 974257;
    $request->typeProvider1->operation->region = 'voluptas';
    $request->typeProvider1->operation->selfLink = 'asperiores';
    $request->typeProvider1->operation->startTime = 'aperiam';
    $request->typeProvider1->operation->status = OperationStatusEnum::RUNNING;
    $request->typeProvider1->operation->statusMessage = 'quaerat';
    $request->typeProvider1->operation->targetId = 'consequuntur';
    $request->typeProvider1->operation->targetLink = 'repellendus';
    $request->typeProvider1->operation->user = 'officia';
    $request->typeProvider1->operation->warnings = [
        new OperationWarnings(),
        new OperationWarnings(),
        new OperationWarnings(),
        new OperationWarnings(),
    ];
    $request->typeProvider1->operation->zone = 'dignissimos';
    $request->typeProvider1->options = new Options();
    $request->typeProvider1->options->asyncOptions = [
        new AsyncOptions(),
        new AsyncOptions(),
        new AsyncOptions(),
    ];
    $request->typeProvider1->options->inputMappings = [
        new InputMapping(),
        new InputMapping(),
        new InputMapping(),
        new InputMapping(),
    ];
    $request->typeProvider1->options->validationOptions = new ValidationOptions();
    $request->typeProvider1->options->validationOptions->schemaValidation = ValidationOptionsSchemaValidationEnum::IGNORE;
    $request->typeProvider1->options->validationOptions->undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum::UNKNOWN;
    $request->typeProvider1->options->virtualProperties = 'quaerat';
    $request->typeProvider1->selfLink = 'porro';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->fields = 'adipisci';
    $request->key = 'fuga';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->project = 'suscipit';
    $request->quotaUser = 'velit';
    $request->typeProviderPathParameter = 'culpa';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new DeploymentmanagerTypeProvidersUpdateSecurity();
    $requestSecurity->option1 = new DeploymentmanagerTypeProvidersUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->typeProviders->deploymentmanagerTypeProvidersUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
