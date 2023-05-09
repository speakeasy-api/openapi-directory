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
    res, err := s.Forms.FindFormByFormName(ctx, operations.FindFormByFormNameRequest{
        FormName: "corrupti",
    }, operations.FindFormByFormNameSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FindFormByFormName200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->