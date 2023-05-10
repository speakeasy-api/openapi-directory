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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [datamigrationProjectsLocationsConnectionProfilesCreate](docs/projects/README.md#datamigrationprojectslocationsconnectionprofilescreate) - Creates a new connection profile in a given project and location.
* [datamigrationProjectsLocationsConnectionProfilesList](docs/projects/README.md#datamigrationprojectslocationsconnectionprofileslist) - Retrieves a list of all connection profiles in a given project and location.
* [datamigrationProjectsLocationsConversionWorkspacesApply](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesapply) - Applies draft tree onto a specific destination database.
* [datamigrationProjectsLocationsConversionWorkspacesCommit](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacescommit) - Marks all the data in the conversion workspace as committed.
* [datamigrationProjectsLocationsConversionWorkspacesConvert](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesconvert) - Creates a draft tree schema for the destination database.
* [datamigrationProjectsLocationsConversionWorkspacesCreate](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacescreate) - Creates a new conversion workspace in a given project and location.
* [datamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesdescribeconversionworkspacerevisions) - Retrieves a list of committed revisions of a specific conversion workspace.
* [datamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesdescribedatabaseentities) - Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.
* [datamigrationProjectsLocationsConversionWorkspacesList](docs/projects/README.md#datamigrationprojectslocationsconversionworkspaceslist) - Lists conversion workspaces in a given project and location.
* [datamigrationProjectsLocationsConversionWorkspacesMappingRulesImport](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesmappingrulesimport) - Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.
* [datamigrationProjectsLocationsConversionWorkspacesRollback](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesrollback) - Rolls back a conversion workspace to the last committed snapshot.
* [datamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacessearchbackgroundjobs) - Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.
* [datamigrationProjectsLocationsConversionWorkspacesSeed](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesseed) - Imports a snapshot of the source database into the conversion workspace.
* [datamigrationProjectsLocationsFetchStaticIps](docs/projects/README.md#datamigrationprojectslocationsfetchstaticips) - Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.
* [datamigrationProjectsLocationsList](docs/projects/README.md#datamigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [datamigrationProjectsLocationsMigrationJobsCreate](docs/projects/README.md#datamigrationprojectslocationsmigrationjobscreate) - Creates a new migration job in a given project and location.
* [datamigrationProjectsLocationsMigrationJobsGenerateSshScript](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsgeneratesshscript) - Generate a SSH configuration script to configure the reverse SSH connectivity.
* [datamigrationProjectsLocationsMigrationJobsList](docs/projects/README.md#datamigrationprojectslocationsmigrationjobslist) - Lists migration jobs in a given project and location.
* [datamigrationProjectsLocationsMigrationJobsPatch](docs/projects/README.md#datamigrationprojectslocationsmigrationjobspatch) - Updates the parameters of a single migration job.
* [datamigrationProjectsLocationsMigrationJobsPromote](docs/projects/README.md#datamigrationprojectslocationsmigrationjobspromote) - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* [datamigrationProjectsLocationsMigrationJobsRestart](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsrestart) - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* [datamigrationProjectsLocationsMigrationJobsResume](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsresume) - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* [datamigrationProjectsLocationsMigrationJobsStart](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsstart) - Start an already created migration job.
* [datamigrationProjectsLocationsMigrationJobsStop](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsstop) - Stops a running migration job.
* [datamigrationProjectsLocationsMigrationJobsVerify](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsverify) - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* [datamigrationProjectsLocationsOperationsCancel](docs/projects/README.md#datamigrationprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datamigrationProjectsLocationsOperationsList](docs/projects/README.md#datamigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datamigrationProjectsLocationsPrivateConnectionsCreate](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionscreate) - Creates a new private connection in a given project and location.
* [datamigrationProjectsLocationsPrivateConnectionsDelete](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionsdelete) - Deletes a single Database Migration Service private connection.
* [datamigrationProjectsLocationsPrivateConnectionsGet](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionsget) - Gets details of a single private connection.
* [datamigrationProjectsLocationsPrivateConnectionsGetIamPolicy](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [datamigrationProjectsLocationsPrivateConnectionsList](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionslist) - Retrieves a list of private connections in a given project and location.
* [datamigrationProjectsLocationsPrivateConnectionsSetIamPolicy](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [datamigrationProjectsLocationsPrivateConnectionsTestIamPermissions](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
