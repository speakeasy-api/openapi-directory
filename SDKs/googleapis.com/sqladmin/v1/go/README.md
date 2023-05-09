# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/sqladmin/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BackupRuns.SQLBackupRunsDelete(ctx, operations.SQLBackupRunsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        ID: "d8d69a67-4e0f-4467-8c87-96ed151a05df",
        Instance: "quo",
        Key: sdk.String("odit"),
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        Project: "at",
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("quod"),
    }, operations.SQLBackupRunsDeleteSecurity{
        Option1: &operations.SQLBackupRunsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [BackupRuns](docs/backupruns/README.md)

* [SQLBackupRunsDelete](docs/backupruns/README.md#sqlbackuprunsdelete) - Deletes the backup taken by a backup run.
* [SQLBackupRunsGet](docs/backupruns/README.md#sqlbackuprunsget) - Retrieves a resource containing information about a backup run.
* [SQLBackupRunsInsert](docs/backupruns/README.md#sqlbackuprunsinsert) - Creates a new backup run on demand.
* [SQLBackupRunsList](docs/backupruns/README.md#sqlbackuprunslist) - Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

### [Connect](docs/connect/README.md)

* [SQLConnectGenerateEphemeral](docs/connect/README.md#sqlconnectgenerateephemeral) - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
* [SQLConnectGet](docs/connect/README.md#sqlconnectget) - Retrieves connect settings about a Cloud SQL instance.

### [Databases](docs/databases/README.md)

* [SQLDatabasesDelete](docs/databases/README.md#sqldatabasesdelete) - Deletes a database from a Cloud SQL instance.
* [SQLDatabasesGet](docs/databases/README.md#sqldatabasesget) - Retrieves a resource containing information about a database inside a Cloud SQL instance.
* [SQLDatabasesInsert](docs/databases/README.md#sqldatabasesinsert) - Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation.
* [SQLDatabasesList](docs/databases/README.md#sqldatabaseslist) - Lists databases in the specified Cloud SQL instance.
* [SQLDatabasesPatch](docs/databases/README.md#sqldatabasespatch) - Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
* [SQLDatabasesUpdate](docs/databases/README.md#sqldatabasesupdate) - Updates a resource containing information about a database inside a Cloud SQL instance.

### [Flags](docs/flags/README.md)

* [SQLFlagsList](docs/flags/README.md#sqlflagslist) - Lists all available database flags for Cloud SQL instances.

### [Instances](docs/instances/README.md)

* [SQLInstancesAddServerCa](docs/instances/README.md#sqlinstancesaddserverca) - Adds a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.
* [SQLInstancesClone](docs/instances/README.md#sqlinstancesclone) - Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.
* [SQLInstancesDelete](docs/instances/README.md#sqlinstancesdelete) - Deletes a Cloud SQL instance.
* [SQLInstancesDemoteMaster](docs/instances/README.md#sqlinstancesdemotemaster) - Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
* [SQLInstancesExport](docs/instances/README.md#sqlinstancesexport) - Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
* [SQLInstancesFailover](docs/instances/README.md#sqlinstancesfailover) - Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.
* [SQLInstancesGet](docs/instances/README.md#sqlinstancesget) - Retrieves a resource containing information about a Cloud SQL instance.
* [SQLInstancesImport](docs/instances/README.md#sqlinstancesimport) - Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
* [SQLInstancesInsert](docs/instances/README.md#sqlinstancesinsert) - Creates a new Cloud SQL instance.
* [SQLInstancesList](docs/instances/README.md#sqlinstanceslist) - Lists instances under a given project.
* [SQLInstancesListServerCas](docs/instances/README.md#sqlinstanceslistservercas) - Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.
* [SQLInstancesPatch](docs/instances/README.md#sqlinstancespatch) - Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.
* [SQLInstancesPromoteReplica](docs/instances/README.md#sqlinstancespromotereplica) - Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.
* [SQLInstancesResetSslConfig](docs/instances/README.md#sqlinstancesresetsslconfig) - Deletes all client certificates and generates a new server SSL certificate for the instance.
* [SQLInstancesRestart](docs/instances/README.md#sqlinstancesrestart) - Restarts a Cloud SQL instance.
* [SQLInstancesRestoreBackup](docs/instances/README.md#sqlinstancesrestorebackup) - Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.
* [SQLInstancesRotateServerCa](docs/instances/README.md#sqlinstancesrotateserverca) - Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.
* [SQLInstancesStartReplica](docs/instances/README.md#sqlinstancesstartreplica) - Starts the replication in the read replica instance.
* [SQLInstancesStopReplica](docs/instances/README.md#sqlinstancesstopreplica) - Stops the replication in the read replica instance.
* [SQLInstancesTruncateLog](docs/instances/README.md#sqlinstancestruncatelog) - Truncate MySQL general and slow query log tables MySQL only.
* [SQLInstancesUpdate](docs/instances/README.md#sqlinstancesupdate) - Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.

### [Operations](docs/operations/README.md)

* [SQLOperationsGet](docs/operations/README.md#sqloperationsget) - Retrieves an instance operation that has been performed on an instance.
* [SQLOperationsList](docs/operations/README.md#sqloperationslist) - Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

### [Projects](docs/projects/README.md)

* [SQLProjectsInstancesGetDiskShrinkConfig](docs/projects/README.md#sqlprojectsinstancesgetdiskshrinkconfig) - Get Disk Shrink Config for a given instance.
* [SQLProjectsInstancesPerformDiskShrink](docs/projects/README.md#sqlprojectsinstancesperformdiskshrink) - Perform Disk Shrink on primary instance.
* [SQLProjectsInstancesRescheduleMaintenance](docs/projects/README.md#sqlprojectsinstancesreschedulemaintenance) - Reschedules the maintenance on the given instance.
* [SQLProjectsInstancesResetReplicaSize](docs/projects/README.md#sqlprojectsinstancesresetreplicasize) - Reset Replica Size to primary instance disk size.
* [SQLProjectsInstancesStartExternalSync](docs/projects/README.md#sqlprojectsinstancesstartexternalsync) - Start External primary instance migration.
* [SQLProjectsInstancesVerifyExternalSyncSettings](docs/projects/README.md#sqlprojectsinstancesverifyexternalsyncsettings) - Verify External primary instance external sync settings.

### [SslCerts](docs/sslcerts/README.md)

* [SQLSslCertsCreateEphemeral](docs/sslcerts/README.md#sqlsslcertscreateephemeral) - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
* [SQLSslCertsDelete](docs/sslcerts/README.md#sqlsslcertsdelete) - Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.
* [SQLSslCertsGet](docs/sslcerts/README.md#sqlsslcertsget) - Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
* [SQLSslCertsInsert](docs/sslcerts/README.md#sqlsslcertsinsert) - Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
* [SQLSslCertsList](docs/sslcerts/README.md#sqlsslcertslist) - Lists all of the current SSL certificates for the instance.

### [Tiers](docs/tiers/README.md)

* [SQLTiersList](docs/tiers/README.md#sqltierslist) - Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For more information, see https://cloud.google.com/sql/pricing.

### [Users](docs/users/README.md)

* [SQLUsersDelete](docs/users/README.md#sqlusersdelete) - Deletes a user from a Cloud SQL instance.
* [SQLUsersGet](docs/users/README.md#sqlusersget) - Retrieves a resource containing information about a user.
* [SQLUsersInsert](docs/users/README.md#sqlusersinsert) - Creates a new user in a Cloud SQL instance.
* [SQLUsersList](docs/users/README.md#sqluserslist) - Lists users in the specified Cloud SQL instance.
* [SQLUsersUpdate](docs/users/README.md#sqlusersupdate) - Updates an existing user in a Cloud SQL instance.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
