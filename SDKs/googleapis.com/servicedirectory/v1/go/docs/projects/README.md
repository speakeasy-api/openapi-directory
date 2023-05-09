# Projects

### Available Operations

* [ServicedirectoryProjectsLocationsList](#servicedirectoryprojectslocationslist) - Lists information about the supported locations for this service.
* [ServicedirectoryProjectsLocationsNamespacesCreate](#servicedirectoryprojectslocationsnamespacescreate) - Creates a namespace, and returns the new namespace.
* [ServicedirectoryProjectsLocationsNamespacesList](#servicedirectoryprojectslocationsnamespaceslist) - Lists all namespaces.
* [ServicedirectoryProjectsLocationsNamespacesServicesCreate](#servicedirectoryprojectslocationsnamespacesservicescreate) - Creates a service, and returns the new service.
* [ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate](#servicedirectoryprojectslocationsnamespacesservicesendpointscreate) - Creates an endpoint, and returns the new endpoint.
* [ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete](#servicedirectoryprojectslocationsnamespacesservicesendpointsdelete) - Deletes an endpoint.
* [ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGet](#servicedirectoryprojectslocationsnamespacesservicesendpointsget) - Gets an endpoint.
* [ServicedirectoryProjectsLocationsNamespacesServicesEndpointsList](#servicedirectoryprojectslocationsnamespacesservicesendpointslist) - Lists all endpoints.
* [ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch](#servicedirectoryprojectslocationsnamespacesservicesendpointspatch) - Updates an endpoint.
* [ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicy](#servicedirectoryprojectslocationsnamespacesservicesgetiampolicy) - Gets the IAM Policy for a resource (namespace or service only).
* [ServicedirectoryProjectsLocationsNamespacesServicesList](#servicedirectoryprojectslocationsnamespacesserviceslist) - Lists all services belonging to a namespace.
* [ServicedirectoryProjectsLocationsNamespacesServicesResolve](#servicedirectoryprojectslocationsnamespacesservicesresolve) - Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.
* [ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicy](#servicedirectoryprojectslocationsnamespacesservicessetiampolicy) - Sets the IAM Policy for a resource (namespace or service only).
* [ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissions](#servicedirectoryprojectslocationsnamespacesservicestestiampermissions) - Tests IAM permissions for a resource (namespace or service only).

## ServicedirectoryProjectsLocationsList

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
    res, err := s.Projects.ServicedirectoryProjectsLocationsList(ctx, operations.ServicedirectoryProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Filter: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        Name: "Mrs. Sophie Smith MD",
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(368241),
        PageToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
    }, operations.ServicedirectoryProjectsLocationsListSecurity{
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

## ServicedirectoryProjectsLocationsNamespacesCreate

Creates a namespace, and returns the new namespace.

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
    res, err := s.Projects.ServicedirectoryProjectsLocationsNamespacesCreate(ctx, operations.ServicedirectoryProjectsLocationsNamespacesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        NamespaceInput: &shared.NamespaceInput{
            Labels: map[string]string{
                "maiores": "molestiae",
                "quod": "quod",
                "esse": "totam",
                "porro": "dolorum",
            },
            Name: sdk.String("Antoinette Nikolaus"),
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("totam"),
        Key: sdk.String("beatae"),
        NamespaceID: sdk.String("commodi"),
        OauthToken: sdk.String("molestiae"),
        Parent: "modi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("cum"),
    }, operations.ServicedirectoryProjectsLocationsNamespacesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Namespace != nil {
        // handle response
    }
}
```

## ServicedirectoryProjectsLocationsNamespacesList

Lists all namespaces.

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
    res, err := s.Projects.ServicedirectoryProjectsLocationsNamespacesList(ctx, operations.ServicedirectoryProjectsLocationsNamespacesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("perferendis"),
        Filter: sdk.String("ad"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("sed"),
        OrderBy: sdk.String("iste"),
        PageSize: sdk.Int64(222321),
        PageToken: sdk.String("natus"),
        Parent: "laboriosam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("fuga"),
    }, operations.ServicedirectoryProjectsLocationsNamespacesListSecurity{
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

## ServicedirectoryProjectsLocationsNamespacesServicesCreate

Creates a service, and returns the new service.

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
    res, err := s.Projects.ServicedirectoryProjectsLocationsNamespacesServicesCreate(ctx, operations.ServicedirectoryProjectsLocationsNamespacesServicesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ServiceInput: &shared.ServiceInput{
            Annotations: map[string]string{
                "iste": "iure",
                "saepe": "quidem",
            },
            Name: sdk.String("Brenda Wisozk"),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("nobis"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        ServiceID: sdk.String("nemo"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.ServicedirectoryProjectsLocationsNamespacesServicesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate

Creates an endpoint, and returns the new endpoint.

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
    res, err := s.Projects.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate(ctx, operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EndpointInput: &shared.EndpointInput{
            Address: sdk.String("6991 Durgan Pike"),
            Annotations: map[string]string{
                "repellat": "mollitia",
            },
            Name: sdk.String("Francis Jerde"),
            Network: sdk.String("velit"),
            Port: sdk.Int(623510),
        },
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vitae"),
        EndpointID: sdk.String("laborum"),
        Fields: sdk.String("animi"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("odit"),
        Parent: "quo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Endpoint != nil {
        // handle response
    }
}
```

## ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete

Deletes an endpoint.

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
    res, err := s.Projects.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete(ctx, operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("error"),
        Key: sdk.String("temporibus"),
        Name: "Ryan Witting",
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteSecurity{
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

## ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGet

Gets an endpoint.

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
    res, err := s.Projects.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGet(ctx, operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("doloremque"),
        Key: sdk.String("reprehenderit"),
        Name: "Shawna Carter",
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("enim"),
    }, operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Endpoint != nil {
        // handle response
    }
}
```

## ServicedirectoryProjectsLocationsNamespacesServicesEndpointsList

Lists all endpoints.

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
    res, err := s.Projects.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsList(ctx, operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("ipsum"),
        Filter: sdk.String("quidem"),
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("excepturi"),
        OrderBy: sdk.String("pariatur"),
        PageSize: sdk.Int64(265389),
        PageToken: sdk.String("praesentium"),
        Parent: "rem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEndpointsResponse != nil {
        // handle response
    }
}
```

## ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch

Updates an endpoint.

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
    res, err := s.Projects.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch(ctx, operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EndpointInput: &shared.EndpointInput{
            Address: sdk.String("92306 Cole Place"),
            Annotations: map[string]string{
                "quibusdam": "labore",
                "modi": "qui",
                "aliquid": "cupiditate",
            },
            Name: sdk.String("Christopher Cummerata"),
            Network: sdk.String("alias"),
            Port: sdk.Int(146441),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("tempore"),
        Name: "Lucia Kemmer",
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UpdateMask: sdk.String("provident"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("sint"),
    }, operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Endpoint != nil {
        // handle response
    }
}
```

## ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicy

Gets the IAM Policy for a resource (namespace or service only).

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
    res, err := s.Projects.ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicy(ctx, operations.ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(223081),
            },
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("in"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        Resource: "rerum",
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicySecurity{
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

## ServicedirectoryProjectsLocationsNamespacesServicesList

Lists all services belonging to a namespace.

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
    res, err := s.Projects.ServicedirectoryProjectsLocationsNamespacesServicesList(ctx, operations.ServicedirectoryProjectsLocationsNamespacesServicesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("laborum"),
        Filter: sdk.String("accusamus"),
        Key: sdk.String("non"),
        OauthToken: sdk.String("occaecati"),
        OrderBy: sdk.String("enim"),
        PageSize: sdk.Int64(881736),
        PageToken: sdk.String("delectus"),
        Parent: "quidem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("id"),
    }, operations.ServicedirectoryProjectsLocationsNamespacesServicesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicesResponse != nil {
        // handle response
    }
}
```

## ServicedirectoryProjectsLocationsNamespacesServicesResolve

Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.

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
    res, err := s.Projects.ServicedirectoryProjectsLocationsNamespacesServicesResolve(ctx, operations.ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ResolveServiceRequest: &shared.ResolveServiceRequest{
            EndpointFilter: sdk.String("deleniti"),
            MaxEndpoints: sdk.Int(956084),
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("vel"),
        Key: sdk.String("natus"),
        Name: "Fernando Aufderhar",
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("labore"),
    }, operations.ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResolveServiceResponse != nil {
        // handle response
    }
}
```

## ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicy

Sets the IAM Policy for a resource (namespace or service only).

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
    res, err := s.Projects.ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicy(ctx, operations.ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("nobis"),
                            Expression: sdk.String("eum"),
                            Location: sdk.String("vero"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "magnam",
                        },
                        Role: sdk.String("et"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("excepturi"),
                            Expression: sdk.String("ullam"),
                            Location: sdk.String("provident"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "accusantium",
                            "mollitia",
                            "reiciendis",
                        },
                        Role: sdk.String("mollitia"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("ad"),
                            Expression: sdk.String("eum"),
                            Location: sdk.String("dolor"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "nemo",
                        },
                        Role: sdk.String("quasi"),
                    },
                },
                Etag: sdk.String("iure"),
                Version: sdk.Int(984043),
            },
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        Resource: "architecto",
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicySecurity{
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

## ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissions

Tests IAM permissions for a resource (namespace or service only).

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
    res, err := s.Projects.ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissions(ctx, operations.ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "repellat",
                "quibusdam",
            },
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        Resource: "magni",
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("quo"),
    }, operations.ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsSecurity{
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
