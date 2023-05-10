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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [datamigrationProjectsLocationsConnectionProfilesCreate](docs/projects/README.md#datamigrationprojectslocationsconnectionprofilescreate) - Creates a new connection profile in a given project and location.
* [datamigrationProjectsLocationsConnectionProfilesList](docs/projects/README.md#datamigrationprojectslocationsconnectionprofileslist) - Retrieve a list of all connection profiles in a given project and location.
* [datamigrationProjectsLocationsList](docs/projects/README.md#datamigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [datamigrationProjectsLocationsMigrationJobsCreate](docs/projects/README.md#datamigrationprojectslocationsmigrationjobscreate) - Creates a new migration job in a given project and location.
* [datamigrationProjectsLocationsMigrationJobsGenerateSshScript](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsgeneratesshscript) - Generate a SSH configuration script to configure the reverse SSH connectivity.
* [datamigrationProjectsLocationsMigrationJobsGetIamPolicy](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [datamigrationProjectsLocationsMigrationJobsList](docs/projects/README.md#datamigrationprojectslocationsmigrationjobslist) - Lists migration jobs in a given project and location.
* [datamigrationProjectsLocationsMigrationJobsPatch](docs/projects/README.md#datamigrationprojectslocationsmigrationjobspatch) - Updates the parameters of a single migration job.
* [datamigrationProjectsLocationsMigrationJobsPromote](docs/projects/README.md#datamigrationprojectslocationsmigrationjobspromote) - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* [datamigrationProjectsLocationsMigrationJobsRestart](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsrestart) - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* [datamigrationProjectsLocationsMigrationJobsResume](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsresume) - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* [datamigrationProjectsLocationsMigrationJobsSetIamPolicy](docs/projects/README.md#datamigrationprojectslocationsmigrationjobssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [datamigrationProjectsLocationsMigrationJobsStart](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsstart) - Start an already created migration job.
* [datamigrationProjectsLocationsMigrationJobsStop](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsstop) - Stops a running migration job.
* [datamigrationProjectsLocationsMigrationJobsTestIamPermissions](docs/projects/README.md#datamigrationprojectslocationsmigrationjobstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [datamigrationProjectsLocationsMigrationJobsVerify](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsverify) - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* [datamigrationProjectsLocationsOperationsCancel](docs/projects/README.md#datamigrationprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datamigrationProjectsLocationsOperationsDelete](docs/projects/README.md#datamigrationprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [datamigrationProjectsLocationsOperationsGet](docs/projects/README.md#datamigrationprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [datamigrationProjectsLocationsOperationsList](docs/projects/README.md#datamigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
