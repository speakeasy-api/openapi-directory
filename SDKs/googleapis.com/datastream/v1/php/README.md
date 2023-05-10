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
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->connectionProfileInput->displayName = 'vel';
    $request->connectionProfileInput->forwardSshConnectivity = new ForwardSshTunnelConnectivity();
    $request->connectionProfileInput->forwardSshConnectivity->hostname = 'physical-pegboard.info';
    $request->connectionProfileInput->forwardSshConnectivity->password = 'iure';
    $request->connectionProfileInput->forwardSshConnectivity->port = 297534;
    $request->connectionProfileInput->forwardSshConnectivity->privateKey = 'debitis';
    $request->connectionProfileInput->forwardSshConnectivity->username = 'Anahi38';
    $request->connectionProfileInput->gcsProfile = new GcsProfile();
    $request->connectionProfileInput->gcsProfile->bucket = 'molestiae';
    $request->connectionProfileInput->gcsProfile->rootPath = 'minus';
    $request->connectionProfileInput->labels = [
        'voluptatum' => 'iusto',
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
        'ab' => 'quis',
    ];
    $request->connectionProfileInput->mysqlProfile = new MysqlProfileInput();
    $request->connectionProfileInput->mysqlProfile->hostname = 'bountiful-pension.com';
    $request->connectionProfileInput->mysqlProfile->password = 'ipsam';
    $request->connectionProfileInput->mysqlProfile->port = 832620;
    $request->connectionProfileInput->mysqlProfile->sslConfig = new MysqlSslConfigInput();
    $request->connectionProfileInput->mysqlProfile->sslConfig->caCertificate = 'sapiente';
    $request->connectionProfileInput->mysqlProfile->sslConfig->clientCertificate = 'quo';
    $request->connectionProfileInput->mysqlProfile->sslConfig->clientKey = 'odit';
    $request->connectionProfileInput->mysqlProfile->username = 'Sarah.Strosin79';
    $request->connectionProfileInput->oracleProfile = new OracleProfile();
    $request->connectionProfileInput->oracleProfile->connectionAttributes = [
        'esse' => 'totam',
        'porro' => 'dolorum',
        'dicta' => 'nam',
        'officia' => 'occaecati',
    ];
    $request->connectionProfileInput->oracleProfile->databaseService = 'fugit';
    $request->connectionProfileInput->oracleProfile->hostname = 'miserly-usage.net';
    $request->connectionProfileInput->oracleProfile->password = 'totam';
    $request->connectionProfileInput->oracleProfile->port = 105907;
    $request->connectionProfileInput->oracleProfile->username = 'Haskell18';
    $request->connectionProfileInput->postgresqlProfile = new PostgresqlProfile();
    $request->connectionProfileInput->postgresqlProfile->database = 'impedit';
    $request->connectionProfileInput->postgresqlProfile->hostname = 'several-increase.biz';
    $request->connectionProfileInput->postgresqlProfile->password = 'excepturi';
    $request->connectionProfileInput->postgresqlProfile->port = 135218;
    $request->connectionProfileInput->postgresqlProfile->username = 'Aiden.Hane';
    $request->connectionProfileInput->privateConnectivity = new PrivateConnectivity();
    $request->connectionProfileInput->privateConnectivity->privateConnection = 'iste';
    $request->connectionProfileInput->staticServiceIpConnectivity = [
        'natus' => 'laboriosam',
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->connectionProfileId = 'in';
    $request->fields = 'corporis';
    $request->force = false;
    $request->key = 'iste';
    $request->oauthToken = 'iure';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->requestId = 'architecto';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'reiciendis';
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [datastreamProjectsLocationsConnectionProfilesCreate](docs/projects/README.md#datastreamprojectslocationsconnectionprofilescreate) - Use this method to create a connection profile in a project and location.
* [datastreamProjectsLocationsConnectionProfilesDiscover](docs/projects/README.md#datastreamprojectslocationsconnectionprofilesdiscover) - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
* [datastreamProjectsLocationsConnectionProfilesList](docs/projects/README.md#datastreamprojectslocationsconnectionprofileslist) - Use this method to list connection profiles created in a project and location.
* [datastreamProjectsLocationsFetchStaticIps](docs/projects/README.md#datastreamprojectslocationsfetchstaticips) - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* [datastreamProjectsLocationsList](docs/projects/README.md#datastreamprojectslocationslist) - Lists information about the supported locations for this service.
* [datastreamProjectsLocationsOperationsCancel](docs/projects/README.md#datastreamprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datastreamProjectsLocationsOperationsList](docs/projects/README.md#datastreamprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datastreamProjectsLocationsPrivateConnectionsCreate](docs/projects/README.md#datastreamprojectslocationsprivateconnectionscreate) - Use this method to create a private connectivity configuration.
* [datastreamProjectsLocationsPrivateConnectionsList](docs/projects/README.md#datastreamprojectslocationsprivateconnectionslist) - Use this method to list private connectivity configurations in a project and location.
* [datastreamProjectsLocationsPrivateConnectionsRoutesCreate](docs/projects/README.md#datastreamprojectslocationsprivateconnectionsroutescreate) - Use this method to create a route for a private connectivity configuration in a project and location.
* [datastreamProjectsLocationsPrivateConnectionsRoutesList](docs/projects/README.md#datastreamprojectslocationsprivateconnectionsrouteslist) - Use this method to list routes created for a private connectivity configuration in a project and location.
* [datastreamProjectsLocationsStreamsCreate](docs/projects/README.md#datastreamprojectslocationsstreamscreate) - Use this method to create a stream.
* [datastreamProjectsLocationsStreamsDelete](docs/projects/README.md#datastreamprojectslocationsstreamsdelete) - Use this method to delete a stream.
* [datastreamProjectsLocationsStreamsList](docs/projects/README.md#datastreamprojectslocationsstreamslist) - Use this method to list streams in a project and location.
* [datastreamProjectsLocationsStreamsObjectsGet](docs/projects/README.md#datastreamprojectslocationsstreamsobjectsget) - Use this method to get details about a stream object.
* [datastreamProjectsLocationsStreamsObjectsList](docs/projects/README.md#datastreamprojectslocationsstreamsobjectslist) - Use this method to list the objects of a specific stream.
* [datastreamProjectsLocationsStreamsObjectsLookup](docs/projects/README.md#datastreamprojectslocationsstreamsobjectslookup) - Use this method to look up a stream object by its source object identifier.
* [datastreamProjectsLocationsStreamsObjectsStartBackfillJob](docs/projects/README.md#datastreamprojectslocationsstreamsobjectsstartbackfilljob) - Use this method to start a backfill job for the specified stream object.
* [datastreamProjectsLocationsStreamsObjectsStopBackfillJob](docs/projects/README.md#datastreamprojectslocationsstreamsobjectsstopbackfilljob) - Use this method to stop a backfill job for the specified stream object.
* [datastreamProjectsLocationsStreamsPatch](docs/projects/README.md#datastreamprojectslocationsstreamspatch) - Use this method to update the configuration of a stream.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
