<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.FindFormByFormNameRequest{
        Security: operations.FindFormByFormNameSecurity{
            Apikey: shared.SchemeApikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.FindFormByFormNamePathParams{
            FormName: "sit",
        },
    }
    
    res, err := s.Forms.FindFormByFormName(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.FindFormByFormName200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->