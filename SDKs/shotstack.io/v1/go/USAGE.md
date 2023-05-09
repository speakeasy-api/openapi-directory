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
    res, err := s.Edit.GetRender(ctx, operations.GetRenderRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    }, operations.GetRenderSecurity{
        DeveloperKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RenderResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->