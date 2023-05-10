# projects

### Available Operations

* [datastreamProjectsLocationsConnectionProfilesCreate](#datastreamprojectslocationsconnectionprofilescreate) - Use this method to create a connection profile in a project and location.
* [datastreamProjectsLocationsConnectionProfilesDiscover](#datastreamprojectslocationsconnectionprofilesdiscover) - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects under a parent data object that's optionally supplied in the request.
* [datastreamProjectsLocationsConnectionProfilesList](#datastreamprojectslocationsconnectionprofileslist) - Use this method to list connection profiles created in a project and location.
* [datastreamProjectsLocationsFetchStaticIps](#datastreamprojectslocationsfetchstaticips) - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* [datastreamProjectsLocationsList](#datastreamprojectslocationslist) - Lists information about the supported locations for this service.
* [datastreamProjectsLocationsOperationsCancel](#datastreamprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datastreamProjectsLocationsOperationsList](#datastreamprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datastreamProjectsLocationsPrivateConnectionsCreate](#datastreamprojectslocationsprivateconnectionscreate) - Use this method to create a private connectivity configuration.
* [datastreamProjectsLocationsPrivateConnectionsList](#datastreamprojectslocationsprivateconnectionslist) - Use this method to list private connectivity configurations in a project and location.
* [datastreamProjectsLocationsPrivateConnectionsRoutesCreate](#datastreamprojectslocationsprivateconnectionsroutescreate) - Use this method to create a route for a private connectivity in a project and location.
* [datastreamProjectsLocationsPrivateConnectionsRoutesList](#datastreamprojectslocationsprivateconnectionsrouteslist) - Use this method to list routes created for a private connectivity in a project and location.
* [datastreamProjectsLocationsStreamsCreate](#datastreamprojectslocationsstreamscreate) - Use this method to create a stream.
* [datastreamProjectsLocationsStreamsDelete](#datastreamprojectslocationsstreamsdelete) - Use this method to delete a stream.
* [datastreamProjectsLocationsStreamsFetchErrors](#datastreamprojectslocationsstreamsfetcherrors) - Use this method to fetch any errors associated with a stream.
* [datastreamProjectsLocationsStreamsList](#datastreamprojectslocationsstreamslist) - Use this method to list streams in a project and location.
* [datastreamProjectsLocationsStreamsObjectsGet](#datastreamprojectslocationsstreamsobjectsget) - Use this method to get details about a stream object.
* [datastreamProjectsLocationsStreamsObjectsList](#datastreamprojectslocationsstreamsobjectslist) - Use this method to list the objects of a specific stream.
* [datastreamProjectsLocationsStreamsObjectsStartBackfillJob](#datastreamprojectslocationsstreamsobjectsstartbackfilljob) - Starts backfill job for the specified stream object.
* [datastreamProjectsLocationsStreamsObjectsStopBackfillJob](#datastreamprojectslocationsstreamsobjectsstopbackfilljob) - Stops the backfill job for the specified stream object.
* [datastreamProjectsLocationsStreamsPatch](#datastreamprojectslocationsstreamspatch) - Use this method to update the configuration of a stream.

## datastreamProjectsLocationsConnectionProfilesCreate

Use this method to create a connection profile in a project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsConnectionProfilesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\ForwardSshTunnelConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\GcsProfile;
use \OpenAPI\OpenAPI\Models\Shared\MysqlProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\MysqlSslConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\OracleProfile;
use \OpenAPI\OpenAPI\Models\Shared\PrivateConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsConnectionProfilesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsConnectionProfilesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->connectionProfileInput = new ConnectionProfileInput();
    $request->connectionProfileInput->displayName = 'fuga';
    $request->connectionProfileInput->forwardSshConnectivity = new ForwardSshTunnelConnectivity();
    $request->connectionProfileInput->forwardSshConnectivity->hostname = 'itchy-forager.name';
    $request->connectionProfileInput->forwardSshConnectivity->password = 'iure';
    $request->connectionProfileInput->forwardSshConnectivity->port = 902349;
    $request->connectionProfileInput->forwardSshConnectivity->privateKey = 'quidem';
    $request->connectionProfileInput->forwardSshConnectivity->username = 'Baby_Beier65';
    $request->connectionProfileInput->gcsProfile = new GcsProfile();
    $request->connectionProfileInput->gcsProfile->bucketName = 'laborum';
    $request->connectionProfileInput->gcsProfile->rootPath = 'dolores';
    $request->connectionProfileInput->labels = [
        'corporis' => 'explicabo',
    ];
    $request->connectionProfileInput->mysqlProfile = new MysqlProfileInput();
    $request->connectionProfileInput->mysqlProfile->hostname = 'sick-escort.name';
    $request->connectionProfileInput->mysqlProfile->password = 'nemo';
    $request->connectionProfileInput->mysqlProfile->port = 325047;
    $request->connectionProfileInput->mysqlProfile->sslConfig = new MysqlSslConfigInput();
    $request->connectionProfileInput->mysqlProfile->sslConfig->caCertificate = 'excepturi';
    $request->connectionProfileInput->mysqlProfile->sslConfig->clientCertificate = 'accusantium';
    $request->connectionProfileInput->mysqlProfile->sslConfig->clientKey = 'iure';
    $request->connectionProfileInput->mysqlProfile->username = 'Lorenza.Yundt65';
    $request->connectionProfileInput->noConnectivity = [
        'culpa' => 'consequuntur',
    ];
    $request->connectionProfileInput->oracleProfile = new OracleProfile();
    $request->connectionProfileInput->oracleProfile->connectionAttributes = [
        'mollitia' => 'occaecati',
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->connectionProfileInput->oracleProfile->databaseService = 'quia';
    $request->connectionProfileInput->oracleProfile->hostname = 'glorious-browsing.net';
    $request->connectionProfileInput->oracleProfile->password = 'animi';
    $request->connectionProfileInput->oracleProfile->port = 317202;
    $request->connectionProfileInput->oracleProfile->username = 'Britney94';
    $request->connectionProfileInput->privateConnectivity = new PrivateConnectivity();
    $request->connectionProfileInput->privateConnectivity->privateConnectionName = 'ipsam';
    $request->connectionProfileInput->staticServiceIpConnectivity = [
        'possimus' => 'aut',
        'quasi' => 'error',
        'temporibus' => 'laborum',
    ];
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->connectionProfileId = 'vero';
    $request->fields = 'nihil';
    $request->key = 'praesentium';
    $request->oauthToken = 'voluptatibus';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->requestId = 'voluptate';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new DatastreamProjectsLocationsConnectionProfilesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsConnectionProfilesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsConnectionProfilesDiscover

Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects under a parent data object that's optionally supplied in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsConnectionProfilesDiscoverRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiscoverConnectionProfileRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\ForwardSshTunnelConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\GcsProfile;
use \OpenAPI\OpenAPI\Models\Shared\MysqlProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\MysqlSslConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\OracleProfile;
use \OpenAPI\OpenAPI\Models\Shared\PrivateConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\MysqlRdbms;
use \OpenAPI\OpenAPI\Models\Shared\MysqlDatabase;
use \OpenAPI\OpenAPI\Models\Shared\MysqlTable;
use \OpenAPI\OpenAPI\Models\Shared\MysqlColumn;
use \OpenAPI\OpenAPI\Models\Shared\OracleRdbms;
use \OpenAPI\OpenAPI\Models\Shared\OracleSchema;
use \OpenAPI\OpenAPI\Models\Shared\OracleTable;
use \OpenAPI\OpenAPI\Models\Shared\OracleColumn;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsConnectionProfilesDiscoverRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->discoverConnectionProfileRequestInput = new DiscoverConnectionProfileRequestInput();
    $request->discoverConnectionProfileRequestInput->connectionProfile = new ConnectionProfileInput();
    $request->discoverConnectionProfileRequestInput->connectionProfile->displayName = 'reprehenderit';
    $request->discoverConnectionProfileRequestInput->connectionProfile->forwardSshConnectivity = new ForwardSshTunnelConnectivity();
    $request->discoverConnectionProfileRequestInput->connectionProfile->forwardSshConnectivity->hostname = 'finished-whisker.com';
    $request->discoverConnectionProfileRequestInput->connectionProfile->forwardSshConnectivity->password = 'corporis';
    $request->discoverConnectionProfileRequestInput->connectionProfile->forwardSshConnectivity->port = 296140;
    $request->discoverConnectionProfileRequestInput->connectionProfile->forwardSshConnectivity->privateKey = 'iusto';
    $request->discoverConnectionProfileRequestInput->connectionProfile->forwardSshConnectivity->username = 'Birdie88';
    $request->discoverConnectionProfileRequestInput->connectionProfile->gcsProfile = new GcsProfile();
    $request->discoverConnectionProfileRequestInput->connectionProfile->gcsProfile->bucketName = 'commodi';
    $request->discoverConnectionProfileRequestInput->connectionProfile->gcsProfile->rootPath = 'repudiandae';
    $request->discoverConnectionProfileRequestInput->connectionProfile->labels = [
        'ipsum' => 'quidem',
    ];
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile = new MysqlProfileInput();
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile->hostname = 'neighboring-miscommunication.org';
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile->password = 'modi';
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile->port = 508969;
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile->sslConfig = new MysqlSslConfigInput();
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile->sslConfig->caCertificate = 'rem';
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile->sslConfig->clientCertificate = 'voluptates';
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile->sslConfig->clientKey = 'quasi';
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile->username = 'Thelma92';
    $request->discoverConnectionProfileRequestInput->connectionProfile->noConnectivity = [
        'enim' => 'consequatur',
        'est' => 'quibusdam',
    ];
    $request->discoverConnectionProfileRequestInput->connectionProfile->oracleProfile = new OracleProfile();
    $request->discoverConnectionProfileRequestInput->connectionProfile->oracleProfile->connectionAttributes = [
        'deserunt' => 'distinctio',
    ];
    $request->discoverConnectionProfileRequestInput->connectionProfile->oracleProfile->databaseService = 'quibusdam';
    $request->discoverConnectionProfileRequestInput->connectionProfile->oracleProfile->hostname = 'flat-directive.biz';
    $request->discoverConnectionProfileRequestInput->connectionProfile->oracleProfile->password = 'aliquid';
    $request->discoverConnectionProfileRequestInput->connectionProfile->oracleProfile->port = 586513;
    $request->discoverConnectionProfileRequestInput->connectionProfile->oracleProfile->username = 'Kavon82';
    $request->discoverConnectionProfileRequestInput->connectionProfile->privateConnectivity = new PrivateConnectivity();
    $request->discoverConnectionProfileRequestInput->connectionProfile->privateConnectivity->privateConnectionName = 'ipsam';
    $request->discoverConnectionProfileRequestInput->connectionProfile->staticServiceIpConnectivity = [
        'fugit' => 'dolorum',
    ];
    $request->discoverConnectionProfileRequestInput->connectionProfileName = 'excepturi';
    $request->discoverConnectionProfileRequestInput->mysqlRdbms = new MysqlRdbms();
    $request->discoverConnectionProfileRequestInput->mysqlRdbms->mysqlDatabases = [
        new MysqlDatabase(),
        new MysqlDatabase(),
    ];
    $request->discoverConnectionProfileRequestInput->oracleRdbms = new OracleRdbms();
    $request->discoverConnectionProfileRequestInput->oracleRdbms->oracleSchemas = [
        new OracleSchema(),
        new OracleSchema(),
        new OracleSchema(),
    ];
    $request->discoverConnectionProfileRequestInput->recursionDepth = 735194;
    $request->discoverConnectionProfileRequestInput->recursive = false;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'non';
    $request->key = 'eligendi';
    $request->oauthToken = 'sint';
    $request->parent = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsConnectionProfilesDiscover($request, $requestSecurity);

    if ($response->discoverConnectionProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsConnectionProfilesList

Use this method to list connection profiles created in a project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsConnectionProfilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsConnectionProfilesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsConnectionProfilesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'dolorum';
    $request->filter = 'in';
    $request->key = 'in';
    $request->oauthToken = 'illum';
    $request->orderBy = 'maiores';
    $request->pageSize = 699479;
    $request->pageToken = 'dicta';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new DatastreamProjectsLocationsConnectionProfilesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsConnectionProfilesList($request, $requestSecurity);

    if ($response->listConnectionProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsFetchStaticIps

The FetchStaticIps API call exposes the static IP addresses used by Datastream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsFetchStaticIpsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsFetchStaticIpsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsFetchStaticIpsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'non';
    $request->fields = 'occaecati';
    $request->key = 'enim';
    $request->name = 'Toby Pouros';
    $request->oauthToken = 'id';
    $request->pageSize = 501324;
    $request->pageToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new DatastreamProjectsLocationsFetchStaticIpsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsFetchStaticIps($request, $requestSecurity);

    if ($response->fetchStaticIpsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->fields = 'molestiae';
    $request->filter = 'perferendis';
    $request->key = 'nihil';
    $request->name = 'Verna Olson';
    $request->oauthToken = 'suscipit';
    $request->pageSize = 618016;
    $request->pageToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new DatastreamProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'et' => 'excepturi',
        'ullam' => 'provident',
    ];
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'mollitia';
    $request->key = 'reiciendis';
    $request->name = 'Tommy Kemmer';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new DatastreamProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->fields = 'deleniti';
    $request->filter = 'facilis';
    $request->key = 'in';
    $request->name = 'Diane VonRueden';
    $request->oauthToken = 'nihil';
    $request->pageSize = 998848;
    $request->pageToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new DatastreamProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsPrivateConnectionsCreate

Use this method to create a private connectivity configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsPrivateConnectionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrivateConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\VpcPeeringConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsPrivateConnectionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsPrivateConnectionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->privateConnectionInput = new PrivateConnectionInput();
    $request->privateConnectionInput->displayName = 'consequuntur';
    $request->privateConnectionInput->error = new Error();
    $request->privateConnectionInput->error->details = [
        'natus' => 'magni',
        'sunt' => 'quo',
        'illum' => 'pariatur',
    ];
    $request->privateConnectionInput->error->errorTime = 'maxime';
    $request->privateConnectionInput->error->errorUuid = 'ea';
    $request->privateConnectionInput->error->message = 'excepturi';
    $request->privateConnectionInput->error->reason = 'odit';
    $request->privateConnectionInput->labels = [
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->privateConnectionInput->vpcPeeringConfig = new VpcPeeringConfig();
    $request->privateConnectionInput->vpcPeeringConfig->subnet = 'ipsam';
    $request->privateConnectionInput->vpcPeeringConfig->vpcName = 'voluptate';
    $request->accessToken = 'autem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eaque';
    $request->fields = 'pariatur';
    $request->key = 'nemo';
    $request->oauthToken = 'voluptatibus';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->privateConnectionId = 'fugiat';
    $request->quotaUser = 'amet';
    $request->requestId = 'aut';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new DatastreamProjectsLocationsPrivateConnectionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsPrivateConnectionsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsPrivateConnectionsList

Use this method to list private connectivity configurations in a project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsPrivateConnectionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsPrivateConnectionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsPrivateConnectionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'quis';
    $request->filter = 'totam';
    $request->key = 'dignissimos';
    $request->oauthToken = 'eaque';
    $request->orderBy = 'quis';
    $request->pageSize = 199996;
    $request->pageToken = 'eos';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'quam';

    $requestSecurity = new DatastreamProjectsLocationsPrivateConnectionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsPrivateConnectionsList($request, $requestSecurity);

    if ($response->listPrivateConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsPrivateConnectionsRoutesCreate

Use this method to create a route for a private connectivity in a project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsPrivateConnectionsRoutesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->routeInput = new RouteInput();
    $request->routeInput->destinationAddress = 'vero';
    $request->routeInput->destinationPort = 345352;
    $request->routeInput->displayName = 'hic';
    $request->routeInput->labels = [
        'omnis' => 'facilis',
        'perspiciatis' => 'voluptatem',
        'porro' => 'consequuntur',
        'blanditiis' => 'error',
    ];
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rerum';
    $request->fields = 'adipisci';
    $request->key = 'asperiores';
    $request->oauthToken = 'earum';
    $request->parent = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->requestId = 'dolorum';
    $request->routeId = 'deleniti';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new DatastreamProjectsLocationsPrivateConnectionsRoutesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsPrivateConnectionsRoutesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsPrivateConnectionsRoutesList

Use this method to list routes created for a private connectivity in a project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsPrivateConnectionsRoutesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->fields = 'quos';
    $request->filter = 'aliquid';
    $request->key = 'dolorem';
    $request->oauthToken = 'dolorem';
    $request->orderBy = 'dolor';
    $request->pageSize = 186193;
    $request->pageToken = 'ipsum';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new DatastreamProjectsLocationsPrivateConnectionsRoutesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsPrivateConnectionsRoutesList($request, $requestSecurity);

    if ($response->listRoutesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsStreamsCreate

Use this method to create a stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamInput;
use \OpenAPI\OpenAPI\Models\Shared\BackfillAllStrategy;
use \OpenAPI\OpenAPI\Models\Shared\MysqlRdbms;
use \OpenAPI\OpenAPI\Models\Shared\MysqlDatabase;
use \OpenAPI\OpenAPI\Models\Shared\MysqlTable;
use \OpenAPI\OpenAPI\Models\Shared\MysqlColumn;
use \OpenAPI\OpenAPI\Models\Shared\OracleRdbms;
use \OpenAPI\OpenAPI\Models\Shared\OracleSchema;
use \OpenAPI\OpenAPI\Models\Shared\OracleTable;
use \OpenAPI\OpenAPI\Models\Shared\OracleColumn;
use \OpenAPI\OpenAPI\Models\Shared\DestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsDestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsDestinationConfigGcsFileFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\JsonFileFormat;
use \OpenAPI\OpenAPI\Models\Shared\JsonFileFormatCompressionEnum;
use \OpenAPI\OpenAPI\Models\Shared\JsonFileFormatSchemaFileFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\MysqlSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\OracleSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\StreamStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsStreamsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->streamInput = new StreamInput();
    $request->streamInput->backfillAll = new BackfillAllStrategy();
    $request->streamInput->backfillAll->mysqlExcludedObjects = new MysqlRdbms();
    $request->streamInput->backfillAll->mysqlExcludedObjects->mysqlDatabases = [
        new MysqlDatabase(),
        new MysqlDatabase(),
        new MysqlDatabase(),
        new MysqlDatabase(),
    ];
    $request->streamInput->backfillAll->oracleExcludedObjects = new OracleRdbms();
    $request->streamInput->backfillAll->oracleExcludedObjects->oracleSchemas = [
        new OracleSchema(),
    ];
    $request->streamInput->backfillNone = [
        'numquam' => 'veritatis',
        'ipsa' => 'ipsa',
        'iure' => 'odio',
    ];
    $request->streamInput->customerManagedEncryptionKey = 'quaerat';
    $request->streamInput->destinationConfig = new DestinationConfig();
    $request->streamInput->destinationConfig->destinationConnectionProfileName = 'accusamus';
    $request->streamInput->destinationConfig->gcsDestinationConfig = new GcsDestinationConfig();
    $request->streamInput->destinationConfig->gcsDestinationConfig->avroFileFormat = [
        'voluptatibus' => 'voluptas',
        'natus' => 'eos',
        'atque' => 'sit',
    ];
    $request->streamInput->destinationConfig->gcsDestinationConfig->fileRotationInterval = 'fugiat';
    $request->streamInput->destinationConfig->gcsDestinationConfig->fileRotationMb = 67249;
    $request->streamInput->destinationConfig->gcsDestinationConfig->gcsFileFormat = GcsDestinationConfigGcsFileFormatEnum::AVRO;
    $request->streamInput->destinationConfig->gcsDestinationConfig->jsonFileFormat = new JsonFileFormat();
    $request->streamInput->destinationConfig->gcsDestinationConfig->jsonFileFormat->compression = JsonFileFormatCompressionEnum::GZIP;
    $request->streamInput->destinationConfig->gcsDestinationConfig->jsonFileFormat->schemaFileFormat = JsonFileFormatSchemaFileFormatEnum::NO_SCHEMA_FILE;
    $request->streamInput->destinationConfig->gcsDestinationConfig->path = 'voluptate';
    $request->streamInput->displayName = 'dolorum';
    $request->streamInput->labels = [
        'omnis' => 'necessitatibus',
        'distinctio' => 'asperiores',
        'nihil' => 'ipsum',
    ];
    $request->streamInput->sourceConfig = new SourceConfig();
    $request->streamInput->sourceConfig->mysqlSourceConfig = new MysqlSourceConfig();
    $request->streamInput->sourceConfig->mysqlSourceConfig->allowlist = new MysqlRdbms();
    $request->streamInput->sourceConfig->mysqlSourceConfig->allowlist->mysqlDatabases = [
        new MysqlDatabase(),
        new MysqlDatabase(),
    ];
    $request->streamInput->sourceConfig->mysqlSourceConfig->rejectlist = new MysqlRdbms();
    $request->streamInput->sourceConfig->mysqlSourceConfig->rejectlist->mysqlDatabases = [
        new MysqlDatabase(),
        new MysqlDatabase(),
        new MysqlDatabase(),
    ];
    $request->streamInput->sourceConfig->oracleSourceConfig = new OracleSourceConfig();
    $request->streamInput->sourceConfig->oracleSourceConfig->allowlist = new OracleRdbms();
    $request->streamInput->sourceConfig->oracleSourceConfig->allowlist->oracleSchemas = [
        new OracleSchema(),
        new OracleSchema(),
        new OracleSchema(),
        new OracleSchema(),
    ];
    $request->streamInput->sourceConfig->oracleSourceConfig->dropLargeObjects = [
        'aspernatur' => 'perferendis',
        'amet' => 'optio',
    ];
    $request->streamInput->sourceConfig->oracleSourceConfig->rejectlist = new OracleRdbms();
    $request->streamInput->sourceConfig->oracleSourceConfig->rejectlist->oracleSchemas = [
        new OracleSchema(),
        new OracleSchema(),
        new OracleSchema(),
        new OracleSchema(),
    ];
    $request->streamInput->sourceConfig->sourceConnectionProfileName = 'ad';
    $request->streamInput->state = StreamStateEnum::DRAINING;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'minima';
    $request->force = false;
    $request->key = 'repellendus';
    $request->oauthToken = 'totam';
    $request->parent = 'similique';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->requestId = 'at';
    $request->streamId = 'quaerat';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'vel';
    $request->validateOnly = false;

    $requestSecurity = new DatastreamProjectsLocationsStreamsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsStreamsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsStreamsDelete

Use this method to delete a stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsStreamsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'a';
    $request->key = 'esse';
    $request->name = 'Tyrone Emard';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->requestId = 'accusamus';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new DatastreamProjectsLocationsStreamsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsStreamsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsStreamsFetchErrors

Use this method to fetch any errors associated with a stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsFetchErrorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsFetchErrorsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsStreamsFetchErrorsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'totam' => 'nihil',
        'sit' => 'expedita',
        'neque' => 'sed',
        'vel' => 'libero',
    ];
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'ipsum';
    $request->key = 'incidunt';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->stream = 'maxime';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new DatastreamProjectsLocationsStreamsFetchErrorsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsStreamsFetchErrors($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsStreamsList

Use this method to list streams in a project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsStreamsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'incidunt';
    $request->fields = 'aspernatur';
    $request->filter = 'dolores';
    $request->key = 'distinctio';
    $request->oauthToken = 'facilis';
    $request->orderBy = 'aliquid';
    $request->pageSize = 463150;
    $request->pageToken = 'molestias';
    $request->parent = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new DatastreamProjectsLocationsStreamsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsStreamsList($request, $requestSecurity);

    if ($response->listStreamsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsStreamsObjectsGet

Use this method to get details about a stream object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsObjectsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsObjectsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsStreamsObjectsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ullam';
    $request->fields = 'nam';
    $request->key = 'hic';
    $request->name = 'Erma Rogahn PhD';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new DatastreamProjectsLocationsStreamsObjectsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsStreamsObjectsGet($request, $requestSecurity);

    if ($response->streamObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsStreamsObjectsList

Use this method to list the objects of a specific stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsObjectsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsObjectsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsStreamsObjectsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'dolorem';
    $request->key = 'dolore';
    $request->oauthToken = 'labore';
    $request->pageSize = 240829;
    $request->pageToken = 'dolorum';
    $request->parent = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quas';

    $requestSecurity = new DatastreamProjectsLocationsStreamsObjectsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsStreamsObjectsList($request, $requestSecurity);

    if ($response->listStreamObjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsStreamsObjectsStartBackfillJob

Starts backfill job for the specified stream object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsObjectsStartBackfillJobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'repellendus';
    $request->fields = 'porro';
    $request->key = 'doloribus';
    $request->oauthToken = 'ut';
    $request->object = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new DatastreamProjectsLocationsStreamsObjectsStartBackfillJobSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsStreamsObjectsStartBackfillJob($request, $requestSecurity);

    if ($response->startBackfillJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsStreamsObjectsStopBackfillJob

Stops the backfill job for the specified stream object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'quisquam';
    $request->key = 'vero';
    $request->oauthToken = 'omnis';
    $request->object = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsStreamsObjectsStopBackfillJob($request, $requestSecurity);

    if ($response->stopBackfillJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsStreamsPatch

Use this method to update the configuration of a stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamInput;
use \OpenAPI\OpenAPI\Models\Shared\BackfillAllStrategy;
use \OpenAPI\OpenAPI\Models\Shared\MysqlRdbms;
use \OpenAPI\OpenAPI\Models\Shared\MysqlDatabase;
use \OpenAPI\OpenAPI\Models\Shared\MysqlTable;
use \OpenAPI\OpenAPI\Models\Shared\MysqlColumn;
use \OpenAPI\OpenAPI\Models\Shared\OracleRdbms;
use \OpenAPI\OpenAPI\Models\Shared\OracleSchema;
use \OpenAPI\OpenAPI\Models\Shared\OracleTable;
use \OpenAPI\OpenAPI\Models\Shared\OracleColumn;
use \OpenAPI\OpenAPI\Models\Shared\DestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsDestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsDestinationConfigGcsFileFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\JsonFileFormat;
use \OpenAPI\OpenAPI\Models\Shared\JsonFileFormatCompressionEnum;
use \OpenAPI\OpenAPI\Models\Shared\JsonFileFormatSchemaFileFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\MysqlSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\OracleSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\StreamStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsStreamsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->streamInput = new StreamInput();
    $request->streamInput->backfillAll = new BackfillAllStrategy();
    $request->streamInput->backfillAll->mysqlExcludedObjects = new MysqlRdbms();
    $request->streamInput->backfillAll->mysqlExcludedObjects->mysqlDatabases = [
        new MysqlDatabase(),
        new MysqlDatabase(),
        new MysqlDatabase(),
        new MysqlDatabase(),
    ];
    $request->streamInput->backfillAll->oracleExcludedObjects = new OracleRdbms();
    $request->streamInput->backfillAll->oracleExcludedObjects->oracleSchemas = [
        new OracleSchema(),
        new OracleSchema(),
        new OracleSchema(),
        new OracleSchema(),
    ];
    $request->streamInput->backfillNone = [
        'hic' => 'distinctio',
        'quod' => 'odio',
    ];
    $request->streamInput->customerManagedEncryptionKey = 'similique';
    $request->streamInput->destinationConfig = new DestinationConfig();
    $request->streamInput->destinationConfig->destinationConnectionProfileName = 'facilis';
    $request->streamInput->destinationConfig->gcsDestinationConfig = new GcsDestinationConfig();
    $request->streamInput->destinationConfig->gcsDestinationConfig->avroFileFormat = [
        'ducimus' => 'dolore',
        'quibusdam' => 'illum',
        'sequi' => 'natus',
        'impedit' => 'aut',
    ];
    $request->streamInput->destinationConfig->gcsDestinationConfig->fileRotationInterval = 'voluptatibus';
    $request->streamInput->destinationConfig->gcsDestinationConfig->fileRotationMb = 347233;
    $request->streamInput->destinationConfig->gcsDestinationConfig->gcsFileFormat = GcsDestinationConfigGcsFileFormatEnum::AVRO;
    $request->streamInput->destinationConfig->gcsDestinationConfig->jsonFileFormat = new JsonFileFormat();
    $request->streamInput->destinationConfig->gcsDestinationConfig->jsonFileFormat->compression = JsonFileFormatCompressionEnum::JSON_COMPRESSION_UNSPECIFIED;
    $request->streamInput->destinationConfig->gcsDestinationConfig->jsonFileFormat->schemaFileFormat = JsonFileFormatSchemaFileFormatEnum::AVRO_SCHEMA_FILE;
    $request->streamInput->destinationConfig->gcsDestinationConfig->path = 'maiores';
    $request->streamInput->displayName = 'doloribus';
    $request->streamInput->labels = [
        'eligendi' => 'ducimus',
        'alias' => 'officia',
    ];
    $request->streamInput->sourceConfig = new SourceConfig();
    $request->streamInput->sourceConfig->mysqlSourceConfig = new MysqlSourceConfig();
    $request->streamInput->sourceConfig->mysqlSourceConfig->allowlist = new MysqlRdbms();
    $request->streamInput->sourceConfig->mysqlSourceConfig->allowlist->mysqlDatabases = [
        new MysqlDatabase(),
        new MysqlDatabase(),
    ];
    $request->streamInput->sourceConfig->mysqlSourceConfig->rejectlist = new MysqlRdbms();
    $request->streamInput->sourceConfig->mysqlSourceConfig->rejectlist->mysqlDatabases = [
        new MysqlDatabase(),
        new MysqlDatabase(),
    ];
    $request->streamInput->sourceConfig->oracleSourceConfig = new OracleSourceConfig();
    $request->streamInput->sourceConfig->oracleSourceConfig->allowlist = new OracleRdbms();
    $request->streamInput->sourceConfig->oracleSourceConfig->allowlist->oracleSchemas = [
        new OracleSchema(),
        new OracleSchema(),
    ];
    $request->streamInput->sourceConfig->oracleSourceConfig->dropLargeObjects = [
        'vel' => 'possimus',
    ];
    $request->streamInput->sourceConfig->oracleSourceConfig->rejectlist = new OracleRdbms();
    $request->streamInput->sourceConfig->oracleSourceConfig->rejectlist->oracleSchemas = [
        new OracleSchema(),
        new OracleSchema(),
    ];
    $request->streamInput->sourceConfig->sourceConnectionProfileName = 'ratione';
    $request->streamInput->state = StreamStateEnum::PAUSED;
    $request->accessToken = 'laudantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'maiores';
    $request->force = false;
    $request->key = 'quasi';
    $request->name = 'Freda Marks';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->requestId = 'saepe';
    $request->updateMask = 'ea';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'corporis';
    $request->validateOnly = false;

    $requestSecurity = new DatastreamProjectsLocationsStreamsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsStreamsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
