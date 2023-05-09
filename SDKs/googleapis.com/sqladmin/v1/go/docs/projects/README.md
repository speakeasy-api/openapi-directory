# Projects

### Available Operations

* [SQLProjectsInstancesGetDiskShrinkConfig](#sqlprojectsinstancesgetdiskshrinkconfig) - Get Disk Shrink Config for a given instance.
* [SQLProjectsInstancesPerformDiskShrink](#sqlprojectsinstancesperformdiskshrink) - Perform Disk Shrink on primary instance.
* [SQLProjectsInstancesRescheduleMaintenance](#sqlprojectsinstancesreschedulemaintenance) - Reschedules the maintenance on the given instance.
* [SQLProjectsInstancesResetReplicaSize](#sqlprojectsinstancesresetreplicasize) - Reset Replica Size to primary instance disk size.
* [SQLProjectsInstancesStartExternalSync](#sqlprojectsinstancesstartexternalsync) - Start External primary instance migration.
* [SQLProjectsInstancesVerifyExternalSyncSettings](#sqlprojectsinstancesverifyexternalsyncsettings) - Verify External primary instance external sync settings.

## SQLProjectsInstancesGetDiskShrinkConfig

Get Disk Shrink Config for a given instance.

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
    res, err := s.Projects.SQLProjectsInstancesGetDiskShrinkConfig(ctx, operations.SQLProjectsInstancesGetDiskShrinkConfigRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("recusandae"),
        Instance: "esse",
        Key: sdk.String("provident"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        Project: "eum",
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.SQLProjectsInstancesGetDiskShrinkConfigSecurity{
        Option1: &operations.SQLProjectsInstancesGetDiskShrinkConfigSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SQLInstancesGetDiskShrinkConfigResponse != nil {
        // handle response
    }
}
```

## SQLProjectsInstancesPerformDiskShrink

Perform Disk Shrink on primary instance.

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
    res, err := s.Projects.SQLProjectsInstancesPerformDiskShrink(ctx, operations.SQLProjectsInstancesPerformDiskShrinkRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PerformDiskShrinkContext: &shared.PerformDiskShrinkContext{
            TargetSizeGb: sdk.String("quasi"),
        },
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("provident"),
        Instance: "possimus",
        Key: sdk.String("animi"),
        OauthToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        Project: "aliquid",
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.SQLProjectsInstancesPerformDiskShrinkSecurity{
        Option1: &operations.SQLProjectsInstancesPerformDiskShrinkSecurityOption1{
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

## SQLProjectsInstancesRescheduleMaintenance

Reschedules the maintenance on the given instance.

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
    res, err := s.Projects.SQLProjectsInstancesRescheduleMaintenance(ctx, operations.SQLProjectsInstancesRescheduleMaintenanceRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SQLInstancesRescheduleMaintenanceRequestBody: &shared.SQLInstancesRescheduleMaintenanceRequestBody{
            Reschedule: &shared.Reschedule{
                RescheduleType: shared.RescheduleRescheduleTypeEnumImmediate.ToPointer(),
                ScheduleTime: sdk.String("nam"),
            },
        },
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("placeat"),
        Instance: "modi",
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        Project: "officiis",
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("vitae"),
    }, operations.SQLProjectsInstancesRescheduleMaintenanceSecurity{
        Option1: &operations.SQLProjectsInstancesRescheduleMaintenanceSecurityOption1{
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

## SQLProjectsInstancesResetReplicaSize

Reset Replica Size to primary instance disk size.

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
    res, err := s.Projects.SQLProjectsInstancesResetReplicaSize(ctx, operations.SQLProjectsInstancesResetReplicaSizeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "quis": "inventore",
            "fugit": "cumque",
        },
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("aspernatur"),
        Instance: "eum",
        Key: sdk.String("eius"),
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        Project: "at",
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.SQLProjectsInstancesResetReplicaSizeSecurity{
        Option1: &operations.SQLProjectsInstancesResetReplicaSizeSecurityOption1{
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

## SQLProjectsInstancesStartExternalSync

Start External primary instance migration.

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
    res, err := s.Projects.SQLProjectsInstancesStartExternalSync(ctx, operations.SQLProjectsInstancesStartExternalSyncRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SQLInstancesStartExternalSyncRequest: &shared.SQLInstancesStartExternalSyncRequest{
            MysqlSyncConfig: &shared.MySQLSyncConfig{
                InitialSyncFlags: []shared.SyncFlags{
                    shared.SyncFlags{
                        Name: sdk.String("Teresa McCullough"),
                        Value: sdk.String("soluta"),
                    },
                },
            },
            SkipVerification: sdk.Bool(false),
            SyncMode: shared.SQLInstancesStartExternalSyncRequestSyncModeEnumOffline.ToPointer(),
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("perspiciatis"),
        Instance: "maiores",
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        Project: "porro",
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.SQLProjectsInstancesStartExternalSyncSecurity{
        Option1: &operations.SQLProjectsInstancesStartExternalSyncSecurityOption1{
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

## SQLProjectsInstancesVerifyExternalSyncSettings

Verify External primary instance external sync settings.

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
    res, err := s.Projects.SQLProjectsInstancesVerifyExternalSyncSettings(ctx, operations.SQLProjectsInstancesVerifyExternalSyncSettingsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SQLInstancesVerifyExternalSyncSettingsRequest: &shared.SQLInstancesVerifyExternalSyncSettingsRequest{
            MysqlSyncConfig: &shared.MySQLSyncConfig{
                InitialSyncFlags: []shared.SyncFlags{
                    shared.SyncFlags{
                        Name: sdk.String("Lynda Tromp Sr."),
                        Value: sdk.String("et"),
                    },
                    shared.SyncFlags{
                        Name: sdk.String("Ada McClure"),
                        Value: sdk.String("quasi"),
                    },
                    shared.SyncFlags{
                        Name: sdk.String("Melba Stokes I"),
                        Value: sdk.String("nihil"),
                    },
                },
            },
            SyncMode: shared.SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnumOnline.ToPointer(),
            VerifyConnectionOnly: sdk.Bool(false),
            VerifyReplicationOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("praesentium"),
        Instance: "maiores",
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        Project: "architecto",
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.SQLProjectsInstancesVerifyExternalSyncSettingsSecurity{
        Option1: &operations.SQLProjectsInstancesVerifyExternalSyncSettingsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SQLInstancesVerifyExternalSyncSettingsResponse != nil {
        // handle response
    }
}
```
