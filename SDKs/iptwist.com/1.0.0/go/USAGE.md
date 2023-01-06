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
    
    req := operations.PostRequest{
        Security: operations.PostSecurity{
            APIKeyAuth: shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: shared.Request{
            IP: "consequatur",
        },
    }
    
    res, err := s.Main.Post(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->