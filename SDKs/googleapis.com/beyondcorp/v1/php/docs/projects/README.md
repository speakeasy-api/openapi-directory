# projects

### Available Operations

* [beyondcorpProjectsLocationsAppConnectionsCreate](#beyondcorpprojectslocationsappconnectionscreate) - Creates a new AppConnection in a given project and location.
* [beyondcorpProjectsLocationsAppConnectionsList](#beyondcorpprojectslocationsappconnectionslist) - Lists AppConnections in a given project and location.
* [beyondcorpProjectsLocationsAppConnectionsResolve](#beyondcorpprojectslocationsappconnectionsresolve) - Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
* [beyondcorpProjectsLocationsAppConnectorsCreate](#beyondcorpprojectslocationsappconnectorscreate) - Creates a new AppConnector in a given project and location.
* [beyondcorpProjectsLocationsAppConnectorsList](#beyondcorpprojectslocationsappconnectorslist) - Lists AppConnectors in a given project and location.
* [beyondcorpProjectsLocationsAppConnectorsPatch](#beyondcorpprojectslocationsappconnectorspatch) - Updates the parameters of a single AppConnector.
* [beyondcorpProjectsLocationsAppConnectorsReportStatus](#beyondcorpprojectslocationsappconnectorsreportstatus) - Report status for a given connector.
* [beyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig](#beyondcorpprojectslocationsappconnectorsresolveinstanceconfig) - Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
* [beyondcorpProjectsLocationsAppGatewaysCreate](#beyondcorpprojectslocationsappgatewayscreate) - Creates a new AppGateway in a given project and location.
* [beyondcorpProjectsLocationsAppGatewaysList](#beyondcorpprojectslocationsappgatewayslist) - Lists AppGateways in a given project and location.
* [beyondcorpProjectsLocationsClientGatewaysGetIamPolicy](#beyondcorpprojectslocationsclientgatewaysgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [beyondcorpProjectsLocationsClientGatewaysSetIamPolicy](#beyondcorpprojectslocationsclientgatewayssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [beyondcorpProjectsLocationsClientGatewaysTestIamPermissions](#beyondcorpprojectslocationsclientgatewaystestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [beyondcorpProjectsLocationsList](#beyondcorpprojectslocationslist) - Lists information about the supported locations for this service.
* [beyondcorpProjectsLocationsOperationsCancel](#beyondcorpprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [beyondcorpProjectsLocationsOperationsDelete](#beyondcorpprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [beyondcorpProjectsLocationsOperationsGet](#beyondcorpprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [beyondcorpProjectsLocationsOperationsList](#beyondcorpprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## beyondcorpProjectsLocationsAppConnectionsCreate

Creates a new AppConnection in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsAppConnectionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput();
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->applicationEndpoint = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint();
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->applicationEndpoint->host = 'sapiente';
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->applicationEndpoint->port = 778157;
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->connectors = [
        'at',
    ];
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->displayName = 'at';
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->gateway = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput();
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->gateway->appGateway = 'maiores';
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->gateway->type = GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum::TYPE_UNSPECIFIED;
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->labels = [
        'quod' => 'esse',
        'totam' => 'porro',
        'dolorum' => 'dicta',
        'nam' => 'officia',
    ];
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->name = 'Wayne Lind';
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->type = GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum::TCP_PROXY;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->appConnectionId = 'molestiae';
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->key = 'impedit';
    $request->oauthToken = 'cum';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->requestId = 'excepturi';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';
    $request->validateOnly = false;

    $requestSecurity = new BeyondcorpProjectsLocationsAppConnectionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsAppConnectionsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsAppConnectionsList

Lists AppConnections in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsAppConnectionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'dolor';
    $request->filter = 'natus';
    $request->key = 'laboriosam';
    $request->oauthToken = 'hic';
    $request->orderBy = 'saepe';
    $request->pageSize = 681820;
    $request->pageToken = 'in';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new BeyondcorpProjectsLocationsAppConnectionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsAppConnectionsList($request, $requestSecurity);

    if ($response->googleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsAppConnectionsResolve

Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectionsResolveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectionsResolveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsAppConnectionsResolveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->appConnectorId = 'reiciendis';
    $request->callback = 'est';
    $request->fields = 'mollitia';
    $request->key = 'laborum';
    $request->oauthToken = 'dolores';
    $request->pageSize = 210382;
    $request->pageToken = 'corporis';
    $request->parent = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new BeyondcorpProjectsLocationsAppConnectionsResolveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsAppConnectionsResolve($request, $requestSecurity);

    if ($response->googleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsAppConnectorsCreate

Creates a new AppConnector in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectorsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectorsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsAppConnectorsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput = new GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput();
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->displayName = 'minima';
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->labels = [
        'accusantium' => 'iure',
        'culpa' => 'doloribus',
        'sapiente' => 'architecto',
    ];
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->name = 'Mike Nicolas';
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->principalInfo = new GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo();
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->principalInfo->serviceAccount = new GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount();
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->principalInfo->serviceAccount->email = 'Kristina.Fritsch@yahoo.com';
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->resourceInfo = new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo();
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->resourceInfo->id = '739251aa-52c3-4f5a-9019-da1ffe78f097';
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->resourceInfo->resource = [
        'perferendis' => 'doloremque',
        'reprehenderit' => 'ut',
        'maiores' => 'dicta',
    ];
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->resourceInfo->status = GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum::HEALTHY;
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->resourceInfo->sub = [
        new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo(),
        new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo(),
    ];
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->resourceInfo->time = 'iusto';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->appConnectorId = 'enim';
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
    $request->validateOnly = false;

    $requestSecurity = new BeyondcorpProjectsLocationsAppConnectorsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsAppConnectorsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsAppConnectorsList

Lists AppConnectors in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectorsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectorsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsAppConnectorsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptates';
    $request->fields = 'quasi';
    $request->filter = 'repudiandae';
    $request->key = 'sint';
    $request->oauthToken = 'veritatis';
    $request->orderBy = 'itaque';
    $request->pageSize = 277718;
    $request->pageToken = 'enim';
    $request->parent = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new BeyondcorpProjectsLocationsAppConnectorsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsAppConnectorsList($request, $requestSecurity);

    if ($response->googleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsAppConnectorsPatch

Updates the parameters of a single AppConnector.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectorsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectorsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsAppConnectorsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput = new GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput();
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->displayName = 'distinctio';
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->labels = [
        'labore' => 'modi',
        'qui' => 'aliquid',
        'cupiditate' => 'quos',
        'perferendis' => 'magni',
    ];
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->name = 'Vernon Abshire';
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->principalInfo = new GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo();
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->principalInfo->serviceAccount = new GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount();
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->principalInfo->serviceAccount->email = 'Dominique.Prosacco96@yahoo.com';
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->resourceInfo = new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo();
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->resourceInfo->id = '63c969e9-a3ef-4a77-9fb1-4cd66ae395ef';
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->resourceInfo->resource = [
        'provident' => 'nam',
        'id' => 'blanditiis',
        'deleniti' => 'sapiente',
    ];
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->resourceInfo->status = GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum::HEALTHY;
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->resourceInfo->sub = [
        new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo(),
        new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo(),
        new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo(),
    ];
    $request->googleCloudBeyondcorpAppconnectorsV1AppConnectorInput->resourceInfo->time = 'nisi';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->fields = 'molestiae';
    $request->key = 'perferendis';
    $request->name = 'Megan Rau';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->requestId = 'natus';
    $request->updateMask = 'nobis';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'vero';
    $request->validateOnly = false;

    $requestSecurity = new BeyondcorpProjectsLocationsAppConnectorsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsAppConnectorsPatch($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsAppConnectorsReportStatus

Report status for a given connector.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectorsReportStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectorsReportStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsAppConnectorsReportStatusRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudBeyondcorpAppconnectorsV1ReportStatusRequest = new GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest();
    $request->googleCloudBeyondcorpAppconnectorsV1ReportStatusRequest->requestId = 'architecto';
    $request->googleCloudBeyondcorpAppconnectorsV1ReportStatusRequest->resourceInfo = new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo();
    $request->googleCloudBeyondcorpAppconnectorsV1ReportStatusRequest->resourceInfo->id = '41959890-afa5-463e-a516-fe4c8b711e5b';
    $request->googleCloudBeyondcorpAppconnectorsV1ReportStatusRequest->resourceInfo->resource = [
        'repellat' => 'quibusdam',
        'sed' => 'saepe',
    ];
    $request->googleCloudBeyondcorpAppconnectorsV1ReportStatusRequest->resourceInfo->status = GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum::DEGRADED;
    $request->googleCloudBeyondcorpAppconnectorsV1ReportStatusRequest->resourceInfo->sub = [
        new GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo(),
    ];
    $request->googleCloudBeyondcorpAppconnectorsV1ReportStatusRequest->resourceInfo->time = 'consequuntur';
    $request->googleCloudBeyondcorpAppconnectorsV1ReportStatusRequest->validateOnly = false;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->appConnector = 'magni';
    $request->callback = 'sunt';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new BeyondcorpProjectsLocationsAppConnectorsReportStatusSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsAppConnectorsReportStatus($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig

Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->appConnector = 'ab';
    $request->callback = 'maiores';
    $request->fields = 'quidem';
    $request->key = 'ipsam';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'autem';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'eaque';

    $requestSecurity = new BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig($request, $requestSecurity);

    if ($response->googleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsAppGatewaysCreate

Creates a new AppGateway in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppGatewaysCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppGatewayInput;
use \OpenAPI\OpenAPI\Models\Shared\AppGatewayHostTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppGatewayTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppGatewaysCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsAppGatewaysCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->appGatewayInput = new AppGatewayInput();
    $request->appGatewayInput->displayName = 'nemo';
    $request->appGatewayInput->hostType = AppGatewayHostTypeEnum::GCP_REGIONAL_MIG;
    $request->appGatewayInput->labels = [
        'fugiat' => 'amet',
    ];
    $request->appGatewayInput->name = 'Erma Hessel';
    $request->appGatewayInput->type = AppGatewayTypeEnum::TCP_PROXY;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->appGatewayId = 'totam';
    $request->callback = 'dignissimos';
    $request->fields = 'eaque';
    $request->key = 'quis';
    $request->oauthToken = 'nesciunt';
    $request->parent = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->requestId = 'dolores';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'quam';
    $request->validateOnly = false;

    $requestSecurity = new BeyondcorpProjectsLocationsAppGatewaysCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsAppGatewaysCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsAppGatewaysList

Lists AppGateways in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppGatewaysListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppGatewaysListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsAppGatewaysListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'recusandae';
    $request->filter = 'omnis';
    $request->key = 'facilis';
    $request->oauthToken = 'perspiciatis';
    $request->orderBy = 'voluptatem';
    $request->pageSize = 783645;
    $request->pageToken = 'consequuntur';
    $request->parent = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new BeyondcorpProjectsLocationsAppGatewaysListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsAppGatewaysList($request, $requestSecurity);

    if ($response->listAppGatewaysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsClientGatewaysGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsClientGatewaysGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'earum';
    $request->fields = 'modi';
    $request->key = 'iste';
    $request->oauthToken = 'dolorum';
    $request->optionsRequestedPolicyVersion = 535633;
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->resource = 'provident';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new BeyondcorpProjectsLocationsClientGatewaysGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsClientGatewaysGetIamPolicy($request, $requestSecurity);

    if ($response->googleIamV1Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsClientGatewaysSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Policy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Binding;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeExpr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsClientGatewaysSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest();
    $request->googleIamV1SetIamPolicyRequest->policy = new GoogleIamV1Policy();
    $request->googleIamV1SetIamPolicyRequest->policy->auditConfigs = [
        new GoogleIamV1AuditConfig(),
        new GoogleIamV1AuditConfig(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->bindings = [
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->etag = 'aliquid';
    $request->googleIamV1SetIamPolicyRequest->policy->version = 212390;
    $request->googleIamV1SetIamPolicyRequest->updateMask = 'dolorem';
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'hic';
    $request->key = 'excepturi';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->resource = 'dignissimos';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new BeyondcorpProjectsLocationsClientGatewaysSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsClientGatewaysSetIamPolicy($request, $requestSecurity);

    if ($response->googleIamV1Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsClientGatewaysTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest();
    $request->googleIamV1TestIamPermissionsRequest->permissions = [
        'veritatis',
        'ipsa',
    ];
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odio';
    $request->fields = 'quaerat';
    $request->key = 'accusamus';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->resource = 'voluptas';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'eos';

    $requestSecurity = new BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsClientGatewaysTestIamPermissions($request, $requestSecurity);

    if ($response->googleIamV1TestIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->fields = 'soluta';
    $request->filter = 'dolorum';
    $request->key = 'iusto';
    $request->name = 'Sonya Leuschke';
    $request->oauthToken = 'distinctio';
    $request->pageSize = 990339;
    $request->pageToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'id';

    $requestSecurity = new BeyondcorpProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsList($request, $requestSecurity);

    if ($response->googleCloudLocationListLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'aspernatur' => 'perferendis',
        'amet' => 'optio',
    ];
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'suscipit';
    $request->key = 'deserunt';
    $request->name = 'Derek Sipes';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new BeyondcorpProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'qui';
    $request->fields = 'dolorum';
    $request->key = 'a';
    $request->name = 'Fannie Kub';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->requestId = 'tempore';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'numquam';
    $request->validateOnly = false;

    $requestSecurity = new BeyondcorpProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'nihil';
    $request->key = 'sit';
    $request->name = 'Luis Cremin';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new BeyondcorpProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beyondcorpProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'maxime';
    $request->fields = 'pariatur';
    $request->filter = 'soluta';
    $request->key = 'dicta';
    $request->name = 'Felix Gorczany';
    $request->oauthToken = 'distinctio';
    $request->pageSize = 704474;
    $request->pageToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new BeyondcorpProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
