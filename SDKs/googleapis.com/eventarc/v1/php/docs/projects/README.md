# projects

### Available Operations

* [eventarcProjectsLocationsChannelConnectionsCreate](#eventarcprojectslocationschannelconnectionscreate) - Create a new ChannelConnection in a particular project and location.
* [eventarcProjectsLocationsChannelConnectionsList](#eventarcprojectslocationschannelconnectionslist) - List channel connections.
* [eventarcProjectsLocationsChannelsCreate](#eventarcprojectslocationschannelscreate) - Create a new channel in a particular project and location.
* [eventarcProjectsLocationsChannelsList](#eventarcprojectslocationschannelslist) - List channels.
* [eventarcProjectsLocationsList](#eventarcprojectslocationslist) - Lists information about the supported locations for this service.
* [eventarcProjectsLocationsOperationsCancel](#eventarcprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [eventarcProjectsLocationsOperationsList](#eventarcprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [eventarcProjectsLocationsProvidersList](#eventarcprojectslocationsproviderslist) - List providers.
* [eventarcProjectsLocationsTriggersCreate](#eventarcprojectslocationstriggerscreate) - Create a new trigger in a particular project and location.
* [eventarcProjectsLocationsTriggersDelete](#eventarcprojectslocationstriggersdelete) - Delete a single trigger.
* [eventarcProjectsLocationsTriggersGet](#eventarcprojectslocationstriggersget) - Get a single trigger.
* [eventarcProjectsLocationsTriggersGetIamPolicy](#eventarcprojectslocationstriggersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [eventarcProjectsLocationsTriggersList](#eventarcprojectslocationstriggerslist) - List triggers.
* [eventarcProjectsLocationsTriggersPatch](#eventarcprojectslocationstriggerspatch) - Update a single trigger.
* [eventarcProjectsLocationsTriggersSetIamPolicy](#eventarcprojectslocationstriggerssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [eventarcProjectsLocationsTriggersTestIamPermissions](#eventarcprojectslocationstriggerstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## eventarcProjectsLocationsChannelConnectionsCreate

Create a new ChannelConnection in a particular project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsChannelConnectionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsChannelConnectionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsChannelConnectionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->channelConnectionInput = new ChannelConnectionInput();
    $request->channelConnectionInput->activationToken = 'minus';
    $request->channelConnectionInput->channel = 'placeat';
    $request->channelConnectionInput->name = 'Ted Mante';
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->channelConnectionId = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->parent = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new EventarcProjectsLocationsChannelConnectionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsChannelConnectionsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsChannelConnectionsList

List channel connections.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsChannelConnectionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsChannelConnectionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsChannelConnectionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'quod';
    $request->key = 'quod';
    $request->oauthToken = 'esse';
    $request->pageSize = 520478;
    $request->pageToken = 'porro';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new EventarcProjectsLocationsChannelConnectionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsChannelConnectionsList($request, $requestSecurity);

    if ($response->listChannelConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsChannelsCreate

Create a new channel in a particular project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsChannelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsChannelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsChannelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->channelInput = new ChannelInput();
    $request->channelInput->cryptoKeyName = 'fugit';
    $request->channelInput->name = 'Irvin Rosenbaum III';
    $request->channelInput->provider = 'molestiae';
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->channelId = 'cum';
    $request->fields = 'esse';
    $request->key = 'ipsum';
    $request->oauthToken = 'excepturi';
    $request->parent = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'natus';
    $request->validateOnly = false;

    $requestSecurity = new EventarcProjectsLocationsChannelsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsChannelsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsChannelsList

List channels.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsChannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsChannelsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsChannelsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'laboriosam';
    $request->key = 'hic';
    $request->oauthToken = 'saepe';
    $request->orderBy = 'fuga';
    $request->pageSize = 449950;
    $request->pageToken = 'corporis';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new EventarcProjectsLocationsChannelsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsChannelsList($request, $requestSecurity);

    if ($response->listChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'mollitia';
    $request->filter = 'laborum';
    $request->key = 'dolores';
    $request->name = 'Stacy Champlin';
    $request->oauthToken = 'omnis';
    $request->pageSize = 363711;
    $request->pageToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new EventarcProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'sapiente' => 'architecto',
        'mollitia' => 'dolorem',
        'culpa' => 'consequuntur',
        'repellat' => 'mollitia',
    ];
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'quam';
    $request->key = 'molestiae';
    $request->name = 'Sabrina Cronin MD';
    $request->oauthToken = 'animi';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new EventarcProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->fields = 'possimus';
    $request->filter = 'aut';
    $request->key = 'quasi';
    $request->name = 'Dr. Jake Pacocha';
    $request->oauthToken = 'vero';
    $request->pageSize = 468651;
    $request->pageToken = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new EventarcProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsProvidersList

List providers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsProvidersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsProvidersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsProvidersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloremque';
    $request->fields = 'reprehenderit';
    $request->filter = 'ut';
    $request->key = 'maiores';
    $request->oauthToken = 'dicta';
    $request->orderBy = 'corporis';
    $request->pageSize = 296140;
    $request->pageToken = 'iusto';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new EventarcProjectsLocationsProvidersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsProvidersList($request, $requestSecurity);

    if ($response->listProvidersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsTriggersCreate

Create a new trigger in a particular project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerInput;
use \OpenAPI\OpenAPI\Models\Shared\Destination;
use \OpenAPI\OpenAPI\Models\Shared\CloudRun;
use \OpenAPI\OpenAPI\Models\Shared\Gke;
use \OpenAPI\OpenAPI\Models\Shared\EventFilter;
use \OpenAPI\OpenAPI\Models\Shared\TransportInput;
use \OpenAPI\OpenAPI\Models\Shared\PubsubInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsTriggersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->triggerInput = new TriggerInput();
    $request->triggerInput->channel = 'repudiandae';
    $request->triggerInput->destination = new Destination();
    $request->triggerInput->destination->cloudFunction = 'quae';
    $request->triggerInput->destination->cloudRun = new CloudRun();
    $request->triggerInput->destination->cloudRun->path = 'ipsum';
    $request->triggerInput->destination->cloudRun->region = 'quidem';
    $request->triggerInput->destination->cloudRun->service = 'molestias';
    $request->triggerInput->destination->gke = new Gke();
    $request->triggerInput->destination->gke->cluster = 'excepturi';
    $request->triggerInput->destination->gke->location = 'pariatur';
    $request->triggerInput->destination->gke->namespace = 'modi';
    $request->triggerInput->destination->gke->path = 'praesentium';
    $request->triggerInput->destination->gke->service = 'rem';
    $request->triggerInput->destination->workflow = 'voluptates';
    $request->triggerInput->eventDataContentType = 'quasi';
    $request->triggerInput->eventFilters = [
        new EventFilter(),
        new EventFilter(),
        new EventFilter(),
        new EventFilter(),
    ];
    $request->triggerInput->labels = [
        'veritatis' => 'itaque',
        'incidunt' => 'enim',
        'consequatur' => 'est',
    ];
    $request->triggerInput->name = 'Benjamin O'Connell';
    $request->triggerInput->serviceAccount = 'labore';
    $request->triggerInput->transport = new TransportInput();
    $request->triggerInput->transport->pubsub = new PubsubInput();
    $request->triggerInput->transport->pubsub->topic = 'modi';
    $request->accessToken = 'qui';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cupiditate';
    $request->fields = 'quos';
    $request->key = 'perferendis';
    $request->oauthToken = 'magni';
    $request->parent = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->triggerId = 'alias';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'dolorum';
    $request->validateOnly = false;

    $requestSecurity = new EventarcProjectsLocationsTriggersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsTriggersCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsTriggersDelete

Delete a single trigger.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsTriggersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempora';
    $request->allowMissing = false;
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->etag = 'labore';
    $request->fields = 'delectus';
    $request->key = 'eum';
    $request->name = 'Sheri Mayer';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'dolor';
    $request->validateOnly = false;

    $requestSecurity = new EventarcProjectsLocationsTriggersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsTriggersDelete($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsTriggersGet

Get a single trigger.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsTriggersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'in';
    $request->key = 'illum';
    $request->name = 'Jean Buckridge';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new EventarcProjectsLocationsTriggersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsTriggersGet($request, $requestSecurity);

    if ($response->trigger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsTriggersGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsTriggersGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->key = 'delectus';
    $request->oauthToken = 'quidem';
    $request->optionsRequestedPolicyVersion = 588465;
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->resource = 'id';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new EventarcProjectsLocationsTriggersGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsTriggersGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsTriggersList

List triggers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsTriggersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'vel';
    $request->filter = 'natus';
    $request->key = 'omnis';
    $request->oauthToken = 'molestiae';
    $request->orderBy = 'perferendis';
    $request->pageSize = 470132;
    $request->pageToken = 'magnam';
    $request->parent = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new EventarcProjectsLocationsTriggersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsTriggersList($request, $requestSecurity);

    if ($response->listTriggersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsTriggersPatch

Update a single trigger.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerInput;
use \OpenAPI\OpenAPI\Models\Shared\Destination;
use \OpenAPI\OpenAPI\Models\Shared\CloudRun;
use \OpenAPI\OpenAPI\Models\Shared\Gke;
use \OpenAPI\OpenAPI\Models\Shared\EventFilter;
use \OpenAPI\OpenAPI\Models\Shared\TransportInput;
use \OpenAPI\OpenAPI\Models\Shared\PubsubInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsTriggersPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->triggerInput = new TriggerInput();
    $request->triggerInput->channel = 'natus';
    $request->triggerInput->destination = new Destination();
    $request->triggerInput->destination->cloudFunction = 'nobis';
    $request->triggerInput->destination->cloudRun = new CloudRun();
    $request->triggerInput->destination->cloudRun->path = 'eum';
    $request->triggerInput->destination->cloudRun->region = 'vero';
    $request->triggerInput->destination->cloudRun->service = 'aspernatur';
    $request->triggerInput->destination->gke = new Gke();
    $request->triggerInput->destination->gke->cluster = 'architecto';
    $request->triggerInput->destination->gke->location = 'magnam';
    $request->triggerInput->destination->gke->namespace = 'et';
    $request->triggerInput->destination->gke->path = 'excepturi';
    $request->triggerInput->destination->gke->service = 'ullam';
    $request->triggerInput->destination->workflow = 'provident';
    $request->triggerInput->eventDataContentType = 'quos';
    $request->triggerInput->eventFilters = [
        new EventFilter(),
        new EventFilter(),
        new EventFilter(),
    ];
    $request->triggerInput->labels = [
        'mollitia' => 'reiciendis',
    ];
    $request->triggerInput->name = 'Tommy Kemmer';
    $request->triggerInput->serviceAccount = 'odit';
    $request->triggerInput->transport = new TransportInput();
    $request->triggerInput->transport->pubsub = new PubsubInput();
    $request->triggerInput->transport->pubsub->topic = 'nemo';
    $request->accessToken = 'quasi';
    $request->allowMissing = false;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'debitis';
    $request->key = 'eius';
    $request->name = 'Alfredo Prosacco Sr.';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->updateMask = 'expedita';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'repellat';
    $request->validateOnly = false;

    $requestSecurity = new EventarcProjectsLocationsTriggersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsTriggersPatch($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsTriggersSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsTriggersSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'pariatur';
    $request->setIamPolicyRequest->policy->version = 37559;
    $request->setIamPolicyRequest->updateMask = 'consequuntur';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magni';
    $request->fields = 'sunt';
    $request->key = 'quo';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->resource = 'maxime';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new EventarcProjectsLocationsTriggersSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsTriggersSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsTriggersTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsTriggersTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'accusantium',
        'ab',
    ];
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'voluptate';
    $request->key = 'autem';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->resource = 'pariatur';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new EventarcProjectsLocationsTriggersTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsTriggersTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
