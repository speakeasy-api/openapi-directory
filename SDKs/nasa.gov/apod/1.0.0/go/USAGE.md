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
    res, err := s.RequestTag.GetApod(ctx, operations.GetApodRequest{
        Date: sdk.String("corrupti"),
        Hd: sdk.Bool(false),
    }, operations.GetApodSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApod200ApplicationJSONAnies != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->