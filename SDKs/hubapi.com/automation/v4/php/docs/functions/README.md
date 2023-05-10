# functions

## Overview

Operations to configure the functions associated with custom workflow actions.

### Available Operations

* [deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive](#deleteautomationv4actionsappiddefinitionidfunctionsfunctiontypefunctionidarchive) - Delete a custom action function
* [deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType](#deleteautomationv4actionsappiddefinitionidfunctionsfunctiontypearchivebyfunctiontype) - Delete a custom action function
* [getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById](#getautomationv4actionsappiddefinitionidfunctionsfunctiontypefunctionidgetbyid) - Get a custom action function
* [getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType](#getautomationv4actionsappiddefinitionidfunctionsfunctiontypegetbyfunctiontype) - Get a custom action function
* [getAutomationV4ActionsAppIdDefinitionIdFunctionsGetPage](#getautomationv4actionsappiddefinitionidfunctionsgetpage) - Get all custom action functions
* [putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace](#putautomationv4actionsappiddefinitionidfunctionsfunctiontypefunctionidcreateorreplace) - Create or replace a custom action function
* [putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType](#putautomationv4actionsappiddefinitionidfunctionsfunctiontypecreateorreplacebyfunctiontype) - Create or replace a custom action function

## deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive

Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveFunctionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveRequest();
    $request->appId = 186332;
    $request->definitionId = 'impedit';
    $request->functionId = 'cum';
    $request->functionType = DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveFunctionTypeEnum::PRE_FETCH_OPTIONS;

    $requestSecurity = new DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType

Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeRequest();
    $request->appId = 216550;
    $request->definitionId = 'excepturi';
    $request->functionType = DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum::PRE_ACTION_EXECUTION;

    $requestSecurity = new DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById

Returns the given function for a custom workflow action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdFunctionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdRequest();
    $request->appId = 18789;
    $request->definitionId = 'ad';
    $request->functionId = 'natus';
    $request->functionType = GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdFunctionTypeEnum::PRE_ACTION_EXECUTION;

    $requestSecurity = new GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById($request, $requestSecurity);

    if ($response->actionFunction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType

Returns the given function for a custom workflow action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeRequest();
    $request->appId = 612096;
    $request->definitionId = 'dolor';
    $request->functionType = GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum::PRE_FETCH_OPTIONS;

    $requestSecurity = new GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType($request, $requestSecurity);

    if ($response->actionFunction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutomationV4ActionsAppIdDefinitionIdFunctionsGetPage

Returns a list of all functions that are associated with the given custom workflow action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest();
    $request->appId = 386489;
    $request->definitionId = 'hic';

    $requestSecurity = new GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->getAutomationV4ActionsAppIdDefinitionIdFunctionsGetPage($request, $requestSecurity);

    if ($response->collectionResponseActionFunctionIdentifierNoPaging !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace

Creates or replaces a function for a custom workflow action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest();
    $request->requestBody = 'saepe';
    $request->appId = 681820;
    $request->definitionId = 'in';
    $request->functionId = 'corporis';
    $request->functionType = PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum::PRE_FETCH_OPTIONS;

    $requestSecurity = new PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace($request, $requestSecurity);

    if ($response->actionFunctionIdentifier !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType

Creates or replaces a function for a custom workflow action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest();
    $request->requestBody = 'iure';
    $request->appId = 902349;
    $request->definitionId = 'quidem';
    $request->functionType = PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum::PRE_ACTION_EXECUTION;

    $requestSecurity = new PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType($request, $requestSecurity);

    if ($response->actionFunctionIdentifier !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
