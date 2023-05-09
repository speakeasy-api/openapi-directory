# Projects

### Available Operations

* [RedisProjectsLocationsInstancesCreate](#redisprojectslocationsinstancescreate) - Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* [RedisProjectsLocationsInstancesExport](#redisprojectslocationsinstancesexport) - Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* [RedisProjectsLocationsInstancesFailover](#redisprojectslocationsinstancesfailover) - Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.
* [RedisProjectsLocationsInstancesGetAuthString](#redisprojectslocationsinstancesgetauthstring) - Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.
* [RedisProjectsLocationsInstancesImport](#redisprojectslocationsinstancesimport) - Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* [RedisProjectsLocationsInstancesList](#redisprojectslocationsinstanceslist) - Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.
* [RedisProjectsLocationsInstancesPatch](#redisprojectslocationsinstancespatch) - Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* [RedisProjectsLocationsInstancesRescheduleMaintenance](#redisprojectslocationsinstancesreschedulemaintenance) - Reschedule maintenance for a given instance in a given project and location.
* [RedisProjectsLocationsInstancesUpgrade](#redisprojectslocationsinstancesupgrade) - Upgrades Redis instance to the newer Redis version specified in the request.
* [RedisProjectsLocationsList](#redisprojectslocationslist) - Lists information about the supported locations for this service.
* [RedisProjectsLocationsOperationsCancel](#redisprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [RedisProjectsLocationsOperationsDelete](#redisprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [RedisProjectsLocationsOperationsGet](#redisprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [RedisProjectsLocationsOperationsList](#redisprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## RedisProjectsLocationsInstancesCreate

Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

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
    res, err := s.Projects.RedisProjectsLocationsInstancesCreate(ctx, operations.RedisProjectsLocationsInstancesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InstanceInput: &shared.InstanceInput{
            AlternativeLocationID: sdk.String("sed"),
            AuthEnabled: sdk.Bool(false),
            AuthorizedNetwork: sdk.String("iste"),
            AvailableMaintenanceVersions: []string{
                "natus",
            },
            ConnectMode: shared.InstanceConnectModeEnumDirectPeering.ToPointer(),
            CustomerManagedKey: sdk.String("hic"),
            DisplayName: sdk.String("saepe"),
            Labels: map[string]string{
                "in": "corporis",
                "iste": "iure",
                "saepe": "quidem",
            },
            LocationID: sdk.String("architecto"),
            MaintenancePolicy: &shared.MaintenancePolicyInput{
                Description: sdk.String("ipsa"),
                WeeklyMaintenanceWindow: []shared.WeeklyMaintenanceWindowInput{
                    shared.WeeklyMaintenanceWindowInput{
                        Day: shared.WeeklyMaintenanceWindowDayEnumFriday.ToPointer(),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(653140),
                            Minutes: sdk.Int(670638),
                            Nanos: sdk.Int(170909),
                            Seconds: sdk.Int(210382),
                        },
                    },
                    shared.WeeklyMaintenanceWindowInput{
                        Day: shared.WeeklyMaintenanceWindowDayEnumTuesday.ToPointer(),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(128926),
                            Minutes: sdk.Int(750686),
                            Nanos: sdk.Int(315428),
                            Seconds: sdk.Int(607831),
                        },
                    },
                    shared.WeeklyMaintenanceWindowInput{
                        Day: shared.WeeklyMaintenanceWindowDayEnumTuesday.ToPointer(),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(325047),
                            Minutes: sdk.Int(570197),
                            Nanos: sdk.Int(38425),
                            Seconds: sdk.Int(438601),
                        },
                    },
                    shared.WeeklyMaintenanceWindowInput{
                        Day: shared.WeeklyMaintenanceWindowDayEnumFriday.ToPointer(),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(988374),
                            Minutes: sdk.Int(958950),
                            Nanos: sdk.Int(102044),
                            Seconds: sdk.Int(652790),
                        },
                    },
                },
            },
            MaintenanceSchedule: &shared.MaintenanceScheduleInput{
                CanReschedule: sdk.Bool(false),
            },
            MaintenanceVersion: sdk.String("dolorem"),
            MemorySizeGb: sdk.Int(635059),
            Name: sdk.String("Jaime O'Hara"),
            PersistenceConfig: &shared.PersistenceConfigInput{
                PersistenceMode: shared.PersistenceConfigPersistenceModeEnumDisabled.ToPointer(),
                RdbSnapshotPeriod: shared.PersistenceConfigRdbSnapshotPeriodEnumSixHours.ToPointer(),
                RdbSnapshotStartTime: sdk.String("molestiae"),
            },
            ReadReplicasMode: shared.InstanceReadReplicasModeEnumReadReplicasModeUnspecified.ToPointer(),
            RedisConfigs: map[string]string{
                "quia": "quis",
                "vitae": "laborum",
                "animi": "enim",
            },
            RedisVersion: sdk.String("odit"),
            ReplicaCount: sdk.Int(778346),
            ReservedIPRange: sdk.String("sequi"),
            SecondaryIPRange: sdk.String("tenetur"),
            SuspensionReasons: []shared.InstanceSuspensionReasonsEnum{
                shared.InstanceSuspensionReasonsEnumCustomerManagedKeyIssue,
                shared.InstanceSuspensionReasonsEnumCustomerManagedKeyIssue,
            },
            Tier: shared.InstanceTierEnumTierUnspecified.ToPointer(),
            TransitEncryptionMode: shared.InstanceTransitEncryptionModeEnumTransitEncryptionModeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("quasi"),
        InstanceID: sdk.String("reiciendis"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("vero"),
        Parent: "nihil",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.RedisProjectsLocationsInstancesCreateSecurity{
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

## RedisProjectsLocationsInstancesExport

Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

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
    res, err := s.Projects.RedisProjectsLocationsInstancesExport(ctx, operations.RedisProjectsLocationsInstancesExportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ExportInstanceRequest: &shared.ExportInstanceRequest{
            OutputConfig: &shared.OutputConfig{
                GcsDestination: &shared.GcsDestination{
                    URI: sdk.String("http://shadowy-alfalfa.com"),
                },
            },
        },
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("corporis"),
        Name: "Heidi Carter",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("quae"),
    }, operations.RedisProjectsLocationsInstancesExportSecurity{
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

## RedisProjectsLocationsInstancesFailover

Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.

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
    res, err := s.Projects.RedisProjectsLocationsInstancesFailover(ctx, operations.RedisProjectsLocationsInstancesFailoverRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FailoverInstanceRequest: &shared.FailoverInstanceRequest{
            DataProtectionMode: shared.FailoverInstanceRequestDataProtectionModeEnumForceDataLoss.ToPointer(),
        },
        AccessToken: sdk.String("molestias"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("modi"),
        Key: sdk.String("praesentium"),
        Name: "Grady Botsford",
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("enim"),
    }, operations.RedisProjectsLocationsInstancesFailoverSecurity{
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

## RedisProjectsLocationsInstancesGetAuthString

Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.

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
    res, err := s.Projects.RedisProjectsLocationsInstancesGetAuthString(ctx, operations.RedisProjectsLocationsInstancesGetAuthStringRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("distinctio"),
        Name: "Francisco Gleason",
        OauthToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("magni"),
    }, operations.RedisProjectsLocationsInstancesGetAuthStringSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstanceAuthString != nil {
        // handle response
    }
}
```

## RedisProjectsLocationsInstancesImport

Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

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
    res, err := s.Projects.RedisProjectsLocationsInstancesImport(ctx, operations.RedisProjectsLocationsInstancesImportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ImportInstanceRequest: &shared.ImportInstanceRequest{
            InputConfig: &shared.InputConfig{
                GcsSource: &shared.GcsSource{
                    URI: sdk.String("http://acceptable-chamber.net"),
                },
            },
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("tempore"),
        Key: sdk.String("labore"),
        Name: "Andre Franey",
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("sint"),
    }, operations.RedisProjectsLocationsInstancesImportSecurity{
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

## RedisProjectsLocationsInstancesList

Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

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
    res, err := s.Projects.RedisProjectsLocationsInstancesList(ctx, operations.RedisProjectsLocationsInstancesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("in"),
        PageSize: sdk.Int64(846409),
        PageToken: sdk.String("maiores"),
        Parent: "rerum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.RedisProjectsLocationsInstancesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstancesResponse != nil {
        // handle response
    }
}
```

## RedisProjectsLocationsInstancesPatch

Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

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
    res, err := s.Projects.RedisProjectsLocationsInstancesPatch(ctx, operations.RedisProjectsLocationsInstancesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InstanceInput: &shared.InstanceInput{
            AlternativeLocationID: sdk.String("ea"),
            AuthEnabled: sdk.Bool(false),
            AuthorizedNetwork: sdk.String("aliquid"),
            AvailableMaintenanceVersions: []string{
                "accusamus",
                "non",
                "occaecati",
            },
            ConnectMode: shared.InstanceConnectModeEnumConnectModeUnspecified.ToPointer(),
            CustomerManagedKey: sdk.String("accusamus"),
            DisplayName: sdk.String("delectus"),
            Labels: map[string]string{
                "provident": "nam",
                "id": "blanditiis",
                "deleniti": "sapiente",
            },
            LocationID: sdk.String("amet"),
            MaintenancePolicy: &shared.MaintenancePolicyInput{
                Description: sdk.String("deserunt"),
                WeeklyMaintenanceWindow: []shared.WeeklyMaintenanceWindowInput{
                    shared.WeeklyMaintenanceWindowInput{
                        Day: shared.WeeklyMaintenanceWindowDayEnumWednesday.ToPointer(),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(618809),
                            Minutes: sdk.Int(606393),
                            Nanos: sdk.Int(474867),
                            Seconds: sdk.Int(19193),
                        },
                    },
                    shared.WeeklyMaintenanceWindowInput{
                        Day: shared.WeeklyMaintenanceWindowDayEnumWednesday.ToPointer(),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(301575),
                            Minutes: sdk.Int(716075),
                            Nanos: sdk.Int(660174),
                            Seconds: sdk.Int(287991),
                        },
                    },
                },
            },
            MaintenanceSchedule: &shared.MaintenanceScheduleInput{
                CanReschedule: sdk.Bool(false),
            },
            MaintenanceVersion: sdk.String("labore"),
            MemorySizeGb: sdk.Int(383462),
            Name: sdk.String("Robin Keebler"),
            PersistenceConfig: &shared.PersistenceConfigInput{
                PersistenceMode: shared.PersistenceConfigPersistenceModeEnumPersistenceModeUnspecified.ToPointer(),
                RdbSnapshotPeriod: shared.PersistenceConfigRdbSnapshotPeriodEnumOneHour.ToPointer(),
                RdbSnapshotStartTime: sdk.String("et"),
            },
            ReadReplicasMode: shared.InstanceReadReplicasModeEnumReadReplicasDisabled.ToPointer(),
            RedisConfigs: map[string]string{
                "provident": "quos",
                "sint": "accusantium",
            },
            RedisVersion: sdk.String("mollitia"),
            ReplicaCount: sdk.Int(968962),
            ReservedIPRange: sdk.String("mollitia"),
            SecondaryIPRange: sdk.String("ad"),
            SuspensionReasons: []shared.InstanceSuspensionReasonsEnum{
                shared.InstanceSuspensionReasonsEnumSuspensionReasonUnspecified,
                shared.InstanceSuspensionReasonsEnumCustomerManagedKeyIssue,
            },
            Tier: shared.InstanceTierEnumTierUnspecified.ToPointer(),
            TransitEncryptionMode: shared.InstanceTransitEncryptionModeEnumServerAuthentication.ToPointer(),
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("eius"),
        Name: "Alfredo Prosacco Sr.",
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UpdateMask: sdk.String("expedita"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.RedisProjectsLocationsInstancesPatchSecurity{
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

## RedisProjectsLocationsInstancesRescheduleMaintenance

Reschedule maintenance for a given instance in a given project and location.

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
    res, err := s.Projects.RedisProjectsLocationsInstancesRescheduleMaintenance(ctx, operations.RedisProjectsLocationsInstancesRescheduleMaintenanceRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RescheduleMaintenanceRequest: &shared.RescheduleMaintenanceRequest{
            RescheduleType: shared.RescheduleMaintenanceRequestRescheduleTypeEnumRescheduleTypeUnspecified.ToPointer(),
            ScheduleTime: sdk.String("saepe"),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("natus"),
        Name: "Joan Satterfield",
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("odit"),
    }, operations.RedisProjectsLocationsInstancesRescheduleMaintenanceSecurity{
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

## RedisProjectsLocationsInstancesUpgrade

Upgrades Redis instance to the newer Redis version specified in the request.

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
    res, err := s.Projects.RedisProjectsLocationsInstancesUpgrade(ctx, operations.RedisProjectsLocationsInstancesUpgradeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UpgradeInstanceRequest: &shared.UpgradeInstanceRequest{
            RedisVersion: sdk.String("accusantium"),
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("voluptate"),
        Name: "Candice Beatty",
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("amet"),
    }, operations.RedisProjectsLocationsInstancesUpgradeSecurity{
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

## RedisProjectsLocationsList

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
    res, err := s.Projects.RedisProjectsLocationsList(ctx, operations.RedisProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("libero"),
        Filter: sdk.String("nobis"),
        Key: sdk.String("dolores"),
        Name: "Mrs. Deanna Kuhn",
        OauthToken: sdk.String("eos"),
        PageSize: sdk.Int64(18521),
        PageToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.RedisProjectsLocationsListSecurity{
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

## RedisProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

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
    res, err := s.Projects.RedisProjectsLocationsOperationsCancel(ctx, operations.RedisProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("facilis"),
        Name: "George Sawayn",
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("rerum"),
    }, operations.RedisProjectsLocationsOperationsCancelSecurity{
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

## RedisProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

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
    res, err := s.Projects.RedisProjectsLocationsOperationsDelete(ctx, operations.RedisProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("iste"),
        Key: sdk.String("dolorum"),
        Name: "Ervin McLaughlin",
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.RedisProjectsLocationsOperationsDeleteSecurity{
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

## RedisProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.RedisProjectsLocationsOperationsGet(ctx, operations.RedisProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("hic"),
        Name: "Felipe Klein",
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.RedisProjectsLocationsOperationsGetSecurity{
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

## RedisProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
    res, err := s.Projects.RedisProjectsLocationsOperationsList(ctx, operations.RedisProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("quaerat"),
        Filter: sdk.String("accusamus"),
        Key: sdk.String("quidem"),
        Name: "Hector Mosciski",
        OauthToken: sdk.String("sit"),
        PageSize: sdk.Int64(854614),
        PageToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.RedisProjectsLocationsOperationsListSecurity{
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
