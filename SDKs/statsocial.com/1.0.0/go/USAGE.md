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
        }),
    )

    ctx := context.Background()
    res, err := s.Application.GetApplicationsStatus(ctx, operations.GetApplicationsStatusRequest{
        Key: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationStatus != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->