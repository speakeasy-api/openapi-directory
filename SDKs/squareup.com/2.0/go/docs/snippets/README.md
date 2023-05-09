# Snippets

### Available Operations

* [DeleteSnippet](#deletesnippet) - DeleteSnippet
* [RetrieveSnippet](#retrievesnippet) - RetrieveSnippet
* [UpsertSnippet](#upsertsnippet) - UpsertSnippet

## DeleteSnippet

Removes your snippet from a Square Online site.

You can call [ListSites](https://developer.squareup.com/reference/square_2021-08-18/sites-api/list-sites) to get the IDs of the sites that belong to a seller.


__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Snippets.DeleteSnippet(ctx, operations.DeleteSnippetRequest{
        SiteID: "ducimus",
    }, operations.DeleteSnippetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSnippetResponse != nil {
        // handle response
    }
}
```

## RetrieveSnippet

Retrieves your snippet from a Square Online site. A site can contain snippets from multiple snippet applications, but you can retrieve only the snippet that was added by your application.

You can call [ListSites](https://developer.squareup.com/reference/square_2021-08-18/sites-api/list-sites) to get the IDs of the sites that belong to a seller.


__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Snippets.RetrieveSnippet(ctx, operations.RetrieveSnippetRequest{
        SiteID: "vero",
    }, operations.RetrieveSnippetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveSnippetResponse != nil {
        // handle response
    }
}
```

## UpsertSnippet

Adds a snippet to a Square Online site or updates the existing snippet on the site. 
The snippet code is appended to the end of the `head` element on every page of the site, except checkout pages. A snippet application can add one snippet to a given site. 

You can call [ListSites](https://developer.squareup.com/reference/square_2021-08-18/sites-api/list-sites) to get the IDs of the sites that belong to a seller.


__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

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
    res, err := s.Snippets.UpsertSnippet(ctx, operations.UpsertSnippetRequest{
        UpsertSnippetRequest: shared.UpsertSnippetRequest{
            Snippet: shared.Snippet{
                Content: "repudiandae",
                CreatedAt: sdk.String("sapiente"),
                ID: sdk.String("168b6ccb-2822-4b4a-9850-ed2f4a1e9c4a"),
                SiteID: sdk.String("voluptates"),
                UpdatedAt: sdk.String("exercitationem"),
            },
        },
        SiteID: "ullam",
    }, operations.UpsertSnippetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpsertSnippetResponse != nil {
        // handle response
    }
}
```
