# Sites

### Available Operations

* [WebmastersSitesAdd](#webmasterssitesadd) - Adds a site to the set of the user's sites in Search Console.
* [WebmastersSitesDelete](#webmasterssitesdelete) - Removes a site from the set of the user's Search Console sites.
* [WebmastersSitesGet](#webmasterssitesget) - Retrieves information about specific site.
* [WebmastersSitesList](#webmasterssiteslist) - Lists the user's Search Console sites.

## WebmastersSitesAdd

Adds a site to the set of the user's sites in Search Console.

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
    res, err := s.Sites.WebmastersSitesAdd(ctx, operations.WebmastersSitesAddRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quis"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        SiteURL: "enim",
        UserIP: sdk.String("odit"),
    }, operations.WebmastersSitesAddSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## WebmastersSitesDelete

Removes a site from the set of the user's Search Console sites.

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
    res, err := s.Sites.WebmastersSitesDelete(ctx, operations.WebmastersSitesDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quo"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("tenetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        SiteURL: "id",
        UserIP: sdk.String("possimus"),
    }, operations.WebmastersSitesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## WebmastersSitesGet

Retrieves information about specific site.

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
    res, err := s.Sites.WebmastersSitesGet(ctx, operations.WebmastersSitesGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("aut"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        SiteURL: "laborum",
        UserIP: sdk.String("quasi"),
    }, operations.WebmastersSitesGetSecurity{
        Option1: &operations.WebmastersSitesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WmxSite != nil {
        // handle response
    }
}
```

## WebmastersSitesList

Lists the user's Search Console sites.

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
    res, err := s.Sites.WebmastersSitesList(ctx, operations.WebmastersSitesListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UserIP: sdk.String("praesentium"),
    }, operations.WebmastersSitesListSecurity{
        Option1: &operations.WebmastersSitesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SitesListResponse != nil {
        // handle response
    }
}
```
