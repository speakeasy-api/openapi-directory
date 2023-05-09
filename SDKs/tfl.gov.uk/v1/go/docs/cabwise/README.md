# Cabwise

### Available Operations

* [CabwiseGet](#cabwiseget) - Gets taxis and minicabs contact information

## CabwiseGet

Gets taxis and minicabs contact information

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
    res, err := s.Cabwise.CabwiseGet(ctx, operations.CabwiseGetRequest{
        ForceXML: sdk.Bool(false),
        Lat: 8326.2,
        LegacyFormat: sdk.Bool(false),
        Lon: 9571.56,
        MaxResults: sdk.Int(778157),
        Name: sdk.String("Teri Strosin"),
        Optype: sdk.String("quod"),
        Radius: sdk.Float64(8009.11),
        TwentyFourSevenOnly: sdk.Bool(false),
        Wc: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemObject != nil {
        // handle response
    }
}
```
