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
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eius';
    $request->fields = 'esse';
    $request->key = 'esse';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'reprehenderit';
    $request->typeProvider = 'quidem';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'ut';

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
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eos';
    $request->fields = 'praesentium';
    $request->key = 'quisquam';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->project = 'ipsa';
    $request->quotaUser = 'id';
    $request->typeProvider = 'quidem';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'quo';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->fields = 'eos';
    $request->key = 'voluptas';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->project = 'cupiditate';
    $request->quotaUser = 'consequatur';
    $request->type = 'tempora';
    $request->typeProvider = 'debitis';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'aspernatur';

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
use \OpenAPI\OpenAPI\Models\Shared\MethodMap;
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
        new CollectionOverride(),
        new CollectionOverride(),
    ];
    $request->typeProvider->credential = new Credential();
    $request->typeProvider->credential->basicAuth = new BasicAuth();
    $request->typeProvider->credential->basicAuth->password = 'esse';
    $request->typeProvider->credential->basicAuth->user = 'recusandae';
    $request->typeProvider->credential->serviceAccount = new ServiceAccount();
    $request->typeProvider->credential->serviceAccount->email = 'Micheal.Schmidt@gmail.com';
    $request->typeProvider->credential->useProjectDefault = false;
    $request->typeProvider->customCertificateAuthorityRoots = [
        'totam',
        'accusamus',
    ];
    $request->typeProvider->description = 'aliquam';
    $request->typeProvider->descriptorUrl = 'odio';
    $request->typeProvider->id = 'occaecati';
    $request->typeProvider->insertTime = 'commodi';
    $request->typeProvider->labels = [
        new TypeProviderLabelEntry(),
        new TypeProviderLabelEntry(),
        new TypeProviderLabelEntry(),
        new TypeProviderLabelEntry(),
    ];
    $request->typeProvider->name = 'Miss Rosie Krajcik';
    $request->typeProvider->operation = new Operation();
    $request->typeProvider->operation->clientOperationId = 'quas';
    $request->typeProvider->operation->creationTimestamp = 'praesentium';
    $request->typeProvider->operation->description = 'consequuntur';
    $request->typeProvider->operation->endTime = 'deleniti';
    $request->typeProvider->operation->error = new OperationError();
    $request->typeProvider->operation->error->errors = [
        new OperationErrorErrors(),
    ];
    $request->typeProvider->operation->httpErrorMessage = 'fuga';
    $request->typeProvider->operation->httpErrorStatusCode = 649463;
    $request->typeProvider->operation->id = 'incidunt';
    $request->typeProvider->operation->insertTime = 'atque';
    $request->typeProvider->operation->kind = 'explicabo';
    $request->typeProvider->operation->name = 'Sue Corkery';
    $request->typeProvider->operation->operationGroupId = 'ratione';
    $request->typeProvider->operation->operationType = 'explicabo';
    $request->typeProvider->operation->progress = 903984;
    $request->typeProvider->operation->region = 'occaecati';
    $request->typeProvider->operation->selfLink = 'atque';
    $request->typeProvider->operation->startTime = 'et';
    $request->typeProvider->operation->status = OperationStatusEnum::RUNNING;
    $request->typeProvider->operation->statusMessage = 'eveniet';
    $request->typeProvider->operation->targetId = 'accusamus';
    $request->typeProvider->operation->targetLink = 'veritatis';
    $request->typeProvider->operation->user = 'esse';
    $request->typeProvider->operation->warnings = [
        new OperationWarnings(),
        new OperationWarnings(),
        new OperationWarnings(),
        new OperationWarnings(),
    ];
    $request->typeProvider->operation->zone = 'nam';
    $request->typeProvider->options = new Options();
    $request->typeProvider->options->asyncOptions = [
        new AsyncOptions(),
        new AsyncOptions(),
        new AsyncOptions(),
        new AsyncOptions(),
    ];
    $request->typeProvider->options->inputMappings = [
        new InputMapping(),
        new InputMapping(),
    ];
    $request->typeProvider->options->nameProperty = 'quasi';
    $request->typeProvider->options->validationOptions = new ValidationOptions();
    $request->typeProvider->options->validationOptions->schemaValidation = ValidationOptionsSchemaValidationEnum::FAIL;
    $request->typeProvider->options->validationOptions->undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum::IGNORE;
    $request->typeProvider->selfLink = 'harum';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'occaecati';
    $request->fields = 'minima';
    $request->key = 'distinctio';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->project = 'sit';
    $request->quotaUser = 'culpa';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'adipisci';

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
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minus';
    $request->fields = 'quaerat';
    $request->filter = 'sapiente';
    $request->key = 'consectetur';
    $request->maxResults = 458139;
    $request->oauthToken = 'blanditiis';
    $request->orderBy = 'provident';
    $request->pageToken = 'a';
    $request->prettyPrint = false;
    $request->project = 'nulla';
    $request->quotaUser = 'quas';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'quasi';

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
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->fields = 'possimus';
    $request->filter = 'quia';
    $request->key = 'eveniet';
    $request->maxResults = 992430;
    $request->oauthToken = 'facere';
    $request->orderBy = 'veritatis';
    $request->pageToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->project = 'quasi';
    $request->quotaUser = 'similique';
    $request->typeProvider = 'culpa';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'tenetur';

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
use \OpenAPI\OpenAPI\Models\Shared\MethodMap;
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->typeProvider1 = new TypeProvider();
    $request->typeProvider1->collectionOverrides = [
        new CollectionOverride(),
        new CollectionOverride(),
        new CollectionOverride(),
        new CollectionOverride(),
    ];
    $request->typeProvider1->credential = new Credential();
    $request->typeProvider1->credential->basicAuth = new BasicAuth();
    $request->typeProvider1->credential->basicAuth->password = 'vel';
    $request->typeProvider1->credential->basicAuth->user = 'in';
    $request->typeProvider1->credential->serviceAccount = new ServiceAccount();
    $request->typeProvider1->credential->serviceAccount->email = 'Monique.Stanton30@gmail.com';
    $request->typeProvider1->credential->useProjectDefault = false;
    $request->typeProvider1->customCertificateAuthorityRoots = [
        'dicta',
        'ullam',
        'reprehenderit',
        'ullam',
    ];
    $request->typeProvider1->description = 'nisi';
    $request->typeProvider1->descriptorUrl = 'aut';
    $request->typeProvider1->id = 'voluptatum';
    $request->typeProvider1->insertTime = 'qui';
    $request->typeProvider1->labels = [
        new TypeProviderLabelEntry(),
        new TypeProviderLabelEntry(),
        new TypeProviderLabelEntry(),
        new TypeProviderLabelEntry(),
    ];
    $request->typeProvider1->name = 'Cassandra Ward V';
    $request->typeProvider1->operation = new Operation();
    $request->typeProvider1->operation->clientOperationId = 'tenetur';
    $request->typeProvider1->operation->creationTimestamp = 'quasi';
    $request->typeProvider1->operation->description = 'at';
    $request->typeProvider1->operation->endTime = 'et';
    $request->typeProvider1->operation->error = new OperationError();
    $request->typeProvider1->operation->error->errors = [
        new OperationErrorErrors(),
        new OperationErrorErrors(),
    ];
    $request->typeProvider1->operation->httpErrorMessage = 'ipsa';
    $request->typeProvider1->operation->httpErrorStatusCode = 326701;
    $request->typeProvider1->operation->id = 'veritatis';
    $request->typeProvider1->operation->insertTime = 'consectetur';
    $request->typeProvider1->operation->kind = 'adipisci';
    $request->typeProvider1->operation->name = 'Lionel Bartoletti IV';
    $request->typeProvider1->operation->operationGroupId = 'eum';
    $request->typeProvider1->operation->operationType = 'mollitia';
    $request->typeProvider1->operation->progress = 68074;
    $request->typeProvider1->operation->region = 'corrupti';
    $request->typeProvider1->operation->selfLink = 'non';
    $request->typeProvider1->operation->startTime = 'voluptatem';
    $request->typeProvider1->operation->status = OperationStatusEnum::PENDING;
    $request->typeProvider1->operation->statusMessage = 'occaecati';
    $request->typeProvider1->operation->targetId = 'numquam';
    $request->typeProvider1->operation->targetLink = 'impedit';
    $request->typeProvider1->operation->user = 'explicabo';
    $request->typeProvider1->operation->warnings = [
        new OperationWarnings(),
        new OperationWarnings(),
    ];
    $request->typeProvider1->operation->zone = 'aut';
    $request->typeProvider1->options = new Options();
    $request->typeProvider1->options->asyncOptions = [
        new AsyncOptions(),
        new AsyncOptions(),
    ];
    $request->typeProvider1->options->inputMappings = [
        new InputMapping(),
    ];
    $request->typeProvider1->options->nameProperty = 'maiores';
    $request->typeProvider1->options->validationOptions = new ValidationOptions();
    $request->typeProvider1->options->validationOptions->schemaValidation = ValidationOptionsSchemaValidationEnum::IGNORE_WITH_WARNINGS;
    $request->typeProvider1->options->validationOptions->undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum::INCLUDE;
    $request->typeProvider1->selfLink = 'voluptatibus';
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aperiam';
    $request->fields = 'ea';
    $request->key = 'quaerat';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->project = 'repellendus';
    $request->quotaUser = 'officia';
    $request->typeProviderPathParameter = 'maxime';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'officia';

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
use \OpenAPI\OpenAPI\Models\Shared\MethodMap;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->typeProvider1 = new TypeProvider();
    $request->typeProvider1->collectionOverrides = [
        new CollectionOverride(),
        new CollectionOverride(),
    ];
    $request->typeProvider1->credential = new Credential();
    $request->typeProvider1->credential->basicAuth = new BasicAuth();
    $request->typeProvider1->credential->basicAuth->password = 'quae';
    $request->typeProvider1->credential->basicAuth->user = 'quaerat';
    $request->typeProvider1->credential->serviceAccount = new ServiceAccount();
    $request->typeProvider1->credential->serviceAccount->email = 'Prince24@hotmail.com';
    $request->typeProvider1->credential->useProjectDefault = false;
    $request->typeProvider1->customCertificateAuthorityRoots = [
        'id',
        'suscipit',
        'velit',
    ];
    $request->typeProvider1->description = 'culpa';
    $request->typeProvider1->descriptorUrl = 'est';
    $request->typeProvider1->id = 'recusandae';
    $request->typeProvider1->insertTime = 'totam';
    $request->typeProvider1->labels = [
        new TypeProviderLabelEntry(),
        new TypeProviderLabelEntry(),
        new TypeProviderLabelEntry(),
        new TypeProviderLabelEntry(),
    ];
    $request->typeProvider1->name = 'Dora Luettgen';
    $request->typeProvider1->operation = new Operation();
    $request->typeProvider1->operation->clientOperationId = 'possimus';
    $request->typeProvider1->operation->creationTimestamp = 'facilis';
    $request->typeProvider1->operation->description = 'cum';
    $request->typeProvider1->operation->endTime = 'commodi';
    $request->typeProvider1->operation->error = new OperationError();
    $request->typeProvider1->operation->error->errors = [
        new OperationErrorErrors(),
        new OperationErrorErrors(),
    ];
    $request->typeProvider1->operation->httpErrorMessage = 'corporis';
    $request->typeProvider1->operation->httpErrorStatusCode = 968904;
    $request->typeProvider1->operation->id = 'assumenda';
    $request->typeProvider1->operation->insertTime = 'nemo';
    $request->typeProvider1->operation->kind = 'recusandae';
    $request->typeProvider1->operation->name = 'Kimberly Ritchie';
    $request->typeProvider1->operation->operationGroupId = 'exercitationem';
    $request->typeProvider1->operation->operationType = 'earum';
    $request->typeProvider1->operation->progress = 814967;
    $request->typeProvider1->operation->region = 'numquam';
    $request->typeProvider1->operation->selfLink = 'doloribus';
    $request->typeProvider1->operation->startTime = 'suscipit';
    $request->typeProvider1->operation->status = OperationStatusEnum::DONE;
    $request->typeProvider1->operation->statusMessage = 'quidem';
    $request->typeProvider1->operation->targetId = 'saepe';
    $request->typeProvider1->operation->targetLink = 'necessitatibus';
    $request->typeProvider1->operation->user = 'dolore';
    $request->typeProvider1->operation->warnings = [
        new OperationWarnings(),
    ];
    $request->typeProvider1->operation->zone = 'asperiores';
    $request->typeProvider1->options = new Options();
    $request->typeProvider1->options->asyncOptions = [
        new AsyncOptions(),
    ];
    $request->typeProvider1->options->inputMappings = [
        new InputMapping(),
    ];
    $request->typeProvider1->options->nameProperty = 'amet';
    $request->typeProvider1->options->validationOptions = new ValidationOptions();
    $request->typeProvider1->options->validationOptions->schemaValidation = ValidationOptionsSchemaValidationEnum::UNKNOWN;
    $request->typeProvider1->options->validationOptions->undeclaredProperties = ValidationOptionsUndeclaredPropertiesEnum::IGNORE;
    $request->typeProvider1->selfLink = 'a';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'harum';
    $request->key = 'laboriosam';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->project = 'voluptates';
    $request->quotaUser = 'libero';
    $request->typeProviderPathParameter = 'vitae';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'similique';

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
