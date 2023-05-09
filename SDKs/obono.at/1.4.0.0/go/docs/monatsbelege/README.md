# Monatsbelege

### Available Operations

* [GetMonatsbelege](#getmonatsbelege) - Returns a list of `Monatsbelege`.

## GetMonatsbelege

Returns a list of `Monatsbelege`.

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
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Monatsbelege.GetMonatsbelege(ctx, operations.GetMonatsbelegeRequest{
        Month: sdk.Int64(338007),
        RegistrierkasseUUID: "vitae",
        Year: sdk.Int64(674752),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Monatsbelegs != nil {
        // handle response
    }
}
```
