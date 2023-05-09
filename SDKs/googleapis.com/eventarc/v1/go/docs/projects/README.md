# Projects

### Available Operations

* [EventarcProjectsLocationsChannelConnectionsCreate](#eventarcprojectslocationschannelconnectionscreate) - Create a new ChannelConnection in a particular project and location.
* [EventarcProjectsLocationsChannelConnectionsList](#eventarcprojectslocationschannelconnectionslist) - List channel connections.
* [EventarcProjectsLocationsChannelsCreate](#eventarcprojectslocationschannelscreate) - Create a new channel in a particular project and location.
* [EventarcProjectsLocationsChannelsList](#eventarcprojectslocationschannelslist) - List channels.
* [EventarcProjectsLocationsList](#eventarcprojectslocationslist) - Lists information about the supported locations for this service.
* [EventarcProjectsLocationsOperationsCancel](#eventarcprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [EventarcProjectsLocationsOperationsList](#eventarcprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [EventarcProjectsLocationsProvidersList](#eventarcprojectslocationsproviderslist) - List providers.
* [EventarcProjectsLocationsTriggersCreate](#eventarcprojectslocationstriggerscreate) - Create a new trigger in a particular project and location.
* [EventarcProjectsLocationsTriggersDelete](#eventarcprojectslocationstriggersdelete) - Delete a single trigger.
* [EventarcProjectsLocationsTriggersGet](#eventarcprojectslocationstriggersget) - Get a single trigger.
* [EventarcProjectsLocationsTriggersGetIamPolicy](#eventarcprojectslocationstriggersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [EventarcProjectsLocationsTriggersList](#eventarcprojectslocationstriggerslist) - List triggers.
* [EventarcProjectsLocationsTriggersPatch](#eventarcprojectslocationstriggerspatch) - Update a single trigger.
* [EventarcProjectsLocationsTriggersSetIamPolicy](#eventarcprojectslocationstriggerssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [EventarcProjectsLocationsTriggersTestIamPermissions](#eventarcprojectslocationstriggerstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## EventarcProjectsLocationsChannelConnectionsCreate

Create a new ChannelConnection in a particular project and location.

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
    res, err := s.Projects.EventarcProjectsLocationsChannelConnectionsCreate(ctx, operations.EventarcProjectsLocationsChannelConnectionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ChannelConnectionInput: &shared.ChannelConnectionInput{
            ActivationToken: sdk.String("minus"),
            Channel: sdk.String("placeat"),
            Name: sdk.String("Ted Mante"),
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        ChannelConnectionID: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ipsam"),
        Parent: "repellendus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
    }, operations.EventarcProjectsLocationsChannelConnectionsCreateSecurity{
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

## EventarcProjectsLocationsChannelConnectionsList

List channel connections.

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
    res, err := s.Projects.EventarcProjectsLocationsChannelConnectionsList(ctx, operations.EventarcProjectsLocationsChannelConnectionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("quod"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("esse"),
        PageSize: sdk.Int64(520478),
        PageToken: sdk.String("porro"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("officia"),
    }, operations.EventarcProjectsLocationsChannelConnectionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChannelConnectionsResponse != nil {
        // handle response
    }
}
```

## EventarcProjectsLocationsChannelsCreate

Create a new channel in a particular project and location.

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
    res, err := s.Projects.EventarcProjectsLocationsChannelsCreate(ctx, operations.EventarcProjectsLocationsChannelsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ChannelInput: &shared.ChannelInput{
            CryptoKeyName: sdk.String("fugit"),
            Name: sdk.String("Irvin Rosenbaum III"),
            Provider: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        ChannelID: sdk.String("cum"),
        Fields: sdk.String("esse"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("excepturi"),
        Parent: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("natus"),
        ValidateOnly: sdk.Bool(false),
    }, operations.EventarcProjectsLocationsChannelsCreateSecurity{
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

## EventarcProjectsLocationsChannelsList

List channels.

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
    res, err := s.Projects.EventarcProjectsLocationsChannelsList(ctx, operations.EventarcProjectsLocationsChannelsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("saepe"),
        OrderBy: sdk.String("fuga"),
        PageSize: sdk.Int64(449950),
        PageToken: sdk.String("corporis"),
        Parent: "iste",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.EventarcProjectsLocationsChannelsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChannelsResponse != nil {
        // handle response
    }
}
```

## EventarcProjectsLocationsList

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
    res, err := s.Projects.EventarcProjectsLocationsList(ctx, operations.EventarcProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("mollitia"),
        Filter: sdk.String("laborum"),
        Key: sdk.String("dolores"),
        Name: "Stacy Champlin",
        OauthToken: sdk.String("omnis"),
        PageSize: sdk.Int64(363711),
        PageToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("iure"),
    }, operations.EventarcProjectsLocationsListSecurity{
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

## EventarcProjectsLocationsOperationsCancel

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
    res, err := s.Projects.EventarcProjectsLocationsOperationsCancel(ctx, operations.EventarcProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "sapiente": "architecto",
            "mollitia": "dolorem",
            "culpa": "consequuntur",
            "repellat": "mollitia",
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("quam"),
        Key: sdk.String("molestiae"),
        Name: "Sabrina Cronin MD",
        OauthToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("quo"),
    }, operations.EventarcProjectsLocationsOperationsCancelSecurity{
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

## EventarcProjectsLocationsOperationsList

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
    res, err := s.Projects.EventarcProjectsLocationsOperationsList(ctx, operations.EventarcProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("possimus"),
        Filter: sdk.String("aut"),
        Key: sdk.String("quasi"),
        Name: "Dr. Jake Pacocha",
        OauthToken: sdk.String("vero"),
        PageSize: sdk.Int64(468651),
        PageToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.EventarcProjectsLocationsOperationsListSecurity{
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

## EventarcProjectsLocationsProvidersList

List providers.

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
    res, err := s.Projects.EventarcProjectsLocationsProvidersList(ctx, operations.EventarcProjectsLocationsProvidersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("reprehenderit"),
        Filter: sdk.String("ut"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("dicta"),
        OrderBy: sdk.String("corporis"),
        PageSize: sdk.Int64(296140),
        PageToken: sdk.String("iusto"),
        Parent: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.EventarcProjectsLocationsProvidersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProvidersResponse != nil {
        // handle response
    }
}
```

## EventarcProjectsLocationsTriggersCreate

Create a new trigger in a particular project and location.

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
    res, err := s.Projects.EventarcProjectsLocationsTriggersCreate(ctx, operations.EventarcProjectsLocationsTriggersCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TriggerInput: &shared.TriggerInput{
            Channel: sdk.String("repudiandae"),
            Destination: &shared.Destination{
                CloudFunction: sdk.String("quae"),
                CloudRun: &shared.CloudRun{
                    Path: sdk.String("ipsum"),
                    Region: sdk.String("quidem"),
                    Service: sdk.String("molestias"),
                },
                Gke: &shared.Gke{
                    Cluster: sdk.String("excepturi"),
                    Location: sdk.String("pariatur"),
                    Namespace: sdk.String("modi"),
                    Path: sdk.String("praesentium"),
                    Service: sdk.String("rem"),
                },
                Workflow: sdk.String("voluptates"),
            },
            EventDataContentType: sdk.String("quasi"),
            EventFilters: []shared.EventFilter{
                shared.EventFilter{
                    Attribute: sdk.String("sint"),
                    Operator: sdk.String("veritatis"),
                    Value: sdk.String("itaque"),
                },
                shared.EventFilter{
                    Attribute: sdk.String("incidunt"),
                    Operator: sdk.String("enim"),
                    Value: sdk.String("consequatur"),
                },
                shared.EventFilter{
                    Attribute: sdk.String("est"),
                    Operator: sdk.String("quibusdam"),
                    Value: sdk.String("explicabo"),
                },
                shared.EventFilter{
                    Attribute: sdk.String("deserunt"),
                    Operator: sdk.String("distinctio"),
                    Value: sdk.String("quibusdam"),
                },
            },
            Labels: map[string]string{
                "modi": "qui",
                "aliquid": "cupiditate",
            },
            Name: sdk.String("Christopher Cummerata"),
            ServiceAccount: sdk.String("alias"),
            Transport: &shared.TransportInput{
                Pubsub: &shared.PubsubInput{
                    Topic: sdk.String("fugit"),
                },
            },
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("labore"),
        Parent: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        TriggerID: sdk.String("non"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("sint"),
        ValidateOnly: sdk.Bool(false),
    }, operations.EventarcProjectsLocationsTriggersCreateSecurity{
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

## EventarcProjectsLocationsTriggersDelete

Delete a single trigger.

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
    res, err := s.Projects.EventarcProjectsLocationsTriggersDelete(ctx, operations.EventarcProjectsLocationsTriggersDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("provident"),
        AllowMissing: sdk.Bool(false),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Etag: sdk.String("officia"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("debitis"),
        Name: "Wilbur King",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("magnam"),
        ValidateOnly: sdk.Bool(false),
    }, operations.EventarcProjectsLocationsTriggersDeleteSecurity{
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

## EventarcProjectsLocationsTriggersGet

Get a single trigger.

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
    res, err := s.Projects.EventarcProjectsLocationsTriggersGet(ctx, operations.EventarcProjectsLocationsTriggersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("accusamus"),
        Name: "Toni Haley",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("id"),
    }, operations.EventarcProjectsLocationsTriggersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Trigger != nil {
        // handle response
    }
}
```

## EventarcProjectsLocationsTriggersGetIamPolicy

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
    res, err := s.Projects.EventarcProjectsLocationsTriggersGetIamPolicy(ctx, operations.EventarcProjectsLocationsTriggersGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("vel"),
        OptionsRequestedPolicyVersion: sdk.Int64(618809),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        Resource: "molestiae",
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.EventarcProjectsLocationsTriggersGetIamPolicySecurity{
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

## EventarcProjectsLocationsTriggersList

List triggers.

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
    res, err := s.Projects.EventarcProjectsLocationsTriggersList(ctx, operations.EventarcProjectsLocationsTriggersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("labore"),
        Filter: sdk.String("suscipit"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("nobis"),
        OrderBy: sdk.String("eum"),
        PageSize: sdk.Int64(878453),
        PageToken: sdk.String("aspernatur"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.EventarcProjectsLocationsTriggersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTriggersResponse != nil {
        // handle response
    }
}
```

## EventarcProjectsLocationsTriggersPatch

Update a single trigger.

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
    res, err := s.Projects.EventarcProjectsLocationsTriggersPatch(ctx, operations.EventarcProjectsLocationsTriggersPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TriggerInput: &shared.TriggerInput{
            Channel: sdk.String("provident"),
            Destination: &shared.Destination{
                CloudFunction: sdk.String("quos"),
                CloudRun: &shared.CloudRun{
                    Path: sdk.String("sint"),
                    Region: sdk.String("accusantium"),
                    Service: sdk.String("mollitia"),
                },
                Gke: &shared.Gke{
                    Cluster: sdk.String("reiciendis"),
                    Location: sdk.String("mollitia"),
                    Namespace: sdk.String("ad"),
                    Path: sdk.String("eum"),
                    Service: sdk.String("dolor"),
                },
                Workflow: sdk.String("necessitatibus"),
            },
            EventDataContentType: sdk.String("odit"),
            EventFilters: []shared.EventFilter{
                shared.EventFilter{
                    Attribute: sdk.String("quasi"),
                    Operator: sdk.String("iure"),
                    Value: sdk.String("doloribus"),
                },
                shared.EventFilter{
                    Attribute: sdk.String("debitis"),
                    Operator: sdk.String("eius"),
                    Value: sdk.String("maxime"),
                },
            },
            Labels: map[string]string{
                "facilis": "in",
                "architecto": "architecto",
                "repudiandae": "ullam",
            },
            Name: sdk.String("Jessie Zulauf"),
            ServiceAccount: sdk.String("saepe"),
            Transport: &shared.TransportInput{
                Pubsub: &shared.PubsubInput{
                    Topic: sdk.String("pariatur"),
                },
            },
        },
        AccessToken: sdk.String("accusantium"),
        AllowMissing: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("natus"),
        Key: sdk.String("magni"),
        Name: "Angelica Stanton",
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UpdateMask: sdk.String("odit"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("accusantium"),
        ValidateOnly: sdk.Bool(false),
    }, operations.EventarcProjectsLocationsTriggersPatchSecurity{
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

## EventarcProjectsLocationsTriggersSetIamPolicy

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
    res, err := s.Projects.EventarcProjectsLocationsTriggersSetIamPolicy(ctx, operations.EventarcProjectsLocationsTriggersSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "voluptate",
                                    "autem",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "pariatur",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "perferendis",
                                    "fugiat",
                                    "amet",
                                    "aut",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("corporis"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "nobis",
                                    "dolores",
                                    "quis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "eaque",
                                    "quis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "perferendis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
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
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "perspiciatis",
                                    "voluptatem",
                                    "porro",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "error",
                                    "eaque",
                                    "occaecati",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "asperiores",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("modi"),
                    },
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
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("hic"),
                            Expression: sdk.String("excepturi"),
                            Location: sdk.String("cum"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "reiciendis",
                            "amet",
                        },
                        Role: sdk.String("dolorum"),
                    },
                },
                Etag: sdk.String("numquam"),
                Version: sdk.Int(85295),
            },
            UpdateMask: sdk.String("ipsa"),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        Resource: "voluptas",
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("eos"),
    }, operations.EventarcProjectsLocationsTriggersSetIamPolicySecurity{
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

## EventarcProjectsLocationsTriggersTestIamPermissions

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
    res, err := s.Projects.EventarcProjectsLocationsTriggersTestIamPermissions(ctx, operations.EventarcProjectsLocationsTriggersTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "fugiat",
            },
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        Resource: "omnis",
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.EventarcProjectsLocationsTriggersTestIamPermissionsSecurity{
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
