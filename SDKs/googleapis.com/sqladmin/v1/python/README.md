# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/sqladmin/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SQLBackupRunsDeleteRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    id="nulla",
    instance="corrupti",
    key="illum",
    oauth_token="vel",
    pretty_print=False,
    project="error",
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.backup_runs.sql_backup_runs_delete(req, operations.SQLBackupRunsDeleteSecurity(
    option1=operations.SQLBackupRunsDeleteSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### backup_runs

* `sql_backup_runs_delete` - Deletes the backup taken by a backup run.
* `sql_backup_runs_get` - Retrieves a resource containing information about a backup run.
* `sql_backup_runs_insert` - Creates a new backup run on demand.
* `sql_backup_runs_list` - Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

### connect

* `sql_connect_generate_ephemeral` - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
* `sql_connect_get` - Retrieves connect settings about a Cloud SQL instance.

### databases

* `sql_databases_delete` - Deletes a database from a Cloud SQL instance.
* `sql_databases_get` - Retrieves a resource containing information about a database inside a Cloud SQL instance.
* `sql_databases_insert` - Inserts a resource containing information about a database inside a Cloud SQL instance.
* `sql_databases_list` - Lists databases in the specified Cloud SQL instance.
* `sql_databases_patch` - Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
* `sql_databases_update` - Updates a resource containing information about a database inside a Cloud SQL instance.

### flags

* `sql_flags_list` - Lists all available database flags for Cloud SQL instances.

### instances

* `sql_instances_add_server_ca` - Adds a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.
* `sql_instances_clone` - Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.
* `sql_instances_delete` - Deletes a Cloud SQL instance.
* `sql_instances_demote_master` - Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
* `sql_instances_export` - Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
* `sql_instances_failover` - Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.
* `sql_instances_get` - Retrieves a resource containing information about a Cloud SQL instance.
* `sql_instances_import` - Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
* `sql_instances_insert` - Creates a new Cloud SQL instance.
* `sql_instances_list` - Lists instances under a given project.
* `sql_instances_list_server_cas` - Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.
* `sql_instances_patch` - Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.
* `sql_instances_promote_replica` - Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.
* `sql_instances_reset_ssl_config` - Deletes all client certificates and generates a new server SSL certificate for the instance.
* `sql_instances_restart` - Restarts a Cloud SQL instance.
* `sql_instances_restore_backup` - Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.
* `sql_instances_rotate_server_ca` - Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.
* `sql_instances_start_replica` - Starts the replication in the read replica instance.
* `sql_instances_stop_replica` - Stops the replication in the read replica instance.
* `sql_instances_truncate_log` - Truncate MySQL general and slow query log tables MySQL only.
* `sql_instances_update` - Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.

### operations

* `sql_operations_get` - Retrieves an instance operation that has been performed on an instance.
* `sql_operations_list` - Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

### projects

* `sql_projects_instances_get_disk_shrink_config` - Get Disk Shrink Config for a given instance.
* `sql_projects_instances_perform_disk_shrink` - Perform Disk Shrink on primary instance.
* `sql_projects_instances_reschedule_maintenance` - Reschedules the maintenance on the given instance.
* `sql_projects_instances_reset_replica_size` - Reset Replica Size to primary instance disk size.
* `sql_projects_instances_start_external_sync` - Start External primary instance migration.
* `sql_projects_instances_verify_external_sync_settings` - Verify External primary instance external sync settings.

### ssl_certs

* `sql_ssl_certs_create_ephemeral` - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
* `sql_ssl_certs_delete` - Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.
* `sql_ssl_certs_get` - Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
* `sql_ssl_certs_insert` - Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
* `sql_ssl_certs_list` - Lists all of the current SSL certificates for the instance.

### tiers

* `sql_tiers_list` - Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For more information, see https://cloud.google.com/sql/pricing.

### users

* `sql_users_delete` - Deletes a user from a Cloud SQL instance.
* `sql_users_get` - Retrieves a resource containing information about a user.
* `sql_users_insert` - Creates a new user in a Cloud SQL instance.
* `sql_users_list` - Lists users in the specified Cloud SQL instance.
* `sql_users_update` - Updates an existing user in a Cloud SQL instance.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
