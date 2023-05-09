<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
            APISecret: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BuyANumber(ctx, shared.NumberDetails{
        Country: "GB",
        Msisdn: "447700900000",
        TargetAPIKey: sdk.String("1a2345b7"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->