# GlobalWineScore

### Available Operations

* [GetGlobalwinescoresLatest](#getglobalwinescoreslatest) - List all latest GWS
* [ListHistoricalGWS](#listhistoricalgws) - List all historical GWS

## GetGlobalwinescoresLatest

Returns the latest GWS available per wine/vintage.

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
            TokenAuthentication: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GlobalWineScore.GetGlobalwinescoresLatest(ctx, operations.GetGlobalwinescoresLatestRequest{
        Authorization: sdk.String("suscipit"),
        Color: operations.GetGlobalwinescoresLatestColorEnumWhite.ToPointer(),
        IsPrimeurs: sdk.Bool(false),
        Limit: sdk.Int64(297534),
        Lwin: sdk.String("debitis"),
        Lwin11: sdk.String("ipsa"),
        Offset: sdk.Int64(963663),
        Ordering: operations.GetGlobalwinescoresLatestOrderingEnumMinusDate.ToPointer(),
        Vintage: sdk.String("suscipit"),
        WineID: []int64{
            791725,
            812169,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListHistoricalGWS

Returns all available GWS

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
            TokenAuthentication: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GlobalWineScore.ListHistoricalGWS(ctx, operations.ListHistoricalGWSRequest{
        Authorization: sdk.String("voluptatum"),
        Color: operations.ListHistoricalGWSColorEnumWhite.ToPointer(),
        IsPrimeurs: sdk.Bool(false),
        Limit: sdk.Int64(568045),
        Lwin: sdk.String("nisi"),
        Lwin11: sdk.String("recusandae"),
        Offset: sdk.Int64(836079),
        Ordering: operations.ListHistoricalGWSOrderingEnumDate.ToPointer(),
        Vintage: sdk.String("quis"),
        WineID: []int64{
            648172,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
