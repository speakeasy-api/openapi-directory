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
    
    req := operations.AllAPIKeysRequest{
        Security: operations.AllAPIKeysSecurity{
            OtoroshiAuth: shared.SchemeOtoroshiAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
    }
    
    res, err := s.Apikeys.AllAPIKeys(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeys != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->