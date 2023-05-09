# Projects

### Available Operations

* [IapProjectsBrandsCreate](#iapprojectsbrandscreate) - Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.
* [IapProjectsBrandsIdentityAwareProxyClientsCreate](#iapprojectsbrandsidentityawareproxyclientscreate) - Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.
* [IapProjectsBrandsIdentityAwareProxyClientsList](#iapprojectsbrandsidentityawareproxyclientslist) - Lists the existing clients for the brand.
* [IapProjectsBrandsIdentityAwareProxyClientsResetSecret](#iapprojectsbrandsidentityawareproxyclientsresetsecret) - Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.
* [IapProjectsBrandsList](#iapprojectsbrandslist) - Lists the existing brands for the project.
* [IapProjectsIapTunnelLocationsDestGroupsCreate](#iapprojectsiaptunnellocationsdestgroupscreate) - Creates a new TunnelDestGroup.
* [IapProjectsIapTunnelLocationsDestGroupsDelete](#iapprojectsiaptunnellocationsdestgroupsdelete) - Deletes a TunnelDestGroup.
* [IapProjectsIapTunnelLocationsDestGroupsGet](#iapprojectsiaptunnellocationsdestgroupsget) - Retrieves an existing TunnelDestGroup.
* [IapProjectsIapTunnelLocationsDestGroupsList](#iapprojectsiaptunnellocationsdestgroupslist) - Lists the existing TunnelDestGroups. To group across all locations, use a `-` as the location ID. For example: `/v1/projects/123/iap_tunnel/locations/-/destGroups`
* [IapProjectsIapTunnelLocationsDestGroupsPatch](#iapprojectsiaptunnellocationsdestgroupspatch) - Updates a TunnelDestGroup.

## IapProjectsBrandsCreate

Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.

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
    res, err := s.Projects.IapProjectsBrandsCreate(ctx, operations.IapProjectsBrandsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BrandInput: &shared.BrandInput{
            ApplicationTitle: sdk.String("debitis"),
            SupportEmail: sdk.String("ipsa"),
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("placeat"),
        Parent: "voluptatum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.IapProjectsBrandsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Brand != nil {
        // handle response
    }
}
```

## IapProjectsBrandsIdentityAwareProxyClientsCreate

Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.

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
    res, err := s.Projects.IapProjectsBrandsIdentityAwareProxyClientsCreate(ctx, operations.IapProjectsBrandsIdentityAwareProxyClientsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        IdentityAwareProxyClientInput: &shared.IdentityAwareProxyClientInput{
            DisplayName: sdk.String("temporibus"),
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ipsam"),
        Parent: "repellendus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
    }, operations.IapProjectsBrandsIdentityAwareProxyClientsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityAwareProxyClient != nil {
        // handle response
    }
}
```

## IapProjectsBrandsIdentityAwareProxyClientsList

Lists the existing clients for the brand.

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
    res, err := s.Projects.IapProjectsBrandsIdentityAwareProxyClientsList(ctx, operations.IapProjectsBrandsIdentityAwareProxyClientsListRequest{
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
    }, operations.IapProjectsBrandsIdentityAwareProxyClientsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIdentityAwareProxyClientsResponse != nil {
        // handle response
    }
}
```

## IapProjectsBrandsIdentityAwareProxyClientsResetSecret

Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.

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
    res, err := s.Projects.IapProjectsBrandsIdentityAwareProxyClientsResetSecret(ctx, operations.IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "deleniti": "hic",
        },
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("molestiae"),
        Name: "Norma Ryan",
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityAwareProxyClient != nil {
        // handle response
    }
}
```

## IapProjectsBrandsList

Lists the existing brands for the project.

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
    res, err := s.Projects.IapProjectsBrandsList(ctx, operations.IapProjectsBrandsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("laboriosam"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("in"),
    }, operations.IapProjectsBrandsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBrandsResponse != nil {
        // handle response
    }
}
```

## IapProjectsIapTunnelLocationsDestGroupsCreate

Creates a new TunnelDestGroup.

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
    res, err := s.Projects.IapProjectsIapTunnelLocationsDestGroupsCreate(ctx, operations.IapProjectsIapTunnelLocationsDestGroupsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TunnelDestGroup: &shared.TunnelDestGroup{
            Cidrs: []string{
                "iure",
                "saepe",
                "quidem",
            },
            Fqdns: []string{
                "ipsa",
            },
            Name: sdk.String("Carlton O'Hara"),
        },
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("omnis"),
        Parent: "nemo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        TunnelDestGroupID: sdk.String("excepturi"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("iure"),
    }, operations.IapProjectsIapTunnelLocationsDestGroupsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TunnelDestGroup != nil {
        // handle response
    }
}
```

## IapProjectsIapTunnelLocationsDestGroupsDelete

Deletes a TunnelDestGroup.

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
    res, err := s.Projects.IapProjectsIapTunnelLocationsDestGroupsDelete(ctx, operations.IapProjectsIapTunnelLocationsDestGroupsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("dolorem"),
        Name: "Carlos Ziemann",
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.IapProjectsIapTunnelLocationsDestGroupsDeleteSecurity{
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

## IapProjectsIapTunnelLocationsDestGroupsGet

Retrieves an existing TunnelDestGroup.

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
    res, err := s.Projects.IapProjectsIapTunnelLocationsDestGroupsGet(ctx, operations.IapProjectsIapTunnelLocationsDestGroupsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("vitae"),
        Key: sdk.String("laborum"),
        Name: "Bill Conn",
        OauthToken: sdk.String("tenetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.IapProjectsIapTunnelLocationsDestGroupsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TunnelDestGroup != nil {
        // handle response
    }
}
```

## IapProjectsIapTunnelLocationsDestGroupsList

Lists the existing TunnelDestGroups. To group across all locations, use a `-` as the location ID. For example: `/v1/projects/123/iap_tunnel/locations/-/destGroups`

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
    res, err := s.Projects.IapProjectsIapTunnelLocationsDestGroupsList(ctx, operations.IapProjectsIapTunnelLocationsDestGroupsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("reiciendis"),
        PageSize: sdk.Int64(976460),
        PageToken: sdk.String("vero"),
        Parent: "nihil",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.IapProjectsIapTunnelLocationsDestGroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTunnelDestGroupsResponse != nil {
        // handle response
    }
}
```

## IapProjectsIapTunnelLocationsDestGroupsPatch

Updates a TunnelDestGroup.

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
    res, err := s.Projects.IapProjectsIapTunnelLocationsDestGroupsPatch(ctx, operations.IapProjectsIapTunnelLocationsDestGroupsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TunnelDestGroup: &shared.TunnelDestGroup{
            Cidrs: []string{
                "cum",
                "perferendis",
            },
            Fqdns: []string{
                "reprehenderit",
            },
            Name: sdk.String("Shawna Carter"),
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("enim"),
        Key: sdk.String("accusamus"),
        Name: "Elvira Bergnaum",
        OauthToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UpdateMask: sdk.String("pariatur"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.IapProjectsIapTunnelLocationsDestGroupsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TunnelDestGroup != nil {
        // handle response
    }
}
```
