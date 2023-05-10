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
use \OpenAPI\OpenAPI\Models\Shared\BatchInputCallbackCompletionBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\CallbackCompletionBatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchInputCallbackCompletionBatchRequest();
    $request->inputs = [
        new CallbackCompletionBatchRequest(),
        new CallbackCompletionBatchRequest(),
        new CallbackCompletionBatchRequest(),
    ];

    $requestSecurity = new PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity();
    $requestSecurity->hapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->callbacks->postAutomationV4ActionsCallbacksCompleteCompleteBatch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [callbacks](docs/callbacks/README.md)

* [postAutomationV4ActionsCallbacksCompleteCompleteBatch](docs/callbacks/README.md#postautomationv4actionscallbackscompletecompletebatch) - Complete a batch of callbacks
* [postAutomationV4ActionsCallbacksCallbackIdCompleteComplete](docs/callbacks/README.md#postautomationv4actionscallbackscallbackidcompletecomplete) - Complete a callback

### [definitions](docs/definitions/README.md)

* [deleteAutomationV4ActionsAppIdDefinitionIdArchive](docs/definitions/README.md#deleteautomationv4actionsappiddefinitionidarchive) - Archive a custom action
* [getAutomationV4ActionsAppIdDefinitionIdGetById](docs/definitions/README.md#getautomationv4actionsappiddefinitionidgetbyid) - Get a custom action
* [getAutomationV4ActionsAppIdGetPage](docs/definitions/README.md#getautomationv4actionsappidgetpage) - Get all custom actions
* [patchAutomationV4ActionsAppIdDefinitionIdUpdate](docs/definitions/README.md#patchautomationv4actionsappiddefinitionidupdate) - Update a custom action
* [postAutomationV4ActionsAppIdCreate](docs/definitions/README.md#postautomationv4actionsappidcreate) - Create new custom action

### [functions](docs/functions/README.md)

* [deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive](docs/functions/README.md#deleteautomationv4actionsappiddefinitionidfunctionsfunctiontypefunctionidarchive) - Delete a custom action function
* [deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType](docs/functions/README.md#deleteautomationv4actionsappiddefinitionidfunctionsfunctiontypearchivebyfunctiontype) - Delete a custom action function
* [getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById](docs/functions/README.md#getautomationv4actionsappiddefinitionidfunctionsfunctiontypefunctionidgetbyid) - Get a custom action function
* [getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType](docs/functions/README.md#getautomationv4actionsappiddefinitionidfunctionsfunctiontypegetbyfunctiontype) - Get a custom action function
* [getAutomationV4ActionsAppIdDefinitionIdFunctionsGetPage](docs/functions/README.md#getautomationv4actionsappiddefinitionidfunctionsgetpage) - Get all custom action functions
* [putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace](docs/functions/README.md#putautomationv4actionsappiddefinitionidfunctionsfunctiontypefunctionidcreateorreplace) - Create or replace a custom action function
* [putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType](docs/functions/README.md#putautomationv4actionsappiddefinitionidfunctionsfunctiontypecreateorreplacebyfunctiontype) - Create or replace a custom action function

### [revisions](docs/revisions/README.md)

* [getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById](docs/revisions/README.md#getautomationv4actionsappiddefinitionidrevisionsrevisionidgetbyid) - Get a revision for a custom action
* [getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage](docs/revisions/README.md#getautomationv4actionsappiddefinitionidrevisionsgetpage) - Get all revisions for a custom action
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
