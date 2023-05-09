# MarketsThisMarketplace

### Available Operations

* [GetMarketsThis](#getmarketsthis) - Returns the current marketplace

## GetMarketsThis

Returns the current marketplace

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.MarketsThisMarketplace.GetMarketsThis(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
