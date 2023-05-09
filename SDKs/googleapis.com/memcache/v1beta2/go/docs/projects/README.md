# Projects

### Available Operations

* [MemcacheProjectsLocationsInstancesApplyParameters](#memcacheprojectslocationsinstancesapplyparameters) - `ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.
* [MemcacheProjectsLocationsInstancesApplySoftwareUpdate](#memcacheprojectslocationsinstancesapplysoftwareupdate) - Updates software on the selected nodes of the Instance.
* [MemcacheProjectsLocationsInstancesCreate](#memcacheprojectslocationsinstancescreate) - Creates a new Instance in a given location.
* [MemcacheProjectsLocationsInstancesList](#memcacheprojectslocationsinstanceslist) - Lists Instances in a given location.
* [MemcacheProjectsLocationsInstancesPatch](#memcacheprojectslocationsinstancespatch) - Updates an existing Instance in a given project and location.
* [MemcacheProjectsLocationsInstancesRescheduleMaintenance](#memcacheprojectslocationsinstancesreschedulemaintenance) - Performs the apply phase of the RescheduleMaintenance verb.
* [MemcacheProjectsLocationsInstancesUpdateParameters](#memcacheprojectslocationsinstancesupdateparameters) - Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.
* [MemcacheProjectsLocationsList](#memcacheprojectslocationslist) - Lists information about the supported locations for this service.
* [MemcacheProjectsLocationsOperationsCancel](#memcacheprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [MemcacheProjectsLocationsOperationsDelete](#memcacheprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [MemcacheProjectsLocationsOperationsGet](#memcacheprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [MemcacheProjectsLocationsOperationsList](#memcacheprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## MemcacheProjectsLocationsInstancesApplyParameters

`ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.

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
    res, err := s.Projects.MemcacheProjectsLocationsInstancesApplyParameters(ctx, operations.MemcacheProjectsLocationsInstancesApplyParametersRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ApplyParametersRequest: &shared.ApplyParametersRequest{
            ApplyAll: sdk.Bool(false),
            NodeIds: []string{
                "placeat",
                "voluptatum",
                "iusto",
                "excepturi",
            },
        },
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("ab"),
        Key: sdk.String("quis"),
        Name: "Iris Aufderhar",
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("at"),
    }, operations.MemcacheProjectsLocationsInstancesApplyParametersSecurity{
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

## MemcacheProjectsLocationsInstancesApplySoftwareUpdate

Updates software on the selected nodes of the Instance.

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
    res, err := s.Projects.MemcacheProjectsLocationsInstancesApplySoftwareUpdate(ctx, operations.MemcacheProjectsLocationsInstancesApplySoftwareUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ApplySoftwareUpdateRequest: &shared.ApplySoftwareUpdateRequest{
            ApplyAll: sdk.Bool(false),
            NodeIds: []string{
                "molestiae",
                "quod",
                "quod",
                "esse",
            },
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("dicta"),
        Instance: "nam",
        Key: sdk.String("officia"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("hic"),
    }, operations.MemcacheProjectsLocationsInstancesApplySoftwareUpdateSecurity{
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

## MemcacheProjectsLocationsInstancesCreate

Creates a new Instance in a given location.

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
    res, err := s.Projects.MemcacheProjectsLocationsInstancesCreate(ctx, operations.MemcacheProjectsLocationsInstancesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InstanceInput: &shared.InstanceInput{
            AuthorizedNetwork: sdk.String("totam"),
            DisplayName: sdk.String("beatae"),
            InstanceMessages: []shared.InstanceMessage{
                shared.InstanceMessage{
                    Code: shared.InstanceMessageCodeEnumCodeUnspecified.ToPointer(),
                    Message: sdk.String("modi"),
                },
                shared.InstanceMessage{
                    Code: shared.InstanceMessageCodeEnumCodeUnspecified.ToPointer(),
                    Message: sdk.String("impedit"),
                },
            },
            Labels: map[string]string{
                "esse": "ipsum",
                "excepturi": "aspernatur",
                "perferendis": "ad",
            },
            MaintenancePolicy: &shared.GoogleCloudMemcacheV1beta2MaintenancePolicyInput{
                Description: sdk.String("natus"),
                WeeklyMaintenanceWindow: []shared.WeeklyMaintenanceWindow{
                    shared.WeeklyMaintenanceWindow{
                        Day: shared.WeeklyMaintenanceWindowDayEnumThursday.ToPointer(),
                        Duration: sdk.String("dolor"),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(616934),
                            Minutes: sdk.Int(386489),
                            Nanos: sdk.Int(943749),
                            Seconds: sdk.Int(902599),
                        },
                    },
                },
            },
            MemcacheVersion: shared.InstanceMemcacheVersionEnumMemcache15.ToPointer(),
            Name: sdk.String("Stacy Moore"),
            NodeConfig: &shared.NodeConfig{
                CPUCount: sdk.Int(697631),
                MemorySizeMb: sdk.Int(99280),
            },
            NodeCount: sdk.Int(60225),
            Parameters: &shared.MemcacheParametersInput{
                Params: map[string]string{
                    "est": "mollitia",
                    "laborum": "dolores",
                    "dolorem": "corporis",
                    "explicabo": "nobis",
                },
            },
            Zones: []string{
                "omnis",
                "nemo",
            },
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("iure"),
        InstanceID: sdk.String("culpa"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("sapiente"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.MemcacheProjectsLocationsInstancesCreateSecurity{
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

## MemcacheProjectsLocationsInstancesList

Lists Instances in a given location.

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
    res, err := s.Projects.MemcacheProjectsLocationsInstancesList(ctx, operations.MemcacheProjectsLocationsInstancesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("numquam"),
        Filter: sdk.String("commodi"),
        Key: sdk.String("quam"),
        OauthToken: sdk.String("molestiae"),
        OrderBy: sdk.String("velit"),
        PageSize: sdk.Int64(623510),
        PageToken: sdk.String("quia"),
        Parent: "quis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("animi"),
    }, operations.MemcacheProjectsLocationsInstancesListSecurity{
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

## MemcacheProjectsLocationsInstancesPatch

Updates an existing Instance in a given project and location.

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
    res, err := s.Projects.MemcacheProjectsLocationsInstancesPatch(ctx, operations.MemcacheProjectsLocationsInstancesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InstanceInput: &shared.InstanceInput{
            AuthorizedNetwork: sdk.String("odit"),
            DisplayName: sdk.String("quo"),
            InstanceMessages: []shared.InstanceMessage{
                shared.InstanceMessage{
                    Code: shared.InstanceMessageCodeEnumZoneDistributionUnbalanced.ToPointer(),
                    Message: sdk.String("ipsam"),
                },
            },
            Labels: map[string]string{
                "possimus": "aut",
                "quasi": "error",
                "temporibus": "laborum",
            },
            MaintenancePolicy: &shared.GoogleCloudMemcacheV1beta2MaintenancePolicyInput{
                Description: sdk.String("quasi"),
                WeeklyMaintenanceWindow: []shared.WeeklyMaintenanceWindow{
                    shared.WeeklyMaintenanceWindow{
                        Day: shared.WeeklyMaintenanceWindowDayEnumSunday.ToPointer(),
                        Duration: sdk.String("vero"),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(468651),
                            Minutes: sdk.Int(509624),
                            Nanos: sdk.Int(976762),
                            Seconds: sdk.Int(55714),
                        },
                    },
                    shared.WeeklyMaintenanceWindow{
                        Day: shared.WeeklyMaintenanceWindowDayEnumThursday.ToPointer(),
                        Duration: sdk.String("voluptate"),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(739264),
                            Minutes: sdk.Int(19987),
                            Nanos: sdk.Int(39187),
                            Seconds: sdk.Int(441711),
                        },
                    },
                    shared.WeeklyMaintenanceWindow{
                        Day: shared.WeeklyMaintenanceWindowDayEnumTuesday.ToPointer(),
                        Duration: sdk.String("maiores"),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(120196),
                            Minutes: sdk.Int(359444),
                            Nanos: sdk.Int(296140),
                            Seconds: sdk.Int(480894),
                        },
                    },
                    shared.WeeklyMaintenanceWindow{
                        Day: shared.WeeklyMaintenanceWindowDayEnumDayOfWeekUnspecified.ToPointer(),
                        Duration: sdk.String("harum"),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(317983),
                            Minutes: sdk.Int(880476),
                            Nanos: sdk.Int(414263),
                            Seconds: sdk.Int(918236),
                        },
                    },
                },
            },
            MemcacheVersion: shared.InstanceMemcacheVersionEnumMemcacheVersionUnspecified.ToPointer(),
            Name: sdk.String("Alison Mann"),
            NodeConfig: &shared.NodeConfig{
                CPUCount: sdk.Int(265389),
                MemorySizeMb: sdk.Int(508969),
            },
            NodeCount: sdk.Int(523248),
            Parameters: &shared.MemcacheParametersInput{
                Params: map[string]string{
                    "quasi": "repudiandae",
                    "sint": "veritatis",
                    "itaque": "incidunt",
                    "enim": "consequatur",
                },
            },
            Zones: []string{
                "quibusdam",
                "explicabo",
                "deserunt",
            },
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("modi"),
        Key: sdk.String("qui"),
        Name: "Mr. Shelly Lueilwitz",
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UpdateMask: sdk.String("fugit"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.MemcacheProjectsLocationsInstancesPatchSecurity{
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

## MemcacheProjectsLocationsInstancesRescheduleMaintenance

Performs the apply phase of the RescheduleMaintenance verb.

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
    res, err := s.Projects.MemcacheProjectsLocationsInstancesRescheduleMaintenance(ctx, operations.MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RescheduleMaintenanceRequest: &shared.RescheduleMaintenanceRequest{
            RescheduleType: shared.RescheduleMaintenanceRequestRescheduleTypeEnumNextAvailableWindow.ToPointer(),
            ScheduleTime: sdk.String("tempore"),
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("non"),
        Instance: "eligendi",
        Key: sdk.String("sint"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("sint"),
    }, operations.MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity{
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

## MemcacheProjectsLocationsInstancesUpdateParameters

Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.

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
    res, err := s.Projects.MemcacheProjectsLocationsInstancesUpdateParameters(ctx, operations.MemcacheProjectsLocationsInstancesUpdateParametersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UpdateParametersRequestInput: &shared.UpdateParametersRequestInput{
            Parameters: &shared.MemcacheParametersInput{
                Params: map[string]string{
                    "debitis": "a",
                },
            },
            UpdateMask: sdk.String("dolorum"),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("rerum"),
        Name: "Valerie Runolfsson",
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("non"),
    }, operations.MemcacheProjectsLocationsInstancesUpdateParametersSecurity{
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

## MemcacheProjectsLocationsList

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
    res, err := s.Projects.MemcacheProjectsLocationsList(ctx, operations.MemcacheProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("quidem"),
        Filter: sdk.String("provident"),
        Key: sdk.String("nam"),
        Name: "Nelson Lesch",
        OauthToken: sdk.String("deserunt"),
        PageSize: sdk.Int64(394869),
        PageToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.MemcacheProjectsLocationsListSecurity{
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

## MemcacheProjectsLocationsOperationsCancel

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
    res, err := s.Projects.MemcacheProjectsLocationsOperationsCancel(ctx, operations.MemcacheProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "magnam": "distinctio",
            "id": "labore",
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("eum"),
        Name: "Brandon Brakus V",
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("sint"),
    }, operations.MemcacheProjectsLocationsOperationsCancelSecurity{
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

## MemcacheProjectsLocationsOperationsDelete

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
    res, err := s.Projects.MemcacheProjectsLocationsOperationsDelete(ctx, operations.MemcacheProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("ad"),
        Key: sdk.String("eum"),
        Name: "Jana Connelly III",
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("maxime"),
    }, operations.MemcacheProjectsLocationsOperationsDeleteSecurity{
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

## MemcacheProjectsLocationsOperationsGet

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
    res, err := s.Projects.MemcacheProjectsLocationsOperationsGet(ctx, operations.MemcacheProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("repudiandae"),
        Name: "Lola Koss",
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.MemcacheProjectsLocationsOperationsGetSecurity{
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

## MemcacheProjectsLocationsOperationsList

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
    res, err := s.Projects.MemcacheProjectsLocationsOperationsList(ctx, operations.MemcacheProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("sunt"),
        Filter: sdk.String("quo"),
        Key: sdk.String("illum"),
        Name: "Simon Jenkins",
        OauthToken: sdk.String("ea"),
        PageSize: sdk.Int64(33222),
        PageToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.MemcacheProjectsLocationsOperationsListSecurity{
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
