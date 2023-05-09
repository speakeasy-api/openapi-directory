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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GetTimestags(ctx, operations.GetTimestagsRequest{
        Filter: operations.GetTimestagsFilterEnumOrg.ToPointer(),
        Max: sdk.Int64(592845),
        Query: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTimestags200ApplicationJSONArrays != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->