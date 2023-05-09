# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteRequest;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteResponse;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteSecurity;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlBackupRunsDeleteRequest req = new SqlBackupRunsDeleteRequest("corrupti", "provident", "distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "unde";
                alt = AltEnum.PROTO;
                callback = "corrupti";
                fields = "illum";
                key = "vel";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            SqlBackupRunsDeleteResponse res = sdk.backupRuns.sqlBackupRunsDelete(req, new SqlBackupRunsDeleteSecurity() {{
                option1 = new SqlBackupRunsDeleteSecurityOption1("magnam", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [backupRuns](docs/backupruns/README.md)

* [sqlBackupRunsDelete](docs/backupruns/README.md#sqlbackuprunsdelete) - Deletes the backup taken by a backup run.
* [sqlBackupRunsGet](docs/backupruns/README.md#sqlbackuprunsget) - Retrieves a resource containing information about a backup run.
* [sqlBackupRunsInsert](docs/backupruns/README.md#sqlbackuprunsinsert) - Creates a new backup run on demand.
* [sqlBackupRunsList](docs/backupruns/README.md#sqlbackuprunslist) - Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

### [connect](docs/connect/README.md)

* [sqlConnectGenerateEphemeral](docs/connect/README.md#sqlconnectgenerateephemeral) - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
* [sqlConnectGet](docs/connect/README.md#sqlconnectget) - Retrieves connect settings about a Cloud SQL instance.

### [databases](docs/databases/README.md)

* [sqlDatabasesDelete](docs/databases/README.md#sqldatabasesdelete) - Deletes a database from a Cloud SQL instance.
* [sqlDatabasesGet](docs/databases/README.md#sqldatabasesget) - Retrieves a resource containing information about a database inside a Cloud SQL instance.
* [sqlDatabasesInsert](docs/databases/README.md#sqldatabasesinsert) - Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation.
* [sqlDatabasesList](docs/databases/README.md#sqldatabaseslist) - Lists databases in the specified Cloud SQL instance.
* [sqlDatabasesPatch](docs/databases/README.md#sqldatabasespatch) - Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
* [sqlDatabasesUpdate](docs/databases/README.md#sqldatabasesupdate) - Updates a resource containing information about a database inside a Cloud SQL instance.

### [flags](docs/flags/README.md)

* [sqlFlagsList](docs/flags/README.md#sqlflagslist) - Lists all available database flags for Cloud SQL instances.

### [instances](docs/instances/README.md)

* [sqlInstancesAddServerCa](docs/instances/README.md#sqlinstancesaddserverca) - Adds a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.
* [sqlInstancesClone](docs/instances/README.md#sqlinstancesclone) - Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.
* [sqlInstancesDelete](docs/instances/README.md#sqlinstancesdelete) - Deletes a Cloud SQL instance.
* [sqlInstancesDemoteMaster](docs/instances/README.md#sqlinstancesdemotemaster) - Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
* [sqlInstancesExport](docs/instances/README.md#sqlinstancesexport) - Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
* [sqlInstancesFailover](docs/instances/README.md#sqlinstancesfailover) - Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.
* [sqlInstancesGet](docs/instances/README.md#sqlinstancesget) - Retrieves a resource containing information about a Cloud SQL instance.
* [sqlInstancesImport](docs/instances/README.md#sqlinstancesimport) - Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
* [sqlInstancesInsert](docs/instances/README.md#sqlinstancesinsert) - Creates a new Cloud SQL instance.
* [sqlInstancesList](docs/instances/README.md#sqlinstanceslist) - Lists instances under a given project.
* [sqlInstancesListServerCas](docs/instances/README.md#sqlinstanceslistservercas) - Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.
* [sqlInstancesPatch](docs/instances/README.md#sqlinstancespatch) - Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.
* [sqlInstancesPromoteReplica](docs/instances/README.md#sqlinstancespromotereplica) - Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.
* [sqlInstancesResetSslConfig](docs/instances/README.md#sqlinstancesresetsslconfig) - Deletes all client certificates and generates a new server SSL certificate for the instance.
* [sqlInstancesRestart](docs/instances/README.md#sqlinstancesrestart) - Restarts a Cloud SQL instance.
* [sqlInstancesRestoreBackup](docs/instances/README.md#sqlinstancesrestorebackup) - Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.
* [sqlInstancesRotateServerCa](docs/instances/README.md#sqlinstancesrotateserverca) - Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.
* [sqlInstancesStartReplica](docs/instances/README.md#sqlinstancesstartreplica) - Starts the replication in the read replica instance.
* [sqlInstancesStopReplica](docs/instances/README.md#sqlinstancesstopreplica) - Stops the replication in the read replica instance.
* [sqlInstancesTruncateLog](docs/instances/README.md#sqlinstancestruncatelog) - Truncate MySQL general and slow query log tables MySQL only.
* [sqlInstancesUpdate](docs/instances/README.md#sqlinstancesupdate) - Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.

### [operations](docs/operations/README.md)

* [sqlOperationsGet](docs/operations/README.md#sqloperationsget) - Retrieves an instance operation that has been performed on an instance.
* [sqlOperationsList](docs/operations/README.md#sqloperationslist) - Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

### [projects](docs/projects/README.md)

* [sqlProjectsInstancesGetDiskShrinkConfig](docs/projects/README.md#sqlprojectsinstancesgetdiskshrinkconfig) - Get Disk Shrink Config for a given instance.
* [sqlProjectsInstancesPerformDiskShrink](docs/projects/README.md#sqlprojectsinstancesperformdiskshrink) - Perform Disk Shrink on primary instance.
* [sqlProjectsInstancesRescheduleMaintenance](docs/projects/README.md#sqlprojectsinstancesreschedulemaintenance) - Reschedules the maintenance on the given instance.
* [sqlProjectsInstancesResetReplicaSize](docs/projects/README.md#sqlprojectsinstancesresetreplicasize) - Reset Replica Size to primary instance disk size.
* [sqlProjectsInstancesStartExternalSync](docs/projects/README.md#sqlprojectsinstancesstartexternalsync) - Start External primary instance migration.
* [sqlProjectsInstancesVerifyExternalSyncSettings](docs/projects/README.md#sqlprojectsinstancesverifyexternalsyncsettings) - Verify External primary instance external sync settings.

### [sslCerts](docs/sslcerts/README.md)

* [sqlSslCertsCreateEphemeral](docs/sslcerts/README.md#sqlsslcertscreateephemeral) - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
* [sqlSslCertsDelete](docs/sslcerts/README.md#sqlsslcertsdelete) - Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.
* [sqlSslCertsGet](docs/sslcerts/README.md#sqlsslcertsget) - Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
* [sqlSslCertsInsert](docs/sslcerts/README.md#sqlsslcertsinsert) - Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
* [sqlSslCertsList](docs/sslcerts/README.md#sqlsslcertslist) - Lists all of the current SSL certificates for the instance.

### [tiers](docs/tiers/README.md)

* [sqlTiersList](docs/tiers/README.md#sqltierslist) - Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For more information, see https://cloud.google.com/sql/pricing.

### [users](docs/users/README.md)

* [sqlUsersDelete](docs/users/README.md#sqlusersdelete) - Deletes a user from a Cloud SQL instance.
* [sqlUsersGet](docs/users/README.md#sqlusersget) - Retrieves a resource containing information about a user.
* [sqlUsersInsert](docs/users/README.md#sqlusersinsert) - Creates a new user in a Cloud SQL instance.
* [sqlUsersList](docs/users/README.md#sqluserslist) - Lists users in the specified Cloud SQL instance.
* [sqlUsersUpdate](docs/users/README.md#sqlusersupdate) - Updates an existing user in a Cloud SQL instance.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
