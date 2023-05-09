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
    res, err := s.GETListsBestSellersHistoryJSON(ctx, operations.GETListsBestSellersHistoryJSONRequest{
        AgeGroup: sdk.String("corrupti"),
        Author: sdk.String("provident"),
        Contributor: sdk.String("distinctio"),
        Isbn: sdk.String("quibusdam"),
        Price: sdk.String("unde"),
        Publisher: sdk.String("nulla"),
        Title: sdk.String("Ms."),
    }, operations.GETListsBestSellersHistoryJSONSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETListsBestSellersHistoryJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->