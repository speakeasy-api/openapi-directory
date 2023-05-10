# projects

### Available Operations

* [datastreamProjectsLocationsConnectionProfilesCreate](#datastreamprojectslocationsconnectionprofilescreate) - Use this method to create a connection profile in a project and location.
* [datastreamProjectsLocationsConnectionProfilesDiscover](#datastreamprojectslocationsconnectionprofilesdiscover) - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
* [datastreamProjectsLocationsConnectionProfilesList](#datastreamprojectslocationsconnectionprofileslist) - Use this method to list connection profiles created in a project and location.
* [datastreamProjectsLocationsFetchStaticIps](#datastreamprojectslocationsfetchstaticips) - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* [datastreamProjectsLocationsList](#datastreamprojectslocationslist) - Lists information about the supported locations for this service.
* [datastreamProjectsLocationsOperationsCancel](#datastreamprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datastreamProjectsLocationsOperationsList](#datastreamprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datastreamProjectsLocationsPrivateConnectionsCreate](#datastreamprojectslocationsprivateconnectionscreate) - Use this method to create a private connectivity configuration.
* [datastreamProjectsLocationsPrivateConnectionsList](#datastreamprojectslocationsprivateconnectionslist) - Use this method to list private connectivity configurations in a project and location.
* [datastreamProjectsLocationsPrivateConnectionsRoutesCreate](#datastreamprojectslocationsprivateconnectionsroutescreate) - Use this method to create a route for a private connectivity configuration in a project and location.
* [datastreamProjectsLocationsPrivateConnectionsRoutesList](#datastreamprojectslocationsprivateconnectionsrouteslist) - Use this method to list routes created for a private connectivity configuration in a project and location.
* [datastreamProjectsLocationsStreamsCreate](#datastreamprojectslocationsstreamscreate) - Use this method to create a stream.
* [datastreamProjectsLocationsStreamsDelete](#datastreamprojectslocationsstreamsdelete) - Use this method to delete a stream.
* [datastreamProjectsLocationsStreamsList](#datastreamprojectslocationsstreamslist) - Use this method to list streams in a project and location.
* [datastreamProjectsLocationsStreamsObjectsGet](#datastreamprojectslocationsstreamsobjectsget) - Use this method to get details about a stream object.
* [datastreamProjectsLocationsStreamsObjectsList](#datastreamprojectslocationsstreamsobjectslist) - Use this method to list the objects of a specific stream.
* [datastreamProjectsLocationsStreamsObjectsLookup](#datastreamprojectslocationsstreamsobjectslookup) - Use this method to look up a stream object by its source object identifier.
* [datastreamProjectsLocationsStreamsObjectsStartBackfillJob](#datastreamprojectslocationsstreamsobjectsstartbackfilljob) - Use this method to start a backfill job for the specified stream object.
* [datastreamProjectsLocationsStreamsObjectsStopBackfillJob](#datastreamprojectslocationsstreamsobjectsstopbackfilljob) - Use this method to stop a backfill job for the specified stream object.
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
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlProfile;
use \OpenAPI\OpenAPI\Models\Shared\PrivateConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsConnectionProfilesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsConnectionProfilesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->connectionProfileInput = new ConnectionProfileInput();
    $request->connectionProfileInput->bigqueryProfile = [
        'laborum' => 'dolores',
        'dolorem' => 'corporis',
        'explicabo' => 'nobis',
    ];
    $request->connectionProfileInput->displayName = 'enim';
    $request->connectionProfileInput->forwardSshConnectivity = new ForwardSshTunnelConnectivity();
    $request->connectionProfileInput->forwardSshConnectivity->hostname = 'palatable-forum.biz';
    $request->connectionProfileInput->forwardSshConnectivity->password = 'excepturi';
    $request->connectionProfileInput->forwardSshConnectivity->port = 38425;
    $request->connectionProfileInput->forwardSshConnectivity->privateKey = 'iure';
    $request->connectionProfileInput->forwardSshConnectivity->username = 'Lorenza.Yundt65';
    $request->connectionProfileInput->gcsProfile = new GcsProfile();
    $request->connectionProfileInput->gcsProfile->bucket = 'dolorem';
    $request->connectionProfileInput->gcsProfile->rootPath = 'culpa';
    $request->connectionProfileInput->labels = [
        'repellat' => 'mollitia',
    ];
    $request->connectionProfileInput->mysqlProfile = new MysqlProfileInput();
    $request->connectionProfileInput->mysqlProfile->hostname = 'oily-desk.info';
    $request->connectionProfileInput->mysqlProfile->password = 'quam';
    $request->connectionProfileInput->mysqlProfile->port = 474697;
    $request->connectionProfileInput->mysqlProfile->sslConfig = new MysqlSslConfigInput();
    $request->connectionProfileInput->mysqlProfile->sslConfig->caCertificate = 'velit';
    $request->connectionProfileInput->mysqlProfile->sslConfig->clientCertificate = 'error';
    $request->connectionProfileInput->mysqlProfile->sslConfig->clientKey = 'quia';
    $request->connectionProfileInput->mysqlProfile->username = 'Eugene_Brown31';
    $request->connectionProfileInput->oracleProfile = new OracleProfile();
    $request->connectionProfileInput->oracleProfile->connectionAttributes = [
        'quo' => 'sequi',
    ];
    $request->connectionProfileInput->oracleProfile->databaseService = 'tenetur';
    $request->connectionProfileInput->oracleProfile->hostname = 'happy-pink.net';
    $request->connectionProfileInput->oracleProfile->password = 'aut';
    $request->connectionProfileInput->oracleProfile->port = 97101;
    $request->connectionProfileInput->oracleProfile->username = 'Lina.Smitham97';
    $request->connectionProfileInput->postgresqlProfile = new PostgresqlProfile();
    $request->connectionProfileInput->postgresqlProfile->database = 'voluptatibus';
    $request->connectionProfileInput->postgresqlProfile->hostname = 'twin-intent.name';
    $request->connectionProfileInput->postgresqlProfile->password = 'voluptatibus';
    $request->connectionProfileInput->postgresqlProfile->port = 55714;
    $request->connectionProfileInput->postgresqlProfile->username = 'Lelah.Klein3';
    $request->connectionProfileInput->privateConnectivity = new PrivateConnectivity();
    $request->connectionProfileInput->privateConnectivity->privateConnection = 'reprehenderit';
    $request->connectionProfileInput->staticServiceIpConnectivity = [
        'maiores' => 'dicta',
        'corporis' => 'dolore',
    ];
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->connectionProfileId = 'enim';
    $request->fields = 'accusamus';
    $request->force = false;
    $request->key = 'commodi';
    $request->oauthToken = 'repudiandae';
    $request->parent = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->requestId = 'quidem';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'excepturi';
    $request->validateOnly = false;

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

Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.

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
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlProfile;
use \OpenAPI\OpenAPI\Models\Shared\PrivateConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\MysqlRdbms;
use \OpenAPI\OpenAPI\Models\Shared\MysqlDatabase;
use \OpenAPI\OpenAPI\Models\Shared\MysqlTable;
use \OpenAPI\OpenAPI\Models\Shared\MysqlColumn;
use \OpenAPI\OpenAPI\Models\Shared\OracleRdbms;
use \OpenAPI\OpenAPI\Models\Shared\OracleSchema;
use \OpenAPI\OpenAPI\Models\Shared\OracleTable;
use \OpenAPI\OpenAPI\Models\Shared\OracleColumn;
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlRdbms;
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlSchema;
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlTable;
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlColumn;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsConnectionProfilesDiscoverRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->discoverConnectionProfileRequestInput = new DiscoverConnectionProfileRequestInput();
    $request->discoverConnectionProfileRequestInput->connectionProfile = new ConnectionProfileInput();
    $request->discoverConnectionProfileRequestInput->connectionProfile->bigqueryProfile = [
        'praesentium' => 'rem',
        'voluptates' => 'quasi',
    ];
    $request->discoverConnectionProfileRequestInput->connectionProfile->displayName = 'repudiandae';
    $request->discoverConnectionProfileRequestInput->connectionProfile->forwardSshConnectivity = new ForwardSshTunnelConnectivity();
    $request->discoverConnectionProfileRequestInput->connectionProfile->forwardSshConnectivity->hostname = 'novel-binoculars.org';
    $request->discoverConnectionProfileRequestInput->connectionProfile->forwardSshConnectivity->password = 'incidunt';
    $request->discoverConnectionProfileRequestInput->connectionProfile->forwardSshConnectivity->port = 318569;
    $request->discoverConnectionProfileRequestInput->connectionProfile->forwardSshConnectivity->privateKey = 'consequatur';
    $request->discoverConnectionProfileRequestInput->connectionProfile->forwardSshConnectivity->username = 'Marc64';
    $request->discoverConnectionProfileRequestInput->connectionProfile->gcsProfile = new GcsProfile();
    $request->discoverConnectionProfileRequestInput->connectionProfile->gcsProfile->bucket = 'distinctio';
    $request->discoverConnectionProfileRequestInput->connectionProfile->gcsProfile->rootPath = 'quibusdam';
    $request->discoverConnectionProfileRequestInput->connectionProfile->labels = [
        'modi' => 'qui',
        'aliquid' => 'cupiditate',
    ];
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile = new MysqlProfileInput();
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile->hostname = 'musty-algebra.com';
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile->password = 'assumenda';
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile->port = 369808;
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile->sslConfig = new MysqlSslConfigInput();
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile->sslConfig->caCertificate = 'alias';
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile->sslConfig->clientCertificate = 'fugit';
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile->sslConfig->clientKey = 'dolorum';
    $request->discoverConnectionProfileRequestInput->connectionProfile->mysqlProfile->username = 'Kevin_Glover28';
    $request->discoverConnectionProfileRequestInput->connectionProfile->oracleProfile = new OracleProfile();
    $request->discoverConnectionProfileRequestInput->connectionProfile->oracleProfile->connectionAttributes = [
        'eum' => 'non',
        'eligendi' => 'sint',
        'aliquid' => 'provident',
        'necessitatibus' => 'sint',
    ];
    $request->discoverConnectionProfileRequestInput->connectionProfile->oracleProfile->databaseService = 'officia';
    $request->discoverConnectionProfileRequestInput->connectionProfile->oracleProfile->hostname = 'edible-tectonics.org';
    $request->discoverConnectionProfileRequestInput->connectionProfile->oracleProfile->password = 'dolorum';
    $request->discoverConnectionProfileRequestInput->connectionProfile->oracleProfile->port = 447125;
    $request->discoverConnectionProfileRequestInput->connectionProfile->oracleProfile->username = 'Isobel_Stamm11';
    $request->discoverConnectionProfileRequestInput->connectionProfile->postgresqlProfile = new PostgresqlProfile();
    $request->discoverConnectionProfileRequestInput->connectionProfile->postgresqlProfile->database = 'magnam';
    $request->discoverConnectionProfileRequestInput->connectionProfile->postgresqlProfile->hostname = 'smoggy-sledge.info';
    $request->discoverConnectionProfileRequestInput->connectionProfile->postgresqlProfile->password = 'aliquid';
    $request->discoverConnectionProfileRequestInput->connectionProfile->postgresqlProfile->port = 675439;
    $request->discoverConnectionProfileRequestInput->connectionProfile->postgresqlProfile->username = 'Shaniya.Friesen';
    $request->discoverConnectionProfileRequestInput->connectionProfile->privateConnectivity = new PrivateConnectivity();
    $request->discoverConnectionProfileRequestInput->connectionProfile->privateConnectivity->privateConnection = 'accusamus';
    $request->discoverConnectionProfileRequestInput->connectionProfile->staticServiceIpConnectivity = [
        'quidem' => 'provident',
        'nam' => 'id',
        'blanditiis' => 'deleniti',
        'sapiente' => 'amet',
    ];
    $request->discoverConnectionProfileRequestInput->connectionProfileName = 'deserunt';
    $request->discoverConnectionProfileRequestInput->fullHierarchy = false;
    $request->discoverConnectionProfileRequestInput->hierarchyDepth = 394869;
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
    $request->discoverConnectionProfileRequestInput->postgresqlRdbms = new PostgresqlRdbms();
    $request->discoverConnectionProfileRequestInput->postgresqlRdbms->postgresqlSchemas = [
        new PostgresqlSchema(),
        new PostgresqlSchema(),
        new PostgresqlSchema(),
    ];
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'magnam';
    $request->key = 'distinctio';
    $request->oauthToken = 'id';
    $request->parent = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'natus';

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
    $request->accessToken = 'eum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aspernatur';
    $request->fields = 'architecto';
    $request->filter = 'magnam';
    $request->key = 'et';
    $request->oauthToken = 'excepturi';
    $request->orderBy = 'ullam';
    $request->pageSize = 590873;
    $request->pageToken = 'quos';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'reiciendis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'necessitatibus';
    $request->key = 'odit';
    $request->name = 'Joyce Kertzmann';
    $request->oauthToken = 'eius';
    $request->pageSize = 806194;
    $request->pageToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'architecto';

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
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'expedita';
    $request->fields = 'nihil';
    $request->filter = 'repellat';
    $request->key = 'quibusdam';
    $request->name = 'Mr. Jenna Stroman';
    $request->oauthToken = 'natus';
    $request->pageSize = 166847;
    $request->pageToken = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'pariatur';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'excepturi' => 'odit',
        'ea' => 'accusantium',
    ];
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'ipsam';
    $request->key = 'voluptate';
    $request->name = 'Candice Beatty';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'amet';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'libero';
    $request->filter = 'nobis';
    $request->key = 'dolores';
    $request->name = 'Mrs. Deanna Kuhn';
    $request->oauthToken = 'eos';
    $request->pageSize = 18521;
    $request->pageToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'dolor';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->privateConnectionInput = new PrivateConnectionInput();
    $request->privateConnectionInput->displayName = 'nostrum';
    $request->privateConnectionInput->error = new Error();
    $request->privateConnectionInput->error->details = [
        'recusandae' => 'omnis',
        'facilis' => 'perspiciatis',
        'voluptatem' => 'porro',
        'consequuntur' => 'blanditiis',
    ];
    $request->privateConnectionInput->error->errorTime = 'error';
    $request->privateConnectionInput->error->errorUuid = 'eaque';
    $request->privateConnectionInput->error->message = 'occaecati';
    $request->privateConnectionInput->error->reason = 'rerum';
    $request->privateConnectionInput->labels = [
        'asperiores' => 'earum',
    ];
    $request->privateConnectionInput->vpcPeeringConfig = new VpcPeeringConfig();
    $request->privateConnectionInput->vpcPeeringConfig->subnet = 'modi';
    $request->privateConnectionInput->vpcPeeringConfig->vpc = 'iste';
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->fields = 'provident';
    $request->force = false;
    $request->key = 'nobis';
    $request->oauthToken = 'libero';
    $request->parent = 'delectus';
    $request->prettyPrint = false;
    $request->privateConnectionId = 'quaerat';
    $request->quotaUser = 'quos';
    $request->requestId = 'aliquid';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'dolorem';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::JSON;
    $request->callback = 'hic';
    $request->fields = 'excepturi';
    $request->filter = 'cum';
    $request->key = 'voluptate';
    $request->oauthToken = 'dignissimos';
    $request->orderBy = 'reiciendis';
    $request->pageSize = 227414;
    $request->pageToken = 'dolorum';
    $request->parent = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'ipsa';

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

Use this method to create a route for a private connectivity configuration in a project and location.

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
    $request->routeInput->destinationAddress = 'odio';
    $request->routeInput->destinationPort = 311796;
    $request->routeInput->displayName = 'accusamus';
    $request->routeInput->labels = [
        'voluptatibus' => 'voluptas',
        'natus' => 'eos',
        'atque' => 'sit',
    ];
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'soluta';
    $request->fields = 'dolorum';
    $request->key = 'iusto';
    $request->oauthToken = 'voluptate';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->requestId = 'omnis';
    $request->routeId = 'necessitatibus';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'asperiores';

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

Use this method to list routes created for a private connectivity configuration in a project and location.

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->fields = 'saepe';
    $request->filter = 'eius';
    $request->key = 'aspernatur';
    $request->oauthToken = 'perferendis';
    $request->orderBy = 'amet';
    $request->pageSize = 758379;
    $request->pageToken = 'accusamus';
    $request->parent = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'deserunt';

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
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlRdbms;
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlSchema;
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlTable;
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlColumn;
use \OpenAPI\OpenAPI\Models\Shared\DestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryDestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\SingleTargetDataset;
use \OpenAPI\OpenAPI\Models\Shared\SourceHierarchyDatasets;
use \OpenAPI\OpenAPI\Models\Shared\DatasetTemplate;
use \OpenAPI\OpenAPI\Models\Shared\GcsDestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\JsonFileFormat;
use \OpenAPI\OpenAPI\Models\Shared\JsonFileFormatCompressionEnum;
use \OpenAPI\OpenAPI\Models\Shared\JsonFileFormatSchemaFileFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\MysqlSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\OracleSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\StreamStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsStreamsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->streamInput = new StreamInput();
    $request->streamInput->backfillAll = new BackfillAllStrategy();
    $request->streamInput->backfillAll->mysqlExcludedObjects = new MysqlRdbms();
    $request->streamInput->backfillAll->mysqlExcludedObjects->mysqlDatabases = [
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
    $request->streamInput->backfillAll->postgresqlExcludedObjects = new PostgresqlRdbms();
    $request->streamInput->backfillAll->postgresqlExcludedObjects->postgresqlSchemas = [
        new PostgresqlSchema(),
        new PostgresqlSchema(),
        new PostgresqlSchema(),
    ];
    $request->streamInput->backfillNone = [
        'alias' => 'at',
        'quaerat' => 'tempora',
        'vel' => 'quod',
    ];
    $request->streamInput->customerManagedEncryptionKey = 'officiis';
    $request->streamInput->destinationConfig = new DestinationConfig();
    $request->streamInput->destinationConfig->bigqueryDestinationConfig = new BigQueryDestinationConfig();
    $request->streamInput->destinationConfig->bigqueryDestinationConfig->dataFreshness = 'qui';
    $request->streamInput->destinationConfig->bigqueryDestinationConfig->singleTargetDataset = new SingleTargetDataset();
    $request->streamInput->destinationConfig->bigqueryDestinationConfig->singleTargetDataset->datasetId = 'dolorum';
    $request->streamInput->destinationConfig->bigqueryDestinationConfig->sourceHierarchyDatasets = new SourceHierarchyDatasets();
    $request->streamInput->destinationConfig->bigqueryDestinationConfig->sourceHierarchyDatasets->datasetTemplate = new DatasetTemplate();
    $request->streamInput->destinationConfig->bigqueryDestinationConfig->sourceHierarchyDatasets->datasetTemplate->datasetIdPrefix = 'a';
    $request->streamInput->destinationConfig->bigqueryDestinationConfig->sourceHierarchyDatasets->datasetTemplate->kmsKeyName = 'esse';
    $request->streamInput->destinationConfig->bigqueryDestinationConfig->sourceHierarchyDatasets->datasetTemplate->location = 'harum';
    $request->streamInput->destinationConfig->destinationConnectionProfile = 'iusto';
    $request->streamInput->destinationConfig->gcsDestinationConfig = new GcsDestinationConfig();
    $request->streamInput->destinationConfig->gcsDestinationConfig->avroFileFormat = [
        'quisquam' => 'tenetur',
    ];
    $request->streamInput->destinationConfig->gcsDestinationConfig->fileRotationInterval = 'amet';
    $request->streamInput->destinationConfig->gcsDestinationConfig->fileRotationMb = 730856;
    $request->streamInput->destinationConfig->gcsDestinationConfig->jsonFileFormat = new JsonFileFormat();
    $request->streamInput->destinationConfig->gcsDestinationConfig->jsonFileFormat->compression = JsonFileFormatCompressionEnum::GZIP;
    $request->streamInput->destinationConfig->gcsDestinationConfig->jsonFileFormat->schemaFileFormat = JsonFileFormatSchemaFileFormatEnum::SCHEMA_FILE_FORMAT_UNSPECIFIED;
    $request->streamInput->destinationConfig->gcsDestinationConfig->path = 'enim';
    $request->streamInput->displayName = 'dolorem';
    $request->streamInput->labels = [
        'totam' => 'nihil',
        'sit' => 'expedita',
        'neque' => 'sed',
        'vel' => 'libero',
    ];
    $request->streamInput->sourceConfig = new SourceConfig();
    $request->streamInput->sourceConfig->mysqlSourceConfig = new MysqlSourceConfig();
    $request->streamInput->sourceConfig->mysqlSourceConfig->excludeObjects = new MysqlRdbms();
    $request->streamInput->sourceConfig->mysqlSourceConfig->excludeObjects->mysqlDatabases = [
        new MysqlDatabase(),
        new MysqlDatabase(),
    ];
    $request->streamInput->sourceConfig->mysqlSourceConfig->includeObjects = new MysqlRdbms();
    $request->streamInput->sourceConfig->mysqlSourceConfig->includeObjects->mysqlDatabases = [
        new MysqlDatabase(),
        new MysqlDatabase(),
        new MysqlDatabase(),
    ];
    $request->streamInput->sourceConfig->mysqlSourceConfig->maxConcurrentBackfillTasks = 463575;
    $request->streamInput->sourceConfig->mysqlSourceConfig->maxConcurrentCdcTasks = 214880;
    $request->streamInput->sourceConfig->oracleSourceConfig = new OracleSourceConfig();
    $request->streamInput->sourceConfig->oracleSourceConfig->dropLargeObjects = [
        'qui' => 'cupiditate',
        'maxime' => 'pariatur',
    ];
    $request->streamInput->sourceConfig->oracleSourceConfig->excludeObjects = new OracleRdbms();
    $request->streamInput->sourceConfig->oracleSourceConfig->excludeObjects->oracleSchemas = [
        new OracleSchema(),
        new OracleSchema(),
        new OracleSchema(),
    ];
    $request->streamInput->sourceConfig->oracleSourceConfig->includeObjects = new OracleRdbms();
    $request->streamInput->sourceConfig->oracleSourceConfig->includeObjects->oracleSchemas = [
        new OracleSchema(),
    ];
    $request->streamInput->sourceConfig->oracleSourceConfig->maxConcurrentBackfillTasks = 674848;
    $request->streamInput->sourceConfig->oracleSourceConfig->maxConcurrentCdcTasks = 517379;
    $request->streamInput->sourceConfig->oracleSourceConfig->streamLargeObjects = [
        'aspernatur' => 'dolores',
        'distinctio' => 'facilis',
    ];
    $request->streamInput->sourceConfig->postgresqlSourceConfig = new PostgresqlSourceConfig();
    $request->streamInput->sourceConfig->postgresqlSourceConfig->excludeObjects = new PostgresqlRdbms();
    $request->streamInput->sourceConfig->postgresqlSourceConfig->excludeObjects->postgresqlSchemas = [
        new PostgresqlSchema(),
        new PostgresqlSchema(),
    ];
    $request->streamInput->sourceConfig->postgresqlSourceConfig->includeObjects = new PostgresqlRdbms();
    $request->streamInput->sourceConfig->postgresqlSourceConfig->includeObjects->postgresqlSchemas = [
        new PostgresqlSchema(),
        new PostgresqlSchema(),
    ];
    $request->streamInput->sourceConfig->postgresqlSourceConfig->maxConcurrentBackfillTasks = 565421;
    $request->streamInput->sourceConfig->postgresqlSourceConfig->publication = 'temporibus';
    $request->streamInput->sourceConfig->postgresqlSourceConfig->replicationSlot = 'qui';
    $request->streamInput->sourceConfig->sourceConnectionProfile = 'neque';
    $request->streamInput->state = StreamStateEnum::NOT_STARTED;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sunt';
    $request->fields = 'ullam';
    $request->force = false;
    $request->key = 'nam';
    $request->oauthToken = 'hic';
    $request->parent = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->requestId = 'soluta';
    $request->streamId = 'nobis';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'saepe';
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quos';
    $request->fields = 'tempore';
    $request->key = 'cupiditate';
    $request->name = 'Dixie Durgan';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->requestId = 'architecto';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'aut';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'est';
    $request->fields = 'repellendus';
    $request->filter = 'porro';
    $request->key = 'doloribus';
    $request->oauthToken = 'ut';
    $request->orderBy = 'facilis';
    $request->pageSize = 586410;
    $request->pageToken = 'qui';
    $request->parent = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'laudantium';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'occaecati';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->fields = 'quis';
    $request->key = 'ipsum';
    $request->name = 'Karl Feeney';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quod';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'ducimus';
    $request->key = 'dolore';
    $request->oauthToken = 'quibusdam';
    $request->pageSize = 848944;
    $request->pageToken = 'sequi';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'voluptatibus';

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

## datastreamProjectsLocationsStreamsObjectsLookup

Use this method to look up a stream object by its source object identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsObjectsLookupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LookupStreamObjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\SourceObjectIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\MysqlObjectIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\OracleObjectIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlObjectIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsObjectsLookupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsStreamsObjectsLookupRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->lookupStreamObjectRequest = new LookupStreamObjectRequest();
    $request->lookupStreamObjectRequest->sourceObjectIdentifier = new SourceObjectIdentifier();
    $request->lookupStreamObjectRequest->sourceObjectIdentifier->mysqlIdentifier = new MysqlObjectIdentifier();
    $request->lookupStreamObjectRequest->sourceObjectIdentifier->mysqlIdentifier->database = 'nulla';
    $request->lookupStreamObjectRequest->sourceObjectIdentifier->mysqlIdentifier->table = 'fugit';
    $request->lookupStreamObjectRequest->sourceObjectIdentifier->oracleIdentifier = new OracleObjectIdentifier();
    $request->lookupStreamObjectRequest->sourceObjectIdentifier->oracleIdentifier->schema = 'porro';
    $request->lookupStreamObjectRequest->sourceObjectIdentifier->oracleIdentifier->table = 'maiores';
    $request->lookupStreamObjectRequest->sourceObjectIdentifier->postgresqlIdentifier = new PostgresqlObjectIdentifier();
    $request->lookupStreamObjectRequest->sourceObjectIdentifier->postgresqlIdentifier->schema = 'doloribus';
    $request->lookupStreamObjectRequest->sourceObjectIdentifier->postgresqlIdentifier->table = 'iusto';
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'officia';
    $request->key = 'tempora';
    $request->oauthToken = 'ipsam';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new DatastreamProjectsLocationsStreamsObjectsLookupSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastreamProjectsLocationsStreamsObjectsLookup($request, $requestSecurity);

    if ($response->streamObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastreamProjectsLocationsStreamsObjectsStartBackfillJob

Use this method to start a backfill job for the specified stream object.

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'ex' => 'laudantium',
    ];
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'quasi';
    $request->key = 'ex';
    $request->oauthToken = 'nulla';
    $request->object = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'sapiente';

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

Use this method to stop a backfill job for the specified stream object.

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
    $request->requestBody = [
        'ea' => 'impedit',
        'corporis' => 'veniam',
        'aliquid' => 'inventore',
        'magnam' => 'ea',
    ];
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'recusandae';
    $request->fields = 'aspernatur';
    $request->key = 'minima';
    $request->oauthToken = 'eaque';
    $request->object = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'aut';

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
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlRdbms;
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlSchema;
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlTable;
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlColumn;
use \OpenAPI\OpenAPI\Models\Shared\DestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryDestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\SingleTargetDataset;
use \OpenAPI\OpenAPI\Models\Shared\SourceHierarchyDatasets;
use \OpenAPI\OpenAPI\Models\Shared\DatasetTemplate;
use \OpenAPI\OpenAPI\Models\Shared\GcsDestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\JsonFileFormat;
use \OpenAPI\OpenAPI\Models\Shared\JsonFileFormatCompressionEnum;
use \OpenAPI\OpenAPI\Models\Shared\JsonFileFormatSchemaFileFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\MysqlSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\OracleSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\PostgresqlSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\StreamStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsStreamsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsStreamsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
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
    ];
    $request->streamInput->backfillAll->postgresqlExcludedObjects = new PostgresqlRdbms();
    $request->streamInput->backfillAll->postgresqlExcludedObjects->postgresqlSchemas = [
        new PostgresqlSchema(),
    ];
    $request->streamInput->backfillNone = [
        'inventore' => 'non',
        'et' => 'dolorum',
        'laborum' => 'placeat',
        'velit' => 'eum',
    ];
    $request->streamInput->customerManagedEncryptionKey = 'autem';
    $request->streamInput->destinationConfig = new DestinationConfig();
    $request->streamInput->destinationConfig->bigqueryDestinationConfig = new BigQueryDestinationConfig();
    $request->streamInput->destinationConfig->bigqueryDestinationConfig->dataFreshness = 'nobis';
    $request->streamInput->destinationConfig->bigqueryDestinationConfig->singleTargetDataset = new SingleTargetDataset();
    $request->streamInput->destinationConfig->bigqueryDestinationConfig->singleTargetDataset->datasetId = 'quas';
    $request->streamInput->destinationConfig->bigqueryDestinationConfig->sourceHierarchyDatasets = new SourceHierarchyDatasets();
    $request->streamInput->destinationConfig->bigqueryDestinationConfig->sourceHierarchyDatasets->datasetTemplate = new DatasetTemplate();
    $request->streamInput->destinationConfig->bigqueryDestinationConfig->sourceHierarchyDatasets->datasetTemplate->datasetIdPrefix = 'assumenda';
    $request->streamInput->destinationConfig->bigqueryDestinationConfig->sourceHierarchyDatasets->datasetTemplate->kmsKeyName = 'nulla';
    $request->streamInput->destinationConfig->bigqueryDestinationConfig->sourceHierarchyDatasets->datasetTemplate->location = 'voluptas';
    $request->streamInput->destinationConfig->destinationConnectionProfile = 'libero';
    $request->streamInput->destinationConfig->gcsDestinationConfig = new GcsDestinationConfig();
    $request->streamInput->destinationConfig->gcsDestinationConfig->avroFileFormat = [
        'tempora' => 'numquam',
    ];
    $request->streamInput->destinationConfig->gcsDestinationConfig->fileRotationInterval = 'explicabo';
    $request->streamInput->destinationConfig->gcsDestinationConfig->fileRotationMb = 591935;
    $request->streamInput->destinationConfig->gcsDestinationConfig->jsonFileFormat = new JsonFileFormat();
    $request->streamInput->destinationConfig->gcsDestinationConfig->jsonFileFormat->compression = JsonFileFormatCompressionEnum::JSON_COMPRESSION_UNSPECIFIED;
    $request->streamInput->destinationConfig->gcsDestinationConfig->jsonFileFormat->schemaFileFormat = JsonFileFormatSchemaFileFormatEnum::NO_SCHEMA_FILE;
    $request->streamInput->destinationConfig->gcsDestinationConfig->path = 'magnam';
    $request->streamInput->displayName = 'odio';
    $request->streamInput->labels = [
        'esse' => 'esse',
        'rem' => 'fuga',
    ];
    $request->streamInput->sourceConfig = new SourceConfig();
    $request->streamInput->sourceConfig->mysqlSourceConfig = new MysqlSourceConfig();
    $request->streamInput->sourceConfig->mysqlSourceConfig->excludeObjects = new MysqlRdbms();
    $request->streamInput->sourceConfig->mysqlSourceConfig->excludeObjects->mysqlDatabases = [
        new MysqlDatabase(),
        new MysqlDatabase(),
    ];
    $request->streamInput->sourceConfig->mysqlSourceConfig->includeObjects = new MysqlRdbms();
    $request->streamInput->sourceConfig->mysqlSourceConfig->includeObjects->mysqlDatabases = [
        new MysqlDatabase(),
        new MysqlDatabase(),
        new MysqlDatabase(),
    ];
    $request->streamInput->sourceConfig->mysqlSourceConfig->maxConcurrentBackfillTasks = 852635;
    $request->streamInput->sourceConfig->mysqlSourceConfig->maxConcurrentCdcTasks = 283519;
    $request->streamInput->sourceConfig->oracleSourceConfig = new OracleSourceConfig();
    $request->streamInput->sourceConfig->oracleSourceConfig->dropLargeObjects = [
        'suscipit' => 'assumenda',
        'eos' => 'praesentium',
    ];
    $request->streamInput->sourceConfig->oracleSourceConfig->excludeObjects = new OracleRdbms();
    $request->streamInput->sourceConfig->oracleSourceConfig->excludeObjects->oracleSchemas = [
        new OracleSchema(),
        new OracleSchema(),
        new OracleSchema(),
        new OracleSchema(),
    ];
    $request->streamInput->sourceConfig->oracleSourceConfig->includeObjects = new OracleRdbms();
    $request->streamInput->sourceConfig->oracleSourceConfig->includeObjects->oracleSchemas = [
        new OracleSchema(),
    ];
    $request->streamInput->sourceConfig->oracleSourceConfig->maxConcurrentBackfillTasks = 56848;
    $request->streamInput->sourceConfig->oracleSourceConfig->maxConcurrentCdcTasks = 660040;
    $request->streamInput->sourceConfig->oracleSourceConfig->streamLargeObjects = [
        'neque' => 'quo',
        'illum' => 'quo',
        'fuga' => 'eius',
    ];
    $request->streamInput->sourceConfig->postgresqlSourceConfig = new PostgresqlSourceConfig();
    $request->streamInput->sourceConfig->postgresqlSourceConfig->excludeObjects = new PostgresqlRdbms();
    $request->streamInput->sourceConfig->postgresqlSourceConfig->excludeObjects->postgresqlSchemas = [
        new PostgresqlSchema(),
    ];
    $request->streamInput->sourceConfig->postgresqlSourceConfig->includeObjects = new PostgresqlRdbms();
    $request->streamInput->sourceConfig->postgresqlSourceConfig->includeObjects->postgresqlSchemas = [
        new PostgresqlSchema(),
        new PostgresqlSchema(),
    ];
    $request->streamInput->sourceConfig->postgresqlSourceConfig->maxConcurrentBackfillTasks = 69859;
    $request->streamInput->sourceConfig->postgresqlSourceConfig->publication = 'cupiditate';
    $request->streamInput->sourceConfig->postgresqlSourceConfig->replicationSlot = 'consequatur';
    $request->streamInput->sourceConfig->sourceConnectionProfile = 'tempora';
    $request->streamInput->state = StreamStateEnum::DRAINING;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sequi';
    $request->fields = 'quo';
    $request->force = false;
    $request->key = 'esse';
    $request->name = 'Kevin Rau';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->requestId = 'totam';
    $request->updateMask = 'accusamus';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'odio';
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
