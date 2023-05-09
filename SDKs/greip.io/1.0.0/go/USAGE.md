<!-- Start SDK Example Usage -->
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
    res, err := s.GetASNLookup(ctx, operations.GetASNLookupRequest{
        Asn: "15169",
        Format: sdk.String("JSON"),
        IsList: sdk.String("no"),
        Key: "2517bc4fc3f790e8f09bc808bb63b899",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->