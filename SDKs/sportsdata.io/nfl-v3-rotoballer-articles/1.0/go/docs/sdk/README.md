# SDK

### Available Operations

* [RotoballerArticles](#rotoballerarticles) - RotoBaller Articles
* [RotoballerArticlesByDate](#rotoballerarticlesbydate) - RotoBaller Articles by Date
* [RotoballerArticlesByPlayer](#rotoballerarticlesbyplayer) - RotoBaller Articles by Player

## RotoballerArticles

RotoBaller Articles

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RotoballerArticles(ctx, operations.RotoballerArticlesRequest{
        Format: operations.RotoballerArticlesFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Articles != nil {
        // handle response
    }
}
```

## RotoballerArticlesByDate

RotoBaller Articles by Date

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RotoballerArticlesByDate(ctx, operations.RotoballerArticlesByDateRequest{
        Date: "distinctio",
        Format: operations.RotoballerArticlesByDateFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Articles != nil {
        // handle response
    }
}
```

## RotoballerArticlesByPlayer

RotoBaller Articles by Player

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RotoballerArticlesByPlayer(ctx, operations.RotoballerArticlesByPlayerRequest{
        Format: operations.RotoballerArticlesByPlayerFormatEnumJSON,
        Playerid: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Articles != nil {
        // handle response
    }
}
```
