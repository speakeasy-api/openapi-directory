<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConnectionProfilesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsActivationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsDataDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsDatabaseVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqlIpConfig;
use \OpenAPI\OpenAPI\Models\Shared\SqlAclEntry;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\MySqlConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\SslConfigInput;
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
    $request->connectionProfileInput->cloudsql = new CloudSqlConnectionProfileInput();
    $request->connectionProfileInput->cloudsql->settings = new CloudSqlSettingsInput();
    $request->connectionProfileInput->cloudsql->settings->activationPolicy = CloudSqlSettingsActivationPolicyEnum::ALWAYS;
    $request->connectionProfileInput->cloudsql->settings->autoStorageIncrease = false;
    $request->connectionProfileInput->cloudsql->settings->dataDiskSizeGb = 'distinctio';
    $request->connectionProfileInput->cloudsql->settings->dataDiskType = CloudSqlSettingsDataDiskTypeEnum::PD_HDD;
    $request->connectionProfileInput->cloudsql->settings->databaseFlags = [
        'nulla' => 'corrupti',
        'illum' => 'vel',
        'error' => 'deserunt',
    ];
    $request->connectionProfileInput->cloudsql->settings->databaseVersion = CloudSqlSettingsDatabaseVersionEnum::MYSQL56;
    $request->connectionProfileInput->cloudsql->settings->ipConfig = new SqlIpConfig();
    $request->connectionProfileInput->cloudsql->settings->ipConfig->authorizedNetworks = [
        new SqlAclEntry(),
        new SqlAclEntry(),
    ];
    $request->connectionProfileInput->cloudsql->settings->ipConfig->enableIpv4 = false;
    $request->connectionProfileInput->cloudsql->settings->ipConfig->privateNetwork = 'magnam';
    $request->connectionProfileInput->cloudsql->settings->ipConfig->requireSsl = false;
    $request->connectionProfileInput->cloudsql->settings->rootPassword = 'debitis';
    $request->connectionProfileInput->cloudsql->settings->sourceId = 'ipsa';
    $request->connectionProfileInput->cloudsql->settings->storageAutoResizeLimit = 'delectus';
    $request->connectionProfileInput->cloudsql->settings->tier = 'tempora';
    $request->connectionProfileInput->cloudsql->settings->userLabels = [
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];
    $request->connectionProfileInput->cloudsql->settings->zone = 'iusto';
    $request->connectionProfileInput->displayName = 'excepturi';
    $request->connectionProfileInput->error = new Status();
    $request->connectionProfileInput->error->code = 392785;
    $request->connectionProfileInput->error->details = [
        [
            'ab' => 'quis',
            'veritatis' => 'deserunt',
            'perferendis' => 'ipsam',
            'repellendus' => 'sapiente',
        ],
        [
            'odit' => 'at',
            'at' => 'maiores',
            'molestiae' => 'quod',
            'quod' => 'esse',
        ],
        [
            'porro' => 'dolorum',
            'dicta' => 'nam',
            'officia' => 'occaecati',
        ],
        [
            'deleniti' => 'hic',
        ],
    ];
    $request->connectionProfileInput->error->message = 'optio';
    $request->connectionProfileInput->labels = [
        'beatae' => 'commodi',
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->connectionProfileInput->mysql = new MySqlConnectionProfileInput();
    $request->connectionProfileInput->mysql->cloudSqlId = 'cum';
    $request->connectionProfileInput->mysql->host = 'esse';
    $request->connectionProfileInput->mysql->password = 'ipsum';
    $request->connectionProfileInput->mysql->port = 568434;
    $request->connectionProfileInput->mysql->ssl = new SslConfigInput();
    $request->connectionProfileInput->mysql->ssl->caCertificate = 'aspernatur';
    $request->connectionProfileInput->mysql->ssl->clientCertificate = 'perferendis';
    $request->connectionProfileInput->mysql->ssl->clientKey = 'ad';
    $request->connectionProfileInput->mysql->username = 'Lia.Cormier';
    $request->connectionProfileInput->name = 'Lester Welch';
    $request->connectionProfileInput->provider = ConnectionProfileProviderEnum::CLOUDSQL;
    $request->connectionProfileInput->state = ConnectionProfileStateEnum::CREATING;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->connectionProfileId = 'quidem';
    $request->fields = 'architecto';
    $request->key = 'ipsa';
    $request->oauthToken = 'reiciendis';
    $request->parent = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->requestId = 'laborum';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'dolorem';

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