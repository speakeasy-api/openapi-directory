# Projects

### Available Operations

* [RemotebuildexecutionProjectsInstancesCreate](#remotebuildexecutionprojectsinstancescreate) - Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.
* [RemotebuildexecutionProjectsInstancesList](#remotebuildexecutionprojectsinstanceslist) - Lists instances in a project.
* [RemotebuildexecutionProjectsInstancesTestNotify](#remotebuildexecutionprojectsinstancestestnotify) - Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.
* [RemotebuildexecutionProjectsInstancesWorkerpoolsCreate](#remotebuildexecutionprojectsinstancesworkerpoolscreate) - Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.
* [RemotebuildexecutionProjectsInstancesWorkerpoolsDelete](#remotebuildexecutionprojectsinstancesworkerpoolsdelete) - Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.
* [RemotebuildexecutionProjectsInstancesWorkerpoolsList](#remotebuildexecutionprojectsinstancesworkerpoolslist) - Lists worker pools in an instance.
* [RemotebuildexecutionProjectsInstancesWorkerpoolsPatch](#remotebuildexecutionprojectsinstancesworkerpoolspatch) - Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.
* [RemotebuildexecutionProjectsOperationsGet](#remotebuildexecutionprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## RemotebuildexecutionProjectsInstancesCreate

Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.

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
    res, err := s.Projects.RemotebuildexecutionProjectsInstancesCreate(ctx, operations.RemotebuildexecutionProjectsInstancesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput{
            Instance: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceInput{
                FeaturePolicy: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy{
                    ActionHermeticity: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnumActionHermeticityEnforced.ToPointer(),
                    ActionIsolation: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnumActionIsolationUnspecified.ToPointer(),
                    ContainerImageSources: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "dolor",
                            "natus",
                            "laboriosam",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumRestricted.ToPointer(),
                    },
                    DockerAddCapabilities: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "fuga",
                            "in",
                            "corporis",
                            "iste",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumAllowed.ToPointer(),
                    },
                    DockerChrootPath: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "quidem",
                            "architecto",
                            "ipsa",
                            "reiciendis",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumForbidden.ToPointer(),
                    },
                    DockerNetwork: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "laborum",
                            "dolores",
                            "dolorem",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumAllowed.ToPointer(),
                    },
                    DockerPrivileged: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "nobis",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumAllowed.ToPointer(),
                    },
                    DockerRunAsContainerProvidedUser: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "nemo",
                            "minima",
                            "excepturi",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumPolicyUnspecified.ToPointer(),
                    },
                    DockerRunAsRoot: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "culpa",
                            "doloribus",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumRestricted.ToPointer(),
                    },
                    DockerRuntime: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "mollitia",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumPolicyUnspecified.ToPointer(),
                    },
                    DockerSiblingContainers: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "consequuntur",
                            "repellat",
                            "mollitia",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumForbidden.ToPointer(),
                    },
                    LinuxExecution: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnumLinuxExecutionForbidden.ToPointer(),
                    LinuxIsolation: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnumGvisor.ToPointer(),
                    MacExecution: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnumMacExecutionUnspecified.ToPointer(),
                    VMVerification: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnumVMVerificationGcpToken.ToPointer(),
                    WindowsExecution: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnumWindowsExecutionUnspecified.ToPointer(),
                },
                Location: sdk.String("error"),
                SchedulerNotificationConfig: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig{
                    Topic: sdk.String("quia"),
                },
            },
            InstanceID: sdk.String("quis"),
            Parent: sdk.String("vitae"),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("odit"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("sequi"),
        Parent: "tenetur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.RemotebuildexecutionProjectsInstancesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RemotebuildexecutionProjectsInstancesList

Lists instances in a project.

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
    res, err := s.Projects.RemotebuildexecutionProjectsInstancesList(ctx, operations.RemotebuildexecutionProjectsInstancesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("reiciendis"),
        Parent: "voluptatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.RemotebuildexecutionProjectsInstancesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse != nil {
        // handle response
    }
}
```

## RemotebuildexecutionProjectsInstancesTestNotify

Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.

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
    res, err := s.Projects.RemotebuildexecutionProjectsInstancesTestNotify(ctx, operations.RemotebuildexecutionProjectsInstancesTestNotifyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "omnis": "voluptate",
        },
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("reprehenderit"),
        Key: sdk.String("ut"),
        Name: "Willie Hessel",
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.RemotebuildexecutionProjectsInstancesTestNotifySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## RemotebuildexecutionProjectsInstancesWorkerpoolsCreate

Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.

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
    res, err := s.Projects.RemotebuildexecutionProjectsInstancesWorkerpoolsCreate(ctx, operations.RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest{
            Parent: sdk.String("repudiandae"),
            PoolID: sdk.String("quae"),
            WorkerPool: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool{
                Autoscale: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale{
                    MaxSize: sdk.String("ipsum"),
                    MinSize: sdk.String("quidem"),
                },
                Channel: sdk.String("molestias"),
                HostOs: sdk.String("excepturi"),
                Name: sdk.String("Joel Lang"),
                State: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnumStateUnspecified.ToPointer(),
                WorkerConfig: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig{
                    Accelerator: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig{
                        AcceleratorCount: sdk.String("repudiandae"),
                        AcceleratorType: sdk.String("sint"),
                    },
                    DiskSizeGb: sdk.String("veritatis"),
                    DiskType: sdk.String("itaque"),
                    Labels: map[string]string{
                        "enim": "consequatur",
                        "est": "quibusdam",
                    },
                    MachineType: sdk.String("explicabo"),
                    MaxConcurrentActions: sdk.String("deserunt"),
                    MinCPUPlatform: sdk.String("distinctio"),
                    NetworkAccess: sdk.String("quibusdam"),
                    Reserved: sdk.Bool(false),
                    SoleTenantNodeType: sdk.String("labore"),
                    VMImage: sdk.String("modi"),
                },
                WorkerCount: sdk.String("qui"),
            },
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("magni"),
        OauthToken: sdk.String("assumenda"),
        Parent: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RemotebuildexecutionProjectsInstancesWorkerpoolsDelete

Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.

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
    res, err := s.Projects.RemotebuildexecutionProjectsInstancesWorkerpoolsDelete(ctx, operations.RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("labore"),
        Key: sdk.String("delectus"),
        Name: "Ethel Roob",
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("officia"),
    }, operations.RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RemotebuildexecutionProjectsInstancesWorkerpoolsList

Lists worker pools in an instance.

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
    res, err := s.Projects.RemotebuildexecutionProjectsInstancesWorkerpoolsList(ctx, operations.RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("in"),
        Filter: sdk.String("in"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("maiores"),
        Parent: "rerum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.RemotebuildexecutionProjectsInstancesWorkerpoolsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse != nil {
        // handle response
    }
}
```

## RemotebuildexecutionProjectsInstancesWorkerpoolsPatch

Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.

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
    res, err := s.Projects.RemotebuildexecutionProjectsInstancesWorkerpoolsPatch(ctx, operations.RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest{
            UpdateMask: sdk.String("ea"),
            WorkerPool: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool{
                Autoscale: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale{
                    MaxSize: sdk.String("aliquid"),
                    MinSize: sdk.String("laborum"),
                },
                Channel: sdk.String("accusamus"),
                HostOs: sdk.String("non"),
                Name: sdk.String("Jon Tillman"),
                State: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnumUpdating.ToPointer(),
                WorkerConfig: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig{
                    Accelerator: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig{
                        AcceleratorCount: sdk.String("nam"),
                        AcceleratorType: sdk.String("id"),
                    },
                    DiskSizeGb: sdk.String("blanditiis"),
                    DiskType: sdk.String("deleniti"),
                    Labels: map[string]string{
                        "amet": "deserunt",
                        "nisi": "vel",
                        "natus": "omnis",
                        "molestiae": "perferendis",
                    },
                    MachineType: sdk.String("nihil"),
                    MaxConcurrentActions: sdk.String("magnam"),
                    MinCPUPlatform: sdk.String("distinctio"),
                    NetworkAccess: sdk.String("id"),
                    Reserved: sdk.Bool(false),
                    SoleTenantNodeType: sdk.String("labore"),
                    VMImage: sdk.String("labore"),
                },
                WorkerCount: sdk.String("suscipit"),
            },
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("vero"),
        Key: sdk.String("aspernatur"),
        LoggingEnabled: sdk.Bool(false),
        Name: "Danielle Bosco",
        Name1: sdk.String("provident"),
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UpdateMask: sdk.String("accusantium"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RemotebuildexecutionProjectsOperationsGet

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
    res, err := s.Projects.RemotebuildexecutionProjectsOperationsGet(ctx, operations.RemotebuildexecutionProjectsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("odit"),
        Name: "Joyce Kertzmann",
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.RemotebuildexecutionProjectsOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
