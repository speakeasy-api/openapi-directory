# projects

### Available Operations

* [connectorsProjectsLocationsConnectionsActionsExecute](#connectorsprojectslocationsconnectionsactionsexecute) - Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.
* [connectorsProjectsLocationsConnectionsActionsList](#connectorsprojectslocationsconnectionsactionslist) - Gets the schema of all the actions supported by the connector.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate](#connectorsprojectslocationsconnectionsentitytypesentitiescreate) - Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete](#connectorsprojectslocationsconnectionsentitytypesentitiesdelete) - Deletes an existing entity row matching the entity type and entity id specified in the request.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions](#connectorsprojectslocationsconnectionsentitytypesentitiesdeleteentitieswithconditions) - Deletes entities based on conditions specified in the request and not on entity id.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesGet](#connectorsprojectslocationsconnectionsentitytypesentitiesget) - Gets a single entity row matching the entity type and entity id specified in the request.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesList](#connectorsprojectslocationsconnectionsentitytypesentitieslist) - Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch](#connectorsprojectslocationsconnectionsentitytypesentitiespatch) - Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions](#connectorsprojectslocationsconnectionsentitytypesentitiesupdateentitieswithconditions) - Updates entities based on conditions specified in the request and not on entity id.
* [connectorsProjectsLocationsConnectionsEntityTypesList](#connectorsprojectslocationsconnectionsentitytypeslist) - Lists metadata related to all entity types present in the external system.
* [connectorsProjectsLocationsConnectionsExecuteSqlQuery](#connectorsprojectslocationsconnectionsexecutesqlquery) - Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.

## connectorsProjectsLocationsConnectionsActionsExecute

Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsActionsExecuteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsActionsExecuteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->executeActionRequest = new ExecuteActionRequest();
    $request->executeActionRequest->parameters = [
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
    ];
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->name = 'Estelle Will';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsActionsExecute($request, $requestSecurity);

    if ($response->executeActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsConnectionsActionsList

Gets the schema of all the actions supported by the connector.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsActionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsActionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsActionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'porro';
    $request->key = 'dolorum';
    $request->oauthToken = 'dicta';
    $request->pageSize = 720633;
    $request->pageToken = 'officia';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsActionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsActionsList($request, $requestSecurity);

    if ($response->listActionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate

Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EntityInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->entityInput = new EntityInput();
    $request->entityInput->fields = [
        'beatae' => 'commodi',
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'excepturi';
    $request->key = 'aspernatur';
    $request->oauthToken = 'perferendis';
    $request->parent = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate($request, $requestSecurity);

    if ($response->entity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete

Deletes an existing entity row matching the entity type and entity id specified in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'saepe';
    $request->key = 'fuga';
    $request->name = 'Stacy Moore';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions

Deletes entities based on conditions specified in the request and not on entity id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->conditions = 'dolorem';
    $request->entityType = 'corporis';
    $request->fields = 'explicabo';
    $request->key = 'nobis';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsConnectionsEntityTypesEntitiesGet

Gets a single entity row matching the entity type and entity id specified in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'doloribus';
    $request->key = 'sapiente';
    $request->name = 'Angie Durgan';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsEntityTypesEntitiesGet($request, $requestSecurity);

    if ($response->entity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsConnectionsEntityTypesEntitiesList

Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->conditions = 'error';
    $request->fields = 'quia';
    $request->key = 'quis';
    $request->oauthToken = 'vitae';
    $request->pageSize = 674752;
    $request->pageToken = 'animi';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->sortBy = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsEntityTypesEntitiesList($request, $requestSecurity);

    if ($response->listEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch

Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EntityInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->entityInput = new EntityInput();
    $request->entityInput->fields = [
        'temporibus' => 'laborum',
        'quasi' => 'reiciendis',
        'voluptatibus' => 'vero',
    ];
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'ipsa';
    $request->key = 'omnis';
    $request->name = 'Ms. Karla Aufderhar';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch($request, $requestSecurity);

    if ($response->entity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions

Updates entities based on conditions specified in the request and not on entity id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EntityInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->entityInput = new EntityInput();
    $request->entityInput->fields = [
        'harum' => 'enim',
    ];
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repudiandae';
    $request->conditions = 'quae';
    $request->entityType = 'ipsum';
    $request->fields = 'quidem';
    $request->key = 'molestias';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions($request, $requestSecurity);

    if ($response->updateEntitiesWithConditionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsConnectionsEntityTypesList

Lists metadata related to all entity types present in the external system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsEntityTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsEntityTypesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsEntityTypesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->fields = 'sint';
    $request->key = 'veritatis';
    $request->oauthToken = 'itaque';
    $request->pageSize = 277718;
    $request->pageToken = 'enim';
    $request->parent = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsEntityTypesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsEntityTypesList($request, $requestSecurity);

    if ($response->listEntityTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsConnectionsExecuteSqlQuery

Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsExecuteSqlQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteSqlQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsExecuteSqlQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsExecuteSqlQueryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->executeSqlQueryRequest = new ExecuteSqlQueryRequest();
    $request->executeSqlQueryRequest->query = new Query();
    $request->executeSqlQueryRequest->query->query = 'distinctio';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'modi';
    $request->connection = 'qui';
    $request->fields = 'aliquid';
    $request->key = 'cupiditate';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'assumenda';

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsExecuteSqlQuerySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsExecuteSqlQuery($request, $requestSecurity);

    if ($response->executeSqlQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
