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
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelRequest;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelResponse;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurity;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminOperationsCancelRequest req = new BigtableadminOperationsCancelRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            BigtableadminOperationsCancelResponse res = sdk.operations.bigtableadminOperationsCancel(req, new BigtableadminOperationsCancelSecurity() {{
                option1 = new BigtableadminOperationsCancelSecurityOption1("suscipit", "iure") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
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


### [operations](docs/operations/README.md)

* [bigtableadminOperationsCancel](docs/operations/README.md#bigtableadminoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [bigtableadminOperationsProjectsOperationsList](docs/operations/README.md#bigtableadminoperationsprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### [projects](docs/projects/README.md)

* [bigtableadminProjectsInstancesAppProfilesCreate](docs/projects/README.md#bigtableadminprojectsinstancesappprofilescreate) - Creates an app profile within an instance.
* [bigtableadminProjectsInstancesAppProfilesList](docs/projects/README.md#bigtableadminprojectsinstancesappprofileslist) - Lists information about app profiles in an instance.
* [bigtableadminProjectsInstancesClustersBackupsCopy](docs/projects/README.md#bigtableadminprojectsinstancesclustersbackupscopy) - Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.
* [bigtableadminProjectsInstancesClustersBackupsCreate](docs/projects/README.md#bigtableadminprojectsinstancesclustersbackupscreate) - Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.
* [bigtableadminProjectsInstancesClustersBackupsList](docs/projects/README.md#bigtableadminprojectsinstancesclustersbackupslist) - Lists Cloud Bigtable backups. Returns both completed and pending backups.
* [bigtableadminProjectsInstancesClustersCreate](docs/projects/README.md#bigtableadminprojectsinstancesclusterscreate) - Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
* [bigtableadminProjectsInstancesClustersHotTabletsList](docs/projects/README.md#bigtableadminprojectsinstancesclustershottabletslist) - Lists hot tablets in a cluster, within the time range provided. Hot tablets are ordered based on CPU usage.
* [bigtableadminProjectsInstancesClustersList](docs/projects/README.md#bigtableadminprojectsinstancesclusterslist) - Lists information about clusters in an instance.
* [bigtableadminProjectsInstancesClustersUpdate](docs/projects/README.md#bigtableadminprojectsinstancesclustersupdate) - Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.
* [bigtableadminProjectsInstancesCreate](docs/projects/README.md#bigtableadminprojectsinstancescreate) - Create an instance within a project. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
* [bigtableadminProjectsInstancesList](docs/projects/README.md#bigtableadminprojectsinstanceslist) - Lists information about instances in a project.
* [bigtableadminProjectsInstancesTablesCheckConsistency](docs/projects/README.md#bigtableadminprojectsinstancestablescheckconsistency) - Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.
* [bigtableadminProjectsInstancesTablesCreate](docs/projects/README.md#bigtableadminprojectsinstancestablescreate) - Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.
* [bigtableadminProjectsInstancesTablesDelete](docs/projects/README.md#bigtableadminprojectsinstancestablesdelete) - Permanently deletes a specified table and all of its data.
* [bigtableadminProjectsInstancesTablesDropRowRange](docs/projects/README.md#bigtableadminprojectsinstancestablesdroprowrange) - Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.
* [bigtableadminProjectsInstancesTablesGenerateConsistencyToken](docs/projects/README.md#bigtableadminprojectsinstancestablesgenerateconsistencytoken) - Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.
* [bigtableadminProjectsInstancesTablesGetIamPolicy](docs/projects/README.md#bigtableadminprojectsinstancestablesgetiampolicy) - Gets the access control policy for a Table resource. Returns an empty policy if the resource exists but does not have a policy set.
* [bigtableadminProjectsInstancesTablesList](docs/projects/README.md#bigtableadminprojectsinstancestableslist) - Lists all tables served from a specified instance.
* [bigtableadminProjectsInstancesTablesModifyColumnFamilies](docs/projects/README.md#bigtableadminprojectsinstancestablesmodifycolumnfamilies) - Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.
* [bigtableadminProjectsInstancesTablesPatch](docs/projects/README.md#bigtableadminprojectsinstancestablespatch) - Updates a specified table.
* [bigtableadminProjectsInstancesTablesRestore](docs/projects/README.md#bigtableadminprojectsinstancestablesrestore) - Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.
* [bigtableadminProjectsInstancesTablesSetIamPolicy](docs/projects/README.md#bigtableadminprojectsinstancestablessetiampolicy) - Sets the access control policy on a Table resource. Replaces any existing policy.
* [bigtableadminProjectsInstancesTablesTestIamPermissions](docs/projects/README.md#bigtableadminprojectsinstancestablestestiampermissions) - Returns permissions that the caller has on the specified table resource.
* [bigtableadminProjectsInstancesTablesUndelete](docs/projects/README.md#bigtableadminprojectsinstancestablesundelete) - Restores a specified table which was accidentally deleted.
* [bigtableadminProjectsLocationsGet](docs/projects/README.md#bigtableadminprojectslocationsget) - Gets information about a location.
* [bigtableadminProjectsLocationsList](docs/projects/README.md#bigtableadminprojectslocationslist) - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
