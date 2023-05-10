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