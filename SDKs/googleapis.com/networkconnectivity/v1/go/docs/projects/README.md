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
            Description: sdk.String("esse"),
            Labels: map[string]string{
                "porro": "dolorum",
                "dicta": "nam",
                "officia": "occaecati",
            },
            Name: sdk.String("Cassandra Welch"),
            RoutingVpcs: []shared.RoutingVPCInput{
                shared.RoutingVPCInput{
                    URI: sdk.String("http://kosher-dipstick.biz"),
                },
            },
        },
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("ipsum"),
        HubID: sdk.String("excepturi"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("perferendis"),
        Parent: "ad",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        RequestID: sdk.String("sed"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("dolor"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("fuga"),
        Filter: sdk.String("in"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("iste"),
        OrderBy: sdk.String("iure"),
        PageSize: sdk.Int64(902349),
        PageToken: sdk.String("quidem"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("est"),
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
            CreateTime: sdk.String("laborum"),
            Description: sdk.String("dolores"),
            IPCidrRange: sdk.String("dolorem"),
            Labels: map[string]string{
                "explicabo": "nobis",
                "enim": "omnis",
            },
            Name: sdk.String("Ms. Cathy Marks"),
            Network: sdk.String("doloribus"),
            Overlaps: []shared.InternalRangeOverlapsEnum{
                shared.InternalRangeOverlapsEnumOverlapUnspecified,
                shared.InternalRangeOverlapsEnumOverlapRouteRange,
                shared.InternalRangeOverlapsEnumOverlapUnspecified,
                shared.InternalRangeOverlapsEnumOverlapRouteRange,
            },
            Peering: shared.InternalRangePeeringEnumPeeringUnspecified.ToPointer(),
            PrefixLength: sdk.Int(995300),
            TargetCidrRange: []string{
                "occaecati",
                "numquam",
                "commodi",
            },
            UpdateTime: sdk.String("quam"),
            Usage: shared.InternalRangeUsageEnumForVpc.ToPointer(),
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quia"),
        Fields: sdk.String("quis"),
        InternalRangeID: sdk.String("vitae"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("animi"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        RequestID: sdk.String("quo"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("tenetur"),
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
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("quasi"),
        Filter: sdk.String("error"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("laborum"),
        OrderBy: sdk.String("quasi"),
        PageSize: sdk.Int64(971945),
        PageToken: sdk.String("voluptatibus"),
        Parent: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("voluptatibus"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("perferendis"),
        Filter: sdk.String("doloremque"),
        Key: sdk.String("reprehenderit"),
        Name: "Shawna Carter",
        OauthToken: sdk.String("iusto"),
        PageSize: sdk.Int64(118727),
        PageToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("commodi"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "ipsum": "quidem",
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
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("deserunt"),
        Filter: sdk.String("distinctio"),
        Key: sdk.String("quibusdam"),
        Name: "Pauline Deckow",
        OauthToken: sdk.String("quos"),
        PageSize: sdk.Int64(20107),
        PageToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("alias"),
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
            Description: sdk.String("dolorum"),
            Hub: sdk.String("excepturi"),
            Labels: map[string]string{
                "facilis": "tempore",
                "labore": "delectus",
            },
            LinkedInterconnectAttachments: &shared.LinkedInterconnectAttachmentsInput{
                SiteToSiteDataTransfer: sdk.Bool(false),
                Uris: []string{
                    "non",
                    "eligendi",
                },
            },
            LinkedRouterApplianceInstances: &shared.LinkedRouterApplianceInstancesInput{
                Instances: []shared.RouterApplianceInstance{
                    shared.RouterApplianceInstance{
                        IPAddress: sdk.String("aliquid"),
                        VirtualMachine: sdk.String("provident"),
                    },
                    shared.RouterApplianceInstance{
                        IPAddress: sdk.String("necessitatibus"),
                        VirtualMachine: sdk.String("sint"),
                    },
                    shared.RouterApplianceInstance{
                        IPAddress: sdk.String("officia"),
                        VirtualMachine: sdk.String("dolor"),
                    },
                },
                SiteToSiteDataTransfer: sdk.Bool(false),
            },
            LinkedVpnTunnels: &shared.LinkedVpnTunnelsInput{
                SiteToSiteDataTransfer: sdk.Bool(false),
                Uris: []string{
                    "a",
                    "dolorum",
                    "in",
                    "in",
                },
            },
            Name: sdk.String("Mrs. Emilio Price"),
        },
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("non"),
        Parent: "occaecati",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        RequestID: sdk.String("accusamus"),
        SpokeID: sdk.String("delectus"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("provident"),
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
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("amet"),
        Name: "Tyler Kassulke",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        RequestID: sdk.String("nihil"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("distinctio"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("natus"),
        Key: sdk.String("nobis"),
        Name: "Mrs. Meghan Collins V",
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("sint"),
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
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("ad"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("dolor"),
        OptionsRequestedPolicyVersion: sdk.Int64(896547),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        Resource: "nemo",
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("iure"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("deleniti"),
        Filter: sdk.String("facilis"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("architecto"),
        OrderBy: sdk.String("architecto"),
        PageSize: sdk.Int64(919483),
        PageToken: sdk.String("ullam"),
        Parent: "expedita",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("quibusdam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SpokeInput: &shared.SpokeInput{
            Description: sdk.String("saepe"),
            Hub: sdk.String("pariatur"),
            Labels: map[string]string{
                "consequuntur": "praesentium",
            },
            LinkedInterconnectAttachments: &shared.LinkedInterconnectAttachmentsInput{
                SiteToSiteDataTransfer: sdk.Bool(false),
                Uris: []string{
                    "magni",
                    "sunt",
                    "quo",
                },
            },
            LinkedRouterApplianceInstances: &shared.LinkedRouterApplianceInstancesInput{
                Instances: []shared.RouterApplianceInstance{
                    shared.RouterApplianceInstance{
                        IPAddress: sdk.String("pariatur"),
                        VirtualMachine: sdk.String("maxime"),
                    },
                    shared.RouterApplianceInstance{
                        IPAddress: sdk.String("ea"),
                        VirtualMachine: sdk.String("excepturi"),
                    },
                    shared.RouterApplianceInstance{
                        IPAddress: sdk.String("odit"),
                        VirtualMachine: sdk.String("ea"),
                    },
                    shared.RouterApplianceInstance{
                        IPAddress: sdk.String("accusantium"),
                        VirtualMachine: sdk.String("ab"),
                    },
                },
                SiteToSiteDataTransfer: sdk.Bool(false),
            },
            LinkedVpnTunnels: &shared.LinkedVpnTunnelsInput{
                SiteToSiteDataTransfer: sdk.Bool(false),
                Uris: []string{
                    "quidem",
                    "ipsam",
                    "voluptate",
                    "autem",
                },
            },
            Name: sdk.String("Gary Streich"),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("aut"),
        Key: sdk.String("cumque"),
        Name: "Mindy Renner",
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        RequestID: sdk.String("dignissimos"),
        UpdateMask: sdk.String("eaque"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("nesciunt"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quam",
                                    "dolor",
                                    "vero",
                                    "nostrum",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("recusandae"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("facilis"),
                            Expression: sdk.String("perspiciatis"),
                            Location: sdk.String("voluptatem"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "blanditiis",
                        },
                        Role: sdk.String("error"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("eaque"),
                            Expression: sdk.String("occaecati"),
                            Location: sdk.String("rerum"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "earum",
                            "modi",
                            "iste",
                            "dolorum",
                        },
                        Role: sdk.String("deleniti"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("pariatur"),
                            Expression: sdk.String("provident"),
                            Location: sdk.String("nobis"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "quaerat",
                            "quos",
                            "aliquid",
                            "dolorem",
                        },
                        Role: sdk.String("dolorem"),
                    },
                },
                Etag: sdk.String("dolor"),
                Version: sdk.Int(186193),
            },
            UpdateMask: sdk.String("ipsum"),
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        Resource: "dolorum",
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("veritatis"),
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
                "iure",
            },
        },
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        Resource: "eos",
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("sit"),
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
