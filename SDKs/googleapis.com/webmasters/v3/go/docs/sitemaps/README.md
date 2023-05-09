# Sitemaps

### Available Operations

* [WebmastersSitemapsDelete](#webmasterssitemapsdelete) - Deletes a sitemap from this site.
* [WebmastersSitemapsGet](#webmasterssitemapsget) - Retrieves information about a specific sitemap.
* [WebmastersSitemapsList](#webmasterssitemapslist) - Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).
* [WebmastersSitemapsSubmit](#webmasterssitemapssubmit) - Submits a sitemap for a site.

## WebmastersSitemapsDelete

Deletes a sitemap from this site.

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
    res, err := s.Sitemaps.WebmastersSitemapsDelete(ctx, operations.WebmastersSitemapsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Feedpath: "corporis",
        Fields: sdk.String("explicabo"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        SiteURL: "nemo",
        UserIP: sdk.String("minima"),
    }, operations.WebmastersSitemapsDeleteSecurity{
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

## WebmastersSitemapsGet

Retrieves information about a specific sitemap.

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
    res, err := s.Sitemaps.WebmastersSitemapsGet(ctx, operations.WebmastersSitemapsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Feedpath: "excepturi",
        Fields: sdk.String("accusantium"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        SiteURL: "sapiente",
        UserIP: sdk.String("architecto"),
    }, operations.WebmastersSitemapsGetSecurity{
        Option1: &operations.WebmastersSitemapsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WmxSitemap != nil {
        // handle response
    }
}
```

## WebmastersSitemapsList

Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).

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
    res, err := s.Sitemaps.WebmastersSitemapsList(ctx, operations.WebmastersSitemapsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        SiteURL: "repellat",
        SitemapIndex: sdk.String("mollitia"),
        UserIP: sdk.String("occaecati"),
    }, operations.WebmastersSitemapsListSecurity{
        Option1: &operations.WebmastersSitemapsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SitemapsListResponse != nil {
        // handle response
    }
}
```

## WebmastersSitemapsSubmit

Submits a sitemap for a site.

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
    res, err := s.Sitemaps.WebmastersSitemapsSubmit(ctx, operations.WebmastersSitemapsSubmitRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Feedpath: "numquam",
        Fields: sdk.String("commodi"),
        Key: sdk.String("quam"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        SiteURL: "error",
        UserIP: sdk.String("quia"),
    }, operations.WebmastersSitemapsSubmitSecurity{
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
