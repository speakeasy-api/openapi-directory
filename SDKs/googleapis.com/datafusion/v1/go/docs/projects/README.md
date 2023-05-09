# Projects

### Available Operations

* [DatafusionProjectsLocationsInstancesCreate](#datafusionprojectslocationsinstancescreate) - Creates a new Data Fusion instance in the specified project and location.
* [DatafusionProjectsLocationsInstancesDNSPeeringsCreate](#datafusionprojectslocationsinstancesdnspeeringscreate) - Creates DNS peering on the given resource.
* [DatafusionProjectsLocationsInstancesDNSPeeringsList](#datafusionprojectslocationsinstancesdnspeeringslist) - Lists DNS peerings for a given resource.
* [DatafusionProjectsLocationsInstancesGetIamPolicy](#datafusionprojectslocationsinstancesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [DatafusionProjectsLocationsInstancesList](#datafusionprojectslocationsinstanceslist) - Lists Data Fusion instances in the specified project and location.
* [DatafusionProjectsLocationsInstancesPatch](#datafusionprojectslocationsinstancespatch) - Updates a single Data Fusion instance.
* [DatafusionProjectsLocationsInstancesRestart](#datafusionprojectslocationsinstancesrestart) - Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
* [DatafusionProjectsLocationsInstancesSetIamPolicy](#datafusionprojectslocationsinstancessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [DatafusionProjectsLocationsInstancesTestIamPermissions](#datafusionprojectslocationsinstancestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [DatafusionProjectsLocationsList](#datafusionprojectslocationslist) - Lists information about the supported locations for this service.
* [DatafusionProjectsLocationsOperationsCancel](#datafusionprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatafusionProjectsLocationsOperationsDelete](#datafusionprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [DatafusionProjectsLocationsOperationsGet](#datafusionprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [DatafusionProjectsLocationsOperationsList](#datafusionprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [DatafusionProjectsLocationsVersionsList](#datafusionprojectslocationsversionslist) - Lists possible versions for Data Fusion instances in the specified project and location.

## DatafusionProjectsLocationsInstancesCreate

Creates a new Data Fusion instance in the specified project and location.

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
    res, err := s.Projects.DatafusionProjectsLocationsInstancesCreate(ctx, operations.DatafusionProjectsLocationsInstancesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InstanceInput: &shared.InstanceInput{
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: sdk.String("ipsam"),
            },
            DataprocServiceAccount: sdk.String("repellendus"),
            Description: sdk.String("sapiente"),
            DisplayName: sdk.String("quo"),
            EnableRbac: sdk.Bool(false),
            EnableStackdriverLogging: sdk.Bool(false),
            EnableStackdriverMonitoring: sdk.Bool(false),
            EnableZoneSeparation: sdk.Bool(false),
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: sdk.Bool(false),
                Topic: sdk.String("odit"),
            },
            Labels: map[string]string{
                "at": "maiores",
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: sdk.String("dolorum"),
                Network: sdk.String("dicta"),
            },
            Options: map[string]string{
                "officia": "occaecati",
                "fugit": "deleniti",
                "hic": "optio",
            },
            PrivateInstance: sdk.Bool(false),
            Type: shared.InstanceTypeEnumEnterprise.ToPointer(),
            Version: sdk.String("beatae"),
            Zone: sdk.String("commodi"),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("impedit"),
        InstanceID: sdk.String("cum"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("ipsum"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ad"),
    }, operations.DatafusionProjectsLocationsInstancesCreateSecurity{
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

## DatafusionProjectsLocationsInstancesDNSPeeringsCreate

Creates DNS peering on the given resource.

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
    res, err := s.Projects.DatafusionProjectsLocationsInstancesDNSPeeringsCreate(ctx, operations.DatafusionProjectsLocationsInstancesDNSPeeringsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DNSPeering: &shared.DNSPeering{
            Description: sdk.String("sed"),
            Domain: sdk.String("iste"),
            Name: sdk.String("Faye Howe"),
            TargetNetwork: sdk.String("fuga"),
            TargetProject: sdk.String("in"),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iure"),
        DNSPeeringID: sdk.String("saepe"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("ipsa"),
        Parent: "reiciendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.DatafusionProjectsLocationsInstancesDNSPeeringsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DNSPeering != nil {
        // handle response
    }
}
```

## DatafusionProjectsLocationsInstancesDNSPeeringsList

Lists DNS peerings for a given resource.

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
    res, err := s.Projects.DatafusionProjectsLocationsInstancesDNSPeeringsList(ctx, operations.DatafusionProjectsLocationsInstancesDNSPeeringsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("omnis"),
        PageSize: sdk.Int64(363711),
        PageToken: sdk.String("minima"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.DatafusionProjectsLocationsInstancesDNSPeeringsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDNSPeeringsResponse != nil {
        // handle response
    }
}
```

## DatafusionProjectsLocationsInstancesGetIamPolicy

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
    res, err := s.Projects.DatafusionProjectsLocationsInstancesGetIamPolicy(ctx, operations.DatafusionProjectsLocationsInstancesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("consequuntur"),
        OptionsRequestedPolicyVersion: sdk.Int64(995300),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        Resource: "occaecati",
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.DatafusionProjectsLocationsInstancesGetIamPolicySecurity{
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

## DatafusionProjectsLocationsInstancesList

Lists Data Fusion instances in the specified project and location.

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
    res, err := s.Projects.DatafusionProjectsLocationsInstancesList(ctx, operations.DatafusionProjectsLocationsInstancesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("quia"),
        Filter: sdk.String("quis"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("laborum"),
        OrderBy: sdk.String("animi"),
        PageSize: sdk.Int64(317202),
        PageToken: sdk.String("odit"),
        Parent: "quo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.DatafusionProjectsLocationsInstancesListSecurity{
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

## DatafusionProjectsLocationsInstancesPatch

Updates a single Data Fusion instance.

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
    res, err := s.Projects.DatafusionProjectsLocationsInstancesPatch(ctx, operations.DatafusionProjectsLocationsInstancesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InstanceInput: &shared.InstanceInput{
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: sdk.String("possimus"),
            },
            DataprocServiceAccount: sdk.String("aut"),
            Description: sdk.String("quasi"),
            DisplayName: sdk.String("error"),
            EnableRbac: sdk.Bool(false),
            EnableStackdriverLogging: sdk.Bool(false),
            EnableStackdriverMonitoring: sdk.Bool(false),
            EnableZoneSeparation: sdk.Bool(false),
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: sdk.Bool(false),
                Topic: sdk.String("temporibus"),
            },
            Labels: map[string]string{
                "quasi": "reiciendis",
                "voluptatibus": "vero",
                "nihil": "praesentium",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: sdk.String("voluptatibus"),
                Network: sdk.String("ipsa"),
            },
            Options: map[string]string{
                "voluptate": "cum",
                "perferendis": "doloremque",
                "reprehenderit": "ut",
            },
            PrivateInstance: sdk.Bool(false),
            Type: shared.InstanceTypeEnumDeveloper.ToPointer(),
            Version: sdk.String("dicta"),
            Zone: sdk.String("corporis"),
        },
        AccessToken: sdk.String("dolore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("harum"),
        Key: sdk.String("enim"),
        Name: "Mrs. Leslie VonRueden",
        OauthToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UpdateMask: sdk.String("pariatur"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.DatafusionProjectsLocationsInstancesPatchSecurity{
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

## DatafusionProjectsLocationsInstancesRestart

Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.

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
    res, err := s.Projects.DatafusionProjectsLocationsInstancesRestart(ctx, operations.DatafusionProjectsLocationsInstancesRestartRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "quasi": "repudiandae",
            "sint": "veritatis",
            "itaque": "incidunt",
            "enim": "consequatur",
        },
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
    }, operations.DatafusionProjectsLocationsInstancesRestartSecurity{
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

## DatafusionProjectsLocationsInstancesSetIamPolicy

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
    res, err := s.Projects.DatafusionProjectsLocationsInstancesSetIamPolicy(ctx, operations.DatafusionProjectsLocationsInstancesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dolorum",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("tempora"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "labore",
                                    "delectus",
                                    "eum",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "sint",
                                    "aliquid",
                                    "provident",
                                    "necessitatibus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dolor",
                                    "debitis",
                                    "a",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("in"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("illum"),
                            Expression: sdk.String("maiores"),
                            Location: sdk.String("rerum"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "cumque",
                            "facere",
                        },
                        Role: sdk.String("ea"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("aliquid"),
                            Expression: sdk.String("laborum"),
                            Location: sdk.String("accusamus"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "enim",
                            "accusamus",
                            "delectus",
                        },
                        Role: sdk.String("quidem"),
                    },
                },
                Etag: sdk.String("provident"),
                Version: sdk.Int(725255),
            },
            UpdateMask: sdk.String("id"),
        },
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("amet"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        Resource: "natus",
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.DatafusionProjectsLocationsInstancesSetIamPolicySecurity{
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

## DatafusionProjectsLocationsInstancesTestIamPermissions

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
    res, err := s.Projects.DatafusionProjectsLocationsInstancesTestIamPermissions(ctx, operations.DatafusionProjectsLocationsInstancesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "magnam",
                "distinctio",
            },
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        Resource: "vero",
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.DatafusionProjectsLocationsInstancesTestIamPermissionsSecurity{
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

## DatafusionProjectsLocationsList

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
    res, err := s.Projects.DatafusionProjectsLocationsList(ctx, operations.DatafusionProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("provident"),
        Filter: sdk.String("quos"),
        IncludeUnrevealedLocations: sdk.Bool(false),
        Key: sdk.String("sint"),
        Name: "Angie Wisozk",
        OauthToken: sdk.String("eum"),
        PageSize: sdk.Int64(221262),
        PageToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.DatafusionProjectsLocationsListSecurity{
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

## DatafusionProjectsLocationsOperationsCancel

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
    res, err := s.Projects.DatafusionProjectsLocationsOperationsCancel(ctx, operations.DatafusionProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "debitis": "eius",
            "maxime": "deleniti",
            "facilis": "in",
            "architecto": "architecto",
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("repellat"),
        Name: "Louis Turner Sr.",
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("sunt"),
    }, operations.DatafusionProjectsLocationsOperationsCancelSecurity{
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

## DatafusionProjectsLocationsOperationsDelete

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
    res, err := s.Projects.DatafusionProjectsLocationsOperationsDelete(ctx, operations.DatafusionProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("ea"),
        Key: sdk.String("excepturi"),
        Name: "Dr. Rosemary Bartoletti",
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("autem"),
        UploadProtocol: sdk.String("nam"),
    }, operations.DatafusionProjectsLocationsOperationsDeleteSecurity{
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

## DatafusionProjectsLocationsOperationsGet

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
    res, err := s.Projects.DatafusionProjectsLocationsOperationsGet(ctx, operations.DatafusionProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("fugiat"),
        Name: "Jennifer Runolfsdottir",
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("quis"),
    }, operations.DatafusionProjectsLocationsOperationsGetSecurity{
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

## DatafusionProjectsLocationsOperationsList

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
    res, err := s.Projects.DatafusionProjectsLocationsOperationsList(ctx, operations.DatafusionProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("nesciunt"),
        Filter: sdk.String("eos"),
        Key: sdk.String("perferendis"),
        Name: "Brooke Kohler",
        OauthToken: sdk.String("nostrum"),
        PageSize: sdk.Int64(944120),
        PageToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("perspiciatis"),
    }, operations.DatafusionProjectsLocationsOperationsListSecurity{
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

## DatafusionProjectsLocationsVersionsList

Lists possible versions for Data Fusion instances in the specified project and location.

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
    res, err := s.Projects.DatafusionProjectsLocationsVersionsList(ctx, operations.DatafusionProjectsLocationsVersionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("error"),
        Key: sdk.String("eaque"),
        LatestPatchOnly: sdk.Bool(false),
        OauthToken: sdk.String("occaecati"),
        PageSize: sdk.Int64(699098),
        PageToken: sdk.String("adipisci"),
        Parent: "asperiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("iste"),
    }, operations.DatafusionProjectsLocationsVersionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailableVersionsResponse != nil {
        // handle response
    }
}
```
