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
    res, err := s.GetResource(ctx, operations.GetResourceRequest{
        Name: "Terrence Rau",
    }, operations.GetResourceSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Resource != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->