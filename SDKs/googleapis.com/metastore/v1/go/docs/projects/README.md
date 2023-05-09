# Projects

### Available Operations

* [MetastoreProjectsLocationsFederationsCreate](#metastoreprojectslocationsfederationscreate) - Creates a metastore federation in a project and location.
* [MetastoreProjectsLocationsFederationsList](#metastoreprojectslocationsfederationslist) - Lists federations in a project and location.
* [MetastoreProjectsLocationsList](#metastoreprojectslocationslist) - Lists information about the supported locations for this service.
* [MetastoreProjectsLocationsOperationsCancel](#metastoreprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [MetastoreProjectsLocationsOperationsList](#metastoreprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
* [MetastoreProjectsLocationsServicesAlterLocation](#metastoreprojectslocationsservicesalterlocation) - Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.
* [MetastoreProjectsLocationsServicesBackupsCreate](#metastoreprojectslocationsservicesbackupscreate) - Creates a new backup in a given project and location.
* [MetastoreProjectsLocationsServicesBackupsDelete](#metastoreprojectslocationsservicesbackupsdelete) - Deletes a single backup.
* [MetastoreProjectsLocationsServicesBackupsGetIamPolicy](#metastoreprojectslocationsservicesbackupsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [MetastoreProjectsLocationsServicesBackupsList](#metastoreprojectslocationsservicesbackupslist) - Lists backups in a service.
* [MetastoreProjectsLocationsServicesBackupsSetIamPolicy](#metastoreprojectslocationsservicesbackupssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [MetastoreProjectsLocationsServicesCreate](#metastoreprojectslocationsservicescreate) - Creates a metastore service in a project and location.
* [MetastoreProjectsLocationsServicesExportMetadata](#metastoreprojectslocationsservicesexportmetadata) - Exports metadata from a service.
* [MetastoreProjectsLocationsServicesList](#metastoreprojectslocationsserviceslist) - Lists services in a project and location.
* [MetastoreProjectsLocationsServicesMetadataImportsCreate](#metastoreprojectslocationsservicesmetadataimportscreate) - Creates a new MetadataImport in a given project and location.
* [MetastoreProjectsLocationsServicesMetadataImportsGet](#metastoreprojectslocationsservicesmetadataimportsget) - Gets details of a single import.
* [MetastoreProjectsLocationsServicesMetadataImportsList](#metastoreprojectslocationsservicesmetadataimportslist) - Lists imports in a service.
* [MetastoreProjectsLocationsServicesMetadataImportsPatch](#metastoreprojectslocationsservicesmetadataimportspatch) - Updates a single import. Only the description field of MetadataImport is supported to be updated.
* [MetastoreProjectsLocationsServicesMoveTableToDatabase](#metastoreprojectslocationsservicesmovetabletodatabase) - Move a table to another database.
* [MetastoreProjectsLocationsServicesQueryMetadata](#metastoreprojectslocationsservicesquerymetadata) - Query DPMS metadata.
* [MetastoreProjectsLocationsServicesRestore](#metastoreprojectslocationsservicesrestore) - Restores a service from a backup.
* [MetastoreProjectsLocationsServicesTestIamPermissions](#metastoreprojectslocationsservicestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## MetastoreProjectsLocationsFederationsCreate

Creates a metastore federation in a project and location.

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
    res, err := s.Projects.MetastoreProjectsLocationsFederationsCreate(ctx, operations.MetastoreProjectsLocationsFederationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FederationInput: &shared.FederationInput{
            BackendMetastores: map[string]shared.BackendMetastore{
                "occaecati": shared.BackendMetastore{
                    MetastoreType: shared.BackendMetastoreMetastoreTypeEnumMetastoreTypeUnspecified.ToPointer(),
                    Name: sdk.String("Irvin Rosenbaum III"),
                },
                "molestiae": shared.BackendMetastore{
                    MetastoreType: shared.BackendMetastoreMetastoreTypeEnumMetastoreTypeUnspecified.ToPointer(),
                    Name: sdk.String("Krista Rippin"),
                },
                "excepturi": shared.BackendMetastore{
                    MetastoreType: shared.BackendMetastoreMetastoreTypeEnumMetastoreTypeUnspecified.ToPointer(),
                    Name: sdk.String("Cathy Mosciski"),
                },
            },
            Labels: map[string]string{
                "natus": "laboriosam",
            },
            Name: sdk.String("Elias Parker"),
            Version: sdk.String("iste"),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        FederationID: sdk.String("architecto"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("est"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        RequestID: sdk.String("dolores"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.MetastoreProjectsLocationsFederationsCreateSecurity{
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

## MetastoreProjectsLocationsFederationsList

Lists federations in a project and location.

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
    res, err := s.Projects.MetastoreProjectsLocationsFederationsList(ctx, operations.MetastoreProjectsLocationsFederationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("nemo"),
        Filter: sdk.String("minima"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("accusantium"),
        OrderBy: sdk.String("iure"),
        PageSize: sdk.Int64(634274),
        PageToken: sdk.String("doloribus"),
        Parent: "sapiente",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.MetastoreProjectsLocationsFederationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFederationsResponse != nil {
        // handle response
    }
}
```

## MetastoreProjectsLocationsList

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
    res, err := s.Projects.MetastoreProjectsLocationsList(ctx, operations.MetastoreProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("occaecati"),
        Filter: sdk.String("numquam"),
        Key: sdk.String("commodi"),
        Name: "Nellie Frami",
        OauthToken: sdk.String("quis"),
        PageSize: sdk.Int64(110375),
        PageToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("odit"),
    }, operations.MetastoreProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## MetastoreProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

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
    res, err := s.Projects.MetastoreProjectsLocationsOperationsCancel(ctx, operations.MetastoreProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "tenetur": "ipsam",
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("error"),
        Name: "Neal Boyer",
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.MetastoreProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MetastoreProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

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
    res, err := s.Projects.MetastoreProjectsLocationsOperationsList(ctx, operations.MetastoreProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("perferendis"),
        Filter: sdk.String("doloremque"),
        Key: sdk.String("reprehenderit"),
        Name: "Shawna Carter",
        OauthToken: sdk.String("iusto"),
        PageSize: sdk.Int64(118727),
        PageToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.MetastoreProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## MetastoreProjectsLocationsServicesAlterLocation

Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesAlterLocation(ctx, operations.MetastoreProjectsLocationsServicesAlterLocationRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AlterMetadataResourceLocationRequest: &shared.AlterMetadataResourceLocationRequest{
            LocationURI: sdk.String("quae"),
            ResourceName: sdk.String("ipsum"),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        Service: "voluptates",
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.MetastoreProjectsLocationsServicesAlterLocationSecurity{
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

## MetastoreProjectsLocationsServicesBackupsCreate

Creates a new backup in a given project and location.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesBackupsCreate(ctx, operations.MetastoreProjectsLocationsServicesBackupsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BackupInput: &shared.BackupInput{
            Description: sdk.String("veritatis"),
            Name: sdk.String("Miss Randall Hamill"),
            ServiceRevision: &shared.ServiceInput{
                DatabaseType: shared.ServiceDatabaseTypeEnumDatabaseTypeUnspecified.ToPointer(),
                EncryptionConfig: &shared.EncryptionConfig{
                    KmsKey: sdk.String("deserunt"),
                },
                HiveMetastoreConfig: &shared.HiveMetastoreConfigInput{
                    AuxiliaryVersions: map[string]shared.AuxiliaryVersionConfigInput{
                        "quibusdam": shared.AuxiliaryVersionConfigInput{
                            ConfigOverrides: map[string]string{
                                "modi": "qui",
                                "aliquid": "cupiditate",
                            },
                            NetworkConfig: &shared.NetworkConfigInput{
                                Consumers: []shared.ConsumerInput{
                                    shared.ConsumerInput{
                                        Subnetwork: sdk.String("perferendis"),
                                    },
                                    shared.ConsumerInput{
                                        Subnetwork: sdk.String("magni"),
                                    },
                                    shared.ConsumerInput{
                                        Subnetwork: sdk.String("assumenda"),
                                    },
                                },
                            },
                            Version: sdk.String("ipsam"),
                        },
                        "alias": shared.AuxiliaryVersionConfigInput{
                            ConfigOverrides: map[string]string{
                                "dolorum": "excepturi",
                            },
                            NetworkConfig: &shared.NetworkConfigInput{
                                Consumers: []shared.ConsumerInput{
                                    shared.ConsumerInput{
                                        Subnetwork: sdk.String("facilis"),
                                    },
                                    shared.ConsumerInput{
                                        Subnetwork: sdk.String("tempore"),
                                    },
                                },
                            },
                            Version: sdk.String("labore"),
                        },
                        "delectus": shared.AuxiliaryVersionConfigInput{
                            ConfigOverrides: map[string]string{
                                "non": "eligendi",
                                "sint": "aliquid",
                            },
                            NetworkConfig: &shared.NetworkConfigInput{
                                Consumers: []shared.ConsumerInput{
                                    shared.ConsumerInput{
                                        Subnetwork: sdk.String("necessitatibus"),
                                    },
                                    shared.ConsumerInput{
                                        Subnetwork: sdk.String("sint"),
                                    },
                                    shared.ConsumerInput{
                                        Subnetwork: sdk.String("officia"),
                                    },
                                },
                            },
                            Version: sdk.String("dolor"),
                        },
                    },
                    ConfigOverrides: map[string]string{
                        "a": "dolorum",
                        "in": "in",
                        "illum": "maiores",
                        "rerum": "dicta",
                    },
                    KerberosConfig: &shared.KerberosConfig{
                        Keytab: &shared.Secret{
                            CloudSecret: sdk.String("magnam"),
                        },
                        Krb5ConfigGcsURI: sdk.String("cumque"),
                        Principal: sdk.String("facere"),
                    },
                    Version: sdk.String("ea"),
                },
                Labels: map[string]string{
                    "laborum": "accusamus",
                    "non": "occaecati",
                },
                MaintenanceWindow: &shared.MaintenanceWindow{
                    DayOfWeek: shared.MaintenanceWindowDayOfWeekEnumTuesday.ToPointer(),
                    HourOfDay: sdk.Int(881736),
                },
                Name: sdk.String("Abraham McKenzie"),
                Network: sdk.String("blanditiis"),
                NetworkConfig: &shared.NetworkConfigInput{
                    Consumers: []shared.ConsumerInput{
                        shared.ConsumerInput{
                            Subnetwork: sdk.String("sapiente"),
                        },
                        shared.ConsumerInput{
                            Subnetwork: sdk.String("amet"),
                        },
                        shared.ConsumerInput{
                            Subnetwork: sdk.String("deserunt"),
                        },
                    },
                },
                Port: sdk.Int(394869),
                ReleaseChannel: shared.ServiceReleaseChannelEnumCanary.ToPointer(),
                ScalingConfig: &shared.ScalingConfig{
                    InstanceSize: shared.ScalingConfigInstanceSizeEnumMedium.ToPointer(),
                    ScalingFactor: sdk.Float32(6063.93),
                },
                TelemetryConfig: &shared.TelemetryConfig{
                    LogFormat: shared.TelemetryConfigLogFormatEnumLegacy.ToPointer(),
                },
                Tier: shared.ServiceTierEnumTierUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BackupID: sdk.String("distinctio"),
        Callback: sdk.String("id"),
        Fields: sdk.String("labore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("suscipit"),
        Parent: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        RequestID: sdk.String("eum"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.MetastoreProjectsLocationsServicesBackupsCreateSecurity{
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

## MetastoreProjectsLocationsServicesBackupsDelete

Deletes a single backup.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesBackupsDelete(ctx, operations.MetastoreProjectsLocationsServicesBackupsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("ullam"),
        Key: sdk.String("provident"),
        Name: "Kirk Bartoletti",
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        RequestID: sdk.String("eum"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.MetastoreProjectsLocationsServicesBackupsDeleteSecurity{
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

## MetastoreProjectsLocationsServicesBackupsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesBackupsGetIamPolicy(ctx, operations.MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("eius"),
        OptionsRequestedPolicyVersion: sdk.Int64(806194),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        Resource: "facilis",
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.MetastoreProjectsLocationsServicesBackupsGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## MetastoreProjectsLocationsServicesBackupsList

Lists backups in a service.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesBackupsList(ctx, operations.MetastoreProjectsLocationsServicesBackupsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("nihil"),
        Filter: sdk.String("repellat"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("sed"),
        OrderBy: sdk.String("saepe"),
        PageSize: sdk.Int64(868126),
        PageToken: sdk.String("accusantium"),
        Parent: "consequuntur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("magni"),
    }, operations.MetastoreProjectsLocationsServicesBackupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBackupsResponse != nil {
        // handle response
    }
}
```

## MetastoreProjectsLocationsServicesBackupsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesBackupsSetIamPolicy(ctx, operations.MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "maxime",
                                    "ea",
                                    "excepturi",
                                    "odit",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ab",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ipsam",
                                    "voluptate",
                                    "autem",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "pariatur",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("voluptatibus"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "amet",
                                    "aut",
                                    "cumque",
                                    "corporis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("libero"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "eaque",
                                    "quis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "perferendis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("minus"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "vero",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "recusandae",
                                    "omnis",
                                    "facilis",
                                    "perspiciatis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("porro"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("blanditiis"),
                            Expression: sdk.String("error"),
                            Location: sdk.String("eaque"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "adipisci",
                            "asperiores",
                            "earum",
                        },
                        Role: sdk.String("modi"),
                    },
                },
                Etag: sdk.String("iste"),
                Version: sdk.Int(679091),
            },
            UpdateMask: sdk.String("deleniti"),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("libero"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        Resource: "aliquid",
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.MetastoreProjectsLocationsServicesBackupsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## MetastoreProjectsLocationsServicesCreate

Creates a metastore service in a project and location.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesCreate(ctx, operations.MetastoreProjectsLocationsServicesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ServiceInput: &shared.ServiceInput{
            DatabaseType: shared.ServiceDatabaseTypeEnumDatabaseTypeUnspecified.ToPointer(),
            EncryptionConfig: &shared.EncryptionConfig{
                KmsKey: sdk.String("ipsum"),
            },
            HiveMetastoreConfig: &shared.HiveMetastoreConfigInput{
                AuxiliaryVersions: map[string]shared.AuxiliaryVersionConfigInput{
                    "excepturi": shared.AuxiliaryVersionConfigInput{
                        ConfigOverrides: map[string]string{
                            "voluptate": "dignissimos",
                            "reiciendis": "amet",
                            "dolorum": "numquam",
                        },
                        NetworkConfig: &shared.NetworkConfigInput{
                            Consumers: []shared.ConsumerInput{
                                shared.ConsumerInput{
                                    Subnetwork: sdk.String("ipsa"),
                                },
                            },
                        },
                        Version: sdk.String("ipsa"),
                    },
                    "iure": shared.AuxiliaryVersionConfigInput{
                        ConfigOverrides: map[string]string{
                            "quaerat": "accusamus",
                            "quidem": "voluptatibus",
                        },
                        NetworkConfig: &shared.NetworkConfigInput{
                            Consumers: []shared.ConsumerInput{
                                shared.ConsumerInput{
                                    Subnetwork: sdk.String("natus"),
                                },
                                shared.ConsumerInput{
                                    Subnetwork: sdk.String("eos"),
                                },
                            },
                        },
                        Version: sdk.String("atque"),
                    },
                    "sit": shared.AuxiliaryVersionConfigInput{
                        ConfigOverrides: map[string]string{
                            "ab": "soluta",
                            "dolorum": "iusto",
                            "voluptate": "dolorum",
                            "deleniti": "omnis",
                        },
                        NetworkConfig: &shared.NetworkConfigInput{
                            Consumers: []shared.ConsumerInput{
                                shared.ConsumerInput{
                                    Subnetwork: sdk.String("distinctio"),
                                },
                                shared.ConsumerInput{
                                    Subnetwork: sdk.String("asperiores"),
                                },
                                shared.ConsumerInput{
                                    Subnetwork: sdk.String("nihil"),
                                },
                                shared.ConsumerInput{
                                    Subnetwork: sdk.String("ipsum"),
                                },
                            },
                        },
                        Version: sdk.String("voluptate"),
                    },
                    "id": shared.AuxiliaryVersionConfigInput{
                        ConfigOverrides: map[string]string{
                            "eius": "aspernatur",
                            "perferendis": "amet",
                            "optio": "accusamus",
                            "ad": "saepe",
                        },
                        NetworkConfig: &shared.NetworkConfigInput{
                            Consumers: []shared.ConsumerInput{
                                shared.ConsumerInput{
                                    Subnetwork: sdk.String("deserunt"),
                                },
                                shared.ConsumerInput{
                                    Subnetwork: sdk.String("provident"),
                                },
                            },
                        },
                        Version: sdk.String("minima"),
                    },
                },
                ConfigOverrides: map[string]string{
                    "totam": "similique",
                    "alias": "at",
                    "quaerat": "tempora",
                    "vel": "quod",
                },
                KerberosConfig: &shared.KerberosConfig{
                    Keytab: &shared.Secret{
                        CloudSecret: sdk.String("officiis"),
                    },
                    Krb5ConfigGcsURI: sdk.String("qui"),
                    Principal: sdk.String("dolorum"),
                },
                Version: sdk.String("a"),
            },
            Labels: map[string]string{
                "harum": "iusto",
                "ipsum": "quisquam",
            },
            MaintenanceWindow: &shared.MaintenanceWindow{
                DayOfWeek: shared.MaintenanceWindowDayOfWeekEnumSunday.ToPointer(),
                HourOfDay: sdk.Int(229442),
            },
            Name: sdk.String("Tomas Funk"),
            Network: sdk.String("sapiente"),
            NetworkConfig: &shared.NetworkConfigInput{
                Consumers: []shared.ConsumerInput{
                    shared.ConsumerInput{
                        Subnetwork: sdk.String("nihil"),
                    },
                    shared.ConsumerInput{
                        Subnetwork: sdk.String("sit"),
                    },
                    shared.ConsumerInput{
                        Subnetwork: sdk.String("expedita"),
                    },
                },
            },
            Port: sdk.Int(207470),
            ReleaseChannel: shared.ServiceReleaseChannelEnumReleaseChannelUnspecified.ToPointer(),
            ScalingConfig: &shared.ScalingConfig{
                InstanceSize: shared.ScalingConfigInstanceSizeEnumSmall.ToPointer(),
                ScalingFactor: sdk.Float32(7304.42),
            },
            TelemetryConfig: &shared.TelemetryConfig{
                LogFormat: shared.TelemetryConfigLogFormatEnumLegacy.ToPointer(),
            },
            Tier: shared.ServiceTierEnumDeveloper.ToPointer(),
        },
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("qui"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("maxime"),
        Parent: "pariatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("soluta"),
        RequestID: sdk.String("dicta"),
        ServiceID: sdk.String("laborum"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.MetastoreProjectsLocationsServicesCreateSecurity{
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

## MetastoreProjectsLocationsServicesExportMetadata

Exports metadata from a service.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesExportMetadata(ctx, operations.MetastoreProjectsLocationsServicesExportMetadataRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ExportMetadataRequest: &shared.ExportMetadataRequest{
            DatabaseDumpType: shared.ExportMetadataRequestDatabaseDumpTypeEnumTypeUnspecified.ToPointer(),
            DestinationGcsFolder: sdk.String("distinctio"),
            RequestID: sdk.String("facilis"),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestias"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("neque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        Service: "magni",
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("sunt"),
    }, operations.MetastoreProjectsLocationsServicesExportMetadataSecurity{
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

## MetastoreProjectsLocationsServicesList

Lists services in a project and location.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesList(ctx, operations.MetastoreProjectsLocationsServicesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("cumque"),
        Filter: sdk.String("soluta"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("et"),
        OrderBy: sdk.String("saepe"),
        PageSize: sdk.Int64(217450),
        PageToken: sdk.String("veritatis"),
        Parent: "nobis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.MetastoreProjectsLocationsServicesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicesResponse != nil {
        // handle response
    }
}
```

## MetastoreProjectsLocationsServicesMetadataImportsCreate

Creates a new MetadataImport in a given project and location.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesMetadataImportsCreate(ctx, operations.MetastoreProjectsLocationsServicesMetadataImportsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        MetadataImportInput: &shared.MetadataImportInput{
            DatabaseDump: &shared.DatabaseDump{
                DatabaseType: shared.DatabaseDumpDatabaseTypeEnumMysql.ToPointer(),
                GcsURI: sdk.String("dolorem"),
                SourceDatabase: sdk.String("dolore"),
                Type: shared.DatabaseDumpTypeEnumTypeUnspecified.ToPointer(),
            },
            Description: sdk.String("adipisci"),
            Name: sdk.String("Ms. Joe Berge"),
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("porro"),
        Key: sdk.String("doloribus"),
        MetadataImportID: sdk.String("ut"),
        OauthToken: sdk.String("facilis"),
        Parent: "cupiditate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        RequestID: sdk.String("quae"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("odio"),
    }, operations.MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity{
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

## MetastoreProjectsLocationsServicesMetadataImportsGet

Gets details of a single import.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesMetadataImportsGet(ctx, operations.MetastoreProjectsLocationsServicesMetadataImportsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("quis"),
        Name: "Dixie Klocko",
        OauthToken: sdk.String("tenetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.MetastoreProjectsLocationsServicesMetadataImportsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MetadataImport != nil {
        // handle response
    }
}
```

## MetastoreProjectsLocationsServicesMetadataImportsList

Lists imports in a service.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesMetadataImportsList(ctx, operations.MetastoreProjectsLocationsServicesMetadataImportsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("vero"),
        Filter: sdk.String("ducimus"),
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("quibusdam"),
        OrderBy: sdk.String("illum"),
        PageSize: sdk.Int64(194342),
        PageToken: sdk.String("natus"),
        Parent: "impedit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.MetastoreProjectsLocationsServicesMetadataImportsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMetadataImportsResponse != nil {
        // handle response
    }
}
```

## MetastoreProjectsLocationsServicesMetadataImportsPatch

Updates a single import. Only the description field of MetadataImport is supported to be updated.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesMetadataImportsPatch(ctx, operations.MetastoreProjectsLocationsServicesMetadataImportsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        MetadataImportInput: &shared.MetadataImportInput{
            DatabaseDump: &shared.DatabaseDump{
                DatabaseType: shared.DatabaseDumpDatabaseTypeEnumDatabaseTypeUnspecified.ToPointer(),
                GcsURI: sdk.String("porro"),
                SourceDatabase: sdk.String("maiores"),
                Type: shared.DatabaseDumpTypeEnumAvro.ToPointer(),
            },
            Description: sdk.String("iusto"),
            Name: sdk.String("Kurt Abernathy"),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("vel"),
        Key: sdk.String("possimus"),
        Name: "Paula Jacobs I",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        RequestID: sdk.String("ex"),
        UpdateMask: sdk.String("nulla"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity{
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

## MetastoreProjectsLocationsServicesMoveTableToDatabase

Move a table to another database.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesMoveTableToDatabase(ctx, operations.MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        MoveTableToDatabaseRequest: &shared.MoveTableToDatabaseRequest{
            DbName: sdk.String("sapiente"),
            DestinationDbName: sdk.String("quisquam"),
            TableName: sdk.String("saepe"),
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        Service: "ea",
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("consectetur"),
    }, operations.MetastoreProjectsLocationsServicesMoveTableToDatabaseSecurity{
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

## MetastoreProjectsLocationsServicesQueryMetadata

Query DPMS metadata.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesQueryMetadata(ctx, operations.MetastoreProjectsLocationsServicesQueryMetadataRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        QueryMetadataRequest: &shared.QueryMetadataRequest{
            Query: sdk.String("aspernatur"),
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("libero"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        Service: "impedit",
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.MetastoreProjectsLocationsServicesQueryMetadataSecurity{
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

## MetastoreProjectsLocationsServicesRestore

Restores a service from a backup.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesRestore(ctx, operations.MetastoreProjectsLocationsServicesRestoreRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RestoreServiceRequest: &shared.RestoreServiceRequest{
            Backup: sdk.String("inventore"),
            RequestID: sdk.String("non"),
            RestoreType: shared.RestoreServiceRequestRestoreTypeEnumRestoreTypeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("velit"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("autem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        Service: "quas",
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("nulla"),
    }, operations.MetastoreProjectsLocationsServicesRestoreSecurity{
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

## MetastoreProjectsLocationsServicesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesTestIamPermissions(ctx, operations.MetastoreProjectsLocationsServicesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "quasi",
                "tempora",
                "numquam",
            },
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        Resource: "esse",
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("rem"),
    }, operations.MetastoreProjectsLocationsServicesTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```
