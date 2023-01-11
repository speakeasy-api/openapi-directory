# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            SqlBackupRunsDeleteRequest req = new SqlBackupRunsDeleteRequest() {{
                security = new SqlBackupRunsDeleteSecurity() {{
                    option1 = new SqlBackupRunsDeleteSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new SqlBackupRunsDeletePathParams() {{
                    id = "sit";
                    instance = "voluptas";
                    project = "culpa";
                }};
                queryParams = new SqlBackupRunsDeleteQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "consequuntur";
                    alt = "media";
                    callback = "expedita";
                    fields = "voluptas";
                    key = "fugit";
                    oauthToken = "et";
                    prettyPrint = true;
                    quotaUser = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                }};
            }};

            SqlBackupRunsDeleteResponse res = sdk.backupRuns.sqlBackupRunsDelete(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### backupRuns

* `sqlBackupRunsDelete` - Deletes the backup taken by a backup run.
* `sqlBackupRunsGet` - Retrieves a resource containing information about a backup run.
* `sqlBackupRunsInsert` - Creates a new backup run on demand.
* `sqlBackupRunsList` - Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

### connect

* `sqlConnectGenerateEphemeral` - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
* `sqlConnectGet` - Retrieves connect settings about a Cloud SQL instance.

### databases

* `sqlDatabasesDelete` - Deletes a database from a Cloud SQL instance.
* `sqlDatabasesGet` - Retrieves a resource containing information about a database inside a Cloud SQL instance.
* `sqlDatabasesInsert` - Inserts a resource containing information about a database inside a Cloud SQL instance.
* `sqlDatabasesList` - Lists databases in the specified Cloud SQL instance.
* `sqlDatabasesPatch` - Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
* `sqlDatabasesUpdate` - Updates a resource containing information about a database inside a Cloud SQL instance.

### flags

* `sqlFlagsList` - Lists all available database flags for Cloud SQL instances.

### instances

* `sqlInstancesAddServerCa` - Adds a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.
* `sqlInstancesClone` - Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.
* `sqlInstancesDelete` - Deletes a Cloud SQL instance.
* `sqlInstancesDemoteMaster` - Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
* `sqlInstancesExport` - Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
* `sqlInstancesFailover` - Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.
* `sqlInstancesGet` - Retrieves a resource containing information about a Cloud SQL instance.
* `sqlInstancesImport` - Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
* `sqlInstancesInsert` - Creates a new Cloud SQL instance.
* `sqlInstancesList` - Lists instances under a given project.
* `sqlInstancesListServerCas` - Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.
* `sqlInstancesPatch` - Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.
* `sqlInstancesPromoteReplica` - Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.
* `sqlInstancesResetSslConfig` - Deletes all client certificates and generates a new server SSL certificate for the instance.
* `sqlInstancesRestart` - Restarts a Cloud SQL instance.
* `sqlInstancesRestoreBackup` - Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.
* `sqlInstancesRotateServerCa` - Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.
* `sqlInstancesStartReplica` - Starts the replication in the read replica instance.
* `sqlInstancesStopReplica` - Stops the replication in the read replica instance.
* `sqlInstancesTruncateLog` - Truncate MySQL general and slow query log tables MySQL only.
* `sqlInstancesUpdate` - Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.

### operations

* `sqlOperationsGet` - Retrieves an instance operation that has been performed on an instance.
* `sqlOperationsList` - Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

### projects

* `sqlProjectsInstancesRescheduleMaintenance` - Reschedules the maintenance on the given instance.
* `sqlProjectsInstancesStartExternalSync` - Start External primary instance migration.
* `sqlProjectsInstancesVerifyExternalSyncSettings` - Verify External primary instance external sync settings.

### sslCerts

* `sqlSslCertsCreateEphemeral` - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
* `sqlSslCertsDelete` - Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.
* `sqlSslCertsGet` - Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
* `sqlSslCertsInsert` - Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
* `sqlSslCertsList` - Lists all of the current SSL certificates for the instance.

### tiers

* `sqlTiersList` - Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For more information, see https://cloud.google.com/sql/pricing.

### users

* `sqlUsersDelete` - Deletes a user from a Cloud SQL instance.
* `sqlUsersGet` - Retrieves a resource containing information about a user.
* `sqlUsersInsert` - Creates a new user in a Cloud SQL instance.
* `sqlUsersList` - Lists users in the specified Cloud SQL instance.
* `sqlUsersUpdate` - Updates an existing user in a Cloud SQL instance.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
