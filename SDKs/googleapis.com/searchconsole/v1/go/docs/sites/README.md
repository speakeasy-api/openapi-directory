# Sites

### Available Operations

* [WebmastersSitesAdd](#webmasterssitesadd) -  Adds a site to the set of the user's sites in Search Console.
* [WebmastersSitesDelete](#webmasterssitesdelete) -  Removes a site from the set of the user's Search Console sites.
* [WebmastersSitesGet](#webmasterssitesget) -  Retrieves information about specific site.
* [WebmastersSitesList](#webmasterssiteslist) -  Lists the user's Search Console sites.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        SiteURL: "modi",
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("aliquid"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("assumenda"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        SiteURL: "dolorum",
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("tempora"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("eum"),
        Key: sdk.String("non"),
        OauthToken: sdk.String("eligendi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        SiteURL: "aliquid",
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("necessitatibus"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("a"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("maiores"),
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
