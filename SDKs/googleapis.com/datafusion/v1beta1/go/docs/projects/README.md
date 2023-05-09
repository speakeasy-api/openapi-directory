# Projects

### Available Operations

* [DatafusionProjectsLocationsInstancesCreate](#datafusionprojectslocationsinstancescreate) - Creates a new Data Fusion instance in the specified project and location.
* [DatafusionProjectsLocationsInstancesDNSPeeringsCreate](#datafusionprojectslocationsinstancesdnspeeringscreate) - Creates DNS peering on the given resource.
* [DatafusionProjectsLocationsInstancesDNSPeeringsList](#datafusionprojectslocationsinstancesdnspeeringslist) - Lists DNS peerings for a given resource.
* [DatafusionProjectsLocationsInstancesList](#datafusionprojectslocationsinstanceslist) - Lists Data Fusion instances in the specified project and location.
* [DatafusionProjectsLocationsInstancesNamespacesGetIamPolicy](#datafusionprojectslocationsinstancesnamespacesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [DatafusionProjectsLocationsInstancesNamespacesList](#datafusionprojectslocationsinstancesnamespaceslist) - List namespaces in a given instance
* [DatafusionProjectsLocationsInstancesNamespacesSetIamPolicy](#datafusionprojectslocationsinstancesnamespacessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [DatafusionProjectsLocationsInstancesNamespacesTestIamPermissions](#datafusionprojectslocationsinstancesnamespacestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [DatafusionProjectsLocationsInstancesPatch](#datafusionprojectslocationsinstancespatch) - Updates a single Data Fusion instance.
* [DatafusionProjectsLocationsInstancesRestart](#datafusionprojectslocationsinstancesrestart) - Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
* [DatafusionProjectsLocationsInstancesUpgrade](#datafusionprojectslocationsinstancesupgrade) - Upgrade a single Data Fusion instance. At the end of an operation instance is fully upgraded.
* [DatafusionProjectsLocationsList](#datafusionprojectslocationslist) - Lists information about the supported locations for this service.
* [DatafusionProjectsLocationsOperationsCancel](#datafusionprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatafusionProjectsLocationsOperationsDelete](#datafusionprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [DatafusionProjectsLocationsOperationsGet](#datafusionprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [DatafusionProjectsLocationsOperationsList](#datafusionprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [DatafusionProjectsLocationsRemoveIamPolicy](#datafusionprojectslocationsremoveiampolicy) - Remove IAM policy that is currently set on the given resource.
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("dolorem"),
        Filter: sdk.String("culpa"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("repellat"),
        OrderBy: sdk.String("mollitia"),
        PageSize: sdk.Int64(581850),
        PageToken: sdk.String("numquam"),
        Parent: "commodi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("velit"),
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

## DatafusionProjectsLocationsInstancesNamespacesGetIamPolicy

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
    res, err := s.Projects.DatafusionProjectsLocationsInstancesNamespacesGetIamPolicy(ctx, operations.DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("animi"),
        OauthToken: sdk.String("enim"),
        OptionsRequestedPolicyVersion: sdk.Int64(138183),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        Resource: "sequi",
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.DatafusionProjectsLocationsInstancesNamespacesGetIamPolicySecurity{
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

## DatafusionProjectsLocationsInstancesNamespacesList

List namespaces in a given instance

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
    res, err := s.Projects.DatafusionProjectsLocationsInstancesNamespacesList(ctx, operations.DatafusionProjectsLocationsInstancesNamespacesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("error"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("laborum"),
        PageSize: sdk.Int64(96098),
        PageToken: sdk.String("reiciendis"),
        Parent: "voluptatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("praesentium"),
        View: operations.DatafusionProjectsLocationsInstancesNamespacesListViewEnumNamespaceViewFull.ToPointer(),
    }, operations.DatafusionProjectsLocationsInstancesNamespacesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNamespacesResponse != nil {
        // handle response
    }
}
```

## DatafusionProjectsLocationsInstancesNamespacesSetIamPolicy

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
    res, err := s.Projects.DatafusionProjectsLocationsInstancesNamespacesSetIamPolicy(ctx, operations.DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "perferendis",
                                    "doloremque",
                                    "reprehenderit",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dicta",
                                    "corporis",
                                    "dolore",
                                    "iusto",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("harum"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "commodi",
                                    "repudiandae",
                                    "quae",
                                    "ipsum",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "excepturi",
                                    "pariatur",
                                    "modi",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("rem"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "repudiandae",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "itaque",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "consequatur",
                                    "est",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "deserunt",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("quibusdam"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("modi"),
                            Expression: sdk.String("qui"),
                            Location: sdk.String("aliquid"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "perferendis",
                            "magni",
                            "assumenda",
                        },
                        Role: sdk.String("ipsam"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("alias"),
                            Expression: sdk.String("fugit"),
                            Location: sdk.String("dolorum"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "facilis",
                            "tempore",
                        },
                        Role: sdk.String("labore"),
                    },
                },
                Etag: sdk.String("delectus"),
                Version: sdk.Int(433288),
            },
            UpdateMask: sdk.String("non"),
        },
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("provident"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        Resource: "dolor",
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("a"),
    }, operations.DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity{
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

## DatafusionProjectsLocationsInstancesNamespacesTestIamPermissions

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
    res, err := s.Projects.DatafusionProjectsLocationsInstancesNamespacesTestIamPermissions(ctx, operations.DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "in",
                "illum",
            },
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("facere"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        Resource: "aliquid",
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity{
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InstanceInput: &shared.InstanceInput{
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: sdk.String("occaecati"),
            },
            DataprocServiceAccount: sdk.String("enim"),
            Description: sdk.String("accusamus"),
            DisplayName: sdk.String("delectus"),
            EnableRbac: sdk.Bool(false),
            EnableStackdriverLogging: sdk.Bool(false),
            EnableStackdriverMonitoring: sdk.Bool(false),
            EnableZoneSeparation: sdk.Bool(false),
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: sdk.Bool(false),
                Topic: sdk.String("quidem"),
            },
            Labels: map[string]string{
                "nam": "id",
                "blanditiis": "deleniti",
                "sapiente": "amet",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: sdk.String("deserunt"),
                Network: sdk.String("nisi"),
            },
            Options: map[string]string{
                "natus": "omnis",
                "molestiae": "perferendis",
            },
            PrivateInstance: sdk.Bool(false),
            Type: shared.InstanceTypeEnumBasic.ToPointer(),
            Version: sdk.String("magnam"),
            Zone: sdk.String("distinctio"),
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("natus"),
        Name: "Duane Thiel II",
        OauthToken: sdk.String("et"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UpdateMask: sdk.String("ullam"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("quos"),
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
            "mollitia": "reiciendis",
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("necessitatibus"),
        Name: "Vivian Boyle",
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("deleniti"),
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

## DatafusionProjectsLocationsInstancesUpgrade

Upgrade a single Data Fusion instance. At the end of an operation instance is fully upgraded.

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
    res, err := s.Projects.DatafusionProjectsLocationsInstancesUpgrade(ctx, operations.DatafusionProjectsLocationsInstancesUpgradeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "architecto": "architecto",
            "repudiandae": "ullam",
        },
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("sed"),
        Name: "Al Bashirian",
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("quo"),
    }, operations.DatafusionProjectsLocationsInstancesUpgradeSecurity{
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("excepturi"),
        Filter: sdk.String("odit"),
        IncludeUnrevealedLocations: sdk.Bool(false),
        Key: sdk.String("ea"),
        Name: "Virginia Wunsch",
        OauthToken: sdk.String("voluptate"),
        PageSize: sdk.Int64(420075),
        PageToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("nemo"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "fugiat": "amet",
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("hic"),
        Key: sdk.String("libero"),
        Name: "Ernest Hayes",
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("eos"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quam"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("vero"),
        Name: "Mindy Walter",
        OauthToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("consequuntur"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("adipisci"),
        Name: "Merle Gleichner",
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("nobis"),
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
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("aliquid"),
        Filter: sdk.String("dolorem"),
        Key: sdk.String("dolorem"),
        Name: "Norma Erdman",
        OauthToken: sdk.String("cum"),
        PageSize: sdk.Int64(452109),
        PageToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("dolorum"),
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

## DatafusionProjectsLocationsRemoveIamPolicy

Remove IAM policy that is currently set on the given resource.

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
    res, err := s.Projects.DatafusionProjectsLocationsRemoveIamPolicy(ctx, operations.DatafusionProjectsLocationsRemoveIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "ipsa": "ipsa",
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        Resource: "natus",
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("atque"),
    }, operations.DatafusionProjectsLocationsRemoveIamPolicySecurity{
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
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("iusto"),
        LatestPatchOnly: sdk.Bool(false),
        OauthToken: sdk.String("voluptate"),
        PageSize: sdk.Int64(677082),
        PageToken: sdk.String("deleniti"),
        Parent: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("asperiores"),
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
