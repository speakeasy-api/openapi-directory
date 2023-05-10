<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConnectionProfilesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\AlloyDbConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\AlloyDbSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\UserPasswordInput;
use \OpenAPI\OpenAPI\Models\Shared\PrimaryInstanceSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\MachineConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsActivationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsAvailabilityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsDataDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsDatabaseVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqlIpConfig;
use \OpenAPI\OpenAPI\Models\Shared\SqlAclEntry;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\MySqlConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\SslConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\OracleConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\ForwardSshTunnelConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\PrivateConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\PostgreSqlConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\PrivateServiceConnectConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionProfileProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionProfileStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConnectionProfilesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsConnectionProfilesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->connectionProfileInput = new ConnectionProfileInput();
    $request->connectionProfileInput->alloydb = new AlloyDbConnectionProfileInput();
    $request->connectionProfileInput->alloydb->clusterId = 'provident';
    $request->connectionProfileInput->alloydb->settings = new AlloyDbSettingsInput();
    $request->connectionProfileInput->alloydb->settings->encryptionConfig = new EncryptionConfig();
    $request->connectionProfileInput->alloydb->settings->encryptionConfig->kmsKeyName = 'distinctio';
    $request->connectionProfileInput->alloydb->settings->initialUser = new UserPasswordInput();
    $request->connectionProfileInput->alloydb->settings->initialUser->password = 'quibusdam';
    $request->connectionProfileInput->alloydb->settings->initialUser->user = 'unde';
    $request->connectionProfileInput->alloydb->settings->labels = [
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
    ];
    $request->connectionProfileInput->alloydb->settings->primaryInstanceSettings = new PrimaryInstanceSettingsInput();
    $request->connectionProfileInput->alloydb->settings->primaryInstanceSettings->databaseFlags = [
        'ipsa' => 'delectus',
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];
    $request->connectionProfileInput->alloydb->settings->primaryInstanceSettings->id = '796ed151-a05d-4fc2-9df7-cc78ca1ba928';
    $request->connectionProfileInput->alloydb->settings->primaryInstanceSettings->labels = [
        'optio' => 'totam',
        'beatae' => 'commodi',
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->connectionProfileInput->alloydb->settings->primaryInstanceSettings->machineConfig = new MachineConfig();
    $request->connectionProfileInput->alloydb->settings->primaryInstanceSettings->machineConfig->cpuCount = 736918;
    $request->connectionProfileInput->alloydb->settings->vpcNetwork = 'esse';
    $request->connectionProfileInput->cloudsql = new CloudSqlConnectionProfileInput();
    $request->connectionProfileInput->cloudsql->settings = new CloudSqlSettingsInput();
    $request->connectionProfileInput->cloudsql->settings->activationPolicy = CloudSqlSettingsActivationPolicyEnum::SQL_ACTIVATION_POLICY_UNSPECIFIED;
    $request->connectionProfileInput->cloudsql->settings->autoStorageIncrease = false;
    $request->connectionProfileInput->cloudsql->settings->availabilityType = CloudSqlSettingsAvailabilityTypeEnum::ZONAL;
    $request->connectionProfileInput->cloudsql->settings->cmekKeyName = 'aspernatur';
    $request->connectionProfileInput->cloudsql->settings->collation = 'perferendis';
    $request->connectionProfileInput->cloudsql->settings->dataDiskSizeGb = 'ad';
    $request->connectionProfileInput->cloudsql->settings->dataDiskType = CloudSqlSettingsDataDiskTypeEnum::PD_SSD;
    $request->connectionProfileInput->cloudsql->settings->databaseFlags = [
        'iste' => 'dolor',
    ];
    $request->connectionProfileInput->cloudsql->settings->databaseVersion = CloudSqlSettingsDatabaseVersionEnum::MYSQL80;
    $request->connectionProfileInput->cloudsql->settings->ipConfig = new SqlIpConfig();
    $request->connectionProfileInput->cloudsql->settings->ipConfig->allocatedIpRange = 'laboriosam';
    $request->connectionProfileInput->cloudsql->settings->ipConfig->authorizedNetworks = [
        new SqlAclEntry(),
        new SqlAclEntry(),
        new SqlAclEntry(),
        new SqlAclEntry(),
    ];
    $request->connectionProfileInput->cloudsql->settings->ipConfig->enableIpv4 = false;
    $request->connectionProfileInput->cloudsql->settings->ipConfig->privateNetwork = 'saepe';
    $request->connectionProfileInput->cloudsql->settings->ipConfig->requireSsl = false;
    $request->connectionProfileInput->cloudsql->settings->rootPassword = 'fuga';
    $request->connectionProfileInput->cloudsql->settings->secondaryZone = 'in';
    $request->connectionProfileInput->cloudsql->settings->sourceId = 'corporis';
    $request->connectionProfileInput->cloudsql->settings->storageAutoResizeLimit = 'iste';
    $request->connectionProfileInput->cloudsql->settings->tier = 'iure';
    $request->connectionProfileInput->cloudsql->settings->userLabels = [
        'quidem' => 'architecto',
        'ipsa' => 'reiciendis',
        'est' => 'mollitia',
        'laborum' => 'dolores',
    ];
    $request->connectionProfileInput->cloudsql->settings->zone = 'dolorem';
    $request->connectionProfileInput->displayName = 'corporis';
    $request->connectionProfileInput->error = new Status();
    $request->connectionProfileInput->error->code = 128926;
    $request->connectionProfileInput->error->details = [
        [
            'omnis' => 'nemo',
            'minima' => 'excepturi',
        ],
        [
            'iure' => 'culpa',
        ],
        [
            'sapiente' => 'architecto',
            'mollitia' => 'dolorem',
            'culpa' => 'consequuntur',
            'repellat' => 'mollitia',
        ],
        [
            'numquam' => 'commodi',
            'quam' => 'molestiae',
            'velit' => 'error',
        ],
    ];
    $request->connectionProfileInput->error->message = 'quia';
    $request->connectionProfileInput->labels = [
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->connectionProfileInput->mysql = new MySqlConnectionProfileInput();
    $request->connectionProfileInput->mysql->cloudSqlId = 'odit';
    $request->connectionProfileInput->mysql->host = 'quo';
    $request->connectionProfileInput->mysql->password = 'sequi';
    $request->connectionProfileInput->mysql->port = 949572;
    $request->connectionProfileInput->mysql->ssl = new SslConfigInput();
    $request->connectionProfileInput->mysql->ssl->caCertificate = 'ipsam';
    $request->connectionProfileInput->mysql->ssl->clientCertificate = 'id';
    $request->connectionProfileInput->mysql->ssl->clientKey = 'possimus';
    $request->connectionProfileInput->mysql->username = 'Adrain_Boyer';
    $request->connectionProfileInput->name = 'Ryan Witting';
    $request->connectionProfileInput->oracle = new OracleConnectionProfileInput();
    $request->connectionProfileInput->oracle->databaseService = 'nihil';
    $request->connectionProfileInput->oracle->forwardSshConnectivity = new ForwardSshTunnelConnectivity();
    $request->connectionProfileInput->oracle->forwardSshConnectivity->hostname = 'lustrous-welcome.com';
    $request->connectionProfileInput->oracle->forwardSshConnectivity->password = 'omnis';
    $request->connectionProfileInput->oracle->forwardSshConnectivity->port = 451159;
    $request->connectionProfileInput->oracle->forwardSshConnectivity->privateKey = 'cum';
    $request->connectionProfileInput->oracle->forwardSshConnectivity->username = 'Aiyana.Batz';
    $request->connectionProfileInput->oracle->host = 'maiores';
    $request->connectionProfileInput->oracle->password = 'dicta';
    $request->connectionProfileInput->oracle->port = 359444;
    $request->connectionProfileInput->oracle->privateConnectivity = new PrivateConnectivity();
    $request->connectionProfileInput->oracle->privateConnectivity->privateConnection = 'dolore';
    $request->connectionProfileInput->oracle->staticServiceIpConnectivity = [
        'dicta' => 'harum',
        'enim' => 'accusamus',
    ];
    $request->connectionProfileInput->oracle->username = 'Harry21';
    $request->connectionProfileInput->postgresql = new PostgreSqlConnectionProfileInput();
    $request->connectionProfileInput->postgresql->cloudSqlId = 'quidem';
    $request->connectionProfileInput->postgresql->host = 'molestias';
    $request->connectionProfileInput->postgresql->password = 'excepturi';
    $request->connectionProfileInput->postgresql->port = 865103;
    $request->connectionProfileInput->postgresql->privateServiceConnectConnectivity = new PrivateServiceConnectConnectivity();
    $request->connectionProfileInput->postgresql->privateServiceConnectConnectivity->serviceAttachment = 'modi';
    $request->connectionProfileInput->postgresql->ssl = new SslConfigInput();
    $request->connectionProfileInput->postgresql->ssl->caCertificate = 'praesentium';
    $request->connectionProfileInput->postgresql->ssl->clientCertificate = 'rem';
    $request->connectionProfileInput->postgresql->ssl->clientKey = 'voluptates';
    $request->connectionProfileInput->postgresql->staticIpConnectivity = [
        'repudiandae' => 'sint',
    ];
    $request->connectionProfileInput->postgresql->username = 'Arnoldo31';
    $request->connectionProfileInput->provider = ConnectionProfileProviderEnum::DATABASE_PROVIDER_UNSPECIFIED;
    $request->connectionProfileInput->state = ConnectionProfileStateEnum::DELETING;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->connectionProfileId = 'distinctio';
    $request->fields = 'quibusdam';
    $request->key = 'labore';
    $request->oauthToken = 'modi';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->requestId = 'cupiditate';
    $request->skipValidation = false;
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'perferendis';
    $request->validateOnly = false;

    $requestSecurity = new DatamigrationProjectsLocationsConnectionProfilesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsConnectionProfilesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->