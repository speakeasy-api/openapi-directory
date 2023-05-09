# Pools

### Available Operations

* [ReplicapoolPoolsDelete](#replicapoolpoolsdelete) - Deletes a replica pool.
* [ReplicapoolPoolsGet](#replicapoolpoolsget) - Gets information about a single replica pool.
* [ReplicapoolPoolsInsert](#replicapoolpoolsinsert) - Inserts a new replica pool.
* [ReplicapoolPoolsList](#replicapoolpoolslist) - List all replica pools.
* [ReplicapoolPoolsResize](#replicapoolpoolsresize) - Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
* [ReplicapoolPoolsUpdatetemplate](#replicapoolpoolsupdatetemplate) - Update the template used by the pool.

## ReplicapoolPoolsDelete

Deletes a replica pool.

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
    res, err := s.Pools.ReplicapoolPoolsDelete(ctx, operations.ReplicapoolPoolsDeleteRequest{
        PoolsDeleteRequest: &shared.PoolsDeleteRequest{
            AbandonInstances: []string{
                "magnam",
                "debitis",
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("tempora"),
        PoolName: "suscipit",
        PrettyPrint: sdk.Bool(false),
        ProjectName: "molestiae",
        QuotaUser: sdk.String("minus"),
        UserIP: sdk.String("placeat"),
        Zone: "voluptatum",
    }, operations.ReplicapoolPoolsDeleteSecurity{
        Option1: &operations.ReplicapoolPoolsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReplicapoolPoolsGet

Gets information about a single replica pool.

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
    res, err := s.Pools.ReplicapoolPoolsGet(ctx, operations.ReplicapoolPoolsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("nisi"),
        PoolName: "recusandae",
        PrettyPrint: sdk.Bool(false),
        ProjectName: "temporibus",
        QuotaUser: sdk.String("ab"),
        UserIP: sdk.String("quis"),
        Zone: "veritatis",
    }, operations.ReplicapoolPoolsGetSecurity{
        Option1: &operations.ReplicapoolPoolsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ReplicapoolPoolsInsert

Inserts a new replica pool.

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
    res, err := s.Pools.ReplicapoolPoolsInsert(ctx, operations.ReplicapoolPoolsInsertRequest{
        Pool: &shared.Pool{
            AutoRestart: sdk.Bool(false),
            BaseInstanceName: sdk.String("deserunt"),
            CurrentNumReplicas: sdk.Int(20218),
            Description: sdk.String("ipsam"),
            HealthChecks: []shared.HealthCheck{
                shared.HealthCheck{
                    CheckIntervalSec: sdk.Int(957156),
                    Description: sdk.String("quo"),
                    HealthyThreshold: sdk.Int(140350),
                    Host: sdk.String("at"),
                    Name: sdk.String("Emilio Krajcik"),
                    Path: sdk.String("esse"),
                    Port: sdk.Int(520478),
                    TimeoutSec: sdk.Int(780529),
                    UnhealthyThreshold: sdk.Int(678880),
                },
                shared.HealthCheck{
                    CheckIntervalSec: sdk.Int(118274),
                    Description: sdk.String("nam"),
                    HealthyThreshold: sdk.Int(639921),
                    Host: sdk.String("occaecati"),
                    Name: sdk.String("Cassandra Welch"),
                    Path: sdk.String("beatae"),
                    Port: sdk.Int(414662),
                    TimeoutSec: sdk.Int(473600),
                    UnhealthyThreshold: sdk.Int(264555),
                },
                shared.HealthCheck{
                    CheckIntervalSec: sdk.Int(186332),
                    Description: sdk.String("impedit"),
                    HealthyThreshold: sdk.Int(736918),
                    Host: sdk.String("esse"),
                    Name: sdk.String("Mrs. Miriam Collier"),
                    Path: sdk.String("sed"),
                    Port: sdk.Int(612096),
                    TimeoutSec: sdk.Int(222321),
                    UnhealthyThreshold: sdk.Int(616934),
                },
                shared.HealthCheck{
                    CheckIntervalSec: sdk.Int(386489),
                    Description: sdk.String("hic"),
                    HealthyThreshold: sdk.Int(902599),
                    Host: sdk.String("fuga"),
                    Name: sdk.String("Stacy Moore"),
                    Path: sdk.String("quidem"),
                    Port: sdk.Int(99280),
                    TimeoutSec: sdk.Int(60225),
                    UnhealthyThreshold: sdk.Int(969810),
                },
            },
            InitialNumReplicas: sdk.Int(666767),
            Labels: []shared.Label{
                shared.Label{
                    Key: sdk.String("laborum"),
                    Value: sdk.String("dolores"),
                },
                shared.Label{
                    Key: sdk.String("dolorem"),
                    Value: sdk.String("corporis"),
                },
                shared.Label{
                    Key: sdk.String("explicabo"),
                    Value: sdk.String("nobis"),
                },
            },
            Name: sdk.String("Guadalupe Hickle"),
            NumReplicas: sdk.Int(38425),
            ResourceViews: []string{
                "culpa",
                "doloribus",
            },
            SelfLink: sdk.String("sapiente"),
            TargetPool: sdk.String("architecto"),
            TargetPools: []string{
                "dolorem",
                "culpa",
                "consequuntur",
            },
            Template: &shared.Template{
                Action: &shared.Action{
                    Commands: []string{
                        "mollitia",
                        "occaecati",
                        "numquam",
                        "commodi",
                    },
                    EnvVariables: []shared.EnvVariable{
                        shared.EnvVariable{
                            Hidden: sdk.Bool(false),
                            Name: sdk.String("Shannon Mueller"),
                            Value: sdk.String("vitae"),
                        },
                        shared.EnvVariable{
                            Hidden: sdk.Bool(false),
                            Name: sdk.String("Matt Hamill"),
                            Value: sdk.String("sequi"),
                        },
                    },
                    TimeoutMilliSeconds: sdk.Int(949572),
                },
                HealthChecks: []shared.HealthCheck{
                    shared.HealthCheck{
                        CheckIntervalSec: sdk.Int(662527),
                        Description: sdk.String("possimus"),
                        HealthyThreshold: sdk.Int(13571),
                        Host: sdk.String("quasi"),
                        Name: sdk.String("Dr. Jake Pacocha"),
                        Path: sdk.String("vero"),
                        Port: sdk.Int(468651),
                        TimeoutSec: sdk.Int(509624),
                        UnhealthyThreshold: sdk.Int(976762),
                    },
                    shared.HealthCheck{
                        CheckIntervalSec: sdk.Int(55714),
                        Description: sdk.String("omnis"),
                        HealthyThreshold: sdk.Int(451159),
                        Host: sdk.String("cum"),
                        Name: sdk.String("Sharon Kiehn"),
                        Path: sdk.String("dicta"),
                        Port: sdk.Int(359444),
                        TimeoutSec: sdk.Int(296140),
                        UnhealthyThreshold: sdk.Int(480894),
                    },
                },
                Version: sdk.String("dicta"),
                VMParams: &shared.VMParams{
                    BaseInstanceName: sdk.String("harum"),
                    CanIPForward: sdk.Bool(false),
                    Description: sdk.String("enim"),
                    DisksToAttach: []shared.ExistingDisk{
                        shared.ExistingDisk{
                            Attachment: &shared.DiskAttachment{
                                DeviceName: sdk.String("commodi"),
                                Index: sdk.Int64(918236),
                            },
                            Source: sdk.String("quae"),
                        },
                        shared.ExistingDisk{
                            Attachment: &shared.DiskAttachment{
                                DeviceName: sdk.String("ipsum"),
                                Index: sdk.Int64(692472),
                            },
                            Source: sdk.String("molestias"),
                        },
                        shared.ExistingDisk{
                            Attachment: &shared.DiskAttachment{
                                DeviceName: sdk.String("excepturi"),
                                Index: sdk.Int64(865103),
                            },
                            Source: sdk.String("modi"),
                        },
                        shared.ExistingDisk{
                            Attachment: &shared.DiskAttachment{
                                DeviceName: sdk.String("praesentium"),
                                Index: sdk.Int64(523248),
                            },
                            Source: sdk.String("voluptates"),
                        },
                    },
                    DisksToCreate: []shared.NewDisk{
                        shared.NewDisk{
                            Attachment: &shared.DiskAttachment{
                                DeviceName: sdk.String("repudiandae"),
                                Index: sdk.Int64(575947),
                            },
                            AutoDelete: sdk.Bool(false),
                            Boot: sdk.Bool(false),
                            InitializeParams: &shared.NewDiskInitializeParams{
                                DiskSizeGb: sdk.String("veritatis"),
                                DiskType: sdk.String("itaque"),
                                SourceImage: sdk.String("incidunt"),
                            },
                        },
                    },
                    MachineType: sdk.String("enim"),
                    Metadata: &shared.Metadata{
                        FingerPrint: sdk.String("consequatur"),
                        Items: []shared.MetadataItem{
                            shared.MetadataItem{
                                Key: sdk.String("quibusdam"),
                                Value: sdk.String("explicabo"),
                            },
                            shared.MetadataItem{
                                Key: sdk.String("deserunt"),
                                Value: sdk.String("distinctio"),
                            },
                            shared.MetadataItem{
                                Key: sdk.String("quibusdam"),
                                Value: sdk.String("labore"),
                            },
                        },
                    },
                    NetworkInterfaces: []shared.NetworkInterface{
                        shared.NetworkInterface{
                            AccessConfigs: []shared.AccessConfig{
                                shared.AccessConfig{
                                    Name: sdk.String("Mr. Shelly Lueilwitz"),
                                    NatIP: sdk.String("ipsam"),
                                    Type: sdk.String("alias"),
                                },
                            },
                            Network: sdk.String("fugit"),
                            NetworkIP: sdk.String("dolorum"),
                        },
                        shared.NetworkInterface{
                            AccessConfigs: []shared.AccessConfig{
                                shared.AccessConfig{
                                    Name: sdk.String("Olivia Rice"),
                                    NatIP: sdk.String("eum"),
                                    Type: sdk.String("non"),
                                },
                                shared.AccessConfig{
                                    Name: sdk.String("Sergio Hyatt"),
                                    NatIP: sdk.String("sint"),
                                    Type: sdk.String("officia"),
                                },
                                shared.AccessConfig{
                                    Name: sdk.String("Raquel Wilderman"),
                                    NatIP: sdk.String("in"),
                                    Type: sdk.String("illum"),
                                },
                            },
                            Network: sdk.String("maiores"),
                            NetworkIP: sdk.String("rerum"),
                        },
                    },
                    OnHostMaintenance: sdk.String("dicta"),
                    ServiceAccounts: []shared.ServiceAccount{
                        shared.ServiceAccount{
                            Email: sdk.String("Raquel_Jenkins@hotmail.com"),
                            Scopes: []string{
                                "non",
                                "occaecati",
                                "enim",
                                "accusamus",
                            },
                        },
                        shared.ServiceAccount{
                            Email: sdk.String("Matilda_McKenzie50@hotmail.com"),
                            Scopes: []string{
                                "sapiente",
                                "amet",
                                "deserunt",
                            },
                        },
                    },
                    Tags: &shared.Tag{
                        FingerPrint: sdk.String("nisi"),
                        Items: []string{
                            "natus",
                            "omnis",
                        },
                    },
                },
            },
            Type: sdk.String("molestiae"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        ProjectName: "distinctio",
        QuotaUser: sdk.String("id"),
        UserIP: sdk.String("labore"),
        Zone: "labore",
    }, operations.ReplicapoolPoolsInsertSecurity{
        Option1: &operations.ReplicapoolPoolsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ReplicapoolPoolsList

List all replica pools.

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
    res, err := s.Pools.ReplicapoolPoolsList(ctx, operations.ReplicapoolPoolsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("natus"),
        MaxResults: sdk.Int64(749170),
        OauthToken: sdk.String("eum"),
        PageToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        ProjectName: "aspernatur",
        QuotaUser: sdk.String("architecto"),
        UserIP: sdk.String("magnam"),
        Zone: "et",
    }, operations.ReplicapoolPoolsListSecurity{
        Option1: &operations.ReplicapoolPoolsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ReplicapoolPoolsResize

Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.

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
    res, err := s.Pools.ReplicapoolPoolsResize(ctx, operations.ReplicapoolPoolsResizeRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("ullam"),
        NumReplicas: sdk.Int64(590873),
        OauthToken: sdk.String("quos"),
        PoolName: "sint",
        PrettyPrint: sdk.Bool(false),
        ProjectName: "accusantium",
        QuotaUser: sdk.String("mollitia"),
        UserIP: sdk.String("reiciendis"),
        Zone: "mollitia",
    }, operations.ReplicapoolPoolsResizeSecurity{
        Option1: &operations.ReplicapoolPoolsResizeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ReplicapoolPoolsUpdatetemplate

Update the template used by the pool.

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
    res, err := s.Pools.ReplicapoolPoolsUpdatetemplate(ctx, operations.ReplicapoolPoolsUpdatetemplateRequest{
        Template: &shared.Template{
            Action: &shared.Action{
                Commands: []string{
                    "eum",
                    "dolor",
                },
                EnvVariables: []shared.EnvVariable{
                    shared.EnvVariable{
                        Hidden: sdk.Bool(false),
                        Name: sdk.String("Vivian Boyle"),
                        Value: sdk.String("debitis"),
                    },
                    shared.EnvVariable{
                        Hidden: sdk.Bool(false),
                        Name: sdk.String("Jasmine Lind"),
                        Value: sdk.String("architecto"),
                    },
                    shared.EnvVariable{
                        Hidden: sdk.Bool(false),
                        Name: sdk.String("Elvira Herman"),
                        Value: sdk.String("repellat"),
                    },
                    shared.EnvVariable{
                        Hidden: sdk.Bool(false),
                        Name: sdk.String("Louis Turner Sr."),
                        Value: sdk.String("praesentium"),
                    },
                },
                TimeoutMilliSeconds: sdk.Int(615560),
            },
            HealthChecks: []shared.HealthCheck{
                shared.HealthCheck{
                    CheckIntervalSec: sdk.Int(123820),
                    Description: sdk.String("quo"),
                    HealthyThreshold: sdk.Int(848009),
                    Host: sdk.String("pariatur"),
                    Name: sdk.String("Nathaniel Marks"),
                    Path: sdk.String("accusantium"),
                    Port: sdk.Int(69167),
                    TimeoutSec: sdk.Int(982575),
                    UnhealthyThreshold: sdk.Int(697429),
                },
            },
            Version: sdk.String("ipsam"),
            VMParams: &shared.VMParams{
                BaseInstanceName: sdk.String("voluptate"),
                CanIPForward: sdk.Bool(false),
                Description: sdk.String("autem"),
                DisksToAttach: []shared.ExistingDisk{
                    shared.ExistingDisk{
                        Attachment: &shared.DiskAttachment{
                            DeviceName: sdk.String("eaque"),
                            Index: sdk.Int64(866383),
                        },
                        Source: sdk.String("nemo"),
                    },
                    shared.ExistingDisk{
                        Attachment: &shared.DiskAttachment{
                            DeviceName: sdk.String("voluptatibus"),
                            Index: sdk.Int64(16627),
                        },
                        Source: sdk.String("fugiat"),
                    },
                    shared.ExistingDisk{
                        Attachment: &shared.DiskAttachment{
                            DeviceName: sdk.String("amet"),
                            Index: sdk.Int64(11714),
                        },
                        Source: sdk.String("cumque"),
                    },
                },
                DisksToCreate: []shared.NewDisk{
                    shared.NewDisk{
                        Attachment: &shared.DiskAttachment{
                            DeviceName: sdk.String("hic"),
                            Index: sdk.Int64(729991),
                        },
                        AutoDelete: sdk.Bool(false),
                        Boot: sdk.Bool(false),
                        InitializeParams: &shared.NewDiskInitializeParams{
                            DiskSizeGb: sdk.String("nobis"),
                            DiskType: sdk.String("dolores"),
                            SourceImage: sdk.String("quis"),
                        },
                    },
                    shared.NewDisk{
                        Attachment: &shared.DiskAttachment{
                            DeviceName: sdk.String("totam"),
                            Index: sdk.Int64(489549),
                        },
                        AutoDelete: sdk.Bool(false),
                        Boot: sdk.Bool(false),
                        InitializeParams: &shared.NewDiskInitializeParams{
                            DiskSizeGb: sdk.String("eaque"),
                            DiskType: sdk.String("quis"),
                            SourceImage: sdk.String("nesciunt"),
                        },
                    },
                },
                MachineType: sdk.String("eos"),
                Metadata: &shared.Metadata{
                    FingerPrint: sdk.String("perferendis"),
                    Items: []shared.MetadataItem{
                        shared.MetadataItem{
                            Key: sdk.String("minus"),
                            Value: sdk.String("quam"),
                        },
                    },
                },
                NetworkInterfaces: []shared.NetworkInterface{
                    shared.NetworkInterface{
                        AccessConfigs: []shared.AccessConfig{
                            shared.AccessConfig{
                                Name: sdk.String("Mindy Walter"),
                                NatIP: sdk.String("perspiciatis"),
                                Type: sdk.String("voluptatem"),
                            },
                            shared.AccessConfig{
                                Name: sdk.String("Bobby Kutch V"),
                                NatIP: sdk.String("rerum"),
                                Type: sdk.String("adipisci"),
                            },
                            shared.AccessConfig{
                                Name: sdk.String("Merle Gleichner"),
                                NatIP: sdk.String("deleniti"),
                                Type: sdk.String("pariatur"),
                            },
                            shared.AccessConfig{
                                Name: sdk.String("Loren Renner"),
                                NatIP: sdk.String("quos"),
                                Type: sdk.String("aliquid"),
                            },
                        },
                        Network: sdk.String("dolorem"),
                        NetworkIP: sdk.String("dolorem"),
                    },
                },
                OnHostMaintenance: sdk.String("dolor"),
                ServiceAccounts: []shared.ServiceAccount{
                    shared.ServiceAccount{
                        Email: sdk.String("Tyreek.Marks49@gmail.com"),
                        Scopes: []string{
                            "amet",
                            "dolorum",
                            "numquam",
                            "veritatis",
                        },
                    },
                },
                Tags: &shared.Tag{
                    FingerPrint: sdk.String("ipsa"),
                    Items: []string{
                        "iure",
                    },
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("odio"),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("accusamus"),
        PoolName: "quidem",
        PrettyPrint: sdk.Bool(false),
        ProjectName: "voluptatibus",
        QuotaUser: sdk.String("voluptas"),
        UserIP: sdk.String("natus"),
        Zone: "eos",
    }, operations.ReplicapoolPoolsUpdatetemplateSecurity{
        Option1: &operations.ReplicapoolPoolsUpdatetemplateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
