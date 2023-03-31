<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.FindFormByFormNameRequest{
        FormName: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Forms.FindFormByFormName(ctx, req, operations.FindFormByFormNameSecurity{
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