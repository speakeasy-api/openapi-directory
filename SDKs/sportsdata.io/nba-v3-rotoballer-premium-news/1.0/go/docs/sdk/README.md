# SDK

### Available Operations

* [PremiumNews](#premiumnews) - Premium News
* [PremiumNewsByDate](#premiumnewsbydate) - Premium News by Date
* [PremiumNewsByPlayer](#premiumnewsbyplayer) - Premium News by Player

## PremiumNews

Premium News

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
    res, err := s.SDK.PremiumNews(ctx, operations.PremiumNewsRequest{
        Format: operations.PremiumNewsFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.News != nil {
        // handle response
    }
}
```

## PremiumNewsByDate

Premium News by Date

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
    res, err := s.SDK.PremiumNewsByDate(ctx, operations.PremiumNewsByDateRequest{
        Date: "distinctio",
        Format: operations.PremiumNewsByDateFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.News != nil {
        // handle response
    }
}
```

## PremiumNewsByPlayer

Premium News by Player

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
    res, err := s.SDK.PremiumNewsByPlayer(ctx, operations.PremiumNewsByPlayerRequest{
        Format: operations.PremiumNewsByPlayerFormatEnumJSON,
        Playerid: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.News != nil {
        // handle response
    }
}
```
