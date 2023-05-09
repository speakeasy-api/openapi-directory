# projects

### Available Operations

* [bigtableadminProjectsInstancesAppProfilesCreate](#bigtableadminprojectsinstancesappprofilescreate) - Creates an app profile within an instance.
* [bigtableadminProjectsInstancesAppProfilesList](#bigtableadminprojectsinstancesappprofileslist) - Lists information about app profiles in an instance.
* [bigtableadminProjectsInstancesClustersBackupsCopy](#bigtableadminprojectsinstancesclustersbackupscopy) - Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.
* [bigtableadminProjectsInstancesClustersBackupsCreate](#bigtableadminprojectsinstancesclustersbackupscreate) - Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.
* [bigtableadminProjectsInstancesClustersBackupsList](#bigtableadminprojectsinstancesclustersbackupslist) - Lists Cloud Bigtable backups. Returns both completed and pending backups.
* [bigtableadminProjectsInstancesClustersCreate](#bigtableadminprojectsinstancesclusterscreate) - Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
* [bigtableadminProjectsInstancesClustersHotTabletsList](#bigtableadminprojectsinstancesclustershottabletslist) - Lists hot tablets in a cluster, within the time range provided. Hot tablets are ordered based on CPU usage.
* [bigtableadminProjectsInstancesClustersList](#bigtableadminprojectsinstancesclusterslist) - Lists information about clusters in an instance.
* [bigtableadminProjectsInstancesClustersUpdate](#bigtableadminprojectsinstancesclustersupdate) - Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.
* [bigtableadminProjectsInstancesCreate](#bigtableadminprojectsinstancescreate) - Create an instance within a project. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
* [bigtableadminProjectsInstancesList](#bigtableadminprojectsinstanceslist) - Lists information about instances in a project.
* [bigtableadminProjectsInstancesTablesCheckConsistency](#bigtableadminprojectsinstancestablescheckconsistency) - Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.
* [bigtableadminProjectsInstancesTablesCreate](#bigtableadminprojectsinstancestablescreate) - Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.
* [bigtableadminProjectsInstancesTablesDelete](#bigtableadminprojectsinstancestablesdelete) - Permanently deletes a specified table and all of its data.
* [bigtableadminProjectsInstancesTablesDropRowRange](#bigtableadminprojectsinstancestablesdroprowrange) - Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.
* [bigtableadminProjectsInstancesTablesGenerateConsistencyToken](#bigtableadminprojectsinstancestablesgenerateconsistencytoken) - Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.
* [bigtableadminProjectsInstancesTablesGetIamPolicy](#bigtableadminprojectsinstancestablesgetiampolicy) - Gets the access control policy for a Table resource. Returns an empty policy if the resource exists but does not have a policy set.
* [bigtableadminProjectsInstancesTablesList](#bigtableadminprojectsinstancestableslist) - Lists all tables served from a specified instance.
* [bigtableadminProjectsInstancesTablesModifyColumnFamilies](#bigtableadminprojectsinstancestablesmodifycolumnfamilies) - Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.
* [bigtableadminProjectsInstancesTablesPatch](#bigtableadminprojectsinstancestablespatch) - Updates a specified table.
* [bigtableadminProjectsInstancesTablesRestore](#bigtableadminprojectsinstancestablesrestore) - Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.
* [bigtableadminProjectsInstancesTablesSetIamPolicy](#bigtableadminprojectsinstancestablessetiampolicy) - Sets the access control policy on a Table resource. Replaces any existing policy.
* [bigtableadminProjectsInstancesTablesTestIamPermissions](#bigtableadminprojectsinstancestablestestiampermissions) - Returns permissions that the caller has on the specified table resource.
* [bigtableadminProjectsInstancesTablesUndelete](#bigtableadminprojectsinstancestablesundelete) - Restores a specified table which was accidentally deleted.
* [bigtableadminProjectsLocationsGet](#bigtableadminprojectslocationsget) - Gets information about a location.
* [bigtableadminProjectsLocationsList](#bigtableadminprojectslocationslist) - Lists information about the supported locations for this service.

## bigtableadminProjectsInstancesAppProfilesCreate

Creates an app profile within an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesCreateRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesCreateResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesCreateSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesCreateSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesCreateSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesCreateSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesCreateSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesCreateSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppProfile;
import org.openapis.openapi.models.shared.MultiClusterRoutingUseAny;
import org.openapis.openapi.models.shared.SingleClusterRouting;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesAppProfilesCreateRequest req = new BigtableadminProjectsInstancesAppProfilesCreateRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                appProfile = new AppProfile() {{
                    description = "esse";
                    etag = "totam";
                    multiClusterRoutingUseAny = new MultiClusterRoutingUseAny() {{
                        clusterIds = new String[]{{
                            add("dolorum"),
                            add("dicta"),
                            add("nam"),
                            add("officia"),
                        }};
                    }};;
                    name = "Wayne Lind";
                    singleClusterRouting = new SingleClusterRouting() {{
                        allowTransactionalWrites = false;
                        clusterId = "totam";
                    }};;
                }};;
                accessToken = "beatae";
                alt = AltEnum.MEDIA;
                appProfileId = "molestiae";
                callback = "modi";
                fields = "qui";
                ignoreWarnings = false;
                key = "impedit";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "ipsum";
                uploadProtocol = "excepturi";
            }};            

            BigtableadminProjectsInstancesAppProfilesCreateResponse res = sdk.projects.bigtableadminProjectsInstancesAppProfilesCreate(req, new BigtableadminProjectsInstancesAppProfilesCreateSecurity() {{
                option1 = new BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1("aspernatur", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.appProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigtableadminProjectsInstancesAppProfilesList

Lists information about app profiles in an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesListRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesListResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesListSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesListSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesListSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesListSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesListSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesListSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesAppProfilesListSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesAppProfilesListRequest req = new BigtableadminProjectsInstancesAppProfilesListRequest("ad") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sed";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "natus";
                key = "laboriosam";
                oauthToken = "hic";
                pageSize = 902599L;
                pageToken = "fuga";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "corporis";
                uploadProtocol = "iste";
            }};            

            BigtableadminProjectsInstancesAppProfilesListResponse res = sdk.projects.bigtableadminProjectsInstancesAppProfilesList(req, new BigtableadminProjectsInstancesAppProfilesListSecurity() {{
                option1 = new BigtableadminProjectsInstancesAppProfilesListSecurityOption1("iure", "saepe") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAppProfilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigtableadminProjectsInstancesClustersBackupsCopy

Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsCopyRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsCopyResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsCopySecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsCopySecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsCopySecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsCopySecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsCopySecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CopyBackupRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesClustersBackupsCopyRequest req = new BigtableadminProjectsInstancesClustersBackupsCopyRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                copyBackupRequest = new CopyBackupRequest() {{
                    backupId = "ipsa";
                    expireTime = "reiciendis";
                    sourceBackup = "est";
                }};;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "dolorem";
                key = "corporis";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "enim";
                uploadProtocol = "omnis";
            }};            

            BigtableadminProjectsInstancesClustersBackupsCopyResponse res = sdk.projects.bigtableadminProjectsInstancesClustersBackupsCopy(req, new BigtableadminProjectsInstancesClustersBackupsCopySecurity() {{
                option1 = new BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1("nemo", "minima") {{
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

## bigtableadminProjectsInstancesClustersBackupsCreate

Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsCreateRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsCreateResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsCreateSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackupInput;
import org.openapis.openapi.models.shared.EncryptionInfoInput;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesClustersBackupsCreateRequest req = new BigtableadminProjectsInstancesClustersBackupsCreateRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                backupInput = new BackupInput() {{
                    encryptionInfo = new EncryptionInfoInput() {{
                        encryptionStatus = new Status() {{
                            code = 438601;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("sapiente", "architecto");
                                    put("mollitia", "dolorem");
                                    put("culpa", "consequuntur");
                                    put("repellat", "mollitia");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("numquam", "commodi");
                                    put("quam", "molestiae");
                                    put("velit", "error");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("quis", "vitae");
                                }}),
                            }};
                            message = "laborum";
                        }};;
                    }};;
                    expireTime = "animi";
                    name = "Christina Satterfield";
                    sourceTable = "ipsam";
                }};;
                accessToken = "id";
                alt = AltEnum.PROTO;
                backupId = "aut";
                callback = "quasi";
                fields = "error";
                key = "temporibus";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "reiciendis";
                uploadProtocol = "voluptatibus";
            }};            

            BigtableadminProjectsInstancesClustersBackupsCreateResponse res = sdk.projects.bigtableadminProjectsInstancesClustersBackupsCreate(req, new BigtableadminProjectsInstancesClustersBackupsCreateSecurity() {{
                option1 = new BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1("vero", "nihil") {{
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

## bigtableadminProjectsInstancesClustersBackupsList

Lists Cloud Bigtable backups. Returns both completed and pending backups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsListRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsListResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsListSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsListSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsListSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsListSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsListSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersBackupsListSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesClustersBackupsListRequest req = new BigtableadminProjectsInstancesClustersBackupsListRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "cum";
                filter = "perferendis";
                key = "doloremque";
                oauthToken = "reprehenderit";
                orderBy = "ut";
                pageSize = 979587L;
                pageToken = "dicta";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "dolore";
                uploadProtocol = "iusto";
            }};            

            BigtableadminProjectsInstancesClustersBackupsListResponse res = sdk.projects.bigtableadminProjectsInstancesClustersBackupsList(req, new BigtableadminProjectsInstancesClustersBackupsListSecurity() {{
                option1 = new BigtableadminProjectsInstancesClustersBackupsListSecurityOption1("dicta", "harum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listBackupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigtableadminProjectsInstancesClustersCreate

Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersCreateRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersCreateResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersCreateSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersCreateSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersCreateSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersCreateSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersCreateSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersCreateSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersCreateSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoscalingLimits;
import org.openapis.openapi.models.shared.AutoscalingTargets;
import org.openapis.openapi.models.shared.ClusterAutoscalingConfig;
import org.openapis.openapi.models.shared.ClusterConfig;
import org.openapis.openapi.models.shared.ClusterDefaultStorageTypeEnum;
import org.openapis.openapi.models.shared.ClusterInput;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesClustersCreateRequest req = new BigtableadminProjectsInstancesClustersCreateRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                clusterInput = new ClusterInput() {{
                    clusterConfig = new ClusterConfig() {{
                        clusterAutoscalingConfig = new ClusterAutoscalingConfig() {{
                            autoscalingLimits = new AutoscalingLimits() {{
                                maxServeNodes = 414263;
                                minServeNodes = 918236;
                            }};;
                            autoscalingTargets = new AutoscalingTargets() {{
                                cpuUtilizationPercent = 64147;
                                storageUtilizationGibPerNode = 216822;
                            }};;
                        }};;
                    }};;
                    defaultStorageType = ClusterDefaultStorageTypeEnum.HDD;
                    encryptionConfig = new EncryptionConfig() {{
                        kmsKeyName = "molestias";
                    }};;
                    location = "excepturi";
                    name = "Joel Lang";
                    serveNodes = 93940;
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                clusterId = "itaque";
                fields = "incidunt";
                key = "enim";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "quibusdam";
                uploadProtocol = "explicabo";
            }};            

            BigtableadminProjectsInstancesClustersCreateResponse res = sdk.projects.bigtableadminProjectsInstancesClustersCreate(req, new BigtableadminProjectsInstancesClustersCreateSecurity() {{
                option1 = new BigtableadminProjectsInstancesClustersCreateSecurityOption1("deserunt", "distinctio") {{
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

## bigtableadminProjectsInstancesClustersHotTabletsList

Lists hot tablets in a cluster, within the time range provided. Hot tablets are ordered based on CPU usage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersHotTabletsListRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersHotTabletsListResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersHotTabletsListSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesClustersHotTabletsListRequest req = new BigtableadminProjectsInstancesClustersHotTabletsListRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "aliquid";
                endTime = "cupiditate";
                fields = "quos";
                key = "perferendis";
                oauthToken = "magni";
                pageSize = 828940L;
                pageToken = "ipsam";
                prettyPrint = false;
                quotaUser = "alias";
                startTime = "fugit";
                uploadType = "dolorum";
                uploadProtocol = "excepturi";
            }};            

            BigtableadminProjectsInstancesClustersHotTabletsListResponse res = sdk.projects.bigtableadminProjectsInstancesClustersHotTabletsList(req, new BigtableadminProjectsInstancesClustersHotTabletsListSecurity() {{
                option1 = new BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1("tempora", "facilis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listHotTabletsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigtableadminProjectsInstancesClustersList

Lists information about clusters in an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersListRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersListResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersListSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersListSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersListSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersListSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersListSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersListSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersListSecurityOption6;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersListSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesClustersListRequest req = new BigtableadminProjectsInstancesClustersListRequest("tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "non";
                fields = "eligendi";
                key = "sint";
                oauthToken = "aliquid";
                pageToken = "provident";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "sint";
                uploadProtocol = "officia";
            }};            

            BigtableadminProjectsInstancesClustersListResponse res = sdk.projects.bigtableadminProjectsInstancesClustersList(req, new BigtableadminProjectsInstancesClustersListSecurity() {{
                option1 = new BigtableadminProjectsInstancesClustersListSecurityOption1("dolor", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigtableadminProjectsInstancesClustersUpdate

Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersUpdateRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersUpdateResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersUpdateSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersUpdateSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersUpdateSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersUpdateSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersUpdateSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersUpdateSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesClustersUpdateSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoscalingLimits;
import org.openapis.openapi.models.shared.AutoscalingTargets;
import org.openapis.openapi.models.shared.ClusterAutoscalingConfig;
import org.openapis.openapi.models.shared.ClusterConfig;
import org.openapis.openapi.models.shared.ClusterDefaultStorageTypeEnum;
import org.openapis.openapi.models.shared.ClusterInput;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesClustersUpdateRequest req = new BigtableadminProjectsInstancesClustersUpdateRequest("a") {{
                dollarXgafv = XgafvEnum.TWO;
                clusterInput = new ClusterInput() {{
                    clusterConfig = new ClusterConfig() {{
                        clusterAutoscalingConfig = new ClusterAutoscalingConfig() {{
                            autoscalingLimits = new AutoscalingLimits() {{
                                maxServeNodes = 447125;
                                minServeNodes = 449198;
                            }};;
                            autoscalingTargets = new AutoscalingTargets() {{
                                cpuUtilizationPercent = 846409;
                                storageUtilizationGibPerNode = 978571;
                            }};;
                        }};;
                    }};;
                    defaultStorageType = ClusterDefaultStorageTypeEnum.HDD;
                    encryptionConfig = new EncryptionConfig() {{
                        kmsKeyName = "dicta";
                    }};;
                    location = "magnam";
                    name = "Irving Jenkins";
                    serveNodes = 881104;
                }};;
                accessToken = "non";
                alt = AltEnum.MEDIA;
                callback = "enim";
                fields = "accusamus";
                key = "delectus";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "nam";
                uploadProtocol = "id";
            }};            

            BigtableadminProjectsInstancesClustersUpdateResponse res = sdk.projects.bigtableadminProjectsInstancesClustersUpdate(req, new BigtableadminProjectsInstancesClustersUpdateSecurity() {{
                option1 = new BigtableadminProjectsInstancesClustersUpdateSecurityOption1("blanditiis", "deleniti") {{
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

## bigtableadminProjectsInstancesCreate

Create an instance within a project. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesCreateRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesCreateResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesCreateSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesCreateSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesCreateSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesCreateSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesCreateSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesCreateSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesCreateSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoscalingLimits;
import org.openapis.openapi.models.shared.AutoscalingTargets;
import org.openapis.openapi.models.shared.ClusterAutoscalingConfig;
import org.openapis.openapi.models.shared.ClusterConfig;
import org.openapis.openapi.models.shared.ClusterDefaultStorageTypeEnum;
import org.openapis.openapi.models.shared.ClusterInput;
import org.openapis.openapi.models.shared.CreateInstanceRequestInput;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.InstanceTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesCreateRequest req = new BigtableadminProjectsInstancesCreateRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                createInstanceRequestInput = new CreateInstanceRequestInput() {{
                    clusters = new java.util.HashMap<String, org.openapis.openapi.models.shared.ClusterInput>() {{
                        put("nisi", new ClusterInput() {{
                            clusterConfig = new ClusterConfig() {{
                                clusterAutoscalingConfig = new ClusterAutoscalingConfig() {{
                                    autoscalingLimits = new AutoscalingLimits() {{
                                        maxServeNodes = 423855;
                                        minServeNodes = 618809;
                                    }};
                                    autoscalingTargets = new AutoscalingTargets() {{
                                        cpuUtilizationPercent = 606393;
                                        storageUtilizationGibPerNode = 474867;
                                    }};
                                }};
                            }};
                            defaultStorageType = ClusterDefaultStorageTypeEnum.STORAGE_TYPE_UNSPECIFIED;
                            encryptionConfig = new EncryptionConfig() {{
                                kmsKeyName = "nihil";
                            }};
                            location = "magnam";
                            name = "Alfonso Green";
                            serveNodes = 618016;
                        }});
                        put("nobis", new ClusterInput() {{
                            clusterConfig = new ClusterConfig() {{
                                clusterAutoscalingConfig = new ClusterAutoscalingConfig() {{
                                    autoscalingLimits = new AutoscalingLimits() {{
                                        maxServeNodes = 428769;
                                        minServeNodes = 878453;
                                    }};
                                    autoscalingTargets = new AutoscalingTargets() {{
                                        cpuUtilizationPercent = 135474;
                                        storageUtilizationGibPerNode = 102863;
                                    }};
                                }};
                            }};
                            defaultStorageType = ClusterDefaultStorageTypeEnum.STORAGE_TYPE_UNSPECIFIED;
                            encryptionConfig = new EncryptionConfig() {{
                                kmsKeyName = "et";
                            }};
                            location = "excepturi";
                            name = "Ramona Lueilwitz MD";
                            serveNodes = 968962;
                        }});
                        put("mollitia", new ClusterInput() {{
                            clusterConfig = new ClusterConfig() {{
                                clusterAutoscalingConfig = new ClusterAutoscalingConfig() {{
                                    autoscalingLimits = new AutoscalingLimits() {{
                                        maxServeNodes = 320997;
                                        minServeNodes = 431418;
                                    }};
                                    autoscalingTargets = new AutoscalingTargets() {{
                                        cpuUtilizationPercent = 221262;
                                        storageUtilizationGibPerNode = 896547;
                                    }};
                                }};
                            }};
                            defaultStorageType = ClusterDefaultStorageTypeEnum.STORAGE_TYPE_UNSPECIFIED;
                            encryptionConfig = new EncryptionConfig() {{
                                kmsKeyName = "nemo";
                            }};
                            location = "quasi";
                            name = "Melba Toy";
                            serveNodes = 537023;
                        }});
                    }};
                    instance = new InstanceInput() {{
                        displayName = "facilis";
                        labels = new java.util.HashMap<String, String>() {{
                            put("architecto", "architecto");
                            put("repudiandae", "ullam");
                        }};
                        name = "Jessie Zulauf";
                        type = InstanceTypeEnum.DEVELOPMENT;
                    }};;
                    instanceId = "pariatur";
                    parent = "accusantium";
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "magni";
                key = "sunt";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "pariatur";
                uploadProtocol = "maxime";
            }};            

            BigtableadminProjectsInstancesCreateResponse res = sdk.projects.bigtableadminProjectsInstancesCreate(req, new BigtableadminProjectsInstancesCreateSecurity() {{
                option1 = new BigtableadminProjectsInstancesCreateSecurityOption1("ea", "excepturi") {{
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

## bigtableadminProjectsInstancesList

Lists information about instances in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesListRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesListResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesListSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesListSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesListSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesListSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesListSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesListSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesListSecurityOption6;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesListSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesListRequest req = new BigtableadminProjectsInstancesListRequest("odit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "quidem";
                key = "ipsam";
                oauthToken = "voluptate";
                pageToken = "autem";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "eaque";
                uploadProtocol = "pariatur";
            }};            

            BigtableadminProjectsInstancesListResponse res = sdk.projects.bigtableadminProjectsInstancesList(req, new BigtableadminProjectsInstancesListSecurity() {{
                option1 = new BigtableadminProjectsInstancesListSecurityOption1("nemo", "voluptatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigtableadminProjectsInstancesTablesCheckConsistency

Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesCheckConsistencyRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesCheckConsistencyResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesCheckConsistencySecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CheckConsistencyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesTablesCheckConsistencyRequest req = new BigtableadminProjectsInstancesTablesCheckConsistencyRequest("perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                checkConsistencyRequest = new CheckConsistencyRequest() {{
                    consistencyToken = "amet";
                }};;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "corporis";
                fields = "hic";
                key = "libero";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "quis";
                uploadProtocol = "totam";
            }};            

            BigtableadminProjectsInstancesTablesCheckConsistencyResponse res = sdk.projects.bigtableadminProjectsInstancesTablesCheckConsistency(req, new BigtableadminProjectsInstancesTablesCheckConsistencySecurity() {{
                option1 = new BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1("dignissimos", "eaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.checkConsistencyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigtableadminProjectsInstancesTablesCreate

Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesCreateRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesCreateResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesCreateSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesCreateSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesCreateSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesCreateSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesCreateSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesCreateSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ColumnFamily;
import org.openapis.openapi.models.shared.ColumnFamilyStats;
import org.openapis.openapi.models.shared.CreateTableRequestInput;
import org.openapis.openapi.models.shared.GcRule;
import org.openapis.openapi.models.shared.Intersection;
import org.openapis.openapi.models.shared.RestoreInfoInput;
import org.openapis.openapi.models.shared.RestoreInfoSourceTypeEnum;
import org.openapis.openapi.models.shared.Split;
import org.openapis.openapi.models.shared.TableGranularityEnum;
import org.openapis.openapi.models.shared.TableInput;
import org.openapis.openapi.models.shared.TableStats;
import org.openapis.openapi.models.shared.Union;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesTablesCreateRequest req = new BigtableadminProjectsInstancesTablesCreateRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                createTableRequestInput = new CreateTableRequestInput() {{
                    initialSplits = new org.openapis.openapi.models.shared.Split[]{{
                        add(new Split() {{
                            key = "perferendis";
                        }}),
                    }};
                    table = new TableInput() {{
                        columnFamilies = new java.util.HashMap<String, org.openapis.openapi.models.shared.ColumnFamily>() {{
                            put("minus", new ColumnFamily() {{
                                gcRule = new GcRule() {{
                                    intersection = new Intersection() {{
                                        rules = new org.openapis.openapi.models.shared.GcRule[]{{
                                            add(new GcRule() {{}}),
                                            add(new GcRule() {{}}),
                                        }};
                                    }};
                                    maxAge = "dolor";
                                    maxNumVersions = 874573;
                                    union = new Union() {{
                                        rules = new org.openapis.openapi.models.shared.GcRule[]{{
                                            add(new GcRule() {{}}),
                                            add(new GcRule() {{}}),
                                        }};
                                    }};
                                }};
                                stats = new ColumnFamilyStats() {{
                                    averageCellsPerColumn = 9441.2;
                                    averageColumnsPerRow = 9280.82;
                                    logicalDataBytes = "omnis";
                                }};
                            }});
                        }};
                        deletionProtection = false;
                        granularity = TableGranularityEnum.MILLIS;
                        name = "George Sawayn";
                        restoreInfo = new RestoreInfoInput() {{
                            sourceType = RestoreInfoSourceTypeEnum.BACKUP;
                        }};;
                        stats = new TableStats() {{
                            averageCellsPerColumn = 503.7;
                            averageColumnsPerRow = 5772.29;
                            logicalDataBytes = "rerum";
                            rowCount = "adipisci";
                        }};;
                    }};;
                    tableId = "asperiores";
                }};;
                accessToken = "earum";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolorum";
                key = "deleniti";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "nobis";
                uploadProtocol = "libero";
            }};            

            BigtableadminProjectsInstancesTablesCreateResponse res = sdk.projects.bigtableadminProjectsInstancesTablesCreate(req, new BigtableadminProjectsInstancesTablesCreateSecurity() {{
                option1 = new BigtableadminProjectsInstancesTablesCreateSecurityOption1("delectus", "quaerat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.table != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigtableadminProjectsInstancesTablesDelete

Permanently deletes a specified table and all of its data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDeleteRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDeleteResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDeleteSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDeleteSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDeleteSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDeleteSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDeleteSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDeleteSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesTablesDeleteRequest req = new BigtableadminProjectsInstancesTablesDeleteRequest("quos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "qui";
                ignoreWarnings = false;
                key = "ipsum";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "cum";
                uploadProtocol = "voluptate";
            }};            

            BigtableadminProjectsInstancesTablesDeleteResponse res = sdk.projects.bigtableadminProjectsInstancesTablesDelete(req, new BigtableadminProjectsInstancesTablesDeleteSecurity() {{
                option1 = new BigtableadminProjectsInstancesTablesDeleteSecurityOption1("dignissimos", "reiciendis") {{
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

## bigtableadminProjectsInstancesTablesDropRowRange

Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDropRowRangeRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDropRowRangeResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDropRowRangeSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DropRowRangeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesTablesDropRowRangeRequest req = new BigtableadminProjectsInstancesTablesDropRowRangeRequest("amet") {{
                dollarXgafv = XgafvEnum.TWO;
                dropRowRangeRequest = new DropRowRangeRequest() {{
                    deleteAllDataFromTable = false;
                    rowKeyPrefix = "numquam";
                }};;
                accessToken = "veritatis";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "iure";
                key = "odio";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "quidem";
                uploadProtocol = "voluptatibus";
            }};            

            BigtableadminProjectsInstancesTablesDropRowRangeResponse res = sdk.projects.bigtableadminProjectsInstancesTablesDropRowRange(req, new BigtableadminProjectsInstancesTablesDropRowRangeSecurity() {{
                option1 = new BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1("voluptas", "natus") {{
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

## bigtableadminProjectsInstancesTablesGenerateConsistencyToken

Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest req = new BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest("eos") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("fugiat", "ab");
                }};
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "iusto";
                fields = "voluptate";
                key = "dolorum";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "necessitatibus";
                uploadProtocol = "distinctio";
            }};            

            BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse res = sdk.projects.bigtableadminProjectsInstancesTablesGenerateConsistencyToken(req, new BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity() {{
                option1 = new BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1("asperiores", "nihil") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.generateConsistencyTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigtableadminProjectsInstancesTablesGetIamPolicy

Gets the access control policy for a Table resource. Returns an empty policy if the resource exists but does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesTablesGetIamPolicyRequest req = new BigtableadminProjectsInstancesTablesGetIamPolicyRequest("ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 663078;
                    }};;
                }};;
                accessToken = "saepe";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "perferendis";
                key = "amet";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "ad";
                uploadProtocol = "saepe";
            }};            

            BigtableadminProjectsInstancesTablesGetIamPolicyResponse res = sdk.projects.bigtableadminProjectsInstancesTablesGetIamPolicy(req, new BigtableadminProjectsInstancesTablesGetIamPolicySecurity() {{
                option1 = new BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1("suscipit", "deserunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigtableadminProjectsInstancesTablesList

Lists all tables served from a specified instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesListRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesListResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesListSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesListSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesListSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesListSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesListSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesListSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesListSecurityOption6;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesTablesListRequest req = new BigtableadminProjectsInstancesTablesListRequest("provident") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.MEDIA;
                callback = "similique";
                fields = "alias";
                key = "at";
                oauthToken = "quaerat";
                pageSize = 273542L;
                pageToken = "vel";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "officiis";
                uploadProtocol = "qui";
                view = BigtableadminProjectsInstancesTablesListViewEnum.ENCRYPTION_VIEW;
            }};            

            BigtableadminProjectsInstancesTablesListResponse res = sdk.projects.bigtableadminProjectsInstancesTablesList(req, new BigtableadminProjectsInstancesTablesListSecurity() {{
                option1 = new BigtableadminProjectsInstancesTablesListSecurityOption1("a", "esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTablesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigtableadminProjectsInstancesTablesModifyColumnFamilies

Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ColumnFamily;
import org.openapis.openapi.models.shared.ColumnFamilyStats;
import org.openapis.openapi.models.shared.GcRule;
import org.openapis.openapi.models.shared.Intersection;
import org.openapis.openapi.models.shared.Modification;
import org.openapis.openapi.models.shared.ModifyColumnFamiliesRequest;
import org.openapis.openapi.models.shared.Union;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest req = new BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                modifyColumnFamiliesRequest = new ModifyColumnFamiliesRequest() {{
                    modifications = new org.openapis.openapi.models.shared.Modification[]{{
                        add(new Modification() {{
                            create = new ColumnFamily() {{
                                gcRule = new GcRule() {{
                                    intersection = new Intersection() {{
                                        rules = new org.openapis.openapi.models.shared.GcRule[]{{
                                            add(new GcRule() {{}}),
                                            add(new GcRule() {{}}),
                                            add(new GcRule() {{}}),
                                            add(new GcRule() {{}}),
                                        }};
                                    }};
                                    maxAge = "tenetur";
                                    maxNumVersions = 229442;
                                    union = new Union() {{
                                        rules = new org.openapis.openapi.models.shared.GcRule[]{{
                                            add(new GcRule() {{}}),
                                            add(new GcRule() {{}}),
                                            add(new GcRule() {{}}),
                                        }};
                                    }};
                                }};
                                stats = new ColumnFamilyStats() {{
                                    averageCellsPerColumn = 8802.98;
                                    averageColumnsPerRow = 2539.41;
                                    logicalDataBytes = "enim";
                                }};
                            }};
                            drop = false;
                            id = "3f870b32-6b5a-4734-a9cd-b1a8422bb679";
                            update = new ColumnFamily() {{
                                gcRule = new GcRule() {{
                                    intersection = new Intersection() {{
                                        rules = new org.openapis.openapi.models.shared.GcRule[]{{
                                            add(new GcRule() {{}}),
                                            add(new GcRule() {{}}),
                                            add(new GcRule() {{}}),
                                            add(new GcRule() {{}}),
                                        }};
                                    }};
                                    maxAge = "qui";
                                    maxNumVersions = 204865;
                                    union = new Union() {{
                                        rules = new org.openapis.openapi.models.shared.GcRule[]{{
                                            add(new GcRule() {{}}),
                                        }};
                                    }};
                                }};
                                stats = new ColumnFamilyStats() {{
                                    averageCellsPerColumn = 1649.59;
                                    averageColumnsPerRow = 4880.56;
                                    logicalDataBytes = "sunt";
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "ullam";
                alt = AltEnum.PROTO;
                callback = "hic";
                fields = "voluptatem";
                key = "cumque";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "et";
                uploadProtocol = "saepe";
            }};            

            BigtableadminProjectsInstancesTablesModifyColumnFamiliesResponse res = sdk.projects.bigtableadminProjectsInstancesTablesModifyColumnFamilies(req, new BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity() {{
                option1 = new BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1("ipsum", "veritatis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.table != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigtableadminProjectsInstancesTablesPatch

Updates a specified table.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesPatchRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesPatchResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesPatchSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesPatchSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesPatchSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesPatchSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesPatchSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesPatchSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesPatchSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ColumnFamily;
import org.openapis.openapi.models.shared.ColumnFamilyStats;
import org.openapis.openapi.models.shared.GcRule;
import org.openapis.openapi.models.shared.Intersection;
import org.openapis.openapi.models.shared.RestoreInfoInput;
import org.openapis.openapi.models.shared.RestoreInfoSourceTypeEnum;
import org.openapis.openapi.models.shared.TableGranularityEnum;
import org.openapis.openapi.models.shared.TableInput;
import org.openapis.openapi.models.shared.TableStats;
import org.openapis.openapi.models.shared.Union;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesTablesPatchRequest req = new BigtableadminProjectsInstancesTablesPatchRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                tableInput = new TableInput() {{
                    columnFamilies = new java.util.HashMap<String, org.openapis.openapi.models.shared.ColumnFamily>() {{
                        put("cupiditate", new ColumnFamily() {{
                            gcRule = new GcRule() {{
                                intersection = new Intersection() {{
                                    rules = new org.openapis.openapi.models.shared.GcRule[]{{
                                        add(new GcRule() {{}}),
                                    }};
                                }};
                                maxAge = "delectus";
                                maxNumVersions = 209157;
                                union = new Union() {{
                                    rules = new org.openapis.openapi.models.shared.GcRule[]{{
                                        add(new GcRule() {{}}),
                                        add(new GcRule() {{}}),
                                    }};
                                }};
                            }};
                            stats = new ColumnFamilyStats() {{
                                averageCellsPerColumn = 2869.15;
                                averageColumnsPerRow = 2408.29;
                                logicalDataBytes = "dolorum";
                            }};
                        }});
                        put("architecto", new ColumnFamily() {{
                            gcRule = new GcRule() {{
                                intersection = new Intersection() {{
                                    rules = new org.openapis.openapi.models.shared.GcRule[]{{
                                        add(new GcRule() {{}}),
                                    }};
                                }};
                                maxAge = "aut";
                                maxNumVersions = 555649;
                                union = new Union() {{
                                    rules = new org.openapis.openapi.models.shared.GcRule[]{{
                                        add(new GcRule() {{}}),
                                        add(new GcRule() {{}}),
                                        add(new GcRule() {{}}),
                                        add(new GcRule() {{}}),
                                    }};
                                }};
                            }};
                            stats = new ColumnFamilyStats() {{
                                averageCellsPerColumn = 92.4;
                                averageColumnsPerRow = 6699.17;
                                logicalDataBytes = "repellendus";
                            }};
                        }});
                        put("porro", new ColumnFamily() {{
                            gcRule = new GcRule() {{
                                intersection = new Intersection() {{
                                    rules = new org.openapis.openapi.models.shared.GcRule[]{{
                                        add(new GcRule() {{}}),
                                        add(new GcRule() {{}}),
                                        add(new GcRule() {{}}),
                                        add(new GcRule() {{}}),
                                    }};
                                }};
                                maxAge = "ut";
                                maxNumVersions = 703495;
                                union = new Union() {{
                                    rules = new org.openapis.openapi.models.shared.GcRule[]{{
                                        add(new GcRule() {{}}),
                                        add(new GcRule() {{}}),
                                        add(new GcRule() {{}}),
                                    }};
                                }};
                            }};
                            stats = new ColumnFamilyStats() {{
                                averageCellsPerColumn = 1816.31;
                                averageColumnsPerRow = 639.55;
                                logicalDataBytes = "laudantium";
                            }};
                        }});
                    }};
                    deletionProtection = false;
                    granularity = TableGranularityEnum.TIMESTAMP_GRANULARITY_UNSPECIFIED;
                    name = "Jan Schaefer";
                    restoreInfo = new RestoreInfoInput() {{
                        sourceType = RestoreInfoSourceTypeEnum.RESTORE_SOURCE_TYPE_UNSPECIFIED;
                    }};;
                    stats = new TableStats() {{
                        averageCellsPerColumn = 2184.03;
                        averageColumnsPerRow = 9615.71;
                        logicalDataBytes = "voluptate";
                        rowCount = "consectetur";
                    }};;
                }};;
                accessToken = "vero";
                alt = AltEnum.PROTO;
                callback = "dignissimos";
                fields = "hic";
                key = "distinctio";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "odio";
                updateMask = "similique";
                uploadType = "facilis";
                uploadProtocol = "vero";
            }};            

            BigtableadminProjectsInstancesTablesPatchResponse res = sdk.projects.bigtableadminProjectsInstancesTablesPatch(req, new BigtableadminProjectsInstancesTablesPatchSecurity() {{
                option1 = new BigtableadminProjectsInstancesTablesPatchSecurityOption1("ducimus", "dolore") {{
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

## bigtableadminProjectsInstancesTablesRestore

Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesRestoreRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesRestoreResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesRestoreSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesRestoreSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesRestoreSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesRestoreSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesRestoreSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesRestoreSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RestoreTableRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesTablesRestoreRequest req = new BigtableadminProjectsInstancesTablesRestoreRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.TWO;
                restoreTableRequest = new RestoreTableRequest() {{
                    backup = "sequi";
                    tableId = "natus";
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "exercitationem";
                key = "nulla";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "maiores";
                uploadProtocol = "doloribus";
            }};            

            BigtableadminProjectsInstancesTablesRestoreResponse res = sdk.projects.bigtableadminProjectsInstancesTablesRestore(req, new BigtableadminProjectsInstancesTablesRestoreSecurity() {{
                option1 = new BigtableadminProjectsInstancesTablesRestoreSecurityOption1("iusto", "eligendi") {{
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

## bigtableadminProjectsInstancesTablesSetIamPolicy

Sets the access control policy on a Table resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesTablesSetIamPolicyRequest req = new BigtableadminProjectsInstancesTablesSetIamPolicyRequest("ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ea"),
                                            add("aspernatur"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("magnam"),
                                            add("ratione"),
                                            add("ex"),
                                            add("laudantium"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "dolor";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ex"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptatibus"),
                                            add("nostrum"),
                                            add("sapiente"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ea"),
                                            add("impedit"),
                                            add("corporis"),
                                            add("veniam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("magnam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "quo";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aspernatur"),
                                            add("minima"),
                                            add("eaque"),
                                            add("a"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "aut";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "deleniti";
                                    expression = "impedit";
                                    location = "aliquam";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("inventore"),
                                    add("non"),
                                    add("et"),
                                    add("dolorum"),
                                }};
                                role = "laborum";
                            }}),
                        }};
                        etag = "placeat";
                        version = 245367;
                    }};;
                    updateMask = "eum";
                }};;
                accessToken = "autem";
                alt = AltEnum.PROTO;
                callback = "quas";
                fields = "assumenda";
                key = "nulla";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "quasi";
                uploadProtocol = "tempora";
            }};            

            BigtableadminProjectsInstancesTablesSetIamPolicyResponse res = sdk.projects.bigtableadminProjectsInstancesTablesSetIamPolicy(req, new BigtableadminProjectsInstancesTablesSetIamPolicySecurity() {{
                option1 = new BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1("numquam", "explicabo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigtableadminProjectsInstancesTablesTestIamPermissions

Returns permissions that the caller has on the specified table resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesTablesTestIamPermissionsRequest req = new BigtableadminProjectsInstancesTablesTestIamPermissionsRequest("provident") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("magnam"),
                        add("odio"),
                    }};
                }};;
                accessToken = "eius";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "rem";
                key = "fuga";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "fugiat";
                uploadProtocol = "ut";
            }};            

            BigtableadminProjectsInstancesTablesTestIamPermissionsResponse res = sdk.projects.bigtableadminProjectsInstancesTablesTestIamPermissions(req, new BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity() {{
                option1 = new BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1("eum", "suscipit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigtableadminProjectsInstancesTablesUndelete

Restores a specified table which was accidentally deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesUndeleteRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesUndeleteResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesUndeleteSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesUndeleteSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesUndeleteSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesUndeleteSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesUndeleteSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsInstancesTablesUndeleteSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsInstancesTablesUndeleteRequest req = new BigtableadminProjectsInstancesTablesUndeleteRequest("assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quisquam", "veritatis");
                    put("ipsa", "id");
                    put("quidem", "neque");
                }};
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "fuga";
                key = "eius";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "ab";
                uploadProtocol = "cupiditate";
            }};            

            BigtableadminProjectsInstancesTablesUndeleteResponse res = sdk.projects.bigtableadminProjectsInstancesTablesUndelete(req, new BigtableadminProjectsInstancesTablesUndeleteSecurity() {{
                option1 = new BigtableadminProjectsInstancesTablesUndeleteSecurityOption1("consequatur", "tempora") {{
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

## bigtableadminProjectsLocationsGet

Gets information about a location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsGetRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsGetResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsGetSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsGetSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsGetSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsGetSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsGetSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsGetSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsGetSecurityOption6;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsGetSecurityOption7;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsLocationsGetRequest req = new BigtableadminProjectsLocationsGetRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "esse";
                key = "recusandae";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "quod";
                uploadProtocol = "dignissimos";
                view = BigtableadminProjectsLocationsGetViewEnum.VIEW_UNSPECIFIED;
            }};            

            BigtableadminProjectsLocationsGetResponse res = sdk.projects.bigtableadminProjectsLocationsGet(req, new BigtableadminProjectsLocationsGetSecurity() {{
                option1 = new BigtableadminProjectsLocationsGetSecurityOption1("nihil", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.location != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigtableadminProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsListSecurity;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsListSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsListSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsListSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsListSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsListSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsListSecurityOption6;
import org.openapis.openapi.models.operations.BigtableadminProjectsLocationsListSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminProjectsLocationsListRequest req = new BigtableadminProjectsLocationsListRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "sapiente";
                filter = "dolores";
                key = "deserunt";
                oauthToken = "molestiae";
                pageSize = 35362L;
                pageToken = "porro";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "quas";
                uploadProtocol = "praesentium";
            }};            

            BigtableadminProjectsLocationsListResponse res = sdk.projects.bigtableadminProjectsLocationsList(req, new BigtableadminProjectsLocationsListSecurity() {{
                option1 = new BigtableadminProjectsLocationsListSecurityOption1("consequuntur", "deleniti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
