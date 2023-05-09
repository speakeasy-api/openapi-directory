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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataTools.BadWordFilter(ctx, operations.BadWordFilterRequestBody{
        Catalog: sdk.String("corrupti"),
        CensorCharacter: sdk.String("provident"),
        Content: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BadWordFilterResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->