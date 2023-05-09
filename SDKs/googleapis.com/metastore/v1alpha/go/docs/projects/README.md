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
* [MetastoreProjectsLocationsServicesBackupsList](#metastoreprojectslocationsservicesbackupslist) - Lists backups in a service.
* [MetastoreProjectsLocationsServicesCreate](#metastoreprojectslocationsservicescreate) - Creates a metastore service in a project and location.
* [MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy](#metastoreprojectslocationsservicesdatabasestablesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy](#metastoreprojectslocationsservicesdatabasestablessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissions](#metastoreprojectslocationsservicesdatabasestablestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [MetastoreProjectsLocationsServicesExportMetadata](#metastoreprojectslocationsservicesexportmetadata) - Exports metadata from a service.
* [MetastoreProjectsLocationsServicesList](#metastoreprojectslocationsserviceslist) - Lists services in a project and location.
* [MetastoreProjectsLocationsServicesMetadataImportsCreate](#metastoreprojectslocationsservicesmetadataimportscreate) - Creates a new MetadataImport in a given project and location.
* [MetastoreProjectsLocationsServicesMetadataImportsGet](#metastoreprojectslocationsservicesmetadataimportsget) - Gets details of a single import.
* [MetastoreProjectsLocationsServicesMetadataImportsList](#metastoreprojectslocationsservicesmetadataimportslist) - Lists imports in a service.
* [MetastoreProjectsLocationsServicesMetadataImportsPatch](#metastoreprojectslocationsservicesmetadataimportspatch) - Updates a single import. Only the description field of MetadataImport is supported to be updated.
* [MetastoreProjectsLocationsServicesMoveTableToDatabase](#metastoreprojectslocationsservicesmovetabletodatabase) - Move a table to another database.
* [MetastoreProjectsLocationsServicesQueryMetadata](#metastoreprojectslocationsservicesquerymetadata) - Query DPMS metadata.
* [MetastoreProjectsLocationsServicesRemoveIamPolicy](#metastoreprojectslocationsservicesremoveiampolicy) - Removes the attached IAM policies for a resource
* [MetastoreProjectsLocationsServicesRestore](#metastoreprojectslocationsservicesrestore) - Restores a service from a backup.

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
                    MetastoreType: shared.BackendMetastoreMetastoreTypeEnumDataplex.ToPointer(),
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
                                CustomRoutesEnabled: sdk.Bool(false),
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
                                CustomRoutesEnabled: sdk.Bool(false),
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
                                CustomRoutesEnabled: sdk.Bool(false),
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
                    EndpointProtocol: shared.HiveMetastoreConfigEndpointProtocolEnumEndpointProtocolUnspecified.ToPointer(),
                    KerberosConfig: &shared.KerberosConfig{
                        Keytab: &shared.Secret{
                            CloudSecret: sdk.String("cumque"),
                        },
                        Krb5ConfigGcsURI: sdk.String("facere"),
                        Principal: sdk.String("ea"),
                    },
                    Version: sdk.String("aliquid"),
                },
                Labels: map[string]string{
                    "accusamus": "non",
                    "occaecati": "enim",
                    "accusamus": "delectus",
                },
                MaintenanceWindow: &shared.MaintenanceWindow{
                    DayOfWeek: shared.MaintenanceWindowDayOfWeekEnumFriday.ToPointer(),
                    HourOfDay: sdk.Int(588465),
                },
                MetadataIntegration: &shared.MetadataIntegration{
                    DataCatalogConfig: &shared.DataCatalogConfig{
                        Enabled: sdk.Bool(false),
                    },
                    DataplexConfig: &shared.DataplexConfig{
                        LakeResources: map[string]shared.Lake{
                            "id": shared.Lake{
                                Name: sdk.String("Jaime Will"),
                            },
                            "nisi": shared.Lake{
                                Name: sdk.String("Ada Moen IV"),
                            },
                            "magnam": shared.Lake{
                                Name: sdk.String("Alfonso Green"),
                            },
                        },
                    },
                },
                Name: sdk.String("Robin Keebler"),
                Network: sdk.String("architecto"),
                NetworkConfig: &shared.NetworkConfigInput{
                    Consumers: []shared.ConsumerInput{
                        shared.ConsumerInput{
                            Subnetwork: sdk.String("et"),
                        },
                        shared.ConsumerInput{
                            Subnetwork: sdk.String("excepturi"),
                        },
                    },
                    CustomRoutesEnabled: sdk.Bool(false),
                },
                Port: sdk.Int(354047),
                ReleaseChannel: shared.ServiceReleaseChannelEnumCanary.ToPointer(),
                ScalingConfig: &shared.ScalingConfig{
                    InstanceSize: shared.ScalingConfigInstanceSizeEnumMedium.ToPointer(),
                    ScalingFactor: sdk.Float32(5743.25),
                },
                TelemetryConfig: &shared.TelemetryConfig{
                    LogFormat: shared.TelemetryConfigLogFormatEnumLogFormatUnspecified.ToPointer(),
                },
                Tier: shared.ServiceTierEnumDeveloper.ToPointer(),
            },
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BackupID: sdk.String("ad"),
        Callback: sdk.String("eum"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("odit"),
        Parent: "nemo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        RequestID: sdk.String("iure"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("debitis"),
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
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("in"),
        Key: sdk.String("architecto"),
        Name: "Elvira Herman",
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        RequestID: sdk.String("sed"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("pariatur"),
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
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("magni"),
        Filter: sdk.String("sunt"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("illum"),
        OrderBy: sdk.String("pariatur"),
        PageSize: sdk.Int64(807319),
        PageToken: sdk.String("ea"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("accusantium"),
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
            DatabaseType: shared.ServiceDatabaseTypeEnumSpanner.ToPointer(),
            EncryptionConfig: &shared.EncryptionConfig{
                KmsKey: sdk.String("quidem"),
            },
            HiveMetastoreConfig: &shared.HiveMetastoreConfigInput{
                AuxiliaryVersions: map[string]shared.AuxiliaryVersionConfigInput{
                    "voluptate": shared.AuxiliaryVersionConfigInput{
                        ConfigOverrides: map[string]string{
                            "nam": "eaque",
                            "pariatur": "nemo",
                        },
                        NetworkConfig: &shared.NetworkConfigInput{
                            Consumers: []shared.ConsumerInput{
                                shared.ConsumerInput{
                                    Subnetwork: sdk.String("perferendis"),
                                },
                                shared.ConsumerInput{
                                    Subnetwork: sdk.String("fugiat"),
                                },
                                shared.ConsumerInput{
                                    Subnetwork: sdk.String("amet"),
                                },
                                shared.ConsumerInput{
                                    Subnetwork: sdk.String("aut"),
                                },
                            },
                            CustomRoutesEnabled: sdk.Bool(false),
                        },
                        Version: sdk.String("cumque"),
                    },
                    "corporis": shared.AuxiliaryVersionConfigInput{
                        ConfigOverrides: map[string]string{
                            "libero": "nobis",
                            "dolores": "quis",
                            "totam": "dignissimos",
                            "eaque": "quis",
                        },
                        NetworkConfig: &shared.NetworkConfigInput{
                            Consumers: []shared.ConsumerInput{
                                shared.ConsumerInput{
                                    Subnetwork: sdk.String("eos"),
                                },
                            },
                            CustomRoutesEnabled: sdk.Bool(false),
                        },
                        Version: sdk.String("perferendis"),
                    },
                },
                ConfigOverrides: map[string]string{
                    "minus": "quam",
                },
                EndpointProtocol: shared.HiveMetastoreConfigEndpointProtocolEnumEndpointProtocolUnspecified.ToPointer(),
                KerberosConfig: &shared.KerberosConfig{
                    Keytab: &shared.Secret{
                        CloudSecret: sdk.String("vero"),
                    },
                    Krb5ConfigGcsURI: sdk.String("nostrum"),
                    Principal: sdk.String("hic"),
                },
                Version: sdk.String("recusandae"),
            },
            Labels: map[string]string{
                "facilis": "perspiciatis",
                "voluptatem": "porro",
                "consequuntur": "blanditiis",
            },
            MaintenanceWindow: &shared.MaintenanceWindow{
                DayOfWeek: shared.MaintenanceWindowDayOfWeekEnumThursday.ToPointer(),
                HourOfDay: sdk.Int(50370),
            },
            MetadataIntegration: &shared.MetadataIntegration{
                DataCatalogConfig: &shared.DataCatalogConfig{
                    Enabled: sdk.Bool(false),
                },
                DataplexConfig: &shared.DataplexConfig{
                    LakeResources: map[string]shared.Lake{
                        "rerum": shared.Lake{
                            Name: sdk.String("Ollie Watsica"),
                        },
                        "dolorum": shared.Lake{
                            Name: sdk.String("Ervin McLaughlin"),
                        },
                        "delectus": shared.Lake{
                            Name: sdk.String("Billie Jacobi"),
                        },
                    },
                },
            },
            Name: sdk.String("Norma Erdman"),
            Network: sdk.String("cum"),
            NetworkConfig: &shared.NetworkConfigInput{
                Consumers: []shared.ConsumerInput{
                    shared.ConsumerInput{
                        Subnetwork: sdk.String("dignissimos"),
                    },
                    shared.ConsumerInput{
                        Subnetwork: sdk.String("reiciendis"),
                    },
                },
                CustomRoutesEnabled: sdk.Bool(false),
            },
            Port: sdk.Int(227414),
            ReleaseChannel: shared.ServiceReleaseChannelEnumStable.ToPointer(),
            ScalingConfig: &shared.ScalingConfig{
                InstanceSize: shared.ScalingConfigInstanceSizeEnumExtraSmall.ToPointer(),
                ScalingFactor: sdk.Float32(852.95),
            },
            TelemetryConfig: &shared.TelemetryConfig{
                LogFormat: shared.TelemetryConfigLogFormatEnumLogFormatUnspecified.ToPointer(),
            },
            Tier: shared.ServiceTierEnumTierUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("voluptatibus"),
        Parent: "voluptas",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        RequestID: sdk.String("eos"),
        ServiceID: sdk.String("atque"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("fugiat"),
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

## MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy(ctx, operations.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("soluta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("deleniti"),
        OptionsRequestedPolicyVersion: sdk.Int64(607045),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        Resource: "distinctio",
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicySecurity{
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

## MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy(ctx, operations.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "eius",
                                    "aspernatur",
                                    "perferendis",
                                    "amet",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ad",
                                    "saepe",
                                    "suscipit",
                                    "deserunt",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "repellendus",
                                    "totam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("alias"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "tempora",
                                    "vel",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "qui",
                                    "dolorum",
                                    "a",
                                    "esse",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ipsum",
                                    "quisquam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "tempore",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("numquam"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("dolorem"),
                            Expression: sdk.String("sapiente"),
                            Location: sdk.String("totam"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "expedita",
                        },
                        Role: sdk.String("neque"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("sed"),
                            Expression: sdk.String("vel"),
                            Location: sdk.String("libero"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "quam",
                            "ipsum",
                            "incidunt",
                        },
                        Role: sdk.String("qui"),
                    },
                },
                Etag: sdk.String("cupiditate"),
                Version: sdk.Int(807581),
            },
            UpdateMask: sdk.String("pariatur"),
        },
        AccessToken: sdk.String("soluta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("totam"),
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        Resource: "distinctio",
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicySecurity{
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

## MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissions

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissions(ctx, operations.MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "temporibus",
                "qui",
                "neque",
            },
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("ullam"),
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        Resource: "voluptatem",
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("soluta"),
    }, operations.MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsSecurity{
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ExportMetadataRequest: &shared.ExportMetadataRequest{
            DatabaseDumpType: shared.ExportMetadataRequestDatabaseDumpTypeEnumTypeUnspecified.ToPointer(),
            DestinationGcsFolder: sdk.String("saepe"),
            RequestID: sdk.String("ipsum"),
        },
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("tempore"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("aperiam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        Service: "dolorem",
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("labore"),
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
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("aut"),
        Filter: sdk.String("quas"),
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("consequatur"),
        OrderBy: sdk.String("est"),
        PageSize: sdk.Int64(833038),
        PageToken: sdk.String("porro"),
        Parent: "doloribus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("facilis"),
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
                DatabaseType: shared.DatabaseDumpDatabaseTypeEnumDatabaseTypeUnspecified.ToPointer(),
                GcsURI: sdk.String("laudantium"),
                SourceDatabase: sdk.String("odio"),
                Type: shared.DatabaseDumpTypeEnumMysql.ToPointer(),
            },
            Description: sdk.String("voluptatibus"),
            Name: sdk.String("Ignacio Moen"),
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("vero"),
        Key: sdk.String("tenetur"),
        MetadataImportID: sdk.String("dignissimos"),
        OauthToken: sdk.String("hic"),
        Parent: "distinctio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        RequestID: sdk.String("odio"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("facilis"),
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
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("illum"),
        Key: sdk.String("sequi"),
        Name: "Edmund Ankunding",
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("maiores"),
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
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ducimus"),
        Fields: sdk.String("alias"),
        Filter: sdk.String("officia"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("ipsam"),
        OrderBy: sdk.String("ea"),
        PageSize: sdk.Int64(136900),
        PageToken: sdk.String("vel"),
        Parent: "possimus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("ratione"),
        UploadProtocol: sdk.String("ex"),
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
                GcsURI: sdk.String("dolor"),
                SourceDatabase: sdk.String("maiores"),
                Type: shared.DatabaseDumpTypeEnumTypeUnspecified.ToPointer(),
            },
            Description: sdk.String("ex"),
            Name: sdk.String("Marshall Wiza"),
        },
        AccessToken: sdk.String("quisquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("corporis"),
        Name: "Jeanne Bode",
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consectetur"),
        RequestID: sdk.String("recusandae"),
        UpdateMask: sdk.String("aspernatur"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("eaque"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        MoveTableToDatabaseRequest: &shared.MoveTableToDatabaseRequest{
            DbName: sdk.String("libero"),
            DestinationDbName: sdk.String("aut"),
            TableName: sdk.String("aut"),
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        Service: "et",
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("laborum"),
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
            Query: sdk.String("velit"),
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("quas"),
        Key: sdk.String("assumenda"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        Service: "libero",
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("tempora"),
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

## MetastoreProjectsLocationsServicesRemoveIamPolicy

Removes the attached IAM policies for a resource

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
    res, err := s.Projects.MetastoreProjectsLocationsServicesRemoveIamPolicy(ctx, operations.MetastoreProjectsLocationsServicesRemoveIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RemoveIamPolicyRequest: &shared.RemoveIamPolicyRequest{
            Asynchronous: sdk.Bool(false),
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
    }, operations.MetastoreProjectsLocationsServicesRemoveIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveIamPolicyResponse != nil {
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
            Backup: sdk.String("reprehenderit"),
            RequestID: sdk.String("quidem"),
            RestoreType: shared.RestoreServiceRequestRestoreTypeEnumMetadataOnly.ToPointer(),
        },
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("assumenda"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quisquam"),
        Service: "veritatis",
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("id"),
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
