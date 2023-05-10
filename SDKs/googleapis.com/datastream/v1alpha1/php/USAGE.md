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
use \OpenAPI\OpenAPI\Models\Shared\PrivateConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastreamProjectsLocationsConnectionProfilesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastreamProjectsLocationsConnectionProfilesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->connectionProfileInput = new ConnectionProfileInput();
    $request->connectionProfileInput->displayName = 'provident';
    $request->connectionProfileInput->forwardSshConnectivity = new ForwardSshTunnelConnectivity();
    $request->connectionProfileInput->forwardSshConnectivity->hostname = 'salty-stag.name';
    $request->connectionProfileInput->forwardSshConnectivity->password = 'nulla';
    $request->connectionProfileInput->forwardSshConnectivity->port = 544883;
    $request->connectionProfileInput->forwardSshConnectivity->privateKey = 'illum';
    $request->connectionProfileInput->forwardSshConnectivity->username = 'Henry.Mueller';
    $request->connectionProfileInput->gcsProfile = new GcsProfile();
    $request->connectionProfileInput->gcsProfile->bucketName = 'iure';
    $request->connectionProfileInput->gcsProfile->rootPath = 'magnam';
    $request->connectionProfileInput->labels = [
        'ipsa' => 'delectus',
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];
    $request->connectionProfileInput->mysqlProfile = new MysqlProfileInput();
    $request->connectionProfileInput->mysqlProfile->hostname = 'lawful-missionary.info';
    $request->connectionProfileInput->mysqlProfile->password = 'recusandae';
    $request->connectionProfileInput->mysqlProfile->port = 836079;
    $request->connectionProfileInput->mysqlProfile->sslConfig = new MysqlSslConfigInput();
    $request->connectionProfileInput->mysqlProfile->sslConfig->caCertificate = 'ab';
    $request->connectionProfileInput->mysqlProfile->sslConfig->clientCertificate = 'quis';
    $request->connectionProfileInput->mysqlProfile->sslConfig->clientKey = 'veritatis';
    $request->connectionProfileInput->mysqlProfile->username = 'Lydia_Aufderhar';
    $request->connectionProfileInput->noConnectivity = [
        'quo' => 'odit',
        'at' => 'at',
        'maiores' => 'molestiae',
        'quod' => 'quod',
    ];
    $request->connectionProfileInput->oracleProfile = new OracleProfile();
    $request->connectionProfileInput->oracleProfile->connectionAttributes = [
        'totam' => 'porro',
        'dolorum' => 'dicta',
    ];
    $request->connectionProfileInput->oracleProfile->databaseService = 'nam';
    $request->connectionProfileInput->oracleProfile->hostname = 'posh-muffin.com';
    $request->connectionProfileInput->oracleProfile->password = 'deleniti';
    $request->connectionProfileInput->oracleProfile->port = 944669;
    $request->connectionProfileInput->oracleProfile->username = 'Nina41';
    $request->connectionProfileInput->privateConnectivity = new PrivateConnectivity();
    $request->connectionProfileInput->privateConnectivity->privateConnectionName = 'molestiae';
    $request->connectionProfileInput->staticServiceIpConnectivity = [
        'qui' => 'impedit',
        'cum' => 'esse',
    ];
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->connectionProfileId = 'perferendis';
    $request->fields = 'ad';
    $request->key = 'natus';
    $request->oauthToken = 'sed';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->requestId = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';

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