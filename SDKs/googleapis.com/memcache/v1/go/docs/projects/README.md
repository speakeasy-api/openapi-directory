# Projects

### Available Operations

* [MemcacheProjectsLocationsInstancesApplyParameters](#memcacheprojectslocationsinstancesapplyparameters) - `ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.
* [MemcacheProjectsLocationsInstancesCreate](#memcacheprojectslocationsinstancescreate) - Creates a new Instance in a given location.
* [MemcacheProjectsLocationsInstancesList](#memcacheprojectslocationsinstanceslist) - Lists Instances in a given location.
* [MemcacheProjectsLocationsInstancesPatch](#memcacheprojectslocationsinstancespatch) - Updates an existing Instance in a given project and location.
* [MemcacheProjectsLocationsInstancesRescheduleMaintenance](#memcacheprojectslocationsinstancesreschedulemaintenance) - Reschedules upcoming maintenance event.
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
            AuthorizedNetwork: sdk.String("maiores"),
            DisplayName: sdk.String("molestiae"),
            InstanceMessages: []shared.InstanceMessage{
                shared.InstanceMessage{
                    Code: shared.InstanceMessageCodeEnumZoneDistributionUnbalanced.ToPointer(),
                    Message: sdk.String("esse"),
                },
                shared.InstanceMessage{
                    Code: shared.InstanceMessageCodeEnumZoneDistributionUnbalanced.ToPointer(),
                    Message: sdk.String("porro"),
                },
                shared.InstanceMessage{
                    Code: shared.InstanceMessageCodeEnumZoneDistributionUnbalanced.ToPointer(),
                    Message: sdk.String("dicta"),
                },
                shared.InstanceMessage{
                    Code: shared.InstanceMessageCodeEnumZoneDistributionUnbalanced.ToPointer(),
                    Message: sdk.String("officia"),
                },
            },
            Labels: map[string]string{
                "fugit": "deleniti",
                "hic": "optio",
                "totam": "beatae",
            },
            MaintenancePolicy: &shared.GoogleCloudMemcacheV1MaintenancePolicyInput{
                Description: sdk.String("commodi"),
                WeeklyMaintenanceWindow: []shared.WeeklyMaintenanceWindow{
                    shared.WeeklyMaintenanceWindow{
                        Day: shared.WeeklyMaintenanceWindowDayEnumTuesday.ToPointer(),
                        Duration: sdk.String("qui"),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(774234),
                            Minutes: sdk.Int(736918),
                            Nanos: sdk.Int(456150),
                            Seconds: sdk.Int(216550),
                        },
                    },
                    shared.WeeklyMaintenanceWindow{
                        Day: shared.WeeklyMaintenanceWindowDayEnumThursday.ToPointer(),
                        Duration: sdk.String("aspernatur"),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(18789),
                            Minutes: sdk.Int(324141),
                            Nanos: sdk.Int(617636),
                            Seconds: sdk.Int(149675),
                        },
                    },
                },
            },
            MemcacheVersion: shared.InstanceMemcacheVersionEnumMemcache15.ToPointer(),
            Name: sdk.String("Faye Howe"),
            NodeConfig: &shared.NodeConfig{
                CPUCount: sdk.Int(681820),
                MemorySizeMb: sdk.Int(449950),
            },
            NodeCount: sdk.Int(359508),
            Parameters: &shared.MemcacheParametersInput{
                Params: map[string]string{
                    "iure": "saepe",
                    "quidem": "architecto",
                    "ipsa": "reiciendis",
                },
            },
            Zones: []string{
                "mollitia",
                "laborum",
                "dolores",
            },
        },
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("nobis"),
        InstanceID: sdk.String("enim"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("nemo"),
        Parent: "minima",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("iure"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("mollitia"),
        Filter: sdk.String("dolorem"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("consequuntur"),
        OrderBy: sdk.String("repellat"),
        PageSize: sdk.Int64(653108),
        PageToken: sdk.String("occaecati"),
        Parent: "numquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("molestiae"),
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
            AuthorizedNetwork: sdk.String("error"),
            DisplayName: sdk.String("quia"),
            InstanceMessages: []shared.InstanceMessage{
                shared.InstanceMessage{
                    Code: shared.InstanceMessageCodeEnumCodeUnspecified.ToPointer(),
                    Message: sdk.String("laborum"),
                },
                shared.InstanceMessage{
                    Code: shared.InstanceMessageCodeEnumZoneDistributionUnbalanced.ToPointer(),
                    Message: sdk.String("enim"),
                },
            },
            Labels: map[string]string{
                "quo": "sequi",
            },
            MaintenancePolicy: &shared.GoogleCloudMemcacheV1MaintenancePolicyInput{
                Description: sdk.String("tenetur"),
                WeeklyMaintenanceWindow: []shared.WeeklyMaintenanceWindow{
                    shared.WeeklyMaintenanceWindow{
                        Day: shared.WeeklyMaintenanceWindowDayEnumFriday.ToPointer(),
                        Duration: sdk.String("possimus"),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(13571),
                            Minutes: sdk.Int(97101),
                            Nanos: sdk.Int(622846),
                            Seconds: sdk.Int(837945),
                        },
                    },
                    shared.WeeklyMaintenanceWindow{
                        Day: shared.WeeklyMaintenanceWindowDayEnumFriday.ToPointer(),
                        Duration: sdk.String("quasi"),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(971945),
                            Minutes: sdk.Int(976460),
                            Nanos: sdk.Int(878194),
                            Seconds: sdk.Int(468651),
                        },
                    },
                },
            },
            MemcacheVersion: shared.InstanceMemcacheVersionEnumMemcache15.ToPointer(),
            Name: sdk.String("Jose Moen"),
            NodeConfig: &shared.NodeConfig{
                CPUCount: sdk.Int(19987),
                MemorySizeMb: sdk.Int(39187),
            },
            NodeCount: sdk.Int(441711),
            Parameters: &shared.MemcacheParametersInput{
                Params: map[string]string{
                    "maiores": "dicta",
                    "corporis": "dolore",
                },
            },
            Zones: []string{
                "dicta",
                "harum",
            },
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("quae"),
        Name: "Alison Mann",
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UpdateMask: sdk.String("rem"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("quasi"),
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

Reschedules upcoming maintenance event.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RescheduleMaintenanceRequest: &shared.RescheduleMaintenanceRequest{
            RescheduleType: shared.RescheduleMaintenanceRequestRescheduleTypeEnumNextAvailableWindow.ToPointer(),
            ScheduleTime: sdk.String("veritatis"),
        },
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("consequatur"),
        Instance: "est",
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quibusdam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UpdateParametersRequestInput: &shared.UpdateParametersRequestInput{
            Parameters: &shared.MemcacheParametersInput{
                Params: map[string]string{
                    "qui": "aliquid",
                    "cupiditate": "quos",
                },
            },
            UpdateMask: sdk.String("perferendis"),
        },
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("alias"),
        Key: sdk.String("fugit"),
        Name: "Marshall Glover",
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("eum"),
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
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("necessitatibus"),
        Filter: sdk.String("sint"),
        Key: sdk.String("officia"),
        Name: "Raquel Wilderman",
        OauthToken: sdk.String("in"),
        PageSize: sdk.Int64(846409),
        PageToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("magnam"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "ea": "aliquid",
            "laborum": "accusamus",
            "non": "occaecati",
            "enim": "accusamus",
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("nam"),
        Key: sdk.String("id"),
        Name: "Jaime Will",
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("omnis"),
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
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("id"),
        Name: "Jamie Hoppe",
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("architecto"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("provident"),
        Key: sdk.String("quos"),
        Name: "Kenneth O'Hara",
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("necessitatibus"),
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
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("doloribus"),
        Filter: sdk.String("debitis"),
        Key: sdk.String("eius"),
        Name: "Alfredo Prosacco Sr.",
        OauthToken: sdk.String("repudiandae"),
        PageSize: sdk.Int64(352312),
        PageToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("quibusdam"),
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
