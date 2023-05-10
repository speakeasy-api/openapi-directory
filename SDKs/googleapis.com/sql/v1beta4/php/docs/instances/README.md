# instances

### Available Operations

* [sqlInstancesAddServerCa](#sqlinstancesaddserverca) - Add a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.
* [sqlInstancesClone](#sqlinstancesclone) - Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.
* [sqlInstancesDelete](#sqlinstancesdelete) - Deletes a Cloud SQL instance.
* [sqlInstancesDemoteMaster](#sqlinstancesdemotemaster) - Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
* [sqlInstancesExport](#sqlinstancesexport) - Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
* [sqlInstancesFailover](#sqlinstancesfailover) - Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.
* [sqlInstancesGet](#sqlinstancesget) - Retrieves a resource containing information about a Cloud SQL instance.
* [sqlInstancesImport](#sqlinstancesimport) - Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
* [sqlInstancesInsert](#sqlinstancesinsert) - Creates a new Cloud SQL instance.
* [sqlInstancesList](#sqlinstanceslist) - Lists instances under a given project.
* [sqlInstancesListServerCas](#sqlinstanceslistservercas) - Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.
* [sqlInstancesPatch](#sqlinstancespatch) - Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.
* [sqlInstancesPromoteReplica](#sqlinstancespromotereplica) - Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.
* [sqlInstancesResetSslConfig](#sqlinstancesresetsslconfig) - Deletes all client certificates and generates a new server SSL certificate for the instance.
* [sqlInstancesRestart](#sqlinstancesrestart) - Restarts a Cloud SQL instance.
* [sqlInstancesRestoreBackup](#sqlinstancesrestorebackup) - Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.
* [sqlInstancesRotateServerCa](#sqlinstancesrotateserverca) - Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.
* [sqlInstancesStartReplica](#sqlinstancesstartreplica) - Starts the replication in the read replica instance.
* [sqlInstancesStopReplica](#sqlinstancesstopreplica) - Stops the replication in the read replica instance.
* [sqlInstancesTruncateLog](#sqlinstancestruncatelog) - Truncate MySQL general and slow query log tables MySQL only.
* [sqlInstancesUpdate](#sqlinstancesupdate) - Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.

## sqlInstancesAddServerCa

Add a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesAddServerCaRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesAddServerCaSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesAddServerCaSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesAddServerCaSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesAddServerCaRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nobis';
    $request->fields = 'dolores';
    $request->instance = 'quis';
    $request->key = 'totam';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'eaque';
    $request->quotaUser = 'quis';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'eos';

    $requestSecurity = new SqlInstancesAddServerCaSecurity();
    $requestSecurity->option1 = new SqlInstancesAddServerCaSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesAddServerCa($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesClone

Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesCloneRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesCloneRequest;
use \OpenAPI\OpenAPI\Models\Shared\CloneContext;
use \OpenAPI\OpenAPI\Models\Shared\BinLogCoordinates;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesCloneSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesCloneSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesCloneSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesCloneRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instancesCloneRequest = new InstancesCloneRequest();
    $request->instancesCloneRequest->cloneContext = new CloneContext();
    $request->instancesCloneRequest->cloneContext->allocatedIpRange = 'dolores';
    $request->instancesCloneRequest->cloneContext->binLogCoordinates = new BinLogCoordinates();
    $request->instancesCloneRequest->cloneContext->binLogCoordinates->binLogFileName = 'minus';
    $request->instancesCloneRequest->cloneContext->binLogCoordinates->binLogPosition = 'quam';
    $request->instancesCloneRequest->cloneContext->binLogCoordinates->kind = 'dolor';
    $request->instancesCloneRequest->cloneContext->databaseNames = [
        'nostrum',
        'hic',
        'recusandae',
        'omnis',
    ];
    $request->instancesCloneRequest->cloneContext->destinationInstanceName = 'facilis';
    $request->instancesCloneRequest->cloneContext->kind = 'perspiciatis';
    $request->instancesCloneRequest->cloneContext->pitrTimestampMs = 'voluptatem';
    $request->instancesCloneRequest->cloneContext->pointInTime = 'porro';
    $request->instancesCloneRequest->cloneContext->preferredZone = 'consequuntur';
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eaque';
    $request->fields = 'occaecati';
    $request->instance = 'rerum';
    $request->key = 'adipisci';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->project = 'earum';
    $request->quotaUser = 'modi';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new SqlInstancesCloneSecurity();
    $requestSecurity->option1 = new SqlInstancesCloneSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesClone($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesDelete

Deletes a Cloud SQL instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'libero';
    $request->instance = 'delectus';
    $request->key = 'quaerat';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->project = 'aliquid';
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new SqlInstancesDeleteSecurity();
    $requestSecurity->option1 = new SqlInstancesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesDemoteMaster

Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesDemoteMasterRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesDemoteMasterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DemoteMasterContext;
use \OpenAPI\OpenAPI\Models\Shared\DemoteMasterConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DemoteMasterMySqlReplicaConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesDemoteMasterSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesDemoteMasterSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesDemoteMasterSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesDemoteMasterRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instancesDemoteMasterRequest = new InstancesDemoteMasterRequest();
    $request->instancesDemoteMasterRequest->demoteMasterContext = new DemoteMasterContext();
    $request->instancesDemoteMasterRequest->demoteMasterContext->kind = 'ipsum';
    $request->instancesDemoteMasterRequest->demoteMasterContext->masterInstanceName = 'hic';
    $request->instancesDemoteMasterRequest->demoteMasterContext->replicaConfiguration = new DemoteMasterConfiguration();
    $request->instancesDemoteMasterRequest->demoteMasterContext->replicaConfiguration->kind = 'excepturi';
    $request->instancesDemoteMasterRequest->demoteMasterContext->replicaConfiguration->mysqlReplicaConfiguration = new DemoteMasterMySqlReplicaConfiguration();
    $request->instancesDemoteMasterRequest->demoteMasterContext->replicaConfiguration->mysqlReplicaConfiguration->caCertificate = 'cum';
    $request->instancesDemoteMasterRequest->demoteMasterContext->replicaConfiguration->mysqlReplicaConfiguration->clientCertificate = 'voluptate';
    $request->instancesDemoteMasterRequest->demoteMasterContext->replicaConfiguration->mysqlReplicaConfiguration->clientKey = 'dignissimos';
    $request->instancesDemoteMasterRequest->demoteMasterContext->replicaConfiguration->mysqlReplicaConfiguration->kind = 'reiciendis';
    $request->instancesDemoteMasterRequest->demoteMasterContext->replicaConfiguration->mysqlReplicaConfiguration->password = 'amet';
    $request->instancesDemoteMasterRequest->demoteMasterContext->replicaConfiguration->mysqlReplicaConfiguration->username = 'Marina5';
    $request->instancesDemoteMasterRequest->demoteMasterContext->skipReplicationSetup = false;
    $request->instancesDemoteMasterRequest->demoteMasterContext->verifyGtidConsistency = false;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odio';
    $request->fields = 'quaerat';
    $request->instance = 'accusamus';
    $request->key = 'quidem';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'voluptas';
    $request->quotaUser = 'natus';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'atque';

    $requestSecurity = new SqlInstancesDemoteMasterSecurity();
    $requestSecurity->option1 = new SqlInstancesDemoteMasterSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesDemoteMaster($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesExport

Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportContext;
use \OpenAPI\OpenAPI\Models\Shared\ExportContextBakExportOptions;
use \OpenAPI\OpenAPI\Models\Shared\ExportContextCsvExportOptions;
use \OpenAPI\OpenAPI\Models\Shared\ExportContextFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExportContextSqlExportOptions;
use \OpenAPI\OpenAPI\Models\Shared\ExportContextSqlExportOptionsMysqlExportOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesExportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesExportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instancesExportRequest = new InstancesExportRequest();
    $request->instancesExportRequest->exportContext = new ExportContext();
    $request->instancesExportRequest->exportContext->bakExportOptions = new ExportContextBakExportOptions();
    $request->instancesExportRequest->exportContext->bakExportOptions->stripeCount = 854614;
    $request->instancesExportRequest->exportContext->bakExportOptions->striped = false;
    $request->instancesExportRequest->exportContext->csvExportOptions = new ExportContextCsvExportOptions();
    $request->instancesExportRequest->exportContext->csvExportOptions->escapeCharacter = 'ab';
    $request->instancesExportRequest->exportContext->csvExportOptions->fieldsTerminatedBy = 'soluta';
    $request->instancesExportRequest->exportContext->csvExportOptions->linesTerminatedBy = 'dolorum';
    $request->instancesExportRequest->exportContext->csvExportOptions->quoteCharacter = 'iusto';
    $request->instancesExportRequest->exportContext->csvExportOptions->selectQuery = 'voluptate';
    $request->instancesExportRequest->exportContext->databases = [
        'deleniti',
        'omnis',
        'necessitatibus',
    ];
    $request->instancesExportRequest->exportContext->fileType = ExportContextFileTypeEnum::CSV;
    $request->instancesExportRequest->exportContext->kind = 'asperiores';
    $request->instancesExportRequest->exportContext->offload = false;
    $request->instancesExportRequest->exportContext->sqlExportOptions = new ExportContextSqlExportOptions();
    $request->instancesExportRequest->exportContext->sqlExportOptions->mysqlExportOptions = new ExportContextSqlExportOptionsMysqlExportOptions();
    $request->instancesExportRequest->exportContext->sqlExportOptions->mysqlExportOptions->masterData = 469497;
    $request->instancesExportRequest->exportContext->sqlExportOptions->schemaOnly = false;
    $request->instancesExportRequest->exportContext->sqlExportOptions->tables = [
        'voluptate',
    ];
    $request->instancesExportRequest->exportContext->uri = 'https://untrue-dinghy.com';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'accusamus';
    $request->instance = 'ad';
    $request->key = 'saepe';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->project = 'deserunt';
    $request->quotaUser = 'provident';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'repellendus';

    $requestSecurity = new SqlInstancesExportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesExport($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesFailover

Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesFailoverRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesFailoverRequest;
use \OpenAPI\OpenAPI\Models\Shared\FailoverContext;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesFailoverSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesFailoverSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesFailoverSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesFailoverRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instancesFailoverRequest = new InstancesFailoverRequest();
    $request->instancesFailoverRequest->failoverContext = new FailoverContext();
    $request->instancesFailoverRequest->failoverContext->kind = 'similique';
    $request->instancesFailoverRequest->failoverContext->settingsVersion = 'alias';
    $request->accessToken = 'at';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'vel';
    $request->instance = 'quod';
    $request->key = 'officiis';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->project = 'dolorum';
    $request->quotaUser = 'a';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'harum';

    $requestSecurity = new SqlInstancesFailoverSecurity();
    $requestSecurity->option1 = new SqlInstancesFailoverSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesFailover($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesGet

Retrieves a resource containing information about a Cloud SQL instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tenetur';
    $request->fields = 'amet';
    $request->instance = 'tempore';
    $request->key = 'accusamus';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->project = 'enim';
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new SqlInstancesGetSecurity();
    $requestSecurity->option1 = new SqlInstancesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesGet($request, $requestSecurity);

    if ($response->databaseInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesImport

Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportContext;
use \OpenAPI\OpenAPI\Models\Shared\ImportContextBakImportOptions;
use \OpenAPI\OpenAPI\Models\Shared\ImportContextBakImportOptionsEncryptionOptions;
use \OpenAPI\OpenAPI\Models\Shared\ImportContextCsvImportOptions;
use \OpenAPI\OpenAPI\Models\Shared\ImportContextFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instancesImportRequest = new InstancesImportRequest();
    $request->instancesImportRequest->importContext = new ImportContext();
    $request->instancesImportRequest->importContext->bakImportOptions = new ImportContextBakImportOptions();
    $request->instancesImportRequest->importContext->bakImportOptions->encryptionOptions = new ImportContextBakImportOptionsEncryptionOptions();
    $request->instancesImportRequest->importContext->bakImportOptions->encryptionOptions->certPath = 'sit';
    $request->instancesImportRequest->importContext->bakImportOptions->encryptionOptions->pvkPassword = 'expedita';
    $request->instancesImportRequest->importContext->bakImportOptions->encryptionOptions->pvkPath = 'neque';
    $request->instancesImportRequest->importContext->bakImportOptions->striped = false;
    $request->instancesImportRequest->importContext->csvImportOptions = new ImportContextCsvImportOptions();
    $request->instancesImportRequest->importContext->csvImportOptions->columns = [
        'vel',
    ];
    $request->instancesImportRequest->importContext->csvImportOptions->escapeCharacter = 'libero';
    $request->instancesImportRequest->importContext->csvImportOptions->fieldsTerminatedBy = 'voluptas';
    $request->instancesImportRequest->importContext->csvImportOptions->linesTerminatedBy = 'deserunt';
    $request->instancesImportRequest->importContext->csvImportOptions->quoteCharacter = 'quam';
    $request->instancesImportRequest->importContext->csvImportOptions->table = 'ipsum';
    $request->instancesImportRequest->importContext->database = 'incidunt';
    $request->instancesImportRequest->importContext->fileType = ImportContextFileTypeEnum::SQL_FILE_TYPE_UNSPECIFIED;
    $request->instancesImportRequest->importContext->importUser = 'cupiditate';
    $request->instancesImportRequest->importContext->kind = 'maxime';
    $request->instancesImportRequest->importContext->uri = 'https://short-business.net';
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aspernatur';
    $request->fields = 'dolores';
    $request->instance = 'distinctio';
    $request->key = 'facilis';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->project = 'quam';
    $request->quotaUser = 'molestias';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new SqlInstancesImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesImport($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesInsert

Creates a new Cloud SQL instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceBackendTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceDatabaseVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskEncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DiskEncryptionStatus;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceFailoverReplica;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IpMapping;
use \OpenAPI\OpenAPI\Models\Shared\IpMappingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnPremisesConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InstanceReference;
use \OpenAPI\OpenAPI\Models\Shared\SqlOutOfDiskReport;
use \OpenAPI\OpenAPI\Models\Shared\SqlOutOfDiskReportSqlOutOfDiskStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplicaConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\MySqlReplicaConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SqlScheduledMaintenance;
use \OpenAPI\OpenAPI\Models\Shared\SslCert;
use \OpenAPI\OpenAPI\Models\Shared\Settings;
use \OpenAPI\OpenAPI\Models\Shared\SettingsActivationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqlActiveDirectoryConfig;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedMachineFeatures;
use \OpenAPI\OpenAPI\Models\Shared\SettingsAvailabilityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackupConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BackupRetentionSettings;
use \OpenAPI\OpenAPI\Models\Shared\BackupRetentionSettingsRetentionUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\SettingsConnectorEnforcementEnum;
use \OpenAPI\OpenAPI\Models\Shared\SettingsDataDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseFlags;
use \OpenAPI\OpenAPI\Models\Shared\DenyMaintenancePeriod;
use \OpenAPI\OpenAPI\Models\Shared\InsightsConfig;
use \OpenAPI\OpenAPI\Models\Shared\IpConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AclEntry;
use \OpenAPI\OpenAPI\Models\Shared\LocationPreference;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowUpdateTrackEnum;
use \OpenAPI\OpenAPI\Models\Shared\PasswordValidationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PasswordValidationPolicyComplexityEnum;
use \OpenAPI\OpenAPI\Models\Shared\SettingsPricingPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\SettingsReplicationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqlServerAuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceSuspensionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->databaseInstanceInput = new DatabaseInstanceInput();
    $request->databaseInstanceInput->backendType = DatabaseInstanceBackendTypeEnum::SQL_BACKEND_TYPE_UNSPECIFIED;
    $request->databaseInstanceInput->connectionName = 'magni';
    $request->databaseInstanceInput->currentDiskSize = 'odio';
    $request->databaseInstanceInput->databaseVersion = DatabaseInstanceDatabaseVersionEnum::MYSQL57;
    $request->databaseInstanceInput->diskEncryptionConfiguration = new DiskEncryptionConfiguration();
    $request->databaseInstanceInput->diskEncryptionConfiguration->kind = 'ullam';
    $request->databaseInstanceInput->diskEncryptionConfiguration->kmsKeyName = 'nam';
    $request->databaseInstanceInput->diskEncryptionStatus = new DiskEncryptionStatus();
    $request->databaseInstanceInput->diskEncryptionStatus->kind = 'hic';
    $request->databaseInstanceInput->diskEncryptionStatus->kmsKeyVersionName = 'voluptatem';
    $request->databaseInstanceInput->etag = 'cumque';
    $request->databaseInstanceInput->failoverReplica = new DatabaseInstanceFailoverReplica();
    $request->databaseInstanceInput->failoverReplica->available = false;
    $request->databaseInstanceInput->failoverReplica->name = 'Robin Bosco';
    $request->databaseInstanceInput->gceZone = 'veritatis';
    $request->databaseInstanceInput->instanceType = DatabaseInstanceInstanceTypeEnum::ON_PREMISES_INSTANCE;
    $request->databaseInstanceInput->ipAddresses = [
        new IpMapping(),
        new IpMapping(),
        new IpMapping(),
    ];
    $request->databaseInstanceInput->ipv6Address = 'tempore';
    $request->databaseInstanceInput->kind = 'cupiditate';
    $request->databaseInstanceInput->maintenanceVersion = 'aperiam';
    $request->databaseInstanceInput->masterInstanceName = 'delectus';
    $request->databaseInstanceInput->maxDiskSize = 'dolorem';
    $request->databaseInstanceInput->name = 'Clara Fisher Jr.';
    $request->databaseInstanceInput->onPremisesConfiguration = new OnPremisesConfiguration();
    $request->databaseInstanceInput->onPremisesConfiguration->caCertificate = 'aut';
    $request->databaseInstanceInput->onPremisesConfiguration->clientCertificate = 'quas';
    $request->databaseInstanceInput->onPremisesConfiguration->clientKey = 'itaque';
    $request->databaseInstanceInput->onPremisesConfiguration->dumpFilePath = 'consequatur';
    $request->databaseInstanceInput->onPremisesConfiguration->hostPort = 'est';
    $request->databaseInstanceInput->onPremisesConfiguration->kind = 'repellendus';
    $request->databaseInstanceInput->onPremisesConfiguration->password = 'porro';
    $request->databaseInstanceInput->onPremisesConfiguration->sourceInstance = new InstanceReference();
    $request->databaseInstanceInput->onPremisesConfiguration->sourceInstance->name = 'Alexander Prosacco';
    $request->databaseInstanceInput->onPremisesConfiguration->sourceInstance->project = 'quae';
    $request->databaseInstanceInput->onPremisesConfiguration->sourceInstance->region = 'laudantium';
    $request->databaseInstanceInput->onPremisesConfiguration->username = 'Jeanette_McClure87';
    $request->databaseInstanceInput->outOfDiskReport = new SqlOutOfDiskReport();
    $request->databaseInstanceInput->outOfDiskReport->sqlMinRecommendedIncreaseSizeGb = 606476;
    $request->databaseInstanceInput->outOfDiskReport->sqlOutOfDiskState = SqlOutOfDiskReportSqlOutOfDiskStateEnum::NORMAL;
    $request->databaseInstanceInput->project = 'ipsum';
    $request->databaseInstanceInput->region = 'delectus';
    $request->databaseInstanceInput->replicaConfiguration = new ReplicaConfiguration();
    $request->databaseInstanceInput->replicaConfiguration->failoverTarget = false;
    $request->databaseInstanceInput->replicaConfiguration->kind = 'voluptate';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration = new MySqlReplicaConfiguration();
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->caCertificate = 'consectetur';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->clientCertificate = 'vero';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->clientKey = 'tenetur';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->connectRetryInterval = 492268;
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->dumpFilePath = 'hic';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->kind = 'distinctio';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->masterHeartbeatPeriod = 'quod';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->password = 'odio';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->sslCipher = 'similique';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->username = 'Melody.Swift';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->verifyServerCertificate = false;
    $request->databaseInstanceInput->replicaNames = [
        'illum',
        'sequi',
        'natus',
        'impedit',
    ];
    $request->databaseInstanceInput->rootPassword = 'aut';
    $request->databaseInstanceInput->satisfiesPzs = false;
    $request->databaseInstanceInput->scheduledMaintenance = new SqlScheduledMaintenance();
    $request->databaseInstanceInput->scheduledMaintenance->canDefer = false;
    $request->databaseInstanceInput->scheduledMaintenance->canReschedule = false;
    $request->databaseInstanceInput->scheduledMaintenance->scheduleDeadlineTime = 'voluptatibus';
    $request->databaseInstanceInput->scheduledMaintenance->startTime = 'exercitationem';
    $request->databaseInstanceInput->secondaryGceZone = 'nulla';
    $request->databaseInstanceInput->selfLink = 'fugit';
    $request->databaseInstanceInput->serverCaCert = new SslCert();
    $request->databaseInstanceInput->serverCaCert->cert = 'porro';
    $request->databaseInstanceInput->serverCaCert->certSerialNumber = 'maiores';
    $request->databaseInstanceInput->serverCaCert->commonName = 'doloribus';
    $request->databaseInstanceInput->serverCaCert->createTime = 'iusto';
    $request->databaseInstanceInput->serverCaCert->expirationTime = 'eligendi';
    $request->databaseInstanceInput->serverCaCert->instance = 'ducimus';
    $request->databaseInstanceInput->serverCaCert->kind = 'alias';
    $request->databaseInstanceInput->serverCaCert->selfLink = 'officia';
    $request->databaseInstanceInput->serverCaCert->sha1Fingerprint = 'tempora';
    $request->databaseInstanceInput->serviceAccountEmailAddress = 'ipsam';
    $request->databaseInstanceInput->settings = new Settings();
    $request->databaseInstanceInput->settings->activationPolicy = SettingsActivationPolicyEnum::ALWAYS;
    $request->databaseInstanceInput->settings->activeDirectoryConfig = new SqlActiveDirectoryConfig();
    $request->databaseInstanceInput->settings->activeDirectoryConfig->domain = 'aspernatur';
    $request->databaseInstanceInput->settings->activeDirectoryConfig->kind = 'vel';
    $request->databaseInstanceInput->settings->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->databaseInstanceInput->settings->advancedMachineFeatures->threadsPerCore = 822118;
    $request->databaseInstanceInput->settings->authorizedGaeApplications = [
        'ratione',
        'ex',
    ];
    $request->databaseInstanceInput->settings->availabilityType = SettingsAvailabilityTypeEnum::ZONAL;
    $request->databaseInstanceInput->settings->backupConfiguration = new BackupConfiguration();
    $request->databaseInstanceInput->settings->backupConfiguration->backupRetentionSettings = new BackupRetentionSettings();
    $request->databaseInstanceInput->settings->backupConfiguration->backupRetentionSettings->retainedBackups = 120657;
    $request->databaseInstanceInput->settings->backupConfiguration->backupRetentionSettings->retentionUnit = BackupRetentionSettingsRetentionUnitEnum::RETENTION_UNIT_UNSPECIFIED;
    $request->databaseInstanceInput->settings->backupConfiguration->binaryLogEnabled = false;
    $request->databaseInstanceInput->settings->backupConfiguration->enabled = false;
    $request->databaseInstanceInput->settings->backupConfiguration->kind = 'maiores';
    $request->databaseInstanceInput->settings->backupConfiguration->location = 'quasi';
    $request->databaseInstanceInput->settings->backupConfiguration->pointInTimeRecoveryEnabled = false;
    $request->databaseInstanceInput->settings->backupConfiguration->replicationLogArchivingEnabled = false;
    $request->databaseInstanceInput->settings->backupConfiguration->startTime = 'ex';
    $request->databaseInstanceInput->settings->backupConfiguration->transactionLogRetentionDays = 862192;
    $request->databaseInstanceInput->settings->collation = 'excepturi';
    $request->databaseInstanceInput->settings->connectorEnforcement = SettingsConnectorEnforcementEnum::REQUIRED;
    $request->databaseInstanceInput->settings->crashSafeReplicationEnabled = false;
    $request->databaseInstanceInput->settings->dataDiskSizeGb = 'nostrum';
    $request->databaseInstanceInput->settings->dataDiskType = SettingsDataDiskTypeEnum::OBSOLETE_LOCAL_SSD;
    $request->databaseInstanceInput->settings->databaseFlags = [
        new DatabaseFlags(),
        new DatabaseFlags(),
        new DatabaseFlags(),
        new DatabaseFlags(),
    ];
    $request->databaseInstanceInput->settings->databaseReplicationEnabled = false;
    $request->databaseInstanceInput->settings->deletionProtectionEnabled = false;
    $request->databaseInstanceInput->settings->denyMaintenancePeriods = [
        new DenyMaintenancePeriod(),
        new DenyMaintenancePeriod(),
        new DenyMaintenancePeriod(),
        new DenyMaintenancePeriod(),
    ];
    $request->databaseInstanceInput->settings->insightsConfig = new InsightsConfig();
    $request->databaseInstanceInput->settings->insightsConfig->queryInsightsEnabled = false;
    $request->databaseInstanceInput->settings->insightsConfig->queryPlansPerMinute = 411372;
    $request->databaseInstanceInput->settings->insightsConfig->queryStringLength = 774048;
    $request->databaseInstanceInput->settings->insightsConfig->recordApplicationTags = false;
    $request->databaseInstanceInput->settings->insightsConfig->recordClientAddress = false;
    $request->databaseInstanceInput->settings->ipConfiguration = new IpConfiguration();
    $request->databaseInstanceInput->settings->ipConfiguration->allocatedIpRange = 'corporis';
    $request->databaseInstanceInput->settings->ipConfiguration->authorizedNetworks = [
        new AclEntry(),
        new AclEntry(),
    ];
    $request->databaseInstanceInput->settings->ipConfiguration->enablePrivatePathForGoogleCloudServices = false;
    $request->databaseInstanceInput->settings->ipConfiguration->ipv4Enabled = false;
    $request->databaseInstanceInput->settings->ipConfiguration->privateNetwork = 'aliquid';
    $request->databaseInstanceInput->settings->ipConfiguration->requireSsl = false;
    $request->databaseInstanceInput->settings->kind = 'inventore';
    $request->databaseInstanceInput->settings->locationPreference = new LocationPreference();
    $request->databaseInstanceInput->settings->locationPreference->followGaeApplication = 'magnam';
    $request->databaseInstanceInput->settings->locationPreference->kind = 'ea';
    $request->databaseInstanceInput->settings->locationPreference->secondaryZone = 'quo';
    $request->databaseInstanceInput->settings->locationPreference->zone = 'consectetur';
    $request->databaseInstanceInput->settings->maintenanceWindow = new MaintenanceWindow();
    $request->databaseInstanceInput->settings->maintenanceWindow->day = 926213;
    $request->databaseInstanceInput->settings->maintenanceWindow->hour = 132487;
    $request->databaseInstanceInput->settings->maintenanceWindow->kind = 'minima';
    $request->databaseInstanceInput->settings->maintenanceWindow->updateTrack = MaintenanceWindowUpdateTrackEnum::SQL_UPDATE_TRACK_UNSPECIFIED;
    $request->databaseInstanceInput->settings->passwordValidationPolicy = new PasswordValidationPolicy();
    $request->databaseInstanceInput->settings->passwordValidationPolicy->complexity = PasswordValidationPolicyComplexityEnum::COMPLEXITY_DEFAULT;
    $request->databaseInstanceInput->settings->passwordValidationPolicy->disallowUsernameSubstring = false;
    $request->databaseInstanceInput->settings->passwordValidationPolicy->enablePasswordPolicy = false;
    $request->databaseInstanceInput->settings->passwordValidationPolicy->minLength = 725595;
    $request->databaseInstanceInput->settings->passwordValidationPolicy->passwordChangeInterval = 'aut';
    $request->databaseInstanceInput->settings->passwordValidationPolicy->reuseInterval = 11427;
    $request->databaseInstanceInput->settings->pricingPlan = SettingsPricingPlanEnum::PACKAGE;
    $request->databaseInstanceInput->settings->replicationType = SettingsReplicationTypeEnum::ASYNCHRONOUS;
    $request->databaseInstanceInput->settings->settingsVersion = 'aliquam';
    $request->databaseInstanceInput->settings->sqlServerAuditConfig = new SqlServerAuditConfig();
    $request->databaseInstanceInput->settings->sqlServerAuditConfig->bucket = 'fugit';
    $request->databaseInstanceInput->settings->sqlServerAuditConfig->kind = 'accusamus';
    $request->databaseInstanceInput->settings->sqlServerAuditConfig->retentionInterval = 'inventore';
    $request->databaseInstanceInput->settings->sqlServerAuditConfig->uploadInterval = 'non';
    $request->databaseInstanceInput->settings->storageAutoResize = false;
    $request->databaseInstanceInput->settings->storageAutoResizeLimit = 'et';
    $request->databaseInstanceInput->settings->tier = 'dolorum';
    $request->databaseInstanceInput->settings->timeZone = 'laborum';
    $request->databaseInstanceInput->settings->userLabels = [
        'velit' => 'eum',
        'autem' => 'nobis',
        'quas' => 'assumenda',
        'nulla' => 'voluptas',
    ];
    $request->databaseInstanceInput->state = DatabaseInstanceStateEnum::MAINTENANCE;
    $request->databaseInstanceInput->suspensionReason = [
        DatabaseInstanceSuspensionReasonEnum::BILLING_ISSUE,
    ];
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'provident';
    $request->fields = 'ipsa';
    $request->key = 'molestiae';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->project = 'odio';
    $request->quotaUser = 'eius';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new SqlInstancesInsertSecurity();
    $requestSecurity->option1 = new SqlInstancesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesList

Lists instances under a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quidem';
    $request->fields = 'fugiat';
    $request->filter = 'ut';
    $request->key = 'eum';
    $request->maxResults = 379927;
    $request->oauthToken = 'assumenda';
    $request->pageToken = 'eos';
    $request->prettyPrint = false;
    $request->project = 'praesentium';
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new SqlInstancesListSecurity();
    $requestSecurity->option1 = new SqlInstancesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesList($request, $requestSecurity);

    if ($response->instancesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesListServerCas

Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesListServerCasRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesListServerCasSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesListServerCasSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesListServerCasSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesListServerCasRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'illum';
    $request->instance = 'quo';
    $request->key = 'fuga';
    $request->oauthToken = 'eius';
    $request->prettyPrint = false;
    $request->project = 'eos';
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new SqlInstancesListServerCasSecurity();
    $requestSecurity->option1 = new SqlInstancesListServerCasSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesListServerCas($request, $requestSecurity);

    if ($response->instancesListServerCasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesPatch

Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceBackendTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceDatabaseVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskEncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DiskEncryptionStatus;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceFailoverReplica;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IpMapping;
use \OpenAPI\OpenAPI\Models\Shared\IpMappingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnPremisesConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InstanceReference;
use \OpenAPI\OpenAPI\Models\Shared\SqlOutOfDiskReport;
use \OpenAPI\OpenAPI\Models\Shared\SqlOutOfDiskReportSqlOutOfDiskStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplicaConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\MySqlReplicaConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SqlScheduledMaintenance;
use \OpenAPI\OpenAPI\Models\Shared\SslCert;
use \OpenAPI\OpenAPI\Models\Shared\Settings;
use \OpenAPI\OpenAPI\Models\Shared\SettingsActivationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqlActiveDirectoryConfig;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedMachineFeatures;
use \OpenAPI\OpenAPI\Models\Shared\SettingsAvailabilityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackupConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BackupRetentionSettings;
use \OpenAPI\OpenAPI\Models\Shared\BackupRetentionSettingsRetentionUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\SettingsConnectorEnforcementEnum;
use \OpenAPI\OpenAPI\Models\Shared\SettingsDataDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseFlags;
use \OpenAPI\OpenAPI\Models\Shared\DenyMaintenancePeriod;
use \OpenAPI\OpenAPI\Models\Shared\InsightsConfig;
use \OpenAPI\OpenAPI\Models\Shared\IpConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AclEntry;
use \OpenAPI\OpenAPI\Models\Shared\LocationPreference;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowUpdateTrackEnum;
use \OpenAPI\OpenAPI\Models\Shared\PasswordValidationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PasswordValidationPolicyComplexityEnum;
use \OpenAPI\OpenAPI\Models\Shared\SettingsPricingPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\SettingsReplicationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqlServerAuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceSuspensionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->databaseInstanceInput = new DatabaseInstanceInput();
    $request->databaseInstanceInput->backendType = DatabaseInstanceBackendTypeEnum::FIRST_GEN;
    $request->databaseInstanceInput->connectionName = 'debitis';
    $request->databaseInstanceInput->currentDiskSize = 'ipsam';
    $request->databaseInstanceInput->databaseVersion = DatabaseInstanceDatabaseVersionEnum::MYSQL57;
    $request->databaseInstanceInput->diskEncryptionConfiguration = new DiskEncryptionConfiguration();
    $request->databaseInstanceInput->diskEncryptionConfiguration->kind = 'sequi';
    $request->databaseInstanceInput->diskEncryptionConfiguration->kmsKeyName = 'quo';
    $request->databaseInstanceInput->diskEncryptionStatus = new DiskEncryptionStatus();
    $request->databaseInstanceInput->diskEncryptionStatus->kind = 'esse';
    $request->databaseInstanceInput->diskEncryptionStatus->kmsKeyVersionName = 'recusandae';
    $request->databaseInstanceInput->etag = 'aperiam';
    $request->databaseInstanceInput->failoverReplica = new DatabaseInstanceFailoverReplica();
    $request->databaseInstanceInput->failoverReplica->available = false;
    $request->databaseInstanceInput->failoverReplica->name = 'Ms. Jermaine Kulas';
    $request->databaseInstanceInput->gceZone = 'accusamus';
    $request->databaseInstanceInput->instanceType = DatabaseInstanceInstanceTypeEnum::CLOUD_SQL_INSTANCE;
    $request->databaseInstanceInput->ipAddresses = [
        new IpMapping(),
        new IpMapping(),
    ];
    $request->databaseInstanceInput->ipv6Address = 'occaecati';
    $request->databaseInstanceInput->kind = 'commodi';
    $request->databaseInstanceInput->maintenanceVersion = 'sapiente';
    $request->databaseInstanceInput->masterInstanceName = 'dolores';
    $request->databaseInstanceInput->maxDiskSize = 'deserunt';
    $request->databaseInstanceInput->name = 'Carol Sawayn';
    $request->databaseInstanceInput->onPremisesConfiguration = new OnPremisesConfiguration();
    $request->databaseInstanceInput->onPremisesConfiguration->caCertificate = 'praesentium';
    $request->databaseInstanceInput->onPremisesConfiguration->clientCertificate = 'consequuntur';
    $request->databaseInstanceInput->onPremisesConfiguration->clientKey = 'deleniti';
    $request->databaseInstanceInput->onPremisesConfiguration->dumpFilePath = 'fugit';
    $request->databaseInstanceInput->onPremisesConfiguration->hostPort = 'fuga';
    $request->databaseInstanceInput->onPremisesConfiguration->kind = 'mollitia';
    $request->databaseInstanceInput->onPremisesConfiguration->password = 'incidunt';
    $request->databaseInstanceInput->onPremisesConfiguration->sourceInstance = new InstanceReference();
    $request->databaseInstanceInput->onPremisesConfiguration->sourceInstance->name = 'Roy Hansen';
    $request->databaseInstanceInput->onPremisesConfiguration->sourceInstance->project = 'sapiente';
    $request->databaseInstanceInput->onPremisesConfiguration->sourceInstance->region = 'consequuntur';
    $request->databaseInstanceInput->onPremisesConfiguration->username = 'Cicero_Christiansen54';
    $request->databaseInstanceInput->outOfDiskReport = new SqlOutOfDiskReport();
    $request->databaseInstanceInput->outOfDiskReport->sqlMinRecommendedIncreaseSizeGb = 92260;
    $request->databaseInstanceInput->outOfDiskReport->sqlOutOfDiskState = SqlOutOfDiskReportSqlOutOfDiskStateEnum::NORMAL;
    $request->databaseInstanceInput->project = 'eveniet';
    $request->databaseInstanceInput->region = 'accusamus';
    $request->databaseInstanceInput->replicaConfiguration = new ReplicaConfiguration();
    $request->databaseInstanceInput->replicaConfiguration->failoverTarget = false;
    $request->databaseInstanceInput->replicaConfiguration->kind = 'veritatis';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration = new MySqlReplicaConfiguration();
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->caCertificate = 'esse';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->clientCertificate = 'quod';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->clientKey = 'nam';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->connectRetryInterval = 877131;
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->dumpFilePath = 'aliquid';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->kind = 'quasi';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->masterHeartbeatPeriod = 'saepe';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->password = 'vel';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->sslCipher = 'harum';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->username = 'Jared.Price';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->verifyServerCertificate = false;
    $request->databaseInstanceInput->replicaNames = [
        'eligendi',
        'sit',
        'culpa',
    ];
    $request->databaseInstanceInput->rootPassword = 'tempore';
    $request->databaseInstanceInput->satisfiesPzs = false;
    $request->databaseInstanceInput->scheduledMaintenance = new SqlScheduledMaintenance();
    $request->databaseInstanceInput->scheduledMaintenance->canDefer = false;
    $request->databaseInstanceInput->scheduledMaintenance->canReschedule = false;
    $request->databaseInstanceInput->scheduledMaintenance->scheduleDeadlineTime = 'adipisci';
    $request->databaseInstanceInput->scheduledMaintenance->startTime = 'cumque';
    $request->databaseInstanceInput->secondaryGceZone = 'consequuntur';
    $request->databaseInstanceInput->selfLink = 'consequatur';
    $request->databaseInstanceInput->serverCaCert = new SslCert();
    $request->databaseInstanceInput->serverCaCert->cert = 'minus';
    $request->databaseInstanceInput->serverCaCert->certSerialNumber = 'quaerat';
    $request->databaseInstanceInput->serverCaCert->commonName = 'sapiente';
    $request->databaseInstanceInput->serverCaCert->createTime = 'consectetur';
    $request->databaseInstanceInput->serverCaCert->expirationTime = 'esse';
    $request->databaseInstanceInput->serverCaCert->instance = 'blanditiis';
    $request->databaseInstanceInput->serverCaCert->kind = 'provident';
    $request->databaseInstanceInput->serverCaCert->selfLink = 'a';
    $request->databaseInstanceInput->serverCaCert->sha1Fingerprint = 'nulla';
    $request->databaseInstanceInput->serviceAccountEmailAddress = 'quas';
    $request->databaseInstanceInput->settings = new Settings();
    $request->databaseInstanceInput->settings->activationPolicy = SettingsActivationPolicyEnum::ALWAYS;
    $request->databaseInstanceInput->settings->activeDirectoryConfig = new SqlActiveDirectoryConfig();
    $request->databaseInstanceInput->settings->activeDirectoryConfig->domain = 'quasi';
    $request->databaseInstanceInput->settings->activeDirectoryConfig->kind = 'a';
    $request->databaseInstanceInput->settings->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->databaseInstanceInput->settings->advancedMachineFeatures->threadsPerCore = 621679;
    $request->databaseInstanceInput->settings->authorizedGaeApplications = [
        'pariatur',
        'possimus',
        'quia',
    ];
    $request->databaseInstanceInput->settings->availabilityType = SettingsAvailabilityTypeEnum::REGIONAL;
    $request->databaseInstanceInput->settings->backupConfiguration = new BackupConfiguration();
    $request->databaseInstanceInput->settings->backupConfiguration->backupRetentionSettings = new BackupRetentionSettings();
    $request->databaseInstanceInput->settings->backupConfiguration->backupRetentionSettings->retainedBackups = 992430;
    $request->databaseInstanceInput->settings->backupConfiguration->backupRetentionSettings->retentionUnit = BackupRetentionSettingsRetentionUnitEnum::COUNT;
    $request->databaseInstanceInput->settings->backupConfiguration->binaryLogEnabled = false;
    $request->databaseInstanceInput->settings->backupConfiguration->enabled = false;
    $request->databaseInstanceInput->settings->backupConfiguration->kind = 'veritatis';
    $request->databaseInstanceInput->settings->backupConfiguration->location = 'consequuntur';
    $request->databaseInstanceInput->settings->backupConfiguration->pointInTimeRecoveryEnabled = false;
    $request->databaseInstanceInput->settings->backupConfiguration->replicationLogArchivingEnabled = false;
    $request->databaseInstanceInput->settings->backupConfiguration->startTime = 'quasi';
    $request->databaseInstanceInput->settings->backupConfiguration->transactionLogRetentionDays = 628899;
    $request->databaseInstanceInput->settings->collation = 'culpa';
    $request->databaseInstanceInput->settings->connectorEnforcement = SettingsConnectorEnforcementEnum::NOT_REQUIRED;
    $request->databaseInstanceInput->settings->crashSafeReplicationEnabled = false;
    $request->databaseInstanceInput->settings->dataDiskSizeGb = 'tenetur';
    $request->databaseInstanceInput->settings->dataDiskType = SettingsDataDiskTypeEnum::SQL_DATA_DISK_TYPE_UNSPECIFIED;
    $request->databaseInstanceInput->settings->databaseFlags = [
        new DatabaseFlags(),
        new DatabaseFlags(),
        new DatabaseFlags(),
        new DatabaseFlags(),
    ];
    $request->databaseInstanceInput->settings->databaseReplicationEnabled = false;
    $request->databaseInstanceInput->settings->deletionProtectionEnabled = false;
    $request->databaseInstanceInput->settings->denyMaintenancePeriods = [
        new DenyMaintenancePeriod(),
        new DenyMaintenancePeriod(),
    ];
    $request->databaseInstanceInput->settings->insightsConfig = new InsightsConfig();
    $request->databaseInstanceInput->settings->insightsConfig->queryInsightsEnabled = false;
    $request->databaseInstanceInput->settings->insightsConfig->queryPlansPerMinute = 447378;
    $request->databaseInstanceInput->settings->insightsConfig->queryStringLength = 258684;
    $request->databaseInstanceInput->settings->insightsConfig->recordApplicationTags = false;
    $request->databaseInstanceInput->settings->insightsConfig->recordClientAddress = false;
    $request->databaseInstanceInput->settings->ipConfiguration = new IpConfiguration();
    $request->databaseInstanceInput->settings->ipConfiguration->allocatedIpRange = 'libero';
    $request->databaseInstanceInput->settings->ipConfiguration->authorizedNetworks = [
        new AclEntry(),
        new AclEntry(),
        new AclEntry(),
        new AclEntry(),
    ];
    $request->databaseInstanceInput->settings->ipConfiguration->enablePrivatePathForGoogleCloudServices = false;
    $request->databaseInstanceInput->settings->ipConfiguration->ipv4Enabled = false;
    $request->databaseInstanceInput->settings->ipConfiguration->privateNetwork = 'soluta';
    $request->databaseInstanceInput->settings->ipConfiguration->requireSsl = false;
    $request->databaseInstanceInput->settings->kind = 'accusantium';
    $request->databaseInstanceInput->settings->locationPreference = new LocationPreference();
    $request->databaseInstanceInput->settings->locationPreference->followGaeApplication = 'aliquam';
    $request->databaseInstanceInput->settings->locationPreference->kind = 'sapiente';
    $request->databaseInstanceInput->settings->locationPreference->secondaryZone = 'dicta';
    $request->databaseInstanceInput->settings->locationPreference->zone = 'ullam';
    $request->databaseInstanceInput->settings->maintenanceWindow = new MaintenanceWindow();
    $request->databaseInstanceInput->settings->maintenanceWindow->day = 443879;
    $request->databaseInstanceInput->settings->maintenanceWindow->hour = 356707;
    $request->databaseInstanceInput->settings->maintenanceWindow->kind = 'nisi';
    $request->databaseInstanceInput->settings->maintenanceWindow->updateTrack = MaintenanceWindowUpdateTrackEnum::SQL_UPDATE_TRACK_UNSPECIFIED;
    $request->databaseInstanceInput->settings->passwordValidationPolicy = new PasswordValidationPolicy();
    $request->databaseInstanceInput->settings->passwordValidationPolicy->complexity = PasswordValidationPolicyComplexityEnum::COMPLEXITY_DEFAULT;
    $request->databaseInstanceInput->settings->passwordValidationPolicy->disallowUsernameSubstring = false;
    $request->databaseInstanceInput->settings->passwordValidationPolicy->enablePasswordPolicy = false;
    $request->databaseInstanceInput->settings->passwordValidationPolicy->minLength = 185232;
    $request->databaseInstanceInput->settings->passwordValidationPolicy->passwordChangeInterval = 'quibusdam';
    $request->databaseInstanceInput->settings->passwordValidationPolicy->reuseInterval = 401259;
    $request->databaseInstanceInput->settings->pricingPlan = SettingsPricingPlanEnum::PACKAGE;
    $request->databaseInstanceInput->settings->replicationType = SettingsReplicationTypeEnum::ASYNCHRONOUS;
    $request->databaseInstanceInput->settings->settingsVersion = 'dolorum';
    $request->databaseInstanceInput->settings->sqlServerAuditConfig = new SqlServerAuditConfig();
    $request->databaseInstanceInput->settings->sqlServerAuditConfig->bucket = 'architecto';
    $request->databaseInstanceInput->settings->sqlServerAuditConfig->kind = 'omnis';
    $request->databaseInstanceInput->settings->sqlServerAuditConfig->retentionInterval = 'tenetur';
    $request->databaseInstanceInput->settings->sqlServerAuditConfig->uploadInterval = 'quasi';
    $request->databaseInstanceInput->settings->storageAutoResize = false;
    $request->databaseInstanceInput->settings->storageAutoResizeLimit = 'at';
    $request->databaseInstanceInput->settings->tier = 'et';
    $request->databaseInstanceInput->settings->timeZone = 'voluptate';
    $request->databaseInstanceInput->settings->userLabels = [
        'minima' => 'veritatis',
    ];
    $request->databaseInstanceInput->state = DatabaseInstanceStateEnum::RUNNABLE;
    $request->databaseInstanceInput->suspensionReason = [
        DatabaseInstanceSuspensionReasonEnum::OPERATIONAL_ISSUE,
    ];
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'rem';
    $request->fields = 'aut';
    $request->instance = 'laudantium';
    $request->key = 'eum';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->project = 'ab';
    $request->quotaUser = 'corrupti';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'voluptatem';

    $requestSecurity = new SqlInstancesPatchSecurity();
    $requestSecurity->option1 = new SqlInstancesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesPromoteReplica

Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesPromoteReplicaRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesPromoteReplicaSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesPromoteReplicaSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesPromoteReplicaSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesPromoteReplicaRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'explicabo';
    $request->instance = 'voluptas';
    $request->key = 'aut';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'maiores';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new SqlInstancesPromoteReplicaSecurity();
    $requestSecurity->option1 = new SqlInstancesPromoteReplicaSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesPromoteReplica($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesResetSslConfig

Deletes all client certificates and generates a new server SSL certificate for the instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesResetSslConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesResetSslConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesResetSslConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesResetSslConfigSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesResetSslConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aperiam';
    $request->fields = 'ea';
    $request->instance = 'quaerat';
    $request->key = 'consequuntur';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'maxime';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new SqlInstancesResetSslConfigSecurity();
    $requestSecurity->option1 = new SqlInstancesResetSslConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesResetSslConfig($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesRestart

Restarts a Cloud SQL instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesRestartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesRestartSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesRestartSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesRestartSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesRestartRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quaerat';
    $request->fields = 'porro';
    $request->instance = 'quod';
    $request->key = 'labore';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->project = 'adipisci';
    $request->quotaUser = 'fuga';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new SqlInstancesRestartSecurity();
    $requestSecurity->option1 = new SqlInstancesRestartSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesRestart($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesRestoreBackup

Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesRestoreBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesRestoreBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreBackupContext;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesRestoreBackupSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesRestoreBackupSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesRestoreBackupSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesRestoreBackupRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instancesRestoreBackupRequest = new InstancesRestoreBackupRequest();
    $request->instancesRestoreBackupRequest->restoreBackupContext = new RestoreBackupContext();
    $request->instancesRestoreBackupRequest->restoreBackupContext->backupRunId = 'culpa';
    $request->instancesRestoreBackupRequest->restoreBackupContext->instanceId = 'est';
    $request->instancesRestoreBackupRequest->restoreBackupContext->kind = 'recusandae';
    $request->instancesRestoreBackupRequest->restoreBackupContext->project = 'totam';
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ducimus';
    $request->fields = 'quos';
    $request->instance = 'vel';
    $request->key = 'labore';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->project = 'facilis';
    $request->quotaUser = 'cum';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'in';

    $requestSecurity = new SqlInstancesRestoreBackupSecurity();
    $requestSecurity->option1 = new SqlInstancesRestoreBackupSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesRestoreBackup($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesRotateServerCa

Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesRotateServerCaRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesRotateServerCaRequest;
use \OpenAPI\OpenAPI\Models\Shared\RotateServerCaContext;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesRotateServerCaSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesRotateServerCaSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesRotateServerCaSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesRotateServerCaRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instancesRotateServerCaRequest = new InstancesRotateServerCaRequest();
    $request->instancesRotateServerCaRequest->rotateServerCaContext = new RotateServerCaContext();
    $request->instancesRotateServerCaRequest->rotateServerCaContext->kind = 'reiciendis';
    $request->instancesRotateServerCaRequest->rotateServerCaContext->nextVersion = 'assumenda';
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquid';
    $request->fields = 'aperiam';
    $request->instance = 'cum';
    $request->key = 'consectetur';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->project = 'exercitationem';
    $request->quotaUser = 'earum';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new SqlInstancesRotateServerCaSecurity();
    $requestSecurity->option1 = new SqlInstancesRotateServerCaSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesRotateServerCa($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesStartReplica

Starts the replication in the read replica instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesStartReplicaRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesStartReplicaSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesStartReplicaSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesStartReplicaSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesStartReplicaRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'saepe';
    $request->instance = 'necessitatibus';
    $request->key = 'dolore';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new SqlInstancesStartReplicaSecurity();
    $requestSecurity->option1 = new SqlInstancesStartReplicaSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesStartReplica($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesStopReplica

Stops the replication in the read replica instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesStopReplicaRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesStopReplicaSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesStopReplicaSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesStopReplicaSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesStopReplicaRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'debitis';
    $request->fields = 'consectetur';
    $request->instance = 'corporis';
    $request->key = 'harum';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->project = 'ipsa';
    $request->quotaUser = 'voluptates';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'vitae';

    $requestSecurity = new SqlInstancesStopReplicaSecurity();
    $requestSecurity->option1 = new SqlInstancesStopReplicaSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesStopReplica($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesTruncateLog

Truncate MySQL general and slow query log tables MySQL only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesTruncateLogRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesTruncateLogRequest;
use \OpenAPI\OpenAPI\Models\Shared\TruncateLogContext;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesTruncateLogSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesTruncateLogSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesTruncateLogSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesTruncateLogRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instancesTruncateLogRequest = new InstancesTruncateLogRequest();
    $request->instancesTruncateLogRequest->truncateLogContext = new TruncateLogContext();
    $request->instancesTruncateLogRequest->truncateLogContext->kind = 'similique';
    $request->instancesTruncateLogRequest->truncateLogContext->logType = 'tempora';
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptas';
    $request->fields = 'voluptas';
    $request->instance = 'minima';
    $request->key = 'nobis';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->project = 'adipisci';
    $request->quotaUser = 'minus';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new SqlInstancesTruncateLogSecurity();
    $requestSecurity->option1 = new SqlInstancesTruncateLogSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesTruncateLog($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlInstancesUpdate

Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceBackendTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceDatabaseVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskEncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DiskEncryptionStatus;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceFailoverReplica;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IpMapping;
use \OpenAPI\OpenAPI\Models\Shared\IpMappingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnPremisesConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InstanceReference;
use \OpenAPI\OpenAPI\Models\Shared\SqlOutOfDiskReport;
use \OpenAPI\OpenAPI\Models\Shared\SqlOutOfDiskReportSqlOutOfDiskStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplicaConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\MySqlReplicaConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SqlScheduledMaintenance;
use \OpenAPI\OpenAPI\Models\Shared\SslCert;
use \OpenAPI\OpenAPI\Models\Shared\Settings;
use \OpenAPI\OpenAPI\Models\Shared\SettingsActivationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqlActiveDirectoryConfig;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedMachineFeatures;
use \OpenAPI\OpenAPI\Models\Shared\SettingsAvailabilityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackupConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BackupRetentionSettings;
use \OpenAPI\OpenAPI\Models\Shared\BackupRetentionSettingsRetentionUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\SettingsConnectorEnforcementEnum;
use \OpenAPI\OpenAPI\Models\Shared\SettingsDataDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseFlags;
use \OpenAPI\OpenAPI\Models\Shared\DenyMaintenancePeriod;
use \OpenAPI\OpenAPI\Models\Shared\InsightsConfig;
use \OpenAPI\OpenAPI\Models\Shared\IpConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AclEntry;
use \OpenAPI\OpenAPI\Models\Shared\LocationPreference;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowUpdateTrackEnum;
use \OpenAPI\OpenAPI\Models\Shared\PasswordValidationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PasswordValidationPolicyComplexityEnum;
use \OpenAPI\OpenAPI\Models\Shared\SettingsPricingPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\SettingsReplicationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqlServerAuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceSuspensionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlInstancesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlInstancesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->databaseInstanceInput = new DatabaseInstanceInput();
    $request->databaseInstanceInput->backendType = DatabaseInstanceBackendTypeEnum::FIRST_GEN;
    $request->databaseInstanceInput->connectionName = 'aliquam';
    $request->databaseInstanceInput->currentDiskSize = 'officiis';
    $request->databaseInstanceInput->databaseVersion = DatabaseInstanceDatabaseVersionEnum::MYSQL8035;
    $request->databaseInstanceInput->diskEncryptionConfiguration = new DiskEncryptionConfiguration();
    $request->databaseInstanceInput->diskEncryptionConfiguration->kind = 'ullam';
    $request->databaseInstanceInput->diskEncryptionConfiguration->kmsKeyName = 'adipisci';
    $request->databaseInstanceInput->diskEncryptionStatus = new DiskEncryptionStatus();
    $request->databaseInstanceInput->diskEncryptionStatus->kind = 'cum';
    $request->databaseInstanceInput->diskEncryptionStatus->kmsKeyVersionName = 'blanditiis';
    $request->databaseInstanceInput->etag = 'quas';
    $request->databaseInstanceInput->failoverReplica = new DatabaseInstanceFailoverReplica();
    $request->databaseInstanceInput->failoverReplica->available = false;
    $request->databaseInstanceInput->failoverReplica->name = 'Danny Nader';
    $request->databaseInstanceInput->gceZone = 'totam';
    $request->databaseInstanceInput->instanceType = DatabaseInstanceInstanceTypeEnum::READ_REPLICA_INSTANCE;
    $request->databaseInstanceInput->ipAddresses = [
        new IpMapping(),
        new IpMapping(),
    ];
    $request->databaseInstanceInput->ipv6Address = 'nobis';
    $request->databaseInstanceInput->kind = 'sit';
    $request->databaseInstanceInput->maintenanceVersion = 'rerum';
    $request->databaseInstanceInput->masterInstanceName = 'sed';
    $request->databaseInstanceInput->maxDiskSize = 'reiciendis';
    $request->databaseInstanceInput->name = 'Jaime Quigley';
    $request->databaseInstanceInput->onPremisesConfiguration = new OnPremisesConfiguration();
    $request->databaseInstanceInput->onPremisesConfiguration->caCertificate = 'ab';
    $request->databaseInstanceInput->onPremisesConfiguration->clientCertificate = 'iste';
    $request->databaseInstanceInput->onPremisesConfiguration->clientKey = 'dolore';
    $request->databaseInstanceInput->onPremisesConfiguration->dumpFilePath = 'laborum';
    $request->databaseInstanceInput->onPremisesConfiguration->hostPort = 'sed';
    $request->databaseInstanceInput->onPremisesConfiguration->kind = 'in';
    $request->databaseInstanceInput->onPremisesConfiguration->password = 'commodi';
    $request->databaseInstanceInput->onPremisesConfiguration->sourceInstance = new InstanceReference();
    $request->databaseInstanceInput->onPremisesConfiguration->sourceInstance->name = 'Benjamin Hodkiewicz III';
    $request->databaseInstanceInput->onPremisesConfiguration->sourceInstance->project = 'sapiente';
    $request->databaseInstanceInput->onPremisesConfiguration->sourceInstance->region = 'debitis';
    $request->databaseInstanceInput->onPremisesConfiguration->username = 'Antonina54';
    $request->databaseInstanceInput->outOfDiskReport = new SqlOutOfDiskReport();
    $request->databaseInstanceInput->outOfDiskReport->sqlMinRecommendedIncreaseSizeGb = 979574;
    $request->databaseInstanceInput->outOfDiskReport->sqlOutOfDiskState = SqlOutOfDiskReportSqlOutOfDiskStateEnum::SQL_OUT_OF_DISK_STATE_UNSPECIFIED;
    $request->databaseInstanceInput->project = 'sed';
    $request->databaseInstanceInput->region = 'provident';
    $request->databaseInstanceInput->replicaConfiguration = new ReplicaConfiguration();
    $request->databaseInstanceInput->replicaConfiguration->failoverTarget = false;
    $request->databaseInstanceInput->replicaConfiguration->kind = 'eius';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration = new MySqlReplicaConfiguration();
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->caCertificate = 'necessitatibus';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->clientCertificate = 'ipsum';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->clientKey = 'ea';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->connectRetryInterval = 579912;
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->dumpFilePath = 'quos';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->kind = 'voluptatibus';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->masterHeartbeatPeriod = 'tempora';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->password = 'tempora';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->sslCipher = 'voluptate';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->username = 'Waldo24';
    $request->databaseInstanceInput->replicaConfiguration->mysqlReplicaConfiguration->verifyServerCertificate = false;
    $request->databaseInstanceInput->replicaNames = [
        'praesentium',
        'facilis',
        'quaerat',
        'incidunt',
    ];
    $request->databaseInstanceInput->rootPassword = 'ipsam';
    $request->databaseInstanceInput->satisfiesPzs = false;
    $request->databaseInstanceInput->scheduledMaintenance = new SqlScheduledMaintenance();
    $request->databaseInstanceInput->scheduledMaintenance->canDefer = false;
    $request->databaseInstanceInput->scheduledMaintenance->canReschedule = false;
    $request->databaseInstanceInput->scheduledMaintenance->scheduleDeadlineTime = 'debitis';
    $request->databaseInstanceInput->scheduledMaintenance->startTime = 'rem';
    $request->databaseInstanceInput->secondaryGceZone = 'sit';
    $request->databaseInstanceInput->selfLink = 'nobis';
    $request->databaseInstanceInput->serverCaCert = new SslCert();
    $request->databaseInstanceInput->serverCaCert->cert = 'error';
    $request->databaseInstanceInput->serverCaCert->certSerialNumber = 'veniam';
    $request->databaseInstanceInput->serverCaCert->commonName = 'minima';
    $request->databaseInstanceInput->serverCaCert->createTime = 'recusandae';
    $request->databaseInstanceInput->serverCaCert->expirationTime = 'reiciendis';
    $request->databaseInstanceInput->serverCaCert->instance = 'nulla';
    $request->databaseInstanceInput->serverCaCert->kind = 'magni';
    $request->databaseInstanceInput->serverCaCert->selfLink = 'aperiam';
    $request->databaseInstanceInput->serverCaCert->sha1Fingerprint = 'saepe';
    $request->databaseInstanceInput->serviceAccountEmailAddress = 'numquam';
    $request->databaseInstanceInput->settings = new Settings();
    $request->databaseInstanceInput->settings->activationPolicy = SettingsActivationPolicyEnum::ALWAYS;
    $request->databaseInstanceInput->settings->activeDirectoryConfig = new SqlActiveDirectoryConfig();
    $request->databaseInstanceInput->settings->activeDirectoryConfig->domain = 'in';
    $request->databaseInstanceInput->settings->activeDirectoryConfig->kind = 'officiis';
    $request->databaseInstanceInput->settings->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->databaseInstanceInput->settings->advancedMachineFeatures->threadsPerCore = 104627;
    $request->databaseInstanceInput->settings->authorizedGaeApplications = [
        'exercitationem',
        'praesentium',
        'cum',
    ];
    $request->databaseInstanceInput->settings->availabilityType = SettingsAvailabilityTypeEnum::ZONAL;
    $request->databaseInstanceInput->settings->backupConfiguration = new BackupConfiguration();
    $request->databaseInstanceInput->settings->backupConfiguration->backupRetentionSettings = new BackupRetentionSettings();
    $request->databaseInstanceInput->settings->backupConfiguration->backupRetentionSettings->retainedBackups = 680515;
    $request->databaseInstanceInput->settings->backupConfiguration->backupRetentionSettings->retentionUnit = BackupRetentionSettingsRetentionUnitEnum::COUNT;
    $request->databaseInstanceInput->settings->backupConfiguration->binaryLogEnabled = false;
    $request->databaseInstanceInput->settings->backupConfiguration->enabled = false;
    $request->databaseInstanceInput->settings->backupConfiguration->kind = 'error';
    $request->databaseInstanceInput->settings->backupConfiguration->location = 'hic';
    $request->databaseInstanceInput->settings->backupConfiguration->pointInTimeRecoveryEnabled = false;
    $request->databaseInstanceInput->settings->backupConfiguration->replicationLogArchivingEnabled = false;
    $request->databaseInstanceInput->settings->backupConfiguration->startTime = 'expedita';
    $request->databaseInstanceInput->settings->backupConfiguration->transactionLogRetentionDays = 892863;
    $request->databaseInstanceInput->settings->collation = 'neque';
    $request->databaseInstanceInput->settings->connectorEnforcement = SettingsConnectorEnforcementEnum::REQUIRED;
    $request->databaseInstanceInput->settings->crashSafeReplicationEnabled = false;
    $request->databaseInstanceInput->settings->dataDiskSizeGb = 'nostrum';
    $request->databaseInstanceInput->settings->dataDiskType = SettingsDataDiskTypeEnum::PD_HDD;
    $request->databaseInstanceInput->settings->databaseFlags = [
        new DatabaseFlags(),
        new DatabaseFlags(),
        new DatabaseFlags(),
    ];
    $request->databaseInstanceInput->settings->databaseReplicationEnabled = false;
    $request->databaseInstanceInput->settings->deletionProtectionEnabled = false;
    $request->databaseInstanceInput->settings->denyMaintenancePeriods = [
        new DenyMaintenancePeriod(),
        new DenyMaintenancePeriod(),
        new DenyMaintenancePeriod(),
    ];
    $request->databaseInstanceInput->settings->insightsConfig = new InsightsConfig();
    $request->databaseInstanceInput->settings->insightsConfig->queryInsightsEnabled = false;
    $request->databaseInstanceInput->settings->insightsConfig->queryPlansPerMinute = 879235;
    $request->databaseInstanceInput->settings->insightsConfig->queryStringLength = 272683;
    $request->databaseInstanceInput->settings->insightsConfig->recordApplicationTags = false;
    $request->databaseInstanceInput->settings->insightsConfig->recordClientAddress = false;
    $request->databaseInstanceInput->settings->ipConfiguration = new IpConfiguration();
    $request->databaseInstanceInput->settings->ipConfiguration->allocatedIpRange = 'atque';
    $request->databaseInstanceInput->settings->ipConfiguration->authorizedNetworks = [
        new AclEntry(),
    ];
    $request->databaseInstanceInput->settings->ipConfiguration->enablePrivatePathForGoogleCloudServices = false;
    $request->databaseInstanceInput->settings->ipConfiguration->ipv4Enabled = false;
    $request->databaseInstanceInput->settings->ipConfiguration->privateNetwork = 'ut';
    $request->databaseInstanceInput->settings->ipConfiguration->requireSsl = false;
    $request->databaseInstanceInput->settings->kind = 'fugiat';
    $request->databaseInstanceInput->settings->locationPreference = new LocationPreference();
    $request->databaseInstanceInput->settings->locationPreference->followGaeApplication = 'voluptatem';
    $request->databaseInstanceInput->settings->locationPreference->kind = 'culpa';
    $request->databaseInstanceInput->settings->locationPreference->secondaryZone = 'expedita';
    $request->databaseInstanceInput->settings->locationPreference->zone = 'magnam';
    $request->databaseInstanceInput->settings->maintenanceWindow = new MaintenanceWindow();
    $request->databaseInstanceInput->settings->maintenanceWindow->day = 7884;
    $request->databaseInstanceInput->settings->maintenanceWindow->hour = 460220;
    $request->databaseInstanceInput->settings->maintenanceWindow->kind = 'ipsam';
    $request->databaseInstanceInput->settings->maintenanceWindow->updateTrack = MaintenanceWindowUpdateTrackEnum::SQL_UPDATE_TRACK_UNSPECIFIED;
    $request->databaseInstanceInput->settings->passwordValidationPolicy = new PasswordValidationPolicy();
    $request->databaseInstanceInput->settings->passwordValidationPolicy->complexity = PasswordValidationPolicyComplexityEnum::COMPLEXITY_DEFAULT;
    $request->databaseInstanceInput->settings->passwordValidationPolicy->disallowUsernameSubstring = false;
    $request->databaseInstanceInput->settings->passwordValidationPolicy->enablePasswordPolicy = false;
    $request->databaseInstanceInput->settings->passwordValidationPolicy->minLength = 558065;
    $request->databaseInstanceInput->settings->passwordValidationPolicy->passwordChangeInterval = 'repudiandae';
    $request->databaseInstanceInput->settings->passwordValidationPolicy->reuseInterval = 361151;
    $request->databaseInstanceInput->settings->pricingPlan = SettingsPricingPlanEnum::SQL_PRICING_PLAN_UNSPECIFIED;
    $request->databaseInstanceInput->settings->replicationType = SettingsReplicationTypeEnum::SYNCHRONOUS;
    $request->databaseInstanceInput->settings->settingsVersion = 'ex';
    $request->databaseInstanceInput->settings->sqlServerAuditConfig = new SqlServerAuditConfig();
    $request->databaseInstanceInput->settings->sqlServerAuditConfig->bucket = 'sed';
    $request->databaseInstanceInput->settings->sqlServerAuditConfig->kind = 'sit';
    $request->databaseInstanceInput->settings->sqlServerAuditConfig->retentionInterval = 'vel';
    $request->databaseInstanceInput->settings->sqlServerAuditConfig->uploadInterval = 'nostrum';
    $request->databaseInstanceInput->settings->storageAutoResize = false;
    $request->databaseInstanceInput->settings->storageAutoResizeLimit = 'saepe';
    $request->databaseInstanceInput->settings->tier = 'error';
    $request->databaseInstanceInput->settings->timeZone = 'consequatur';
    $request->databaseInstanceInput->settings->userLabels = [
        'reiciendis' => 'dolorem',
        'harum' => 'dicta',
    ];
    $request->databaseInstanceInput->state = DatabaseInstanceStateEnum::SQL_INSTANCE_STATE_UNSPECIFIED;
    $request->databaseInstanceInput->suspensionReason = [
        DatabaseInstanceSuspensionReasonEnum::BILLING_ISSUE,
        DatabaseInstanceSuspensionReasonEnum::OPERATIONAL_ISSUE,
        DatabaseInstanceSuspensionReasonEnum::LEGAL_ISSUE,
    ];
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tenetur';
    $request->fields = 'laboriosam';
    $request->instance = 'alias';
    $request->key = 'amet';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'voluptate';
    $request->quotaUser = 'unde';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new SqlInstancesUpdateSecurity();
    $requestSecurity->option1 = new SqlInstancesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->sqlInstancesUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
