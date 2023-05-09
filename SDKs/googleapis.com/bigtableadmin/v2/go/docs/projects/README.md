# Projects

### Available Operations

* [BigtableadminProjectsInstancesAppProfilesCreate](#bigtableadminprojectsinstancesappprofilescreate) - Creates an app profile within an instance.
* [BigtableadminProjectsInstancesAppProfilesList](#bigtableadminprojectsinstancesappprofileslist) - Lists information about app profiles in an instance.
* [BigtableadminProjectsInstancesClustersBackupsCopy](#bigtableadminprojectsinstancesclustersbackupscopy) - Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.
* [BigtableadminProjectsInstancesClustersBackupsCreate](#bigtableadminprojectsinstancesclustersbackupscreate) - Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.
* [BigtableadminProjectsInstancesClustersBackupsList](#bigtableadminprojectsinstancesclustersbackupslist) - Lists Cloud Bigtable backups. Returns both completed and pending backups.
* [BigtableadminProjectsInstancesClustersCreate](#bigtableadminprojectsinstancesclusterscreate) - Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
* [BigtableadminProjectsInstancesClustersHotTabletsList](#bigtableadminprojectsinstancesclustershottabletslist) - Lists hot tablets in a cluster, within the time range provided. Hot tablets are ordered based on CPU usage.
* [BigtableadminProjectsInstancesClustersList](#bigtableadminprojectsinstancesclusterslist) - Lists information about clusters in an instance.
* [BigtableadminProjectsInstancesClustersUpdate](#bigtableadminprojectsinstancesclustersupdate) - Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.
* [BigtableadminProjectsInstancesCreate](#bigtableadminprojectsinstancescreate) - Create an instance within a project. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
* [BigtableadminProjectsInstancesList](#bigtableadminprojectsinstanceslist) - Lists information about instances in a project.
* [BigtableadminProjectsInstancesTablesCheckConsistency](#bigtableadminprojectsinstancestablescheckconsistency) - Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.
* [BigtableadminProjectsInstancesTablesCreate](#bigtableadminprojectsinstancestablescreate) - Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.
* [BigtableadminProjectsInstancesTablesDelete](#bigtableadminprojectsinstancestablesdelete) - Permanently deletes a specified table and all of its data.
* [BigtableadminProjectsInstancesTablesDropRowRange](#bigtableadminprojectsinstancestablesdroprowrange) - Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.
* [BigtableadminProjectsInstancesTablesGenerateConsistencyToken](#bigtableadminprojectsinstancestablesgenerateconsistencytoken) - Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.
* [BigtableadminProjectsInstancesTablesGetIamPolicy](#bigtableadminprojectsinstancestablesgetiampolicy) - Gets the access control policy for a Table resource. Returns an empty policy if the resource exists but does not have a policy set.
* [BigtableadminProjectsInstancesTablesList](#bigtableadminprojectsinstancestableslist) - Lists all tables served from a specified instance.
* [BigtableadminProjectsInstancesTablesModifyColumnFamilies](#bigtableadminprojectsinstancestablesmodifycolumnfamilies) - Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.
* [BigtableadminProjectsInstancesTablesPatch](#bigtableadminprojectsinstancestablespatch) - Updates a specified table.
* [BigtableadminProjectsInstancesTablesRestore](#bigtableadminprojectsinstancestablesrestore) - Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.
* [BigtableadminProjectsInstancesTablesSetIamPolicy](#bigtableadminprojectsinstancestablessetiampolicy) - Sets the access control policy on a Table resource. Replaces any existing policy.
* [BigtableadminProjectsInstancesTablesTestIamPermissions](#bigtableadminprojectsinstancestablestestiampermissions) - Returns permissions that the caller has on the specified table resource.
* [BigtableadminProjectsInstancesTablesUndelete](#bigtableadminprojectsinstancestablesundelete) - Restores a specified table which was accidentally deleted.
* [BigtableadminProjectsLocationsGet](#bigtableadminprojectslocationsget) - Gets information about a location.
* [BigtableadminProjectsLocationsList](#bigtableadminprojectslocationslist) - Lists information about the supported locations for this service.

## BigtableadminProjectsInstancesAppProfilesCreate

Creates an app profile within an instance.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesAppProfilesCreate(ctx, operations.BigtableadminProjectsInstancesAppProfilesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AppProfile: &shared.AppProfile{
            Description: sdk.String("nam"),
            Etag: sdk.String("officia"),
            MultiClusterRoutingUseAny: &shared.MultiClusterRoutingUseAny{
                ClusterIds: []string{
                    "fugit",
                    "deleniti",
                    "hic",
                },
            },
            Name: sdk.String("Everett Breitenberg"),
            SingleClusterRouting: &shared.SingleClusterRouting{
                AllowTransactionalWrites: sdk.Bool(false),
                ClusterID: sdk.String("modi"),
            },
        },
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppProfileID: sdk.String("cum"),
        Callback: sdk.String("esse"),
        Fields: sdk.String("ipsum"),
        IgnoreWarnings: sdk.Bool(false),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("aspernatur"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("sed"),
    }, operations.BigtableadminProjectsInstancesAppProfilesCreateSecurity{
        Option1: &operations.BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppProfile != nil {
        // handle response
    }
}
```

## BigtableadminProjectsInstancesAppProfilesList

Lists information about app profiles in an instance.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesAppProfilesList(ctx, operations.BigtableadminProjectsInstancesAppProfilesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("hic"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("fuga"),
        PageSize: sdk.Int64(449950),
        PageToken: sdk.String("corporis"),
        Parent: "iste",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.BigtableadminProjectsInstancesAppProfilesListSecurity{
        Option1: &operations.BigtableadminProjectsInstancesAppProfilesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppProfilesResponse != nil {
        // handle response
    }
}
```

## BigtableadminProjectsInstancesClustersBackupsCopy

Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesClustersBackupsCopy(ctx, operations.BigtableadminProjectsInstancesClustersBackupsCopyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CopyBackupRequest: &shared.CopyBackupRequest{
            BackupID: sdk.String("ipsa"),
            ExpireTime: sdk.String("reiciendis"),
            SourceBackup: sdk.String("est"),
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("explicabo"),
        Parent: "nobis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.BigtableadminProjectsInstancesClustersBackupsCopySecurity{
        Option1: &operations.BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1{
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

## BigtableadminProjectsInstancesClustersBackupsCreate

Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesClustersBackupsCreate(ctx, operations.BigtableadminProjectsInstancesClustersBackupsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BackupInput: &shared.BackupInput{
            EncryptionInfo: &shared.EncryptionInfoInput{
                EncryptionStatus: &shared.Status{
                    Code: sdk.Int(570197),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "culpa": "doloribus",
                            "sapiente": "architecto",
                        },
                    },
                    Message: sdk.String("mollitia"),
                },
            },
            ExpireTime: sdk.String("dolorem"),
            Name: sdk.String("Carlos Ziemann"),
            SourceTable: sdk.String("numquam"),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BackupID: sdk.String("molestiae"),
        Callback: sdk.String("velit"),
        Fields: sdk.String("error"),
        Key: sdk.String("quia"),
        OauthToken: sdk.String("quis"),
        Parent: "vitae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("enim"),
    }, operations.BigtableadminProjectsInstancesClustersBackupsCreateSecurity{
        Option1: &operations.BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1{
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

## BigtableadminProjectsInstancesClustersBackupsList

Lists Cloud Bigtable backups. Returns both completed and pending backups.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesClustersBackupsList(ctx, operations.BigtableadminProjectsInstancesClustersBackupsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("ipsam"),
        Filter: sdk.String("id"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("aut"),
        OrderBy: sdk.String("quasi"),
        PageSize: sdk.Int64(622846),
        PageToken: sdk.String("temporibus"),
        Parent: "laborum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.BigtableadminProjectsInstancesClustersBackupsListSecurity{
        Option1: &operations.BigtableadminProjectsInstancesClustersBackupsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBackupsResponse != nil {
        // handle response
    }
}
```

## BigtableadminProjectsInstancesClustersCreate

Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesClustersCreate(ctx, operations.BigtableadminProjectsInstancesClustersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ClusterInput: &shared.ClusterInput{
            ClusterConfig: &shared.ClusterConfig{
                ClusterAutoscalingConfig: &shared.ClusterAutoscalingConfig{
                    AutoscalingLimits: &shared.AutoscalingLimits{
                        MaxServeNodes: sdk.Int(468651),
                        MinServeNodes: sdk.Int(509624),
                    },
                    AutoscalingTargets: &shared.AutoscalingTargets{
                        CPUUtilizationPercent: sdk.Int(976762),
                        StorageUtilizationGibPerNode: sdk.Int(55714),
                    },
                },
            },
            DefaultStorageType: shared.ClusterDefaultStorageTypeEnumSsd.ToPointer(),
            EncryptionConfig: &shared.EncryptionConfig{
                KmsKeyName: sdk.String("voluptate"),
            },
            Location: sdk.String("cum"),
            Name: sdk.String("Sharon Kiehn"),
            ServeNodes: sdk.Int(120196),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iusto"),
        ClusterID: sdk.String("dicta"),
        Fields: sdk.String("harum"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("accusamus"),
        Parent: "commodi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.BigtableadminProjectsInstancesClustersCreateSecurity{
        Option1: &operations.BigtableadminProjectsInstancesClustersCreateSecurityOption1{
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

## BigtableadminProjectsInstancesClustersHotTabletsList

Lists hot tablets in a cluster, within the time range provided. Hot tablets are ordered based on CPU usage.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesClustersHotTabletsList(ctx, operations.BigtableadminProjectsInstancesClustersHotTabletsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("molestias"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("pariatur"),
        EndTime: sdk.String("modi"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("rem"),
        OauthToken: sdk.String("voluptates"),
        PageSize: sdk.Int64(93940),
        PageToken: sdk.String("repudiandae"),
        Parent: "sint",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        StartTime: sdk.String("itaque"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("enim"),
    }, operations.BigtableadminProjectsInstancesClustersHotTabletsListSecurity{
        Option1: &operations.BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHotTabletsResponse != nil {
        // handle response
    }
}
```

## BigtableadminProjectsInstancesClustersList

Lists information about clusters in an instance.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesClustersList(ctx, operations.BigtableadminProjectsInstancesClustersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quibusdam"),
        PageToken: sdk.String("labore"),
        Parent: "modi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.BigtableadminProjectsInstancesClustersListSecurity{
        Option1: &operations.BigtableadminProjectsInstancesClustersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClustersResponse != nil {
        // handle response
    }
}
```

## BigtableadminProjectsInstancesClustersUpdate

Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesClustersUpdate(ctx, operations.BigtableadminProjectsInstancesClustersUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ClusterInput: &shared.ClusterInput{
            ClusterConfig: &shared.ClusterConfig{
                ClusterAutoscalingConfig: &shared.ClusterAutoscalingConfig{
                    AutoscalingLimits: &shared.AutoscalingLimits{
                        MaxServeNodes: sdk.Int(20107),
                        MinServeNodes: sdk.Int(164940),
                    },
                    AutoscalingTargets: &shared.AutoscalingTargets{
                        CPUUtilizationPercent: sdk.Int(828940),
                        StorageUtilizationGibPerNode: sdk.Int(369808),
                    },
                },
            },
            DefaultStorageType: shared.ClusterDefaultStorageTypeEnumStorageTypeUnspecified.ToPointer(),
            EncryptionConfig: &shared.EncryptionConfig{
                KmsKeyName: sdk.String("fugit"),
            },
            Location: sdk.String("dolorum"),
            Name: sdk.String("Eddie Prosacco"),
            ServeNodes: sdk.Int(962189),
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("sint"),
        Key: sdk.String("aliquid"),
        Name: "Terence Marquardt",
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("in"),
    }, operations.BigtableadminProjectsInstancesClustersUpdateSecurity{
        Option1: &operations.BigtableadminProjectsInstancesClustersUpdateSecurityOption1{
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

## BigtableadminProjectsInstancesCreate

Create an instance within a project. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesCreate(ctx, operations.BigtableadminProjectsInstancesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateInstanceRequestInput: &shared.CreateInstanceRequestInput{
            Clusters: map[string]shared.ClusterInput{
                "maiores": shared.ClusterInput{
                    ClusterConfig: &shared.ClusterConfig{
                        ClusterAutoscalingConfig: &shared.ClusterAutoscalingConfig{
                            AutoscalingLimits: &shared.AutoscalingLimits{
                                MaxServeNodes: sdk.Int(699479),
                                MinServeNodes: sdk.Int(116202),
                            },
                            AutoscalingTargets: &shared.AutoscalingTargets{
                                CPUUtilizationPercent: sdk.Int(297437),
                                StorageUtilizationGibPerNode: sdk.Int(767024),
                            },
                        },
                    },
                    DefaultStorageType: shared.ClusterDefaultStorageTypeEnumHdd.ToPointer(),
                    EncryptionConfig: &shared.EncryptionConfig{
                        KmsKeyName: sdk.String("ea"),
                    },
                    Location: sdk.String("aliquid"),
                    Name: sdk.String("Tomas Friesen"),
                    ServeNodes: sdk.Int(881736),
                },
                "delectus": shared.ClusterInput{
                    ClusterConfig: &shared.ClusterConfig{
                        ClusterAutoscalingConfig: &shared.ClusterAutoscalingConfig{
                            AutoscalingLimits: &shared.AutoscalingLimits{
                                MaxServeNodes: sdk.Int(692532),
                                MinServeNodes: sdk.Int(588465),
                            },
                            AutoscalingTargets: &shared.AutoscalingTargets{
                                CPUUtilizationPercent: sdk.Int(725255),
                                StorageUtilizationGibPerNode: sdk.Int(659669),
                            },
                        },
                    },
                    DefaultStorageType: shared.ClusterDefaultStorageTypeEnumSsd.ToPointer(),
                    EncryptionConfig: &shared.EncryptionConfig{
                        KmsKeyName: sdk.String("deleniti"),
                    },
                    Location: sdk.String("sapiente"),
                    Name: sdk.String("Sandy Huels"),
                    ServeNodes: sdk.Int(606393),
                },
                "molestiae": shared.ClusterInput{
                    ClusterConfig: &shared.ClusterConfig{
                        ClusterAutoscalingConfig: &shared.ClusterAutoscalingConfig{
                            AutoscalingLimits: &shared.AutoscalingLimits{
                                MaxServeNodes: sdk.Int(19193),
                                MinServeNodes: sdk.Int(470132),
                            },
                            AutoscalingTargets: &shared.AutoscalingTargets{
                                CPUUtilizationPercent: sdk.Int(301575),
                                StorageUtilizationGibPerNode: sdk.Int(716075),
                            },
                        },
                    },
                    DefaultStorageType: shared.ClusterDefaultStorageTypeEnumSsd.ToPointer(),
                    EncryptionConfig: &shared.EncryptionConfig{
                        KmsKeyName: sdk.String("labore"),
                    },
                    Location: sdk.String("labore"),
                    Name: sdk.String("Ada Rohan"),
                    ServeNodes: sdk.Int(135474),
                },
                "architecto": shared.ClusterInput{
                    ClusterConfig: &shared.ClusterConfig{
                        ClusterAutoscalingConfig: &shared.ClusterAutoscalingConfig{
                            AutoscalingLimits: &shared.AutoscalingLimits{
                                MaxServeNodes: sdk.Int(298282),
                                MinServeNodes: sdk.Int(92373),
                            },
                            AutoscalingTargets: &shared.AutoscalingTargets{
                                CPUUtilizationPercent: sdk.Int(569965),
                                StorageUtilizationGibPerNode: sdk.Int(354047),
                            },
                        },
                    },
                    DefaultStorageType: shared.ClusterDefaultStorageTypeEnumSsd.ToPointer(),
                    EncryptionConfig: &shared.EncryptionConfig{
                        KmsKeyName: sdk.String("quos"),
                    },
                    Location: sdk.String("sint"),
                    Name: sdk.String("Angie Wisozk"),
                    ServeNodes: sdk.Int(431418),
                },
            },
            Instance: &shared.InstanceInput{
                DisplayName: sdk.String("dolor"),
                Labels: map[string]string{
                    "odit": "nemo",
                    "quasi": "iure",
                    "doloribus": "debitis",
                    "eius": "maxime",
                },
                Name: sdk.String("Mr. Andres King"),
                Type: shared.InstanceTypeEnumProduction.ToPointer(),
            },
            InstanceID: sdk.String("expedita"),
            Parent: sdk.String("nihil"),
        },
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("accusantium"),
        Parent: "consequuntur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("magni"),
    }, operations.BigtableadminProjectsInstancesCreateSecurity{
        Option1: &operations.BigtableadminProjectsInstancesCreateSecurityOption1{
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

## BigtableadminProjectsInstancesList

Lists information about instances in a project.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesList(ctx, operations.BigtableadminProjectsInstancesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("excepturi"),
        PageToken: sdk.String("odit"),
        Parent: "ea",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.BigtableadminProjectsInstancesListSecurity{
        Option1: &operations.BigtableadminProjectsInstancesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstancesResponse != nil {
        // handle response
    }
}
```

## BigtableadminProjectsInstancesTablesCheckConsistency

Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesTablesCheckConsistency(ctx, operations.BigtableadminProjectsInstancesTablesCheckConsistencyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CheckConsistencyRequest: &shared.CheckConsistencyRequest{
            ConsistencyToken: sdk.String("ipsam"),
        },
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("pariatur"),
        Name: "Camille Armstrong",
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("hic"),
    }, operations.BigtableadminProjectsInstancesTablesCheckConsistencySecurity{
        Option1: &operations.BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckConsistencyResponse != nil {
        // handle response
    }
}
```

## BigtableadminProjectsInstancesTablesCreate

Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesTablesCreate(ctx, operations.BigtableadminProjectsInstancesTablesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreateTableRequestInput: &shared.CreateTableRequestInput{
            InitialSplits: []shared.Split{
                shared.Split{
                    Key: sdk.String("dolores"),
                },
                shared.Split{
                    Key: sdk.String("quis"),
                },
                shared.Split{
                    Key: sdk.String("totam"),
                },
            },
            Table: &shared.TableInput{
                ColumnFamilies: map[string]shared.ColumnFamily{
                    "eaque": shared.ColumnFamily{
                        GcRule: &shared.GcRule{
                            Intersection: &shared.Intersection{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                            MaxAge: sdk.String("nesciunt"),
                            MaxNumVersions: sdk.Int(179490),
                            Union: &shared.Union{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                },
                            },
                        },
                        Stats: &shared.ColumnFamilyStats{
                            AverageCellsPerColumn: sdk.Float64(1709.86),
                            AverageColumnsPerRow: sdk.Float64(7936.98),
                            LogicalDataBytes: sdk.String("quam"),
                        },
                    },
                    "dolor": shared.ColumnFamily{
                        GcRule: &shared.GcRule{
                            Intersection: &shared.Intersection{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                            MaxAge: sdk.String("nostrum"),
                            MaxNumVersions: sdk.Int(944120),
                            Union: &shared.Union{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                        },
                        Stats: &shared.ColumnFamilyStats{
                            AverageCellsPerColumn: sdk.Float64(6082.53),
                            AverageColumnsPerRow: sdk.Float64(7044.15),
                            LogicalDataBytes: sdk.String("perspiciatis"),
                        },
                    },
                },
                DeletionProtection: sdk.Bool(false),
                Granularity: shared.TableGranularityEnumTimestampGranularityUnspecified.ToPointer(),
                Name: sdk.String("Bobby Kutch V"),
                RestoreInfo: &shared.RestoreInfoInput{
                    SourceType: shared.RestoreInfoSourceTypeEnumBackup.ToPointer(),
                },
                Stats: &shared.TableStats{
                    AverageCellsPerColumn: sdk.Float64(2378.93),
                    AverageColumnsPerRow: sdk.Float64(9923.97),
                    LogicalDataBytes: sdk.String("earum"),
                    RowCount: sdk.String("modi"),
                },
            },
            TableID: sdk.String("iste"),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("provident"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("libero"),
        Parent: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.BigtableadminProjectsInstancesTablesCreateSecurity{
        Option1: &operations.BigtableadminProjectsInstancesTablesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Table != nil {
        // handle response
    }
}
```

## BigtableadminProjectsInstancesTablesDelete

Permanently deletes a specified table and all of its data.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesTablesDelete(ctx, operations.BigtableadminProjectsInstancesTablesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("ipsum"),
        IgnoreWarnings: sdk.Bool(false),
        Key: sdk.String("hic"),
        Name: "Felipe Klein",
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.BigtableadminProjectsInstancesTablesDeleteSecurity{
        Option1: &operations.BigtableadminProjectsInstancesTablesDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## BigtableadminProjectsInstancesTablesDropRowRange

Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesTablesDropRowRange(ctx, operations.BigtableadminProjectsInstancesTablesDropRowRangeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DropRowRangeRequest: &shared.DropRowRangeRequest{
            DeleteAllDataFromTable: sdk.Bool(false),
            RowKeyPrefix: sdk.String("ipsa"),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("quidem"),
        Name: "Hector Mosciski",
        OauthToken: sdk.String("sit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("soluta"),
    }, operations.BigtableadminProjectsInstancesTablesDropRowRangeSecurity{
        Option1: &operations.BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## BigtableadminProjectsInstancesTablesGenerateConsistencyToken

Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesTablesGenerateConsistencyToken(ctx, operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "voluptate": "dolorum",
            "deleniti": "omnis",
        },
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("ipsum"),
        Name: "Alberta Ullrich",
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity{
        Option1: &operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateConsistencyTokenResponse != nil {
        // handle response
    }
}
```

## BigtableadminProjectsInstancesTablesGetIamPolicy

Gets the access control policy for a Table resource. Returns an empty policy if the resource exists but does not have a policy set.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesTablesGetIamPolicy(ctx, operations.BigtableadminProjectsInstancesTablesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(904425),
            },
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("minima"),
        Key: sdk.String("repellendus"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("similique"),
        Resource: "alias",
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.BigtableadminProjectsInstancesTablesGetIamPolicySecurity{
        Option1: &operations.BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## BigtableadminProjectsInstancesTablesList

Lists all tables served from a specified instance.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesTablesList(ctx, operations.BigtableadminProjectsInstancesTablesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("qui"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("a"),
        PageSize: sdk.Int64(456130),
        PageToken: sdk.String("harum"),
        Parent: "iusto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("tenetur"),
        View: operations.BigtableadminProjectsInstancesTablesListViewEnumNameOnly.ToPointer(),
    }, operations.BigtableadminProjectsInstancesTablesListSecurity{
        Option1: &operations.BigtableadminProjectsInstancesTablesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTablesResponse != nil {
        // handle response
    }
}
```

## BigtableadminProjectsInstancesTablesModifyColumnFamilies

Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesTablesModifyColumnFamilies(ctx, operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ModifyColumnFamiliesRequest: &shared.ModifyColumnFamiliesRequest{
            Modifications: []shared.Modification{
                shared.Modification{
                    Create: &shared.ColumnFamily{
                        GcRule: &shared.GcRule{
                            Intersection: &shared.Intersection{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                            MaxAge: sdk.String("enim"),
                            MaxNumVersions: sdk.Int(213312),
                            Union: &shared.Union{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                        },
                        Stats: &shared.ColumnFamilyStats{
                            AverageCellsPerColumn: sdk.Float64(5182.01),
                            AverageColumnsPerRow: sdk.Float64(4717.52),
                            LogicalDataBytes: sdk.String("sit"),
                        },
                    },
                    Drop: sdk.Bool(false),
                    ID: sdk.String("b326b5a7-3429-4cdb-9a84-22bb679d2322"),
                    Update: &shared.ColumnFamily{
                        GcRule: &shared.GcRule{
                            Intersection: &shared.Intersection{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                            MaxAge: sdk.String("sunt"),
                            MaxNumVersions: sdk.Int(355613),
                            Union: &shared.Union{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                        },
                        Stats: &shared.ColumnFamilyStats{
                            AverageCellsPerColumn: sdk.Float64(9404.32),
                            AverageColumnsPerRow: sdk.Float64(304.52),
                            LogicalDataBytes: sdk.String("cumque"),
                        },
                    },
                },
                shared.Modification{
                    Create: &shared.ColumnFamily{
                        GcRule: &shared.GcRule{
                            Intersection: &shared.Intersection{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                            MaxAge: sdk.String("nobis"),
                            MaxNumVersions: sdk.Int(92596),
                            Union: &shared.Union{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                        },
                        Stats: &shared.ColumnFamilyStats{
                            AverageCellsPerColumn: sdk.Float64(2174.5),
                            AverageColumnsPerRow: sdk.Float64(834.22),
                            LogicalDataBytes: sdk.String("nobis"),
                        },
                    },
                    Drop: sdk.Bool(false),
                    ID: sdk.String("8b90f344-3a11-408e-8adc-f4b921879fce"),
                    Update: &shared.ColumnFamily{
                        GcRule: &shared.GcRule{
                            Intersection: &shared.Intersection{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                            MaxAge: sdk.String("quis"),
                            MaxNumVersions: sdk.Int(218403),
                            Union: &shared.Union{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                        },
                        Stats: &shared.ColumnFamilyStats{
                            AverageCellsPerColumn: sdk.Float64(4551.69),
                            AverageColumnsPerRow: sdk.Float64(2317.01),
                            LogicalDataBytes: sdk.String("vero"),
                        },
                    },
                },
                shared.Modification{
                    Create: &shared.ColumnFamily{
                        GcRule: &shared.GcRule{
                            Intersection: &shared.Intersection{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                            MaxAge: sdk.String("dignissimos"),
                            MaxNumVersions: sdk.Int(941378),
                            Union: &shared.Union{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                        },
                        Stats: &shared.ColumnFamilyStats{
                            AverageCellsPerColumn: sdk.Float64(7992.03),
                            AverageColumnsPerRow: sdk.Float64(4861.6),
                            LogicalDataBytes: sdk.String("similique"),
                        },
                    },
                    Drop: sdk.Bool(false),
                    ID: sdk.String("bd74dd39-c0f5-4d2c-bf7c-70a45626d436"),
                    Update: &shared.ColumnFamily{
                        GcRule: &shared.GcRule{
                            Intersection: &shared.Intersection{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                            MaxAge: sdk.String("dicta"),
                            MaxNumVersions: sdk.Int(224317),
                            Union: &shared.Union{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                        },
                        Stats: &shared.ColumnFamilyStats{
                            AverageCellsPerColumn: sdk.Float64(978.44),
                            AverageColumnsPerRow: sdk.Float64(4061.2),
                            LogicalDataBytes: sdk.String("nulla"),
                        },
                    },
                },
                shared.Modification{
                    Create: &shared.ColumnFamily{
                        GcRule: &shared.GcRule{
                            Intersection: &shared.Intersection{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                            MaxAge: sdk.String("voluptatibus"),
                            MaxNumVersions: sdk.Int(343605),
                            Union: &shared.Union{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                        },
                        Stats: &shared.ColumnFamilyStats{
                            AverageCellsPerColumn: sdk.Float64(7888.73),
                            AverageColumnsPerRow: sdk.Float64(9065.56),
                            LogicalDataBytes: sdk.String("ea"),
                        },
                    },
                    Drop: sdk.Bool(false),
                    ID: sdk.String("c556146c-3e25-40fb-808c-42e141aac366"),
                    Update: &shared.ColumnFamily{
                        GcRule: &shared.GcRule{
                            Intersection: &shared.Intersection{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                            MaxAge: sdk.String("quas"),
                            MaxNumVersions: sdk.Int(829603),
                            Union: &shared.Union{
                                Rules: []shared.GcRule{
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                    shared.GcRule{},
                                },
                            },
                        },
                        Stats: &shared.ColumnFamilyStats{
                            AverageCellsPerColumn: sdk.Float64(3790.34),
                            AverageColumnsPerRow: sdk.Float64(7270.44),
                            LogicalDataBytes: sdk.String("quasi"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("provident"),
        Key: sdk.String("ipsa"),
        Name: "Megan Kuhlman",
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("reprehenderit"),
    }, operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity{
        Option1: &operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Table != nil {
        // handle response
    }
}
```

## BigtableadminProjectsInstancesTablesPatch

Updates a specified table.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesTablesPatch(ctx, operations.BigtableadminProjectsInstancesTablesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TableInput: &shared.TableInput{
            ColumnFamilies: map[string]shared.ColumnFamily{
                "ut": shared.ColumnFamily{
                    GcRule: &shared.GcRule{
                        Intersection: &shared.Intersection{
                            Rules: []shared.GcRule{
                                shared.GcRule{},
                                shared.GcRule{},
                            },
                        },
                        MaxAge: sdk.String("suscipit"),
                        MaxNumVersions: sdk.Int(826871),
                        Union: &shared.Union{
                            Rules: []shared.GcRule{
                                shared.GcRule{},
                            },
                        },
                    },
                    Stats: &shared.ColumnFamilyStats{
                        AverageCellsPerColumn: sdk.Float64(5093.42),
                        AverageColumnsPerRow: sdk.Float64(7885.46),
                        LogicalDataBytes: sdk.String("veritatis"),
                    },
                },
                "ipsa": shared.ColumnFamily{
                    GcRule: &shared.GcRule{
                        Intersection: &shared.Intersection{
                            Rules: []shared.GcRule{
                                shared.GcRule{},
                                shared.GcRule{},
                                shared.GcRule{},
                            },
                        },
                        MaxAge: sdk.String("quidem"),
                        MaxNumVersions: sdk.Int(206594),
                        Union: &shared.Union{
                            Rules: []shared.GcRule{
                                shared.GcRule{},
                                shared.GcRule{},
                                shared.GcRule{},
                                shared.GcRule{},
                            },
                        },
                    },
                    Stats: &shared.ColumnFamilyStats{
                        AverageCellsPerColumn: sdk.Float64(8472.76),
                        AverageColumnsPerRow: sdk.Float64(7774.08),
                        LogicalDataBytes: sdk.String("fuga"),
                    },
                },
                "eius": shared.ColumnFamily{
                    GcRule: &shared.GcRule{
                        Intersection: &shared.Intersection{
                            Rules: []shared.GcRule{
                                shared.GcRule{},
                            },
                        },
                        MaxAge: sdk.String("voluptas"),
                        MaxNumVersions: sdk.Int(69859),
                        Union: &shared.Union{
                            Rules: []shared.GcRule{
                                shared.GcRule{},
                                shared.GcRule{},
                                shared.GcRule{},
                            },
                        },
                    },
                    Stats: &shared.ColumnFamilyStats{
                        AverageCellsPerColumn: sdk.Float64(96.88),
                        AverageColumnsPerRow: sdk.Float64(2728.22),
                        LogicalDataBytes: sdk.String("debitis"),
                    },
                },
                "ipsam": shared.ColumnFamily{
                    GcRule: &shared.GcRule{
                        Intersection: &shared.Intersection{
                            Rules: []shared.GcRule{
                                shared.GcRule{},
                            },
                        },
                        MaxAge: sdk.String("sequi"),
                        MaxNumVersions: sdk.Int(779192),
                        Union: &shared.Union{
                            Rules: []shared.GcRule{
                                shared.GcRule{},
                                shared.GcRule{},
                            },
                        },
                    },
                    Stats: &shared.ColumnFamilyStats{
                        AverageCellsPerColumn: sdk.Float64(9251.64),
                        AverageColumnsPerRow: sdk.Float64(446.12),
                        LogicalDataBytes: sdk.String("distinctio"),
                    },
                },
            },
            DeletionProtection: sdk.Bool(false),
            Granularity: shared.TableGranularityEnumMillis.ToPointer(),
            Name: sdk.String("Debra Kovacek"),
            RestoreInfo: &shared.RestoreInfoInput{
                SourceType: shared.RestoreInfoSourceTypeEnumRestoreSourceTypeUnspecified.ToPointer(),
            },
            Stats: &shared.TableStats{
                AverageCellsPerColumn: sdk.Float64(4884.1),
                AverageColumnsPerRow: sdk.Float64(5775.43),
                LogicalDataBytes: sdk.String("commodi"),
                RowCount: sdk.String("sapiente"),
            },
        },
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("porro"),
        Name: "Dianne Langosh",
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UpdateMask: sdk.String("mollitia"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("atque"),
    }, operations.BigtableadminProjectsInstancesTablesPatchSecurity{
        Option1: &operations.BigtableadminProjectsInstancesTablesPatchSecurityOption1{
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

## BigtableadminProjectsInstancesTablesRestore

Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesTablesRestore(ctx, operations.BigtableadminProjectsInstancesTablesRestoreRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RestoreTableRequest: &shared.RestoreTableRequest{
            Backup: sdk.String("minima"),
            TableID: sdk.String("nisi"),
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("ratione"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("saepe"),
        Parent: "occaecati",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("esse"),
    }, operations.BigtableadminProjectsInstancesTablesRestoreSecurity{
        Option1: &operations.BigtableadminProjectsInstancesTablesRestoreSecurityOption1{
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

## BigtableadminProjectsInstancesTablesSetIamPolicy

Sets the access control policy on a Table resource. Replaces any existing policy.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesTablesSetIamPolicy(ctx, operations.BigtableadminProjectsInstancesTablesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quod",
                                    "nam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("aliquid"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "vel",
                                    "harum",
                                    "molestiae",
                                    "rerum",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("minima"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "sit",
                                    "culpa",
                                    "tempore",
                                    "adipisci",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "consequatur",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "sapiente",
                                    "consectetur",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("blanditiis"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "nulla",
                                    "quas",
                                    "esse",
                                    "quasi",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "sint",
                                    "pariatur",
                                    "possimus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "asperiores",
                                    "facere",
                                    "veritatis",
                                    "consequuntur",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("similique"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("aliquid"),
                            Expression: sdk.String("tenetur"),
                            Location: sdk.String("quae"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "in",
                            "eius",
                        },
                        Role: sdk.String("libero"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("illum"),
                            Expression: sdk.String("soluta"),
                            Location: sdk.String("accusantium"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "dicta",
                            "ullam",
                            "reprehenderit",
                            "ullam",
                        },
                        Role: sdk.String("nisi"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("aut"),
                            Expression: sdk.String("voluptatum"),
                            Location: sdk.String("qui"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "deleniti",
                            "itaque",
                        },
                        Role: sdk.String("dolorum"),
                    },
                },
                Etag: sdk.String("architecto"),
                Version: sdk.Int(609178),
            },
            UpdateMask: sdk.String("tenetur"),
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("et"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        Resource: "consectetur",
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("iste"),
    }, operations.BigtableadminProjectsInstancesTablesSetIamPolicySecurity{
        Option1: &operations.BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## BigtableadminProjectsInstancesTablesTestIamPermissions

Returns permissions that the caller has on the specified table resource.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesTablesTestIamPermissions(ctx, operations.BigtableadminProjectsInstancesTablesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "rem",
            },
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        Resource: "voluptatem",
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity{
        Option1: &operations.BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## BigtableadminProjectsInstancesTablesUndelete

Restores a specified table which was accidentally deleted.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsInstancesTablesUndelete(ctx, operations.BigtableadminProjectsInstancesTablesUndeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "explicabo": "voluptas",
            "aut": "dignissimos",
            "dicta": "maiores",
            "natus": "velit",
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("aperiam"),
        Key: sdk.String("ea"),
        Name: "Kathryn Sipes",
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.BigtableadminProjectsInstancesTablesUndeleteSecurity{
        Option1: &operations.BigtableadminProjectsInstancesTablesUndeleteSecurityOption1{
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

## BigtableadminProjectsLocationsGet

Gets information about a location.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsLocationsGet(ctx, operations.BigtableadminProjectsLocationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("labore"),
        Key: sdk.String("ab"),
        Name: "Kristine Ondricka",
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("totam"),
        View: operations.BigtableadminProjectsLocationsGetViewEnumStatsView.ToPointer(),
    }, operations.BigtableadminProjectsLocationsGetSecurity{
        Option1: &operations.BigtableadminProjectsLocationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Location != nil {
        // handle response
    }
}
```

## BigtableadminProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

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
    res, err := s.Projects.BigtableadminProjectsLocationsList(ctx, operations.BigtableadminProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("labore"),
        Filter: sdk.String("possimus"),
        Key: sdk.String("facilis"),
        Name: "Leslie King",
        OauthToken: sdk.String("assumenda"),
        PageSize: sdk.Int64(363161),
        PageToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("cum"),
    }, operations.BigtableadminProjectsLocationsListSecurity{
        Option1: &operations.BigtableadminProjectsLocationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```
