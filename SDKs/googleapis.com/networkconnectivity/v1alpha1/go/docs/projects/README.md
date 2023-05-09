# Projects

### Available Operations

* [NetworkconnectivityProjectsLocationsGlobalHubsCreate](#networkconnectivityprojectslocationsglobalhubscreate) - Creates a new Network Connectivity Center hub in the specified project.
* [NetworkconnectivityProjectsLocationsGlobalHubsList](#networkconnectivityprojectslocationsglobalhubslist) - Lists the Network Connectivity Center hubs associated with a given project.
* [NetworkconnectivityProjectsLocationsInternalRangesCreate](#networkconnectivityprojectslocationsinternalrangescreate) - Creates a new internal range in a given project and location.
* [NetworkconnectivityProjectsLocationsInternalRangesList](#networkconnectivityprojectslocationsinternalrangeslist) - Lists internal ranges in a given project and location.
* [NetworkconnectivityProjectsLocationsList](#networkconnectivityprojectslocationslist) - Lists information about the supported locations for this service.
* [NetworkconnectivityProjectsLocationsOperationsCancel](#networkconnectivityprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [NetworkconnectivityProjectsLocationsOperationsList](#networkconnectivityprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [NetworkconnectivityProjectsLocationsSpokesCreate](#networkconnectivityprojectslocationsspokescreate) - Creates a Network Connectivity Center spoke.
* [NetworkconnectivityProjectsLocationsSpokesDelete](#networkconnectivityprojectslocationsspokesdelete) - Deletes a Network Connectivity Center spoke.
* [NetworkconnectivityProjectsLocationsSpokesGet](#networkconnectivityprojectslocationsspokesget) - Gets details about a Network Connectivity Center spoke.
* [NetworkconnectivityProjectsLocationsSpokesGetIamPolicy](#networkconnectivityprojectslocationsspokesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [NetworkconnectivityProjectsLocationsSpokesList](#networkconnectivityprojectslocationsspokeslist) - Lists the Network Connectivity Center spokes in a specified project and location.
* [NetworkconnectivityProjectsLocationsSpokesPatch](#networkconnectivityprojectslocationsspokespatch) - Updates the parameters of a Network Connectivity Center spoke.
* [NetworkconnectivityProjectsLocationsSpokesSetIamPolicy](#networkconnectivityprojectslocationsspokessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [NetworkconnectivityProjectsLocationsSpokesTestIamPermissions](#networkconnectivityprojectslocationsspokestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## NetworkconnectivityProjectsLocationsGlobalHubsCreate

Creates a new Network Connectivity Center hub in the specified project.

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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsGlobalHubsCreate(ctx, operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        HubInput: &shared.HubInput{
            CreateTime: sdk.String("perferendis"),
            Description: sdk.String("ipsam"),
            Labels: map[string]string{
                "sapiente": "quo",
                "odit": "at",
                "at": "maiores",
                "molestiae": "quod",
            },
            Name: sdk.String("Erik Lebsack"),
            UpdateTime: sdk.String("dicta"),
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("fugit"),
        HubID: sdk.String("deleniti"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("optio"),
        Parent: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        RequestID: sdk.String("commodi"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("modi"),
    }, operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity{
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

## NetworkconnectivityProjectsLocationsGlobalHubsList

Lists the Network Connectivity Center hubs associated with a given project.

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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsGlobalHubsList(ctx, operations.NetworkconnectivityProjectsLocationsGlobalHubsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("ipsum"),
        Filter: sdk.String("excepturi"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("perferendis"),
        OrderBy: sdk.String("ad"),
        PageSize: sdk.Int64(617636),
        PageToken: sdk.String("sed"),
        Parent: "iste",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.NetworkconnectivityProjectsLocationsGlobalHubsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHubsResponse != nil {
        // handle response
    }
}
```

## NetworkconnectivityProjectsLocationsInternalRangesCreate

Creates a new internal range in a given project and location.

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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsInternalRangesCreate(ctx, operations.NetworkconnectivityProjectsLocationsInternalRangesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InternalRangeInput: &shared.InternalRangeInput{
            CreateTime: sdk.String("saepe"),
            Description: sdk.String("fuga"),
            IPCidrRange: sdk.String("in"),
            Labels: map[string]string{
                "iste": "iure",
                "saepe": "quidem",
            },
            Name: sdk.String("Brenda Wisozk"),
            Network: sdk.String("laborum"),
            Overlaps: []shared.InternalRangeOverlapsEnum{
                shared.InternalRangeOverlapsEnumOverlapUnspecified,
            },
            Peering: shared.InternalRangePeeringEnumForSelf.ToPointer(),
            PrefixLength: sdk.Int(128926),
            TargetCidrRange: []string{
                "enim",
                "omnis",
                "nemo",
                "minima",
            },
            UpdateTime: sdk.String("excepturi"),
            Usage: shared.InternalRangeUsageEnumUsageUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("sapiente"),
        InternalRangeID: sdk.String("architecto"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("dolorem"),
        Parent: "culpa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        RequestID: sdk.String("repellat"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity{
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

## NetworkconnectivityProjectsLocationsInternalRangesList

Lists internal ranges in a given project and location.

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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsInternalRangesList(ctx, operations.NetworkconnectivityProjectsLocationsInternalRangesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("velit"),
        Filter: sdk.String("error"),
        Key: sdk.String("quia"),
        OauthToken: sdk.String("quis"),
        OrderBy: sdk.String("vitae"),
        PageSize: sdk.Int64(674752),
        PageToken: sdk.String("animi"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("sequi"),
    }, operations.NetworkconnectivityProjectsLocationsInternalRangesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInternalRangesResponse != nil {
        // handle response
    }
}
```

## NetworkconnectivityProjectsLocationsList

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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsList(ctx, operations.NetworkconnectivityProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("aut"),
        Filter: sdk.String("quasi"),
        Key: sdk.String("error"),
        Name: "Neal Boyer",
        OauthToken: sdk.String("vero"),
        PageSize: sdk.Int64(468651),
        PageToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.NetworkconnectivityProjectsLocationsListSecurity{
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

## NetworkconnectivityProjectsLocationsOperationsCancel

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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsOperationsCancel(ctx, operations.NetworkconnectivityProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "perferendis": "doloremque",
            "reprehenderit": "ut",
            "maiores": "dicta",
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("harum"),
        Name: "Sophia Jerde I",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.NetworkconnectivityProjectsLocationsOperationsCancelSecurity{
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

## NetworkconnectivityProjectsLocationsOperationsList

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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsOperationsList(ctx, operations.NetworkconnectivityProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("quasi"),
        Filter: sdk.String("repudiandae"),
        Key: sdk.String("sint"),
        Name: "Patti Gottlieb MD",
        OauthToken: sdk.String("quibusdam"),
        PageSize: sdk.Int64(131797),
        PageToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("labore"),
    }, operations.NetworkconnectivityProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```

## NetworkconnectivityProjectsLocationsSpokesCreate

Creates a Network Connectivity Center spoke.

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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsSpokesCreate(ctx, operations.NetworkconnectivityProjectsLocationsSpokesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SpokeInput: &shared.SpokeInput{
            CreateTime: sdk.String("qui"),
            Description: sdk.String("aliquid"),
            Hub: sdk.String("cupiditate"),
            Labels: map[string]string{
                "perferendis": "magni",
                "assumenda": "ipsam",
                "alias": "fugit",
            },
            LinkedInterconnectAttachments: []string{
                "excepturi",
                "tempora",
                "facilis",
            },
            LinkedRouterApplianceInstances: []shared.RouterApplianceInstance{
                shared.RouterApplianceInstance{
                    IPAddress: sdk.String("labore"),
                    NetworkInterface: sdk.String("delectus"),
                    VirtualMachine: sdk.String("eum"),
                },
                shared.RouterApplianceInstance{
                    IPAddress: sdk.String("non"),
                    NetworkInterface: sdk.String("eligendi"),
                    VirtualMachine: sdk.String("sint"),
                },
                shared.RouterApplianceInstance{
                    IPAddress: sdk.String("aliquid"),
                    NetworkInterface: sdk.String("provident"),
                    VirtualMachine: sdk.String("necessitatibus"),
                },
            },
            LinkedVpnTunnels: []string{
                "officia",
                "dolor",
                "debitis",
            },
            Name: sdk.String("Wilbur King"),
            UpdateTime: sdk.String("maiores"),
        },
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("cumque"),
        Key: sdk.String("facere"),
        OauthToken: sdk.String("ea"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        RequestID: sdk.String("accusamus"),
        SpokeID: sdk.String("non"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("enim"),
    }, operations.NetworkconnectivityProjectsLocationsSpokesCreateSecurity{
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

## NetworkconnectivityProjectsLocationsSpokesDelete

Deletes a Network Connectivity Center spoke.

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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsSpokesDelete(ctx, operations.NetworkconnectivityProjectsLocationsSpokesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("nam"),
        Key: sdk.String("id"),
        Name: "Jaime Will",
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        RequestID: sdk.String("natus"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.NetworkconnectivityProjectsLocationsSpokesDeleteSecurity{
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

## NetworkconnectivityProjectsLocationsSpokesGet

Gets details about a Network Connectivity Center spoke.

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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsSpokesGet(ctx, operations.NetworkconnectivityProjectsLocationsSpokesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("id"),
        Key: sdk.String("labore"),
        Name: "Laurie Mosciski",
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.NetworkconnectivityProjectsLocationsSpokesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Spoke != nil {
        // handle response
    }
}
```

## NetworkconnectivityProjectsLocationsSpokesGetIamPolicy

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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsSpokesGetIamPolicy(ctx, operations.NetworkconnectivityProjectsLocationsSpokesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("quos"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("accusantium"),
        OptionsRequestedPolicyVersion: sdk.Int64(653201),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        Resource: "mollitia",
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("eum"),
    }, operations.NetworkconnectivityProjectsLocationsSpokesGetIamPolicySecurity{
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

## NetworkconnectivityProjectsLocationsSpokesList

Lists the Network Connectivity Center spokes in a specified project and location.

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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsSpokesList(ctx, operations.NetworkconnectivityProjectsLocationsSpokesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("quasi"),
        Filter: sdk.String("iure"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("debitis"),
        OrderBy: sdk.String("eius"),
        PageSize: sdk.Int64(806194),
        PageToken: sdk.String("deleniti"),
        Parent: "facilis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.NetworkconnectivityProjectsLocationsSpokesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSpokesResponse != nil {
        // handle response
    }
}
```

## NetworkconnectivityProjectsLocationsSpokesPatch

Updates the parameters of a Network Connectivity Center spoke.

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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsSpokesPatch(ctx, operations.NetworkconnectivityProjectsLocationsSpokesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SpokeInput: &shared.SpokeInput{
            CreateTime: sdk.String("ullam"),
            Description: sdk.String("expedita"),
            Hub: sdk.String("nihil"),
            Labels: map[string]string{
                "quibusdam": "sed",
                "saepe": "pariatur",
                "accusantium": "consequuntur",
                "praesentium": "natus",
            },
            LinkedInterconnectAttachments: []string{
                "sunt",
            },
            LinkedRouterApplianceInstances: []shared.RouterApplianceInstance{
                shared.RouterApplianceInstance{
                    IPAddress: sdk.String("illum"),
                    NetworkInterface: sdk.String("pariatur"),
                    VirtualMachine: sdk.String("maxime"),
                },
                shared.RouterApplianceInstance{
                    IPAddress: sdk.String("ea"),
                    NetworkInterface: sdk.String("excepturi"),
                    VirtualMachine: sdk.String("odit"),
                },
                shared.RouterApplianceInstance{
                    IPAddress: sdk.String("ea"),
                    NetworkInterface: sdk.String("accusantium"),
                    VirtualMachine: sdk.String("ab"),
                },
                shared.RouterApplianceInstance{
                    IPAddress: sdk.String("maiores"),
                    NetworkInterface: sdk.String("quidem"),
                    VirtualMachine: sdk.String("ipsam"),
                },
            },
            LinkedVpnTunnels: []string{
                "autem",
                "nam",
            },
            Name: sdk.String("Meredith Hickle PhD"),
            UpdateTime: sdk.String("amet"),
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
        RequestID: sdk.String("nesciunt"),
        UpdateMask: sdk.String("eos"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.NetworkconnectivityProjectsLocationsSpokesPatchSecurity{
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

## NetworkconnectivityProjectsLocationsSpokesSetIamPolicy

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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsSpokesSetIamPolicy(ctx, operations.NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "nostrum",
                                    "hic",
                                    "recusandae",
                                    "omnis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("perspiciatis"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "consequuntur",
                                    "blanditiis",
                                    "error",
                                    "eaque",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("rerum"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("asperiores"),
                            Expression: sdk.String("earum"),
                            Location: sdk.String("modi"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "deleniti",
                            "pariatur",
                            "provident",
                        },
                        Role: sdk.String("nobis"),
                    },
                },
                Etag: sdk.String("libero"),
                Version: sdk.Int(964490),
            },
            UpdateMask: sdk.String("quaerat"),
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        Resource: "hic",
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("cum"),
    }, operations.NetworkconnectivityProjectsLocationsSpokesSetIamPolicySecurity{
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

## NetworkconnectivityProjectsLocationsSpokesTestIamPermissions

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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsSpokesTestIamPermissions(ctx, operations.NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "reiciendis",
                "amet",
            },
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("iure"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        Resource: "quaerat",
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsSecurity{
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
