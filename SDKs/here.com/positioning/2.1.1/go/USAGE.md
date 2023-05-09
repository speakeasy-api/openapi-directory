<!-- Start SDK Example Usage -->
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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.APIInformation.GetAPIVersion(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIVersion != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->