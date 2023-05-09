# Sitemaps

### Available Operations

* [WebmastersSitemapsDelete](#webmasterssitemapsdelete) - Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.
* [WebmastersSitemapsGet](#webmasterssitemapsget) - Retrieves information about a specific sitemap.
* [WebmastersSitemapsList](#webmasterssitemapslist) -  Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).
* [WebmastersSitemapsSubmit](#webmasterssitemapssubmit) - Submits a sitemap for a site.

## WebmastersSitemapsDelete

Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("temporibus"),
        Feedpath: "laborum",
        Fields: sdk.String("quasi"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        SiteURL: "nihil",
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("voluptatibus"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Feedpath: "perferendis",
        Fields: sdk.String("doloremque"),
        Key: sdk.String("reprehenderit"),
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        SiteURL: "dicta",
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("dolore"),
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

 Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        SiteURL: "ipsum",
        SitemapIndex: sdk.String("quidem"),
        UploadType: sdk.String("molestias"),
        UploadProtocol: sdk.String("excepturi"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("rem"),
        Feedpath: "voluptates",
        Fields: sdk.String("quasi"),
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        SiteURL: "itaque",
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("enim"),
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
