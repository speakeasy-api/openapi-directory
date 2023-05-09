# Instances

### Available Operations

* [SQLInstancesAddServerCa](#sqlinstancesaddserverca) - Add a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.
* [SQLInstancesClone](#sqlinstancesclone) - Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.
* [SQLInstancesDelete](#sqlinstancesdelete) - Deletes a Cloud SQL instance.
* [SQLInstancesDemoteMaster](#sqlinstancesdemotemaster) - Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
* [SQLInstancesExport](#sqlinstancesexport) - Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
* [SQLInstancesFailover](#sqlinstancesfailover) - Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.
* [SQLInstancesGet](#sqlinstancesget) - Retrieves a resource containing information about a Cloud SQL instance.
* [SQLInstancesImport](#sqlinstancesimport) - Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
* [SQLInstancesInsert](#sqlinstancesinsert) - Creates a new Cloud SQL instance.
* [SQLInstancesList](#sqlinstanceslist) - Lists instances under a given project.
* [SQLInstancesListServerCas](#sqlinstanceslistservercas) - Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.
* [SQLInstancesPatch](#sqlinstancespatch) - Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.
* [SQLInstancesPromoteReplica](#sqlinstancespromotereplica) - Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.
* [SQLInstancesResetSslConfig](#sqlinstancesresetsslconfig) - Deletes all client certificates and generates a new server SSL certificate for the instance.
* [SQLInstancesRestart](#sqlinstancesrestart) - Restarts a Cloud SQL instance.
* [SQLInstancesRestoreBackup](#sqlinstancesrestorebackup) - Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.
* [SQLInstancesRotateServerCa](#sqlinstancesrotateserverca) - Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.
* [SQLInstancesStartReplica](#sqlinstancesstartreplica) - Starts the replication in the read replica instance.
* [SQLInstancesStopReplica](#sqlinstancesstopreplica) - Stops the replication in the read replica instance.
* [SQLInstancesTruncateLog](#sqlinstancestruncatelog) - Truncate MySQL general and slow query log tables MySQL only.
* [SQLInstancesUpdate](#sqlinstancesupdate) - Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.

## SQLInstancesAddServerCa

Add a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.

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
    res, err := s.Instances.SQLInstancesAddServerCa(ctx, operations.SQLInstancesAddServerCaRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("dolores"),
        Instance: "quis",
        Key: sdk.String("totam"),
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        Project: "eaque",
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("eos"),
    }, operations.SQLInstancesAddServerCaSecurity{
        Option1: &operations.SQLInstancesAddServerCaSecurityOption1{
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

## SQLInstancesClone

Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.

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
    res, err := s.Instances.SQLInstancesClone(ctx, operations.SQLInstancesCloneRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InstancesCloneRequest: &shared.InstancesCloneRequest{
            CloneContext: &shared.CloneContext{
                AllocatedIPRange: sdk.String("dolores"),
                BinLogCoordinates: &shared.BinLogCoordinates{
                    BinLogFileName: sdk.String("minus"),
                    BinLogPosition: sdk.String("quam"),
                    Kind: sdk.String("dolor"),
                },
                DatabaseNames: []string{
                    "nostrum",
                    "hic",
                    "recusandae",
                    "omnis",
                },
                DestinationInstanceName: sdk.String("facilis"),
                Kind: sdk.String("perspiciatis"),
                PitrTimestampMs: sdk.String("voluptatem"),
                PointInTime: sdk.String("porro"),
                PreferredZone: sdk.String("consequuntur"),
            },
        },
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eaque"),
        Fields: sdk.String("occaecati"),
        Instance: "rerum",
        Key: sdk.String("adipisci"),
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        Project: "earum",
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.SQLInstancesCloneSecurity{
        Option1: &operations.SQLInstancesCloneSecurityOption1{
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

## SQLInstancesDelete

Deletes a Cloud SQL instance.

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
    res, err := s.Instances.SQLInstancesDelete(ctx, operations.SQLInstancesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("libero"),
        Instance: "delectus",
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        Project: "aliquid",
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.SQLInstancesDeleteSecurity{
        Option1: &operations.SQLInstancesDeleteSecurityOption1{
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

## SQLInstancesDemoteMaster

Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.

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
    res, err := s.Instances.SQLInstancesDemoteMaster(ctx, operations.SQLInstancesDemoteMasterRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InstancesDemoteMasterRequest: &shared.InstancesDemoteMasterRequest{
            DemoteMasterContext: &shared.DemoteMasterContext{
                Kind: sdk.String("ipsum"),
                MasterInstanceName: sdk.String("hic"),
                ReplicaConfiguration: &shared.DemoteMasterConfiguration{
                    Kind: sdk.String("excepturi"),
                    MysqlReplicaConfiguration: &shared.DemoteMasterMySQLReplicaConfiguration{
                        CaCertificate: sdk.String("cum"),
                        ClientCertificate: sdk.String("voluptate"),
                        ClientKey: sdk.String("dignissimos"),
                        Kind: sdk.String("reiciendis"),
                        Password: sdk.String("amet"),
                        Username: sdk.String("Marina5"),
                    },
                },
                SkipReplicationSetup: sdk.Bool(false),
                VerifyGtidConsistency: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("quaerat"),
        Instance: "accusamus",
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        Project: "voluptas",
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("atque"),
    }, operations.SQLInstancesDemoteMasterSecurity{
        Option1: &operations.SQLInstancesDemoteMasterSecurityOption1{
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

## SQLInstancesExport

Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.

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
    res, err := s.Instances.SQLInstancesExport(ctx, operations.SQLInstancesExportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InstancesExportRequest: &shared.InstancesExportRequest{
            ExportContext: &shared.ExportContext{
                BakExportOptions: &shared.ExportContextBakExportOptions{
                    StripeCount: sdk.Int(854614),
                    Striped: sdk.Bool(false),
                },
                CsvExportOptions: &shared.ExportContextCsvExportOptions{
                    EscapeCharacter: sdk.String("ab"),
                    FieldsTerminatedBy: sdk.String("soluta"),
                    LinesTerminatedBy: sdk.String("dolorum"),
                    QuoteCharacter: sdk.String("iusto"),
                    SelectQuery: sdk.String("voluptate"),
                },
                Databases: []string{
                    "deleniti",
                    "omnis",
                    "necessitatibus",
                },
                FileType: shared.ExportContextFileTypeEnumCsv.ToPointer(),
                Kind: sdk.String("asperiores"),
                Offload: sdk.Bool(false),
                SQLExportOptions: &shared.ExportContextSQLExportOptions{
                    MysqlExportOptions: &shared.ExportContextSQLExportOptionsMysqlExportOptions{
                        MasterData: sdk.Int(469497),
                    },
                    SchemaOnly: sdk.Bool(false),
                    Tables: []string{
                        "voluptate",
                    },
                },
                URI: sdk.String("https://untrue-dinghy.com"),
            },
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("accusamus"),
        Instance: "ad",
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        Project: "deserunt",
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("repellendus"),
    }, operations.SQLInstancesExportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## SQLInstancesFailover

Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.

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
    res, err := s.Instances.SQLInstancesFailover(ctx, operations.SQLInstancesFailoverRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InstancesFailoverRequest: &shared.InstancesFailoverRequest{
            FailoverContext: &shared.FailoverContext{
                Kind: sdk.String("similique"),
                SettingsVersion: sdk.String("alias"),
            },
        },
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("vel"),
        Instance: "quod",
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        Project: "dolorum",
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("harum"),
    }, operations.SQLInstancesFailoverSecurity{
        Option1: &operations.SQLInstancesFailoverSecurityOption1{
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

## SQLInstancesGet

Retrieves a resource containing information about a Cloud SQL instance.

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
    res, err := s.Instances.SQLInstancesGet(ctx, operations.SQLInstancesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("amet"),
        Instance: "tempore",
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        Project: "enim",
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("totam"),
    }, operations.SQLInstancesGetSecurity{
        Option1: &operations.SQLInstancesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DatabaseInstance != nil {
        // handle response
    }
}
```

## SQLInstancesImport

Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.

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
    res, err := s.Instances.SQLInstancesImport(ctx, operations.SQLInstancesImportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InstancesImportRequest: &shared.InstancesImportRequest{
            ImportContext: &shared.ImportContext{
                BakImportOptions: &shared.ImportContextBakImportOptions{
                    EncryptionOptions: &shared.ImportContextBakImportOptionsEncryptionOptions{
                        CertPath: sdk.String("sit"),
                        PvkPassword: sdk.String("expedita"),
                        PvkPath: sdk.String("neque"),
                    },
                    Striped: sdk.Bool(false),
                },
                CsvImportOptions: &shared.ImportContextCsvImportOptions{
                    Columns: []string{
                        "vel",
                    },
                    EscapeCharacter: sdk.String("libero"),
                    FieldsTerminatedBy: sdk.String("voluptas"),
                    LinesTerminatedBy: sdk.String("deserunt"),
                    QuoteCharacter: sdk.String("quam"),
                    Table: sdk.String("ipsum"),
                },
                Database: sdk.String("incidunt"),
                FileType: shared.ImportContextFileTypeEnumSQLFileTypeUnspecified.ToPointer(),
                ImportUser: sdk.String("cupiditate"),
                Kind: sdk.String("maxime"),
                URI: sdk.String("https://short-business.net"),
            },
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("dolores"),
        Instance: "distinctio",
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        Project: "quam",
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("qui"),
    }, operations.SQLInstancesImportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## SQLInstancesInsert

Creates a new Cloud SQL instance.

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
    res, err := s.Instances.SQLInstancesInsert(ctx, operations.SQLInstancesInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DatabaseInstanceInput: &shared.DatabaseInstanceInput{
            BackendType: shared.DatabaseInstanceBackendTypeEnumSQLBackendTypeUnspecified.ToPointer(),
            ConnectionName: sdk.String("magni"),
            CurrentDiskSize: sdk.String("odio"),
            DatabaseVersion: shared.DatabaseInstanceDatabaseVersionEnumMysql57.ToPointer(),
            DiskEncryptionConfiguration: &shared.DiskEncryptionConfiguration{
                Kind: sdk.String("ullam"),
                KmsKeyName: sdk.String("nam"),
            },
            DiskEncryptionStatus: &shared.DiskEncryptionStatus{
                Kind: sdk.String("hic"),
                KmsKeyVersionName: sdk.String("voluptatem"),
            },
            Etag: sdk.String("cumque"),
            FailoverReplica: &shared.DatabaseInstanceFailoverReplica{
                Available: sdk.Bool(false),
                Name: sdk.String("Robin Bosco"),
            },
            GceZone: sdk.String("veritatis"),
            InstanceType: shared.DatabaseInstanceInstanceTypeEnumOnPremisesInstance.ToPointer(),
            IPAddresses: []shared.IPMapping{
                shared.IPMapping{
                    IPAddress: sdk.String("tempore"),
                    TimeToRetire: sdk.String("cupiditate"),
                    Type: shared.IPMappingTypeEnumSQLIPAddressTypeUnspecified.ToPointer(),
                },
                shared.IPMapping{
                    IPAddress: sdk.String("delectus"),
                    TimeToRetire: sdk.String("dolorem"),
                    Type: shared.IPMappingTypeEnumPrimary.ToPointer(),
                },
                shared.IPMapping{
                    IPAddress: sdk.String("labore"),
                    TimeToRetire: sdk.String("adipisci"),
                    Type: shared.IPMappingTypeEnumPrivate.ToPointer(),
                },
            },
            Ipv6Address: sdk.String("architecto"),
            Kind: sdk.String("quae"),
            MaintenanceVersion: sdk.String("aut"),
            MasterInstanceName: sdk.String("quas"),
            MaxDiskSize: sdk.String("itaque"),
            Name: sdk.String("Jodi Skiles"),
            OnPremisesConfiguration: &shared.OnPremisesConfiguration{
                CaCertificate: sdk.String("ut"),
                ClientCertificate: sdk.String("facilis"),
                ClientKey: sdk.String("cupiditate"),
                DumpFilePath: sdk.String("qui"),
                HostPort: sdk.String("quae"),
                Kind: sdk.String("laudantium"),
                Password: sdk.String("odio"),
                SourceInstance: &shared.InstanceReference{
                    Name: sdk.String("Jan Schaefer"),
                    Project: sdk.String("quis"),
                    Region: sdk.String("ipsum"),
                },
                Username: sdk.String("Vida87"),
            },
            OutOfDiskReport: &shared.SQLOutOfDiskReport{
                SQLMinRecommendedIncreaseSizeGb: sdk.Int(949319),
                SQLOutOfDiskState: shared.SQLOutOfDiskReportSQLOutOfDiskStateEnumNormal.ToPointer(),
            },
            Project: sdk.String("hic"),
            Region: sdk.String("distinctio"),
            ReplicaConfiguration: &shared.ReplicaConfiguration{
                FailoverTarget: sdk.Bool(false),
                Kind: sdk.String("quod"),
                MysqlReplicaConfiguration: &shared.MySQLReplicaConfiguration{
                    CaCertificate: sdk.String("odio"),
                    ClientCertificate: sdk.String("similique"),
                    ClientKey: sdk.String("facilis"),
                    ConnectRetryInterval: sdk.Int(874288),
                    DumpFilePath: sdk.String("ducimus"),
                    Kind: sdk.String("dolore"),
                    MasterHeartbeatPeriod: sdk.String("quibusdam"),
                    Password: sdk.String("illum"),
                    SslCipher: sdk.String("sequi"),
                    Username: sdk.String("Liam97"),
                    VerifyServerCertificate: sdk.Bool(false),
                },
            },
            ReplicaNames: []string{
                "nulla",
                "fugit",
            },
            RootPassword: sdk.String("porro"),
            SatisfiesPzs: sdk.Bool(false),
            ScheduledMaintenance: &shared.SQLScheduledMaintenance{
                CanDefer: sdk.Bool(false),
                CanReschedule: sdk.Bool(false),
                ScheduleDeadlineTime: sdk.String("maiores"),
                StartTime: sdk.String("doloribus"),
            },
            SecondaryGceZone: sdk.String("iusto"),
            SelfLink: sdk.String("eligendi"),
            ServerCaCert: &shared.SslCert{
                Cert: sdk.String("ducimus"),
                CertSerialNumber: sdk.String("alias"),
                CommonName: sdk.String("officia"),
                CreateTime: sdk.String("tempora"),
                ExpirationTime: sdk.String("ipsam"),
                Instance: sdk.String("ea"),
                Kind: sdk.String("aspernatur"),
                SelfLink: sdk.String("vel"),
                Sha1Fingerprint: sdk.String("possimus"),
            },
            ServiceAccountEmailAddress: sdk.String("magnam"),
            Settings: &shared.Settings{
                ActivationPolicy: shared.SettingsActivationPolicyEnumSQLActivationPolicyUnspecified.ToPointer(),
                ActiveDirectoryConfig: &shared.SQLActiveDirectoryConfig{
                    Domain: sdk.String("ex"),
                    Kind: sdk.String("laudantium"),
                },
                AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                    ThreadsPerCore: sdk.Int(120657),
                },
                AuthorizedGaeApplications: []string{
                    "maiores",
                },
                AvailabilityType: shared.SettingsAvailabilityTypeEnumSQLAvailabilityTypeUnspecified.ToPointer(),
                BackupConfiguration: &shared.BackupConfiguration{
                    BackupRetentionSettings: &shared.BackupRetentionSettings{
                        RetainedBackups: sdk.Int(406120),
                        RetentionUnit: shared.BackupRetentionSettingsRetentionUnitEnumCount.ToPointer(),
                    },
                    BinaryLogEnabled: sdk.Bool(false),
                    Enabled: sdk.Bool(false),
                    Kind: sdk.String("excepturi"),
                    Location: sdk.String("voluptatibus"),
                    PointInTimeRecoveryEnabled: sdk.Bool(false),
                    ReplicationLogArchivingEnabled: sdk.Bool(false),
                    StartTime: sdk.String("nostrum"),
                    TransactionLogRetentionDays: sdk.Int(960835),
                },
                Collation: sdk.String("quisquam"),
                ConnectorEnforcement: shared.SettingsConnectorEnforcementEnumRequired.ToPointer(),
                CrashSafeReplicationEnabled: sdk.Bool(false),
                DataDiskSizeGb: sdk.String("ea"),
                DataDiskType: shared.SettingsDataDiskTypeEnumObsoleteLocalSsd.ToPointer(),
                DatabaseFlags: []shared.DatabaseFlags{
                    shared.DatabaseFlags{
                        Name: sdk.String("Jeanne Bode"),
                        Value: sdk.String("quo"),
                    },
                    shared.DatabaseFlags{
                        Name: sdk.String("Kate Cole DVM"),
                        Value: sdk.String("libero"),
                    },
                },
                DatabaseReplicationEnabled: sdk.Bool(false),
                DeletionProtectionEnabled: sdk.Bool(false),
                DenyMaintenancePeriods: []shared.DenyMaintenancePeriod{
                    shared.DenyMaintenancePeriod{
                        EndDate: sdk.String("aut"),
                        StartDate: sdk.String("deleniti"),
                        Time: sdk.String("impedit"),
                    },
                },
                InsightsConfig: &shared.InsightsConfig{
                    QueryInsightsEnabled: sdk.Bool(false),
                    QueryPlansPerMinute: sdk.Int(304582),
                    QueryStringLength: sdk.Int(146946),
                    RecordApplicationTags: sdk.Bool(false),
                    RecordClientAddress: sdk.Bool(false),
                },
                IPConfiguration: &shared.IPConfiguration{
                    AllocatedIPRange: sdk.String("accusamus"),
                    AuthorizedNetworks: []shared.ACLEntry{
                        shared.ACLEntry{
                            ExpirationTime: sdk.String("non"),
                            Kind: sdk.String("et"),
                            Name: sdk.String("Neal Schroeder"),
                            Value: sdk.String("autem"),
                        },
                    },
                    EnablePrivatePathForGoogleCloudServices: sdk.Bool(false),
                    Ipv4Enabled: sdk.Bool(false),
                    PrivateNetwork: sdk.String("nobis"),
                    RequireSsl: sdk.Bool(false),
                },
                Kind: sdk.String("quas"),
                LocationPreference: &shared.LocationPreference{
                    FollowGaeApplication: sdk.String("assumenda"),
                    Kind: sdk.String("nulla"),
                    SecondaryZone: sdk.String("voluptas"),
                    Zone: sdk.String("libero"),
                },
                MaintenanceWindow: &shared.MaintenanceWindow{
                    Day: sdk.Int(96549),
                    Hour: sdk.Int(270328),
                    Kind: sdk.String("numquam"),
                    UpdateTrack: shared.MaintenanceWindowUpdateTrackEnumSQLUpdateTrackUnspecified.ToPointer(),
                },
                PasswordValidationPolicy: &shared.PasswordValidationPolicy{
                    Complexity: shared.PasswordValidationPolicyComplexityEnumComplexityDefault.ToPointer(),
                    DisallowUsernameSubstring: sdk.Bool(false),
                    EnablePasswordPolicy: sdk.Bool(false),
                    MinLength: sdk.Int(55374),
                    PasswordChangeInterval: sdk.String("molestiae"),
                    ReuseInterval: sdk.Int(301598),
                },
                PricingPlan: shared.SettingsPricingPlanEnumPackage.ToPointer(),
                ReplicationType: shared.SettingsReplicationTypeEnumSQLReplicationTypeUnspecified.ToPointer(),
                SettingsVersion: sdk.String("esse"),
                SQLServerAuditConfig: &shared.SQLServerAuditConfig{
                    Bucket: sdk.String("esse"),
                    Kind: sdk.String("rem"),
                    RetentionInterval: sdk.String("fuga"),
                    UploadInterval: sdk.String("reprehenderit"),
                },
                StorageAutoResize: sdk.Bool(false),
                StorageAutoResizeLimit: sdk.String("quidem"),
                Tier: sdk.String("fugiat"),
                TimeZone: sdk.String("ut"),
                UserLabels: map[string]string{
                    "suscipit": "assumenda",
                    "eos": "praesentium",
                },
            },
            State: shared.DatabaseInstanceStateEnumFailed.ToPointer(),
            SuspensionReason: []shared.DatabaseInstanceSuspensionReasonEnum{
                shared.DatabaseInstanceSuspensionReasonEnumSQLSuspensionReasonUnspecified,
            },
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("quo"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        Project: "fuga",
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.SQLInstancesInsertSecurity{
        Option1: &operations.SQLInstancesInsertSecurityOption1{
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

## SQLInstancesList

Lists instances under a given project.

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
    res, err := s.Instances.SQLInstancesList(ctx, operations.SQLInstancesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("debitis"),
        Filter: sdk.String("ipsam"),
        Key: sdk.String("aspernatur"),
        MaxResults: sdk.Int64(197054),
        OauthToken: sdk.String("quo"),
        PageToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        Project: "recusandae",
        QuotaUser: sdk.String("aperiam"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quod"),
    }, operations.SQLInstancesListSecurity{
        Option1: &operations.SQLInstancesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstancesListResponse != nil {
        // handle response
    }
}
```

## SQLInstancesListServerCas

Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.

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
    res, err := s.Instances.SQLInstancesListServerCas(ctx, operations.SQLInstancesListServerCasRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("inventore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("accusamus"),
        Instance: "aliquam",
        Key: sdk.String("odio"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        Project: "commodi",
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.SQLInstancesListServerCasSecurity{
        Option1: &operations.SQLInstancesListServerCasSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstancesListServerCasResponse != nil {
        // handle response
    }
}
```

## SQLInstancesPatch

Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.

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
    res, err := s.Instances.SQLInstancesPatch(ctx, operations.SQLInstancesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DatabaseInstanceInput: &shared.DatabaseInstanceInput{
            BackendType: shared.DatabaseInstanceBackendTypeEnumSQLBackendTypeUnspecified.ToPointer(),
            ConnectionName: sdk.String("porro"),
            CurrentDiskSize: sdk.String("eum"),
            DatabaseVersion: shared.DatabaseInstanceDatabaseVersionEnumMysql8026.ToPointer(),
            DiskEncryptionConfiguration: &shared.DiskEncryptionConfiguration{
                Kind: sdk.String("praesentium"),
                KmsKeyName: sdk.String("consequuntur"),
            },
            DiskEncryptionStatus: &shared.DiskEncryptionStatus{
                Kind: sdk.String("deleniti"),
                KmsKeyVersionName: sdk.String("fugit"),
            },
            Etag: sdk.String("fuga"),
            FailoverReplica: &shared.DatabaseInstanceFailoverReplica{
                Available: sdk.Bool(false),
                Name: sdk.String("Randall Lindgren"),
            },
            GceZone: sdk.String("nisi"),
            InstanceType: shared.DatabaseInstanceInstanceTypeEnumSQLInstanceTypeUnspecified.ToPointer(),
            IPAddresses: []shared.IPMapping{
                shared.IPMapping{
                    IPAddress: sdk.String("consequuntur"),
                    TimeToRetire: sdk.String("ratione"),
                    Type: shared.IPMappingTypeEnumSQLIPAddressTypeUnspecified.ToPointer(),
                },
                shared.IPMapping{
                    IPAddress: sdk.String("saepe"),
                    TimeToRetire: sdk.String("occaecati"),
                    Type: shared.IPMappingTypeEnumOutgoing.ToPointer(),
                },
                shared.IPMapping{
                    IPAddress: sdk.String("et"),
                    TimeToRetire: sdk.String("esse"),
                    Type: shared.IPMappingTypeEnumMigrated1StGen.ToPointer(),
                },
                shared.IPMapping{
                    IPAddress: sdk.String("accusamus"),
                    TimeToRetire: sdk.String("veritatis"),
                    Type: shared.IPMappingTypeEnumOutgoing.ToPointer(),
                },
            },
            Ipv6Address: sdk.String("quod"),
            Kind: sdk.String("nam"),
            MaintenanceVersion: sdk.String("vero"),
            MasterInstanceName: sdk.String("aliquid"),
            MaxDiskSize: sdk.String("quasi"),
            Name: sdk.String("Cecil Pollich"),
            OnPremisesConfiguration: &shared.OnPremisesConfiguration{
                CaCertificate: sdk.String("occaecati"),
                ClientCertificate: sdk.String("minima"),
                ClientKey: sdk.String("distinctio"),
                DumpFilePath: sdk.String("eligendi"),
                HostPort: sdk.String("sit"),
                Kind: sdk.String("culpa"),
                Password: sdk.String("tempore"),
                SourceInstance: &shared.InstanceReference{
                    Name: sdk.String("Miss Blanca Cronin"),
                    Project: sdk.String("sapiente"),
                    Region: sdk.String("consectetur"),
                },
                Username: sdk.String("Jade_Labadie"),
            },
            OutOfDiskReport: &shared.SQLOutOfDiskReport{
                SQLMinRecommendedIncreaseSizeGb: sdk.Int(857723),
                SQLOutOfDiskState: shared.SQLOutOfDiskReportSQLOutOfDiskStateEnumNormal.ToPointer(),
            },
            Project: sdk.String("esse"),
            Region: sdk.String("quasi"),
            ReplicaConfiguration: &shared.ReplicaConfiguration{
                FailoverTarget: sdk.Bool(false),
                Kind: sdk.String("a"),
                MysqlReplicaConfiguration: &shared.MySQLReplicaConfiguration{
                    CaCertificate: sdk.String("error"),
                    ClientCertificate: sdk.String("sint"),
                    ClientKey: sdk.String("pariatur"),
                    ConnectRetryInterval: sdk.Int(820767),
                    DumpFilePath: sdk.String("quia"),
                    Kind: sdk.String("eveniet"),
                    MasterHeartbeatPeriod: sdk.String("asperiores"),
                    Password: sdk.String("facere"),
                    SslCipher: sdk.String("veritatis"),
                    Username: sdk.String("Carmine_Botsford"),
                    VerifyServerCertificate: sdk.Bool(false),
                },
            },
            ReplicaNames: []string{
                "tenetur",
                "quae",
            },
            RootPassword: sdk.String("earum"),
            SatisfiesPzs: sdk.Bool(false),
            ScheduledMaintenance: &shared.SQLScheduledMaintenance{
                CanDefer: sdk.Bool(false),
                CanReschedule: sdk.Bool(false),
                ScheduleDeadlineTime: sdk.String("vel"),
                StartTime: sdk.String("in"),
            },
            SecondaryGceZone: sdk.String("eius"),
            SelfLink: sdk.String("libero"),
            ServerCaCert: &shared.SslCert{
                Cert: sdk.String("illum"),
                CertSerialNumber: sdk.String("soluta"),
                CommonName: sdk.String("accusantium"),
                CreateTime: sdk.String("aliquam"),
                ExpirationTime: sdk.String("sapiente"),
                Instance: sdk.String("dicta"),
                Kind: sdk.String("ullam"),
                SelfLink: sdk.String("reprehenderit"),
                Sha1Fingerprint: sdk.String("ullam"),
            },
            ServiceAccountEmailAddress: sdk.String("nisi"),
            Settings: &shared.Settings{
                ActivationPolicy: shared.SettingsActivationPolicyEnumSQLActivationPolicyUnspecified.ToPointer(),
                ActiveDirectoryConfig: &shared.SQLActiveDirectoryConfig{
                    Domain: sdk.String("voluptatum"),
                    Kind: sdk.String("qui"),
                },
                AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                    ThreadsPerCore: sdk.Int(845358),
                },
                AuthorizedGaeApplications: []string{
                    "deleniti",
                    "itaque",
                },
                AvailabilityType: shared.SettingsAvailabilityTypeEnumRegional.ToPointer(),
                BackupConfiguration: &shared.BackupConfiguration{
                    BackupRetentionSettings: &shared.BackupRetentionSettings{
                        RetainedBackups: sdk.Int(99615),
                        RetentionUnit: shared.BackupRetentionSettingsRetentionUnitEnumCount.ToPointer(),
                    },
                    BinaryLogEnabled: sdk.Bool(false),
                    Enabled: sdk.Bool(false),
                    Kind: sdk.String("tenetur"),
                    Location: sdk.String("quasi"),
                    PointInTimeRecoveryEnabled: sdk.Bool(false),
                    ReplicationLogArchivingEnabled: sdk.Bool(false),
                    StartTime: sdk.String("at"),
                    TransactionLogRetentionDays: sdk.Int(92027),
                },
                Collation: sdk.String("voluptate"),
                ConnectorEnforcement: shared.SettingsConnectorEnforcementEnumConnectorEnforcementUnspecified.ToPointer(),
                CrashSafeReplicationEnabled: sdk.Bool(false),
                DataDiskSizeGb: sdk.String("minima"),
                DataDiskType: shared.SettingsDataDiskTypeEnumSQLDataDiskTypeUnspecified.ToPointer(),
                DatabaseFlags: []shared.DatabaseFlags{
                    shared.DatabaseFlags{
                        Name: sdk.String("Ms. Cora Spencer IV"),
                        Value: sdk.String("eum"),
                    },
                },
                DatabaseReplicationEnabled: sdk.Bool(false),
                DeletionProtectionEnabled: sdk.Bool(false),
                DenyMaintenancePeriods: []shared.DenyMaintenancePeriod{
                    shared.DenyMaintenancePeriod{
                        EndDate: sdk.String("ab"),
                        StartDate: sdk.String("corrupti"),
                        Time: sdk.String("non"),
                    },
                    shared.DenyMaintenancePeriod{
                        EndDate: sdk.String("voluptatem"),
                        StartDate: sdk.String("dolor"),
                        Time: sdk.String("occaecati"),
                    },
                    shared.DenyMaintenancePeriod{
                        EndDate: sdk.String("numquam"),
                        StartDate: sdk.String("impedit"),
                        Time: sdk.String("explicabo"),
                    },
                },
                InsightsConfig: &shared.InsightsConfig{
                    QueryInsightsEnabled: sdk.Bool(false),
                    QueryPlansPerMinute: sdk.Int(376226),
                    QueryStringLength: sdk.Int(12036),
                    RecordApplicationTags: sdk.Bool(false),
                    RecordClientAddress: sdk.Bool(false),
                },
                IPConfiguration: &shared.IPConfiguration{
                    AllocatedIPRange: sdk.String("dignissimos"),
                    AuthorizedNetworks: []shared.ACLEntry{
                        shared.ACLEntry{
                            ExpirationTime: sdk.String("maiores"),
                            Kind: sdk.String("natus"),
                            Name: sdk.String("Camille Hirthe III"),
                            Value: sdk.String("quaerat"),
                        },
                    },
                    EnablePrivatePathForGoogleCloudServices: sdk.Bool(false),
                    Ipv4Enabled: sdk.Bool(false),
                    PrivateNetwork: sdk.String("consequuntur"),
                    RequireSsl: sdk.Bool(false),
                },
                Kind: sdk.String("repellendus"),
                LocationPreference: &shared.LocationPreference{
                    FollowGaeApplication: sdk.String("officia"),
                    Kind: sdk.String("maxime"),
                    SecondaryZone: sdk.String("dignissimos"),
                    Zone: sdk.String("officia"),
                },
                MaintenanceWindow: &shared.MaintenanceWindow{
                    Day: sdk.Int(989410),
                    Hour: sdk.Int(368102),
                    Kind: sdk.String("quae"),
                    UpdateTrack: shared.MaintenanceWindowUpdateTrackEnumSQLUpdateTrackUnspecified.ToPointer(),
                },
                PasswordValidationPolicy: &shared.PasswordValidationPolicy{
                    Complexity: shared.PasswordValidationPolicyComplexityEnumComplexityDefault.ToPointer(),
                    DisallowUsernameSubstring: sdk.Bool(false),
                    EnablePasswordPolicy: sdk.Bool(false),
                    MinLength: sdk.Int(801836),
                    PasswordChangeInterval: sdk.String("labore"),
                    ReuseInterval: sdk.Int(70447),
                },
                PricingPlan: shared.SettingsPricingPlanEnumSQLPricingPlanUnspecified.ToPointer(),
                ReplicationType: shared.SettingsReplicationTypeEnumAsynchronous.ToPointer(),
                SettingsVersion: sdk.String("id"),
                SQLServerAuditConfig: &shared.SQLServerAuditConfig{
                    Bucket: sdk.String("suscipit"),
                    Kind: sdk.String("velit"),
                    RetentionInterval: sdk.String("culpa"),
                    UploadInterval: sdk.String("est"),
                },
                StorageAutoResize: sdk.Bool(false),
                StorageAutoResizeLimit: sdk.String("recusandae"),
                Tier: sdk.String("totam"),
                TimeZone: sdk.String("fugiat"),
                UserLabels: map[string]string{
                    "ducimus": "quos",
                    "vel": "labore",
                },
            },
            State: shared.DatabaseInstanceStateEnumFailed.ToPointer(),
            SuspensionReason: []shared.DatabaseInstanceSuspensionReasonEnum{
                shared.DatabaseInstanceSuspensionReasonEnumOperationalIssue,
                shared.DatabaseInstanceSuspensionReasonEnumLegalIssue,
                shared.DatabaseInstanceSuspensionReasonEnumLegalIssue,
            },
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("nemo"),
        Instance: "recusandae",
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("aperiam"),
        PrettyPrint: sdk.Bool(false),
        Project: "cum",
        QuotaUser: sdk.String("consectetur"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.SQLInstancesPatchSecurity{
        Option1: &operations.SQLInstancesPatchSecurityOption1{
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

## SQLInstancesPromoteReplica

Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.

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
    res, err := s.Instances.SQLInstancesPromoteReplica(ctx, operations.SQLInstancesPromoteReplicaRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("suscipit"),
        Instance: "reiciendis",
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        Project: "necessitatibus",
        QuotaUser: sdk.String("dolore"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("asperiores"),
    }, operations.SQLInstancesPromoteReplicaSecurity{
        Option1: &operations.SQLInstancesPromoteReplicaSecurityOption1{
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

## SQLInstancesResetSslConfig

Deletes all client certificates and generates a new server SSL certificate for the instance.

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
    res, err := s.Instances.SQLInstancesResetSslConfig(ctx, operations.SQLInstancesResetSslConfigRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("dignissimos"),
        Instance: "a",
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("consectetur"),
        PrettyPrint: sdk.Bool(false),
        Project: "corporis",
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.SQLInstancesResetSslConfigSecurity{
        Option1: &operations.SQLInstancesResetSslConfigSecurityOption1{
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

## SQLInstancesRestart

Restarts a Cloud SQL instance.

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
    res, err := s.Instances.SQLInstancesRestart(ctx, operations.SQLInstancesRestartRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("similique"),
        Instance: "tempora",
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        Project: "voluptas",
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.SQLInstancesRestartSecurity{
        Option1: &operations.SQLInstancesRestartSecurityOption1{
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

## SQLInstancesRestoreBackup

Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.

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
    res, err := s.Instances.SQLInstancesRestoreBackup(ctx, operations.SQLInstancesRestoreBackupRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InstancesRestoreBackupRequest: &shared.InstancesRestoreBackupRequest{
            RestoreBackupContext: &shared.RestoreBackupContext{
                BackupRunID: sdk.String("adipisci"),
                InstanceID: sdk.String("minus"),
                Kind: sdk.String("dolores"),
                Project: sdk.String("blanditiis"),
            },
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("officiis"),
        Instance: "temporibus",
        Key: sdk.String("ullam"),
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        Project: "cum",
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("hic"),
    }, operations.SQLInstancesRestoreBackupSecurity{
        Option1: &operations.SQLInstancesRestoreBackupSecurityOption1{
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

## SQLInstancesRotateServerCa

Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.

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
    res, err := s.Instances.SQLInstancesRotateServerCa(ctx, operations.SQLInstancesRotateServerCaRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InstancesRotateServerCaRequest: &shared.InstancesRotateServerCaRequest{
            RotateServerCaContext: &shared.RotateServerCaContext{
                Kind: sdk.String("culpa"),
                NextVersion: sdk.String("corrupti"),
            },
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("exercitationem"),
        Instance: "nobis",
        Key: sdk.String("sit"),
        OauthToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        Project: "sed",
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("asperiores"),
    }, operations.SQLInstancesRotateServerCaSecurity{
        Option1: &operations.SQLInstancesRotateServerCaSecurityOption1{
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

## SQLInstancesStartReplica

Starts the replication in the read replica instance.

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
    res, err := s.Instances.SQLInstancesStartReplica(ctx, operations.SQLInstancesStartReplicaRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("iste"),
        Instance: "dolore",
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        Project: "in",
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.SQLInstancesStartReplicaSecurity{
        Option1: &operations.SQLInstancesStartReplicaSecurityOption1{
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

## SQLInstancesStopReplica

Stops the replication in the read replica instance.

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
    res, err := s.Instances.SQLInstancesStopReplica(ctx, operations.SQLInstancesStopReplicaRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("unde"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("sapiente"),
        Instance: "debitis",
        Key: sdk.String("illo"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        Project: "perferendis",
        QuotaUser: sdk.String("corrupti"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.SQLInstancesStopReplicaSecurity{
        Option1: &operations.SQLInstancesStopReplicaSecurityOption1{
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

## SQLInstancesTruncateLog

Truncate MySQL general and slow query log tables MySQL only.

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
    res, err := s.Instances.SQLInstancesTruncateLog(ctx, operations.SQLInstancesTruncateLogRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InstancesTruncateLogRequest: &shared.InstancesTruncateLogRequest{
            TruncateLogContext: &shared.TruncateLogContext{
                Kind: sdk.String("provident"),
                LogType: sdk.String("eius"),
            },
        },
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("occaecati"),
        Instance: "quos",
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        Project: "tempora",
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("ex"),
    }, operations.SQLInstancesTruncateLogSecurity{
        Option1: &operations.SQLInstancesTruncateLogSecurityOption1{
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

## SQLInstancesUpdate

Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.

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
    res, err := s.Instances.SQLInstancesUpdate(ctx, operations.SQLInstancesUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DatabaseInstanceInput: &shared.DatabaseInstanceInput{
            BackendType: shared.DatabaseInstanceBackendTypeEnumSQLBackendTypeUnspecified.ToPointer(),
            ConnectionName: sdk.String("officiis"),
            CurrentDiskSize: sdk.String("praesentium"),
            DatabaseVersion: shared.DatabaseInstanceDatabaseVersionEnumMysql8031.ToPointer(),
            DiskEncryptionConfiguration: &shared.DiskEncryptionConfiguration{
                Kind: sdk.String("quaerat"),
                KmsKeyName: sdk.String("incidunt"),
            },
            DiskEncryptionStatus: &shared.DiskEncryptionStatus{
                Kind: sdk.String("ipsam"),
                KmsKeyVersionName: sdk.String("debitis"),
            },
            Etag: sdk.String("rem"),
            FailoverReplica: &shared.DatabaseInstanceFailoverReplica{
                Available: sdk.Bool(false),
                Name: sdk.String("Della Muller"),
            },
            GceZone: sdk.String("recusandae"),
            InstanceType: shared.DatabaseInstanceInstanceTypeEnumReadReplicaInstance.ToPointer(),
            IPAddresses: []shared.IPMapping{
                shared.IPMapping{
                    IPAddress: sdk.String("magni"),
                    TimeToRetire: sdk.String("aperiam"),
                    Type: shared.IPMappingTypeEnumMigrated1StGen.ToPointer(),
                },
                shared.IPMapping{
                    IPAddress: sdk.String("numquam"),
                    TimeToRetire: sdk.String("veniam"),
                    Type: shared.IPMappingTypeEnumOutgoing.ToPointer(),
                },
                shared.IPMapping{
                    IPAddress: sdk.String("officiis"),
                    TimeToRetire: sdk.String("beatae"),
                    Type: shared.IPMappingTypeEnumOutgoing.ToPointer(),
                },
                shared.IPMapping{
                    IPAddress: sdk.String("exercitationem"),
                    TimeToRetire: sdk.String("praesentium"),
                    Type: shared.IPMappingTypeEnumPrivate.ToPointer(),
                },
            },
            Ipv6Address: sdk.String("laboriosam"),
            Kind: sdk.String("dolorum"),
            MaintenanceVersion: sdk.String("voluptatum"),
            MasterInstanceName: sdk.String("error"),
            MaxDiskSize: sdk.String("hic"),
            Name: sdk.String("Darrel Doyle"),
            OnPremisesConfiguration: &shared.OnPremisesConfiguration{
                CaCertificate: sdk.String("officia"),
                ClientCertificate: sdk.String("dolorum"),
                ClientKey: sdk.String("corrupti"),
                DumpFilePath: sdk.String("accusamus"),
                HostPort: sdk.String("tempora"),
                Kind: sdk.String("atque"),
                Password: sdk.String("fugit"),
                SourceInstance: &shared.InstanceReference{
                    Name: sdk.String("Janis Bartell"),
                    Project: sdk.String("magnam"),
                    Region: sdk.String("consequatur"),
                },
                Username: sdk.String("Jaiden53"),
            },
            OutOfDiskReport: &shared.SQLOutOfDiskReport{
                SQLMinRecommendedIncreaseSizeGb: sdk.Int(558065),
                SQLOutOfDiskState: shared.SQLOutOfDiskReportSQLOutOfDiskStateEnumSoftShutdown.ToPointer(),
            },
            Project: sdk.String("corporis"),
            Region: sdk.String("et"),
            ReplicaConfiguration: &shared.ReplicaConfiguration{
                FailoverTarget: sdk.Bool(false),
                Kind: sdk.String("blanditiis"),
                MysqlReplicaConfiguration: &shared.MySQLReplicaConfiguration{
                    CaCertificate: sdk.String("ex"),
                    ClientCertificate: sdk.String("sed"),
                    ClientKey: sdk.String("sit"),
                    ConnectRetryInterval: sdk.Int(425508),
                    DumpFilePath: sdk.String("nostrum"),
                    Kind: sdk.String("saepe"),
                    MasterHeartbeatPeriod: sdk.String("error"),
                    Password: sdk.String("consequatur"),
                    SslCipher: sdk.String("incidunt"),
                    Username: sdk.String("Vivienne.Ebert9"),
                    VerifyServerCertificate: sdk.Bool(false),
                },
            },
            ReplicaNames: []string{
                "labore",
                "quidem",
                "atque",
            },
            RootPassword: sdk.String("laborum"),
            SatisfiesPzs: sdk.Bool(false),
            ScheduledMaintenance: &shared.SQLScheduledMaintenance{
                CanDefer: sdk.Bool(false),
                CanReschedule: sdk.Bool(false),
                ScheduleDeadlineTime: sdk.String("nam"),
                StartTime: sdk.String("tenetur"),
            },
            SecondaryGceZone: sdk.String("laboriosam"),
            SelfLink: sdk.String("alias"),
            ServerCaCert: &shared.SslCert{
                Cert: sdk.String("amet"),
                CertSerialNumber: sdk.String("deserunt"),
                CommonName: sdk.String("voluptate"),
                CreateTime: sdk.String("unde"),
                ExpirationTime: sdk.String("reiciendis"),
                Instance: sdk.String("provident"),
                Kind: sdk.String("repellendus"),
                SelfLink: sdk.String("delectus"),
                Sha1Fingerprint: sdk.String("voluptates"),
            },
            ServiceAccountEmailAddress: sdk.String("perferendis"),
            Settings: &shared.Settings{
                ActivationPolicy: shared.SettingsActivationPolicyEnumNever.ToPointer(),
                ActiveDirectoryConfig: &shared.SQLActiveDirectoryConfig{
                    Domain: sdk.String("quidem"),
                    Kind: sdk.String("reprehenderit"),
                },
                AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                    ThreadsPerCore: sdk.Int(813679),
                },
                AuthorizedGaeApplications: []string{
                    "praesentium",
                    "mollitia",
                    "veniam",
                },
                AvailabilityType: shared.SettingsAvailabilityTypeEnumSQLAvailabilityTypeUnspecified.ToPointer(),
                BackupConfiguration: &shared.BackupConfiguration{
                    BackupRetentionSettings: &shared.BackupRetentionSettings{
                        RetainedBackups: sdk.Int(790840),
                        RetentionUnit: shared.BackupRetentionSettingsRetentionUnitEnumCount.ToPointer(),
                    },
                    BinaryLogEnabled: sdk.Bool(false),
                    Enabled: sdk.Bool(false),
                    Kind: sdk.String("quasi"),
                    Location: sdk.String("atque"),
                    PointInTimeRecoveryEnabled: sdk.Bool(false),
                    ReplicationLogArchivingEnabled: sdk.Bool(false),
                    StartTime: sdk.String("reprehenderit"),
                    TransactionLogRetentionDays: sdk.Int(991142),
                },
                Collation: sdk.String("totam"),
                ConnectorEnforcement: shared.SettingsConnectorEnforcementEnumNotRequired.ToPointer(),
                CrashSafeReplicationEnabled: sdk.Bool(false),
                DataDiskSizeGb: sdk.String("quidem"),
                DataDiskType: shared.SettingsDataDiskTypeEnumObsoleteLocalSsd.ToPointer(),
                DatabaseFlags: []shared.DatabaseFlags{
                    shared.DatabaseFlags{
                        Name: sdk.String("Grace Shields"),
                        Value: sdk.String("error"),
                    },
                },
                DatabaseReplicationEnabled: sdk.Bool(false),
                DeletionProtectionEnabled: sdk.Bool(false),
                DenyMaintenancePeriods: []shared.DenyMaintenancePeriod{
                    shared.DenyMaintenancePeriod{
                        EndDate: sdk.String("officiis"),
                        StartDate: sdk.String("accusamus"),
                        Time: sdk.String("natus"),
                    },
                    shared.DenyMaintenancePeriod{
                        EndDate: sdk.String("minima"),
                        StartDate: sdk.String("aspernatur"),
                        Time: sdk.String("ex"),
                    },
                    shared.DenyMaintenancePeriod{
                        EndDate: sdk.String("maiores"),
                        StartDate: sdk.String("corrupti"),
                        Time: sdk.String("at"),
                    },
                    shared.DenyMaintenancePeriod{
                        EndDate: sdk.String("error"),
                        StartDate: sdk.String("blanditiis"),
                        Time: sdk.String("suscipit"),
                    },
                },
                InsightsConfig: &shared.InsightsConfig{
                    QueryInsightsEnabled: sdk.Bool(false),
                    QueryPlansPerMinute: sdk.Int(922348),
                    QueryStringLength: sdk.Int(542129),
                    RecordApplicationTags: sdk.Bool(false),
                    RecordClientAddress: sdk.Bool(false),
                },
                IPConfiguration: &shared.IPConfiguration{
                    AllocatedIPRange: sdk.String("atque"),
                    AuthorizedNetworks: []shared.ACLEntry{
                        shared.ACLEntry{
                            ExpirationTime: sdk.String("recusandae"),
                            Kind: sdk.String("dolorum"),
                            Name: sdk.String("Dr. Leroy Wisoky Jr."),
                            Value: sdk.String("beatae"),
                        },
                    },
                    EnablePrivatePathForGoogleCloudServices: sdk.Bool(false),
                    Ipv4Enabled: sdk.Bool(false),
                    PrivateNetwork: sdk.String("dolores"),
                    RequireSsl: sdk.Bool(false),
                },
                Kind: sdk.String("enim"),
                LocationPreference: &shared.LocationPreference{
                    FollowGaeApplication: sdk.String("laboriosam"),
                    Kind: sdk.String("velit"),
                    SecondaryZone: sdk.String("a"),
                    Zone: sdk.String("molestias"),
                },
                MaintenanceWindow: &shared.MaintenanceWindow{
                    Day: sdk.Int(300029),
                    Hour: sdk.Int(906355),
                    Kind: sdk.String("consequuntur"),
                    UpdateTrack: shared.MaintenanceWindowUpdateTrackEnumCanary.ToPointer(),
                },
                PasswordValidationPolicy: &shared.PasswordValidationPolicy{
                    Complexity: shared.PasswordValidationPolicyComplexityEnumComplexityDefault.ToPointer(),
                    DisallowUsernameSubstring: sdk.Bool(false),
                    EnablePasswordPolicy: sdk.Bool(false),
                    MinLength: sdk.Int(597937),
                    PasswordChangeInterval: sdk.String("in"),
                    ReuseInterval: sdk.Int(238043),
                },
                PricingPlan: shared.SettingsPricingPlanEnumPerUse.ToPointer(),
                ReplicationType: shared.SettingsReplicationTypeEnumSynchronous.ToPointer(),
                SettingsVersion: sdk.String("consequuntur"),
                SQLServerAuditConfig: &shared.SQLServerAuditConfig{
                    Bucket: sdk.String("fugit"),
                    Kind: sdk.String("id"),
                    RetentionInterval: sdk.String("quis"),
                    UploadInterval: sdk.String("reprehenderit"),
                },
                StorageAutoResize: sdk.Bool(false),
                StorageAutoResizeLimit: sdk.String("error"),
                Tier: sdk.String("illo"),
                TimeZone: sdk.String("corporis"),
                UserLabels: map[string]string{
                    "eveniet": "non",
                    "vero": "doloremque",
                    "iure": "ipsa",
                },
            },
            State: shared.DatabaseInstanceStateEnumPendingCreate.ToPointer(),
            SuspensionReason: []shared.DatabaseInstanceSuspensionReasonEnum{
                shared.DatabaseInstanceSuspensionReasonEnumLegalIssue,
            },
        },
        AccessToken: sdk.String("eveniet"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("iure"),
        Instance: "necessitatibus",
        Key: sdk.String("ratione"),
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        Project: "distinctio",
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.SQLInstancesUpdateSecurity{
        Option1: &operations.SQLInstancesUpdateSecurityOption1{
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
