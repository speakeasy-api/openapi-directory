# projects

### Available Operations

* [datalineageProjectsLocationsBatchSearchLinkProcesses](#datalineageprojectslocationsbatchsearchlinkprocesses) - Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
* [datalineageProjectsLocationsOperationsCancel](#datalineageprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datalineageProjectsLocationsOperationsList](#datalineageprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datalineageProjectsLocationsProcessesCreate](#datalineageprojectslocationsprocessescreate) - Creates a new process.
* [datalineageProjectsLocationsProcessesList](#datalineageprojectslocationsprocesseslist) - List processes in the given project and location. List order is descending by insertion time.
* [datalineageProjectsLocationsProcessesRunsCreate](#datalineageprojectslocationsprocessesrunscreate) - Creates a new run.
* [datalineageProjectsLocationsProcessesRunsLineageEventsCreate](#datalineageprojectslocationsprocessesrunslineageeventscreate) - Creates a new lineage event.
* [datalineageProjectsLocationsProcessesRunsLineageEventsDelete](#datalineageprojectslocationsprocessesrunslineageeventsdelete) - Deletes the lineage event with the specified name.
* [datalineageProjectsLocationsProcessesRunsLineageEventsGet](#datalineageprojectslocationsprocessesrunslineageeventsget) - Gets details of a specified lineage event.
* [datalineageProjectsLocationsProcessesRunsLineageEventsList](#datalineageprojectslocationsprocessesrunslineageeventslist) - Lists lineage events in the given project and location. The list order is not defined.
* [datalineageProjectsLocationsProcessesRunsList](#datalineageprojectslocationsprocessesrunslist) - Lists runs in the given project and location. List order is descending by `start_time`.
* [datalineageProjectsLocationsProcessesRunsPatch](#datalineageprojectslocationsprocessesrunspatch) - Updates a run.
* [datalineageProjectsLocationsSearchLinks](#datalineageprojectslocationssearchlinks) - Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.

## datalineageProjectsLocationsBatchSearchLinkProcesses

Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsBatchSearchLinkProcessesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalineageProjectsLocationsBatchSearchLinkProcessesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest = new GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest();
    $request->googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest->links = [
        'molestiae',
        'minus',
    ];
    $request->googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest->pageSize = 812169;
    $request->googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest->pageToken = 'voluptatum';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'recusandae';
    $request->key = 'temporibus';
    $request->oauthToken = 'ab';
    $request->parent = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalineageProjectsLocationsBatchSearchLinkProcesses($request, $requestSecurity);

    if ($response->googleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalineageProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalineageProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'sapiente' => 'quo',
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
    ];
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'porro';
    $request->key = 'dolorum';
    $request->name = 'Antoinette Nikolaus';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new DatalineageProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalineageProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalineageProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalineageProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->filter = 'impedit';
    $request->key = 'cum';
    $request->name = 'Edna Mante II';
    $request->oauthToken = 'natus';
    $request->pageSize = 149675;
    $request->pageToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'laboriosam';

    $requestSecurity = new DatalineageProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalineageProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalineageProjectsLocationsProcessesCreate

Creates a new process.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogLineageV1Process;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogLineageV1Origin;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogLineageV1OriginSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalineageProjectsLocationsProcessesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogLineageV1Process = new GoogleCloudDatacatalogLineageV1Process();
    $request->googleCloudDatacatalogLineageV1Process->attributes = [
        'fuga' => 'in',
        'corporis' => 'iste',
        'iure' => 'saepe',
        'quidem' => 'architecto',
    ];
    $request->googleCloudDatacatalogLineageV1Process->displayName = 'ipsa';
    $request->googleCloudDatacatalogLineageV1Process->name = 'Carlton O'Hara';
    $request->googleCloudDatacatalogLineageV1Process->origin = new GoogleCloudDatacatalogLineageV1Origin();
    $request->googleCloudDatacatalogLineageV1Process->origin->name = 'Stacy Champlin';
    $request->googleCloudDatacatalogLineageV1Process->origin->sourceType = GoogleCloudDatacatalogLineageV1OriginSourceTypeEnum::COMPOSER;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'accusantium';
    $request->key = 'iure';
    $request->oauthToken = 'culpa';
    $request->parent = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->requestId = 'architecto';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new DatalineageProjectsLocationsProcessesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalineageProjectsLocationsProcessesCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogLineageV1Process !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalineageProjectsLocationsProcessesList

List processes in the given project and location. List order is descending by insertion time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalineageProjectsLocationsProcessesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'occaecati';
    $request->key = 'numquam';
    $request->oauthToken = 'commodi';
    $request->pageSize = 466311;
    $request->pageToken = 'molestiae';
    $request->parent = 'velit';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new DatalineageProjectsLocationsProcessesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalineageProjectsLocationsProcessesList($request, $requestSecurity);

    if ($response->googleCloudDatacatalogLineageV1ListProcessesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalineageProjectsLocationsProcessesRunsCreate

Creates a new run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesRunsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogLineageV1Run;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogLineageV1RunStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesRunsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalineageProjectsLocationsProcessesRunsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogLineageV1Run = new GoogleCloudDatacatalogLineageV1Run();
    $request->googleCloudDatacatalogLineageV1Run->attributes = [
        'animi' => 'enim',
        'odit' => 'quo',
        'sequi' => 'tenetur',
    ];
    $request->googleCloudDatacatalogLineageV1Run->displayName = 'ipsam';
    $request->googleCloudDatacatalogLineageV1Run->endTime = 'id';
    $request->googleCloudDatacatalogLineageV1Run->name = 'Richard Boyer';
    $request->googleCloudDatacatalogLineageV1Run->startTime = 'laborum';
    $request->googleCloudDatacatalogLineageV1Run->state = GoogleCloudDatacatalogLineageV1RunStateEnum::UNKNOWN;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'nihil';
    $request->key = 'praesentium';
    $request->oauthToken = 'voluptatibus';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->requestId = 'voluptate';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new DatalineageProjectsLocationsProcessesRunsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalineageProjectsLocationsProcessesRunsCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogLineageV1Run !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalineageProjectsLocationsProcessesRunsLineageEventsCreate

Creates a new lineage event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesRunsLineageEventsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogLineageV1LineageEvent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogLineageV1EventLink;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogLineageV1EntityReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesRunsLineageEventsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalineageProjectsLocationsProcessesRunsLineageEventsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogLineageV1LineageEvent = new GoogleCloudDatacatalogLineageV1LineageEvent();
    $request->googleCloudDatacatalogLineageV1LineageEvent->endTime = 'reprehenderit';
    $request->googleCloudDatacatalogLineageV1LineageEvent->links = [
        new GoogleCloudDatacatalogLineageV1EventLink(),
        new GoogleCloudDatacatalogLineageV1EventLink(),
    ];
    $request->googleCloudDatacatalogLineageV1LineageEvent->name = 'Willie Hessel';
    $request->googleCloudDatacatalogLineageV1LineageEvent->startTime = 'dicta';
    $request->accessToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'commodi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'quae';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->requestId = 'molestias';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new DatalineageProjectsLocationsProcessesRunsLineageEventsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalineageProjectsLocationsProcessesRunsLineageEventsCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogLineageV1LineageEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalineageProjectsLocationsProcessesRunsLineageEventsDelete

Deletes the lineage event with the specified name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesRunsLineageEventsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesRunsLineageEventsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalineageProjectsLocationsProcessesRunsLineageEventsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'praesentium';
    $request->allowMissing = false;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptates';
    $request->fields = 'quasi';
    $request->key = 'repudiandae';
    $request->name = 'Patrick Ward';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new DatalineageProjectsLocationsProcessesRunsLineageEventsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalineageProjectsLocationsProcessesRunsLineageEventsDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalineageProjectsLocationsProcessesRunsLineageEventsGet

Gets details of a specified lineage event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesRunsLineageEventsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesRunsLineageEventsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalineageProjectsLocationsProcessesRunsLineageEventsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'modi';
    $request->key = 'qui';
    $request->name = 'Mr. Shelly Lueilwitz';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new DatalineageProjectsLocationsProcessesRunsLineageEventsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalineageProjectsLocationsProcessesRunsLineageEventsGet($request, $requestSecurity);

    if ($response->googleCloudDatacatalogLineageV1LineageEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalineageProjectsLocationsProcessesRunsLineageEventsList

Lists lineage events in the given project and location. The list order is not defined.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesRunsLineageEventsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesRunsLineageEventsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalineageProjectsLocationsProcessesRunsLineageEventsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'labore';
    $request->key = 'delectus';
    $request->oauthToken = 'eum';
    $request->pageSize = 248753;
    $request->pageToken = 'eligendi';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new DatalineageProjectsLocationsProcessesRunsLineageEventsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalineageProjectsLocationsProcessesRunsLineageEventsList($request, $requestSecurity);

    if ($response->googleCloudDatacatalogLineageV1ListLineageEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalineageProjectsLocationsProcessesRunsList

Lists runs in the given project and location. List order is descending by `start_time`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesRunsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesRunsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalineageProjectsLocationsProcessesRunsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'a';
    $request->key = 'dolorum';
    $request->oauthToken = 'in';
    $request->pageSize = 449198;
    $request->pageToken = 'illum';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new DatalineageProjectsLocationsProcessesRunsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalineageProjectsLocationsProcessesRunsList($request, $requestSecurity);

    if ($response->googleCloudDatacatalogLineageV1ListRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalineageProjectsLocationsProcessesRunsPatch

Updates a run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesRunsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogLineageV1Run;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogLineageV1RunStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsProcessesRunsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalineageProjectsLocationsProcessesRunsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogLineageV1Run = new GoogleCloudDatacatalogLineageV1Run();
    $request->googleCloudDatacatalogLineageV1Run->attributes = [
        'ea' => 'aliquid',
        'laborum' => 'accusamus',
        'non' => 'occaecati',
        'enim' => 'accusamus',
    ];
    $request->googleCloudDatacatalogLineageV1Run->displayName = 'delectus';
    $request->googleCloudDatacatalogLineageV1Run->endTime = 'quidem';
    $request->googleCloudDatacatalogLineageV1Run->name = 'Marco Olson';
    $request->googleCloudDatacatalogLineageV1Run->startTime = 'sapiente';
    $request->googleCloudDatacatalogLineageV1Run->state = GoogleCloudDatacatalogLineageV1RunStateEnum::STARTED;
    $request->accessToken = 'deserunt';
    $request->allowMissing = false;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vel';
    $request->fields = 'natus';
    $request->key = 'omnis';
    $request->name = 'Dorothy Kovacek';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->updateMask = 'labore';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new DatalineageProjectsLocationsProcessesRunsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalineageProjectsLocationsProcessesRunsPatch($request, $requestSecurity);

    if ($response->googleCloudDatacatalogLineageV1Run !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datalineageProjectsLocationsSearchLinks

Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsSearchLinksRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogLineageV1SearchLinksRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogLineageV1EntityReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatalineageProjectsLocationsSearchLinksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatalineageProjectsLocationsSearchLinksRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogLineageV1SearchLinksRequest = new GoogleCloudDatacatalogLineageV1SearchLinksRequest();
    $request->googleCloudDatacatalogLineageV1SearchLinksRequest->pageSize = 428769;
    $request->googleCloudDatacatalogLineageV1SearchLinksRequest->pageToken = 'vero';
    $request->googleCloudDatacatalogLineageV1SearchLinksRequest->source = new GoogleCloudDatacatalogLineageV1EntityReference();
    $request->googleCloudDatacatalogLineageV1SearchLinksRequest->source->fullyQualifiedName = 'aspernatur';
    $request->googleCloudDatacatalogLineageV1SearchLinksRequest->target = new GoogleCloudDatacatalogLineageV1EntityReference();
    $request->googleCloudDatacatalogLineageV1SearchLinksRequest->target->fullyQualifiedName = 'architecto';
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'ullam';
    $request->key = 'provident';
    $request->oauthToken = 'quos';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new DatalineageProjectsLocationsSearchLinksSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datalineageProjectsLocationsSearchLinks($request, $requestSecurity);

    if ($response->googleCloudDatacatalogLineageV1SearchLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
