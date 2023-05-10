# revisions

## Overview

Operations to retrieve the revisions for custom workflow actions.

### Available Operations

* [getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById](#getautomationv4actionsappiddefinitionidrevisionsrevisionidgetbyid) - Get a revision for a custom action
* [getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage](#getautomationv4actionsappiddefinitionidrevisionsgetpage) - Get all revisions for a custom action

## getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById

Returns the given version of a custom workflow action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest();
    $request->appId = 60225;
    $request->definitionId = 'reiciendis';
    $request->revisionId = 'est';

    $requestSecurity = new GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->revisions->getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById($request, $requestSecurity);

    if ($response->actionRevision !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage

Returns a list of revisions for a custom workflow action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest();
    $request->after = 'mollitia';
    $request->appId = 670638;
    $request->definitionId = 'dolores';
    $request->limit = 210382;

    $requestSecurity = new GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->revisions->getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage($request, $requestSecurity);

    if ($response->collectionResponseActionRevisionForwardPaging !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
