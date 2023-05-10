# definitions

## Overview

Operations to configure custom workflow actions.

### Available Operations

* [deleteAutomationV4ActionsAppIdDefinitionIdArchive](#deleteautomationv4actionsappiddefinitionidarchive) - Archive a custom action
* [getAutomationV4ActionsAppIdDefinitionIdGetById](#getautomationv4actionsappiddefinitionidgetbyid) - Get a custom action
* [getAutomationV4ActionsAppIdGetPage](#getautomationv4actionsappidgetpage) - Get all custom actions
* [patchAutomationV4ActionsAppIdDefinitionIdUpdate](#patchautomationv4actionsappiddefinitionidupdate) - Update a custom action
* [postAutomationV4ActionsAppIdCreate](#postautomationv4actionsappidcreate) - Create new custom action

## deleteAutomationV4ActionsAppIdDefinitionIdArchive

Archives a single custom workflow action with the specified ID. Workflows that currently use this custom action will stop attempting to execute the action, and all future executions will be marked as a failure.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest();
    $request->appId = 645894;
    $request->definitionId = 'suscipit';

    $requestSecurity = new DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->definitions->deleteAutomationV4ActionsAppIdDefinitionIdArchive($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutomationV4ActionsAppIdDefinitionIdGetById

Returns a single custom workflow action with the specified ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest();
    $request->appId = 437587;
    $request->archived = false;
    $request->definitionId = 'magnam';

    $requestSecurity = new GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->definitions->getAutomationV4ActionsAppIdDefinitionIdGetById($request, $requestSecurity);

    if ($response->extensionActionDefinition !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutomationV4ActionsAppIdGetPage

Returns a list of all custom workflow actions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationV4ActionsAppIdGetPageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationV4ActionsAppIdGetPageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutomationV4ActionsAppIdGetPageRequest();
    $request->after = 'debitis';
    $request->appId = 56713;
    $request->archived = false;
    $request->limit = 963663;

    $requestSecurity = new GetAutomationV4ActionsAppIdGetPageSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->definitions->getAutomationV4ActionsAppIdGetPage($request, $requestSecurity);

    if ($response->collectionResponseExtensionActionDefinitionForwardPaging !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchAutomationV4ActionsAppIdDefinitionIdUpdate

Updates a custom workflow action with new values for the specified fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtensionActionDefinitionPatch;
use \OpenAPI\OpenAPI\Models\Shared\InputFieldDefinition;
use \OpenAPI\OpenAPI\Models\Shared\InputFieldDefinitionSupportedValueTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldTypeDefinition;
use \OpenAPI\OpenAPI\Models\Shared\FieldTypeDefinitionFieldTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Option;
use \OpenAPI\OpenAPI\Models\Shared\FieldTypeDefinitionReferencedObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldTypeDefinitionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionLabels;
use \OpenAPI\OpenAPI\Models\Shared\ObjectRequestOptions;
use \OpenAPI\OpenAPI\Models\Operations\PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest();
    $request->extensionActionDefinitionPatch = new ExtensionActionDefinitionPatch();
    $request->extensionActionDefinitionPatch->actionUrl = 'tempora';
    $request->extensionActionDefinitionPatch->inputFieldDependencies = [
        new SingleFieldDependency(),
        new ConditionalSingleFieldDependency(),
    ];
    $request->extensionActionDefinitionPatch->inputFields = [
        new InputFieldDefinition(),
        new InputFieldDefinition(),
        new InputFieldDefinition(),
        new InputFieldDefinition(),
    ];
    $request->extensionActionDefinitionPatch->labels = [
        'iusto' => new ActionLabels(),
        'excepturi' => new ActionLabels(),
        'nisi' => new ActionLabels(),
    ];
    $request->extensionActionDefinitionPatch->objectRequestOptions = new ObjectRequestOptions();
    $request->extensionActionDefinitionPatch->objectRequestOptions->properties = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->extensionActionDefinitionPatch->objectTypes = [
        'perferendis',
        'ipsam',
        'repellendus',
    ];
    $request->extensionActionDefinitionPatch->published = false;
    $request->appId = 957156;
    $request->definitionId = 'quo';

    $requestSecurity = new PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->definitions->patchAutomationV4ActionsAppIdDefinitionIdUpdate($request, $requestSecurity);

    if ($response->extensionActionDefinition !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAutomationV4ActionsAppIdCreate

Creates a new custom workflow action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAutomationV4ActionsAppIdCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtensionActionDefinitionInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionFunction;
use \OpenAPI\OpenAPI\Models\Shared\ActionFunctionFunctionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputFieldDefinition;
use \OpenAPI\OpenAPI\Models\Shared\InputFieldDefinitionSupportedValueTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldTypeDefinition;
use \OpenAPI\OpenAPI\Models\Shared\FieldTypeDefinitionFieldTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Option;
use \OpenAPI\OpenAPI\Models\Shared\FieldTypeDefinitionReferencedObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldTypeDefinitionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActionLabels;
use \OpenAPI\OpenAPI\Models\Shared\ObjectRequestOptions;
use \OpenAPI\OpenAPI\Models\Operations\PostAutomationV4ActionsAppIdCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAutomationV4ActionsAppIdCreateRequest();
    $request->extensionActionDefinitionInput = new ExtensionActionDefinitionInput();
    $request->extensionActionDefinitionInput->actionUrl = 'odit';
    $request->extensionActionDefinitionInput->archivedAt = 870013;
    $request->extensionActionDefinitionInput->functions = [
        new ActionFunction(),
        new ActionFunction(),
        new ActionFunction(),
        new ActionFunction(),
    ];
    $request->extensionActionDefinitionInput->inputFieldDependencies = [
        new SingleFieldDependency(),
        new ConditionalSingleFieldDependency(),
        new ConditionalSingleFieldDependency(),
        new SingleFieldDependency(),
    ];
    $request->extensionActionDefinitionInput->inputFields = [
        new InputFieldDefinition(),
        new InputFieldDefinition(),
        new InputFieldDefinition(),
    ];
    $request->extensionActionDefinitionInput->labels = [
        'dolorum' => new ActionLabels(),
        'dicta' => new ActionLabels(),
        'nam' => new ActionLabels(),
        'officia' => new ActionLabels(),
    ];
    $request->extensionActionDefinitionInput->objectRequestOptions = new ObjectRequestOptions();
    $request->extensionActionDefinitionInput->objectRequestOptions->properties = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->extensionActionDefinitionInput->objectTypes = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->extensionActionDefinitionInput->published = false;
    $request->appId = 264555;

    $requestSecurity = new PostAutomationV4ActionsAppIdCreateSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->definitions->postAutomationV4ActionsAppIdCreate($request, $requestSecurity);

    if ($response->extensionActionDefinition !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
