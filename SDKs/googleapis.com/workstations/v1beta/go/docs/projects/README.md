# Projects

### Available Operations

* [WorkstationsProjectsLocationsOperationsCancel](#workstationsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [WorkstationsProjectsLocationsOperationsList](#workstationsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [WorkstationsProjectsLocationsWorkstationClustersCreate](#workstationsprojectslocationsworkstationclusterscreate) - Creates a new workstation cluster.
* [WorkstationsProjectsLocationsWorkstationClustersList](#workstationsprojectslocationsworkstationclusterslist) - Returns all workstation clusters in the specified location.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreate](#workstationsprojectslocationsworkstationclustersworkstationconfigscreate) - Creates a new workstation configuration.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsList](#workstationsprojectslocationsworkstationclustersworkstationconfigslist) - Returns all workstation configurations in the specified cluster.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsable](#workstationsprojectslocationsworkstationclustersworkstationconfigslistusable) - Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreate](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationscreate) - Creates a new workstation.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDelete](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsdelete) - Deletes the specified workstation.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessToken](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsgenerateaccesstoken) - Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGet](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsget) - Returns the requested workstation.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicy](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsList](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationslist) - Returns all Workstations using the specified workstation configuration.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsable](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationslistusable) - Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatch](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationspatch) - Updates an existing workstation.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicy](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStart](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsstart) - Starts running a workstation so that users can connect to it.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStop](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsstop) - Stops running a workstation, reducing costs.
* [WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissions](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## WorkstationsProjectsLocationsOperationsCancel

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
    res, err := s.Projects.WorkstationsProjectsLocationsOperationsCancel(ctx, operations.WorkstationsProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "excepturi": "nisi",
            "recusandae": "temporibus",
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        Name: "Estelle Will",
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.WorkstationsProjectsLocationsOperationsCancelSecurity{
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

## WorkstationsProjectsLocationsOperationsList

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
    res, err := s.Projects.WorkstationsProjectsLocationsOperationsList(ctx, operations.WorkstationsProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("porro"),
        Filter: sdk.String("dolorum"),
        Key: sdk.String("dicta"),
        Name: "Luke McCullough",
        OauthToken: sdk.String("hic"),
        PageSize: sdk.Int64(758616),
        PageToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.WorkstationsProjectsLocationsOperationsListSecurity{
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

## WorkstationsProjectsLocationsWorkstationClustersCreate

Creates a new workstation cluster.

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersCreate(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        WorkstationClusterInput: &shared.WorkstationClusterInput{
            Annotations: map[string]string{
                "impedit": "cum",
            },
            DisplayName: sdk.String("esse"),
            Etag: sdk.String("ipsum"),
            Labels: map[string]string{
                "aspernatur": "perferendis",
                "ad": "natus",
                "sed": "iste",
            },
            Name: sdk.String("Faye Howe"),
            Network: sdk.String("fuga"),
            PrivateClusterConfig: &shared.PrivateClusterConfigInput{
                AllowedProjects: []string{
                    "corporis",
                    "iste",
                },
                EnablePrivateEndpoint: sdk.Bool(false),
            },
            Subnetwork: sdk.String("iure"),
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("est"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("dolorem"),
        ValidateOnly: sdk.Bool(false),
        WorkstationClusterID: sdk.String("corporis"),
    }, operations.WorkstationsProjectsLocationsWorkstationClustersCreateSecurity{
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

## WorkstationsProjectsLocationsWorkstationClustersList

Returns all workstation clusters in the specified location.

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersList(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("excepturi"),
        PageSize: sdk.Int64(38425),
        PageToken: sdk.String("iure"),
        Parent: "culpa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.WorkstationsProjectsLocationsWorkstationClustersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkstationClustersResponse != nil {
        // handle response
    }
}
```

## WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreate

Creates a new workstation configuration.

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreate(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WorkstationConfigInput: &shared.WorkstationConfigInput{
            Annotations: map[string]string{
                "culpa": "consequuntur",
            },
            Container: &shared.Container{
                Args: []string{
                    "mollitia",
                    "occaecati",
                    "numquam",
                    "commodi",
                },
                Command: []string{
                    "molestiae",
                    "velit",
                },
                Env: map[string]string{
                    "quia": "quis",
                    "vitae": "laborum",
                    "animi": "enim",
                },
                Image: sdk.String("odit"),
                RunAsUser: sdk.Int(778346),
                WorkingDir: sdk.String("sequi"),
            },
            DisplayName: sdk.String("tenetur"),
            EnableAuditAgent: sdk.Bool(false),
            EncryptionKey: &shared.CustomerEncryptionKey{
                KmsKey: sdk.String("ipsam"),
                KmsKeyServiceAccount: sdk.String("id"),
            },
            Etag: sdk.String("possimus"),
            Host: &shared.HostInput{
                GceInstance: &shared.GceInstanceInput{
                    Accelerators: []shared.Accelerator{
                        shared.Accelerator{
                            Count: sdk.Int(97101),
                            Type: sdk.String("error"),
                        },
                    },
                    BootDiskSizeGb: sdk.Int(837945),
                    ConfidentialInstanceConfig: &shared.GceConfidentialInstanceConfig{
                        EnableConfidentialCompute: sdk.Bool(false),
                    },
                    DisablePublicIPAddresses: sdk.Bool(false),
                    MachineType: sdk.String("laborum"),
                    PoolSize: sdk.Int(96098),
                    ServiceAccount: sdk.String("reiciendis"),
                    ShieldedInstanceConfig: &shared.GceShieldedInstanceConfig{
                        EnableIntegrityMonitoring: sdk.Bool(false),
                        EnableSecureBoot: sdk.Bool(false),
                        EnableVtpm: sdk.Bool(false),
                    },
                    Tags: []string{
                        "vero",
                        "nihil",
                        "praesentium",
                        "voluptatibus",
                    },
                },
            },
            IdleTimeout: sdk.String("ipsa"),
            Labels: map[string]string{
                "voluptate": "cum",
                "perferendis": "doloremque",
                "reprehenderit": "ut",
            },
            Name: sdk.String("Willie Hessel"),
            PersistentDirectories: []shared.PersistentDirectory{
                shared.PersistentDirectory{
                    GcePd: &shared.GceRegionalPersistentDisk{
                        DiskType: sdk.String("harum"),
                        FsType: sdk.String("enim"),
                        ReclaimPolicy: shared.GceRegionalPersistentDiskReclaimPolicyEnumRetain.ToPointer(),
                        SizeGb: sdk.Int(414263),
                        SourceSnapshot: sdk.String("repudiandae"),
                    },
                    MountPath: sdk.String("quae"),
                },
            },
            ReadinessChecks: []shared.ReadinessCheck{
                shared.ReadinessCheck{
                    Path: sdk.String("quidem"),
                    Port: sdk.Int(565189),
                },
            },
            RunningTimeout: sdk.String("excepturi"),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("rem"),
        Key: sdk.String("voluptates"),
        OauthToken: sdk.String("quasi"),
        Parent: "repudiandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("itaque"),
        ValidateOnly: sdk.Bool(false),
        WorkstationConfigID: sdk.String("incidunt"),
    }, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreateSecurity{
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

## WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsList

Returns all workstation configurations in the specified cluster.

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsList(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("distinctio"),
        PageSize: sdk.Int64(841386),
        PageToken: sdk.String("labore"),
        Parent: "modi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkstationConfigsResponse != nil {
        // handle response
    }
}
```

## WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsable

Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsable(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsableRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("fugit"),
        PageSize: sdk.Int64(677817),
        PageToken: sdk.String("excepturi"),
        Parent: "tempora",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("labore"),
    }, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsableSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsableWorkstationConfigsResponse != nil {
        // handle response
    }
}
```

## WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreate

Creates a new workstation.

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreate(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WorkstationInput: &shared.WorkstationInput{
            Annotations: map[string]string{
                "non": "eligendi",
                "sint": "aliquid",
            },
            DisplayName: sdk.String("provident"),
            Env: map[string]string{
                "sint": "officia",
                "dolor": "debitis",
                "a": "dolorum",
                "in": "in",
            },
            Etag: sdk.String("illum"),
            Labels: map[string]string{
                "rerum": "dicta",
                "magnam": "cumque",
                "facere": "ea",
                "aliquid": "laborum",
            },
            Name: sdk.String("Alfred McClure"),
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("nam"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("blanditiis"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("deserunt"),
        ValidateOnly: sdk.Bool(false),
        WorkstationID: sdk.String("nisi"),
    }, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateSecurity{
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

## WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDelete

Deletes the specified workstation.

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDelete(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Etag: sdk.String("perferendis"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("magnam"),
        Name: "Alfonso Green",
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("vero"),
        ValidateOnly: sdk.Bool(false),
    }, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDeleteSecurity{
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

## WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessToken

Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessToken(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessTokenRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GenerateAccessTokenRequest: &shared.GenerateAccessTokenRequest{
            ExpireTime: sdk.String("architecto"),
            TTL: sdk.String("magnam"),
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("provident"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("reiciendis"),
        Workstation: "mollitia",
    }, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessTokenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateAccessTokenResponse != nil {
        // handle response
    }
}
```

## WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGet

Returns the requested workstation.

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGet(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("odit"),
        Key: sdk.String("nemo"),
        Name: "Vera Wyman",
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("in"),
    }, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Workstation != nil {
        // handle response
    }
}
```

## WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicy

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicy(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("repellat"),
        OptionsRequestedPolicyVersion: sdk.Int64(841140),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        Resource: "saepe",
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicySecurity{
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

## WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsList

Returns all Workstations using the specified workstation configuration.

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsList(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("illum"),
        PageSize: sdk.Int64(864934),
        PageToken: sdk.String("maxime"),
        Parent: "ea",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("ea"),
    }, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkstationsResponse != nil {
        // handle response
    }
}
```

## WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsable

Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsable(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsableRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("autem"),
        PageSize: sdk.Int64(722056),
        PageToken: sdk.String("eaque"),
        Parent: "pariatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsableSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsableWorkstationsResponse != nil {
        // handle response
    }
}
```

## WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatch

Updates an existing workstation.

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatch(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WorkstationInput: &shared.WorkstationInput{
            Annotations: map[string]string{
                "aut": "cumque",
            },
            DisplayName: sdk.String("corporis"),
            Env: map[string]string{
                "libero": "nobis",
                "dolores": "quis",
                "totam": "dignissimos",
                "eaque": "quis",
            },
            Etag: sdk.String("nesciunt"),
            Labels: map[string]string{
                "perferendis": "dolores",
            },
            Name: sdk.String("Darryl Fadel"),
        },
        AccessToken: sdk.String("hic"),
        AllowMissing: sdk.Bool(false),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("perspiciatis"),
        Name: "Robyn Cruickshank",
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UpdateMask: sdk.String("rerum"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("asperiores"),
        ValidateOnly: sdk.Bool(false),
    }, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatchSecurity{
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

## WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicy(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "deleniti",
                                    "pariatur",
                                    "provident",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "delectus",
                                    "quaerat",
                                    "quos",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dolorem",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("qui"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "excepturi",
                                    "cum",
                                    "voluptate",
                                    "dignissimos",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("amet"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("numquam"),
                            Expression: sdk.String("veritatis"),
                            Location: sdk.String("ipsa"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "odio",
                            "quaerat",
                        },
                        Role: sdk.String("accusamus"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("quidem"),
                            Expression: sdk.String("voluptatibus"),
                            Location: sdk.String("voluptas"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "atque",
                        },
                        Role: sdk.String("sit"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("fugiat"),
                            Expression: sdk.String("ab"),
                            Location: sdk.String("soluta"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "voluptate",
                            "dolorum",
                        },
                        Role: sdk.String("deleniti"),
                    },
                },
                Etag: sdk.String("omnis"),
                Version: sdk.Int(896672),
            },
            UpdateMask: sdk.String("distinctio"),
        },
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        Resource: "aspernatur",
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("amet"),
    }, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicySecurity{
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

## WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStart

Starts running a workstation so that users can connect to it.

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStart(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStartRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        StartWorkstationRequest: &shared.StartWorkstationRequest{
            Etag: sdk.String("accusamus"),
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("provident"),
        Name: "Kari Leannon PhD",
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("quod"),
    }, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStartSecurity{
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

## WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStop

Stops running a workstation, reducing costs.

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStop(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStopRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        StopWorkstationRequest: &shared.StopWorkstationRequest{
            Etag: sdk.String("qui"),
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("harum"),
        Key: sdk.String("iusto"),
        Name: "Rosalie White",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStopSecurity{
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

## WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

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
    res, err := s.Projects.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissions(ctx, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "nihil",
                "sit",
                "expedita",
            },
        },
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("libero"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        Resource: "ipsum",
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("qui"),
    }, operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissionsSecurity{
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
